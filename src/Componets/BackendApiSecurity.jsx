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
  ShieldAlert,
  FileWarning,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import BackendApiSecuritySections from "./BackendApiSecuritySections";

const OWASP_RISKS = [
  {
    id: "bola",
    title: "API1: BOLA (Broken Object Level Authorization)",
    stride: "Information Disclosure / Tampering",
    problem: "GET /api/students/102/progress returns Student 102's data to Student 101 without checking ownership.",
    fix: "Derive userId from @AuthenticationPrincipal or query findByIdAndStudentId(progressId, currentStudentId).",
  },
  {
    id: "bfla",
    title: "API5: BFLA (Broken Function Level Authorization)",
    stride: "Elevation of Privilege",
    problem: "UI hides Admin buttons, but POST /api/admin/courses has no @PreAuthorize role check on the backend.",
    fix: "Enable @EnableMethodSecurity and enforce @PreAuthorize(\"hasRole('ADMIN')\") on privileged endpoints.",
  },
  {
    id: "bopla",
    title: "API3: Mass Assignment & Data Exposure",
    stride: "Tampering / Elevation of Privilege",
    problem: "Binding @RequestBody directly to JPA @Entity User lets clients send {\"role\": \"ADMIN\"}.",
    fix: "Use explicit UpdateProfileRequest and UserResponse DTOs excluding role, passwordHash, and internal flags.",
  },
  {
    id: "sqli",
    title: "SQL Injection & Dynamic Sorting",
    stride: "Tampering / Information Disclosure",
    problem: "Concatenating user input into SQL strings or ORDER BY clauses lets attackers alter query structure.",
    fix: "Use PreparedStatement / JPA @Param for values and a strict ALLOWED_SORT_FIELDS allowlist for sorting.",
  },
];

export default function BackendApiSecurity() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("owasp");
  const [selectedRisk, setSelectedRisk] = useState(OWASP_RISKS[0]);
  const [codeMode, setCodeMode] = useState("secure");
  const [copiedHardening, setCopiedHardening] = useState(false);

  const hardeningSnippet = `// Explicit CORS Allowlist (Before Spring Security Auth)
@Bean
public CorsConfigurationSource corsConfigurationSource() {
  CorsConfiguration config = new CorsConfiguration();
  config.setAllowedOrigins(List.of("https://frontend.example.com"));
  config.setAllowedMethods(List.of("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"));
  config.setAllowedHeaders(List.of("Authorization", "Content-Type", "X-Request-Id"));
  config.setAllowCredentials(false);
  UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
  source.registerCorsConfiguration("/api/**", config);
  return source;
}

// Dynamic Sort Allowlist
private static final Set<String> ALLOWED_SORT_FIELDS = Set.of("title", "createdAt", "level");
public Sort createSort(String sortBy, String direction) {
  if (!ALLOWED_SORT_FIELDS.contains(sortBy)) {
    throw new IllegalArgumentException("Invalid sort field");
  }
  return Sort.by(Sort.Direction.fromString(direction), sortBy);
}`;

  const handleCopyHardening = () => {
    navigator.clipboard.writeText(hardeningSnippet);
    setCopiedHardening(true);
    setTimeout(() => setCopiedHardening(false), 2000);
  };

  const quizQuestions = [
    {
      id: 1,
      question: "1. What is the key difference between BOLA and BFLA?",
      options: [
        "BOLA accesses an unauthorized object/record; BFLA executes an unauthorized function/operation",
        "BOLA is for PostgreSQL; BFLA is for Redis",
        "They are identical",
        "BFLA only applies to GET requests",
      ],
      correct: 0,
      explanation: "BOLA fails object-level ownership checks; BFLA fails function/role-level permission checks.",
    },
    {
      id: 2,
      question: "2. Why do random UUIDs NOT solve BOLA by themselves?",
      options: [
        "UUIDs cannot be stored in PostgreSQL",
        "If an attacker obtains a valid UUID, the backend must still verify ownership and permissions",
        "UUIDs disable HTTPS",
        "UUIDs break JSON",
      ],
      correct: 1,
      explanation: "Unpredictable IDs only hinder guessing; explicit authorization checks are always required.",
    },
    {
      id: 3,
      question: "3. How should SQL values and dynamic ORDER BY columns be secured?",
      options: [
        "Delete special characters; concatenate sort columns",
        "Use parameterized queries for values and a strict allowlist for dynamic sort fields/directions",
        "Base64-encode SQL strings",
        "Use frontend regex only",
      ],
      correct: 1,
      explanation: "Parameterization protects values, while allowlists protect structural SQL elements like column names.",
    },
    {
      id: 4,
      question: "4. How do you prevent Mass Assignment in Spring Boot?",
      options: [
        "Bind @RequestBody directly to JPA @Entity",
        "Use explicit request DTOs with only client-editable fields and never bind role/status from the request",
        "Use Access-Control-Allow-Origin: *",
        "Disable Bean Validation",
      ],
      correct: 1,
      explanation: "Explicit DTOs prevent attackers from modifying internal fields like role or accountEnabled.",
    },
    {
      id: 5,
      question: "5. What is a common misconception about CORS?",
      options: [
        "CORS uses HTTP headers",
        "Thinking CORS replaces backend authentication/authorization—non-browser clients ignore CORS",
        "CORS checks scheme, host, and port",
        "OPTIONS preflight is part of CORS",
      ],
      correct: 1,
      explanation: "CORS only restricts browser JS response reading; servers must always authenticate and authorize requests.",
    },
    {
      id: 6,
      question: "6. Why is checking only filename extension and Content-Type insufficient for file uploads?",
      options: [
        "Browsers cannot send Content-Type",
        "Both are client-supplied and spoofable; inspect actual file signatures, size, malware scan, and generate UUID storage keys",
        "PostgreSQL rejects PDFs",
        "Spring Boot disables MultipartFile",
      ],
      correct: 1,
      explanation: "Validate actual file content/signatures, enforce size limits, scan for malware, and store privately with server-generated keys.",
    },
    {
      id: 7,
      question: "7. In STRIDE, what is 'Elevation of Privilege'?",
      options: [
        "Pretending to be another user",
        "Gaining permissions beyond an authorized role (e.g., submitting role: ADMIN)",
        "Flooding an endpoint",
        "Denying an action",
      ],
      correct: 1,
      explanation: "Elevation of privilege occurs when a user gains higher privileges without authorization.",
    },
    {
      id: 8,
      question: "8. If a production API key is committed to Git, what must you do first?",
      options: [
        "Delete the line in a new commit",
        "Immediately revoke the exposed key, issue a replacement, update runtime secrets, and audit usage",
        "Add to .gitignore without revoking",
        "Base64-encode it",
      ],
      correct: 1,
      explanation: "Git history preserves old commits, so any exposed secret must be immediately revoked and rotated.",
    },
    {
      id: 9,
      question: "9. Which items should NEVER be logged directly?",
      options: [
        "Request IDs and HTTP status codes",
        "Passwords, access/refresh tokens, session IDs, API keys, and full Authorization headers",
        "Timestamps and actor IDs",
        "Course IDs",
      ],
      correct: 1,
      explanation: "Never log credentials or full auth headers, and sanitize untrusted text to prevent log injection.",
    },
    {
      id: 10,
      question: "10. What is the difference between SAST and DAST?",
      options: [
        "SAST inspects source code statically (Semgrep); DAST tests a running app via HTTP (OWASP ZAP)",
        "DAST reads Java files offline",
        "They are identical",
        "SAST requires PostgreSQL",
      ],
      correct: 0,
      explanation: "SAST analyzes source code statically; DAST probes a running test server dynamically.",
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
      <ModuleNav track="backend-engineering" currentModuleId="api-security" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 w-full space-y-8">
        {/* Module Header */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Server size={12} className="text-orange-600" />
              Backend Engineering Track &bull; Module 09
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono text-emerald-700 font-bold">
              OWASP API TOP 10 &middot; STRIDE &middot; BOLA/BFLA &middot; HARDENING
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Module 09 &mdash; API Security Engineering
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-stone-600 max-w-4xl">
            Identify, prevent, and remediate backend vulnerabilities using STRIDE threat modeling, OWASP API Top 10 defenses (BOLA, BFLA, Mass Assignment, SQL Injection), strict CORS, secure file uploads, Vault/Secret Manager credential hygiene, safe logging, and SAST/DAST hardening.
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
          <BackendApiSecuritySections />
        ) : (
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-4">
              <button
                onClick={() => setActiveWorkbenchTab("owasp")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "owasp"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                1. OWASP &amp; STRIDE Explorer
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("vulnfix")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "vulnfix"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                2. Vulnerable vs Secure Code
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("hardening")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "hardening"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                3. CORS &amp; Sort Allowlist
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

            {activeWorkbenchTab === "owasp" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {OWASP_RISKS.map((r) => (
                    <button
                      key={r.id}
                      onClick={() => setSelectedRisk(r)}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedRisk.id === r.id
                          ? "border-[#f97316] bg-orange-50 text-orange-950 font-bold"
                          : "border-stone-200 bg-stone-50 text-stone-700"
                      }`}
                    >
                      <div className="text-[11px] font-mono text-orange-700">{r.stride}</div>
                      <div className="text-xs font-bold mt-1">{r.title}</div>
                    </button>
                  ))}
                </div>

                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50 space-y-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <ShieldAlert size={16} className="text-orange-600" />
                    <span>{selectedRisk.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-rose-900 bg-rose-50 border border-rose-200 p-3 rounded-xl">
                    <strong>Vulnerability:</strong> {selectedRisk.problem}
                  </p>
                  <p className="text-xs sm:text-sm text-emerald-900 bg-emerald-50 border border-emerald-200 p-3 rounded-xl">
                    <strong>Remediation:</strong> {selectedRisk.fix}
                  </p>
                </div>
              </div>
            )}

            {activeWorkbenchTab === "vulnfix" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex gap-2">
                  <button
                    onClick={() => setCodeMode("vulnerable")}
                    className={`px-4 py-2 rounded-xl text-xs font-bold cursor-pointer ${
                      codeMode === "vulnerable" ? "bg-rose-600 text-white" : "bg-stone-100 text-stone-700"
                    }`}
                  >
                    Vulnerable Code (BOLA + SQLi + Mass Assignment)
                  </button>
                  <button
                    onClick={() => setCodeMode("secure")}
                    className={`px-4 py-2 rounded-xl text-xs font-bold cursor-pointer ${
                      codeMode === "secure" ? "bg-emerald-600 text-white" : "bg-stone-100 text-stone-700"
                    }`}
                  >
                    Secure Remediation
                  </button>
                </div>

                <pre className="p-5 rounded-2xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed">
                  {codeMode === "vulnerable"
                    ? `// VULNERABLE: No ownership check, raw SQL concat, entity binding
@GetMapping("/students/{id}/progress")
public Progress getProgress(@PathVariable Long id) {
  return progressRepository.findByStudentId(id); // BOLA!
}
String sql = "SELECT * FROM courses WHERE title = '" + title + "'"; // SQLi!
@PutMapping("/users/{id}")
public User update(@PathVariable Long id, @RequestBody User user) { ... } // Mass Assignment!`
                    : `// SECURE: Principal-scoped lookup, parameterized query, explicit DTO
@GetMapping("/me/progress")
public Progress getMyProgress(@AuthenticationPrincipal AppUserPrincipal principal) {
  return progressService.getProgress(principal.getUserId());
}
@Query("SELECT c FROM Course c WHERE c.title = :title")
List<Course> findCoursesByTitle(@Param("title") String title);
@PutMapping("/profile")
public UserResponse updateProfile(@Valid @RequestBody UpdateProfileRequest req,
                                  @AuthenticationPrincipal AppUserPrincipal principal) { ... }`}
                </pre>
              </div>
            )}

            {activeWorkbenchTab === "hardening" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                      Spring Security Hardening
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                      Strict CORS Allowlist &amp; Dynamic Sort Allowlist
                    </h2>
                  </div>

                  <button
                    onClick={handleCopyHardening}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-900 text-white hover:bg-stone-800 text-xs font-semibold cursor-pointer shadow-xs transition-all"
                  >
                    {copiedHardening ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    <span>{copiedHardening ? "Copied!" : "Copy Snippet"}</span>
                  </button>
                </div>

                <pre className="p-5 rounded-2xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed border border-stone-800">
                  {hardeningSnippet}
                </pre>
              </div>
            )}

            {activeWorkbenchTab === "quiz" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                      Module 09 Knowledge Assessment
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                      API Security Engineering Examination
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
            onClick={() => navigate("/learning/backend-engineering/testing-quality")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 8 &mdash; Backend Testing and API Quality Engineering</span>
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
