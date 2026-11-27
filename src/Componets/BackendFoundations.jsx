import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Server,
  ArrowLeft,
  BookOpen,
  Copy,
  Check,
  Play,
  RefreshCw,
  ShieldCheck,
  Activity,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import BackendFoundationsSections from "./BackendFoundationsSections";

const REQUEST_STAGES = [
  {
    id: 0,
    title: "1. Client Request",
    layer: "Frontend (Browser)",
    latencyMs: 5,
    detail: "Student clicks My Courses; React sends GET /api/v1/me/courses with Authorization: Bearer <token>.",
    payload: "GET /api/v1/me/courses HTTP/1.1\nAuthorization: Bearer eyJhbGciOi...",
  },
  {
    id: 1,
    title: "2. DNS & TLS",
    layer: "Network Transport",
    latencyMs: 25,
    detail: "DNS resolves api.example.com to 203.0.113.10; TCP + TLS handshake encrypts the channel.",
    payload: "DNS: api.example.com -> 203.0.113.10\nTLS 1.3 handshake complete",
  },
  {
    id: 2,
    title: "3. Reverse Proxy / LB",
    layer: "Edge Infrastructure",
    latencyMs: 5,
    detail: "Load balancer terminates TLS, applies WAF rules, and routes to healthy Backend Server A.",
    payload: "Upstream: backend-server-a:3000 (healthy)",
  },
  {
    id: 3,
    title: "4. Middleware, AuthN & AuthZ",
    layer: "Backend Pipeline",
    latencyMs: 10,
    detail: "Request logger records start time, rate limiter passes, JWT verified (stu-101), role=student authorized.",
    payload: "req.user = { id: 'stu-101', role: 'student', status: 'active' }",
  },
  {
    id: 4,
    title: "5. Controller -> Service -> Repository",
    layer: "Application & Data",
    latencyMs: 45,
    detail: "CourseService calls EnrollmentRepository with parameterized SQL for active enrollments in published courses.",
    payload: "SELECT courses.id, courses.title FROM enrollments WHERE student_id = ?",
  },
  {
    id: 5,
    title: "6. JSON Response",
    layer: "HTTP 200 OK",
    latencyMs: 10,
    detail: "Backend serializes authorized course records and returns 200 OK JSON; frontend renders course cards.",
    payload: '{\n  "success": true,\n  "data": [{ "courseId": "course-101", "title": "Backend Engineering" }]\n}',
  },
];

const HTTP_STATUS_SCENARIOS = [
  { code: 200, label: "200 OK", color: "emerald", scenario: "GET /api/v1/me/courses", meaning: "Request succeeded and authorized courses JSON is returned." },
  { code: 201, label: "201 Created", color: "emerald", scenario: "POST /api/v1/students", meaning: "New student resource created successfully in database." },
  { code: 400, label: "400 Bad Request", color: "amber", scenario: "POST /api/v1/students (malformed JSON)", meaning: "Syntax or schema validation failed at the backend boundary." },
  { code: 401, label: "401 Unauthorized", color: "rose", scenario: "GET /api/v1/me/courses (expired token)", meaning: "Missing or invalid authentication credential." },
  { code: 403, label: "403 Forbidden", color: "rose", scenario: "DELETE /api/v1/courses/c-1 (as student)", meaning: "Authenticated identity lacks permission for this action." },
  { code: 404, label: "404 Not Found", color: "amber", scenario: "GET /api/v1/students/stu-999", meaning: "Requested resource does not exist." },
  { code: 409, label: "409 Conflict", color: "amber", scenario: "POST /api/v1/courses/c-1/enrollments (duplicate)", meaning: "Student is already actively enrolled in this course." },
  { code: 429, label: "429 Too Many Requests", color: "amber", scenario: "Burst login attempts", meaning: "Rate-limiting middleware blocked excessive traffic." },
];

export default function BackendFoundations() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("lifecycle");
  const [copiedCode, setCopiedCode] = useState(false);
  const [lifecycleStep, setLifecycleStep] = useState(0);
  const [selectedStatus, setSelectedStatus] = useState(HTTP_STATUS_SCENARIOS[0]);

  const quizQuestions = [
    {
      id: 1,
      question: "1. Why should the frontend not be trusted to calculate or enforce important business rules?",
      options: [
        "Browsers cannot perform arithmetic accurately",
        "Browser code is accessible to the user and can be modified or bypassed by sending direct HTTP requests",
        "Frontend frameworks delete business logic on page reload",
        "HTTP does not allow JSON bodies from browsers",
      ],
      correct: 1,
      explanation:
        "Frontend code runs in an untrusted environment (the user's browser) and can be inspected, modified, or bypassed via tools like curl. The backend must enforce authoritative business rules.",
    },
    {
      id: 2,
      question: "2. What is the key difference between HTTP status codes 401 Unauthorized and 403 Forbidden?",
      options: [
        "401 means the server crashed; 403 means the database is down",
        "401 means missing or invalid authentication; 403 means the user is authenticated but lacks permission",
        "401 is for GET requests; 403 is for POST requests",
        "There is no difference",
      ],
      correct: 1,
      explanation:
        "401 indicates missing or invalid authentication credentials, while 403 indicates the requester is identified but does not have permission for the operation.",
    },
    {
      id: 3,
      question: "3. Which HTTP method is generally used to partially update a resource (such as changing only a student's department)?",
      options: ["GET", "POST", "PATCH", "DELETE"],
      correct: 2,
      explanation: "PATCH applies partial modifications to a resource, whereas PUT replaces the entire resource representation.",
    },
    {
      id: 4,
      question: "4. What does idempotency mean in HTTP operations?",
      options: [
        "The server encrypts the response using TLS",
        "Repeating the same request has the same intended effect on the server as performing it once",
        "The request completes in under 10 milliseconds",
        "The server stores session state in memory",
      ],
      correct: 1,
      explanation: "An idempotent operation produces the same intended server state whether executed once or multiple times.",
    },
    {
      id: 5,
      question: "5. In a layered backend architecture, which layer handles HTTP-facing concerns like params and JSON responses?",
      options: ["Repository layer", "Database driver", "Controller / Presentation layer", "Domain entity layer"],
      correct: 2,
      explanation: "Controllers handle HTTP-facing operations, services hold business logic, and repositories handle data access.",
    },
    {
      id: 6,
      question: "6. What is the primary role of DNS during a backend API request?",
      options: [
        "Encrypting the HTTP payload",
        "Translating human-readable domain names into IP addresses",
        "Distributing traffic across backend containers",
        "Validating JWT access tokens",
      ],
      correct: 1,
      explanation: "DNS resolves domain names such as api.example.com into network IP addresses.",
    },
    {
      id: 7,
      question: "7. How is the relationship between language, runtime, and framework accurately described?",
      options: [
        "Node.js is a language, Express is a runtime, JavaScript is a framework",
        "JavaScript is a language, Node.js is a runtime environment, and Express is a web framework",
        "Spring Boot is a runtime, JVM is a language, Java is a framework",
        "Runtime and framework are identical terms",
      ],
      correct: 1,
      explanation: "JavaScript is the programming language, Node.js is the runtime executing it, and Express is the web framework.",
    },
    {
      id: 8,
      question: "8. What is eventual consistency in a distributed system?",
      options: [
        "All databases reject writes until every replica responds synchronously",
        "Separate components may not observe an update at the exact same instant, but converge to a consistent state once updates propagate",
        "Data is never persisted to disk",
        "Only one user can access the system at a time",
      ],
      correct: 1,
      explanation: "In asynchronous systems, downstream consumers process events shortly after the primary write, converging to the correct state.",
    },
    {
      id: 9,
      question: "9. Why is a modular monolith often recommended as the starting architecture for a new backend?",
      options: [
        "Monoliths cannot be refactored later",
        "It offers simpler development, testing, deployment, and transactions without premature distributed-system complexity",
        "Microservices do not support HTTP APIs",
        "Monoliths automatically scale each feature independently",
      ],
      correct: 1,
      explanation: "A modular monolith keeps clear internal module boundaries while avoiding distributed network and operational overhead early on.",
    },
    {
      id: 10,
      question: "10. How should the many-to-many relationship between students and courses be modeled in a relational database?",
      options: [
        "Store a comma-separated list of course IDs inside the students table",
        "Create an enrollments table referencing both student_id and course_id with uniqueness constraints",
        "Duplicate the courses table for every student",
        "Store enrollments only in browser localStorage",
      ],
      correct: 1,
      explanation: "A dedicated enrollments table with foreign keys and a uniqueness constraint on (student_id, course_id) cleanly models many-to-many relationships and prevents duplicate enrollments.",
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSelectOption = (qId, optionIdx) => {
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const score = useMemo(() => {
    let s = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) s++;
    });
    return s;
  }, [selectedAnswers]);

  const expressLabCode = `import express from "express";

const app = express();
app.use(express.json());

// Service layer (Challenge 5: separated from HTTP route)
const students = {
  "stu-101": { id: "stu-101", name: "Rahul Sharma", department: "Computer Science", year: 3 },
  "stu-102": { id: "stu-102", name: "Priya Patil", department: "Information Technology", year: 2 },
};

const studentService = {
  getAll: () => Object.values(students),
  getById: (id) => students[id] || null,
};

app.get("/api/v1/students", (req, res) => {
  return res.status(200).json({ success: true, data: studentService.getAll() });
});

app.get("/api/v1/students/:id", (req, res) => {
  const student = studentService.getById(req.params.id);
  if (!student) {
    return res.status(404).json({ success: false, message: "Student not found" });
  }
  return res.status(200).json({ success: true, data: student });
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(expressLabCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const currentStage = REQUEST_STAGES[lifecycleStep];
  const cumulativeLatency = REQUEST_STAGES.slice(0, lifecycleStep + 1).reduce(
    (sum, s) => sum + s.latencyMs,
    0
  );

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col antialiased selection:bg-[#f97316] selection:text-white pb-24">
      <ModuleNav track="backend-engineering" currentModuleId="foundations" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 w-full space-y-8">
        {/* Module Header */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Server size={12} className="text-orange-600" />
              Backend Engineering Track &bull; Module 01
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono text-emerald-700 font-bold">
              8 LESSONS &middot; LAB &middot; ARCHITECTURE ASSIGNMENT
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Module 01 &mdash; Backend Engineering Foundations
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-stone-600 max-w-4xl">
            Understand how backend systems work, how applications communicate with servers, how HTTP requests are processed end-to-end, and how to translate application requirements into a clean, secure backend architecture.
          </p>

          {/* Mode Switcher Tabs */}
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
          <BackendFoundationsSections />
        ) : (
          <div className="space-y-8">
            {/* Workbench Subtabs */}
            <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-4">
              <button
                onClick={() => setActiveWorkbenchTab("lifecycle")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "lifecycle"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                1. Request Lifecycle Tracer
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("status")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "status"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                2. HTTP Status &amp; Auth Explorer
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("lab")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "lab"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                3. Express Request Lab Runner
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

            {/* Workbench 1: Request Lifecycle Tracer */}
            {activeWorkbenchTab === "lifecycle" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                      Interactive Request Tracer
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                      Trace GET /api/v1/me/courses End-to-End
                    </h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setLifecycleStep((prev) => (prev + 1) % REQUEST_STAGES.length)}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#f97316] text-white hover:bg-orange-600 text-xs font-semibold cursor-pointer"
                    >
                      <Play size={14} />
                      <span>Next Stage</span>
                    </button>
                    <button
                      onClick={() => setLifecycleStep(0)}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 text-xs font-semibold cursor-pointer"
                    >
                      <RefreshCw size={14} />
                      <span>Reset</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                  {REQUEST_STAGES.map((stage, idx) => (
                    <button
                      key={stage.id}
                      onClick={() => setLifecycleStep(idx)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        lifecycleStep === idx
                          ? "border-[#f97316] bg-orange-50 text-orange-950 font-bold"
                          : idx < lifecycleStep
                          ? "border-emerald-200 bg-emerald-50/50 text-emerald-900"
                          : "border-stone-200 bg-stone-50 text-stone-600"
                      }`}
                    >
                      <div className="text-[11px] font-mono">{stage.latencyMs} ms</div>
                      <div className="text-xs mt-1">{stage.title}</div>
                    </button>
                  ))}
                </div>

                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-sm font-bold text-stone-900">
                      {currentStage.title} &mdash; {currentStage.layer}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-stone-900 text-white font-mono text-xs">
                      Cumulative Latency: {cumulativeLatency} ms
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700">{currentStage.detail}</p>
                  <pre className="p-4 rounded-xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto">
                    {currentStage.payload}
                  </pre>
                </div>
              </div>
            )}

            {/* Workbench 2: HTTP Status & Auth Explorer */}
            {activeWorkbenchTab === "status" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                    HTTP Contract Inspector
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                    HTTP Status Codes &amp; Authorization Scenarios
                  </h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {HTTP_STATUS_SCENARIOS.map((item) => (
                    <button
                      key={item.code}
                      onClick={() => setSelectedStatus(item)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedStatus.code === item.code
                          ? "border-[#f97316] bg-orange-50 text-orange-950 font-bold"
                          : "border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100"
                      }`}
                    >
                      <div className="font-mono text-xs font-bold">{item.label}</div>
                    </button>
                  ))}
                </div>

                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50 space-y-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-orange-600" />
                    <span className="font-mono text-sm font-bold text-stone-900">
                      {selectedStatus.label}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-stone-600">
                    Trigger: {selectedStatus.scenario}
                  </div>
                  <p className="text-xs sm:text-sm text-stone-800">{selectedStatus.meaning}</p>
                </div>
              </div>
            )}

            {/* Workbench 3: Express Request Lab Runner */}
            {activeWorkbenchTab === "lab" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                      Hands-On Lab Solution
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                      Express.js Request Lifecycle Server (with Service Layer)
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      Includes the base lab plus Challenges 1&ndash;5 (collection endpoint, year field, consistent 404 JSON, and separated service layer).
                    </p>
                  </div>

                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-900 text-white hover:bg-stone-800 text-xs font-semibold cursor-pointer shadow-xs transition-all"
                  >
                    {copiedCode ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    <span>{copiedCode ? "Copied!" : "Copy server.js"}</span>
                  </button>
                </div>

                <pre className="p-5 rounded-2xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed border border-stone-800">
                  {expressLabCode}
                </pre>
              </div>
            )}

            {/* Workbench 4: Knowledge Assessment Quiz */}
            {activeWorkbenchTab === "quiz" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                      Module 01 Knowledge Assessment
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                      Conceptual &amp; Architectural Examination
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      10 questions testing request lifecycle, HTTP semantics, authentication vs authorization, runtimes, and backend architecture patterns.
                    </p>
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
                                onClick={() => handleSelectOption(q.id, oIdx)}
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
            onClick={() => navigate("/learning")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Curriculum Hub</span>
          </button>

          <div className="text-xs font-mono text-stone-500">
            Backend Engineering &bull; Module 01 Foundations
          </div>
        </div>
      </main>
    </div>
  );
}
