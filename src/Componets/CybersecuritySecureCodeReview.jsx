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
  GitPullRequest,
  GitBranch,
  GitCommit,
  GitMerge,
  Bug,
  Braces,
  FolderCheck,
  ShieldX,
  ClipboardList,
  EyeOff,
  Code2,
  Wrench,
  Package,
  Layers3,
  FileSearch,
  CheckCircle,
  XCircle,
  BarChart3,
  TestTube2,
  Share2,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* PREPSPACES CYBERSECURITY MASTER COURSE: MODULE 16                          */
/* Secure Code Review, Web Security Testing, and Remediation Validation      */
/* OWASP WSTG, ASVS, Code Review Guide & NIST SSDF SP 800-218 Standards       */
/* -------------------------------------------------------------------------- */

export default function CybersecuritySecureCodeReview() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(1);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'sast-sim' | 'dast-sim' | 'cicd-sim' | 'retest-sim' | 'quiz'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 1: SAST TAINT ANALYSIS & SOURCE-TO-SINK WORKBENCH                */
  /* -------------------------------------------------------------------------- */
  const [selectedSastSnippet, setSelectedSastSnippet] = useState("bola"); // 'bola' | 'sqli' | 'xss' | 'upload' | 'secret'
  const [highlightMode, setHighlightMode] = useState("all"); // 'none' | 'source' | 'transform' | 'sink' | 'all'
  const [showRemediatedCode, setShowRemediatedCode] = useState(false);

  const sastSnippets = {
    bola: {
      name: "BOLA / IDOR on Report API",
      vulnType: "Broken Object-Level Authorization (OWASP API1:2023)",
      scanner: "Semgrep Rule: security.express.unauthorized-object-access",
      unsafeCode: `// UNSAFE: Direct database lookup using client-supplied ID
app.get("/api/reports/:reportId", async (req, res) => {
  // SOURCE: Untrusted user-controlled route parameter
  const reportId = req.params.reportId;
  
  // TRANSFORMATION: Direct identifier pass-through (no ownership filter)
  const lookupKey = reportId.trim();
  
  // SINK: Database query executed without tenant or ownership verification
  const report = await Report.findById(lookupKey);
  
  if (!report) return res.status(404).json({ error: "Report not found" });
  return res.json(report); // SENSITIVE DATA EXPOSURE!
});`,
      safeCode: `// REMEDIATED: Scoped query with server-verified ownership & tenant isolation
app.get("/api/reports/:reportId", requireAuth, async (req, res) => {
  // SOURCE: Route parameter
  const reportId = req.params.reportId;
  
  // SECURITY CONTROL 1: Strict UUID/ObjectId semantic schema validation
  if (!isValidObjectId(reportId)) {
    return res.status(400).json({ error: "Invalid report identifier format" });
  }
  
  // SECURITY CONTROL 2: Ownership-scoped query binding authenticated user ID
  // SINK (PROTECTED): Database query checks both record ID AND caller ownership
  const report = await Report.findOne({
    _id: reportId,
    ownerId: req.user.id, // Enforces boundary: only owner can retrieve
    tenantId: req.user.tenantId
  });
  
  if (!report) {
    // Deliberate non-disclosing 404 prevents identifier enumeration attacks
    return res.status(404).json({ error: "Report not found" });
  }
  return res.json(report);
});`,
      sourceText: "req.params.reportId",
      transformText: "const lookupKey = reportId.trim();",
      sinkText: "await Report.findById(lookupKey)",
      controlText: "Report.findOne({ _id: reportId, ownerId: req.user.id })",
      ruleExpl:
        "Taint analysis detected an untrusted input `req.params.reportId` reaching data-sink `Report.findById()` without traversing an authorization filter or ownership predicate.",
      verdict: "Confirmed True Positive (High Severity)",
    },
    sqli: {
      name: "Dynamic SQL String Concatenation",
      vulnType: "SQL Injection (OWASP A03:2021 / CWE-89)",
      scanner: "CodeQL: js/sql-injection",
      unsafeCode: `// UNSAFE: Untrusted email string concatenated into raw SQL syntax
app.post("/api/v1/auth/lookup", async (req, res) => {
  // SOURCE: Request body input from external web client
  const { email } = req.body;
  
  // TRANSFORMATION: Naive string formatting with quotes
  const formattedQuery = "SELECT id, name, role FROM users WHERE email = '" + email + "' LIMIT 1";
  
  // SINK: PostgreSQL driver executes concatenated raw SQL string
  const result = await db.query(formattedQuery);
  return res.json(result.rows[0]);
});`,
      safeCode: `// REMEDIATED: Strongly typed parameterized query via pg client driver
app.post("/api/v1/auth/lookup", async (req, res) => {
  // SOURCE: Request body
  const { email } = req.body;
  
  // SECURITY CONTROL 1: Semantic type & RFC 5322 regex validation
  if (typeof email !== "string" || !EMAIL_REGEX.test(email) || email.length > 254) {
    return res.status(400).json({ error: "Invalid email syntax" });
  }
  
  // SECURITY CONTROL 2 & SINK (PROTECTED): Parameterized bind variables ($1)
  // The database engine compiles AST first; untrusted data is never parsed as syntax
  const result = await db.query(
    "SELECT id, name, role FROM users WHERE email = $1 LIMIT 1",
    [email]
  );
  return res.json(result.rows[0] || null);
});`,
      sourceText: "const { email } = req.body;",
      transformText: `const formattedQuery = "SELECT id, name, role FROM users WHERE email = '" + email + "' LIMIT 1";`,
      sinkText: "await db.query(formattedQuery);",
      controlText: "await db.query('SELECT ... WHERE email = $1', [email]);",
      ruleExpl:
        "CodeQL tracked untrusted tainted object `req.body.email` into parameter 0 of `db.query()`. The argument is an unsanitized concatenated string containing dynamic syntax.",
      verdict: "Confirmed True Positive (Critical Severity)",
    },
    xss: {
      name: "DOM Execution via innerHTML",
      vulnType: "Client-Side DOM Cross-Site Scripting (CWE-79)",
      scanner: "Semgrep Rule: javascript.browser.security.dom-xss",
      unsafeCode: `// UNSAFE: Unescaped URL search parameter inserted directly into DOM HTML sink
function displayCandidateNote() {
  // SOURCE: URL search params controlled by client or attacker phishing link
  const urlParams = new URLSearchParams(window.location.search);
  const noteContent = urlParams.get("note");
  
  // TRANSFORMATION: Simple string assignment
  const banner = document.getElementById("note-banner");
  
  // SINK: innerHTML parses HTML markup, executing <img src=x onerror=...> payloads
  banner.innerHTML = "<b>Candidate Feedback:</b> " + noteContent;
}`,
      safeCode: `// REMEDIATED: Safe textContent insertion & DOMPurify sanitization
function displayCandidateNote() {
  const urlParams = new URLSearchParams(window.location.search);
  const noteContent = urlParams.get("note") || "";
  
  const banner = document.getElementById("note-banner");
  
  // SECURITY CONTROL: textContent treats all input strictly as inert string data
  // Even if noteContent is '<script>alert(1)</script>', the browser will NOT execute it
  const prefixSpan = document.createElement("span");
  prefixSpan.className = "font-bold text-slate-200";
  prefixSpan.textContent = "Candidate Feedback: ";
  
  const contentSpan = document.createElement("span");
  contentSpan.textContent = noteContent; // SAFE: Context-aware text assignment
  
  banner.replaceChildren(prefixSpan, contentSpan);
}`,
      sourceText: `urlParams.get("note")`,
      transformText: `"<b>Candidate Feedback:</b> " + noteContent`,
      sinkText: "banner.innerHTML = ...",
      controlText: "contentSpan.textContent = noteContent",
      ruleExpl:
        "Tainted flow detected from `window.location.search` to sink `Element.innerHTML`. Untrusted input allows script injection under current document origin.",
      verdict: "Confirmed True Positive (High Severity)",
    },
    upload: {
      name: "Insecure Resume File Upload",
      vulnType: "Arbitrary File Upload & Path Traversal (CWE-434 / CWE-22)",
      scanner: "CodeQL: js/path-traversal-file-upload",
      unsafeCode: `// UNSAFE: Trusting client-supplied filename and unvalidated extensions
app.post("/api/resumes/upload", upload.single("resume"), async (req, res) => {
  // SOURCE: Client-provided raw multipart filename
  const originalName = req.file.originalname; 
  
  // TRANSFORMATION: Concatenating directly with storage path
  const targetPath = path.join("/var/www/uploads", originalName);
  
  // SINK: Writing file into web-accessible root without extension allowlist
  // Attacker can submit '../../etc/cron.d/malicious' or 'payload.php'
  await fs.promises.writeFile(targetPath, req.file.buffer);
  return res.json({ status: "uploaded", path: targetPath });
});`,
      safeCode: `// REMEDIATED: Cryptographic UUID filename, magic bytes check, and isolated storage
app.post("/api/resumes/upload", requireAuth, upload.single("resume"), async (req, res) => {
  const file = req.file;
  if (!file || file.size > 5 * 1024 * 1024) {
    return res.status(400).json({ error: "File required and must be <= 5MB" });
  }
  
  // SECURITY CONTROL 1: Validate file magic byte signature (not just spoofable MIME header)
  const isPdf = file.buffer.slice(0, 4).toString("hex") === "25504446"; // %PDF
  if (!isPdf) {
    return res.status(400).json({ error: "Only legitimate PDF documents are permitted" });
  }
  
  // SECURITY CONTROL 2: Random server-generated UUIDv4 (client filename discarded)
  const safeFilename = crypto.randomUUID() + ".pdf";
  
  // SECURITY CONTROL 3: Isolated non-executable object storage (S3/GCS or isolated mount)
  const safeStoragePath = path.join(ISOLATED_STORAGE_DIR, safeFilename);
  await fs.promises.writeFile(safeStoragePath, file.buffer, { mode: 0o600 });
  
  return res.status(201).json({ status: "stored", fileId: safeFilename });
});`,
      sourceText: "req.file.originalname",
      transformText: "path.join('/var/www/uploads', originalName)",
      sinkText: "fs.promises.writeFile(targetPath, req.file.buffer)",
      controlText: "crypto.randomUUID() + '.pdf' & magic byte inspection",
      ruleExpl:
        "Direct use of `file.originalname` inside filesystem sink allows path traversal (`../`) and arbitrary executable file placement on the web server.",
      verdict: "Confirmed True Positive (High Severity)",
    },
    secret: {
      name: "Hardcoded API Key & Fallback Secret",
      vulnType: "Use of Hardcoded Credentials (CWE-798 / OWASP A07:2021)",
      scanner: "Gitleaks Rule: generic-api-key",
      unsafeCode: `// UNSAFE: Default hardcoded secret in production auth signing middleware
const jwt = require("jsonwebtoken");

// SOURCE & SINK: Hardcoded secret fallback in source code repo
const JWT_SECRET = process.env.JWT_SECRET || "PrepspacesSuperSecretKey2026!#$";

function signUserSession(user) {
  // Signs tokens with a static known secret if environment variable is missing
  return jwt.sign({ sub: user.id, role: user.role }, JWT_SECRET, {
    expiresIn: "1h",
  });
}`,
      safeCode: `// REMEDIATED: Strict secret management with startup failure guards
const jwt = require("jsonwebtoken");
const { getSecret } = require("./vaultSecretManager");

// SECURITY CONTROL: Never fallback to default secrets. Fail closed on startup!
const JWT_SECRET = process.env.JWT_SIGNING_PRIVATE_KEY;
if (!JWT_SECRET || JWT_SECRET.length < 64) {
  logger.error("FATAL: JWT_SIGNING_PRIVATE_KEY missing or insufficient entropy.");
  process.exit(1); // Fail immediately: never start unhardened in production
}

function signUserSession(user) {
  return jwt.sign({ sub: user.id, role: user.role }, JWT_SECRET, {
    algorithm: "RS256", // Use asymmetric key signatures
    expiresIn: "15m",
  });
}`,
      sourceText: `"PrepspacesSuperSecretKey2026!#$"`,
      transformText: "process.env.JWT_SECRET || ...",
      sinkText: "jwt.sign(..., JWT_SECRET, ...)",
      controlText: "Fail-closed startup guard & RS256 private key vault storage",
      ruleExpl:
        "Static analysis found high-entropy credential literal in version control history. Committing secrets enables token forgery across all environments.",
      verdict: "Confirmed True Positive (Critical Severity)",
    },
  };

  const activeSnippet = sastSnippets[selectedSastSnippet];

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 2: DAST RUNTIME VULNERABILITY SCANNER (OWASP ZAP ENGINE)         */
  /* -------------------------------------------------------------------------- */
  const [dastTargetEndpoint, setDastTargetEndpoint] = useState("/api/reports/4821");
  const [dastScanMode, setDastScanMode] = useState("passive"); // 'passive' | 'active'
  const [targetServerHardened, setTargetServerHardened] = useState(false);
  const [dastScanning, setDastScanning] = useState(false);
  const [dastLogs, setDastLogs] = useState([]);
  const [dastAlerts, setDastAlerts] = useState([]);

  const runDastScan = () => {
    setDastScanning(true);
    setDastLogs(["[ZAP-CORE] Initializing dynamic scanner proxy session...", `[TARGET] Binding target: https://staging.prepspaces.local${dastTargetEndpoint}`]);
    setDastAlerts([]);

    setTimeout(() => {
      if (dastScanMode === "passive") {
        setDastLogs((prev) => [
          ...prev,
          "[PASSIVE] Inspecting HTTP response headers for /api/reports/4821...",
          "[PASSIVE] Checking Content-Security-Policy, Strict-Transport-Security...",
          "[PASSIVE] Analyzing cookie flags (Secure, HttpOnly, SameSite)...",
          "[PASSIVE] Scan completed. 0 requests sent out-of-band.",
        ]);
        if (!targetServerHardened) {
          setDastAlerts([
            {
              id: "DAST-P1",
              severity: "Medium",
              name: "Missing Content-Security-Policy (CSP) Header",
              cwe: "CWE-1021",
              evidence: "Response headers do not contain 'Content-Security-Policy'.",
              fix: "Add strict CSP header: default-src 'self'; script-src 'self';",
            },
            {
              id: "DAST-P2",
              severity: "Low",
              name: "Server Version Banner Information Disclosure",
              cwe: "CWE-200",
              evidence: "Server header revealed: 'Server: Express/4.18.2 Node/20.11'",
              fix: "Disable x-powered-by header in Express: app.disable('x-powered-by').",
            },
          ]);
        } else {
          setDastAlerts([
            {
              id: "DAST-P-SAFE",
              severity: "Informational",
              name: "All Security Headers Correctly Enforced",
              cwe: "N/A",
              evidence: "HSTS, CSP, X-Frame-Options, X-Content-Type-Options: nosniff present.",
              fix: "No remediation required. Headers conform to OWASP ASVS v4.0.",
            },
          ]);
        }
      } else {
        // Active scan
        setDastLogs((prev) => [
          ...prev,
          "[ACTIVE] Initiating fuzzing vector: Broken Object-Level Authorization (BOLA)...",
          "[ACTIVE] Sending HTTP GET /api/reports/7710 with Authorization: Bearer token_candidate_a",
          "[ACTIVE] Initiating fuzzing vector: SQL Injection fuzzing payload: ' OR 1=1--",
          "[ACTIVE] Testing Content-Type boundary tampering and parameter pollution...",
        ]);

        if (!targetServerHardened) {
          setDastLogs((prev) => [
            ...prev,
            "[ALERT-TRIGGER] HTTP 200 OK received for Candidate B's report using Candidate A's token!",
            "[ACTIVE] High-confidence vulnerability confirmed on endpoint.",
            "[ACTIVE] Fuzzing complete: 18 requests sent in 480ms.",
          ]);
          setDastAlerts([
            {
              id: "DAST-A1",
              severity: "High",
              name: "BOLA / IDOR Horizontal Privilege Bypass",
              cwe: "CWE-639 / OWASP API1:2023",
              evidence: "GET /api/reports/7710 returned candidate Alice's private scorecard while caller authenticated as Samarth (usr_101).",
              fix: "Enforce ownership verification query on server: WHERE id = $1 AND owner_id = $2.",
            },
            {
              id: "DAST-A2",
              severity: "Medium",
              name: "Missing Rate Limiting on Resource Queries",
              cwe: "CWE-799",
              evidence: "Transmitted 100 consecutive requests in 1 second; zero 429 Too Many Requests responses.",
              fix: "Apply sliding window or token-bucket rate limiter middleware.",
            },
          ]);
        } else {
          setDastLogs((prev) => [
            ...prev,
            "[SHIELD] HTTP 404 Not Found returned for cross-tenant object ID: unauthorized access blocked.",
            "[SHIELD] Rate limiter intercepted burst: HTTP 429 received after request 30.",
            "[ACTIVE] Active scan completed: No exploitable vulnerabilities detected.",
          ]);
          setDastAlerts([
            {
              id: "DAST-A-SAFE",
              severity: "Informational",
              name: "Active Fuzzing Passed: Controls Effective",
              cwe: "N/A",
              evidence: "Zero unauthorized object leaks or injection responses detected.",
              fix: "Baseline verified. Maintain automated regression tests in CI/CD.",
            },
          ]);
        }
      }
      setDastScanning(false);
    }, 900);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 3: DEVSECOPS CI/CD PIPELINE & SECURITY GATE SIMULATOR             */
  /* -------------------------------------------------------------------------- */
  const [pipelineScenario, setPipelineScenario] = useState("clean"); // 'clean' | 'secret' | 'sca' | 'bola'
  const [runningPipeline, setRunningPipeline] = useState(false);
  const [pipelineStage, setPipelineStage] = useState(0); // 0 = idle, 1..6
  const [pipelineResults, setPipelineResults] = useState(null);

  const pipelineStages = [
    { id: 1, name: "Pull Request Created", tool: "GitHub Actions / GitLab CI" },
    { id: 2, name: "Format & Unit Tests", tool: "ESLint & Jest / Vitest" },
    { id: 3, name: "Secrets Detection", tool: "Gitleaks / TruffleHog" },
    { id: 4, name: "SAST Code Analysis", tool: "Semgrep / CodeQL" },
    { id: 5, name: "SCA Dependency Audit", tool: "npm audit / Snyk" },
    { id: 6, name: "DAST & Authz Regression", tool: "OWASP ZAP / Newman" },
    { id: 7, name: "Release Security Gate", tool: "Policy Gatekeeper" },
  ];

  const runPipeline = (scenario = pipelineScenario) => {
    setRunningPipeline(true);
    setPipelineStage(1);
    setPipelineResults(null);

    const stepInterval = setInterval(() => {
      setPipelineStage((prev) => {
        const next = prev + 1;
        if (scenario === "secret" && next === 4) {
          // Fails at secrets detection
          clearInterval(stepInterval);
          setRunningPipeline(false);
          setPipelineResults({
            status: "BLOCKED",
            failedStage: 3,
            stageName: "Secrets Detection",
            message: "Gitleaks detected hardcoded AWS Access Key in auth/tokenHelper.js: 'AKIAIOSFODNN7EXAMPLE'",
            actionRequired: "Revoke key from cloud IAM, scrub commit history via git-filter-repo, load secret from Vault.",
          });
          return 3;
        }
        if (scenario === "sca" && next === 6) {
          // Fails at SCA
          clearInterval(stepInterval);
          setRunningPipeline(false);
          setPipelineResults({
            status: "BLOCKED",
            failedStage: 5,
            stageName: "SCA Dependency Audit",
            message: "npm audit flagged CVE-2024-21508 in 'jsonwebtoken < 9.0.0': High Severity algorithm confusion.",
            actionRequired: "Upgrade jsonwebtoken to >= 9.0.2 in package.json & regenerate package-lock.json.",
          });
          return 5;
        }
        if (scenario === "bola" && next === 7) {
          // Fails at DAST & Authz Regression
          clearInterval(stepInterval);
          setRunningPipeline(false);
          setPipelineResults({
            status: "BLOCKED",
            failedStage: 6,
            stageName: "DAST & Authz Regression Suite",
            message: "Integration test 'AUTHZ-REPORT-001' failed: Candidate A received HTTP 200 reading Candidate B's report.",
            actionRequired: "Reinstate ownership check query in ReportController.js before PR merge.",
          });
          return 6;
        }
        if (next > 7) {
          clearInterval(stepInterval);
          setRunningPipeline(false);
          setPipelineResults({
            status: "APPROVED",
            failedStage: null,
            stageName: "Release Security Gate",
            message: "All 6 security checks satisfied: 0 secrets, 0 SAST flaws, 0 high CVEs, 100% authz regressions passing.",
            actionRequired: "Ready for deployment to production.",
          });
          return 7;
        }
        return next;
      });
    }, 450);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 4: REMEDIATION VALIDATION & REGRESSION MATRIX                    */
  /* -------------------------------------------------------------------------- */
  const [selectedPatchVersion, setSelectedPatchVersion] = useState("unpatched"); // 'unpatched' | 'frontend_only' | 'naive_patch' | 'root_cause'

  const regressionSimulation = useMemo(() => {
    const callers = [
      { id: "usr_a", label: "Candidate A (Owner)", role: "candidate", isOwner: true, isAssigned: false },
      { id: "usr_b", label: "Candidate B (Unauthorized Attacker)", role: "candidate", isOwner: false, isAssigned: false },
      { id: "rec_1", label: "Recruiter Sarah (Assigned to Candidate A)", role: "recruiter", isOwner: false, isAssigned: true },
      { id: "rec_2", label: "Recruiter Dave (Unassigned Recruiter)", role: "recruiter", isOwner: false, isAssigned: false },
    ];

    const results = callers.map((caller) => {
      let httpStatus = "200 OK";
      let dataReturned = true;
      let securityVerdict = "VULNERABLE";
      let note = "";

      switch (selectedPatchVersion) {
        case "unpatched":
          httpStatus = "200 OK";
          dataReturned = true;
          if (caller.isOwner || caller.isAssigned) {
            securityVerdict = "PERMITTED";
            note = "Legitimate access permitted (by coincidence of no checks).";
          } else {
            securityVerdict = "VULNERABILITY DETECTED";
            note = "BOLA EXPLOIT: Unauthorized caller received private candidate report!";
          }
          break;

        case "frontend_only":
          // Hiding frontend button does not protect API endpoint
          httpStatus = "200 OK";
          dataReturned = true;
          if (caller.isOwner || caller.isAssigned) {
            securityVerdict = "PERMITTED";
            note = "Button visible and API allows access.";
          } else {
            securityVerdict = "VULNERABILITY DETECTED";
            note = "INEFFECTIVE FIX: UI hidden, but curl / Postman direct request returns 200 OK!";
          }
          break;

        case "naive_patch":
          // Only checks owner, breaks recruiter!
          if (caller.isOwner) {
            httpStatus = "200 OK";
            dataReturned = true;
            securityVerdict = "PERMITTED";
            note = "Owner access verified.";
          } else {
            httpStatus = "404 Not Found";
            dataReturned = false;
            if (caller.isAssigned) {
              securityVerdict = "REGRESSION DETECTED";
              note = "FUNCTIONAL REGRESSION: Legitimate assigned recruiter locked out with 404!";
            } else {
              securityVerdict = "BLOCKED (SECURE)";
              note = "Unauthorized access properly denied.";
            }
          }
          break;

        case "root_cause":
          // Checks owner OR assigned recruiter
          if (caller.isOwner || caller.isAssigned) {
            httpStatus = "200 OK";
            dataReturned = true;
            securityVerdict = "PERMITTED (SECURE)";
            note = "Legitimate business workflow permitted under verified policy.";
          } else {
            httpStatus = "404 Not Found";
            dataReturned = false;
            securityVerdict = "BLOCKED (SECURE)";
            note = "Unauthorized candidate and unassigned recruiter denied with 404.";
          }
          break;

        default:
          break;
      }

      return { ...caller, httpStatus, dataReturned, securityVerdict, note };
    });

    const hasVulnerability = results.some((r) => r.securityVerdict.includes("VULNERABILITY"));
    const hasRegression = results.some((r) => r.securityVerdict.includes("REGRESSION"));
    let overallStatus = "FIXED & VERIFIED";
    if (hasVulnerability) overallStatus = "STILL VULNERABLE";
    else if (hasRegression) overallStatus = "REGRESSION DETECTED";

    return { results, overallStatus, hasVulnerability, hasRegression };
  }, [selectedPatchVersion]);

  /* -------------------------------------------------------------------------- */
  /* KNOWLEDGE ASSESSMENT QUIZ (16.17 - 10 Questions)                           */
  /* -------------------------------------------------------------------------- */
  const quizQuestions = [
    {
      id: 1,
      question: "What is the main purpose of secure code review?",
      options: [
        "To prove the application has no vulnerabilities",
        "To identify and evaluate security weaknesses in the implementation",
        "To replace all runtime testing",
        "To eliminate the need for security requirements",
      ],
      correct: 1,
      explanation:
        "The primary purpose of secure code review is to systematically examine source code to uncover implementation flaws, flawed trust assumptions, and violated security requirements before software reaches production.",
    },
    {
      id: 2,
      question: "Which control most directly prevents SQL injection when querying with user-supplied values?",
      options: [
        "Hiding the database endpoint",
        "Parameterizing the SQL query",
        "Removing spaces from input",
        "Returning generic error messages",
      ],
      correct: 1,
      explanation:
        "Parameterized queries (prepared statements) ensure the database engine compiles SQL syntax first and treats user data strictly as literals, eliminating SQL command injection at the syntactic root.",
    },
    {
      id: 3,
      question: "Why is checking authorization only in the frontend insufficient?",
      options: [
        "Frontend code cannot display errors",
        "Users can bypass or manipulate client-side controls",
        "The database cannot store roles",
        "All APIs must be public",
      ],
      correct: 1,
      explanation:
        "Clients have full control over browser state and can send raw HTTP requests directly via curl, Postman, or scripts. Authorization must be strictly enforced on the server for every sensitive operation.",
    },
    {
      id: 4,
      question: "What is a key limitation of SAST?",
      options: [
        "It can only test encrypted traffic",
        "It always requires production access",
        "It may miss runtime behavior and business-logic flaws",
        "It cannot analyze source code",
      ],
      correct: 2,
      explanation:
        "SAST operates statically without executing code. It cannot easily observe runtime environment state, dynamic reflections, or complex multi-step business logic (such as recruiter workflow rules).",
    },
    {
      id: 5,
      question: "What does SCA primarily examine?",
      options: [
        "Third-party components and their known risks",
        "Only user interface colors",
        "Only HTTP response headers",
        "Physical server temperature",
      ],
      correct: 0,
      explanation:
        "Software Composition Analysis (SCA) analyzes open-source libraries, frameworks, direct dependencies, and transitive lockfile dependencies against known vulnerability databases (CVEs).",
    },
    {
      id: 6,
      question: "What should a reviewer do with an unverified scanner alert?",
      options: [
        "Immediately label it a confirmed critical vulnerability",
        "Delete it without investigation",
        "Investigate reachability, controls, and impact",
        "Automatically disable the affected application",
      ],
      correct: 2,
      explanation:
        "Automated scanners produce alerts that must be triaged. Reviewers must trace data flows, evaluate compensating controls, determine if the code path is reachable, and assess actual business impact.",
    },
    {
      id: 7,
      question: "What is the strongest approach to validating a fix for broken object-level authorization?",
      options: [
        "Confirm the frontend hides the report link",
        "Test authorized and unauthorized access across relevant paths",
        "Check only whether the server returns HTTP 200",
        "Disable the affected endpoint permanently",
      ],
      correct: 1,
      explanation:
        "A rigorous validation checks both negative test cases (unauthorized cross-tenant requests return 403/404) and positive test cases (authorized owners and assigned staff can legitimately perform their workflows).",
    },
    {
      id: 8,
      question: "Why are regression tests important after remediation?",
      options: [
        "They guarantee no future vulnerabilities can occur",
        "They replace code review",
        "They help ensure the fix remains effective and legitimate behavior still works",
        "They eliminate the need for deployment monitoring",
      ],
      correct: 2,
      explanation:
        "Security regression tests prevent future code commits from re-introducing the vulnerability and confirm that the fix did not inadvertently break legitimate user workflows.",
    },
    {
      id: 9,
      question: "What does an accepted-risk status mean?",
      options: [
        "The vulnerability has definitely been fixed",
        "An authorized risk owner has accepted the documented residual risk",
        "The finding is necessarily a false positive",
        "The application no longer needs security testing",
      ],
      correct: 1,
      explanation:
        "Accepted risk means a designated governance authority (e.g. CISO or Risk Owner) acknowledges the residual vulnerability and decides not to fix it immediately, usually due to low exploitability or high business constraints.",
    },
    {
      id: 10,
      question: "Which is the best release security gate?",
      options: [
        "Fail every build with any informational alert",
        "Ignore all scanner findings if tests pass",
        "Combine risk-based checks, evidence, triage, and controlled exceptions",
        "Run security tests only after a production incident",
      ],
      correct: 2,
      explanation:
        "An effective release gate balances security assurance and engineering velocity by enforcing strict thresholds for high-confidence/high-impact issues while allowing formal exception workflows.",
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
  /* LAB WORKSHEET GENERATOR STATE (16.16)                                      */
  /* -------------------------------------------------------------------------- */
  const [labFindingTitle, setLabFindingTitle] = useState("Missing Object-Level Authorization on Interview Reports");
  const [labSeverity, setLabSeverity] = useState("High");
  const [labEvidence, setLabEvidence] = useState(
    "Authenticated as Candidate A (usr_101), issued GET /api/reports/7710 (owned by Candidate B). Server returned 200 OK with private scores and interview notes. Direct API access bypassed frontend visibility controls."
  );
  const [labRootCause, setLabRootCause] = useState(
    "ReportController.js line 42 calls Report.findById(req.params.id) without verifying req.user.id against report.ownerId or consulting the recruiter assignment table."
  );
  const [labRemediation, setLabRemediation] = useState(
    "Replaced unscoped query with Report.findOne({ _id: id, $or: [{ ownerId: req.user.id }, { assignedRecruiterId: req.user.id }] }). Added unit test AUTHZ-REPORT-001 in CI pipeline."
  );
  const [labValidationStatus, setLabValidationStatus] = useState("Fixed and verified");
  const [reportCopied, setReportCopied] = useState(false);

  const copyLabReport = () => {
    const reportText = `=====================================================
PREPSPACES SECURE CODE REVIEW & TESTING LAB REPORT
=====================================================
Finding ID:          SEC-REVIEW-001
Finding Title:       ${labFindingTitle}
Severity:            ${labSeverity}
Validation Status:   ${labValidationStatus}

EVIDENCE & REPRODUCTION SUMMARY:
${labEvidence}

ROOT CAUSE ANALYSIS:
${labRootCause}

PROPOSED REMEDIATION:
${labRemediation}

REGRESSION TESTING EVIDENCE:
- Negative Test: Candidate A requesting Candidate B's report -> HTTP 404 (Passed)
- Positive Test 1: Candidate A requesting Candidate A's report -> HTTP 200 (Passed)
- Positive Test 2: Assigned Recruiter requesting report -> HTTP 200 (Passed)
- Negative Test 2: Unassigned Recruiter requesting report -> HTTP 403 (Passed)

Standard Reference: OWASP WSTG-ATHZ-02 / ASVS V4.1
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
              <span>Cybersecurity Track</span>
            </button>
            <span className="text-slate-600">/</span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              Module 16
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">
              Secure Code Review, Web Security Testing & Remediation Validation
            </span>
          </div>

          <div className="flex items-center space-x-3">
          </div>
        </div>
      </header>

      {/* Curriculum Module Navigation Bar */}
      <ModuleNav currentModuleId="secure-code-review" />

      {/* Hero Section */}
      <div className="border-b border-slate-800 bg-gradient-to-b from-slate-900 via-[#0c1322] to-[#0a0f1d] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono uppercase tracking-wider bg-cyan-950 text-cyan-400 border border-cyan-800/50">
                  Intermediate to Advanced · Application Security
                </span>
                <span className="text-slate-500 text-xs">•</span>
                <span className="text-slate-400 text-xs flex items-center">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-400" />
                  OWASP WSTG, ASVS & NIST SSDF SP 800-218
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                Secure Code Review, Web Security Testing & Remediation Validation
              </h1>
              <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
                Master the discipline of examining application code for security weaknesses, executing dynamic DAST tests, tracing inputs from source to sink, distinguishing true vulnerabilities from false positives, writing actionable findings, and proving that root-cause fixes remain effective through automated regression verification in CI/CD pipelines.
              </p>
            </div>

            <div className="flex md:flex-col items-center gap-3">
              <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl text-center min-w-[130px]">
                <div className="text-2xl font-bold text-cyan-400 font-mono">16 / 24</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-0.5">Course Sequence</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl text-center min-w-[130px]">
                <div className="text-2xl font-bold text-emerald-400 font-mono">4 Labs</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-0.5">Interactive Tools</div>
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
              onClick={() => setActiveTab("sast-sim")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition flex items-center space-x-1.5 ${
                activeTab === "sast-sim"
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20"
                  : "bg-slate-800/70 text-slate-300 hover:bg-slate-700"
              }`}
            >
              <FileSearch className="w-3.5 h-3.5" />
              <span>Simulator 1: SAST Taint Analysis</span>
            </button>
            <button
              onClick={() => setActiveTab("dast-sim")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition flex items-center space-x-1.5 ${
                activeTab === "dast-sim"
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20"
                  : "bg-slate-800/70 text-slate-300 hover:bg-slate-700"
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Simulator 2: DAST Runtime Scanner</span>
            </button>
            <button
              onClick={() => setActiveTab("cicd-sim")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition flex items-center space-x-1.5 ${
                activeTab === "cicd-sim"
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20"
                  : "bg-slate-800/70 text-slate-300 hover:bg-slate-700"
              }`}
            >
              <GitPullRequest className="w-3.5 h-3.5" />
              <span>Simulator 3: DevSecOps CI/CD Gate</span>
            </button>
            <button
              onClick={() => setActiveTab("retest-sim")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition flex items-center space-x-1.5 ${
                activeTab === "retest-sim"
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20"
                  : "bg-slate-800/70 text-slate-300 hover:bg-slate-700"
              }`}
            >
              <CheckSquare className="w-3.5 h-3.5" />
              <span>Simulator 4: Remediation Matrix</span>
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
              <span className="text-cyan-400 font-mono">16 / 24</span>
            </h3>

            <div className="space-y-1">
              {[
                { id: 1, title: "16.1 Module Overview & Objectives" },
                { id: 2, title: "16.2 Code Review Fundamentals" },
                { id: 3, title: "16.3 Scope & Security Context" },
                { id: 4, title: "16.4 Systematic Review Method" },
                { id: 5, title: "16.5 Common Security Weaknesses" },
                { id: 6, title: "16.6 Static Application Security Testing (SAST)" },
                { id: 7, title: "16.7 Software Composition Analysis (SCA)" },
                { id: 8, title: "16.8 Dynamic Web Testing (DAST)" },
                { id: 9, title: "16.9 API & Business Logic Testing" },
                { id: 10, title: "16.10 Writing Effective Test Cases" },
                { id: 11, title: "16.11 Validation, Triage & Prioritization" },
                { id: 12, title: "16.12 Writing Actionable Findings" },
                { id: 13, title: "16.13 Secure Remediation & Root-Cause" },
                { id: 14, title: "16.14 Remediation Validation" },
                { id: 15, title: "16.15 CI/CD DevSecOps Integration" },
                { id: 16, title: "16.16 Practical Lab & Worksheet" },
                { id: 17, title: "16.17 Knowledge Assessment" },
                { id: 18, title: "16.18 Official References & Standards" },
                { id: 19, title: "16.19 Key Engineering Takeaways" },
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
                </button>
              ))}
            </div>

            {/* Quick Practice Jump */}
            <div className="pt-4 border-t border-slate-800">
              <div className="text-[11px] font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                Hands-on Simulators
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  onClick={() => setActiveTab("sast-sim")}
                  className="px-2 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-[11px] font-medium text-left truncate flex items-center"
                >
                  <FileSearch className="w-3 h-3 mr-1 text-cyan-400 shrink-0" />
                  <span>SAST Taint</span>
                </button>
                <button
                  onClick={() => setActiveTab("dast-sim")}
                  className="px-2 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-[11px] font-medium text-left truncate flex items-center"
                >
                  <Globe className="w-3 h-3 mr-1 text-blue-400 shrink-0" />
                  <span>DAST ZAP</span>
                </button>
                <button
                  onClick={() => setActiveTab("cicd-sim")}
                  className="px-2 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-[11px] font-medium text-left truncate flex items-center"
                >
                  <GitPullRequest className="w-3 h-3 mr-1 text-emerald-400 shrink-0" />
                  <span>CI/CD Gates</span>
                </button>
                <button
                  onClick={() => setActiveTab("retest-sim")}
                  className="px-2 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-[11px] font-medium text-left truncate flex items-center"
                >
                  <CheckSquare className="w-3 h-3 mr-1 text-amber-400 shrink-0" />
                  <span>Retest Matrix</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="lg:col-span-3 space-y-8">
          {/* TAB 1: THEORY & ARCHITECTURE */}
          {activeTab === "theory" && (
            <div className="space-y-10">
              {/* SECTION 16.1 */}
              {selectedTopic === 1 && (
                <section className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Section 16.1</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Module Overview & Learning Objectives</h2>
                  </div>

                  <p className="text-slate-300 leading-relaxed text-sm">
                    Secure code review and web security testing are essential activities across the modern software development lifecycle (SDLC). They identify vulnerabilities before adversaries can exploit them, verify whether security controls work as intended, and confirm that engineering fixes actually resolve the underlying root cause without introducing new defects or functional regressions.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                      <div className="flex items-center space-x-2 text-cyan-400 font-semibold text-sm">
                        <Shield className="w-4 h-4" />
                        <span>Core Learning Objectives</span>
                      </div>
                      <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                        <li>Perform structured manual reviews of application code, dependencies, and configurations.</li>
                        <li>Understand the strengths and boundaries of SAST, DAST, SCA, and manual penetration tests.</li>
                        <li>Trace untrusted input from HTTP sources to sensitive database, filesystem, and DOM sinks.</li>
                        <li>Design repeatable security test cases with verifiable expected outcomes.</li>
                        <li>Distinguish confirmed vulnerabilities from false positives and unexploitable scanner noise.</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                      <div className="flex items-center space-x-2 text-emerald-400 font-semibold text-sm">
                        <Workflow className="w-4 h-4" />
                        <span>Engineering & CI/CD Delivery</span>
                      </div>
                      <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                        <li>Assess risk using exploitability, business exposure, and asset sensitivity.</li>
                        <li>Draft actionable security findings with minimal, reproducible sanitized evidence.</li>
                        <li>Verify remediation by testing the security property, not just a single payload string.</li>
                        <li>Integrate automated security gates and regression suites into pull requests.</li>
                        <li>Maintain documentation and evidence according to NIST SSDF SP 800-218 guidelines.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-800/40 text-xs text-cyan-300 flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">Practical Context & Authorization Scope: </span>
                      Throughout this module, all practical security evaluations must remain within local training testbeds or an explicitly authorized staging environment. Never execute active scans against unauthorized systems or third-party web assets.
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION 16.2 */}
              {selectedTopic === 2 && (
                <section className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Section 16.2</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Secure Code Review Fundamentals</h2>
                  </div>

                  <p className="text-slate-300 leading-relaxed text-sm">
                    Secure code review is a structured examination of source code to discover implementation choices that violate security policies. While an ordinary code review checks whether code meets functional business requirements, a security review asks how the application behaves when inputs are malicious, sessions expire, users attempt privilege escalation, or external dependencies fail.
                  </p>

                  <h3 className="text-base font-bold text-white">Manual Review vs. Automated Analysis Matrix</h3>
                  <div className="overflow-x-auto border border-slate-800 rounded-xl">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead className="bg-slate-900 text-slate-300 font-semibold border-b border-slate-800">
                        <tr>
                          <th className="p-3">Testing Method</th>
                          <th className="p-3">Primary Purpose</th>
                          <th className="p-3">Main Limitation</th>
                          <th className="p-3">Best Integrated At</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 text-slate-300">
                        <tr className="hover:bg-slate-900/40">
                          <td className="p-3 font-semibold text-cyan-300">Manual Code Review</td>
                          <td className="p-3">Understand business logic, trust boundaries, multi-step workflows</td>
                          <td className="p-3 text-rose-300">Requires deep expertise; time-consuming for large codebases</td>
                          <td className="p-3">Pull Request reviews & architecture sign-offs</td>
                        </tr>
                        <tr className="hover:bg-slate-900/40">
                          <td className="p-3 font-semibold text-cyan-300">SAST (Static Analysis)</td>
                          <td className="p-3">Scan source/bytecode for known unsafe syntax and tainted data paths</td>
                          <td className="p-3 text-rose-300">Cannot observe runtime state; high false-positive rate; misses logic</td>
                          <td className="p-3">Pre-commit hooks & CI build pipelines</td>
                        </tr>
                        <tr className="hover:bg-slate-900/40">
                          <td className="p-3 font-semibold text-cyan-300">DAST (Dynamic Analysis)</td>
                          <td className="p-3">Fuzz running web application via exposed HTTP interfaces (black-box)</td>
                          <td className="p-3 text-rose-300">Cannot see internal code paths; requires active test target</td>
                          <td className="p-3">Nightly staging runs & release candidates</td>
                        </tr>
                        <tr className="hover:bg-slate-900/40">
                          <td className="p-3 font-semibold text-cyan-300">SCA (Software Composition)</td>
                          <td className="p-3">Identify known CVEs in third-party packages, libraries, and lockfiles</td>
                          <td className="p-3 text-rose-300">A reported CVE does not prove the vulnerable function is reachable</td>
                          <td className="p-3">Package install (`npm audit`) & CI pull requests</td>
                        </tr>
                        <tr className="hover:bg-slate-900/40">
                          <td className="p-3 font-semibold text-cyan-300">Manual Penetration Testing</td>
                          <td className="p-3">Simulate realistic adversary attack chains across the entire system</td>
                          <td className="p-3 text-rose-300">Coverage depends on tester skill, scope, and time boundaries</td>
                          <td className="p-3">Major milestone releases & annual audits</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3">
                    <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      The Continuous Security Lifecycle (NIST SSDF SP 800-218)
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center text-xs">
                      <div className="p-2.5 rounded bg-slate-800/80 border border-slate-700">
                        <span className="font-bold text-cyan-400 block">1. Requirements</span>
                        <span className="text-[11px] text-slate-400">Assets & Trust Boundaries</span>
                      </div>
                      <div className="p-2.5 rounded bg-slate-800/80 border border-slate-700">
                        <span className="font-bold text-blue-400 block">2. Code Review</span>
                        <span className="text-[11px] text-slate-400">Manual + SAST + SCA</span>
                      </div>
                      <div className="p-2.5 rounded bg-slate-800/80 border border-slate-700">
                        <span className="font-bold text-indigo-400 block">3. DAST Testing</span>
                        <span className="text-[11px] text-slate-400">Staging Fuzzing & Authz</span>
                      </div>
                      <div className="p-2.5 rounded bg-slate-800/80 border border-slate-700">
                        <span className="font-bold text-amber-400 block">4. Triage & Fix</span>
                        <span className="text-[11px] text-slate-400">Root-Cause Remediation</span>
                      </div>
                      <div className="p-2.5 rounded bg-slate-800/80 border border-slate-700">
                        <span className="font-bold text-emerald-400 block">5. Retest & Gate</span>
                        <span className="text-[11px] text-slate-400">Automated Regressions</span>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION 16.3 */}
              {selectedTopic === 3 && (
                <section className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Section 16.3</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Establishing Review Scope & Security Context</h2>
                  </div>

                  <p className="text-slate-300 leading-relaxed text-sm">
                    A security reviewer cannot evaluate code in a vacuum. Before inspecting a single line, the reviewer must understand what the application protects, who its users are, and where untrusted data enters the system.
                  </p>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                      <h3 className="text-sm font-bold text-cyan-300 flex items-center space-x-2">
                        <Database className="w-4 h-4 text-cyan-400" />
                        <span>1. Identify Sensitive Assets</span>
                      </h3>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        Identify all data and operations whose loss of Confidentiality, Integrity, or Availability would create substantial business harm:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3 text-xs">
                        <div className="p-2 bg-slate-800/60 rounded border border-slate-700/60 text-slate-300">
                          <span className="font-semibold text-rose-300 block">Credentials & Secrets</span>
                          User passwords, JWT signing keys, OAuth tokens, DB credentials.
                        </div>
                        <div className="p-2 bg-slate-800/60 rounded border border-slate-700/60 text-slate-300">
                          <span className="font-semibold text-amber-300 block">Private PII & Workflows</span>
                          Candidate resumes, interview transcripts, evaluator scorecards.
                        </div>
                        <div className="p-2 bg-slate-800/60 rounded border border-slate-700/60 text-slate-300">
                          <span className="font-semibold text-emerald-300 block">Administrative Controls</span>
                          Recruiter assignment mappings, user role escalation, billing APIs.
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                      <h3 className="text-sm font-bold text-cyan-300 flex items-center space-x-2">
                        <Share2 className="w-4 h-4 text-cyan-400" />
                        <span>2. Map Trust Boundaries</span>
                      </h3>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        Every crossing of a trust boundary requires explicit authentication, authorization, and semantic input validation:
                      </p>
                      <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside mt-2">
                        <li><strong>Web Browser to Backend REST API:</strong> Untrusted client parameters, headers, and cookies.</li>
                        <li><strong>Candidate Account to Recruiter Account:</strong> Horizontal role and tenant isolation boundaries.</li>
                        <li><strong>Application Server to Relational Database:</strong> Query boundary requiring parameterized bindings.</li>
                        <li><strong>Application Server to External AI Provider:</strong> API key authorization and prompt injection containment.</li>
                        <li><strong>Uploaded Resume to Document Parser:</strong> Untrusted file streams processed by external libraries.</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                      <h3 className="text-sm font-bold text-cyan-300 flex items-center space-x-2">
                        <Target className="w-4 h-4 text-cyan-400" />
                        <span>3. Review Sensitive Entry Points First</span>
                      </h3>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        Security review prioritizes high-impact operational paths over trivial cosmetic files. Always begin reviews with:
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {["Auth & Password Reset", "Object Retrieval by ID", "File Upload Handlers", "Raw DB Queries & Aggregations", "Privilege Granting Routes", "Webhooks & Callback Handlers"].map((item, idx) => (
                          <span key={idx} className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-cyan-300 text-[11px] font-mono">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION 16.4 */}
              {selectedTopic === 4 && (
                <section className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Section 16.4</span>
                    <h2 className="text-2xl font-bold text-white mt-1">A Systematic Secure Code Review Method</h2>
                  </div>

                  <p className="text-slate-300 leading-relaxed text-sm">
                    Rather than randomly browsing files, professional reviewers execute a disciplined 5-step methodology that traces data flows from untrusted inputs to sensitive operations.
                  </p>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                      <span className="text-xs font-bold text-cyan-400 uppercase font-mono">Step 1 — Understand Intended Business Behavior</span>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Read PR descriptions, Jira acceptance criteria, and API contracts. Identify the intended actors: Who is permitted to call this endpoint? What state transitions should occur? If the security specification is ambiguous, record the ambiguity rather than assuming the existing code is correct.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                      <span className="text-xs font-bold text-cyan-400 uppercase font-mono">Step 2 — Trace Input from Source to Sensitive Sink</span>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Identify where the data enters the application (Source), how it is transformed, parsed, or normalized, and which critical operation it reaches (Sink).
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2 text-xs">
                        <div className="p-3 rounded bg-slate-800/60 border border-slate-700/60">
                          <span className="font-bold text-rose-400 block mb-1">Untrusted Sources</span>
                          <span className="text-slate-400">`req.body`, `req.params`, `req.query`, `req.headers`, `req.cookies`, uploaded file streams, external webhook payloads.</span>
                        </div>
                        <div className="p-3 rounded bg-slate-800/60 border border-slate-700/60">
                          <span className="font-bold text-amber-400 block mb-1">Sensitive Sinks</span>
                          <span className="text-slate-400">`db.query()`, `fs.writeFile()`, `child_process.exec()`, `res.redirect()`, `element.innerHTML`, `crypto.createCipheriv()`.</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                      <span className="text-xs font-bold text-cyan-400 uppercase font-mono">Step 3 — Examine Security Controls at the Sink</span>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Verify that protection is applied immediately at the sensitive sink where execution takes place. Client-side input validation on a React form is convenient for UI feedback, but it does NOT substitute for parameterized queries or server-side authorization middleware.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                      <span className="text-xs font-bold text-cyan-400 uppercase font-mono">Step 4 — Examine Failure Paths & Edge Conditions</span>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        What happens when database lookups time out? When invalid JSON is submitted? When a token is expired? When a transaction partially fails? An unhandled exception or early return can bypass downstream authorization checks.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                      <span className="text-xs font-bold text-cyan-400 uppercase font-mono">Step 5 — Verify Automated Tests & Reproducible Evidence</span>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Confirm that unit and integration tests assert both positive permissions (authorized user receives 200 OK) and negative boundaries (unauthorized cross-tenant user receives 403 Forbidden or 404 Not Found).
                      </p>
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION 16.5 */}
              {selectedTopic === 5 && (
                <section className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Section 16.5</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Common Security Weaknesses Found in Reviews</h2>
                  </div>

                  <p className="text-slate-300 leading-relaxed text-sm">
                    Reviewers frequently encounter six major vulnerability patterns. Understanding their signature code warnings and root-cause remediations enables rapid detection during pull request reviews.
                  </p>

                  <div className="space-y-6">
                    {/* Weakness 1: Broken Access Control */}
                    <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-cyan-300 text-sm">1. Broken Object-Level Authorization (BOLA / IDOR)</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-rose-950 text-rose-400 border border-rose-800/50">High / Critical</span>
                      </div>
                      <p className="text-xs text-slate-300">
                        <strong>Warning Sign:</strong> The endpoint retrieves or updates a record using a client-provided route parameter ID without verifying that the authenticated user owns or is assigned to that record.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                        <div className="p-3 rounded bg-rose-950/20 border border-rose-800/40 text-rose-200">
                          <span className="text-rose-400 font-bold block mb-1">// UNSAFE PATTERN</span>
                          app.get("/api/reports/:id", async (req, res) =&gt; &#123;<br />
                          &nbsp;&nbsp;const report = await Report.findById(req.params.id);<br />
                          &nbsp;&nbsp;return res.json(report); // No ownership check!<br />
                          &#125;);
                        </div>
                        <div className="p-3 rounded bg-emerald-950/20 border border-emerald-800/40 text-emerald-200">
                          <span className="text-emerald-400 font-bold block mb-1">// REMEDIATED PATTERN</span>
                          app.get("/api/reports/:id", requireAuth, async (req, res) =&gt; &#123;<br />
                          &nbsp;&nbsp;const report = await Report.findOne(&#123;<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;_id: req.params.id, ownerId: req.user.id<br />
                          &nbsp;&nbsp;&#125;);<br />
                          &nbsp;&nbsp;if (!report) return res.status(404).json(&#123; error: "Not found" &#125;);<br />
                          &nbsp;&nbsp;return res.json(report);<br />
                          &#125;);
                        </div>
                      </div>
                    </div>

                    {/* Weakness 2: SQL Injection */}
                    <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-cyan-300 text-sm">2. SQL Injection via Dynamic Construction</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-rose-950 text-rose-400 border border-rose-800/50">Critical</span>
                      </div>
                      <p className="text-xs text-slate-300">
                        <strong>Warning Sign:</strong> Concatenating untrusted strings into query text. Dynamic table/column names must also be strictly allowlisted.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                        <div className="p-3 rounded bg-rose-950/20 border border-rose-800/40 text-rose-200">
                          <span className="text-rose-400 font-bold block mb-1">// UNSAFE: String concatenation</span>
                          const q = "SELECT * FROM users WHERE email = '" + req.body.email + "'";<br />
                          await db.query(q);
                        </div>
                        <div className="p-3 rounded bg-emerald-950/20 border border-emerald-800/40 text-emerald-200">
                          <span className="text-emerald-400 font-bold block mb-1">// REMEDIATED: Parameterized binding</span>
                          await db.query(<br />
                          &nbsp;&nbsp;"SELECT * FROM users WHERE email = $1",<br />
                          &nbsp;&nbsp;[req.body.email]<br />
                          );
                        </div>
                      </div>
                    </div>

                    {/* Weakness 3: XSS & Insecure DOM */}
                    <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-cyan-300 text-sm">3. Cross-Site Scripting (XSS) & Unsafe DOM Sinks</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-950 text-amber-400 border border-amber-800/50">High</span>
                      </div>
                      <p className="text-xs text-slate-300">
                        <strong>Warning Sign:</strong> Use of `innerHTML`, `dangerouslySetInnerHTML`, or `document.write` with user-controlled data.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                        <div className="p-3 rounded bg-rose-950/20 border border-rose-800/40 text-rose-200">
                          <span className="text-rose-400 font-bold block mb-1">// UNSAFE: innerHTML parses HTML</span>
                          element.innerHTML = userInput;
                        </div>
                        <div className="p-3 rounded bg-emerald-950/20 border border-emerald-800/40 text-emerald-200">
                          <span className="text-emerald-400 font-bold block mb-1">// REMEDIATED: textContent treats as text</span>
                          element.textContent = userInput;<br />
                          // In React: &lt;p&gt;&#123;userInput&#125;&lt;/p&gt; (escaped by default)
                        </div>
                      </div>
                    </div>

                    {/* Weakness 4: Insecure File Upload */}
                    <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-cyan-300 text-sm">4. Insecure File Upload & Path Traversal</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-rose-950 text-rose-400 border border-rose-800/50">High</span>
                      </div>
                      <p className="text-xs text-slate-300">
                        <strong>Warning Sign:</strong> Trusting `file.originalname` or saving files into web-executable root directories. Remediate with server-generated UUID filenames, magic byte verification, and isolated non-executable storage.
                      </p>
                    </div>

                    {/* Weakness 5: Secrets & Key Misuse */}
                    <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-cyan-300 text-sm">5. Hardcoded Secrets & Cryptographic Misuse</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-rose-950 text-rose-400 border border-rose-800/50">Critical</span>
                      </div>
                      <p className="text-xs text-slate-300">
                        <strong>Warning Sign:</strong> Committing static API keys or fallback secrets. If an exposed secret is discovered, merely deleting it in a subsequent commit is insufficient; the secret must be actively revoked and rotated in the credential provider.
                      </p>
                    </div>

                    {/* Weakness 6: Insecure Error Handling & Leaky Logs */}
                    <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-cyan-300 text-sm">6. Verbose Error Traces & Credential Logging</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-950 text-amber-400 border border-amber-800/50">Medium</span>
                      </div>
                      <p className="text-xs text-slate-300">
                        <strong>Warning Sign:</strong> Returning raw SQL error stacks to users or printing `req.body` (including plaintext passwords) into centralized logs. Production endpoints should return generic correlation error IDs (&apos;&#123; error: &quot;Internal Error&quot;, requestId: &quot;req-982&quot; &#125;&apos;).
                      </p>
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION 16.6 */}
              {selectedTopic === 6 && (
                <section className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Section 16.6</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Static Application Security Testing (SAST)</h2>
                  </div>

                  <p className="text-slate-300 leading-relaxed text-sm">
                    Static Application Security Testing (SAST) tools analyze source code, AST (Abstract Syntax Tree) representations, and data-flow call graphs without running the application. SAST provides early feedback during the development phase and is well-suited for automated CI integration.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3">
                      <div className="flex items-center space-x-2 text-cyan-400 font-bold text-sm">
                        <Code2 className="w-4 h-4" />
                        <span>Semgrep (Fast Pattern Matching)</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Semgrep uses concrete source code syntax patterns combined with lightweight taint tracking. It excels at fast pull-request scans (sub-30s) and custom organization-specific rule enforcement.
                      </p>
                      <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-cyan-300">
                        $ semgrep scan --config auto --error
                      </div>
                      <a
                        href="https://semgrep.dev/docs/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-cyan-400 hover:underline flex items-center mt-2"
                      >
                        <span>Official Semgrep Documentation</span>
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3">
                      <div className="flex items-center space-x-2 text-indigo-400 font-bold text-sm">
                        <Binary className="w-4 h-4" />
                        <span>GitHub CodeQL (Semantic Database Queries)</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        CodeQL compiles codebases into relational data stores and executes complex QL queries to perform inter-procedural taint flow analysis, cross-file tracking, and deep vulnerability identification.
                      </p>
                      <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-indigo-300">
                        $ codeql database analyze --format=sarif-latest
                      </div>
                      <a
                        href="https://codeql.github.com/docs/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-indigo-400 hover:underline flex items-center mt-2"
                      >
                        <span>Official CodeQL Documentation</span>
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                    <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Critical SAST Limitations to Remember
                    </h3>
                    <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                      <li><strong>False Positives:</strong> Reports paths that are neutralized by middleware or unreachable in the deployed production environment.</li>
                      <li><strong>False Negatives:</strong> Misses complex multi-step business logic flaws (e.g. recruiter permissions).</li>
                      <li><strong>Dynamic State Blindness:</strong> Cannot inspect runtime configurations, third-party database state, or microservice API responses.</li>
                    </ul>
                  </div>
                </section>
              )}

              {/* SECTION 16.7 */}
              {selectedTopic === 7 && (
                <section className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Section 16.7</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Software Composition Analysis (SCA) & Dependencies</h2>
                  </div>

                  <p className="text-slate-300 leading-relaxed text-sm">
                    Modern applications frequently consist of over 80% open-source third-party dependencies. A critical vulnerability in an indirect transitive dependency can compromise the application even when the first-party codebase is written securely.
                  </p>

                  <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3">
                    <h3 className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                      Node.js Baseline SCA Workflow
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded bg-slate-950 border border-slate-800">
                        <span className="font-mono text-cyan-400 block mb-1">$ npm ci</span>
                        <p className="text-slate-300">
                          Installs exact package versions locked in `package-lock.json`. Avoids accidental floating version drift in automated CI builds.
                        </p>
                      </div>
                      <div className="p-3 rounded bg-slate-950 border border-slate-800">
                        <span className="font-mono text-cyan-400 block mb-1">$ npm audit --audit-level=high</span>
                        <p className="text-slate-300">
                          Compares dependency dependency tree against npm security advisory database and exits with code 1 on high/critical findings.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/40 text-xs text-amber-300 space-y-1.5">
                    <span className="font-bold flex items-center">
                      <AlertTriangle className="w-4 h-4 mr-1.5 text-amber-400" />
                      Reachability vs. Presence Analysis:
                    </span>
                    <p className="leading-relaxed">
                      A reported CVE in a dependency does NOT automatically mean the deployed system is exploitable. If the vulnerable method is never invoked or reachable from the application&apos;s code paths, the true risk may be minimal. Conversely, a package with zero reported CVEs may still contain undiscovered 0-day flaws or malicious typosquatting commits.
                    </p>
                  </div>
                </section>
              )}

              {/* SECTION 16.8 */}
              {selectedTopic === 8 && (
                <section className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Section 16.8</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Dynamic Application Security Testing (DAST)</h2>
                  </div>

                  <p className="text-slate-300 leading-relaxed text-sm">
                    Dynamic Application Security Testing (DAST) evaluates running applications from their exposed HTTP/WebSocket endpoints. DAST is technology-agnostic and detects misconfigured HTTP response headers, CORS flaws, cookie vulnerabilities, and runtime injection.
                  </p>

                  <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-cyan-300 flex items-center space-x-2">
                        <Globe className="w-4 h-4 text-cyan-400" />
                        <span>Baseline DAST Workflow with OWASP ZAP (Zed Attack Proxy)</span>
                      </span>
                      <a
                        href="https://www.zaproxy.org/getting-started/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-cyan-400 hover:underline flex items-center"
                      >
                        <span>OWASP ZAP Guide</span>
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>

                    <div className="space-y-2 text-xs text-slate-300">
                      <div className="flex items-start space-x-2">
                        <span className="font-bold text-cyan-400 font-mono">1.</span>
                        <span><strong>Scope Definition:</strong> Explicitly configure target URL and include/exclude regexes. Never point active scanners outside approved staging domains.</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="font-bold text-cyan-400 font-mono">2.</span>
                        <span><strong>Spider & Passive Scan:</strong> Crawl application through proxy. Passively inspect response headers (CSP, HSTS, XFO) and cookie flags without modifying server state.</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="font-bold text-cyan-400 font-mono">3.</span>
                        <span><strong>Authenticated Active Scan:</strong> Feed authorization bearer tokens or session cookies to fuzz authenticated API endpoints with bounded request rates.</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="font-bold text-cyan-400 font-mono">4.</span>
                        <span><strong>Triage & Manual Reproduction:</strong> Verify every reported alert manually in Burp Suite or Postman before creating developer issue tickets.</span>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION 16.9 */}
              {selectedTopic === 9 && (
                <section className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Section 16.9</span>
                    <h2 className="text-2xl font-bold text-white mt-1">API Security Testing & Authorization Verification</h2>
                  </div>

                  <p className="text-slate-300 leading-relaxed text-sm">
                    APIs can return a technically valid `200 OK` response while still violating critical security policies. Generic automated scanners frequently miss business-logic flaws and object-level authorization bypasses because the requests follow syntactically valid JSON schemas.
                  </p>

                  <h3 className="text-base font-bold text-white">Prepspaces API Security Test Matrix</h3>
                  <div className="overflow-x-auto border border-slate-800 rounded-xl">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead className="bg-slate-900 text-slate-300 font-semibold border-b border-slate-800">
                        <tr>
                          <th className="p-3">Scenario ID</th>
                          <th className="p-3">Client Identity</th>
                          <th className="p-3">Operation & Target</th>
                          <th className="p-3">Expected Security Behavior</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 text-slate-300">
                        <tr className="hover:bg-slate-900/40">
                          <td className="p-3 font-mono text-cyan-400">AUTH-01</td>
                          <td className="p-3">Unauthenticated Anonymous User</td>
                          <td className="p-3 font-mono">GET /api/reports/4821</td>
                          <td className="p-3 text-rose-300 font-semibold">401 Unauthorized (Blocked)</td>
                        </tr>
                        <tr className="hover:bg-slate-900/40">
                          <td className="p-3 font-mono text-cyan-400">AUTHZ-01</td>
                          <td className="p-3">Candidate Samarth (Owner)</td>
                          <td className="p-3 font-mono">GET /api/reports/4821</td>
                          <td className="p-3 text-emerald-300 font-semibold">200 OK (Allowed)</td>
                        </tr>
                        <tr className="hover:bg-slate-900/40">
                          <td className="p-3 font-mono text-cyan-400">AUTHZ-02</td>
                          <td className="p-3">Candidate Alice (Non-Owner)</td>
                          <td className="p-3 font-mono">GET /api/reports/4821</td>
                          <td className="p-3 text-rose-300 font-semibold">404 Not Found (Denied)</td>
                        </tr>
                        <tr className="hover:bg-slate-900/40">
                          <td className="p-3 font-mono text-cyan-400">AUTHZ-03</td>
                          <td className="p-3">Recruiter Sarah (Assigned)</td>
                          <td className="p-3 font-mono">GET /api/reports/4821</td>
                          <td className="p-3 text-emerald-300 font-semibold">200 OK (Allowed by assignment)</td>
                        </tr>
                        <tr className="hover:bg-slate-900/40">
                          <td className="p-3 font-mono text-cyan-400">AUTHZ-04</td>
                          <td className="p-3">Recruiter Dave (Unassigned)</td>
                          <td className="p-3 font-mono">GET /api/reports/4821</td>
                          <td className="p-3 text-rose-300 font-semibold">403 Forbidden (Denied)</td>
                        </tr>
                        <tr className="hover:bg-slate-900/40">
                          <td className="p-3 font-mono text-cyan-400">MASS-01</td>
                          <td className="p-3">Candidate Samarth</td>
                          <td className="p-3 font-mono">PATCH /api/users/profile &#123; role: &quot;admin&quot; &#125;</td>
                          <td className="p-3 text-amber-300 font-semibold">400 Bad Request or Role Ignored</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              )}

              {/* SECTION 16.10 */}
              {selectedTopic === 10 && (
                <section className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Section 16.10</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Writing Effective Security Test Cases</h2>
                  </div>

                  <p className="text-slate-300 leading-relaxed text-sm">
                    A security test case must be repeatable, scoped to an authorized environment, and tied to an explicit security requirement. Vague instructions such as &quot;verify API security&quot; fail in automated CI pipelines.
                  </p>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="font-bold text-cyan-400">Test Case Specification: AUTHZ-REPORT-001</span>
                      <span className="text-emerald-400">Status: PASSING</span>
                    </div>
                    <div className="space-y-1.5 text-slate-300">
                      <div><strong className="text-slate-400">Objective:</strong> Verify Candidate A cannot access Candidate B&apos;s interview scorecard.</div>
                      <div><strong className="text-slate-400">Preconditions:</strong> Test account A (usr_101) and test account B (usr_202) provisioned with distinct reports.</div>
                      <div><strong className="text-slate-400">Procedure:</strong></div>
                      <ol className="list-decimal list-inside pl-2 space-y-1 text-slate-400">
                        <li>Authenticate as Candidate A; store JWT token `token_a`.</li>
                        <li>Send `GET /api/reports/7710` (owned by B) with `Authorization: Bearer token_a`.</li>
                        <li>Assert HTTP response status is 404 or 403.</li>
                        <li>Assert response body does NOT contain Candidate B&apos;s score, notes, or PII.</li>
                      </ol>
                      <div><strong className="text-slate-400">Automated Jest Implementation:</strong></div>
                      <div className="p-3 rounded bg-slate-950 border border-slate-800 text-cyan-300">
                        it(&quot;should reject cross-tenant report retrieval with 404&quot;, async () =&gt; &#123;<br />
                        &nbsp;&nbsp;const res = await request(app)<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;.get(&quot;/api/reports/7710&quot;)<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;.set(&quot;Authorization&quot;, `Bearer $&#123;tokenA&#125;`);<br />
                        &nbsp;&nbsp;expect(res.status).toBe(404);<br />
                        &nbsp;&nbsp;expect(res.body.notes).toBeUndefined();<br />
                        &#125;);
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION 16.11 */}
              {selectedTopic === 11 && (
                <section className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Section 16.11</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Finding Validation, Triage & Risk Prioritization</h2>
                  </div>

                  <p className="text-slate-300 leading-relaxed text-sm">
                    Automated tools and human reviewers generate hundreds of candidate findings. Security engineers must classify each finding accurately into one of four states and prioritize remediation based on real-world business context.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                      <span className="font-bold text-rose-400 block text-sm">Confirmed Vulnerability</span>
                      <p className="text-slate-300">
                        Reproducible evidence demonstrates that a security policy is violated under documented conditions. The code path is reachable and exploitable.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                      <span className="font-bold text-amber-400 block text-sm">Needs Investigation</span>
                      <p className="text-slate-300">
                        The alert is plausible, but additional context is required to determine whether input is truly attacker-controlled or whether upstream middleware neutralizes it.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                      <span className="font-bold text-emerald-400 block text-sm">False Positive</span>
                      <p className="text-slate-300">
                        The scanner reported a pattern that does not constitute a defect in the assessed environment (e.g., test mock file or unreachable internal debug path).
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                      <span className="font-bold text-blue-400 block text-sm">Accepted Risk</span>
                      <p className="text-slate-300">
                        An authorized risk owner explicitly signs off on residual risk under organizational governance. This does NOT mean the defect is resolved.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                    <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Severity SLA Matrix (NIST SSDF SP 800-218)
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center text-xs">
                      <div className="p-2.5 rounded bg-rose-950/40 border border-rose-800/50">
                        <span className="font-bold text-rose-400 block">Critical</span>
                        <span className="text-[11px] text-slate-400">Remediate in 24–48h</span>
                      </div>
                      <div className="p-2.5 rounded bg-amber-950/40 border border-amber-800/50">
                        <span className="font-bold text-amber-400 block">High</span>
                        <span className="text-[11px] text-slate-400">Remediate in 7 days</span>
                      </div>
                      <div className="p-2.5 rounded bg-blue-950/40 border border-blue-800/50">
                        <span className="font-bold text-blue-400 block">Medium</span>
                        <span className="text-[11px] text-slate-400">Remediate in 30 days</span>
                      </div>
                      <div className="p-2.5 rounded bg-slate-800 border border-slate-700">
                        <span className="font-bold text-slate-300 block">Low / Info</span>
                        <span className="text-[11px] text-slate-400">Planned sprint hygiene</span>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION 16.12 */}
              {selectedTopic === 12 && (
                <section className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Section 16.12</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Writing High-Quality, Actionable Security Findings</h2>
                  </div>

                  <p className="text-slate-300 leading-relaxed text-sm">
                    A developer cannot fix a defect if the security ticket says &quot;the API is insecure.&quot; High-quality vulnerability reports must include clean reproduction steps, identified root causes, business impact, and verification criteria.
                  </p>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3 font-mono text-xs">
                    <div className="text-cyan-400 font-bold border-b border-slate-800 pb-2">
                      Finding Report Standard: WEB-AUTHZ-001
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-300">
                      <div><strong>Title:</strong> Missing Object-Level Authorization on Report Retrieval</div>
                      <div><strong>Severity:</strong> High (CVSS 7.5 - AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:N/A:N)</div>
                      <div><strong>Component:</strong> `controllers/reportController.js:42`</div>
                      <div><strong>CWE:</strong> CWE-639 / OWASP API1:2023</div>
                    </div>
                    <div className="text-slate-300 space-y-1 pt-2 border-t border-slate-800/80">
                      <div><strong className="text-slate-400">Business Impact:</strong> Any authenticated candidate can read proprietary interview evaluations, scores, and recruiter notes of competing candidates by incrementing IDs.</div>
                      <div><strong className="text-slate-400">Minimal Reproduction:</strong> `curl -H &quot;Authorization: Bearer token_a&quot; https://api.prepspaces.local/reports/7710` returns Alice&apos;s score 98.</div>
                      <div><strong className="text-slate-400">Root Cause:</strong> Unscoped `findById(id)` does not join or filter by `req.user.id`.</div>
                      <div><strong className="text-slate-400">Recommended Fix:</strong> Scope MongoDB query with &apos;&#123; _id: id, ownerId: req.user.id &#125;&apos; and add automated test.</div>
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION 16.13 */}
              {selectedTopic === 13 && (
                <section className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Section 16.13</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Secure Remediation & Root-Cause Fixes</h2>
                  </div>

                  <p className="text-slate-300 leading-relaxed text-sm">
                    Remediation should eliminate the underlying flaw across all codepaths rather than merely blocking a specific exploit payload or hiding a UI button.
                  </p>

                  <h3 className="text-base font-bold text-white">Weak Workaround vs. Strong Root-Cause Fix</h3>
                  <div className="overflow-x-auto border border-slate-800 rounded-xl">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead className="bg-slate-900 text-slate-300 font-semibold border-b border-slate-800">
                        <tr>
                          <th className="p-3">Vulnerability</th>
                          <th className="p-3 text-rose-400">Weak / Fragile Workaround</th>
                          <th className="p-3 text-emerald-400">Strong Root-Cause Remediation</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 text-slate-300">
                        <tr className="hover:bg-slate-900/40">
                          <td className="p-3 font-semibold text-cyan-300">SQL Injection</td>
                          <td className="p-3 text-rose-300">Filtering single quotes (`&apos;`) with regex</td>
                          <td className="p-3 text-emerald-300">Parameterized queries with bind variables ($1)</td>
                        </tr>
                        <tr className="hover:bg-slate-900/40">
                          <td className="p-3 font-semibold text-cyan-300">BOLA / IDOR</td>
                          <td className="p-3 text-rose-300">Hiding download button in React frontend</td>
                          <td className="p-3 text-emerald-300">Enforce server-side ownership query on data layer</td>
                        </tr>
                        <tr className="hover:bg-slate-900/40">
                          <td className="p-3 font-semibold text-cyan-300">XSS</td>
                          <td className="p-3 text-rose-300">Stripping `&lt;script&gt;` tags from string</td>
                          <td className="p-3 text-emerald-300">Context-aware encoding & textContent DOM APIs</td>
                        </tr>
                        <tr className="hover:bg-slate-900/40">
                          <td className="p-3 font-semibold text-cyan-300">Committed Secret</td>
                          <td className="p-3 text-rose-300">Deleting string in a new Git commit</td>
                          <td className="p-3 text-emerald-300">Revoke key in cloud IAM, rotate secret, scrub git history</td>
                        </tr>
                        <tr className="hover:bg-slate-900/40">
                          <td className="p-3 font-semibold text-cyan-300">File Upload</td>
                          <td className="p-3 text-rose-300">Checking `.pdf` filename extension string</td>
                          <td className="p-3 text-emerald-300">Verify magic byte headers, assign UUID, isolate storage</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              )}

              {/* SECTION 16.14 */}
              {selectedTopic === 14 && (
                <section className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Section 16.14</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Remediation Validation & Regression Testing</h2>
                  </div>

                  <p className="text-slate-300 leading-relaxed text-sm">
                    A vulnerability is never closed merely because a PR is merged or a scanner stops alerting. Security engineers must execute the full retesting sequence, verifying both the negative security boundary and legitimate business operations.
                  </p>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                    <h3 className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                      The Remediation Retesting Sequence
                    </h3>
                    <div className="space-y-2 text-xs text-slate-300">
                      <div className="flex items-center space-x-2">
                        <span className="px-2 py-0.5 rounded bg-slate-800 font-mono text-cyan-400">Phase 1</span>
                        <span><strong>Baseline Confirmation:</strong> Reproduce defect on unpatched staging baseline to confirm exploitability.</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="px-2 py-0.5 rounded bg-slate-800 font-mono text-cyan-400">Phase 2</span>
                        <span><strong>Code Review of Fix:</strong> Ensure patch does not introduce side effects, loose permissions, or credential logging.</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="px-2 py-0.5 rounded bg-slate-800 font-mono text-cyan-400">Phase 3</span>
                        <span><strong>Retest Security Boundary:</strong> Re-execute exploit; verify unauthorized access returns 403 or 404.</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="px-2 py-0.5 rounded bg-slate-800 font-mono text-cyan-400">Phase 4</span>
                        <span><strong>Functional Regression Suite:</strong> Confirm legitimate owners and authorized assigned recruiters still succeed.</span>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION 16.15 */}
              {selectedTopic === 15 && (
                <section className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Section 16.15</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Integrating Security Testing into CI/CD Pipelines</h2>
                  </div>

                  <p className="text-slate-300 leading-relaxed text-sm">
                    Continuous integration automates security controls at every commit, shifting security left into the developer&apos;s daily pull-request workflow rather than serving as a bottleneck before release.
                  </p>

                  <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3">
                    <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider font-mono">
                      DevSecOps Multi-Stage Pipeline Architecture
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="p-2 rounded bg-slate-800 border border-slate-700 text-slate-300 font-mono">1. PR Open</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                      <span className="p-2 rounded bg-slate-800 border border-slate-700 text-cyan-300 font-mono">2. Lint/Format</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                      <span className="p-2 rounded bg-slate-800 border border-slate-700 text-rose-300 font-mono">3. Secrets Scan</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                      <span className="p-2 rounded bg-slate-800 border border-slate-700 text-indigo-300 font-mono">4. SAST (Semgrep)</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                      <span className="p-2 rounded bg-slate-800 border border-slate-700 text-amber-300 font-mono">5. SCA (npm audit)</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                      <span className="p-2 rounded bg-slate-800 border border-slate-700 text-blue-300 font-mono">6. DAST/Authz</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                      <span className="p-2 rounded bg-emerald-950/80 border border-emerald-700 text-emerald-300 font-bold font-mono">7. Policy Gate</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs text-slate-300">
                    <h4 className="font-bold text-slate-200 uppercase tracking-wider">
                      Effective Release Security Gate Policies
                    </h4>
                    <ul className="space-y-1 list-disc list-inside">
                      <li><strong>Zero Secrets Policy:</strong> Immediate hard build fail if Gitleaks detects AWS/Stripe/JWT credentials.</li>
                      <li><strong>Critical SAST Gate:</strong> Block merges for high-confidence SQLi, RCE, or path traversal findings.</li>
                      <li><strong>SCA Threshold:</strong> Fail builds on known exploitable vulnerabilities with available patch versions.</li>
                      <li><strong>Authz Regression Requirement:</strong> 100% pass rate required for cross-tenant authorization test suites.</li>
                    </ul>
                  </div>
                </section>
              )}

              {/* SECTION 16.16: PRACTICAL LAB */}
              {selectedTopic === 16 && (
                <section className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Section 16.16</span>
                    <h2 className="text-2xl font-bold text-white mt-1">
                      Practical Lab: Secure Code Review & Remediation Validation
                    </h2>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-cyan-300 text-sm">Lab Scenario: Audit the Prepspaces Mock Interview API</span>
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-cyan-950 text-cyan-400 border border-cyan-800/50">
                        90–120 Minutes
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      You are tasked with reviewing the interview scorecard endpoint of a mock interview platform. Follow tasks 1 through 5 to inspect the code, execute static/dynamic scans, implement a root-cause remediation, and compile a standardized lab report.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2">
                      <div className="p-3 rounded bg-slate-950 border border-slate-800 space-y-1">
                        <span className="font-bold text-cyan-400">Task 1: Establish Scope</span>
                        <p className="text-slate-400">Document assets, roles (candidate, recruiter, admin), and boundaries.</p>
                      </div>
                      <div className="p-3 rounded bg-slate-950 border border-slate-800 space-y-1">
                        <span className="font-bold text-cyan-400">Task 2: Code Review</span>
                        <p className="text-slate-400">Trace input from `req.params.reportId` to MongoDB query sink.</p>
                      </div>
                      <div className="p-3 rounded bg-slate-950 border border-slate-800 space-y-1">
                        <span className="font-bold text-cyan-400">Task 3: Automated Scans</span>
                        <p className="text-slate-400">Execute `npm audit` and Semgrep security rules.</p>
                      </div>
                      <div className="p-3 rounded bg-slate-950 border border-slate-800 space-y-1">
                        <span className="font-bold text-cyan-400">Task 4 & 5: Fix & Retest</span>
                        <p className="text-slate-400">Enforce ownership filter and assert both 200 OK and 404 responses.</p>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Lab Worksheet Generator */}
                  <div className="p-5 rounded-xl bg-slate-900/90 border border-cyan-500/30 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-cyan-300 flex items-center space-x-2">
                        <FileSpreadsheet className="w-4 h-4 text-cyan-400" />
                        <span>Interactive Security Finding Worksheet & Lab Report</span>
                      </h3>
                      <button
                        onClick={copyLabReport}
                        className="px-3 py-1 rounded bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-xs flex items-center space-x-1.5 transition"
                      >
                        {reportCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{reportCopied ? "Copied Report!" : "Copy Lab Report"}</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="space-y-1">
                        <label className="text-slate-400 font-semibold">Finding Title</label>
                        <input
                          type="text"
                          value={labFindingTitle}
                          onChange={(e) => setLabFindingTitle(e.target.value)}
                          className="w-full p-2 bg-slate-950 border border-slate-700 rounded text-slate-200 text-xs focus:border-cyan-400 focus:outline-none"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-slate-400 font-semibold">Severity Assessment</label>
                        <select
                          value={labSeverity}
                          onChange={(e) => setLabSeverity(e.target.value)}
                          className="w-full p-2 bg-slate-950 border border-slate-700 rounded text-slate-200 text-xs focus:border-cyan-400 focus:outline-none"
                        >
                          <option value="Critical">Critical</option>
                          <option value="High">High</option>
                          <option value="Medium">Medium</option>
                          <option value="Low">Low</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1 text-xs">
                      <label className="text-slate-400 font-semibold">Evidence & Reproduction Summary</label>
                      <textarea
                        rows={3}
                        value={labEvidence}
                        onChange={(e) => setLabEvidence(e.target.value)}
                        className="w-full p-2 bg-slate-950 border border-slate-700 rounded text-slate-200 text-xs focus:border-cyan-400 focus:outline-none font-mono"
                      />
                    </div>

                    <div className="space-y-1 text-xs">
                      <label className="text-slate-400 font-semibold">Root Cause Analysis</label>
                      <textarea
                        rows={2}
                        value={labRootCause}
                        onChange={(e) => setLabRootCause(e.target.value)}
                        className="w-full p-2 bg-slate-950 border border-slate-700 rounded text-slate-200 text-xs focus:border-cyan-400 focus:outline-none font-mono"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="space-y-1">
                        <label className="text-slate-400 font-semibold">Proposed Remediation</label>
                        <textarea
                          rows={2}
                          value={labRemediation}
                          onChange={(e) => setLabRemediation(e.target.value)}
                          className="w-full p-2 bg-slate-950 border border-slate-700 rounded text-slate-200 text-xs focus:border-cyan-400 focus:outline-none font-mono"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-slate-400 font-semibold">Validation Status</label>
                        <select
                          value={labValidationStatus}
                          onChange={(e) => setLabValidationStatus(e.target.value)}
                          className="w-full p-2 bg-slate-950 border border-slate-700 rounded text-slate-200 text-xs focus:border-cyan-400 focus:outline-none"
                        >
                          <option value="Fixed and verified">Fixed and verified</option>
                          <option value="Partially fixed">Partially fixed</option>
                          <option value="Still vulnerable">Still vulnerable</option>
                          <option value="Inconclusive">Inconclusive</option>
                          <option value="Regression detected">Regression detected</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION 16.17: QUIZ */}
              {selectedTopic === 17 && (
                <section className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Section 16.17</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Knowledge Assessment Quiz</h2>
                  </div>

                  <p className="text-slate-300 text-sm">
                    Test your mastery of secure code review, SAST/DAST testing methodologies, triage classifications, and root-cause remediation validation.
                  </p>

                  <div className="space-y-6">
                    {quizQuestions.map((q, idx) => (
                      <div key={q.id} className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3">
                        <div className="flex items-start justify-between">
                          <span className="font-bold text-white text-xs sm:text-sm">
                            {idx + 1}. {q.question}
                          </span>
                          {quizSubmitted && (
                            <span
                              className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                                quizAnswers[q.id] === q.correct
                                  ? "bg-emerald-950 text-emerald-400 border border-emerald-800"
                                  : "bg-rose-950 text-rose-400 border border-rose-800"
                              }`}
                            >
                              {quizAnswers[q.id] === q.correct ? "Correct" : "Incorrect"}
                            </span>
                          )}
                        </div>

                        <div className="space-y-1.5">
                          {q.options.map((opt, optIdx) => (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectAnswer(q.id, optIdx)}
                              className={`w-full text-left p-2.5 rounded-lg text-xs transition flex items-center justify-between ${
                                quizAnswers[q.id] === optIdx
                                  ? "bg-cyan-500/20 text-cyan-200 border border-cyan-500/50"
                                  : "bg-slate-950/60 text-slate-300 border border-slate-800 hover:bg-slate-800"
                              } ${
                                quizSubmitted && optIdx === q.correct
                                  ? "bg-emerald-950/60 border-emerald-500 text-emerald-200"
                                  : ""
                              }`}
                            >
                              <span>{opt}</span>
                              {quizAnswers[q.id] === optIdx && (
                                <span className="w-2 h-2 rounded-full bg-cyan-400 ml-2 shrink-0" />
                              )}
                            </button>
                          ))}
                        </div>

                        {quizSubmitted && (
                          <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-[11px] text-slate-400 mt-2">
                            <span className="font-semibold text-cyan-400">Explanation: </span>
                            {q.explanation}
                          </div>
                        )}
                      </div>
                    ))}

                    <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                      <div className="text-xs text-slate-400 font-mono">
                        Answered: {Object.keys(quizAnswers).length} / 10
                      </div>
                      <div className="flex items-center space-x-3">
                        {quizSubmitted && (
                          <div className="text-sm font-bold text-cyan-400 font-mono">
                            Final Score: {quizScore} / 10 ({Math.round((quizScore / 10) * 100)}%)
                          </div>
                        )}
                        <button
                          onClick={() => setQuizSubmitted(!quizSubmitted)}
                          disabled={Object.keys(quizAnswers).length < 10}
                          className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-bold text-xs transition"
                        >
                          {quizSubmitted ? "Reset Quiz" : "Submit Answers"}
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION 16.18 */}
              {selectedTopic === 18 && (
                <section className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Section 16.18</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Official References & Authoritative Standards</h2>
                  </div>

                  <p className="text-slate-300 text-sm">
                    Professional application security engineering relies on standardized industry frameworks and published security benchmarks:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    {[
                      {
                        name: "OWASP Web Security Testing Guide (WSTG)",
                        desc: "Comprehensive testing framework for black-box and white-box web assessment.",
                        url: "https://owasp.org/www-project-web-security-testing-guide/",
                      },
                      {
                        name: "OWASP ASVS v4.0",
                        desc: "Application Security Verification Standard for web application security requirements.",
                        url: "https://owasp.org/www-project-application-security-verification-standard/",
                      },
                      {
                        name: "OWASP Code Review Guide",
                        desc: "Authoritative handbook on conducting structured, security-focused source code reviews.",
                        url: "https://owasp.org/www-project-code-review-guide/",
                      },
                      {
                        name: "NIST SSDF SP 800-218",
                        desc: "Secure Software Development Framework: practices for integrating security into the SDLC.",
                        url: "https://csrc.nist.gov/pubs/sp/800/218/final",
                      },
                      {
                        name: "NIST SP 800-115",
                        desc: "Technical Guide to Information Security Testing and Assessment.",
                        url: "https://csrc.nist.gov/pubs/sp/800/115/final",
                      },
                      {
                        name: "FIRST CVSS v3.1 / v4.0",
                        desc: "Common Vulnerability Scoring System specification and metric calculator.",
                        url: "https://www.first.org/cvss/",
                      },
                    ].map((ref, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                        <div className="font-bold text-cyan-400 text-sm">{ref.name}</div>
                        <p className="text-slate-400 leading-relaxed">{ref.desc}</p>
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-cyan-400 hover:underline flex items-center pt-1"
                        >
                          <span>Explore Official Standard</span>
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* SECTION 16.19 */}
              {selectedTopic === 19 && (
                <section className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Section 16.19</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Key Engineering Takeaways</h2>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-4">
                    <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                      <li className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span><strong>Multi-Disciplinary Assurance:</strong> SAST, DAST, SCA, and manual review provide complementary evidence. A clean scan from one scanner does not prove an application is secure.</span>
                      </li>
                      <li className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span><strong>Server-Enforced Boundaries:</strong> Authorization must be strictly validated on the server for every individual object and operation. Frontend guards are cosmetic.</span>
                      </li>
                      <li className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span><strong>Root-Cause Remediation:</strong> Fix the underlying architecture (parameterized queries, ownership predicates, isolated storage) rather than attempting payload blacklist filtering.</span>
                      </li>
                      <li className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span><strong>Retest the Security Property:</strong> Validate fixes against both unauthorized attacks (403/404) and legitimate user workflows (200 OK) to prevent breaking regressions.</span>
                      </li>
                      <li className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span><strong>Automated CI/CD Gates:</strong> Guard pull requests with automated secret scanning, SAST analysis, and authorization regressions to keep flaws out of production.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-800">
                    <button
                      onClick={() => setSelectedTopic(16)}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center"
                    >
                      <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                      <span>Previous: 16.16 Practical Lab</span>
                    </button>
                    <button
                      onClick={() => navigate("/learning/cybersecurity")}
                      className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center shadow-lg shadow-cyan-500/20"
                    >
                      <span>Complete Module 16 & Return to Track</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </button>
                  </div>
                </section>
              )}
            </div>
          )}

          {/* TAB 2: SIMULATOR 1 - SAST TAINT ANALYSIS */}
          {activeTab === "sast-sim" && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Simulator 1</span>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  SAST Code Reviewer & Taint Analysis Workbench
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Trace untrusted data from user-controlled HTTP sources through transformations into sensitive execution sinks.
                </p>
              </div>

              {/* Snippet Picker */}
              <div className="flex flex-wrap gap-2">
                {Object.keys(sastSnippets).map((key) => (
                  <button
                    key={key}
                    onClick={() => {
                      setSelectedSastSnippet(key);
                      setShowRemediatedCode(false);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                      selectedSastSnippet === key
                        ? "bg-cyan-500 text-slate-950 font-bold"
                        : "bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800"
                    }`}
                  >
                    {sastSnippets[key].name}
                  </button>
                ))}
              </div>

              {/* Code Display & Inspection Panel */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div>
                    <span className="text-xs font-bold text-white">{activeSnippet.vulnType}</span>
                    <div className="text-[11px] font-mono text-cyan-400 mt-0.5">{activeSnippet.scanner}</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setShowRemediatedCode(!showRemediatedCode)}
                      className={`px-3 py-1.5 rounded text-xs font-bold transition flex items-center space-x-1 ${
                        showRemediatedCode
                          ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20"
                          : "bg-slate-800 hover:bg-slate-700 text-slate-200"
                      }`}
                    >
                      {showRemediatedCode ? <Check className="w-3.5 h-3.5" /> : <ShieldCheck className="w-3.5 h-3.5" />}
                      <span>{showRemediatedCode ? "Showing Remediated Fix" : "Apply Secure Fix"}</span>
                    </button>
                    <button
                      onClick={() => copyCode(showRemediatedCode ? activeSnippet.safeCode : activeSnippet.unsafeCode, "sast")}
                      className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300"
                      title="Copy code"
                    >
                      {copiedCodeId === "sast" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Code Window */}
                <pre className="p-4 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono overflow-x-auto text-slate-200 leading-relaxed">
                  <code>{showRemediatedCode ? activeSnippet.safeCode : activeSnippet.unsafeCode}</code>
                </pre>

                {/* Taint Flow Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-2">
                  <div className="p-3 rounded bg-rose-950/30 border border-rose-800/40">
                    <span className="font-bold text-rose-400 block mb-1">Untrusted Source</span>
                    <code className="text-rose-200 font-mono text-[11px] block">{activeSnippet.sourceText}</code>
                  </div>
                  <div className="p-3 rounded bg-amber-950/30 border border-amber-800/40">
                    <span className="font-bold text-amber-400 block mb-1">Transformation / Path</span>
                    <code className="text-amber-200 font-mono text-[11px] block">{activeSnippet.transformText}</code>
                  </div>
                  <div className="p-3 rounded bg-cyan-950/30 border border-cyan-800/40">
                    <span className="font-bold text-cyan-400 block mb-1">Sensitive Sink</span>
                    <code className="text-cyan-200 font-mono text-[11px] block">{activeSnippet.sinkText}</code>
                  </div>
                </div>

                <div className="p-3 rounded bg-slate-950 border border-slate-800 text-xs text-slate-300">
                  <span className="font-bold text-cyan-400 font-mono">SAST AST Taint Rule: </span>
                  {activeSnippet.ruleExpl}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SIMULATOR 2 - DAST RUNTIME SCANNER */}
          {activeTab === "dast-sim" && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Simulator 2</span>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  DAST & Dynamic Web Scanner Console (OWASP ZAP)
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Simulate passive HTTP header auditing and active fuzzing against authenticated mock endpoints.
                </p>
              </div>

              {/* Controls */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <label className="text-slate-400 font-semibold block mb-1">Target Endpoint</label>
                    <select
                      value={dastTargetEndpoint}
                      onChange={(e) => setDastTargetEndpoint(e.target.value)}
                      className="w-full p-2 bg-slate-950 border border-slate-700 rounded text-slate-200 font-mono text-xs focus:outline-none"
                    >
                      <option value="/api/reports/4821">GET /api/reports/4821 (Report API)</option>
                      <option value="/api/v1/auth/reset">POST /api/v1/auth/reset (Password Reset)</option>
                      <option value="/api/resumes/upload">POST /api/resumes/upload (Resume Upload)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-slate-400 font-semibold block mb-1">Scan Strategy</label>
                    <div className="flex rounded bg-slate-950 p-1 border border-slate-700">
                      <button
                        onClick={() => setDastScanMode("passive")}
                        className={`flex-1 py-1 rounded text-[11px] font-semibold transition ${
                          dastScanMode === "passive" ? "bg-cyan-500 text-slate-950" : "text-slate-400"
                        }`}
                      >
                        Passive Analysis
                      </button>
                      <button
                        onClick={() => setDastScanMode("active")}
                        className={`flex-1 py-1 rounded text-[11px] font-semibold transition ${
                          dastScanMode === "active" ? "bg-cyan-500 text-slate-950" : "text-slate-400"
                        }`}
                      >
                        Active Fuzzing
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-400 font-semibold block mb-1">Target Server Defense</label>
                    <button
                      onClick={() => setTargetServerHardened(!targetServerHardened)}
                      className={`w-full py-2 rounded text-xs font-bold transition flex items-center justify-center space-x-1.5 ${
                        targetServerHardened
                          ? "bg-emerald-600 text-white"
                          : "bg-rose-950/80 border border-rose-800 text-rose-300"
                      }`}
                    >
                      {targetServerHardened ? <ShieldCheck className="w-3.5 h-3.5" /> : <ShieldAlert className="w-3.5 h-3.5" />}
                      <span>{targetServerHardened ? "Hardened API Gateway" : "Vulnerable Staging API"}</span>
                    </button>
                  </div>
                </div>

                <div className="flex justify-end pt-2 border-t border-slate-800">
                  <button
                    onClick={runDastScan}
                    disabled={dastScanning}
                    className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-bold text-xs flex items-center space-x-1.5 transition shadow-lg shadow-cyan-500/20"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>{dastScanning ? "Scanning Target..." : "Launch DAST Scan"}</span>
                  </button>
                </div>
              </div>

              {/* Console & Alerts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Console Log */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
                    <span className="flex items-center space-x-1.5">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      <span>OWASP ZAP Execution Logs</span>
                    </span>
                    <span className="text-[10px] text-slate-500">Port 8080 Proxy</span>
                  </div>
                  <div className="space-y-1 h-48 overflow-y-auto text-slate-300 text-[11px] leading-relaxed">
                    {dastLogs.length === 0 ? (
                      <span className="text-slate-600 italic">Click &quot;Launch DAST Scan&quot; to execute scan vectors...</span>
                    ) : (
                      dastLogs.map((log, i) => (
                        <div key={i} className={log.includes("ALERT") ? "text-rose-400 font-bold" : log.includes("SHIELD") ? "text-emerald-400" : ""}>
                          {log}
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Generated Alerts */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
                    <span className="text-xs font-bold text-white flex items-center space-x-1.5">
                      <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                      <span>ZAP Alert Inventory ({dastAlerts.length})</span>
                    </span>
                  </div>

                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {dastAlerts.length === 0 ? (
                      <div className="text-xs text-slate-500 italic p-4 text-center">
                        No active alerts. Run a scan to populate findings.
                      </div>
                    ) : (
                      dastAlerts.map((alert) => (
                        <div
                          key={alert.id}
                          className={`p-2.5 rounded-lg border text-xs space-y-1 ${
                            alert.severity === "High"
                              ? "bg-rose-950/30 border-rose-800/50 text-rose-200"
                              : alert.severity === "Medium"
                              ? "bg-amber-950/30 border-amber-800/50 text-amber-200"
                              : "bg-slate-800/60 border-slate-700 text-slate-300"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold">{alert.name}</span>
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">
                              {alert.severity}
                            </span>
                          </div>
                          <div className="text-[11px] text-slate-400">{alert.evidence}</div>
                          <div className="text-[11px] text-cyan-300 pt-0.5 font-mono">Fix: {alert.fix}</div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SIMULATOR 3 - CI/CD DEVSECOPS PIPELINE */}
          {activeTab === "cicd-sim" && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Simulator 3</span>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  DevSecOps CI/CD Security Pipeline & Release Gate
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Test how automated security gates evaluate pull requests across Secrets, SAST, SCA, and DAST stages.
                </p>
              </div>

              {/* Scenario Picker */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                <label className="text-xs font-bold text-slate-300 block">Select Pull Request Scenario to Test</label>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                  {[
                    { id: "clean", name: "Clean PR (All Pass)", icon: CheckCircle2, color: "text-emerald-400" },
                    { id: "secret", name: "Hardcoded AWS Key", icon: Key, color: "text-rose-400" },
                    { id: "sca", name: "Vulnerable jsonwebtoken", icon: Package, color: "text-amber-400" },
                    { id: "bola", name: "BOLA Authz Regression", icon: ShieldX, color: "text-rose-400" },
                  ].map((sc) => (
                    <button
                      key={sc.id}
                      onClick={() => {
                        setPipelineScenario(sc.id);
                        setPipelineResults(null);
                        setPipelineStage(0);
                      }}
                      className={`p-2.5 rounded-lg text-xs font-medium border text-left transition flex items-center space-x-2 ${
                        pipelineScenario === sc.id
                          ? "bg-cyan-500/15 border-cyan-500 text-cyan-300 font-bold"
                          : "bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800"
                      }`}
                    >
                      <sc.icon className={`w-3.5 h-3.5 ${sc.color} shrink-0`} />
                      <span className="truncate">{sc.name}</span>
                    </button>
                  ))}
                </div>

                <div className="flex justify-end pt-2 border-t border-slate-800">
                  <button
                    onClick={() => runPipeline(pipelineScenario)}
                    disabled={runningPipeline}
                    className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-bold text-xs flex items-center space-x-1.5 transition shadow-lg shadow-cyan-500/20"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>{runningPipeline ? "Running Pipeline..." : "Trigger CI/CD Pipeline"}</span>
                  </button>
                </div>
              </div>

              {/* Pipeline Visual Stages */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-7 gap-2">
                  {pipelineStages.map((stage) => {
                    const isCurrent = pipelineStage === stage.id;
                    const isPassed = pipelineStage > stage.id;
                    const isFailed = pipelineResults?.failedStage === stage.id;

                    return (
                      <div
                        key={stage.id}
                        className={`p-2.5 rounded-lg border text-center transition ${
                          isFailed
                            ? "bg-rose-950/60 border-rose-600 text-rose-200"
                            : isPassed
                            ? "bg-emerald-950/40 border-emerald-700 text-emerald-200"
                            : isCurrent
                            ? "bg-cyan-950/60 border-cyan-400 text-cyan-200 animate-pulse"
                            : "bg-slate-900/60 border-slate-800 text-slate-500"
                        }`}
                      >
                        <div className="text-[10px] font-mono uppercase tracking-wider mb-1">Stage {stage.id}</div>
                        <div className="text-[11px] font-bold truncate">{stage.name}</div>
                        <div className="text-[9px] text-slate-400 mt-1 truncate">{stage.tool}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Verdict Box */}
                {pipelineResults && (
                  <div
                    className={`p-4 rounded-xl border text-xs space-y-2 ${
                      pipelineResults.status === "APPROVED"
                        ? "bg-emerald-950/30 border-emerald-600/60 text-emerald-200"
                        : "bg-rose-950/30 border-rose-600/60 text-rose-200"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm flex items-center space-x-2">
                        {pipelineResults.status === "APPROVED" ? (
                          <CheckCircle className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <XCircle className="w-4 h-4 text-rose-400" />
                        )}
                        <span>Gate Verdict: {pipelineResults.status}</span>
                      </span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                        {pipelineResults.stageName}
                      </span>
                    </div>
                    <p className="text-slate-300">{pipelineResults.message}</p>
                    <div className="text-[11px] text-cyan-300 font-mono pt-1">
                      Action Required: {pipelineResults.actionRequired}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 5: SIMULATOR 4 - REMEDIATION VALIDATION MATRIX */}
          {activeTab === "retest-sim" && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Simulator 4</span>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  Remediation & Regression Verification Engine
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Retest the complete security requirement across multiple user personas to verify that the fix resolves the flaw without causing regressions.
                </p>
              </div>

              {/* Patch Selector */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                <label className="text-xs font-bold text-slate-300 block">Select Engineering Patch Version to Retest</label>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                  {[
                    { id: "unpatched", label: "0. Unpatched (BOLA)" },
                    { id: "frontend_only", label: "1. Naive Frontend Hide" },
                    { id: "naive_patch", label: "2. Flawed (Owner Only)" },
                    { id: "root_cause", label: "3. Root-Cause (Owner + Recruiter)" },
                  ].map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPatchVersion(p.id)}
                      className={`p-2.5 rounded-lg text-xs font-semibold border text-center transition ${
                        selectedPatchVersion === p.id
                          ? "bg-cyan-500 text-slate-950 font-bold border-cyan-400"
                          : "bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Multi-Persona Retest Matrix */}
              <div className="overflow-x-auto border border-slate-800 rounded-xl">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-slate-900 text-slate-300 font-semibold border-b border-slate-800">
                    <tr>
                      <th className="p-3">Caller Identity</th>
                      <th className="p-3">Role & Relationship</th>
                      <th className="p-3">HTTP Status</th>
                      <th className="p-3">Data Leakage</th>
                      <th className="p-3">Security & Functional Verdict</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    {regressionSimulation.results.map((r) => (
                      <tr key={r.id} className="hover:bg-slate-900/40">
                        <td className="p-3 font-semibold text-white">{r.label}</td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded bg-slate-800 font-mono text-[10px] text-cyan-300">
                            {r.role}
                          </span>
                        </td>
                        <td className="p-3 font-mono font-bold text-cyan-400">{r.httpStatus}</td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                              r.dataReturned && !r.isOwner && !r.isAssigned
                                ? "bg-rose-950 text-rose-400 border border-rose-800"
                                : "bg-slate-800 text-slate-400"
                            }`}
                          >
                            {r.dataReturned ? "Payload Returned" : "Zero Data (Denied)"}
                          </span>
                        </td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              r.securityVerdict.includes("VULNERABILITY")
                                ? "bg-rose-950 text-rose-400 border border-rose-800"
                                : r.securityVerdict.includes("REGRESSION")
                                ? "bg-amber-950 text-amber-400 border border-amber-800"
                                : "bg-emerald-950 text-emerald-400 border border-emerald-800"
                            }`}
                          >
                            {r.securityVerdict}
                          </span>
                          <span className="block text-[11px] text-slate-400 mt-0.5">{r.note}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Status Banner */}
              <div
                className={`p-4 rounded-xl border text-xs font-semibold flex items-center justify-between ${
                  regressionSimulation.overallStatus === "FIXED & VERIFIED"
                    ? "bg-emerald-950/30 border-emerald-600/60 text-emerald-300"
                    : regressionSimulation.overallStatus === "REGRESSION DETECTED"
                    ? "bg-amber-950/30 border-amber-600/60 text-amber-300"
                    : "bg-rose-950/30 border-rose-600/60 text-rose-300"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4" />
                  <span>Comprehensive Retest Verdict: {regressionSimulation.overallStatus}</span>
                </div>
                <span className="font-mono text-[11px]">
                  {selectedPatchVersion === "root_cause"
                    ? "Passes both negative boundary and business workflow checks"
                    : "Fails production release gate criteria"}
                </span>
              </div>
            </div>
          )}

          {/* TAB 6: QUIZ TAB */}
          {activeTab === "quiz" && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Assessment</span>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">Knowledge Assessment</h2>
                <p className="text-xs text-slate-400 mt-1">10 Scenario-based evaluation questions from Section 16.17.</p>
              </div>

              <div className="space-y-6">
                {quizQuestions.map((q, idx) => (
                  <div key={q.id} className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3">
                    <div className="flex items-start justify-between">
                      <span className="font-bold text-white text-xs sm:text-sm">
                        {idx + 1}. {q.question}
                      </span>
                      {quizSubmitted && (
                        <span
                          className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                            quizAnswers[q.id] === q.correct
                              ? "bg-emerald-950 text-emerald-400 border border-emerald-800"
                              : "bg-rose-950 text-rose-400 border border-rose-800"
                          }`}
                        >
                          {quizAnswers[q.id] === q.correct ? "Correct" : "Incorrect"}
                        </span>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      {q.options.map((opt, optIdx) => (
                        <button
                          key={optIdx}
                          onClick={() => handleSelectAnswer(q.id, optIdx)}
                          className={`w-full text-left p-2.5 rounded-lg text-xs transition flex items-center justify-between ${
                            quizAnswers[q.id] === optIdx
                              ? "bg-cyan-500/20 text-cyan-200 border border-cyan-500/50"
                              : "bg-slate-950/60 text-slate-300 border border-slate-800 hover:bg-slate-800"
                          } ${
                            quizSubmitted && optIdx === q.correct
                              ? "bg-emerald-950/60 border-emerald-500 text-emerald-200"
                              : ""
                          }`}
                        >
                          <span>{opt}</span>
                          {quizAnswers[q.id] === optIdx && (
                            <span className="w-2 h-2 rounded-full bg-cyan-400 ml-2 shrink-0" />
                          )}
                        </button>
                      ))}
                    </div>

                    {quizSubmitted && (
                      <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-[11px] text-slate-400 mt-2">
                        <span className="font-semibold text-cyan-400">Explanation: </span>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                ))}

                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <div className="text-xs text-slate-400 font-mono">
                    Answered: {Object.keys(quizAnswers).length} / 10
                  </div>
                  <div className="flex items-center space-x-3">
                    {quizSubmitted && (
                      <div className="text-sm font-bold text-cyan-400 font-mono">
                        Final Score: {quizScore} / 10 ({Math.round((quizScore / 10) * 100)}%)
                      </div>
                    )}
                    <button
                      onClick={() => setQuizSubmitted(!quizSubmitted)}
                      disabled={Object.keys(quizAnswers).length < 10}
                      className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-bold text-xs transition"
                    >
                      {quizSubmitted ? "Reset Quiz" : "Submit Answers"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Embedded Nova AI Tutor Drawer */}
      <LearningRo
        isOpen={showAiTutor}
        onClose={() => setShowAiTutor(false)}
        initialContext="Cybersecurity Master Course - Module 16: Secure Code Review, Web Security Testing, and Remediation Validation. Ask me about SAST vs DAST, tracing taint flows from source to sink, writing regression tests for BOLA/IDOR, or setting up CI/CD security release gates."
      />
    </div>
  );
}
