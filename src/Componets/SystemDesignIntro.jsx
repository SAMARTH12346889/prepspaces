import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Cpu,
  Globe,
  HelpCircle,
  Layers,
  Lightbulb,
  Network,
  RefreshCw,
  ShieldAlert,
  Sparkles,
  Terminal,
  Workflow,
  Sliders,
  Boxes,
  Activity,
  Award,
  FileText,
  CheckSquare,
  ExternalLink,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";
import {
  VisualDiagramComponent,
  LabArchitectureTopologyDiagram,
} from "./SystemDesignDiagrams";

/* -------------------------------------------------------------------------- */
/* SYSTEM DESIGN MASTERCLASS · MODULE 1                                       */
/* Introduction to System Design and Architectural Thinking                   */
/* University Foundations: MIT 6.5840, CMU 15-440, C4 Model, AWS WAF, Google SRE */
/* -------------------------------------------------------------------------- */

const ASSESSMENT_QUESTIONS = [
  {
    id: 1,
    question:
      "1. A team has three developers and no demonstrated need for independent service scaling. Which is usually the best starting point?",
    options: [
      "Twelve microservices",
      "A modular monolith",
      "A multi-region distributed database",
    ],
    correct: 1,
    explanation:
      "A modular monolith maintains clean internal module boundaries while keeping operational, networking, and deployment overhead minimal for a small team.",
  },
  {
    id: 2,
    question: "2. Which is a non-functional requirement?",
    options: [
      "Students can submit assignments",
      "Teachers can create courses",
      "95% of course API requests complete within a defined latency target",
    ],
    correct: 2,
    explanation:
      "Non-functional requirements describe how well the system must perform (latency, availability, security) rather than specific user actions (functional requirements).",
  },
  {
    id: 3,
    question:
      "3. An application has three instances but all depend on one database. What remains a potential single point of failure?",
    options: [
      "The shared database",
      "Every client browser",
      "The number of frontend components",
    ],
    correct: 0,
    explanation:
      "While compute instances are horizontally duplicated, if the central database fails, the entire application becomes unavailable, making it a critical single point of failure.",
  },
  {
    id: 4,
    question:
      "4. An API receives 600 requests per second and takes an average of 0.1 seconds per request. What is the approximate average number of requests in progress?",
    options: ["6", "60", "6000"],
    correct: 1,
    explanation:
      "By Little's Law (L = λ × W), L = 600 req/sec × 0.1 sec = 60 concurrent requests in flight on average.",
  },
  {
    id: 5,
    question:
      "5. A successful database write is followed by a lost response, and the client retries. Which concept helps prevent a duplicate operation?",
    options: [
      "Vertical scaling",
      "Idempotency",
      "Increasing the payload size",
    ],
    correct: 1,
    explanation:
      "Idempotency ensures that repeating an identical operation (e.g., using an idempotency key) produces the exact same result without duplicate state mutations.",
  },
];

export default function SystemDesignIntro() {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(10);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'interactive' | 'qa' | 'assessment' | 'lab' | 'reading'

  // Interactive Capacity Calculator State
  const [calcDau, setCalcDau] = useState(200000);
  const [calcRequestsPerUser, setCalcRequestsPerUser] = useState(50);
  const [calcPeakMultiplier, setCalcPeakMultiplier] = useState(5);
  const [calcPayloadKb, setCalcPayloadKb] = useState(5);

  // Interactive Little's Law Simulator State
  const [littleRps, setLittleRps] = useState(500);
  const [littleLatencyMs, setLittleLatencyMs] = useState(200);

  // Availability Calculator State
  const [ninesSelection, setNinesSelection] = useState("99.9");

  // Assessment Quiz State (5 questions from user prompt)
  const [userAnswers, setUserAnswers] = useState({});
  const [submittedQuiz, setSubmittedQuiz] = useState(false);

  // Calculations for Capacity Planning
  const totalDailyRequests = calcDau * calcRequestsPerUser;
  const averageRps = (totalDailyRequests / 86400).toFixed(1);
  const peakRps = Math.round((totalDailyRequests / 86400) * calcPeakMultiplier);
  const dailyTransferGb = ((totalDailyRequests * calcPayloadKb) / (1024 * 1024)).toFixed(1);
  const annualLogStorageTb = ((totalDailyRequests * 1 * 365) / (1024 * 1024 * 1024)).toFixed(2);

  // Calculations for Little's Law (L = lambda * W)
  const itemsInFlight = Math.round(littleRps * (littleLatencyMs / 1000));

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
    return ASSESSMENT_QUESTIONS.reduce((acc, q) => {
      return acc + (userAnswers[q.id] === q.correct ? 1 : 0);
    }, 0);
  }, [userAnswers]);

  const systemDesignTopics = useMemo(
    () => [
      {
        id: "what-is-system-design",
        title: "Lesson 1.1 — What is System Design?",
        shortTitle: "1.1 What is System Design?",
        category: "Foundations",
        icon: Globe,
        summary:
          "System design defines how software components, data, infrastructure, and communication protocols work together to satisfy a set of requirements and constraints under real-world conditions.",
        theory: [
          "Imagine someone asks you to build a platform similar to YouTube. You might immediately think of React, Node.js, PostgreSQL, Redis, AWS, and Kubernetes. However, selecting those technologies before understanding the problem is premature.",
          "First, you need to answer fundamental questions: Who will use the platform? What actions must users perform? How much video will be uploaded? How many users watch simultaneously? How quickly must playback begin? What happens if a database fails? What can the business afford? What data must be protected?",
          "A system serving 500 students in a college does not need the same architecture as a global video platform serving millions of viewers. The central principle: design for the requirements and constraints you can justify, rather than the scale you imagine might eventually arrive.",
          "System design defines the structure and behavior of an entire software solution across 10 interconnected areas: Requirements, Architecture, Interfaces, Data, Infrastructure, Performance, Reliability, Security, Operations, and Economics.",
          "Disciplines overlap: Software Development implements functionality in code; Software Architecture establishes major structures and boundaries; System Design defines how components and infrastructure jointly satisfy requirements; Database Design structures data and indexes; DevOps & SRE delivers, operates, and improves software systems.",
        ],
        keyPoints: [
          "Requirements First: Never choose technologies before understanding problems, workloads, and constraints.",
          "10 Core Design Areas: Requirements, Architecture, Interfaces, Data, Infrastructure, Performance, Reliability, Security, Operations, Economics.",
          "Architectural Decisions: Choosing where files are uploaded (direct to S3 vs backend), synchronous vs asynchronous processing, and fault tolerance boundaries.",
          "Pragmatic Engineering: A useful architecture is not the one with the most components, but the one that meets requirements with acceptable complexity, risk, cost, and operational effort.",
        ],
        diagramType: "ten-design-areas",
        tables: [
          {
            title: "10 Core System Design Areas",
            headers: ["Design Area", "Questions It Answers"],
            rows: [
              ["Requirements", "What must the system accomplish?"],
              ["Architecture", "What are the main components and their responsibilities?"],
              ["Interfaces", "How do components communicate?"],
              ["Data", "Where is information stored, and how does it move?"],
              ["Infrastructure", "Where and how does software run?"],
              ["Performance", "What happens under increasing workload?"],
              ["Reliability", "How does the system handle failures?"],
              ["Security", "Who can access which resources, and how are they protected?"],
              ["Operations", "How will engineers deploy, observe, troubleshoot, and maintain it?"],
              ["Economics", "What does the architecture cost to build and operate?"],
            ],
          },
          {
            title: "System Design vs. Related Disciplines",
            headers: ["Discipline", "Primary Focus"],
            rows: [
              ["Software development", "Implementing functionality in code"],
              ["Software architecture", "Establishing major structures, boundaries, and architectural rules"],
              ["System design", "Defining how components and infrastructure jointly satisfy requirements"],
              ["Database design", "Structuring data, relationships, indexes, and access patterns"],
              ["DevOps and SRE", "Delivering, operating, measuring, and improving software systems"],
              ["System administration", "Configuring and maintaining operating systems and infrastructure"],
            ],
          },
        ],
        architectDecision:
          "For an assignment submission feature on a learning platform, never upload multi-gigabyte video assignments directly through application server memory. Generate pre-signed object storage URLs, upload directly to S3/GCS, and notify the backend via asynchronous webhooks upon upload completion.",
        interviewQuestions: [
          {
            q: "Why is jumping directly to technology choices (e.g. Kafka, Redis, Kubernetes) a system design antipattern?",
            a: "Because tools are solutions to specific constraints. Selecting tools before establishing workload scale, read/write ratios, latency targets, and team maintenance capabilities leads to accidental complexity, higher operational costs, and architectures that fail under unanticipated failure modes.",
          },
          {
            q: "What is the relationship between software architecture and system design?",
            a: "Software architecture focuses primarily on code-level structures, module boundaries, and design patterns. System design expands this outward to include physical and cloud infrastructure, network protocols, external dependencies, distributed data replication, cost models, and failure domains.",
          },
        ],
      },

      {
        id: "requirements-engineering",
        title: "Lesson 1.2 — Functional and Non-Functional Requirements",
        shortTitle: "1.2 Requirements & Targets",
        category: "Requirements & Modeling",
        icon: FileText,
        summary:
          "Requirements form the foundation of architecture. If you misunderstand what the system must do, an elegant architecture can still be the wrong solution.",
        theory: [
          "Functional requirements describe WHAT the system must do. For an educational platform, these include: students can browse courses, open lessons, save learning progress, instructors can upload materials, students can submit assignments, and administrators manage users. Each functional requirement should describe observable, testable behavior.",
          "Non-functional requirements describe HOW WELL the system must work and the constraints it must respect: performance, reliability, security, availability, maintainability, and cost.",
          "Poor requirement: 'The application should be fast.' Better requirement: 'Under the agreed workload, 95% of course-page API requests should complete within 300 milliseconds, measured at the backend API boundary.' The second gives engineers a measurable target and boundary.",
          "Constraints and Assumptions: Requirements describe what is needed; constraints restrict the available solutions (e.g. must use existing PostgreSQL, limited budget). Assumptions are hypotheses (e.g. read-to-write ratio is 100:1) that must be documented and validated against telemetry.",
        ],
        keyPoints: [
          "Functional: Observable capabilities and behaviors (e.g., submitting assignments, grading).",
          "Non-Functional: Quality targets (p95 latency < 300ms, 99.9% uptime, data durability).",
          "Measurable Boundaries: Quality requirements must specify WHERE and HOW they are measured.",
          "Trade-off Awareness: Adding replicas improves availability but increases cost and consistency lag.",
          "Assumptions vs Facts: Document assumptions explicitly and validate with production metrics.",
        ],
        diagramType: "requirements-matrix",
        tables: [
          {
            title: "Non-Functional Quality Attributes Examples",
            headers: ["Quality Attribute", "Measurable Requirement Example"],
            rows: [
              ["Performance", "95% of course-page requests complete within 300 ms"],
              ["Availability", "Monthly availability objective of 99.9% for the course-browsing API"],
              ["Durability", "A successfully acknowledged submission must not be lost under stated failure guarantees"],
              ["Security", "A student cannot access another student's private submissions"],
              ["Scalability", "The service sustains an agreed peak request rate without violating latency targets"],
              ["Maintainability", "Course, assignment, and notification functionality have clearly defined boundaries"],
              ["Cost", "Monthly infrastructure spending stays within an agreed budget"],
            ],
          },
        ],
        practicalExercise:
          "Write requirements for an assignment-submission feature: Include 5 functional requirements, 5 testable non-functional requirements, 3 constraints, and 3 assumptions. Specify how each non-functional requirement will be monitored.",
        architectDecision:
          "State quality targets in percentiles (e.g., p95, p99) rather than averages. An average response time of 150ms can easily mask 5% of users waiting 15 seconds due to database lock contention.",
        interviewQuestions: [
          {
            q: "How do functional requirements differ from non-functional requirements?",
            a: "Functional requirements define specific business features (e.g., 'User can submit code'). Non-functional requirements define quality constraints and operational boundaries (e.g., 'API responds in <200ms at p95 under 1,000 RPS, maintains 99.95% uptime, and encrypts submissions at rest').",
          },
          {
            q: "Why do non-functional requirements often conflict with one another?",
            a: "Because engineering involves trade-offs. Increasing availability via multi-region replication increases infrastructure costs and network consistency latency. Enforcing strict ACID consistency can lower peak write throughput.",
          },
        ],
      },

      {
        id: "anatomy-of-software-system",
        title: "Lesson 1.3 — Anatomy of a Software System",
        shortTitle: "1.3 Anatomy of a System",
        category: "Requirements & Modeling",
        icon: Layers,
        summary:
          "A software application is composed of parts that collaborate to fulfill requests: clients, edge/CDN, API gateways, business logic, databases, object stores, and asynchronous queues.",
        theory: [
          "The basic building blocks of modern applications include: Client (browser, mobile), Edge/CDN (caches static assets and terminates TLS near users), Backend API (contractual entry points), Auth & Authz (identity verification and permissions), Application Logic (business rules), Relational Database (structured transactional state), Object Storage (unstructured files/videos), and Queue & Background Workers (deferred processing).",
          "Following a request: Suppose a student opens a course. The browser sends a GET request to the Backend API. The API validates credentials, queries the Relational Database for course metadata and user enrollment, formats the JSON response, and returns it to the browser for rendering.",
          "Why requests get slow: A slow operation could be caused by network latency, CPU saturation, unindexed database queries, N+1 sequential database round-trips, a lagging downstream third-party API, or thread pool starvation. Always profile before optimizing.",
          "Synchronous vs Asynchronous: Synchronous communication blocks the caller until the result is ready (ideal for immediate reads like fetching grades). Asynchronous communication returns an immediate acknowledgment and processes heavy work in the background (ideal for video transcoding or sending email alerts).",
        ],
        keyPoints: [
          "Clear Component Responsibilities: Client, CDN, Gateway, Auth, Business Logic, DB, Object Store, Queues.",
          "End-to-End Request Path: DNS → CDN/Edge → Load Balancer → API → Database → Serialization → Browser.",
          "API Contracts: Explicit HTTP verbs, status codes (200 OK, 400 Bad Request, 403 Forbidden, 404 Not Found), pagination, and rate limiting.",
          "Sync vs Async: Use synchronous for immediate user-visible queries; use async message queues for deferred, heavy, or fault-tolerant background work.",
        ],
        diagramType: "high-level-architecture",
        tables: [
          {
            title: "Synchronous vs. Asynchronous Communication",
            headers: ["Consideration", "Synchronous", "Asynchronous"],
            rows: [
              ["Response", "Caller waits for the operation to complete", "Can return immediately before downstream work finishes"],
              ["User Experience", "Suitable when the result is immediately needed", "Useful for non-blocking, deferred processing"],
              ["Failure Handling", "Downstream failure directly breaks the request", "Requires queue dead-lettering, retries, and job state tracking"],
              ["Complexity", "Simpler mental model initially", "Introduces message brokers, delivery semantics, and eventual consistency"],
            ],
          },
        ],
        architectDecision:
          "Never execute external network calls (such as email delivery or payment webhooks) inside synchronous database transaction blocks. If the external provider experiences network latency, your database connection remains held open, causing connection pool exhaustion across the entire cluster.",
        interviewQuestions: [
          {
            q: "What are the hidden steps when a browser navigates to an API URL?",
            a: "1. DNS resolution (UDP 53). 2. TCP 3-way handshake (SYN, SYN-ACK, ACK). 3. TLS 1.3 cryptographic negotiation. 4. HTTP request dispatch. 5. Reverse proxy / Load balancer routing. 6. Backend middleware authentication. 7. Business logic execution and database query execution. 8. JSON serialization and HTTP response delivery.",
          },
        ],
      },

      {
        id: "architectural-styles",
        title: "Lesson 1.4 — Architectural Styles (Monolith vs Microservices)",
        shortTitle: "1.4 Monolith vs Microservices",
        category: "Architectural Styles",
        icon: Boxes,
        summary:
          "Monolithic, modular monolithic, and microservices architectures compared by deployment boundaries, operational complexity, and organizational fit.",
        theory: [
          "Monolithic Architecture: An entire application is packaged and deployed as a single unit. Modules communicate via in-memory function calls. Advantages: straightforward deployment, unified codebase, zero network latency between modules, simple ACID transactions. Risks: coupling, large blast radius, entire app must be deployed for small changes.",
          "Modular Monolithic Architecture: Deployed as a single binary/process, but strictly enforces logical boundaries between domains (User, Course, Assessment, Notification) via explicit interfaces and separate database schemas. Deployment boundaries and logical code boundaries are distinct concepts.",
          "Microservices Architecture: Decomposes the application into independently deployable services communicating over the network (REST, gRPC, events). Advantages: independent scaling, independent team velocity, targeted technology choices. Disadvantages: distributed system tax—network latency, partial failures, distributed transactions (Sagas), service discovery, distributed tracing, complex data consistency.",
          "Case Study: A platform with 3 developers and 2,000 daily active users starting with 12 microservices will spend more time managing Docker, Kubernetes, network retries, and API gateways than writing business features. A modular monolith is the recommended starting point.",
        ],
        keyPoints: [
          "Monolith: Single deployable artifact, fast in-memory calls, simpler debugging.",
          "Modular Monolith: Single deployment with strict domain boundaries and encapsulation.",
          "Microservices: Independently deployable network services; requires high operational maturity.",
          "Distributed Systems Tax: Network latency, network partitions, circuit breaking, distributed tracing, and eventual consistency.",
          "Evolutionary Architecture: Start with a well-factored modular monolith; extract services only when data demonstrates independent scaling or team ownership requirements.",
        ],
        diagramType: "architectural-styles-comparison",
        tables: [
          {
            title: "Architectural Decision Guide",
            headers: ["Situation", "Reasonable Starting Point"],
            rows: [
              ["Small product with a small engineering team", "Monolith"],
              ["Product needing strong boundaries but minimal operational overhead", "Modular Monolith"],
              ["Independently owned domains with justified scaling/compliance needs", "Microservices"],
              ["Work dominated by event processing or heavy background compute", "Modular application with asynchronous worker queues"],
            ],
          },
        ],
        architectDecision:
          "Do not share a single relational database across microservices without strict access control. Sharing database tables couples services at the data layer, destroying service independence and creating uncoordinated schema migrations.",
        interviewQuestions: [
          {
            q: "What is the difference between a monolithic codebase and a modular monolith?",
            a: "A standard monolith often allows arbitrary cross-package calls and circular dependencies. A modular monolith enforces strict architectural firewalls and explicit public interfaces between modules, preventing code leakage while retaining single-process deployment.",
          },
          {
            q: "Why do microservices fail in small startup teams?",
            a: "Because the cognitive and operational overhead (CI/CD pipelines for 10+ repos, distributed tracing, network failure handling, data reconciliation) drains engineering bandwidth before product-market fit is achieved.",
          },
        ],
      },

      {
        id: "quality-attributes",
        title: "Lesson 1.5 — Quality Attributes and Engineering Trade-offs",
        shortTitle: "1.5 Quality Attributes & WAF",
        category: "Architectural Styles",
        icon: Award,
        summary:
          "Scalability, Latency vs Throughput, Availability 'Nines', Reliability, Consistency, Security, Observability, and the AWS Well-Architected Framework.",
        theory: [
          "Quality attributes determine whether a system is merely functional or genuinely suitable for its workload. This connects to the AWS Well-Architected Framework: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability.",
          "Scalability: The ability to handle growing workloads. Vertical scaling (scaling up) adds CPU/RAM to a single box (hits physical ceilings). Horizontal scaling (scaling out) adds instances behind a load balancer (requires stateless application tiers).",
          "Latency vs Throughput: Latency is the time taken to complete an operation (e.g. 150ms). Throughput is the volume of work completed per unit time (e.g. 500 RPS). Percentiles matter: p50 (median), p95 (95% complete under this time), and p99 (the slowest 1% tail latency). Averages hide unacceptable user experience.",
          "Availability vs Reliability: Availability is the proportion of time a service is reachable and usable. Reliability is whether the system performs its intended function correctly without errors. Durability is whether acknowledged data is never lost.",
          "The 'Nines' of Availability: 99.0% allows 3.65 days downtime/year. 99.9% allows 8.76 hours. 99.99% allows 52.6 minutes. 99.999% allows just 5.26 minutes per year.",
          "Observability (Three Pillars): Logs (discrete event records), Metrics (time-series aggregations like RPS, CPU, latency), and Traces (request journeys across distributed boundaries). Google SRE principles emphasize defining Service Level Indicators (SLIs) and Service Level Objectives (SLOs) around user satisfaction.",
        ],
        keyPoints: [
          "AWS Well-Architected Pillars: Operational Excellence, Security, Reliability, Performance, Cost, Sustainability.",
          "Horizontal vs Vertical: Scale out stateless web tiers; scale up databases until sharding or read replicas are necessary.",
          "Percentiles Over Averages: Always evaluate p95 and p99 to inspect latency outliers.",
          "Availability Math: Moving from 99.9% to 99.99% reduces annual downtime from 8.76 hours to 52.6 minutes, requiring automated failovers.",
          "Observability: Logs, Metrics, Traces, and SLO-driven alerting.",
        ],
        diagramType: "scaling-architecture",
        tables: [
          {
            title: "The Availability 'Nines' Table (365-Day Window)",
            headers: ["Availability Percentage", "Allowed Annual Downtime", "Allowed Monthly Downtime"],
            rows: [
              ["99.0% (Two Nines)", "3 days, 15 hours (87.6 hrs)", "7 hours, 18 minutes"],
              ["99.9% (Three Nines)", "8 hours, 46 minutes (8.76 hrs)", "43 minutes, 48 seconds"],
              ["99.99% (Four Nines)", "52 minutes, 34 seconds (0.88 hrs)", "4 minutes, 23 seconds"],
              ["99.999% (Five Nines)", "5 minutes, 15 seconds (0.09 hrs)", "26.3 seconds"],
            ],
          },
          {
            title: "Architecture Trade-off Matrix",
            headers: ["Attribute", "Design A: Single Monolith", "Design B: Microservices"],
            rows: [
              ["Initial complexity", "Usually lower", "Usually higher"],
              ["Deployment independence", "Limited", "Potentially greater"],
              ["Network failure handling", "Fewer internal network boundaries", "Critical and pervasive"],
              ["Independent scaling", "Coarse-grained", "Fine-grained per service"],
              ["Operational overhead", "Lower initially", "Substantially higher"],
              ["Best fit", "Smaller systems and cohesive teams", "Distinct teams with justified domain boundaries"],
            ],
          },
        ],
        architectDecision:
          "Never attempt 99.999% availability unless human life or critical financial infrastructure is at stake. The architectural complexity, active-active multi-region replication, automated split-brain mitigation, and operational cost multiply exponentially with each additional nine.",
        interviewQuestions: [
          {
            q: "Why do senior architects measure p99 latency instead of average latency?",
            a: "Averages hide extreme tail latency. In e-commerce or SaaS, high-value power users generate complex requests that touch more data. If the top 1% slowest requests take 12 seconds while the average is 100ms, the most profitable customers have the worst experience.",
          },
        ],
      },

      {
        id: "workload-and-capacity",
        title: "Lesson 1.6 — Workload Analysis and Capacity Estimation",
        shortTitle: "1.6 Capacity Planning",
        category: "Resilience & Performance",
        icon: Activity,
        summary:
          "Quantitative architectural reasoning: back-of-the-envelope estimations for Daily Requests, Average RPS, Peak RPS, Network Bandwidth, and Storage Growth.",
        theory: [
          "One of the biggest differences between a vague architecture chat and a rigorous engineering design is quantitative reasoning. Before estimating server counts, determine the workload.",
          "Core Workload Questions: How frequently does each action happen? How much data is read or written? Is it latency-sensitive? Does it trigger async work? What is the peak-to-average traffic multiplier?",
          "Worked Example (Learning Platform): Assumptions: 200,000 Daily Active Users (DAU), 50 API requests per user per day, 5x peak-to-average traffic ratio, 5 KB average combined request/response payload.",
          "Step 1 (Daily Requests): 200,000 × 50 = 10,000,000 requests per day (10 Million).",
          "Step 2 (Average RPS): 10,000,000 / 86,400 seconds ≈ 115.7 RPS (~116 requests/second).",
          "Step 3 (Peak RPS): 115.7 × 5 ≈ 578.7 (~579 requests/second at peak).",
          "Step 4 (Network Transfer): 10,000,000 × 5 KB = 50,000,000 KB = 50 GB per day (excluding streaming video).",
          "Step 5 (Log Storage): If each request generates 1 KB of retained structured logs: 10,000,000 × 1 KB = 10 GB/day. Annually: 10 GB/day × 365 = 3.65 TB/year raw log storage.",
          "Why request count is not enough: A lightweight cached GET request costs 100x less CPU than an unindexed full-table join or image resizing operation. Credible capacity estimation requires profiling CPU and memory consumption per endpoint.",
        ],
        keyPoints: [
          "86,400 seconds in a day: The golden constant for back-of-the-envelope RPS conversions.",
          "Peak Factor: Systems rarely experience uniform traffic; design for 3x to 10x peak surges.",
          "Bandwidth Math: Requests × Payload Size = Daily Network Egress.",
          "Compounding Storage: Small per-request logs (1 KB) compound to terabytes annually.",
          "Profile Over Guess: Use benchmarks to calculate requests per CPU core under production load.",
        ],
        diagramType: "capacity-flow-diagram",
        tables: [
          {
            title: "Capacity Planning Summary (200k DAU Baseline)",
            headers: ["Metric", "Formula / Assumption", "Calculated Value"],
            rows: [
              ["Daily Requests", "200,000 users × 50 req/day", "10,000,000 requests/day"],
              ["Average RPS", "10,000,000 / 86,400 sec", "115.7 req/sec"],
              ["Peak RPS", "115.7 RPS × 5x multiplier", "579 req/sec"],
              ["Daily Network Egress", "10M requests × 5 KB payload", "50 GB/day"],
              ["Annual Log Storage", "10M req × 1 KB log × 365 days", "3.65 TB/year"],
            ],
          },
        ],
        architectDecision:
          "Always provision 30% to 50% capacity headroom above estimated peak RPS. During sudden traffic spikes, auto-scaling instances take 2 to 5 minutes to spin up and warm caches; headroom prevents cascading brownouts while capacity expands.",
        interviewQuestions: [
          {
            q: "How many seconds are in a day, and why is this memorized for system design interviews?",
            a: "There are 86,400 seconds in a day (~100,000 for quick mental math). It allows engineers to quickly divide daily active requests by 86,400 to estimate average requests per second (RPS).",
          },
          {
            q: "Why is bandwidth estimation critical when designing cloud systems?",
            a: "Cloud providers charge heavily for inter-region and public internet data egress (typically $0.05 to $0.09 per GB). A poorly designed API returning uncompressed, over-fetched JSON payloads can generate thousands of dollars in surprise monthly cloud egress bills.",
          },
        ],
      },

      {
        id: "concurrency-and-bottlenecks",
        title: "Lesson 1.7 — Performance, Concurrency, and Bottlenecks",
        shortTitle: "1.7 Concurrency & Little's Law",
        category: "Resilience & Performance",
        icon: Cpu,
        summary:
          "Concurrency, Little's Law (L = λW), identifying the critical request bottleneck, and common saturation categories across CPU, DB, memory, and network.",
        theory: [
          "Concurrency describes work in progress during overlapping time periods. It does not mean operations execute at the exact same instant.",
          "Little's Law: For any stable queuing system, the average number of items in the system (L) equals the average arrival rate (λ) multiplied by the average time an item spends in the system (W): L = λ × W.",
          "Example: An API receives 500 requests per second (λ = 500). Average request duration is 200 milliseconds (W = 0.2s). Average concurrent requests in flight: L = 500 × 0.2 = 100 requests in progress.",
          "Identify the Bottleneck: Suppose a course page request passes through: App processing (20ms) + Database query (120ms) + External recommendation API (180ms) + Serialization (10ms) = 330ms total. The external recommendation API is the primary bottleneck!",
          "Possible Improvements: Cache recommendations, call the recommendation API and database in parallel, or remove recommendation from the critical request path entirely (fetch via client asynchronously).",
          "Common Bottleneck Categories: CPU (high utilization, thread exhaustion), Database (slow queries, connection saturation, lock waits), Network (transfer times, MTU limits), External Dependencies (unbounded timeouts), Lock Contention (threads waiting on synchronized shared state), and Memory (garbage collection pauses).",
        ],
        keyPoints: [
          "Little's Law: L = λW (Concurrency = Arrival Rate × Latency).",
          "Serial Delay Summation: Total latency is bounded by the slowest sequential operation in the critical path.",
          "Parallelization Caveat: Parallelizing requests adds thread coordination overhead; only parallelize independent I/O tasks.",
          "Decouple Non-Essential Dependencies: Never allow an optional recommendation service to delay core page content.",
        ],
        diagramType: "bottleneck-analysis-diagram",
        tables: [
          {
            title: "Common Bottleneck Categories & Mitigations",
            headers: ["Bottleneck Category", "Observable Symptoms", "Architectural Response"],
            rows: [
              ["CPU", "Sustained >85% CPU, thread queueing", "Profile hot paths, optimize algorithms, scale horizontally"],
              ["Database", "High query latency, connection pool exhausted", "Add composite indexes, read replicas, cache query results"],
              ["Network", "High transfer times, bandwidth limits hit", "Enable gzip/brotli compression, reduce payload, use CDN"],
              ["External Dependency", "Tail latency spikes when 3rd party slows down", "Set aggressive timeouts, use circuit breakers, degrade gracefully"],
              ["Lock Contention", "High thread wait time, low CPU utilization", "Eliminate shared mutable state, use optimistic locking"],
              ["Memory", "Periodic latency freezes, OOM crashes", "Tune heap size, fix memory leaks, inspect object lifetimes"],
            ],
          },
        ],
        architectDecision:
          "Set strict HTTP client timeouts (e.g. 250ms) on all downstream dependencies. If an external service hangs without a timeout, your incoming thread pool will quickly saturate at 100% capacity, taking down your entire web tier.",
        interviewQuestions: [
          {
            q: "What is Little's Law and how do you use it in capacity sizing?",
            a: "L = λ × W. If your service processes 1,000 RPS and each request takes 0.5s, you must have infrastructure capable of handling at least 500 concurrent connections/threads simultaneously without queuing.",
          },
        ],
      },

      {
        id: "failure-first-thinking",
        title: "Lesson 1.8 — Failure-First Architectural Thinking",
        shortTitle: "1.8 Fault Tolerance & SPOFs",
        category: "Resilience & Performance",
        icon: ShieldAlert,
        summary:
          "Distributed systems foundations (MIT 6.5840, CMU 15-440): partial failures, timeouts, retries with exponential backoff, idempotency, circuit breakers, and Single Points of Failure.",
        theory: [
          "Real systems experience failures that cannot be eliminated simply by writing more code. Servers crash, databases become overloaded, network packets drop, and cables get cut.",
          "Understand Partial Failure: Imagine a student submits an assignment. 1. Browser uploads file. 2. Backend stores file. 3. Database records submission. 4. Backend sends response. If step 3 succeeds but step 4 network packet drops, the client experiences a timeout. Did the submission succeed? The client cannot know!",
          "Idempotency: An operation is idempotent if executing it multiple times produces the exact same result as executing it once. By passing a unique client-generated Idempotency-Key header, retries safely return the previous result without duplicate database records.",
          "Failure-Handling Toolkit:",
          "• Timeouts: Prevent requests from hanging indefinitely.",
          "• Bounded Retries with Exponential Backoff and Jitter: Avoid retry storms that amplify outages.",
          "• Circuit Breakers: Temporarily trip open to stop calling failing dependencies, allowing them to recover.",
          "• Dead-Letter Queues (DLQs): Capture poison-pill messages for inspection without halting message consumers.",
          "• Single Point of Failure (SPOF): Any component whose lone failure brings down the entire system (e.g. a single non-replicated database).",
          "Graceful Degradation: When non-critical components fail, core capabilities must remain available. If recommendations fail, courses still load. If notifications fail, assignment submission still succeeds.",
        ],
        keyPoints: [
          "Partial Failure: In distributed systems, some parts succeed while other parts fail silently.",
          "Idempotency Keys: Essential for network retry safety (POST requests must be made idempotent).",
          "Exponential Backoff & Jitter: Wait 100ms, 200ms, 400ms + random jitter to prevent retry storms.",
          "Circuit Breakers: Closed (normal) → Open (stop requests) → Half-Open (test recovery).",
          "Eliminate SPOFs: Multi-AZ deployments, active-passive database failover, redundant load balancers.",
          "Graceful Degradation: Never fail an entire transaction for an optional feature.",
        ],
        diagramType: "failure-resilience-diagram",
        architectDecision:
          "Always implement exponential backoff WITH randomized jitter for retries. If 10,000 mobile clients all retry on an exact 1.0-second timer, their synchronized waves of traffic will continuously knock the recovering backend back offline.",
        interviewQuestions: [
          {
            q: "What is an idempotency key and how does it prevent duplicate transactions?",
            a: "The client generates a unique UUID for a mutation. The server records this key in a fast cache/DB with the transaction state. If a duplicate request arrives with the same key, the server detects it and returns the cached result without re-executing the operation.",
          },
          {
            q: "How does a circuit breaker protect cascading failures in distributed systems?",
            a: "When a downstream service error rate exceeds a threshold (e.g. 50%), the breaker trips to 'Open', immediately failing or returning cached fallbacks without hitting the downstream service. This prevents upstream thread exhaustion and gives the downstream service time to recover.",
          },
        ],
      },

      {
        id: "architecture-diagrams-and-c4",
        title: "Lesson 1.9 — Architecture Diagrams and the C4 Model",
        shortTitle: "1.9 C4 Model & ADRs",
        category: "Engineering Practice",
        icon: Workflow,
        summary:
          "The C4 Model (Context, Container, Component, Code), clear diagramming standards, and Architecture Decision Records (ADRs).",
        theory: [
          "Architecture diagrams help engineers communicate system structure, dependencies, and operational behavior. The C4 Model (by Simon Brown) organizes diagrams into four hierarchical zoom levels:",
          "Level 1 — System Context: High-level view showing users, external systems, and overall system boundaries. Audience: Everyone (business, product, engineering).",
          "Level 2 — Containers: The main deployable applications, services, and data stores (e.g. React SPA, Node.js API, PostgreSQL DB, Redis cache, S3 bucket). Audience: Technical teams.",
          "Level 3 — Components: The structural building blocks inside an individual container (controllers, repositories, services). Audience: Software developers.",
          "Level 4 — Code: Detailed class diagrams or interfaces. Rarely needed except for complex domain algorithms.",
          "Diagramming Standards: Every useful diagram must clearly identify: system boundaries, component responsibilities, request flow direction, protocols (HTTPS, gRPC, AMQP), and data ownership.",
          "Architecture Decision Records (ADRs): Formal documents recording significant architectural choices: Context, Decision, Alternatives Considered, Consequences, and Revisit Triggers.",
        ],
        keyPoints: [
          "C4 Levels: 1. System Context → 2. Container → 3. Component → 4. Code.",
          "Explicit Boundaries: Clearly label protocols, authentication gates, and trust zones.",
          "ADR Structure: Title, Status, Context, Decision, Consequences, Alternatives, Revisit Criteria.",
          "Living Documentation: Diagrams and ADRs should be committed into source control alongside code.",
        ],
        diagramType: "c4-model-hierarchy",
        tables: [
          {
            title: "ADR Example: Choose Modular Monolith for V1",
            headers: ["Section", "Content"],
            rows: [
              ["Title", "ADR-001: Start Learning Platform with a Modular Monolith"],
              ["Status", "Accepted"],
              ["Context", "Team has 3 developers, 2,000 DAU, and no demonstrated need for independent service scaling."],
              ["Decision", "Deploy a single Node.js application enforcing strict internal module boundaries (User, Course, Assessment, Notification)."],
              ["Alternatives Considered", "Unstructured monolith (risk of spaghetti code); 12 Microservices (excessive operational overhead)."],
              ["Consequences", "Fast feature delivery, single deployment pipeline, zero network latency between modules. Revisit if a single domain requires dedicated scaling."],
            ],
          },
        ],
        architectDecision:
          "Store ADRs in markdown within your git repository under `/docs/adr/`. When an architectural decision is committed into git, code reviews can challenge or validate the decision, and new team members can understand why legacy choices were made.",
        interviewQuestions: [
          {
            q: "What is the primary benefit of the C4 model over arbitrary whiteboard architecture diagrams?",
            a: "The C4 model provides a consistent, standardized zooming hierarchy (Context → Container → Component → Code) with defined abstractions, eliminating ambiguity over whether a 'box' represents a physical server, a microservice, or a single code class.",
          },
        ],
      },

      {
        id: "system-design-workflow",
        title: "Lesson 1.10 — The Complete System Design Workflow",
        shortTitle: "1.10 System Design Workflow",
        category: "Engineering Practice",
        icon: Terminal,
        summary:
          "The repeatable 11-stage architectural design workflow connecting product requirements to prototype verification and architecture reviews.",
        theory: [
          "Follow a consistent, disciplined process when tackling any new system design problem in production or technical interviews:",
          "Stage 1. Clarify Problem & Scope: Users, core use cases, out-of-scope boundaries.",
          "Stage 2. Functional Requirements: Testable, observable behaviors.",
          "Stage 3. Quality Targets & Constraints: p95/p99 latency, availability SLOs, budget, existing tech stack.",
          "Stage 4. Workload Estimation: DAU, average and peak RPS, daily network transfer, annual storage growth.",
          "Stage 5. High-Level Architecture: Context and container diagrams mapping major components.",
          "Stage 6. Define APIs, Data & Boundaries: REST/gRPC endpoints, schemas, database models.",
          "Stage 7. Bottlenecks & Failure Modes: Little's Law, partial failure analysis, circuit breakers, SPOFs.",
          "Stage 8. Trade-Off Comparison & ADRs: Compare alternative designs and document decisions.",
          "Stage 9. Prototype Implementation: Build a representative proof-of-concept testing critical operations.",
          "Stage 10. Benchmark & Failure Testing: Measure latency, throughput, and inject chaos failures.",
          "Stage 11. Architecture Review: Present findings, sign off on trade-offs, and establish monitoring SLOs.",
        ],
        keyPoints: [
          "Repeatable Engineering Process: Never jump into drawing databases before clarifying scale and scope.",
          "Evidence-Based Validation: Prototypes and benchmarks prove whether hypotheses hold under stress.",
          "Continuous Architecture: Design evolves as user scale, team size, and business constraints shift.",
        ],
        diagramType: "system-design-workflow",
        tables: [
          {
            title: "System Design Workflow Stages & Expected Artifacts",
            headers: ["Stage", "Expected Engineering Artifact"],
            rows: [
              ["1. Problem Definition", "Scope, user personas, assumptions, and use cases"],
              ["2. Requirements", "Functional and testable non-functional requirements"],
              ["3. Workload", "Traffic, data, growth, and capacity calculation sheet"],
              ["4. Architecture", "C4 Context and Container diagrams"],
              ["5. Detailed Design", "API contracts, database schema, and sequence flows"],
              ["6. Risk Analysis", "Failure modes, security threat model, and SPOF audit"],
              ["7. Decision Making", "Architecture Decision Records (ADRs) and trade-off comparison"],
              ["8. Validation", "Benchmark results, load test charts, and chaos test reports"],
              ["9. Review", "Final signed-off architecture document with production SLOs"],
            ],
          },
        ],
        architectDecision:
          "During technical architecture reviews, invite both senior developers and site reliability engineers (SREs). Developers validate maintainability and domain modeling; SREs challenge operational failure recovery, metrics visibility, and deployment risks.",
        interviewQuestions: [
          {
            q: "How should you structure the first 5 minutes of a system design interview?",
            a: "1. Clarify core use cases (ask clarifying questions). 2. Establish boundaries (what is explicitly OUT of scope). 3. Define scale (DAU, peak RPS, read/write ratio). 4. Agree on key non-functional requirements (latency, availability, consistency).",
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
          currentModuleId="intro"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor(!showAiTutor)}
          aiTutorLabel="Ask Nova System Architect"
        />

        {/* AI Tutor Drawer (if toggled) */}
        {showAiTutor && (
          <div className="mb-8">
            <LearningRo currentTopic="system-design-intro" />
          </div>
        )}

        {/* Course & Module Hero Banner */}
        <div className="mb-8 rounded-3xl border border-[#e7e3da] bg-white/85 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-orange-50/90 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#ea580c] mb-3">
                <Network size={13} className="text-[#f97316]" />
                <span>System Design Masterclass · Module 1</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#18181b]">
                Introduction to System Design and Architectural Thinking
              </h1>
              <p className="mt-2.5 max-w-3xl text-sm sm:text-base leading-relaxed text-stone-600">
                System design is the process of deciding how software components, data, infrastructure, and communication protocols work together to satisfy requirements and constraints. University concepts + engineering principles + practical labs + architecture reviews.
              </p>
            </div>

            {/* Quick Metadata Stats */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] px-4 py-2.5 text-center">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-400">Duration</span>
                <span className="text-xs sm:text-sm font-bold text-stone-800">2 Weeks (~30 hrs)</span>
              </div>
              <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] px-4 py-2.5 text-center">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-400">Level</span>
                <span className="text-xs sm:text-sm font-bold text-stone-800">Foundations → Mid</span>
              </div>
              <div className="rounded-2xl border border-orange-200 bg-orange-50/80 px-4 py-2.5 text-center">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-orange-600">Framework</span>
                <span className="text-xs sm:text-sm font-bold text-orange-800">MIT / CMU / C4 / SRE</span>
              </div>
            </div>
          </div>

          {/* Module Outcomes Strip */}
          <div className="mt-6 pt-6 border-t border-[#e7e3da]/80 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start gap-2.5 text-xs text-stone-600">
              <CheckCircle2 size={16} className="text-[#f97316] shrink-0 mt-0.5" />
              <span>Translate product goals into testable non-functional requirements</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-stone-600">
              <CheckCircle2 size={16} className="text-[#f97316] shrink-0 mt-0.5" />
              <span>Evaluate monoliths, modular monoliths, and microservices</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-stone-600">
              <CheckCircle2 size={16} className="text-[#f97316] shrink-0 mt-0.5" />
              <span>Estimate traffic, storage, and Little's Law concurrency</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-stone-600">
              <CheckCircle2 size={16} className="text-[#f97316] shrink-0 mt-0.5" />
              <span>Draw C4 diagrams and author Architecture Decision Records (ADRs)</span>
            </div>
          </div>
        </div>

        {/* Global Tab Navigation */}
        <div className="mb-6 flex items-center gap-2 border-b border-[#e7e3da] pb-3 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x">
          {[
            { id: "theory", label: "📖 Theory & Lessons", icon: BookOpen },
            { id: "interactive", label: "⚡ Architecture Calculators", icon: Sliders },
            { id: "qa", label: "❓ Interview Q&A", icon: HelpCircle },
            { id: "assessment", label: "📝 Knowledge Check (5 Questions)", icon: CheckSquare },
            { id: "lab", label: "🏗️ Practical Lab & Project", icon: Terminal },
            { id: "reading", label: "📚 University Reading List", icon: ExternalLink },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`shrink-0 whitespace-nowrap flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition shadow-xs cursor-pointer ${
                  isActive
                    ? "bg-[#f97316] text-white shadow-orange-500/20"
                    : "bg-white/80 text-stone-700 hover:border-orange-300 hover:text-[#f97316] border border-[#e7e3da]"
                }`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: THEORY & LESSONS */}
        {activeTab === "theory" && (
          <div className="grid gap-8 lg:grid-cols-12 items-start">
            {/* Sidebar Topic Navigator */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              <div className="mb-2 px-1 text-xs font-bold uppercase tracking-wider text-stone-400">
                Module 1 Curriculum (10 Lessons)
              </div>
              <div className="space-y-1.5 max-h-[calc(100vh-280px)] overflow-y-auto pr-1">
                {systemDesignTopics.map((topic) => {
                  const Icon = topic.icon;
                  const isSelected = topic.id === activeTopic.id;
                  return (
                    <button
                      key={topic.id}
                      onClick={() => setSelectedTopic(topic.id)}
                      className={`w-full flex items-center gap-3 rounded-2xl p-3.5 text-left text-xs sm:text-sm font-semibold transition border cursor-pointer ${
                        isSelected
                          ? "border-[#f97316] bg-orange-50/90 text-orange-950 shadow-xs"
                          : "border-[#e7e3da] bg-white/70 text-stone-700 hover:border-orange-200 hover:bg-white"
                      }`}
                    >
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${
                          isSelected
                            ? "bg-[#f97316] text-white"
                            : "bg-stone-100 text-stone-600"
                        }`}
                      >
                        <Icon size={16} />
                      </div>
                      <div className="flex-1 truncate">
                        <span className="block font-bold truncate">{topic.shortTitle}</span>
                        <span className="block text-[11px] text-stone-500 font-normal truncate">
                          {topic.category}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Main Lesson Content Area */}
            <div className="lg:col-span-8 space-y-6">
              <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
                {/* Lesson Header */}
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-4">
                  <div>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                      {activeTopic.category}
                    </span>
                    <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#18181b]">
                      {activeTopic.title}
                    </h2>
                  </div>
                </div>

                {/* Summary Callout */}
                <div className="mb-6 rounded-2xl border border-orange-200/90 bg-orange-50/80 p-4 text-xs sm:text-sm leading-relaxed text-orange-950 font-medium">
                  <div className="flex items-center gap-2 font-bold text-orange-800 mb-1">
                    <Lightbulb size={16} className="text-[#f97316]" />
                    <span>Architectural Core Insight</span>
                  </div>
                  {activeTopic.summary}
                </div>

                {/* Visual Architecture Diagram Component */}
                {activeTopic.diagramType && (
                  <div className="mb-8">
                    <VisualDiagramComponent
                      type={activeTopic.diagramType}
                      topic={activeTopic}
                      setActiveTab={setActiveTab}
                    />
                  </div>
                )}

                {/* Theory Paragraphs */}
                <div className="space-y-4 text-xs sm:text-sm sm:leading-relaxed text-stone-700">
                  {activeTopic.theory.map((para, i) => (
                    <p key={i} className="leading-relaxed">
                      {para}
                    </p>
                  ))}
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
                                    <td key={ci} className={`p-3 ${ci === 0 ? "font-bold text-stone-900" : "text-stone-700"}`}>
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

                {/* Practical Exercise if any */}
                {activeTopic.practicalExercise && (
                  <div className="mt-6 rounded-2xl border border-stone-200 bg-stone-50 p-5 text-xs sm:text-sm">
                    <span className="font-bold text-stone-900 uppercase tracking-wider text-[11px] block mb-1">
                      🛠️ Practical Exercise
                    </span>
                    <p className="text-stone-700 leading-relaxed">{activeTopic.practicalExercise}</p>
                  </div>
                )}

                {/* Key Takeaways */}
                <div className="mt-8 rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-5">
                  <h3 className="font-bold text-stone-900 text-sm mb-3 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#f97316]" />
                    <span>Key Architectural Takeaways</span>
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                    {activeTopic.keyPoints.map((kp, ki) => (
                      <li key={ki} className="flex items-start gap-2">
                        <span className="text-[#f97316] font-bold">•</span>
                        <span>{kp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architect Decision Box */}
                {activeTopic.architectDecision && (
                  <div className="mt-6 rounded-2xl border border-stone-800 bg-stone-900 p-5 text-white">
                    <div className="flex items-center gap-2 text-orange-400 font-bold text-xs uppercase tracking-wider mb-2">
                      <Sparkles size={15} />
                      <span>Production Architect Decision</span>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-mono">
                      "{activeTopic.architectDecision}"
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: INTERACTIVE CALCULATORS & SIMULATORS */}
        {activeTab === "interactive" && (
          <div className="space-y-8">
            {/* Calculator 1: Capacity & Workload Estimation */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
              <div className="mb-6">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                  Interactive Sizing Tool
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                  Workload Analysis & Capacity Estimation Simulator
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Experiment with Daily Active Users (DAU), request frequencies, peak multipliers, and payload sizes to generate real-time requests per second and storage forecasts.
                </p>
              </div>

              {/* Sliders Grid */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                {/* DAU */}
                <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-4">
                  <div className="flex justify-between items-center text-xs font-bold text-stone-700 mb-2">
                    <span>Daily Active Users (DAU)</span>
                    <span className="text-orange-600 font-mono">{calcDau.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="2000000"
                    step="10000"
                    value={calcDau}
                    onChange={(e) => setCalcDau(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 mt-1">
                    <span>10k</span>
                    <span>1M</span>
                    <span>2M</span>
                  </div>
                </div>

                {/* Requests per user */}
                <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-4">
                  <div className="flex justify-between items-center text-xs font-bold text-stone-700 mb-2">
                    <span>Requests / User / Day</span>
                    <span className="text-orange-600 font-mono">{calcRequestsPerUser}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="200"
                    step="5"
                    value={calcRequestsPerUser}
                    onChange={(e) => setCalcRequestsPerUser(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 mt-1">
                    <span>10</span>
                    <span>100</span>
                    <span>200</span>
                  </div>
                </div>

                {/* Peak Multiplier */}
                <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-4">
                  <div className="flex justify-between items-center text-xs font-bold text-stone-700 mb-2">
                    <span>Peak-to-Average Multiplier</span>
                    <span className="text-orange-600 font-mono">{calcPeakMultiplier}×</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="10"
                    step="1"
                    value={calcPeakMultiplier}
                    onChange={(e) => setCalcPeakMultiplier(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 mt-1">
                    <span>2×</span>
                    <span>5×</span>
                    <span>10×</span>
                  </div>
                </div>

                {/* Payload KB */}
                <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-4">
                  <div className="flex justify-between items-center text-xs font-bold text-stone-700 mb-2">
                    <span>Avg Payload Size</span>
                    <span className="text-orange-600 font-mono">{calcPayloadKb} KB</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    step="1"
                    value={calcPayloadKb}
                    onChange={(e) => setCalcPayloadKb(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 mt-1">
                    <span>1 KB</span>
                    <span>25 KB</span>
                    <span>50 KB</span>
                  </div>
                </div>
              </div>

              {/* Calculated Outputs Dashboard */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                <div className="rounded-2xl border border-stone-200 bg-white p-4 text-center shadow-xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">
                    Daily Total Requests
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-stone-900 font-mono mt-1 block">
                    {(totalDailyRequests / 1000000).toFixed(1)}M
                  </span>
                  <span className="text-[11px] text-stone-500">{totalDailyRequests.toLocaleString()} reqs</span>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-4 text-center shadow-xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">
                    Average RPS
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-stone-900 font-mono mt-1 block">
                    {averageRps}
                  </span>
                  <span className="text-[11px] text-stone-500">req / sec (86.4k sec/day)</span>
                </div>

                <div className="rounded-2xl border border-orange-300 bg-orange-50/80 p-4 text-center shadow-xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 block">
                    Target Peak RPS
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-[#ea580c] font-mono mt-1 block">
                    {peakRps}
                  </span>
                  <span className="text-[11px] text-orange-800 font-medium">Design target ({calcPeakMultiplier}× burst)</span>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-4 text-center shadow-xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">
                    Network Egress / Day
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-stone-900 font-mono mt-1 block">
                    {dailyTransferGb} GB
                  </span>
                  <span className="text-[11px] text-stone-500">{(dailyTransferGb * 30).toFixed(0)} GB / month</span>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-4 text-center shadow-xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">
                    Annual Logs (1KB/req)
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-stone-900 font-mono mt-1 block">
                    {annualLogStorageTb} TB
                  </span>
                  <span className="text-[11px] text-stone-500">Raw retention per year</span>
                </div>
              </div>
            </div>

            {/* Calculator 2: Little's Law Concurrency Simulator */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
              <div className="mb-6">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                  Queueing Theory (MIT 6.5840)
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                  Little's Law Concurrency Simulator: <span className="font-mono">L = λ × W</span>
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Calculate how many requests are in progress simultaneously based on arrival rate (<span className="font-mono">λ</span>) and service latency (<span className="font-mono">W</span>).
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 mb-8">
                <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-5">
                  <div className="flex justify-between items-center text-xs font-bold text-stone-700 mb-2">
                    <span>Arrival Rate (λ in Requests/sec)</span>
                    <span className="text-orange-600 font-mono">{littleRps} RPS</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="5000"
                    step="50"
                    value={littleRps}
                    onChange={(e) => setLittleRps(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 mt-1">
                    <span>50 RPS</span>
                    <span>2,500 RPS</span>
                    <span>5,000 RPS</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-5">
                  <div className="flex justify-between items-center text-xs font-bold text-stone-700 mb-2">
                    <span>Average Service Latency (W in milliseconds)</span>
                    <span className="text-orange-600 font-mono">{littleLatencyMs} ms</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    step="10"
                    value={littleLatencyMs}
                    onChange={(e) => setLittleLatencyMs(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 mt-1">
                    <span>10 ms</span>
                    <span>500 ms</span>
                    <span>1,000 ms</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-stone-900 bg-stone-900 p-6 text-white flex flex-wrap items-center justify-between gap-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400">
                    Concurrency Formula
                  </span>
                  <div className="text-xl sm:text-2xl font-black font-mono mt-1">
                    L = {littleRps} RPS × {(littleLatencyMs / 1000).toFixed(3)}s ={" "}
                    <span className="text-[#f97316]">{itemsInFlight} Concurrent Requests</span>
                  </div>
                  <p className="text-xs text-stone-400 mt-1">
                    Your web workers, database connection pools, and thread queues must support at least{" "}
                    <span className="text-white font-bold">{itemsInFlight}</span> active concurrent contexts at any given moment.
                  </p>
                </div>

                <div className="rounded-xl border border-stone-700 bg-stone-800/80 px-5 py-3 text-center">
                  <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider block">
                    Pool Pressure
                  </span>
                  <span
                    className={`text-lg font-bold font-mono ${
                      itemsInFlight < 100
                        ? "text-emerald-400"
                        : itemsInFlight < 500
                        ? "text-amber-400"
                        : "text-rose-400"
                    }`}
                  >
                    {itemsInFlight < 100 ? "Low / Single Server" : itemsInFlight < 500 ? "Moderate / Multi-Worker" : "Heavy / Clustered Scale"}
                  </span>
                </div>
              </div>
            </div>

            {/* Calculator 3: Availability & Downtime "Nines" */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
              <div className="mb-6">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                  SRE Operational Quality
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                  Availability "Nines" & Downtime Budget Calculator
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Select a Service Level Objective (SLO) to understand allowed downtime windows and required automated recovery architecture.
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5 mb-6">
                {["99.0", "99.9", "99.99", "99.999"].map((n) => (
                  <button
                    key={n}
                    onClick={() => setNinesSelection(n)}
                    className={`rounded-xl px-4 py-2 text-xs font-mono font-bold transition border cursor-pointer ${
                      ninesSelection === n
                        ? "bg-[#f97316] text-white border-[#f97316]"
                        : "bg-[#faf8f4] text-stone-700 border-[#e7e3da] hover:border-orange-300"
                    }`}
                  >
                    {n}% Availability
                  </button>
                ))}
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl border border-stone-200 bg-white p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">Allowed / Year</span>
                  <span className="text-lg font-black text-stone-900 font-mono mt-1 block">
                    {ninesSelection === "99.0"
                      ? "3 days, 15 hours"
                      : ninesSelection === "99.9"
                      ? "8 hrs, 46 mins"
                      : ninesSelection === "99.99"
                      ? "52 mins, 34 secs"
                      : "5 mins, 15 secs"}
                  </span>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-white p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">Allowed / Month</span>
                  <span className="text-lg font-black text-stone-900 font-mono mt-1 block">
                    {ninesSelection === "99.0"
                      ? "7 hrs, 18 mins"
                      : ninesSelection === "99.9"
                      ? "43 mins, 48 secs"
                      : ninesSelection === "99.99"
                      ? "4 mins, 23 secs"
                      : "26.3 seconds"}
                  </span>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-white p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">Allowed / Week</span>
                  <span className="text-lg font-black text-stone-900 font-mono mt-1 block">
                    {ninesSelection === "99.0"
                      ? "1 hr, 40 mins"
                      : ninesSelection === "99.9"
                      ? "10 mins, 5 secs"
                      : ninesSelection === "99.99"
                      ? "1 minute, 1 sec"
                      : "6.05 seconds"}
                  </span>
                </div>
                <div className="rounded-2xl border border-orange-200 bg-orange-50/70 p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 block">Architectural Bar</span>
                  <span className="text-xs font-bold text-orange-950 mt-1 block leading-tight">
                    {ninesSelection === "99.0"
                      ? "Single instance with manual restart"
                      : ninesSelection === "99.9"
                      ? "Multi-AZ compute + DB automated failover"
                      : ninesSelection === "99.99"
                      ? "Stateless cluster + multi-AZ zero-downtime blue/green"
                      : "Multi-region active-active + sub-second health routing"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: INTERVIEW Q&A */}
        {activeTab === "qa" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
            <div className="mb-6 border-b border-[#e7e3da] pb-4">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                Senior Engineering Preparation
              </span>
              <h2 className="text-2xl font-bold text-[#18181b] mt-1">
                System Design Interview Questions & Rigorous Answers
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Frequently asked architectural questions with production-tested rationales.
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

        {/* TAB 4: ASSESSMENT / KNOWLEDGE CHECK (5 Questions from user prompt) */}
        {activeTab === "assessment" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
            <div className="mb-6 border-b border-[#e7e3da] pb-4 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                  Interactive Knowledge Check
                </span>
                <h2 className="text-2xl font-bold text-[#18181b] mt-1">
                  Module 1 Assessment: 5 Architectural Questions
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Test your understanding before advancing to Module 2. Instant grading and explanations.
                </p>
              </div>

              {submittedQuiz && (
                <div className="rounded-2xl border border-orange-300 bg-orange-50 px-5 py-3 text-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 block">
                    Your Score
                  </span>
                  <span className="text-2xl font-black text-[#ea580c] font-mono">
                    {quizScore} / {ASSESSMENT_QUESTIONS.length}
                  </span>
                </div>
              )}
            </div>

            {/* Questions List */}
            <div className="space-y-6">
              {ASSESSMENT_QUESTIONS.map((q) => {
                const selected = userAnswers[q.id];
                const isCorrect = submittedQuiz && selected === q.correct;

                return (
                  <div
                    key={q.id}
                    className={`rounded-2xl border p-5 transition ${
                      submittedQuiz
                        ? isCorrect
                          ? "border-emerald-300 bg-emerald-50/40"
                          : "border-rose-300 bg-rose-50/40"
                        : "border-[#e7e3da] bg-[#faf8f4]"
                    }`}
                  >
                    <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-3">
                      {q.question}
                    </h3>

                    <div className="space-y-2">
                      {q.options.map((opt, optIdx) => {
                        const isChosen = selected === optIdx;
                        let optionStyle = "border-[#e7e3da] bg-white text-stone-700 hover:border-orange-300";

                        if (submittedQuiz) {
                          if (optIdx === q.correct) {
                            optionStyle = "border-emerald-500 bg-emerald-100 text-emerald-900 font-bold";
                          } else if (isChosen && optIdx !== q.correct) {
                            optionStyle = "border-rose-500 bg-rose-100 text-rose-900 line-through";
                          }
                        } else if (isChosen) {
                          optionStyle = "border-[#f97316] bg-orange-50 text-orange-950 font-semibold shadow-xs";
                        }

                        return (
                          <button
                            key={optIdx}
                            type="button"
                            onClick={() => handleSelectOption(q.id, optIdx)}
                            className={`w-full flex items-center justify-between rounded-xl border px-4 py-3 text-left text-xs sm:text-sm transition cursor-pointer ${optionStyle}`}
                          >
                            <span>{opt}</span>
                            <div
                              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                                isChosen
                                  ? "border-[#f97316] bg-[#f97316] text-white"
                                  : "border-stone-300 bg-white"
                              }`}
                            >
                              {isChosen && <div className="h-2 w-2 rounded-full bg-white" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Explanation Reveal */}
                    {submittedQuiz && (
                      <div className="mt-4 pt-3 border-t border-stone-200/80 text-xs sm:text-sm">
                        <span className="font-bold text-stone-900 block mb-1">
                          {isCorrect ? "✅ Correct!" : "❌ Incorrect."}
                        </span>
                        <p className="text-stone-600 leading-relaxed">{q.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quiz Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {!submittedQuiz ? (
                <button
                  type="button"
                  onClick={handleCheckQuiz}
                  className="flex items-center gap-2 rounded-2xl bg-[#f97316] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-[#ea580c] transition active:scale-95 cursor-pointer"
                >
                  <CheckSquare size={16} />
                  <span>Check my answers</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleResetQuiz}
                  className="flex items-center gap-2 rounded-2xl border border-[#e7e3da] bg-white px-6 py-3 text-xs sm:text-sm font-bold text-stone-700 shadow-xs hover:border-orange-300 hover:text-[#f97316] transition active:scale-95 cursor-pointer"
                >
                  <RefreshCw size={16} />
                  <span>Retake Quiz</span>
                </button>
              )}
            </div>
          </div>
        )}

        {/* TAB 5: PRACTICAL LAB & PROJECT DELIVERABLES */}
        {activeTab === "lab" && (
          <div className="space-y-8">
            {/* Practical Lab Section */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
              <div className="mb-6">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                  Hands-On Capstone Assignment
                </span>
                <h2 className="text-2xl font-bold text-[#18181b] mt-1">
                  Practical Lab — Design a Learning Platform
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Design a learning platform that can evolve from a small application into a production system without adding unnecessary complexity.
                </p>
              </div>

              {/* Lab Steps 1 to 4 */}
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-5">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-700 uppercase tracking-wider mb-2">
                    <CheckCircle2 size={16} className="text-[#f97316]" />
                    <span>Step 1. Define the Scope</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    Your system must support course browsing, lesson viewing, student progress tracking, assignment submission, and instructor content management. For version 1, assume a single modular application deployment and a relational database. Videos and heavy media files use object storage with a CDN for edge caching.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-5">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-700 uppercase tracking-wider mb-2">
                    <CheckCircle2 size={16} className="text-[#f97316]" />
                    <span>Step 2. Draw the Initial Architecture</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-3">
                    Map the primary interaction flow:
                  </p>
                  <div className="mb-4">
                    <LabArchitectureTopologyDiagram />
                  </div>
                  <div className="rounded-xl border border-stone-800 bg-stone-900 p-4 text-xs font-mono text-stone-300 leading-relaxed overflow-x-auto">
                    [Student / Instructor] → [Web Frontend] → [Backend Application] 
                    &nbsp;&nbsp;&nbsp;&nbsp;├── [Auth & Permissions]
                    &nbsp;&nbsp;&nbsp;&nbsp;├── [Course & Lesson Logic] ──→ [Relational Database]
                    &nbsp;&nbsp;&nbsp;&nbsp;├── [Assignment & Progress] ──→ [Object Storage (S3/GCS)]
                    &nbsp;&nbsp;&nbsp;&nbsp;└── [Background Job Queue] ──→ [Notification Worker]
                  </div>
                </div>

                {/* Step 3 */}
                <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-5">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-700 uppercase tracking-wider mb-2">
                    <CheckCircle2 size={16} className="text-[#f97316]" />
                    <span>Step 3. Analyze Architectural Risks</span>
                  </div>
                  <div className="overflow-x-auto mt-2">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-stone-100 font-semibold text-stone-700">
                        <tr>
                          <th className="p-2.5">Risk</th>
                          <th className="p-2.5">Question to Investigate</th>
                          <th className="p-2.5">Engineered Mitigation</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#e7e3da]">
                        <tr>
                          <td className="p-2.5 font-bold text-stone-900">Database Overload</td>
                          <td className="p-2.5 text-stone-600">Can the database sustain expected peak read workloads?</td>
                          <td className="p-2.5 text-stone-700">Add query result caching (Redis) and index lookup paths.</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-stone-900">Unauthorized Access</td>
                          <td className="p-2.5 text-stone-600">Can a student retrieve another student's private files or grades?</td>
                          <td className="p-2.5 text-stone-700">Enforce server-side authorization checks on all resource IDs.</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-stone-900">File Delivery</td>
                          <td className="p-2.5 text-stone-600">Are large video files passing through the backend API?</td>
                          <td className="p-2.5 text-stone-700">Use pre-signed S3 upload URLs and CloudFront/Cloud CDN.</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-stone-900">Notification Outage</td>
                          <td className="p-2.5 text-stone-600">Can a notification provider outage block an assignment?</td>
                          <td className="p-2.5 text-stone-700">Decouple notifications into an asynchronous queue with retries.</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-stone-900">Duplicate Submission</td>
                          <td className="p-2.5 text-stone-600">Can retrying a request create duplicate submission records?</td>
                          <td className="p-2.5 text-stone-700">Require client Idempotency-Key headers on submission routes.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-5">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-700 uppercase tracking-wider mb-2">
                    <CheckCircle2 size={16} className="text-[#f97316]" />
                    <span>Step 4. Validate Your Architecture</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    Build a small representative prototype and test a limited set of critical operations: opening a course, recording progress, and submitting an assignment. Measure latency, throughput, errors, database response time, and resource consumption. Introduce simulated slow dependencies or database partitions and record system behavior.
                  </p>
                </div>
              </div>
            </div>

            {/* Final Project Deliverables Portfolio */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
              <div className="mb-6">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                  Portfolio Evaluation
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                  Final Project Deliverables: Architecture Portfolio
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Before completing Module 1, prepare an architecture portfolio demonstrating not only what you designed, but why you designed it that way.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "1. Requirements Document",
                    desc: "Includes functional requirements, measurable non-functional targets (p95 latency, availability SLOs), constraints, and validated assumptions.",
                  },
                  {
                    title: "2. C4 Context & Container Diagrams",
                    desc: "Visual diagrams showing system boundaries, external dependencies, API contracts, and database responsibilities.",
                  },
                  {
                    title: "3. Workload Estimation Sheet",
                    desc: "Calculations of daily requests, average RPS, peak RPS, daily network transfer, and annual log storage growth.",
                  },
                  {
                    title: "4. Architecture Comparison Proposal",
                    desc: "Trade-off analysis comparing at least two viable architectural styles (e.g. modular monolith vs microservices).",
                  },
                  {
                    title: "5. Architecture Decision Record (ADR)",
                    desc: "Formal record detailing context, decision, trade-offs, and explicit criteria for when to revisit the choice.",
                  },
                  {
                    title: "6. Failure & Security Assessment",
                    desc: "Audit of Single Points of Failure (SPOFs), partial failure mitigations (idempotency, timeouts), and authorization threat modeling.",
                  },
                  {
                    title: "7. Prototype Benchmark Report",
                    desc: "Load test observations, measured p95 latency curves, and proposed architectural improvements.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-4 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-xs sm:text-sm text-stone-900 mb-1.5">{item.title}</h3>
                      <p className="text-xs text-stone-600 leading-relaxed">{item.desc}</p>
                    </div>
                    <span className="mt-3 text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600">
                      Deliverable #{idx + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: UNIVERSITY SYLLABUS & READING LIST */}
        {activeTab === "reading" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
            <div className="mb-6 border-b border-[#e7e3da] pb-4">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                Foundational Literature
              </span>
              <h2 className="text-2xl font-bold text-[#18181b] mt-1">
                University Syllabus & Industry Reading List
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Primary university courses, engineering frameworks, and books to study alongside Module 1.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  institution: "MIT (Massachusetts Institute of Technology)",
                  code: "6.5840 (formerly 6.824)",
                  title: "Distributed Systems",
                  focus: "Graduate-level foundations on distributed abstractions, fault tolerance, Raft consensus, replication, and consistency.",
                  linkText: "pdos.csail.mit.edu/6.5840",
                  href: "https://pdos.csail.mit.edu/6.5840/",
                },
                {
                  institution: "Carnegie Mellon University",
                  code: "15-440",
                  title: "Distributed Systems",
                  focus: "Concurrency, networking, RPC protocols, imperfect communication, security, and practical distributed debugging.",
                  linkText: "courseweb.sp.cs.cmu.edu/15-440",
                  href: "https://courseweb.sp.cs.cmu.edu/15-440/",
                },
                {
                  institution: "Simon Brown",
                  code: "C4 Model",
                  title: "Software Architecture Diagrams",
                  focus: "Standards for communicating software architecture across Context, Container, Component, and Code levels.",
                  linkText: "c4model.com",
                  href: "https://c4model.com/",
                },
                {
                  institution: "Amazon Web Services",
                  code: "AWS WAF",
                  title: "Well-Architected Framework",
                  focus: "Six pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability.",
                  linkText: "docs.aws.amazon.com/wellarchitected",
                  href: "https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html",
                },
                {
                  institution: "Google",
                  code: "Google SRE",
                  title: "Site Reliability Engineering",
                  focus: "Service Level Objectives (SLOs), Service Level Indicators (SLIs), error budgets, observability, and incident post-mortems.",
                  linkText: "sre.google/sre-book",
                  href: "https://sre.google/sre-book/",
                },
                {
                  institution: "Martin Kleppmann",
                  code: "O'Reilly",
                  title: "Designing Data-Intensive Applications",
                  focus: "The canonical reference for storage engines, B-trees vs LSM-trees, replication lag, partitioning, transactions, and stream processing.",
                  linkText: "dataintensive.net",
                  href: "https://dataintensive.net/",
                },
              ].map((res, idx) => (
                <a
                  key={idx}
                  href={res.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col justify-between rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-5 transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-bold text-stone-500 mb-1">
                      <span>{res.institution}</span>
                      <span className="font-mono text-orange-600">{res.code}</span>
                    </div>
                    <h3 className="font-bold text-stone-900 text-sm sm:text-base group-hover:text-[#f97316] transition-colors">
                      {res.title}
                    </h3>
                    <p className="mt-2 text-xs text-stone-600 leading-relaxed">{res.focus}</p>
                  </div>
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
                  Module 2: Requirements Engineering, Constraints, and Capacity Estimation
                </span>
                <span className="text-xs text-stone-600 block mt-0.5">
                  Translate fuzzy business expectations into precise SLOs, Little's Law queues, and N+1 resilient fleet sizing.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab("assessment")}
                  className="flex items-center gap-1.5 rounded-xl border border-orange-300 bg-white px-3.5 py-2 text-xs font-bold text-orange-700 hover:bg-orange-50 transition cursor-pointer"
                >
                  <span>Take Module 1 Quiz</span>
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/learning/system-design/requirements")}
                  className="flex items-center gap-1.5 rounded-xl bg-[#f97316] px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#ea580c] transition cursor-pointer"
                >
                  <span>Start Module 2</span>
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
