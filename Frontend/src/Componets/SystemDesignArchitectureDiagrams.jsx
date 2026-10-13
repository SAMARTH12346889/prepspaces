import React, { useState } from "react";

/* -------------------------------------------------------------------------- */
/* 1. DEPLOYMENT VS CODE BOUNDARIES DIAGRAM                                   */
/* -------------------------------------------------------------------------- */
export function DeploymentVsCodeBoundariesDiagram() {
  const [activeStyle, setActiveStyle] = useState("modular-monolith");

  const architectures = {
    monolith: {
      title: "Traditional Monolith",
      deployment: "Single Artifact (e.g. 1 Docker container / server process)",
      internalStructure: "Often tightly coupled code without enforced boundary encapsulation",
      communication: "Direct in-memory function calls",
      dataStore: "Single central database accessed indiscriminately by any class/module",
      color: "border-stone-400 bg-stone-50",
      accent: "text-stone-700",
      pros: ["Zero network latency between components", "Simple ACID transactions across tables", "Single deployment pipeline"],
      cons: ["High blast radius: one bug can crash entire runtime", "High coupling makes changes risky", "Scaling requires scaling entire monolith"],
    },
    "modular-monolith": {
      title: "Modular Monolith (Recommended Default)",
      deployment: "Single Artifact (1 deployable runtime unit)",
      internalStructure: "Strict internal domain boundaries with explicit public APIs / facades",
      communication: "In-process method calls via declared interfaces (no network latency)",
      dataStore: "Logical schema separation (each module strictly owns its tables/aggregates)",
      color: "border-orange-500 bg-orange-50/50",
      accent: "text-orange-700",
      pros: ["Zero network/RPC serialization overhead", "Clean code organization & high maintainability", "Option to extract services later without rewriting domain logic"],
      cons: ["Still shares deployment unit (releases deploy together)", "Requires architectural discipline to prevent boundary leaking"],
    },
    microservices: {
      title: "Microservices Architecture",
      deployment: "Multiple Artifacts (e.g. 5+ independent containers with dedicated pipelines)",
      internalStructure: "Physically isolated services aligned with bounded contexts",
      communication: "Network RPC / REST / gRPC or Asynchronous Event Bus (Kafka/RabbitMQ)",
      dataStore: "Strict Database-per-Service (no direct cross-database queries allowed)",
      color: "border-amber-500 bg-amber-50/50",
      accent: "text-amber-800",
      pros: ["Independent deployment & autoscaling per workload", "Fault isolation across processes", "Autonomous team ownership"],
      cons: ["Network latency & partial failure modes", "Distributed data consistency (Sagas/eventual consistency)", "High operational complexity (tracing, discovery, mesh)"],
    },
  };

  const current = architectures[activeStyle];

  return (
    <div className="rounded-2xl border border-[#e7e3da] bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
            Architecture Blueprint
          </span>
          <h4 className="font-bold text-stone-900 text-sm">Deployment Unit vs Code Boundaries</h4>
        </div>
        <div className="flex items-center gap-1.5 bg-stone-100 p-1 rounded-xl">
          {["monolith", "modular-monolith", "microservices"].map((style) => (
            <button
              key={style}
              onClick={() => setActiveStyle(style)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                activeStyle === style
                  ? "bg-[#f97316] text-white shadow-xs"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              {style === "monolith" ? "Monolith" : style === "modular-monolith" ? "Modular Monolith" : "Microservices"}
            </button>
          ))}
        </div>
      </div>

      {/* Visual Architectural Canvas */}
      <div className="rounded-xl border border-[#e7e3da] bg-[#faf8f4] p-4 mb-4">
        {activeStyle === "monolith" && (
          <div className="flex flex-col items-center">
            <div className="w-full max-w-lg rounded-xl border-2 border-stone-400 bg-white p-4 shadow-sm text-center">
              <span className="text-xs font-mono font-bold text-stone-600 uppercase tracking-wider block mb-2">
                Single Deployment Boundary (All in 1 Process)
              </span>
              <div className="grid grid-cols-3 gap-2 text-xs font-semibold text-stone-700">
                <div className="p-2.5 rounded-lg bg-stone-100 border border-stone-200">Courses</div>
                <div className="p-2.5 rounded-lg bg-stone-100 border border-stone-200">Assessments</div>
                <div className="p-2.5 rounded-lg bg-stone-100 border border-stone-200">Interviews</div>
              </div>
              <div className="mt-2 text-[11px] text-stone-400 font-mono italic">
                Direct cross-calling without enforced interface rules
              </div>
            </div>
            <div className="my-2 text-stone-400 font-mono text-xs">↓ Direct DB Connections</div>
            <div className="w-full max-w-sm rounded-xl border border-stone-300 bg-stone-100 p-2.5 text-center text-xs font-bold text-stone-700">
              Central Database (Shared Tables: courses, attempts, users, interviews)
            </div>
          </div>
        )}

        {activeStyle === "modular-monolith" && (
          <div className="flex flex-col items-center">
            <div className="w-full max-w-xl rounded-xl border-2 border-orange-500 bg-white p-4 shadow-sm">
              <div className="flex justify-between items-center mb-3 border-b border-orange-100 pb-2">
                <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                  Single Deployable Application Unit (0 Network Overhead)
                </span>
                <span className="text-[10px] bg-orange-100 text-orange-800 font-bold px-2 py-0.5 rounded">
                  In-Memory Fast
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3 text-xs font-semibold">
                <div className="p-3 rounded-xl bg-orange-50/70 border border-orange-200 text-stone-800 flex flex-col">
                  <span className="font-bold text-orange-900">Module: Courses</span>
                  <span className="text-[10px] font-mono text-stone-500 mt-1">Export: CourseCatalogApi</span>
                  <span className="text-[9px] text-orange-700 mt-auto pt-2">Encapsulated Logic</span>
                </div>
                <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-stone-800 flex flex-col">
                  <span className="font-bold text-amber-900">Module: Assessment</span>
                  <span className="text-[10px] font-mono text-stone-500 mt-1">Export: QuizEngineApi</span>
                  <span className="text-[9px] text-amber-700 mt-auto pt-2">Encapsulated Logic</span>
                </div>
                <div className="p-3 rounded-xl bg-stone-100 border border-stone-300 text-stone-800 flex flex-col">
                  <span className="font-bold text-stone-900">Module: Interview</span>
                  <span className="text-[10px] font-mono text-stone-500 mt-1">Export: InterviewSessionApi</span>
                  <span className="text-[9px] text-stone-600 mt-auto pt-2">Encapsulated Logic</span>
                </div>
              </div>
              <div className="mt-3 text-center text-[11px] font-semibold text-stone-500">
                Inter-module calls traverse strictly defined In-Memory Interfaces / Domain Events
              </div>
            </div>
            <div className="my-2 text-orange-600 font-mono text-xs">↓ Scoped Schema Access</div>
            <div className="w-full max-w-md rounded-xl border border-stone-300 bg-white p-2.5 text-center text-xs font-semibold text-stone-700">
              PostgreSQL Database with Module-Owned Schemas (courses.*, assessment.*, interview.*)
            </div>
          </div>
        )}

        {activeStyle === "microservices" && (
          <div className="flex flex-col items-center">
            <div className="w-full max-w-xl grid grid-cols-3 gap-3">
              <div className="rounded-xl border-2 border-stone-800 bg-white p-3 text-center shadow-xs">
                <span className="text-[10px] font-mono uppercase font-bold text-orange-600 block">Service A</span>
                <span className="text-xs font-bold text-stone-900 block mt-0.5">Course Service</span>
                <span className="text-[10px] text-stone-500 block">HTTP/gRPC API</span>
                <div className="mt-2 pt-2 border-t border-stone-200 text-[10px] font-mono text-stone-600">
                  DB: courses_db
                </div>
              </div>
              <div className="rounded-xl border-2 border-amber-600 bg-white p-3 text-center shadow-xs">
                <span className="text-[10px] font-mono uppercase font-bold text-amber-600 block">Service B</span>
                <span className="text-xs font-bold text-stone-900 block mt-0.5">Assessment Service</span>
                <span className="text-[10px] text-stone-500 block">HTTP/gRPC API</span>
                <div className="mt-2 pt-2 border-t border-stone-200 text-[10px] font-mono text-stone-600">
                  DB: assessment_db
                </div>
              </div>
              <div className="rounded-xl border-2 border-stone-600 bg-white p-3 text-center shadow-xs">
                <span className="text-[10px] font-mono uppercase font-bold text-stone-600 block">Service C</span>
                <span className="text-xs font-bold text-stone-900 block mt-0.5">Interview Service</span>
                <span className="text-[10px] text-stone-500 block">GPU Autoscale</span>
                <div className="mt-2 pt-2 border-t border-stone-200 text-[10px] font-mono text-stone-600">
                  DB: interview_db
                </div>
              </div>
            </div>
            <div className="my-2 text-stone-500 font-mono text-xs text-center">
              ↕ Asynchronous Event Broker (Kafka) & Service Mesh (Envoy/gRPC) ↕
            </div>
            <div className="w-full max-w-lg rounded-xl border border-stone-300 bg-stone-100 p-2.5 text-center text-xs font-semibold text-stone-600">
              Database-Per-Service: Strict Isolation, Eventual Consistency via Sagas / Outbox
            </div>
          </div>
        )}
      </div>

      {/* Analysis Details */}
      <div className={`rounded-xl border p-4 ${current.color}`}>
        <h5 className={`font-bold text-sm mb-1 ${current.accent}`}>{current.title} Analysis</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs mt-2">
          <div>
            <span className="font-bold text-stone-800 block mb-1">Architectural Characteristics:</span>
            <ul className="list-disc list-inside space-y-1 text-stone-600">
              <li><strong className="text-stone-700">Deployment:</strong> {current.deployment}</li>
              <li><strong className="text-stone-700">Internal:</strong> {current.internalStructure}</li>
              <li><strong className="text-stone-700">Communication:</strong> {current.communication}</li>
              <li><strong className="text-stone-700">Persistence:</strong> {current.dataStore}</li>
            </ul>
          </div>
          <div>
            <span className="font-bold text-emerald-700 block mb-1">Key Strengths:</span>
            <ul className="list-disc list-inside space-y-0.5 text-stone-600 mb-2">
              {current.pros.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
            <span className="font-bold text-rose-700 block mb-1">Inherent Trade-Offs:</span>
            <ul className="list-disc list-inside space-y-0.5 text-stone-600">
              {current.cons.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. MODULAR MONOLITH HEXAGONAL ARCHITECTURE DIAGRAM                         */
/* -------------------------------------------------------------------------- */
export function ModularMonolithHexagonalDiagram() {
  const [selectedLayer, setSelectedLayer] = useState("domain");

  const layers = {
    inbound: {
      name: "Inbound Adapters (Driving)",
      components: "REST Controllers, GraphQL Resolvers, CLI Commands, Event Subscribers",
      role: "Translates external HTTP requests or messages into typed module command objects. Never contains core business rules.",
      example: "CourseController.getCourseById(req.params.id) -> CourseQueryService.fetch(id)",
      bg: "bg-blue-50 border-blue-200 text-blue-900",
    },
    usecases: {
      name: "Application Services / Use Cases",
      components: "CourseEnrollmentHandler, SubmitQuizUseCase, GenerateInterviewSession",
      role: "Coordinates workflows, manages transactions, invokes domain entities, and triggers domain events.",
      example: "EnrollStudentUseCase: verify capacity, deduct credit, save enrollment, dispatch StudentEnrolledEvent",
      bg: "bg-amber-50 border-amber-200 text-amber-900",
    },
    domain: {
      name: "Core Domain & Business Invariants",
      components: "Entities, Value Objects, Domain Invariants, Domain Rules",
      role: "The heart of the module. Completely pure and framework-agnostic. Contains core business equations and validity rules.",
      example: "Course.canStudentEnroll(student) -> Checks prerequisite compliance without DB calls",
      bg: "bg-orange-50 border-orange-300 text-orange-950",
    },
    outbound: {
      name: "Outbound Adapters (Driven / SPI)",
      components: "PostgresCourseRepository, S3AssetStore, StripeBillingClient, KafkaEventPublisher",
      role: "Implements the abstract repository/port interfaces defined by the core domain using specific databases and infrastructure.",
      example: "PostgresCourseRepository implements CourseRepositoryPort via Prisma/TypeORM/Knex",
      bg: "bg-stone-100 border-stone-300 text-stone-900",
    },
  };

  const active = layers[selectedLayer];

  return (
    <div className="rounded-2xl border border-[#e7e3da] bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
            Inside the Module Boundary
          </span>
          <h4 className="font-bold text-stone-900 text-sm">Hexagonal / Ports & Adapters Architecture</h4>
        </div>
        <div className="text-xs font-medium text-stone-500">
          Click any layer to inspect interface enforcement
        </div>
      </div>

      {/* Interactive Layer Visual */}
      <div className="flex flex-col gap-2 max-w-xl mx-auto mb-4">
        {Object.entries(layers).map(([key, data]) => {
          const isSelected = selectedLayer === key;
          return (
            <button
              key={key}
              onClick={() => setSelectedLayer(key)}
              className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                isSelected
                  ? `${data.bg} border-2 shadow-xs scale-[1.01]`
                  : "bg-white border-[#e7e3da] hover:bg-stone-50 text-stone-700"
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="font-bold text-xs sm:text-sm">{data.name}</span>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/70 border border-stone-200">
                  {key}
                </span>
              </div>
              <div className="text-[11px] text-stone-500 mt-1 font-mono truncate">{data.components}</div>
            </button>
          );
        })}
      </div>

      {/* Layer Detail Card */}
      <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-4 text-xs">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="font-mono text-orange-600 font-bold uppercase text-[10px]">Active Focus:</span>
          <span className="font-bold text-stone-900">{active.name}</span>
        </div>
        <p className="text-stone-600 leading-relaxed mb-2">{active.role}</p>
        <div className="rounded-lg bg-white border border-stone-200 p-2 font-mono text-[11px] text-stone-800">
          <span className="text-stone-400">// Practical implementation</span>
          <div className="text-orange-700 font-bold mt-0.5">{active.example}</div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 3. THE DISTRIBUTED MONOLITH ANTI-PATTERN DIAGRAM                           */
/* -------------------------------------------------------------------------- */
export function DistributedMonolithAntiPatternDiagram() {
  const [showFailureMode, setShowFailureMode] = useState(false);

  return (
    <div className="rounded-2xl border border-rose-200 bg-rose-50/30 p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-rose-200/60 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-rose-600 font-bold block">
            Anti-Pattern Warning
          </span>
          <h4 className="font-bold text-stone-900 text-sm">The Distributed Monolith Trap</h4>
        </div>
        <button
          onClick={() => setShowFailureMode(!showFailureMode)}
          className={`px-3 py-1.5 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
            showFailureMode
              ? "bg-rose-600 text-white border-rose-700"
              : "bg-white text-rose-700 border-rose-300 hover:bg-rose-50"
          }`}
        >
          {showFailureMode ? "Showing: Cascading Failure" : "Simulate Outage Cascading"}
        </button>
      </div>

      <div className="rounded-xl border border-stone-200 bg-white p-4 mb-4">
        <div className="text-xs text-stone-600 mb-3 leading-relaxed">
          A distributed monolith occurs when a system has the <strong>operational distribution</strong> of microservices
          (network latency, partial failures, multiple deployments) but retains the <strong>tight coupling</strong> of a monolith
          (shared database tables, synchronized lockstep deployments, synchronous daisy chains).
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center my-4">
          <div
            className={`p-3 rounded-xl border transition-all ${
              showFailureMode
                ? "bg-rose-100 border-rose-400 text-rose-900"
                : "bg-stone-50 border-stone-200 text-stone-800"
            }`}
          >
            <span className="text-[10px] font-mono font-bold text-stone-500 block">Service 1</span>
            <span className="font-bold text-xs block">Course API</span>
            <span className="text-[10px] text-stone-500 mt-1 block">
              {showFailureMode ? "🚨 Timed out waiting for Auth" : "Sync HTTP GET /auth/check"}
            </span>
          </div>

          <div
            className={`p-3 rounded-xl border transition-all ${
              showFailureMode
                ? "bg-rose-200 border-rose-500 text-rose-950 scale-105"
                : "bg-stone-50 border-stone-200 text-stone-800"
            }`}
          >
            <span className="text-[10px] font-mono font-bold text-stone-500 block">Service 2 (Point of Failure)</span>
            <span className="font-bold text-xs block">Auth & User Service</span>
            <span className="text-[10px] text-rose-700 mt-1 block font-bold">
              {showFailureMode ? "💥 CPU 100% / DB Connection Pool Exhausted" : "Locking shared user table"}
            </span>
          </div>

          <div
            className={`p-3 rounded-xl border transition-all ${
              showFailureMode
                ? "bg-rose-100 border-rose-400 text-rose-900"
                : "bg-stone-50 border-stone-200 text-stone-800"
            }`}
          >
            <span className="text-[10px] font-mono font-bold text-stone-500 block">Service 3</span>
            <span className="font-bold text-xs block">Interview Service</span>
            <span className="text-[10px] text-stone-500 mt-1 block">
              {showFailureMode ? "🚨 Broken due to User table schema migration" : "Direct SELECT on users table"}
            </span>
          </div>
        </div>

        {/* Central Shared Database Anti-Pattern */}
        <div className="rounded-xl border-2 border-dashed border-rose-300 bg-rose-50/50 p-3 text-center">
          <span className="font-mono text-xs font-bold text-rose-800 block">
            ⚠️ The Root Cause: Shared PostgreSQL Database
          </span>
          <span className="text-[11px] text-rose-700 mt-0.5 block">
            All 3 &quot;services&quot; read and write directly to the same database tables. A schema change in one service crashes the other two.
          </span>
        </div>
      </div>

      <div className="text-xs text-stone-600 bg-white/80 rounded-xl p-3 border border-rose-200 flex items-start gap-2">
        <span className="text-rose-600 font-bold">Key Takeaway:</span>
        <span>
          If deploying Service A requires deploying Service B simultaneously, or changing a database column breaks unrelated services,
          you have a distributed monolith. You suffer all microservice costs with none of the benefits.
        </span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 4. DOMAIN-DRIVEN DESIGN (DDD) BOUNDED CONTEXTS DIAGRAM                     */
/* -------------------------------------------------------------------------- */
export function DddBoundedContextsDiagram() {
  const [selectedContext, setSelectedContext] = useState("course");

  const contexts = {
    course: {
      name: "Course Catalog Bounded Context",
      ubiquitousLanguage: {
        "Course": "An authored learning curriculum with modules, lessons, and prerequisites.",
        "Author": "A domain expert creating educational material.",
        "Module": "A sequential educational unit with learning objectives.",
      },
      ownsData: "Courses, Modules, Lessons, SystemDesignMaterials",
      doesNotOwn: "Student progress or billing state",
      interface: "CourseCatalogQueryService (Read-only catalog for other contexts)",
      color: "border-orange-300 bg-orange-50/70",
    },
    enrollment: {
      name: "Enrollment & Progress Bounded Context",
      ubiquitousLanguage: {
        "Course": "An active learning commitment with completed lesson IDs and completion percentage.",
        "Learner": "A user actively consuming lessons and submitting exercises.",
        "ProgressRecord": "Timestamped record of completed units.",
      },
      ownsData: "Enrollments, ProgressCheckpoints, CompletionCertificates",
      doesNotOwn: "Course lesson content or editorial text",
      interface: "ProgressCommandService (Records completions, evaluates certificates)",
      color: "border-amber-300 bg-amber-50/70",
    },
    interview: {
      name: "AI Interview Bounded Context",
      ubiquitousLanguage: {
        "Session": "A live interactive simulation with audio transcription and LLM prompts.",
        "Candidate": "An examinee answering architectural questions.",
        "RubricScore": "Quantitative evaluation across 5 engineering dimensions.",
      },
      ownsData: "InterviewSessions, AudioTranscripts, EvaluationRubrics",
      doesNotOwn: "Course curriculum or user billing credentials",
      interface: "InterviewOrchestratorApi (Executes AI evaluations asynchronously)",
      color: "border-stone-400 bg-stone-100",
    },
  };

  const active = contexts[selectedContext];

  return (
    <div className="rounded-2xl border border-[#e7e3da] bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
            Domain Modeling
          </span>
          <h4 className="font-bold text-stone-900 text-sm">Bounded Contexts & Ubiquitous Language</h4>
        </div>
        <div className="flex gap-1.5 bg-stone-100 p-1 rounded-xl">
          {Object.keys(contexts).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedContext(key)}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                selectedContext === key
                  ? "bg-[#f97316] text-white shadow-xs"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              {key === "course" ? "Course Catalog" : key === "enrollment" ? "Enrollment & Progress" : "AI Interview"}
            </button>
          ))}
        </div>
      </div>

      <div className="text-xs text-stone-600 mb-4 leading-relaxed">
        In Domain-Driven Design (DDD), a <strong>Bounded Context</strong> defines the boundary within which a specific domain model and its <em>Ubiquitous Language</em> apply.
        Notice how the term &quot;<strong>Course</strong>&quot; means completely different things in different contexts:
      </div>

      <div className={`rounded-xl border p-4 mb-4 ${active.color}`}>
        <h5 className="font-bold text-sm text-stone-900 mb-2">{active.name}</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div>
            <span className="font-bold text-stone-800 block mb-1">Ubiquitous Language Meanings:</span>
            <div className="space-y-1.5 font-mono text-[11px]">
              {Object.entries(active.ubiquitousLanguage).map(([term, def]) => (
                <div key={term} className="bg-white/80 p-2 rounded-lg border border-stone-200">
                  <strong className="text-orange-700">{term}:</strong> {def}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <span className="font-bold text-emerald-800 block">Strictly Owns Data:</span>
              <span className="text-stone-700">{active.ownsData}</span>
            </div>
            <div>
              <span className="font-bold text-rose-800 block">Explicitly Does NOT Own:</span>
              <span className="text-stone-700">{active.doesNotOwn}</span>
            </div>
            <div>
              <span className="font-bold text-stone-800 block">Exposed Interface:</span>
              <span className="font-mono text-[11px] text-stone-600 bg-white/80 p-1.5 rounded border border-stone-200 block">
                {active.interface}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 5. DATA OWNERSHIP & OUTBOX PATTERN DIAGRAM                                 */
/* -------------------------------------------------------------------------- */
export function DataOwnershipOutboxDiagram() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: "1. Local Database Transaction",
      detail:
        "The application writes business entity changes AND an event record into an 'outbox' table within the EXACT SAME local SQL transaction. This guarantees that either both succeed or both rollback.",
      code: "BEGIN;\nINSERT INTO enrollments (user_id, course_id) VALUES ('u1', 'c1');\nINSERT INTO outbox (topic, payload) VALUES ('student_enrolled', '{\"userId\":\"u1\"}');\nCOMMIT;",
    },
    {
      step: 2,
      title: "2. Outbox Relay / CDC Worker",
      detail:
        "A background process (e.g. Debezium reading Postgres Write-Ahead Logs, or a polling daemon) reads uncommitted/new outbox rows and dispatches them to the message broker.",
      code: "OutboxRelay: Polling SELECT * FROM outbox WHERE published = false ORDER BY id ASC FOR UPDATE SKIP LOCKED;",
    },
    {
      step: 3,
      title: "3. Asynchronous Broker Event Delivery",
      detail:
        "Message broker (Kafka / RabbitMQ) reliably delivers the event to subscribing downstream services (Notification service, Analytics service).",
      code: "Kafka: Topic 'course.events.student-enrolled' partition 0 committed offset 1042.",
    },
    {
      step: 4,
      title: "4. Idempotent Consumer Processing",
      detail:
        "Downstream services consume the event and update their private databases. Consumers track processed message IDs to handle at-least-once duplicate deliveries safely.",
      code: "Consumer: IF NOT EXISTS (SELECT 1 FROM processed_events WHERE id = event.id) THEN ...",
    },
  ];

  return (
    <div className="rounded-2xl border border-[#e7e3da] bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
            Distributed Reliability
          </span>
          <h4 className="font-bold text-stone-900 text-sm">Transactional Outbox Pattern (Dual-Write Prevention)</h4>
        </div>
        <div className="flex gap-1.5">
          {steps.map((s) => (
            <button
              key={s.step}
              onClick={() => setActiveStep(s.step)}
              className={`h-7 w-7 rounded-lg text-xs font-bold transition-all ${
                activeStep === s.step
                  ? "bg-[#f97316] text-white shadow-xs"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              {s.step}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-4 mb-3">
        <h5 className="font-bold text-stone-900 text-xs sm:text-sm mb-1">{steps[activeStep - 1].title}</h5>
        <p className="text-xs text-stone-600 mb-3 leading-relaxed">{steps[activeStep - 1].detail}</p>
        <div className="rounded-lg bg-stone-900 p-3 text-[11px] font-mono text-amber-300 overflow-x-auto whitespace-pre">
          {steps[activeStep - 1].code}
        </div>
      </div>

      <div className="text-[11px] text-stone-500 font-medium">
        💡 <strong>Why this matters:</strong> Never do a dual-write (e.g., updating DB then calling Kafka) in application code without an outbox. If the network dies after the DB commit but before Kafka send, state becomes permanently inconsistent.
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 6. STRANGLER FIG INCREMENTAL MIGRATION DIAGRAM                             */
/* -------------------------------------------------------------------------- */
export function StranglerFigMigrationDiagram() {
  const [stage, setStage] = useState(2);

  const stages = [
    {
      id: 1,
      title: "Stage 1: Monolith Only",
      trafficMonolith: 100,
      trafficNewService: 0,
      desc: "All traffic routes through the monolithic application. Assessment and AI interview code live internally.",
    },
    {
      id: 2,
      title: "Stage 2: Introduce Reverse Proxy & Intercept",
      trafficMonolith: 95,
      trafficNewService: 5,
      desc: "An API gateway or NGINX/Envoy reverse proxy sits in front. Selected 5% of read-only interview traffic routes to the newly extracted service (Canary test).",
    },
    {
      id: 3,
      title: "Stage 3: Progressive Traffic Shift & Dual-Writing",
      trafficMonolith: 40,
      trafficNewService: 60,
      desc: "60% of interview requests execute on the new microservice. Dual-writing or CDC reconciles database state between legacy and new stores.",
    },
    {
      id: 4,
      title: "Stage 4: Full Cutover",
      trafficMonolith: 0,
      trafficNewService: 100,
      desc: "100% of interview requests run exclusively on the new service. Legacy routes in the monolith are quarantined and marked deprecated.",
    },
    {
      id: 5,
      title: "Stage 5: Decommission & Cleanup",
      trafficMonolith: 0,
      trafficNewService: 100,
      desc: "Legacy monolith code for the interview capability is deleted. Monolith memory footprint and build times decrease.",
    },
  ];

  const current = stages[stage - 1];

  return (
    <div className="rounded-2xl border border-[#e7e3da] bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
            Safe Evolution
          </span>
          <h4 className="font-bold text-stone-900 text-sm">Strangler Fig Migration Workflow</h4>
        </div>
        <div className="flex gap-1 bg-stone-100 p-1 rounded-xl">
          {[1, 2, 3, 4, 5].map((s) => (
            <button
              key={s}
              onClick={() => setStage(s)}
              className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${
                stage === s ? "bg-[#f97316] text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
              }`}
            >
              Stage {s}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-4 mb-4">
        <h5 className="font-bold text-stone-900 text-sm mb-1">{current.title}</h5>
        <p className="text-xs text-stone-600 mb-3">{current.desc}</p>

        {/* Dynamic Traffic Split Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-mono font-bold">
            <span className="text-stone-600">Existing Monolith: {current.trafficMonolith}%</span>
            <span className="text-orange-600">Extracted Service: {current.trafficNewService}%</span>
          </div>
          <div className="h-4 w-full bg-stone-200 rounded-full overflow-hidden flex">
            <div
              className="bg-stone-500 transition-all duration-500 h-full flex items-center justify-center text-[9px] text-white font-bold"
              style={{ width: `${current.trafficMonolith}%` }}
            >
              {current.trafficMonolith > 15 ? "Monolith" : ""}
            </div>
            <div
              className="bg-orange-500 transition-all duration-500 h-full flex items-center justify-center text-[9px] text-white font-bold"
              style={{ width: `${current.trafficNewService}%` }}
            >
              {current.trafficNewService > 15 ? "Extracted Service" : ""}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-orange-50 border border-orange-200 p-3 text-xs text-orange-950 flex items-start gap-2">
        <span className="font-bold text-orange-700">Martin Fowler&apos;s Rule:</span>
        <span>
          Never attempt a single &quot;big-bang&quot; rewrite. The Strangler Fig pattern allows the new system to grow around the edges of the old system while both continuously run in production.
        </span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* VISUAL DIAGRAM DISPATCHER FOR MODULE 4                                     */
/* -------------------------------------------------------------------------- */
export function VisualDiagramComponentModule4({ diagramType }) {
  switch (diagramType) {
    case "deployment-vs-code":
      return <DeploymentVsCodeBoundariesDiagram />;
    case "hexagonal-architecture":
      return <ModularMonolithHexagonalDiagram />;
    case "distributed-monolith":
      return <DistributedMonolithAntiPatternDiagram />;
    case "bounded-contexts":
      return <DddBoundedContextsDiagram />;
    case "data-ownership-outbox":
      return <DataOwnershipOutboxDiagram />;
    case "strangler-fig":
      return <StranglerFigMigrationDiagram />;
    default:
      return <DeploymentVsCodeBoundariesDiagram />;
  }
}
