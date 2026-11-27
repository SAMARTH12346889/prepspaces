import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Server,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Copy,
  Check,
  Play,
  RefreshCw,
  Activity,
  ShieldCheck,
  Lock,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import BackendAuthSecuritySections from "./BackendAuthSecuritySections";

const ROTATION_STEPS = [
  {
    id: 0,
    title: "1. Initial Login",
    status: "ACTIVE",
    detail: "Rahul logs in with email + password (BCrypt verified). Backend issues Access Token A1 (15m) and Refresh Token R1 (stored as hash in family F1).",
    state: "Family F1: [R1: VALID]",
  },
  {
    id: 1,
    title: "2. Normal Refresh",
    status: "ROTATED",
    detail: "A1 expires. Client sends R1 to POST /api/auth/refresh. Backend invalidates R1 and issues A2 + R2 in family F1.",
    state: "Family F1: [R1: USED/REVOKED, R2: VALID]",
  },
  {
    id: 2,
    title: "3. Stolen R1 Replayed",
    status: "REUSE DETECTED",
    detail: "An attacker replays old R1! Backend sees R1 was already rotated -> possible token theft detected.",
    state: "ALERT: R1 reused after rotation!",
  },
  {
    id: 3,
    title: "4. Family F1 Revoked",
    status: "REVOKED",
    detail: "Backend immediately revokes all tokens in Family F1 (including R2) and forces re-authentication.",
    state: "Family F1: [R1: REVOKED, R2: REVOKED]",
  },
];

export default function BackendAuthSecurity() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("rotation");
  const [rotationStep, setRotationStep] = useState(0);
  const [authModel, setAuthModel] = useState("jwt");
  const [copiedSecurity, setCopiedSecurity] = useState(false);

  const securityConfigCode = `@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {

  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
      .csrf(csrf -> csrf.disable()) // Only when using Bearer tokens, not cookies
      .sessionManagement(session ->
        session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
      )
      .authorizeHttpRequests(auth -> auth
        .requestMatchers("/api/auth/**").permitAll()
        .requestMatchers("/api/admin/**").hasRole("ADMIN")
        .requestMatchers("/api/instructor/**").hasAnyRole("INSTRUCTOR", "ADMIN")
        .requestMatchers("/api/student/**").hasAnyRole("STUDENT", "ADMIN")
        .anyRequest().authenticated()
      )
      .oauth2ResourceServer(oauth2 -> oauth2.jwt(Customizer.withDefaults()));
    return http.build();
  }
}`;

  const handleCopySecurity = () => {
    navigator.clipboard.writeText(securityConfigCode);
    setCopiedSecurity(true);
    setTimeout(() => setCopiedSecurity(false), 2000);
  };

  const quizQuestions = [
    {
      id: 1,
      question: "1. Why must public registration NEVER trust a role field supplied by the client?",
      options: [
        "Spring Security cannot parse JSON",
        "An attacker could send role=ADMIN during registration to escalate privileges",
        "Roles are stored in localStorage",
        "PostgreSQL rejects strings",
      ],
      correct: 1,
      explanation: "Always assign the default role (STUDENT) server-side during public registration.",
    },
    {
      id: 2,
      question: "2. Why store passwords with Argon2id or BCrypt instead of encryption or plain SHA-256?",
      options: [
        "They are one-way, salted, and computationally expensive to resist brute-force attacks",
        "BCrypt lets the backend decrypt original passwords",
        "SHA-256 fails on long passwords",
        "Encryption is faster",
      ],
      correct: 0,
      explanation: "Password hashing is one-way and salted; Argon2id/BCrypt resist brute-force cracking.",
    },
    {
      id: 3,
      question: "3. Which cookie attributes protect session or refresh-token cookies?",
      options: [
        "Public and Cacheable",
        "HttpOnly, Secure, and SameSite",
        "AllowAll and CrossOrigin",
        "PlainText and Persistent",
      ],
      correct: 1,
      explanation: "HttpOnly blocks JS access, Secure enforces HTTPS, and SameSite mitigates CSRF.",
    },
    {
      id: 4,
      question: "4. What is a critical misconception about a signed JWT?",
      options: [
        "JWTs expire automatically",
        "A signed JWT is Base64URL-encoded and readable by anyone—it is NOT encrypted",
        "JWTs cannot hold a sub claim",
        "JWTs require a DB lookup to decode",
      ],
      correct: 1,
      explanation: "Signing prevents tampering, not reading. Never store secrets or passwords in a signed JWT payload.",
    },
    {
      id: 5,
      question: "5. How does refresh-token rotation with reuse detection mitigate theft?",
      options: [
        "Refresh tokens never expire",
        "Each refresh invalidates R1 and issues R2; replaying R1 triggers family revocation",
        "It embeds the password in the token",
        "It disables access-token expiry",
      ],
      correct: 1,
      explanation: "Single-use rotation detects replay of already-used refresh tokens and revokes the token family.",
    },
    {
      id: 6,
      question: "6. What is the difference between OAuth 2.0 and OpenID Connect (OIDC)?",
      options: [
        "OAuth 2.0 is delegated authorization; OIDC adds user authentication and ID tokens on top of OAuth 2.0",
        "OIDC replaces HTTPS",
        "OAuth 2.0 is for SQL",
        "They are identical",
      ],
      correct: 0,
      explanation: "OAuth 2.0 handles delegated access; OIDC standardizes authentication and identity claims via ID tokens.",
    },
    {
      id: 7,
      question: "7. Why use Authorization Code Flow with PKCE for SPAs and mobile apps?",
      options: [
        "Public clients cannot keep a client secret, and PKCE protects the code exchange from interception",
        "PKCE removes redirect URIs",
        "PKCE encrypts PostgreSQL",
        "It skips user consent",
      ],
      correct: 0,
      explanation: "PKCE binds the authorization code to a client-side verifier so intercepted codes cannot be redeemed.",
    },
    {
      id: 8,
      question: "8. In Spring Security, what does @PreAuthorize(\"hasRole('ADMIN')\") check?",
      options: [
        "CORS headers",
        "Whether the authenticated principal has the ROLE_ADMIN authority",
        "Password length",
        "PostgreSQL connection",
      ],
      correct: 1,
      explanation: "hasRole('ADMIN') checks for the ROLE_ADMIN granted authority.",
    },
    {
      id: 9,
      question: "9. Why is RBAC alone insufficient when an instructor edits a course?",
      options: [
        "Instructors lack user IDs",
        "Role/permission checks don't verify ownership of that specific course (preventing IDOR/BOLA)",
        "RBAC only works with XML",
        "Roles cannot live in PostgreSQL",
      ],
      correct: 1,
      explanation: "Resource-level ownership checks verify the instructor is authorized for that specific course ID.",
    },
    {
      id: 10,
      question: "10. Why does deleting a JWT from the browser on logout not fully revoke it?",
      options: [
        "Browsers refuse to clear localStorage",
        "A copied JWT stays valid until exp unless paired with refresh revocation, a denylist, or token versioning",
        "JWTs live in DNS",
        "HTTPS caches JWTs for 30 days",
      ],
      correct: 1,
      explanation: "Self-contained JWTs remain valid until expiry unless server-side revocation mechanisms are checked.",
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

  const currentRotation = ROTATION_STEPS[rotationStep];

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col antialiased selection:bg-[#f97316] selection:text-white pb-24">
      <ModuleNav track="backend-engineering" currentModuleId="auth-security" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 w-full space-y-8">
        {/* Module Header */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Server size={12} className="text-orange-600" />
              Backend Engineering Track &bull; Module 05
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono text-emerald-700 font-bold">
              SPRING SECURITY &middot; JWT &middot; OAUTH 2.0 / OIDC &middot; RBAC
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Module 05 &mdash; Authentication and Authorization Engineering
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-stone-600 max-w-4xl">
            Build secure backend authentication and access control using Spring Security, Argon2id/BCrypt password hashing, sessions, JWTs, refresh-token rotation, OAuth 2.0 &amp; OpenID Connect (PKCE), RBAC, and resource-level permissions.
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
          <BackendAuthSecuritySections />
        ) : (
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-4">
              <button
                onClick={() => setActiveWorkbenchTab("rotation")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "rotation"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                1. Refresh Token Rotation Simulator
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("models")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "models"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                2. Session vs JWT vs OIDC
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("config")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "config"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                3. Spring SecurityFilterChain
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

            {activeWorkbenchTab === "rotation" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                      Token Security Simulator
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                      Refresh Token Rotation &amp; Reuse Detection
                    </h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setRotationStep((prev) => (prev + 1) % ROTATION_STEPS.length)}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#f97316] text-white hover:bg-orange-600 text-xs font-semibold cursor-pointer"
                    >
                      <Play size={14} />
                      <span>Next Step</span>
                    </button>
                    <button
                      onClick={() => setRotationStep(0)}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 text-xs font-semibold cursor-pointer"
                    >
                      <RefreshCw size={14} />
                      <span>Reset</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                  {ROTATION_STEPS.map((s, idx) => (
                    <button
                      key={s.id}
                      onClick={() => setRotationStep(idx)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        rotationStep === idx
                          ? "border-[#f97316] bg-orange-50 text-orange-950 font-bold"
                          : "border-stone-200 bg-stone-50 text-stone-700"
                      }`}
                    >
                      <div className="text-[11px] font-mono">{s.status}</div>
                      <div className="text-xs mt-1">{s.title}</div>
                    </button>
                  ))}
                </div>

                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50 space-y-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <Lock size={16} className="text-orange-600" />
                    <span>{currentRotation.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700">{currentRotation.detail}</p>
                  <div className="p-3 rounded-xl bg-stone-950 text-stone-100 font-mono text-xs">
                    {currentRotation.state}
                  </div>
                </div>
              </div>
            )}

            {activeWorkbenchTab === "models" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap gap-2">
                  {[
                    ["jwt", "Stateless JWT Bearer"],
                    ["session", "Server-Side Session Cookie"],
                    ["oidc", "OAuth 2.0 + OIDC (PKCE)"],
                  ].map(([id, label]) => (
                    <button
                      key={id}
                      onClick={() => setAuthModel(id)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold cursor-pointer border ${
                        authModel === id
                          ? "border-[#f97316] bg-orange-50 text-orange-950"
                          : "border-stone-200 bg-stone-50 text-stone-700"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <pre className="p-5 rounded-2xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed">
                  {authModel === "jwt"
                    ? `GET /api/student/courses HTTP/1.1
Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...
// Signed != Encrypted! Verify signature, exp, iss, aud on every request.`
                    : authModel === "session"
                    ? `Set-Cookie: JSESSIONID=abc123example; HttpOnly; Secure; SameSite=Lax
// Server validates session in Redis/store + enforces CSRF protection.`
                    : `1. Browser redirects to Google with code_challenge (PKCE)
2. User consents -> Authorization Code returned
3. Code + code_verifier exchanged for Access Token + OIDC ID Token`}
                </pre>
              </div>
            )}

            {activeWorkbenchTab === "config" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                      Spring Security Configuration
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                      Stateless JWT SecurityFilterChain + RBAC
                    </h2>
                  </div>

                  <button
                    onClick={handleCopySecurity}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-900 text-white hover:bg-stone-800 text-xs font-semibold cursor-pointer shadow-xs transition-all"
                  >
                    {copiedSecurity ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    <span>{copiedSecurity ? "Copied!" : "Copy SecurityConfig.java"}</span>
                  </button>
                </div>

                <pre className="p-5 rounded-2xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed border border-stone-800">
                  {securityConfigCode}
                </pre>
              </div>
            )}

            {activeWorkbenchTab === "quiz" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                      Module 05 Knowledge Assessment
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                      Authentication &amp; Authorization Examination
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
            onClick={() => navigate("/learning/backend-engineering/database-persistence")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 4 &mdash; Database Engineering and Backend Persistence</span>
          </button>

          <button
            onClick={() => navigate("/learning/backend-engineering/validation-reliability")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm cursor-pointer shadow-xs"
          >
            <span>Next: Module 6 &mdash; API Validation, Error Handling and Reliability</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </main>
    </div>
  );
}
