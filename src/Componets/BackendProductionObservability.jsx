import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Server,
  ArrowLeft,
  BookOpen,
  Copy,
  Check,
  Activity,
  ShieldCheck,
  CheckSquare,
  Square,
  Rocket,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import BackendProductionObservabilitySections from "./BackendProductionObservabilitySections";

const DEPLOY_STRATEGIES = [
  {
    id: "rolling",
    name: "Rolling Deployment",
    benefit: "Gradual zero-downtime replacement of instances",
    watchout: "Old and new app versions run simultaneously; DB schemas must remain backward-compatible (Expand-and-Contract).",
  },
  {
    id: "blue-green",
    name: "Blue-Green Deployment",
    benefit: "Test Green environment fully, then switch traffic; fast rollback to Blue",
    watchout: "Requires duplicate environment capacity and compatible shared database changes.",
  },
  {
    id: "canary",
    name: "Canary Deployment",
    benefit: "Route 5% traffic to new version first, monitor error rate & p95 latency before 100% rollout",
    watchout: "Needs traffic-splitting routing and strong real-time metrics/alerts.",
  },
];

const READINESS_CHECKLIST = [
  "Separate dev/staging/prod config & injected secrets",
  "Multi-stage non-root Dockerfile & versioned image",
  "Flyway migrations validated (ddl-auto: validate) + tested DB backups",
  "Actuator startup/liveness/readiness probes + graceful shutdown",
  "Structured JSON logging (no secrets) + Prometheus/Grafana + OpenTelemetry",
  "Tested rollback procedure, incident playbooks & alert ownership",
];

export default function BackendProductionObservability() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("deploy");
  const [selectedDeploy, setSelectedDeploy] = useState(DEPLOY_STRATEGIES[0]);
  const [checkedItems, setCheckedItems] = useState({});
  const [copiedDocker, setCopiedDocker] = useState(false);

  const dockerAndProdSnippet = `# Multi-stage Non-Root Dockerfile
FROM maven:3.9-eclipse-temurin-21 AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn clean package -DskipTests

FROM eclipse-temurin:21-jre
WORKDIR /app
RUN groupadd --system appgroup && useradd --system --gid appgroup --no-create-home appuser
COPY --from=build --chown=appuser:appgroup /app/target/course-management-api.jar app.jar
USER appuser
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]`;

  const handleCopyDocker = () => {
    navigator.clipboard.writeText(dockerAndProdSnippet);
    setCopiedDocker(true);
    setTimeout(() => setCopiedDocker(false), 2000);
  };

  const toggleChecklist = (idx) => {
    setCheckedItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const completedChecklistCount = Object.values(checkedItems).filter(Boolean).length;

  const quizQuestions = [
    {
      id: 1,
      question: "1. Why should the exact same image digest verified in staging be promoted to production?",
      options: [
        "Docker images cannot be rebuilt",
        "It eliminates differences between what was tested in staging and what runs in production",
        "Maven skips tests in staging",
        "PostgreSQL requires identical timestamps",
      ],
      correct: 1,
      explanation: "Artifact promotion ensures the exact tested binary/image is deployed to production.",
    },
    {
      id: 2,
      question: "2. What are the two key benefits of a multi-stage Docker build with USER appuser?",
      options: [
        "Enables root SSH",
        "Removes build tools (Maven/JDK) from the runtime image and enforces non-root least privilege",
        "Replaces Flyway",
        "Scales PostgreSQL automatically",
      ],
      correct: 1,
      explanation: "Multi-stage builds shrink images and non-root USER limits container compromise impact.",
    },
    {
      id: 3,
      question: "3. Why should a Kubernetes liveness probe NOT fail just because PostgreSQL blips?",
      options: [
        "Liveness cannot use HTTP",
        "Failing liveness restarts every backend pod continuously, worsening recovery; dependency checks belong in readiness",
        "Readiness restarts pods",
        "Actuator disables liveness",
      ],
      correct: 1,
      explanation: "Liveness checks process health; readiness stops routing traffic when dependencies are unready.",
    },
    {
      id: 4,
      question: "4. What does server.shutdown: graceful do in Spring Boot?",
      options: [
        "Kills all threads immediately",
        "Stops accepting new requests and lets in-flight requests finish within the shutdown timeout",
        "Deletes H2 tables",
        "Disables Actuator",
      ],
      correct: 1,
      explanation: "Graceful shutdown protects active HTTP requests and DB transactions during rollouts.",
    },
    {
      id: 5,
      question: "5. Why must applied Flyway migrations NEVER be edited in shared environments?",
      options: [
        "SQL files are read-only",
        "Flyway validates checksums in its schema history table; edits cause checksum mismatches",
        "Hibernate ignores V1",
        "Docker caches SQL",
      ],
      correct: 1,
      explanation: "Always author a new versioned migration script for subsequent schema changes.",
    },
    {
      id: 6,
      question: "6. How does Expand-and-Contract enable zero-downtime column renames?",
      options: [
        "Drop the old column immediately",
        "Add new column alongside old (Expand), migrate/sync data, deploy compatible code, then drop old column later (Contract)",
        "Use ddl-auto=create-drop",
        "Pause traffic for 2 hours",
      ],
      correct: 1,
      explanation: "Old and new app instances coexist safely during rolling updates when both columns exist during transition.",
    },
    {
      id: 7,
      question: "7. If 6 Spring Boot instances each have HikariCP maximum-pool-size=20 against a DB with 80 max connections, what happens?",
      options: [
        "PostgreSQL doubles RAM",
        "6 x 20 = 120 potential connections exceed the 80-connection DB budget, causing connection exhaustion",
        "HikariCP disables SQL",
        "Latency drops to 0 ms",
      ],
      correct: 1,
      explanation: "Size connection pools across all instances to fit within PostgreSQL's connection budget.",
    },
    {
      id: 8,
      question: "8. How do Logs, Metrics, and Traces complement each other?",
      options: [
        "They store identical JSON",
        "Logs record discrete events, Metrics track numerical trends/rates, and Traces show end-to-end request spans across services",
        "Traces replace backups",
        "Metrics only measure disk",
      ],
      correct: 1,
      explanation: "Metrics alert on trends, traces isolate slow spans, and logs reveal error details.",
    },
    {
      id: 9,
      question: "9. What is the difference between RPO and RTO?",
      options: [
        "RPO is acceptable data loss in time (e.g. 15m); RTO is target time to restore service (e.g. 1h)",
        "RPO is CPU; RTO is heap",
        "They are identical",
        "RTO measures p99 latency",
      ],
      correct: 0,
      explanation: "RPO bounds tolerable data loss; RTO bounds tolerable recovery duration.",
    },
    {
      id: 10,
      question: "10. During DB connection pool exhaustion (20/20), why NOT blindly increase maximum-pool-size?",
      options: [
        "HikariCP ignores config",
        "It can exceed PostgreSQL's connection capacity and worsen contention without fixing root causes like slow queries or long transactions",
        "Prometheus blocks pools > 20",
        "Docker limits pools to 5",
      ],
      correct: 1,
      explanation: "Investigate root cause (slow queries, external calls inside @Transactional, leaks) instead of oversizing pools.",
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
      <ModuleNav track="backend-engineering" currentModuleId="production-observability" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 w-full space-y-8">
        {/* Module Header */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Server size={12} className="text-orange-600" />
              Backend Engineering Track &bull; Module 10
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono text-emerald-700 font-bold">
              DOCKER &middot; FLYWAY &middot; ACTUATOR &middot; PROMETHEUS &middot; OPENTELEMETRY
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Module 10 &mdash; Production Backend, Deployment and Observability
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-stone-600 max-w-4xl">
            Operate backends as production services: environment isolation, multi-stage non-root Docker images, Flyway expand-and-contract migrations, Kubernetes probes &amp; graceful shutdown, structured JSON logging, Prometheus/Grafana metrics, OpenTelemetry tracing, and incident response.
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
          <BackendProductionObservabilitySections />
        ) : (
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-4">
              <button
                onClick={() => setActiveWorkbenchTab("deploy")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "deploy"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                1. Deployment Strategies
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("checklist")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "checklist"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                2. Production Readiness Checklist
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("docker")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "docker"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                3. Multi-Stage Non-Root Dockerfile
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

            {activeWorkbenchTab === "deploy" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {DEPLOY_STRATEGIES.map((d) => (
                    <button
                      key={d.id}
                      onClick={() => setSelectedDeploy(d)}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedDeploy.id === d.id
                          ? "border-[#f97316] bg-orange-50 text-orange-950 font-bold"
                          : "border-stone-200 bg-stone-50 text-stone-700"
                      }`}
                    >
                      <div className="text-sm font-bold">{d.name}</div>
                    </button>
                  ))}
                </div>

                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50 space-y-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <Rocket size={16} className="text-orange-600" />
                    <span>{selectedDeploy.name}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-900 bg-emerald-50 border border-emerald-200 p-3 rounded-xl">
                    <strong>Benefit:</strong> {selectedDeploy.benefit}
                  </p>
                  <p className="text-xs sm:text-sm text-amber-900 bg-amber-50 border border-amber-200 p-3 rounded-xl">
                    <strong>Watch-out:</strong> {selectedDeploy.watchout}
                  </p>
                </div>
              </div>
            )}

            {activeWorkbenchTab === "checklist" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                    Production Readiness Gate ({completedChecklistCount} / {READINESS_CHECKLIST.length})
                  </h2>
                </div>
                <div className="space-y-2">
                  {READINESS_CHECKLIST.map((item, idx) => (
                    <button
                      key={item}
                      onClick={() => toggleChecklist(idx)}
                      className="w-full flex items-center gap-3 p-3 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 text-left text-xs sm:text-sm cursor-pointer"
                    >
                      {checkedItems[idx] ? (
                        <CheckSquare size={18} className="text-emerald-600 shrink-0" />
                      ) : (
                        <Square size={18} className="text-stone-400 shrink-0" />
                      )}
                      <span className={checkedItems[idx] ? "line-through text-stone-500" : "text-stone-800 font-medium"}>
                        {item}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activeWorkbenchTab === "docker" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                      Hardened Container Build
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                      Multi-Stage Non-Root Spring Boot Dockerfile
                    </h2>
                  </div>

                  <button
                    onClick={handleCopyDocker}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-900 text-white hover:bg-stone-800 text-xs font-semibold cursor-pointer shadow-xs transition-all"
                  >
                    {copiedDocker ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    <span>{copiedDocker ? "Copied!" : "Copy Dockerfile"}</span>
                  </button>
                </div>

                <pre className="p-5 rounded-2xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed border border-stone-800">
                  {dockerAndProdSnippet}
                </pre>
              </div>
            )}

            {activeWorkbenchTab === "quiz" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                      Module 10 Knowledge Assessment
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                      Production Backend &amp; Observability Examination
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
            onClick={() => navigate("/learning/backend-engineering/api-security")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 9 &mdash; API Security Engineering</span>
          </button>

          <button
            onClick={() => navigate("/learning")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs sm:text-sm cursor-pointer shadow-xs"
          >
            <ShieldCheck size={16} />
            <span>Curriculum Hub</span>
          </button>
        </div>
      </main>
    </div>
  );
}
