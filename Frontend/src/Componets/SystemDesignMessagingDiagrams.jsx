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
} from "lucide-react";

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 1: DUAL-WRITE HAZARD VS. TRANSACTIONAL OUTBOX PATTERN
 * Compares the fragile direct dual-write approach against the atomic
 * Transactional Outbox pattern with a dedicated Debezium/CDC relay.
 * ---------------------------------------------------------------------------
 */
export function TransactionalOutboxDiagram() {
  const [mode, setMode] = useState("outbox"); // "dual-write" | "outbox"
  const [step, setStep] = useState(0);

  const dualWriteSteps = [
    {
      title: "Step 1: Save Business Entity in DB",
      desc: "API receives 'CompleteInterview' request. Writes interview status = COMPLETED to PostgreSQL.",
      dbStatus: "Committed (Status: COMPLETED)",
      outboxStatus: "N/A",
      brokerStatus: "Pending",
    },
    {
      title: "Step 2: Network / Broker Outage Occurs",
      desc: "Before the API can publish 'InterviewCompleted' to Kafka, the network drops or broker is unreachable.",
      dbStatus: "Committed (Status: COMPLETED)",
      outboxStatus: "N/A",
      brokerStatus: "FAILED (Connection Refused)",
      hasError: true,
    },
    {
      title: "Step 3: Inconsistent State (Silent Data Drift)",
      desc: "The database says interview is COMPLETED, but downstream Reporting, Analytics, and Notifications never receive the event!",
      dbStatus: "Committed (Status: COMPLETED)",
      outboxStatus: "N/A",
      brokerStatus: "Lost (Ghost State)",
      hasError: true,
    },
  ];

  const outboxSteps = [
    {
      title: "Step 1: Atomic Transaction (Entity + Outbox Record)",
      desc: "Within a single SQL transaction: BEGIN; UPDATE interviews; INSERT INTO outbox_events; COMMIT;",
      dbStatus: "Committed (Status: COMPLETED)",
      outboxStatus: "Event Recorded (Unpublished)",
      brokerStatus: "Not yet dispatched",
    },
    {
      title: "Step 2: Outbox Relay / Debezium CDC Reads Log",
      desc: "A separate background relay or Change Data Capture (CDC) engine tails the database write-ahead log (WAL).",
      dbStatus: "Committed (Status: COMPLETED)",
      outboxStatus: "Captured by CDC",
      brokerStatus: "Publishing to Topic...",
    },
    {
      title: "Step 3: Reliable Broker Delivery & Consumer Fanout",
      desc: "Event is published to Kafka 'interview.completed'. Mark outbox record published. Consumers read idempotently.",
      dbStatus: "Committed (Status: COMPLETED)",
      outboxStatus: "Published (Timestamped)",
      brokerStatus: "Delivered to Consumers (Safe)",
    },
  ];

  const activeSteps = mode === "dual-write" ? dualWriteSteps : outboxSteps;
  const current = activeSteps[step] || activeSteps[0];

  const handleModeChange = (newMode) => {
    setMode(newMode);
    setStep(0);
  };

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
            Architectural Pattern Visualizer
          </span>
          <h4 className="font-extrabold text-stone-900 text-sm">
            Dual-Write Problem vs. Transactional Outbox Pattern
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleModeChange("dual-write")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
              mode === "dual-write"
                ? "bg-red-600 text-white shadow-xs"
                : "border border-stone-200 bg-white text-stone-600 hover:bg-stone-50"
            }`}
          >
            Naive Dual-Write (Hazard)
          </button>
          <button
            type="button"
            onClick={() => handleModeChange("outbox")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
              mode === "outbox"
                ? "bg-emerald-600 text-white shadow-xs"
                : "border border-stone-200 bg-white text-stone-600 hover:bg-stone-50"
            }`}
          >
            Transactional Outbox (Safe)
          </button>
          <button
            type="button"
            onClick={() => setStep(0)}
            className="p-1.5 rounded-lg border border-stone-200 bg-white text-stone-600 hover:bg-stone-50 cursor-pointer"
            title="Reset steps"
          >
            <RotateCcw size={14} />
          </button>
        </div>
      </div>

      {/* Step controls */}
      <div className="mb-4 flex items-center justify-between p-3 rounded-xl border border-stone-200 bg-white">
        <div>
          <span className="text-xs font-bold text-stone-900">{current.title}</span>
          <p className="text-xs text-stone-600 mt-0.5">{current.desc}</p>
        </div>
        <div className="flex items-center gap-1.5 shrink-0 ml-3">
          <button
            type="button"
            onClick={() => setStep((prev) => Math.max(0, prev - 1))}
            disabled={step === 0}
            className="px-2.5 py-1 rounded-lg border border-stone-200 text-xs font-bold disabled:opacity-40 cursor-pointer"
          >
            Prev
          </button>
          <span className="text-xs font-mono font-bold text-stone-500">
            {step + 1}/{activeSteps.length}
          </span>
          <button
            type="button"
            onClick={() => setStep((prev) => Math.min(activeSteps.length - 1, prev + 1))}
            disabled={step === activeSteps.length - 1}
            className="px-2.5 py-1 rounded-lg bg-[#f97316] text-white text-xs font-bold disabled:opacity-40 cursor-pointer hover:bg-[#ea580c]"
          >
            Next
          </button>
        </div>
      </div>

      {/* Architecture System Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Service Database */}
        <div className="p-4 rounded-xl border border-stone-200 bg-white">
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-xs text-stone-900">Application Database</span>
            <Database size={15} className="text-orange-600" />
          </div>
          <span className="text-[11px] text-stone-500 block">Interviews Table:</span>
          <span className="font-mono text-xs font-bold text-stone-800 block mb-2">
            {current.dbStatus}
          </span>
          {mode === "outbox" && (
            <div className="pt-2 border-t border-stone-100">
              <span className="text-[11px] text-stone-500 block">outbox_events Table:</span>
              <span className="font-mono text-xs font-bold text-emerald-700 block">
                {current.outboxStatus}
              </span>
            </div>
          )}
        </div>

        {/* CDC Relay / Worker */}
        <div
          className={`p-4 rounded-xl border transition ${
            mode === "dual-write"
              ? "border-stone-200 bg-stone-50"
              : "border-emerald-300 bg-emerald-50/40"
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-xs text-stone-900">
              {mode === "outbox" ? "Debezium / Outbox Relay" : "Direct App Thread"}
            </span>
            <Workflow size={15} className={mode === "outbox" ? "text-emerald-600" : "text-stone-400"} />
          </div>
          <span className="text-[11px] text-stone-500 block">Publishing Mechanism:</span>
          <p className="text-xs text-stone-700 mt-1 leading-relaxed">
            {mode === "outbox"
              ? "Tails PostgreSQL WAL logs. Independent retry loop with exponential backoff if broker is offline."
              : "Application thread attempts HTTP/TCP call to broker immediately after DB update without transaction."}
          </p>
        </div>

        {/* Message Broker (Kafka / SQS) */}
        <div
          className={`p-4 rounded-xl border transition ${
            current.hasError
              ? "border-red-300 bg-red-50/50"
              : "border-stone-200 bg-white"
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-xs text-stone-900">Message Broker (Kafka)</span>
            <Radio size={15} className={current.hasError ? "text-red-500" : "text-orange-600"} />
          </div>
          <span className="text-[11px] text-stone-500 block">Topic: interview.completed</span>
          <span
            className={`font-mono text-xs font-bold block mt-1 ${
              current.hasError ? "text-red-700" : "text-stone-800"
            }`}
          >
            {current.brokerStatus}
          </span>
          <div className="mt-3 pt-2 border-t border-stone-100 text-[11px] text-stone-500">
            {current.hasError ? (
              <span className="text-red-600 font-semibold flex items-center gap-1">
                <AlertTriangle size={12} /> Downstream workflows stranded!
              </span>
            ) : (
              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                <CheckCircle2 size={12} /> Zero event loss guaranteed
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
 * DIAGRAM 2: KAFKA PARTITIONS & CONSUMER GROUP REBALANCING
 * Visualizes topics divided into ordered partitions, partition keys,
 * and consumer groups dynamically sharing partitions.
 * ---------------------------------------------------------------------------
 */
export function KafkaPartitionsDiagram() {
  const [consumerCount, setConsumerCount] = useState(2); // 1, 2, 4, 6
  const [selectedKey, setSelectedKey] = useState("candidate_901");

  const partitions = [
    { id: 0, events: ["int_101: Started", "int_101: Answered", "int_101: Completed"] },
    { id: 1, events: ["int_204: Started", "int_204: Completed", "int_205: Started"] },
    { id: 2, events: ["int_309: Completed", "int_310: Started", "int_310: Completed"] },
    { id: 3, events: ["int_412: Started", "int_412: Completed", "int_415: Started"] },
  ];

  // Consumer assignment mapping based on consumerCount
  const getConsumerAssignment = (partitionId) => {
    if (consumerCount === 1) return "Consumer C1";
    if (consumerCount === 2) {
      return partitionId < 2 ? "Consumer C1" : "Consumer C2";
    }
    if (consumerCount === 4) {
      return `Consumer C${partitionId + 1}`;
    }
    if (consumerCount === 6) {
      return partitionId < 4 ? `Consumer C${partitionId + 1}` : "None";
    }
    return "Consumer C1";
  };

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
            Partitioning &amp; Parallelism
          </span>
          <h4 className="font-extrabold text-stone-900 text-sm">
            Kafka Partitions &amp; Consumer Group Sizing ($C \leq P$)
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-stone-600">Active Consumers:</span>
          {[1, 2, 4, 6].map((cnt) => (
            <button
              key={cnt}
              type="button"
              onClick={() => setConsumerCount(cnt)}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold font-mono transition cursor-pointer ${
                consumerCount === cnt
                  ? "bg-[#f97316] text-white shadow-xs"
                  : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
              }`}
            >
              {cnt} {cnt === 6 ? "(Idle C5, C6)" : ""}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4 p-3 rounded-xl border border-stone-200 bg-white text-xs text-stone-600 leading-relaxed">
        <strong>Partition Rule:</strong> Topic <code>interview.completed</code> has <strong>4 partitions</strong>.
        In Kafka, a single partition can be consumed by at most one consumer in the same group at any given time.
        {consumerCount === 6 && (
          <span className="text-red-600 font-bold block mt-1">
            <AlertTriangle size={13} className="inline mr-1" />
            Notice: With 6 consumers for 4 partitions, Consumers C5 and C6 remain completely IDLE!
          </span>
        )}
      </div>

      {/* Partitions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
        {partitions.map((p) => {
          const assignedConsumer = getConsumerAssignment(p.id);
          return (
            <div key={p.id} className="p-3.5 rounded-xl border border-stone-200 bg-white">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-orange-700">
                  Partition #{p.id}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-stone-100 text-stone-700">
                  {assignedConsumer}
                </span>
              </div>

              <div className="space-y-1.5 my-2">
                {p.events.map((evt, idx) => (
                  <div
                    key={idx}
                    className="p-1.5 rounded border border-stone-200 bg-[#faf8f4] font-mono text-[10px] text-stone-700 truncate"
                  >
                    Off:{idx} · {evt}
                  </div>
                ))}
              </div>

              <span className="text-[10px] text-stone-400 block mt-2 text-right font-mono">
                Strict FIFO ordered
              </span>
            </div>
          );
        })}
      </div>

      {/* Consumer Group Visualization */}
      <div className="rounded-xl border border-stone-200 bg-white p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-stone-900">
            Consumer Group: <code>reporting-workers-prod</code> ({consumerCount} instances)
          </span>
          <span className="text-[11px] font-mono text-stone-500">
            Max Parallelism Cap: <strong>4 Workers</strong>
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: consumerCount }).map((_, idx) => {
            const isIdle = idx >= 4;
            return (
              <div
                key={idx}
                className={`px-3 py-2 rounded-xl border text-xs font-mono font-bold flex items-center gap-2 ${
                  isIdle
                    ? "border-red-200 bg-red-50 text-red-700"
                    : "border-emerald-200 bg-emerald-50 text-emerald-800"
                }`}
              >
                <span>Consumer C{idx + 1}</span>
                <span className="text-[10px] uppercase font-sans">
                  {isIdle ? "[IDLE - NO PARTITION]" : "[ACTIVE]"}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 3: EVENT-TIME VS. PROCESSING-TIME & WINDOWING WATERMARKS
 * Demonstrates streaming windows (Tumbling vs Sliding) and why event-time
 * with watermarks is necessary when events arrive delayed or out-of-order.
 * ---------------------------------------------------------------------------
 */
export function StreamWindowingDiagram() {
  const [windowType, setWindowType] = useState("tumbling"); // "tumbling" | "sliding"
  const [watermarkDelay, setWatermarkDelay] = useState(2); // in minutes

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
            Stream Processing Windows
          </span>
          <h4 className="font-extrabold text-stone-900 text-sm">
            Event-Time vs. Processing-Time &amp; Watermark Horizons
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setWindowType("tumbling")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
              windowType === "tumbling"
                ? "bg-[#f97316] text-white shadow-xs"
                : "border border-stone-200 bg-white text-stone-600 hover:bg-stone-50"
            }`}
          >
            Tumbling Window (Fixed)
          </button>
          <button
            type="button"
            onClick={() => setWindowType("sliding")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
              windowType === "sliding"
                ? "bg-[#f97316] text-white shadow-xs"
                : "border border-stone-200 bg-white text-stone-600 hover:bg-stone-50"
            }`}
          >
            Sliding Window (Overlapping)
          </button>
        </div>
      </div>

      {/* Conceptual Scenario */}
      <div className="mb-4 p-3 rounded-xl border border-orange-200 bg-orange-50/60 text-xs text-stone-700 leading-relaxed">
        <strong>The Delayed Event Hazard:</strong> A candidate submits interview at <strong>10:04 (Event Time)</strong>,
        but network delay causes the event to reach the analytics consumer at <strong>10:09 (Processing Time)</strong>.
        Using processing time wrongly dumps this completion into the 10:05–10:10 window! Flink uses watermarks
        to wait for late events and place them into the correct 10:00–10:05 window.
      </div>

      {/* Timeline Visualizer */}
      <div className="space-y-3">
        {/* Window Intervals */}
        <div className="p-4 rounded-xl border border-stone-200 bg-white">
          <span className="text-xs font-bold text-stone-900 block mb-2">
            Calculated Stream Windows ({windowType === "tumbling" ? "5-Min Non-Overlapping" : "10-Min Sliding every 5-Min"}):
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono">
            {windowType === "tumbling" ? (
              <>
                <div className="p-3 rounded-lg border border-orange-300 bg-orange-50 text-stone-900">
                  <span className="font-bold text-orange-700 block text-[10px]">WINDOW 1</span>
                  <span>10:00:00 → 10:04:59</span>
                  <span className="text-[10px] text-stone-500 block mt-1">Contains Event 10:04</span>
                </div>
                <div className="p-3 rounded-lg border border-stone-200 bg-stone-50 text-stone-900">
                  <span className="font-bold text-stone-500 block text-[10px]">WINDOW 2</span>
                  <span>10:05:00 → 10:09:59</span>
                  <span className="text-[10px] text-stone-500 block mt-1">Watermark waiting...</span>
                </div>
                <div className="p-3 rounded-lg border border-stone-200 bg-stone-50 text-stone-900">
                  <span className="font-bold text-stone-500 block text-[10px]">WINDOW 3</span>
                  <span>10:10:00 → 10:14:59</span>
                  <span className="text-[10px] text-stone-500 block mt-1">Future window</span>
                </div>
              </>
            ) : (
              <>
                <div className="p-3 rounded-lg border border-orange-300 bg-orange-50 text-stone-900">
                  <span className="font-bold text-orange-700 block text-[10px]">SLIDING 1</span>
                  <span>10:00:00 → 10:09:59</span>
                  <span className="text-[10px] text-stone-500 block mt-1">Full 10-min range</span>
                </div>
                <div className="p-3 rounded-lg border border-orange-300 bg-orange-50 text-stone-900">
                  <span className="font-bold text-orange-700 block text-[10px]">SLIDING 2</span>
                  <span>10:05:00 → 10:14:59</span>
                  <span className="text-[10px] text-stone-500 block mt-1">Overlaps Sliding 1</span>
                </div>
                <div className="p-3 rounded-lg border border-stone-200 bg-stone-50 text-stone-900">
                  <span className="font-bold text-stone-500 block text-[10px]">SLIDING 3</span>
                  <span>10:10:00 → 10:19:59</span>
                  <span className="text-[10px] text-stone-500 block mt-1">Next interval</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Watermark Status */}
        <div className="p-4 rounded-xl border border-stone-200 bg-white flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-orange-600" />
            <div>
              <span className="text-xs font-bold text-stone-900 block">
                Watermark Progress Horizon: <code>currentEventTime - {watermarkDelay}min</code>
              </span>
              <span className="text-[11px] text-stone-500">
                Signals that events older than the watermark timestamp are assumed to have arrived.
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-stone-500">Allowed Lateness:</span>
            <button
              type="button"
              onClick={() => setWatermarkDelay((prev) => Math.max(1, prev - 1))}
              className="px-2 py-1 rounded border border-stone-200 bg-stone-50"
            >
              -1m
            </button>
            <span className="font-bold text-orange-600">{watermarkDelay} min</span>
            <button
              type="button"
              onClick={() => setWatermarkDelay((prev) => prev + 1)}
              className="px-2 py-1 rounded border border-stone-200 bg-stone-50"
            >
              +1m
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * DISPATCHER COMPONENT FOR MODULE 12 DIAGRAMS
 * ---------------------------------------------------------------------------
 */
export function VisualDiagramComponentModule12({ diagramId }) {
  switch (diagramId) {
    case "outbox":
      return <TransactionalOutboxDiagram />;
    case "partitions":
      return <KafkaPartitionsDiagram />;
    case "windows":
      return <StreamWindowingDiagram />;
    default:
      return <TransactionalOutboxDiagram />;
  }
}
