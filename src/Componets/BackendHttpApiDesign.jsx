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
  ShieldCheck,
  Layers,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import BackendHttpApiDesignSections from "./BackendHttpApiDesignSections";

const METHOD_SCENARIOS = [
  {
    method: "GET",
    endpoint: "/api/v1/courses?status=published&page=1&pageSize=20",
    safe: "Yes",
    idempotent: "Yes",
    status: "200 OK",
    requestBody: "// No request body for GET",
    responseBody: `{
  "success": true,
  "data": [{ "id": "course-101", "title": "Backend Engineering", "status": "published" }],
  "meta": { "page": 1, "pageSize": 20, "totalItems": 1, "totalPages": 1 }
}`,
  },
  {
    method: "POST",
    endpoint: "/api/v1/me/enrollments",
    safe: "No",
    idempotent: "With Idempotency-Key",
    status: "201 Created / 409 Conflict",
    requestBody: `Headers: Idempotency-Key: enroll-attempt-101
{
  "courseId": "course-101"
}`,
    responseBody: `{
  "success": true,
  "data": { "id": "enrollment-501", "courseId": "course-101", "status": "active" }
}`,
  },
  {
    method: "PUT",
    endpoint: "/api/v1/courses/course-101",
    safe: "No",
    idempotent: "Yes",
    status: "200 OK",
    requestBody: `{
  "title": "Advanced Backend Engineering",
  "description": "Complete backend program",
  "status": "published"
}`,
    responseBody: `{
  "success": true,
  "data": { "id": "course-101", "title": "Advanced Backend Engineering", "status": "published" }
}`,
  },
  {
    method: "PATCH",
    endpoint: "/api/v1/courses/course-101",
    safe: "No",
    idempotent: "Depends on operation",
    status: "200 OK",
    requestBody: `Content-Type: application/merge-patch+json
{
  "status": "published"
}`,
    responseBody: `{
  "success": true,
  "data": { "id": "course-101", "title": "Backend Engineering", "status": "published" }
}`,
  },
  {
    method: "DELETE",
    endpoint: "/api/v1/courses/course-101",
    safe: "No",
    idempotent: "Yes",
    status: "204 No Content",
    requestBody: "// No request body required",
    responseBody: "// 204 No Content (or archived soft-delete per API contract)",
  },
];

const PROTOCOL_OPTIONS = [
  {
    id: "rest",
    name: "REST (HTTP + JSON)",
    bestFor: "Public course catalog, web & mobile CRUD APIs",
    tradeoff: "Simple caching & OpenAPI docs; complex screens may need multiple calls.",
    snippet: `GET /api/v1/courses/course-101 HTTP/1.1
Accept: application/json`,
  },
  {
    id: "graphql",
    name: "GraphQL (Typed Schema)",
    bestFor: "Complex student dashboards needing exact nested fields",
    tradeoff: "Eliminates over/under-fetching; requires query depth/complexity limits & N+1 care.",
    snippet: `query StudentDashboard {
  student(id: "stu-101") {
    name
    courses { id title progress { percentage } }
  }
}`,
  },
  {
    id: "grpc",
    name: "gRPC (HTTP/2 + Protobuf)",
    bestFor: "High-throughput internal service-to-service calls & streaming",
    tradeoff: "Strongly typed binary contracts & native streaming; browsers need gRPC-Web/proxy.",
    snippet: `service CourseService {
  rpc GetCourse(GetCourseRequest) returns (GetCourseResponse);
}`,
  },
];

export default function BackendHttpApiDesign() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("methods");
  const [selectedMethod, setSelectedMethod] = useState(METHOD_SCENARIOS[0]);
  const [selectedProtocol, setSelectedProtocol] = useState(PROTOCOL_OPTIONS[0]);
  const [copiedOpenApi, setCopiedOpenApi] = useState(false);

  const openApiSample = `openapi: 3.2.1
info:
  title: Course Management API
  version: 1.0.0
  description: API for managing courses, enrollments, and learning progress
servers:
  - url: https://api.example.com/api/v1
components:
  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT
  schemas:
    Course:
      type: object
      required: [id, title, status]
      properties:
        id: { type: string }
        title: { type: string, minLength: 3 }
        status: { type: string, enum: [draft, published, archived] }
paths:
  /courses:
    get:
      summary: List published courses
      responses:
        "200":
          description: Courses retrieved successfully
    post:
      summary: Create a course
      security:
        - bearerAuth: []
      responses:
        "201":
          description: Course created
        "403":
          description: Insufficient permissions`;

  const handleCopyOpenApi = () => {
    navigator.clipboard.writeText(openApiSample);
    setCopiedOpenApi(true);
    setTimeout(() => setCopiedOpenApi(false), 2000);
  };

  const quizQuestions = [
    {
      id: 1,
      question: "1. What is the key difference between Content-Type and Accept headers?",
      options: [
        "Content-Type specifies the request body format sent; Accept specifies the response media type wanted",
        "Accept specifies the request body format; Content-Type is only for responses",
        "Both carry JWT tokens",
        "They are identical aliases",
      ],
      correct: 0,
      explanation: "Content-Type describes the format of the body being sent, while Accept tells the server which response media type the client wants.",
    },
    {
      id: 2,
      question: "2. Which HTTP method is BOTH safe and idempotent according to RFC 9110?",
      options: ["POST", "PUT", "GET", "PATCH"],
      correct: 2,
      explanation: "GET is safe (read-only semantics) and idempotent (repeating it produces the same intended effect).",
    },
    {
      id: 3,
      question: "3. Why use an Idempotency-Key header on sensitive POST requests like payments?",
      options: [
        "To compress JSON over HTTP/2",
        "To ensure retrying a timed-out request does not create duplicate charges or records",
        "To bypass authentication",
        "To convert POST into GET",
      ],
      correct: 1,
      explanation: "An Idempotency-Key lets the server recognize retried submissions and avoid duplicate side effects.",
    },
    {
      id: 4,
      question: "4. How do ETag and If-Match headers prevent lost updates?",
      options: [
        "They lock the browser UI",
        "The server rejects outdated edits with 412 Precondition Failed if If-Match does not match the current ETag",
        "They auto-merge JSON",
        "They disable caching",
      ],
      correct: 1,
      explanation: "Sending If-Match with an old ETag causes the server to return 412 Precondition Failed instead of overwriting newer changes.",
    },
    {
      id: 5,
      question: "5. When should you use path parameters versus query parameters?",
      options: [
        "Path parameters identify a resource; query parameters filter, sort, search, or paginate",
        "Query parameters identify resources; path parameters are for auth",
        "Path parameters are only for POST",
        "They are interchangeable",
      ],
      correct: 0,
      explanation: "Path parameters identify the target resource (/courses/course-101), while query parameters refine retrieval (?page=2).",
    },
    {
      id: 6,
      question: "6. What problem does GraphQL primarily solve compared to fixed-shape REST endpoints?",
      options: [
        "Eliminates the database",
        "Lets clients request exact fields in one query, reducing over-fetching and under-fetching",
        "Replaces TLS",
        "Prevents N+1 queries automatically",
      ],
      correct: 1,
      explanation: "GraphQL lets clients specify exact fields via a typed schema, reducing over-fetching and under-fetching.",
    },
    {
      id: 7,
      question: "7. What transport and serialization format does gRPC typically use?",
      options: ["HTTP/1.1 and XML", "HTTP/2 and Protocol Buffers", "WebSockets and CSV", "SMTP and JSON"],
      correct: 1,
      explanation: "gRPC commonly uses HTTP/2 and Protocol Buffers for strongly typed service contracts.",
    },
    {
      id: 8,
      question: "8. Why is cursor pagination often preferred over offset pagination for large, changing datasets?",
      options: [
        "Cursor pagination needs no index",
        "Offset pagination can skip/duplicate items on concurrent inserts and slows down at large offsets",
        "Cursor pagination jumps directly to page 500",
        "Offset pagination cannot return JSON",
      ],
      correct: 1,
      explanation: "Cursor pagination anchors to a stable key, avoiding large row-skipping scans and shifting page boundaries.",
    },
    {
      id: 9,
      question: "9. Which change is generally a BREAKING change requiring a new major API version?",
      options: [
        "Adding a new optional endpoint",
        "Adding an optional response field",
        "Renaming or removing an existing response field clients depend on",
        "Improving DB query speed",
      ],
      correct: 2,
      explanation: "Renaming or removing existing response fields breaks existing clients expecting the original contract.",
    },
    {
      id: 10,
      question: "10. What is the relationship between OpenAPI and Swagger?",
      options: [
        "Swagger is the spec and OpenAPI is a database",
        "OpenAPI is the API description specification; Swagger is the tooling ecosystem (Editor, UI, Codegen)",
        "They are incompatible competitors",
        "OpenAPI only works for GraphQL",
      ],
      correct: 1,
      explanation: "OpenAPI defines the YAML/JSON specification format; Swagger refers to the tools that work with OpenAPI documents.",
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
      <ModuleNav track="backend-engineering" currentModuleId="http-api-design" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 w-full space-y-8">
        {/* Module Header */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Server size={12} className="text-orange-600" />
              Backend Engineering Track &bull; Module 02
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono text-emerald-700 font-bold">
              12 LESSONS &middot; API LAB &middot; CONTRACT ASSIGNMENT
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Module 02 &mdash; HTTP Protocol and API Design
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-stone-600 max-w-4xl">
            Master HTTP semantics (RFC 9110), methods, status codes, headers, REST vs GraphQL vs gRPC, pagination/filtering/sorting, API versioning, OpenAPI 3.2.1, and contract-first API design.
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

        {/* Content Area */}
        {activeTab === "curriculum" ? (
          <BackendHttpApiDesignSections />
        ) : (
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-4">
              <button
                onClick={() => setActiveWorkbenchTab("methods")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "methods"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                1. HTTP Methods &amp; Idempotency
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("protocols")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "protocols"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                2. REST vs GraphQL vs gRPC
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("openapi")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "openapi"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                3. OpenAPI 3.2.1 Starter
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

            {activeWorkbenchTab === "methods" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                    HTTP Semantics Simulator
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                    Inspect GET, POST, PUT, PATCH &amp; DELETE Contracts
                  </h2>
                </div>

                <div className="flex flex-wrap gap-2">
                  {METHOD_SCENARIOS.map((m) => (
                    <button
                      key={m.method}
                      onClick={() => setSelectedMethod(m)}
                      className={`px-4 py-2 rounded-xl font-mono text-xs font-bold border transition-all cursor-pointer ${
                        selectedMethod.method === m.method
                          ? "border-[#f97316] bg-orange-50 text-orange-950"
                          : "border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100"
                      }`}
                    >
                      {m.method}
                    </button>
                  ))}
                </div>

                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50 space-y-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                    <span className="px-2.5 py-1 rounded bg-stone-900 text-white font-bold">{selectedMethod.method}</span>
                    <span className="text-stone-900 font-semibold">{selectedMethod.endpoint}</span>
                    <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 font-bold">{selectedMethod.status}</span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs text-stone-700">
                    <span><strong>Safe:</strong> {selectedMethod.safe}</span>
                    <span><strong>Idempotent:</strong> {selectedMethod.idempotent}</span>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <pre className="p-4 rounded-xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto">{selectedMethod.requestBody}</pre>
                    <pre className="p-4 rounded-xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto">{selectedMethod.responseBody}</pre>
                  </div>
                </div>
              </div>
            )}

            {activeWorkbenchTab === "protocols" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                    Architecture Selector
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                    REST vs GraphQL vs gRPC Trade-Off Explorer
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {PROTOCOL_OPTIONS.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedProtocol(p)}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedProtocol.id === p.id
                          ? "border-[#f97316] bg-orange-50 text-orange-950 font-bold"
                          : "border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100"
                      }`}
                    >
                      <div className="text-sm font-bold">{p.name}</div>
                      <div className="text-xs text-stone-600 font-normal mt-1">{p.bestFor}</div>
                    </button>
                  ))}
                </div>

                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50 space-y-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <Layers size={16} className="text-orange-600" />
                    <span>{selectedProtocol.name}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700">{selectedProtocol.tradeoff}</p>
                  <pre className="p-4 rounded-xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto">
                    {selectedProtocol.snippet}
                  </pre>
                </div>
              </div>
            )}

            {activeWorkbenchTab === "openapi" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                      Contract-First Template
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                      OpenAPI 3.2.1 Specification Starter (openapi.yaml)
                    </h2>
                  </div>

                  <button
                    onClick={handleCopyOpenApi}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-900 text-white hover:bg-stone-800 text-xs font-semibold cursor-pointer shadow-xs transition-all"
                  >
                    {copiedOpenApi ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    <span>{copiedOpenApi ? "Copied!" : "Copy openapi.yaml"}</span>
                  </button>
                </div>

                <pre className="p-5 rounded-2xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed border border-stone-800">
                  {openApiSample}
                </pre>
              </div>
            )}

            {activeWorkbenchTab === "quiz" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                      Module 02 Knowledge Assessment
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                      HTTP Protocol &amp; API Design Examination
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
            onClick={() => navigate("/learning/backend-engineering")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 1 &mdash; Backend Engineering Foundations</span>
          </button>

          <button
            onClick={() => navigate("/learning/backend-engineering/spring-boot")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm cursor-pointer shadow-xs"
          >
            <span>Next: Module 3 &mdash; Java Backend Development with Spring Boot</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </main>
    </div>
  );
}
