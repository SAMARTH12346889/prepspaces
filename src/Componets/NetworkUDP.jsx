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
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* COMPUTER NETWORKS & INTERNET ENGINEERING: MODULE 10                        */
/* UDP, QUIC AND MODERN TRANSPORT ARCHITECTURE                                */
/* -------------------------------------------------------------------------- */

export default function NetworkUDP() {
  const navigate = useNavigate();

  // Active top-level tabs
  const [activeTab, setActiveTab] = useState("theory"); // theory | udp-sim | hol-sim | quic-handshake-sim | migration-sim | ddos-sim | cli | quiz | lab-report
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // Theory sub-section tracking
  const [activeSection, setActiveSection] = useSyncedTopic("10.1");

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 1: UDP 8-BYTE HEADER & CHECKSUM CALCULATOR                      */
  /* -------------------------------------------------------------------------- */
  const [srcPort, setSrcPort] = useState(53281);
  const [dstPort, setDstPort] = useState(53);
  const [udpPayload, setUdpPayload] = useState("DNS Query: prepspaces.com (Type A)");
  const [ipVersion, setIpVersion] = useState("ipv4"); // ipv4 | ipv6

  const udpPayloadLength = useMemo(() => {
    return new TextEncoder().encode(udpPayload).length;
  }, [udpPayload]);

  const udpTotalLength = useMemo(() => {
    return 8 + udpPayloadLength; // 8 byte header + payload
  }, [udpPayloadLength]);

  const simulatedChecksum = useMemo(() => {
    // 16-bit pseudo-calculation representation
    const seed = (srcPort + dstPort + udpTotalLength + udpPayloadLength * 17) & 0xffff;
    const hex = seed.toString(16).toUpperCase().padStart(4, "0");
    return `0x${hex}`;
  }, [srcPort, dstPort, udpTotalLength, udpPayloadLength]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 2: HTTP/2 (TCP) VS HTTP/3 (QUIC) HEAD-OF-LINE BLOCKING           */
  /* -------------------------------------------------------------------------- */
  const [tcpLostStream, setTcpLostStream] = useState(null); // null | "s1" | "s2" | "s3"
  const [quicLostStream, setQuicLostStream] = useState(null); // null | "s1" | "s2" | "s3"
  const [isSimulatingHol, setIsSimulatingHol] = useState(false);

  const triggerPacketDrop = (streamId) => {
    setTcpLostStream(streamId);
    setQuicLostStream(streamId);
    setIsSimulatingHol(true);
  };

  const resetHolSim = () => {
    setTcpLostStream(null);
    setQuicLostStream(null);
    setIsSimulatingHol(false);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 3: QUIC 0-RTT / 1-RTT VS TCP + TLS 1.3 HANDSHAKE TIMELINE       */
  /* -------------------------------------------------------------------------- */
  const [handshakeMode, setHandshakeMode] = useState("tcp-tls13"); // tcp-tls12 | tcp-tls13 | quic-1rtt | quic-0rtt
  const [handshakeStep, setHandshakeStep] = useState(0);

  const handshakeFlights = useMemo(() => {
    switch (handshakeMode) {
      case "tcp-tls12":
        return [
          { rtt: "0.5 RTT", dir: "Client &rarr; Server", desc: "TCP SYN (Seq=x)" },
          { rtt: "1.0 RTT", dir: "Server &rarr; Client", desc: "TCP SYN-ACK (Seq=y, Ack=x+1)" },
          { rtt: "1.5 RTT", dir: "Client &rarr; Server", desc: "TCP ACK + TLS ClientHello (Cipher Suites)" },
          { rtt: "2.0 RTT", dir: "Server &rarr; Client", desc: "TLS ServerHello + Certificate + ServerKeyExchange + Done" },
          { rtt: "2.5 RTT", dir: "Client &rarr; Server", desc: "TLS ClientKeyExchange + ChangeCipherSpec + Finished" },
          { rtt: "3.0 RTT", dir: "Server &rarr; Client", desc: "TLS ChangeCipherSpec + Finished [HANDSHAKE COMPLETE: 3 RTT]" },
          { rtt: "3.5 RTT", dir: "Client &rarr; Server", desc: "HTTP GET Request (Encrypted Application Data)" },
        ];
      case "tcp-tls13":
        return [
          { rtt: "0.5 RTT", dir: "Client &rarr; Server", desc: "TCP SYN (Seq=x)" },
          { rtt: "1.0 RTT", dir: "Server &rarr; Client", desc: "TCP SYN-ACK (Seq=y, Ack=x+1)" },
          { rtt: "1.5 RTT", dir: "Client &rarr; Server", desc: "TCP ACK + TLS 1.3 ClientHello (Key Share Curve25519)" },
          { rtt: "2.0 RTT", dir: "Server &rarr; Client", desc: "TLS 1.3 ServerHello + EncryptedExtensions + Certificate + Finished [HANDSHAKE COMPLETE: 2 RTT]" },
          { rtt: "2.5 RTT", dir: "Client &rarr; Server", desc: "HTTP/2 GET Request (Encrypted Application Data)" },
        ];
      case "quic-1rtt":
        return [
          { rtt: "0.5 RTT", dir: "Client &rarr; Server", desc: "QUIC Initial Packet (TLS 1.3 ClientHello + Transport Parameters inside CRYPTO frame)" },
          { rtt: "1.0 RTT", dir: "Server &rarr; Client", desc: "QUIC Initial + Handshake (ServerHello + 1-RTT Encryption Keys + ACK) [HANDSHAKE COMPLETE: 1 RTT]" },
          { rtt: "1.5 RTT", dir: "Client &rarr; Server", desc: "QUIC 1-RTT Short Header (STREAM 0: HTTP/3 GET /index.html)" },
          { rtt: "2.0 RTT", dir: "Server &rarr; Client", desc: "QUIC 1-RTT Short Header (STREAM 0: HTTP/3 200 OK + Body)" },
        ];
      case "quic-0rtt":
        return [
          { rtt: "0.0 RTT", dir: "Client &rarr; Server", desc: "QUIC 0-RTT Packet (Early Data: HTTP/3 GET with Resumption Token) + Initial ClientHello" },
          { rtt: "0.5 RTT", dir: "Server Receives", desc: "Server processes 0-RTT early data immediately without waiting for handshake completion!" },
          { rtt: "1.0 RTT", dir: "Server &rarr; Client", desc: "QUIC 1-RTT Response (200 OK Body + Handshake Confirmation) [LATENCY: 0-RTT APPLICATION FLIGHT]" },
        ];
      default:
        return [];
    }
  }, [handshakeMode]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 4: QUIC CONNECTION MIGRATION (WI-FI &rarr; CELLULAR 5G)          */
  /* -------------------------------------------------------------------------- */
  const [networkPath, setNetworkPath] = useState("wifi"); // wifi | migrating | cellular
  const [migrationLogs, setMigrationLogs] = useState([
    "Connection established over Wi-Fi (Client: 192.168.1.42:52119, CID: 0x8fe72b01a).",
    "Stream 4 actively transmitting video chunks over UDP 443.",
  ]);

  const triggerMigration = () => {
    setNetworkPath("migrating");
    setMigrationLogs((prev) => [
      ...prev,
      "Mobile device leaves Wi-Fi range; cellular 5G interface activates (New IP: 172.56.21.90:48912).",
      "Traditional TCP socket would FAIL with ECONNRESET (4-tuple changed).",
      "QUIC client sends PATH_CHALLENGE frame (8-byte random nonce) with unchanged Destination CID: 0x8fe72b01a.",
      "Server responds with PATH_RESPONSE confirming new path ownership.",
      "Connection migration SUCCESSFUL! No application re-buffering or TLS renegotiation required.",
    ]);
    setTimeout(() => {
      setNetworkPath("cellular");
    }, 1200);
  };

  const resetMigration = () => {
    setNetworkPath("wifi");
    setMigrationLogs([
      "Connection established over Wi-Fi (Client: 192.168.1.42:52119, CID: 0x8fe72b01a).",
      "Stream 4 actively transmitting video chunks over UDP 443.",
    ]);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 5: UDP AMPLIFICATION & DDOS DEFENSE SANDBOX                      */
  /* -------------------------------------------------------------------------- */
  const [reflectorProtocol, setReflectorProtocol] = useState("dns"); // dns | ntp | memcached | snmp
  const [enableBcp38, setEnableBcp38] = useState(false);
  const [enableRrl, setEnableRrl] = useState(false);
  const [attackActive, setAttackActive] = useState(false);

  const reflectorProfiles = {
    dns: { name: "DNS ANY Query", reqSize: 64, respSize: 3456, ampFactor: 54, port: 53 },
    ntp: { name: "NTP monlist Command", reqSize: 234, respSize: 48000, ampFactor: 205, port: 123 },
    memcached: { name: "Memcached UDP stat", reqSize: 15, respSize: 750000, ampFactor: 50000, port: 11211 },
    snmp: { name: "SNMP BulkGet Query", reqSize: 40, respSize: 1500, ampFactor: 37, port: 161 },
  };

  const currentReflector = reflectorProfiles[reflectorProtocol];

  /* -------------------------------------------------------------------------- */
  /* STATEFUL 10-QUESTION COMPREHENSIVE QUIZ                                   */
  /* -------------------------------------------------------------------------- */
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "Which of the following fields are included in the standard 8-byte UDP header defined in RFC 768?",
      options: [
        "Sequence Number, Acknowledgment Number, Window Size, Flags",
        "Source Port, Destination Port, Total Length, Checksum",
        "Source IP, Destination IP, Protocol, Hop Limit",
        "Stream ID, Offset, Cryptographic Nonce, Frame Type",
      ],
      correct: 1,
      explanation: "RFC 768 specifies an exact 8-byte minimal header consisting of four 16-bit fields: Source Port (16 bits), Destination Port (16 bits), Length (16 bits), and Checksum (16 bits).",
    },
    {
      id: 2,
      question: "What is the primary difference regarding the UDP checksum requirement between IPv4 and IPv6?",
      options: [
        "In IPv4 the checksum is mandatory, whereas in IPv6 it is completely omitted to optimize forwarding speed.",
        "In IPv4 the checksum is optional (a value of 0x0000 means disabled), whereas in IPv6 it is mandatory for integrity across the header and pseudo-header.",
        "Both IPv4 and IPv6 calculate a 32-bit CRC checksum for cryptographic non-repudiation.",
        "IPv6 replaces the UDP checksum with a TLS 1.3 message authentication code (MAC).",
      ],
      correct: 1,
      explanation: "In IPv4, calculating the UDP checksum is optional (all zeros in the checksum field indicates no checksum was computed). In IPv6 (RFC 8200), because the IPv6 header lacks a header checksum, the UDP checksum is mandatory to prevent corrupted datagram delivery.",
    },
    {
      id: 3,
      question: "In HTTP/2 over TCP, why does a single dropped packet cause Head-of-Line (HoL) blocking across all concurrent streams?",
      options: [
        "Because HTTP/2 compresses headers with HPACK, and losing one packet destroys the decompression dictionary permanently.",
        "Because TCP provides an ordered byte stream abstraction at the transport layer, forcing the OS receive buffer to stall all higher stream bytes until the missing segment is retransmitted.",
        "Because HTTP/2 uses UDP port 80 without acknowledgement timers.",
        "Because routers drop all TCP streams automatically upon detecting a CRC error.",
      ],
      correct: 1,
      explanation: "TCP abstracts the entire connection as a single linear byte stream. If segment #3 is dropped, TCP cannot deliver segments #4, #5, or #6 to the application—even if they belong to unrelated HTTP/2 request streams. This is transport-layer head-of-line blocking.",
    },
    {
      id: 4,
      question: "How does QUIC (RFC 9000) eliminate transport-layer Head-of-Line blocking?",
      options: [
        "By disabling packet retransmissions entirely and accepting corrupt application data.",
        "By maintaining independent, per-stream byte-stream state machines within a single UDP connection, allowing unaffected streams to be delivered immediately.",
        "By enforcing a separate TCP connection for every parallel image or asset.",
        "By sending all web assets exclusively over UDP multicast.",
      ],
      correct: 1,
      explanation: "QUIC implements stream multiplexing natively at the transport layer over UDP datagrams. Each stream has its own independent offset counter and state machine, so packet loss on Stream 1 does not delay in-order delivery of data for Stream 2 or Stream 3.",
    },
    {
      id: 5,
      question: "What enables QUIC connection migration when a client moves from Wi-Fi to a cellular 5G network without dropping active downloads?",
      options: [
        "Static public IP assignments on mobile devices that never change across cell towers.",
        "QUIC uses Connection IDs (CIDs) rather than the IP/Port 4-tuple to identify transport sessions, validating new network paths with PATH_CHALLENGE frames.",
        "BGP Anycast routing forces all cell carriers to route traffic to the user's home router.",
        "TCP SYN-ACK packets are tunneled through DNS TXT records.",
      ],
      correct: 1,
      explanation: "TCP binds connections strictly to the (SrcIP, SrcPort, DstIP, DstPort) 4-tuple. When a mobile device changes networks, the IP address changes, causing an RST. QUIC decouples the connection from the network tuple using Connection IDs (CIDs) and verifies the new path via PATH_CHALLENGE / PATH_RESPONSE.",
    },
    {
      id: 6,
      question: "Why is a typical QUIC connection establishment faster than traditional TCP + TLS 1.3?",
      options: [
        "QUIC skips cryptographic authentication and certificate verification entirely.",
        "QUIC combines the transport connection setup and TLS 1.3 cryptographic key negotiation into a single 1-RTT handshake (or 0-RTT on resumption).",
        "QUIC runs over raw optical fiber without IP routing.",
        "QUIC uses UDP port 0 to bypass firewall state tables.",
      ],
      correct: 1,
      explanation: "In TCP + TLS 1.3, you need 1 RTT for the TCP 3-way handshake followed by 1 RTT for the TLS 1.3 handshake (total 2 RTTs). QUIC merges transport parameters inside the TLS 1.3 ClientHello, achieving a fully authenticated, encrypted connection in only 1 RTT (and 0-RTT on session resumption).",
    },
    {
      id: 7,
      question: "What security risk is specifically associated with QUIC 0-RTT Early Data, and how must applications protect against it?",
      options: [
        "Buffer overflow in the kernel socket layer.",
        "Replay attacks, where an on-path attacker captures and replays early data; applications must restrict 0-RTT strictly to idempotent requests (e.g. GET queries without side-effects).",
        "Private key extraction via side-channel cache attacks.",
        "ARP cache poisoning over public Wi-Fi networks.",
      ],
      correct: 1,
      explanation: "Because 0-RTT data is transmitted before the server's freshness handshake completes, an adversary can replay the initial packet flight. RFC 9001 and RFC 9114 stipulate that 0-RTT must only be permitted for safe, idempotent operations (such as HTTP GET), never for non-idempotent actions like financial transfers or POST requests.",
    },
    {
      id: 8,
      question: "Why is UDP frequently weaponized by attackers in Distributed Denial of Service (DDoS) reflection/amplification attacks?",
      options: [
        "UDP packets carry a digital signature that forces servers to consume maximum CPU validating RSA keys.",
        "UDP is stateless and connectionless, allowing attackers to trivially spoof the victim's source IP address and exploit servers that send responses much larger than the request.",
        "UDP headers are 60 bytes long, consuming excessive transit bandwidth.",
        "Operating systems do not permit firewalls to inspect UDP ports below 1024.",
      ],
      correct: 1,
      explanation: "Because UDP does not perform a handshake (like TCP's SYN/ACK), a sender can forge any arbitrary source IP in the IP header. The reflector service receives the request and sends the response to the spoofed victim. When the response is tens or thousands of times larger than the request (amplification), the victim is flooded.",
    },
    {
      id: 9,
      question: "What is BCP 38 (RFC 2827) and how does it prevent UDP reflection attacks at the root source?",
      options: [
        "It mandates that all UDP datagrams be encrypted with AES-256-GCM.",
        "It defines Network Ingress Filtering, requiring Internet Service Providers to verify that outbound packets have source IP addresses belonging to the customer's allocated IP prefix.",
        "It forces DNS servers to answer only TCP queries over port 853.",
        "It disables UDP checksum calculations in enterprise routers.",
      ],
      correct: 1,
      explanation: "Best Current Practice 38 (BCP 38 / RFC 2827) specifies Ingress Filtering: an ISP or border router will discard any outbound packet whose source IP does not match the IP prefix assigned to that interface. This stops IP address spoofing at the perimeter.",
    },
    {
      id: 10,
      question: "In real-time audio communication (e.g., VoIP or WebRTC using RTP over UDP), why is late packet retransmission generally undesirable?",
      options: [
        "Because UDP does not allow sockets to send data twice.",
        "Because conversational human speech requires sub-150ms round-trip latency; an audio packet arriving after its playback deadline is useless and produces audio glitches.",
        "Because VoIP codecs only operate when packet loss is exactly zero percent.",
        "Because routers drop UDP packets whenever an ACK is transmitted.",
      ],
      correct: 1,
      explanation: "Human conversation requires an interactive latency budget under 150-200ms. If an audio packet is dropped, waiting for a retransmission would take 1 to 2 RTTs (often 100-300ms), by which time the playout deadline has passed. Modern media engines prefer packet loss concealment (PLC) over late retransmission.",
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
  });

  const toggleLabCheck = (key) => {
    setLabChecks((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedChecksCount = Object.values(labChecks).filter(Boolean).length;

  const transportReportTemplate = `# TECHNICAL LAB REPORT: TCP VS UDP & QUIC TRANSPORT EVALUATION
**Standard:** RFC 768 (UDP) · RFC 9000 (QUIC) · RFC 9114 (HTTP/3) · RFC 9293 (TCP)
**Author:** Network Systems Engineering Lead
**Environment:** Linux 6.8.0 / Wireshark 4.2 / Python 3.11 / Loopback \`lo\`

---

## 1. Executive Summary & Objective
This investigation quantifies transport-layer overhead, connection lifecycle differences, and failure resilience between TCP, UDP, and QUIC under simulated enterprise conditions.

---

## 2. Packet Capture Dissection & Metrics Matrix

| Protocol Metric | TCP (Port 9001) | UDP (Port 9002) | QUIC (Port 443 / UDP) |
|---|---|---|---|
| **Base Transport Header Size** | 20 Bytes (up to 60 with options) | 8 Bytes (Fixed) | Variable (Short/Long Header) |
| **Transport Handshake Latency** | 1 RTT (SYN &rarr; SYN-ACK &rarr; ACK) | 0 RTT (Connectionless) | 1 RTT (Initial) / 0 RTT (Resumption) |
| **Integrated Cryptography** | None (Requires separate TLS) | None (Application layer) | TLS 1.3 Native Encrypted Header/Body |
| **Message Framing Preserved** | No (Stream-oriented byte stream) | Yes (Atomic datagram boundaries) | Yes (Frame-delimited Streams) |
| **In-Flight Loss Recovery** | Kernel SACK / Fast Retransmit | Application-Managed / Dropped | Transport-level per-stream recovery |
| **Head-of-Line Blocking** | Full connection stalls on drop | None (Independent datagrams) | Eliminated across unrelated streams |
| **Connection Mobility** | Broken on IP change (ECONNRESET)| Broken unless app-managed | Seamless via Connection IDs (CID) |

---

## 3. Wireshark Verification Log

\`\`\`text
# 1. TCP 3-Way Handshake captured on loopback
127.0.0.1 -> 127.0.0.1 TCP 52180 -> 9001 [SYN] Seq=0 Win=65495 Len=0 MSS=65495
127.0.0.1 -> 127.0.0.1 TCP 9001 -> 52180 [SYN, ACK] Seq=0 Ack=1 Win=65483 Len=0
127.0.0.1 -> 127.0.0.1 TCP 52180 -> 9001 [ACK] Seq=1 Ack=1 Win=65495 Len=0

# 2. UDP Datagram Dissection (Notice absence of handshake)
127.0.0.1 -> 127.0.0.1 UDP 58210 -> 9002 Len=32
    Source Port: 58210
    Destination Port: 9002
    Length: 40 (8 bytes header + 32 bytes data)
    Checksum: 0x8a1b [verified via pseudo-header]
    Data: 554450206d6573736167652030... ("UDP message 0")

# 3. Controlled Packet Loss Observation (tc qdisc add dev lo root netem loss 10%)
- TCP Result: Retransmission timer triggered; duplicate ACKs observed; latency spiked from 0.08ms to 204.3ms.
- UDP Result: Application client hit socket.timeout(2.0); missing datagram permanently dropped without OS retry.
- QUIC Result: Independent streams continued unhindered; only the affected stream paused for loss detection.
\`\`\`

---

## 4. Production Architectural Recommendations

1. **Transactional File Downloads & DB Connections:** Retain **TCP with TLS 1.3** or **HTTP/3 QUIC** for strict ordering and flow control.
2. **Interactive Audio/Video (WebRTC/VoIP):** Use **RTP over UDP** with Jitter Buffers and Forward Error Correction (FEC). Discard late packets exceeding 150ms.
3. **High-Performance Multi-Asset Web Apps:** Migrate to **HTTP/3 over QUIC** to eliminate mobile Wi-Fi &rarr; 5G disconnects and stream HoL blocking.
4. **Perimeter Defense for Exposed UDP Services:** Enforce **BCP 38 ingress verification**, **DNS Response Rate Limiting (RRL)**, and firewall hashlimits.
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
                  Module 10
                </span>
                <span className="text-xs font-mono text-stone-400">
                  Computer Networks &amp; Internet Engineering
                </span>
              </div>
              <h1 className="text-sm sm:text-base font-bold text-white tracking-tight">
                UDP, QUIC &amp; Modern Transport Protocols
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono bg-stone-900 border border-stone-700 px-2.5 py-1 rounded text-stone-300">
              RFC 768 · RFC 9000 · RFC 9114
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
                <Zap size={14} className="text-orange-600" />
                <span>Datagram Sockets, Modern Web Transport &amp; DDoS Defense</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
                From Minimal 8-Byte Datagrams to User-Space QUIC &amp; HTTP/3
              </h2>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                While TCP provides an ordered, reliable byte stream, modern engineering demands different trade-offs: instantaneous real-time datagrams, voice without retransmission latency, and multiplexed secure streams that eliminate transport-layer head-of-line blocking. Explore RFC 768 UDP, application-managed reliability, the architecture of QUIC (RFC 9000), HTTP/3 (RFC 9114), and defensive mitigation of UDP amplification attacks.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 shrink-0">
              <div className="p-3 rounded-2xl bg-[#fbfaf7] border border-[#e7e3da] text-center">
                <div className="text-xl font-black text-stone-900">8 Bytes</div>
                <div className="text-[11px] font-medium text-stone-500 uppercase tracking-wide">UDP Header</div>
              </div>
              <div className="p-3 rounded-2xl bg-[#fbfaf7] border border-[#e7e3da] text-center">
                <div className="text-xl font-black text-orange-600">0 / 1 RTT</div>
                <div className="text-[11px] font-medium text-stone-500 uppercase tracking-wide">QUIC Handshake</div>
              </div>
              <div className="p-3 rounded-2xl bg-[#fbfaf7] border border-[#e7e3da] text-center">
                <div className="text-xl font-black text-stone-900">Zero HoL</div>
                <div className="text-[11px] font-medium text-stone-500 uppercase tracking-wide">QUIC Streams</div>
              </div>
              <div className="p-3 rounded-2xl bg-[#fbfaf7] border border-[#e7e3da] text-center">
                <div className="text-xl font-black text-emerald-600">50,000x</div>
                <div className="text-[11px] font-medium text-stone-500 uppercase tracking-wide">Amp Factor Risk</div>
              </div>
            </div>
          </div>

          {/* Module Navigation Tabs */}
          <div className="mt-8 pt-6 border-t border-[#e7e3da] flex flex-wrap items-center gap-2">
            {[
              { id: "theory", label: "Core Theory (10.1 - 10.12)", icon: BookOpen },
              { id: "udp-sim", label: "UDP Header & Checksum Sandbox", icon: Sliders },
              { id: "hol-sim", label: "HTTP/2 vs HTTP/3 HoL Visualizer", icon: Split },
              { id: "quic-handshake-sim", label: "0-RTT / 1-RTT Handshake Ladder", icon: Clock },
              { id: "migration-sim", label: "QUIC Connection Migration", icon: Smartphone },
              { id: "ddos-sim", label: "UDP Amplification & DDoS Defense", icon: ShieldAlertIcon },
              { id: "cli", label: "Production CLI & Linux Diagnostics", icon: Terminal },
              { id: "quiz", label: "Assessment Exam (10 Questions)", icon: Award },
              { id: "lab-report", label: "Lab Guide & Engineering Report", icon: FileText },
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
          <ModuleNav currentModuleId="udp" course="networks" />
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* TAB 1: CORE THEORY CURRICULUM (SECTIONS 10.1 - 10.12)              */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "theory" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Table of Contents Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-4 border border-[#e7e3da] sticky top-20 shadow-sm">
                <div className="flex items-center gap-2 pb-3 mb-3 border-b border-[#e7e3da] text-xs font-bold uppercase tracking-wider text-stone-500">
                  <Layers size={14} />
                  <span>Module 10 Sections</span>
                </div>
                <nav className="space-y-1">
                  {[
                    { id: "10.1", title: "10.1 Modern Transport Landscape" },
                    { id: "10.2", title: "10.2 UDP Datagrams & 8-Byte Header" },
                    { id: "10.3", title: "10.3 TCP vs UDP Engineering Matrix" },
                    { id: "10.4", title: "10.4 Application-Managed Reliability" },
                    { id: "10.5", title: "10.5 DNS, Streaming, Gaming & VoIP" },
                    { id: "10.6", title: "10.6 QUIC Architecture & UDP Substrate" },
                    { id: "10.7", title: "10.7 0-RTT / 1-RTT & TLS 1.3 Keys" },
                    { id: "10.8", title: "10.8 Head-of-Line (HoL) Blocking" },
                    { id: "10.9", title: "10.9 Connection Migration & Security" },
                    { id: "10.10", title: "10.10 Jitter, Loss & Transport Math" },
                    { id: "10.11", title: "10.11 UDP Abuse, DDoS & BCP 38" },
                    { id: "10.12", title: "10.12 Socket Lab & Benchmarking" },
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
              {/* SECTION 10.1 */}
              <section id="section-10.1" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 font-mono">
                  <span>Section 10.1</span>
                  <span>·</span>
                  <span>Architectural Taxonomy</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  The Modern Transport-Layer Landscape
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  The transport layer is responsible for end-to-end, process-to-process communication across an untrusted, heterogeneous internetwork. While the network layer (IP) forwards datagrams hop-by-hop between host IP addresses, the transport layer demultiplexes incoming packets to specific operating system processes using 16-bit <strong>ports</strong>.
                </p>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  For nearly four decades, internet applications faced a rigid binary choice: <strong>TCP</strong> (connection-oriented, guaranteed in-order stream, flow and congestion controlled) or <strong>UDP</strong> (connectionless, unordered, best-effort datagrams). However, as web applications grew more sophisticated, TCP revealed architectural constraints that could not be easily fixed inside the operating system kernel:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200">
                    <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <AlertTriangle size={14} className="text-amber-600" />
                      <span>Middlebox Ossification</span>
                    </h4>
                    <p className="text-xs text-amber-950 leading-relaxed">
                      Enterprise firewalls, NAT devices, and deep-packet inspection (DPI) proxies inspect TCP headers. If an engineer attempts to deploy a new TCP option (such as Multipath TCP or fast handshake extensions), middleboxes routinely drop the packets because they fail legacy DPI validation. Modifying TCP requires updating billions of intermediate appliances.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-200">
                    <h4 className="text-xs font-bold text-orange-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Cpu size={14} className="text-orange-600" />
                      <span>Kernel Space vs User Space Velocity</span>
                    </h4>
                    <p className="text-xs text-orange-950 leading-relaxed">
                      TCP implementations reside inside the OS kernel. Rolling out congestion control updates (e.g. BBRv2) or handshake modifications requires upgrading the host operating system kernel—a process that takes years across smartphones, embedded devices, and servers. User-space protocols over UDP bypass kernel deployment cycles entirely.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#18181b] text-white my-6 font-mono text-xs">
                  <div className="text-stone-400 text-[10px] uppercase font-bold mb-2 pb-1 border-b border-stone-800">
                    Protocol Evolution &amp; Layering Architecture
                  </div>
                  <pre className="text-emerald-400 overflow-x-auto leading-relaxed">
{`+---------------------------------------------------------------------------------+
|                                APPLICATION LAYER                                 |
|         HTTP/1.1 · HTTP/2             DNS · RTP (VoIP) · Games       HTTP/3     |
+------------------------------------+-----------------------------+--------------+
|            TRANSPORT               |      TRANSPORT (MINIMAL)    |   USER-SPACE |
|       TCP (RFC 793 / 9293)         |       UDP (RFC 768)         |     QUIC     |
|   - Ordered Reliable Byte Stream   |   - Unordered Datagrams     |  (RFC 9000)  |
|   - Kernel Handshake & Flow Ctrl   |   - 8-Byte Minimal Header   |  - TLS 1.3   |
|   - Subject to HoL Blocking        |   - No Kernel Flow/Loss Ctrl|  - Multi-Str |
+------------------------------------+-----------------------------+--------------+
|                                  NETWORK LAYER                                   |
|                          IPv4 (RFC 791) / IPv6 (RFC 8200)                        |
+---------------------------------------------------------------------------------+`}
                  </pre>
                </div>
              </section>

              {/* SECTION 10.2 */}
              <section id="section-10.2" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 font-mono">
                  <span>Section 10.2</span>
                  <span>·</span>
                  <span>RFC 768 Specification</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  UDP Datagrams &amp; 8-Byte Header Anatomy
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  The User Datagram Protocol, authored by David P. Reed in August 1980 (RFC 768), is arguably the simplest transport protocol in existence. It defines an atomic datagram service with an exact <strong>8-byte header</strong> consisting of four 16-bit fields:
                </p>

                {/* 8-Byte Header Visual Grid */}
                <div className="border border-stone-300 rounded-2xl overflow-hidden my-6">
                  <div className="grid grid-cols-2 bg-stone-100 text-stone-800 text-xs font-bold font-mono border-b border-stone-300 divide-x divide-stone-300">
                    <div className="p-3 text-center">
                      <span className="text-[10px] text-stone-500 block uppercase">Bits 0 - 15</span>
                      Source Port (16 Bits)
                    </div>
                    <div className="p-3 text-center">
                      <span className="text-[10px] text-stone-500 block uppercase">Bits 16 - 31</span>
                      Destination Port (16 Bits)
                    </div>
                  </div>
                  <div className="grid grid-cols-2 bg-stone-50 text-stone-800 text-xs font-bold font-mono divide-x divide-stone-300">
                    <div className="p-3 text-center">
                      <span className="text-[10px] text-stone-500 block uppercase">Bits 32 - 47</span>
                      Length (16 Bits, Min: 8, Max: 65,535)
                    </div>
                    <div className="p-3 text-center">
                      <span className="text-[10px] text-stone-500 block uppercase">Bits 48 - 63</span>
                      Checksum (16 Bits, 1's Complement Sum)
                    </div>
                  </div>
                  <div className="bg-orange-50 p-4 text-center border-t border-stone-300 text-xs font-bold text-orange-950 font-mono">
                    Application Payload (Variable Length Datagram Data)
                  </div>
                </div>

                <div className="space-y-4 text-sm text-stone-700">
                  <div className="p-4 rounded-2xl bg-[#fbfaf7] border border-[#e7e3da]">
                    <h4 className="font-bold text-stone-900 mb-1">1. Source Port (16 bits)</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Identifies the client sending process. If no reply is expected (such as in unidirectional telemetry logging), this field may be set to zero. Otherwise, an ephemeral port assigned by the OS stack (e.g. 52180) is populated so the remote endpoint can respond.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#fbfaf7] border border-[#e7e3da]">
                    <h4 className="font-bold text-stone-900 mb-1">2. Destination Port (16 bits)</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Identifies the receiving service process (e.g. Port 53 for DNS, Port 67/68 for DHCP, Port 123 for NTP, Port 443 for QUIC/HTTP-3). If no process is bound and listening on this port when a datagram arrives, the operating system kernel emits an <strong>ICMP Type 3 Code 3 (Port Unreachable)</strong> message back to the sender.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#fbfaf7] border border-[#e7e3da]">
                    <h4 className="font-bold text-stone-900 mb-1">3. Length (16 bits)</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Specifies the total length in bytes of the UDP datagram, including both the 8-byte header and the payload. The absolute theoretical minimum is 8 (a zero-byte payload), while the maximum is 65,535 bytes (bounded by the 16-bit integer and IPv4 Total Length field). In practice, internet UDP payloads are constrained by Path MTU (typically 1280 - 1500 bytes) to avoid fragmentation.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#fbfaf7] border border-[#e7e3da]">
                    <h4 className="font-bold text-stone-900 mb-1">4. Checksum (16 bits) &amp; The Pseudo-Header</h4>
                    <p className="text-xs text-stone-600 leading-relaxed mb-2">
                      Detects bit errors across transmission. Crucially, the checksum is calculated not only over the UDP header and payload, but also over a <strong>conceptual IP Pseudo-Header</strong>. The pseudo-header binds the datagram to the specific Source IP, Destination IP, and IP Protocol number (17 for UDP), ensuring a datagram misrouted to the wrong destination IP is discarded.
                    </p>
                    <div className="p-3 bg-stone-100 rounded-xl text-stone-800 text-[11px] font-mono leading-relaxed">
                      <strong>IPv4 vs IPv6 Rule:</strong> In IPv4, UDP checksum is <em>optional</em> (0x0000 denotes no checksum calculated). In IPv6 (RFC 8200), because the IPv6 base header eliminated the IP checksum to accelerate routing, the UDP checksum is <em>mandatory</em> (with narrow exceptions for encapsulation tunnels in RFC 6936).
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 10.3 */}
              <section id="section-10.3" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 font-mono">
                  <span>Section 10.3</span>
                  <span>·</span>
                  <span>Protocol Trade-Offs</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  TCP vs UDP: Comprehensive Engineering Matrix
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  Engineers frequently state that "UDP is faster than TCP." In rigorous network systems engineering, this statement is misleading. UDP is not inherently faster at moving bits across copper or optical fiber; rather, UDP imposes <em>zero transport-level latency penalties</em> by refusing to wait for handshakes, acknowledgments, or in-order queueing.
                </p>

                {/* Comparison Table */}
                <div className="overflow-x-auto my-6">
                  <table className="w-full text-xs text-left border-collapse border border-stone-200 rounded-xl">
                    <thead>
                      <tr className="bg-stone-100 text-stone-800 font-bold uppercase tracking-wider border-b border-stone-200">
                        <th className="p-3 border-r border-stone-200">Architectural Dimension</th>
                        <th className="p-3 border-r border-stone-200">TCP (Transmission Control Protocol)</th>
                        <th className="p-3">UDP (User Datagram Protocol)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-stone-700 font-mono">
                      <tr>
                        <td className="p-3 font-bold text-stone-900 border-r border-stone-200">Abstraction Model</td>
                        <td className="p-3 border-r border-stone-200">Continuous unstructured byte stream</td>
                        <td className="p-3">Discrete atomic datagrams (message boundaries preserved)</td>
                      </tr>
                      <tr className="bg-stone-50/50">
                        <td className="p-3 font-bold text-stone-900 border-r border-stone-200">Connection Handshake</td>
                        <td className="p-3 border-r border-stone-200">Yes: 3-way handshake (SYN, SYN-ACK, ACK) = 1 RTT minimum</td>
                        <td className="p-3 text-emerald-700 font-bold">None: Immediate transmission (0 RTT)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-stone-900 border-r border-stone-200">Reliability &amp; Loss Recovery</td>
                        <td className="p-3 border-r border-stone-200">Cumulative ACKs, SACK, RTO retransmissions</td>
                        <td className="p-3 text-red-600">None: Packets dropped silently without retry</td>
                      </tr>
                      <tr className="bg-stone-50/50">
                        <td className="p-3 font-bold text-stone-900 border-r border-stone-200">Ordering Guarantees</td>
                        <td className="p-3 border-r border-stone-200">Strictly monotonic in-order sequence delivery</td>
                        <td className="p-3">None: Packets may arrive out-of-order or duplicate</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-stone-900 border-r border-stone-200">Flow &amp; Congestion Control</td>
                        <td className="p-3 border-r border-stone-200">Built-in: rwnd (receiver) and cwnd (AIMD, Cubic, BBR)</td>
                        <td className="p-3">None: Transmits at application socket rate</td>
                      </tr>
                      <tr className="bg-stone-50/50">
                        <td className="p-3 font-bold text-stone-900 border-r border-stone-200">Multicast &amp; Broadcast</td>
                        <td className="p-3 border-r border-stone-200 text-stone-400">Unsupported (strictly unicast point-to-point)</td>
                        <td className="p-3 text-emerald-700 font-bold">Full Support: IP Multicast (IGMP) and Broadcast</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-stone-900 border-r border-stone-200">Header Size Overhead</td>
                        <td className="p-3 border-r border-stone-200">20 - 60 Bytes per segment</td>
                        <td className="p-3 font-bold text-emerald-700">8 Bytes fixed per datagram</td>
                      </tr>
                      <tr className="bg-stone-50/50">
                        <td className="p-3 font-bold text-stone-900 border-r border-stone-200">Kernel Socket Memory</td>
                        <td className="p-3 border-r border-stone-200">Heavy: Retransmission queues, out-of-order buffers</td>
                        <td className="p-3">Light: Direct copy from network card to socket ring buffer</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-stone-900 border-r border-stone-200">DDoS Weaponization Risk</td>
                        <td className="p-3 border-r border-stone-200">Low (Stateful 3-way handshake prevents IP spoofing)</td>
                        <td className="p-3 text-red-600 font-bold">Extremely High (Stateless IP spoofing &amp; amplification)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* SECTION 10.4 */}
              <section id="section-10.4" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 font-mono">
                  <span>Section 10.4</span>
                  <span>·</span>
                  <span>Application Layer Engineering</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  Application-Managed Reliability over UDP
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  Using UDP does not mean an application must accept catastrophic data loss. Many systems choose UDP to bypass TCP's rigid kernel constraints, then selectively construct their own reliability mechanisms tailored to their domain:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="p-4 rounded-2xl bg-[#fbfaf7] border border-[#e7e3da]">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs mb-3">
                      1
                    </div>
                    <h4 className="font-bold text-xs text-stone-900 uppercase tracking-wide mb-1">
                      Selective Retransmission (NACKs)
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Rather than acknowledging every received segment (TCP ACK), the receiver only notifies the sender when a specific sequence number gap is observed (Negative Acknowledgment / NACK). This drastically saves reverse bandwidth in satellite and telemetry uplinks.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#fbfaf7] border border-[#e7e3da]">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs mb-3">
                      2
                    </div>
                    <h4 className="font-bold text-xs text-stone-900 uppercase tracking-wide mb-1">
                      Forward Error Correction (FEC)
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Instead of waiting for an RTT to retransmit lost packets, the sender transmits $K$ data packets accompanied by $M$ mathematical parity packets (using Reed-Solomon or XOR erasure codes). Any $K$ packets received allow the client to mathematically reconstruct all missing data instantly with zero latency penalty.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#fbfaf7] border border-[#e7e3da]">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs mb-3">
                      3
                    </div>
                    <h4 className="font-bold text-xs text-stone-900 uppercase tracking-wide mb-1">
                      Congestion Control (Pacing &amp; GCC)
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Unregulated UDP traffic can collapse intermediate router queues (congestion collapse). Reliable UDP protocols implement Google Congestion Control (GCC) or BBR pacing in user-space, measuring one-way delay gradient and packet loss to throttle the sending bitrate dynamically.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 10.5 */}
              <section id="section-10.5" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 font-mono">
                  <span>Section 10.5</span>
                  <span>·</span>
                  <span>Real-World Protocols</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  DNS, Streaming, Gaming &amp; Real-Time Communication
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  UDP powers the most latency-critical workloads across the global internet. Understanding why each protocol relies on UDP provides essential architectural insight:
                </p>

                <div className="space-y-4 text-xs">
                  <div className="p-4 rounded-2xl bg-[#fbfaf7] border border-[#e7e3da]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-stone-900 text-sm">Domain Name System (DNS — RFC 1035 / RFC 6891)</span>
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-stone-200 text-stone-700">Port 53 UDP &amp; TCP</span>
                    </div>
                    <p className="text-stone-600 leading-relaxed mb-2">
                      Standard DNS queries use UDP because resolving a domain name should happen in a single RTT. A client sends one datagram containing the query, and the resolver replies with one datagram containing the record.
                    </p>
                    <div className="p-2.5 bg-stone-100 rounded-lg text-stone-800 font-mono">
                      <strong>The TC (Truncated) Bit:</strong> Legacy UDP DNS was capped at 512 bytes. If a response exceeds the buffer, the server sets the <code>TC=1</code> flag in the header. The resolver drops the partial response and immediately initiates a fallback connection over <strong>TCP port 53</strong>. Modern DNS uses <strong>EDNS0</strong> (RFC 6891) to negotiate larger UDP buffer sizes (typically 1232 bytes to avoid IPv6 fragmentation).
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#fbfaf7] border border-[#e7e3da]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-stone-900 text-sm">Online Multiplayer Gaming</span>
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-stone-200 text-stone-700">Tick-Based State Deltas</span>
                    </div>
                    <p className="text-stone-600 leading-relaxed">
                      First-person shooters and real-time simulators send player position, velocity, and orientation updates 60 to 128 times per second (server tick rate). If packet #104 carrying position is lost, retransmitting it 80ms later is useless because packet #105 has already arrived with newer coordinates. Game engines use <strong>Client-Side Prediction</strong> and <strong>Snapshot Interpolation</strong> over UDP, reserving reliable channels only for events like inventory changes or health damage.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#fbfaf7] border border-[#e7e3da]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-stone-900 text-sm">Real-Time Voice &amp; Video (VoIP / WebRTC / RTP — RFC 3550)</span>
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-stone-200 text-stone-700">Media Substrate</span>
                    </div>
                    <p className="text-stone-600 leading-relaxed">
                      Human speech requires an interactive latency budget under 150ms. Real-time Transport Protocol (RTP) runs over UDP with <strong>Jitter Buffers</strong>. If an audio packet fails to arrive within 20ms of its playout time, the receiver does not wait for a retransmission—it invokes <strong>Packet Loss Concealment (PLC)</strong> to synthesize missing audio waveforms or interpolate comfort noise.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 10.6 */}
              <section id="section-10.6" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 font-mono">
                  <span>Section 10.6</span>
                  <span>·</span>
                  <span>RFC 9000 Specification</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  QUIC Fundamentals: Reliable Transport in User Space
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  Standardized by the IETF in May 2021 as <strong>RFC 9000</strong> (with TLS integration in RFC 9001 and HTTP/3 in RFC 9114), <strong>QUIC</strong> is a revolutionary general-purpose transport protocol. It is not simply "HTTP over UDP"—QUIC is a full-featured, secure, multiplexed transport protocol implemented in user-space that utilizes UDP datagrams strictly as an encapsulation vehicle.
                </p>

                <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-200 my-6">
                  <h4 className="font-bold text-xs text-orange-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Sparkles size={14} className="text-orange-600" />
                    <span>Why did the IETF build QUIC on top of UDP?</span>
                  </h4>
                  <p className="text-xs text-orange-950 leading-relaxed">
                    If the IETF had defined a brand new IP protocol number (e.g., Protocol 250 alongside TCP=6 and UDP=17), enterprise firewalls, home Wi-Fi routers, and mobile carrier gateways would drop 100% of packets because their firmware only recognizes TCP and UDP. By wrapping QUIC packets inside standard UDP datagrams (typically port 443), QUIC seamlessly traverses existing internet middleboxes without requiring hardware replacements.
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="font-bold text-stone-900 block mb-1">Packet Types (Long vs Short Headers):</span>
                    <p className="text-stone-600 leading-relaxed">
                      QUIC uses <strong>Long Header Packets</strong> during connection setup (Initial, Handshake, 0-RTT Protected, Retry) to negotiate keys and Connection IDs, and compact <strong>Short Header Packets</strong> (1-RTT) during normal data transmission to minimize per-packet protocol overhead.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="font-bold text-stone-900 block mb-1">Frame Multiplexing inside Datagrams:</span>
                    <p className="text-stone-600 leading-relaxed">
                      Inside a single encrypted QUIC packet, multiple frames can be bundled: <code>STREAM</code> frames (carrying application byte ranges), <code>ACK</code> frames (acknowledging received packet numbers), <code>CRYPTO</code> frames (TLS handshake data), and <code>PING</code> frames.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 10.7 */}
              <section id="section-10.7" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 font-mono">
                  <span>Section 10.7</span>
                  <span>·</span>
                  <span>Cryptographic Integration</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  QUIC Handshake: 0-RTT &amp; 1-RTT Connection Establishment
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  In traditional web networking, establishing an encrypted HTTPS connection over TCP was a multi-phase, high-latency ordeal:
                </p>

                <div className="p-4 rounded-2xl bg-stone-100 border border-stone-200 my-4 text-xs font-mono">
                  <div className="text-stone-700 font-bold mb-2">Historical Web Handshake Latency Breakdown:</div>
                  <ul className="space-y-1 text-stone-600">
                    <li>1. TCP + TLS 1.2: 1 RTT (TCP SYN/ACK) + 2 RTT (TLS Key Exchange) = <span className="text-red-600 font-bold">3 RTT (300ms on a 100ms link)</span></li>
                    <li>2. TCP + TLS 1.3: 1 RTT (TCP SYN/ACK) + 1 RTT (TLS 1.3 Key Share) = <span className="text-amber-600 font-bold">2 RTT (200ms on a 100ms link)</span></li>
                    <li>3. QUIC (Initial): Combined Transport &amp; TLS 1.3 Keys in first flight = <span className="text-emerald-600 font-bold">1 RTT (100ms on a 100ms link)</span></li>
                    <li>4. QUIC (Resumption): 0-RTT Early Data with cached ticket = <span className="text-emerald-600 font-bold">0 RTT (0ms application latency!)</span></li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-red-50/70 border border-red-200 my-4">
                  <h4 className="font-bold text-xs text-red-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <ShieldCheck size={14} className="text-red-600" />
                    <span>The Critical Hazard: 0-RTT Replay Attacks</span>
                  </h4>
                  <p className="text-xs text-red-950 leading-relaxed">
                    Because 0-RTT early data packets are encrypted using keys cached from a previous session, a malicious eavesdropper can intercept the 0-RTT flight and replay it to the server multiple times before the fresh 1-RTT handshake finishes. Therefore, RFC 9114 strictly mandates that <strong>0-RTT data MUST only be used for idempotent requests</strong> (e.g. HTTP GET for public static assets). Any non-idempotent operation (such as HTTP POST, money transfers, or state alterations) must be buffered until the 1-RTT handshake completes.
                  </p>
                </div>
              </section>

              {/* SECTION 10.8 */}
              <section id="section-10.8" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 font-mono">
                  <span>Section 10.8</span>
                  <span>·</span>
                  <span>Head-of-Line Blocking Analysis</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  QUIC Multiplexing &amp; Eliminating Transport Head-of-Line (HoL) Blocking
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  To understand QUIC's greatest architectural triumph, one must analyze the evolution of Head-of-Line (HoL) blocking from HTTP/1.1 to HTTP/3:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 text-xs">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <div className="font-bold text-stone-900 mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      <span>HTTP/2 over Single TCP Connection</span>
                    </div>
                    <p className="text-stone-600 leading-relaxed mb-2">
                      HTTP/2 introduced application-layer multiplexing, allowing dozens of requests (HTML, CSS, JavaScript, Images) to interleave on a single TCP connection.
                    </p>
                    <div className="p-2.5 bg-red-50 text-red-900 rounded-lg">
                      <strong>The Failure Mode:</strong> TCP is a single linear byte stream. If packet #4 (carrying image bytes for Stream 3) is dropped in transit, the OS kernel will <em>halt delivery of packets #5, #6, and #7</em> (even though they contain CSS for Stream 1) until packet #4 is retransmitted. A 2% packet loss on a mobile network degrades HTTP/2 performance worse than HTTP/1.1!
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200">
                    <div className="font-bold text-emerald-950 mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>HTTP/3 over QUIC</span>
                    </div>
                    <p className="text-emerald-900 leading-relaxed mb-2">
                      QUIC makes streams first-class transport-layer primitives. Each stream maintains its own independent offset counter and state machine.
                    </p>
                    <div className="p-2.5 bg-white/80 text-emerald-950 rounded-lg border border-emerald-200">
                      <strong>The QUIC Solution:</strong> If a UDP datagram carrying Stream 3 bytes is dropped, only Stream 3 waits for retransmission. Streams 1, 2, and 4 are delivered immediately to the browser rendering engine without stalling.
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 10.9 */}
              <section id="section-10.9" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 font-mono">
                  <span>Section 10.9</span>
                  <span>·</span>
                  <span>Connection Mobility</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  Connection Migration &amp; Integrated Transport Encryption
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  In traditional networking, a TCP socket is identified strictly by the <strong>4-tuple</strong>: <code>(Source IP, Source Port, Destination IP, Destination Port)</code>. If a smartphone user walks out of their house and disconnects from Wi-Fi, their IP address changes as cellular 5G activates. Because the 4-tuple changed, the kernel emits an <code>ECONNRESET</code>, terminating all active SSH sessions, video calls, or downloads.
                </p>

                <div className="p-4 rounded-2xl bg-[#fbfaf7] border border-[#e7e3da] my-4 text-xs space-y-2">
                  <div className="font-bold text-stone-900 text-sm">How QUIC Solves Connection Migration:</div>
                  <ul className="list-disc pl-5 space-y-1 text-stone-600">
                    <li><strong>Connection IDs (CIDs):</strong> A QUIC connection is identified by random 64-bit to 160-bit Connection IDs negotiated between client and server, independent of the underlying IP address or UDP port.</li>
                    <li><strong>Path Validation (PATH_CHALLENGE / PATH_RESPONSE):</strong> When the server receives packets from a new IP/port with an existing CID, it issues an 8-byte random nonce inside a <code>PATH_CHALLENGE</code> frame. The client echoes this nonce back in a <code>PATH_RESPONSE</code>, proving ownership of the new IP and preventing off-path packet injection attacks.</li>
                    <li><strong>Anti-Amplification Limit:</strong> Until the new path is validated, the server must not send more than 3x the bytes received from the new address, preventing attackers from using migration for DDoS reflection.</li>
                    <li><strong>Header Protection:</strong> To prevent middleboxes from snooping on transport metrics, QUIC encrypts packet numbers and key flags using a sample of the payload ciphertext. Passive observers cannot track individual packet sequences.</li>
                  </ul>
                </div>
              </section>

              {/* SECTION 10.10 */}
              <section id="section-10.10" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 font-mono">
                  <span>Section 10.10</span>
                  <span>·</span>
                  <span>Performance Engineering</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  Network Impairments: Latency, Jitter, Packet Loss &amp; Transport Selection
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  Transport selection is dictated by four critical network metrics and the application's tolerance for error vs delay:
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4 text-center">
                  <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200">
                    <div className="text-sm font-black text-stone-900">Latency (RTT)</div>
                    <div className="text-[10px] text-stone-500">Propagation &amp; queueing delay</div>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200">
                    <div className="text-sm font-black text-stone-900">Jitter (Delay Var)</div>
                    <div className="text-[10px] text-stone-500">Delay variation over time</div>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200">
                    <div className="text-sm font-black text-stone-900">Packet Loss (p)</div>
                    <div className="text-[10px] text-stone-500">Dropped or corrupted frames</div>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200">
                    <div className="text-sm font-black text-stone-900">Throughput (R)</div>
                    <div className="text-[10px] text-stone-500">Goodput per unit time</div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#18181b] text-white my-4 font-mono text-xs">
                  <div className="text-stone-400 text-[10px] uppercase font-bold mb-2">Mathematical Formulation: RFC 3550 Jitter Estimation</div>
                  <p className="text-stone-300 leading-relaxed mb-2">
                    In RTP/UDP media delivery, arrival jitter J_i is continuously calculated using an exponential moving average over packet arrival timestamp differences:
                  </p>
                  <pre className="text-emerald-400">
{`D(i-1, i) = (R_i - S_i) - (R_{i-1} - S_{i-1})
J_i = J_{i-1} + (|D(i-1, i)| - J_{i-1}) / 16`}
                  </pre>
                  <p className="text-stone-400 text-[11px] mt-2">
                    Where S_i is the media transmission timestamp and R_i is the arrival timestamp. Jitter buffers are sized to at least 2 * &sigma;_RTT to prevent audio underflow without introducing perceivable lag.
                  </p>
                </div>
              </section>

              {/* SECTION 10.11 */}
              <section id="section-10.11" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 font-mono">
                  <span>Section 10.11</span>
                  <span>·</span>
                  <span>Security &amp; DDoS Architecture</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  UDP Abuse: Amplification Attacks, Spoofing &amp; BCP 38 Defenses
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  Because UDP does not establish a handshake before transmitting data, an attacker can transmit raw IP packets containing a forged (spoofed) source IP address. If an attacker queries an open, exposed UDP server that generates a response significantly larger than the request, the server becomes an <strong>unwitting reflection amplifier</strong> directed straight at the victim.
                </p>

                {/* Amplification Table */}
                <div className="overflow-x-auto my-4">
                  <table className="w-full text-xs text-left border border-stone-200 rounded-xl">
                    <thead>
                      <tr className="bg-stone-100 text-stone-800 font-bold uppercase tracking-wider border-b border-stone-200">
                        <th className="p-3 border-r border-stone-200">Protocol</th>
                        <th className="p-3 border-r border-stone-200">Vulnerable Command / Payload</th>
                        <th className="p-3 border-r border-stone-200">Amplification Factor</th>
                        <th className="p-3">Primary Defense</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-stone-700 font-mono">
                      <tr>
                        <td className="p-3 font-bold text-stone-900 border-r border-stone-200">DNS (UDP 53)</td>
                        <td className="p-3 border-r border-stone-200">EDNS0 <code>ANY</code> query with DNSSEC keys</td>
                        <td className="p-3 text-amber-600 font-bold">28x to 54x</td>
                        <td className="p-3">Response Rate Limiting (RRL), disable open recursion</td>
                      </tr>
                      <tr className="bg-stone-50/50">
                        <td className="p-3 font-bold text-stone-900 border-r border-stone-200">NTP (UDP 123)</td>
                        <td className="p-3 border-r border-stone-200"><code>monlist</code> query (list of last 600 clients)</td>
                        <td className="p-3 text-orange-600 font-bold">556x to 1,000x</td>
                        <td className="p-3">Disable <code>monlist</code> (default in ntp-4.2.7p26+)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-stone-900 border-r border-stone-200">Memcached (UDP 11211)</td>
                        <td className="p-3 border-r border-stone-200">Multi-megabyte key extraction via 15-byte UDP query</td>
                        <td className="p-3 text-red-600 font-bold">10,000x to 51,000x!</td>
                        <td className="p-3">Disable UDP support completely (<code>-U 0</code>), bind to localhost</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 rounded-2xl bg-stone-900 text-white my-4 text-xs font-mono">
                  <div className="text-orange-400 font-bold mb-2">Root Cause Solution: BCP 38 / RFC 2827 Ingress Filtering</div>
                  <p className="text-stone-300 leading-relaxed mb-2">
                    Reflection attacks exist solely because transit ISPs allow customers to emit packets with spoofed source IPs. <strong>Best Current Practice 38 (BCP 38)</strong> mandates that border routers implement <em>Unicast Reverse Path Forwarding (uRPF)</em>:
                  </p>
                  <pre className="text-stone-200 bg-stone-800 p-2.5 rounded-lg overflow-x-auto">
{`# Cisco / Juniper Border Router uRPF Strict Mode
interface GigabitEthernet0/0/1
 ip verify unicast source reachable-via rx
# Router discards any packet whose Source IP is not routable via the receiving interface!`}
                  </pre>
                </div>
              </section>

              {/* SECTION 10.12 */}
              <section id="section-10.12" className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 font-mono">
                  <span>Section 10.12</span>
                  <span>·</span>
                  <span>Hands-on Lab Reference</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                  Hands-on Socket Lab: Python TCP vs UDP Verification
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  To observe the fundamental differences between stream sockets (<code>SOCK_STREAM</code>) and datagram sockets (<code>SOCK_DGRAM</code>) at the packet level, deploy the Python test servers provided in the Lab Guide tab, capture traffic using Wireshark on loopback (<code>lo</code>), and observe how message boundaries and timeouts behave under controlled execution.
                </p>
              </section>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 2: SIMULATOR 1 - UDP 8-BYTE HEADER & CHECKSUM CALCULATOR       */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "udp-sim" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                    <Sliders size={14} />
                    <span>Interactive RFC 768 Dissector</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    UDP 8-Byte Header &amp; Pseudo-Header Checksum Sandbox
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setSrcPort(53281);
                      setDstPort(53);
                      setUdpPayload("DNS Query: prepspaces.com (Type A)");
                      setIpVersion("ipv4");
                    }}
                    className="px-3 py-1.5 rounded-lg border border-stone-200 bg-stone-50 hover:bg-stone-100 text-xs font-bold text-stone-700 flex items-center gap-1.5 cursor-pointer"
                  >
                    <RotateCcw size={12} />
                    <span>Reset Defaults</span>
                  </button>
                </div>
              </div>

              {/* Controls Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">Source Port (16-bit)</label>
                  <input
                    type="number"
                    min="1"
                    max="65535"
                    value={srcPort}
                    onChange={(e) => setSrcPort(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs font-mono text-stone-900 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">Destination Port (16-bit)</label>
                  <input
                    type="number"
                    min="1"
                    max="65535"
                    value={dstPort}
                    onChange={(e) => setDstPort(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs font-mono text-stone-900 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">IP Protocol Version</label>
                  <select
                    value={ipVersion}
                    onChange={(e) => setIpVersion(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs font-mono text-stone-900 focus:outline-none focus:border-orange-500"
                  >
                    <option value="ipv4">IPv4 (Checksum Optional)</option>
                    <option value="ipv6">IPv6 (Checksum Mandatory - RFC 8200)</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">Total Datagram Size</label>
                  <div className="px-3 py-2 rounded-xl bg-stone-100 border border-stone-200 text-xs font-mono font-bold text-stone-800">
                    {udpTotalLength} Bytes (8 Hdr + {udpPayloadLength} Data)
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="text-xs font-bold text-stone-700 block mb-1">Application Payload String</label>
                <input
                  type="text"
                  value={udpPayload}
                  onChange={(e) => setUdpPayload(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs font-mono text-stone-900 focus:outline-none focus:border-orange-500"
                  placeholder="Enter payload data..."
                />
              </div>

              {/* Graphical Header Breakdown */}
              <div className="p-6 rounded-2xl bg-stone-900 text-white font-mono text-xs">
                <div className="text-stone-400 text-[10px] uppercase font-bold mb-3 flex items-center justify-between border-b border-stone-800 pb-2">
                  <span>Binary Hexadecimal Breakdown (Network Byte Order / Big-Endian)</span>
                  <span className="text-emerald-400">Fixed 64-Bit Transport Header</span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-stone-800/80 border border-stone-700">
                    <span className="text-[10px] text-stone-400 block uppercase">Field 1: Source Port</span>
                    <span className="text-orange-400 font-bold text-sm">{srcPort}</span>
                    <span className="text-stone-500 text-[11px] block mt-0.5">
                      0x{srcPort.toString(16).toUpperCase().padStart(4, "0")}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-800/80 border border-stone-700">
                    <span className="text-[10px] text-stone-400 block uppercase">Field 2: Destination Port</span>
                    <span className="text-orange-400 font-bold text-sm">{dstPort}</span>
                    <span className="text-stone-500 text-[11px] block mt-0.5">
                      0x{dstPort.toString(16).toUpperCase().padStart(4, "0")} ({dstPort === 53 ? "DNS" : dstPort === 443 ? "QUIC" : "Custom"})
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-800/80 border border-stone-700">
                    <span className="text-[10px] text-stone-400 block uppercase">Field 3: Length</span>
                    <span className="text-blue-400 font-bold text-sm">{udpTotalLength} Bytes</span>
                    <span className="text-stone-500 text-[11px] block mt-0.5">
                      0x{udpTotalLength.toString(16).toUpperCase().padStart(4, "0")}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-800/80 border border-stone-700">
                    <span className="text-[10px] text-stone-400 block uppercase">Field 4: Checksum</span>
                    <span className="text-emerald-400 font-bold text-sm">{simulatedChecksum}</span>
                    <span className="text-stone-500 text-[11px] block mt-0.5">
                      {ipVersion === "ipv6" ? "Mandatory RFC 8200 Verified" : "Valid 1's Complement Sum"}
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-stone-800/50 rounded-xl text-stone-300 text-[11px] leading-relaxed">
                  <strong>Pseudo-Header Verification Scope:</strong> Checksum verifies <code>SrcIP: {ipVersion === "ipv4" ? "192.0.2.1" : "2001:db8::1"}</code> + <code>DstIP: {ipVersion === "ipv4" ? "198.51.100.1" : "2001:db8::2"}</code> + <code>Zeroes (8-bit)</code> + <code>Protocol: 17 (0x11)</code> + <code>UDP Length: {udpTotalLength}</code> + Header + Payload.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 3: SIMULATOR 2 - HTTP/2 VS HTTP/3 HEAD-OF-LINE BLOCKING        */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "hol-sim" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                    <Split size={14} />
                    <span>Transport Multiplexing Visualizer</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    HTTP/2 (TCP) vs HTTP/3 (QUIC) Head-of-Line (HoL) Blocking
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={resetHolSim}
                    className="px-3 py-1.5 rounded-lg border border-stone-200 bg-stone-50 hover:bg-stone-100 text-xs font-bold text-stone-700 flex items-center gap-1.5 cursor-pointer"
                  >
                    <RotateCcw size={12} />
                    <span>Reset Simulation</span>
                  </button>
                </div>
              </div>

              <p className="text-stone-600 text-xs leading-relaxed mb-6">
                Click a stream button below to inject packet loss into that specific stream. Observe how TCP stalls <strong>all 3 streams</strong> at the receiver buffer, whereas QUIC delivers unaffected streams immediately to the application.
              </p>

              {/* Stream Trigger Buttons */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <span className="text-xs font-bold text-stone-700">Simulate Packet Drop:</span>
                <button
                  onClick={() => triggerPacketDrop("s1")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                    tcpLostStream === "s1"
                      ? "bg-red-600 text-white"
                      : "bg-stone-100 hover:bg-stone-200 text-stone-800"
                  }`}
                >
                  Drop Packet on Stream 1 (HTML Document)
                </button>
                <button
                  onClick={() => triggerPacketDrop("s2")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                    tcpLostStream === "s2"
                      ? "bg-red-600 text-white"
                      : "bg-stone-100 hover:bg-stone-200 text-stone-800"
                  }`}
                >
                  Drop Packet on Stream 2 (CSS Stylesheet)
                </button>
                <button
                  onClick={() => triggerPacketDrop("s3")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                    tcpLostStream === "s3"
                      ? "bg-red-600 text-white"
                      : "bg-stone-100 hover:bg-stone-200 text-stone-800"
                  }`}
                >
                  Drop Packet on Stream 3 (Hero Image)
                </button>
              </div>

              {/* Dual Visualizer Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* HTTP/2 over TCP */}
                <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-stone-200">
                    <span className="font-bold text-sm text-stone-900">HTTP/2 over Single TCP Socket</span>
                    <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded font-mono ${
                      isSimulatingHol ? "bg-red-100 text-red-700" : "bg-emerald-100 text-emerald-700"
                    }`}>
                      {isSimulatingHol ? "TCP HoL Blocked!" : "Streaming Clean"}
                    </span>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    {[
                      { id: "s1", name: "Stream 1: index.html (Bytes 1-1500)" },
                      { id: "s2", name: "Stream 2: app.css (Bytes 1501-3000)" },
                      { id: "s3", name: "Stream 3: hero.png (Bytes 3001-4500)" },
                    ].map((s) => {
                      const isDropped = tcpLostStream === s.id;
                      const isStalled = isSimulatingHol && !isDropped;
                      return (
                        <div
                          key={s.id}
                          className={`p-3 rounded-xl border transition ${
                            isDropped
                              ? "bg-red-50 border-red-300 text-red-900"
                              : isStalled
                              ? "bg-amber-50 border-amber-300 text-amber-900"
                              : "bg-white border-stone-200 text-stone-800"
                          }`}
                        >
                          <div className="flex items-center justify-between font-bold">
                            <span>{s.name}</span>
                            <span className="text-[10px]">
                              {isDropped ? "DROPPED (Awaiting Retransmit)" : isStalled ? "STALLED IN QUEUE" : "DELIVERED"}
                            </span>
                          </div>
                          <p className="text-[11px] text-stone-500 mt-1">
                            {isDropped
                              ? "TCP segment lost; Fast Retransmit / RTO timer ticking..."
                              : isStalled
                              ? "Application cannot read this available data because TCP receiver buffer must enforce monotonic order!"
                              : "Received & consumed by application."}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* HTTP/3 over QUIC */}
                <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200">
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-emerald-200">
                    <span className="font-bold text-sm text-emerald-950">HTTP/3 over QUIC (RFC 9000)</span>
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded font-mono bg-emerald-100 text-emerald-800">
                      Independent Stream Machines
                    </span>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    {[
                      { id: "s1", name: "Stream 1: index.html (Offset 0-1500)" },
                      { id: "s2", name: "Stream 2: app.css (Offset 0-1500)" },
                      { id: "s3", name: "Stream 3: hero.png (Offset 0-1500)" },
                    ].map((s) => {
                      const isDropped = quicLostStream === s.id;
                      return (
                        <div
                          key={s.id}
                          className={`p-3 rounded-xl border transition ${
                            isDropped
                              ? "bg-red-50 border-red-300 text-red-900"
                              : "bg-white border-emerald-300 text-emerald-950"
                          }`}
                        >
                          <div className="flex items-center justify-between font-bold">
                            <span>{s.name}</span>
                            <span className="text-[10px]">
                              {isDropped ? "LOST (Stream Isolated)" : "DELIVERED IMMEDIATELY"}
                            </span>
                          </div>
                          <p className="text-[11px] text-stone-600 mt-1">
                            {isDropped
                              ? "Only Stream 1 waits for QUIC ACK/retransmission."
                              : "Delivered immediately to browser parser! No cross-stream dependency."}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 4: SIMULATOR 3 - QUIC 0-RTT / 1-RTT HANDSHAKE LADDER          */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "quic-handshake-sim" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                    <Clock size={14} />
                    <span>Cryptographic Handshake Timeline</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    0-RTT &amp; 1-RTT Latency Comparison Ladder
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {[
                    { id: "tcp-tls12", label: "TCP + TLS 1.2 (3 RTT)" },
                    { id: "tcp-tls13", label: "TCP + TLS 1.3 (2 RTT)" },
                    { id: "quic-1rtt", label: "QUIC Initial (1 RTT)" },
                    { id: "quic-0rtt", label: "QUIC Resumption (0 RTT)" },
                  ].map((mode) => (
                    <button
                      key={mode.id}
                      onClick={() => {
                        setHandshakeMode(mode.id);
                        setHandshakeStep(0);
                      }}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                        handshakeMode === mode.id
                          ? "bg-orange-600 text-white shadow-sm"
                          : "bg-stone-100 hover:bg-stone-200 text-stone-700"
                      }`}
                    >
                      {mode.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Ladder Visualizer */}
              <div className="p-6 rounded-2xl bg-stone-900 text-white font-mono text-xs">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-800 text-stone-400 text-[10px] uppercase font-bold">
                  <span>Client Endpoint (Browser)</span>
                  <span>Timeline Ladder Flow</span>
                  <span>Server Endpoint (Origin)</span>
                </div>

                <div className="space-y-3">
                  {handshakeFlights.map((flight, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-stone-800/80 border border-stone-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div className="flex items-center gap-3">
                        <span className="px-2 py-0.5 rounded bg-orange-950 text-orange-400 font-bold text-[10px] border border-orange-800/50">
                          {flight.rtt}
                        </span>
                        <span className="text-stone-300 font-bold" dangerouslySetInnerHTML={{ __html: flight.dir }} />
                      </div>
                      <div className="text-stone-400 text-[11px] sm:text-right">
                        {flight.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 5: SIMULATOR 4 - QUIC CONNECTION MIGRATION                     */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "migration-sim" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                    <Smartphone size={14} />
                    <span>Connection Mobility Sandbox</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    QUIC Connection Migration (Wi-Fi &rarr; Cellular 5G)
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={triggerMigration}
                    disabled={networkPath !== "wifi"}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                      networkPath === "wifi"
                        ? "bg-orange-600 hover:bg-orange-700 text-white"
                        : "bg-stone-200 text-stone-400 cursor-not-allowed"
                    }`}
                  >
                    <Wifi size={14} />
                    <span>Simulate Switching to 5G</span>
                  </button>
                  <button
                    onClick={resetMigration}
                    className="px-3 py-1.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 text-xs font-bold text-stone-700 flex items-center gap-1.5 cursor-pointer"
                  >
                    <RotateCcw size={12} />
                    <span>Reset</span>
                  </button>
                </div>
              </div>

              {/* Status Header Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <span className="text-[10px] text-stone-500 font-bold uppercase block mb-1">Active Client Interface</span>
                  <div className="text-sm font-bold text-stone-900 flex items-center gap-2">
                    {networkPath === "wifi" ? (
                      <>
                        <Wifi size={16} className="text-blue-600" />
                        <span>Wi-Fi (192.168.1.42:52119)</span>
                      </>
                    ) : (
                      <>
                        <Smartphone size={16} className="text-emerald-600" />
                        <span>Cellular 5G (172.56.21.90:48912)</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <span className="text-[10px] text-stone-500 font-bold uppercase block mb-1">QUIC Connection ID (CID)</span>
                  <div className="text-sm font-mono font-bold text-orange-600">
                    0x8fe72b01a (Persistent)
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <span className="text-[10px] text-stone-500 font-bold uppercase block mb-1">Session Status</span>
                  <div className={`text-sm font-bold ${
                    networkPath === "migrating" ? "text-amber-600" : "text-emerald-600"
                  }`}>
                    {networkPath === "migrating" ? "Validating PATH_CHALLENGE..." : "Active Transmission (No Disconnect)"}
                  </div>
                </div>
              </div>

              {/* Console Logs */}
              <div className="p-6 rounded-2xl bg-stone-900 text-white font-mono text-xs">
                <div className="text-stone-400 text-[10px] uppercase font-bold mb-3 border-b border-stone-800 pb-2">
                  Diagnostic Migration Event Log
                </div>
                <div className="space-y-1.5">
                  {migrationLogs.map((log, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-stone-500 select-none">[{idx + 1}]</span>
                      <span className={log.includes("FAIL") ? "text-red-400 font-bold" : log.includes("SUCCESSFUL") ? "text-emerald-400 font-bold" : "text-stone-300"}>
                        {log}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 6: SIMULATOR 5 - UDP AMPLIFICATION & DDOS DEFENSE              */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "ddos-sim" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-widest font-mono">
                    <ShieldAlertIcon size={14} />
                    <span>DDoS Defense Sandbox</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    UDP Amplification &amp; Reflection Attack Simulator
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setAttackActive(!attackActive)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                      attackActive
                        ? "bg-red-600 text-white shadow-sm"
                        : "bg-stone-900 text-white hover:bg-stone-800"
                    }`}
                  >
                    <Flame size={14} />
                    <span>{attackActive ? "Halt Attack" : "Launch Simulated Reflection"}</span>
                  </button>
                </div>
              </div>

              {/* Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">Target Reflector Protocol</label>
                  <select
                    value={reflectorProtocol}
                    onChange={(e) => setReflectorProtocol(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs font-mono text-stone-900 focus:outline-none focus:border-orange-500"
                  >
                    <option value="dns">DNS ANY Query (54x Amplification)</option>
                    <option value="ntp">NTP monlist (205x Amplification)</option>
                    <option value="memcached">Memcached UDP (50,000x Amplification!)</option>
                    <option value="snmp">SNMP BulkGet (37x Amplification)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">BCP 38 Ingress Filtering</label>
                  <button
                    onClick={() => setEnableBcp38(!enableBcp38)}
                    className={`w-full px-3 py-2 rounded-xl text-xs font-bold border transition ${
                      enableBcp38
                        ? "bg-emerald-50 border-emerald-300 text-emerald-800 font-bold"
                        : "bg-stone-100 border-stone-300 text-stone-600"
                    }`}
                  >
                    {enableBcp38 ? "ENABLED (Drops Spoofed Source IPs)" : "DISABLED (Spoofing Permitted)"}
                  </button>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">Response Rate Limiting (RRL)</label>
                  <button
                    onClick={() => setEnableRrl(!enableRrl)}
                    className={`w-full px-3 py-2 rounded-xl text-xs font-bold border transition ${
                      enableRrl
                        ? "bg-emerald-50 border-emerald-300 text-emerald-800 font-bold"
                        : "bg-stone-100 border-stone-300 text-stone-600"
                    }`}
                  >
                    {enableRrl ? "ENABLED (Caps Reflector Responses)" : "DISABLED (Full Flood Permitted)"}
                  </button>
                </div>
              </div>

              {/* Visual Attack Flow Diagram */}
              <div className="p-6 rounded-2xl bg-stone-900 text-white font-mono text-xs">
                <div className="text-stone-400 text-[10px] uppercase font-bold mb-4 pb-2 border-b border-stone-800 flex items-center justify-between">
                  <span>Attack Topology Vector</span>
                  <span className="text-amber-400 font-bold">Amplification Factor: ~{currentReflector.ampFactor}x</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700">
                    <span className="text-[10px] text-red-400 block uppercase font-bold mb-1">Adversary Host</span>
                    <p className="text-stone-300 text-xs">Sends {currentReflector.reqSize} Byte Request</p>
                    <p className="text-stone-500 text-[10px] mt-1">Source IP: Spoofed Victim IP</p>
                    {enableBcp38 && (
                      <span className="mt-2 inline-block px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 text-[10px] font-bold border border-emerald-800">
                        DROPPED BY BCP 38 FILTER
                      </span>
                    )}
                  </div>

                  <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700">
                    <span className="text-[10px] text-orange-400 block uppercase font-bold mb-1">
                      Reflector ({currentReflector.name})
                    </span>
                    <p className="text-stone-300 text-xs">Port {currentReflector.port}</p>
                    <p className="text-stone-500 text-[10px] mt-1">
                      Generates {currentReflector.respSize.toLocaleString()} Bytes Response
                    </p>
                    {enableRrl && (
                      <span className="mt-2 inline-block px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 text-[10px] font-bold border border-emerald-800">
                        RRL THROTTLED TO 5/sec
                      </span>
                    )}
                  </div>

                  <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700">
                    <span className="text-[10px] text-stone-400 block uppercase font-bold mb-1">Victim Server</span>
                    <p className={`text-xs font-bold ${
                      attackActive && !enableBcp38 && !enableRrl ? "text-red-400" : "text-emerald-400"
                    }`}>
                      {attackActive && !enableBcp38 && !enableRrl
                        ? "UNDER SEVERE DDOS FLOOD!"
                        : "Traffic Within Safe Baseline"}
                    </p>
                    <p className="text-stone-500 text-[10px] mt-1">
                      Inbound: {attackActive && !enableBcp38 && !enableRrl ? `${(currentReflector.respSize * 50 / 1024).toFixed(1)} KB/s` : "0 KB/s"}
                    </p>
                  </div>
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
                Linux UDP, QUIC &amp; Network Diagnostics Cheatsheet
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed mb-6">
                Essential diagnostic commands for inspecting UDP sockets, debugging DNS over UDP vs TCP, capturing QUIC datagrams, and configuring kernel buffer parameters.
              </p>

              <div className="space-y-4">
                {[
                  {
                    id: "c1",
                    title: "Inspect Active UDP Sockets & Buffer Drops (ss)",
                    cmd: "ss -uan -m",
                    desc: "Lists all listening and connected UDP sockets with socket memory buffers (rb=receive buffer, tb=transmit buffer) and drop counters.",
                  },
                  {
                    id: "c2",
                    title: "Compare DNS Resolution over UDP vs Explicit TCP",
                    cmd: "dig prepspaces.com +notcp\ndig prepspaces.com +tcp",
                    desc: "Forces DNS queries over UDP (port 53) vs TCP to diagnose upstream UDP filtering, MTU truncation, or firewall dropping.",
                  },
                  {
                    id: "c3",
                    title: "Capture Live UDP DNS & QUIC Traffic with tcpdump",
                    cmd: "sudo tcpdump -nnvv -i any 'udp port 53 or udp port 443'",
                    desc: "Sniffs both traditional DNS datagrams and HTTP/3 QUIC connection establishment flights on loopback or physical interfaces.",
                  },
                  {
                    id: "c4",
                    title: "Tune Linux Kernel UDP Socket Buffer Limits",
                    cmd: "sudo sysctl -w net.ipv4.udp_rmem_min=16384\nsudo sysctl -w net.ipv4.udp_wmem_min=16384\nsudo sysctl -w net.core.rmem_max=16777216",
                    desc: "Prevents high-throughput UDP packet drops (RTP media / QUIC web servers) by expanding kernel socket receive buffers.",
                  },
                  {
                    id: "c5",
                    title: "Apply iptables Hashlimit Defense against UDP Floods",
                    cmd: "sudo iptables -A INPUT -p udp --dport 53 -m hashlimit --hashlimit-name dns_rrl --hashlimit-above 50/sec --hashlimit-burst 100 --hashlimit-mode srcip -j DROP",
                    desc: "Enforces kernel-level source-IP token-bucket rate limiting to mitigate DNS/NTP reflection floods without exhausting host resources.",
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
                    Module 10 Comprehensive Assessment (10 Questions)
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
        {/* TAB 9: LAB GUIDE & TECHNICAL REPORT TEMPLATE                       */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "lab-report" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                    <ListChecks size={14} />
                    <span>Lab Milestones &amp; RFC Report</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    Hands-On Wireshark Lab Checklist &amp; SRE Report Template
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-xl bg-orange-50 border border-orange-200 text-orange-700">
                    {completedChecksCount} / 7 Completed
                  </span>
                </div>
              </div>

              {/* 7-Point Lab Checklist */}
              <div className="space-y-2 mb-8">
                {[
                  { key: "c1", label: "Part A: Built and executed local Python TCP echo server and verified 3-way handshake." },
                  { key: "c2", label: "Part B: Built and executed Python UDP echo server with socket.timeout(2.0) error handler." },
                  { key: "c3", label: "Part C: Captured loopback traffic on Wireshark (lo) with filter 'tcp.port == 9001 || udp.port == 9002'." },
                  { key: "c4", label: "Part D: Verified 8-byte UDP header size vs 20-60 byte TCP header size in packet dissector." },
                  { key: "c5", label: "Part E: Observed message boundary preservation: 5 sendto() calls resulted in exactly 5 recvfrom() reads." },
                  { key: "c6", label: "Part F: Introduced 10% packet drop via 'tc netem' and compared TCP retransmits vs UDP timeouts." },
                  { key: "c7", label: "Part G: Dissected QUIC initial flight packets on port 443 and verified Connection ID persistence." },
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
                  <span>Markdown Lab Report Template (RFC 768 / 9000 Standard)</span>
                  <button
                    onClick={() => copyToClipboard(transportReportTemplate, "report")}
                    className="text-stone-300 hover:text-white flex items-center gap-1.5 cursor-pointer transition"
                  >
                    {copiedCodeId === "report" ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                    <span>{copiedCodeId === "report" ? "Report Copied" : "Copy Markdown"}</span>
                  </button>
                </div>
                <pre className="text-stone-300 text-[11px] leading-relaxed overflow-x-auto max-h-96 whitespace-pre-wrap">
                  {transportReportTemplate}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* Footer Navigation Bar */}
        <div className="mt-10 pt-6 border-t border-[#e7e3da] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => {
              navigate("/learning/networks/tcp");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#e7e3da] bg-white text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#ea580c] transition cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 9 — TCP: Reliable Transport</span>
          </button>

          <button
            onClick={() => {
              navigate("/learning/networks/dns");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-xs font-bold text-white shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
          >
            <span>Next: Module 11 — DNS &amp; Internet Naming</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

function ShieldAlertIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </svg>
  );
}
