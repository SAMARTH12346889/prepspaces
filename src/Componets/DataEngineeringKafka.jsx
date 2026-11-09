// projectx/src/Componets/DataEngineeringKafka.jsx
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
  ArrowDownRight
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import DataEngineeringKafkaSections from "./DataEngineeringKafkaSections";

export default function DataEngineeringKafka() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  // Mode switcher tab: 'curriculum' (Specification & Blueprints) | 'workbench' (Interactive Workbenches)
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbench, setActiveWorkbench] = useState("cluster_partitions");
  // 'cluster_partitions' | 'consumer_groups' | 'acks_replication' | 'schema_registry' | 'cdc_outbox' | 'lag_dlq_quiz'

  // ==========================================
  // WORKBENCH 1: CLUSTER, TOPIC & PARTITION ROUTER
  // ==========================================
  const [selectedTopic, setSelectedTopic] = useState("orders");
  const [partitionCount, setPartitionCount] = useState(4);
  const [inputCustomerId, setInputCustomerId] = useState("cust-101");
  const [inputAmount, setInputAmount] = useState("1500");
  const [partitionLogs, setPartitionLogs] = useState({
    0: [{ offset: 0, key: "cust-104", amount: 2200, time: "10:00:12" }],
    1: [{ offset: 0, key: "cust-101", amount: 1500, time: "10:00:15" }, { offset: 1, key: "cust-101", amount: 850, time: "10:01:05" }],
    2: [{ offset: 0, key: "cust-102", amount: 3400, time: "10:00:20" }],
    3: [{ offset: 0, key: "cust-103", amount: 1100, time: "10:00:30" }]
  });

  const hashKeyToPartition = (key, totalPartitions) => {
    if (!key || key.trim() === "") return Math.floor(Math.random() * totalPartitions);
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash << 5) - hash + key.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash) % totalPartitions;
  };

  const handlePublishRecord = () => {
    const pIdx = hashKeyToPartition(inputCustomerId, partitionCount);
    const existing = partitionLogs[pIdx] || [];
    const nextOffset = existing.length > 0 ? existing[existing.length - 1].offset + 1 : 0;
    const now = new Date().toTimeString().split(" ")[0];
    const newRecord = {
      offset: nextOffset,
      key: inputCustomerId || "none",
      amount: Number(inputAmount) || 1000,
      time: now
    };
    setPartitionLogs(prev => ({
      ...prev,
      [pIdx]: [...(prev[pIdx] || []), newRecord]
    }));
  };

  const handleResetPartitionLogs = () => {
    setPartitionLogs({
      0: [],
      1: [],
      2: [],
      3: []
    });
  };

  // ==========================================
  // WORKBENCH 2: CONSUMER GROUP & REBALANCING
  // ==========================================
  const [consumerCount, setConsumerCount] = useState(3);
  const [assignmentStrategy, setAssignmentStrategy] = useState("Range"); // 'Range' | 'RoundRobin'
  const [rebalanceTriggered, setRebalanceTriggered] = useState(false);

  // 6 partitions (P0 to P5)
  const totalPartitionsM2 = 6;
  const consumerAssignments = useMemo(() => {
    const map = {};
    for (let c = 1; c <= consumerCount; c++) {
      map[`Consumer-${c}`] = [];
    }

    if (assignmentStrategy === "Range") {
      const partsPerConsumer = Math.floor(totalPartitionsM2 / consumerCount);
      const extra = totalPartitionsM2 % consumerCount;
      let curP = 0;
      for (let c = 1; c <= consumerCount; c++) {
        const take = partsPerConsumer + (c <= extra ? 1 : 0);
        for (let t = 0; t < take; t++) {
          if (curP < totalPartitionsM2) {
            map[`Consumer-${c}`].push(`P${curP}`);
            curP++;
          }
        }
      }
    } else {
      // RoundRobin
      for (let p = 0; p < totalPartitionsM2; p++) {
        const cIdx = (p % consumerCount) + 1;
        map[`Consumer-${cIdx}`].push(`P${p}`);
      }
    }
    return map;
  }, [consumerCount, assignmentStrategy]);

  const handleAdjustConsumers = (delta) => {
    const next = Math.max(1, Math.min(8, consumerCount + delta));
    setConsumerCount(next);
    setRebalanceTriggered(true);
    setTimeout(() => setRebalanceTriggered(false), 2200);
  };

  // ==========================================
  // WORKBENCH 3: PRODUCER ACKS & ISR REPLICATION
  // ==========================================
  const [acksConfig, setAcksConfig] = useState("all"); // '0' | '1' | 'all'
  const [minIsr, setMinIsr] = useState(2);
  const [brokerLeaderDead, setBrokerLeaderDead] = useState(false);
  const [broker2Dead, setBroker2Dead] = useState(false);
  const [broker3Dead, setBroker3Dead] = useState(false);
  const [writeSimulationLog, setWriteSimulationLog] = useState([]);

  const activeIsrCount = useMemo(() => {
    let count = 0;
    if (!brokerLeaderDead) count++;
    if (!broker2Dead) count++;
    if (!broker3Dead) count++;
    return count;
  }, [brokerLeaderDead, broker2Dead, broker3Dead]);

  const handleSimulateWrite = () => {
    const now = new Date().toTimeString().split(" ")[0];
    if (acksConfig === "0") {
      setWriteSimulationLog(prev => [
        {
          id: Date.now(),
          time: now,
          status: brokerLeaderDead ? "LOST" : "SENT_NO_ACK",
          message: brokerLeaderDead 
            ? "acks=0: Producer sent message without waiting. Leader is DOWN! Message dropped silently with ZERO confirmation." 
            : "acks=0: Message fired asynchronously. Producer did NOT wait for broker acknowledgement."
        },
        ...prev.slice(0, 7)
      ]);
      return;
    }

    if (acksConfig === "1") {
      if (brokerLeaderDead) {
        setWriteSimulationLog(prev => [
          {
            id: Date.now(),
            time: now,
            status: "FAILED_LEADER_DOWN",
            message: "acks=1: Partition Leader (Broker 1) is DOWN! Producer request timed out with LeaderNotAvailableException."
          },
          ...prev.slice(0, 7)
        ]);
      } else {
        const messageText = (broker2Dead && broker3Dead)
          ? "acks=1: Leader acknowledged local write to disk. Follower replicas are offline; if Leader crashes now, data will be lost!"
          : "acks=1: Leader (Broker 1) wrote to local commit log and returned ACK immediately (before replicas synced).";
        setWriteSimulationLog(prev => [
          {
            id: Date.now(),
            time: now,
            status: "ACK_LEADER_ONLY",
            message: messageText
          },
          ...prev.slice(0, 7)
        ]);
      }
      return;
    }

    // acks === 'all'
    if (brokerLeaderDead) {
      setWriteSimulationLog(prev => [
        {
          id: Date.now(),
          time: now,
          status: "FAILED_NO_LEADER",
          message: "acks=all: No active Leader replica available to accept client writes."
        },
        ...prev.slice(0, 7)
      ]);
    } else if (activeIsrCount < minIsr) {
      setWriteSimulationLog(prev => [
        {
          id: Date.now(),
          time: now,
          status: "NOT_ENOUGH_REPLICAS",
          message: `acks=all: Write REJECTED with NotEnoughReplicasException! Current ISR count (${activeIsrCount}) is below min.insync.replicas (${minIsr}). Durability protected!`
        },
        ...prev.slice(0, 7)
      ]);
    } else {
      setWriteSimulationLog(prev => [
        {
          id: Date.now(),
          time: now,
          status: "DURABLE_COMMITTED",
          message: `acks=all: Write committed durably! Replicated across ${activeIsrCount} in-sync replicas meeting min.insync.replicas (${minIsr}).`
        },
        ...prev.slice(0, 7)
      ]);
    }
  };

  // ==========================================
  // WORKBENCH 4: SCHEMA REGISTRY EVOLUTION
  // ==========================================
  const [compatibilityMode, setCompatibilityMode] = useState("BACKWARD");
  const [selectedEvolutionCase, setSelectedEvolutionCase] = useState("add_optional");

  const evolutionDetails = useMemo(() => {
    switch (selectedEvolutionCase) {
      case "add_optional":
        return {
          title: "Add Optional Field with Default Value null",
          v1: '{\n  "type": "record",\n  "name": "Order",\n  "fields": [\n    {"name": "order_id", "type": "long"},\n    {"name": "amount", "type": "double"}\n  ]\n}',
          v2: '{\n  "type": "record",\n  "name": "Order",\n  "fields": [\n    {"name": "order_id", "type": "long"},\n    {"name": "amount", "type": "double"},\n    {"name": "discount", "type": ["null", "double"], "default": null}\n  ]\n}',
          compatible: true,
          verdict: "COMPATIBLE (Valid Evolution)",
          explanation: "Under BACKWARD compatibility, new consumers reading historical events lacking 'discount' fill in the default value (null) gracefully."
        };
      case "add_required_no_default":
        return {
          title: "Add Required Field Without Default Value",
          v1: '{\n  "type": "record",\n  "name": "Order",\n  "fields": [\n    {"name": "order_id", "type": "long"},\n    {"name": "amount", "type": "double"}\n  ]\n}',
          v2: '{\n  "type": "record",\n  "name": "Order",\n  "fields": [\n    {"name": "order_id", "type": "long"},\n    {"name": "amount", "type": "double"},\n    {"name": "tracking_number", "type": "string"}\n  ]\n}',
          compatible: compatibilityMode === "NONE",
          verdict: compatibilityMode === "NONE" ? "COMPATIBLE (Enforcement Disabled)" : "INCOMPATIBLE (Breaking Schema Violation)",
          explanation: "Under BACKWARD mode, a new consumer cannot read legacy events that lack 'tracking_number' because no fallback default value was defined."
        };
      case "delete_required_field":
        return {
          title: "Delete Required Field (amount)",
          v1: '{\n  "type": "record",\n  "name": "Order",\n  "fields": [\n    {"name": "order_id", "type": "long"},\n    {"name": "amount", "type": "double"}\n  ]\n}',
          v2: '{\n  "type": "record",\n  "name": "Order",\n  "fields": [\n    {"name": "order_id", "type": "long"}\n  ]\n}',
          compatible: compatibilityMode === "FORWARD" || compatibilityMode === "NONE",
          verdict: (compatibilityMode === "FORWARD" || compatibilityMode === "NONE") ? "COMPATIBLE" : "INCOMPATIBLE (Breaking Schema Violation)",
          explanation: "Under BACKWARD compatibility, deleting a required field is illegal if consumers expect that field. In FORWARD mode, old consumers reading new data without amount will fail unless it had a default."
        };
      case "change_data_type":
        return {
          title: "Change Data Type from Long to String",
          v1: '{\n  "type": "record",\n  "name": "Order",\n  "fields": [\n    {"name": "order_id", "type": "long"}\n  ]\n}',
          v2: '{\n  "type": "record",\n  "name": "Order",\n  "fields": [\n    {"name": "order_id", "type": "string"}\n  ]\n}',
          compatible: compatibilityMode === "NONE",
          verdict: compatibilityMode === "NONE" ? "ALLOWED (Enforcement Disabled)" : "INCOMPATIBLE (Type Coercion Failure)",
          explanation: "Changing underlying primitive types (long -> string) breaks Avro binary decoders unless governed by an explicit Union transition."
        };
      default:
        return {};
    }
  }, [selectedEvolutionCase, compatibilityMode]);

  // ==========================================
  // WORKBENCH 5: DEBEZIUM CDC & TRANSACTIONAL OUTBOX
  // ==========================================
  const [dbRows, setDbRows] = useState([
    { id: 101, name: "Rahul", city: "Pune", balance: 5400 },
    { id: 102, name: "Priya", city: "Mumbai", balance: 8200 }
  ]);
  const [outboxEvents, setOutboxEvents] = useState([]);
  const [cdcStream, setCdcStream] = useState([]);
  const [useOutboxPattern, setUseOutboxPattern] = useState(true);

  const handleUpdateCustomer = (targetId, newCity) => {
    const existing = dbRows.find(r => r.id === targetId);
    if (!existing) return;
    const oldCity = existing.city;

    // Mutate DB
    setDbRows(prev => prev.map(r => r.id === targetId ? { ...r, city: newCity } : r));

    const cdcEvent = {
      source: "postgresql-wal",
      table: "customers",
      op: "u",
      ts_ms: Date.now(),
      before: { id: targetId, city: oldCity },
      after: { id: targetId, city: newCity }
    };

    if (useOutboxPattern) {
      const outboxEntry = {
        outbox_id: `outbox-${Date.now()}`,
        aggregate_id: targetId,
        event_type: "CustomerCityUpdated",
        payload: { customer_id: targetId, city: newCity, prev_city: oldCity },
        status: "COMMITTED_IN_DB_TX"
      };
      setOutboxEvents(prev => [outboxEntry, ...prev.slice(0, 5)]);
    }

    setCdcStream(prev => [cdcEvent, ...prev.slice(0, 6)]);
  };

  // ==========================================
  // WORKBENCH 6: LAG, DLQ SIEVE & QUIZ
  // ==========================================
  const [logEndOffset, setLogEndOffset] = useState(1450);
  const [committedOffset, setCommittedOffset] = useState(1412);
  const [dlqMessages, setDlqMessages] = useState([
    {
      id: "DLQ-991",
      topic: "orders",
      partition: 1,
      offset: 1405,
      error_type: "DATA_VALIDATION_ERROR",
      error_message: "Field amount 'UNKNOWN' cannot be parsed as float",
      time: "10:14:22"
    }
  ]);
  const [dlqEnabled, setDlqEnabled] = useState(true);
  const [poisonMessageActive, setPoisonMessageActive] = useState(false);

  const calculatedLag = useMemo(() => {
    return Math.max(0, logEndOffset - committedOffset);
  }, [logEndOffset, committedOffset]);

  const handleSimulateProducerBurst = () => {
    setLogEndOffset(prev => prev + 45);
  };

  const handleSimulateConsumerCatchup = () => {
    if (poisonMessageActive && !dlqEnabled) {
      alert("Consumer STALLED on Poison Pill! Processing cannot advance without Dead-Letter Queue isolation.");
      return;
    }
    setCommittedOffset(prev => Math.min(logEndOffset, prev + 35));
  };

  const handleInjectPoisonMessage = () => {
    setPoisonMessageActive(true);
    setLogEndOffset(prev => prev + 1);
    const poisonOffset = logEndOffset;
    
    if (dlqEnabled) {
      setTimeout(() => {
        setDlqMessages(prev => [
          {
            id: `DLQ-${Date.now()}`,
            topic: "orders",
            partition: 0,
            offset: poisonOffset,
            error_type: "POISON_PILL_CORRUPT_PAYLOAD",
            error_message: "order_id 'INVALID_XYZ' failed schema validation",
            time: new Date().toTimeString().split(" ")[0]
          },
          ...prev.slice(0, 6)
        ]);
        setPoisonMessageActive(false);
        setCommittedOffset(prev => prev + 1);
      }, 700);
    }
  };

  // ==========================================
  // 15-QUESTION COMPREHENSIVE QUIZ
  // ==========================================
  const quizQuestions = useMemo(() => [
    {
      id: 1,
      q: "What is the fundamental architectural difference between an event and a command in event-driven systems?",
      options: [
        "An event records an immutable fact that has already occurred (e.g., OrderCreated), whereas a command requests an action to be performed (e.g., CreateOrder)",
        "Events can only contain JSON, while commands can only contain binary Avro payloads",
        "Commands are stored in Kafka topics, whereas events can only be sent over HTTP REST APIs",
        "Events require synchronous acknowledgements from all consumers before returning to the sender"
      ],
      correct: 0,
      expl: "Events represent immutable facts about occurrences in the past (e.g., OrderCreated, PaymentCompleted). Commands request an intended future operation (e.g., CreateOrder, ChargePayment) and may be rejected by the receiver."
    },
    {
      id: 2,
      q: "In Apache Kafka, what is the precise relationship between a Topic and a Partition?",
      options: [
        "A topic is a logical event category divided into one or more ordered, immutable, append-only commit logs called partitions",
        "A partition is a logical category that contains multiple physical topics on each broker",
        "Topics provide ordering across all consumers, while partitions are temporary memory caches",
        "Partitions only exist when replication factor is set to 1"
      ],
      correct: 0,
      expl: "A Kafka topic is a logical stream of events. Under the hood, each topic is divided into one or more partitions—ordered, append-only logs that allow horizontal scaling, storage distribution, and parallel consumption across cluster brokers."
    },
    {
      id: 3,
      q: "Starting in Apache Kafka 4.0, what major architectural change was finalized regarding cluster metadata management?",
      options: [
        "ZooKeeper mode was completely removed in favor of KRaft (Kafka Raft Metadata mode) using a built-in controller quorum",
        "Kafka brokers now require etcd for cluster metadata coordination",
        "All topic partitions are required to reside on a single controller broker",
        "Replication factors can no longer exceed 2 without external Consul coordination"
      ],
      correct: 0,
      expl: "Kafka 4.x operates exclusively in KRaft mode, entirely deprecating and removing external Apache ZooKeeper dependencies. Metadata consensus and cluster coordination are managed directly via internal KRaft controller quorums."
    },
    {
      id: 4,
      q: "How does Kafka guarantee message ordering across distributed consumers?",
      options: [
        "Kafka guarantees strict message ordering only within a single partition, not globally across the entire topic",
        "Kafka provides a global clock that guarantees total FIFO ordering across all partitions in a topic",
        "Message ordering is maintained by the consumer group coordinator re-sorting timestamps in memory",
        "Kafka only guarantees ordering if all producers send records without partition keys"
      ],
      correct: 0,
      expl: "Kafka guarantees strict FIFO ordering only within an individual partition. To preserve ordering for specific entities (e.g., all actions for a specific customer or order), producers must supply a consistent partition key so records hash to the same partition."
    },
    {
      id: 5,
      q: "Suppose a Kafka topic has 6 partitions and a consumer group has 8 active consumer instances subscribed to it. What happens to the extra 2 consumers?",
      options: [
        "The 2 extra consumer instances remain idle with zero assigned partitions as standby workers",
        "The extra consumers share partitions concurrently with active consumers, interleaving record reads",
        "The Kafka broker rejects the extra consumers and throws a TooManyConsumersException",
        "The topic automatically expands to 8 partitions to match consumer scale"
      ],
      correct: 0,
      expl: "Within a single consumer group, each partition can be assigned to at most one active consumer at any given time. If consumers (8) exceed partitions (6), the extra 2 consumers remain idle until an active consumer crashes or leaves."
    },
    {
      id: 6,
      q: "When writing a production Kafka consumer processing critical financial transactions, how should offset commits be managed?",
      options: [
        "Disable auto-commit (enable.auto.commit=False) and commit offsets synchronously or asynchronously only after the record is durably processed and persisted",
        "Enable auto-commit every 100ms to minimize consumer memory pressure",
        "Commit offsets immediately upon receiving the record from poll(), before starting any transformation or database write",
        "Avoid committing offsets altogether and rely strictly on Kafka log retention deletion"
      ],
      correct: 0,
      expl: "Auto-commit can commit offsets before business logic or database writes complete, risking unrecoverable data loss during crashes. Disabling auto-commit and committing only after successful durable processing achieves at-least-once delivery."
    },
    {
      id: 7,
      q: "To prevent data loss when a Kafka broker partition leader experiences a sudden hardware crash, what producer and topic configuration is required?",
      options: [
        "Producer set to acks=all (or -1) combined with broker min.insync.replicas >= 2 and replication factor >= 3",
        "Producer set to acks=1 with min.insync.replicas=1",
        "Producer set to acks=0 to maximize throughput and bypass disk sync overhead",
        "Producer set to retries=0 and linger.ms=0"
      ],
      correct: 0,
      expl: "With acks=all, the leader only acknowledges a write once all in-sync replicas (at least min.insync.replicas) have durably recorded it to their logs. If the leader crashes, another synchronized replica in the ISR can become the new leader without losing acknowledged writes."
    },
    {
      id: 8,
      q: "What guarantee does Kafka's Idempotent Producer (enable.idempotence=true) provide to an end-to-end data pipeline?",
      options: [
        "It prevents duplicate records in the Kafka partition log caused by producer network retry resends, but does not make downstream database mutations exactly once",
        "It guarantees end-to-end exactly-once writes across all external PostgreSQL databases, Snowflake warehouses, and third-party REST APIs",
        "It ensures that consumers can never receive the same message twice under any crash condition",
        "It automatically resolves Schema Registry Avro type incompatibilities during message transmission"
      ],
      correct: 0,
      expl: "The idempotent producer assigns a Producer ID (PID) and sequence numbers to every batch. If a network timeout occurs and the producer retries, the broker discards duplicate writes to the log. Downstream consumer sinks still require idempotent operations (e.g. UPSERT) to avoid duplicates upon consumer recovery."
    },
    {
      id: 9,
      q: "In Confluent Schema Registry with BACKWARD compatibility mode, which schema evolution action is valid without breaking consumers?",
      options: [
        "Adding a new optional field with a default value null to the record schema",
        "Deleting a required field that existing consumers actively parse",
        "Changing an integer field type to a string field without a conversion union",
        "Renaming an existing field without preserving the previous name as an alias"
      ],
      correct: 0,
      expl: "BACKWARD compatibility requires that consumers using the new schema can read data written with older schemas. Adding a new field with a default value allows new consumers to fill the default when reading legacy records without error."
    },
    {
      id: 10,
      q: "What is the primary role of Kafka Connect in modern data engineering architectures?",
      options: [
        "To provide a scalable, fault-tolerant framework for streaming data between Kafka and external databases, key-value stores, and cloud storage systems without custom code",
        "To compile SQL queries into MapReduce jobs across Hadoop clusters",
        "To monitor network packet drops between Kafka brokers and DNS servers",
        "To enforce HTTP basic authentication on producer client socket connections"
      ],
      correct: 0,
      expl: "Kafka Connect is a standardized, distributed integration runtime. Reusable Source Connectors pull data from external systems (databases, message queues) into Kafka, while Sink Connectors stream Kafka topics into storage destinations (S3, Snowflake, Elasticsearch)."
    },
    {
      id: 11,
      q: "Why is Log-based Change Data Capture (CDC) with Debezium superior to timestamp-based Query CDC (e.g., SELECT * WHERE updated_at > :t)?",
      options: [
        "Log-based CDC reads the database write-ahead log (WAL), capturing hard deletes, multiple rapid updates, and transactions without polling overhead or table locks",
        "Timestamp queries require running Kafka brokers inside the PostgreSQL database kernel",
        "Log-based CDC eliminates the need for primary keys on relational tables",
        "Timestamp polling is faster because it does not require disk storage access"
      ],
      correct: 0,
      expl: "Query CDC misses hard DELETEs (since deleted rows cannot be queried), misses intermediate updates if multiple occur between polling cycles, and imposes repetitive query load. Log-based CDC reads database transaction logs directly, capturing all inserts, updates, deletes, and transaction boundaries."
    },
    {
      id: 12,
      q: "What is the purpose of a Dead-Letter Queue (DLQ) in an event-driven consumer application?",
      options: [
        "To isolate non-retriable poison messages (e.g., malformed payloads) so the consumer can advance offsets without stalling partition processing",
        "To permanently store all successfully acknowledged events for audit compliance",
        "To act as an intermediate cache that accelerates consumer poll() latency",
        "To automatically restart broker pods when heap memory consumption exceeds 90%"
      ],
      correct: 0,
      expl: "A 'poison pill' is a malformed or invalid record that causes the consumer deserializer or business logic to throw an unrecoverable exception. Without a DLQ, the consumer crashes or retries indefinitely, halting partition progress. A DLQ routes bad events to a separate topic with diagnostic metadata."
    },
    {
      id: 13,
      q: "How can a data engineering team replay 30 days of historical Kafka events to rebuild a downstream analytical data warehouse mart?",
      options: [
        "Spin up a new consumer group with a unique group.id and auto.offset.reset=earliest, or reset the existing group's offsets to the 30-day timestamp",
        "Delete the topic and restore it from cold tape backup onto broker disk",
        "Execute a TRUNCATE command on Kafka topic partitions using kafka-topics.sh",
        "Producers must re-query the source database and republish all 30 days of events"
      ],
      correct: 0,
      expl: "Because Kafka retains immutable records according to topic retention policy (e.g. retention.ms=30 days), consumers can replay history simply by reading with a new group.id starting at offset 0/earliest, or by issuing an offset reset command to a specific offset or datetime."
    },
    {
      id: 14,
      q: "What critical distributed systems problem does the Transactional Outbox Pattern solve when publishing events from a microservice to Kafka?",
      options: [
        "The dual-write problem: ensuring that database updates and event publishing succeed or fail together atomically",
        "The split-brain problem in ZooKeeper cluster controller elections",
        "Network latency variations caused by TCP slow start",
        "Automatic schema conversion between Avro and CSV formats"
      ],
      correct: 0,
      expl: "If a service updates a database and then publishes to Kafka across the network, one operation can succeed while the other fails (dual-write problem). The Transactional Outbox pattern writes the event into an outbox table within the same local database transaction; a CDC process (Debezium) then reliably tails the table and publishes to Kafka."
    },
    {
      id: 15,
      q: "What is the formula for calculating Consumer Lag, and why is an increasing consumer lag a critical alert indicator?",
      options: [
        "Lag = LogEndOffset - CommittedOffset; increasing lag indicates consumers are processing slower than the ingestion rate or have stalled completely",
        "Lag = IngestionRate / ReplicationFactor; increasing lag indicates broker disk fragmentation",
        "Lag = acks + min.insync.replicas; increasing lag indicates network partition between controller nodes",
        "Lag = Number of Partitions - Number of Consumers; increasing lag means too many consumers are idle"
      ],
      correct: 0,
      expl: "Consumer lag is defined as the difference between the latest offset written to the partition log (LogEndOffset) and the consumer group's last acknowledged position (CommittedOffset). Growing lag indicates that downstream processing is falling behind, increasing end-to-end data latency."
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
            <span className="text-xs font-bold text-stone-700 tracking-wide uppercase font-mono">Module 16 · Real-Time Systems</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
        <ModuleNav />

        {/* Hero Header */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 mt-6 shadow-sm">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
              Module 16
            </span>
            <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold">
              Apache Kafka &amp; Event-Driven Architecture
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold flex items-center gap-1">
              <CheckCircle size={12} />
              Kafka 4.0 KRaft Ready
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-3">
            Event-Driven Architecture &amp; Apache Kafka
          </h1>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-4xl">
            Master production-scale distributed event streaming: KRaft metadata quorums, topic partitions, producer acknowledgements (<code className="text-xs font-mono bg-stone-100 px-1 py-0.5 rounded">acks=0, 1, all</code>), consumer groups and partition rebalancing, offset commits, per-partition ordering, ISR replication, Confluent Schema Registry &amp; Avro compatibility, Kafka Connect CDC with Debezium, Dead-Letter Queues (DLQ), and the Transactional Outbox pattern.
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
              <span>Specification &amp; Blueprints (36 Sections)</span>
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
                  Quick Jump · 36 Core Curriculum Sections
                </span>
                <span className="text-xs text-stone-500 font-mono">100% Textbook Depth</span>
              </div>
              <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto p-1 [scrollbar-width:thin]">
                {[
                  { num: 0, label: "Roadmap" },
                  { num: 1, label: "1. EDA Intro" },
                  { num: 2, label: "2. Event Comms" },
                  { num: 3, label: "3. Messaging" },
                  { num: 4, label: "4. Queues vs Kafka" },
                  { num: 5, label: "5. Kafka Intro" },
                  { num: 6, label: "6. KRaft Clusters" },
                  { num: 7, label: "7. Partitions" },
                  { num: 8, label: "8. Producers/Consumers" },
                  { num: 9, label: "9. Consumer Groups" },
                  { num: 10, label: "10. Offsets" },
                  { num: 11, label: "11. Message Ordering" },
                  { num: 12, label: "12. Replication & ISR" },
                  { num: 13, label: "13. Retention Policies" },
                  { num: 14, label: "14. Producer ACKs" },
                  { num: 15, label: "15. Delivery Semantics" },
                  { num: 16, label: "16. Schema Registry" },
                  { num: 17, label: "17. Avro vs JSON" },
                  { num: 18, label: "18. Kafka Connect" },
                  { num: 19, label: "19. Debezium CDC" },
                  { num: 20, label: "20. DLQ Pattern" },
                  { num: 21, label: "21. Message Replay" },
                  { num: 22, label: "22. Kafka Security" },
                  { num: 23, label: "23. Ingestion Arch" },
                  { num: 24, label: "24. Local Lab" },
                  { num: 25, label: "25. Log Internals" },
                  { num: 26, label: "26. Transactions" },
                  { num: 27, label: "27. Monitoring" },
                  { num: 28, label: "28. Platform Design" },
                  { num: 29, label: "29. Design Decisions" },
                  { num: 30, label: "30. Outbox & Saga" },
                  { num: 31, label: "31. Capstone Project" },
                  { num: 32, label: "32. Common Mistakes" },
                  { num: 33, label: "33. 40 Interview Q&A" },
                  { num: 34, label: "34. Resources" },
                  { num: 35, label: "35. Final Revision" },
                  { num: 36, label: "36. Roadmap Ahead" }
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
            <DataEngineeringKafkaSections />
          </div>
        )}

        {/* WORKBENCHES TAB */}
        {activeTab === "workbench" && (
          <div className="mt-8 space-y-6">
            {/* Workbench Selector Tabs */}
            <div className="bg-white rounded-2xl border border-[#e7e3da] p-3 shadow-sm flex flex-wrap gap-2">
              {[
                { id: "cluster_partitions", label: "1. Cluster & Partitions", icon: Split },
                { id: "consumer_groups", label: "2. Consumer Group Rebalance", icon: Boxes },
                { id: "acks_replication", label: "3. acks & ISR Durability", icon: ShieldCheck },
                { id: "schema_registry", label: "4. Schema Registry Linter", icon: FileCode },
                { id: "cdc_outbox", label: "5. Debezium CDC & Outbox", icon: Database },
                { id: "lag_dlq_quiz", label: "6. Consumer Lag, DLQ & Quiz", icon: Activity }
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

            {/* WORKBENCH 1: CLUSTER & PARTITIONS */}
            {activeWorkbench === "cluster_partitions" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
                      <Split className="text-orange-500" />
                      <span>Cluster Topology, Topic &amp; Partition Router</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      Simulate a 3-broker KRaft cluster. Enter partition keys (e.g. <code className="bg-stone-100 px-1 py-0.5 rounded font-mono text-xs">customer_id</code>) to verify hash routing and per-partition FIFO ordering.
                    </p>
                  </div>
                  <button
                    onClick={handleResetPartitionLogs}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200 flex items-center gap-1.5"
                  >
                    <RotateCcw size={13} />
                    <span>Clear Partition Logs</span>
                  </button>
                </div>

                {/* Cluster Broker Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-stone-700 font-mono flex items-center gap-1.5">
                        <Server size={14} className="text-blue-600" />
                        Broker 1 (ID: 1)
                      </span>
                      <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[10px] font-bold">
                        KRaft Controller
                      </span>
                    </div>
                    <div className="text-xs text-stone-600 space-y-1">
                      <div>Partitions: <span className="font-semibold text-stone-900">P0 (Leader), P3 (Follower)</span></div>
                      <div>Endpoint: <code className="font-mono text-[11px]">localhost:9092</code></div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-stone-700 font-mono flex items-center gap-1.5">
                        <Server size={14} className="text-emerald-600" />
                        Broker 2 (ID: 2)
                      </span>
                      <span className="px-2 py-0.5 rounded bg-stone-200 text-stone-700 text-[10px] font-bold">
                        Broker Node
                      </span>
                    </div>
                    <div className="text-xs text-stone-600 space-y-1">
                      <div>Partitions: <span className="font-semibold text-stone-900">P1 (Leader), P0 (Follower)</span></div>
                      <div>Endpoint: <code className="font-mono text-[11px]">localhost:9093</code></div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-stone-700 font-mono flex items-center gap-1.5">
                        <Server size={14} className="text-purple-600" />
                        Broker 3 (ID: 3)
                      </span>
                      <span className="px-2 py-0.5 rounded bg-stone-200 text-stone-700 text-[10px] font-bold">
                        Broker Node
                      </span>
                    </div>
                    <div className="text-xs text-stone-600 space-y-1">
                      <div>Partitions: <span className="font-semibold text-stone-900">P2 (Leader), P1 (Follower)</span></div>
                      <div>Endpoint: <code className="font-mono text-[11px]">localhost:9094</code></div>
                    </div>
                  </div>
                </div>

                {/* Publish Event Interactive Form */}
                <div className="p-5 rounded-2xl bg-orange-50/60 border border-orange-200/80 space-y-4">
                  <div className="text-xs font-bold text-orange-950 uppercase tracking-wider font-mono flex items-center gap-1.5">
                    <Zap size={14} className="text-orange-600" />
                    Kafka Producer Write Simulator
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">Topic</label>
                      <input
                        type="text"
                        value={selectedTopic}
                        onChange={e => setSelectedTopic(e.target.value)}
                        className="w-full text-xs font-mono p-2 rounded-lg border border-stone-300 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">Partition Key (e.g. cust-id)</label>
                      <input
                        type="text"
                        value={inputCustomerId}
                        onChange={e => setInputCustomerId(e.target.value)}
                        className="w-full text-xs font-mono p-2 rounded-lg border border-stone-300 bg-white"
                        placeholder="e.g. cust-101"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">Order Amount (₹)</label>
                      <input
                        type="number"
                        value={inputAmount}
                        onChange={e => setInputAmount(e.target.value)}
                        className="w-full text-xs font-mono p-2 rounded-lg border border-stone-300 bg-white"
                      />
                    </div>
                    <div className="flex items-end">
                      <button
                        onClick={handlePublishRecord}
                        className="w-full py-2 px-3 text-xs font-bold rounded-lg bg-[#f97316] text-white hover:bg-orange-600 flex items-center justify-center gap-1.5 shadow-sm"
                      >
                        <Send size={13} />
                        <span>Publish Record</span>
                      </button>
                    </div>
                  </div>
                  <div className="text-[11px] text-stone-600 font-mono">
                    Target Partition: <span className="font-bold text-orange-700">Partition {hashKeyToPartition(inputCustomerId, partitionCount)}</span> (computed via <code className="bg-white px-1 py-0.5 rounded border">murmur2(key) % {partitionCount}</code>)
                  </div>
                </div>

                {/* Partition Append-Only Commit Logs */}
                <div className="space-y-3">
                  <div className="text-xs font-bold text-stone-800 uppercase tracking-wider font-mono">
                    Append-Only Partition Commit Logs ({partitionCount} Partitions)
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {Array.from({ length: partitionCount }).map((_, pIdx) => {
                      const records = partitionLogs[pIdx] || [];
                      return (
                        <div key={pIdx} className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between pb-2 border-b border-stone-200 mb-2">
                              <span className="text-xs font-bold text-stone-800 font-mono">Partition {pIdx}</span>
                              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-stone-200 text-stone-700">
                                {records.length} records
                              </span>
                            </div>
                            <div className="space-y-1.5 max-h-48 overflow-y-auto [scrollbar-width:thin]">
                              {records.length === 0 ? (
                                <div className="text-[11px] text-stone-400 italic py-4 text-center">Log is empty</div>
                              ) : (
                                records.map((rec, rIdx) => (
                                  <div key={rIdx} className="p-2 rounded-lg bg-white border border-stone-200 text-[11px] font-mono space-y-0.5">
                                    <div className="flex items-center justify-between text-orange-600 font-bold">
                                      <span>Offset {rec.offset}</span>
                                      <span className="text-stone-400 text-[10px]">{rec.time}</span>
                                    </div>
                                    <div className="text-stone-800">Key: <span className="font-semibold">{rec.key}</span></div>
                                    <div className="text-stone-600">Amount: ₹{rec.amount}</div>
                                  </div>
                                ))
                              )}
                            </div>
                          </div>
                          <div className="mt-3 pt-2 border-t border-stone-200 text-[10px] text-stone-500 font-mono">
                            Leader: Broker {(pIdx % 3) + 1}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 2: CONSUMER GROUP REBALANCING */}
            {activeWorkbench === "consumer_groups" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
                      <Boxes className="text-orange-500" />
                      <span>Consumer Group &amp; Dynamic Partition Rebalancing</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      Observe partition distribution across consumer instances. Notice that when consumers exceed partitions, surplus consumers remain idle.
                    </p>
                  </div>
                  {rebalanceTriggered && (
                    <div className="px-3 py-1.5 rounded-lg bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold flex items-center gap-1.5 animate-bounce">
                      <RefreshCw size={13} className="animate-spin" />
                      <span>Rebalance in Progress...</span>
                    </div>
                  )}
                </div>

                {/* Controls */}
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-stone-700">Active Consumers:</span>
                    <button
                      onClick={() => handleAdjustConsumers(-1)}
                      disabled={consumerCount <= 1}
                      className="w-8 h-8 rounded-lg bg-white border border-stone-300 text-stone-700 font-bold hover:bg-stone-100 disabled:opacity-40"
                    >
                      -
                    </button>
                    <span className="text-base font-bold font-mono text-stone-900 w-6 text-center">{consumerCount}</span>
                    <button
                      onClick={() => handleAdjustConsumers(1)}
                      disabled={consumerCount >= 8}
                      className="w-8 h-8 rounded-lg bg-white border border-stone-300 text-stone-700 font-bold hover:bg-stone-100 disabled:opacity-40"
                    >
                      +
                    </button>
                    <span className="text-xs text-stone-500 font-mono">Topic Partitions: 6 (P0..P5)</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-stone-700">Strategy:</span>
                    {["Range", "RoundRobin"].map(strat => (
                      <button
                        key={strat}
                        onClick={() => {
                          setAssignmentStrategy(strat);
                          setRebalanceTriggered(true);
                          setTimeout(() => setRebalanceTriggered(false), 1500);
                        }}
                        className={`px-3 py-1 text-xs font-semibold rounded-lg border transition-colors ${
                          assignmentStrategy === strat
                            ? "bg-stone-900 text-white border-stone-900"
                            : "bg-white text-stone-700 border-stone-300 hover:bg-stone-100"
                        }`}
                      >
                        {strat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Consumer Nodes Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {Array.from({ length: consumerCount }).map((_, idx) => {
                    const cName = `Consumer-${idx + 1}`;
                    const assigned = consumerAssignments[cName] || [];
                    const isIdle = assigned.length === 0;
                    return (
                      <div
                        key={cName}
                        className={`p-4 rounded-xl border transition-all ${
                          isIdle
                            ? "bg-stone-50 border-stone-300 border-dashed opacity-75"
                            : "bg-white border-stone-200 shadow-sm"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold font-mono text-stone-900 flex items-center gap-1.5">
                            <Radio size={14} className={isIdle ? "text-stone-400" : "text-emerald-600"} />
                            {cName}
                          </span>
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                              isIdle ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800"
                            }`}
                          >
                            {isIdle ? "Idle (Standby)" : "Active Worker"}
                          </span>
                        </div>
                        <div className="mt-3">
                          <span className="text-[11px] text-stone-500 font-semibold block mb-1">
                            Assigned Partitions ({assigned.length}):
                          </span>
                          {assigned.length > 0 ? (
                            <div className="flex flex-wrap gap-1">
                              {assigned.map(p => (
                                <span
                                  key={p}
                                  className="px-2 py-0.5 rounded bg-orange-100 text-orange-900 font-mono text-xs font-bold border border-orange-200"
                                >
                                  {p}
                                </span>
                              ))}
                            </div>
                          ) : (
                            <div className="text-[11px] text-amber-700 font-medium">
                              No partitions assigned. Idle until active consumer leaves.
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Key Insight Callout */}
                <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-xs text-orange-950 flex items-start gap-2.5">
                  <Flame size={16} className="text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Golden Rule of Kafka Consumer Scaling:</span> Maximum parallel consumption within a single consumer group is bounded by the partition count:
                    <div className="font-mono font-bold text-orange-900 mt-1">
                      Max Active Consumers ≤ Partition Count (6 Partitions = Max 6 Active Workers)
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 3: PRODUCER ACKS & REPLICATION */}
            {activeWorkbench === "acks_replication" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
                      <ShieldCheck className="text-orange-500" />
                      <span>Producer acks &amp; In-Sync Replica (ISR) Durability</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      Simulate network drops and broker failures under different <code className="bg-stone-100 px-1 py-0.5 rounded font-mono text-xs">acks</code> settings (<code className="font-mono text-xs">0</code>, <code className="font-mono text-xs">1</code>, <code className="font-mono text-xs">all</code>) and <code className="bg-stone-100 px-1 py-0.5 rounded font-mono text-xs">min.insync.replicas</code>.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setBrokerLeaderDead(false);
                      setBroker2Dead(false);
                      setBroker3Dead(false);
                      setWriteSimulationLog([]);
                    }}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200 flex items-center gap-1.5"
                  >
                    <RotateCcw size={13} />
                    <span>Restore All Brokers</span>
                  </button>
                </div>

                {/* Configuration Options */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <label className="block text-xs font-bold text-stone-700 mb-2">
                      Producer Acknowledgement (acks):
                    </label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {["0", "1", "all"].map(val => (
                        <button
                          key={val}
                          onClick={() => setAcksConfig(val)}
                          className={`py-1.5 px-2 text-xs font-mono font-bold rounded-lg border transition-colors ${
                            acksConfig === val
                              ? "bg-orange-500 text-white border-orange-600"
                              : "bg-white text-stone-700 border-stone-300 hover:bg-stone-100"
                          }`}
                        >
                          acks={val}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <label className="block text-xs font-bold text-stone-700 mb-2">
                      min.insync.replicas:
                    </label>
                    <div className="grid grid-cols-2 gap-1.5">
                      {[1, 2].map(val => (
                        <button
                          key={val}
                          onClick={() => setMinIsr(val)}
                          className={`py-1.5 px-2 text-xs font-mono font-bold rounded-lg border transition-colors ${
                            minIsr === val
                              ? "bg-stone-900 text-white border-stone-900"
                              : "bg-white text-stone-700 border-stone-300 hover:bg-stone-100"
                          }`}
                        >
                          min.isr={val}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex flex-col justify-between">
                    <span className="text-xs font-bold text-stone-700 block mb-1">Send Simulation:</span>
                    <button
                      onClick={handleSimulateWrite}
                      className="w-full py-2 px-3 text-xs font-bold rounded-lg bg-[#f97316] text-white hover:bg-orange-600 flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <Play size={13} />
                      <span>Send Producer Write</span>
                    </button>
                  </div>
                </div>

                {/* Broker Replicas State (ISR) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Leader Replica */}
                  <div className={`p-4 rounded-xl border transition-all ${
                    brokerLeaderDead ? "bg-red-50/70 border-red-300 opacity-80" : "bg-white border-stone-200 shadow-sm"
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold font-mono text-stone-900 flex items-center gap-1.5">
                        <Server size={14} className={brokerLeaderDead ? "text-red-500" : "text-blue-600"} />
                        Broker 1 (Partition 0 Leader)
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        brokerLeaderDead ? "bg-red-100 text-red-800" : "bg-blue-100 text-blue-800"
                      }`}>
                        {brokerLeaderDead ? "OFFLINE / CRASHED" : "LEADER IN-SYNC"}
                      </span>
                    </div>
                    <button
                      onClick={() => setBrokerLeaderDead(prev => !prev)}
                      className={`w-full mt-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors ${
                        brokerLeaderDead
                          ? "bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100"
                          : "bg-red-50 text-red-700 border-red-300 hover:bg-red-100"
                      }`}
                    >
                      {brokerLeaderDead ? "Restart Leader" : "Simulate Crash (Kill Leader)"}
                    </button>
                  </div>

                  {/* Follower 1 */}
                  <div className={`p-4 rounded-xl border transition-all ${
                    broker2Dead ? "bg-red-50/70 border-red-300 opacity-80" : "bg-white border-stone-200 shadow-sm"
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold font-mono text-stone-900 flex items-center gap-1.5">
                        <Server size={14} className={broker2Dead ? "text-red-500" : "text-emerald-600"} />
                        Broker 2 (Follower Replica)
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        broker2Dead ? "bg-red-100 text-red-800" : "bg-emerald-100 text-emerald-800"
                      }`}>
                        {broker2Dead ? "OFFLINE" : "ISR MEMBER"}
                      </span>
                    </div>
                    <button
                      onClick={() => setBroker2Dead(prev => !prev)}
                      className={`w-full mt-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors ${
                        broker2Dead
                          ? "bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100"
                          : "bg-red-50 text-red-700 border-red-300 hover:bg-red-100"
                      }`}
                    >
                      {broker2Dead ? "Restart Follower 1" : "Simulate Crash (Kill Follower 1)"}
                    </button>
                  </div>

                  {/* Follower 2 */}
                  <div className={`p-4 rounded-xl border transition-all ${
                    broker3Dead ? "bg-red-50/70 border-red-300 opacity-80" : "bg-white border-stone-200 shadow-sm"
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold font-mono text-stone-900 flex items-center gap-1.5">
                        <Server size={14} className={broker3Dead ? "text-red-500" : "text-purple-600"} />
                        Broker 3 (Follower Replica)
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        broker3Dead ? "bg-red-100 text-red-800" : "bg-emerald-100 text-emerald-800"
                      }`}>
                        {broker3Dead ? "OFFLINE" : "ISR MEMBER"}
                      </span>
                    </div>
                    <button
                      onClick={() => setBroker3Dead(prev => !prev)}
                      className={`w-full mt-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors ${
                        broker3Dead
                          ? "bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100"
                          : "bg-red-50 text-red-700 border-red-300 hover:bg-red-100"
                      }`}
                    >
                      {broker3Dead ? "Restart Follower 2" : "Simulate Crash (Kill Follower 2)"}
                    </button>
                  </div>
                </div>

                {/* Write Simulation Execution Feed */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-stone-800 uppercase tracking-wider font-mono">
                    Write Log &amp; Durability Execution Feed
                  </div>
                  <div className="space-y-1.5 max-h-52 overflow-y-auto [scrollbar-width:thin]">
                    {writeSimulationLog.length === 0 ? (
                      <div className="text-xs text-stone-400 italic py-3 text-center border rounded-xl border-dashed">
                        Click "Send Producer Write" above to test durability under different broker health scenarios.
                      </div>
                    ) : (
                      writeSimulationLog.map(log => (
                        <div
                          key={log.id}
                          className={`p-3 rounded-xl border text-xs font-mono ${
                            log.status === "DURABLE_COMMITTED"
                              ? "bg-emerald-50/80 border-emerald-300 text-emerald-950"
                              : log.status.startsWith("FAILED") || log.status === "LOST" || log.status === "NOT_ENOUGH_REPLICAS"
                              ? "bg-red-50/80 border-red-300 text-red-950"
                              : "bg-amber-50/80 border-amber-300 text-amber-950"
                          }`}
                        >
                          <div className="flex items-center justify-between font-bold mb-1">
                            <span>Status: {log.status}</span>
                            <span className="text-[10px] opacity-75">{log.time}</span>
                          </div>
                          <div>{log.message}</div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 4: SCHEMA REGISTRY LINTER */}
            {activeWorkbench === "schema_registry" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
                      <FileCode className="text-orange-500" />
                      <span>Schema Registry &amp; Avro Compatibility Linter</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      Simulate schema evolution rules: test <code className="bg-stone-100 px-1 py-0.5 rounded font-mono text-xs">BACKWARD</code>, <code className="bg-stone-100 px-1 py-0.5 rounded font-mono text-xs">FORWARD</code>, and <code className="bg-stone-100 px-1 py-0.5 rounded font-mono text-xs">FULL</code> compatibility to avoid production consumer crashes.
                    </p>
                  </div>
                </div>

                {/* Compatibility Selectors */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <label className="block text-xs font-bold text-stone-700 mb-2">
                      Registered Compatibility Mode:
                    </label>
                    <div className="grid grid-cols-4 gap-1.5">
                      {["BACKWARD", "FORWARD", "FULL", "NONE"].map(mode => (
                        <button
                          key={mode}
                          onClick={() => setCompatibilityMode(mode)}
                          className={`py-1.5 px-2 text-xs font-mono font-bold rounded-lg border transition-colors ${
                            compatibilityMode === mode
                              ? "bg-stone-900 text-white border-stone-900"
                              : "bg-white text-stone-700 border-stone-300 hover:bg-stone-100"
                          }`}
                        >
                          {mode}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <label className="block text-xs font-bold text-stone-700 mb-2">
                      Schema Evolution Scenario:
                    </label>
                    <select
                      value={selectedEvolutionCase}
                      onChange={e => setSelectedEvolutionCase(e.target.value)}
                      className="w-full text-xs font-semibold p-2 rounded-lg border border-stone-300 bg-white"
                    >
                      <option value="add_optional">Scenario A: Add Optional Field with Default Value</option>
                      <option value="add_required_no_default">Scenario B: Add Required Field Without Default Value</option>
                      <option value="delete_required_field">Scenario C: Delete Required Field (amount)</option>
                      <option value="change_data_type">Scenario D: Alter Field Type (long to string)</option>
                    </select>
                  </div>
                </div>

                {/* Schema Diff Comparison */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <div className="text-xs font-bold text-stone-700 font-mono flex items-center justify-between">
                      <span>Registered Schema (Version 1)</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-stone-100 text-stone-600 font-mono">Current Active</span>
                    </div>
                    <pre className="p-3.5 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800">
                      <code>{evolutionDetails.v1}</code>
                    </pre>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-xs font-bold text-stone-700 font-mono flex items-center justify-between">
                      <span>Proposed Schema (Version 2)</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-orange-100 text-orange-800 font-mono">Pending Registration</span>
                    </div>
                    <pre className="p-3.5 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800">
                      <code>{evolutionDetails.v2}</code>
                    </pre>
                  </div>
                </div>

                {/* Linter Verdict Badge */}
                <div className={`p-4 rounded-xl border flex items-start gap-3 ${
                  evolutionDetails.compatible
                    ? "bg-emerald-50/80 border-emerald-300 text-emerald-950"
                    : "bg-red-50/80 border-red-300 text-red-950"
                }`}>
                  {evolutionDetails.compatible ? (
                    <CheckCircle2 size={20} className="text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertTriangle size={20} className="text-red-600 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <div className="text-sm font-bold">{evolutionDetails.verdict}</div>
                    <div className="text-xs leading-relaxed mt-1">{evolutionDetails.explanation}</div>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 5: DEBEZIUM CDC & OUTBOX */}
            {activeWorkbench === "cdc_outbox" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
                      <Database className="text-orange-500" />
                      <span>Debezium Change Data Capture (CDC) &amp; Transactional Outbox</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      Simulate WAL replication from PostgreSQL to Kafka. Compare direct dual-writes against the Transactional Outbox pattern.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-stone-600">Pattern:</span>
                    <button
                      onClick={() => setUseOutboxPattern(prev => !prev)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${
                        useOutboxPattern
                          ? "bg-emerald-600 text-white border-emerald-700"
                          : "bg-stone-100 text-stone-700 border-stone-300"
                      }`}
                    >
                      {useOutboxPattern ? "Transactional Outbox (Safe)" : "Direct Dual-Write (Risky)"}
                    </button>
                  </div>
                </div>

                {/* Source Database Table */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-bold text-stone-800 uppercase tracking-wider font-mono">
                      Source PostgreSQL Table: <code className="text-orange-600">customers</code>
                    </div>
                    <span className="text-xs text-stone-500 font-mono">Write-Ahead Log (WAL) Active</span>
                  </div>
                  <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-stone-50 border-b border-stone-200 font-semibold text-stone-800">
                        <tr>
                          <th className="px-4 py-2.5">customer_id</th>
                          <th className="px-4 py-2.5">name</th>
                          <th className="px-4 py-2.5">city</th>
                          <th className="px-4 py-2.5">balance</th>
                          <th className="px-4 py-2.5 text-right">Mutate Row</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200 font-mono text-xs">
                        {dbRows.map(row => (
                          <tr key={row.id}>
                            <td className="px-4 py-2 text-stone-900 font-bold">{row.id}</td>
                            <td className="px-4 py-2 text-stone-700">{row.name}</td>
                            <td className="px-4 py-2 text-orange-600 font-bold">{row.city}</td>
                            <td className="px-4 py-2 text-stone-700">₹{row.balance}</td>
                            <td className="px-4 py-2 text-right">
                              <div className="inline-flex gap-1">
                                <button
                                  onClick={() => handleUpdateCustomer(row.id, row.city === "Pune" ? "Nashik" : row.city === "Nashik" ? "Bengaluru" : "Pune")}
                                  className="px-2.5 py-1 rounded bg-stone-100 hover:bg-orange-100 hover:text-orange-800 text-stone-800 text-[11px] font-semibold border border-stone-300"
                                >
                                  Update City
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Transactional Outbox Table (If Enabled) */}
                {useOutboxPattern && (
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-stone-800 uppercase tracking-wider font-mono">
                        Atomic Database Table: <code className="text-stone-900">outbox_events</code>
                      </span>
                      <span className="text-[11px] text-emerald-700 font-semibold">Committed in same DB Transaction</span>
                    </div>
                    <div className="space-y-1.5 max-h-36 overflow-y-auto [scrollbar-width:thin]">
                      {outboxEvents.length === 0 ? (
                        <div className="text-xs text-stone-400 italic py-2 text-center">No recent outbox commits</div>
                      ) : (
                        outboxEvents.map((evt, idx) => (
                          <div key={idx} className="p-2 rounded-lg bg-white border border-stone-200 text-[11px] font-mono flex items-center justify-between">
                            <span className="text-stone-800 font-semibold">{evt.event_type} (ID: {evt.aggregate_id})</span>
                            <span className="text-emerald-700 font-bold">{evt.status}</span>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}

                {/* Debezium CDC Output Stream */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-stone-800 uppercase tracking-wider font-mono">
                    Debezium CDC Topic: <code className="text-orange-600">postgres.public.customers</code>
                  </div>
                  <div className="space-y-2 max-h-52 overflow-y-auto [scrollbar-width:thin]">
                    {cdcStream.length === 0 ? (
                      <div className="text-xs text-stone-400 italic py-3 text-center border rounded-xl border-dashed">
                        Click "Update City" on any customer row to trigger live WAL CDC extraction.
                      </div>
                    ) : (
                      cdcStream.map((evt, idx) => (
                        <pre key={idx} className="p-3 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-[11px] leading-relaxed border border-neutral-800">
                          <code>{JSON.stringify(evt, null, 2)}</code>
                        </pre>
                      ))
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 6: CONSUMER LAG, DLQ SIEVE & 15-Q QUIZ */}
            {activeWorkbench === "lag_dlq_quiz" && (
              <div className="space-y-8">
                {/* PART A: CONSUMER LAG & DLQ SIEVE */}
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-4">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
                        <Activity className="text-orange-500" />
                        <span>Consumer Lag Gauge &amp; Dead-Letter Queue (DLQ) Sieve</span>
                      </h2>
                      <p className="text-xs sm:text-sm text-stone-600 mt-1">
                        Monitor live consumer lag: <code className="font-mono text-xs bg-stone-100 px-1 py-0.5 rounded">Lag = LogEndOffset - CommittedOffset</code>. Test poison message isolation.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-stone-600">DLQ Sieve:</span>
                      <button
                        onClick={() => setDlqEnabled(prev => !prev)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold border transition-colors ${
                          dlqEnabled
                            ? "bg-emerald-600 text-white border-emerald-700"
                            : "bg-red-50 text-red-700 border-red-300"
                        }`}
                      >
                        {dlqEnabled ? "DLQ Enabled (Isolates Poison)" : "DLQ Disabled (Crashes Consumer)"}
                      </button>
                    </div>
                  </div>

                  {/* Metrics Bar */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block mb-1">
                        Log End Offset (LEO)
                      </span>
                      <div className="text-2xl font-extrabold font-mono text-stone-900">{logEndOffset}</div>
                      <button
                        onClick={handleSimulateProducerBurst}
                        className="mt-2 text-xs text-orange-600 hover:text-orange-700 font-semibold flex items-center gap-1"
                      >
                        <span>+ Burst Ingestion (+45)</span>
                      </button>
                    </div>

                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block mb-1">
                        Committed Offset
                      </span>
                      <div className="text-2xl font-extrabold font-mono text-stone-900">{committedOffset}</div>
                      <button
                        onClick={handleSimulateConsumerCatchup}
                        className="mt-2 text-xs text-emerald-600 hover:text-emerald-700 font-semibold flex items-center gap-1"
                      >
                        <span>+ Poll &amp; Commit (+35)</span>
                      </button>
                    </div>

                    <div className={`p-4 rounded-xl border ${
                      calculatedLag > 80 ? "bg-red-50 border-red-300" : calculatedLag > 30 ? "bg-amber-50 border-amber-300" : "bg-emerald-50 border-emerald-300"
                    }`}>
                      <span className="text-xs font-semibold text-stone-600 uppercase tracking-wider block mb-1">
                        Current Consumer Lag
                      </span>
                      <div className={`text-2xl font-extrabold font-mono ${
                        calculatedLag > 80 ? "text-red-700" : calculatedLag > 30 ? "text-amber-700" : "text-emerald-700"
                      }`}>
                        {calculatedLag} records
                      </div>
                      <span className="text-[11px] font-semibold text-stone-500">
                        {calculatedLag > 80 ? "CRITICAL LAG ALERT" : calculatedLag > 30 ? "Elevated Processing Delay" : "Healthy Pipeline"}
                      </span>
                    </div>
                  </div>

                  {/* Poison Pill Trigger */}
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-3">
                    <div className="text-xs text-stone-700">
                      <span className="font-bold">Test Resiliency:</span> Inject a malformed "poison" message (<code className="font-mono text-xs">{"{ order_id: 'INVALID' }"}</code>) into the topic partition.
                    </div>
                    <button
                      onClick={handleInjectPoisonMessage}
                      className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm"
                    >
                      <AlertOctagon size={14} />
                      <span>Inject Poison Pill Record</span>
                    </button>
                  </div>

                  {/* Dead-Letter Queue (DLQ) Topic Inspector */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-bold text-stone-800 uppercase tracking-wider font-mono">
                        Isolated Poison Messages Topic: <code className="text-red-600">orders.DLQ</code>
                      </div>
                      <span className="text-xs text-stone-500 font-mono">{dlqMessages.length} quarantined events</span>
                    </div>
                    <div className="space-y-1.5 max-h-48 overflow-y-auto [scrollbar-width:thin]">
                      {dlqMessages.map(msg => (
                        <div key={msg.id} className="p-3 rounded-xl bg-white border border-stone-200 text-xs font-mono space-y-1">
                          <div className="flex items-center justify-between text-red-600 font-bold">
                            <span>{msg.id} · Error: {msg.error_type}</span>
                            <span className="text-stone-400 text-[10px]">{msg.time}</span>
                          </div>
                          <div className="text-stone-700">Topic: {msg.topic} [P{msg.partition}] · Offset: {msg.offset}</div>
                          <div className="text-stone-500 text-[11px]">{msg.error_message}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* PART B: 15-QUESTION COMPREHENSIVE CURRICULUM QUIZ */}
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-4">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
                        <HelpCircle className="text-orange-500" />
                        <span>Module 16 Mastery Examination (15 Questions)</span>
                      </h2>
                      <p className="text-xs sm:text-sm text-stone-600 mt-1">
                        Comprehensive assessment covering KRaft, partitioning math, consumer group rebalancing, ISR replication, Debezium CDC, and the Transactional Outbox pattern.
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
