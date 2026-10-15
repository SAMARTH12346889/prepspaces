import React, { useState, useMemo } from "react";
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
  Unlock,
  KeyRoundIcon,
  BadgeCheck,
  Unplug,
  ZapOff,
  Cookie,
  Code2,
  Bug,
  Braces,
  ChevronRight,
  FolderTree,
  LockOpen,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* PREPSPACES CYBERSECURITY MASTER COURSE: MODULE 15                          */
/* Authentication Flaws, Access Control, Session Security & API Security      */
/* Informed by OWASP API Security Top 10: 2023, NIST SP 800-63B-4 & RFC 9700   */
/* -------------------------------------------------------------------------- */

export default function CybersecurityAuthApiSecurity() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(1);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'bola-sim' | 'mass-sim' | 'jwt-sim' | 'rate-sim' | 'quiz'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 1: BOLA / IDOR EXPLOITATION & TENANT ISOLATION ENGINE             */
  /* -------------------------------------------------------------------------- */
  const [activeUserRole, setActiveUserRole] = useState("user_a"); // 'user_a' (Samarth) | 'user_b' (Alice) | 'admin'
  const [requestedReportId, setRequestedReportId] = useState("4821"); // '4821' (owned by A) | '7710' (owned by B)
  const [bolaDefenseMode, setBolaDefenseMode] = useState("hardened"); // 'vulnerable' | 'hardened'

  const bolaSimulation = useMemo(() => {
    const userProfiles = {
      user_a: { id: "usr_101", name: "Samarth", role: "learner" },
      user_b: { id: "usr_202", name: "Alice", role: "learner" },
      admin: { id: "usr_999", name: "Admin_Marcus", role: "administrator" },
    };

    const reportsDb = {
      "4821": {
        id: "4821",
        ownerId: "usr_101",
        candidate: "Samarth",
        title: "Staff System Design Mock",
        score: 96,
        notes: "Excellent trade-off analysis on Raft consensus vs Paxos.",
      },
      "7710": {
        id: "7710",
        ownerId: "usr_202",
        candidate: "Alice",
        title: "Principal Cloud Architecture Mock",
        score: 98,
        notes: "Flawless multi-region disaster recovery runbook design.",
      },
    };

    const currentUser = userProfiles[activeUserRole];
    const targetReport = reportsDb[requestedReportId];

    let statusCode = "200 OK";
    let responseBody = null;
    let accessGranted = false;
    let diagnosis = "";

    if (!targetReport) {
      statusCode = "404 Not Found";
      responseBody = { error: "Report not found" };
      diagnosis = "Requested report identifier does not exist in database.";
    } else if (bolaDefenseMode === "vulnerable") {
      // Vulnerable: Query checks ONLY report ID without verifying owner
      accessGranted = true;
      statusCode = "200 OK";
      responseBody = targetReport;
      if (currentUser.role !== "administrator" && targetReport.ownerId !== currentUser.id) {
        diagnosis = `CRITICAL BOLA (API1:2023): ${currentUser.name} (ID: ${currentUser.id}) accessed private report #${requestedReportId} belonging to ${targetReport.candidate} (ID: ${targetReport.ownerId})! Backend checked authentication but skipped object ownership verification!`;
      } else {
        diagnosis = `Authorized Access: ${currentUser.name} requested their own record.`;
      }
    } else {
      // Hardened: Backend enforces ownership check in query: WHERE id = $1 AND (user_id = $2 OR role = 'administrator')
      if (currentUser.role === "administrator" || targetReport.ownerId === currentUser.id) {
        accessGranted = true;
        statusCode = "200 OK";
        responseBody = targetReport;
        diagnosis = `SECURE AUTHORIZATION: Ownership verified. Caller ${currentUser.name} is authorized to access report #${requestedReportId}.`;
      } else {
        accessGranted = false;
        statusCode = "403 Forbidden";
        responseBody = {
          error: "Access Denied: You do not have permission to view this resource.",
          code: "ERR_UNAUTHORIZED_RESOURCE_ACCESS",
        };
        diagnosis = `BOLA PREVENTED: Backend rejected request! Caller ${currentUser.name} (ID: ${currentUser.id}) does not own report #${requestedReportId} (Owner: ${targetReport.ownerId}). Access denied by query scoping.`;
      }
    }

    return {
      currentUser,
      targetReport,
      statusCode,
      responseBody,
      accessGranted,
      diagnosis,
    };
  }, [activeUserRole, requestedReportId, bolaDefenseMode]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 2: BROKEN FUNCTION & PROPERTY-LEVEL (MASS ASSIGNMENT) SANDBOX     */
  /* -------------------------------------------------------------------------- */
  const [massPayloadType, setMassPayloadType] = useState("role_escalate");
  // 'benign' | 'role_escalate' | 'score_tamper'
  const [massDefenseMode, setMassDefenseMode] = useState("schema_filter"); // 'blind_merge' | 'schema_filter'

  const massSimulation = useMemo(() => {
    let clientPatch = {};
    if (massPayloadType === "benign") {
      clientPatch = { displayName: "Samarth S." };
    } else if (massPayloadType === "role_escalate") {
      clientPatch = { displayName: "Samarth S.", role: "administrator" };
    } else if (massPayloadType === "score_tamper") {
      clientPatch = { displayName: "Samarth S.", officialScore: 100, isVerified: true };
    }

    let initialProfile = {
      userId: "usr_101",
      displayName: "Samarth",
      role: "learner",
      officialScore: 84,
      isVerified: false,
    };

    let updatedProfile = {};
    let escalationDetected = false;
    let verdict = "";

    if (massDefenseMode === "blind_merge") {
      // Vulnerable: Object.assign or direct model save
      updatedProfile = { ...initialProfile, ...clientPatch };
      if (massPayloadType === "role_escalate" && updatedProfile.role === "administrator") {
        escalationDetected = true;
        verdict =
          "CRITICAL PRIVILEGE ESCALATION (API3:2023): Backend blindly mapped client-controlled 'role' property! Regular learner escalated themselves to administrator!";
      } else if (massPayloadType === "score_tamper") {
        escalationDetected = true;
        verdict =
          "DATA INTEGRITY FAILURE: Client altered officialScore and isVerified properties directly through profile update endpoint!";
      } else {
        verdict = "Profile updated normally.";
      }
    } else {
      // Hardened: Strict Schema Allowlist: only permits 'displayName'
      const ALLOWED_FIELDS = ["displayName"];
      const filteredPatch = {};
      ALLOWED_FIELDS.forEach((f) => {
        if (clientPatch[f] !== undefined) filteredPatch[f] = clientPatch[f];
      });

      updatedProfile = { ...initialProfile, ...filteredPatch };
      escalationDetected = false;
      if (massPayloadType === "benign") {
        verdict = "Schema validation accepted permitted 'displayName' update.";
      } else {
        verdict =
          "DEFENDED: Schema allowlist stripped prohibited fields ('role', 'officialScore', 'isVerified'). User remained role='learner' with officialScore=84.";
      }
    }

    return {
      clientPatch,
      initialProfile,
      updatedProfile,
      escalationDetected,
      verdict,
    };
  }, [massPayloadType, massDefenseMode]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 3: TOKEN VALIDATION & JWT SIGNATURE VERIFICATION DISSECTOR       */
  /* -------------------------------------------------------------------------- */
  const [jwtScenario, setJwtScenario] = useState("alg_none");
  // 'valid_token' | 'alg_none' | 'key_confusion' | 'expired_token' | 'audience_mismatch'
  const [enforceAlgWhitelist, setEnforceAlgWhitelist] = useState(true);
  const [enforceExpCheck, setEnforceExpCheck] = useState(true);
  const [enforceAudCheck, setEnforceAudCheck] = useState(true);

  const jwtAnalysis = useMemo(() => {
    let header = { alg: "RS256", typ: "JWT", kid: "ps-auth-2026-key1" };
    let payload = {
      sub: "usr_101",
      name: "Samarth",
      role: "learner",
      iss: "https://auth.prepspaces.com",
      aud: "https://api.prepspaces.com",
      iat: 1776200000,
      exp: 1776203600, // +1 hour
    };
    let signatureStatus = "VALID_ASYMMETRIC_SIGNATURE";
    let tokenRejected = false;
    let rejectionReason = "";

    if (jwtScenario === "valid_token") {
      header.alg = "RS256";
    } else if (jwtScenario === "alg_none") {
      header.alg = "none";
      signatureStatus = "UNSIGNED (None Algorithm Attack)";
      if (enforceAlgWhitelist) {
        tokenRejected = true;
        rejectionReason = "REJECTED: Algorithm 'none' is forbidden by strict server algorithm whitelist!";
      }
    } else if (jwtScenario === "key_confusion") {
      header.alg = "HS256";
      signatureStatus = "FORGED_HMAC (Key Confusion Attack using Public RSA Key as Secret)";
      if (enforceAlgWhitelist) {
        tokenRejected = true;
        rejectionReason = "REJECTED: Server expected asymmetric RS256; rejected unexpected symmetric HS256 algorithm.";
      }
    } else if (jwtScenario === "expired_token") {
      payload.exp = 1700000000; // Far in past
      if (enforceExpCheck) {
        tokenRejected = true;
        rejectionReason = "REJECTED: Token expired (exp < current_timestamp). Session must be renewed.";
      }
    } else if (jwtScenario === "audience_mismatch") {
      payload.aud = "https://billing.prepspaces.com";
      if (enforceAudCheck) {
        tokenRejected = true;
        rejectionReason = "REJECTED: Token audience ('billing.prepspaces.com') does not match expected target ('api.prepspaces.com').";
      }
    }

    return {
      header,
      payload,
      signatureStatus,
      tokenRejected,
      rejectionReason,
    };
  }, [jwtScenario, enforceAlgWhitelist, enforceExpCheck, enforceAudCheck]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 4: TOKEN BUCKET RATE LIMITER & ABUSE PREVENTION ENGINE           */
  /* -------------------------------------------------------------------------- */
  const [bucketCapacity] = useState(10);
  const [tokenCount, setTokenCount] = useState(10);
  const [requestHistory, setRequestHistory] = useState([]);

  const sendBurstRequests = (count) => {
    let currentTokens = tokenCount;
    const newLogs = [];

    for (let i = 1; i <= count; i++) {
      if (currentTokens >= 1) {
        currentTokens -= 1;
        newLogs.push({ id: Date.now() + i, status: 200, message: "200 OK — Request Processed" });
      } else {
        newLogs.push({
          id: Date.now() + i,
          status: 429,
          message: "429 Too Many Requests — Rate Limit Exceeded (Retry-After: 5s)",
        });
      }
    }

    setTokenCount(currentTokens);
    setRequestHistory((prev) => [...newLogs, ...prev].slice(0, 12));
  };

  const refillBucket = () => {
    setTokenCount(bucketCapacity);
  };

  /* -------------------------------------------------------------------------- */
  /* KNOWLEDGE ASSESSMENT QUIZ (15.11 - 10 Questions)                           */
  /* -------------------------------------------------------------------------- */
  const quizQuestions = [
    {
      id: 1,
      question: "What does authentication establish?",
      options: [
        "Whether a user owns every resource",
        "The identity associated with a request",
        "Whether an API has rate limits",
        "Whether a database query is safe",
      ],
      correct: 1,
      explanation:
        "Authentication is the process of verifying who or what is making a request. Authorization is the distinct process that determines what that authenticated identity is permitted to do.",
    },
    {
      id: 2,
      question: "What is BOLA (Broken Object-Level Authorization)?",
      options: [
        "A browser cache problem",
        "A missing encryption algorithm",
        "Failure to check access to a specific object",
        "An expired TLS certificate",
      ],
      correct: 2,
      explanation:
        "BOLA (API1:2023) occurs when an endpoint accepts a resource identifier (e.g. /api/reports/4821) without verifying whether the authenticated caller has permission to view or manipulate that specific object.",
    },
    {
      id: 3,
      question: "Why should authorization be checked on every protected request?",
      options: [
        "Frontend navigation always bypasses the server",
        "Any request path may reach a protected operation",
        "Tokens automatically expire on each request",
        "It eliminates the need for authentication",
      ],
      correct: 1,
      explanation:
        "Clients can craft raw HTTP requests bypassing UI buttons and client-side guards. The backend server must independently authenticate and authorize every single operation at the resource boundary.",
    },
    {
      id: 4,
      question: "What is a primary defense against session fixation?",
      options: [
        "Use sequential session IDs",
        "Rotate the session identifier after authentication",
        "Store the session ID in the URL",
        "Disable all session expiration",
      ],
      correct: 1,
      explanation:
        "Session fixation is mitigated by immediately destroying any pre-authentication session identifier and issuing a freshly generated, high-entropy session ID upon successful credential verification.",
    },
    {
      id: 5,
      question: "What does a signed JWT guarantee by itself?",
      options: [
        "Its claims are confidential",
        "The user has administrator permissions",
        "Its signature can be verified for integrity and authenticity if correctly validated",
        "Its token cannot be replayed",
      ],
      correct: 2,
      explanation:
        "A standard signed JWT is Base64URL-encoded (not encrypted); claims are publicly readable. Its cryptographic signature guarantees payload integrity and authentic issuer provenance, provided the server validates the key and algorithm.",
    },
    {
      id: 6,
      question: "Which OWASP API risk concerns unauthorized access to administrative functions?",
      options: [
        "API5:2023 Broken Function Level Authorization",
        "API9:2023 Improper Inventory Management",
        "API4:2023 Unrestricted Resource Consumption",
        "API10:2023 Unsafe Consumption of APIs",
      ],
      correct: 0,
      explanation:
        "API5:2023 Broken Function Level Authorization occurs when access-control policies are improperly configured, allowing unprivileged callers to invoke administrative or privileged actions.",
    },
    {
      id: 7,
      question: "What is the purpose of least privilege?",
      options: [
        "Give every user administrator access",
        "Remove authentication from internal services",
        "Grant only the permissions necessary for the task",
        "Hide API endpoint names",
      ],
      correct: 2,
      explanation:
        "The principle of least privilege dictates that an identity or service should be granted only the minimal permissions strictly required to perform its authorized function.",
    },
    {
      id: 8,
      question: "Which approach is appropriate for restricting editable API fields?",
      options: [
        "Trust every field in the request body",
        "Allowlist permitted fields and enforce server-side policy",
        "Hide sensitive fields in the UI only",
        "Use longer resource IDs",
      ],
      correct: 1,
      explanation:
        "To prevent mass assignment (Broken Property-Level Authorization), the server must use an explicit allowlist schema of modifiable fields and reject or strip client-supplied privilege fields like role or isAdmin.",
    },
    {
      id: 9,
      question: "Why are rate limits important?",
      options: [
        "They encrypt API responses",
        "They replace authorization",
        "They help control abuse and resource consumption",
        "They guarantee every request is legitimate",
      ],
      correct: 2,
      explanation:
        "Rate limiting protects APIs against credential stuffing, brute-force guessing, denial-of-service, and resource exhaustion by capping request volume per user, client key, or IP.",
    },
    {
      id: 10,
      question: "What is a safe way to test object-level authorization?",
      options: [
        "Use another person's live account",
        "Test with two controlled accounts in an authorized environment",
        "Guess production users' identifiers",
        "Disable production authorization temporarily",
      ],
      correct: 1,
      explanation:
        "Authorization testing must be conducted using two separate test accounts that you own in an authorized lab environment, verifying that Account A cannot access Account B's objects.",
    },
  ];

  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const handleSelectAnswer = (qId, optionIdx) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const quizScore = useMemo(() => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correct) score++;
    });
    return score;
  }, [quizAnswers]);

  /* -------------------------------------------------------------------------- */
  /* LAB WORKSHEET GENERATOR STATE (15.10)                                      */
  /* -------------------------------------------------------------------------- */
  const [labTarget, setLabTarget] = useState("Prepspaces Candidate Evaluation API");
  const [labFinding, setLabFinding] = useState("BOLA on GET /api/v1/interviews/:id allows horizontal access across learners");
  const [labSeverity, setLabSeverity] = useState("High");
  const [labEvidence, setLabEvidence] = useState(
    "Authenticated as User A (usr_101), requested GET /api/v1/interviews/7710 (owned by User B). API returned 200 OK with User B's private score and notes."
  );
  const [labRemediation, setLabRemediation] = useState(
    "Added ownership predicate in SQL query: WHERE id = $1 AND (user_id = $2 OR role = 'admin'). Verified retest returns 403 Forbidden."
  );
  const [reportCopied, setReportCopied] = useState(false);

  const copyLabReport = () => {
    const reportText = `=====================================================
PREPSPACES API SECURITY ASSESSMENT LAB REPORT
=====================================================
Application / Target: ${labTarget}
Security Finding:     ${labFinding}
Preliminary Severity: ${labSeverity}

EVIDENCE & REPRODUCIBILITY:
${labEvidence}

REMEDIATION & RETEST EVIDENCE:
${labRemediation}

Standard: OWASP API Security Top 10: 2023 (API1 / API3 / API5)
Generated: ${new Date().toISOString()}
=====================================================`;
    navigator.clipboard.writeText(reportText);
    setReportCopied(true);
    setTimeout(() => setReportCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#0a0f1d] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Breadcrumb & Header */}
      <header className="border-b border-slate-800/80 bg-[#0d1424]/90 backdrop-blur sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => navigate("/learning/cybersecurity")}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition flex items-center text-xs"
              title="Return to Cybersecurity Curriculum"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Course Index
            </button>
            <div className="h-4 w-px bg-slate-700" />
            <div className="flex items-center space-x-2 text-xs">
              <span className="text-cyan-400 font-semibold tracking-wider uppercase">Module 15</span>
              <span className="text-slate-500">/</span>
              <span className="text-slate-300 truncate max-w-[280px] sm:max-w-md">
                Authentication Flaws, Access Control, Session Security & API Security
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="border-b border-slate-800 bg-gradient-to-b from-[#0e172a] to-[#0a0f1d] px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-mono">
                <Lock className="w-3.5 h-3.5" />
                <span>OWASP API Security Top 10 · NIST SP 800-63B · RFC 9700</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
                Authentication Flaws, Access Control, Session Security & API Security
              </h1>
              <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
                Deconstruct the security boundary separating verified identity from resource
                permissions. Master Broken Object-Level Authorization (BOLA), mass assignment
                mitigation, session rotation lifecycles, cryptographic JWT validation, token bucket
                rate limiting, and OAuth 2.0 PKCE defenses.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 self-start md:self-auto min-w-[280px]">
              <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-3">
                <div className="text-xs text-slate-400">Primary Standard</div>
                <div className="text-sm font-bold text-cyan-400">OWASP API: 2023</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-3">
                <div className="text-xs text-slate-400">Core Lab Tasks</div>
                <div className="text-sm font-bold text-emerald-400">6 Assessment Tasks</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-3 col-span-2 sm:col-span-1">
                <div className="text-xs text-slate-400">Interactive Sandboxes</div>
                <div className="text-sm font-bold text-amber-400">4 Wire Engines</div>
              </div>
            </div>
          </div>

          {/* Quick Nav Anchor Bar */}
          <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-slate-800/80 pt-4">
            <button
              onClick={() => setActiveTab("theory")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition flex items-center space-x-1.5 ${
                activeTab === "theory"
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20"
                  : "bg-slate-800/70 text-slate-300 hover:bg-slate-700"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Theory & Architecture</span>
            </button>
            <button
              onClick={() => setActiveTab("bola-sim")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition flex items-center space-x-1.5 ${
                activeTab === "bola-sim"
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20"
                  : "bg-slate-800/70 text-slate-300 hover:bg-slate-700"
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Simulator 1: BOLA / IDOR Engine</span>
            </button>
            <button
              onClick={() => setActiveTab("mass-sim")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition flex items-center space-x-1.5 ${
                activeTab === "mass-sim"
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20"
                  : "bg-slate-800/70 text-slate-300 hover:bg-slate-700"
              }`}
            >
              <UserCog className="w-3.5 h-3.5" />
              <span>Simulator 2: Mass Assignment Sandbox</span>
            </button>
            <button
              onClick={() => setActiveTab("jwt-sim")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition flex items-center space-x-1.5 ${
                activeTab === "jwt-sim"
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20"
                  : "bg-slate-800/70 text-slate-300 hover:bg-slate-700"
              }`}
            >
              <Key className="w-3.5 h-3.5" />
              <span>Simulator 3: JWT Signature Dissector</span>
            </button>
            <button
              onClick={() => setActiveTab("rate-sim")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition flex items-center space-x-1.5 ${
                activeTab === "rate-sim"
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20"
                  : "bg-slate-800/70 text-slate-300 hover:bg-slate-700"
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Simulator 4: Token Bucket Rate Limiter</span>
            </button>
            <button
              onClick={() => setActiveTab("quiz")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition flex items-center space-x-1.5 ${
                activeTab === "quiz"
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20"
                  : "bg-slate-800/70 text-slate-300 hover:bg-slate-700"
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Quiz ({quizSubmitted ? `${quizScore}/10` : "10 Qs"})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Column: Topics Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 sticky top-20 space-y-4">
            <h3 className="text-xs font-bold text-slate-400 tracking-wider uppercase flex items-center justify-between">
              <span>Curriculum Navigator</span>
              <span className="text-cyan-400 font-mono">15 / 24</span>
            </h3>

            <div className="space-y-1">
              {[
                { id: 1, title: "15.1 Module Overview & Objectives" },
                { id: 2, title: "15.2 AuthN vs AuthZ vs Sessions" },
                { id: 3, title: "15.3 Authentication Flaws & ATO" },
                { id: 4, title: "15.4 Session Lifecycle & Cookies" },
                { id: 5, title: "15.5 Access Control Models (RBAC/ABAC)" },
                { id: 6, title: "15.6 Common Access Flaws (BOLA/IDOR)" },
                { id: 7, title: "15.7 OWASP API Security Top 10" },
                { id: 8, title: "15.8 Token Security & JWT Verification" },
                { id: 9, title: "15.9 Secure API Design & Rate Limits" },
                { id: 10, title: "15.10 Practical Lab & Reporting" },
                { id: 11, title: "15.11 Knowledge Assessment" },
                { id: 12, title: "15.12 Official References" },
                { id: 13, title: "15.13 Key Engineering Takeaways" },
              ].map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => {
                    setSelectedTopic(topic.id);
                    setActiveTab("theory");
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs transition flex items-center justify-between ${
                    selectedTopic === topic.id
                      ? "bg-cyan-500/15 text-cyan-300 font-semibold border-l-2 border-cyan-400"
                      : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                  }`}
                >
                  <span className="truncate">{topic.title}</span>
                  {selectedTopic === topic.id && (
                    <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 ml-1" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right 3 Columns */}
        <div className="lg:col-span-3 space-y-8">
          {/* TAB: THEORY & ARCHITECTURE */}
          {activeTab === "theory" && (
            <div className="space-y-10">
              {/* 15.1 Overview */}
              <section id="section-1" className="space-y-4">
                <div className="flex items-center space-x-2 text-cyan-400 text-sm font-semibold tracking-wide">
                  <ShieldCheck className="w-4 h-4" />
                  <span>15.1 MODULE OVERVIEW</span>
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Authentication Flaws, Access Control, Session Security & API Security
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Authentication establishes who or what is making a request. Access control
                  determines which actions and resources that identity is allowed to use. Session
                  security protects the continuity of an authenticated interaction. API security
                  ensures requests to endpoints are validated, authenticated, authorized, rate-limited,
                  and audited safely.
                </p>

                {/* Objectives */}
                <div className="bg-cyan-950/20 border border-cyan-800/40 rounded-xl p-5 space-y-3">
                  <h4 className="text-sm font-bold text-cyan-300 flex items-center space-x-2">
                    <Target className="w-4 h-4 text-cyan-400" />
                    <span>Learning Objectives</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    <div className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Distinguish authentication, authorization, identity, and session management.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Recognize authentication failures, credential stuffing, and ATO risks.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Implement secure session creation, rotation, timeouts, and revocation.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Explain RBAC, ABAC, ReBAC, and least-privilege deny-by-default rules.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Identify Broken Object-Level (BOLA), Function-Level, and Property-Level flaws.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Validate JWT signatures, prevent alg:none, and manage OAuth 2.0 PKCE.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Apply token bucket rate limiting and prevent resource consumption abuse.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Audit local APIs using controlled test accounts and generate remediation reports.</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* 15.2 Authentication vs Authorization vs Sessions */}
              <section id="section-2" className="space-y-6 pt-6 border-t border-slate-800">
                <div className="flex items-center space-x-2 text-cyan-400 text-sm font-semibold tracking-wide">
                  <Workflow className="w-4 h-4" />
                  <span>15.2 AUTHENTICATION, AUTHORIZATION & SESSIONS</span>
                </div>
                <h2 className="text-xl font-bold text-white">
                  The 4-Step Security Verification Pipeline
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs text-center">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                    <div className="text-cyan-400 font-bold font-mono">1. Authentication</div>
                    <div className="text-white font-semibold">Who are you?</div>
                    <p className="text-slate-400 text-[11px] mt-1">
                      Verifies identity via Argon2id hashed passwords, Passkeys (FIDO2), or mTLS.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                    <div className="text-amber-400 font-bold font-mono">2. Session Validation</div>
                    <div className="text-white font-semibold">Is credential valid?</div>
                    <p className="text-slate-400 text-[11px] mt-1">
                      Validates session state in Redis or verifies JWT cryptographic signature and exp.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                    <div className="text-emerald-400 font-bold font-mono">3. Authorization</div>
                    <div className="text-white font-semibold">What can you do?</div>
                    <p className="text-slate-400 text-[11px] mt-1">
                      Enforces resource ownership (BOLA), operation permissions (RBAC), and tenant boundaries.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                    <div className="text-purple-400 font-bold font-mono">4. Audit & Monitor</div>
                    <div className="text-white font-semibold">Can it be traced?</div>
                    <p className="text-slate-400 text-[11px] mt-1">
                      Records tamper-evident security logs without leaking passwords or bearer tokens.
                    </p>
                  </div>
                </div>

                <div className="bg-amber-950/20 border border-amber-800/40 rounded-xl p-4 text-xs text-amber-200/90 leading-relaxed">
                  <strong className="text-amber-300">The Access Control Axiom:</strong> Authentication
                  establishes identity; authorization enforces boundaries. A valid session or bearer
                  token does not grant unrestricted access to every API route or record. Every protected
                  operation must verify resource ownership and role permissions independently.
                </div>
              </section>

              {/* 15.3 Authentication Flaws & ATO */}
              <section id="section-3" className="space-y-6 pt-6 border-t border-slate-800">
                <div className="flex items-center space-x-2 text-cyan-400 text-sm font-semibold tracking-wide">
                  <Lock className="w-4 h-4" />
                  <span>15.3 AUTHENTICATION FLAWS & ACCOUNT TAKEOVER (ATO)</span>
                </div>
                <h2 className="text-xl font-bold text-white">
                  Password Storage, Credential Stuffing & Throttling
                </h2>
                <div className="overflow-x-auto border border-slate-800 rounded-xl">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-900/90 text-slate-300 uppercase font-mono border-b border-slate-800">
                      <tr>
                        <th className="p-3">Vulnerability</th>
                        <th className="p-3">Threat & Impact</th>
                        <th className="p-3">Defensive Engineering Practice</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-slate-300">
                      <tr className="hover:bg-slate-900/40">
                        <td className="p-3 font-bold text-cyan-400">Weak Password Storage</td>
                        <td className="p-3">Plaintext or fast hashes (MD5, SHA256) cracked in seconds on GPUs.</td>
                        <td className="p-3">Argon2id (m=64MB, t=3, p=4) or bcrypt (cost &ge; 12) with per-user CSPRNG salt.</td>
                      </tr>
                      <tr className="hover:bg-slate-900/40">
                        <td className="p-3 font-bold text-cyan-400">Credential Stuffing</td>
                        <td className="p-3">Automated bots replay credentials leaked from external breaches.</td>
                        <td className="p-3">HaveIBeenPwned API check, device fingerprinting, and CAPTCHA/MFA challenges.</td>
                      </tr>
                      <tr className="hover:bg-slate-900/40">
                        <td className="p-3 font-bold text-cyan-400">Account Enumeration</td>
                        <td className="p-3">Different error messages or response times reveal registered emails.</td>
                        <td className="p-3">Uniform responses: &quot;If account exists, an email has been sent.&quot; Equalized timing.</td>
                      </tr>
                      <tr className="hover:bg-slate-900/40">
                        <td className="p-3 font-bold text-cyan-400">Missing MFA</td>
                        <td className="p-3">Single compromised password allows full unauthorized account takeover.</td>
                        <td className="p-3">Require FIDO2 / WebAuthn passkeys or TOTP (RFC 6238) on sensitive accounts.</td>
                      </tr>
                      <tr className="hover:bg-slate-900/40">
                        <td className="p-3 font-bold text-cyan-400">Insecure Password Reset</td>
                        <td className="p-3">Predictable tokens or long-lived reset links leaked in referrer logs.</td>
                        <td className="p-3">CSPRNG 256-bit token, single-use, 15-minute expiry, invalidate on password change.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 15.4 Session Lifecycle & Cookies */}
              <section id="section-4" className="space-y-6 pt-6 border-t border-slate-800">
                <div className="flex items-center space-x-2 text-cyan-400 text-sm font-semibold tracking-wide">
                  <Cookie className="w-4 h-4" />
                  <span>15.4 SESSION SECURITY & COOKIE INVARIANTS</span>
                </div>
                <h2 className="text-xl font-bold text-white">
                  Session Fixation Defense, Invalidation & Cookie Flags
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
                    <h4 className="font-bold text-cyan-300">Session Fixation Attack & Mitigation</h4>
                    <p className="text-slate-300 leading-relaxed">
                      If an application preserves the same session ID across login, an attacker who
                      forces a known session ID onto the victim inherits the authenticated state.
                    </p>
                    <div className="bg-slate-950 p-2.5 rounded font-mono text-[11px] text-emerald-300 border border-slate-800">
                      // Regenerate session ID immediately upon successful login<br />
                      req.session.regenerate((err) =&gt; &#123; req.session.userId = user.id; &#125;);
                    </div>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
                    <h4 className="font-bold text-cyan-300">Complete Server-Side Logout</h4>
                    <p className="text-slate-300 leading-relaxed">
                      Clearing a browser cookie is insufficient. If the backend fails to delete the
                      session record from Redis or the database, the token remains replayable.
                    </p>
                    <div className="bg-slate-950 p-2.5 rounded font-mono text-[11px] text-emerald-300 border border-slate-800">
                      // Invalidate backend session record upon logout<br />
                      await redis.del(`sess:$&#123;sessionId&#125;`);<br />
                      res.clearCookie(&quot;__Host-SessionID&quot;);
                    </div>
                  </div>
                </div>
              </section>

              {/* 15.5 Access Control Models */}
              <section id="section-5" className="space-y-6 pt-6 border-t border-slate-800">
                <div className="flex items-center space-x-2 text-cyan-400 text-sm font-semibold tracking-wide">
                  <Users className="w-4 h-4" />
                  <span>15.5 ACCESS CONTROL MODELS & AUTHORIZATION DESIGN</span>
                </div>
                <h2 className="text-xl font-bold text-white">
                  RBAC vs ABAC & Deny-by-Default Policy
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Access control evaluates: <code className="font-mono text-cyan-300">Decision = f(Identity, Action, Resource, Context)</code>.
                </p>

                {/* Prepspaces RBAC Matrix */}
                <div className="overflow-x-auto border border-slate-800 rounded-xl">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-900/90 text-slate-300 uppercase font-mono border-b border-slate-800">
                      <tr>
                        <th className="p-3">Operation / API Route</th>
                        <th className="p-3">Learner Role</th>
                        <th className="p-3">Recruiter Role</th>
                        <th className="p-3">Administrator Role</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-slate-300">
                      <tr className="hover:bg-slate-900/40">
                        <td className="p-3 font-mono font-bold text-slate-200">POST /api/interviews/start</td>
                        <td className="p-3 text-emerald-400 font-bold">Allow</td>
                        <td className="p-3 text-slate-400">Deny (Default)</td>
                        <td className="p-3 text-emerald-400 font-bold">Allow</td>
                      </tr>
                      <tr className="hover:bg-slate-900/40">
                        <td className="p-3 font-mono font-bold text-slate-200">GET /api/interviews/:id (Own)</td>
                        <td className="p-3 text-emerald-400 font-bold">Allow</td>
                        <td className="p-3 text-slate-400">N/A</td>
                        <td className="p-3 text-emerald-400 font-bold">Allow</td>
                      </tr>
                      <tr className="hover:bg-slate-900/40">
                        <td className="p-3 font-mono font-bold text-slate-200">GET /api/interviews/:id (Foreign)</td>
                        <td className="p-3 text-rose-400 font-bold">Deny (403)</td>
                        <td className="p-3 text-amber-400">Allow if assigned</td>
                        <td className="p-3 text-emerald-400 font-bold">Allow (Audited)</td>
                      </tr>
                      <tr className="hover:bg-slate-900/40">
                        <td className="p-3 font-mono font-bold text-slate-200">PATCH /api/users/:id/role</td>
                        <td className="p-3 text-rose-400 font-bold">Deny (403)</td>
                        <td className="p-3 text-rose-400 font-bold">Deny (403)</td>
                        <td className="p-3 text-emerald-400 font-bold">Allow</td>
                      </tr>
                      <tr className="hover:bg-slate-900/40">
                        <td className="p-3 font-mono font-bold text-slate-200">POST /api/reports/bulk-export</td>
                        <td className="p-3 text-rose-400 font-bold">Deny (403)</td>
                        <td className="p-3 text-emerald-400 font-bold">Allow (Org scoped)</td>
                        <td className="p-3 text-emerald-400 font-bold">Allow</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 15.7 OWASP API Security Top 10 */}
              <section id="section-7" className="space-y-6 pt-6 border-t border-slate-800">
                <div className="flex items-center space-x-2 text-cyan-400 text-sm font-semibold tracking-wide">
                  <ShieldAlert className="w-4 h-4" />
                  <span>15.7 OWASP API SECURITY TOP 10 (2023 EDITION)</span>
                </div>
                <h2 className="text-xl font-bold text-white">
                  API-Specific Threat Vectors & Defenses
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-slate-900 border border-slate-800 rounded-lg p-3 space-y-1">
                    <div className="font-mono font-bold text-cyan-400">API1:2023 — BOLA</div>
                    <p className="text-slate-300">Broken Object-Level Authorization: Failure to verify caller owns requested object ID.</p>
                  </div>
                  <div className="bg-slate-900 border border-slate-800 rounded-lg p-3 space-y-1">
                    <div className="font-mono font-bold text-cyan-400">API2:2023 — Broken Authentication</div>
                    <p className="text-slate-300">Weak token validation, missing signature checks, credential stuffing, password reuse.</p>
                  </div>
                  <div className="bg-slate-900 border border-slate-800 rounded-lg p-3 space-y-1">
                    <div className="font-mono font-bold text-cyan-400">API3:2023 — Broken Property-Level Auth</div>
                    <p className="text-slate-300">Mass assignment: Users altering unauthorized object fields (role, isAdmin, score).</p>
                  </div>
                  <div className="bg-slate-900 border border-slate-800 rounded-lg p-3 space-y-1">
                    <div className="font-mono font-bold text-cyan-400">API4:2023 — Unrestricted Resource Consumption</div>
                    <p className="text-slate-300">Missing rate limits, unbounded pagination, excessive memory/CPU consumption.</p>
                  </div>
                  <div className="bg-slate-900 border border-slate-800 rounded-lg p-3 space-y-1">
                    <div className="font-mono font-bold text-cyan-400">API5:2023 — Broken Function-Level Auth</div>
                    <p className="text-slate-300">Unprivileged users invoking administrative routes (/api/admin/users).</p>
                  </div>
                  <div className="bg-slate-900 border border-slate-800 rounded-lg p-3 space-y-1">
                    <div className="font-mono font-bold text-cyan-400">API7:2023 — Server-Side Request Forgery</div>
                    <p className="text-slate-300">Backend coerced into requesting internal cloud metadata (169.254.169.254).</p>
                  </div>
                </div>
              </section>

              {/* 15.10 Practical Lab Workspace */}
              <section id="section-10" className="space-y-6 pt-6 border-t border-slate-800">
                <div className="flex items-center space-x-2 text-cyan-400 text-sm font-semibold tracking-wide">
                  <TerminalSquare className="w-4 h-4" />
                  <span>15.10 PRACTICAL LAB DELIVERABLE</span>
                </div>
                <h2 className="text-xl font-bold text-white">
                  API Security Assessment Worksheet & Reporting
                </h2>
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center space-x-2">
                      <FileSpreadsheet className="w-5 h-5 text-cyan-400" />
                      <h4 className="text-sm font-bold text-white">API Security Finding Report Generator</h4>
                    </div>
                    <button
                      onClick={copyLabReport}
                      className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center space-x-1.5 transition"
                    >
                      {reportCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      <span>{reportCopied ? "Report Copied!" : "Copy Assessment Report"}</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                    <div>
                      <label className="text-slate-400 block mb-1 font-semibold">Application / Target</label>
                      <input
                        type="text"
                        value={labTarget}
                        onChange={(e) => setLabTarget(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded px-2.5 py-1.5 text-slate-200 font-mono"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-1 font-semibold">Security Finding</label>
                      <input
                        type="text"
                        value={labFinding}
                        onChange={(e) => setLabFinding(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded px-2.5 py-1.5 text-slate-200 font-mono"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-1 font-semibold">Preliminary Severity</label>
                      <select
                        value={labSeverity}
                        onChange={(e) => setLabSeverity(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded px-2.5 py-1.5 text-slate-200"
                      >
                        <option>Informational</option>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                        <option>Critical</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="text-slate-400 block mb-1 font-semibold">Evidence & Reproducibility</label>
                      <textarea
                        rows={3}
                        value={labEvidence}
                        onChange={(e) => setLabEvidence(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-slate-200 font-mono text-[11px]"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-1 font-semibold">Remediation & Retest Evidence</label>
                      <textarea
                        rows={3}
                        value={labRemediation}
                        onChange={(e) => setLabRemediation(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-slate-200 font-mono text-[11px]"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* 15.12 Official References */}
              <section id="section-12" className="space-y-4 pt-6 border-t border-slate-800">
                <div className="flex items-center space-x-2 text-cyan-400 text-sm font-semibold tracking-wide">
                  <BookOpen className="w-4 h-4" />
                  <span>15.12 OFFICIAL REFERENCES & FURTHER READING</span>
                </div>
                <h2 className="text-xl font-bold text-white">
                  Standards & Authoritative Technical Documentation
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <a
                    href="https://api-security.owasp.org/editions/2023/en/0x11-t10/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition block space-y-1 group"
                  >
                    <div className="font-bold text-white group-hover:text-cyan-300 flex items-center justify-between">
                      <span>OWASP API Security Top 10: 2023</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-slate-400 text-[11px]">
                      The definitive framework for modern API threats: BOLA, Broken Auth, and SSRF.
                    </p>
                  </a>
                  <a
                    href="https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition block space-y-1 group"
                  >
                    <div className="font-bold text-white group-hover:text-cyan-300 flex items-center justify-between">
                      <span>OWASP Authorization Cheat Sheet</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-slate-400 text-[11px]">
                      Architectural patterns for deny-by-default access control and BOLA defense.
                    </p>
                  </a>
                  <a
                    href="https://pages.nist.gov/800-63-4/sp800-63b.html"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition block space-y-1 group"
                  >
                    <div className="font-bold text-white group-hover:text-cyan-300 flex items-center justify-between">
                      <span>NIST SP 800-63B Digital Identity</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-slate-400 text-[11px]">
                      Authentication assurance levels (AAL), authenticators, and password policies.
                    </p>
                  </a>
                  <a
                    href="https://www.rfc-editor.org/rfc/rfc9700.html"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition block space-y-1 group"
                  >
                    <div className="font-bold text-white group-hover:text-cyan-300 flex items-center justify-between">
                      <span>RFC 9700 — OAuth 2.0 Security BCP</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-slate-400 text-[11px]">
                      Authorization code flow with PKCE, token replay defenses, and sender-constraining.
                    </p>
                  </a>
                </div>
              </section>

              {/* 15.13 Key Takeaways */}
              <section id="section-13" className="space-y-4 pt-6 border-t border-slate-800">
                <div className="flex items-center space-x-2 text-cyan-400 text-sm font-semibold tracking-wide">
                  <Award className="w-4 h-4" />
                  <span>15.13 KEY ENGINEERING TAKEAWAYS</span>
                </div>
                <h2 className="text-xl font-bold text-white">Summary of Core Principles</h2>
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-2.5 text-xs text-slate-300 leading-relaxed">
                  <p>
                    1. <strong>Identity Is Not Authorization:</strong> A valid authentication credential
                    or JWT does not grant unrestricted access. Authorization must check whether that
                    identity owns or is permitted to manipulate the exact target resource.
                  </p>
                  <p>
                    2. <strong>BOLA Is #1 API Vulnerability:</strong> Never query database records by
                    client-supplied object IDs alone without joining or checking the authenticated user ID.
                  </p>
                  <p>
                    3. <strong>Prevent Mass Assignment:</strong> Enforce strict request body allowlists.
                    Never blind-merge client JSON into database models.
                  </p>
                  <p>
                    4. <strong>Cryptographic Session Lifecycles:</strong> Rotate session IDs immediately
                    upon login to neutralize session fixation; destroy session records server-side upon logout.
                  </p>
                  <p>
                    5. <strong>JWT Invariants:</strong> Whitelist permitted algorithms (RS256); reject
                    <code className="font-mono text-cyan-300">alg: none</code>; verify <code className="font-mono text-cyan-300">exp</code>, <code className="font-mono text-cyan-300">aud</code>, and <code className="font-mono text-cyan-300">iss</code> claims.
                  </p>
                </div>
              </section>
            </div>
          )}

          {/* TAB: SIMULATOR 1 - BOLA / IDOR ENGINE */}
          {activeTab === "bola-sim" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                    <ShieldAlert className="w-5 h-5 text-cyan-400" />
                    <span>Simulator 1: BOLA / IDOR Exploitation & Tenant Isolation Engine</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Test horizontal privilege escalation across tenant accounts and enforce ownership-scoped query filters.
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      setBolaDefenseMode(bolaDefenseMode === "vulnerable" ? "hardened" : "vulnerable")
                    }
                    className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition ${
                      bolaDefenseMode === "hardened"
                        ? "bg-emerald-950/60 border-emerald-500 text-emerald-300"
                        : "bg-rose-950/60 border-rose-500 text-rose-300 animate-pulse"
                    }`}
                  >
                    Backend Query: {bolaDefenseMode === "hardened" ? "SCOPED (WHERE user_id = $2)" : "VULNERABLE (WHERE id = $1)"}
                  </button>
                </div>
              </div>

              {/* Selector Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
                  <label className="text-slate-300 font-bold block">1. Authenticated Session (Caller Identity)</label>
                  <select
                    value={activeUserRole}
                    onChange={(e) => setActiveUserRole(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded px-2.5 py-1.5 text-slate-200"
                  >
                    <option value="user_a">User A (Samarth — ID: usr_101) [Learner]</option>
                    <option value="user_b">User B (Alice — ID: usr_202) [Learner]</option>
                    <option value="admin">Administrator (Marcus — ID: usr_999) [Admin]</option>
                  </select>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
                  <label className="text-slate-300 font-bold block">2. Requested Report Resource Identifier</label>
                  <select
                    value={requestedReportId}
                    onChange={(e) => setRequestedReportId(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded px-2.5 py-1.5 text-slate-200"
                  >
                    <option value="4821">Report #4821 (Owned by User A: Samarth)</option>
                    <option value="7710">Report #7710 (Owned by User B: Alice)</option>
                  </select>
                </div>
              </div>

              {/* Request / Response Wire */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2">
                  <div className="text-cyan-400 font-bold border-b border-slate-800 pb-1">Client HTTP Request</div>
                  <div className="text-emerald-400">GET /api/v1/interviews/{requestedReportId} HTTP/1.1</div>
                  <div className="text-slate-400">Host: api.prepspaces.com</div>
                  <div className="text-slate-400">Authorization: Bearer session_token_{bolaSimulation.currentUser.id}</div>
                  <div className="text-slate-500 pt-2 border-t border-slate-800">
                    // Database Query Executed on Server:<br />
                    {bolaDefenseMode === "vulnerable"
                      ? `SELECT * FROM reports WHERE id = '${requestedReportId}'`
                      : `SELECT * FROM reports WHERE id = '${requestedReportId}' AND (owner_id = '${bolaSimulation.currentUser.id}' OR role = 'admin')`}
                  </div>
                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2">
                  <div className="text-amber-400 font-bold border-b border-slate-800 pb-1">Server Response</div>
                  <div
                    className={`font-bold ${
                      bolaSimulation.statusCode.startsWith("2") ? "text-emerald-400" : "text-rose-400"
                    }`}
                  >
                    HTTP/1.1 {bolaSimulation.statusCode}
                  </div>
                  <pre className="text-slate-300 text-[11px] overflow-x-auto">
                    {JSON.stringify(bolaSimulation.responseBody, null, 2)}
                  </pre>
                </div>
              </div>

              {/* Diagnosis Verdict */}
              <div
                className={`p-5 rounded-xl border text-xs space-y-3 ${
                  bolaSimulation.diagnosis.includes("CRITICAL BOLA")
                    ? "bg-rose-950/30 border-rose-800/80 text-rose-200"
                    : "bg-emerald-950/30 border-emerald-800/80 text-emerald-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm flex items-center space-x-2">
                    {bolaSimulation.diagnosis.includes("CRITICAL BOLA") ? (
                      <Flame className="w-5 h-5 text-rose-400 animate-pulse" />
                    ) : (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    )}
                    <span>
                      {bolaSimulation.diagnosis.includes("CRITICAL BOLA")
                        ? "BOLA VULNERABILITY EXPLOITED (API1:2023)"
                        : "ACCESS CONTROL ENFORCED SAFELY"}
                    </span>
                  </span>
                </div>
                <p className="leading-relaxed text-slate-200">{bolaSimulation.diagnosis}</p>
              </div>
            </div>
          )}

          {/* TAB: SIMULATOR 2 - MASS ASSIGNMENT SANDBOX */}
          {activeTab === "mass-sim" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                    <UserCog className="w-5 h-5 text-cyan-400" />
                    <span>Simulator 2: Mass Assignment & Property-Level Auth Sandbox</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Demonstrates how blind object updates enable privilege escalation, and how schema allowlists protect sensitive model properties.
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      setMassDefenseMode(massDefenseMode === "blind_merge" ? "schema_filter" : "blind_merge")
                    }
                    className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition ${
                      massDefenseMode === "schema_filter"
                        ? "bg-emerald-950/60 border-emerald-500 text-emerald-300"
                        : "bg-rose-950/60 border-rose-500 text-rose-300 animate-pulse"
                    }`}
                  >
                    Backend Mapping: {massDefenseMode === "schema_filter" ? "STRICT SCHEMA ALLOWLIST" : "VULNERABLE BLIND MERGE"}
                  </button>
                </div>
              </div>

              {/* Selector */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <button
                  onClick={() => setMassPayloadType("benign")}
                  className={`p-3 rounded-lg border text-left transition ${
                    massPayloadType === "benign"
                      ? "bg-cyan-950/60 border-cyan-500 text-cyan-300 font-bold"
                      : "bg-slate-900 border-slate-800 text-slate-400"
                  }`}
                >
                  1. Normal Profile Update (displayName)
                </button>
                <button
                  onClick={() => setMassPayloadType("role_escalate")}
                  className={`p-3 rounded-lg border text-left transition ${
                    massPayloadType === "role_escalate"
                      ? "bg-cyan-950/60 border-cyan-500 text-cyan-300 font-bold"
                      : "bg-slate-900 border-slate-800 text-slate-400"
                  }`}
                >
                  2. Role Escalation Attack (role: &quot;administrator&quot;)
                </button>
                <button
                  onClick={() => setMassPayloadType("score_tamper")}
                  className={`p-3 rounded-lg border text-left transition ${
                    massPayloadType === "score_tamper"
                      ? "bg-cyan-950/60 border-cyan-500 text-cyan-300 font-bold"
                      : "bg-slate-900 border-slate-800 text-slate-400"
                  }`}
                >
                  3. Score Tampering Attack (officialScore: 100)
                </button>
              </div>

              {/* Diff View */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2">
                  <div className="text-cyan-400 font-bold border-b border-slate-800 pb-1">Client Injected PATCH JSON</div>
                  <pre className="text-slate-300 text-[11px] overflow-x-auto">
                    {JSON.stringify(massSimulation.clientPatch, null, 2)}
                  </pre>
                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2">
                  <div className="text-amber-400 font-bold border-b border-slate-800 pb-1">Resulting User Record in DB</div>
                  <pre className="text-slate-300 text-[11px] overflow-x-auto">
                    {JSON.stringify(massSimulation.updatedProfile, null, 2)}
                  </pre>
                </div>
              </div>

              {/* Verdict */}
              <div
                className={`p-5 rounded-xl border text-xs space-y-3 ${
                  massSimulation.escalationDetected
                    ? "bg-rose-950/30 border-rose-800/80 text-rose-200"
                    : "bg-emerald-950/30 border-emerald-800/80 text-emerald-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm flex items-center space-x-2">
                    {massSimulation.escalationDetected ? (
                      <Flame className="w-5 h-5 text-rose-400 animate-pulse" />
                    ) : (
                      <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    )}
                    <span>
                      {massSimulation.escalationDetected
                        ? "CRITICAL PRIVILEGE ESCALATION EXPLOITED"
                        : "PROPERTY-LEVEL AUTHORIZATION ENFORCED"}
                    </span>
                  </span>
                </div>
                <p className="leading-relaxed text-slate-200">{massSimulation.verdict}</p>
              </div>
            </div>
          )}

          {/* TAB: SIMULATOR 3 - JWT SIGNATURE DISSECTOR */}
          {activeTab === "jwt-sim" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                    <Key className="w-5 h-5 text-cyan-400" />
                    <span>Simulator 3: Token Validation & JWT Signature Dissector</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Inspect cryptographic token structures, test alg:none and key-confusion attacks, and enforce claim validation.
                  </p>
                </div>
              </div>

              {/* Scenarios */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
                <button
                  onClick={() => setJwtScenario("valid_token")}
                  className={`p-2.5 rounded-lg border text-left transition ${
                    jwtScenario === "valid_token"
                      ? "bg-cyan-950/60 border-cyan-500 text-cyan-300 font-bold"
                      : "bg-slate-900 border-slate-800 text-slate-400"
                  }`}
                >
                  1. Valid RS256 Token
                </button>
                <button
                  onClick={() => setJwtScenario("alg_none")}
                  className={`p-2.5 rounded-lg border text-left transition ${
                    jwtScenario === "alg_none"
                      ? "bg-cyan-950/60 border-cyan-500 text-cyan-300 font-bold"
                      : "bg-slate-900 border-slate-800 text-slate-400"
                  }`}
                >
                  2. alg: &quot;none&quot; Exploit
                </button>
                <button
                  onClick={() => setJwtScenario("key_confusion")}
                  className={`p-2.5 rounded-lg border text-left transition ${
                    jwtScenario === "key_confusion"
                      ? "bg-cyan-950/60 border-cyan-500 text-cyan-300 font-bold"
                      : "bg-slate-900 border-slate-800 text-slate-400"
                  }`}
                >
                  3. Key Confusion (HS256)
                </button>
                <button
                  onClick={() => setJwtScenario("expired_token")}
                  className={`p-2.5 rounded-lg border text-left transition ${
                    jwtScenario === "expired_token"
                      ? "bg-cyan-950/60 border-cyan-500 text-cyan-300 font-bold"
                      : "bg-slate-900 border-slate-800 text-slate-400"
                  }`}
                >
                  4. Expired Token
                </button>
                <button
                  onClick={() => setJwtScenario("audience_mismatch")}
                  className={`p-2.5 rounded-lg border text-left transition ${
                    jwtScenario === "audience_mismatch"
                      ? "bg-cyan-950/60 border-cyan-500 text-cyan-300 font-bold"
                      : "bg-slate-900 border-slate-800 text-slate-400"
                  }`}
                >
                  5. Audience Mismatch
                </button>
              </div>

              {/* Token Dissection Panels */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-1">
                  <div className="text-cyan-400 font-bold border-b border-slate-800 pb-1">1. Decoded Header</div>
                  <pre className="text-slate-300 text-[11px] overflow-x-auto">
                    {JSON.stringify(jwtAnalysis.header, null, 2)}
                  </pre>
                </div>
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-1">
                  <div className="text-amber-400 font-bold border-b border-slate-800 pb-1">2. Decoded Claims Payload</div>
                  <pre className="text-slate-300 text-[11px] overflow-x-auto">
                    {JSON.stringify(jwtAnalysis.payload, null, 2)}
                  </pre>
                </div>
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-1">
                  <div className="text-purple-400 font-bold border-b border-slate-800 pb-1">3. Cryptographic Signature</div>
                  <div className="text-[11px] text-slate-300 break-all pt-2">
                    {jwtAnalysis.signatureStatus}
                  </div>
                </div>
              </div>

              {/* Verification Outcome */}
              <div
                className={`p-5 rounded-xl border text-xs space-y-3 ${
                  jwtAnalysis.tokenRejected
                    ? "bg-rose-950/30 border-rose-800/80 text-rose-200"
                    : "bg-emerald-950/30 border-emerald-800/80 text-emerald-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm flex items-center space-x-2">
                    {jwtAnalysis.tokenRejected ? (
                      <ShieldX className="w-5 h-5 text-rose-400" />
                    ) : (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    )}
                    <span>
                      {jwtAnalysis.tokenRejected ? "TOKEN VERIFICATION FAILED (REJECTED)" : "TOKEN VALIDATED & TRUSTED"}
                    </span>
                  </span>
                </div>
                <p className="leading-relaxed text-slate-200">
                  {jwtAnalysis.tokenRejected
                    ? jwtAnalysis.rejectionReason
                    : "Cryptographic signature matches server public key; algorithm RS256 verified; expiration and audience claims verified successfully."}
                </p>
              </div>
            </div>
          )}

          {/* TAB: SIMULATOR 4 - TOKEN BUCKET RATE LIMITER */}
          {activeTab === "rate-sim" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                    <Activity className="w-5 h-5 text-cyan-400" />
                    <span>Simulator 4: Token Bucket Rate Limiter & Abuse Prevention Engine</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Simulate burst traffic against rate-limited endpoints, observe token depletion, and trigger HTTP 429 backpressure.
                  </p>
                </div>
                <button
                  onClick={refillBucket}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center space-x-1"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Refill Bucket (10)</span>
                </button>
              </div>

              {/* Bucket Visualizer */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4 text-xs">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="text-slate-400 font-semibold">Active Token Bucket Level:</div>
                    <div className="text-2xl font-bold font-mono text-cyan-400">
                      {tokenCount} / {bucketCapacity} Tokens
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => sendBurstRequests(3)}
                      className="px-3 py-2 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-300 font-bold"
                    >
                      Send 3 Requests
                    </button>
                    <button
                      onClick={() => sendBurstRequests(8)}
                      className="px-3 py-2 rounded-lg bg-amber-950 border border-amber-800 text-amber-300 font-bold"
                    >
                      Send 8 Requests (Burst)
                    </button>
                    <button
                      onClick={() => sendBurstRequests(15)}
                      className="px-3 py-2 rounded-lg bg-rose-950 border border-rose-800 text-rose-300 font-bold"
                    >
                      Send 15 Requests (Abuse)
                    </button>
                  </div>
                </div>

                <div className="w-full h-3 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className={`h-full transition-all duration-300 ${
                      tokenCount > 5 ? "bg-emerald-400" : tokenCount > 0 ? "bg-amber-400" : "bg-rose-500"
                    }`}
                    style={{ width: `${(tokenCount / bucketCapacity) * 100}%` }}
                  />
                </div>
              </div>

              {/* Request Log */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 font-mono text-xs space-y-2">
                <div className="text-cyan-400 font-bold border-b border-slate-800 pb-1">Live Request Stream</div>
                {requestHistory.length === 0 ? (
                  <div className="text-slate-500 py-4 text-center">Click a burst button above to send simulated API requests.</div>
                ) : (
                  <div className="space-y-1">
                    {requestHistory.map((item) => (
                      <div
                        key={item.id}
                        className={`p-2 rounded flex items-center justify-between text-[11px] ${
                          item.status === 200
                            ? "bg-emerald-950/40 text-emerald-300 border border-emerald-900/60"
                            : "bg-rose-950/40 text-rose-300 border border-rose-900/60"
                        }`}
                      >
                        <span>{item.message}</span>
                        <span className="text-[10px] text-slate-500">{new Date(item.id).toLocaleTimeString()}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB: KNOWLEDGE ASSESSMENT QUIZ (15.11) */}
          {activeTab === "quiz" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                    <Award className="w-5 h-5 text-cyan-400" />
                    <span>15.11 Authentication, Authorization & API Security Assessment</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    10 scenario-based questions to validate your mastery of BOLA, session lifecycles, JWT validation, and API defense.
                  </p>
                </div>
                {quizSubmitted && (
                  <div className="text-right">
                    <span className="text-xs text-slate-400">Final Score: </span>
                    <span
                      className={`text-base font-bold font-mono ${
                        quizScore >= 8 ? "text-emerald-400" : "text-amber-400"
                      }`}
                    >
                      {quizScore} / 10 ({quizScore * 10}%)
                    </span>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                {quizQuestions.map((q, idx) => {
                  const isAnswered = quizAnswers[q.id] !== undefined;
                  const isCorrect = isAnswered && quizAnswers[q.id] === q.correct;

                  return (
                    <div
                      key={q.id}
                      className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-3 text-xs"
                    >
                      <div className="flex items-start justify-between">
                        <span className="font-bold text-white text-sm">
                          {idx + 1}. {q.question}
                        </span>
                        {quizSubmitted && (
                          <span
                            className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                              isCorrect
                                ? "bg-emerald-950 text-emerald-400 border border-emerald-800"
                                : "bg-rose-950 text-rose-400 border border-rose-800"
                            }`}
                          >
                            {isCorrect ? "Correct" : "Incorrect"}
                          </span>
                        )}
                      </div>

                      <div className="space-y-2">
                        {q.options.map((opt, optIdx) => {
                          const isSelected = quizAnswers[q.id] === optIdx;
                          let btnStyle = "bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-850";

                          if (quizSubmitted) {
                            if (optIdx === q.correct) {
                              btnStyle = "bg-emerald-950/60 border-emerald-500 text-emerald-200 font-bold";
                            } else if (isSelected) {
                              btnStyle = "bg-rose-950/60 border-rose-500 text-rose-200";
                            } else {
                              btnStyle = "bg-slate-950/40 border-slate-900 text-slate-500";
                            }
                          } else if (isSelected) {
                            btnStyle = "bg-cyan-950/60 border-cyan-400 text-cyan-200 font-semibold";
                          }

                          return (
                            <button
                              key={optIdx}
                              disabled={quizSubmitted}
                              onClick={() => handleSelectAnswer(q.id, optIdx)}
                              className={`w-full text-left p-3 rounded-lg border transition flex items-center justify-between ${btnStyle}`}
                            >
                              <span>{opt}</span>
                              {isSelected && <Check className="w-3.5 h-3.5 text-cyan-400" />}
                            </button>
                          );
                        })}
                      </div>

                      {quizSubmitted && (
                        <div className="mt-3 p-3 bg-slate-950 rounded-lg border border-slate-800 text-slate-300 text-[11px] leading-relaxed">
                          <strong className="text-cyan-400">Architectural Rationale: </strong>
                          {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {!quizSubmitted ? (
                <button
                  onClick={() => setQuizSubmitted(true)}
                  disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                  className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition ${
                    Object.keys(quizAnswers).length === quizQuestions.length
                      ? "bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20"
                      : "bg-slate-800 text-slate-500 cursor-not-allowed"
                  }`}
                >
                  Submit Assessment ({Object.keys(quizAnswers).length}/10 Answered)
                </button>
              ) : (
                <button
                  onClick={() => {
                    setQuizSubmitted(false);
                    setQuizAnswers({});
                  }}
                  className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider transition"
                >
                  Retake Assessment
                </button>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Embedded Nova AI Tutor Drawer */}
      <LearningRo
        isOpen={showAiTutor}
        onClose={() => setShowAiTutor(false)}
        topic="Authentication Flaws, Access Control, Session Security, and API Security"
        courseContext="Prepspaces Cybersecurity Master Course - Module 15"
      />
    </div>
  );
}
