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
  Activity,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import BackendValidationReliabilitySections from "./BackendValidationReliabilitySections";

const CB_STATES = [
  {
    id: 0,
    state: "CLOSED",
    detail: "Normal operation: Requests flow to external AI/Payment service. Resilience4j monitors failure rate over slidingWindowSize=10.",
    action: "Calls allowed | Failure rate: 10% (< 50% threshold)",
  },
  {
    id: 1,
    state: "OPEN",
    detail: "Failure rate exceeds 50%! Circuit opens to stop hammering the failing downstream service. Requests fail fast or return a safe fallback.",
    action: "Calls blocked for waitDurationInOpenState=30s | Fast-fail 503",
  },
  {
    id: 2,
    state: "HALF-OPEN",
    detail: "After 30s wait duration, circuit allows permittedNumberOfCallsInHalfOpenState=2 test requests to check if the provider recovered.",
    action: "2 probe requests sent -> Both succeed -> Transitions back to CLOSED",
  },
];

export default function BackendValidationReliability() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("circuit");
  const [cbStep, setCbStep] = useState(0);
  const [reliabilityPattern, setReliabilityPattern] = useState("idempotency");
  const [copiedCode, setCopiedCode] = useState(false);

  const problemDetailSnippet = `@RestControllerAdvice
public class GlobalExceptionHandler {

  @ExceptionHandler(ResourceNotFoundException.class)
  public ResponseEntity<ProblemDetail> handleNotFound(ResourceNotFoundException ex) {
    ProblemDetail problem = ProblemDetail.forStatusAndDetail(
        HttpStatus.NOT_FOUND, ex.getMessage());
    problem.setTitle("Resource Not Found");
    problem.setProperty("errorCode", "RESOURCE_NOT_FOUND");
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(problem);
  }
}

// Resilience4j CircuitBreaker Config
CircuitBreakerConfig config = CircuitBreakerConfig.custom()
    .failureRateThreshold(50)
    .slidingWindowSize(10)
    .minimumNumberOfCalls(5)
    .waitDurationInOpenState(Duration.ofSeconds(30))
    .permittedNumberOfCallsInHalfOpenState(2)
    .build();`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(problemDetailSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const quizQuestions = [
    {
      id: 1,
      question: "1. What is the key difference between input validation and sanitization?",
      options: [
        "They are identical",
        "Validation rejects invalid inputs; sanitization transforms permitted inputs into a safe representation",
        "Sanitization replaces parameterized SQL",
        "Validation only runs in React",
      ],
      correct: 1,
      explanation: "Validation enforces rules to accept/reject input; sanitization transforms input (e.g. stripping unsafe HTML) when appropriate.",
    },
    {
      id: 2,
      question: "2. Which standard defines the Problem Details JSON format supported by Spring's ProblemDetail?",
      options: ["RFC 9110", "RFC 9457", "RFC 2616", "RFC 7519"],
      correct: 1,
      explanation: "RFC 9457 defines Problem Details for HTTP APIs.",
    },
    {
      id: 3,
      question: "3. What is the difference between DTO validation and business logic validation?",
      options: [
        "DTO validation checks structural/field rules; business validation checks domain rules like seat availability or duplicate enrolment",
        "Business validation runs in the browser",
        "DTO validation checks PostgreSQL locks",
        "They are identical",
      ],
      correct: 0,
      explanation: "A structurally valid DTO can still violate domain rules (e.g., course full or archived).",
    },
    {
      id: 4,
      question: "4. What should a backend do if a client reuses an Idempotency-Key with a DIFFERENT payload?",
      options: [
        "Overwrite the old response",
        "Reject the request because the key was reused with a mismatched payload",
        "Return 200 OK",
        "Delete the idempotency table",
      ],
      correct: 1,
      explanation: "Comparing request_hash prevents a client from accidentally reusing an idempotency key for a different operation.",
    },
    {
      id: 5,
      question: "5. Why is local in-memory rate limiting insufficient across multiple backend instances?",
      options: [
        "Java cannot count in memory",
        "Each instance counts separately, allowing clients to exceed the global limit; Redis provides shared state",
        "Rate limiting requires HTTP/3",
        "Local memory cannot return 429",
      ],
      correct: 1,
      explanation: "Distributed rate limiting uses Redis or an API gateway so all instances enforce the same limit.",
    },
    {
      id: 6,
      question: "6. Why add jitter to exponential backoff retries?",
      options: [
        "To make every retry wait 0 ms",
        "To randomize retry delays and prevent synchronized retry storms",
        "To bypass TLS timeouts",
        "To convert 400 into 200",
      ],
      correct: 1,
      explanation: "Jitter spreads retry traffic over time so recovering services aren't overwhelmed simultaneously.",
    },
    {
      id: 7,
      question: "7. Which failures should generally NOT be retried automatically?",
      options: [
        "Transient network timeouts",
        "HTTP 400 validation errors, 401/403 auth errors, or non-idempotent POSTs without idempotency keys",
        "HTTP 503 with Retry-After",
        "Temporary connection resets",
      ],
      correct: 1,
      explanation: "Permanent client errors and unprotected non-idempotent mutations should not be blindly retried.",
    },
    {
      id: 8,
      question: "8. What are the three states of a Circuit Breaker?",
      options: [
        "Start, Middle, End",
        "Closed, Open, and Half-Open",
        "Active, Inactive, Archived",
        "Read, Write, Lock",
      ],
      correct: 1,
      explanation: "Circuit breakers transition between Closed (normal), Open (fast-fail), and Half-Open (recovery probe).",
    },
    {
      id: 9,
      question: "9. How does the Transactional Outbox Pattern prevent partial failure?",
      options: [
        "Disables DB transactions",
        "Writes business data and an outbox event in the same local DB transaction, then publishes asynchronously",
        "Sends emails before saving to DB",
        "Retries forever in the controller",
      ],
      correct: 1,
      explanation: "Atomic DB commit of business data + outbox row guarantees events are never lost if the broker is down.",
    },
    {
      id: 10,
      question: "10. Which API change is considered BREAKING for existing clients?",
      options: [
        "Adding an optional response field",
        "Adding a new endpoint",
        "Renaming or removing an existing response field, or changing its type",
        "Improving DB latency",
      ],
      correct: 2,
      explanation: "Renaming/removing existing fields or changing types breaks existing client contracts.",
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

  const currentCb = CB_STATES[cbStep];

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col antialiased selection:bg-[#f97316] selection:text-white pb-24">
      <ModuleNav track="backend-engineering" currentModuleId="validation-reliability" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 w-full space-y-8">
        {/* Module Header */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Server size={12} className="text-orange-600" />
              Backend Engineering Track &bull; Module 06
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono text-emerald-700 font-bold">
              RFC 9457 &middot; IDEMPOTENCY &middot; REDIS &middot; RESILIENCE4J
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Module 06 &mdash; API Validation, Error Handling and Reliability
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-stone-600 max-w-4xl">
            Make backend APIs predictable and fault-tolerant using Jakarta Bean Validation, RFC 9457 Problem Details, Idempotency-Key deduplication, Redis distributed rate limiting, timeouts, exponential backoff with jitter, Resilience4j circuit breakers, and Transactional Outbox recovery.
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
          <BackendValidationReliabilitySections />
        ) : (
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-4">
              <button
                onClick={() => setActiveWorkbenchTab("circuit")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "circuit"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                1. Circuit Breaker Simulator
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("patterns")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "patterns"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                2. Idempotency &amp; Rate Limiting
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("code")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "code"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                3. RFC 9457 &amp; Resilience4j
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

            {activeWorkbenchTab === "circuit" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                      Fault Tolerance Simulator
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                      Circuit Breaker Lifecycle (Closed &rarr; Open &rarr; Half-Open)
                    </h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCbStep((prev) => (prev + 1) % CB_STATES.length)}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#f97316] text-white hover:bg-orange-600 text-xs font-semibold cursor-pointer"
                    >
                      <Play size={14} />
                      <span>Next State</span>
                    </button>
                    <button
                      onClick={() => setCbStep(0)}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 text-xs font-semibold cursor-pointer"
                    >
                      <RefreshCw size={14} />
                      <span>Reset</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {CB_STATES.map((s, idx) => (
                    <button
                      key={s.id}
                      onClick={() => setCbStep(idx)}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                        cbStep === idx
                          ? "border-[#f97316] bg-orange-50 text-orange-950 font-bold"
                          : "border-stone-200 bg-stone-50 text-stone-700"
                      }`}
                    >
                      <div className="font-mono text-xs">{s.state}</div>
                    </button>
                  ))}
                </div>

                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50 space-y-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <AlertTriangle size={16} className="text-orange-600" />
                    <span>State: {currentCb.state}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700">{currentCb.detail}</p>
                  <div className="p-3 rounded-xl bg-stone-950 text-stone-100 font-mono text-xs">
                    {currentCb.action}
                  </div>
                </div>
              </div>
            )}

            {activeWorkbenchTab === "patterns" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap gap-2">
                  {[
                    ["idempotency", "Idempotency-Key Flow"],
                    ["ratelimit", "Token Bucket + 429"],
                    ["outbox", "Transactional Outbox"],
                  ].map(([id, label]) => (
                    <button
                      key={id}
                      onClick={() => setReliabilityPattern(id)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold cursor-pointer border ${
                        reliabilityPattern === id
                          ? "border-[#f97316] bg-orange-50 text-orange-950"
                          : "border-stone-200 bg-stone-50 text-stone-700"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <pre className="p-5 rounded-2xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed">
                  {reliabilityPattern === "idempotency"
                    ? `POST /api/v1/enrollments
Idempotency-Key: 9f8a7b6c-example-key
// Backend checks idempotency_records(key, request_hash):
// - New key -> execute, store status/body, return 201
// - Same key + same hash -> return cached 201 without re-running
// - Same key + different hash -> reject 409/422`
                    : reliabilityPattern === "ratelimit"
                    ? `HTTP/1.1 429 Too Many Requests
Retry-After: 30
Content-Type: application/json
{ "errorCode": "RATE_LIMIT_EXCEEDED", "message": "Too many requests. Please try again later." }`
                    : `BEGIN TRANSACTION;
  INSERT INTO enrollments (user_id, course_id, status) VALUES (1, 101, 'ACTIVE');
  INSERT INTO outbox_events (event_type, payload, status) VALUES ('StudentEnrolled', '{...}', 'PENDING');
COMMIT;`}
                </pre>
              </div>
            )}

            {activeWorkbenchTab === "code" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                      Error Handling &amp; Resilience
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                      RFC 9457 ProblemDetail &amp; Resilience4j Config
                    </h2>
                  </div>

                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-900 text-white hover:bg-stone-800 text-xs font-semibold cursor-pointer shadow-xs transition-all"
                  >
                    {copiedCode ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    <span>{copiedCode ? "Copied!" : "Copy Snippet"}</span>
                  </button>
                </div>

                <pre className="p-5 rounded-2xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed border border-stone-800">
                  {problemDetailSnippet}
                </pre>
              </div>
            )}

            {activeWorkbenchTab === "quiz" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                      Module 06 Knowledge Assessment
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                      Validation, Error Handling &amp; Reliability Examination
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
            onClick={() => navigate("/learning/backend-engineering/auth-security")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 5 &mdash; Authentication and Authorization Engineering</span>
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
