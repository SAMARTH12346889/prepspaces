import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Layers,
  Terminal,
  Shield,
  Server,
  Network,
  Award,
  AlertTriangle,
  Sparkles,
  Workflow,
  FileCode,
  ShieldCheck,
  RotateCcw,
  Router as RouterIcon,
  Copy,
  Check,
  Search,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Cpu,
  Monitor,
  Eye,
  Radio,
  FileText,
  Key,
  Globe,
  Lock,
  Zap,
  Play,
  Sliders,
  Share2,
  Split,
  Database,
  ArrowDownRight,
  Maximize2,
  Minimize2,
  ListChecks,
  RefreshCw,
  GitFork,
  Activity,
  Compass,
  ArrowUpRight,
  Gauge,
  SlidersHorizontal,
  Clock,
  Wifi,
  Smartphone,
  Flame,
  Volume2,
  LockKeyhole,
  FileSearch,
  FileCheck,
  Send,
  Boxes,
  KeyRound,
  FileBadge2,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* COMPUTER NETWORKS & INTERNET ENGINEERING: MODULE 12                        */
/* APPLICATION PROTOCOLS, WEB NETWORKING & SECURITY                           */
/* -------------------------------------------------------------------------- */

export default function NetworkAppLayer() {
  const navigate = useNavigate();

  // Active top-level tabs
  const [activeTab, setActiveTab] = useState("theory"); // theory | http-sim | tls-handshake-sim | cert-sim | proxy-sim | cors-ws-sim | cli | quiz | lab-report
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // Theory sub-section tracking
  const [activeSection, setActiveSection] = useSyncedTopic("12.1");

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 1: HTTP REQUEST/RESPONSE & CACHING SANDBOX                       */
  /* -------------------------------------------------------------------------- */
  const [httpMethod, setHttpMethod] = useState("GET");
  const [requestPath, setRequestPath] = useState("/api/courses/networking");
  const [ifNoneMatchHeader, setIfNoneMatchHeader] = useState("");
  const [clientCacheControl, setClientCacheControl] = useState("max-age=300");

  const simulatedResponse = useMemo(() => {
    if (httpMethod === "GET") {
      if (ifNoneMatchHeader === '"etag-net-v1"') {
        return {
          status: "304 Not Modified",
          statusCode: 304,
          headers: {
            "ETag": '"etag-net-v1"',
            "Cache-Control": "max-age=300",
            "Date": new Date().toUTCString(),
          },
          body: "[EMPTY BODY - REUSE LOCAL BROWSER CACHE]",
          note: "Conditional 304 response! Saved 42 KB bandwidth because client ETag matched origin representation.",
        };
      }
      return {
        status: "200 OK",
        statusCode: 200,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "ETag": '"etag-net-v1"',
          "Cache-Control": clientCacheControl,
          "Content-Length": "142",
        },
        body: JSON.stringify(
          { id: 12, title: "Computer Networks & Internet Engineering", level: "Advanced", enrolled: true },
          null,
          2
        ),
        note: "Full 200 response returned with entity tag for client-side caching.",
      };
    } else if (httpMethod === "POST") {
      return {
        status: "201 Created",
        statusCode: 201,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Location": "/api/enrollments/8921",
          "Cache-Control": "no-store",
        },
        body: JSON.stringify({ enrollmentId: 8921, status: "confirmed", timestamp: new Date().toISOString() }, null, 2),
        note: "Resource created. Responses to POST should generally not be cached unless explicitly indicated.",
      };
    } else if (httpMethod === "DELETE") {
      return {
        status: "204 No Content",
        statusCode: 204,
        headers: {
          "Date": new Date().toUTCString(),
        },
        body: "[EMPTY BODY - SUCCESSFUL DELETION]",
        note: "Idempotent resource removal completed successfully.",
      };
    }
    return {
      status: "200 OK",
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: "{}",
      note: "Standard execution.",
    };
  }, [httpMethod, requestPath, ifNoneMatchHeader, clientCacheControl]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 2: TLS 1.3 HANDSHAKE TIMELINE & KEY DERIVATION                   */
  /* -------------------------------------------------------------------------- */
  const [selectedCipher, setSelectedCipher] = useState("TLS_AES_128_GCM_SHA256");

  const tlsHandshakeLadder = [
    {
      flight: "Flight 1 (Client &rarr; Server)",
      msg: "ClientHello",
      crypto: "Curve25519 Ephemeral Key Share + SNI: prepspaces.com + Cipher: " + selectedCipher,
      desc: "Client initiates connection in plaintext (or with ECH). Offers client public key share g^x.",
    },
    {
      flight: "Flight 2 (Server &rarr; Client)",
      msg: "ServerHello",
      crypto: "Selected Curve25519 Key Share g^y + Derives Handshake Secret",
      desc: "Both client and server now possess shared secret g^(xy). All subsequent handshake messages are encrypted!",
    },
    {
      flight: "Flight 2 (Server &rarr; Client) [Encrypted]",
      msg: "EncryptedExtensions + Certificate + CertificateVerify + Finished",
      crypto: "ECDSA Signature on Handshake Transcript + Leaf Cert (CN=prepspaces.com)",
      desc: "Server authenticates its identity using X.509 certificate and proves ownership with private key signature.",
    },
    {
      flight: "Flight 3 (Client &rarr; Server) [Encrypted]",
      msg: "Finished + 1-RTT Application Data",
      crypto: "AES-128-GCM Traffic Keys Derivation",
      desc: "Handshake verified! Client transmits encrypted HTTP GET request. Total latency: exactly 1 RTT.",
    },
  ];

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 3: X.509 CERTIFICATE CHAIN & HOSTNAME VALIDATION                 */
  /* -------------------------------------------------------------------------- */
  const [testHostname, setTestHostname] = useState("api.prepspaces.com");
  const [clockSkewOffsetDays, setClockSkewOffsetDays] = useState(0);

  const certValidationResult = useMemo(() => {
    const validSans = ["prepspaces.com", "*.prepspaces.com"];
    const notBefore = new Date("2026-01-01");
    const notAfter = new Date("2026-12-31");
    const simulatedToday = new Date();
    simulatedToday.setDate(simulatedToday.getDate() + clockSkewOffsetDays);

    // 1. Hostname matching check
    const matchesApex = testHostname.toLowerCase() === "prepspaces.com";
    const matchesWildcard =
      testHostname.toLowerCase().endsWith(".prepspaces.com") &&
      testHostname.toLowerCase().split(".").length === 3;
    const hostnameValid = matchesApex || matchesWildcard;

    // 2. Date validity check
    const dateValid = simulatedToday >= notBefore && simulatedToday <= notAfter;

    return {
      hostnameValid,
      dateValid,
      simulatedDate: simulatedToday.toISOString().slice(0, 10),
      isTrusted: hostnameValid && dateValid,
      sans: validSans,
      issuer: "Let's Encrypt E6 Intermediate (Trust Anchor: ISRG Root X1)",
    };
  }, [testHostname, clockSkewOffsetDays]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 4: REVERSE PROXY & LOAD BALANCER ROUTER                         */
  /* -------------------------------------------------------------------------- */
  const [backendHealth, setBackendHealth] = useState({
    web: true,
    api: true,
  });
  const [routeRequestPath, setRouteRequestPath] = useState("/api/v1/auth");

  const proxyRoutingDecision = useMemo(() => {
    const isApi = routeRequestPath.startsWith("/api");
    const targetCluster = isApi ? "API Microservice Cluster (Port 8080)" : "Frontend SSR Cluster (Port 3000)";
    const isTargetHealthy = isApi ? backendHealth.api : backendHealth.web;

    if (!isTargetHealthy) {
      return {
        targetCluster,
        status: "502 Bad Gateway",
        statusCode: 502,
        log: `Nginx connect() failed (111: Connection refused) while connecting to upstream ${isApi ? "10.0.1.5:8080" : "10.0.1.10:3000"}.`,
      };
    }

    return {
      targetCluster,
      status: "200 OK (Routed via Upstream)",
      statusCode: 200,
      log: `Request matched location ${isApi ? "/api/" : "/"} &rarr; Forwarded with X-Forwarded-For: 203.0.113.45 and X-Forwarded-Proto: https.`,
    };
  }, [backendHealth, routeRequestPath]);

  /* -------------------------------------------------------------------------- */
  /* STATEFUL 10-QUESTION COMPREHENSIVE QUIZ                                   */
  /* -------------------------------------------------------------------------- */
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "Which HTTP status code indicates that a reverse proxy or gateway received an invalid or absent response from an upstream backend server?",
      options: [
        "401 Unauthorized",
        "502 Bad Gateway",
        "504 Gateway Timeout",
        "304 Not Modified",
      ],
      correct: 1,
      explanation: "A 502 Bad Gateway means the reverse proxy attempted to connect to the backend application server (e.g. Node.js on port 8080), but the backend crashed, sent an invalid HTTP response, or refused the TCP socket connection.",
    },
    {
      id: 2,
      question: "What is the primary architectural purpose of a TLS server certificate in modern HTTPS?",
      options: [
        "To encrypt every HTTP request body directly with the certificate's public key.",
        "To cryptographically bind a domain identity (hostname) to a public key, allowing clients to verify server identity via a trusted Certificate Authority chain.",
        "To replace TCP flow control with hardware compression.",
        "To assign static IP addresses to mobile smartphones.",
      ],
      correct: 1,
      explanation: "A TLS certificate binds an identity (the domain name in the Subject Alternative Name field) to a public key signed by a trusted CA. Symmetric session keys (AES/ChaCha20) are derived separately via Ephemeral Diffie-Hellman (ECDHE) for actual traffic encryption.",
    },
    {
      id: 3,
      question: "What distinguishes an HTTP Safe method from an HTTP Idempotent method?",
      options: [
        "Safe methods use TLS, while idempotent methods use plaintext.",
        "A safe method (like GET) does not alter server state; an idempotent method (like PUT or DELETE) may alter state, but repeating the request multiple times produces the exact same end state as executing it once.",
        "Safe methods are only executed over WebSockets.",
        "There is no difference; all safe methods are non-idempotent.",
      ],
      correct: 1,
      explanation: "Safe methods (GET, HEAD) are strictly read-only. Idempotent methods (PUT, DELETE) modify resources, but repeating them N times has the exact same side-effect as executing once (e.g., deleting user ID 42 twice leaves user 42 deleted). POST is neither safe nor idempotent by default.",
    },
    {
      id: 4,
      question: "Why should session authentication cookies always include the 'Secure', 'HttpOnly', and 'SameSite' attributes?",
      options: [
        "To compress the cookie size to under 8 bytes.",
        "'Secure' ensures transmission strictly over HTTPS; 'HttpOnly' prevents malicious JavaScript from reading the cookie via XSS; 'SameSite' restricts cross-origin cookie attachment to mitigate CSRF attacks.",
        "To force the client browser to refresh DNS every 60 seconds.",
        "Because cookies without these attributes cannot be parsed by Linux servers.",
      ],
      correct: 1,
      explanation: "These three security flags form the core defense for browser session tokens: `Secure` stops plaintext leak over HTTP, `HttpOnly` blocks `document.cookie` theft in cross-site scripting (XSS), and `SameSite=Lax` or `Strict` prevents cross-site request forgery (CSRF).",
    },
    {
      id: 5,
      question: "How does SFTP (SSH File Transfer Protocol) fundamentally differ from FTPS (FTP over SSL/TLS)?",
      options: [
        "SFTP runs as an encrypted subsystem over an existing SSH connection on TCP port 22; FTPS is legacy FTP wrapped with TLS requiring separate control (port 21) and dynamic data channels.",
        "SFTP requires plaintext UDP, while FTPS uses QUIC.",
        "FTPS is native to Linux, while SFTP is only supported on Windows.",
        "SFTP does not support file encryption.",
      ],
      correct: 0,
      explanation: "SFTP is a packet-level subsystem of SSH running entirely over a single multiplexed TCP port 22 connection. FTPS is the legacy FTP protocol (RFC 959) retrofitted with TLS, which creates complicated firewall traversal issues due to secondary dynamic data ports.",
    },
    {
      id: 6,
      question: "What is Cross-Origin Resource Sharing (CORS) and which entity enforces it?",
      options: [
        "An operating system kernel rule that blocks unencrypted network sockets.",
        "A browser security mechanism that restricts whether client-side JavaScript can read HTTP responses fetched from a different origin (scheme, host, or port).",
        "A server-side firewall rule that blocks curl requests from untrusted IP ranges.",
        "A BGP routing filter applied by upstream transit providers.",
      ],
      correct: 1,
      explanation: "CORS is enforced strictly by web browsers to protect user data from unauthorized cross-origin reads. Server-to-server clients (like `curl` or Python `requests`) completely ignore CORS headers. CORS does not replace server-side API authorization.",
    },
    {
      id: 7,
      question: "How does a WebSocket connection transition from HTTP to a persistent full-duplex socket (RFC 6455)?",
      options: [
        "By closing the TCP connection and opening a raw UDP socket on port 80.",
        "The client issues an HTTP GET with 'Upgrade: websocket' and 'Connection: Upgrade' headers; the server accepts with status code '101 Switching Protocols'.",
        "By sending an ICMP Echo Request containing the WebSocket handshake key.",
        "By establishing a separate BGP peer connection.",
      ],
      correct: 1,
      explanation: "WebSockets initiate over standard HTTP/1.1 or HTTP/2. The client provides `Upgrade: websocket` and a cryptographic challenge key `Sec-WebSocket-Key`. The server verifies the key and responds with `HTTP/1.1 101 Switching Protocols`, transforming the connection into bidirectional framed WebSocket messages.",
    },
    {
      id: 8,
      question: "Why is executing 'curl -k' or '--insecure' dangerous and prohibited in production environments?",
      options: [
        "It crashes the remote web server's memory buffer.",
        "It disables all certificate and hostname validation, blinding the client to Man-in-the-Middle (MitM) attacker impersonation and malicious TLS interception.",
        "It causes the operating system to delete the local DNS cache.",
        "It forces the client to use HTTP/1.0 without keep-alive.",
      ],
      correct: 1,
      explanation: "`curl -k` strips away all cryptographic trust checks. An attacker intercepting traffic on a rogue Wi-Fi or compromised router can present a fake certificate, and the client will happily transmit passwords and API keys directly to the adversary.",
    },
    {
      id: 9,
      question: "What causes an infinite HTTP &rarr; HTTPS redirect loop when an application sits behind a reverse proxy?",
      options: [
        "The DNS TTL is set too low.",
        "The reverse proxy terminates TLS and forwards requests to the backend as plaintext HTTP, but the backend does not inspect 'X-Forwarded-Proto: https' and continuously issues 301 redirects to HTTPS.",
        "The browser's TCP receive window size is zero.",
        "The server is running out of ephemeral ports.",
      ],
      correct: 1,
      explanation: "When a reverse proxy handles TLS and forwards plain HTTP to the backend without passing or trusting `X-Forwarded-Proto: https`, the backend thinks the user arrived over insecure HTTP and emits a 301 redirect to `https://...`. The browser follows the redirect, the proxy terminates TLS again, and the cycle repeats infinitely.",
    },
    {
      id: 10,
      question: "What does an HTTP '304 Not Modified' response header signify in web caching?",
      options: [
        "The requested file was deleted from the server.",
        "The client submitted a conditional validation header (If-None-Match with ETag), the server verified the resource has not changed, and the client should render its cached copy without re-downloading the body.",
        "The reverse proxy is currently experiencing a 504 Gateway Timeout.",
        "The website requires two-factor authentication.",
      ],
      correct: 1,
      explanation: "RFC 9111 specifies that when a client presents `If-None-Match: <etag>`, and the origin's current ETag matches, the server returns `304 Not Modified` with zero response body bytes. This dramatically speeds up page loads and saves network bandwidth.",
    },
  ];

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
  }, [quizAnswers, quizQuestions]);

  /* -------------------------------------------------------------------------- */
  /* LAB CHECKLIST & REPORT TEMPLATE                                           */
  /* -------------------------------------------------------------------------- */
  const [labChecks, setLabChecks] = useState({
    c1: false,
    c2: false,
    c3: false,
    c4: false,
    c5: false,
    c6: false,
    c7: false,
    c8: false,
  });

  const toggleLabCheck = (key) => {
    setLabChecks((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedChecksCount = Object.values(labChecks).filter(Boolean).length;

  const webReportTemplate = `# TECHNICAL LAB REPORT: HTTP, TLS & WEB INFRASTRUCTURE INVESTIGATION
**Standard:** RFC 9110 (HTTP Semantics) · RFC 8446 (TLS 1.3) · RFC 9111 (HTTP Caching)
**Lead Systems Engineer:** Network Infrastructure Operations
**Target Infrastructure:** prepspaces.com / Nginx Reverse Proxy Cluster
**Date:** ${new Date().toISOString().slice(0, 10)}

---

## 1. Executive Summary
This report analyzes Layer 7 HTTP wire semantics, verifies TLS 1.3 certificate chain authenticity, benchmarks conditional caching validation (ETags), and documents the root cause resolution of upstream proxy gateway anomalies (502/504 errors).

---

## 2. Protocol Diagnostics & Wire Trace Verification

### A. HTTP Response Header Audit (curl -sS -D - -o /dev/null https://prepspaces.com/)
\`\`\`http
HTTP/2 200 
date: ${new Date().toUTCString()}
content-type: text/html; charset=utf-8
content-length: 48920
cache-control: public, max-age=300, stale-while-revalidate=60
etag: W/"65f1-8f2a0b1c"
strict-transport-security: max-age=31536000; includeSubDomains; preload
x-content-type-options: nosniff
x-frame-options: DENY
content-security-policy: default-src 'self'; script-src 'self' 'unsafe-inline';
\`\`\`

### B. TLS 1.3 Handshake & Certificate Verification Log
\`\`\`text
$ openssl s_client -connect prepspaces.com:443 -servername prepspaces.com -verify_hostname prepspaces.com </dev/null
CONNECTED(00000003)
depth=2 C = US, O = Internet Security Research Group, CN = ISRG Root X1
verify return:1
depth=1 C = US, O = Let's Encrypt, CN = E6
verify return:1
depth=0 CN = prepspaces.com
verify return:1
---
Certificate chain
 0 s:CN = prepspaces.com
   i:C = US, O = Let's Encrypt, CN = E6
 1 s:C = US, O = Let's Encrypt, CN = E6
   i:C = US, O = Internet Security Research Group, CN = ISRG Root X1
---
New, TLSv1.3, Cipher is TLS_AES_128_GCM_SHA256
Server public key is 256 bit (ECDSA Curve25519)
Secure Renegotiation IS NOT supported (TLS 1.3 standard)
Verify return code: 0 (ok)
---
\`\`\`

---

## 3. Reverse Proxy & Upstream Failure Investigation

| Diagnostic Stage | Observation | Root Cause | Engineering Resolution |
|---|---|---|---|
| **502 Bad Gateway** | Upstream backend \`10.0.1.5:8080\` refused connection during deployment. | Node.js process crashed on unhandled promise rejection before health check passed. | Implemented systemd restart policy with pre-stop connection draining. |
| **504 Gateway Timeout** | Database query on \`/api/reports\` exceeded proxy \`proxy_read_timeout 60s\`. | Missing index on \`user_activity_logs\` table causing full sequential disk scan. | Added composite index; scaled read replicas and lowered backend timeout to 15s. |
| **Infinite Redirect Loop** | Browser halted after 20 consecutive 301 redirects to \`https://prepspaces.com/\`. | Backend did not trust \`X-Forwarded-Proto: https\` passed by Nginx TLS terminator. | Added \`proxy_set_header X-Forwarded-Proto $scheme;\` and configured backend trust proxy. |

---

## 4. Hardening & SRE Recommendations
1. **Enforce Strict Transport Security (HSTS):** Minimum 1-year duration (\`max-age=31536000\`) with \`preload\` to prevent SSL stripping attacks.
2. **Standardize Session Cookie Attributes:** Mandate \`Secure; HttpOnly; SameSite=Lax\` across all authenticated endpoints.
3. **Automate Certificate Renewal:** Deploy Certbot / ACME with automated renewal alerts 30 days prior to \`notAfter\` expiration.
4. **Enforce Microservice Mutual TLS (mTLS):** Protect proxy-to-backend internal traffic using WireGuard or internal TLS to maintain zero-trust integrity.
`;

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      {/* Top Banner & Module Navigation Header */}
      <div className="bg-[#18181b] text-white border-b border-stone-800 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/learning/networks")}
              className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition cursor-pointer"
              title="Return to Computer Networks Syllabus"
            >
              <ArrowLeft size={16} />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-orange-600 text-white">
                  Module 12
                </span>
                <span className="text-xs font-mono text-stone-400">
                  Computer Networks &amp; Internet Engineering
                </span>
              </div>
              <h1 className="text-sm sm:text-base font-bold text-white tracking-tight">
                Application Protocols &amp; Web Networking
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono bg-stone-900 border border-stone-700 px-2.5 py-1 rounded text-stone-300">
              RFC 9110 · RFC 8446 · RFC 6455
            </span>
            <button
              onClick={() => {
                setActiveTab("quiz");
                window.scrollTo({ top: 380, behavior: "smooth" });
              }}
              className="px-3 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-xs font-bold text-white transition flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Award size={14} />
              <span>Assessment</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Course Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex-1 w-full">
        {/* Module Header Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm mb-8 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-medium">
                <Layers size={14} className="text-orange-600" />
                <span>HTTP Semantics, TLS 1.3 Cryptography, Proxies &amp; WebSockets</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
                Application-Layer Protocols &amp; Web Infrastructure Engineering
              </h2>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                The application layer is where network communication becomes meaningful software logic. Transport sockets deliver bytes; application protocols define semantics, security boundaries, and user experience. Master HTTP methods, status codes, conditional caching (ETags), TLS 1.3 handshakes, X.509 PKI certificate chains, SSH/SFTP vs FTP, reverse proxy routing (502 vs 504), REST APIs, CORS boundaries, and full-duplex WebSockets.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 shrink-0">
              <div className="p-3 rounded-2xl bg-[#fbfaf7] border border-[#e7e3da] text-center">
                <div className="text-xl font-black text-stone-900">RFC 9110</div>
                <div className="text-[11px] font-medium text-stone-500 uppercase tracking-wide">HTTP Semantics</div>
              </div>
              <div className="p-3 rounded-2xl bg-[#fbfaf7] border border-[#e7e3da] text-center">
                <div className="text-xl font-black text-orange-600">1 RTT</div>
                <div className="text-[11px] font-medium text-stone-500 uppercase tracking-wide">TLS 1.3 Handshake</div>
              </div>
              <div className="p-3 rounded-2xl bg-[#fbfaf7] border border-[#e7e3da] text-center">
                <div className="text-xl font-black text-stone-900">Layer 7</div>
                <div className="text-[11px] font-medium text-stone-500 uppercase tracking-wide">Reverse Proxy</div>
              </div>
              <div className="p-3 rounded-2xl bg-[#fbfaf7] border border-[#e7e3da] text-center">
                <div className="text-xl font-black text-emerald-600">Full Duplex</div>
                <div className="text-[11px] font-medium text-stone-500 uppercase tracking-wide">WebSockets</div>
              </div>
            </div>
          </div>

          {/* Module Navigation Tabs */}
          <div className="mt-8 pt-6 border-t border-[#e7e3da] flex flex-wrap items-center gap-2">
            {[
              { id: "theory", label: "Core Theory (12.1 - 12.12)", icon: BookOpen },
              { id: "http-sim", label: "HTTP Request & Caching Sandbox", icon: Sliders },
              { id: "tls-handshake-sim", label: "TLS 1.3 Handshake Ladder", icon: LockKeyhole },
              { id: "cert-sim", label: "X.509 Certificate & SAN Validator", icon: FileBadge2 },
              { id: "proxy-sim", label: "Reverse Proxy & Load Balancer Router", icon: Split },
              { id: "cors-ws-sim", label: "CORS & WebSocket Handshake", icon: Wifi },
              { id: "cli", label: "Production CLI & Diagnostics", icon: Terminal },
              { id: "quiz", label: "Assessment Exam (10 Questions)", icon: Award },
              { id: "lab-report", label: "Lab Guide & SRE Incident Report", icon: FileText },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                    isActive
                      ? "bg-orange-600 text-white shadow-sm"
                      : "bg-[#fbfaf7] text-stone-600 hover:bg-stone-200/70 border border-[#e7e3da]"
                  }`}
                >
                  <Icon size={14} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Global Module Navigation Bar */}
        <div className="mb-8">
          <ModuleNav currentModuleId="applayer" course="networks" />
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* TAB 1: CORE THEORY CURRICULUM (SECTIONS 12.1 - 12.12)              */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "theory" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Table of Contents Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-4 border border-[#e7e3da] sticky top-20 shadow-sm">
                <div className="flex items-center gap-2 pb-3 mb-3 border-b border-[#e7e3da] text-xs font-bold uppercase tracking-wider text-stone-500">
                  <Layers size={14} />
                  <span>Module 12 Sections</span>
                </div>
                <nav className="space-y-1">
                  {[
                    { id: "12.1", title: "12.1 Application Layer in Context" },
                    { id: "12.2", title: "12.2 HTTP/1.1 Wire Semantics" },
                    { id: "12.3", title: "12.3 Safe vs Idempotent Methods" },
                    { id: "12.4", title: "12.4 HTTP Status Code Taxonomy" },
                    { id: "12.5", title: "12.5 Cookies & Security Headers" },
                    { id: "12.6", title: "12.6 HTTP Caching & ETags" },
                    { id: "12.7", title: "12.7 HTTPS & TLS 1.3 Handshake" },
                    { id: "12.8", title: "12.8 X.509 Certificates & PKI" },
                    { id: "12.9", title: "12.9 SSH, SFTP, FTP & Mail" },
                    { id: "12.10", title: "12.10 Proxies & Load Balancers" },
                    { id: "12.11", title: "12.11 APIs, CORS & WebSockets" },
                    { id: "12.12", title: "12.12 Hardening & Troubleshooting" },
                  ].map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => {
                        setActiveSection(sec.id);
                        const el = document.getElementById(`section-${sec.id}`);
                        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition cursor-pointer flex items-center justify-between ${
                        activeSection === sec.id
                          ? "bg-orange-50 text-orange-700 font-bold border-l-4 border-orange-600"
                          : "text-stone-600 hover:bg-stone-50"
                      }`}
                    >
                      <span className="truncate">{sec.title}</span>
                      {activeSection === sec.id && <ChevronRight size={12} className="shrink-0 text-orange-600" />}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Theory Content Body */}
            <div className="lg:col-span-3 space-y-10">
              {/* SECTION 12.1 */}
              <section id="section-12.1" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 font-mono">
                  <span>Section 12.1</span>
                  <span>·</span>
                  <span>Architectural Context</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  The Application Layer in Context
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  The application layer (Layer 7 of the OSI model, or Layer 4 of the TCP/IP model) is where network communication interfaces directly with software programs and end users. While lower layers handle routing across IP networks and reliable byte-stream delivery, application protocols define what the transmitted bytes actually mean and how endpoints must coordinate state.
                </p>

                <div className="p-4 rounded-2xl bg-[#18181b] text-white font-mono text-xs my-6">
                  <div className="text-stone-400 text-[10px] uppercase font-bold mb-3 pb-2 border-b border-stone-800">
                    What Actually Happens When You Open an HTTPS Website
                  </div>
                  <pre className="text-emerald-400 overflow-x-auto leading-relaxed">
{`1. Name Resolution:   Browser queries DNS for 'prepspaces.com' &rarr; Receives 104.21.72.15
2. Transport Setup:   TCP 3-way handshake over Port 443 (SYN &rarr; SYN-ACK &rarr; ACK) [1 RTT]
3. Cryptographic TLS: TLS 1.3 handshake (ClientHello &rarr; ServerHello + Cert) [1 RTT]
4. Application Comm:  Encrypted HTTP request transmitted (GET /courses HTTP/2 or HTTP/3)
5. Presentation:      Server returns 200 OK + HTML; browser parses DOM and renders UI`}
                  </pre>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs">
                  <span className="font-bold text-amber-950 block mb-1">Ports Are Defaults, Not Definitions:</span>
                  <p className="text-amber-900 leading-relaxed">
                    Port numbers are conventional standards (e.g. TCP 80 for HTTP, TCP 443 for HTTPS, TCP 22 for SSH, TCP 25 for SMTP), not inviolable laws of physics. An adversary or enterprise application can run an HTTP web server on port 8443, port 9000, or port 22. Network engineers inspect <strong>protocol framing behavior</strong>, not just port numbers, to identify what a service is doing.
                  </p>
                </div>
              </section>

              {/* SECTION 12.2 */}
              <section id="section-12.2" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 font-mono">
                  <span>Section 12.2</span>
                  <span>·</span>
                  <span>RFC 9110 Specification</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  HTTP Wire Semantics &amp; Request/Response Anatomy
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  HTTP (Hypertext Transfer Protocol) is an asymmetric, stateless request-response protocol. A client transmits an HTTP request, and an origin server responds with an HTTP response:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 text-xs font-mono">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="font-bold text-stone-900 block mb-2 text-sm">Anatomy of an HTTP Request</span>
                    <pre className="text-orange-600 leading-relaxed overflow-x-auto">
{`GET /api/v1/user HTTP/1.1
Host: prepspaces.com
User-Agent: Mozilla/5.0
Accept: application/json
Authorization: Bearer <token>
Connection: keep-alive`}
                    </pre>
                    <p className="text-[11px] text-stone-500 font-sans mt-3">
                      Composed of: Method (<code>GET</code>), Request Target (<code>/api/v1/user</code>), Version (<code>HTTP/1.1</code>), followed by key-value headers and an optional body.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="font-bold text-stone-900 block mb-2 text-sm">Anatomy of an HTTP Response</span>
                    <pre className="text-emerald-600 leading-relaxed overflow-x-auto">
{`HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 42
Cache-Control: max-age=300
ETag: "8f2a1b"

{"status":"active","role":"engineer"}`}
                    </pre>
                    <p className="text-[11px] text-stone-500 font-sans mt-3">
                      Composed of: Status Line (<code>HTTP/1.1 200 OK</code>), Response Headers (Content-Type, Cache-Control, ETag), a blank delimiter line (<code>\r\n</code>), and the payload body.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 12.3 */}
              <section id="section-12.3" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 font-mono">
                  <span>Section 12.3</span>
                  <span>·</span>
                  <span>Method Contracts</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  Safe vs. Idempotent Methods &amp; The Semantic Contract
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  Every HTTP method is governed by formal semantic properties defined in RFC 9110:
                </p>

                <div className="overflow-x-auto my-4">
                  <table className="w-full text-xs text-left border border-stone-200 rounded-xl font-mono">
                    <thead>
                      <tr className="bg-stone-100 text-stone-800 font-bold uppercase tracking-wider border-b border-stone-200">
                        <th className="p-3 border-r border-stone-200">Method</th>
                        <th className="p-3 border-r border-stone-200">Safe? (Read-Only)</th>
                        <th className="p-3 border-r border-stone-200">Idempotent? (Repeated Safely)</th>
                        <th className="p-3">Primary Architectural Semantics</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-stone-700">
                      <tr>
                        <td className="p-3 font-bold text-stone-900 border-r border-stone-200">GET</td>
                        <td className="p-3 text-emerald-600 font-bold border-r border-stone-200">YES</td>
                        <td className="p-3 text-emerald-600 font-bold border-r border-stone-200">YES</td>
                        <td className="p-3">Retrieve resource representation without mutating state</td>
                      </tr>
                      <tr className="bg-stone-50/50">
                        <td className="p-3 font-bold text-stone-900 border-r border-stone-200">HEAD</td>
                        <td className="p-3 text-emerald-600 font-bold border-r border-stone-200">YES</td>
                        <td className="p-3 text-emerald-600 font-bold border-r border-stone-200">YES</td>
                        <td className="p-3">Identical to GET, but server omits message body (used for cache checks)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-stone-900 border-r border-stone-200">PUT</td>
                        <td className="p-3 text-red-600 font-bold border-r border-stone-200">NO</td>
                        <td className="p-3 text-emerald-600 font-bold border-r border-stone-200">YES</td>
                        <td className="p-3">Completely replace or create resource at a known URI</td>
                      </tr>
                      <tr className="bg-stone-50/50">
                        <td className="p-3 font-bold text-stone-900 border-r border-stone-200">DELETE</td>
                        <td className="p-3 text-red-600 font-bold border-r border-stone-200">NO</td>
                        <td className="p-3 text-emerald-600 font-bold border-r border-stone-200">YES</td>
                        <td className="p-3">Remove resource identified by URI (deleting twice leaves it deleted)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-stone-900 border-r border-stone-200">POST</td>
                        <td className="p-3 text-red-600 font-bold border-r border-stone-200">NO</td>
                        <td className="p-3 text-red-600 font-bold border-r border-stone-200">NO</td>
                        <td className="p-3">Submit data for processing; repeated calls create duplicate side-effects!</td>
                      </tr>
                      <tr className="bg-stone-50/50">
                        <td className="p-3 font-bold text-stone-900 border-r border-stone-200">PATCH</td>
                        <td className="p-3 text-red-600 font-bold border-r border-stone-200">NO</td>
                        <td className="p-3 text-stone-500 border-r border-stone-200">Varies</td>
                        <td className="p-3">Apply partial delta modifications to a resource</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-200 text-xs">
                  <span className="font-bold text-orange-950 block mb-1">The Idempotency Key Pattern:</span>
                  <p className="text-orange-900 leading-relaxed">
                    Because POST requests are non-idempotent, a network timeout on a credit card charge (e.g. POST /api/payments) leaves the client uncertain whether the charge succeeded. To make retries safe, production APIs mandate an <code>Idempotency-Key: &lt;uuid&gt;</code> header. If a network blip causes a retry, the backend detects the duplicate UUID and returns the original cached transaction receipt without charging the card twice!
                  </p>
                </div>
              </section>

              {/* SECTION 12.4 */}
              <section id="section-12.4" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 font-mono">
                  <span>Section 12.4</span>
                  <span>·</span>
                  <span>Status Taxonomy</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  HTTP Status Code Taxonomy &amp; Nuanced Distinctions
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  HTTP status codes are categorized into five standard classes:
                </p>

                <div className="space-y-3 text-xs font-mono">
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="font-bold text-stone-900">2xx Success:</span>
                    <span className="text-stone-600 ml-2">
                      <code>200 OK</code> (Standard success) &bull; <code>201 Created</code> (Resource generated, returns Location header) &bull; <code>204 No Content</code> (Action done, no payload returned).
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="font-bold text-stone-900">3xx Redirection:</span>
                    <span className="text-stone-600 ml-2">
                      <code>301 Moved Permanently</code> (Cached indefinitely by browsers) &bull; <code>302 Found</code> / <code>307 Temporary Redirect</code> (Preserves method) &bull; <code>304 Not Modified</code> (Cache validation hit).
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="font-bold text-stone-900">4xx Client Errors:</span>
                    <span className="text-stone-600 ml-2">
                      <code>400 Bad Request</code> (Malformed syntax) &bull; <code>401 Unauthorized</code> (Missing or invalid authentication credentials) &bull; <code>403 Forbidden</code> (Authenticated identity lacks permission to access resource) &bull; <code>404 Not Found</code> &bull; <code>429 Too Many Requests</code>.
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="font-bold text-stone-900">5xx Server Errors:</span>
                    <span className="text-stone-600 ml-2">
                      <code>500 Internal Server Error</code> (Unhandled backend exception) &bull; <code>502 Bad Gateway</code> (Upstream service crashed or refused connection) &bull; <code>503 Service Unavailable</code> (Temporary maintenance or overload) &bull; <code>504 Gateway Timeout</code> (Upstream did not respond before timeout).
                    </span>
                  </div>
                </div>
              </section>

              {/* SECTION 12.5 */}
              <section id="section-12.5" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 font-mono">
                  <span>Section 12.5</span>
                  <span>·</span>
                  <span>Session Security</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  Cookies, Session Integrity &amp; Browser Security Headers
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  Because HTTP is stateless, web applications maintain user login state using cookies via the <code>Set-Cookie</code> header. Production session cookies require three essential protective attributes:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4 text-xs">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="font-bold text-stone-900 block mb-1">1. Secure</span>
                    <p className="text-stone-600 leading-relaxed">
                      Instructs the browser to only transmit the cookie over encrypted HTTPS connections. Prevents credential leaks over cleartext Wi-Fi.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="font-bold text-stone-900 block mb-1">2. HttpOnly</span>
                    <p className="text-stone-600 leading-relaxed">
                      Blocks client-side JavaScript from accessing <code>document.cookie</code>. Mitigates session hijacking if an XSS vulnerability exists.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="font-bold text-stone-900 block mb-1">3. SameSite=Lax / Strict</span>
                    <p className="text-stone-600 leading-relaxed">
                      Restricts cookies from being attached to cross-site requests initiated by third-party origins, preventing Cross-Site Request Forgery (CSRF).
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-900 text-white font-mono text-xs my-4">
                  <div className="text-stone-400 font-bold mb-2">Essential Security Headers:</div>
                  <ul className="space-y-1 text-stone-300">
                    <li><code>Strict-Transport-Security: max-age=31536000; includeSubDomains; preload</code> (Forces HTTPS for 1 year)</li>
                    <li><code>Content-Security-Policy: default-src 'self'; script-src 'self'</code> (Blocks unauthorized inline scripts)</li>
                    <li><code>X-Content-Type-Options: nosniff</code> (Stops MIME-type confusion attacks)</li>
                  </ul>
                </div>
              </section>

              {/* SECTION 12.6 */}
              <section id="section-12.6" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 font-mono">
                  <span>Section 12.6</span>
                  <span>·</span>
                  <span>Caching Architecture</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  HTTP Caching Engine &amp; Conditional ETag Validation (RFC 9111)
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  HTTP caching dramatically decreases page latency and server load:
                </p>

                <div className="space-y-3 text-xs">
                  <div className="p-4 rounded-xl bg-[#fbfaf7] border border-[#e7e3da]">
                    <span className="font-bold text-stone-900 block mb-1">Cache-Control Directives:</span>
                    <ul className="list-disc pl-5 space-y-1 text-stone-600 font-mono">
                      <li><code>max-age=300</code>: Response is fresh for 300 seconds; browser reuses without asking origin.</li>
                      <li><code>no-cache</code>: Browser may store the response, but MUST revalidate with origin before every reuse!</li>
                      <li><code>no-store</code>: Do NOT write response to disk or memory; strictly for sensitive banking data.</li>
                      <li><code>private</code>: Intended only for the single end-user browser; intermediate CDNs/proxies must not cache.</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-[#fbfaf7] border border-[#e7e3da]">
                    <span className="font-bold text-stone-900 block mb-1">Conditional Revalidation with ETags:</span>
                    <p className="text-stone-600 leading-relaxed mb-2">
                      When a cached entry reaches its max-age, the browser does not re-download the entire file. It sends a conditional request:
                    </p>
                    <pre className="text-orange-600 bg-stone-100 p-2 rounded font-mono text-[11px]">
{`GET /app.js HTTP/1.1
If-None-Match: "v2.4.1"`}
                    </pre>
                    <p className="text-stone-600 text-[11px] mt-2">
                      If the file hasn't changed, the origin replies with <code>304 Not Modified</code> (0 bytes payload!), instantly refreshing the cache.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 12.7 */}
              <section id="section-12.7" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 font-mono">
                  <span>Section 12.7</span>
                  <span>·</span>
                  <span>Transport Layer Security</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  HTTPS &amp; The TLS 1.3 Handshake (RFC 8446)
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  HTTPS is HTTP carried over a Transport Layer Security (TLS) channel. TLS 1.3 (RFC 8446) revolutionized web cryptography by reducing handshake latency from 2 RTTs down to a single 1 RTT and mandating Forward Secrecy:
                </p>

                <div className="p-6 rounded-2xl bg-[#18181b] text-white font-mono text-xs my-4">
                  <div className="text-stone-400 font-bold mb-3 pb-2 border-b border-stone-800">
                    TLS 1.3 1-RTT Handshake Sequence
                  </div>
                  <pre className="text-emerald-400 leading-relaxed overflow-x-auto">
{`Client                                                         Server
  |                                                              |
  |  ClientHello                                                 |
  |  + Key Share (ECDHE Curve25519)                              |
  |  + SNI: prepspaces.com                                       |
  |  --------------------------------------------------------->  | [0.5 RTT]
  |                                                              |
  |                                                 ServerHello  |
  |                                 + Key Share (Curve25519)     |
  |                                 {EncryptedExtensions}        |
  |                                 {Certificate Chain}          |
  |                                 {CertificateVerify (ECDSA)}  |
  |                                 {Finished}                   |
  |  <---------------------------------------------------------  | [1.0 RTT]
  |                                                              |
  |  {Finished}                                                  |
  |  [HTTP GET Request - Encrypted with AES-GCM / ChaCha20]      |
  |  --------------------------------------------------------->  | [HANDSHAKE COMPLETE]`}
                  </pre>
                </div>
              </section>

              {/* SECTION 12.8 */}
              <section id="section-12.8" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 font-mono">
                  <span>Section 12.8</span>
                  <span>·</span>
                  <span>Public Key Infrastructure</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  Digital Certificates, PKI &amp; Hostname Validation
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  A TLS certificate binds an identity (the domain name in the Subject Alternative Name / SAN field) to a public cryptographic key, signed by a Certificate Authority (CA):
                </p>

                <div className="p-4 rounded-2xl bg-[#fbfaf7] border border-[#e7e3da] text-xs space-y-2">
                  <div className="font-bold text-stone-900 text-sm">Strict Client Validation Rules:</div>
                  <ul className="list-disc pl-5 space-y-1 text-stone-600">
                    <li><strong>Trust Anchor:</strong> The chain must terminate at a root CA installed in the client operating system trust store.</li>
                    <li><strong>SAN Matching:</strong> The URL hostname must strictly match an entry in the <code>Subject Alternative Name (SAN)</code> extension (e.g. <code>prepspaces.com</code> or wildcard <code>*.prepspaces.com</code>). Legacy Common Name (CN) is deprecated.</li>
                    <li><strong>Validity Window:</strong> Current system time must fall between <code>notBefore</code> and <code>notAfter</code>.</li>
                    <li><strong>Intermediate Completeness:</strong> The server MUST send all intermediate certificates alongside its leaf certificate; clients must not be forced to guess missing intermediates.</li>
                  </ul>
                </div>
              </section>

              {/* SECTION 12.9 */}
              <section id="section-12.9" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 font-mono">
                  <span>Section 12.9</span>
                  <span>·</span>
                  <span>Remote Administration &amp; Mail</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  SSH, SFTP, FTP &amp; Mail Protocols (SMTP, IMAP, POP3)
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  Understanding application protocols beyond the web is critical for systems and security engineering:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 text-xs font-mono">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="font-bold text-stone-900 block mb-1">SSH (TCP 22) &amp; SFTP:</span>
                    <p className="text-stone-600 font-sans leading-relaxed">
                      Secure Shell provides authenticated, encrypted shell access and tunneling. SFTP runs inside the SSH channel on TCP 22. It is strictly different from FTP and does not require complex secondary firewall data ports.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="font-bold text-stone-900 block mb-1">Legacy FTP vs FTPS:</span>
                    <p className="text-stone-600 font-sans leading-relaxed">
                      Traditional FTP (RFC 959) transmits credentials in plaintext. FTPS wraps FTP in TLS. However, FTPS requires opening random secondary TCP ports for passive data transfers, causing severe firewall headaches.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="font-bold text-stone-900 block mb-1">SMTP (Mail Submission &amp; Relay):</span>
                    <p className="text-stone-600 font-sans leading-relaxed">
                      Port 25 for server-to-server relay; Port 587 (with STARTTLS) or Port 465 (implicit TLS) for authenticated user submission.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="font-bold text-stone-900 block mb-1">IMAP (Port 993) vs POP3 (Port 995):</span>
                    <p className="text-stone-600 font-sans leading-relaxed">
                      IMAP synchronizes mailbox state across multiple devices; POP3 downloads and removes email from the server for single-client access.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 12.10 */}
              <section id="section-12.10" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 font-mono">
                  <span>Section 12.10</span>
                  <span>·</span>
                  <span>Infrastructure Architecture</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  Forward Proxies, Reverse Proxies &amp; Load Balancers
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  Intermediary network appliances sit between clients and backend origins:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4 text-xs">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="font-bold text-stone-900 block mb-1">Forward Proxy (Client-Side)</span>
                    <p className="text-stone-600 leading-relaxed">
                      Acts on behalf of internal clients reaching outward to the internet. Enforces egress filtering, content auditing, and outbound enterprise security policies.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="font-bold text-stone-900 block mb-1">Reverse Proxy (Server-Side)</span>
                    <p className="text-stone-600 leading-relaxed">
                      Acts on behalf of backend services. Terminates TLS encryption, routes paths (e.g. <code>/api</code> vs <code>/</code>), shields internal IP addresses, and applies rate limits (e.g. Nginx, Envoy).
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="font-bold text-stone-900 block mb-1">Load Balancer (Layer 4 vs 7)</span>
                    <p className="text-stone-600 leading-relaxed">
                      Distributes traffic across server pools. Layer 4 routes TCP sockets without inspecting payloads; Layer 7 routes requests based on HTTP hostnames, cookies, and URI paths.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-red-50/70 border border-red-200 text-xs">
                  <span className="font-bold text-red-950 block mb-1">The Forwarded Header Security Rule:</span>
                  <p className="text-red-900 leading-relaxed">
                    Backends rely on <code>X-Forwarded-For</code> and <code>X-Forwarded-Proto</code> to know the real user IP and scheme. <em>Crucial rule:</em> Backends must ONLY trust these headers if they are appended or sanitized by your trusted reverse proxy! Otherwise, attackers can forge client IPs to bypass geo-restrictions or IP allowlists.
                  </p>
                </div>
              </section>

              {/* SECTION 12.11 */}
              <section id="section-12.11" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 font-mono">
                  <span>Section 12.11</span>
                  <span>·</span>
                  <span>Modern Web Communication</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  REST APIs, CORS Boundaries &amp; Full-Duplex WebSockets
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  Modern web applications demand continuous, interactive communication:
                </p>

                <div className="space-y-3 text-xs">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="font-bold text-stone-900 block mb-1">CORS &amp; The Preflight OPTIONS Request:</span>
                    <p className="text-stone-600 leading-relaxed">
                      If JavaScript at <code>https://app.example.com</code> attempts to read data from <code>https://api.example.com</code>, the browser first transmits an <code>OPTIONS</code> preflight query asking if cross-origin access is permitted. The API replies with <code>Access-Control-Allow-Origin: https://app.example.com</code>. Never use <code>*</code> if cookies or credentials are transmitted!
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="font-bold text-stone-900 block mb-1">WebSockets (RFC 6455):</span>
                    <p className="text-stone-600 leading-relaxed">
                      Standard HTTP requires opening a new request/response cycle for every update. WebSockets upgrade an HTTP connection to a persistent full-duplex socket (<code>wss://</code>), allowing client and server to exchange real-time framed messages with sub-millisecond overhead.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 12.12 */}
              <section id="section-12.12" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 font-mono">
                  <span>Section 12.12</span>
                  <span>·</span>
                  <span>Production Hardening</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  Security Hardening Checklist &amp; Troubleshooting Protocol
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  Production SREs follow a structured Layer 7 triage protocol when web services fail:
                </p>

                <div className="p-6 rounded-2xl bg-[#18181b] text-white font-mono text-xs">
                  <div className="text-stone-400 font-bold mb-3 pb-2 border-b border-stone-800">
                    Web Connectivity Triage Protocol
                  </div>
                  <pre className="text-emerald-400 leading-relaxed overflow-x-auto">
{`Level 1: DNS Check        &rarr; dig prepspaces.com +short (Confirm valid IP returned)
Level 2: TCP Handshake    &rarr; nc -zv prepspaces.com 443 (Confirm firewall not dropping SYN)
Level 3: TLS Verification &rarr; openssl s_client -connect prepspaces.com:443 -servername prepspaces.com
Level 4: HTTP Status      &rarr; curl -Iv https://prepspaces.com/ (Inspect headers, status, redirects)`}
                  </pre>
                </div>
              </section>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 2: SIMULATOR 1 - HTTP REQUEST/RESPONSE & CACHING SANDBOX       */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "http-sim" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                    <Sliders size={14} />
                    <span>HTTP Wire Sandbox</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    HTTP Request / Response &amp; Conditional Caching Engine
                  </h3>
                </div>
                <button
                  onClick={() => {
                    setHttpMethod("GET");
                    setIfNoneMatchHeader("");
                    setClientCacheControl("max-age=300");
                  }}
                  className="px-3 py-1.5 rounded-lg border border-stone-200 bg-stone-50 hover:bg-stone-100 text-xs font-bold text-stone-700 flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw size={12} />
                  <span>Reset Request</span>
                </button>
              </div>

              {/* Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">HTTP Method</label>
                  <select
                    value={httpMethod}
                    onChange={(e) => setHttpMethod(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs font-mono text-stone-900 focus:outline-none focus:border-orange-500 font-bold"
                  >
                    <option value="GET">GET (Safe &amp; Idempotent)</option>
                    <option value="POST">POST (Unsafe &amp; Non-Idempotent)</option>
                    <option value="DELETE">DELETE (Unsafe but Idempotent)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">Request Path</label>
                  <input
                    type="text"
                    value={requestPath}
                    onChange={(e) => setRequestPath(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs font-mono text-stone-900 focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">Conditional Header (If-None-Match)</label>
                  <select
                    value={ifNoneMatchHeader}
                    onChange={(e) => setIfNoneMatchHeader(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs font-mono text-stone-900 focus:outline-none focus:border-orange-500"
                  >
                    <option value="">(None - Fresh Fetch)</option>
                    <option value='"etag-net-v1"'>"etag-net-v1" (Matches Origin &rarr; 304)</option>
                    <option value='"etag-old-v0"'>"etag-old-v0" (Stale &rarr; 200 Refetch)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">Origin Cache-Control</label>
                  <select
                    value={clientCacheControl}
                    onChange={(e) => setClientCacheControl(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs font-mono text-stone-900 focus:outline-none focus:border-orange-500"
                  >
                    <option value="max-age=300">max-age=300 (Cached 5m)</option>
                    <option value="no-cache">no-cache (Must Revalidate)</option>
                    <option value="no-store">no-store (Never Cache)</option>
                  </select>
                </div>
              </div>

              {/* Wire Response Box */}
              <div className="p-6 rounded-2xl bg-stone-900 text-white font-mono text-xs">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-800 text-stone-400 text-[10px] uppercase font-bold">
                  <span>Server Wire Response Headers &amp; Payload</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    simulatedResponse.statusCode === 200 || simulatedResponse.statusCode === 201
                      ? "bg-emerald-950 text-emerald-400 border border-emerald-800"
                      : simulatedResponse.statusCode === 304
                      ? "bg-blue-950 text-blue-400 border border-blue-800"
                      : "bg-amber-950 text-amber-400 border border-amber-800"
                  }`}>
                    {simulatedResponse.status}
                  </span>
                </div>

                <div className="space-y-1 mb-4 text-stone-300">
                  <div className="text-orange-400 font-bold">HTTP/2 {simulatedResponse.status}</div>
                  {Object.entries(simulatedResponse.headers).map(([k, v]) => (
                    <div key={k}>
                      <span className="text-stone-400">{k}:</span> {v}
                    </div>
                  ))}
                </div>

                <div className="p-3 bg-stone-800/80 rounded-xl mb-4">
                  <span className="text-[10px] text-stone-400 block uppercase font-bold mb-1">Response Body:</span>
                  <pre className="text-emerald-400 leading-relaxed overflow-x-auto">{simulatedResponse.body}</pre>
                </div>

                <p className="text-stone-400 text-[11px] font-sans">
                  <strong>Architectural Assessment:</strong> {simulatedResponse.note}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 3: SIMULATOR 2 - TLS 1.3 HANDSHAKE & CIPHER SUITES             */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "tls-handshake-sim" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                    <LockKeyhole size={14} />
                    <span>Cryptographic Handshake Ladder</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    TLS 1.3 1-RTT Handshake &amp; Traffic Key Derivation
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <select
                    value={selectedCipher}
                    onChange={(e) => setSelectedCipher(e.target.value)}
                    className="px-3 py-1.5 rounded-xl border border-stone-300 text-xs font-mono text-stone-900 focus:outline-none"
                  >
                    <option value="TLS_AES_128_GCM_SHA256">TLS_AES_128_GCM_SHA256 (Fast Hardware)</option>
                    <option value="TLS_CHACHA20_POLY1305_SHA256">TLS_CHACHA20_POLY1305_SHA256 (Mobile CPU)</option>
                  </select>
                </div>
              </div>

              {/* Handshake Visual Ladder */}
              <div className="p-6 rounded-2xl bg-stone-900 text-white font-mono text-xs">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-800 text-stone-400 text-[10px] uppercase font-bold">
                  <span>Flight Direction</span>
                  <span>Wire Handshake Frame</span>
                  <span>Cryptographic Operations</span>
                </div>

                <div className="space-y-3">
                  {tlsHandshakeLadder.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-stone-800/80 border border-stone-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div>
                        <span className="text-[10px] text-orange-400 font-bold uppercase block" dangerouslySetInnerHTML={{ __html: step.flight }} />
                        <span className="text-stone-200 font-bold text-sm">{step.msg}</span>
                        <p className="text-[11px] text-stone-400 mt-0.5">{step.desc}</p>
                      </div>
                      <div className="text-emerald-400 text-[11px] sm:text-right max-w-sm">
                        {step.crypto}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 4: SIMULATOR 3 - X.509 CERTIFICATE & SAN VALIDATOR             */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "cert-sim" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                    <FileBadge2 size={14} />
                    <span>PKI Trust Validator</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    X.509 Certificate Chain &amp; Hostname SAN Verification
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setTestHostname("api.prepspaces.com");
                      setClockSkewOffsetDays(0);
                    }}
                    className="px-3 py-1.5 rounded-lg border border-stone-200 bg-stone-50 hover:bg-stone-100 text-xs font-bold text-stone-700 flex items-center gap-1.5 cursor-pointer"
                  >
                    <RotateCcw size={12} />
                    <span>Reset</span>
                  </button>
                </div>
              </div>

              {/* Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Requested Hostname to Connect to:
                  </label>
                  <input
                    type="text"
                    value={testHostname}
                    onChange={(e) => setTestHostname(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs font-mono text-stone-900 focus:outline-none focus:border-orange-500"
                    placeholder="e.g. api.prepspaces.com"
                  />
                  <div className="text-[10px] text-stone-500 mt-1">
                    Cert SANs: <code>prepspaces.com</code>, <code>*.prepspaces.com</code> (Try testing <code>billing.attacker.com</code> or <code>sub.api.prepspaces.com</code>).
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">
                    Simulate System Clock Offset: {clockSkewOffsetDays} Days
                  </label>
                  <input
                    type="range"
                    min="-400"
                    max="400"
                    step="10"
                    value={clockSkewOffsetDays}
                    onChange={(e) => setClockSkewOffsetDays(Number(e.target.value))}
                    className="w-full accent-orange-600"
                  />
                  <div className="text-[10px] text-stone-500 mt-1">
                    Simulated Client Date: <strong>{certValidationResult.simulatedDate}</strong> (Cert Valid in 2026).
                  </div>
                </div>
              </div>

              {/* Verification Output Box */}
              <div className="p-6 rounded-2xl bg-stone-900 text-white font-mono text-xs">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-800 text-stone-400 text-[10px] uppercase font-bold">
                  <span>Client Validation Pipeline Status</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    certValidationResult.isTrusted ? "bg-emerald-950 text-emerald-400 border border-emerald-800" : "bg-red-950 text-red-400 border border-red-800"
                  }`}>
                    {certValidationResult.isTrusted ? "TLS CERTIFICATE TRUSTED" : "TLS CERTIFICATE REJECTED"}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className={`p-4 rounded-xl border ${
                    certValidationResult.hostnameValid ? "bg-stone-800/80 border-stone-700" : "bg-red-950/40 border-red-800"
                  }`}>
                    <span className="text-[10px] text-stone-400 block uppercase font-bold">1. Subject Alternative Name (SAN) Match</span>
                    <span className={`text-sm font-bold block mt-1 ${certValidationResult.hostnameValid ? "text-emerald-400" : "text-red-400"}`}>
                      {certValidationResult.hostnameValid ? "MATCH CONFIRMED" : "ERR_CERT_COMMON_NAME_INVALID"}
                    </span>
                    <p className="text-[10px] text-stone-400 mt-1 font-sans">
                      {certValidationResult.hostnameValid ? "Hostname matches SAN wildcard entry *.prepspaces.com." : "Requested hostname is NOT in the certificate's SAN list!"}
                    </p>
                  </div>

                  <div className={`p-4 rounded-xl border ${
                    certValidationResult.dateValid ? "bg-stone-800/80 border-stone-700" : "bg-red-950/40 border-red-800"
                  }`}>
                    <span className="text-[10px] text-stone-400 block uppercase font-bold">2. Validity Period (notBefore / notAfter)</span>
                    <span className={`text-sm font-bold block mt-1 ${certValidationResult.dateValid ? "text-emerald-400" : "text-red-400"}`}>
                      {certValidationResult.dateValid ? "WITHIN DATES (VALID)" : "ERR_CERT_DATE_INVALID"}
                    </span>
                    <p className="text-[10px] text-stone-400 mt-1 font-sans">
                      {certValidationResult.dateValid ? "Client date falls cleanly between 2026-01-01 and 2026-12-31." : "Certificate is either expired or not yet valid due to clock skew!"}
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-stone-800/50 rounded-xl text-stone-300 text-[11px] leading-relaxed">
                  <strong>Trust Chain Hierarchy:</strong> {certValidationResult.issuer} &rarr; <code>CN=prepspaces.com</code>.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 5: SIMULATOR 4 - REVERSE PROXY & LOAD BALANCER ROUTER          */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "proxy-sim" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                    <Split size={14} />
                    <span>Layer 7 Routing Sandbox</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    Reverse Proxy, Path Routing &amp; 502/504 Gateway Simulator
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setBackendHealth({ web: true, api: true })}
                    className="px-3 py-1.5 rounded-lg border border-stone-200 bg-stone-50 hover:bg-stone-100 text-xs font-bold text-stone-700 cursor-pointer"
                  >
                    Restore All Backends
                  </button>
                </div>
              </div>

              {/* Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">Incoming Request Path</label>
                  <select
                    value={routeRequestPath}
                    onChange={(e) => setRouteRequestPath(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs font-mono text-stone-900 focus:outline-none"
                  >
                    <option value="/api/v1/auth">/api/v1/auth (Routes to API Cluster)</option>
                    <option value="/api/v1/courses">/api/v1/courses (Routes to API Cluster)</option>
                    <option value="/dashboard">/dashboard (Routes to Frontend SSR)</option>
                    <option value="/">/ (Routes to Frontend SSR)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">Frontend SSR Backend</label>
                  <button
                    onClick={() => setBackendHealth((prev) => ({ ...prev, web: !prev.web }))}
                    className={`w-full px-3 py-2 rounded-xl text-xs font-bold border transition ${
                      backendHealth.web ? "bg-emerald-50 border-emerald-300 text-emerald-800" : "bg-red-50 border-red-300 text-red-800"
                    }`}
                  >
                    {backendHealth.web ? "ONLINE (Port 3000)" : "OFFLINE (Simulate Crash)"}
                  </button>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">API Microservice Backend</label>
                  <button
                    onClick={() => setBackendHealth((prev) => ({ ...prev, api: !prev.api }))}
                    className={`w-full px-3 py-2 rounded-xl text-xs font-bold border transition ${
                      backendHealth.api ? "bg-emerald-50 border-emerald-300 text-emerald-800" : "bg-red-50 border-red-300 text-red-800"
                    }`}
                  >
                    {backendHealth.api ? "ONLINE (Port 8080)" : "OFFLINE (Simulate Crash)"}
                  </button>
                </div>
              </div>

              {/* Proxy Decision Box */}
              <div className="p-6 rounded-2xl bg-stone-900 text-white font-mono text-xs">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-800 text-stone-400 text-[10px] uppercase font-bold">
                  <span>Nginx Reverse Proxy Internal Routing Engine</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    proxyRoutingDecision.statusCode === 200 ? "bg-emerald-950 text-emerald-400 border border-emerald-800" : "bg-red-950 text-red-400 border border-red-800"
                  }`}>
                    {proxyRoutingDecision.status}
                  </span>
                </div>

                <div className="space-y-2 text-stone-300">
                  <div>
                    <span className="text-stone-400">Target Upstream Cluster:</span>{" "}
                    <span className="text-orange-400 font-bold">{proxyRoutingDecision.targetCluster}</span>
                  </div>
                  <div>
                    <span className="text-stone-400">Diagnostic Event:</span>{" "}
                    <span className={proxyRoutingDecision.statusCode === 502 ? "text-red-400 font-bold" : "text-stone-300"}>
                      {proxyRoutingDecision.log}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 6: SIMULATOR 5 - CORS & WEBSOCKET HANDSHAKE                    */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "cors-ws-sim" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 font-mono">
                <Wifi size={14} />
                <span>Modern Web Protocols</span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-4">
                CORS Origin Check &amp; WebSocket HTTP Upgrade Handshake
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed mb-6">
                Inspect how browser origin restrictions are negotiated via preflight OPTIONS requests, and how an HTTP socket upgrades into a bidirectional, full-duplex WebSocket connection.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
                {/* CORS Card */}
                <div className="p-6 rounded-2xl bg-stone-900 text-white">
                  <div className="text-stone-400 text-[10px] uppercase font-bold mb-3 pb-2 border-b border-stone-800 flex items-center justify-between">
                    <span>CORS Preflight OPTIONS Exchange</span>
                    <span className="text-emerald-400 font-bold">204 No Content</span>
                  </div>
                  <pre className="text-orange-400 overflow-x-auto leading-relaxed mb-4">
{`OPTIONS /api/v1/profile HTTP/1.1
Host: api.prepspaces.com
Origin: https://app.prepspaces.com
Access-Control-Request-Method: PATCH
Access-Control-Request-Headers: Authorization`}
                  </pre>
                  <pre className="text-emerald-400 overflow-x-auto leading-relaxed">
{`HTTP/1.1 204 No Content
Access-Control-Allow-Origin: https://app.prepspaces.com
Access-Control-Allow-Methods: GET, POST, PATCH
Access-Control-Allow-Headers: Authorization
Access-Control-Max-Age: 86400`}
                  </pre>
                </div>

                {/* WebSocket Card */}
                <div className="p-6 rounded-2xl bg-stone-900 text-white">
                  <div className="text-stone-400 text-[10px] uppercase font-bold mb-3 pb-2 border-b border-stone-800 flex items-center justify-between">
                    <span>WebSocket Upgrade Handshake</span>
                    <span className="text-emerald-400 font-bold">101 Switching Protocols</span>
                  </div>
                  <pre className="text-orange-400 overflow-x-auto leading-relaxed mb-4">
{`GET /live-chat HTTP/1.1
Host: prepspaces.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13`}
                  </pre>
                  <pre className="text-emerald-400 overflow-x-auto leading-relaxed">
{`HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=

[FULL-DUPLEX BINARY FRAMING NOW ACTIVE]`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 7: PRODUCTION CLI COMMANDS                                     */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "cli" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 font-mono">
                <Terminal size={14} />
                <span>Production CLI Reference</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Web Protocols &amp; TLS Diagnostics Toolkit
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed mb-6">
                Essential command-line tools for inspecting HTTP headers, testing TLS handshakes, checking certificate expiration dates, and debugging reverse proxies.
              </p>

              <div className="space-y-4">
                {[
                  {
                    id: "c1",
                    title: "Inspect HTTP Wire Response Headers & Redirects with curl",
                    cmd: "curl -sS -D - -o /dev/null -L https://prepspaces.com/",
                    desc: "Prints all HTTP response headers, status codes, and redirect chains without displaying the HTML body.",
                  },
                  {
                    id: "c2",
                    title: "Verify Complete TLS Certificate Chain & SNI with OpenSSL",
                    cmd: "openssl s_client -connect prepspaces.com:443 -servername prepspaces.com -showcerts",
                    desc: "Simulates a full TLS handshake, verifying certificate chain trust up to the root CA and printing all intermediate certificates.",
                  },
                  {
                    id: "c3",
                    title: "Check Certificate Subject Alternative Names (SAN) & Expiry Dates",
                    cmd: "openssl s_client -connect prepspaces.com:443 -servername prepspaces.com </dev/null 2>/dev/null | openssl x509 -noout -dates -subject -ext subjectAltName",
                    desc: "Extracts notBefore/notAfter dates and SAN domain entries to diagnose certificate expiration or hostname mismatch warnings.",
                  },
                  {
                    id: "c4",
                    title: "Test Conditional Caching (304 Not Modified) with ETag",
                    cmd: 'curl -I -H \'If-None-Match: "8f2a1b"\' https://prepspaces.com/app.js',
                    desc: "Submits a conditional validation query to confirm the origin server returns 304 Not Modified instead of re-downloading data.",
                  },
                  {
                    id: "c5",
                    title: "Validate Nginx Reverse Proxy Configuration Syntax",
                    cmd: "sudo nginx -t && sudo nginx -s reload",
                    desc: "Checks reverse proxy syntax for broken upstream routing or missing X-Forwarded-Proto headers before reloading production traffic.",
                  },
                ].map((item) => (
                  <div key={item.id} className="p-4 rounded-2xl bg-stone-900 text-white font-mono text-xs">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-800">
                      <span className="text-stone-400 font-bold">{item.title}</span>
                      <button
                        onClick={() => copyToClipboard(item.cmd, item.id)}
                        className="text-stone-400 hover:text-white flex items-center gap-1 cursor-pointer transition"
                      >
                        {copiedCodeId === item.id ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                        <span className="text-[10px]">{copiedCodeId === item.id ? "Copied" : "Copy"}</span>
                      </button>
                    </div>
                    <pre className="text-orange-400 overflow-x-auto leading-relaxed">{item.cmd}</pre>
                    <p className="text-stone-400 text-[11px] mt-2 font-sans">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 8: STATEFUL 10-QUESTION ASSESSMENT                             */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "quiz" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                    <Award size={14} />
                    <span>Stateful Knowledge Exam</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    Module 12 Comprehensive Assessment (10 Questions)
                  </h3>
                </div>
                {quizSubmitted && (
                  <div className="px-4 py-2 rounded-2xl bg-stone-900 text-white font-mono text-xs font-bold">
                    Score: {quizScore} / {quizQuestions.length} ({Math.round((quizScore / quizQuestions.length) * 100)}%)
                  </div>
                )}
              </div>

              <div className="space-y-6">
                {quizQuestions.map((q, qIdx) => {
                  const selected = quizAnswers[q.id];
                  const isCorrect = selected === q.correct;
                  return (
                    <div
                      key={q.id}
                      className={`p-6 rounded-2xl border transition ${
                        quizSubmitted
                          ? isCorrect
                            ? "bg-emerald-50/50 border-emerald-300"
                            : "bg-red-50/50 border-red-300"
                          : "bg-[#fbfaf7] border-[#e7e3da]"
                      }`}
                    >
                      <div className="flex items-start gap-3 mb-4">
                        <span className="w-6 h-6 rounded-lg bg-stone-200 text-stone-800 text-xs font-bold font-mono flex items-center justify-center shrink-0">
                          {qIdx + 1}
                        </span>
                        <h4 className="text-sm font-bold text-stone-900 leading-snug">{q.question}</h4>
                      </div>

                      <div className="space-y-2 mb-4">
                        {q.options.map((opt, optIdx) => {
                          const isOptionSelected = selected === optIdx;
                          const isOptionCorrect = q.correct === optIdx;
                          let btnStyle = "bg-white border-stone-200 text-stone-700 hover:bg-stone-50";

                          if (quizSubmitted) {
                            if (isOptionCorrect) {
                              btnStyle = "bg-emerald-100 border-emerald-400 text-emerald-950 font-bold";
                            } else if (isOptionSelected && !isOptionCorrect) {
                              btnStyle = "bg-red-100 border-red-400 text-red-950 font-bold";
                            }
                          } else if (isOptionSelected) {
                            btnStyle = "bg-orange-100 border-orange-500 text-orange-950 font-bold";
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectAnswer(q.id, optIdx)}
                              className={`w-full text-left p-3 rounded-xl border text-xs transition cursor-pointer flex items-center justify-between ${btnStyle}`}
                            >
                              <span>{opt}</span>
                              {quizSubmitted && isOptionCorrect && (
                                <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {quizSubmitted && (
                        <div className="p-3 rounded-xl bg-white/80 border border-stone-200 text-xs text-stone-600 leading-relaxed">
                          <strong>Engineering Explanation:</strong> {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-[#e7e3da] flex items-center justify-between">
                <button
                  onClick={() => {
                    setQuizAnswers({});
                    setQuizSubmitted(false);
                  }}
                  className="px-4 py-2 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 text-xs font-bold text-stone-700 cursor-pointer"
                >
                  Reset Answers
                </button>
                <button
                  onClick={() => setQuizSubmitted(true)}
                  disabled={quizSubmitted || Object.keys(quizAnswers).length < quizQuestions.length}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                    quizSubmitted || Object.keys(quizAnswers).length < quizQuestions.length
                      ? "bg-stone-200 text-stone-400 cursor-not-allowed"
                      : "bg-orange-600 hover:bg-orange-700 text-white shadow-sm"
                  }`}
                >
                  Submit Assessment
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 9: LAB GUIDE & FORENSIC REPORT TEMPLATE                        */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "lab-report" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                    <ListChecks size={14} />
                    <span>Lab Milestones &amp; SRE Report</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    Hands-On Web &amp; TLS Lab Checklist &amp; SRE Report
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-xl bg-orange-50 border border-orange-200 text-orange-700">
                    {completedChecksCount} / 8 Completed
                  </span>
                </div>
              </div>

              {/* 8-Point Lab Checklist */}
              <div className="space-y-2 mb-8">
                {[
                  { key: "c1", label: "Part A: Inspected HTTP response headers using 'curl -sS -D -' and verified Cache-Control & ETag." },
                  { key: "c2", label: "Part B: Simulated conditional 304 Not Modified requests with 'If-None-Match' validation." },
                  { key: "c3", label: "Part C: Executed 'openssl s_client' and validated certificate chain trust up to the Root CA." },
                  { key: "c4", label: "Part D: Verified Subject Alternative Name (SAN) wildcard matching (*.prepspaces.com)." },
                  { key: "c5", label: "Part E: Traced Wireshark packet capture filtering for 'tls.handshake.type == 1' (ClientHello)." },
                  { key: "c6", label: "Part F: Diagnosed upstream 502 Bad Gateway failure using reverse proxy error logs." },
                  { key: "c7", label: "Part G: Resolved infinite 301 redirect loop by correctly trusting 'X-Forwarded-Proto: https'." },
                  { key: "c8", label: "Part H: Completed the SRE Web Infrastructure & Connectivity Incident Report." },
                ].map((item) => (
                  <div
                    key={item.key}
                    onClick={() => toggleLabCheck(item.key)}
                    className="flex items-center gap-3 p-3 rounded-xl border border-[#e7e3da] bg-[#fbfaf7] hover:bg-stone-50 cursor-pointer transition select-none"
                  >
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition ${
                      labChecks[item.key]
                        ? "bg-emerald-600 border-emerald-600 text-white"
                        : "border-stone-300 bg-white"
                    }`}>
                      {labChecks[item.key] && <Check size={12} />}
                    </div>
                    <span className="text-xs text-stone-800 font-medium">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Copyable Markdown Report */}
              <div className="p-6 rounded-2xl bg-stone-900 text-white font-mono text-xs">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-800 text-stone-400 text-[10px] uppercase font-bold">
                  <span>Markdown Web Incident Report Template (SRE Standard)</span>
                  <button
                    onClick={() => copyToClipboard(webReportTemplate, "report")}
                    className="text-stone-300 hover:text-white flex items-center gap-1.5 cursor-pointer transition"
                  >
                    {copiedCodeId === "report" ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                    <span>{copiedCodeId === "report" ? "Report Copied" : "Copy Markdown"}</span>
                  </button>
                </div>
                <pre className="text-stone-300 text-[11px] leading-relaxed overflow-x-auto max-h-96 whitespace-pre-wrap">
                  {webReportTemplate}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* Footer Navigation Bar */}
        <div className="mt-10 pt-6 border-t border-[#e7e3da] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => {
              navigate("/learning/networks/dns");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#e7e3da] bg-white text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#ea580c] transition cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 11 — DNS &amp; Internet Naming</span>
          </button>

          <button
            onClick={() => {
              navigate("/learning/networks/wireless");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 text-xs font-bold text-white hover:bg-orange-600 transition cursor-pointer"
          >
            <span>Next: Module 13 — Wireless &amp; Mobile Networking</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
