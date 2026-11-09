// projectx/src/Componets/DataEngineeringFormats.jsx
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Database,
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
  Workflow,
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
  Code2
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import DataEngineeringFormatsSections from "./DataEngineeringFormatsSections";

export default function DataEngineeringFormats() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  // Mode switcher tab: 'curriculum' (Specification & Blueprints) | 'workbench' (Interactive Workbenches)
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbench, setActiveWorkbench] = useState("formats_comparator"); // 'formats_comparator' | 'columnar_storage' | 'schema_registry' | 'api_pagination' | 'webhook_idempotency' | 'contracts_quiz'

  // =========================================================================
  // WORKBENCH 1: Interactive Data Format & Serialization Comparator
  // =========================================================================
  const [selectedFormat, setSelectedFormat] = useState("json_min"); // 'json_pretty' | 'json_min' | 'jsonl' | 'csv' | 'avro' | 'protobuf' | 'msgpack'
  const sampleCustomer = {
    customer_id: 101,
    name: "Rahul Sharma",
    email: "rahul@example.com",
    city: "Pune",
    age: 23,
    is_active: true,
    orders: [1001, 1002, 1003],
    revenue: 65000.50
  };

  const formatRepresentations = useMemo(() => {
    const jsonPretty = JSON.stringify(sampleCustomer, null, 2);
    const jsonMin = JSON.stringify(sampleCustomer);
    const jsonl = JSON.stringify(sampleCustomer) + "\n" + JSON.stringify({ customer_id: 102, name: "Priya Patel", email: "priya@example.com", city: "Mumbai", age: 25, is_active: true, orders: [1004], revenue: 4200.00 });
    const csv = "customer_id,name,email,city,age,is_active,revenue\n101,\"Rahul Sharma\",rahul@example.com,Pune,23,true,65000.50";
    const avroHex = "4f 62 6a 01 04 16 61 76 72 6f 2e 73 63 68 65 6d 61 ca 01 7b 22 74 79 70 65 22 3a 22 72 65 63 6f 72 64 22 2c 22 6e 61 6d 65 22 3a 22 43 75 73 74 6f 6d 65 72 22 7d 00 ca 01 cb 01 18 52 61 68 75 6c 20 53 68 61 72 6d 61 2e 00";
    const protobufHex = "08 65 12 0c 52 61 68 75 6c 20 53 68 61 72 6d 61 1a 11 72 61 68 75 6c 40 65 78 61 6d 70 6c 65 2e 63 6f 6d 22 04 50 75 6e 65 28 17 30 01 3d 00 00 fe 46";
    const msgpackHex = "88 ab 63 75 73 74 6f 6d 65 72 5f 69 64 65 a4 6e 61 6d 65 ac 52 61 68 75 6c 20 53 68 61 72 6d 61 a5 65 6d 61 69 6c b1 72 61 68 75 6c 40 65 78 61 6d 70 6c 65 2e 63 6f 6d a4 63 69 74 79 a4 50 75 6e 65 a3 61 67 65 17";

    return {
      json_pretty: { name: "JSON (Formatted)", text: jsonPretty, bytes: jsonPretty.length, type: "Text (Hierarchical)", schema: "Optional External" },
      json_min: { name: "JSON (Minified)", text: jsonMin, bytes: jsonMin.length, type: "Text (Compact)", schema: "Optional External" },
      jsonl: { name: "JSON Lines (NDJSON)", text: jsonl, bytes: jsonl.length, type: "Text (Record Streaming)", schema: "Optional External" },
      csv: { name: "CSV (Comma-Separated)", text: csv, bytes: csv.length, type: "Text (Row-Oriented)", schema: "External" },
      avro: { name: "Apache Avro (Binary)", text: `[Avro Binary Representation - Hex Dump]\n${avroHex}\n\nSchema: {"type":"record","name":"Customer","fields":[{"name":"customer_id","type":"long"},{"name":"name","type":"string"},{"name":"email","type":["null","string"]},{"name":"city","type":"string"},{"name":"age","type":"int"},{"name":"revenue","type":"double"}]}`, bytes: 72, type: "Binary (Schema-governed)", schema: "Mandatory Avro Schema" },
      protobuf: { name: "Protocol Buffers (v3)", text: `[Protobuf Wire Format - Hex Dump]\n${protobufHex}\n\nDefinition:\nmessage Customer {\n  int64 customer_id = 1;\n  string name = 2;\n  string email = 3;\n  string city = 4;\n  int32 age = 5;\n  double revenue = 6;\n}`, bytes: 51, type: "Binary (Field Tags)", schema: ".proto Definition" },
      msgpack: { name: "MessagePack", text: `[MessagePack Binary Stream - Hex Dump]\n${msgpackHex}`, bytes: 84, type: "Binary (Type Prefixed)", schema: "Self-Describing Binary" },
    };
  }, []);

  // =========================================================================
  // WORKBENCH 2: Row vs Columnar (Parquet/ORC) Storage & Compression
  // =========================================================================
  const [selectedStorageLayout, setSelectedStorageLayout] = useState("columnar"); // 'row' | 'columnar'
  const [selectedCompression, setSelectedCompression] = useState("zstd"); // 'none' | 'snappy' | 'gzip' | 'zstd' | 'lz4'
  const [analyticalQueryType, setAnalyticalQueryType] = useState("avg_revenue"); // 'avg_revenue' | 'full_row'

  const storageMetrics = useMemo(() => {
    const rawTotalKb = 840; // 1,000 records × 10 columns
    const singleColumnKb = 42; // only the revenue column (4 bytes × 1,000 + headers)

    let compressionRatio = 1.0;
    if (selectedCompression === "snappy") compressionRatio = 2.4;
    else if (selectedCompression === "gzip") compressionRatio = 4.2;
    else if (selectedCompression === "zstd") compressionRatio = 4.8;
    else if (selectedCompression === "lz4") compressionRatio = 2.1;

    let scannedKb = selectedStorageLayout === "row" ? rawTotalKb : (analyticalQueryType === "avg_revenue" ? singleColumnKb : rawTotalKb);
    let diskFootprintKb = (rawTotalKb / compressionRatio).toFixed(1);
    let queryIoKb = (scannedKb / (selectedStorageLayout === "columnar" ? compressionRatio : 1.0)).toFixed(1);
    let spaceSaved = (((rawTotalKb - (rawTotalKb / compressionRatio)) / rawTotalKb) * 100).toFixed(1);

    return {
      rawTotalKb,
      compressionRatio,
      diskFootprintKb,
      queryIoKb,
      spaceSaved,
      ioReduction: (((rawTotalKb - parseFloat(queryIoKb)) / rawTotalKb) * 100).toFixed(1)
    };
  }, [selectedStorageLayout, selectedCompression, analyticalQueryType]);

  // =========================================================================
  // WORKBENCH 3: Avro & Schema Registry Evolution Simulator
  // =========================================================================
  const [selectedSchemaVersion, setSelectedSchemaVersion] = useState("v2"); // 'v1' | 'v2' | 'v3_breaking'
  const [compatibilityMode, setCompatibilityMode] = useState("BACKWARD"); // 'BACKWARD' | 'FORWARD' | 'FULL' | 'NONE'

  const schemaVersions = {
    v1: {
      version: 1,
      title: "Schema v1 (Initial Baseline)",
      schema: `{
  "type": "record",
  "name": "CustomerEvent",
  "namespace": "com.prepspaces.events",
  "fields": [
    { "name": "customer_id", "type": "long" },
    { "name": "name", "type": "string" },
    { "name": "email", "type": "string" }
  ]
}`,
      notes: "Baseline schema published by the Customer Service."
    },
    v2: {
      version: 2,
      title: "Schema v2 (Backward Compatible: Add Optional Field with Default)",
      schema: `{
  "type": "record",
  "name": "CustomerEvent",
  "namespace": "com.prepspaces.events",
  "fields": [
    { "name": "customer_id", "type": "long" },
    { "name": "name", "type": "string" },
    { "name": "email", "type": "string" },
    { "name": "preferred_language", "type": ["null", "string"], "default": null }
  ]
}`,
      notes: "Added preferred_language as an optional union with null default. Fully backward-compatible."
    },
    v3_breaking: {
      version: 3,
      title: "Schema v3 (BREAKING: Add Required Field WITHOUT Default)",
      schema: `{
  "type": "record",
  "name": "CustomerEvent",
  "namespace": "com.prepspaces.events",
  "fields": [
    { "name": "customer_id", "type": "long" },
    { "name": "name", "type": "string" },
    { "name": "email", "type": "string" },
    { "name": "national_id", "type": "string" }
  ]
}`,
      notes: "CRITICAL: Adding required field 'national_id' with NO default breaks backward compatibility!"
    }
  };

  const registryResult = useMemo(() => {
    if (selectedSchemaVersion === "v1") {
      return { allowed: true, status: "REGISTERED", reason: "Initial schema registered as Subject customer-value v1." };
    }
    if (selectedSchemaVersion === "v2") {
      return { allowed: true, status: "REGISTERED", reason: "Schema v2 accepted under BACKWARD, FORWARD, and FULL compatibility modes." };
    }
    // v3 breaking
    if (compatibilityMode === "NONE") {
      return { allowed: true, status: "REGISTERED (NO CHECKS)", reason: "Schema v3 registered because compatibility checking is disabled (DANGEROUS)." };
    }
    return {
      allowed: false,
      status: "REJECTED BY REGISTRY (HTTP 409 CONFLICT)",
      reason: `Schema v3 violates ${compatibilityMode} compatibility: Field 'national_id' is mandatory without a default value. Old messages cannot be decoded by new consumers!`
    };
  }, [selectedSchemaVersion, compatibilityMode]);

  // =========================================================================
  // WORKBENCH 4: REST API Pagination & Rate Limit Throttling Simulator
  // =========================================================================
  const [paginationMode, setPaginationMode] = useState("cursor"); // 'offset' | 'cursor'
  const [apiRequestsCount, setApiRequestsCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [rateLimitTokens, setRateLimitTokens] = useState(5);
  const [isThrottled, setIsThrottled] = useState(false);
  const [apiLogs, setApiLogs] = useState([
    "REST API client connected to https://api.prepspaces.com/v1/orders",
    "Rate Limit policy: 5 requests / window. Token Bucket initialized."
  ]);

  const handleFetchPage = () => {
    if (rateLimitTokens <= 0) {
      setIsThrottled(true);
      setApiLogs(prev => [
        "[HTTP 429 TOO MANY REQUESTS] Rate limit exceeded! Retry-After: 3 seconds. Backing off with jitter...",
        ...prev.slice(0, 6)
      ]);
      return;
    }

    setRateLimitTokens(prev => prev - 1);
    setApiRequestsCount(prev => prev + 1);
    setCurrentPage(prev => prev + 1);

    if (paginationMode === "offset") {
      const offset = (currentPage - 1) * 100;
      setApiLogs(prev => [
        `[HTTP 200 OK] GET /orders?limit=100&offset=${offset} -> Fetched 100 rows. (Notice: DB row insertion caused offset drift)`,
        ...prev.slice(0, 6)
      ]);
    } else {
      const cursor = btoa(`order_id_${currentPage * 100}`);
      setApiLogs(prev => [
        `[HTTP 200 OK] GET /orders?limit=100&cursor=${cursor} -> Fetched 100 rows with stable cursor token.`,
        ...prev.slice(0, 6)
      ]);
    }
  };

  const handleResetRateLimit = () => {
    setRateLimitTokens(5);
    setIsThrottled(false);
    setApiLogs(prev => [
      "[RATE LIMIT REPLENISHED] Token bucket refilled (5 tokens available). Exponential backoff succeeded.",
      ...prev.slice(0, 6)
    ]);
  };

  // =========================================================================
  // WORKBENCH 5: Webhook Ingestion, Signature Verification & Idempotency Lab
  // =========================================================================
  const [webhookSecret, setWebhookSecret] = useState("whsec_test_secret_key_99");
  const [testPayload, setTestPayload] = useState(JSON.stringify({
    event_id: "evt_pay_9021",
    event_type: "payment.completed",
    timestamp: "2026-11-09T16:50:00Z",
    data: {
      payment_id: "pay_5001",
      order_id: 1001,
      amount: 65000.50,
      currency: "INR",
      status: "completed"
    }
  }, null, 2));
  const [processedEvents, setProcessedEvents] = useState(new Set(["evt_pay_1001"]));
  const [webhookLog, setWebhookLog] = useState([]);

  const handleProcessWebhook = () => {
    try {
      const parsed = JSON.parse(testPayload);
      const eventId = parsed.event_id;

      if (!eventId) {
        setWebhookLog(prev => ["[HTTP 400 BAD REQUEST] Missing 'event_id' in webhook payload.", ...prev]);
        return;
      }

      // Check Idempotency
      if (processedEvents.has(eventId)) {
        setWebhookLog(prev => [
          `[HTTP 200 OK (DUPLICATE IGNORED)] Event ${eventId} was ALREADY processed! Idempotency key verified. No duplicate ledger write.`,
          ...prev.slice(0, 6)
        ]);
        return;
      }

      // Process new event
      setProcessedEvents(prev => new Set(prev).add(eventId));
      setWebhookLog(prev => [
        `[HTTP 200 OK (PROCESSED)] HMAC signature valid. Event ${eventId} persisted to durable storage and CloudEvents queue.`,
        ...prev.slice(0, 6)
      ]);
    } catch (e) {
      setWebhookLog(prev => [`[ERROR] Malformed JSON payload: ${e.message}`, ...prev]);
    }
  };

  // =========================================================================
  // WORKBENCH 6: Data Contract Validator & 15-Question Assessment
  // =========================================================================
  const [contractValidationOutput, setContractValidationOutput] = useState(null);

  const handleValidateContract = (isValid) => {
    if (isValid) {
      setContractValidationOutput({
        valid: true,
        errors: [],
        message: "Data Contract VALID: All 6 required fields present. Types conform to strict schema. Non-negative amount verified. Timestamp in UTC."
      });
    } else {
      setContractValidationOutput({
        valid: false,
        errors: [
          "Contract Violation: 'amount' cannot be negative (-500.00 provided)",
          "Contract Violation: 'payment_status'='unknown_state' is not in allowed enum {'pending', 'completed', 'failed', 'refunded'}",
          "Missing Semantic: Missing mandatory producer SLA owner field"
        ],
        message: "Data Contract FAILED: Payload rejected before ingestion into analytical data lake."
      });
    }
  };

  const QUIZ_QUESTIONS = [
    {
      id: 1,
      q: "What is the primary difference between data serialization and deserialization?",
      options: [
        "Serialization encrypts data; deserialization decrypts data",
        "Serialization converts memory data structures into transferable bytes/text; deserialization reconstructs memory objects from bytes/text",
        "Serialization compresses data with GZIP; deserialization extracts it",
        "Serialization is only used in SQL databases"
      ],
      correct: 1,
      explanation: "Serialization translates an in-memory data object into a stream of bytes or text for storage/network transmission; deserialization reverses the process."
    },
    {
      id: 2,
      q: "Why is Parquet or ORC preferred over CSV for analytical queries scanning millions of rows?",
      options: [
        "CSV files cannot be opened in Python",
        "Parquet stores data column by column, allowing query engines to read only the required columns and skip row groups via statistics",
        "CSV files are always encrypted",
        "Parquet does not support numbers"
      ],
      correct: 1,
      explanation: "Columnar formats like Parquet allow selective column reading (projection pushdown) and row-group skipping (predicate pushdown), drastically reducing I/O."
    },
    {
      id: 3,
      q: "What is the key advantage of JSON Lines (JSONL / NDJSON) over standard JSON arrays for streaming data pipelines?",
      options: [
        "JSON Lines does not require quotes around strings",
        "Each line is an independent JSON object, allowing incremental streaming and appending without loading the whole file into RAM",
        "JSON Lines is a binary protocol",
        "JSON Lines replaces SQL entirely"
      ],
      correct: 1,
      explanation: "Standard JSON arrays require parsing the entire closing bracket, whereas JSON Lines allows line-by-line streaming, appending, and crash recovery."
    },
    {
      id: 4,
      q: "In Apache Avro binary serialization, why is the resulting message payload significantly smaller than JSON?",
      options: [
        "Avro replaces text with random numbers",
        "Avro binary encoding omits field names from every record, relying instead on an external schema for decoding",
        "Avro only supports integers up to 255",
        "Avro deletes null values permanently"
      ],
      correct: 1,
      explanation: "Unlike JSON which repeats keys in every record ('customer_id': 101, 'name': 'Rahul'), Avro serializes only values into compact binary according to the schema."
    },
    {
      id: 5,
      q: "What is the primary role of Apache Arrow in modern data engineering architectures?",
      options: [
        "A persistent disk file format to replace Parquet",
        "A standardized in-memory columnar memory format enabling zero-copy data sharing between Python, Spark, and DuckDB",
        "A message queue to replace Apache Kafka",
        "An API gateway for microservices"
      ],
      correct: 1,
      explanation: "Arrow standardizes in-memory columnar layout so systems (like Pandas, Polars, DuckDB, Spark) can exchange datasets without serialization overhead."
    },
    {
      id: 6,
      q: "Under Confluent Schema Registry BACKWARD compatibility rules, what type of schema change is considered safe?",
      options: [
        "Adding a mandatory field without a default value",
        "Adding an optional field or a field with a default value",
        "Deleting an existing required field",
        "Changing an integer field type to a string"
      ],
      correct: 1,
      explanation: "Backward compatibility guarantees new consumers can read data produced by older schemas. Adding an optional field or one with a default value is safe."
    },
    {
      id: 7,
      q: "What is the main engineering difference between data encoding and data compression?",
      options: [
        "Encoding changes the representation (e.g. UTF-8 or Base64); compression reduces the size (e.g. Snappy or ZSTD)",
        "Compression only works on numbers",
        "Encoding is lossless; compression is always lossy",
        "There is no difference between them"
      ],
      correct: 0,
      explanation: "Encoding changes the format or alphabet (e.g. text to UTF-8 bytes or Base64); compression applies algorithms to reduce byte size."
    },
    {
      id: 8,
      q: "Which HTTP status code should an API client look for when an external API rate limit is exceeded?",
      options: [
        "HTTP 401 Unauthorized",
        "HTTP 404 Not Found",
        "HTTP 429 Too Many Requests",
        "HTTP 500 Internal Server Error"
      ],
      correct: 2,
      explanation: "HTTP 429 Too Many Requests indicates rate limit exhaustion, often accompanied by a Retry-After header."
    },
    {
      id: 9,
      q: "Why is cursor-based pagination preferred over offset-based pagination (`OFFSET 100000`) for large API ingestion pipelines?",
      options: [
        "Cursor pagination allows jumping to random pages instantly",
        "Cursor pagination provides constant time retrieval and avoids skipped/duplicate records when rows are inserted concurrently",
        "Cursor pagination deletes old records automatically",
        "Offset pagination is deprecated in SQL"
      ],
      correct: 1,
      explanation: "Offset pagination scans and discards N records and shifts if rows are inserted. Cursors use stable pointers, providing $O(1)$ continuation."
    },
    {
      id: 10,
      q: "What is 'Jitter' in the context of API retry mechanisms with exponential backoff?",
      options: [
        "Compressing requests before sending",
        "Adding random variation to retry delay times to prevent thundering herd spikes against the server",
        "Rejecting all retries immediately",
        "Sending duplicate requests simultaneously"
      ],
      correct: 1,
      explanation: "Jitter spreads out retries across multiple workers by adding random delay, preventing synchronized bursts against an overloaded service."
    },
    {
      id: 11,
      q: "What security mechanism allows a webhook receiver to verify that an incoming HTTP POST was actually sent by the payment provider?",
      options: [
        "Checking the client IP address only",
        "Verifying an HMAC SHA-256 signature in the request headers using a pre-shared secret key",
        "Checking if the URL has https",
        "Reading the user's browser cookie"
      ],
      correct: 1,
      explanation: "HMAC signatures allow the receiver to compute the cryptographic hash of the raw body using the shared secret and reject tampered requests."
    },
    {
      id: 12,
      q: "Why must webhook consumer endpoints be designed to be 'idempotent'?",
      options: [
        "Because webhook providers only ever send an event once",
        "Because network retries by the provider can deliver the exact same event multiple times",
        "Because webhooks cannot store JSON",
        "Because webhooks require SOAP envelopes"
      ],
      correct: 1,
      explanation: "Due to transient network timeouts, webhook senders guarantee at-least-once delivery; consumers must deduplicate events using unique event IDs."
    },
    {
      id: 13,
      q: "How does a 'Data Contract' differ from a simple database schema?",
      options: [
        "A data contract is written in C++",
        "A data contract encompasses schema definitions plus semantic meanings, data quality constraints, SLAs, freshness, and team ownership",
        "A schema applies only to NoSQL databases",
        "A data contract is only used in financial trading"
      ],
      correct: 1,
      explanation: "Schemas define structure; data contracts establish an agreement covering semantics, quality expectations, freshness, and ownership between producers and consumers."
    },
    {
      id: 14,
      q: "In an e-commerce data platform, what format is best suited for serializing event streams into Kafka?",
      options: [
        "CSV",
        "Apache Avro with Schema Registry",
        "Uncompressed XML",
        "Excel .xlsx"
      ],
      correct: 1,
      explanation: "Avro provides compact binary serialization and enforced schema evolution, making it the industry standard for Kafka event streams."
    },
    {
      id: 15,
      q: "What is CNCF CloudEvents designed to solve in event-driven architectures?",
      options: [
        "To replace TCP/IP with UDP",
        "To provide a standardized JSON/binary event envelope (id, source, type, time) across heterogeneous cloud services",
        "To delete old logs automatically",
        "To run Python scripts in web browsers"
      ],
      correct: 1,
      explanation: "CloudEvents standardizes common event metadata (specversion, type, source, id, time) so systems can route events without parsing application-specific payloads."
    }
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleSelectAnswer = (qId, optionIdx) => {
    setSelectedAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const quizScore = useMemo(() => {
    let score = 0;
    QUIZ_QUESTIONS.forEach(q => {
      if (selectedAnswers[q.id] === q.correct) score++;
    });
    return score;
  }, [selectedAnswers]);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-neutral-900 pb-28 sm:pb-36 selection:bg-orange-500 selection:text-white overflow-x-hidden">
      {/* Universal Module Navigation */}
      <ModuleNav track="data-engineering" currentModuleId="data-formats" />

      {/* Mode & Switcher Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 mt-1 sm:mt-2">
        <div className="flex flex-wrap items-center justify-between gap-3 bg-white/95 border border-[#e7e3da] rounded-2xl p-2.5 sm:p-3 shadow-2xs backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 pl-1 hidden sm:inline">View Mode:</span>
            <div className="flex items-center gap-1 bg-[#f6f4ee] p-1 rounded-xl border border-[#e7e3da] text-xs font-bold">
              <button
                type="button"
                onClick={() => setActiveTab("curriculum")}
                className={`px-3.5 py-1.5 rounded-lg transition cursor-pointer ${
                  activeTab === "curriculum"
                    ? "bg-white text-neutral-900 shadow-xs border border-neutral-200/70"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Specification & Blueprints
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("workbench")}
                className={`px-3.5 py-1.5 rounded-lg transition cursor-pointer ${
                  activeTab === "workbench"
                    ? "bg-white text-neutral-900 shadow-xs border border-neutral-200/70"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Interactive Workbenches (6)
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-neutral-500 pr-1">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span>Module 6 · Data Formats & Integration</span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-4 space-y-8 sm:space-y-10">
        {/* Hero Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider font-mono">
            Core Data Pipeline Engineering · Serialization & Integration
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
            Module 6 — Data Formats, Serialization and Data Integration
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 max-w-3xl leading-relaxed">
            Master the data transport and storage formats powering modern data engineering. Learn serialization, row vs columnar storage (Parquet/ORC), in-memory Arrow arrays, Avro with Schema Registry, REST API ingestion with cursor pagination, HMAC webhook verification, and robust data contracts.
          </p>
        </div>

        {/* View Mode: Curriculum Specification vs Interactive Workbenches */}
        {activeTab === "curriculum" ? (
          <DataEngineeringFormatsSections />
        ) : (
          <div className="space-y-8">
            {/* Workbench Navigation Pills */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 bg-stone-200/60 rounded-2xl border border-stone-300/70">
              <button
                onClick={() => setActiveWorkbench("formats_comparator")}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  activeWorkbench === "formats_comparator"
                    ? "bg-white text-stone-900 shadow-xs border border-stone-300"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Binary size={14} className="text-orange-600" />
                <span>1. Formats & Serialization</span>
              </button>
              <button
                onClick={() => setActiveWorkbench("columnar_storage")}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  activeWorkbench === "columnar_storage"
                    ? "bg-white text-stone-900 shadow-xs border border-stone-300"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <HardDrive size={14} className="text-orange-600" />
                <span>2. Parquet vs Row & Compression</span>
              </button>
              <button
                onClick={() => setActiveWorkbench("schema_registry")}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  activeWorkbench === "schema_registry"
                    ? "bg-white text-stone-900 shadow-xs border border-stone-300"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <GitBranch size={14} className="text-orange-600" />
                <span>3. Avro Schema Evolution</span>
              </button>
              <button
                onClick={() => setActiveWorkbench("api_pagination")}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  activeWorkbench === "api_pagination"
                    ? "bg-white text-stone-900 shadow-xs border border-stone-300"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Globe size={14} className="text-orange-600" />
                <span>4. REST Pagination & Throttling</span>
              </button>
              <button
                onClick={() => setActiveWorkbench("webhook_idempotency")}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  activeWorkbench === "webhook_idempotency"
                    ? "bg-white text-stone-900 shadow-xs border border-stone-300"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <ShieldCheck size={14} className="text-orange-600" />
                <span>5. Webhooks & Idempotency</span>
              </button>
              <button
                onClick={() => setActiveWorkbench("contracts_quiz")}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  activeWorkbench === "contracts_quiz"
                    ? "bg-white text-stone-900 shadow-xs border border-stone-300"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <FileCode size={14} className="text-orange-600" />
                <span>6. Contracts & Assessment</span>
              </button>
            </div>

            {/* WORKBENCH 1: Formats & Serialization Comparator */}
            {activeWorkbench === "formats_comparator" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
                    Workbench 1 · Data Formats & Encodings
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">Multi-Format Serialization & Size Comparator</h2>
                  <p className="text-stone-600 text-sm mt-1">
                    Compare how the same structured record serializes across JSON, JSON Lines, CSV, Apache Avro, Protocol Buffers, and MessagePack. Analyze wire size and schema requirements.
                  </p>
                </div>

                {/* Format Selector Pills */}
                <div className="flex flex-wrap items-center gap-2">
                  {Object.entries(formatRepresentations).map(([key, item]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedFormat(key)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                        selectedFormat === key
                          ? "bg-stone-900 text-white shadow-xs"
                          : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>

                {/* Comparison Card */}
                <div className="p-5 rounded-xl border border-stone-200 bg-stone-50 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                    <div>
                      <span className="text-xs font-mono text-stone-400 uppercase">Selected Representation</span>
                      <h3 className="text-xl font-bold text-stone-900">{formatRepresentations[selectedFormat].name}</h3>
                      <div className="text-xs text-stone-500 mt-0.5">Type: <span className="font-semibold text-stone-800">{formatRepresentations[selectedFormat].type}</span></div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono text-stone-400 uppercase">Serialized Wire Size</span>
                      <div className="text-2xl font-black text-orange-600 font-mono">
                        {formatRepresentations[selectedFormat].bytes} bytes
                      </div>
                      <span className="text-[11px] font-mono text-stone-500">Schema: {formatRepresentations[selectedFormat].schema}</span>
                    </div>
                  </div>

                  {/* Serialized Content Box */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase font-bold text-stone-500">Payload Preview</span>
                    <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800">
                      <pre className="overflow-x-auto [scrollbar-width:thin]">
                        <code>{formatRepresentations[selectedFormat].text}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 2: Columnar Storage & Compression */}
            {activeWorkbench === "columnar_storage" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
                    Workbench 2 · Storage Layouts
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">Row-Oriented vs. Columnar (Parquet/ORC) Query & Compression Simulator</h2>
                  <p className="text-stone-600 text-sm mt-1">
                    Experience why analytical queries run 10x to 100x faster on Parquet. Observe projection pushdown and test modern compression codecs (Snappy, GZIP, Zstandard, LZ4).
                  </p>
                </div>

                {/* Configuration Controls */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                    <label className="text-xs font-bold text-stone-700 block">Storage Layout:</label>
                    <div className="flex gap-1 bg-stone-200/70 p-1 rounded-lg text-xs font-bold">
                      <button
                        onClick={() => setSelectedStorageLayout("row")}
                        className={`flex-1 py-1.5 rounded-md transition ${selectedStorageLayout === "row" ? "bg-white text-stone-900 shadow-2xs" : "text-stone-600"}`}
                      >
                        Row (CSV / Heap)
                      </button>
                      <button
                        onClick={() => setSelectedStorageLayout("columnar")}
                        className={`flex-1 py-1.5 rounded-md transition ${selectedStorageLayout === "columnar" ? "bg-white text-stone-900 shadow-2xs" : "text-stone-600"}`}
                      >
                        Columnar (Parquet/ORC)
                      </button>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                    <label className="text-xs font-bold text-stone-700 block">Compression Codec:</label>
                    <select
                      value={selectedCompression}
                      onChange={(e) => setSelectedCompression(e.target.value)}
                      className="w-full px-3 py-2 text-xs font-bold rounded-lg border border-stone-300 bg-white"
                    >
                      <option value="none">Uncompressed (1.0x)</option>
                      <option value="snappy">Snappy (Fast, 2.4x ratio)</option>
                      <option value="gzip">GZIP (High ratio, 4.2x)</option>
                      <option value="zstd">Zstandard / ZSTD (Optimal, 4.8x)</option>
                      <option value="lz4">LZ4 (Ultra-fast, 2.1x)</option>
                    </select>
                  </div>

                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                    <label className="text-xs font-bold text-stone-700 block">Analytical Query:</label>
                    <select
                      value={analyticalQueryType}
                      onChange={(e) => setAnalyticalQueryType(e.target.value)}
                      className="w-full px-3 py-2 text-xs font-bold rounded-lg border border-stone-300 bg-white"
                    >
                      <option value="avg_revenue">SELECT AVG(revenue) FROM sales (1 Column)</option>
                      <option value="full_row">SELECT * FROM sales (All 10 Columns)</option>
                    </select>
                  </div>
                </div>

                {/* Metrics Banner */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                    <span className="text-[11px] font-mono text-stone-500 uppercase">Disk Footprint</span>
                    <div className="text-2xl font-black text-stone-900 mt-1">{storageMetrics.diskFootprintKb} KB</div>
                    <span className="text-[10px] text-stone-500">{storageMetrics.spaceSaved}% space saved</span>
                  </div>
                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                    <span className="text-[11px] font-mono text-stone-500 uppercase">Query I/O Scanned</span>
                    <div className="text-2xl font-black text-emerald-600 mt-1">{storageMetrics.queryIoKb} KB</div>
                    <span className="text-[10px] text-stone-500">{storageMetrics.ioReduction}% I/O reduced</span>
                  </div>
                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                    <span className="text-[11px] font-mono text-stone-500 uppercase">Compression Ratio</span>
                    <div className="text-2xl font-black text-orange-600 mt-1">{storageMetrics.compressionRatio}:1</div>
                    <span className="text-[10px] text-stone-500">{selectedCompression.toUpperCase()} Codec</span>
                  </div>
                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                    <span className="text-[11px] font-mono text-stone-500 uppercase">Projection Pushdown</span>
                    <div className="text-2xl font-black text-blue-600 mt-1">
                      {selectedStorageLayout === "columnar" && analyticalQueryType === "avg_revenue" ? "ACTIVE" : "NONE"}
                    </div>
                    <span className="text-[10px] text-stone-500">Skips non-target columns</span>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 3: Avro & Schema Registry Evolution */}
            {activeWorkbench === "schema_registry" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
                    Workbench 3 · Schema Governance
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">Apache Avro & Confluent Schema Registry Simulator</h2>
                  <p className="text-stone-600 text-sm mt-1">
                    Simulate how Confluent / AWS Glue Schema Registry enforces compatibility rules (BACKWARD, FORWARD, FULL) during CI/CD deployments and schema migrations.
                  </p>
                </div>

                {/* Compatibility Mode Selector */}
                <div className="flex flex-wrap items-center gap-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-stone-700 block">Registry Compatibility Mode:</label>
                    <div className="flex gap-1 bg-stone-200/70 p-1 rounded-lg text-xs font-bold">
                      {["BACKWARD", "FORWARD", "FULL", "NONE"].map(mode => (
                        <button
                          key={mode}
                          onClick={() => setCompatibilityMode(mode)}
                          className={`px-3 py-1 rounded-md transition ${compatibilityMode === mode ? "bg-white text-stone-900 shadow-2xs" : "text-stone-600"}`}
                        >
                          {mode}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-stone-700 block">Deploy Schema Version:</label>
                    <div className="flex gap-1 bg-stone-200/70 p-1 rounded-lg text-xs font-bold">
                      <button
                        onClick={() => setSelectedSchemaVersion("v1")}
                        className={`px-3 py-1 rounded-md transition ${selectedSchemaVersion === "v1" ? "bg-white text-stone-900 shadow-2xs" : "text-stone-600"}`}
                      >
                        Version 1 (Base)
                      </button>
                      <button
                        onClick={() => setSelectedSchemaVersion("v2")}
                        className={`px-3 py-1 rounded-md transition ${selectedSchemaVersion === "v2" ? "bg-white text-stone-900 shadow-2xs" : "text-stone-600"}`}
                      >
                        Version 2 (Safe Add)
                      </button>
                      <button
                        onClick={() => setSelectedSchemaVersion("v3_breaking")}
                        className={`px-3 py-1 rounded-md transition ${selectedSchemaVersion === "v3_breaking" ? "bg-white text-stone-900 shadow-2xs" : "text-stone-600"}`}
                      >
                        Version 3 (Breaking)
                      </button>
                    </div>
                  </div>
                </div>

                {/* Registry Decision Banner */}
                <div className={`p-4 rounded-xl border text-xs sm:text-sm ${
                  registryResult.allowed
                    ? "border-emerald-300 bg-emerald-50 text-emerald-950"
                    : "border-rose-300 bg-rose-50 text-rose-950"
                }`}>
                  <div className="flex items-center justify-between font-bold">
                    <span>Registry Decision: {registryResult.status}</span>
                    <span className="font-mono">{compatibilityMode} Check</span>
                  </div>
                  <p className="mt-1">{registryResult.reason}</p>
                </div>

                {/* Schema Code View */}
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase font-bold text-stone-500">Avro JSON Schema Definition</span>
                  <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800">
                    <pre className="overflow-x-auto [scrollbar-width:thin]">
                      <code>{schemaVersions[selectedSchemaVersion].schema}</code>
                    </pre>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 4: REST API Pagination & Throttling */}
            {activeWorkbench === "api_pagination" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
                    Workbench 4 · API Ingestion
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">REST API Pagination, Rate Limiting & Backoff Simulator</h2>
                  <p className="text-stone-600 text-sm mt-1">
                    Simulate large-scale data extraction. Compare offset pagination drift vs cursor pagination stability, and observe HTTP 429 exponential backoff with jitter.
                  </p>
                </div>

                {/* Pagination Controls */}
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-stone-700">Pagination Strategy:</span>
                    <div className="flex gap-1 bg-stone-200/70 p-1 rounded-lg text-xs font-bold">
                      <button
                        onClick={() => setPaginationMode("offset")}
                        className={`px-3 py-1 rounded-md transition ${paginationMode === "offset" ? "bg-white text-stone-900 shadow-2xs" : "text-stone-600"}`}
                      >
                        Offset-Based (limit & offset)
                      </button>
                      <button
                        onClick={() => setPaginationMode("cursor")}
                        className={`px-3 py-1 rounded-md transition ${paginationMode === "cursor" ? "bg-white text-stone-900 shadow-2xs" : "text-stone-600"}`}
                      >
                        Cursor-Based (cursor token)
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleFetchPage}
                      className="px-4 py-2 bg-[#f97316] hover:bg-[#ea580c] text-white text-xs font-bold rounded-lg transition shadow-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <Play size={12} />
                      <span>Fetch Next Page (100 Records)</span>
                    </button>
                    {isThrottled && (
                      <button
                        onClick={handleResetRateLimit}
                        className="px-3 py-2 bg-stone-200 text-stone-800 text-xs font-bold rounded-lg hover:bg-stone-300 transition"
                      >
                        Simulate Backoff Wait (Replenish Tokens)
                      </button>
                    )}
                  </div>
                </div>

                {/* Status Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl border border-stone-200 bg-white">
                    <span className="text-[11px] font-mono text-stone-500 uppercase">Requests Made</span>
                    <div className="text-2xl font-black text-stone-900 mt-1">{apiRequestsCount}</div>
                    <span className="text-[10px] text-stone-500">{apiRequestsCount * 100} records extracted</span>
                  </div>
                  <div className="p-4 rounded-xl border border-stone-200 bg-white">
                    <span className="text-[11px] font-mono text-stone-500 uppercase">Rate Limit Tokens</span>
                    <div className="text-2xl font-black text-orange-600 mt-1">{rateLimitTokens} / 5</div>
                    <span className="text-[10px] text-stone-500">Tokens left in bucket</span>
                  </div>
                  <div className="p-4 rounded-xl border border-stone-200 bg-white">
                    <span className="text-[11px] font-mono text-stone-500 uppercase">Current Page / Cursor</span>
                    <div className="text-lg font-black text-stone-900 font-mono mt-1">Page #{currentPage}</div>
                    <span className="text-[10px] text-stone-500">{paginationMode} mode</span>
                  </div>
                  <div className="p-4 rounded-xl border border-stone-200 bg-white">
                    <span className="text-[11px] font-mono text-stone-500 uppercase">API Status</span>
                    <div className={`text-base font-black mt-1 ${isThrottled ? "text-rose-600" : "text-emerald-600"}`}>
                      {isThrottled ? "HTTP 429 THROTTLED" : "HTTP 200 HEALTHY"}
                    </div>
                    <span className="text-[10px] text-stone-500">{isThrottled ? "Wait 3s or replenish" : "Non-blocking"}</span>
                  </div>
                </div>

                {/* Activity Console */}
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase font-bold text-stone-500">API Ingestion Client Logs</span>
                  <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs space-y-1 border border-neutral-800">
                    {apiLogs.map((log, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-stone-500">&gt;</span>
                        <span className={log.includes("429") ? "text-rose-400 font-bold" : log.includes("200") ? "text-emerald-400" : "text-neutral-200"}>
                          {log}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 5: Webhooks & Idempotency Lab */}
            {activeWorkbench === "webhook_idempotency" && (
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
                    Workbench 5 · Event-Driven Architecture
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">Webhook Receiver, HMAC-SHA256 & Idempotency Lab</h2>
                  <p className="text-stone-600 text-sm mt-1">
                    Verify incoming webhook signatures using secret keys and protect your ledger against duplicate event processing through idempotency key deduplication.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* Webhook Payload Editor */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-stone-700 block">Incoming Webhook HTTP Request Body (JSON):</span>
                    <textarea
                      value={testPayload}
                      onChange={(e) => setTestPayload(e.target.value)}
                      rows={12}
                      className="w-full p-3 font-mono text-xs rounded-xl border border-stone-300 bg-white leading-relaxed"
                    />
                    <button
                      onClick={handleProcessWebhook}
                      className="w-full py-2.5 bg-[#f97316] hover:bg-[#ea580c] text-white text-xs font-bold rounded-xl transition shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <ShieldCheck size={14} />
                      <span>Post Webhook Event to Receiver Endpoint</span>
                    </button>
                  </div>

                  {/* Deduplication & CloudEvents Output */}
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                      <span className="text-xs font-bold text-stone-800 block">Processed Event Ledger (Deduplication Store):</span>
                      <div className="flex flex-wrap gap-1.5">
                        {Array.from(processedEvents).map(id => (
                          <span key={id} className="px-2.5 py-1 bg-white border border-stone-200 rounded-lg text-xs font-mono font-bold text-stone-700">
                            {id}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs font-mono uppercase font-bold text-stone-500">Receiver Telemetry Logs</span>
                      <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs space-y-1.5 border border-neutral-800">
                        {webhookLog.length === 0 ? (
                          <span className="text-stone-500">Waiting for webhook delivery... Click 'Post Webhook Event' above.</span>
                        ) : (
                          webhookLog.map((log, idx) => (
                            <div key={idx} className={log.includes("DUPLICATE") ? "text-amber-400 font-bold" : log.includes("PROCESSED") ? "text-emerald-400 font-bold" : "text-rose-400"}>
                              &gt; {log}
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* WORKBENCH 6: Data Contracts & Assessment */}
            {activeWorkbench === "contracts_quiz" && (
              <div className="space-y-8">
                {/* Data Contract Sandbox */}
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
                      Part A · Data Contract Validator
                    </div>
                    <h2 className="text-2xl font-bold text-stone-900">Producer-Consumer Data Contract Validation Engine</h2>
                    <p className="text-stone-600 text-sm mt-1">
                      Validate structured payloads against semantic business rules, schema constraints, SLA freshness, and nullability checks before loading into the warehouse.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => handleValidateContract(true)}
                      className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition shadow-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <CheckCircle2 size={14} />
                      <span>Validate Conforming Payload</span>
                    </button>
                    <button
                      onClick={() => handleValidateContract(false)}
                      className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl transition shadow-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <AlertTriangle size={14} />
                      <span>Test Violating Payload (Negative Amount & Invalid Enum)</span>
                    </button>
                  </div>

                  {contractValidationOutput && (
                    <div className={`p-4 rounded-xl border text-xs sm:text-sm ${
                      contractValidationOutput.valid
                        ? "border-emerald-300 bg-emerald-50 text-emerald-950"
                        : "border-rose-300 bg-rose-50 text-rose-950"
                    }`}>
                      <strong className="block font-bold">{contractValidationOutput.message}</strong>
                      {contractValidationOutput.errors.length > 0 && (
                        <ul className="mt-2 space-y-1 list-disc list-inside">
                          {contractValidationOutput.errors.map((err, idx) => (
                            <li key={idx} className="font-mono">{err}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>

                {/* 15-Question Comprehensive Assessment */}
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
                        Part B · Mastery Assessment
                      </div>
                      <h2 className="text-2xl font-bold text-stone-900">Module 6: Data Formats & Integration Quiz (15 Questions)</h2>
                      <p className="text-stone-600 text-sm mt-1">
                        Test your understanding of serialization, row vs columnar formats, Avro, Parquet, Arrow, REST APIs, webhooks, and contracts.
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono text-stone-400 uppercase">Score Progress</span>
                      <div className="text-2xl font-black text-stone-900 font-mono">
                        {quizScore} / {QUIZ_QUESTIONS.length}
                      </div>
                    </div>
                  </div>

                  {/* Questions List */}
                  <div className="space-y-6">
                    {QUIZ_QUESTIONS.map((q, idx) => {
                      const userChoice = selectedAnswers[q.id];
                      const isAnswered = userChoice !== undefined;
                      const isCorrect = userChoice === q.correct;

                      return (
                        <div key={q.id} className="p-5 rounded-xl border border-stone-200 bg-stone-50/60 space-y-3">
                          <div className="flex items-start gap-3">
                            <span className="w-6 h-6 rounded-full bg-stone-200 text-stone-700 flex items-center justify-center text-xs font-bold shrink-0">
                              {idx + 1}
                            </span>
                            <h4 className="text-sm sm:text-base font-bold text-stone-900 leading-snug">
                              {q.q}
                            </h4>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                            {q.options.map((opt, optIdx) => {
                              const isSelected = userChoice === optIdx;
                              let btnClass = "border-stone-200 bg-white text-stone-800 hover:border-orange-300";

                              if (isAnswered) {
                                if (optIdx === q.correct) {
                                  btnClass = "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold";
                                } else if (isSelected) {
                                  btnClass = "border-rose-500 bg-rose-50 text-rose-950";
                                } else {
                                  btnClass = "border-stone-200 bg-stone-100 text-stone-400";
                                }
                              }

                              return (
                                <button
                                  key={optIdx}
                                  onClick={() => handleSelectAnswer(q.id, optIdx)}
                                  className={`p-3 rounded-xl border text-left text-xs transition flex items-center gap-2 cursor-pointer ${btnClass}`}
                                >
                                  <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] font-bold shrink-0">
                                    {String.fromCharCode(65 + optIdx)}
                                  </span>
                                  <span>{opt}</span>
                                </button>
                              );
                            })}
                          </div>

                          {isAnswered && (
                            <div className={`p-3 rounded-lg text-xs ${
                              isCorrect ? "bg-emerald-100/70 text-emerald-900" : "bg-rose-100/70 text-rose-900"
                            }`}>
                              <strong>{isCorrect ? "Correct! " : "Incorrect. "}</strong>
                              <span>{q.explanation}</span>
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
