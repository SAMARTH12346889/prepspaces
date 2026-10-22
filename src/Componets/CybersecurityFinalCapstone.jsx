import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModuleNav from "./ModuleNav";
import {
  Shield,
  ShieldAlert,
  ShieldCheck,
  Terminal,
  FileCode,
  FileText,
  Search,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  BookOpen,
  Award,
  HelpCircle,
  Play,
  RotateCcw,
  Sparkles,
  Check,
  X,
  Copy,
  Activity,
  Layers,
  Fingerprint,
  Radio,
  Lock,
  Unlock,
  Key,
  Server,
  Database,
  Cpu,
  Clock,
  Eye,
  FileSearch,
  Network,
  Share2,
  HardDrive,
  RefreshCw,
  FolderLock,
  Flame,
  Workflow,
  BarChart3,
  Calendar,
  Sliders,
  SlidersHorizontal,
  Compass,
  FileSignature,
  FileCheck,
  PhoneCall,
  UserCheck,
  AlertOctagon,
  Scale,
  Target,
  Crosshair,
  ClipboardList,
  Binary,
  Globe,
  Users,
  Zap,
  Bug,
  GitMerge,
  Filter,
  AlertCircle,
  Download,
  Printer,
  GraduationCap
} from "lucide-react";

export default function CybersecurityFinalCapstone() {
  const navigate = useNavigate();

  // Tab State
  const [activeTab, setActiveTab] = useState("overview");
  const [activePhase, setActivePhase] = useState(1);

  // Copy helper
  const [copiedSnippets, setCopiedSnippets] = useState({});
  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippets((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setCopiedSnippets((prev) => ({ ...prev, [id]: false }));
    }, 2000);
  };

  // ---------------------------------------------------------------------------
  // INTERACTIVE ARCHITECTURE & TRUST BOUNDARY EXPLORER
  // ---------------------------------------------------------------------------
  const [selectedBoundary, setSelectedBoundary] = useState("boundary-1");

  const trustBoundaries = [
    {
      id: "boundary-1",
      name: "Test User → Web Frontend",
      source: "Untrusted Client Browser",
      target: "Nginx Reverse Proxy / TLS Gateway",
      protocol: "HTTPS (TLS 1.3)",
      securityQuestion: "Are requests handled securely and is the exposed attack surface strictly minimized?",
      controls: "Strict Content-Security-Policy (CSP), HSTS (max-age=31536000), rate limiting (5 req/s), sanitized error pages.",
      threat: "Cross-Site Scripting (XSS), TLS misconfiguration, header injection."
    },
    {
      id: "boundary-2",
      name: "Frontend → Application API",
      source: "Web Reverse Proxy",
      target: "Node.js / Express Core REST API",
      protocol: "Internal HTTP / mTLS",
      securityQuestion: "Does the API validate requests and enforce authorization independently without trusting client headers?",
      controls: "Server-side JWT signature verification, scope validation, strict JSON schema parsing, parameterized queries.",
      threat: "Broken Object Level Authorization (BOLA/IDOR), parameter tampering, injection."
    },
    {
      id: "boundary-3",
      name: "API → Database & Object Store",
      source: "Application Backend",
      target: "PostgreSQL Database / S3 Storage",
      protocol: "Encrypted TCP / IAM SigV4",
      securityQuestion: "Does the application use a suitably restricted database identity with segregated tenant schemas?",
      controls: "Dedicated service account (no SUPERUSER), encrypted at rest (AES-256), TLS in transit, row-level security (RLS).",
      threat: "SQL injection, excessive database privileges, unauthorized cross-tenant data access."
    },
    {
      id: "boundary-4",
      name: "Application → Identity & Access Management (IAM)",
      source: "Application Services",
      target: "Auth0 / Keycloak / AWS IAM",
      protocol: "OIDC / OAuth 2.0 / SAML 2.0",
      securityQuestion: "Are sessions, roles, and administrative delegation decisions verified through least-privilege tokens?",
      controls: "Short-lived tokens (15m expiry), refresh token rotation, strict role-to-permission mapping, MFA enforcement.",
      threat: "Privilege escalation, token replay, over-scoped service role delegation."
    },
    {
      id: "boundary-5",
      name: "Workloads → Container Runtime & Host",
      source: "Docker / Kubernetes Pods",
      target: "Linux Kernel / Container Daemon",
      protocol: "cgroups / seccomp / AppArmor",
      securityQuestion: "Are container privileges, root capabilities, read-only rootfilesystems, and image signatures enforced?",
      controls: "Non-root execution (UID 10001), read-only rootfs, dropped capabilities (ALL), pinned image digests via Cosign.",
      threat: "Container escape, root privilege escalation, malicious dependency execution."
    },
    {
      id: "boundary-6",
      name: "Components → Central SIEM & Logging",
      source: "All Lab Infrastructure",
      target: "Central Elasticsearch / Wazuh SIEM",
      protocol: "Syslog-ng / TLS 6514",
      securityQuestion: "Are essential security events collected without leaking plaintext secrets or customer PII?",
      controls: "Automated redaction filters (passwords, JWTs, card numbers), HMAC log integrity hashing, immutable write-once indices.",
      threat: "Logging blindspots, secret disclosure in log streams, audit evasion."
    },
    {
      id: "boundary-7",
      name: "Workload Data → Backup & Recovery",
      source: "Database & File Storage",
      target: "Isolated Encrypted Backup Vault",
      protocol: "Encrypted Backup Agent",
      securityQuestion: "Are backup access and restoration operations isolated with independent credentials and verified RTO/RPO?",
      controls: "Air-gapped backup credentials, immutable WORM storage, quarterly restoration tabletop verification.",
      threat: "Ransomware encryption of backups, corrupted unverified backup archives."
    }
  ];

  // ---------------------------------------------------------------------------
  // INTERACTIVE FINDINGS & REMEDIATION DOSSIER (CAP-001 TO CAP-005)
  // ---------------------------------------------------------------------------
  const [capstoneFindings, setCapstoneFindings] = useState([
    {
      id: "CAP-001",
      title: "Excessive Workload Permissions in Cloud IAM",
      category: "IAM & Cloud Security",
      severity: "High",
      cvss: "7.8",
      asset: "arn:aws:iam::123456789012:role/prep-staging-api-workload",
      description: "Workload service identity possesses AdministratorAccess instead of least-privilege S3 read permissions.",
      remediation: "Replace full admin policy with tightly scoped customer managed policy granting s3:GetObject only on 'prep-staging-assets/*' bucket.",
      status: "Remediated (Pending Retest)",
      retestCheck: "API can still fetch assets; attempted iam:CreateUser or s3:DeleteBucket is denied with HTTP 403.",
      verified: false
    },
    {
      id: "CAP-002",
      title: "Broken Object-Level Authorization (BOLA) in Reports API",
      category: "Application & API Security",
      severity: "High",
      cvss: "8.1",
      asset: "https://staging-api.prepspaces.test/v1/reports/{reportId}",
      description: "Authenticated test user Bob can retrieve user Alice's confidential training report #1042 due to missing tenant query filtering.",
      remediation: "Enforce server-side ownership checks in ReportService; inject current session tenant ID into database query filter.",
      status: "In Progress",
      retestCheck: "Bob receives HTTP 403 Forbidden; Alice successfully retrieves report #1042.",
      verified: false
    },
    {
      id: "CAP-003",
      title: "Container Runtime Hardening Gap (Privileged & Write Access)",
      category: "Container Security",
      severity: "Medium",
      cvss: "6.2",
      asset: "k8s/deployments/learning-api-deployment.yaml",
      description: "Pod runs as root (UID 0) with readOnlyRootFilesystem=false and hostPID=true, violating container hardening standards.",
      remediation: "Set securityContext: runAsNonRoot=true, runAsUser=10001, readOnlyRootFilesystem=true, allowPrivilegeEscalation=false, drop ALL capabilities.",
      status: "Remediated (Pending Retest)",
      retestCheck: "Pod runs as non-root; write attempts to /etc or /bin fail with Permission Denied; application functions normally.",
      verified: false
    },
    {
      id: "CAP-004",
      title: "Missing Field Normalization in SIEM Ingestion Pipeline",
      category: "SIEM & Detection Engineering",
      severity: "Medium",
      cvss: "5.5",
      asset: "siem/pipelines/cloudtrail-logstash.conf",
      description: "Privileged role assignment events arrive in raw logs but Logstash drops 'target_role', causing detection rule to evaluate to null.",
      remediation: "Patch Logstash JSON filter to map 'requestParameters.roleArn' to normalized ECS field 'user.target.role.name'.",
      status: "Remediated (Pending Retest)",
      retestCheck: "Synthetic IAM role change event triggers high-severity SIEM alert 'Unapproved-Role-Delegation' within 15 seconds.",
      verified: false
    },
    {
      id: "CAP-005",
      title: "Unverified Backup Restoration & Recovery Assurance Gap",
      category: "Backup, Resilience & Recovery",
      severity: "Medium",
      cvss: "4.8",
      asset: "infrastructure/backup/database-backup-vault",
      description: "Database snapshots run nightly but no restoration test has ever been conducted or documented; RTO/RPO objectives unproven.",
      remediation: "Establish automated monthly restoration validation script in isolated test VPC; verify schema integrity and checksums.",
      status: "Open",
      retestCheck: "Restore test database from snapshot in sandbox, verify 100% record count and table parity, document RTO latency.",
      verified: false
    }
  ]);

  const toggleVerifyFinding = (id) => {
    setCapstoneFindings((prev) =>
      prev.map((f) =>
        f.id === id ? { ...f, verified: !f.verified, status: !f.verified ? "Closed (Fixed)" : "Remediated (Pending Retest)" } : f
      )
    );
  };

  // ---------------------------------------------------------------------------
  // INTERACTIVE INCIDENT-RESPONSE TABLETOP SIMULATOR
  // ---------------------------------------------------------------------------
  const [tabletopStep, setTabletopStep] = useState(1);
  const [tabletopHistory, setTabletopHistory] = useState([]);
  const [tabletopScore, setTabletopScore] = useState(0);

  const handleTabletopChoice = (step, title, isOptimal, rationale) => {
    setTabletopHistory((prev) => [...prev, { step, title, isOptimal, rationale }]);
    if (isOptimal) setTabletopScore((s) => s + 25);
    setTabletopStep(step + 1);
  };

  const resetTabletop = () => {
    setTabletopStep(1);
    setTabletopHistory([]);
    setTabletopScore(0);
  };

  // ---------------------------------------------------------------------------
  // 10-POINT FINAL CAPSTONE READINESS CHECKLIST
  // ---------------------------------------------------------------------------
  const [checklist, setChecklist] = useState({
    c1: true,
    c2: true,
    c3: true,
    c4: false,
    c5: false,
    c6: false,
    c7: false,
    c8: false,
    c9: false,
    c10: false,
  });

  const toggleChecklist = (key) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const checklistTotal = Object.values(checklist).filter(Boolean).length;

  // ---------------------------------------------------------------------------
  // CERTIFICATE OF COMPLETION GENERATOR
  // ---------------------------------------------------------------------------
  const [certStudentName, setCertStudentName] = useState("Security Professional");
  const [certIssuedDate] = useState("October 22, 2026");

  // ---------------------------------------------------------------------------
  // QUIZ - 6 FINAL QUESTIONS (FROM SPECIFICATION)
  // ---------------------------------------------------------------------------
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: "q1",
      question: "What is the main goal of the final capstone?",
      options: [
        "Run as many security tools as possible.",
        "Complete an authorized assessment, document findings, remediate weaknesses, retest and demonstrate defensive readiness.",
        "Prove that every possible vulnerability has been found.",
        "Build the largest lab architecture regardless of available resources."
      ],
      correctIndex: 1,
      explanation: "The final capstone integrates technical assessment with risk management, root-cause remediation, detection engineering, and verified retesting across the full lifecycle: Assess → Document → Secure → Retest → Defend → Improve."
    },
    {
      id: "q2",
      question: "A seeded finding has not been independently reproduced. What should the assessor do?",
      options: [
        "Report it as confirmed because it appears in the training scenario.",
        "Delete it from the final report.",
        "Record the evidence status, validate the condition where possible, and document limitations or differences in the lab.",
        "Assign it Critical severity without further review."
      ],
      correctIndex: 2,
      explanation: "Assessor integrity demands recording the exact empirical state. Unreproduced items must be documented with their evidence status and testing limitations rather than falsely claimed as confirmed."
    },
    {
      id: "q3",
      question: "What is the best way to verify an application authorization fix?",
      options: [
        "Use dedicated test identities and synthetic records to check both allowed and denied access.",
        "Trust the deployment log without testing behavior.",
        "Test only whether the application homepage loads.",
        "Access real user records to increase confidence."
      ],
      correctIndex: 0,
      explanation: "Verification requires both positive testing (authorized user succeeds) and negative testing (unauthorized user receives HTTP 403) using safe, synthetic identities."
    },
    {
      id: "q4",
      question: "A synthetic security event exists in raw logs but the detection fails because a required field is missing. What should the team do first?",
      options: [
        "Disable the alert rule permanently.",
        "Declare the incident resolved.",
        "Increase all alert thresholds.",
        "Identify and correct the earliest confirmed collection, parsing or normalization failure, then retest."
      ],
      correctIndex: 3,
      explanation: "When raw telemetry exists but detection fails due to a missing field, this is a data-quality/normalization defect. The team must trace the pipeline to find the earliest drop and patch the parser before tuning the rule."
    },
    {
      id: "q5",
      question: "A backup configuration exists, but no restoration test has been performed. What can be concluded?",
      options: [
        "Recovery is guaranteed.",
        "The plan exists, but successful recovery has not yet been demonstrated.",
        "The backup should be deleted.",
        "No recovery validation is necessary."
      ],
      correctIndex: 1,
      explanation: "Backups are merely assumptions until proven through restoration. Having a configuration or snapshot without an empirical restore test leaves recovery unverified."
    },
    {
      id: "q6",
      question: "Which evidence best supports closing a remediated finding?",
      options: [
        "A verbal statement that the code was fixed.",
        "A new report with the finding omitted.",
        "A documented retest showing the expected security behavior, along with relevant regression results and limitations.",
        "The original scanner output alone."
      ],
      correctIndex: 2,
      explanation: "Closure requires verifiable proof: a documented retest showing that the specific vulnerability is mitigated, neighboring functionality works without regression, and any residual limitations are recorded."
    }
  ];

  const handleSelectQuizAnswer = (qId, optionIdx) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateQuizScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correctIndex) {
        score++;
      }
    });
    return score;
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 antialiased font-sans relative pb-20 selection:bg-orange-500 selection:text-white">
      {/* Top Atmospheric Glows */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-emerald-200/25 rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed top-20 right-1/4 w-96 h-96 bg-orange-200/25 rounded-full blur-[90px] pointer-events-none" />
      <div className="fixed bottom-20 left-1/3 w-80 h-80 bg-purple-200/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Track & Module Navigation */}
      <ModuleNav track="cybersecurity" currentModuleId="final-capstone" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* ========================================================================= */}
        {/* HERO CARD - FINAL CAPSTONE                                                */}
        {/* ========================================================================= */}
        <div className="rounded-3xl border border-[#e7e3da] bg-white/80 p-6 md:p-10 backdrop-blur-md shadow-xs mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-bl from-emerald-400/10 via-orange-400/5 to-transparent rounded-bl-full pointer-events-none" />

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-950 border border-emerald-200">
              <Award className="w-3.5 h-3.5 text-emerald-600" />
              Module 24: Final Capstone
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-stone-100 text-stone-700 border border-stone-200">
              Masterclass Culmination
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
              Full Security Lifecycle
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-purple-50 text-purple-700 border border-purple-200">
              Assess • Secure • Retest • Defend
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-stone-900 mb-4">
            Final Capstone: Assess, Document, Secure, Retest, and Defend a Complete Lab Environment
          </h1>

          <p className="text-base md:text-lg text-stone-600 max-w-4xl leading-relaxed mb-6">
            Bring together the complete 24-module curriculum into an end-to-end security assessment and defense project for <strong>PrepSpaces Learning Systems</strong>. Operate as a Lead Security Consultant and Detection Engineer: establish asset inventories and trust boundaries, assess web and cloud IAM configurations, collect sanitized proof-of-concept evidence, remediate root causes under <strong>NIST SP 800-218 (SSDF)</strong>, engineer SIEM detection pipelines with <strong>MITRE ATT&CK v20.0</strong>, lead an incident-response tabletop under <strong>NIST SP 800-61 Rev. 3</strong>, and execute verified retests under <strong>NIST CSF 2.0</strong>.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#e7e3da]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <Workflow className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-stone-500 font-medium">Core Workflow</p>
                <p className="text-sm font-bold text-stone-800">6 Project Phases</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#f97316]">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-stone-500 font-medium">Core Findings</p>
                <p className="text-sm font-bold text-stone-800">5 Seeded Scenarios</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-stone-500 font-medium">Practice</p>
                <p className="text-sm font-bold text-stone-800">6 Interactive Labs</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-stone-500 font-medium">Outcome</p>
                <p className="text-sm font-bold text-stone-800">Course Certificate</p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* NAVIGATION TABS                                                           */}
        {/* ========================================================================= */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-[#e7e3da] pb-3">
          <button
            onClick={() => setActiveTab("overview")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition cursor-pointer ${
              activeTab === "overview"
                ? "bg-[#18181b] text-white shadow-xs"
                : "bg-white text-stone-600 hover:text-stone-900 border border-stone-200"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>1. Capstone Phases &amp; Architecture</span>
          </button>

          <button
            onClick={() => setActiveTab("labs")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition cursor-pointer ${
              activeTab === "labs"
                ? "bg-[#18181b] text-white shadow-xs"
                : "bg-white text-stone-600 hover:text-stone-900 border border-stone-200"
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>2. Practical Implementation Labs</span>
          </button>

          <button
            onClick={() => setActiveTab("findings")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition cursor-pointer ${
              activeTab === "findings"
                ? "bg-[#18181b] text-white shadow-xs"
                : "bg-white text-stone-600 hover:text-stone-900 border border-stone-200"
            }`}
          >
            <Bug className="w-4 h-4" />
            <span>3. Seeded Findings Dossier (CAP-001–005)</span>
          </button>

          <button
            onClick={() => setActiveTab("tabletop")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition cursor-pointer ${
              activeTab === "tabletop"
                ? "bg-[#18181b] text-white shadow-xs"
                : "bg-white text-stone-600 hover:text-stone-900 border border-stone-200"
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>4. Incident Response Tabletop</span>
          </button>

          <button
            onClick={() => setActiveTab("quiz")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition cursor-pointer ${
              activeTab === "quiz"
                ? "bg-[#18181b] text-white shadow-xs"
                : "bg-white text-stone-600 hover:text-stone-900 border border-stone-200"
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>5. Capstone Knowledge Exam</span>
          </button>

          <button
            onClick={() => setActiveTab("rubric")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition cursor-pointer ${
              activeTab === "rubric"
                ? "bg-[#18181b] text-white shadow-xs"
                : "bg-white text-stone-600 hover:text-stone-900 border border-stone-200"
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>6. 100-Point Grading Rubric</span>
          </button>

          <button
            onClick={() => setActiveTab("certificate")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition cursor-pointer ${
              activeTab === "certificate"
                ? "bg-[#18181b] text-white shadow-xs"
                : "bg-white text-stone-600 hover:text-stone-900 border border-stone-200"
            }`}
          >
            <Award className="w-4 h-4 text-emerald-500" />
            <span>7. Certificate of Completion</span>
          </button>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: PHASES & ARCHITECTURE                                              */}
        {/* ========================================================================= */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* The 6 Core Phases Flow */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 md:p-8 shadow-xs space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <span className="text-xs font-bold text-emerald-600 tracking-wider uppercase">Project Methodology</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">
                  The End-to-End Security Assessment Lifecycle
                </h2>
                <p className="text-sm text-stone-500 mt-1">
                  Assess → Document → Secure → Retest → Defend → Improve
                </p>
              </div>

              {/* Phase Navigator */}
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 text-xs">
                {[
                  { num: 1, title: "1. Scope & Plan" },
                  { num: 2, title: "2. Baseline & Threat" },
                  { num: 3, title: "3. Assess & Validate" },
                  { num: 4, title: "4. Prioritize & Fix" },
                  { num: 5, title: "5. Detect & Defend" },
                  { num: 6, title: "6. Retest & Close" },
                ].map((p) => (
                  <button
                    key={p.num}
                    onClick={() => setActivePhase(p.num)}
                    className={`p-3 rounded-xl border text-center font-bold transition cursor-pointer ${
                      activePhase === p.num
                        ? "border-emerald-500 bg-emerald-50 text-emerald-950 shadow-xs"
                        : "border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700"
                    }`}
                  >
                    {p.title}
                  </button>
                ))}
              </div>

              {/* Active Phase Details */}
              <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-4 text-xs leading-relaxed text-stone-700">
                {activePhase === 1 && (
                  <div className="space-y-3">
                    <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                      <FileSignature className="w-4 h-4 text-emerald-600" />
                      Phase 1: Engagement Planning, Scope Boundaries &amp; Authorization
                    </h3>
                    <p>
                      Establish what will be assessed, why, and which actions are authorized. Before executing any technical actions, author Deliverable A (Engagement Charter) and Deliverable B (Asset Inventory) with explicit Rules of Engagement (RoE).
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3 bg-white rounded-xl border border-stone-200">
                        <strong className="text-stone-900 block mb-1">Deliverable A: Charter &amp; RoE</strong>
                        <p className="text-stone-600">Explicitly defines authorized local staging subnets, designated synthetic credentials, emergency stop triggers (latency &gt; 2000ms), and contact trees.</p>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-stone-200">
                        <strong className="text-stone-900 block mb-1">Deliverable B: Asset Inventory</strong>
                        <p className="text-stone-600">Documents frontend, API, identity provider, database schemas, container registries, and logging servers with unique IDs and criticality ratings.</p>
                      </div>
                    </div>
                  </div>
                )}

                {activePhase === 2 && (
                  <div className="space-y-3">
                    <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                      <Compass className="w-4 h-4 text-blue-600" />
                      Phase 2: Baseline Establishment &amp; Threat Modeling
                    </h3>
                    <p>
                      Understand intended security policies before testing. Compare observed configurations against established baselines under <strong>NIST CSF 2.0</strong> (Govern, Identify, Protect, Detect, Respond, Recover) and <strong>OWASP ASVS v5.0.0 (May 2025)</strong>.
                    </p>
                    <div className="p-3 bg-white rounded-xl border border-stone-200">
                      <strong className="text-stone-900">Trust Boundary Analysis:</strong>
                      <p className="text-stone-600 mt-1">
                        Ensure the API enforces authorization independently rather than trusting frontend client headers. Document data flows, privilege boundaries, and encryption in transit across all internal microservices.
                      </p>
                    </div>
                  </div>
                )}

                {activePhase === 3 && (
                  <div className="space-y-3">
                    <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                      <Bug className="w-4 h-4 text-rose-600" />
                      Phase 3: Assess, Validate and Document Weaknesses
                    </h3>
                    <p>
                      Conduct safe, controlled assessments across 8 workstreams: Application, API, Cloud IAM, Containers, Network, Security Monitoring, and Backup. Validate the 5 Seeded Findings (CAP-001 through CAP-005) using synthetic identities and minimal proof-of-concept evidence.
                    </p>
                    <div className="p-3 bg-white rounded-xl border border-stone-200 font-mono text-[11px] text-stone-800">
                      Validation Rule: Confirm scope → State expected secure policy → Execute least-intrusive test → Capture sanitized request/response pair → Calculate SHA-256 hash → Stop once flaw is proven.
                    </div>
                  </div>
                )}

                {activePhase === 4 && (
                  <div className="space-y-3">
                    <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                      <Scale className="w-4 h-4 text-orange-600" />
                      Phase 4: Prioritize Risk and Remediate Root Causes
                    </h3>
                    <p>
                      Score vulnerabilities using <strong>FIRST CVSS v4.0</strong> (Base, Threat, Environmental, Supplemental) and prioritize against the <strong>CISA KEV Catalog</strong>. Address the root-cause design defects under <strong>NIST SP 800-218 (SSDF)</strong> rather than applying superficial point fixes.
                    </p>
                    <div className="p-3 bg-white rounded-xl border border-stone-200">
                      <strong className="text-stone-900">Remediation Register:</strong>
                      <p className="text-stone-600 mt-1">
                        Assign each finding an accountable engineering owner, SLA due date, root-cause code/config fix, and explicit retest acceptance criteria.
                      </p>
                    </div>
                  </div>
                )}

                {activePhase === 5 && (
                  <div className="space-y-3">
                    <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-purple-600" />
                      Phase 5: Strengthen Detection Engineering &amp; Incident Response
                    </h3>
                    <p>
                      Validate that the lab detects selected suspicious behaviors under <strong>MITRE ATT&CK Enterprise v20.0 (October 2026)</strong>. Verify the complete telemetry pipeline (Source → Collector → Normalization → Detection Analytic → Alert Delivery) and execute the incident-response tabletop under <strong>NIST SP 800-61 Rev. 3</strong>.
                    </p>
                  </div>
                )}

                {activePhase === 6 && (
                  <div className="space-y-3">
                    <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                      <RefreshCw className="w-4 h-4 text-emerald-600" />
                      Phase 6: Retesting, Regression Testing &amp; Documented Closure
                    </h3>
                    <p>
                      Perform empirical retests against the 5 findings using positive (permitted access) and negative (denied access) checks. Assign accurate final statuses (Closed - Fixed, Partially Remediated, Risk Accepted) and deliver the executive report with residual risk documentation.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Interactive Architecture & Trust Boundary Explorer */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 md:p-8 shadow-xs space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">Interactive Architecture</span>
                <h2 className="text-2xl font-extrabold text-stone-900 mt-1">
                  Lab Architecture &amp; Trust Boundary Explorer
                </h2>
                <p className="text-sm text-stone-500 mt-1">
                  Inspect communications, identities, protocols, and security controls across all 7 lab boundaries.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Boundary List */}
                <div className="space-y-2">
                  <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">Select Trust Boundary</p>
                  {trustBoundaries.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => setSelectedBoundary(b.id)}
                      className={`w-full text-left p-3 rounded-xl border text-xs font-medium transition cursor-pointer ${
                        selectedBoundary === b.id
                          ? "border-blue-500 bg-blue-50 text-blue-950 font-bold shadow-xs"
                          : "border-stone-200 bg-white hover:bg-stone-50 text-stone-700"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{b.name}</span>
                        <ChevronRight className={`w-3.5 h-3.5 ${selectedBoundary === b.id ? "text-blue-600" : "text-stone-400"}`} />
                      </div>
                      <span className="text-[10px] text-stone-500 block mt-0.5 font-mono">{b.protocol}</span>
                    </button>
                  ))}
                </div>

                {/* Boundary Inspector Card */}
                <div className="lg:col-span-2">
                  {(() => {
                    const active = trustBoundaries.find((b) => b.id === selectedBoundary);
                    if (!active) return null;
                    return (
                      <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-4 text-xs">
                        <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                          <div>
                            <span className="text-[10px] font-bold text-blue-600 uppercase">Boundary Inspection</span>
                            <h3 className="text-base font-bold text-stone-900 mt-0.5">{active.name}</h3>
                          </div>
                          <span className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 font-mono font-bold text-[10px]">
                            {active.protocol}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-3 text-stone-700">
                          <div>
                            <span className="font-bold text-stone-500 block">Originating Source:</span>
                            <span className="font-semibold">{active.source}</span>
                          </div>
                          <div>
                            <span className="font-bold text-stone-500 block">Receiving Target:</span>
                            <span className="font-semibold">{active.target}</span>
                          </div>
                        </div>

                        <div className="p-3 bg-white rounded-xl border border-stone-200">
                          <strong className="text-stone-900 block mb-1">Core Security Question:</strong>
                          <p className="text-stone-700 italic">&quot;{active.securityQuestion}&quot;</p>
                        </div>

                        <div className="p-3 bg-white rounded-xl border border-stone-200">
                          <strong className="text-stone-900 block mb-1">Required Protective Controls:</strong>
                          <p className="text-stone-700">{active.controls}</p>
                        </div>

                        <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl">
                          <strong className="text-rose-950 block mb-0.5">Primary Threat Vectors:</strong>
                          <p className="text-rose-900">{active.threat}</p>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: PRACTICAL IMPLEMENTATION LABS                                      */}
        {/* ========================================================================= */}
        {activeTab === "labs" && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 md:p-8 shadow-xs space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">Hands-On Practice</span>
                <h2 className="text-2xl font-extrabold text-stone-900 mt-1">
                  6 Practical Implementation Labs &amp; Readiness Checklist
                </h2>
                <p className="text-sm text-stone-500 mt-1">
                  Execute practical tasks across architecture, IAM, container hardening, SIEM detection, and recovery validation.
                </p>
              </div>

              {/* 6 Implementation Labs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
                    <Compass className="w-4 h-4 text-blue-600" />
                    <span>Lab 1: Architecture, Inventory &amp; Threat Model</span>
                  </div>
                  <p className="text-stone-600">
                    Draft system diagrams across frontend, API, identity, and database; document 7 trust boundaries; assign asset criticality; produce an asset inventory CSV.
                  </p>
                  <p className="text-[11px] font-mono text-blue-700">Deliverable: architecture.md, asset-inventory.csv</p>
                </div>

                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
                    <Key className="w-4 h-4 text-orange-600" />
                    <span>Lab 2: Application &amp; IAM Security Assessment</span>
                  </div>
                  <p className="text-stone-600">
                    Audit sample workload IAM policy (CAP-001) and API authorization controller (CAP-002); formulate least-privilege JSON policies and server-side tenant checks.
                  </p>
                  <p className="text-[11px] font-mono text-orange-700">Deliverable: iam-remediation.json, api-auth-test.sh</p>
                </div>

                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
                    <Server className="w-4 h-4 text-purple-600" />
                    <span>Lab 3: Container &amp; Configuration Hardening</span>
                  </div>
                  <p className="text-stone-600">
                    Inspect Dockerfile and Kubernetes deployment manifest (CAP-003); eliminate root execution (runAsUser: 10001); drop ALL capabilities; set readOnlyRootFilesystem: true.
                  </p>
                  <p className="text-[11px] font-mono text-purple-700">Deliverable: hardened-deployment.yaml</p>
                </div>

                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
                    <Activity className="w-4 h-4 text-rose-600" />
                    <span>Lab 4: SIEM Detection &amp; Incident Tabletop</span>
                  </div>
                  <p className="text-stone-600">
                    Trace missing field &apos;target_role&apos; in Logtrail pipeline (CAP-004); patch Logstash parser; run synthetic IAM role delegation test; verify alert delivery in 15 seconds.
                  </p>
                  <p className="text-[11px] font-mono text-rose-700">Deliverable: detection-spec.md, incident-timeline.md</p>
                </div>

                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
                    <HardDrive className="w-4 h-4 text-emerald-600" />
                    <span>Lab 5: Backup &amp; Recovery Validation</span>
                  </div>
                  <p className="text-stone-600">
                    Assess backup vault access separation (CAP-005); define RTO/RPO metrics; execute isolated test restoration in sandbox; record checksum parity and restore limitations.
                  </p>
                  <p className="text-[11px] font-mono text-emerald-700">Deliverable: recovery-validation-report.md</p>
                </div>

                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
                    <FileCheck className="w-4 h-4 text-stone-700" />
                    <span>Lab 6: Final Evidence QA &amp; Report Sign-Off</span>
                  </div>
                  <p className="text-stone-600">
                    Cross-reference finding IDs against evidence hashes; verify no unredacted credentials exist; validate executive summary; document residual risk register.
                  </p>
                  <p className="text-[11px] font-mono text-stone-700">Deliverable: executive-report.pdf, residual-risk.csv</p>
                </div>
              </div>

              {/* 10-Point Readiness Checklist */}
              <div className="mt-8 p-6 rounded-2xl border border-stone-200 bg-white space-y-4">
                <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                  <div>
                    <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                      <ClipboardList className="w-4 h-4 text-emerald-600" />
                      10-Point Final Capstone Readiness Checklist
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">Verify each requirement before submitting final capstone deliverables for grading.</p>
                  </div>
                  <button
                    onClick={() => setChecklist({ c1: false, c2: false, c3: false, c4: false, c5: false, c6: false, c7: false, c8: false, c9: false, c10: false })}
                    className="text-xs text-stone-500 hover:text-stone-800 underline cursor-pointer"
                  >
                    Reset All
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  {[
                    { key: "c1", label: "Authorization, scope, exclusions and Rules of Engagement documented." },
                    { key: "c2", label: "Asset inventory, architecture diagram and 7 trust boundaries complete." },
                    { key: "c3", label: "Security baseline and verification objectives defined under ASVS/NIST." },
                    { key: "c4", label: "Findings have evidence, status, CVSS v4.0 scores, and limitations." },
                    { key: "c5", label: "Remediation actions have owners, SLA priorities, and acceptance criteria." },
                    { key: "c6", label: "Application, IAM, container and configuration fixes reviewed." },
                    { key: "c7", label: "Selected security events and detection pipeline validated." },
                    { key: "c8", label: "Incident-response tabletop and recovery-validation documented." },
                    { key: "c9", label: "Retest and regression results support each closure decision." },
                    { key: "c10", label: "Final report records outstanding issues, residual risk and follow-ups." },
                  ].map((item) => (
                    <label
                      key={item.key}
                      onClick={() => toggleChecklist(item.key)}
                      className={`flex items-start gap-2.5 p-3 rounded-xl border transition cursor-pointer ${
                        checklist[item.key]
                          ? "bg-emerald-50/60 border-emerald-300 text-stone-900"
                          : "bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checklist[item.key]}
                        onChange={() => {}}
                        className="mt-0.5 rounded text-emerald-600 cursor-pointer"
                      />
                      <span className="text-[11px] font-medium leading-snug">{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: SEEDED FINDINGS DOSSIER (CAP-001 TO CAP-005)                       */}
        {/* ========================================================================= */}
        {activeTab === "findings" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 md:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4 mb-6">
                <div>
                  <span className="text-xs font-bold text-orange-600 tracking-wider uppercase">Training Findings Dossier</span>
                  <h2 className="text-2xl font-extrabold text-stone-900 mt-1">
                    5 Seeded Assessment Findings (CAP-001 – CAP-005)
                  </h2>
                  <p className="text-sm text-stone-500 mt-1">
                    Review, remediate, and independently verify each finding across the security lifecycle.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {capstoneFindings.map((f) => (
                  <div key={f.id} className="p-5 rounded-2xl border border-stone-200 bg-stone-50/50 space-y-3 text-xs">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-purple-700 text-sm">{f.id}</span>
                        <span className="font-bold text-stone-900 text-sm">{f.title}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-medium text-[10px]">{f.category}</span>
                        <span className="px-2 py-0.5 rounded bg-orange-100 text-orange-800 font-mono font-bold text-[10px]">CVSS v4: {f.cvss} ({f.severity})</span>
                        <span className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                          f.status === "Closed (Fixed)"
                            ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                            : "bg-amber-100 text-amber-800 border border-amber-200"
                        }`}>
                          {f.status}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-stone-700">
                      <div>
                        <span className="font-bold text-stone-500 block">Affected Component / Asset:</span>
                        <code className="bg-stone-200 px-1 py-0.5 rounded text-[11px] text-stone-800">{f.asset}</code>
                      </div>
                      <div>
                        <span className="font-bold text-stone-500 block">Defect Summary:</span>
                        <span>{f.description}</span>
                      </div>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-stone-200 space-y-1">
                      <strong className="text-stone-900">Root-Cause Remediation:</strong>
                      <p className="text-stone-700">{f.remediation}</p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                      <div className="text-stone-600">
                        <strong className="text-stone-800">Retest Verification Assertion:</strong> {f.retestCheck}
                      </div>
                      <button
                        onClick={() => toggleVerifyFinding(f.id)}
                        className={`px-3 py-1.5 rounded-xl font-bold text-xs transition cursor-pointer flex items-center gap-1.5 ${
                          f.verified
                            ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-xs"
                            : "bg-stone-900 text-white hover:bg-stone-800"
                        }`}
                      >
                        {f.verified ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                        {f.verified ? "Verified Fixed" : "Execute Retest Assertion"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: INCIDENT-RESPONSE TABLETOP SIMULATOR                                */}
        {/* ========================================================================= */}
        {activeTab === "tabletop" && (
          <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 md:p-8 shadow-xs space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
              <div>
                <span className="text-xs font-bold text-purple-600 tracking-wider uppercase">NIST SP 800-61 Tabletop</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">
                  Incident Response Tabletop: Privilege Escalation &amp; Container Drift
                </h2>
                <p className="text-sm text-stone-500 mt-1">
                  Coordinate investigation, evidence preservation, and containment across a multi-alert synthetic crisis.
                </p>
              </div>
              <button
                onClick={resetTabletop}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-stone-200 text-stone-600 hover:bg-stone-100 text-xs font-semibold cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset Tabletop
              </button>
            </div>

            {tabletopStep === 1 && (
              <div className="p-5 rounded-2xl border border-rose-200 bg-rose-50/40 space-y-3 text-xs">
                <div className="flex items-center gap-2 text-rose-700 font-bold">
                  <Activity className="w-4 h-4 animate-pulse" />
                  <span>ALERT 1 (10:14:02 UTC): Unapproved IAM Privileged Role Delegation</span>
                </div>
                <p className="text-stone-700">
                  The SIEM alerts on a synthetic role assignment on <code className="bg-white px-1 py-0.5 rounded border border-stone-200">prep-staging-api-workload</code> granting full administrative access. Concurrently, normalized logs show <code className="bg-white px-1 py-0.5 rounded border border-stone-200">target_role</code> is missing due to a parser defect. What is your immediate action?
                </p>
                <div className="space-y-2 pt-1">
                  <button
                    onClick={() => handleTabletopChoice(1, "Preserve raw CloudTrail logs and isolate actor session", true, "Optimal! Preserves evidence and immediately restricts suspicious session without destroying forensic traces.")}
                    className="w-full text-left p-3 rounded-xl border border-stone-200 bg-white hover:border-emerald-500 hover:bg-emerald-50/30 transition cursor-pointer font-medium"
                  >
                    1. Preserve raw CloudTrail logs, verify initiating session IP, and temporarily isolate the workload token pending investigation.
                  </button>
                  <button
                    onClick={() => handleTabletopChoice(1, "Immediately reboot all cloud servers", false, "Incorrect! Powering down or rebooting cloud servers destroys volatile forensic evidence and session logs.")}
                    className="w-full text-left p-3 rounded-xl border border-stone-200 bg-white hover:border-rose-500 hover:bg-rose-50/30 transition cursor-pointer font-medium"
                  >
                    2. Immediately reboot all container clusters and cloud instances to wipe any running processes.
                  </button>
                </div>
              </div>
            )}

            {tabletopStep === 2 && (
              <div className="p-5 rounded-2xl border border-amber-200 bg-amber-50/40 space-y-3 text-xs">
                <div className="flex items-center gap-2 text-amber-700 font-bold">
                  <Flame className="w-4 h-4" />
                  <span>ALERT 2 (10:18:40 UTC): Container Configuration Drift Detected</span>
                </div>
                <p className="text-stone-700">
                  Four minutes later, a separate security scan flags that Pod <code className="bg-white px-1 py-0.5 rounded border border-stone-200">api-deployment-7f89c</code> was launched with <code className="bg-white px-1 py-0.5 rounded border border-stone-200">privileged: true</code> and root write permissions. How do you correlate these events?
                </p>
                <div className="space-y-2 pt-1">
                  <button
                    onClick={() => handleTabletopChoice(2, "Correlate actor identity across Kubernetes audit logs and CloudTrail", true, "Optimal! Traces the audit trail to verify whether the compromised IAM role was used to authenticate to EKS/GKE.")}
                    className="w-full text-left p-3 rounded-xl border border-stone-200 bg-white hover:border-emerald-500 hover:bg-emerald-50/30 transition cursor-pointer font-medium"
                  >
                    1. Cross-reference the initiating IAM principal against Kubernetes API audit logs to determine if the privilege escalation was used to deploy the privileged container.
                  </button>
                  <button
                    onClick={() => handleTabletopChoice(2, "Assume the two alerts are completely unrelated and close the container ticket", false, "Incorrect! Dismissing concurrent high-severity alerts without timeline correlation is a critical investigative failure.")}
                    className="w-full text-left p-3 rounded-xl border border-stone-200 bg-white hover:border-rose-500 hover:bg-rose-50/30 transition cursor-pointer font-medium"
                  >
                    2. Treat them as unrelated false alarms and delete the container alert without reviewing cluster logs.
                  </button>
                </div>
              </div>
            )}

            {tabletopStep >= 3 && (
              <div className="p-5 rounded-2xl border border-emerald-200 bg-emerald-50/40 space-y-3 text-xs">
                <p className="font-bold text-emerald-950 text-sm">Tabletop Investigation Complete!</p>
                <p className="text-stone-700">
                  You successfully executed the NIST SP 800-61 Rev. 3 incident lifecycle: Identification → Containment → Eradication → Recovery. Tabletop Score: <strong>{tabletopScore} / 50</strong>.
                </p>
                <div className="space-y-1.5 pt-1">
                  {tabletopHistory.map((h, i) => (
                    <div key={i} className={`p-2.5 rounded-lg border text-[11px] ${
                      h.isOptimal ? "bg-white border-emerald-200 text-emerald-950" : "bg-white border-rose-200 text-rose-950"
                    }`}>
                      <strong>Step {h.step}:</strong> {h.title} — <em>{h.rationale}</em>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: KNOWLEDGE CHECK (QUIZ)                                             */}
        {/* ========================================================================= */}
        {activeTab === "quiz" && (
          <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 md:p-8 shadow-xs space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
              <div>
                <span className="text-xs font-bold text-emerald-600 tracking-wider uppercase">Course Evaluation</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">
                  Final Capstone Comprehensive Exam
                </h2>
                <p className="text-sm text-stone-500 mt-1">
                  Validate your mastery of end-to-end cybersecurity assessment, risk prioritization, and verified defense.
                </p>
              </div>

              {quizSubmitted && (
                <div className="flex items-center gap-3 bg-stone-50 px-4 py-2 rounded-2xl border border-stone-200">
                  <span className="text-xs font-bold text-stone-600">Final Score:</span>
                  <span className={`text-base font-black ${
                    calculateQuizScore() >= 5 ? "text-emerald-600" : "text-orange-600"
                  }`}>
                    {calculateQuizScore()} / {quizQuestions.length} ({Math.round((calculateQuizScore() / quizQuestions.length) * 100)}%)
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {quizQuestions.map((q, idx) => (
                <div key={q.id} className="p-5 rounded-2xl border border-stone-200 bg-stone-50/50 space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="w-6 h-6 rounded-lg bg-emerald-100 border border-emerald-200 flex items-center justify-center text-xs font-bold text-emerald-950 shrink-0">
                      {idx + 1}
                    </span>
                    <h3 className="font-bold text-stone-900 text-sm leading-snug">{q.question}</h3>
                  </div>

                  <div className="space-y-2 pt-1">
                    {q.options.map((opt, optIdx) => {
                      const isSelected = quizAnswers[q.id] === optIdx;
                      const isCorrect = q.correctIndex === optIdx;
                      let btnStyle = "border-stone-200 bg-white hover:bg-stone-50 text-stone-700";

                      if (quizSubmitted) {
                        if (isCorrect) {
                          btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold";
                        } else if (isSelected && !isCorrect) {
                          btnStyle = "border-rose-500 bg-rose-50 text-rose-950 font-semibold";
                        } else {
                          btnStyle = "border-stone-200 bg-white text-stone-400";
                        }
                      } else if (isSelected) {
                        btnStyle = "border-emerald-500 bg-emerald-50 font-semibold text-stone-900";
                      }

                      return (
                        <button
                          key={optIdx}
                          disabled={quizSubmitted}
                          onClick={() => handleSelectQuizAnswer(q.id, optIdx)}
                          className={`w-full text-left p-3 rounded-xl border text-xs transition cursor-pointer flex items-center gap-3 ${btnStyle}`}
                        >
                          <span className="w-5 h-5 rounded-full border border-stone-300 flex items-center justify-center font-bold text-[10px] shrink-0">
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  {quizSubmitted && (
                    <div className="mt-2 p-3 rounded-xl bg-white border border-stone-200 text-xs text-stone-600 leading-relaxed">
                      <strong className="text-stone-900">Explanation: </strong>
                      {q.explanation}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-stone-200">
              {!quizSubmitted ? (
                <button
                  onClick={() => setQuizSubmitted(true)}
                  disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold text-xs transition shadow-xs cursor-pointer"
                >
                  Submit &amp; Grade Final Exam
                </button>
              ) : (
                <button
                  onClick={resetQuiz}
                  className="px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs transition shadow-xs cursor-pointer flex items-center gap-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Retake Exam
                </button>
              )}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 6: 100-POINT GRADING RUBRIC                                           */}
        {/* ========================================================================= */}
        {activeTab === "rubric" && (
          <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 md:p-8 shadow-xs space-y-6">
            <div className="border-b border-stone-200 pb-4">
              <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">Academic Evaluation</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">
                100-Point Capstone Grading Rubric &amp; Mandatory Quality Gates
              </h2>
              <p className="text-sm text-stone-500 mt-1">
                Official criteria used by evaluators to grade the final assessment dossier (75/100 passing target).
              </p>
            </div>

            <div className="overflow-x-auto my-3">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-stone-100 text-stone-800 border-b border-stone-200">
                    <th className="p-3 font-semibold">Assessment Area</th>
                    <th className="p-3 font-semibold">Max Points</th>
                    <th className="p-3 font-semibold">What Good Performance Demonstrates</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  <tr className="hover:bg-stone-50">
                    <td className="p-3 font-bold text-stone-900">Planning &amp; Scope</td>
                    <td className="p-3 font-bold text-emerald-600">10 pts</td>
                    <td className="p-3 text-stone-600">Clear authorization, explicit boundaries, target objectives, and safe RoE test procedures.</td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="p-3 font-bold text-stone-900">Architecture &amp; Baseline</td>
                    <td className="p-3 font-bold text-emerald-600">10 pts</td>
                    <td className="p-3 text-stone-600">Accurate asset inventory, 7 trust boundaries mapped, baseline requirements under ASVS/NIST CSF.</td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="p-3 font-bold text-stone-900">Technical Assessment</td>
                    <td className="p-3 font-bold text-emerald-600">15 pts</td>
                    <td className="p-3 text-stone-600">Careful validation of application, IAM, container, and configuration weaknesses without real data harm.</td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="p-3 font-bold text-stone-900">Evidence Quality</td>
                    <td className="p-3 font-bold text-emerald-600">10 pts</td>
                    <td className="p-3 text-stone-600">Reproducible, traceable, and appropriately sanitized proof-of-concept records with SHA-256 hashes.</td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="p-3 font-bold text-stone-900">Risk &amp; Remediation</td>
                    <td className="p-3 font-bold text-emerald-600">15 pts</td>
                    <td className="p-3 text-stone-600">Defensible CVSS v4.0 priorities, root-cause reasoning under SSDF, accountable owners, and clear SLA dates.</td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="p-3 font-bold text-stone-900">Detection &amp; Incident Response</td>
                    <td className="p-3 font-bold text-emerald-600">15 pts</td>
                    <td className="p-3 text-stone-600">ATT&CK v20.0 telemetry validation, parser bug remediation, and tabletop investigation under SP 800-61.</td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="p-3 font-bold text-stone-900">Retesting &amp; Recovery</td>
                    <td className="p-3 font-bold text-emerald-600">15 pts</td>
                    <td className="p-3 text-stone-600">Evidence-backed closure (positive &amp; negative checks), regression testing, and recovery limitations documented.</td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="p-3 font-bold text-stone-900">Final Reporting &amp; Governance</td>
                    <td className="p-3 font-bold text-emerald-600">10 pts</td>
                    <td className="p-3 text-stone-600">Clear executive summary for leadership, detailed technical findings, and signed residual-risk statement.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mandatory Quality Gates */}
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-950 space-y-1">
              <strong className="block font-bold">Mandatory Zero-Tolerance Quality Gates:</strong>
              <ul className="list-disc list-inside space-y-0.5 text-rose-900">
                <li>No unapproved testing beyond defined scope boundaries.</li>
                <li>No invented or unsupported vulnerability claims without evidence.</li>
                <li>No unmitigated Critical finding concealed from the final report.</li>
                <li>No finding marked &apos;Closed - Fixed&apos; without documented retest evidence.</li>
                <li>No unredacted passwords, private keys, or PII in shared deliverables.</li>
              </ul>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 7: CERTIFICATE OF COMPLETION                                          */}
        {/* ========================================================================= */}
        {activeTab === "certificate" && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 md:p-10 shadow-xs text-center space-y-6">
              <div className="max-w-xl mx-auto space-y-3">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
                  PrepSpaces Cybersecurity Masterclass
                </span>
                <h2 className="text-3xl font-black text-stone-900">
                  Certificate of Completion
                </h2>
                <p className="text-xs text-stone-500">
                  Enter your name to personalize your official certificate of completion for the 24-module cybersecurity track.
                </p>
                <div className="max-w-sm mx-auto">
                  <input
                    type="text"
                    value={certStudentName}
                    onChange={(e) => setCertStudentName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full text-center px-4 py-2 border border-stone-300 rounded-xl font-bold text-sm text-stone-800"
                  />
                </div>
              </div>

              {/* Printable Certificate Frame */}
              <div className="max-w-3xl mx-auto p-8 rounded-3xl border-4 border-double border-amber-300 bg-linear-to-b from-stone-50 via-white to-stone-50 text-stone-900 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-amber-400/10 rounded-bl-full pointer-events-none" />
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2 text-amber-600 font-bold text-sm tracking-widest uppercase">
                    <ShieldCheck className="w-6 h-6 text-[#f97316]" />
                    PrepSpaces Cybersecurity Masterclass
                  </div>

                  <p className="text-xs text-stone-500 uppercase tracking-wider">This acknowledges that</p>
                  <h3 className="text-3xl font-black text-stone-900 font-serif border-b-2 border-stone-200 pb-2 inline-block px-8">
                    {certStudentName || "Security Professional"}
                  </h3>

                  <p className="text-xs text-stone-600 max-w-lg mx-auto leading-relaxed pt-2">
                    has successfully completed the complete 24-module technical curriculum in <strong>Offensive &amp; Defensive Cybersecurity, Penetration Testing, Detection Engineering, SIEM, Incident Response, Cloud Security, and Professional Reporting</strong>, demonstrating mastery through the comprehensive Module 24 Final Capstone.
                  </p>

                  <div className="grid grid-cols-2 gap-8 pt-8 max-w-md mx-auto text-left text-[11px] border-t border-stone-200">
                    <div>
                      <p className="text-stone-400 font-medium">Date of Issue:</p>
                      <p className="font-bold text-stone-800">{certIssuedDate}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-stone-400 font-medium">Curriculum Standards:</p>
                      <p className="font-bold text-stone-800">NIST CSF 2.0 • OWASP • CVSS v4.0</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Final Course Takeaway */}
              <div className="max-w-2xl mx-auto p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-700 leading-relaxed font-medium">
                <strong>Final Course Takeaway:</strong> Assess carefully. Document accurately. Secure the root cause. Retest the fix. Defend with evidence. Improve continuously.
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* QUICK REVISION & STANDARDS SHEET                                         */}
        {/* ========================================================================= */}
        <div className="mt-8 rounded-3xl border border-[#e7e3da] bg-white/70 p-6 md:p-8 backdrop-blur-md shadow-xs">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            <h2 className="text-xl font-bold text-stone-900">Quick Revision: 12 Core Principles of Security Assessment &amp; Defense</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-3.5 rounded-xl border border-stone-200 bg-white">
              <span className="font-bold text-stone-900 block mb-1">1. Scope &amp; Authorization</span>
              <p className="text-stone-600">Only test assets and methods that are explicitly authorized in writing.</p>
            </div>

            <div className="p-3.5 rounded-xl border border-stone-200 bg-white">
              <span className="font-bold text-stone-900 block mb-1">2. Architecture &amp; Boundaries</span>
              <p className="text-stone-600">Understand assets, trust boundaries, network dependencies, and privileged identities.</p>
            </div>

            <div className="p-3.5 rounded-xl border border-stone-200 bg-white">
              <span className="font-bold text-stone-900 block mb-1">3. Baseline Verification</span>
              <p className="text-stone-600">Compare actual system behavior against documented security requirements (ASVS, NIST CSF).</p>
            </div>

            <div className="p-3.5 rounded-xl border border-stone-200 bg-white">
              <span className="font-bold text-stone-900 block mb-1">4. Evidence Hygiene</span>
              <p className="text-stone-600">Preserve accurate, reproducible, and appropriately sanitized proof with SHA-256 hashes.</p>
            </div>

            <div className="p-3.5 rounded-xl border border-stone-200 bg-white">
              <span className="font-bold text-stone-900 block mb-1">5. Risk Prioritization</span>
              <p className="text-stone-600">Factor in CVSS v4.0 severity, asset criticality, exposure, and CISA KEV exploitation data.</p>
            </div>

            <div className="p-3.5 rounded-xl border border-stone-200 bg-white">
              <span className="font-bold text-stone-900 block mb-1">6. Root-Cause Remediation</span>
              <p className="text-stone-600">Correct the underlying design flaw (NIST SSDF) to prevent the weakness from recurring.</p>
            </div>

            <div className="p-3.5 rounded-xl border border-stone-200 bg-white">
              <span className="font-bold text-stone-900 block mb-1">7. Detection Engineering</span>
              <p className="text-stone-600">Validate event collection, field normalization, rule logic, and analyst triage workflow.</p>
            </div>

            <div className="p-3.5 rounded-xl border border-stone-200 bg-white">
              <span className="font-bold text-stone-900 block mb-1">8. Incident Response</span>
              <p className="text-stone-600">Establish scope, preserve volatile evidence, coordinate containment, and validate recovery.</p>
            </div>

            <div className="p-3.5 rounded-xl border border-stone-200 bg-white">
              <span className="font-bold text-stone-900 block mb-1">9. Retesting &amp; Regressions</span>
              <p className="text-stone-600">Verify security requirements using positive and negative checks to ensure zero functionality regression.</p>
            </div>

            <div className="p-3.5 rounded-xl border border-stone-200 bg-white">
              <span className="font-bold text-stone-900 block mb-1">10. Dual-Audience Reporting</span>
              <p className="text-stone-600">Deliver strategic clarity for executives and reproducible engineering dossiers for developers.</p>
            </div>

            <div className="p-3.5 rounded-xl border border-stone-200 bg-white">
              <span className="font-bold text-stone-900 block mb-1">11. Governance &amp; Residual Risk</span>
              <p className="text-stone-600">Assign accountable owners, SLA deadlines, formal approvals, and ongoing review milestones.</p>
            </div>

            <div className="p-3.5 rounded-xl border border-stone-200 bg-white">
              <span className="font-bold text-stone-900 block mb-1">12. Continuous Improvement</span>
              <p className="text-stone-600">Turn capstone assessment findings into durable security controls and automated CI/CD tests.</p>
            </div>
          </div>

          {/* Authoritative Resources */}
          <div className="mt-6 pt-4 border-t border-stone-200">
            <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Authoritative Standards &amp; Documentation</h3>
            <div className="flex flex-wrap gap-3 text-xs">
              <a
                href="https://www.nist.gov/cyberframework"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-stone-700 hover:text-emerald-600 font-medium"
              >
                <span>NIST Cybersecurity Framework 2.0</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-stone-300">•</span>
              <a
                href="https://csrc.nist.gov/pubs/sp/800/61/r3/final"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-stone-700 hover:text-emerald-600 font-medium"
              >
                <span>NIST SP 800-61 Rev. 3 (Incident Response)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-stone-300">•</span>
              <a
                href="https://asvs.owasp.org/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-stone-700 hover:text-emerald-600 font-medium"
              >
                <span>OWASP ASVS 5.0.0 (May 2025)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-stone-300">•</span>
              <a
                href="https://www.first.org/cvss/v4.0/specification-document"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-stone-700 hover:text-emerald-600 font-medium"
              >
                <span>FIRST CVSS v4.0 Specification</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-stone-300">•</span>
              <a
                href="https://attack.mitre.org/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-stone-700 hover:text-emerald-600 font-medium"
              >
                <span>MITRE ATT&CK Enterprise v20.0 (Oct 2026)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-stone-300">•</span>
              <a
                href="https://www.cisa.gov/cybersecurity-performance-goals"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-stone-700 hover:text-emerald-600 font-medium"
              >
                <span>CISA Cross-Sector Cybersecurity Performance Goals</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FOOTER NAVIGATION                                                         */}
        {/* ========================================================================= */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[#e7e3da] pt-6">
          <button
            onClick={() => navigate("/learning/cybersecurity/pentest-reports")}
            className="flex items-center gap-2 rounded-2xl border border-stone-200 bg-white px-5 py-3 text-xs font-bold text-stone-700 hover:border-emerald-300 hover:text-emerald-600 transition shadow-xs cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous: Module 23 (Pentest Reports, CVSS v4 &amp; Retesting)</span>
          </button>

          <button
            onClick={() => navigate("/learning/cybersecurity")}
            className="flex items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-xs font-bold text-white hover:bg-emerald-700 transition shadow-xs cursor-pointer"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Return to Cybersecurity Masterclass Overview</span>
          </button>
        </div>
      </div>
    </div>
  );
}
