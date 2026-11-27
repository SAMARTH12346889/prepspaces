import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Code2,
  HelpCircle,
  Layers,
  ListChecks,
  Rocket,
  ShieldCheck,
  Sparkles,
  XCircle,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import BackendCapstoneSections from "./BackendCapstoneSections";

const ARCHITECTURE_LAYERS = [
  {
    id: "api",
    title: "Modular Monolith API (Java 21 + Spring Boot)",
    summary: "Single deployable backend with separated domain modules (Auth, Users, Courses, Enrollment, Progress, Notifications).",
    responsibilities: [
      "Validates DTOs with Jakarta Bean Validation and returns RFC ProblemDetail errors.",
      "Enforces JWT Resource Server auth, RBAC (@PreAuthorize), and object ownership checks.",
      "Coordinates @Transactional workflows across PostgreSQL, Redis, and the Outbox.",
    ],
  },
  {
    id: "postgres",
    title: "PostgreSQL + Flyway (Source of Truth)",
    summary: "Authoritative relational database with strict constraints, foreign keys, and versioned SQL migrations.",
    responsibilities: [
      "Enforces UNIQUE (student_id, course_id) on enrollments and UNIQUE (enrollment_id, lesson_id) on progress.",
      "Stores outbox_events in the same ACID transaction as enrollment writes.",
      "Manages schema evolution safely via Flyway V1..V7 migration scripts.",
    ],
  },
  {
    id: "redis",
    title: "Redis (Cache-Aside & Rate Limiting)",
    summary: "In-memory cache for hot course reads and shared distributed rate-limit counters across backend instances.",
    responsibilities: [
      "Caches published course details & public listings via @Cacheable with explicit TTLs.",
      "Evicts affected course & listing entries via @CacheEvict on admin updates.",
      "Enforces distributed 429 Too Many Requests limits on login, registration, and search.",
    ],
  },
  {
    id: "rabbitmq",
    title: "RabbitMQ + Outbox Worker (Async Messaging)",
    summary: "Decouples user-facing enrollment latency from email and in-app notification delivery.",
    responsibilities: [
      "Outbox publisher forwards committed outbox_events using RabbitMQ publisher confirms.",
      "Idempotent notification consumer tracks processed eventIds for at-least-once safety.",
      "Bounded retries and Dead-Letter Queue (DLQ) protect against transient provider outages.",
    ],
  },
];

const ROADMAP_PHASES = [
  { id: "p1", label: "Phase 1-2: Spring Boot project foundation + PostgreSQL + Flyway V1..V7 migrations" },
  { id: "p2", label: "Phase 3: Registration (BCrypt/Argon2id), JWT AuthN, STUDENT/ADMIN RBAC & ownership checks" },
  { id: "p3", label: "Phase 4-5: Course DTO lifecycle, transactional enrollment (409 on conflict) & progress tracking" },
  { id: "p4", label: "Phase 6: Pagination, filtering, full-text search & ProblemDetail @RestControllerAdvice" },
  { id: "p5", label: "Phase 7: Redis cache-aside + eviction, distributed rate limiting, RabbitMQ Outbox & DLQ" },
  { id: "p6", label: "Phase 8-10: JUnit/Testcontainers suite, OpenAPI Swagger UI, Docker Compose & Observability" },
];

const OUTBOX_SNIPPET = `@Service
public class EnrollmentService {

  private final CourseRepository courseRepository;
  private final EnrollmentRepository enrollmentRepository;
  private final OutboxEventRepository outboxEventRepository;

  @Transactional
  public EnrollmentResponse enroll(Long studentId, Long courseId) {
    Course course = courseRepository
        .findByIdAndPublishedTrue(courseId)
        .orElseThrow(CourseNotFoundException::new);

    if (enrollmentRepository.existsByStudentIdAndCourseId(studentId, courseId)) {
      throw new DuplicateEnrollmentException();
    }

    Enrollment enrollment = enrollmentRepository.save(new Enrollment(studentId, course.getId()));
    outboxEventRepository.save(OutboxEvent.studentEnrolled(enrollment.getId(), studentId, courseId));

    return EnrollmentResponse.from(enrollment);
  }
}`;

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Why is a modular monolith recommended over 10 separate microservices for the initial Learning Platform Capstone?",
    options: [
      "Spring Boot cannot connect to PostgreSQL from microservices",
      "It provides clearly separated business modules inside one deployable service, demonstrating transactions, security, caching, and async messaging without premature distributed-system complexity",
      "Microservices do not support JWT authentication",
      "Docker only runs a single container",
    ],
    correctIndex: 1,
    explanation: "A modular monolith keeps strong module boundaries while avoiding unnecessary network hops, distributed transactions, and operational overhead early on.",
  },
  {
    id: 2,
    question: "Why must the backend ignore any role field sent by the client during public student registration?",
    options: [
      "Because PostgreSQL cannot store ENUM values",
      "To prevent privilege escalation where an attacker registers themselves as an ADMIN; the server must always assign the default STUDENT role",
      "Because Spring Security disables POST requests with roles",
      "To reduce JSON payload size",
    ],
    correctIndex: 1,
    explanation: "Public registration endpoints must enforce the default STUDENT role server-side so clients cannot self-provision administrative access.",
  },
  {
    id: 3,
    question: "Why is a PostgreSQL UNIQUE (student_id, course_id) constraint still required on enrollments even when existsByStudentIdAndCourseId(...) is checked first?",
    options: [
      "Spring Data JPA ignores existsBy queries",
      "Two concurrent HTTP requests can both pass the initial check before either commits; the DB constraint guarantees no duplicate enrollment is persisted",
      "Unique constraints speed up password hashing",
      "PostgreSQL requires unique constraints on every foreign key",
    ],
    correctIndex: 1,
    explanation: "Application-level existence checks are vulnerable to race conditions under concurrency; a database unique constraint enforces data integrity atomically.",
  },
  {
    id: 4,
    question: "How does the Transactional Outbox Pattern solve the dual-write problem between PostgreSQL and RabbitMQ during enrollment?",
    options: [
      "It stores enrollments inside RabbitMQ instead of PostgreSQL",
      "It saves the enrollment and the outbox_events row in the same PostgreSQL transaction, and a background publisher reliably forwards committed events to RabbitMQ",
      "It disables database transactions when RabbitMQ is enabled",
      "It retries HTTP requests from the browser",
    ],
    correctIndex: 1,
    explanation: "Because both writes share one ACID transaction, either both commit or both roll back, eliminating lost events or phantom notifications.",
  },
  {
    id: 5,
    question: "Why should the notification consumer in RabbitMQ track processed event IDs and operate idempotently?",
    options: [
      "RabbitMQ guarantees at-least-once delivery, meaning a message can be delivered more than once (e.g., if an acknowledgement is lost)",
      "RabbitMQ deletes messages before consumers read them",
      "PostgreSQL cannot generate UUIDs",
      "Idempotency disables dead-letter queues",
    ],
    correctIndex: 0,
    explanation: "At-least-once messaging requires duplicate-safe consumers so redelivered events do not send duplicate notifications.",
  },
  {
    id: 6,
    question: "Which data is a good candidate for Redis cache-aside caching, and what must happen when an admin updates a course?",
    options: [
      "Cache raw passwords and JWT secrets in Redis; never evict them",
      "Cache published course details and public listings in Redis, and explicitly evict affected course and listing cache entries on admin updates",
      "Cache every user's private progress indefinitely without TTL",
      "Use Redis as the sole database without PostgreSQL",
    ],
    correctIndex: 1,
    explanation: "Read-heavy public course metadata benefits from Redis caching, while explicit eviction and TTLs prevent stale data after admin edits.",
  },
  {
    id: 7,
    question: "Why should rate limiting for login and public endpoints be backed by Redis instead of an in-memory map inside each Spring Boot instance?",
    options: [
      "Java HashMaps cannot store integers",
      "When multiple backend instances run behind a load balancer, Redis provides shared, consistent rate-limit counters across all instances",
      "In-memory maps bypass HTTPS",
      "Redis automatically hashes BCrypt passwords",
    ],
    correctIndex: 1,
    explanation: "Distributed deployments need shared state in Redis so attackers cannot multiply their allowed request quota across instances.",
  },
  {
    id: 8,
    question: "How should the Learning Platform API prevent BOLA (Broken Object Level Authorization) on student progress and enrollment endpoints?",
    options: [
      "Use sequential integer IDs in URLs",
      "Derive the current user ID from the authenticated principal and verify resource ownership (or ADMIN authorization) before returning or modifying records",
      "Hide endpoints from Swagger UI",
      "Validate ownership only in the React frontend",
    ],
    correctIndex: 1,
    explanation: "Deriving identity from the verified token/principal and enforcing server-side ownership checks stops users from accessing another student's records.",
  },
  {
    id: 9,
    question: "What is the purpose of using Spring ProblemDetail with @RestControllerAdvice across the capstone API?",
    options: [
      "To return raw Java stack traces and SQL queries to clients",
      "To provide a consistent, standardized HTTP error response format across all endpoints without duplicating try/catch logic or leaking internals",
      "To replace PostgreSQL foreign keys",
      "To disable Jakarta Bean Validation",
    ],
    correctIndex: 1,
    explanation: "Centralized exception handling with ProblemDetail gives clients predictable error payloads while protecting internal details.",
  },
  {
    id: 10,
    question: "In the recommended 10-phase capstone roadmap, why should automated tests and OpenAPI documentation be written alongside each feature phase?",
    options: [
      "Because Maven refuses to compile without Swagger UI",
      "Building tests and API contracts per feature verifies correctness, security, and schema integrity incrementally before dependent modules are layered on top",
      "Because Flyway only runs once per project",
      "Because Docker cannot run unit tests",
    ],
    correctIndex: 1,
    explanation: "Incremental verification ensures authentication, permissions, and database constraints work reliably before subsequent modules build on them.",
  },
];

export default function BackendCapstone() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("architecture");
  const [selectedLayer, setSelectedLayer] = useState("api");
  const [checkedPhases, setCheckedPhases] = useState({});
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const togglePhase = (id) => {
    setCheckedPhases((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedPhases = ROADMAP_PHASES.filter((item) => checkedPhases[item.id]).length;

  const handleSelectAnswer = (qId, optionIdx) => {
    if (showResults) return;
    setAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const handleSubmitQuiz = () => {
    setShowResults(true);
  };

  const handleResetQuiz = () => {
    setAnswers({});
    setShowResults(false);
  };

  const scoreCount = QUIZ_QUESTIONS.filter((q) => answers[q.id] === q.correctIndex).length;
  const activeLayer = ARCHITECTURE_LAYERS.find((l) => l.id === selectedLayer) || ARCHITECTURE_LAYERS[0];

  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#18181b] font-sans">
      <ModuleNav courseId="backend-engineering" currentModuleId="capstone-project" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
        {/* Header */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-orange-700">
              Module 11 &middot; Final Capstone
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono text-emerald-700 font-bold">
              MODULAR MONOLITH &middot; SPRING BOOT &middot; POSTGRES &middot; REDIS &middot; RABBITMQ
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Module 11 &mdash; Capstone: Production-Ready Learning Platform API
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-stone-600 max-w-4xl">
            Combine every skill from Modules 01&ndash;10 into one complete, tested, secured, containerized, and observable Learning Platform Backend API with JWT auth, RBAC, transactional enrollment, Redis caching, RabbitMQ outbox notifications, OpenAPI docs, and Testcontainers verification.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-stone-200 pt-6">
            <button
              onClick={() => setActiveTab("curriculum")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeTab === "curriculum"
                  ? "bg-stone-900 text-white shadow-xs"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              <BookOpen size={16} />
              <span>Full Curriculum Specification</span>
            </button>

            <button
              onClick={() => setActiveTab("workbench")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeTab === "workbench"
                  ? "bg-[#f97316] text-white shadow-xs"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              <Rocket size={16} />
              <span>Interactive Workbenches &amp; Assessment</span>
            </button>
          </div>
        </div>

        {activeTab === "curriculum" ? (
          <BackendCapstoneSections />
        ) : (
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-4">
              <button
                onClick={() => setActiveWorkbenchTab("architecture")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "architecture"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                1. Architecture Explorer
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("roadmap")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "roadmap"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                2. 10-Phase Roadmap Checklist
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("outbox")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "outbox"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                3. Transactional Outbox Pattern
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("quiz")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "quiz"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                4. Knowledge Assessment (10 Questions)
              </button>
            </div>

            {activeWorkbenchTab === "architecture" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex items-center gap-2">
                  <Layers className="text-[#f97316]" size={20} />
                  <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                    Capstone Component Responsibilities
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {ARCHITECTURE_LAYERS.map((layer) => (
                    <button
                      key={layer.id}
                      onClick={() => setSelectedLayer(layer.id)}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                        selectedLayer === layer.id
                          ? "border-[#f97316] bg-orange-50/70 shadow-xs"
                          : "border-stone-200 bg-stone-50 hover:bg-stone-100"
                      }`}
                    >
                      <div className="font-bold text-sm text-stone-900">{layer.title}</div>
                      <div className="text-xs text-stone-600 mt-1">{layer.summary}</div>
                    </button>
                  ))}
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 space-y-3">
                  <div className="font-bold text-stone-900 text-sm sm:text-base">
                    {activeLayer.title} &mdash; Key Engineering Guarantees
                  </div>
                  <ul className="space-y-2">
                    {activeLayer.responsibilities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeWorkbenchTab === "roadmap" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <ListChecks className="text-[#f97316]" size={20} />
                    <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                      Capstone Implementation Milestones
                    </h2>
                  </div>
                  <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-xs font-bold text-stone-700">
                    {completedPhases} / {ROADMAP_PHASES.length} Milestones Completed
                  </span>
                </div>

                <div className="space-y-3">
                  {ROADMAP_PHASES.map((item) => {
                    const checked = Boolean(checkedPhases[item.id]);
                    return (
                      <button
                        key={item.id}
                        onClick={() => togglePhase(item.id)}
                        className={`w-full flex items-center gap-3 p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                          checked
                            ? "border-emerald-300 bg-emerald-50/70"
                            : "border-stone-200 bg-stone-50 hover:bg-stone-100"
                        }`}
                      >
                        <CheckCircle2
                          size={18}
                          className={checked ? "text-emerald-600 shrink-0" : "text-stone-300 shrink-0"}
                        />
                        <span className={`text-xs sm:text-sm font-medium ${checked ? "text-emerald-950" : "text-stone-700"}`}>
                          {item.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {activeWorkbenchTab === "outbox" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-4">
                <div className="flex items-center gap-2">
                  <Code2 className="text-[#f97316]" size={20} />
                  <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                    Atomic Enrollment + Transactional Outbox Pattern
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-stone-600">
                  Persisting the enrollment record and the <code>outbox_events</code> row inside the same PostgreSQL transaction eliminates the dual-write problem before RabbitMQ delivery.
                </p>
                <div className="rounded-2xl bg-stone-900 text-stone-100 p-5 font-mono text-xs overflow-x-auto">
                  <pre className="whitespace-pre-wrap leading-relaxed">{OUTBOX_SNIPPET}</pre>
                </div>
              </div>
            )}

            {activeWorkbenchTab === "quiz" && (
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="text-[#f97316]" size={20} />
                    <h2 className="text-lg sm:text-xl font-bold text-[#18181b]">
                      Module 11 Knowledge Assessment
                    </h2>
                  </div>

                  {showResults ? (
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-700">
                        Score: {scoreCount} / {QUIZ_QUESTIONS.length} ({Math.round((scoreCount / QUIZ_QUESTIONS.length) * 100)}%)
                      </span>
                      <button
                        onClick={handleResetQuiz}
                        className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold cursor-pointer"
                      >
                        Retry Quiz
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={handleSubmitQuiz}
                      disabled={Object.keys(answers).length < QUIZ_QUESTIONS.length}
                      className="px-5 py-2.5 rounded-xl bg-[#f97316] hover:bg-[#ea580c] disabled:opacity-50 text-white text-xs sm:text-sm font-bold cursor-pointer"
                    >
                      Submit Assessment ({Object.keys(answers).length}/{QUIZ_QUESTIONS.length})
                    </button>
                  )}
                </div>

                <div className="space-y-6">
                  {QUIZ_QUESTIONS.map((q, idx) => {
                    const userChoice = answers[q.id];
                    const isCorrect = userChoice === q.correctIndex;
                    return (
                      <div key={q.id} className="rounded-2xl border border-stone-200 p-5 space-y-3 bg-stone-50/50">
                        <div className="font-bold text-sm sm:text-base text-stone-900">
                          {idx + 1}. {q.question}
                        </div>

                        <div className="space-y-2">
                          {q.options.map((opt, optIdx) => {
                            const selected = userChoice === optIdx;
                            let btnStyle = "border-stone-200 bg-white text-stone-700 hover:bg-stone-50";
                            if (showResults) {
                              if (optIdx === q.correctIndex) {
                                btnStyle = "border-emerald-400 bg-emerald-50 text-emerald-900 font-semibold";
                              } else if (selected && optIdx !== q.correctIndex) {
                                btnStyle = "border-rose-300 bg-rose-50 text-rose-900";
                              }
                            } else if (selected) {
                              btnStyle = "border-[#f97316] bg-orange-50 text-stone-900 font-semibold";
                            }

                            return (
                              <button
                                key={optIdx}
                                onClick={() => handleSelectAnswer(q.id, optIdx)}
                                className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${btnStyle}`}
                              >
                                {showResults && optIdx === q.correctIndex && (
                                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                                )}
                                {showResults && selected && optIdx !== q.correctIndex && (
                                  <XCircle size={16} className="text-rose-500 shrink-0" />
                                )}
                                <span>{opt}</span>
                              </button>
                            );
                          })}
                        </div>

                        {showResults && (
                          <div
                            className={`p-3 rounded-xl text-xs ${
                              isCorrect
                                ? "bg-emerald-50 text-emerald-900 border border-emerald-200"
                                : "bg-stone-100 text-stone-800 border border-stone-200"
                            }`}
                          >
                            <strong>Explanation:</strong> {q.explanation}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Bottom Nav */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => navigate("/learning/backend-engineering/production-observability")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 10 &mdash; Production Backend, Deployment and Observability</span>
          </button>

          <button
            onClick={() => navigate("/learning")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs sm:text-sm cursor-pointer shadow-xs"
          >
            <Sparkles size={16} />
            <span>Course Complete &mdash; Curriculum Hub</span>
          </button>
        </div>
      </main>
    </div>
  );
}
