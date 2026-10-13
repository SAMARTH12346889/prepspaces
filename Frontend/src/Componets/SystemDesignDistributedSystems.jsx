import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Clock,
  AlertTriangle,
  CheckCircle2,
  BookOpen,
  Sliders,
  HelpCircle,
  FolderTree,
  ShieldCheck,
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  ChevronDown,
  ChevronUp,
  Cpu,
  Server,
  Network,
  Activity,
  Zap,
  Lock,
  Timer,
  Layers,
  Sparkles,
  GitBranch,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import {
  DistributedRequestDilemmaDiagram,
  ClockDriftMonotonicDiagram,
  LogicalClocksDiagram,
  ExponentialBackoffJitterDiagram,
  CircuitBreakerDiagram,
  VisualDiagramComponentModule9,
} from "./SystemDesignDistributedSystemsDiagrams";

export default function SystemDesignDistributedSystems() {
  const navigate = useNavigate();

  // Navigation tab state
  const [activeTab, setActiveTab] = useState("curriculum"); // "curriculum" | "calculators" | "qa" | "project" | "assessment" | "reading"
  const [activeWeek, setActiveWeek] = useState(1); // 1 | 2 | 3
  const [activeLesson, setActiveLesson] = useState("9.1");

  // Expanded Q&A accordion states
  const [expandedQA, setExpandedQA] = useState({ "qa-1": true });
  const toggleQA = (id) => {
    setExpandedQA((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // ---------------------------------------------------------------------------
  // INTERACTIVE TOOL 1: EXPONENTIAL BACKOFF & FULL JITTER SIMULATOR
  // ---------------------------------------------------------------------------
  const [baseDelayMs, setBaseDelayMs] = useState(200);
  const [maxDelayCapMs, setMaxDelayCapMs] = useState(3200);
  const [retryAttemptCount, setRetryAttemptCount] = useState(4);

  const backoffSchedule = useMemo(() => {
    const attempts = [];
    for (let i = 0; i <= retryAttemptCount; i++) {
      const rawDelay = Math.min(maxDelayCapMs, baseDelayMs * Math.pow(2, i));
      const fullJitterRange = `0 – ${rawDelay} ms`;
      const avgJitterDelay = Math.round(rawDelay / 2);
      attempts.push({
        attemptIndex: i,
        rawDelay,
        fullJitterRange,
        avgJitterDelay,
      });
    }
    return attempts;
  }, [baseDelayMs, maxDelayCapMs, retryAttemptCount]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE TOOL 2: DEADLINE BUDGET ALLOCATION & PROPAGATION
  // ---------------------------------------------------------------------------
  const [overallDeadlineMs, setOverallDeadlineMs] = useState(400);
  const [authBudgetMs, setAuthBudgetMs] = useState(40);
  const [dbBudgetMs, setDbBudgetMs] = useState(120);
  const [downstreamAiBudgetMs, setDownstreamAiBudgetMs] = useState(150);
  const [serializationBudgetMs, setSerializationBudgetMs] = useState(40);

  const deadlineAnalysis = useMemo(() => {
    const totalComponentPlanned =
      authBudgetMs + dbBudgetMs + downstreamAiBudgetMs + serializationBudgetMs;
    const slackMarginMs = overallDeadlineMs - totalComponentPlanned;
    const isSafe = slackMarginMs >= 0;

    return {
      totalComponentPlanned,
      slackMarginMs,
      isSafe,
    };
  }, [
    overallDeadlineMs,
    authBudgetMs,
    dbBudgetMs,
    downstreamAiBudgetMs,
    serializationBudgetMs,
  ]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE TOOL 3: QUEUE BACKLOG & RECOVERY DRAIN ESTIMATOR
  // ---------------------------------------------------------------------------
  const [normalArrivalRps, setNormalArrivalRps] = useState(80);
  const [degradedThroughputRps, setDegradedThroughputRps] = useState(50);
  const [outageDurationMinutes, setOutageDurationMinutes] = useState(10);
  const [restoredWorkerCapacityRps, setRestoredWorkerCapacityRps] = useState(100);

  const queueDynamics = useMemo(() => {
    const netGrowthPerSec = Math.max(0, normalArrivalRps - degradedThroughputRps);
    const totalBacklogAccumulated = netGrowthPerSec * (outageDurationMinutes * 60);

    const netDrainRatePerSec = Math.max(
      1,
      restoredWorkerCapacityRps - normalArrivalRps
    );
    const drainDurationSeconds = Math.round(totalBacklogAccumulated / netDrainRatePerSec);
    const drainDurationMinutes = (drainDurationSeconds / 60).toFixed(1);

    return {
      netGrowthPerSec,
      totalBacklogAccumulated,
      netDrainRatePerSec,
      drainDurationMinutes,
    };
  }, [
    normalArrivalRps,
    degradedThroughputRps,
    outageDurationMinutes,
    restoredWorkerCapacityRps,
  ]);

  // ---------------------------------------------------------------------------
  // 9-QUESTION ASSESSMENT QUIZ STATE
  // ---------------------------------------------------------------------------
  const quizQuestions = [
    {
      id: 1,
      question:
        "What is the main reason a remote caller cannot know that a timed-out operation failed?",
      options: [
        "TCP always discards successful writes",
        "The operation may have completed while its response was delayed or lost",
        "A timeout automatically rolls back remote transactions",
      ],
      correct: 1,
      explanation:
        "In a distributed system, a timeout only indicates that the caller did not receive a response within its deadline. The request may have committed on the server, but the network connection reset or dropped the response packet during return transit.",
    },
    {
      id: 2,
      question:
        "Which clock is appropriate for measuring elapsed API duration within a process?",
      options: [
        "A wall-clock timestamp that may be adjusted",
        "A monotonic elapsed-time clock",
        "A randomly generated ID",
      ],
      correct: 1,
      explanation:
        "Monotonic clocks (such as `performance.now()` in Node.js or `System.nanoTime()` in Java) steadily advance based on CPU hardware ticks and are immune to NTP backward step adjustments or leap seconds.",
    },
    {
      id: 3,
      question:
        "What does a Lamport clock guarantee about causally ordered events?",
      options: [
        "The timestamp of the earlier causal event is less than the later one",
        "Every timestamp is the exact UTC time",
        "Events with increasing timestamps are always causally related",
      ],
      correct: 0,
      explanation:
        "If event a causally precedes event b (a -> b), then L(a) < L(b). However, the converse is not true: L(a) < L(b) does not prove that a caused b, because independent concurrent events may have lower numbers.",
    },
    {
      id: 4,
      question: "What is the main difference between a timeout and a deadline?",
      options: [
        "They always mean the same thing",
        "A timeout limits a particular wait or operation; a deadline limits the total useful time for an operation",
        "A deadline eliminates network failures",
      ],
      correct: 1,
      explanation:
        "A timeout limits an individual socket or RPC call, while a deadline establishes the end-to-end time budget across all microservice layers, propagating remaining budgets and triggering cooperative cancellation.",
    },
    {
      id: 5,
      question: "Why use exponential backoff with jitter?",
      options: [
        "To synchronize every client retry",
        "To spread retries over time and reduce pressure on an unhealthy dependency",
        "To ensure every request succeeds",
      ],
      correct: 1,
      explanation:
        "Exponential backoff increases delays between attempts, and jitter randomizes the delay to avoid thundering herds where thousands of clients retry at the exact same millisecond.",
    },
    {
      id: 6,
      question: "What is idempotency intended to protect against?",
      options: [
        "Duplicate effects from repeating the same logical operation",
        "Every possible Byzantine failure",
        "Clock synchronization errors",
      ],
      correct: 0,
      explanation:
        "Idempotency guarantees that executing the same operation multiple times with the same idempotency key produces the exact same side-effect state as executing it once, preventing duplicate billing or submissions.",
    },
    {
      id: 7,
      question: "What does a circuit breaker primarily do?",
      options: [
        "Repairs a remote service automatically",
        "Stops repeated calls to a dependency that is likely to continue failing",
        "Guarantees that a database replica is fully up to date",
      ],
      correct: 1,
      explanation:
        "A circuit breaker monitors failure rates; when a threshold is breached, it trips OPEN to fail immediately without placing additional load on the struggling dependency, protecting thread pools and preventing cascading outages.",
    },
    {
      id: 8,
      question: "Why can a healthy process appear failed to another machine?",
      options: [
        "Network delays or partitions may prevent communication",
        "Every heartbeat proves exact physical time",
        "Logical clocks guarantee connectivity",
      ],
      correct: 0,
      explanation:
        "Network congestion, packet loss, GC pauses, or asymmetric routing can prevent heartbeats from arriving, making a completely healthy service appear dead to an external observer.",
    },
    {
      id: 9,
      question: "What is a cascading failure?",
      options: [
        "An outage that always stays limited to one server",
        "A failure that overloads or destabilizes dependent components and causes further failures",
        "A normal successful retry",
      ],
      correct: 1,
      explanation:
        "A cascading failure occurs when a problem in one component (e.g. slow responses) causes callers to consume excess threads, time out, and retry, triggering a chain reaction that knocks down unrelated upstream services.",
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
  // PRACTICAL LAB PROGRESS TRACKING (7 PHASES)
  // ---------------------------------------------------------------------------
  const [labChecklist, setLabChecklist] = useState({
    phase1: false,
    phase2: false,
    phase3: false,
    phase4: false,
    phase5: false,
    phase6: false,
    phase7: false,
  });

  const toggleChecklist = (key) => {
    setLabChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedCount = Object.values(labChecklist).filter(Boolean).length;

  // ---------------------------------------------------------------------------
  // SENIOR SYSTEMS ENGINEERING Q&A (6 DEEP PRODUCTION SCENARIOS)
  // ---------------------------------------------------------------------------
  const qaScenarios = [
    {
      id: "qa-1",
      title: "Why does a request timeout NOT prove that the remote operation failed?",
      context:
        "An API caller experiences an HTTP 504 Gateway Timeout while submitting an exam answer.",
      answer:
        "In a distributed system, a timeout is a unilateral local decision by the client to stop waiting. The server may have successfully received the request, begun a database transaction, and committed the record. If the return packet was dropped or delayed by a slow network, the client records a 'failure' while the database holds a 'committed' state. This is why non-idempotent blind retries cause duplicate data corruption.",
    },
    {
      id: "qa-2",
      title: "How does Clock Skew break distributed locks and leases, and how do Fencing Tokens fix it?",
      context:
        "A worker acquires a 10-second distributed lease in Redis, but experiences a 12-second Garbage Collection pause.",
      answer:
        "If a process pauses for longer than its lease duration, its lock expires on the coordinator while the worker still believes it owns the lock. When it unfreezes, it executes writes concurrently with the newly elected leader. To prevent this, Martin Kleppmann established Fencing Tokens: every time a lease is granted, the coordinator increments a monotonic counter (e.g. token = 42). The storage engine rejects any write whose fencing token is less than the highest token observed.",
    },
    {
      id: "qa-3",
      title: "What is Retry Amplification, and how do Retry Budgets prevent self-inflicted DDoS?",
      context:
        "A multi-tier microservice architecture (Client -> API Gateway -> Service A -> Database) where each layer independently configures 3 retries.",
      answer:
        "If each of 3 layers permits 4 attempts (1 initial + 3 retries), a single failed user request can amplify into 4 x 4 x 4 = 64 requests hitting the database! When the database slows down, the surge of amplified retries causes total collapse. To fix this: (1) Enforce retries only at the outermost caller or an explicit boundary. (2) Implement Retry Budgets (e.g., retries may account for at most 10% of total outbound requests).",
    },
    {
      id: "qa-4",
      title: "How do Circuit Breakers and Retries work together in production without conflict?",
      context:
        "Deciding whether an outgoing HTTP call should trigger an immediate retry or trip a circuit breaker.",
      answer:
        "Retries handle transient, short-lived blips (e.g. packet loss or a temporary 503). Circuit breakers handle persistent downstream degradation. If an endpoint fails intermittently, retries with jitter can succeed. But if failures persist and the error rate exceeds 50% across a 10-second sliding window, the Circuit Breaker trips OPEN. While OPEN, all subsequent calls fail fast in 0ms without hitting the network, giving the downstream service breathing room to recover.",
    },
    {
      id: "qa-5",
      title: "Why is Date.now() dangerous for timeout logic, and why must performance.now() be used?",
      context:
        "Measuring timeout durations in high-throughput Node.js microservices.",
      answer:
        "Date.now() returns wall-clock time from the OS. If an NTP daemon synchronizes time, or a leap second occurs, the system clock can jump backwards (e.g. stepping back 500ms). A timeout loop using `Date.now() - start < timeout` will either freeze or fire prematurely. Monotonic clocks (`performance.now()` in Node.js or `clock_gettime(CLOCK_MONOTONIC)` in C) strictly advance at a constant rate based on CPU hardware cycles, guaranteeing accurate duration measurements.",
    },
    {
      id: "qa-6",
      title: "What is the difference between Liveness Probes and Readiness Probes in Kubernetes?",
      context:
        "A shared database experiences high CPU load, causing backend API health checks to fail.",
      answer:
        "Liveness probes determine whether the container process should be killed and restarted. Readiness probes determine whether the container should receive incoming traffic from the load balancer. If an API cannot reach an overloaded database, failing a Liveness probe causes Kubernetes to restart the container, triggering cold start CPU spikes and making the outage worse. Instead, it should fail Readiness to shed traffic without restarting.",
    },
  ];

  // ---------------------------------------------------------------------------
  // 14 LESSONS CURRICULUM DATA
  // ---------------------------------------------------------------------------
  const lessons = [
    // WEEK 1
    {
      id: "9.1",
      week: 1,
      title: "What is a Distributed System?",
      summary:
        "Independent processes, network communication, partial failures, concurrent execution, and independent unsynchronized clocks.",
      diagram: "request-dilemma",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            A single-process program can call a local function, inspect the returned value in memory, and continue execution deterministically. When an application communicates over a network, the outcome is fundamentally uncertain.
          </p>
          <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-4 text-xs font-mono space-y-1">
            <span className="text-stone-500 font-bold block">The 6 Inherent Characteristics:</span>
            <div>1. <strong>Independent Processes:</strong> Separate memory and runtimes without shared state.</div>
            <div>2. <strong>Network Communication:</strong> Unreliable channels that drop, delay, or reorder packets.</div>
            <div>3. <strong>Partial Failure:</strong> One dependency crashes while the rest of the application runs.</div>
            <div>4. <strong>Concurrent Execution:</strong> No global thread scheduler or execution timeline.</div>
            <div>5. <strong>Independent Clocks:</strong> Machines disagree on the current physical time.</div>
            <div>6. <strong>Shared Goals:</strong> Must coordinate components to provide a unified user service.</div>
          </div>
          <h4 className="font-bold text-stone-900 text-base mt-3">The Anatomy of a Distributed Request</h4>
          <p className="text-xs text-stone-600">
            When a student submits an AI interview answer, the request touches the API Gateway, PostgreSQL DB, RabbitMQ/Kafka broker, and AI evaluation workers. If the worker crashes after storing the score but before acknowledging the message, the broker will redeliver the task. Your architecture must remain safe despite this uncertainty.
          </p>
        </div>
      ),
    },
    {
      id: "9.2",
      week: 1,
      title: "Failure Models: How Systems Fail",
      summary:
        "Fault vs. error vs. failure, crash-stop, crash-recovery, omission, timing, response, and Byzantine behaviors.",
      diagram: "request-dilemma",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            Before choosing a recovery algorithm, engineers must specify which failure model the system is designed to tolerate:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-lg border border-stone-200 bg-white">
              <strong className="text-stone-900 block">Crash Failure</strong>
              <span className="text-stone-600 text-[11px] block mt-1">A process halts execution unexpectedly (e.g. out of memory, hardware fault).</span>
            </div>
            <div className="p-3 rounded-lg border border-stone-200 bg-white">
              <strong className="text-stone-900 block">Omission Failure</strong>
              <span className="text-stone-600 text-[11px] block mt-1">A message that should be transmitted or received is dropped by the network.</span>
            </div>
            <div className="p-3 rounded-lg border border-stone-200 bg-white">
              <strong className="text-stone-900 block">Timing Failure</strong>
              <span className="text-stone-600 text-[11px] block mt-1">A response arrives outside the required deadline due to GC pauses or network queue delay.</span>
            </div>
            <div className="p-3 rounded-lg border border-stone-200 bg-white">
              <strong className="text-stone-900 block">Byzantine Failure</strong>
              <span className="text-stone-600 text-[11px] block mt-1">Arbitrary, malicious, or corrupted messages. Requires cryptographic consensus.</span>
            </div>
          </div>
          <div className="p-3 rounded-xl border border-stone-200 bg-[#faf8f4] text-xs text-stone-600">
            <strong>Crash-Stop vs. Crash-Recovery:</strong> In web services, crash-recovery is standard: processes restart and must recover durable state from disk or event logs without duplicating external side effects.
          </div>
        </div>
      ),
    },
    {
      id: "9.3",
      week: 1,
      title: "Synchronous vs. Asynchronous Models",
      summary:
        "Timing assumptions, partial synchrony, network delays, and the FLP Impossibility Result for consensus.",
      diagram: "request-dilemma",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            In distributed systems theory, &quot;synchronous&quot; refers to timing bounds rather than programming language promises:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-stone-600">
            <li><strong>Synchronous Model:</strong> Assumes a known upper bound on message delivery latency and processing speed. Rare in real cloud networks.</li>
            <li><strong>Asynchronous Model:</strong> No upper bounds exist. An un-responsive process could be dead, running slow, or paused.</li>
            <li><strong>Partial Synchrony:</strong> The system behaves asynchronously during periods of congestion or network splits, but eventually stabilizes with bounded latency.</li>
          </ul>
          <h4 className="font-bold text-stone-900 text-base mt-2">The FLP Impossibility Result (Fischer, Lynch, Paterson 1985)</h4>
          <p className="text-xs text-stone-600">
            In a fully asynchronous message-passing system, deterministic consensus cannot guarantee termination if even a single process can crash. Practical consensus systems (Raft, Paxos) rely on partial synchrony and randomized timeout election backoffs.
          </p>
        </div>
      ),
    },
    {
      id: "9.4",
      week: 1,
      title: "Physical Clocks: Time is Not Shared",
      summary:
        "Wall-clock UTC time, clock skew, drift rates, Network Time Protocol (NTP), and timestamp uncertainty.",
      diagram: "clocks-drift",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            Every machine in a cluster contains a quartz crystal oscillator that ticks independently. Clocks suffer from <strong>Clock Drift</strong> (drifting away from true UTC at 1–10 parts per million) and <strong>Clock Skew</strong> (the instantaneous difference between two machines).
          </p>
          <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs font-mono">
            Server A: 12:00:00.100 UTC · Server B: 12:00:00.420 UTC &rarr; Skew = 320ms!
          </div>
          <p className="text-xs text-stone-600">
            Network Time Protocol (NTP) periodically queries GPS and atomic clock servers over the network to estimate offset, round-trip delay, and jitter. However, NTP cannot guarantee zero uncertainty. Never use physical timestamps as sole proof of causal event ordering.
          </p>
        </div>
      ),
    },
    {
      id: "9.5",
      week: 1,
      title: "Monotonic Clocks vs. Wall Clocks",
      summary:
        "Why wall clocks break timeout logic, performance.now(), System.nanoTime(), and distributed lease pitfalls.",
      diagram: "clocks-drift",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            System programming distinguishes between two fundamentally different clocks:
          </p>
          <div className="space-y-2 text-xs">
            <div className="p-3 rounded-lg border border-stone-200 bg-white">
              <strong className="text-stone-900 block">Wall Clock (Date.now() / System.currentTimeMillis())</strong>
              <p className="text-stone-600 mt-1">
                Reflects civil date and time. Can jump forward or backward when NTP synchronizes or daylight savings adjusts. Never use for elapsed time or timeouts.
              </p>
            </div>
            <div className="p-3 rounded-lg border border-stone-200 bg-white">
              <strong className="text-stone-900 block">Monotonic Clock (performance.now() / System.nanoTime())</strong>
              <p className="text-stone-600 mt-1">
                Strictly non-decreasing hardware tick counter. Immune to NTP step adjustments. Mandatory for timeout enforcement, request deadlines, and latency benchmarking.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "9.6",
      week: 1,
      title: "Logical Clocks & Event Ordering",
      summary:
        "Leslie Lamport's 1978 breakthrough: happens-before relationship, scalar Lamport clocks, and Vector clocks.",
      diagram: "logical-clocks",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            Leslie Lamport established that what matters in distributed systems is not physical clock seconds, but <strong>causality</strong>.
          </p>
          <h4 className="font-bold text-stone-900 text-base">The Happens-Before Relation (\(a \rightarrow b\))</h4>
          <ul className="list-disc pl-5 space-y-1 text-xs text-stone-600">
            <li>If events \(a\) and \(b\) occur in the same process and \(a\) happens before \(b\), then \(a \rightarrow b\).</li>
            <li>If \(a\) is the sending of a message and \(b\) is the receipt of that message, then \(a \rightarrow b\).</li>
            <li>Transitivity: If \(a \rightarrow b\) and \(b \rightarrow c\), then \(a \rightarrow c\).</li>
          </ul>
          <div className="p-3 rounded-xl border border-stone-200 bg-[#faf8f4] text-xs font-mono">
            <strong>Vector Clocks:</strong> By maintaining a vector of integers $[V_1, V_2, ... V_n]$, systems like Amazon Dynamo detect concurrent updates ($a \parallel b$) without lossy Last-Write-Wins overwrites.
          </div>
        </div>
      ),
    },
    {
      id: "9.7",
      week: 1,
      title: "Hybrid Logical Clocks & TrueTime",
      summary:
        "Combining physical timestamps with causal counters, and Spanner's TrueTime API with bounded uncertainty.",
      diagram: "logical-clocks",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            While logical clocks capture causality, humans and database queries still require physical calendar timestamps.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-stone-600">
            <li><strong>Hybrid Logical Clocks (HLC):</strong> Embed both physical time and an internal counter. If physical time doesn&apos;t advance between events, the counter increments, preserving both causality and human-readable time. Used in CockroachDB and MongoDB.</li>
            <li><strong>Google Cloud Spanner TrueTime API:</strong> Uses atomic clocks and GPS receivers in every datacenter. Exposes time as an uncertainty interval [t_earliest, t_latest] where ε ≤ 7ms. By waiting out the uncertainty window (≥ 2ε) before committing, Spanner guarantees external serializability globally.</li>
          </ul>
        </div>
      ),
    },

    // WEEK 2
    {
      id: "9.8",
      week: 2,
      title: "Why Every Remote Call Needs a Timeout",
      summary:
        "Connection vs. request vs. query timeouts, resource exhaustion, and budget allocation mathematics.",
      diagram: "request-dilemma",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            An unbounded remote call will wait indefinitely when a downstream dependency stops responding. While waiting, the socket, thread, and connection pool slots remain locked, leading to resource exhaustion across the caller.
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded border border-stone-200 bg-white">
              <strong>Connection Timeout:</strong> Limits time to establish TCP handshake (e.g. 500ms).
            </div>
            <div className="p-2.5 rounded border border-stone-200 bg-white">
              <strong>Request Timeout:</strong> Limits time waiting for HTTP payload bytes (e.g. 2000ms).
            </div>
            <div className="p-2.5 rounded border border-stone-200 bg-white">
              <strong>Query Timeout:</strong> Limits SQL execution on the database engine (e.g. 1500ms).
            </div>
            <div className="p-2.5 rounded border border-stone-200 bg-white">
              <strong>Overall Deadline:</strong> Total end-to-end request budget across all hops.
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "9.9",
      week: 2,
      title: "Deadlines & Timeout Propagation",
      summary:
        "End-to-end budget allocation, calculating remaining time across hops, and cooperative cancellation.",
      diagram: "request-dilemma",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            If a client establishes a 5-second deadline, downstream services must work within the <em>remaining</em> budget rather than resetting their own 5-second timeouts at each hop.
          </p>
          <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs font-mono">
            Client budget: 5.0s &rarr; Gateway uses 0.5s &rarr; Downstream AI receives deadline: 4.5s
          </div>
          <h4 className="font-bold text-stone-900 text-base mt-2">Cooperative Cancellation</h4>
          <p className="text-xs text-stone-600">
            In gRPC and HTTP/2, if a user navigates away or times out, an <code>RST_STREAM</code> or <code>AbortSignal</code> propagates downstream, terminating expensive GPU inference or database queries immediately rather than wasting cluster capacity.
          </p>
        </div>
      ),
    },
    {
      id: "9.10",
      week: 2,
      title: "Retries, Exponential Backoff & Jitter",
      summary:
        "Transient vs. permanent errors, backoff mathematical formula, full jitter distribution, and retry amplification.",
      diagram: "backoff-jitter",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            Retries allow services to recover from transient glitches (such as temporary 503s or packet resets), but uncontrolled retries amplify outages.
          </p>
          <div className="p-3 rounded-xl border border-stone-200 bg-[#faf8f4] font-mono text-xs">
            <code>d_n = min(d_max, d_0 * 2^attempt)</code><br />
            <code>sleep = rand(0, d_n) // Full Jitter</code>
          </div>
          <h4 className="font-bold text-stone-900 text-base mt-2">Retry Amplification Hazard</h4>
          <p className="text-xs text-stone-600">
            If 3 nested service layers each retry 3 times (4 attempts), a single user request multiplies into 4 × 4 × 4 = 64 database queries. Always enforce retries at the outermost boundary and apply strict Retry Budgets.
          </p>
        </div>
      ),
    },
    {
      id: "9.11",
      week: 2,
      title: "Idempotency & Duplicate Requests",
      summary:
        "Timeout != failure, Idempotency-Key HTTP headers, transactional deduplication, and at-least-once message delivery.",
      diagram: "request-dilemma",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            Because a network timeout can occur after the server successfully commits a write, clients must be able to retry safely.
          </p>
          <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs font-mono">
            POST /api/v1/submissions<br />
            Idempotency-Key: 9cdd5f3b-unique-uuid
          </div>
          <p className="text-xs text-stone-600">
            The server checks an idempotency store within a database transaction. If the key exists, it returns the cached response; if not, it executes the write and records the outcome under the key.
          </p>
        </div>
      ),
    },
    {
      id: "9.12",
      week: 2,
      title: "Failure Detection & Distributed Leases",
      summary:
        "Heartbeats, suspicion timeouts, false positives/negatives, liveness vs. readiness, and fencing tokens.",
      diagram: "request-dilemma",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            In distributed systems, detecting whether a node is dead is probabilistic. A missing heartbeat might mean the server crashed, or simply that network buffers are queued or garbage collection paused execution.
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded border border-stone-200 bg-white">
              <strong>Liveness Probes:</strong> Is the process deadlocked? Restart the container.
            </div>
            <div className="p-2.5 rounded border border-stone-200 bg-white">
              <strong>Readiness Probes:</strong> Is the instance ready to handle traffic? Route traffic away without restarting.
            </div>
          </div>
        </div>
      ),
    },

    // WEEK 3
    {
      id: "9.13",
      week: 3,
      title: "Cascading Failures & Resilience Patterns",
      summary:
        "Vicious feedback cycles, Circuit Breakers (Closed/Open/Half-Open), Bulkheads, Load Shedding, and Graceful Degradation.",
      diagram: "circuit-breaker",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            A cascading failure occurs when a slowdown in one service causes thread pools to exhaust across upstream callers, triggering timeouts, retries, and widespread system collapse.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-lg border border-stone-200 bg-white">
              <strong className="text-stone-900 block">Circuit Breaker</strong>
              <span className="text-stone-600 text-[11px] block mt-1">Fails fast during persistent outages, preventing thread exhaustion.</span>
            </div>
            <div className="p-3 rounded-lg border border-stone-200 bg-white">
              <strong className="text-stone-900 block">Bulkheads</strong>
              <span className="text-stone-600 text-[11px] block mt-1">Isolates connection pools and workers so expensive jobs don&apos;t starve critical APIs.</span>
            </div>
            <div className="p-3 rounded-lg border border-stone-200 bg-white">
              <strong className="text-stone-900 block">Load Shedding</strong>
              <span className="text-stone-600 text-[11px] block mt-1">Drops low-priority noncritical requests when CPU exceeds 85% utilization.</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "9.14",
      week: 3,
      title: "Asynchronous Failure Handling",
      summary:
        "Safe message acknowledgement points, Dead-Letter Queues (DLQ), Backpressure, and queue backlog recovery math.",
      diagram: "request-dilemma",
      content: (
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm">
          <p>
            In message-driven architectures, acknowledge a message only <em>after</em> the database transaction commits durably:
          </p>
          <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs font-mono">
            Receive Job &rarr; Compute Evaluation &rarr; Commit to Database &rarr; ACK Message Broker
          </div>
          <h4 className="font-bold text-stone-900 text-base mt-2">Queue Stability Mathematics</h4>
          <p className="text-xs text-stone-600">
            If 80 jobs arrive per second while workers process only 50 jobs per second during a partial outage, the backlog expands at +30 jobs/s. Over a 10-minute outage:
          </p>
          <div className="rounded-lg border border-stone-200 bg-[#faf8f4] p-2.5 font-mono text-xs text-stone-800">
            30 jobs/sec &times; 600 seconds = 18,000 backlog jobs accumulated!
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
          currentModuleId="distributed-systems"
          aiTutorLabel="Ask Distributed Systems AI"
        />

        {/* Hero Section */}
        <div className="mb-8 rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs backdrop-blur-md">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3 py-0.5 text-[11px] font-mono font-bold uppercase tracking-wider text-orange-700">
              <Clock size={12} className="text-[#f97316]" />
              System Design Masterclass · Module 9
            </span>
            <span className="rounded-full border border-stone-200 bg-stone-50 px-2.5 py-0.5 text-[11px] font-mono text-stone-600">
              Distributed Systems · Fault Tolerance · Time and Coordination
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900 leading-tight">
            Distributed Systems Fundamentals, Clocks, Timeouts, and Failure Models
          </h1>
          <p className="mt-3 text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
            Master the reality of distributed computing: partial failures, clock skew, monotonic vs. wall clocks,
            Lamport &amp; Vector clocks, deadline propagation, exponential backoff with full jitter, idempotency keys,
            and circuit breakers to prevent cascading outages.
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
              <span className="text-xs sm:text-sm font-bold text-stone-900">Modules 1–7</span>
              <span className="text-[10px] text-stone-500 block">Networking &amp; Databases</span>
            </div>
            <div className="rounded-xl bg-[#faf8f4] p-3 border border-[#e7e3da]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">Core Engines</span>
              <span className="text-xs sm:text-sm font-bold text-stone-900">Timeouts &amp; Retries</span>
              <span className="text-[10px] text-stone-500 block">Circuit Breakers &amp; Clocks</span>
            </div>
            <div className="rounded-xl bg-[#faf8f4] p-3 border border-[#e7e3da]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">Final Project</span>
              <span className="text-xs sm:text-sm font-bold text-stone-900">Resilient Services</span>
              <span className="text-[10px] text-orange-600 font-bold block">Failure Simulation &amp; Recovery</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#e7e3da] mb-8 overflow-x-auto no-scrollbar gap-2">
          {[
            { id: "curriculum", label: "Curriculum & Lessons", count: "14 Lessons", icon: BookOpen },
            { id: "calculators", label: "Backoff & Deadline Tools", count: "3 Simulators", icon: Sliders },
            { id: "qa", label: "Production Q&A", count: "6 Scenarios", icon: HelpCircle },
            { id: "project", label: "Practical Lab", count: "7 Phases", icon: FolderTree },
            { id: "assessment", label: "Module 9 Quiz", count: "9 Questions", icon: ShieldCheck },
            { id: "reading", label: "Reading & Research", count: "8 Citations", icon: ExternalLink },
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
        {/* TAB 1: CURRICULUM & 14 LESSONS                                     */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "curriculum" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Lesson Selector */}
            <div className="lg:col-span-4 space-y-4">
              {/* Week Selector */}
              <div className="flex rounded-xl border border-stone-200 bg-white p-1 shadow-xs">
                {[
                  { num: 1, label: "Week 1: Systems & Time" },
                  { num: 2, label: "Week 2: Timeouts & Retries" },
                  { num: 3, label: "Week 3: Cascades & Patterns" },
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
                      Module 9 · Week {currentLessonData.week} · Lesson {currentLessonData.id}
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
                  <VisualDiagramComponentModule9 diagramType={currentLessonData.diagram} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 2: INTERACTIVE BACKOFF & DEADLINE CALCULATORS                  */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "calculators" && (
          <div className="space-y-8">
            {/* Tool 1: Exponential Backoff & Full Jitter Simulator */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="border-b border-[#e7e3da] pb-3 mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
                  Interactive Resilience Tool 1
                </span>
                <h3 className="text-lg font-bold text-stone-900">
                  Exponential Backoff &amp; Full Jitter Simulator (AWS Best Practice)
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Calculate retry sleep delays across attempts: d_n = min(d_max, d_0 × 2^n) and compare against Full Jitter U(0, d_n).
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs">
                  <div className="flex justify-between font-bold mb-1">
                    <span>Base Delay (\(d_0\))</span>
                    <span className="text-orange-600 font-mono">{baseDelayMs} ms</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="1000"
                    step="50"
                    value={baseDelayMs}
                    onChange={(e) => setBaseDelayMs(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">First retry backoff duration</span>
                </div>

                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs">
                  <div className="flex justify-between font-bold mb-1">
                    <span>Max Delay Cap (d_max)</span>
                    <span className="text-orange-600 font-mono">{maxDelayCapMs} ms</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="10000"
                    step="500"
                    value={maxDelayCapMs}
                    onChange={(e) => setMaxDelayCapMs(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">Ceiling cap to prevent infinite sleep</span>
                </div>

                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs">
                  <div className="flex justify-between font-bold mb-1">
                    <span>Max Retry Attempts</span>
                    <span className="text-orange-600 font-mono">{retryAttemptCount} Attempts</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="6"
                    value={retryAttemptCount}
                    onChange={(e) => setRetryAttemptCount(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">Budgeted retry retry allowance</span>
                </div>
              </div>

              {/* Schedule Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border border-stone-200 rounded-xl">
                  <thead className="bg-[#faf8f4] text-stone-700 font-bold border-b border-stone-200">
                    <tr>
                      <th className="p-2.5">Attempt Index</th>
                      <th className="p-2.5">Raw Exponential Backoff</th>
                      <th className="p-2.5">Full Jitter Range</th>
                      <th className="p-2.5">Average Expected Sleep</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 font-mono">
                    {backoffSchedule.map((row) => (
                      <tr key={row.attemptIndex} className="hover:bg-orange-50/30">
                        <td className="p-2.5 font-bold">Attempt #{row.attemptIndex + 1}</td>
                        <td className="p-2.5 text-stone-800">{row.rawDelay} ms</td>
                        <td className="p-2.5 text-orange-600 font-bold">{row.fullJitterRange}</td>
                        <td className="p-2.5 text-emerald-700 font-bold">~{row.avgJitterDelay} ms</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Tool 2: Deadline Budget Allocation & Propagation */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="border-b border-[#e7e3da] pb-3 mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
                  Interactive Resilience Tool 2
                </span>
                <h3 className="text-lg font-bold text-stone-900">
                  Deadline Budget Allocation &amp; Propagation Calculator
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Allocate total end-to-end client deadline across downstream service hops and verify remaining slack buffer.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-4">
                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs">
                  <div className="flex justify-between font-bold mb-1">
                    <span>Overall Deadline</span>
                    <span className="text-orange-600 font-mono">{overallDeadlineMs} ms</span>
                  </div>
                  <input
                    type="range"
                    min="200"
                    max="1000"
                    step="50"
                    value={overallDeadlineMs}
                    onChange={(e) => setOverallDeadlineMs(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">Total client SLA budget</span>
                </div>

                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs">
                  <div className="flex justify-between font-bold mb-1">
                    <span>Database Hop</span>
                    <span className="text-orange-600 font-mono">{dbBudgetMs} ms</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="300"
                    step="10"
                    value={dbBudgetMs}
                    onChange={(e) => setDbBudgetMs(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">PostgreSQL transaction limit</span>
                </div>

                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs">
                  <div className="flex justify-between font-bold mb-1">
                    <span>Downstream AI Hop</span>
                    <span className="text-orange-600 font-mono">{downstreamAiBudgetMs} ms</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="400"
                    step="10"
                    value={downstreamAiBudgetMs}
                    onChange={(e) => setDownstreamAiBudgetMs(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">Evaluation API latency</span>
                </div>

                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs">
                  <div className="flex justify-between font-bold mb-1">
                    <span>Auth + Serialization</span>
                    <span className="text-orange-600 font-mono">
                      {authBudgetMs + serializationBudgetMs} ms
                    </span>
                  </div>
                  <span className="text-[10px] text-stone-500 block mt-2">
                    Auth (40ms) + Response Handling (40ms)
                  </span>
                </div>
              </div>

              <div
                className={`p-4 rounded-xl border flex flex-wrap items-center justify-between gap-4 text-xs font-mono ${
                  deadlineAnalysis.isSafe
                    ? "border-emerald-300 bg-emerald-50/50 text-emerald-900"
                    : "border-red-300 bg-red-50/50 text-red-900"
                }`}
              >
                <div>
                  Planned Component Total: <strong>{deadlineAnalysis.totalComponentPlanned} ms</strong> /{" "}
                  {overallDeadlineMs} ms
                </div>
                <div>
                  Safety Slack Margin:{" "}
                  <strong className={deadlineAnalysis.isSafe ? "text-emerald-700" : "text-red-600 font-bold"}>
                    {deadlineAnalysis.slackMarginMs} ms{" "}
                    {deadlineAnalysis.isSafe ? "(Valid Allocation)" : "(DEADLINE EXCEEDED!)"}
                  </strong>
                </div>
              </div>
            </div>

            {/* Tool 3: Queue Backlog & Recovery Time Estimator */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="border-b border-[#e7e3da] pb-3 mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
                  Interactive Resilience Tool 3
                </span>
                <h3 className="text-lg font-bold text-stone-900">
                  Queue Backlog Accumulation &amp; Recovery Estimator (Lesson 9.14 Math)
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Model how partial worker degradation causes exponential queue backlog accumulation, and calculate time required to drain after full capacity is restored.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-4">
                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs">
                  <div className="flex justify-between font-bold mb-1">
                    <span>Incoming Rate</span>
                    <span className="text-orange-600 font-mono">{normalArrivalRps} jobs/s</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="200"
                    step="10"
                    value={normalArrivalRps}
                    onChange={(e) => setNormalArrivalRps(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">Normal student traffic</span>
                </div>

                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs">
                  <div className="flex justify-between font-bold mb-1">
                    <span>Degraded Throughput</span>
                    <span className="text-orange-600 font-mono">{degradedThroughputRps} jobs/s</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max={normalArrivalRps}
                    step="5"
                    value={degradedThroughputRps}
                    onChange={(e) => setDegradedThroughputRps(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">Worker speed during outage</span>
                </div>

                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs">
                  <div className="flex justify-between font-bold mb-1">
                    <span>Outage Duration</span>
                    <span className="text-orange-600 font-mono">{outageDurationMinutes} mins</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="30"
                    value={outageDurationMinutes}
                    onChange={(e) => setOutageDurationMinutes(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">Time until workers restored</span>
                </div>

                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs">
                  <div className="flex justify-between font-bold mb-1">
                    <span>Restored Capacity</span>
                    <span className="text-orange-600 font-mono">{restoredWorkerCapacityRps} jobs/s</span>
                  </div>
                  <input
                    type="range"
                    min={normalArrivalRps + 5}
                    max="300"
                    step="10"
                    value={restoredWorkerCapacityRps}
                    onChange={(e) => setRestoredWorkerCapacityRps(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">Max throughput after repair</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                <div className="p-3 rounded-xl border border-red-200 bg-red-50/50">
                  <span className="text-[10px] text-stone-500 uppercase block font-sans">
                    Net Backlog Growth
                  </span>
                  <span className="text-lg font-bold text-red-700 mt-1 block">
                    +{queueDynamics.netGrowthPerSec} jobs / sec
                  </span>
                  <span className="text-[10px] text-stone-400">Arrivals exceed processing</span>
                </div>

                <div className="p-3 rounded-xl border border-stone-200 bg-white">
                  <span className="text-[10px] text-stone-500 uppercase block font-sans">
                    Total Accumulated Backlog
                  </span>
                  <span className="text-lg font-bold text-stone-900 mt-1 block">
                    {queueDynamics.totalBacklogAccumulated.toLocaleString()} jobs
                  </span>
                  <span className="text-[10px] text-stone-400">
                    Over {outageDurationMinutes} minutes
                  </span>
                </div>

                <div className="p-3 rounded-xl border border-emerald-300 bg-emerald-50/50">
                  <span className="text-[10px] text-stone-500 uppercase block font-sans">
                    Time to Drain Backlog
                  </span>
                  <span className="text-lg font-bold text-emerald-700 mt-1 block">
                    {queueDynamics.drainDurationMinutes} minutes
                  </span>
                  <span className="text-[10px] text-emerald-800">
                    Draining at +{queueDynamics.netDrainRatePerSec} jobs/s
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
                Senior Systems Engineering Q&amp;A: Distributed Fault Tolerance
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Real-world failure modes, clock drift anomalies, and cascading outage mitigation discussed in senior infrastructure interviews.
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
        {/* TAB 4: PRACTICAL LAB — RESILIENT DISTRIBUTED WORKFLOW              */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "project" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
                    Practical Lab Specification
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    Build a Resilient Distributed Request Workflow
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Simulate how timeouts, retries, duplicate requests, and downstream failures interact across 7 progressive phases.
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-mono text-stone-500 block">Phases Completed</span>
                  <span className="text-xl font-black text-orange-600">
                    {completedCount} / 7
                  </span>
                </div>
              </div>

              {/* 7 Implementation Phases */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-xs font-mono font-bold text-orange-600 block">Phase 1</span>
                  <h4 className="font-bold text-stone-900 text-sm mt-0.5">Define the Failure Model</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Document which services can crash, which calls can time out, message redelivery rules, and recovery guarantees.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-xs font-mono font-bold text-orange-600 block">Phase 2</span>
                  <h4 className="font-bold text-stone-900 text-sm mt-0.5">Define Deadline Budgets</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Allocate end-to-end budget among validation, database queries, and AI evaluation. Enforce cooperative cancellation.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-xs font-mono font-bold text-orange-600 block">Phase 3</span>
                  <h4 className="font-bold text-stone-900 text-sm mt-0.5">Implement Bounded Retries</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Differentiate transient vs permanent errors, enforce exponential backoff with Full Jitter, and cap attempts at 3.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-xs font-mono font-bold text-orange-600 block">Phase 4</span>
                  <h4 className="font-bold text-stone-900 text-sm mt-0.5">Add Idempotency Store</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Enforce <code>Idempotency-Key</code> headers and save results transactionally to defeat duplicate redeliveries.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-xs font-mono font-bold text-orange-600 block">Phase 5</span>
                  <h4 className="font-bold text-stone-900 text-sm mt-0.5">Add Resilience Mechanisms</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Integrate a Circuit Breaker (Closed/Open/Half-Open) for the AI provider and Bulkhead concurrency semaphores.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-xs font-mono font-bold text-orange-600 block">Phase 6</span>
                  <h4 className="font-bold text-stone-900 text-sm mt-0.5">Run Failure-Injection Chaos Tests</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Inject 500ms network delay, drop responses after DB commit, kill workers midway, and observe graceful recovery.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4] md:col-span-2">
                  <span className="text-xs font-mono font-bold text-orange-600 block">Phase 7</span>
                  <h4 className="font-bold text-stone-900 text-sm mt-0.5">Measure &amp; Document Telemetry</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Record p95/p99 latency, retry ratios, circuit breaker state transitions, and verify zero duplicate records in DB.
                  </p>
                </div>
              </div>

              {/* Lab Checklist */}
              <div className="border-t border-[#e7e3da] pt-6">
                <h4 className="font-bold text-stone-900 text-sm mb-3">
                  Resilient Services Lab Checklist (7 Deliverables)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    { key: "phase1", label: "Formal failure model specification (crashes, timeouts, duplicates)" },
                    { key: "phase2", label: "Deadline propagation budget calculation and cancellation handling" },
                    { key: "phase3", label: "Exponential backoff with full jitter implementation" },
                    { key: "phase4", label: "Transactional idempotency key verification and test suite" },
                    { key: "phase5", label: "Circuit breaker and bulkhead concurrency limits configured" },
                    { key: "phase6", label: "Chaos failure injection tests (packet drop, worker kill, slow DB)" },
                    { key: "phase7", label: "Telemetry dashboard capturing latency, retries, and DLQ depth" },
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
        {/* TAB 5: MODULE 9 ASSESSMENT QUIZ                                    */}
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
                    Module 9 Assessment: Distributed Systems Fundamentals
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    9 questions verifying failure models, physical/logical clocks, deadline propagation, jitter, and circuit breakers.
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
                  Module 9: Research and Reading List
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Primary documentation and foundational papers exploring failure models, logical clocks, retry backoff, and cascading outages.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    id: 1,
                    title: "MIT — 6.5840 Distributed Systems",
                    focus:
                      "Fault tolerance, replication, consistency models, and engineering systems that continue operating through partial failures.",
                    url: "https://pdos.csail.mit.edu/6.824/index.html",
                    linkText: "MIT Course Materials",
                  },
                  {
                    id: 2,
                    title: "Columbia University — Distributed Systems Fundamentals",
                    focus:
                      "Distributed computation, RPC semantics, failure models, clocks, coordination, and the FLP impossibility theorem.",
                    url: "https://systems.cs.columbia.edu/ds1-class/01-lectures/",
                    linkText: "Columbia Lecture Notes",
                  },
                  {
                    id: 3,
                    title: "Leslie Lamport — Time, Clocks, and the Ordering of Events (1978)",
                    focus:
                      "The seminal paper formalizing the happens-before relation (a -> b) and scalar logical clocks.",
                    url: "https://www.microsoft.com/en-us/research/publication/time-clocks-ordering-events-distributed-system/",
                    linkText: "Lamport 1978 Research Paper",
                  },
                  {
                    id: 4,
                    title: "AWS Builders' Library — Timeouts, Retries, and Backoff with Jitter",
                    focus:
                      "Production-grade guidance on selecting timeout budgets, exponential backoff, Full Jitter, and avoiding thundering herds.",
                    url: "https://builder.aws.com/content/3EumjoZascWd1oZiEgL8ORlv3qE/timeouts-retries-and-backoff-with-jitter",
                    linkText: "AWS Builders' Library Guide",
                  },
                  {
                    id: 5,
                    title: "Google — SRE: Addressing Cascading Failures",
                    focus:
                      "Mechanisms behind self-amplifying outages: thread exhaustion, retry storms, queue accumulation, and load shedding.",
                    url: "https://sre.google/sre-book/addressing-cascading-failures/",
                    linkText: "Google SRE Book Chapter",
                  },
                  {
                    id: 6,
                    title: "Microsoft Azure — Transient Fault Handling",
                    focus:
                      "Configuring timeouts, categorizing retryable vs permanent errors, exponential backoff, and dead-letter queue patterns.",
                    url: "https://learn.microsoft.com/en-us/azure/architecture/best-practices/transient-faults",
                    linkText: "Azure Transient Fault Guide",
                  },
                  {
                    id: 7,
                    title: "Microsoft Azure — Circuit Breaker Pattern",
                    focus:
                      "Closed, Open, and Half-Open state machines, preventing downstream resource starvation, and graceful fallback strategies.",
                    url: "https://learn.microsoft.com/en-gb/azure/architecture/patterns/circuit-breaker",
                    linkText: "Azure Circuit Breaker Guide",
                  },
                  {
                    id: 8,
                    title: "Network Time Protocol (NTP) — Clock Synchronization",
                    focus:
                      "Measuring clock offset, network delay, jitter, dispersion, and understanding the physical limits of wall-clock accuracy.",
                    url: "https://www.ntp.org/documentation/4.2.8-series/ntpd/",
                    linkText: "NTP Daemon Documentation",
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
                    What You Mastered in Module 9
                  </span>
                  <span className="text-sm font-bold text-stone-900 block mt-0.5">
                    Distributed Systems Architecture, Fault Tolerance &amp; Time Coordination
                  </span>
                  <span className="text-xs text-stone-600 block mt-0.5">
                    You can now engineer resilient services with monotonic timeouts, exponential backoff with full jitter, idempotency keys, and circuit breakers.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => navigate("/learning/system-design/replication")}
                    className="flex items-center gap-1.5 rounded-xl border border-orange-300 bg-white px-3.5 py-2 text-xs font-bold text-orange-700 hover:bg-orange-50 transition cursor-pointer"
                  >
                    <span>Back to Module 7</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate("/learning/system-design/consistency")}
                    className="flex items-center gap-1.5 rounded-xl bg-[#f97316] px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#ea580c] transition cursor-pointer"
                  >
                    <span>Start Module 10 (Consistency &amp; Quorums)</span>
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
