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
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* COMPUTER NETWORKS & INTERNET ENGINEERING: MODULE 6                         */
/* IPV6 ARCHITECTURE, MODERN ADDRESSING & TRANSITION ENGINEERING              */
/* -------------------------------------------------------------------------- */

export default function NetworkIPv6() {
  const navigate = useNavigate();

  // Active top-level tabs
  const [activeTab, setActiveTab] = useState("theory"); // theory | notation-sim | subnet-sim | ndp-sim | dualstack-sim | cli | quiz | lab-report
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2500);
  };

  // Track scroll navigation & synced topics
  const topics = [
    { id: "sec-6-1", name: "6.1 Why IPv6 is Necessary" },
    { id: "sec-6-2", name: "6.2 IPv6 Address Notation & Compression" },
    { id: "sec-6-3", name: "6.3 IPv6 Address Types & Scopes" },
    { id: "sec-6-4", name: "6.4 IPv6 Prefixes & Subnetting" },
    { id: "sec-6-5", name: "6.5 Neighbor Discovery Protocol (NDP)" },
    { id: "sec-6-6", name: "6.6 SLAAC Autoconfiguration" },
    { id: "sec-6-7", name: "6.7 DHCPv6 (Stateless & Stateful)" },
    { id: "sec-6-8", name: "6.8 Dual-Stack Networking & DNS" },
    { id: "sec-6-9", name: "6.9 Transition Mechanisms (NAT64/DNS64)" },
    { id: "sec-6-10", name: "6.10 IPv6 Security & Defense-in-Depth" },
    { id: "sec-6-11", name: "6.11 Practical Tools & Troubleshooting" },
    { id: "sec-6-12", name: "6.12 Practical Laboratory: IPv6 LAN" },
    { id: "sec-6-13", name: "6.13 Capstone & Assessment" },
  ];
  const activeTopic = useSyncedTopic(topics.map((t) => t.id));

  const scrollToSection = (id) => {
    setActiveTab("theory");
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 1: IPV6 ADDRESS COMPRESSOR & EXPANDER                            */
  /* -------------------------------------------------------------------------- */
  const [inputIpv6, setInputIpv6] = useState("2001:0db8:0001:0000:0000:0000:0000:0025");

  // Helper to expand an IPv6 address to full 8-hextet 4-digit format
  const expandIpv6 = (addr) => {
    try {
      let trimmed = addr.trim().toLowerCase();
      if (!trimmed) return "2001:0db8:0001:0000:0000:0000:0000:0025";

      if (trimmed.includes("::")) {
        const sides = trimmed.split("::");
        const leftParts = sides[0] ? sides[0].split(":") : [];
        const rightParts = sides[1] ? sides[1].split(":") : [];
        const missingCount = 8 - (leftParts.length + rightParts.length);
        const zeroParts = Array(Math.max(0, missingCount)).fill("0000");
        const fullParts = [...leftParts, ...zeroParts, ...rightParts];
        return fullParts.map((p) => p.padStart(4, "0")).slice(0, 8).join(":");
      } else {
        const parts = trimmed.split(":");
        return parts.map((p) => p.padStart(4, "0")).slice(0, 8).join(":");
      }
    } catch {
      return "2001:0db8:0001:0000:0000:0000:0000:0025";
    }
  };

  // Helper to compress an IPv6 address per RFC 5952
  const compressIpv6 = (fullAddr) => {
    const parts = fullAddr.split(":").map((p) => p.replace(/^0+/, "") || "0");
    // Find longest consecutive sequence of "0"
    let maxStart = -1;
    let maxLength = 0;
    let currStart = -1;
    let currLength = 0;

    for (let i = 0; i < parts.length; i++) {
      if (parts[i] === "0") {
        if (currStart === -1) currStart = i;
        currLength++;
        if (currLength > maxLength) {
          maxLength = currLength;
          maxStart = currStart;
        }
      } else {
        currStart = -1;
        currLength = 0;
      }
    }

    if (maxLength > 1) {
      const left = parts.slice(0, maxStart).join(":");
      const right = parts.slice(maxStart + maxLength).join(":");
      return `${left}::${right}`.replace(/^:::/, "::").replace(/:::$/, "::");
    }
    return parts.join(":");
  };

  const parsedIpv6 = useMemo(() => {
    const full = expandIpv6(inputIpv6);
    const compressed = compressIpv6(full);
    const hextets = full.split(":");
    const leadingZerosRemoved = hextets.map((h) => h.replace(/^0+/, "") || "0").join(":");
    return {
      full,
      compressed,
      hextets,
      leadingZerosRemoved,
    };
  }, [inputIpv6]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 2: IPV6 /48 TO /64 SUBNET HIERARCHY ALLOCATOR                    */
  /* -------------------------------------------------------------------------- */
  const [basePrefix48, setBasePrefix48] = useState("2001:db8:acad");

  const ipv6SubnetAllocations = useMemo(() => {
    const departments = [
      { name: "Engineering / Dev LAN", hexId: "0001", vlan: 10, purpose: "Dual-stack client PCs" },
      { name: "Corporate Sales / HR", hexId: "0002", vlan: 20, purpose: "SLAAC workstations" },
      { name: "Production Datacenter", hexId: "0010", vlan: 30, purpose: "Stateful DHCPv6 servers" },
      { name: "Public Guest Wi-Fi", hexId: "0020", vlan: 40, purpose: "Temporary SLAAC privacy" },
      { name: "Switch In-Band Mgmt", hexId: "0099", vlan: 99, purpose: "Static router/switch SVIs" },
      { name: "Core WAN Router P2P", hexId: "00fe", vlan: 100, purpose: "Point-to-point router link (/127)" },
    ];

    return departments.map((d) => ({
      ...d,
      subnetPrefix: `${basePrefix48}:${d.hexId}::/64`,
      p2pPrefix: d.hexId === "00fe" ? `${basePrefix48}:${d.hexId}::/127` : null,
      gatewaySvi: `${basePrefix48}:${d.hexId}::1`,
      slaacRange: `${basePrefix48}:${d.hexId}::/64 (2^64 addresses)`,
    }));
  }, [basePrefix48]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 3: NEIGHBOR DISCOVERY PROTOCOL (NDP) & SLAAC TRACER              */
  /* -------------------------------------------------------------------------- */
  const [ndpStep, setNdpStep] = useState(0);

  const ndpFlowSteps = [
    {
      title: "Step 1: Link-Local Generation (fe80::/10)",
      sender: "Host A (Client)",
      dest: "Local Interface",
      icmpType: "OS Kernel Boot Initialization",
      desc: "Host A generates a Link-Local address (fe80::a12:34ff:fe56:7890) using its MAC address or random privacy algorithm. Link-local addresses never leave the local wire segment.",
      packet: "Interface State: Tentative | fe80::a12:34ff:fe56:7890/64",
    },
    {
      title: "Step 2: Duplicate Address Detection (DAD)",
      sender: "Host A (Client)",
      dest: "Solicited-Node Multicast (ff02::1:ff56:7890)",
      icmpType: "ICMPv6 Type 135 (Neighbor Solicitation)",
      desc: "Before binding the address, Host A sends a Neighbor Solicitation to verify no other device has this address. Source IP is unspecified (::). If no reply within 1s, the address is verified unique.",
      packet: "Src: :: | Dst: ff02::1:ff56:7890 | Target: fe80::a12:34ff:fe56:7890",
    },
    {
      title: "Step 3: Router Solicitation (RS)",
      sender: "Host A (Client)",
      dest: "All-Routers Multicast (ff02::2)",
      icmpType: "ICMPv6 Type 133 (Router Solicitation)",
      desc: "Host A requests network configuration immediately rather than waiting for periodic router beacons. It broadcasts an RS to ff02::2 on the local link.",
      packet: "Src: fe80::a12:34ff:fe56:7890 | Dst: ff02::2 | Hop Limit: 255",
    },
    {
      title: "Step 4: Router Advertisement (RA)",
      sender: "Router R1 (Gateway)",
      dest: "All-Nodes Multicast (ff02::1)",
      icmpType: "ICMPv6 Type 134 (Router Advertisement)",
      desc: "Router R1 announces the subnet prefix (2001:db8:acad:1::/64), Default Router Lifetime (1800s), MTU (1500), and configuration flags: M=0 (No stateful DHCPv6), O=1 (Stateless DHCPv6 for DNS).",
      packet: "Prefix: 2001:db8:acad:1::/64 | Flags: M=0, O=1 | Router: fe80::1",
    },
    {
      title: "Step 5: SLAAC Address Formation & DAD",
      sender: "Host A (Client)",
      dest: "Local Interface & Solicited-Node Multicast",
      icmpType: "SLAAC Address Formation + DAD",
      desc: "Host A combines the advertised /64 prefix with its 64-bit interface identifier to form 2001:db8:acad:1:a12:34ff:fe56:7890. It runs DAD on this tentative global address, installs fe80::1 as default router, and is fully connected!",
      packet: "Global Unicast Active: 2001:db8:acad:1:a12:34ff:fe56:7890/64 | Gateway: fe80::1",
    },
  ];

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 4: DUAL-STACK DNS & HAPPY EYEBALLS (RFC 8305)                    */
  /* -------------------------------------------------------------------------- */
  const [dualStackDomain, setDualStackDomain] = useState("prepspaces.com");
  const [resolutionState, setResolutionState] = useState("idle"); // idle | resolving | completed
  const [happyEyeballsLog, setHappyEyeballsLog] = useState([]);

  const handleSimulateDualStack = () => {
    setResolutionState("resolving");
    setHappyEyeballsLog([
      `1. Client OS issues parallel DNS queries for '${dualStackDomain}'...`,
    ]);

    setTimeout(() => {
      setHappyEyeballsLog((prev) => [
        ...prev,
        `2. DNS Response: A Record -> 104.21.58.192 (IPv4)`,
        `3. DNS Response: AAAA Record -> 2606:4700:3031::6815:3ac0 (IPv6)`,
        `4. Happy Eyeballs (RFC 8305) prioritizes IPv6: Initiates TCP SYN to [2606:4700:3031::6815:3ac0]:443`,
        `5. Connection Attempt Delay timer started (250ms)...`,
        `6. IPv6 TCP SYN-ACK received in 18ms! IPv6 connection ESTABLISHED.`,
        `7. IPv4 connection attempt cancelled; HTTP/2 stream opened natively over IPv6.`,
      ]);
      setResolutionState("completed");
    }, 600);
  };

  /* -------------------------------------------------------------------------- */
  /* LAB 6.12 CHECKLIST STATE                                                   */
  /* -------------------------------------------------------------------------- */
  const [labChecklist, setLabChecklist] = useState({
    r1Interfaces: false,
    pcPrefixes: false,
    pcGateways: false,
    pingLocalRouter: false,
    pingRoutedPC: false,
    inspectNdp: false,
  });

  const toggleChecklistItem = (key) => {
    setLabChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedChecklistCount = Object.values(labChecklist).filter(Boolean).length;

  /* -------------------------------------------------------------------------- */
  /* 10-QUESTION KNOWLEDGE ASSESSMENT QUIZ                                      */
  /* -------------------------------------------------------------------------- */
  const quizQuestions = [
    {
      question: "How many bits are in an IPv6 address, and how many hexadecimal hextets are used to represent it?",
      options: [
        "64 bits arranged in 4 groups of 16 bits",
        "128 bits arranged in 8 groups of 16 bits (hextets)",
        "256 bits arranged in 16 groups of 16 bits",
        "32 bits arranged in 4 decimal octets",
      ],
      correct: 1,
      rationale:
        "An IPv6 address contains exactly 128 bits, written as eight 16-bit groups (hextets) in hexadecimal notation separated by colons (8 × 16 = 128).",
    },
    {
      question: "Which of the following is the correctly shortened canonical representation of 2001:0db8:0000:0000:0000:0000:0000:0042?",
      options: [
        "2001:db8:42::",
        "2001:db8::42",
        "2001:db8:0:0:0:0:0:42",
        "2001::db8::42",
      ],
      correct: 1,
      rationale:
        "Per RFC 5952: Rule 1 removes leading zeros from each hextet (0db8 -> db8, 0042 -> 42). Rule 2 replaces the consecutive run of all-zero hextets with '::' (used only once). The result is 2001:db8::42.",
    },
    {
      question: "Which IPv6 address range is designated for non-routable Link-Local communication on a local wire segment?",
      options: [
        "2000::/3",
        "fc00::/7 (Unique-Local)",
        "fe80::/10",
        "ff02::1/128",
      ],
      correct: 2,
      rationale:
        "Link-local addresses reside within the fe80::/10 prefix (typically fe80::/64). Every IPv6-enabled interface automatically generates a link-local address for local-segment neighbor discovery and router communication. Routers never forward link-local packets across subnets.",
    },
    {
      question: "Why is /64 considered the standard, mandatory subnet size for most conventional IPv6 LANs?",
      options: [
        "Because IPv6 routers cannot route any prefix longer than /64.",
        "Because Stateless Address Autoconfiguration (SLAAC) requires a 64-bit Interface Identifier (IID) to configure addresses automatically.",
        "To match the standard 64-byte minimum Ethernet frame size.",
        "Because /64 provides exactly 254 usable host addresses.",
      ],
      correct: 1,
      rationale:
        "RFC 4291 mandates that for all unicast addresses (except those starting with binary 000), the interface ID must be 64 bits. SLAAC relies on this 64-bit boundary to append host-generated interface identifiers to the advertised 64-bit network prefix.",
    },
    {
      question: "What protocol replaces IPv4 ARP for link-layer MAC address resolution in IPv6 networks?",
      options: [
        "Neighbor Discovery Protocol (NDP), utilizing ICMPv6 Neighbor Solicitation (NS) and Neighbor Advertisement (NA) messages",
        "DHCPv6 Address Resolution Agent",
        "Reverse Address Resolution Protocol (RARP)",
        "NAT64 Protocol Translation",
      ],
      correct: 0,
      rationale:
        "IPv6 eliminates broadcast entirely. Neighbor Discovery Protocol (NDP) uses ICMPv6 type 135 (Neighbor Solicitation) and type 136 (Neighbor Advertisement) directed to solicited-node multicast groups to resolve IPv6 addresses to Layer 2 MAC addresses.",
    },
    {
      question: "In Stateless Address Autoconfiguration (SLAAC), how does a client host learn its default gateway?",
      options: [
        "From the DHCPv6 Server Option 3 default router field.",
        "From the source link-local IPv6 address of the router that transmitted the Router Advertisement (RA).",
        "By querying the local DNS server for a gateway SRV record.",
        "By picking the first usable address in the /64 prefix (e.g. ::1).",
      ],
      correct: 1,
      rationale:
        "A critical difference in IPv6: DHCPv6 does not provide the default gateway! Instead, hosts learn their default router directly from ICMPv6 Router Advertisements (RAs). The router's link-local address is automatically installed into the host routing table as the next hop.",
    },
    {
      question: "What is the difference between Stateless DHCPv6 and Stateful DHCPv6?",
      options: [
        "Stateless DHCPv6 assigns IP addresses; Stateful DHCPv6 only provides DNS.",
        "Stateless DHCPv6 lets hosts form their own IP via SLAAC while providing additional parameters (such as DNS servers); Stateful DHCPv6 leases managed IPv6 addresses and tracks client state.",
        "Stateless DHCPv6 requires a router; Stateful DHCPv6 operates without routers.",
        "Stateless DHCPv6 is used exclusively for IPv4 translation.",
      ],
      correct: 1,
      rationale:
        "In Stateless DHCPv6 (indicated by RA flags M=0, O=1), hosts configure their IP address via SLAAC and query DHCPv6 only for auxiliary options (DNS, NTP, domain search lists). In Stateful DHCPv6 (flag M=1), the DHCPv6 server centrally allocates and leases the actual IPv6 addresses, tracking state similar to IPv4 DHCP.",
    },
    {
      question: "What does the 'Happy Eyeballs' algorithm (RFC 8305) accomplish in dual-stack client applications?",
      options: [
        "It compresses 128-bit IPv6 addresses into 32-bit hashes.",
        "It attempts parallel connections to IPv6 and IPv4 destinations, favoring IPv6 but rapidly falling back to IPv4 within ~250ms if IPv6 connectivity is broken or impaired.",
        "It encrypts DNS AAAA queries using TLS 1.3.",
        "It automatically translates IPv4 private addresses into IPv6 link-local addresses.",
      ],
      correct: 1,
      rationale:
        "Happy Eyeballs prevents dual-stack user experience degradation. When a domain has both A (IPv4) and AAAA (IPv6) records, Happy Eyeballs starts an IPv6 connection, but if no response arrives within a brief timer (~250ms), it initiates a parallel IPv4 connection and proceeds with whichever handshake completes first.",
    },
    {
      question: "How do NAT64 and DNS64 cooperate to allow IPv6-only clients to access legacy IPv4-only web servers?",
      options: [
        "DNS64 translates the client's MAC address; NAT64 converts TCP to UDP.",
        "DNS64 synthesizes a synthetic IPv6 AAAA record (using prefix 64:ff9b::/96 + the IPv4 hex) for IPv4-only domains; the client sends packets to this synthetic IPv6 address, which the NAT64 gateway translates into real IPv4 packets.",
        "NAT64 replaces the operating system kernel with an IPv4 emulator.",
        "DNS64 tunnels the IPv4 traffic inside an SSH tunnel.",
      ],
      correct: 1,
      rationale:
        "In an IPv6-only network, when a client queries an IPv4-only server, DNS64 synthesizes an AAAA record embedding the IPv4 address into the NAT64 prefix (e.g. 64:ff9b::192.0.2.1). The client routes to this IPv6 destination, and the NAT64 edge device translates the IPv6 header into an IPv4 header for delivery to the server.",
    },
    {
      question: "Why is RA Guard (Router Advertisement Guard) recommended on enterprise Layer 2 access switches?",
      options: [
        "To block all ICMPv6 traffic from entering the network.",
        "To drop unauthorized or rogue Router Advertisements on access edge ports, preventing rogue devices from hijacking the default gateway or advertising bogus prefixes.",
        "To accelerate Spanning Tree Protocol convergence.",
        "To compress IPv6 headers before transmission over Wi-Fi.",
      ],
      correct: 1,
      rationale:
        "Rogue or accidental Router Advertisements (e.g., from an employee running a tethering app or misconfigured hypervisor) can override client default gateways and inject malicious DNS servers (Man-in-the-Middle or DoS). RA Guard inspects incoming frames on switch access ports and drops unauthorized RAs before they reach other hosts.",
    },
  ];

  const [quizAnswers, setQuizAnswers] = useState({});
  const [submittedQuiz, setSubmittedQuiz] = useState(false);

  const handleSelectQuiz = (qIdx, optIdx) => {
    if (submittedQuiz) return;
    setQuizAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q, idx) => {
      if (quizAnswers[idx] === q.correct) score++;
    });
    return score;
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setSubmittedQuiz(false);
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      {/* Top Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#f6f4ee]/90 backdrop-blur-md border-b border-[#e7e3da] px-4 py-3 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/learning/networks")}
              className="p-2 rounded-xl hover:bg-stone-200/60 transition text-stone-600 hover:text-stone-900 cursor-pointer"
              title="Return to Computer Networks Overview"
            >
              <ArrowLeft size={18} />
            </button>
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#ea580c] font-bold">
                Computer Networks & Internet Engineering · Module 6
              </span>
              <h1 className="text-base sm:text-lg font-black tracking-tight text-stone-900">
                IPv6 Architecture, Modern Addressing & Transition Engineering
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100/80 text-emerald-800 border border-emerald-200">
              <ShieldCheck size={14} className="text-emerald-600" />
              University Core Track
            </span>
            <button
              onClick={() => setActiveTab("quiz")}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#ea580c] text-white hover:bg-[#c2410c] shadow-xs transition cursor-pointer"
            >
              Take IPv6 Quiz
            </button>
          </div>
        </div>
      </header>

      {/* Module Horizontal Track Navigation */}
      <div className="bg-[#f0ece1]/70 border-b border-[#e7e3da]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <ModuleNav track="networks" currentModuleId="ipv6" />
        </div>
      </div>

      {/* Sub-navigation Tabs */}
      <div className="bg-white/80 border-b border-[#e7e3da] sticky top-[57px] z-30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex overflow-x-auto no-scrollbar gap-2 py-2.5">
          <button
            onClick={() => setActiveTab("theory")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === "theory"
                ? "bg-stone-900 text-white shadow-xs"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200/80"
            }`}
          >
            <BookOpen size={14} />
            <span>Complete Curriculum (6.1 – 6.13)</span>
          </button>

          <button
            onClick={() => setActiveTab("notation-sim")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === "notation-sim"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200/80"
            }`}
          >
            <Maximize2 size={14} />
            <span>Address Compressor / Expander</span>
          </button>

          <button
            onClick={() => setActiveTab("subnet-sim")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === "subnet-sim"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200/80"
            }`}
          >
            <Split size={14} />
            <span>/48 to /64 Subnet Planner</span>
          </button>

          <button
            onClick={() => setActiveTab("ndp-sim")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === "ndp-sim"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200/80"
            }`}
          >
            <Workflow size={14} />
            <span>NDP & SLAAC Tracer</span>
          </button>

          <button
            onClick={() => setActiveTab("dualstack-sim")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === "dualstack-sim"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200/80"
            }`}
          >
            <Globe size={14} />
            <span>Dual-Stack & Happy Eyeballs</span>
          </button>

          <button
            onClick={() => setActiveTab("cli")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === "cli"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200/80"
            }`}
          >
            <Terminal size={14} />
            <span>CLI Diagnostic Reference</span>
          </button>

          <button
            onClick={() => setActiveTab("quiz")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === "quiz"
                ? "bg-purple-600 text-white shadow-xs"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200/80"
            }`}
          >
            <Award size={14} />
            <span>Exam & Assessment</span>
          </button>

          <button
            onClick={() => setActiveTab("lab-report")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === "lab-report"
                ? "bg-stone-800 text-white shadow-xs"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200/80"
            }`}
          >
            <FileText size={14} />
            <span>Engineering Report</span>
          </button>
        </div>
      </div>

      {/* Main Body Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 w-full flex-1">
        {/* ================================================================== */}
        {/* TAB 1: COMPLETE COMPREHENSIVE CURRICULUM (6.1 to 6.13)              */}
        {/* ================================================================== */}
        {activeTab === "theory" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Sticky Topic Outline */}
            <aside className="hidden lg:block col-span-1">
              <div className="sticky top-28 bg-white/80 p-5 rounded-3xl border border-[#e7e3da] shadow-xs space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 font-bold block">
                  Module 6 Sections
                </span>
                <nav className="space-y-1 text-xs font-medium">
                  {topics.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => scrollToSection(t.id)}
                      className={`w-full text-left px-3 py-2 rounded-xl transition cursor-pointer truncate block ${
                        activeTopic === t.id
                          ? "bg-orange-100/70 text-[#ea580c] font-bold"
                          : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                      }`}
                    >
                      {t.name}
                    </button>
                  ))}
                </nav>

                <div className="pt-4 border-t border-[#e7e3da] space-y-2">
                  <span className="text-[10px] font-mono uppercase text-stone-400 block font-semibold">
                    Hands-On Interactive Labs
                  </span>
                  <button
                    onClick={() => setActiveTab("notation-sim")}
                    className="w-full text-left px-3 py-1.5 rounded-lg text-xs bg-orange-50 text-[#ea580c] font-semibold hover:bg-orange-100 transition flex items-center justify-between"
                  >
                    <span>Address Compressor</span>
                    <ArrowRight size={12} />
                  </button>
                  <button
                    onClick={() => setActiveTab("subnet-sim")}
                    className="w-full text-left px-3 py-1.5 rounded-lg text-xs bg-emerald-50 text-emerald-800 font-semibold hover:bg-emerald-100 transition flex items-center justify-between"
                  >
                    <span>/48 to /64 Allocator</span>
                    <ArrowRight size={12} />
                  </button>
                  <button
                    onClick={() => setActiveTab("ndp-sim")}
                    className="w-full text-left px-3 py-1.5 rounded-lg text-xs bg-blue-50 text-blue-800 font-semibold hover:bg-blue-100 transition flex items-center justify-between"
                  >
                    <span>NDP & SLAAC Tracer</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </aside>

            {/* Right Educational Content Stream */}
            <main className="col-span-1 lg:col-span-3 space-y-12">
              {/* Module Hero Banner */}
              <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-[#ea580c] mb-4">
                  <Sparkles size={14} />
                  <span>Next-Generation Internet Architecture</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
                  IPv6 Architecture, Modern Addressing & Transition Engineering
                </h2>
                <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
                  How 128-bit hexadecimal addressing solves IPv4 exhaustion, how Neighbor Discovery
                  Protocol (NDP) replaces ARP, how Stateless Address Autoconfiguration (SLAAC) and
                  DHCPv6 automate host configuration, and how to engineer robust dual-stack enterprise
                  networks with NAT64 and DNS64 coexistence.
                </p>

                <div className="mt-6 pt-6 border-t border-[#e7e3da] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/60">
                    <span className="block text-[10px] font-mono text-stone-500 uppercase font-bold">Address Space</span>
                    <span className="text-sm font-extrabold text-stone-800">128 Bits (3.4×10^38)</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/60">
                    <span className="block text-[10px] font-mono text-stone-500 uppercase font-bold">Standard Subnet</span>
                    <span className="text-sm font-extrabold text-stone-800">/64 (18.4 Quintillion)</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/60">
                    <span className="block text-[10px] font-mono text-stone-500 uppercase font-bold">L2 Resolution</span>
                    <span className="text-sm font-extrabold text-stone-800">NDP (No Broadcast)</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/60">
                    <span className="block text-[10px] font-mono text-stone-500 uppercase font-bold">Autoconfiguration</span>
                    <span className="text-sm font-extrabold text-stone-800">SLAAC & DHCPv6</span>
                  </div>
                </div>
              </div>

              {/* ------------------------------------------------------------ */}
              {/* SECTION 6.1: WHY IPV6 IS NECESSARY                           */}
              {/* ------------------------------------------------------------ */}
              <section id="sec-6-1" className="scroll-mt-36 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 text-xs font-mono font-bold">
                    6.1
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    Why IPv6 is Necessary: The Mathematics of Address Exhaustion
                  </h3>
                </div>

                <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 space-y-6">
                  <p className="text-sm text-stone-700 leading-relaxed">
                    IPv4 provides a 32-bit address space yielding 4,294,967,296 addresses ($2^{32}$).
                    With billions of smartphones, IoT sensors, cloud virtual machines, and containers,
                    the global pool administered by IANA and regional internet registries (ARIN, RIPE,
                    APNIC) was officially exhausted.
                  </p>

                  <div className="p-5 rounded-2xl bg-stone-900 text-white font-mono text-xs space-y-2">
                    <span className="text-[10px] text-stone-400 uppercase tracking-widest block font-bold">
                      Address Space Comparison: 32-bit vs. 128-bit
                    </span>
                    <div className="grid gap-3 sm:grid-cols-2 text-stone-200">
                      <div>
                        <span className="text-amber-400 font-bold block">IPv4 (32 bits):</span>
                        2^32 = 4,294,967,296 total addresses
                      </div>
                      <div>
                        <span className="text-emerald-400 font-bold block">IPv6 (128 bits):</span>
                        2^128 = 340,282,366,920,938,463,463,374,607,431,768,211,456 addresses
                      </div>
                    </div>
                    <span className="text-[10px] text-stone-400 block pt-1">
                      That equates to approximately 6.67 × 10^23 addresses for every square meter of Earth's surface!
                    </span>
                  </div>

                  {/* IPv4 vs IPv6 Master Comparison Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border border-stone-200 rounded-2xl overflow-hidden">
                      <thead className="bg-stone-100 text-stone-700 font-mono uppercase text-[10px]">
                        <tr>
                          <th className="p-3">Architectural Feature</th>
                          <th className="p-3">IPv4</th>
                          <th className="p-3">IPv6</th>
                          <th className="p-3">Engineering Advantage in IPv6</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200 font-sans">
                        <tr>
                          <td className="p-3 font-semibold text-stone-900">Address Length</td>
                          <td className="p-3 font-mono text-stone-600">32 bits</td>
                          <td className="p-3 font-mono font-bold text-emerald-700">128 bits</td>
                          <td className="p-3 text-stone-600">Infinite hierarchical scaling; eliminates NAT requirement.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-stone-900">Address Representation</td>
                          <td className="p-3 font-mono text-stone-600">Dotted decimal (192.168.1.1)</td>
                          <td className="p-3 font-mono font-bold text-emerald-700">Hex hextets (2001:db8::1)</td>
                          <td className="p-3 text-stone-600">High information density; clean bit-boundary alignment.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-stone-900">Broadcast Support</td>
                          <td className="p-3 font-mono text-stone-600">Supported (255.255.255.255)</td>
                          <td className="p-3 font-mono font-bold text-emerald-700">Eliminated entirely!</td>
                          <td className="p-3 text-stone-600">Replaced by scoped multicast; stops broadcast storms.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-stone-900">L2 Address Resolution</td>
                          <td className="p-3 font-mono text-stone-600">ARP (Broadcast)</td>
                          <td className="p-3 font-mono font-bold text-emerald-700">NDP via ICMPv6 Multicast</td>
                          <td className="p-3 text-stone-600">Only targeted host NICs process packets; CPU efficiency.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-stone-900">Autoconfiguration</td>
                          <td className="p-3 font-mono text-stone-600">DHCP or static</td>
                          <td className="p-3 font-mono font-bold text-emerald-700">SLAAC and/or DHCPv6</td>
                          <td className="p-3 text-stone-600">Zero-touch plug-and-play without a dedicated server.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-stone-900">Base Header Design</td>
                          <td className="p-3 font-mono text-stone-600">Variable (20 – 60 bytes)</td>
                          <td className="p-3 font-mono font-bold text-emerald-700">Fixed 40 bytes</td>
                          <td className="p-3 text-stone-600">Hardware ASIC fast-path forwarding; no variable parsing.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-stone-900">Header Checksum</td>
                          <td className="p-3 font-mono text-stone-600">Calculated at every router hop</td>
                          <td className="p-3 font-mono font-bold text-emerald-700">Removed from base header</td>
                          <td className="p-3 text-stone-600">Eliminates checksum recalculation on TTL decrement.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 space-y-1">
                    <span className="font-bold flex items-center gap-1.5">
                      <AlertTriangle size={14} className="text-amber-600" />
                      Critical Performance Reality Check
                    </span>
                    <p className="leading-relaxed">
                      IPv6 does not automatically make web applications faster. Latency depends on BGP
                      routing paths, fiber distance, and peering agreements. Because the base IPv6 header
                      is 40 bytes (compared to 20 bytes in IPv4), small payloads carry slightly higher
                      protocol overhead.
                    </p>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------ */}
              {/* SECTION 6.2: IPV6 ADDRESS NOTATION & COMPRESSION             */}
              {/* ------------------------------------------------------------ */}
              <section id="sec-6-2" className="scroll-mt-36 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 text-xs font-mono font-bold">
                    6.2
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    IPv6 Address Notation, Hexadecimal Groups & Compression Rules
                  </h3>
                </div>

                <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 space-y-6">
                  <p className="text-sm text-stone-700 leading-relaxed">
                    An IPv6 address is written as eight 16-bit hexadecimal groups (hextets) separated by colons:
                    <br /><code className="text-[#ea580c] font-bold font-mono">2001:0db8:0001:0000:0000:0000:0000:0025</code>
                  </p>

                  {/* The Two Compression Rules */}
                  <div className="grid gap-4 sm:grid-cols-2 text-xs">
                    <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70 space-y-2">
                      <div className="flex items-center gap-2">
                        <Minimize2 size={16} className="text-[#ea580c]" />
                        <h4 className="font-bold text-stone-900 text-sm">Rule 1: Remove Leading Zeros</h4>
                      </div>
                      <p className="text-stone-600 leading-relaxed">
                        Leading zeros in any 16-bit hextet can be dropped:
                        <br />• <code className="font-mono text-stone-800 font-bold">0db8 &rarr; db8</code>
                        <br />• <code className="font-mono text-stone-800 font-bold">0001 &rarr; 1</code>
                        <br />• <code className="font-mono text-stone-800 font-bold">0000 &rarr; 0</code>
                        <br />• <code className="font-mono text-stone-800 font-bold">0025 &rarr; 25</code>
                        <br />Trailing or middle zeros must NEVER be dropped (<code className="font-mono">1020</code> is NOT <code className="font-mono">12</code>).
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70 space-y-2">
                      <div className="flex items-center gap-2">
                        <Maximize2 size={16} className="text-[#ea580c]" />
                        <h4 className="font-bold text-stone-900 text-sm">Rule 2: Consecutive Zeros to `::`</h4>
                      </div>
                      <p className="text-stone-600 leading-relaxed">
                        A single contiguous sequence of all-zero hextets can be replaced with a double colon (<code className="font-mono text-stone-800 font-bold">::</code>):
                        <br />• <code className="font-mono text-stone-800">2001:db8:1:0:0:0:0:25 &rarr; 2001:db8:1::25</code>
                        <br /><strong>Critical constraint:</strong> <code className="font-mono">::</code> can be used
                        <strong> only once per address</strong>. Using it twice makes the omitted zero count ambiguous!
                      </p>
                    </div>
                  </div>

                  {/* Expansion Algorithm */}
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-700 space-y-2">
                    <span className="font-bold text-stone-900 font-mono block">
                      Address Expansion Algorithm: Expanding 2001:db8::25
                    </span>
                    <ol className="list-decimal list-inside space-y-1 font-mono text-[11px] text-stone-600">
                      <li>Count visible hextets: <code className="text-stone-900">2001</code>, <code className="text-stone-900">db8</code>, <code className="text-stone-900">25</code> = 3 groups.</li>
                      <li>Calculate missing hextets: 8 - 3 = <strong>5 missing groups</strong> of zeros.</li>
                      <li>Replace `::` with five `0000` groups and pad leading zeros to 4 digits:</li>
                    </ol>
                    <div className="p-2.5 rounded-xl bg-stone-900 text-emerald-400 font-mono text-xs font-bold">
                      2001:0db8:0000:0000:0000:0000:0000:0025
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------ */}
              {/* SECTION 6.3: IPV6 ADDRESS TYPES & SCOPES                     */}
              {/* ------------------------------------------------------------ */}
              <section id="sec-6-3" className="scroll-mt-36 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 text-xs font-mono font-bold">
                    6.3
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    IPv6 Address Types, Scopes & Special Prefixes
                  </h3>
                </div>

                <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 space-y-6">
                  <p className="text-sm text-stone-700 leading-relaxed">
                    IPv6 categorizes addresses by <strong>scope</strong> (link-local, unique-local, global)
                    and <strong>transmission type</strong> (unicast, multicast, anycast).
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border border-stone-200 rounded-2xl overflow-hidden">
                      <thead className="bg-stone-100 text-stone-700 font-mono uppercase text-[10px]">
                        <tr>
                          <th className="p-3">Type</th>
                          <th className="p-3">Prefix / Format</th>
                          <th className="p-3">Scope & Routability</th>
                          <th className="p-3">Description & Purpose</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200 font-sans">
                        <tr>
                          <td className="p-3 font-mono font-bold text-emerald-700">Global Unicast</td>
                          <td className="p-3 font-mono">2000::/3</td>
                          <td className="p-3 font-semibold text-emerald-800">Global Internet</td>
                          <td className="p-3 text-stone-600">Publicly routable IPv6 addresses allocated by RIRs.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-blue-700">Link-Local</td>
                          <td className="p-3 font-mono">fe80::/10</td>
                          <td className="p-3 font-semibold text-blue-800">Local Wire Link Only</td>
                          <td className="p-3 text-stone-600">Mandatory on every interface; never routed; used for NDP and IGP next-hops.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-amber-700">Unique-Local (ULA)</td>
                          <td className="p-3 font-mono">fc00::/7 (fd00::/8)</td>
                          <td className="p-3 font-semibold text-amber-800">Private Enterprise Intranet</td>
                          <td className="p-3 text-stone-600">Equivalent to RFC 1918 private space; not routed on global Internet.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-purple-700">Multicast</td>
                          <td className="p-3 font-mono">ff00::/8</td>
                          <td className="p-3 font-semibold text-purple-800">Variable (Interface/Link/Global)</td>
                          <td className="p-3 text-stone-600">Delivered to all nodes listening to a multicast group.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-stone-900">Loopback</td>
                          <td className="p-3 font-mono">::1/128</td>
                          <td className="p-3 font-semibold text-stone-600">Host Internal Only</td>
                          <td className="p-3 text-stone-600">Equivalent to 127.0.0.1 in IPv4.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-stone-900">Documentation</td>
                          <td className="p-3 font-mono">2001:db8::/32</td>
                          <td className="p-3 font-semibold text-stone-600">RFC 3849 Teaching Only</td>
                          <td className="p-3 text-stone-600">Reserved for books and guides; never routed on production wires.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Important Well-Known Multicast Groups */}
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <span className="text-xs font-mono uppercase text-stone-600 font-bold block">
                      Critical Well-Known IPv6 Multicast Groups
                    </span>
                    <div className="grid gap-2 sm:grid-cols-2 text-xs font-mono">
                      <div className="p-2.5 rounded-xl bg-white border border-stone-200">
                        <strong className="text-purple-700 block">ff02::1</strong>
                        <span className="text-stone-600 font-sans text-[11px]">All-Nodes Multicast (Reaches every IPv6 device on local link).</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-stone-200">
                        <strong className="text-purple-700 block">ff02::2</strong>
                        <span className="text-stone-600 font-sans text-[11px]">All-Routers Multicast (Reaches all gateway routers on local link).</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------ */}
              {/* SECTION 6.4: IPV6 PREFIXES & SUBNETTING                      */}
              {/* ------------------------------------------------------------ */}
              <section id="sec-6-4" className="scroll-mt-36 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 text-xs font-mono font-bold">
                    6.4
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    IPv6 Prefixes, Hierarchical Subnetting & The Sacred /64 Rule
                  </h3>
                </div>

                <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 space-y-6">
                  <p className="text-sm text-stone-700 leading-relaxed">
                    Subnetting in IPv6 is radically simpler than IPv4. Because address space is abundant,
                    engineers never subnet to conserve individual host IPs. Instead, <strong>every standard
                    LAN subnet is assigned a /64 prefix</strong>.
                  </p>

                  {/* Why /64 is Sacred */}
                  <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
                    <span className="text-xs font-mono uppercase text-emerald-900 font-bold block">
                      Why /64 is the Universal LAN Standard
                    </span>
                    <div className="text-xl font-mono font-black text-emerald-800">
                      128 - 64 = 64 Interface Identifier Bits = 18.4 Quintillion Addresses
                    </div>
                    <p className="text-xs text-emerald-950 leading-relaxed">
                      Stateless Address Autoconfiguration (SLAAC) requires a /64 prefix to operate.
                      Even if an office VLAN has only 5 printers, assigning a /64 preserves routing
                      standardization and ensures feature compatibility across all operating systems.
                    </p>
                  </div>

                  {/* Subnetting a /48 Site Allocation */}
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                    <span className="text-xs font-mono uppercase text-stone-600 font-bold block">
                      Subnetting an Enterprise /48 Allocation (65,536 /64 Subnets)
                    </span>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      When an ISP delegates a <code className="font-mono font-bold text-stone-900">2001:db8:1200::/48</code> prefix,
                      the 4th hextet (bits 49 to 64) is the <strong>Subnet ID</strong>:
                    </p>
                    <div className="grid gap-2 sm:grid-cols-2 text-xs font-mono">
                      <div className="p-2.5 rounded-xl bg-white border border-stone-200">
                        <strong className="text-stone-900 block">2001:db8:1200:0001::/64</strong>
                        <span className="text-stone-500 font-sans text-[11px]">Engineering Dept (VLAN 10)</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-stone-200">
                        <strong className="text-stone-900 block">2001:db8:1200:0002::/64</strong>
                        <span className="text-stone-500 font-sans text-[11px]">Sales Dept (VLAN 20)</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-stone-200">
                        <strong className="text-stone-900 block">2001:db8:1200:0010::/64</strong>
                        <span className="text-stone-500 font-sans text-[11px]">Server Cluster (VLAN 30)</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-stone-200">
                        <strong className="text-stone-900 block">2001:db8:1200:00fe::/127</strong>
                        <span className="text-stone-500 font-sans text-[11px]">WAN Router P2P (RFC 6164)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------ */}
              {/* SECTION 6.5: NEIGHBOR DISCOVERY PROTOCOL (NDP)               */}
              {/* ------------------------------------------------------------ */}
              <section id="sec-6-5" className="scroll-mt-36 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 text-xs font-mono font-bold">
                    6.5
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    Neighbor Discovery Protocol (NDP — RFC 4861) & ICMPv6
                  </h3>
                </div>

                <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 space-y-6">
                  <p className="text-sm text-stone-700 leading-relaxed">
                    IPv6 eliminates Layer 2 ARP broadcasts in favor of <strong>NDP</strong>, built on
                    ICMPv6. NDP handles address resolution, router discovery, prefix discovery, duplicate
                    address detection, and next-hop reachability.
                  </p>

                  {/* 5 Core NDP Messages */}
                  <div className="grid gap-3 sm:grid-cols-2 text-xs">
                    <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                      <strong className="text-blue-700 block font-mono">1. Router Solicitation (RS — Type 133)</strong>
                      <span className="text-stone-600">Host multicasts to ff02::2 requesting immediate Router Advertisements.</span>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                      <strong className="text-emerald-700 block font-mono">2. Router Advertisement (RA — Type 134)</strong>
                      <span className="text-stone-600">Router beacons prefix, flags (M, O), MTU, and default router lifetime.</span>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                      <strong className="text-amber-700 block font-mono">3. Neighbor Solicitation (NS — Type 135)</strong>
                      <span className="text-stone-600">Requests link-layer MAC of a neighbor or verifies address uniqueness (DAD).</span>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                      <strong className="text-purple-700 block font-mono">4. Neighbor Advertisement (NA — Type 136)</strong>
                      <span className="text-stone-600">Supplies MAC address in response to an NS or announces link-layer changes.</span>
                    </div>
                  </div>

                  {/* Solicited-Node Multicast */}
                  <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 text-xs text-blue-950 space-y-1">
                    <span className="font-bold block">Solicited-Node Multicast Optimization:</span>
                    <p className="leading-relaxed">
                      Instead of broadcasting to all devices, an NS is addressed to <code className="font-mono font-bold">ff02::1:ffxx:xxxx</code>
                      (formed by appending the target's last 24 bits to ff02::1:ff00:0/104). The switch
                      hashes this to Ethernet multicast MAC <code className="font-mono">33:33:ff:xx:xx:xx</code>,
                      ensuring only the intended host's NIC silicon wakes up to inspect the frame!
                    </p>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------ */}
              {/* SECTION 6.6: SLAAC AUTOCONFIGURATION                         */}
              {/* ------------------------------------------------------------ */}
              <section id="sec-6-6" className="scroll-mt-36 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 text-xs font-mono font-bold">
                    6.6
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    SLAAC: Stateless Address Autoconfiguration (RFC 4862)
                  </h3>
                </div>

                <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 space-y-6">
                  <p className="text-sm text-stone-700 leading-relaxed">
                    <strong>SLAAC</strong> enables true plug-and-play network attachment without a DHCP
                    server. The host learns the /64 network prefix from the local router's RA and
                    generates its own 64-bit Interface Identifier (IID).
                  </p>

                  {/* 3 Methods of Generating Interface IDs */}
                  <div className="grid gap-3 sm:grid-cols-3 text-xs">
                    <div className="p-3.5 rounded-2xl bg-stone-100 border border-stone-200 space-y-1">
                      <strong className="text-stone-900 block font-mono">1. EUI-64 (Historical)</strong>
                      <span className="text-stone-600">
                        Takes 48-bit MAC, inserts <code className="font-mono">FF:FE</code> in middle, and flips the 7th U/L bit.
                        Warning: Exposes hardware MAC and enables web tracking!
                      </span>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-stone-100 border border-stone-200 space-y-1">
                      <strong className="text-stone-900 block font-mono">2. Stable Privacy (RFC 7217)</strong>
                      <span className="text-stone-600">
                        Cryptographically hashes prefix, interface name, and host secret key. Stable per network, but untrackable across networks.
                      </span>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-stone-100 border border-stone-200 space-y-1">
                      <strong className="text-stone-900 block font-mono">3. Temporary (RFC 4941)</strong>
                      <span className="text-stone-600">
                        Generates randomized addresses rotated every 24 hours for outbound web browsing, preventing ISP/advertiser tracking.
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------ */}
              {/* SECTION 6.7: DHCPV6 (STATELESS & STATEFUL)                   */}
              {/* ------------------------------------------------------------ */}
              <section id="sec-6-7" className="scroll-mt-36 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 text-xs font-mono font-bold">
                    6.7
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    DHCPv6: Stateless vs. Stateful Operating Modes
                  </h3>
                </div>

                <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 space-y-6">
                  <p className="text-sm text-stone-700 leading-relaxed">
                    DHCPv6 operates in two distinct modes governed by the <strong>Managed (M)</strong> and
                    <strong> Other (O)</strong> flag bits in the router's Router Advertisement.
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2 text-xs">
                    <div className="p-4 rounded-2xl border border-stone-200 bg-white space-y-2">
                      <span className="font-mono font-bold text-blue-700 block">Stateless DHCPv6 (M=0, O=1)</span>
                      <p className="text-stone-600 leading-relaxed">
                        Hosts form their own IPv6 addresses via SLAAC. They send an Information-Request
                        to DHCPv6 solely to receive auxiliary configuration (DNS servers, domain search lists).
                        Server maintains zero lease state.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl border border-stone-200 bg-white space-y-2">
                      <span className="font-mono font-bold text-emerald-700 block">Stateful DHCPv6 (M=1)</span>
                      <p className="text-stone-600 leading-relaxed">
                        The DHCPv6 server leases centrally managed IPv6 addresses and tracks leases in
                        a database, mimicking IPv4 DHCP. Used in high-compliance enterprises requiring
                        strict IP auditing.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-200 text-xs text-orange-950 space-y-1">
                    <span className="font-bold block">The Gateway Axiom in IPv6:</span>
                    <p className="leading-relaxed">
                      DHCPv6 does NOT provide the default gateway address! Unlike IPv4 DHCP Option 3,
                      an IPv6 host ALWAYS learns its default router from ICMPv6 Router Advertisements.
                    </p>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------ */}
              {/* SECTION 6.8: DUAL-STACK NETWORKING                           */}
              {/* ------------------------------------------------------------ */}
              <section id="sec-6-8" className="scroll-mt-36 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 text-xs font-mono font-bold">
                    6.8
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    Dual-Stack Networking & Happy Eyeballs (RFC 8305)
                  </h3>
                </div>

                <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 space-y-4 text-xs text-stone-700">
                  <p className="text-sm">
                    In dual-stack networks, devices run IPv4 and IPv6 concurrently on the same interface.
                    When resolving a domain, DNS returns both an <strong>A record</strong> (IPv4) and a
                    <strong> AAAA record</strong> (IPv6).
                  </p>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <span className="font-bold text-stone-900 font-mono block">Happy Eyeballs (RFC 8305) Execution</span>
                    <p className="text-stone-600">
                      Modern web browsers race connection attempts: they initiate a TCP SYN over IPv6,
                      wait a brief 250ms fallback timer, and if IPv6 has not connected, start a parallel
                      IPv4 connection. Whichever completes first wins the race, eliminating connection hangs!
                    </p>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------ */}
              {/* SECTION 6.9: TRANSITION MECHANISMS (NAT64 & DNS64)           */}
              {/* ------------------------------------------------------------ */}
              <section id="sec-6-9" className="scroll-mt-36 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 text-xs font-mono font-bold">
                    6.9
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    IPv4/IPv6 Coexistence & Transition: NAT64, DNS64 & 464XLAT
                  </h3>
                </div>

                <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 space-y-4 text-xs text-stone-700">
                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                      <strong className="text-stone-900 block font-mono">Dual-Stack</strong>
                      <span className="text-stone-600">Native IPv4 and IPv6 running side-by-side. Preferred enterprise strategy.</span>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                      <strong className="text-stone-900 block font-mono">NAT64 + DNS64</strong>
                      <span className="text-stone-600">Enables IPv6-only clients to communicate with legacy IPv4-only Internet servers.</span>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                      <strong className="text-stone-900 block font-mono">464XLAT</strong>
                      <span className="text-stone-600">Used by cellular carriers (T-Mobile) to run IPv4 apps over pure IPv6 RAN backbones.</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------ */}
              {/* SECTION 6.10: IPV6 SECURITY                                  */}
              {/* ------------------------------------------------------------ */}
              <section id="sec-6-10" className="scroll-mt-36 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 text-xs font-mono font-bold">
                    6.10
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    IPv6 Security, RA Guard & Common Configuration Pitfalls
                  </h3>
                </div>

                <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 space-y-4 text-xs text-stone-700">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="p-3.5 rounded-2xl border border-red-200 bg-red-50/40 space-y-1">
                      <strong className="text-red-900 block font-mono">1. Rogue Router Advertisements</strong>
                      <span className="text-stone-600">Rogue devices beacon RAs, redirecting gateway traffic. Defense: Enable RA Guard on switch ports.</span>
                    </div>
                    <div className="p-3.5 rounded-2xl border border-red-200 bg-red-50/40 space-y-1">
                      <strong className="text-red-900 block font-mono">2. Indiscriminately Blocking ICMPv6</strong>
                      <span className="text-stone-600">Blocking all ICMPv6 breaks NDP, DAD, and Path MTU Discovery (Packet Too Big). Never block ICMPv6 blindly!</span>
                    </div>
                    <div className="p-3.5 rounded-2xl border border-red-200 bg-red-50/40 space-y-1">
                      <strong className="text-red-900 block font-mono">3. Dual-Stack Firewall Bypass</strong>
                      <span className="text-stone-600">Security teams configure iptables for IPv4 but forget ip6tables, leaving IPv6 exposed.</span>
                    </div>
                    <div className="p-3.5 rounded-2xl border border-red-200 bg-red-50/40 space-y-1">
                      <strong className="text-red-900 block font-mono">4. VPN IPv6 Data Leaks</strong>
                      <span className="text-stone-600">VPN tunnels only IPv4 traffic while IPv6 leaks unencrypted over local Wi-Fi.</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------ */}
              {/* SECTION 6.11: PRACTICAL TOOLS & TROUBLESHOOTING              */}
              {/* ------------------------------------------------------------ */}
              <section id="sec-6-11" className="scroll-mt-36 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 text-xs font-mono font-bold">
                    6.11
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    Practical Tools & 8-Step Troubleshooting Sequence
                  </h3>
                </div>

                <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 space-y-3 text-xs text-stone-700">
                  <ol className="list-decimal list-inside space-y-1 font-mono text-[11px] text-stone-600">
                    <li><strong>Check Interface State:</strong> Ensure link is UP (<code className="text-stone-900">ip link show</code>).</li>
                    <li><strong>Verify Link-Local Address:</strong> Confirm interface has an active <code className="text-stone-900">fe80::</code> address.</li>
                    <li><strong>Verify Global Address:</strong> Confirm /64 prefix and global address formation.</li>
                    <li><strong>Check Default Route:</strong> Verify host learned default router via RA (<code className="text-stone-900">ip -6 route show</code>).</li>
                    <li><strong>Verify Neighbor Discovery:</strong> Check resolved next-hop MAC in neighbor cache (<code className="text-stone-900">ip -6 neigh show</code>).</li>
                    <li><strong>Ping Local Gateway:</strong> Test reachability to router link-local address (<code className="text-stone-900">ping -6 fe80::1%eth0</code>).</li>
                    <li><strong>Test Routed Connectivity:</strong> Ping remote IPv6 destination (<code className="text-stone-900">ping -6 2001:4860:4860::8888</code>).</li>
                    <li><strong>Inspect DNS & Firewall:</strong> Test AAAA resolution and ensure stateful firewall permits return traffic.</li>
                  </ol>
                </div>
              </section>

              {/* ------------------------------------------------------------ */}
              {/* SECTION 6.12: PRACTICAL LAB                                  */}
              {/* ------------------------------------------------------------ */}
              <section id="sec-6-12" className="scroll-mt-36 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 text-xs font-mono font-bold">
                    6.12
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    Practical Laboratory: Configure & Verify Dual-Subnet IPv6
                  </h3>
                </div>

                <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 space-y-4 text-xs text-stone-700">
                  <p className="text-sm">
                    Topology: Two LANs connected through router R1. PC-A on LAN A (<code className="font-mono">2001:db8:10:1::/64</code>)
                    communicating with PC-B on LAN B (<code className="font-mono">2001:db8:10:2::/64</code>).
                  </p>

                  {/* Interactive Verification Checklist */}
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-stone-900 font-mono">
                        Lab Verification Checklist ({completedChecklistCount} of 6 Completed)
                      </span>
                      <button
                        onClick={() =>
                          setLabChecklist({
                            r1Interfaces: false,
                            pcPrefixes: false,
                            pcGateways: false,
                            pingLocalRouter: false,
                            pingRoutedPC: false,
                            inspectNdp: false,
                          })
                        }
                        className="text-[11px] font-bold text-stone-500 hover:text-stone-800"
                      >
                        Reset Checklist
                      </button>
                    </div>

                    <div className="space-y-1.5">
                      {[
                        { key: "r1Interfaces", text: "Confirm both router interfaces are UP with 'ipv6 unicast-routing'" },
                        { key: "pcPrefixes", text: "Verify PC-A and PC-B configured with correct /64 subnet prefixes" },
                        { key: "pcGateways", text: "Verify each PC has the correct router SVI default gateway" },
                        { key: "pingLocalRouter", text: "Test PC-A to local router gateway ping reachability" },
                        { key: "pingRoutedPC", text: "Test PC-A to PC-B routed cross-subnet ping reachability" },
                        { key: "inspectNdp", text: "Inspect IPv6 neighbor table ('ip -6 neigh' or Wireshark ICMPv6)" },
                      ].map((item) => (
                        <label
                          key={item.key}
                          className="flex items-center gap-2.5 p-2 rounded-xl bg-white border border-stone-200 hover:bg-stone-50 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={labChecklist[item.key]}
                            onChange={() => toggleChecklistItem(item.key)}
                            className="rounded accent-[#ea580c]"
                          />
                          <span className={labChecklist[item.key] ? "line-through text-stone-400" : "text-stone-800"}>
                            {item.text}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------ */}
              {/* SECTION 6.13: ASSESSMENT & CAPSTONE                          */}
              {/* ------------------------------------------------------------ */}
              <section id="sec-6-13" className="scroll-mt-36 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 text-xs font-mono font-bold">
                    6.13
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    Capstone Project & Knowledge Assessment
                  </h3>
                </div>

                <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 space-y-4 text-xs text-stone-700">
                  <p className="text-sm">
                    Design a production IPv6 addressing and migration architecture for an enterprise
                    with headquarters, two regional branch offices, DMZ servers, and guest Wi-Fi.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <button
                      onClick={() => setActiveTab("quiz")}
                      className="px-4 py-2 rounded-xl bg-purple-600 text-white font-bold text-xs hover:bg-purple-700 transition cursor-pointer"
                    >
                      Start 10-Question Knowledge Exam
                    </button>
                    <button
                      onClick={() => setActiveTab("lab-report")}
                      className="px-4 py-2 rounded-xl bg-stone-800 text-white font-bold text-xs hover:bg-stone-900 transition cursor-pointer"
                    >
                      Download Engineering Report Template
                    </button>
                  </div>
                </div>
              </section>
            </main>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 2: IPV6 ADDRESS COMPRESSOR & EXPANDER                          */}
        {/* ================================================================== */}
        {activeTab === "notation-sim" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#ea580c] font-bold">
                Interactive Simulator 1
              </span>
              <h3 className="text-xl font-black text-stone-900">
                IPv6 Address Compressor, Expander & Hextet Analyzer
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                Enter any 128-bit IPv6 address in full or compressed format. Observe Rule 1 (leading zero removal)
                and Rule 2 (consecutive zero compression to `::`) executed step-by-step.
              </p>
            </div>

            {/* Input */}
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
              <label className="text-xs font-bold text-stone-700 block">
                Enter IPv6 Address (Full or Shortened):
              </label>
              <input
                type="text"
                value={inputIpv6}
                onChange={(e) => setInputIpv6(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-stone-300 bg-white font-mono text-sm font-bold"
                placeholder="2001:0db8:0001:0000:0000:0000:0000:0025"
              />
              <div className="flex flex-wrap gap-2 pt-1 text-xs">
                <span className="text-stone-500 text-[11px] self-center">Presets:</span>
                <button
                  onClick={() => setInputIpv6("2001:0db8:0001:0000:0000:0000:0000:0025")}
                  className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-700 font-mono text-[11px] cursor-pointer hover:bg-stone-300"
                >
                  Textbook Example
                </button>
                <button
                  onClick={() => setInputIpv6("fe80:0000:0000:0000:0a12:34ff:fe56:7890")}
                  className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-700 font-mono text-[11px] cursor-pointer hover:bg-stone-300"
                >
                  Link-Local Address
                </button>
                <button
                  onClick={() => setInputIpv6("0000:0000:0000:0000:0000:0000:0000:0001")}
                  className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-700 font-mono text-[11px] cursor-pointer hover:bg-stone-300"
                >
                  Loopback (::1)
                </button>
              </div>
            </div>

            {/* Hextet Decomposition Grid */}
            <div className="p-5 rounded-2xl bg-stone-900 text-white font-mono text-xs space-y-3">
              <span className="text-[10px] text-stone-400 uppercase tracking-widest block font-bold">
                8 Hextets Decomposition (16 Bits Each &bull; Total = 128 Bits)
              </span>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 text-center">
                {parsedIpv6.hextets.map((hexVal, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-stone-800 border border-stone-700">
                    <span className="text-[9px] text-stone-400 block">Hextet {idx + 1}</span>
                    <span className="text-sm font-bold text-amber-400">{hexVal}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step-by-Step Compression Breakdown */}
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="p-4 rounded-2xl border border-stone-200 bg-white space-y-1">
                <span className="text-[10px] font-mono uppercase text-stone-500 font-bold">Full 32-Hex Format</span>
                <div className="text-xs font-mono font-bold text-stone-800 break-all mt-1">
                  {parsedIpv6.full}
                </div>
                <span className="text-[10px] text-stone-500">All 32 hex digits with leading zeros</span>
              </div>

              <div className="p-4 rounded-2xl border border-stone-200 bg-white space-y-1">
                <span className="text-[10px] font-mono uppercase text-stone-500 font-bold">Rule 1: Remove Leading Zeros</span>
                <div className="text-xs font-mono font-bold text-blue-700 break-all mt-1">
                  {parsedIpv6.leadingZerosRemoved}
                </div>
                <span className="text-[10px] text-stone-500">Each hextet stripped of leading 0s</span>
              </div>

              <div className="p-4 rounded-2xl border border-emerald-200 bg-emerald-50/50 space-y-1">
                <span className="text-[10px] font-mono uppercase text-emerald-900 font-bold">Rule 2: Canonical RFC 5952</span>
                <div className="text-sm font-mono font-black text-emerald-800 break-all mt-1">
                  {parsedIpv6.compressed}
                </div>
                <span className="text-[10px] text-emerald-700">Longest run of zeros collapsed to ::</span>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 3: IPV6 /48 TO /64 SUBNET PLANNER                              */}
        {/* ================================================================== */}
        {activeTab === "subnet-sim" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#ea580c] font-bold">
                  Interactive Simulator 2
                </span>
                <h3 className="text-xl font-black text-stone-900">
                  IPv6 /48 to /64 Subnet Hierarchy Planner
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  An enterprise /48 delegation provides 16 bits of subnetting space ($2^{16} = 65,536$ distinct /64 LAN subnets).
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-stone-700">Base /48 Prefix:</span>
                <input
                  type="text"
                  value={basePrefix48}
                  onChange={(e) => setBasePrefix48(e.target.value)}
                  className="p-1.5 rounded-xl border border-stone-300 bg-white font-mono text-xs font-bold w-40"
                />
              </div>
            </div>

            {/* Department Allocations Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-stone-200 rounded-2xl overflow-hidden">
                <thead className="bg-stone-100 text-stone-700 font-mono uppercase text-[10px]">
                  <tr>
                    <th className="p-3">Department / Network Zone</th>
                    <th className="p-3">Subnet ID (4th Hextet)</th>
                    <th className="p-3">Allocated /64 Prefix</th>
                    <th className="p-3">Router SVI Gateway</th>
                    <th className="p-3">Address Capacity & Method</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 font-mono">
                  {ipv6SubnetAllocations.map((alloc, idx) => (
                    <tr key={idx} className="hover:bg-orange-50/40">
                      <td className="p-3 font-sans font-bold text-stone-900">
                        {alloc.name}
                        <span className="block text-[10px] font-normal text-stone-500 font-mono">VLAN {alloc.vlan} &bull; {alloc.purpose}</span>
                      </td>
                      <td className="p-3 font-bold text-[#ea580c]">{alloc.hexId}</td>
                      <td className="p-3 font-bold text-stone-800">
                        {alloc.p2pPrefix || alloc.subnetPrefix}
                      </td>
                      <td className="p-3 text-blue-700">{alloc.gatewaySvi}</td>
                      <td className="p-3 text-emerald-700 font-bold text-[11px] font-sans">
                        {alloc.p2pPrefix ? "2 Hosts (RFC 6164 P2P)" : "18.4 Quintillion (SLAAC)"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div>
                <span className="font-bold text-stone-800 block">Available /64 Subnet Pool:</span>
                <span className="text-stone-600">
                  {ipv6SubnetAllocations.length} subnets allocated &bull; 65,530 /64 subnets remaining for future campus sites.
                </span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-emerald-100 text-emerald-900 font-mono font-bold">
                100% SLAAC Compatible &bull; Zero Fragmentation
              </div>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 4: NDP & SLAAC PACKET FLOW TRACER                              */}
        {/* ================================================================== */}
        {activeTab === "ndp-sim" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#ea580c] font-bold">
                Interactive Simulator 3
              </span>
              <h3 className="text-xl font-black text-stone-900">
                Neighbor Discovery Protocol (NDP) & SLAAC Packet Flow Tracer
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                Step through how an IPv6 client boots, generates a link-local address, runs Duplicate Address Detection (DAD),
                solicits routers, and autoconfigures a globally routable address.
              </p>
            </div>

            {/* Stepper Buttons */}
            <div className="grid grid-cols-5 gap-2">
              {ndpFlowSteps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setNdpStep(idx)}
                  className={`p-3 rounded-2xl border text-left transition cursor-pointer ${
                    ndpStep === idx
                      ? "border-orange-500 bg-orange-50/80 text-orange-950 font-bold"
                      : "border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100"
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase block text-stone-400">Step {idx + 1}</span>
                  <span className="text-xs truncate block">{step.title.split(":")[1]}</span>
                </button>
              ))}
            </div>

            {/* Step Detail Card */}
            <div className="p-6 rounded-2xl border border-stone-200 bg-white space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h4 className="font-extrabold text-stone-900 text-base">
                  {ndpFlowSteps[ndpStep].title}
                </h4>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-orange-100 text-[#ea580c]">
                  {ndpFlowSteps[ndpStep].icmpType}
                </span>
              </div>

              <div className="grid gap-2 sm:grid-cols-2 text-xs font-mono bg-stone-50 p-3 rounded-xl border border-stone-200">
                <div><strong>Sender:</strong> {ndpFlowSteps[ndpStep].sender}</div>
                <div><strong>Destination:</strong> {ndpFlowSteps[ndpStep].dest}</div>
              </div>

              <p className="text-xs text-stone-700 leading-relaxed">
                {ndpFlowSteps[ndpStep].desc}
              </p>

              <div className="p-4 rounded-xl bg-stone-900 text-white font-mono text-xs space-y-1">
                <span className="text-[10px] text-stone-400 uppercase tracking-widest block font-bold">
                  Network Wire Packet State
                </span>
                <p className="text-emerald-400">{ndpFlowSteps[ndpStep].packet}</p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                <button
                  onClick={() => setNdpStep((prev) => Math.max(0, prev - 1))}
                  disabled={ndpStep === 0}
                  className="px-3 py-1.5 rounded-xl border border-stone-200 text-xs font-bold text-stone-600 disabled:opacity-40 cursor-pointer"
                >
                  Previous Step
                </button>
                <button
                  onClick={() => setNdpStep((prev) => Math.min(ndpFlowSteps.length - 1, prev + 1))}
                  disabled={ndpStep === ndpFlowSteps.length - 1}
                  className="px-4 py-1.5 rounded-xl bg-[#ea580c] text-white text-xs font-bold disabled:opacity-40 hover:bg-[#c2410c] cursor-pointer"
                >
                  Next Step
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 5: DUAL-STACK DNS & HAPPY EYEBALLS                              */}
        {/* ================================================================== */}
        {activeTab === "dualstack-sim" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#ea580c] font-bold">
                Interactive Simulator 4
              </span>
              <h3 className="text-xl font-black text-stone-900">
                Dual-Stack DNS & Happy Eyeballs Connection Racer (RFC 8305)
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                Observe how client operating systems issue parallel A (IPv4) and AAAA (IPv6) queries,
                prioritize IPv6 with an asynchronous 250ms fallback timer, and establish connection with zero latency delay.
              </p>
            </div>

            {/* Input & Action */}
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex-1 min-w-[260px]">
                <label className="text-xs font-bold text-stone-700 block mb-1">
                  Destination Hostname:
                </label>
                <input
                  type="text"
                  value={dualStackDomain}
                  onChange={(e) => setDualStackDomain(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-stone-300 bg-white font-mono text-sm font-bold"
                  placeholder="prepspaces.com"
                />
              </div>

              <div className="self-end">
                <button
                  onClick={handleSimulateDualStack}
                  disabled={resolutionState === "resolving"}
                  className="py-2.5 px-5 rounded-xl bg-[#ea580c] text-white text-xs font-bold hover:bg-[#c2410c] shadow-xs cursor-pointer flex items-center gap-2 disabled:opacity-50"
                >
                  <Play size={14} />
                  <span>Execute Happy Eyeballs Race</span>
                </button>
              </div>
            </div>

            {/* Execution Log */}
            {happyEyeballsLog.length > 0 && (
              <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-2">
                <span className="text-[10px] text-stone-400 uppercase tracking-widest block font-bold">
                  Connection Race Diagnostic Log
                </span>
                <div className="space-y-1">
                  {happyEyeballsLog.map((logMsg, i) => (
                    <div
                      key={i}
                      className={
                        logMsg.includes("ESTABLISHED")
                          ? "text-emerald-400 font-bold"
                          : logMsg.includes("IPv6")
                          ? "text-blue-300"
                          : "text-stone-300"
                      }
                    >
                      {logMsg}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 6: PRACTICAL DIAGNOSTIC CLI REFERENCE                          */}
        {/* ================================================================== */}
        {activeTab === "cli" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#ea580c] font-bold">
                Practical Diagnostics Reference
              </span>
              <h3 className="text-xl font-black text-stone-900">
                Linux & Windows IPv6 Command Center
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                Copy production commands for inspecting IPv6 addresses, NDP neighbors, routing tables, and ICMPv6 packet traces.
              </p>
            </div>

            <div className="space-y-4">
              {/* Linux Commands */}
              <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-emerald-400 font-bold">Linux Kernel IPv6 Commands (iproute2 & tcpdump)</span>
                  <button
                    onClick={() =>
                      copyCode(
                        `# Display all IPv6 addresses and scope
ip -6 addr show

# Inspect IPv6 neighbor table (NDP cache)
ip -6 neigh show

# Inspect IPv6 routing table
ip -6 route show

# Ping local router gateway link-local address (requires interface %eth0)
ping -6 fe80::1%eth0

# Capture live ICMPv6 packets (RS, RA, NS, NA)
sudo tcpdump -ni any icmp6`,
                        "linux-ipv6-cli"
                      )
                    }
                    className="flex items-center gap-1 px-2.5 py-1 rounded bg-stone-800 text-stone-300 hover:text-white text-[11px] cursor-pointer"
                  >
                    {copiedCodeId === "linux-ipv6-cli" ? <Check size={12} /> : <Copy size={12} />}
                    <span>{copiedCodeId === "linux-ipv6-cli" ? "Copied" : "Copy Linux Commands"}</span>
                  </button>
                </div>
                <pre className="text-stone-300 overflow-x-auto leading-relaxed">
{`# 1. View assigned IPv6 addresses
$ ip -6 addr show eth0
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500
    inet6 2001:db8:acad:1:a12:34ff:fe56:7890/64 scope global dynamic mngtmpaddr
       valid_lft 86392sec preferred_lft 14392sec
    inet6 fe80::a12:34ff:fe56:7890/64 scope link
       valid_lft forever preferred_lft forever

# 2. View NDP neighbor cache (replaces arp -a)
$ ip -6 neigh show
fe80::1 dev eth0 lladdr 00:00:5e:00:53:01 REACHABLE
2001:db8:acad:1::10 dev eth0 lladdr 52:54:00:12:34:56 STALE`}
                </pre>
              </div>

              {/* Windows Commands */}
              <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 font-bold">Windows IPv6 Diagnostics</span>
                  <button
                    onClick={() =>
                      copyCode(
                        `# Inspect Windows IPv6 configuration
ipconfig /all

# Ping IPv6 address
ping -6 2001:4860:4860::8888

# View IPv6 routing table
route print -6

# Trace IPv6 route
tracert -6 2001:4860:4860::8888`,
                        "windows-ipv6-cli"
                      )
                    }
                    className="flex items-center gap-1 px-2.5 py-1 rounded bg-stone-800 text-stone-300 hover:text-white text-[11px] cursor-pointer"
                  >
                    {copiedCodeId === "windows-ipv6-cli" ? <Check size={12} /> : <Copy size={12} />}
                    <span>{copiedCodeId === "windows-ipv6-cli" ? "Copied" : "Copy Windows Commands"}</span>
                  </button>
                </div>
                <pre className="text-stone-300 overflow-x-auto leading-relaxed">
{`C:\\> ipconfig /all
Ethernet adapter Ethernet:
   IPv6 Address. . . . . . . . . . . : 2001:db8:acad:1:a12:34ff:fe56:7890(Preferred)
   Temporary IPv6 Address. . . . . . : 2001:db8:acad:1:88a1:e402:1120:f43a(Preferred)
   Link-local IPv6 Address . . . . . : fe80::a12:34ff:fe56:7890%12(Preferred)
   Default Gateway . . . . . . . . . : fe80::1%12`}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 7: KNOWLEDGE ASSESSMENT QUIZ                                   */}
        {/* ================================================================== */}
        {activeTab === "quiz" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-purple-600 font-bold">
                  Module 6 Knowledge Assessment
                </span>
                <h3 className="text-xl font-black text-stone-900">
                  IPv6 & Modern Addressing Engineering Exam
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  10 university-level questions testing 128-bit notation, NDP, SLAAC, DHCPv6, Happy Eyeballs, and NAT64.
                </p>
              </div>

              {submittedQuiz && (
                <div className="flex items-center gap-3">
                  <div className="px-4 py-2 rounded-2xl bg-purple-100 text-purple-900 font-mono font-bold text-sm">
                    Score: {calculateScore()} / {quizQuestions.length} ({((calculateScore() / quizQuestions.length) * 100).toFixed(0)}%)
                  </div>
                  <button
                    onClick={resetQuiz}
                    className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-600 cursor-pointer"
                    title="Retry Exam"
                  >
                    <RotateCcw size={16} />
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-6 pt-2">
              {quizQuestions.map((q, qIdx) => {
                const userAns = quizAnswers[qIdx];
                const isCorrect = userAns === q.correct;

                return (
                  <div
                    key={qIdx}
                    className={`p-5 rounded-2xl border transition ${
                      submittedQuiz
                        ? isCorrect
                          ? "border-emerald-300 bg-emerald-50/40"
                          : "border-red-300 bg-red-50/40"
                        : "border-stone-200 bg-stone-50/60"
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="font-mono text-xs font-bold text-[#ea580c] mt-0.5">
                        Q{qIdx + 1}.
                      </span>
                      <div className="space-y-3 flex-1">
                        <p className="text-xs sm:text-sm font-bold text-stone-900 leading-snug">
                          {q.question}
                        </p>

                        <div className="space-y-2">
                          {q.options.map((opt, optIdx) => {
                            const isSelected = userAns === optIdx;
                            let btnStyle =
                              "border-stone-200 bg-white text-stone-700 hover:border-orange-300";

                            if (submittedQuiz) {
                              if (optIdx === q.correct) {
                                btnStyle = "border-emerald-500 bg-emerald-100/80 text-emerald-950 font-bold";
                              } else if (isSelected) {
                                btnStyle = "border-red-500 bg-red-100/80 text-red-950 line-through";
                              } else {
                                btnStyle = "border-stone-200 bg-white/50 text-stone-400";
                              }
                            } else if (isSelected) {
                              btnStyle = "border-orange-500 bg-orange-50 text-orange-950 font-bold";
                            }

                            return (
                              <button
                                key={optIdx}
                                onClick={() => handleSelectQuiz(qIdx, optIdx)}
                                className={`w-full text-left p-3 rounded-xl border text-xs transition cursor-pointer flex items-center justify-between ${btnStyle}`}
                              >
                                <span>{opt}</span>
                                {submittedQuiz && optIdx === q.correct && (
                                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                                )}
                              </button>
                            );
                          })}
                        </div>

                        {submittedQuiz && (
                          <div className="pt-2 text-xs text-stone-600 leading-relaxed bg-white/70 p-3 rounded-xl border border-stone-200/60">
                            <strong className="text-stone-900 block mb-0.5">Rationale:</strong>
                            {q.rationale}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {!submittedQuiz && (
              <div className="flex justify-end pt-4">
                <button
                  onClick={() => setSubmittedQuiz(true)}
                  disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                  className="px-6 py-2.5 rounded-xl bg-[#ea580c] text-white font-bold text-xs hover:bg-[#c2410c] disabled:opacity-50 transition cursor-pointer"
                >
                  Submit Assessment ({Object.keys(quizAnswers).length}/{quizQuestions.length} Answered)
                </button>
              </div>
            )}
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 8: ENGINEERING REPORT DELIVERABLE TEMPLATE                     */}
        {/* ================================================================== */}
        {activeTab === "lab-report" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#ea580c] font-bold">
                  University Capstone Deliverable
                </span>
                <h3 className="text-xl font-black text-stone-900">
                  Enterprise IPv6 Addressing & Dual-Stack Migration Plan
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Professional markdown documentation template for campus IPv6 /48 allocations, SLAAC autoconfiguration, and dual-stack security.
                </p>
              </div>

              <button
                onClick={() =>
                  copyCode(
                    `# Enterprise IPv6 Addressing & Dual-Stack Migration Plan

## 1. Executive Summary
- **Organization:** Enterprise Cloud Operations
- **Lead Network Systems Engineer:** IPv6 Architecture Taskforce
- **Allocated Prefix:** RIR Global Unicast Delegation \`2001:db8:acad::/48\`
- **Migration Strategy:** Phased Dual-Stack (IPv4 & IPv6 parallel) with Happy Eyeballs RFC 8305.

## 2. IPv6 Subnet Allocation Hierarchy (/48 to /64)
| Network Segment / Zone | VLAN ID | Allocated /64 Prefix | Gateway SVI Address | Configuration Method |
| :--- | :--- | :--- | :--- | :--- |
| **Engineering Workstations** | 10 | \`2001:db8:acad:0001::/64\` | \`2001:db8:acad:0001::1\` | SLAAC + RFC 7217 Stable Privacy |
| **Corporate Sales & HR** | 20 | \`2001:db8:acad:0002::/64\` | \`2001:db8:acad:0002::1\` | SLAAC (M=0, O=1) |
| **Production Server Cluster** | 30 | \`2001:db8:acad:0010::/64\` | \`2001:db8:acad:0010::1\` | Stateful DHCPv6 (M=1) |
| **Guest Wireless** | 40 | \`2001:db8:acad:0020::/64\` | \`2001:db8:acad:0020::1\` | SLAAC + RFC 4941 Temp Privacy |
| **Core WAN P2P Uplink** | 100 | \`2001:db8:acad:00fe::/127\` | \`2001:db8:acad:00fe::0\` | Static Point-to-Point (RFC 6164) |

## 3. Router Configuration (Cisco IOS)
\`\`\`bash
ipv6 unicast-routing

interface GigabitEthernet0/0.10
 encapsulation dot1Q 10
 ipv6 address 2001:db8:acad:1::1/64
 ipv6 nd other-config-flag
 no shutdown

interface GigabitEthernet0/0.30
 encapsulation dot1Q 30
 ipv6 address 2001:db8:acad:10::1/64
 ipv6 nd managed-config-flag
 no shutdown
\`\`\`

## 4. Layer 2 & Perimeter Security Controls
1. **RA Guard:** Configured \`ipv6 nd raguard\` on all switch access ports to block unauthorized rogue RAs.
2. **ICMPv6 Firewall Rules:** Permitted Essential NDP (Types 133, 134, 135, 136) and Packet Too Big (Type 2); rate-limited Echo Request (Type 128).
3. **Dual-Stack Policy Parity:** Mirrored all IPv4 zero-trust ACLs into IPv6 ip6tables rulesets.`,
                    "ipv6-report-copy"
                  )
                }
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#ea580c] text-white text-xs font-bold hover:bg-[#c2410c] shadow-xs cursor-pointer"
              >
                {copiedCodeId === "ipv6-report-copy" ? <Check size={14} /> : <Copy size={14} />}
                <span>{copiedCodeId === "ipv6-report-copy" ? "Copied" : "Copy Report Template"}</span>
              </button>
            </div>

            <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed">
              <pre>
{`# Enterprise IPv6 Addressing & Dual-Stack Migration Plan

## 1. Executive Summary
- Organization: Enterprise Cloud Operations
- Allocated Prefix: 2001:db8:acad::/48
- Strategy: Dual-Stack deployment with RA Guard protection.

## 2. Subnet Allocation Plan
- Engineering: 2001:db8:acad:1::/64 (SLAAC)
- Corporate: 2001:db8:acad:2::/64 (SLAAC)
- Servers: 2001:db8:acad:10::/64 (Stateful DHCPv6)
- WAN Link: 2001:db8:acad:fe::/127 (RFC 6164)

## 3. Security Hardening
- RA Guard enabled on access ports.
- Essential ICMPv6 allowed; spoofed RAs dropped.`}
              </pre>
            </div>
          </div>
        )}

        {/* Footer Navigation Bar */}
        <div className="mt-10 pt-6 border-t border-[#e7e3da] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => navigate("/learning/networks/ipv4")}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#e7e3da] bg-white text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#ea580c] transition cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 5 — IPv4 Addressing & Subnetting</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-stone-500">
              Next: Module 7 — Routing & Router Architecture
            </span>
            <button
              onClick={() => navigate("/learning/networks/routing")}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#ea580c] hover:bg-orange-600 text-xs font-bold text-white transition cursor-pointer shadow"
            >
              <span>Module 7</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
