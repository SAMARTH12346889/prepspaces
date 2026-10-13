import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  HelpCircle,
  Lightbulb,
  Network,
  RefreshCw,
  ShieldAlert,
  Terminal,
  Workflow,
  Sliders,
  Activity,
  Award,
  FileText,
  ExternalLink,
  TrendingUp,
  Globe,
  Lock,
  Zap,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";
import { VisualDiagramComponentModule3 } from "./SystemDesignNetworkingDiagrams";

/* -------------------------------------------------------------------------- */
/* SYSTEM DESIGN MASTERCLASS · MODULE 3                                       */
/* APIs, Communication Protocols, Networking, and Request Lifecycles          */
/* University Foundations: MIT 6.829, IETF RFCs 9110/9113/9114/9293, MDN, OpenAPI 3.1 */
/* -------------------------------------------------------------------------- */

const ASSESSMENT_QUESTIONS = [
  {
    id: 1,
    question: "1. What does DNS primarily help a client do?",
    options: [
      "Authorize a student to access a course",
      "Resolve a domain name into records used to locate services",
      "Guarantee that an HTTP request succeeds",
    ],
    correct: 1,
    explanation:
      "DNS translates human-readable domain names (such as api.prepspaces.example) into IP addresses (such as 203.0.113.10) and service records so network packets can be routed across the Internet.",
  },
  {
    id: 2,
    question: "2. What does TCP provide that ordinary UDP does not provide by itself?",
    options: [
      "Reliable, ordered byte-stream delivery",
      "Automatic user authentication",
      "A complete REST API",
    ],
    correct: 0,
    explanation:
      "TCP establishes a connection via a 3-way handshake and guarantees reliable, in-order byte delivery with automatic packet retransmission, flow control, and congestion avoidance.",
  },
  {
    id: 3,
    question: "3. Which statement about HTTP/2 is correct?",
    options: [
      "It requires every request to use a new TCP connection",
      "It supports multiplexed HTTP exchanges over a TCP connection",
      "It removes the need for HTTP status codes",
    ],
    correct: 1,
    explanation:
      "HTTP/2 uses binary framing to multiplex multiple concurrent bidirectional request/response streams over a single shared TCP connection, eliminating HTTP/1.1 connection head-of-line blocking.",
  },
  {
    id: 4,
    question:
      "4. A request to save a submission times out, but the database may have committed the write. What is the safest design response?",
    options: [
      "Assume no write occurred and blindly retry",
      "Use a defined idempotency and result-recovery mechanism",
      "Return success without checking the operation",
    ],
    correct: 1,
    explanation:
      "An HTTP timeout means the response was lost or delayed, not that the write failed. Using an Idempotency-Key allows the client to retry safely while the backend returns the committed record without duplicating operations.",
  },
  {
    id: 5,
    question: "5. What does CORS control?",
    options: [
      "Which cross-origin browser requests are permitted to expose responses to scripts",
      "Whether every caller is authenticated",
      "Whether the server can access its database",
    ],
    correct: 0,
    explanation:
      "CORS is a browser security mechanism that restricts web applications from reading responses to cross-origin HTTP requests unless the server explicitly permits that origin with Access-Control-Allow-Origin headers.",
  },
  {
    id: 6,
    question: "6. Which communication model is best suited to continuous two-way interactive messaging?",
    options: [
      "Ordinary one-off HTTP requests only",
      "WebSockets",
      "DNS A records",
    ],
    correct: 1,
    explanation:
      "WebSockets establish a persistent, full-duplex TCP communication channel allowing both client and server to exchange real-time frames with minimal overhead, ideal for chat and collaborative editing.",
  },
  {
    id: 7,
    question: "7. Which method is typically appropriate for retrieving a resource without requesting a state change?",
    options: ["GET", "POST", "PATCH"],
    correct: 0,
    explanation:
      "GET is defined by RFC 9110 as a 'safe' and 'idempotent' method intended solely for reading representation data without triggering side effects or mutations on the server.",
  },
  {
    id: 8,
    question: "8. Why might an API use SSE instead of polling?",
    options: [
      "SSE allows the server to stream events over a persistent HTTP connection",
      "SSE automatically authenticates all users",
      "SSE eliminates network failures",
    ],
    correct: 0,
    explanation:
      "Server-Sent Events (SSE) opens a single persistent HTTP connection (text/event-stream) through which the server pushes real-time updates as they occur, avoiding repeated wasteful polling requests.",
  },
];

export default function SystemDesignNetworking() {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(12);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'interactive' | 'qa' | 'assessment' | 'labs' | 'reading'

  // Interactive Waterfall Simulator State
  const [latDns, setLatDns] = useState(18);
  const [latTls, setLatTls] = useState(35);
  const [latGateway, setLatGateway] = useState(8);
  const [latApp, setLatApp] = useState(15);
  const [latDb, setLatDb] = useState(68);
  const [latTransit, setLatTransit] = useState(14);

  // Interactive Backoff Simulator State
  const [backoffBaseMs, setBackoffBaseMs] = useState(200);
  const [backoffMaxMs, setBackoffMaxMs] = useState(3000);
  const [backoffAttempts, setBackoffAttempts] = useState(4);
  const [jitterMode, setJitterMode] = useState("full"); // 'none' | 'full' | 'equal'

  // Interactive Rate Limiter Simulator State
  const [rateLimitCapacity, setRateLimitCapacity] = useState(50);
  const [rateLimitRefillRate, setRateLimitRefillRate] = useState(10); // tokens / sec
  const [burstRequests, setBurstRequests] = useState(65);

  // Assessment Quiz State
  const [userAnswers, setUserAnswers] = useState({});
  const [submittedQuiz, setSubmittedQuiz] = useState(false);

  // Calculations for Request Latency Waterfall
  const totalCalculatedLatency = latDns + latTls + latGateway + latApp + latDb + latTransit;
  const dbPercentage = Math.round((latDb / totalCalculatedLatency) * 100);

  // Calculations for Rate Limiter
  const admittedRequests = Math.min(rateLimitCapacity, burstRequests);
  const throttledRequests = Math.max(0, burstRequests - rateLimitCapacity);
  const refillTimeToFullSec = ((rateLimitCapacity - Math.max(0, rateLimitCapacity - burstRequests)) / rateLimitRefillRate).toFixed(1);

  // Backoff Delay Derivations (Pure deterministic jitter calculation)
  const retryDelays = useMemo(() => {
    const list = [];
    for (let i = 0; i < backoffAttempts; i++) {
      const expDelay = Math.min(backoffMaxMs, backoffBaseMs * Math.pow(2, i));
      let delay = expDelay;
      const pseudoRand = ((i * 37 + 19) % 100) / 100;
      if (jitterMode === "full") {
        delay = Math.round(pseudoRand * expDelay);
      } else if (jitterMode === "equal") {
        delay = Math.round(expDelay / 2 + (pseudoRand * expDelay) / 2);
      }
      list.push({ attempt: i + 1, expMax: expDelay, actual: delay });
    }
    return list;
  }, [backoffBaseMs, backoffMaxMs, backoffAttempts, jitterMode]);

  const handleSelectOption = (qId, optionIdx) => {
    if (submittedQuiz) return;
    setUserAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const handleCheckQuiz = () => {
    setSubmittedQuiz(true);
  };

  const handleResetQuiz = () => {
    setUserAnswers({});
    setSubmittedQuiz(false);
  };

  const quizScore = useMemo(() => {
    let correct = 0;
    ASSESSMENT_QUESTIONS.forEach((q) => {
      if (userAnswers[q.id] === q.correct) correct++;
    });
    return correct;
  }, [userAnswers]);

  /* -------------------------------------------------------------------------- */
  /* MODULE 3 TOPICS DATA (12 In-Depth University + Industry Lessons)           */
  /* -------------------------------------------------------------------------- */
  const systemDesignTopics = useMemo(
    () => [
      {
        id: "what-is-an-api",
        title: "Lesson 3.1 — What is an API?",
        shortTitle: "3.1 What is an API?",
        category: "Foundations",
        icon: Terminal,
        summary:
          "The Application Programming Interface as a contract boundary, architectural encapsulation, and why remote calls fundamentally differ from local function calls.",
        theory: [
          "An API (Application Programming Interface) formally defines how software components interact without exposing internal database structures or runtime implementation details.",
          "Consider PrepSpaces: Its React frontend retrieves course metadata from an Express/Node.js backend via GET /api/v1/courses/101. The frontend does not need to know the database engine, internal schema, or cluster size—it relies on the API contract.",
          "Architectural Advantages of API Boundaries:",
          "1. Independent Evolution: Frontend and backend teams deploy updates autonomously without lockstep coordination as long as contracts remain backward-compatible.",
          "2. Encapsulation: Internal tables, credentials, and indexing structures remain private behind security boundaries.",
          "3. Access Control & Authorization: The backend validates tokens and enforces tenant boundaries per operation.",
          "4. Multi-Client Consistency: Mobile apps, web SPAs, CLI tools, and partner integrations consume the identical business logic.",
          "5. Production Observability: API endpoints serve as standard instrumentation points for measuring latency (p95/p99), error rates, and distributed tracing spans.",
          "Key Distributed Systems Principle: A remote API call is NOT equivalent to a local in-process function call. Remote calls introduce network latency, serialization overhead, partial failure, packet loss, and timeout uncertainty.",
        ],
        keyPoints: [
          "Contract-Driven Architecture: OpenAPI 3.1 provides machine-readable specifications that drive documentation, mock servers, and automated contract tests.",
          "Local vs Remote Boundary: Local functions succeed or throw immediately. Remote APIs can hang indefinitely, timeout, or succeed while the response is lost in transit.",
        ],
        diagramType: "internet-stack",
        tables: [
          {
            title: "Categories of APIs in Distributed Engineering",
            headers: ["API Category", "Purpose", "Production Example"],
            rows: [
              ["Library API", "In-process function calls within the same runtime", "JavaScript Array.prototype.map() or Java SDK method"],
              ["HTTP API", "Resource communication over HTTP/1.1, HTTP/2, or HTTP/3", "Browser retrieving courses via GET /api/v1/courses/101"],
              ["RPC API", "Direct remote procedure invocation across microservices", "gRPC CourseService.GetCourse(GetCourseRequest)"],
              ["Database API", "Low-level binary protocol communication with datastores", "PostgreSQL wire protocol (TCP port 5432)"],
              ["OS API", "Kernel system calls for hardware, network, and file I/O", "Linux epoll(), socket(), read(), write()"],
              ["Event API", "Asynchronous message publishing and consumption", "Kafka/RabbitMQ assignment_submitted event topic"],
            ],
          },
        ],
        architectDecision:
          "Always design APIs contract-first using OpenAPI 3.1 or Protocol Buffers. Never expose internal database column names directly in client-facing payloads, and maintain clear isolation between internal domain models and external Data Transfer Objects (DTOs).",
        interviewQuestions: [
          {
            q: "Why is a remote network call fundamentally different from a local function call?",
            a: "A local function call operates in shared memory with microsecond predictability and guaranteed execution. A remote call traverses physical networks, introducing latency (10-150ms), packet loss, partial failures, serialization costs, and timeout ambiguity where the caller cannot know whether a timed-out mutation committed.",
          },
        ],
      },

      {
        id: "networking-stack",
        title: "Lesson 3.2 — The Internet Networking Stack",
        shortTitle: "3.2 Internet Protocol Stack",
        category: "Networking Foundations",
        icon: Network,
        summary:
          "The 4-layer Internet model (Application, Transport, Internet, Link/Physical), IP addressing, ports, and the complete recursive DNS resolution flow.",
        theory: [
          "Understanding how an HTTP request moves across the Internet requires understanding the layered protocol stack (MIT 6.829):",
          "1. Application Layer (HTTP/1.1, HTTP/2, HTTP/3, DNS, gRPC): Defines message meaning, status codes, headers, and payload serialization.",
          "2. Transport Layer (TCP, UDP, QUIC): Manages process-to-process communication using Ports. TCP ensures reliable, ordered streams with flow control. UDP sends connectionless datagrams. QUIC runs multiplexed streams over UDP.",
          "3. Internet Layer (IPv4, IPv6, ICMP, BGP): Routes packets across interconnected networks between IP addresses using best-effort delivery without arrival guarantees.",
          "4. Link & Physical Layer (Ethernet, Wi-Fi 802.11, Fiber): Transmits raw bits over physical media using MAC addresses and hardware frames.",
          "IP Addresses & Ports: An IP address identifies a host network interface; a port identifies an operating system process socket. A complete network connection is uniquely defined by the 5-tuple: (Protocol, Source IP, Source Port, Destination IP, Destination Port).",
          "Domain Name System (DNS): Maps domain names like 'api.prepspaces.example' to IP addresses. The recursive resolver checks its cache, then sequentially queries the Root nameserver (.), TLD nameserver (.example), and Authoritative nameserver (ns1.prepspaces.example) to obtain A (IPv4) or AAAA (IPv6) records.",
        ],
        keyPoints: [
          "Packet Encapsulation: Application messages are wrapped in TCP segments, which are encapsulated in IP packets, which are packaged into Ethernet frames.",
          "DNS Propagation & TTL: Changing a DNS record does not update all clients immediately. Recursive resolvers and client OS caches retain the old IP until the record's TTL (Time-To-Live) expires.",
        ],
        diagramType: "dns-resolution",
        tables: [
          {
            title: "Standard DNS Record Types & System Design Roles",
            headers: ["Record", "Target / Type", "System Design Role"],
            rows: [
              ["A Record", "IPv4 Address (e.g. 203.0.113.10)", "Routes traffic directly to an Application Load Balancer or edge server"],
              ["AAAA Record", "IPv6 Address (128-bit hex)", "Enables native modern IPv6 end-to-end client routing"],
              ["CNAME", "Canonical Domain Alias", "Points a subdomain (e.g. api.prepspaces.example) to a cloud CDN or ALB hostname"],
              ["MX Record", "Mail Exchanger", "Directs incoming email to designated transactional email servers"],
              ["TXT Record", "Arbitrary Text Strings", "Used for domain ownership verification, SPF, DKIM, and TLS issuance challenges"],
              ["TTL (Time-To-Live)", "Integer (Seconds)", "Specifies how long recursive resolvers can cache DNS responses before re-querying"],
            ],
          },
        ],
        architectDecision:
          "In production architectures, set DNS TTL to 300 seconds (5 minutes) for application endpoints to balance cache efficiency with the agility needed to failover to a disaster recovery region during outages.",
        interviewQuestions: [
          {
            q: "Explain what happens when a client looks up a domain name via DNS.",
            a: "1. The browser checks local cache, then OS stub resolver cache. 2. If missed, it queries the Recursive DNS Resolver. 3. The recursive resolver queries a Root Server for the TLD (.example). 4. It queries the TLD server for the authoritative nameservers. 5. It queries the Authoritative Nameserver, which returns the A/AAAA record with a TTL. 6. The resolver caches the record and returns the IP to the browser.",
          },
        ],
      },

      {
        id: "tcp-udp-tls",
        title: "Lesson 3.3 — TCP, UDP, TLS, and Secure Connections",
        shortTitle: "3.3 TCP, UDP, TLS & QUIC",
        category: "Protocols & Transport",
        icon: Lock,
        summary:
          "The TCP 3-way handshake, reliable byte streams vs UDP datagrams, TLS 1.3 cryptographic key exchange, and QUIC/HTTP/3 transport evolution.",
        theory: [
          "TCP (RFC 9293) establishes a connection via the 3-way handshake: SYN (Client initiates with initial sequence number) → SYN-ACK (Server acknowledges and sends its sequence number) → ACK (Client acknowledges, connection ESTABLISHED). This requires 1 full Round-Trip Time (RTT) before application data can flow.",
          "TCP Guarantees: Reliable delivery through ACKs and retransmissions, ordered byte stream via sequence numbers, flow control via receive windows, and congestion control (CUBIC, BBR) to prevent network collapse.",
          "TCP Timeout Ambiguity: TCP guarantees reliable transport delivery, but it CANNOT guarantee application success. A database write may commit successfully on the server while the network connection drops before the HTTP response reaches the client.",
          "UDP (User Datagram Protocol): Connectionless, lightweight packet transmission with zero handshake overhead and no retransmission. Essential for real-time video/voice (WebRTC) and the foundation of QUIC.",
          "TLS 1.3 (RFC 8446): Cryptographic privacy, message integrity, and server authentication via X.509 digital certificates. TLS 1.3 optimized the handshake from 2 RTTs down to 1 RTT by sending ECDH key share parameters directly inside the initial ClientHello.",
          "HTTP/3 & QUIC: Operates over UDP. QUIC combines transport connection setup and TLS 1.3 into a single 1-RTT exchange. Furthermore, QUIC multiplexes streams independently, completely eliminating TCP Head-of-Line blocking (packet loss on stream A does not stall stream B).",
        ],
        keyPoints: [
          "Handshake Overhead: Cold TCP + TLS 1.3 setup requires 2 RTTs (~70ms on a 35ms network). HTTP keep-alive connection reuse amortizes this cost to 0 RTT for subsequent requests.",
          "QUIC 0-RTT Resumption: Clients with cached TLS session tickets can send encrypted application data on the very first packet of a resumed connection.",
        ],
        diagramType: "handshake-comparison",
        tables: [
          {
            title: "Transport Protocol Comparison: HTTP/1.1 vs HTTP/2 vs HTTP/3",
            headers: ["Feature", "HTTP/1.1 over TLS", "HTTP/2 over TLS", "HTTP/3 over QUIC"],
            rows: [
              ["Underlying Transport", "TCP", "TCP", "QUIC over UDP"],
              ["Connection Setup Cost", "2 RTTs (1 TCP + 1 TLS 1.3)", "2 RTTs (1 TCP + 1 TLS 1.3)", "1 RTT Initial / 0-RTT Resumption"],
              ["Multiplexing", "No (1 request per TCP socket)", "Yes (Multiplexed streams over 1 TCP)", "Yes (Independent multiplexed streams)"],
              ["Head-of-Line Blocking", "Severe (HTTP-level HoL blocking)", "TCP-level HoL (packet drop stalls all streams)", "None (Packet drop only stalls affected stream)"],
              ["Header Compression", "None (Verbose plaintext)", "HPACK (Static/Dynamic table)", "QPACK (Out-of-order compression)"],
              ["Connection Migration", "Broken when IP changes (Wi-Fi → 5G)", "Broken when IP changes", "Seamless (Survives IP change via Connection ID)"],
            ],
          },
        ],
        architectDecision:
          "Enable HTTP/2 or HTTP/3 at your CDN/Edge layer while maintaining persistent keep-alive connection pools between the reverse proxy and internal backend services to avoid repetitive handshake latency.",
        interviewQuestions: [
          {
            q: "Why does HTTP/2 still suffer from Head-of-Line blocking, and how does HTTP/3 solve it?",
            a: "While HTTP/2 multiplexes streams logically at the application layer, all streams share a single TCP byte stream. If a single TCP packet is dropped, TCP halts delivery of all subsequent bytes until the lost packet is retransmitted. HTTP/3 solves this by using QUIC over UDP, where each stream is transported independently; a dropped packet in stream A does not delay streams B or C.",
          },
        ],
      },

      {
        id: "http-foundations",
        title: "Lesson 3.4 — HTTP: The Foundation of Web APIs",
        shortTitle: "3.4 HTTP Protocol Anatomy",
        category: "HTTP Engineering",
        icon: Globe,
        summary:
          "Anatomy of HTTP requests and responses, method semantics, status code classification, production headers, and RFC 9111 caching mechanisms.",
        theory: [
          "HTTP (Hypertext Transfer Protocol) is an application-level, stateless request-response protocol defined in RFC 9110. Clients send requests specifying a method, path, headers, and body; servers return status codes, headers, and payloads.",
          "HTTP Method Semantics:",
          "• Safe Methods: GET, HEAD. Must not alter server state or trigger business side effects.",
          "• Idempotent Methods: PUT (full replacement), DELETE (resource removal), GET, HEAD. Executing N times leaves the system in the identical state as executing once.",
          "• Non-Idempotent Methods: POST (create subordinate resource, append, trigger workflow), PATCH (partial updates with conditional semantics).",
          "HTTP Status Codes Classification:",
          "• 2xx Success: 200 OK, 201 Created (with Location header), 202 Accepted (async queueing), 204 No Content.",
          "• 3xx Redirection: 301 Moved Permanently, 304 Not Modified (conditional cache hit), 308 Permanent Redirect.",
          "• 4xx Client Errors: 400 Bad Request, 401 Unauthorized (unauthenticated), 403 Forbidden (authenticated but lacking permissions), 404 Not Found, 409 Conflict, 422 Unprocessable Content (validation failure), 429 Too Many Requests (rate limited).",
          "• 5xx Server Errors: 500 Internal Error, 502 Bad Gateway (upstream failed), 503 Service Unavailable, 504 Gateway Timeout.",
          "Production Anti-Pattern: Never return HTTP 200 OK with a body like '{ success: false, error: ... }'. Doing so breaks HTTP caching, disrupts reverse proxy retry policies, and corrupts automated SRE alerting metrics.",
          "HTTP Caching (RFC 9111): Cache-Control directives ('public, max-age=300' vs 'private, no-cache'). Conditional requests using ETags (entity tags) and If-None-Match allow servers to respond with 304 Not Modified without retransmitting response payloads.",
        ],
        keyPoints: [
          "401 vs 403: 401 Unauthorized means 'Who are you? Please authenticate'. 403 Forbidden means 'I know who you are, but you are not allowed to access this resource'.",
          "Cache-Control: private: Crucial for user dashboards and personalized student grades to prevent shared CDN proxies from leaking sensitive data to other users.",
        ],
        diagramType: "cors-preflight",
        tables: [
          {
            title: "Production HTTP Headers & Architectural Roles",
            headers: ["Header Name", "Category", "System Design Purpose"],
            rows: [
              ["Content-Type", "Representation", "Specifies payload MIME format (e.g. application/json, text/event-stream)"],
              ["Authorization", "Security", "Carries credentials (e.g. 'Bearer <jwt_token>') to authenticate the caller"],
              ["Cache-Control", "Caching", "Directives for browser and CDN caching (e.g. 'private, no-cache, max-age=0')"],
              ["ETag / If-None-Match", "Validation", "Unique hash of resource representation enabling conditional 304 responses"],
              ["Idempotency-Key", "Resilience", "Unique client UUID preventing duplicate execution during network retries"],
              ["X-Request-ID / traceparent", "Observability", "Correlation identifier propagated across microservices for distributed tracing"],
              ["Retry-After", "Rate Limiting", "Seconds or HTTP date client must wait before retrying after a 429 or 503"],
            ],
          },
        ],
        architectDecision:
          "Enforce strict schema validation on all incoming HTTP payloads and return RFC 7807 'Problem Details for HTTP APIs' formatted JSON error responses with standard status codes.",
        interviewQuestions: [
          {
            q: "What is the difference between PUT and PATCH, and which is idempotent?",
            a: "PUT is a full replacement of the resource representation and is strictly idempotent: sending the same PUT payload 5 times results in the exact same resource state. PATCH is a partial update modifying specific fields; while PATCH can be idempotent, it is not inherently guaranteed to be idempotent unless designed with explicit state-check semantics.",
          },
        ],
      },

      {
        id: "rest-api-design",
        title: "Lesson 3.5 — REST API Design and Resource Modeling",
        shortTitle: "3.5 REST Design & OpenAPI",
        category: "API Design",
        icon: FileText,
        summary:
          "Resource modeling over RPC actions, sub-resource relationships, cursor vs offset pagination, parameterized queries, and OpenAPI 3.1 contracts.",
        theory: [
          "REST (Representational State Transfer) is an architectural style emphasizing resource-oriented URIs, stateless communication, standard HTTP methods, and hypermedia representation.",
          "Resource-Oriented Naming: Model entities as nouns in plural form rather than procedural verbs in URLs. Use HTTP methods to express actions:",
          "• Bad: POST /getCourse?id=101, POST /updateCourseTitle, POST /deleteCourse",
          "• Good: GET /api/v1/courses/101, PATCH /api/v1/courses/101, DELETE /api/v1/courses/101",
          "Relational Sub-Resources: Express ownership hierarchies naturally: GET /api/v1/courses/101/lessons. However, avoid nesting more than 2 levels deep (e.g. avoid /api/v1/orgs/1/departments/2/teams/3/members/4/tasks) to keep route handlers and authorization simple.",
          "The '/me' Convention: Routes like GET /api/v1/me/enrollments determine user identity directly from the validated JWT token context. Never accept a client-provided userId query parameter as proof of identity.",
          "Pagination Strategies:",
          "1. Offset-Based: GET /courses?limit=20&offset=40. Simple to implement in SQL ('LIMIT 20 OFFSET 40'), but suffers from severe performance degradation on large offsets (O(N) row scanning) and page drift when records are inserted or deleted.",
          "2. Cursor-Based: GET /courses?limit=20&after=eyJpZCI6MTA0Mn0. Uses an opaque pointer to the last retrieved record ('WHERE id > 1042 ORDER BY id ASC LIMIT 20'). Delivers consistent O(1) performance using indexed columns and prevents skipped records.",
        ],
        keyPoints: [
          "OpenAPI 3.1 Specification: Documents endpoints, input schemas, response codes, and authentication requirements in a standardized JSON/YAML format.",
          "SQL Parameterization: Never concatenate user query parameters into raw SQL. Always use parameterized queries or ORM sanitization to eliminate SQL injection vulnerabilities.",
        ],
        diagramType: "communication-styles",
        tables: [
          {
            title: "Offset-Based vs Cursor-Based Pagination Comparison",
            headers: ["Attribute", "Offset-Based Pagination", "Cursor-Based Pagination"],
            rows: [
              ["Query Example", "GET /courses?limit=20&offset=100000", "GET /courses?limit=20&after=cursor_xyz"],
              ["Database Query", "SELECT * FROM courses LIMIT 20 OFFSET 100000", "SELECT * FROM courses WHERE id > 1042 LIMIT 20"],
              ["Deep Page Performance", "Terrible (Scans & discards 100k rows in memory)", "Excellent (Immediate index lookup via B-Tree)"],
              ["Page Drift Resilience", "Poor (Inserts cause duplicated or skipped items)", "Excellent (Immune to inserts ahead of cursor)"],
              ["Arbitrary Page Jumping", "Yes (Can jump directly to page 500)", "No (Must traverse forward/backward via cursors)"],
              ["Best Use Case", "Small admin tables with explicit page numbers", "Infinite scrolling feeds, active catalogs, large APIs"],
            ],
          },
        ],
        architectDecision:
          "Adopt cursor-based pagination as the default for all public collections and high-throughput entity endpoints, encoding cursors as base64-encoded composite tokens containing indexed sort keys.",
        interviewQuestions: [
          {
            q: "Why does OFFSET pagination degrade in performance as the offset increases?",
            a: "In SQL databases, 'OFFSET 100000 LIMIT 20' requires the database engine to fetch and read all 100,020 rows from disk/index, evaluate visibility, and then discard the first 100,000 rows. Cursor-based pagination uses an indexed inequality check (WHERE id > 100000 LIMIT 20) which seeks directly to the target record in the B-Tree in O(log N) time.",
          },
        ],
      },

      {
        id: "api-communication-styles",
        title: "Lesson 3.6 — API Communication Styles: REST, RPC, GraphQL, and Events",
        shortTitle: "3.6 REST, RPC, GraphQL & Events",
        category: "Communication Paradigms",
        icon: Workflow,
        summary:
          "Comparative evaluation of REST, gRPC (Protocol Buffers), GraphQL, and asynchronous event brokers for service-to-service and client-facing communication.",
        theory: [
          "Selecting the right communication style is a defining architectural choice. Different paradigms suit different latency, payload, and operational requirements:",
          "1. REST over HTTP: Best for public web APIs, resource CRUD, and browser clients. Relies on standard HTTP status codes, URI hierarchy, and widespread tooling. Simple to debug with curl and Postman.",
          "2. RPC & gRPC: Best for low-latency internal microservice communication and high-throughput streaming. Uses Protocol Buffers (protobuf) for compact binary serialization and code-generated typed clients across languages (Go, Java, Python, Node.js). Runs on HTTP/2 with bidirectional streaming.",
          "3. GraphQL: Best for complex mobile/web frontends that aggregate related data from multiple domain services. The client submits a single query declaring exactly the fields needed, eliminating over-fetching. Requires careful server-side query complexity analysis to prevent DoS attacks.",
          "4. Asynchronous Event-Driven Messaging: Best for decoupled workflows and long-running operations (e.g. assignment submission triggers video transcoding, anti-plagiarism scanning, and notifications). The producer publishes an event to Kafka or RabbitMQ; worker consumers process jobs independently without blocking the caller.",
        ],
        keyPoints: [
          "No Silver Bullet: High-scale platforms typically combine several styles: REST/GraphQL for web/mobile ingress, gRPC for internal service meshes, and message queues for background processing.",
          "Protobuf Efficiency: Binary protobuf messages are typically 3–10× smaller and serialize/deserialize 5–20× faster than equivalent JSON payloads.",
        ],
        diagramType: "communication-styles",
        tables: [
          {
            title: "Comprehensive Communication Style Architectural Matrix",
            headers: ["Paradigm", "Protocol / Wire Format", "Coupling", "Best Applied When"],
            rows: [
              ["REST", "HTTP/1.1 & 2 / JSON", "Loose (URI contracts)", "Public APIs, standard web CRUD, third-party developers"],
              ["gRPC", "HTTP/2 / Protocol Buffers (Binary)", "Strict (Proto schema contracts)", "Internal microservice mesh, streaming, cross-language services"],
              ["GraphQL", "HTTP POST / JSON", "Client-driven query", "Complex frontend UIs aggregating nested graphs of data"],
              ["Event Broker", "TCP / Kafka, AMQP (Binary/JSON)", "Completely decoupled", "Asynchronous jobs, audit logging, eventual consistency workflows"],
            ],
          },
        ],
        architectDecision:
          "Standardize on REST/JSON at the external API Gateway boundary for public and browser clients, while enforcing gRPC with strict Protobuf schemas for all internal east-west microservice communication.",
        interviewQuestions: [
          {
            q: "When would you choose gRPC over REST for microservices?",
            a: "Choose gRPC when you need high-throughput, low-latency service-to-service communication. Protobuf provides compact binary serialization (reducing network bandwidth and CPU cycles), HTTP/2 multiplexing allows multiple calls over one connection, strong interface typing prevents runtime contract errors, and native streaming supports real-time pipelines.",
          },
        ],
      },

      {
        id: "request-lifecycle",
        title: "Lesson 3.7 — The Complete Browser-to-Backend Request Lifecycle",
        shortTitle: "3.7 Request Lifecycle & Latency",
        category: "Systems Execution",
        icon: Activity,
        summary:
          "End-to-end 8-stage journey of an HTTPS request from browser click to backend database commit, latency decomposition formula, and critical path analysis.",
        theory: [
          "Understanding the exact end-to-end path of an HTTP request is essential for debugging slowness and architecting low-latency distributed systems:",
          "Stage 1. Browser Processing: User clicks a course. The browser parses the URL, evaluates local Cache-Control rules, and initiates network fetch.",
          "Stage 2. DNS Resolution: Checks local cache; on miss, queries recursive resolver to obtain the target IP (203.0.113.10) in 10-30ms.",
          "Stage 3. Connection Establishment: Establishes TCP 3-way handshake (1 RTT) followed by TLS 1.3 cryptographic key exchange (1 RTT) to the Edge CDN or ALB. (Reused on keep-alive connections).",
          "Stage 4. Edge CDN & WAF Ingress: Edge node inspects headers, enforces DDoS mitigations and rate limits, and forwards request across private cloud backbone.",
          "Stage 5. Load Balancing & TLS Termination: Application Load Balancer terminates TLS, evaluates path routing rules (/api/v1/*), and distributes request to an active backend container via round-robin or least-outstanding-requests.",
          "Stage 6. Backend Execution: Express.js middleware parses JSON, validates JWT token signature, executes business logic, and checks Redis cache.",
          "Stage 7. Database Query: On cache miss, executes indexed SQL query on PostgreSQL primary (40-80ms).",
          "Stage 8. Response Transit & Browser Rendering: Backend serializes JSON, compresses payload (gzip/brotli), returns HTTP 200 OK. Browser parses JSON and renders DOM.",
          "Latency Decomposition Formula: T_total ≈ T_dns + T_conn + T_gateway + T_app + T_db + T_transit. In most web applications, database queries and sequential external API calls dominate the critical path.",
        ],
        keyPoints: [
          "Sequential vs Parallel Execution: If a course page requires instructor data, lesson list, and reviews, executing queries sequentially takes (50ms + 40ms + 60ms = 150ms). Executing in parallel using Promise.all() reduces duration to max(50, 40, 60) = 60ms.",
          "Critical Path Bottlenecks: Optimizing a 2ms application function delivers negligible benefit if the request is blocked on a 75ms unindexed database query.",
        ],
        diagramType: "request-lifecycle",
        tables: [
          {
            title: "Latency Contribution Breakdown for GET /api/v1/courses/101",
            headers: ["Stage", "Component", "Typical Duration", "Percentage"],
            rows: [
              ["DNS Lookup", "Browser / Resolver Cache", "18 ms", "12%"],
              ["TCP + TLS Handshake", "Client to Cloud Edge", "35 ms", "23%"],
              ["Gateway & Routing", "Cloud ALB / WAF", "8 ms", "5%"],
              ["Auth & App Logic", "Node.js Microservice", "12 ms", "8%"],
              ["Database Access", "PostgreSQL Read Replica", "68 ms", "44% (Bottleneck!)"],
              ["Response Serialization", "Network Transit to Client", "14 ms", "9%"],
              ["Total Request Duration", "End-to-End Latency", "155 ms", "100%"],
            ],
          },
        ],
        architectDecision:
          "Profile distributed traces using the critical path method: prioritize optimizations that parallelize independent I/O operations and introduce caching (Redis) for read-heavy database bottlenecks.",
        interviewQuestions: [
          {
            q: "Walk through what happens under the hood when you type a URL into a browser and press Enter.",
            a: "1. Browser parses URL and checks local/HSTS cache. 2. DNS resolution converts domain to IP via recursive resolver. 3. TCP 3-way handshake establishes socket. 4. TLS 1.3 handshake negotiates cipher keys. 5. Browser sends HTTP GET request. 6. Reverse proxy/ALB routes request to backend. 7. Backend authenticates request and queries database. 8. Backend returns HTTP response. 9. Browser renders HTML/JSON and fetches child assets.",
          },
        ],
      },

      {
        id: "cors-and-security",
        title: "Lesson 3.8 — CORS, Authentication, and API Security Boundaries",
        shortTitle: "3.8 CORS & API Security",
        category: "Security Engineering",
        icon: ShieldAlert,
        summary:
          "Same-Origin Policy, CORS preflight OPTIONS protocol, token authentication vs authorization, and defense-in-depth API security boundaries.",
        theory: [
          "Same-Origin Policy (SOP): A fundamental browser security boundary preventing scripts on origin A (https://attacker.example) from reading resources on origin B (https://prepspaces.example). An origin is defined by the exact tuple of (Scheme, Host, Port).",
          "Cross-Origin Resource Sharing (CORS): An HTTP-header-based mechanism that allows a server to relax the Same-Origin Policy for trusted client origins. When a frontend at 'https://prepspaces.example' calls 'https://api.prepspaces.example', it constitutes a cross-origin request because the hostnames differ.",
          "CORS Preflight Mechanism: For requests using non-simple methods (PUT, PATCH, DELETE) or custom headers (Authorization, Content-Type: application/json), the browser automatically dispatches an HTTP OPTIONS preflight request before sending the actual request.",
          "Crucial Architectural Reality: CORS IS NOT AUTHENTICATION. CORS is enforced solely by web browsers. A malicious attacker using curl, Postman, Python, or mobile apps sends direct HTTP requests without triggering or respecting CORS headers. Server-side authentication and authorization remain mandatory for every request.",
          "Authentication vs Authorization:",
          "• Authentication (AuthN): Verifies the identity of the caller (e.g. validates cryptographic signature of a JWT bearer token or session cookie).",
          "• Authorization (AuthZ): Verifies whether that authenticated user possesses the specific permissions to perform the requested operation on the target resource ID (preventing Insecure Direct Object References - IDOR).",
        ],
        keyPoints: [
          "CORS Credentials & Wildcards: When sending requests with cookies or Authorization headers ('credentials: include'), the server CANNOT use wildcard 'Access-Control-Allow-Origin: *'. It must explicitly reflect the exact origin.",
          "Defense-in-Depth: Never rely solely on an API gateway for security. Backends must independently validate user identity and enforce tenant-level resource ownership.",
        ],
        diagramType: "cors-preflight",
        tables: [
          {
            title: "Common API Credential Mechanisms Comparison",
            headers: ["Mechanism", "Storage Location", "Primary Vulnerability", "Best Defense"],
            rows: [
              ["HttpOnly Cookie", "Browser Cookie Store", "Cross-Site Request Forgery (CSRF)", "SameSite=Strict/Lax + Anti-CSRF tokens"],
              ["Bearer JWT Token", "In-Memory / LocalStorage", "Cross-Site Scripting (XSS) token theft", "Store in memory or BFF (Backend-for-Frontend)"],
              ["API Key", "Client Configuration / Header", "Accidental leakage in git/public scripts", "Restrict by IP/referrer + rate limits"],
              ["Mutual TLS (mTLS)", "TLS Client Certificate", "Operational complexity of cert rotation", "Automated rotation via service mesh (Istio)"],
            ],
          },
        ],
        architectDecision:
          "Implement the Backend-for-Frontend (BFF) pattern: terminate browser sessions using secure, HttpOnly, SameSite=Strict cookies at the frontend gateway, and exchange them for short-lived JWT tokens for internal service calls.",
        interviewQuestions: [
          {
            q: "A developer says: 'Our API is secure because we configured CORS to only allow our company domain.' Why is this statement dangerously flawed?",
            a: "CORS is enforced exclusively by web browser runtimes to prevent unauthorized client scripts from reading responses. It provides zero protection against direct HTTP requests sent via curl, scripts, Postman, or mobile apps. Without robust server-side token authentication, input validation, and object-level authorization, the API remains completely vulnerable.",
          },
        ],
      },

      {
        id: "real-time-communication",
        title: "Lesson 3.9 — Real-Time Communication: WebSockets, SSE, and Webhooks",
        shortTitle: "3.9 WebSockets, SSE & Webhooks",
        category: "Real-Time Systems",
        icon: Zap,
        summary:
          "Trade-offs between polling, Server-Sent Events (SSE), full-duplex WebSockets, and asynchronous webhook delivery contracts.",
        theory: [
          "Not all system interactions follow the simple synchronous request-response model. Modern platforms require real-time updates and asynchronous event notifications:",
          "1. Short Polling vs Long Polling: Short polling periodically requests data (e.g. every 5s). Simple to implement, but wastes server CPU and network bandwidth when no new data exists. Long polling holds the HTTP connection open until the server has new data or a timeout occurs.",
          "2. Server-Sent Events (SSE): Unidirectional, server-to-client continuous streaming over standard HTTP (Content-Type: text/event-stream). Native browser support (EventSource API), automatic reconnection handling, and works effortlessly through standard firewalls, reverse proxies, and HTTP/2 multiplexing. Ideal for video transcoding progress bars, AI token streaming, and notification feeds.",
          "3. WebSockets (RFC 6455): Full-duplex, bidirectional persistent TCP socket initiated via an HTTP 101 Switching Protocols upgrade handshake. Enables both client and server to push lightweight binary or text frames at any time with minimal header overhead (2–10 bytes). Ideal for collaborative editing, live interview coding rooms, and real-time chat.",
          "4. Webhooks: Server-to-server asynchronous HTTP callbacks. When an external event occurs (e.g. Stripe payment succeeded), the provider sends an HTTP POST request to a pre-registered endpoint on your server.",
          "Webhook Reliability Best Practices: Receivers must verify HMAC cryptographic signatures, return 200 OK immediately, enqueue the payload to a background worker, and implement idempotency to handle provider retries safely.",
        ],
        keyPoints: [
          "Stateful Connection Scaling: WebSockets and SSE maintain persistent connections. Horizontal scaling requires an external publish/subscribe message bus (e.g. Redis Pub/Sub) to route messages across different server instances.",
          "WebSocket Backpressure: Standard browser WebSocket APIs lack native backpressure mechanisms; fast producers can overflow client memory buffers if slow consumers cannot process frames quickly enough.",
        ],
        diagramType: "communication-styles",
        tables: [
          {
            title: "Real-Time Communication Selection Decision Matrix",
            headers: ["Feature", "Short Polling", "Server-Sent Events (SSE)", "WebSockets", "Webhooks"],
            rows: [
              ["Direction", "Client → Server (Pull)", "Server → Client (Push)", "Bidirectional (Full-Duplex)", "Server → Server (Push)"],
              ["Protocol", "Standard HTTP", "Standard HTTP (text/event-stream)", "WebSocket Protocol (ws://, wss://)", "Standard HTTP POST"],
              ["Connection Lifecycle", "Transient", "Persistent", "Persistent", "Transient"],
              ["Header Overhead", "High (Full HTTP headers each call)", "Low (Persistent stream)", "Extremely Low (2-10 byte frame headers)", "Standard HTTP POST headers"],
              ["Reconnection", "Manual client timer", "Automatic native browser reconnect", "Manual implementation required", "Managed by sender retry policy"],
              ["Best Production Fit", "Low-frequency changes", "AI streaming, job status, notifications", "Live coding rooms, whiteboards, chat", "Third-party payment & SaaS events"],
            ],
          },
        ],
        architectDecision:
          "Use Server-Sent Events (SSE) for unidirectional feeds and AI response streaming; reserve WebSockets strictly for interactive bidirectional collaborative workspaces like our Technical Interview Room.",
        interviewQuestions: [
          {
            q: "When would you choose Server-Sent Events (SSE) over WebSockets?",
            a: "Choose SSE when communication is strictly unidirectional from server to client (such as live stock tickers, build logs, or AI token generation). SSE operates over standard HTTP, natively supports automatic reconnections and event IDs, multiplexes cleanly over HTTP/2, and avoids the operational complexity of stateful WebSocket firewalls and custom heartbeat protocols.",
          },
        ],
      },

      {
        id: "timeouts-and-idempotency",
        title: "Lesson 3.10 — Timeouts, Retries, Idempotency, and Failure Handling",
        shortTitle: "3.10 Timeouts, Retries & Idempotency",
        category: "Reliability & Resiliency",
        icon: RefreshCw,
        summary:
          "The unconfirmed timeout problem, deadline propagation, exponential backoff with full jitter, idempotency keys, and circuit breaker patterns.",
        theory: [
          "Network communication is fundamentally uncertain: A client that experiences a timeout CANNOT determine whether: 1. The request failed to reach the server. 2. The server crashed mid-execution. 3. The server committed the operation but the response packet was lost. Blindly retrying non-idempotent operations creates duplicate charges, double submissions, or corrupt data.",
          "Timeout Hierarchy & Deadlines: Configure defense-in-depth timeouts at every boundary: Connection timeout (1-3s), Gateway timeout (10-15s), Upstream service timeout (2-5s), Database statement timeout (1-2s). Propagate end-to-end deadlines via headers ('X-Deadline') so downstream services abort work when the caller has already given up.",
          "Retry Strategy with Exponential Backoff & Full Jitter:",
          "• Formula: d_n = min(d_max, d_0 * 2^n).",
          "• Full Jitter: Sleep = random_between(0, d_n). Adding randomness prevents the 'thundering herd' problem where thousands of retrying clients synchronize their retry requests and repeatedly overwhelm a recovering service.",
          "Idempotency Keys (RFC Draft): An idempotency key is a unique UUID generated by the client and sent in an 'Idempotency-Key' HTTP header for mutating operations (POST).",
          "Production Idempotency Lifecycle:",
          "1. Client generates UUID '7d2de92c' and dispatches POST /submissions.",
          "2. Backend checks idempotency_records table in a database transaction. If key exists with status 'completed', it immediately returns the cached response.",
          "3. If key is new, it records status 'processing', executes the submission write, updates key status to 'completed' with serialized response, and commits.",
          "Circuit Breaker Pattern: Monitors downstream service failures. State starts 'Closed' (normal). If failure rate exceeds 50%, state trips to 'Open' (fails fast immediately without calling downstream). After a cooldown, enters 'Half-Open' to test if the service has recovered.",
        ],
        keyPoints: [
          "Graceful Degradation: When an optional service fails (e.g. course recommendation engine), the system should degrade gracefully and return the main course details without recommendations. Never bypass security or payment checks as 'degradation'.",
          "Idempotency Key Retention: Retain idempotency records in Redis or PostgreSQL with a 24-48 hour TTL to accommodate delayed retries.",
        ],
        diagramType: "idempotency-timeout",
        tables: [
          {
            title: "Timeout Layer Responsibilities in High-Scale Architectures",
            headers: ["Timeout Type", "Recommended Threshold", "Failure Consequence if Missing"],
            rows: [
              ["Connection Timeout", "1.0 – 2.5 seconds", "Client threads block waiting for dead IPs during routing outages"],
              ["Upstream HTTP Timeout", "3.0 – 5.0 seconds", "Reverse proxy thread exhaustion cascading into platform-wide outage"],
              ["Database Statement Timeout", "1.0 – 2.0 seconds", "Slow table-scan locks exhaust database connection pool"],
              ["Distributed Deadline", "Total budget (e.g. 8s)", "Zombie queries continue consuming CPU after client has disconnected"],
            ],
          },
        ],
        architectDecision:
          "Enforce Idempotency-Key validation on all state-mutating financial and submission endpoints, backed by atomic database row-level locking to prevent concurrent duplicate execution.",
        interviewQuestions: [
          {
            q: "How does an idempotency key work, and what edge cases must you handle in production?",
            a: "The client generates a unique UUID per intent and sends it in the 'Idempotency-Key' header. The server records the key atomically in a database table. Edge cases: 1. Concurrent requests with same key (use database row lock or Redis distributed lock). 2. Same key sent with different payload (reject with 422 Unprocessable Content). 3. Crash during processing (record 'processing' status with a lease timeout). 4. Response caching (store status code and response body to replay).",
          },
        ],
      },

      {
        id: "rate-limiting-and-versioning",
        title: "Lesson 3.11 — API Reliability, Rate Limiting, and Versioning",
        shortTitle: "3.11 Rate Limiting & Versioning",
        category: "Operational Governance",
        icon: Sliders,
        summary:
          "Rate limiting algorithms (Token Bucket, Leaky Bucket, Sliding Window), payload constraints, and evolutionary API versioning strategies.",
        theory: [
          "Rate Limiting safeguards system availability against noisy neighbors, accidental infinite client loops, credential stuffing, and DDoS attacks. When limits are exceeded, return HTTP 429 Too Many Requests with a 'Retry-After' header.",
          "Core Rate Limiting Algorithms:",
          "1. Token Bucket: Tokens are added to a bucket at a constant refill rate (e.g. 10 tokens/sec) up to capacity N. Each request consumes 1 token. Allows bursty traffic up to bucket capacity while maintaining a stable sustained rate. Widely implemented in AWS, Cloudflare, and Redis.",
          "2. Leaky Bucket: Requests enter a FIFO queue and leak out at a constant, smooth rate. Smooths out traffic spikes, ideal for outbound third-party API rate limits.",
          "3. Sliding Window Counter: Combines fixed window counters with weight interpolation from previous windows to prevent burst boundary spikes (e.g. 100 requests at 11:59 and 100 at 12:00).",
          "Payload & Memory Safeguards: Express servers should always configure explicit body parser size limits (e.g. 'express.json({ limit: '100kb' })') to prevent heap memory exhaustion attacks. For large file uploads, never proxy file bytes through API application servers; issue pre-signed S3/GCS upload URLs.",
          "API Versioning Strategies:",
          "• URI Path Versioning: /api/v1/courses (explicit, cache-friendly, simple for clients).",
          "• Header Versioning: Accept-Version: 2.0 (clean URLs, but harder to test in browser address bars).",
          "• Media-Type Negotiation: Accept: application/vnd.prepspaces.v2+json (REST-pure, but complex client adoption).",
        ],
        keyPoints: [
          "Backward Compatibility Rules: Adding new optional fields to a JSON response is backward-compatible. Renaming fields, changing data types, or adding mandatory request parameters is a breaking change requiring a new API version.",
          "Deprecation Policy: When deprecating an endpoint, signal upcoming retirement using standard 'Sunset' and 'Deprecation' HTTP headers.",
        ],
        diagramType: "idempotency-timeout",
        tables: [
          {
            title: "Common API Design Anti-Patterns & Correct Engineering Fixes",
            headers: ["Anti-Pattern", "Architectural Hazard", "Engineered Production Remedy"],
            rows: [
              ["Returning 200 OK for Errors", "Corrupts SRE observability and reverse proxy retry logic", "Return standard 4xx/5xx status codes with RFC 7807 error bodies"],
              ["Unbounded Collection Queries", "Memory exhaustion & database lock saturation", "Enforce mandatory pagination with strict MAX_LIMIT (e.g. 100)"],
              ["Blind Write Retries", "Duplicate database mutations and multiple financial charges", "Require client Idempotency-Key headers with server deduplication"],
              ["Leaking Internal Stack Traces", "Security vulnerability exposing library versions & paths", "Sanitize error responses and log full traces internally with traceId"],
              ["Proxying Large File Uploads", "Saturates application server memory and event loop threads", "Generate short-lived pre-signed direct S3/GCS upload URLs"],
              ["Silent Breaking Field Changes", "Crashes older mobile apps and partner integrations", "Follow additive evolution rules or increment major URI version"],
            ],
          },
        ],
        architectDecision:
          "Deploy rate limiting at both the Cloud Edge / WAF layer (IP-based volumetric protection) and the API Gateway layer (authenticated user/API-key token bucket with Redis).",
        interviewQuestions: [
          {
            q: "How does the Token Bucket algorithm work, and why is it preferred over a Fixed Window counter?",
            a: "A token bucket holds up to N tokens. Tokens are continuously added at a fixed rate R. Incoming requests consume 1 token; if the bucket is empty, the request is rejected with HTTP 429. It is preferred over fixed windows because fixed windows permit double the quota across the window boundary (e.g. 100 requests at 00:59 and 100 at 01:00 = 200 requests in 2 seconds), whereas a token bucket guarantees sustained rates while gracefully accommodating temporary bursts.",
          },
        ],
      },

      {
        id: "observability-and-debugging",
        title: "Lesson 3.12 — Observability and Debugging Request Lifecycles",
        shortTitle: "3.12 Observability & Tracing",
        category: "Production Operations",
        icon: TrendingUp,
        summary:
          "Structured logging with correlation IDs, RED metrics, OpenTelemetry distributed tracing spans, and outside-in debugging methodologies.",
        theory: [
          "When an API endpoint experiences high latency or intermittent failures, engineers must diagnose the exact bottleneck across distributed boundaries without guessing.",
          "The Three Pillars of API Observability:",
          "1. Structured Logging: Emit machine-readable JSON logs containing standard fields: timestamp, level, traceId, spanId, httpMethod, routeTemplate, statusCode, durationMs, and userId. Never log plaintext secrets, authorization tokens, or PII.",
          "2. Metrics & Service Level Indicators (SLIs): Monitor APIs using the RED Method: Rate (requests per second), Errors (number of failed requests / 5xx rate), and Duration (p50, p95, p99 latency distributions).",
          "3. Distributed Tracing (OpenTelemetry): Links all operations triggered by a single incoming request across microservices, caches, and databases into a single Trace ID.",
          "Parent-Child Span Hierarchy: The root span measures total gateway duration (e.g. 155ms). Child spans represent internal operations: JWT validation (12ms), Redis lookup (3ms), PostgreSQL query (42ms), and downstream recommendation RPC (68ms). Spans visually pinpoint the critical path bottleneck.",
          "Outside-In Systematic Debugging Protocol:",
          "Step 1: Check DNS resolution (nslookup/dig) to verify proper routing.",
          "Step 2: Inspect connection & TLS negotiation (curl -v) to detect certificate or handshake failures.",
          "Step 3: Check Reverse Proxy / ALB ingress metrics to rule out gateway queuing or throttling.",
          "Step 4: Inspect backend application logs and error rates grouped by routeTemplate.",
          "Step 5: Review distributed traces to evaluate database query latency and downstream RPC timeouts.",
        ],
        keyPoints: [
          "Correlation ID Propagation: Incoming requests receive an 'X-Request-ID' or W3C 'traceparent' header at the edge gateway that is injected into every log entry and forwarded across all internal RPC calls.",
          "Percentiles Over Averages: Never evaluate API performance using average latency. An average of 100ms can conceal a p99 latency of 3,500ms that frustrates 1% of all active students.",
        ],
        diagramType: "distributed-tracing",
        tables: [
          {
            title: "Standard Distributed Trace Span Anatomy",
            headers: ["Span Attribute", "OpenTelemetry Field", "Example Value"],
            rows: [
              ["Trace Identifier", "trace_id", "4bf92f3577b34da6a3ce929d0e0e4736 (Global request context)"],
              ["Span Identifier", "span_id", "00f067aa0ba902b7 (Unique to this single operation)"],
              ["Parent Span ID", "parent_span_id", "5fb397be34d23b0f (Links child operation to caller)"],
              ["Span Name", "name", "postgres.select_course_lessons"],
              ["Span Status", "status_code", "OK or ERROR (with error.type and message)"],
              ["Span Timing", "duration", "42.3 ms"],
              ["Resource Attributes", "db.system, db.name", "postgresql, prepspaces_prod"],
            ],
          },
        ],
        architectDecision:
          "Standardize on the OpenTelemetry (OTel) SDK across all services, propagating W3C 'traceparent' headers on all HTTP and gRPC calls, and export telemetry to Prometheus and Jaeger/Grafana Tempo.",
        interviewQuestions: [
          {
            q: "How does distributed tracing help you diagnose a latency spike in a microservice architecture?",
            a: "A distributed trace assigns a unique Trace ID to an incoming request and records each component's work as a timed 'span' in a parent-child waterfall hierarchy. Instead of manually correlating timestamps across disparate server logs, an engineer can open the trace and immediately see that out of a 500ms total response time, 420ms was spent waiting on an unindexed database query inside the recommendations microservice.",
          },
        ],
      },
    ],
    []
  );

  const activeTopic = useMemo(() => {
    return systemDesignTopics.find((t) => t.id === selectedTopic) || systemDesignTopics[0];
  }, [systemDesignTopics, selectedTopic]);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-[#f97316] selection:text-white">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-orange-500/[0.04] rounded-full blur-[130px]" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/[0.04] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-6 sm:px-6 md:px-8">
        {/* Module Header / Global Nav */}
        <ModuleNav
          track="system-design"
          currentModuleId="networking"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor(!showAiTutor)}
          aiTutorLabel="Ask Nova Network Architect"
        />

        {/* AI Tutor Drawer (if toggled) */}
        {showAiTutor && (
          <div className="mb-8">
            <LearningRo currentTopic="system-design-networking" />
          </div>
        )}

        {/* Course & Module Hero Banner */}
        <div className="mb-8 rounded-3xl border border-[#e7e3da] bg-white/85 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-orange-50/90 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#ea580c] mb-3">
                <Network size={13} className="text-[#f97316]" />
                <span>System Design Masterclass · Module 3</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#18181b]">
                APIs, Communication Protocols, Networking, and Request Lifecycles
              </h1>
              <p className="mt-2.5 max-w-3xl text-sm sm:text-base leading-relaxed text-stone-600">
                Foundations to Advanced · Theory, Implementation, and Production Engineering. From TCP/IP sockets and TLS 1.3 to REST, gRPC, WebSockets, idempotency, rate limiting, and distributed tracing.
              </p>
            </div>

            {/* Metadata Stats */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] px-4 py-2.5 text-center">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-400">Duration</span>
                <span className="text-xs sm:text-sm font-bold text-stone-800">2–3 Weeks (~40 hrs)</span>
              </div>
              <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] px-4 py-2.5 text-center">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-400">Level</span>
                <span className="text-xs sm:text-sm font-bold text-stone-800">Core Engineering</span>
              </div>
              <div className="rounded-2xl border border-orange-200 bg-orange-50/80 px-4 py-2.5 text-center">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-orange-600">Standards</span>
                <span className="text-xs sm:text-sm font-bold text-orange-800">MIT / IETF / OpenAPI</span>
              </div>
            </div>
          </div>

          {/* Module Outcomes Strip */}
          <div className="mt-6 pt-6 border-t border-[#e7e3da]/80 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start gap-2.5 text-xs text-stone-600">
              <CheckCircle2 size={16} className="text-[#f97316] shrink-0 mt-0.5" />
              <span>Trace requests from browser URL to database and back</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-stone-600">
              <CheckCircle2 size={16} className="text-[#f97316] shrink-0 mt-0.5" />
              <span>Compare REST, gRPC, GraphQL, WebSockets, and SSE</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-stone-600">
              <CheckCircle2 size={16} className="text-[#f97316] shrink-0 mt-0.5" />
              <span>Implement Idempotency-Keys & exponential backoff jitter</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-stone-600">
              <CheckCircle2 size={16} className="text-[#f97316] shrink-0 mt-0.5" />
              <span>Diagnose latency bottlenecks using distributed tracing</span>
            </div>
          </div>
        </div>

        {/* Global Tab Navigation */}
        <div className="mb-6 flex items-center gap-2 border-b border-[#e7e3da] pb-3 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x">
          {[
            { id: "theory", label: "📖 Theory & Lessons", icon: BookOpen },
            { id: "interactive", label: "⚡ Interactive Simulators", icon: Sliders },
            { id: "qa", label: "💬 Senior Systems Q&A", icon: HelpCircle },
            { id: "assessment", label: "📝 Knowledge Check", icon: Award },
            { id: "labs", label: "🧪 Practical Labs & Capstone", icon: FileText },
            { id: "reading", label: "📚 University Reading List", icon: ExternalLink },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`shrink-0 whitespace-nowrap flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#f97316] text-white shadow-xs shadow-orange-500/25"
                    : "bg-white/80 text-stone-600 hover:bg-white hover:text-stone-900 border border-[#e7e3da]"
                }`}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: THEORY & LESSONS */}
        {activeTab === "theory" && (
          <div className="grid gap-8 lg:grid-cols-12 items-start">
            {/* Sidebar Topic List */}
            <div className="lg:col-span-4 rounded-3xl border border-[#e7e3da] bg-white/80 p-4 backdrop-blur-xl shadow-xs space-y-1.5">
              <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-stone-400">
                Module 3 Curriculum Topics (12 Lessons)
              </div>
              {systemDesignTopics.map((topic) => {
                const Icon = topic.icon;
                const isSelected = topic.id === selectedTopic;
                return (
                  <button
                    key={topic.id}
                    onClick={() => setSelectedTopic(topic.id)}
                    className={`flex w-full items-start gap-3 rounded-2xl p-3 text-left transition-all cursor-pointer ${
                      isSelected
                        ? "bg-orange-50 border border-orange-200/80 text-[#ea580c] shadow-2xs"
                        : "hover:bg-stone-100/70 text-stone-700 border border-transparent"
                    }`}
                  >
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${
                        isSelected ? "bg-[#f97316] text-white" : "bg-stone-100 text-stone-500"
                      }`}
                    >
                      <Icon size={16} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="block text-[10px] font-mono font-bold uppercase tracking-wider opacity-75">
                        {topic.category}
                      </span>
                      <h4 className="text-xs font-bold leading-snug line-clamp-1">{topic.shortTitle}</h4>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Main Lesson Content Display */}
            <div className="lg:col-span-8 space-y-6">
              <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
                {/* Topic Header */}
                <div className="mb-6 border-b border-[#e7e3da] pb-5">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                    <span>{activeTopic.category}</span>
                    <span>•</span>
                    <span>Core Lesson</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#18181b]">
                    {activeTopic.title}
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-stone-600">
                    {activeTopic.summary}
                  </p>
                </div>

                {/* Interactive Diagram for this Lesson */}
                <div className="my-6">
                  <VisualDiagramComponentModule3 diagramType={activeTopic.diagramType} />
                </div>

                {/* Detailed Theory Text */}
                <div className="prose prose-stone max-w-none text-xs sm:text-sm leading-relaxed text-stone-700 space-y-3.5 pt-4">
                  {activeTopic.theory.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                {/* Key Points Callout */}
                <div className="mt-6 rounded-2xl border border-orange-200/90 bg-orange-50/80 p-5">
                  <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-orange-800 mb-2">
                    <Lightbulb size={16} className="text-[#f97316]" />
                    <span>Architectural Insights & Principles</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                    {activeTopic.keyPoints.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#f97316] font-bold mt-0.5">▸</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tables if any */}
                {activeTopic.tables && (
                  <div className="mt-8 space-y-6">
                    {activeTopic.tables.map((tbl, idx) => (
                      <div key={idx} className="overflow-hidden rounded-2xl border border-[#e7e3da]">
                        <div className="bg-stone-50 px-4 py-2.5 font-bold text-xs uppercase tracking-wider text-stone-700 border-b border-[#e7e3da]">
                          {tbl.title}
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-xs">
                            <thead className="bg-stone-100/60 font-semibold text-stone-600 border-b border-[#e7e3da]">
                              <tr>
                                {tbl.headers.map((h, hi) => (
                                  <th key={hi} className="p-3">
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-[#e7e3da]/70">
                              {tbl.rows.map((r, ri) => (
                                <tr key={ri} className="hover:bg-orange-50/30 transition">
                                  {r.map((cell, ci) => (
                                    <td
                                      key={ci}
                                      className={`p-3 ${ci === 0 ? "font-bold text-stone-900" : "text-stone-700"}`}
                                    >
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Architect's Production Decision Box */}
                {activeTopic.architectDecision && (
                  <div className="mt-6 rounded-2xl border border-stone-800 bg-[#18181b] p-5 text-white">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-orange-400 block mb-1">
                      Staff Engineer Production Decision
                    </span>
                    <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-sans">
                      {activeTopic.architectDecision}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: INTERACTIVE ARCHITECTURE SIMULATORS */}
        {activeTab === "interactive" && (
          <div className="space-y-8">
            {/* Simulator 1: Latency Waterfall Simulator */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
              <div className="mb-6">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                  End-to-End Latency Engine
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                  Interactive Request Latency & Waterfall Simulator
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Model each step in the request lifecycle to calculate total latency, identify the critical path bottleneck, and evaluate caching optimizations.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-6">
                <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-4">
                  <div className="flex justify-between items-center text-xs font-bold text-stone-700 mb-2">
                    <span>1. DNS Resolution</span>
                    <span className="text-orange-600 font-mono">{latDns} ms</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="60"
                    value={latDns}
                    onChange={(e) => setLatDns(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">0ms if cached in browser</span>
                </div>

                <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-4">
                  <div className="flex justify-between items-center text-xs font-bold text-stone-700 mb-2">
                    <span>2. TCP + TLS 1.3 Handshake</span>
                    <span className="text-orange-600 font-mono">{latTls} ms</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={latTls}
                    onChange={(e) => setLatTls(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">Amortized by HTTP keep-alive</span>
                </div>

                <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-4">
                  <div className="flex justify-between items-center text-xs font-bold text-stone-700 mb-2">
                    <span>3. Gateway & WAF Ingress</span>
                    <span className="text-orange-600 font-mono">{latGateway} ms</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="30"
                    value={latGateway}
                    onChange={(e) => setLatGateway(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">ALB TLS termination + WAF rules</span>
                </div>

                <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-4">
                  <div className="flex justify-between items-center text-xs font-bold text-stone-700 mb-2">
                    <span>4. Auth & App Execution</span>
                    <span className="text-orange-600 font-mono">{latApp} ms</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="50"
                    value={latApp}
                    onChange={(e) => setLatApp(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">JWT verification + schema validation</span>
                </div>

                <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-4">
                  <div className="flex justify-between items-center text-xs font-bold text-stone-700 mb-2">
                    <span>5. Database / Dependency Query</span>
                    <span className="text-orange-600 font-mono">{latDb} ms</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="200"
                    value={latDb}
                    onChange={(e) => setLatDb(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">PostgreSQL SQL execution</span>
                </div>

                <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-4">
                  <div className="flex justify-between items-center text-xs font-bold text-stone-700 mb-2">
                    <span>6. Serialization & Transit</span>
                    <span className="text-orange-600 font-mono">{latTransit} ms</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="50"
                    value={latTransit}
                    onChange={(e) => setLatTransit(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">Gzip compression + wire transfer</span>
                </div>
              </div>

              {/* Total Derived Latency Result Card */}
              <div className="rounded-2xl border border-stone-900 bg-stone-900 p-6 text-white flex flex-wrap items-center justify-between gap-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400">
                    Total End-to-End Latency
                  </span>
                  <div className="text-2xl sm:text-3xl font-black font-mono mt-1">
                    {totalCalculatedLatency} ms
                  </div>
                  <p className="text-xs text-stone-400 mt-1">
                    Database/Dependency contributes{" "}
                    <span className="text-rose-400 font-bold">{dbPercentage}%</span> of total latency budget.
                  </p>
                </div>

                <div className="rounded-xl border border-stone-700 bg-stone-800/80 px-5 py-3 text-center">
                  <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block">
                    SLO Health Rating
                  </span>
                  <span
                    className={`text-lg font-bold font-mono ${
                      totalCalculatedLatency < 100
                        ? "text-emerald-400"
                        : totalCalculatedLatency < 250
                        ? "text-amber-400"
                        : "text-rose-400"
                    }`}
                  >
                    {totalCalculatedLatency < 100
                      ? "⚡ Exceptional (<100ms)"
                      : totalCalculatedLatency < 250
                      ? "✓ Production Acceptable (<250ms)"
                      : "⚠️ High Latency (>250ms)"}
                  </span>
                </div>
              </div>
            </div>

            {/* Simulator 2: Exponential Backoff & Jitter */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
              <div className="mb-6">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                  Resilience & Thundering Herd Suppression
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                  Exponential Backoff & Full Jitter Simulator
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  See how adding full random jitter desynchronizes retries and protects recovering backend services from secondary traffic spikes.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
                <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-4">
                  <div className="flex justify-between items-center text-xs font-bold text-stone-700 mb-2">
                    <span>Base Delay (d_0)</span>
                    <span className="text-orange-600 font-mono">{backoffBaseMs} ms</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="500"
                    step="50"
                    value={backoffBaseMs}
                    onChange={(e) => setBackoffBaseMs(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                </div>

                <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-4">
                  <div className="flex justify-between items-center text-xs font-bold text-stone-700 mb-2">
                    <span>Maximum Delay Cap (d_max)</span>
                    <span className="text-orange-600 font-mono">{backoffMaxMs} ms</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="10000"
                    step="500"
                    value={backoffMaxMs}
                    onChange={(e) => setBackoffMaxMs(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                </div>

                <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-4">
                  <div className="flex justify-between items-center text-xs font-bold text-stone-700 mb-2">
                    <span>Max Attempts</span>
                    <span className="text-orange-600 font-mono">{backoffAttempts}</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="6"
                    step="1"
                    value={backoffAttempts}
                    onChange={(e) => setBackoffAttempts(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                </div>

                <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-4">
                  <div className="flex justify-between items-center text-xs font-bold text-stone-700 mb-2">
                    <span>Jitter Mode</span>
                    <span className="text-orange-600 font-mono capitalize">{jitterMode}</span>
                  </div>
                  <div className="flex gap-1.5 mt-2">
                    {["none", "full", "equal"].map((m) => (
                      <button
                        key={m}
                        onClick={() => setJitterMode(m)}
                        className={`flex-1 py-1 rounded text-[11px] font-bold capitalize transition border ${
                          jitterMode === m
                            ? "bg-[#f97316] text-white border-[#f97316]"
                            : "bg-white text-stone-700 border-[#e7e3da]"
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Calculated Retry Delays */}
              <div className="rounded-2xl border border-[#e7e3da] bg-white p-5">
                <span className="text-xs font-bold text-stone-900 block mb-3">
                  Calculated Retry Sequence for 5 Concurrent Clients:
                </span>
                <div className="grid sm:grid-cols-4 gap-3">
                  {retryDelays.map((r) => (
                    <div key={r.attempt} className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
                      <span className="text-[10px] font-mono font-bold text-stone-400 block">
                        Attempt #{r.attempt}
                      </span>
                      <span className="text-base font-bold text-stone-900 font-mono mt-0.5 block">
                        {r.actual} ms
                      </span>
                      <span className="text-[10px] text-stone-500 font-mono">
                        Exponential Cap: {r.expMax} ms
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Simulator 3: Token Bucket Rate Limiter */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
              <div className="mb-6">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                  Traffic Shaping & Quotas
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                  Token Bucket Rate Limiter Simulator
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Simulate how bucket capacity and refill rate manage request bursts while returning HTTP 429 to oversized request storms.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-3 mb-6">
                <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-4">
                  <div className="flex justify-between items-center text-xs font-bold text-stone-700 mb-2">
                    <span>Bucket Capacity (Tokens)</span>
                    <span className="text-orange-600 font-mono">{rateLimitCapacity} tokens</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    step="5"
                    value={rateLimitCapacity}
                    onChange={(e) => setRateLimitCapacity(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                </div>

                <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-4">
                  <div className="flex justify-between items-center text-xs font-bold text-stone-700 mb-2">
                    <span>Refill Rate (Tokens/sec)</span>
                    <span className="text-orange-600 font-mono">{rateLimitRefillRate} / sec</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="30"
                    step="2"
                    value={rateLimitRefillRate}
                    onChange={(e) => setRateLimitRefillRate(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                </div>

                <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-4">
                  <div className="flex justify-between items-center text-xs font-bold text-stone-700 mb-2">
                    <span>Incoming Request Burst</span>
                    <span className="text-orange-600 font-mono">{burstRequests} reqs</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="150"
                    step="5"
                    value={burstRequests}
                    onChange={(e) => setBurstRequests(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">
                    Admitted Requests (200 OK)
                  </span>
                  <span className="text-2xl font-black text-emerald-800 font-mono mt-1 block">
                    {admittedRequests} Requests
                  </span>
                  <span className="text-xs text-emerald-600">Processed within bucket capacity</span>
                </div>

                <div className="rounded-2xl border border-rose-200 bg-rose-50/80 p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 block">
                    Throttled Requests (429 Too Many)
                  </span>
                  <span className="text-2xl font-black text-rose-800 font-mono mt-1 block">
                    {throttledRequests} Requests
                  </span>
                  <span className="text-xs text-rose-600">Returned with 'Retry-After: {refillTimeToFullSec}s'</span>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">
                    Recovery Duration
                  </span>
                  <span className="text-2xl font-black text-stone-900 font-mono mt-1 block">
                    {refillTimeToFullSec} sec
                  </span>
                  <span className="text-xs text-stone-500">To fully refill empty bucket</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SENIOR SYSTEMS Q&A */}
        {activeTab === "qa" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
            <div className="mb-6 border-b border-[#e7e3da] pb-4">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                Senior Engineering Preparation
              </span>
              <h2 className="text-2xl font-bold text-[#18181b] mt-1">
                Module 3 Systems Defense & Architectural Q&A
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Rigorous interview questions covering TCP vs UDP, HTTP/2 multiplexing, CORS vs authentication, idempotency edge cases, and distributed tracing.
              </p>
            </div>

            <div className="space-y-6">
              {systemDesignTopics.flatMap((t) => t.interviewQuestions || []).map((item, idx) => (
                <div key={idx} className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-5">
                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f97316] text-[11px] font-bold text-white mt-0.5">
                      Q
                    </span>
                    <div className="flex-1">
                      <h3 className="text-sm sm:text-base font-bold text-stone-900">{item.q}</h3>
                      <div className="mt-2.5 flex items-start gap-3 rounded-xl bg-white border border-[#e7e3da]/80 p-4">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-bold text-white mt-0.5">
                          A
                        </span>
                        <p className="text-xs sm:text-sm leading-relaxed text-stone-700 font-normal">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: ASSESSMENT QUIZ */}
        {activeTab === "assessment" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
            <div className="mb-6 border-b border-[#e7e3da] pb-4 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                  Knowledge Check
                </span>
                <h2 className="text-2xl font-bold text-[#18181b] mt-1">
                  Module 3 Assessment: 8 Questions
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Validate your understanding of DNS, TCP, HTTP/2, idempotency, CORS, WebSockets, and SSE.
                </p>
              </div>

              {submittedQuiz && (
                <div className="rounded-2xl border border-orange-200 bg-orange-50 px-5 py-3 text-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 block">
                    Your Score
                  </span>
                  <span className="text-2xl font-black text-orange-900 font-mono">
                    {quizScore} / {ASSESSMENT_QUESTIONS.length}
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {ASSESSMENT_QUESTIONS.map((q) => {
                const selectedOption = userAnswers[q.id];
                const isCorrect = selectedOption === q.correct;

                return (
                  <div
                    key={q.id}
                    className={`rounded-2xl border p-5 transition ${
                      submittedQuiz
                        ? isCorrect
                          ? "border-emerald-300 bg-emerald-50/50"
                          : "border-rose-300 bg-rose-50/50"
                        : "border-[#e7e3da] bg-[#faf8f4]"
                    }`}
                  >
                    <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-3">
                      {q.question}
                    </h3>

                    <div className="space-y-2">
                      {q.options.map((opt, optIdx) => {
                        const isChosen = selectedOption === optIdx;
                        let optionStyle = "bg-white border-[#e7e3da] text-stone-700 hover:border-orange-300";

                        if (submittedQuiz) {
                          if (optIdx === q.correct) {
                            optionStyle = "bg-emerald-100 border-emerald-400 text-emerald-950 font-bold";
                          } else if (isChosen && !isCorrect) {
                            optionStyle = "bg-rose-100 border-rose-400 text-rose-950 line-through";
                          } else {
                            optionStyle = "bg-white/60 border-stone-200 text-stone-400";
                          }
                        } else if (isChosen) {
                          optionStyle = "bg-orange-50 border-[#f97316] text-[#ea580c] font-bold shadow-2xs";
                        }

                        return (
                          <div
                            key={optIdx}
                            onClick={() => handleSelectOption(q.id, optIdx)}
                            className={`flex items-center gap-3 p-3 rounded-xl border transition text-xs sm:text-sm cursor-pointer ${optionStyle}`}
                          >
                            <span
                              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold font-mono border ${
                                isChosen
                                  ? "bg-[#f97316] text-white border-[#f97316]"
                                  : "border-stone-300 text-stone-500"
                              }`}
                            >
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span>{opt}</span>
                          </div>
                        );
                      })}
                    </div>

                    {submittedQuiz && (
                      <div className="mt-3.5 pt-3 border-t border-stone-200/80 text-xs text-stone-700">
                        <span className="font-bold text-stone-900 block mb-0.5">
                          {isCorrect ? "✓ Correct!" : "✗ Explanation:"}
                        </span>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quiz Controls */}
            <div className="mt-8 flex items-center justify-between border-t border-[#e7e3da] pt-5">
              {!submittedQuiz ? (
                <button
                  type="button"
                  onClick={handleCheckQuiz}
                  disabled={Object.keys(userAnswers).length === 0}
                  className="rounded-xl bg-[#f97316] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-xs hover:bg-[#ea580c] transition disabled:opacity-40 cursor-pointer"
                >
                  Submit Assessment
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleResetQuiz}
                  className="rounded-xl border border-stone-300 bg-white px-5 py-2.5 text-xs font-bold text-stone-700 hover:bg-stone-50 transition cursor-pointer"
                >
                  Retake Assessment
                </button>
              )}
            </div>
          </div>
        )}

        {/* TAB 5: PRACTICAL LABS & CAPSTONE */}
        {activeTab === "labs" && (
          <div className="space-y-8">
            {/* Practical Lab 1 */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                Hands-on Lab 1
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                Inspect Real HTTP Requests & DNS Queries with curl
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Observe HTTP status codes, response headers, and DNS name resolution from your terminal.
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-4">
                  <span className="font-bold text-stone-900 text-xs block mb-1">
                    Exercise A: Retrieve Public Endpoint & Verbose TLS Output
                  </span>
                  <div className="bg-stone-900 text-emerald-400 p-3 rounded-xl font-mono text-xs overflow-x-auto">
                    curl -i https://httpbin.org/get<br />
                    curl -v https://httpbin.org/get
                  </div>
                  <span className="text-[11px] text-stone-500 mt-1 block">
                    Observe the TLS certificate exchange, ALPN protocol negotiation (h2/http1.1), and headers.
                  </span>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-4">
                  <span className="font-bold text-stone-900 text-xs block mb-1">
                    Exercise B: Submit JSON Payload & Verify Media Type
                  </span>
                  <div className="bg-stone-900 text-emerald-400 p-3 rounded-xl font-mono text-xs overflow-x-auto">
                    curl -i -X POST https://httpbin.org/post \<br />
                    &nbsp;&nbsp;-H "Content-Type: application/json" \<br />
                    &nbsp;&nbsp;-d '{`{"courseId": 101, "completed": true}`}'
                  </div>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-4">
                  <span className="font-bold text-stone-900 text-xs block mb-1">
                    Exercise C: Test DNS Resolution with nslookup
                  </span>
                  <div className="bg-stone-900 text-emerald-400 p-3 rounded-xl font-mono text-xs overflow-x-auto">
                    nslookup prepspaces.example
                  </div>
                </div>
              </div>
            </div>

            {/* Practical Lab 2 */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                Hands-on Lab 2
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                Design the PrepSpaces API & Write OpenAPI 3.1 Specification
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Create a coherent resource-oriented REST interface covering courses, lessons, progress, and submissions.
              </p>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-stone-100 font-semibold text-stone-700">
                    <tr>
                      <th className="p-2.5">Operation</th>
                      <th className="p-2.5">HTTP Endpoint</th>
                      <th className="p-2.5">Expected Status</th>
                      <th className="p-2.5">Key Headers</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e7e3da]">
                    <tr>
                      <td className="p-2.5 font-bold">List Published Courses</td>
                      <td className="p-2.5 font-mono">GET /api/v1/courses</td>
                      <td className="p-2.5 text-emerald-700">200 OK</td>
                      <td className="p-2.5 text-stone-600">Cache-Control: public, max-age=300</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">Retrieve Course Details</td>
                      <td className="p-2.5 font-mono">GET /api/v1/courses/&#123;id&#125;</td>
                      <td className="p-2.5 text-emerald-700">200 OK</td>
                      <td className="p-2.5 text-stone-600">ETag: "v101-hash"</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">Get User Progress</td>
                      <td className="p-2.5 font-mono">GET /api/v1/me/courses/&#123;id&#125;/progress</td>
                      <td className="p-2.5 text-emerald-700">200 OK</td>
                      <td className="p-2.5 text-stone-600">Cache-Control: private, no-store</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">Submit Assignment</td>
                      <td className="p-2.5 font-mono">POST /api/v1/assignments/&#123;id&#125;/submissions</td>
                      <td className="p-2.5 text-emerald-700">201 Created</td>
                      <td className="p-2.5 text-orange-700 font-bold">Idempotency-Key: &lt;uuid&gt;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Final Project Capstone Specification */}
            <div className="rounded-3xl border border-stone-800 bg-[#18181b] p-6 sm:p-8 text-white">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-400">
                Final Deliverable
              </span>
              <h2 className="text-xl sm:text-2xl font-bold mt-1 text-white">
                Final Project: Design the Complete API & Networking Layer for PrepSpaces
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
                Design and validate how PrepSpaces communicates with its users, backend, database, and external services.
              </p>

              <div className="mt-6 space-y-4 text-xs">
                <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800">
                  <span className="text-orange-400 font-bold text-xs block mb-1">
                    Part 1 — API Specification & OpenAPI 3.1
                  </span>
                  <p className="text-stone-300">
                    Define at least 10 API operations, request/response schemas, error contracts, status codes, cursor pagination, and validation rules.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800">
                  <span className="text-orange-400 font-bold text-xs block mb-1">
                    Part 2 — Network Topology & Security Boundaries
                  </span>
                  <p className="text-stone-300">
                    Draw architecture mapping Browser → DNS → Cloudflare CDN/Edge → TLS Termination → Application Load Balancer → Express API Services → PostgreSQL. Detail protocol at each hop.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800">
                  <span className="text-orange-400 font-bold text-xs block mb-1">
                    Part 3 — End-to-End Request Tracing & Critical Path
                  </span>
                  <p className="text-stone-300">
                    Trace a course retrieval request. Decompose latency across DNS, TLS handshake, gateway, Node.js app, and database queries.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800">
                  <span className="text-orange-400 font-bold text-xs block mb-1">
                    Part 4 — Failure Handling & Idempotency Architecture
                  </span>
                  <p className="text-stone-300">
                    Specify database deduplication schemas, exponential backoff with full jitter, connection deadlines, and circuit breakers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: UNIVERSITY & INDUSTRY READING LIST */}
        {activeTab === "reading" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
            <div className="mb-6 border-b border-[#e7e3da] pb-4">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                Primary Engineering Foundations
              </span>
              <h2 className="text-2xl font-bold text-[#18181b] mt-1">
                Module 3 Research and Reading List
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Authoritative computer networking syllabi, IETF protocol specifications, and industry documentation.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  institution: "MIT OpenCourseWare",
                  code: "MIT 6.829",
                  title: "Computer Networks Coursework",
                  focus: "University-level foundations for network protocols, layered architecture, routing, and distributed applications.",
                  url: "https://ocw.mit.edu/courses/6-829-computer-networks-fall-2002/pages/syllabus/",
                  linkText: "MIT 6.829 Syllabus",
                },
                {
                  institution: "IETF RFC 9110",
                  code: "RFC 9110",
                  title: "HTTP Semantics Standard",
                  focus: "The authoritative specification for HTTP methods, status codes, request/response message semantics, and uniform interfaces.",
                  url: "https://www.rfc-editor.org/rfc/rfc9110.html",
                  linkText: "Read RFC 9110",
                },
                {
                  institution: "IETF RFC 9113 & RFC 9114",
                  code: "HTTP/2 & HTTP/3",
                  title: "Multiplexing & QUIC Transport",
                  focus: "Binary stream multiplexing in HTTP/2 compared with UDP-based QUIC transport in HTTP/3.",
                  url: "https://www.rfc-editor.org/rfc/rfc9114.html",
                  linkText: "Read RFC 9114 (HTTP/3)",
                },
                {
                  institution: "MDN Web Docs",
                  code: "MDN HTTP",
                  title: "HTTP Overview, Methods & CORS",
                  focus: "Authoritative web engineering reference for browser security boundaries, preflights, status codes, and WebSockets.",
                  url: "https://developer.mozilla.org/en-US/docs/Web/HTTP",
                  linkText: "MDN HTTP Reference",
                },
                {
                  institution: "OpenAPI Initiative",
                  code: "OpenAPI 3.1",
                  title: "Standardized API Contract Specification",
                  focus: "Machine-readable interface definitions supporting documentation, validation, mock servers, and automated testing.",
                  url: "https://learn.openapis.org/introduction.html",
                  linkText: "OpenAPI Learning Guide",
                },
                {
                  institution: "gRPC Foundation",
                  code: "gRPC & Protobuf",
                  title: "Core Concepts and Lifecycle",
                  focus: "Service definitions, client/server interfaces, HTTP/2 binary framing, and streaming RPC lifecycle.",
                  url: "https://grpc.io/docs/what-is-grpc/core-concepts/",
                  linkText: "gRPC Documentation",
                },
              ].map((res, idx) => (
                <a
                  key={idx}
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-5 hover:border-orange-300 hover:bg-white transition-all shadow-2xs"
                >
                  <div className="flex items-center justify-between text-[11px] font-bold text-stone-500 mb-1">
                    <span>{res.institution}</span>
                    <span className="font-mono text-orange-600">{res.code}</span>
                  </div>
                  <h3 className="font-bold text-stone-900 text-sm sm:text-base group-hover:text-[#f97316] transition-colors">
                    {res.title}
                  </h3>
                  <p className="mt-2 text-xs text-stone-600 leading-relaxed">{res.focus}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-orange-700 pt-3 border-t border-[#e7e3da]">
                    <span>{res.linkText}</span>
                    <ExternalLink size={13} />
                  </div>
                </a>
              ))}
            </div>

            {/* Next Module Preview */}
            <div className="mt-8 rounded-2xl border border-orange-200 bg-orange-50/80 p-5 flex items-center justify-between flex-wrap gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 block">
                  What Comes Next
                </span>
                <span className="text-sm font-bold text-stone-900 block mt-0.5">
                  Module 4: Monoliths, Modular Architecture, Microservices & Service Boundaries
                </span>
                <span className="text-xs text-stone-600 block mt-0.5">
                  Deep dive into modular monoliths, hexagonal architecture, domain-driven design, data ownership, and Strangler Fig migrations.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => navigate("/learning/system-design/requirements")}
                  className="flex items-center gap-1.5 rounded-xl border border-orange-300 bg-white px-3.5 py-2 text-xs font-bold text-orange-700 hover:bg-orange-50 transition cursor-pointer"
                >
                  <span>Back to Module 2</span>
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/learning/system-design/architecture")}
                  className="flex items-center gap-1.5 rounded-xl bg-[#f97316] px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#ea580c] transition cursor-pointer"
                >
                  <span>Start Module 4</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
