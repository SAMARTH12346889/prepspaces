import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Globe,
  Layers,
  Terminal,
  Shield,
  Activity,
  Play,
  RotateCcw,
  Sliders,
  Copy,
  Check,
  Server,
  Network,
  HelpCircle,
  Award,
  AlertTriangle,
  Sparkles,
  Lock,
  Workflow,
  Zap,
  Boxes,
  Compass,
  FileCode,
  ShieldCheck,
  RefreshCw,
  Cpu,
  Monitor,
  HardDrive,
  Clock,
  Gauge,
  SlidersHorizontal,
  ExternalLink,
  Eye,
  FileText,
  Key,
  Database,
  Search,
  AlertCircle,
  FileSpreadsheet,
  TerminalSquare,
  Binary,
  FolderGit2,
  Filter,
  ShieldAlert,
  Target,
  Crosshair,
  UserCheck,
  UserX,
  FileWarning,
  Flame,
  CheckSquare,
  Square,
  PlusCircle,
  Trash2,
  Download,
  Fingerprint,
  Radio,
  FileCheck2,
  ListFilter,
  CheckCheck,
  TrendingUp,
  Wifi,
  Split,
  Router,
  Ban,
  RadioTower,
  KeyRound,
  FileKey,
  LockKeyhole,
  Users,
  UserCog,
  FileLock2,
  FolderLock,
  Wrench,
  FilePlus,
  ShieldX,
  History,
  FileCheck,
  EyeOff,
  ClipboardList,
  Smartphone,
  QrCode,
  KeySquare,
  Share2,
  UserMinus,
  UserPlus,
  ShieldQuestion,
  FingerprintIcon,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* PREPSPACES CYBERSECURITY MASTER COURSE: MODULE 11                          */
/* Identity & Access Management (IAM), Authentication, Authorization & MFA    */
/* Informed by NIST SP 800-63-4, OWASP ASVS, RFC 9700 (OAuth 2.0 BCP) & FIDO2 */
/* -------------------------------------------------------------------------- */

export default function CybersecurityIAM() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(1);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'oauth-sim' | 'authz-sim' | 'mfa-sim' | 'hashing-sim' | 'quiz'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 1: OAUTH 2.0 + PKCE & OIDC FLOW VISUALIZER & JWT INSPECTOR        */
  /* -------------------------------------------------------------------------- */
  const [oauthStep, setOauthStep] = useState(1);
  const [pkceCodeVerifier, setPkceCodeVerifier] = useState("dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk");
  const [pkceCodeChallenge, setPkceCodeChallenge] = useState("E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM");
  const [tamperJwt, setTamperJwt] = useState(false);

  const decodedJwt = useMemo(() => {
    const header = {
      alg: "RS256",
      typ: "JWT",
      kid: "prepspaces-auth-key-2026",
    };

    const payload = {
      iss: "https://auth.prepspaces.com",
      sub: "usr_9490b248",
      aud: "https://api.prepspaces.com/v1",
      exp: Math.floor(Date.now() / 1000) + 3600,
      iat: Math.floor(Date.now() / 1000),
      email: "candidate.alice@prepspaces.edu",
      role: tamperJwt ? "platform_admin" : "candidate",
      scope: "openid profile email reports:read",
      tenant_id: "org_engineering_prep",
    };

    const signatureValid = !tamperJwt;

    return { header, payload, signatureValid };
  }, [tamperJwt]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 2: RBAC VS ABAC VS BOLA/IDOR ENFORCEMENT ENGINE                  */
  /* -------------------------------------------------------------------------- */
  const [callerRole, setCallerRole] = useState("student"); // 'student' | 'recruiter' | 'instructor' | 'admin'
  const [callerTenant, setCallerTenant] = useState("org_alpha");
  const [callerUserId, setCallerUserId] = useState("user_alice");
  const [requestedReportId, setRequestedReportId] = useState("rep_alice_interview");
  const [isBusinessHours, setIsBusinessHours] = useState(true);
  const [enforceObjectLevel, setEnforceObjectLevel] = useState(true);

  // Mock Database of candidate reports
  const mockReportsDb = {
    rep_alice_interview: {
      id: "rep_alice_interview",
      ownerId: "user_alice",
      tenantId: "org_alpha",
      title: "Alice - Senior Distributed Systems Interview",
      score: "94/100 (Strong Hire)",
      evaluatorId: "inst_sarah",
    },
    rep_bob_interview: {
      id: "rep_bob_interview",
      ownerId: "user_bob",
      tenantId: "org_beta",
      title: "Bob - Cybersecurity Architect Evaluation",
      score: "78/100 (Hire)",
      evaluatorId: "inst_david",
    },
  };

  const authzDecision = useMemo(() => {
    const report = mockReportsDb[requestedReportId];
    if (!report) {
      return {
        allowed: false,
        statusCode: 404,
        reason: "Resource Not Found: The specified report ID does not exist.",
        vulnerability: null,
      };
    }

    // SCENARIO 1: Object-level check disabled (Simulating BOLA / IDOR Vulnerability)
    if (!enforceObjectLevel) {
      if (callerRole === "student" && callerUserId !== report.ownerId) {
        return {
          allowed: true,
          statusCode: 200,
          data: report,
          reason: "BOLA VULNERABILITY EXPLOITED! User passed general role check (Role: student), but server did NOT verify object ownership. Caller obtained private interview records belonging to another candidate!",
          vulnerability: "Broken Object-Level Authorization (OWASP API Security #1 / IDOR)",
        };
      }
    }

    // SCENARIO 2: Hardened RBAC + ABAC + Ownership Verification
    if (callerRole === "admin") {
      return {
        allowed: true,
        statusCode: 200,
        data: report,
        reason: "Access Granted: Administrator role verified with tenant compliance and platform audit logging.",
        vulnerability: null,
      };
    }

    if (callerRole === "student") {
      if (report.ownerId === callerUserId && report.tenantId === callerTenant) {
        return {
          allowed: true,
          statusCode: 200,
          data: report,
          reason: "Access Granted: Caller is confirmed owner of this report within their authorized organization (tenant).",
          vulnerability: null,
        };
      } else {
        return {
          allowed: false,
          statusCode: 403,
          data: null,
          reason: "Access Denied (403 Forbidden): Ownership check failed. Student is not permitted to view other candidates' private interview reports.",
          vulnerability: null,
        };
      }
    }

    if (callerRole === "recruiter") {
      if (report.tenantId === callerTenant) {
        if (!isBusinessHours) {
          return {
            allowed: false,
            statusCode: 403,
            data: null,
            reason: "Access Denied by ABAC Context Policy: Recruiter access to candidate interview dossiers is restricted to approved working hours (08:00 - 19:00 UTC).",
            vulnerability: null,
          };
        }
        return {
          allowed: true,
          statusCode: 200,
          data: report,
          reason: "Access Granted by ABAC: Recruiter belongs to the same organization and request meets active business hours environmental policy.",
          vulnerability: null,
        };
      } else {
        return {
          allowed: false,
          statusCode: 403,
          data: null,
          reason: "Access Denied (Cross-Tenant Boundary): Report belongs to a different client organization (org_beta vs org_alpha).",
          vulnerability: null,
        };
      }
    }

    return {
      allowed: false,
      statusCode: 403,
      data: null,
      reason: "Access Denied: Unrecognized role or authorization rule failure.",
      vulnerability: null,
    };
  }, [callerRole, callerTenant, callerUserId, requestedReportId, isBusinessHours, enforceObjectLevel]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 3: MFA PHISHING RESISTANCE & ATTACK INTERCEPTION SANDBOX         */
  /* -------------------------------------------------------------------------- */
  const [selectedMfaMethod, setSelectedMfaMethod] = useState("totp"); // 'sms' | 'totp' | 'webauthn'
  const [totpCountdown, setTotpCountdown] = useState(24);
  const [totpCode, setTotpCode] = useState("492817");
  const [isAitmAttackerProxy, setIsAitmAttackerProxy] = useState(false);

  // Rotate TOTP timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTotpCountdown((prev) => {
        if (prev <= 1) {
          // Generate new fake TOTP code
          setTotpCode(Math.floor(100000 + Math.random() * 900000).toString());
          return 30;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const mfaEvaluation = useMemo(() => {
    if (!isAitmAttackerProxy) {
      return {
        loginSuccess: true,
        accountTakeover: false,
        statusTitle: "Authentication Successful",
        details: `Direct connection to https://prepspaces.com. Factor verified cleanly with the identity provider.`,
      };
    }

    // Under Evilginx / AiTM Phishing Proxy
    if (selectedMfaMethod === "sms") {
      return {
        loginSuccess: false,
        accountTakeover: true,
        statusTitle: "CRITICAL: Account Takeover (SMS OTP Phished)",
        details:
          "Attacker's Evilginx reverse-proxy relayed the SMS code to the legitimate server in real time, captured the resulting session cookie, and took over the account! SMS has ZERO phishing resistance and is vulnerable to SIM-swapping.",
      };
    } else if (selectedMfaMethod === "totp") {
      return {
        loginSuccess: false,
        accountTakeover: true,
        statusTitle: "CRITICAL: Account Takeover (TOTP Relayed)",
        details:
          "The user entered the 6-digit authenticator code on the phishing site (prepspaces.phish.co). The AiTM proxy immediately submitted the code to prepspaces.com before the 30s window expired, successfully capturing the authenticated session token!",
      };
    } else {
      // WebAuthn / FIDO2 Passkey
      return {
        loginSuccess: false,
        accountTakeover: false,
        statusTitle: "ATTACK HALTED: WebAuthn Origin Mismatch",
        details:
          "The hardware authenticator / Passkey cryptographically signed the challenge bound to origin 'prepspaces.phish.co'. When the proxy attempted to forward the signature to 'https://prepspaces.com', the server verified the Relying Party ID (RP ID), detected the spoofed origin, and rejected the signature! WebAuthn is 100% Phishing-Resistant.",
      };
    }
  }, [selectedMfaMethod, isAitmAttackerProxy]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 4: PASSWORD HASHING ALGORITHM BENCHMARK & OFFLINE CRACK CALCULATOR*/
  /* -------------------------------------------------------------------------- */
  const [selectedAlgo, setSelectedAlgo] = useState("argon2id"); // 'sha256' | 'pbkdf2' | 'bcrypt' | 'argon2id'
  const [passwordLength, setPasswordLength] = useState(10);
  const [complexityType, setComplexityType] = useState("alphanumeric"); // 'numbers' | 'alphanumeric' | 'all_chars'

  const crackMath = useMemo(() => {
    // Character set size
    let charsetSize = 62; // alphanumeric
    if (complexityType === "numbers") charsetSize = 10;
    if (complexityType === "all_chars") charsetSize = 95;

    // Total combinations = charsetSize ^ passwordLength
    const totalCombinations = Math.pow(charsetSize, passwordLength);

    // Hash speeds per 8x RTX 4090 GPU rig (hashes per second)
    const speeds = {
      sha256: 120_000_000_000, // 120 GH/s
      pbkdf2: 12_000_000, // 12 MH/s (600,000 iterations)
      bcrypt: 150_000, // 150 kH/s (cost 12)
      argon2id: 25_000, // 25 kH/s (memory-hard 64MB)
    };

    const hps = speeds[selectedAlgo];
    const averageSeconds = (totalCombinations / 2) / hps;

    const formatTime = (secs) => {
      if (secs < 0.001) return "< 1 millisecond (Instant)";
      if (secs < 60) return `${Math.round(secs)} seconds`;
      if (secs < 3600) return `${Math.round(secs / 60)} minutes`;
      if (secs < 86400) return `${Math.round(secs / 3600)} hours`;
      if (secs < 31536000) return `${Math.round(secs / 86400)} days`;
      if (secs < 31536000 * 1000) return `${Math.round(secs / 31536000)} years`;
      if (secs < 31536000 * 1000000) return `${Math.round(secs / (31536000 * 1000))} thousand years`;
      return `${(secs / (31536000 * 1000000)).toExponential(2)} million years`;
    };

    return {
      hpsFormatted: hps >= 1_000_000_000 ? `${hps / 1_000_000_000} GH/s` : hps >= 1_000_000 ? `${hps / 1_000_000} MH/s` : `${hps / 1_000} kH/s`,
      timeToCrack: formatTime(averageSeconds),
      totalCombinations: totalCombinations.toExponential(2),
      isSecureAgainstOfflineGpu: selectedAlgo === "argon2id" || (selectedAlgo === "bcrypt" && passwordLength >= 12),
    };
  }, [selectedAlgo, passwordLength, complexityType]);

  /* -------------------------------------------------------------------------- */
  /* QUIZ DATA: 8 COMPREHENSIVE QUESTIONS FROM SECTION 11.14                   */
  /* -------------------------------------------------------------------------- */
  const quizQuestions = [
    {
      id: 1,
      question: "What is the difference between authentication and authorization?",
      options: [
        "They mean the same thing",
        "Authentication verifies an identity; authorization determines permitted actions",
        "Authentication grants administrator rights",
        "Authorization verifies a password",
      ],
      correctIndex: 1,
      explanation:
        "Authentication (AuthN) proves *who you are* (verifying identity via authenticators), whereas authorization (AuthZ) decides *what you are allowed to do* (enforcing access policies on specific resources).",
    },
    {
      id: 2,
      question: "Which combination qualifies as multi-factor authentication (MFA)?",
      options: [
        "Password and PIN",
        "Two different passwords",
        "Password and a separate hardware security key",
        "Username and email address",
      ],
      correctIndex: 2,
      explanation:
        "MFA requires two or more distinct factor categories. A password (something you know) combined with a hardware security key (something you have) satisfies the multi-factor requirement. A password plus a PIN uses two knowledge factors, which is merely two-step verification, not two-factor.",
    },
    {
      id: 3,
      question: "Which control best prevents a student from accessing another student's interview report?",
      options: [
        "Hide the report link in the UI",
        "Use unpredictable report IDs only (UUIDs)",
        "Check ownership and authorization on the backend for every request",
        "Require a complex password only",
      ],
      correctIndex: 2,
      explanation:
        "Broken Object-Level Authorization (BOLA/IDOR) can only be prevented by enforcing server-side ownership and authorization verification on every data query. Obscure IDs or hidden UI buttons do not protect backend APIs.",
    },
    {
      id: 4,
      question: "What is the primary purpose of Role-Based Access Control (RBAC)?",
      options: [
        "Assign permissions through roles",
        "Encrypt all passwords",
        "Replace identity verification",
        "Eliminate access reviews",
      ],
      correctIndex: 0,
      explanation:
        "RBAC groups permissions into roles corresponding to business duties (e.g. Student, Instructor, Recruiter, Admin), simplifying privilege assignment and reducing administrative overhead.",
    },
    {
      id: 5,
      question: "Which statement about OAuth 2.0 is correct?",
      options: [
        "It is solely a password hashing algorithm",
        "It is an authorization framework for delegated access",
        "It automatically verifies every user identity",
        "It eliminates the need for token validation",
      ],
      correctIndex: 1,
      explanation:
        "OAuth 2.0 is an authorization framework designed for delegated resource access via tokens. User authentication is standardized by OpenID Connect (OIDC), which layers an identity protocol on top of OAuth 2.0.",
    },
    {
      id: 6,
      question: "Why should applications use adaptive password hashing (e.g. Argon2id, bcrypt)?",
      options: [
        "To recover the original password",
        "To make offline guessing more computationally and memory expensive",
        "To eliminate the need for unique salts",
        "To send passwords to the browser",
      ],
      correctIndex: 1,
      explanation:
        "Fast hashing algorithms (like plain SHA-256) allow attackers with GPU rigs to test billions of guesses per second offline. Adaptive, memory-hard algorithms (Argon2id, bcrypt) introduce configurable computational and RAM work factors that make offline cracking cost-prohibitive.",
    },
    {
      id: 7,
      question: "What is just-in-time (JIT) privileged access?",
      options: [
        "Permanent administrator access",
        "Temporary elevation when required for an authorized task",
        "A shared administrator password",
        "Access without authentication",
      ],
      correctIndex: 1,
      explanation:
        "JIT access grants elevated privileges only for the precise duration needed to execute an approved task, eliminating standing administrative privileges that could be compromised.",
    },
    {
      id: 8,
      question: "Why is account deprovisioning more than simply disabling a username?",
      options: [
        "Because all accounts must be deleted immediately",
        "Because independent tokens, sessions, SSH keys, and service credentials may remain active",
        "Because passwords cannot be changed",
        "Because audit logs must always be removed",
      ],
      correctIndex: 1,
      explanation:
        "Modern systems issue long-lived refresh tokens, OAuth grants, API keys, and cloud roles. Comprehensive deprovisioning requires invalidating active sessions, revoking OAuth tokens, and retiring standalone credentials across all connected services.",
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const handleSelectAnswer = (qId, optionIdx) => {
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const quizScore = useMemo(() => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  }, [selectedAnswers]);

  const resetQuiz = () => {
    setSelectedAnswers({});
    setShowQuizResults(false);
  };

  /* -------------------------------------------------------------------------- */
  /* LAB ASSESSMENT RECORD STATE (11.13.3)                                      */
  /* -------------------------------------------------------------------------- */
  const [labSeverity, setLabSeverity] = useState("High");
  const [labEvidence, setLabEvidence] = useState(
    "GET /api/v1/reports/rep_bob_interview returned 200 OK with full candidate evaluation for caller Alice (student role). Expected 403 Forbidden."
  );
  const [labRemediation, setLabRemediation] = useState(
    "Implement server-side ownership validator in ReportController: require req.user.id === report.ownerId || req.user.hasRole('admin')."
  );

  const copyLabRecord = () => {
    const text = `PREPSPACES IAM SECURITY ASSESSMENT WORKSHEET
Test Account Role: Student
Control Tested: Object-Level Authorization (BOLA / IDOR)
Severity: ${labSeverity}
Evidence & Expected Behavior:
${labEvidence}
Recommended Remediation:
${labRemediation}`;
    navigator.clipboard.writeText(text);
    alert("IAM assessment record copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* HEADER & MODULE TITLE */}
      <header className="sticky top-0 z-40 border-b border-stone-200 bg-white/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate("/learning/cybersecurity")}
                className="p-2 rounded-xl border border-stone-200 text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
                title="Back to Cybersecurity Track"
              >
                <ArrowLeft size={18} />
              </button>
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wide uppercase bg-orange-100 text-orange-800 border border-orange-200">
                    Module 11 • In-Depth Curriculum
                  </span>
                  <span className="text-xs text-stone-500 font-mono">NIST SP 800-63-4 • RFC 9700 • FIDO2</span>
                </div>
                <h1 className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
                  <KeyRound className="text-orange-600" size={22} />
                  Identity &amp; Access Management (IAM), Authentication, Authorization &amp; MFA
                </h1>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => navigate("/learning/cybersecurity/os-hardening")}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border border-stone-200 text-stone-600 hover:bg-stone-50 transition-colors"
                title="Previous: Module 10"
              >
                <ArrowLeft size={14} />
                <span>Mod 10</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* TRACK SUB-NAVIGATION */}
      <ModuleNav currentModuleId="iam" track="cybersecurity" />

      {/* TAB SELECTOR: THEORY VS 4 SIMULATORS VS QUIZ */}
      <div className="border-b border-stone-200 bg-white shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-2.5 scrollbar-thin">
            <button
              onClick={() => setActiveTab("theory")}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                activeTab === "theory"
                  ? "bg-stone-900 text-white shadow-xs"
                  : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
              }`}
            >
              <BookOpen size={16} />
              <span>Full Curriculum &amp; Labs</span>
            </button>

            <button
              onClick={() => setActiveTab("oauth-sim")}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                activeTab === "oauth-sim"
                  ? "bg-orange-600 text-white shadow-xs"
                  : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
              }`}
            >
              <Share2 size={16} />
              <span>OAuth 2.0 PKCE &amp; JWT Lab</span>
            </button>

            <button
              onClick={() => setActiveTab("authz-sim")}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                activeTab === "authz-sim"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
              }`}
            >
              <LockKeyhole size={16} />
              <span>BOLA / IDOR &amp; ABAC Engine</span>
            </button>

            <button
              onClick={() => setActiveTab("mfa-sim")}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                activeTab === "mfa-sim"
                  ? "bg-emerald-700 text-white shadow-xs"
                  : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
              }`}
            >
              <Fingerprint size={16} />
              <span>MFA &amp; Phishing Resistance Sandbox</span>
            </button>

            <button
              onClick={() => setActiveTab("hashing-sim")}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                activeTab === "hashing-sim"
                  ? "bg-amber-600 text-white shadow-xs"
                  : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
              }`}
            >
              <Binary size={16} />
              <span>Password Hashing Benchmark</span>
            </button>

            <button
              onClick={() => setActiveTab("quiz")}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                activeTab === "quiz"
                  ? "bg-purple-700 text-white shadow-xs"
                  : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
              }`}
            >
              <Award size={16} />
              <span>Module 11 Quiz (8 Qs)</span>
            </button>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ========================================================================= */}
        {/* TAB 1: FULL CURRICULUM (11.1 - 11.16)                                    */}
        {/* ========================================================================= */}
        {activeTab === "theory" && (
          <div className="space-y-10">
            {/* 11.1 MODULE OVERVIEW */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
                <ShieldCheck size={16} />
                <span>11.1 Module Overview</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mb-4">
                Identity and Access Management, Authentication, Authorization, and MFA
              </h2>
              <p className="text-base text-stone-700 leading-relaxed mb-6">
                Identity and Access Management (IAM) is the security discipline of ensuring that the right people, devices, applications, and services obtain appropriate access to the right resources at the right time—and that access is revoked immediately when it is no longer required. Even a fully patched operating system or segmented network falls when identities are hijacked, privileges are excessive, authentication is weak, or backend authorization checks are omitted.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/80">
                  <h3 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600" />
                    Target Learning Objectives
                  </h3>
                  <ul className="text-xs sm:text-sm text-stone-600 space-y-2">
                    <li>• Distinguish Identity, Authentication (AuthN), Authorization (AuthZ), and Accounting.</li>
                    <li>• Manage full account lifecycles: Joiner, Mover, Leaver, and automated deprovisioning.</li>
                    <li>• Evaluate password hashing (Argon2id, bcrypt), Passkeys, FIDO2/WebAuthn, and MFA.</li>
                    <li>• Master authorization architectures: Discretionary (DAC), Mandatory (MAC), RBAC, and ABAC.</li>
                    <li>• Prevent Broken Object-Level Authorization (BOLA/IDOR) and Broken Function-Level Authorization.</li>
                    <li>• Implement Single Sign-On (SSO), Identity Federation, OAuth 2.0 (RFC 9700), OIDC, and SAML.</li>
                    <li>• Enforce Privileged Access Management (PAM), Just-In-Time (JIT) access, and secrets rotation.</li>
                  </ul>
                </div>

                <div className="bg-orange-50/60 rounded-2xl p-5 border border-orange-200/80 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-orange-900 mb-2 flex items-center gap-2">
                      <Sparkles size={16} className="text-orange-600" />
                      Authoritative Guidance &amp; Specifications
                    </h3>
                    <p className="text-xs text-orange-950 leading-relaxed">
                      This curriculum synthesizes formal standards from <strong>NIST SP 800-63-4</strong> (Digital Identity Guidelines), <strong>OWASP ASVS &amp; API Security Top 10</strong>, <strong>IETF RFC 9700</strong> (OAuth 2.0 Security BCP), <strong>OpenID Connect Core 1.0</strong>, and <strong>FIDO Alliance WebAuthn</strong>.
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-orange-200/60 flex items-center justify-between text-xs text-orange-800">
                    <span className="font-semibold">Core Verification:</span>
                    <span className="font-mono bg-white px-2 py-0.5 rounded border border-orange-200">Server-Side Authorization</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 11.2 IAM FUNDAMENTALS */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
                <Layers size={16} />
                <span>11.2 Identity and Access Management Fundamentals</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                The Four Pillars: Identity, AuthN, AuthZ &amp; Accounting
              </h2>

              {/* 4 PILLARS CARDS */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="text-xs font-bold uppercase text-orange-600 mb-1">Pillar 1</div>
                  <h4 className="text-sm font-bold text-stone-900 mb-1">Identity</h4>
                  <p className="text-xs text-stone-600">
                    A digital representation of a human, service, or workload with unique attributes and identifiers.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="text-xs font-bold uppercase text-blue-600 mb-1">Pillar 2</div>
                  <h4 className="text-sm font-bold text-stone-900 mb-1">Authentication (AuthN)</h4>
                  <p className="text-xs text-stone-600">
                    Proving confidence in the claimed identity via knowledge, possession, or inherence authenticators.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="text-xs font-bold uppercase text-emerald-600 mb-1">Pillar 3</div>
                  <h4 className="text-sm font-bold text-stone-900 mb-1">Authorization (AuthZ)</h4>
                  <p className="text-xs text-stone-600">
                    Enforcing which specific operations and resources an authenticated identity can execute.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="text-xs font-bold uppercase text-purple-600 mb-1">Pillar 4</div>
                  <h4 className="text-sm font-bold text-stone-900 mb-1">Accounting &amp; Audit</h4>
                  <p className="text-xs text-stone-600">
                    Immutable logging of actions to trace activity back to an identity and demonstrate accountability.
                  </p>
                </div>
              </div>

              {/* TABLE: HUMAN VS WORKLOAD IDENTITIES */}
              <div className="overflow-x-auto rounded-2xl border border-stone-200">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                    <tr>
                      <th className="p-3.5">Identity Class</th>
                      <th className="p-3.5">Representative Example</th>
                      <th className="p-3.5">Primary Threat Exposure</th>
                      <th className="p-3.5">Defensive Architecture</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-700">
                    <tr className="hover:bg-stone-50">
                      <td className="p-3.5 font-semibold text-stone-900">Human Identity</td>
                      <td className="p-3.5">Student, Recruiter, Administrator</td>
                      <td className="p-3.5">Credential stuffing, AiTM phishing, credential reuse</td>
                      <td className="p-3.5 font-mono text-xs">FIDO2/WebAuthn, Passkeys, scoped RBAC</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3.5 font-semibold text-stone-900">Service Identity</td>
                      <td className="p-3.5">Database background worker, cron sync daemon</td>
                      <td className="p-3.5">Long-lived secrets leaked in repo or logs</td>
                      <td className="p-3.5 font-mono text-xs">Short-lived tokens, HashiCorp Vault, Managed Identities</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3.5 font-semibold text-stone-900">Workload Identity</td>
                      <td className="p-3.5">Kubernetes pod, Serverless Lambda function</td>
                      <td className="p-3.5">Lateral pivot between microservices via broad trust</td>
                      <td className="p-3.5 font-mono text-xs">SPIFFE/SPIRE, mTLS, OIDC federation</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3.5 font-semibold text-stone-900">External / Federated</td>
                      <td className="p-3.5">University partner via SAML / Google Workspace</td>
                      <td className="p-3.5">Orphaned accounts after student graduation</td>
                      <td className="p-3.5 font-mono text-xs">SCIM automated provisioning, token expiry</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 11.3 IDENTITY LIFECYCLE MANAGEMENT */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
                <Workflow size={16} />
                <span>11.3 Identity Lifecycle Management</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Joiner, Mover, Leaver (JML) &amp; Automated Deprovisioning
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-6">
                Accounts must never be left unmanaged. A user changing roles should have unnecessary access removed rather than accumulated.
              </p>

              {/* JML FLOW */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase mb-1">
                    <UserPlus size={16} />
                    Joiner Phase
                  </div>
                  <h4 className="text-sm font-bold text-stone-900 mb-1">Onboarding &amp; Minimum Baseline</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Identity proofing validates the individual. Approved birthright accounts are provisioned with baseline least-privilege roles and required MFA enrollment.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="flex items-center gap-2 text-amber-600 font-bold text-xs uppercase mb-1">
                    <RefreshCw size={16} />
                    Mover Phase
                  </div>
                  <h4 className="text-sm font-bold text-stone-900 mb-1">Recalculate Access (No Creep)</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    When employees switch teams, old permissions must be formally stripped. Privilege accumulation (privilege creep) is a leading cause of insider risk.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="flex items-center gap-2 text-red-600 font-bold text-xs uppercase mb-1">
                    <UserMinus size={16} />
                    Leaver Phase
                  </div>
                  <h4 className="text-sm font-bold text-stone-900 mb-1">Comprehensive Deprovisioning</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Promptly disable accounts, revoke OAuth refresh tokens, terminate active sessions, rotate shared service keys, and reclaim hardware authenticators.
                  </p>
                </div>
              </div>

              {/* CALLOUT: DEPROVISIONING CHECKLIST */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-stone-800 text-xs sm:text-sm">
                <h4 className="font-bold text-amber-950 mb-1 flex items-center gap-2">
                  <AlertTriangle size={16} className="text-amber-700" />
                  Why Disabling an Account in Active Directory Is Not Enough
                </h4>
                <p className="text-stone-700 leading-relaxed">
                  Disabling an account in LDAP or Active Directory does not automatically revoke signed JSON Web Tokens (JWTs) held in browser localStorage, OAuth refresh tokens cached in SaaS applications, or personal API keys generated in third-party developer consoles. A robust offboarding flow coordinates with the Identity Provider (IdP) to revoke token families and terminate active HTTP sessions immediately.
                </p>
              </div>
            </section>

            {/* 11.4 & 11.5 AUTHENTICATION FACTORS, PASSWORDS & MFA */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
                <Fingerprint size={16} />
                <span>11.4 &amp; 11.5 Authentication Factors, Password Security &amp; MFA</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Adaptive Password Hashing, TOTP &amp; Phishing-Resistant FIDO2/WebAuthn
              </h2>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-6">
                Authentication factors are categorized into <strong>Something you know</strong> (knowledge), <strong>Something you have</strong> (possession), and <strong>Something you are</strong> (inherence). Passwords must be protected using modern memory-hard adaptive hashing schemes, while multi-factor authentication must defend against modern reverse-proxy phishing attacks.
              </p>

              {/* PASSWORD HASHING COMPARISON */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200">
                  <h3 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-2">
                    <Binary size={16} className="text-orange-600" />
                    Recommended Password Hashing Schemes (OWASP)
                  </h3>
                  <div className="space-y-3 text-xs sm:text-sm text-stone-700">
                    <div className="p-3 bg-white rounded-xl border border-stone-200">
                      <span className="font-bold text-emerald-700 block mb-1">Argon2id (Winner of Password Hashing Competition):</span>
                      Memory-hard design that resists GPU and ASIC cracking by requiring dedicated RAM buffers (e.g. 64 MB per hash).
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-stone-200">
                      <span className="font-bold text-stone-900 block mb-1">bcrypt:</span>
                      Battle-tested adaptive key-derivation function based on Blowfish. Configurable work factor (cost parameter &ge; 12 recommended).
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-stone-200">
                      <span className="font-bold text-stone-900 block mb-1">PBKDF2:</span>
                      NIST-approved standard using HMAC. Requires high iteration counts (600,000+ for PBKDF2-HMAC-SHA256) to resist modern offline GPU guessing.
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-2">
                      <Smartphone size={16} className="text-blue-600" />
                      MFA Hierarchy &amp; Phishing Resistance
                    </h3>
                    <div className="space-y-2 text-xs sm:text-sm text-stone-700">
                      <div className="p-2.5 bg-red-50 text-red-950 rounded-xl border border-red-200">
                        <strong>SMS / Voice OTP:</strong> Weakest. Vulnerable to SIM swapping, SS7 interception, and AiTM phishing proxies.
                      </div>
                      <div className="p-2.5 bg-amber-50 text-amber-950 rounded-xl border border-amber-200">
                        <strong>TOTP (Google Auth, Microsoft Auth):</strong> Better, but 6-digit codes can still be intercepted and relayed by real-time phishing proxies (Evilginx).
                      </div>
                      <div className="p-2.5 bg-emerald-50 text-emerald-950 rounded-xl border border-emerald-200">
                        <strong>FIDO2 / WebAuthn / Passkeys:</strong> Phishing-resistant. Cryptographic challenge-response is mathematically bound to the browser&apos;s TLS origin.
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-stone-900 text-stone-100 rounded-xl font-mono text-xs">
                    # WebAuthn Challenge Binding:<br />
                    RP ID: &quot;prepspaces.com&quot; &lt;-- Phishing domain cannot forge signature!
                  </div>
                </div>
              </div>
            </section>

            {/* 11.6 & 11.7 AUTHORIZATION MODELS & COMMON VULNERABILITIES */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
                <LockKeyhole size={16} />
                <span>11.6 &amp; 11.7 Authorization Models &amp; BOLA / IDOR Defenses</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                RBAC, ABAC, ReBAC &amp; Preventing Broken Object-Level Authorization
              </h2>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-6">
                Authorization answers whether an authenticated subject is allowed to perform a specific action on a specific resource. Hiding buttons in the frontend interface is <em>never</em> an authorization control—every API request must be validated on the backend.
              </p>

              {/* TABLE OF AUTHORIZATION MODELS */}
              <div className="overflow-x-auto rounded-2xl border border-stone-200 mb-8">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                    <tr>
                      <th className="p-3.5">Authorization Model</th>
                      <th className="p-3.5">Decision Criteria</th>
                      <th className="p-3.5">Platform Application Example</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-700">
                    <tr className="hover:bg-stone-50">
                      <td className="p-3.5 font-semibold text-stone-900">DAC (Discretionary)</td>
                      <td className="p-3.5">Resource owner controls ACLs</td>
                      <td className="p-3.5">Candidate shares interview recording link with a specific mentor</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3.5 font-semibold text-stone-900">RBAC (Role-Based)</td>
                      <td className="p-3.5">Assigned roles (Student, Recruiter, Admin)</td>
                      <td className="p-3.5">Recruiters can create job listings; Students cannot</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3.5 font-semibold text-stone-900">ABAC (Attribute-Based)</td>
                      <td className="p-3.5">Subject, resource, action, and context attributes</td>
                      <td className="p-3.5">Recruiter can only view candidate records belonging to their tenant during business hours</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3.5 font-semibold text-stone-900">ReBAC (Relationship-Based)</td>
                      <td className="p-3.5">Graph relationships between entities</td>
                      <td className="p-3.5">Instructor can evaluate only students enrolled in their assigned cohorts</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* BOLA / IDOR CALLOUT */}
              <div className="p-5 rounded-2xl bg-red-50/70 border border-red-200 text-stone-800">
                <h3 className="text-sm font-bold text-red-950 mb-2 flex items-center gap-2">
                  <ShieldAlert size={16} className="text-red-700" />
                  OWASP API Security #1: Broken Object-Level Authorization (BOLA / IDOR)
                </h3>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-3">
                  BOLA occurs when an endpoint accepts a resource identifier (e.g. <code>/api/reports/1042</code>) and returns data without checking whether the authenticated caller owns or is authorized for that specific object. Using random UUIDs does <em>not</em> fix BOLA—it only makes guessing harder. The server must explicitly enforce:
                </p>
                <div className="p-3 bg-stone-900 text-stone-100 rounded-xl font-mono text-xs">
                  // Hardened Server-Side Authorization Check<br />
                  const report = await db.reports.findById(req.params.id);<br />
                  if (!report) return res.status(404).json(&#123; error: &quot;Not found&quot; &#125;);<br />
                  <br />
                  if (report.userId !== req.user.id &amp;&amp; !req.user.roles.includes(&apos;admin&apos;)) &#123;<br />
                  &nbsp;&nbsp;return res.status(403).json(&#123; error: &quot;Forbidden&quot; &#125;);<br />
                  &#125;
                </div>
              </div>
            </section>

            {/* 11.8 & 11.9 TOKENS, OAUTH 2.0, OIDC & FEDERATION */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
                <Share2 size={16} />
                <span>11.8 &amp; 11.9 Tokens, Sessions, OAuth 2.0 (RFC 9700) &amp; Federation</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                OAuth 2.0 with PKCE, OpenID Connect &amp; Secure JWT Handling
              </h2>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-6">
                <strong>OAuth 2.0</strong> is an authorization delegation framework. <strong>OpenID Connect (OIDC)</strong> adds an identity layer on top of OAuth 2.0 to provide user authentication through signed <strong>ID Tokens</strong>.
              </p>

              {/* OAUTH 2.0 ROLES */}
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                  <div className="font-bold text-orange-600 text-xs mb-1">Resource Owner</div>
                  <p className="text-xs text-stone-600">The user granting delegated access to their private resources.</p>
                </div>
                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                  <div className="font-bold text-blue-600 text-xs mb-1">Client Application</div>
                  <p className="text-xs text-stone-600">The SPA, mobile app, or backend requesting access tokens on user&apos;s behalf.</p>
                </div>
                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                  <div className="font-bold text-emerald-600 text-xs mb-1">Authorization Server</div>
                  <p className="text-xs text-stone-600">Authenticates user, verifies consent, and issues signed access/ID tokens.</p>
                </div>
                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                  <div className="font-bold text-purple-600 text-xs mb-1">Resource Server</div>
                  <p className="text-xs text-stone-600">The API verifying token signature, audience, scopes, and claims.</p>
                </div>
              </div>

              {/* RFC 9700 PKCE STANDARD */}
              <div className="p-5 rounded-2xl bg-stone-100/80 border border-stone-200">
                <h4 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-2">
                  <KeySquare size={16} className="text-stone-700" />
                  RFC 9700 Best Current Practice: Mandatory PKCE (Proof Key for Code Exchange)
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-3">
                  Under modern OAuth 2.0 standards, all public and single-page clients must use <strong>Authorization Code flow with PKCE</strong>. The client generates a secret <code>code_verifier</code> and sends its SHA-256 hash (<code>code_challenge</code>) with the initial authorization request. When exchanging the authorization code, the client proves possession of the original verifier, preventing authorization code interception attacks.
                </p>
                <div className="text-xs font-mono bg-white p-3 rounded-xl border border-stone-200 text-stone-800">
                  code_challenge = BASE64URL(SHA256(code_verifier)) &amp; code_challenge_method=S256
                </div>
              </div>
            </section>

            {/* 11.10 & 11.11 PRIVILEGED ACCESS MANAGEMENT (PAM) & SECRETS */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
                <ShieldAlert size={16} />
                <span>11.10 &amp; 11.11 Privileged Access Management (PAM) &amp; Workload Secrets</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Just-In-Time (JIT) Elevation, Break-Glass Accounts &amp; Key Rotation
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200">
                  <h3 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-2">
                    <Clock size={16} className="text-orange-600" />
                    Just-In-Time (JIT) Access
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    Eliminate standing admin privileges. Engineers request time-bound elevation (e.g. 2 hours) for approved maintenance tickets with automated revocation upon task completion.
                  </p>
                </div>

                <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200">
                  <h3 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-2">
                    <Flame size={16} className="text-red-600" />
                    Break-Glass Emergency Accounts
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    Highly restricted emergency accounts reserved for disaster recovery when primary SSO/MFA fails. Monitored via high-priority SIEM alerts with immediate post-use rotation.
                  </p>
                </div>

                <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200">
                  <h3 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-2">
                    <Key size={16} className="text-emerald-600" />
                    Workload Secrets Hygiene
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    Never commit secrets to git repositories. Inject short-lived credentials via IAM Workload Identity federation, HashiCorp Vault, or AWS Secrets Manager.
                  </p>
                </div>
              </div>
            </section>

            {/* 11.12 & 11.13 PRACTICAL LAB: SECURE IAM DESIGN */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
                <Terminal size={16} />
                <span>11.12 &amp; 11.13 Practical Lab: Secure IAM Design for Prepspaces</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Prepspaces IAM Assessment Worksheet &amp; Policy Matrix
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-6">
                Conduct a simulated security assessment of the Prepspaces learning and interview platform. Record findings, evaluate severities, and generate formal remediation tickets.
              </p>

              {/* INTERACTIVE LAB ASSESSMENT FORM */}
              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                  <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                    <ClipboardList size={16} className="text-orange-600" />
                    IAM Security Assessment Record Generator
                  </h3>
                  <button
                    onClick={copyLabRecord}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-stone-900 text-white hover:bg-stone-800"
                  >
                    <Copy size={13} />
                    <span>Copy Assessment Record</span>
                  </button>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 text-xs mb-4">
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">Target Control Evaluated:</label>
                    <input
                      type="text"
                      readOnly
                      value="Object-Level Authorization (BOLA/IDOR) on /api/v1/reports/:id"
                      className="w-full p-2 rounded-lg border border-stone-300 bg-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">Preliminary Severity:</label>
                    <div className="flex items-center gap-2">
                      {["Low", "Medium", "High", "Critical"].map((sev) => (
                        <button
                          key={sev}
                          onClick={() => setLabSeverity(sev)}
                          className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                            labSeverity === sev
                              ? sev === "Critical"
                                ? "bg-red-600 text-white"
                                : sev === "High"
                                ? "bg-orange-600 text-white"
                                : "bg-blue-600 text-white"
                              : "bg-white border text-stone-600"
                          }`}
                        >
                          {sev}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-xs mb-3">
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">Observed Evidence &amp; Behavior:</label>
                    <textarea
                      rows={2}
                      value={labEvidence}
                      onChange={(e) => setLabEvidence(e.target.value)}
                      className="w-full p-2 rounded-lg border border-stone-300 bg-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">Recommended Remediation:</label>
                    <textarea
                      rows={2}
                      value={labRemediation}
                      onChange={(e) => setLabRemediation(e.target.value)}
                      className="w-full p-2 rounded-lg border border-stone-300 bg-white font-mono"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* 11.15 REFERENCES */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
                <ExternalLink size={16} />
                <span>11.15 Official References and Further Study</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Standards, Specifications &amp; Authoritative Guidance
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <a
                  href="https://csrc.nist.gov/pubs/sp/800/63/4/final"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-stone-50 border border-stone-200 hover:border-orange-300 hover:bg-orange-50/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold uppercase text-orange-600 tracking-wider">NIST SP 800-63-4</span>
                    <h4 className="text-sm font-bold text-stone-900 mt-1 mb-1">Digital Identity Guidelines</h4>
                    <p className="text-xs text-stone-600">
                      Identity proofing, enrollment, authenticators, federation, and assurance levels (IAL, AAL, FAL).
                    </p>
                  </div>
                  <div className="mt-3 text-xs text-orange-600 font-semibold flex items-center gap-1">
                    <span>csrc.nist.gov</span>
                    <ExternalLink size={12} />
                  </div>
                </a>

                <a
                  href="https://www.rfc-editor.org/rfc/rfc9700.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-stone-50 border border-stone-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold uppercase text-blue-600 tracking-wider">IETF RFC 9700</span>
                    <h4 className="text-sm font-bold text-stone-900 mt-1 mb-1">OAuth 2.0 Security BCP</h4>
                    <p className="text-xs text-stone-600">
                      Best current practice for modern OAuth implementations: mandatory PKCE, exact URI matching, and token security.
                    </p>
                  </div>
                  <div className="mt-3 text-xs text-blue-600 font-semibold flex items-center gap-1">
                    <span>rfc-editor.org</span>
                    <ExternalLink size={12} />
                  </div>
                </a>

                <a
                  href="https://fidoalliance.org/passkeys/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-stone-50 border border-stone-200 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold uppercase text-emerald-600 tracking-wider">FIDO Alliance Passkeys</span>
                    <h4 className="text-sm font-bold text-stone-900 mt-1 mb-1">Phishing-Resistant Auth</h4>
                    <p className="text-xs text-stone-600">
                      Public-key authentication based on WebAuthn/CTAP replacing passwords with device-bound credentials.
                    </p>
                  </div>
                  <div className="mt-3 text-xs text-emerald-600 font-semibold flex items-center gap-1">
                    <span>fidoalliance.org</span>
                    <ExternalLink size={12} />
                  </div>
                </a>
              </div>
            </section>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: SIMULATOR 1 - OAUTH 2.0 + PKCE & OIDC FLOW VISUALIZER             */}
        {/* ========================================================================= */}
        {activeTab === "oauth-sim" && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase bg-orange-100 text-orange-800 border border-orange-200">
                    Interactive Simulator 1
                  </span>
                  <h2 className="text-2xl font-bold text-stone-900 mt-2">
                    OAuth 2.0 + PKCE Authorization Code Flow &amp; JWT Token Inspector
                  </h2>
                  <p className="text-sm text-stone-600 mt-1">
                    Trace step-by-step how a Single Page App (SPA) uses Proof Key for Code Exchange (S256) to safely obtain access and ID tokens without storing client secrets.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setOauthStep(1)}
                    className="px-3 py-1.5 rounded-lg border text-xs font-bold hover:bg-stone-100"
                  >
                    Reset Flow
                  </button>
                  <button
                    onClick={() => setOauthStep((prev) => Math.min(prev + 1, 4))}
                    className="px-4 py-1.5 rounded-lg bg-orange-600 text-white text-xs font-bold hover:bg-orange-700 shadow-xs"
                  >
                    Next Step ({oauthStep}/4)
                  </button>
                </div>
              </div>

              {/* FLOW STEPPERS */}
              <div className="grid sm:grid-cols-4 gap-3 mb-8">
                <div
                  onClick={() => setOauthStep(1)}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                    oauthStep === 1 ? "bg-orange-50 border-orange-400 font-bold" : "bg-stone-50 border-stone-200"
                  }`}
                >
                  <span className="text-[10px] text-stone-500 block uppercase">Step 1</span>
                  <span className="text-xs">Generate PKCE Verifier &amp; Challenge</span>
                </div>
                <div
                  onClick={() => setOauthStep(2)}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                    oauthStep === 2 ? "bg-orange-50 border-orange-400 font-bold" : "bg-stone-50 border-stone-200"
                  }`}
                >
                  <span className="text-[10px] text-stone-500 block uppercase">Step 2</span>
                  <span className="text-xs">User Login &amp; Auth Code Redirect</span>
                </div>
                <div
                  onClick={() => setOauthStep(3)}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                    oauthStep === 3 ? "bg-orange-50 border-orange-400 font-bold" : "bg-stone-50 border-stone-200"
                  }`}
                >
                  <span className="text-[10px] text-stone-500 block uppercase">Step 3</span>
                  <span className="text-xs">Token Exchange with Verifier</span>
                </div>
                <div
                  onClick={() => setOauthStep(4)}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                    oauthStep === 4 ? "bg-orange-50 border-orange-400 font-bold" : "bg-stone-50 border-stone-200"
                  }`}
                >
                  <span className="text-[10px] text-stone-500 block uppercase">Step 4</span>
                  <span className="text-xs">JWT Validation &amp; API Call</span>
                </div>
              </div>

              {/* STEP DETAIL DISPLAY */}
              <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs mb-8">
                {oauthStep === 1 && (
                  <div>
                    <div className="text-amber-400 font-bold mb-2 font-sans text-sm">
                      1. Client Generates Cryptographic PKCE Material (RFC 7636)
                    </div>
                    <div className="text-stone-300 mb-1">
                      code_verifier: <span className="text-emerald-400">{pkceCodeVerifier}</span>
                    </div>
                    <div className="text-stone-300 mb-3">
                      code_challenge (SHA256): <span className="text-blue-400">{pkceCodeChallenge}</span>
                    </div>
                    <div className="text-stone-400 text-[11px]">
                      Authorization URL Sent to Browser:<br />
                      GET https://auth.prepspaces.com/oauth/authorize?<br />
                      &nbsp;&nbsp;client_id=prepspaces_web_app&amp;<br />
                      &nbsp;&nbsp;response_type=code&amp;<br />
                      &nbsp;&nbsp;redirect_uri=https://prepspaces.com/callback&amp;<br />
                      &nbsp;&nbsp;scope=openid%20profile%20email%20reports:read&amp;<br />
                      &nbsp;&nbsp;code_challenge={pkceCodeChallenge}&amp;<br />
                      &nbsp;&nbsp;code_challenge_method=S256
                    </div>
                  </div>
                )}

                {oauthStep === 2 && (
                  <div>
                    <div className="text-amber-400 font-bold mb-2 font-sans text-sm">
                      2. User Authenticates with MFA on Authorization Server
                    </div>
                    <p className="text-stone-300 font-sans mb-3 text-xs leading-relaxed">
                      User validates with Passkey/MFA. Authorization Server stores the challenge and redirects back to the registered redirect URI with a short-lived authorization code.
                    </p>
                    <div className="text-stone-400 text-[11px]">
                      HTTP 302 Found &rarr; Location: https://prepspaces.com/callback?code=splat_code_92b8d1&amp;state=xyz123
                    </div>
                  </div>
                )}

                {oauthStep === 3 && (
                  <div>
                    <div className="text-amber-400 font-bold mb-2 font-sans text-sm">
                      3. Client Exchanges Authorization Code + Original PKCE Verifier
                    </div>
                    <div className="text-stone-400 text-[11px] mb-2">
                      POST https://auth.prepspaces.com/oauth/token<br />
                      Content-Type: application/x-www-form-urlencoded<br />
                      <br />
                      grant_type=authorization_code&amp;<br />
                      client_id=prepspaces_web_app&amp;<br />
                      code=splat_code_92b8d1&amp;<br />
                      redirect_uri=https://prepspaces.com/callback&amp;<br />
                      code_verifier={pkceCodeVerifier}
                    </div>
                    <div className="p-2 bg-stone-800 rounded text-emerald-400 text-[11px]">
                      Server computes SHA256(code_verifier) === stored challenge. Match verified! Tokens issued safely.
                    </div>
                  </div>
                )}

                {oauthStep === 4 && (
                  <div>
                    <div className="text-amber-400 font-bold mb-2 font-sans text-sm">
                      4. Tokens Issued: Access Token (JWT) &amp; OpenID Connect ID Token
                    </div>
                    <p className="text-stone-300 font-sans mb-2 text-xs">
                      The client presents this Bearer token in the <code>Authorization: Bearer &lt;token&gt;</code> header on protected API calls.
                    </p>
                  </div>
                )}
              </div>

              {/* JWT INSPECTOR & TAMPERING SIMULATOR */}
              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                    <KeyRound size={16} className="text-orange-600" />
                    Decoded JSON Web Token (JWT) Claim Inspector
                  </h3>
                  <button
                    onClick={() => setTamperJwt(!tamperJwt)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      tamperJwt ? "bg-red-600 text-white" : "bg-white border text-stone-700 hover:bg-stone-100"
                    }`}
                  >
                    {tamperJwt ? "Tampered: role='platform_admin'" : "Tamper Token (Elevate Role)"}
                  </button>
                </div>

                <div className="grid md:grid-cols-3 gap-4 text-xs font-mono">
                  {/* HEADER */}
                  <div className="p-3 bg-red-50/60 border border-red-200 rounded-xl">
                    <span className="text-red-700 font-bold block mb-1">Header (Algorithm)</span>
                    <pre className="text-red-950 overflow-x-auto">{JSON.stringify(decodedJwt.header, null, 2)}</pre>
                  </div>

                  {/* PAYLOAD */}
                  <div className="p-3 bg-purple-50/60 border border-purple-200 rounded-xl">
                    <span className="text-purple-700 font-bold block mb-1">Payload (Claims)</span>
                    <pre className="text-purple-950 overflow-x-auto">{JSON.stringify(decodedJwt.payload, null, 2)}</pre>
                  </div>

                  {/* SIGNATURE VERIFICATION */}
                  <div
                    className={`p-3 border rounded-xl flex flex-col justify-between ${
                      decodedJwt.signatureValid
                        ? "bg-emerald-50/60 border-emerald-300 text-emerald-950"
                        : "bg-red-50/80 border-red-300 text-red-950"
                    }`}
                  >
                    <div>
                      <span className="font-bold block mb-1">
                        Signature: {decodedJwt.signatureValid ? "VALID (RS256)" : "INVALID (Tampered)"}
                      </span>
                      <p className="text-[11px] leading-relaxed">
                        {decodedJwt.signatureValid
                          ? "Digital signature verified against IdP public key. Token claims are authentic."
                          : "CRITICAL: Signature mismatch! Payload was modified by client. The backend rejects the request with HTTP 401 Unauthorized."}
                      </p>
                    </div>
                    <div className="text-[10px] font-bold uppercase mt-2">
                      {decodedJwt.signatureValid ? "API Request: 200 OK" : "API Request: 401 Unauthorized"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: SIMULATOR 2 - BOLA / IDOR & ABAC ENGINE                           */}
        {/* ========================================================================= */}
        {activeTab === "authz-sim" && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase bg-blue-100 text-blue-800 border border-blue-200">
                    Interactive Simulator 2
                  </span>
                  <h2 className="text-2xl font-bold text-stone-900 mt-2">
                    BOLA / IDOR Vulnerability &amp; ABAC Policy Evaluation Engine
                  </h2>
                  <p className="text-sm text-stone-600 mt-1">
                    Simulate how Broken Object-Level Authorization allows cross-tenant or cross-user data leakage, and how server-side ABAC stops attacks.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <label className="text-xs font-bold text-stone-600">Object Authorization Check:</label>
                  <button
                    onClick={() => setEnforceObjectLevel(!enforceObjectLevel)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      enforceObjectLevel
                        ? "bg-emerald-600 text-white shadow-xs"
                        : "bg-red-600 text-white shadow-xs"
                    }`}
                  >
                    {enforceObjectLevel ? "Enforced (Hardened)" : "Disabled (Vulnerable BOLA)"}
                  </button>
                </div>
              </div>

              {/* REQUEST PROBE CONFIGURATOR */}
              <div className="grid sm:grid-cols-4 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <label className="text-xs font-bold uppercase text-stone-600 block mb-2">Caller Role</label>
                  <select
                    value={callerRole}
                    onChange={(e) => setCallerRole(e.target.value)}
                    className="w-full text-xs font-bold rounded-xl border border-stone-300 p-2 bg-white"
                  >
                    <option value="student">Student (user_alice)</option>
                    <option value="recruiter">Recruiter (recruiter_bob)</option>
                    <option value="admin">Platform Admin (admin_root)</option>
                  </select>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <label className="text-xs font-bold uppercase text-stone-600 block mb-2">Caller Tenant</label>
                  <select
                    value={callerTenant}
                    onChange={(e) => setCallerTenant(e.target.value)}
                    className="w-full text-xs font-bold rounded-xl border border-stone-300 p-2 bg-white"
                  >
                    <option value="org_alpha">Organization Alpha</option>
                    <option value="org_beta">Organization Beta</option>
                  </select>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <label className="text-xs font-bold uppercase text-stone-600 block mb-2">Target Report ID</label>
                  <select
                    value={requestedReportId}
                    onChange={(e) => setRequestedReportId(e.target.value)}
                    className="w-full text-xs font-bold rounded-xl border border-stone-300 p-2 bg-white font-mono"
                  >
                    <option value="rep_alice_interview">rep_alice_interview (Alice&apos;s own)</option>
                    <option value="rep_bob_interview">rep_bob_interview (Other student in org_beta)</option>
                  </select>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <label className="text-xs font-bold uppercase text-stone-600 block mb-2">Environmental Context</label>
                  <button
                    onClick={() => setIsBusinessHours(!isBusinessHours)}
                    className={`w-full py-2 rounded-xl text-xs font-bold transition-all ${
                      isBusinessHours ? "bg-stone-900 text-white" : "bg-amber-100 text-amber-800 border border-amber-300"
                    }`}
                  >
                    {isBusinessHours ? "Time: 14:00 (Business Hours)" : "Time: 02:30 (After Hours)"}
                  </button>
                </div>
              </div>

              {/* DECISION VERDICT */}
              <div
                className={`p-5 rounded-2xl border ${
                  authzDecision.allowed
                    ? authzDecision.vulnerability
                      ? "bg-red-50 border-red-300 text-red-950"
                      : "bg-emerald-50 border-emerald-300 text-emerald-950"
                    : "bg-stone-100 border-stone-300 text-stone-900"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {authzDecision.allowed ? (
                    authzDecision.vulnerability ? (
                      <AlertTriangle size={20} className="text-red-600 shrink-0" />
                    ) : (
                      <CheckCircle2 size={20} className="text-emerald-600 shrink-0" />
                    )
                  ) : (
                    <Ban size={20} className="text-stone-600 shrink-0" />
                  )}
                  <h4 className="text-base font-bold">
                    HTTP Response: {authzDecision.statusCode} {authzDecision.allowed ? "OK" : "Forbidden"}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed mb-3">{authzDecision.reason}</p>

                {authzDecision.data && (
                  <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-mono">
                    <span className="font-bold text-stone-500 block mb-1">Returned Payload:</span>
                    <div>Report Title: {authzDecision.data.title}</div>
                    <div>Confidential Score: {authzDecision.data.score}</div>
                    <div>Tenant ID: {authzDecision.data.tenantId}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: SIMULATOR 3 - MFA PHISHING RESISTANCE & ATTACK INTERCEPTION       */}
        {/* ========================================================================= */}
        {activeTab === "mfa-sim" && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase bg-emerald-100 text-emerald-800 border border-emerald-200">
                    Interactive Simulator 3
                  </span>
                  <h2 className="text-2xl font-bold text-stone-900 mt-2">
                    MFA Protocol Simulator &amp; Evilginx Phishing-Proxy Interception
                  </h2>
                  <p className="text-sm text-stone-600 mt-1">
                    Compare SMS OTP, TOTP Authenticator apps, and FIDO2/WebAuthn Passkeys against an Adversary-in-the-Middle (AiTM) reverse proxy.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <label className="text-xs font-bold text-stone-600">Simulate Attacker Proxy (AiTM):</label>
                  <button
                    onClick={() => setIsAitmAttackerProxy(!isAitmAttackerProxy)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      isAitmAttackerProxy ? "bg-red-600 text-white shadow-xs" : "bg-stone-200 text-stone-700"
                    }`}
                  >
                    {isAitmAttackerProxy ? "Active: prepspaces.phish.co" : "Direct: prepspaces.com"}
                  </button>
                </div>
              </div>

              {/* MFA METHOD SELECTOR */}
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <button
                  onClick={() => setSelectedMfaMethod("sms")}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    selectedMfaMethod === "sms" ? "border-orange-500 bg-orange-50/50 shadow-xs" : "border-stone-200 bg-stone-50"
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold text-sm text-stone-900 mb-1">
                    <Smartphone size={16} />
                    SMS / Voice OTP
                  </div>
                  <p className="text-xs text-stone-600">Sends 6-digit code via cellular telephony network.</p>
                </button>

                <button
                  onClick={() => setSelectedMfaMethod("totp")}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    selectedMfaMethod === "totp" ? "border-orange-500 bg-orange-50/50 shadow-xs" : "border-stone-200 bg-stone-50"
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold text-sm text-stone-900 mb-1">
                    <QrCode size={16} />
                    TOTP Authenticator App
                  </div>
                  <p className="text-xs text-stone-600">RFC 6238 time-based code rotating every 30 seconds.</p>
                </button>

                <button
                  onClick={() => setSelectedMfaMethod("webauthn")}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    selectedMfaMethod === "webauthn" ? "border-emerald-500 bg-emerald-50/50 shadow-xs" : "border-stone-200 bg-stone-50"
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold text-sm text-emerald-900 mb-1">
                    <Fingerprint size={16} />
                    FIDO2 / WebAuthn Passkey
                  </div>
                  <p className="text-xs text-stone-600">Public-key cryptography bound to browser TLS origin.</p>
                </button>
              </div>

              {/* LIVE TOTP DISPLAY OR WEBAUTHN DIALOG */}
              {selectedMfaMethod === "totp" && (
                <div className="p-4 rounded-2xl bg-stone-100 border border-stone-200 flex items-center justify-between mb-6">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-stone-500">Live Authenticator Code:</span>
                    <div className="text-2xl font-mono font-bold tracking-widest text-stone-900">{totpCode}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold uppercase text-stone-500">Expires in:</span>
                    <div className="text-sm font-mono font-bold text-orange-600">{totpCountdown}s</div>
                  </div>
                </div>
              )}

              {/* OUTCOME BANNER */}
              <div
                className={`p-5 rounded-2xl border ${
                  mfaEvaluation.accountTakeover
                    ? "bg-red-50 border-red-300 text-red-950"
                    : mfaEvaluation.loginSuccess
                    ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                    : "bg-blue-50 border-blue-300 text-blue-950"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {mfaEvaluation.accountTakeover ? (
                    <AlertTriangle size={20} className="text-red-600 shrink-0" />
                  ) : (
                    <ShieldCheck size={20} className="text-emerald-600 shrink-0" />
                  )}
                  <h4 className="text-base font-bold">{mfaEvaluation.statusTitle}</h4>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed">{mfaEvaluation.details}</p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: SIMULATOR 4 - PASSWORD HASHING BENCHMARK & CRACK CALCULATOR       */}
        {/* ========================================================================= */}
        {activeTab === "hashing-sim" && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase bg-amber-100 text-amber-800 border border-amber-200">
                    Interactive Simulator 4
                  </span>
                  <h2 className="text-2xl font-bold text-stone-900 mt-2">
                    Password Hashing Algorithm Benchmark &amp; Offline Cracker Cost Calculator
                  </h2>
                  <p className="text-sm text-stone-600 mt-1">
                    Calculate the mathematical resistance of password hashing algorithms against offline GPU brute-force clusters (8x NVIDIA RTX 4090).
                  </p>
                </div>
              </div>

              {/* CONTROLS */}
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <label className="text-xs font-bold uppercase text-stone-600 block mb-2">Hashing Function</label>
                  <select
                    value={selectedAlgo}
                    onChange={(e) => setSelectedAlgo(e.target.value)}
                    className="w-full text-xs font-bold rounded-xl border border-stone-300 p-2 bg-white"
                  >
                    <option value="sha256">Plain SHA-256 (Insecure for passwords)</option>
                    <option value="pbkdf2">PBKDF2-HMAC-SHA256 (600,000 iters)</option>
                    <option value="bcrypt">bcrypt (Cost 12)</option>
                    <option value="argon2id">Argon2id (Memory: 64MB, t=3, p=4)</option>
                  </select>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold uppercase text-stone-600">Password Length</label>
                    <span className="text-xs font-bold text-orange-600 font-mono">{passwordLength} chars</span>
                  </div>
                  <input
                    type="range"
                    min="6"
                    max="18"
                    value={passwordLength}
                    onChange={(e) => setPasswordLength(Number(e.target.value))}
                    className="w-full accent-orange-600"
                  />
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <label className="text-xs font-bold uppercase text-stone-600 block mb-2">Character Set</label>
                  <select
                    value={complexityType}
                    onChange={(e) => setComplexityType(e.target.value)}
                    className="w-full text-xs font-bold rounded-xl border border-stone-300 p-2 bg-white"
                  >
                    <option value="numbers">Digits Only (0-9, 10 combos)</option>
                    <option value="alphanumeric">Letters &amp; Numbers (a-z, A-Z, 0-9, 62 combos)</option>
                    <option value="all_chars">All ASCII + Symbols (95 combos)</option>
                  </select>
                </div>
              </div>

              {/* STATS TILES */}
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <span className="text-[10px] font-bold uppercase text-stone-500">GPU Rig Guessing Speed</span>
                  <div className="text-xl font-bold font-mono text-stone-900 mt-1">{crackMath.hpsFormatted}</div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <span className="text-[10px] font-bold uppercase text-stone-500">Keyspace Size (Combinations)</span>
                  <div className="text-xl font-bold font-mono text-stone-900 mt-1">{crackMath.totalCombinations}</div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <span className="text-[10px] font-bold uppercase text-stone-500">Est. Time to Crack (50% Prob.)</span>
                  <div className="text-xl font-bold font-mono text-orange-600 mt-1">{crackMath.timeToCrack}</div>
                </div>
              </div>

              {/* SECURITY ADVISORY */}
              <div
                className={`p-4 rounded-2xl border text-xs sm:text-sm ${
                  crackMath.isSecureAgainstOfflineGpu
                    ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                    : "bg-red-50 border-red-300 text-red-950 font-medium"
                }`}
              >
                {crackMath.isSecureAgainstOfflineGpu ? (
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span>Cryptographically Sound: Memory-hard hashing prevents cost-effective mass offline parallel cracking.</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <AlertTriangle size={16} className="text-red-600 shrink-0" />
                    <span>Vulnerable to Offline Cracking: Fast hashes or short passwords allow adversaries to crack hashes in minutes or hours.</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 6: MODULE 11 QUIZ (8 QUESTIONS FROM 11.14)                           */}
        {/* ========================================================================= */}
        {activeTab === "quiz" && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase bg-purple-100 text-purple-800 border border-purple-200">
                    Knowledge Assessment
                  </span>
                  <h2 className="text-2xl font-bold text-stone-900 mt-2">
                    Module 11 Comprehensive Quiz ({Object.keys(selectedAnswers).length} of 8 Answered)
                  </h2>
                  <p className="text-sm text-stone-600 mt-1">
                    Evaluate your mastery of authentication factors, authorization models (RBAC/ABAC), OAuth 2.0 PKCE, and MFA security.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={resetQuiz}
                    className="flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold border border-stone-200 text-stone-600 hover:bg-stone-50"
                  >
                    <RotateCcw size={14} />
                    <span>Reset</span>
                  </button>
                  <button
                    onClick={() => setShowQuizResults(true)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-purple-600 text-white hover:bg-purple-700 shadow-xs"
                  >
                    <CheckCircle2 size={14} />
                    <span>Check Answers</span>
                  </button>
                </div>
              </div>

              {/* QUESTIONS */}
              <div className="space-y-6">
                {quizQuestions.map((q, idx) => {
                  const isAnswered = selectedAnswers[q.id] !== undefined;
                  const isCorrect = selectedAnswers[q.id] === q.correctIndex;

                  return (
                    <div
                      key={q.id}
                      className={`p-5 rounded-2xl border transition-all ${
                        showQuizResults
                          ? isCorrect
                            ? "bg-emerald-50/50 border-emerald-300"
                            : "bg-red-50/50 border-red-300"
                          : "bg-stone-50/80 border-stone-200"
                      }`}
                    >
                      <h4 className="text-sm sm:text-base font-bold text-stone-900 mb-3">
                        {idx + 1}. {q.question}
                      </h4>

                      <div className="space-y-2 mb-3">
                        {q.options.map((option, optIdx) => {
                          const isSelected = selectedAnswers[q.id] === optIdx;
                          let optStyle = "bg-white border-stone-200 text-stone-800 hover:border-stone-300";

                          if (showQuizResults) {
                            if (optIdx === q.correctIndex) {
                              optStyle = "bg-emerald-100/80 border-emerald-400 font-bold text-emerald-950";
                            } else if (isSelected) {
                              optStyle = "bg-red-100/80 border-red-400 font-bold text-red-950";
                            }
                          } else if (isSelected) {
                            optStyle = "bg-purple-100 border-purple-400 font-bold text-purple-950 shadow-xs";
                          }

                          return (
                            <button
                              key={optIdx}
                              disabled={showQuizResults}
                              onClick={() => handleSelectAnswer(q.id, optIdx)}
                              className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${optStyle}`}
                            >
                              <span>{option}</span>
                              {isSelected && !showQuizResults && <Check size={14} className="text-purple-600" />}
                              {showQuizResults && optIdx === q.correctIndex && (
                                <Check size={14} className="text-emerald-700" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {showQuizResults && (
                        <div className="mt-3 p-3 rounded-xl bg-white/80 border border-stone-200 text-xs sm:text-sm text-stone-700">
                          <span className="font-bold text-stone-900 block mb-1">Explanation:</span>
                          {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* SCORE BANNER */}
              {showQuizResults && (
                <div className="mt-8 p-6 rounded-2xl bg-stone-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold">Quiz Results</h3>
                    <p className="text-xs sm:text-sm text-stone-300">
                      You scored {quizScore} out of 8 correct ({Math.round((quizScore / 8) * 100)}%).
                    </p>
                  </div>
                  <button
                    onClick={resetQuiz}
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-white text-stone-900 hover:bg-stone-100"
                  >
                    Retake Quiz
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* NOVA AI TUTOR DRAWER */}
      <LearningRo
        isOpen={showAiTutor}
        onClose={() => setShowAiTutor(false)}
        topic="Module 11: Identity and Access Management, Authentication, Authorization, and MFA"
        topicContext={`
          This is Module 11 of the Prepspaces Cybersecurity Master Course.
          Key themes:
          - Identity vs Authentication vs Authorization vs Accounting.
          - Identity Lifecycle: Joiner, Mover, Leaver, and automated deprovisioning (revoking tokens and sessions, not just disabling LDAP).
          - Password Security & Hashing: Argon2id (memory-hard), bcrypt (cost >= 12), PBKDF2 (600k+ iters), salts, pepper, avoiding plain SHA-256.
          - MFA: SMS vs TOTP (RFC 6238) vs FIDO2 / WebAuthn / Passkeys. Evilginx AiTM phishing proxies and why origin-bound WebAuthn is phishing-resistant.
          - Authorization Models: DAC, MAC, RBAC, ABAC (context attributes: tenant, business hours), ReBAC.
          - Vulnerabilities: BOLA / IDOR (OWASP API #1), Broken Function-Level Authorization, fail-open authorization, privilege escalation.
          - Sessions & Tokens: HttpOnly, Secure, SameSite cookies, JWT validation (iss, aud, exp, signature, kid), session rotation.
          - Federation & Protocols: OAuth 2.0 (RFC 9700 BCP, mandatory PKCE with S256), OpenID Connect Core 1.0 (ID tokens), SAML 2.0.
          - PAM: Just-In-Time (JIT) access, Just-Enough-Administration (JEA), break-glass accounts, secrets rotation.
        `}
      />
    </div>
  );
}
