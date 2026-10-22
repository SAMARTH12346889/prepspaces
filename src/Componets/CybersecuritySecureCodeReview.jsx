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
  GitPullRequest,
  Search,
  CheckSquare,
  FileCode,
  PackageCheck,
  Gauge
} from "lucide-react";

export default function CybersecuritySecureCodeReview() {
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Main navigation tab state
  const [activeTab, setActiveTab] = useState("theory");

  // =========================================================================
  // INTERACTIVE LAB 1 STATE: Pull Request Diff-Based Code Review
  // =========================================================================
  const [lab1SelectedFinding, setLab1SelectedFinding] = useState(null);
  const [lab1CommentSubmitted, setLab1CommentSubmitted] = useState(false);
  const [lab1ReviewDecision, setLab1ReviewDecision] = useState(null);

  const handleLab1FlagLine = (lineNum) => {
    if (lineNum === 14) {
      setLab1SelectedFinding({
        line: 14,
        type: "CRITICAL VULNERABILITY (BOLA / IDOR)",
        code: "const report = await db.query('SELECT * FROM interview_reports WHERE id = $1', [reportId]);",
        description:
          "The query fetches the interview report solely by reportId without joining or scoping by req.auth.userId. An authenticated attacker can read any user's private mock interview assessment simply by supplying their UUID.",
        recommendation:
          "Scope the query to both reportId AND the authenticated owner ID: WHERE id = $1 AND owner_user_id = $2."
      });
    } else if (lineNum === 7) {
      setLab1SelectedFinding({
        line: 7,
        type: "CODE QUALITY / BEST PRACTICE",
        code: "const { reportId } = req.params;",
        description:
          "Direct destructuring of route parameter. Input is syntactically fine, but schema validation (e.g. UUID format regex) should be enforced via middleware.",
        recommendation: "Apply a Zod/Joi schema validator to ensure reportId matches UUIDv4 format."
      });
    } else {
      setLab1SelectedFinding({
        line: lineNum,
        type: "BENIGN LINE",
        code: "Line " + lineNum + " appears secure in this context.",
        description: "This line implements standard middleware or error handling.",
        recommendation: "No security defect identified on this line."
      });
    }
    setLab1CommentSubmitted(false);
  };

  // =========================================================================
  // INTERACTIVE LAB 2 STATE: SAST Rule Triage & False Positive Eliminator
  // =========================================================================
  const [lab2Alerts, setLab2Alerts] = useState({
    alert1: {
      id: "SAST-101",
      rule: "javascript.express.security.sqli-concat",
      file: "controllers/candidate.js:42",
      snippet: "const query = 'SELECT * FROM candidates WHERE status = ' + sanitize(status);",
      status: "unreviewed",
      correctVerdict: "confirmed",
      rationale:
        "True Positive: Custom sanitize() function is an unverified regex blocklist. Dynamic string concatenation for SQL queries must be replaced with parameterized bindings ($1)."
    },
    alert2: {
      id: "SAST-102",
      rule: "javascript.node.security.eval-detected",
      file: "utils/evalMath.js:18",
      snippet: "const mathResult = mathjs.evaluate(sanitizedExpression);",
      status: "unreviewed",
      correctVerdict: "false_positive",
      rationale:
        "False Positive: The SAST regex flagged evaluate(), but the application imports the hardened mathjs parser which does not execute arbitrary Node.js code or system shell commands."
    },
    alert3: {
      id: "SAST-103",
      rule: "javascript.security.hardcoded-secret",
      file: "config/auth.js:12",
      snippet: "const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret_local_only';",
      status: "unreviewed",
      correctVerdict: "confirmed",
      rationale:
        "True Positive (High Risk in Production): If process.env.JWT_SECRET fails to load in production, the application silently falls back to a publicly known development secret."
    }
  });

  const handleLab2Verdict = (alertKey, verdict) => {
    setLab2Alerts((prev) => ({
      ...prev,
      [alertKey]: {
        ...prev[alertKey],
        status: verdict
      }
    }));
  };

  // =========================================================================
  // INTERACTIVE LAB 3 STATE: SCA Dependency Risk & Reachability Evaluator
  // =========================================================================
  const [lab3SelectedPackage, setLab3SelectedPackage] = useState("express-fileupload");

  const scaDependencies = {
    "express-fileupload": {
      name: "express-fileupload",
      version: "1.3.1",
      cve: "CVE-2022-27260",
      cvss: 7.5,
      severity: "High",
      reachability: "REACHABLE & EXPLOITABLE",
      callTrace: "routes/profile.js -> app.use(fileUpload({ parseNested: true }))",
      description:
        "Prototype pollution flaw triggered when parseNested is set to true. Our code explicitly configures parseNested: true in routes/profile.js:15.",
      fix: "Upgrade to express-fileupload >= 1.4.0 or set parseNested: false."
    },
    jsonwebtoken: {
      name: "jsonwebtoken",
      version: "8.5.1",
      cve: "CVE-2022-23529",
      cvss: 9.8,
      severity: "Critical",
      reachability: "NOT REACHABLE (FALSE ALARM IN CONTEXT)",
      callTrace: "services/tokenService.js -> jwt.verify(token, publicKey, { algorithms: ['RS256'] })",
      description:
        "Advisory impacts toString() poisoning when jwt.verify() is passed an untrusted, malicious object as the secret/key parameter. PrepSpaces passes a hardcoded string/Buffer public key from trusted key management.",
      fix: "Upgrade to jsonwebtoken >= 9.0.0 during scheduled sprint maintenance; risk is currently mitigated by static key argument."
    }
  };

  // =========================================================================
  // INTERACTIVE LAB 4 STATE: Passive DAST Header & Cookie Inspector
  // =========================================================================
  const [lab4Headers, setLab4Headers] = useState({
    csp: true,
    hsts: true,
    xContentType: true,
    httpOnlyCookie: true,
    secureCookie: true
  });

  const toggleLab4Header = (key) => {
    setLab4Headers((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const calculateDastScore = () => {
    const total = Object.values(lab4Headers).filter(Boolean).length;
    return Math.round((total / 5) * 100);
  };

  // =========================================================================
  // INTERACTIVE LAB 5 STATE: Business Logic & Quota Bypass Simulator
  // =========================================================================
  const [lab5Balance, setLab5Balance] = useState(1);
  const [lab5ServerLock, setLab5ServerLock] = useState(true);
  const [lab5Log, setLab5Log] = useState([]);
  const [lab5IsProcessing, setLab5IsProcessing] = useState(false);

  const handleLab5SpendCredits = () => {
    if (lab5IsProcessing) return;
    setLab5IsProcessing(true);

    if (lab5ServerLock) {
      // SECURE TRANSACTIONAL CHECK
      if (lab5Balance < 1) {
        setLab5Log((prev) => [
          {
            id: Date.now(),
            type: "danger",
            msg: "HTTP 402 Payment Required: Server atomic transaction blocked booking. Insufficient interview quota (Balance: 0)."
          },
          ...prev.slice(0, 5)
        ]);
        setLab5IsProcessing(false);
      } else {
        setLab5Balance((b) => b - 1);
        setLab5Log((prev) => [
          {
            id: Date.now(),
            type: "success",
            msg: "HTTP 200 OK: Atomic database transaction acquired lock and decremented balance. Session booked."
          },
          ...prev.slice(0, 5)
        ]);
        setLab5IsProcessing(false);
      }
    } else {
      // VULNERABLE RACE CONDITION / CLIENT CHECK
      // Simulates two concurrent requests passing client check before write
      setLab5Balance((b) => b - 1);
      setLab5Log((prev) => [
        {
          id: Date.now(),
          type: "warning",
          msg: "VULNERABILITY EXPLOITED: Non-atomic check permitted double-spend! Balance is now negative or over-consumed."
        },
        ...prev.slice(0, 5)
      ]);
      setLab5IsProcessing(false);
    }
  };

  // =========================================================================
  // INTERACTIVE LAB 6 STATE: Remediation & Regression Test Suite
  // =========================================================================
  const [lab6FixApplied, setLab6FixApplied] = useState("root_cause");
  const [lab6TestResults, setLab6TestResults] = useState(null);

  const handleLab6RunTests = () => {
    if (lab6FixApplied === "none") {
      setLab6TestResults([
        { name: "Test 1: Owner requests own report (Positive Case)", pass: true, detail: "HTTP 200 OK" },
        { name: "Test 2: Stranger requests report (BOLA Negative Case)", pass: false, detail: "FAILED: Returned HTTP 200 with stranger data!" },
        { name: "Test 3: Unauthenticated request", pass: true, detail: "HTTP 401 Unauthorized" },
        { name: "Test 4: Nonexistent report ID", pass: true, detail: "HTTP 404 Not Found" }
      ]);
    } else if (lab6FixApplied === "symptom_patch") {
      setLab6TestResults([
        { name: "Test 1: Owner requests own report (Positive Case)", pass: true, detail: "HTTP 200 OK" },
        { name: "Test 2: Stranger requests report (BOLA Negative Case)", pass: false, detail: "FAILED: React UI hid link, but direct API curl still returned HTTP 200!" },
        { name: "Test 3: Unauthenticated request", pass: true, detail: "HTTP 401 Unauthorized" },
        { name: "Test 4: Nonexistent report ID", pass: true, detail: "HTTP 404 Not Found" }
      ]);
    } else {
      setLab6TestResults([
        { name: "Test 1: Owner requests own report (Positive Case)", pass: true, detail: "HTTP 200 OK (Allowed)" },
        { name: "Test 2: Stranger requests report (BOLA Negative Case)", pass: true, detail: "HTTP 404 Not Found (Denied & Existence Hidden)" },
        { name: "Test 3: Unauthenticated request", pass: true, detail: "HTTP 401 Unauthorized" },
        { name: "Test 4: Nonexistent report ID", pass: true, detail: "HTTP 404 Not Found" }
      ]);
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
        "What is the main advantage of manual secure code review over relying only on automated scanning?",
      options: [
        "It guarantees that every vulnerability will be found",
        "It can evaluate business logic, implementation context, and complex security decisions",
        "It eliminates the need for automated tests",
        "It automatically fixes every security finding"
      ],
      correctAnswer: 1,
      explanation:
        "Manual code review allows human analysts to trace data flows through business rules, evaluate multi-step authorization logic, and understand domain-specific context that automated scanners often miss or flag as false positives."
    },
    {
      id: 2,
      question: "What is the primary purpose of Software Composition Analysis (SCA)?",
      options: [
        "Test only the visual layout of a frontend",
        "Replace all source-code review",
        "Identify dependencies and assess them for known component risks and vulnerabilities",
        "Guarantee that every installed package is exploitable"
      ],
      correctAnswer: 2,
      explanation:
        "SCA tools (like OWASP Dependency-Check) inventory both direct and transitive software dependencies, matching component versions against public vulnerability databases (such as NVD/CVE) and license risk registries."
    },
    {
      id: 3,
      question: "What is a false positive?",
      options: [
        "A tool reports a vulnerability that is not actually present in the assessed context",
        "A confirmed vulnerability has been fixed",
        "A test suite passes after remediation",
        "A developer submits a pull request"
      ],
      correctAnswer: 0,
      explanation:
        "A false positive occurs when an automated scanner flags a line of code or behavior as vulnerable, but deeper human review or runtime analysis proves the code is safe or the alert is not exploitable in context."
    },
    {
      id: 4,
      question: "Why should an assessment define scope and authorization before active testing?",
      options: [
        "To avoid documenting test results",
        "To ensure testing is permitted and remains within defined safety and operational limits",
        "To guarantee that scanners never produce false positives",
        "To make retesting unnecessary"
      ],
      correctAnswer: 1,
      explanation:
        "Under NIST SP 800-115 and professional rules of engagement, written scope and authorization establish explicit legal permission, define excluded production assets, set rate limits, and establish emergency stop conditions."
    },
    {
      id: 5,
      question:
        "A developer says an authorization vulnerability is fixed. What should the security reviewer do next?",
      options: [
        "Close the finding immediately without evidence",
        "Delete the original test case",
        "Repeat the original test and run relevant regression tests",
        "Assume the frontend now enforces all permissions"
      ],
      correctAnswer: 2,
      explanation:
        "Remediation validation requires reproducible proof: the reviewer must repeat the original negative test to confirm the flaw is blocked and execute regression tests to ensure legitimate authorized functionality still functions."
    },
    {
      id: 6,
      question: "What is the best way to handle an automated security finding?",
      options: [
        "Investigate the evidence, validate the issue, and document the appropriate remediation or rationale",
        "Treat every alert as a confirmed critical vulnerability",
        "Suppress all alerts that require manual investigation",
        "Assume an empty scan report proves the application is secure"
      ],
      correctAnswer: 0,
      explanation:
        "A professional triage process investigates the source code, validates reachability and business impact, reproduces the issue safely, and either prioritizes a root-cause fix or documents a defensible justification for closure."
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
        <ModuleNav track="cybersecurity" currentModuleId="secure-code-review" />

        {/* ========================================================================= */}
        {/* HERO CARD                                                                 */}
        {/* ========================================================================= */}
        <div className="mt-6 rounded-3xl border border-[#e7e3da] bg-white/80 p-6 md:p-10 shadow-xs backdrop-blur-md relative overflow-hidden mb-8">
          <div className="absolute top-0 right-0 h-48 w-48 bg-gradient-to-bl from-orange-500/10 via-amber-500/5 to-transparent rounded-bl-full pointer-events-none" />

          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-stone-500 mb-3">
            <span className="text-[#ea580c] font-semibold">PrepSpaces Masterclass</span>
            <span>/</span>
            <span>Module 16</span>
            <span>/</span>
            <span className="text-stone-800 font-medium">Secure Code Review & Testing</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-100 text-[#ea580c] px-3 py-1 text-xs font-bold font-mono">
              OWASP ASVS 5.0.0 · WSTG v4.2 · NIST SP 800-115
            </span>
            <span className="rounded-full bg-stone-100 text-stone-700 px-3 py-1 text-xs font-medium">
              14–18 Hours Estimated
            </span>
            <span className="rounded-full bg-stone-100 text-stone-700 px-3 py-1 text-xs font-medium">
              Intermediate to Advanced
            </span>
            <span className="rounded-full bg-amber-100 text-amber-800 px-3 py-1 text-xs font-medium">
              DevSecOps & Verification
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 mb-4">
            Secure Code Review, Web Security Testing, and Remediation Validation
          </h1>

          <p className="text-base sm:text-lg text-stone-600 max-w-4xl leading-relaxed mb-6">
            Finding a potential vulnerability is only one part of application security. Security professionals must understand the affected code, establish whether the weakness is real, assess its impact, recommend an architectural correction, and verify that the fix works without introducing regressions. Master manual secure code review, SAST, DAST, SCA dependency tracking, business-logic validation, and verifiable remediation reporting.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-stone-200 text-xs text-stone-600 font-mono">
            <div>
              <span className="text-stone-400 block">Verification Standard</span>
              <strong className="text-stone-900">OWASP ASVS 5.0.0 (May 2025)</strong>
            </div>
            <div>
              <span className="text-stone-400 block">Methodologies</span>
              <strong className="text-stone-900">SAST · DAST · IAST · SCA</strong>
            </div>
            <div>
              <span className="text-stone-400 block">Hands-on Labs</span>
              <strong className="text-stone-900">6 Interactive Sandboxes</strong>
            </div>
            <div>
              <span className="text-stone-400 block">Capstone Project</span>
              <strong className="text-stone-900">Verified AppSec Remediation</strong>
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
                Lessons in Module 16
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  { href: "#lesson-1", label: "1. Code Review & Testing Lifecycle" },
                  { href: "#lesson-2", label: "2. Manual Code Review Methodology" },
                  { href: "#lesson-3", label: "3. Automated Testing (SAST, DAST, SCA)" },
                  { href: "#lesson-4", label: "4. Controlled Testing & Validation" },
                  { href: "#lesson-5", label: "5. Severity & Risk Prioritization" },
                  { href: "#lesson-6", label: "6. Remediation Validation" },
                  { href: "#lesson-7", label: "7. DevSecOps Workflows" }
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
                <span className="text-xs font-mono text-stone-400">Foundational Methodology</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Secure Code Review and the Security Testing Lifecycle
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <p>
                  <strong>Secure code review</strong> is the systematic examination of source code to identify weaknesses that could compromise confidentiality, integrity, availability, authentication, authorization, or other security requirements.
                </p>

                <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 text-xs text-orange-900 leading-relaxed">
                  <strong>Beyond Grepping for Dangerous Functions:</strong> A reviewer does far more than search for strings like <code className="font-mono">eval()</code> or <code className="font-mono">exec()</code>. They examine how the application behaves in context, how untrusted data flows through trust boundaries, and whether security controls (such as object ownership or tenant separation) are consistently enforced.
                </div>

                <h3 className="text-lg font-bold text-stone-900 pt-2">1.1 Code Review vs. Security Testing Methods</h3>
                <div className="overflow-x-auto my-3">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-100 text-stone-800">
                        <th className="p-3 font-semibold">Activity</th>
                        <th className="p-3 font-semibold">Primary Purpose</th>
                        <th className="p-3 font-semibold">Real-World Example</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-600">
                      <tr>
                        <td className="p-3 font-semibold text-stone-900">Secure Code Review</td>
                        <td className="p-3">Examine source implementation for logic, architecture, and authorization flaws</td>
                        <td className="p-3">Verify whether an interview report endpoint enforces resource ownership</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-stone-900">SAST (Static Analysis)</td>
                        <td className="p-3">Scan source code or bytecode for syntactic patterns and tainted data paths</td>
                        <td className="p-3">Detect unsafe string concatenation in an SQL statement or hardcoded secrets</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-stone-900">DAST (Dynamic Analysis)</td>
                        <td className="p-3">Test a running application through its exposed HTTP interfaces</td>
                        <td className="p-3">Identify missing security headers, cookie flags, or reflected input behaviors</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-stone-900">IAST (Interactive Analysis)</td>
                        <td className="p-3">Collect runtime telemetry and tainted flow data via agent instrumentation</td>
                        <td className="p-3">Observe untrusted query strings reaching backend database drivers at runtime</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-stone-900">SCA (Software Composition)</td>
                        <td className="p-3">Identify third-party open-source components and check for published CVEs</td>
                        <td className="p-3">Detect an outdated <code className="font-mono">jsonwebtoken</code> library with known verification flaws</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-stone-900">Penetration Testing</td>
                        <td className="p-3">Demonstrate exploitable attack paths under authorized assessment rules</td>
                        <td className="p-3">Chain unauthenticated SSRF with cloud metadata to achieve credential extraction</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-stone-900">Remediation Validation</td>
                        <td className="p-3">Establish that a fix resolves the defect without introducing regressions</td>
                        <td className="p-3">Retest the endpoint with negative test cases and execute regression suites</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-bold text-stone-900 pt-4">1.2 The 9-Stage Security Assessment Lifecycle</h3>
                <div className="grid sm:grid-cols-3 gap-3 my-4">
                  {[
                    { num: "01", name: "Plan", desc: "Confirm authorization, scope, rules of engagement, and safety stop conditions." },
                    { num: "02", name: "Understand", desc: "Map architecture, trust boundaries, data flows, components, and threat models." },
                    { num: "03", name: "Inspect", desc: "Review code, configurations, dependency manifests, and automated test baselines." },
                    { num: "04", name: "Test", desc: "Run approved controlled tests, collecting reproducible request/response telemetry." },
                    { num: "05", name: "Validate", desc: "Distinguish confirmed vulnerabilities from false positives and unverified alerts." },
                    { num: "06", name: "Prioritize", desc: "Assess contextual risk, technical severity, environmental reachability, and SLA." },
                    { num: "07", name: "Remediate", desc: "Implement root-cause code fixes while preserving required business behavior." },
                    { num: "08", name: "Retest", desc: "Repeat original exploit payloads and run automated security regression suites." },
                    { num: "09", name: "Report & Improve", desc: "Record evidence, residual risk, closure signoff, and update DevSecOps gates." }
                  ].map((s, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
                      <div className="text-lg font-bold font-mono text-orange-600 mb-1">{s.num}</div>
                      <strong className="text-stone-900 block mb-1">{s.name}</strong>
                      <span className="text-stone-600">{s.desc}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-stone-900 pt-4">1.3 Establishing Scope & Authorization (NIST SP 800-115)</h3>
                <p className="text-sm">
                  Before conducting security testing, formal written authorization must define:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-xs">
                  <li><strong>Target Boundaries:</strong> Exact repositories, branches, container images, domains, and API endpoints in scope.</li>
                  <li><strong>Explicit Exclusions:</strong> Production payment systems, third-party partner APIs, and shared cloud infrastructure.</li>
                  <li><strong>Account Privileges:</strong> Synthetic test accounts and designated permission levels (e.g. Student, Instructor, Admin).</li>
                  <li><strong>Testing Windows & Rate Limits:</strong> Maximum requests per second (e.g. 10 req/s) to prevent availability degradation.</li>
                  <li><strong>Stop Conditions:</strong> Immediate cessation criteria upon unexpected data corruption, service latency, or unplanned system disruption.</li>
                </ul>
              </div>
            </section>

            {/* LESSON 2 */}
            <section id="lesson-2" className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Lesson 2
                </span>
                <span className="text-xs font-mono text-stone-400">Review Execution</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Manual Secure Code Review Methodology
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <h3 className="text-lg font-bold text-stone-900">2.1 Baseline vs. Diff-Based Review</h3>
                <div className="grid sm:grid-cols-2 gap-3 text-xs my-2">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 block mb-1">Baseline Review (Broad Audit)</strong>
                    <p className="text-stone-600">
                      Comprehensive examination of an entire codebase, microservice, or newly acquired subsystem. Evaluates holistic architectural design, trust boundaries, session lifecycles, and core authorization models.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 block mb-1">Diff-Based Review (PR / Commit)</strong>
                    <p className="text-stone-600">
                      Focused inspection of modified code changes in a Pull Request. Evaluates not just modified lines, but how those lines interact with existing middleware, database models, and shared permissions.
                    </p>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 pt-4">2.2 Tracing Sources, Transformations, and Sinks</h3>
                <p className="text-sm">
                  Data-flow analysis follows untrusted values from their origin to sensitive backend execution points:
                </p>

                <div className="grid sm:grid-cols-3 gap-3 my-3 text-xs font-mono">
                  <div className="p-4 rounded-2xl bg-red-50 border border-red-200">
                    <strong className="text-red-900 block mb-1">1. Sources (Untrusted Input)</strong>
                    <div className="text-stone-700">req.params, req.body, req.headers, cookies, external webhooks, unvalidated database fields</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
                    <strong className="text-amber-900 block mb-1">2. Transformations</strong>
                    <div className="text-stone-700">JSON parsing, type coercion, regex filters, normalization, encryption, serialization</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200">
                    <strong className="text-purple-900 block mb-1">3. Sinks (Execution Points)</strong>
                    <div className="text-stone-700">SQL queries, execFile(), res.send(), file system paths, template renderers, HTTP fetch</div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 pt-4">2.3 Comprehensive 14-Point Code Review Checklist</h3>
                <div className="grid sm:grid-cols-2 gap-2 text-xs">
                  {[
                    { title: "Input Handling", check: "Server-side types, regex allowlists, schema constraints, and payload length bounds." },
                    { title: "Injection Sinks", check: "Parameterized SQL, execFile() binary arrays, template context bindings, NoSQL types." },
                    { title: "Authentication", check: "Argon2id hashing, generic error responses, brute-force limits, single-use reset tokens." },
                    { title: "Authorization", check: "BOLA ownership checks, BFLA backend role middleware, BOPLA property allowlists." },
                    { title: "Session Handling", check: "HttpOnly, Secure, SameSite cookies, 15-min idle timeouts, post-logout invalidation." },
                    { title: "Cryptography", check: "AES-256-GCM, RS256 JWTs, CSPRNG token generators, eliminating deprecated MD5/SHA1." },
                    { title: "Sensitive Data", check: "No credentials in logs, git history, or client bundles; data masking in telemetry." },
                    { title: "Error Handling", check: "Sanitized error responses; zero stack traces or internal DB schemas leaked to clients." },
                    { title: "Business Logic", check: "Quota verification, multi-step state machine prerequisites, race-condition defenses." },
                    { title: "Resource Limits", check: "Pagination page size caps (max 100), request body limits, timeout configurations." },
                    { title: "Dependencies", check: "Lockfiles audited, direct/transitive CVE scans via OWASP Dependency-Check." },
                    { title: "Configuration", check: "Disabled debug routes, strict CORS origins, environment secrets separation." },
                    { title: "Audit Telemetry", check: "High-fidelity security event logging without recording passwords or bearer tokens." },
                    { title: "Test Coverage", check: "Automated regression tests covering both positive and negative authorization cases." }
                  ].map((c, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 block mb-0.5">{c.title}</strong>
                      <span className="text-stone-600">{c.check}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* LESSON 3 */}
            <section id="lesson-3" className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Lesson 3
                </span>
                <span className="text-xs font-mono text-stone-400">Automated Tooling</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Automated Security Testing: SAST, DAST, IAST, and SCA
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <p>
                  Automated security tools scale coverage across thousands of files, but they produce raw observations that require human context, reachability analysis, and triage:
                </p>

                <div className="overflow-x-auto my-3">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-100 text-stone-800">
                        <th className="p-3 font-semibold">Testing Tool</th>
                        <th className="p-3 font-semibold">Execution Mechanism</th>
                        <th className="p-3 font-semibold">Key Strengths</th>
                        <th className="p-3 font-semibold">Primary Limitations</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-600">
                      <tr>
                        <td className="p-3 font-semibold text-stone-900">SAST (Semgrep, Sonar)</td>
                        <td className="p-3">Static syntax tree & data-flow graph analysis</td>
                        <td className="p-3">Finds defects early in IDE or PR; full code visibility</td>
                        <td className="p-3 text-red-600">High false positive rate; misses complex business logic</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-stone-900">DAST (OWASP ZAP)</td>
                        <td className="p-3">Black-box HTTP request/response inspection</td>
                        <td className="p-3">Validates real deployed runtime behavior and headers</td>
                        <td className="p-3 text-red-600">Blind to unvisited routes or backend logic; test setup overhead</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-stone-900">IAST (Contrast, Contrast)</td>
                        <td className="p-3">Runtime agent bytecode instrumentation</td>
                        <td className="p-3">Correlates live execution paths with tainted input</td>
                        <td className="p-3 text-red-600">Requires agent installation and extensive integration test suites</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-stone-900">SCA (Dependency-Check)</td>
                        <td className="p-3">Manifest inspection against CVE databases</td>
                        <td className="p-3">Detects known supply-chain vulnerabilities in libraries</td>
                        <td className="p-3 text-red-600">Alerts do not prove the vulnerable function is called (reachability)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-bold text-stone-900 pt-4">3.1 Triaging Automated Scanner Alerts</h3>
                <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs space-y-2">
                  <div className="text-stone-400">// Structured Triage Sequence</div>
                  <div>1. Read the reported rule ID and affected file/line.</div>
                  <div>2. Trace the data flow: Does untrusted input actually reach the flagged sink?</div>
                  <div>3. Check sanitization: Is an intermediate framework or ORM safely pre-compiling the query?</div>
                  <div>4. Verify reachability: In SCA, is the vulnerable method imported and executed in production?</div>
                  <div>5. Assign triage classification: Confirmed True Positive, False Positive, or Unverified.</div>
                </div>
              </div>
            </section>

            {/* LESSON 4 */}
            <section id="lesson-4" className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Lesson 4
                </span>
                <span className="text-xs font-mono text-stone-400">Controlled Web Testing</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Controlled Web Security Testing and Finding Validation
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <h3 className="text-lg font-bold text-stone-900">4.1 Passive vs. Active Scanning (OWASP ZAP)</h3>
                <div className="grid sm:grid-cols-2 gap-3 text-xs my-2">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 block mb-1">Passive Testing</strong>
                    <p className="text-stone-600">
                      Evaluates HTTP traffic and responses without sending attack payloads or altering application state. Examines response headers, cookie flags, and exposed metadata. Safe for production environments.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 block mb-1">Active Testing</strong>
                    <p className="text-stone-600">
                      Deliberately transmits malicious inputs, boundary payloads, and state-altering mutations. Can corrupt database records or trigger rate limits. Strictly prohibited without explicit written authorization.
                    </p>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 pt-4">4.2 Finding Classifications & Evidence Quality</h3>
                <div className="grid sm:grid-cols-3 gap-3 text-xs my-2">
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                    <strong className="text-emerald-950 block mb-1">Confirmed Finding</strong>
                    <span className="text-emerald-800">Reproducible test evidence demonstrates that a required security control is violated.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 block mb-1">False Positive</strong>
                    <span className="text-stone-600">Scanner alert is non-exploitable due to mitigating architecture or dead code.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200">
                    <strong className="text-amber-950 block mb-1">Unverified Observation</strong>
                    <span className="text-amber-800">Preliminary suspicion requiring additional authenticated testing or code review.</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
                  <strong className="text-stone-900 block mb-1">Separating Facts from Conclusions in Reports:</strong>
                  <div className="text-stone-600 space-y-1">
                    <div>• <strong>Observed Fact:</strong> "Endpoint GET /api/reports/104 returned report data when invoked with Student B's bearer token."</div>
                    <div>• <strong>Security Policy:</strong> "Reports must only be accessible to their owner (Student A) or assigned instructor."</div>
                    <div>• <strong>Conclusion:</strong> "Broken Object Level Authorization (BOLA) verified in controllers/reports.js."</div>
                  </div>
                </div>
              </div>
            </section>

            {/* LESSON 5 */}
            <section id="lesson-5" className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Lesson 5
                </span>
                <span className="text-xs font-mono text-stone-400">Risk & Prioritization</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Severity, Risk Prioritization, and Remediation Planning
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <p>
                  <strong>Technical Severity $\neq$ Contextual Risk:</strong> A vulnerability with a CVSS 9.8 score in an isolated, internal test script creates far lower organizational risk than a CVSS 6.5 authorization flaw on a public production student database.
                </p>

                <h3 className="text-lg font-bold text-stone-900 pt-2">5.1 Operational Remediation Priority Matrix</h3>
                <div className="grid sm:grid-cols-4 gap-3 my-3 text-xs">
                  <div className="p-3 rounded-2xl bg-red-100 border border-red-300 text-red-950">
                    <strong className="font-mono font-bold block mb-1">P0 — Emergency</strong>
                    <span>Immediate active compromise risk on public production assets (SLA: &lt; 24 Hours).</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-orange-100 border border-orange-300 text-orange-950">
                    <strong className="font-mono font-bold block mb-1">P1 — Urgent</strong>
                    <span>High-risk weakness requiring accelerated fix in immediate release (SLA: &lt; 7 Days).</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-amber-100 border border-amber-300 text-amber-950">
                    <strong className="font-mono font-bold block mb-1">P2 — Planned High</strong>
                    <span>Meaningful defect scheduled in the upcoming normal sprint cycle (SLA: &lt; 30 Days).</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-stone-100 border border-stone-300 text-stone-950">
                    <strong className="font-mono font-bold block mb-1">P3 — Routine</strong>
                    <span>Low-severity hardening or informational finding addressed during maintenance.</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 pt-4">5.2 Root-Cause Remediation vs. Symptom Patching</h3>
                <div className="overflow-x-auto my-2">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-100 text-stone-800">
                        <th className="p-3 font-semibold">Underlying Flaw</th>
                        <th className="p-3 font-semibold text-red-700">Weak Symptom Patch (Fragile)</th>
                        <th className="p-3 font-semibold text-emerald-800">Root-Cause Architectural Fix</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-600">
                      <tr>
                        <td className="p-3 font-semibold text-stone-900">BOLA on Report Endpoint</td>
                        <td className="p-3 text-red-600">Hide the "View Report" button in React frontend</td>
                        <td className="p-3 text-emerald-700">Add backend SQL ownership clause: <code className="font-mono">WHERE id=$1 AND owner=$2</code></td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-stone-900">SQL Injection</td>
                        <td className="p-3 text-red-600">Add character blocklist filtering single quotes</td>
                        <td className="p-3 text-emerald-700">Use parameterized queries and precompiled prepared statements</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-stone-900">Dependency CVE Alert</td>
                        <td className="p-3 text-red-600">Suppress the alert in CI/CD pipeline configuration</td>
                        <td className="p-3 text-emerald-700">Audit reachability, upgrade component, and verify build artifacts</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* LESSON 6 */}
            <section id="lesson-6" className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Lesson 6
                </span>
                <span className="text-xs font-mono text-stone-400">Verification</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Remediation Validation: Prove the Fix Works
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <p>
                  A ticket marked "Resolved" is not evidence. <strong>Remediation validation</strong> requires running reproducible tests against the deployed artifact to prove the vulnerability is eliminated and that legitimate functionality still works:
                </p>

                <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs space-y-2">
                  <div className="text-stone-400">// The 7-Stage Remediation Validation Cycle</div>
                  <div>1. Capture Baseline: Record original defect payload, status code, and git SHA.</div>
                  <div>2. Review Fix: Code review PR to confirm root cause was addressed.</div>
                  <div>3. Deploy Artifact: Verify new commit SHA / container digest is active in staging.</div>
                  <div>4. Repeat Original Exploit: Confirm the attack payload is now denied (401, 403, 404).</div>
                  <div>5. Execute Regression Suite: Verify legitimate authorized users still succeed (200 OK).</div>
                  <div>6. Assess Residual Risk: Document any remaining edge cases or partial mitigations.</div>
                  <div>7. Formal Closure: Sign off with attached test logs and telemetry evidence.</div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 pt-4">6.1 Validating the Deployed Artifact</h3>
                <p className="text-sm">
                  Never close a vulnerability report based solely on local source code changes. Source-level fixes often fail to reach production due to:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-xs text-stone-600">
                  <li>Pipeline caching deploying an older container image or artifact build.</li>
                  <li>Multi-region deployments where only one cluster received the updated revision.</li>
                  <li>Incomplete API versioning where <code className="font-mono">/v2</code> was patched but <code className="font-mono">/v1</code> remains exposed.</li>
                </ul>
              </div>
            </section>

            {/* LESSON 7 */}
            <section id="lesson-7" className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Lesson 7
                </span>
                <span className="text-xs font-mono text-stone-400">DevSecOps Workflows</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Secure Development Workflows and DevSecOps
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <p>
                  Integrating security into the modern CI/CD pipeline shifts testing left, preventing vulnerabilities from ever reaching production deployments:
                </p>

                <div className="grid sm:grid-cols-3 gap-3 my-3 text-xs">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 block mb-1">1. Pre-Commit / IDE</strong>
                    <span className="text-stone-600">Secret linters (TruffleHog), IDE static analysis plugins, pre-commit hook validations.</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 block mb-1">2. Pull Request Gate</strong>
                    <span className="text-stone-600">Fast SAST (Semgrep), SCA (Dependency-Check), mandatory AppSec peer approval on auth routes.</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 block mb-1">3. Staging Deployment</strong>
                    <span className="text-stone-600">OWASP ZAP baseline passive scan, automated security regression suites, container image scans.</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 pt-4">7.1 OWASP ASVS 5.0.0 (May 2025) Verification Standard</h3>
                <p className="text-sm">
                  The Application Security Verification Standard provides a basis for designing and verifying technical security controls:
                </p>
                <div className="grid sm:grid-cols-3 gap-3 text-xs my-2">
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 block mb-0.5">ASVS Level 1 (Opportunistic)</strong>
                    <span className="text-stone-600">Basic security controls verifiable through black-box testing and automated analysis.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 block mb-0.5">ASVS Level 2 (Standard)</strong>
                    <span className="text-stone-600">Recommended for most B2B applications handling sensitive user or transactional data.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 block mb-0.5">ASVS Level 3 (Advanced)</strong>
                    <span className="text-stone-600">Critical infrastructure, healthcare, defense, and high-value financial platforms.</span>
                  </div>
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
              <strong className="block mb-1 font-bold">Authorized Interactive Lab Sandboxes</strong>
              All exercises execute against local synthetic code samples and staging environments. Practice identifying weaknesses in code diffs, triaging automated scanner alerts, assessing dependency reachability, inspecting passive DAST headers, and running verifiable regression suites.
            </div>

            {/* LAB 1: Pull Request Diff-Based Code Review */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                    Lab 1
                  </span>
                  <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                    Pull Request Diff-Based Code Review
                  </h3>
                </div>
                <span className="text-xs font-mono text-stone-400">Manual Code Review</span>
              </div>
              <p className="text-xs text-stone-600 mb-4">
                A developer submitted a pull request implementing a new report download endpoint. Click on lines in the code diff to inspect data flows, identify vulnerabilities, and flag defects before release.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-stone-950 text-stone-200 p-4 rounded-2xl font-mono text-xs overflow-x-auto space-y-1">
                  <div className="text-stone-500 pb-2 border-b border-stone-800">// PR #412: controllers/reports.js</div>
                  {[
                    { num: 1, code: "import { Router } from 'express';", isAdd: false },
                    { num: 2, code: "import { requireAuth } from '../middleware/auth.js';", isAdd: false },
                    { num: 3, code: "import { db } from '../db/connection.js';", isAdd: false },
                    { num: 4, code: "", isAdd: false },
                    { num: 5, code: "const router = Router();", isAdd: false },
                    { num: 6, code: "+ router.get('/api/reports/:reportId', requireAuth, async (req, res) => {", isAdd: true },
                    { num: 7, code: "+   const { reportId } = req.params;", isAdd: true },
                    { num: 8, code: "+   try {", isAdd: true },
                    { num: 9, code: "+     // Fetch candidate interview evaluation", isAdd: true },
                    { num: 10, code: "+     const report = await db.query(", isAdd: true },
                    { num: 11, code: "+       'SELECT * FROM interview_reports WHERE id = $1',", isAdd: true },
                    { num: 12, code: "+       [reportId]", isAdd: true },
                    { num: 13, code: "+     );", isAdd: true },
                    { num: 14, code: "+     if (report.rowCount === 0) return res.status(404).send('Not Found');", isAdd: true },
                    { num: 15, code: "+     return res.json(report.rows[0]);", isAdd: true },
                    { num: 16, code: "+   } catch (err) {", isAdd: true },
                    { num: 17, code: "+     res.status(500).json({ error: err.message });", isAdd: true },
                    { num: 18, code: "+   }", isAdd: true },
                    { num: 19, code: "+ });", isAdd: true }
                  ].map((line) => (
                    <div
                      key={line.num}
                      onClick={() => handleLab1FlagLine(line.num)}
                      className={`flex items-center gap-2 px-2 py-0.5 rounded cursor-pointer transition ${
                        lab1SelectedFinding?.line === line.num
                          ? "bg-orange-900/60 text-orange-200 border border-orange-500"
                          : line.isAdd
                          ? "bg-emerald-950/40 text-emerald-300 hover:bg-emerald-900/40"
                          : "text-stone-400 hover:bg-stone-800"
                      }`}
                    >
                      <span className="text-stone-600 select-none w-6 text-right">{line.num}</span>
                      <span>{line.code}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 text-xs flex flex-col justify-between">
                  <div>
                    <strong className="text-stone-900 text-sm block mb-2">Reviewer Analysis & Feedback</strong>
                    {lab1SelectedFinding ? (
                      <div className="space-y-3">
                        <div className="p-3 rounded-xl bg-white border border-stone-200 space-y-1">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono ${
                            lab1SelectedFinding.type.includes("CRITICAL")
                              ? "bg-red-100 text-red-800"
                              : "bg-stone-200 text-stone-700"
                          }`}>
                            {lab1SelectedFinding.type}
                          </span>
                          <div className="font-bold text-stone-900 pt-1">Line {lab1SelectedFinding.line}</div>
                          <p className="text-stone-600">{lab1SelectedFinding.description}</p>
                          <div className="pt-2 text-[11px] text-emerald-800 font-semibold">
                            Recommended Fix: {lab1SelectedFinding.recommendation}
                          </div>
                        </div>

                        {!lab1CommentSubmitted ? (
                          <div className="flex gap-2">
                            <button
                              onClick={() => {
                                setLab1CommentSubmitted(true);
                                setLab1ReviewDecision(lab1SelectedFinding.line === 14 ? "REQUEST_CHANGES" : "COMMENT");
                              }}
                              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-xs transition cursor-pointer"
                            >
                              Request Changes on PR
                            </button>
                            <button
                              onClick={() => {
                                setLab1CommentSubmitted(true);
                                setLab1ReviewDecision("APPROVE");
                              }}
                              className="px-4 py-2 bg-stone-200 hover:bg-stone-300 text-stone-700 font-bold rounded-xl text-xs transition cursor-pointer"
                            >
                              Approve PR
                            </button>
                          </div>
                        ) : (
                          <div className={`p-3 rounded-xl text-xs font-bold ${
                            lab1ReviewDecision === "REQUEST_CHANGES"
                              ? "bg-emerald-100 text-emerald-900"
                              : "bg-red-100 text-red-900"
                          }`}>
                            {lab1ReviewDecision === "REQUEST_CHANGES"
                              ? "EXCELLENT APPSEC REVIEW: You caught the BOLA vulnerability (API1:2023) and blocked the pull request with actionable remediation code."
                              : "WARNING: Approving this PR allows an unauthorized horizontal data disclosure vulnerability into staging!"}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-stone-500 italic mt-6">
                        Click on lines 11–14 in the diff to evaluate SQL query construction and resource ownership checks.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* LAB 2: SAST Rule Triage & False Positive Eliminator */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                    Lab 2
                  </span>
                  <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                    SAST Rule Triage & False Positive Eliminator
                  </h3>
                </div>
                <span className="text-xs font-mono text-stone-400">Static Analysis Triage</span>
              </div>
              <p className="text-xs text-stone-600 mb-4">
                Evaluate raw automated scanner alerts generated by a static analysis tool. Review the source context to classify each finding as a confirmed vulnerability or false positive.
              </p>

              <div className="space-y-3">
                {Object.entries(lab2Alerts).map(([key, alert]) => (
                  <div key={key} className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-orange-600">{alert.id}</span>
                        <span className="font-mono text-stone-700 bg-white px-2 py-0.5 rounded border border-stone-200">
                          {alert.rule}
                        </span>
                      </div>
                      <span className="font-mono text-stone-400">{alert.file}</span>
                    </div>

                    <div className="p-2 rounded bg-stone-900 text-stone-200 font-mono text-[11px] overflow-x-auto">
                      {alert.snippet}
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleLab2Verdict(key, "confirmed")}
                          className={`px-3 py-1.5 rounded-xl font-bold transition cursor-pointer ${
                            alert.status === "confirmed"
                              ? "bg-red-600 text-white"
                              : "bg-white border border-stone-300 text-stone-700 hover:bg-stone-100"
                          }`}
                        >
                          Confirm Vulnerability
                        </button>
                        <button
                          onClick={() => handleLab2Verdict(key, "false_positive")}
                          className={`px-3 py-1.5 rounded-xl font-bold transition cursor-pointer ${
                            alert.status === "false_positive"
                              ? "bg-emerald-600 text-white"
                              : "bg-white border border-stone-300 text-stone-700 hover:bg-stone-100"
                          }`}
                        >
                          Mark False Positive
                        </button>
                      </div>

                      {alert.status !== "unreviewed" && (
                        <span className={`font-bold ${
                          alert.status === alert.correctVerdict ? "text-emerald-700" : "text-red-600"
                        }`}>
                          {alert.status === alert.correctVerdict ? "✓ Accurate Triage" : "✗ Incorrect Classification"}
                        </span>
                      )}
                    </div>

                    {alert.status !== "unreviewed" && (
                      <div className="p-2 rounded bg-stone-100 text-stone-700 text-[11px]">
                        <strong>Security Rationale: </strong> {alert.rationale}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* LAB 3: SCA Dependency Risk & Reachability Evaluator */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                    Lab 3
                  </span>
                  <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                    SCA Dependency Risk & Reachability Evaluator
                  </h3>
                </div>
                <span className="text-xs font-mono text-stone-400">Software Supply Chain</span>
              </div>
              <p className="text-xs text-stone-600 mb-4">
                Software Composition Analysis flags published CVEs across npm packages. Test how security engineers perform <strong>reachability analysis</strong> to determine if vulnerable functions are executed in production.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex gap-2">
                    {Object.keys(scaDependencies).map((pkg) => (
                      <button
                        key={pkg}
                        onClick={() => setLab3SelectedPackage(pkg)}
                        className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition cursor-pointer ${
                          lab3SelectedPackage === pkg
                            ? "bg-stone-900 text-white"
                            : "bg-white border border-stone-300 text-stone-700"
                        }`}
                      >
                        {pkg}
                      </button>
                    ))}
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-stone-900 text-sm">{scaDependencies[lab3SelectedPackage].name}</span>
                      <span className="font-mono text-red-600 font-bold">CVSS {scaDependencies[lab3SelectedPackage].cvss} ({scaDependencies[lab3SelectedPackage].severity})</span>
                    </div>
                    <div>
                      <span className="text-stone-500">Installed Version: </span>
                      <code className="font-mono bg-white px-1 rounded">{scaDependencies[lab3SelectedPackage].version}</code>
                    </div>
                    <div>
                      <span className="text-stone-500">Advisory: </span>
                      <strong className="text-stone-800 font-mono">{scaDependencies[lab3SelectedPackage].cve}</strong>
                    </div>
                    <p className="text-stone-600">{scaDependencies[lab3SelectedPackage].description}</p>
                  </div>
                </div>

                <div className="bg-stone-900 text-stone-200 p-4 rounded-2xl font-mono text-xs flex flex-col justify-between">
                  <div>
                    <div className="text-stone-400 mb-2">// Call-Graph Reachability Analysis</div>
                    <div className="p-2 rounded bg-stone-800 border border-stone-700 text-amber-300 text-[11px] mb-3">
                      {scaDependencies[lab3SelectedPackage].callTrace}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        scaDependencies[lab3SelectedPackage].reachability.includes("REACHABLE")
                          ? "bg-red-950 text-red-400"
                          : "bg-emerald-950 text-emerald-400"
                      }`}>
                        {scaDependencies[lab3SelectedPackage].reachability}
                      </span>
                    </div>
                    <p className="text-stone-300 text-[11px] leading-relaxed">
                      Remediation Action: {scaDependencies[lab3SelectedPackage].fix}
                    </p>
                  </div>
                  <div className="text-stone-500 text-[11px] pt-4 border-t border-stone-800">
                    OWASP Dependency-Check principle: Prioritize remediation based on reachability and actual runtime exposure rather than pure CVSS scores.
                  </div>
                </div>
              </div>
            </div>

            {/* LAB 4: Passive DAST Header & Cookie Inspector */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                    Lab 4
                  </span>
                  <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                    Passive DAST Header & Cookie Inspector
                  </h3>
                </div>
                <span className="text-xs font-mono text-stone-400">OWASP ZAP Baseline Scan</span>
              </div>
              <p className="text-xs text-stone-600 mb-4">
                Simulate an automated ZAP passive baseline scan against an HTTP response. Toggle security headers and cookie flags to observe dynamic compliance scoring against OWASP ASVS guidelines.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2 bg-stone-50 p-4 rounded-2xl border border-stone-200 text-xs">
                  <strong className="text-stone-900 block mb-2">Configure Server Response Headers:</strong>
                  {[
                    { key: "csp", name: "Content-Security-Policy: default-src 'self'" },
                    { key: "hsts", name: "Strict-Transport-Security: max-age=31536000; includeSubDomains" },
                    { key: "xContentType", name: "X-Content-Type-Options: nosniff" },
                    { key: "httpOnlyCookie", name: "Set-Cookie: session_id=...; HttpOnly" },
                    { key: "secureCookie", name: "Set-Cookie: session_id=...; Secure; SameSite=Lax" }
                  ].map((h) => (
                    <label
                      key={h.key}
                      onClick={() => toggleLab4Header(h.key)}
                      className="flex items-center gap-2 p-2 rounded-xl bg-white border border-stone-200 cursor-pointer hover:bg-stone-100 transition"
                    >
                      <input
                        type="checkbox"
                        checked={lab4Headers[h.key]}
                        onChange={() => {}}
                        className="rounded accent-orange-600"
                      />
                      <span className="font-mono text-[11px] text-stone-800">{h.name}</span>
                    </label>
                  ))}
                </div>

                <div className="bg-stone-900 text-stone-200 p-4 rounded-2xl font-mono text-xs flex flex-col justify-between">
                  <div>
                    <div className="text-stone-400 mb-2">// ZAP Passive Scanner Report Summary</div>
                    <div className="flex items-center justify-between mb-4">
                      <span>DAST Compliance Score:</span>
                      <span className={`text-xl font-bold font-mono ${
                        calculateDastScore() >= 80 ? "text-emerald-400" : "text-amber-400"
                      }`}>
                        {calculateDastScore()}%
                      </span>
                    </div>

                    <div className="space-y-1.5 text-[11px]">
                      {!lab4Headers.csp && (
                        <div className="text-amber-400">⚠️ WARN: Content-Security-Policy missing (XSS defense weakened).</div>
                      )}
                      {!lab4Headers.hsts && (
                        <div className="text-amber-400">⚠️ WARN: HSTS header missing (SSL stripping risk).</div>
                      )}
                      {!lab4Headers.xContentType && (
                        <div className="text-amber-400">⚠️ WARN: X-Content-Type-Options missing (MIME-sniffing risk).</div>
                      )}
                      {(!lab4Headers.httpOnlyCookie || !lab4Headers.secureCookie) && (
                        <div className="text-red-400">❌ ALERT: Cookie lacks HttpOnly/Secure flags (Session hijacking risk).</div>
                      )}
                      {calculateDastScore() === 100 && (
                        <div className="text-emerald-400">✓ PASS: All essential baseline web security headers and cookie flags verified.</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* LAB 5: Business Logic & Quota Bypass Simulator */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                    Lab 5
                  </span>
                  <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                    Business Logic & Quota Bypass Simulator
                  </h3>
                </div>
                <span className="text-xs font-mono text-stone-400">Logic Flaws & Concurrency</span>
              </div>
              <p className="text-xs text-stone-600 mb-4">
                Automated vulnerability scanners cannot understand business rules or concurrency. Test how an un-isolated race condition allows a student to double-spend 1 mock interview credit, and see how server-side transactional locking prevents it.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3 bg-stone-50 p-4 rounded-2xl border border-stone-200 text-xs">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-stone-200">
                    <span className="font-bold text-stone-800">Available Interview Credits:</span>
                    <span className="text-xl font-bold font-mono text-orange-600">{lab5Balance}</span>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="serverLock"
                      checked={lab5ServerLock}
                      onChange={(e) => setLab5ServerLock(e.target.checked)}
                      className="rounded accent-orange-600"
                    />
                    <label htmlFor="serverLock" className="font-medium text-stone-700">
                      Enable Server-Side Atomic Row Lock (SELECT FOR UPDATE)
                    </label>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button
                      onClick={handleLab5SpendCredits}
                      disabled={lab5IsProcessing}
                      className="flex-1 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold transition cursor-pointer"
                    >
                      Book Interview (Cost: 1 Credit)
                    </button>
                    <button
                      onClick={() => { setLab5Balance(1); setLab5Log([]); }}
                      className="px-3 py-2 bg-stone-200 hover:bg-stone-300 text-stone-700 rounded-xl font-bold transition cursor-pointer"
                    >
                      Reset Quota
                    </button>
                  </div>
                </div>

                <div className="bg-stone-900 text-stone-200 p-4 rounded-2xl font-mono text-xs flex flex-col justify-between">
                  <div>
                    <div className="text-stone-400 mb-2">// Business Transaction Execution Trace</div>
                    {lab5Log.length > 0 ? (
                      <div className="space-y-2">
                        {lab5Log.map((l) => (
                          <div
                            key={l.id}
                            className={`p-2 rounded text-[11px] border ${
                              l.type === "success"
                                ? "bg-emerald-950/50 border-emerald-800 text-emerald-300"
                                : l.type === "danger"
                                ? "bg-red-950/50 border-red-800 text-red-300"
                                : "bg-amber-950/50 border-amber-800 text-amber-300"
                            }`}
                          >
                            {l.msg}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-stone-500 italic mt-6">Attempt to spend credits to observe transactional locking and concurrency behavior.</div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* LAB 6: Remediation & Regression Test Suite */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                    Lab 6
                  </span>
                  <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                    Remediation & Regression Test Suite
                  </h3>
                </div>
                <span className="text-xs font-mono text-stone-400">Verifiable Closure</span>
              </div>
              <p className="text-xs text-stone-600 mb-4">
                Prove that an applied fix resolves the underlying root cause and that positive functionality remains intact. Toggle between remediation methods and run the automated test suite.
              </p>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: "none", label: "A. Unfixed Code (BOLA Active)" },
                    { id: "symptom_patch", label: "B. Symptom Patch (Button Hidden in React)" },
                    { id: "root_cause", label: "C. Root-Cause Fix (Backend Scoped Query)" }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => { setLab6FixApplied(opt.id); setLab6TestResults(null); }}
                      className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition cursor-pointer ${
                        lab6FixApplied === opt.id
                          ? "bg-orange-600 text-white"
                          : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={handleLab6RunTests}
                    className="px-4 py-2 bg-stone-900 hover:bg-black text-white rounded-xl text-xs font-bold transition cursor-pointer"
                  >
                    Execute Automated Regression Test Suite
                  </button>
                </div>

                {lab6TestResults && (
                  <div className="space-y-2 pt-2">
                    {lab6TestResults.map((t, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-xl border text-xs flex items-center justify-between ${
                          t.pass
                            ? "bg-emerald-50/60 border-emerald-300 text-emerald-950 font-semibold"
                            : "bg-red-50/60 border-red-300 text-red-950 font-semibold"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {t.pass ? <Check className="w-4 h-4 text-emerald-600" /> : <X className="w-4 h-4 text-red-600" />}
                          <span>{t.name}</span>
                        </div>
                        <span className="font-mono text-[11px]">{t.detail}</span>
                      </div>
                    ))}
                  </div>
                )}
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
                  { id: "item1", label: "Scope, authorization, and environment documented" },
                  { id: "item2", label: "Architecture and trust boundaries reviewed" },
                  { id: "item3", label: "Manual code-review findings recorded with line references" },
                  { id: "item4", label: "SAST/SCA/DAST findings classified using evidence" },
                  { id: "item5", label: "At least one finding independently validated in test harness" },
                  { id: "item6", label: "Root-cause remediation implemented in the lab" },
                  { id: "item7", label: "Original test and regression tests repeated" },
                  { id: "item8", label: "Closure status and residual risks documented" }
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
                <span className="text-xs font-mono text-stone-400">PrepSpaces DevSecOps CI/CD Pipeline</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                Shift-Left AppSec & Verifiable Remediation at PrepSpaces
              </h2>

              <p className="text-sm text-stone-700 leading-relaxed mb-6">
                PrepSpaces ships continuous software releases across multiple engineering squads. To ensure security without slowing release velocity, the organization implemented an automated DevSecOps verification pipeline combining GitHub Actions, Semgrep SAST, OWASP Dependency-Check, and staging ZAP scans.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-2">
                  <div className="font-bold text-stone-900 text-sm flex items-center gap-2">
                    <GitPullRequest className="w-4 h-4 text-orange-600" />
                    PR Security Quality Gates
                  </div>
                  <p className="text-stone-600">
                    High-severity SAST rules (e.g. unparameterized SQL) fail the build automatically. Any modification to authorization middleware triggers a mandatory review from the Application Security team.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-2">
                  <div className="font-bold text-stone-900 text-sm flex items-center gap-2">
                    <PackageCheck className="w-4 h-4 text-orange-600" />
                    Reachability-Driven SCA
                  </div>
                  <p className="text-stone-600">
                    Dependency scanning pairs published CVEs with AST call-graph reachability. Developers are only blocked if the vulnerable library function is actively invoked in the production build.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-2">
                  <div className="font-bold text-stone-900 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-600" />
                    Automated Retest Evidence
                  </div>
                  <p className="text-stone-600">
                    Vulnerability tickets in Jira require an attached automated regression test in Jest/Playwright. Tickets cannot transition to "Closed" without green verification runs in CI.
                  </p>
                </div>
              </div>

              <h3 className="text-lg font-bold text-stone-900 mb-3">PrepSpaces Production DevSecOps Flow</h3>
              <div className="p-5 rounded-2xl bg-stone-900 text-stone-200 text-xs font-mono space-y-3 leading-relaxed">
                <div>[1. Developer Branch]</div>
                <div className="pl-4 text-stone-400">↳ Pre-commit hooks run secret detection (TruffleHog) and local ESLint security rules.</div>
                <div>[2. GitHub Actions PR Pipeline]</div>
                <div className="pl-4 text-stone-400">↳ Semgrep SAST scans modified files; OWASP Dependency-Check analyzes npm lockfile.</div>
                <div>[3. Automated Staging Deployment]</div>
                <div className="pl-4 text-stone-400">↳ OWASP ZAP baseline passive scan checks headers, cookies, and CORS policies on ephemeral branch URLs.</div>
                <div>[4. Security Regression Harness]</div>
                <div className="pl-4 text-stone-400">↳ Suite of 140+ negative authorization tests executes against staging APIs.</div>
                <div>[5. Release Signoff]</div>
                <div className="pl-4 text-stone-400">↳ All checks green $\rightarrow$ deployment authorized through change-management pipeline.</div>
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
                    Secure Code Review & Testing Assessment
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
                Choose the single best answer for each question, then submit to review your score and detailed explanations based on OWASP ASVS and NIST standards.
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
                Capstone Project: Secure Code Review and Remediation Validation
              </h2>

              <p className="text-sm text-stone-700 leading-relaxed mb-6">
                PrepSpaces maintains a React frontend, a Node.js backend, database-backed APIs, identity integrations, and third-party packages. A pre-release assessment reports several potential weaknesses: an API authorization check may be missing, an input-handling function has a suspicious data flow, a dependency is flagged by an SCA tool, and a security header is absent on one response. Your task is to determine which findings are real, prioritize them, correct at least one confirmed issue in the authorized test environment, and demonstrate that the remediation is effective.
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="text-base font-bold text-stone-900">Capstone Assignment Requirements (Parts A – G)</h3>
                <div className="grid sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                    <strong className="text-stone-900">Part A — Assessment Plan & Authorization</strong>
                    <p className="text-stone-600">Establish repository version, test environment, permitted synthetic accounts, testing methods, rate limits, and stop conditions under NIST SP 800-115.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                    <strong className="text-stone-900">Part B — Architecture & Source Review</strong>
                    <p className="text-stone-600">Map data flows and trust boundaries. Review code for authentication, authorization, input handling, and cryptography with exact line references.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                    <strong className="text-stone-900">Part C — Automated Analysis (SAST/SCA/DAST)</strong>
                    <p className="text-stone-600">Execute at least two automated tools (e.g. Semgrep SAST + Dependency-Check SCA). Document tool versions and coverage limitations.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                    <strong className="text-stone-900">Part D — Finding Triage & Risk Prioritization</strong>
                    <p className="text-stone-600">Document at least 5 findings or observations. Classify as confirmed, false positive, or unverified with reachability evidence and P0–P3 priorities.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                    <strong className="text-stone-900">Part E — Implement a Verified Root-Cause Fix</strong>
                    <p className="text-stone-600">Correct at least one confirmed weakness (e.g. BOLA query scoping or parameterized SQL). Preserve before-and-after code diffs.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                    <strong className="text-stone-900">Part F — Retest & Regression Coverage</strong>
                    <p className="text-stone-600">Repeat original test under identical conditions. Verify negative cases fail (401/403/404) and legitimate positive cases succeed (200 OK).</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1 sm:col-span-2">
                    <strong className="text-stone-900">Part G — Final Professional Remediation Report</strong>
                    <p className="text-stone-600">Deliver an executive summary, findings register, code diffs, regression test logs, deployed artifact verification, and residual-risk statement.</p>
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
                      <td className="p-3 font-semibold text-stone-900">Scope and Threat/Context Understanding</td>
                      <td className="p-3 font-mono font-bold text-orange-600">10%</td>
                      <td className="p-3">Clear definition of in-scope assets, synthetic test accounts, safety stop conditions, and threat modeling.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">Manual Code Review</td>
                      <td className="p-3 font-mono font-bold text-orange-600">20%</td>
                      <td className="p-3">Source-to-sink data flow tracing, identifying authorization and business logic flaws with exact file/line references.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">Automated Testing and Interpretation</td>
                      <td className="p-3 font-mono font-bold text-orange-600">15%</td>
                      <td className="p-3">Execution of at least two automated tools (SAST/SCA/DAST) with clear awareness of tool limitations and coverage.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">Finding Validation and Prioritization</td>
                      <td className="p-3 font-mono font-bold text-orange-600">15%</td>
                      <td className="p-3">Distinguishing true vulnerabilities from false positives; assigning defensible severity based on reachability and impact.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">Root-Cause Remediation</td>
                      <td className="p-3 font-mono font-bold text-orange-600">15%</td>
                      <td className="p-3">Addressing the true architectural cause of the flaw rather than cosmetic symptom patching.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">Retesting and Regression Coverage</td>
                      <td className="p-3 font-mono font-bold text-orange-600">20%</td>
                      <td className="p-3">Reproducible test execution proving the exploit is blocked while legitimate positive workflows remain functional.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">Reporting and Professional Judgment</td>
                      <td className="p-3 font-mono font-bold text-orange-600">5%</td>
                      <td className="p-3">Separating facts from conclusions, actionable developer remediation guidance, and residual risk documentation.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-3 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-600">
                <strong className="text-stone-900">Passing Threshold: </strong>
                Minimum 70% required, with reproducible evidence, a justified severity assessment, an appropriate root-cause fix, and successful verification of the intended security behavior.
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
                    name: "OWASP Secure Code Review Cheat Sheet",
                    desc: "Practical guidance for manual reviews, trust boundaries, data flows, business logic, and code checklists.",
                    url: "https://cheatsheetseries.owasp.org/cheatsheets/Secure_Code_Review_Cheat_Sheet.html"
                  },
                  {
                    name: "OWASP ASVS 5.0.0 (May 2025)",
                    desc: "Structured framework of security verification requirements for modern web applications and APIs.",
                    url: "https://asvs.owasp.org/"
                  },
                  {
                    name: "OWASP Web Security Testing Guide (WSTG v4.2)",
                    desc: "Comprehensive manual and automated testing scenarios for web applications and web services.",
                    url: "https://owasp.org/www-project-web-security-testing-guide/v42/"
                  },
                  {
                    name: "NIST SP 800-115 — Security Testing & Assessment",
                    desc: "Methodological technical guide on planning assessments, analyzing results, and mitigation verification.",
                    url: "https://csrc.nist.gov/pubs/sp/800/115/final"
                  },
                  {
                    name: "OWASP Dependency-Check (SCA)",
                    desc: "Open-source software composition analysis tool for detecting disclosed vulnerabilities in application dependencies.",
                    url: "https://owasp.org/projects/dependency-check/"
                  },
                  {
                    name: "OWASP ZAP — Baseline & Passive Scanning",
                    desc: "Learn how passive scanning evaluates HTTP traffic without invasive attacks in CI/CD pipelines.",
                    url: "https://www.zaproxy.org/docs/docker/baseline-scan/"
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
            onClick={() => navigate("/learning/cybersecurity/auth-api-security")}
            className="flex items-center gap-2 rounded-2xl border border-stone-200 bg-white px-5 py-3 text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#f97316] transition shadow-xs cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous: Module 15 (Auth Flaws & API Security)</span>
          </button>

          <button
            onClick={() => navigate("/learning/cybersecurity/wireless-security")}
            className="flex items-center gap-2 rounded-2xl bg-[#ea580c] px-5 py-3 text-xs font-bold text-white hover:bg-orange-600 transition shadow-xs cursor-pointer"
          >
            <span>Next: Module 17 (Wireless Security & Wi-Fi Defense)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
