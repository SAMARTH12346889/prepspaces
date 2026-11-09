// projectx/src/Componets/DataEngineeringStreamProcessing.jsx
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
  Lock,
  Flame,
  ArrowDownRight,
  Gauge
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import DataEngineeringStreamProcessingSections from "./DataEngineeringStreamProcessingSections";

export default function DataEngineeringStreamProcessing() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  // Mode switcher tab: 'curriculum' (Specification & Blueprints) | 'workbench' (Interactive Workbenches)
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbench, setActiveWorkbench] = useState("event_processing_time");
  // 'event_processing_time' | 'windowing_lab' | 'watermark_lateness' | 'stateful_ttl' | 'stream_joins' | 'dashboard_quiz'

  // ==========================================
  // WORKBENCH 1: EVENT TIME VS PROCESSING TIME
  // ==========================================
  const [mobileNetworkDelayMinutes, setMobileNetworkDelayMinutes] = useState(15);
  const [windowingModeW1, setWindowingModeW1] = useState("event_time"); // 'event_time' | 'processing_time'

  const w1EventScenario = useMemo(() => {
    const baseHour = 10;
    const baseMin = 2;
    const eventTimeStr = `10:02:00`;
    const arrivalMin = baseMin + mobileNetworkDelayMinutes;
    const arrivalHour = baseHour + Math.floor(arrivalMin / 60);
    const arrivalMinRem = arrivalMin % 60;
    const processingTimeStr = `${arrivalHour.toString().padStart(2, "0")}:${arrivalMinRem.toString().padStart(2, "0")}:05`;

    let assignedWindow = "";
    let isAccurate = true;

    if (windowingModeW1 === "event_time") {
      assignedWindow = "10:00:00 – 10:05:00";
      isAccurate = true;
    } else {
      // processing time window
      const winStartMin = Math.floor(arrivalMinRem / 5) * 5;
      const winEndMin = winStartMin + 5;
      assignedWindow = `${arrivalHour.toString().padStart(2, "0")}:${winStartMin.toString().padStart(2, "0")}:00 – ${arrivalHour.toString().padStart(2, "0")}:${winEndMin.toString().padStart(2, "0")}:00`;
      isAccurate = false;
    }

    return {
      eventTimeStr,
      processingTimeStr,
      assignedWindow,
      isAccurate
    };
  }, [mobileNetworkDelayMinutes, windowingModeW1]);

  // ==========================================
  // WORKBENCH 2: INTERACTIVE WINDOWING LAB
  // ==========================================
  const [selectedWindowType, setSelectedWindowType] = useState("tumbling"); // 'tumbling' | 'sliding' | 'session'
  const [sessionInactivityGap, setSessionInactivityGap] = useState(10); // minutes

  const initialSampleEvents = useMemo(() => [
    { id: "E1", user: "u-101", time: "10:00:05", amount: 1500, timeMin: 0.08 },
    { id: "E2", user: "u-101", time: "10:00:30", amount: 2200, timeMin: 0.5 },
    { id: "E3", user: "u-101", time: "10:01:15", amount: 800, timeMin: 1.25 },
    { id: "E4", user: "u-101", time: "10:02:40", amount: 3100, timeMin: 2.66 },
    { id: "E5", user: "u-101", time: "10:14:10", amount: 1900, timeMin: 14.16 },
    { id: "E6", user: "u-101", time: "10:16:00", amount: 4500, timeMin: 16.0 }
  ], []);

  const [w2Events, setW2Events] = useState(initialSampleEvents);

  const handleAddInterveningEvent = () => {
    // Add event at 10:07:00 (minute 7.0) to demonstrate session merging
    if (!w2Events.some(e => e.id === "E_INTERVENE")) {
      const newEvt = { id: "E_INTERVENE", user: "u-101", time: "10:07:00", amount: 1200, timeMin: 7.0 };
      setW2Events(prev => [...prev, newEvt].sort((a, b) => a.timeMin - b.timeMin));
    }
  };

  const handleResetW2Events = () => {
    setW2Events(initialSampleEvents);
  };

  // ==========================================
  // WORKBENCH 3: WATERMARKS & ALLOWED LATENESS
  // ==========================================
  const [allowedLatenessMinutes, setAllowedLatenessMinutes] = useState(2);
  const [watermarkDelayMinutes, setWatermarkDelayMinutes] = useState(2);
  const [w3StreamEvents, setW3StreamEvents] = useState([
    { id: "A", time: "10:00:05", arrival: "10:00:06", timeMin: 0.08 },
    { id: "B", time: "10:00:10", arrival: "10:00:11", timeMin: 0.16 },
    { id: "C", time: "10:00:08", arrival: "10:00:15", timeMin: 0.13 },
    { id: "D", time: "10:02:30", arrival: "10:02:32", timeMin: 2.5 }
  ]);

  const maxEventTimeMin = useMemo(() => {
    return Math.max(...w3StreamEvents.map(e => e.timeMin), 0);
  }, [w3StreamEvents]);

  const currentWatermarkMin = useMemo(() => {
    return Math.max(0, maxEventTimeMin - watermarkDelayMinutes);
  }, [maxEventTimeMin, watermarkDelayMinutes]);

  const handleInjectLateEvent = (delayType) => {
    const nowId = `EVT-${Date.now().toString().slice(-4)}`;
    if (delayType === "mild_late") {
      // Event occurred at 10:01:00 (Min 1.0), but max is already 2.5, watermark is 0.5. Late relative to watermark? No, 1.0 >= 0.5.
      // Let's create an event at 10:00:20 (0.33 min) when watermark is 0.5 min. Late but within allowed lateness!
      const newEvt = { id: nowId, time: "10:00:20", arrival: "10:03:00", timeMin: 0.33 };
      setW3StreamEvents(prev => [...prev, newEvt]);
    } else {
      // severely late: occurred at 09:55:00 (-5.0 min)
      const newEvt = { id: nowId, time: "09:55:00", arrival: "10:03:10", timeMin: -5.0 };
      setW3StreamEvents(prev => [...prev, newEvt]);
    }
  };

  // ==========================================
  // WORKBENCH 4: STATEFUL PROCESSING & ROCKSDB TTL
  // ==========================================
  const [customerStateStore, setCustomerStateStore] = useState({
    "cust-101": { count: 4, total: 9500, lastUpdatedMin: 5, status: "ACTIVE" },
    "cust-102": { count: 2, total: 5400, lastUpdatedMin: 18, status: "ACTIVE" },
    "cust-103": { count: 1, total: 1800, lastUpdatedMin: 2, status: "ACTIVE" }
  });
  const [simulatedEngineClockMin, setSimulatedEngineClockMin] = useState(20);
  const ttlWindowMinutes = 15;

  const handleCustomerTransaction = (customerId, amount) => {
    setCustomerStateStore(prev => {
      const existing = prev[customerId] || { count: 0, total: 0, lastUpdatedMin: 0, status: "ACTIVE" };
      return {
        ...prev,
        [customerId]: {
          count: existing.count + 1,
          total: existing.total + amount,
          lastUpdatedMin: simulatedEngineClockMin,
          status: "ACTIVE"
        }
      };
    });
  };

  const handleAdvanceClockAndEvictTTL = () => {
    const nextClock = simulatedEngineClockMin + 15;
    setSimulatedEngineClockMin(nextClock);

    // Evict entries where (nextClock - lastUpdatedMin) > ttlWindowMinutes
    setCustomerStateStore(prev => {
      const updated = {};
      Object.keys(prev).forEach(k => {
        const item = prev[k];
        if (nextClock - item.lastUpdatedMin <= ttlWindowMinutes) {
          updated[k] = item;
        } else {
          updated[k] = { ...item, status: "EVICTED_TTL" };
        }
      });
      return updated;
    });
  };

  const handleResetStateStore = () => {
    setSimulatedEngineClockMin(20);
    setCustomerStateStore({
      "cust-101": { count: 4, total: 9500, lastUpdatedMin: 5, status: "ACTIVE" },
      "cust-102": { count: 2, total: 5400, lastUpdatedMin: 18, status: "ACTIVE" },
      "cust-103": { count: 1, total: 1800, lastUpdatedMin: 2, status: "ACTIVE" }
    });
  };

  // ==========================================
  // WORKBENCH 5: STREAM-STREAM JOINS
  // ==========================================
  const [orderStream, setOrderStream] = useState([
    { order_id: 5001, customer_id: 101, amount: 2500, time: "10:00:00", matched: true },
    { order_id: 5002, customer_id: 102, amount: 4200, time: "10:05:00", matched: false }
  ]);
  const [paymentStream, setPaymentStream] = useState([
    { payment_id: 9001, order_id: 5001, time: "10:12:00" }
  ]);
  const [joinedOutputs, setJoinedOutputs] = useState([
    {
      order_id: 5001,
      payment_id: 9001,
      customer_id: 101,
      amount: 2500,
      order_time: "10:00:00",
      payment_time: "10:12:00",
      join_latency: "12m 00s"
    }
  ]);

  const handleSendPaymentForOrder = (orderId) => {
    const ord = orderStream.find(o => o.order_id === orderId);
    if (!ord) return;
    const newPayId = 9000 + Math.floor(Math.random() * 900);
    const payTime = "10:18:00";

    setPaymentStream(prev => [...prev, { payment_id: newPayId, order_id: orderId, time: payTime }]);
    setOrderStream(prev => prev.map(o => o.order_id === orderId ? { ...o, matched: true } : o));
    setJoinedOutputs(prev => [
      {
        order_id: orderId,
        payment_id: newPayId,
        customer_id: ord.customer_id,
        amount: ord.amount,
        order_time: ord.time,
        payment_time: payTime,
        join_latency: "13m 00s"
      },
      ...prev
    ]);
  };

  // ==========================================
  // WORKBENCH 6: REAL-TIME ANALYTICS & QUIZ
  // ==========================================
  const [sparkOutputMode, setSparkOutputMode] = useState("update"); // 'append' | 'update' | 'complete'
  const [liveMetrics, setLiveMetrics] = useState({
    totalOrders: 1420,
    totalRevenue: 3840000,
    ordersPerMin: 185,
    activeCustomers: 412,
    consumerLag: 18
  });

  const handleSimulateBatchTick = () => {
    setLiveMetrics(prev => ({
      totalOrders: prev.totalOrders + Math.floor(Math.random() * 25) + 10,
      totalRevenue: prev.totalRevenue + (Math.floor(Math.random() * 40000) + 15000),
      ordersPerMin: Math.floor(Math.random() * 40) + 160,
      activeCustomers: prev.activeCustomers + Math.floor(Math.random() * 5),
      consumerLag: Math.max(0, prev.consumerLag + (Math.random() > 0.5 ? 4 : -3))
    }));
  };

  // 15-Question Curriculum Quiz
  const quizQuestions = useMemo(() => [
    {
      id: 1,
      q: "What is the primary architectural difference between stream processing and traditional batch processing?",
      options: [
        "Stream processing continuously computes over unbounded records as they arrive with millisecond-to-second latency, while batch processing executes at scheduled intervals over finite collected datasets",
        "Stream processing can only execute simple arithmetic, while batch processing is required for SQL queries",
        "Stream processing stores all data permanently in memory and never writes to disk",
        "Stream processing requires a dedicated GPU cluster, while batch processing only runs on single CPU machines"
      ],
      correct: 0,
      expl: "Stream processing treats data as an ongoing, unbounded flow of events, evaluating business logic, window aggregations, and joins incrementally with low latency. Batch processing waits for data to accumulate into finite bounded datasets before scheduled execution."
    },
    {
      id: 2,
      q: "Why cannot an unbounded dataset be queried with a traditional 'SELECT SUM(amount) FROM orders' without windowing or stateful stream abstractions?",
      options: [
        "Because an unbounded dataset continuously grows without a predefined end, so the total amount would continuously evolve forever without terminating",
        "Because SQL syntax is fundamentally incompatible with Kafka topics",
        "Because unbounded datasets automatically delete records older than 60 seconds",
        "Because distributed databases cannot compute SUM aggregations across more than 1,000 rows"
      ],
      correct: 0,
      expl: "In an unbounded stream, events continue arriving indefinitely. A standard batch query expects a finite dataset that finishes; stream processing requires defining time windows (e.g. 5-minute tumbling windows) or continuously maintaining stateful running aggregates."
    },
    {
      id: 3,
      q: "A delivery driver completes an order on a mobile device at 10:00:00 AM, but loses cellular network connectivity. The device reconnects and transmits the event at 10:15:00 AM, which is processed by the streaming engine at 10:15:05 AM. What is the Event Time of this record?",
      options: [
        "10:00:00 AM (the actual timestamp when the physical delivery occurred at the source)",
        "10:15:00 AM (the ingestion time when the event entered the server gateway)",
        "10:15:05 AM (the processing time when the stream operator processed the record)",
        "10:07:30 AM (the mathematical average of source and server arrival timestamps)"
      ],
      correct: 0,
      expl: "Event time represents the actual timestamp when the real-world event occurred at the source device. Processing time is the machine clock when the engine executes the event, and ingestion time is when it enters the platform broker."
    },
    {
      id: 4,
      q: "How does a Tumbling Window group incoming streaming events?",
      options: [
        "It segments the stream into fixed-size, non-overlapping, contiguous time intervals where each event belongs to exactly one window",
        "It creates overlapping windows that advance forward by a slide interval smaller than the window length",
        "It groups events dynamically based on user activity separated by configurable inactivity gaps",
        "It flushes all records whenever consumer lag exceeds 1,000 messages"
      ],
      correct: 0,
      expl: "Tumbling windows divide a stream into fixed-duration, non-overlapping intervals (e.g., 10:00-10:05, 10:05-10:10). Assuming event-time alignment, every record belongs to exactly one tumbling window."
    },
    {
      id: 5,
      q: "If a streaming query configures a Sliding Window with a duration of 10 minutes and a slide (hop) interval of 2 minutes, how many windows will an individual event typically belong to?",
      options: [
        "5 overlapping windows (10 minutes duration / 2 minutes slide)",
        "1 window only, because sliding windows never overlap",
        "10 windows, one for every minute of duration",
        "Zero windows, unless the event arrives with zero network latency"
      ],
      correct: 0,
      expl: "In a sliding (hopping) window, the window duration exceeds the slide step (e.g. 10m / 2m = 5). An event falls into every overlapping window that covers its timestamp, increasing state requirements proportionally."
    },
    {
      id: 6,
      q: "What is the defining characteristic of a Session Window?",
      options: [
        "It groups events by activity periods separated by an inactivity gap, resulting in windows of dynamic, variable lengths that can merge",
        "It has a fixed 24-hour duration that resets at midnight UTC",
        "It guarantees that every user session processes exactly 100 events before closing",
        "It ignores event timestamps and only counts records per consumer thread"
      ],
      correct: 0,
      expl: "Session windows do not have fixed start and end durations; they are driven by periods of activity. Consecutive events within an inactivity gap belong to the same session. When a new event arrives that spans two previously separate gaps, the sessions merge."
    },
    {
      id: 7,
      q: "In event-time stream processing, what is the core purpose of a Watermark?",
      options: [
        "It acts as a temporal progress metric indicating that the engine estimates all events with timestamps up to T have arrived, allowing window finalization and state cleanup",
        "It encrypts payload data using digital watermarking algorithms to prevent fraud",
        "It forces Kafka brokers to flush memory buffers to physical NVMe disk every 10ms",
        "It limits the maximum number of task slots a Flink JobManager can allocate"
      ],
      correct: 0,
      expl: "A watermark carrying timestamp T declares that the stream processor estimates event-time progress has reached T. When a watermark passes a window's end time, the engine can trigger the window computation and clean up state."
    },
    {
      id: 8,
      q: "What is the precise distinction between an out-of-order event and a late-arriving event in stream processing?",
      options: [
        "An out-of-order event arrives in a sequence different from its event time; a late event arrives after the engine's watermark has already passed its timestamp",
        "An out-of-order event is always dropped, while late events are always retained in memory forever",
        "Late events only occur in batch processing, whereas out-of-order events only occur in Kafka brokers",
        "There is no difference; the terms are completely interchangeable"
      ],
      correct: 0,
      expl: "An out-of-order event simply arrives out of chronological sequence, but if it arrives before the watermark passes its timestamp, it is still processed on-time. A late event arrives after the watermark has already advanced past its timestamp."
    },
    {
      id: 9,
      q: "Why is State Time-To-Live (TTL) essential in stateful stream processing applications (e.g., customer transaction accumulators)?",
      options: [
        "To evict inactive keys from state backends (like RocksDB) after a configured duration, preventing unbounded memory and disk storage growth",
        "To ensure that all Kafka topics delete partitions every 24 hours",
        "To force the Java Virtual Machine to restart every 10 minutes",
        "To synchronize physical server hardware clocks across AWS availability zones"
      ],
      correct: 0,
      expl: "In an unbounded stream with millions of unique keys (e.g. customer IDs), maintaining state indefinitely causes memory and disk exhaustion. State TTL automatically cleans up state for keys that have had no activity for a defined duration."
    },
    {
      id: 10,
      q: "Why does a stream-stream join (e.g. matching an orders stream with a payments stream) fundamentally require state and a time window constraint?",
      options: [
        "Because orders and payments arrive asynchronously at different times; the engine must buffer records in state while waiting for the match within a bounded time interval",
        "Because streaming joins cannot evaluate equality conditions on integer keys",
        "Because Kafka topics cannot be read by more than one stream processing thread simultaneously",
        "Because foreign key constraints are only supported in MySQL and PostgreSQL"
      ],
      correct: 0,
      expl: "An order may arrive before its payment, or vice versa. Since both streams are unbounded, the engine must buffer incoming events in state. A time window constraint (e.g. within 30 minutes) is mandatory so unmatched records can eventually be expired from state."
    },
    {
      id: 11,
      q: "How does Apache Flink achieve fault-tolerant state recovery without restarting a streaming application from the beginning of the log?",
      options: [
        "It injects checkpoint barriers into the dataflow that take coordinated distributed snapshots of operator state and source offsets to durable storage",
        "It writes every single event to an external Redis cache before passing it to the next operator",
        "It requires all streaming operators to run as stateless Python functions",
        "It takes a complete snapshot of the entire operating system virtual machine every 1 second"
      ],
      correct: 0,
      expl: "Flink uses checkpoint barriers that flow alongside stream records through operators. When barriers reach an operator, it writes its current state to durable storage (S3, HDFS) along with source offsets, establishing a consistent recovery point."
    },
    {
      id: 12,
      q: "Why does an internal exactly-once guarantee in a stream processing engine (like Flink or Spark) NOT automatically guarantee end-to-end exactly-once business effects in an external destination?",
      options: [
        "Because if the output sink (e.g. external database or REST API) is not transactional or idempotent, retries during failure recovery will duplicate external writes",
        "Because Kafka brokers automatically corrupt duplicate offset commits",
        "Because Python code cannot execute distributed transactions across network sockets",
        "Because exactly-once processing is only theoretically possible on single-core laptops"
      ],
      correct: 0,
      expl: "End-to-end exactly-once requires three coordinated pieces: a replayable source (Kafka), a deterministic engine with checkpointed state (Flink/Spark), and a transactional (two-phase commit) or idempotent (UPSERT / ON CONFLICT) sink."
    },
    {
      id: 13,
      q: "In Apache Flink architecture, what is the specific role of Task Slots inside a TaskManager?",
      options: [
        "They are units of resource scheduling inside a TaskManager, each executing a subset of parallel operator subtasks and isolating memory/threads",
        "They are physical PCIe slots used for inserting GPU accelerators into worker nodes",
        "They are HTTP endpoints used exclusively for receiving REST API queries from dashboards",
        "They are ZooKeeper locks used to elect the active JobManager coordinator"
      ],
      correct: 0,
      expl: "A TaskManager allocates its resources into one or more Task Slots. Each slot can execute a slice of the parallel execution graph (operators and chains), enabling predictable resource sharing and parallelism within the worker process."
    },
    {
      id: 14,
      q: "How does Spark Structured Streaming differ from legacy Spark Streaming (DStreams)?",
      options: [
        "Structured Streaming operates on DataFrames/Datasets as incrementally updated tables with native event-time watermarking, whereas DStreams used low-level RDDs",
        "Structured Streaming only supports batch files, whereas DStreams supported real-time streaming",
        "Legacy DStreams is recommended by Apache Spark for all new production pipelines in 2026",
        "Structured Streaming does not support fault tolerance or checkpointing"
      ],
      correct: 0,
      expl: "Legacy Spark Streaming was built on Discretized Streams (DStreams) of RDDs. Structured Streaming is Spark's modern engine, treating streaming as an evolving table over DataFrames and Datasets with robust watermarking, stream-stream joins, and multiple output modes."
    },
    {
      id: 15,
      q: "In Spark Structured Streaming, which output mode should be used when writing continuously updated grouped aggregate metrics (e.g. running revenue per customer) to an external sink?",
      options: [
        "Update mode, which outputs only the rows that changed since the last micro-batch trigger",
        "Append mode, which outputs all rows regardless of whether they changed",
        "Complete mode, which deletes the destination table before inserting raw events",
        "Ignore mode, which bypasses the sink whenever new records arrive"
      ],
      correct: 0,
      expl: "In Spark Structured Streaming, Update mode outputs only the rows that were updated or added in the latest trigger. Append mode is only valid for queries where results are finalized (like watermarked windows), while Complete mode outputs the entire table each time."
    }
  ], []);

  const [userAnswers, setUserAnswers] = useState({});
  const [showScore, setShowScore] = useState(false);

  const handleSelectOption = (qId, optIdx) => {
    setUserAnswers(prev => ({ ...prev, [qId]: optIdx }));
  };

  const calculatedScore = useMemo(() => {
    let score = 0;
    quizQuestions.forEach(q => {
      if (userAnswers[q.id] === q.correct) score++;
    });
    return score;
  }, [quizQuestions, userAnswers]);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 font-sans pb-24 selection:bg-orange-200">
      {/* Top Universal Navigation */}
      <div className="border-b border-[#e7e3da] bg-white/80 backdrop-blur sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => goBack()}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors bg-stone-100 hover:bg-stone-200/80 px-3 py-1.5 rounded-lg border border-stone-200"
          >
            <ArrowLeft size={14} />
            <span>Back</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-bold text-stone-700 tracking-wide uppercase font-mono">Module 17 · Stream Processing</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
        <ModuleNav />

        {/* Hero Header */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 mt-6 shadow-sm">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
              Module 17
            </span>
            <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold">
              Stream Processing &amp; Real-Time Analytics
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold flex items-center gap-1">
              <CheckCircle size={12} />
              Apache Flink &amp; Spark Structured Streaming
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-3">
            Stream Processing &amp; Real-Time Analytics
          </h1>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-4xl">
            Master distributed streaming engines: unbounded event computation, event time vs processing time, windowing (tumbling, sliding, session), watermarks and out-of-order latency, allowed lateness, stateful processing with RocksDB State TTL, stream-stream joins, checkpoint barriers and recovery, Apache Flink architecture, Spark Structured Streaming (micro-batch vs Real-time mode), and real-time analytics dashboard design.
          </p>

          {/* Primary View Switcher */}
          <div className="mt-6 flex flex-wrap gap-2 border-t border-stone-200 pt-4">
            <button
              onClick={() => setActiveTab("curriculum")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                activeTab === "curriculum"
                  ? "bg-stone-900 text-white shadow-sm"
                  : "bg-stone-100 text-stone-700 hover:bg-stone-200"
              }`}
            >
              <BookOpen size={16} />
              <span>Specification &amp; Blueprints (32 Sections)</span>
            </button>
            <button
              onClick={() => setActiveTab("workbench")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                activeTab === "workbench"
                  ? "bg-[#f97316] text-white shadow-sm"
                  : "bg-orange-50 text-orange-800 hover:bg-orange-100 border border-orange-200"
              }`}
            >
              <Sparkles size={16} />
              <span>Interactive Workbenches (6)</span>
            </button>
          </div>
        </div>

        {/* CURRICULUM TAB */}
        {activeTab === "curriculum" && (
          <div className="mt-8 space-y-6">
            {/* Quick Section Navigator Bar */}
            <div className="bg-white rounded-xl border border-[#e7e3da] p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-stone-600 uppercase tracking-wider font-mono">
                  Quick Jump · 32 Core Curriculum Sections
                </span>
                <span className="text-xs text-stone-500 font-mono">100% Textbook Depth</span>
              </div>
              <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto p-1 [scrollbar-width:thin]">
                {[
                  { num: 0, label: "Roadmap" },
                  { num: 1, label: "1. Intro Streaming" },
                  { num: 2, label: "2. Batch vs Stream" },
                  { num: 3, label: "3. Bounded/Unbounded" },
                  { num: 4, label: "4. Pipeline Arch" },
                  { num: 5, label: "5. Event vs Proc Time" },
                  { num: 6, label: "6. Window Concepts" },
                  { num: 7, label: "7. Tumbling Windows" },
                  { num: 8, label: "8. Sliding Windows" },
                  { num: 9, label: "9. Session Windows" },
                  { num: 10, label: "10. Watermarks" },
                  { num: 11, label: "11. Out-of-Order" },
                  { num: 12, label: "12. Late Events" },
                  { num: 13, label: "13. Stateful Streams" },
                  { num: 14, label: "14. Joins & Aggs" },
                  { num: 15, label: "15. Checkpointing" },
                  { num: 16, label: "16. Exactly-Once" },
                  { num: 17, label: "17. Flink Architecture" },
                  { num: 18, label: "18. Spark Streaming" },
                  { num: 19, label: "19. Flink vs Spark" },
                  { num: 20, label: "20. Streaming ETL" },
                  { num: 21, label: "21. Real-Time Dashboards" },
                  { num: 22, label: "22. End-to-End App" },
                  { num: 23, label: "23. Lab 1: Windows" },
                  { num: 24, label: "24. Lab 2: Watermarks" },
                  { num: 25, label: "25. Lab 3: Fraud Monitor" },
                  { num: 26, label: "26. Lab 4: Flink SQL" },
                  { num: 27, label: "27. Lab 5: Capstone" },
                  { num: 28, label: "28. 15 Pitfalls" },
                  { num: 29, label: "29. 35 Interview Q&A" },
                  { num: 30, label: "30. Resources" },
                  { num: 31, label: "31. Final Revision" },
                  { num: 32, label: "32. Roadmap Ahead" }
                ].map(item => (
                  <a
                    key={item.num}
                    href={item.num === 0 ? "#overview" : `#section-${item.num}`}
                    className="px-2.5 py-1 text-xs rounded-lg bg-stone-100 hover:bg-orange-100 hover:text-orange-900 text-stone-700 font-medium transition-colors border border-stone-200"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Generated Full Curriculum Component */}
            <DataEngineeringStreamProcessingSections />
          </div>
        )}

        {/* WORKBENCHES TAB */}
        {activeTab === "workbench" && (
          <div className="mt-8 space-y-6">
            {/* Workbench Selector Tabs */}
            <div className="bg-white rounded-2xl border border-[#e7e3da] p-3 shadow-sm flex flex-wrap gap-2">
              {[
                { id: "event_processing_time", label: "1. Event vs Processing Time", icon: Clock },
                { id: "windowing_lab", label: "2. Windowing Lab (Tumble, Slide, Session)", icon: Split },
                { id: "watermark_lateness", label: "3. Watermarks & Late-Data Sieve", icon: Activity },
                { id: "stateful_ttl", label: "4. Stateful Streams & RocksDB TTL", icon: Database },
                { id: "stream_joins", label: "5. Stream-Stream Join Engine", icon: Merge },
                { id: "dashboard_quiz", label: "6. Real-Time Dashboard & Quiz", icon: BarChart3 }
              ].map(wb => {
                const Icon = wb.icon;
                const isActive = activeWorkbench === wb.id;
                return (
                  <button
                    key={wb.id}
                    onClick={() => setActiveWorkbench(wb.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                      isActive
                        ? "bg-[#f97316] text-white shadow-sm"
                        : "bg-stone-50 text-stone-700 hover:bg-stone-100 border border-stone-200"
                    }`}
                  >
                    <Icon size={14} />
                    <span>{wb.label}</span>
                  </button>
                );
              })}
            </div>

            {/* WORKBENCH 1: EVENT TIME VS PROCESSING TIME */}
            {activeWorkbench === "event_processing_time" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
                      <Clock className="text-orange-500" />
                      <span>Event Time vs Processing Time Simulator</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      Simulate network delays and mobile offline buffering. Observe how processing-time grouping corrupts analytical windows while event-time grouping preserves correctness.
                    </p>
                  </div>
                </div>

                {/* Delay Slider and Mode Controls */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-stone-800">
                      <span>Network / Offline Transmission Delay:</span>
                      <span className="font-mono text-orange-600">{mobileNetworkDelayMinutes} Minutes</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="45"
                      step="5"
                      value={mobileNetworkDelayMinutes}
                      onChange={e => setMobileNetworkDelayMinutes(Number(e.target.value))}
                      className="w-full accent-orange-600"
                    />
                    <div className="flex justify-between text-[10px] text-stone-500 font-mono">
                      <span>0m (Instant)</span>
                      <span>15m (Cellular Outage)</span>
                      <span>45m (Extended Offline)</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="block text-xs font-bold text-stone-700 mb-2">Window Grouping Mode:</span>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setWindowingModeW1("event_time")}
                        className={`p-2.5 rounded-lg text-xs font-bold border transition-colors ${
                          windowingModeW1 === "event_time"
                            ? "bg-orange-500 text-white border-orange-600 shadow-sm"
                            : "bg-white text-stone-700 border-stone-300 hover:bg-stone-100"
                        }`}
                      >
                        Event-Time Windowing (Accurate)
                      </button>
                      <button
                        onClick={() => setWindowingModeW1("processing_time")}
                        className={`p-2.5 rounded-lg text-xs font-bold border transition-colors ${
                          windowingModeW1 === "processing_time"
                            ? "bg-stone-900 text-white border-stone-900 shadow-sm"
                            : "bg-white text-stone-700 border-stone-300 hover:bg-stone-100"
                        }`}
                      >
                        Processing-Time Windowing (Flawed)
                      </button>
                    </div>
                  </div>
                </div>

                {/* Visual Pipeline Progression */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs font-mono">
                    <div className="text-[10px] uppercase font-bold text-blue-700">1. Mobile Client</div>
                    <div className="text-stone-900 font-bold mt-1">Delivery Completed</div>
                    <div className="text-blue-900 mt-2">Timestamp: <span className="font-bold">{w1EventScenario.eventTimeStr}</span></div>
                    <div className="text-[10px] text-blue-600 mt-0.5">Event Time (Fact)</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-300 text-xs font-mono">
                    <div className="text-[10px] uppercase font-bold text-stone-600">2. Cellular Delay</div>
                    <div className="text-stone-900 font-bold mt-1">Offline Buffer</div>
                    <div className="text-stone-700 mt-2">Latency: <span className="font-bold">{mobileNetworkDelayMinutes} min</span></div>
                    <div className="text-[10px] text-stone-500 mt-0.5">Network disconnected</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-purple-50 border border-purple-200 text-xs font-mono">
                    <div className="text-[10px] uppercase font-bold text-purple-700">3. Flink Operator</div>
                    <div className="text-stone-900 font-bold mt-1">Execution Clock</div>
                    <div className="text-purple-900 mt-2">Timestamp: <span className="font-bold">{w1EventScenario.processingTimeStr}</span></div>
                    <div className="text-[10px] text-purple-600 mt-0.5">Processing Time (Arrival)</div>
                  </div>

                  <div className={`p-3.5 rounded-xl border text-xs font-mono ${
                    w1EventScenario.isAccurate ? "bg-emerald-50 border-emerald-300" : "bg-red-50 border-red-300"
                  }`}>
                    <div className={`text-[10px] uppercase font-bold ${
                      w1EventScenario.isAccurate ? "text-emerald-700" : "text-red-700"
                    }`}>
                      4. Assigned Window
                    </div>
                    <div className="text-stone-900 font-bold mt-1">{w1EventScenario.assignedWindow}</div>
                    <div className={`mt-2 font-bold text-[11px] ${
                      w1EventScenario.isAccurate ? "text-emerald-800" : "text-red-800"
                    }`}>
                      {w1EventScenario.isAccurate ? "CORRECT BUCKET" : "WRONG ANALYTICAL BUCKET"}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700 leading-relaxed">
                  <span className="font-bold">Architectural Takeaway:</span> In a distributed pipeline, network latency, device disconnections, and worker retries cause records to arrive with unpredictable delays. Processing time places the record into whenever the server executed it ({w1EventScenario.processingTimeStr}), falsifying hourly sales analytics. Event time uses the physical event origin timestamp ({w1EventScenario.eventTimeStr}), placing the transaction into its genuine historical window (10:00–10:05).
                </div>
              </div>
            )}

            {/* WORKBENCH 2: WINDOWING LAB */}
            {activeWorkbench === "windowing_lab" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
                      <Split className="text-orange-500" />
                      <span>Interactive Windowing Laboratory</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      Compare Tumbling (fixed non-overlapping), Sliding (overlapping rolling intervals), and Session (activity-driven gap) windows.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={handleAddInterveningEvent}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-orange-100 hover:bg-orange-200 text-orange-900 border border-orange-300"
                    >
                      + Add 10:07 Event (Triggers Session Merge)
                    </button>
                    <button
                      onClick={handleResetW2Events}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200 flex items-center gap-1"
                    >
                      <RotateCcw size={12} />
                      <span>Reset</span>
                    </button>
                  </div>
                </div>

                {/* Window Type Switcher */}
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: "tumbling", label: "Tumbling Window (5 min)", desc: "Fixed, contiguous, non-overlapping" },
                    { id: "sliding", label: "Sliding Window (10 min size, 5 min slide)", desc: "Overlapping rolling interval" },
                    { id: "session", label: "Session Window (10 min inactivity gap)", desc: "Activity bursts, dynamic duration" }
                  ].map(w => (
                    <button
                      key={w.id}
                      onClick={() => setSelectedWindowType(w.id)}
                      className={`px-4 py-2.5 rounded-xl text-left border transition-all ${
                        selectedWindowType === w.id
                          ? "bg-stone-900 text-white border-stone-900 shadow-sm"
                          : "bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100"
                      }`}
                    >
                      <div className="text-xs font-bold">{w.label}</div>
                      <div className="text-[10px] opacity-75">{w.desc}</div>
                    </button>
                  ))}
                </div>

                {/* Stream Timeline Representation */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-stone-800 uppercase tracking-wider font-mono">
                    Incoming Order Event Stream (user: u-101)
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-2">
                    {w2Events.map(evt => (
                      <div key={evt.id} className="p-2.5 rounded-lg bg-stone-50 border border-stone-200 text-center font-mono text-xs">
                        <span className="font-bold text-orange-600 block">{evt.id}</span>
                        <span className="text-stone-900 text-[11px] block">{evt.time}</span>
                        <span className="text-stone-500 text-[10px]">₹{evt.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Window Partition Results */}
                <div className="space-y-3">
                  <div className="text-xs font-bold text-stone-800 uppercase tracking-wider font-mono">
                    Calculated Window Partitions &amp; Aggregates
                  </div>

                  {selectedWindowType === "tumbling" && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-4 rounded-xl bg-orange-50/60 border border-orange-200">
                        <div className="text-xs font-bold text-orange-950 font-mono">Window 1: 10:00 – 10:05</div>
                        <div className="text-xs text-stone-600 mt-2 space-y-1 font-mono">
                          <div>Events: E1, E2, E3, E4 {w2Events.some(e => e.id === "E_INTERVENE") ? "" : ""}</div>
                          <div>Total Orders: 4</div>
                          <div className="font-bold text-stone-900 text-sm">Revenue: ₹7,600</div>
                        </div>
                      </div>
                      <div className="p-4 rounded-xl bg-orange-50/60 border border-orange-200">
                        <div className="text-xs font-bold text-orange-950 font-mono">Window 2: 10:05 – 10:10</div>
                        <div className="text-xs text-stone-600 mt-2 space-y-1 font-mono">
                          <div>Events: {w2Events.some(e => e.id === "E_INTERVENE") ? "E_INTERVENE (10:07)" : "None (Empty Window)"}</div>
                          <div>Total Orders: {w2Events.some(e => e.id === "E_INTERVENE") ? 1 : 0}</div>
                          <div className="font-bold text-stone-900 text-sm">Revenue: ₹{w2Events.some(e => e.id === "E_INTERVENE") ? "1,200" : "0"}</div>
                        </div>
                      </div>
                      <div className="p-4 rounded-xl bg-orange-50/60 border border-orange-200">
                        <div className="text-xs font-bold text-orange-950 font-mono">Window 3: 10:10 – 10:20</div>
                        <div className="text-xs text-stone-600 mt-2 space-y-1 font-mono">
                          <div>Events: E5, E6</div>
                          <div>Total Orders: 2</div>
                          <div className="font-bold text-stone-900 text-sm">Revenue: ₹6,400</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedWindowType === "sliding" && (
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200">
                          <div className="text-xs font-bold text-purple-950 font-mono">Win A: 10:00 – 10:10</div>
                          <div className="text-xs text-stone-700 mt-2 space-y-1 font-mono">
                            <div>Events: E1, E2, E3, E4 {w2Events.some(e => e.id === "E_INTERVENE") ? "+ E_INTERVENE" : ""}</div>
                            <div className="font-bold text-stone-900">Revenue: ₹{w2Events.some(e => e.id === "E_INTERVENE") ? "8,800" : "7,600"}</div>
                          </div>
                        </div>
                        <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200">
                          <div className="text-xs font-bold text-purple-950 font-mono">Win B: 10:05 – 10:15</div>
                          <div className="text-xs text-stone-700 mt-2 space-y-1 font-mono">
                            <div>Events: {w2Events.some(e => e.id === "E_INTERVENE") ? "E_INTERVENE, E5" : "E5"}</div>
                            <div className="font-bold text-stone-900">Revenue: ₹{w2Events.some(e => e.id === "E_INTERVENE") ? "3,100" : "1,900"}</div>
                          </div>
                        </div>
                        <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200">
                          <div className="text-xs font-bold text-purple-950 font-mono">Win C: 10:10 – 10:20</div>
                          <div className="text-xs text-stone-700 mt-2 space-y-1 font-mono">
                            <div>Events: E5, E6</div>
                            <div className="font-bold text-stone-900">Revenue: ₹6,400</div>
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-purple-900 font-semibold bg-purple-100/60 p-3 rounded-lg border border-purple-200">
                        Notice: Event E5 (10:14:10) is duplicated across both Win B (10:05–10:15) and Win C (10:10–10:20). Sliding windows increase state memory requirements because records belong to multiple concurrent intervals!
                      </div>
                    </div>
                  )}

                  {selectedWindowType === "session" && (
                    <div className="space-y-3">
                      {w2Events.some(e => e.id === "E_INTERVENE") ? (
                        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-emerald-950 font-mono">Merged Single Session: 10:00:05 – 10:26:00</span>
                            <span className="px-2 py-0.5 rounded bg-emerald-200 text-emerald-900 text-[10px] font-bold">SESSIONS MERGED</span>
                          </div>
                          <div className="text-xs text-emerald-900 space-y-1 font-mono">
                            <div>Events: E1, E2, E3, E4, E_INTERVENE, E5, E6 (All 7 events merged)</div>
                            <div>Inactivity gap between E4 (10:02:40) and E_INTERVENE (10:07:00) is 4m 20s (&lt; 10m).</div>
                            <div>Inactivity gap between E_INTERVENE (10:07:00) and E5 (10:14:10) is 7m 10s (&lt; 10m).</div>
                            <div className="font-bold text-stone-900 text-sm mt-2">Combined Session Revenue: ₹15,200</div>
                          </div>
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                            <div className="text-xs font-bold text-stone-900 font-mono">Session 1: 10:00:05 – 10:12:40</div>
                            <div className="text-xs text-stone-600 mt-2 space-y-1 font-mono">
                              <div>Events: E1, E2, E3, E4 (Active browsing)</div>
                              <div>Duration: 2m 35s (+10m inactivity timeout)</div>
                              <div className="font-bold text-stone-900">Revenue: ₹7,600</div>
                            </div>
                          </div>
                          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                            <div className="text-xs font-bold text-stone-900 font-mono">Session 2: 10:14:10 – 10:26:00</div>
                            <div className="text-xs text-stone-600 mt-2 space-y-1 font-mono">
                              <div>Events: E5, E6 (Return visit)</div>
                              <div>Gap from Session 1: 11m 30s (&gt; 10m inactivity gap)</div>
                              <div className="font-bold text-stone-900">Revenue: ₹6,400</div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* WORKBENCH 3: WATERMARKS & ALLOWED LATENESS */}
            {activeWorkbench === "watermark_lateness" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
                      <Activity className="text-orange-500" />
                      <span>Watermark Progression &amp; Late-Data Sieve</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      Event time progresses via <code className="bg-stone-100 px-1 py-0.5 rounded font-mono text-xs">Watermark = max(EventTime) - AllowedDelay</code>. Test allowed lateness and side outputs.
                    </p>
                  </div>
                </div>

                {/* Watermark Calculation Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block mb-1">
                      Max Observed Event Time
                    </span>
                    <div className="text-2xl font-extrabold font-mono text-stone-900">
                      10:{Math.floor(maxEventTimeMin).toString().padStart(2, "0")}:{Math.round((maxEventTimeMin % 1) * 60).toString().padStart(2, "0")}
                    </div>
                    <span className="text-[11px] text-stone-500">Highest timestamp seen</span>
                  </div>

                  <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200">
                    <span className="text-xs font-semibold text-orange-800 uppercase tracking-wider block mb-1">
                      Configured Delay Slack
                    </span>
                    <div className="text-2xl font-extrabold font-mono text-orange-950">
                      {watermarkDelayMinutes} Minutes
                    </div>
                    <span className="text-[11px] text-orange-800">Allowed out-of-order delay</span>
                  </div>

                  <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200">
                    <span className="text-xs font-semibold text-blue-800 uppercase tracking-wider block mb-1">
                      Current Watermark Progress
                    </span>
                    <div className="text-2xl font-extrabold font-mono text-blue-950">
                      10:{Math.floor(currentWatermarkMin).toString().padStart(2, "0")}:{Math.round((currentWatermarkMin % 1) * 60).toString().padStart(2, "0")}
                    </div>
                    <span className="text-[11px] text-blue-800">Finalized boundary</span>
                  </div>
                </div>

                {/* Inject Late Data Controls */}
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-bold text-stone-800">Inject Test Events:</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleInjectLateEvent("mild_late")}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300"
                    >
                      + Inject Late Event (10:00:20 · Accepted by Allowed Lateness)
                    </button>
                    <button
                      onClick={() => handleInjectLateEvent("severely_late")}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-red-100 hover:bg-red-200 text-red-900 border border-red-300"
                    >
                      + Inject Severely Late Event (09:55:00 · Routed to Side Output)
                    </button>
                  </div>
                </div>

                {/* Stream Events Table & Late Sieve Verdict */}
                <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-stone-50 border-b border-stone-200 font-semibold text-stone-800">
                      <tr>
                        <th className="px-4 py-2.5">Event ID</th>
                        <th className="px-4 py-2.5">Event Timestamp</th>
                        <th className="px-4 py-2.5">Arrival Order</th>
                        <th className="px-4 py-2.5">Relative to Watermark</th>
                        <th className="px-4 py-2.5 text-right">Engine Classification</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 font-mono text-xs">
                      {w3StreamEvents.map(evt => {
                        const isBeforeWatermark = evt.timeMin < currentWatermarkMin;
                        const isSeverelyLate = evt.timeMin < (currentWatermarkMin - allowedLatenessMinutes);

                        let badge = <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">ON TIME</span>;
                        if (isSeverelyLate) {
                          badge = <span className="px-2 py-0.5 rounded bg-red-100 text-red-800 font-bold">SIDE OUTPUT / DROPPED</span>;
                        } else if (isBeforeWatermark) {
                          badge = <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold">LATE (ALLOWED LATENESS UPDATE)</span>;
                        }

                        return (
                          <tr key={evt.id}>
                            <td className="px-4 py-2 text-stone-900 font-bold">{evt.id}</td>
                            <td className="px-4 py-2 text-stone-700">{evt.time}</td>
                            <td className="px-4 py-2 text-stone-500">{evt.arrival}</td>
                            <td className="px-4 py-2 text-stone-600">
                              {evt.timeMin < currentWatermarkMin ? "Behind Watermark (Late)" : "Ahead of Watermark"}
                            </td>
                            <td className="px-4 py-2 text-right">{badge}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* WORKBENCH 4: STATEFUL STREAMS & ROCKSDB TTL */}
            {activeWorkbench === "stateful_ttl" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
                      <Database className="text-orange-500" />
                      <span>Stateful Stream Processing &amp; RocksDB State TTL</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      Observe how keyed state (<code className="bg-stone-100 px-1 py-0.5 rounded font-mono text-xs">keyBy(customerId)</code>) tracks customer metrics, and how State TTL evicts inactive keys to prevent unbounded memory growth.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={handleAdvanceClockAndEvictTTL}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-orange-500 hover:bg-orange-600 text-white shadow-sm flex items-center gap-1.5"
                    >
                      <Clock size={13} />
                      <span>Advance Clock (+15m) &amp; Run TTL Eviction</span>
                    </button>
                    <button
                      onClick={handleResetStateStore}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200 flex items-center gap-1"
                    >
                      <RotateCcw size={12} />
                      <span>Reset</span>
                    </button>
                  </div>
                </div>

                {/* State Engine Status */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block mb-1">
                      Engine Logical Clock
                    </span>
                    <div className="text-2xl font-extrabold font-mono text-stone-900">{simulatedEngineClockMin} min</div>
                    <span className="text-[11px] text-stone-500">Internal coordinator timestamp</span>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block mb-1">
                      Configured State TTL
                    </span>
                    <div className="text-2xl font-extrabold font-mono text-orange-600">{ttlWindowMinutes} min</div>
                    <span className="text-[11px] text-stone-500">Inactivity expiration threshold</span>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block mb-1">
                      Backend State Store
                    </span>
                    <div className="text-base font-extrabold font-mono text-stone-900 mt-1">RocksDB (LSM-Tree)</div>
                    <span className="text-[11px] text-emerald-700 font-semibold">Incremental Checkpointing Active</span>
                  </div>
                </div>

                {/* Keyed State Table */}
                <div className="space-y-3">
                  <div className="text-xs font-bold text-stone-800 uppercase tracking-wider font-mono">
                    RocksDB Keyed State Table (Keyed by <code className="text-orange-600">customer_id</code>)
                  </div>
                  <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-stone-50 border-b border-stone-200 font-semibold text-stone-800">
                        <tr>
                          <th className="px-4 py-2.5">Key (Customer ID)</th>
                          <th className="px-4 py-2.5">Transaction Count</th>
                          <th className="px-4 py-2.5">Total Spending</th>
                          <th className="px-4 py-2.5">Last Activity</th>
                          <th className="px-4 py-2.5">TTL Status</th>
                          <th className="px-4 py-2.5 text-right">Send Event</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200 font-mono text-xs">
                        {Object.entries(customerStateStore).map(([custId, data]) => {
                          const isEvicted = data.status === "EVICTED_TTL";
                          return (
                            <tr key={custId} className={isEvicted ? "bg-stone-50 opacity-50" : ""}>
                              <td className="px-4 py-2 text-stone-900 font-bold">{custId}</td>
                              <td className="px-4 py-2 text-stone-700">{data.count} txns</td>
                              <td className="px-4 py-2 text-stone-900 font-semibold">₹{data.total}</td>
                              <td className="px-4 py-2 text-stone-500">{data.lastUpdatedMin} min</td>
                              <td className="px-4 py-2">
                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                  isEvicted ? "bg-red-100 text-red-800" : "bg-emerald-100 text-emerald-800"
                                }`}>
                                  {isEvicted ? "EVICTED BY TTL" : "ACTIVE IN STATE"}
                                </span>
                              </td>
                              <td className="px-4 py-2 text-right">
                                <button
                                  onClick={() => handleCustomerTransaction(custId, 1000)}
                                  className="px-2.5 py-1 rounded bg-stone-100 hover:bg-orange-100 hover:text-orange-800 text-stone-800 text-[11px] font-semibold border border-stone-300"
                                >
                                  + ₹1,000 Txn
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 5: STREAM-STREAM JOIN ENGINE */}
            {activeWorkbench === "stream_joins" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
                      <Merge className="text-orange-500" />
                      <span>Stream-Stream Join &amp; State Buffering Engine</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      Join unbounded <code className="bg-stone-100 px-1 py-0.5 rounded font-mono text-xs">orders</code> and <code className="bg-stone-100 px-1 py-0.5 rounded font-mono text-xs">payments</code> streams within a 30-minute interval window.
                    </p>
                  </div>
                </div>

                {/* Left Stream vs Right Stream */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Orders Stream Buffer */}
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-stone-800 font-mono">Stream A: orders Topic</span>
                      <span className="text-[10px] text-stone-500 font-mono">State Retention: 30m</span>
                    </div>
                    <div className="space-y-1.5 max-h-40 overflow-y-auto [scrollbar-width:thin]">
                      {orderStream.map(ord => (
                        <div key={ord.order_id} className="p-2.5 rounded-lg bg-white border border-stone-200 text-xs font-mono flex items-center justify-between">
                          <div>
                            <span className="font-bold text-stone-900">Order {ord.order_id}</span>
                            <span className="text-stone-500 text-[11px] block">{ord.time} · ₹{ord.amount}</span>
                          </div>
                          <div>
                            {ord.matched ? (
                              <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">JOINED</span>
                            ) : (
                              <button
                                onClick={() => handleSendPaymentForOrder(ord.order_id)}
                                className="px-2 py-1 rounded bg-orange-500 hover:bg-orange-600 text-white text-[11px] font-bold shadow-sm"
                              >
                                Trigger Payment
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Payments Stream Buffer */}
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-stone-800 font-mono">Stream B: payments Topic</span>
                      <span className="text-[10px] text-stone-500 font-mono">Keyed by order_id</span>
                    </div>
                    <div className="space-y-1.5 max-h-40 overflow-y-auto [scrollbar-width:thin]">
                      {paymentStream.map(pay => (
                        <div key={pay.payment_id} className="p-2.5 rounded-lg bg-white border border-stone-200 text-xs font-mono flex items-center justify-between">
                          <div>
                            <span className="font-bold text-purple-900">Payment {pay.payment_id}</span>
                            <span className="text-stone-500 text-[11px] block">For Order: {pay.order_id} · {pay.time}</span>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800 text-[10px] font-bold">RECEIVED</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Joined Stream Output Feed */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-stone-800 uppercase tracking-wider font-mono">
                    Materialized Stream-Stream Join Output Feed
                  </div>
                  <div className="space-y-1.5 max-h-48 overflow-y-auto [scrollbar-width:thin]">
                    {joinedOutputs.map((item, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-300 text-xs font-mono flex items-center justify-between">
                        <div>
                          <span className="font-bold text-emerald-950">Matched Order {item.order_id} with Payment {item.payment_id}</span>
                          <span className="text-stone-600 text-[11px] block">Customer: {item.customer_id} · Amount: ₹{item.amount}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] text-emerald-800 font-semibold block">Join Latency: {item.join_latency}</span>
                          <span className="text-[10px] text-stone-400">{item.payment_time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 6: REAL-TIME DASHBOARD & QUIZ */}
            {activeWorkbench === "dashboard_quiz" && (
              <div className="space-y-8">
                {/* PART A: REAL-TIME ANALYTICS DASHBOARD */}
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-4">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
                        <BarChart3 className="text-orange-500" />
                        <span>Real-Time E-Commerce Analytics Dashboard</span>
                      </h2>
                      <p className="text-xs sm:text-sm text-stone-600 mt-1">
                        Display continuous metrics updated via stream window aggregations. Test Spark output modes.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleSimulateBatchTick}
                        className="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#f97316] text-white hover:bg-orange-600 flex items-center gap-1.5 shadow-sm"
                      >
                        <Zap size={13} />
                        <span>Simulate Micro-Batch (+Tick)</span>
                      </button>
                    </div>
                  </div>

                  {/* Output Mode Switcher */}
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs font-bold text-stone-700">Spark Output Mode:</span>
                    <div className="grid grid-cols-3 gap-2">
                      {["update", "append", "complete"].map(mode => (
                        <button
                          key={mode}
                          onClick={() => setSparkOutputMode(mode)}
                          className={`px-3 py-1 text-xs font-bold font-mono rounded-lg border transition-colors ${
                            sparkOutputMode === mode
                              ? "bg-stone-900 text-white border-stone-900"
                              : "bg-white text-stone-700 border-stone-300 hover:bg-stone-100"
                          }`}
                        >
                          {mode}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Dashboard Metrics Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">Total Orders</span>
                      <div className="text-2xl font-extrabold font-mono text-stone-900 mt-1">{liveMetrics.totalOrders.toLocaleString()}</div>
                      <span className="text-[10px] text-emerald-600 font-semibold">+18% vs yesterday</span>
                    </div>

                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">Live Revenue</span>
                      <div className="text-2xl font-extrabold font-mono text-orange-600 mt-1">₹{(liveMetrics.totalRevenue / 100000).toFixed(1)}L</div>
                      <span className="text-[10px] text-stone-500 font-mono">₹{liveMetrics.totalRevenue.toLocaleString()}</span>
                    </div>

                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">Throughput</span>
                      <div className="text-2xl font-extrabold font-mono text-stone-900 mt-1">{liveMetrics.ordersPerMin} / min</div>
                      <span className="text-[10px] text-stone-500">1-min rolling tumble</span>
                    </div>

                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">Active Users</span>
                      <div className="text-2xl font-extrabold font-mono text-stone-900 mt-1">{liveMetrics.activeCustomers}</div>
                      <span className="text-[10px] text-purple-600 font-semibold">10-min session gap</span>
                    </div>

                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">Consumer Lag</span>
                      <div className="text-2xl font-extrabold font-mono text-emerald-700 mt-1">{liveMetrics.consumerLag} msgs</div>
                      <span className="text-[10px] text-emerald-600 font-semibold">Healthy &lt; 50</span>
                    </div>
                  </div>
                </div>

                {/* PART B: 15-QUESTION COMPREHENSIVE CURRICULUM QUIZ */}
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-4">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
                        <HelpCircle className="text-orange-500" />
                        <span>Module 17 Mastery Examination (15 Questions)</span>
                      </h2>
                      <p className="text-xs sm:text-sm text-stone-600 mt-1">
                        Comprehensive assessment covering event time, watermarks, sliding/session window math, stateful RocksDB TTL, Flink task slots, checkpoint barriers, and Spark output modes.
                      </p>
                    </div>
                    {showScore && (
                      <div className="px-4 py-2 rounded-xl bg-orange-100 border border-orange-300 text-orange-950 font-extrabold text-sm font-mono">
                        Score: {calculatedScore} / {quizQuestions.length} ({Math.round((calculatedScore / quizQuestions.length) * 100)}%)
                      </div>
                    )}
                  </div>

                  <div className="space-y-6">
                    {quizQuestions.map((q, qIdx) => {
                      const selected = userAnswers[q.id];
                      const isAnswered = selected !== undefined;
                      const isCorrect = selected === q.correct;

                      return (
                        <div key={q.id} className="p-4 sm:p-5 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
                          <div className="flex items-start gap-2.5">
                            <span className="w-6 h-6 rounded-full bg-stone-900 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                              {q.id}
                            </span>
                            <span className="text-sm sm:text-base font-semibold text-stone-900 leading-snug">
                              {q.q}
                            </span>
                          </div>

                          <div className="grid grid-cols-1 gap-2 pt-1">
                            {q.options.map((opt, optIdx) => {
                              const isThisSelected = selected === optIdx;
                              let btnClass = "bg-white hover:bg-stone-100 text-stone-800 border-stone-200";

                              if (showScore) {
                                if (optIdx === q.correct) {
                                  btnClass = "bg-emerald-100 text-emerald-950 border-emerald-400 font-semibold";
                                } else if (isThisSelected && !isCorrect) {
                                  btnClass = "bg-red-100 text-red-950 border-red-300";
                                }
                              } else if (isThisSelected) {
                                btnClass = "bg-orange-500 text-white border-orange-600 font-semibold";
                              }

                              return (
                                <button
                                  key={optIdx}
                                  onClick={() => handleSelectOption(q.id, optIdx)}
                                  className={`p-3 rounded-xl border text-xs sm:text-sm text-left transition-all flex items-start gap-2 ${btnClass}`}
                                >
                                  <span className="font-mono text-xs opacity-75 shrink-0 mt-0.5">
                                    {String.fromCharCode(65 + optIdx)}.
                                  </span>
                                  <span>{opt}</span>
                                </button>
                              );
                            })}
                          </div>

                          {showScore && (
                            <div className={`p-3 rounded-lg text-xs leading-relaxed ${
                              isCorrect ? "bg-emerald-50 text-emerald-900 border border-emerald-200" : "bg-red-50 text-red-900 border border-red-200"
                            }`}>
                              <span className="font-bold block mb-0.5">Explanation:</span>
                              {q.expl}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
                    <button
                      onClick={() => setShowScore(prev => !prev)}
                      className="px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-black text-white text-xs sm:text-sm font-bold transition-all shadow-sm"
                    >
                      {showScore ? "Hide Answers & Review" : "Submit Examination & Grade"}
                    </button>
                    <span className="text-xs text-stone-500 font-mono">
                      Answered: {Object.keys(userAnswers).length} / {quizQuestions.length}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Bottom Universal Navigation */}
        <div className="mt-12">
          <ModuleNav />
        </div>
      </div>
    </div>
  );
}
