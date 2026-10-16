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

export default function CybersecurityWebSecurity() {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(13);

  // Active workspace tab: 'theory' | 'labs' | 'case-study' | 'quiz' | 'capstone'
  const [activeTab, setActiveTab] = useState("theory");

  // Lab navigation state
  const [activeLabTab, setActiveLabTab] = useState("lab1-http");

  // Lab 1: HTTP Inspector state
  const [httpEndpoint, setHttpEndpoint] = useState("profile"); // 'profile' | 'enroll' | 'admin' | 'login'

  // Lab 2: Cookie Auditor state
  const [cookieSecure, setCookieSecure] = useState(true);
  const [cookieHttpOnly, setCookieHttpOnly] = useState(true);
  const [cookieSameSite, setCookieSameSite] = useState("Lax"); // 'Strict' | 'Lax' | 'None'
  const [cookieHostPrefix, setCookieHostPrefix] = useState(true);
  const [cookieDomain, setCookieDomain] = useState("host-only"); // 'host-only' | 'wildcard'

  // Lab 3: Session Lifecycle state
  const [sessionStage, setSessionStage] = useState("anonymous"); // 'anonymous' | 'authenticated' | 'expired' | 'logged_out'
  const [sessionRotateOnLogin, setSessionRotateOnLogin] = useState(true);
  const [serverInvalidateOnLogout, setServerInvalidateOnLogout] = useState(true);
  const [currentSessionId, setCurrentSessionId] = useState("anon_7f9a1b2c4d8e");

  // Lab 4: SOP & CORS state
  const [originA] = useState("https://app.prepspaces.com:443");
  const [targetOrigin, setTargetOrigin] = useState("https://api.prepspaces.com:443");
  const [corsScenario, setCorsScenario] = useState("valid"); // 'valid' | 'wildcard_creds' | 'null_origin' | 'unvalidated_reflect'

  // Lab 5: Security Headers & CSP state
  const [cspEnabled, setCspEnabled] = useState(true);
  const [hstsEnabled, setHstsEnabled] = useState(true);
  const [frameAncestorsNone, setFrameAncestorsNone] = useState(true);
  const [cacheNoStore, setCacheNoStore] = useState(true);
  const [activeTestAttack, setActiveTestAttack] = useState(null); // 'xss' | 'clickjack' | 'cache_leak'

  // Lab 6: Vulnerability Matrix state
  const [activeVulnId, setActiveVulnId] = useState("xss");

  // Checklist state
  const [checklist, setChecklist] = useState({
    archBoundaries: false,
    httpEvidence: false,
    cookieAudited: false,
    sessionLifecycle: false,
    sopCorsDocumented: false,
    headersReviewed: false,
    authChecksSynthetic: false,
    retestPlanRecorded: false,
  });

  // Quiz state
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const toggleChecklist = (key) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedChecklistCount = Object.values(checklist).filter(Boolean).length;

  const handleLoginSimulation = () => {
    if (sessionRotateOnLogin) {
      setCurrentSessionId("auth_9b82c7f04e19");
    }
    // If not rotating, keeps anon_7f9a1b2c4d8e (Session Fixation!)
    setSessionStage("authenticated");
  };

  const handleLogoutSimulation = () => {
    if (serverInvalidateOnLogout) {
      setCurrentSessionId("invalidated_revoked");
      setSessionStage("logged_out");
    } else {
      // Server session is still valid in backend database!
      setSessionStage("logged_out");
    }
  };

  const handleQuizSelect = (questionId, optionIndex) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const quizQuestions = [
    {
      id: "q1",
      question: "Why do web applications use session identifiers?",
      options: [
        "To encrypt every HTTP request automatically",
        "To associate requests with an application session and its authentication state",
        "To replace all backend authorization checks",
        "To prove that every request is safe"
      ],
      correctAnswer: 1,
      explanation: "HTTP is a stateless protocol (RFC 9110). A session identifier allows the backend to bind subsequent requests from a browser to an established authenticated state in the database or session store."
    },
    {
      id: "q2",
      question: "What does the HttpOnly cookie attribute do?",
      options: [
        "Prevents the browser from ever sending the cookie",
        "Encrypts the cookie value",
        "Prevents ordinary JavaScript APIs from reading the cookie directly",
        "Eliminates the need for session expiration"
      ],
      correctAnswer: 2,
      explanation: "The HttpOnly flag instructs the browser that the cookie should not be accessible via client-side scripts like document.cookie, mitigating direct credential extraction during XSS attacks."
    },
    {
      id: "q3",
      question: "What is the same-origin policy designed to do?",
      options: [
        "Restrict certain cross-origin script interactions in the browser",
        "Authenticate every user to every API",
        "Encrypt all website data at rest",
        "Replace server-side authorization"
      ],
      correctAnswer: 0,
      explanation: "The Same-Origin Policy (SOP) is a foundational browser security control that isolates documents and scripts loaded from different origins (scheme, host, and port) to prevent malicious sites from reading confidential data from other sites."
    },
    {
      id: "q4",
      question: "What is the correct relationship between CORS and backend authorization?",
      options: [
        "CORS makes backend authorization unnecessary",
        "CORS controls browser cross-origin response access; backend authorization must still be enforced",
        "CORS is an alternative to HTTPS",
        "CORS guarantees that requests cannot be sent cross-origin"
      ],
      correctAnswer: 1,
      explanation: "CORS is purely a browser-enforced mechanism governing whether JavaScript can read a cross-origin response. The server still receives and processes the request, meaning robust server-side authentication and authorization must always be enforced."
    },
    {
      id: "q5",
      question: "Which is a key defense against CSRF in a stateful web application?",
      options: [
        "Allow state-changing actions through GET requests",
        "Hide all buttons that change application state",
        "Use appropriate request-intent validation such as CSRF tokens, supported by suitable cookie and origin policies",
        "Disable authentication for API endpoints"
      ],
      correctAnswer: 2,
      explanation: "CSRF defenses require validating user intent via unpredictable anti-CSRF synchronizer tokens, verified SameSite cookies (Lax or Strict), Origin/Referer headers, and ensuring state-changing actions never use safe GET methods."
    },
    {
      id: "q6",
      question: "Why is Content Security Policy useful?",
      options: [
        "It restricts permitted browser resource behavior and can reduce the impact of some XSS attacks",
        "It eliminates every type of XSS vulnerability",
        "It automatically proves that the user is authorized",
        "It replaces all cookie security attributes"
      ],
      correctAnswer: 0,
      explanation: "Content Security Policy (CSP) provides defense in depth by restricting which scripts, styles, frames, and connections the browser can execute, dramatically mitigating the impact of XSS and clickjacking."
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
        <ModuleNav track="cybersecurity" currentModuleId="web-security" />

        {/* Hero Banner Card */}
        <header className="mb-8 rounded-3xl border border-[#e7e3da] bg-white/85 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200/80 bg-orange-50/90 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#ea580c]">
              <Shield size={12} className="text-[#ea580c]" />
              PrepSpaces Cybersecurity Masterclass
            </span>
            <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-[11px] font-mono font-medium text-stone-600">
              Module 13 of 24
            </span>
            <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-[11px] font-mono font-medium text-stone-600">
              Academic Lineage · IETF RFC 9110 / RFC 6265, OWASP & MDN Web Docs
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono font-bold text-emerald-700">
              Intermediate · 12–16 Hours
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#18181b]">
            Web Application Architecture, HTTP Sessions, Cookies & Browser Security
          </h1>
          <p className="mt-2 text-sm md:text-base text-stone-600 max-w-4xl leading-relaxed">
            Understand how modern web applications communicate over HTTP, manage authenticated session states across trust boundaries, enforce cookie protection flags, and leverage browser security controls like the Same-Origin Policy (SOP), CORS, and Content Security Policy (CSP) to defend against XSS, CSRF, and clickjacking.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-stone-200/80">
            <div className="p-3 rounded-2xl bg-stone-50/80 border border-stone-200/70">
              <span className="font-mono text-[11px] text-stone-500 uppercase block font-semibold">Duration</span>
              <span className="text-sm font-bold text-stone-900">12–16 Hours</span>
            </div>
            <div className="p-3 rounded-2xl bg-stone-50/80 border border-stone-200/70">
              <span className="font-mono text-[11px] text-stone-500 uppercase block font-semibold">Track</span>
              <span className="text-sm font-bold text-stone-900">Web Security & HTTP</span>
            </div>
            <div className="p-3 rounded-2xl bg-stone-50/80 border border-stone-200/70">
              <span className="font-mono text-[11px] text-stone-500 uppercase block font-semibold">Standards</span>
              <span className="text-sm font-bold text-stone-900">IETF, OWASP & MDN</span>
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
                { id: "lesson-1", label: "1. Web App Architecture" },
                { id: "lesson-2", label: "2. HTTP Sessions & Lifecycle" },
                { id: "lesson-3", label: "3. Cookies & Browser Storage" },
                { id: "lesson-4", label: "4. SOP, CORS & CSP" },
                { id: "lesson-5", label: "5. XSS, CSRF & Clickjacking" },
                { id: "lesson-6", label: "6. Security Headers & Caching" },
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
                <span className="text-xs font-mono text-stone-400">Architecture & Protocols</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Web Application Architecture and Request Lifecycle
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <p>
                  A modern web application is an orchestrated ecosystem consisting of client browsers, frontend JavaScript runtimes, reverse proxies or API gateways, backend services, relational or NoSQL databases, identity providers (IdPs), and third-party SaaS integrations.
                </p>

                <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs my-4 space-y-2">
                  <div className="text-orange-400 font-bold">THE WEB APPLICATION TRUST BOUNDARY ARCHITECTURE:</div>
                  <pre className="overflow-x-auto leading-relaxed">
{`[ USER BROWSER ] ◄── Uncontrolled Environment (DOM, LocalStorage, DevTools)
      │  ▲
      │  │ HTTPS + Cookies + SOP / CORS / CSP Enforced by Browser
      ▼  │
[ REVERSE PROXY / API GATEWAY ] ◄── Edge Trust Boundary (TLS Termination, WAF, Rate Limits)
      │  ▲
      │  │ Internal Network / Mutual TLS (mTLS)
      ▼  │
[ BACKEND APPLICATION ] ◄── Core Authorization Boundary (RBAC/ABAC, Session Validation)
      │  ▲
      │  │ Database Queries (Parameterized SQL / ORM)
      ▼  │
[ DATABASE & IDENTITY PROVIDER ] ◄── Data & Auth Anchors (Persistent State, Token Signer)`}
                  </pre>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 my-4">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <h4 className="font-bold text-stone-900 text-sm mb-1">Safe Methods (RFC 9110)</h4>
                    <p className="text-xs text-stone-600">
                      <code className="text-orange-600 font-bold">GET</code> and <code className="text-orange-600 font-bold">HEAD</code> are defined as safe and idempotent. They must <strong>never</strong> trigger state changes, database writes, or financial transactions.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <h4 className="font-bold text-stone-900 text-sm mb-1">Unsafe / State-Changing Methods</h4>
                    <p className="text-xs text-stone-600">
                      <code className="text-orange-600 font-bold">POST</code>, <code className="text-orange-600 font-bold">PUT</code>, <code className="text-orange-600 font-bold">PATCH</code>, and <code className="text-orange-600 font-bold">DELETE</code> require explicit authentication, object-level authorization, input validation, and anti-CSRF protections.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* LESSON 2 */}
            <section id="lesson-2" className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Lesson 2
                </span>
                <span className="text-xs font-mono text-stone-400">Session Security</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                HTTP Sessions, Session Fixation, and Lifecycle Management
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <p>
                  Because HTTP is inherently stateless, applications construct stateful interactions using session identifiers. A session ID is a high-entropy bearer token that references a record stored in a secure server-side session cache (e.g., Redis).
                </p>

                <div className="grid sm:grid-cols-2 gap-4 my-4">
                  <div className="p-4 rounded-2xl bg-red-50/70 border border-red-200 text-xs">
                    <div className="font-bold text-red-900 flex items-center gap-1.5 mb-1">
                      <AlertOctagon className="w-4 h-4 text-red-600" />
                      Session Fixation Attack
                    </div>
                    <p className="text-red-950">
                      An attacker establishes an anonymous session ID, feeds it to a victim (via URL parameter or phishing link), and waits for the victim to log in. If the application does NOT issue a fresh session ID upon login, the attacker uses the known session ID to access the victim's authenticated account!
                    </p>
                    <div className="mt-2 font-bold text-emerald-800">
                      Remediation: Always regenerate session IDs upon authentication and privilege elevation.
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs">
                    <div className="font-bold text-amber-900 flex items-center gap-1.5 mb-1">
                      <AlertTriangle className="w-4 h-4 text-amber-600" />
                      Incomplete Logout Trap
                    </div>
                    <p className="text-amber-950">
                      Many developers simply clear the cookie on the browser side via JavaScript or an empty <code className="bg-white px-1 py-0.5 rounded">Set-Cookie</code> header, but leave the session valid in the server Redis store. If an attacker stole the session token earlier, it remains fully usable until server expiration!
                    </p>
                    <div className="mt-2 font-bold text-emerald-800">
                      Remediation: Logout must atomically delete the session record in server-side storage.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* LESSON 3 */}
            <section id="lesson-3" className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Lesson 3
                </span>
                <span className="text-xs font-mono text-stone-400">Browser Storage</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Cookies, Cookie Security Flags, and Client-Side Storage
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <p>
                  Cookies (RFC 6265) are automatically attached by browsers to matching requests. To prevent exploitation, developers must configure specific security flags.
                </p>

                <div className="overflow-x-auto my-4">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 text-stone-500 font-mono">
                        <th className="p-2">Flag / Attribute</th>
                        <th className="p-2">Security Enforcement</th>
                        <th className="p-2">Risk if Omitted</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-700">
                      <tr>
                        <td className="p-2 font-mono font-bold text-orange-600">Secure</td>
                        <td className="p-2">Browser only transmits cookie over encrypted HTTPS channels</td>
                        <td className="p-2 text-red-600">Plaintext transmission over unencrypted Wi-Fi or MitM interception</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-mono font-bold text-orange-600">HttpOnly</td>
                        <td className="p-2">Blocks client JavaScript APIs (<code className="text-stone-800">document.cookie</code>) from accessing the cookie</td>
                        <td className="p-2 text-red-600">Direct cookie theft if any Cross-Site Scripting (XSS) occurs</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-mono font-bold text-orange-600">SameSite=Lax / Strict</td>
                        <td className="p-2">Prevents cookie from being sent on cross-site requests (CSRF mitigation)</td>
                        <td className="p-2 text-red-600">Cross-Site Request Forgery (CSRF) across third-party links and forms</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-mono font-bold text-orange-600">__Host- Prefix</td>
                        <td className="p-2">Forces Secure, forbids Domain attribute (host-only), forces Path=/</td>
                        <td className="p-2 text-red-600">Subdomain cookie injection attacks from compromised sibling sites</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
                  <div className="font-bold text-stone-900 mb-2">Cookies vs LocalStorage for Session Tokens:</div>
                  <p className="text-stone-600 mb-2">
                    Storing JWTs or API keys in <code className="bg-stone-200 px-1 py-0.5 rounded text-stone-900">localStorage</code> is accessible to <strong>ANY JavaScript</strong> running on that origin. If an XSS vulnerability occurs (or a compromised npm dependency runs), the token is immediately exfiltrated.
                  </p>
                  <p className="text-stone-700 font-semibold">
                    Best Practice: Use <code className="text-orange-600 font-bold">HttpOnly, Secure, SameSite=Lax</code> session cookies with a Backend-for-Frontend (BFF) proxy to keep sensitive tokens entirely out of browser JavaScript memory.
                  </p>
                </div>
              </div>
            </section>

            {/* LESSON 4 */}
            <section id="lesson-4" className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Lesson 4
                </span>
                <span className="text-xs font-mono text-stone-400">Origin Isolation</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Same-Origin Policy (SOP), CORS, and Content Security Policy (CSP)
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <p>
                  An <strong>Origin</strong> is strictly defined as the combination of <strong>Scheme + Host + Port</strong>. If any of the three differs, it is considered a different origin by the browser.
                </p>

                <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs my-4 space-y-2">
                  <div className="text-emerald-400 font-bold">ORIGIN COMPARISON RULES:</div>
                  <div className="text-stone-300">Target Origin: <code className="text-orange-400">https://app.prepspaces.com:443</code></div>
                  <div className="space-y-1 pt-1 text-[11px]">
                    <div>• <code className="text-white">https://app.prepspaces.com/dashboard</code> ➜ <span className="text-emerald-400 font-bold">SAME ORIGIN</span> (Identical scheme, host, port)</div>
                    <div>• <code className="text-white">http://app.prepspaces.com</code> ➜ <span className="text-red-400 font-bold">CROSS-ORIGIN</span> (Scheme differs: http vs https)</div>
                    <div>• <code className="text-white">https://api.prepspaces.com</code> ➜ <span className="text-red-400 font-bold">CROSS-ORIGIN</span> (Host differs: api vs app)</div>
                    <div>• <code className="text-white">https://app.prepspaces.com:8443</code> ➜ <span className="text-red-400 font-bold">CROSS-ORIGIN</span> (Port differs: 8443 vs 443)</div>
                  </div>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-xs space-y-2">
                  <h4 className="font-bold text-stone-900 text-sm">Dangerous CORS Misconfigurations:</h4>
                  <p className="text-stone-600">
                    <strong>1. Wildcard with Credentials:</strong> Modern browsers forbid <code className="bg-stone-200 px-1 py-0.5 rounded">Access-Control-Allow-Origin: *</code> combined with <code className="bg-stone-200 px-1 py-0.5 rounded">Access-Control-Allow-Credentials: true</code>.
                  </p>
                  <p className="text-stone-600">
                    <strong>2. Blind Origin Reflection:</strong> Naive servers take the incoming <code className="bg-stone-200 px-1 py-0.5 rounded">Origin</code> header from the request and dynamically echo it back in <code className="bg-stone-200 px-1 py-0.5 rounded">Access-Control-Allow-Origin</code>. This effectively grants arbitrary external attacker websites complete access to authenticated API data!
                  </p>
                </div>
              </div>
            </section>

            {/* LESSON 5 */}
            <section id="lesson-5" className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Lesson 5
                </span>
                <span className="text-xs font-mono text-stone-400">Web Vulnerabilities</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Major Web Vulnerabilities: XSS, CSRF, and Clickjacking
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <div className="grid sm:grid-cols-3 gap-3 my-4">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <div className="font-mono text-xs font-bold text-red-600 mb-1">Cross-Site Scripting (XSS)</div>
                    <div className="text-xs text-stone-600">
                      Injected malicious JavaScript executes in the victim's browser context. Can perform actions as the user, manipulate the DOM, or steal credentials.
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <div className="font-mono text-xs font-bold text-orange-600 mb-1">Cross-Site Request Forgery (CSRF)</div>
                    <div className="text-xs text-stone-600">
                      Trick an authenticated browser into submitting unwanted requests by taking advantage of automatic cookie inclusion across sites.
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <div className="font-mono text-xs font-bold text-purple-600 mb-1">Clickjacking (UI Redress)</div>
                    <div className="text-xs text-stone-600">
                      Deceive a user into clicking transparent iframe elements to trigger unintended actions (e.g., "Transfer Funds" hidden beneath a game button).
                    </div>
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
                <span className="text-xs font-mono text-stone-400">Headers & Caching</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Browser Security Headers, HTTP Caching, and Defense in Depth
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <p>
                  HTTP security response headers communicate platform boundaries to the browser.
                </p>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 font-mono text-xs space-y-2">
                  <div className="font-bold text-stone-900">THE CANONICAL SECURITY HEADERS SUITE:</div>
                  <div className="space-y-1 text-stone-700">
                    <div><span className="text-orange-600 font-bold">Content-Security-Policy:</span> default-src 'self'; object-src 'none'; frame-ancestors 'none';</div>
                    <div><span className="text-orange-600 font-bold">Strict-Transport-Security:</span> max-age=31536000; includeSubDomains; preload</div>
                    <div><span className="text-orange-600 font-bold">X-Content-Type-Options:</span> nosniff</div>
                    <div><span className="text-orange-600 font-bold">Referrer-Policy:</span> strict-origin-when-cross-origin</div>
                    <div><span className="text-orange-600 font-bold">Permissions-Policy:</span> camera=(), microphone=(), geolocation=()</div>
                    <div><span className="text-orange-600 font-bold">Cache-Control:</span> no-store, max-age=0 (For authenticated responses)</div>
                  </div>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-100/70 p-4 text-xs text-stone-700 leading-relaxed">
                  <strong>The Caching Hazard:</strong> If an authenticated API endpoint returns personal records without <code className="bg-white px-1 py-0.5 rounded font-bold text-stone-900">Cache-Control: no-store</code>, a shared CDN proxy or public computer browser cache may cache the sensitive HTML/JSON and serve it to subsequent unrelated users!
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
                { id: "lab1-http", label: "Lab 1: HTTP Inspector", icon: Globe },
                { id: "lab2-cookie", label: "Lab 2: Cookie Auditor", icon: Lock },
                { id: "lab3-session", label: "Lab 3: Session Lifecycle", icon: Clock },
                { id: "lab4-cors", label: "Lab 4: SOP & CORS", icon: Compass },
                { id: "lab5-headers", label: "Lab 5: Headers & CSP", icon: ShieldCheck },
                { id: "lab6-vulns", label: "Lab 6: Vulnerability Matrix", icon: AlertTriangle },
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

            {/* LAB 1: HTTP INSPECTOR */}
            {activeLabTab === "lab1-http" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase mb-1">
                    <Globe className="w-4 h-4" />
                    Interactive Lab 1 · HTTP Request and Response Inspector
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    Browser DevTools Network Protocol Analyzer
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Examine methods, headers, status codes, and authorization boundaries across different web endpoints.
                  </p>
                </div>

                <div className="flex items-center gap-2 overflow-x-auto pb-2">
                  {[
                    { id: "profile", label: "GET /api/v1/profile (200 OK)" },
                    { id: "enroll", label: "POST /api/v1/courses/enroll (201 Created)" },
                    { id: "admin", label: "GET /api/v1/admin/logs (403 Forbidden)" },
                    { id: "login", label: "POST /api/v1/login (302 Redirect)" },
                  ].map((ep) => (
                    <button
                      key={ep.id}
                      onClick={() => setHttpEndpoint(ep.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer whitespace-nowrap ${
                        httpEndpoint === ep.id
                          ? "bg-stone-900 text-white"
                          : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                      }`}
                    >
                      {ep.label}
                    </button>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {/* Request Frame */}
                  <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs space-y-2">
                    <div className="text-orange-400 font-bold border-b border-stone-800 pb-1">
                      CLIENT REQUEST HEADERS:
                    </div>
                    {httpEndpoint === "profile" && (
                      <pre className="text-stone-300 leading-relaxed overflow-x-auto">
{`GET /api/v1/profile HTTP/1.1
Host: app.prepspaces.com
User-Agent: Mozilla/5.0 (Macintosh; Intel...)
Accept: application/json
Cookie: __Host-SessionID=s%3A89f012ba4...
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: cors`}
                      </pre>
                    )}
                    {httpEndpoint === "enroll" && (
                      <pre className="text-stone-300 leading-relaxed overflow-x-auto">
{`POST /api/v1/courses/enroll HTTP/1.1
Host: app.prepspaces.com
Content-Type: application/json
X-CSRF-Token: 4a91b82c7f04...
Cookie: __Host-SessionID=s%3A89f012ba4...

{"courseId": "cyber-101", "role": "learner"}`}
                      </pre>
                    )}
                    {httpEndpoint === "admin" && (
                      <pre className="text-stone-300 leading-relaxed overflow-x-auto">
{`GET /api/v1/admin/logs HTTP/1.1
Host: app.prepspaces.com
Cookie: __Host-SessionID=s%3A89f012ba4... (Learner Role)`}
                      </pre>
                    )}
                    {httpEndpoint === "login" && (
                      <pre className="text-stone-300 leading-relaxed overflow-x-auto">
{`POST /api/v1/login HTTP/1.1
Host: app.prepspaces.com
Content-Type: application/x-www-form-urlencoded

username=samarth&password=••••••••••••`}
                      </pre>
                    )}
                  </div>

                  {/* Response Frame */}
                  <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs space-y-2">
                    <div className="text-emerald-400 font-bold border-b border-stone-800 pb-1">
                      SERVER RESPONSE:
                    </div>
                    {httpEndpoint === "profile" && (
                      <pre className="text-stone-300 leading-relaxed overflow-x-auto">
{`HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Cache-Control: no-store, max-age=0
Strict-Transport-Security: max-age=31536000
Content-Security-Policy: default-src 'self'

{"id": 1042, "name": "Samarth", "tier": "Pro"}`}
                      </pre>
                    )}
                    {httpEndpoint === "enroll" && (
                      <pre className="text-stone-300 leading-relaxed overflow-x-auto">
{`HTTP/1.1 201 Created
Content-Type: application/json
Location: /courses/cyber-101

{"status": "enrolled", "enrollmentId": "ENR-8819"}`}
                      </pre>
                    )}
                    {httpEndpoint === "admin" && (
                      <pre className="text-red-400 leading-relaxed overflow-x-auto">
{`HTTP/1.1 403 Forbidden
Content-Type: application/json

{"error": "Forbidden", "message": "Admin privileges required."}`}
                      </pre>
                    )}
                    {httpEndpoint === "login" && (
                      <pre className="text-blue-300 leading-relaxed overflow-x-auto">
{`HTTP/1.1 302 Found
Location: /dashboard
Set-Cookie: __Host-SessionID=s%3A99b82c7104f...; Path=/; Secure; HttpOnly; SameSite=Lax`}
                      </pre>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* LAB 2: COOKIE AUDITOR */}
            {activeLabTab === "lab2-cookie" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase mb-1">
                    <Lock className="w-4 h-4" />
                    Interactive Lab 2 · Session Cookie Security & Scope Auditor
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    Cookie Attribute & Prefix Compliance Evaluator
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Configure cookie flags and observe automated security compliance warnings in real time.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Configuration Controls */}
                  <div className="space-y-4 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <h4 className="font-bold text-stone-800 text-xs uppercase font-mono">Cookie Attribute Settings:</h4>

                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-xs font-medium cursor-pointer">
                        <input
                          type="checkbox"
                          checked={cookieSecure}
                          onChange={(e) => setCookieSecure(e.target.checked)}
                          className="rounded text-orange-600 focus:ring-orange-500"
                        />
                        <span><strong className="text-stone-900">Secure Flag</strong> (Restrict to HTTPS only)</span>
                      </label>

                      <label className="flex items-center gap-2 text-xs font-medium cursor-pointer">
                        <input
                          type="checkbox"
                          checked={cookieHttpOnly}
                          onChange={(e) => setCookieHttpOnly(e.target.checked)}
                          className="rounded text-orange-600 focus:ring-orange-500"
                        />
                        <span><strong className="text-stone-900">HttpOnly Flag</strong> (Block JavaScript access)</span>
                      </label>

                      <label className="flex items-center gap-2 text-xs font-medium cursor-pointer">
                        <input
                          type="checkbox"
                          checked={cookieHostPrefix}
                          onChange={(e) => setCookieHostPrefix(e.target.checked)}
                          className="rounded text-orange-600 focus:ring-orange-500"
                        />
                        <span><strong className="text-stone-900">__Host- Prefix</strong> (Host-only cookie constraint)</span>
                      </label>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-stone-800">SameSite Policy:</label>
                      <div className="grid grid-cols-3 gap-2">
                        {["Strict", "Lax", "None"].map((val) => (
                          <button
                            key={val}
                            onClick={() => setCookieSameSite(val)}
                            className={`p-2 rounded-xl text-xs font-bold border transition cursor-pointer ${
                              cookieSameSite === val
                                ? "bg-stone-900 text-white border-stone-900"
                                : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                            }`}
                          >
                            SameSite={val}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-stone-800">Domain Scope:</label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setCookieDomain("host-only")}
                          className={`p-2 rounded-xl text-xs font-bold border transition cursor-pointer ${
                            cookieDomain === "host-only"
                              ? "bg-stone-900 text-white border-stone-900"
                              : "bg-white text-stone-700 border-stone-200"
                          }`}
                        >
                          Host-Only (No Domain attr)
                        </button>
                        <button
                          onClick={() => setCookieDomain("wildcard")}
                          className={`p-2 rounded-xl text-xs font-bold border transition cursor-pointer ${
                            cookieDomain === "wildcard"
                              ? "bg-stone-900 text-white border-stone-900"
                              : "bg-white text-stone-700 border-stone-200"
                          }`}
                        >
                          Domain=.prepspaces.com
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Header Output & Security Evaluation */}
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs">
                      <div className="text-stone-400 mb-1 text-[11px]">GENERATED SET-COOKIE HEADER:</div>
                      <div className="text-emerald-400 break-all leading-relaxed">
                        Set-Cookie: {cookieHostPrefix ? "__Host-" : ""}SessionID=s%3A7f9a1b2c; Path=/;{" "}
                        {cookieSecure && "Secure; "}
                        {cookieHttpOnly && "HttpOnly; "}
                        SameSite={cookieSameSite};{" "}
                        {cookieDomain === "wildcard" && "Domain=.prepspaces.com;"}
                      </div>
                    </div>

                    {/* Live Warnings */}
                    <div className="space-y-2">
                      {!cookieHttpOnly && (
                        <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-900 text-xs flex items-center gap-2">
                          <AlertOctagon className="w-4 h-4 text-red-600 shrink-0" />
                          <span><strong>CRITICAL:</strong> Missing HttpOnly! Any XSS allows instant session theft via document.cookie.</span>
                        </div>
                      )}
                      {!cookieSecure && (
                        <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-900 text-xs flex items-center gap-2">
                          <AlertOctagon className="w-4 h-4 text-red-600 shrink-0" />
                          <span><strong>CRITICAL:</strong> Missing Secure! Cookie can be leaked over plaintext HTTP.</span>
                        </div>
                      )}
                      {cookieSameSite === "None" && !cookieSecure && (
                        <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-900 text-xs flex items-center gap-2">
                          <AlertOctagon className="w-4 h-4 text-red-600 shrink-0" />
                          <span><strong>BROWSER ERROR:</strong> SameSite=None without Secure is rejected by modern browsers.</span>
                        </div>
                      )}
                      {cookieHostPrefix && cookieDomain === "wildcard" && (
                        <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-900 text-xs flex items-center gap-2">
                          <AlertOctagon className="w-4 h-4 text-red-600 shrink-0" />
                          <span><strong>SPEC VIOLATION:</strong> The __Host- prefix strictly forbids the Domain attribute!</span>
                        </div>
                      )}
                      {cookieSecure && cookieHttpOnly && cookieSameSite !== "None" && !(cookieHostPrefix && cookieDomain === "wildcard") && (
                        <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span><strong>HARDENED:</strong> Cookie configuration satisfies defense-in-depth security best practices.</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 3: SESSION LIFECYCLE */}
            {activeLabTab === "lab3-session" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase mb-1">
                    <Clock className="w-4 h-4" />
                    Interactive Lab 3 · Session Lifecycle & Fixation Defense
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    Authentication State & Invalidation Simulator
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Simulate login credential renewal, idle timeouts, and verify server-side session invalidation upon logout.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-3">
                    <div className="font-mono text-xs">
                      Current Stage: <span className="font-bold text-orange-600 uppercase">{sessionStage}</span>
                    </div>
                    <div className="font-mono text-xs">
                      Active Session ID: <code className="bg-stone-900 text-emerald-400 px-2 py-1 rounded">{currentSessionId}</code>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-stone-800">Security Policies:</label>
                      <label className="flex items-center gap-2 text-xs cursor-pointer">
                        <input
                          type="checkbox"
                          checked={sessionRotateOnLogin}
                          onChange={(e) => setSessionRotateOnLogin(e.target.checked)}
                          className="rounded text-orange-600"
                        />
                        <span>Regenerate Session ID on Authentication (Fixation Defense)</span>
                      </label>
                      <label className="flex items-center gap-2 text-xs cursor-pointer">
                        <input
                          type="checkbox"
                          checked={serverInvalidateOnLogout}
                          onChange={(e) => setServerInvalidateOnLogout(e.target.checked)}
                          className="rounded text-orange-600"
                        />
                        <span>Invalidate Server-Side Store on Logout</span>
                      </label>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        onClick={handleLoginSimulation}
                        className="px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-stone-800 transition cursor-pointer"
                      >
                        Simulate User Login
                      </button>
                      <button
                        onClick={handleLogoutSimulation}
                        className="px-4 py-2 rounded-xl bg-orange-600 text-white text-xs font-bold hover:bg-orange-700 transition cursor-pointer"
                      >
                        Simulate Logout
                      </button>
                      <button
                        onClick={() => {
                          setSessionStage("anonymous");
                          setCurrentSessionId("anon_7f9a1b2c4d8e");
                        }}
                        className="px-4 py-2 rounded-xl border border-stone-300 text-stone-700 text-xs font-bold hover:bg-stone-100 transition cursor-pointer"
                      >
                        Reset to Anonymous
                      </button>
                    </div>
                  </div>

                  {sessionStage === "authenticated" && !sessionRotateOnLogin && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-950 text-xs">
                      <strong>SESSION FIXATION DETECTED:</strong> The session ID remained <code className="font-bold">anon_7f9a1b2c4d8e</code> after login! An attacker who fixed this ID prior to authentication now has full access to the user's account.
                    </div>
                  )}

                  {sessionStage === "logged_out" && !serverInvalidateOnLogout && (
                    <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs">
                      <strong>INSECURE LOGOUT DETECTED:</strong> The client cookie was removed, but the session record in Redis was NOT invalidated! If an attacker previously intercepted this session token, they can still access the user's private data.
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* LAB 4: SOP & CORS */}
            {activeLabTab === "lab4-cors" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase mb-1">
                    <Compass className="w-4 h-4" />
                    Interactive Lab 4 · Same-Origin Policy & CORS Analyzer
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    Cross-Origin Isolation & Preflight Protocol Explorer
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Simulate fetch requests between distinct origins and observe preflight OPTIONS behaviors.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4 font-mono text-xs">
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                      <span className="text-stone-500 block text-[11px]">Requesting Client Origin:</span>
                      <span className="font-bold text-stone-900">{originA}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                      <span className="text-stone-500 block text-[11px]">Destination API Server:</span>
                      <select
                        value={targetOrigin}
                        onChange={(e) => setTargetOrigin(e.target.value)}
                        className="font-bold text-stone-900 bg-transparent focus:outline-none w-full"
                      >
                        <option value="https://api.prepspaces.com:443">https://api.prepspaces.com:443 (Cross-Origin)</option>
                        <option value="https://app.prepspaces.com:443">https://app.prepspaces.com:443 (Same-Origin)</option>
                        <option value="http://app.prepspaces.com:80">http://app.prepspaces.com:80 (Cross-Scheme)</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs space-y-2">
                    <div className="text-orange-400 font-bold border-b border-stone-800 pb-1">
                      CORS PREFLIGHT (OPTIONS) EXCHANGE:
                    </div>
                    <pre className="text-stone-300 overflow-x-auto leading-relaxed">
{`OPTIONS /api/v1/data HTTP/1.1
Origin: ${originA}
Access-Control-Request-Method: PUT
Access-Control-Request-Headers: X-Custom-Token, Content-Type

HTTP/1.1 204 No Content
Access-Control-Allow-Origin: ${corsScenario === "valid" ? originA : "*"}
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: X-Custom-Token, Content-Type
Access-Control-Allow-Credentials: true`}
                    </pre>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-100 border border-stone-200 text-xs text-stone-700">
                    <strong>Key Architectural Principle:</strong> CORS does NOT prevent the server from receiving and processing cross-origin requests. It merely instructs the browser whether the JavaScript runtime is permitted to read the response. Always enforce server-side authentication and CSRF protections!
                  </div>
                </div>
              </div>
            )}

            {/* LAB 5: SECURITY HEADERS & CSP */}
            {activeLabTab === "lab5-headers" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    Interactive Lab 5 · Security Headers & Attack Defense Testing
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    Content Security Policy (CSP) & Defense-in-Depth Auditor
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Toggle HTTP security response headers and test if your web application repels simulated attacks.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Header Toggles */}
                  <div className="space-y-3 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <h4 className="font-bold text-stone-800 text-xs uppercase font-mono">Active Response Headers:</h4>

                    <label className="flex items-center gap-2 text-xs cursor-pointer">
                      <input
                        type="checkbox"
                        checked={cspEnabled}
                        onChange={(e) => setCspEnabled(e.target.checked)}
                        className="rounded text-orange-600"
                      />
                      <span><strong>Content-Security-Policy</strong> (default-src 'self')</span>
                    </label>

                    <label className="flex items-center gap-2 text-xs cursor-pointer">
                      <input
                        type="checkbox"
                        checked={frameAncestorsNone}
                        onChange={(e) => setFrameAncestorsNone(e.target.checked)}
                        className="rounded text-orange-600"
                      />
                      <span><strong>CSP: frame-ancestors 'none'</strong> (Clickjacking defense)</span>
                    </label>

                    <label className="flex items-center gap-2 text-xs cursor-pointer">
                      <input
                        type="checkbox"
                        checked={cacheNoStore}
                        onChange={(e) => setCacheNoStore(e.target.checked)}
                        className="rounded text-orange-600"
                      />
                      <span><strong>Cache-Control: no-store</strong> (Prevent proxy caching)</span>
                    </label>

                    <label className="flex items-center gap-2 text-xs cursor-pointer">
                      <input
                        type="checkbox"
                        checked={hstsEnabled}
                        onChange={(e) => setHstsEnabled(e.target.checked)}
                        className="rounded text-orange-600"
                      />
                      <span><strong>Strict-Transport-Security</strong> (Force HTTPS)</span>
                    </label>
                  </div>

                  {/* Simulated Attack Tests */}
                  <div className="space-y-3">
                    <h4 className="font-bold text-stone-800 text-xs uppercase font-mono">Execute Attack Scenarios:</h4>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => setActiveTestAttack("xss")}
                        className={`p-2.5 rounded-xl text-xs font-bold border transition cursor-pointer ${
                          activeTestAttack === "xss" ? "bg-stone-900 text-white" : "bg-white text-stone-700 border-stone-200"
                        }`}
                      >
                        1. Inject Inline Script
                      </button>
                      <button
                        onClick={() => setActiveTestAttack("clickjack")}
                        className={`p-2.5 rounded-xl text-xs font-bold border transition cursor-pointer ${
                          activeTestAttack === "clickjack" ? "bg-stone-900 text-white" : "bg-white text-stone-700 border-stone-200"
                        }`}
                      >
                        2. Iframe Embed Attack
                      </button>
                      <button
                        onClick={() => setActiveTestAttack("cache_leak")}
                        className={`p-2.5 rounded-xl text-xs font-bold border transition cursor-pointer ${
                          activeTestAttack === "cache_leak" ? "bg-stone-900 text-white" : "bg-white text-stone-700 border-stone-200"
                        }`}
                      >
                        3. Proxy Cache Leak
                      </button>
                    </div>

                    {/* Result */}
                    {activeTestAttack === "xss" && (
                      <div className={`p-3 rounded-xl border text-xs leading-relaxed ${cspEnabled ? "bg-emerald-50 border-emerald-300 text-emerald-950" : "bg-red-50 border-red-300 text-red-950"}`}>
                        {cspEnabled
                          ? "DEFENSE ACTIVE: Browser blocked inline script execution due to Content-Security-Policy default-src 'self' restriction!"
                          : "ATTACK SUCCEEDED: Malicious inline script executed in browser context! Cookies and DOM data exposed."}
                      </div>
                    )}

                    {activeTestAttack === "clickjack" && (
                      <div className={`p-3 rounded-xl border text-xs leading-relaxed ${frameAncestorsNone ? "bg-emerald-50 border-emerald-300 text-emerald-950" : "bg-red-50 border-red-300 text-red-950"}`}>
                        {frameAncestorsNone
                          ? "DEFENSE ACTIVE: Browser refused to display page in an iframe because frame-ancestors is set to 'none'!"
                          : "ATTACK SUCCEEDED: Page framed transparently by attacker site. Clickjacking attack succeeded."}
                      </div>
                    )}

                    {activeTestAttack === "cache_leak" && (
                      <div className={`p-3 rounded-xl border text-xs leading-relaxed ${cacheNoStore ? "bg-emerald-50 border-emerald-300 text-emerald-950" : "bg-red-50 border-red-300 text-red-950"}`}>
                        {cacheNoStore
                          ? "DEFENSE ACTIVE: Cache-Control: no-store instructed all intermediate CDN caches to discard personalized records."
                          : "ATTACK SUCCEEDED: Sensitive learner records stored in shared CDN cache. Other users retrieved cached data."}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* LAB 6: VULNERABILITY MATRIX */}
            {activeLabTab === "lab6-vulns" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase mb-1">
                    <AlertTriangle className="w-4 h-4" />
                    Interactive Lab 6 · Web Application Security Review & Remediation
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    Vulnerability Matrix & Remediation Blueprint
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Review synthetic vulnerability scenarios and inspect industry-standard remediation implementations.
                  </p>
                </div>

                <div className="flex items-center gap-2 overflow-x-auto pb-2">
                  {[
                    { id: "xss", label: "Stored XSS in Bio" },
                    { id: "csrf", label: "CSRF on Password Change" },
                    { id: "open_redirect", label: "Open Redirect via ?next=" },
                  ].map((vuln) => (
                    <button
                      key={vuln.id}
                      onClick={() => setActiveVulnId(vuln.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer whitespace-nowrap ${
                        activeVulnId === vuln.id ? "bg-stone-900 text-white" : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                      }`}
                    >
                      {vuln.label}
                    </button>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3 font-mono text-xs">
                  {activeVulnId === "xss" && (
                    <div className="space-y-2">
                      <div className="text-red-600 font-bold">VULNERABLE CODE PATTERN:</div>
                      <pre className="bg-stone-900 text-stone-200 p-3 rounded-xl overflow-x-auto">
{`// Insecure React dangerouslySetInnerHTML
<div dangerouslySetInnerHTML={{ __html: userProfile.biography }} />`}
                      </pre>
                      <div className="text-emerald-700 font-bold">SECURE REMEDIATION:</div>
                      <pre className="bg-stone-900 text-emerald-400 p-3 rounded-xl overflow-x-auto">
{`// 1. Default safe JSX text escaping
<div>{userProfile.biography}</div>

// 2. Or sanitize rich text with DOMPurify
import DOMPurify from 'dompurify';
<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(userProfile.biography) }} />`}
                      </pre>
                    </div>
                  )}

                  {activeVulnId === "csrf" && (
                    <div className="space-y-2">
                      <div className="text-red-600 font-bold">VULNERABLE CODE PATTERN:</div>
                      <pre className="bg-stone-900 text-stone-200 p-3 rounded-xl overflow-x-auto">
{`// Express endpoint without CSRF protection
app.post('/api/change-password', authenticateUser, (req, res) => {
  updatePassword(req.user.id, req.body.newPassword);
});`}
                      </pre>
                      <div className="text-emerald-700 font-bold">SECURE REMEDIATION:</div>
                      <pre className="bg-stone-900 text-emerald-400 p-3 rounded-xl overflow-x-auto">
{`// Enforce Double-Submit Cookie or Synchronizer CSRF Token + SameSite=Strict
app.post('/api/change-password', authenticateUser, verifyCsrfToken, (req, res) => {
  // Requires matching X-CSRF-Token header
  updatePassword(req.user.id, req.body.newPassword);
});`}
                      </pre>
                    </div>
                  )}

                  {activeVulnId === "open_redirect" && (
                    <div className="space-y-2">
                      <div className="text-red-600 font-bold">VULNERABLE CODE PATTERN:</div>
                      <pre className="bg-stone-900 text-stone-200 p-3 rounded-xl overflow-x-auto">
{`// Blind redirection to client-supplied parameter
const nextUrl = req.query.next;
res.redirect(nextUrl); // Attacker supplies: ?next=https://phishing-prepspaces.com`}
                      </pre>
                      <div className="text-emerald-700 font-bold">SECURE REMEDIATION:</div>
                      <pre className="bg-stone-900 text-emerald-400 p-3 rounded-xl overflow-x-auto">
{`// Strict path validation & domain allowlisting
const nextUrl = req.query.next;
if (nextUrl.startsWith('/') && !nextUrl.startsWith('//')) {
  res.redirect(nextUrl);
} else {
  res.redirect('/dashboard');
}`}
                      </pre>
                    </div>
                  )}
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
                    Verify all web architecture and browser defense deliverables prior to capstone submission.
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
                  { key: "archBoundaries", label: "Web architecture and trust boundaries documented (Lab 1)" },
                  { key: "httpEvidence", label: "HTTP request and response evidence recorded (Lab 1)" },
                  { key: "cookieAudited", label: "Cookie attributes and scope reviewed (Lab 2)" },
                  { key: "sessionLifecycle", label: "Session rotation, expiration, and logout tested (Lab 3)" },
                  { key: "sopCorsDocumented", label: "Same-origin and CORS behavior documented (Lab 4)" },
                  { key: "headersReviewed", label: "Security headers and caching policy reviewed (Lab 5)" },
                  { key: "authChecksSynthetic", label: "Authorization checks tested with synthetic accounts (Lab 6)" },
                  { key: "retestPlanRecorded", label: "Findings and retest evidence recorded (Lab 6)" },
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
                PrepSpaces Platform: Web Application Architecture Blueprint
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                Review how the PrepSpaces platform isolates user dashboards, interview report generators, and administrative tools behind hardened session boundaries and browser security controls.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs space-y-3">
              <div className="text-orange-400 font-bold">PREPSPACES DEFENSE MATRIX:</div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-[11px]">
                  <thead>
                    <tr className="border-b border-stone-800 text-stone-400">
                      <th className="p-2">Component</th>
                      <th className="p-2">Defense Mechanism</th>
                      <th className="p-2">Policy Configuration</th>
                      <th className="p-2">Enforcement Point</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-800 text-stone-300">
                    <tr>
                      <td className="p-2 font-bold text-white">Session Management</td>
                      <td className="p-2">__Host- Cookie + Redis Cache</td>
                      <td className="p-2">Secure, HttpOnly, SameSite=Lax, Path=/</td>
                      <td className="p-2">API Gateway & Backend Session Store</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold text-white">Cross-Origin Access</td>
                      <td className="p-2">Strict CORS Allowlist</td>
                      <td className="p-2">Allowed: https://app.prepspaces.com only</td>
                      <td className="p-2">API Gateway Reverse Proxy</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold text-white">UI Protection</td>
                      <td className="p-2">Clickjacking Defense</td>
                      <td className="p-2">Content-Security-Policy: frame-ancestors 'none'</td>
                      <td className="p-2">Browser Rendering Engine</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold text-white">State Changes</td>
                      <td className="p-2">Anti-CSRF Tokens</td>
                      <td className="p-2">Synchronizer token on all POST/PUT/DELETE requests</td>
                      <td className="p-2">Backend Application Controller</td>
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
                  Module 13 Knowledge Assessment
                </h3>
                <p className="text-xs text-stone-500">
                  6 questions testing HTTP sessions, cookies, SOP, CORS, and web application defenses.
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
                Capstone Project: Design and Validate a Secure Web Application Architecture
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                Design a secure web application architecture for PrepSpaces with protected sessions, hardened cookie configurations, restricted cross-origin access, and browser security defenses across Parts A through G.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-stone-900 text-sm">Required Capstone Deliverables (Parts A through G):</h3>
              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="font-bold text-stone-900 mb-1">Part A: Architecture & Trust Boundaries</div>
                  <p className="text-stone-600">Component mapping (Browser, API Gateway, Backend, DB, IdP) with explicit trust assignments.</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="font-bold text-stone-900 mb-1">Part B: HTTP & Session Lifecycle Design</div>
                  <p className="text-stone-600">Session ID entropy, post-login regeneration, absolute/idle timeouts, and atomic server invalidation.</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="font-bold text-stone-900 mb-1">Part C: Cookie & Storage Policy</div>
                  <p className="text-stone-600">__Host- prefix, HttpOnly, Secure, SameSite, and justification for excluding tokens from localStorage.</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="font-bold text-stone-900 mb-1">Part D: Browser-Origin & Request Protections</div>
                  <p className="text-stone-600">CORS policy allowlist, anti-CSRF synchronizer tokens, and defense against clickjacking.</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="font-bold text-stone-900 mb-1">Part E: Security Headers & Caching</div>
                  <p className="text-stone-600">Strict CSP, HSTS with preloading, and Cache-Control: no-store for all authenticated endpoints.</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="font-bold text-stone-900 mb-1">Part F: Validation & Test Cases</div>
                  <p className="text-stone-600">8 documented empirical test cases with expected vs observed outcomes and remediation fixes.</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 sm:col-span-2">
                  <div className="font-bold text-stone-900 mb-1">Part G: Final Security Assessment Report</div>
                  <p className="text-stone-600">Executive summary, vulnerability severity ratings, remediation roadmap, and residual risk sign-off.</p>
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
                      <td className="p-2 font-bold text-stone-900">Architecture & Trust Boundaries</td>
                      <td className="p-2 font-mono font-bold text-orange-600">15%</td>
                      <td className="p-2">Clear trust boundary diagrams and component responsibility assignments.</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold text-stone-900">HTTP & Session Lifecycle Design</td>
                      <td className="p-2 font-mono font-bold text-orange-600">20%</td>
                      <td className="p-2">Sound session generation, post-auth regeneration, idle timeouts, and server invalidation.</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold text-stone-900">Cookie Security & Browser Storage</td>
                      <td className="p-2 font-mono font-bold text-orange-600">15%</td>
                      <td className="p-2">Correct use of __Host- prefix, HttpOnly, Secure, SameSite, and token storage rationale.</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold text-stone-900">CORS, CSRF, XSS & Authorization</td>
                      <td className="p-2 font-mono font-bold text-orange-600">20%</td>
                      <td className="p-2">Defensible CORS policy, anti-CSRF tokens, output encoding, and server-side RBAC.</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold text-stone-900">Browser Security Headers & Caching</td>
                      <td className="p-2 font-mono font-bold text-orange-600">10%</td>
                      <td className="p-2">Hardened CSP, HSTS, frame-ancestors, and Cache-Control: no-store for private data.</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold text-stone-900">Testing & Verification Evidence</td>
                      <td className="p-2 font-mono font-bold text-orange-600">15%</td>
                      <td className="p-2">At least 8 empirical test cases with clear screenshots or log verification.</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold text-stone-900">Reporting & Professional Judgment</td>
                      <td className="p-2 font-mono font-bold text-orange-600">5%</td>
                      <td className="p-2">Actionable remediation roadmap distinguishing verified fixes from proposed controls.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-3 rounded-xl bg-stone-100 text-stone-700 text-xs">
                <strong>Passing Threshold:</strong> 70% or higher, with correct session management concepts, defensible authorization model, and validated cookie configurations.
              </div>
            </div>

            {/* Official References */}
            <div className="space-y-3 pt-4 border-t border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm">Official Standards & References:</h3>
              <div className="grid sm:grid-cols-2 gap-2 text-xs">
                {[
                  { title: "IETF RFC 9110 — HTTP Semantics", link: "https://www.rfc-editor.org/rfc/rfc9110.html" },
                  { title: "OWASP — Session Management Cheat Sheet", link: "https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html" },
                  { title: "OWASP — Cross-Site Request Forgery (CSRF) Prevention", link: "https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html" },
                  { title: "MDN — Same-Origin Policy & CORS Guide", link: "https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Same-origin_policy" },
                  { title: "OWASP — Cross-Site Scripting (XSS) Prevention", link: "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html" },
                  { title: "MDN — Secure Cookie Configuration Guide", link: "https://developer.mozilla.org/en-US/docs/Web/Security/Practical_implementation_guides/Cookies" },
                  { title: "MDN — HTTP Caching Best Practices", link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching" },
                  { title: "OWASP — Clickjacking Defense Cheat Sheet", link: "https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html" },
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
            onClick={() => navigate("/learning/cybersecurity/cryptography")}
            className="flex items-center gap-2 rounded-2xl border border-stone-200 bg-white px-5 py-3 text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#f97316] transition shadow-xs cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous: Module 12 (Cryptography, PKI & TLS)</span>
          </button>

          <button
            onClick={() => navigate("/learning/cybersecurity/burp-suite")}
            className="flex items-center gap-2 rounded-2xl bg-[#ea580c] px-5 py-3 text-xs font-bold text-white hover:bg-orange-600 transition shadow-xs cursor-pointer"
          >
            <span>Next: Module 14 (Web PenTesting & Burp Suite)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
