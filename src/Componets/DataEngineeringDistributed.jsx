// projectx/src/Componets/DataEngineeringDistributed.jsx
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Workflow,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Terminal,
  FileCode,
  BookOpen,
  Sparkles,
  ExternalLink,
  Layers,
  Cpu,
  Server,
  Activity,
  BarChart3,
  HardDrive,
  GitBranch,
  Filter,
  CheckCircle,
  Play,
  Copy,
  Check,
  Table,
  Sliders,
  Boxes,
  Clock,
  Zap,
  ShieldCheck,
  RotateCcw,
  Globe,
  Key,
  Binary,
  FileSpreadsheet,
  Code2,
  Radio,
  Send,
  SlidersHorizontal,
  RotateCw,
  Split,
  Merge,
  Calendar,
  Database,
  Search,
  AlertOctagon,
  FileText,
  HelpCircle,
  ChevronRight,
  Eye,
  SlidersVertical,
  Hash,
  ShieldAlert,
  Share2,
  Lock
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import DataEngineeringDistributedSections from "./DataEngineeringDistributedSections";

export default function DataEngineeringDistributed() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  // Mode switcher tab: 'curriculum' (Specification & Blueprints) | 'workbench' (Interactive Workbenches)
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbench, setActiveWorkbench] = useState("partitioning");
  // 'partitioning' | 'quorum_cap' | 'raft_consensus' | 'backoff_circuit' | 'backpressure_lag' | 'idempotency_quiz'

  // ==========================================
  // WORKBENCH 1: PARTITIONING & LOAD BALANCER
  // ==========================================
  const sampleRecords = useMemo(() => [
    { id: 101, region: "India", date: "2026-11-01", amount: 1500 },
    { id: 102, region: "USA", date: "2026-11-05", amount: 2500 },
    { id: 103, region: "India", date: "2026-11-12", amount: 3200 },
    { id: 104, region: "UK", date: "2026-11-18", amount: 1800 },
    { id: 105, region: "India", date: "2026-11-20", amount: 4900 },
    { id: 106, region: "Germany", date: "2026-11-22", amount: 2100 },
    { id: 107, region: "India", date: "2026-11-25", amount: 1100 },
    { id: 108, region: "USA", date: "2026-11-28", amount: 950 },
    { id: 109, region: "India", date: "2026-11-29", amount: 3400 },
    { id: 110, region: "UK", date: "2026-11-30", amount: 2800 },
    { id: 111, region: "India", date: "2026-12-02", amount: 5100 },
    { id: 112, region: "India", date: "2026-12-05", amount: 1600 }
  ], []);

  const [partitionStrategy, setPartitionStrategy] = useState("hash"); // 'hash' | 'range' | 'list' | 'round_robin'

  const partitionedDistribution = useMemo(() => {
    const nodes = { 0: [], 1: [], 2: [], 3: [] };

    sampleRecords.forEach((rec, idx) => {
      let targetNode = 0;
      if (partitionStrategy === "hash") {
        // Hash by ID
        targetNode = rec.id % 4;
      } else if (partitionStrategy === "range") {
        // Range by date
        if (rec.date <= "2026-11-10") targetNode = 0;
        else if (rec.date <= "2026-11-20") targetNode = 1;
        else if (rec.date <= "2026-11-30") targetNode = 2;
        else targetNode = 3;
      } else if (partitionStrategy === "list") {
        // List by region
        if (rec.region === "India") targetNode = 0;
        else if (rec.region === "USA") targetNode = 1;
        else if (rec.region === "UK") targetNode = 2;
        else targetNode = 3;
      } else {
        // Round Robin
        targetNode = idx % 4;
      }
      nodes[targetNode].push(rec);
    });

    return nodes;
  }, [sampleRecords, partitionStrategy]);

  // ==========================================
  // WORKBENCH 2: CAP THEOREM & QUORUM SIMULATOR
  // ==========================================
  const [clusterReplicas, setClusterReplicas] = useState(3); // 3 or 5
  const [writeQuorum, setWriteQuorum] = useState(2);
  const [readQuorum, setReadQuorum] = useState(2);
  const [networkPartitionActive, setNetworkPartitionActive] = useState(false);
  const [capMode, setCapMode] = useState("CP"); // 'CP' | 'AP'

  const quorumStats = useMemo(() => {
    const sum = writeQuorum + readQuorum;
    const isStrictlyConsistent = sum > clusterReplicas;
    const majority = Math.floor(clusterReplicas / 2) + 1;
    return {
      sum,
      isStrictlyConsistent,
      majority
    };
  }, [clusterReplicas, writeQuorum, readQuorum]);

  // ==========================================
  // WORKBENCH 3: RAFT CONSENSUS & LEADER ELECTION
  // ==========================================
  const [raftNodes, setRaftNodes] = useState([
    { id: 1, role: "Leader", term: 1, votes: 3, isAlive: true },
    { id: 2, role: "Follower", term: 1, votes: 0, isAlive: true },
    { id: 3, role: "Follower", term: 1, votes: 0, isAlive: true },
    { id: 4, role: "Follower", term: 1, votes: 0, isAlive: true },
    { id: 5, role: "Follower", term: 1, votes: 0, isAlive: true }
  ]);

  const [raftLog, setRaftLog] = useState([
    { index: 1, term: 1, cmd: "SET balance = 5000", committed: true },
    { index: 2, term: 1, cmd: "SET customer_101 = 'active'", committed: true }
  ]);

  const handleSimulateLeaderCrash = () => {
    setRaftNodes(prev => prev.map(n => {
      if (n.role === "Leader") return { ...n, role: "Dead", isAlive: false };
      return n;
    }));
  };

  const handleTriggerElection = () => {
    setRaftNodes(prev => {
      const aliveFollowers = prev.filter(n => n.isAlive && n.role !== "Dead");
      if (aliveFollowers.length < 3) return prev; // Cannot reach majority
      const candidateId = aliveFollowers[0].id;
      return prev.map(n => {
        if (n.id === candidateId) {
          return { ...n, role: "Leader", term: n.term + 1, votes: aliveFollowers.length };
        } else if (n.isAlive) {
          return { ...n, role: "Follower", term: n.term + 1, votes: 0 };
        }
        return n;
      });
    });
  };

  const handleResetRaft = () => {
    setRaftNodes([
      { id: 1, role: "Leader", term: 1, votes: 3, isAlive: true },
      { id: 2, role: "Follower", term: 1, votes: 0, isAlive: true },
      { id: 3, role: "Follower", term: 1, votes: 0, isAlive: true },
      { id: 4, role: "Follower", term: 1, votes: 0, isAlive: true },
      { id: 5, role: "Follower", term: 1, votes: 0, isAlive: true }
    ]);
  };

  // ==========================================
  // WORKBENCH 4: EXPONENTIAL BACKOFF & CIRCUIT BREAKER
  // ==========================================
  const [baseDelay, setBaseDelay] = useState(2);
  const [maxDelay, setMaxDelay] = useState(32);
  const [useJitter, setUseJitter] = useState(true);
  const [circuitState, setCircuitState] = useState("CLOSED"); // 'CLOSED' | 'OPEN' | 'HALF-OPEN'
  const [consecutiveFailures, setConsecutiveFailures] = useState(0);

  const retryDelays = useMemo(() => {
    const delays = [];
    for (let attempt = 0; attempt < 5; attempt++) {
      const exp = Math.min(maxDelay, baseDelay * Math.pow(2, attempt));
      const jitterVal = useJitter ? 0.75 : 0;
      delays.push({
        attempt: attempt + 1,
        pureExp: exp,
        withJitter: Number((exp + jitterVal).toFixed(2))
      });
    }
    return delays;
  }, [baseDelay, maxDelay, useJitter]);

  const handleSimulateServiceCall = (success) => {
    if (circuitState === "OPEN") {
      return; // Fast fail
    }

    if (success) {
      setConsecutiveFailures(0);
      if (circuitState === "HALF-OPEN") setCircuitState("CLOSED");
    } else {
      const newFails = consecutiveFailures + 1;
      setConsecutiveFailures(newFails);
      if (newFails >= 3) {
        setCircuitState("OPEN");
      }
    }
  };

  // ==========================================
  // WORKBENCH 5: STREAMING BACKPRESSURE & CONSUMER LAG
  // ==========================================
  const [producerRate, setProducerRate] = useState(60000); // events/sec
  const [consumerWorkers, setConsumerWorkers] = useState(2); // 1 to 5
  const [backpressureEnabled, setBackpressureEnabled] = useState(true);

  const streamLagStats = useMemo(() => {
    const capacityPerWorker = 20000;
    const totalConsumerCapacity = consumerWorkers * capacityPerWorker;
    const rawDeficit = producerRate - totalConsumerCapacity;
    
    // Effective ingestion rate with backpressure
    const effectiveIngestion = backpressureEnabled && rawDeficit > 0 
      ? totalConsumerCapacity 
      : producerRate;

    const consumerLag = backpressureEnabled && rawDeficit > 0
      ? 2500 // bounded buffer
      : Math.max(0, rawDeficit * 3.5); // runaway lag

    const isOverloaded = producerRate > totalConsumerCapacity;

    return {
      totalConsumerCapacity,
      effectiveIngestion,
      consumerLag,
      isOverloaded
    };
  }, [producerRate, consumerWorkers, backpressureEnabled]);

  // ==========================================
  // WORKBENCH 6: IDEMPOTENCY & 15-Q QUIZ
  // ==========================================
  const [accountBalance, setAccountBalance] = useState(5000);
  const [processedTxIds, setProcessedTxIds] = useState(new Set());
  const [txAuditLog, setTxAuditLog] = useState([]);

  const handleSimulatePayment = (isIdempotent) => {
    const tx = { id: "TXN-9001", amount: 1000 };

    if (isIdempotent) {
      if (processedTxIds.has(tx.id)) {
        setTxAuditLog(prev => [
          { time: new Date().toLocaleTimeString(), msg: `IDEMPOTENT REPLAY: Key ${tx.id} already committed. Skipping duplicate deduction.`, status: "SAFE" },
          ...prev.slice(0, 4)
        ]);
        return;
      }
      setProcessedTxIds(prev => new Set(prev).add(tx.id));
      setAccountBalance(prev => prev - tx.amount);
      setTxAuditLog(prev => [
        { time: new Date().toLocaleTimeString(), msg: `UPSERT SUCCESS: Processed ${tx.id} for ₹${tx.amount}. Balance updated to ₹${accountBalance - tx.amount}.`, status: "COMMITTED" },
        ...prev.slice(0, 4)
      ]);
    } else {
      // Non-idempotent blind insert
      setAccountBalance(prev => prev - tx.amount);
      setTxAuditLog(prev => [
        { time: new Date().toLocaleTimeString(), msg: `BLIND INSERT: Retried duplicate ${tx.id}. Deducted ₹${tx.amount} AGAIN! New Balance: ₹${accountBalance - tx.amount}.`, status: "CORRUPTED" },
        ...prev.slice(0, 4)
      ]);
    }
  };

  const handleResetBalance = () => {
    setAccountBalance(5000);
    setProcessedTxIds(new Set());
    setTxAuditLog([]);
  };

  // 15 Comprehensive Curriculum Questions
  const quizQuestions = useMemo(() => [
    {
      id: 1,
      q: "What is the defining challenge of distributed computing compared to single-machine systems?",
      options: [
        "Partial failure: individual nodes or network partitions can fail while other machines continue running",
        "Distributed systems cannot run Python or SQL",
        "Distributed systems only work with hard drives, not SSDs",
        "Distributed systems require manual restart every 24 hours"
      ],
      correct: 0,
      expl: "In a single-machine system, a crash halts everything; in a distributed system, components fail independently, leading to partial failure, network unreliability, and concurrency challenges."
    },
    {
      id: 2,
      q: "Why is vertical scaling (scale up) limited compared to horizontal scaling (scale out) in modern data platforms?",
      options: [
        "Vertical scaling hits physical hardware limits (CPU cores, RAM slots) and introduces a single point of failure with machine downtime",
        "Vertical scaling requires learning gRPC and Protobuf",
        "Vertical scaling is illegal under cloud compliance rules",
        "Horizontal scaling only works for offline batch systems"
      ],
      correct: 0,
      expl: "Vertical scaling upgrades a single machine but encounters hardware limits and single-point-of-failure risks. Horizontal scaling adds machines to achieve virtually limitless capacity."
    },
    {
      id: 3,
      q: "What is the primary difference between synchronous and asynchronous inter-process communication?",
      options: [
        "In synchronous calls, the caller blocks waiting for an immediate response; in asynchronous messaging, the sender publishes and continues, decoupling dependencies",
        "Synchronous calls use UDP, while asynchronous calls only use HTTP/1.0",
        "Synchronous communication is always faster than asynchronous",
        "Asynchronous communication eliminates network latency completely"
      ],
      correct: 0,
      expl: "Synchronous communication requires the caller to wait for the remote service, creating tight coupling; asynchronous communication buffers events, decoupling producer and consumer."
    },
    {
      id: 4,
      q: "How does gRPC achieve higher performance than traditional REST APIs with JSON payloads?",
      options: [
        "By using compact binary Protocol Buffers serialization over HTTP/2 with multiplexing and streaming",
        "By eliminating all network protocols and using direct memory sharing",
        "By compressing text into ZIP files before every HTTP request",
        "By disabling all authentication and encryption headers"
      ],
      correct: 0,
      expl: "gRPC uses binary Protocol Buffers (smaller payload size) and HTTP/2 (multiplexed connections, binary framing, header compression), significantly lowering serialization and network overhead."
    },
    {
      id: 5,
      q: "Why is Apache Parquet considered an analytical storage format rather than a message serialization format like Avro or Protobuf?",
      options: [
        "Parquet is column-oriented, allowing queries to scan only requested columns for OLAP; Avro/Protobuf are row-oriented formats optimized for streaming RPC events",
        "Parquet cannot store numbers or strings",
        "Avro cannot be read by Apache Spark",
        "Protobuf only runs on single-node computers"
      ],
      correct: 0,
      expl: "Parquet stores data by column with dictionary encoding and statistics, making it ideal for analytical aggregations, whereas Avro and Protobuf excel at streaming individual row-level messages."
    },
    {
      id: 6,
      q: "What is 'data skew' in a partitioned distributed cluster, and why is it dangerous?",
      options: [
        "When an uneven distribution of keys causes one worker to process far more data than others, becoming a cluster bottleneck",
        "When data is converted from CSV to Parquet incorrectly",
        "When a database loses its primary key constraints",
        "When network cables are physically twisted"
      ],
      correct: 0,
      expl: "Data skew occurs when popular keys (e.g., millions of records for one merchant) funnel into a single partition, making that node a straggler while other nodes sit idle."
    },
    {
      id: 7,
      q: "In distributed replication, what is the trade-off of asynchronous replication compared to synchronous replication?",
      options: [
        "Asynchronous replication provides lower write latency and higher availability, but replicas may temporarily lag and risk data loss if the primary crashes",
        "Asynchronous replication completely prevents stale reads",
        "Synchronous replication uses half the network bandwidth of asynchronous",
        "Asynchronous replication does not allow reads from followers"
      ],
      correct: 0,
      expl: "Asynchronous replication acknowledges writes immediately without waiting for replicas (fast, available), but replication lag can cause stale reads and data loss during failovers."
    },
    {
      id: 8,
      q: "What is the 'split-brain' problem in leader-follower architectures?",
      options: [
        "When a network partition causes two nodes to both believe they are the legitimate leader, accepting conflicting writes simultaneously",
        "When an operating system runs two CPU threads at once",
        "When a hard drive runs out of disk space",
        "When an analyst writes contradictory SQL queries"
      ],
      correct: 0,
      expl: "Split-brain happens when isolated sub-clusters elect separate leaders, each accepting writes independently, corrupting state and causing severe divergence."
    },
    {
      id: 9,
      q: "What does the CAP theorem state regarding network partitions in distributed systems?",
      options: [
        "During a network partition, a distributed system must choose between linearizable Consistency (CP) and Availability (AP) for affected operations",
        "Every database permanently chooses two letters from C, A, and P and drops the third forever",
        "Partition tolerance can be eliminated by using fiber optic cables",
        "Cloud databases never experience network partitions"
      ],
      correct: 0,
      expl: "Because network partitions are an inevitable physical reality (P is mandatory), a system facing a partition must choose between rejecting requests to ensure consistency (CP) or serving stale responses to remain available (AP)."
    },
    {
      id: 10,
      q: "What is the mathematical condition for strong consistency in a quorum-based system with N replicas?",
      options: [
        "R + W > N (Read quorum + Write quorum > Total replicas)",
        "R + W = N / 2",
        "W = 1 and R = 1 regardless of N",
        "R * W = N"
      ],
      correct: 0,
      expl: "When R + W > N, the read set and write set are guaranteed to overlap on at least one replica, ensuring that the reader observes the latest committed update with version resolution."
    },
    {
      id: 11,
      q: "How does the Raft consensus algorithm guarantee safe leader election and prevent split-brain?",
      options: [
        "A candidate must receive votes from a strict majority (floor(N/2) + 1) of all voting nodes in the cluster to become leader",
        "The fastest node to respond to ping becomes leader permanently",
        "By randomly assigning leadership every 60 seconds",
        "By relying on a single external NTP clock"
      ],
      correct: 0,
      expl: "Because any two majorities must overlap by at least one node, it is mathematically impossible for two conflicting candidates to both win a majority vote in the same term."
    },
    {
      id: 12,
      q: "Why are leases alone insufficient to prevent stale lock writes without fencing tokens?",
      options: [
        "A process may experience a long garbage collection pause, lose its lease, and then resume writing after another process has acquired the resource",
        "Leases expire after 100 milliseconds and cannot be renewed",
        "Fencing tokens encrypt data on the client side",
        "Databases automatically reject lease-based connections"
      ],
      correct: 0,
      expl: "If a worker pauses (e.g. GC pause) past lease expiration, another worker takes over; a monotonically increasing fencing token ensures the storage layer rejects the resumed worker's stale write."
    },
    {
      id: 13,
      q: "What is the purpose of adding 'jitter' to an exponential backoff retry policy?",
      options: [
        "To randomize retry delays across clients and prevent the 'thundering herd' problem from overwhelming recovering services",
        "To make retries run faster by skipping failed attempts",
        "To convert HTTP GET requests into POST requests",
        "To encrypt retry tokens with RSA keys"
      ],
      correct: 0,
      expl: "Without jitter, thousands of clients retry at the exact same exponential intervals (1s, 2s, 4s), creating destructive synchronized traffic spikes against recovering servers."
    },
    {
      id: 14,
      q: "How does backpressure protect distributed stream processing pipelines from crashing?",
      options: [
        "It allows slower downstream consumers to throttle upstream producers or control incoming batch demand, preventing unbounded queue memory exhaustion",
        "It automatically doubles the network bandwidth of the cluster",
        "It deletes all messages older than 1 minute",
        "It converts streaming data into static CSV files"
      ],
      correct: 0,
      expl: "Backpressure signals producers to slow down or switches to demand-pull processing when consumers cannot keep up, keeping buffer queues within bounded memory limits."
    },
    {
      id: 15,
      q: "Why is idempotency essential when combining At-Least-Once delivery with automatic retries?",
      options: [
        "Because network retries can deliver the same message multiple times; idempotent operations ensure repeated execution produces the exact same business state without duplicates",
        "Because databases reject duplicate queries automatically",
        "Because it eliminates the need for database transactions",
        "Because it speeds up Kafka topic partitioning by 50%"
      ],
      correct: 0,
      expl: "At-least-once delivery guarantees no message loss by retrying on failures, which inevitably creates duplicates; idempotency (e.g., upserts or unique idempotency keys) makes those replays safe."
    }
  ], []);

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const handleSelectAnswer = (qId, optionIdx) => {
    setSelectedAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const quizScore = useMemo(() => {
    let score = 0;
    quizQuestions.forEach(q => {
      if (selectedAnswers[q.id] === q.correct) score++;
    });
    return score;
  }, [selectedAnswers, quizQuestions]);

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setShowQuizResults(false);
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 font-sans selection:bg-orange-500 selection:text-white pb-24">
      {/* Universal Module Navigation */}
      <ModuleNav currentModuleId="distributed-systems" />

      {/* Top Hero Section */}
      <header className="border-b border-[#e7e3da] bg-white/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
                  Module 15
                </span>
                <span className="text-stone-400 text-xs">•</span>
                <span className="text-stone-600 text-xs font-medium">Data Engineering Master Course</span>
                <span className="text-stone-400 text-xs">•</span>
                <span className="text-orange-600 text-xs font-bold">Advanced Systems Level</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight flex items-center gap-3">
                <Share2 className="text-[#f97316] w-8 h-8 sm:w-9 sm:h-9 shrink-0" />
                <span>Distributed Systems for Data Engineers</span>
              </h1>
              <p className="text-stone-600 text-sm sm:text-base mt-1.5 max-w-4xl">
                The foundational principles behind Apache Spark, Apache Kafka, Cassandra, and distributed databases: partitioning, replication, CAP theorem, quorum voting, Raft consensus, idempotency, backpressure, and fault tolerance.
              </p>
            </div>

            {/* Back button */}
            <div className="flex items-center gap-2">
              <button
                onClick={goBack}
                className="px-4 py-2 rounded-xl bg-white border border-[#e7e3da] text-stone-700 hover:bg-stone-50 font-semibold text-xs sm:text-sm shadow-sm transition flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft size={16} />
                <span>Back</span>
              </button>
            </div>
          </div>

          {/* Master 2-Mode Switcher */}
          <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-[#e7e3da] pt-4">
            <button
              onClick={() => setActiveTab("curriculum")}
              className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition flex items-center gap-2 cursor-pointer ${
                activeTab === "curriculum"
                  ? "bg-orange-600 text-white shadow-sm"
                  : "bg-white text-stone-700 border border-[#e7e3da] hover:bg-stone-50"
              }`}
            >
              <BookOpen size={16} />
              <span>Specification & Blueprints (28 Sections)</span>
            </button>

            <button
              onClick={() => setActiveTab("workbench")}
              className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition flex items-center gap-2 cursor-pointer ${
                activeTab === "workbench"
                  ? "bg-orange-600 text-white shadow-sm"
                  : "bg-white text-stone-700 border border-[#e7e3da] hover:bg-stone-50"
              }`}
            >
              <Sparkles size={16} />
              <span>Interactive Workbenches (6)</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ========================================================= */}
        {/* TAB 1: CURRICULUM MODE (100% VERBATIM TEXTBOOK BLUEPRINTS) */}
        {/* ========================================================= */}
        {activeTab === "curriculum" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Table of contents sidebar */}
            <aside className="lg:col-span-1 hidden lg:block">
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-5 sticky top-32 shadow-sm space-y-4 max-h-[calc(100vh-160px)] overflow-y-auto [scrollbar-width:thin]">
                <div className="flex items-center gap-2 pb-2 border-b border-[#e7e3da]">
                  <FileText className="text-orange-600" size={18} />
                  <span className="font-bold text-sm text-stone-900 uppercase tracking-wide">
                    Module Index (28)
                  </span>
                </div>
                <nav className="space-y-1 text-xs">
                  <a href="#overview" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    0. Overview & Roadmap
                  </a>
                  <a href="#section-1" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    1. Intro to Distributed Systems
                  </a>
                  <a href="#section-2" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    2. Computing Architectures
                  </a>
                  <a href="#section-3" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    3. Processes & Communication
                  </a>
                  <a href="#section-4" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    4. RPC & Client-Server
                  </a>
                  <a href="#section-5" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    5. Network & Serialization
                  </a>
                  <a href="#section-6" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    6. Distributed Storage Systems
                  </a>
                  <a href="#section-7" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    7. Data Partitioning
                  </a>
                  <a href="#section-8" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    8. Data Replication
                  </a>
                  <a href="#section-9" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    9. Leader-Follower
                  </a>
                  <a href="#section-10" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    10. Consistency Models
                  </a>
                  <a href="#section-11" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    11. Consistency in Practice
                  </a>
                  <a href="#section-12" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    12. CAP Theorem & PACELC
                  </a>
                  <a href="#section-13" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    13. Quorum-Based Systems
                  </a>
                  <a href="#section-14" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    14. Fault Tolerance
                  </a>
                  <a href="#section-15" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    15. Failure Detection
                  </a>
                  <a href="#section-16" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    16. Consensus Fundamentals
                  </a>
                  <a href="#section-17" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    17. Distributed Coordination
                  </a>
                  <a href="#section-18" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    18. Retries & Idempotency
                  </a>
                  <a href="#section-19" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    19. Backpressure
                  </a>
                  <a href="#section-20" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    20. Delivery Guarantees
                  </a>
                  <a href="#section-21" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    21. Distributed Reliability
                  </a>
                  <a href="#section-22" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    22. Real-World Architecture
                  </a>
                  <a href="#section-23" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    23. Practical Laboratory (1-4)
                  </a>
                  <a href="#section-24" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    24. Common Mistakes
                  </a>
                  <a href="#section-25" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    25. 30 Interview Questions
                  </a>
                  <a href="#section-26" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    26. Recommended Resources
                  </a>
                  <a href="#section-27" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    27. Final Revision Matrix
                  </a>
                  <a href="#section-28" className="block p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-stone-600 transition font-medium">
                    28. Course Progression
                  </a>
                </nav>
              </div>
            </aside>

            {/* Generated sections */}
            <div className="lg:col-span-3">
              <DataEngineeringDistributedSections />
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: INTERACTIVE WORKBENCHES (6 SPECIALIZED LABS)       */}
        {/* ========================================================= */}
        {activeTab === "workbench" && (
          <div className="space-y-8">
            {/* Workbench Navigation Pills */}
            <div className="flex flex-wrap items-center gap-2 bg-white p-3 rounded-2xl border border-[#e7e3da] shadow-sm">
              <button
                onClick={() => setActiveWorkbench("partitioning")}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                  activeWorkbench === "partitioning"
                    ? "bg-orange-600 text-white"
                    : "text-stone-700 hover:bg-stone-100"
                }`}
              >
                <Split size={16} />
                <span>1. Partitioning & Load Balancer</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("quorum_cap")}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                  activeWorkbench === "quorum_cap"
                    ? "bg-orange-600 text-white"
                    : "text-stone-700 hover:bg-stone-100"
                }`}
              >
                <ShieldCheck size={16} />
                <span>2. CAP Theorem & Quorum</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("raft_consensus")}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                  activeWorkbench === "raft_consensus"
                    ? "bg-orange-600 text-white"
                    : "text-stone-700 hover:bg-stone-100"
                }`}
              >
                <Cpu size={16} />
                <span>3. Raft Leader Election</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("backoff_circuit")}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                  activeWorkbench === "backoff_circuit"
                    ? "bg-orange-600 text-white"
                    : "text-stone-700 hover:bg-stone-100"
                }`}
              >
                <Clock size={16} />
                <span>4. Backoff, Jitter & Circuit Breaker</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("backpressure_lag")}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                  activeWorkbench === "backpressure_lag"
                    ? "bg-orange-600 text-white"
                    : "text-stone-700 hover:bg-stone-100"
                }`}
              >
                <Activity size={16} />
                <span>5. Backpressure & Kafka Lag</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("idempotency_quiz")}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer ${
                  activeWorkbench === "idempotency_quiz"
                    ? "bg-orange-600 text-white"
                    : "text-stone-700 hover:bg-stone-100"
                }`}
              >
                <ShieldAlert size={16} />
                <span>6. Idempotency & 15-Q Quiz</span>
              </button>
            </div>

            {/* ---------------------------------------------------- */}
            {/* WORKBENCH 1: PARTITIONING & LOAD BALANCER            */}
            {/* ---------------------------------------------------- */}
            {activeWorkbench === "partitioning" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-4">
                    <div>
                      <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                        Workbench 1 · Data Sharding & Partitioning
                      </span>
                      <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                        Distributed Partitioning & Cluster Load Balancer
                      </h2>
                      <p className="text-stone-600 text-xs sm:text-sm mt-1">
                        Experiment with Hash, Range, List, and Round-Robin distribution strategies across a 4-node cluster. Observe how natural data characteristics can induce severe data skew.
                      </p>
                    </div>

                    {/* Strategy Pills */}
                    <div className="flex items-center gap-1.5 bg-[#faf8f5] p-1 rounded-xl border border-[#e7e3da]">
                      <button
                        onClick={() => setPartitionStrategy("hash")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                          partitionStrategy === "hash" ? "bg-orange-600 text-white" : "text-stone-600 hover:bg-stone-200"
                        }`}
                      >
                        Hash (ID % 4)
                      </button>
                      <button
                        onClick={() => setPartitionStrategy("range")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                          partitionStrategy === "range" ? "bg-orange-600 text-white" : "text-stone-600 hover:bg-stone-200"
                        }`}
                      >
                        Range (Date)
                      </button>
                      <button
                        onClick={() => setPartitionStrategy("list")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                          partitionStrategy === "list" ? "bg-orange-600 text-white" : "text-stone-600 hover:bg-stone-200"
                        }`}
                      >
                        List (Region)
                      </button>
                      <button
                        onClick={() => setPartitionStrategy("round_robin")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                          partitionStrategy === "round_robin" ? "bg-orange-600 text-white" : "text-stone-600 hover:bg-stone-200"
                        }`}
                      >
                        Round-Robin
                      </button>
                    </div>
                  </div>

                  {/* 4 Nodes Visual Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[0, 1, 2, 3].map(nodeIdx => {
                      const records = partitionedDistribution[nodeIdx] || [];
                      const count = records.length;
                      const percentage = Math.round((count / sampleRecords.length) * 100);
                      const isSkewed = percentage >= 50;

                      return (
                        <div
                          key={nodeIdx}
                          className={`p-4 rounded-xl border transition ${
                            isSkewed
                              ? "bg-rose-50/70 border-rose-300 ring-2 ring-rose-400/40"
                              : "bg-[#faf8f5] border-[#e7e3da]"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-xs uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                              <Server size={14} className="text-orange-600" />
                              Node {nodeIdx + 1}
                            </span>
                            <span className={`text-xs font-mono font-bold ${isSkewed ? "text-rose-600" : "text-stone-900"}`}>
                              {count} records ({percentage}%)
                            </span>
                          </div>

                          {/* Progress bar */}
                          <div className="w-full bg-stone-200 rounded-full h-2 my-2.5 overflow-hidden">
                            <div
                              className={`h-full transition-all duration-300 ${isSkewed ? "bg-rose-500" : "bg-orange-500"}`}
                              style={{ width: `${percentage}%` }}
                            />
                          </div>

                          {isSkewed && (
                            <div className="text-[11px] font-bold text-rose-700 flex items-center gap-1 mb-2">
                              <AlertTriangle size={12} />
                              Data Skew Bottleneck Detected!
                            </div>
                          )}

                          {/* Records inside node */}
                          <div className="space-y-1 text-[11px] font-mono text-stone-600 max-h-36 overflow-y-auto [scrollbar-width:thin]">
                            {records.map((r, rIdx) => (
                              <div key={rIdx} className="bg-white px-2 py-1 rounded border border-[#e7e3da] flex justify-between">
                                <span>#{r.id} ({r.region})</span>
                                <span>₹{r.amount}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Diagnostic Explanation */}
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700 leading-relaxed">
                    <span className="font-bold text-stone-900">Partitioning Insight: </span>
                    {partitionStrategy === "list" && (
                      <span>Notice how <strong>List Partitioning by Region</strong> dumps 7 of 12 records (58%) into Node 1 because "India" is the dominant market, creating a severe data skew bottleneck. <strong>Hash Partitioning</strong> achieves far more balanced distribution across the 4 nodes.</span>
                    )}
                    {partitionStrategy === "hash" && (
                      <span><strong>Hash Partitioning (ID % 4)</strong> uniformly spreads records across all 4 nodes, avoiding hot spots regardless of values in categorical columns.</span>
                    )}
                    {partitionStrategy === "range" && (
                      <span><strong>Range Partitioning by Date</strong> maps time intervals to specific partitions. This allows partition pruning for historical queries, but current write traffic can create a temporary "hot partition" on the latest node.</span>
                    )}
                    {partitionStrategy === "round_robin" && (
                      <span><strong>Round-Robin</strong> guarantees perfect 25% record distribution across all nodes, but lacks a semantic partition key, preventing the query engine from executing partition pruning.</span>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* ---------------------------------------------------- */}
            {/* WORKBENCH 2: CAP THEOREM & QUORUM SIMULATOR          */}
            {/* ---------------------------------------------------- */}
            {activeWorkbench === "quorum_cap" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                      Workbench 2 · Distributed Consistency
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      CAP Theorem, PACELC & Quorum ($R + W &gt; N$) Engine
                    </h2>
                    <p className="text-stone-600 text-xs sm:text-sm mt-1">
                      Configure replica sets and observe quorum overlap guarantees. Simulate a physical network partition to see the trade-off between CP (Consistency) and AP (Availability).
                    </p>
                  </div>

                  {/* Quorum Controls Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Replicas Selector */}
                    <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#e7e3da] space-y-2">
                      <div className="flex justify-between items-center text-xs font-bold text-stone-700">
                        <span>Total Replicas (N):</span>
                        <span className="font-mono text-orange-600 text-base">{clusterReplicas} Nodes</span>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => { setClusterReplicas(3); setWriteQuorum(2); setReadQuorum(2); }}
                          className={`flex-1 py-1.5 rounded-lg text-xs font-bold cursor-pointer ${
                            clusterReplicas === 3 ? "bg-orange-600 text-white" : "bg-white border border-[#e7e3da] text-stone-700"
                          }`}
                        >
                          N = 3 Nodes
                        </button>
                        <button
                          onClick={() => { setClusterReplicas(5); setWriteQuorum(3); setReadQuorum(3); }}
                          className={`flex-1 py-1.5 rounded-lg text-xs font-bold cursor-pointer ${
                            clusterReplicas === 5 ? "bg-orange-600 text-white" : "bg-white border border-[#e7e3da] text-stone-700"
                          }`}
                        >
                          N = 5 Nodes
                        </button>
                      </div>
                      <div className="text-[11px] text-stone-500 mt-1">
                        Majority Quorum: &ge; {quorumStats.majority} nodes
                      </div>
                    </div>

                    {/* Write Quorum Slider */}
                    <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#e7e3da] space-y-2">
                      <div className="flex justify-between items-center text-xs font-bold text-stone-700">
                        <span>Write Quorum (W):</span>
                        <span className="font-mono text-orange-600 text-base">{writeQuorum} acks</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max={clusterReplicas}
                        value={writeQuorum}
                        onChange={(e) => setWriteQuorum(Number(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                      <div className="text-[11px] text-stone-500">
                        {writeQuorum === 1 ? "Fastest writes, weak durability" : writeQuorum === clusterReplicas ? "All replicas must ack (slowest)" : "Standard majority confirmation"}
                      </div>
                    </div>

                    {/* Read Quorum Slider */}
                    <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#e7e3da] space-y-2">
                      <div className="flex justify-between items-center text-xs font-bold text-stone-700">
                        <span>Read Quorum (R):</span>
                        <span className="font-mono text-orange-600 text-base">{readQuorum} consults</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max={clusterReplicas}
                        value={readQuorum}
                        onChange={(e) => setReadQuorum(Number(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                      <div className="text-[11px] text-stone-500">
                        {readQuorum === 1 ? "Fastest reads, possible stale data" : readQuorum === clusterReplicas ? "Reads all replicas (slowest)" : "Overlapping quorum read"}
                      </div>
                    </div>
                  </div>

                  {/* Quorum Overlap Formula Banner */}
                  <div className={`p-4 rounded-xl border flex flex-wrap items-center justify-between gap-3 ${
                    quorumStats.isStrictlyConsistent
                      ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                      : "bg-rose-50 border-rose-300 text-rose-950"
                  }`}>
                    <div>
                      <div className="font-bold text-sm flex items-center gap-2">
                        {quorumStats.isStrictlyConsistent ? (
                          <CheckCircle className="text-emerald-600" size={18} />
                        ) : (
                          <AlertTriangle className="text-rose-600" size={18} />
                        )}
                        <span>
                          Quorum Formula: R + W = {writeQuorum} + {readQuorum} = {quorumStats.sum} {quorumStats.isStrictlyConsistent ? ">" : "≤"} N ({clusterReplicas})
                        </span>
                      </div>
                      <p className="text-xs mt-1 opacity-90">
                        {quorumStats.isStrictlyConsistent
                          ? "Strict Strong Consistency Guaranteed: Read and write replica sets are mathematically guaranteed to overlap on at least 1 node."
                          : "Consistency Violation Risk: Read and write sets do NOT overlap. Readers may observe stale values before replication completes."}
                      </p>
                    </div>

                    <div className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider ${
                      quorumStats.isStrictlyConsistent ? "bg-emerald-200 text-emerald-900" : "bg-rose-200 text-rose-900"
                    }`}>
                      {quorumStats.isStrictlyConsistent ? "Strongly Consistent" : "Stale Read Anomaly"}
                    </div>
                  </div>

                  {/* Network Partition Simulation */}
                  <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#e7e3da] space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <Lock size={16} className="text-orange-600" />
                        <span className="font-bold text-xs uppercase tracking-wide text-stone-800">
                          Network Partition & CAP Trade-Off Simulator
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setNetworkPartitionActive(!networkPartitionActive)}
                          className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                            networkPartitionActive
                              ? "bg-rose-600 text-white"
                              : "bg-white border border-[#e7e3da] text-stone-700 hover:bg-stone-100"
                          }`}
                        >
                          {networkPartitionActive ? "Heal Partition" : "Sever Network Link (Split Cluster)"}
                        </button>

                        <div className="flex gap-1">
                          <button
                            onClick={() => setCapMode("CP")}
                            className={`px-2.5 py-1 rounded text-xs font-bold cursor-pointer ${
                              capMode === "CP" ? "bg-stone-900 text-white" : "bg-white border border-[#e7e3da] text-stone-600"
                            }`}
                          >
                            CP Mode
                          </button>
                          <button
                            onClick={() => setCapMode("AP")}
                            className={`px-2.5 py-1 rounded text-xs font-bold cursor-pointer ${
                              capMode === "AP" ? "bg-stone-900 text-white" : "bg-white border border-[#e7e3da] text-stone-600"
                            }`}
                          >
                            AP Mode
                          </button>
                        </div>
                      </div>
                    </div>

                    {networkPartitionActive ? (
                      <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-950 text-xs space-y-1">
                        <div className="font-bold flex items-center gap-1.5 text-amber-900">
                          <AlertTriangle size={14} />
                          Network Partition Active: Sub-Cluster 1 (Nodes 1, 2) disconnected from Sub-Cluster 2 (Node 3)
                        </div>
                        <p className="leading-relaxed">
                          {capMode === "CP"
                            ? "In CP Mode: The minority partition (Node 3) REJECTS all writes because it cannot obtain majority quorum (W=2 requires 2 nodes). This prevents split-brain at the cost of availability."
                            : "In AP Mode: Both partitions continue accepting writes locally to remain available. However, when the partition heals, concurrent writes will conflict, requiring complex reconciliation."}
                        </p>
                      </div>
                    ) : (
                      <p className="text-xs text-stone-500">
                        Cluster is fully connected. PACELC rule applies: during normal operation, choose between Latency (low R/W) and Consistency (high R/W).
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* ---------------------------------------------------- */}
            {/* WORKBENCH 3: RAFT CONSENSUS & LEADER ELECTION        */}
            {/* ---------------------------------------------------- */}
            {activeWorkbench === "raft_consensus" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-4">
                    <div>
                      <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                        Workbench 3 · Consensus Protocol
                      </span>
                      <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                        Raft Consensus & Distributed Leader Election Visualizer
                      </h2>
                      <p className="text-stone-600 text-xs sm:text-sm mt-1">
                        Observe state transitions in a 5-node Raft cluster. Simulate a leader crash to trigger election timeouts and observe majority voting without split-brain.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleSimulateLeaderCrash}
                        className="px-3.5 py-1.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 hover:bg-rose-100 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                      >
                        <AlertOctagon size={14} />
                        <span>Crash Leader (Node 1)</span>
                      </button>
                      <button
                        onClick={handleTriggerElection}
                        className="px-3.5 py-1.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                      >
                        <Play size={14} />
                        <span>Trigger Majority Election</span>
                      </button>
                      <button
                        onClick={handleResetRaft}
                        className="p-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 cursor-pointer"
                        title="Reset Cluster"
                      >
                        <RotateCcw size={16} />
                      </button>
                    </div>
                  </div>

                  {/* 5 Nodes Raft Visualizer */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                    {raftNodes.map(node => {
                      const isLeader = node.role === "Leader";
                      const isDead = node.role === "Dead";

                      return (
                        <div
                          key={node.id}
                          className={`p-4 rounded-xl border transition ${
                            isLeader
                              ? "bg-emerald-50 border-emerald-300 ring-2 ring-emerald-400/40"
                              : isDead
                              ? "bg-stone-100 border-stone-300 opacity-60"
                              : "bg-white border-[#e7e3da]"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-xs font-bold text-stone-800">
                              Node {node.id}
                            </span>
                            <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                              isLeader ? "bg-emerald-200 text-emerald-900" :
                              isDead ? "bg-rose-200 text-rose-900" : "bg-stone-100 text-stone-700"
                            }`}>
                              {node.role}
                            </span>
                          </div>

                          <div className="mt-3 space-y-1 text-xs">
                            <div className="flex justify-between text-stone-500">
                              <span>Term:</span>
                              <span className="font-mono font-bold text-stone-900">{node.term}</span>
                            </div>
                            <div className="flex justify-between text-stone-500">
                              <span>Heartbeat:</span>
                              <span className={`font-mono ${isDead ? "text-rose-600" : "text-emerald-600"}`}>
                                {isDead ? "Timed Out" : "150ms OK"}
                              </span>
                            </div>
                            <div className="flex justify-between text-stone-500">
                              <span>Votes Won:</span>
                              <span className="font-mono font-bold text-stone-900">{node.votes} / 5</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Replicated Log Stream */}
                  <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#e7e3da] space-y-2">
                    <div className="text-xs font-bold text-stone-800 uppercase tracking-wide flex items-center justify-between">
                      <span>Replicated State Machine Log (Committed across Majority)</span>
                      <span className="text-stone-500 text-[11px]">Commit Index: 2</span>
                    </div>
                    <div className="space-y-1.5 font-mono text-xs">
                      {raftLog.map(entry => (
                        <div key={entry.index} className="p-2.5 rounded-lg bg-white border border-[#e7e3da] flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="px-1.5 py-0.5 rounded bg-stone-100 text-stone-700 text-[10px] font-bold">
                              Index {entry.index} | Term {entry.term}
                            </span>
                            <span className="text-stone-800">{entry.cmd}</span>
                          </div>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                            Committed
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ---------------------------------------------------- */}
            {/* WORKBENCH 4: EXPONENTIAL BACKOFF & CIRCUIT BREAKER   */}
            {/* ---------------------------------------------------- */}
            {activeWorkbench === "backoff_circuit" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                      Workbench 4 · Resilient Retries & Failsafe
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      Exponential Backoff, Jitter & Circuit Breaker Simulator
                    </h2>
                    <p className="text-stone-600 text-xs sm:text-sm mt-1">
                      See how exponential backoff with full jitter de-synchronizes retrying clients to prevent the "thundering herd" effect, combined with a 3-state Circuit Breaker.
                    </p>
                  </div>

                  {/* Top Controls Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Backoff Calculator */}
                    <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#e7e3da] space-y-3">
                      <div className="flex justify-between items-center text-xs font-bold text-stone-800 uppercase tracking-wide">
                        <span>Exponential Backoff Formula</span>
                        <button
                          onClick={() => setUseJitter(!useJitter)}
                          className={`px-2.5 py-1 rounded text-xs font-bold cursor-pointer ${
                            useJitter ? "bg-orange-600 text-white" : "bg-white border border-[#e7e3da] text-stone-700"
                          }`}
                        >
                          {useJitter ? "Jitter Active (+Rand)" : "No Jitter (Deterministic)"}
                        </button>
                      </div>

                      <div className="overflow-x-auto rounded-lg border border-[#e7e3da]">
                        <table className="w-full text-left text-xs">
                          <thead className="bg-white text-stone-800 border-b border-[#e7e3da]">
                            <tr>
                              <th className="px-3 py-2">Attempt</th>
                              <th className="px-3 py-2">Pure Exponential</th>
                              <th className="px-3 py-2">With Jitter Offset</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#e7e3da] bg-[#faf8f5]">
                            {retryDelays.map(r => (
                              <tr key={r.attempt}>
                                <td className="px-3 py-1.5 font-bold">Attempt #{r.attempt}</td>
                                <td className="px-3 py-1.5 font-mono">{r.pureExp}s</td>
                                <td className="px-3 py-1.5 font-mono font-bold text-orange-600">{r.withJitter}s</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Circuit Breaker State Machine */}
                    <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#e7e3da] space-y-3">
                      <div className="flex justify-between items-center text-xs font-bold text-stone-800 uppercase tracking-wide">
                        <span>Circuit Breaker State</span>
                        <span className={`px-2.5 py-1 rounded-full text-xs font-black uppercase ${
                          circuitState === "CLOSED" ? "bg-emerald-100 text-emerald-800" :
                          circuitState === "OPEN" ? "bg-rose-100 text-rose-800" : "bg-amber-100 text-amber-800"
                        }`}>
                          {circuitState}
                        </span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between text-stone-600">
                          <span>Consecutive Failures:</span>
                          <span className="font-mono font-bold text-stone-900">{consecutiveFailures} / 3</span>
                        </div>
                        <div className="flex gap-2 pt-2">
                          <button
                            onClick={() => handleSimulateServiceCall(false)}
                            className="flex-1 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs transition cursor-pointer"
                          >
                            Simulate Failed Call
                          </button>
                          <button
                            onClick={() => handleSimulateServiceCall(true)}
                            className="flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition cursor-pointer"
                          >
                            Simulate Success Call
                          </button>
                        </div>
                        {circuitState === "OPEN" && (
                          <button
                            onClick={() => setCircuitState("HALF-OPEN")}
                            className="w-full py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs transition cursor-pointer"
                          >
                            Timeout Expired: Try Half-Open Trial
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ---------------------------------------------------- */}
            {/* WORKBENCH 5: STREAMING BACKPRESSURE & CONSUMER LAG   */}
            {/* ---------------------------------------------------- */}
            {activeWorkbench === "backpressure_lag" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                      Workbench 5 · Stream Flow Control
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      Streaming Backpressure & Kafka Consumer Lag Simulator
                    </h2>
                    <p className="text-stone-600 text-xs sm:text-sm mt-1">
                      Simulate a high-throughput event producer streaming into Apache Kafka. Observe how consumer lag explodes when processing capacity is insufficient, and how backpressure restores queue balance.
                    </p>
                  </div>

                  {/* Flow Control Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Producer Rate */}
                    <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#e7e3da] space-y-2">
                      <div className="flex justify-between items-center text-xs font-bold text-stone-700">
                        <span>Producer Generation Rate:</span>
                        <span className="font-mono text-orange-600 text-base">{producerRate.toLocaleString()}/s</span>
                      </div>
                      <input
                        type="range"
                        min="20000"
                        max="100000"
                        step="10000"
                        value={producerRate}
                        onChange={(e) => setProducerRate(Number(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                      <div className="text-[11px] text-stone-500">Incoming ingestion stream</div>
                    </div>

                    {/* Consumer Workers */}
                    <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#e7e3da] space-y-2">
                      <div className="flex justify-between items-center text-xs font-bold text-stone-700">
                        <span>Consumer Pool Size:</span>
                        <span className="font-mono text-orange-600 text-base">{consumerWorkers} Workers</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="5"
                        value={consumerWorkers}
                        onChange={(e) => setConsumerWorkers(Number(e.target.value))}
                        className="w-full accent-orange-600 cursor-pointer"
                      />
                      <div className="text-[11px] text-stone-500">
                        Total Capacity: {streamLagStats.totalConsumerCapacity.toLocaleString()} events/sec
                      </div>
                    </div>

                    {/* Backpressure Switch */}
                    <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#e7e3da] space-y-2 flex flex-col justify-between">
                      <div className="flex justify-between items-center text-xs font-bold text-stone-700">
                        <span>Reactive Backpressure:</span>
                        <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                          backpressureEnabled ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"
                        }`}>
                          {backpressureEnabled ? "ACTIVE" : "DISABLED"}
                        </span>
                      </div>
                      <button
                        onClick={() => setBackpressureEnabled(!backpressureEnabled)}
                        className={`w-full py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                          backpressureEnabled
                            ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                            : "bg-rose-600 hover:bg-rose-700 text-white"
                        }`}
                      >
                        {backpressureEnabled ? "Disable Backpressure" : "Enable Backpressure"}
                      </button>
                    </div>
                  </div>

                  {/* Consumer Lag Meter */}
                  <div className={`p-4 rounded-xl border flex flex-wrap items-center justify-between gap-3 ${
                    streamLagStats.isOverloaded && !backpressureEnabled
                      ? "bg-rose-50 border-rose-300 text-rose-950"
                      : "bg-emerald-50 border-emerald-300 text-emerald-950"
                  }`}>
                    <div>
                      <div className="font-bold text-sm flex items-center gap-2">
                        {streamLagStats.isOverloaded && !backpressureEnabled ? (
                          <AlertTriangle className="text-rose-600" size={18} />
                        ) : (
                          <CheckCircle className="text-emerald-600" size={18} />
                        )}
                        <span>
                          Current Consumer Lag: {Math.round(streamLagStats.consumerLag).toLocaleString()} messages
                        </span>
                      </div>
                      <p className="text-xs mt-1 opacity-90">
                        {streamLagStats.isOverloaded && !backpressureEnabled
                          ? "CRITICAL WARNING: Unbounded consumer lag growth! Workers cannot keep up with the producer and memory is continuously expanding."
                          : backpressureEnabled && streamLagStats.isOverloaded
                          ? "Flow Control Throttling: Backpressure has signaled the producer to throttle from " + producerRate.toLocaleString() + " to " + streamLagStats.effectiveIngestion.toLocaleString() + " events/sec."
                          : "Pipeline Operating Smoothly: Downstream workers have sufficient headroom."}
                      </p>
                    </div>

                    <div className="text-right">
                      <div className="text-xs uppercase font-semibold opacity-70">Effective Throughput</div>
                      <div className="text-xl font-mono font-black">
                        {streamLagStats.effectiveIngestion.toLocaleString()} / sec
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ---------------------------------------------------- */}
            {/* WORKBENCH 6: IDEMPOTENCY & 15-QUESTION QUIZ          */}
            {/* ---------------------------------------------------- */}
            {activeWorkbench === "idempotency_quiz" && (
              <div className="space-y-8">
                {/* Idempotent Upsert Simulator */}
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-4">
                    <div>
                      <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                        Workbench 6 · Exactly-Once Semantics & Assessment
                      </span>
                      <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                        Idempotent Pipeline Receiver & Deduplication Engine
                      </h2>
                      <p className="text-stone-600 text-xs sm:text-sm mt-1">
                        Simulate repeated network deliveries of a ₹1,000 debit. Observe how non-idempotent blind inserts cause financial leakage, whereas idempotent upserts guarantee exact safety.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="text-right mr-2">
                        <div className="text-xs text-stone-500 font-semibold uppercase">Account Balance</div>
                        <div className="text-xl font-mono font-black text-stone-900">₹{accountBalance.toLocaleString()}</div>
                      </div>
                      <button
                        onClick={handleResetBalance}
                        className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 cursor-pointer"
                        title="Reset Account Balance"
                      >
                        <RotateCcw size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Simulation Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      onClick={() => handleSimulatePayment(false)}
                      className="p-4 rounded-xl bg-rose-50 border border-rose-200 hover:bg-rose-100 text-left transition cursor-pointer space-y-1"
                    >
                      <div className="font-bold text-rose-900 text-sm flex items-center gap-1.5">
                        <AlertTriangle size={16} />
                        Simulate Blind Insert (Non-Idempotent)
                      </div>
                      <p className="text-xs text-rose-700">
                        Executes <code>balance = balance - 1000</code> blindly without idempotency key checks. Retrying causes double-billing.
                      </p>
                    </button>

                    <button
                      onClick={() => handleSimulatePayment(true)}
                      className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 text-left transition cursor-pointer space-y-1"
                    >
                      <div className="font-bold text-emerald-900 text-sm flex items-center gap-1.5">
                        <CheckCircle size={16} />
                        Simulate Idempotent Upsert (With Key)
                      </div>
                      <p className="text-xs text-emerald-700">
                        Tracks <code>idempotency_key = 'TXN-9001'</code>. Duplicate replays return previous commit without secondary balance deductions.
                      </p>
                    </button>
                  </div>

                  {/* Audit Trail */}
                  <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#e7e3da] space-y-2">
                    <div className="text-xs font-bold text-stone-700 uppercase tracking-wide">
                      Transaction Audit Log Trail
                    </div>
                    {txAuditLog.length === 0 ? (
                      <p className="text-xs text-stone-400 italic">No transactions executed yet. Click a button above.</p>
                    ) : (
                      <div className="space-y-1 font-mono text-xs">
                        {txAuditLog.map((log, idx) => (
                          <div
                            key={idx}
                            className={`p-2 rounded border flex items-center justify-between ${
                              log.status === "CORRUPTED"
                                ? "bg-rose-100/60 border-rose-300 text-rose-900 font-bold"
                                : log.status === "SAFE"
                                ? "bg-amber-50 border-amber-300 text-amber-900 font-bold"
                                : "bg-emerald-50 border-emerald-300 text-emerald-900"
                            }`}
                          >
                            <span>[{log.time}] {log.msg}</span>
                            <span className="text-[10px] uppercase font-black">{log.status}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* 15-Question Curriculum Mastery Quiz */}
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-4">
                    <div>
                      <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
                        Curriculum Assessment
                      </span>
                      <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                        15-Question Distributed Systems Mastery Quiz
                      </h2>
                      <p className="text-stone-600 text-xs sm:text-sm mt-1">
                        Test your technical understanding across partitioning, replication, CAP theorem, Raft consensus, idempotency, backpressure, and fault tolerance.
                      </p>
                    </div>

                    {showQuizResults ? (
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="text-xs text-stone-500 font-semibold">Your Score</div>
                          <div className={`text-xl font-black ${
                            quizScore >= 12 ? "text-emerald-600" :
                            quizScore >= 9 ? "text-amber-600" : "text-rose-600"
                          }`}>
                            {quizScore} / {quizQuestions.length} ({Math.round((quizScore / quizQuestions.length) * 100)}%)
                          </div>
                        </div>
                        <button
                          onClick={handleResetQuiz}
                          className="px-3.5 py-2 rounded-xl bg-stone-100 border border-stone-300 text-stone-700 hover:bg-stone-200 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                        >
                          <RotateCcw size={14} />
                          <span>Retake</span>
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setShowQuizResults(true)}
                        disabled={Object.keys(selectedAnswers).length === 0}
                        className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm shadow-sm transition disabled:opacity-50 cursor-pointer"
                      >
                        Submit Answers ({Object.keys(selectedAnswers).length}/{quizQuestions.length})
                      </button>
                    )}
                  </div>

                  {/* Questions List */}
                  <div className="space-y-6">
                    {quizQuestions.map((q, idx) => {
                      const isAnswered = selectedAnswers[q.id] !== undefined;
                      const selectedOpt = selectedAnswers[q.id];
                      const isCorrect = selectedOpt === q.correct;

                      return (
                        <div key={q.id} className="p-4 sm:p-5 rounded-xl bg-[#faf8f5] border border-[#e7e3da] space-y-3">
                          <div className="flex items-start gap-2.5">
                            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <span className="font-bold text-stone-900 text-sm sm:text-base leading-snug">
                              {q.q}
                            </span>
                          </div>

                          {/* Options */}
                          <div className="space-y-2 pt-1 pl-8">
                            {q.options.map((opt, optIdx) => {
                              const isThisSelected = selectedOpt === optIdx;
                              let optClass = "bg-white border-[#e7e3da] text-stone-700 hover:bg-stone-50";

                              if (showQuizResults) {
                                if (optIdx === q.correct) {
                                  optClass = "bg-emerald-50 border-emerald-300 text-emerald-900 font-bold";
                                } else if (isThisSelected && !isCorrect) {
                                  optClass = "bg-rose-50 border-rose-300 text-rose-900";
                                } else {
                                  optClass = "bg-white border-[#e7e3da] text-stone-400 opacity-60";
                                }
                              } else if (isThisSelected) {
                                optClass = "bg-orange-50 border-orange-400 text-orange-950 font-semibold ring-1 ring-orange-300";
                              }

                              return (
                                <button
                                  key={optIdx}
                                  onClick={() => !showQuizResults && handleSelectAnswer(q.id, optIdx)}
                                  disabled={showQuizResults}
                                  className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition flex items-center justify-between gap-3 cursor-pointer ${optClass}`}
                                >
                                  <span>{opt}</span>
                                  {showQuizResults && optIdx === q.correct && (
                                    <CheckCircle size={16} className="text-emerald-600 shrink-0" />
                                  )}
                                  {showQuizResults && isThisSelected && !isCorrect && (
                                    <AlertTriangle size={16} className="text-rose-600 shrink-0" />
                                  )}
                                </button>
                              );
                            })}
                          </div>

                          {/* Explanation */}
                          {showQuizResults && (
                            <div className="mt-3 ml-8 p-3 rounded-lg bg-orange-50/70 border border-orange-200 text-stone-800 text-xs leading-relaxed">
                              <span className="font-bold text-orange-900">Explanation: </span>
                              {q.expl}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
