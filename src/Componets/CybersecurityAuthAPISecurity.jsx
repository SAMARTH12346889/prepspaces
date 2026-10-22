import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ModuleNav from "./ModuleNav";
import {
  Shield,
  Key,
  Lock,
  Terminal,
  CheckCircle2,
  ChevronRight,
  BookOpen,
  AlertTriangle,
  Play,
  HelpCircle,
  Award,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  RefreshCw,
  Eye,
  EyeOff,
  Server,
  Database,
  Code,
  Check,
  X,
  Copy,
  ListCheck,
  Sparkles,
  AlertCircle,
  Cpu,
  Bug,
  Globe,
  Layers,
  UserCheck,
  ShieldAlert,
  FileText,
  Send,
  UserX,
  Network,
  Filter,
  Zap,
  Activity,
  ShieldCheck,
  KeyRound,
  Radio,
  Sliders,
  Hash,
  LockKeyhole
} from "lucide-react";

export default function CybersecurityAuthAPISecurity() {
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Main navigation tab state
  const [activeTab, setActiveTab] = useState("theory");

  // =========================================================================
  // INTERACTIVE LAB 1 STATE: Authentication & Account Enumeration Defense
  // =========================================================================
  const [lab1Email, setLab1Email] = useState("student@prepspaces.com");
  const [lab1Password, setLab1Password] = useState("wrongPassword123!");
  const [lab1GenericErrors, setLab1GenericErrors] = useState(true);
  const [lab1Attempts, setLab1Attempts] = useState(0);
  const [lab1Result, setLab1Result] = useState(null);

  const handleLab1Login = (e) => {
    e.preventDefault();
    const newCount = lab1Attempts + 1;
    setLab1Attempts(newCount);

    if (newCount > 5) {
      setLab1Result({
        status: 429,
        message: "Too Many Requests. IP temporarily throttled due to repeated authentication failures.",
        isBlocked: true,
        leaksAccount: false
      });
      return;
    }

    const accountExists = lab1Email === "student@prepspaces.com";
    const passwordCorrect = lab1Password === "PrepSpaces2026!Secure";

    if (!accountExists) {
      setLab1Result({
        status: 401,
        message: lab1GenericErrors 
          ? "Invalid email or password. Please verify your credentials."
          : "Error: No account found registered under this email address.",
        isBlocked: false,
        leaksAccount: !lab1GenericErrors
      });
    } else if (!passwordCorrect) {
      setLab1Result({
        status: 401,
        message: lab1GenericErrors
          ? "Invalid email or password. Please verify your credentials."
          : "Error: Incorrect password entered for student@prepspaces.com.",
        isBlocked: false,
        leaksAccount: !lab1GenericErrors
      });
    } else {
      setLab1Result({
        status: 200,
        message: "Authentication successful! Fresh session token issued with 15-minute expiration.",
        isBlocked: false,
        leaksAccount: false
      });
      setLab1Attempts(0);
    }
  };

  // =========================================================================
  // INTERACTIVE LAB 2 STATE: BOLA / IDOR Exploitation & Defense
  // =========================================================================
  const [lab2ActiveUser, setLab2ActiveUser] = useState("user_alice");
  const [lab2ReportId, setLab2ReportId] = useState("rep_alice_101");
  const [lab2OwnershipEnforced, setLab2OwnershipEnforced] = useState(true);
  const [lab2Response, setLab2Response] = useState(null);

  const syntheticReports = {
    "rep_alice_101": {
      id: "rep_alice_101",
      owner: "user_alice",
      title: "Alice's System Design Mock Interview",
      score: "94/100",
      notes: "Exceptional architecture on sharding and caching strategies."
    },
    "rep_bob_202": {
      id: "rep_bob_202",
      owner: "user_bob",
      title: "Bob's Distributed Algorithms Technical Evaluation",
      score: "68/100",
      notes: "Needs improvement in consensus algorithms and quorum replication."
    }
  };

  const handleLab2Fetch = () => {
    const report = syntheticReports[lab2ReportId];
    if (!report) {
      setLab2Response({
        status: 404,
        data: { error: "Report not found" },
        query: `SELECT * FROM interview_reports WHERE id = '${lab2ReportId}'`
      });
      return;
    }

    if (lab2OwnershipEnforced) {
      if (report.owner !== lab2ActiveUser) {
        setLab2Response({
          status: 404,
          data: { error: "Report not found" },
          query: `SELECT * FROM interview_reports WHERE id = '${lab2ReportId}' AND owner_user_id = '${lab2ActiveUser}'`,
          explanation: "SECURE: Query scoped to active session owner. Returns 404 to avoid disclosing existence of Bob's report."
        });
      } else {
        setLab2Response({
          status: 200,
          data: report,
          query: `SELECT * FROM interview_reports WHERE id = '${lab2ReportId}' AND owner_user_id = '${lab2ActiveUser}'`,
          explanation: "SECURE: Ownership verified. Resource belongs to authenticated session."
        });
      }
    } else {
      // VULNERABLE BOLA / IDOR
      const isBreach = report.owner !== lab2ActiveUser;
      setLab2Response({
        status: 200,
        data: report,
        query: `SELECT * FROM interview_reports WHERE id = '${lab2ReportId}'`,
        explanation: isBreach 
          ? "CRITICAL BOLA VULNERABILITY! Alice successfully accessed Bob's confidential interview evaluation by changing the ID!" 
          : "Vulnerable query pattern used, but matched Alice's own record."
      });
    }
  };

  // =========================================================================
  // INTERACTIVE LAB 3 STATE: BFLA & BOPLA (Mass Assignment)
  // =========================================================================
  const [lab3UserRole, setLab3UserRole] = useState("student");
  const [lab3RequestedRole, setLab3RequestedRole] = useState("platform_admin");
  const [lab3DisplayName, setLab3DisplayName] = useState("Alex Developer");
  const [lab3AllowlistEnabled, setLab3AllowlistEnabled] = useState(true);
  const [lab3Endpoint, setLab3Endpoint] = useState("patch_profile");
  const [lab3Result, setLab3Result] = useState(null);

  const handleLab3Execute = () => {
    if (lab3Endpoint === "admin_endpoint") {
      if (lab3UserRole !== "platform_admin") {
        setLab3Result({
          status: 403,
          action: "POST /api/admin/system/flush-caches",
          data: { error: "Forbidden: Caller requires platform_admin role." },
          evaluation: "SECURE: Server rejected unauthorized function invocation via BFLA check."
        });
      } else {
        setLab3Result({
          status: 200,
          action: "POST /api/admin/system/flush-caches",
          data: { success: true, message: "System caches purged." },
          evaluation: "Authorized administrator invocation permitted."
        });
      }
    } else {
      // Profile PATCH with potential mass assignment
      if (lab3AllowlistEnabled) {
        setLab3Result({
          status: 200,
          action: "PATCH /api/users/profile",
          data: {
            displayName: lab3DisplayName,
            role: lab3UserRole // Stays original role!
          },
          evaluation: "SECURE: Strict server-side allowlisting ignored 'role' and 'isAdmin' properties. Only permitted profile fields updated."
        });
      } else {
        setLab3Result({
          status: 200,
          action: "PATCH /api/users/profile",
          data: {
            displayName: lab3DisplayName,
            role: lab3RequestedRole // Mass assignment exploit succeeded!
          },
          evaluation: "CRITICAL BOPLA EXPLOIT: Mass assignment allowed user to elevate themselves to platform_admin by including role in payload!"
        });
      }
    }
  };

  // =========================================================================
  // INTERACTIVE LAB 4 STATE: JWT & Token Validation Sandbox
  // =========================================================================
  const [lab4Scenario, setLab4Scenario] = useState("valid");
  const [lab4Inspection, setLab4Inspection] = useState(null);

  const jwtTokens = {
    valid: {
      raw: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c3JfMTA0IiwiaXNzIjoicHJlcHNwYWNlcy5jb20iLCJhdWQiOiJwcmVwc3BhY2VzLWFwaSIsImV4cCI6MTc5MjE1NTIwMCwicm9sZSI6InN0dWRlbnQifQ.SIGNATURE_VERIFIED",
      header: { alg: "RS256", typ: "JWT" },
      payload: { sub: "usr_104", iss: "prepspaces.com", aud: "prepspaces-api", exp: "2026-10-22 (Valid)", role: "student" },
      status: "VALID",
      message: "Signature verified against public key. Claims 'iss', 'aud', and 'exp' meet expected API security profile."
    },
    alg_none: {
      raw: "eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJzdWIiOiJ1c3JfOTk5IiwiaXNzIjoicHJlcHNwYWNlcy5jb20iLCJhdWQiOiJwcmVwc3BhY2VzLWFwaSIsImV4cCI6MTc5MjE1NTIwMCwicm9sZSI6InBsYXRmb3JtX2FkbWluIn0.",
      header: { alg: "none", typ: "JWT" },
      payload: { sub: "usr_999", iss: "prepspaces.com", aud: "prepspaces-api", exp: "2026-10-22 (Valid)", role: "platform_admin" },
      status: "REJECTED (HTTP 401)",
      message: "CRITICAL FAILURE REJECTED: Server strictly enforces RS256. Tokens with alg='none' or unsigned payloads are dropped."
    },
    expired: {
      raw: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c3JfMTA0IiwiaXNzIjoicHJlcHNwYWNlcy5jb20iLCJhdWQiOiJwcmVwc3BhY2VzLWFwaSIsImV4cCI6MTY3MjUyMTYwMCwicm9sZSI6InN0dWRlbnQifQ.SIGNATURE_EXPIRED",
      header: { alg: "RS256", typ: "JWT" },
      payload: { sub: "usr_104", iss: "prepspaces.com", aud: "prepspaces-api", exp: "2023-01-01 (EXPIRED)", role: "student" },
      status: "REJECTED (HTTP 401)",
      message: "TOKEN EXPIRED: 'exp' claim is in the past. Even though the signature is mathematically valid, the token is revoked/expired."
    },
    wrong_aud: {
      raw: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c3JfMTA0IiwiaXNzIjoicHJlcHNwYWNlcy5jb20iLCJhdWQiOiJiaWxsaW5nLW1pY3Jvc2VydmljZSIsImV4cCI6MTc5MjE1NTIwMCwicm9sZSI6InN0dWRlbnQifQ.SIGNATURE_MISMATCH",
      header: { alg: "RS256", typ: "JWT" },
      payload: { sub: "usr_104", iss: "prepspaces.com", aud: "billing-microservice", exp: "2026-10-22 (Valid)", role: "student" },
      status: "REJECTED (HTTP 403)",
      message: "AUDIENCE MISMATCH: Token was issued for 'billing-microservice', not 'prepspaces-api'. Cross-service token reuse blocked."
    }
  };

  useEffect(() => {
    setLab4Inspection(jwtTokens[lab4Scenario]);
  }, [lab4Scenario]);

  // =========================================================================
  // INTERACTIVE LAB 5 STATE: Rate Limiting & Resource Consumption
  // =========================================================================
  const [lab5Tokens, setLab5Tokens] = useState(5);
  const [lab5PageSize, setLab5PageSize] = useState(20);
  const [lab5Log, setLab5Log] = useState([]);

  const handleLab5Fire = () => {
    if (lab5PageSize > 100) {
      setLab5Log((prev) => [
        {
          id: Date.now(),
          type: "danger",
          text: `HTTP 400 Bad Request: Requested page size ${lab5PageSize} exceeds max permitted limit (100). Unrestricted resource consumption prevented.`
        },
        ...prev.slice(0, 5)
      ]);
      return;
    }

    if (lab5Tokens <= 0) {
      setLab5Log((prev) => [
        {
          id: Date.now(),
          type: "danger",
          text: "HTTP 429 Too Many Requests: Rate limit exceeded (Token bucket empty). Header Retry-After: 30."
        },
        ...prev.slice(0, 5)
      ]);
    } else {
      setLab5Tokens((prev) => prev - 1);
      setLab5Log((prev) => [
        {
          id: Date.now(),
          type: "success",
          text: `HTTP 200 OK: Processed request for page size ${lab5PageSize}. Remaining tokens in window: ${lab5Tokens - 1}`
        },
        ...prev.slice(0, 5)
      ]);
    }
  };

  const handleLab5Refill = () => {
    setLab5Tokens(5);
    setLab5Log((prev) => [
      { id: Date.now(), type: "info", text: "Token bucket refilled to 5 tokens (Window refreshed)." },
      ...prev.slice(0, 5)
    ]);
  };

  // =========================================================================
  // INTERACTIVE LAB 6 STATE: SSRF & Third-Party Trust Sandbox
  // =========================================================================
  const [lab6Url, setLab6Url] = useState("https://api.github.com/repos/prepspaces/code");
  const [lab6Response, setLab6Response] = useState(null);

  const handleLab6Test = (urlToTest) => {
    const target = urlToTest || lab6Url;
    setLab6Url(target);

    // SSRF detection logic
    const lower = target.toLowerCase();
    if (
      lower.includes("169.254.169.254") ||
      lower.includes("metadata.google.internal") ||
      lower.includes("127.0.0.1") ||
      lower.includes("localhost") ||
      lower.includes("192.168.") ||
      lower.includes("10.") ||
      lower.includes("172.16.")
    ) {
      setLab6Response({
        status: 400,
        allowed: false,
        reason: "SSRF ATTEMPT BLOCKED: Destination resolves to a restricted internal address, loopback, or cloud instance metadata endpoint (API7:2023)."
      });
    } else if (!lower.startsWith("https://")) {
      setLab6Response({
        status: 400,
        allowed: false,
        reason: "INSECURE PROTOCOL BLOCKED: Non-HTTPS destination prohibited. Only encrypted external integrations allowed."
      });
    } else {
      setLab6Response({
        status: 200,
        allowed: true,
        reason: "DESTINATION PERMITTED: Egress firewall allowed outbound connection to public third-party integration after DNS validation and schema enforcement."
      });
    }
  };

  // =========================================================================
  // 8-POINT LAB SUBMISSION CHECKLIST
  // =========================================================================
  const [checklist, setChecklist] = useState({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
    item6: false,
    item7: false,
    item8: false
  });

  const toggleChecklist = (key) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedChecklistCount = Object.values(checklist).filter(Boolean).length;

  // =========================================================================
  // KNOWLEDGE ASSESSMENT QUIZ (6 QUESTIONS)
  // =========================================================================
  const quizQuestions = [
    {
      id: 1,
      question:
        "An authenticated student requests another student's private report. Which control should decide whether the report can be accessed?",
      options: [
        "The fact that the student has signed in successfully",
        "A server-side object-level authorization check",
        "Whether the report identifier is difficult to guess",
        "A frontend button that hides the report link"
      ],
      correctAnswer: 1,
      explanation:
        "Authentication confirms identity, but authorization decides if that specific identity owns or has explicit permission to view the resource. A server-side object-level authorization check is required."
    },
    {
      id: 2,
      question: "What is broken function-level authorization (BFLA)?",
      options: [
        "A user enters an invalid email address",
        "An API returns a temporary network error",
        "A user can invoke an operation that their permissions should not allow",
        "A session expires according to policy"
      ],
      correctAnswer: 2,
      explanation:
        "Broken Function Level Authorization (BFLA, OWASP API5:2023) happens when access control checks are missing on endpoints, allowing regular users or lower-privileged roles to invoke administrative or privileged actions."
    },
    {
      id: 3,
      question: "Which statement about JSON Web Tokens (JWTs) is correct?",
      options: [
        "A token must have its integrity and required claims validated before it is trusted",
        "A token is trustworthy whenever its payload can be decoded",
        "All JWTs encrypt their claims automatically",
        "An expired token should be accepted if the signature is valid"
      ],
      correctAnswer: 0,
      explanation:
        "Decoding a JWT payload does not verify its integrity. A resource server must cryptographically verify the signature using an expected algorithm and validate claims like iss, aud, exp, and nbf before trusting it."
    },
    {
      id: 4,
      question: "What is the main purpose of API rate limiting and resource controls?",
      options: [
        "Replace user authentication",
        "Reduce abuse and limit excessive consumption of API and backend resources",
        "Grant every user equal administrative permissions",
        "Eliminate the need for authorization"
      ],
      correctAnswer: 1,
      explanation:
        "Rate limiting and resource constraints (OWASP API4:2023) protect infrastructure from service degradation, denial-of-service, financial loss from expensive cloud APIs, and automated brute-force attacks."
    },
    {
      id: 5,
      question:
        'An ordinary user submits a profile update containing "role": "admin". What is the appropriate control?',
      options: [
        "Accept all model properties automatically",
        "Hide the role field in the frontend only",
        "Restrict writable fields server-side and enforce authorization",
        "Assume the value is safe because it is valid JSON"
      ],
      correctAnswer: 2,
      explanation:
        "To prevent mass assignment / BOPLA (API3:2023), the backend must explicitly allowlist updateable fields or use a strict Data Transfer Object (DTO), rejecting or ignoring privileged attributes like role."
    },
    {
      id: 6,
      question: "What is the most appropriate way to handle an API that fetches a URL supplied by a user?",
      options: [
        "Validate and restrict destinations, control redirects, and enforce network egress limits where appropriate",
        "Allow every URL as long as it begins with https://",
        "Disable all certificate validation",
        "Trust the URL because it came through an authenticated user"
      ],
      correctAnswer: 0,
      explanation:
        "To mitigate Server-Side Request Forgery (SSRF, API7:2023), the server must strictly validate destination hostnames/IPs, block RFC1918 private ranges and link-local cloud metadata (169.254.169.254), enforce egress firewall rules, and validate post-redirect destinations."
    }
  ];

  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const handleSelectAnswer = (qId, optionIdx) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const handleQuizSubmit = () => {
    setQuizSubmitted(true);
  };

  const handleQuizReset = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
  };

  const quizScore = quizQuestions.reduce((score, q) => {
    return quizAnswers[q.id] === q.correctAnswer ? score + 1 : score;
  }, 0);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 antialiased font-sans selection:bg-orange-500 selection:text-white relative pb-20">
      {/* Ambient background glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-orange-400/10 to-amber-300/10 blur-[90px]" />
        <div className="absolute top-1/3 -left-40 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-stone-400/10 to-orange-300/10 blur-[100px]" />
        <div className="absolute -bottom-40 right-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-amber-400/10 to-stone-300/10 blur-[90px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 md:px-8">
        {/* Track navigation bar */}
        <ModuleNav track="cybersecurity" currentModuleId="auth-api-security" />

        {/* ========================================================================= */}
        {/* HERO CARD                                                                 */}
        {/* ========================================================================= */}
        <div className="mt-6 rounded-3xl border border-[#e7e3da] bg-white/80 p-6 md:p-10 shadow-xs backdrop-blur-md relative overflow-hidden mb-8">
          <div className="absolute top-0 right-0 h-48 w-48 bg-gradient-to-bl from-orange-500/10 via-amber-500/5 to-transparent rounded-bl-full pointer-events-none" />

          {/* Breadcrumb & status */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-stone-500 mb-3">
            <span className="text-[#ea580c] font-semibold">PrepSpaces Masterclass</span>
            <span>/</span>
            <span>Module 15</span>
            <span>/</span>
            <span className="text-stone-800 font-medium">Authentication & API Security</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-100 text-[#ea580c] px-3 py-1 text-xs font-bold font-mono">
              OWASP API Top 10:2023 · NIST SP 800-63B-4
            </span>
            <span className="rounded-full bg-stone-100 text-stone-700 px-3 py-1 text-xs font-medium">
              12–16 Hours Estimated
            </span>
            <span className="rounded-full bg-stone-100 text-stone-700 px-3 py-1 text-xs font-medium">
              Intermediate to Advanced
            </span>
            <span className="rounded-full bg-amber-100 text-amber-800 px-3 py-1 text-xs font-medium">
              Defensive Architecture & Audit
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 mb-4">
            Authentication Flaws, Access Control, Session Security, and API Security
          </h1>

          <p className="text-base sm:text-lg text-stone-600 max-w-4xl leading-relaxed mb-6">
            Modern web applications depend on identities, sessions, permissions, and APIs to protect user accounts and sensitive business data. A user may successfully sign in while still being able to access another user's records, perform unauthorized administrative operations, or abuse an API through excessive requests. Master BOLA (IDOR), BFLA, BOPLA mass assignment, JWT signature validation, and API rate limiting under OWASP API Security Top 10:2023 and NIST SP 800-63B-4.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-stone-200 text-xs text-stone-600 font-mono">
            <div>
              <span className="text-stone-400 block">Core Standard</span>
              <strong className="text-stone-900">OWASP API 2023 & NIST SP 800-63B</strong>
            </div>
            <div>
              <span className="text-stone-400 block">Key Weaknesses</span>
              <strong className="text-stone-900">BOLA, BFLA, BOPLA, SSRF</strong>
            </div>
            <div>
              <span className="text-stone-400 block">Hands-on Labs</span>
              <strong className="text-stone-900">6 Interactive Sandboxes</strong>
            </div>
            <div>
              <span className="text-stone-400 block">Capstone Project</span>
              <strong className="text-stone-900">Secure the PrepSpaces API</strong>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* WORKSPACE NAVIGATION TABS                                                 */}
        {/* ========================================================================= */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-[#e7e3da] pb-4">
          {[
            { id: "theory", label: "Curriculum & Theory", icon: BookOpen },
            { id: "labs", label: "Interactive Security Labs", icon: Terminal, badge: "6 Labs" },
            { id: "case-study", label: "PrepSpaces Case Study", icon: Server },
            { id: "quiz", label: "Knowledge Check", icon: HelpCircle, badge: "6 Questions" },
            { id: "capstone", label: "Capstone Project & Rubric", icon: Award }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#18181b] text-white shadow-xs"
                    : "bg-white text-stone-600 border border-stone-200 hover:border-orange-300 hover:text-stone-900"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`ml-1 text-[10px] px-2 py-0.5 rounded-full font-mono ${
                      isActive ? "bg-orange-600 text-white" : "bg-stone-100 text-stone-600"
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: CURRICULUM & THEORY                                                */}
        {/* ========================================================================= */}
        {activeTab === "theory" && (
          <div className="space-y-8">
            {/* Quick Navigation index */}
            <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-xs">
              <span className="text-xs font-mono font-bold text-stone-500 uppercase tracking-wider block mb-2">
                Lessons in Module 15
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  { href: "#lesson-1", label: "1. Auth & API Fundamentals" },
                  { href: "#lesson-2", label: "2. Authentication Failures" },
                  { href: "#lesson-3", label: "3. Access Control (BOLA, BFLA, BOPLA)" },
                  { href: "#lesson-4", label: "4. Session Security, JWTs & Credentials" },
                  { href: "#lesson-5", label: "5. OWASP API Security Top 10:2023" },
                  { href: "#lesson-6", label: "6. Secure API Design & Monitoring" }
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="text-xs font-mono bg-stone-100 hover:bg-orange-100 hover:text-orange-900 text-stone-700 px-3 py-1.5 rounded-xl transition"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* LESSON 1 */}
            <section id="lesson-1" className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Lesson 1
                </span>
                <span className="text-xs font-mono text-stone-400">Foundational Principles</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Authentication, Authorization, and API Security Fundamentals
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200">
                  <h3 className="font-bold text-orange-950 mb-1">1.1 Authentication is NOT Authorization</h3>
                  <p className="text-orange-900 text-sm">
                    <strong>Authentication</strong> verifies a presented identity claim: <em>"Who are you?"</em><br />
                    <strong>Authorization</strong> decides whether that identity may perform a particular operation on a particular resource: <em>"Are you permitted to read or mutate this exact record?"</em>
                  </p>
                </div>

                <p>
                  Consider PrepSpaces:
                </p>
                <ol className="list-decimal pl-6 space-y-1 text-sm">
                  <li>A student signs in successfully with username, password, and MFA.</li>
                  <li>The backend verifies the credentials and creates a session token identifying that student (<code className="bg-stone-100 px-1 py-0.5 rounded font-mono">sub: "usr_alice"</code>).</li>
                  <li>The student submits a request to view an interview evaluation: <code className="bg-stone-100 px-1 py-0.5 rounded font-mono">GET /api/reports/report-104</code>.</li>
                  <li>The backend verifies that the report belongs to Alice or that an explicit role (such as assigned instructor) permits access.</li>
                  <li>Only then does the backend return the protected report.</li>
                </ol>

                <p className="text-sm font-semibold text-stone-900">
                  The login step does not grant blanket permission to every record or endpoint. API authorization must be enforced dynamically when a protected operation is requested, not assumed merely because a request carries a valid session token.
                </p>

                <h3 className="text-lg font-bold text-stone-900 pt-4">1.2 The Four Connected Security Functions</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 my-4">
                  {[
                    { num: "01", name: "Authentication", desc: "Establish which user, client, or workload is presenting the request (e.g. password, passkey, OAuth)." },
                    { num: "02", name: "Session / Token Validation", desc: "Verify the presented proof and check its cryptographic signature, issuer, audience, and expiration." },
                    { num: "03", name: "Authorization", desc: "Check the authenticated identity's permission against the specific action, object ID, and tenant scope." },
                    { num: "04", name: "Audit & Enforcement", desc: "Permit or deny the operation, return the approved response, and record high-fidelity telemetry." }
                  ].map((step, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
                      <div className="text-xl font-bold font-mono text-orange-600 mb-1">{step.num}</div>
                      <div className="font-bold text-stone-900 mb-1">{step.name}</div>
                      <div className="text-stone-600">{step.desc}</div>
                    </div>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-stone-900 pt-4">1.3 The API Request Lifecycle</h3>
                <p className="text-sm">
                  A protected API request passes through several logical enforcement layers before accessing sensitive data:
                </p>

                <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs overflow-x-auto my-3 leading-relaxed">
                  <div className="text-stone-400">// Client / Browser / API Consumer</div>
                  <div>1. HTTPS Client Request [Bearer Token + JSON Payload]</div>
                  <div className="text-stone-500 pl-4">↓</div>
                  <div className="text-orange-400">2. Request Validation & Gateway Rate Limiting</div>
                  <div className="text-stone-300 pl-4">↳ Inspect payload size, schema, headers, and client IP token bucket</div>
                  <div className="text-stone-500 pl-4">↓</div>
                  <div className="text-orange-400">3. Authentication Middleware</div>
                  <div className="text-stone-300 pl-4">↳ Cryptographically verify JWT signature, exp, iss, aud → attaches req.auth</div>
                  <div className="text-stone-500 pl-4">↓</div>
                  <div className="text-orange-400">4. Authorization & Business Policy</div>
                  <div className="text-stone-300 pl-4">↳ Verify function permission (BFLA) and object ownership (BOLA)</div>
                  <div className="text-stone-500 pl-4">↓</div>
                  <div className="text-amber-400">5. Scoped Database / Service Layer Execution</div>
                  <div className="text-stone-300 pl-4">↳ Execute parameterized query scoped to owner ID: WHERE id=$1 AND owner=$2</div>
                  <div className="text-stone-500 pl-4">↓</div>
                  <div className="text-emerald-400">6. Sanitized Response & Security Audit Event</div>
                  <div className="text-stone-300 pl-4">↳ Filter sensitive properties (BOPLA) and record structured access log</div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 pt-4">1.4 What Can Go Wrong? (Failure Taxonomy)</h3>
                <div className="overflow-x-auto my-2">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-100 text-stone-800">
                        <th className="p-3 font-semibold">Security Failure</th>
                        <th className="p-3 font-semibold">Real-World Scenario</th>
                        <th className="p-3 font-semibold">Potential Impact</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-600">
                      <tr>
                        <td className="p-3 font-semibold text-stone-900">Authentication Failure</td>
                        <td className="p-3">Password-reset endpoint accepts unvalidated user tokens or predictable reset links</td>
                        <td className="p-3 text-red-600 font-semibold">Complete Account Takeover</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-stone-900">Broken Object Level Auth (BOLA)</td>
                        <td className="p-3">A student changes <code className="font-mono">report-101</code> to <code className="font-mono">report-102</code> in URL and reads private peer notes</td>
                        <td className="p-3 text-red-600 font-semibold">Confidential Data Disclosure</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-stone-900">Broken Function Level Auth (BFLA)</td>
                        <td className="p-3">A regular student calls <code className="font-mono">POST /api/admin/courses</code> directly without role check</td>
                        <td className="p-3 text-red-600 font-semibold">Privilege Escalation</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-stone-900">Broken Property Level Auth (BOPLA)</td>
                        <td className="p-3">A profile update request includes <code className="font-mono">&#123;&quot;role&quot;: &quot;admin&quot;&#125;</code> and backend blindly saves it</td>
                        <td className="p-3 text-red-600 font-semibold">Unauthorized Privilege Assignment</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-stone-900">Token Validation Failure</td>
                        <td className="p-3">Backend accepts token signed with <code className="font-mono">alg: &quot;none&quot;</code> or skips audience validation</td>
                        <td className="p-3 text-red-600 font-semibold">Identity Impersonation</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-stone-900">Resource Consumption Weakness</td>
                        <td className="p-3">API accepts requests for <code className="font-mono">limit=10000000</code> or unmetered AI report generation</td>
                        <td className="p-3 text-red-600 font-semibold">Denial of Service & Cloud Bill Spikes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* LESSON 2 */}
            <section id="lesson-2" className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Lesson 2
                </span>
                <span className="text-xs font-mono text-stone-400">Account Security</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Authentication Failures and Account Security
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <p>
                  <strong>Authentication Failure</strong> (OWASP Top 10:2025 A07:2025) occurs when an application incorrectly verifies identity or inadequately protects the authentication and credential lifecycle.
                </p>

                <h3 className="text-lg font-bold text-stone-900 pt-2">2.1 Credential Stuffing vs. Password Spraying</h3>
                <div className="overflow-x-auto my-3">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-100 text-stone-800">
                        <th className="p-3 font-semibold">Attack Pattern</th>
                        <th className="p-3 font-semibold">Mechanism</th>
                        <th className="p-3 font-semibold">Defensive Countermeasures</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-600">
                      <tr>
                        <td className="p-3 font-semibold text-stone-900">Brute-Force Guessing</td>
                        <td className="p-3">Many password guesses attempted against a single target account</td>
                        <td className="p-3">Exponential backoff, IP throttling, risk-aware CAPTCHA, lockout alerts</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-stone-900">Credential Stuffing</td>
                        <td className="p-3">Reusing billions of leaked username/password dumps from previous third-party breaches</td>
                        <td className="p-3">MFA, haveibeenpwned breach checks at signup/change, anomaly bot detection</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-stone-900">Password Spraying</td>
                        <td className="p-3">Trying 1–2 popular passwords (e.g. <code className="font-mono">Winter2026!</code>) across thousands of accounts to evade per-account lockouts</td>
                        <td className="p-3">Global authentication rate limits, block common predictable passwords, tenant-wide telemetry</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-stone-900">MFA Fatigue / Push Bombing</td>
                        <td className="p-3">Repeatedly triggering push notifications until the victim accidentally approves out of frustration</td>
                        <td className="p-3">FIDO2/WebAuthn passkeys (phishing-resistant), number matching, rate-limiting push prompts</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-bold text-stone-900 pt-4">2.2 Account Enumeration Defenses</h3>
                <p className="text-sm">
                  <strong>Account enumeration</strong> occurs when an application reveals whether a particular username or email address exists in the database by returning distinct errors:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 my-2 text-xs">
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200">
                    <strong className="text-red-900 block mb-1">Vulnerable (Reveals Account Existence)</strong>
                    <p className="text-red-800 font-mono">
                      "User does not exist"<br />
                      "Incorrect password for user@example.com"
                    </p>
                    <span className="text-stone-500 text-[11px] mt-1 block">Allows attackers to harvest valid enterprise user lists.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                    <strong className="text-emerald-900 block mb-1">Secure (Parity & Generic Response)</strong>
                    <p className="text-emerald-800 font-mono">
                      "Invalid email or password. Please verify your credentials."
                    </p>
                    <span className="text-stone-500 text-[11px] mt-1 block">Constant-time password comparison to prevent timing side-channels.</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 pt-4">2.3 NIST SP 800-63B-4 Guidelines & Reauthentication</h3>
                <p className="text-sm">
                  Finalized in July 2025, <strong>NIST SP 800-63B-4</strong> provides standard guidance for digital identity:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-xs">
                  <li><strong>Password Guidelines:</strong> Minimum 8 characters (prefer 15+ for passphrases); verify against compromised credential lists; do not impose arbitrary composition rules or forced periodic rotation without breach cause.</li>
                  <li><strong>Single-Use Recovery Tokens:</strong> Password reset tokens must be cryptographically random (minimum 128-bit entropy), expire within 10–15 minutes, be single-use, and invalidate all existing active sessions upon password change.</li>
                  <li><strong>Step-Up Reauthentication:</strong> Performing sensitive operations (changing MFA tokens, viewing raw API keys, modifying bank details) must require explicit re-entry of credentials or biometric passkey, even within an active session.</li>
                </ul>
              </div>
            </section>

            {/* LESSON 3 */}
            <section id="lesson-3" className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Lesson 3
                </span>
                <span className="text-xs font-mono text-stone-400">Core Access Control</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Access Control: BOLA, BFLA, and Object Property Authorization
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <p>
                  Authorization flaws are among the most prevalent and critical API security weaknesses. OWASP identifies three distinct levels of authorization failure in its API Security Top 10:
                </p>

                <div className="grid sm:grid-cols-3 gap-3 my-3">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="font-mono text-xs font-bold text-orange-600 block mb-1">API1:2023 · BOLA</span>
                    <strong className="text-stone-900 block mb-1">Broken Object Level Authorization</strong>
                    <p className="text-stone-600 text-xs">
                      Can user Alice read or modify Bob's specific report object just by guessing or tampering with the report ID?
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="font-mono text-xs font-bold text-red-600 block mb-1">API5:2023 · BFLA</span>
                    <strong className="text-stone-900 block mb-1">Broken Function Level Authorization</strong>
                    <p className="text-stone-600 text-xs">
                      Can a regular user call a function or HTTP method (e.g. DELETE, admin export) reserved for platform administrators?
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="font-mono text-xs font-bold text-purple-600 block mb-1">API3:2023 · BOPLA</span>
                    <strong className="text-stone-900 block mb-1">Broken Property Level Authorization</strong>
                    <p className="text-stone-600 text-xs">
                      Can a user read confidential fields (excessive data exposure) or modify restricted fields (mass assignment)?
                    </p>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 pt-4">3.1 Fixing BOLA: Query Scoping</h3>
                <p className="text-sm">
                  Never fetch an object solely by its client-supplied ID without verifying ownership. The safest pattern scopes the database query directly to the authenticated user ID:
                </p>

                <div className="grid sm:grid-cols-2 gap-3 text-xs font-mono my-2">
                  <div className="p-4 rounded-2xl bg-red-950 text-red-200">
                    <div className="text-red-400 font-bold mb-2">// VULNERABLE: Direct Object Reference (BOLA)</div>
                    <div>app.get('/api/reports/:id', requireAuth, async (req, res) =&gt; &#123;</div>
                    <div className="pl-4">const &#123; id &#125; = req.params;</div>
                    <div className="pl-4 text-red-300">// Loads any report matching ID regardless of owner!</div>
                    <div className="pl-4">const report = await db.query(</div>
                    <div className="pl-8">'SELECT * FROM reports WHERE id = $1', [id]</div>
                    <div className="pl-4">);</div>
                    <div className="pl-4">res.json(report.rows[0]);</div>
                    <div>&#125;);</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-900 text-stone-200">
                    <div className="text-emerald-400 font-bold mb-2">// SECURE: Ownership-Scoped Query (Fixes BOLA)</div>
                    <div>app.get('/api/reports/:id', requireAuth, async (req, res) =&gt; &#123;</div>
                    <div className="pl-4">const &#123; id &#125; = req.params;</div>
                    <div className="pl-4">const userId = req.auth.sub; // Trusted token identity</div>
                    <div className="pl-4 text-emerald-300">// Scopes query to both ID AND authenticated owner:</div>
                    <div className="pl-4">const result = await db.query(</div>
                    <div className="pl-8">'SELECT * FROM reports WHERE id = $1 AND owner_id = $2',</div>
                    <div className="pl-8">[id, userId]</div>
                    <div className="pl-4">);</div>
                    <div className="pl-4">if (result.rowCount === 0) return res.status(404).json(&#123; error: 'Not found' &#125;);</div>
                    <div className="pl-4">res.json(result.rows[0]);</div>
                    <div>&#125;);</div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
                  <strong>Why UUIDs Do NOT Solve BOLA:</strong> Some teams replace sequential integer IDs with UUIDv4 and assume the vulnerability is resolved. Unpredictable identifiers make brute-force enumeration harder, but they do NOT enforce authorization! If a UUID is leaked in a browser history URL, log file, email notification, or shared payload, an attacker can still access the object without permission.
                </div>

                <h3 className="text-lg font-bold text-stone-900 pt-4">3.2 Fixing BOPLA: Property Allowlisting Against Mass Assignment</h3>
                <p className="text-sm">
                  Mass assignment occurs when client-supplied JSON objects are bound directly into internal ORM models or database update queries without filtering. Attackers inject privileged properties like <code className="font-mono">&#123;&quot;role&quot;: &quot;admin&quot;, &quot;isVerified&quot;: true&#125;</code>:
                </p>

                <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 text-xs font-mono overflow-x-auto">
                  <div className="text-stone-400">// Strict server-side DTO allowlisting function</div>
                  <div>function sanitizeProfileUpdate(body) &#123;</div>
                  <div className="pl-4">if (!body || typeof body !== 'object' || Array.isArray(body)) return null;</div>
                  <div className="pl-4 text-emerald-400">// Only explicitly enumerated properties may be updated:</div>
                  <div className="pl-4">const ALLOWED_FIELDS = ['displayName', 'preferredLanguage', 'bio'];</div>
                  <div className="pl-4">const updateDto = &#123;&#125;;</div>
                  <div className="pl-4">for (const field of ALLOWED_FIELDS) &#123;</div>
                  <div className="pl-8">if (Object.hasOwn(body, field) && typeof body[field] === 'string') &#123;</div>
                  <div className="pl-12">updateDto[field] = body[field].trim().slice(0, 255);</div>
                  <div className="pl-8">&#125;</div>
                  <div className="pl-4">&#125;</div>
                  <div className="pl-4">return Object.keys(updateDto).length &gt; 0 ? updateDto : null;</div>
                  <div>&#125;</div>
                </div>
              </div>
            </section>

            {/* LESSON 4 */}
            <section id="lesson-4" className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Lesson 4
                </span>
                <span className="text-xs font-mono text-stone-400">Tokens & Credentials</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Session Security, Tokens, JWTs, and API Credentials
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <p>
                  Sessions and tokens act as <strong>bearer credentials</strong>: whoever possesses the credential can execute operations as the authenticated identity. Insecure handling exposes users to session hijacking and privilege impersonation.
                </p>

                <h3 className="text-lg font-bold text-stone-900 pt-2">4.1 Anatomical Breakdown of a Signed JWT</h3>
                <p className="text-sm">
                  A signed JSON Web Token consists of three base64url-encoded segments separated by periods:
                  <code className="bg-stone-100 px-2 py-0.5 rounded font-mono text-xs block my-1">
                    header.payload.signature
                  </code>
                </p>
                <div className="grid sm:grid-cols-3 gap-3 text-xs font-mono my-2">
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200">
                    <strong className="text-red-900 block mb-1">1. Header (JOSE)</strong>
                    <div className="text-stone-700">&#123;&quot;alg&quot;: &quot;RS256&quot;, &quot;typ&quot;: &quot;JWT&quot;&#125;</div>
                    <span className="text-stone-500 text-[11px] mt-1 block">Specifies algorithm and key ID (kid).</span>
                  </div>
                  <div className="p-3 rounded-xl bg-purple-50 border border-purple-200">
                    <strong className="text-purple-900 block mb-1">2. Payload (Claims)</strong>
                    <div className="text-stone-700">&#123;&quot;sub&quot;: &quot;usr_104&quot;, &quot;role&quot;: &quot;student&quot;, &quot;exp&quot;: 1792155200&#125;</div>
                    <span className="text-stone-500 text-[11px] mt-1 block">Public claims. NOT encrypted unless JWE!</span>
                  </div>
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-200">
                    <strong className="text-blue-900 block mb-1">3. Signature</strong>
                    <div className="text-stone-700">RSASHA256(b64(header) + '.' + b64(payload), privateKey)</div>
                    <span className="text-stone-500 text-[11px] mt-1 block">Protects integrity. Tampering invalidates signature.</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-xs text-red-900">
                  <strong>CRITICAL RULE: Decoding is NOT Validation!</strong><br />
                  Calling <code className="font-mono">jwt.decode(token)</code> simply unpacks base64 strings into JSON. Anyone can forge a payload and encode it. An API must <strong>verify the cryptographic signature</strong> against an expected public key, enforce permitted algorithms, and check required claims (<code className="font-mono">iss</code>, <code className="font-mono">aud</code>, <code className="font-mono">exp</code>, <code className="font-mono">nbf</code>).
                </div>

                <h3 className="text-lg font-bold text-stone-900 pt-4">4.2 Credential Architecture Comparison</h3>
                <div className="overflow-x-auto my-2">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-100 text-stone-800">
                        <th className="p-3 font-semibold">Credential Type</th>
                        <th className="p-3 font-semibold">Primary Purpose</th>
                        <th className="p-3 font-semibold">Revocation Behavior</th>
                        <th className="p-3 font-semibold">Critical Security Constraints</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-600">
                      <tr>
                        <td className="p-3 font-semibold text-stone-900">Session Cookie</td>
                        <td className="p-3">Maintains stateful browser login via opaque identifier</td>
                        <td className="p-3 text-emerald-700 font-semibold">Instant (delete from Redis / DB)</td>
                        <td className="p-3">Requires <code className="font-mono">HttpOnly; Secure; SameSite=Lax/Strict</code>, CSRF defense</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-stone-900">Access Token (JWT)</td>
                        <td className="p-3">Authorizes microservice or mobile API calls stateless-style</td>
                        <td className="p-3 text-amber-700 font-semibold">Hard until exp (requires denylist/JTI)</td>
                        <td className="p-3">Keep lifetimes short (5–15 mins); enforce strict <code className="font-mono">aud</code> and <code className="font-mono">iss</code></td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-stone-900">Refresh Token</td>
                        <td className="p-3">Obtains fresh access tokens without re-prompting user</td>
                        <td className="p-3 text-emerald-700 font-semibold">Instant on database record check</td>
                        <td className="p-3">Store securely in backend; rotate on each use; detect reuse</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-stone-900">API Key</td>
                        <td className="p-3">Identifies server-to-server consuming application/client</td>
                        <td className="p-3 text-emerald-700 font-semibold">Manual rotation & revocation</td>
                        <td className="p-3">Never embed in client frontend JS; pass via header; scope narrowly</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* LESSON 5 */}
            <section id="lesson-5" className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Lesson 5
                </span>
                <span className="text-xs font-mono text-stone-400">Threat Taxonomy</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                The OWASP API Security Top 10:2023
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <p>
                  Because modern web apps rely heavily on microservices, mobile apps, and single-page apps, OWASP maintains a dedicated taxonomy for API vulnerabilities:
                </p>

                <div className="overflow-x-auto my-3">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-100 text-stone-800">
                        <th className="p-3 font-semibold">Category</th>
                        <th className="p-3 font-semibold">Vulnerability Title</th>
                        <th className="p-3 font-semibold">Core Risk & What Defenders Must Check</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-600">
                      <tr>
                        <td className="p-3 font-mono font-bold text-orange-600">API1:2023</td>
                        <td className="p-3 font-semibold text-stone-900">Broken Object Level Authorization</td>
                        <td className="p-3">Missing resource ownership checks allowing ID manipulation to access private data.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono font-bold text-orange-600">API2:2023</td>
                        <td className="p-3 font-semibold text-stone-900">Broken Authentication</td>
                        <td className="p-3">Weak passwords, credential stuffing, flawed JWT validation, or unauthenticated endpoints.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono font-bold text-orange-600">API3:2023</td>
                        <td className="p-3 font-semibold text-stone-900">Broken Object Property Level Authorization</td>
                        <td className="p-3">Mass assignment mutating protected fields, or returning sensitive raw database columns.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono font-bold text-orange-600">API4:2023</td>
                        <td className="p-3 font-semibold text-stone-900">Unrestricted Resource Consumption</td>
                        <td className="p-3">Missing pagination boundaries, unbounded payload sizes, or unmetered third-party API costs.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono font-bold text-orange-600">API5:2023</td>
                        <td className="p-3 font-semibold text-stone-900">Broken Function Level Authorization</td>
                        <td className="p-3">Regular users invoking administrative actions because access control is enforced only in the UI.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono font-bold text-orange-600">API6:2023</td>
                        <td className="p-3 font-semibold text-stone-900">Unrestricted Access to Sensitive Business Flows</td>
                        <td className="p-3">Automated bots scalping reservations, mass creating fake accounts, or skewing metrics.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono font-bold text-orange-600">API7:2023</td>
                        <td className="p-3 font-semibold text-stone-900">Server Side Request Forgery (SSRF)</td>
                        <td className="p-3">Server fetching user-controlled URLs without validating against private IPs or cloud metadata.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono font-bold text-orange-600">API8:2023</td>
                        <td className="p-3 font-semibold text-stone-900">Security Misconfiguration</td>
                        <td className="p-3">Permissive CORS (<code className="font-mono">Access-Control-Allow-Origin: *</code> with credentials), debug flags, stack traces.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono font-bold text-orange-600">API9:2023</td>
                        <td className="p-3 font-semibold text-stone-900">Improper Inventory Management</td>
                        <td className="p-3">Old unpatched API versions (e.g. <code className="font-mono">/api/v1/users</code>) left live alongside secure v2 versions.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono font-bold text-orange-600">API10:2023</td>
                        <td className="p-3 font-semibold text-stone-900">Unsafe Consumption of APIs</td>
                        <td className="p-3">Blindly trusting external webhooks or partner responses without strict input validation.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-bold text-stone-900 pt-4">5.1 Mitigating Server-Side Request Forgery (SSRF) in APIs</h3>
                <p className="text-sm">
                  Features that fetch user-supplied URLs (webhooks, avatar imports, PDF generation) must be isolated:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 block mb-1">Network & DNS Isolation Controls</strong>
                    <ul className="list-disc pl-4 space-y-1 text-stone-600">
                      <li>Resolve DNS and reject loopback (<code className="font-mono">127.0.0.1</code>) and RFC1918 private subnets (<code className="font-mono">10.0.0.0/8</code>, <code className="font-mono">192.168.0.0/16</code>, <code className="font-mono">172.16.0.0/12</code>).</li>
                      <li>Explicitly block cloud instance metadata endpoints (<code className="font-mono">169.254.169.254</code>).</li>
                      <li>Re-evaluate IP addresses following any HTTP redirect to prevent DNS rebinding attacks.</li>
                    </ul>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 block mb-1">Egress Proxy & Request Restrictions</strong>
                    <ul className="list-disc pl-4 space-y-1 text-stone-600">
                      <li>Enforce strict allowlists of approved partner hostnames whenever feasible.</li>
                      <li>Enforce strict scheme rules (only <code className="font-mono">https://</code>, no <code className="font-mono">file://</code>, <code className="font-mono">gopher://</code>, <code className="font-mono">ftp://</code>).</li>
                      <li>Set stringent timeouts (2–5 seconds) and response payload size caps (e.g. 10 MB) to prevent denial of service.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* LESSON 6 */}
            <section id="lesson-6" className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Lesson 6
                </span>
                <span className="text-xs font-mono text-stone-400">Implementation & Verification</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                API Design, Access Enforcement, and Security Monitoring
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <h3 className="text-lg font-bold text-stone-900">6.1 Gateway vs. Application Layer Authorization</h3>
                <p className="text-sm">
                  A common architectural mistake is expecting the API Gateway to handle all security. Gateway and application services have distinct, complementary roles:
                </p>

                <div className="grid sm:grid-cols-2 gap-3 text-xs my-2">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 block mb-1">API Gateway Responsibilities</strong>
                    <ul className="list-disc pl-4 space-y-1 text-stone-600">
                      <li>Terminates TLS and verifies basic token structure and cryptographic signature.</li>
                      <li>Enforces global IP-based rate limiting, geo-blocking, and WAF inspection.</li>
                      <li>Checks coarse-grained role permissions (e.g. does caller possess <code className="font-mono">role: student</code>?).</li>
                      <li><em>Cannot</em> know dynamic database ownership (e.g. Does Alice own Report #104?).</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 block mb-1">Application Service Responsibilities</strong>
                    <ul className="list-disc pl-4 space-y-1 text-stone-600">
                      <li>Enforces fine-grained Object-Level Authorization (BOLA) against data models.</li>
                      <li>Performs Property-Level Authorization (BOPLA) to prevent mass assignment.</li>
                      <li>Validates complex business rules, quotas, and state machine transitions.</li>
                      <li>Generates contextual security telemetry and audit trails for compliance.</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 pt-4">6.2 Negative Testing Matrix</h3>
                <p className="text-sm">
                  A comprehensive API test suite must explicitly verify that unauthorized requests fail. Testing only the "happy path" leaves access controls unproven:
                </p>

                <div className="overflow-x-auto my-2">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-100 text-stone-800">
                        <th className="p-3 font-semibold">Test Scenario</th>
                        <th className="p-3 font-semibold">Presented Context</th>
                        <th className="p-3 font-semibold">Expected Response</th>
                        <th className="p-3 font-semibold">Security Rationale</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-600">
                      <tr>
                        <td className="p-3 font-semibold text-stone-900">Unauthenticated Request</td>
                        <td className="p-3">No Authorization header</td>
                        <td className="p-3 text-red-600 font-mono">401 Unauthorized</td>
                        <td className="p-3">Authentication check precedes all logic.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-stone-900">Expired Token</td>
                        <td className="p-3">Valid signature, but <code className="font-mono">exp &lt; now</code></td>
                        <td className="p-3 text-red-600 font-mono">401 Unauthorized</td>
                        <td className="p-3">Expired session credentials must be rejected.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-stone-900">Tampered Payload</td>
                        <td className="p-3">Modified role, mismatched signature</td>
                        <td className="p-3 text-red-600 font-mono">401 Unauthorized</td>
                        <td className="p-3">Cryptographic verification failure.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-stone-900">Access Other User's Object</td>
                        <td className="p-3">Alice requests Bob's report ID</td>
                        <td className="p-3 text-red-600 font-mono">404 Not Found</td>
                        <td className="p-3">BOLA defense; hides existence of foreign records.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-stone-900">Student Invokes Admin Route</td>
                        <td className="p-3">Alice requests <code className="font-mono">/api/admin/flush</code></td>
                        <td className="p-3 text-red-600 font-mono">403 Forbidden</td>
                        <td className="p-3">BFLA role check enforcement.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-stone-900">Mass Assignment Injection</td>
                        <td className="p-3">PATCH body includes <code className="font-mono">&#123;&quot;role&quot;: &quot;admin&quot;&#125;</code></td>
                        <td className="p-3 text-emerald-600 font-mono">200 OK (role ignored)</td>
                        <td className="p-3">Strict DTO allowlisting excludes unauthorized fields.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-stone-900">Exceed Rate Limit</td>
                        <td className="p-3">100 requests in 1 second</td>
                        <td className="p-3 text-amber-600 font-mono">429 Too Many Requests</td>
                        <td className="p-3">Token bucket rate limiter throttles client.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: INTERACTIVE HANDS-ON LABS                                          */}
        {/* ========================================================================= */}
        {activeTab === "labs" && (
          <div className="space-y-8">
            <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4 text-xs text-amber-900">
              <strong className="block mb-1 font-bold">Authorized Interactive Lab Environment</strong>
              All exercises execute against local synthetic test sandboxes simulating PrepSpaces' Node.js/PostgreSQL microservices. No real customer credentials or third-party networks are touched.
            </div>

            {/* LAB 1: Authentication & Account Enumeration Defense */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                    Lab 1
                  </span>
                  <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                    Authentication & Account Enumeration Defense
                  </h3>
                </div>
                <span className="text-xs font-mono text-stone-400">OWASP A07:2025</span>
              </div>
              <p className="text-xs text-stone-600 mb-4">
                Test how the authentication gateway handles credential testing. Toggle between vulnerable specific error responses and generic defensive responses, and observe automated brute-force rate-limiting.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <form onSubmit={handleLab1Login} className="space-y-3 bg-stone-50 p-4 rounded-2xl border border-stone-200">
                  <div>
                    <label className="text-xs font-mono font-bold text-stone-700 block mb-1">Email Address</label>
                    <input
                      type="text"
                      value={lab1Email}
                      onChange={(e) => setLab1Email(e.target.value)}
                      className="w-full text-xs font-mono p-2 rounded-xl border border-stone-300 bg-white"
                    />
                    <span className="text-[11px] text-stone-500">Synthetic existing user: student@prepspaces.com</span>
                  </div>

                  <div>
                    <label className="text-xs font-mono font-bold text-stone-700 block mb-1">Password</label>
                    <input
                      type="password"
                      value={lab1Password}
                      onChange={(e) => setLab1Password(e.target.value)}
                      className="w-full text-xs font-mono p-2 rounded-xl border border-stone-300 bg-white"
                    />
                    <span className="text-[11px] text-stone-500">Correct password: PrepSpaces2026!Secure</span>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <input
                      type="checkbox"
                      id="genericErr"
                      checked={lab1GenericErrors}
                      onChange={(e) => setLab1GenericErrors(e.target.checked)}
                      className="rounded accent-orange-600"
                    />
                    <label htmlFor="genericErr" className="text-xs font-medium text-stone-700">
                      Enforce Generic Errors (Enumeration Defense)
                    </label>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-bold transition cursor-pointer"
                    >
                      Submit Authentication Request
                    </button>
                    <button
                      type="button"
                      onClick={() => { setLab1Attempts(0); setLab1Result(null); }}
                      className="px-3 py-2 bg-stone-200 hover:bg-stone-300 text-stone-700 rounded-xl text-xs font-bold transition cursor-pointer"
                    >
                      Reset Throttling
                    </button>
                  </div>
                </form>

                <div className="bg-stone-900 text-stone-200 p-4 rounded-2xl font-mono text-xs flex flex-col justify-between">
                  <div>
                    <div className="text-stone-400 mb-2">// Gateway Telemetry & Response</div>
                    <div className="text-stone-400">Failed attempts in current window: <span className="text-amber-400 font-bold">{lab1Attempts}</span> / 5 max</div>
                    {lab1Result ? (
                      <div className="mt-4 p-3 rounded-xl bg-stone-800 border border-stone-700 space-y-1">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            lab1Result.status === 200 ? "bg-emerald-950 text-emerald-400" :
                            lab1Result.status === 429 ? "bg-amber-950 text-amber-400" : "bg-red-950 text-red-400"
                          }`}>
                            HTTP {lab1Result.status}
                          </span>
                          <span className="text-stone-300">{lab1Result.message}</span>
                        </div>
                        {lab1Result.leaksAccount && (
                          <div className="text-red-400 text-[11px] pt-1">
                            ⚠️ VULNERABILITY DETECTED: The server leaked account existence information to an unauthenticated client!
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-stone-500 italic mt-6">Submit login credentials to observe response parity and lockout behavior.</div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* LAB 2: BOLA / IDOR Exploitation & Defense */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                    Lab 2
                  </span>
                  <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                    Broken Object Level Authorization (BOLA / IDOR) Tester
                  </h3>
                </div>
                <span className="text-xs font-mono text-stone-400">OWASP API1:2023</span>
              </div>
              <p className="text-xs text-stone-600 mb-4">
                Simulate an authenticated user attempting to access private records. Observe how toggling server-side query scoping prevents unauthorized horizontal data disclosure.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3 bg-stone-50 p-4 rounded-2xl border border-stone-200 text-xs">
                  <div>
                    <label className="font-mono font-bold text-stone-700 block mb-1">Authenticated Session Identity</label>
                    <div className="flex gap-2">
                      {["user_alice", "user_bob"].map((u) => (
                        <button
                          key={u}
                          onClick={() => setLab2ActiveUser(u)}
                          className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition cursor-pointer ${
                            lab2ActiveUser === u ? "bg-stone-900 text-white" : "bg-white border border-stone-300 text-stone-700"
                          }`}
                        >
                          {u} {u === "user_alice" ? "(Student A)" : "(Student B)"}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="font-mono font-bold text-stone-700 block mb-1">Target Report ID in URL</label>
                    <select
                      value={lab2ReportId}
                      onChange={(e) => setLab2ReportId(e.target.value)}
                      className="w-full font-mono p-2 rounded-xl border border-stone-300 bg-white"
                    >
                      <option value="rep_alice_101">rep_alice_101 (Alice's Confidential Report)</option>
                      <option value="rep_bob_202">rep_bob_202 (Bob's Confidential Report)</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <input
                      type="checkbox"
                      id="ownershipToggle"
                      checked={lab2OwnershipEnforced}
                      onChange={(e) => setLab2OwnershipEnforced(e.target.checked)}
                      className="rounded accent-orange-600"
                    />
                    <label htmlFor="ownershipToggle" className="font-medium text-stone-700">
                      Enable Server-Side Ownership Check (WHERE owner_user_id = $2)
                    </label>
                  </div>

                  <button
                    onClick={handleLab2Fetch}
                    className="w-full py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold transition cursor-pointer"
                  >
                    Execute: GET /api/reports/{lab2ReportId}
                  </button>
                </div>

                <div className="bg-stone-900 text-stone-200 p-4 rounded-2xl font-mono text-xs flex flex-col justify-between">
                  <div>
                    <div className="text-stone-400 mb-2">// Server-Side Execution Trace</div>
                    {lab2Response ? (
                      <div className="space-y-3">
                        <div className="p-2 rounded bg-stone-800 border border-stone-700 text-[11px]">
                          <span className="text-stone-400">SQL Executed: </span>
                          <span className="text-amber-300">{lab2Response.query}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            lab2Response.status === 200 ? "bg-emerald-950 text-emerald-400" : "bg-red-950 text-red-400"
                          }`}>
                            HTTP {lab2Response.status}
                          </span>
                        </div>
                        <pre className="p-2 rounded bg-black/50 text-stone-300 text-[11px] overflow-x-auto">
                          {JSON.stringify(lab2Response.data, null, 2)}
                        </pre>
                        <div className="text-[11px] text-stone-300 border-t border-stone-800 pt-2">
                          {lab2Response.explanation}
                        </div>
                      </div>
                    ) : (
                      <div className="text-stone-500 italic mt-6">Click execute to test whether Alice can read Bob's private report.</div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* LAB 3: BFLA & BOPLA (Mass Assignment) */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                    Lab 3
                  </span>
                  <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                    Function & Property-Level Access Control (BFLA & BOPLA)
                  </h3>
                </div>
                <span className="text-xs font-mono text-stone-400">OWASP API3:2023 & API5:2023</span>
              </div>
              <p className="text-xs text-stone-600 mb-4">
                Test function-level role enforcement on privileged administrative routes, and test mass-assignment parameter tampering by attempting to escalate privileges in a profile PATCH payload.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3 bg-stone-50 p-4 rounded-2xl border border-stone-200 text-xs">
                  <div>
                    <label className="font-mono font-bold text-stone-700 block mb-1">Target Operation</label>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setLab3Endpoint("patch_profile")}
                        className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition cursor-pointer ${
                          lab3Endpoint === "patch_profile" ? "bg-stone-900 text-white" : "bg-white border border-stone-300 text-stone-700"
                        }`}
                      >
                        PATCH /api/users/profile
                      </button>
                      <button
                        onClick={() => setLab3Endpoint("admin_endpoint")}
                        className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition cursor-pointer ${
                          lab3Endpoint === "admin_endpoint" ? "bg-stone-900 text-white" : "bg-white border border-stone-300 text-stone-700"
                        }`}
                      >
                        POST /api/admin/system
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="font-mono font-bold text-stone-700 block mb-1">Authenticated Role (JWT claim)</label>
                    <select
                      value={lab3UserRole}
                      onChange={(e) => setLab3UserRole(e.target.value)}
                      className="w-full font-mono p-2 rounded-xl border border-stone-300 bg-white"
                    >
                      <option value="student">student (Regular User)</option>
                      <option value="instructor">instructor (Content Author)</option>
                      <option value="platform_admin">platform_admin (Full Admin)</option>
                    </select>
                  </div>

                  {lab3Endpoint === "patch_profile" && (
                    <div className="p-3 bg-white rounded-xl border border-stone-300 space-y-2">
                      <div className="font-bold text-stone-800">Injected Client JSON Payload:</div>
                      <div>
                        <span className="text-stone-500">displayName:</span>
                        <input
                          type="text"
                          value={lab3DisplayName}
                          onChange={(e) => setLab3DisplayName(e.target.value)}
                          className="w-full font-mono p-1 rounded border border-stone-200 mt-0.5"
                        />
                      </div>
                      <div>
                        <span className="text-red-600 font-bold">Tampered Field ("role"):</span>
                        <input
                          type="text"
                          value={lab3RequestedRole}
                          onChange={(e) => setLab3RequestedRole(e.target.value)}
                          className="w-full font-mono p-1 rounded border border-red-300 bg-red-50 text-red-900 mt-0.5"
                        />
                      </div>
                      <div className="flex items-center gap-2 pt-1">
                        <input
                          type="checkbox"
                          id="allowlistToggle"
                          checked={lab3AllowlistEnabled}
                          onChange={(e) => setLab3AllowlistEnabled(e.target.checked)}
                          className="rounded accent-orange-600"
                        />
                        <label htmlFor="allowlistToggle" className="font-medium text-stone-700">
                          Enforce Server-Side Property Allowlist (Ignore 'role')
                        </label>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={handleLab3Execute}
                    className="w-full py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold transition cursor-pointer"
                  >
                    Send Request to API
                  </button>
                </div>

                <div className="bg-stone-900 text-stone-200 p-4 rounded-2xl font-mono text-xs flex flex-col justify-between">
                  <div>
                    <div className="text-stone-400 mb-2">// Server Response & Permission Evaluation</div>
                    {lab3Result ? (
                      <div className="space-y-3">
                        <div className="text-stone-400 text-[11px]">{lab3Result.action}</div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            lab3Result.status === 200 ? "bg-emerald-950 text-emerald-400" : "bg-red-950 text-red-400"
                          }`}>
                            HTTP {lab3Result.status}
                          </span>
                        </div>
                        <pre className="p-2 rounded bg-black/50 text-stone-300 text-[11px] overflow-x-auto">
                          {JSON.stringify(lab3Result.data, null, 2)}
                        </pre>
                        <div className="text-[11px] text-stone-300 border-t border-stone-800 pt-2">
                          {lab3Result.evaluation}
                        </div>
                      </div>
                    ) : (
                      <div className="text-stone-500 italic mt-6">Trigger an operation to evaluate BFLA role checks or mass assignment defenses.</div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* LAB 4: JWT & Token Validation Sandbox */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                    Lab 4
                  </span>
                  <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                    JWT & API Credential Validation Sandbox
                  </h3>
                </div>
                <span className="text-xs font-mono text-stone-400">Token Security</span>
              </div>
              <p className="text-xs text-stone-600 mb-4">
                Test how a production-grade resource server validates incoming bearer tokens. Select token scenarios and observe how algorithm confusion, expired claims, and audience mismatches are caught.
              </p>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: "valid", label: "Scenario A: Valid RS256 Token" },
                    { id: "alg_none", label: "Scenario B: Alg 'none' Attack" },
                    { id: "expired", label: "Scenario C: Expired Timestamp (exp)" },
                    { id: "wrong_aud", label: "Scenario D: Audience Mismatch (aud)" }
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setLab4Scenario(s.id)}
                      className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition cursor-pointer ${
                        lab4Scenario === s.id ? "bg-orange-600 text-white" : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>

                {lab4Inspection && (
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 text-xs font-mono space-y-2">
                      <div className="font-bold text-stone-900">Encoded Bearer Token:</div>
                      <div className="p-2 rounded bg-white border border-stone-200 break-all text-[11px] text-stone-700">
                        {lab4Inspection.raw}
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-2">
                        <div>
                          <span className="text-stone-500 font-bold block mb-1">Decoded Header:</span>
                          <pre className="p-2 rounded bg-white border border-stone-200 text-[10px]">
                            {JSON.stringify(lab4Inspection.header, null, 2)}
                          </pre>
                        </div>
                        <div>
                          <span className="text-stone-500 font-bold block mb-1">Decoded Claims:</span>
                          <pre className="p-2 rounded bg-white border border-stone-200 text-[10px]">
                            {JSON.stringify(lab4Inspection.payload, null, 2)}
                          </pre>
                        </div>
                      </div>
                    </div>

                    <div className="bg-stone-900 text-stone-200 p-4 rounded-2xl font-mono text-xs flex flex-col justify-between">
                      <div>
                        <div className="text-stone-400 mb-2">// Resource Server Token Verification Pipeline</div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            lab4Inspection.status.includes("VALID") ? "bg-emerald-950 text-emerald-400" : "bg-red-950 text-red-400"
                          }`}>
                            {lab4Inspection.status}
                          </span>
                        </div>
                        <div className="text-stone-300 text-xs leading-relaxed">
                          {lab4Inspection.message}
                        </div>
                      </div>
                      <div className="text-stone-500 text-[11px] pt-4 border-t border-stone-800">
                        NIST SP 800-63B & OWASP REST Security: Always enforce algorithm whitelist on backend. Never rely on the header's 'alg' parameter without policy check.
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* LAB 5: Rate Limiting & Resource Consumption */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                    Lab 5
                  </span>
                  <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                    API Rate Limiting & Resource Consumption Simulator
                  </h3>
                </div>
                <span className="text-xs font-mono text-stone-400">OWASP API4:2023</span>
              </div>
              <p className="text-xs text-stone-600 mb-4">
                Demonstrate token bucket rate limiting and page size boundary enforcement to mitigate Denial-of-Service and excessive resource consumption.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3 bg-stone-50 p-4 rounded-2xl border border-stone-200 text-xs">
                  <div>
                    <label className="font-mono font-bold text-stone-700 block mb-1">
                      Requested Page Size (<code className="font-mono">?limit=...</code>)
                    </label>
                    <input
                      type="number"
                      value={lab5PageSize}
                      onChange={(e) => setLab5PageSize(Number(e.target.value))}
                      className="w-full font-mono p-2 rounded-xl border border-stone-300 bg-white"
                    />
                    <span className="text-[11px] text-stone-500">Max permissible limit: 100 records per request</span>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-stone-200">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-stone-700">Token Bucket Capacity:</span>
                      <span className="font-mono font-bold text-orange-600">{lab5Tokens} / 5 tokens</span>
                    </div>
                    <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-orange-600 h-full transition-all duration-300"
                        style={{ width: `${(lab5Tokens / 5) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button
                      onClick={handleLab5Fire}
                      className="flex-1 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold transition cursor-pointer"
                    >
                      Send GET /api/reports?limit={lab5PageSize}
                    </button>
                    <button
                      onClick={handleLab5Refill}
                      className="px-3 py-2 bg-stone-200 hover:bg-stone-300 text-stone-700 rounded-xl font-bold transition cursor-pointer"
                    >
                      Refill Bucket
                    </button>
                  </div>
                </div>

                <div className="bg-stone-900 text-stone-200 p-4 rounded-2xl font-mono text-xs flex flex-col justify-between">
                  <div>
                    <div className="text-stone-400 mb-2">// Rate Limiter Ingestion Stream</div>
                    {lab5Log.length > 0 ? (
                      <div className="space-y-2">
                        {lab5Log.map((log) => (
                          <div
                            key={log.id}
                            className={`p-2 rounded text-[11px] border ${
                              log.type === "success"
                                ? "bg-emerald-950/50 border-emerald-800 text-emerald-300"
                                : log.type === "danger"
                                ? "bg-red-950/50 border-red-800 text-red-300"
                                : "bg-stone-800 border-stone-700 text-stone-300"
                            }`}
                          >
                            {log.text}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-stone-500 italic mt-6">Fire requests rapidly to exhaust tokens and trigger HTTP 429 Too Many Requests.</div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* LAB 6: SSRF Validator & Third-Party Trust Sandbox */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                    Lab 6
                  </span>
                  <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                    API Inventory, SSRF & Third-Party Trust Sandbox
                  </h3>
                </div>
                <span className="text-xs font-mono text-stone-400">OWASP API7:2023 & API10:2023</span>
              </div>
              <p className="text-xs text-stone-600 mb-4">
                Test how a server-side webhook dispatcher or avatar fetcher handles user-supplied URLs. Observe how destinations resolving to internal RFC1918 subnets and cloud instance metadata (169.254.169.254) are rejected before network egress.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3 bg-stone-50 p-4 rounded-2xl border border-stone-200 text-xs">
                  <div>
                    <label className="font-mono font-bold text-stone-700 block mb-1">Target Webhook URL</label>
                    <input
                      type="text"
                      value={lab6Url}
                      onChange={(e) => setLab6Url(e.target.value)}
                      className="w-full font-mono p-2 rounded-xl border border-stone-300 bg-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-stone-500 block">Quick Test Presets:</span>
                    <div className="flex flex-wrap gap-1.5">
                      <button
                        onClick={() => handleLab6Test("http://169.254.169.254/latest/meta-data/")}
                        className="px-2 py-1 bg-red-100 text-red-800 rounded font-mono text-[10px] hover:bg-red-200 cursor-pointer"
                      >
                        AWS/GCP Metadata
                      </button>
                      <button
                        onClick={() => handleLab6Test("http://localhost:8080/admin/keys")}
                        className="px-2 py-1 bg-red-100 text-red-800 rounded font-mono text-[10px] hover:bg-red-200 cursor-pointer"
                      >
                        Localhost (127.0.0.1)
                      </button>
                      <button
                        onClick={() => handleLab6Test("http://192.168.1.50/internal-api")}
                        className="px-2 py-1 bg-red-100 text-red-800 rounded font-mono text-[10px] hover:bg-red-200 cursor-pointer"
                      >
                        Private RFC1918 IP
                      </button>
                      <button
                        onClick={() => handleLab6Test("https://api.github.com/repos/prepspaces")}
                        className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded font-mono text-[10px] hover:bg-emerald-200 cursor-pointer"
                      >
                        Valid HTTPS Partner
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => handleLab6Test()}
                    className="w-full py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold transition cursor-pointer"
                  >
                    Validate & Dispatch Egress Request
                  </button>
                </div>

                <div className="bg-stone-900 text-stone-200 p-4 rounded-2xl font-mono text-xs flex flex-col justify-between">
                  <div>
                    <div className="text-stone-400 mb-2">// Egress Firewall & DNS Validation Policy</div>
                    {lab6Response ? (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            lab6Response.allowed ? "bg-emerald-950 text-emerald-400" : "bg-red-950 text-red-400"
                          }`}>
                            HTTP {lab6Response.status} {lab6Response.allowed ? "ALLOW" : "BLOCKED"}
                          </span>
                        </div>
                        <div className="text-stone-300 text-xs leading-relaxed">
                          {lab6Response.reason}
                        </div>
                      </div>
                    ) : (
                      <div className="text-stone-500 italic mt-6">Select a preset URL or type your own to test SSRF filtering.</div>
                    )}
                  </div>
                  <div className="text-stone-500 text-[11px] pt-4 border-t border-stone-800">
                    Defenders must validate destination IPs post-DNS resolution to defeat DNS rebinding attacks.
                  </div>
                </div>
              </div>
            </div>

            {/* 8-POINT LAB SUBMISSION CHECKLIST */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                    Lab Submission Readiness Checklist
                  </h3>
                  <p className="text-xs text-stone-500">
                    Verify all 8 practical evaluation criteria before proceeding to the final capstone project.
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-sm font-bold text-orange-600">
                    {completedChecklistCount} / 8 Completed
                  </span>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-2 text-xs">
                {[
                  { id: "item1", label: "Authentication and recovery paths reviewed" },
                  { id: "item2", label: "Object-level authorization tests completed (BOLA)" },
                  { id: "item3", label: "Function-level permissions verified (BFLA)" },
                  { id: "item4", label: "Writable properties restricted appropriately (BOPLA)" },
                  { id: "item5", label: "Token and credential validation reviewed (JWT/keys)" },
                  { id: "item6", label: "Resource-consumption protections assessed (rate limits)" },
                  { id: "item7", label: "API inventory and external dependencies documented" },
                  { id: "item8", label: "Findings include remediation and retest evidence" }
                ].map((item) => (
                  <label
                    key={item.id}
                    onClick={() => toggleChecklist(item.id)}
                    className={`flex items-center gap-3 p-3 rounded-2xl border transition cursor-pointer ${
                      checklist[item.id]
                        ? "bg-emerald-50/60 border-emerald-300 text-emerald-950 font-semibold"
                        : "bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checklist[item.id]}
                      onChange={() => {}}
                      className="rounded accent-emerald-600"
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: PREP SPACES CASE STUDY                                             */}
        {/* ========================================================================= */}
        {activeTab === "case-study" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Architecture Case Study
                </span>
                <span className="text-xs font-mono text-stone-400">PrepSpaces API Security Framework</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                Securing the PrepSpaces Distributed Interview Evaluation Platform
              </h2>

              <p className="text-sm text-stone-700 leading-relaxed mb-6">
                PrepSpaces operates a multi-tenant cloud application connecting thousands of technical candidates with peer mock interviewers, automated coding sandboxes, and enterprise recruiting partners. This case study details how the platform addresses authentication, authorization, session lifecycles, and API abuse prevention.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-2">
                  <div className="font-bold text-stone-900 text-sm flex items-center gap-2">
                    <Shield className="w-4 h-4 text-orange-600" />
                    Authentication Layer
                  </div>
                  <p className="text-stone-600">
                    Dual credential support: Argon2id password hashing + WebAuthn FIDO2 passkeys. Centralized Redis token store with instant revocation on suspicious IP changes.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-2">
                  <div className="font-bold text-stone-900 text-sm flex items-center gap-2">
                    <Lock className="w-4 h-4 text-orange-600" />
                    Resource Authorization
                  </div>
                  <p className="text-stone-600">
                    Every database query joins the tenant boundary: <code className="font-mono">WHERE id = $1 AND (candidate_id = $2 OR assigned_interviewer_id = $2)</code>. BOLA attempts return 404.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-2">
                  <div className="font-bold text-stone-900 text-sm flex items-center gap-2">
                    <Zap className="w-4 h-4 text-orange-600" />
                    Abuse & Rate Controls
                  </div>
                  <p className="text-stone-600">
                    Tiered Redis token buckets: 100 req/min for general browsing, 5 req/min for expensive LLM interview feedback generation. Mandatory Idempotency-Key on mutations.
                  </p>
                </div>
              </div>

              <h3 className="text-lg font-bold text-stone-900 mb-3">PrepSpaces Production Request Pipeline Architecture</h3>
              <div className="p-5 rounded-2xl bg-stone-900 text-stone-200 text-xs font-mono space-y-3 leading-relaxed">
                <div>[1. Cloudflare Edge / WAF]</div>
                <div className="pl-4 text-stone-400">↳ DDoS mitigation, TLS 1.3 termination, bot detection, global IP rate limiting.</div>
                <div>[2. Envoy API Gateway]</div>
                <div className="pl-4 text-stone-400">↳ RS256 JWT signature verification, audience check (<code className="text-amber-400">&quot;aud&quot;: &quot;prepspaces-core&quot;</code>), route path mapping.</div>
                <div>[3. Node.js Core Service Layer]</div>
                <div className="pl-4 text-stone-400">↳ Role verification (BFLA), Zod schema allowlisting (BOPLA), Idempotency check in Redis.</div>
                <div>[4. PostgreSQL Data Access Layer]</div>
                <div className="pl-4 text-stone-400">↳ Parameterized queries with explicit ownership clauses (BOLA prevention). Row-Level Security enabled.</div>
                <div>[5. Asynchronous Webhook Egress Dispatcher]</div>
                <div className="pl-4 text-stone-400">↳ Isolated outbound proxy blocking RFC1918 and metadata endpoints (SSRF prevention).</div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: KNOWLEDGE ASSESSMENT (QUIZ)                                        */}
        {/* ========================================================================= */}
        {activeTab === "quiz" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                      Knowledge Assessment
                    </span>
                    <span className="text-xs font-mono text-stone-400">6 Scenario Questions</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    API Security & Access Control Evaluation
                  </h2>
                </div>
                {quizSubmitted && (
                  <div className="text-right">
                    <div className="text-xs font-mono text-stone-400 uppercase">Score</div>
                    <div className={`text-2xl font-black font-mono ${
                      quizScore >= 5 ? "text-emerald-600" : quizScore >= 4 ? "text-amber-600" : "text-red-600"
                    }`}>
                      {quizScore} / {quizQuestions.length} ({Math.round((quizScore / quizQuestions.length) * 100)}%)
                    </div>
                  </div>
                )}
              </div>

              <p className="text-xs sm:text-sm text-stone-600 mb-6">
                Select the single most accurate response for each scenario. Submit to review detailed explanations based on OWASP and NIST standards.
              </p>

              <div className="space-y-6">
                {quizQuestions.map((q, idx) => {
                  const selected = quizAnswers[q.id];
                  const isAnswered = selected !== undefined;
                  const isCorrect = selected === q.correctAnswer;

                  return (
                    <div
                      key={q.id}
                      className={`p-5 rounded-2xl border transition-all ${
                        quizSubmitted
                          ? isCorrect
                            ? "bg-emerald-50/50 border-emerald-300"
                            : "bg-red-50/50 border-red-300"
                          : "bg-stone-50 border-stone-200"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2 font-mono text-xs text-stone-500">
                        <span className="font-bold text-stone-800">Question {idx + 1} of {quizQuestions.length}</span>
                      </div>
                      <div className="font-bold text-stone-900 text-sm mb-3">{q.question}</div>

                      <div className="space-y-2">
                        {q.options.map((opt, oIdx) => {
                          const isOptionSelected = selected === oIdx;
                          const isOptionCorrect = oIdx === q.correctAnswer;

                          let btnStyle = "bg-white border-stone-200 text-stone-700 hover:border-orange-300";
                          if (quizSubmitted) {
                            if (isOptionCorrect) {
                              btnStyle = "bg-emerald-100 border-emerald-500 text-emerald-950 font-semibold";
                            } else if (isOptionSelected && !isOptionCorrect) {
                              btnStyle = "bg-red-100 border-red-500 text-red-950";
                            }
                          } else if (isOptionSelected) {
                            btnStyle = "bg-stone-900 text-white border-stone-900";
                          }

                          return (
                            <button
                              key={oIdx}
                              onClick={() => handleSelectAnswer(q.id, oIdx)}
                              disabled={quizSubmitted}
                              className={`w-full text-left p-3 rounded-xl border text-xs transition cursor-pointer flex items-center justify-between ${btnStyle}`}
                            >
                              <span>{opt}</span>
                              {quizSubmitted && isOptionCorrect && (
                                <Check className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                              )}
                              {quizSubmitted && isOptionSelected && !isOptionCorrect && (
                                <X className="w-4 h-4 text-red-600 shrink-0 ml-2" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {quizSubmitted && (
                        <div className="mt-3 text-xs text-stone-700 pt-3 border-t border-stone-200/60">
                          <strong className="text-stone-900">Explanation: </strong>
                          {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex items-center gap-3 pt-4 border-t border-stone-200">
                {!quizSubmitted ? (
                  <button
                    onClick={handleQuizSubmit}
                    disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                    className="px-6 py-3 bg-orange-600 hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-2xl text-xs transition cursor-pointer shadow-xs"
                  >
                    Submit Assessment
                  </button>
                ) : (
                  <button
                    onClick={handleQuizReset}
                    className="px-6 py-3 bg-stone-900 hover:bg-black text-white font-bold rounded-2xl text-xs transition cursor-pointer shadow-xs"
                  >
                    Retake Quiz
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: CAPSTONE PROJECT & RUBRIC                                          */}
        {/* ========================================================================= */}
        {activeTab === "capstone" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Final Capstone
                </span>
                <span className="text-xs font-mono text-stone-400">100% Evaluation Rubric</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                Capstone Project: Secure the PrepSpaces API
              </h2>

              <p className="text-sm text-stone-700 leading-relaxed mb-6">
                PrepSpaces provides REST APIs for student accounts, courses, interview sessions, interview reports, and platform administration. A recent security audit flagged critical vulnerabilities including account recovery weaknesses, BOLA on interview reports, BOPLA mass assignment on user profiles, unmetered AI report generation, and an SSRF exposure in avatar/document import webhooks. Your assignment is to design, implement, and validate a comprehensive API security architecture.
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="text-base font-bold text-stone-900">Capstone Assignment Requirements (Parts A – H)</h3>
                <div className="grid sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                    <strong className="text-stone-900">Part A — Endpoint Inventory & Threat Model</strong>
                    <p className="text-stone-600">Document at least 8 endpoints with owners, consumers, auth requirements, roles, resource scopes, and data classifications.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                    <strong className="text-stone-900">Part B — Authentication & Session Lifecycle</strong>
                    <p className="text-stone-600">Specify login, MFA, password recovery (single-use 128-bit tokens), rotation, and global session revocation.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                    <strong className="text-stone-900">Part C — Authorization Matrix & Scoped Queries</strong>
                    <p className="text-stone-600">Eliminate BOLA using ownership-scoped queries; implement strict BFLA role checks and BOPLA DTO allowlists.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                    <strong className="text-stone-900">Part D — Token & API Credential Security</strong>
                    <p className="text-stone-600">Formulate strict RS256 JWT validation (signature, iss, aud, exp); prohibit alg: "none"; scope API keys.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                    <strong className="text-stone-900">Part E — Resource & Business-Flow Protection</strong>
                    <p className="text-stone-600">Configure tiered token bucket rate limits, pagination bounds (max 100), and Idempotency-Key headers.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                    <strong className="text-stone-900">Part F — API Governance & SSRF Hardening</strong>
                    <p className="text-stone-600">Decommission deprecated v1 shadow endpoints; configure DNS-resolving egress filtering against metadata and RFC1918 IPs.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                    <strong className="text-stone-900">Part G — Test Evidence & Remediation Matrix</strong>
                    <p className="text-stone-600">Include negative test results proving that unauthorized requests receive 401, 403, 404, or 429.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                    <strong className="text-stone-900">Part H — Final Technical Architecture Report</strong>
                    <p className="text-stone-600">Deliver an executive summary, threat model diagrams, code diffs, residual risk matrix, and signoff checklist.</p>
                  </div>
                </div>
              </div>

              {/* EVALUATION RUBRIC */}
              <h3 className="text-base font-bold text-stone-900 mb-3">Capstone Evaluation Rubric (100% Total)</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-100 text-stone-800">
                      <th className="p-3 font-semibold">Assessment Area</th>
                      <th className="p-3 font-semibold">Weight</th>
                      <th className="p-3 font-semibold">Evaluation Criteria & Required Deliverables</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">Endpoint Inventory & Threat Model</td>
                      <td className="p-3 font-mono font-bold text-orange-600">10%</td>
                      <td className="p-3">Comprehensive catalog of at least 8 endpoints with data classification and STRIDE analysis.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">Authentication & Session Security</td>
                      <td className="p-3 font-mono font-bold text-orange-600">15%</td>
                      <td className="p-3">Secure password hashing (Argon2id), parity error handling, MFA step-up, single-use recovery tokens.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">Object-, Function- & Property-Level Auth</td>
                      <td className="p-3 font-mono font-bold text-orange-600">25%</td>
                      <td className="p-3">Ownership-scoped database queries (fixes BOLA), backend role checks (fixes BFLA), DTO allowlists (fixes BOPLA).</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">Token & API Credential Security</td>
                      <td className="p-3 font-mono font-bold text-orange-600">15%</td>
                      <td className="p-3">Cryptographic JWT signature verification, strict algorithm enforcement, claim validation, secret scoping.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">Resource & Business-Flow Protections</td>
                      <td className="p-3 font-mono font-bold text-orange-600">10%</td>
                      <td className="p-3">Token bucket rate limiting, pagination boundaries, request size limits, and idempotency guarantees.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">API Integration & Lifecycle Governance</td>
                      <td className="p-3 font-mono font-bold text-orange-600">10%</td>
                      <td className="p-3">SSRF egress filtering (blocking 169.254.169.254 and private CIDRs), third-party response validation, deprecation policy.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">Testing, Remediation & Evidence Quality</td>
                      <td className="p-3 font-mono font-bold text-orange-600">15%</td>
                      <td className="p-3">Negative test execution logs showing proper HTTP 401, 403, 404, 429 status codes and retest proof.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-3 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-600">
                <strong className="text-stone-900">Passing Threshold: </strong>
                Minimum 70% required, with 100% correct enforcement of object-level authorization (BOLA) and cryptographic token signature verification.
              </div>
            </div>

            {/* OFFICIAL REFERENCES */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <h3 className="font-bold text-stone-900 text-base mb-3">
                Recommended Reading & Official Standards
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                {[
                  {
                    name: "OWASP API Security Top 10:2023",
                    desc: "Official taxonomy for API risks including BOLA, broken auth, BOPLA, resource consumption, and SSRF.",
                    url: "https://api-security.owasp.org/editions/2023/en/0x11-t10/"
                  },
                  {
                    name: "OWASP Authentication Cheat Sheet",
                    desc: "Best-practice guidance on login security, credential verification, and account enumeration protection.",
                    url: "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html"
                  },
                  {
                    name: "OWASP Authorization Cheat Sheet",
                    desc: "Architectural rules for consistent access control, deny-by-default policies, and positive validation.",
                    url: "https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html"
                  },
                  {
                    name: "OWASP Session Management Cheat Sheet",
                    desc: "Session identifier entropy, lifecycle, rotation, timeouts, SameSite cookies, and global revocation.",
                    url: "https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html"
                  },
                  {
                    name: "OWASP REST Security Cheat Sheet",
                    desc: "HTTP security headers, JWT claim validation, API key scoping, input validation, and audit logging.",
                    url: "https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html"
                  },
                  {
                    name: "NIST SP 800-63B-4 — Digital Authentication (2025)",
                    desc: "Current NIST guidelines for digital identities, authenticator management, passkeys, and reauthentication.",
                    url: "https://csrc.nist.gov/pubs/sp/800/63/B/4/final"
                  },
                  {
                    name: "OWASP Top 10:2025 — Broken Access Control (A01)",
                    desc: "Examines how broken access control and authentication failures remain primary web security risks.",
                    url: "https://top10.owasp.org/2025/A01_2025-Broken_Access_Control/"
                  }
                ].map((ref, idx) => (
                  <a
                    key={idx}
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-stone-50 border border-stone-200 hover:border-orange-300 hover:bg-orange-50/40 transition group flex flex-col justify-between"
                  >
                    <div>
                      <strong className="text-stone-900 group-hover:text-orange-950 block mb-1">
                        {ref.name}
                      </strong>
                      <p className="text-stone-600 text-[11px] leading-relaxed">
                        {ref.desc}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-orange-600 font-mono text-[11px] font-bold mt-2">
                      <span>View Specification</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* FOOTER NAVIGATION (PREVIOUS & NEXT MODULE)                                */}
        {/* ========================================================================= */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[#e7e3da] pt-6">
          <button
            onClick={() => navigate("/learning/cybersecurity/owasp-top-10")}
            className="flex items-center gap-2 rounded-2xl border border-stone-200 bg-white px-5 py-3 text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#f97316] transition shadow-xs cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous: Module 14 (OWASP Top 10 & Injection)</span>
          </button>

          <button
            onClick={() => navigate("/learning/cybersecurity/secure-code-review")}
            className="flex items-center gap-2 rounded-2xl bg-[#ea580c] px-5 py-3 text-xs font-bold text-white hover:bg-orange-600 transition shadow-xs cursor-pointer"
          >
            <span>Next: Module 16 (Secure Code Review & Testing)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
