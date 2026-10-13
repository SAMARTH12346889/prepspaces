import React, { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Cpu,
  Database,
  Globe,
  HelpCircle,
  Layers,
  Lightbulb,
  MessageSquare,
  Network,
  Play,
  RefreshCw,
  Server,
  Shield,
  ShieldAlert,
  Sparkles,
  Terminal,
  Workflow,
  Zap,
  Sliders,
  AlertTriangle,
  Building2,
  Boxes,
  Copy,
  Activity,
  Award,
  HardDrive,
  BarChart3,
  Clock,
  Gauge,
  TrendingUp,
  FolderTree,
  Box,
  Archive,
  ShieldCheck,
  Lock,
  FileText,
  DollarSign,
  FileCode,
  Table,
  Radio,
  Split,
  Eye,
  GitBranch,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* CLOUD COMPUTING MODULE 6: CLOUD ARCHITECTURE                               */
/* Weeks 9–10: Designing Large-Scale Systems                                  */
/* Systems Theory: MIT 6.033, Amazon Builders' Library, Google SRE, Uber DOMA */
/* -------------------------------------------------------------------------- */

export default function CloudArchitecture() {
  const navigate = useNavigate();

  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // Architecture Trade-Off Engine State
  const [archetypeStyle, setArchetypeStyle] = useState("modular-monolith"); // "modular-monolith", "three-tier", "microservices", "cell-based"
  const [resilienceTier, setResilienceTier] = useState("multi-az"); // "single-az", "multi-az", "multi-region-active-passive", "multi-region-active-active"
  const [peakTrafficQps, setPeakTrafficQps] = useState(50000); // 50,000 QPS

  // Circuit Breaker Live Simulator State
  const [dependencyLatencyMs, setDependencyLatencyMs] = useState(45); // Latency of downstream dependency
  const [dependencyFailureRate, setDependencyFailureRate] = useState(2); // % failures
  const [circuitBreakerEnabled, setCircuitBreakerEnabled] = useState(true);

  // Architecture GameDay State
  const [gameScenarioIndex, setGameScenarioIndex] = useState(0);
  const [gameSelection, setGameSelection] = useState(null);
  const [gameScore, setGameScore] = useState(0);
  const [gameHistory, setGameHistory] = useState({});

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  // Trade-Off Engine Calculations
  const architectureTradeOffs = useMemo(() => {
    let blastRadiusPct = 100;
    let rpcOverheadMs = 0;
    let complexityScore = 20; // 1-100
    let monthlyCostEstimate = "$1,200 - $3,500";
    let adrSummary = "";

    // Style calculations
    if (archetypeStyle === "modular-monolith") {
      blastRadiusPct = 80;
      rpcOverheadMs = 1;
      complexityScore = 25;
      monthlyCostEstimate = "$800 - $2,200";
      adrSummary =
        "ADR: Modular Monolith. Single deployable unit with strictly enforced internal domain boundaries. Minimal RPC overhead and zero network serialization penalty. Ideal for teams under 50 engineers.";
    } else if (archetypeStyle === "three-tier") {
      blastRadiusPct = 60;
      rpcOverheadMs = 5;
      complexityScore = 40;
      monthlyCostEstimate = "$2,000 - $6,000";
      adrSummary =
        "ADR: Classic 3-Tier. Clear separation between Presentation, Application Logic, and Database tiers. Simple operational model with independent scaling per tier.";
    } else if (archetypeStyle === "microservices") {
      blastRadiusPct = 35;
      rpcOverheadMs = 35;
      complexityScore = 75;
      monthlyCostEstimate = "$8,000 - $25,000";
      adrSummary =
        "ADR: Microservices with Domain Boundaries. Independent team ownership and deployments. Requires distributed tracing, service discovery, and circuit breakers to handle RPC failure propagation.";
    } else if (archetypeStyle === "cell-based") {
      blastRadiusPct = 10;
      rpcOverheadMs = 25;
      complexityScore = 95;
      monthlyCostEstimate = "$20,000 - $70,000";
      adrSummary =
        "ADR: Cell-Based Architecture. Users partitioned into independent self-contained cells (e.g. 10% of users per cell). Complete blast radius isolation where a failure in Cell 3 never impacts other users.";
    }

    // Resilience Tier adjustments
    if (resilienceTier === "single-az") {
      complexityScore = Math.max(10, complexityScore - 15);
    } else if (resilienceTier === "multi-region-active-active") {
      complexityScore = Math.min(100, complexityScore + 20);
      rpcOverheadMs += 40; // cross-region synchronization
      blastRadiusPct = Math.max(5, Math.round(blastRadiusPct * 0.5));
    }

    return {
      blastRadiusPct,
      rpcOverheadMs,
      complexityScore,
      monthlyCostEstimate,
      adrSummary,
    };
  }, [archetypeStyle, resilienceTier, peakTrafficQps]);

  // Circuit Breaker Simulation State
  const circuitBreakerStatus = useMemo(() => {
    const lat = Number(dependencyLatencyMs) || 0;
    const failPct = Number(dependencyFailureRate) || 0;

    let state = "CLOSED (Healthy)";
    let stateColor = "text-emerald-400 border-emerald-500/40 bg-emerald-950/30";
    let upstreamThreadSaturation = Math.min(100, Math.round((lat / 100) * 8 + failPct * 0.5));
    let effectiveResponseTimeMs = lat;

    if (!circuitBreakerEnabled) {
      if (lat > 500 || failPct > 20) {
        state = "NO PROTECTION: Thread Pool Starvation!";
        stateColor = "text-red-400 border-red-500/50 bg-red-950/40";
        upstreamThreadSaturation = 100;
        effectiveResponseTimeMs = Math.max(lat, 3000);
      }
    } else {
      if (lat > 300 || failPct > 15) {
        state = "OPEN (Tripped - Fast Failing in 2ms)";
        stateColor = "text-orange-400 border-orange-500/50 bg-orange-950/40";
        upstreamThreadSaturation = 12; // protected!
        effectiveResponseTimeMs = 2; // immediate fast fail / cached fallback
      } else if (lat > 150 || failPct > 8) {
        state = "HALF-OPEN (Canary Testing)";
        stateColor = "text-amber-400 border-amber-500/40 bg-amber-950/30";
        upstreamThreadSaturation = 45;
      }
    }

    return {
      state,
      stateColor,
      upstreamThreadSaturation,
      effectiveResponseTimeMs,
    };
  }, [dependencyLatencyMs, dependencyFailureRate, circuitBreakerEnabled]);

  const architectureTopics = useMemo(
    () => [
      {
        id: "architecture-mindset-tradeoffs",
        title: "The Architecture Mindset: Requirements, Drivers & Trade-Offs",
        shortTitle: "1. Architecture Mindset",
        category: "Foundations",
        icon: Building2,
        summary:
          "Architecture is not an AWS diagram. Architecture is the deliberate management of complexity, failure, scale, and trade-offs. Learn the 6 core questions every architect must ask and the AWS Well-Architected Framework.",
        theory: [
          "This is where the entire curriculum changes. Modules 1 through 5 taught you the physical and logical components: Infrastructure, Networking, Compute, Storage, and Databases. Now you learn how to assemble them into a system that survives real-world chaos.",
          "First Principle: Architecture is NOT a diagram. A diagram is merely a static graphical artifact. Real architecture is the chain of reasoning that connects ambiguous business goals to concrete engineering trade-offs:",
          "Business Requirements → Functional Specs → Non-Functional Quality Attributes → Constraints → Architectural Decisions → Component Interfaces → Failure Behaviors → Operational Runbooks → Cost.",
          "The Six Questions Every Architect Must Ask:",
          "1. What must the system do? (Functional specifications: register, checkout, track location).",
          "2. How well must it do it? (Performance: 100,000 QPS, p95 latency < 200ms).",
          "3. What happens when things fail? (Reliability: RPO < 1 min, RTO < 15 min, survive AZ loss).",
          "4. What must be protected? (Security: PCI-DSS, zero-trust network boundaries, secrets rotation).",
          "5. How much growth must it support? (Scalability: 10x traffic surge during holiday flash sales).",
          "6. What can we afford? (Economics: FinOps cost targets, data egress efficiency).",
          "MIT 6.033 systems-engineering teaches that modularity and abstraction are the only tools humans possess to control complexity, but achieving high availability, strict consistency, and low latency simultaneously is mathematically impossible. Architecture is the art of choosing which trade-offs to make.",
        ],
        keyPoints: [
          "Architecture connects business goals to engineering trade-offs and failure behaviors.",
          "The 6 Questions: Functional, Performance, Reliability, Security, Scalability, and Economics.",
          "AWS Well-Architected 6 Pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability.",
          "There is no 'best' architecture; every architectural decision involves competing trade-offs.",
        ],
        diagramType: "architecture-six-questions",
        architectDecision:
          "Never select technologies before defining measurable non-functional requirements (SLAs, SLOs, p95 latency, RPO, and RTO). Saying 'we will use Kubernetes and Kafka' before knowing your traffic profile and team size is an anti-pattern that guarantees failure.",
        interviewQuestions: [
          {
            q: "What is an 'Architecture Driver' and why must it precede technology selection?",
            a: "An architecture driver is a critical functional requirement, quality attribute (such as p99 latency < 50ms or 99.999% availability), or organizational constraint (budget, compliance, team expertise) that decisively shapes the system's structure. Identifying drivers first prevents premature architectural optimization and ensures technology selection is justified by real engineering constraints rather than hype.",
          },
        ],
      },
      {
        id: "three-tier-modular-monolith",
        title: "The 3-Tier Architecture & The Modular Monolith",
        shortTitle: "2. 3-Tier & Modular Monolith",
        category: "Architectural Styles",
        icon: Layers,
        summary:
          "Master the battle-tested 3-Tier pattern (Presentation, Business Logic, Data) and understand why the Modular Monolith is frequently superior to premature microservices for organizations under 100 engineers.",
        theory: [
          "The 3-Tier Architecture is the foundational pattern of software engineering. It separates concerns into three distinct layers:",
          "• Presentation Layer (Web/Mobile/API): Handles HTTP routing, TLS termination, user input validation, and serialization.",
          "• Application / Business Logic Layer: Implements core business rules, transactional orchestrations, and domain workflows.",
          "• Data Layer: Manages persistence, relational ACID guarantees, caching, and state storage.",
          "Why 3-Tier Exists: Modularity reduces 'fate-sharing'. If a UI template has a bug, it cannot corrupt the database schema. If the database schema changes, the UI client interacts only through an abstracted API.",
          "The Modular Monolith Alternative:",
          "• A modular monolith is deployed as a single unified executable process (reducing operational overhead, local zero-latency function calls, simple atomic transactions), but enforces strict internal package/module boundaries (e.g. `orders`, `payments`, `users`, `inventory`).",
          "• Moving prematurely to microservices replaces in-memory function calls with unreliable network RPCs, introducing distributed transactions, partial failures, and high operational tax.",
          "• Evolutionary Architecture: Start with a well-factored Modular Monolith. When a specific domain (such as real-time location tracking or video transcoding) develops unique scaling, hardware, or team velocity requirements, cleanly extract that specific domain into an independent microservice.",
        ],
        keyPoints: [
          "3-Tier Architecture cleanly separates Presentation, Application Logic, and Data.",
          "Modularity reduces fate-sharing and simplifies testing and security boundaries.",
          "The Modular Monolith provides in-memory function call speed ($<1\\mu\\text{s}$) and straightforward ACID transactions.",
          "Evolutionary path: Monolith $\\rightarrow$ Modular Monolith $\\rightarrow$ Extracted Services where scale justifies it.",
        ],
        diagramType: "three-tier-vs-modular",
        architectDecision:
          "Default to a Modular Monolith for new products. Do not split into microservices until team size (e.g. 50+ engineers bottlenecked on single-repo release trains) or distinct compute/scaling profiles make independent deployments necessary.",
        interviewQuestions: [
          {
            q: "Under what specific conditions is a Modular Monolith preferable to a Microservices architecture?",
            a: "A Modular Monolith is preferable when: (1) The engineering team is small (under 50-100 engineers) and cannot afford dedicated DevOps teams for service mesh, distributed tracing, and multi-repo CI/CD; (2) The domain requires strong cross-entity ACID transactions without complex Saga orchestrations; (3) Query patterns require multi-table JOINs; and (4) Ultra-low in-memory latency is critical without network serialization overhead.",
          },
        ],
      },
      {
        id: "microservices-rpc-cascading-failures",
        title: "Microservices: Boundaries, RPC Costs & Cascading Failures",
        shortTitle: "3. Microservices & Cascading Failures",
        category: "Microservices",
        icon: GitBranch,
        summary:
          "Microservices replace in-memory calls with unreliable network calls. Explore Uber's Domain-Oriented Microservice Architecture (DOMA), service dependency graphs, and how one slow service can collapse an entire platform.",
        theory: [
          "A Microservice is an independently deployable service organized around a specific business capability, owning its own private database.",
          "Why Hyper-Growth Companies Adopt Microservices:",
          "• Organizational Autonomy: Team Payments can deploy 10 times a day without waiting for Team Search.",
          "• Fault Isolation: A memory leak in Recommendations doesn't crash the Payment service.",
          "• Targeted Scaling: GPU-heavy search indexing scales independently from I/O-heavy user login services.",
          "The Severe Reality: Remote Procedure Calls (RPC) $\\neq$ Local Procedure Calls:",
          "• Local call: 50 nanoseconds, 100% reliable, zero serialization.",
          "• RPC network call: 5-50 milliseconds, subject to network jitter, packet drops, DNS timeouts, TLS handshakes, and partial failures.",
          "Cascading Failures (The Death Spiral):",
          "• Service A calls Service B, which calls Service C. If Service C slows down due to an unindexed database query, Service B's worker threads block waiting for C.",
          "• Service A's worker threads block waiting for B. Soon, all connection pools and HTTP server threads across A, B, and C are completely exhausted.",
          "• The entire platform collapses from a single slow downstream dependency!",
          "Uber DOMA (Domain-Oriented Microservice Architecture) Case Study:",
          "• When Uber reached 4,000+ microservices, the dependency graph became unmanageable. They introduced DOMA: grouping services into broad 'Domains' (Rides, Maps, Fares) exposed strictly through well-defined Domain Gateways with explicit layered call rules.",
        ],
        keyPoints: [
          "Microservices provide independent deployments and team autonomy at the cost of distributed systems complexity.",
          "Every network call introduces latency, partial failures, timeouts, and serialization overhead.",
          "Cascading failures occur when one slow dependency exhausts thread pools across all upstream callers.",
          "Uber DOMA groups microservices into layered domains to control dependency sprawl.",
        ],
        diagramType: "cascading-failure-death-spiral",
        architectDecision:
          "Never allow circular dependencies between microservices. Enforce strict acyclic call hierarchies: Presentation $\\rightarrow$ Product Services $\\rightarrow$ Core Business Domains $\\rightarrow$ Infrastructure.",
        interviewQuestions: [
          {
            q: "How does a slow downstream microservice cause a cascading failure throughout an entire system?",
            a: "When a downstream service experiences high latency (e.g. stalling for 5 seconds instead of 50ms), calling services do not fail immediately—they block their worker threads waiting for responses. As incoming user traffic continues, all available execution threads, sockets, and connection pool slots on upstream callers become saturated. Eventually, upstream APIs can no longer accept new connections, health checks fail, and the outage cascades across the entire platform.",
          },
        ],
      },
      {
        id: "resilience-timeouts-backoff-jitter",
        title: "Resilience Engineering: Timeouts, Retries, Exponential Backoff & Jitter",
        shortTitle: "4. Timeouts, Backoff & Jitter",
        category: "Resilience",
        icon: ShieldAlert,
        summary:
          "Learn how Amazon Web Services prevents retry storms. Master client timeouts, exponential backoff, full jitter algorithms, and idempotent APIs to make network retries safe.",
        theory: [
          "In distributed systems, transient network glitches, load balancer blips, and temporary container restarts happen constantly. Resilience engineering ensures transient hiccups heal automatically without crashing services.",
          "1. TIME-OUT EVERY REMOTE CALL:",
          "• Never use unbounded timeouts! If Service A calls Service B without a timeout, a hung connection will hold an OS socket and thread forever.",
          "• Set timeouts based on empirical percentiles: e.g., set timeout to $2\\times$ the p99 latency (e.g. 200ms timeout for a 100ms p99 service).",
          "2. WHY NAIVE RETRIES CAUSE RETRY STORMS:",
          "• If 10,000 clients fail simultaneously and immediately retry, the failing backend suddenly receives $20,000$ requests per second. The retry storm guarantees the service can never recover!",
          "3. EXPONENTIAL BACKOFF + JITTER (The Amazon Standard):",
          "• Exponential Backoff: Wait progressively longer between attempts ($T = B \\times 2^{\\text{attempt}}$: 50ms, 100ms, 200ms, 400ms).",
          "• Full Jitter: Randomize the sleep interval: $T = \\text{random}(0, \\min(M, B \\times 2^{\\text{attempt}}))$.",
          "• Jitter spreads out retries across time, breaking up harmonic thundering herds and allowing the overloaded service breathing room to clear its queues.",
          "4. IDEMPOTENCY KEYS (Making Retries Safe):",
          "• If a client submits `POST /payments/charge` with ₹5,000, and a network timeout occurs, did the charge succeed?",
          "• Retrying blindly risks charging the customer twice! With an Idempotency Key (`Idempotency-Key: uuid-v4`), the server checks a fast cache (Redis/DynamoDB). If the key was already executed, it returns the stored result without re-executing the charge.",
        ],
        keyPoints: [
          "Every remote network call must have an explicit, bounded timeout.",
          "Exponential backoff increases wait times; Full Jitter desynchronizes concurrent retries to prevent retry storms.",
          "Idempotency keys ensure mutating operations (charges, orders) can be safely retried without duplicate side effects.",
          "Limit maximum retry attempts (e.g. max 3 retries) before declaring failure.",
        ],
        diagramType: "backoff-jitter-timeline",
        architectDecision:
          "Enforce idempotency keys on all mutating APIs where financial, inventory, or provisioning side effects exist. Pair every client SDK with automated exponential backoff and jitter.",
        interviewQuestions: [
          {
            q: "Why is exponential backoff alone insufficient to prevent retry storms without jitter?",
            a: "If a sudden spike or network partition causes thousands of clients to fail at the exact same second, pure exponential backoff will cause all of them to retry at the exact same future timestamp (e.g. all retry after exactly 100ms, then all retry after exactly 200ms). This creates periodic waves of synchronized traffic spikes ('thundering herds'). Adding full jitter introduces pseudo-random sleep intervals, scattering the retries uniformly across time and smoothing out traffic volume.",
          },
        ],
      },
      {
        id: "fault-containment-circuit-breaker-cells",
        title: "Fault Containment: Circuit Breakers, Bulkheads & Cell-Based Architecture",
        shortTitle: "5. Circuit Breakers & Cells",
        category: "Failure Isolation",
        icon: Zap,
        summary:
          "Isolate failures to prevent full-system collapse. Master the Circuit Breaker state machine (Closed, Open, Half-Open), the Bulkhead pattern, and Amazon's Cell-Based Architecture.",
        theory: [
          "Fault containment is the practice of ensuring that a catastrophic failure in one subsystem is stopped dead in its tracks before spreading across the wider architecture.",
          "1. THE CIRCUIT BREAKER PATTERN:",
          "• Inspired by electrical home circuit breakers that pop when an overload threatens to start a fire.",
          "• CLOSED State (Normal): Requests pass through to the dependency. Error counts and latency are monitored.",
          "• OPEN State (Tripped): When failure rate exceeds threshold (e.g. 50% errors over 10 seconds), the breaker trips OPEN. For the next 30 seconds, ALL requests are immediately rejected locally in 1 millisecond without touching the network! This frees up calling threads and gives the failing service time to heal.",
          "• HALF-OPEN State (Canary Probe): After cooldown, the breaker allows a small percentage of test requests through. If they succeed, it resets to CLOSED. If they fail, it trips back to OPEN.",
          "2. THE BULKHEAD PATTERN:",
          "• Named after the watertight bulkheads in oceanic ships. Even if the cargo hold floods, the engine room remains dry.",
          "• In software: Allocate isolated thread pools or connection pools for different dependencies. A failure in Recommendations pool cannot consume threads allocated to Payments.",
          "3. CELL-BASED ARCHITECTURE (Amazon Standard):",
          "• Instead of running one massive cluster where a bad deploy or corrupted database wipes out all 500 million users, partition the system into completely independent 'Cells'.",
          "• Each Cell is a complete, self-contained replica of the entire application stack serving a subset of users (e.g. Cell 1 serves Users 1-50M; Cell 2 serves 51-100M).",
          "• If Cell 2 suffers a catastrophic disaster, the maximum blast radius is strictly 10% of users. The other 90% experience zero downtime!",
        ],
        keyPoints: [
          "Circuit Breakers fast-fail requests in 1ms when dependencies are down, protecting calling thread pools.",
          "Bulkheads isolate resource pools (threads, connections, memory) across different features.",
          "Cell-Based Architecture limits the disaster blast radius to $1/N$ of the total customer base.",
          "Graceful Degradation: When non-critical features fail (recommendations, reviews), serve core functionality (checkout).",
        ],
        diagramType: "circuit-breaker-state-machine",
        architectDecision:
          "Implement Cell-Based Architecture for hyper-scale platforms. Treating cells as independent failure domains transforms platform-wide catastrophic outages into minor, isolated regional incidents.",
        interviewQuestions: [
          {
            q: "Explain the three states of the Circuit Breaker pattern and how it protects upstream services.",
            a: "The three states are: (1) CLOSED: Normal operation, requests flow through, failures are tracked; (2) OPEN: When failure or latency thresholds are breached, the circuit trips OPEN, immediately rejecting subsequent calls with a fallback or error in ~1ms without making a network call, preventing thread pool exhaustion; (3) HALF-OPEN: After a timeout period, limited trial requests are permitted through. If they succeed, the circuit resets to CLOSED; if they fail, it returns to OPEN.",
          },
        ],
      },
      {
        id: "serverless-queues-load-leveling",
        title: "Serverless & Event-Driven: Queues, Buffers & Load Leveling",
        shortTitle: "6. Queues & Load Leveling",
        category: "Asynchronous Systems",
        icon: Boxes,
        summary:
          "Understand how asynchronous message queues act as shock absorbers between elastic compute and fixed-capacity databases. Master load leveling, dead-letter queues, and poison message handling.",
        theory: [
          "When you adopt elastic serverless compute (AWS Lambda, Cloud Run), your application can scale from 0 to 500,000 concurrent executions in seconds during a traffic surge.",
          "The Downstream Bottleneck Danger:",
          "• If 500,000 functions simultaneously hammer a relational database that can only process 25,000 writes/sec, the database will crash with connection starvation and I/O lockups.",
          "• Elastic compute amplifies an un-elastic dependency!",
          "Queues as Shock Absorbers (Load Leveling Pattern):",
          "• Place an asynchronous message queue (AWS SQS, Google Pub/Sub, RabbitMQ) between the ingestion functions and the database.",
          "• 500,000 requests/sec are ingested into the queue in milliseconds.",
          "• Downstream worker pools consume messages at a steady, controlled rate of 25,000/sec, matching the exact physical throughput limit of the database.",
          "• The queue depth swells temporarily during peak traffic and drains smoothly without dropping a single order or crashing the database.",
          "Dead-Letter Queues (DLQ) & Poison Messages:",
          "• A Poison Message is a corrupted or malformed payload that crashes the worker every time it is parsed.",
          "• Without safeguards, the message returns to the queue, crashes another worker, and loops infinitely, wasting compute and jamming the pipeline.",
          "• Solution: Configure `maxReceiveCount = 3`. If a message fails processing 3 times, the broker automatically isolates it into a Dead-Letter Queue (DLQ) for engineering inspection, allowing healthy messages to proceed.",
        ],
        keyPoints: [
          "Queues decouple producer speed from consumer capacity, smoothing out sudden traffic spikes.",
          "Load Leveling protects fixed-capacity databases from being overwhelmed by elastic compute bursts.",
          "Dead-Letter Queues isolate poison messages so corrupted payloads do not jam the processing pipeline.",
          "Message delivery semantics: At-least-once requires consumers to be strictly idempotent.",
        ],
        diagramType: "queue-load-leveling-buffer",
        architectDecision:
          "Always pair message queues with a Dead-Letter Queue (DLQ) and CloudWatch alarm on DLQ message count. An unmonitored DLQ means customer data is silently failing without alerting on-call engineers.",
        interviewQuestions: [
          {
            q: "How does the 'Queue-Based Load Leveling' pattern prevent database saturation during flash sales?",
            a: "During a flash sale, incoming write requests can spike by 20x. Instead of writing directly to the database synchronously, the API immediately writes the incoming transaction payloads to an asynchronous message queue (which can absorb millions of messages per second) and returns HTTP 202 Accepted. A controlled pool of backend workers then reads messages from the queue at a throttled rate calibrated to the database's maximum write IOPS, eliminating connection spikes and lock contention.",
          },
        ],
      },
      {
        id: "transactional-outbox-event-sourcing",
        title: "The Transactional Outbox Pattern, Event Sourcing & CQRS",
        shortTitle: "7. Outbox Pattern & CQRS",
        category: "Data Architecture",
        icon: Workflow,
        summary:
          "Solve the distributed dual-write dilemma. Learn why updating a database and publishing a message cannot be done naively, and master the Transactional Outbox Pattern, Event Sourcing, and CQRS.",
        theory: [
          "The Dual-Write Disaster:",
          "• Imagine an Order Service that must: (1) Save an order to PostgreSQL, and (2) Publish an `OrderCreated` event to Apache Kafka so Payments and Inventory can proceed.",
          "• If it writes to PostgreSQL first and crashes before Kafka publishes: The order exists in DB, but is never fulfilled (payment never triggered).",
          "• If it publishes to Kafka first and PostgreSQL write fails: Payment is charged, but the order does not exist in the database!",
          "The Transactional Outbox Pattern (The Bulletproof Solution):",
          "• Instead of calling Kafka directly, the service writes BOTH the `orders` record AND an `outbox_events` record within the SAME local ACID database transaction!",
          "• Because it is a local transaction, it either 100% commits or 100% rolls back atomically.",
          "• A separate background process (Change Data Capture like Debezium, or a polling tailer) reads the `outbox_events` table and reliably publishes events to Kafka with at-least-once delivery guarantees.",
          "CQRS (Command Query Responsibility Segregation):",
          "• Separates the write model (Commands: `CreateOrder`, normalized relational tables optimized for transactional integrity) from the read model (Queries: Denormalized Elasticsearch/Redis views optimized for millisecond search).",
          "• Events emitted from the write side continuously project and update the read side asynchronously.",
        ],
        keyPoints: [
          "Dual-writes to a database and message broker without a 2PC coordinator cause data inconsistency on failure.",
          "The Transactional Outbox Pattern writes the business entity and the event to the same database atomically.",
          "Change Data Capture (CDC) streams outbox events to Kafka/EventBridge with at-least-once guarantees.",
          "CQRS separates the write model (OLTP correctness) from the read model (optimized search projection).",
        ],
        diagramType: "transactional-outbox-flow",
        architectDecision:
          "Use the Transactional Outbox Pattern whenever an operation requires updating a relational database and notifying downstream microservices. Never execute an HTTP or Kafka call inside a database transaction block.",
        interviewQuestions: [
          {
            q: "What failure scenario occurs if an application writes to a database and directly publishes to a message bus without the Outbox pattern?",
            a: "This is the classic distributed dual-write problem. If the database commit succeeds but the network fails or the application container restarts before the message is delivered to the broker, downstream systems will never receive the event, causing severe business data desynchronization (e.g. an order is saved in the database, but inventory is never reserved and shipping is never initiated).",
          },
        ],
      },
      {
        id: "data-intensive-streaming-netflix",
        title: "Data-Intensive Architecture: Streaming, Lakehouses & Netflix Case Study",
        shortTitle: "8. Data-Intensive & Netflix",
        category: "Big Data Architecture",
        icon: HardDrive,
        summary:
          "Separate operational OLTP from analytical OLAP. Examine Netflix's published data movement architecture: Cassandra operational clusters, S3-backed data lakes, Apache Iceberg, and Spark ML pipelines.",
        theory: [
          "At modern cloud scale, systems do not run heavy reporting or ML queries against active transactional databases. Doing so locks tables, exhausts buffer pools, and degrades end-user latency.",
          "The Great Separation: OLTP vs OLAP:",
          "• OLTP (Online Transaction Processing): PostgreSQL, MySQL, DynamoDB. Handles high-concurrency 4KB row lookups, updates, and inserts with strict ACID guarantees ($<10\\text{ms}$).",
          "• OLAP (Online Analytical Processing): Snowflake, ClickHouse, BigQuery. Scans billions of rows across columnar Parquet files to aggregate metrics, calculate trends, and train models.",
          "Netflix Data Movement Architecture Case Study:",
          "• Netflix operates thousands of distributed Apache Cassandra nodes for mission-critical low-latency workloads: Member accounts, Billing, Playback state, and Subscriptions.",
          "• In their recent engineering disclosures, Netflix described evolving data movement from monolithic connectors to a layered, decoupled architecture:",
          "  1. Operational Tier: Cassandra handles high-throughput client writes.",
          "  2. Data Movement Fleet: Automated background pipelines stream snapshots and mutation logs into Apache Iceberg table format stored on durable Amazon S3 object storage.",
          "  3. Analytical Tier: Apache Spark and Trino query the S3/Iceberg lakehouse directly for recommendations, financial audits, and machine learning training with zero impact on production Cassandra latency!",
        ],
        keyPoints: [
          "Never run analytical reporting or machine learning jobs directly on primary OLTP databases.",
          "OLTP is optimized for small concurrent row mutations; OLAP is optimized for multi-billion row columnar scans.",
          "Netflix uses Cassandra for operational state and streams data into S3/Iceberg for analytics.",
          "Durable object storage (S3/GCS) forms the cost-effective substrate of modern cloud data lakes.",
        ],
        diagramType: "netflix-data-movement-architecture",
        architectDecision:
          "Replicate operational database changes to an analytical lakehouse (using Debezium CDC and Apache Iceberg on S3) as soon as reporting queries begin causing lock contention or buffer pool evictions on production OLTP databases.",
        interviewQuestions: [
          {
            q: "Why do enterprise architectures separate operational data stores (like Cassandra/PostgreSQL) from analytical data lakes (like Iceberg/S3)?",
            a: "Operational databases are row-oriented and optimized for low-latency, high-concurrency, short transactional reads and writes. Analytical workloads execute massive, long-running queries scanning millions of rows across multiple years of data. Running analytical queries on an operational database burns buffer cache memory, locks tables, and saturates disk I/O, causing user-facing transaction timeouts. Decoupling data into an S3 columnar lakehouse isolates analytical workloads completely.",
          },
        ],
      },
      {
        id: "high-availability-multi-az-stateless",
        title: "High Availability, Multi-AZ & Stateless Application Architecture",
        shortTitle: "9. Multi-AZ & Stateless Design",
        category: "High Availability",
        icon: Server,
        summary:
          "Build systems that survive component and datacenter death. Master failure domains, Multi-AZ redundancy, eliminating Single Points of Failure (SPOFs), and externalizing session state.",
        theory: [
          "High Availability (HA) means a system continues to operate and serve user traffic even when individual physical components, servers, or entire datacenter facilities fail.",
          "The Hierarchy of Failure Domains:",
          "Process Crash $\\rightarrow$ VM Hypervisor Death $\\rightarrow$ Physical Server Rack Power Loss $\\rightarrow$ Availability Zone Datacenter Flood $\\rightarrow$ Cloud Region Fiber Cut.",
          "Every component must be mapped against these domains to ensure zero Single Points of Failure (SPOFs).",
          "Stateless Application Architecture (The Cloud Elasticity Secret):",
          "• If an application server keeps user session state (e.g. login tokens, cart contents) in local server RAM, that server cannot be killed or replaced without kicking users out.",
          "• Golden Rule: Application instances must be 100% STATELESS! Any incoming user request can be routed to any healthy instance by the load balancer.",
          "• Shared state is externalized into managed, highly available distributed data tiers:",
          "  - Sessions & Caches: Distributed Redis / Memcached cluster.",
          "  - Persistent State: Multi-AZ PostgreSQL or DynamoDB.",
          "  - Media / Documents: Multi-AZ S3 Object Storage.",
          "• Stateless servers can be terminated, launched, and scaled horizontally with zero impact on active users.",
          "Static Stability Principle (Amazon Builders' Library):",
          "• Systems should continue operating normally using already-provisioned capacity even if an external dependency or control plane API becomes impaired.",
        ],
        keyPoints: [
          "Eliminate Single Points of Failure (SPOFs) at every layer: DNS, CDN, ALB, Compute, Cache, and DB.",
          "Stateless applications externalize state to Redis, DB, or S3, allowing servers to be disposable cattle.",
          "Multi-AZ architectures distribute redundant compute and storage across independent physical datacenters.",
          "Static stability ensures the data plane serves traffic even if the management control plane is down.",
        ],
        diagramType: "stateless-multi-az-architecture",
        architectDecision:
          "Never store stateful user sessions in application process memory. Externalize all session tokens to Redis or signed JWTs so the Auto Scaling Group can terminate unhealthy instances without user session loss.",
        interviewQuestions: [
          {
            q: "What does it mean for an application tier to be 'stateless', and why is this essential for cloud autoscaling?",
            a: "A stateless application tier stores zero client session data, uploaded files, or mutable state within the local memory or local disk of individual application server instances. Every request carries all required authentication and context, and persistent state is fetched from external managed services (Redis, database, S3). This allows the load balancer to distribute requests to any available instance, and enables the Auto Scaling Group to launch or terminate instances dynamically without dropping user sessions.",
          },
        ],
      },
      {
        id: "multi-region-active-active-traffic",
        title: "Multi-Region Topologies: Active-Passive, Active-Active & Global Routing",
        shortTitle: "10. Multi-Region & Global Routing",
        category: "Global Architecture",
        icon: Globe,
        summary:
          "Expand across continents. Compare Active-Passive (Warm Standby) with Active-Active architectures, Global Anycast DNS, latency-based routing, and cross-region replication trade-offs.",
        theory: [
          "When a business expands globally or requires protection against catastrophic regional cloud outages (e.g. hurricane knocking out US-East-1), multi-region architecture becomes necessary.",
          "Topologies:",
          "1. ACTIVE-PASSIVE (Pilot Light / Warm Standby):",
          "• Primary Region (US-East) handles 100% of production traffic.",
          "• Secondary Region (US-West) maintains minimal running infrastructure with continuous asynchronous database replication.",
          "• On disaster: Global DNS flips traffic to US-West, and compute scales out. RTO: 5-15 minutes; RPO: seconds to minutes of replication lag.",
          "• Benefit: Predictable cost, zero cross-region write conflict complexity.",
          "2. ACTIVE-ACTIVE (Dual-Region / Multi-Region):",
          "• Both regions actively serve user traffic concurrently.",
          "• Global Anycast DNS or Route 53 routes users to the geographically closest region for ultra-low latency.",
          "• Benefit: Instant failover (RTO $\\approx 0$), high utilization of regional capacity.",
          "• The Massive Challenge: Cross-Region Data Synchronization and Conflict Resolution!",
          "  - The speed of light imposes an unchangeable ~70ms latency penalty between North America and Europe.",
          "  - If User A updates their profile in US-East while User B updates the same record in EU-Central, you have a concurrent distributed write conflict.",
          "  - Requires conflict resolution strategies: Last-Writer-Wins (LWW), Conflict-Free Replicated Data Types (CRDTs), or partition routing by home user ID.",
        ],
        keyPoints: [
          "Active-Passive is simpler and cheaper; Active-Active provides instant failover but introduces write conflict complexity.",
          "The speed of light imposes latency limits: synchronous cross-region writes add 50-100ms to every transaction.",
          "Global Anycast DNS and CDN Edge networks route users to the lowest-latency regional endpoint.",
          "Partitioning data ownership by geography (e.g., EU users pinned to EU region) minimizes cross-region conflicts.",
        ],
        diagramType: "multi-region-active-active-conflict",
        architectDecision:
          "Do not implement multi-region Active-Active until your business genuinely requires sub-minute regional RTO and has solved distributed conflict resolution. Active-Passive Warm Standby satisfies 95% of enterprise disaster recovery mandates at 30% of the complexity.",
        interviewQuestions: [
          {
            q: "What is the primary architectural difficulty when deploying a multi-region Active-Active database?",
            a: "The primary challenge is cross-region write latency and distributed conflict resolution. Because physical light travel across continents takes 50-100ms, synchronous two-phase commit across regions makes writes unacceptably slow. Therefore, multi-region active-active databases use asynchronous replication. If two users concurrently modify the same data record in different regions, conflicting updates occur, requiring complex reconciliation (Last-Writer-Wins, version vectors, or CRDTs) which can result in lost updates.",
          },
        ],
      },
      {
        id: "deployment-observability-canary-tracing",
        title: "Deployment & Observability: Canaries, Blue/Green & Distributed Tracing",
        shortTitle: "11. Deployments & Observability",
        category: "Operations",
        icon: Eye,
        summary:
          "Architecture includes how systems change and how they are debugged. Master Canary deployments, Blue/Green zero-downtime environments, and the Observability Trinity (Metrics, Logs, Traces).",
        theory: [
          "The most common cause of high-severity production outages is not hardware failure or cosmic rays—it is a software deployment or bad configuration change!",
          "Safe Deployment Strategies:",
          "1. BLUE/GREEN DEPLOYMENTS:",
          "• Two identical production environments exist: Blue (currently serving 100% of live traffic) and Green (idle).",
          "• Deploy new software version to Green. Run internal end-to-end sanity tests.",
          "• Flip the load balancer router to point live traffic to Green instantly.",
          "• If severe errors appear, flip router back to Blue within 3 seconds. Zero customer downtime rollback!",
          "2. CANARY DEPLOYMENTS:",
          "• Route 1% of live user traffic to the new version, keeping 99% on the stable version.",
          "• Automated metrics monitors observe HTTP 5xx error rates, latency percentiles, and CPU health for 15 minutes.",
          "• If healthy, automatically advance: 1% $\\rightarrow$ 5% $\\rightarrow$ 25% $\\rightarrow$ 100%. If error rate spikes by >0.5%, trigger automated rollback instantly.",
          "The Observability Trinity (OpenTelemetry):",
          "• METRICS: Aggregated numeric time-series (RPS, CPU, p99 latency, queue depth). Answers: 'Is there a problem?'",
          "• LOGS: Structured JSON timestamped event records (`{\"userId\": 102, \"error\": \"insufficient_funds\"}`). Answers: 'What happened?'",
          "• TRACES: Distributed trace context (`trace_id`, `span_id`) propagated across HTTP headers through all microservices. Answers: 'Where in the 12-hop service graph did the 800ms delay occur?'",
        ],
        keyPoints: [
          "Blue/Green enables instant atomic rollbacks; Canary deployments test live traffic on 1% of users first.",
          "Automate canary rollback: never rely on manual human observation to detect deployment failure.",
          "Distributed Tracing (OpenTelemetry) is mandatory in microservices to locate bottlenecks across network hops.",
          "Observability must be designed into the architecture from Day 1, not patched on after an outage.",
        ],
        diagramType: "canary-deployment-pipeline",
        architectDecision:
          "Integrate automated metric gating into your CI/CD pipeline. If a canary deployment experiences a p99 latency increase of >20% or an error rate increase of >0.1%, automatically abort and rollback without human intervention.",
        interviewQuestions: [
          {
            q: "How does Distributed Tracing solve the debugging challenge in a microservices architecture?",
            a: "In a microservices architecture, a single user request might traverse 10 distinct services and databases. Traditional single-server logs cannot correlate these disparate events. Distributed tracing assigns a unique `Trace ID` at the API Gateway and injects it into HTTP/gRPC headers. As the request propagates, each service records child `Spans` with start/end timestamps. The observability platform stitches these spans into a visual timeline, pinpointing the exact service or database query causing latency or errors.",
          },
        ],
      },
      {
        id: "capstone-globalnow-blueprint",
        title: "Capstone System Design: GlobalNow Platform Blueprint & GameDay",
        shortTitle: "12. GlobalNow Blueprint & GameDay",
        category: "Capstone Project",
        icon: Award,
        summary:
          "Synthesize all 6 modules into the GlobalNow Platform Blueprint: 500M users, 1M QPS peak, p95 < 200ms, multi-region active-passive, and 7 interactive production failure incident simulations.",
        theory: [
          "Congratulations: You have arrived at the pinnacle of systems engineering. In this capstone, you will defend the architectural blueprint for GlobalNow—a global platform handling 500 million users, 50 million DAU, and 1,000,000 requests/sec at global peak.",
          "The GlobalNow Architecture Blueprint:",
          "1. Edge Tier: Global Anycast DNS, Cloudflare/CloudFront CDN edge caching static media, AWS WAF rate-limiting.",
          "2. Ingress Tier: Regional Network Load Balancers (NLB) distributing across multi-AZ Envoy API Gateways.",
          "3. Domain Services Tier: Grouped into bounded DOMA domains:",
          "   - Identity & Auth: Stateless JWT validation, cached in Redis.",
          "   - Orders & Checkout: Isolated Bulkhead compute pool, Transactional Outbox pattern.",
          "   - Payment: Idempotent API with exponential backoff & Stripe/Adyen provider failover.",
          "   - Real-Time Location: Kafka streaming ingestion into Redis Geospatial & Bigtable.",
          "   - Search & Catalog: Elasticsearch cluster populated via CDC from PostgreSQL.",
          "4. Data Tier: Polyglot persistence:",
          "   - Primary Orders/Financials: Amazon Aurora Multi-AZ PostgreSQL with 6-copy storage quorum.",
          "   - User Sessions & Shopping Carts: Amazon DynamoDB with Global Tables.",
          "   - Clickstream & Telemetry: Google Bigtable / Kafka.",
          "   - Invoices, Backups & Static Assets: Multi-AZ S3 with Object Lock WORM.",
          "5. Resilience Invariants: Circuit Breakers on all remote calls, Cell-Based partitioning across user cohorts, automated Canary deployments, and an asynchronous Secondary Disaster Recovery region (RPO < 1 min, RTO < 15 min).",
        ],
        keyPoints: [
          "GlobalNow integrates all 6 modules into a cohesive, highly resilient distributed platform.",
          "End-to-end request tracing separates critical synchronous paths from non-blocking asynchronous events.",
          "Architecture Decision Records (ADRs) document rationale, alternatives, and trade-offs.",
          "GameDay Incident Simulations test whether the architecture survives real-world chaos.",
        ],
        diagramType: "globalnow-platform-blueprint",
        architectDecision:
          "Architectural excellence is not measured by complexity; it is measured by resilience under failure. The best architecture is the simplest one that satisfies all functional and non-functional requirements while allowing graceful evolution as the business scales.",
        interviewQuestions: [
          {
            q: "Trace the complete 'Golden Request Path' for an e-commerce checkout and explain how failure isolation protects the user experience.",
            a: "User submits checkout → Anycast DNS routes to nearest CDN/WAF → Enters API Gateway → Calls Checkout Service → Synchronously verifies Idempotency Key in Redis, locks inventory, and authorizes payment via circuit-breaker-protected Payment Gateway → Atomically commits order and outbox event in PostgreSQL → Returns HTTP 201 Created to user in <200ms. Non-critical tasks (confirmation email, analytics, recommendation model retraining) are pushed asynchronously via Event Bus/Kafka, ensuring downstream failures never abort the purchase.",
          },
        ],
      },
    ],
    []
  );

  const currentTopic = architectureTopics[selectedTopic];
  const topicNumber = String(selectedTopic + 1).padStart(2, "0");

  const nextTopic = () => {
    setSelectedTopic((prev) => (prev < architectureTopics.length - 1 ? prev + 1 : 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const previousTopic = () => {
    setSelectedTopic((prev) => (prev > 0 ? prev - 1 : architectureTopics.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 7 Real-World Architecture Incident Failures (Section 113 of Syllabus)
  const architectureGameScenarios = [
    {
      id: 1,
      title: "Failure 1: Search Service Becomes Slow (p99 latency jumps from 40ms to 4,500ms)",
      context:
        "An unindexed Elasticsearch query causes the Search Microservice to stall. Customer checkout requests also invoke the Search service to display product thumbnails.",
      question: "How should the architecture isolate this failure so checkout never fails?",
      options: [
        {
          id: "A",
          text: "Trip a Circuit Breaker on the Search dependency and gracefully degrade the checkout page by omitting thumbnails or serving cached images.",
          verdict: "Correct! Fault Isolation & Graceful Degradation",
          explanation:
            "Search is non-critical to payment processing. Tripping the circuit breaker stops upstream checkout threads from blocking on Search, allowing purchases to succeed with zero downtime.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "Configure the Checkout service to wait up to 60 seconds for Search to respond.",
          verdict: "Incorrect & Causes Full Outage",
          explanation:
            "Waiting 60 seconds exhausts all HTTP worker threads on the Checkout service, turning a minor search glitch into a company-wide revenue outage.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 2,
      title: "Failure 2: Third-Party Payment Gateway Latency Spikes to 8,000ms",
      context:
        "Your external credit card payment processor is experiencing network degradation. Outgoing payment requests are timing out.",
      question: "What resilience mechanisms prevent duplicate customer charges and thread exhaustion?",
      options: [
        {
          id: "A",
          text: "Enforce a 2,500ms timeout, supply a unique Idempotency Key with every charge request, and retry with Exponential Backoff and Full Jitter.",
          verdict: "Correct! Idempotency & Bounded Backoff",
          explanation:
            "The timeout prevents thread hanging; the idempotency key guarantees the customer is never charged twice on retry; jitter prevents overwhelming the payment processor.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "Immediately retry failed requests 10 times in a tight while-loop without delay.",
          verdict: "Incorrect & Triggers Retry Storm",
          explanation:
            "Tight retry loops trigger thundering herds and risk charging customer credit cards multiple times if requests succeeded partially.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 3,
      title: "Failure 3: Customer Email Notification Service Completely Dies",
      context:
        "The SendGrid / SMTP email notification service is returning HTTP 500 errors. 10,000 customers per minute are placing orders.",
      question: "Should customer order creation fail because the confirmation email cannot be sent?",
      options: [
        {
          id: "A",
          text: "No. Decouple notification using the Transactional Outbox pattern and an asynchronous message queue (SQS/Kafka). Order commits immediately; emails are sent when SendGrid recovers.",
          verdict: "Correct! Asynchronous Decoupling",
          explanation:
            "Email notification is not part of the critical transactional commit path. The Outbox pattern ensures emails are safely buffered and sent once the external service recovers.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "Yes. Reject all customer checkouts with HTTP 500 until email delivery is 100% guaranteed.",
          verdict: "Incorrect & Destroys Revenue",
          explanation:
            "Making checkout fate-share with email delivery is a severe architectural failure. Customers can view their order status in the app while emails lag.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 4,
      title: "Failure 4: Database Read Latency Increases 5× During Flash Sale",
      context:
        "During a product drop, read latency on PostgreSQL jumps from 3ms to 85ms. 90% of requests are reading the exact same 10 product catalog items.",
      question: "What is the most effective architectural scaling solution?",
      options: [
        {
          id: "A",
          text: "Implement a Distributed Cache-Aside layer (Amazon ElastiCache Redis) in front of the database with TTL caching for hot product items.",
          verdict: "Correct! Read-Workload Offloading",
          explanation:
            "Caching repetitive reads in Redis in-memory RAM absorbs 90%+ of catalog traffic, reducing database CPU load and dropping latency back to sub-millisecond speeds.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "Add 20 more application server virtual machines.",
          verdict: "Incorrect",
          explanation:
            "The bottleneck is database read saturation. Adding more application servers simply opens more database connections, worsening lock contention.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 5,
      title: "Failure 5: Transformer Fire Destroys Datacenter in Availability Zone 1",
      context:
        "AZ us-east-1a goes completely offline. Your application runs across AZs 1a, 1b, and 1c.",
      question: "What architectural condition allows the application to continue serving 100% of traffic without degradation?",
      options: [
        {
          id: "A",
          text: "Multi-AZ stateless compute with N+1 capacity headroom: Remaining AZs (1b and 1c) are pre-scaled to absorb the lost AZ's traffic without CPU saturation.",
          verdict: "Correct! Static Stability & Headroom",
          explanation:
            "Multi-AZ ensures redundancy, but static stability requires pre-warmed capacity. If surviving AZs cannot handle the redirected traffic, an AZ failure cascades into a full outage.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "Launch new instances in Germany manually using SSH.",
          verdict: "Incorrect",
          explanation: "Manual cross-continental provisioning takes hours and causes catastrophic customer downtime.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 6,
      title: "Failure 6: Complete Cloud Region Outage (US-East-1 Severed)",
      context:
        "A fiber severance isolates the entire US-East-1 region. Your business mandate specifies RPO ≤ 1 minute and RTO ≤ 15 minutes.",
      question: "Which Disaster Recovery strategy meets these strict requirements?",
      options: [
        {
          id: "A",
          text: "Multi-Region Warm Standby in US-West-2: Continuous asynchronous database replication, Route 53 DNS failover, and automated infrastructure scale-up scripts.",
          verdict: "Correct! Warm Standby DR Architecture",
          explanation:
            "Continuous asynchronous replication keeps RPO under 1 minute. Automated Route 53 health-check DNS flipping and autoscaling in US-West-2 brings service online in <15 minutes.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "Restore from yesterday's daily tape backup stored in an on-premise vault.",
          verdict: "Incorrect (Violates RPO & RTO)",
          explanation:
            "Restoring a multi-terabyte tape backup takes 12-24 hours (violating the 15-minute RTO) and loses 24 hours of data (violating the 1-minute RPO).",
          isCorrect: false,
        },
      ],
    },
    {
      id: 7,
      title: "Failure 7: New Software Release Spikes Production Error Rate From 0.1% to 15%",
      context:
        "A deployment containing a subtle null-pointer exception goes live. User errors surge immediately.",
      question: "What deployment architecture detects and neutralizes this before all users are impacted?",
      options: [
        {
          id: "A",
          text: "Automated Canary Deployment: The new version is routed to only 1% of users; automated metric gating detects the 5xx spike and triggers instant rollback within 60 seconds.",
          verdict: "Correct! Canary Gating & Blast Radius Containment",
          explanation:
            "By exposing only 1% of users and coupling deployments to automated health monitors, 99% of customers are shielded, and the bad release is rolled back with zero human delay.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "Deploy directly to 100% of production servers at 2:00 PM on Friday and monitor Twitter complaints.",
          verdict: "Incorrect & Worst Practice",
          explanation:
            "Deploying to 100% of servers without canary gating creates catastrophic platform-wide outages and damages user trust.",
          isCorrect: false,
        },
      ],
    },
  ];

  const handleGameAnswer = (scenarioId, optionId) => {
    const scenario = architectureGameScenarios.find((s) => s.id === scenarioId);
    if (!scenario) return;

    const selectedOption = scenario.options.find((o) => o.id === optionId);
    const isCorrect = selectedOption?.isCorrect || false;

    setGameSelection(optionId);
    setGameHistory((prev) => {
      const alreadyAnswered = prev[scenarioId] !== undefined;
      if (!alreadyAnswered && isCorrect) {
        setGameScore((s) => s + 100);
      }
      return { ...prev, [scenarioId]: optionId };
    });
  };

  const nextGameScenario = () => {
    if (gameScenarioIndex < architectureGameScenarios.length - 1) {
      setGameScenarioIndex((prev) => prev + 1);
      setGameSelection(gameHistory[architectureGameScenarios[gameScenarioIndex + 1]?.id] || null);
    }
  };

  const prevGameScenario = () => {
    if (gameScenarioIndex > 0) {
      setGameScenarioIndex((prev) => prev - 1);
      setGameSelection(gameHistory[architectureGameScenarios[gameScenarioIndex - 1]?.id] || null);
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-[#f97316] selection:text-white">
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-orange-500/[0.04] rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-12 w-[600px] h-[600px] bg-amber-500/[0.04] rounded-full blur-[160px]" />
        <div className="absolute bottom-10 left-10 w-[550px] h-[550px] bg-orange-500/[0.03] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 md:px-8">
        {/* TOP NAVIGATION & MODULE SWITCHER */}
        <ModuleNav
          track="cloud"
          currentModuleId="architecture"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor(prev => !prev)}
          aiTutorLabel="Ask Nova Architecture AI"
        />

        {/* AI TUTOR ACCORDION DRAWER */}
        {showAiTutor && (
          <section className="mb-8 overflow-hidden rounded-3xl border border-orange-200 bg-white/95 p-6 shadow-xl backdrop-blur-xl transition-all">
            <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f97316] text-white">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#18181b]">
                    Nova AI Principal Cloud Architect Tutor
                  </h3>
                  <p className="text-[11px] text-stone-500">
                    Ask questions about AWS Well-Architected Framework, Circuit Breakers, Exponential Backoff + Jitter, Transactional Outbox pattern, Cell-Based architecture, or Uber DOMA.
                  </p>
                </div>
              </div>
            </div>

            <LearningRo currentTopic={`architecture-${currentTopic.id}`} />
          </section>
        )}

        {/* HERO BANNER */}
        <div className="mb-8 overflow-hidden rounded-3xl border border-[#27272a] bg-[#18181b] p-6 text-white shadow-2xl md:p-9 relative">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/30 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#f97316] mb-3">
                <Building2 size={13} />
                <span>Designing Large-Scale Distributed Cloud Systems</span>
              </div>

              <h1 className="text-2xl font-black tracking-tight text-white md:text-4xl lg:text-5xl">
                Cloud Architecture & System Design
              </h1>

              <p className="mt-3 text-xs md:text-sm leading-relaxed text-stone-300 max-w-2xl">
                Where all building blocks unite. Transform ambiguous business requirements into resilient engineering architectures: Modular Monoliths vs Microservices, Circuit Breakers, Exponential Backoff with Jitter, Transactional Outbox pattern, Cell-Based isolation, and Multi-Region disaster recovery.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="rounded-2xl border border-stone-800 bg-stone-900/90 p-4 text-center">
                <div className="font-mono text-2xl font-extrabold text-[#f97316]">MIT 6.033</div>
                <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mt-0.5">
                  Systems Theory
                </div>
              </div>

              <div className="rounded-2xl border border-stone-800 bg-stone-900/90 p-4 text-center">
                <div className="font-mono text-2xl font-extrabold text-amber-400">12 Topics</div>
                <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mt-0.5">
                  Architecture Track
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TOPIC SELECTION PILLS */}
        <div className="mb-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {architectureTopics.map((topic, index) => {
            const Icon = topic.icon;
            const isSelected = selectedTopic === index;

            return (
              <button
                key={topic.id}
                onClick={() => {
                  setSelectedTopic(index);
                  window.scrollTo({ top: 300, behavior: "smooth" });
                }}
                className={`flex shrink-0 items-center gap-2 rounded-2xl border px-3.5 py-2 text-xs font-bold transition shadow-xs ${
                  isSelected
                    ? "border-[#f97316] bg-[#f97316] text-white shadow-md shadow-orange-500/20"
                    : "border-[#e7e3da] bg-white text-stone-700 hover:border-orange-300 hover:bg-orange-50/50"
                }`}
              >
                <Icon size={14} className={isSelected ? "text-white" : "text-stone-500"} />
                <span>{topic.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* MAIN TOPIC CONTENT SECTION */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* LEFT 8 COLS: DEEP DIVE CONTENT */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* TOPIC HEADER CARD */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-sm md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-[#f97316]">
                    <currentTopic.icon size={22} />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-orange-600">
                      Topic {topicNumber} • {currentTopic.category}
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-[#18181b]">
                      {currentTopic.title}
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={previousTopic}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#e7e3da] bg-stone-50 text-stone-600 hover:border-orange-300 hover:text-[#f97316] transition"
                    title="Previous Topic"
                  >
                    <ArrowLeft size={14} />
                  </button>
                  <span className="font-mono text-xs font-bold text-stone-400 px-1">
                    {selectedTopic + 1} / {architectureTopics.length}
                  </span>
                  <button
                    onClick={nextTopic}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#e7e3da] bg-stone-50 text-stone-600 hover:border-orange-300 hover:text-[#f97316] transition"
                    title="Next Topic"
                  >
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>

              {/* SUMMARY BOX */}
              <div className="rounded-2xl border border-orange-200 bg-orange-50/60 p-4 mb-6 text-xs md:text-sm leading-relaxed text-stone-800 font-medium">
                <span className="font-bold text-orange-900 block mb-1">Architecture Summary:</span>
                {currentTopic.summary}
              </div>

              {/* CORE THEORY PARAGRAPHS */}
              <div className="space-y-4 text-xs md:text-sm leading-relaxed text-stone-700">
                {currentTopic.theory.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* ARCHITECTURE DIAGRAM / VISUALIZATION CONTAINER */}
              <div className="mt-8 rounded-2xl border border-stone-200 bg-stone-900 p-5 text-white shadow-inner">
                <div className="flex items-center justify-between border-b border-stone-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Workflow size={15} className="text-[#f97316]" />
                    <span className="font-mono text-xs font-bold text-stone-300">
                      System Diagram: {currentTopic.shortTitle}
                    </span>
                  </div>
                  <span className="rounded-full bg-orange-500/20 border border-orange-500/40 px-2.5 py-0.5 font-mono text-[10px] text-orange-300">
                    Production Architecture
                  </span>
                </div>

                {/* DIAGRAM RENDERER BASED ON TOPIC */}
                {currentTopic.diagramType === "architecture-six-questions" && (
                  <div className="space-y-2 font-mono text-xs">
                    <div className="text-orange-400 font-bold mb-1 text-[11px]">The Six Foundational Architecture Drivers:</div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-[10px]">
                      <div className="rounded-lg bg-stone-800 p-2 border border-stone-700">
                        <span className="text-emerald-400 font-bold">1. Functional:</span><br/>What must it do?
                      </div>
                      <div className="rounded-lg bg-stone-800 p-2 border border-stone-700">
                        <span className="text-amber-400 font-bold">2. Performance:</span><br/>p95 latency & throughput
                      </div>
                      <div className="rounded-lg bg-stone-800 p-2 border border-stone-700">
                        <span className="text-red-400 font-bold">3. Reliability:</span><br/>Faults, RPO & RTO
                      </div>
                      <div className="rounded-lg bg-stone-800 p-2 border border-stone-700">
                        <span className="text-blue-400 font-bold">4. Security:</span><br/>Zero-Trust & KMS
                      </div>
                      <div className="rounded-lg bg-stone-800 p-2 border border-stone-700">
                        <span className="text-purple-400 font-bold">5. Scalability:</span><br/>10x traffic expansion
                      </div>
                      <div className="rounded-lg bg-stone-800 p-2 border border-stone-700">
                        <span className="text-orange-400 font-bold">6. Economics:</span><br/>FinOps budget limits
                      </div>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "three-tier-vs-modular" && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px]">
                      <div className="rounded-xl border border-stone-700 bg-stone-800 p-3">
                        <div className="text-orange-400 font-bold mb-1">Classic 3-Tier Layering</div>
                        <div className="text-stone-300">Presentation: Web / REST / GraphQL</div>
                        <div className="text-stone-300">Application: Business Workflows</div>
                        <div className="text-stone-300">Data: PostgreSQL / Redis</div>
                        <div className="text-stone-400 text-[10px] mt-1">Clear operational separation per tier.</div>
                      </div>
                      <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/20 p-3">
                        <div className="text-emerald-400 font-bold mb-1">Modular Monolith</div>
                        <div className="text-stone-300">[Users] ↔ [Orders] ↔ [Payments]</div>
                        <div className="text-stone-300">Zero network RPC overhead (in-memory)</div>
                        <div className="text-stone-400 text-[10px] mt-1">Single atomic database transactions.</div>
                      </div>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "cascading-failure-death-spiral" && (
                  <div className="space-y-2 font-mono text-xs">
                    <div className="rounded-xl bg-red-950/40 border border-red-500/40 p-3 text-red-200 text-[11px]">
                      <div className="font-bold text-red-300">The Cascading Failure Death Spiral:</div>
                      Downstream Service C stalls (5s latency) → Service B blocks waiting → Service A blocks waiting → All HTTP connection pools saturate → Health checks fail → Global platform crashes!
                    </div>
                    <div className="text-stone-400 text-[10px] text-center">
                      Mitigation: Strict client timeouts (200ms) + Circuit Breakers + Bulkhead isolated thread pools.
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "backoff-jitter-timeline" && (
                  <div className="space-y-2 font-mono text-[11px]">
                    <div className="rounded-lg bg-stone-800 p-2.5 border border-red-500/40 flex justify-between items-center">
                      <div>
                        <span className="text-red-400 font-bold">Without Jitter (Thundering Herd)</span>
                        <div className="text-stone-400 text-[10px]">All 10,000 clients retry at exactly +100ms, +200ms, +400ms</div>
                      </div>
                      <span className="text-xs text-red-300 font-bold">System Overload!</span>
                    </div>
                    <div className="rounded-lg bg-stone-800 p-2.5 border border-emerald-500/40 flex justify-between items-center">
                      <div>
                        <span className="text-emerald-400 font-bold">With Full Jitter (Amazon Builders' Library)</span>
                        <div className="text-stone-400 text-[10px]">Retries scattered uniformly across random intervals (23ms, 89ms, 174ms)</div>
                      </div>
                      <span className="text-xs text-emerald-300 font-bold">Smooth Traffic</span>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "circuit-breaker-state-machine" && (
                  <div className="space-y-2 font-mono text-xs">
                    <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                      <div className="rounded-lg bg-emerald-950/40 border border-emerald-500/40 p-2 text-emerald-200">
                        <span className="font-bold">1. CLOSED</span><br/>
                        Requests pass through.<br/>Monitor error rate.
                      </div>
                      <div className="rounded-lg bg-red-950/40 border border-red-500/40 p-2 text-red-200">
                        <span className="font-bold">2. OPEN</span><br/>
                        Fail rate {'>'} 50%.<br/>Fast-fail in 1ms locally!
                      </div>
                      <div className="rounded-lg bg-amber-950/40 border border-amber-500/40 p-2 text-amber-200">
                        <span className="font-bold">3. HALF-OPEN</span><br/>
                        Probe with 5% traffic.<br/>Reset or re-trip.
                      </div>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "queue-load-leveling-buffer" && (
                  <div className="space-y-2 font-mono text-xs">
                    <div className="rounded-xl bg-black/60 p-3 border border-stone-800 text-[11px] text-center">
                      <div className="text-orange-400 font-bold mb-1">Queue Load Leveling (Shock Absorber):</div>
                      <div className="text-stone-300">
                        [Elastic Traffic Surge: 500,000 req/s] → [SQS / PubSub Buffer] → [Worker Pool Throttled: 25,000 req/s] → [Database Capacity: 25,000 writes/s]
                      </div>
                      <div className="text-[10px] text-emerald-400 font-bold mt-1">
                        Zero dropped orders. Queue depth swells temporarily during peak and drains smoothly.
                      </div>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "transactional-outbox-flow" && (
                  <div className="space-y-2 font-mono text-xs">
                    <div className="rounded-xl bg-stone-800 p-3 border border-orange-500/40 text-[11px]">
                      <div className="text-orange-400 font-bold mb-1">Single Local ACID Database Transaction:</div>
                      <div className="text-stone-300">
                        BEGIN;<br/>
                        &nbsp;&nbsp;INSERT INTO orders (id, total) VALUES (904, ₹1500);<br/>
                        &nbsp;&nbsp;INSERT INTO outbox_events (event_type, payload) VALUES ('OrderCreated', '{`{"orderId":904}`}');<br/>
                        COMMIT;
                      </div>
                    </div>
                    <div className="text-stone-400 text-[10px] text-center">
                      Change Data Capture (Debezium) reads outbox table and streams to Kafka with at-least-once guarantee. Zero dual-write risk!
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "netflix-data-movement-architecture" && (
                  <div className="space-y-2 font-mono text-[10px]">
                    <div className="rounded-lg bg-stone-800 p-2 border border-stone-700 flex justify-between items-center">
                      <span className="text-orange-400 font-bold">1. Operational Tier:</span>
                      <span className="text-stone-300">Apache Cassandra (Low-latency Member & Billing state)</span>
                    </div>
                    <div className="rounded-lg bg-stone-800 p-2 border border-stone-700 flex justify-between items-center">
                      <span className="text-blue-400 font-bold">2. Data Movement Fleet:</span>
                      <span className="text-stone-300">Automated CDC into Apache Iceberg table format</span>
                    </div>
                    <div className="rounded-lg bg-stone-800 p-2 border border-stone-700 flex justify-between items-center">
                      <span className="text-emerald-400 font-bold">3. Analytical Tier:</span>
                      <span className="text-stone-300">Amazon S3 Lakehouse queried via Spark & Trino</span>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "stateless-multi-az-architecture" && (
                  <div className="space-y-2 font-mono text-xs">
                    <div className="rounded-xl bg-black/60 p-3 border border-stone-800 text-center text-[11px]">
                      <div className="text-amber-400 font-bold mb-1">Stateless Compute + Externalized State:</div>
                      <div className="text-stone-300">
                        ALB → [App VM 1 (AZ-A)] [App VM 2 (AZ-B)] [App VM 3 (AZ-C)]
                      </div>
                      <div className="text-stone-400 text-[10px] mt-1">
                        State externalized to: Redis Cluster (Sessions) + Multi-AZ PostgreSQL (Entities) + S3 (Files)
                      </div>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "multi-region-active-active-conflict" && (
                  <div className="space-y-2 font-mono text-[10px]">
                    <div className="rounded-lg bg-stone-800 p-2.5 border border-stone-700 flex justify-between items-center">
                      <div>
                        <span className="text-orange-400 font-bold">Active-Passive (Warm Standby)</span>
                        <div className="text-stone-400 text-[10px]">US-East primary, US-West standby. RPO: &lt;1 min, RTO: &lt;15 min</div>
                      </div>
                      <span className="text-xs text-stone-300">Recommended for 95% of apps</span>
                    </div>
                    <div className="rounded-lg bg-stone-800 p-2.5 border border-amber-500/40 flex justify-between items-center">
                      <div>
                        <span className="text-amber-400 font-bold">Active-Active (Dual Region)</span>
                        <div className="text-stone-400 text-[10px]">Both serve traffic. Requires CRDTs or Last-Writer-Wins conflict resolution</div>
                      </div>
                      <span className="text-xs text-amber-300 font-bold">RTO ≈ 0</span>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "canary-deployment-pipeline" && (
                  <div className="space-y-2 font-mono text-xs">
                    <div className="rounded-xl bg-black/60 p-3 border border-emerald-500/40 text-center text-[11px]">
                      <div className="text-emerald-400 font-bold mb-1">Automated Canary Deployment Stages:</div>
                      <div className="text-stone-300">
                        [1% Traffic] → Metric Gate (5xx &lt; 0.1%) → [10% Traffic] → [50% Traffic] → [100% Traffic]
                      </div>
                      <div className="text-red-400 text-[10px] mt-1">
                        If 5xx errors breach threshold at ANY point: Automated instantaneous rollback in &lt;30 seconds!
                      </div>
                    </div>
                  </div>
                )}

                {currentTopic.diagramType === "globalnow-platform-blueprint" && (
                  <div className="space-y-2 font-mono text-[10px]">
                    <div className="rounded-lg bg-stone-800 p-2 border border-orange-500/40 flex justify-between items-center">
                      <span className="text-orange-400 font-bold">Edge & Routing:</span>
                      <span className="text-stone-300">Anycast DNS + Cloudflare CDN + Envoy API Gateways</span>
                    </div>
                    <div className="rounded-lg bg-stone-800 p-2 border border-blue-500/40 flex justify-between items-center">
                      <span className="text-blue-400 font-bold">Core Domains:</span>
                      <span className="text-stone-300">Identity, Orders (Bulkhead), Payments (Idempotent), Location (Streaming)</span>
                    </div>
                    <div className="rounded-lg bg-stone-800 p-2 border border-emerald-500/40 flex justify-between items-center">
                      <span className="text-emerald-400 font-bold">Data Tier:</span>
                      <span className="text-stone-300">Aurora PostgreSQL (Orders) + DynamoDB (Sessions) + S3 (Media)</span>
                    </div>
                  </div>
                )}
              </div>

              {/* ARCHITECTURAL DECISION CALLOUT */}
              <div className="mt-6 rounded-2xl border border-stone-300 bg-stone-100 p-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <Lightbulb size={16} className="text-orange-600" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-800">
                    Principal Architect Invariant:
                  </span>
                </div>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                  {currentTopic.architectDecision}
                </p>
              </div>

              {/* INTERVIEW QUESTIONS ACCORDION */}
              <div className="mt-6 border-t border-[#e7e3da] pt-6">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-stone-500 mb-3 flex items-center gap-2">
                  <HelpCircle size={14} className="text-orange-600" />
                  <span>Senior Cloud Systems Architecture Challenge:</span>
                </h3>

                {currentTopic.interviewQuestions.map((qa, idx) => (
                  <div key={idx} className="rounded-2xl border border-orange-200 bg-orange-50/40 p-4">
                    <div className="font-bold text-xs md:text-sm text-[#18181b] mb-2 flex items-start gap-2">
                      <span className="text-orange-600 font-mono font-black">Q:</span>
                      <span>{qa.q}</span>
                    </div>
                    <div className="text-xs md:text-sm leading-relaxed text-stone-700 pl-6 border-l-2 border-orange-400">
                      <span className="font-bold text-stone-900 block mb-1">Architectural Answer:</span>
                      {qa.a}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* INTERACTIVE ARCHITECTURE TRADE-OFF ENGINE */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-3 border-b border-[#e7e3da] pb-4 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white">
                  <Sliders size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#18181b]">
                    Interactive Architecture Trade-Off & ADR Engine
                  </h3>
                  <p className="text-xs text-stone-500">
                    Select your architectural style, resilience tier, and peak traffic to calculate blast radius, latency overhead, and generate an ADR.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3 mb-6">
                <div>
                  <label className="block text-xs font-mono font-bold text-stone-700 uppercase tracking-wider mb-2">
                    1. Architecture Style:
                  </label>
                  <select
                    value={archetypeStyle}
                    onChange={(e) => setArchetypeStyle(e.target.value)}
                    className="w-full rounded-xl border border-stone-300 bg-white p-2.5 text-xs font-medium text-stone-800 focus:border-orange-500 focus:outline-none"
                  >
                    <option value="modular-monolith">Modular Monolith (In-Memory)</option>
                    <option value="three-tier">Classic 3-Tier Layered</option>
                    <option value="microservices">Microservices (DOMA Domains)</option>
                    <option value="cell-based">Cell-Based Bulkhead Architecture</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-stone-700 uppercase tracking-wider mb-2">
                    2. Resilience Tier:
                  </label>
                  <select
                    value={resilienceTier}
                    onChange={(e) => setResilienceTier(e.target.value)}
                    className="w-full rounded-xl border border-stone-300 bg-white p-2.5 text-xs font-medium text-stone-800 focus:border-orange-500 focus:outline-none"
                  >
                    <option value="single-az">Single-AZ (Cost Minimalist)</option>
                    <option value="multi-az">Multi-AZ (Standard High Availability)</option>
                    <option value="multi-region-active-passive">Multi-Region (Warm Standby DR)</option>
                    <option value="multi-region-active-active">Multi-Region (Active-Active)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-stone-700 uppercase tracking-wider mb-2">
                    3. Target Peak Traffic:
                  </label>
                  <select
                    value={peakTrafficQps}
                    onChange={(e) => setPeakTrafficQps(Number(e.target.value))}
                    className="w-full rounded-xl border border-stone-300 bg-white p-2.5 text-xs font-medium text-stone-800 focus:border-orange-500 focus:outline-none"
                  >
                    <option value="5000">5,000 QPS (Emerging Product)</option>
                    <option value="50000">50,000 QPS (Enterprise Scale)</option>
                    <option value="250000">250,000 QPS (Hyper-Growth)</option>
                    <option value="1000000">1,000,000 QPS (Global Peak)</option>
                  </select>
                </div>
              </div>

              {/* TRADE-OFF ENGINE OUTPUT CARD */}
              <div className="rounded-2xl border border-orange-300 bg-gradient-to-br from-orange-50/80 via-white to-amber-50/80 p-5 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-orange-600" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-800">
                      System Trade-Off Profile:
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-stone-600">
                    Est. Cost: {architectureTradeOffs.monthlyCostEstimate}
                  </span>
                </div>

                <div className="grid gap-3 md:grid-cols-3 mb-4 text-xs font-mono">
                  <div className="rounded-xl bg-white/90 p-3 border border-stone-200">
                    <span className="text-stone-400 block text-[10px]">FAILURE BLAST RADIUS:</span>
                    <span className={`text-lg font-black ${architectureTradeOffs.blastRadiusPct <= 20 ? "text-emerald-700" : "text-amber-700"}`}>
                      {architectureTradeOffs.blastRadiusPct}% of users
                    </span>
                    <span className="text-[9px] text-stone-400 block mt-0.5">Impact if 1 core service dies</span>
                  </div>

                  <div className="rounded-xl bg-white/90 p-3 border border-stone-200">
                    <span className="text-stone-400 block text-[10px]">RPC LATENCY TAX:</span>
                    <span className="text-lg font-black text-stone-800">
                      +{architectureTradeOffs.rpcOverheadMs} ms
                    </span>
                    <span className="text-[9px] text-stone-400 block mt-0.5">Serialization & network hops</span>
                  </div>

                  <div className="rounded-xl bg-white/90 p-3 border border-stone-200">
                    <span className="text-stone-400 block text-[10px]">OPERATIONAL COMPLEXITY:</span>
                    <span className={`text-lg font-black ${architectureTradeOffs.complexityScore > 70 ? "text-red-600" : "text-emerald-700"}`}>
                      {architectureTradeOffs.complexityScore} / 100
                    </span>
                    <span className="text-[9px] text-stone-400 block mt-0.5">DevOps & tracing overhead</span>
                  </div>
                </div>

                <div className="rounded-xl bg-white/95 p-3.5 border border-orange-200 text-xs text-stone-800 font-mono">
                  <span className="font-bold text-orange-900 block mb-1">Architectural Decision Record (ADR):</span>
                  {architectureTradeOffs.adrSummary}
                </div>
              </div>
            </div>

            {/* LIVE CIRCUIT BREAKER SIMULATOR */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-sm md:p-8">
              <div className="flex items-center justify-between border-b border-[#e7e3da] pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600 text-white">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#18181b]">
                      Interactive Circuit Breaker Simulator (Resilience Lab)
                    </h3>
                    <p className="text-xs text-stone-500">
                      Simulate a failing downstream dependency. Watch the Circuit Breaker trip and save calling thread pools.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setCircuitBreakerEnabled((prev) => !prev)}
                  className={`rounded-xl px-3 py-1.5 text-xs font-mono font-bold transition ${
                    circuitBreakerEnabled
                      ? "bg-emerald-600 text-white"
                      : "bg-stone-200 text-stone-700"
                  }`}
                >
                  {circuitBreakerEnabled ? "Circuit Breaker: ON" : "Circuit Breaker: OFF"}
                </button>
              </div>

              {/* SIMULATOR SLIDERS */}
              <div className="grid gap-6 md:grid-cols-2 mb-6">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="font-bold text-stone-700">Downstream Dependency Latency:</span>
                    <span className={`font-bold ${dependencyLatencyMs > 250 ? "text-red-600" : "text-emerald-600"}`}>
                      {dependencyLatencyMs} ms
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    step="20"
                    value={dependencyLatencyMs}
                    onChange={(e) => setDependencyLatencyMs(Number(e.target.value))}
                    className="w-full accent-orange-600"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 font-mono mt-0.5">
                    <span>10ms (Healthy)</span>
                    <span>250ms (Slow)</span>
                    <span>1,000ms (Stalled)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="font-bold text-stone-700">Downstream Error Rate:</span>
                    <span className={`font-bold ${dependencyFailureRate > 10 ? "text-red-600" : "text-emerald-600"}`}>
                      {dependencyFailureRate}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    step="2"
                    value={dependencyFailureRate}
                    onChange={(e) => setDependencyFailureRate(Number(e.target.value))}
                    className="w-full accent-red-600"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 font-mono mt-0.5">
                    <span>0% (Clean)</span>
                    <span>15% (Threshold)</span>
                    <span>50% (Catastrophic)</span>
                  </div>
                </div>
              </div>

              {/* SIMULATOR STATUS READOUT */}
              <div className="grid gap-4 md:grid-cols-3">
                <div className={`rounded-2xl border p-4 ${circuitBreakerStatus.stateColor}`}>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider block mb-1 opacity-80">
                    Circuit State:
                  </span>
                  <div className="text-sm font-bold font-mono">
                    {circuitBreakerStatus.state}
                  </div>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                  <span className="text-[11px] font-mono font-bold text-stone-500 uppercase tracking-wider block mb-1">
                    Caller Thread Pool Load:
                  </span>
                  <div className={`text-2xl font-black font-mono ${circuitBreakerStatus.upstreamThreadSaturation > 70 ? "text-red-600" : "text-emerald-700"}`}>
                    {circuitBreakerStatus.upstreamThreadSaturation}%
                  </div>
                  <span className="text-[10px] text-stone-400 font-mono">
                    {circuitBreakerStatus.upstreamThreadSaturation > 70 ? "Thread starvation risk!" : "Threads protected"}
                  </span>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                  <span className="text-[11px] font-mono font-bold text-stone-500 uppercase tracking-wider block mb-1">
                    Client Response Time:
                  </span>
                  <div className="text-2xl font-black text-stone-800 font-mono">
                    {circuitBreakerStatus.effectiveResponseTimeMs} ms
                  </div>
                  <span className="text-[10px] text-stone-400 font-mono">
                    {circuitBreakerStatus.effectiveResponseTimeMs <= 5 ? "Fast failback in 2ms" : "Synchronous wait"}
                  </span>
                </div>
              </div>
            </div>

            {/* ARCHITECTURE GAMEDAY INCIDENT SIMULATOR */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-sm md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-600 text-white shadow-md">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#18181b]">
                      Architecture GameDay: Production Incident Defense
                    </h3>
                    <p className="text-xs text-stone-500">
                      Triage 7 critical architectural disasters from Section 113 of the syllabus. Test your principal architect instincts.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-stone-200 bg-stone-50 px-3 py-1 text-center font-mono text-xs">
                    <span className="text-stone-400 block text-[9px]">TOTAL SCORE</span>
                    <span className="font-bold text-[#f97316]">{gameScore} pts</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={prevGameScenario}
                      disabled={gameScenarioIndex === 0}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#e7e3da] bg-white text-stone-600 hover:text-stone-900 disabled:opacity-40"
                    >
                      <ArrowLeft size={14} />
                    </button>
                    <span className="font-mono text-xs font-bold text-stone-500 px-2">
                      {gameScenarioIndex + 1} / {architectureGameScenarios.length}
                    </span>
                    <button
                      onClick={nextGameScenario}
                      disabled={gameScenarioIndex === architectureGameScenarios.length - 1}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#e7e3da] bg-white text-stone-600 hover:text-stone-900 disabled:opacity-40"
                    >
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* CURRENT SCENARIO CARD */}
              {(() => {
                const scenario = architectureGameScenarios[gameScenarioIndex];
                const answered = gameHistory[scenario.id];

                return (
                  <div className="space-y-4">
                    <div className="rounded-2xl border border-red-200 bg-red-50/50 p-4">
                      <div className="flex items-center gap-2 font-mono text-xs font-bold text-red-800 uppercase tracking-wider mb-1">
                        <AlertTriangle size={15} />
                        <span>{scenario.title}</span>
                      </div>
                      <p className="text-xs md:text-sm text-stone-800 leading-relaxed font-medium">
                        {scenario.context}
                      </p>
                    </div>

                    <div className="font-bold text-sm text-[#18181b]">
                      {scenario.question}
                    </div>

                    {/* OPTIONS */}
                    <div className="space-y-3">
                      {scenario.options.map((option) => {
                        const isSelected = answered === option.id;
                        let btnStyle = "border-stone-200 bg-white hover:border-orange-300 hover:bg-orange-50/30 text-stone-800";

                        if (answered) {
                          if (option.isCorrect) {
                            btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-400";
                          } else if (isSelected && !option.isCorrect) {
                            btnStyle = "border-red-500 bg-red-50 text-red-950 font-bold ring-2 ring-red-400";
                          } else {
                            btnStyle = "border-stone-200 bg-stone-50 text-stone-400 opacity-60";
                          }
                        }

                        return (
                          <button
                            key={option.id}
                            onClick={() => handleGameAnswer(scenario.id, option.id)}
                            className={`w-full text-left rounded-2xl border p-4 text-xs md:text-sm transition-all ${btnStyle}`}
                          >
                            <div className="flex items-start gap-3">
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-700">
                                {option.id}
                              </span>
                              <div className="flex-1">
                                <div>{option.text}</div>
                                {answered && (
                                  <div className="mt-2 text-xs font-medium border-t border-stone-200/60 pt-2">
                                    <span className={option.isCorrect ? "text-emerald-700 font-bold" : "text-red-700 font-bold"}>
                                      {option.verdict} —{" "}
                                    </span>
                                    <span className="text-stone-600">{option.explanation}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>

          {/* RIGHT 4 COLS: SYLLABUS OUTLINE, KEY INVARIANTS, ROADMAP */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* SYLLABUS DIRECTORY CARD */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 border-b border-[#e7e3da] pb-3 mb-4">
                <BookOpen size={16} className="text-orange-600" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-stone-800">
                  Module 6 Topic Index
                </h3>
              </div>

              <div className="space-y-1.5 max-h-[460px] overflow-y-auto pr-1">
                {architectureTopics.map((topic, index) => {
                  const isSelected = selectedTopic === index;
                  return (
                    <button
                      key={topic.id}
                      onClick={() => {
                        setSelectedTopic(index);
                        window.scrollTo({ top: 300, behavior: "smooth" });
                      }}
                      className={`w-full text-left rounded-xl px-3 py-2 text-xs font-medium transition flex items-center justify-between ${
                        isSelected
                          ? "bg-orange-500 text-white font-bold shadow-xs"
                          : "text-stone-600 hover:bg-orange-50 hover:text-stone-900"
                      }`}
                    >
                      <span className="truncate">{topic.shortTitle}</span>
                      <span className="font-mono text-[10px] opacity-70">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* SYSTEMS ARCHITECTURE INVARIANTS CHEAT SHEET */}
            <div className="rounded-3xl border border-[#27272a] bg-[#18181b] p-6 text-white shadow-xl">
              <div className="flex items-center gap-2 border-b border-stone-800 pb-3 mb-4">
                <ShieldCheck size={18} className="text-[#f97316]" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-orange-400">
                  Core Architecture Invariants
                </h3>
              </div>

              <div className="space-y-3 font-mono text-[11px] text-stone-300">
                <div className="rounded-xl bg-stone-900/90 p-3 border border-stone-800">
                  <span className="text-orange-400 font-bold block mb-1">Architecture ≠ Diagram</span>
                  Architecture is the management of complexity, failure propagation, scale, and trade-offs.
                </div>

                <div className="rounded-xl bg-stone-900/90 p-3 border border-stone-800">
                  <span className="text-orange-400 font-bold block mb-1">Jitter Prevents Herd Storms</span>
                  Never retry on fixed intervals. Always add pseudo-random full jitter to desynchronize clients.
                </div>

                <div className="rounded-xl bg-stone-900/90 p-3 border border-stone-800">
                  <span className="text-orange-400 font-bold block mb-1">Transactional Outbox Invariant</span>
                  Never execute network calls inside database transactions. Write events to an outbox table atomically.
                </div>

                <div className="rounded-xl bg-stone-900/90 p-3 border border-stone-800">
                  <span className="text-orange-400 font-bold block mb-1">Static Stability</span>
                  Ensure the data plane continues serving existing users even if the control plane goes dark.
                </div>
              </div>
            </div>

            {/* CURRICULUM ROADMAP BADGE */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-sm text-center">
              <span className="inline-block rounded-full bg-orange-100 text-orange-700 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider mb-2">
                Cloud Architecture Track
              </span>
              <h4 className="text-sm font-bold text-[#18181b]">
                Next in the Program:
              </h4>
              <p className="text-xs text-stone-500 mt-1 mb-4">
                Module 7: Deep AWS Engineering (IAM, VPC, EC2, S3, Aurora, DynamoDB, Lambda, ECS/EKS, SQS/SNS, CloudWatch & KMS).
              </p>
              <button
                onClick={() => navigate("/learning/cloud/aws")}
                className="w-full rounded-xl bg-orange-500 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-orange-600 transition"
              >
                Launch Module 7: AWS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
