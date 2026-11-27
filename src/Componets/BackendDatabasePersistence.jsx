import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Server,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Copy,
  Check,
  Activity,
  Database,
  ShieldCheck,
  Zap,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import BackendDatabasePersistenceSections from "./BackendDatabasePersistenceSections";

const CONCURRENCY_STRATEGIES = [
  {
    id: "atomic",
    name: "Atomic SQL Update",
    useCase: "Conditional seat reservation (1 seat left, 2 concurrent students)",
    behavior: "Student A updates 1 row (available_seats: 1 -> 0); Student B updates 0 rows and receives a controlled conflict/full response.",
    code: `UPDATE courses
SET available_seats = available_seats - 1
WHERE id = 101 AND available_seats > 0;`,
  },
  {
    id: "optimistic",
    name: "Optimistic Locking (@Version)",
    useCase: "Low-conflict course metadata updates",
    behavior: "Hibernate checks WHERE id = ? AND version = ?. The second concurrent writer gets OptimisticLockException instead of silently overwriting.",
    code: `@Entity
public class Course {
  @Id private Long id;
  private Integer availableSeats;
  @Version private Long version;
}`,
  },
  {
    id: "pessimistic",
    name: "Pessimistic Locking (FOR UPDATE)",
    useCase: "High-contention exclusive row access",
    behavior: "Acquires a row-level lock until the transaction commits; prevents concurrent reads/writes on that row, though excessive locking can reduce throughput.",
    code: `@Lock(LockModeType.PESSIMISTIC_WRITE)
@Query("SELECT c FROM Course c WHERE c.id = :id")
Optional<Course> findByIdForUpdate(Long id);`,
  },
];

export default function BackendDatabasePersistence() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("concurrency");
  const [selectedStrategy, setSelectedStrategy] = useState(CONCURRENCY_STRATEGIES[0]);
  const [nPlusOneMode, setNPlusOneMode] = useState("naive");
  const [copiedMigration, setCopiedMigration] = useState(false);

  const flywaySql = `-- V1__init_course_enrolment.sql
CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE courses (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(150) NOT NULL,
  description TEXT NOT NULL,
  available_seats INTEGER NOT NULL CHECK (available_seats >= 0),
  status VARCHAR(30) NOT NULL DEFAULT 'DRAFT',
  version BIGINT NOT NULL DEFAULT 0
);

CREATE TABLE enrollments (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES users(id),
  course_id BIGINT NOT NULL REFERENCES courses(id),
  enrolled_at TIMESTAMP NOT NULL DEFAULT NOW(),
  status VARCHAR(30) NOT NULL DEFAULT 'ACTIVE',
  CONSTRAINT unique_user_course UNIQUE (user_id, course_id)
);`;

  const handleCopyMigration = () => {
    navigator.clipboard.writeText(flywaySql);
    setCopiedMigration(true);
    setTimeout(() => setCopiedMigration(false), 2000);
  };

  const quizQuestions = [
    {
      id: 1,
      question: "1. What is the primary purpose of database connection pooling (e.g., HikariCP)?",
      options: [
        "To encrypt PostgreSQL tables on disk",
        "To reuse established database connections instead of opening and closing a new connection per request",
        "To replace SQL with JSON",
        "To bypass authentication",
      ],
      correct: 1,
      explanation: "Connection pooling avoids expensive per-request connection setup by maintaining a pool of reusable connections.",
    },
    {
      id: 2,
      question: "2. Why is an independent Enrollment entity preferred over a plain @ManyToMany mapping?",
      options: [
        "JPA does not support @ManyToMany",
        "Enrolments store extra attributes like enrolledAt, status, completion %, and payment status",
        "PostgreSQL cannot join three tables",
        "@ManyToMany prevents primary keys",
      ],
      correct: 1,
      explanation: "An explicit Enrollment entity cleanly holds relationship attributes such as status, timestamp, and progress.",
    },
    {
      id: 3,
      question: "3. What is the difference between JPA and Hibernate?",
      options: [
        "JPA is a database; Hibernate is a web server",
        "JPA is the persistence specification; Hibernate is an ORM implementation of JPA",
        "Hibernate replaces SQL completely",
        "They are competing databases",
      ],
      correct: 1,
      explanation: "JPA defines the standard Java persistence API, while Hibernate provides the concrete ORM engine.",
    },
    {
      id: 4,
      question: "4. How does a database guarantee two concurrent requests cannot create duplicate enrolments?",
      options: [
        "Frontend validation only",
        "A composite UNIQUE constraint on (user_id, course_id) at the database level",
        "Using FetchType.EAGER",
        "Disabling connection pooling",
      ],
      correct: 1,
      explanation: "A database-level composite UNIQUE constraint is the authoritative safeguard against concurrent duplicates.",
    },
    {
      id: 5,
      question: "5. What causes the N+1 query problem in JPA/Hibernate?",
      options: [
        "Executing 1 query for N parent entities, then N additional queries when accessing each parent's lazy collection",
        "Using too many Flyway migrations",
        "Setting show-sql=false",
        "Using PostgreSQL",
      ],
      correct: 0,
      explanation: "Iterating over a lazy collection on N loaded entities triggers N extra SELECT queries (N+1 total).",
    },
    {
      id: 6,
      question: "6. Which technique directly solves the N+1 query problem?",
      options: [
        "JPQL JOIN FETCH, EntityGraph, or DTO projections",
        "Removing foreign keys",
        "Switching POST to GET",
        "Increasing HikariCP pool size to 1000",
      ],
      correct: 0,
      explanation: "JOIN FETCH, EntityGraphs, batch fetching, and DTO projections fetch required associations efficiently.",
    },
    {
      id: 7,
      question: "7. What do the four ACID properties stand for?",
      options: [
        "Authentication, Caching, Indexing, Durability",
        "Atomicity, Consistency, Isolation, Durability",
        "API, Controller, Interface, Database",
        "Availability, Concurrency, Integrity, Distribution",
      ],
      correct: 1,
      explanation: "ACID stands for Atomicity, Consistency, Isolation, and Durability.",
    },
    {
      id: 8,
      question: "8. Why use Flyway or Liquibase migrations instead of ddl-auto=update in production?",
      options: [
        "Flyway runs PostgreSQL in memory",
        "Versioned migrations provide ordered, reviewable, repeatable schema evolution without risky auto-DDL",
        "ddl-auto=update cannot create tables",
        "Liquibase replaces repositories",
      ],
      correct: 1,
      explanation: "Versioned migrations track exact schema history in Git and apply predictable changes across environments.",
    },
    {
      id: 9,
      question: "9. How does Optimistic Locking (@Version) detect concurrent conflicts?",
      options: [
        "Locks the entire table for 10 seconds",
        "Hibernate checks the @Version column during UPDATE and rejects stale writes",
        "Queues all HTTP requests into one thread",
        "Deletes conflicting rows",
      ],
      correct: 1,
      explanation: "@Version ensures updates fail if another transaction modified the row since it was read.",
    },
    {
      id: 10,
      question: "10. How does an atomic SQL update prevent over-enrolment when 2 students race for 1 seat?",
      options: [
        "SELECT seats, sleep 1s, then UPDATE",
        "Execute UPDATE courses SET available_seats = available_seats - 1 WHERE id = ? AND available_seats > 0 and check affected rows",
        "Store seats in cookies",
        "Use FetchType.LAZY",
      ],
      correct: 1,
      explanation: "Checking available_seats > 0 inside the atomic UPDATE guarantees at most one concurrent request reserves the final seat.",
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const score = useMemo(() => {
    let s = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) s++;
    });
    return s;
  }, [selectedAnswers]);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col antialiased selection:bg-[#f97316] selection:text-white pb-24">
      <ModuleNav track="backend-engineering" currentModuleId="database-persistence" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 w-full space-y-8">
        {/* Module Header */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Server size={12} className="text-orange-600" />
              Backend Engineering Track &bull; Module 04
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono text-emerald-700 font-bold">
              POSTGRESQL &middot; JPA &middot; HIBERNATE &middot; 12 LESSONS
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Module 04 &mdash; Database Engineering and Backend Persistence
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-stone-600 max-w-4xl">
            Connect Spring Boot to PostgreSQL, design normalized relational schemas, model JPA/Hibernate relationships, enforce ACID transactions and database constraints, eliminate N+1 queries, run versioned migrations, and handle concurrent updates safely.
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
              <Activity size={16} />
              <span>Interactive Workbenches &amp; Assessment</span>
            </button>
          </div>
        </div>

        {activeTab === "curriculum" ? (
          <BackendDatabasePersistenceSections />
        ) : (
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-4">
              <button
                onClick={() => setActiveWorkbenchTab("concurrency")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "concurrency"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                1. Concurrency &amp; Locking
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("nplus1")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "nplus1"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                2. N+1 Query Inspector
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("migration")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "migration"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                3. Flyway SQL Migration
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("quiz")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "quiz"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                4. Knowledge Assessment (10 Qs)
              </button>
            </div>

            {activeWorkbenchTab === "concurrency" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                    Concurrency Control Explorer
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                    Preventing Race Conditions &amp; Lost Updates
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {CONCURRENCY_STRATEGIES.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedStrategy(s)}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedStrategy.id === s.id
                          ? "border-[#f97316] bg-orange-50 text-orange-950 font-bold"
                          : "border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100"
                      }`}
                    >
                      <div className="text-sm font-bold">{s.name}</div>
                      <div className="text-xs text-stone-600 font-normal mt-1">{s.useCase}</div>
                    </button>
                  ))}
                </div>

                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50 space-y-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <Zap size={16} className="text-orange-600" />
                    <span>{selectedStrategy.name}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700">{selectedStrategy.behavior}</p>
                  <pre className="p-4 rounded-xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto">
                    {selectedStrategy.code}
                  </pre>
                </div>
              </div>
            )}

            {activeWorkbenchTab === "nplus1" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                      ORM Query Performance
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                      N+1 Query Problem vs JOIN FETCH (100 Students)
                    </h2>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setNPlusOneMode("naive")}
                      className={`px-4 py-2 rounded-xl text-xs font-bold cursor-pointer ${
                        nPlusOneMode === "naive" ? "bg-rose-600 text-white" : "bg-stone-100 text-stone-700"
                      }`}
                    >
                      Naive Lazy Loop (101 Queries)
                    </button>
                    <button
                      onClick={() => setNPlusOneMode("optimized")}
                      className={`px-4 py-2 rounded-xl text-xs font-bold cursor-pointer ${
                        nPlusOneMode === "optimized" ? "bg-emerald-600 text-white" : "bg-stone-100 text-stone-700"
                      }`}
                    >
                      JOIN FETCH (1 Query)
                    </button>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50 space-y-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <Database size={16} className="text-orange-600" />
                    <span>
                      {nPlusOneMode === "naive"
                        ? "101 SQL Queries Executed (1 + 100)"
                        : "1 Optimized Fetch Query Executed"}
                    </span>
                  </div>
                  <pre className="p-4 rounded-xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed">
                    {nPlusOneMode === "naive"
                      ? `SELECT * FROM users;                     -- Query 1 (loads 100 users)
SELECT * FROM enrollments WHERE user_id = 1; -- Query 2
SELECT * FROM enrollments WHERE user_id = 2; -- Query 3
...
SELECT * FROM enrollments WHERE user_id = 100; -- Query 101`
                      : `@Query("""
  SELECT DISTINCT u
  FROM User u
  LEFT JOIN FETCH u.enrollments
""")
List<User> findAllWithEnrollments();`}
                  </pre>
                </div>
              </div>
            )}

            {activeWorkbenchTab === "migration" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                      Schema Evolution
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                      Flyway PostgreSQL Schema Migration (V1__init_course_enrolment.sql)
                    </h2>
                  </div>

                  <button
                    onClick={handleCopyMigration}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-900 text-white hover:bg-stone-800 text-xs font-semibold cursor-pointer shadow-xs transition-all"
                  >
                    {copiedMigration ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    <span>{copiedMigration ? "Copied!" : "Copy SQL Migration"}</span>
                  </button>
                </div>

                <pre className="p-5 rounded-2xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed border border-stone-800">
                  {flywaySql}
                </pre>
              </div>
            )}

            {activeWorkbenchTab === "quiz" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                      Module 04 Knowledge Assessment
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                      Database Engineering &amp; Persistence Examination
                    </h2>
                  </div>

                  <div className="flex items-center gap-3">
                    {showResults && (
                      <div className="px-4 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold font-mono">
                        Score: {score} / {quizQuestions.length} ({Math.round((score / quizQuestions.length) * 100)}%)
                      </div>
                    )}
                    <button
                      onClick={() => setShowResults(!showResults)}
                      className="px-4 py-2 rounded-xl bg-[#f97316] text-white hover:bg-orange-600 text-xs font-semibold cursor-pointer shadow-xs transition-all"
                    >
                      {showResults ? "Hide Explanations" : "Check Answers"}
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  {quizQuestions.map((q) => {
                    const selected = selectedAnswers[q.id];
                    const isCorrect = selected === q.correct;

                    return (
                      <div key={q.id} className="p-5 rounded-2xl border border-stone-200 bg-stone-50/40 space-y-3">
                        <div className="font-bold text-stone-900 text-sm">{q.question}</div>
                        <div className="space-y-2">
                          {q.options.map((opt, oIdx) => {
                            const isChosen = selected === oIdx;
                            let btnStyle = "border-stone-200 bg-white text-stone-700 hover:bg-stone-50";

                            if (showResults) {
                              if (oIdx === q.correct) {
                                btnStyle = "border-emerald-300 bg-emerald-50 text-emerald-900 font-semibold";
                              } else if (isChosen && !isCorrect) {
                                btnStyle = "border-rose-300 bg-rose-50 text-rose-900";
                              }
                            } else if (isChosen) {
                              btnStyle = "border-[#f97316] bg-orange-50 text-orange-950 font-semibold";
                            }

                            return (
                              <button
                                key={oIdx}
                                onClick={() => setSelectedAnswers((prev) => ({ ...prev, [q.id]: oIdx }))}
                                className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all cursor-pointer ${btnStyle}`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>

                        {showResults && (
                          <div className={`p-3 rounded-xl text-xs ${isCorrect ? "bg-emerald-50 text-emerald-900 border border-emerald-200" : "bg-stone-100 text-stone-800 border border-stone-200"}`}>
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
            onClick={() => navigate("/learning/backend-engineering/spring-boot")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 3 &mdash; Java Backend Development with Spring Boot</span>
          </button>

          <button
            onClick={() => navigate("/learning/backend-engineering/auth-security")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm cursor-pointer shadow-xs"
          >
            <span>Next: Module 5 &mdash; Authentication and Authorization Engineering</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </main>
    </div>
  );
}
