import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Layers,
  Network,
  Cpu,
  Database,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  Code,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Sparkles,
  GitBranch,
  Server,
  Zap,
  ShieldCheck,
  Activity,
  Sliders,
  HelpCircle,
  FolderTree,
  Scale,
  RefreshCw,
  Clock,
  Send,
  Boxes,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import {
  DeploymentVsCodeBoundariesDiagram,
  ModularMonolithHexagonalDiagram,
  DistributedMonolithAntiPatternDiagram,
  DddBoundedContextsDiagram,
  DataOwnershipOutboxDiagram,
  StranglerFigMigrationDiagram,
  VisualDiagramComponentModule4,
} from "./SystemDesignArchitectureDiagrams";

export default function SystemDesignArchitecture() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("lessons");
  const [activeLesson, setActiveLesson] = useState("4.1");
  const [expandedQa, setExpandedQa] = useState({});

  // ---------------------------------------------------------------------------
  // INTERACTIVE TOOL 1: WEIGHTED ARCHITECTURE SCORECARD SIMULATOR
  // ---------------------------------------------------------------------------
  const [weights, setWeights] = useState({
    maintainability: 20,
    deployment: 15,
    scaling: 15,
    reliability: 15,
    teamSpeed: 15,
    consistency: 10,
    costComplexity: 10,
  });

  const [preset, setPreset] = useState("balanced");

  const applyPreset = (presetKey) => {
    setPreset(presetKey);
    if (presetKey === "startup") {
      setWeights({
        maintainability: 15,
        deployment: 10,
        scaling: 10,
        reliability: 15,
        teamSpeed: 30,
        consistency: 10,
        costComplexity: 10,
      });
    } else if (presetKey === "enterprise") {
      setWeights({
        maintainability: 20,
        deployment: 25,
        scaling: 15,
        reliability: 15,
        teamSpeed: 10,
        consistency: 5,
        costComplexity: 10,
      });
    } else {
      setWeights({
        maintainability: 20,
        deployment: 15,
        scaling: 15,
        reliability: 15,
        teamSpeed: 15,
        consistency: 10,
        costComplexity: 10,
      });
    }
  };

  // Base raw scores out of 10 for each architecture
  const rawScores = {
    monolith: {
      maintainability: 5,
      deployment: 6,
      scaling: 5,
      reliability: 4,
      teamSpeed: 8,
      consistency: 10,
      costComplexity: 9,
    },
    modularMonolith: {
      maintainability: 9,
      deployment: 7,
      scaling: 7,
      reliability: 7,
      teamSpeed: 9,
      consistency: 9,
      costComplexity: 9,
    },
    microservices: {
      maintainability: 7,
      deployment: 10,
      scaling: 10,
      reliability: 8,
      teamSpeed: 6,
      consistency: 5,
      costComplexity: 4,
    },
  };

  const calculatedScores = useMemo(() => {
    const totalWeight = Object.values(weights).reduce((a, b) => a + b, 0) || 100;
    const calc = (arch) => {
      let sum = 0;
      Object.keys(weights).forEach((k) => {
        sum += (weights[k] / totalWeight) * rawScores[arch][k] * 10;
      });
      return Math.round(sum);
    };
    return {
      monolith: calc("monolith"),
      modularMonolith: calc("modularMonolith"),
      microservices: calc("microservices"),
    };
  }, [weights]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE TOOL 2: LATENCY & COUPLING PENALTY SIMULATOR
  // ---------------------------------------------------------------------------
  const [numHops, setNumHops] = useState(4);
  const [hopLatency, setHopLatency] = useState(15);
  const [failureRatePerHop, setFailureRatePerHop] = useState(0.5); // %

  const latencyResults = useMemo(() => {
    // In-process modular monolith: memory call is ~0.001 ms, total request ~25ms
    const monolithTime = 25; // ms
    // Microservice chained: serialization (1.5ms per hop) + network RTT + app logic
    const serializationPerHop = 2.5; // ms
    const microserviceNetworkTime = numHops * (hopLatency + serializationPerHop);
    const totalMicroserviceLatency = monolithTime + microserviceNetworkTime;

    // Cumulative reliability calculation: (1 - p)^n
    const pSuccessPerHop = 1 - failureRatePerHop / 100;
    const compoundSuccessRate = Math.pow(pSuccessPerHop, numHops) * 100;
    const compoundFailureRate = 100 - compoundSuccessRate;

    return {
      monolithTime,
      totalMicroserviceLatency: Math.round(totalMicroserviceLatency),
      latencyIncreasePct: Math.round(((totalMicroserviceLatency - monolithTime) / monolithTime) * 100),
      compoundFailureRate: compoundFailureRate.toFixed(2),
    };
  }, [numHops, hopLatency, failureRatePerHop]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE TOOL 3: STRANGLER FIG TRAFFIC SIMULATOR
  // ---------------------------------------------------------------------------
  const [migratedTrafficPct, setMigratedTrafficPct] = useState(35);
  const [simulatedErrorRate, setSimulatedErrorRate] = useState(0.4);

  // ---------------------------------------------------------------------------
  // QUIZ STATE (8 QUESTIONS VERBATIM)
  // ---------------------------------------------------------------------------
  const quizQuestions = [
    {
      id: 1,
      question: "1. What defines a monolithic backend most directly?",
      options: [
        "It must run on one physical server",
        "It is deployed as a single application unit",
        "It cannot contain internal modules",
      ],
      correct: 1,
      explanation:
        "A monolith is defined strictly by its deployment unit: it is packaged and deployed as a single application unit. It can (and should) have internal modular boundaries, and it can run scaled horizontally across hundreds of servers behind a load balancer.",
    },
    {
      id: 2,
      question: "2. Which statement best describes a modular monolith?",
      options: [
        "One deployable application with explicit internal module boundaries",
        "A collection of services that always communicate over a network",
        "An application without a database",
      ],
      correct: 0,
      explanation:
        "A modular monolith is a single deployable application that enforces explicit internal module boundaries, clear public interfaces, and logical data ownership without incurring distributed network overhead.",
    },
    {
      id: 3,
      question: "3. What is high cohesion?",
      options: [
        "Every module depends on every other module",
        "Related responsibilities are grouped together within a module",
        "All modules write directly to the same database tables",
      ],
      correct: 1,
      explanation:
        "High cohesion means elements that belong together logically and change together for the same business reasons are grouped within the same module boundary.",
    },
    {
      id: 4,
      question: "4. What is a bounded context?",
      options: [
        "A fixed number of services deployed together",
        "A boundary within which a particular domain model and vocabulary apply",
        "A type of database index",
      ],
      correct: 1,
      explanation:
        "In Domain-Driven Design (DDD), a bounded context is the linguistic and conceptual boundary within which a particular domain model and its ubiquitous language hold true unambiguously.",
    },
    {
      id: 5,
      question: "5. What is a distributed monolith?",
      options: [
        "A well-isolated service architecture with independent releases",
        "Several deployments with tight dependencies that force coordinated changes or cause cascading failures",
        "A monolith replicated behind a load balancer",
      ],
      correct: 1,
      explanation:
        "A distributed monolith possesses the operational distribution and complexity of microservices (network latencies, partial failures) combined with the tight coupling of a monolith (shared database schemas, coordinated release trains).",
    },
    {
      id: 6,
      question: "6. Which signal most strongly supports creating an independent service?",
      options: [
        "A desire to use a fashionable framework",
        "A requirement for a capability to scale and deploy independently, supported by clear boundaries",
        "A preference for more repositories",
      ],
      correct: 1,
      explanation:
        "Valid justification requires distinct operational needs: different hardware/scaling characteristics, independent release schedules, or distinct fault-isolation requirements, underpinned by well-defined domain boundaries.",
    },
    {
      id: 7,
      question: "7. Why can multiple services modifying the same internal database tables be problematic?",
      options: [
        "It necessarily makes all SQL queries slow",
        "It creates unclear data ownership and couples services to each other's schemas",
        "It prevents the use of HTTP",
      ],
      correct: 1,
      explanation:
        "Shared database access bypasses service boundaries, couples independent services to internal schema implementations, causes locking contention, and destroys autonomous deployability.",
    },
    {
      id: 8,
      question: "8. What is the purpose of the Strangler Fig pattern?",
      options: [
        "Replace an entire system in one high-risk rewrite",
        "Incrementally replace selected functionality while the old and new systems coexist",
        "Eliminate all API contracts",
      ],
      correct: 1,
      explanation:
        "The Strangler Fig pattern replaces an existing legacy system gradually by placing an intercepting proxy in front and routing specific capabilities to new implementations while both run concurrently.",
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const handleSelectAnswer = (qId, optionIdx) => {
    if (quizSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateScore = () => {
    let correctCount = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) {
        correctCount += 1;
      }
    });
    return correctCount;
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
  };

  // ---------------------------------------------------------------------------
  // SENIOR SYSTEMS ENGINEERING Q&A DATA
  // ---------------------------------------------------------------------------
  const qaScenarios = [
    {
      id: "qa-1",
      title: "How do you decide between a Modular Monolith and Microservices for a new product?",
      context: "A startup is launching an AI-powered technical learning platform expecting 50,000 users in Year 1.",
      answer:
        "Default to a Modular Monolith. When domain boundaries are still evolving, refactoring in-memory code across packages is fast and safe. If you premature decompose into microservices, wrong boundaries require refactoring distributed network contracts, data migrations, and dual deployments. Fowler's 'Monolith First' principle applies: start modular, enforce strict interfaces, and only extract when independent scaling or autonomous team boundaries demand it.",
    },
    {
      id: "qa-2",
      title: "What is the single most common cause of the 'Distributed Monolith' disaster?",
      context: "A team split their backend into 8 Docker containers but deploys all 8 every Tuesday together.",
      answer:
        "The shared database anti-pattern. When multiple microservices connect to the same PostgreSQL or MySQL instance and execute SQL joins across each other's tables, they are not independent services. A schema change by Service A breaks Service B at runtime. True microservices require Database-per-Service: private data stores accessible only via the service's published API or asynchronous events.",
    },
    {
      id: "qa-3",
      title: "How do you maintain data consistency across services without distributed 2PC locking?",
      context: "A student pays for a subscription and enrolls in a course. Billing Service and Course Service are separate.",
      answer:
        "Avoid Two-Phase Commit (2PC) because it locks database rows across network hops, causing severe latency and availability bottlenecks. Instead, use the Saga Pattern with Eventual Consistency and the Transactional Outbox. Billing commits the charge and writes a 'PaymentSucceeded' event to its local outbox table atomically. A CDC or relay daemon publishes the event to Kafka. Course Service consumes the event idempotently and provisions the enrollment. If course provisioning fails permanently, a compensating event is dispatched to refund the charge.",
    },
    {
      id: "qa-4",
      title: "How does Conway's Law govern microservice architecture success?",
      context: "'Organizations which design systems are constrained to produce designs which are copies of the communication structures of these organizations.'",
      answer:
        "Microservices are fundamentally an organizational scaling pattern, not just a technical one. A team of 5 engineers running 20 microservices experiences immense operational friction because the communication overhead exceeds the cognitive boundary benefits. Conversely, an organization of 200 engineers across 15 autonomous feature teams needs service boundaries to prevent code merge conflicts and deployment bottlenecks. Align service boundaries with cross-functional two-pizza teams.",
    },
    {
      id: "qa-5",
      title: "How do you safely extract a capability from a live monolith without downtime?",
      context: "PrepSpaces needs to extract its CPU-heavy AI Interview Service from the main monolith.",
      answer:
        "Execute the 5-stage Strangler Fig pattern: 1) Refactor the interview code inside the monolith behind a clean TypeScript/Java interface facade. 2) Stand up the new AI Interview service with its own database. 3) Configure an API Gateway/Reverse Proxy to intercept '/api/interviews' routes. 4) Mirror traffic or canary route 5% of traffic to the new service while monitoring error budgets and database sync. 5) Gradually increase to 100%, deprecate the legacy monolithic path, and delete dead code.",
    },
    {
      id: "qa-6",
      title: "What are Architectural Fitness Functions, and how do they enforce modular boundaries?",
      context: "Preventing developers from importing internal classes across module boundaries over time.",
      answer:
        "Fitness functions are automated tests that fail in CI/CD if architectural integrity is violated. In Java, ArchUnit asserts that 'classes in package `course.domain` cannot access classes in `assessment.internal`'. In TypeScript/Node.js, ESLint boundary rules (`import/no-restricted-paths`) or dependency-cruiser prevent illegal cross-module imports. This guarantees that a modular monolith remains modular over years of fast-paced development.",
    },
  ];

  // ---------------------------------------------------------------------------
  // 10 LESSONS COMPREHENSIVE CURRICULUM
  // ---------------------------------------------------------------------------
  const lessons = [
    {
      id: "4.1",
      week: "Week 1",
      title: "Lesson 4.1 · What is an architectural style?",
      duration: "3 hours",
      summary:
        "Understand what an architectural style is, how software components and connectors form a system topology, and the vital difference between deployment boundaries and code boundaries.",
      diagram: "deployment-vs-code",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            An <strong>architectural style</strong> is a named collection of principles, structural patterns, and constraints
            that shape the overall topology of a software system. It determines how components are organized, how they communicate,
            where state is maintained, and how the system responds to change, scale, and operational failure.
          </p>

          <div className="rounded-xl border border-stone-200 bg-white p-4">
            <h5 className="font-bold text-stone-900 text-sm mb-2">Core Architectural Dimensions</h5>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-lg bg-orange-50/60 border border-orange-200">
                <span className="font-bold text-orange-900 block">1. Components</span>
                <span className="text-xs text-stone-600 mt-1 block">
                  The computational units or data stores that process, transform, and persist business logic (e.g. CourseCatalog, QuizEngine).
                </span>
              </div>
              <div className="p-3 rounded-lg bg-amber-50/60 border border-amber-200">
                <span className="font-bold text-amber-900 block">2. Connectors</span>
                <span className="text-xs text-stone-600 mt-1 block">
                  The mechanisms that mediate communication and data transfer between components (in-memory calls, REST over HTTP, gRPC streams, message queues).
                </span>
              </div>
              <div className="p-3 rounded-lg bg-stone-100 border border-stone-300">
                <span className="font-bold text-stone-900 block">3. Constraints</span>
                <span className="text-xs text-stone-600 mt-1 block">
                  Rules and limitations imposed on component interactions (e.g. &quot;Module A cannot directly query Module B&apos;s database tables&quot;).
                </span>
              </div>
            </div>
          </div>

          <p>
            A critical distinction in system design is the difference between <strong>Code Boundaries</strong> and <strong>Deployment Boundaries</strong>.
            Just because software lives in a single deployable artifact does not mean it must be spaghetti code.
            Conversely, splitting code across 20 containers does not guarantee modularity if those containers are tightly coupled via shared schemas.
          </p>
        </div>
      ),
    },
    {
      id: "4.2",
      week: "Week 1",
      title: "Lesson 4.2 · Monolithic architecture",
      duration: "3.5 hours",
      summary:
        "A deep examination of monolithic systems: why modern engineering recognizes their massive latency, ACID consistency, and operational simplicity benefits, along with their genuine scalability limits.",
      diagram: "deployment-vs-code",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            A <strong>monolith</strong> is an architectural style where the entire business application is packaged, built,
            and deployed as a <em>single runtime unit</em> (such as a single JAR, a Node.js process, or a Go binary).
          </p>

          <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-4">
            <h5 className="font-bold text-stone-900 text-sm mb-2">Common Misconceptions vs Reality</h5>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-lg bg-white border border-stone-200">
                <span className="text-rose-600 font-bold">Myth:</span> &quot;Monoliths cannot scale to handle high traffic.&quot;
                <br />
                <span className="text-emerald-700 font-bold">Reality:</span> Monoliths scale horizontally with exceptional efficiency.
                You can run 50 identical stateless monolith containers behind an AWS Application Load Balancer or Cloudflare, handling millions of requests per minute.
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-stone-200">
                <span className="text-rose-600 font-bold">Myth:</span> &quot;Monoliths are legacy, obsolete architecture.&quot;
                <br />
                <span className="text-emerald-700 font-bold">Reality:</span> Companies like Shopify, GitHub, Basecamp, and Stack Overflow
                run multi-billion dollar businesses on well-architected monolithic backends because in-process function execution is orders of magnitude faster and simpler than network RPCs.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/40">
              <span className="font-bold text-emerald-900 block mb-1">Genuine Architectural Advantages:</span>
              <ul className="list-disc list-inside space-y-1 text-stone-700">
                <li><strong>Sub-microsecond latency:</strong> Function calls execute in nanoseconds without JSON serialization or socket transit.</li>
                <li><strong>ACID Transactions:</strong> Multi-entity updates can be wrapped in a single database transaction (`BEGIN ... COMMIT`).</li>
                <li><strong>Unified Developer Experience:</strong> Run `npm run dev` or `docker compose up` to start the entire system locally in seconds.</li>
                <li><strong>Simplified Observability:</strong> Single stack trace contains the complete request lifecycle without distributed correlation IDs.</li>
              </ul>
            </div>
            <div className="p-3.5 rounded-xl border border-rose-200 bg-rose-50/40">
              <span className="font-bold text-rose-900 block mb-1">Genuine Scalability Constraints:</span>
              <ul className="list-disc list-inside space-y-1 text-stone-700">
                <li><strong>Blast Radius:</strong> An uncaught fatal exception or out-of-memory memory leak crashes the entire process for all features.</li>
                <li><strong>Deployment Coordination:</strong> 50 engineers merging PRs creates deployment pipeline queues and testing bottlenecks.</li>
                <li><strong>Resource Homogeneity:</strong> If the AI interview component needs 8GB GPU RAM, scaling the monolith scales GPU instances for everything.</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "4.3",
      week: "Week 1",
      title: "Lesson 4.3 · Modular architecture and the modular monolith",
      duration: "4 hours",
      summary:
        "How to design a production-grade Modular Monolith using Hexagonal Architecture (Ports and Adapters), strict encapsulation, domain invariants, and automated architectural linting.",
      diagram: "hexagonal-architecture",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            A <strong>Modular Monolith</strong> combines the deployment and operational simplicity of a monolith with the
            strict boundary discipline of microservices. It is built as a single deployable application, but internal packages
            strictly encapsulate their private logic behind explicit public facades and interfaces.
          </p>

          <div className="rounded-xl border border-orange-200 bg-orange-50/40 p-4">
            <h5 className="font-bold text-orange-950 text-sm mb-2">The Hexagonal Architecture Pattern (Ports & Adapters)</h5>
            <p className="text-xs text-stone-700 mb-3">
              Hexagonal architecture ensures the domain model is decoupled from frameworks, databases, and network transports.
            </p>
            <div className="rounded-lg bg-stone-900 p-3 text-[11px] font-mono text-emerald-400 overflow-x-auto">
{`// 1. Core Domain Port (Pure TypeScript - No DB or Express dependencies)
export interface CourseRepositoryPort {
  findById(courseId: string): Promise<Course | null>;
  save(course: Course): Promise<void>;
}

// 2. Application Use Case / Service
export class EnrollStudentUseCase {
  constructor(
    private readonly courseRepo: CourseRepositoryPort,
    private readonly progressNotifier: ProgressNotificationPort
  ) {}

  async execute(command: EnrollStudentCommand): Promise<EnrollmentResult> {
    const course = await this.courseRepo.findById(command.courseId);
    if (!course) throw new CourseNotFoundError(command.courseId);

    // Pure domain invariant check
    course.assertStudentCanEnroll(command.studentId);
    
    await this.progressNotifier.dispatchStudentEnrolled(command.studentId, course.id);
    return EnrollmentResult.success();
  }
}`}
            </div>
          </div>

          <div className="rounded-xl border border-stone-200 bg-white p-3.5">
            <span className="font-bold text-stone-900 text-xs block mb-1">
              Automated Boundary Enforcement (Fitness Functions):
            </span>
            <p className="text-xs text-stone-600">
              Never rely on team verbal agreements alone to preserve module boundaries. Use tools like <strong>eslint-plugin-boundaries</strong> or
              <strong>dependency-cruiser</strong> to fail CI builds whenever an internal file from `modules/assessment/internal` is imported inside `modules/courses`.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "4.4",
      week: "Week 2",
      title: "Lesson 4.4 · Microservices architecture",
      duration: "4.5 hours",
      summary:
        "Deconstructing microservices: autonomous deployability, bounded business contexts, independent elasticity, polyglot persistence, and paying the mandatory distributed systems tax.",
      diagram: "deployment-vs-code",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            <strong>Microservices</strong> is an architectural style that structures an application as a collection of small,
            autonomous services modeled around distinct business domains. Each microservice is independently deployable,
            independently scalable, and owns its data store exclusively.
          </p>

          <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-4">
            <h5 className="font-bold text-amber-950 text-sm mb-2">The Mandatory &quot;Microservice Tax&quot;</h5>
            <p className="text-xs text-stone-700 mb-2">
              Before adopting microservices, an engineering organization must be prepared to pay the operational tax:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <div className="p-2.5 rounded-lg bg-white border border-amber-200">
                <span className="font-bold text-amber-900 block">1. Network Fallibility</span>
                <span className="text-stone-600">
                  Every cross-boundary call traverses routers, firewalls, and switches. Timeouts, packet loss, and connection resets become normal occurrences.
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-amber-200">
                <span className="font-bold text-amber-900 block">2. Distributed Data Consistency</span>
                <span className="text-stone-600">
                  No cross-service SQL `JOIN`s or 2-phase commits. Systems must embrace eventual consistency, sagas, and compensating transactions.
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-amber-200">
                <span className="font-bold text-amber-900 block">3. Observability Overhead</span>
                <span className="text-stone-600">
                  Tracing a single user click requires distributed tracing (W3C TraceContext, OpenTelemetry, Jaeger) to correlate spans across 6 services.
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-amber-200">
                <span className="font-bold text-amber-900 block">4. Deployment Pipeline Multiplicity</span>
                <span className="text-stone-600">
                  Maintaining 15 separate CI/CD pipelines, container registries, Helm charts, secret rotations, and canary deployments.
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "4.5",
      week: "Week 2",
      title: "Lesson 4.5 · The distributed monolith anti-pattern",
      duration: "3.5 hours",
      summary:
        "The most hazardous architectural mistake in industry: adopting the operational chaos of microservices while retaining the tight coupling of a monolith.",
      diagram: "distributed-monolith",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            A <strong>Distributed Monolith</strong> is an architecture that has been split into multiple deployable services,
            yet those services remain so tightly coupled that they cannot be developed, deployed, or operated independently.
            It provides all the pain of microservices with none of the autonomy.
          </p>

          <div className="rounded-xl border border-rose-200 bg-rose-50/50 p-4">
            <h5 className="font-bold text-rose-950 text-sm mb-2">Diagnostic Checklist: Do You Have a Distributed Monolith?</h5>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-rose-200">
                <span className="text-rose-600 font-bold">1. Shared Database Tables:</span>
                <span className="text-stone-700">Multiple services query or write to the same database tables without going through APIs.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-rose-200">
                <span className="text-rose-600 font-bold">2. Lockstep Releases:</span>
                <span className="text-stone-700">You have to deploy Service A, Service B, and Service C together in an exact sequence during maintenance windows.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-rose-200">
                <span className="text-rose-600 font-bold">3. Deep Synchronous Chains:</span>
                <span className="text-stone-700">A frontend request triggers Service A &rarr; Service B &rarr; Service C &rarr; Service D synchronously over HTTP.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-rose-200">
                <span className="text-rose-600 font-bold">4. Shared Internal Libraries:</span>
                <span className="text-stone-700">A change in a shared `common-models.jar` or `shared-types` package requires recompiling and redeploying all services.</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "4.6",
      week: "Week 2",
      title: "Lesson 4.6 · How to identify the correct service boundaries",
      duration: "4.5 hours",
      summary:
        "Applying Domain-Driven Design (DDD) to discover natural system boundaries: Bounded Contexts, Ubiquitous Language, Subdomains (Core, Supporting, Generic), and Conway's Law.",
      diagram: "bounded-contexts",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            The hardest challenge in microservice design is not Docker or Kubernetes—it is finding <strong>where to draw the cuts</strong>.
            Cutting along technical tiers (e.g. &quot;UI service&quot;, &quot;Database service&quot;) creates disaster. Cuts must follow <strong>Business Domains</strong>.
          </p>

          <div className="rounded-xl border border-stone-200 bg-white p-4">
            <h5 className="font-bold text-stone-900 text-sm mb-2">DDD Subdomain Categorization Framework</h5>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-orange-50 border border-orange-200">
                <span className="font-bold text-orange-900 block mb-1">Core Domain</span>
                <span className="text-stone-700 block mb-2">
                  The primary competitive advantage of your business. Deserves your best engineering talent and custom architecture.
                </span>
                <span className="font-mono text-[10px] text-orange-800 bg-white px-2 py-0.5 rounded border border-orange-200 block">
                  PrepSpaces: AI Interview Evaluation & Architectural Feedback Engine
                </span>
              </div>
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200">
                <span className="font-bold text-amber-900 block mb-1">Supporting Subdomain</span>
                <span className="text-stone-700 block mb-2">
                  Necessary software capabilities tailored to your product, but not the core market differentiator.
                </span>
                <span className="font-mono text-[10px] text-amber-800 bg-white px-2 py-0.5 rounded border border-amber-200 block">
                  PrepSpaces: Progress Tracking, Course Curriculum Indexing
                </span>
              </div>
              <div className="p-3 rounded-xl bg-stone-100 border border-stone-300">
                <span className="font-bold text-stone-900 block mb-1">Generic Subdomain</span>
                <span className="text-stone-700 block mb-2">
                  Standard capabilities shared by all SaaS products. Buy off-the-shelf or use third-party managed services.
                </span>
                <span className="font-mono text-[10px] text-stone-700 bg-white px-2 py-0.5 rounded border border-stone-200 block">
                  PrepSpaces: Stripe Billing, Auth0 / Clerk Identity, SendGrid Email
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "4.7",
      week: "Week 2",
      title: "Lesson 4.7 · Data ownership across services",
      duration: "4 hours",
      summary:
        "The non-negotiable rule of microservices: Database-per-Service. How to eliminate shared database tables, manage eventual consistency, and implement the Transactional Outbox pattern.",
      diagram: "data-ownership-outbox",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            The fundamental architectural principle of microservices is: <strong>Every service owns its private database</strong>.
            No external service is ever permitted to connect directly to another service&apos;s SQL schema.
          </p>

          <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-4">
            <h5 className="font-bold text-stone-900 text-sm mb-2">The Dual-Write Problem & The Outbox Pattern</h5>
            <p className="text-xs text-stone-600 mb-3">
              When an operation requires saving data to a database AND sending a message to a broker, doing both in application code causes dual-write bugs.
              If the server crashes after the database commit, the event is never published.
            </p>
            <div className="rounded-lg bg-stone-900 p-3 font-mono text-[11px] text-amber-300 overflow-x-auto">
{`// Transactional Outbox in Action (Atomic Commit)
async function submitAssessment(attemptData) {
  return await db.transaction(async (trx) => {
    // 1. Write the primary business record
    const attempt = await trx('quiz_attempts').insert(attemptData).returning('*');

    // 2. Write the event into the outbox table in the SAME transaction
    await trx('outbox_events').insert({
      aggregate_type: 'AssessmentAttempt',
      aggregate_id: attempt.id,
      event_type: 'AttemptCompleted',
      payload: JSON.stringify({ studentId: attempt.studentId, score: attempt.score }),
      published: false,
      created_at: new Date()
    });

    return attempt;
    // Both commit or both rollback together. 100% guarantee of zero lost events!
  });
}`}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "4.8",
      week: "Week 2",
      title: "Lesson 4.8 · Coupling, cohesion, and service communication costs",
      duration: "3.5 hours",
      summary:
        "Quantifying architectural health: Afferent vs Efferent coupling, high cohesion, network serialization overhead, and the latency calculation of chatty microservices.",
      diagram: "deployment-vs-code",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            Software maintainability is governed by two fundamental computer science metrics: <strong>Cohesion</strong> and <strong>Coupling</strong>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl border border-orange-200 bg-orange-50/50">
              <span className="font-bold text-orange-950 block mb-1">High Cohesion (Desirable):</span>
              <p className="text-stone-700">
                Code that changes together lives together. All functions, classes, and tables inside the `InterviewModule` relate exclusively to orchestrating, recording, and scoring interviews.
              </p>
            </div>
            <div className="p-3.5 rounded-xl border border-stone-300 bg-stone-50">
              <span className="font-bold text-stone-900 block mb-1">Loose Coupling (Desirable):</span>
              <p className="text-stone-700">
                Modules have minimal knowledge of each other&apos;s internal implementation details. Changes to internal database columns inside `CourseModule` do not ripple into `InterviewModule`.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-stone-200 bg-white p-3.5">
            <span className="font-bold text-stone-900 text-xs block mb-1">The Chatty API Anti-Pattern:</span>
            <p className="text-xs text-stone-600">
              If rendering a course overview page requires making 15 separate synchronous HTTP requests from the frontend to 5 different microservices,
              the browser suffers massive connection overhead and latency compounding. Use <strong>BFF (Backend-For-Frontend)</strong> or GraphQL federation to aggregate requests on the server side.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "4.9",
      week: "Week 2",
      title: "Lesson 4.9 · Migration: monolith to modular monolith to microservices",
      duration: "4 hours",
      summary:
        "The 5-stage Strangler Fig migration methodology: incrementally decomposing a live monolith with zero downtime, canary routing, and reverse proxies.",
      diagram: "strangler-fig",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            The single greatest risk in software engineering is the <strong>&quot;Big Bang Rewrite&quot;</strong>: attempting to build an entire new microservices system from scratch while freezing the old monolith.
            It almost always runs over budget, fails to reach feature parity, and risks catastrophic production outages.
          </p>

          <div className="rounded-xl border border-stone-200 bg-white p-4">
            <h5 className="font-bold text-stone-900 text-sm mb-2">The 5-Stage Strangler Fig Migration Playbook</h5>
            <div className="space-y-2.5 text-xs">
              <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                <strong className="text-stone-900">Stage 1: Refactor Monolith Internals First:</strong>
                <span className="text-stone-600 block mt-0.5">
                  Never extract tangled spaghetti code directly to a network service. First establish clean boundaries, interfaces, and modular separation inside the existing monolith.
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                <strong className="text-stone-900">Stage 2: Select a High-Value Extraction Candidate:</strong>
                <span className="text-stone-600 block mt-0.5">
                  Pick a capability with clear domain boundaries, distinct scaling needs, or high release frequency (e.g. AI Interview Processing).
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                <strong className="text-stone-900">Stage 3: Place an Intercepting Proxy / Gateway:</strong>
                <span className="text-stone-600 block mt-0.5">
                  Deploy an API Gateway (Envoy, NGINX, Cloudflare Worker) in front of the monolith. It intercepts `/api/interview/*` requests.
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                <strong className="text-stone-900">Stage 4: Canary Traffic Routing & Dual Writes:</strong>
                <span className="text-stone-600 block mt-0.5">
                  Route 5% of traffic to the new service. Verify error logs, latencies, and data consistency against the old service before expanding to 100%.
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                <strong className="text-stone-900">Stage 5: Decommission & Delete Legacy Code:</strong>
                <span className="text-stone-600 block mt-0.5">
                  Once 100% of traffic runs stably on the new service, delete the legacy module from the monolith repository, shrinking build artifacts and test suites.
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "4.10",
      week: "Week 2",
      title: "Lesson 4.10 · Architecture decision-making framework",
      duration: "3 hours",
      summary:
        "Building an evidence-based Architecture Decision Record (ADR): trading off maintainability, deployment frequency, scaling dimensions, data consistency, and total operational cost.",
      diagram: "deployment-vs-code",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <p>
            Senior system design is not about declaring that microservices are good and monoliths are bad, or vice versa.
            It is about <strong>making and defending the right architectural trade-off</strong> for a specific business, team, workload, and budget.
          </p>

          <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-4">
            <h5 className="font-bold text-stone-900 text-sm mb-2">The 7 Architectural Evaluation Criteria</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2 bg-white rounded border border-stone-200">
                <strong className="text-orange-700">1. Maintainability (20%):</strong> Clean module boundaries, ease of understanding, testability.
              </div>
              <div className="p-2 bg-white rounded border border-stone-200">
                <strong className="text-orange-700">2. Deployment Independence (15%):</strong> Can teams ship without cross-team synchronization?
              </div>
              <div className="p-2 bg-white rounded border border-stone-200">
                <strong className="text-orange-700">3. Scaling Dimensions (15%):</strong> Can resource-heavy workloads (e.g. AI/GPU) scale separately?
              </div>
              <div className="p-2 bg-white rounded border border-stone-200">
                <strong className="text-orange-700">4. Fault Isolation & Reliability (15%):</strong> Does a memory leak take down the entire system?
              </div>
              <div className="p-2 bg-white rounded border border-stone-200">
                <strong className="text-orange-700">5. Team Delivery Speed (15%):</strong> Fast local onboarding and low development ceremony.
              </div>
              <div className="p-2 bg-white rounded border border-stone-200">
                <strong className="text-orange-700">6. Data Consistency (10%):</strong> Need for immediate ACID vs tolerance of eventual consistency.
              </div>
              <div className="p-2 bg-white rounded border border-stone-200">
                <strong className="text-orange-700">7. Operational Cost & Complexity (10%):</strong> Cloud bills, observability tools, SRE overhead.
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const currentLessonData = lessons.find((l) => l.id === activeLesson) || lessons[0];

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] px-4 py-8 sm:px-8 md:px-12 antialiased selection:bg-[#f97316] selection:text-white">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-1/3 w-96 h-96 bg-orange-500/[0.04] rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/[0.04] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl w-full">
        {/* Navigation Bar */}
        <ModuleNav
          track="system-design"
          currentModuleId="architecture"
          aiTutorLabel="Ask Architecture AI"
        />

        {/* Hero Section */}
        <div className="mb-8 rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs backdrop-blur-md">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3 py-0.5 text-[11px] font-mono font-bold uppercase tracking-wider text-orange-700">
              <Boxes size={12} className="text-[#f97316]" />
              System Design Masterclass · Module 4
            </span>
            <span className="rounded-full border border-stone-200 bg-stone-50 px-2.5 py-0.5 text-[11px] font-mono text-stone-600">
              University + Industry Production Engineering
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900 leading-tight">
            Monoliths, Modular Architecture, Microservices, and Service Boundaries
          </h1>
          <p className="mt-3 text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
            Master the principles of software modularity, coupling, cohesion, Domain-Driven Design (DDD), bounded contexts,
            data ownership, the distributed monolith anti-pattern, and zero-downtime Strangler Fig migration.
          </p>

          {/* Metadata Grid */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-[#e7e3da] pt-5">
            <div className="rounded-xl bg-[#faf8f4] p-3 border border-[#e7e3da]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">Duration</span>
              <span className="text-xs sm:text-sm font-bold text-stone-900">2–3 weeks</span>
              <span className="text-[10px] text-stone-500 block">35–45 study hours</span>
            </div>
            <div className="rounded-xl bg-[#faf8f4] p-3 border border-[#e7e3da]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">Prerequisites</span>
              <span className="text-xs sm:text-sm font-bold text-stone-900">Modules 1, 2 & 3</span>
              <span className="text-[10px] text-stone-500 block">APIs, Networking, Capacity</span>
            </div>
            <div className="rounded-xl bg-[#faf8f4] p-3 border border-[#e7e3da]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">Core Concepts</span>
              <span className="text-xs sm:text-sm font-bold text-stone-900">Modularity & Boundaries</span>
              <span className="text-[10px] text-stone-500 block">Coupling, Cohesion, DDD</span>
            </div>
            <div className="rounded-xl bg-[#faf8f4] p-3 border border-[#e7e3da]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">Final Project</span>
              <span className="text-xs sm:text-sm font-bold text-stone-900">Architecture Redesign</span>
              <span className="text-[10px] text-orange-600 font-bold block">PrepSpaces Evolution</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 [scrollbar-width:none]">
          {[
            { id: "lessons", label: "Curriculum Lessons (10)", icon: BookOpen },
            { id: "calculators", label: "Architecture Simulators (3)", icon: Sliders },
            { id: "qa", label: "Senior Staff Q&A (6)", icon: HelpCircle },
            { id: "project", label: "Capstone Redesign Project", icon: GitBranch },
            { id: "assessment", label: "Knowledge Assessment (8)", icon: CheckCircle2 },
            { id: "reading", label: "Readings & References", icon: ExternalLink },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                  isActive
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white/80 text-stone-600 hover:text-stone-900 hover:bg-white border border-[#e7e3da]"
                }`}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* TAB 1: LESSONS & CURRICULUM                                        */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "lessons" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Lesson Navigation Column */}
            <div className="lg:col-span-4 space-y-2">
              <div className="rounded-2xl border border-[#e7e3da] bg-white p-3 shadow-xs">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-400 px-2 py-1 block">
                  Module 4 Roadmap
                </span>
                <div className="space-y-1 mt-1">
                  {lessons.map((lesson) => {
                    const isSelected = activeLesson === lesson.id;
                    return (
                      <button
                        key={lesson.id}
                        onClick={() => setActiveLesson(lesson.id)}
                        className={`w-full text-left p-2.5 rounded-xl transition text-xs font-medium cursor-pointer ${
                          isSelected
                            ? "bg-orange-50 text-orange-950 font-bold border border-orange-200"
                            : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                        }`}
                      >
                        <div className="flex items-center justify-between text-[10px] font-mono text-stone-400 mb-0.5">
                          <span>{lesson.week}</span>
                          <span>{lesson.duration}</span>
                        </div>
                        <div className="truncate">{lesson.title}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Detailed Lesson Card */}
            <div className="lg:col-span-8 space-y-6">
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-3 mb-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-orange-600 font-bold block">
                      {currentLessonData.week} · {currentLessonData.duration}
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold text-stone-900 mt-0.5">
                      {currentLessonData.title}
                    </h2>
                  </div>
                  <span className="rounded-full bg-stone-100 text-stone-600 text-xs px-2.5 py-1 font-mono">
                    Lesson {currentLessonData.id} of 10
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-stone-500 italic mb-6">
                  {currentLessonData.summary}
                </p>

                {/* Lesson Main Content */}
                <div className="mb-6">{currentLessonData.content}</div>

                {/* Interactive Architectural Diagram for this Lesson */}
                <div className="mt-8 pt-6 border-t border-[#e7e3da]">
                  <VisualDiagramComponentModule4 diagramType={currentLessonData.diagram} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 2: INTERACTIVE ARCHITECTURE SIMULATORS                         */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "calculators" && (
          <div className="space-y-8">
            {/* Tool 1: Weighted Architecture Decision Scorecard */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-4 mb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
                    Interactive Architecture Tool 1
                  </span>
                  <h3 className="text-lg font-bold text-stone-900">
                    Weighted Architecture Decision Scorecard Simulator
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Evaluate Monolith vs Modular Monolith vs Microservices using weighted multi-criteria decision analysis (Score = Σ w_i × s_i).
                  </p>
                </div>
                <div className="flex items-center gap-1.5 bg-stone-100 p-1 rounded-xl">
                  {["balanced", "startup", "enterprise"].map((p) => (
                    <button
                      key={p}
                      onClick={() => applyPreset(p)}
                      className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                        preset === p ? "bg-[#f97316] text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
                      }`}
                    >
                      {p === "balanced" ? "Balanced" : p === "startup" ? "Early Startup" : "Scale-Up / Enterprise"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sliders for Criteria Weights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3">
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Maintainability</span>
                    <span className="text-orange-600 font-mono">{weights.maintainability}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="40"
                    value={weights.maintainability}
                    onChange={(e) => setWeights({ ...weights, maintainability: Number(e.target.value) })}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">Modularity & code readability</span>
                </div>

                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3">
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Deployment Independence</span>
                    <span className="text-orange-600 font-mono">{weights.deployment}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="40"
                    value={weights.deployment}
                    onChange={(e) => setWeights({ ...weights, deployment: Number(e.target.value) })}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">Autonomous releases per domain</span>
                </div>

                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3">
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Targeted Scaling</span>
                    <span className="text-orange-600 font-mono">{weights.scaling}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="40"
                    value={weights.scaling}
                    onChange={(e) => setWeights({ ...weights, scaling: Number(e.target.value) })}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">Heterogeneous GPU/CPU workloads</span>
                </div>

                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3">
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Fault Isolation</span>
                    <span className="text-orange-600 font-mono">{weights.reliability}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="40"
                    value={weights.reliability}
                    onChange={(e) => setWeights({ ...weights, reliability: Number(e.target.value) })}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">Limited blast radius of failures</span>
                </div>

                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3">
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Team Velocity & Simplicity</span>
                    <span className="text-orange-600 font-mono">{weights.teamSpeed}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="40"
                    value={weights.teamSpeed}
                    onChange={(e) => setWeights({ ...weights, teamSpeed: Number(e.target.value) })}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">Fast local build and onboarding</span>
                </div>

                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3">
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Data Consistency (ACID)</span>
                    <span className="text-orange-600 font-mono">{weights.consistency}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="40"
                    value={weights.consistency}
                    onChange={(e) => setWeights({ ...weights, consistency: Number(e.target.value) })}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">Immediate vs eventual consistency</span>
                </div>

                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3">
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Low Operational Cost</span>
                    <span className="text-orange-600 font-mono">{weights.costComplexity}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="40"
                    value={weights.costComplexity}
                    onChange={(e) => setWeights({ ...weights, costComplexity: Number(e.target.value) })}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">Infrastructure & SRE overhead</span>
                </div>
              </div>

              {/* Scorecard Results Comparison Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div
                  className={`p-4 rounded-2xl border text-center transition-all ${
                    calculatedScores.monolith >= calculatedScores.modularMonolith &&
                    calculatedScores.monolith >= calculatedScores.microservices
                      ? "border-orange-500 bg-orange-50/50 shadow-sm"
                      : "border-stone-200 bg-white"
                  }`}
                >
                  <span className="text-xs font-mono font-bold text-stone-500 uppercase block">Style A</span>
                  <h4 className="font-bold text-stone-900 text-base mt-0.5">Traditional Monolith</h4>
                  <div className="my-3 text-3xl font-extrabold text-stone-800 font-mono">
                    {calculatedScores.monolith} <span className="text-xs text-stone-400 font-normal">/ 100</span>
                  </div>
                  <p className="text-[11px] text-stone-500">
                    Highest data consistency and local developer velocity; constrained in blast-radius and independent scaling.
                  </p>
                </div>

                <div
                  className={`p-4 rounded-2xl border text-center transition-all ${
                    calculatedScores.modularMonolith >= calculatedScores.monolith &&
                    calculatedScores.modularMonolith >= calculatedScores.microservices
                      ? "border-orange-500 bg-orange-50/70 shadow-md ring-2 ring-orange-400/30"
                      : "border-stone-200 bg-white"
                  }`}
                >
                  <div className="inline-block px-2 py-0.5 rounded-full bg-orange-100 text-orange-800 text-[10px] font-bold uppercase mb-1">
                    Industry Sweet Spot
                  </div>
                  <h4 className="font-bold text-stone-900 text-base">Modular Monolith</h4>
                  <div className="my-3 text-3xl font-extrabold text-[#f97316] font-mono">
                    {calculatedScores.modularMonolith} <span className="text-xs text-stone-400 font-normal">/ 100</span>
                  </div>
                  <p className="text-[11px] text-stone-600">
                    Strongest overall balance: near-zero network latency, clean boundaries, atomic transactions, and zero SRE tax.
                  </p>
                </div>

                <div
                  className={`p-4 rounded-2xl border text-center transition-all ${
                    calculatedScores.microservices >= calculatedScores.monolith &&
                    calculatedScores.microservices >= calculatedScores.modularMonolith
                      ? "border-orange-500 bg-orange-50/50 shadow-sm"
                      : "border-stone-200 bg-white"
                  }`}
                >
                  <span className="text-xs font-mono font-bold text-stone-500 uppercase block">Style C</span>
                  <h4 className="font-bold text-stone-900 text-base mt-0.5">Microservices</h4>
                  <div className="my-3 text-3xl font-extrabold text-stone-800 font-mono">
                    {calculatedScores.microservices} <span className="text-xs text-stone-400 font-normal">/ 100</span>
                  </div>
                  <p className="text-[11px] text-stone-500">
                    Exceptional independent deployment and scaling; heavily penalized by network latency and operational tax.
                  </p>
                </div>
              </div>
            </div>

            {/* Tool 2: Service Latency & Network Overhead Penalty Calculator */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="border-b border-[#e7e3da] pb-3 mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
                  Interactive Architecture Tool 2
                </span>
                <h3 className="text-lg font-bold text-stone-900">
                  Daisy-Chained Service Latency & Availability Compounder
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Calculate the real latency and failure propagation penalty of synchronous service hops vs in-process modular execution.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3">
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Number of Service Hops (n)</span>
                    <span className="text-orange-600 font-mono">{numHops} hops</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={numHops}
                    onChange={(e) => setNumHops(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">Sequential synchronous RPCs</span>
                </div>

                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3">
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Network RTT Per Hop</span>
                    <span className="text-orange-600 font-mono">{hopLatency} ms</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="50"
                    value={hopLatency}
                    onChange={(e) => setHopLatency(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">VPC network transit + TLS handshake</span>
                </div>

                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3">
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Per-Hop Failure Rate (p)</span>
                    <span className="text-orange-600 font-mono">{failureRatePerHop}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.1"
                    max="3.0"
                    step="0.1"
                    value={failureRatePerHop}
                    onChange={(e) => setFailureRatePerHop(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-400">Timeout / 500 error probability</span>
                </div>
              </div>

              {/* Comparison Output */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/40 text-xs">
                  <span className="font-bold text-emerald-900 block mb-1 text-sm">Modular Monolith (In-Memory)</span>
                  <div className="text-2xl font-bold font-mono text-emerald-800 my-1">
                    {latencyResults.monolithTime} ms
                  </div>
                  <p className="text-stone-600">
                    Direct pointer dereference in RAM (~10-50 nanoseconds per call). Zero serialization overhead and no network risk.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/40 text-xs">
                  <span className="font-bold text-rose-900 block mb-1 text-sm">
                    Microservice Chain ({numHops} Sequential RPCs)
                  </span>
                  <div className="text-2xl font-bold font-mono text-rose-800 my-1">
                    {latencyResults.totalMicroserviceLatency} ms{" "}
                    <span className="text-xs font-normal text-rose-600">
                      (+{latencyResults.latencyIncreasePct}%)
                    </span>
                  </div>
                  <p className="text-stone-600">
                    Compound failure risk:{" "}
                    <strong className="text-rose-700">{latencyResults.compoundFailureRate}%</strong> chance of request failure across the {numHops}-hop chain.
                  </p>
                </div>
              </div>
            </div>

            {/* Tool 3: Strangler Fig Traffic Migration Simulator */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="border-b border-[#e7e3da] pb-3 mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
                  Interactive Architecture Tool 3
                </span>
                <h3 className="text-lg font-bold text-stone-900">
                  Strangler Fig Traffic Shift & Canary Simulator
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Simulate dynamic traffic splitting between legacy monolith and newly extracted microservice with circuit breaker trip safety.
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-4">
                  <div className="flex justify-between items-center text-xs font-bold mb-2">
                    <span>Migrated Traffic to Extracted Service</span>
                    <span className="text-orange-600 font-mono text-sm">{migratedTrafficPct}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={migratedTrafficPct}
                    onChange={(e) => setMigratedTrafficPct(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 font-mono mt-1">
                    <span>0% (Monolith Only)</span>
                    <span>5% (Canary)</span>
                    <span>50% (Split Phase)</span>
                    <span>100% (Full Cutover)</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-white">
                  <h5 className="font-bold text-xs text-stone-800 mb-2">Canary Telemetry Health:</h5>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                      <span className="text-[10px] text-stone-400 block font-mono">Routing Target</span>
                      <span className="font-bold text-stone-900">
                        {migratedTrafficPct === 100
                          ? "100% Microservice"
                          : migratedTrafficPct === 0
                          ? "100% Monolith"
                          : `Split (${100 - migratedTrafficPct}% / ${migratedTrafficPct}%)`}
                      </span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                      <span className="text-[10px] text-stone-400 block font-mono">Canary p95 Latency</span>
                      <span className="font-bold text-emerald-700">32 ms</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                      <span className="text-[10px] text-stone-400 block font-mono">Observed Error Rate</span>
                      <span className="font-bold text-stone-900">{simulatedErrorRate}%</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                      <span className="text-[10px] text-stone-400 block font-mono">Rollback Status</span>
                      <span className="font-bold text-emerald-600">Ready (Instant DNS/Proxy switch)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 3: SENIOR SYSTEMS ENGINEERING Q&A                              */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "qa" && (
          <div className="space-y-4">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs mb-6">
              <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block mb-1">
                Senior & Staff Level Systems Engineering
              </span>
              <h2 className="text-xl font-bold text-stone-900">
                Architectural Trade-Off Scenarios & Defense
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                Real-world architectural dilemma scenarios asked in L6/L7 Staff Engineer system design interviews
                and experienced in high-growth startups and tech giants.
              </p>
            </div>

            {qaScenarios.map((item) => {
              const isOpen = expandedQa[item.id] || false;
              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-[#e7e3da] bg-white p-5 shadow-xs transition hover:border-orange-200"
                >
                  <button
                    onClick={() => setExpandedQa({ ...expandedQa, [item.id]: !isOpen })}
                    className="w-full flex items-start justify-between gap-4 text-left cursor-pointer"
                  >
                    <div>
                      <span className="text-[10px] font-mono uppercase text-orange-600 font-bold block">
                        Scenario
                      </span>
                      <h4 className="font-bold text-stone-900 text-sm sm:text-base mt-0.5">
                        {item.title}
                      </h4>
                      <p className="text-xs text-stone-500 mt-1">{item.context}</p>
                    </div>
                    <div className="shrink-0 p-1 rounded-lg bg-stone-100 text-stone-500">
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="mt-4 pt-4 border-t border-stone-100 text-xs sm:text-sm text-stone-700 leading-relaxed bg-[#faf8f4] p-4 rounded-xl border border-stone-200">
                      <span className="font-bold text-stone-900 block mb-1">Architectural Defense & Resolution:</span>
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 4: CAPSTONE REDESIGN PROJECT                                   */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "project" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-3 mb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase text-orange-600 font-bold block">
                    Module 4 Capstone Assignment
                  </span>
                  <h2 className="text-xl font-bold text-stone-900">
                    PrepSpaces Architecture Redesign: Monolith to Modular Monolith to Selective Extraction
                  </h2>
                </div>
                <span className="rounded-full bg-orange-100 text-orange-800 text-xs px-3 py-1 font-bold">
                  Major Portfolio Project
                </span>
              </div>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-6">
                <strong>Project Scenario:</strong> PrepSpaces begins as a fast-moving backend supporting course browsing,
                student progress tracking, and assessments. As the platform adds AI voice interview simulations, traffic grows 10x,
                and multiple engineering teams collaborate on the repository. Your task is to evaluate whether the system should remain
                a monolith, transition to a modular monolith, or selectively extract microservices.
              </p>

              {/* 6 Phases Accordion / Steps */}
              <div className="space-y-3">
                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-xs font-mono font-bold text-orange-600 block">Phase 1</span>
                  <h4 className="font-bold text-stone-900 text-sm mt-0.5">Map the Business Domain</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Identify at least 6 core business capabilities (Course Catalog, Enrollment & Progress, Assessment Engine, AI Interviews, Notification Dispatcher, Analytics).
                    Document responsibilities, data ownership, dependencies, and team ownership for each.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-xs font-mono font-bold text-orange-600 block">Phase 2</span>
                  <h4 className="font-bold text-stone-900 text-sm mt-0.5">Design Two Competing Alternatives</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Author two comprehensive architecture diagrams:
                    1) A Modular Monolith with strictly enforced package boundaries.
                    2) A Selective Microservices Architecture extracting only the AI Interview capability.
                    Document how each handles request routing, data access, authentication, and partial failure.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-xs font-mono font-bold text-orange-600 block">Phase 3</span>
                  <h4 className="font-bold text-stone-900 text-sm mt-0.5">Establish & Challenge Service Boundaries</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    For every proposed boundary, apply Microsoft and AWS boundary tests: well-defined purpose, limited synchronous interaction,
                    independent deployment schedule, and manageable data consistency. If a service does not satisfy these tests, reject extraction.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-xs font-mono font-bold text-orange-600 block">Phase 4</span>
                  <h4 className="font-bold text-stone-900 text-sm mt-0.5">Implement a Production Modular Monolith</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Build a working backend containing Courses, Progress, and Assessments with explicit interfaces.
                    Add automated architecture tests (ESLint boundaries / dependency-cruiser) verifying that modules never bypass public interfaces.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-xs font-mono font-bold text-orange-600 block">Phase 5</span>
                  <h4 className="font-bold text-stone-900 text-sm mt-0.5">Extract One Service with Strangler Fig</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Stand up an independent AI Interview service with its own dedicated database.
                    Configure an API reverse proxy to route traffic between the legacy monolith and the extracted service with zero downtime.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-[#faf8f4]">
                  <span className="text-xs font-mono font-bold text-orange-600 block">Phase 6</span>
                  <h4 className="font-bold text-stone-900 text-sm mt-0.5">Evaluate the Quantitative Trade-Offs</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Measure p95 latency before and after extraction. Simulate network partitioning and downstream outage.
                    Assess developer velocity, CI/CD duration, and AWS hosting costs. Produce the final Architecture Decision Record (ADR).
                  </p>
                </div>
              </div>

              {/* Deliverables List */}
              <div className="mt-6 pt-5 border-t border-stone-200">
                <h5 className="font-bold text-xs uppercase tracking-wider text-stone-900 mb-2">
                  Required Deliverables Checklist:
                </h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                  <li className="flex items-center gap-2 p-2 bg-stone-50 rounded-lg border border-stone-200">
                    <CheckCircle2 size={14} className="text-orange-600" />
                    <span>Comprehensive Architecture Decision Report (ADR)</span>
                  </li>
                  <li className="flex items-center gap-2 p-2 bg-stone-50 rounded-lg border border-stone-200">
                    <CheckCircle2 size={14} className="text-orange-600" />
                    <span>C4 Model Diagrams (Context, Container, Component)</span>
                  </li>
                  <li className="flex items-center gap-2 p-2 bg-stone-50 rounded-lg border border-stone-200">
                    <CheckCircle2 size={14} className="text-orange-600" />
                    <span>Working Codebase with Boundary Fitness Tests</span>
                  </li>
                  <li className="flex items-center gap-2 p-2 bg-stone-50 rounded-lg border border-stone-200">
                    <CheckCircle2 size={14} className="text-orange-600" />
                    <span>Latency & Fault Injection Benchmark Report</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 5: ASSESSMENT QUIZ (8 QUESTIONS VERBATIM)                      */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "assessment" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-4 mb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
                    Module 4 Assessment
                  </span>
                  <h3 className="text-lg font-bold text-stone-900">
                    Knowledge Check: Architectural Styles & Boundaries
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    8 architectural questions evaluating foundational principles, coupling, cohesion, and migration patterns.
                  </p>
                </div>
                {quizSubmitted && (
                  <div className="flex items-center gap-3">
                    <div className="text-sm font-bold text-stone-900 bg-orange-50 border border-orange-200 px-3 py-1.5 rounded-xl">
                      Score: <span className="text-orange-600 font-mono font-bold">{calculateScore()} / 8</span>
                    </div>
                    <button
                      onClick={resetQuiz}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 text-xs font-bold hover:bg-stone-50 cursor-pointer"
                    >
                      <RotateCcw size={13} />
                      <span>Retake Quiz</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Questions List */}
              <div className="space-y-6">
                {quizQuestions.map((q) => {
                  const selected = selectedAnswers[q.id];
                  const isCorrect = selected === q.correct;
                  return (
                    <div
                      key={q.id}
                      className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-4 sm:p-5"
                    >
                      <h4 className="font-bold text-stone-900 text-sm mb-3">{q.question}</h4>

                      <div className="space-y-2">
                        {q.options.map((opt, idx) => {
                          const isOptionSelected = selected === idx;
                          let btnStyle = "bg-white border-stone-200 text-stone-700 hover:bg-stone-50";

                          if (quizSubmitted) {
                            if (idx === q.correct) {
                              btnStyle = "bg-emerald-50 border-emerald-400 text-emerald-950 font-bold";
                            } else if (isOptionSelected && !isCorrect) {
                              btnStyle = "bg-rose-50 border-rose-400 text-rose-950 line-through";
                            } else {
                              btnStyle = "bg-white border-stone-200 text-stone-400 opacity-60";
                            }
                          } else if (isOptionSelected) {
                            btnStyle = "bg-orange-50 border-orange-500 text-orange-950 font-bold shadow-xs";
                          }

                          return (
                            <button
                              key={idx}
                              onClick={() => handleSelectAnswer(q.id, idx)}
                              disabled={quizSubmitted}
                              className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all cursor-pointer ${btnStyle}`}
                            >
                              <div className="flex items-center gap-2.5">
                                <span className="h-5 w-5 rounded-full border flex items-center justify-center text-[10px] font-mono shrink-0">
                                  {String.fromCharCode(65 + idx)}
                                </span>
                                <span>{opt}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {quizSubmitted && (
                        <div
                          className={`mt-3 p-3 rounded-xl text-xs border leading-relaxed ${
                            isCorrect
                              ? "bg-emerald-50/70 border-emerald-200 text-emerald-900"
                              : "bg-rose-50/70 border-rose-200 text-rose-900"
                          }`}
                        >
                          <span className="font-bold block mb-0.5">
                            {isCorrect ? "✓ Correct!" : "✗ Review Explanation:"}
                          </span>
                          {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {!quizSubmitted ? (
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setQuizSubmitted(true)}
                    disabled={Object.keys(selectedAnswers).length < quizQuestions.length}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#f97316] text-white font-bold text-xs shadow-xs hover:bg-[#ea580c] transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <span>Submit Assessment</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              ) : (
                <div className="mt-6 flex justify-between items-center flex-wrap gap-4 pt-4 border-t border-stone-200">
                  <div className="text-xs text-stone-600">
                    Completed 8 of 8 questions. Ready to review research and readings.
                  </div>
                  <button
                    onClick={() => setActiveTab("reading")}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 text-white font-bold text-xs hover:bg-stone-800 transition cursor-pointer"
                  >
                    <span>Explore Research & Reading List</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 6: READINGS & REFERENCES                                       */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "reading" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block mb-1">
                Foundations & Industry Standards
              </span>
              <h2 className="text-xl font-bold text-stone-900">
                Research and Academic Reading List
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                These foundational papers and architecture frameworks complement Module 4 with university rigor
                and primary production engineering guidance.
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    code: "MIT 6.005",
                    title: "MIT · Elements of Software Construction",
                    focus:
                      "Study abstraction, modularity, interface specifications, decoupling, invariants, and how to design software that is resilient to change.",
                    link: "https://ocw.mit.edu/courses/6-005-elements-of-software-construction-fall-2008/",
                    linkText: "MIT OpenCourseWare Course",
                  },
                  {
                    code: "MIT 6.033",
                    title: "MIT · Computer System Engineering",
                    focus:
                      "Explore system complexity, modularity, abstraction, fault tolerance, and why remote calls introduce fundamentally different failure modes from local calls.",
                    link: "https://ocw.mit.edu/courses/6-033-computer-system-engineering-spring-2018/",
                    linkText: "MIT Systems Engineering Lectures",
                  },
                  {
                    code: "AZURE ARCH",
                    title: "Microsoft Azure Architecture Center · Domain Analysis",
                    focus:
                      "Practical guide to identifying bounded contexts, modeling business domains, and establishing candidate service boundaries without distributed anti-patterns.",
                    link: "https://learn.microsoft.com/en-us/azure/architecture/microservices/model/domain-analysis",
                    linkText: "Microsoft Learn Architecture",
                  },
                  {
                    code: "AWS WELL-ARCH",
                    title: "AWS Well-Architected · Workload Segmentation",
                    focus:
                      "Balancing service segmentation with reliability, independent scaling, deployment needs, and the cognitive complexity of distributed operations.",
                    link: "https://docs.aws.amazon.com/wellarchitected/2025-02-25/framework/rel_service_architecture_monolith_soa_microservice.html",
                    linkText: "AWS Architecture Framework",
                  },
                  {
                    code: "FOWLER ARCH",
                    title: "Martin Fowler · Microservice Trade-Offs & Monolith First",
                    focus:
                      "Essential reading on the genuine costs of distributed data management, eventual consistency, operational complexity, and why starting monolithic is smart.",
                    link: "https://martinfowler.com/articles/microservice-trade-offs.html",
                    linkText: "martinfowler.com Articles",
                  },
                  {
                    code: "AWS MIGRATION",
                    title: "AWS Prescriptive Guidance · Decomposing Monoliths",
                    focus:
                      "Study service extraction by business capability, subdomain decomposition, and step-by-step Strangler Fig migration patterns.",
                    link: "https://docs.aws.amazon.com/prescriptive-guidance/latest/modernization-decomposing-monoliths/strangler-fig.html",
                    linkText: "AWS Modernization Guidance",
                  },
                  {
                    code: "DDD CLASSIC",
                    title: "Domain-Driven Design (Eric Evans & Vlad Khononov)",
                    focus:
                      "Foundational domain modeling literature establishing ubiquitous language, strategic design, bounded contexts, and aggregates in enterprise software.",
                    link: "https://www.domainlanguage.com/ddd/",
                    linkText: "Domain Language Resources",
                  },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-2xl border border-stone-200 bg-[#faf8f4] hover:border-orange-300 hover:bg-orange-50/20 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <span className="text-[10px] font-mono font-bold text-orange-600 block mb-1">
                        {item.code}
                      </span>
                      <h4 className="font-bold text-stone-900 text-sm group-hover:text-orange-600 transition">
                        {item.title}
                      </h4>
                      <p className="text-xs text-stone-600 mt-2 leading-relaxed">{item.focus}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center justify-between text-xs font-bold text-orange-600">
                      <span>{item.linkText}</span>
                      <ExternalLink size={13} />
                    </div>
                  </a>
                ))}
              </div>

              {/* What Comes Next Banner */}
              <div className="mt-8 rounded-2xl border border-orange-200 bg-orange-50/70 p-5 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 block">
                    What Comes Next
                  </span>
                  <span className="text-sm font-bold text-stone-900 block mt-0.5">
                    Module 5: Relational Databases, NoSQL, Data Modeling & Indexing
                  </span>
                  <span className="text-xs text-stone-600 block mt-0.5">
                    Deep dive into CMU 15-445 relational concepts, normal forms (1NF–3NF), B-tree internals, and PostgreSQL EXPLAIN ANALYZE tuning.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => navigate("/learning/system-design/networking")}
                    className="flex items-center gap-1.5 rounded-xl border border-orange-300 bg-white px-3.5 py-2 text-xs font-bold text-orange-700 hover:bg-orange-50 transition cursor-pointer"
                  >
                    <span>Back to Module 3 (APIs)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate("/learning/system-design/databases")}
                    className="flex items-center gap-1.5 rounded-xl bg-[#f97316] px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#ea580c] transition cursor-pointer"
                  >
                    <span>Start Module 5</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
