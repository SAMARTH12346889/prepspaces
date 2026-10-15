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
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* COMPUTER NETWORKS & INTERNET ENGINEERING: MODULE 9                         */
/* TCP: RELIABLE TRANSPORT PROTOCOL & PERFORMANCE ENGINEERING                 */
/* -------------------------------------------------------------------------- */

export default function NetworkTCP() {
  const navigate = useNavigate();

  // Active top-level tabs
  const [activeTab, setActiveTab] = useState("theory"); // theory | handshake-sim | window-sim | loss-sim | bdp-sim | sec-sim | cli | quiz | lab-report
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // Theory sub-section tracking
  const [activeSection, setActiveSection] = useSyncedTopic("9.1");

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 1 STATE: THREE-WAY HANDSHAKE & TEARDOWN STATE MACHINE            */
  /* -------------------------------------------------------------------------- */
  const [connPhase, setConnPhase] = useState("closed"); // closed | syn-sent | established | data-sent | fin-wait-1 | close-wait | time-wait | reset
  const [packetLadder, setPacketLadder] = useState([]);

  const clientState = useMemo(() => {
    switch (connPhase) {
      case "closed": return "CLOSED";
      case "syn-sent": return "SYN-SENT";
      case "established": return "ESTABLISHED";
      case "data-sent": return "ESTABLISHED";
      case "fin-wait-1": return "FIN-WAIT-1";
      case "close-wait": return "FIN-WAIT-2";
      case "time-wait": return "TIME-WAIT (2MSL Timer)";
      case "reset": return "CLOSED (Aborted via RST)";
      default: return "CLOSED";
    }
  }, [connPhase]);

  const serverState = useMemo(() => {
    switch (connPhase) {
      case "closed": return "LISTEN";
      case "syn-sent": return "SYN-RECEIVED";
      case "established": return "ESTABLISHED";
      case "data-sent": return "ESTABLISHED";
      case "fin-wait-1": return "CLOSE-WAIT";
      case "close-wait": return "LAST-ACK";
      case "time-wait": return "CLOSED";
      case "reset": return "LISTEN (Ready)";
      default: return "LISTEN";
    }
  }, [connPhase]);

  const stepHandshake = () => {
    if (connPhase === "closed") {
      setConnPhase("syn-sent");
      setPacketLadder([
        {
          step: 1,
          dir: "C -> S",
          flags: "SYN",
          seq: 1000,
          ack: "—",
          len: 0,
          desc: "Client initiates connection: SYN SEQ=1000, proposing MSS=1460, SACK_PERM, WS=7.",
        },
      ]);
    } else if (connPhase === "syn-sent") {
      setConnPhase("established");
      setPacketLadder((prev) => [
        ...prev,
        {
          step: 2,
          dir: "S -> C",
          flags: "SYN, ACK",
          seq: 7000,
          ack: 1001,
          len: 0,
          desc: "Server accepts: SYN, ACK SEQ=7000 ACK=1001 (Consumes 1 SEQ for client SYN).",
        },
        {
          step: 3,
          dir: "C -> S",
          flags: "ACK",
          seq: 1001,
          ack: 7001,
          len: 0,
          desc: "Client completes 3-way handshake: ACK SEQ=1001 ACK=7001. Connection ESTABLISHED!",
        },
      ]);
    }
  };

  const stepSendData = () => {
    if (connPhase === "established" || connPhase === "data-sent") {
      setConnPhase("data-sent");
      setPacketLadder((prev) => [
        ...prev,
        {
          step: prev.length + 1,
          dir: "C -> S",
          flags: "PSH, ACK",
          seq: 1001,
          ack: 7001,
          len: 500,
          desc: "Client transmits HTTP request: PSH, ACK SEQ=1001 ACK=7001 LEN=500 bytes (Bytes 1001–1500).",
        },
        {
          step: prev.length + 2,
          dir: "S -> C",
          flags: "ACK",
          seq: 7001,
          ack: 1501,
          len: 0,
          desc: "Server acknowledges payload: ACK=1501 (Next expected byte is 1501).",
        },
      ]);
    }
  };

  const stepTeardown = () => {
    if (connPhase === "established" || connPhase === "data-sent") {
      setConnPhase("fin-wait-1");
      setPacketLadder((prev) => [
        ...prev,
        {
          step: prev.length + 1,
          dir: "C -> S",
          flags: "FIN, ACK",
          seq: 1501,
          ack: 7001,
          len: 0,
          desc: "Client initiates active close: FIN, ACK SEQ=1501 ACK=7001. Client enters FIN-WAIT-1.",
        },
        {
          step: prev.length + 2,
          dir: "S -> C",
          flags: "ACK",
          seq: 7001,
          ack: 1502,
          len: 0,
          desc: "Server ACKs client FIN: ACK=1502 (FIN consumed 1 SEQ). Server enters CLOSE-WAIT.",
        },
      ]);
      setTimeout(() => {
        setConnPhase("time-wait");
        setPacketLadder((prev) => [
          ...prev,
          {
            step: prev.length + 1,
            dir: "S -> C",
            flags: "FIN, ACK",
            seq: 7001,
            ack: 1502,
            len: 0,
            desc: "Server application finishes sending and closes its direction: FIN, ACK SEQ=7001 ACK=1502.",
          },
          {
            step: prev.length + 2,
            dir: "C -> S",
            flags: "ACK",
            seq: 1502,
            ack: 7002,
            len: 0,
            desc: "Client sends final ACK=7002 and enters TIME-WAIT (waiting 2MSL = 60s) to absorb delayed segments.",
          },
        ]);
      }, 700);
    }
  };

  const triggerReset = () => {
    setConnPhase("reset");
    setPacketLadder([
      {
        step: 1,
        dir: "C -> S",
        flags: "SYN",
        seq: 1000,
        ack: "—",
        len: 0,
        desc: "Client attempts to connect to closed port 8765: SYN SEQ=1000.",
      },
      {
        step: 2,
        dir: "S -> C",
        flags: "RST, ACK",
        seq: 0,
        ack: 1001,
        len: 0,
        desc: "Server kernel rejects connection: RST, ACK SEQ=0 ACK=1001. Connection immediately aborted (Port closed)!",
      },
    ]);
  };

  const resetHandshake = () => {
    setConnPhase("closed");
    setPacketLadder([]);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 2 STATE: SLIDING WINDOW & FLOW CONTROL (rwnd vs cwnd)            */
  /* -------------------------------------------------------------------------- */
  const [rwndKB, setRwndKB] = useState(16); // Receiver advertised window (1-64 KB)
  const [cwndKB, setCwndKB] = useState(32); // Network congestion window (1-64 KB)
  const [inFlightKB, setInFlightKB] = useState(8);
  const [isZeroWindow, setIsZeroWindow] = useState(false);

  const effectiveWindowKB = useMemo(() => {
    if (isZeroWindow) return 0;
    return Math.min(rwndKB, cwndKB);
  }, [rwndKB, cwndKB, isZeroWindow]);

  const usableWindowKB = useMemo(() => {
    return Math.max(0, effectiveWindowKB - inFlightKB);
  }, [effectiveWindowKB, inFlightKB]);

  const transmitChunk = () => {
    if (usableWindowKB >= 2) {
      setInFlightKB((prev) => prev + 2);
    }
  };

  const receiveAck = () => {
    if (inFlightKB >= 2) {
      setInFlightKB((prev) => prev - 2);
    }
  };

  const toggleZeroWindow = () => {
    setIsZeroWindow(!isZeroWindow);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 3 STATE: PACKET LOSS & FAST RETRANSMIT (3 DUP ACKS)              */
  /* -------------------------------------------------------------------------- */
  const [lossStep, setLossStep] = useState(0); // 0: Idle, 1: Sent 4, 2: Lost seg 3, 3: Dup ACKs, 4: Fast Retransmit
  const [sackEnabled, setSackEnabled] = useState(true);

  const lossEvents = [
    { step: 1, label: "Sender transmits Segments 1, 2, 3, 4 (1000B each)", seqs: [1000, 2000, 3000, 4000], status: "in-flight" },
    { step: 2, label: "Segment 3 (SEQ=3000) dropped due to link congestion!", seqs: [1000, 2000, "LOST", 4000], status: "dropped" },
    { step: 3, label: "Receiver gets Seg 4; missing Seg 3 triggers 3 Duplicate ACKs (ACK=3000)", seqs: ["ACK=3000", "ACK=3000", "ACK=3000"], status: "dup-acks" },
    { step: 4, label: "FAST RETRANSMIT: 3rd Dup ACK triggers immediate retransmission of SEQ=3000!", seqs: ["RETRANSMIT 3000", "CUMULATIVE ACK=5000"], status: "retransmitted" },
  ];

  const advanceLoss = () => {
    if (lossStep < 4) setLossStep(lossStep + 1);
  };

  const resetLoss = () => setLossStep(0);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 4 STATE: BDP & PMTUD CALCULATOR                                  */
  /* -------------------------------------------------------------------------- */
  const [bandwidthMbps, setBandwidthMbps] = useState(100);
  const [rttMs, setRttMs] = useState(40);
  const [selectedMtuType, setSelectedMtuType] = useState("ethernet"); // ethernet (1500) | pppoe (1492) | gre (1476) | ipsec (1420) | vxlan (1450)

  const bdpCalculations = useMemo(() => {
    const bits = bandwidthMbps * 1000000 * (rttMs / 1000);
    const bytes = Math.round(bits / 8);
    const kbytes = (bytes / 1024).toFixed(1);
    const mssCount = Math.round(bytes / 1460);
    return { bits, bytes, kbytes, mssCount };
  }, [bandwidthMbps, rttMs]);

  const mtuProfiles = {
    ethernet: { name: "Standard Ethernet", mtu: 1500, ipHeader: 20, tcpHeader: 20, mss: 1460, desc: "Standard LAN / Internet link" },
    pppoe: { name: "PPPoE DSL / Fiber", mtu: 1492, ipHeader: 20, tcpHeader: 20, mss: 1452, desc: "8-byte PPPoE encapsulation overhead" },
    gre: { name: "GRE Tunnel", mtu: 1476, ipHeader: 24, tcpHeader: 20, mss: 1436, desc: "24-byte GRE tunnel encapsulation" },
    ipsec: { name: "IPsec VPN (AES-GCM)", mtu: 1420, ipHeader: 60, tcpHeader: 20, mss: 1380, desc: "ESP encryption, IV, and HMAC overhead" },
    vxlan: { name: "Cloud Overlay (VXLAN)", mtu: 1450, ipHeader: 50, tcpHeader: 20, mss: 1410, desc: "50-byte UDP/VXLAN datacenter overlay header" },
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 5 STATE: SYN FLOOD & SYN COOKIES DEFENSE SANDBOX                 */
  /* -------------------------------------------------------------------------- */
  const [synCookiesActive, setSynCookiesActive] = useState(false);
  const [backlogUsage, setBacklogUsage] = useState(15); // percentage (0-100)
  const [floodActive, setFloodActive] = useState(false);
  const [testConnResult, setTestConnResult] = useState(null);

  const toggleFlood = () => {
    if (!floodActive) {
      setFloodActive(true);
      if (!synCookiesActive) {
        setBacklogUsage(100);
      } else {
        setBacklogUsage(20);
      }
    } else {
      setFloodActive(false);
      setBacklogUsage(15);
      setTestConnResult(null);
    }
  };

  const testLegitimateClient = () => {
    if (floodActive && !synCookiesActive && backlogUsage >= 100) {
      setTestConnResult({
        status: "failed",
        title: "Connection Timed Out (SYN Dropped)",
        desc: "CRITICAL: Server SYN_RECV backlog queue is completely full (100%). Kernel dropped legitimate client SYN. Denial of Service successful!",
      });
    } else if (floodActive && synCookiesActive) {
      setTestConnResult({
        status: "success",
        title: "Connection ESTABLISHED (SYN Cookie Verified)",
        desc: "PROTECTED: Server used cryptographic SYN Cookie. No backlog state was allocated for incomplete handshakes. Client ACK verified cookie hash and established socket!",
      });
    } else {
      setTestConnResult({
        status: "success",
        title: "Connection ESTABLISHED",
        desc: "Normal 3-way handshake succeeded in 1.4ms.",
      });
    }
  };

  /* -------------------------------------------------------------------------- */
  /* ASSESSMENT & QUIZ STATE                                                    */
  /* -------------------------------------------------------------------------- */
  const quizQuestions = [
    {
      id: 1,
      question: "A sender transmits 500 bytes of data starting at Sequence Number 1,000. Assuming in-order arrival, what cumulative acknowledgment number should the receiver return?",
      options: ["999", "1000", "1500", "1501"],
      correct: 3,
      explanation:
        "The sender transmits bytes 1000 through 1499 (500 bytes total). TCP acknowledgments are cumulative, indicating the next byte expected. Therefore, the receiver returns ACK = 1500 + 1 = 1501.",
    },
    {
      id: 2,
      question: "Why do the SYN and FIN control flags consume one sequence number in the TCP stream, even when they carry 0 bytes of payload?",
      options: [
        "To satisfy Ethernet 64-byte minimum frame size padding",
        "To allow the peer to explicitly acknowledge their receipt (ACK = ISN + 1) and guarantee reliable state transition",
        "Because TCP headers are always padded to 32-bit boundaries",
        "They do not; SYN and FIN never increment sequence numbers",
      ],
      correct: 1,
      explanation:
        "Because SYN and FIN establish and terminate connection state, they must be acknowledged reliably. Consuming 1 sequence number ensures the receiver's ACK explicitly confirms their arrival.",
    },
    {
      id: 3,
      question: "What is the difference between receiver flow control (rwnd) and network congestion control (cwnd)?",
      options: [
        "rwnd protects against overloading the network; cwnd protects against overwhelming the receiver",
        "rwnd protects against overwhelming the receiver buffer; cwnd protects against overwhelming intermediate network routers",
        "rwnd is measured in packets; cwnd is measured in milliseconds",
        "There is no difference; rwnd and cwnd are synonyms in RFC 9293",
      ],
      correct: 1,
      explanation:
        "Flow control (rwnd) is advertised by the receiver to prevent a fast sender from exhausting its memory buffer. Congestion control (cwnd) is dynamically calculated by the sender to prevent overloading the network path. Effective Window ≈ min(rwnd, cwnd).",
    },
    {
      id: 4,
      question: "How does traditional TCP Fast Retransmit detect packet loss before the Retransmission Timeout (RTO) timer expires?",
      options: [
        "By receiving an ICMP Source Quench message from a core router",
        "By receiving three duplicate acknowledgments (Dup ACKs) for the same missing sequence number",
        "By querying DNS for alternative server routes",
        "By measuring jitter on the local network card",
      ],
      correct: 1,
      explanation:
        "When an out-of-order segment arrives, the receiver immediately generates an ACK for the last contiguous in-order byte. The arrival of 3 duplicate ACKs is an unambiguous signal of isolated packet loss, triggering Fast Retransmit immediately.",
    },
    {
      id: 5,
      question: "What is the primary function of the TIME-WAIT state on the endpoint that initiates an active close?",
      options: [
        "To wait for DNS cache entries to expire",
        "To ensure the final ACK was received by the peer and prevent old delayed duplicate segments from corrupting future connections on the same 4-tuple",
        "To renegotiate TLS session tickets",
        "To perform a port scan against the remote peer",
      ],
      correct: 1,
      explanation:
        "TIME-WAIT (2MSL, typically 60 seconds) ensures the final ACK is received (retransmitting if the peer resends FIN) and guarantees all stray packets from the closed connection expire before the 4-tuple can be reused.",
    },
    {
      id: 6,
      question: "On a link with a 1,500-byte MTU, what is the standard Maximum Segment Size (MSS) for IPv4 TCP without optional header extensions?",
      options: ["1500 bytes", "1460 bytes", "1440 bytes", "1492 bytes"],
      correct: 1,
      explanation:
        "MSS = MTU - (IP Header 20 bytes) - (TCP Header 20 bytes) = 1500 - 40 = 1460 bytes. For IPv6 (40-byte base header), standard MSS is 1440 bytes.",
    },
    {
      id: 7,
      question: "What causes a Path MTU Discovery (PMTUD) Black Hole?",
      options: [
        "A router with a smaller MTU drops an oversized packet (DF=1) and attempts to return ICMP Fragmentation Needed, but intermediate firewalls block the ICMP message",
        "The server runs out of disk storage for packet logging",
        "The client sets the SYN flag without an ACK flag",
        "DNS records contain both IPv4 and IPv6 addresses",
      ],
      correct: 0,
      explanation:
        "When a packet exceeds a tunnel or link MTU with Don't Fragment (DF) set, the router drops it and generates ICMP Type 3 Code 4. If firewalls drop all ICMP, the sender never learns of the smaller MTU and repeatedly retransmits oversized packets that hang indefinitely.",
    },
    {
      id: 8,
      question: "What is the Bandwidth-Delay Product (BDP) for a 100 Mbps link with a 40 ms round-trip time (RTT)?",
      options: ["4,000 bits (500 bytes)", "4,000,000 bits (500,000 bytes / ~500 KB)", "100 MB", "40 KB"],
      correct: 1,
      explanation:
        "BDP = Bandwidth × RTT = 100,000,000 bps × 0.040 s = 4,000,000 bits. In bytes: 4,000,000 / 8 = 500,000 bytes (~500 KB). This is the buffer capacity required to saturate the pipe.",
    },
    {
      id: 9,
      question: "How do SYN Cookies (RFC 4987) defend a server against SYN Flood denial-of-service attacks?",
      options: [
        "By blocking all TCP connections on port 80 and 443",
        "By encoding connection parameters into a cryptographically hashed Initial Sequence Number (ISN), eliminating the need to allocate memory in the SYN_RECV backlog queue",
        "By automatically restarting the Apache or Nginx daemon every 10 seconds",
        "By banning client IP addresses using firewall geo-IP blocks",
      ],
      correct: 1,
      explanation:
        "Under attack, the server generates an ISN containing a cryptographic hash of the 4-tuple and timestamp. When the client returns the final ACK, the server validates the cookie and creates the socket, allocating zero memory for incomplete handshakes.",
    },
    {
      id: 10,
      question: "Which TCP flag is immediately sent by an operating system when a client attempts to connect to a port where no application is listening?",
      options: ["FIN", "PSH", "RST (Reset)", "URG"],
      correct: 2,
      explanation:
        "When an incoming TCP SYN arrives at a closed port, the host's networking stack actively rejects the connection by returning an immediate TCP RST (Reset), indicating 'Port Closed / Connection Refused'.",
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSelectAnswer = (qId, optionIdx) => {
    if (showResults) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) score += 1;
    });
    return score;
  };

  /* -------------------------------------------------------------------------- */
  /* LAB CHECKLIST STATE                                                        */
  /* -------------------------------------------------------------------------- */
  const [labChecklist, setLabChecklist] = useState({
    captureHandshake: false,
    analyzeSeqAck: false,
    observeReset: false,
    inspectRetransmit: false,
    checkSockets: false,
    calcBdp: false,
    incidentReport: false,
  });

  const toggleChecklistItem = (key) => {
    setLabChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  /* -------------------------------------------------------------------------- */
  /* CAPSTONE INCIDENT REPORT TEMPLATE                                          */
  /* -------------------------------------------------------------------------- */
  const wiresharkReportTemplate = `# PrepSpaces Network Engineering Incident Report: Module 9
## Wireshark Packet Trace Analysis: TCP Handshake, Retransmission & PMTUD Black Hole

**Incident Reference:** INC-2026-TCP-0914
**Date & Time:** ${new Date().toISOString()}
**Investigating Engineer:** Senior Network & Systems Reliability Engineer
**Target Connection:** 192.168.1.20:51514 <-> 203.0.113.10:443 (HTTPS)
**Capture File:** wireshark_analysis_capture.pcapng
**Status:** RESOLVED

---

### 1. Connection Establishment & 3-Way Handshake Analysis
- **Packet 1 (0.000000s) [Client -> Server]:**
  - Flags: [SYN]
  - Relative SEQ: 0 (Raw ISN: 0x3d8f1422)
  - Options: MSS=1460, SACK_PERM=1, WS=128 (Scale Factor 7), TSval=149811
- **Packet 2 (0.018240s) [Server -> Client]:**
  - Flags: [SYN, ACK]
  - Relative SEQ: 0 (Raw ISN: 0x9b11a4f0), ACK: 1
  - Options: MSS=1460, SACK_PERM=1, WS=64 (Scale Factor 6), TSecr=149811
- **Packet 3 (0.018310s) [Client -> Server]:**
  - Flags: [ACK]
  - Relative SEQ: 1, ACK: 1
  - **RTT Handshake Latency:** 18.24 ms

---

### 2. Retransmission & Packet Loss Investigation
- **Observation:** Large file transfer stalled at 2.4 MB.
- **Wireshark Analysis Flags Triggered:**
  - Packet 412: [TCP Dup ACK 408#1] SEQ=1 ACK=146001
  - Packet 414: [TCP Dup ACK 408#2] SEQ=1 ACK=146001
  - Packet 416: [TCP Dup ACK 408#3] SEQ=1 ACK=146001
  - Packet 417: [TCP Fast Retransmission] SEQ=146001, LEN=1460
- **Diagnosis:** Intermediate switch port experienced burst queue overflow. Segment 146001 was dropped. Receipt of 3 duplicate ACKs successfully triggered TCP Fast Retransmit within 1.2ms without awaiting RTO (Retransmission Timeout).

---

### 3. Path MTU Discovery (PMTUD) Black Hole Root Cause
- **Symptom:** Small HTTP GET requests and TLS handshakes succeeded, but downloading files > 1500 bytes hung indefinitely.
- **Root Cause Analysis:**
  - Transit path traversed an IPsec VPN tunnel with MTU = 1420 bytes.
  - Client sent 1500-byte IP packet with DF (Don't Fragment) bit set.
  - Tunnel router dropped packet and returned ICMP Type 3, Code 4 (Fragmentation Needed, MTU=1420).
  - Edge border firewall was configured with 'deny icmp any any', silently dropping the ICMP feedback.
  - Client never reduced its MSS, causing an indefinite retransmission loop.
- **Remediation Implemented:**
  1. Updated firewall policy to explicitly permit ICMP Type 3 (Destination Unreachable).
  2. Configured MSS Clamping on the border router:
     \`interface GigabitEthernet0/1\`
     \` ip tcp adjust-mss 1360\`

---

### 4. Socket Diagnostics & Kernel Tuning Verification
- Executed \`ss -tin 'sport = :443'\`:
  - \`skmem:(r0,rb131072,t0,tb262144,f0,w0,o0,bl0,d0)\`
  - \`cubic wscale:7,6 rto:200 rtt:18.2/1.4 ato:40 mss:1360 rcvspace:131072 ssthresh:48 cwnd:36\`
- Verified SYN Cookie defense active: \`sysctl net.ipv4.tcp_syncookies = 1\`.
`;

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col font-sans selection:bg-orange-200">
      {/* Module Navigation Bar */}
      <ModuleNav
        track="networks"
        currentModuleId="tcp"
        showAiTutor={false}
        onAiTutorToggle={() => {}}
        aiTutorLabel="AI Assistant"
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        {/* Breadcrumb & Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-stone-500 mb-2">
            <span className="cursor-pointer hover:text-[#ea580c]" onClick={() => navigate("/learning")}>
              Learning
            </span>
            <span>/</span>
            <span className="cursor-pointer hover:text-[#ea580c]" onClick={() => navigate("/learning/networks")}>
              Computer Networks
            </span>
            <span>/</span>
            <span className="text-[#ea580c] font-semibold">Module 9: TCP — Reliable Transport</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/80 border border-orange-200/60 text-[#ea580c] text-xs font-bold uppercase tracking-wider mb-2">
                <Workflow size={14} />
                <span>Layer 4 Transport Core</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#18181b] tracking-tight">
                TCP: Reliable Transport &amp; Performance Engineering
              </h1>
              <p className="mt-2 text-base text-stone-600 max-w-3xl leading-relaxed">
                IP provides best-effort, lossy packet delivery. Transmission Control Protocol (TCP) synthesizes an ordered, reliable byte stream over chaotic networks. Master connection state machines, sliding windows, receiver flow control, congestion algorithms, PMTUD black holes, and Wireshark trace analysis.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-xl bg-white border border-[#e7e3da] text-xs font-mono text-stone-600">
                Stanford CS144 &bull; CMU 15-441
              </span>
            </div>
          </div>
        </div>

        {/* Top-Level Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 border-b border-[#e7e3da] scrollbar-none">
          {[
            { id: "theory", label: "Core Theory (9.1-9.11)", icon: BookOpen },
            { id: "handshake-sim", label: "3-Way Handshake & Teardown", icon: Workflow },
            { id: "window-sim", label: "Sliding Window & Flow Control", icon: SlidersHorizontal },
            { id: "loss-sim", label: "Fast Retransmit & SACK", icon: RotateCcw },
            { id: "bdp-sim", label: "BDP & PMTUD Calculator", icon: Gauge },
            { id: "sec-sim", label: "SYN Flood & Cookies", icon: ShieldCheck },
            { id: "cli", label: "Linux ss & Socket CLI", icon: Terminal },
            { id: "quiz", label: "Knowledge Check", icon: Award },
            { id: "lab-report", label: "Wireshark Incident Report", icon: FileText },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[#18181b] text-white shadow-sm"
                    : "bg-white text-stone-600 hover:text-stone-900 border border-[#e7e3da] hover:border-stone-400"
                }`}
              >
                <Icon size={16} className={isActive ? "text-orange-400" : "text-stone-500"} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* -------------------------------------------------------------------- */}
        {/* TAB 1: THEORY CURRICULUM (9.1 - 9.11)                                 */}
        {/* -------------------------------------------------------------------- */}
        {activeTab === "theory" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Sticky Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 p-4 bg-white rounded-2xl border border-[#e7e3da] shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3 px-2">
                  Module 9 Sections
                </h3>
                <nav className="space-y-1">
                  {[
                    { id: "9.1", title: "9.1 Why TCP Exists & TCP vs UDP" },
                    { id: "9.2", title: "9.2 Segment & Header Architecture" },
                    { id: "9.3", title: "9.3 Sequence & Cumulative ACKs" },
                    { id: "9.4", title: "9.4 3-Way Handshake & Option Negotiation" },
                    { id: "9.5", title: "9.5 Connection Teardown & RST Aborts" },
                    { id: "9.6", title: "9.6 11 TCP Connection States" },
                    { id: "9.7", title: "9.7 Retransmission, RTO & 3 Dup ACKs" },
                    { id: "9.8", title: "9.8 Sliding Windows & Flow vs Congestion" },
                    { id: "9.9", title: "9.9 MSS, MTU & PMTUD Black Holes" },
                    { id: "9.10", title: "9.10 BDP & Performance Engineering" },
                    { id: "9.11", title: "9.11 Security: SYN Floods & Cookies" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition cursor-pointer flex items-center justify-between ${
                        activeSection === item.id
                          ? "bg-orange-50 text-[#ea580c] font-bold border border-orange-200"
                          : "text-stone-600 hover:bg-stone-50"
                      }`}
                    >
                      <span>{item.title}</span>
                      {activeSection === item.id && <ChevronRight size={14} />}
                    </button>
                  ))}
                </nav>

                <div className="mt-6 pt-4 border-t border-[#e7e3da]">
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600">
                    <p className="font-semibold text-stone-800 mb-1">Key Takeaway:</p>
                    TCP tracks <em>bytes</em>, not packets. Flow control protects the receiver; congestion control protects the network.
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Pane */}
            <div className="lg:col-span-3 space-y-8">
              {/* SECTION 9.1 */}
              {activeSection === "9.1" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                    <span>SECTION 9.1</span>
                    <span>&bull;</span>
                    <span>TRANSPORT FOUNDATIONS</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">Why TCP Exists: Reliable Transport vs. Best-Effort IP</h2>

                  <p className="text-stone-700 leading-relaxed">
                    The Internet Protocol (IP) provides <strong>best-effort packet delivery</strong>. It provides zero guarantees that packets will arrive, arrive in order, or avoid duplicate transmission. If an optical transceiver overheats or a switch queue overflows, packets are discarded without notice. The Transmission Control Protocol (TCP, RFC 9293) operates directly above IP to assemble individual, unordered datagrams into an unbroken, in-order byte stream.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden">
                      <thead className="bg-stone-100 text-stone-700 font-bold border-b border-stone-200">
                        <tr>
                          <th className="p-3">Architectural Feature</th>
                          <th className="p-3">TCP (Transmission Control Protocol)</th>
                          <th className="p-3">UDP (User Datagram Protocol)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200">
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-semibold text-stone-900">Connection Model</td>
                          <td className="p-3 text-stone-700">Connection-oriented (Requires 3-way handshake before data transfer).</td>
                          <td className="p-3 text-stone-700">Connectionless (Fire-and-forget; zero setup latency).</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-semibold text-stone-900">Delivery Guarantees</td>
                          <td className="p-3 text-stone-700">Guaranteed delivery via sequence numbers, cumulative ACKs, and retransmissions.</td>
                          <td className="p-3 text-stone-700">No guarantee. Lost packets are discarded forever.</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-semibold text-stone-900">Data Abstraction</td>
                          <td className="p-3 text-stone-700">Continuous byte stream (No message boundaries preserved).</td>
                          <td className="p-3 text-stone-700">Discrete datagrams (Application message boundaries strictly preserved).</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-semibold text-stone-900">Flow &amp; Congestion Control</td>
                          <td className="p-3 text-stone-700">Built-in: Receiver window (rwnd) &amp; dynamic congestion window (cwnd).</td>
                          <td className="p-3 text-stone-700">None built in. Must be implemented in userland application or QUIC.</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-semibold text-stone-900">Typical Protocols</td>
                          <td className="p-3 text-stone-700">HTTP/1.1, HTTP/2, HTTPS (TLS), SSH, MySQL, PostgreSQL, BGP.</td>
                          <td className="p-3 text-stone-700">DNS queries, DHCP, VoIP, video streaming, gaming, HTTP/3 (QUIC).</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="p-4 bg-orange-50 rounded-2xl border border-orange-200 text-xs text-stone-700 space-y-1">
                    <span className="font-bold text-stone-900">Essential Engineering Distinction:</span> TCP guarantees <em>transport delivery</em>, not application success. A successful TCP handshake and ACK does NOT mean an SQL query succeeded or an HTTP 200 was generated. It only guarantees the application bytes arrived uncorrupted at the operating system socket buffer.
                  </div>
                </div>
              )}

              {/* SECTION 9.2 */}
              {activeSection === "9.2" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                    <span>SECTION 9.2</span>
                    <span>&bull;</span>
                    <span>PACKET STRUCTURE</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">TCP Segment &amp; Header Architecture</h2>

                  <p className="text-stone-700 leading-relaxed">
                    A TCP segment is encapsulated inside an IP packet. The base TCP header is <strong>20 bytes</strong>, and can expand up to <strong>60 bytes</strong> using optional parameter fields.
                  </p>

                  <div className="p-4 bg-stone-900 text-stone-100 rounded-2xl font-mono text-xs space-y-3">
                    <div className="text-orange-400 font-bold border-b border-stone-800 pb-2">
                      RFC 9293 TCP Segment Bit Layout (32 Bits Wide)
                    </div>
                    <pre className="text-stone-300 text-[11px] leading-relaxed overflow-x-auto">
{` 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|          Source Port          |       Destination Port        |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                        Sequence Number                        |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                    Acknowledgment Number                      |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
| Data  |           |U|A|P|R|S|F|                               |
| Offset| Reserved  |R|C|S|S|Y|I|            Window             |
|       |           |G|K|H|T|N|N|                               |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|           Checksum            |        Urgent Pointer         |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                    Options                    |    Padding    |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                             data                              |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+`}
                    </pre>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                      <div className="font-bold text-stone-900 mb-1">Four-Tuple Connection Identity</div>
                      <p className="text-stone-600">
                        A TCP socket is uniquely identified by: <br />
                        <code className="font-mono text-[11px] bg-white px-1 py-0.5 rounded border border-stone-200">
                          (SrcIP, SrcPort, DstIP, DstPort)
                        </code>
                      </p>
                    </div>

                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                      <div className="font-bold text-stone-900 mb-1">Control Flags</div>
                      <p className="text-stone-600">
                        <strong>SYN:</strong> Synchronize ISN <br />
                        <strong>ACK:</strong> Ack valid <br />
                        <strong>FIN:</strong> Graceful close <br />
                        <strong>RST:</strong> Abort / Reset <br />
                        <strong>PSH:</strong> Push to app <br />
                        <strong>URG:</strong> Urgent data
                      </p>
                    </div>

                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                      <div className="font-bold text-stone-900 mb-1">Receive Window &amp; Options</div>
                      <p className="text-stone-600">
                        16-bit <strong>Window</strong> specifies flow control bytes receiver can buffer. Options include MSS (Max Segment Size), Window Scale, and SACK.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 9.3 */}
              {activeSection === "9.3" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                    <span>SECTION 9.3</span>
                    <span>&bull;</span>
                    <span>BYTE ARITHMETIC</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">Sequence Numbers &amp; Cumulative Acknowledgments</h2>

                  <p className="text-stone-700 leading-relaxed">
                    TCP tracks <strong>bytes</strong>, not packets. When a connection begins, each endpoint generates an independent 32-bit Initial Sequence Number (ISN). As bytes flow, the sequence number increments by the number of payload bytes transmitted.
                  </p>

                  <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-3 text-xs">
                    <h4 className="font-bold text-stone-900">Step-by-Step Cumulative Byte Math</h4>
                    <p className="text-stone-600 leading-relaxed">
                      Suppose a client initiates a connection with Initial Sequence Number <code className="font-mono bg-white px-1">ISN = 5000</code> and transmits 1,000 bytes of data:
                    </p>
                    <ul className="list-disc list-inside space-y-1 font-mono text-stone-800">
                      <li>First Byte Transmitted: <strong className="text-[#ea580c]">5,000</strong></li>
                      <li>Last Byte Transmitted: <strong className="text-[#ea580c]">5,999</strong> (5000 + 1000 - 1)</li>
                      <li>Receiver processes bytes 5000 through 5999 successfully into buffer.</li>
                      <li>Receiver generates cumulative ACK: <strong className="text-emerald-700">ACK = 6,000</strong></li>
                    </ul>
                    <p className="text-stone-600 mt-2">
                      An ACK number always means: <em>"I have successfully received and assembled all bytes up to ACK - 1; send me byte number ACK next."</em>
                    </p>
                  </div>
                </div>
              )}

              {/* SECTION 9.4 */}
              {activeSection === "9.4" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                    <span>SECTION 9.4</span>
                    <span>&bull;</span>
                    <span>CONNECTION SETUP</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">TCP Three-Way Handshake &amp; Option Negotiation</h2>

                  <p className="text-stone-700 leading-relaxed">
                    Before any application bytes can be delivered, the client and server must establish shared connection state, synchronize initial sequence numbers, and negotiate critical transport parameters.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-1">
                      <div className="font-bold text-[#ea580c]">Step 1: Client &rarr; Server</div>
                      <div className="font-mono font-bold text-stone-900">SYN (SEQ = X)</div>
                      <p className="text-stone-600 text-[11px] leading-snug">
                        Proposes client ISN. Advertises client MSS, Window Scale factor, and SACK permission. Consumes 1 sequence number.
                      </p>
                    </div>

                    <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-1">
                      <div className="font-bold text-[#ea580c]">Step 2: Server &rarr; Client</div>
                      <div className="font-mono font-bold text-stone-900">SYN, ACK (SEQ = Y, ACK = X + 1)</div>
                      <p className="text-stone-600 text-[11px] leading-snug">
                        Proposes server ISN Y, acknowledges client SYN by setting ACK = X + 1. Advertises server parameters.
                      </p>
                    </div>

                    <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-1">
                      <div className="font-bold text-[#ea580c]">Step 3: Client &rarr; Server</div>
                      <div className="font-mono font-bold text-stone-900">ACK (SEQ = X + 1, ACK = Y + 1)</div>
                      <p className="text-stone-600 text-[11px] leading-snug">
                        Confirms server ISN Y + 1. Both sides transition to ESTABLISHED state. Data transfer may begin immediately.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-stone-900 text-stone-100 rounded-2xl font-mono text-xs space-y-2">
                    <div className="text-orange-400 font-bold">Standard Options Negotiated in Handshake:</div>
                    <ul className="text-stone-300 text-[11px] space-y-1">
                      <li>&bull; <strong>MSS (Maximum Segment Size):</strong> Maximum payload size endpoint will accept (e.g. 1460).</li>
                      <li>&bull; <strong>Window Scale (RFC 7323):</strong> Bit-shift multiplier (0–14) allowing receive windows up to 1 GB.</li>
                      <li>&bull; <strong>SACK Permitted (RFC 2018):</strong> Enables selective acknowledgments for out-of-order recovery.</li>
                      <li>&bull; <strong>Timestamps (RFC 7323):</strong> Embeds TSval/TSecr to accurately measure RTT and prevent old duplicate sequence numbers (PAWS).</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* SECTION 9.5 */}
              {activeSection === "9.5" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                    <span>SECTION 9.5</span>
                    <span>&bull;</span>
                    <span>TEARDOWN &amp; RESETS</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">Connection Teardown (FIN) &amp; Abrupt Aborts (RST)</h2>

                  <p className="text-stone-700 leading-relaxed">
                    TCP is a full-duplex protocol: each direction of the data stream closes independently. A graceful close allows the transmitting side to signal that it has finished sending data, while still remaining capable of receiving data until its peer finishes.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
                      <h4 className="font-bold text-stone-900">Graceful Four-Way Teardown (FIN)</h4>
                      <ol className="list-decimal list-inside space-y-1 text-stone-600">
                        <li>Active closer sends <code className="font-mono bg-white px-1">FIN, ACK</code> (Transitions to FIN-WAIT-1).</li>
                        <li>Passive closer returns <code className="font-mono bg-white px-1">ACK</code> (Transitions to CLOSE-WAIT).</li>
                        <li>Passive closer flushes remaining data, then sends its own <code className="font-mono bg-white px-1">FIN, ACK</code> (Transitions to LAST-ACK).</li>
                        <li>Active closer returns final <code className="font-mono bg-white px-1">ACK</code> and enters <code className="font-mono text-orange-600 font-bold">TIME-WAIT</code>.</li>
                      </ol>
                    </div>

                    <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
                      <h4 className="font-bold text-stone-900">Abrupt Termination (RST)</h4>
                      <p className="text-stone-600 leading-relaxed">
                        A Reset (RST) packet immediately aborts the connection. No state transitions occur; the socket is destroyed instantly.
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-stone-600">
                        <li>Connection attempt to closed port (Port Unreachable).</li>
                        <li>Application crashes with unread data in socket receive buffer.</li>
                        <li>Firewall or middlebox actively rejecting unauthorized traffic.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 9.6 */}
              {activeSection === "9.6" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                    <span>SECTION 9.6</span>
                    <span>&bull;</span>
                    <span>STATE MACHINE</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">The 11 TCP Connection States</h2>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden font-mono">
                      <thead className="bg-stone-100 text-stone-700 font-bold border-b border-stone-200 font-sans">
                        <tr>
                          <th className="p-3">State Name</th>
                          <th className="p-3">Role</th>
                          <th className="p-3">Operational Meaning</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200 text-stone-700">
                        <tr className="hover:bg-stone-50"><td className="p-2.5 font-bold text-stone-900">CLOSED</td><td>Both</td><td>No active connection state exists on the host.</td></tr>
                        <tr className="hover:bg-stone-50"><td className="p-2.5 font-bold text-stone-900">LISTEN</td><td>Server</td><td>Waiting for incoming connection requests (bind/listen).</td></tr>
                        <tr className="hover:bg-stone-50"><td className="p-2.5 font-bold text-stone-900">SYN-SENT</td><td>Client</td><td>SYN sent; awaiting SYN-ACK from server.</td></tr>
                        <tr className="hover:bg-stone-50"><td className="p-2.5 font-bold text-stone-900">SYN-RECEIVED</td><td>Server</td><td>SYN received, SYN-ACK sent; awaiting final ACK.</td></tr>
                        <tr className="hover:bg-stone-50"><td className="p-2.5 font-bold text-emerald-700">ESTABLISHED</td><td>Both</td><td>Connection open; bidirectional data transfer active.</td></tr>
                        <tr className="hover:bg-stone-50"><td className="p-2.5 font-bold text-stone-900">FIN-WAIT-1</td><td>Active Closer</td><td>Sent FIN; awaiting ACK from peer.</td></tr>
                        <tr className="hover:bg-stone-50"><td className="p-2.5 font-bold text-stone-900">FIN-WAIT-2</td><td>Active Closer</td><td>ACK received for local FIN; waiting for peer to close.</td></tr>
                        <tr className="hover:bg-stone-50"><td className="p-2.5 font-bold text-amber-700">CLOSE-WAIT</td><td>Passive Closer</td><td>Peer closed its sending side; local app must close socket.</td></tr>
                        <tr className="hover:bg-stone-50"><td className="p-2.5 font-bold text-stone-900">LAST-ACK</td><td>Passive Closer</td><td>Local FIN sent; awaiting final ACK.</td></tr>
                        <tr className="hover:bg-stone-50"><td className="p-2.5 font-bold text-orange-700">TIME-WAIT</td><td>Active Closer</td><td>Waiting 2MSL (60s) to absorb delayed duplicate packets.</td></tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900 space-y-1">
                    <span className="font-bold">Production Troubleshooting Insight:</span> A buildup of hundreds of sockets in <code className="font-mono bg-white px-1">CLOSE-WAIT</code> indicates an <strong>application software bug</strong> where the application failed to call <code className="font-mono">close()</code> after its client disconnected, causing a socket descriptor leak!
                  </div>
                </div>
              )}

              {/* SECTION 9.7 */}
              {activeSection === "9.7" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                    <span>SECTION 9.7</span>
                    <span>&bull;</span>
                    <span>LOSS RECOVERY</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">Retransmission, RTO &amp; Fast Retransmit (3 Dup ACKs)</h2>

                  <p className="text-stone-700 leading-relaxed">
                    TCP relies on two distinct mechanisms to detect and recover from lost segments:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
                      <h4 className="font-bold text-stone-900">1. Retransmission Timeout (RTO)</h4>
                      <p className="text-stone-600 leading-relaxed">
                        An adaptive timer calculated dynamically using smoothed round-trip time (SRTT) and variance (RTTVAR) via the Jacobson/Karels algorithm:
                      </p>
                      <code className="block bg-white p-2 rounded border border-stone-200 font-mono text-center text-[#ea580c]">
                        RTO = SRTT + 4 × RTTVAR
                      </code>
                      <p className="text-stone-600">
                        If no acknowledgment arrives before RTO expires, TCP retransmits the oldest unacknowledged packet and drops cwnd to 1 MSS (entering Slow Start).
                      </p>
                    </div>

                    <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
                      <h4 className="font-bold text-stone-900">2. Fast Retransmit (3 Duplicate ACKs)</h4>
                      <p className="text-stone-600 leading-relaxed">
                        When an out-of-order segment arrives, the receiver returns a duplicate ACK for the last contiguous byte. The sender treats <strong>3 consecutive Duplicate ACKs</strong> as proof of loss and retransmits the missing segment immediately without waiting for RTO!
                      </p>
                      <div className="p-2 bg-emerald-50 rounded border border-emerald-200 text-emerald-900">
                        Selective Acknowledgments (SACK - RFC 2018) allows the receiver to report non-contiguous byte blocks, preventing unnecessary retransmissions of segments that already arrived.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 9.8 */}
              {activeSection === "9.8" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                    <span>SECTION 9.8</span>
                    <span>&bull;</span>
                    <span>FLOW &amp; CONGESTION</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">Sliding Windows: Flow Control vs. Congestion Control</h2>

                  <p className="text-stone-700 leading-relaxed">
                    TCP uses a sliding window protocol to pipeline multiple segments into flight simultaneously, maximizing link utilization. The maximum amount of unacknowledged data a sender may have in flight is strictly constrained:
                  </p>

                  <div className="p-3 bg-stone-100 rounded-xl font-mono text-center text-sm font-bold text-[#ea580c]">
                    Effective Send Window ≈ min(rwnd, cwnd)
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mt-4">
                    <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-1">
                      <h4 className="font-bold text-stone-900">Receiver Flow Control (rwnd)</h4>
                      <p className="text-stone-600 leading-relaxed">
                        Advertised in the TCP header Window field. Informs the sender how many bytes the receiver's application buffer can accept before overflowing. If <code className="font-mono">rwnd = 0</code>, the sender halts and triggers Zero Window Probes.
                      </p>
                    </div>

                    <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-1">
                      <h4 className="font-bold text-stone-900">Network Congestion Control (cwnd)</h4>
                      <p className="text-stone-600 leading-relaxed">
                        Maintained internally by the sender's kernel stack. Probes available path capacity:
                        <br />&bull; <strong>Slow Start:</strong> Exponential growth (doubles every RTT).
                        <br />&bull; <strong>Congestion Avoidance:</strong> Linear growth (+1 MSS per RTT).
                        <br />&bull; Modern algorithms: <strong>CUBIC</strong> (Linux default) &amp; <strong>BBR</strong> (Bottleneck Bandwidth and RTT).
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 9.9 */}
              {activeSection === "9.9" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                    <span>SECTION 9.9</span>
                    <span>&bull;</span>
                    <span>MTU &amp; BLACK HOLES</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">MSS, MTU, IP Fragmentation &amp; PMTUD Black Holes</h2>

                  <p className="text-stone-700 leading-relaxed">
                    The <strong>Maximum Transmission Unit (MTU)</strong> is the largest IP packet that can traverse a link without fragmentation (standard Ethernet = 1500 bytes). The <strong>Maximum Segment Size (MSS)</strong> is the maximum application payload TCP will put into a single segment:
                  </p>

                  <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 font-mono text-xs space-y-2">
                    <div className="text-stone-900 font-bold">Standard Calculations (Assuming 1500 MTU):</div>
                    <div>IPv4: MSS = 1500 - 20 (IP) - 20 (TCP) = <strong className="text-[#ea580c]">1460 bytes</strong></div>
                    <div>IPv6: MSS = 1500 - 40 (IPv6) - 20 (TCP) = <strong className="text-[#ea580c]">1440 bytes</strong></div>
                  </div>

                  <div className="p-4 bg-red-50 rounded-2xl border border-red-200 text-xs text-red-950 space-y-2">
                    <h4 className="font-bold flex items-center gap-1.5 text-red-900">
                      <AlertTriangle size={16} className="text-red-600" />
                      The Path MTU Discovery (PMTUD) Black Hole
                    </h4>
                    <p className="leading-relaxed">
                      Path MTU Discovery sets the <strong>Don't Fragment (DF)</strong> bit on all IPv4 packets. When a packet encounters an intermediate tunnel (e.g. IPsec or GRE) with a smaller MTU (e.g. 1420), the router drops the packet and generates an <strong>ICMP Type 3, Code 4 (Fragmentation Needed)</strong> message.
                    </p>
                    <p className="leading-relaxed font-semibold">
                      If security firewalls drop all incoming ICMP packets, the sender never receives the notification. The TCP handshake succeeds (since SYN packets are small), but as soon as the client downloads a large file, the connection hangs and stalls indefinitely!
                    </p>
                  </div>
                </div>
              )}

              {/* SECTION 9.10 */}
              {activeSection === "9.10" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                    <span>SECTION 9.10</span>
                    <span>&bull;</span>
                    <span>THROUGHPUT ENGINEERING</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">Bandwidth-Delay Product (BDP) &amp; Buffer Tuning</h2>

                  <p className="text-stone-700 leading-relaxed">
                    The Bandwidth-Delay Product (BDP) defines the volume of unacknowledged data that must be in flight across the network pipe to fully saturate available bandwidth:
                  </p>

                  <div className="p-4 bg-stone-900 text-stone-100 rounded-2xl font-mono text-xs text-center">
                    <span className="text-orange-400 font-bold text-sm">BDP = Bandwidth (bps) × Round-Trip Time (seconds)</span>
                    <div className="text-stone-300 text-xs mt-1">
                      Example: 1 Gbps link with 50 ms latency &rarr; 1,000,000,000 × 0.050 = 50,000,000 bits = <strong>6.25 Megabytes!</strong>
                    </div>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    If an application's TCP socket buffer or the receiver's window is capped at the legacy 16-bit limit of 64 KB, the connection will only achieve <code className="font-mono">64 KB / 0.050s = 10.2 Mbps</code>—a <strong>99% throughput loss</strong> on a 1 Gbps fiber link! Modern TCP stacks require <strong>Window Scaling (RFC 7323)</strong> to scale window sizes into megabytes.
                  </p>
                </div>
              )}

              {/* SECTION 9.11 */}
              {activeSection === "9.11" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                    <span>SECTION 9.11</span>
                    <span>&bull;</span>
                    <span>TRANSPORT SECURITY</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">TCP Security: SYN Floods &amp; SYN Cookies</h2>

                  <p className="text-stone-700 leading-relaxed">
                    In a standard TCP implementation, when a server receives a SYN packet, it allocates a state block in its kernel memory (the <code className="font-mono bg-white px-1">SYN_RECV</code> backlog queue) and starts an RTO timer while awaiting the client's final ACK.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 bg-red-50 rounded-2xl border border-red-200 space-y-2">
                      <h4 className="font-bold text-red-900">The SYN Flood Attack</h4>
                      <p className="text-red-950 leading-relaxed">
                        An adversary floods millions of SYN packets with forged, non-existent source IP addresses. The server allocates memory for each request. Because the source IPs are fake, the final ACK never arrives. The backlog queue saturates to 100%, and the kernel drops all subsequent connection attempts from legitimate users.
                      </p>
                    </div>

                    <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-2">
                      <h4 className="font-bold text-emerald-900">The SYN Cookies Defense (RFC 4987)</h4>
                      <p className="text-emerald-950 leading-relaxed">
                        When the backlog fills, the kernel stops allocating memory for half-open sockets. Instead, it crafts a cryptographically hashed Initial Sequence Number (ISN) containing the 4-tuple and timestamp. When a legitimate client returns the final ACK, the server verifies the hash, reconstructs the connection, and creates the socket on the fly without any memory exhaustion.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------------- */}
        {/* TAB 2: THREE-WAY HANDSHAKE & TEARDOWN SIMULATOR                      */}
        {/* -------------------------------------------------------------------- */}
        {activeTab === "handshake-sim" && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                  <Workflow size={14} />
                  <span>CONNECTION LIFECYCLE SIMULATOR</span>
                </div>
                <h2 className="text-2xl font-bold text-stone-900 mt-1">
                  Three-Way Handshake, Data Transfer &amp; Graceful Teardown
                </h2>
                <p className="text-xs text-stone-600 max-w-2xl mt-1">
                  Step through the complete state transitions of a TCP connection. Observe sequence and acknowledgment number increments, full-duplex FIN teardown, and RST aborts.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={resetHandshake}
                  className="px-3 py-1.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 text-xs font-semibold text-stone-700 flex items-center gap-1.5 transition cursor-pointer"
                >
                  <RotateCcw size={14} />
                  <span>Reset</span>
                </button>
                <button
                  onClick={triggerReset}
                  className="px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition cursor-pointer shadow"
                >
                  Simulate Closed Port (RST)
                </button>
              </div>
            </div>

            {/* Current Connection State Display */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-stone-900 text-stone-100 rounded-2xl font-mono text-xs space-y-1">
                <div className="text-stone-400 text-[10px] uppercase font-bold">Client Socket (192.168.1.20:51514)</div>
                <div className="text-emerald-400 font-bold text-sm">{clientState}</div>
              </div>
              <div className="p-4 bg-stone-900 text-stone-100 rounded-2xl font-mono text-xs space-y-1">
                <div className="text-stone-400 text-[10px] uppercase font-bold">Server Socket (203.0.113.10:443)</div>
                <div className="text-emerald-400 font-bold text-sm">{serverState}</div>
              </div>
            </div>

            {/* Step Controls */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                disabled={connPhase !== "closed" && connPhase !== "syn-sent"}
                onClick={stepHandshake}
                className="px-4 py-2 bg-[#ea580c] hover:bg-orange-600 disabled:opacity-40 text-white rounded-xl text-xs font-bold transition cursor-pointer shadow"
              >
                {connPhase === "closed" ? "1. Send Client SYN" : "2. Complete Handshake (SYN-ACK & ACK)"}
              </button>

              <button
                disabled={connPhase !== "established" && connPhase !== "data-sent"}
                onClick={stepSendData}
                className="px-4 py-2 bg-stone-900 hover:bg-stone-800 disabled:opacity-40 text-white rounded-xl text-xs font-bold transition cursor-pointer shadow"
              >
                Send 500-Byte HTTP Request (PSH, ACK)
              </button>

              <button
                disabled={connPhase !== "established" && connPhase !== "data-sent"}
                onClick={stepTeardown}
                className="px-4 py-2 bg-stone-700 hover:bg-stone-600 disabled:opacity-40 text-white rounded-xl text-xs font-bold transition cursor-pointer shadow"
              >
                Initiate Graceful Teardown (FIN)
              </button>
            </div>

            {/* Ladder Packet Trace */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Segment Flow &amp; Packet Header Trace:
              </h4>

              {packetLadder.length === 0 ? (
                <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 text-center text-xs text-stone-500">
                  Connection is CLOSED. Click "1. Send Client SYN" to initiate connection establishment.
                </div>
              ) : (
                packetLadder.map((pkt, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-2xl border font-mono text-xs transition ${
                      pkt.flags.includes("RST")
                        ? "bg-rose-50 border-rose-300 text-rose-950"
                        : pkt.flags.includes("FIN")
                        ? "bg-amber-50 border-amber-300 text-amber-950"
                        : pkt.flags.includes("SYN")
                        ? "bg-orange-50 border-orange-300 text-stone-900"
                        : "bg-stone-50 border-stone-200 text-stone-900"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200/60 pb-1.5 mb-1.5">
                      <span className="font-bold">
                        [{pkt.step}] {pkt.dir} &bull; Flags: <span className="text-[#ea580c]">{pkt.flags}</span>
                      </span>
                      <span className="text-stone-500 text-[11px]">
                        SEQ={pkt.seq} | ACK={pkt.ack} | LEN={pkt.len}B
                      </span>
                    </div>
                    <p className="font-sans text-[11px] text-stone-700">{pkt.desc}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------------- */}
        {/* TAB 3: SLIDING WINDOW & FLOW CONTROL SIMULATOR                       */}
        {/* -------------------------------------------------------------------- */}
        {activeTab === "window-sim" && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                  <SlidersHorizontal size={14} />
                  <span>WINDOW SLICING &amp; BUFFER CONTROL</span>
                </div>
                <h2 className="text-2xl font-bold text-stone-900 mt-1">
                  Sliding Window &amp; Receiver Flow Control (rwnd vs cwnd)
                </h2>
                <p className="text-xs text-stone-600 max-w-2xl mt-1">
                  Adjust receiver advertised window and network congestion window. Transmit data and observe how in-flight bytes shrink usable window capacity until cumulative acknowledgments arrive.
                </p>
              </div>

              <button
                onClick={toggleZeroWindow}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                  isZeroWindow ? "bg-rose-600 text-white" : "bg-stone-100 hover:bg-stone-200 text-stone-800"
                }`}
              >
                {isZeroWindow ? "Recover Zero Window" : "Simulate Receiver Full (rwnd=0)"}
              </button>
            </div>

            {/* Sliders */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2 text-xs">
                <div className="flex justify-between font-bold text-stone-900">
                  <span>Receiver Flow Window (rwnd):</span>
                  <span className="text-[#ea580c] font-mono">{rwndKB} KB</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="64"
                  step="4"
                  value={rwndKB}
                  disabled={isZeroWindow}
                  onChange={(e) => setRwndKB(parseInt(e.target.value, 10))}
                  className="w-full accent-orange-600"
                />
                <span className="text-[10px] text-stone-500">Limits data to protect receiver memory buffer.</span>
              </div>

              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2 text-xs">
                <div className="flex justify-between font-bold text-stone-900">
                  <span>Congestion Window (cwnd):</span>
                  <span className="text-[#ea580c] font-mono">{cwndKB} KB</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="64"
                  step="4"
                  value={cwndKB}
                  onChange={(e) => setCwndKB(parseInt(e.target.value, 10))}
                  className="w-full accent-orange-600"
                />
                <span className="text-[10px] text-stone-500">Dynamically estimated to protect network path from congestion.</span>
              </div>
            </div>

            {/* Calculations Card */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center font-mono text-xs">
              <div className="p-3 bg-stone-900 text-stone-100 rounded-2xl">
                <div className="text-stone-400 text-[10px] uppercase font-bold">Effective Send Window</div>
                <div className="text-lg font-bold text-orange-400 mt-1">{effectiveWindowKB} KB</div>
                <div className="text-[9px] text-stone-500">min(rwnd, cwnd)</div>
              </div>
              <div className="p-3 bg-stone-900 text-stone-100 rounded-2xl">
                <div className="text-stone-400 text-[10px] uppercase font-bold">Bytes Currently In-Flight</div>
                <div className="text-lg font-bold text-amber-400 mt-1">{inFlightKB} KB</div>
                <div className="text-[9px] text-stone-500">Unacknowledged data</div>
              </div>
              <div className="p-3 bg-stone-900 text-stone-100 rounded-2xl">
                <div className="text-stone-400 text-[10px] uppercase font-bold">Usable Window Remaining</div>
                <div className="text-lg font-bold text-emerald-400 mt-1">{usableWindowKB} KB</div>
                <div className="text-[9px] text-stone-500">Eligible to send immediately</div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                disabled={usableWindowKB < 2}
                onClick={transmitChunk}
                className="px-4 py-2 bg-[#ea580c] hover:bg-orange-600 disabled:opacity-40 text-white rounded-xl text-xs font-bold transition cursor-pointer shadow"
              >
                Transmit 2 KB Payload
              </button>
              <button
                disabled={inFlightKB <= 0}
                onClick={receiveAck}
                className="px-4 py-2 bg-stone-900 hover:bg-stone-800 disabled:opacity-40 text-white rounded-xl text-xs font-bold transition cursor-pointer shadow"
              >
                Receive Cumulative ACK (Free 2 KB)
              </button>
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------------- */}
        {/* TAB 4: LOSS, RTO & FAST RETRANSMIT (3 DUP ACKS)                      */}
        {/* -------------------------------------------------------------------- */}
        {activeTab === "loss-sim" && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                  <RotateCcw size={14} />
                  <span>LOSS RECOVERY ENGINE</span>
                </div>
                <h2 className="text-2xl font-bold text-stone-900 mt-1">
                  Fast Retransmit (3 Duplicate ACKs) vs. RTO Timeout
                </h2>
                <p className="text-xs text-stone-600 max-w-2xl mt-1">
                  Observe how TCP detects isolated packet loss without waiting for a retransmission timeout (RTO). Toggle Selective Acknowledgments (SACK) to see how missing blocks are signaled.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={resetLoss}
                  className="px-3 py-1.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 text-xs font-semibold text-stone-700 transition cursor-pointer"
                >
                  Reset Trace
                </button>
                <button
                  onClick={() => setSackEnabled(!sackEnabled)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                    sackEnabled ? "bg-emerald-600 text-white" : "bg-stone-200 text-stone-700"
                  }`}
                >
                  SACK: {sackEnabled ? "ENABLED" : "DISABLED"}
                </button>
                <button
                  disabled={lossStep >= 4}
                  onClick={advanceLoss}
                  className="px-4 py-2 bg-[#ea580c] hover:bg-orange-600 disabled:opacity-40 text-white rounded-xl text-xs font-bold transition cursor-pointer shadow"
                >
                  <span>Step Event ({lossStep}/4)</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Sequence Flow Grid */}
            <div className="space-y-3">
              {lossEvents.map((ev) => {
                const isPassed = lossStep >= ev.step;
                return (
                  <div
                    key={ev.step}
                    className={`p-4 rounded-2xl border transition-all ${
                      isPassed
                        ? ev.status === "dropped"
                          ? "bg-rose-50 border-rose-300 text-rose-950 font-bold"
                          : ev.status === "retransmitted"
                          ? "bg-emerald-50 border-emerald-300 text-emerald-950 font-bold"
                          : "bg-stone-50 border-stone-200 text-stone-900"
                        : "bg-white border-stone-200 opacity-30"
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold">Stage {ev.step}: {ev.label}</span>
                      <span className="font-mono text-[11px]">{ev.seqs.join(" | ")}</span>
                    </div>

                    {isPassed && ev.step === 3 && sackEnabled && (
                      <div className="mt-2 p-2 bg-white rounded-xl border border-stone-200 font-mono text-[11px] text-emerald-800">
                        SACK Option Active: <code className="font-bold">TCP SACK SLE=4000 SRE=5000</code> &bull; Receiver informs sender that Segment 4 arrived safely; retransmit ONLY Segment 3!
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------------- */}
        {/* TAB 5: BDP & PMTUD CALCULATOR                                        */}
        {/* -------------------------------------------------------------------- */}
        {activeTab === "bdp-sim" && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                  <Gauge size={14} />
                  <span>THROUGHPUT &amp; MTU MODELING</span>
                </div>
                <h2 className="text-2xl font-bold text-stone-900 mt-1">
                  Bandwidth-Delay Product &amp; Path MTU Discovery
                </h2>
                <p className="text-xs text-stone-600 max-w-2xl mt-1">
                  Calculate the exact buffer size required to saturate high-latency links without stalling. Evaluate overhead for IPsec, GRE, and VXLAN tunnels to prevent PMTUD black holes.
                </p>
              </div>
            </div>

            {/* BDP Sliders */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2 text-xs">
                <div className="flex justify-between font-bold text-stone-900">
                  <span>Link Bandwidth:</span>
                  <span className="text-[#ea580c] font-mono">{bandwidthMbps} Mbps</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="1000"
                  step="10"
                  value={bandwidthMbps}
                  onChange={(e) => setBandwidthMbps(parseInt(e.target.value, 10))}
                  className="w-full accent-orange-600 cursor-pointer"
                />
              </div>

              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2 text-xs">
                <div className="flex justify-between font-bold text-stone-900">
                  <span>Round-Trip Time (RTT):</span>
                  <span className="text-[#ea580c] font-mono">{rttMs} ms</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="200"
                  step="5"
                  value={rttMs}
                  onChange={(e) => setRttMs(parseInt(e.target.value, 10))}
                  className="w-full accent-orange-600 cursor-pointer"
                />
              </div>
            </div>

            {/* BDP Results */}
            <div className="p-5 bg-stone-900 text-stone-100 rounded-3xl font-mono text-xs space-y-2 text-center sm:text-left">
              <div className="text-orange-400 font-bold uppercase tracking-wider text-[10px]">
                Calculated Bandwidth-Delay Product (BDP):
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white">
                {bdpCalculations.bytes.toLocaleString()} Bytes ({bdpCalculations.kbytes} KB) &bull; ~{bdpCalculations.mssCount} Segments
              </div>
              <p className="text-stone-400 text-[11px] font-sans">
                To saturate this {bandwidthMbps} Mbps connection over {rttMs}ms RTT, your operating system socket buffer (<code className="font-mono text-stone-300">tcp_rmem / tcp_wmem</code>) must support at least {bdpCalculations.kbytes} KB in flight.
              </p>
            </div>

            {/* MTU / Tunnel Profiles */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Tunnel Overhead &amp; MSS Clamping Reference:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                {Object.entries(mtuProfiles).map(([key, val]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedMtuType(key)}
                    className={`p-3 rounded-2xl border text-left transition cursor-pointer ${
                      selectedMtuType === key
                        ? "bg-orange-50 border-orange-400 ring-2 ring-[#ea580c]"
                        : "bg-stone-50 border-stone-200 hover:bg-stone-100"
                    }`}
                  >
                    <div className="text-xs font-bold text-stone-900">{val.name}</div>
                    <div className="text-[11px] font-mono text-[#ea580c] font-bold mt-1">MSS = {val.mss}B</div>
                    <div className="text-[10px] text-stone-500 mt-0.5">MTU {val.mtu}B</div>
                  </button>
                ))}
              </div>

              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-700">
                <strong>Selected Profile:</strong> {mtuProfiles[selectedMtuType].name} (MTU: {mtuProfiles[selectedMtuType].mtu} bytes). Payload limit: <span className="font-mono font-bold text-[#ea580c]">{mtuProfiles[selectedMtuType].mss} bytes</span>. {mtuProfiles[selectedMtuType].desc}.
              </div>
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------------- */}
        {/* TAB 6: SYN FLOOD & SYN COOKIES DEFENSE SANDBOX                       */}
        {/* -------------------------------------------------------------------- */}
        {activeTab === "sec-sim" && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                  <ShieldCheck size={14} />
                  <span>TRANSPORT SECURITY LAB</span>
                </div>
                <h2 className="text-2xl font-bold text-stone-900 mt-1">
                  SYN Flood Attack &amp; Cryptographic SYN Cookies Defense
                </h2>
                <p className="text-xs text-stone-600 max-w-2xl mt-1">
                  Simulate an adversary flooding thousands of half-open TCP connection requests. Test how RFC 4987 SYN Cookies protect legitimate users from denial-of-service.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSynCookiesActive(!synCookiesActive)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                    synCookiesActive ? "bg-emerald-600 text-white" : "bg-stone-200 text-stone-700"
                  }`}
                >
                  SYN Cookies: {synCookiesActive ? "ENABLED" : "DISABLED"}
                </button>
                <button
                  onClick={toggleFlood}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                    floodActive ? "bg-rose-600 text-white" : "bg-stone-900 text-white"
                  }`}
                >
                  {floodActive ? "Halt SYN Flood" : "Launch SYN Flood"}
                </button>
              </div>
            </div>

            {/* Server Backlog Meter */}
            <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200 space-y-3">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-stone-900">Server SYN_RECV Backlog Queue Usage:</span>
                <span className={backlogUsage >= 100 ? "text-rose-600 font-bold font-mono" : "text-emerald-700 font-mono"}>
                  {backlogUsage}% {backlogUsage >= 100 && "(EXHAUSTED!)"}
                </span>
              </div>
              <div className="w-full bg-stone-200 h-3 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 ${
                    backlogUsage >= 100 ? "bg-rose-600" : backlogUsage > 50 ? "bg-amber-500" : "bg-emerald-600"
                  }`}
                  style={{ width: `${backlogUsage}%` }}
                />
              </div>
            </div>

            {/* Test Legitimate User Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-stone-100 rounded-2xl">
              <span className="text-xs font-bold text-stone-800">
                Test Connection as a Legitimate User:
              </span>
              <button
                onClick={testLegitimateClient}
                className="px-4 py-2 bg-[#ea580c] hover:bg-orange-600 text-white rounded-xl text-xs font-bold transition cursor-pointer shadow"
              >
                Attempt 3-Way Handshake
              </button>
            </div>

            {/* Result Box */}
            {testConnResult && (
              <div
                className={`p-4 rounded-2xl border text-xs font-mono ${
                  testConnResult.status === "success"
                    ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                    : "bg-rose-50 border-rose-300 text-rose-950"
                }`}
              >
                <div className="font-bold text-sm mb-1">{testConnResult.title}</div>
                <p className="font-sans text-[11px] leading-relaxed">{testConnResult.desc}</p>
              </div>
            )}
          </div>
        )}

        {/* -------------------------------------------------------------------- */}
        {/* TAB 7: LINUX SS & SOCKET CLI REFERENCE                               */}
        {/* -------------------------------------------------------------------- */}
        {activeTab === "cli" && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
              <Terminal size={14} />
              <span>PRODUCTION COMMAND CHEATSHEET</span>
            </div>
            <h2 className="text-2xl font-bold text-stone-900">Linux TCP Diagnostics &amp; Socket Inspection</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* ss block */}
              <div className="p-4 bg-stone-900 text-stone-100 rounded-2xl font-mono text-xs space-y-3">
                <div className="flex items-center justify-between border-b border-stone-800 pb-2 text-emerald-400 font-bold">
                  <span>Socket Statistics (ss)</span>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `ss -tan\nss -ltn\nss -tan state time-wait\nss -tin 'sport = :443'`,
                        "ss-cli"
                      )
                    }
                    className="text-stone-400 hover:text-white flex items-center gap-1 text-[11px] cursor-pointer"
                  >
                    {copiedCodeId === "ss-cli" ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    <span>{copiedCodeId === "ss-cli" ? "Copied" : "Copy"}</span>
                  </button>
                </div>
                <pre className="text-stone-300 text-[11px] leading-relaxed overflow-x-auto">
{`# Show all established TCP sockets:
ss -tan

# Show listening TCP ports:
ss -ltn

# Filter sockets in TIME-WAIT state:
ss -tan state time-wait

# Deep socket TCP internal metrics (RTT, cwnd, ssthresh):
ss -tin 'sport = :443'

# Check TCP system counters (retransmits, resets):
nstat -az | grep -i tcp`}
                </pre>
              </div>

              {/* tcpdump & kernel tuning block */}
              <div className="p-4 bg-stone-900 text-stone-100 rounded-2xl font-mono text-xs space-y-3">
                <div className="flex items-center justify-between border-b border-stone-800 pb-2 text-orange-400 font-bold">
                  <span>Kernel Tuning &amp; tcpdump</span>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `sudo tcpdump -i any -nn 'tcp[tcpflags] & (tcp-syn|tcp-fin) != 0'\nsysctl -w net.ipv4.tcp_syncookies=1`,
                        "kernel-cli"
                      )
                    }
                    className="text-stone-400 hover:text-white flex items-center gap-1 text-[11px] cursor-pointer"
                  >
                    {copiedCodeId === "kernel-cli" ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    <span>{copiedCodeId === "kernel-cli" ? "Copied" : "Copy"}</span>
                  </button>
                </div>
                <pre className="text-stone-300 text-[11px] leading-relaxed overflow-x-auto">
{`# Capture only SYN and FIN packets (Handshake tracking):
sudo tcpdump -i any -nn 'tcp[tcpflags] & (tcp-syn|tcp-fin) != 0'

# Capture TCP resets:
sudo tcpdump -i any -nn 'tcp[tcpflags] & tcp-rst != 0'

# Enable SYN Cookies defense:
sudo sysctl -w net.ipv4.tcp_syncookies=1

# Check current congestion control algorithm (e.g. cubic, bbr):
sysctl net.ipv4.tcp_congestion_control`}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------------- */}
        {/* TAB 8: KNOWLEDGE CHECK ASSESSMENT                                    */}
        {/* -------------------------------------------------------------------- */}
        {activeTab === "quiz" && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                  <Award size={14} />
                  <span>ASSESSMENT MODULE</span>
                </div>
                <h2 className="text-2xl font-bold text-stone-900 mt-1">Module 9 Examination: TCP Internals</h2>
                <p className="text-xs text-stone-600 max-w-2xl mt-1">
                  Validate your mastery of sequence number byte counting, 3-way handshake mechanics, flow vs congestion control, Fast Retransmit, and PMTUD black hole recovery.
                </p>
              </div>

              {showResults && (
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs font-mono">
                  <div className="text-[10px] uppercase text-stone-400 font-bold">Your Score</div>
                  <div className="text-lg font-bold text-[#ea580c]">
                    {calculateScore()} / {quizQuestions.length} ({Math.round((calculateScore() / quizQuestions.length) * 100)}%)
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {quizQuestions.map((q, idx) => {
                const userChoice = selectedAnswers[q.id];
                const isCorrect = userChoice === q.correct;
                return (
                  <div key={q.id} className="p-5 rounded-2xl border border-stone-200 bg-stone-50/50 space-y-3">
                    <div className="font-bold text-sm text-stone-900">
                      {idx + 1}. {q.question}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {q.options.map((opt, optIdx) => {
                        const isSelected = userChoice === optIdx;
                        let optionStyle = "bg-white border-stone-200 text-stone-700 hover:border-stone-400";
                        if (showResults) {
                          if (optIdx === q.correct) {
                            optionStyle = "bg-emerald-50 border-emerald-500 text-emerald-900 font-bold";
                          } else if (isSelected && !isCorrect) {
                            optionStyle = "bg-red-50 border-red-500 text-red-900";
                          } else {
                            optionStyle = "bg-white border-stone-200 text-stone-400 opacity-60";
                          }
                        } else if (isSelected) {
                          optionStyle = "bg-orange-50 border-[#ea580c] text-[#ea580c] font-bold";
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={showResults}
                            onClick={() => handleSelectAnswer(q.id, optIdx)}
                            className={`p-3 rounded-xl border text-left text-xs transition cursor-pointer ${optionStyle}`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>

                    {showResults && (
                      <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs text-stone-600">
                        <strong className="text-stone-900">Explanation:</strong> {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-stone-200">
              <button
                onClick={() => {
                  setSelectedAnswers({});
                  setShowResults(false);
                }}
                className="px-4 py-2 rounded-xl border border-stone-300 text-xs font-bold text-stone-700 hover:bg-stone-50 transition cursor-pointer"
              >
                Reset Exam
              </button>

              <button
                onClick={() => setShowResults(true)}
                disabled={Object.keys(selectedAnswers).length === 0}
                className="px-5 py-2.5 rounded-xl bg-[#ea580c] hover:bg-orange-600 text-white text-xs font-bold transition cursor-pointer shadow disabled:opacity-40"
              >
                Submit Assessment
              </button>
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------------- */}
        {/* TAB 9: LAB REPORT & INCIDENT REPORT TEMPLATE                         */}
        {/* -------------------------------------------------------------------- */}
        {activeTab === "lab-report" && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                  <ListChecks size={14} />
                  <span>WIRESHARK LAB &amp; TECHNICAL INCIDENT REPORT</span>
                </div>
                <h2 className="text-2xl font-bold text-stone-900 mt-1">
                  Wireshark Packet Analysis &amp; Report Generator
                </h2>
                <p className="text-xs text-stone-600 max-w-2xl mt-1">
                  Complete the hands-on Wireshark packet capture exercises. Copy the production incident report covering 3-way handshake analysis, Fast Retransmissions, and PMTUD black hole remediation.
                </p>
              </div>

              <button
                onClick={() => copyToClipboard(wiresharkReportTemplate, "wireshark-report")}
                className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow"
              >
                {copiedCodeId === "wireshark-report" ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copiedCodeId === "wireshark-report" ? "Report Copied" : "Copy Wireshark Incident Report"}</span>
              </button>
            </div>

            {/* Checklist */}
            <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Wireshark Lab Milestone Checklist:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {[
                  { key: "captureHandshake", label: "1. Capture 3-way handshake in Wireshark (tcp.port == 8000)" },
                  { key: "analyzeSeqAck", label: "2. Verify ISN synchronization & relative sequence numbering" },
                  { key: "observeReset", label: "3. Connect to closed port and observe RST flag (tcp.flags.reset == 1)" },
                  { key: "inspectRetransmit", label: "4. Identify retransmission and 3 duplicate ACKs in packet trace" },
                  { key: "checkSockets", label: "5. Inspect socket states using Linux ss -tan (TIME-WAIT vs CLOSE-WAIT)" },
                  { key: "calcBdp", label: "6. Calculate BDP for WAN link and evaluate Window Scaling factor" },
                  { key: "incidentReport", label: "7. Document PMTUD black hole diagnosis and MSS clamping fix" },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => toggleChecklistItem(item.key)}
                    className="flex items-center gap-2 p-2.5 rounded-xl border border-stone-200 bg-white text-left text-stone-800 transition cursor-pointer hover:border-orange-300"
                  >
                    <div
                      className={`w-4 h-4 rounded-md border flex items-center justify-center ${
                        labChecklist[item.key]
                          ? "bg-emerald-600 border-emerald-600 text-white"
                          : "border-stone-300 bg-white"
                      }`}
                    >
                      {labChecklist[item.key] && <Check size={12} />}
                    </div>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Markdown Report Preview */}
            <div className="p-4 bg-stone-900 text-stone-100 rounded-2xl font-mono text-xs space-y-2">
              <div className="text-stone-400 text-[10px] uppercase font-bold flex items-center justify-between border-b border-stone-800 pb-2">
                <span>Markdown Wireshark Report Preview (RFC 9293 &amp; SRE Standard)</span>
                <span>Production Ready</span>
              </div>
              <pre className="text-stone-300 text-[11px] leading-relaxed overflow-x-auto max-h-80 whitespace-pre-wrap">
                {wiresharkReportTemplate}
              </pre>
            </div>
          </div>
        )}

        {/* Footer Navigation Bar */}
        <div className="mt-10 pt-6 border-t border-[#e7e3da] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => navigate("/learning/networks/config")}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#e7e3da] bg-white text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#ea580c] transition cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 8 — ICMP, ARP, DHCP &amp; Host Configuration</span>
          </button>

          <button
            onClick={() => {
              navigate("/learning/networks/udp");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-xs font-bold text-white shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
          >
            <span>Next: Module 10 — UDP, QUIC &amp; Modern Transport</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
