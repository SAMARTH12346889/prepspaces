import React, { useState } from "react";
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
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* COMPUTER NETWORKS & INTERNET ENGINEERING: MODULE 2                         */
/* Network Models — OSI & TCP/IP Protocol Architecture                        */
/* MIT 6.02/6.033, Stanford CS144, UC Berkeley CS168, CMU 15-441, Princeton   */
/* -------------------------------------------------------------------------- */

export default function NetworkModels() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(2);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'wireshark-lab' | 'encapsulation' | 'dependencies' | 'troubleshooting' | 'quiz' | 'report'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* INTERACTIVE COMPONENT 1: WIRESHARK PACKET INSPECTOR                       */
  /* -------------------------------------------------------------------------- */
  const [selectedPacketIdx, setSelectedPacketIdx] = useState(0);
  const [expandedHeaders, setExpandedHeaders] = useState({
    eth: true,
    ip: true,
    tcp: true,
    app: true,
  });

  const toggleHeader = (headerKey) => {
    setExpandedHeaders((prev) => ({ ...prev, [headerKey]: !prev[headerKey] }));
  };

  const samplePackets = [
    {
      id: 1,
      name: "Packet #1: HTTPS GET over TLS 1.3 (TCP Port 443)",
      summary: "192.168.1.142:54210 → 104.21.58.192:443 [PSH, ACK] Seq=1 Ack=1 Len=517",
      eth: {
        srcMac: "52:54:00:12:34:56 (Client Laptop NIC)",
        dstMac: "00:1a:2b:3c:4d:5e (Default Gateway Router)",
        type: "0x0800 (IPv4)",
        fcs: "0x3f91ba02 (Verified Valid)",
      },
      ip: {
        version: "IPv4 (Header Length: 20 bytes)",
        tos: "0x00 (DSCP: CS0, ECN: Not-ECT)",
        totalLength: "537 bytes",
        identification: "0x4b21 (19233)",
        flags: "0x02, Don't fragment (DF)",
        ttl: "64 hops",
        protocol: "6 (TCP)",
        checksum: "0x7a82 [Correct]",
        srcIp: "192.168.1.142 (Private Client LAN)",
        dstIp: "104.21.58.192 (Cloudflare CDN Edge)",
      },
      transport: {
        proto: "TCP",
        srcPort: "54210 (Ephemeral)",
        dstPort: "443 (HTTPS / TLS)",
        seq: "1 (Relative sequence number)",
        ack: "1 (Relative acknowledgment number)",
        hdrLen: "32 bytes (Options: Timestamps)",
        flags: "PSH, ACK (Push data to application socket)",
        window: "64240 bytes (Calculated window size)",
        checksum: "0x2e11 [Verified]",
        urgentPointer: "0",
      },
      app: {
        proto: "TLSv1.3 / HTTP/2",
        type: "Application Data Protocol (Encrypted Transport Record)",
        length: "485 bytes ciphertext payload",
        details: "Protected by AES-256-GCM symmetric session keys derived via ECDHE (X25519) key exchange.",
      },
    },
    {
      id: 2,
      name: "Packet #2: DNS Query over UDP Port 53",
      summary: "192.168.1.142:51234 → 1.1.1.1:53 [DNS Query: prepspaces.com A]",
      eth: {
        srcMac: "52:54:00:12:34:56 (Client Laptop NIC)",
        dstMac: "00:1a:2b:3c:4d:5e (Default Gateway Router)",
        type: "0x0800 (IPv4)",
        fcs: "0x8821bc11 (Verified Valid)",
      },
      ip: {
        version: "IPv4 (Header Length: 20 bytes)",
        tos: "0x00 (Standard Delivery)",
        totalLength: "60 bytes",
        identification: "0x12fa (4858)",
        flags: "0x00 (Fragment Allowed)",
        ttl: "64 hops",
        protocol: "17 (UDP)",
        checksum: "0x91da [Correct]",
        srcIp: "192.168.1.142",
        dstIp: "1.1.1.1 (Cloudflare Public Resolver)",
      },
      transport: {
        proto: "UDP",
        srcPort: "51234 (Ephemeral client socket)",
        dstPort: "53 (Domain Name System)",
        length: "40 bytes (Header + Payload)",
        checksum: "0x5b3a [Verified]",
      },
      app: {
        proto: "DNS (Domain Name System)",
        type: "Standard Query (0x0000)",
        details: "Transaction ID: 0x7c41 | Questions: 1 (prepspaces.com, Type: A, Class: IN)",
      },
    },
    {
      id: 3,
      name: "Packet #3: TCP 3-Way Handshake SYN Packet",
      summary: "192.168.1.142:54210 → 104.21.58.192:443 [SYN] Seq=0 Win=65535 MSS=1460",
      eth: {
        srcMac: "52:54:00:12:34:56",
        dstMac: "00:1a:2b:3c:4d:5e",
        type: "0x0800 (IPv4)",
        fcs: "0x12ac4499",
      },
      ip: {
        version: "IPv4 (Header Length: 20 bytes)",
        tos: "0x00",
        totalLength: "60 bytes",
        identification: "0x0000",
        flags: "0x02 (DF)",
        ttl: "64 hops",
        protocol: "6 (TCP)",
        checksum: "0x44fa",
        srcIp: "192.168.1.142",
        dstIp: "104.21.58.192",
      },
      transport: {
        proto: "TCP",
        srcPort: "54210",
        dstPort: "443",
        seq: "0 (ISN Generated by OS Kernel CSPRNG)",
        ack: "0",
        hdrLen: "40 bytes (Includes TCP Options)",
        flags: "SYN (Synchronize Sequence Numbers)",
        window: "65535 (Window Scale = 8 -> 16.7MB Max)",
        options: "MSS: 1460 bytes | SACK Permitted | Timestamp | Window Scale: 8",
      },
      app: {
        proto: "None (Connection Handshake Phase)",
        type: "No Application Payload in initial SYN",
        details: "Establishes buffer allocations, initial sequence numbers, and MTU bounds before data exchange.",
      },
    },
  ];

  /* -------------------------------------------------------------------------- */
  /* INTERACTIVE COMPONENT 2: ENCAPSULATION & ROUTER FRAME REPLACEMENT         */
  /* -------------------------------------------------------------------------- */
  const [encapStep, setEncapStep] = useState(0);

  const encapStages = [
    {
      stage: 0,
      layer: "Layer 7 — Application Layer (Browser)",
      pdu: "HTTP Request Data",
      description: "User types URL. Browser formats plain ASCII/binary application data: GET /api/v1/status HTTP/1.1\\r\\nHost: api.prepspaces.com\\r\\n",
      headers: "Application Data Payload (128 bytes)",
      color: "bg-orange-100 text-[#ea580c] border-orange-300",
    },
    {
      stage: 1,
      layer: "Layer 4 — Transport Layer (TCP Encapsulation)",
      pdu: "TCP Segment",
      description: "Kernel TCP stack prepends 20-byte TCP header with Source Port 53421, Destination Port 443, Sequence Number, and Checksum.",
      headers: "[TCP Header: Ports 53421 → 443 | SEQ=1001] + [Application Payload]",
      color: "bg-blue-100 text-blue-800 border-blue-300",
    },
    {
      stage: 2,
      layer: "Layer 3 — Internet Layer (IP Encapsulation)",
      pdu: "IPv4 Packet",
      description: "Kernel IP layer prepends 20-byte IP header with Source IP 192.168.1.50, Destination IP 93.184.216.34, Protocol=6 (TCP), and TTL=64.",
      headers: "[IP Header: 192.168.1.50 → 93.184.216.34 | TTL=64] + [TCP Segment]",
      color: "bg-indigo-100 text-indigo-800 border-indigo-300",
    },
    {
      stage: 3,
      layer: "Layer 2 — Data Link Layer (Ethernet Framing)",
      pdu: "Ethernet Frame",
      description: "NIC prepends 14-byte Ethernet Header (Client MAC → Gateway Router MAC) and appends 4-byte CRC/FCS trailer for error detection.",
      headers: "[Ethernet Header: Client MAC → Gateway MAC] + [IP Packet] + [FCS Trailer]",
      color: "bg-emerald-100 text-emerald-800 border-emerald-300",
    },
    {
      stage: 4,
      layer: "Router Hop — Decapsulation & Re-framing",
      pdu: "WAN Frame (Modified)",
      description: "CRITICAL CONCEPT: Router strips incoming Ethernet header/trailer, decrements TTL to 63, inspects Destination IP, and prepends a brand new Layer 2 header matching next-hop ISP router! End-to-end IP and TCP headers remain intact.",
      headers: "[NEW ISP WAN MAC Header] + [Preserved IP Packet (TTL=63)] + [New FCS Trailer]",
      color: "bg-purple-100 text-purple-800 border-purple-300",
    },
    {
      stage: 5,
      layer: "Server Delivery — Decapsulation Stack",
      pdu: "Application Payload Received",
      description: "Server NIC verifies FCS → IP layer confirms destination IP → TCP layer verifies checksum and delivers stream to Port 443 socket listener (Nginx/Node).",
      headers: "Application Process receives original 128-byte HTTP payload.",
      color: "bg-stone-900 text-white border-stone-800",
    },
  ];

  /* -------------------------------------------------------------------------- */
  /* INTERACTIVE COMPONENT 3: PROTOCOL DEPENDENCY & FAILURE SIMULATOR          */
  /* -------------------------------------------------------------------------- */
  const [failedComponent, setFailedComponent] = useState(null);

  const dependencyNodes = [
    {
      id: "phy",
      name: "Physical Link (Ethernet / Wi-Fi)",
      layer: "L1/L2",
      fails: "All network communication halts immediately. Carrier down, 0% packets transmitted.",
    },
    {
      id: "arp",
      name: "Gateway ARP Resolution",
      layer: "L2",
      fails: "Host cannot determine Gateway MAC. Local routing stalls with 'Destination Host Unreachable'.",
    },
    {
      id: "dhcp",
      name: "DHCP IP Configuration",
      layer: "L7 (L3 bootstrap)",
      fails: "Host falls back to APIPA (169.254.x.x) or has no IP/default gateway; cannot route to public Internet.",
    },
    {
      id: "dns",
      name: "Recursive DNS Resolver (UDP 53)",
      layer: "L7",
      fails: "Host can ping 8.8.8.8, but cannot resolve 'prepspaces.com'. Web browsers throw ERR_NAME_NOT_RESOLVED.",
    },
    {
      id: "tcp",
      name: "TCP Port 443 Listener on Server",
      layer: "L4",
      fails: "DNS succeeds, ping succeeds, but server kernel sends TCP RST. Browser throws 'Connection Refused'.",
    },
    {
      id: "tls",
      name: "TLS Certificate & Cryptography",
      layer: "L5/L6",
      fails: "TCP 3-way handshake finishes, but TLS Client Hello receives Alert: Certificate Expired / Untrusted CA.",
    },
  ];

  /* -------------------------------------------------------------------------- */
  /* INTERACTIVE COMPONENT 4: ASSESSMENT & QUIZ (10 QUESTIONS)                 */
  /* -------------------------------------------------------------------------- */
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "Which of the following correctly pairs an OSI layer with its standard Protocol Data Unit (PDU)?",
      options: [
        "Network: Segment; Transport: Packet; Data Link: Bits",
        "Transport: Segment; Network: Packet; Data Link: Frame; Physical: Bits",
        "Application: Packet; Transport: Frame; Network: Datagram",
        "Data Link: Packet; Network: Frame; Physical: Segment",
      ],
      correctIndex: 1,
      explanation:
        "The standard PDU designations are: Layer 4 Transport = Segment (TCP) or Datagram (UDP); Layer 3 Network = Packet; Layer 2 Data Link = Frame; Layer 1 Physical = Bits.",
    },
    {
      id: 2,
      question: "When an IP packet traverses a router from a home Wi-Fi network to an optical fiber WAN link, what happens to the headers?",
      options: [
        "The router decrypts and encrypts the entire TCP payload.",
        "The router strips the incoming Layer 2 Data Link frame header and trailer, decrements IP TTL by 1, and encapsulates the packet in a new Layer 2 frame matching the next hop.",
        "The router replaces the source and destination IP addresses with its own MAC address.",
        "The router converts TCP into UDP to accelerate transmission across fiber.",
      ],
      correctIndex: 1,
      explanation:
        "Routers forward packets at Layer 3. The incoming Layer 2 frame (e.g. 802.11 Wi-Fi or Ethernet) is discarded, the router decrements the TTL, recomputes the IP header checksum, and encapsulates the IP packet into a new Layer 2 frame appropriate for the outbound link media.",
    },
    {
      id: 3,
      question: "How does the OS kernel socket layer demultiplex incoming TCP segments to the correct application process?",
      options: [
        "Using the Destination MAC address alone.",
        "Using the 4-tuple (or 5-tuple): Source IP, Source Port, Destination IP, Destination Port, and Protocol.",
        "Using the process name in the HTTP User-Agent header.",
        "By broadcasting every incoming segment to every running application on the machine.",
      ],
      correctIndex: 1,
      explanation:
        "A TCP socket endpoint is identified by a 4-tuple: (Source IP, Source Port, Destination IP, Destination Port) plus the protocol (TCP). This allows a web server listening on port 443 to manage thousands of distinct concurrent client connections simultaneously.",
    },
    {
      id: 4,
      question: "What is the primary architectural difference between the conceptual OSI model and the practical TCP/IP Internet suite?",
      options: [
        "OSI was designed exclusively for wireless links, while TCP/IP only works on copper cables.",
        "OSI defines strict conceptual separation for Presentation (Layer 6) and Session (Layer 5), whereas TCP/IP consolidates application formatting, encryption, and session state within the Application Layer.",
        "TCP/IP has seven layers, while OSI has only four.",
        "OSI eliminates the need for IP addressing.",
      ],
      correctIndex: 1,
      explanation:
        "The OSI reference model specifies 7 layers including separate Session and Presentation layers. In practical TCP/IP engineering, session coordination and data presentation (JSON, Protobuf, TLS encryption) are handled directly within the application process.",
    },
    {
      id: 5,
      question: "In the context of the OSI Data Link layer, what is the role of the Frame Check Sequence (FCS) / Cyclic Redundancy Check (CRC)?",
      options: [
        "To encrypt the frame against eavesdropping.",
        "To verify bit-level integrity over the physical hop, allowing the receiver to drop corrupted frames before passing them up to Layer 3.",
        "To route the frame across multiple geographic Autonomous Systems.",
        "To negotiate the TCP maximum segment size (MSS).",
      ],
      correctIndex: 1,
      explanation:
        "The FCS trailer contains a 32-bit CRC computed across the frame. When a receiver's NIC calculates a different CRC than the one transmitted in the trailer, it detects physical transmission corruption and drops the frame immediately.",
    },
    {
      id: 6,
      question: "A network engineer can successfully ping a remote server by IP (8.8.8.8) and by hostname (example.com), but attempting to fetch a web page with 'curl -v https://example.com' times out during the TLS handshake. What is the most likely cause?",
      options: [
        "Layer 1 physical cable disconnected.",
        "Local DNS resolution failure.",
        "An intermediate firewall or security appliance blocking TCP port 443, or a Path MTU blackhole dropping large TLS packets.",
        "The client laptop's ARP table has exceeded maximum capacity.",
      ],
      correctIndex: 2,
      explanation:
        "Successful ping and DNS prove Layers 1, 2, 3, and DNS resolution are fully operational. Failure specifically on HTTPS suggests Layer 4 port 443 filtering, or an MTU blackhole where small ICMP pings pass but large TLS Client Hello/Certificate packets exceeding the link MTU are dropped.",
    },
    {
      id: 7,
      question: "Why is the Internet architecture often depicted as an 'Hourglass'?",
      options: [
        "Because time synchronization (NTP) is required for all protocols.",
        "Because the Internet supports many diverse physical and link technologies at the bottom and many diverse applications at the top, but converges on a single common protocol (IP) at the narrow waist.",
        "Because network bandwidth diminishes over time due to congestion.",
        "Because packet switching only functions during daytime hours.",
      ],
      correctIndex: 1,
      explanation:
        "The famous 'hourglass architecture' represents the Internet's narrow waist: the Internet Protocol (IP). Above IP exist multiple transport and application protocols; below IP exist diverse physical and link technologies (Ethernet, Wi-Fi, 5G, fiber). IP is the universal common bridge.",
    },
    {
      id: 8,
      question: "Which port range is designated by IANA as 'Well-Known Ports' (reserved for system and standardized services like HTTP, HTTPS, SSH, and DNS)?",
      options: [
        "Ports 0 to 1,023",
        "Ports 1,024 to 49,151",
        "Ports 49,152 to 65,535",
        "Ports 80,000 to 90,000",
      ],
      correctIndex: 0,
      explanation:
        "IANA defines three port ranges: Well-Known Ports (0–1,023) require root/administrator privileges to bind on Unix; Registered Ports (1,024–49,151); and Dynamic/Private/Ephemeral Ports (49,152–65,535) used for outbound client connections.",
    },
    {
      id: 9,
      question: "How does modern HTTP/3 over QUIC alter the traditional transport-layer mapping of HTTPS?",
      options: [
        "It eliminates the use of ports entirely.",
        "Instead of running over TCP, HTTP/3 uses QUIC over UDP (port 443) to eliminate Head-of-Line blocking and integrate the TLS 1.3 handshake into transport connection setup.",
        "It replaces IPv4 and IPv6 with Ethernet-only delivery.",
        "It mandates circuit switching across core routers.",
      ],
      correctIndex: 1,
      explanation:
        "HTTP/3 replaces TCP with QUIC, which runs on top of UDP. QUIC moves stream multiplexing and connection migration into user space, eliminating TCP Head-of-Line blocking and completing transport and cryptographic handshakes in 0-RTT or 1-RTT.",
    },
    {
      id: 10,
      question: "What is the crucial troubleshooting principle demonstrated by the phrase: 'A successful ping does not guarantee application availability'?",
      options: [
        "Ping packets travel faster than light.",
        "Ping only validates Layer 3 ICMP echo reachability; it does not test whether the application process (e.g. Nginx, PostgreSQL) is running, listening on its TCP port, or responding to application-layer requests.",
        "Ping automatically repairs broken routing tables.",
        "Ping bypasses all physical fiber cables.",
      ],
      correctIndex: 1,
      explanation:
        "ICMP Echo (ping) is handled directly by the operating system kernel networking stack at Layer 3. It proves IP routing and host vitality, but tells you nothing about whether the application daemon at Layer 7 is alive, listening, authenticated, or healthy.",
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
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col font-sans selection:bg-[#f97316] selection:text-white">
      {/* Top Global Navigation Bar */}
      <ModuleNav
        track="networks"
        currentModuleId="models"
        showAiTutor={showAiTutor}
        onAiTutorToggle={() => setShowAiTutor(!showAiTutor)}
        aiTutorLabel="Networking Mentor"
      />

      <div className="flex-1 flex flex-col max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Module Header & University Alignment Badge */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200/80 bg-orange-50/90 px-3 py-1 font-mono text-[11px] font-bold text-[#ea580c] uppercase tracking-wider">
              <Network size={12} className="text-[#f97316]" />
              Course: Computer Networks & Internet Engineering
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-white/80 px-2.5 py-1 text-[11px] font-bold text-stone-600">
              Module 2 of 24
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-white/80 px-2.5 py-1 text-[11px] font-bold text-stone-600">
              Protocol Engineering & Wireshark Lab
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#18181b]">
            Network Models — OSI and TCP/IP Architecture
          </h1>
          <p className="mt-2 text-sm md:text-base text-stone-600 max-w-4xl leading-relaxed">
            Master the layered protocol architecture of the Internet. Progress from the 7-layer OSI conceptual reference model to real-world TCP/IP protocol suites, header dissection in Wireshark, encapsulation mechanics, and cross-layer failure diagnostics.
          </p>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex items-center gap-2 border-b border-[#e7e3da] pb-3 mb-6 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab("theory")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "theory"
                ? "bg-[#18181b] text-white shadow-xs"
                : "bg-white/80 text-stone-600 hover:bg-white hover:text-stone-900 border border-[#e7e3da]"
            }`}
          >
            <BookOpen size={14} />
            <span>Curriculum & Deep Theory</span>
          </button>

          <button
            onClick={() => setActiveTab("wireshark-lab")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "wireshark-lab"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-white/80 text-stone-600 hover:bg-white hover:text-stone-900 border border-[#e7e3da]"
            }`}
          >
            <Search size={14} />
            <span>Interactive Wireshark Dissector</span>
          </button>

          <button
            onClick={() => setActiveTab("encapsulation")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "encapsulation"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-white/80 text-stone-600 hover:bg-white hover:text-stone-900 border border-[#e7e3da]"
            }`}
          >
            <Layers size={14} />
            <span>Encapsulation & Router Re-framing</span>
          </button>

          <button
            onClick={() => setActiveTab("dependencies")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "dependencies"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-white/80 text-stone-600 hover:bg-white hover:text-stone-900 border border-[#e7e3da]"
            }`}
          >
            <Workflow size={14} />
            <span>Protocol Dependency Simulator</span>
          </button>

          <button
            onClick={() => setActiveTab("quiz")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "quiz"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-white/80 text-stone-600 hover:bg-white hover:text-stone-900 border border-[#e7e3da]"
            }`}
          >
            <Award size={14} />
            <span>Assessment & Quiz (10 Questions)</span>
          </button>

          <button
            onClick={() => setActiveTab("report")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "report"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-white/80 text-stone-600 hover:bg-white hover:text-stone-900 border border-[#e7e3da]"
            }`}
          >
            <FileText size={14} />
            <span>Protocol Report Template</span>
          </button>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* TAB 1: CURRICULUM & DEEP THEORY (SECTIONS 2.1 - 2.8)               */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "theory" && (
          <div className="space-y-8">
            {/* Section 2.1: Why Network Models Exist */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Network size={14} />
                <span>2.1 — Why Network Models Exist</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Abstraction, Modularity & The Heterogeneity Problem
              </h2>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                Without standardized communication abstractions, every application would require bespoke machine code for every brand of physical network adapter, operating system, and transmission cable. Layering decomposes the overwhelming complexity of global networking into modular, loosely coupled tiers with well-defined service interfaces.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl border border-stone-200/80 bg-stone-50/70 p-4">
                  <h4 className="text-xs font-bold text-stone-900">1. Separation of Concerns</h4>
                  <p className="mt-1 text-[11px] text-stone-500 leading-normal">
                    Physical engineers optimize fiber lasers; systems programmers build reliable byte streams (TCP); web developers build REST APIs. Neither needs deep expertise in the other.
                  </p>
                </div>
                <div className="rounded-2xl border border-stone-200/80 bg-stone-50/70 p-4">
                  <h4 className="text-xs font-bold text-stone-900">2. Implementation Independence</h4>
                  <p className="mt-1 text-[11px] text-stone-500 leading-normal">
                    A laptop can transition seamlessly from 802.11ax Wi-Fi to a 10Gbps Ethernet dock or 5G cellular modem without restarting running web applications or active database connections.
                  </p>
                </div>
                <div className="rounded-2xl border border-stone-200/80 bg-stone-50/70 p-4">
                  <h4 className="text-xs font-bold text-stone-900">3. Interoperability</h4>
                  <p className="mt-1 text-[11px] text-stone-500 leading-normal">
                    Enables a Windows client on an ARM64 processor to communicate flawlessly with a Linux server on an x86_64 CPU across 15 intermediate routers running proprietary ASIC microcode.
                  </p>
                </div>
                <div className="rounded-2xl border border-stone-200/80 bg-stone-50/70 p-4">
                  <h4 className="text-xs font-bold text-stone-900">4. Diagnostic Isolation</h4>
                  <p className="mt-1 text-[11px] text-stone-500 leading-normal">
                    Engineers can systematically isolate whether a service outage stems from physical link failure (L1), ARP/VLAN misconfiguration (L2), bad routing (L3), or closed ports (L4).
                  </p>
                </div>
              </div>

              {/* Engineering Exercise Callout */}
              <div className="mt-6 rounded-2xl border border-orange-200 bg-orange-50/50 p-4 text-xs">
                <strong className="text-orange-950 font-bold block mb-1">
                  Engineering Exercise: Windows Client to Linux Server Communication
                </strong>
                <p className="text-stone-700 leading-relaxed">
                  How can a Windows PC communicate with a Linux server despite divergent operating systems, kernels, and memory architectures? Because they strictly adhere to wire protocols defined by RFC standards (RFC 791 for IP, RFC 9293 for TCP). The bits transmitted over the wire follow identical byte ordering (Network Byte Order / Big Endian) regardless of native CPU endianness (Host Byte Order / Little Endian).
                </p>
              </div>
            </section>

            {/* Section 2.2: The OSI Reference Model (All 7 Layers) */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Layers size={14} />
                <span>2.2 — The OSI Reference Model (All 7 Layers)</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                In-Depth Architectural Analysis of Layers 1 through 7
              </h2>

              <div className="mt-6 space-y-4">
                {[
                  {
                    num: "Layer 7",
                    name: "Application Layer",
                    pdu: "Application Data",
                    protocols: "HTTP/3, HTTPS, DNS, SSH, SMTP, DHCP, gRPC, BGP",
                    responsibilities:
                      "Provides direct network services to user applications. Manages requests, status codes, authentication headers, and domain naming resolution.",
                    troubleshooting:
                      "Verify HTTP 4xx/5xx status codes, application error logs, API rate limiting, and DNS query resolution (dig/nslookup).",
                  },
                  {
                    num: "Layer 6",
                    name: "Presentation Layer",
                    pdu: "Data (Encoded / Transformed)",
                    protocols: "JSON, Protocol Buffers, gzip/brotli compression, TLS encryption",
                    responsibilities:
                      "Handles data formatting, character encoding (UTF-8), serialization/deserialization, cryptographic transformation, and compression.",
                    troubleshooting:
                      "Inspect character encoding mismatches, schema validation failures, and TLS handshake alert codes (e.g. Bad Certificate).",
                  },
                  {
                    num: "Layer 5",
                    name: "Session Layer",
                    pdu: "Data (Session State)",
                    protocols: "RPC session management, SOCKS5, NetBIOS dialogs",
                    responsibilities:
                      "Establishes, manages, coordinates dialogs, and checkpoints stateful recovery streams between communicating endpoint applications.",
                    troubleshooting:
                      "Diagnose session token timeouts, dropped stateful RPC tunnels, and broken long-lived connection pools.",
                  },
                  {
                    num: "Layer 4",
                    name: "Transport Layer",
                    pdu: "Segment (TCP) / Datagram (UDP)",
                    protocols: "TCP (RFC 9293), UDP (RFC 768), SCTP, QUIC",
                    responsibilities:
                      "End-to-end process-to-process communication. Port multiplexing, connection state machine (SYN/ACK/FIN), sliding window flow control, retransmissions, and congestion control (CUBIC/BBR).",
                    troubleshooting:
                      "Check listening ports with `ss -tulpn`, connection timeouts, SYN floods, RST packets, and high TCP retransmission rates.",
                  },
                  {
                    num: "Layer 3",
                    name: "Network Layer",
                    pdu: "Packet / Datagram",
                    protocols: "IPv4 (RFC 791), IPv6 (RFC 8200), ICMP, OSPF, BGP, IPsec",
                    responsibilities:
                      "Host-to-host logical addressing and inter-network routing. Hierarchical IP address space, subnet masks, longest-prefix matching, TTL decrement, and Path MTU Discovery.",
                    troubleshooting:
                      "Verify IP configuration (`ip addr`), routing table (`ip route`), default gateway reachability, and trace path hops with `traceroute`.",
                  },
                  {
                    num: "Layer 2",
                    name: "Data Link Layer",
                    pdu: "Frame",
                    protocols: "IEEE 802.3 Ethernet, IEEE 802.11 Wi-Fi, 802.1Q VLAN, ARP",
                    responsibilities:
                      "Local-link node-to-node delivery. Physical MAC addressing (48-bit EUI-48), framing, switch CAM table learning, collision/broadcast domains, and CRC/FCS error detection.",
                    troubleshooting:
                      "Inspect interface link status (`ip link`), switch port errors/discards, ARP cache table (`ip neigh`), and VLAN tagging mismatches.",
                  },
                  {
                    num: "Layer 1",
                    name: "Physical Layer",
                    pdu: "Bits / Physical Signals",
                    protocols: "1000BASE-T, 10GBASE-SR, 100GBASE-LR4, Cat6A, Single-Mode Fiber",
                    responsibilities:
                      "Transmission of raw digital bits as electrical voltages, optical pulses, or radio wave frequencies across a physical transmission medium.",
                    troubleshooting:
                      "Check physical link LEDs, optical SFP transceiver power levels (dBm), cable kinks, transceiver seating, and radio RSSI / SNR.",
                  },
                ].map((l, idx) => (
                  <div key={idx} className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-black text-[#ea580c] px-2 py-0.5 rounded-md bg-orange-100">
                          {l.num}
                        </span>
                        <h3 className="text-sm font-bold text-stone-900">{l.name}</h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] bg-white border border-stone-200 px-2 py-0.5 rounded text-stone-600 font-bold">
                          PDU: {l.pdu}
                        </span>
                      </div>
                    </div>
                    <div className="text-xs text-stone-700 space-y-1">
                      <p>
                        <strong>Key Protocols & Tech:</strong>{" "}
                        <span className="font-mono text-stone-900">{l.protocols}</span>
                      </p>
                      <p>
                        <strong>Core Responsibilities:</strong> {l.responsibilities}
                      </p>
                      <p className="text-[11px] text-stone-500 pt-1 border-t border-stone-200/60">
                        <strong>Troubleshooting Focus:</strong> {l.troubleshooting}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 2.3 & 2.8: TCP/IP Architecture vs OSI */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Workflow size={14} />
                <span>2.3 & 2.8 — TCP/IP Architecture vs. OSI Reference Model</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                The Internet Hourglass & Practical Differences
              </h2>
              <p className="mt-2 text-sm text-stone-600">
                While the OSI model was conceived by committee as a formal conceptual framework, the TCP/IP suite was built pragmatically through the deployment of ARPANET and the global Internet.
              </p>

              <div className="mt-5 overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-100/70 font-mono text-stone-700">
                      <th className="py-2.5 px-3">Architectural Dimension</th>
                      <th className="py-2.5 px-3">OSI Reference Model</th>
                      <th className="py-2.5 px-3">TCP/IP Protocol Suite</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-stone-900">Primary Purpose</td>
                      <td className="py-2.5 px-3">Theoretical reference model for standards development</td>
                      <td className="py-2.5 px-3">Pragmatic implementation architecture of the Internet</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-stone-900">Layer Count</td>
                      <td className="py-2.5 px-3">7 strict conceptual layers</td>
                      <td className="py-2.5 px-3">4 layers (Application, Transport, Internet, Link)</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-stone-900">Session & Presentation</td>
                      <td className="py-2.5 px-3">Dedicated, separate structural layers (L5 & L6)</td>
                      <td className="py-2.5 px-3">Absorbed directly into application code / libraries (TLS, JSON)</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-stone-900">Network Layer (L3)</td>
                      <td className="py-2.5 px-3">Supports both connection-oriented and connectionless</td>
                      <td className="py-2.5 px-3">Strictly connectionless datagram delivery via IP</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-stone-900">Transport Layer (L4)</td>
                      <td className="py-2.5 px-3">Guarantees reliability at L4 in all cases</td>
                      <td className="py-2.5 px-3">Offers choice: Reliable stream (TCP) or Lightweight datagram (UDP)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 2.5: Headers, Ports & Socket Demultiplexing */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Cpu size={14} />
                <span>2.5 — Headers, Ports & Socket Demultiplexing</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                The Anatomy of Network Addressing Across Layers
              </h2>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-xs">
                  <h4 className="font-bold text-stone-900 mb-1">Layer 2: MAC Address (48-bit)</h4>
                  <p className="text-stone-600 leading-relaxed">
                    Format: <code>00:1A:2B:3C:4D:5E</code>. First 24 bits are the Organizationally Unique Identifier (OUI) assigned to manufacturer; last 24 bits are unique device serial. Valid only on the local broadcast link.
                  </p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-xs">
                  <h4 className="font-bold text-stone-900 mb-1">Layer 3: IP Address (32 / 128-bit)</h4>
                  <p className="text-stone-600 leading-relaxed">
                    IPv4: <code>192.168.1.1</code>. Hierarchical routing address (Network ID + Host ID). Global Internet routers forward packets by longest-prefix match on CIDR destination subnets.
                  </p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-xs">
                  <h4 className="font-bold text-stone-900 mb-1">Layer 4: Port Numbers (16-bit)</h4>
                  <p className="text-stone-600 leading-relaxed">
                    Range: 0 to 65,535. Identifies specific application processes or listening sockets on the host. Allows a single IP to run HTTP (80), HTTPS (443), and SSH (22) concurrently.
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 2: INTERACTIVE WIRESHARK DISSECTOR                             */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "wireshark-lab" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                <Search size={14} />
                <span>Wireshark Protocol Analyzer Lab</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Live Packet Dissection & Header Tree Explorer
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-stone-600">
                Select a captured network packet to expand its layered headers. Examine real-world fields, flags, checksums, and hex payload dissections.
              </p>
            </div>

            {/* Packet Selector Pills */}
            <div className="flex flex-wrap gap-2">
              {samplePackets.map((pkt, idx) => (
                <button
                  key={pkt.id}
                  onClick={() => setSelectedPacketIdx(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                    selectedPacketIdx === idx
                      ? "bg-[#ea580c] text-white shadow-xs"
                      : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                  }`}
                >
                  {pkt.name.split(":")[0]}
                </button>
              ))}
            </div>

            {/* Active Packet Summary Banner */}
            <div className="p-3.5 rounded-xl bg-stone-900 text-emerald-400 font-mono text-xs flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="text-stone-400">Captured Trace:</span>{" "}
                <strong className="text-white">{samplePackets[selectedPacketIdx].name}</strong>
              </div>
              <div className="text-[11px] text-stone-400">{samplePackets[selectedPacketIdx].summary}</div>
            </div>

            {/* Expandable Protocol Tree (Wireshark GUI Style) */}
            <div className="space-y-3 font-mono text-xs">
              {/* Layer 2: Ethernet II */}
              <div className="rounded-xl border border-stone-200 bg-white overflow-hidden shadow-2xs">
                <button
                  onClick={() => toggleHeader("eth")}
                  className="w-full flex items-center justify-between p-3 bg-stone-50/80 hover:bg-stone-100 text-left font-bold text-stone-800 cursor-pointer border-b border-stone-200/60"
                >
                  <div className="flex items-center gap-2">
                    {expandedHeaders.eth ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                    <span>Frame (Layer 2) — Ethernet II, Src: {samplePackets[selectedPacketIdx].eth.srcMac}</span>
                  </div>
                  <span className="text-[10px] text-stone-500 font-normal">Data Link Layer</span>
                </button>
                {expandedHeaders.eth && (
                  <div className="p-3.5 bg-white text-stone-700 space-y-1 text-[11px] leading-relaxed">
                    <div>Destination MAC: {samplePackets[selectedPacketIdx].eth.dstMac}</div>
                    <div>Source MAC: {samplePackets[selectedPacketIdx].eth.srcMac}</div>
                    <div>Type: {samplePackets[selectedPacketIdx].eth.type}</div>
                    <div>Frame Check Sequence (FCS): {samplePackets[selectedPacketIdx].eth.fcs}</div>
                  </div>
                )}
              </div>

              {/* Layer 3: Internet Protocol */}
              <div className="rounded-xl border border-stone-200 bg-white overflow-hidden shadow-2xs">
                <button
                  onClick={() => toggleHeader("ip")}
                  className="w-full flex items-center justify-between p-3 bg-stone-50/80 hover:bg-stone-100 text-left font-bold text-stone-800 cursor-pointer border-b border-stone-200/60"
                >
                  <div className="flex items-center gap-2">
                    {expandedHeaders.ip ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                    <span>Internet Protocol Version 4, Src: {samplePackets[selectedPacketIdx].ip.srcIp}, Dst: {samplePackets[selectedPacketIdx].ip.dstIp}</span>
                  </div>
                  <span className="text-[10px] text-stone-500 font-normal">Network Layer</span>
                </button>
                {expandedHeaders.ip && (
                  <div className="p-3.5 bg-white text-stone-700 space-y-1 text-[11px] leading-relaxed">
                    <div>Version: {samplePackets[selectedPacketIdx].ip.version}</div>
                    <div>Type of Service: {samplePackets[selectedPacketIdx].ip.tos}</div>
                    <div>Total Length: {samplePackets[selectedPacketIdx].ip.totalLength}</div>
                    <div>Identification: {samplePackets[selectedPacketIdx].ip.identification}</div>
                    <div>Flags: {samplePackets[selectedPacketIdx].ip.flags}</div>
                    <div>Time to Live (TTL): {samplePackets[selectedPacketIdx].ip.ttl}</div>
                    <div>Protocol: {samplePackets[selectedPacketIdx].ip.protocol}</div>
                    <div>Header Checksum: {samplePackets[selectedPacketIdx].ip.checksum}</div>
                    <div>Source Address: {samplePackets[selectedPacketIdx].ip.srcIp}</div>
                    <div>Destination Address: {samplePackets[selectedPacketIdx].ip.dstIp}</div>
                  </div>
                )}
              </div>

              {/* Layer 4: Transport Layer */}
              <div className="rounded-xl border border-stone-200 bg-white overflow-hidden shadow-2xs">
                <button
                  onClick={() => toggleHeader("tcp")}
                  className="w-full flex items-center justify-between p-3 bg-stone-50/80 hover:bg-stone-100 text-left font-bold text-stone-800 cursor-pointer border-b border-stone-200/60"
                >
                  <div className="flex items-center gap-2">
                    {expandedHeaders.tcp ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                    <span>
                      {samplePackets[selectedPacketIdx].transport.proto} Protocol, Src Port:{" "}
                      {samplePackets[selectedPacketIdx].transport.srcPort}, Dst Port:{" "}
                      {samplePackets[selectedPacketIdx].transport.dstPort}
                    </span>
                  </div>
                  <span className="text-[10px] text-stone-500 font-normal">Transport Layer</span>
                </button>
                {expandedHeaders.tcp && (
                  <div className="p-3.5 bg-white text-stone-700 space-y-1 text-[11px] leading-relaxed">
                    <div>Source Port: {samplePackets[selectedPacketIdx].transport.srcPort}</div>
                    <div>Destination Port: {samplePackets[selectedPacketIdx].transport.dstPort}</div>
                    {samplePackets[selectedPacketIdx].transport.seq && (
                      <div>Sequence Number: {samplePackets[selectedPacketIdx].transport.seq}</div>
                    )}
                    {samplePackets[selectedPacketIdx].transport.ack && (
                      <div>Acknowledgment Number: {samplePackets[selectedPacketIdx].transport.ack}</div>
                    )}
                    {samplePackets[selectedPacketIdx].transport.flags && (
                      <div>Flags: {samplePackets[selectedPacketIdx].transport.flags}</div>
                    )}
                    {samplePackets[selectedPacketIdx].transport.window && (
                      <div>Window: {samplePackets[selectedPacketIdx].transport.window}</div>
                    )}
                    {samplePackets[selectedPacketIdx].transport.options && (
                      <div>Options: {samplePackets[selectedPacketIdx].transport.options}</div>
                    )}
                  </div>
                )}
              </div>

              {/* Layer 7: Application Payload */}
              <div className="rounded-xl border border-stone-200 bg-white overflow-hidden shadow-2xs">
                <button
                  onClick={() => toggleHeader("app")}
                  className="w-full flex items-center justify-between p-3 bg-stone-50/80 hover:bg-stone-100 text-left font-bold text-stone-800 cursor-pointer border-b border-stone-200/60"
                >
                  <div className="flex items-center gap-2">
                    {expandedHeaders.app ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                    <span>Application Layer — {samplePackets[selectedPacketIdx].app.proto}</span>
                  </div>
                  <span className="text-[10px] text-stone-500 font-normal">Application Layer</span>
                </button>
                {expandedHeaders.app && (
                  <div className="p-3.5 bg-white text-stone-700 space-y-1 text-[11px] leading-relaxed">
                    <div>Type: {samplePackets[selectedPacketIdx].app.type}</div>
                    <div>Payload Inspection: {samplePackets[selectedPacketIdx].app.details}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 3: ENCAPSULATION & ROUTER RE-FRAMING                           */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "encapsulation" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                <Layers size={14} />
                <span>Protocol Encapsulation Pipeline</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Step-by-Step Encapsulation & Hop-by-Hop Re-framing
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-stone-600">
                Understand how headers are wrapped on transmission, why routers replace Layer 2 frames while preserving Layer 3/4 headers, and how decapsulation occurs at the destination.
              </p>
            </div>

            {/* Stepper Selector */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {encapStages.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setEncapStep(idx)}
                  className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    encapStep === idx
                      ? "bg-[#ea580c] text-white shadow-xs"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                  }`}
                >
                  Step {idx + 1}: {s.pdu.split(" ")[0]}
                </button>
              ))}
            </div>

            {/* Active Encapsulation Visualizer Card */}
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <span className="text-sm font-extrabold text-stone-900 font-mono">
                  {encapStages[encapStep].layer}
                </span>
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${encapStages[encapStep].color}`}>
                  PDU: {encapStages[encapStep].pdu}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {encapStages[encapStep].description}
              </p>

              <div className="rounded-xl border border-stone-300 bg-white p-4 font-mono text-xs text-stone-900 shadow-2xs">
                <div className="text-[10px] text-stone-400 uppercase font-bold mb-1">On-the-Wire Packet Structure:</div>
                <div className="p-2.5 rounded-lg bg-stone-100 border border-stone-200 text-stone-800 break-all">
                  {encapStages[encapStep].headers}
                </div>
              </div>

              {/* Stepper Buttons */}
              <div className="flex items-center justify-between pt-2">
                <button
                  disabled={encapStep === 0}
                  onClick={() => setEncapStep((p) => Math.max(0, p - 1))}
                  className="px-3 py-1.5 rounded-lg border border-stone-300 bg-white text-xs font-bold text-stone-700 disabled:opacity-40 cursor-pointer"
                >
                  Previous
                </button>
                <span className="text-xs font-mono text-stone-500">
                  Stage {encapStep + 1} of {encapStages.length}
                </span>
                <button
                  disabled={encapStep === encapStages.length - 1}
                  onClick={() => setEncapStep((p) => Math.min(encapStages.length - 1, p + 1))}
                  className="px-3 py-1.5 rounded-lg bg-[#ea580c] text-xs font-bold text-white disabled:opacity-40 cursor-pointer"
                >
                  Next Stage
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 4: PROTOCOL DEPENDENCY & FAILURE SIMULATOR                     */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "dependencies" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                <Workflow size={14} />
                <span>End-to-End Reliability Engineering</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Protocol Dependency Chain & Failure Simulator
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-stone-600">
                A single web request requires seamless cooperation across multiple independent protocols. Click any protocol component below to simulate its outage and examine the exact symptom and error signature.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {dependencyNodes.map((node) => {
                const isSelected = failedComponent === node.id;
                return (
                  <div
                    key={node.id}
                    onClick={() => setFailedComponent(isSelected ? null : node.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? "border-red-500 bg-red-50/70 shadow-sm"
                        : "border-stone-200 bg-stone-50/70 hover:border-orange-300 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-stone-900">{node.name}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-stone-200 text-stone-700">
                        {node.layer}
                      </span>
                    </div>
                    <div className="text-[11px] text-stone-500">
                      {isSelected ? (
                        <span className="text-red-700 font-bold block mt-1">FAILURE SIMULATED: {node.fails}</span>
                      ) : (
                        "Click to simulate failure at this layer"
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {failedComponent && (
              <div className="p-4 rounded-2xl border border-red-300 bg-red-50 text-xs text-red-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <AlertTriangle size={16} className="text-red-600" />
                  <span>Failure Diagnostic Analysis</span>
                </div>
                <p>
                  When <strong>{dependencyNodes.find((n) => n.id === failedComponent)?.name}</strong> fails, all higher-layer protocols that depend on it collapse, even though their own software services are healthy.
                </p>
                <p className="font-mono text-[11px] text-red-900 bg-red-100/80 p-2.5 rounded-lg border border-red-200">
                  {dependencyNodes.find((n) => n.id === failedComponent)?.fails}
                </p>
              </div>
            )}
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 5: ASSESSMENT & QUIZ (10 QUESTIONS)                            */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "quiz" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                <Award size={14} />
                <span>Knowledge Assessment</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                University-Level Assessment: Network Models & Protocols
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-stone-600">
                10 rigorous questions assessing OSI layers, TCP/IP differences, router frame rewriting, socket demultiplexing, and troubleshooting.
              </p>
            </div>

            <div className="space-y-6">
              {quizQuestions.map((q, idx) => {
                const selectedOpt = quizAnswers[q.id];
                const isAnswered = selectedOpt !== undefined;
                const isCorrect = selectedOpt === q.correctIndex;

                return (
                  <div key={q.id} className="rounded-2xl border border-stone-200 bg-stone-50/60 p-5 space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-xs font-black text-stone-900">
                        {idx + 1}. {q.question}
                      </span>
                      {quizSubmitted && (
                        <span
                          className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full shrink-0 ${
                            isCorrect ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
                          }`}
                        >
                          {isCorrect ? "Correct" : "Incorrect"}
                        </span>
                      )}
                    </div>

                    <div className="space-y-2">
                      {q.options.map((opt, optIdx) => {
                        const isSelected = selectedOpt === optIdx;
                        let optionStyle = "border-stone-200 bg-white hover:border-orange-300";

                        if (quizSubmitted) {
                          if (optIdx === q.correctIndex) {
                            optionStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold";
                          } else if (isSelected && !isCorrect) {
                            optionStyle = "border-red-400 bg-red-50 text-red-950";
                          } else {
                            optionStyle = "border-stone-200 bg-white opacity-60";
                          }
                        } else if (isSelected) {
                          optionStyle = "border-[#ea580c] bg-orange-50/70 font-semibold text-orange-950";
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() => handleSelectOption(q.id, optIdx)}
                            className={`w-full text-left p-3 rounded-xl border text-xs transition-all cursor-pointer ${optionStyle}`}
                          >
                            <span className="font-mono text-stone-400 mr-2">
                              {String.fromCharCode(65 + optIdx)}.
                            </span>
                            {opt}
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className="mt-3 p-3 rounded-xl bg-orange-50 border border-orange-200/80 text-xs text-stone-700">
                        <strong className="text-orange-950 block mb-0.5">Engineering Explanation:</strong>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Score & Submission Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-200">
              {quizSubmitted ? (
                <div className="flex items-center gap-3">
                  <div className="text-lg font-black text-stone-900 font-mono">
                    Score: {calculateScore()} / {quizQuestions.length} ({((calculateScore() / quizQuestions.length) * 100).toFixed(0)}%)
                  </div>
                  <button
                    onClick={() => {
                      setQuizAnswers({});
                      setQuizSubmitted(false);
                    }}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-stone-300 bg-white text-xs font-bold text-stone-700 hover:bg-stone-50 cursor-pointer"
                  >
                    <RotateCcw size={14} />
                    <span>Retake Assessment</span>
                  </button>
                </div>
              ) : (
                <button
                  disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                  onClick={() => setQuizSubmitted(true)}
                  className="px-6 py-3 rounded-xl bg-[#ea580c] text-white text-xs font-bold shadow-md hover:bg-[#c2410c] disabled:opacity-50 cursor-pointer"
                >
                  Submit Assessment ({Object.keys(quizAnswers).length} / {quizQuestions.length} Answered)
                </button>
              )}
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 6: PROTOCOL REPORT TEMPLATE                                    */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "report" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                  <FileText size={14} />
                  <span>Portfolio Engineering Deliverable</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                  Network Protocol Analysis Report Template
                </h2>
              </div>
              <button
                onClick={() =>
                  copyCode(
                    `# Network Protocol Analysis Report

## 1. Executive Summary
- **Investigator:** Network Systems Engineer
- **Target Transaction:** HTTPS GET Request to \`https://prepspaces.com\`
- **Capture Environment:** Wireshark v4.2 on Ubuntu 24.04 LTS (eth0)
- **Key Findings:** Identified complete protocol lifecycle spanning DNS (UDP 53), TCP 3-way handshake (SYN, SYN-ACK, ACK), TLS 1.3 ECDHE key exchange, and HTTP/2 stream multiplexing.

## 2. Protocol Stack Mapping
| Layer | OSI Name | Protocol Observed | PDU | Addressing / Identifier |
| :--- | :--- | :--- | :--- | :--- |
| Layer 7 | Application | HTTP/2, DNS | Data | Host: prepspaces.com |
| Layer 6 | Presentation | TLS 1.3 | Data | Cipher: TLS_AES_256_GCM_SHA384 |
| Layer 4 | Transport | TCP | Segment | Src Port: 54210, Dst Port: 443 |
| Layer 3 | Network | IPv4 | Packet | Src: 192.168.1.142, Dst: 104.21.58.192 |
| Layer 2 | Data Link | Ethernet II | Frame | Src MAC: 52:54:00:12:34:56, Dst MAC: 00:1a:2b:3c:4d:5e |
| Layer 1 | Physical | 1000BASE-T | Bits | Cat6A Twisted Pair |

## 3. Annotated Packet Trace Dissection
- **DNS Resolution:** Client sent UDP datagram to \`1.1.1.1:53\` querying A record. Response received in 12.4ms with TTL=300.
- **TCP Connection Setup:** SYN packet generated with ISN=0x7421ab, MSS=1460, Window Scale=8. SYN-ACK received in 13.8ms. ACK returned completing handshake.
- **Router Re-framing:** Layer 2 destination MAC changed from local Gateway to ISP router while IP TTL decremented from 64 to 63.

## 4. Layered Failure Diagnostic Investigation
- **Scenario:** DNS query succeeds, ping responds, but HTTPS connection hangs.
- **Isolation Methodology:**
  1. \`ping 104.21.58.192\` -> 0% packet loss (Rules out L1/L2/L3 routing failure).
  2. \`nc -zv 104.21.58.192 443\` -> Connection Succeeded (Rules out L4 port filtering).
  3. \`curl -v https://prepspaces.com\` -> Fails during TLS handshake.
  4. \`ping -s 1472 -M do 104.21.58.192\` -> Path MTU Blackhole identified! Packets with DF bit set exceeding 1420 bytes were dropped silently by intermediate VPN tunnel without ICMP Fragmentation Needed.
- **Remediation:** Configured MSS Clamping on border router: \`iptables -t mangle -A FORWARD -p tcp --tcp-flags SYN,RST SYN -j TCPMSS --clamp-mss-to-pmtu\`.`,
                    "report-copy"
                  )
                }
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#ea580c] text-white text-xs font-bold hover:bg-[#c2410c] shadow-xs cursor-pointer"
              >
                {copiedCodeId === "report-copy" ? <Check size={14} /> : <Copy size={14} />}
                <span>Copy Markdown Template</span>
              </button>
            </div>

            <p className="text-xs sm:text-sm text-stone-600">
              Submit this comprehensive technical document after completing Labs 1 through 4 to showcase your protocol engineering and packet dissection capabilities to prospective employers and technical reviewers.
            </p>

            <div className="rounded-2xl border border-stone-800 bg-[#18181b] p-5 font-mono text-xs text-stone-300 overflow-x-auto leading-relaxed shadow-lg">
              <pre className="text-stone-300">
{`# Network Protocol Analysis Report

## 1. Executive Summary
- **Investigator:** Network Systems Engineer
- **Target Transaction:** HTTPS GET Request to https://prepspaces.com
- **Capture Environment:** Wireshark v4.2 on Ubuntu 24.04 LTS (eth0)
- **Key Findings:** Identified complete protocol lifecycle spanning DNS (UDP 53),
  TCP 3-way handshake (SYN, SYN-ACK, ACK), TLS 1.3 ECDHE key exchange,
  and HTTP/2 stream multiplexing.

## 2. Protocol Stack Mapping
| Layer   | OSI Name      | Protocol Observed | PDU     | Addressing / Identifier       |
| :------ | :------------ | :---------------- | :------ | :---------------------------- |
| Layer 7 | Application   | HTTP/2, DNS       | Data    | Host: prepspaces.com          |
| Layer 6 | Presentation  | TLS 1.3           | Data    | Cipher: TLS_AES_256_GCM_SHA384 |
| Layer 4 | Transport     | TCP               | Segment | Src: 54210, Dst: 443          |
| Layer 3 | Network       | IPv4              | Packet  | Src: 192.168.1.142, Dst: ...  |
| Layer 2 | Data Link     | Ethernet II       | Frame   | MAC: 52:54:00:... → 00:1a:... |
| Layer 1 | Physical      | 1000BASE-T        | Bits    | Cat6A Twisted Pair            |`}
              </pre>
            </div>
          </div>
        )}

        {/* Footer Navigation Bar */}
        <div className="mt-10 pt-6 border-t border-[#e7e3da] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => navigate("/learning/networks")}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#e7e3da] bg-white text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#ea580c] transition cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 1 — Introduction</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-stone-500">
              Next: Module 3 — Physical Layer & Data Transmission
            </span>
            <button
              onClick={() => navigate("/learning/networks/physical")}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#ea580c] text-xs font-bold text-white hover:bg-[#c2410c] shadow-xs cursor-pointer"
            >
              <span>Module 3: Physical Layer</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
