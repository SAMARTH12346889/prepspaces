import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Video,
  Navigation,
  CreditCard,
  Cpu,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  Layers,
  Activity,
  Shield,
  FileText,
  BookOpen,
  HelpCircle,
  RotateCcw,
  SlidersHorizontal,
  Workflow,
  TrendingUp,
  HardDrive,
  Clock,
  ChevronDown,
  ChevronUp,
  DollarSign,
  Radio,
  Server,
  Database,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import {
  VideoTranscodingPipelineDiagram,
  RideHailingDispatchDiagram,
  PaymentStateLedgerDiagram,
  AIServiceSchedulerDiagram,
  default as VisualDiagramComponentModule23,
} from "./SystemDesignAdvancedCaseStudiesDiagrams";

export default function SystemDesignAdvancedCaseStudies() {
  const navigate = useNavigate();

  // Navigation tab state: "curriculum" | "simulators" | "qa" | "assignments" | "assessment" | "reading"
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeLesson, setActiveLesson] = useState("23.1");

  // Expanded Q&A accordion state for 16 Senior Interview Questions
  const [expandedQA, setExpandedQA] = useState({
    "qa-1": true,
    "qa-5": true,
    "qa-9": true,
    "qa-13": true,
  });
  const toggleQA = (id) => {
    setExpandedQA((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // ---------------------------------------------------------------------------
  // ASSESSMENT QUIZ STATE (8 QUESTIONS VERBATIM FROM USER PROMPT)
  // ---------------------------------------------------------------------------
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: "q1",
      question: "1. What is the main advantage of a CDN in a video platform?",
      options: [
        "It automatically transcodes every source video",
        "It delivers eligible cached media from locations closer to viewers",
        "It replaces the need for object storage",
        "It guarantees every video is public",
      ],
      correctIndex: 1,
      explanation:
        "A Content Delivery Network (CDN) caches segmented media chunks (.ts / .m4s) at edge Points of Presence (PoPs) close to viewers, drastically reducing origin egress costs, buffering stalls, and startup latency.",
    },
    {
      id: "q2",
      question: "2. Why is geospatial indexing useful in ride-hailing?",
      options: [
        "It removes the need for driver availability",
        "It makes all routes the same length",
        "It narrows nearby-driver candidates without scanning the entire driver population",
        "It guarantees a driver cannot be double-assigned",
      ],
      correctIndex: 2,
      explanation:
        "Geospatial indexing (such as Uber's H3 hexagonal hierarchical cells or Geohashes) clusters driver coordinates into spatial buckets, allowing the dispatch service to search only neighboring cells rather than performing an O(N) full-table scan over hundreds of thousands of online drivers.",
    },
    {
      id: "q3",
      question: "3. What is the purpose of an idempotency key in payment processing?",
      options: [
        "Encrypt the payment database",
        "Make a retry of the same logical operation safe from duplicate side effects",
        "Guarantee an external provider is always available",
        "Replace financial reconciliation",
      ],
      correctIndex: 1,
      explanation:
        "An idempotency key enables client retries following dropped network connections or ambiguous timeouts without triggering duplicate charges or double captures on the payment network.",
    },
    {
      id: "q4",
      question: "4. A payment provider may have completed a payment, but the response was lost. What should the application do?",
      options: [
        "Always create a new unrelated payment",
        "Mark the payment failed immediately",
        "Recover the existing operation's outcome through idempotent retry, provider lookup, or verified events",
        "Delete the payment record",
      ],
      correctIndex: 2,
      explanation:
        "Network timeouts are ambiguous: the provider may have debited the customer. The platform must maintain the payment in a pending state and resolve the outcome via an idempotent provider lookup, signed webhook verification, or reconciliation.",
    },
    {
      id: "q5",
      question: "5. Why is a ledger useful in a financial system?",
      options: [
        "It stores only the most recent UI status",
        "It replaces all security checks",
        "It makes refunds unnecessary",
        "It records auditable financial movements and supports reconciliation",
      ],
      correctIndex: 3,
      explanation:
        "A double-entry financial ledger uses immutable debit and credit entries with balancing invariants, enabling end-to-end auditability, dispute resolution, and automated settlement reconciliation.",
    },
    {
      id: "q6",
      question: "6. What is an important capacity metric for a large-scale LLM serving system?",
      options: [
        "Only the number of registered users",
        "Input and output token throughput alongside latency and memory usage",
        "Only the number of database tables",
        "Only HTTP requests per day",
      ],
      correctIndex: 1,
      explanation:
        "Because generating 3,000 output tokens consumes exponentially more accelerator compute than a 20-token classification, capacity must be sized on input/output token throughput, KV-cache VRAM consumption, and latency SLAs rather than raw request counts.",
    },
    {
      id: "q7",
      question: "7. What is a common trade-off in continuous batching?",
      options: [
        "Improved serving utilization versus scheduling and latency considerations",
        "Permanent elimination of KV cache",
        "Guaranteed identical throughput for every model",
        "Removal of all admission controls",
      ],
      correctIndex: 0,
      explanation:
        "Continuous batching (iteration-level scheduling) admits new requests into active GPU decoding steps to maximize hardware utilization, but requires careful iteration scheduling so long generations do not starve interactive latency deadlines.",
    },
    {
      id: "q8",
      question: "8. Which approach helps prevent two ride-dispatch workers from assigning one driver to two trips?",
      options: [
        "A faster geospatial index alone",
        "A cached availability Boolean with no validation",
        "An atomic reservation or conditional state transition",
        "More frequent GPS updates alone",
      ],
      correctIndex: 2,
      explanation:
        "Double-assignment is a database concurrency problem solved by atomic conditional updates (e.g. Compare-And-Swap: UPDATE drivers SET status = 'RESERVED' WHERE id = $1 AND status = 'AVAILABLE') paired with reservation lease expirations.",
    },
  ];

  const handleSelectAnswer = (questionId, optionIndex) => {
    if (quizSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleScoreQuiz = () => {
    setQuizSubmitted(true);
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
  };

  const score = Object.entries(selectedAnswers).reduce((acc, [qId, ansIdx]) => {
    const q = quizQuestions.find((item) => item.id === qId);
    return q && q.correctIndex === ansIdx ? acc + 1 : acc;
  }, 0);

  // ---------------------------------------------------------------------------
  // 16 SENIOR SYSTEM DESIGN INTERVIEW QUESTIONS & MODEL ANSWERS
  // ---------------------------------------------------------------------------
  const interviewQuestions = [
    // Video Platform (4)
    {
      id: "qa-1",
      topic: "Video Platform",
      q: "How would you design a video-processing pipeline that can scale independently from playback?",
      a: "Decouple ingestion from playback using asynchronous, event-driven queueing and object storage: (1) Direct Ingestion: Clients upload original video files directly to an S3 object storage bucket using short-lived pre-signed multipart URLs, completely bypassing application API servers. (2) S3 ObjectCreated Notifications: S3 publishes an event to an Amazon SQS queue / Kafka topic when an upload completes. (3) Dynamic Transcoding Worker Pool: Transcoder worker instances (running containerized FFmpeg on auto-scaling GPU/CPU clusters) consume jobs from SQS. They scale horizontally based on queue depth (backlog size) rather than HTTP traffic. (4) Segregated Output: Transcoded HLS/DASH media segments (.ts/.m4s) and manifests (.m3u8) are written to a separate, publicly accessible CDN origin bucket. Playback traffic is absorbed entirely by the CDN edge without putting any compute load on the transcoding cluster.",
    },
    {
      id: "qa-2",
      topic: "Video Platform",
      q: "How would you support adaptive bitrate streaming and reduce buffering?",
      a: "Implement Adaptive Bitrate Streaming (ABR) using segmented protocols (HLS or MPEG-DASH): (1) Rendition Ladder: Transcode each raw video into a standardized ladder of discrete resolutions and bitrates (e.g. 360p at 800 kbps, 480p at 1.4 Mbps, 720p at 2.8 Mbps, 1080p at 5.0 Mbps). (2) Segment Packaging: Slice each rendition into short, keyframe-aligned 4-to-6 second media segments. (3) Master Playlist: Serve a master.m3u8 manifest listing all available renditions with bandwidth metadata. (4) Client-Side ABR Algorithm: The video player continuously measures incoming segment download throughput and current playback buffer fullness (e.g. maintaining a 15-second forward buffer). If the buffer drains due to network degradation, the player smoothly requests lower-bitrate segments for the subsequent chunk without stalling playback.",
    },
    {
      id: "qa-3",
      topic: "Video Platform",
      q: "How do you prevent a failed transcoding job from publishing incomplete media?",
      a: "Enforce an Atomic Publishing State Machine with isolated staging storage: (1) Two-Phase Storage: Transcoding workers output media chunks into a private 'staging' object path (/staging/video-123/). (2) Manifest Validation: Only after all renditions finish transcoding does an orchestrator verify that all segment files exist, are non-empty, and match the timestamps in the generated master manifest. (3) Atomic Move or Pointer Switch: Either copy/promote files to the production origin path (/published/video-123/) or update the database record pointer (manifest_url). (4) Database State Gate: The database status column transitions: UPLOADING -> PROCESSING -> VALIDATING -> PUBLISHED. The video catalog API strictly queries WHERE status = 'PUBLISHED'. If a worker crashes midway, the job retries; if it exceeds maximum retries, the status transitions to FAILED and staging files are cleaned up via S3 lifecycle rules.",
    },
    {
      id: "qa-4",
      topic: "Video Platform",
      q: "How would you reduce CDN delivery costs while protecting private courses?",
      a: "Combine Origin Shielding, CDN Tiered Caching, and Signed Cookies/Tokens: (1) Origin Shield: Deploy a centralized CloudFront Origin Shield layer between regional edge PoPs and the S3 origin. This collapses multiple edge misses into a single request, achieving a 98%+ cache hit ratio and preventing origin egress saturation. (2) Signed Cookies for Private Courses: For authorized or paid courses, avoid signed URLs (which break CDN caching because each user has a unique signature query param). Instead, issue HTTP-only, secure Signed Cookies scoped to the course directory (e.g., Path=/courses/c-401/*). The CDN validates the HMAC cryptographic signature at the edge in <1ms without contacting origin API servers. (3) Video Codec Optimization: Encode high-traffic content in modern codecs like AV1 or VP9 (offering 30-40% bitrate reduction over H.264 at identical perceptual quality), dramatically cutting petabyte-scale CDN bandwidth costs.",
    },

    // Ride-Hailing (4)
    {
      id: "qa-5",
      topic: "Ride-Hailing",
      q: "How would you find nearby available drivers without scanning every driver?",
      a: "Utilize Hierarchical Hexagonal Geospatial Indexing (Uber H3): (1) Location Ingestion: When drivers stream GPS coordinates over WebSockets every 4 seconds, the location ingestion service converts (latitude, longitude) into an H3 hexagonal cell ID (e.g., resolution 8 with ~460-meter edge length) and stores it in an in-memory spatial cache (Redis Geospatial / H3 hash sets partitioned by city). (2) K-Ring Radial Traversal: When a rider requests a pickup, map the pickup coordinate to its home H3 cell. Query the home cell for drivers with status = 'AVAILABLE'. If fewer than K candidates are found, expand the search to the immediate 1-ring neighbors (6 adjacent hexagons), then 2-ring (18 hexagons). (3) Fast Memory Pruning: Because only drivers in the local hexagonal neighborhood are evaluated, the candidate search set is reduced from 300,000 drivers across the city to just 20-50 local drivers, executing in under 5 milliseconds.",
    },
    {
      id: "qa-6",
      topic: "Ride-Hailing",
      q: "How do you prevent concurrent workers from assigning the same driver to multiple trips?",
      a: "Implement Atomic Conditional Reservations (Compare-And-Swap / CAS) at the persistent store layer: (1) The Concurrency Vulnerability: Two dispatch workers evaluating concurrent ride requests in the same neighborhood may both select Driver D-101. (2) Atomic State Transition: The dispatch service executes an atomic database update: UPDATE drivers SET status = 'RESERVED', trip_id = $tripId, reservation_lease = NOW() + INTERVAL '15 seconds' WHERE driver_id = $driverId AND status = 'AVAILABLE'. (3) Optimistic Lock Verification: Only the worker whose query returns '1 row updated' wins the reservation. The second worker receives '0 rows updated', recognizes a race condition, and instantly falls back to the next best candidate (D-102). (4) Versioned Leases: The 15-second reservation lease ensures that if the driver declines or the app loses connection, the reservation automatically expires with a version check, preventing stale lockouts.",
    },
    {
      id: "qa-7",
      topic: "Ride-Hailing",
      q: "How would you handle stale GPS updates and unreliable mobile connections?",
      a: "Apply Kalmar Filtering, Monotonic Sequencing, and Dead Reckoning: (1) Monotonic Message Sequences: Each driver app tags location telemetry with an incrementing sequence number and device epoch timestamp. If network buffering causes a burst of delayed packets to arrive out of order, the location ingestion pipeline discards any packet whose sequence number is lower than the last processed sequence. (2) Noise Filtering & Map Matching: Raw GPS coordinates bounce due to urban canyons (tall buildings). Run points through a map-matching Kalman filter algorithm that snaps raw coordinates to verified road segments in the road network graph. (3) Dead Reckoning: If a driver enters a tunnel or loses connectivity for 8 seconds, the routing engine projects the vehicle's position along the current road polyline at historical segment speed, presenting smooth motion to the passenger until reconnection.",
    },
    {
      id: "qa-8",
      topic: "Ride-Hailing",
      q: "How do you maintain a correct trip state machine when payment collection fails?",
      a: "Decouple Physical Trip Completion from Financial Settlement: (1) Authoritative State Machine: The trip state machine transitions: IN_PROGRESS -> ARRIVED -> COMPLETED. A trip where the passenger reached their destination is physically complete and cannot be retroactively cancelled. (2) Payment Sub-State: When the driver taps 'Complete Trip', the trip record transitions to status = 'COMPLETED', but its payment status is initialized to 'PAYMENT_PENDING'. (3) Asynchronous Capture with Retry: The payment service attempts credit card capture. If the payment provider is down or the passenger's card declines with insufficient funds, the trip remains 'COMPLETED', but passenger account state is updated to 'OUTSTANDING_BALANCE_OWED'. (4) Driver Payout Protection: The platform immediately credits the driver's earnings ledger using platform capital, while passenger app access is blocked for future rides until the outstanding balance is cleared via automated retries or alternative payment methods.",
    },

    // Payment Platform (4)
    {
      id: "qa-9",
      topic: "Payment Platform",
      q: "What happens if a client times out after a payment provider successfully processes the request?",
      a: "Maintain an Ambiguous State and Resolve via Idempotent Queries or Webhooks: (1) The Timeout Fallacy: A network timeout means 'no response received'—it does NOT mean the charge failed. The payment gateway (e.g. Stripe, Razorpay) may have debited the customer's account. (2) Never Re-Charge Blindly: If the merchant client times out, the client must retry using the EXACT same Idempotency-Key. (3) Gateway Lookup: The payment backend checks its database. If the payment record is in 'PROCESSING' state, the server queries the provider's API using the idempotency key: GET /v1/charges?idempotency_key=xyz. (4) Webhook Reconciliation: If provider API queries also time out, the transaction remains in 'PROCESSING' until an authenticated provider webhook (payment_intent.succeeded) arrives, or end-of-day settlement reconciliation detects and confirms the charge. Only then is the customer receipt emitted.",
    },
    {
      id: "qa-10",
      topic: "Payment Platform",
      q: "How do idempotency keys differ from deduplicating webhook event IDs?",
      a: "They protect opposite directions of the payment communication lifecycle: (1) Idempotency Keys (Inbound from Client to API): Generated by the merchant/client (e.g. UUID v4 order_942_attempt_1) on mutating HTTP requests (POST /payments). They prevent the client from creating duplicate charges when retrying ambiguous network timeouts. The server caches the initial response and returns it on duplicate requests. (2) Webhook Event IDs (Inbound from Provider to API): Generated by the payment processor (e.g. Stripe evt_102948) on asynchronous callback webhooks. Because webhooks follow at-least-once delivery, the same event may be pushed 3-5 times. The webhook consumer records event IDs in a deduplication table with a unique database index, ensuring business logic (such as provisioning access to a course) executes strictly once.",
    },
    {
      id: "qa-11",
      topic: "Payment Platform",
      q: "Why should payment history and financial ledger entries not be modeled as one mutable status?",
      a: "Mutable statuses destroy financial auditability and make reconciliation impossible: (1) The Mutation Trap: Storing a single balance column (merchant.balance += 2500) or updating a status row (paid = true) erases the historical lifecycle. If a dispute, partial refund, currency conversion, platform fee deduction, or chargeback occurs later, the balance cannot be mathematically verified. (2) Double-Entry Bookkeeping: Money cannot be created or destroyed. Every transaction must be recorded as an immutable set of balancing debits and credits across named accounts (Assets, Liabilities, Revenue, Expenses). (3) Absolute Correctness: Sum(Debits) - Sum(Credits) === 0 must always hold true. If an event is reprocessed, the ledger refuses to insert duplicate journal entries. Balances are derived from immutable journal ledgers, creating an unalterable audit trail required by financial regulators and SOX compliance.",
    },
    {
      id: "qa-12",
      topic: "Payment Platform",
      q: "How would you design reconciliation when provider records disagree with internal records?",
      a: "Implement a Multi-Stage Automated Reconciliation Engine with Exception Queues: (1) Settlement File Ingestion: Every night, download the provider's settlement reconciliation report (CSV/JSON containing all captured transactions, fees, refunds, and net payouts). (2) Four-Way Matching Rule: Match records on: (a) External Provider Transaction ID, (b) Internal Payment Intent ID, (c) Exact Amount in Smallest Currency Unit, and (d) Currency Code. (3) Discrepancy Classification: (a) Internal Missing: Provider captured payment, but internal database has no record (webhook was dropped). Auto-heal by creating the internal ledger entry. (b) Amount Mismatch: Provider charged ₹2,500, but internal record shows ₹2,400. Flag for financial audit. (c) Status Mismatch: Internal marked failed, provider marked succeeded. (4) Exception Queue: Unmatched discrepancies are routed to an internal operations dashboard with audit evidence for manual triage.",
    },

    // Large-Scale AI Service (4)
    {
      id: "qa-13",
      topic: "Large-Scale AI Service",
      q: "How would you estimate model-serving capacity from input tokens, output tokens, concurrency, and latency targets?",
      a: "Deconstruct generation into Prefill vs Decoding phases using Little's Law: (1) Prefill (Input Tokens): Compute-bound parallel matrix multiplication. Calculate Input Throughput = RPS × Avg Input Tokens (e.g. 50 RPS × 1,200 = 60,000 tokens/sec). (2) Decoding (Output Tokens): Memory-bandwidth-bound autoregressive token-by-token generation. Calculate Output Demand = RPS × Avg Output Tokens (50 RPS × 300 = 15,000 tokens/sec). (3) In-Flight Concurrency: Apply Little's Law: L = λ × W = 50 req/sec × 4.0s average latency = 200 concurrent requests. (4) GPU VRAM Sizing: Total VRAM = Model Weights (e.g., Llama-3-8B in FP16 = 16 GB) + KV Cache per concurrency (2 × Layers × Heads × Head_Dim × Bytes × Context_Length × Concurrency) + CUDA overhead. If one A100 (80GB) delivers 800 output tokens/sec under continuous batching, minimum GPUs required = ceil(15,000 / 800) = 19 GPUs + 30% headroom ≈ 25 GPUs.",
    },
    {
      id: "qa-14",
      topic: "Large-Scale AI Service",
      q: "How do batching, KV caching, and quantization affect inference performance?",
      a: "They represent the three primary optimization levers in modern LLM serving systems: (1) Continuous Batching (PagedAttention / vLLM): Replaces static batching with iteration-level scheduling. As soon as a request emits an EOS (end-of-sequence) token, its memory is reclaimed and a waiting request is admitted on the next decoding iteration, boosting GPU utilization from ~20% to over 75%. (2) KV Caching & PagedAttention: Avoids recomputing attention matrices for prior tokens by storing Key and Value tensors in GPU VRAM. PagedAttention eliminates memory fragmentation by allocating KV cache in non-contiguous virtual memory blocks (like OS paging), enabling 2-4x higher concurrency. (3) Quantization (FP8 / INT4): Compresses weight representations from 16-bit to 8-bit or 4-bit. This cuts memory footprint by 50-75%, doubling effective memory bandwidth and throughput while keeping model quality degradation under 1% perplexity.",
    },
    {
      id: "qa-15",
      topic: "Large-Scale AI Service",
      q: "How would you route tasks to different models based on latency, cost, and quality?",
      a: "Deploy an Intelligent Model Router at the AI Gateway layer: (1) Task Classification: Fast heuristic regexes or a micro-classifier (e.g. fine-tuned DeBERTa / lightweight Llama-1B) categorize the user prompt into task types (intent classification, grammar check, complex coding, resume evaluation). (2) Tiered Model Pools: Maintain three pools: Tier 1 (Fast & Cheap: 1B-3B model for routing, simple Q&A, and intent detection; <200ms latency, $0.0001/req), Tier 2 (Balanced: 8B-14B model for code explanation and feedback), Tier 3 (Heavy Reasoning: 70B+ model or Claude/GPT-4 for mock interview evaluation and deep architectural rubrics). (3) Dynamic Fallback & SLA Routing: If Tier 3 GPU queues exceed 5-second wait times, the router downgrades non-critical tasks to Tier 2 with prompt modifications, preserving interactive responsiveness.",
    },
    {
      id: "qa-16",
      topic: "Large-Scale AI Service",
      q: "How would you keep retrieval-based AI responses tenant-isolated and recover from inference overload?",
      a: "Enforce Pre-Prompt Permission Filtering, Vector Namespacing, and Priority Admission Queues: (1) Hard Tenant Isolation in Vector DB: Partition vector indexes by tenant_id (e.g. in Milvus/Pinecone/Qdrant using partition keys: org_id == $orgId). Never allow the LLM to inspect documents across tenants. (2) Pre-Retrieval Authorization: Verify the candidate's session token and ensure the retrieval service only embeds and queries documents they own (resumes, interview history, approved curricula). (3) Inference Overload Recovery: Implement Priority Admission Queues at the scheduler. Assign traffic classes: Class A (Interactive Voice/Chat - highest priority, strict 500ms TTFT deadline), Class B (Mock Interview Evaluation - normal priority), Class C (Offline Batch Reports - lowest priority). When GPU VRAM approaches 90%, shed Class C jobs to asynchronous background queues, apply token-bucket rate limits, and stream graceful degradation messages without crashing active interviews.",
    },
  ];

  // ---------------------------------------------------------------------------
  // 5 HANDS-ON ASSIGNMENTS
  // ---------------------------------------------------------------------------
  const assignments = [
    {
      id: "as-1",
      title: "Assignment 1: Video Platform (VOD) Architecture & Delivery Design",
      objective:
        "Design a video-on-demand platform supporting 100,000 concurrent viewers, multi-resolution adaptive streaming, private courses, and asynchronous transcoding.",
      requirements: [
        "Calculate total daily bandwidth consumption and peak egress bitrates under realistic 1080p/720p distribution.",
        "Specify the upload session protocol using S3 pre-signed multipart uploads and SQS event triggers.",
        "Design the FFmpeg worker scaling policy based on queue backlog depth rather than CPU utilization.",
        "Define the ABR packaging schema for HLS (.m3u8 manifests + 6-second .ts segments).",
        "Architect security controls using Origin Shielding and CloudFront Signed Cookies for protected courses.",
      ],
      deliverable: "Architecture diagram, capacity math, HLS rendition ladder specification, and signed cookie policy.",
    },
    {
      id: "as-2",
      title: "Assignment 2: Ride-Hailing Geospatial Matching & Concurrency Engine",
      objective:
        "Design a city-level dispatch service with 50,000 online drivers streaming location updates every 5 seconds.",
      requirements: [
        "Calculate location-update throughput and network payload bandwidth across WebSocket gateways.",
        "Design an H3 hexagonal spatial indexing schema in Redis to search candidate drivers in <10ms.",
        "Specify the Compare-And-Swap (CAS) atomic database query preventing double-assignment races.",
        "Document the complete trip state machine including timeouts, driver rejections, and cancellations.",
        "Incorporate a Kalman map-matching filter to handle GPS noise in urban canyons.",
      ],
      deliverable: "Spatial indexing data model, atomic reservation sequence diagram, and state machine transition table.",
    },
    {
      id: "as-3",
      title: "Assignment 3: Multi-Provider Payment Platform & Double-Entry Ledger",
      objective:
        "Design a payment orchestration service processing 500 payment requests per second during peak placement season.",
      requirements: [
        "Specify client idempotency key generation, storage, and caching rules for ambiguous network timeouts.",
        "Design a secure webhook processor with cryptographic signature verification, deduplication, and out-of-order handling.",
        "Construct an immutable double-entry ledger schema enforcing Sum(Debits) - Sum(Credits) === 0.",
        "Define an automated end-of-day reconciliation algorithm matching provider settlement files with internal ledger entries.",
        "Detail dispute and partial refund workflows ensuring total refunds never exceed captured capital.",
      ],
      deliverable: "Payment state machine diagram, ledger schema, idempotency flowchart, and reconciliation runbook.",
    },
    {
      id: "as-4",
      title: "Assignment 4: Large-Scale AI Inference Platform & Scheduler",
      objective:
        "Design an AI serving platform receiving 100 requests per second with an average of 1,500 input tokens and 250 output tokens.",
      requirements: [
        "Calculate aggregate input and output token throughput and compute concurrent in-flight requests using Little's Law.",
        "Formulate KV-cache VRAM consumption and benchmark required GPU counts using continuous batching (vLLM).",
        "Design a deterministic Model Router classifying requests across fast classifiers, balanced coding models, and large reasoning LLMs.",
        "Architect hard tenant-isolated RAG retrieval pipelines preventing prompt injection cross-contamination.",
        "Define graceful degradation and priority queueing policies when GPU cluster VRAM reaches 90% saturation.",
      ],
      deliverable: "Inference capacity sizing worksheet, model routing policy, continuous batching scheduler architecture, and failure plan.",
    },
    {
      id: "as-5",
      title: "Assignment 5: Cross-System Architecture Decision Record (ADR)",
      objective:
        "Produce an end-to-end architecture review comparing all four systems on cost, latency, scalability, consistency, and operational complexity.",
      requirements: [
        "Create an architectural comparison matrix across Workload, Dominant Bottleneck, Critical Invariant, and Scaling Technique.",
        "Identify shared infrastructure components (Kafka, Redis, Envoy, S3) that can be unified without mixing business boundaries.",
        "Formulate test plans simulating critical failure scenarios: transcoding crash, 2-worker ride dispatch race, payment timeout, and GPU overload.",
        "Defend your choice of consistency models: where eventual consistency is acceptable vs where strict linearizability is non-negotiable.",
      ],
      deliverable: "A comprehensive Architecture Decision Record (ADR) with assumptions, failure tests, and trade-off defense.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900">
      <ModuleNav track="system-design" currentModuleId="advanced-case-studies" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20">
        {/* =====================================================================
            MODULE HERO / HEADER
            ===================================================================== */}
        <div className="mb-8 border-b border-stone-200 pb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-orange-600">
            <span>System Design Masterclass</span>
            <span>•</span>
            <span>Advanced Architecture</span>
            <span>•</span>
            <span>Weeks 47–50</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Module 23: Advanced System Design Case Studies — Video Platforms, Ride-Hailing, Payment Platforms, and Large-Scale AI Services
          </h1>
          <p className="mt-3 text-base text-stone-700 max-w-4xl leading-relaxed">
            Master the architecture of systems that coordinate millions of concurrent users, massive petabyte-scale media,
            physical geospatial logistics, strict financial transactions, and expensive AI accelerator clusters. Learn to defend
            trade-offs between media delivery, marketplace dispatch, ledger correctness, and GPU scheduling.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-white border border-stone-200 shadow-xs">
              <div className="flex items-center gap-2 text-xs text-stone-700">
                <Video className="w-3.5 h-3.5 text-red-600" />
                <span>Video Platform</span>
              </div>
              <div className="text-base font-bold text-stone-900 mt-1">450 TB/day · ABR HLS</div>
            </div>
            <div className="p-3 rounded-xl bg-white border border-stone-200 shadow-xs">
              <div className="flex items-center gap-2 text-xs text-stone-700">
                <Navigation className="w-3.5 h-3.5 text-emerald-600" />
                <span>Ride-Hailing</span>
              </div>
              <div className="text-base font-bold text-stone-900 mt-1">75k GPS/s · H3 Hexagon</div>
            </div>
            <div className="p-3 rounded-xl bg-white border border-stone-200 shadow-xs">
              <div className="flex items-center gap-2 text-xs text-stone-700">
                <CreditCard className="w-3.5 h-3.5 text-blue-600" />
                <span>Payment Platform</span>
              </div>
              <div className="text-base font-bold text-stone-900 mt-1">Idempotency · Ledger</div>
            </div>
            <div className="p-3 rounded-xl bg-white border border-stone-200 shadow-xs">
              <div className="flex items-center gap-2 text-xs text-stone-700">
                <Cpu className="w-3.5 h-3.5 text-purple-600" />
                <span>AI Service</span>
              </div>
              <div className="text-base font-bold text-stone-900 mt-1">60k t/s · Continuous Batch</div>
            </div>
          </div>

          {/* Main Navigation Tabs */}
          <div className="mt-6 flex flex-wrap items-center gap-2 border-b border-stone-200 pb-1">
            <button
              onClick={() => setActiveTab("curriculum")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "curriculum"
                  ? "bg-stone-900 text-white shadow-sm"
                  : "bg-white text-stone-600 border border-stone-200 hover:text-stone-900"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Curriculum (4 Deep Case Studies)
            </button>
            <button
              onClick={() => setActiveTab("simulators")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "simulators"
                  ? "bg-stone-900 text-white shadow-sm"
                  : "bg-white text-stone-600 border border-stone-200 hover:text-stone-900"
              }`}
            >
              <Workflow className="w-3.5 h-3.5" />
              Interactive Simulators
            </button>
            <button
              onClick={() => setActiveTab("qa")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "qa"
                  ? "bg-stone-900 text-white shadow-sm"
                  : "bg-white text-stone-600 border border-stone-200 hover:text-stone-900"
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              Senior Q&A (16 Questions)
            </button>
            <button
              onClick={() => setActiveTab("assignments")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "assignments"
                  ? "bg-stone-900 text-white shadow-sm"
                  : "bg-white text-stone-600 border border-stone-200 hover:text-stone-900"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              Assignments (5)
            </button>
            <button
              onClick={() => setActiveTab("assessment")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "assessment"
                  ? "bg-stone-900 text-white shadow-sm"
                  : "bg-white text-stone-600 border border-stone-200 hover:text-stone-900"
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              Knowledge Check (8)
            </button>
            <button
              onClick={() => setActiveTab("reading")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "reading"
                  ? "bg-stone-900 text-white shadow-sm"
                  : "bg-white text-stone-600 border border-stone-200 hover:text-stone-900"
              }`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Reading & Case References
            </button>
          </div>
        </div>

        {/* =====================================================================
            TAB 1: CURRICULUM
            ===================================================================== */}
        {activeTab === "curriculum" && (
          <div className="space-y-8">
            {/* Sub-lesson pill selector */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveLesson("23.1")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeLesson === "23.1"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-100"
                }`}
              >
                <Video className="w-3.5 h-3.5" />
                23.1 Video Platform
              </button>
              <button
                onClick={() => setActiveLesson("23.2")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeLesson === "23.2"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-100"
                }`}
              >
                <Navigation className="w-3.5 h-3.5" />
                23.2 Ride-Hailing
              </button>
              <button
                onClick={() => setActiveLesson("23.3")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeLesson === "23.3"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-100"
                }`}
              >
                <CreditCard className="w-3.5 h-3.5" />
                23.3 Payment Platform
              </button>
              <button
                onClick={() => setActiveLesson("23.4")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeLesson === "23.4"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-100"
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                23.4 Large-Scale AI Service
              </button>
              <button
                onClick={() => setActiveLesson("23.5")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeLesson === "23.5"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-100"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                23.5 Synthesis & Failure Scenarios
              </button>
            </div>

            {/* LESSON 23.1: VIDEO PLATFORM */}
            {activeLesson === "23.1" && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-800 mb-2">
                    <Video className="w-3.5 h-3.5 text-red-600" />
                    Case Study 1
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    High-Scale Video Platform (YouTube / Course Library Architecture)
                  </h2>
                  <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                    A video-on-demand platform must upload large raw video files, transcode them into multiple resolutions,
                    package them into adaptive streaming formats, and distribute them to millions of concurrent viewers globally.
                    On PrepSpaces, this powers recorded mock interviews, system design lectures, and tutorial libraries.
                  </p>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="text-xs font-semibold text-stone-700 uppercase tracking-wide">Daily Viewing Volume</div>
                      <div className="text-xl font-bold text-stone-900 mt-1">30,000,000 mins/day</div>
                      <div className="text-xs text-stone-700 mt-1">1M viewers × 30 mins average</div>
                    </div>
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="text-xs font-semibold text-stone-700 uppercase tracking-wide">Daily Bandwidth Egress</div>
                      <div className="text-xl font-bold text-red-600 mt-1">~450 TB / day</div>
                      <div className="text-xs text-stone-700 mt-1">At 2 Mbps average delivered bitrate</div>
                    </div>
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="text-xs font-semibold text-stone-700 uppercase tracking-wide">Dominant Workload</div>
                      <div className="text-xl font-bold text-stone-900 mt-1">Storage &amp; CDN Delivery</div>
                      <div className="text-xs text-stone-700 mt-1">Decoupled from compute-heavy transcoding</div>
                    </div>
                  </div>
                </div>

                {/* Architecture Stages */}
                <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
                  <h3 className="text-lg font-bold text-stone-900">5-Stage Video Ingestion &amp; Transcoding Pipeline</h3>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="font-bold text-stone-900 text-sm">1. S3 Pre-Signed Multipart Upload</div>
                      <p className="text-xs text-stone-700 mt-1.5 leading-relaxed">
                        Clients request an upload session from the API. The API returns a signed S3 multipart upload token.
                        Clients upload 10MB chunks directly to Amazon S3 object storage, keeping application web servers completely free from heavy file upload I/O.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="font-bold text-stone-900 text-sm">2. Event-Driven Transcoding Orchestrator</div>
                      <p className="text-xs text-stone-700 mt-1.5 leading-relaxed">
                        When upload finishes, S3 triggers an SQS event. Worker pods running containerized FFmpeg pull jobs from the queue.
                        Workers scale on queue backlog depth rather than CPU, ensuring burst uploads do not impact platform availability.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="font-bold text-stone-900 text-sm">3. Rendition Ladder (360p to 1080p)</div>
                      <p className="text-xs text-stone-700 mt-1.5 leading-relaxed">
                        The raw video is encoded into discrete bitrates: 360p (800 kbps), 480p (1.4 Mbps), 720p (2.8 Mbps), and 1080p (5.0 Mbps).
                        This ensures mobile users in low-bandwidth regions stream smoothly without buffering stalls.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="font-bold text-stone-900 text-sm">4. HLS / MPEG-DASH Packaging</div>
                      <p className="text-xs text-stone-700 mt-1.5 leading-relaxed">
                        Each rendition is sliced into 6-second media segments (.ts/.m4s) alongside index playlists (.m3u8).
                        A root master.m3u8 manifest provides the player with adaptive switching coordinates.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Embedded Simulator */}
                <VideoTranscodingPipelineDiagram />
              </div>
            )}

            {/* LESSON 23.2: RIDE-HAILING */}
            {activeLesson === "23.2" && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 mb-2">
                    <Navigation className="w-3.5 h-3.5 text-emerald-600" />
                    Case Study 2
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Real-Time Ride-Hailing Marketplace (Uber / Lyft Architecture)
                  </h2>
                  <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                    A ride-hailing system connects passengers with nearby drivers in real time. It blends high-throughput
                    geospatial location ingestion (75,000 GPS updates/second) with candidate discovery, routing ETA calculation,
                    and strict concurrency control to prevent double-assignment races.
                  </p>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="text-xs font-semibold text-stone-700 uppercase tracking-wide">Online Driver Fleet</div>
                      <div className="text-xl font-bold text-stone-900 mt-1">300,000 drivers</div>
                      <div className="text-xs text-stone-700 mt-1">Streaming GPS every 4 seconds</div>
                    </div>
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="text-xs font-semibold text-stone-700 uppercase tracking-wide">Location Ingest Throughput</div>
                      <div className="text-xl font-bold text-emerald-600 mt-1">75,000 updates / sec</div>
                      <div className="text-xs text-stone-700 mt-1">37.5 MB/s (~300 Mbps network payload)</div>
                    </div>
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="text-xs font-semibold text-stone-700 uppercase tracking-wide">Critical Invariant</div>
                      <div className="text-xl font-bold text-stone-900 mt-1">Zero Double-Assignment</div>
                      <div className="text-xs text-stone-700 mt-1">Enforced by atomic conditional reservation</div>
                    </div>
                  </div>
                </div>

                {/* Spatial Indexing & Concurrency */}
                <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
                  <h3 className="text-lg font-bold text-stone-900">H3 Geospatial Indexing &amp; Concurrency Control</h3>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="font-bold text-stone-900 text-sm">H3 Hexagonal Hierarchical Partitioning</div>
                      <p className="text-xs text-stone-700 mt-1.5 leading-relaxed">
                        Rather than scanning 300,000 drivers across a city, driver coordinates are mapped to H3 hexagonal cells.
                        Hexagons have the mathematical property that all 6 adjacent neighbors share identical center-to-center distances.
                        Nearby search executes by looking up the home cell and traversing concentric rings (k-rings) in Redis in &lt;5ms.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="font-bold text-stone-900 text-sm">Atomic Conditional Reservation (CAS)</div>
                      <p className="text-xs text-stone-700 mt-1.5 leading-relaxed">
                        When two dispatch workers pick the same driver simultaneously, concurrency control prevents duplicate booking.
                        The database executes: <code className="bg-stone-200 px-1 py-0.5 rounded text-[11px]">UPDATE drivers SET status=&apos;RESERVED&apos; WHERE id=$1 AND status=&apos;AVAILABLE&apos;</code>.
                        Only 1 worker receives &quot;1 row updated&quot;. The second worker receives &quot;0 rows updated&quot; and retries candidate #2.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Embedded Simulator */}
                <RideHailingDispatchDiagram />
              </div>
            )}

            {/* LESSON 23.3: PAYMENT PLATFORM */}
            {activeLesson === "23.3" && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-2">
                    <CreditCard className="w-3.5 h-3.5 text-blue-600" />
                    Case Study 3
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    High-Integrity Payment Platform (Stripe / Razorpay Architecture)
                  </h2>
                  <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                    Payment platforms require mathematical precision, auditability, and absolute resilience against network
                    timeouts. A network timeout does NOT mean a charge failed; it means the outcome is unknown. Architecture
                    must be built around client idempotency keys, durable payment state machines, and double-entry accounting ledgers.
                  </p>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="text-xs font-semibold text-stone-700 uppercase tracking-wide">Critical Invariant</div>
                      <div className="text-xl font-bold text-blue-600 mt-1">Zero Duplicate Charges</div>
                      <div className="text-xs text-stone-700 mt-1">Enforced by client idempotency keys</div>
                    </div>
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="text-xs font-semibold text-stone-700 uppercase tracking-wide">Accounting Rule</div>
                      <div className="text-xl font-bold text-stone-900 mt-1">Double-Entry Ledger</div>
                      <div className="text-xs text-stone-700 mt-1">Sum(Debits) - Sum(Credits) === 0</div>
                    </div>
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="text-xs font-semibold text-stone-700 uppercase tracking-wide">Timeout Recovery</div>
                      <div className="text-xl font-bold text-stone-900 mt-1">Reconcile, Don&apos;t Re-Charge</div>
                      <div className="text-xs text-stone-700 mt-1">Provider lookup &amp; signed webhooks</div>
                    </div>
                  </div>
                </div>

                {/* Idempotency & Double-Entry Ledger Principles */}
                <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
                  <h3 className="text-lg font-bold text-stone-900">Idempotency &amp; Financial Ledger Architecture</h3>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="font-bold text-stone-900 text-sm">Idempotency Key Protocol</div>
                      <p className="text-xs text-stone-700 mt-1.5 leading-relaxed">
                        Clients generate a unique header: <code className="bg-stone-200 px-1 py-0.5 rounded text-[11px]">Idempotency-Key: order_1001_attempt_1</code>.
                        The payment service records the key in an ACID database with a unique constraint. If network instability causes the client to retry,
                        the server detects the duplicate key, looks up the cached original response, and returns it immediately without issuing a secondary charge.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="font-bold text-stone-900 text-sm">Double-Entry Ledger Invariant</div>
                      <p className="text-xs text-stone-700 mt-1.5 leading-relaxed">
                        Never mutate a user balance directly with code like <code className="bg-stone-200 px-1 py-0.5 rounded text-[11px]">balance += 2500</code>.
                        Every transaction produces paired, immutable journal entries (Debit Provider Clearing Asset ₹2,500 / Credit Merchant Payable Liability ₹2,500).
                        Balances are derived, verifiable, and immune to race conditions or silent data corruption.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Embedded Simulator */}
                <PaymentStateLedgerDiagram />
              </div>
            )}

            {/* LESSON 23.4: LARGE-SCALE AI SERVICE */}
            {activeLesson === "23.4" && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 mb-2">
                    <Cpu className="w-3.5 h-3.5 text-purple-600" />
                    Case Study 4
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Large-Scale AI Inference Service (PrepSpaces Nova / vLLM Architecture)
                  </h2>
                  <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                    AI model serving is constrained by expensive GPU memory bandwidth, variable token generation lengths, and
                    KV-cache allocation. Unlike stateless web servers, 50 requests/second requiring 1,200 input tokens and 300
                    output tokens generates 60,000 input tokens/second and 15,000 output tokens/second, requiring continuous batching
                    and intelligent model routing.
                  </p>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="text-xs font-semibold text-stone-700 uppercase tracking-wide">Input Token Demand</div>
                      <div className="text-xl font-bold text-stone-900 mt-1">60,000 tokens / sec</div>
                      <div className="text-xs text-stone-700 mt-1">50 RPS × 1,200 avg input prompt</div>
                    </div>
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="text-xs font-semibold text-stone-700 uppercase tracking-wide">Output Token Demand</div>
                      <div className="text-xl font-bold text-purple-600 mt-1">15,000 tokens / sec</div>
                      <div className="text-xs text-stone-700 mt-1">50 RPS × 300 avg generated tokens</div>
                    </div>
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="text-xs font-semibold text-stone-700 uppercase tracking-wide">Concurrency in Flight</div>
                      <div className="text-xl font-bold text-stone-900 mt-1">~200 requests</div>
                      <div className="text-xs text-stone-700 mt-1">Little&apos;s Law: L = 50 RPS × 4.0s latency</div>
                    </div>
                  </div>
                </div>

                {/* Continuous Batching & Model Routing */}
                <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
                  <h3 className="text-lg font-bold text-stone-900">Continuous Batching &amp; Model Routing Strategy</h3>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="font-bold text-stone-900 text-sm">Continuous Batching (Iteration-Level Scheduling)</div>
                      <p className="text-xs text-stone-700 mt-1.5 leading-relaxed">
                        Static batching forces the GPU to idle while waiting for the slowest generation to complete.
                        Continuous batching (vLLM / PagedAttention) evaluates batch membership at every individual token step.
                        Completed sequences are evicted and waiting requests are admitted immediately, boosting GPU throughput 3-4x.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="font-bold text-stone-900 text-sm">Tiered Model Routing (Cost vs Quality)</div>
                      <p className="text-xs text-stone-700 mt-1.5 leading-relaxed">
                        Route incoming workloads dynamically: use micro-models (1B-3B) for fast intent classification and syntax checks,
                        balanced models (8B-14B) for code explanations, and reserve large reasoning models (70B+) strictly for comprehensive
                        mock interview grading. This reduces cluster operating costs by over 65%.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Embedded Simulator */}
                <AIServiceSchedulerDiagram />
              </div>
            )}

            {/* LESSON 23.5: SYNTHESIS & FAILURE SCENARIOS */}
            {activeLesson === "23.5" && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-stone-800 text-stone-100 mb-2">
                    <Layers className="w-3.5 h-3.5 text-stone-300" />
                    Comparative Synthesis
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Comparing All Four Advanced Architectures
                  </h2>
                  <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                    Senior and Staff engineers are defined by their ability to recognize that no single architecture fits all workloads.
                    Each system optimizes around a different fundamental invariant and scaling dimension.
                  </p>

                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-xs text-left text-stone-700 border border-stone-200 rounded-xl overflow-hidden">
                      <thead className="bg-stone-100 text-stone-900 font-bold uppercase tracking-wider text-[11px]">
                        <tr>
                          <th className="p-3 border-b">Design</th>
                          <th className="p-3 border-b">Dominant Workload</th>
                          <th className="p-3 border-b">Primary Bottleneck</th>
                          <th className="p-3 border-b">Critical Invariant</th>
                          <th className="p-3 border-b">Main Scaling Technique</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200 bg-white">
                        <tr>
                          <td className="p-3 font-bold text-red-600">Video Platform</td>
                          <td className="p-3">Large media uploads &amp; streaming reads</td>
                          <td className="p-3">Bandwidth, storage, transcoding</td>
                          <td className="p-3">Published content complete &amp; authorized</td>
                          <td className="p-3">Object storage, CDN, async worker pools</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-emerald-600">Ride-Hailing</td>
                          <td className="p-3">Location streams &amp; real-time dispatch</td>
                          <td className="p-3">Geospatial queries, matching latency</td>
                          <td className="p-3">No driver assigned to conflicting active trips</td>
                          <td className="p-3">H3 spatial indexing, atomic CAS assignment</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-blue-600">Payment Platform</td>
                          <td className="p-3">Transactions &amp; async financial updates</td>
                          <td className="p-3">Provider latency, consistency, reconciliation</td>
                          <td className="p-3">Zero duplicate charges or silent money loss</td>
                          <td className="p-3">Idempotency, durable state machine, double-entry ledger</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-purple-600">Large-Scale AI Service</td>
                          <td className="p-3">Token generation &amp; RAG retrieval</td>
                          <td className="p-3">GPU memory, token throughput, queueing</td>
                          <td className="p-3">Tenant isolation &amp; bounded latency SLA</td>
                          <td className="p-3">Continuous batching, model routing, admission control</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 4 Critical Failure Scenarios */}
                <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
                  <h3 className="text-lg font-bold text-stone-900">4 Failure Scenarios Every System Designer Must Master</h3>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="font-bold text-red-700">1. Video: Transcoding Worker Crashes Midway</div>
                      <p className="text-stone-700 mt-1 leading-relaxed">
                        The video record stays in PROCESSING state. SQS visibility timeout expires, placing the job back on the queue.
                        A new worker resumes from staging. The catalog API strictly filters WHERE status = &apos;PUBLISHED&apos;, ensuring incomplete renditions never leak to viewers.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="font-bold text-emerald-700">2. Ride-Hailing: 2 Dispatch Workers Pick Same Driver</div>
                      <p className="text-stone-700 mt-1 leading-relaxed">
                        Both workers read driver as AVAILABLE. Both execute CAS reservation query. Database row-level locks serialize the write:
                        Worker A succeeds (1 row updated); Worker B fails (0 rows updated) and immediately retries the next best candidate. Zero double-booking.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="font-bold text-blue-700">3. Payments: Provider Succeeds but Response Drops</div>
                      <p className="text-stone-700 mt-1 leading-relaxed">
                        Never assume timeout === failure. Payment stays in PROCESSING. The application issues an idempotent GET query using the same Idempotency-Key
                        or awaits verified provider webhooks to confirm the debit before updating the ledger.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="font-bold text-purple-700">4. AI Service: GPU VRAM Approaches Exhaustion</div>
                      <p className="text-stone-700 mt-1 leading-relaxed">
                        The scheduler applies admission control. Class A (Live Voice/Chat) requests proceed; Class C (Offline Batch Reports) are deferred to queues.
                        PagedAttention defragments KV cache, and model router downgrades secondary tasks to lighter model tiers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* =====================================================================
            TAB 2: SIMULATORS & DIAGRAMS
            ===================================================================== */}
        {activeTab === "simulators" && (
          <div className="space-y-8">
            <VideoTranscodingPipelineDiagram />
            <RideHailingDispatchDiagram />
            <PaymentStateLedgerDiagram />
            <AIServiceSchedulerDiagram />
          </div>
        )}

        {/* =====================================================================
            TAB 3: SENIOR Q&A (16 QUESTIONS)
            ===================================================================== */}
        {activeTab === "qa" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-800 mb-2">
                <HelpCircle className="w-3.5 h-3.5 text-orange-600" />
                Senior System Design Interview Bank
              </div>
              <h3 className="text-xl font-bold text-stone-900">
                16 Senior System Design Interview Questions &amp; Architectural Model Answers
              </h3>
              <p className="mt-1 text-xs text-stone-700 leading-relaxed">
                Learn how Principal and Staff Engineers dissect advanced interview questions across Video Streaming, Ride-Hailing, Payment Platforms, and AI Serving.
              </p>
            </div>

            <div className="space-y-3">
              {interviewQuestions.map((item, idx) => {
                const isExpanded = expandedQA[item.id];
                return (
                  <div key={item.id} className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs transition-all">
                    <button
                      onClick={() => toggleQA(item.id)}
                      className="w-full text-left flex items-start justify-between gap-4"
                    >
                      <div>
                        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-1.5 bg-stone-100 text-stone-700">
                          {item.topic}
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-stone-900 leading-snug">
                          {idx + 1}. {item.q}
                        </h4>
                      </div>
                      <div className="p-1 rounded-lg bg-stone-100 text-stone-600 shrink-0 mt-1">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-stone-100 text-xs sm:text-sm text-stone-700 leading-relaxed">
                        <div className="p-4 rounded-xl bg-[#faf8f4] border border-stone-200">
                          <p className="whitespace-pre-line">{item.a}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 4: ASSIGNMENTS (5)
            ===================================================================== */}
        {activeTab === "assignments" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 mb-2">
                <FileText className="w-3.5 h-3.5 text-emerald-600" />
                Practice Portfolio
              </div>
              <h3 className="text-xl font-bold text-stone-900">
                5 Complete Hands-On System Design Assignments
              </h3>
              <p className="mt-1 text-xs text-stone-700 leading-relaxed">
                Design and document complete enterprise-grade solutions with explicit capacity math, data schemas, API specifications, and failure runbooks.
              </p>
            </div>

            <div className="space-y-4">
              {assignments.map((asg) => (
                <div key={asg.id} className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="text-base font-bold text-stone-900">{asg.title}</h4>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-stone-100 text-stone-700">
                      Deliverable Required
                    </span>
                  </div>
                  <p className="text-xs text-stone-700 font-medium mb-3">{asg.objective}</p>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 mb-4">
                    <div className="text-xs font-bold text-stone-900 mb-2">Architecture Requirements:</div>
                    <ul className="text-xs text-stone-700 space-y-1.5 list-disc list-inside">
                      {asg.requirements.map((req, rIdx) => (
                        <li key={rIdx}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-orange-600">
                    <CheckCircle2 className="w-4 h-4 text-orange-600" />
                    <span>Expected Deliverable: {asg.deliverable}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 5: KNOWLEDGE CHECK (8 QUESTIONS)
            ===================================================================== */}
        {activeTab === "assessment" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-800 mb-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" />
                Interactive Assessment
              </div>
              <h3 className="text-xl font-bold text-stone-900">
                Interactive Knowledge Check (8 Questions)
              </h3>
              <p className="mt-1 text-xs text-stone-700">
                Test your mastery of Video Platforms, Ride-Hailing, Payment Systems, and AI Serving.
              </p>

              {quizSubmitted && (
                <div
                  className={`mt-4 p-4 rounded-xl border flex items-center justify-between ${
                    score >= 6
                      ? "bg-emerald-50 border-emerald-300 text-emerald-900"
                      : "bg-amber-50 border-amber-300 text-amber-900"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {score >= 6 ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                    )}
                    <div>
                      <div className="font-bold text-sm">
                        Score: {score} / {quizQuestions.length} ({Math.round((score / quizQuestions.length) * 100)}%)
                      </div>
                      <div className="text-xs mt-0.5">
                        {score >= 6
                          ? "Outstanding! You possess deep senior-level mastery of advanced distributed systems."
                          : "Review the question explanations below to reinforce key concepts."}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleResetQuiz}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-stone-300 text-stone-700 hover:bg-stone-50"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Reset Quiz
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-4">
              {quizQuestions.map((q) => {
                const selected = selectedAnswers[q.id];
                const isAnswered = selected !== undefined;
                const isCorrect = isAnswered && selected === q.correctIndex;

                return (
                  <div
                    key={q.id}
                    className={`p-6 rounded-2xl bg-white border shadow-xs transition-all ${
                      quizSubmitted
                        ? isCorrect
                          ? "border-emerald-300 bg-emerald-50/20"
                          : "border-rose-300 bg-rose-50/20"
                        : "border-stone-200"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="text-sm sm:text-base font-bold text-stone-900 leading-snug">
                        {q.question}
                      </h4>
                      {quizSubmitted && (
                        <div className="shrink-0">
                          {isCorrect ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                              Correct
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-100 text-rose-800">
                              <XCircle className="w-3.5 h-3.5 text-rose-600" />
                              Incorrect
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="mt-4 space-y-2">
                      {q.options.map((option, optIdx) => {
                        const isThisSelected = selected === optIdx;
                        let optionStyle = "border-stone-200 hover:bg-stone-50 text-stone-700";

                        if (quizSubmitted) {
                          if (optIdx === q.correctIndex) {
                            optionStyle = "border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold";
                          } else if (isThisSelected && !isCorrect) {
                            optionStyle = "border-rose-500 bg-rose-50 text-rose-900";
                          } else {
                            optionStyle = "border-stone-200 text-stone-700 opacity-60";
                          }
                        } else if (isThisSelected) {
                          optionStyle = "border-orange-600 bg-orange-50 text-orange-900 font-semibold";
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() => handleSelectAnswer(q.id, optIdx)}
                            disabled={quizSubmitted}
                            className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm flex items-center justify-between transition-all ${optionStyle}`}
                          >
                            <span>{option}</span>
                            <div
                              className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-3 ${
                                isThisSelected
                                  ? "border-orange-600 bg-orange-600 text-white"
                                  : "border-stone-300"
                              }`}
                            >
                              {isThisSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className="mt-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700">
                        <strong className="text-stone-900">Explanation: </strong>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {!quizSubmitted && (
              <div className="flex justify-end">
                <button
                  onClick={handleScoreQuiz}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold bg-orange-600 text-white hover:bg-orange-700 transition-colors shadow-sm"
                >
                  Submit Assessment
                </button>
              </div>
            )}
          </div>
        )}

        {/* =====================================================================
            TAB 6: RECOMMENDED TECHNICAL READING
            ===================================================================== */}
        {activeTab === "reading" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-2">
                <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                Industry Case References
              </div>
              <h3 className="text-xl font-bold text-stone-900">
                Recommended Technical Reading &amp; Real-World Production References
              </h3>
              <p className="mt-1 text-xs text-stone-700 leading-relaxed">
                Explore foundational engineering documentation published by the creators of AWS Video-on-Demand, Uber Geospatial Dispatch, Stripe Ledgers, and vLLM.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-red-100 text-red-800 mb-2">
                    <Video className="w-3 h-3 text-red-600" />
                    AWS Architecture
                  </div>
                  <h4 className="text-base font-bold text-stone-900">
                    Video-on-Demand on AWS
                  </h4>
                  <p className="text-xs text-stone-700 mt-2 leading-relaxed">
                    Study ingestion, transcoding, metadata workflows, packaged media, object storage, and CloudFront CDN delivery.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-stone-100">
                  <a
                    href="https://docs.aws.amazon.com/solutions/latest/video-on-demand-on-aws/architecture-overview.html"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800 transition-colors"
                  >
                    Read AWS Video Architecture Guide <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 mb-2">
                    <Navigation className="w-3 h-3 text-emerald-600" />
                    Uber Engineering
                  </div>
                  <h4 className="text-base font-bold text-stone-900">
                    Routing and Geospatial Engineering
                  </h4>
                  <p className="text-xs text-stone-700 mt-2 leading-relaxed">
                    Explore ETA prediction, geographic data partitioning, map matching, and ride-matching algorithms using H3 hexagons.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-2">
                  <a
                    href="https://www.uber.com/us/en/blog/engineering-routing-engine/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800 transition-colors"
                  >
                    Routing Engine <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://www.uber.com/in/en/blog/maps-metrics-computation/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800 transition-colors"
                  >
                    Geospatial Maps <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-800 mb-2">
                    <CreditCard className="w-3 h-3 text-blue-600" />
                    Stripe Engineering
                  </div>
                  <h4 className="text-base font-bold text-stone-900">
                    Idempotency, PaymentIntents &amp; Ledger
                  </h4>
                  <p className="text-xs text-stone-700 mt-2 leading-relaxed">
                    Study safe request retries, payment-state transitions, double-entry bookkeeping, and predictable payment APIs.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-stone-100 flex flex-wrap gap-2">
                  <a
                    href="https://docs.stripe.com/api/idempotent_requests"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800 transition-colors"
                  >
                    Idempotency <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://stripe.com/blog/ledger-stripe-system-for-tracking-and-validating-money-movement"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800 transition-colors"
                  >
                    Ledger Architecture <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-purple-100 text-purple-800 mb-2">
                    <Cpu className="w-3 h-3 text-purple-600" />
                    vLLM Project
                  </div>
                  <h4 className="text-base font-bold text-stone-900">
                    Large-Scale AI Inference Serving
                  </h4>
                  <p className="text-xs text-stone-700 mt-2 leading-relaxed">
                    Learn continuous batching, PagedAttention memory management, quantization, prefix caching, and high-throughput LLM deployment.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-stone-100">
                  <a
                    href="https://docs.vllm.ai/en/latest/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800 transition-colors"
                  >
                    Explore vLLM Documentation <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =====================================================================
            MODULE COMPLETION BANNER
            ===================================================================== */}
        <div className="mt-12 p-6 rounded-2xl bg-[#faf8f4] border border-stone-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 mb-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Module 23 Completion Criteria Met
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                You Have Mastered Advanced System Design Case Studies
              </h3>
              <p className="text-xs text-stone-700 mt-1 max-w-2xl leading-relaxed">
                You can independently design video streaming architectures, ride-hailing geospatial dispatchers,
                auditable double-entry payment platforms, and continuous batching AI serving schedulers.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => navigate("/learning/system-design/case-studies")}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-white border border-stone-300 text-stone-700 hover:bg-stone-100 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Previous: Module 22 (Case Studies)
              </button>
              <button
                onClick={() => navigate("/learning/system-design/capstone")}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-orange-600 text-white hover:bg-orange-700 transition-colors shadow-sm"
              >
                Next: Module 24 (Final Capstone)
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
