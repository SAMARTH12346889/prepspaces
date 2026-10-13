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
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import {
  TransactionalOutboxDiagram,
  KafkaPartitionsDiagram,
  StreamWindowingDiagram,
  VisualDiagramComponentModule12,
} from "./SystemDesignMessagingDiagrams";

export default function SystemDesignMessaging() {
  const navigate = useNavigate();

  // Navigation tab state
  const [activeTab, setActiveTab] = useState("curriculum"); // "curriculum" | "simulators" | "qa" | "project" | "assessment" | "reading"
  const [activeWeek, setActiveWeek] = useState(1); // 1 | 2 | 3
  const [activeLesson, setActiveLesson] = useState("12.1");

  // Expanded Q&A accordion states
  const [expandedQA, setExpandedQA] = useState({ "qa-1": true });
  const toggleQA = (id) => {
    setExpandedQA((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // ---------------------------------------------------------------------------
  // INTERACTIVE SIMULATOR 1: KAFKA PARTITION & CONSUMER SIZER
  // ---------------------------------------------------------------------------
  const [partitionCount, setPartitionCount] = useState(4);
  const [consumerCount, setConsumerCount] = useState(3);
  const [inputKey, setInputKey] = useState("interview_4021");

  const computedSizing = useMemo(() => {
    const activeConsumers = Math.min(consumerCount, partitionCount);
    const idleConsumers = Math.max(0, consumerCount - partitionCount);
    const partitionsPerActive = (partitionCount / activeConsumers).toFixed(1);

    // Simple deterministic hash simulation for partition routing
    let hash = 0;
    for (let i = 0; i < inputKey.length; i++) {
      hash = (hash << 5) - hash + inputKey.charCodeAt(i);
      hash |= 0;
    }
    const targetPartition = Math.abs(hash) % partitionCount;

    return {
      activeConsumers,
      idleConsumers,
      partitionsPerActive,
      targetPartition,
    };
  }, [partitionCount, consumerCount, inputKey]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE SIMULATOR 2: BACKPRESSURE & BACKLOG RECOVERY CALCULATOR
  // Formula: B_{t+1} = B_t + max(0, P_t - C_t)
  // ---------------------------------------------------------------------------
  const [producerRate, setProducerRate] = useState(1000); // msg/sec
  const [consumerRate, setConsumerRate] = useState(600); // msg/sec
  const [initialBacklog, setInitialBacklog] = useState(0); // msg
  const [durationMinutes, setDurationMinutes] = useState(1); // minutes

  const backpressureStats = useMemo(() => {
    const durationSeconds = durationMinutes * 60;
    const netGrowthPerSec = Math.max(0, producerRate - consumerRate);
    const accumulatedBacklog = initialBacklog + netGrowthPerSec * durationSeconds;

    // Time to drain when producer rate drops back to normal (e.g. 200 msg/sec)
    const normalProducerRate = 200;
    const drainRatePerSec = Math.max(1, consumerRate - normalProducerRate);
    const secondsToDrain = Math.ceil(accumulatedBacklog / drainRatePerSec);
    const minutesToDrain = (secondsToDrain / 60).toFixed(1);

    return {
      netGrowthPerSec,
      accumulatedBacklog,
      secondsToDrain,
      minutesToDrain,
    };
  }, [producerRate, consumerRate, initialBacklog, durationMinutes]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE SIMULATOR 3: OUTBOX & IDEMPOTENT CONSUMER RUNNER
  // ---------------------------------------------------------------------------
  const [outboxEvents, setOutboxEvents] = useState([
    { id: "evt_101", aggregateId: "int_2041", type: "InterviewCompleted", published: false },
  ]);
  const [processedEvents, setProcessedEvents] = useState([]);
  const [brokerOnline, setBrokerOnline] = useState(true);
  const [consumerLog, setConsumerLog] = useState([]);

  const handlePublishOutbox = () => {
    if (!brokerOnline) {
      setConsumerLog((prev) => [
        { msg: "Broker Unreachable (Connection Timeout). Events remain safely in outbox.", error: true },
        ...prev,
      ]);
      return;
    }

    setOutboxEvents((prev) =>
      prev.map((e) => ({ ...e, published: true }))
    );
    setConsumerLog((prev) => [
      { msg: "Outbox relay published 1 event to Kafka topic 'interview.completed'.", error: false },
      ...prev,
    ]);
  };

  const handleConsumeEvent = (eventId) => {
    if (processedEvents.includes(eventId)) {
      setConsumerLog((prev) => [
        {
          msg: `Duplicate Detected! Event ${eventId} already in processed_events. Silently skipping DB mutate.`,
          error: false,
        },
        ...prev,
      ]);
    } else {
      setProcessedEvents((prev) => [...prev, eventId]);
      setConsumerLog((prev) => [
        {
          msg: `Event ${eventId} processed atomically. Recorded in processed_events and report generated.`,
          error: false,
        },
        ...prev,
      ]);
    }
  };

  const resetOutboxSim = () => {
    setOutboxEvents([
      { id: "evt_101", aggregateId: "int_2041", type: "InterviewCompleted", published: false },
    ]);
    setProcessedEvents([]);
    setConsumerLog([]);
    setBrokerOnline(true);
  };

  // ---------------------------------------------------------------------------
  // PRACTICAL LAB CHECKLIST TRACKER (Phases A through E)
  // ---------------------------------------------------------------------------
  const [projectChecklist, setProjectChecklist] = useState({
    phaseA_schema: true,
    phaseA_validation: true,
    phaseB_outbox_tx: false,
    phaseB_cdc_relay: false,
    phaseC_consumers: false,
    phaseD_failure_tests: false,
    phaseE_metrics: false,
    phaseE_report: false,
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
      question: "What is the main distinction between a command and an event?",
      options: [
        "A. Commands contain JSON but events cannot.",
        "B. Commands request an action, while events record an occurrence.",
        "C. Events must always be synchronous.",
        "D. Commands are always stored in Kafka.",
      ],
      correct: 1, // B
      explanation:
        "A command is an instruction directed to a specific receiver requesting that something happen (e.g. GenerateReport). An event is an immutable broadcast record of an observed fact that has already occurred (e.g. InterviewCompleted).",
    },
    {
      id: 2,
      question:
        "In a conventional Kafka consumer group, what primarily limits the number of consumers that can actively read partitions in parallel?",
      options: [
        "A. Number of API routes.",
        "B. Number of candidate users.",
        "C. Number of partitions assigned to the group.",
        "D. Number of topics in the entire cluster.",
      ],
      correct: 2, // C
      explanation:
        "In the standard Kafka consumer-group model, a single partition can be assigned to at most one consumer in the group at a time. Therefore, running more consumers than partitions results in idle consumers that process zero records.",
    },
    {
      id: 3,
      question: "What is the main challenge with at-least-once delivery?",
      options: [
        "A. Every message is immediately lost.",
        "B. Messages cannot be retried.",
        "C. Duplicate processing is possible.",
        "D. Event streams cannot be replayed.",
      ],
      correct: 2, // C
      explanation:
        "At-least-once brokers guarantee messages won't be lost by retrying unacknowledged deliveries. If a worker completes its task but crashes before acknowledging, or network acks drop, the broker redelivers the message, risking duplicate processing without idempotent consumers.",
    },
    {
      id: 4,
      question: "Why use a transactional outbox?",
      options: [
        "A. To guarantee the external email provider works.",
        "B. To atomically save business state and the intention to publish an event in one database transaction.",
        "C. To eliminate the need for a message broker.",
        "D. To make a consumer run exactly once under all conditions.",
      ],
      correct: 1, // B
      explanation:
        "The transactional outbox pattern solves the dual-write problem by updating business tables and inserting pending event records in the exact same ACID database transaction, ensuring the database state and event stream never diverge.",
    },
    {
      id: 5,
      question: "What is a watermark used for in event-time stream processing?",
      options: [
        "A. Encrypting event payloads.",
        "B. Tracking expected progress in event time.",
        "C. Assigning database primary keys.",
        "D. Selecting a Kafka consumer-group ID.",
      ],
      correct: 1, // B
      explanation:
        "A watermark is a temporal progress indicator in stream processing (such as Apache Flink) declaring that all records up to timestamp T are assumed to have arrived, allowing windowed operators to evaluate and close without waiting indefinitely.",
    },
    {
      id: 6,
      question:
        "A consumer updates its database and crashes before acknowledging the message. What is a robust design response?",
      options: [
        "A. Assume the broker will never redeliver the message.",
        "B. Delete the database to reset processing.",
        "C. Make the business update idempotent and acknowledge only after the appropriate durable processing succeeds.",
        "D. Disable all retries permanently.",
      ],
      correct: 2, // C
      explanation:
        "Because the broker will redeliver the unacknowledged message upon timeout, the consumer must execute an idempotent operation (e.g., using a processed_events deduplication table in the same transaction) and send an acknowledgement only after durable persistence.",
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
          currentModuleId="messaging"
          aiTutorLabel="Ask Nova about Event Streaming"
        />

        {/* Hero Section */}
        <div className="mb-8 rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-orange-50 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-orange-700 mb-2">
                <Radio size={13} className="text-[#f97316]" />
                <span>System Design Masterclass · Module 12</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900">
                Message Queues, Event-Driven Architecture &amp; Stream Processing
              </h1>
              <p className="mt-2 max-w-3xl text-xs sm:text-sm text-stone-600 leading-relaxed">
                Building systems that do not need to wait. Decouple synchronous request chains using competing-consumer
                queues, Kafka partitioned event logs, Debezium transactional outboxes, idempotent deduplication,
                and Apache Flink stateful stream processing.
              </p>
            </div>

            {/* Quick Metadata Pill */}
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-xl bg-[#faf8f4] border border-stone-200 font-bold text-stone-700">
                Duration: 3 Weeks (40–50 hrs)
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-orange-50 border border-orange-200 font-bold text-orange-700">
                Core: Kafka · SQS · Outbox · Flink
              </span>
            </div>
          </div>

          {/* Quick Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
            <div className="p-3 rounded-2xl border border-stone-200 bg-[#faf8f4]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">
                Delivery Semantics
              </span>
              <span className="text-sm font-bold text-stone-900 mt-0.5 block">At-Least-Once</span>
              <span className="text-[11px] text-stone-500">Paired with Idempotency</span>
            </div>
            <div className="p-3 rounded-2xl border border-stone-200 bg-[#faf8f4]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">
                Dual-Write Defense
              </span>
              <span className="text-sm font-bold text-stone-900 mt-0.5 block">Transactional Outbox</span>
              <span className="text-[11px] text-stone-500">Atomic WAL + CDC Relay</span>
            </div>
            <div className="p-3 rounded-2xl border border-stone-200 bg-[#faf8f4]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">
                Partition Sizing
              </span>
              <span className="text-sm font-bold text-stone-900 mt-0.5 block">\(C \leq P\) Invariant</span>
              <span className="text-[11px] text-stone-500">Ordered by Entity Key</span>
            </div>
            <div className="p-3 rounded-2xl border border-stone-200 bg-[#faf8f4]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">
                Backpressure Math
              </span>
              <span className="text-sm font-bold text-stone-900 mt-0.5 block">
                B_(t+1) = B_t + Δ
              </span>
              <span className="text-[11px] text-stone-500">DLQ &amp; Bounded Retries</span>
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
                  { week: 1, title: "Week 1: Foundations, Queues vs Streams, Kafka & RabbitMQ" },
                  { week: 2, title: "Week 2: Delivery Guarantees, Outbox & Idempotency" },
                  { week: 3, title: "Week 3: Stream Processing, Reliability & Architecture" },
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
                  ? "5 Lessons · Asynchronous Models & Kafka"
                  : activeWeek === 2
                  ? "5 Lessons · Guarantees & Transactional Outbox"
                  : "6 Lessons · Flink, Reliability & PrepSpaces"}
              </span>
            </div>

            {/* WEEK 1 LESSONS */}
            {activeWeek === 1 && (
              <div className="space-y-6">
                {/* Lesson 12.1 */}
                <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-mono font-bold text-orange-600">
                      Lesson 12.1 · Communication Paradigms
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-stone-100 text-[11px] font-mono text-stone-600 font-semibold">
                      Sync vs Async
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">
                    Building Systems That Do Not Wait: Synchronous vs. Asynchronous Workflows
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    In a synchronous request chain, if Candidate completes an interview, the Interview API must wait
                    for Database commit, Report Service computation (15s), Analytics update, and Notification sending.
                    If any downstream component is slow or down, the entire user-facing request times out.
                  </p>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    Asynchronous messaging splits work: the Interview API performs essential work, writes the state,
                    publishes an event, and immediately returns <em>"Interview Submitted"</em>. Background workers handle
                    reporting and notifications independently.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-[#e7e3da] bg-[#faf8f4]">
                          <th className="p-3 font-bold text-stone-900">Workload</th>
                          <th className="p-3 font-bold text-stone-900">Recommended Approach</th>
                          <th className="p-3 font-bold text-stone-900">Engineering Rationale</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100">
                        <tr>
                          <td className="p-3 font-semibold text-stone-800">User Login &amp; Auth</td>
                          <td className="p-3 font-mono text-stone-700">Synchronous</td>
                          <td className="p-3 text-stone-600">User cannot proceed without immediate token</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-stone-800">Save Interview Answer</td>
                          <td className="p-3 font-mono text-stone-700">Synchronous DB commit</td>
                          <td className="p-3 text-stone-600">Durable persistence confirmation required</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-stone-800">Generate 15-Page PDF Report</td>
                          <td className="p-3 font-mono text-orange-600 font-bold">Asynchronous Queue</td>
                          <td className="p-3 text-stone-600">Heavy CPU load, should not block HTTP response</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-stone-800">Send Email &amp; SMS Alert</td>
                          <td className="p-3 font-mono text-orange-600 font-bold">Asynchronous Queue</td>
                          <td className="p-3 text-stone-600">Third-party provider latency and transient retries</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Lesson 12.3: Queue vs PubSub vs Stream */}
                <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-mono font-bold text-orange-600">
                      Lesson 12.3 · Taxonomy of Messaging
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-stone-100 text-[11px] font-mono text-stone-600 font-semibold">
                      Architectural Models
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">
                    Message Queue vs. Publish/Subscribe vs. Retained Event Stream
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4] flex flex-col justify-between">
                      <div>
                        <div className="font-mono text-[10px] font-bold text-orange-600 mb-1">Model 1</div>
                        <h4 className="font-bold text-stone-900 text-sm mb-1.5">Work Queue (Destructive)</h4>
                        <p className="text-stone-600 mb-2">
                          Competing worker pool reads from a shared queue. Once processed and acknowledged, the message is deleted.
                        </p>
                      </div>
                      <span className="font-mono text-[11px] text-stone-500">Tech: RabbitMQ, Amazon SQS</span>
                    </div>

                    <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4] flex flex-col justify-between">
                      <div>
                        <div className="font-mono text-[10px] font-bold text-orange-600 mb-1">Model 2</div>
                        <h4 className="font-bold text-stone-900 text-sm mb-1.5">Publish/Subscribe (Fan-Out)</h4>
                        <p className="text-stone-600 mb-2">
                          Producers publish to topics. Multiple independent subscriber groups each receive a copy of matching messages.
                        </p>
                      </div>
                      <span className="font-mono text-[11px] text-stone-500">Tech: Google Cloud Pub/Sub, SNS</span>
                    </div>

                    <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4] flex flex-col justify-between">
                      <div>
                        <div className="font-mono text-[10px] font-bold text-orange-600 mb-1">Model 3</div>
                        <h4 className="font-bold text-stone-900 text-sm mb-1.5">Retained Event Stream (Log)</h4>
                        <p className="text-stone-600 mb-2">
                          Append-only partitioned commit log. Events are retained by time/size policy, allowing multiple consumers to replay from offset.
                        </p>
                      </div>
                      <span className="font-mono text-[11px] text-stone-500">Tech: Apache Kafka, Redpanda</span>
                    </div>
                  </div>
                </div>

                {/* Lesson 12.5 & Diagram 2 */}
                <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-mono font-bold text-orange-600">
                      Lesson 12.5 · Apache Kafka Architecture
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-orange-100 text-[11px] font-mono text-orange-700 font-semibold">
                      Partitions &amp; Consumers
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">
                    Kafka Topics, Partitions, Ordering Keys &amp; Consumer Groups
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    In Kafka, ordering is strictly guaranteed <strong>only within a single partition</strong>.
                    Using an entity key (e.g. <code>interviewId</code>) ensures all events for that interview land in the same partition.
                  </p>

                  <div className="my-6">
                    <KafkaPartitionsDiagram />
                  </div>

                  <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4] text-xs sm:text-sm text-stone-700">
                    <strong className="text-stone-900 block mb-1">Kafka vs RabbitMQ Rule of Thumb:</strong>
                    Choose <strong>RabbitMQ</strong> when you need complex exchange routing, per-message acknowledgements, or simple task queues.
                    Choose <strong>Kafka</strong> when you need durable event retention, event replay, independent multi-subscriber consumption, and partitioned throughput scaling.
                  </div>
                </div>
              </div>
            )}

            {/* WEEK 2 LESSONS */}
            {activeWeek === 2 && (
              <div className="space-y-6">
                {/* Lesson 12.6: Delivery Guarantees */}
                <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-mono font-bold text-orange-600">
                      Lesson 12.6 · Distributed Delivery Semantics
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-stone-100 text-[11px] font-mono text-stone-600 font-semibold">
                      At-Least-Once
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">
                    At-Most-Once vs. At-Least-Once vs. Exactly-Once Processing
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs mb-4">
                    <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                      <strong className="text-stone-900 block mb-1">At-Most-Once</strong>
                      <p className="text-stone-600 mb-2">Message is fired with no retries. If worker crashes midway, the message is permanently lost.</p>
                      <span className="text-[10px] font-bold text-amber-700">Acceptable only for noncritical metrics</span>
                    </div>
                    <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                      <strong className="text-stone-900 block mb-1">At-Least-Once</strong>
                      <p className="text-stone-600 mb-2">Broker retries until acknowledged. Risk: consumer crashes after DB write, causing duplicate redelivery.</p>
                      <span className="text-[10px] font-bold text-emerald-700">Industry standard when paired with idempotency</span>
                    </div>
                    <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                      <strong className="text-stone-900 block mb-1">Exactly-Once (Scoped)</strong>
                      <p className="text-stone-600 mb-2">Guaranteed only within specific protocol boundaries (e.g. Kafka transactions, Flink 2PC checkpoints).</p>
                      <span className="text-[10px] font-bold text-orange-700">Cannot magically prevent external email duplicates</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4] text-xs text-stone-700">
                    <strong className="text-stone-900 block mb-1">The Idempotency Principle:</strong>
                    Maintain an atomic deduplication table:
                    <pre className="mt-2 p-3 rounded-xl bg-stone-900 text-stone-100 font-mono text-[11px] overflow-x-auto">
{`CREATE TABLE processed_events (
  consumer_name TEXT NOT NULL,
  event_id TEXT NOT NULL,
  processed_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (consumer_name, event_id)
);`}
                    </pre>
                  </div>
                </div>

                {/* Lesson 12.7 & Diagram 1 */}
                <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-mono font-bold text-orange-600">
                      Lesson 12.7 · Consistency Boundaries
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-[11px] font-mono text-emerald-800 font-semibold">
                      Outbox Pattern
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">
                    The Dual-Write Problem and the Transactional Outbox
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    Direct dual-writing (updating SQL and then publishing to Kafka) is fundamentally broken because
                    they cannot share a single atomic transaction. The Transactional Outbox pattern guarantees that the
                    business mutation and the event are recorded together in the database write-ahead log.
                  </p>

                  <div className="my-6">
                    <TransactionalOutboxDiagram />
                  </div>
                </div>

                {/* Lesson 12.8: Choreography vs Orchestration */}
                <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-mono font-bold text-orange-600">
                      Lesson 12.8 · Workflow Architecture
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-stone-100 text-[11px] font-mono text-stone-600 font-semibold">
                      Sagas &amp; Workflows
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">
                    Event Choreography vs. Workflow Orchestration
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-[#e7e3da] bg-[#faf8f4]">
                          <th className="p-3 font-bold text-stone-900">Concern</th>
                          <th className="p-3 font-bold text-stone-900">Event Choreography</th>
                          <th className="p-3 font-bold text-stone-900">Workflow Orchestration</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100">
                        <tr>
                          <td className="p-3 font-bold text-stone-800">Flow Control</td>
                          <td className="p-3 text-stone-600">Decentralized; services react to facts</td>
                          <td className="p-3 text-stone-600">Central coordinator commands steps</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-stone-800">Coupling</td>
                          <td className="p-3 text-stone-600">Coupled only to event schema</td>
                          <td className="p-3 text-stone-600">Coupled to coordinator commands</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-stone-800">Failure Handling</td>
                          <td className="p-3 text-stone-600">Complex compensation event chains</td>
                          <td className="p-3 text-stone-600">Explicit saga state machine rollback</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-stone-800">Best Fit</td>
                          <td className="p-3 text-stone-600">Independent notifications &amp; analytics</td>
                          <td className="p-3 text-stone-600">Multi-step payments &amp; candidate onboarding</td>
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
                {/* Lesson 12.9 & Diagram 3: Stream Processing */}
                <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-mono font-bold text-orange-600">
                      Lesson 12.9 · Real-Time Computation
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-orange-100 text-[11px] font-mono text-orange-700 font-semibold">
                      Apache Flink
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">
                    Stateful Stream Processing: Windows, Watermarks &amp; Checkpoints
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    Stream processing continuously computes live aggregates over infinite event sequences.
                    Understanding the difference between <strong>Event Time</strong> (when it occurred on device) and
                    <strong>Processing Time</strong> (when the worker received it) is critical for accurate metrics.
                  </p>

                  <div className="my-6">
                    <StreamWindowingDiagram />
                  </div>
                </div>

                {/* Lesson 12.10: Backpressure & Reliability */}
                <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-mono font-bold text-orange-600">
                      Lesson 12.10 · Production Resilience
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-red-100 text-[11px] font-mono text-red-700 font-semibold">
                      Reliability Patterns
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">
                    Backpressure, Dead-Letter Queues (DLQ) &amp; Poison Messages
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs mb-4">
                    <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                      <strong className="text-stone-900 block mb-1">Backpressure Equation</strong>
                      <p className="text-stone-600 mb-2 font-mono">
                        B_(t+1) = B_t + max(0, P_t - C_t)
                      </p>
                      <span className="text-stone-500">
                        When incoming work \(P_t\) exceeds consumer capacity \(C_t\), backlog grows linearly.
                      </span>
                    </div>
                    <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                      <strong className="text-stone-900 block mb-1">Exponential Backoff &amp; Jitter</strong>
                      <p className="text-stone-600 mb-2">
                        Wait delays: 1s, 2s, 4s, 8s, 16s with random full jitter to prevent retry thundering herds.
                      </p>
                    </div>
                    <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                      <strong className="text-stone-900 block mb-1">Poison Message Isolation</strong>
                      <p className="text-stone-600 mb-2">
                        Route corrupt payloads to a Dead-Letter Queue after 3–5 retries to prevent blocking head-of-line.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Lesson 12.12: PrepSpaces End-to-End */}
                <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-mono font-bold text-orange-600">
                      Lesson 12.12 · Architecture
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-[11px] font-mono text-emerald-800 font-semibold">
                      PrepSpaces Implementation
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">
                    PrepSpaces End-to-End Event-Driven Workflow
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 text-xs">
                    <div className="p-3 rounded-xl border border-stone-200 bg-[#faf8f4]">
                      <span className="font-mono text-[10px] font-bold text-orange-600 block mb-1">Step 1</span>
                      <strong className="text-stone-900 block mb-0.5">Submit Answer</strong>
                      <span className="text-stone-600">Save answer &amp; outbox record in single SQL transaction.</span>
                    </div>
                    <div className="p-3 rounded-xl border border-stone-200 bg-[#faf8f4]">
                      <span className="font-mono text-[10px] font-bold text-orange-600 block mb-1">Step 2</span>
                      <strong className="text-stone-900 block mb-0.5">CDC Outbox Relay</strong>
                      <span className="text-stone-600">Debezium tails WAL and publishes event to Kafka topic.</span>
                    </div>
                    <div className="p-3 rounded-xl border border-stone-200 bg-[#faf8f4]">
                      <span className="font-mono text-[10px] font-bold text-orange-600 block mb-1">Step 3</span>
                      <strong className="text-stone-900 block mb-0.5">Report Worker</strong>
                      <span className="text-stone-600">Idempotently generates PDF and stores in cloud storage.</span>
                    </div>
                    <div className="p-3 rounded-xl border border-stone-200 bg-[#faf8f4]">
                      <span className="font-mono text-[10px] font-bold text-orange-600 block mb-1">Step 4</span>
                      <span className="text-stone-900 font-bold block mb-0.5">Flink Streaming</span>
                      <span className="text-stone-600">Calculates rolling 5-min candidate engagement metrics.</span>
                    </div>
                    <div className="p-3 rounded-xl border border-stone-200 bg-[#faf8f4]">
                      <span className="font-mono text-[10px] font-bold text-orange-600 block mb-1">Step 5</span>
                      <strong className="text-stone-900 block mb-0.5">Notification Worker</strong>
                      <span className="text-stone-600">Sends email via third-party provider with SQS DLQ retry.</span>
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
            {/* Simulator 1: Kafka Partitions & Sizing */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
                    Interactive Lab 1
                  </span>
                  <h3 className="text-xl font-bold text-stone-900">
                    Kafka Partitions &amp; Consumer Group Sizing ($C \leq P$)
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Test partition count versus active consumer capacity and observe idle consumer detection.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Partitions in Topic (\(P\)): {partitionCount}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="12"
                    value={partitionCount}
                    onChange={(e) => setPartitionCount(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[11px] text-stone-500 mt-1 block">
                    Sets maximum parallel consumption ceiling.
                  </span>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Consumers in Group (\(C\)): {consumerCount}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="12"
                    value={consumerCount}
                    onChange={(e) => setConsumerCount(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[11px] text-stone-500 mt-1 block">
                    Number of worker instances deployed in the group.
                  </span>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Entity Partition Key:
                  </label>
                  <input
                    type="text"
                    value={inputKey}
                    onChange={(e) => setInputKey(e.target.value)}
                    className="w-full p-2 text-xs font-mono rounded-lg border border-stone-300 bg-white"
                  />
                  <span className="text-[11px] text-stone-500 mt-1 block">
                    Hashes to: <strong>Partition #{computedSizing.targetPartition}</strong>
                  </span>
                </div>
              </div>

              {/* Sizing Results */}
              <div className="p-4 rounded-2xl border border-stone-200 bg-white grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 rounded-xl bg-stone-50">
                  <span className="text-[10px] font-mono text-stone-400 uppercase block">Active Consumers</span>
                  <strong className="text-lg text-emerald-700 font-mono">
                    {computedSizing.activeConsumers}
                  </strong>
                </div>
                <div className="p-3 rounded-xl bg-stone-50">
                  <span className="text-[10px] font-mono text-stone-400 uppercase block">Idle Consumers</span>
                  <strong
                    className={`text-lg font-mono ${
                      computedSizing.idleConsumers > 0 ? "text-red-600 font-bold" : "text-stone-700"
                    }`}
                  >
                    {computedSizing.idleConsumers}
                  </strong>
                </div>
                <div className="p-3 rounded-xl bg-stone-50">
                  <span className="text-[10px] font-mono text-stone-400 uppercase block">Avg Partitions/Worker</span>
                  <strong className="text-lg text-stone-900 font-mono">
                    {computedSizing.partitionsPerActive}
                  </strong>
                </div>
                <div className="p-3 rounded-xl bg-stone-50">
                  <span className="text-[10px] font-mono text-stone-400 uppercase block">Sizing Status</span>
                  <strong
                    className={`text-xs font-bold block mt-1 ${
                      computedSizing.idleConsumers > 0 ? "text-amber-700" : "text-emerald-700"
                    }`}
                  >
                    {computedSizing.idleConsumers > 0 ? "Over-provisioned" : "Optimal"}
                  </strong>
                </div>
              </div>
            </div>

            {/* Simulator 2: Backpressure & Backlog Calculator */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
                    Interactive Lab 2
                  </span>
                  <h3 className="text-xl font-bold text-stone-900">
                    Backpressure &amp; Queue Backlog Recovery Calculator
                  </h3>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Compute queue accumulation under sustained traffic surges using B_(t+1) = B_t + max(0, P_t - C_t).
                    </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Incoming Publish Rate (\(P_t\)): {producerRate} msg/s
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="5000"
                    step="100"
                    value={producerRate}
                    onChange={(e) => setProducerRate(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Consumer Processing Capacity (\(C_t\)): {consumerRate} msg/s
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="5000"
                    step="100"
                    value={consumerRate}
                    onChange={(e) => setConsumerRate(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Surge Duration: {durationMinutes} minutes
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={durationMinutes}
                    onChange={(e) => setDurationMinutes(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                </div>
              </div>

              {/* Calculated Results */}
              <div className="p-5 rounded-2xl border border-stone-200 bg-[#faf8f4] flex items-center justify-between flex-wrap gap-4 text-xs">
                <div>
                  <span className="text-[11px] font-mono text-stone-500 uppercase block">Backlog Growth Rate</span>
                  <span className="text-xl font-bold font-mono text-red-600">
                    +{backpressureStats.netGrowthPerSec.toLocaleString()} msg/sec
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-stone-500 uppercase block">Accumulated Backlog</span>
                  <span className="text-xl font-bold font-mono text-stone-900">
                    {backpressureStats.accumulatedBacklog.toLocaleString()} messages
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-stone-500 uppercase block">Time to Drain (Post-Surge)</span>
                  <span className="text-xl font-bold font-mono text-orange-600">
                    ~{backpressureStats.minutesToDrain} minutes
                  </span>
                </div>
              </div>
            </div>

            {/* Simulator 3: Outbox & Deduplication Lab */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
                    Interactive Lab 3
                  </span>
                  <h3 className="text-xl font-bold text-stone-900">
                    Transactional Outbox &amp; Idempotent Consumer Simulator
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Test atomic outbox publishing and consumer deduplication across broker outages.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setBrokerOnline(!brokerOnline)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold border cursor-pointer ${
                      brokerOnline
                        ? "bg-emerald-50 border-emerald-300 text-emerald-800"
                        : "bg-red-50 border-red-300 text-red-800"
                    }`}
                  >
                    Broker Status: {brokerOnline ? "ONLINE" : "OFFLINE"}
                  </button>
                  <button
                    type="button"
                    onClick={resetOutboxSim}
                    className="p-1.5 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 cursor-pointer"
                    title="Reset simulator"
                  >
                    <RotateCcw size={14} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Outbox Actions */}
                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-xs font-bold text-stone-900 block mb-2">
                    Transactional Outbox Table (1 Pending Event)
                  </span>
                  <div className="space-y-2 mb-3 font-mono text-xs">
                    {outboxEvents.map((evt) => (
                      <div
                        key={evt.id}
                        className="p-2.5 rounded-xl border border-stone-200 bg-white flex items-center justify-between"
                      >
                        <div>
                          <strong className="text-stone-800">{evt.id}</strong> · {evt.type}
                        </div>
                        <span
                          className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                            evt.published ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
                          }`}
                        >
                          {evt.published ? "Published" : "Pending"}
                        </span>
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={handlePublishOutbox}
                    className="w-full py-2 bg-[#f97316] hover:bg-[#ea580c] text-white text-xs font-bold rounded-xl transition cursor-pointer"
                  >
                    Dispatch Outbox Relay
                  </button>
                </div>

                {/* Consumer Action */}
                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-xs font-bold text-stone-900 block mb-2">
                    Consumer Execution &amp; Idempotency Check
                  </span>
                  <p className="text-xs text-stone-600 mb-3">
                    Click below to simulate delivering event <code>evt_101</code>. The first click commits; subsequent clicks test deduplication.
                  </p>
                  <button
                    type="button"
                    onClick={() => handleConsumeEvent("evt_101")}
                    className="w-full py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold rounded-xl transition cursor-pointer"
                  >
                    Deliver Event evt_101 to Consumer
                  </button>
                </div>
              </div>

              {/* Console log */}
              <div className="p-3 rounded-xl border border-stone-200 bg-stone-900 text-stone-100 font-mono text-xs max-h-36 overflow-y-auto space-y-1">
                {consumerLog.length === 0 ? (
                  <span className="text-stone-500 italic">No events processed yet.</span>
                ) : (
                  consumerLog.map((l, idx) => (
                    <div key={idx} className={l.error ? "text-red-400" : "text-emerald-400"}>
                      &gt; {l.msg}
                    </div>
                  ))
                )}
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
                q: "1. Why does at-least-once delivery require idempotent consumers in production systems?",
                a: "In distributed messaging systems (such as Kafka, RabbitMQ, or SQS), network timeouts and consumer crashes are inevitable. A consumer may successfully process a message, execute business logic, and commit database mutations, but crash right before sending an ACK to the broker. Upon visibility timeout or rebalance, the broker redelivers the message to another consumer instance. Without idempotent consumers (e.g., using a unique event_id deduplication table within the same database transaction), the business action will be executed multiple times, resulting in duplicate billing, repeated emails, or corrupted counts.",
              },
              {
                id: "qa-2",
                q: "2. What is the fundamental flaw with naive dual-writes (DB write followed by Kafka publish)?",
                a: "A service cannot execute an atomic transaction spanning a relational database and a non-transactional distributed message broker. If the database write succeeds but the Kafka publish fails due to a network glitch or broker restart, the database contains authoritative state that downstream services never know about. If you reverse the order (publish to Kafka first, then update DB), the DB update might fail due to a constraint violation, leaving the message broker announcing an event that never became authoritative.",
              },
              {
                id: "qa-3",
                q: "3. How does Kafka's consumer group model enforce partition assignment (the C <= P rule)?",
                a: "Kafka topics are split into independent ordered logs called partitions. Within a single consumer group, each partition is exclusively assigned to at most one active consumer instance at any given time. This guarantees strict in-order processing per partition without locking. If you deploy 6 consumers for a topic with only 4 partitions, 2 consumers will sit completely idle with 0 assigned partitions. To scale horizontal consumer throughput, you must increase the topic's partition count.",
              },
              {
                id: "qa-4",
                q: "4. What is the exact difference between event time, processing time, and watermarks in stream processing?",
                a: "Event time is the timestamp recorded when the event actually occurred on the producing device (e.g. 10:04). Processing time is the local wall-clock time of the stream-processing worker when it ingests the event (e.g. 10:09, delayed by network lag). If you bucket by processing time, late events distort analytical windows. A watermark is a streaming temporal signal emitted by the source indicating that no events older than timestamp T are expected, allowing window operators to trigger computation while defining an explicit late-event policy.",
              },
              {
                id: "qa-5",
                q: "5. When should you choose choreography vs orchestration in event-driven microservices?",
                a: "Choose Event Choreography for loosely coupled, independent reactions where services emit domain facts and others react (e.g. InterviewCompleted -> NotificationService sends email, Analytics updates count). Choose Workflow Orchestration (or Saga orchestrators like Temporal/AWS Step Functions) for complex, multi-step business transactions with strict state machines, compensating rollbacks, long pauses, and timeout tracking (e.g. Candidate Checkout -> Charge Card -> Provision Exam -> Send Receipt).",
              },
              {
                id: "qa-6",
                q: "6. How do you handle poison messages and prevent head-of-line blocking in message queues?",
                a: "A poison message is a malformed or bug-triggering payload that crashes the consumer deterministically every time it is read. In a FIFO or strict partition queue, this causes head-of-line blocking because subsequent valid messages cannot progress. The robust defensive pattern is bounded retries (e.g. 3 attempts) with exponential backoff and full jitter; if all retries are exhausted, route the failed message into a Dead-Letter Queue (DLQ) with error headers and continue processing the queue.",
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
                  Build a Mini Event-Driven System with Outbox &amp; Idempotency
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Practical engineering project implementing an InterviewCompleted producer, transactional outbox relay,
                  and two independent consumers (Reporting and Analytics) with deduplication.
                </p>
              </div>

              {/* Lab Phases */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-xs font-mono font-bold text-orange-600 block">Phase A</span>
                  <h4 className="font-bold text-stone-900 text-sm mt-0.5">Define Event Envelope &amp; Validation</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Design immutable <code>InterviewCompleted</code> event schema with eventId, correlationId, and schemaVersion.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-xs font-mono font-bold text-orange-600 block">Phase B</span>
                  <h4 className="font-bold text-stone-900 text-sm mt-0.5">Publish Reliably with Transactional Outbox</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Implement single database transaction saving entity and outbox table record, followed by a background relay.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-xs font-mono font-bold text-orange-600 block">Phase C</span>
                  <h4 className="font-bold text-stone-900 text-sm mt-0.5">Implement Independent Consumers</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Deploy Report Worker and Analytics Worker with isolated consumer groups and individual retry boundaries.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-xs font-mono font-bold text-orange-600 block">Phase D &amp; E</span>
                  <h4 className="font-bold text-stone-900 text-sm mt-0.5">Failure Testing &amp; Observability</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Inject broker disconnections, verify duplicate deduplication, configure DLQ, and monitor consumer lag.
                  </p>
                </div>
              </div>

              {/* Lab Checklist */}
              <div className="border-t border-[#e7e3da] pt-6">
                <h4 className="font-bold text-stone-900 text-sm mb-3">
                  Event-Driven Lab Checklist (8 Deliverables)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    { key: "phaseA_schema", label: "Immutable event envelope with eventId, schemaVersion & correlationId" },
                    { key: "phaseA_validation", label: "Runtime schema validation at producer and consumer boundaries" },
                    { key: "phaseB_outbox_tx", label: "Atomic SQL transaction committing entity update and outbox record" },
                    { key: "phaseB_cdc_relay", label: "Background outbox relay with backoff and reconnect logic" },
                    { key: "phaseC_consumers", label: "Two independent consumer groups with processed_events deduplication" },
                    { key: "phaseD_failure_tests", label: "Failure tests: broker disconnect, worker crash before ACK, redelivery" },
                    { key: "phaseE_metrics", label: "Telemetry dashboard capturing consumer lag, throughput, and DLQ depth" },
                    { key: "phaseE_report", label: "Architectural writeup detailing at-least-once recovery & replay ranges" },
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
                    Module 12 Assessment: Message Queues &amp; Event-Driven Architecture
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    6 questions testing commands vs events, Kafka partitions, at-least-once delivery, outbox pattern, and watermarks.
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
                  Primary References &amp; Industry Guides
                </span>
                <h3 className="text-xl font-extrabold text-stone-900">
                  Module 12: Research and Reading List
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Essential documentation and architecture guides covering Apache Kafka, RabbitMQ, SQS, Flink, and Debezium.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    id: 1,
                    title: "Apache Kafka Documentation",
                    focus: "Topics, partitions, offsets, consumer groups, and delivery semantics.",
                    url: "https://kafka.apache.org/documentation/",
                    linkText: "Read Kafka Documentation",
                  },
                  {
                    id: 2,
                    title: "RabbitMQ Tutorials & Concepts",
                    focus: "Work queues, topic exchanges, publisher confirms, and consumer acknowledgements.",
                    url: "https://www.rabbitmq.com/tutorials",
                    linkText: "Open RabbitMQ Tutorials",
                  },
                  {
                    id: 3,
                    title: "Microsoft Azure — Event-Driven Architecture Guide",
                    focus: "Producers, consumers, event channels, choreography, and error-handling patterns.",
                    url: "https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/event-driven",
                    linkText: "Azure Architecture Guide",
                  },
                  {
                    id: 4,
                    title: "Amazon SQS Developer Guide",
                    focus: "Visibility timeouts, at-least-once delivery, FIFO queues, and dead-letter queues.",
                    url: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/",
                    linkText: "Read AWS SQS Guide",
                  },
                  {
                    id: 5,
                    title: "Apache Flink — Stream Processing Concepts",
                    focus: "Event time, watermarks, tumbling/sliding windows, and stateful fault-tolerant checkpoints.",
                    url: "https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/time/",
                    linkText: "Study Flink Event Time",
                  },
                  {
                    id: 6,
                    title: "Debezium Outbox Event Router",
                    focus: "Transactional outbox pattern implementation using database change data capture (CDC).",
                    url: "https://debezium.io/documentation/reference/stable/transformations/outbox-event-router.html",
                    linkText: "Debezium Outbox Guide",
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
                    What You Mastered in Module 12
                  </span>
                  <span className="text-sm font-bold text-stone-900 block mt-0.5">
                    Asynchronous Messaging, Event-Driven Architecture &amp; Stream Processing
                  </span>
                  <span className="text-xs text-stone-600 block mt-0.5">
                    You can now engineer high-throughput event pipelines using Kafka partitions (\(C \leq P\)), Debezium outbox CDC, idempotent deduplication tables, and Flink event-time windows.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => navigate("/learning/system-design/consensus")}
                    className="flex items-center gap-1.5 rounded-xl border border-orange-300 bg-white px-3.5 py-2 text-xs font-bold text-orange-700 hover:bg-orange-50 transition cursor-pointer"
                  >
                    <span>Back to Module 11</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("assessment")}
                    className="flex items-center gap-1.5 rounded-xl border border-orange-300 bg-white px-3.5 py-2 text-xs font-bold text-orange-700 hover:bg-orange-50 transition cursor-pointer"
                  >
                    <span>Module 12 Quiz</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate("/learning/system-design/transactions")}
                    className="flex items-center gap-1.5 rounded-xl bg-[#f97316] px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#ea580c] transition cursor-pointer"
                  >
                    <span>Start Module 13 (Transactions &amp; Sagas)</span>
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
