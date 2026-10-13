import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Activity,
  Zap,
  Radio,
  Wifi,
  WifiOff,
  Server,
  Layers,
  Database,
  ArrowRight,
  ArrowLeft,
  RefreshCw,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Monitor,
  Smartphone,
  Send,
  Cpu,
  Clock,
  Info,
  Shield,
  MessageSquare,
  BookOpen,
  Sliders,
  HelpCircle,
  Workflow,
  Globe,
  FileText,
  Compass,
  SlidersHorizontal,
  ExternalLink,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import {
  TransportComparisonDiagram,
  PresenceLeaseDiagram,
  MultiNodeWebSocketDiagram,
  default as VisualDiagramComponentModule19,
} from "./SystemDesignRealtimeDiagrams";

export default function SystemDesignRealtime() {
  const navigate = useNavigate();

  // Navigation tab state
  const [activeTab, setActiveTab] = useState("curriculum"); // "curriculum" | "simulators" | "qa" | "assignments" | "assessment" | "reading"
  const [activeWeek, setActiveWeek] = useState(1); // 1 | 2 (Week 37 | Week 38)
  const [activeLesson, setActiveLesson] = useState("19.1");

  // Expanded Q&A accordion states (15 Senior Interview Questions)
  const [expandedQA, setExpandedQA] = useState({ "qa-1": true });
  const toggleQA = (id) => {
    setExpandedQA((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // ---------------------------------------------------------------------------
  // INTERACTIVE CAPACITY PLANNING CALCULATOR STATE
  // ---------------------------------------------------------------------------
  const [concurrentUsers, setConcurrentUsers] = useState(10000);
  const [clientMsgsPerSec, setClientMsgsPerSec] = useState(0.2);
  const [serverMsgsPerSec, setServerMsgsPerSec] = useState(0.5);
  const [payloadSizeKb, setPayloadSizeKb] = useState(1.0);
  const [headroomPct, setHeadroomPct] = useState(30);
  const [maxConnsPerNode, setMaxConnsPerNode] = useState(2000);
  const [socketRamKb, setSocketRamKb] = useState(25); // ~25 KB per socket buffer

  // Math computations
  const clientInboundRps = Math.round(concurrentUsers * clientMsgsPerSec);
  const serverOutboundRps = Math.round(concurrentUsers * serverMsgsPerSec);
  const payloadMbPerSec = (serverOutboundRps * payloadSizeKb) / 1000;
  const rawBandwidthMbps = payloadMbPerSec * 8;
  const provisionedBandwidthMbps = (rawBandwidthMbps * (1 + headroomPct / 100)).toFixed(1);
  const totalRamGb = ((concurrentUsers * socketRamKb) / (1024 * 1024)).toFixed(2);
  const estimatedNodes = Math.ceil(concurrentUsers / maxConnsPerNode);

  // ---------------------------------------------------------------------------
  // ASSESSMENT QUIZ STATE (7 QUESTIONS MATCHING PROMPT VERBATIM)
  // ---------------------------------------------------------------------------
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: "q1",
      question: "1. Which transport is best suited for persistent bidirectional communication?",
      options: [
        "Short polling only",
        "WebSockets",
        "A static HTML page",
        "A database index",
      ],
      correctIndex: 1,
      explanation:
        "WebSockets provide full-duplex, persistent TCP connections with minimal 2–10 byte framing overhead, making them ideal for bidirectional communication like live code editors and chat.",
    },
    {
      id: "q2",
      question: "2. What is an important limitation of Redis Pub/Sub?",
      options: [
        "It requires a relational table for every message",
        "Disconnected subscribers can miss published messages",
        "It cannot broadcast to multiple subscribers",
        "It guarantees replay after reconnection",
      ],
      correctIndex: 1,
      explanation:
        "Redis Pub/Sub is 'fire-and-forget'. It does not retain message history or buffer messages for offline or temporarily disconnected subscribers. Redis Streams or a durable database queue is required for retention and replay.",
    },
    {
      id: "q3",
      question: "3. How should a user with three active browser connections be represented in a presence system?",
      options: [
        "As offline whenever any one connection disconnects",
        "As online only if every connection sends the same heartbeat",
        "By tracking individual connections and aggregating their active states",
        "By storing a permanent online flag",
      ],
      correctIndex: 2,
      explanation:
        "A presence system should maintain a connection set (e.g. Redis Set `user:{id}:sockets`). The user is marked Online if any eligible connection is active, and only transitions to Offline when the connection count reaches zero.",
    },
    {
      id: "q4",
      question: "4. What is the primary purpose of a durable notification record?",
      options: [
        "To replace authentication",
        "To guarantee a WebSocket is always connected",
        "To preserve notification history across disconnections",
        "To prevent all duplicate messages automatically",
      ],
      correctIndex: 2,
      explanation:
        "Transient WebSocket frames are lost if a user is offline. Storing notifications durably in a database guarantees history preservation, unread counts, and resynchronization upon reconnection.",
    },
    {
      id: "q5",
      question: "5. What should happen before subscribing a socket to a private interview room?",
      options: [
        "Trust the room name supplied by the client",
        "Verify the connection's permission to access that interview",
        "Disable message validation",
        "Check only whether the user has a valid IP address",
      ],
      correctIndex: 1,
      explanation:
        "Room names must never act as secret capabilities. The server must verify authentication, tenant tenancy, and specific permission before allowing a socket to join a private room like `interview:5001`.",
    },
    {
      id: "q6",
      question: "6. Why do systems use bounded outbound queues?",
      options: [
        "To make message payloads unlimited",
        "To prevent slow clients from causing unbounded memory growth",
        "To make network failures impossible",
        "To ensure all events are globally ordered",
      ],
      correctIndex: 1,
      explanation:
        "If a client's network slows down while the server produces events rapidly, unbounded socket buffering consumes memory until the server crashes with an Out-Of-Memory (OOM) error. Bounded queues enforce backpressure.",
    },
    {
      id: "q7",
      question: "7. What is a common recovery strategy after a client reconnects?",
      options: [
        "Assume all events were received",
        "Disable authorization for replay",
        "Resynchronize authoritative state or replay retained events from a cursor",
        "Replay every event ever created without limits",
      ],
      correctIndex: 2,
      explanation:
        "Upon reconnecting, the client either passes its last acknowledged cursor to replay missed events from a bounded buffer, or fetches the authoritative current state via REST/GraphQL to reconcile missed updates.",
    },
  ];

  const handleSelectOption = (qId, optionIdx) => {
    if (quizSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score++;
      }
    });
    return score;
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
  };

  // ---------------------------------------------------------------------------
  // 15 SENIOR SYSTEM DESIGN INTERVIEW QUESTIONS & ARCHITECTURAL ANSWERS
  // ---------------------------------------------------------------------------
  const interviewQuestions = [
    {
      id: "qa-1",
      question: "1. How do WebSockets differ from SSE and long polling?",
      summary: "Comparison of full-duplex TCP framing vs. text streams vs. hanging HTTP requests.",
      answer: `• WebSockets (RFC 6455): Provides full-duplex, bidirectional communication over a persistent TCP connection initiated via an HTTP 101 Switching Protocols upgrade. Framing overhead is minimal (2–10 bytes). Ideal for interactive, low-latency, bidirectional apps (collaborative editors, games, chat).
• Server-Sent Events (SSE): Unidirectional server-to-client streaming over standard HTTP/1.1 or HTTP/2 using the 'text/event-stream' content-type. Native browser support with automatic reconnection and Last-Event-ID headers. Ideal for live dashboards, AI token streams, and notification bells.
• Long Polling: Half-duplex workaround where client sends an HTTP GET, server holds request open until data arrives or timeout expires, responds, and client immediately re-polls. High CPU and network overhead due to repeating full HTTP headers (~800 bytes) on every event.`,
    },
    {
      id: "qa-2",
      question: "2. How would you support 100,000 persistent connections across multiple servers?",
      summary: "Kernel tuning, file descriptors, memory per socket, and L4/L7 load balancing.",
      answer: `To support 100,000 persistent connections:
1. Kernel & OS Tuning: Increase file descriptor limits (ulimit -n 1048576) and tune TCP sysctl parameters: decrease tcp_fin_timeout, increase somaxconn and net.ipv4.ip_local_port_range, and tune tcp_rmem / tcp_wmem to prevent excessive socket memory allocation.
2. Memory Sizing: At ~25 KB RAM per open socket (kernel TCP buffers + runtime socket objects), 100,000 connections require ~2.5 GB RAM purely for connection state.
3. Horizontal Sharding: Distribute connections across 20–50 lightweight nodes (e.g. Node.js with ws, Go with gorilla/websocket, or Elixir/Phoenix).
4. Load Balancing: Place Layer 7 load balancers (AWS ALB, NGINX, HAProxy) in front with sticky sessions or L4 TCP proxying, offloading TLS termination.`,
    },
    {
      id: "qa-3",
      question: "3. How do you route an event to a user connected to a different server instance?",
      summary: "Pub/Sub backplane routing using Redis, RabbitMQ, or NATS.",
      answer: `When User A on Server 1 sends a message to User B connected to Server 2:
1. Centralized Routing Backplane: Every WebSocket server subscribes to a message broker (such as Redis Pub/Sub, RabbitMQ, or NATS).
2. Channel Partitioning: Servers listen to topics corresponding to active user IDs or room IDs (e.g. 'user:user_b' or 'room:interview_5001').
3. Flow: Server 1 publishes the event to Redis channel 'user:user_b'. Server 2 receives the Redis broadcast, checks its local memory map for User B's active socket descriptor, and writes the frame directly to User B's TCP socket.`,
    },
    {
      id: "qa-4",
      question: "4. What are the trade-offs between Redis Pub/Sub and a durable message stream (Redis Streams / Kafka)?",
      summary: "Transient fire-and-forget vs. durable offsets and consumer replay.",
      answer: `• Redis Pub/Sub:
  - Pros: Nanosecond in-memory latency, zero disk I/O, negligible RAM footprint (messages not stored).
  - Cons: At-most-once delivery. If Server 2 restarts or the network drops during publication, the message is permanently lost. Cannot replay missed events.
• Durable Streams (Redis Streams / Kafka):
  - Pros: At-least-once delivery, durable commit logs, consumer group offsets, and ability to replay from a specific message ID/timestamp after client reconnects.
  - Cons: Requires storage management, retention policies, checkpointing, and slightly higher serialization latency.
Recommendation: Use Redis Pub/Sub for transient ephemeral fan-out (typing indicators, presence cursor updates). Use Redis Streams or Kafka for interview actions, submitted answers, and durable notifications.`,
    },
    {
      id: "qa-5",
      question: "5. How would you design presence that remains accurate enough when users disconnect unexpectedly?",
      summary: "Heartbeat leases with TTLs, multi-device aggregation, and jittered pings.",
      answer: `1. Time-Bounded Leases: Never rely on database flags (users.is_online = true). If a client crashes or loses Wi-Fi, no clean TCP FIN is sent. Instead, store presence as an expiring lease: SET presence:user:101 'online' EX 60.
2. Heartbeat Ping/Pong: Clients send a ping every 20s. Server responds with pong and executes EXPIRE presence:user:101 60.
3. Multi-Tab Aggregation: Users often open multiple browser tabs or devices. Store active sockets in a Redis Set (user:101:sockets). The user is considered ONLINE as long as SCARD > 0 and lease TTL > 0.
4. Jitter: Randomize client ping intervals (e.g. 20s ± 3s) to prevent synchronized heartbeat stampedes.`,
    },
    {
      id: "qa-6",
      question: "6. How should a client recover after being offline for five minutes?",
      summary: "State resynchronization vs. event log replay from a cursor.",
      answer: `Depending on the business criticality of the missed events:
1. Reconnection & Auth: Client reconnects with exponential backoff and presents auth token and last acknowledged cursor: { lastEventId: 1045 }.
2. Replay Strategy (Short Disconnect): If the server maintains an in-memory or Redis ring buffer and lastEventId is within retention (e.g. last 100 events), stream the delta: events 1046–1052.
3. Full Resync Strategy (Long Disconnect): If the client was offline for 5 minutes, event buffers have expired. The server responds with a 'RESYNC_REQUIRED' code. The client issues an authoritative REST/GraphQL query (e.g. GET /api/v1/interviews/5001/snapshot), resets local state, and attaches to the live WebSocket stream.`,
    },
    {
      id: "qa-7",
      question: "7. How do you handle duplicate or out-of-order messages?",
      summary: "Per-entity monotonic sequence numbers, idempotent message IDs, and client dedup buffers.",
      answer: `1. Monotonic Sequence Numbers: Assign an incremental sequence ID per room or entity (e.g. room_5001_seq: 14, 15, 16). Clients buffer out-of-order messages and wait for missing sequence numbers before rendering.
2. Idempotency Keys: Every client-generated command includes a unique client-generated UUID (idempotency_key). The server records processed IDs in Redis with a 24h TTL; duplicate submissions return the original cached response without re-executing logic.
3. Logical Clocks: Never rely on raw client wall-clock timestamps for message ordering, as device clocks drift significantly. Use server-assigned sequence numbers or Lamport timestamps.`,
    },
    {
      id: "qa-8",
      question: "8. How do you prevent slow WebSocket consumers from exhausting server memory?",
      summary: "Bounded outbound buffers, backpressure signaling, and drop/coalesce policies.",
      answer: `1. Bounded Send Buffers: Set a hard limit on each socket's outbound queue (e.g. max 100 messages or 2 MB buffer).
2. Dropping Ephemeral Updates: If the buffer exceeds 50%, immediately drop transient non-critical events like cursor movements, typing indicators, or audio volume meters.
3. Coalescing Updates: For numerical metrics (e.g. candidate score, elapsed timer), overwrite pending updates with the newest value rather than appending.
4. Disconnect Poison Sockets: If a slow consumer exceeds the buffer threshold despite drops, cleanly terminate the socket (Code 1008 Policy Violation / Backpressure Overload) to preserve node stability.`,
    },
    {
      id: "qa-9",
      question: "9. How would you design a notification system that supports unread counts, push delivery, retries, and durable history?",
      summary: "PostgreSQL outbox + Redis pub/sub push + Web Push + Idempotent sync API.",
      answer: `1. Durable Storage: Notifications are written to a PostgreSQL table ('notifications': id, tenant_id, user_id, type, payload, read_at, created_at).
2. Transactional Outbox: Persist the notification in the same DB transaction as the business event to guarantee zero lost notifications.
3. Live Fan-out: An outbox worker publishes the event to Redis Pub/Sub. Connected WebSocket nodes push the event to online clients and increment the client badge.
4. Fallback Push: If the user has no active sockets, dispatch to an asynchronous worker queue (Celery/BullMQ) that sends an FCM/APNs Web Push notification.
5. Read State Sync: Client marks notifications read via PATCH /api/v1/notifications/{id}/read, updating read_at and broadcasting read status to other open tabs.`,
    },
    {
      id: "qa-10",
      question: "10. How do you secure private WebSocket rooms in a multi-tenant application?",
      summary: "Origin verification, handshake authentication, tenant scoping, and per-message authorization.",
      answer: `1. TLS Encryption (WSS): Always enforce wss:// to encrypt data in transit and prevent transparent proxy manipulation.
2. Origin Header Validation: Check the Origin header against a strict server-side allowlist to prevent Cross-Site WebSocket Hijacking (CSWSH).
3. Handshake Authentication: Validate short-lived signed tokens or session cookies during HTTP Upgrade. Store tenant_id and user_id in the connection context.
4. Room Authorization: Never allow arbitrary room joins (e.g. socket.join('interview:5001')). Before joining, query the database or cache to verify: tenant_id matches, user is assigned to interview_id 5001, and role permissions permit viewing.
5. Session Revocation: Periodically check JWT validity or listen to tenant suspension events on Redis to disconnect revoked sessions immediately.`,
    },
    {
      id: "qa-11",
      question: "11. What is the transactional outbox pattern, and when is it useful?",
      summary: "Atomic database state change + event record to avoid dual-write inconsistencies.",
      answer: `The Dual-Write Problem: If an interview service updates PostgreSQL (status = 'COMPLETED') and then calls Redis Pub/Sub, the network or Redis might fail, leaving state updated but no notification sent.
The Outbox Solution:
1. In a single ACID database transaction, insert the interview record AND an outbox record into an 'outbox_events' table.
2. An asynchronous Debezium CDC (Change Data Capture) process or polling worker reads committed outbox entries and publishes them reliably to Redis or Kafka.
3. Guarantees at-least-once message publication without distributed transaction locks.`,
    },
    {
      id: "qa-12",
      question: "12. How would you avoid a reconnect storm after a server restart?",
      summary: "Exponential backoff with full jitter, connection rate limiting, and rolling deploys.",
      answer: `When a server restarts, thousands of clients lose connections simultaneously. If all reconnect at 1.0s, the load balancer and auth DB collapse under a Thundering Herd.
Mitigations:
1. Exponential Backoff with Full Jitter: Sleep = rand(0, min(max_delay, base * 2^attempt)). Randomizing reconnection across 0–30s flattens the connection spike into a manageable trickle.
2. Ingress Rate Limiting: Configure NGINX / Cloudflare to limit new TLS handshakes to a sustainable rate (e.g. 500 handshakes/sec per gateway).
3. Rolling Deployments: Drain connections gradually over 300 seconds (sending WebSocket Close code 1001 Going Away with random delays) rather than hard killing pods.`,
    },
    {
      id: "qa-13",
      question: "13. How do you estimate bandwidth and server capacity for a realtime application?",
      summary: "Mathematical model linking concurrent connections, packet sizes, framing, and memory buffers.",
      answer: `1. Inbound Throughput: Connections * Client Msg Rate * (Avg Client Payload + WS Frame Header 2-10B + TCP/IP Header 40B).
2. Outbound Throughput: Connections * Server Msg Rate * Fanout Multiplier * (Avg Payload + Headers).
3. Bandwidth Overhead: Add 30–50% headroom for packet retransmissions, TLS handshakes, and bursty spikes.
4. Memory Allocation: Total RAM = Concurrent Conns * (Socket Kernel Buffer + Engine Connection Object ~25KB). For 100k conns, reserve ~3GB RAM.
5. File Descriptors: Set open file limits to 1.5x expected connections to accommodate DB connections and internal pipes.`,
    },
    {
      id: "qa-14",
      question: "14. When should a real-time system drop an event, coalesce it, persist it, or replay it?",
      summary: "Decision framework based on business criticality, freshness, and temporal relevance.",
      answer: `• Drop: High-frequency ephemeral data that becomes irrelevant within milliseconds (e.g. mouse cursor coordinates, audio decibel meters, typing indicators).
• Coalesce: Rapidly updated continuous counters or gauges where only the newest value matters (e.g. active viewer count, candidate timer remaining, overall test completion percentage).
• Persist: Authoritative business transactions (e.g. code submission, interview grade, rubric comment, candidate hiring decision).
• Replay: Sequential workflow history required by rejoining clients to establish identical application state (e.g. collaborative text edits, chat messages, interview rubric updates).`,
    },
    {
      id: "qa-15",
      question: "15. Design the realtime infrastructure for PrepSpaces live interviews and recruiter notifications.",
      summary: "Full end-to-end architecture: WebSockets, Redis Pub/Sub, Outbox, and multi-tenant isolation.",
      answer: `1. Ingress Layer: Route traffic through AWS ALB with WSS TLS termination, routing /ws to a WebSocket Gateway cluster and /api to REST microservices.
2. Gateway Cluster: Node.js/Go instances handle persistent connections, authenticating JWTs during handshake and attaching tenant_id/user_id to connection context.
3. Message Routing: Redis Pub/Sub adapter routes live coding keystrokes and chat between candidate and interviewer across nodes via 'interview:{id}' channels.
4. Durable Notifications: Candidate interview submissions write to PostgreSQL and an Outbox table. Workers stream events to Redis Pub/Sub for active recruiters and dispatch Web Push / Email for offline users.
5. Presence & State: Redis stores presence leases (TTL 60s, heartbeat 20s) with multi-tab set tracking. Code changes are persisted as periodic snapshot deltas in PostgreSQL for instant post-reconnect recovery.`,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 font-sans antialiased">
      {/* Top Breadcrumb & Title Header */}
      <div className="border-b border-stone-200 bg-[#faf8f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-700">
                <span>System Design Masterclass</span>
                <span className="text-stone-400">/</span>
                <span>Advanced Distributed Systems</span>
                <span className="text-stone-400">/</span>
                <span>Weeks 37–38</span>
              </div>
              <h1 className="mt-1 text-2xl sm:text-3xl font-extrabold text-stone-900">
                Module 19: Real-Time Systems, WebSockets, Presence, and Notifications
              </h1>
              <p className="mt-1 text-sm text-stone-700 max-w-3xl">
                Master the architectural principles of instantaneous, low-latency applications:
                protocol selection, horizontal WebSocket scaling, distributed presence leases, durable
                notification pipelines, backpressure, and edge reconnection recovery.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-800 border border-orange-200">
                <Radio className="w-3.5 h-3.5 mr-1 text-orange-600" />
                Real-Time Systems
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-stone-100 text-stone-700 border border-stone-200">
                <Clock className="w-3.5 h-3.5 mr-1 text-stone-500" />
                2 Weeks · 30–40 Hours
              </span>
            </div>
          </div>

          {/* Module Navigation Tabs */}
          <div className="mt-6 flex flex-wrap gap-2 border-b border-stone-200 pb-px">
            {[
              { id: "curriculum", label: "Curriculum & Lessons", icon: BookOpen },
              { id: "simulators", label: "Interactive Simulators", icon: Sliders },
              { id: "qa", label: "Senior Interview Q&A (15)", icon: MessageSquare },
              { id: "assignments", label: "Hands-On Labs (5)", icon: Workflow },
              { id: "assessment", label: "Knowledge Check (7)", icon: HelpCircle },
              { id: "reading", label: "Technical Reading", icon: Globe },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-t-lg transition-all border-b-2 ${
                    activeTab === tab.id
                      ? "border-orange-600 bg-white text-stone-900 shadow-sm"
                      : "border-transparent text-stone-700 hover:text-stone-900 hover:bg-stone-100/60"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${activeTab === tab.id ? "text-orange-600" : "text-stone-500"}`} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Global Module Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <ModuleNav />
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* =====================================================================
            TAB 1: CURRICULUM & LESSONS
            ===================================================================== */}
        {activeTab === "curriculum" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Lesson Picker */}
            <div className="lg:col-span-1 space-y-4">
              <div className="p-4 rounded-xl bg-white border border-stone-200">
                <div className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-3 flex items-center justify-between">
                  <span>Syllabus Breakdown</span>
                  <span className="text-orange-600 font-mono">11 Lessons</span>
                </div>
                <div className="space-y-1">
                  {[
                    { id: "19.1", title: "1. Module Overview & Learning Goals" },
                    { id: "19.2", title: "2. What Is a Real-Time System?" },
                    { id: "19.3", title: "3. Choosing a Communication Protocol" },
                    { id: "19.4", title: "4. Designing WebSocket Event Protocol" },
                    { id: "19.5", title: "5. Real-Time Capacity Planning & Math" },
                    { id: "19.6", title: "6. Real-Time Architecture at Scale" },
                    { id: "19.7", title: "7. Designing Presence: Leases & TTL" },
                    { id: "19.8", title: "8. Notifications: Real-Time vs Durable" },
                    { id: "19.9", title: "9. Reliability, Ordering & Backpressure" },
                    { id: "19.10", title: "10. Security for WebSockets (OWASP)" },
                    { id: "19.11", title: "11. Practical Case Study: PrepSpaces" },
                  ].map((lesson) => (
                    <button
                      key={lesson.id}
                      onClick={() => setActiveLesson(lesson.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                        activeLesson === lesson.id
                          ? "bg-stone-900 text-white font-semibold"
                          : "text-stone-700 hover:bg-stone-100 hover:text-stone-900"
                      }`}
                    >
                      {lesson.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Spec Card */}
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-2 flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-amber-600" />
                  Engineering Golden Rule
                </h4>
                <p className="text-xs text-amber-950 leading-relaxed">
                  A persistent connection is <strong>only a transport</strong>. Reliable real-time
                  systems additionally require authorization, a defined event schema, clear delivery
                  guarantees, resource limits, and a way to recover authoritative state after missed
                  messages.
                </p>
              </div>
            </div>

            {/* Main Lesson Reader */}
            <div className="lg:col-span-3 space-y-6">
              {/* LESSON 19.1 */}
              {activeLesson === "19.1" && (
                <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
                    <span>Lesson 19.1</span>
                    <span>•</span>
                    <span>Introduction</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Module Overview: The Mechanics of Instantaneous Systems
                  </h2>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    How do you design an application where updates appear instantly without users
                    refreshing the page? Modern applications need real-time communication for live
                    interviews, collaborative editing, chat, multiplayer experiences, trading
                    platforms, and operational dashboards.
                  </p>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    These applications must deliver updates quickly while handling thousands of
                    concurrent connections, temporary network failures, server restarts, duplicate
                    events, and users who go offline.
                  </p>
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                      Core Learning Objectives
                    </h3>
                    <ul className="space-y-1.5 text-xs text-stone-700 list-disc list-inside">
                      <li>Compare HTTP short polling, long polling, Server-Sent Events (SSE), and WebSockets.</li>
                      <li>Design bidirectional event protocols with versioned schemas and commands vs. events.</li>
                      <li>Estimate concurrent connections, message throughput, bandwidth, and server memory capacity.</li>
                      <li>Build distributed presence systems with heartbeats, leases, and expiration TTLs.</li>
                      <li>Design reliable notification systems combining durable database records with transient socket push.</li>
                      <li>Scale WebSocket servers horizontally across nodes using Redis Pub/Sub adapters.</li>
                      <li>Handle disconnections, reconnections, exponential backoff with jitter, duplicate events, and out-of-order messages.</li>
                      <li>Enforce WebSocket security: WSS, Origin validation, handshake auth, and per-message room authorization.</li>
                      <li>Design the full real-time architecture for PrepSpaces live interview rooms and recruiter dashboards.</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* LESSON 19.2 */}
              {activeLesson === "19.2" && (
                <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
                    <span>Lesson 19.2</span>
                    <span>•</span>
                    <span>Fundamentals</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">What Is a Real-Time System?</h2>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    A real-time application delivers updates in response to events with sufficiently low
                    delay for its intended use case. Examples include a candidate seeing a new interview
                    question, a recruiter receiving a candidate's completed report notification, or a
                    live dashboard updating when a job changes status.
                  </p>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    <strong>Real-time does not necessarily mean zero latency.</strong> It means the
                    system's latency is low enough for the required user experience.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="text-xs font-bold text-stone-900">Near-Real-Time Updates</div>
                      <p className="text-xs text-stone-700 mt-1">
                        Refreshes data periodically or streams with a small delay (1s–5s). Dashboards,
                        order tracking, analytics, and notification counts.
                      </p>
                    </div>
                    <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="text-xs font-bold text-stone-900">Interactive Real-Time</div>
                      <p className="text-xs text-stone-700 mt-1">
                        Exchanges events while users are actively interacting (&lt;100ms). Chat, live
                        interview code editors, collaborative tools, and presence.
                      </p>
                    </div>
                    <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="text-xs font-bold text-stone-900">Hard vs. Soft Real-Time</div>
                      <p className="text-xs text-stone-700 mt-1">
                        Hard real-time has strict timing constraints (flight control). Soft real-time
                        tolerates occasional deadline misses with slight quality degradation (audio/video).
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-stone-700 italic">
                    For a typical SaaS platform such as PrepSpaces, the primary challenge is low-latency
                    interactive communication rather than hard real-time safety guarantees.
                  </p>
                </div>
              )}

              {/* LESSON 19.3 */}
              {activeLesson === "19.3" && (
                <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
                    <span>Lesson 19.3</span>
                    <span>•</span>
                    <span>Protocols</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Choosing a Communication Protocol
                  </h2>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    Not every real-time feature needs WebSockets. The protocol should match the direction
                    of communication, latency requirement, connection count, and delivery semantics.
                  </p>
                  {/* Embedded Diagram 1 */}
                  <TransportComparisonDiagram />
                </div>
              )}

              {/* LESSON 19.4 */}
              {activeLesson === "19.4" && (
                <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
                    <span>Lesson 19.4</span>
                    <span>•</span>
                    <span>Protocol Design</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Designing a WebSocket Event Protocol & Envelope
                  </h2>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    A raw WebSocket delivers an unstructured byte stream. A production system requires an
                    agreed event envelope specifying message ID, event type, schema version, timestamp,
                    and payload.
                  </p>
                  <div className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto">
                    <pre className="text-orange-300 mb-1">// Standardized Event Envelope Schema</pre>
                    <pre className="text-stone-200">{`{
  "eventId": "evt_93821",
  "type": "interview.question.updated",
  "version": 1,
  "timestamp": "2026-10-12T08:20:00Z",
  "channel": "interview:room:5001",
  "payload": {
    "interviewId": "int_5001",
    "questionId": "q_12",
    "status": "ready"
  }
}`}</pre>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-3 rounded-lg border border-stone-200 bg-stone-50">
                      <div className="font-bold text-stone-900">Commands vs. Events</div>
                      <p className="text-stone-700 mt-1">
                        <strong>Command:</strong> A client request that something happen (e.g.{" "}
                        <code className="text-orange-700">interview.answer.submit</code>). The server
                        validates auth, applies DB state changes, and only then emits an event.
                      </p>
                      <p className="text-stone-700 mt-1">
                        <strong>Event:</strong> A server declaration that something has happened (e.g.{" "}
                        <code className="text-emerald-700">interview.answer.saved</code>).
                      </p>
                    </div>
                    <div className="p-3 rounded-lg border border-stone-200 bg-stone-50">
                      <div className="font-bold text-stone-900">Golden Security Rule</div>
                      <p className="text-stone-700 mt-1">
                        Never let a client directly declare a trusted business outcome by sending an
                        event such as <code className="text-rose-700">payment.completed</code> or{" "}
                        <code className="text-rose-700">interview.passed</code> and accepting it as
                        authoritative.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 19.5 */}
              {activeLesson === "19.5" && (
                <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
                    <span>Lesson 19.5</span>
                    <span>•</span>
                    <span>Capacity Planning</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Capacity Planning & Mathematical Modeling
                  </h2>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    Persistent connections consume resources even when clients send very few messages.
                    Capacity planning must account for connection count, heartbeat traffic, message
                    rates, message sizes, TLS overhead, memory usage, and fan-out.
                  </p>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-3 text-xs">
                    <div className="font-bold text-stone-900 text-sm">
                      Worked Example: 10,000 Concurrent Users
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <div className="p-2 rounded bg-white border border-stone-200">
                        <span className="text-stone-700">Connections:</span>{" "}
                        <strong>10,000</strong>
                      </div>
                      <div className="p-2 rounded bg-white border border-stone-200">
                        <span className="text-stone-700">Client Msgs/s:</span>{" "}
                        <strong>0.2 msg/s</strong>
                      </div>
                      <div className="p-2 rounded bg-white border border-stone-200">
                        <span className="text-stone-700">Server Msgs/s:</span>{" "}
                        <strong>0.5 msg/s</strong>
                      </div>
                      <div className="p-2 rounded bg-white border border-stone-200">
                        <span className="text-stone-700">Avg Payload:</span>{" "}
                        <strong>1 KB</strong>
                      </div>
                    </div>
                    <div className="space-y-1 text-stone-800">
                      <div>
                        • Client-to-server rate: 10,000 × 0.2 = 2,000 msgs/sec
                      </div>
                      <div>
                        • Server-to-client rate: 10,000 × 0.5 = 5,000 msgs/sec
                      </div>
                      <div>
                        • Outbound payload throughput: 5,000 × 1 KB = 5 MB/sec = 40 Mbps
                      </div>
                      <div>
                        • With 30% Headroom: 40 × 1.3 = 52 Mbps
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-stone-700">
                    Explore dynamic values for any scale using the interactive calculator below.
                  </p>
                </div>
              )}

              {/* LESSON 19.6 */}
              {activeLesson === "19.6" && (
                <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
                    <span>Lesson 19.6</span>
                    <span>•</span>
                    <span>Scale-Out Architecture</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Real-Time Architecture at Scale: Multi-Node Fan-Out
                  </h2>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    A single WebSocket server cannot handle hundreds of thousands of connections. In a
                    scaled environment, Candidate Alice connects to Node 1, while Recruiter Sarah
                    connects to Node 2. When Alice types code, Node 1 must forward the event to Node 2
                    via a message backplane.
                  </p>
                  {/* Embedded Diagram 3 */}
                  <MultiNodeWebSocketDiagram />
                </div>
              )}

              {/* LESSON 19.7 */}
              {activeLesson === "19.7" && (
                <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
                    <span>Lesson 19.7</span>
                    <span>•</span>
                    <span>Presence Engineering</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Designing Presence: Online, Offline, and Expiring Leases
                  </h2>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    Presence should be treated as a <em>short-lived, approximate lease</em> rather than a
                    permanent database flag like <code className="text-rose-700">users.is_online = true</code>.
                    If a laptop goes to sleep or drops Wi-Fi, no clean disconnect is sent. Leases
                    naturally expire when heartbeats cease.
                  </p>
                  {/* Embedded Diagram 2 */}
                  <PresenceLeaseDiagram />
                </div>
              )}

              {/* LESSON 19.8 */}
              {activeLesson === "19.8" && (
                <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
                    <span>Lesson 19.8</span>
                    <span>•</span>
                    <span>Notifications</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Notifications: Real-Time Delivery vs. Durable Storage
                  </h2>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    A notification system has two distinct responsibilities:
                    1. <strong>Remember</strong> that an important event happened (Durable storage).
                    2. <strong>Deliver</strong> an update to the user through an appropriate channel
                    (WebSocket, Push, or Email).
                  </p>
                  <div className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto">
                    <pre className="text-emerald-400 mb-1">-- PostgreSQL Durable Notification Schema</pre>
                    <pre className="text-stone-200">{`CREATE TABLE notifications (
  notification_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID NOT NULL REFERENCES tenants(id),
  recipient_user_id UUID NOT NULL REFERENCES users(id),
  event_type VARCHAR(64) NOT NULL,
  resource_id VARCHAR(128) NOT NULL,
  payload JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  read_at TIMESTAMPTZ,
  delivery_status VARCHAR(32) DEFAULT 'PENDING'
);

CREATE INDEX idx_user_unread ON notifications (recipient_user_id, read_at) 
WHERE read_at IS NULL;`}</pre>
                  </div>
                  <div className="p-3 rounded-lg border border-amber-200 bg-amber-50 text-xs text-amber-950">
                    <strong>Transactional Outbox Pattern:</strong> Write the business record and the
                    notification record in the same database transaction. A separate CDC or background
                    worker pushes the notification to Redis Pub/Sub, guaranteeing zero lost
                    notifications even if workers crash.
                  </div>
                </div>
              )}

              {/* LESSON 19.9 */}
              {activeLesson === "19.9" && (
                <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
                    <span>Lesson 19.9</span>
                    <span>•</span>
                    <span>Fault Tolerance</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Reliability: Reconnection, Ordering, and Backpressure
                  </h2>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    Long-lived connections will inevitably disconnect. Devices sleep, Wi-Fi resets, and
                    servers restart. A resilient architecture handles reconnect storms, message
                    ordering, and slow consumer memory leaks.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="font-bold text-stone-900">Exponential Backoff & Jitter</div>
                      <p className="text-stone-700 mt-1">
                        Retry with exponential backoff: delay = rand(0, min(30s, 2^attempt)).
                        Jitter spreads reconnect spikes after node restarts, preventing Thundering Herds.
                      </p>
                    </div>
                    <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="font-bold text-stone-900">Cursor Replay vs Snapshot</div>
                      <p className="text-stone-700 mt-1">
                        If offline &lt; 30s, replay delta from <code className="text-orange-700">lastEventId</code>.
                        If offline &gt; 5 mins, instruct client to fetch fresh snapshot from REST/GraphQL.
                      </p>
                    </div>
                    <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="font-bold text-stone-900">Bounded Backpressure</div>
                      <p className="text-stone-700 mt-1">
                        Cap outbound socket buffer at 100 msgs. Drop transient typing indicators, coalesce
                        rapid counters, and disconnect uncooperative slow clients.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 19.10 */}
              {activeLesson === "19.10" && (
                <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
                    <span>Lesson 19.10</span>
                    <span>•</span>
                    <span>Security</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Security for WebSockets (OWASP Guidelines)
                  </h2>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    WebSockets introduce security risks because the TCP connection remains open long
                    after the initial handshake. Essential security controls include:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="font-bold text-stone-900 flex items-center gap-1.5">
                        <Shield className="w-4 h-4 text-emerald-600" />
                        Origin Header Validation (Anti-CSWSH)
                      </div>
                      <p className="text-stone-700 mt-1">
                        Browsers send the Origin header during handshake. Validate it against an explicit
                        allowlist to prevent Cross-Site WebSocket Hijacking.
                      </p>
                    </div>
                    <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="font-bold text-stone-900 flex items-center gap-1.5">
                        <Shield className="w-4 h-4 text-blue-600" />
                        Room Authorization Guards
                      </div>
                      <p className="text-stone-700 mt-1">
                        Never trust room names sent by clients. Verify tenant membership and interview
                        permissions before joining <code className="text-stone-900">interview:5001</code>.
                      </p>
                    </div>
                    <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="font-bold text-stone-900 flex items-center gap-1.5">
                        <Shield className="w-4 h-4 text-orange-600" />
                        Periodic Session Revalidation
                      </div>
                      <p className="text-stone-700 mt-1">
                        A persistent connection can outlive a user's login session. Periodically check
                        token validity or listen to revocation topics to kill revoked sockets.
                      </p>
                    </div>
                    <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="font-bold text-stone-900 flex items-center gap-1.5">
                        <Shield className="w-4 h-4 text-rose-600" />
                        Payload Schema Validation
                      </div>
                      <p className="text-stone-700 mt-1">
                        Enforce strict JSON schema validation (Zod/Joi) and strict byte size limits (e.g.
                        max 64 KB) to reject malformed or denial-of-service frames.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 19.11 */}
              {activeLesson === "19.11" && (
                <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
                    <span>Lesson 19.11</span>
                    <span>•</span>
                    <span>Case Study</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Practical Case Study: Real-Time PrepSpaces
                  </h2>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    How PrepSpaces integrates real-time systems across live interview rooms, AI
                    evaluation streaming, and recruiter notification feeds:
                  </p>
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-3 text-xs">
                    <div className="font-bold text-stone-900">PrepSpaces Production Pipeline:</div>
                    <ol className="space-y-2 list-decimal list-inside text-stone-700">
                      <li>
                        <strong>Candidate types code:</strong> Dispatched over authenticated WSS with
                        room ID <code className="text-orange-700">interview:5001</code>.
                      </li>
                      <li>
                        <strong>WebSocket Gateway:</strong> Node 1 validates session JWT and publishes
                        delta to Redis Pub/Sub channel <code className="text-stone-900">interview:5001:keystrokes</code>.
                      </li>
                      <li>
                        <strong>Recruiter receives update:</strong> Node 2 receives Redis packet and
                        delivers it to Recruiter's socket. Latency &lt; 25ms.
                      </li>
                      <li>
                        <strong>Candidate submits answer:</strong> Written durably to PostgreSQL + Outbox
                        table. Background worker triggers AI evaluation.
                      </li>
                      <li>
                        <strong>AI Stream:</strong> LLM evaluation tokens are streamed back via Server-Sent
                        Events (SSE), ensuring native HTTP/2 multiplexing and auto-reconnect.
                      </li>
                    </ol>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 2: INTERACTIVE SIMULATORS & CAPACITY CALCULATOR
            ===================================================================== */}
        {activeTab === "simulators" && (
          <div className="space-y-8">
            {/* CAPACITY CALCULATOR */}
            <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-4 mb-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-800 mb-1">
                    <SlidersHorizontal className="w-3.5 h-3.5 text-orange-600" />
                    Interactive Capacity Planner
                  </span>
                  <h3 className="text-lg font-bold text-stone-900">
                    Real-Time Bandwidth, Throughput & Infrastructure Sizing Calculator
                  </h3>
                  <p className="text-xs text-stone-700 mt-0.5">
                    Model concurrent connections, packet rates, raw bandwidth, memory footprints, and
                    server cluster count.
                  </p>
                </div>
              </div>

              {/* Sliders Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold text-stone-900">
                    <span>Concurrent Connections (N):</span>
                    <span className="font-mono text-orange-600 font-bold">
                      {concurrentUsers.toLocaleString()} users
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="100000"
                    step="1000"
                    value={concurrentUsers}
                    onChange={(e) => setConcurrentUsers(Number(e.target.value))}
                    className="w-full accent-orange-600"
                  />
                  <div className="flex justify-between text-[10px] text-stone-700">
                    <span>1k</span>
                    <span>50k</span>
                    <span>100k</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold text-stone-900">
                    <span>Client Msgs / sec:</span>
                    <span className="font-mono text-orange-600 font-bold">{clientMsgsPerSec} msg/s</span>
                  </div>
                  <input
                    type="range"
                    min="0.05"
                    max="2.0"
                    step="0.05"
                    value={clientMsgsPerSec}
                    onChange={(e) => setClientMsgsPerSec(Number(e.target.value))}
                    className="w-full accent-orange-600"
                  />
                  <div className="flex justify-between text-[10px] text-stone-700">
                    <span>0.05 (sparse)</span>
                    <span>1.0</span>
                    <span>2.0 (typing)</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold text-stone-900">
                    <span>Server Msgs / sec / client:</span>
                    <span className="font-mono text-orange-600 font-bold">{serverMsgsPerSec} msg/s</span>
                  </div>
                  <input
                    type="range"
                    min="0.1"
                    max="5.0"
                    step="0.1"
                    value={serverMsgsPerSec}
                    onChange={(e) => setServerMsgsPerSec(Number(e.target.value))}
                    className="w-full accent-orange-600"
                  />
                  <div className="flex justify-between text-[10px] text-stone-700">
                    <span>0.1 (low)</span>
                    <span>2.5</span>
                    <span>5.0 (high)</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold text-stone-900">
                    <span>Average Payload Size:</span>
                    <span className="font-mono text-orange-600 font-bold">{payloadSizeKb} KB</span>
                  </div>
                  <input
                    type="range"
                    min="0.2"
                    max="5.0"
                    step="0.1"
                    value={payloadSizeKb}
                    onChange={(e) => setPayloadSizeKb(Number(e.target.value))}
                    className="w-full accent-orange-600"
                  />
                  <div className="flex justify-between text-[10px] text-stone-700">
                    <span>0.2 KB</span>
                    <span>2.5 KB</span>
                    <span>5.0 KB</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold text-stone-900">
                    <span>Capacity Headroom Buffer:</span>
                    <span className="font-mono text-orange-600 font-bold">{headroomPct}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    step="5"
                    value={headroomPct}
                    onChange={(e) => setHeadroomPct(Number(e.target.value))}
                    className="w-full accent-orange-600"
                  />
                  <div className="flex justify-between text-[10px] text-stone-700">
                    <span>10% (lean)</span>
                    <span>30% (standard)</span>
                    <span>100% (2x)</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold text-stone-900">
                    <span>Max Conns / Node:</span>
                    <span className="font-mono text-orange-600 font-bold">{maxConnsPerNode} conns</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="10000"
                    step="500"
                    value={maxConnsPerNode}
                    onChange={(e) => setMaxConnsPerNode(Number(e.target.value))}
                    className="w-full accent-orange-600"
                  />
                  <div className="flex justify-between text-[10px] text-stone-700">
                    <span>1k</span>
                    <span>5k</span>
                    <span>10k</span>
                  </div>
                </div>
              </div>

              {/* Calculated Outputs Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 rounded-xl bg-white border border-stone-200">
                <div className="p-3 rounded-lg bg-stone-50 border border-stone-100">
                  <div className="text-[11px] font-medium text-stone-700">Client Inbound PPS</div>
                  <div className="text-xl font-bold font-mono text-stone-900 mt-0.5">
                    {clientInboundRps.toLocaleString()} <span className="text-xs font-normal">msgs/s</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-stone-50 border border-stone-100">
                  <div className="text-[11px] font-medium text-stone-700">Server Outbound PPS</div>
                  <div className="text-xl font-bold font-mono text-stone-900 mt-0.5">
                    {serverOutboundRps.toLocaleString()} <span className="text-xs font-normal">msgs/s</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-stone-50 border border-stone-100">
                  <div className="text-[11px] font-medium text-stone-700">Provisioned Bandwidth</div>
                  <div className="text-xl font-bold font-mono text-orange-600 mt-0.5">
                    {provisionedBandwidthMbps} <span className="text-xs font-normal">Mbps</span>
                  </div>
                  <div className="text-[10px] text-stone-700">Raw: {rawBandwidthMbps.toFixed(1)} Mbps</div>
                </div>
                <div className="p-3 rounded-lg bg-stone-50 border border-stone-100">
                  <div className="text-[11px] font-medium text-stone-700">Estimated Sockets RAM & Nodes</div>
                  <div className="text-xl font-bold font-mono text-stone-900 mt-0.5">
                    {totalRamGb} GB <span className="text-xs font-normal">/ {estimatedNodes} nodes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* EMBEDDED DIAGRAMS */}
            <div className="space-y-6">
              <TransportComparisonDiagram />
              <PresenceLeaseDiagram />
              <MultiNodeWebSocketDiagram />
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 3: SENIOR INTERVIEW Q&A (15 QUESTIONS)
            ===================================================================== */}
        {activeTab === "qa" && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-white border border-stone-200 mb-6">
              <h3 className="text-lg font-bold text-stone-900">
                15 Senior System Design Interview Questions & Model Answers
              </h3>
              <p className="text-xs text-stone-700 mt-1">
                Rigorous architectural justifications covering protocols, horizontal scaling,
                outbox patterns, presence leases, reconnect storms, and security.
              </p>
            </div>

            <div className="space-y-3">
              {interviewQuestions.map((qa) => (
                <div
                  key={qa.id}
                  className="rounded-xl border border-stone-200 bg-white overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleQA(qa.id)}
                    className="w-full text-left p-4 flex items-center justify-between gap-3 hover:bg-stone-50 transition-colors"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-stone-900">{qa.question}</h4>
                      <p className="text-xs text-stone-700 mt-0.5">{qa.summary}</p>
                    </div>
                    <span className="text-xs font-bold text-orange-600 px-2 py-1 rounded bg-orange-50 border border-orange-200">
                      {expandedQA[qa.id] ? "Collapse" : "Expand"}
                    </span>
                  </button>
                  {expandedQA[qa.id] && (
                    <div className="p-4 border-t border-stone-100 bg-[#faf8f4] text-xs text-stone-800 leading-relaxed font-mono whitespace-pre-wrap">
                      {qa.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 4: HANDS-ON LABS (5 LABS)
            ===================================================================== */}
        {activeTab === "assignments" && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-white border border-stone-200 mb-6">
              <h3 className="text-lg font-bold text-stone-900">5 Hands-On Production Labs & Deliverables</h3>
              <p className="text-xs text-stone-700 mt-1">
                Step-by-step engineering exercises testing protocol selection, presence TTLs,
                transactional outboxes, and multi-node Redis pub/sub.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {/* LAB 1 */}
              <div className="p-5 rounded-2xl bg-white border border-stone-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                    Lab 1 · Protocol Selection
                  </span>
                  <span className="text-xs font-mono text-stone-700">Architecture Decision</span>
                </div>
                <h4 className="text-base font-bold text-stone-900">
                  Transport Selection for PrepSpaces Workflows
                </h4>
                <p className="text-xs text-stone-700 mt-1">
                  Design communication for a live interview room, a recruiter dashboard, and an
                  offline report-ready notification. Compare WebSockets, SSE, polling, and browser push.
                  Explain which transport each feature needs and how it recovers after disconnection.
                </p>
                <div className="mt-3 p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs">
                  <strong className="text-stone-900">Deliverable:</strong> A protocol decision table and
                  a request-flow diagram documenting fallback mechanisms when connections drop.
                </div>
              </div>

              {/* LAB 2 */}
              <div className="p-5 rounded-2xl bg-white border border-stone-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                    Lab 2 · WebSocket Server
                  </span>
                  <span className="text-xs font-mono text-stone-700">Implementation & Auth</span>
                </div>
                <h4 className="text-base font-bold text-stone-900">
                  Build an Authenticated Real-Time Channel with Rate Limiting
                </h4>
                <p className="text-xs text-stone-700 mt-1">
                  Implement a WebSocket endpoint that validates sessions during handshake, validates
                  event schemas with Zod, applies per-user message rate limits, and authorizes room
                  subscriptions (e.g. preventing tenant A from joining tenant B's interview room).
                </p>
                <div className="mt-3 p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs">
                  <strong className="text-stone-900">Deliverable:</strong> Server and client code plus
                  positive and negative security tests simulating CSWSH attacks and invalid room joins.
                </div>
              </div>

              {/* LAB 3 */}
              <div className="p-5 rounded-2xl bg-white border border-stone-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                    Lab 3 · Presence Engineering
                  </span>
                  <span className="text-xs font-mono text-stone-700">Leases & Heartbeats</span>
                </div>
                <h4 className="text-base font-bold text-stone-900">
                  Implement Distributed Online Presence with Redis TTLs
                </h4>
                <p className="text-xs text-stone-700 mt-1">
                  Track multiple connections per user using heartbeat renewal and expiring leases. Test
                  browser termination, sudden Wi-Fi disconnect, server restart, multiple tabs, and
                  reconnects.
                </p>
                <div className="mt-3 p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs">
                  <strong className="text-stone-900">Deliverable:</strong> A presence state model, Redis
                  key schema, and a test report covering stale-presence edge cases.
                </div>
              </div>

              {/* LAB 4 */}
              <div className="p-5 rounded-2xl bg-white border border-stone-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                    Lab 4 · Notifications
                  </span>
                  <span className="text-xs font-mono text-stone-700">Durable Delivery Pipeline</span>
                </div>
                <h4 className="text-base font-bold text-stone-900">
                  Design Durable Notification Storage & In-App Broadcast
                </h4>
                <p className="text-xs text-stone-700 mt-1">
                  Store notification records durably, broadcast real-time updates over WebSockets, and
                  support unread counts, read state synchronization across tabs, retries, and idempotent
                  processing. Disconnect the client during delivery and demonstrate how notifications
                  are recovered.
                </p>
                <div className="mt-3 p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs">
                  <strong className="text-stone-900">Deliverable:</strong> A relational database schema,
                  delivery state machine, and replay or reconciliation strategy.
                </div>
              </div>

              {/* LAB 5 */}
              <div className="p-5 rounded-2xl bg-white border border-stone-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                    Lab 5 · Horizontal Scaling
                  </span>
                  <span className="text-xs font-mono text-stone-700">Redis Pub/Sub Cluster</span>
                </div>
                <h4 className="text-base font-bold text-stone-900">
                  Run a Multi-Server Real-Time Scale Test
                </h4>
                <p className="text-xs text-stone-700 mt-1">
                  Connect clients across multiple server instances bridged by Redis Pub/Sub. Test
                  connection distribution across instances, cross-node broadcasting, graceful
                  shutdown, and reconnect storms under load.
                </p>
                <div className="mt-3 p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs">
                  <strong className="text-stone-900">Deliverable:</strong> A capacity report measuring
                  concurrent connections, message throughput, p95 latency, and a scale-out architecture
                  proposal.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 5: KNOWLEDGE CHECK QUIZ (7 QUESTIONS)
            ===================================================================== */}
        {activeTab === "assessment" && (
          <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
              <div>
                <h3 className="text-xl font-bold text-stone-900">Module 19 Knowledge Check</h3>
                <p className="text-xs text-stone-700 mt-0.5">
                  7 questions assessing transports, Redis Pub/Sub limitations, presence leases, and
                  backpressure.
                </p>
              </div>
              {quizSubmitted && (
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-stone-900">
                    Your Score:{" "}
                    <span className="text-orange-600 font-mono">
                      {calculateScore()} / {quizQuestions.length}
                    </span>
                  </span>
                  <button
                    onClick={resetQuiz}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-stone-800 transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    Reset Quiz
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {quizQuestions.map((q, idx) => {
                const selected = selectedAnswers[q.id];
                const isCorrect = selected === q.correctIndex;
                return (
                  <div key={q.id} className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4]">
                    <h4 className="text-sm font-bold text-stone-900 mb-3">{q.question}</h4>
                    <div className="space-y-2">
                      {q.options.map((opt, optIdx) => {
                        let btnStyle = "border-stone-200 bg-white text-stone-800 hover:bg-stone-50";
                        if (quizSubmitted) {
                          if (optIdx === q.correctIndex) {
                            btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold";
                          } else if (selected === optIdx) {
                            btnStyle = "border-rose-500 bg-rose-50 text-rose-900";
                          } else {
                            btnStyle = "border-stone-200 bg-white text-stone-500 opacity-60";
                          }
                        } else if (selected === optIdx) {
                          btnStyle = "border-stone-900 bg-stone-900 text-white font-medium";
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() => handleSelectOption(q.id, optIdx)}
                            className={`w-full text-left p-3 rounded-lg border text-xs transition-all flex items-center justify-between ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {quizSubmitted && optIdx === q.correctIndex && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            )}
                            {quizSubmitted && selected === optIdx && optIdx !== q.correctIndex && (
                              <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                    {quizSubmitted && (
                      <div
                        className={`mt-3 p-3 rounded-lg text-xs ${
                          isCorrect ? "bg-emerald-100/60 text-emerald-900" : "bg-rose-100/60 text-rose-900"
                        }`}
                      >
                        <strong>Explanation:</strong> {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {!quizSubmitted ? (
              <div className="flex justify-end pt-4 border-t border-stone-200">
                <button
                  onClick={() => setQuizSubmitted(true)}
                  disabled={Object.keys(selectedAnswers).length < quizQuestions.length}
                  className={`px-6 py-2.5 rounded-xl text-xs font-bold text-white transition-all shadow-sm ${
                    Object.keys(selectedAnswers).length === quizQuestions.length
                      ? "bg-orange-600 hover:bg-orange-700 cursor-pointer"
                      : "bg-stone-300 cursor-not-allowed"
                  }`}
                >
                  Submit Answers & View Explanations
                </button>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-stone-100 text-center text-xs text-stone-700 font-medium">
                {calculateScore() === quizQuestions.length ? (
                  <span className="text-emerald-700 font-bold">
                    🎉 Outstanding! You mastered all real-time systems and WebSocket concepts!
                  </span>
                ) : (
                  <span>Review the explanations above to reinforce key principles.</span>
                )}
              </div>
            )}
          </div>
        )}

        {/* =====================================================================
            TAB 6: RECOMMENDED TECHNICAL READING
            ===================================================================== */}
        {activeTab === "reading" && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-white border border-stone-200 mb-6">
              <h3 className="text-lg font-bold text-stone-900">Recommended Technical Reading</h3>
              <p className="text-xs text-stone-700 mt-1">
                Official specifications, architecture guides, and cheat sheets for real-time systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-stone-200 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-stone-900">MDN — WebSockets & Server-Sent Events</h4>
                  <p className="text-xs text-stone-700 mt-1">
                    Understand native browser APIs, bidirectional WebSocket frames, and HTTP/2
                    server-to-client event streaming.
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800"
                  >
                    MDN WebSockets Guide <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-100 text-stone-800 hover:bg-stone-200"
                  >
                    MDN SSE Guide <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Socket.IO — Scaling & Adapters</h4>
                  <p className="text-xs text-stone-700 mt-1">
                    Learn how logical rooms, connection routing, and multi-node clusters fan out
                    messages through the Redis adapter.
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href="https://socket.io/docs/v4/redis-adapter/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800"
                  >
                    Redis Adapter Guide <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://socket.io/docs/v4/adapter/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-100 text-stone-800 hover:bg-stone-200"
                  >
                    Explore Adapters <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-stone-900">OWASP — WebSocket Security Cheat Sheet</h4>
                  <p className="text-xs text-stone-700 mt-1">
                    Study Origin validation to prevent CSWSH, authentication during handshake, message
                    authorization, and rate limiting.
                  </p>
                </div>
                <div className="mt-4">
                  <a
                    href="https://cheatsheetseries.owasp.org/cheatsheets/WebSocket_Security_Cheat_Sheet.html"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800"
                  >
                    OWASP WebSocket Security <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Redis — Pub/Sub and Streams</h4>
                  <p className="text-xs text-stone-700 mt-1">
                    Compare transient in-memory fan-out with retained message logs, consumer groups, and
                    offset replay.
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href="https://redis.io/docs/latest/develop/use-cases/pub-sub/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800"
                  >
                    Redis Pub/Sub Guide <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://redis.io/docs/latest/develop/use-cases/streaming/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-100 text-stone-800 hover:bg-stone-200"
                  >
                    Redis Streams Guide <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =====================================================================
            MODULE COMPLETION & "WHAT COMES NEXT" BANNER
            ===================================================================== */}
        <div className="mt-12 p-6 rounded-2xl bg-[#faf8f4] border border-stone-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 mb-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Module 19 Completion Criteria Met
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                You Have Mastered Real-Time Distributed Architecture
              </h3>
              <p className="text-xs text-stone-700 mt-1 max-w-2xl leading-relaxed">
                You now possess the complete toolkit to select real-time transports, scale WebSockets
                across server clusters, engineer heartbeat presence leases, implement durable outbox
                notifications, and recover state after edge disconnections.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => navigate("/learning/system-design/security")}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-white border border-stone-300 text-stone-700 hover:bg-stone-100 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Previous: Module 18 (Security)
              </button>
              <button
                onClick={() => navigate("/learning/system-design/search")}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#f97316] text-white shadow-xs hover:bg-[#ea580c] transition cursor-pointer"
              >
                <span>Next: Module 20 (Search & Discovery)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
