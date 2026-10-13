import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Cpu,
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
  Activity,
  Award,
  FileText,
  CheckSquare,
  ExternalLink,
  Users,
  TrendingUp,
  Database,
  GitBranch,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";
import { VisualDiagramComponentModule2 } from "./SystemDesignRequirementsDiagrams";

/* -------------------------------------------------------------------------- */
/* SYSTEM DESIGN MASTERCLASS · MODULE 2                                       */
/* Requirements Engineering, Constraints, and Capacity Estimation            */
/* Penn State SWENG 886, UT Dallas, UK CS 585, ISO 29148, Google SRE, AWS WAF */
/* -------------------------------------------------------------------------- */

const ASSESSMENT_QUESTIONS = [
  {
    id: 1,
    question: "1. Which statement best describes a requirement?",
    options: [
      "A mandatory choice of framework",
      "A statement of needed behavior or a constraint that can be evaluated",
      "A server count calculated from intuition",
    ],
    correct: 1,
    explanation:
      "A requirement defines an observable outcome, needed system capability, or operational constraint that can be objectively tested and verified, rather than premature technology choices.",
  },
  {
    id: 2,
    question: "2. Which is the strongest performance requirement?",
    options: [
      "The platform must be very fast",
      "The database should be modern",
      "Under a defined workload, 95% of course reads must complete within a specified latency threshold",
    ],
    correct: 2,
    explanation:
      "A well-written performance requirement explicitly identifies the workload, metric, percentile threshold (p95), operation scope, and measurement boundary.",
  },
  {
    id: 3,
    question: "3. A system receives 8,640,000 requests per day. What is its average RPS?",
    options: ["100", "1,000", "10"],
    correct: 0,
    explanation:
      "Average RPS = Daily requests / 86,400 seconds. 8,640,000 / 86,400 = 100 requests per second.",
  },
  {
    id: 4,
    question:
      "4. A service has average request latency of 0.2 seconds and a stable arrival rate of 400 requests per second. What is the average number of requests in progress?",
    options: ["20", "80", "2,000"],
    correct: 1,
    explanation:
      "By Little's Law (L = λ × W), L = 400 requests/sec × 0.2 seconds = 80 requests in progress concurrently on average.",
  },
  {
    id: 5,
    question:
      "5. What should you do before choosing an instance count from a capacity estimate?",
    options: [
      "Deploy as many instances as possible",
      "Assume all endpoints have equal cost",
      "Benchmark representative workload and verify latency, errors, and dependencies",
    ],
    correct: 2,
    explanation:
      "Capacity formulas provide starting assumptions; reliable infrastructure sizing requires running representative load tests to measure CPU, memory, and database saturation under real concurrency.",
  },
  {
    id: 6,
    question: "6. What does an RPO specify?",
    options: [
      "The acceptable data-loss window in a defined recovery scenario",
      "The maximum API response time",
      "The number of replicas in a database",
    ],
    correct: 0,
    explanation:
      "Recovery Point Objective (RPO) specifies the maximum acceptable data loss measured in time (e.g., max 5 minutes of data loss) after a disruptive failure.",
  },
];

export default function SystemDesignRequirements() {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(12);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'interactive' | 'qa' | 'assessment' | 'lab' | 'reading'

  // Interactive Capacity Calculator State (Module 2 Baseline: 250k DAU)
  const [calcDau, setCalcDau] = useState(250000);
  const [calcRequestsPerUser, setCalcRequestsPerUser] = useState(60);
  const [calcPeakMultiplier, setCalcPeakMultiplier] = useState(6);
  const [calcPayloadKb, setCalcPayloadKb] = useState(20);
  const [calcInstanceRps, setCalcInstanceRps] = useState(250);
  const [calcDesignUtilPercent, setCalcDesignUtilPercent] = useState(65);

  // Background Queue Simulator State
  const [queueArrivalRps, setQueueArrivalRps] = useState(8);
  const [queueDurationSec, setQueueDurationSec] = useState(2.0);
  const [queueUtilPercent, setQueueUtilPercent] = useState(60);

  // Compound Growth Simulator State
  const [growthInitialReqs, setGrowthInitialReqs] = useState(15); // in Millions
  const [growthRateMonthly, setGrowthRateMonthly] = useState(8); // %
  const [growthHorizonMonths, setGrowthHorizonMonths] = useState(12);

  // Assessment Quiz State
  const [userAnswers, setUserAnswers] = useState({});
  const [submittedQuiz, setSubmittedQuiz] = useState(false);

  // Math Calculations for Capacity Planning
  const totalDailyRequests = calcDau * calcRequestsPerUser;
  const averageRps = (totalDailyRequests / 86400).toFixed(1);
  const peakRps = Math.round((totalDailyRequests / 86400) * calcPeakMultiplier);
  const dailyTransferGb = ((totalDailyRequests * calcPayloadKb) / (1024 * 1024)).toFixed(1);
  const peakTransferMBs = (((totalDailyRequests / 86400) * calcPeakMultiplier * calcPayloadKb) / 1024).toFixed(1);

  // Instance Sizing
  const designRpsPerInstance = (calcInstanceRps * (calcDesignUtilPercent / 100)).toFixed(1);
  const baseInstancesNeeded = Math.ceil(peakRps / (calcInstanceRps * (calcDesignUtilPercent / 100)));
  const nPlusOneInstances = baseInstancesNeeded + 1;

  // Queue Calculations
  const averageJobsInProgress = (queueArrivalRps * queueDurationSec).toFixed(1);
  const requiredWorkerSlots = Math.ceil((queueArrivalRps * queueDurationSec) / (queueUtilPercent / 100));

  // Growth Calculations
  const compoundMultiplier = Math.pow(1 + growthRateMonthly / 100, growthHorizonMonths).toFixed(2);
  const projectedDailyReqs = (growthInitialReqs * Math.pow(1 + growthRateMonthly / 100, growthHorizonMonths)).toFixed(1);

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
        id: "requirements-engineering-process",
        title: "Lesson 2.1 — The Requirements Engineering Process",
        shortTitle: "2.1 The RE Process",
        category: "Requirements & Scoping",
        icon: Workflow,
        summary:
          "Requirements engineering is the disciplined process of discovering, analyzing, documenting, validating, and managing what a system must do and its operational boundaries. Requirements describe outcomes; architecture describes how to achieve them.",
        theory: [
          "Before engineers select a database, choose a cloud vendor, deploy microservices, or configure Kubernetes, they must understand what the system must accomplish and how much workload it must sustain.",
          "Consider two requests: 'Build a platform supporting 1 million users' versus 'Build a platform with 250,000 DAU, 1,050 peak RPS, p95 API latency < 300ms, and explicit recovery targets.' The first is vague; the second gives testable boundaries.",
          "The 5 Fundamental Activities (CMU SEI):",
          "1. Elicitation: What do users and stakeholders need? (Produces candidate requirements).",
          "2. Analysis: Are requirements feasible, complete, consistent, and compatible? (Resolves conflicts).",
          "3. Specification: How should requirements be stated precisely? (Produces testable specifications).",
          "4. Validation: Are these the right requirements for the intended system? (Secures stakeholder consensus).",
          "5. Management: How do requirements change over time? (Maintains traceability and baselines).",
          "Requirements are outcomes, not architecture decisions. When product owners ask for 'fast course access', the engineer must investigate payload sizes, traffic distributions, and percentile thresholds before picking Redis or Kafka.",
        ],
        keyPoints: [
          "Outcomes vs Implementations: Requirements state WHAT; architecture establishes HOW.",
          "5 Core Activities: Elicitation, Analysis, Specification, Validation, and Management.",
          "Iterative Feedback: Prototypes and load tests uncover missing requirements.",
          "Avoid Tool Prematurity: Never install Redis, Kafka, or Kubernetes before quantifying workload demand.",
        ],
        diagramType: "requirements-process",
        tables: [
          {
            title: "The 5 Fundamental Requirements Activities",
            headers: ["Activity", "Main Question", "Primary Output"],
            rows: [
              ["Elicitation", "What do users and stakeholders need?", "Candidate requirements"],
              ["Analysis", "Are requirements feasible, complete, consistent?", "Resolved conflicts and boundaries"],
              ["Specification", "How should requirements be stated precisely?", "Requirements specification (ISO 29148)"],
              ["Validation", "Are these the right requirements for the system?", "Stakeholder agreement & identified gaps"],
              ["Management", "How do requirements change over time?", "Priorities, revisions, and traceability matrix"],
            ],
          },
        ],
        architectDecision:
          "Never accept vague adjectives ('fast', 'scalable', 'secure') as engineering requirements. Convert every quality goal into a measurable statement specifying the operation, workload rate, percentile threshold, and measurement boundary.",
        interviewQuestions: [
          {
            q: "Why is jumping directly to architecture choices an antipattern in requirements engineering?",
            a: "Because tools are solutions to specific constraints. Selecting tools before establishing workload scale, read/write ratios, latency targets, and team maintenance capabilities leads to accidental complexity, higher operational costs, and architectures that fail under unanticipated failure modes.",
          },
        ],
      },

      {
        id: "stakeholders-and-discovery",
        title: "Lesson 2.2 — Stakeholders and Requirements Discovery",
        shortTitle: "2.2 Stakeholders & Discovery",
        category: "Requirements & Scoping",
        icon: Users,
        summary:
          "A stakeholder is anyone who influences, uses, operates, pays for, regulates, or is affected by the system. Elicitation techniques and the 6 critical question paths uncover unstated requirements.",
        theory: [
          "A requirements document built from only one stakeholder's perspective will often miss critical operational behavior.",
          "Key Stakeholders: Students (access, progress, usability), Instructors (publishing, grading, upload reliability), Administrators (permissions, auditability), Product Owners (business value, launch dates), Developers (maintainability, API contracts), SRE & Operations (reliability, monitoring, recovery), Security (auth, data protection), Finance (hosting expenditure predictability), Legal & Compliance (privacy, data retention).",
          "Elicitation Techniques: Interviews (goals, pain points), Observation (watching real user workflows), Workshops (resolving inter-team conflicts), Analytics & Telemetry (examining traffic logs and database queries), Prototypes & Story Mapping (building proof-of-concepts).",
          "The 6 Critical Investigation Paths: For each feature, inspect Normal Path (happy flow), Alternative Path (user edits/cancels), Failure Path (network drops, DB timeouts), Security Path (unauthorized tokens), Scale Path (10x traffic surges), and Recovery Path (server crash failovers).",
        ],
        keyPoints: [
          "Diverse Perspectives: Incorporate SRE, Security, and Finance early, not just Product Owners.",
          "6 Investigation Paths: Normal, Alternative, Failure, Security, Scale, Recovery.",
          "Observe Over Asking: Users often cannot articulate unhandled edge cases; observe telemetry and logs.",
          "Failure First: Ask what happens when a submission succeeds in DB but the HTTP ACK drops.",
        ],
        diagramType: "stakeholder-discovery",
        tables: [
          {
            title: "Stakeholder Discovery Matrix",
            headers: ["Stakeholder", "Primary Goal", "Critical Concern", "Architectural Question"],
            rows: [
              ["Student", "Finish lessons and courses", "Progress should never be lost", "What happens if local network disconnects?"],
              ["Instructor", "Collect and grade assignments", "Submission integrity & deadlines", "How can an instructor audit upload timestamps?"],
              ["Operations SRE", "Maintain service uptime", "Failure recovery and MTTR", "What are the explicit RTO and RPO targets?"],
              ["Finance", "Control cloud expenditure", "Surprise variable bandwidth bills", "Which workloads drive high network egress?"],
              ["Security", "Zero trust data isolation", "Prevent unauthorized grade access", "Are object IDs validated against user permissions?"],
            ],
          },
        ],
        architectDecision:
          "Build an explicit stakeholder table before authoring technical design docs. Omitting SRE or Finance leads to systems that perform well in local development but bankrupt the company or fail during production deployments.",
        interviewQuestions: [
          {
            q: "How do you uncover missing requirements that stakeholders forget to mention?",
            a: "Systematically explore the 6 investigation paths: Alternative paths, Failure modes, Security access violations, Scale surges, and Disaster Recovery. Asking 'What happens when step 3 succeeds but step 4 drops?' reveals the need for idempotency and background retries.",
          },
        ],
      },

      {
        id: "classifying-requirements",
        title: "Lesson 2.3 — Classifying Requirements Correctly",
        shortTitle: "2.3 Classifying Requirements",
        category: "Requirements & Scoping",
        icon: Layers,
        summary:
          "Requirements become actionable when separated into distinct categories: Functional, Non-Functional Quality Attributes, Business, User, and System/Interface Constraints.",
        theory: [
          "Requirements specifications become muddy when functional features, quality attributes, and technical constraints are dumped into a flat checklist.",
          "1. Functional Requirements: Specify observable system behavior (e.g. 'When an authorized student submits an assignment, the platform shall store submission metadata and return a unique submission UUID').",
          "2. Non-Functional Requirements (Quality Attributes): Constraints on system behavior (Performance: p95 latency < 300ms; Availability: 99.9% monthly uptime; Durability: zero data loss; Security: student isolation; Scalability: sustain 1,050 peak RPS).",
          "3. Business Requirements: Organizational goals (e.g. 'Reduce support tickets concerning missing progress by 40%').",
          "4. User Requirements: Goals from user perspective (e.g. 'As a student, I want my lesson progress saved so I can resume on mobile').",
          "5. System & Interface Constraints: Technology boundaries (e.g. must run on Node.js and PostgreSQL, respect external email provider rate limits).",
        ],
        keyPoints: [
          "Distinct Categories: Functional (behavior), Non-Functional (quality), Business (value), Constraints (limits).",
          "Testable Obligations: Functional requirements must produce verifiable outputs.",
          "Context Matters: Quality attributes are not universal; tailor targets to business value and cost.",
        ],
        diagramType: "requirements-classification",
        architectDecision:
          "Never classify non-functional requirements as second-class citizens. An application that fulfills every functional user story but violates availability or latency objectives will still suffer catastrophic production failure.",
        interviewQuestions: [
          {
            q: "What is the difference between a business requirement and a technical requirement?",
            a: "Business requirements explain WHY a system is funded (e.g., reduce churn by 20%). Technical requirements specify the testable behaviors, API contracts, latency thresholds, and durability guarantees necessary to achieve that business goal.",
          },
        ],
      },

      {
        id: "writing-high-quality-requirements",
        title: "Lesson 2.4 — How to Write High-Quality Requirements",
        shortTitle: "2.4 Writing Good Requirements",
        category: "Requirements & Scoping",
        icon: FileText,
        summary:
          "Well-written requirements are Clear, Atomic, Necessary, Feasible, Verifiable, Traceable, Consistent, and Prioritized (ISO/IEC/IEEE 29148:2018). Use acceptance criteria and a Requirements Traceability Matrix.",
        theory: [
          "Vague Requirement: 'The system must be fast.' Improved Requirement: 'Under the defined peak workload of 1,000 requests per second, at least 95% of successful course-detail API requests shall complete within 300 milliseconds, measured at the API boundary over a 30-minute test.'",
          "Vague Requirement: 'The website must be secure.' Improved Requirement: 'For every assignment-download request, the backend shall verify that the requester has permission to access the specified submission before issuing a pre-signed S3 download URL.'",
          "User Stories and BDD Acceptance Criteria: Format requirements using Given-When-Then scenarios (e.g., Given authenticated enrolled student, When submitting valid file, Then record metadata and return submission ID).",
          "Requirements Traceability Matrix (RTM): Links Requirement ID -> Statement -> Architecture Design Element -> Verification Test.",
        ],
        keyPoints: [
          "ISO 29148:2018 Standard: Clear, Atomic, Necessary, Feasible, Verifiable, Traceable, Consistent, Prioritized.",
          "Quantify Boundaries: Specify workload rate, measurement point, metric percentile, and test duration.",
          "BDD Acceptance Criteria: Given-When-Then scenarios translate directly into automated integration tests.",
          "Traceability Matrix: Links business requirements directly to architecture decisions and test suites.",
        ],
        diagramType: "requirements-traceability",
        architectDecision:
          "Every requirement must include its explicit verification method: Inspection, Analysis, Demonstration, or Automated Testing. If you cannot design a test that proves a requirement passed or failed, rewrite the requirement.",
        interviewQuestions: [
          {
            q: "What makes a software requirement testable and verifiable?",
            a: "A testable requirement has explicit measurement points, concrete numerical thresholds (e.g., p95 < 250ms), clearly defined input parameters, expected outputs, and defined workload conditions under which the test executes.",
          },
        ],
      },

      {
        id: "prioritization-and-tradeoffs",
        title: "Lesson 2.5 — Prioritization, Trade-offs, and Scope Control",
        shortTitle: "2.5 Prioritization & Scope",
        category: "Requirements & Scoping",
        icon: GitBranch,
        summary:
          "Teams have finite resources. Prioritize using MoSCoW (Must, Should, Could, Won't have this time) and 3-dimensional evaluation (Business Impact × Failure Risk × Implementation Cost). Manage scope changes via structured workflows.",
        theory: [
          "MoSCoW Prioritization Framework:",
          "• Must have: Non-negotiable for a usable release (e.g. Students can access enrolled courses).",
          "• Should have: Important but not release-blocking (e.g. Email confirmation on submission).",
          "• Could have: Desirable enhancement when capacity permits (e.g. Profile customization).",
          "• Won't have this time: Explicitly deferred from current scope (e.g. Offline sync in V1).",
          "Prioritize by Risk, Not Popularity: A feature like AI course recommendations may sound exciting, but preventing unauthorized grade tampering is a higher-risk, foundational requirement.",
          "Change Management Workflow: Proposed Change -> Identify Motivation -> Assess Cost & Risk -> Trace Affected Components -> Approve/Reject/Defer -> Update Spec & Tests.",
        ],
        keyPoints: [
          "MoSCoW: Must, Should, Could, and Won't have this time.",
          "Risk-Weighted Sizing: High-impact, high-risk items take priority over cosmetic features.",
          "Scope Creep Defense: A change workflow ensures every modification evaluates architectural cost and tests.",
        ],
        diagramType: "change-management",
        architectDecision:
          "'Won't have this time' is the most powerful tool an architect possesses. Explicitly defining what is OUT of scope protects the engineering team from premature distributed systems complexity.",
        interviewQuestions: [
          {
            q: "How do you handle a stakeholder requesting a major new feature 2 weeks before launch?",
            a: "Follow the change control process: evaluate the motivation, analyze the architectural cost and regression risk, trace affected components, and propose deferring it to 'Won't have this time' (V1.1 release) to protect launch stability.",
          },
        ],
      },

      {
        id: "constraints-assumptions-risks",
        title: "Lesson 2.6 — Constraints, Assumptions, Dependencies, and Risks",
        shortTitle: "2.6 Constraints & Risks",
        category: "Requirements & Scoping",
        icon: ShieldAlert,
        summary:
          "Constraints restrict solutions; Assumptions are hypotheses to validate; Dependencies are external services relied upon; Risks are potential failure events. Never treat these concepts as interchangeable.",
        theory: [
          "Constraints: Limit available solutions (e.g. existing PostgreSQL, fixed cloud quota, compliance with GDPR, team staffing limits).",
          "Assumptions: Suppositions treated provisionally as true (e.g. read-to-write ratio is 9:1, peak traffic occurs near class time). Every assumption must have a validation method and review date.",
          "Dependencies: External systems relied upon (e.g. SendGrid for email, S3 for object storage, Stripe for payments). Identify failure modes, quotas, and fallbacks for each.",
          "Risks: Potential adverse events (e.g. traffic underestimated, DB connection saturation, unauthenticated API access). Maintain a Risk Register with impact, probability, and mitigations.",
        ],
        keyPoints: [
          "Do Not Conflate: Constraints (limits), Assumptions (hypotheses), Dependencies (external), Risks (failures).",
          "Assumption Expiration: Document assumptions with validation dates against production telemetry.",
          "Dependency SLA Mismatch: Your service cannot reliably offer 99.99% availability if it depends on a 99.0% third-party service without asynchronous fallbacks.",
        ],
        tables: [
          {
            title: "Production Architecture Risk Register",
            headers: ["Identified Risk", "Potential Impact", "Architectural Mitigation"],
            rows: [
              ["Peak traffic underestimated", "High latency and 504 timeouts", "Add horizontal autoscaling and run stress tests to 2x peak"],
              ["External provider quota hit", "Throttled requests and dropped alerts", "Buffer requests in BullMQ queue and monitor quota usage"],
              ["Database pool saturated", "Cascading thread exhaustion", "Implement pgBouncer connection pooling and Redis query cache"],
              ["Unauthenticated access", "Data breach / grade leaks", "Enforce server-side JWT claims check on all resource IDs"],
              ["Backups never restored", "Disaster recovery failure", "Automate monthly backup restoration drills in isolated staging"],
            ],
          },
        ],
        architectDecision:
          "Never assume a third-party dependency will maintain 100% uptime. Wrap every external API call with circuit breakers, strict timeouts (e.g., 250ms), and asynchronous queues so an external outage never cascades into a total platform outage.",
        interviewQuestions: [
          {
            q: "What happens when your service availability objective is higher than your dependency's SLA?",
            a: "You must decouple the dependency. If your SLA is 99.9% but an external email service offers 99.0%, you cannot make synchronous calls. You must enqueue events asynchronously with persistent retries and return an immediate success to the caller.",
          },
        ],
      },

      {
        id: "performance-and-reliability-objectives",
        title: "Lesson 2.7 — Define Measurable Performance and Reliability Objectives",
        shortTitle: "2.7 Objectives: SLA, RTO, RPO",
        category: "Capacity & Workloads",
        icon: Award,
        summary:
          "Capacity planning begins by defining what resources must achieve. Understand SLI (Indicator) vs SLO (Internal Target) vs SLA (Contractual Agreement), alongside Availability, RTO (Recovery Time), and RPO (Recovery Point).",
        theory: [
          "SLI: Service-level indicator (the direct measurement, e.g. fraction of HTTP GET requests completing in < 300ms).",
          "SLO: Service-level objective (the internal target, e.g. 99.0% of requests meet latency threshold over 30 days).",
          "SLA: Service-level agreement (external contract with financial credits for non-compliance).",
          "Availability: Proportion of time a service is accessible and functional (e.g. 99.9% allows 43.8 minutes downtime/month).",
          "RTO (Recovery Time Objective): The target time to restore service after a disaster (e.g., service restored within 60 minutes).",
          "RPO (Recovery Point Objective): The maximum acceptable data loss measured in time (e.g., maximum 5 minutes of transactional data loss).",
        ],
        keyPoints: [
          "SLI = Measurement, SLO = Internal Goal, SLA = Customer Contract.",
          "Percentiles Over Averages: Always specify p95 and p99 targets.",
          "RTO is Downtime Duration; RPO is Data Loss Window.",
          "Validate via Chaos: RTO and RPO are meaningless until tested via simulated disaster drills.",
        ],
        tables: [
          {
            title: "SRE Reliability Metrics Comparison",
            headers: ["Term", "Formal Definition", "Learning Platform Example"],
            rows: [
              ["SLI (Indicator)", "Directly measured quantitative metric", "Percentage of /api/lessons requests returning 200 OK in < 300ms"],
              ["SLO (Objective)", "Internal target set by engineering & product", "99.5% of course reads complete < 300ms over rolling 30-day window"],
              ["SLA (Agreement)", "Contractual commitment with commercial remedies", "99.0% monthly availability or enterprise clients get 10% credit"],
              ["RTO", "Maximum acceptable downtime until restoration", "Restore course browsing within 60 minutes of regional outage"],
              ["RPO", "Maximum acceptable data loss measured in time", "No more than 5 minutes of progress write events lost under failure"],
            ],
          },
        ],
        architectDecision:
          "Never commit to an RPO of 0 (zero data loss) across multi-region deployments unless the business will fund multi-region synchronous replication and tolerate the resulting 70ms+ cross-region speed-of-light network latency penalty.",
        interviewQuestions: [
          {
            q: "How do RTO and RPO dictate database replication architecture?",
            a: "An RPO of near-zero requires synchronous replication across Availability Zones so every committed transaction is mirrored before acknowledgement. An RTO of < 60 seconds requires automated health checks and instant DNS/load-balancer failover to standby replicas.",
          },
        ],
      },

      {
        id: "modeling-users-and-workloads",
        title: "Lesson 2.8 — Model Users, Traffic, and Workload Patterns",
        shortTitle: "2.8 Modeling Workloads",
        category: "Capacity & Workloads",
        icon: Activity,
        summary:
          "Convert product analytics (MAU, DAU) into system demand. Map user journeys and evaluate average, peak, burst, growth, failure, and background workload patterns.",
        theory: [
          "DAU alone does not define infrastructure capacity. Two platforms with 250,000 DAU can have wildly different requirements: a video streaming service generates gigabits of CDN egress, while a text quiz app generates transactional database writes.",
          "Workload Profile Breakdown (Learning Platform):",
          "• Course & Lesson Reads: 55% of API traffic (read-heavy, high cacheability).",
          "• Auth & User Profiles: 25% of API traffic (read lookups, token signatures).",
          "• Learning Progress Writes: 15% of API traffic (transactional DB writes).",
          "• Assignment Uploads: 5% of API traffic (heavy payload, object storage, async queues).",
          "Workload Scenarios: Average (steady baseline), Peak (highest sustained demand), Burst (sudden 10x spikes at deadline), Growth (quarterly organic expansion), Failure (capacity during 1 AZ outage), and Background (indexing, emails, transcoding).",
        ],
        keyPoints: [
          "DAU ≠ Server Sizing: Calculate actions per user, payload size, and read/write ratios.",
          "Workload Skew: 55% reads can be cached; 15% writes dictate database commit limits.",
          "Burst Planning: Class assignment deadlines create severe peak surges (5x to 10x average).",
        ],
        diagramType: "workload-profile",
        architectDecision:
          "Segment read traffic from write traffic at the architectural level. Route the 55% course read queries to horizontal read replicas or Redis caches so peak browsing spikes never starve database write locks needed for progress recording.",
        interviewQuestions: [
          {
            q: "Why is a 55/15 read-to-write breakdown critical for database sizing?",
            a: "Because reads can scale horizontally almost infinitely using read replicas and caching layers. Writes, however, must synchronize against the primary database node; your primary database must be sized specifically to sustain the 15% peak write throughput.",
          },
        ],
      },

      {
        id: "core-capacity-formulas",
        title: "Lesson 2.9 — Core Capacity-Estimation Formulas",
        shortTitle: "2.9 Capacity Formulas",
        category: "Capacity & Workloads",
        icon: Cpu,
        summary:
          "Mathematical foundations for architectural sizing: Average RPS, Peak RPS, Little's Law Concurrency, Network Egress, Annual Storage Growth, and N+1 Instance Sizing.",
        theory: [
          "1. Average Requests Per Second: Average RPS = (Daily Requests) / 86,400. Daily Requests = DAU × Requests/User/Day.",
          "2. Estimated Peak RPS: Peak RPS = Average RPS × Peak-to-Average Multiplier.",
          "3. Average Concurrent Requests (Little's Law): L = λ × W (Arrival rate × average service latency in seconds).",
          "4. Daily Network Transfer: Daily Transfer = Daily Requests × Average Bytes per Request-Response Pair.",
          "5. Raw Data Storage Growth: Annual Storage = Daily Records × Bytes/Record × 365 days.",
          "6. Sustainable Instance Count: N = ⌈Peak RPS / Design RPS per Instance⌉. Add +1 instance for single failure headroom!",
          "7. Compound Traffic Growth: D_n = D_0 × (1 + g)^n (where g is monthly growth rate and n is months).",
        ],
        keyPoints: [
          "86,400 Seconds: The universal constant for daily traffic conversions.",
          "Little's Law: Concurrency (L) = λ (Arrival RPS) × W (Latency in seconds).",
          "Headroom Buffer: Operate instances at 60%-70% tested capacity to absorb micro-bursts.",
          "N+1 Redundancy: Always provision at least 1 extra instance so a failure never breaches peak capacity.",
        ],
        tables: [
          {
            title: "Core System Design Capacity Formulas",
            headers: ["Metric", "Mathematical Formula", "Core Variables"],
            rows: [
              ["Average RPS", "Daily Requests / 86,400", "DAU × Requests/User/Day"],
              ["Peak RPS", "Average RPS × Peak Multiplier", "Peak-to-average surge ratio (3× to 10×)"],
              ["Concurrency (L)", "L = λ × W", "λ = Arrival RPS, W = Latency in seconds"],
              ["Network Egress", "Daily Requests × Payload Bytes", "Request-response pair size in KB"],
              ["Annual Storage", "Daily Records × Record Bytes × 365", "Raw persisted writes per day"],
              ["Instance Fleet (N)", "⌈Peak RPS / (Tested RPS × Util%)⌉ + 1", "Tested benchmark capacity & headroom"],
              ["Growth Forecast", "D_n = D_0 × (1 + g)^n", "Monthly growth rate g, horizon n months"],
            ],
          },
        ],
        architectDecision:
          "Never calculate server instance counts using raw maximum benchmark capacity. If an instance crashes at 250 RPS in testing, set its design capacity to 65% (162.5 RPS). Sizing at 100% capacity guarantees cascading brownouts during autoscaling warm-up delays.",
        interviewQuestions: [
          {
            q: "How do you calculate Little's Law concurrency for 1,000 RPS at 250ms latency?",
            a: "L = λ × W = 1,000 requests/sec × 0.25 seconds = 250 concurrent requests in flight. This means your application server thread pool and connection queues must support at least 250 active contexts simultaneously.",
          },
        ],
      },

      {
        id: "complete-worked-capacity-model",
        title: "Lesson 2.10 — Complete Worked Example: Capacity Planning for a Learning Platform",
        shortTitle: "2.10 Complete Worked Model",
        category: "Capacity & Workloads",
        icon: Sliders,
        summary:
          "End-to-end mathematical walkthrough for 250,000 DAU, 60 req/user/day, 6x peak, 20 KB payload, Little's Law concurrency, storage growth, and N+1 instance sizing.",
        theory: [
          "Step 1 (Scenario): 250,000 DAU, 60 requests/user/day, 6x peak multiplier, 20 KB avg payload.",
          "Step 2 (Daily Requests): 250,000 × 60 = 15,000,000 requests/day (15 Million).",
          "Step 3 (Average RPS): 15,000,000 / 86,400 seconds ≈ 173.6 RPS.",
          "Step 4 (Peak RPS): 173.6 × 6 ≈ 1,042 Peak RPS target.",
          "Step 5 (Traffic Breakdown): Reads (55%) = 573 RPS; Auth (25%) = 260 RPS; Writes (15%) = 156 RPS; Assignments (5%) = 52 RPS.",
          "Step 6 (Network Transfer): 15M × 20 KB = 300 GB/day (3.47 MB/s avg; ~20.8 MB/s peak).",
          "Step 7 (Concurrency): Latency = 250ms. L = 1,042 × 0.25s ≈ 261 concurrent requests in flight.",
          "Step 8 (Storage Growth): 15% progress writes = 2.25M records/day × 1.5 KB = 3.375 GB/day = 1.23 TB/year raw records.",
          "Step 9 (Instance Sizing): Instance tested at 250 RPS max. Plan for 65% design utilization = 162.5 RPS/instance. Base instances = ⌈1,042 / 162.5⌉ = 7 instances. Single failure tolerance requires 8 instances total (7 remain after 1 failure = 1,137.5 RPS capacity).",
        ],
        keyPoints: [
          "15M Daily Reqs: Generated by 250k users performing 60 daily interactions.",
          "1,042 Peak RPS: The aggregate system engineering design target.",
          "300 GB Daily Egress: Bandwidth demands CDN edge caching.",
          "8 Compute Nodes: Provides N+1 resilience with 65% headroom.",
        ],
        diagramType: "worked-capacity-model",
        architectDecision:
          "Sizing the compute tier to 8 instances does not prove the platform will survive 1,042 peak RPS. The database, authentication provider, Redis cache, and network load balancer must be individually stress-tested to guarantee they do not bottleneck at 700 RPS.",
        interviewQuestions: [
          {
            q: "Why do we add an 8th instance to a 7-instance compute cluster?",
            a: "To satisfy the N+1 single-instance failure tolerance requirement. If 7 instances operate at 65% utilization and one server crashes, the remaining 7 instances can absorb the entire 1,042 peak RPS at ~75% utilization without exceeding maximum capacity.",
          },
        ],
      },

      {
        id: "tier-capacity-planning",
        title: "Lesson 2.11 — Capacity Planning for Databases, Queues, and File Storage",
        shortTitle: "2.11 DB, Queues & Storage",
        category: "Capacity & Workloads",
        icon: Database,
        summary:
          "API compute is only one tier. Plan capacity across Database throughput and connections, Background Worker Queues (BullMQ concurrency slots), and Object Storage/CDN bandwidth.",
        theory: [
          "1. Database Capacity: One API request may trigger 2-4 SQL queries. At 1,042 peak API RPS, DB may receive 2,000+ QPS. Sizing factors: Read vs Write QPS, query latency, connection pool limits (e.g. pgBouncer with max 100 connections), and WAL log generation.",
          "2. Background Queue Capacity: Suppose 8 async jobs arrive per second and each takes 2.0s to execute. Average jobs in flight = 8 × 2 = 16. To operate worker concurrency slots at ≤ 60% utilization: Slots = 16 / 0.60 ≈ 27 concurrent worker slots.",
          "3. File & Video Storage: Never proxy multi-gigabyte video files through Node.js web server memory! Generate pre-signed S3 upload URLs; clients upload directly to S3. Deliver video and static assets through CloudFront CDN with 90%+ cache hit ratio.",
        ],
        keyPoints: [
          "QPS > RPS: One API request often executes multiple database queries.",
          "Connection Pool Limits: Databases cannot handle 10,000 direct connections; pool connections via pgBouncer.",
          "Queue Worker Math: Slots = (Arrival Rate × Duration) / Target Utilization %.",
          "Offload Big Media: Use pre-signed S3 URLs and CDN edge caching.",
        ],
        architectDecision:
          "Always size background worker queues to drain backlogs rapidly after an outage. If a 15-minute downstream outage causes a 7,200-job backlog, worker capacity must be able to drain that backlog in under 30 minutes while still processing incoming live traffic.",
        interviewQuestions: [
          {
            q: "How do you calculate worker concurrency for an async message queue?",
            a: "Multiply job arrival rate by average job execution time to find jobs in flight (e.g. 8 jobs/sec × 2s = 16 jobs). Then divide by target utilization (e.g. 16 / 0.60 = 26.7) to determine required concurrent worker execution slots.",
          },
        ],
      },

      {
        id: "load-testing-and-headroom",
        title: "Lesson 2.12 — Capacity Forecasting, Headroom, and Testing",
        shortTitle: "2.12 Testing & Forecasting",
        category: "Capacity & Workloads",
        icon: TrendingUp,
        summary:
          "Forecast organic and launch growth ($D_n = D_0(1+g)^n$). Maintain appropriate headroom to absorb autoscaling delays. Run a complete 5-stage load testing suite (Load, Stress, Spike, Soak, Resilience).",
        theory: [
          "Forecasting Growth: Assuming 8% monthly traffic growth, demand multiplies by (1.08)^12 ≈ 2.52x over 12 months. A 15M daily request system expands to ~37.8M daily requests within a year.",
          "Why Headroom Matters: Autoscaling is never instantaneous (cloud instances take 2-5 minutes to initialize, pull Docker containers, and warm caches). Headroom buffers traffic spikes during spin-up delays.",
          "The 5 Test Types:",
          "1. Load Testing: Validates normal peak demand (1,042 RPS).",
          "2. Stress Testing: Pushes beyond peak (1,500-2,500 RPS) to find system breaking points.",
          "3. Spike Testing: Simulates instantaneous 10x surges to verify queue buffering.",
          "4. Soak Testing: Sustains steady load over 12-24 hours to uncover slow memory leaks.",
          "5. Resilience Testing: Injects node failures and AZ network partitions during peak load.",
        ],
        keyPoints: [
          "Compound Growth: 8% monthly growth compounds to 2.5x annual traffic.",
          "Autoscaling Lag: Provision 30%-40% headroom to absorb 3-minute autoscaling delays.",
          "5 Load Test Disciplines: Load, Stress, Spike, Soak, and Resilience.",
          "Realistic Staging: Testing on an under-resourced staging DB gives dangerously false confidence.",
        ],
        diagramType: "load-testing-lifecycle",
        architectDecision:
          "Incorporate continuous load testing into your CI/CD staging pipeline. Run 30-minute automated k6 performance regression tests against staging before promoting major schema or framework upgrades to production.",
        interviewQuestions: [
          {
            q: "Why is soak testing indispensable before a major production launch?",
            a: "Because memory leaks, database connection pool leaks, and unindexed table bloat do not reveal themselves during a 5-minute load test. A 12-to-24-hour soak test exposes gradual resource exhaustion that would otherwise cause a catastrophic outage 3 days after release.",
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
          currentModuleId="requirements"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor(!showAiTutor)}
          aiTutorLabel="Ask Nova System Architect"
        />

        {/* AI Tutor Drawer (if toggled) */}
        {showAiTutor && (
          <div className="mb-8">
            <LearningRo currentTopic="system-design-requirements" />
          </div>
        )}

        {/* Course & Module Hero Banner */}
        <div className="mb-8 rounded-3xl border border-[#e7e3da] bg-white/85 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-orange-50/90 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#ea580c] mb-3">
                <Network size={13} className="text-[#f97316]" />
                <span>System Design Masterclass · Module 2</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#18181b]">
                Requirements Engineering, Constraints, and Capacity Estimation
              </h1>
              <p className="mt-2.5 max-w-3xl text-sm sm:text-base leading-relaxed text-stone-600">
                Determine what the system must achieve and calculate the exact resources needed under expected workloads. Hands-on research, mathematical derivations, load modeling, and capacity specifications.
              </p>
            </div>

            {/* Quick Metadata Stats */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] px-4 py-2.5 text-center">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-400">Duration</span>
                <span className="text-xs sm:text-sm font-bold text-stone-800">2 Weeks (30-40 hrs)</span>
              </div>
              <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] px-4 py-2.5 text-center">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-400">Prerequisite</span>
                <span className="text-xs sm:text-sm font-bold text-stone-800">Module 1 (Arch Thinking)</span>
              </div>
              <div className="rounded-2xl border border-orange-200 bg-orange-50/80 px-4 py-2.5 text-center">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-orange-600">Curricula</span>
                <span className="text-xs sm:text-sm font-bold text-orange-800">Penn State / SRE / ISO 29148</span>
              </div>
            </div>
          </div>

          {/* Module Outcomes Strip */}
          <div className="mt-6 pt-6 border-t border-[#e7e3da]/80 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start gap-2.5 text-xs text-stone-600">
              <CheckCircle2 size={16} className="text-[#f97316] shrink-0 mt-0.5" />
              <span>Elicit requirements across 9 stakeholder classes and 6 investigation paths</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-stone-600">
              <CheckCircle2 size={16} className="text-[#f97316] shrink-0 mt-0.5" />
              <span>Author atomic, testable requirements and traceability matrices (RTM)</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-stone-600">
              <CheckCircle2 size={16} className="text-[#f97316] shrink-0 mt-0.5" />
              <span>Estimate daily volume, average/peak RPS, Little's Law, and N+1 instance fleets</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-stone-600">
              <CheckCircle2 size={16} className="text-[#f97316] shrink-0 mt-0.5" />
              <span>Model database QPS, worker queue slots, CDN egress, and 5 load test suites</span>
            </div>
          </div>
        </div>

        {/* Global Tab Navigation */}
        <div className="mb-6 flex items-center gap-2 border-b border-[#e7e3da] pb-3 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x">
          {[
            { id: "theory", label: "📖 Theory & Lessons (12)", icon: BookOpen },
            { id: "interactive", label: "⚡ Capacity Sizing Simulators", icon: Sliders },
            { id: "qa", label: "❓ Interview Q&A", icon: HelpCircle },
            { id: "assessment", label: "📝 Knowledge Check (6 Questions)", icon: CheckSquare },
            { id: "lab", label: "🏗️ Capstone Specification Project", icon: Terminal },
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
                Module 2 Curriculum (12 Lessons)
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
                    <VisualDiagramComponentModule2 type={activeTopic.diagramType} />
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

                {/* Key Takeaways */}
                <div className="mt-8 rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-5">
                  <h3 className="font-bold text-stone-900 text-sm mb-3 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#f97316]" />
                    <span>Key Architectural Principles</span>
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

        {/* TAB 2: INTERACTIVE CALCULATORS & SIZING SIMULATORS */}
        {activeTab === "interactive" && (
          <div className="space-y-8">
            {/* Calculator 1: Sizing Simulator */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
              <div className="mb-6">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                  End-to-End Sizing Engine
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                  Full Learning Platform Capacity & Fleet Sizing Simulator
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Interactive derivation based on the 250k DAU worked model. Adjust user volumes, peak ratios, and tested benchmark throughput to dynamically compute N+1 compute clusters.
                </p>
              </div>

              {/* Sliders Grid */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
                {/* DAU */}
                <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-4">
                  <div className="flex justify-between items-center text-xs font-bold text-stone-700 mb-2">
                    <span>Daily Active Users (DAU)</span>
                    <span className="text-orange-600 font-mono">{calcDau.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="1000000"
                    step="25000"
                    value={calcDau}
                    onChange={(e) => setCalcDau(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 mt-1">
                    <span>50k</span>
                    <span>500k</span>
                    <span>1M</span>
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
                    min="20"
                    max="150"
                    step="5"
                    value={calcRequestsPerUser}
                    onChange={(e) => setCalcRequestsPerUser(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 mt-1">
                    <span>20</span>
                    <span>80</span>
                    <span>150</span>
                  </div>
                </div>

                {/* Peak Multiplier */}
                <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-4">
                  <div className="flex justify-between items-center text-xs font-bold text-stone-700 mb-2">
                    <span>Peak Surge Multiplier</span>
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
                    <span>6×</span>
                    <span>10×</span>
                  </div>
                </div>

                {/* Tested Instance RPS */}
                <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-4">
                  <div className="flex justify-between items-center text-xs font-bold text-stone-700 mb-2">
                    <span>Tested Benchmark RPS / Instance</span>
                    <span className="text-orange-600 font-mono">{calcInstanceRps} RPS</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="1000"
                    step="50"
                    value={calcInstanceRps}
                    onChange={(e) => setCalcInstanceRps(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 mt-1">
                    <span>100</span>
                    <span>500</span>
                    <span>1,000</span>
                  </div>
                </div>

                {/* Design Utilization Headroom */}
                <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-4">
                  <div className="flex justify-between items-center text-xs font-bold text-stone-700 mb-2">
                    <span>Design Utilization Target</span>
                    <span className="text-orange-600 font-mono">{calcDesignUtilPercent}%</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="90"
                    step="5"
                    value={calcDesignUtilPercent}
                    onChange={(e) => setCalcDesignUtilPercent(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 mt-1">
                    <span>40% (Safe)</span>
                    <span>65% (Balanced)</span>
                    <span>90% (Risky)</span>
                  </div>
                </div>

                {/* Payload size */}
                <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-4">
                  <div className="flex justify-between items-center text-xs font-bold text-stone-700 mb-2">
                    <span>Combined Payload Size</span>
                    <span className="text-orange-600 font-mono">{calcPayloadKb} KB</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="100"
                    step="5"
                    value={calcPayloadKb}
                    onChange={(e) => setCalcPayloadKb(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 mt-1">
                    <span>5 KB</span>
                    <span>50 KB</span>
                    <span>100 KB</span>
                  </div>
                </div>
              </div>

              {/* Calculated Outputs Dashboard */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 mb-6">
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
                    Average Demand
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-stone-900 font-mono mt-1 block">
                    {averageRps} RPS
                  </span>
                  <span className="text-[11px] text-stone-500">86.4k sec/day</span>
                </div>

                <div className="rounded-2xl border border-orange-300 bg-orange-50/80 p-4 text-center shadow-xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 block">
                    Design Peak RPS
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-[#ea580c] font-mono mt-1 block">
                    {peakRps} RPS
                  </span>
                  <span className="text-[11px] text-orange-800 font-medium">{calcPeakMultiplier}× surge</span>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-4 text-center shadow-xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">
                    Daily Egress
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-stone-900 font-mono mt-1 block">
                    {dailyTransferGb} GB
                  </span>
                  <span className="text-[11px] text-stone-500">Peak: {peakTransferMBs} MB/s</span>
                </div>

                <div className="rounded-2xl border-2 border-emerald-400 bg-emerald-50/70 p-4 text-center shadow-xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                    N+1 Resilient Fleet
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-emerald-950 font-mono mt-1 block">
                    {nPlusOneInstances} Instances
                  </span>
                  <span className="text-[11px] text-emerald-800 font-medium">({baseInstancesNeeded} Base + 1 Standby)</span>
                </div>
              </div>

              <div className="rounded-xl bg-[#faf8f4] border border-[#e7e3da] p-4 text-xs text-stone-700 leading-relaxed font-mono">
                Fleet Proof: Each instance design capacity = {calcInstanceRps} RPS × {calcDesignUtilPercent}% ={" "}
                <strong>{designRpsPerInstance} RPS</strong>. If one instance crashes, the remaining{" "}
                <strong>{nPlusOneInstances - 1} instances</strong> sustain a combined{" "}
                <strong>{((nPlusOneInstances - 1) * designRpsPerInstance).toFixed(0)} RPS</strong> (comfortably above the {peakRps} peak target).
              </div>
            </div>

            {/* Calculator 2: Background Queue Sizer */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
              <div className="mb-6">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                  Asynchronous Compute Sizing
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                  Worker Queue & Background Concurrency Simulator
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Calculate required worker concurrency slots based on job arrival velocity and average execution duration.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-3 mb-6">
                <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-4">
                  <div className="flex justify-between items-center text-xs font-bold text-stone-700 mb-2">
                    <span>Job Arrival Rate (Jobs/sec)</span>
                    <span className="text-orange-600 font-mono">{queueArrivalRps} jobs/s</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    step="1"
                    value={queueArrivalRps}
                    onChange={(e) => setQueueArrivalRps(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                </div>

                <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-4">
                  <div className="flex justify-between items-center text-xs font-bold text-stone-700 mb-2">
                    <span>Avg Execution Duration (Sec)</span>
                    <span className="text-orange-600 font-mono">{queueDurationSec}s</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="10.0"
                    step="0.5"
                    value={queueDurationSec}
                    onChange={(e) => setQueueDurationSec(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                </div>

                <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-4">
                  <div className="flex justify-between items-center text-xs font-bold text-stone-700 mb-2">
                    <span>Worker Max Target Utilization</span>
                    <span className="text-orange-600 font-mono">{queueUtilPercent}%</span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="80"
                    step="5"
                    value={queueUtilPercent}
                    onChange={(e) => setQueueUtilPercent(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-stone-900 bg-stone-900 p-6 text-white flex flex-wrap items-center justify-between gap-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400">
                    Queue Worker Sizing Derivation
                  </span>
                  <div className="text-xl sm:text-2xl font-black font-mono mt-1">
                    {queueArrivalRps} jobs/s × {queueDurationSec}s = {averageJobsInProgress} in flight →{" "}
                    <span className="text-[#f97316]">{requiredWorkerSlots} Concurrency Slots</span>
                  </div>
                  <p className="text-xs text-stone-400 mt-1">
                    Provision at least {requiredWorkerSlots} execution slots to process jobs within target delays and drain backlogs after outages.
                  </p>
                </div>
              </div>
            </div>

            {/* Calculator 3: Compound Growth Forecaster */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
              <div className="mb-6">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                  Traffic Projection Engine
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                  Compound Traffic Growth Forecaster: <span className="font-mono">D_n = D_0 × (1 + g)^n</span>
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Model organic growth over monthly horizons to project when cloud service quotas and database capacity limits will be breached.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-3 mb-6">
                <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-4">
                  <div className="flex justify-between items-center text-xs font-bold text-stone-700 mb-2">
                    <span>Baseline Requests / Day</span>
                    <span className="text-orange-600 font-mono">{growthInitialReqs}M / day</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="50"
                    step="5"
                    value={growthInitialReqs}
                    onChange={(e) => setGrowthInitialReqs(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                </div>

                <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-4">
                  <div className="flex justify-between items-center text-xs font-bold text-stone-700 mb-2">
                    <span>Monthly Growth Rate (%)</span>
                    <span className="text-orange-600 font-mono">{growthRateMonthly}%</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="25"
                    step="1"
                    value={growthRateMonthly}
                    onChange={(e) => setGrowthRateMonthly(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                </div>

                <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-4">
                  <div className="flex justify-between items-center text-xs font-bold text-stone-700 mb-2">
                    <span>Planning Horizon (Months)</span>
                    <span className="text-orange-600 font-mono">{growthHorizonMonths} Months</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="24"
                    step="3"
                    value={growthHorizonMonths}
                    onChange={(e) => setGrowthHorizonMonths(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-stone-200 bg-white p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">
                    Compound Growth Factor
                  </span>
                  <span className="text-2xl font-black text-stone-900 font-mono mt-1 block">
                    {compoundMultiplier}×
                  </span>
                  <span className="text-xs text-stone-500">Growth multiplier after {growthHorizonMonths} months</span>
                </div>

                <div className="rounded-2xl border border-orange-200 bg-orange-50/80 p-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 block">
                    Projected Daily Traffic
                  </span>
                  <span className="text-2xl font-black text-[#ea580c] font-mono mt-1 block">
                    {projectedDailyReqs} Million Reqs / day
                  </span>
                  <span className="text-xs text-orange-900">Requires updating cloud quotas and DB read replicas</span>
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
                Module 2 Interview Questions & Systems Defense
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Rigorous questions covering requirements scoping, SLA/SLO/RTO/RPO, Little's Law, and N+1 capacity models.
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

        {/* TAB 4: ASSESSMENT / KNOWLEDGE CHECK (6 Questions from prompt) */}
        {activeTab === "assessment" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
            <div className="mb-6 border-b border-[#e7e3da] pb-4 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                  Interactive Knowledge Check
                </span>
                <h2 className="text-2xl font-bold text-[#18181b] mt-1">
                  Module 2 Assessment: 6 Core Engineering Questions
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Validate your requirements engineering and capacity estimation knowledge before proceeding to Module 3.
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

        {/* TAB 5: PRACTICAL CAPSTONE PROJECT */}
        {activeTab === "lab" && (
          <div className="space-y-8">
            <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
              <div className="mb-6">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                  Hands-On Capstone Assignment
                </span>
                <h2 className="text-2xl font-bold text-[#18181b] mt-1">
                  Practical Project — Requirements & Capacity Specification for PrepSpaces
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Produce a complete requirements and capacity specification for a production learning platform with courses, progress tracking, assignments, and file delivery.
                </p>
              </div>

              {/* 5 Phases */}
              <div className="space-y-6">
                {[
                  {
                    phase: "Phase 1 — Requirements Discovery",
                    items: [
                      "Write at least 10 functional requirements with observable system outputs.",
                      "Define 8 non-functional requirements (p95 latency, 99.9% availability, durability, security).",
                      "Document 5 business and technical constraints (Node.js runtime, PostgreSQL, GDPR).",
                      "Record 5 explicit assumptions with validation methods and scheduled review dates.",
                      "Identify 5 external dependencies (S3, SendGrid, Auth) with failure fallbacks.",
                    ],
                  },
                  {
                    phase: "Phase 2 — Requirements Specification Table",
                    items: [
                      "Assign stable unique IDs (FR-01, NFR-01, SEC-01).",
                      "Write atomic testable requirement statements (ISO 29148:2018).",
                      "Define Given-When-Then acceptance criteria for each major feature.",
                      "Map verification method (Test, Analysis, Demonstration, or Inspection).",
                    ],
                  },
                  {
                    phase: "Phase 3 — Workload Model & Sizing",
                    items: [
                      "Baseline: 250,000 DAU, 60 requests/user/day = 15M daily requests.",
                      "Peak RPS: 1,042 Peak RPS target based on 6x multiplier.",
                      "Traffic breakdown: 55% Reads, 25% Auth, 15% Writes, 5% Assignments.",
                      "Calculate Little's Law concurrency (261 in-flight requests at 250ms latency).",
                      "Calculate daily network transfer (300 GB/day) and storage growth (1.23 TB/year).",
                    ],
                  },
                  {
                    phase: "Phase 4 — Resource & Cost Model",
                    items: [
                      "Compute Fleet: Size 8 instances for N+1 single instance failure tolerance.",
                      "Database Sizing: Estimate peak read QPS, transactional write QPS, and connection pools.",
                      "Queue Sizing: Provision 27 worker concurrency slots for background BullMQ jobs.",
                      "Storage Sizing: Direct S3 uploads + CloudFront CDN edge caching.",
                    ],
                  },
                  {
                    phase: "Phase 5 — Validation Plan",
                    items: [
                      "Load Testing: Validate normal 1,042 RPS peak.",
                      "Stress Testing: Push to 2,000+ RPS to identify breaking points.",
                      "Spike Testing: Inject 10x instant burst to verify queue buffering.",
                      "Soak Testing: Run 24-hour test to verify zero memory or connection leaks.",
                      "Chaos Drill: Terminate 1 instance during peak load to verify N+1 survivability.",
                    ],
                  },
                ].map((sec, idx) => (
                  <div key={idx} className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-5">
                    <h3 className="font-bold text-sm sm:text-base text-stone-900 mb-3 flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#f97316] text-white font-mono text-xs font-bold">
                        {idx + 1}
                      </span>
                      <span>{sec.phase}</span>
                    </h3>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-stone-700 pl-8">
                      {sec.items.map((it, ii) => (
                        <li key={ii} className="flex items-start gap-2">
                          <span className="text-[#f97316] font-bold">•</span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
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
                University Syllabi & Industry Reading List
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Primary university courses, standards, and engineering frameworks supporting Module 2.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  institution: "Penn State University",
                  code: "SWENG 886",
                  title: "Requirements Engineering",
                  focus: "Elicitation, formal validation, traceability, agile requirements, and value-driven trade-offs.",
                  href: "https://sites.psu.edu/gvwc/course/sweng-886-requirements-engineering/",
                  linkText: "sites.psu.edu/gvwc",
                },
                {
                  institution: "UT Dallas",
                  code: "SE / CS 6361",
                  title: "Advanced Requirements Engineering",
                  focus: "Systematic analysis of software-intensive systems, functional vs non-functional modeling.",
                  href: "https://personal.utdallas.edu/~chung/RE/syllabus.htm",
                  linkText: "personal.utdallas.edu",
                },
                {
                  institution: "University of Kentucky",
                  code: "CS 585",
                  title: "Requirements Engineering",
                  focus: "Elicitation, specification, analysis, prioritization, verification, and change management.",
                  href: "https://selab.netlab.uky.edu/homepage/CS585-617-Spr2019-Syllabus.html",
                  linkText: "selab.netlab.uky.edu",
                },
                {
                  institution: "ISO / IEC / IEEE",
                  code: "ISO 29148:2018",
                  title: "Systems & Software Engineering",
                  focus: "International standard for requirements processes and information products across the lifecycle.",
                  href: "https://www.iso.org/standard/72089.html",
                  linkText: "iso.org/standard/72089",
                },
                {
                  institution: "Google SRE",
                  code: "Chapter 18",
                  title: "Software Engineering in SRE",
                  focus: "Capacity planning, organic vs launch demand forecasts, and relating infrastructure to service capacity.",
                  href: "https://sre.google/sre-book/service-best-practices/",
                  linkText: "sre.google/sre-book",
                },
                {
                  institution: "Google Cloud",
                  code: "Perf Pillar",
                  title: "Plan Resource Allocation",
                  focus: "Translating granular performance needs, user demand, and data volumes into cloud resources.",
                  href: "https://docs.cloud.google.com/architecture/framework/performance-optimization/plan-resource-allocation",
                  linkText: "docs.cloud.google.com",
                },
                {
                  institution: "AWS Architecture",
                  code: "Well-Architected",
                  title: "Load Testing Best Practices",
                  focus: "Realistic workload generation, bottleneck analysis, and repeatable capacity validation.",
                  href: "https://docs.aws.amazon.com/wellarchitected/latest/performance-efficiency-pillar/perf_process_culture_load_test.html",
                  linkText: "docs.aws.amazon.com",
                },
                {
                  institution: "Microsoft Azure",
                  code: "Azure CAF",
                  title: "Capacity Planning and Scaling",
                  focus: "Scaling, partitioning, production-like testing, and shared dependency saturation limits.",
                  href: "https://learn.microsoft.com/en-us/azure/architecture/framework/scalability/capacity",
                  linkText: "learn.microsoft.com",
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
                    <h3 className="font-bold text-stone-900 text-sm group-hover:text-[#f97316] transition-colors">
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
                  Module 3: APIs, Communication Protocols, Networking, and Request Lifecycles
                </span>
                <span className="text-xs text-stone-600 block mt-0.5">
                  Deep dive into TCP, UDP, TLS 1.3, HTTP/2 & HTTP/3, REST, gRPC, WebSockets, idempotency keys, and distributed tracing.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab("assessment")}
                  className="flex items-center gap-1.5 rounded-xl border border-orange-300 bg-white px-3.5 py-2 text-xs font-bold text-orange-700 hover:bg-orange-50 transition cursor-pointer"
                >
                  <span>Take Module 2 Quiz</span>
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/learning/system-design/networking")}
                  className="flex items-center gap-1.5 rounded-xl bg-[#f97316] px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#ea580c] transition cursor-pointer"
                >
                  <span>Start Module 3</span>
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
