import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Link as LinkIcon,
  MessageSquare,
  Bell,
  Share2,
  Database,
  Server,
  Zap,
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
  Cpu,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import {
  UrlShortenerDiagram,
  ChatMessageLifecycleDiagram,
  NotificationLifecycleDiagram,
  SocialFeedFanoutDiagram,
  default as VisualDiagramComponentModule22,
} from "./SystemDesignCaseStudiesDiagrams";

export default function SystemDesignCaseStudies() {
  const navigate = useNavigate();

  // Navigation tab state: "curriculum" | "simulators" | "qa" | "assignments" | "assessment" | "reading"
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeLesson, setActiveLesson] = useState("22.1");

  // Expanded Q&A accordion state for 20 Senior Interview Questions
  const [expandedQA, setExpandedQA] = useState({ "qa-1": true, "qa-6": true, "qa-11": true, "qa-16": true });
  const toggleQA = (id) => {
    setExpandedQA((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // ---------------------------------------------------------------------------
  // INTERACTIVE CAPACITY ESTIMATOR CALCULATOR STATE
  // ---------------------------------------------------------------------------
  const [urlDailyWrites, setUrlDailyWrites] = useState(10); // Millions of writes/day
  const [urlDailyReads, setUrlDailyReads] = useState(1000); // Millions of redirects/day
  const [urlEntrySize, setUrlEntrySize] = useState(500); // Bytes per entry

  const urlWritesPerSec = Math.round((urlDailyWrites * 1000000) / 86400);
  const urlReadsPerSec = Math.round((urlDailyReads * 1000000) / 86400);
  const urlPeakReadsPerSec = urlReadsPerSec * 5;
  const urlAnnualStorageGb = Math.round((urlDailyWrites * 1000000 * urlEntrySize * 365) / (1024 * 1024 * 1024));
  const urlRamCacheGb = Math.round((urlDailyReads * 1000000 * 0.2 * urlEntrySize) / (1024 * 1024 * 1024));

  // ---------------------------------------------------------------------------
  // ASSESSMENT QUIZ STATE (8 QUESTIONS VERBATIM FROM USER PROMPT)
  // ---------------------------------------------------------------------------
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: "q1",
      question: "1. Which strategy is commonly used to generate short URL codes from unique numeric identifiers?",
      options: [
        "Base62 encoding",
        "Password hashing as the lookup key",
        "WebSocket frames",
        "Feed ranking",
      ],
      correctIndex: 0,
      explanation:
        "Base62 encoding (using [0-9a-zA-Z]) turns unique 64-bit auto-incrementing or Snowflake numeric IDs into compact URL-safe 7-character strings (62^7 ≈ 3.52 trillion combinations) without collisions.",
    },
    {
      id: "q2",
      question: "2. When should a chat server acknowledge that a message has been durably accepted?",
      options: [
        "Before writing the message anywhere",
        "After the required durable persistence operation succeeds",
        "Only after every group member reads it",
        "Only after all devices disconnect",
      ],
      correctIndex: 1,
      explanation:
        "Store-first persistence is required: a chat server must write the message to durable database/replicated storage before returning an ACK to the sender. In-memory ACKs risk silent data loss during crashes.",
    },
    {
      id: "q3",
      question: "3. Why is exactly-once delivery difficult for notifications?",
      options: [
        "Messages cannot contain IDs",
        "The sender and provider may disagree about whether an attempt succeeded",
        "Notifications never need retries",
        "Database transactions automatically cover external email providers",
      ],
      correctIndex: 1,
      explanation:
        "External third-party providers (APNs, SendGrid, Twilio) cannot participate in distributed 2PC transactions. Network timeouts or lost ACKs leave delivery state ambiguous, mandating at-least-once delivery with idempotency keys.",
    },
    {
      id: "q4",
      question: "4. What is the main problem with fan-out-on-write for an account with millions of followers?",
      options: [
        "It prevents any new posts",
        "It makes all feed reads impossible",
        "One post can trigger an enormous number of feed-entry writes",
        "It automatically removes every cache",
      ],
      correctIndex: 2,
      explanation:
        "A user with 10 million followers causes 10 million write operations in follower inboxes on every single post (write amplification), exhausting queue capacity and worker threads.",
    },
    {
      id: "q5",
      question: "5. What is a transactional outbox used for?",
      options: [
        "Making a database update and its event-publication intent durable together",
        "Replacing every database index",
        "Sending WebSocket heartbeats",
        "Generating random URL codes",
      ],
      correctIndex: 0,
      explanation:
        "The transactional outbox pattern commits business entity modifications and the corresponding notification event into the same database transaction, preventing split-brain inconsistencies between DB and message brokers.",
    },
    {
      id: "q6",
      question: "6. Which API pagination approach is often suitable for large, continuously updated feeds?",
      options: [
        "Unbounded result sets",
        "Deep offsets for every request",
        "Cursor pagination with deterministic ordering",
        "Random result ordering",
      ],
      correctIndex: 2,
      explanation:
        "Cursor pagination (keyset pagination using (created_at, post_id) < ($timestamp, $id)) avoids missing/duplicate posts when new items arrive at the top and executes in O(1) index seek time unlike O(N) OFFSET scans.",
    },
    {
      id: "q7",
      question: "7. Which component should remain the authoritative source for whether a private social post is accessible?",
      options: [
        "A stale feed entry alone",
        "The trusted source of current post visibility and authorization rules",
        "A cached ranking score",
        "The follower count",
      ],
      correctIndex: 1,
      explanation:
        "Cached feed timelines only store lightweight references (post IDs). The core post/authorization service must validate current privacy permissions and post deletion status during post hydration.",
    },
    {
      id: "q8",
      question: "8. Which notification design is best suited to handling an external provider outage?",
      options: [
        "Make every business request wait indefinitely",
        "Persist pending work, bound retries, monitor the queue, and handle failed jobs",
        "Delete every pending message immediately",
        "Retry synchronously without a limit",
      ],
      correctIndex: 1,
      explanation:
        "Decoupled asynchronous worker queues with exponential backoff + jitter, bounded retry thresholds, circuit breakers, and Dead-Letter Queues (DLQ) isolate external provider outages from upstream business flows.",
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
  // 20 SENIOR SYSTEM DESIGN INTERVIEW QUESTIONS & MODEL ANSWERS
  // ---------------------------------------------------------------------------
  const interviewQuestions = [
    // URL Shortener (5)
    {
      id: "qa-1",
      topic: "URL Shortener",
      q: "How would you generate unique short codes across multiple servers?",
      a: "Two primary approaches exist: (1) Distributed Unique ID + Base62: Use a distributed sequence generator such as Twitter Snowflake (64-bit ID comprising 41-bit timestamp, 10-bit machine/datacenter ID, and 12-bit sequence) or a dedicated Redis/Ticket-Server atomic increment. The resulting 64-bit integer is converted directly into Base62. A 7-character Base62 string yields 62^7 ≈ 3.52 trillion non-colliding IDs without any database collision checks. (2) Pre-generated Token Service (KGS): An offline Key Generation Service produces unique 7-character keys in advance and stores them in a key-pool database. Application servers fetch batches of keys (e.g., 5,000 keys into local memory) and consume them instantly without DB roundtrips. Hash-based generation (MD5/SHA-256 truncated) is discouraged because it suffers from the Birthday Paradox, requiring repeated collision retry lookups as database size scales.",
    },
    {
      id: "qa-2",
      topic: "URL Shortener",
      q: "When would you choose a permanent redirect (301) rather than a temporary redirect (302/307)?",
      a: "Choose HTTP 301 (Moved Permanently) when optimizing solely for latency and server cost. Browsers and edge CDN nodes aggressively cache 301 responses locally; subsequent clicks bypass your server entirely. Choose HTTP 302 (Found) or HTTP 307 (Temporary Redirect) when business requirements mandate click analytics, rate-limiting, geo-routing, or link expiry/revocation. With 302, the browser must query the shortener service on every click, allowing accurate tracking of referrers, timestamps, user-agents, and location without adding perceptible latency when cached in Redis edge clusters.",
    },
    {
      id: "qa-3",
      topic: "URL Shortener",
      q: "How would you handle popular links that account for a large percentage of traffic?",
      a: "Viral links create extreme hot-key contention on database and single-node Redis shards. To mitigate this: (1) Multi-layer Caching: Cache hot mappings at the Edge CDN / Cloudflare Workers and reverse proxies (NGINX/Envoy) with a short TTL (e.g., 60 seconds). (2) Read Replicas & In-Memory Sharding: Replicate Redis keys across local cluster nodes or apply key-salting (e.g. storing 'key_suffix_1' through 'key_suffix_N' across shards) to prevent single-core saturation. (3) Local In-Process Cache: Store top 1,000 viral mappings directly in the application pod's RAM (Go sync.Map or Java Guava/Caffeine cache) with a 10-second TTL to handle tens of thousands of requests per second per node without network overhead.",
    },
    {
      id: "qa-4",
      topic: "URL Shortener",
      q: "How would you measure clicks without slowing the redirect path?",
      a: "The redirect path must be an ultra-fast O(1) memory lookup (<10ms). Never write click analytics synchronously to an OLTP database. Instead: (1) After reading the destination URL from Redis, immediately dispatch a lightweight asynchronous event to a distributed streaming log (Apache Kafka, AWS Kinesis, or RabbitMQ) containing click metadata (short_code, timestamp, IP hash, user-agent, country). (2) Edge servers return the HTTP 302 redirect header immediately to the user. (3) Downstream stream workers (Flink/Spark) or log ingestors consume the Kafka stream in micro-batches and persist aggregated analytics into a columnar OLAP store (ClickHouse, Snowflake, or BigQuery) for reporting and dashboards.",
    },
    {
      id: "qa-5",
      topic: "URL Shortener",
      q: "How would you revoke a malicious link when cached redirects exist?",
      a: "If HTTP 301 redirects were issued, client browsers retain the mapping in local disk cache and will not query the server until browser cache is manually cleared or expires. This is why security-sensitive platforms use HTTP 302 with 'Cache-Control: private, max-age=0, no-cache'. To revoke an active malicious link: (1) Update the authoritative database record setting status = 'REVOKED' or deleting the row. (2) Broadcast an invalidation event across the Redis cluster (DEL short_code or set a 'TOMBSTONE' marker). (3) Dispatch a CDN Cache-Purge API call to purge the URL short code from all edge Points of Presence (PoPs). (4) Subsequent requests hitting edge servers will resolve to the tombstone and serve an HTTP 410 Gone or HTTP 403 Malicious Link warning page.",
    },

    // Chat Service (5)
    {
      id: "qa-6",
      topic: "Chat Service",
      q: "How do you make accepted messages durable when the recipient is offline?",
      a: "The chat architecture must enforce Store-First Persistence. When Sender A transmits a message over WebSocket to Gateway Pod 1: (1) The Gateway pod validates the session and immediately writes the message into durable storage (Cassandra/ScyllaDB partitioned by conversation_id, or distributed PostgreSQL) with status = 'PENDING_DELIVERY'. (2) Only after durable storage confirms the disk write does the Gateway issue an ACK back to Sender A. (3) The gateway checks the Presence Service / Redis connection map. If Recipient B is offline, no active socket exists; the message remains persisted in the database inbox, and an asynchronous push notification event is queued to APNs/FCM. When Recipient B reconnects, their device issues a catch-up sync using their last confirmed message sequence ID.",
    },
    {
      id: "qa-7",
      topic: "Chat Service",
      q: "How would you preserve order within a conversation?",
      a: "Never rely on client-side timestamps or server system clocks (NTP clock drift across distributed nodes can cause out-of-order sequencing). Instead, use Monotonically Increasing Sequence IDs per Conversation: (1) For each room/conversation, maintain an atomic counter (e.g. Redis INCR conversation:seq_id or Cassandra lightweight transactions / ZooKeeper/Raft lease). (2) Every message in that conversation is tagged with an incremental seq_id (1, 2, 3...). (3) Clients sort and render messages strictly by seq_id. If a client receives message 4 while expecting message 3, it holds message 4 in a reordering buffer and issues a range request for message 3.",
    },
    {
      id: "qa-8",
      topic: "Chat Service",
      q: "How do you route a message between users connected to different gateway servers?",
      a: "Use a centralized Connection Registry paired with a Pub/Sub message broker: (1) When User A connects to Gateway Pod 1, the pod records in Redis: 'user:Alice -> gateway_pod_1'. When User B connects to Gateway Pod 4, Redis records 'user:Bob -> gateway_pod_4'. (2) Each Gateway pod subscribes to its own dedicated message queue (e.g., Redis Pub/Sub channel 'gw:pod-1', 'gw:pod-4', or RabbitMQ topic exchange). (3) When Alice sends a message intended for Bob, Gateway 1 queries Redis to find Bob's host ('gateway_pod_4') and publishes the message to channel 'gw:pod-4'. (4) Gateway 4 receives the event from the broker, locates Bob's open WebSocket connection in its local memory table, and pushes the payload directly to Bob's device.",
    },
    {
      id: "qa-9",
      topic: "Chat Service",
      q: "How would you prevent duplicate messages during retries?",
      a: "Enforce Client-Generated Idempotency Keys (deduplication IDs): (1) When the client creates a message, it generates a UUID v4 client_message_id before sending. (2) If network instability occurs and the sender does not receive an ACK, the client retries sending the message with the exact same client_message_id. (3) The storage layer maintains a unique constraint on (conversation_id, client_message_id) or checks a Redis deduplication cache with a 5-minute TTL. (4) If a duplicate insert attempt occurs, the server discards the payload, suppresses duplicate forwarding, and re-emits the original ACK to the client so the client marks the message as sent.",
    },
    {
      id: "qa-10",
      topic: "Chat Service",
      q: "How would you handle a group chat with tens of thousands of participants?",
      a: "Standard 1-to-N message fan-out collapses when broadcasting to 50,000 concurrent participants (pushing 50,000 WebSocket frames per message saturates gateway NICs and message brokers). The solution requires a Hybrid Broadcast Architecture: (1) For small groups (<100 members), use direct push fan-out. (2) For mega-channels (e.g. Discord live stages, Twitch chat, Slack #announcements), switch to a Pull/Broadcast model: terminate clients on a clustered Pub/Sub tree (Kafka partitions or Redis cluster channels) where gateway nodes subscribe once per channel rather than per user. (3) Client rate-limiting: throttle user posting frequency (slow mode) to prevent message floods. (4) Active user filtering: push real-time WebSocket updates only to actively viewing participants; offline participants receive zero push events and synchronize lazily upon opening the room.",
    },

    // Notification Platform (5)
    {
      id: "qa-11",
      topic: "Notification Platform",
      q: "How do you ensure a business event is not lost between a database commit and event publication?",
      a: "Implement the Transactional Outbox Pattern to eliminate the dual-write problem: (1) When a business service commits a state change (e.g. 'interview_completed'), it writes both the business update AND an event record into an 'outbox' table in the SAME ACID database transaction. (2) If the database transaction rolls back, no event is created. If it commits, the event is guaranteed to be durably recorded. (3) An asynchronous Transaction Log Miner / Change Data Capture (CDC) engine (such as Debezium reading Postgres WAL or MySQL binlog) reads the outbox table and streams events into Kafka with at-least-once delivery guarantees. This decouples database commits from message broker availability completely.",
    },
    {
      id: "qa-12",
      topic: "Notification Platform",
      q: "How should notifications behave when an email provider is throttling requests (HTTP 429)?",
      a: "A production notification platform must implement Bounded Exponential Backoff with Jitter, Provider Rate Limiters, and Priority Queues: (1) Worker pods parsing provider 429 Too Many Requests responses inspect the 'Retry-After' header. (2) Instead of blocking worker threads, the message is re-queued into a delayed execution queue (e.g. Redis Sorted Set with epoch execution time, or RabbitMQ Dead Letter Exchange with per-message TTL) with jitter: backoff = min(max_backoff, base * 2^attempt) + random_jitter. (3) Upstream token bucket rate limiters throttle outgoing dispatch to match provider SLAs (e.g., SendGrid 100 req/sec). (4) Critical transactional notifications (password resets, OTPs) use high-priority dedicated worker pools, preventing promotional email bursts from starving critical traffic.",
    },
    {
      id: "qa-13",
      topic: "Notification Platform",
      q: "How do you design idempotent delivery when a provider's result is ambiguous?",
      a: "Network timeouts often leave external delivery ambiguous: did the email provider send the email and the ACK dropped, or did it fail before dispatch? To handle this: (1) Generate a deterministic idempotency key for every notification dispatch: hash(user_id, event_type, entity_id, date_bucket). (2) Pass this key in the third-party provider's API request header (e.g. Stripe Idempotency-Key, SendGrid custom headers). (3) Maintain a local delivery status table tracking state transitions: PENDING -> DISPATCHING -> DELIVERED / FAILED. (4) Before initiating a retry, workers inspect the delivery state; if an ambiguous timeout occurs, workers query the provider's status API using the idempotency key before attempting retransmission.",
    },
    {
      id: "qa-14",
      topic: "Notification Platform",
      q: "How do you enforce user preferences and notification limits across multiple channels?",
      a: "Place a Policy & Preference Orchestration Engine before channel dispatch workers: (1) User Preference Matrix: Store opt-in settings per notification category (marketing, security, account, social) across channels (Push, SMS, Email, In-App). (2) Quiet Hours Engine: Check recipient's local timezone. Non-critical notifications arriving during quiet hours (e.g. 10 PM - 8 AM) are buffered in a deferred queue until the morning window opens. (3) Frequency Capping / Digest Aggregator: Maintain sliding window counters in Redis for non-critical alerts (e.g., maximum 3 marketing pushes per day). Exceeded events are either discarded or bundled into a daily summary digest.",
    },
    {
      id: "qa-15",
      topic: "Notification Platform",
      q: "How do you observe delivery latency and identify failing providers?",
      a: "Establish an end-to-end telemetry pipeline tracking event stages: (1) Structured Metrics: Emit Prometheus counters and histograms at four milestones: t0 (event produced), t1 (worker consumed), t2 (provider HTTP request dispatched), t3 (provider response / webhook delivery confirmation received). (2) Metric Dimensions: Tag metrics with provider_name, channel, event_type, and status_code. (3) Real-Time Dashboards: Monitor P50/P95/P99 end-to-end latency and provider error rates. (4) Automated Failover / Circuit Breakers: If Provider A's error rate exceeds 15% over a 2-minute rolling window, a circuit breaker trips and automatically routes traffic to a secondary fallback provider (e.g., falling back from Twilio SMS to AWS SNS).",
    },

    // Social Feed (5)
    {
      id: "qa-16",
      topic: "Social Feed",
      q: "When would you prefer fan-out-on-write over fan-out-on-read?",
      a: "Prefer Fan-out-on-Write (Push) when the read-to-write ratio is extremely high (e.g. 100:1 or 25:1) and the vast majority of users have a moderate follower count (<5,000 followers). In this model, writing a post pushes post IDs into each follower's pre-computed Redis Sorted Set timeline. As a result, feed retrieval is blisteringly fast O(1) (a single ZREVRANGEBYSCORE call returning the top 20 post IDs in <10ms). Conversely, prefer Fan-out-on-Read (Pull) when users have massive follower counts (celebrities, enterprise accounts) or when users post frequently but read rarely; pull avoids catastrophic write amplification by computing the merged timeline dynamically only when the user opens their feed.",
    },
    {
      id: "qa-17",
      topic: "Social Feed",
      q: "How would you handle a user following a celebrity with millions of followers?",
      a: "Implement the Hybrid Fan-out Architecture: (1) Classify users based on a follower threshold (e.g. 25,000 followers). (2) When a standard user posts, execute Fan-out-on-Write: asynchronously push the post ID into all followers' Redis inboxes. (3) When a celebrity posts, BYPASS fan-out-on-write entirely; write the post only to the celebrity's personal timeline. (4) When a follower requests their home feed: fetch their pre-computed Redis inbox, query the following list for any followed celebrities, fetch the recent posts from those celebrities' timelines, and perform a multi-way merge sort in application memory (k-way merge) by timestamp. This eliminates write amplification while preserving sub-30ms feed retrieval latency.",
    },
    {
      id: "qa-18",
      topic: "Social Feed",
      q: "How do you prevent deleted or private posts from appearing in a stale feed?",
      a: "Separate Timeline References from Post Content (Hydration Layer): (1) Pre-computed Redis timelines store ONLY post IDs and timestamps, never full post JSON objects. (2) When a client requests their feed, the feed service retrieves the list of 20 post IDs from Redis and passes them to a Post Hydration & Authorization Service. (3) The Hydration Service checks the post cache/database to fetch full post content and verifies: (a) Has the post been soft-deleted? (b) Does the requester still have permission to view the author's content (e.g. blocked users, private account changes)? (4) Invalid or deleted post IDs are filtered out of the response, and an asynchronous tombstone cleanup worker is triggered to prune the stale ID from the user's Redis sorted set.",
    },
    {
      id: "qa-19",
      topic: "Social Feed",
      q: "How would you implement efficient pagination while new posts arrive?",
      a: "Use Keyset / Cursor-Based Pagination instead of OFFSET/LIMIT: (1) OFFSET pagination suffers from two fatal flaws: page drift (new posts inserted at the top push existing posts down, causing duplicate items on page 2) and performance degradation (database must scan and discard N rows, causing O(N) query latency for deep pages). (2) Cursor Pagination orders posts by a composite deterministic key: (created_at, post_id). (3) The API returns an encoded cursor pointing to the last item on the page: base64(timestamp + '_' + id). (4) When fetching the next page, the client sends GET /feed?cursor=xyz. The database executes: WHERE (created_at, post_id) < ($cursor_time, $cursor_id) ORDER BY created_at DESC, post_id DESC LIMIT 20. This runs in O(1) index-seek time and remains immune to real-time insertions.",
    },
    {
      id: "qa-20",
      topic: "Social Feed",
      q: "How would you rank posts while ensuring variety and respecting user preferences?",
      a: "Employ a Multi-Stage Ranking & Recommendation Pipeline: (1) Candidate Generation: Retrieve a candidate pool of 500-1,000 recent post IDs from followed users (social graph) and recommendation models (interest clusters, vector similarity embeddings). (2) Feature Enrichment: Hydrate candidate posts with author affinity scores, post engagement metrics (likes, comments, dwell time), and user interaction history. (3) ML Scoring Model: Run lightweight pointwise/pairwise ranking (GBDT or deep neural ranker) predicting P(engagement) = w1*P(click) + w2*P(comment) + w3*P(share). (4) Diversity & Fairness Reranking: Apply heuristic rules to prevent fatigue: limit maximum 2 consecutive posts from the same author, interleave content types (videos, text, images), enforce freshness decay penalty: Score = Score / (AgeHours + 2)^1.5, and filter out previously seen impressions.",
    },
  ];

  // ---------------------------------------------------------------------------
  // 5 HANDS-ON ASSIGNMENTS
  // ---------------------------------------------------------------------------
  const assignments = [
    {
      id: "as-1",
      title: "Assignment 1: URL Shortener Capacity & Reliability Design",
      objective:
        "Design a URL shortener for 100 million active links and 50,000 peak redirect requests per second.",
      requirements: [
        "Specify the short-code generation strategy (Base62 vs KGS vs Hashing) with mathematical collision proof.",
        "Design the complete PostgreSQL/Cassandra schema and Redis LRU caching layer.",
        "Evaluate HTTP 301 vs 302 redirect trade-offs and select the appropriate code for analytics fidelity.",
        "Architect an anti-abuse and SSRF security filter blocking private cloud IP ranges (169.254.169.254, RFC 1918).",
        "Design an asynchronous click-tracking pipeline utilizing Kafka and ClickHouse without adding redirect latency.",
      ],
      deliverable: "Architecture diagram, capacity estimates, API spec, and cache invalidation strategy.",
    },
    {
      id: "as-2",
      title: "Assignment 2: Distributed Real-Time Chat Service",
      objective:
        "Design messaging for 100,000 concurrent connections, offline delivery, group chats, read receipts, and multi-device sync.",
      requirements: [
        "Explain how messages are durably accepted using Store-First persistence before sender ACK.",
        "Design per-conversation monotonic sequence generation preventing clock drift out-of-order bugs.",
        "Architect cross-gateway routing between stateless WebSocket pods using Redis Pub/Sub.",
        "Define the offline inbox recovery and cursor synchronization protocol upon device reconnect.",
        "Detail multi-device read receipt propagation without creating N^2 event storms.",
      ],
      deliverable: "Sequence diagram, data model, delivery-guarantee explanation, and gateway routing architecture.",
    },
    {
      id: "as-3",
      title: "Assignment 3: Multi-Channel Notification Platform with Outbox",
      objective:
        "Design a platform processing 1,000,000 notification events during a placement season traffic spike.",
      requirements: [
        "Eliminate the dual-write problem by implementing the Transactional Outbox pattern with Debezium CDC.",
        "Design channel adapters for In-App WebSockets, APNs/FCM Push, SendGrid Email, and Twilio SMS.",
        "Incorporate a user preference matrix supporting quiet hours, category opt-outs, and daily digests.",
        "Specify bounded exponential backoff with jitter and Dead-Letter Queue (DLQ) triage for 429/500 errors.",
        "Define an end-to-end idempotent delivery key schema to guarantee at-least-once processing without duplicates.",
      ],
      deliverable: "Event-flow diagram, delivery state machine, and provider throttling policy.",
    },
    {
      id: "as-4",
      title: "Assignment 4: Scalable Social Feed & Hybrid Fan-Out Architecture",
      objective:
        "Design a social feed for 10 million DAU, handling accounts with millions of followers.",
      requirements: [
        "Formally compare Fan-out-on-Write and Fan-out-on-Read, calculating write amplification for 1M-follower users.",
        "Specify the celebrity threshold rule and architect the read-time k-way merge hybrid model.",
        "Define keyset cursor pagination schema immune to new post insertions and deep OFFSET degradation.",
        "Design the Post Hydration & Authorization Service ensuring soft-deleted and private posts never leak.",
        "Incorporate a multi-stage ranking pipeline balancing engagement prediction with author variety and freshness decay.",
      ],
      deliverable: "Feed architecture, scaling calculations, Redis timeline data structure, and hybrid fan-out proposal.",
    },
    {
      id: "as-5",
      title: "Assignment 5: Cross-System Architecture Decision Record (ADR)",
      objective:
        "Synthesize and compare all four designs across cost, scalability, availability, consistency, and operations.",
      requirements: [
        "Create an architectural comparison matrix across Workload, Guarantees, Primary Storage, and Failure Modes.",
        "Identify shared infrastructure components that can be unified without violating domain boundaries.",
        "Explain when an engineering team should adopt an off-the-shelf SaaS provider vs building an in-house custom platform.",
        "Draft an Architecture Decision Record (ADR) justifying technology choices for a growing SaaS unicorn.",
      ],
      deliverable: "A concise Architecture Decision Record (ADR) with assumptions, alternatives, and trade-offs.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900">
      <ModuleNav />

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
            <span>Weeks 44–46</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Module 22: System Design Case Studies — URL Shortener, Chat Service, Notification Platform, and Social Feed
          </h1>
          <p className="mt-3 text-base text-stone-700 max-w-4xl leading-relaxed">
            Apply core distributed systems principles to four classic architectural problems frequently
            tested in senior engineering interviews. Learn how scale transforms simple operations into
            complex distributed challenges: unique ID generation, store-first messaging, transactional outboxes,
            and hybrid feed fan-out.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-white border border-stone-200 shadow-xs">
              <div className="flex items-center gap-2 text-xs text-stone-700">
                <LinkIcon className="w-3.5 h-3.5 text-blue-600" />
                <span>URL Shortener</span>
              </div>
              <div className="text-base font-bold text-stone-900 mt-1">10M writes / 1B reads</div>
            </div>
            <div className="p-3 rounded-xl bg-white border border-stone-200 shadow-xs">
              <div className="flex items-center gap-2 text-xs text-stone-700">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>Chat Service</span>
              </div>
              <div className="text-base font-bold text-stone-900 mt-1">1M DAU / 40M msgs</div>
            </div>
            <div className="p-3 rounded-xl bg-white border border-stone-200 shadow-xs">
              <div className="flex items-center gap-2 text-xs text-stone-700">
                <Bell className="w-3.5 h-3.5 text-amber-600" />
                <span>Notifications</span>
              </div>
              <div className="text-base font-bold text-stone-900 mt-1">1M spike / Outbox</div>
            </div>
            <div className="p-3 rounded-xl bg-white border border-stone-200 shadow-xs">
              <div className="flex items-center gap-2 text-xs text-stone-700">
                <Share2 className="w-3.5 h-3.5 text-purple-600" />
                <span>Social Feed</span>
              </div>
              <div className="text-base font-bold text-stone-900 mt-1">10M DAU / Hybrid Fan-out</div>
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
              Curriculum (4 Case Studies)
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
              Senior Q&A (20 Questions)
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
                onClick={() => setActiveLesson("22.1")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeLesson === "22.1"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-100"
                }`}
              >
                <LinkIcon className="w-3.5 h-3.5" />
                22.1 URL Shortener
              </button>
              <button
                onClick={() => setActiveLesson("22.2")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeLesson === "22.2"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-100"
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                22.2 Chat Service
              </button>
              <button
                onClick={() => setActiveLesson("22.3")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeLesson === "22.3"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-100"
                }`}
              >
                <Bell className="w-3.5 h-3.5" />
                22.3 Notification Platform
              </button>
              <button
                onClick={() => setActiveLesson("22.4")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeLesson === "22.4"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-100"
                }`}
              >
                <Share2 className="w-3.5 h-3.5" />
                22.4 Social Feed
              </button>
              <button
                onClick={() => setActiveLesson("22.5")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeLesson === "22.5"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-100"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                22.5 Cross-System Synthesis & Comparison
              </button>
            </div>

            {/* LESSON 22.1: URL SHORTENER */}
            {activeLesson === "22.1" && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-2">
                    <LinkIcon className="w-3.5 h-3.5 text-blue-600" />
                    Case Study 1
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    High-Scale URL Shortener (Bitly / TinyURL Architecture)
                  </h2>
                  <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                    At first glance, a URL shortener looks like a simple key-value dictionary mapping a short code
                    to a target URL. However, at a scale of <strong>10 million writes/day</strong> and <strong>1 billion redirects/day</strong>,
                    it becomes a classic read-heavy distributed caching, distributed ID generation, and asynchronous
                    analytics challenge.
                  </p>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="text-xs font-semibold text-stone-700 uppercase tracking-wide">Write Workload</div>
                      <div className="text-xl font-bold text-stone-900 mt-1">115 writes / sec</div>
                      <div className="text-xs text-stone-700 mt-1">Peak: ~580 writes/sec (5x spike)</div>
                    </div>
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="text-xs font-semibold text-stone-700 uppercase tracking-wide">Read Workload</div>
                      <div className="text-xl font-bold text-stone-900 mt-1">11,574 reads / sec</div>
                      <div className="text-xs text-stone-700 mt-1">Peak: 57,870 redirects/sec (5x spike)</div>
                    </div>
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="text-xs font-semibold text-stone-700 uppercase tracking-wide">Read:Write Ratio</div>
                      <div className="text-xl font-bold text-blue-600 mt-1">100 : 1</div>
                      <div className="text-xs text-stone-700 mt-1">Heavy caching & edge offloading needed</div>
                    </div>
                  </div>
                </div>

                {/* Storage & Capacity Calculations */}
                <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
                  <h3 className="text-lg font-bold text-stone-900">Capacity & Storage Calculations</h3>
                  <div className="mt-3 text-sm text-stone-700 leading-relaxed space-y-3">
                    <p>
                      <strong>Storage Growth:</strong> Assuming 500 bytes per URL record (short_code: 7B, original_url: 400B,
                      user_id: 16B, created_at: 8B, expires_at: 8B, metadata: ~60B):
                    </p>
                    <div className="p-3 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs">
                      Daily Storage = 10,000,000 links × 500 bytes = 5 GB / day<br />
                      Annual Storage = 5 GB × 365 = 1.825 TB / year<br />
                      5-Year Storage Retention = 1.825 TB × 5 = 9.125 TB (very manageable in partitioned PostgreSQL or Cassandra)
                    </div>
                    <p>
                      <strong>Memory / RAM Sizing (80/20 Caching Rule):</strong> 20% of the daily URLs account for 80%
                      of redirect traffic. Caching top 20% of daily redirects:
                    </p>
                    <div className="p-3 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs">
                      Daily Active Cached Records = 1,000,000,000 × 0.20 = 200,000,000 entries<br />
                      RAM Required = 200,000,000 × 500 bytes ≈ 100 GB RAM<br />
                      Deployable as a 4-node Redis Cluster (32 GB RAM per node) using LRU (Least Recently Used) eviction.
                    </div>
                  </div>
                </div>

                {/* Short Code Generation: Base62 vs Hashing */}
                <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
                  <h3 className="text-lg font-bold text-stone-900">Short-Code Generation Strategies</h3>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="font-bold text-stone-900 text-sm">Strategy A: Distributed ID + Base62 Encoding</div>
                      <p className="text-xs text-stone-700 mt-2 leading-relaxed">
                        A distributed sequence generator (Snowflake 64-bit ID or atomic Redis counter) generates a unique
                        integer. The integer is converted to Base62 using characters [0-9a-zA-Z].
                      </p>
                      <ul className="text-xs text-stone-700 list-disc list-inside mt-2 space-y-1">
                        <li><strong>Combinations:</strong> 62^7 ≈ 3,521,614,606,208 (3.52 Trillion links).</li>
                        <li><strong>Collision Chance:</strong> Exactly 0% (guaranteed unique by monotonic sequence).</li>
                        <li><strong>Latency:</strong> Zero database roundtrip collision verification.</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="font-bold text-stone-900 text-sm">Strategy B: Truncated Hash (MD5 / SHA-256)</div>
                      <p className="text-xs text-stone-700 mt-2 leading-relaxed">
                        Computes MD5(original_url + salt) and takes the first 7 characters.
                      </p>
                      <ul className="text-xs text-stone-700 list-disc list-inside mt-2 space-y-1">
                        <li><strong>Birthday Paradox:</strong> P(collision) ≈ 1 - exp(-k² / 2N).</li>
                        <li>At 100M links, collision probability exceeds 0.14%, requiring DB lookup retry loops.</li>
                        <li><strong>Conclusion:</strong> Inferior for high-throughput write paths due to retry overhead.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* HTTP 301 vs 302 & Analytics Architecture */}
                <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
                  <h3 className="text-lg font-bold text-stone-900">Redirect Semantics & Asynchronous Click Tracking</h3>
                  <div className="mt-3 text-sm text-stone-700 leading-relaxed space-y-3">
                    <p>
                      <strong>HTTP 301 (Moved Permanently):</strong> The browser caches the redirect locally. Subsequent clicks
                      do NOT hit your servers. <em>Trade-off:</em> Lowest latency and zero server cost, but destroys click analytics and link revocation capabilities.
                    </p>
                    <p>
                      <strong>HTTP 302 (Found / Temporary Redirect):</strong> The browser sends every request to your edge gateway.
                      <em>Trade-off:</em> Enables full click tracking (IP, referrer, device, timestamp) and immediate link revocation.
                    </p>
                    <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                      <div>
                        <strong>Asynchronous Analytics Rule:</strong> Never update click counts synchronously in the redirect path!
                        The edge gateway returns the 302 Location header immediately while asynchronously publishing a lightweight
                        event to Apache Kafka. Stream workers (Apache Flink) aggregate clicks in 1-minute tumbling windows and write to ClickHouse.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Embedded Simulator */}
                <UrlShortenerDiagram />
              </div>
            )}

            {/* LESSON 22.2: CHAT SERVICE */}
            {activeLesson === "22.2" && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 mb-2">
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    Case Study 2
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Distributed Real-Time Chat Service (WhatsApp / Slack / Discord Architecture)
                  </h2>
                  <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                    Real-time chat requires persistent bidirectional connections (WebSockets), sub-100ms message delivery,
                    strict per-conversation ordering, and durable persistence. When 1 million daily active users exchange
                    40 million messages, you cannot rely on in-memory delivery or global clocks.
                  </p>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="text-xs font-semibold text-stone-700 uppercase tracking-wide">Concurrent Sockets</div>
                      <div className="text-xl font-bold text-stone-900 mt-1">100,000 - 250,000</div>
                      <div className="text-xs text-stone-700 mt-1">Terminated on stateless WebSocket gateways</div>
                    </div>
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="text-xs font-semibold text-stone-700 uppercase tracking-wide">Message Throughput</div>
                      <div className="text-xl font-bold text-stone-900 mt-1">462 msgs / sec avg</div>
                      <div className="text-xs text-stone-700 mt-1">Peak: 2,500 - 5,000 msgs / sec</div>
                    </div>
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="text-xs font-semibold text-stone-700 uppercase tracking-wide">Delivery Latency</div>
                      <div className="text-xl font-bold text-emerald-600 mt-1">&lt; 100 ms P99</div>
                      <div className="text-xs text-stone-700 mt-1">Online push via Redis Pub/Sub routing</div>
                    </div>
                  </div>
                </div>

                {/* Core Architectural Tenets */}
                <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
                  <h3 className="text-lg font-bold text-stone-900">Key Distributed Chat Principles</h3>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
                        <Database className="w-4 h-4 text-emerald-600" />
                        1. Store-First Persistence
                      </div>
                      <p className="text-xs text-stone-700 mt-2 leading-relaxed">
                        Never acknowledge a message to the sender before writing to durable disk storage. If a gateway
                        crashes after emitting an in-memory ACK, the message is permanently lost. Write to Cassandra / ScyllaDB
                        or partitioned PostgreSQL first; return the ACK only after replication succeeds.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
                        <Clock className="w-4 h-4 text-blue-600" />
                        2. Per-Conversation Monotonic Sequencing
                      </div>
                      <p className="text-xs text-stone-700 mt-2 leading-relaxed">
                        Global server timestamps fail due to distributed NTP clock drift. Order messages using an atomic
                        sequence number scoped to the conversation ID: <code className="bg-stone-200 px-1 py-0.5 rounded text-[11px]">INCR room:id:seq</code>.
                        Clients render messages strictly sorted by sequence number.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
                        <Server className="w-4 h-4 text-purple-600" />
                        3. Gateway Session Registry
                      </div>
                      <p className="text-xs text-stone-700 mt-2 leading-relaxed">
                        When Alice sends a message to Bob, Alice and Bob may be connected to different gateway servers.
                        Redis stores the mapping: <code className="bg-stone-200 px-1 py-0.5 rounded text-[11px]">user:bob -&gt; gateway_pod_4</code>.
                        Gateway 1 publishes the message to Redis channel <code className="bg-stone-200 px-1 py-0.5 rounded text-[11px]">gw:pod-4</code>,
                        which pushes it to Bob's socket.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
                        <RotateCcw className="w-4 h-4 text-orange-600" />
                        4. Offline Sync Cursors
                      </div>
                      <p className="text-xs text-stone-700 mt-2 leading-relaxed">
                        Clients track their last confirmed sequence ID (<code className="bg-stone-200 px-1 py-0.5 rounded text-[11px]">last_ack_seq_id</code>).
                        Upon reconnecting after being offline, the client queries:
                        <code className="bg-stone-200 px-1 py-0.5 rounded text-[11px]">GET /messages?room=123&amp;after_seq=42</code>
                        to catch up deterministically without duplicates.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Embedded Simulator */}
                <ChatMessageLifecycleDiagram />
              </div>
            )}

            {/* LESSON 22.3: NOTIFICATION PLATFORM */}
            {activeLesson === "22.3" && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 mb-2">
                    <Bell className="w-3.5 h-3.5 text-amber-600" />
                    Case Study 3
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Multi-Channel Notification Platform (Courier / OneSignal / Twilio Architecture)
                  </h2>
                  <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                    A modern notification platform routes critical updates across In-App WebSockets, APNs/FCM Mobile Push,
                    SendGrid/SES Email, and Twilio SMS. The core architectural challenge is preventing the dual-write problem,
                    respecting complex user quiet-hour preferences, and surviving severe third-party provider throttling (HTTP 429).
                  </p>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="text-xs font-semibold text-stone-700 uppercase tracking-wide">Supported Channels</div>
                      <div className="text-xl font-bold text-stone-900 mt-1">4 Distinct Transports</div>
                      <div className="text-xs text-stone-700 mt-1">Push, In-App, Email, SMS with fallbacks</div>
                    </div>
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="text-xs font-semibold text-stone-700 uppercase tracking-wide">Event Spike Capacity</div>
                      <div className="text-xl font-bold text-amber-600 mt-1">1,000,000 batch burst</div>
                      <div className="text-xs text-stone-700 mt-1">Buffered via Kafka / RabbitMQ queues</div>
                    </div>
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="text-xs font-semibold text-stone-700 uppercase tracking-wide">Delivery Guarantee</div>
                      <div className="text-xl font-bold text-stone-900 mt-1">At-Least-Once + Idempotency</div>
                      <div className="text-xs text-stone-700 mt-1">Transactional Outbox + Deduplication Keys</div>
                    </div>
                  </div>
                </div>

                {/* The Transactional Outbox Pattern & Provider Fault Tolerance */}
                <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
                  <h3 className="text-lg font-bold text-stone-900">Transactional Outbox & Provider Resilience</h3>
                  <div className="mt-3 text-sm text-stone-700 leading-relaxed space-y-4">
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="font-bold text-stone-900 text-sm">The Dual-Write Problem Solved</div>
                      <p className="text-xs text-stone-700 mt-1.5 leading-relaxed">
                        In naive systems, code does: <code className="bg-stone-200 px-1 py-0.5 rounded text-[11px]">db.saveInterview()</code> then <code className="bg-stone-200 px-1 py-0.5 rounded text-[11px]">kafka.sendNotification()</code>.
                        If the server dies between the two calls, the notification is lost forever.
                        With the <strong>Transactional Outbox Pattern</strong>, both the business record and the outbox event row
                        are committed in the exact same ACID transaction. A Change Data Capture (CDC) worker (Debezium) tailing the database WAL
                        streams the event to Kafka reliably.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="font-bold text-stone-900 text-sm">Surviving Provider Outages (Dead-Letter Queues & Jitter)</div>
                      <p className="text-xs text-stone-700 mt-1.5 leading-relaxed">
                        External vendors (SendGrid, APNs) will throttle requests or fail intermittently.
                        Workers must never retry immediately in tight loops (which triggers thundering herd crashes).
                        Use <strong>Exponential Backoff with Full Jitter</strong>:
                        <code className="bg-stone-200 px-1 py-0.5 rounded text-[11px]">t_sleep = random(0, min(max_backoff, base * 2^attempt))</code>.
                        After 3 failed attempts, move the failed job to a <strong>Dead-Letter Queue (DLQ)</strong> for human inspection without clogging active queues.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Embedded Simulator */}
                <NotificationLifecycleDiagram />
              </div>
            )}

            {/* LESSON 22.4: SOCIAL FEED */}
            {activeLesson === "22.4" && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 mb-2">
                    <Share2 className="w-3.5 h-3.5 text-purple-600" />
                    Case Study 4
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Social Feed Architecture (Twitter / Instagram / LinkedIn Feed)
                  </h2>
                  <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                    Social feeds represent the quintessential trade-off between write-time computation and read-time
                    computation. When 10 million daily active users read feeds 50 million times a day and write 2 million
                    posts, how you distribute posts to followers determines whether your database survives celebrity activity.
                  </p>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="text-xs font-semibold text-stone-700 uppercase tracking-wide">Daily Reads vs Writes</div>
                      <div className="text-xl font-bold text-stone-900 mt-1">50M Reads : 2M Writes</div>
                      <div className="text-xs text-stone-700 mt-1">25 : 1 read-heavy workload</div>
                    </div>
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="text-xs font-semibold text-stone-700 uppercase tracking-wide">Write Amplification</div>
                      <div className="text-xl font-bold text-rose-600 mt-1">Up to 10,000,000x</div>
                      <div className="text-xs text-stone-700 mt-1">Celebrity posts overwhelm pure push systems</div>
                    </div>
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="text-xs font-semibold text-stone-700 uppercase tracking-wide">Feed Retrieval Latency</div>
                      <div className="text-xl font-bold text-purple-600 mt-1">&lt; 30 ms P95</div>
                      <div className="text-xs text-stone-700 mt-1">Pre-computed Redis Sorted Sets + K-way merge</div>
                    </div>
                  </div>
                </div>

                {/* Push vs Pull vs Hybrid Breakdown */}
                <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
                  <h3 className="text-lg font-bold text-stone-900">The Core Architectural Trade-off</h3>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="font-bold text-stone-900 text-sm">1. Fan-out on Write (Push)</div>
                      <p className="text-xs text-stone-700 mt-2 leading-relaxed">
                        When an author posts, a background worker pushes the post ID into every follower's Redis timeline
                        (<code className="bg-stone-200 px-1 py-0.5 rounded text-[11px]">ZADD timeline:userId timestamp postId</code>).
                      </p>
                      <div className="mt-2 text-xs font-semibold text-emerald-700">✓ Feed read is O(1) instantaneous</div>
                      <div className="mt-1 text-xs font-semibold text-rose-700">✗ Massive write backlog on high-follower posts</div>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="font-bold text-stone-900 text-sm">2. Fan-out on Read (Pull)</div>
                      <p className="text-xs text-stone-700 mt-2 leading-relaxed">
                        When an author posts, write only 1 row to the author's posts table. When a follower requests their feed,
                        the database fetches recent posts from all followed accounts and merges them at query time.
                      </p>
                      <div className="mt-2 text-xs font-semibold text-emerald-700">✓ Fast, constant-time post creation</div>
                      <div className="mt-1 text-xs font-semibold text-rose-700">✗ High DB CPU and slow feed load times</div>
                    </div>

                    <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/50">
                      <div className="font-bold text-blue-900 text-sm">3. Hybrid Model (The Industry Standard)</div>
                      <p className="text-xs text-blue-900 mt-2 leading-relaxed">
                        Accounts with &lt; 25,000 followers use <strong>Fan-out on Write</strong> into Redis inboxes.
                        Celebrities (&gt; 25k followers) bypass write fan-out. At read time, the follower's Redis inbox is merged
                        with recent posts from followed celebrities in application memory via a fast k-way merge.
                      </p>
                      <div className="mt-2 text-xs font-bold text-blue-800">Best of both worlds: zero write explosion &amp; sub-30ms reads</div>
                    </div>
                  </div>
                </div>

                {/* Keyset Cursor Pagination & Privacy Hydration */}
                <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
                  <h3 className="text-lg font-bold text-stone-900">Keyset Cursor Pagination & Privacy Hydration</h3>
                  <div className="mt-3 text-sm text-stone-700 leading-relaxed space-y-3">
                    <p>
                      <strong>Why OFFSET Pagination Fails:</strong> Executing <code className="bg-stone-200 px-1 py-0.5 rounded text-[11px]">OFFSET 1000 LIMIT 20</code>
                      forces the database to read and discard 1,000 rows (O(N) CPU cost). Furthermore, when new posts arrive while the user is reading,
                      all offsets shift downward, causing the user to see duplicate posts on the next page.
                    </p>
                    <p>
                      <strong>Keyset Cursor Solution:</strong> Order deterministically by <code className="bg-stone-200 px-1 py-0.5 rounded text-[11px]">(created_at, post_id)</code>.
                      Return an opaque base64 cursor pointing to the last post. The next request executes:
                    </p>
                    <div className="p-3 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs">
                      SELECT * FROM posts<br />
                      WHERE (created_at, post_id) &lt; ($cursor_created_at, $cursor_id)<br />
                      ORDER BY created_at DESC, post_id DESC LIMIT 20;
                    </div>
                    <p>
                      <strong>Post Hydration &amp; Authorization:</strong> Redis stores only post IDs. Full post objects and author info
                      are hydrated by a trusted post service that checks whether the post was deleted or made private before returning it to the user.
                    </p>
                  </div>
                </div>

                {/* Embedded Simulator */}
                <SocialFeedFanoutDiagram />
              </div>
            )}

            {/* LESSON 22.5: COMPARISON & SYNTHESIS */}
            {activeLesson === "22.5" && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-stone-800 text-stone-100 mb-2">
                    <Layers className="w-3.5 h-3.5 text-stone-300" />
                    System Design Synthesis
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Comparing All Four Classic Architectures
                  </h2>
                  <p className="mt-2 text-sm text-stone-700 leading-relaxed">
                    Senior system design candidates distinguish themselves by recognizing how different workload profiles
                    dictate fundamentally different consistency, storage, and communication primitives.
                  </p>

                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-xs text-left text-stone-700 border border-stone-200 rounded-xl overflow-hidden">
                      <thead className="bg-stone-100 text-stone-900 font-bold uppercase tracking-wider text-[11px]">
                        <tr>
                          <th className="p-3 border-b border-stone-200">System</th>
                          <th className="p-3 border-b border-stone-200">Dominant Workload</th>
                          <th className="p-3 border-b border-stone-200">Core Guarantee</th>
                          <th className="p-3 border-b border-stone-200">Critical Data Structure</th>
                          <th className="p-3 border-b border-stone-200">Primary Failure Risk</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200 bg-white">
                        <tr>
                          <td className="p-3 font-bold text-blue-600">URL Shortener</td>
                          <td className="p-3">Read-heavy lookup (100:1)</td>
                          <td className="p-3">Sub-10ms redirect latency</td>
                          <td className="p-3 font-mono">Redis Key-Value / Base62</td>
                          <td className="p-3">Hot key cache saturation / SSRF</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-emerald-600">Chat Service</td>
                          <td className="p-3">Bidirectional real-time stream</td>
                          <td className="p-3">Durable acceptance &amp; strict ordering</td>
                          <td className="p-3 font-mono">Per-room monotonic sequence</td>
                          <td className="p-3">Split-brain ordering / Gateway socket failure</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-amber-600">Notification Platform</td>
                          <td className="p-3">Asynchronous event fan-out &amp; bursts</td>
                          <td className="p-3">At-least-once delivery + Idempotency</td>
                          <td className="p-3 font-mono">Transactional Outbox + DLQ</td>
                          <td className="p-3">Third-party 429 throttling / Dual-write loss</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-purple-600">Social Feed</td>
                          <td className="p-3">Read-heavy with extreme fan-out skew</td>
                          <td className="p-3">Sub-30ms fresh feed assembly</td>
                          <td className="p-3 font-mono">Redis Sorted Sets (ZSET)</td>
                          <td className="p-3">Celebrity write amplification backlog</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#faf8f4] border border-stone-200">
                  <h3 className="text-base font-bold text-stone-900">Shared Infrastructure Without Mixing Boundaries</h3>
                  <p className="mt-2 text-xs text-stone-700 leading-relaxed">
                    In a production engineering organization like PrepSpaces, you do not need 4 independent clusters for
                    every infrastructure layer. You can share:
                  </p>
                  <ul className="mt-3 text-xs text-stone-700 space-y-1.5 list-disc list-inside">
                    <li><strong>Apache Kafka Cluster:</strong> Segregated into independent topics (<code className="bg-stone-200 px-1 py-0.5 rounded text-[11px]">events.url_clicks</code>, <code className="bg-stone-200 px-1 py-0.5 rounded text-[11px]">events.notifications</code>, <code className="bg-stone-200 px-1 py-0.5 rounded text-[11px]">events.post_created</code>).</li>
                    <li><strong>Redis Cache Infrastructure:</strong> Separate logical databases or cluster namespaces with distinct memory eviction policies (LRU for URL caching vs volatile-ttl for chat routing).</li>
                    <li><strong>Edge Gateway / Reverse Proxy (Envoy/Cloudflare):</strong> Unified SSL termination, rate-limiting, and DDoS protection fronting all microservices.</li>
                  </ul>
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
            {/* Interactive Capacity Calculator */}
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-800 mb-2">
                <SlidersHorizontal className="w-3.5 h-3.5 text-orange-600" />
                Live Engineering Calculator
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                Interactive URL Shortener Capacity &amp; Memory Sizer
              </h3>
              <p className="text-xs text-stone-700 mt-1">
                Adjust daily writes, reads, and record sizes to see real-time QPS, peak loads, and Redis RAM requirements.
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="flex justify-between text-xs font-medium text-stone-700 mb-1">
                    <span>Daily Writes:</span>
                    <span className="font-mono font-bold text-orange-600">{urlDailyWrites} Million / day</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    step="1"
                    value={urlDailyWrites}
                    onChange={(e) => setUrlDailyWrites(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-700 font-mono mt-1">
                    <span>1M writes</span>
                    <span>50M writes</span>
                    <span>100M writes</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium text-stone-700 mb-1">
                    <span>Daily Reads (Redirects):</span>
                    <span className="font-mono font-bold text-blue-600">{urlDailyReads} Million / day</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="5000"
                    step="50"
                    value={urlDailyReads}
                    onChange={(e) => setUrlDailyReads(Number(e.target.value))}
                    className="w-full accent-blue-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-700 font-mono mt-1">
                    <span>100M reads</span>
                    <span>2.5B reads</span>
                    <span>5.0B reads</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium text-stone-700 mb-1">
                    <span>Record Size (Bytes):</span>
                    <span className="font-mono font-bold text-stone-900">{urlEntrySize} Bytes</span>
                  </div>
                  <input
                    type="range"
                    min="200"
                    max="1000"
                    step="50"
                    value={urlEntrySize}
                    onChange={(e) => setUrlEntrySize(Number(e.target.value))}
                    className="w-full accent-stone-700 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-700 font-mono mt-1">
                    <span>200 B</span>
                    <span>500 B</span>
                    <span>1,000 B</span>
                  </div>
                </div>
              </div>

              {/* Calculated Outputs */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="text-[11px] text-stone-700">Write Throughput</div>
                  <div className="text-base font-bold text-stone-900 mt-1 font-mono">
                    {urlWritesPerSec.toLocaleString()} writes/s
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="text-[11px] text-stone-700">Peak Redirect RPS (5x)</div>
                  <div className="text-base font-bold text-blue-600 mt-1 font-mono">
                    {urlPeakReadsPerSec.toLocaleString()} RPS
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="text-[11px] text-stone-700">Annual Storage</div>
                  <div className="text-base font-bold text-stone-900 mt-1 font-mono">
                    {urlAnnualStorageGb.toLocaleString()} GB / yr
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="text-[11px] text-stone-700">Redis 80/20 RAM Cache</div>
                  <div className="text-base font-bold text-emerald-600 mt-1 font-mono">
                    {urlRamCacheGb.toLocaleString()} GB RAM
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Visual Simulators */}
            <UrlShortenerDiagram />
            <ChatMessageLifecycleDiagram />
            <NotificationLifecycleDiagram />
            <SocialFeedFanoutDiagram />
          </div>
        )}

        {/* =====================================================================
            TAB 3: SENIOR Q&A (20 QUESTIONS)
            ===================================================================== */}
        {activeTab === "qa" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-800 mb-2">
                <HelpCircle className="w-3.5 h-3.5 text-orange-600" />
                Senior System Design Interview Bank
              </div>
              <h3 className="text-xl font-bold text-stone-900">
                20 Senior System Design Interview Questions &amp; Architectural Model Answers
              </h3>
              <p className="mt-1 text-xs text-stone-700 leading-relaxed">
                Study how Staff and Principal Engineers answer challenging interview prompts across all 4 classic case studies.
                Click on any question to view its comprehensive architectural answer.
              </p>
            </div>

            {/* Category Filter / Question Accordion */}
            <div className="space-y-3">
              {interviewQuestions.map((item, idx) => {
                const isExpanded = expandedQA[item.id];
                return (
                  <div
                    key={item.id}
                    className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs transition-all"
                  >
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
                Use these rigorous production assignments to practice the end-to-end system design interview workflow:
                clarifying requirements, capacity math, high-level diagrams, deep bottlenecks, and trade-off defense.
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
                Test your mastery of URL Shorteners, Chat Services, Notification Platforms, and Social Feeds.
                Select an answer for each question and click &quot;Submit Assessment&quot; to view your score and explanations.
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
                          ? "Outstanding! You demonstrate senior-level command over classic system design trade-offs."
                          : "Good attempt! Review the question explanations below to reinforce key concepts."}
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
              {quizQuestions.map((q, qIndex) => {
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
                Study foundational whitepapers and engineering blog posts written by the teams who built these systems
                at Slack, Amazon Web Services, Bitly, and Twitter.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 mb-2">
                    <MessageSquare className="w-3 h-3 text-emerald-600" />
                    Slack Engineering
                  </div>
                  <h4 className="text-base font-bold text-stone-900">
                    Real-Time Messaging at Slack
                  </h4>
                  <p className="text-xs text-stone-700 mt-2 leading-relaxed">
                    Learn about persistent gateway connections, channel routing, presence services, and real-time event fan-out
                    powering millions of enterprise teams.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-stone-100">
                  <a
                    href="https://slack.engineering/real-time-messaging/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800 transition-colors"
                  >
                    Read the Slack Engineering Article <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 mb-2">
                    <Bell className="w-3 h-3 text-amber-600" />
                    AWS Architecture
                  </div>
                  <h4 className="text-base font-bold text-stone-900">
                    Transactional Outbox Pattern
                  </h4>
                  <p className="text-xs text-stone-700 mt-2 leading-relaxed">
                    Understand how to coordinate durable database changes and downstream events, including duplicate prevention,
                    ordering, and retries.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-stone-100">
                  <a
                    href="https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/transactional-outbox.html"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800 transition-colors"
                  >
                    Read AWS Outbox Design Pattern <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-800 mb-2">
                    <LinkIcon className="w-3 h-3 text-blue-600" />
                    Open Source Reference
                  </div>
                  <h4 className="text-base font-bold text-stone-900">
                    URL Shortener Design Reference
                  </h4>
                  <p className="text-xs text-stone-700 mt-2 leading-relaxed">
                    Review an implementation-oriented case study covering Base62, distributed ID generation, caching, redirect paths,
                    and edge analytics pipelines.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-stone-100">
                  <a
                    href="https://github.com/URLdn/system-design-url-shortener"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800 transition-colors"
                  >
                    Explore Example Architecture on GitHub <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-purple-100 text-purple-800 mb-2">
                    <Share2 className="w-3 h-3 text-purple-600" />
                    Distributed Systems Analysis
                  </div>
                  <h4 className="text-base font-bold text-stone-900">
                    Social Feed Fan-Out Trade-offs
                  </h4>
                  <p className="text-xs text-stone-700 mt-2 leading-relaxed">
                    Examine why write amplification, follower distribution, freshness, and feed-read latency determine which fan-out strategy fits a system.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-stone-100">
                  <a
                    href="https://nicvannetti.it/articles/social-feed-fan-out-write-vs-read"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800 transition-colors"
                  >
                    Read Fan-Out In-Depth Analysis <ExternalLink className="w-3 h-3" />
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
                Module 22 Completion Criteria Met
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                You Have Mastered Core System Design Case Studies
              </h3>
              <p className="text-xs text-stone-700 mt-1 max-w-2xl leading-relaxed">
                You can now independently design all four systems, calculate workload and capacity, explain critical
                data models, defend architectural trade-offs, and solve complex edge cases under heavy production traffic.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => navigate("/learning/system-design/ai-systems")}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-white border border-stone-300 text-stone-700 hover:bg-stone-100 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Previous: Module 21 (AI Systems)
              </button>
              <button
                onClick={() => navigate("/learning/system-design/advanced-case-studies")}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-orange-600 text-white hover:bg-orange-700 transition-colors shadow-sm"
              >
                Next: Module 23 (Advanced Case Studies)
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
