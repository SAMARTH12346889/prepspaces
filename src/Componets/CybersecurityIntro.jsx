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
  UserCheck,
  AlertOctagon,
  Key,
  Database,
  Search,
  Filter,
  CheckSquare,
  XCircle,
  Download,
  Info,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* PREP SPACES CYBERSECURITY MASTERCLASS: MODULE 1                            */
/* Introduction to Cybersecurity and Ethical Hacking                          */
/* Academic Foundation: MIT, Stanford, CMU, UC Berkeley, Cambridge, ETH Zurich*/
/* -------------------------------------------------------------------------- */

export default function CybersecurityIntro() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(1);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'interactive-labs' | 'observation-lab' | 'case-study' | 'quiz'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* LAB 1: INTERACTIVE ASSET INVENTORY & CLASSIFICATION BUILDER                */
  /* -------------------------------------------------------------------------- */
  const initialAssets = [
    {
      id: "AST-01",
      name: "Student Interview Reports & Transcripts",
      owner: "Academic Operations",
      classification: "Highly restricted",
      businessPurpose: "Stores confidential evaluation reports, transcripts, and mentor feedback.",
      c: "High",
      i: "High",
      a: "Moderate",
      criticality: "Critical",
      controls: "AES-256 at rest, TLS 1.3, strict object-level server-side ACLs, immutable audit logs.",
    },
    {
      id: "AST-02",
      name: "User Authentication Credentials & Hashes",
      owner: "Identity & Platform Security",
      classification: "Highly restricted",
      businessPurpose: "Validates learner and staff credentials for platform access.",
      c: "High",
      i: "High",
      a: "High",
      criticality: "Critical",
      controls: "Argon2id password hashing, WebAuthn/Passkeys, rate limiting, MFA enforcement.",
    },
    {
      id: "AST-03",
      name: "Student Resumes & CV Documents",
      owner: "Career Services",
      classification: "Confidential",
      businessPurpose: "Job application portfolios uploaded by students.",
      c: "High",
      i: "Moderate",
      a: "Moderate",
      criticality: "High",
      controls: "Pre-signed S3 URLs with 15-minute expiry, malware scanning on upload, bucket ACL private.",
    },
    {
      id: "AST-04",
      name: "Course Video Content & Public Syllabus",
      owner: "Content Engineering",
      classification: "Public",
      businessPurpose: "Publicly visible course catalogues and promotional curriculum outlines.",
      c: "Low",
      i: "Moderate",
      a: "High",
      criticality: "Medium",
      controls: "CDN caching (Cloudflare), WAF, DDoS protection, static bucket hosting.",
    },
    {
      id: "AST-05",
      name: "PostgreSQL Production Database Cluster",
      owner: "Cloud Infrastructure / DBA",
      classification: "Highly restricted",
      businessPurpose: "Core persistence layer for all user, course, and assessment data.",
      c: "High",
      i: "High",
      a: "High",
      criticality: "Critical",
      controls: "Isolated in private VPC subnet, no public IP, encrypted EBS volumes, hourly automated backups.",
    },
    {
      id: "AST-06",
      name: "Stripe Payment Gateway API Keys",
      owner: "Finance & DevOps",
      classification: "Highly restricted",
      businessPurpose: "Processes tuition and certification subscription payments.",
      c: "High",
      i: "High",
      a: "High",
      criticality: "Critical",
      controls: "AWS Secrets Manager / HashiCorp Vault, IAM least privilege, zero hardcoded keys in git.",
    },
    {
      id: "AST-07",
      name: "Internal Staff Slack & Incident Channels",
      owner: "IT Operations",
      classification: "Internal",
      businessPurpose: "Operational coordination and engineering communication.",
      c: "Moderate",
      i: "Moderate",
      a: "Moderate",
      criticality: "Medium",
      controls: "SSO enforcement, MFA required, data retention policy 90 days, audit logs.",
    },
    {
      id: "AST-08",
      name: "Grading & Certification Microservice",
      owner: "Backend Platform Team",
      classification: "Confidential",
      businessPurpose: "Evaluates coding submissions and generates tamper-evident completion certificates.",
      c: "Moderate",
      i: "High",
      a: "Moderate",
      criticality: "High",
      controls: "Cryptographic digital signatures on certificates, server-side grading isolation, sandboxed containers.",
    },
  ];

  const [assetList, setAssetList] = useState(initialAssets);
  const [selectedAsset, setSelectedAsset] = useState(initialAssets[0]);
  const [filterClass, setFilterClass] = useState("All");

  const filteredAssets = useMemo(() => {
    if (filterClass === "All") return assetList;
    return assetList.filter((a) => a.classification === filterClass);
  }, [assetList, filterClass]);

  /* -------------------------------------------------------------------------- */
  /* LAB 2: INTERACTIVE STRIDE THREAT MODELING STUDIO                           */
  /* -------------------------------------------------------------------------- */
  const strideCategories = [
    {
      letter: "S",
      title: "Spoofing",
      concern: "Authenticity & Identity",
      color: "bg-red-50 text-red-700 border-red-200",
      description: "An adversary impersonates a valid learner, mentor, or administrative system.",
      example: "Attacker transmits forged JWT claims or session cookies to access admin endpoints.",
      mitigation: "Cryptographically signed JWTs with short expiry, asymmetric RS256/Ed25519, MFA.",
    },
    {
      letter: "T",
      title: "Tampering",
      concern: "Integrity & Non-repudiation",
      color: "bg-amber-50 text-amber-700 border-amber-200",
      description: "Malicious modification of data in transit, in memory, or at rest.",
      example: "Student modifies an HTTP POST parameter to alter their interview score from 62 to 98.",
      mitigation: "Server-side authorization validation, TLS 1.3 encryption, database write audit logs.",
    },
    {
      letter: "R",
      title: "Repudiation",
      concern: "Accountability & Auditability",
      color: "bg-purple-50 text-purple-700 border-purple-200",
      description: "An actor performs an unauthorized action and later denies having done so.",
      example: "Admin publishes altered exam grades and claims the system malfunctioned or a hacker did it.",
      mitigation: "Append-only cryptographic audit logs, central SIEM ingestion, NTP time synchronization.",
    },
    {
      letter: "I",
      title: "Information Disclosure",
      concern: "Confidentiality & Privacy",
      color: "bg-blue-50 text-blue-700 border-blue-200",
      description: "Exposing private records, secrets, or architecture details to unauthorized parties.",
      example: "API endpoint /api/reports/104 returns another student's full resume and interviewer notes.",
      mitigation: "Server-side ownership verification (IDOR checks), field-level redaction, encrypted backups.",
    },
    {
      letter: "D",
      title: "Denial of Service",
      concern: "Availability & Resilience",
      color: "bg-orange-50 text-orange-700 border-orange-200",
      description: "Exhausting server memory, CPU, database connections, or network bandwidth.",
      example: "Attacker floods report generation endpoint with 10,000 concurrent requests.",
      mitigation: "IP & user-based rate limiting, Cloudflare WAF, asynchronous queue workers (Redis/Celery).",
    },
    {
      letter: "E",
      title: "Elevation of Privilege",
      concern: "Authorization & Least Privilege",
      color: "bg-emerald-50 text-emerald-700 border-emerald-200",
      description: "A standard authenticated user gains unauthorized administrative capabilities.",
      example: "Learner appends 'isAdmin: true' in profile update JSON payload to claim staff status.",
      mitigation: "Strict schema validation (disallow mass assignment), Role-Based Access Control (RBAC).",
    },
  ];

  const [activeStride, setActiveStride] = useState(strideCategories[0]);

  /* -------------------------------------------------------------------------- */
  /* LAB 3: QUALITATIVE RISK MATRIX & TREATMENT CALCULATOR                      */
  /* -------------------------------------------------------------------------- */
  const [likelihood, setLikelihood] = useState(4); // 1-5
  const [impact, setImpact] = useState(5); // 1-5
  const [scenarioName, setScenarioName] = useState("IDOR in Student Report API (/api/reports/{id})");

  const riskScore = likelihood * impact;
  const riskTier = useMemo(() => {
    if (riskScore >= 16) return { label: "Critical", color: "bg-red-600 text-white", border: "border-red-500", action: "Immediate Emergency Hotfix (24h SLA)" };
    if (riskScore >= 10) return { label: "High", color: "bg-amber-600 text-white", border: "border-amber-500", action: "Prioritized Sprint Patch (7-day SLA)" };
    if (riskScore >= 5) return { label: "Medium", color: "bg-yellow-500 text-white", border: "border-yellow-400", action: "Schedule in Upcoming Release" };
    return { label: "Low", color: "bg-emerald-600 text-white", border: "border-emerald-500", action: "Document in Risk Register / Backlog" };
  }, [riskScore]);

  /* -------------------------------------------------------------------------- */
  /* LAB 4: RULES OF ENGAGEMENT (ROE) DRAFTER                                   */
  /* -------------------------------------------------------------------------- */
  const [roeTargetDomain, setRoeTargetDomain] = useState("app.learnsphere-staging.internal");
  const [roeIpRange, setRoeIpRange] = useState("10.0.14.0/24");
  const [roeWindowStart, setRoeWindowStart] = useState("2026-10-20 02:00 UTC");
  const [roeWindowEnd, setRoeWindowEnd] = useState("2026-10-20 06:00 UTC");
  const [roeLeadTester, setRoeLeadTester] = useState("Lead Ethical Assessor (Prepspaces)");
  const [roeEmergencyPhone, setRoeEmergencyPhone] = useState("+91-98765-43210 (Security Operations Desk)");
  const [roeCopied, setRoeCopied] = useState(false);

  const roeDocumentText = useMemo(() => {
    return `================================================================================
AUTHORIZED RULES OF ENGAGEMENT (RoE) - ETHICAL SECURITY ASSESSMENT
================================================================================
Project: LearnSphere Educational Platform Assessment
Authorization Standard: Explicit Written Permission (ISO 27001 / NIST SP 800-115)
Jurisdiction Compliance: Indian Information Technology Act 2000 (Sec 43, 66) & DPDP Act 2023

1. AUTHORIZED SCOPE & TARGETS:
   - Primary Target Host: https://${roeTargetDomain}
   - Dedicated Subnet: ${roeIpRange}
   - Target Components: Web Frontend, Public REST API, Report Generation Service.

2. EXPLICIT EXCLUSIONS (STRICTLY OUT OF BOUNDS):
   - Production Customer Database (db-prod-cluster.rds)
   - Third-Party Identity Providers (Google OAuth, GitHub SSO endpoints)
   - Payment Processors (Stripe API / payment card entry interfaces)
   - Physical Security & Social Engineering of employees or students.

3. TESTING TIMEFRAME:
   - Authorized Window: ${roeWindowStart} to ${roeWindowEnd}
   - Activity outside this defined window is strictly unauthorized.

4. PERMITTED METHODOLOGIES:
   - Non-destructive vulnerability scanning (rate limited to max 5 req/sec).
   - Authenticated role testing using synthetic test accounts (student_test1, admin_test).
   - Server-side access control validation and parameter tampering analysis.

5. PROHIBITED ACTIONS:
   - Distributed Denial of Service (DDoS) or intentional resource exhaustion.
   - Permanent data deletion, data modification, or exfiltration of real student PII.
   - Retention of any downloaded private data after proof-of-concept capture.

6. EMERGENCY CONTACTS & STOP-TEST CONDITIONS:
   - Lead Ethical Assessor: ${roeLeadTester}
   - Emergency Escalation Contact: ${roeEmergencyPhone}
   - Stop Condition: If any production service degradation, unintended data loss,
     or critical credential leak occurs, testing MUST cease immediately and notification sent.
================================================================================`;
  }, [roeTargetDomain, roeIpRange, roeWindowStart, roeWindowEnd, roeLeadTester, roeEmergencyPhone]);

  /* -------------------------------------------------------------------------- */
  /* OBSERVATION LAB: SAFE HTTP INSPECTION SIMULATOR                            */
  /* -------------------------------------------------------------------------- */
  const [simulatedEndpoint, setSimulatedEndpoint] = useState("report_idor");
  const [simulatedRole, setSimulatedRole] = useState("student_b");

  const observationEndpoints = {
    report_idor: {
      name: "GET /api/v1/student/reports/1048",
      description: "Fetching private interview report for Student ID #1048 (Alice). Currently requested by Student B (Bob, ID #1052).",
      reqHeader: `GET /api/v1/student/reports/1048 HTTP/1.1
Host: api.learnsphere.org
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwNTIsInJvbGUiOiJzdHVkZW50In0.xyz987
Accept: application/json
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)`,
      vulnerableRes: `HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Content-Length: 642

{
  "reportId": 1048,
  "studentName": "Alice Sharma",
  "email": "alice.s@example.edu",
  "targetRole": "Cloud Security Architect",
  "interviewScore": 94,
  "feedback": "Outstanding threat modeling skills. Needs improvement on kernel ring 0 isolation.",
  "mentorNotes": "Recommended for Tier-1 Hiring Partner fast-track."
}`,
      patchedRes: `HTTP/1.1 403 Forbidden
Content-Type: application/json; charset=utf-8
Content-Length: 138

{
  "error": "Forbidden",
  "message": "Access Denied: You do not have permission to view report #1048. Ownership validation failed.",
  "incidentLogged": true
}`,
      flawAnalysis:
        "CRITICAL BROKEN ACCESS CONTROL (OWASP A01:2025): The backend API verifies authentication (Bob's JWT is valid) but completely fails complete mediation and object-level authorization (checking whether Bob owns report 1048).",
      mitigationCode: `// SECURE REMEDIATION IN BACKEND CONTROLLER:
async function getStudentReport(req, res) {
  const requestingUserId = req.user.userId; // Extracted from verified JWT
  const targetReportId = req.params.reportId;

  const report = await db.reports.findById(targetReportId);
  if (!report) return res.status(404).json({ error: "Report not found" });

  // STRICT OWNERSHIP CHECK:
  if (report.ownerId !== requestingUserId && req.user.role !== "academic_admin") {
    logger.warn("Unauthorized report access attempt", { requestingUserId, targetReportId });
    return res.status(403).json({ error: "Access Denied: Ownership mismatch." });
  }

  return res.json(report);
}`,
    },
    admin_exposure: {
      name: "POST /api/v1/admin/users/promote",
      description: "Submitting administrative promotion request from a normal student session.",
      reqHeader: `POST /api/v1/admin/users/promote HTTP/1.1
Host: api.learnsphere.org
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwNTIsInJvbGUiOiJzdHVkZW50In0.xyz987
Content-Type: application/json

{ "targetUserId": 1052, "newRole": "system_administrator" }`,
      vulnerableRes: `HTTP/1.1 200 OK
Content-Type: application/json

{
  "success": true,
  "message": "User 1052 promoted to system_administrator successfully.",
  "effectiveImmediately": true
}`,
      patchedRes: `HTTP/1.1 401 Unauthorized / 403 Forbidden
Content-Type: application/json

{
  "error": "Forbidden",
  "message": "Role 'student' lacks 'users:manage_roles' capability.",
  "securityAlertDispatched": true
}`,
      flawAnalysis:
        "ELEVATION OF PRIVILEGE & INSECURE DIRECT OBJECT MODIFICATION: The frontend hides the 'Admin Panel' button, but the API endpoint was left exposed without role verification.",
      mitigationCode: `// SECURE ROLE-BASED ACCESS CONTROL (RBAC) MIDDLEWARE:
function requireRole(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ error: "Insufficient privileges" });
    }
    next();
  };
}

// Router definition:
router.post('/admin/users/promote', authenticateJWT, requireRole('super_admin'), promoteUserHandler);`,
    },
  };

  const [activeSimulationMode, setActiveSimulationMode] = useState("vulnerable"); // 'vulnerable' | 'patched'

  /* -------------------------------------------------------------------------- */
  /* QUIZ & ASSESSMENT (10 UNIVERSITY-INFORMED QUESTIONS DIRECTLY FROM SYLLABUS)*/
  /* -------------------------------------------------------------------------- */
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "Which security property is primarily violated when a student reads another student's private interview report?",
      options: ["Availability", "Confidentiality", "Integrity", "Non-repudiation"],
      correctIndex: 1,
      explanation:
        "Confidentiality guarantees that information is accessible only to authorized people, systems, or processes. Unauthorized disclosure of private interview records directly violates confidentiality.",
    },
    {
      id: 2,
      question: "A student can change their assessment score by modifying an API request. What is the main concern?",
      options: [
        "Integrity and authorization",
        "Only availability",
        "Only confidentiality",
        "Physical security",
      ],
      correctIndex: 0,
      explanation:
        "Integrity ensures data remains accurate and protected against unauthorized modification. Because the API permitted unauthorized changes without validating whether the user had permission to write, it also represents an authorization failure.",
    },
    {
      id: 3,
      question: "Which statement best describes a vulnerability?",
      options: [
        "Any person who uses a computer",
        "A potential cause of harm",
        "A weakness that may be exploited",
        "A documented security policy",
      ],
      correctIndex: 2,
      explanation:
        "A vulnerability is a weakness or flaw in software, hardware, configuration, architecture, or process that may be taken advantage of by a threat to cause harm.",
    },
    {
      id: 4,
      question: "What should a tester do before assessing a public website?",
      options: [
        "Run a full scan first",
        "Obtain valid authorization and define scope",
        "Try default passwords",
        "Collect customer information",
      ],
      correctIndex: 1,
      explanation:
        "Ethical security testing requires explicit, written authorization from the system owner defining scope, rules of engagement, and approved methodologies before any probing or testing begins.",
    },
    {
      id: 5,
      question: "What does least privilege require?",
      options: [
        "Every user should be an administrator",
        "Permissions should be limited to necessary duties",
        "All accounts should share one password",
        "Users should never authenticate",
      ],
      correctIndex: 1,
      explanation:
        "The Principle of Least Privilege states that every user, process, and system component must be granted only the minimum permissions necessary to perform its authorized responsibilities.",
    },
    {
      id: 6,
      question: "Which NIST CSF 2.0 function focuses on recognizing potential security events?",
      options: ["Govern", "Detect", "Recover", "Protect"],
      correctIndex: 1,
      explanation:
        "The Detect function in NIST CSF 2.0 enables timely discovery and recognition of anomalous activity, suspicious actions, and potential security events through continuous monitoring and log analysis.",
    },
    {
      id: 7,
      question: "What is an attack surface?",
      options: [
        "The set of interfaces and pathways through which a system may be accessed or affected",
        "A list of every criminal in a country",
        "The impact score of a vulnerability",
        "A backup storage device",
      ],
      correctIndex: 0,
      explanation:
        "An attack surface is the complete sum of interfaces, endpoints, ports, services, APIs, and pathways through which an adversary or unauthorized user could interact with or attempt to compromise a system.",
    },
    {
      id: 8,
      question: "What does a threat model help a team do?",
      options: [
        "Guarantee that a system is secure",
        "Replace security testing",
        "Identify assets, plausible threats, risks and controls",
        "Automatically fix every vulnerability",
      ],
      correctIndex: 2,
      explanation:
        "Threat modeling provides a structured, proactive methodology to systematically map architecture, identify valuable assets, discover plausible threat scenarios, analyze trust boundaries, and prioritize defensive controls.",
    },
    {
      id: 9,
      question: "A tool reports a possible vulnerability. What should the tester conclude?",
      options: [
        "The system is definitely exploitable",
        "The report should be validated safely within scope",
        "The target should be immediately published online",
        "Every reported issue has the same severity",
      ],
      correctIndex: 1,
      explanation:
        "Automated tools generate false positives and misinterpret application context. An ethical tester treats tool outputs as hypotheses requiring safe, controlled, non-destructive manual verification within authorized scope.",
    },
    {
      id: 10,
      question: "What is a key purpose of responsible vulnerability disclosure?",
      options: [
        "Maximize public exposure immediately",
        "Coordinate reporting and remediation to reduce harm",
        "Avoid documenting evidence",
        "Obtain unrestricted access to affected systems",
      ],
      correctIndex: 1,
      explanation:
        "Responsible disclosure establishes a coordinated channel between security researchers and system vendors, giving defenders time to remediate the vulnerability safely before public disclosure, thereby minimizing potential harm to end users.",
    },
  ];

  const handleSelectOption = (questionId, optionIdx) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [questionId]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col font-sans selection:bg-[#f97316] selection:text-white">
      {/* Top Global Navigation Bar */}
      <ModuleNav
        track="cybersecurity"
        currentModuleId="intro"
        showAiTutor={showAiTutor}
        onAiTutorToggle={() => setShowAiTutor(!showAiTutor)}
        aiTutorLabel="Cybersecurity Mentor"
      />

      <div className="flex-1 flex flex-col max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Module Header & University Alignment Badge */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200/80 bg-orange-50/90 px-3 py-1 font-mono text-[11px] font-bold text-[#ea580c] uppercase tracking-wider">
              <Shield size={12} className="text-[#f97316]" />
              Course: Cybersecurity Masterclass
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-white/80 px-2.5 py-1 text-[11px] font-bold text-stone-600">
              Module 1 of 24 · Foundation Module
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-white/80 px-2.5 py-1 text-[11px] font-bold text-stone-600">
              University Curriculum · MIT / Stanford / CMU / Berkeley / Cambridge / ETH
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
              Beginner to Professional · 10–12 Hours
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#18181b]">
            Introduction to Cybersecurity and Ethical Hacking
          </h1>
          <p className="mt-2 text-sm md:text-base text-stone-600 max-w-4xl leading-relaxed">
            Establish the core foundation for professional security engineering. Learn why systems fail, how defenders evaluate adversarial risk, how ethical hackers conduct authorized assessments, and how organizations protect information, infrastructure, and privacy.
          </p>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex items-center gap-2 border-b border-[#e7e3da] pb-3 mb-6 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab("theory")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "theory"
                ? "bg-[#18181b] text-white shadow-xs"
                : "bg-white/80 text-stone-600 hover:bg-white hover:text-stone-900 border border-[#e7e3da]"
            }`}
          >
            <BookOpen size={14} />
            <span>Curriculum & Deep Theory (Parts A–P)</span>
          </button>

          <button
            onClick={() => setActiveTab("interactive-labs")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "interactive-labs"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-white/80 text-stone-600 hover:bg-white hover:text-stone-900 border border-[#e7e3da]"
            }`}
          >
            <Workflow size={14} />
            <span>Interactive Labs (Asset, STRIDE, Risk & RoE)</span>
          </button>

          <button
            onClick={() => setActiveTab("observation-lab")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "observation-lab"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-white/80 text-stone-600 hover:bg-white hover:text-stone-900 border border-[#e7e3da]"
            }`}
          >
            <Terminal size={14} />
            <span>Safe Observation Lab (HTTP & API Inspection)</span>
          </button>

          <button
            onClick={() => setActiveTab("case-study")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "case-study"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-white/80 text-stone-600 hover:bg-white hover:text-stone-900 border border-[#e7e3da]"
            }`}
          >
            <FileText size={14} />
            <span>Applied Case Study: LearnSphere Platform</span>
          </button>

          <button
            onClick={() => setActiveTab("quiz")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "quiz"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-white/80 text-stone-600 hover:bg-white hover:text-stone-900 border border-[#e7e3da]"
            }`}
          >
            <Award size={14} />
            <span>Assessment & Quiz (10 Questions)</span>
          </button>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* TAB 1: CURRICULUM & DEEP THEORY (PARTS A THROUGH P)                 */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "theory" && (
          <div className="space-y-8">
            {/* Overview Card: Learning Objectives */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 font-mono text-[11px] font-bold text-[#ea580c]">
                  <Sparkles size={13} />
                  Foundational Competencies
                </span>
                <span className="text-xs text-stone-500 font-mono">12 Core Objectives</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Module Learning Objectives & Academic Outcomes
              </h2>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                By the conclusion of this foundational module, learners will be able to systematically analyze security scenarios using university-standard methods rather than tool-centric guesswork:
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "Distinguish cybersecurity, information security, computer security, and ethical hacking.",
                  "Master CIA triad, authentication, authorization, auditability, privacy, and non-repudiation.",
                  "Differentiate assets, threats, vulnerabilities, exploits, attack surfaces, and residual risk.",
                  "Analyze threat actor capabilities, motivations, opportunities, and constraints.",
                  "Map system attack surfaces and identify high-risk trust boundaries.",
                  "Build practical threat models using the STRIDE classification framework.",
                  "Apply Saltzer & Schroeder principles: least privilege, defense in depth, secure by default.",
                  "Contrast ethical hacking, vulnerability scanning, penetration testing, and red teaming.",
                  "Draft professional rules of engagement, scopes, stop conditions, and evidence plans.",
                  "Leverage industry frameworks: NIST CSF 2.0, OWASP Top 10:2025, and MITRE ATT&CK.",
                  "Conduct safe, non-destructive security observations in isolated lab environments.",
                  "Formulate structured vulnerability reports with actionable defensive mitigations.",
                ].map((obj, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 rounded-2xl border border-stone-200/70 bg-stone-50/70 p-3.5">
                    <CheckCircle2 size={16} className="text-[#ea580c] shrink-0 mt-0.5" />
                    <span className="text-xs text-stone-700 leading-relaxed font-medium">{obj}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* PART A: Understanding Cybersecurity */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Shield size={14} />
                <span>Part A — Understanding Cybersecurity</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Lesson 1.1: What is Cybersecurity?
              </h2>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                <strong>Cybersecurity</strong> is the discipline of protecting digital systems, networks, applications, cloud infrastructure, hardware devices, and sensitive data from unauthorized access, misuse, modification, disruption, disclosure, or destruction. It is not merely a technical layer—it encompasses people, engineering processes, formal security policies, cryptography, and systemic risk governance.
              </p>

              <div className="mt-6 rounded-2xl border border-stone-200/80 bg-stone-50/70 p-5">
                <h3 className="text-sm font-bold text-[#18181b] flex items-center gap-2">
                  <Database size={16} className="text-[#ea580c]" />
                  <span>The Holistic Banking Application Analogy</span>
                </h3>
                <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                  A common beginner mistake is assuming a banking application is "secure" because its login page enforces HTTPS and requires a password. A professional security engineer recognizes that cybersecurity must defend the entire interconnected lifecycle:
                </p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2 text-xs text-stone-600">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ea580c]" />
                    <span>Customer identities, biometric passkeys, and account balances</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ea580c]" />
                    <span>Payment transaction integrity and double-spend prevention</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ea580c]" />
                    <span>Backend microservice APIs, database queries, and caching tiers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ea580c]" />
                    <span>Employee administrative access, VPN portals, and privileged IAM roles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ea580c]" />
                    <span>Cloud VPC subnets, automated immutable backups, and SIEM audit logs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ea580c]" />
                    <span>Business continuity and transaction availability during active incidents</span>
                  </div>
                </div>
              </div>

              {/* Table: Infosec vs Cybersec */}
              <div className="mt-6 overflow-x-auto">
                <h3 className="text-sm font-bold text-[#18181b] mb-3">
                  1.1.2 Information Security vs. Cybersecurity vs. Specialized Disciplines
                </h3>
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-100/70 text-stone-700 font-bold">
                      <th className="p-3">Discipline</th>
                      <th className="p-3">Primary Concern</th>
                      <th className="p-3">Concrete Enterprise Example</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    <tr>
                      <td className="p-3 font-semibold text-[#18181b]">Information Security (InfoSec)</td>
                      <td className="p-3 text-stone-600">Protecting information in any form (digital, physical paper, spoken)</td>
                      <td className="p-3 text-stone-600">Enforcing shredding policies for paper resumes alongside encrypted digital archives</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#18181b]">Cybersecurity</td>
                      <td className="p-3 text-stone-600">Defending interconnected digital systems, networks, communications, and data</td>
                      <td className="p-3 text-stone-600">Defending an online education platform from API abuse, DDoS, and account takeover</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#18181b]">Computer Security</td>
                      <td className="p-3 text-stone-600">Protecting operating systems, software runtimes, memory, and physical hardware</td>
                      <td className="p-3 text-stone-600">Hardware ring isolation, kernel syscall validation, and OS access control lists</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#18181b]">Network Security</td>
                      <td className="p-3 text-stone-600">Securing transmission channels, packet routing, and perimeter boundaries</td>
                      <td className="p-3 text-stone-600">Firewall packet filtering, VLAN segmentation, TLS encryption, and WireGuard VPNs</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#18181b]">Application Security (AppSec)</td>
                      <td className="p-3 text-stone-600">Eliminating design and coding vulnerabilities in software and APIs</td>
                      <td className="p-3 text-stone-600">Parameterized SQL queries, output encoding, CSRF protection, and JWT validation</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#18181b]">Cloud Security</td>
                      <td className="p-3 text-stone-600">Securing cloud virtualization, IAM policies, serverless, and object storage</td>
                      <td className="p-3 text-stone-600">Restricting S3 bucket policies from public read, auditing IAM roles, and VPC peering</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#18181b]">Operational Security (OPSEC)</td>
                      <td className="p-3 text-stone-600">Protecting critical organizational processes and unclassified critical information</td>
                      <td className="p-3 text-stone-600">Restricting dissemination of internal architecture diagrams and incident runbooks</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Lesson 1.2: Adversarial Mindset */}
              <div className="mt-8 pt-6 border-t border-stone-200">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                  <Eye size={14} />
                  <span>Lesson 1.2 — The Cybersecurity Mindset: Adversarial Engineering</span>
                </div>
                <h3 className="text-lg font-bold text-[#18181b]">
                  Ordinary Software Engineering vs. Adversarial Security Engineering
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  In traditional software engineering, developers verify functional correctness: <em>"Does this feature work as intended when a legitimate user enters valid data?"</em> Security engineering requires a fundamentally adversarial mindset: <em>"How can an adversary deliberately violate the implicit assumptions of this system to gain unauthorized advantage?"</em>
                </p>

                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    {
                      q: "1. What are we protecting?",
                      desc: "Identify critical assets: customer data, cryptographic keys, business availability, and reputation.",
                    },
                    {
                      q: "2. Who or what threatens them?",
                      desc: "Model threat actors: cybercriminals, malicious insiders, automated bots, and supply-chain flaws.",
                    },
                    {
                      q: "3. How could something fail?",
                      desc: "Discover unmediated trust boundaries, weak session handling, race conditions, or bad defaults.",
                    },
                    {
                      q: "4. How do we prevent & recover?",
                      desc: "Architect defense-in-depth, configure complete mediation, ingest logs, and test recovery backups.",
                    },
                  ].map((card, i) => (
                    <div key={i} className="rounded-2xl border border-stone-200 bg-stone-50/80 p-4">
                      <h4 className="text-xs font-bold text-[#ea580c]">{card.q}</h4>
                      <p className="mt-1 text-xs text-stone-600 leading-normal">{card.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* PART B: Core Security Principles (CIA Triad & Beyond) */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Lock size={14} />
                <span>Part B — Core Security Principles & The CIA Triad</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Lesson 2.1: The CIA Triad (Confidentiality, Integrity, Availability)
              </h2>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                As emphasized in computer systems curricula at MIT (6.858) and UC Berkeley, the <strong>CIA Triad</strong> forms the core mental model for defining security requirements and assessing incident impact.
              </p>

              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-5">
                  <div className="flex items-center gap-2 text-blue-800 font-bold text-sm mb-2">
                    <Lock size={16} />
                    <span>1. Confidentiality</span>
                  </div>
                  <p className="text-xs text-blue-950 font-semibold mb-2">Prevent Unauthorized Disclosure</p>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Information is accessible only to authorized entities. If a student can view another student's private resume or interview feedback, confidentiality is broken.
                  </p>
                  <div className="mt-3 pt-3 border-t border-blue-200/80 text-[11px] text-stone-600 space-y-1">
                    <p><strong>Threats:</strong> IDOR, data leaks, eavesdropping, weak permissions.</p>
                    <p><strong>Defenses:</strong> TLS 1.3, AES-256, RBAC, data minimization.</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5">
                  <div className="flex items-center gap-2 text-amber-800 font-bold text-sm mb-2">
                    <ShieldCheck size={16} />
                    <span>2. Integrity</span>
                  </div>
                  <p className="text-xs text-amber-950 font-semibold mb-2">Prevent Unauthorized Modification</p>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Data and systems remain accurate, complete, and protected against unauthorized changes. A student must never be able to alter their verified exam score via an API request.
                  </p>
                  <div className="mt-3 pt-3 border-t border-amber-200/80 text-[11px] text-stone-600 space-y-1">
                    <p><strong>Threats:</strong> Parameter tampering, SQLi, MITM attacks, unauthorized updates.</p>
                    <p><strong>Defenses:</strong> Cryptographic hashes (SHA-256), HMACs, digital signatures, audit trails.</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-2">
                    <Activity size={16} />
                    <span>3. Availability</span>
                  </div>
                  <p className="text-xs text-emerald-950 font-semibold mb-2">Ensure Authorized Access When Needed</p>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Authorized users can access systems, services, and data reliably. If a DDoS attack or ransomware knocks out the learning platform during an exam window, availability is lost.
                  </p>
                  <div className="mt-3 pt-3 border-t border-emerald-200/80 text-[11px] text-stone-600 space-y-1">
                    <p><strong>Threats:</strong> SYN floods, resource exhaustion, ransomware, server crashes.</p>
                    <p><strong>Defenses:</strong> Redundancy, auto-scaling, CDN caching, rate limiting, disaster recovery.</p>
                  </div>
                </div>
              </div>

              {/* Lesson 2.2: Extended Security Properties */}
              <div className="mt-8 pt-6 border-t border-stone-200">
                <h3 className="text-sm sm:text-base font-bold text-[#18181b] mb-3">
                  Lesson 2.2: Extended Security Properties Beyond CIA
                </h3>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Authentication",
                      sub: "Who is making the request?",
                      desc: "Verifying identity claims via passwords, WebAuthn passkeys, TOTP MFA, or digital certificates. Crucial: Authentication is NOT authorization.",
                    },
                    {
                      title: "Authorization",
                      sub: "What is this identity permitted to do?",
                      desc: "Validating access permissions. An authenticated student must still be prevented from reading other users' reports or invoking administrative APIs.",
                    },
                    {
                      title: "Accountability & Auditability",
                      sub: "Who did what, and can we prove it?",
                      desc: "Binding critical actions to identities with tamper-evident, append-only logs containing timestamps, source IPs, actions, and results.",
                    },
                    {
                      title: "Non-Repudiation",
                      sub: "Inability to credibly deny an action",
                      desc: "Providing cryptographic proof (e.g. asymmetric digital signatures) preventing an entity from denying they authored a message or transaction.",
                    },
                    {
                      title: "Privacy",
                      sub: "Appropriate data governance",
                      desc: "Controlling the lawful collection, usage, retention, consent, and deletion of personal identifiable information (PII) under DPDP/GDPR.",
                    },
                    {
                      title: "Authenticity",
                      sub: "Is this entity or artifact genuine?",
                      desc: "Ensuring an executable binary, firmware image, or API response has not been forged or swapped by an adversary.",
                    },
                  ].map((prop, idx) => (
                    <div key={idx} className="rounded-2xl border border-stone-200/80 bg-stone-50/70 p-4">
                      <h4 className="text-xs font-bold text-[#18181b]">{prop.title}</h4>
                      <p className="text-[11px] text-[#ea580c] font-semibold">{prop.sub}</p>
                      <p className="mt-1.5 text-xs text-stone-600 leading-normal">{prop.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lesson 2.3: Controls Taxonomy */}
              <div className="mt-8 pt-6 border-t border-stone-200">
                <h3 className="text-sm sm:text-base font-bold text-[#18181b] mb-3">
                  Lesson 2.3: Security Policies, Mechanisms & Controls Taxonomy
                </h3>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-xs">
                  <div className="rounded-xl border border-stone-200 p-3 bg-white">
                    <span className="font-bold text-[#ea580c]">Preventive Controls</span>
                    <p className="text-stone-600 mt-1">Stop an unwanted event before it occurs (e.g., input validation, MFA, least-privilege IAM policies, firewalls).</p>
                  </div>
                  <div className="rounded-xl border border-stone-200 p-3 bg-white">
                    <span className="font-bold text-[#ea580c]">Detective Controls</span>
                    <p className="text-stone-600 mt-1">Identify and alert on suspicious activity as it happens (e.g., SIEM alerts, IDS/IPS sensors, integrity monitors).</p>
                  </div>
                  <div className="rounded-xl border border-stone-200 p-3 bg-white">
                    <span className="font-bold text-[#ea580c]">Corrective Controls</span>
                    <p className="text-stone-600 mt-1">Remediate problems and mitigate damage after an event (e.g., automated patching, isolating infected pods, revoking tokens).</p>
                  </div>
                  <div className="rounded-xl border border-stone-200 p-3 bg-white">
                    <span className="font-bold text-[#ea580c]">Deterrent Controls</span>
                    <p className="text-stone-600 mt-1">Discourage malicious behavior (e.g., login warning banners, legal notices, visible audit tracking).</p>
                  </div>
                  <div className="rounded-xl border border-stone-200 p-3 bg-white">
                    <span className="font-bold text-[#ea580c]">Recovery Controls</span>
                    <p className="text-stone-600 mt-1">Restore systems and business operations back to normal (e.g., immutable offline backups, disaster recovery sites).</p>
                  </div>
                  <div className="rounded-xl border border-stone-200 p-3 bg-white">
                    <span className="font-bold text-[#ea580c]">Compensating Controls</span>
                    <p className="text-stone-600 mt-1">Alternative safeguards deployed when primary controls cannot be immediately implemented (e.g., WAF virtual patching).</p>
                  </div>
                </div>
              </div>
            </section>

            {/* PART C: Assets, Threats, Vulnerabilities, and Risk */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <AlertTriangle size={14} />
                <span>Part C — Assets, Threats, Vulnerabilities & Risk</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Lesson 3.1: The Security Risk Relationship Chain
              </h2>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                Security professionals never use the terms <em>vulnerability</em>, <em>threat</em>, and <em>risk</em> interchangeably. They represent distinct links in an analytical chain:
              </p>

              {/* Risk Chain Visual */}
              <div className="mt-6 grid gap-2 sm:grid-cols-5 text-center">
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-3">
                  <div className="text-[11px] font-bold uppercase text-stone-500 font-mono">1. Asset</div>
                  <div className="text-xs font-bold text-[#18181b] mt-1">Valuable Target</div>
                  <p className="text-[11px] text-stone-500 mt-1">Student interview reports</p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-3">
                  <div className="text-[11px] font-bold uppercase text-stone-500 font-mono">2. Threat</div>
                  <div className="text-xs font-bold text-red-600 mt-1">Potential Harm</div>
                  <p className="text-[11px] text-stone-500 mt-1">Adversary accessing data</p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-3">
                  <div className="text-[11px] font-bold uppercase text-stone-500 font-mono">3. Vulnerability</div>
                  <div className="text-xs font-bold text-amber-600 mt-1">System Flaw</div>
                  <p className="text-[11px] text-stone-500 mt-1">API lacks ownership check</p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-3">
                  <div className="text-[11px] font-bold uppercase text-stone-500 font-mono">4. Risk Scenario</div>
                  <div className="text-xs font-bold text-purple-600 mt-1">Threat Exploits Flaw</div>
                  <p className="text-[11px] text-stone-500 mt-1">Competitor views PII</p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-3">
                  <div className="text-[11px] font-bold uppercase text-stone-500 font-mono">5. Defense Control</div>
                  <div className="text-xs font-bold text-emerald-600 mt-1">Reduces Risk</div>
                  <p className="text-[11px] text-stone-500 mt-1">Server-side authorization</p>
                </div>
              </div>

              {/* Lesson 3.2: Qualitative Risk Assessment */}
              <div className="mt-8 pt-6 border-t border-stone-200">
                <h3 className="text-sm sm:text-base font-bold text-[#18181b] mb-2">
                  Lesson 3.2: Qualitative Security Risk Modeling
                </h3>
                <div className="rounded-2xl border border-orange-200/80 bg-orange-50/50 p-4 font-mono text-xs text-orange-950">
                  <p className="font-bold">Risk Priority ≈ Likelihood × Impact</p>
                  <p className="text-[11px] text-stone-600 mt-1 font-sans">
                    Risk is evaluated in business context. A critical vulnerability in a disposable sandbox with zero sensitive data carries much lower risk than an identical vulnerability on an internet-facing payment or student records database.
                  </p>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-4 text-xs">
                  <div className="rounded-xl border border-stone-200 p-3 bg-white">
                    <span className="font-bold text-[#ea580c]">1. Mitigate</span>
                    <p className="text-stone-600 mt-1">Deploy safeguards (code fixes, rate limits, firewalls) to reduce likelihood or impact.</p>
                  </div>
                  <div className="rounded-xl border border-stone-200 p-3 bg-white">
                    <span className="font-bold text-[#ea580c]">2. Avoid</span>
                    <p className="text-stone-600 mt-1">Decommission or eliminate the high-risk feature or activity entirely.</p>
                  </div>
                  <div className="rounded-xl border border-stone-200 p-3 bg-white">
                    <span className="font-bold text-[#ea580c]">3. Transfer / Share</span>
                    <p className="text-stone-600 mt-1">Shift financial liability (e.g., cyber insurance or outsourcing to a compliant vendor).</p>
                  </div>
                  <div className="rounded-xl border border-stone-200 p-3 bg-white">
                    <span className="font-bold text-[#ea580c]">4. Accept</span>
                    <p className="text-stone-600 mt-1">Formally acknowledge and sign off on residual risk by an authorized executive owner.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* PART D: Threat Actors and the Threat Landscape */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <UserCheck size={14} />
                <span>Part D — Threat Actors and the Threat Landscape</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Lesson 4.1 & 4.2: Threat Actor Profiles & Capabilities
              </h2>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                Adversaries possess varying levels of capability, resources, motivation, and time constraints. Threat modeling requires assessing whether a threat scenario is plausible given the actor's real-world profile:
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    type: "Cybercriminals (eCrime)",
                    mot: "Financial gain & extortion",
                    ex: "Ransomware deployment, credential theft, banking fraud, credit card carding.",
                  },
                  {
                    type: "Nation-State Operators (APTs)",
                    mot: "Geopolitics, espionage & disruption",
                    ex: "Long-term stealth persistence, intellectual property theft, critical infrastructure attacks.",
                  },
                  {
                    type: "Malicious Insiders",
                    mot: "Revenge, bribery or financial gain",
                    ex: "Disgruntled engineer exfiltrating user database or selling privileged credentials.",
                  },
                  {
                    type: "Accidental Insiders",
                    mot: "Human error (no malice)",
                    ex: "Developer accidentally committing AWS root API keys to a public GitHub repository.",
                  },
                  {
                    type: "Hacktivists",
                    mot: "Ideological, political or environmental",
                    ex: "Website defacement, public credential dumps, and volumetric DDoS campaigns.",
                  },
                  {
                    type: "Opportunistic Attackers",
                    mot: "Low-hanging fruit & bragging rights",
                    ex: "Automated scripts scanning the IPv4 internet for default admin passwords or exposed phpMyAdmin.",
                  },
                ].map((actor, i) => (
                  <div key={i} className="rounded-2xl border border-stone-200/80 bg-stone-50/70 p-4">
                    <h4 className="text-xs font-bold text-[#18181b]">{actor.type}</h4>
                    <p className="text-[11px] text-[#ea580c] font-semibold mt-0.5">Motivation: {actor.mot}</p>
                    <p className="mt-1.5 text-xs text-stone-600 leading-normal">{actor.ex}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* PART E: Attack Surfaces & Trust Boundaries */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Layers size={14} />
                <span>Part E — Attack Surfaces, Entry Points & Trust Boundaries</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Lesson 5.1 & 5.2: Mapping Trust Boundaries
              </h2>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                An <strong>attack surface</strong> is the totality of accessible pathways into a system. A <strong>trust boundary</strong> is an architectural perimeter where code on one side operates under different privileges or security assumptions from code on the other.
              </p>

              {/* Architecture Diagram */}
              <div className="mt-6 rounded-2xl border border-stone-300 bg-stone-900 p-5 text-white font-mono text-xs overflow-x-auto">
                <div className="text-orange-400 font-bold mb-2">// ARCHITECTURAL TRUST BOUNDARIES (LearnSphere Example)</div>
                <pre className="text-stone-300 leading-relaxed">
{` [UNTRUSTED ZONE]                    [DMZ / EDGE TIER]                     [TRUSTED INTERNAL TIER]
 +------------------+                +-------------------+                 +----------------------+
 | User Web Browser | --- HTTPS ---> | Cloudflare / WAF  | ---> TLS 1.3 -> | Next.js API Gateway  |
 | (Client JS / UI) |                | (DDoS, Rate Limit)|                 | (Session & Route)    |
 +------------------+                +-------------------+                 +----------------------+
          |                                                                           |
          |  (Untrusted Input)                                     [TRUST BOUNDARY 2: Inter-Service]
          v                                                                           v
 [TRUST BOUNDARY 1: External to Perimeter]                                 +----------------------+
                                                                           | Report Microservice  |
                                                                           | (Strict Object ACLs) |
                                                                           +----------------------+
                                                                               |              |
                                                     [TRUST BOUNDARY 3: DB]    v              v
                                                                        +----------+    +-----------+
                                                                        | Postgres |    | AWS S3    |
                                                                        | (Private)|    | (Encrypted|
                                                                        +----------+    +-----------+`}
                </pre>
              </div>

              <div className="mt-6 rounded-2xl border border-orange-200/80 bg-orange-50/50 p-4">
                <h4 className="text-xs font-bold text-orange-950 flex items-center gap-1.5">
                  <Info size={14} className="text-[#ea580c]" />
                  <span>The Fundamental Principle of Trust Boundaries</span>
                </h4>
                <p className="mt-1 text-xs text-stone-700 leading-relaxed">
                  Never trust input merely because it originates from an internal microservice, a logged-in user, or a client application. <strong>Client-side checks are usability conveniences, not security controls.</strong> All authorization, input validation, and business logic enforcement must be completely mediated on the server side of the trust boundary.
                </p>
              </div>
            </section>

            {/* PART F: Threat Modeling & STRIDE */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Workflow size={14} />
                <span>Part F — Threat Modeling with the STRIDE Framework</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Lesson 6.1–6.3: Proactive Threat Modeling & STRIDE
              </h2>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                As taught in MIT 6.858 and Carnegie Mellon 15-330, threat modeling enables engineers to identify design flaws <em>before</em> code is deployed. The 10-step threat modeling lifecycle guides systematic analysis:
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {strideCategories.map((cat, idx) => (
                  <div key={idx} className={`rounded-2xl border p-4 ${cat.color}`}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-black text-sm">{cat.letter} — {cat.title}</span>
                      <span className="text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded-full bg-white/70">
                        {cat.concern}
                      </span>
                    </div>
                    <p className="text-xs leading-normal">{cat.description}</p>
                    <div className="mt-2.5 pt-2 border-t border-black/10 text-[11px] space-y-1">
                      <p><strong>Example:</strong> {cat.example}</p>
                      <p className="font-medium text-black"><strong>Mitigation:</strong> {cat.mitigation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* PART G: Fundamental Defensive Principles (Saltzer & Schroeder) */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <ShieldCheck size={14} />
                <span>Part G — Fundamental Defensive Principles</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Lesson 7.1–7.9: Architectural Principles of Secure Systems
              </h2>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                Derived from the landmark Saltzer and Schroeder (1975) security design principles and modern Zero Trust architecture:
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-xs">
                <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                  <h4 className="font-bold text-[#18181b]">7.1 Least Privilege</h4>
                  <p className="text-stone-600 mt-1 leading-relaxed">
                    Every user, process, and microservice must possess only the minimum permissions required to perform authorized duties. Database services should not run as root.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                  <h4 className="font-bold text-[#18181b]">7.2 Defense in Depth</h4>
                  <p className="text-stone-600 mt-1 leading-relaxed">
                    Deploy layered, overlapping safeguards so that the failure of any single control (e.g. WAF bypass) is mitigated by subsequent layers (e.g. server-side checks, DB encryption).
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                  <h4 className="font-bold text-[#18181b]">7.3 Secure by Default</h4>
                  <p className="text-stone-600 mt-1 leading-relaxed">
                    Systems must ship in the most secure configuration out of the box. Users should not be required to manually discover and disable dangerous default settings.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                  <h4 className="font-bold text-[#18181b]">7.4 Fail-Safe Defaults</h4>
                  <p className="text-stone-600 mt-1 leading-relaxed">
                    When an authorization or authentication check encounters an exception or fails, access must default to DENY, rather than defaulting to ALLOW.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                  <h4 className="font-bold text-[#18181b]">7.5 Complete Mediation</h4>
                  <p className="text-stone-600 mt-1 leading-relaxed">
                    Every access attempt to every resource must be checked every time. Prior authentication must not be implicitly trusted across subsequent resource requests.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                  <h4 className="font-bold text-[#18181b]">7.6 Separation of Duties</h4>
                  <p className="text-stone-600 mt-1 leading-relaxed">
                    High-impact administrative actions (such as publishing official exam certifications or transferring funds) require multiple distinct authorizations to prevent single-account abuse.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                  <h4 className="font-bold text-[#18181b]">7.7 Attack Surface Minimization</h4>
                  <p className="text-stone-600 mt-1 leading-relaxed">
                    Disable unused network ports, decommission legacy API versions, strip unnecessary debugging endpoints, and uninstall unneeded dependencies.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                  <h4 className="font-bold text-[#18181b]">7.8 Zero Trust Architecture</h4>
                  <p className="text-stone-600 mt-1 leading-relaxed">
                    <em>"Never trust, always verify."</em> Network location (e.g. being inside the corporate office or VPN) confers zero implicit trust. Every request must be authenticated, authorized, and encrypted.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                  <h4 className="font-bold text-[#18181b]">7.9 Security vs. Usability</h4>
                  <p className="text-stone-600 mt-1 leading-relaxed">
                    Security controls that introduce impossible friction lead users to seek insecure workarounds. Good engineering designs intuitive controls (e.g. WebAuthn biometric passkeys).
                  </p>
                </div>
              </div>
            </section>

            {/* PART H: Industry Frameworks (NIST CSF 2.0, OWASP Top 10, MITRE ATT&CK) */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Compass size={14} />
                <span>Part H — Industry Security Frameworks</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Lesson 8.1–8.3: NIST CSF 2.0, OWASP Top 10:2025 & MITRE ATT&CK
              </h2>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                Professional cybersecurity engineering relies on standardized global frameworks to structure governance, defensive engineering, and adversarial modeling:
              </p>

              {/* NIST CSF 2.0 */}
              <div className="mt-6">
                <h3 className="text-sm font-bold text-[#18181b] mb-3 flex items-center gap-2">
                  <Award size={16} className="text-[#ea580c]" />
                  <span>NIST Cybersecurity Framework 2.0 (The Six Core Functions)</span>
                </h3>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6 text-xs">
                  {[
                    { fn: "GOVERN", color: "border-purple-200 bg-purple-50 text-purple-900", desc: "Policies, roles, risk governance, oversight, and organizational strategy." },
                    { fn: "IDENTIFY", color: "border-blue-200 bg-blue-50 text-blue-900", desc: "Asset inventories, business dependencies, risk assessments, and vulnerability tracking." },
                    { fn: "PROTECT", color: "border-emerald-200 bg-emerald-50 text-emerald-900", desc: "Access control, identity management, encryption, training, and secure configuration." },
                    { fn: "DETECT", color: "border-amber-200 bg-amber-50 text-amber-900", desc: "Continuous monitoring, SIEM log analysis, and anomaly detection." },
                    { fn: "RESPOND", color: "border-red-200 bg-red-50 text-red-900", desc: "Incident analysis, containment, mitigation, and stakeholder communication." },
                    { fn: "RECOVER", color: "border-cyan-200 bg-cyan-50 text-cyan-900", desc: "Restoration of operations, backups verification, and lessons learned." },
                  ].map((item, idx) => (
                    <div key={idx} className={`rounded-2xl border p-3.5 ${item.color}`}>
                      <div className="font-black text-xs">{item.fn}</div>
                      <p className="mt-1 text-[11px] leading-relaxed opacity-90">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* OWASP Top 10:2025 Table */}
              <div className="mt-8 pt-6 border-t border-stone-200">
                <h3 className="text-sm font-bold text-[#18181b] mb-3 flex items-center gap-2">
                  <Globe size={16} className="text-[#ea580c]" />
                  <span>OWASP Top 10:2025 — Essential Web Application Risks</span>
                </h3>
                <div className="grid gap-2 sm:grid-cols-2 text-xs">
                  {[
                    { id: "A01:2025", name: "Broken Access Control", desc: "Users acting outside intended permissions (e.g. IDOR, viewing unauthorized reports)." },
                    { id: "A02:2025", name: "Security Misconfiguration", desc: "Default accounts, open S3 buckets, exposed debug endpoints, verbose error messages." },
                    { id: "A03:2025", name: "Software Supply Chain Failures", desc: "Compromised third-party npm/pip libraries, poisoned dependencies, untrusted build CI." },
                    { id: "A04:2025", name: "Cryptographic Failures", desc: "Weak algorithms (MD5, SHA1), hardcoded keys, transmission over unencrypted HTTP." },
                    { id: "A05:2025", name: "Injection", desc: "Untrusted input executed as commands: SQLi, OS Command Injection, LDAP injection." },
                    { id: "A06:2025", name: "Insecure Design", desc: "Architectural flaws existing prior to code implementation (missing threat models)." },
                    { id: "A07:2025", name: "Authentication Failures", desc: "Credential stuffing, weak passwords, missing MFA, session fixation." },
                    { id: "A08:2025", name: "Software or Data Integrity Failures", desc: "Insecure deserialization, unverified auto-updates, CI/CD pipeline tampering." },
                    { id: "A09:2025", name: "Security Logging and Alerting Failures", desc: "Failures to record critical security events, lack of real-time SOC alerting." },
                    { id: "A10:2025", name: "Mishandling of Exceptional Conditions", desc: "Improper exception handling, unhandled edge conditions leading to bypasses." },
                  ].map((owasp, idx) => (
                    <div key={idx} className="flex items-start gap-2 rounded-xl border border-stone-200 bg-white p-3">
                      <span className="font-mono font-bold text-[#ea580c] shrink-0">{owasp.id}</span>
                      <div>
                        <div className="font-bold text-[#18181b]">{owasp.name}</div>
                        <div className="text-[11px] text-stone-500 mt-0.5">{owasp.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* PART I & J: Ethical Hacking, Law, & Ethics in India */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <FileCode size={14} />
                <span>Part I & J — Ethical Hacking, Law & Responsible Disclosure</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Lesson 9.1–10.3: The Ethical Hacking Lifecycle & Legal Framework
              </h2>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                Hacking simply means making a computer system behave in ways its creators did not anticipate. <strong>The presence or absence of explicit authorization is what determines legality and ethics:</strong>
              </p>

              {/* 7-Stage Ethical Hacking Lifecycle */}
              <div className="mt-6 grid gap-2 sm:grid-cols-7 text-center">
                {[
                  { step: "01", name: "Auth & Scope", desc: "Written RoE & boundaries" },
                  { step: "02", name: "Planning & Recon", desc: "Passive intelligence gathering" },
                  { step: "03", name: "Threat Analysis", desc: "Developing attack hypotheses" },
                  { step: "04", name: "Validation", desc: "Least-intrusive safe testing" },
                  { step: "05", name: "Evidence & Impact", desc: "PoC capture & risk assessment" },
                  { step: "06", name: "Reporting", desc: "Actionable remediation steps" },
                  { step: "07", name: "Retest & Close", desc: "Validating fixes & closure" },
                ].map((st, i) => (
                  <div key={i} className="rounded-2xl border border-stone-200 bg-stone-50 p-3">
                    <div className="text-sm font-black text-[#ea580c] font-mono">{st.step}</div>
                    <div className="text-xs font-bold text-[#18181b] mt-1">{st.name}</div>
                    <p className="text-[10px] text-stone-500 mt-0.5">{st.desc}</p>
                  </div>
                ))}
              </div>

              {/* Legal Awareness for India */}
              <div className="mt-8 rounded-2xl border border-red-200 bg-red-50/50 p-5">
                <h3 className="text-sm font-bold text-red-950 flex items-center gap-2">
                  <AlertOctagon size={16} className="text-red-600" />
                  <span>Mandatory Legal Awareness for Learners in India</span>
                </h3>
                <div className="mt-3 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p>
                    <strong>1. Information Technology Act, 2000 (as amended):</strong> Sections 43, 66, and 66B strictly criminalize unauthorized access, data copying, introduction of malware, and system disruption. Accessing a computer system without prior written authorization constitutes a cognizable offense carrying heavy fines and imprisonment.
                  </p>
                  <p>
                    <strong>2. Digital Personal Data Protection (DPDP) Act, 2023 & DPDP Rules 2025:</strong> Imposes strict obligations on Data Fiduciaries regarding personal student/customer data. Unlawful processing, unauthorized exfiltration, or failure to protect personal data incurs penalties up to ₹250 Crores.
                  </p>
                  <p>
                    <strong>3. CERT-In Cybersecurity Directives:</strong> The Indian Computer Emergency Response Team (CERT-In) mandates 6-hour incident reporting for critical cybersecurity occurrences and operates the official Responsible Vulnerability Disclosure and Coordination Policy (RVDCP).
                  </p>
                  <div className="mt-3 pt-3 border-t border-red-200 font-bold text-red-900">
                    Mandatory Golden Rule: Never scan, probe, fuzz, or test any live public website or service simply because it is accessible on the internet. Testing without explicit written authorization is illegal. All lab work must occur in authorized, instructor-provided sandboxes.
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 2: INTERACTIVE LABS SUITE (ASSET, STRIDE, RISK MATRIX, ROE)     */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "interactive-labs" && (
          <div className="space-y-8">
            {/* Lab 1: Asset Inventory Studio */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                    <Database size={14} />
                    <span>Lab 1: Asset Inventory & Sensitivity Matrix Builder</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                    Enterprise Asset Catalog & Criticality Scoring
                  </h2>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-stone-500">Filter Classification:</span>
                  <select
                    value={filterClass}
                    onChange={(e) => setFilterClass(e.target.value)}
                    className="rounded-xl border border-stone-300 bg-white px-3 py-1.5 text-xs font-semibold text-stone-800"
                  >
                    <option value="All">All Categories ({assetList.length})</option>
                    <option value="Public">Public</option>
                    <option value="Internal">Internal</option>
                    <option value="Confidential">Confidential</option>
                    <option value="Highly restricted">Highly restricted</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                {/* Asset List */}
                <div className="space-y-2 lg:col-span-1 max-h-[460px] overflow-y-auto pr-1">
                  {filteredAssets.map((asset) => {
                    const isSelected = selectedAsset.id === asset.id;
                    return (
                      <div
                        key={asset.id}
                        onClick={() => setSelectedAsset(asset)}
                        className={`p-3 rounded-2xl border transition-all cursor-pointer ${
                          isSelected
                            ? "border-[#ea580c] bg-orange-50/70 shadow-xs"
                            : "border-stone-200 bg-stone-50/50 hover:bg-stone-100/60"
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs font-bold">
                          <span className="text-[#18181b]">{asset.id}</span>
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              asset.classification === "Highly restricted"
                                ? "bg-red-100 text-red-700"
                                : asset.classification === "Confidential"
                                ? "bg-amber-100 text-amber-700"
                                : asset.classification === "Internal"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-emerald-100 text-emerald-700"
                            }`}
                          >
                            {asset.classification}
                          </span>
                        </div>
                        <div className="text-xs font-semibold text-stone-800 mt-1 line-clamp-1">
                          {asset.name}
                        </div>
                        <div className="text-[11px] text-stone-500 mt-0.5">Owner: {asset.owner}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Selected Asset Details */}
                <div className="rounded-2xl border border-stone-200 bg-stone-50/80 p-5 lg:col-span-2">
                  <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                    <div>
                      <span className="font-mono text-xs font-bold text-[#ea580c]">{selectedAsset.id}</span>
                      <h3 className="text-base font-bold text-[#18181b]">{selectedAsset.name}</h3>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-stone-900 text-white">
                      Criticality: {selectedAsset.criticality}
                    </span>
                  </div>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2 text-xs">
                    <div>
                      <span className="text-stone-500 font-semibold">Asset Custodian / Owner:</span>
                      <p className="font-bold text-stone-900 mt-0.5">{selectedAsset.owner}</p>
                    </div>
                    <div>
                      <span className="text-stone-500 font-semibold">Data Classification Tier:</span>
                      <p className="font-bold text-stone-900 mt-0.5">{selectedAsset.classification}</p>
                    </div>
                  </div>

                  <div className="mt-4 text-xs">
                    <span className="text-stone-500 font-semibold">Business Purpose & Function:</span>
                    <p className="text-stone-700 mt-0.5 leading-relaxed">{selectedAsset.businessPurpose}</p>
                  </div>

                  {/* CIA Impact Rating */}
                  <div className="mt-4 pt-4 border-t border-stone-200">
                    <span className="text-xs font-bold text-stone-800">CIA Triad Protection Priorities:</span>
                    <div className="mt-2 grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="p-2.5 rounded-xl border border-blue-200 bg-blue-50/70">
                        <span className="text-[10px] font-bold text-blue-800 uppercase block">Confidentiality</span>
                        <span className="font-black text-blue-950 text-sm mt-0.5 block">{selectedAsset.c}</span>
                      </div>
                      <div className="p-2.5 rounded-xl border border-amber-200 bg-amber-50/70">
                        <span className="text-[10px] font-bold text-amber-800 uppercase block">Integrity</span>
                        <span className="font-black text-amber-950 text-sm mt-0.5 block">{selectedAsset.i}</span>
                      </div>
                      <div className="p-2.5 rounded-xl border border-emerald-200 bg-emerald-50/70">
                        <span className="text-[10px] font-bold text-emerald-800 uppercase block">Availability</span>
                        <span className="font-black text-emerald-950 text-sm mt-0.5 block">{selectedAsset.a}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-200 text-xs">
                    <span className="text-stone-500 font-semibold">Mandatory Security Controls:</span>
                    <p className="font-mono text-xs text-stone-800 bg-white p-2.5 rounded-xl border border-stone-200 mt-1 leading-relaxed">
                      {selectedAsset.controls}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Lab 2: STRIDE Matrix Studio */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                <Workflow size={14} />
                <span>Lab 2: STRIDE Threat Modeling Matrix</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mb-4">
                Interactive STRIDE Scenario Analyzer
              </h2>

              <div className="flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-none">
                {strideCategories.map((c) => (
                  <button
                    key={c.letter}
                    onClick={() => setActiveStride(c)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                      activeStride.letter === c.letter
                        ? "bg-[#18181b] text-white shadow-xs"
                        : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                    }`}
                  >
                    {c.letter} — {c.title}
                  </button>
                ))}
              </div>

              <div className={`p-6 rounded-2xl border ${activeStride.color}`}>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-lg font-black">
                    {activeStride.letter} : {activeStride.title} Threat Analysis
                  </h3>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white/90">
                    Primary Concern: {activeStride.concern}
                  </span>
                </div>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed">{activeStride.description}</p>

                <div className="mt-4 grid gap-4 sm:grid-cols-2 text-xs">
                  <div className="p-4 rounded-xl bg-white/80 border border-black/10">
                    <span className="font-bold text-red-700 block mb-1">Plausible Exploitation Scenario:</span>
                    <p className="text-stone-700 leading-relaxed">{activeStride.example}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/80 border border-black/10">
                    <span className="font-bold text-emerald-800 block mb-1">Architectural Mitigation:</span>
                    <p className="text-stone-700 leading-relaxed">{activeStride.mitigation}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Lab 3: Qualitative Risk Matrix & CVSS Calculator */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                <Gauge size={14} />
                <span>Lab 3: Qualitative Risk Matrix & Treatment Engine</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mb-4">
                Risk Priority = Likelihood × Impact
              </h2>

              <div className="grid gap-6 lg:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">Scenario Under Review:</label>
                    <input
                      type="text"
                      value={scenarioName}
                      onChange={(e) => setScenarioName(e.target.value)}
                      className="w-full rounded-xl border border-stone-300 bg-white p-2.5 text-xs text-stone-800 font-medium"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold text-stone-700 mb-1">
                      <span>Likelihood (Feasibility & Reachability):</span>
                      <span className="text-[#ea580c]">{likelihood} / 5</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={likelihood}
                      onChange={(e) => setLikelihood(parseInt(e.target.value))}
                      className="w-full accent-[#ea580c]"
                    />
                    <div className="flex justify-between text-[10px] text-stone-400 mt-0.5">
                      <span>1: Rare / Airgapped</span>
                      <span>3: Feasible Authenticated</span>
                      <span>5: Unauthenticated Internet</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold text-stone-700 mb-1">
                      <span>Impact (Data Loss, Legal & Reputational):</span>
                      <span className="text-[#ea580c]">{impact} / 5</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={impact}
                      onChange={(e) => setImpact(parseInt(e.target.value))}
                      className="w-full accent-[#ea580c]"
                    />
                    <div className="flex justify-between text-[10px] text-stone-400 mt-0.5">
                      <span>1: Minimal Internal</span>
                      <span>3: Moderate Downtime</span>
                      <span>5: Catastrophic PII Breach</span>
                    </div>
                  </div>
                </div>

                {/* Risk Calculation Scorecard */}
                <div className={`p-6 rounded-2xl border ${riskTier.border} bg-stone-50/80 flex flex-col justify-between`}>
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-stone-500 font-mono">
                        Composite Risk Rating
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-black uppercase ${riskTier.color}`}>
                        {riskTier.label} Risk
                      </span>
                    </div>
                    <div className="mt-3 text-4xl font-black text-[#18181b]">
                      Score: {riskScore} <span className="text-lg text-stone-400 font-normal">/ 25</span>
                    </div>
                    <p className="mt-2 text-xs text-stone-600 font-medium leading-relaxed">
                      Evaluated for: <em>"{scenarioName}"</em>
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-stone-200">
                    <span className="text-xs font-bold text-stone-800 block mb-1">Recommended Treatment:</span>
                    <p className="text-xs text-[#ea580c] font-bold">{riskTier.action}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Lab 4: Rules of Engagement Drafter */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                    <FileText size={14} />
                    <span>Lab 4: Ethical Rules of Engagement (RoE) Drafter</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                    Authorization Charter & Scoping Generator
                  </h2>
                </div>

                <button
                  onClick={() => {
                    copyCode(roeDocumentText, "roe-doc");
                    setRoeCopied(true);
                    setTimeout(() => setRoeCopied(false), 2000);
                  }}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-stone-300 bg-white text-xs font-bold text-stone-700 hover:border-orange-400 hover:text-[#ea580c] transition cursor-pointer"
                >
                  {roeCopied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  <span>{roeCopied ? "Copied RoE" : "Copy RoE Contract"}</span>
                </button>
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                <div className="space-y-3 text-xs lg:col-span-1">
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">Target Host / FQDN:</label>
                    <input
                      type="text"
                      value={roeTargetDomain}
                      onChange={(e) => setRoeTargetDomain(e.target.value)}
                      className="w-full rounded-xl border border-stone-300 p-2 text-stone-800 bg-white"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">Authorized Subnet:</label>
                    <input
                      type="text"
                      value={roeIpRange}
                      onChange={(e) => setRoeIpRange(e.target.value)}
                      className="w-full rounded-xl border border-stone-300 p-2 text-stone-800 bg-white"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">Authorized Time Window:</label>
                    <input
                      type="text"
                      value={roeWindowStart}
                      onChange={(e) => setRoeWindowStart(e.target.value)}
                      className="w-full rounded-xl border border-stone-300 p-2 text-stone-800 bg-white mb-1"
                    />
                    <input
                      type="text"
                      value={roeWindowEnd}
                      onChange={(e) => setRoeWindowEnd(e.target.value)}
                      className="w-full rounded-xl border border-stone-300 p-2 text-stone-800 bg-white"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">Emergency Operations Desk:</label>
                    <input
                      type="text"
                      value={roeEmergencyPhone}
                      onChange={(e) => setRoeEmergencyPhone(e.target.value)}
                      className="w-full rounded-xl border border-stone-300 p-2 text-stone-800 bg-white"
                    />
                  </div>
                </div>

                {/* Formatted RoE Output */}
                <div className="lg:col-span-2 rounded-2xl bg-stone-900 p-4 text-stone-200 font-mono text-xs overflow-x-auto max-h-[380px]">
                  <pre className="leading-relaxed whitespace-pre-wrap">{roeDocumentText}</pre>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 3: OBSERVATION LAB (SAFE HTTP & API INSPECTION SIMULATOR)       */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "observation-lab" && (
          <div className="space-y-8">
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                <Terminal size={14} />
                <span>Lab 3: Security Observation in a Controlled Lab</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Safe HTTP Traffic & Access Control Inspection
              </h2>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                In this safe learning environment, students observe raw HTTP requests and responses to understand why authorization flaws occur. <strong>No real exploits are performed; this demonstrates how to formulate security observations from evidence.</strong>
              </p>

              {/* Endpoint Selector */}
              <div className="mt-6 flex gap-2 border-b border-stone-200 pb-3">
                <button
                  onClick={() => setSimulatedEndpoint("report_idor")}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    simulatedEndpoint === "report_idor"
                      ? "bg-[#18181b] text-white"
                      : "bg-white text-stone-600 border border-stone-200"
                  }`}
                >
                  Test 1: Student Private Report Access (IDOR)
                </button>
                <button
                  onClick={() => setSimulatedEndpoint("admin_exposure")}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    simulatedEndpoint === "admin_exposure"
                      ? "bg-[#18181b] text-white"
                      : "bg-white text-stone-600 border border-stone-200"
                  }`}
                >
                  Test 2: Administrative Privilege Endpoint Check
                </button>
              </div>

              {/* Simulation Mode Toggle (Vulnerable vs Patched) */}
              <div className="mt-4 flex items-center justify-between flex-wrap gap-2">
                <div className="text-xs font-semibold text-stone-600">
                  Inspecting: <strong>{observationEndpoints[simulatedEndpoint].name}</strong>
                </div>
                <div className="flex items-center gap-1.5 rounded-xl border border-stone-200 bg-stone-100 p-1 text-xs">
                  <button
                    onClick={() => setActiveSimulationMode("vulnerable")}
                    className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                      activeSimulationMode === "vulnerable"
                        ? "bg-red-600 text-white shadow-2xs"
                        : "text-stone-600 hover:text-stone-900"
                    }`}
                  >
                    Vulnerable Server Response
                  </button>
                  <button
                    onClick={() => setActiveSimulationMode("patched")}
                    className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                      activeSimulationMode === "patched"
                        ? "bg-emerald-600 text-white shadow-2xs"
                        : "text-stone-600 hover:text-stone-900"
                    }`}
                  >
                    Remediated Server Response
                  </button>
                </div>
              </div>

              {/* HTTP Request & Response Viewer */}
              <div className="mt-4 grid gap-4 lg:grid-cols-2 font-mono text-xs">
                {/* Outgoing HTTP Request */}
                <div className="rounded-2xl bg-stone-900 p-4 text-stone-200 border border-stone-800">
                  <div className="flex items-center justify-between text-[11px] text-stone-400 pb-2 border-b border-stone-800 mb-2">
                    <span className="font-bold text-orange-400">OUTGOING HTTP REQUEST (DevTools / Proxy)</span>
                    <span>Client: Bob (#1052)</span>
                  </div>
                  <pre className="whitespace-pre-wrap leading-relaxed text-stone-300">
                    {observationEndpoints[simulatedEndpoint].reqHeader}
                  </pre>
                </div>

                {/* Incoming HTTP Response */}
                <div className="rounded-2xl bg-stone-900 p-4 text-stone-200 border border-stone-800">
                  <div className="flex items-center justify-between text-[11px] text-stone-400 pb-2 border-b border-stone-800 mb-2">
                    <span className={`font-bold ${activeSimulationMode === "vulnerable" ? "text-red-400" : "text-emerald-400"}`}>
                      {activeSimulationMode === "vulnerable" ? "VULNERABLE RESPONSE (Flawed)" : "PATCHED RESPONSE (Secure)"}
                    </span>
                    <span>Server Status</span>
                  </div>
                  <pre className="whitespace-pre-wrap leading-relaxed text-stone-300">
                    {activeSimulationMode === "vulnerable"
                      ? observationEndpoints[simulatedEndpoint].vulnerableRes
                      : observationEndpoints[simulatedEndpoint].patchedRes}
                  </pre>
                </div>
              </div>

              {/* Flaw Analysis & Remediation Box */}
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-red-200 bg-red-50/70 p-4 text-xs text-red-950">
                  <span className="font-bold block mb-1">Security Observation & Technical Root Cause:</span>
                  <p className="leading-relaxed">{observationEndpoints[simulatedEndpoint].flawAnalysis}</p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-900 p-4 text-stone-200 font-mono text-xs">
                  <div className="flex items-center justify-between text-stone-400 pb-2 border-b border-stone-800 mb-2">
                    <span className="font-bold text-emerald-400">DEFENSIVE REMEDIATION (Node.js / Express Example)</span>
                    <button
                      onClick={() => copyCode(observationEndpoints[simulatedEndpoint].mitigationCode, "remedy-code")}
                      className="text-stone-400 hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      <Copy size={12} />
                      <span>Copy Fix</span>
                    </button>
                  </div>
                  <pre className="whitespace-pre-wrap leading-relaxed text-stone-300">
                    {observationEndpoints[simulatedEndpoint].mitigationCode}
                  </pre>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 4: APPLIED CASE STUDY (LEARN SPHERE PLATFORM ASSESSMENT)         */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "case-study" && (
          <div className="space-y-8">
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                <FileText size={14} />
                <span>Part L — Comprehensive Applied Case Study</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                LearnSphere Fictional Educational Platform Security Review
              </h2>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                <strong>Context:</strong> LearnSphere is a fictional online platform providing mock interviews, resume feedback, and personalized assessment reports. Recently, a student reported that changing an ID parameter in the URL revealed another student's private interview report. Internal audits also revealed exposed administrative endpoints.
              </p>

              {/* Tasks Breakdown Accordion/Grid */}
              <div className="mt-6 space-y-4">
                {[
                  {
                    task: "Task 1: Asset Inventory",
                    desc: "Identified 8 critical assets: Learner identities, authentication credentials/passkeys, resume files, interview transcripts, scores, admin API keys, PostgreSQL DB, and service availability.",
                  },
                  {
                    task: "Task 2: Security Objectives Mapping",
                    desc: "Confidentiality protects resumes and interview notes; Integrity prevents score tampering; Availability ensures uninterrupted mock interview rooms during scheduled slots.",
                  },
                  {
                    task: "Task 3: Threat Analysis (5 Plausible Scenarios)",
                    desc: "1) Cross-account report disclosure via IDOR; 2) Session hijacking via missing Secure/SameSite cookie flags; 3) Unauthorized student-to-admin role elevation; 4) Public S3 bucket credential leak; 5) Resource exhaustion DoS on report PDF generator.",
                  },
                  {
                    task: "Task 4: Threat Model & Trust Boundaries",
                    desc: "Established 3 distinct trust boundaries: 1) Client browser to API Gateway (HTTPS + WAF); 2) API Gateway to internal microservices (Mutual TLS + JWT verification); 3) Microservices to database and S3 (IAM roles + encryption).",
                  },
                  {
                    task: "Task 5: Risk Assessment & Prioritization",
                    desc: "IDOR on interview reports: Likelihood 4, Impact 5 -> Score 20 (Critical). Admin role elevation: Likelihood 3, Impact 5 -> Score 15 (High). Missing rate limit on login: Likelihood 4, Impact 3 -> Score 12 (Medium).",
                  },
                  {
                    task: "Task 6: Defensive Recommendations",
                    desc: "Deploy server-side ownership checks on all report routes; enforce role-based access control (RBAC) middleware; disallow mass assignment in user updates; migrate static credentials to AWS Secrets Manager.",
                  },
                  {
                    task: "Task 7: Incident Response Triage Plan",
                    desc: "1. Contain: Temporarily disable report sharing endpoint. 2. Preserve: Snapshot API access logs for forensic review. 3. Scope: Identify all report IDs accessed by unauthorized user IDs. 4. Remediate & Retest. 5. Notify affected data principals in compliance with DPDP Act 2023.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                    <h3 className="text-xs font-bold text-[#ea580c] uppercase font-mono">{item.task}</h3>
                    <p className="mt-1 text-xs text-stone-700 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 5: ASSESSMENT & QUIZ (10 QUESTIONS)                            */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "quiz" && (
          <div className="space-y-8">
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                    <Award size={14} />
                    <span>Part N — Module 1 Assessment Checkpoint</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                    University-Informed Knowledge Verification (10 Questions)
                  </h2>
                </div>

                {quizSubmitted && (
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-stone-600">Your Score:</span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-black ${
                        calculateScore() >= 8
                          ? "bg-emerald-600 text-white"
                          : calculateScore() >= 6
                          ? "bg-amber-600 text-white"
                          : "bg-red-600 text-white"
                      }`}
                    >
                      {calculateScore()} / 10 ({((calculateScore() / 10) * 100).toFixed(0)}%)
                    </span>
                  </div>
                )}
              </div>

              {/* Quiz Questions List */}
              <div className="space-y-6">
                {quizQuestions.map((q) => {
                  const userAnswer = quizAnswers[q.id];
                  const isAnswered = userAnswer !== undefined;

                  return (
                    <div
                      key={q.id}
                      className={`p-5 rounded-2xl border transition-all ${
                        quizSubmitted
                          ? userAnswer === q.correctIndex
                            ? "border-emerald-200 bg-emerald-50/40"
                            : "border-red-200 bg-red-50/40"
                          : "border-stone-200 bg-stone-50/60"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-xs sm:text-sm font-bold text-[#18181b] leading-snug">
                          {q.id}. {q.question}
                        </h3>
                        {quizSubmitted && (
                          <span className="shrink-0 mt-0.5">
                            {userAnswer === q.correctIndex ? (
                              <CheckCircle2 size={16} className="text-emerald-600" />
                            ) : (
                              <XCircle size={16} className="text-red-600" />
                            )}
                          </span>
                        )}
                      </div>

                      {/* Options */}
                      <div className="mt-3 space-y-2">
                        {q.options.map((opt, optIdx) => {
                          let optClasses =
                            "w-full text-left p-3 rounded-xl border text-xs font-medium transition cursor-pointer flex items-center justify-between ";

                          if (quizSubmitted) {
                            if (optIdx === q.correctIndex) {
                              optClasses += "border-emerald-500 bg-emerald-100 text-emerald-950 font-bold";
                            } else if (userAnswer === optIdx) {
                              optClasses += "border-red-500 bg-red-100 text-red-950 line-through";
                            } else {
                              optClasses += "border-stone-200 bg-white/70 text-stone-500";
                            }
                          } else {
                            if (userAnswer === optIdx) {
                              optClasses += "border-[#ea580c] bg-orange-100 text-[#ea580c] font-bold";
                            } else {
                              optClasses += "border-stone-200 bg-white hover:border-stone-300 text-stone-700";
                            }
                          }

                          return (
                            <button
                              key={optIdx}
                              disabled={quizSubmitted}
                              onClick={() => handleSelectOption(q.id, optIdx)}
                              className={optClasses}
                            >
                              <span>{opt}</span>
                              {quizSubmitted && optIdx === q.correctIndex && (
                                <span className="text-[10px] font-bold text-emerald-700 uppercase ml-2">Correct</span>
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Explanation */}
                      {quizSubmitted && (
                        <div className="mt-3 pt-3 border-t border-stone-200/80 text-xs text-stone-700 leading-relaxed bg-white/60 p-3 rounded-xl">
                          <strong className="text-stone-900">Academic Explanation:</strong> {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Submission & Retake Buttons */}
              <div className="mt-6 flex items-center justify-between border-t border-stone-200 pt-4">
                <div className="text-xs text-stone-500">
                  {Object.keys(quizAnswers).length} of {quizQuestions.length} answered
                </div>

                {!quizSubmitted ? (
                  <button
                    onClick={() => setQuizSubmitted(true)}
                    disabled={Object.keys(quizAnswers).length === 0}
                    className="px-6 py-2.5 rounded-xl bg-[#ea580c] text-white font-bold text-xs hover:bg-[#c2410c] transition cursor-pointer disabled:opacity-50"
                  >
                    Submit Assessment
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setQuizSubmitted(false);
                      setQuizAnswers({});
                    }}
                    className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-stone-300 bg-white text-xs font-bold text-stone-700 hover:border-orange-400 hover:text-[#ea580c] transition cursor-pointer"
                  >
                    <RotateCcw size={14} />
                    <span>Retake Quiz</span>
                  </button>
                )}
              </div>
            </section>
          </div>
        )}

        {/* Next Module Navigation Footer */}
        <div className="mt-12 flex items-center justify-between rounded-3xl border border-[#e7e3da] bg-white/80 p-6 backdrop-blur-md">
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-400">
              Up Next · Module 2
            </span>
            <h4 className="text-sm sm:text-base font-extrabold text-[#18181b]">
              Networking Fundamentals for Cybersecurity (IP, DNS, Ports & Protocols)
            </h4>
          </div>
          <button
            onClick={() => navigate("/learning/cybersecurity/networking")}
            className="flex items-center gap-2 rounded-xl bg-[#18181b] px-4 py-2.5 text-xs font-bold text-white hover:bg-stone-800 transition cursor-pointer"
          >
            <span>Proceed to Module 2</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
