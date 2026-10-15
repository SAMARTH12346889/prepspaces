import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  Lock,
  Terminal,
  Activity,
  ArrowRight,
  ArrowLeft,
  RefreshCw,
  Play,
  Sliders,
  CheckCircle2,
  Copy,
  Check,
  FileText,
  HelpCircle,
  Network,
  Layers,
  Server,
  Globe,
  Cpu,
  Radio,
  Eye,
  Zap,
  Flame,
  Bug,
  Key,
  Database,
  Search,
  Filter,
  BarChart2,
  Bell,
  Clock,
  ListFilter,
  CheckSquare,
  Code2,
  FileCode,
  Workflow,
} from "lucide-react";
import ModuleNav from "./ModuleNav";

export default function NetworkProgrammingAutomation() {
  const navigate = useNavigate();

  // Active navigation tab: curriculum | simulators | lab | quiz | audit
  const [activeTab, setActiveTab] = useState("curriculum");

  // Lab checklist state (0/8)
  const [checkedItems, setCheckedItems] = useState({});
  const toggleCheck = (idx) => {
    setCheckedItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Clipboard copy helper
  const [copiedKey, setCopiedKey] = useState(null);
  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  // ==========================================
  // SIMULATOR 1: Python Socket Lifecycle & Error Injection
  // ==========================================
  const [socketProto, setSocketProto] = useState("tcp"); // tcp | udp
  const [serverOnline, setServerOnline] = useState(true);
  const [simulateSlowServer, setSimulateSlowServer] = useState(false);
  const [clientStep, setClientStep] = useState("idle"); // idle | connecting | connected | error | timeout
  const [socketLog, setSocketLog] = useState([
    { id: 1, time: "12:00:01", msg: "Kernel socket subsystem ready. Loopback (127.0.0.1) available." },
  ]);

  const runSocketExchange = () => {
    setClientStep("connecting");
    const t = new Date().toLocaleTimeString().slice(3);

    if (!serverOnline) {
      setTimeout(() => {
        setClientStep("error");
        setSocketLog((prev) => [
          {
            id: Date.now(),
            time: t,
            type: "danger",
            msg: "ConnectionRefusedError: [Errno 111] Connection refused (No listener on 127.0.0.1:5050)",
          },
          ...prev.slice(0, 5),
        ]);
      }, 400);
      return;
    }

    if (simulateSlowServer) {
      setTimeout(() => {
        setClientStep("timeout");
        setSocketLog((prev) => [
          {
            id: Date.now(),
            time: t,
            type: "danger",
            msg: "TimeoutError: The connection attempt or read operation exceeded configured deadline of 3.0 seconds",
          },
          ...prev.slice(0, 5),
        ]);
      }, 1000);
      return;
    }

    // Normal successful exchange
    setTimeout(() => {
      setClientStep("connected");
      setSocketLog((prev) => [
        {
          id: Date.now(),
          time: t,
          type: "success",
          msg:
            socketProto === "tcp"
              ? "TCP 3-Way Handshake established on 127.0.0.1:5050. Sent: b'Hello from Python'. Recv: b'Received: Hello from Python' (1.42ms RTT)"
              : "UDP datagram transmitted to 127.0.0.1:5051. Received 21 bytes from ('127.0.0.1', 5051): b'ACK: Diagnostic probe'",
        },
        ...prev.slice(0, 5),
      ]);
    }, 400);
  };

  const resetSocketSimulator = () => {
    setClientStep("idle");
    setSocketLog([
      { id: Date.now(), time: "00:00", msg: "Simulator reset. Sockets closed cleanly via context managers." },
    ]);
  };

  // ==========================================
  // SIMULATOR 2: Dual-Stack DNS Resolution (socket.getaddrinfo)
  // ==========================================
  const [dnsTargetHost, setDnsTargetHost] = useState("example.com");
  const [dnsTargetPort, setDnsTargetPort] = useState(443);
  const [dnsFamilyFilter, setDnsFamilyFilter] = useState("AF_UNSPEC"); // AF_UNSPEC | AF_INET | AF_INET6
  const [dnsLookupResult, setDnsLookupResult] = useState(null);

  const runDnsLookup = () => {
    if (dnsTargetHost === "nxdomain-test.local") {
      setDnsLookupResult({
        host: dnsTargetHost,
        status: "error",
        error: "socket.gaierror: [Errno -2] Name or service not known (NXDOMAIN)",
        addresses: [],
      });
      return;
    }

    let records = [];
    if (dnsTargetHost === "example.com") {
      if (dnsFamilyFilter === "AF_UNSPEC" || dnsFamilyFilter === "AF_INET") {
        records.push({ family: "AF_INET (IPv4)", ip: "93.184.216.34", port: dnsTargetPort, canon: "example.com" });
      }
      if (dnsFamilyFilter === "AF_UNSPEC" || dnsFamilyFilter === "AF_INET6") {
        records.push({ family: "AF_INET6 (IPv6)", ip: "2606:2800:220:1:248:1893:25c8:1946", port: dnsTargetPort, canon: "example.com" });
      }
    } else if (dnsTargetHost === "google.com") {
      if (dnsFamilyFilter === "AF_UNSPEC" || dnsFamilyFilter === "AF_INET") {
        records.push({ family: "AF_INET (IPv4)", ip: "142.250.190.46", port: dnsTargetPort, canon: "google.com" });
      }
      if (dnsFamilyFilter === "AF_UNSPEC" || dnsFamilyFilter === "AF_INET6") {
        records.push({ family: "AF_INET6 (IPv6)", ip: "2607:f8b0:4005:808::200e", port: dnsTargetPort, canon: "google.com" });
      }
    } else {
      // Internal DB
      records.push({ family: "AF_INET (IPv4)", ip: "10.0.5.20", port: dnsTargetPort, canon: "internal-db.corp" });
    }

    setDnsLookupResult({
      host: dnsTargetHost,
      status: "resolved",
      addresses: records,
    });
  };

  // ==========================================
  // SIMULATOR 3: Multi-Target Concurrent TCP Latency Probe
  // ==========================================
  const [probeWorkers, setProbeWorkers] = useState(3);
  const [probeTimeout, setProbeTimeout] = useState(2.0);
  const [probeState, setProbeState] = useState(null);

  const initialTargets = [
    { name: "local-server", host: "127.0.0.1", port: 5050, expected: "reachable" },
    { name: "local-unused", host: "127.0.0.1", port: 5999, expected: "refused" },
    { name: "public-web", host: "93.184.216.34", port: 443, expected: "reachable" },
    { name: "filtered-sinkhole", host: "192.0.2.1", port: 80, expected: "timeout" },
  ];

  const runConcurrentProbes = () => {
    const results = initialTargets.map((t) => {
      if (t.expected === "reachable") {
        const lat = Math.round((0.4 + Math.random() * 22) * 100) / 100;
        return { ...t, status: "reachable", latency_ms: lat, color: "emerald" };
      } else if (t.expected === "refused") {
        return { ...t, status: "refused", error: "ConnectionRefusedError (No active listener)", color: "rose" };
      } else {
        return { ...t, status: "timeout", error: `TimeoutError (Exceeded ${probeTimeout}s limit)`, color: "amber" };
      }
    });

    setProbeState({
      completed: true,
      workersUsed: probeWorkers,
      timeoutEnforced: probeTimeout,
      targets: results,
      totalElapsed: 0.42, // Simulated asynchronous wall-clock
    });
  };

  // ==========================================
  // SIMULATOR 4: REST / NETCONF Automation & Idempotency Sandbox
  // ==========================================
  const [isIdempotentMode, setIsIdempotentMode] = useState(true);
  const [executionCount, setExecutionCount] = useState(0);
  const [autoRunResult, setAutoRunResult] = useState(null);

  const runVlanAutomation = () => {
    const newCount = executionCount + 1;
    setExecutionCount(newCount);

    if (isIdempotentMode) {
      // PUT /restconf/data/interfaces/vlan=20
      if (newCount === 1) {
        setAutoRunResult({
          method: "PUT",
          endpoint: "/restconf/data/ietf-interfaces:interfaces/interface=vlan20",
          statusCode: 201,
          statusText: "201 Created",
          color: "emerald",
          explanation: "INITIAL APPLICATION: State engine created VLAN 20. Switched from desired-state to running-config.",
          payload: `{"ietf-interfaces:interface":{"name":"vlan20","type":"iana-if-type:l2vlan","description":"Accounting-Subnet","enabled":true}}`,
        });
      } else {
        setAutoRunResult({
          method: "PUT",
          endpoint: "/restconf/data/ietf-interfaces:interfaces/interface=vlan20",
          statusCode: 200,
          statusText: "200 OK (Idempotent No-Op)",
          color: "blue",
          explanation: "IDEMPOTENT SUCCESS: Desired state matches current device running-config. No side-effects or duplicate VLANs created.",
          payload: `{"status":"no_change_required","current_state":"synchronized"}`,
        });
      }
    } else {
      // POST /api/vlans/create
      if (newCount === 1) {
        setAutoRunResult({
          method: "POST",
          endpoint: "/api/vlans/create",
          statusCode: 201,
          statusText: "201 Created",
          color: "emerald",
          explanation: "INITIAL CREATION: VLAN 20 created successfully.",
          payload: `{"action":"create","vlan_id":20,"status":"created"}`,
        });
      } else {
        setAutoRunResult({
          method: "POST",
          endpoint: "/api/vlans/create",
          statusCode: 409,
          statusText: "409 Conflict (Duplicate Object)",
          color: "rose",
          explanation: "NON-IDEMPOTENT ERROR: Script crashed on retry! API returned 409 Conflict because VLAN 20 already exists in hardware database.",
          payload: `{"error":"conflict","message":"VLAN 20 already exists on device. Use PUT or check existence before posting."}`,
        });
      }
    }
  };

  const resetAutomationSandbox = () => {
    setExecutionCount(0);
    setAutoRunResult(null);
  };

  // ==========================================
  // SIMULATOR 5: JSONL Diagnostics Log Parser & Health Metrics
  // ==========================================
  const rawJsonlData = [
    { timestamp: "2026-10-15T12:00:01Z", target: "auth-api", host: "10.0.1.10", port: 443, status: "reachable", latency_ms: 4.12 },
    { timestamp: "2026-10-15T12:00:02Z", target: "db-primary", host: "10.0.2.15", port: 5432, status: "reachable", latency_ms: 1.84 },
    { timestamp: "2026-10-15T12:00:03Z", target: "cache-node", host: "10.0.2.20", port: 6379, status: "reachable", latency_ms: 0.92 },
    { timestamp: "2026-10-15T12:00:04Z", target: "legacy-erp", host: "10.0.5.50", port: 8080, status: "refused", latency_ms: null },
    { timestamp: "2026-10-15T12:00:05Z", target: "ext-payment", host: "198.51.100.22", port: 443, status: "reachable", latency_ms: 48.5 },
    { timestamp: "2026-10-15T12:00:06Z", target: "bcdr-dr-site", host: "203.0.113.80", port: 443, status: "timeout", latency_ms: null },
    { timestamp: "2026-10-15T12:00:07Z", target: "dns-resolver", host: "10.0.0.2", port: 53, status: "reachable", latency_ms: 1.15 },
  ];

  const parsedMetrics = useMemo(() => {
    const total = rawJsonlData.length;
    const successes = rawJsonlData.filter((r) => r.status === "reachable");
    const failures = rawJsonlData.filter((r) => r.status !== "reachable");
    const latencies = successes.map((r) => r.latency_ms);

    const successRate = total > 0 ? (successes.length / total) * 100 : 0;
    const avgLatency = latencies.length > 0 ? latencies.reduce((a, b) => a + b, 0) / latencies.length : 0;

    // Median
    const sorted = [...latencies].sort((a, b) => a - b);
    const medianLatency = sorted.length > 0 ? sorted[Math.floor(sorted.length / 2)] : 0;

    return {
      total,
      successCount: successes.length,
      failureCount: failures.length,
      successRate: successRate.toFixed(1),
      avgLatency: avgLatency.toFixed(2),
      medianLatency: medianLatency.toFixed(2),
    };
  }, [rawJsonlData]);

  // ==========================================
  // QUIZ STATE (10 Questions)
  // ==========================================
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "Which TCP socket operation places a server socket into a passive state where it can queue incoming connection requests?",
      options: ["send()", "listen()", "recvfrom()", "getaddrinfo()"],
      correct: 1,
      explanation:
        "The listen() system call configures a bound TCP socket into passive listening mode, establishing the backlog queue to accept incoming 3-way handshakes.",
    },
    {
      id: 2,
      question: "What fundamental difference exists between TCP (SOCK_STREAM) and UDP (SOCK_DGRAM) message framing in socket programming?",
      options: [
        "TCP guarantees datagram boundaries, whereas UDP delivers a continuous byte stream",
        "TCP provides a continuous byte stream without application message boundaries; UDP preserves individual datagram boundaries",
        "UDP sockets must be placed in listen() mode before sending packets",
        "TCP does not require IP addresses, whereas UDP requires both MAC and IP addresses",
      ],
      correct: 1,
      explanation:
        "TCP is a byte-stream protocol where recv(1024) may return partial or multiple concatenated messages, requiring application-layer framing (e.g. length prefixes or delimiters). UDP delivers distinct datagrams whose boundaries are strictly preserved.",
    },
    {
      id: 3,
      question: "Why is the socket.SO_REUSEADDR option commonly set on server listening sockets prior to calling bind()?",
      options: [
        "It forces the router to forward packets using IPv6 multicast",
        "It allows the server to immediately re-bind to the local port even if previous sockets remain in the TIME_WAIT state",
        "It encrypts all socket buffers using hardware AES-NI",
        "It disables kernel TCP sequence number validation",
      ],
      correct: 1,
      explanation:
        "When a server closes or restarts, lingering TCP sockets stay in TIME_WAIT for 2*MSL. Setting SO_REUSEADDR allows the new process to bind immediately without raising 'Address already in use' OSError.",
    },
    {
      id: 4,
      question: "What does Python's socket.getaddrinfo() return when queried for a hostname?",
      options: [
        "Only the canonical hostname as a string",
        "A list of 5-tuples containing address family (IPv4/IPv6), socket type, protocol, canonical name, and socket address sockaddr",
        "A dictionary of BGP autonomous system numbers",
        "A raw binary PCAP capture file",
      ],
      correct: 1,
      explanation:
        "socket.getaddrinfo() is the modern dual-stack resolver API. It returns structured tuples (family, type, proto, canonname, sockaddr) supporting both IPv4 (AF_INET) and IPv6 (AF_INET6).",
    },
    {
      id: 5,
      question: "In concurrent network programming, why is ThreadPoolExecutor preferred over spawning an unbounded number of individual threads?",
      options: [
        "ThreadPoolExecutor automatically bypasses Python's Global Interpreter Lock (GIL) for CPU tasks",
        "It enforces bounded concurrency with a fixed worker pool, preventing thread explosion and resource exhaustion against remote network endpoints",
        "Threads cannot perform network socket operations in Python",
        "ThreadPoolExecutor converts TCP connections into UDP datagrams",
      ],
      correct: 1,
      explanation:
        "Unbounded thread creation can crash the operating system or trigger DDoS alarms on target services. A ThreadPoolExecutor bounds maximum concurrent connections (e.g. max_workers=10), queuing pending tasks cleanly.",
    },
    {
      id: 6,
      question: "What is the primary advantage of using Idempotent methods (such as PUT or NETCONF edit-config) in network automation scripts?",
      options: [
        "They run twice as fast as non-idempotent scripts",
        "Executing the operation multiple times leaves the target infrastructure in the exact same intended state without side-effects or duplicate errors",
        "They eliminate the need for TLS certificate verification",
        "They allow scripts to run without API tokens or passwords",
      ],
      correct: 1,
      explanation:
        "Idempotency guarantees that applying a configuration (e.g. 'Ensure VLAN 20 is named Accounting') multiple times results in the same desired state, enabling safe retries without 409 Conflict errors.",
    },
    {
      id: 7,
      question: "Which of the following is considered a critical security safeguard when developing network automation scripts?",
      options: [
        "Hardcoding administrator API tokens directly into Git repositories for easy deployment",
        "Using environment variables or secret vaults, enforcing least-privilege scopes, and strictly verifying TLS certificates",
        "Disabling all socket timeouts to allow indefinite waiting",
        "Logging full HTTP Authorization headers to text files for auditing",
      ],
      correct: 1,
      explanation:
        "Credentials must never be hardcoded or logged. They should be retrieved via environment variables or secret managers, scoped with least privilege (read-only for monitoring), and protected via verified TLS.",
    },
    {
      id: 8,
      question: "When measuring network connection duration in Python, why should time.perf_counter() be used instead of time.time()?",
      options: [
        "time.time() converts seconds to milliseconds automatically",
        "time.perf_counter() provides a monotonic, high-resolution clock unaffected by system clock adjustments or NTP step corrections",
        "time.time() is only supported on Linux kernels",
        "time.perf_counter() measures bandwidth throughput rather than time",
      ],
      correct: 1,
      explanation:
        "time.perf_counter() is a monotonic clock with the highest available resolution. Unlike time.time(), it never steps backwards during NTP synchronization or Daylight Saving adjustments.",
    },
    {
      id: 9,
      question: "In an automated network health inspector, what does an HTTP 429 status code signify?",
      options: [
        "The web service was successfully loaded",
        "The server is applying a rate limit and refusing further requests until a cooldown window expires",
        "The domain name does not exist in DNS (NXDOMAIN)",
        "The SSL/TLS certificate has expired",
      ],
      correct: 1,
      explanation:
        "HTTP 429 'Too Many Requests' indicates that the client has exceeded the server's rate limit. Automated scripts should back off exponentially and respect Retry-After headers.",
    },
    {
      id: 10,
      question: "Why must network diagnostics tools distinguish between a DNS resolution failure and a TCP connection failure?",
      options: [
        "DNS uses TCP while web services use UDP",
        "A host may resolve perfectly in DNS yet have its TCP port closed, filtered, or unresponsive; treating them as identical blinds engineers to root cause",
        "DNS lookups never fail in enterprise networks",
        "TCP connections do not require IP addresses if DNS is enabled",
      ],
      correct: 1,
      explanation:
        "DNS resolution (translating names to IPs) is independent of service reachability. A failure in DNS points to naming infrastructure, whereas a TCP timeout points to routing, firewall drops, or server process failures.",
    },
  ];

  const handleQuizSelect = (qId, optionIdx) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correct) score++;
    });
    return score;
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
  };

  // Copyable Markdown Deliverable Template
  const automationReportTemplate = `# NETWORK AUTOMATION & DIAGNOSTICS ASSESSMENT REPORT
**Run Reference:** NET-DIAG-2026-REPORT-021
**Automation Engineer:** Lead Network Automation & Reliability Engineer
**Execution Timestamp:** 2026-10-15T12:00:00Z
**Inspection Scope:** Corporate Core Services & Hybrid Cloud Edge

---

## 1. EXECUTIVE SUMMARY
An automated network health inspection was executed across seven mission-critical service endpoints using Python 3.10 and bounded concurrency (\`ThreadPoolExecutor(max_workers=4)\`). Out of 7 configured service targets, 5 targets (71.4%) demonstrated high availability and low latency. One target (\`legacy-erp\`) actively refused TCP connections, and one remote target (\`bcdr-dr-site\`) exceeded the strict 2.0-second timeout threshold.

Remediation tickets have been automatically dispatched via REST API to the infrastructure operations queue.

---

## 2. DIAGNOSTICS INVENTORY & TELEMETRY TABLE

| Target Name | Destination Host | Port | DNS Status | TCP Status | Latency (ms) | Diagnostic Finding |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **auth-api** | 10.0.1.10 | 443 | Resolved | Reachable | 4.12 ms | Healthy TLS 1.3 Service |
| **db-primary** | 10.0.2.15 | 5432 | Resolved | Reachable | 1.84 ms | PostgreSQL cluster responsive |
| **cache-node** | 10.0.2.20 | 6379 | Resolved | Reachable | 0.92 ms | Redis cache cluster nominal |
| **legacy-erp** | 10.0.5.50 | 8080 | Resolved | ConnectionRefused | — | Service daemon offline (TCP RST) |
| **ext-payment** | 198.51.100.22 | 443 | Resolved | Reachable | 48.50 ms | External gateway reachable |
| **bcdr-dr-site**| 203.0.113.80 | 443 | Resolved | TimeoutError | > 2000 ms | Route drop or firewall filtering |
| **dns-resolver**| 10.0.0.2 | 53 | Resolved | Reachable | 1.15 ms | Internal recursive resolver nominal |

---

## 3. AGGREGATE PERFORMANCE & RELIABILITY METRICS
- **Total Targets Checked ($N$):** 7
- **Successful Probes ($S$):** 5
- **Failed Probes ($F$):** 2
- **Availability / Success Rate:** 71.4% (\`S / N * 100\`)
- **Mean Latency (Reachable Targets):** 11.31 ms
- **Median Latency:** 1.84 ms
- **Timeout Rate:** 14.3% (1 timeout / 7 checks)

---

## 4. AUTOMATION SCRIPT ARCHITECTURE
\`\`\`python
import json
import socket
import time
from concurrent.futures import ThreadPoolExecutor

def check_target(target):
    host, port = target["host"], target["port"]
    start = time.perf_counter()
    try:
        with socket.create_connection((host, port), timeout=2.0):
            elapsed = (time.perf_counter() - start) * 1000
            return {"name": target["name"], "status": "reachable", "latency_ms": round(elapsed, 2)}
    except (TimeoutError, OSError) as exc:
        return {"name": target["name"], "status": "failed", "error": str(exc)}
\`\`\`

---

## 5. INCIDENT CONTAINMENT & ESCALATION ACTIONS
1. **Legacy ERP:** System administrators alerted to restart \`systemd\` service on host \`10.0.5.50\`.
2. **Disaster Recovery Gateway:** Firewall engineering team notified of transit packet drops to \`203.0.113.80\`.
3. **Idempotent Configuration:** Next hourly cron check scheduled for 2026-10-15 13:00 UTC.
`;

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 font-sans">
      <ModuleNav
        track="networks"
        currentModuleId="network-automation"
        showAiTutor={false}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Header */}
        <div className="flex items-center gap-2 text-xs font-mono text-stone-700 mb-4">
          <span>COMPUTER NETWORKS &amp; INTERNET ENGINEERING</span>
          <span>/</span>
          <span>MODULE 21</span>
          <span>/</span>
          <span className="text-[#ea580c] font-bold">NETWORK PROGRAMMING &amp; AUTOMATION</span>
        </div>

        {/* Title Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-200 flex items-center gap-1.5">
                <Code2 size={14} />
                Python 3 Network Engineering
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-[#ea580c] border border-orange-200">
                Sockets · APIs · Concurrency · JSONL
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-stone-100 text-stone-700 border border-stone-200">
                RESTCONF / NETCONF Idempotency
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono text-stone-700">
              <span>Suggested Study: 6–8 Hours · Hands-on Code</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-3">
            Network Programming and Automation
          </h1>
          <p className="text-stone-700 text-base sm:text-lg leading-relaxed max-w-4xl">
            Network programming enables software to communicate reliably over modern networks, while network automation manages infrastructure state through deterministic code and APIs. Master Python low-level TCP/UDP socket engineering, dual-stack DNS resolution, multi-target concurrent probing, RESTCONF/NETCONF idempotency, and structured telemetry parsing.
          </p>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-6 pt-6 border-t border-stone-100">
            <button
              onClick={() => setActiveTab("curriculum")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === "curriculum"
                  ? "bg-[#ea580c] text-white shadow-sm"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              <FileText size={15} />
              <span>1. Complete Curriculum (21.1–21.10)</span>
            </button>
            <button
              onClick={() => setActiveTab("simulators")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === "simulators"
                  ? "bg-[#ea580c] text-white shadow-sm"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              <Activity size={15} />
              <span>2. Interactive Sandboxes (5 Engines)</span>
            </button>
            <button
              onClick={() => setActiveTab("lab")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === "lab"
                  ? "bg-[#ea580c] text-white shadow-sm"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              <Terminal size={15} />
              <span>3. Practical Lab 21.1 (Checklist 0/8)</span>
            </button>
            <button
              onClick={() => setActiveTab("quiz")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === "quiz"
                  ? "bg-[#ea580c] text-white shadow-sm"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              <HelpCircle size={15} />
              <span>4. Knowledge Check (10 Questions)</span>
            </button>
            <button
              onClick={() => setActiveTab("audit")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === "audit"
                  ? "bg-[#ea580c] text-white shadow-sm"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              <ShieldCheck size={15} />
              <span>5. SRE Diagnostic Deliverable</span>
            </button>
          </div>
        </div>

        {/* TAB 1: CURRICULUM */}
        {activeTab === "curriculum" && (
          <div className="space-y-8">
            {/* 21.1 Network Programming Fundamentals */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  SECTION 21.1
                </span>
                <span className="text-xs font-semibold text-stone-700">OS Socket Abstraction</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                21.1 Network Programming Fundamentals &amp; The Socket Interface
              </h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                A <strong>socket</strong> is an operating-system-level communication endpoint that applications use to send and receive data across a network. Standardized by the Berkeley Sockets API, sockets decouple application business logic from underlying network device drivers and transport protocol state engines:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-5">
                <div className="p-4 rounded-2xl bg-[#f6f4ee] border border-stone-200">
                  <span className="text-xs font-mono font-bold text-blue-700 block mb-1">SOCK_STREAM</span>
                  <h4 className="font-bold text-stone-900 text-sm mb-1">TCP Protocol</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Reliable, ordered, two-way byte stream with flow control and retransmissions. Delivers continuous stream without packet boundaries.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#f6f4ee] border border-stone-200">
                  <span className="text-xs font-mono font-bold text-emerald-700 block mb-1">SOCK_DGRAM</span>
                  <h4 className="font-bold text-stone-900 text-sm mb-1">UDP Protocol</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Connectionless, independent datagrams. Preserves exact message boundaries, but does not guarantee delivery or ordering.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#f6f4ee] border border-stone-200">
                  <span className="text-xs font-mono font-bold text-purple-700 block mb-1">AF_INET</span>
                  <h4 className="font-bold text-stone-900 text-sm mb-1">IPv4 Addressing</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    32-bit addresses formatted as dotted-quad strings (e.g. <code>127.0.0.1</code>) paired with 16-bit transport port numbers.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#f6f4ee] border border-stone-200">
                  <span className="text-xs font-mono font-bold text-orange-700 block mb-1">AF_INET6</span>
                  <h4 className="font-bold text-stone-900 text-sm mb-1">IPv6 Addressing</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    128-bit addresses formatted as colon-hexadecimal strings (e.g. <code>::1</code>) with scope IDs and flow info.
                  </p>
                </div>
              </div>
            </div>

            {/* 21.2 Building TCP Clients & Servers */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  SECTION 21.2
                </span>
                <span className="text-xs font-semibold text-stone-700">TCP Engineering</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                21.2 Building Robust TCP Clients and Servers with Python
              </h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                A reliable TCP server executes a strict sequence of system calls: <code>socket() &rarr; bind() &rarr; listen() &rarr; accept() &rarr; recv()/sendall() &rarr; close()</code>. Below is the production-grade implementation pattern utilizing Python context managers:
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-5">
                <div className="p-4 rounded-2xl bg-stone-950 text-stone-200 font-mono text-xs overflow-x-auto">
                  <div className="text-stone-400 mb-2">// tcp_server.py</div>
                  <pre className="text-emerald-400 whitespace-pre-wrap">{`import socket

HOST = "127.0.0.1"
PORT = 5050

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    s.bind((HOST, PORT))
    s.listen(5)
    print(f"Listening on {HOST}:{PORT}")
    while True:
        conn, addr = s.accept()
        with conn:
            conn.settimeout(5.0)
            data = conn.recv(1024)
            if data:
                conn.sendall(b"Received: " + data)`}</pre>
                </div>

                <div className="p-4 rounded-2xl bg-stone-950 text-stone-200 font-mono text-xs overflow-x-auto">
                  <div className="text-stone-400 mb-2">// tcp_client.py</div>
                  <pre className="text-blue-400 whitespace-pre-wrap">{`import socket

HOST = "127.0.0.1"
PORT = 5050

try:
    with socket.create_connection((HOST, PORT), timeout=3.0) as client:
        client.sendall(b"Hello from Python")
        resp = client.recv(1024)
        print("Response:", resp.decode("utf-8"))
except ConnectionRefusedError:
    print("Error: Port is closed or server is not listening")
except TimeoutError:
    print("Error: Operation exceeded deadline (3.0s)")
except OSError as exc:
    print(f"Socket error: {exc}")`}</pre>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 leading-relaxed flex items-start gap-3">
                <AlertTriangle className="text-amber-600 shrink-0 mt-0.5" size={16} />
                <div>
                  <span className="font-bold">Message Framing Notice:</span> Because TCP provides an unstructured stream of bytes, <code>recv(1024)</code> reads up to 1,024 bytes currently in the kernel receive buffer. Production network protocols must enforce explicit message delimiters (e.g. <code>\r\n</code>) or fixed-length headers specifying payload length to handle fragmented or concatenated packets.
                </div>
              </div>
            </div>

            {/* 21.3 Implementing UDP Datagram Services */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  SECTION 21.3
                </span>
                <span className="text-xs font-semibold text-stone-700">Connectionless Sockets</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                21.3 Implementing UDP Datagram Services and Timeout Handling
              </h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                UDP operates without connection setup. Senders transmit self-contained datagrams using <code>sendto(data, address)</code>, and receivers retrieve them with <code>recvfrom(buffer_size)</code>.
              </p>

              <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs my-4 overflow-x-auto">
                <div className="text-emerald-400 mb-1">// Python UDP Client with Explicit Socket Timeout</div>
                <div>with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as client:</div>
                <div className="pl-4">client.settimeout(2.0) &nbsp;<span className="text-stone-400"># Enforce 2-second timeout budget</span></div>
                <div className="pl-4">client.sendto(b&quot;Diagnostic Probe&quot;, (&quot;127.0.0.1&quot;, 5051))</div>
                <div className="pl-4">try:</div>
                <div className="pl-8">data, addr = client.recvfrom(2048)</div>
                <div className="pl-8">print(f&quot;Received reply from &#123;addr&#125;: &#123;data&#125;&quot;)</div>
                <div className="pl-4">except TimeoutError:</div>
                <div className="pl-8 text-amber-400">print(&quot;No UDP response received before deadline. (Packet lost or filtered)&quot;)</div>
              </div>
            </div>

            {/* 21.4 Programmatic DNS Lookups */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  SECTION 21.4
                </span>
                <span className="text-xs font-semibold text-stone-700">Dual-Stack Resolution</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                21.4 Programmatic DNS Lookups with socket.getaddrinfo()
              </h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                Older Python code often used <code>socket.gethostbyname()</code>, which only supports IPv4. Modern production tools must use <code>socket.getaddrinfo()</code> to support dual-stack IPv4/IPv6 networks and RFC 8305 Happy Eyeballs:
              </p>

              <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs my-4 overflow-x-auto">
                <div className="text-emerald-400">// Resolving both A (IPv4) and AAAA (IPv6) records:</div>
                <div>results = socket.getaddrinfo(&quot;example.com&quot;, 443, type=socket.SOCK_STREAM)</div>
                <div>for family, socktype, proto, canonname, sockaddr in results:</div>
                <div className="pl-4">ip_addr = sockaddr[0]</div>
                <div className="pl-4">family_label = &quot;IPv6&quot; if family == socket.AF_INET6 else &quot;IPv4&quot;</div>
                <div className="pl-4">print(f&quot;[&#123;family_label&#125;] &#123;ip_addr&#125;:443&quot;)</div>
              </div>
            </div>

            {/* 21.5 Programmatic HTTP Requests */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  SECTION 21.5
                </span>
                <span className="text-xs font-semibold text-stone-700">HTTP Protocol Health Checking</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                21.5 HTTP/HTTPS Requests, Status Codes, and TLS Validation
              </h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                When building diagnostic probes, status codes must be semantically triaged rather than assuming any non-200 response is an infrastructure outage:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="w-full text-xs text-left border border-stone-200 rounded-xl overflow-hidden">
                  <thead className="bg-stone-100 text-stone-800 font-mono">
                    <tr>
                      <th className="p-3">Status Class</th>
                      <th className="p-3">Semantic Meaning</th>
                      <th className="p-3">Diagnostic Interpretation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-700">
                    <tr>
                      <td className="p-3 font-mono font-bold text-emerald-700">200–299</td>
                      <td className="p-3 font-semibold">Success</td>
                      <td className="p-3">Application endpoint is healthy and returning valid responses.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono font-bold text-blue-700">301 / 302</td>
                      <td className="p-3 font-semibold">Redirection</td>
                      <td className="p-3">Target moved; probe should bound redirect depth and check destination scope.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono font-bold text-amber-700">401 / 403</td>
                      <td className="p-3 font-semibold">Auth Required / Denied</td>
                      <td className="p-3">Network connectivity and web server are operational; API token missing or expired.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono font-bold text-purple-700">429</td>
                      <td className="p-3 font-semibold">Too Many Requests</td>
                      <td className="p-3">Script is exceeding rate limit; exponential backoff must be engaged.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono font-bold text-rose-700">500–599</td>
                      <td className="p-3 font-semibold">Server Error</td>
                      <td className="p-3">Internal server or upstream gateway failure (e.g. 502 Bad Gateway / 504 Gateway Timeout).</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 21.6 Concurrency & Thread Pools */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  SECTION 21.6
                </span>
                <span className="text-xs font-semibold text-stone-700">High-Throughput Probing</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                21.6 Concurrency with ThreadPoolExecutor &amp; High-Resolution Timing
              </h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                Sequential probing across hundreds of network endpoints can take minutes. Using <code>concurrent.futures.ThreadPoolExecutor</code> bounds concurrency, executing parallel I/O-bound socket checks while measuring latency accurately with <code>time.perf_counter()</code>:
              </p>

              <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs my-4 overflow-x-auto">
                <div className="text-emerald-400">// Measuring exact TCP latency with high-resolution timers:</div>
                <div>start = time.perf_counter()</div>
                <div>with socket.create_connection((host, port), timeout=2.0):</div>
                <div className="pl-4 text-blue-300">elapsed_ms = (time.perf_counter() - start) * 1000</div>
                <div>return &#123;&quot;host&quot;: host, &quot;port&quot;: port, &quot;status&quot;: &quot;reachable&quot;, &quot;latency_ms&quot;: round(elapsed_ms, 2)&#125;</div>
              </div>
            </div>

            {/* 21.7 Infrastructure Automation & Idempotency */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  SECTION 21.7
                </span>
                <span className="text-xs font-semibold text-stone-700">Modern Infrastructure APIs</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                21.7 Network Configuration Automation &amp; The Principle of Idempotency
              </h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                Modern enterprise networks configure switches, routers, and firewalls using programmatic model-driven interfaces:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5">
                <div className="p-4 rounded-2xl bg-[#f6f4ee] border border-stone-200">
                  <h4 className="font-bold text-stone-900 text-sm mb-1">RESTCONF (RFC 8040)</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    HTTP/HTTPS-based access to YANG data models using JSON/XML payloads. Employs standard HTTP verbs (<code>GET</code>, <code>PUT</code>, <code>POST</code>, <code>DELETE</code>).
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#f6f4ee] border border-stone-200">
                  <h4 className="font-bold text-stone-900 text-sm mb-1">NETCONF (RFC 6241)</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    RPC-based protocol over secure SSH sessions using XML schemas. Operates distinct <code>candidate</code>, <code>running</code>, and <code>startup</code> configuration datastores.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#f6f4ee] border border-stone-200">
                  <h4 className="font-bold text-stone-900 text-sm mb-1">The Idempotency Imperative</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Repeating an automation action should guarantee the exact same running state without creating duplicate entities or raising unexpected error codes.
                  </p>
                </div>
              </div>
            </div>

            {/* 21.8 Structured Logging & JSONL */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  SECTION 21.8
                </span>
                <span className="text-xs font-semibold text-stone-700">Telemetry &amp; Reporting</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                21.8 Structured Logging, Metrics Telemetry &amp; JSON Lines (JSONL)
              </h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                Plain text logs like <code>&quot;connection failed&quot;</code> cannot be parsed reliably by SIEM or monitoring pipelines. Production tools emit <strong>JSON Lines (JSONL)</strong>, where each event is a standalone, valid JSON object on its own line:
              </p>

              <div className="p-4 rounded-2xl bg-stone-950 text-stone-300 font-mono text-xs my-4 overflow-x-auto">
                <div className="text-stone-700 mb-1">// diagnostics.jsonl sample record:</div>
                <div>&#123;&quot;timestamp&quot;: &quot;2026-10-15T12:00:00Z&quot;, &quot;target&quot;: &quot;auth-api&quot;, &quot;host&quot;: &quot;10.0.1.10&quot;, &quot;port&quot;: 443, &quot;status&quot;: &quot;reachable&quot;, &quot;latency_ms&quot;: 4.12&#125;</div>
              </div>
            </div>

            {/* 21.9 Secure Credential Management */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  SECTION 21.9
                </span>
                <span className="text-xs font-semibold text-stone-700">Automation Security</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                21.9 Secure Credential Handling and Automation Safeguards
              </h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                An automation script with elevated network credentials poses a high blast-radius risk. Network reliability engineers implement non-negotiable safeguards:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5 text-xs">
                <div className="p-4 bg-[#f6f4ee] rounded-2xl border border-stone-200">
                  <span className="font-bold text-stone-900 block mb-1">1. Zero Hardcoded Secrets</span>
                  <p className="text-stone-600">Retrieve credentials dynamically from environment variables or secrets managers (e.g. HashiCorp Vault, AWS Secrets Manager). Never commit tokens to Git.</p>
                </div>
                <div className="p-4 bg-[#f6f4ee] rounded-2xl border border-stone-200">
                  <span className="font-bold text-stone-900 block mb-1">2. Strict Input Validation</span>
                  <p className="text-stone-600">Validate port numbers (1–65535), target hostnames, and IP strings prior to executing socket operations to prevent argument injection.</p>
                </div>
                <div className="p-4 bg-[#f6f4ee] rounded-2xl border border-stone-200">
                  <span className="font-bold text-stone-900 block mb-1">3. Token Redaction in Logs</span>
                  <p className="text-stone-600">Explicitly scrub <code>Authorization: Bearer [REDACTED]</code> headers and passwords from all debug logs and error stack traces.</p>
                </div>
                <div className="p-4 bg-[#f6f4ee] rounded-2xl border border-stone-200">
                  <span className="font-bold text-stone-900 block mb-1">4. Pre-Checks &amp; Automated Rollback</span>
                  <p className="text-stone-600">Capture device state prior to pushing changes. Verify post-change telemetry; if health checks fail, revert automatically to candidate datastore.</p>
                </div>
              </div>
            </div>

            {/* 21.10 Diagnostics Engine Architecture */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  SECTION 21.10
                </span>
                <span className="text-xs font-semibold text-stone-700">Architecture Blueprint</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                21.10 Architecture of a Production Network Diagnostics Engine
              </h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                A robust CLI diagnostics engine is composed of four decoupled stages: Configuration Validation &rarr; Concurrent DNS/TCP Probing &rarr; Telemetry &amp; Latency Collection &rarr; Machine-Readable Reporting (JSON/JSONL).
              </p>
            </div>
          </div>
        )}

        {/* TAB 2: INTERACTIVE SIMULATORS */}
        {activeTab === "simulators" && (
          <div className="space-y-10">
            {/* SIMULATOR 1: Socket Lifecycle Sandbox */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                    SIMULATOR 1
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mt-2">
                    Python TCP/UDP Socket Lifecycle &amp; Error Injection Sandbox
                  </h3>
                </div>
                <button
                  onClick={resetSocketSimulator}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-300 text-xs font-semibold text-stone-700 hover:bg-stone-100 transition cursor-pointer"
                >
                  <RefreshCw size={13} />
                  Reset Sockets
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      Transport Socket Type:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setSocketProto("tcp")}
                        className={`py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                          socketProto === "tcp"
                            ? "bg-[#ea580c] text-white shadow-sm"
                            : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                        }`}
                      >
                        TCP (SOCK_STREAM)
                      </button>
                      <button
                        onClick={() => setSocketProto("udp")}
                        className={`py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                          socketProto === "udp"
                            ? "bg-[#ea580c] text-white shadow-sm"
                            : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                        }`}
                      >
                        UDP (SOCK_DGRAM)
                      </button>
                    </div>
                  </div>

                  <div className="p-3 bg-[#f6f4ee] rounded-xl border border-stone-200 space-y-2">
                    <span className="text-xs font-bold text-stone-800 block">Failure Injection Controls:</span>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-stone-700">Server Listener Active:</span>
                      <button
                        onClick={() => setServerOnline(!serverOnline)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-bold text-white transition cursor-pointer ${
                          serverOnline ? "bg-emerald-600" : "bg-rose-600"
                        }`}
                      >
                        {serverOnline ? "ONLINE (5050)" : "OFFLINE (Closed)"}
                      </button>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-stone-700">Simulate Response Delay:</span>
                      <button
                        onClick={() => setSimulateSlowServer(!simulateSlowServer)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-bold text-white transition cursor-pointer ${
                          simulateSlowServer ? "bg-amber-600" : "bg-stone-600"
                        }`}
                      >
                        {simulateSlowServer ? "DELAY > 3.0s" : "FAST (<5ms)"}
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={runSocketExchange}
                    className="w-full py-2.5 bg-stone-900 hover:bg-[#ea580c] text-white rounded-xl text-xs font-bold transition cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Play size={14} />
                    Execute Python Client Socket Probe
                  </button>
                </div>

                <div className="md:col-span-2 space-y-4">
                  {/* Socket State Card */}
                  <div className="p-4 bg-[#f6f4ee] rounded-2xl border border-stone-200 font-mono text-xs">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-200">
                      <span className="text-stone-700 font-bold">KERNEL SOCKET TABLE (netstat / ss):</span>
                      <span
                        className={`px-2.5 py-0.5 rounded text-[10px] font-bold ${
                          clientStep === "connected"
                            ? "bg-emerald-100 text-emerald-800"
                            : clientStep === "error" || clientStep === "timeout"
                            ? "bg-rose-100 text-rose-800"
                            : "bg-stone-200 text-stone-700"
                        }`}
                      >
                        STATUS: {clientStep.toUpperCase()}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px] mb-3">
                      <div><span className="text-stone-700">Local Endpoint:</span> 127.0.0.1:{socketProto === "tcp" ? "54210" : "54211"}</div>
                      <div><span className="text-stone-700">Remote Endpoint:</span> 127.0.0.1:{socketProto === "tcp" ? "5050" : "5051"}</div>
                      <div><span className="text-stone-700">Socket Inode State:</span> {socketProto === "tcp" ? (clientStep === "connected" ? "ESTABLISHED" : serverOnline ? "LISTEN" : "CLOSED") : "UNCONNECTED_DATAGRAM"}</div>
                      <div><span className="text-stone-700">Timeout Budget:</span> 3.0 Seconds (Enforced)</div>
                    </div>

                    {/* Event Log Output */}
                    <div className="space-y-1.5 pt-2 border-t border-stone-200 max-h-36 overflow-y-auto">
                      {socketLog.map((log) => (
                        <div
                          key={log.id}
                          className={`text-[11px] leading-relaxed ${
                            log.type === "danger"
                              ? "text-rose-600 font-bold"
                              : log.type === "success"
                              ? "text-emerald-700 font-semibold"
                              : "text-stone-600"
                          }`}
                        >
                          [{log.time}] {log.msg}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SIMULATOR 2: Dual-Stack DNS Resolution */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                    SIMULATOR 2
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mt-2">
                    Dual-Stack DNS Resolution Dissector (socket.getaddrinfo)
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">Target Hostname:</label>
                    <select
                      value={dnsTargetHost}
                      onChange={(e) => setDnsTargetHost(e.target.value)}
                      className="w-full text-xs font-semibold p-2 rounded-xl border border-stone-300 bg-white"
                    >
                      <option value="example.com">example.com (Dual-Stack IPv4 & IPv6)</option>
                      <option value="google.com">google.com (High Availability CDN)</option>
                      <option value="internal-db.corp">internal-db.corp (Private IPv4 Only)</option>
                      <option value="nxdomain-test.local">nxdomain-test.local (Non-Existent Host)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">Address Family Filter:</label>
                    <select
                      value={dnsFamilyFilter}
                      onChange={(e) => setDnsFamilyFilter(e.target.value)}
                      className="w-full text-xs font-semibold p-2 rounded-xl border border-stone-300 bg-white"
                    >
                      <option value="AF_UNSPEC">AF_UNSPEC (Return both IPv4 and IPv6)</option>
                      <option value="AF_INET">AF_INET (IPv4 A records only)</option>
                      <option value="AF_INET6">AF_INET6 (IPv6 AAAA records only)</option>
                    </select>
                  </div>

                  <button
                    onClick={runDnsLookup}
                    className="w-full py-2.5 bg-stone-900 hover:bg-[#ea580c] text-white rounded-xl text-xs font-bold transition cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Search size={14} />
                    Call socket.getaddrinfo()
                  </button>
                </div>

                <div className="md:col-span-2 p-5 rounded-2xl bg-[#f6f4ee] border border-stone-200 font-mono text-xs">
                  <span className="text-xs font-bold text-stone-800 block mb-2">PYTHON RESOLVER OUTPUT:</span>

                  {dnsLookupResult ? (
                    dnsLookupResult.status === "error" ? (
                      <div className="p-3 bg-rose-50 border border-rose-300 rounded-xl text-rose-950">
                        <span className="font-bold block mb-1">DNS RESOLUTION EXCEPTION:</span>
                        {dnsLookupResult.error}
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {dnsLookupResult.addresses.map((rec, i) => (
                          <div key={i} className="p-3 bg-white rounded-xl border border-stone-200 flex items-center justify-between">
                            <div>
                              <span className="font-bold text-[#ea580c] block text-xs">{rec.family}</span>
                              <span className="text-stone-900 text-sm font-bold">{rec.ip}</span>
                            </div>
                            <span className="text-stone-700 text-[11px]">Port: {rec.port} (TCP/HTTPS)</span>
                          </div>
                        ))}
                      </div>
                    )
                  ) : (
                    <div className="p-6 text-center text-xs text-stone-700">
                      Select target and click &quot;Call socket.getaddrinfo()&quot;.
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* SIMULATOR 3: Multi-Target Concurrent TCP Latency Probe */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                    SIMULATOR 3
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mt-2">
                    Multi-Target Concurrent TCP Latency Probe (ThreadPoolExecutor)
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-bold text-stone-700 mb-1">
                      <span>Thread Pool Size (max_workers):</span>
                      <span className="font-mono text-[#ea580c] font-bold">{probeWorkers} Threads</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={8}
                      value={probeWorkers}
                      onChange={(e) => setProbeWorkers(Number(e.target.value))}
                      className="w-full accent-orange-600"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold text-stone-700 mb-1">
                      <span>Per-Socket Timeout Budget:</span>
                      <span className="font-mono text-[#ea580c] font-bold">{probeTimeout}s</span>
                    </div>
                    <input
                      type="range"
                      min={0.5}
                      max={5.0}
                      step={0.5}
                      value={probeTimeout}
                      onChange={(e) => setProbeTimeout(Number(e.target.value))}
                      className="w-full accent-orange-600"
                    />
                  </div>

                  <button
                    onClick={runConcurrentProbes}
                    className="w-full py-2.5 bg-stone-900 hover:bg-[#ea580c] text-white rounded-xl text-xs font-bold transition cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Play size={14} />
                    Dispatch Parallel Probes
                  </button>
                </div>

                <div className="md:col-span-2 space-y-3 font-mono text-xs">
                  <div className="text-xs font-bold text-stone-800">DISPATCHED PROBE TELEMETRY:</div>
                  {probeState ? (
                    <div className="space-y-2">
                      {probeState.targets.map((t, idx) => (
                        <div key={idx} className="p-3 bg-white rounded-xl border border-stone-200 flex items-center justify-between">
                          <div>
                            <span className="font-bold text-stone-900 block">{t.name} ({t.host}:{t.port})</span>
                            <span className="text-[11px] text-stone-700">
                              {t.status === "reachable" ? `Latency: ${t.latency_ms} ms` : t.error}
                            </span>
                          </div>
                          <span
                            className={`px-2.5 py-0.5 rounded text-[10px] font-bold ${
                              t.color === "emerald"
                                ? "bg-emerald-100 text-emerald-800"
                                : t.color === "rose"
                                ? "bg-rose-100 text-rose-800"
                                : "bg-amber-100 text-amber-800"
                            }`}
                          >
                            {t.status.toUpperCase()}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-8 text-center text-stone-700 bg-[#f6f4ee] rounded-xl border border-dashed border-stone-300">
                      Click &quot;Dispatch Parallel Probes&quot; to test concurrent threads.
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* SIMULATOR 4: REST / NETCONF Idempotency Sandbox */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                    SIMULATOR 4
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mt-2">
                    RESTCONF / NETCONF Infrastructure Automation &amp; Idempotency Engine
                  </h3>
                </div>
                <button
                  onClick={resetAutomationSandbox}
                  className="px-3 py-1.5 rounded-xl border border-stone-300 text-xs font-semibold text-stone-700 hover:bg-stone-100 transition cursor-pointer"
                >
                  Reset Device State
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      Automation Script Strategy:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => {
                          setIsIdempotentMode(true);
                          resetAutomationSandbox();
                        }}
                        className={`py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                          isIdempotentMode ? "bg-emerald-600 text-white" : "bg-stone-100 text-stone-700"
                        }`}
                      >
                        Idempotent (PUT)
                      </button>
                      <button
                        onClick={() => {
                          setIsIdempotentMode(false);
                          resetAutomationSandbox();
                        }}
                        className={`py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                          !isIdempotentMode ? "bg-rose-600 text-white" : "bg-stone-100 text-stone-700"
                        }`}
                      >
                        Non-Idempotent (POST)
                      </button>
                    </div>
                  </div>

                  <div className="p-3 bg-[#f6f4ee] rounded-xl border border-stone-200 text-xs">
                    <span className="font-bold text-stone-800 block mb-1">Action: Configure VLAN 20</span>
                    <span className="text-stone-600 block">Current Runs: {executionCount} times</span>
                  </div>

                  <button
                    onClick={runVlanAutomation}
                    className="w-full py-2.5 bg-stone-900 hover:bg-[#ea580c] text-white rounded-xl text-xs font-bold transition cursor-pointer"
                  >
                    Execute Script Run #{executionCount + 1}
                  </button>
                </div>

                <div className="md:col-span-2 p-5 rounded-2xl bg-[#f6f4ee] border border-stone-200 font-mono text-xs space-y-3">
                  <div className="text-xs font-bold text-stone-800">RESTCONF DEVICE API EXCHANGE:</div>
                  {autoRunResult ? (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-stone-200">
                        <div>
                          <span className="font-bold text-stone-900">{autoRunResult.method} {autoRunResult.endpoint}</span>
                          <span className="text-stone-700 text-[10px] block">Authorization: Bearer [REDACTED_API_TOKEN]</span>
                        </div>
                        <span
                          className={`px-2.5 py-0.5 rounded font-bold text-xs ${
                            autoRunResult.color === "emerald"
                              ? "bg-emerald-100 text-emerald-800"
                              : autoRunResult.color === "blue"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-rose-100 text-rose-800"
                          }`}
                        >
                          {autoRunResult.statusText}
                        </span>
                      </div>

                      <div className="p-3 bg-white rounded-xl border border-stone-200 font-sans text-xs text-stone-800">
                        {autoRunResult.explanation}
                      </div>

                      <div className="p-3 bg-stone-950 text-stone-300 rounded-xl border border-stone-800 text-[11px] leading-relaxed">
                        <span className="text-stone-700 block mb-1">// API Response Body:</span>
                        {autoRunResult.payload}
                      </div>
                    </div>
                  ) : (
                    <div className="p-6 text-center text-xs text-stone-700">
                      Click &quot;Execute Script Run&quot; to test idempotency behavior.
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* SIMULATOR 5: JSONL Diagnostics Log Parser */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                    SIMULATOR 5
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mt-2">
                    Streaming JSON Lines (JSONL) Diagnostics Parser &amp; Metrics Dashboard
                  </h3>
                </div>
              </div>

              {/* Metric KPI Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 font-mono text-center">
                <div className="p-4 bg-[#f6f4ee] rounded-2xl border border-stone-200">
                  <span className="text-[10px] text-stone-700 block font-bold">TOTAL PROBES (N)</span>
                  <span className="text-2xl font-extrabold text-stone-900">{parsedMetrics.total}</span>
                </div>
                <div className="p-4 bg-[#f6f4ee] rounded-2xl border border-stone-200">
                  <span className="text-[10px] text-stone-700 block font-bold">SUCCESS RATE</span>
                  <span className="text-2xl font-extrabold text-emerald-700">{parsedMetrics.successRate}%</span>
                </div>
                <div className="p-4 bg-[#f6f4ee] rounded-2xl border border-stone-200">
                  <span className="text-[10px] text-stone-700 block font-bold">MEAN LATENCY</span>
                  <span className="text-2xl font-extrabold text-[#ea580c]">{parsedMetrics.avgLatency} ms</span>
                </div>
                <div className="p-4 bg-[#f6f4ee] rounded-2xl border border-stone-200">
                  <span className="text-[10px] text-stone-700 block font-bold">MEDIAN LATENCY</span>
                  <span className="text-2xl font-extrabold text-blue-700">{parsedMetrics.medianLatency} ms</span>
                </div>
              </div>

              {/* JSONL Stream Viewer */}
              <div className="bg-stone-950 p-4 rounded-2xl border border-stone-800 font-mono text-xs text-stone-300">
                <div className="text-stone-700 mb-2 flex items-center justify-between text-[11px]">
                  <span>STREAMING DIAGNOSTICS.JSONL LOG FILE</span>
                  <span>{rawJsonlData.length} RECORDS IN BUFFER</span>
                </div>
                <div className="space-y-1.5 max-h-48 overflow-y-auto">
                  {rawJsonlData.map((rec, i) => (
                    <div key={i} className="text-[11px] leading-relaxed truncate">
                      <span className="text-stone-700">[{rec.timestamp}]</span> &#123;&quot;target&quot;: &quot;{rec.target}&quot;, &quot;host&quot;: &quot;{rec.host}&quot;, &quot;port&quot;: {rec.port}, &quot;status&quot;: &quot;{rec.status}&quot;{rec.latency_ms !== null ? `, "latency_ms": ${rec.latency_ms}` : ""} &#125;
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PRACTICAL LAB 21.1 */}
        {activeTab === "lab" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
              <div>
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  LAB 21.1
                </span>
                <h2 className="text-2xl font-bold text-stone-900 mt-2">
                  Building the Network Health Inspector in Python
                </h2>
                <p className="text-stone-700 text-xs mt-1">
                  Complete the 8-point readiness checklist to build, validate, and package your diagnostic CLI tool.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-stone-700">
                  Progress: {Object.values(checkedItems).filter(Boolean).length} / 8 Completed
                </span>
                <button
                  onClick={() => setCheckedItems({})}
                  className="px-3 py-1.5 rounded-xl border border-stone-300 text-xs font-semibold text-stone-700 hover:bg-stone-100 transition cursor-pointer"
                >
                  Reset Checklist
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  id: 1,
                  title: "1. Build and Run Local TCP Server & Client on Loopback",
                  cmd: "python tcp_server.py & \npython tcp_client.py",
                  desc: "Demonstrate socket bind, listen, accept, and clean termination with SO_REUSEADDR.",
                },
                {
                  id: 2,
                  title: "2. Implement UDP Datagram Service with Timeout Handling",
                  cmd: "python udp_server.py & \npython udp_client.py",
                  desc: "Verify connectionless datagram exchange with client.settimeout(2.0) error trapping.",
                },
                {
                  id: 3,
                  title: "3. Implement Dual-Stack DNS Resolver with socket.getaddrinfo",
                  cmd: "python -c \"import socket; print(socket.getaddrinfo('example.com', 443))\"",
                  desc: "Resolve and sort A and AAAA records, cleanly catching socket.gaierror for invalid hosts.",
                },
                {
                  id: 4,
                  title: "4. Build Programmatic HTTP Status Checker with urllib.request",
                  cmd: "python -c \"from urllib.request import urlopen; print(urlopen('https://example.com', timeout=3).status)\"",
                  desc: "Test status codes and enforce default TLS certificate validation.",
                },
                {
                  id: 5,
                  title: "5. Configure Multi-Target Inventory with Reachable & Failure Ports",
                  cmd: "cat << 'EOF' > targets.json\n[\n  {\"name\": \"local-ok\", \"host\": \"127.0.0.1\", \"port\": 5050},\n  {\"name\": \"local-refused\", \"host\": \"127.0.0.1\", \"port\": 5999}\n]\nEOF",
                  desc: "Define authorized targets to demonstrate both successful and refused connections.",
                },
                {
                  id: 6,
                  title: "6. Implement Bounded Concurrency using ThreadPoolExecutor",
                  cmd: "python -c \"from concurrent.futures import ThreadPoolExecutor; print('ThreadPoolExecutor active')\"",
                  desc: "Bound concurrent worker threads to prevent resource exhaustion against targets.",
                },
                {
                  id: 7,
                  title: "7. Enforce Input Validation and Safe Credential Handling",
                  cmd: "python -c \"port = 70000; assert 1 <= port <= 65535, 'Invalid port'\"",
                  desc: "Reject out-of-range ports and ensure API tokens are retrieved from environment variables.",
                },
                {
                  id: 8,
                  title: "8. Parse Streaming JSONL Telemetry and Export Health Report",
                  cmd: "python diagnostics.py > reports/health-report.json",
                  desc: "Generate structured JSON report containing UTC ISO-8601 timestamps and latency metrics.",
                },
              ].map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`p-4 rounded-2xl border transition cursor-pointer flex items-start gap-4 ${
                    checkedItems[item.id]
                      ? "bg-emerald-50/50 border-emerald-300"
                      : "bg-[#f6f4ee] border-stone-200 hover:border-stone-300"
                  }`}
                >
                  <div className="pt-0.5">
                    {checkedItems[item.id] ? (
                      <CheckCircle2 className="text-emerald-600" size={20} />
                    ) : (
                      <div className="w-5 h-5 rounded-md border-2 border-stone-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-stone-900">{item.title}</h4>
                    <p className="text-xs text-stone-600 my-1">{item.desc}</p>
                    <div className="relative mt-2">
                      <pre className="p-3 bg-stone-950 text-stone-200 rounded-xl font-mono text-[11px] overflow-x-auto whitespace-pre-wrap">
                        {item.cmd}
                      </pre>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopy(item.cmd, `lab-${item.id}`);
                        }}
                        className="absolute top-2 right-2 p-1.5 rounded-lg bg-stone-800 text-stone-300 hover:text-white transition cursor-pointer"
                        title="Copy command"
                      >
                        {copiedKey === `lab-${item.id}` ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: KNOWLEDGE CHECK (10 Questions) */}
        {activeTab === "quiz" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
              <div>
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  ASSESSMENT
                </span>
                <h2 className="text-2xl font-bold text-stone-900 mt-2">
                  Module 21 Technical Knowledge Check
                </h2>
                <p className="text-stone-700 text-xs mt-1">
                  10 comprehensive engineering questions on socket programming, concurrency, idempotency, and network automation.
                </p>
              </div>

              {quizSubmitted ? (
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-xs text-stone-700">Final Score</div>
                    <div className="text-lg font-bold font-mono text-[#ea580c]">
                      {calculateScore()} / {quizQuestions.length} ({Math.round((calculateScore() / quizQuestions.length) * 100)}%)
                    </div>
                  </div>
                  <button
                    onClick={resetQuiz}
                    className="px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-[#ea580c] transition cursor-pointer"
                  >
                    Retake Quiz
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setQuizSubmitted(true)}
                  disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition ${
                    Object.keys(quizAnswers).length === quizQuestions.length
                      ? "bg-[#ea580c] text-white hover:bg-orange-700 cursor-pointer"
                      : "bg-stone-200 text-stone-700 cursor-not-allowed"
                  }`}
                >
                  Submit Answers ({Object.keys(quizAnswers).length}/{quizQuestions.length})
                </button>
              )}
            </div>

            <div className="space-y-6">
              {quizQuestions.map((q, idx) => (
                <div key={q.id} className="p-5 rounded-2xl bg-[#f6f4ee] border border-stone-200">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="w-6 h-6 rounded-lg bg-stone-900 text-white text-xs font-mono font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <h4 className="text-sm font-bold text-stone-900 leading-snug">{q.question}</h4>
                  </div>

                  <div className="space-y-2 mt-3 pl-9">
                    {q.options.map((opt, optIdx) => {
                      const isSelected = quizAnswers[q.id] === optIdx;
                      const isCorrect = q.correct === optIdx;
                      let btnStyle = "bg-white border-stone-200 text-stone-800 hover:border-stone-400";

                      if (quizSubmitted) {
                        if (isCorrect) {
                          btnStyle = "bg-emerald-100 border-emerald-400 text-emerald-950 font-bold";
                        } else if (isSelected && !isCorrect) {
                          btnStyle = "bg-rose-100 border-rose-400 text-rose-950 font-medium";
                        } else {
                          btnStyle = "bg-white/50 border-stone-200 text-stone-700 opacity-60";
                        }
                      } else if (isSelected) {
                        btnStyle = "bg-orange-50 border-[#ea580c] text-[#ea580c] font-bold";
                      }

                      return (
                        <button
                          key={optIdx}
                          disabled={quizSubmitted}
                          onClick={() => handleQuizSelect(q.id, optIdx)}
                          className={`w-full text-left p-3 rounded-xl border text-xs transition cursor-pointer flex items-center justify-between ${btnStyle}`}
                        >
                          <span>{opt}</span>
                          {quizSubmitted && isCorrect && <CheckCircle2 size={15} className="text-emerald-700 shrink-0 ml-2" />}
                        </button>
                      );
                    })}
                  </div>

                  {quizSubmitted && (
                    <div className="mt-3 pl-9 text-xs text-stone-600 bg-stone-100 p-3 rounded-xl border border-stone-200">
                      <span className="font-bold text-stone-800 block mb-0.5">Rationale:</span>
                      {q.explanation}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: SRE DELIVERABLE */}
        {activeTab === "audit" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
              <div>
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  DELIVERABLE TEMPLATE
                </span>
                <h2 className="text-2xl font-bold text-stone-900 mt-2">
                  Network Automation &amp; Diagnostics Assessment Report
                </h2>
                <p className="text-stone-700 text-xs mt-1">
                  Ready-to-use Markdown post-inspection report for network reliability engineering, SRE teams, and automation audits.
                </p>
              </div>

              <button
                onClick={() => handleCopy(automationReportTemplate, "diag-report")}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-[#ea580c] transition cursor-pointer shadow-sm"
              >
                {copiedKey === "diag-report" ? (
                  <>
                    <Check size={14} className="text-emerald-400" />
                    <span>Copied Markdown!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy Full Report Template</span>
                  </>
                )}
              </button>
            </div>

            <div className="bg-stone-950 rounded-2xl p-5 border border-stone-800 font-mono text-[11px] text-stone-300 max-h-96 overflow-y-auto leading-relaxed whitespace-pre-wrap">
              {automationReportTemplate}
            </div>
          </div>
        )}

        {/* Footer Navigation Bar */}
        <div className="mt-10 pt-6 border-t border-[#e7e3da] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => {
              navigate("/learning/networks/ids-ips-soc");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#e7e3da] bg-white text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#ea580c] transition cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 20 — IDS/IPS &amp; SOC Monitoring</span>
          </button>

          <button
            onClick={() => {
              navigate("/learning/networks/advanced-routing");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 text-xs font-bold text-white hover:bg-[#ea580c] transition cursor-pointer"
          >
            <span>Next: Module 22 — Advanced Routing &amp; Troubleshooting</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
