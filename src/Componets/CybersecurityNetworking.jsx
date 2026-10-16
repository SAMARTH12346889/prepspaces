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
  UserCheck,
  AlertOctagon,
  Key,
  Database,
  Search,
  Filter,
  CheckSquare,
  XCircle,
  Download,
  Info,
  Radio,
  Wifi,
  CornerDownRight,
  Split,
  Binary,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* PREPSPACES CYBERSECURITY MASTERCLASS: MODULE 2                             */
/* Networking Fundamentals, TCP/IP, DNS, HTTP/HTTPS, and Network Protocols   */
/* University-Informed: MIT 6.829, Stanford CS144, UC Berkeley CS168, CMU     */
/* -------------------------------------------------------------------------- */

export default function CybersecurityNetworking() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(1);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'subnet-lab' | 'packet-inspector' | 'dns-tracer' | 'troubleshooter' | 'quiz'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* LAB 2: INTERACTIVE CIDR SUBNET CALCULATOR & WORKED EXAMPLE                 */
  /* -------------------------------------------------------------------------- */
  const [cidrBaseIp, setCidrBaseIp] = useState("192.168.20.0");
  const [cidrPrefix, setCidrPrefix] = useState(26); // Default /26 from syllabus

  const subnetCalculations = useMemo(() => {
    const prefix = Math.min(Math.max(parseInt(cidrPrefix) || 24, 16), 30);
    const hostBits = 32 - prefix;
    const totalAddresses = Math.pow(2, hostBits);
    const usableHosts = prefix >= 31 ? 0 : totalAddresses - 2;

    // Subnet mask calculation
    let maskInt = 0;
    for (let i = 0; i < prefix; i++) {
      maskInt += 1 << (31 - i);
    }
    const m1 = (maskInt >>> 24) & 255;
    const m2 = (maskInt >>> 16) & 255;
    const m3 = (maskInt >>> 8) & 255;
    const m4 = maskInt & 255;
    const maskStr = `${m1}.${m2}.${m3}.${m4}`;

    // 4-subnet division (for /24 split into /26s)
    const subnets = [
      { name: "Subnet 1: Student Enclave", cidr: "192.168.20.0/26", net: "192.168.20.0", first: "192.168.20.1", last: "192.168.20.62", bcast: "192.168.20.63", hosts: 62 },
      { name: "Subnet 2: Staff & Operations", cidr: "192.168.20.64/26", net: "192.168.20.64", first: "192.168.20.65", last: "192.168.20.126", bcast: "192.168.20.127", hosts: 62 },
      { name: "Subnet 3: Management & Jumpbox", cidr: "192.168.20.128/26", net: "192.168.20.128", first: "192.168.20.129", last: "192.168.20.190", bcast: "192.168.20.191", hosts: 62 },
      { name: "Subnet 4: Security Lab & Sandboxes", cidr: "192.168.20.192/26", net: "192.168.20.192", first: "192.168.20.193", last: "192.168.20.254", bcast: "192.168.20.255", hosts: 62 },
    ];

    return {
      prefix,
      maskStr,
      totalAddresses,
      usableHosts,
      subnets,
    };
  }, [cidrBaseIp, cidrPrefix]);

  /* -------------------------------------------------------------------------- */
  /* LAB 4: INTERACTIVE WIRESHARK PACKET INSPECTOR SIMULATOR                    */
  /* -------------------------------------------------------------------------- */
  const simulatedPackets = [
    {
      id: 1,
      time: "0.000000",
      src: "192.168.1.25",
      dst: "1.1.1.1",
      proto: "DNS",
      len: 74,
      info: "Standard query 0x1a4f A learn.example.com",
      displayProto: "dns",
      details: {
        ethernet: "Source MAC: 00:11:22:33:44:55 -> Dest MAC: 00:aa:bb:cc:dd:ee (Gateway)",
        ip: "IPv4 Version: 4, Header Length: 20 bytes, TTL: 64, Protocol: UDP (17), Src: 192.168.1.25, Dst: 1.1.1.1",
        transport: "User Datagram Protocol (UDP), Src Port: 53142, Dst Port: 53, Length: 40 bytes, Checksum: 0x4f12",
        app: "Domain Name System (Query): Query Type: A (IPv4 address), Class: IN (0x0001), Name: learn.example.com",
      },
    },
    {
      id: 2,
      time: "0.014210",
      src: "1.1.1.1",
      dst: "192.168.1.25",
      proto: "DNS",
      len: 90,
      info: "Standard query response 0x1a4f A learn.example.com A 104.21.58.192",
      displayProto: "dns",
      details: {
        ethernet: "Source MAC: 00:aa:bb:cc:dd:ee -> Dest MAC: 00:11:22:33:44:55",
        ip: "IPv4 Version: 4, Header Length: 20 bytes, TTL: 58, Protocol: UDP (17), Src: 1.1.1.1, Dst: 192.168.1.25",
        transport: "User Datagram Protocol (UDP), Src Port: 53, Dst Port: 53142",
        app: "DNS Response: Authoritative Answer: No, Recursion Available: Yes, Answers: learn.example.com -> 104.21.58.192 (TTL: 300)",
      },
    },
    {
      id: 3,
      time: "0.021500",
      src: "192.168.1.25",
      dst: "104.21.58.192",
      proto: "TCP",
      len: 66,
      info: "54230 -> 443 [SYN] Seq=0 Win=64240 Len=0 MSS=1460 SACK_PERM=1",
      displayProto: "tcp",
      details: {
        ethernet: "Source MAC: 00:11:22:33:44:55 -> Dest MAC: 00:aa:bb:cc:dd:ee",
        ip: "IPv4 Src: 192.168.1.25, Dst: 104.21.58.192, Flags: DF (Don't Fragment)",
        transport: "TCP Handshake [1/3]: SYN Flag Set (0x002), Client Initial Seq Number: 382910481 (relative 0), Window: 64240",
        app: "Transport Connection Initialization: Requesting TCP stream setup with remote edge.",
      },
    },
    {
      id: 4,
      time: "0.038420",
      src: "104.21.58.192",
      dst: "192.168.1.25",
      proto: "TCP",
      len: 66,
      info: "443 -> 54230 [SYN, ACK] Seq=0 Ack=1 Win=65535 Len=0 MSS=1460",
      displayProto: "tcp",
      details: {
        ethernet: "Source MAC: 00:aa:bb:cc:dd:ee -> Dest MAC: 00:11:22:33:44:55",
        ip: "IPv4 Src: 104.21.58.192, Dst: 192.168.1.25, TTL: 56",
        transport: "TCP Handshake [2/3]: SYN + ACK Flags Set (0x012), Server Initial Seq: 981240182, Ack Number: 1 (relative)",
        app: "Transport Connection Synchronization: Server agrees to stream and synchronizes its own sequence counter.",
      },
    },
    {
      id: 5,
      time: "0.038490",
      src: "192.168.1.25",
      dst: "104.21.58.192",
      proto: "TCP",
      len: 54,
      info: "54230 -> 443 [ACK] Seq=1 Ack=1 Win=64240 Len=0",
      displayProto: "tcp",
      details: {
        ethernet: "Source MAC: 00:11:22:33:44:55 -> Dest MAC: 00:aa:bb:cc:dd:ee",
        ip: "IPv4 Src: 192.168.1.25, Dst: 104.21.58.192",
        transport: "TCP Handshake [3/3]: ACK Flag Set (0x010), Connection Established (ESTABLISHED state reached on both endpoints).",
        app: "Transport Ready: The bi-directional reliable byte-stream is now open for higher layer protocol payloads.",
      },
    },
    {
      id: 6,
      time: "0.041200",
      src: "192.168.1.25",
      dst: "104.21.58.192",
      proto: "TLSv1.3",
      len: 517,
      info: "Client Hello (SNI=learn.example.com, Supported Versions: TLS 1.3, TLS 1.2)",
      displayProto: "tls",
      details: {
        ethernet: "Frame length: 517 bytes",
        ip: "IPv4 Protocol: TCP (6)",
        transport: "TCP Port 54230 -> 443, Seq=1, Ack=1",
        app: "Transport Layer Security (TLS 1.3 ClientHello): Proposes cryptographic cipher suites (TLS_AES_256_GCM_SHA384, TLS_CHACHA20_POLY1305_SHA256), KeyShare (X25519), and Server Name Indication (SNI).",
      },
    },
    {
      id: 7,
      time: "0.062140",
      src: "104.21.58.192",
      dst: "192.168.1.25",
      proto: "TLSv1.3",
      len: 1480,
      info: "Server Hello, Change Cipher Spec, Encrypted Extensions, Certificate, Certificate Verify, Finished",
      displayProto: "tls",
      details: {
        ethernet: "Frame length: 1480 bytes",
        ip: "IPv4 Src: 104.21.58.192, Dst: 192.168.1.25",
        transport: "TCP Port 443 -> 54230",
        app: "TLS 1.3 ServerHello & Key Agreement: Agrees on TLS_AES_256_GCM_SHA384; transmits X.509 Digital Certificate chain signed by trusted CA; finishes cryptographic handshake in 1-RTT.",
      },
    },
    {
      id: 8,
      time: "0.065800",
      src: "192.168.1.25",
      dst: "104.21.58.192",
      proto: "HTTP",
      len: 342,
      info: "GET /courses/networking HTTP/1.1 (Encrypted Application Data via TLS)",
      displayProto: "http",
      details: {
        ethernet: "Frame length: 342 bytes",
        ip: "IPv4 Src: 192.168.1.25, Dst: 104.21.58.192",
        transport: "TCP Port 54230 -> 443",
        app: "Encrypted Application Payload: Plaintext HTTP request (GET /courses/networking) transmitted securely through TLS 1.3 symmetric session keys.",
      },
    },
  ];

  const [activeFilter, setActiveFilter] = useState("all"); // 'all' | 'dns' | 'tcp' | 'tls' | 'http'
  const [selectedPacket, setSelectedPacket] = useState(simulatedPackets[0]);

  const filteredPackets = useMemo(() => {
    if (activeFilter === "all") return simulatedPackets;
    return simulatedPackets.filter((p) => p.displayProto === activeFilter);
  }, [activeFilter]);

  /* -------------------------------------------------------------------------- */
  /* LAB 6: INTERACTIVE NETWORK TROUBLESHOOTING SIMULATOR                       */
  /* -------------------------------------------------------------------------- */
  const troubleshootingScenarios = [
    {
      id: "scen-1",
      title: "Fault A: Client Cannot Reach Local Gateway",
      symptom: "Student laptop cannot access intranet portal or ping default gateway 192.168.20.1.",
      cliOutput: `PS C:\\Users\\Student> ipconfig /all
   IPv4 Address. . . . . . . . . . . : 192.168.20.140
   Subnet Mask . . . . . . . . . . . : 255.255.255.192
   Default Gateway . . . . . . . . . : 192.168.20.1

PS C:\\Users\\Student> ping 192.168.20.1
Pinging 192.168.20.1 with 32 bytes of data:
Destination host unreachable.`,
      analysis:
        "SUBNET MISMATCH: With /26 (mask 255.255.255.192), host 192.168.20.140 sits in subnet 192.168.20.128/26 (range .129 - .190). The configured gateway 192.168.20.1 sits in subnet 192.168.20.0/26. The client assumes the gateway is on its local broadcast domain, but ARP cannot cross subnet boundaries.",
      fix: "Configure the gateway IP to 192.168.20.129, or reassign the student host to 192.168.20.25 within Subnet 1.",
    },
    {
      id: "scen-2",
      title: "Fault B: DNS Resolution Succeeds, But HTTP 403 Forbidden",
      symptom: "Learner attempts to download their interview report, but receives an HTTP 403 status code.",
      cliOutput: `PS C:\\Users\\Student> nslookup learn.example.com
Server:  1.1.1.1
Address: 1.1.1.1#53

Non-authoritative answer:
Name:    learn.example.com
Address: 104.21.58.192

PS C:\\Users\\Student> curl -I https://learn.example.com/api/reports/1048
HTTP/1.1 403 Forbidden
Content-Type: application/json; charset=utf-8
X-Security-Alert: Unauthorized access attempt`,
      analysis:
        "APPLICATION AUTHORIZATION FAILURE: DNS resolution and TCP/TLS handshakes succeeded perfectly. The 403 Forbidden status indicates that the web server understood the request, but the client identity lacks authorization to view Report #1048.",
      fix: "Verify user session permissions; ensure the requesting student owns the record or has been granted academic mentor permissions on the server.",
    },
    {
      id: "scen-3",
      title: "Fault C: TLS Certificate Domain Name Mismatch",
      symptom: "Browser flags connection as dangerous; command line returns SSL peer certificate error.",
      cliOutput: `PS C:\\Users\\Student> curl -I https://internal.learnsphere.org
curl: (60) SSL: no alternative certificate subject name matches target host name 'internal.learnsphere.org'
More details here: https://curl.se/docs/sslcerts.html`,
      analysis:
        "CERTIFICATE VALIDATION FAILURE: The TLS certificate presented by the server has Subject Alternative Name (SAN) configured only for 'api.learnsphere.org' and 'learnsphere.org', missing 'internal.learnsphere.org'.",
      fix: "Re-issue the TLS certificate via Let's Encrypt / DigiCert with 'internal.learnsphere.org' or '*.learnsphere.org' included in the Subject Alternative Name (SAN) extensions.",
    },
  ];

  const [activeTroubleshoot, setActiveTroubleshoot] = useState(troubleshootingScenarios[0]);

  /* -------------------------------------------------------------------------- */
  /* QUIZ & ASSESSMENT (10 UNIVERSITY-INFORMED QUESTIONS DIRECTLY FROM SYLLABUS)*/
  /* -------------------------------------------------------------------------- */
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "Which OSI layer is primarily responsible for logical addressing and routing?",
      options: ["Physical", "Data Link", "Network", "Application"],
      correctIndex: 2,
      explanation:
        "Layer 3 (the Network layer) handles logical addressing (IPv4, IPv6) and inter-network routing, allowing routers to forward packets across distinct network segments.",
    },
    {
      id: 2,
      question: "What is a MAC address primarily used for?",
      options: [
        "Identifying a local-link interface for frame delivery",
        "Encrypting HTTPS data",
        "Resolving every Internet domain",
        "Assigning a TCP port",
      ],
      correctIndex: 0,
      explanation:
        "A MAC (Media Access Control) address is a 48-bit link-layer hardware identifier used by Ethernet and Wi-Fi to deliver frames locally across a single broadcast segment or switch.",
    },
    {
      id: 3,
      question: "What does TCP provide to an application?",
      options: [
        "Guaranteed Internet availability",
        "A reliable, ordered byte stream",
        "Automatic encryption in every connection",
        "DNS record validation",
      ],
      correctIndex: 1,
      explanation:
        "TCP provides a connection-oriented, reliable, ordered byte stream through sequence numbers, acknowledgments, retransmission, and flow/congestion control.",
    },
    {
      id: 4,
      question: "Which statement about UDP is correct?",
      options: [
        "It guarantees delivery and order",
        "It always uses lower latency than TCP",
        "It has no built-in delivery or ordering guarantee",
        "It can only carry DNS queries",
      ],
      correctIndex: 2,
      explanation:
        "UDP is a connectionless, lightweight datagram protocol that does not provide built-in retransmissions, acknowledgments, or sequence ordering.",
    },
    {
      id: 5,
      question: "Which DNS record type associates a name with IPv4 address data?",
      options: ["AAAA", "MX", "A", "PTR"],
      correctIndex: 2,
      explanation:
        "An 'A' (Address) record maps a fully qualified domain name (FQDN) to a 32-bit IPv4 address. 'AAAA' maps to a 128-bit IPv6 address.",
    },
    {
      id: 6,
      question: "What does a DNS record's TTL primarily influence?",
      options: [
        "How long a response may be cached",
        "The encryption strength of HTTPS",
        "The number of TCP ports available",
        "The server's CPU speed",
      ],
      correctIndex: 0,
      explanation:
        "TTL (Time to Live) in DNS specifies the number of seconds a recursive resolver or client is permitted to cache the DNS record before re-querying the authoritative nameserver.",
    },
    {
      id: 7,
      question: "What does HTTPS use to protect HTTP communication in transit?",
      options: ["ARP", "TLS", "DHCP", "NAT"],
      correctIndex: 1,
      explanation:
        "HTTPS encapsulates HTTP application traffic inside a Transport Layer Security (TLS) cryptographic session (currently TLS 1.3), providing confidentiality, integrity, and server authentication.",
    },
    {
      id: 8,
      question: "How many total IPv4 addresses are in a conventional /26 prefix?",
      options: ["16", "32", "64", "256"],
      correctIndex: 2,
      explanation:
        "A /26 prefix leaves 32 - 26 = 6 host bits. 2^6 = 64 total addresses (with 62 conventionally usable host addresses after subtracting network and broadcast).",
    },
    {
      id: 9,
      question: "What does an HTTP 403 response generally indicate?",
      options: [
        "The request was refused",
        "DNS successfully resolved the hostname",
        "The server has no IP address",
        "TLS is always broken",
      ],
      correctIndex: 0,
      explanation:
        "An HTTP 403 Forbidden status indicates the server understood the request and authenticated identity, but refuses to fulfill it because permissions or authorization policies were not met.",
    },
    {
      id: 10,
      question: "Which is a correct interpretation of a successful ping?",
      options: [
        "HTTPS is certainly working",
        "All application security controls are effective",
        "ICMP reachability succeeded for that test",
        "The hostname's certificate is valid",
      ],
      correctIndex: 2,
      explanation:
        "A successful ping only proves that ICMP Echo Request and Reply succeeded at the network layer (L3). It does NOT verify that TCP, TLS, web services, or application security controls are operational.",
    },
  ];

  const handleSelectOption = (questionId, optionIdx) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [questionId]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-[#f97316] selection:text-white">
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-orange-500/[0.04] rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-12 w-[600px] h-[600px] bg-amber-500/[0.04] rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 md:px-8">
        {/* Top Global Navigation Bar */}
        <ModuleNav
          track="cybersecurity"
          currentModuleId="networking"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor(!showAiTutor)}
          aiTutorLabel="Networking Mentor"
        />

        {/* Hero Header Card */}
        <header className="mb-8 rounded-3xl border border-[#e7e3da] bg-white/85 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200/80 bg-orange-50/90 px-3 py-1 font-mono text-[11px] font-bold text-[#ea580c] uppercase tracking-wider">
              <Network size={12} className="text-[#f97316]" />
              Course: Cybersecurity Masterclass
            </span>
            <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-[11px] font-mono font-medium text-stone-600">
              Module 2 of 24 · Core Systems Foundation
            </span>
            <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-[11px] font-mono font-medium text-stone-600">
              MIT 6.829 / Stanford CS144 / UC Berkeley CS168 / CMU 15-441
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono font-bold text-emerald-700">
              Beginner → Intermediate · 12–15 Hours
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#18181b]">
            Networking Fundamentals, TCP/IP, DNS, HTTP/HTTPS, and Network Protocols
          </h1>
          <p className="mt-3 text-sm sm:text-base text-stone-600 max-w-4xl leading-relaxed">
            Master the communication mechanics of the global Internet. Trace how a browser reaches a server, analyze packet encapsulation, calculate IPv4/IPv6 subnets, inspect live traffic in Wireshark, dissect the TCP 3-way handshake, and differentiate secure TLS from vulnerable transport.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-stone-200/80">
            <div className="p-3 rounded-2xl bg-stone-50/80 border border-stone-200/70">
              <span className="font-mono text-[11px] text-stone-500 uppercase block font-semibold">Duration</span>
              <span className="text-sm font-bold text-stone-900">12–15 Hours</span>
            </div>
            <div className="p-3 rounded-2xl bg-stone-50/80 border border-stone-200/70">
              <span className="font-mono text-[11px] text-stone-500 uppercase block font-semibold">Track</span>
              <span className="text-sm font-bold text-stone-900">Networking Foundations</span>
            </div>
            <div className="p-3 rounded-2xl bg-stone-50/80 border border-stone-200/70">
              <span className="font-mono text-[11px] text-stone-500 uppercase block font-semibold">Curriculum</span>
              <span className="text-sm font-bold text-stone-900">MIT / Stanford / Kurose</span>
            </div>
            <div className="p-3 rounded-2xl bg-stone-50/80 border border-stone-200/70">
              <span className="font-mono text-[11px] text-stone-500 uppercase block font-semibold">Interactive Labs</span>
              <span className="text-sm font-bold text-stone-900">Subnet, Wireshark, CLI</span>
            </div>
          </div>
        </header>

        {/* Tab Navigation Controls */}
        <div className="mb-8 flex flex-wrap items-center gap-2 border-b border-stone-200 pb-3">
          {[
            { id: "theory", label: "Curriculum & Deep Theory (Parts A–M)", icon: BookOpen },
            { id: "subnet-lab", label: "CIDR & Subnet Calculator (Lab 2)", icon: Split },
            { id: "packet-inspector", label: "Interactive Wireshark Dissector (Lab 4)", icon: Activity },
            { id: "troubleshooter", label: "CLI Troubleshooting Challenge (Lab 6)", icon: Terminal },
            { id: "quiz", label: "Assessment & Quiz (10 Questions)", icon: Award }
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
                <Icon size={14} className={isActive ? "text-[#f97316]" : "text-stone-400"} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* TAB 1: CURRICULUM & DEEP THEORY (PARTS A THROUGH M)                 */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "theory" && (
          <div className="space-y-8">
            {/* Central Concept: What happens when you open a website? */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 font-mono text-[11px] font-bold text-[#ea580c]">
                  <Sparkles size={13} />
                  The Central Diagnostic Concept
                </span>
                <span className="text-xs text-stone-500 font-mono">End-to-End Packet Traversal</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                What Truly Happens When You Open a Website? (https://example.com)
              </h2>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                Visiting a website is not a single atomic operation. It is an orchestration of protocol handshakes, distributed lookups, encapsulation, and cryptographic verifications:
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-5 text-center">
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-3.5">
                  <div className="text-xs font-black text-[#ea580c] font-mono">1. DNS Resolution</div>
                  <div className="text-xs font-bold text-[#18181b] mt-1">Domain to IP</div>
                  <p className="text-[11px] text-stone-500 mt-1 leading-snug">Client stub queries resolver to map FQDN to an IPv4/IPv6 address.</p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-3.5">
                  <div className="text-xs font-black text-[#ea580c] font-mono">2. Network Delivery</div>
                  <div className="text-xs font-bold text-[#18181b] mt-1">IP Routing & ARP</div>
                  <p className="text-[11px] text-stone-500 mt-1 leading-snug">Packets routed via default gateway across Autonomous Systems.</p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-3.5">
                  <div className="text-xs font-black text-[#ea580c] font-mono">3. Transport Setup</div>
                  <div className="text-xs font-bold text-[#18181b] mt-1">TCP Handshake</div>
                  <p className="text-[11px] text-stone-500 mt-1 leading-snug">SYN, SYN-ACK, ACK exchange establishes reliable stream state.</p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-3.5">
                  <div className="text-xs font-black text-[#ea580c] font-mono">4. Cryptographic TLS</div>
                  <div className="text-xs font-bold text-[#18181b] mt-1">TLS 1.3 Handshake</div>
                  <p className="text-[11px] text-stone-500 mt-1 leading-snug">Server identity verified via X.509 cert; session keys derived.</p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-3.5">
                  <div className="text-xs font-black text-[#ea580c] font-mono">5. Application HTTP</div>
                  <div className="text-xs font-bold text-[#18181b] mt-1">HTTP Request/Res</div>
                  <p className="text-[11px] text-stone-500 mt-1 leading-snug">Encrypted GET request; server returns status 200 and HTML payload.</p>
                </div>
              </div>
            </section>

            {/* PART A: Computer Networking Fundamentals */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Network size={14} />
                <span>Part A — Computer Networking Fundamentals</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Lesson 1.1–1.4: Network Topologies, Components & Metrics
              </h2>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                A <strong>computer network</strong> connects nodes (endpoints, switches, routers) via physical or wireless communication channels to exchange data according to shared <strong>protocols</strong>.
              </p>

              {/* Network Types & Topologies */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-xs">
                <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                  <span className="font-bold text-[#ea580c] block mb-1">LAN vs. WAN vs. WLAN</span>
                  <p className="text-stone-600 leading-relaxed">
                    <strong>LAN:</strong> Local Area Network in single room or building (Ethernet/Wi-Fi).<br />
                    <strong>WAN:</strong> Wide Area Network spanning cities/continents.<br />
                    <strong>VPN:</strong> Encrypted logical tunnel traversing untrusted public networks.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                  <span className="font-bold text-[#ea580c] block mb-1">Star vs. Mesh Topologies</span>
                  <p className="text-stone-600 leading-relaxed">
                    <strong>Star:</strong> Central switch connecting all devices (predominant modern LAN).<br />
                    <strong>Mesh:</strong> Interconnected nodes offering redundant failover paths at higher complexity.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                  <span className="font-bold text-[#ea580c] block mb-1">Cybersecurity & Topology</span>
                  <p className="text-stone-600 leading-relaxed">
                    Topology dictates adversary lateral movement paths. Segmenting databases from internet-facing web servers limits compromise radius.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                  <span className="font-bold text-[#ea580c] block mb-1">Packet Switching Principle</span>
                  <p className="text-stone-600 leading-relaxed">
                    Data is chopped into independent packets routed dynamically across statistical multiplexing links, rather than reserving dedicated circuit lines.
                  </p>
                </div>
              </div>

              {/* Bandwidth vs Throughput vs Latency Table */}
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-100/70 text-stone-700 font-bold">
                      <th className="p-3">Metric</th>
                      <th className="p-3">Formal Meaning</th>
                      <th className="p-3">Cybersecurity & Performance Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    <tr>
                      <td className="p-3 font-semibold text-[#18181b]">Bandwidth</td>
                      <td className="p-3 text-stone-600">Theoretical maximum transmission capacity of a link (e.g. 1 Gbps fiber)</td>
                      <td className="p-3 text-stone-600">Determines volumetric threshold required to saturate a link in a DDoS attack</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#18181b]">Throughput</td>
                      <td className="p-3 text-stone-600">Actual delivered data rate observed after protocol overhead, packet loss, and contention</td>
                      <td className="p-3 text-stone-600">Limits data exfiltration rates and live security event streaming</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#18181b]">Latency (RTT)</td>
                      <td className="p-3 text-stone-600">Time elapsed for a packet to travel round-trip between client and server</td>
                      <td className="p-3 text-stone-600">Multiplies handshake setup delays in TLS and TCP; affects interactive C2 channels</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#18181b]">Jitter</td>
                      <td className="p-3 text-stone-600">Statistical variance in packet arrival latency</td>
                      <td className="p-3 text-stone-600">Degrades real-time audio/video streams (VoIP) and reveals queuing congestion</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#18181b]">Packet Loss</td>
                      <td className="p-3 text-stone-600">Percentage of packets dropped in transit due to buffer overflow or link noise</td>
                      <td className="p-3 text-stone-600">Triggers TCP retransmission storms and throttles congestion windows</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* PART B: OSI and TCP/IP Models & Encapsulation */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Layers size={14} />
                <span>Part B — OSI 7-Layer vs. TCP/IP Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Lesson 2.1–2.4: Layering, Encapsulation & Packet Construction
              </h2>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                Networking uses layered abstraction so hardware vendors, OS kernels, and application developers can innovate independently:
              </p>

              {/* Encapsulation Diagram */}
              <div className="mt-6 rounded-2xl bg-stone-900 p-5 font-mono text-xs text-stone-200 overflow-x-auto">
                <div className="text-orange-400 font-bold mb-3">// PROTOCOL ENCAPSULATION DESCENDING THE STACK</div>
                <pre className="text-stone-300 leading-relaxed">
{` [Application Layer]     [HTTP Payload / GET /index.html]
                                         |
                                         v  (Add TCP Header: Src Port 54120, Dst Port 443, Seq #)
 [Transport Layer]       [TCP Header | HTTP Payload]  ==> "Segment"
                                         |
                                         v  (Add IP Header: Src IP 192.168.1.25, Dst IP 104.21.58.192)
 [Network Layer]         [IP Header | TCP Header | HTTP Payload]  ==> "Packet"
                                         |
                                         v  (Add Ethernet Header: Src MAC, Dst MAC, Type 0x0800 & FCS Trailer)
 [Data Link Layer]       [Eth Header | IP Header | TCP Header | HTTP Payload | FCS]  ==> "Frame"
                                         |
                                         v  (Transmit on Physical Wire / Radio Frequency)
 [Physical Layer]        010111001010010101010101010101100010101001  ==> "Bits"`}
                </pre>
              </div>

              <div className="mt-6 rounded-2xl border border-orange-200/80 bg-orange-50/50 p-4">
                <h4 className="text-xs font-bold text-orange-950 flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-[#ea580c]" />
                  <span>Why Encapsulation Matters to Defenders</span>
                </h4>
                <p className="mt-1 text-xs text-stone-700 leading-relaxed">
                  Firewalls inspect Layer 3 and Layer 4 headers (IPs, Ports, TCP flags). Web Application Firewalls (WAFs) and proxies must inspect decapsulated Layer 7 payloads (HTTP URIs, JSON bodies). Furthermore, when traffic is encrypted via TLS, passive network eavesdroppers can see Layer 2, Layer 3, and Layer 4 headers, but the Layer 7 data remains entirely ciphertext.
                </p>
              </div>
            </section>

            {/* PART C: Addressing, Switching, and Routing */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Compass size={14} />
                <span>Part C — Addressing, Switching & Routing</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Lesson 3.1–3.7: MAC, IPv4 Subnetting, IPv6, ARP & NAT
              </h2>

              <div className="mt-4 grid gap-4 sm:grid-cols-2 text-xs">
                <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                  <span className="font-bold text-[#18181b] block mb-1">MAC Address (L2) vs. IP Address (L3)</span>
                  <p className="text-stone-600 leading-relaxed">
                    A MAC address (48-bit hex e.g. <code className="bg-white px-1 py-0.5 rounded border">00:11:22:33:44:55</code>) identifies an interface on the local wire. Routers rewrite the source and destination MAC addresses at every hop! IP addresses (32-bit IPv4 / 128-bit IPv6) provide end-to-end logical addressing and remain unchanged across intermediate routers (unless NAT is used).
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                  <span className="font-bold text-[#18181b] block mb-1">RFC 1918 Private IPv4 Ranges</span>
                  <div className="text-stone-600 space-y-1 mt-1 font-mono text-[11px]">
                    <p>• 10.0.0.0/8 (10.0.0.0 - 10.255.255.255) - Enterprise</p>
                    <p>• 172.16.0.0/12 (172.16.0.0 - 172.31.255.255) - Cloud VPCs</p>
                    <p>• 192.168.0.0/16 (192.168.0.0 - 192.168.255.255) - SOHO / Home</p>
                    <p>• 127.0.0.0/8 - Loopback | 169.254.0.0/16 - APIPA Link-Local</p>
                  </div>
                </div>
              </div>

              {/* Subnetting Worked Example */}
              <div className="mt-6 rounded-2xl border border-stone-200/80 bg-stone-50/70 p-5">
                <h3 className="text-sm font-bold text-[#18181b] flex items-center gap-2">
                  <Binary size={16} className="text-[#ea580c]" />
                  <span>Subnetting Worked Example: /26 Subnet Division</span>
                </h3>
                <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                  Consider dividing <code className="font-mono text-stone-800">192.168.10.0/24</code> into four equal /26 subnets. A /26 prefix has 26 network bits and 6 host bits (<code className="font-mono">32 - 26 = 6</code>). Subnet mask: <code className="font-mono">255.255.255.192</code>. Each subnet contains 2^6 = 64 total IP addresses:
                </p>

                <div className="mt-3 overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 bg-white text-stone-700 font-bold">
                        <th className="p-2">Subnet Name</th>
                        <th className="p-2">Network Address</th>
                        <th className="p-2">Usable Host Range (62 Hosts)</th>
                        <th className="p-2">Broadcast Address</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 font-mono text-[11px]">
                      <tr>
                        <td className="p-2 font-sans font-semibold">Subnet A</td>
                        <td className="p-2 text-[#ea580c]">192.168.10.0</td>
                        <td className="p-2">192.168.10.1 - 192.168.10.62</td>
                        <td className="p-2 text-stone-500">192.168.10.63</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-sans font-semibold">Subnet B</td>
                        <td className="p-2 text-[#ea580c]">192.168.10.64</td>
                        <td className="p-2">192.168.10.65 - 192.168.10.126</td>
                        <td className="p-2 text-stone-500">192.168.10.127</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-sans font-semibold">Subnet C</td>
                        <td className="p-2 text-[#ea580c]">192.168.10.128</td>
                        <td className="p-2">192.168.10.129 - 192.168.10.190</td>
                        <td className="p-2 text-stone-500">192.168.10.191</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-sans font-semibold">Subnet D</td>
                        <td className="p-2 text-[#ea580c]">192.168.10.192</td>
                        <td className="p-2">192.168.10.193 - 192.168.10.254</td>
                        <td className="p-2 text-stone-500">192.168.10.255</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Crucial Misconception: NAT is NOT a Firewall */}
              <div className="mt-6 rounded-2xl border border-red-200 bg-red-50/50 p-4 text-xs text-stone-700 leading-relaxed">
                <span className="font-bold text-red-900 block mb-1">Vital Architectural Principle: NAT is NOT a Security Boundary</span>
                <p>
                  Network Address Translation (NAT) modifies IP addresses in headers to solve IPv4 address exhaustion. While private IPs cannot be reached directly without stateful mapping, NAT does NOT inspect payloads, filter malicious inbound responses, or enforce authorization. Actual defense requires firewall access rules, identity validation, and endpoint hardening.
                </p>
              </div>
            </section>

            {/* PART D: Transport Layer (TCP, UDP, QUIC) */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Workflow size={14} />
                <span>Part D — Transport Protocols: TCP, UDP & QUIC</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Lesson 4.1–4.5: Reliable Streams, Sockets & Modern HTTP/3
              </h2>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                Transport protocols demultiplex incoming packets to specific application processes using 16-bit <strong>port numbers</strong> (0 to 65535):
              </p>

              {/* TCP 3-Way Handshake Visual */}
              <div className="mt-6 rounded-2xl border border-stone-200 bg-stone-50/70 p-5">
                <h3 className="text-sm font-bold text-[#18181b] mb-3">
                  The TCP Three-Way Handshake (RFC 9293)
                </h3>
                <div className="grid gap-3 sm:grid-cols-3 text-xs">
                  <div className="p-3.5 rounded-xl border border-blue-200 bg-blue-50/60">
                    <div className="font-mono font-bold text-blue-900">Step 1: SYN</div>
                    <div className="font-semibold text-stone-800 mt-1">Client → Server</div>
                    <p className="text-stone-600 text-[11px] mt-1 leading-snug">
                      Client selects random Initial Sequence Number (ISN_c) and sets SYN flag (Synchronize).
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl border border-amber-200 bg-amber-50/60">
                    <div className="font-mono font-bold text-amber-900">Step 2: SYN-ACK</div>
                    <div className="font-semibold text-stone-800 mt-1">Server → Client</div>
                    <p className="text-stone-600 text-[11px] mt-1 leading-snug">
                      Server acknowledges client ISN (Ack = ISN_c + 1) and sets its own ISN_s.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/60">
                    <div className="font-mono font-bold text-emerald-900">Step 3: ACK</div>
                    <div className="font-semibold text-stone-800 mt-1">Client → Server</div>
                    <p className="text-stone-600 text-[11px] mt-1 leading-snug">
                      Client confirms server ISN (Ack = ISN_s + 1). Socket enters ESTABLISHED state.
                    </p>
                  </div>
                </div>
              </div>

              {/* TCP vs UDP vs QUIC */}
              <div className="mt-6 grid gap-4 sm:grid-cols-3 text-xs">
                <div className="rounded-2xl border border-stone-200 bg-white p-4">
                  <span className="font-bold text-[#18181b] block mb-1">TCP (Transmission Control Protocol)</span>
                  <p className="text-stone-600 leading-relaxed">
                    Connection-oriented, reliable in-order byte stream. Features sliding window flow control and AIMD congestion control. Used by SSH (22), traditional HTTPS (443), and databases.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-4">
                  <span className="font-bold text-[#18181b] block mb-1">UDP (User Datagram Protocol)</span>
                  <p className="text-stone-600 leading-relaxed">
                    Connectionless, stateless, message-preserving. Zero retransmissions or packet ordering. Minimal header overhead (8 bytes). Used by DNS (53), DHCP (67/68), and NTP (123).
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-4">
                  <span className="font-bold text-[#ea580c] block mb-1">QUIC & HTTP/3</span>
                  <p className="text-stone-600 leading-relaxed">
                    Runs over UDP with built-in TLS 1.3 encryption and congestion control. Eliminates Head-of-Line (HoL) blocking across independent streams, drastically accelerating mobile web access.
                  </p>
                </div>
              </div>
            </section>

            {/* PART E: Domain Name System (DNS) */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Globe size={14} />
                <span>Part E — Domain Name System (DNS) Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Lesson 5.1–5.5: Hierarchy, Record Types, TTL & Security
              </h2>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                DNS translates human-readable hostnames into network IP addresses. <strong>Critical security distinction: DNS only discovers where a service lives; it does NOT host the application or guarantee that the target is secure!</strong>
              </p>

              <div className="mt-6 grid gap-2 sm:grid-cols-4 text-xs">
                {[
                  { rec: "A", val: "IPv4 Address", ex: "learn.example.com -> 104.21.58.192" },
                  { rec: "AAAA", val: "IPv6 Address", ex: "learn.example.com -> 2606:4700::6815:3ac0" },
                  { rec: "CNAME", val: "Canonical Name Alias", ex: "www.example.com -> cdn.cloudflare.net" },
                  { rec: "MX", val: "Mail Exchange", ex: "example.com -> mail.protection.outlook.com" },
                  { rec: "TXT", val: "Arbitrary Text & Auth", ex: "v=spf1 include:_spf.google.com ~all" },
                  { rec: "NS", val: "Authoritative Nameservers", ex: "ns1.cloudflare.com, ns2.cloudflare.com" },
                  { rec: "PTR", val: "Reverse IP to Name", ex: "192.58.21.104.in-addr.arpa -> host.com" },
                  { rec: "CAA", val: "Cert Authority Auth", ex: "issue 'letsencrypt.org' (Prevents unauthorized certs)" },
                ].map((r, i) => (
                  <div key={i} className="rounded-xl border border-stone-200 bg-white p-3">
                    <div className="font-mono font-bold text-[#ea580c]">{r.rec} Record</div>
                    <div className="font-semibold text-stone-800 text-[11px] mt-0.5">{r.val}</div>
                    <div className="text-[10px] text-stone-500 font-mono mt-1 truncate">{r.ex}</div>
                  </div>
                ))}
              </div>

              {/* DNS Security: Spoofing, DNSSEC & DoH */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2 text-xs">
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                  <span className="font-bold text-[#18181b] block mb-1">DNS Cache Poisoning & Kaminsky Attacks</span>
                  <p className="text-stone-600 leading-relaxed">
                    Because legacy DNS over UDP lacks cryptographic signatures, an attacker can flood a recursive resolver with forged responses. If accepted, the resolver redirects all legitimate users to an attacker-controlled server.
                  </p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                  <span className="font-bold text-emerald-800 block mb-1">DNSSEC & Encrypted DNS (DoH / DoT)</span>
                  <p className="text-stone-600 leading-relaxed">
                    <strong>DNSSEC:</strong> Uses public-key cryptography to digitally sign DNS records, ensuring integrity and authenticity.<br />
                    <strong>DoH / DoT:</strong> Encrypts the query link between client and resolver, preventing local ISP eavesdropping.
                  </p>
                </div>
              </div>
            </section>

            {/* PART F: HTTP and URLs */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <FileCode size={14} />
                <span>Part F — HTTP Request/Response Architecture & URL Anatomy</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Lesson 6.1–6.7: Methods, Status Codes, Headers & Cookies
              </h2>

              {/* URL Breakdown */}
              <div className="mt-4 rounded-2xl bg-stone-900 p-4 font-mono text-xs text-stone-200 overflow-x-auto">
                <div className="text-orange-400 font-bold mb-2">// URL ANATOMY & SECURITY RISK POINTS</div>
                <p className="text-stone-300">
                  <span className="text-emerald-400 font-bold">https</span>://
                  <span className="text-blue-400 font-bold">learn.example.com</span>:
                  <span className="text-amber-400 font-bold">443</span>
                  <span className="text-purple-400 font-bold">/courses/networking</span>?
                  <span className="text-red-400 font-bold">session_token=xyz987</span>#
                  <span className="text-stone-400">lesson-1</span>
                </p>
                <div className="mt-3 grid gap-2 sm:grid-cols-3 text-[11px] text-stone-400 font-sans border-t border-stone-800 pt-2">
                  <div><strong className="text-emerald-400">Scheme:</strong> https (Enforces TLS encryption)</div>
                  <div><strong className="text-blue-400">Host:</strong> learn.example.com (Destination FQDN)</div>
                  <div><strong className="text-amber-400">Port:</strong> 443 (Default HTTPS port)</div>
                  <div><strong className="text-purple-400">Path:</strong> /courses/networking (Resource route)</div>
                  <div className="col-span-2 text-red-300">
                    <strong className="text-red-400">Security Warning:</strong> Query parameters (?session_token) leak in browser history, proxy access logs, and HTTP Referer headers! Never pass secrets in URLs.
                  </div>
                </div>
              </div>

              {/* HTTP Status Code Families */}
              <div className="mt-6 grid gap-2 sm:grid-cols-5 text-center text-xs">
                <div className="rounded-xl border border-stone-200 bg-stone-50 p-3">
                  <span className="font-bold text-stone-500 font-mono">1xx</span>
                  <div className="font-bold text-stone-900 mt-0.5">Informational</div>
                  <p className="text-[10px] text-stone-500 mt-1">100 Continue, 101 Switching</p>
                </div>
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-3">
                  <span className="font-bold text-emerald-700 font-mono">2xx</span>
                  <div className="font-bold text-emerald-950 mt-0.5">Success</div>
                  <p className="text-[10px] text-emerald-800 mt-1">200 OK, 201 Created, 204 No Content</p>
                </div>
                <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-3">
                  <span className="font-bold text-blue-700 font-mono">3xx</span>
                  <div className="font-bold text-blue-950 mt-0.5">Redirection</div>
                  <p className="text-[10px] text-blue-800 mt-1">301 Moved, 302 Found, 304 Not Mod</p>
                </div>
                <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-3">
                  <span className="font-bold text-amber-700 font-mono">4xx</span>
                  <div className="font-bold text-amber-950 mt-0.5">Client Error</div>
                  <p className="text-[10px] text-amber-800 mt-1">400 Bad, 401 Unauth, 403 Forbidden</p>
                </div>
                <div className="rounded-xl border border-red-200 bg-red-50/70 p-3">
                  <span className="font-bold text-red-700 font-mono">5xx</span>
                  <div className="font-bold text-red-950 mt-0.5">Server Error</div>
                  <p className="text-[10px] text-red-800 mt-1">500 Internal, 502 Bad GW, 503 Unavailable</p>
                </div>
              </div>

              {/* Crucial Security Headers & Cookie Flags */}
              <div className="mt-6 rounded-2xl border border-stone-200 bg-stone-50/70 p-4 text-xs space-y-2">
                <span className="font-bold text-[#18181b] block">Essential Browser Security Headers & Cookie Protection:</span>
                <div className="grid gap-3 sm:grid-cols-2 text-stone-700">
                  <div>
                    <strong>• Strict-Transport-Security (HSTS):</strong> Forces browsers to connect exclusively via HTTPS for a defined duration (e.g. 1 year).
                  </div>
                  <div>
                    <strong>• Content-Security-Policy (CSP):</strong> Prevents Cross-Site Scripting (XSS) by restricting which domains can execute scripts or load styles.
                  </div>
                  <div>
                    <strong>• Set-Cookie: HttpOnly:</strong> Disallows JavaScript access (e.g. <code className="bg-white px-1">document.cookie</code>), defending session tokens from XSS theft.
                  </div>
                  <div>
                    <strong>• Set-Cookie: Secure & SameSite=Lax/Strict:</strong> Ensures cookies are only sent over TLS and blocks Cross-Site Request Forgery (CSRF).
                  </div>
                </div>
              </div>
            </section>

            {/* PART G: HTTPS, TLS 1.3, and Digital Certificates */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Lock size={14} />
                <span>Part G — HTTPS, TLS 1.3 & Digital Certificates</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Lesson 7.1–7.5: Transport Security & What HTTPS Does NOT Prove
              </h2>

              <div className="mt-4 grid gap-4 sm:grid-cols-2 text-xs">
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-4">
                  <span className="font-bold text-emerald-900 block mb-1">What TLS 1.3 Guarantees:</span>
                  <ul className="list-disc pl-4 space-y-1 text-emerald-950">
                    <li>Confidentiality: Wire data is encrypted with AES-GCM or ChaCha20-Poly1305.</li>
                    <li>Integrity: Any bit tampering on the wire is detected immediately.</li>
                    <li>Server Authentication: Cryptographic proof that the server owns the private key matching the public certificate.</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-red-200 bg-red-50/50 p-4">
                  <span className="font-bold text-red-900 block mb-1">What HTTPS Does NOT Guarantee:</span>
                  <ul className="list-disc pl-4 space-y-1 text-red-950">
                    <li>Does NOT mean the website is legitimate or safe (malicious phishing sites use free Let's Encrypt certs!).</li>
                    <li>Does NOT prevent SQL injection, broken access control, or malicious business logic.</li>
                    <li>Does NOT protect data at rest on the backend server or inside a database.</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 2: CIDR & SUBNET CALCULATOR (LAB 2)                            */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "subnet-lab" && (
          <div className="space-y-8">
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                <Split size={14} />
                <span>Lab 2: IPv4 Addressing & Subnetting Calculator</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mb-4">
                Interactive CIDR Subnet Division Tool
              </h2>

              <div className="grid gap-6 lg:grid-cols-3">
                <div className="space-y-4 lg:col-span-1 text-xs">
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">Base Network Address:</label>
                    <input
                      type="text"
                      value={cidrBaseIp}
                      onChange={(e) => setCidrBaseIp(e.target.value)}
                      className="w-full rounded-xl border border-stone-300 bg-white p-2.5 font-mono text-stone-800"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between font-bold text-stone-700 mb-1">
                      <span>Prefix Length (CIDR):</span>
                      <span className="text-[#ea580c]">/{subnetCalculations.prefix}</span>
                    </div>
                    <input
                      type="range"
                      min="16"
                      max="30"
                      value={cidrPrefix}
                      onChange={(e) => setCidrPrefix(parseInt(e.target.value))}
                      className="w-full accent-[#ea580c]"
                    />
                    <div className="flex justify-between text-[10px] text-stone-400 mt-0.5 font-mono">
                      <span>/16 (65k hosts)</span>
                      <span>/24 (254 hosts)</span>
                      <span>/30 (2 hosts)</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-stone-500">Subnet Mask:</span>
                      <span className="font-mono font-bold text-stone-900">{subnetCalculations.maskStr}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Total IP Block:</span>
                      <span className="font-mono font-bold text-stone-900">{subnetCalculations.totalAddresses}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Usable Hosts:</span>
                      <span className="font-mono font-bold text-[#ea580c]">{subnetCalculations.usableHosts}</span>
                    </div>
                  </div>
                </div>

                {/* Subnet Table Output */}
                <div className="lg:col-span-2 space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 font-mono">
                    Subnet Segmentation Schedule (Dividing 192.168.20.0/24 into /26 Enclaves)
                  </h3>
                  <div className="space-y-2">
                    {subnetCalculations.subnets.map((sub, idx) => (
                      <div key={idx} className="p-3.5 rounded-2xl border border-stone-200 bg-white shadow-2xs">
                        <div className="flex items-center justify-between font-bold text-xs">
                          <span className="text-[#18181b]">{sub.name}</span>
                          <span className="font-mono px-2 py-0.5 rounded-md bg-orange-100 text-[#ea580c]">
                            {sub.cidr}
                          </span>
                        </div>
                        <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono text-stone-600">
                          <div><span className="text-stone-400 block text-[9px] uppercase font-sans">Network</span>{sub.net}</div>
                          <div><span className="text-stone-400 block text-[9px] uppercase font-sans">First Usable</span>{sub.first}</div>
                          <div><span className="text-stone-400 block text-[9px] uppercase font-sans">Last Usable</span>{sub.last}</div>
                          <div><span className="text-stone-400 block text-[9px] uppercase font-sans">Broadcast</span>{sub.bcast}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 3: WIRESHARK PACKET DISSECTOR SIMULATOR (LAB 4)                */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "packet-inspector" && (
          <div className="space-y-8">
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                    <Activity size={14} />
                    <span>Lab 4: Wireshark Packet Analysis Simulator</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                    Live Protocol Dissector & Header Decapsulation
                  </h2>
                </div>

                {/* Display Filters */}
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="text-stone-500 font-semibold font-mono text-[11px]">Filter:</span>
                  {["all", "dns", "tcp", "tls", "http"].map((filt) => (
                    <button
                      key={filt}
                      onClick={() => setActiveFilter(filt)}
                      className={`px-3 py-1 rounded-lg font-mono text-[11px] font-bold transition-all cursor-pointer uppercase ${
                        activeFilter === filt
                          ? "bg-[#18181b] text-white"
                          : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-100"
                      }`}
                    >
                      {filt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Packet List Grid */}
              <div className="rounded-2xl border border-stone-200 overflow-hidden mb-6">
                <div className="overflow-x-auto max-h-[300px]">
                  <table className="w-full text-left font-mono text-[11px] border-collapse">
                    <thead className="bg-stone-100/90 text-stone-700 sticky top-0 border-b border-stone-200">
                      <tr>
                        <th className="p-2 w-12 text-center">No.</th>
                        <th className="p-2 w-24">Time</th>
                        <th className="p-2 w-32">Source</th>
                        <th className="p-2 w-32">Destination</th>
                        <th className="p-2 w-20">Protocol</th>
                        <th className="p-2 w-16 text-center">Length</th>
                        <th className="p-2">Info</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 bg-white">
                      {filteredPackets.map((pkt) => {
                        const isSelected = selectedPacket.id === pkt.id;
                        return (
                          <tr
                            key={pkt.id}
                            onClick={() => setSelectedPacket(pkt)}
                            className={`cursor-pointer transition-all ${
                              isSelected
                                ? "bg-orange-100/80 font-semibold text-[#18181b]"
                                : "hover:bg-stone-50 text-stone-700"
                            }`}
                          >
                            <td className="p-2 text-center">{pkt.id}</td>
                            <td className="p-2 text-stone-500">{pkt.time}</td>
                            <td className="p-2">{pkt.src}</td>
                            <td className="p-2">{pkt.dst}</td>
                            <td className="p-2 font-bold text-[#ea580c]">{pkt.proto}</td>
                            <td className="p-2 text-center">{pkt.len}</td>
                            <td className="p-2 truncate max-w-xs">{pkt.info}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Packet Dissection Tree */}
              <div className="rounded-2xl bg-stone-900 p-5 font-mono text-xs text-stone-200 space-y-3">
                <div className="flex items-center justify-between border-b border-stone-800 pb-2 text-[11px] text-stone-400">
                  <span className="font-bold text-orange-400">
                    DISSECTED FRAME #{selectedPacket.id} ({selectedPacket.proto})
                  </span>
                  <span>Length: {selectedPacket.len} bytes</span>
                </div>

                <div className="space-y-2 text-[11px] leading-relaxed">
                  <div className="text-stone-400">
                    <strong className="text-blue-400">Layer 2 (Ethernet II):</strong> {selectedPacket.details.ethernet}
                  </div>
                  <div className="text-stone-400">
                    <strong className="text-emerald-400">Layer 3 (Internet Protocol):</strong> {selectedPacket.details.ip}
                  </div>
                  <div className="text-stone-400">
                    <strong className="text-amber-400">Layer 4 (Transport):</strong> {selectedPacket.details.transport}
                  </div>
                  <div className="text-stone-400">
                    <strong className="text-purple-400">Layer 7 (Application Payload):</strong> {selectedPacket.details.app}
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 4: CLI TROUBLESHOOTING CHALLENGE (LAB 6)                       */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "troubleshooter" && (
          <div className="space-y-8">
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                <Terminal size={14} />
                <span>Lab 6: Network Troubleshooting Challenge</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mb-4">
                Structured Evidence-Based Diagnostic Simulator
              </h2>

              {/* Scenario Selector */}
              <div className="flex gap-2 border-b border-stone-200 pb-3 mb-6 overflow-x-auto scrollbar-none">
                {troubleshootingScenarios.map((scen) => (
                  <button
                    key={scen.id}
                    onClick={() => setActiveTroubleshoot(scen)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                      activeTroubleshoot.id === scen.id
                        ? "bg-[#18181b] text-white"
                        : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-50"
                    }`}
                  >
                    {scen.title}
                  </button>
                ))}
              </div>

              {/* Terminal Output */}
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl bg-stone-900 p-4 text-stone-200 font-mono text-xs">
                  <div className="flex items-center justify-between text-stone-400 pb-2 border-b border-stone-800 mb-2">
                    <span className="font-bold text-orange-400">DIAGNOSTIC TERMINAL LOG</span>
                    <span>PowerShell / Bash</span>
                  </div>
                  <pre className="whitespace-pre-wrap leading-relaxed text-stone-300">
                    {activeTroubleshoot.cliOutput}
                  </pre>
                </div>

                {/* Analysis & Fix Card */}
                <div className="space-y-4">
                  <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-4 text-xs text-amber-950">
                    <span className="font-bold block mb-1">Root Cause Forensic Analysis:</span>
                    <p className="leading-relaxed">{activeTroubleshoot.analysis}</p>
                  </div>

                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4 text-xs text-emerald-950">
                    <span className="font-bold block mb-1">Verified Corrective Remediation:</span>
                    <p className="leading-relaxed">{activeTroubleshoot.fix}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 5: ASSESSMENT & QUIZ (10 QUESTIONS)                            */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "quiz" && (
          <div className="space-y-8">
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                    <Award size={14} />
                    <span>Part K — Module 2 Assessment Checkpoint</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                    Networking Fundamentals Verification (10 Questions)
                  </h2>
                </div>

                {quizSubmitted && (
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-stone-600">Your Score:</span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-black ${
                        calculateScore() >= 8
                          ? "bg-emerald-600 text-white"
                          : calculateScore() >= 6
                          ? "bg-amber-600 text-white"
                          : "bg-red-600 text-white"
                      }`}
                    >
                      {calculateScore()} / 10 ({((calculateScore() / 10) * 100).toFixed(0)}%)
                    </span>
                  </div>
                )}
              </div>

              {/* Questions List */}
              <div className="space-y-6">
                {quizQuestions.map((q) => {
                  const userAnswer = quizAnswers[q.id];

                  return (
                    <div
                      key={q.id}
                      className={`p-5 rounded-2xl border transition-all ${
                        quizSubmitted
                          ? userAnswer === q.correctIndex
                            ? "border-emerald-200 bg-emerald-50/40"
                            : "border-red-200 bg-red-50/40"
                          : "border-stone-200 bg-stone-50/60"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-xs sm:text-sm font-bold text-[#18181b] leading-snug">
                          {q.id}. {q.question}
                        </h3>
                        {quizSubmitted && (
                          <span className="shrink-0 mt-0.5">
                            {userAnswer === q.correctIndex ? (
                              <CheckCircle2 size={16} className="text-emerald-600" />
                            ) : (
                              <XCircle size={16} className="text-red-600" />
                            )}
                          </span>
                        )}
                      </div>

                      {/* Options */}
                      <div className="mt-3 space-y-2">
                        {q.options.map((opt, optIdx) => {
                          let optClasses =
                            "w-full text-left p-3 rounded-xl border text-xs font-medium transition cursor-pointer flex items-center justify-between ";

                          if (quizSubmitted) {
                            if (optIdx === q.correctIndex) {
                              optClasses += "border-emerald-500 bg-emerald-100 text-emerald-950 font-bold";
                            } else if (userAnswer === optIdx) {
                              optClasses += "border-red-500 bg-red-100 text-red-950 line-through";
                            } else {
                              optClasses += "border-stone-200 bg-white/70 text-stone-500";
                            }
                          } else {
                            if (userAnswer === optIdx) {
                              optClasses += "border-[#ea580c] bg-orange-100 text-[#ea580c] font-bold";
                            } else {
                              optClasses += "border-stone-200 bg-white hover:border-stone-300 text-stone-700";
                            }
                          }

                          return (
                            <button
                              key={optIdx}
                              disabled={quizSubmitted}
                              onClick={() => handleSelectOption(q.id, optIdx)}
                              className={optClasses}
                            >
                              <span>{opt}</span>
                              {quizSubmitted && optIdx === q.correctIndex && (
                                <span className="text-[10px] font-bold text-emerald-700 uppercase ml-2">Correct</span>
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Explanation */}
                      {quizSubmitted && (
                        <div className="mt-3 pt-3 border-t border-stone-200/80 text-xs text-stone-700 leading-relaxed bg-white/60 p-3 rounded-xl">
                          <strong className="text-stone-900">Academic Explanation:</strong> {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Submit & Retake */}
              <div className="mt-6 flex items-center justify-between border-t border-stone-200 pt-4">
                <div className="text-xs text-stone-500">
                  {Object.keys(quizAnswers).length} of {quizQuestions.length} answered
                </div>

                {!quizSubmitted ? (
                  <button
                    onClick={() => setQuizSubmitted(true)}
                    disabled={Object.keys(quizAnswers).length === 0}
                    className="px-6 py-2.5 rounded-xl bg-[#ea580c] text-white font-bold text-xs hover:bg-[#c2410c] transition cursor-pointer disabled:opacity-50"
                  >
                    Submit Assessment
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setQuizSubmitted(false);
                      setQuizAnswers({});
                    }}
                    className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-stone-300 bg-white text-xs font-bold text-stone-700 hover:border-orange-400 hover:text-[#ea580c] transition cursor-pointer"
                  >
                    <RotateCcw size={14} />
                    <span>Retake Quiz</span>
                  </button>
                )}
              </div>
            </section>
          </div>
        )}

        {/* Next Module Navigation Footer */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[#e7e3da] pt-6">
          <button
            onClick={() => navigate("/learning/cybersecurity")}
            className="flex items-center gap-2 rounded-2xl border border-stone-200 bg-white px-5 py-3 text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#f97316] transition shadow-xs cursor-pointer"
          >
            <ArrowLeft size={14} />
            <span>Previous: Module 1 (Intro & Ethical Hacking)</span>
          </button>

          <button
            onClick={() => navigate("/learning/cybersecurity/systems")}
            className="flex items-center gap-2 rounded-2xl bg-[#ea580c] px-5 py-3 text-xs font-bold text-white hover:bg-orange-600 transition shadow-xs cursor-pointer"
          >
            <span>Next: Module 3 (OS Internals & Hardening)</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
