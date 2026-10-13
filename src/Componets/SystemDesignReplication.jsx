import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Database,
  Server,
  Network,
  Split,
  Layers,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  Code,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Sparkles,
  GitBranch,
  ShieldCheck,
  Activity,
  Sliders,
  HelpCircle,
  FolderTree,
  Scale,
  RefreshCw,
  Clock,
  Send,
  Boxes,
  Lock,
  Globe,
  Cpu,
  Zap,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import {
  ReplicationTopologyDiagram,
  PartitioningShardingReplicationDiagram,
  ScatterGatherQueryDiagram,
  DistributedTransactionsDiagram,
  HotPartitionSkewDiagram,
  VisualDiagramComponentModule7,
} from "./SystemDesignReplicationDiagrams";

export default function SystemDesignReplication() {
  const navigate = useNavigate();

  // Navigation tab state
  const [activeTab, setActiveTab] = useState("curriculum"); // "curriculum" | "calculators" | "qa" | "project" | "assessment" | "reading"
  const [activeWeek, setActiveWeek] = useState(1); // 1 | 2 | 3
  const [activeLesson, setActiveLesson] = useState("7.1");

  // Expanded Q&A accordion states
  const [expandedQA, setExpandedQA] = useState({ "qa-1": true });
  const toggleQA = (id) => {
    setExpandedQA((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // ---------------------------------------------------------------------------
  // INTERACTIVE TOOL 1: SHARD CAPACITY & CLUSTER SIZING PLANNER
  // ---------------------------------------------------------------------------
  const [targetPeakRps, setTargetPeakRps] = useState(18000);
  const [measuredShardCapacity, setMeasuredShardCapacity] = useState(4000);
  const [utilizationTargetPct, setUtilizationTargetPct] = useState(70);

  const shardPlanningResults = useMemo(() => {
    const designCapacityPerShard = Math.round(
      measuredShardCapacity * (utilizationTargetPct / 100)
    );
    const initialShardCount = Math.ceil(targetPeakRps / (designCapacityPerShard || 1));
    const headroomFactor = (
      (initialShardCount * measuredShardCapacity) /
      targetPeakRps
    ).toFixed(2);

    return {
      designCapacityPerShard,
      initialShardCount,
      headroomFactor,
      clusterMaxRps: initialShardCount * measuredShardCapacity,
    };
  }, [targetPeakRps, measuredShardCapacity, utilizationTargetPct]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE TOOL 2: QUORUM CONSISTENCY & FAULT TOLERANCE EVALUATOR
  // ---------------------------------------------------------------------------
  const [replicationFactorN, setReplicationFactorN] = useState(3);
  const [writeQuorumW, setWriteQuorumW] = useState(2);
  const [readQuorumR, setReadQuorumR] = useState(2);

  const quorumAnalysis = useMemo(() => {
    const isStrictQuorum = readQuorumR + writeQuorumW > replicationFactorN;
    const writeFailureTolerance = replicationFactorN - writeQuorumW;
    const readFailureTolerance = replicationFactorN - readQuorumR;

    let consistencyLevel = "Weak / Eventual";
    if (isStrictQuorum) {
      if (writeQuorumW === replicationFactorN) {
        consistencyLevel = "Strong (Pessimistic Writes, Zero Read Quorum)";
      } else {
        consistencyLevel = "Strong Consistent (Intersecting Read/Write Quorum)";
      }
    }

    return {
      isStrictQuorum,
      writeFailureTolerance,
      readFailureTolerance,
      consistencyLevel,
      overlapCount: readQuorumR + writeQuorumW - replicationFactorN,
    };
  }, [replicationFactorN, writeQuorumW, readQuorumR]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE TOOL 3: SCATTER-GATHER FAN-OUT LATENCY SIMULATOR
  // ---------------------------------------------------------------------------
  const [fanOutShards, setFanOutShards] = useState(7);
  const [p50ShardLatency, setP50ShardLatency] = useState(25);
  const [tailOutlierLatency, setTailOutlierLatency] = useState(180);
  const [hasTailOutlier, setHasTailOutlier] = useState(true);

  const fanOutResults = useMemo(() => {
    const coordOverhead = 8;
    const netOverhead = 7;
    const mergeTime = 10;
    const effectiveSlowestShard = hasTailOutlier ? tailOutlierLatency : p50ShardLatency + 5;
    const totalLatency = coordOverhead + netOverhead + effectiveSlowestShard + mergeTime;

    return {
      coordOverhead,
      netOverhead,
      mergeTime,
      effectiveSlowestShard,
      totalLatency,
    };
  }, [p50ShardLatency, tailOutlierLatency, hasTailOutlier]);

  // ---------------------------------------------------------------------------
  // 9-QUESTION ASSESSMENT QUIZ STATE
  // ---------------------------------------------------------------------------
  const quizQuestions = [
    {
      id: 1,
      question: "What is the main purpose of replication?",
      options: [
        "Divide one table into monthly partitions",
        "Maintain copies of data for availability, recovery, read scaling, or geographic access",
        "Automatically make every query faster",
      ],
      correct: 1,
      explanation:
        "Replication maintains copies of data across multiple database nodes to provide high availability, failover redundancy, read workload distribution, and regional access. It does not partition tables or automatically optimize query execution plans.",
    },
    {
      id: 2,
      question: "What is the main difference between table partitioning and sharding?",
      options: [
        "Partitioning divides a logical dataset; sharding distributes data across database nodes or stores",
        "Partitioning always requires multiple servers",
        "Sharding only creates replicas",
      ],
      correct: 0,
      explanation:
        "Table partitioning divides a single logical table into sub-tables within one database engine for query pruning and retention. Sharding distributes dataset subsets across independently managed, separate database servers or clusters.",
    },
    {
      id: 3,
      question: "What is a major risk of asynchronous replication during failover?",
      options: [
        "The primary can never accept writes",
        "Some committed transactions may not have reached the promoted replica",
        "Every read must scan every shard",
      ],
      correct: 1,
      explanation:
        "Because the primary acknowledges transactions without waiting for asynchronous standbys to confirm disk persistence, any un-replicated WAL records are permanently lost if the primary abruptly dies before transmitting them.",
    },
    {
      id: 4,
      question:
        "Which partitioning strategy is a natural candidate for a large time-series table with frequent date-bounded queries?",
      options: [
        "Range partitioning by timestamp",
        "List partitioning by random description text",
        "Replication without partitioning",
      ],
      correct: 0,
      explanation:
        "Range partitioning by timestamp (`created_at`) enables the query planner to prune untouched historical months completely, accelerating date-filtered queries and enabling instant retention drops via `DROP TABLE ... PARTITION`.",
    },
    {
      id: 5,
      question: "What is a hot shard?",
      options: [
        "A shard that receives disproportionately high traffic or resource demand",
        "A shard with the most backups",
        "A shard that contains only old records",
      ],
      correct: 0,
      explanation:
        "A hot shard is a database node that receives an excessive concentration of reads or writes due to low-cardinality keys or popular institutional tenants, becoming a bottleneck even when the rest of the cluster is idle.",
    },
    {
      id: 6,
      question: "Why can scatter-gather queries become expensive?",
      options: [
        "They never return results",
        "They access multiple shards and must coordinate or combine their results",
        "They automatically disable indexes",
      ],
      correct: 1,
      explanation:
        "Scatter-gather queries broadcast requests across all participating shards, generating high network fan-out and waiting for the single slowest tail-latency shard before merging and aggregating results.",
    },
    {
      id: 7,
      question: "What does the simplified quorum condition R + W > N express?",
      options: [
        "A sufficient overlap between read and write replica sets under specific quorum assumptions",
        "The number of shards a SQL query must contact",
        "A universal guarantee for every distributed database",
      ],
      correct: 0,
      explanation:
        "By the pigeonhole principle, if the number of read nodes (R) plus write nodes (W) exceeds the replication factor (N), at least one node in the read set is guaranteed to have participated in the latest acknowledged write.",
    },
    {
      id: 8,
      question: "What is a primary purpose of a shard key?",
      options: [
        "Determine where a record is stored and help route queries to the appropriate shard",
        "Replace all indexes",
        "Guarantee that every transaction remains local",
      ],
      correct: 0,
      explanation:
        "The shard key (e.g. `user_id`) is hashed or evaluated by the router to map rows to specific physical nodes, enabling fast single-shard targeted queries without contacting other cluster members.",
    },
    {
      id: 9,
      question: "What is the difference between RPO and RTO?",
      options: [
        "RPO concerns the acceptable data-loss window; RTO concerns the target time to restore service",
        "RPO measures query latency; RTO measures database storage size",
        "They mean the same thing",
      ],
      correct: 0,
      explanation:
        "Recovery Point Objective (RPO) is the maximum tolerated duration of lost transactions during a disaster (e.g. at most 5 seconds of lost writes). Recovery Time Objective (RTO) is the target duration required to bring the system back online.",
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
  // CAPSTONE PROJECT PROGRESS TRACKING (9 DELIVERABLES)
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
    deliv9: false,
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
      title: "How do you solve the Read-After-Write inconsistency when using Read Replicas?",
      context:
        "A student submits an assignment or edits their profile, but when redirected to the dashboard, their update is missing because the read query hit a lagging replica.",
      answer:
        "Production systems resolve this using one of three standard strategies: (1) Primary Read Routing: Route the user's subsequent reads to the Primary DB for a bounded time window (e.g. 5 seconds via a session flag or cookie). (2) Replication Position Tracking (Causal Consistency): The primary returns the committed LSN (Log Sequence Number). The application queries the replica with `WHERE pg_last_wal_replay_lsn() >= :committed_lsn` or waits until it catches up. (3) Bounded Staleness: Health checks immediately drain replicas from the pool if replay lag exceeds 100ms.",
    },
    {
      id: "qa-2",
      title: "Why does Two-Phase Commit (2PC) introduce high latency and lock contention?",
      context:
        "A financial or checkout workflow requires updating multiple independent shards simultaneously.",
      answer:
        "In 2PC, every participant shard must acquire exclusive row locks during the 'Prepare' phase and hold them across network round-trips until the Coordinator decides to 'Commit'. If network latency between shards is 15ms, locks are held for at least 30–50ms per transaction. This drastically reduces throughput, risks distributed deadlocks, and if the Coordinator crashes between phases, participants remain blocked in a doubtful state indefinitely.",
    },
    {
      id: "qa-3",
      title: "How does Consistent Hashing with Virtual Nodes prevent data cascading during resharding?",
      context:
        "Moving from 4 shards to 5 shards using naive `hash(key) % N` causes ~80% of all existing keys to map to different physical nodes.",
      answer:
        "Naive modulo sharding invalidates nearly the entire cluster when N increments. Consistent hashing places both nodes and keys on a circular 32-bit or 64-bit ring. When a new node is added, it only takes ownership of keys from its immediate neighbor (moving only $K/N$ keys). Assigning 100–256 'Virtual Nodes' (vnodes) per physical machine ensures that incoming keys and partition migration loads are distributed uniformly across all existing nodes rather than burdening a single neighbor.",
    },
    {
      id: "qa-4",
      title: "How do distributed SQL engines like Google Cloud Spanner and CockroachDB preserve external consistency?",
      context:
        "Executing serializable ACID transactions across multiple geographic regions without centralized lock managers.",
      answer:
        "Google Cloud Spanner uses TrueTime (atomic clocks and GPS receivers with bounded uncertainty $\\epsilon \\le 7\\text{ms}$) to assign globally monotonic commit timestamps. If transaction T2 starts after T1 commits in real time, T2's timestamp is guaranteed to be strictly greater than T1's. Concurrently, data tables are dynamically divided into 'Splits' (ranges) and replicated across Paxos consensus groups. CockroachDB implements a similar hybrid logical clock (HLC) with Multi-Raft consensus per range.",
    },
    {
      id: "qa-5",
      title: "What is Split-Brain syndrome, and how does STONITH / Quorum prevent it?",
      context:
        "A network partition isolates the Primary from the Standby, and both nodes claim to be the authoritative write leader.",
      answer:
        "Split-brain occurs when two nodes simultaneously accept writes for the same logical records, causing irreversible data divergence. High-availability clusters prevent this via Quorum Consensus (requiring $(N/2)+1$ votes, e.g. 3 nodes minimum) so an isolated node cannot win an election. Furthermore, automated failover engines (e.g. Patroni, Pacemaker) execute STONITH ('Shoot The Other Node In The Head') via IPMI or cloud API calls to forcefully terminate the old primary before promoting the standby.",
    },
    {
      id: "qa-6",
      title: "When should you NOT shard a database, even if table row counts exceed 50 million?",
      context:
        "An engineering team prematurely proposes horizontal sharding for an analytics or catalog database.",
      answer:
        "You should not shard if: (1) The dataset fits in memory on a single high-memory instance (e.g. AWS `r6g.16xlarge` with 512GB RAM). (2) Declarative table partitioning by range or list provides sufficient query pruning and maintenance drops. (3) The workload is read-heavy and can be offloaded to read replicas and distributed caching (Redis). Sharding introduces cross-shard join overhead, distributed transaction complexity, resharding operational debt, and difficult backups. It is a last resort for extreme write concurrency or massive data volume.",
    },
  ];

  // ---------------------------------------------------------------------------
  // 16 LESSONS CURRICULUM DATA
  // ---------------------------------------------------------------------------
  const lessons = [
    // WEEK 1
    {
      id: "7.1",
      week: 1,
      title: "Replication Fundamentals",
      summary:
        "Maintain copies of data across multiple database nodes for high availability, disaster recovery, and read scaling.",
      diagram: "replication-topology",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            Replication maintains copies of data across multiple database nodes or instances. A standard topology consists of one authoritative <strong>Primary Database</strong> that accepts writes, and one or more <strong>Replicas (Standbys)</strong> that receive change streams from the primary.
          </p>
          <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-4 text-xs font-mono">
            <code>
              Write Request &rarr; Primary DB (WAL Commit) &rarr; Streaming WAL &rarr; Replicas (Replay WAL)
            </code>
          </div>
          <h4 className="font-bold text-stone-900 text-base mt-4">Why Replicate a Database?</h4>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-stone-600">
            <li><strong>High Availability (HA):</strong> Standby nodes can take over when the primary crashes.</li>
            <li><strong>Read Scaling:</strong> Move intensive read queries off the primary to prevent CPU exhaustion.</li>
            <li><strong>Disaster Recovery (DR):</strong> Replicate data to a geographically distinct cloud region.</li>
            <li><strong>Operational Isolation:</strong> Run ETL, reporting, and backup dumps on isolated replicas.</li>
          </ul>
          <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-3.5 text-xs text-amber-900">
            <strong>Critical Concept:</strong> A replica is <em>never</em> a substitute for backups. If an engineer executes <code>DROP TABLE users;</code>, the deletion replicates to all replicas within milliseconds.
          </div>
        </div>
      ),
    },
    {
      id: "7.2",
      week: 1,
      title: "Primary-Replica Replication",
      summary:
        "Deep comparison of Asynchronous vs. Synchronous replication protocols, durability guarantees, and commit latencies.",
      diagram: "replication-topology",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            Primary-replica replication separates write responsibilities from read queries. The fundamental engineering choice is between <strong>Asynchronous</strong> and <strong>Synchronous</strong> replication.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl border border-stone-200 bg-white">
              <span className="font-bold text-stone-900 block mb-1">Asynchronous Replication</span>
              <p className="text-stone-600">
                Primary commits locally and returns ACK to the client immediately. WAL records stream in the background. Write latency is minimal, but un-replicated commits will be permanently lost if the primary host dies.
              </p>
            </div>
            <div className="p-3 rounded-xl border border-stone-200 bg-white">
              <span className="font-bold text-stone-900 block mb-1">Synchronous Replication</span>
              <p className="text-stone-600">
                Primary holds client commit acknowledgement until at least one configured standby confirms durable disk flush. Protects against data loss during failover, but adds network round-trip time (RTT) to every write.
              </p>
            </div>
          </div>
          <p className="text-xs text-stone-600">
            In PostgreSQL, <code>synchronous_commit = on</code> guarantees that WAL records are flushed to disk on the standby before the transaction returns success to the application.
          </p>
        </div>
      ),
    },
    {
      id: "7.3",
      week: 1,
      title: "Physical vs. Logical Replication",
      summary:
        "Write-Ahead Log (WAL) byte-level streaming versus publication/subscription table changes and Change-Data Capture (CDC).",
      diagram: "replication-topology",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            Databases move data between nodes using two distinct internal mechanisms:
          </p>
          <div className="space-y-2 text-xs">
            <div className="p-3 rounded-xl border border-stone-200 bg-white">
              <strong className="text-stone-900 block">Physical Replication (WAL Streaming)</strong>
              <p className="text-stone-600 mt-1">
                Replays exact byte-level storage disk pages and WAL records. The replica is an exact byte-for-byte clone of the primary cluster. Ideal for high availability and hot standbys. Standbys must run identical database major versions.
              </p>
            </div>
            <div className="p-3 rounded-xl border border-stone-200 bg-white">
              <strong className="text-stone-900 block">Logical Replication (Publication / Subscription)</strong>
              <p className="text-stone-600 mt-1">
                Replicates table-level row changes (INSERT, UPDATE, DELETE) encoded as logical events. Allows selective table replication, replicating between different major versions, and feeding downstream systems.
              </p>
            </div>
          </div>
          <h4 className="font-bold text-stone-900 text-base mt-3">Change-Data Capture (CDC)</h4>
          <p className="text-xs text-stone-600">
            Using Debezium and Apache Kafka, logical replication streams database mutations into event queues to update search indexes (Elasticsearch), invalidate Redis caches, and hydrate data lakes.
          </p>
        </div>
      ),
    },
    {
      id: "7.4",
      week: 1,
      title: "Replication Lag & Read Consistency",
      summary:
        "The physics of replication lag, the read-after-write anomaly, and production consistency strategies.",
      diagram: "replication-topology",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            <strong>Replication Lag</strong> is the duration between when a transaction commits on the primary and when its results become visible on a replica.
          </p>
          <h4 className="font-bold text-stone-900 text-base">The Read-After-Write Problem</h4>
          <p className="text-xs text-stone-600">
            An instructor edits a course description. The write commits to the primary. When the browser reloads, the load balancer routes the read to a replica lagging by 80ms. The instructor sees their old course title and submits a duplicate edit or files a bug.
          </p>
          <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-4 text-xs font-mono space-y-1">
            <span className="text-stone-500 font-bold block">Production Consistency Strategies:</span>
            <div>1. Primary Read Routing for user-initiated mutations (5-second sticky cookie)</div>
            <div>2. LSN / Replication Position Tracking (Query replica only when replay &ge; write LSN)</div>
            <div>3. Bounded Staleness circuit breakers (Evict replicas lagging &gt; 100ms)</div>
          </div>
        </div>
      ),
    },
    {
      id: "7.5",
      week: 1,
      title: "Failover, Quorum, & Split-Brain Prevention",
      summary:
        "Automated leader election, fencing dead primaries, RPO vs. RTO calculations, and why replication is not backup.",
      diagram: "replication-topology",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            When a primary database crashes, the cluster must promote a healthy standby to become the authoritative write leader.
          </p>
          <h4 className="font-bold text-stone-900 text-base">Split-Brain Syndrome</h4>
          <p className="text-xs text-stone-600">
            If a network partition isolates Node A from Node B, and both believe the other is dead, both may accept writes independently. Their transaction histories permanently diverge.
          </p>
          <div className="p-3 rounded-xl border border-red-200 bg-red-50/70 text-xs text-red-900">
            <strong>Prevention:</strong> Always deploy an odd number of consensus participants (e.g. 3 or 5 voting nodes in Patroni/etcd). A candidate requires a majority quorum $\lfloor N/2 \rfloor + 1$ to promote. Use STONITH to forcefully power off the old primary.
          </div>
          <h4 className="font-bold text-stone-900 text-base mt-3">RPO vs. RTO Defined</h4>
          <ul className="list-disc pl-5 space-y-1 text-xs text-stone-600">
            <li><strong>RPO (Recovery Point Objective):</strong> Maximum tolerated lost data window (e.g. &le; 5 seconds).</li>
            <li><strong>RTO (Recovery Time Objective):</strong> Maximum duration required to restore operational service (e.g. &le; 2 minutes).</li>
          </ul>
        </div>
      ),
    },

    // WEEK 2
    {
      id: "7.6",
      week: 2,
      title: "Database Partitioning",
      summary:
        "Declarative table partitioning in PostgreSQL: Range, List, and Hash partitioning with query partition pruning.",
      diagram: "partitioning-matrix",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            Table partitioning divides <strong>one logical table</strong> on a single database engine into smaller physical sub-tables according to a partition key.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-lg border border-stone-200 bg-white">
              <strong className="text-stone-900 block">Range Partitioning</strong>
              <span className="text-stone-500 text-[11px] block mt-1">Key intervals (e.g. timestamp by month). Ideal for event logs and audit streams.</span>
            </div>
            <div className="p-3 rounded-lg border border-stone-200 bg-white">
              <strong className="text-stone-900 block">List Partitioning</strong>
              <span className="text-stone-500 text-[11px] block mt-1">Discrete enumerated values (e.g. country code &apos;US&apos;, &apos;IN&apos;, &apos;EU&apos;).</span>
            </div>
            <div className="p-3 rounded-lg border border-stone-200 bg-white">
              <strong className="text-stone-900 block">Hash Partitioning</strong>
              <span className="text-stone-500 text-[11px] block mt-1">Modulo on hashed key remainder (e.g. user_id % 4) for even physical file spread.</span>
            </div>
          </div>
          <h4 className="font-bold text-stone-900 text-base mt-2">Partition Pruning</h4>
          <p className="text-xs text-stone-600">
            When executing <code>SELECT * FROM activity WHERE created_at &gt;= &apos;2026-10-01&apos;</code>, the PostgreSQL query optimizer inspects partition constraints and skips scanning all partitions from prior months completely.
          </p>
        </div>
      ),
    },
    {
      id: "7.7",
      week: 2,
      title: "Sharding: Distributing Data Across Nodes",
      summary:
        "Horizontal distribution across independent database servers, shard routers, and shard-key design trade-offs.",
      diagram: "partitioning-matrix",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            While table partitioning divides data inside one database engine, <strong>Sharding</strong> distributes records across separate, independently operating database servers or clusters.
          </p>
          <h4 className="font-bold text-stone-900 text-base">Choosing a Shard Key</h4>
          <p className="text-xs text-stone-600">
            The shard key determines data placement. Evaluate candidates across:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs text-stone-600">
            <li><strong>High Cardinality:</strong> Millions of unique values (e.g. <code>user_id</code> vs. low-cardinality <code>gender</code>).</li>
            <li><strong>Query Locality:</strong> 90%+ of transactional queries should filter by the shard key to avoid scatter-gather.</li>
            <li><strong>Write Uniformity:</strong> Avoid sequential timestamps as shard keys, which concentrate writes on the highest shard.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "7.8",
      week: 2,
      title: "Partitioning vs. Sharding vs. Replication",
      summary:
        "The definitive mental model distinguishing the three concepts, and how to combine them in production architectures.",
      diagram: "partitioning-matrix",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            Engineers often confuse these terms in system design interviews. Here is the canonical distinction:
          </p>
          <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-4 text-xs font-mono space-y-2">
            <div><strong>Replication:</strong> Keep identical copies of data on multiple nodes (Availability &amp; Read Scaling).</div>
            <div><strong>Partitioning:</strong> Divide one table into sub-tables within one database engine (Query Pruning &amp; Retention).</div>
            <div><strong>Sharding:</strong> Split a dataset across separate physical database servers (Horizontal Write &amp; Storage Scaling).</div>
          </div>
          <p className="text-xs text-stone-600">
            <strong>Combined Real-World Architecture:</strong> Shard 10M users across 4 database clusters &rarr; partition each shard&apos;s activity table by month &rarr; replicate each shard across 3 Availability Zones.
          </p>
        </div>
      ),
    },
    {
      id: "7.9",
      week: 2,
      title: "Distributed Query Processing",
      summary:
        "Targeted queries, scatter-gather aggregations, fan-out network physics, and distributed join strategies.",
      diagram: "scatter-gather",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            When data is sharded, queries fall into two operational categories:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-lg border border-stone-200 bg-white">
              <strong className="text-stone-900 block">Targeted Query (Single Shard)</strong>
              <p className="text-stone-600 mt-1">
                <code>SELECT * FROM users WHERE user_id = 42;</code><br />
                Router evaluates hash(42) and sends request directly to Shard 2. Fast, predictable, and local.
              </p>
            </div>
            <div className="p-3 rounded-lg border border-stone-200 bg-white">
              <strong className="text-stone-900 block">Scatter-Gather (Multi-Shard Fan-out)</strong>
              <p className="text-stone-600 mt-1">
                <code>SELECT COUNT(*) FROM submissions;</code><br />
                Coordinator broadcasts to all shards, waits for partial counts, and sums them. Latency is bounded by the slowest shard.
              </p>
            </div>
          </div>
          <h4 className="font-bold text-stone-900 text-base mt-2">Fan-Out Latency Math</h4>
          <p className="text-xs text-stone-600">
            If 7 shards execute in 25ms but 1 shard encounters a garbage collection pause and takes 180ms, total query latency surges from 50ms to 205ms:
          </p>
          <div className="rounded-lg border border-stone-200 bg-[#faf8f4] p-2.5 font-mono text-xs text-stone-800">
            T = T_coordinator (8ms) + T_network (7ms) + max(T_shard) (180ms) + T_merge (10ms) = 205ms
          </div>
        </div>
      ),
    },
    {
      id: "7.10",
      week: 2,
      title: "Distributed Transactions & Sagas",
      summary:
        "The cross-shard update dilemma: Two-Phase Commit (2PC) atomic protocol vs. Saga Compensating Transactions.",
      diagram: "distributed-transactions",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            When a single business operation updates rows residing on two different shards, standard single-node ACID transactions no longer apply.
          </p>
          <div className="space-y-2 text-xs">
            <div className="p-3 rounded-xl border border-stone-200 bg-white">
              <strong className="text-stone-900 block">Two-Phase Commit (2PC)</strong>
              <p className="text-stone-600 mt-1">
                Phase 1 (Prepare): All participants lock rows and vote. Phase 2 (Commit): Coordinator instructs commit. Strong atomicity, but holds database locks across network RTTs and blocks indefinitely if the coordinator fails.
              </p>
            </div>
            <div className="p-3 rounded-xl border border-stone-200 bg-white">
              <strong className="text-stone-900 block">Saga Pattern (Compensating Actions)</strong>
              <p className="text-stone-600 mt-1">
                Series of local transactions. If step 3 fails, compensating transactions are dispatched backward to undo steps 2 and 1 (e.g. releasing reserved seats). Avoids long locks, but exposes intermediate states.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "7.11",
      week: 2,
      title: "Consistency Models in Distributed Databases",
      summary:
        "Strong vs. Eventual consistency, Quorum math (R + W > N), and practical application of the CAP Theorem.",
      diagram: "replication-topology",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            Distributed databases navigate trade-offs between write latency, availability during network partitions, and data freshness.
          </p>
          <h4 className="font-bold text-stone-900 text-base">Quorum Mathematics ($R + W &gt; N$)</h4>
          <p className="text-xs text-stone-600">
            For replication factor $N$, requiring $W$ nodes to acknowledge a write and $R$ nodes to respond to a read ensures intersection:
          </p>
          <div className="rounded-lg border border-stone-200 bg-[#faf8f4] p-3 text-xs font-mono">
            N = 3, W = 2, R = 2 &rarr; R + W = 4 &gt; 3 (Guarantees at least 1 overlapping node has the latest write)
          </div>
          <p className="text-xs text-stone-600">
            In Apache Cassandra, specifying <code>CONSISTENCY QUORUM</code> achieves strong consistency, while <code>CONSISTENCY ONE</code> optimizes for lowest write latency with eventual convergence.
          </p>
        </div>
      ),
    },
    {
      id: "7.12",
      week: 2,
      title: "Distributed SQL & Modern Databases",
      summary:
        "Google Cloud Spanner, CockroachDB, TrueTime atomic clocks, Multi-Raft consensus, and Distributed SQL vs. App Sharding.",
      diagram: "distributed-transactions",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            Distributed SQL engines provide a standard relational SQL interface with full ACID transactions while automatically distributing and replicating data across nodes.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-stone-600">
            <li><strong>Google Cloud Spanner:</strong> Uses TrueTime (atomic clocks + GPS) to provide externally consistent transactions without central coordination. Tables are partitioned into splits replicated via Paxos.</li>
            <li><strong>CockroachDB:</strong> Range-based data distribution using Multi-Raft consensus and hybrid logical clocks (HLC).</li>
          </ul>
          <p className="text-xs text-stone-600">
            Unlike manual application sharding where developers write router middleware, Distributed SQL handles routing, distributed query execution, and rebalancing internally in the database engine.
          </p>
        </div>
      ),
    },

    // WEEK 3
    {
      id: "7.13",
      week: 3,
      title: "Hot Partitions, Key Skew & Workloads",
      summary:
        "Detecting and resolving key skew, the 8,000 RPS 4-shard bottleneck example, and key salting techniques.",
      diagram: "hot-partition-skew",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            Distributing records evenly across shards does <strong>not</strong> guarantee evenly distributed traffic. A system can have millions of rows per shard and still crash due to a single hot key.
          </p>
          <h4 className="font-bold text-stone-900 text-base">Worked 8,000 RPS Bottleneck</h4>
          <p className="text-xs text-stone-600">
            Suppose 4 shards each sustain 2,000 RPS (8,000 RPS total). Shards A, B, and C receive ~1,600 RPS, but Shard D receives 3,200 RPS because it hosts an enterprise university account. Shard D saturates at 160% capacity and drops queries, even though the cluster aggregate utilization is only 75%.
          </p>
          <div className="p-3 rounded-xl border border-stone-200 bg-[#faf8f4] text-xs font-mono">
            <strong>Key Salting Fix:</strong> Append a random suffix: <code>org_id + &apos;_&apos; + rand(0, 3)</code>, spreading writes across 4 shards. Reads query all 4 salted keys in parallel and merge.
          </div>
        </div>
      ),
    },
    {
      id: "7.14",
      week: 3,
      title: "Shard Routing & Resharding",
      summary:
        "Modulo routing vs. Consistent Hashing vs. Directory-based routing, and zero-downtime resharding migration workflows.",
      diagram: "partitioning-matrix",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            How does an application know which database instance holds user 101?
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-stone-600">
            <li><strong>Fixed Hash Routing:</strong> <code>shard = hash(key) % N</code>. Simple, but resharding when N changes requires moving almost all keys.</li>
            <li><strong>Consistent Hashing:</strong> Nodes and keys map to a hash ring. Adding a shard moves only $K/N$ keys from adjacent nodes.</li>
            <li><strong>Directory-Based (Lookup) Routing:</strong> A central metadata service tracks explicit mappings (e.g. <code>tenant_101 &rarr; shard_B</code>). Highly flexible, but requires caching and high directory availability.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "7.15",
      week: 3,
      title: "Multi-Region Databases & Placement",
      summary:
        "Global data placement, cross-region replication latency, regional data residency compliance (GDPR), and multi-master trade-offs.",
      diagram: "replication-topology",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            Deploying databases across global regions minimizes read latency for international students and provides disaster tolerance against regional cloud outages.
          </p>
          <h4 className="font-bold text-stone-900 text-base">Key Architecture Patterns</h4>
          <ul className="list-disc pl-5 space-y-1 text-xs text-stone-600">
            <li><strong>Single Write Leader with Regional Read Replicas:</strong> All writes travel to us-east-1. Europe and Asia standbys serve local reads asynchronously.</li>
            <li><strong>Multi-Region Active-Active:</strong> Amazon DynamoDB Global Tables or Spanner. Writes accepted locally in every region with asynchronous or Paxos synchronization. Requires Last-Write-Wins (LWW) or CRDT conflict resolution.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "7.16",
      week: 3,
      title: "Replication & CAP Theorem in Practice",
      summary:
        "Real-world network partition scenarios, operational consistency choices by business workflow, and audit checklists.",
      diagram: "replication-topology",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            The CAP theorem states that during a network partition, a distributed system must choose between <strong>Linearizable Consistency (CP)</strong> or <strong>Availability (AP)</strong>.
          </p>
          <h4 className="font-bold text-stone-900 text-base">Consistency Choices by PrepSpaces Operation</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-stone-200 mt-2">
              <thead className="bg-[#faf8f4] text-stone-700 font-bold border-b border-stone-200">
                <tr>
                  <th className="p-2">Operation</th>
                  <th className="p-2">Recommended Model</th>
                  <th className="p-2">Engineering Rationale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                <tr>
                  <td className="p-2 font-medium">Browse Course Catalog</td>
                  <td className="p-2 text-amber-700 font-bold">Eventual Consistency (AP)</td>
                  <td className="p-2 text-stone-600">Stale description for 5 seconds causes zero harm; high availability is priority.</td>
                </tr>
                <tr>
                  <td className="p-2 font-medium">Course Checkout / Payment</td>
                  <td className="p-2 text-emerald-700 font-bold">Strong Consistency (CP)</td>
                  <td className="p-2 text-stone-600">Double charging or over-subscribing seats must be strictly prevented.</td>
                </tr>
                <tr>
                  <td className="p-2 font-medium">Lesson Video Progress Checkpoint</td>
                  <td className="p-2 text-blue-700 font-bold">Session Consistency</td>
                  <td className="p-2 text-stone-600">Student must see their own checkpoint immediately; other devices can lag by seconds.</td>
                </tr>
                <tr>
                  <td className="p-2 font-medium">Global Course Popularity Counter</td>
                  <td className="p-2 text-amber-700 font-bold">Eventual Consistency (AP)</td>
                  <td className="p-2 text-stone-600">Approximate views buffer in Redis; exact synchronized counter would bottle writes.</td>
                </tr>
              </tbody>
            </table>
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
          currentModuleId="replication"
          aiTutorLabel="Ask Distributed DB AI"
        />

        {/* Hero Section */}
        <div className="mb-8 rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs backdrop-blur-md">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3 py-0.5 text-[11px] font-mono font-bold uppercase tracking-wider text-orange-700">
              <Database size={12} className="text-[#f97316]" />
              System Design Masterclass · Module 7
            </span>
            <span className="rounded-full border border-stone-200 bg-stone-50 px-2.5 py-0.5 text-[11px] font-mono text-stone-600">
              Distributed Databases · High Availability, Scalability &amp; Placement
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900 leading-tight">
            Database Replication, Partitioning, Sharding, and Distributed Queries
          </h1>
          <p className="mt-3 text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
            Master the engineering principles of horizontal scaling: primary-replica streaming, synchronous commits,
            declarative table partitioning in PostgreSQL, horizontal sharding, distributed query routing, two-phase commit,
            and quorum consistency guarantees.
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
              <span className="text-xs sm:text-sm font-bold text-stone-900">Modules 1–6</span>
              <span className="text-[10px] text-stone-500 block">SQL, Caching &amp; APIs</span>
            </div>
            <div className="rounded-xl bg-[#faf8f4] p-3 border border-[#e7e3da]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">Core Engines</span>
              <span className="text-xs sm:text-sm font-bold text-stone-900">PostgreSQL, Spanner</span>
              <span className="text-[10px] text-stone-500 block">Replication &amp; Sharding</span>
            </div>
            <div className="rounded-xl bg-[#faf8f4] p-3 border border-[#e7e3da]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">Final Project</span>
              <span className="text-xs sm:text-sm font-bold text-stone-900">Distributed DB</span>
              <span className="text-[10px] text-orange-600 font-bold block">Design, Simulate, Validate</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#e7e3da] mb-8 overflow-x-auto no-scrollbar gap-2">
          {[
            { id: "curriculum", label: "Curriculum & Lessons", count: "16 Lessons", icon: BookOpen },
            { id: "calculators", label: "Capacity & Quorum Tools", count: "3 Simulators", icon: Sliders },
            { id: "qa", label: "Production Q&A", count: "6 Scenarios", icon: HelpCircle },
            { id: "project", label: "Capstone Project", count: "5 Phases", icon: FolderTree },
            { id: "assessment", label: "Module 7 Quiz", count: "9 Questions", icon: ShieldCheck },
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
        {/* TAB 1: CURRICULUM & 16 LESSONS                                     */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "curriculum" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Lesson Selector */}
            <div className="lg:col-span-4 space-y-4">
              {/* Week Selector */}
              <div className="flex rounded-xl border border-stone-200 bg-white p-1 shadow-xs">
                {[
                  { num: 1, label: "Week 1: Replication & HA" },
                  { num: 2, label: "Week 2: Partitioning & Sharding" },
                  { num: 3, label: "Week 3: Skew & Production" },
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
                      Module 7 · Week {currentLessonData.week} · Lesson {currentLessonData.id}
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
                  <VisualDiagramComponentModule7 diagramType={currentLessonData.diagram} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 2: INTERACTIVE CAPACITY & QUORUM CALCULATORS                   */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "calculators" && (
          <div className="space-y-8">
            {/* Tool 1: Shard Capacity & Cluster Sizing Planner */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="border-b border-[#e7e3da] pb-3 mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
                  Interactive Sizing Tool 1
                </span>
                <h3 className="text-lg font-bold text-stone-900">
                  Shard Capacity &amp; Cluster Sizing Planner (Phase 4 Mathematical Model)
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Calculate required shard count based on target peak RPS, measured node throughput, and design utilization ceiling: Initial Shards = ⌈Target Peak RPS / (Measured Capacity × Utilization %)⌉
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs">
                  <div className="flex justify-between font-bold mb-1">
                    <span>Target Peak Workload</span>
                    <span className="text-orange-600 font-mono">{targetPeakRps.toLocaleString()} RPS</span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="50000"
                    step="1000"
                    value={targetPeakRps}
                    onChange={(e) => setTargetPeakRps(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">Total expected peak query load</span>
                </div>

                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs">
                  <div className="flex justify-between font-bold mb-1">
                    <span>Measured Node Capacity</span>
                    <span className="text-orange-600 font-mono">{measuredShardCapacity.toLocaleString()} RPS</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="10000"
                    step="500"
                    value={measuredShardCapacity}
                    onChange={(e) => setMeasuredShardCapacity(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">Benchmark capacity per single database node</span>
                </div>

                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs">
                  <div className="flex justify-between font-bold mb-1">
                    <span>Target Utilization</span>
                    <span className="text-orange-600 font-mono">{utilizationTargetPct}%</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="90"
                    step="5"
                    value={utilizationTargetPct}
                    onChange={(e) => setUtilizationTargetPct(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">Safety headroom before degradation</span>
                </div>
              </div>

              {/* Sizing Outputs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="rounded-xl border border-stone-200 bg-white p-3 text-center">
                  <span className="text-[10px] font-mono text-stone-500 block uppercase">
                    Design Capacity / Shard
                  </span>
                  <span className="text-lg font-extrabold text-stone-900 mt-1 block">
                    {shardPlanningResults.designCapacityPerShard.toLocaleString()} RPS
                  </span>
                  <span className="text-[10px] text-stone-400">
                    {utilizationTargetPct}% of {measuredShardCapacity.toLocaleString()}
                  </span>
                </div>

                <div className="rounded-xl border border-orange-200 bg-orange-50/60 p-3 text-center">
                  <span className="text-[10px] font-mono text-orange-700 block uppercase font-bold">
                    Required Shards
                  </span>
                  <span className="text-2xl font-black text-orange-600 mt-0.5 block">
                    {shardPlanningResults.initialShardCount} Shards
                  </span>
                  <span className="text-[10px] text-orange-700 font-mono">
                    ceil({targetPeakRps} / {shardPlanningResults.designCapacityPerShard})
                  </span>
                </div>

                <div className="rounded-xl border border-stone-200 bg-white p-3 text-center">
                  <span className="text-[10px] font-mono text-stone-500 block uppercase">
                    Cluster Absolute Limit
                  </span>
                  <span className="text-lg font-extrabold text-stone-900 mt-1 block">
                    {shardPlanningResults.clusterMaxRps.toLocaleString()} RPS
                  </span>
                  <span className="text-[10px] text-stone-400">
                    {shardPlanningResults.initialShardCount} &times; {measuredShardCapacity.toLocaleString()}
                  </span>
                </div>

                <div className="rounded-xl border border-stone-200 bg-white p-3 text-center">
                  <span className="text-[10px] font-mono text-stone-500 block uppercase">
                    Headroom Factor
                  </span>
                  <span className="text-lg font-extrabold text-emerald-600 mt-1 block">
                    {shardPlanningResults.headroomFactor}&times; Peak
                  </span>
                  <span className="text-[10px] text-emerald-700">Can absorb spike bursts</span>
                </div>
              </div>
            </div>

            {/* Tool 2: Quorum Consistency & Overlap Evaluator */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="border-b border-[#e7e3da] pb-3 mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
                  Interactive Sizing Tool 2
                </span>
                <h3 className="text-lg font-bold text-stone-900">
                  Quorum Consistency &amp; Replica Overlap Evaluator (\(R + W &gt; N\))
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Analyze read/write overlap and determine whether an operation achieves strong consistency or risks stale reads under node failures.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs">
                  <div className="flex justify-between font-bold mb-1">
                    <span>Replication Factor (N)</span>
                    <span className="text-orange-600 font-mono">{replicationFactorN} Nodes</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="7"
                    step="2"
                    value={replicationFactorN}
                    onChange={(e) => setReplicationFactorN(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">Total replica copies (odd numbers preferred)</span>
                </div>

                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs">
                  <div className="flex justify-between font-bold mb-1">
                    <span>Write Quorum (W)</span>
                    <span className="text-orange-600 font-mono">{writeQuorumW} Nodes</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max={replicationFactorN}
                    value={writeQuorumW}
                    onChange={(e) => setWriteQuorumW(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">Nodes acknowledging write before success</span>
                </div>

                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs">
                  <div className="flex justify-between font-bold mb-1">
                    <span>Read Quorum (R)</span>
                    <span className="text-orange-600 font-mono">{readQuorumR} Nodes</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max={replicationFactorN}
                    value={readQuorumR}
                    onChange={(e) => setReadQuorumR(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">Nodes queried to resolve latest version</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div
                  className={`p-4 rounded-xl border ${
                    quorumAnalysis.isStrictQuorum
                      ? "border-emerald-300 bg-emerald-50/50"
                      : "border-amber-300 bg-amber-50/50"
                  }`}
                >
                  <span className="text-[10px] font-mono font-bold uppercase block text-stone-600">
                    Guaranteed Consistency
                  </span>
                  <span
                    className={`text-sm font-extrabold mt-1 block ${
                      quorumAnalysis.isStrictQuorum ? "text-emerald-700" : "text-amber-800"
                    }`}
                  >
                    {quorumAnalysis.consistencyLevel}
                  </span>
                  <span className="text-[10px] text-stone-500 mt-1 block font-mono">
                    R ({readQuorumR}) + W ({writeQuorumW}) = {readQuorumR + writeQuorumW}{" "}
                    {quorumAnalysis.isStrictQuorum ? ">" : "<="} N ({replicationFactorN})
                  </span>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-white">
                  <span className="text-[10px] font-mono font-bold uppercase block text-stone-500">
                    Write Fault Tolerance
                  </span>
                  <span className="text-lg font-bold text-stone-900 mt-1 block">
                    Can tolerate {quorumAnalysis.writeFailureTolerance} dead node(s)
                  </span>
                  <span className="text-[10px] text-stone-400">
                    Requires {writeQuorumW} healthy node(s) to accept writes
                  </span>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-white">
                  <span className="text-[10px] font-mono font-bold uppercase block text-stone-500">
                    Read Fault Tolerance
                  </span>
                  <span className="text-lg font-bold text-stone-900 mt-1 block">
                    Can tolerate {quorumAnalysis.readFailureTolerance} dead node(s)
                  </span>
                  <span className="text-[10px] text-stone-400">
                    Requires {readQuorumR} healthy node(s) to fulfill reads
                  </span>
                </div>
              </div>
            </div>

            {/* Tool 3: Scatter-Gather Fan-Out Latency Simulator */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="border-b border-[#e7e3da] pb-3 mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
                  Interactive Sizing Tool 3
                </span>
                <h3 className="text-lg font-bold text-stone-900">
                  Scatter-Gather Fan-Out Latency &amp; Tail Bottleneck Simulator
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  See how parallel query latency across N shards is dominated by the single slowest participant: T_total ≈ T_coordinator + T_network + max(T_shard) + T_merge
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs">
                  <div className="flex justify-between font-bold mb-1">
                    <span>Average Shard Duration</span>
                    <span className="text-orange-600 font-mono">{p50ShardLatency} ms</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="60"
                    value={p50ShardLatency}
                    onChange={(e) => setP50ShardLatency(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">Standard indexed shard execution time</span>
                </div>

                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs">
                  <div className="flex justify-between font-bold mb-1">
                    <span>Tail Outlier Latency</span>
                    <span className="text-orange-600 font-mono">{tailOutlierLatency} ms</span>
                  </div>
                  <input
                    type="range"
                    min="80"
                    max="400"
                    step="10"
                    value={tailOutlierLatency}
                    onChange={(e) => setTailOutlierLatency(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">GC pause or disk I/O wait outlier</span>
                </div>

                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="font-bold">Inject Slow Shard</span>
                    <input
                      type="checkbox"
                      checked={hasTailOutlier}
                      onChange={(e) => setHasTailOutlier(e.target.checked)}
                      className="accent-orange-600 h-4 w-4 rounded cursor-pointer"
                    />
                  </div>
                  <span className="text-[10px] text-stone-500">
                    Toggle whether one degraded shard delays the entire client aggregation
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                <div>
                  <span className="text-stone-500">Coordinator Overhead:</span> <strong>8ms</strong> ·{" "}
                  <span className="text-stone-500">Network Transit:</span> <strong>7ms</strong> ·{" "}
                  <span className="text-stone-500">Slowest Shard:</span>{" "}
                  <strong className={hasTailOutlier ? "text-red-600 font-bold" : "text-emerald-600 font-bold"}>
                    {fanOutResults.effectiveSlowestShard}ms
                  </strong>{" "}
                  · <span className="text-stone-500">Merge Overhead:</span> <strong>10ms</strong>
                </div>
                <div className="text-sm font-extrabold text-stone-900">
                  Total Latency:{" "}
                  <span className={hasTailOutlier ? "text-red-600" : "text-emerald-700"}>
                    {fanOutResults.totalLatency} ms
                  </span>
                </div>
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
                Senior Systems Engineering Q&amp;A: Distributed Databases
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Real-world operational failure modes, lock contention trade-offs, and consistency guarantees discussed in top-tier infrastructure design interviews.
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
        {/* TAB 4: CAPSTONE ENGINEERING PROJECT                                */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "project" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
                    Capstone Specification
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    Design PrepSpaces for Distributed Database Workloads
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Decide which records need replication, which tables should be partitioned, and whether data should be sharded.
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-mono text-stone-500 block">Deliverables Completed</span>
                  <span className="text-xl font-black text-orange-600">
                    {completedCount} / 9
                  </span>
                </div>
              </div>

              {/* 5 Implementation Phases */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-xs font-mono font-bold text-orange-600 block">Phase 1</span>
                  <h4 className="font-bold text-stone-900 text-sm mt-0.5">Define Data Placement Strategy</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Map each entity (Courses, Enrollments, Progress, Activity Events, Submissions, Grades) to its primary design question, durability requirement, and freshness needs.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-xs font-mono font-bold text-orange-600 block">Phase 2</span>
                  <h4 className="font-bold text-stone-900 text-sm mt-0.5">Draw Three Architecture Options</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Option A (Single DB + Replicas), Option B (Time-partitioned tables inside relational DB), Option C (Horizontally sharded cluster). Document write paths and failover behavior.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-xs font-mono font-bold text-orange-600 block">Phase 3</span>
                  <h4 className="font-bold text-stone-900 text-sm mt-0.5">Design One Partitioned Table</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Implement monthly range partitioning for <code>activity_events</code> in PostgreSQL. Compare <code>EXPLAIN ANALYZE</code> query plans with and without time filters to verify partition pruning.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-xs font-mono font-bold text-orange-600 block">Phase 4</span>
                  <h4 className="font-bold text-stone-900 text-sm mt-0.5">Model Sharded Workload Capacity</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Model 18,000 peak RPS with 4,000 RPS node limits at 70% target utilization (2,800 design capacity &rarr; 7 shards). Validate storage growth, cross-shard fan-out, and failure scenarios.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4] md:col-span-2">
                  <span className="text-xs font-mono font-bold text-orange-600 block">Phase 5</span>
                  <h4 className="font-bold text-stone-900 text-sm mt-0.5">Design &amp; Test Consistency Models</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Test 7 edge failure cases: post-write immediate read, lagging replica, primary node loss, stale router mapping during resharding, cross-shard query with 1 offline node, and duplicate retries.
                  </p>
                </div>
              </div>

              {/* 9 Deliverables Interactive Checklist */}
              <div className="border-t border-[#e7e3da] pt-6">
                <h4 className="font-bold text-stone-900 text-sm mb-3">
                  Distributed Database Design Portfolio Checklist (9 Required Deliverables)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    { key: "deliv1", label: "Replication topology with explicit consistency and failover rules" },
                    { key: "deliv2", label: "RPO and RTO targets with a documented recovery test plan" },
                    { key: "deliv3", label: "Partitioned-table schema and before-and-after query measurements" },
                    { key: "deliv4", label: "Shard-key analysis and workload-distribution estimate" },
                    { key: "deliv5", label: "Distributed-query routing and cross-shard aggregation design" },
                    { key: "deliv6", label: "Consistency analysis for post-write reads and replica lag" },
                    { key: "deliv7", label: "Hot-partition and shard-failure analysis" },
                    { key: "deliv8", label: "Architecture decision record comparing all three options" },
                    { key: "deliv9", label: "Load-test and failure-test results with identified limitations" },
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
        {/* TAB 5: MODULE 7 ASSESSMENT QUIZ                                    */}
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
                    Module 7 Assessment: Distributed Database Engineering
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    9 questions verifying replication topology, partition pruning, sharding mechanics, quorum mathematics, and disaster recovery.
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
                  Primary References &amp; University Syllabi
                </span>
                <h3 className="text-xl font-extrabold text-stone-900">
                  Module 7: Research and Reading List
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Primary documentation and academic courses exploring distributed database architecture, storage engines, and consensus protocols.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    id: 1,
                    title: "Carnegie Mellon University — Database Systems (15-445/645)",
                    focus:
                      "Relational and distributed database architecture, query processing, concurrency control, and crash recovery.",
                    url: "https://15445.courses.cs.cmu.edu/fall2026/",
                    linkText: "CMU Course Materials",
                  },
                  {
                    id: 2,
                    title: "PostgreSQL High Availability and Replication",
                    focus:
                      "Primary/standby architecture, streaming WAL replication, synchronous commits, replication slots, and failover.",
                    url: "https://www.postgresql.org/docs/current/warm-standby.html",
                    linkText: "Official PostgreSQL Docs",
                  },
                  {
                    id: 3,
                    title: "PostgreSQL Logical Replication",
                    focus:
                      "Publications, subscriptions, selective table replication, conflict resolution, and change-data capture.",
                    url: "https://www.postgresql.org/docs/current/logical-replication.html",
                    linkText: "Logical Replication Guide",
                  },
                  {
                    id: 4,
                    title: "PostgreSQL Table Partitioning",
                    focus:
                      "Declarative range, list, and hash partitioning, partition pruning in query execution, and partition drop maintenance.",
                    url: "https://www.postgresql.org/docs/current/ddl-partitioning.html",
                    linkText: "DDL Partitioning Docs",
                  },
                  {
                    id: 5,
                    title: "Microsoft Azure Architecture Center — Data Partitioning",
                    focus:
                      "Horizontal, vertical, and functional partitioning, cross-partition queries, parallel aggregation, and consistency.",
                    url: "https://learn.microsoft.com/en-in/azure/architecture/best-practices/data-partitioning",
                    linkText: "Azure Partitioning Guide",
                  },
                  {
                    id: 6,
                    title: "Amazon DynamoDB — Partition-Key Design",
                    focus:
                      "I/O spread across partitions, avoiding hot keys, burst capacity, and key-access pattern optimizations.",
                    url: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-partition-key-design.html",
                    linkText: "AWS Partition Key Docs",
                  },
                  {
                    id: 7,
                    title: "Apache Cassandra — Replication and Consistency",
                    focus:
                      "Replication factors, replica selection, tunable consistency levels (ONE, QUORUM, ALL), and read-repair.",
                    url: "https://cassandra.apache.org/doc/stable/cassandra/architecture/dynamo.html",
                    linkText: "Cassandra Architecture Docs",
                  },
                  {
                    id: 8,
                    title: "Google Cloud Spanner — Replication and Transactions",
                    focus:
                      "Paxos-based replicated splits, TrueTime atomic clocks, externally consistent transactions, and multi-region quorum writes.",
                    url: "https://docs.cloud.google.com/spanner/docs/replication",
                    linkText: "Spanner Replication Docs",
                  },
                  {
                    id: 9,
                    title: "MIT Distributed Computer Systems Engineering (6.824)",
                    focus:
                      "Replication protocols, Raft/Paxos consensus, fault tolerance, and linearizable consistency.",
                    url: "https://ocw.mit.edu/courses/6-824-distributed-computer-systems-engineering-spring-2006/",
                    linkText: "MIT OpenCourseWare",
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
                    What You Mastered in Module 7
                  </span>
                  <span className="text-sm font-bold text-stone-900 block mt-0.5">
                    Module 9: Distributed Systems Fundamentals, Clocks, Timeouts, and Failure Models
                  </span>
                  <span className="text-xs text-stone-600 block mt-0.5">
                    You can now scale databases with primary-replica topologies, declarative table partitioning, shard routing, and quorum consistency.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => navigate("/learning/system-design/caching")}
                    className="flex items-center gap-1.5 rounded-xl border border-orange-300 bg-white px-3.5 py-2 text-xs font-bold text-orange-700 hover:bg-orange-50 transition cursor-pointer"
                  >
                    <span>Back to Module 6</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate("/learning/system-design/distributed-systems")}
                    className="flex items-center gap-1.5 rounded-xl bg-[#f97316] px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#ea580c] transition cursor-pointer"
                  >
                    <span>Start Module 9 (Distributed Systems)</span>
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
