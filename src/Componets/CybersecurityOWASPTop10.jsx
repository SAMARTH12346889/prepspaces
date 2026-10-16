import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  Lock,
  Unlock,
  Server,
  Terminal,
  FileText,
  ExternalLink,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  RefreshCw,
  Filter,
  Eye,
  Zap,
  Layers,
  Cpu,
  Database,
  Network,
  Activity,
  Search,
  BookOpen,
  Sliders,
  Play,
  Check,
  X,
  Info,
  Target,
  GitBranch,
  ArrowUpRight,
  Copy,
  Globe,
  Radio,
  Clock,
  AlertOctagon,
  Laptop,
  Key,
  HardDrive,
  Award,
  FileCheck,
  Sparkles,
  Fingerprint,
  FileCode,
  SlidersHorizontal,
  RotateCcw,
  Compass,
  Code
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

export default function CybersecurityOWASPTop10() {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(14);

  // Active workspace tab: 'theory' | 'labs' | 'case-study' | 'quiz' | 'capstone'
  const [activeTab, setActiveTab] = useState("theory");

  // Lab navigation state
  const [activeLabTab, setActiveLabTab] = useState("lab1-sqli");

  // Lab 1: SQLi Simulator state
  const [sqliInput, setSqliInput] = useState("admin@prepspaces.com' OR '1'='1");
  const [sqliMode, setSqliMode] = useState("vulnerable"); // 'vulnerable' | 'parameterized'
  const [sqliSortCol, setSqliSortCol] = useState("created_at");

  // Lab 2: Input Schema Validator state
  const [schemaPayload, setSchemaPayload] = useState({
    interviewType: "technical",
    difficulty: "intermediate",
    durationMinutes: 45,
    candidateEmail: "candidate@prepspaces.com",
    notes: "Candidate has 3 years React & Node experience.",
  });
  const [schemaValidationResult, setSchemaValidationResult] = useState(null);

  // Lab 3: OS Command Injection state
  const [cmdHostInput, setCmdHostInput] = useState("8.8.8.8; cat /etc/passwd");
  const [cmdExecutionMode, setCmdExecutionMode] = useState("unsafe_exec"); // 'unsafe_exec' | 'safe_execfile'

  // Lab 4: React Rendering & XSS state
  const [xssInput, setXssInput] = useState('<img src=x onerror="alert(document.cookie)">');
  const [xssRenderMode, setXssRenderMode] = useState("safe_jsx"); // 'safe_jsx' | 'dangerously_inner' | 'sanitized'

  // Lab 5: NoSQL & SSTI state
  const [nosqlPayloadType, setNosqlPayloadType] = useState("object"); // 'string' | 'object'
  const [sstiInput, setSstiInput] = useState("{{7*7}}");
  const [sstiMode, setSstiMode] = useState("unsafe_template"); // 'unsafe_template' | 'safe_context'

  // Lab 6: Security Review Triage state
  const [auditFindings, setAuditFindings] = useState({
    f1: false, // SQLi in search
    f2: false, // Reflected XSS
    f3: false, // Path Traversal
    f4: true,  // False Positive Dismissed
  });

  // Checklist state
  const [checklist, setChecklist] = useState({
    inputInventory: false,
    schemaValidation: false,
    sqlParameterized: false,
    commandSafeSubprocess: false,
    reactXssSanitized: false,
    testsCompleted: false,
    findingsTriage: false,
    retestEvidence: false,
  });

  // Quiz state
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const toggleChecklist = (key) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedChecklistCount = Object.values(checklist).filter(Boolean).length;

  const handleValidateSchema = () => {
    const allowedTypes = ["technical", "behavioral", "system_design"];
    const allowedDiffs = ["beginner", "intermediate", "advanced"];

    const errors = [];
    if (!allowedTypes.includes(schemaPayload.interviewType)) {
      errors.push(`Invalid interviewType '${schemaPayload.interviewType}'. Must be one of: ${allowedTypes.join(", ")}`);
    }
    if (!allowedDiffs.includes(schemaPayload.difficulty)) {
      errors.push(`Invalid difficulty '${schemaPayload.difficulty}'. Must be one of: ${allowedDiffs.join(", ")}`);
    }
    const dur = Number(schemaPayload.durationMinutes);
    if (!Number.isInteger(dur) || dur < 15 || dur > 120) {
      errors.push("durationMinutes must be an integer between 15 and 120.");
    }
    if (!schemaPayload.candidateEmail || !schemaPayload.candidateEmail.includes("@") || schemaPayload.candidateEmail.length > 254) {
      errors.push("candidateEmail must be a valid email format under 254 characters.");
    }

    if (errors.length > 0) {
      setSchemaValidationResult({ valid: false, errors });
    } else {
      setSchemaValidationResult({ valid: true, sanitized: schemaPayload });
    }
  };

  const handleQuizSelect = (questionId, optionIndex) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const quizQuestions = [
    {
      id: "q1",
      question: "Which statement best describes an injection vulnerability?",
      options: [
        "Any request containing punctuation is an attack",
        "Untrusted input changes how an interpreter processes commands, queries, or content",
        "The application accepts a valid Unicode string",
        "The server returns any HTTP error"
      ],
      correctAnswer: 1,
      explanation: "Injection vulnerabilities occur when untrusted data is sent to an interpreter (SQL, OS shell, template engine, browser DOM) as part of a command or query, altering the intended execution structure."
    },
    {
      id: "q2",
      question: "What is the preferred primary defense against SQL injection?",
      options: [
        "Reject every string containing punctuation",
        "Hide database error messages while retaining unsafe SQL construction",
        "Use parameterized queries and keep user-controlled data separate from SQL structure",
        "Place the database behind HTTPS only"
      ],
      correctAnswer: 2,
      explanation: "Parameterized queries (prepared statements) keep data strictly separated from the SQL code structure. The database engine treats parameter values strictly as literal values rather than executable SQL syntax."
    },
    {
      id: "q3",
      question: "Why is input validation alone insufficient to prevent SQL injection?",
      options: [
        "Valid input can still be inserted into a dangerously constructed query",
        "Input validation always disables database connections",
        "All SQL queries must use operating system commands",
        "SQL databases do not support parameterization"
      ],
      correctAnswer: 0,
      explanation: "Input validation verifies that data conforms to application rules, but if valid input (such as an apostrophe in a legitimate name like O'Connor) is concatenated into a raw SQL string, it will still break the query syntax and trigger injection."
    },
    {
      id: "q4",
      question: "In a React application, which is the safer way to render a plain user-provided comment?",
      options: [
        "Insert the comment directly using dangerouslySetInnerHTML",
        "Render the value using ordinary JSX text interpolation",
        "Evaluate the comment as JavaScript",
        "Disable all browser security headers"
      ],
      correctAnswer: 1,
      explanation: "React's standard JSX text interpolation ({comment}) automatically escapes characters before rendering to the DOM, rendering content strictly as harmless text rather than active HTML markup."
    },
    {
      id: "q5",
      question: "What should be done before constructing a dynamic SQL sort expression?",
      options: [
        "Insert the raw request value into the query",
        "Assume prepared statements parameterize every kind of SQL identifier",
        "Map the requested sort option to a fixed server-side allowlist of identifiers",
        "Remove the database authorization policy"
      ],
      correctAnswer: 2,
      explanation: "SQL parameter placeholders cannot be used for SQL identifiers such as column names or sort directions (ASC/DESC). Applications must map user input to a rigid server-side allowlist of verified column constants."
    },
    {
      id: "q6",
      question: "Which statement about a Web Application Firewall is correct?",
      options: [
        "It can provide defense in depth but does not replace fixing unsafe application code",
        "It guarantees that SQL injection cannot occur",
        "It replaces server-side authorization checks",
        "It makes input validation unnecessary"
      ],
      correctAnswer: 0,
      explanation: "A WAF provides perimeter filtering and defense in depth, but it can be bypassed via encoding tricks or alternative syntax. Remediation must occur at the application layer through parameterized queries and safe APIs."
    }
  ];

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correctAnswer) score++;
    });
    return score;
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] relative overflow-hidden selection:bg-[#ea580c] selection:text-white">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-orange-100/60 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-amber-100/50 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 md:px-8">
        {/* Module Global Navigation Bar */}
        <ModuleNav track="cybersecurity" currentModuleId="owasp-top-10" />

        {/* Hero Banner Card */}
        <header className="mb-8 rounded-3xl border border-[#e7e3da] bg-white/85 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200/80 bg-orange-50/90 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#ea580c]">
              <Shield size={12} className="text-[#ea580c]" />
              PrepSpaces Cybersecurity Masterclass
            </span>
            <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-[11px] font-mono font-medium text-stone-600">
              Module 14 of 24
            </span>
            <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-[11px] font-mono font-medium text-stone-600">
              Academic Lineage · OWASP Top 10:2025 & Secure Coding Guidelines
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono font-bold text-emerald-700">
              Intermediate · 12–16 Hours
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#18181b]">
            OWASP Top 10, Injection Vulnerabilities & Secure Input Handling
          </h1>
          <p className="mt-2 text-sm md:text-base text-stone-600 max-w-4xl leading-relaxed">
            Understand the complete OWASP Top 10:2025 landscape and master defensive secure coding. Learn why injection occurs when untrusted input crosses interpreter boundaries, and how to defend against SQL injection, NoSQL injection, OS command injection, template injection, and XSS using parameterized queries, schema validation, safe subprocess APIs, and contextual output encoding.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-stone-200/80">
            <div className="p-3 rounded-2xl bg-stone-50/80 border border-stone-200/70">
              <span className="font-mono text-[11px] text-stone-500 uppercase block font-semibold">Standard</span>
              <span className="text-sm font-bold text-stone-900">OWASP Top 10:2025</span>
            </div>
            <div className="p-3 rounded-2xl bg-stone-50/80 border border-stone-200/70">
              <span className="font-mono text-[11px] text-stone-500 uppercase block font-semibold">Focus Area</span>
              <span className="text-sm font-bold text-stone-900">A05:2025 Injection</span>
            </div>
            <div className="p-3 rounded-2xl bg-stone-50/80 border border-stone-200/70">
              <span className="font-mono text-[11px] text-stone-500 uppercase block font-semibold">Defense</span>
              <span className="text-sm font-bold text-stone-900">Parameterized Queries & APIs</span>
            </div>
            <div className="p-3 rounded-2xl bg-stone-50/80 border border-stone-200/70">
              <span className="font-mono text-[11px] text-stone-500 uppercase block font-semibold">Practical Labs</span>
              <span className="text-sm font-bold text-stone-900">6 Interactive Sandboxes</span>
            </div>
          </div>
        </header>

        {/* Workspace Mode Tabs */}
        <div className="mb-8 flex flex-wrap items-center gap-2 border-b border-stone-200 pb-3">
          {[
            { id: "theory", label: "Curriculum & Lessons", icon: BookOpen },
            { id: "labs", label: "Practical Labs Suite (1–6)", icon: Terminal },
            { id: "case-study", label: "Applied Case Study (PrepSpaces)", icon: FileText },
            { id: "quiz", label: "Knowledge Assessment", icon: Award },
            { id: "capstone", label: "Capstone & Rubric", icon: FileCheck },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-bold transition shadow-xs cursor-pointer ${
                  isActive
                    ? "bg-[#18181b] text-white shadow-stone-900/10"
                    : "bg-white text-stone-700 hover:bg-stone-100/80 border border-stone-200/70"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#f97316]" : "text-stone-400"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: CURRICULUM & LESSONS (Unabridged Theory)                           */}
        {/* ========================================================================= */}
        {activeTab === "theory" && (
          <div className="space-y-8">
            {/* Quick jump pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-stone-200">
              <span className="text-xs font-mono text-stone-400 uppercase tracking-wider font-bold">
                Jump To:
              </span>
              {[
                { id: "lesson-1", label: "1. OWASP Top 10:2025 Overview" },
                { id: "lesson-2", label: "2. Secure Input Validation" },
                { id: "lesson-3", label: "3. SQL Injection Defense" },
                { id: "lesson-4", label: "4. NoSQL, OS Command & SSTI" },
                { id: "lesson-5", label: "5. Contextual Output Encoding" },
                { id: "lesson-6", label: "6. Node.js & React Secure Coding" },
                { id: "lesson-7", label: "7. Testing, Review & WAF Limits" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="rounded-xl border border-stone-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-stone-700 hover:border-orange-300 hover:text-[#f97316] whitespace-nowrap transition cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* LESSON 1 */}
            <section id="lesson-1" className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Lesson 1
                </span>
                <span className="text-xs font-mono text-stone-400">Industry Standards</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Understanding the OWASP Top 10:2025 Architecture
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <p>
                  The OWASP Top 10 is the global consensus awareness benchmark for application security risks. The current official release, <strong>OWASP Top 10:2025</strong> (the 8th installment), categorizes injection as <strong>A05:2025 Injection</strong>.
                </p>

                <div className="overflow-x-auto my-4">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 text-stone-500 font-mono">
                        <th className="p-2">Rank</th>
                        <th className="p-2">Category Name</th>
                        <th className="p-2">Core Security Vulnerability</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-700">
                      <tr>
                        <td className="p-2 font-mono font-bold text-orange-600">A01:2025</td>
                        <td className="p-2 font-bold text-stone-900">Broken Access Control</td>
                        <td className="p-2">Users acting outside of intended permissions (IDOR, missing authorization)</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-mono font-bold text-orange-600">A02:2025</td>
                        <td className="p-2 font-bold text-stone-900">Security Misconfiguration</td>
                        <td className="p-2">Default credentials, verbose debug error pages, unnecessary features enabled</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-mono font-bold text-orange-600">A03:2025</td>
                        <td className="p-2 font-bold text-stone-900">Software Supply Chain Failures</td>
                        <td className="p-2">Vulnerable open-source dependencies, malicious packages, CI/CD pipeline attacks</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-mono font-bold text-orange-600">A04:2025</td>
                        <td className="p-2 font-bold text-stone-900">Cryptographic Failures</td>
                        <td className="p-2">Weak ciphers, unencrypted data in transit, poor key management, fast password hashing</td>
                      </tr>
                      <tr className="bg-orange-50/50">
                        <td className="p-2 font-mono font-bold text-orange-600">A05:2025</td>
                        <td className="p-2 font-bold text-orange-950">Injection</td>
                        <td className="p-2 font-medium text-orange-900">Untrusted input alters interpreter execution (SQLi, Command Injection, XSS, SSTI)</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-mono font-bold text-orange-600">A06:2025</td>
                        <td className="p-2 font-bold text-stone-900">Insecure Design</td>
                        <td className="p-2">Flaws in architecture, missing threat modeling, lack of defense in depth</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-mono font-bold text-orange-600">A07:2025</td>
                        <td className="p-2 font-bold text-stone-900">Authentication Failures</td>
                        <td className="p-2">Credential stuffing, brute force susceptibility, missing multi-factor authentication</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-mono font-bold text-orange-600">A08:2025</td>
                        <td className="p-2 font-bold text-stone-900">Software or Data Integrity Failures</td>
                        <td className="p-2">Insecure deserialization, unsigned auto-updates, untrusted object modification</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-mono font-bold text-orange-600">A09:2025</td>
                        <td className="p-2 font-bold text-stone-900">Security Logging & Alerting Failures</td>
                        <td className="p-2">Auditing gaps, failure to detect active breaches, logs lacking forensic context</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-mono font-bold text-orange-600">A10:2025</td>
                        <td className="p-2 font-bold text-stone-900">Mishandling of Exceptional Conditions</td>
                        <td className="p-2">Fail-open error states, uncaught exceptions crashing services, logic bypasses</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs my-4 space-y-2">
                  <div className="text-orange-400 font-bold">THE DATA VS CODE BOUNDARY PRINCIPLE:</div>
                  <p className="text-stone-300 leading-relaxed">
                    "Injection flaws occur whenever an application constructs executable code or commands by concatenating untrusted data, instead of keeping instructions and data separated through parameterized interfaces."
                  </p>
                </div>
              </div>
            </section>

            {/* LESSON 2 */}
            <section id="lesson-2" className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Lesson 2
                </span>
                <span className="text-xs font-mono text-stone-400">Validation Engineering</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Secure Input Handling, Allowlisting, and Schema Enforcement
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <p>
                  Input validation is the first line of defense, ensuring that incoming data matches expected types, lengths, ranges, and character sets before the application attempts to process it.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 my-4">
                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-xs">
                    <div className="font-bold text-emerald-900 flex items-center gap-1.5 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Allowlist Validation (Positive Security)
                    </div>
                    <p className="text-emerald-950">
                      Define exactly what is permitted. If an endpoint expects an interview difficulty, allow strictly <code className="bg-white px-1 py-0.5 rounded font-mono">["beginner", "intermediate", "advanced"]</code>. Anything else is rejected immediately.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-red-50/70 border border-red-200 text-xs">
                    <div className="font-bold text-red-900 flex items-center gap-1.5 mb-1">
                      <AlertOctagon className="w-4 h-4 text-red-600" />
                      Blocklist Validation (Negative Security - Fragile)
                    </div>
                    <p className="text-red-950">
                      Attempting to filter out known "bad" characters (like <code className="bg-white px-1 py-0.5 rounded font-mono">'</code>, <code className="bg-white px-1 py-0.5 rounded font-mono">--</code>, or <code className="bg-white px-1 py-0.5 rounded font-mono">&lt;script&gt;</code>) is notoriously fragile. Attackers bypass blocklists via URL encoding, Unicode normalization, or alternative syntax.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1">
                  <strong className="text-stone-900">CRITICAL RULE: Input Validation Is NOT Authorization!</strong>
                  <p className="text-stone-600">
                    A request containing <code className="bg-stone-200 px-1 py-0.5 rounded font-mono">&#123;&quot;reportId&quot;: &quot;report-104&quot;&#125;</code> may be 100% syntactically valid, but that does NOT mean the requesting user is authorized to read report-104! Server-side authorization checks must always be performed independently.
                  </p>
                </div>
              </div>
            </section>

            {/* LESSON 3 */}
            <section id="lesson-3" className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Lesson 3
                </span>
                <span className="text-xs font-mono text-stone-400">Database Protection</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                SQL Injection (SQLi) and Parameterized Database Access
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <p>
                  SQL injection occurs when untrusted input is concatenated directly into a query string, allowing user-controlled input to be parsed as executable SQL syntax by the database compiler.
                </p>

                <div className="grid md:grid-cols-2 gap-4 my-4 font-mono text-xs">
                  <div className="p-4 rounded-2xl bg-red-950 text-red-200 space-y-2 border border-red-800">
                    <div className="text-red-400 font-bold">UNSAFE: STRING CONCATENATION</div>
                    <pre className="overflow-x-auto leading-relaxed">
{`// Vulnerable Node.js SQL
const query = \`SELECT * FROM users
  WHERE email = '\${req.body.email}'\`;
// Attacker input: admin' OR '1'='1
// Resulting query:
SELECT * FROM users WHERE email = 'admin' OR '1'='1'`}
                    </pre>
                    <p className="text-red-300 text-[11px]">
                      The syntax was altered: the OR statement evaluates to TRUE for every row, leaking the entire database!
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-900 text-emerald-300 space-y-2 border border-emerald-800">
                    <div className="text-emerald-400 font-bold">SECURE: PARAMETERIZED PREPARED STATEMENT</div>
                    <pre className="overflow-x-auto leading-relaxed">
{`// Safe Node.js (pg library)
const query = \`SELECT * FROM users
  WHERE email = $1\`;
const result = await pool.query(query, [req.body.email]);`}
                    </pre>
                    <p className="text-stone-400 text-[11px]">
                      The database driver compiles the query template first. The email value is sent separately as a raw string literal, completely neutralizing injection.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-2">
                  <h4 className="font-bold text-stone-900">The Dynamic Identifiers Trap (Sort Columns & Table Names):</h4>
                  <p className="text-stone-600">
                    Parameterized placeholders (<code className="text-orange-600 font-mono">$1</code> or <code className="text-orange-600 font-mono">?</code>) only work for <strong>values</strong>, not SQL identifiers like column names (<code className="font-mono">ORDER BY column</code>) or table names.
                  </p>
                  <p className="text-stone-700 font-semibold">
                    Solution: Map user input against a rigid server-side allowlist:
                  </p>
                  <pre className="bg-stone-900 text-stone-200 p-2.5 rounded-xl font-mono text-[11px]">
{`const allowedCols = new Set(["created_at", "title", "score"]);
const sortCol = allowedCols.has(req.query.sort) ? req.query.sort : "created_at";
const query = \`SELECT * FROM reports ORDER BY \${sortCol} LIMIT $1\`;`}
                  </pre>
                </div>
              </div>
            </section>

            {/* LESSON 4 */}
            <section id="lesson-4" className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Lesson 4
                </span>
                <span className="text-xs font-mono text-stone-400">Other Interpreters</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                NoSQL Injection, OS Command Injection, and Template Injection (SSTI)
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <div className="grid sm:grid-cols-3 gap-3 my-4">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1">
                    <div className="font-mono font-bold text-orange-600">NoSQL Injection (MongoDB)</div>
                    <p className="text-stone-600">
                      Occurs when JSON requests supply objects with query operators (like <code className="bg-stone-200 px-1 py-0.5 rounded font-mono">&#123;&quot;$ne&quot;: null&#125;</code>) in place of expected strings.
                    </p>
                    <div className="font-bold text-stone-900 pt-1">Fix: Strict type checks (<code className="font-mono">typeof x === 'string'</code>).</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1">
                    <div className="font-mono font-bold text-red-600">OS Command Injection</div>
                    <p className="text-stone-600">
                      Invoking a shell via <code className="bg-stone-200 px-1 py-0.5 rounded font-mono">exec("ping " + host)</code> allows attackers to chain commands with <code className="font-mono">; rm -rf /</code>.
                    </p>
                    <div className="font-bold text-stone-900 pt-1">Fix: Use <code className="font-mono">execFile()</code> with arguments array.</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1">
                    <div className="font-mono font-bold text-purple-600">Template Injection (SSTI)</div>
                    <p className="text-stone-600">
                      Dynamically concatenating user strings into template source allows code execution via <code className="font-mono">{"{{7*7}}"}</code>.
                    </p>
                    <div className="font-bold text-stone-900 pt-1">Fix: Pass input strictly as template context variables.</div>
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
                <span className="text-xs font-mono text-stone-400">Output Encoding</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Secure Output Handling and Context-Aware Encoding
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <p>
                  Encoding must match the exact destination interpreter. A value safe for HTML body text is NOT safe inside an HTML attribute, JavaScript block, URL, or CSS style!
                </p>

                <div className="grid sm:grid-cols-4 gap-2 text-xs font-mono my-4">
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong>HTML Body:</strong> <br />
                    <code className="text-orange-600">&lt; &gt; &amp; " '</code> ➜ <br />
                    <code className="text-stone-500">&amp;lt; &amp;gt; &amp;amp;</code>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong>HTML Attribute:</strong> <br />
                    Quotes must be strictly entity-encoded.
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong>JavaScript Context:</strong> <br />
                    Requires unicode/hex escaping, not HTML encoding.
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong>URL Parameter:</strong> <br />
                    Use <code className="text-orange-600">encodeURIComponent()</code>.
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
                <span className="text-xs font-mono text-stone-400">Node & React</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Secure Coding Patterns Across Node.js and React Applications
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <p>
                  Modern JavaScript full-stack development provides powerful safe abstractions, but developers can introduce injection through escape hatches.
                </p>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-2">
                  <h4 className="font-bold text-stone-900 text-sm">Dangerous Node.js APIs to Avoid:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-stone-700">
                    <li><code className="text-red-600 font-bold">eval()</code> and <code className="text-red-600 font-bold">new Function()</code>: Dynamic code evaluation must never accept user strings.</li>
                    <li><code className="text-red-600 font-bold">child_process.exec()</code>: Invokes system shell; replace with <code className="text-emerald-700 font-bold">execFile()</code>.</li>
                    <li><code className="text-red-600 font-bold">dangerouslySetInnerHTML</code>: Bypasses React's automatic XSS escaping. Use DOMPurify if HTML is required.</li>
                    <li><code className="text-red-600 font-bold">fs.readFile(userControlledPath)</code>: Path traversal hazard; validate with <code className="text-emerald-700 font-bold">path.normalize()</code> and ensure path stays within designated directory.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* LESSON 7 */}
            <section id="lesson-7" className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Lesson 7
                </span>
                <span className="text-xs font-mono text-stone-400">Testing & SDLC</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Defensive Testing, Code Review, and Why WAFs Are Not the Primary Fix
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <p>
                  Web Application Firewalls (WAFs) inspect incoming HTTP packets against signature patterns. While valuable for defense in depth, a WAF is <strong>NOT</strong> a substitute for fixing vulnerable code. Attackers can bypass WAF regexes using alternative encoding, chunked transfer payloads, or novel syntax.
                </p>

                <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs space-y-2">
                  <div className="text-emerald-400 font-bold">THE DEFENSIVE SDLC VERIFICATION PIPELINE:</div>
                  <div className="space-y-1 text-stone-300">
                    <div>1. <strong>SAST (Static Analysis):</strong> Semgrep / SonarQube in PR checks detecting raw concatenation.</div>
                    <div>2. <strong>DAST (Dynamic Analysis):</strong> OWASP ZAP scanning running containerized test suites.</div>
                    <div>3. <strong>Manual Code Review:</strong> Verifying data/code boundaries and authorization logic.</div>
                    <div>4. <strong>Automated Regression Tests:</strong> Positive and negative input test cases locking in the fix.</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: PRACTICAL LABS SUITE (Interactive Sandboxes 1–6)                   */}
        {/* ========================================================================= */}
        {activeTab === "labs" && (
          <div className="space-y-8">
            {/* Lab Sub-tabs */}
            <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-3">
              {[
                { id: "lab1-sqli", label: "Lab 1: SQLi & Prepared Stmts", icon: Database },
                { id: "lab2-schema", label: "Lab 2: Server Input Schema", icon: FileCode },
                { id: "lab3-cmd", label: "Lab 3: Command Injection", icon: Terminal },
                { id: "lab4-react", label: "Lab 4: React XSS Defense", icon: Code },
                { id: "lab5-nosql", label: "Lab 5: NoSQL & SSTI Sandbox", icon: Zap },
                { id: "lab6-audit", label: "Lab 6: Security Review Triage", icon: ShieldAlert },
              ].map((lab) => {
                const Icon = lab.icon;
                const isActive = activeLabTab === lab.id;
                return (
                  <button
                    key={lab.id}
                    onClick={() => setActiveLabTab(lab.id)}
                    className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold transition cursor-pointer ${
                      isActive
                        ? "bg-[#ea580c] text-white shadow-xs"
                        : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{lab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* LAB 1: SQLi & PREPARED STATEMENTS */}
            {activeLabTab === "lab1-sqli" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase mb-1">
                    <Database className="w-4 h-4" />
                    Interactive Lab 1 · SQL Injection vs Prepared Statements
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    Query Construction & Execution Visualizer
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Compare raw string concatenation with parameterized prepared statements and observe how the database parser interprets input.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-stone-800">User-Supplied Input (e.g. Email search parameter):</label>
                      <input
                        type="text"
                        value={sqliInput}
                        onChange={(e) => setSqliInput(e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-stone-300 font-mono text-xs bg-stone-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-stone-800">Query Construction Mode:</label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setSqliMode("vulnerable")}
                          className={`p-2.5 rounded-xl text-xs font-bold border transition cursor-pointer ${
                            sqliMode === "vulnerable" ? "bg-red-600 text-white border-red-700" : "bg-white text-stone-700 border-stone-300"
                          }`}
                        >
                          Unsafe String Concatenation
                        </button>
                        <button
                          onClick={() => setSqliMode("parameterized")}
                          className={`p-2.5 rounded-xl text-xs font-bold border transition cursor-pointer ${
                            sqliMode === "parameterized" ? "bg-emerald-600 text-white border-emerald-700" : "bg-white text-stone-700 border-stone-300"
                          }`}
                        >
                          Secure Parameterized Query ($1)
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* SQL Output Box */}
                  <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs space-y-2">
                    <div className="text-orange-400 font-bold border-b border-stone-800 pb-1">
                      POSTGRESQL QUERY PARSER EXECUTION:
                    </div>
                    {sqliMode === "vulnerable" ? (
                      <div>
                        <div className="text-red-400">
                          SELECT id, email, role, password_hash FROM users WHERE email = '{sqliInput}'
                        </div>
                        <div className="text-red-300 text-[11px] pt-2">
                          CRITICAL VULNERABILITY: User input closed the string literal ('admin@prepspaces.com') and injected an OR '1'='1' clause! The WHERE clause evaluates to TRUE for all rows. All user accounts and password hashes leaked!
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="text-emerald-400">
                          PREPARED STATEMENT: SELECT id, email, role, password_hash FROM users WHERE email = $1
                        </div>
                        <div className="text-stone-400 text-[11px] pt-1">
                          BOUND PARAMETER $1: <span className="text-white">"{sqliInput}"</span>
                        </div>
                        <div className="text-emerald-300 text-[11px] pt-2">
                          PROTECTED: The database parser received the query structure in advance. The parameter is treated strictly as literal data. Zero records returned because no email equals "{sqliInput}".
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* LAB 2: SERVER INPUT SCHEMA */}
            {activeLabTab === "lab2-schema" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase mb-1">
                    <FileCode className="w-4 h-4" />
                    Interactive Lab 2 · Server-Side Schema & Type Validation
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    API Request Schema Validator (Zod / Joi Engineering)
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Enforce syntactic and semantic rules on incoming JSON payloads and observe how invalid or malformed data is rejected.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Schema Payload Controls */}
                  <div className="space-y-3 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <h4 className="font-bold text-stone-800 text-xs uppercase font-mono">Payload Parameters:</h4>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-stone-700">Interview Type (Allowlist):</label>
                      <select
                        value={schemaPayload.interviewType}
                        onChange={(e) => setSchemaPayload({ ...schemaPayload, interviewType: e.target.value })}
                        className="w-full p-2 rounded-xl border border-stone-300 text-xs bg-white"
                      >
                        <option value="technical">technical (Allowed)</option>
                        <option value="behavioral">behavioral (Allowed)</option>
                        <option value="system_design">system_design (Allowed)</option>
                        <option value="malicious_type">malicious_type (Invalid Enum)</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-stone-700">Duration Minutes (Range 15–120):</label>
                      <input
                        type="number"
                        value={schemaPayload.durationMinutes}
                        onChange={(e) => setSchemaPayload({ ...schemaPayload, durationMinutes: e.target.value })}
                        className="w-full p-2 rounded-xl border border-stone-300 text-xs bg-white"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-stone-700">Candidate Email (Format & Length):</label>
                      <input
                        type="text"
                        value={schemaPayload.candidateEmail}
                        onChange={(e) => setSchemaPayload({ ...schemaPayload, candidateEmail: e.target.value })}
                        className="w-full p-2 rounded-xl border border-stone-300 text-xs bg-white"
                      />
                    </div>

                    <button
                      onClick={handleValidateSchema}
                      className="w-full py-2.5 rounded-xl bg-[#ea580c] text-white text-xs font-bold hover:bg-orange-600 transition cursor-pointer"
                    >
                      Execute Schema Validation
                    </button>
                  </div>

                  {/* Schema Validation Results */}
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs">
                      <div className="text-stone-400 mb-1 text-[11px]">JSON REQUEST BODY:</div>
                      <pre className="text-emerald-400 overflow-x-auto">
                        {JSON.stringify(schemaPayload, null, 2)}
                      </pre>
                    </div>

                    {schemaValidationResult && (
                      <div
                        className={`p-4 rounded-2xl border text-xs leading-relaxed ${
                          schemaValidationResult.valid
                            ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                            : "bg-red-50 border-red-300 text-red-950"
                        }`}
                      >
                        {schemaValidationResult.valid ? (
                          <div className="flex items-center gap-2 font-bold">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>SCHEMA VALID: Payload sanitized and approved for application business logic.</span>
                          </div>
                        ) : (
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 font-bold">
                              <AlertOctagon className="w-4 h-4 text-red-600 shrink-0" />
                              <span>VALIDATION FAILED (HTTP 400 Bad Request):</span>
                            </div>
                            <ul className="list-disc pl-5">
                              {schemaValidationResult.errors.map((err, i) => (
                                <li key={i}>{err}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* LAB 3: COMMAND INJECTION */}
            {activeLabTab === "lab3-cmd" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase mb-1">
                    <Terminal className="w-4 h-4" />
                    Interactive Lab 3 · OS Command Injection Defense
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    Shell Execution (exec) vs Subprocess APIs (execFile)
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Witness how shell metacharacters allow arbitrary command execution and how safe process APIs isolate arguments.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-stone-800">Target Host / IP Address:</label>
                      <input
                        type="text"
                        value={cmdHostInput}
                        onChange={(e) => setCmdHostInput(e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-stone-300 font-mono text-xs bg-stone-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-stone-800">Process Execution Method:</label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setCmdExecutionMode("unsafe_exec")}
                          className={`p-2.5 rounded-xl text-xs font-bold border transition cursor-pointer ${
                            cmdExecutionMode === "unsafe_exec" ? "bg-red-600 text-white" : "bg-white text-stone-700 border-stone-300"
                          }`}
                        >
                          Unsafe child_process.exec
                        </button>
                        <button
                          onClick={() => setCmdExecutionMode("safe_execfile")}
                          className={`p-2.5 rounded-xl text-xs font-bold border transition cursor-pointer ${
                            cmdExecutionMode === "safe_execfile" ? "bg-emerald-600 text-white" : "bg-white text-stone-700 border-stone-300"
                          }`}
                        >
                          Safe child_process.execFile
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs space-y-2">
                    <div className="text-orange-400 font-bold border-b border-stone-800 pb-1">
                      OPERATING SYSTEM PROCESS EXECUTION LOG:
                    </div>
                    {cmdExecutionMode === "unsafe_exec" ? (
                      <div>
                        <div className="text-red-400">
                          $ /bin/sh -c "ping -c 1 {cmdHostInput}"
                        </div>
                        <pre className="text-stone-300 text-[11px] pt-2 overflow-x-auto">
{`PING 8.8.8.8 (8.8.8.8): 56 data bytes
64 bytes from 8.8.8.8: icmp_seq=0 ttl=118 time=14.2 ms

root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
prepspaces-app:x:1001:1001::/home/app:/bin/bash`}
                        </pre>
                        <div className="text-red-400 text-[11px] font-bold pt-1">
                          COMMAND INJECTION SUCCESSFUL: Semicolon broke out of ping! /etc/passwd contents dumped.
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="text-emerald-400">
                          $ execFile("ping", ["-c", "1", "{cmdHostInput}"])
                        </div>
                        <pre className="text-stone-300 text-[11px] pt-2 overflow-x-auto">
{`ping: cannot resolve 8.8.8.8; cat /etc/passwd: Unknown host (Exit Code 2)`}
                        </pre>
                        <div className="text-emerald-400 text-[11px] font-bold pt-1">
                          PROTECTED: Binary spawned directly without a shell interpreter! The entire input was treated as a literal hostname argument.
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* LAB 4: REACT XSS */}
            {activeLabTab === "lab4-react" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase mb-1">
                    <Code className="w-4 h-4" />
                    Interactive Lab 4 · React Output Rendering & XSS Protection
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    JSX Auto-Escaping vs dangerouslySetInnerHTML
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Examine how React protects applications against XSS by default and how escape hatches can be exploited or sanitized.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-stone-800">User Comment Input:</label>
                      <input
                        type="text"
                        value={xssInput}
                        onChange={(e) => setXssInput(e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-stone-300 font-mono text-xs bg-stone-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-stone-800">React Rendering Mode:</label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: "safe_jsx", label: "Default JSX ({text})" },
                          { id: "dangerously_inner", label: "dangerouslySetInnerHTML" },
                          { id: "sanitized", label: "DOMPurify Sanitized" },
                        ].map((m) => (
                          <button
                            key={m.id}
                            onClick={() => setXssRenderMode(m.id)}
                            className={`p-2 rounded-xl text-xs font-bold border transition cursor-pointer ${
                              xssRenderMode === m.id ? "bg-stone-900 text-white" : "bg-white text-stone-700 border-stone-200"
                            }`}
                          >
                            {m.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <div className="font-bold text-xs text-stone-800">Browser DOM Representation:</div>
                    <div className="p-3 bg-white rounded-xl border border-stone-300 font-mono text-xs min-h-[48px] flex items-center">
                      {xssRenderMode === "safe_jsx" && <span>{xssInput}</span>}
                      {xssRenderMode === "dangerously_inner" && (
                        <span className="text-red-600 font-bold flex items-center gap-2">
                          <AlertOctagon size={16} /> [MALICIOUS IMAGE LOAD TRIGGERED XSS SCRIPT EXECUTION]
                        </span>
                      )}
                      {xssRenderMode === "sanitized" && (
                        <span className="text-emerald-700 font-bold">[SANITIZED]: Malicious onerror handler stripped; safe markup displayed.</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 5: NoSQL & SSTI */}
            {activeLabTab === "lab5-nosql" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase mb-1">
                    <Zap className="w-4 h-4" />
                    Interactive Lab 5 · NoSQL & Server-Side Template Injection
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    MongoDB Operator Injection & Template Source Exploits
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Explore injection vulnerabilities across non-relational query engines and template rendering pipelines.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* NoSQL Section */}
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                    <h4 className="font-bold text-xs text-stone-800 uppercase font-mono">1. MongoDB Operator Injection:</h4>
                    <div className="space-y-2 text-xs font-mono">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setNosqlPayloadType("object")}
                          className={`p-2 rounded-xl text-xs font-bold border transition cursor-pointer ${
                            nosqlPayloadType === "object" ? "bg-red-600 text-white" : "bg-white text-stone-700"
                          }`}
                        >
                          Payload: {"password: {$ne: null}"}
                        </button>
                        <button
                          onClick={() => setNosqlPayloadType("string")}
                          className={`p-2 rounded-xl text-xs font-bold border transition cursor-pointer ${
                            nosqlPayloadType === "string" ? "bg-emerald-600 text-white" : "bg-white text-stone-700"
                          }`}
                        >
                          Payload: "password123"
                        </button>
                      </div>

                      <div className="p-3 bg-stone-900 text-stone-200 rounded-xl">
                        {nosqlPayloadType === "object" ? (
                          <div className="text-red-400 leading-relaxed">
                            db.users.findOne({"{"} email: "admin", password: {"{"} $ne: null {"}}"})
                            <div className="text-red-300 text-[11px] pt-1">
                              EXPLOITED: $ne (Not Equal) operator matches any non-null password, bypassing authentication without knowing the password!
                            </div>
                          </div>
                        ) : (
                          <div className="text-emerald-400 leading-relaxed">
                            db.users.findOne({"{"} email: "admin", password: "password123" {"}"})
                            <div className="text-stone-400 text-[11px] pt-1">
                              PROTECTED: Enforced typeof password === 'string' check, neutralizing operator injection.
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* SSTI Section */}
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                    <h4 className="font-bold text-xs text-stone-800 uppercase font-mono">2. Server-Side Template Injection:</h4>
                    <div className="space-y-2 text-xs font-mono">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSstiMode("unsafe_template")}
                          className={`p-2 rounded-xl text-xs font-bold border transition cursor-pointer ${
                            sstiMode === "unsafe_template" ? "bg-red-600 text-white" : "bg-white text-stone-700"
                          }`}
                        >
                          Dynamic Template Eval
                        </button>
                        <button
                          onClick={() => setSstiMode("safe_context")}
                          className={`p-2 rounded-xl text-xs font-bold border transition cursor-pointer ${
                            sstiMode === "safe_context" ? "bg-emerald-600 text-white" : "bg-white text-stone-700"
                          }`}
                        >
                          Static Template + Context
                        </button>
                      </div>

                      <div className="p-3 bg-stone-900 text-stone-200 rounded-xl">
                        {sstiMode === "unsafe_template" ? (
                          <div className="text-red-400 leading-relaxed">
                            render_template_string("Hello " + "{sstiInput}") ➜ "Hello 49"
                            <div className="text-red-300 text-[11px] pt-1">
                              EXPLOITED: Template engine evaluated math expression {"{{7*7}}"} as code! Attacker can escalate to os.system() code execution.
                            </div>
                          </div>
                        ) : (
                          <div className="text-emerald-400 leading-relaxed">
                            render_template("hello.html", name="{sstiInput}") ➜ "Hello {"{{7*7}}"}"
                            <div className="text-stone-400 text-[11px] pt-1">
                              PROTECTED: Input passed as data variable. Displayed harmlessly as literal text.
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 6: SECURITY REVIEW TRIAGE */}
            {activeLabTab === "lab6-audit" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase mb-1">
                    <ShieldAlert className="w-4 h-4" />
                    Interactive Lab 6 · Web Application Security Review & Triage
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    SAST / DAST Alert Triage & Remediation Verification
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Review synthetic vulnerability scanner alerts, distinguish true positives from false alarms, and verify remediation code.
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    { id: "f1", title: "SQLi in /api/reports/search", severity: "CRITICAL", file: "services/reportService.js:42", desc: "User search query concatenated into raw SQL string." },
                    { id: "f2", title: "Reflected XSS in /search?q=", severity: "HIGH", file: "routes/search.js:18", desc: "Unescaped search term reflected directly in error response." },
                    { id: "f3", title: "Path Traversal in /api/download", severity: "HIGH", file: "controllers/fileController.js:84", desc: "userControlled filename passed to fs.createReadStream without normalization." },
                    { id: "f4", title: "Use of Math.random() in UI Carousel", severity: "INFO (False Positive)", file: "components/HeroCarousel.jsx:12", desc: "Non-cryptographic RNG used for random slide transition timing." },
                  ].map((finding) => (
                    <div key={finding.id} className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                            finding.severity.includes("CRITICAL") ? "bg-red-100 text-red-800" :
                            finding.severity.includes("HIGH") ? "bg-orange-100 text-orange-800" : "bg-stone-200 text-stone-700"
                          }`}>
                            {finding.severity}
                          </span>
                          <span className="font-bold text-sm text-stone-900">{finding.title}</span>
                        </div>
                        <div className="text-xs font-mono text-stone-500">{finding.file}</div>
                        <p className="text-xs text-stone-600">{finding.desc}</p>
                      </div>

                      <button
                        onClick={() => setAuditFindings({ ...auditFindings, [finding.id]: !auditFindings[finding.id] })}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                          auditFindings[finding.id]
                            ? "bg-emerald-600 text-white"
                            : "bg-white text-stone-700 border border-stone-300 hover:bg-stone-100"
                        }`}
                      >
                        {auditFindings[finding.id] ? (
                          <>
                            <CheckCircle2 size={14} />
                            <span>Remediated & Verified</span>
                          </>
                        ) : (
                          <span>Apply Remediation</span>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* LAB SUBMISSION CHECKLIST */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-stone-200">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-stone-900">
                    Lab Practical Submission Checklist
                  </h4>
                  <p className="text-xs text-stone-500">
                    Verify all secure coding, injection defense, and testing deliverables prior to capstone submission.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-stone-600">
                    {completedChecklistCount} / 8 Completed
                  </span>
                  <div className="w-24 h-2 bg-stone-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 transition-all duration-300"
                      style={{ width: `${(completedChecklistCount / 8) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                {[
                  { key: "inputInventory", label: "Input sources and interpreter boundaries documented (Lab 1)" },
                  { key: "schemaValidation", label: "Server-side schema validation rules defined (Lab 2)" },
                  { key: "sqlParameterized", label: "Unsafe query construction reviewed & parameterized (Lab 1)" },
                  { key: "commandSafeSubprocess", label: "Command execution replaced with safe subprocess APIs (Lab 3)" },
                  { key: "reactXssSanitized", label: "React output rendering and DOM sanitization verified (Lab 4)" },
                  { key: "testsCompleted", label: "Automated regression tests implemented for each fix" },
                  { key: "findingsTriage", label: "Scanner findings independently triaged & validated (Lab 6)" },
                  { key: "retestEvidence", label: "Remediation code diffs and retest evidence recorded" },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => toggleChecklist(item.key)}
                    className={`flex items-start gap-2.5 p-3 rounded-xl border text-left transition cursor-pointer ${
                      checklist[item.key]
                        ? "bg-emerald-50/70 border-emerald-300 text-emerald-950 font-medium"
                        : "bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${
                        checklist[item.key]
                          ? "bg-emerald-600 border-emerald-600 text-white"
                          : "border-stone-300 bg-white"
                      }`}
                    >
                      {checklist[item.key] && <Check size={12} strokeWidth={3} />}
                    </div>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: APPLIED CASE STUDY (PrepSpaces Platform)                           */}
        {/* ========================================================================= */}
        {activeTab === "case-study" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                Applied Case Study
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
                PrepSpaces Platform: Full-Stack Secure Input Architecture
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                Review how the PrepSpaces platform handles course search, interview generation, report formatting, and administrative content management without exposing interpreter boundaries.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs space-y-3">
              <div className="text-orange-400 font-bold">PREPSPACES SECURE INPUT HANDLING BLUEPRINT:</div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-[11px]">
                  <thead>
                    <tr className="border-b border-stone-800 text-stone-400">
                      <th className="p-2">Data Interface</th>
                      <th className="p-2">Expected Input</th>
                      <th className="p-2">Interpreter Boundary</th>
                      <th className="p-2">Defensive Control Applied</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-800 text-stone-300">
                    <tr>
                      <td className="p-2 font-bold text-white">Course Search API</td>
                      <td className="p-2">Text search keywords, sort field</td>
                      <td className="p-2">PostgreSQL Database</td>
                      <td className="p-2">Parameterized text search ($1) + Sort allowlist Set</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold text-white">Interview Creation API</td>
                      <td className="p-2">JSON body (duration, type, difficulty)</td>
                      <td className="p-2">Node.js Express / MongoDB</td>
                      <td className="p-2">Zod strict schema validation + Type enforcement</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold text-white">Diagnostic Ping Service</td>
                      <td className="p-2">Internal server IP / hostname</td>
                      <td className="p-2">Linux OS Shell</td>
                      <td className="p-2">child_process.execFile (No shell; literal arg vector)</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold text-white">Candidate Evaluation Notes</td>
                      <td className="p-2">Rich-text feedback from mentors</td>
                      <td className="p-2">React Browser DOM</td>
                      <td className="p-2">Default JSX text escaping + DOMPurify for formatting</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: KNOWLEDGE ASSESSMENT QUIZ                                          */}
        {/* ========================================================================= */}
        {activeTab === "quiz" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
              <div>
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Assessment
                </span>
                <h3 className="text-xl font-bold text-stone-900 mt-1">
                  Module 14 Knowledge Assessment
                </h3>
                <p className="text-xs text-stone-500">
                  6 questions testing OWASP Top 10:2025 concepts, injection mechanisms, and secure coding defenses.
                </p>
              </div>
              {quizSubmitted && (
                <div className="p-3 rounded-2xl bg-stone-100 border border-stone-200 text-center font-mono">
                  <span className="text-xs text-stone-500 block">Score</span>
                  <span className="text-lg font-black text-orange-600">
                    {calculateScore()} / {quizQuestions.length} ({Math.round((calculateScore() / quizQuestions.length) * 100)}%)
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {quizQuestions.map((q, idx) => {
                const selected = quizAnswers[q.id];
                const isCorrect = selected === q.correctAnswer;
                return (
                  <div key={q.id} className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                    <div className="text-xs font-mono font-bold text-stone-400 uppercase">
                      Question {idx + 1} of {quizQuestions.length}
                    </div>
                    <h4 className="text-sm font-bold text-stone-900 leading-snug">
                      {q.question}
                    </h4>

                    <div className="space-y-2">
                      {q.options.map((opt, optIdx) => {
                        let btnStyle = "bg-white text-stone-700 border-stone-200 hover:bg-stone-100/70";
                        if (quizSubmitted) {
                          if (optIdx === q.correctAnswer) {
                            btnStyle = "bg-emerald-100/80 border-emerald-400 text-emerald-900 font-bold";
                          } else if (selected === optIdx) {
                            btnStyle = "bg-red-100/80 border-red-300 text-red-900";
                          } else {
                            btnStyle = "opacity-50 border-stone-200";
                          }
                        } else if (selected === optIdx) {
                          btnStyle = "bg-stone-900 text-white border-stone-900 font-medium";
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={quizSubmitted}
                            onClick={() => handleQuizSelect(q.id, optIdx)}
                            className={`w-full p-3 rounded-xl border text-xs text-left transition cursor-pointer flex items-center justify-between ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {quizSubmitted && optIdx === q.correctAnswer && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className={`p-3 rounded-xl text-xs leading-relaxed ${isCorrect ? "bg-emerald-50 text-emerald-950" : "bg-red-50 text-red-950"}`}>
                        <strong>Explanation:</strong> {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-stone-200">
              {!quizSubmitted ? (
                <button
                  onClick={() => setQuizSubmitted(true)}
                  disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                  className="px-6 py-2.5 rounded-2xl bg-[#ea580c] text-white text-xs font-bold hover:bg-orange-600 transition disabled:opacity-50 cursor-pointer"
                >
                  Submit Assessment
                </button>
              ) : (
                <button
                  onClick={() => {
                    setQuizAnswers({});
                    setQuizSubmitted(false);
                  }}
                  className="flex items-center gap-1.5 px-5 py-2 rounded-xl border border-stone-300 bg-white text-xs font-bold text-stone-700 hover:bg-stone-50 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Assessment</span>
                </button>
              )}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: CAPSTONE & RUBRIC                                                  */}
        {/* ========================================================================= */}
        {activeTab === "capstone" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                Portfolio Capstone
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
                Capstone Project: Secure Input Handling Across a Full-Stack Application
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                Remediate and validate full-stack input paths across a React and Node.js application, enforcing parameterized database queries, strict server-side schema validation, safe subprocess APIs, and context-aware output encoding across Parts A through G.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-stone-900 text-sm">Required Capstone Deliverables (Parts A through G):</h3>
              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="font-bold text-stone-900 mb-1">Part A: Input & Interpreter Inventory</div>
                  <p className="text-stone-600">Identify 8 distinct input sources, destination interpreters, expected types, and required security controls.</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="font-bold text-stone-900 mb-1">Part B: Injection Exposure Analysis</div>
                  <p className="text-stone-600">Analyze SQL queries, NoSQL expressions, command execution, templates, and browser rendering boundaries.</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="font-bold text-stone-900 mb-1">Part C: Server-Side Validation Design</div>
                  <p className="text-stone-600">Syntactic and semantic validation schemas with allowlists, type checks, and resource limits.</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="font-bold text-stone-900 mb-1">Part D: Injection Prevention Implementation</div>
                  <p className="text-stone-600">Parameterize SQL queries, allowlist sort columns, eliminate shell execution, and sanitize rich text.</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="font-bold text-stone-900 mb-1">Part E: Authorization & Error Handling</div>
                  <p className="text-stone-600">Ensure valid IDs do not bypass ownership authorization, and verify errors do not leak stack traces.</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="font-bold text-stone-900 mb-1">Part F: Testing & Regression Coverage</div>
                  <p className="text-stone-600">Document before-and-after behavior, unit tests, and regression verification for each remediated flaw.</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 sm:col-span-2">
                  <div className="font-bold text-stone-900 mb-1">Part G: Final Report & Secure Coding Standard</div>
                  <p className="text-stone-600">Executive summary, findings matrix, code diffs, and an actionable secure coding standard for developers.</p>
                </div>
              </div>
            </div>

            {/* Rubric Table */}
            <div className="space-y-3">
              <h3 className="font-bold text-stone-900 text-sm">Capstone Evaluation Rubric (100% Total):</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-stone-200 text-stone-500 font-mono">
                      <th className="p-2">Assessment Area</th>
                      <th className="p-2">Weight</th>
                      <th className="p-2">Passing Criteria</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-700">
                    <tr>
                      <td className="p-2 font-bold text-stone-900">Input & Interpreter Inventory</td>
                      <td className="p-2 font-mono font-bold text-orange-600">10%</td>
                      <td className="p-2">Complete tracing of 8+ input points across client, API gateway, and backend boundaries.</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold text-stone-900">Injection Risk Analysis</td>
                      <td className="p-2 font-mono font-bold text-orange-600">20%</td>
                      <td className="p-2">Accurate identification of code/data boundary violations across SQL, shell, and DOM contexts.</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold text-stone-900">Server-Side Validation Design</td>
                      <td className="p-2 font-mono font-bold text-orange-600">15%</td>
                      <td className="p-2">Robust syntactic/semantic schemas rejecting unexpected properties and out-of-range values.</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold text-stone-900">Parameterized Queries & Safe APIs</td>
                      <td className="p-2 font-mono font-bold text-orange-600">20%</td>
                      <td className="p-2">Prepared statements with parameter placeholders and elimination of raw shell command execution.</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold text-stone-900">Secure Output Handling & Authorization</td>
                      <td className="p-2 font-mono font-bold text-orange-600">15%</td>
                      <td className="p-2">Contextual output encoding in React, safe DOM sanitization, and independent server-side RBAC.</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold text-stone-900">Testing & Remediation Verification</td>
                      <td className="p-2 font-mono font-bold text-orange-600">15%</td>
                      <td className="p-2">Repeatable regression tests proving input cannot alter intended instruction semantics.</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold text-stone-900">Report Quality & Professional Judgment</td>
                      <td className="p-2 font-mono font-bold text-orange-600">5%</td>
                      <td className="p-2">Professional documentation distinguishing verified fixes from proposed controls.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-3 rounded-xl bg-stone-100 text-stone-700 text-xs">
                <strong>Passing Threshold:</strong> 70% or higher, with demonstrated separation of code and data, correct context-specific defenses, and verifiable remediation results.
              </div>
            </div>

            {/* Official References */}
            <div className="space-y-3 pt-4 border-t border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm">Official Standards & References:</h3>
              <div className="grid sm:grid-cols-2 gap-2 text-xs">
                {[
                  { title: "OWASP Top 10:2025 — Official Project & A05 Injection", link: "https://top10.owasp.org/2025/A05_2025-Injection/" },
                  { title: "OWASP — SQL Injection Prevention Cheat Sheet", link: "https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html" },
                  { title: "OWASP — Input Validation Cheat Sheet", link: "https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html" },
                  { title: "OWASP — OS Command Injection Defense Cheat Sheet", link: "https://cheatsheetseries.owasp.org/cheatsheets/OS_Command_Injection_Defense_Cheat_Sheet.html" },
                  { title: "OWASP — Cross-Site Scripting (XSS) Prevention", link: "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html" },
                  { title: "OWASP — LDAP Injection Prevention Cheat Sheet", link: "https://cheatsheetseries.owasp.org/cheatsheets/LDAP_Injection_Prevention_Cheat_Sheet.html" },
                  { title: "OWASP — Server-Side Template Injection (SSTI) Defense", link: "https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Template_Injection_Prevention_Cheat_Sheet.html" },
                  { title: "OWASP — Node.js Secure Coding Guidelines", link: "https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html" },
                ].map((ref, idx) => (
                  <a
                    key={idx}
                    href={ref.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-white hover:border-orange-300 transition text-stone-800"
                  >
                    <span className="truncate">{ref.title}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-stone-400 shrink-0 ml-2" />
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
            onClick={() => navigate("/learning/cybersecurity/web-security")}
            className="flex items-center gap-2 rounded-2xl border border-stone-200 bg-white px-5 py-3 text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#f97316] transition shadow-xs cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous: Module 13 (Web Architecture & Sessions)</span>
          </button>

          <button
            onClick={() => navigate("/learning/cybersecurity/burp-suite")}
            className="flex items-center gap-2 rounded-2xl bg-[#ea580c] px-5 py-3 text-xs font-bold text-white hover:bg-orange-600 transition shadow-xs cursor-pointer"
          >
            <span>Next: Module 15 (Web PenTesting & Burp Suite)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
