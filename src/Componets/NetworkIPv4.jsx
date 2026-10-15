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
  Calculator,
  Binary,
  Split,
  Database,
  ArrowDownRight,
  Shuffle,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* COMPUTER NETWORKS & INTERNET ENGINEERING: MODULE 5                         */
/* IPV4 ADDRESSING, SUBNETTING & ENTERPRISE NETWORK PLANNING                  */
/* -------------------------------------------------------------------------- */

export default function NetworkIPv4() {
  const navigate = useNavigate();

  // Active top-level tabs
  const [activeTab, setActiveTab] = useState("theory"); // theory | calc-sim | vlsm-sim | nat-sim | binary-game | cli | quiz | lab-report
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2500);
  };

  // Track scroll navigation & synced topics
  const topics = [
    { id: "sec-5-1", name: "5.1 IPv4 Fundamentals & Binary Structure" },
    { id: "sec-5-2", name: "5.2 Historical Address Classes" },
    { id: "sec-5-3", name: "5.3 CIDR Notation & Subnet Masks" },
    { id: "sec-5-4", name: "5.4 Network, Broadcast & Host Ranges" },
    { id: "sec-5-5", name: "5.5 Fast Subnetting & Block-Size Math" },
    { id: "sec-5-6", name: "5.6 Fixed-Length Subnet Masking (FLSM)" },
    { id: "sec-5-7", name: "5.7 Variable Length Subnet Masking (VLSM)" },
    { id: "sec-5-8", name: "5.8 Private, Public, Loopback & Link-Local" },
    { id: "sec-5-9", name: "5.9 NAT & Port Address Translation (PAT)" },
    { id: "sec-5-10", name: "5.10 Enterprise IP Addressing & IPAM" },
    { id: "sec-5-11", name: "5.11 Common Subnetting Errors & Triage" },
    { id: "sec-5-12", name: "5.12 Hands-on Laboratory Sequence" },
    { id: "sec-5-13", name: "5.13 Capstone & Assessment" },
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
  /* HELPER FUNCTIONS FOR IP CALCULATIONS                                       */
  /* -------------------------------------------------------------------------- */
  const ipToLong = (ipStr) => {
    const parts = ipStr.split(".").map(Number);
    if (parts.length !== 4 || parts.some((p) => isNaN(p) || p < 0 || p > 255)) {
      return null;
    }
    return ((parts[0] << 24) >>> 0) + (parts[1] << 16) + (parts[2] << 8) + parts[3];
  };

  const longToIp = (longVal) => {
    return [
      (longVal >>> 24) & 255,
      (longVal >>> 16) & 255,
      (longVal >>> 8) & 255,
      longVal & 255,
    ].join(".");
  };

  const toBinaryOctets = (ipStr) => {
    const parts = ipStr.split(".").map(Number);
    if (parts.length !== 4) return "00000000.00000000.00000000.00000000";
    return parts.map((p) => p.toString(2).padStart(8, "0")).join(".");
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 1: LIVE IPV4 SUBNET CALCULATOR & BITWISE ENGINE                  */
  /* -------------------------------------------------------------------------- */
  const [calcIpInput, setCalcIpInput] = useState("192.168.10.75");
  const [calcCidrInput, setCalcCidrInput] = useState(26);

  const subnetMetrics = useMemo(() => {
    const ipLong = ipToLong(calcIpInput);
    const valid = ipLong !== null && calcCidrInput >= 1 && calcCidrInput <= 32;

    if (!valid) {
      return {
        valid: false,
        mask: "255.255.255.0",
        wildcard: "0.0.0.255",
        network: "0.0.0.0",
        broadcast: "0.0.0.0",
        firstHost: "0.0.0.0",
        lastHost: "0.0.0.0",
        totalHosts: 0,
        usableHosts: 0,
        blockSize: 256,
      };
    }

    const maskLong = calcCidrInput === 0 ? 0 : (~0 << (32 - calcCidrInput)) >>> 0;
    const wildcardLong = ~maskLong >>> 0;
    const networkLong = (ipLong & maskLong) >>> 0;
    const broadcastLong = (networkLong | wildcardLong) >>> 0;

    const total = Math.pow(2, 32 - calcCidrInput);
    let usable = 0;
    let firstHostLong = 0;
    let lastHostLong = 0;

    if (calcCidrInput === 31) {
      // RFC 3021
      usable = 2;
      firstHostLong = networkLong;
      lastHostLong = broadcastLong;
    } else if (calcCidrInput === 32) {
      usable = 1;
      firstHostLong = networkLong;
      lastHostLong = networkLong;
    } else {
      usable = Math.max(0, total - 2);
      firstHostLong = (networkLong + 1) >>> 0;
      lastHostLong = (broadcastLong - 1) >>> 0;
    }

    const interestingOctetIndex = Math.floor((calcCidrInput - 1) / 8);
    const maskOctets = longToIp(maskLong).split(".").map(Number);
    const blockSize =
      interestingOctetIndex >= 0 ? 256 - maskOctets[interestingOctetIndex] : 256;

    return {
      valid: true,
      mask: longToIp(maskLong),
      wildcard: longToIp(wildcardLong),
      network: longToIp(networkLong),
      broadcast: longToIp(broadcastLong),
      firstHost: longToIp(firstHostLong),
      lastHost: longToIp(lastHostLong),
      totalHosts: total,
      usableHosts: usable,
      blockSize,
      ipBinary: toBinaryOctets(calcIpInput),
      maskBinary: toBinaryOctets(longToIp(maskLong)),
      netBinary: toBinaryOctets(longToIp(networkLong)),
    };
  }, [calcIpInput, calcCidrInput]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 2: VLSM SUBNET ALLOCATOR & HIERARCHY PLANNER                     */
  /* -------------------------------------------------------------------------- */
  const defaultVlsmDepts = [
    { name: "Engineering / Dev Team", hostsNeeded: 120 },
    { name: "Sales & Operations", hostsNeeded: 55 },
    { name: "Production Servers", hostsNeeded: 28 },
    { name: "Guest Wi-Fi Segment", hostsNeeded: 14 },
    { name: "Core WAN Router P2P", hostsNeeded: 2 },
  ];

  const [vlsmBaseIp, setVlsmBaseIp] = useState("10.0.0.0");
  const [vlsmDepts, setVlsmDepts] = useState(defaultVlsmDepts);

  const vlsmPlan = useMemo(() => {
    let currentLong = ipToLong(vlsmBaseIp) || ipToLong("10.0.0.0");
    // Sort descending by host requirements
    const sorted = [...vlsmDepts].sort((a, b) => b.hostsNeeded - a.hostsNeeded);

    const allocations = [];
    let totalAllocated = 0;

    sorted.forEach((dept) => {
      // Find smallest power of 2: need + 2 (for net and bcast), or need for /31
      let hBits = 1;
      while (Math.pow(2, hBits) - (dept.hostsNeeded === 2 ? 0 : 2) < dept.hostsNeeded) {
        hBits++;
      }
      const cidr = 32 - hBits;
      const totalCapacity = Math.pow(2, hBits);
      const usableCapacity = cidr === 31 ? 2 : totalCapacity - 2;

      // Align currentLong to block boundary
      const maskLong = (~0 << hBits) >>> 0;
      if ((currentLong & ~maskLong) !== 0) {
        currentLong = ((currentLong + totalCapacity) & maskLong) >>> 0;
      }

      const netAddress = longToIp(currentLong);
      const bcastLong = (currentLong + totalCapacity - 1) >>> 0;
      const bcastAddress = longToIp(bcastLong);
      const firstHost = longToIp((currentLong + 1) >>> 0);
      const lastHost = longToIp((bcastLong - 1) >>> 0);
      const mask = longToIp(maskLong);

      allocations.push({
        deptName: dept.name,
        hostsNeeded: dept.hostsNeeded,
        cidr: `/${cidr}`,
        mask,
        netAddress,
        bcastAddress,
        hostRange: `${firstHost} – ${lastHost}`,
        usableCapacity,
        totalCapacity,
        efficiency: ((dept.hostsNeeded / usableCapacity) * 100).toFixed(0),
      });

      currentLong = (currentLong + totalCapacity) >>> 0;
      totalAllocated += totalCapacity;
    });

    return { allocations, totalAllocated };
  }, [vlsmBaseIp, vlsmDepts]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 3: NAT / PAT CONNECTION TRACKING SIMULATOR                       */
  /* -------------------------------------------------------------------------- */
  const initialNatEntries = [
    {
      id: 1,
      protocol: "TCP",
      insideLocal: "192.168.1.10:51240",
      insideGlobal: "203.0.113.10:40001",
      outsideGlobal: "93.184.216.34:443",
      state: "ESTABLISHED",
      timeout: "238s",
      application: "HTTPS GET prepspaces.com",
    },
    {
      id: 2,
      protocol: "UDP",
      insideLocal: "192.168.1.20:54109",
      insideGlobal: "203.0.113.10:40002",
      outsideGlobal: "1.1.1.1:53",
      state: "ACTIVE",
      timeout: "24s",
      application: "DNS Query (A record)",
    },
  ];

  const [natTable, setNatTable] = useState(initialNatEntries);
  const [selectedNatHost, setSelectedNatHost] = useState("hostA"); // hostA | hostB | hostC
  const [selectedNatDst, setSelectedNatDst] = useState("web"); // web | api | ssh
  const [natLog, setNatLog] = useState([]);

  const handleTransmitNatPacket = () => {
    let insideLocalIp = "";
    if (selectedNatHost === "hostA") insideLocalIp = "192.168.1.10";
    else if (selectedNatHost === "hostB") insideLocalIp = "192.168.1.20";
    else insideLocalIp = "192.168.1.30";

    const localPort = Math.floor(49152 + Math.random() * 10000);
    const insideLocal = `${insideLocalIp}:${localPort}`;

    let outsideGlobal = "";
    let appDesc = "";
    let protocol = "TCP";

    if (selectedNatDst === "web") {
      outsideGlobal = "93.184.216.34:443";
      appDesc = "HTTPS Request";
    } else if (selectedNatDst === "api") {
      outsideGlobal = "142.250.190.46:443";
      appDesc = "REST API Call";
    } else {
      outsideGlobal = "198.51.100.22:22";
      appDesc = "Secure Shell SSH";
    }

    const publicPort = 40000 + natTable.length + 1;
    const insideGlobal = `203.0.113.10:${publicPort}`;

    const newEntry = {
      id: Date.now(),
      protocol,
      insideLocal,
      insideGlobal,
      outsideGlobal,
      state: "ESTABLISHED",
      timeout: "300s",
      application: appDesc,
    };

    setNatTable((prev) => [newEntry, ...prev.slice(0, 5)]);
    setNatLog((prev) => [
      `NAT Translation: ${insideLocal} -> translated to ${insideGlobal} -> forwarded to ${outsideGlobal}`,
      ...prev.slice(0, 4),
    ]);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 4: 8-BIT BINARY NIBBLE / BYTE PRACTICE GAME                      */
  /* -------------------------------------------------------------------------- */
  const [bitArray, setBitArray] = useState([1, 1, 0, 0, 0, 0, 0, 0]); // 192 default
  const bitWeights = [128, 64, 32, 16, 8, 4, 2, 1];

  const currentByteDecimal = useMemo(() => {
    return bitArray.reduce((acc, bit, idx) => acc + bit * bitWeights[idx], 0);
  }, [bitArray]);

  const toggleBit = (idx) => {
    const updated = [...bitArray];
    updated[idx] = updated[idx] === 1 ? 0 : 1;
    setBitArray(updated);
  };

  const [targetNumber, setTargetNumber] = useState(168);
  const [gameMessage, setGameMessage] = useState("");

  const generateNewChallenge = () => {
    const commonOctets = [10, 16, 32, 64, 128, 168, 172, 192, 224, 240, 248, 252, 254, 255];
    const picked = commonOctets[Math.floor(Math.random() * commonOctets.length)];
    setTargetNumber(picked);
    setGameMessage("");
  };

  const checkGameAnswer = () => {
    if (currentByteDecimal === targetNumber) {
      setGameMessage("Correct! Perfectly matched the binary bit pattern.");
    } else {
      setGameMessage(`Current total is ${currentByteDecimal}. Need ${targetNumber}. Adjust the bit weights!`);
    }
  };

  /* -------------------------------------------------------------------------- */
  /* 10-QUESTION KNOWLEDGE ASSESSMENT QUIZ                                      */
  /* -------------------------------------------------------------------------- */
  const quizQuestions = [
    {
      question:
        "Given the host IP address 172.16.45.14 and subnet mask 255.255.240.0 (/20), what is the calculated network address?",
      options: [
        "172.16.45.0",
        "172.16.32.0",
        "172.16.40.0",
        "172.16.48.0",
      ],
      correct: 1,
      rationale:
        "The mask 255.255.240.0 has interesting 3rd octet 240. Block size = 256 - 240 = 16. Multiples of 16 in the 3rd octet are 0, 16, 32, 48, etc. Since the host has 45 in the 3rd octet, it falls into the 32 block (range 172.16.32.0 through 172.16.47.255). Thus, the network address is 172.16.32.0/20.",
    },
    {
      question:
        "How many conventional usable host IP addresses are available on a standard /27 IPv4 subnet?",
      options: [
        "32 hosts",
        "30 hosts",
        "28 hosts",
        "62 hosts",
      ],
      correct: 1,
      rationale:
        "For /27, the host bits h = 32 - 27 = 5. Total addresses = 2^5 = 32. Subtracting 2 (one for the network identifier and one for the directed broadcast) gives 32 - 2 = 30 usable host addresses.",
    },
    {
      question:
        "What is the special purpose of an RFC 3021 /31 subnet prefix on point-to-point router links?",
      options: [
        "It provides 4 usable addresses for redundant VRRP gateways.",
        "It allocates exactly 2 addresses (network and broadcast are omitted) to eliminate IPv4 address waste on dedicated two-node router links.",
        "It enables automatic link-local APIPA addressing.",
        "It acts as a loopback interface identifier.",
      ],
      correct: 1,
      rationale:
        "RFC 3021 standardizes /31 prefixes on point-to-point links. Because only two endpoints exist on the wire, there is no need for a distinct broadcast address or network identifier. Both addresses are assigned to the two router interfaces, conserving scarce IPv4 space.",
    },
    {
      question:
        "Which of the following IPv4 address blocks is designated by RFC 1918 for private non-Internet-routable enterprise networks?",
      options: [
        "100.64.0.0/10",
        "172.16.0.0/12 (172.16.0.0 – 172.31.255.255)",
        "169.254.0.0/16",
        "192.0.2.0/24",
      ],
      correct: 1,
      rationale:
        "RFC 1918 defines three private address spaces: 10.0.0.0/8 (10.0.0.0–10.255.255.255), 172.16.0.0/12 (172.16.0.0–172.31.255.255), and 192.168.0.0/16 (192.168.0.0–192.168.255.255). 100.64.0.0/10 is CGNAT (RFC 6598), and 169.254.0.0/16 is APIPA link-local.",
    },
    {
      question:
        "When an engineer designs a network using Variable Length Subnet Masking (VLSM), what is the first critical rule to avoid address overlap?",
      options: [
        "Allocate point-to-point /30 links first before any host subnets.",
        "Sort the subnet requirements in descending order by the number of hosts needed, and allocate the largest blocks first on aligned boundaries.",
        "Use classful Class C /24 boundaries for all departments.",
        "Assign broadcast addresses before computing network addresses.",
      ],
      correct: 1,
      rationale:
        "The golden rule of VLSM is to list all requirements and sort them in descending order (largest host count to smallest). Allocating the largest subnets first ensures that subsequent smaller subnets align naturally to their mathematical power-of-two boundaries without fragmenting or overlapping earlier allocations.",
    },
    {
      question:
        "What is the function of Port Address Translation (PAT), also known as NAT Overload?",
      options: [
        "It assigns one static public IP address permanently to each internal client.",
        "It maps multiple private IP addresses to a single public IP address by tracking unique Layer 4 source port numbers in a translation table.",
        "It encrypts payload data using IPsec ESP.",
        "It converts IPv4 packets into IPv6 packets using dual-stack translation.",
      ],
      correct: 1,
      rationale:
        "Port Address Translation (PAT) allows thousands of internal devices with private RFC 1918 addresses to share one (or a few) public IPv4 addresses. The NAT gateway translates the internal client's private IP and source port into its own public IP and an assigned unique source port, demultiplexing incoming return packets using its connection table.",
    },
    {
      question:
        "A client workstation boots up and automatically assigns itself the IP address 169.254.88.12. What does this indicate?",
      options: [
        "The computer has successfully obtained a lease from a public DHCP server.",
        "The DHCP server on the local network was unreachable or failed to respond, causing the operating system to fall back to an Automatic Private IP Addressing (APIPA) link-local address.",
        "The computer is connected to a Carrier-Grade NAT provider.",
        "The network card is malfunctioning and must be replaced.",
      ],
      correct: 1,
      rationale:
        "169.254.0.0/16 is the IPv4 Link-Local address block (RFC 3927). When a client fails to receive a DHCP response (due to VLAN misconfiguration, DHCP scope exhaustion, or cabling faults), modern OSes (Windows APIPA, Linux/macOS Zeroconf) self-assign an address in 169.254.x.x, allowing communication only with other link-local hosts on that immediate broadcast segment.",
    },
    {
      question:
        "What bitwise operation does a host computer perform between its own IP address and its configured subnet mask to determine its local network prefix?",
      options: [
        "Bitwise XOR",
        "Bitwise AND",
        "Bitwise OR",
        "Bitwise NOT",
      ],
      correct: 1,
      rationale:
        "A host performs a bitwise logical AND between its 32-bit IP address and its 32-bit subnet mask (1 AND 1 = 1; anything else = 0). The resulting 32-bit value is the network address. The host performs the same operation on the destination IP to determine whether the target is on the local subnet or must be sent to the default gateway.",
    },
    {
      question:
        "What is the broadcast address for the subnet 10.20.30.128/25?",
      options: [
        "10.20.30.255",
        "10.20.30.191",
        "10.20.31.255",
        "10.20.30.127",
      ],
      correct: 0,
      rationale:
        "For /25, the subnet mask is 255.255.255.128. Block size = 256 - 128 = 128. The subnets in the 4th octet are 0 and 128. For the subnet starting at 10.20.30.128, the block spans 128 addresses (128 to 255). The last address in the block is 10.20.30.255, which is the directed broadcast address.",
    },
    {
      question:
        "Why is it an engineering error to assign the IP address 192.168.1.192 with a /26 subnet mask to a host workstation interface?",
      options: [
        "Because 192.168.1.192 is an RFC 1918 private address.",
        "Because for a /26 mask, 192.168.1.192 is the network address identifier for that subnet, and cannot be assigned to an individual host interface.",
        "Because /26 masks can only be used on Class B networks.",
        "Because 192 is an odd number in binary.",
      ],
      correct: 1,
      rationale:
        "A /26 mask has block size 64 (boundaries at .0, .64, .128, .192). The address 192.168.1.192 is the network address for the fourth subnet (192.168.1.192/26). The network address is reserved to represent the subnet itself; assigning it to a host interface will result in an 'invalid host address' error on virtually all network operating systems.",
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
                Computer Networks & Internet Engineering · Module 5
              </span>
              <h1 className="text-base sm:text-lg font-black tracking-tight text-stone-900">
                IPv4 Addressing, Subnetting & Enterprise Planning
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
              Take Subnetting Quiz
            </button>
          </div>
        </div>
      </header>

      {/* Module Horizontal Track Navigation */}
      <div className="bg-[#f0ece1]/70 border-b border-[#e7e3da]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <ModuleNav track="networks" currentModuleId="ipv4" />
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
            <span>Complete Curriculum (5.1 – 5.13)</span>
          </button>

          <button
            onClick={() => setActiveTab("calc-sim")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === "calc-sim"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200/80"
            }`}
          >
            <Calculator size={14} />
            <span>Subnet Calculator & Bitwise</span>
          </button>

          <button
            onClick={() => setActiveTab("vlsm-sim")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === "vlsm-sim"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200/80"
            }`}
          >
            <Split size={14} />
            <span>VLSM Hierarchy Allocator</span>
          </button>

          <button
            onClick={() => setActiveTab("nat-sim")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === "nat-sim"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200/80"
            }`}
          >
            <RouterIcon size={14} />
            <span>NAT / PAT Connection Lab</span>
          </button>

          <button
            onClick={() => setActiveTab("binary-game")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === "binary-game"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200/80"
            }`}
          >
            <Binary size={14} />
            <span>8-Bit Bit Flipper Game</span>
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
        {/* TAB 1: COMPLETE COMPREHENSIVE CURRICULUM (5.1 to 5.13)              */}
        {/* ================================================================== */}
        {activeTab === "theory" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Sticky Topic Outline */}
            <aside className="hidden lg:block col-span-1">
              <div className="sticky top-28 bg-white/80 p-5 rounded-3xl border border-[#e7e3da] shadow-xs space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 font-bold block">
                  Module 5 Sections
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
                    onClick={() => setActiveTab("calc-sim")}
                    className="w-full text-left px-3 py-1.5 rounded-lg text-xs bg-orange-50 text-[#ea580c] font-semibold hover:bg-orange-100 transition flex items-center justify-between"
                  >
                    <span>Subnet Calculator</span>
                    <ArrowRight size={12} />
                  </button>
                  <button
                    onClick={() => setActiveTab("vlsm-sim")}
                    className="w-full text-left px-3 py-1.5 rounded-lg text-xs bg-emerald-50 text-emerald-800 font-semibold hover:bg-emerald-100 transition flex items-center justify-between"
                  >
                    <span>VLSM Allocator</span>
                    <ArrowRight size={12} />
                  </button>
                  <button
                    onClick={() => setActiveTab("nat-sim")}
                    className="w-full text-left px-3 py-1.5 rounded-lg text-xs bg-blue-50 text-blue-800 font-semibold hover:bg-blue-100 transition flex items-center justify-between"
                  >
                    <span>NAT/PAT Tracker</span>
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
                  <span>Mathematical Foundations to Enterprise IPAM</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
                  IPv4 Addressing, Subnetting & Enterprise Planning
                </h2>
                <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
                  How logical 32-bit IPv4 addresses structure global networks, how binary bitwise
                  AND operations isolate local subnets from default gateways, how to solve FLSM and
                  VLSM allocations with zero overlap, and how Network Address Translation (NAT/PAT)
                  conserves public addresses across millions of enterprise hosts.
                </p>

                <div className="mt-6 pt-6 border-t border-[#e7e3da] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/60">
                    <span className="block text-[10px] font-mono text-stone-500 uppercase font-bold">Address Space</span>
                    <span className="text-sm font-extrabold text-stone-800">32 Bits (4.29B IPs)</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/60">
                    <span className="block text-[10px] font-mono text-stone-500 uppercase font-bold">Notation</span>
                    <span className="text-sm font-extrabold text-stone-800">Dotted Decimal / CIDR</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/60">
                    <span className="block text-[10px] font-mono text-stone-500 uppercase font-bold">Private RFC</span>
                    <span className="text-sm font-extrabold text-stone-800">RFC 1918 / CGNAT</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/60">
                    <span className="block text-[10px] font-mono text-stone-500 uppercase font-bold">Translation</span>
                    <span className="text-sm font-extrabold text-stone-800">PAT / NAT Overload</span>
                  </div>
                </div>
              </div>

              {/* ------------------------------------------------------------ */}
              {/* SECTION 5.1: IPV4 FUNDAMENTALS & ADDRESS STRUCTURE           */}
              {/* ------------------------------------------------------------ */}
              <section id="sec-5-1" className="scroll-mt-36 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 text-xs font-mono font-bold">
                    5.1
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    IPv4 Fundamentals, 32-Bit Structure & Binary Bit Weights
                  </h3>
                </div>

                <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 space-y-6">
                  <p className="text-sm text-stone-700 leading-relaxed">
                    An IPv4 address is an exact <strong>32-bit binary integer</strong>. For human
                    readability, these 32 bits are divided into four 8-bit octets separated by dots
                    (e.g., <code className="text-[#ea580c] font-bold font-mono">192.168.10.25</code>).
                    Each octet ranges mathematically from 0 (<code className="font-mono">00000000</code>)
                    to 255 (<code className="font-mono">11111111</code>).
                  </p>

                  {/* Bit Weight Reference Table */}
                  <div className="p-5 rounded-2xl bg-stone-950 text-white font-mono text-xs space-y-3">
                    <span className="text-[10px] text-stone-400 uppercase tracking-widest block font-bold">
                      Binary Positional Bit Weights in Each 8-Bit Octet (2^7 down to 2^0)
                    </span>
                    <div className="grid grid-cols-8 gap-1.5 text-center">
                      {[128, 64, 32, 16, 8, 4, 2, 1].map((weight, idx) => (
                        <div key={idx} className="p-2 rounded-lg bg-stone-900 border border-stone-800">
                          <span className="text-[9px] text-stone-500 block">Bit {7 - idx}</span>
                          <span className="text-sm font-bold text-amber-400">{weight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Binary Conversion Walkthrough */}
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-700 space-y-2">
                    <span className="font-bold text-stone-900 block font-mono">
                      Step-by-Step Octet Conversion Example: 192.168.10.25
                    </span>
                    <ul className="list-disc list-inside space-y-1 font-mono text-[11px] text-stone-600">
                      <li><strong>192:</strong> 128 + 64 = <span className="text-stone-900 font-bold">11000000</span></li>
                      <li><strong>168:</strong> 128 + 32 + 8 = <span className="text-stone-900 font-bold">10101000</span></li>
                      <li><strong>10:</strong> 8 + 2 = <span className="text-stone-900 font-bold">00001010</span></li>
                      <li><strong>25:</strong> 16 + 8 + 1 = <span className="text-stone-900 font-bold">00011001</span></li>
                    </ul>
                    <p className="pt-1 text-[11px] text-stone-500">
                      Full 32-bit Wire Representation: <code className="font-mono text-stone-800 font-bold">11000000.10101000.00001010.00011001</code>
                    </p>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------ */}
              {/* SECTION 5.2: HISTORICAL ADDRESS CLASSES                      */}
              {/* ------------------------------------------------------------ */}
              <section id="sec-5-2" className="scroll-mt-36 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 text-xs font-mono font-bold">
                    5.2
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    Historical IPv4 Address Classes & The Transition to CIDR
                  </h3>
                </div>

                <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 space-y-6">
                  <p className="text-sm text-stone-700 leading-relaxed">
                    Prior to 1993, the Internet used <strong>classful addressing</strong> (RFC 791).
                    A router inferred the network boundary purely from the value of the first octet.
                    This rigid system caused catastrophic address waste: an organization needing 500
                    IPs received a Class B block with 65,534 addresses!
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border border-stone-200 rounded-2xl overflow-hidden">
                      <thead className="bg-stone-100 text-stone-700 font-mono uppercase text-[10px]">
                        <tr>
                          <th className="p-3">Class</th>
                          <th className="p-3">1st Octet Range</th>
                          <th className="p-3">Default Prefix</th>
                          <th className="p-3">Total Usable Hosts</th>
                          <th className="p-3">Historical Designation</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200 font-sans">
                        <tr>
                          <td className="p-3 font-mono font-bold text-blue-700">Class A</td>
                          <td className="p-3 font-mono">1 – 126</td>
                          <td className="p-3 font-mono">/8 (255.0.0.0)</td>
                          <td className="p-3 font-mono text-stone-800 font-bold">16,777,214</td>
                          <td className="p-3 text-stone-600">Governments, huge multinationals (IBM, Apple)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-emerald-700">Class B</td>
                          <td className="p-3 font-mono">128 – 191</td>
                          <td className="p-3 font-mono">/16 (255.255.0.0)</td>
                          <td className="p-3 font-mono text-stone-800 font-bold">65,534</td>
                          <td className="p-3 text-stone-600">Universities and medium-sized corporations</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-amber-700">Class C</td>
                          <td className="p-3 font-mono">192 – 223</td>
                          <td className="p-3 font-mono">/24 (255.255.255.0)</td>
                          <td className="p-3 font-mono text-stone-800 font-bold">254</td>
                          <td className="p-3 text-stone-600">Small business offices and departmental networks</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-purple-700">Class D</td>
                          <td className="p-3 font-mono">224 – 239</td>
                          <td className="p-3 font-mono">N/A</td>
                          <td className="p-3 font-mono text-stone-500">N/A</td>
                          <td className="p-3 text-stone-600">Multicast groups (OSPF, RIPv2, Video streams)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-stone-600">Class E</td>
                          <td className="p-3 font-mono">240 – 255</td>
                          <td className="p-3 font-mono">N/A</td>
                          <td className="p-3 font-mono text-stone-500">N/A</td>
                          <td className="p-3 text-stone-600">Reserved for experimental research</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 text-xs text-blue-900 space-y-1">
                    <span className="font-bold block">Why Modern Networks Use CIDR (RFC 1519):</span>
                    <p className="leading-relaxed">
                      Classless Inter-Domain Routing (CIDR) decoupled network prefixes from octet
                      boundaries. With CIDR, a prefix length (such as <code className="font-mono font-bold">/20</code> or <code className="font-mono font-bold">/28</code>)
                      is explicitly supplied with every route, allowing subnets of any size to match
                      exact organizational needs.
                    </p>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------ */}
              {/* SECTION 5.3: CIDR NOTATION & SUBNET MASKS                    */}
              {/* ------------------------------------------------------------ */}
              <section id="sec-5-3" className="scroll-mt-36 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 text-xs font-mono font-bold">
                    5.3
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    CIDR Notation, Subnet Masks & Capacity Mathematics
                  </h3>
                </div>

                <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 space-y-6">
                  <p className="text-sm text-stone-700 leading-relaxed">
                    A subnet mask is a 32-bit sequence of contiguous binary <code className="font-mono">1</code>s
                    followed by contiguous binary <code className="font-mono">0</code>s. The number of 1s
                    is the prefix length <code className="font-mono">p</code>.
                  </p>

                  {/* Mathematical Formulas */}
                  <div className="grid gap-4 sm:grid-cols-3 text-center font-mono text-xs">
                    <div className="p-4 rounded-2xl bg-stone-100 border border-stone-200 space-y-1">
                      <span className="text-[10px] text-stone-500 uppercase font-bold">Host Bits</span>
                      <div className="text-lg font-black text-stone-900">h = 32 - p</div>
                      <span className="text-[10px] text-stone-500">Remaining 0s in mask</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-stone-100 border border-stone-200 space-y-1">
                      <span className="text-[10px] text-stone-500 uppercase font-bold">Total Addresses</span>
                      <div className="text-lg font-black text-blue-700">2^(32 - p)</div>
                      <span className="text-[10px] text-stone-500">Full block capacity</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-stone-100 border border-stone-200 space-y-1">
                      <span className="text-[10px] text-stone-500 uppercase font-bold">Conventional Usable Hosts</span>
                      <div className="text-lg font-black text-emerald-700">2^h - 2</div>
                      <span className="text-[10px] text-stone-500">Subtracts net & bcast</span>
                    </div>
                  </div>

                  {/* CIDR Master Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border border-stone-200 rounded-2xl overflow-hidden">
                      <thead className="bg-stone-100 text-stone-700 font-mono uppercase text-[10px]">
                        <tr>
                          <th className="p-2.5">CIDR Prefix</th>
                          <th className="p-2.5">Subnet Mask</th>
                          <th className="p-2.5">Total Addresses</th>
                          <th className="p-2.5">Usable Hosts</th>
                          <th className="p-2.5">Common Use Case</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200 font-mono">
                        <tr>
                          <td className="p-2.5 font-bold text-stone-900">/16</td>
                          <td className="p-2.5 text-stone-600">255.255.0.0</td>
                          <td className="p-2.5">65,536</td>
                          <td className="p-2.5 font-bold text-blue-700">65,534</td>
                          <td className="p-2.5 font-sans text-stone-600">Campus backbone, AWS VPC block</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-stone-900">/20</td>
                          <td className="p-2.5 text-stone-600">255.255.240.0</td>
                          <td className="p-2.5">4,096</td>
                          <td className="p-2.5 font-bold text-blue-700">4,094</td>
                          <td className="p-2.5 font-sans text-stone-600">Large enterprise site</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-stone-900">/24</td>
                          <td className="p-2.5 text-stone-600">255.255.255.0</td>
                          <td className="p-2.5">256</td>
                          <td className="p-2.5 font-bold text-blue-700">254</td>
                          <td className="p-2.5 font-sans text-stone-600">Standard office VLAN, Wi-Fi subnet</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-stone-900">/25</td>
                          <td className="p-2.5 text-stone-600">255.255.255.128</td>
                          <td className="p-2.5">128</td>
                          <td className="p-2.5 font-bold text-blue-700">126</td>
                          <td className="p-2.5 font-sans text-stone-600">Medium department</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-stone-900">/26</td>
                          <td className="p-2.5 text-stone-600">255.255.255.192</td>
                          <td className="p-2.5">64</td>
                          <td className="p-2.5 font-bold text-blue-700">62</td>
                          <td className="p-2.5 font-sans text-stone-600">Engineering lab, server rack</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-stone-900">/27</td>
                          <td className="p-2.5 text-stone-600">255.255.255.224</td>
                          <td className="p-2.5">32</td>
                          <td className="p-2.5 font-bold text-blue-700">30</td>
                          <td className="p-2.5 font-sans text-stone-600">Branch office, small team</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-stone-900">/28</td>
                          <td className="p-2.5 text-stone-600">255.255.255.240</td>
                          <td className="p-2.5">16</td>
                          <td className="p-2.5 font-bold text-blue-700">14</td>
                          <td className="p-2.5 font-sans text-stone-600">DMZ server farm</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-stone-900">/29</td>
                          <td className="p-2.5 text-stone-600">255.255.255.248</td>
                          <td className="p-2.5">8</td>
                          <td className="p-2.5 font-bold text-blue-700">6</td>
                          <td className="p-2.5 font-sans text-stone-600">Public static IP block from ISP</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-stone-900">/30</td>
                          <td className="p-2.5 text-stone-600">255.255.255.252</td>
                          <td className="p-2.5">4</td>
                          <td className="p-2.5 font-bold text-blue-700">2</td>
                          <td className="p-2.5 font-sans text-stone-600">Legacy point-to-point links</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-stone-900">/31</td>
                          <td className="p-2.5 text-stone-600">255.255.255.254</td>
                          <td className="p-2.5">2</td>
                          <td className="p-2.5 font-bold text-emerald-700">2 (RFC 3021)</td>
                          <td className="p-2.5 font-sans text-stone-600">Modern router-to-router links</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-stone-900">/32</td>
                          <td className="p-2.5 text-stone-600">255.255.255.255</td>
                          <td className="p-2.5">1</td>
                          <td className="p-2.5 font-bold text-purple-700">1 (Host Route)</td>
                          <td className="p-2.5 font-sans text-stone-600">Loopback router interface, single host</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------ */}
              {/* SECTION 5.4: NETWORK, BROADCAST & HOST RANGES                */}
              {/* ------------------------------------------------------------ */}
              <section id="sec-5-4" className="scroll-mt-36 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 text-xs font-mono font-bold">
                    5.4
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    Network, Broadcast, Usable Host Ranges & The Bitwise AND Operation
                  </h3>
                </div>

                <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 space-y-6">
                  <p className="text-sm text-stone-700 leading-relaxed">
                    How does a computer know if a target IP address is on the local LAN or across the
                    globe? It applies a <strong>bitwise logical AND operation</strong> between the
                    destination IP and its configured subnet mask.
                  </p>

                  {/* Bitwise AND Walkthrough Card */}
                  <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-3">
                    <span className="text-[10px] text-stone-400 uppercase tracking-widest block font-bold">
                      Bitwise AND Truth Table: (1 AND 1 = 1, anything else = 0)
                    </span>
                    <div className="space-y-1.5 text-stone-300">
                      <div>Host IP: &nbsp; &nbsp; <code className="text-blue-400">192.168.10.70 &nbsp;&rarr; 11000000.10101000.00001010.01000110</code></div>
                      <div>Subnet Mask: <code className="text-amber-400">255.255.255.192 &rarr; 11111111.11111111.11111111.11000000</code></div>
                      <div className="pt-1 border-t border-stone-800 font-bold">
                        Network ID: &nbsp;<code className="text-emerald-400">192.168.10.64 &nbsp;&rarr; 11000000.10101000.00001010.01000000</code>
                      </div>
                    </div>
                  </div>

                  {/* 4 Crucial Address Types */}
                  <div className="grid gap-3 sm:grid-cols-2 text-xs">
                    <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                      <strong className="text-stone-900 block font-mono">1. Network Address</strong>
                      <span className="text-stone-600">All host bits set to 0. Identifies the entire subnet. Never assigned to a host!</span>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                      <strong className="text-stone-900 block font-mono">2. Directed Broadcast Address</strong>
                      <span className="text-stone-600">All host bits set to 1. Targets every host on this specific subnet.</span>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                      <strong className="text-stone-900 block font-mono">3. Usable Host Range</strong>
                      <span className="text-stone-600">From (Network + 1) up to (Broadcast - 1). Assigned to PCs, servers, and phones.</span>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                      <strong className="text-stone-900 block font-mono">4. Default Gateway</strong>
                      <span className="text-stone-600">Usually first usable (e.g. .1) or last usable (e.g. .254) router SVI interface.</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------ */}
              {/* SECTION 5.5: FAST SUBNETTING & BLOCK-SIZE CALCULATIONS       */}
              {/* ------------------------------------------------------------ */}
              <section id="sec-5-5" className="scroll-mt-36 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 text-xs font-mono font-bold">
                    5.5
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    Fast Subnetting & The "Block Size" (Magic Number) Technique
                  </h3>
                </div>

                <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 space-y-6">
                  <p className="text-sm text-stone-700 leading-relaxed">
                    In technical interviews and field engineering, converting entire 32-bit addresses
                    to binary is too slow. The <strong>Block Size Method</strong> calculates subnets
                    mentally in 3 seconds.
                  </p>

                  {/* Magic Number Formula */}
                  <div className="p-5 rounded-2xl bg-orange-50 border border-orange-200 space-y-2">
                    <span className="text-xs font-mono uppercase text-orange-900 font-bold block">
                      The Magic Number Formula
                    </span>
                    <div className="text-xl font-mono font-black text-[#ea580c]">
                      Block Size = 256 - Interesting Mask Octet
                    </div>
                    <p className="text-xs text-orange-950 leading-relaxed">
                      Find the octet that is neither 255 nor 0. Subtract its value from 256. The result
                      is the block size: subnets are exact multiples of this number!
                    </p>
                  </div>

                  {/* Example Walkthrough */}
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-700 space-y-2">
                    <span className="font-bold text-stone-900 block font-mono">
                      Mental Calculation Example: 10.50.180.30/21
                    </span>
                    <ol className="list-decimal list-inside space-y-1 font-mono text-[11px] text-stone-600">
                      <li>/21 mask = 255.255.248.0. The 3rd octet is interesting (248).</li>
                      <li>Block size = 256 - 248 = <strong className="text-stone-900">8</strong> in the 3rd octet.</li>
                      <li>Multiples of 8: 0, 8, 16... 176, 184.</li>
                      <li>Since the host has 180 in the 3rd octet, it falls into the <strong>10.50.176.0/21</strong> subnet!</li>
                      <li>Next subnet begins at 10.50.184.0. Therefore, Broadcast = <strong>10.50.183.255</strong>!</li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------ */}
              {/* SECTION 5.6: FIXED-LENGTH SUBNET MASKING (FLSM)             */}
              {/* ------------------------------------------------------------ */}
              <section id="sec-5-6" className="scroll-mt-36 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 text-xs font-mono font-bold">
                    5.6
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    Fixed-Length Subnet Masking (FLSM)
                  </h3>
                </div>

                <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 space-y-4 text-xs text-stone-700">
                  <p className="text-sm">
                    FLSM divides an assigned address block into subnets of <strong>equal size</strong>.
                    When borrowing <code className="font-mono font-bold">s</code> host bits, the number of
                    subnets produced is <code className="font-mono font-bold">2^s</code>.
                  </p>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <span className="font-bold text-stone-900 font-mono block">Example: Dividing 192.168.1.0/24 into 4 equal subnets</span>
                    <p className="text-stone-600">
                      Borrow 2 bits: 24 + 2 = /26. Produces 4 subnets of 64 addresses each:
                      <br />• 192.168.1.0/26 (Hosts .1 to .62)
                      <br />• 192.168.1.64/26 (Hosts .65 to .126)
                      <br />• 192.168.1.128/26 (Hosts .129 to .190)
                      <br />• 192.168.1.192/26 (Hosts .193 to .254)
                    </p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900">
                    <strong>FLSM Limitation:</strong> Inflexible! If one department has 100 people and another
                    has 4, FLSM forces both to use identical large subnets, wasting precious address space.
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------ */}
              {/* SECTION 5.7: VARIABLE LENGTH SUBNET MASKING (VLSM)           */}
              {/* ------------------------------------------------------------ */}
              <section id="sec-5-7" className="scroll-mt-36 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 text-xs font-mono font-bold">
                    5.7
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    Variable Length Subnet Masking (VLSM)
                  </h3>
                </div>

                <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 space-y-6">
                  <p className="text-sm text-stone-700 leading-relaxed">
                    <strong>VLSM</strong> applies different subnet masks across the same parent address
                    block. This enables optimal address conservation by sizing each subnet to match its
                    exact departmental requirements.
                  </p>

                  {/* 5-Step VLSM Algorithm */}
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                    <span className="text-xs font-mono uppercase text-stone-600 font-bold block">
                      The 5-Step Production VLSM Allocation Algorithm
                    </span>
                    <ol className="list-decimal list-inside text-xs text-stone-700 space-y-1.5 font-medium">
                      <li><strong>Inventory & Sort:</strong> List every network segment with required host counts + 20% growth. Sort descending (largest to smallest).</li>
                      <li><strong>Determine Prefix:</strong> Select the smallest power-of-2 subnet that satisfies each requirement (e.g. 50 hosts requires /26 for 62 usable).</li>
                      <li><strong>Allocate Largest First:</strong> Start from parent network base address and assign the largest block first.</li>
                      <li><strong>Align Boundaries:</strong> Ensure starting network address is an exact mathematical multiple of the block size to avoid overlap.</li>
                      <li><strong>Document & Repeat:</strong> Advance starting pointer by the block size and allocate the next subnet.</li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------ */}
              {/* SECTION 5.8: PRIVATE, PUBLIC, LOOPBACK & LINK-LOCAL          */}
              {/* ------------------------------------------------------------ */}
              <section id="sec-5-8" className="scroll-mt-36 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 text-xs font-mono font-bold">
                    5.8
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    Private (RFC 1918), Public, Loopback & Link-Local Address Spaces
                  </h3>
                </div>

                <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 space-y-6">
                  <p className="text-sm text-stone-700 leading-relaxed">
                    Not all IPv4 addresses are routable on the global Internet. Special-purpose RFC
                    reservations serve specific architectural functions in modern operating systems.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border border-stone-200 rounded-2xl overflow-hidden">
                      <thead className="bg-stone-100 text-stone-700 font-mono uppercase text-[10px]">
                        <tr>
                          <th className="p-3">Address Block</th>
                          <th className="p-3">Standard / RFC</th>
                          <th className="p-3">Internet Routable?</th>
                          <th className="p-3">Purpose & Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200 font-sans">
                        <tr>
                          <td className="p-3 font-mono font-bold text-emerald-700">10.0.0.0/8</td>
                          <td className="p-3 font-mono">RFC 1918</td>
                          <td className="p-3 font-mono text-red-600 font-bold">NO</td>
                          <td className="p-3 text-stone-600">Enterprise private internal networks (16.7M IPs).</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-emerald-700">172.16.0.0/12</td>
                          <td className="p-3 font-mono">RFC 1918</td>
                          <td className="p-3 font-mono text-red-600 font-bold">NO</td>
                          <td className="p-3 text-stone-600">Private networks spanning 172.16.0.0 to 172.31.255.255.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-emerald-700">192.168.0.0/16</td>
                          <td className="p-3 font-mono">RFC 1918</td>
                          <td className="p-3 font-mono text-red-600 font-bold">NO</td>
                          <td className="p-3 text-stone-600">Home and SOHO routers (192.168.0.0 to 192.168.255.255).</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-blue-700">127.0.0.0/8</td>
                          <td className="p-3 font-mono">RFC 1122</td>
                          <td className="p-3 font-mono text-red-600 font-bold">NO</td>
                          <td className="p-3 text-stone-600">Host loopback testing (<code className="font-mono">127.0.0.1</code> localhost). Traffic never hits wire.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-amber-700">169.254.0.0/16</td>
                          <td className="p-3 font-mono">RFC 3927</td>
                          <td className="p-3 font-mono text-red-600 font-bold">NO</td>
                          <td className="p-3 text-stone-600">Link-Local / APIPA. Self-assigned when DHCP server is unreachable.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-purple-700">100.64.0.0/10</td>
                          <td className="p-3 font-mono">RFC 6598</td>
                          <td className="p-3 font-mono text-red-600 font-bold">NO</td>
                          <td className="p-3 text-stone-600">Shared Address Space used by ISPs for Carrier-Grade NAT (CGNAT).</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-stone-900">0.0.0.0/0</td>
                          <td className="p-3 font-mono">RFC 1122</td>
                          <td className="p-3 font-mono text-stone-500">N/A</td>
                          <td className="p-3 text-stone-600">Default gateway route identifier representing "all destination networks".</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------ */}
              {/* SECTION 5.9: NAT & PORT ADDRESS TRANSLATION (PAT)           */}
              {/* ------------------------------------------------------------ */}
              <section id="sec-5-9" className="scroll-mt-36 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 text-xs font-mono font-bold">
                    5.9
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    Network Address Translation (NAT) & Port Address Translation (PAT)
                  </h3>
                </div>

                <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 space-y-6">
                  <p className="text-sm text-stone-700 leading-relaxed">
                    Because RFC 1918 private addresses cannot be routed across the Internet, edge routers
                    use <strong>NAT</strong> to rewrite IP header addresses on the fly.
                  </p>

                  {/* 3 NAT Modes */}
                  <div className="grid gap-4 sm:grid-cols-3 text-xs">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <span className="font-mono font-bold text-[#ea580c] block">Static NAT (1:1)</span>
                      <p className="text-stone-600 leading-relaxed">
                        Permanently binds a single private IP to a single public IP. Used for inbound
                        hosting of public web or mail servers in enterprise DMZs.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <span className="font-mono font-bold text-[#ea580c] block">Dynamic NAT (Pool)</span>
                      <p className="text-stone-600 leading-relaxed">
                        Maps private clients to temporary public IPs leased from a pool. If pool is
                        exhausted, subsequent connections are dropped.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <span className="font-mono font-bold text-[#ea580c] block">PAT / NAT Overload</span>
                      <p className="text-stone-600 leading-relaxed">
                        Enterprise standard! Thousands of internal clients share one public IP by
                        multiplexing unique Layer 4 source port numbers (e.g. :51042).
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 space-y-1">
                    <span className="font-bold block">Important Architectural Principle:</span>
                    <p className="leading-relaxed">
                      NAT was designed as an address conservation mechanism, NOT as a security firewall!
                      While unsolicited inbound connections to private hosts are blocked because no
                      translation entry exists, true perimeter defense requires stateful inspection,
                      deep packet inspection (DPI), and zero-trust ACLs.
                    </p>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------ */}
              {/* SECTION 5.10: ENTERPRISE IP ADDRESSING & IPAM                */}
              {/* ------------------------------------------------------------ */}
              <section id="sec-5-10" className="scroll-mt-36 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 text-xs font-mono font-bold">
                    5.10
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    Enterprise IP Addressing & IP Address Management (IPAM)
                  </h3>
                </div>

                <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 space-y-4 text-xs text-stone-700">
                  <p className="text-sm">
                    Production network architecture requires structured addressing hierarchies that
                    enable clean <strong>route summarization</strong> (supernetting) and simplify firewall
                    rulesets.
                  </p>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <span className="font-bold text-stone-900 font-mono block">Enterprise Best-Practice Conventions</span>
                    <ul className="list-disc list-inside space-y-1 font-mono text-[11px] text-stone-600">
                      <li><strong>Octet 2 = Site ID:</strong> 10.1.0.0/16 (HQ), 10.2.0.0/16 (Branch Chicago), 10.3.0.0/16 (Branch Tokyo).</li>
                      <li><strong>Octet 3 = VLAN Function:</strong> .10 (Corp Workstations), .20 (Voice VoIP), .30 (Server DMZ), .99 (Mgmt).</li>
                      <li><strong>Host Reservations:</strong> .1-.10 reserved for default gateways/VIPs; .11-.50 for static infrastructure; .51-.250 for dynamic DHCP pools.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------ */}
              {/* SECTION 5.11: COMMON ERRORS & TROUBLESHOOTING                */}
              {/* ------------------------------------------------------------ */}
              <section id="sec-5-11" className="scroll-mt-36 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 text-xs font-mono font-bold">
                    5.11
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    Common Subnetting Mistakes & Triage Workflow
                  </h3>
                </div>

                <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 space-y-4 text-xs text-stone-700">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="p-3.5 rounded-2xl border border-red-200 bg-red-50/40 space-y-1">
                      <strong className="text-red-900 block font-mono">1. Assigning Network or Broadcast Address</strong>
                      <span className="text-stone-600">Assigning .0 or .255 to a host. In a /26, .64 is a network address! Host will fail to boot on network.</span>
                    </div>
                    <div className="p-3.5 rounded-2xl border border-red-200 bg-red-50/40 space-y-1">
                      <strong className="text-red-900 block font-mono">2. Subnet Mask Mismatch</strong>
                      <span className="text-stone-600">Host configured with /24 while router has /25. Host tries to ARP directly for remote IPs instead of routing to gateway.</span>
                    </div>
                    <div className="p-3.5 rounded-2xl border border-red-200 bg-red-50/40 space-y-1">
                      <strong className="text-red-900 block font-mono">3. Overlapping Subnets</strong>
                      <span className="text-stone-600">Assigning 10.0.1.0/24 and 10.0.0.0/23 simultaneously. Routers drop packets due to ambiguous routing entries.</span>
                    </div>
                    <div className="p-3.5 rounded-2xl border border-red-200 bg-red-50/40 space-y-1">
                      <strong className="text-red-900 block font-mono">4. APIPA 169.254.x.x Lockout</strong>
                      <span className="text-stone-600">DHCP helper address missing on switch SVI; client falls back to link-local with zero internet connectivity.</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------ */}
              {/* SECTION 5.12: HANDS-ON LABORATORY SEQUENCE                   */}
              {/* ------------------------------------------------------------ */}
              <section id="sec-5-12" className="scroll-mt-36 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 text-xs font-mono font-bold">
                    5.12
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    Hands-on Laboratory Sequence
                  </h3>
                </div>

                <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 space-y-3 text-xs text-stone-700">
                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 block font-mono">Lab 1 — Binary & Subnet Calculations</strong>
                    <span>Solve 20 decimal-to-binary subnet problems without calculators, validating via ipcalc.</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 block font-mono">Lab 2 — VLSM Enterprise Partitioning</strong>
                    <span>Divide 172.16.0.0/20 across 5 enterprise departments with optimal host efficiency.</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 block font-mono">Lab 3 — Router-on-a-Stick Subnetting</strong>
                    <span>Configure 802.1Q sub-interfaces and DHCP scopes for multiple subnets in Cisco Packet Tracer.</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 block font-mono">Lab 4 — NAT Overload / PAT Gateway</strong>
                    <span>Configure Linux iptables / Cisco IOS NAT overload and inspect live translation tables under active traffic.</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 block font-mono">Lab 5 — Subnet Fault Diagnosis</strong>
                    <span>Isolate and resolve a network with overlapping subnets, missing DHCP helpers, and wrong default gateways.</span>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------ */}
              {/* SECTION 5.13: CAPSTONE & ASSESSMENT                          */}
              {/* ------------------------------------------------------------ */}
              <section id="sec-5-13" className="scroll-mt-36 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 text-xs font-mono font-bold">
                    5.13
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    Capstone Project & Knowledge Assessment
                  </h3>
                </div>

                <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 space-y-4 text-xs text-stone-700">
                  <p className="text-sm">
                    Design a production IPv4 addressing hierarchy for a multi-branch corporate campus
                    with headquarters, regional branches, server DMZ, and cloud VPC peering.
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
        {/* TAB 2: INTERACTIVE SUBNET CALCULATOR & BITWISE ENGINE               */}
        {/* ================================================================== */}
        {activeTab === "calc-sim" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#ea580c] font-bold">
                Interactive Simulator 1
              </span>
              <h3 className="text-xl font-black text-stone-900">
                IPv4 Subnet Calculator & Bitwise AND Visualizer
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                Enter any IPv4 address and adjust the CIDR prefix slider. Observe instant calculation
                of network boundaries, broadcast addresses, block sizes, and exact 32-bit binary logic.
              </p>
            </div>

            {/* Inputs */}
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">
                  IPv4 Address:
                </label>
                <input
                  type="text"
                  value={calcIpInput}
                  onChange={(e) => setCalcIpInput(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-stone-300 bg-white font-mono text-sm font-bold"
                  placeholder="192.168.1.10"
                />
                <span className="text-[10px] text-stone-500 mt-1 block">e.g. 10.0.45.14, 172.16.100.5, 192.168.1.75</span>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-bold text-stone-700">
                    CIDR Prefix Length: <span className="text-[#ea580c] font-mono font-bold">/{calcCidrInput}</span>
                  </label>
                  <span className="text-xs font-mono text-stone-500">
                    Mask: {subnetMetrics.mask}
                  </span>
                </div>
                <input
                  type="range"
                  min="8"
                  max="32"
                  value={calcCidrInput}
                  onChange={(e) => setCalcCidrInput(Number(e.target.value))}
                  className="w-full accent-[#ea580c]"
                />
                <div className="flex justify-between text-[10px] font-mono text-stone-400 mt-1">
                  <span>/8 (Class A)</span>
                  <span>/16 (Class B)</span>
                  <span>/24 (Class C)</span>
                  <span>/30 (P2P)</span>
                </div>
              </div>
            </div>

            {/* Subnet Calculation Metrics Cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="p-4 rounded-2xl border border-stone-200 bg-white">
                <span className="text-[10px] font-mono uppercase text-stone-500 font-bold">Network Address</span>
                <div className="text-lg font-black text-stone-900 font-mono mt-1">
                  {subnetMetrics.network}/{calcCidrInput}
                </div>
                <span className="text-[10px] text-stone-500 mt-1 block">All host bits = 0</span>
              </div>

              <div className="p-4 rounded-2xl border border-stone-200 bg-white">
                <span className="text-[10px] font-mono uppercase text-stone-500 font-bold">Broadcast Address</span>
                <div className="text-lg font-black text-stone-900 font-mono mt-1">
                  {subnetMetrics.broadcast}
                </div>
                <span className="text-[10px] text-stone-500 mt-1 block">All host bits = 1</span>
              </div>

              <div className="p-4 rounded-2xl border border-stone-200 bg-white">
                <span className="text-[10px] font-mono uppercase text-stone-500 font-bold">Usable Host Range</span>
                <div className="text-xs font-black text-blue-700 font-mono mt-1">
                  {subnetMetrics.firstHost} &ndash; {subnetMetrics.lastHost}
                </div>
                <span className="text-[10px] text-stone-500 mt-1 block">Valid interface assignments</span>
              </div>

              <div className="p-4 rounded-2xl border border-emerald-200 bg-emerald-50/50">
                <span className="text-[10px] font-mono uppercase text-emerald-900 font-bold">Usable Host Capacity</span>
                <div className="text-2xl font-black text-emerald-700 font-mono mt-1">
                  {subnetMetrics.usableHosts.toLocaleString()}
                </div>
                <span className="text-[10px] text-emerald-800 mt-1 block">Total addresses: {subnetMetrics.totalHosts.toLocaleString()}</span>
              </div>
            </div>

            {/* 32-Bit Binary Bitwise Breakdown */}
            <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-3">
              <span className="text-[10px] text-stone-400 uppercase tracking-widest block font-bold">
                Live 32-Bit Binary Bitwise AND Execution
              </span>
              <div className="space-y-1.5 text-stone-300 overflow-x-auto leading-relaxed">
                <div>
                  <span className="text-stone-400 inline-block w-24">Host IP:</span>
                  <code className="text-blue-400">{subnetMetrics.ipBinary}</code>
                </div>
                <div>
                  <span className="text-stone-400 inline-block w-24">Subnet Mask:</span>
                  <code className="text-amber-400">{subnetMetrics.maskBinary}</code>
                </div>
                <div className="pt-2 border-t border-stone-800 font-bold">
                  <span className="text-stone-400 inline-block w-24">Network ID:</span>
                  <code className="text-emerald-400">{subnetMetrics.netBinary}</code>
                </div>
              </div>
              <div className="pt-2 text-[11px] text-stone-400 font-sans">
                Notice: Network bits (where mask is 1) are preserved intact; host bits (where mask is 0) become 0.
              </div>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 3: VLSM HIERARCHY ALLOCATOR                                     */}
        {/* ================================================================== */}
        {activeTab === "vlsm-sim" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#ea580c] font-bold">
                  Interactive Simulator 2
                </span>
                <h3 className="text-xl font-black text-stone-900">
                  Variable Length Subnet Masking (VLSM) Hierarchy Planner
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Sorts departmental requirements from largest to smallest, computes optimal power-of-2
                  subnets, and allocates aligned, non-overlapping address ranges.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-stone-700">Parent Network:</span>
                <input
                  type="text"
                  value={vlsmBaseIp}
                  onChange={(e) => setVlsmBaseIp(e.target.value)}
                  className="p-1.5 rounded-xl border border-stone-300 bg-white font-mono text-xs font-bold w-32"
                />
              </div>
            </div>

            {/* Department Allocations Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-stone-200 rounded-2xl overflow-hidden">
                <thead className="bg-stone-100 text-stone-700 font-mono uppercase text-[10px]">
                  <tr>
                    <th className="p-3">Department / Segment</th>
                    <th className="p-3">Hosts Needed</th>
                    <th className="p-3">Allocated CIDR</th>
                    <th className="p-3">Network Address</th>
                    <th className="p-3">Subnet Mask</th>
                    <th className="p-3">Usable Host Range</th>
                    <th className="p-3">Capacity</th>
                    <th className="p-3">Efficiency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 font-mono">
                  {vlsmPlan.allocations.map((alloc, idx) => (
                    <tr key={idx} className="hover:bg-orange-50/40">
                      <td className="p-3 font-sans font-bold text-stone-900">{alloc.deptName}</td>
                      <td className="p-3 text-stone-700">{alloc.hostsNeeded} hosts</td>
                      <td className="p-3 font-bold text-[#ea580c]">{alloc.cidr}</td>
                      <td className="p-3 font-bold text-stone-800">{alloc.netAddress}</td>
                      <td className="p-3 text-stone-600">{alloc.mask}</td>
                      <td className="p-3 text-blue-700">{alloc.hostRange}</td>
                      <td className="p-3 text-emerald-700 font-bold">{alloc.usableCapacity}</td>
                      <td className="p-3 text-stone-600">{alloc.efficiency}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Allocation Summary */}
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div>
                <span className="font-bold text-stone-800 block">Total Allocated Block Space:</span>
                <span className="text-stone-600">
                  {vlsmPlan.totalAllocated} addresses consumed across {vlsmPlan.allocations.length} subnets.
                </span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-emerald-100 text-emerald-900 font-mono font-bold">
                Zero Overlap Verified &bull; Aligned on Power-of-2 Boundaries
              </div>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 4: NAT / PAT CONNECTION TRACKING SIMULATOR                      */}
        {/* ================================================================== */}
        {activeTab === "nat-sim" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#ea580c] font-bold">
                Interactive Simulator 3
              </span>
              <h3 className="text-xl font-black text-stone-900">
                NAT / PAT (Port Address Translation) Connection Tracking Lab
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                Inject packets from private RFC 1918 hosts. Watch the edge router rewrite private
                IP:port sockets to its public IP with unique Layer 4 tracking ports.
              </p>
            </div>

            {/* Packet Generation Controls */}
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 grid gap-4 sm:grid-cols-3">
              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">
                  Source Internal Host:
                </label>
                <select
                  value={selectedNatHost}
                  onChange={(e) => setSelectedNatHost(e.target.value)}
                  className="w-full p-2 rounded-xl border border-stone-300 bg-white text-xs font-mono font-bold"
                >
                  <option value="hostA">Host A (192.168.1.10)</option>
                  <option value="hostB">Host B (192.168.1.20)</option>
                  <option value="hostC">Host C (192.168.1.30)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">
                  Destination Internet Service:
                </label>
                <select
                  value={selectedNatDst}
                  onChange={(e) => setSelectedNatDst(e.target.value)}
                  className="w-full p-2 rounded-xl border border-stone-300 bg-white text-xs font-mono font-bold"
                >
                  <option value="web">Web Server (93.184.216.34:443 HTTPS)</option>
                  <option value="api">Google Cloud API (142.250.190.46:443)</option>
                  <option value="ssh">Remote Bastion (198.51.100.22:22 SSH)</option>
                </select>
              </div>

              <div className="flex items-end">
                <button
                  onClick={handleTransmitNatPacket}
                  className="w-full py-2 px-4 rounded-xl bg-[#ea580c] text-white text-xs font-bold hover:bg-[#c2410c] shadow-xs cursor-pointer flex items-center justify-center gap-2"
                >
                  <Play size={14} />
                  <span>Transmit Outbound Flow</span>
                </button>
              </div>
            </div>

            {/* Live NAT Translation Table */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase text-stone-600 font-bold block">
                Live Router NAT State Table (<code className="font-mono">show ip nat translations</code>)
              </span>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-stone-200 rounded-2xl overflow-hidden">
                  <thead className="bg-stone-100 text-stone-700 font-mono uppercase text-[10px]">
                    <tr>
                      <th className="p-3">Protocol</th>
                      <th className="p-3">Inside Local (Private Client)</th>
                      <th className="p-3">Inside Global (Public NAT IP:Port)</th>
                      <th className="p-3">Outside Global (Remote Server)</th>
                      <th className="p-3">State / Timeout</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 font-mono">
                    {natTable.map((entry) => (
                      <tr key={entry.id} className="hover:bg-orange-50/40">
                        <td className="p-3 font-bold text-stone-900">{entry.protocol}</td>
                        <td className="p-3 text-blue-700 font-bold">{entry.insideLocal}</td>
                        <td className="p-3 text-[#ea580c] font-black">{entry.insideGlobal}</td>
                        <td className="p-3 text-stone-700">{entry.outsideGlobal}</td>
                        <td className="p-3 text-emerald-700 font-sans text-[11px]">
                          {entry.state} ({entry.timeout})
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Translation Log */}
            {natLog.length > 0 && (
              <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-1">
                <span className="text-[10px] text-stone-400 uppercase tracking-widest block font-bold">
                  Router NAT Kernel Event Stream
                </span>
                {natLog.map((logMsg, i) => (
                  <div key={i} className="text-emerald-400">&bull; {logMsg}</div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 5: 8-BIT BINARY BIT FLIPPER PRACTICE GAME                      */}
        {/* ================================================================== */}
        {activeTab === "binary-game" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#ea580c] font-bold">
                  Interactive Simulator 4
                </span>
                <h3 className="text-xl font-black text-stone-900">
                  8-Bit Binary Bit Flipper & Mental Math Drills
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Click the individual bit weights to toggle them between 0 and 1. Practice matching
                  common subnet mask values and octet numbers instantly!
                </p>
              </div>

              <button
                onClick={generateNewChallenge}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-stone-300 bg-white text-xs font-bold text-stone-700 hover:bg-stone-50 cursor-pointer"
              >
                <Shuffle size={14} />
                <span>New Challenge Number</span>
              </button>
            </div>

            {/* Challenge Prompt */}
            <div className="p-5 rounded-2xl bg-orange-50 border border-orange-200 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-orange-900 block">Target Challenge Number:</span>
                <span className="text-3xl font-black font-mono text-[#ea580c]">{targetNumber}</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={checkGameAnswer}
                  className="px-5 py-2.5 rounded-xl bg-[#ea580c] text-white text-xs font-bold hover:bg-[#c2410c] shadow-xs cursor-pointer"
                >
                  Verify Bit Pattern
                </button>
              </div>
            </div>

            {gameMessage && (
              <div
                className={`p-4 rounded-2xl text-xs font-bold ${
                  gameMessage.includes("Correct")
                    ? "bg-emerald-100 text-emerald-900 border border-emerald-300"
                    : "bg-red-100 text-red-900 border border-red-300"
                }`}
              >
                {gameMessage}
              </div>
            )}

            {/* 8-Bit Interactive Flipper Buttons */}
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
              {bitWeights.map((weight, idx) => {
                const isSet = bitArray[idx] === 1;
                return (
                  <button
                    key={idx}
                    onClick={() => toggleBit(idx)}
                    className={`p-4 rounded-2xl border-2 transition text-center cursor-pointer ${
                      isSet
                        ? "bg-[#ea580c] border-[#ea580c] text-white shadow-md scale-102"
                        : "bg-white border-stone-200 text-stone-700 hover:border-orange-300"
                    }`}
                  >
                    <span className="text-[10px] font-mono block opacity-75">2^{7 - idx}</span>
                    <span className="text-xs font-bold block mb-1">Weight: {weight}</span>
                    <span className="text-2xl font-black font-mono">{bitArray[idx]}</span>
                  </button>
                );
              })}
            </div>

            {/* Live Result Readout */}
            <div className="p-5 rounded-2xl bg-stone-900 text-white font-mono text-xs flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-[10px] text-stone-400 uppercase block font-bold">Current Binary Pattern:</span>
                <span className="text-xl font-bold text-emerald-400">{bitArray.join("")}</span>
              </div>
              <div>
                <span className="text-[10px] text-stone-400 uppercase block font-bold">Calculated Decimal Total:</span>
                <span className="text-2xl font-black text-amber-400">{currentByteDecimal}</span>
              </div>
              <div>
                <span className="text-[10px] text-stone-400 uppercase block font-bold">Hexadecimal:</span>
                <span className="text-xl font-bold text-blue-400">
                  0x{currentByteDecimal.toString(16).toUpperCase().padStart(2, "0")}
                </span>
              </div>
            </div>
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
                Linux & Cisco Subnetting CLI Command Center
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                Copy production commands for calculating subnets, inspecting route tables, and configuring NAT.
              </p>
            </div>

            <div className="space-y-4">
              {/* Linux Commands */}
              <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-emerald-400 font-bold">Linux Kernel Subnet Commands (iproute2 & ipcalc)</span>
                  <button
                    onClick={() =>
                      copyCode(
                        `# Calculate subnet metrics from CLI
ipcalc 192.168.10.75/26

# Inspect interface IP and CIDR prefix
ip -4 addr show eth0

# Inspect IPv4 routing table
ip route show

# Configure outbound NAT overload (PAT) via iptables
iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE`,
                        "linux-subnet-cli"
                      )
                    }
                    className="flex items-center gap-1 px-2.5 py-1 rounded bg-stone-800 text-stone-300 hover:text-white text-[11px] cursor-pointer"
                  >
                    {copiedCodeId === "linux-subnet-cli" ? <Check size={12} /> : <Copy size={12} />}
                    <span>{copiedCodeId === "linux-subnet-cli" ? "Copied" : "Copy Linux Commands"}</span>
                  </button>
                </div>
                <pre className="text-stone-300 overflow-x-auto leading-relaxed">
{`# 1. Calculate subnet using ipcalc
$ ipcalc 192.168.10.75/26
Address:   192.168.10.75        11000000.10101000.00001010.01 001011
Netmask:   255.255.255.192 = 26 11111111.11111111.11111111.11 000000
Wildcard:  0.0.0.63             00000000.00000000.00000000.00 111111
=>
Network:   192.168.10.64/26     11000000.10101000.00001010.01 000000
HostMin:   192.168.10.65        11000000.10101000.00001010.01 000001
HostMax:   192.168.10.126       11000000.10101000.00001010.01 111110
Broadcast: 192.168.10.127       11000000.10101000.00001010.01 111111
Hosts/Net: 62                   (Class C)`}
                </pre>
              </div>

              {/* Cisco IOS Router CLI */}
              <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-orange-400 font-bold">Cisco IOS NAT & Subnet Configuration</span>
                  <button
                    onClick={() =>
                      copyCode(
                        `# Configure Router sub-interfaces for 802.1Q subnets
interface GigabitEthernet0/0.10
 encapsulation dot1Q 10
 ip address 192.168.10.1 255.255.255.192
 ip nat inside

interface GigabitEthernet0/0.20
 encapsulation dot1Q 20
 ip address 192.168.10.65 255.255.255.224
 ip nat inside

# Outside Internet interface
interface GigabitEthernet0/1
 ip address 203.0.113.10 255.255.255.252
 ip nat outside

# Configure NAT Overload (PAT)
access-list 1 permit 192.168.10.0 0.0.0.255
ip nat inside source list 1 interface GigabitEthernet0/1 overload`,
                        "cisco-nat-cli"
                      )
                    }
                    className="flex items-center gap-1 px-2.5 py-1 rounded bg-stone-800 text-stone-300 hover:text-white text-[11px] cursor-pointer"
                  >
                    {copiedCodeId === "cisco-nat-cli" ? <Check size={12} /> : <Copy size={12} />}
                    <span>{copiedCodeId === "cisco-nat-cli" ? "Copied" : "Copy Router Config"}</span>
                  </button>
                </div>
                <pre className="text-stone-300 overflow-x-auto leading-relaxed">
{`Router# show ip nat translations
Pro Inside global         Inside local          Outside local         Outside global
tcp 203.0.113.10:40001    192.168.10.25:51514   93.184.216.34:443     93.184.216.34:443
udp 203.0.113.10:40002    192.168.10.14:53210   1.1.1.1:53            1.1.1.1:53`}
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
                  Module 5 Knowledge Assessment
                </span>
                <h3 className="text-xl font-black text-stone-900">
                  IPv4 Addressing & Subnetting Engineering Exam
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  10 rigorous questions testing binary conversion, CIDR prefixes, block sizes, VLSM, RFC 1918, and NAT.
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
                  Enterprise IPv4 Addressing & Subnetting Design Report
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Production markdown documentation template for campus VLSM allocations, router sub-interfaces, and NAT policy.
                </p>
              </div>

              <button
                onClick={() =>
                  copyCode(
                    `# Enterprise IPv4 Addressing & Subnetting Design Report

## 1. Executive Summary
- **Organization:** Global Tech Enterprises Inc.
- **Lead Network Architect:** IP Engineering Team
- **Base Allocation:** RFC 1918 Block \`10.100.0.0/16\` (65,536 addresses)
- **Design Goals:** Provide isolated departmental subnets using VLSM, reserve 25% growth capacity, and configure PAT for secure Internet egress.

## 2. Departmental VLSM Subnet Allocation Plan
| Department / Function | Hosts Needed | Allocated CIDR | Subnet Mask | Network Address | Usable Host Range | Broadcast | Gateway SVI |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Engineering / R&D** | 120 | /25 | 255.255.255.128 | 10.100.0.0 | 10.100.0.1 – 10.100.0.126 | 10.100.0.127 | 10.100.0.1 |
| **Sales & Marketing** | 55 | /26 | 255.255.255.192 | 10.100.0.128 | 10.100.0.129 – 10.100.0.190 | 10.100.0.191 | 10.100.0.129 |
| **Corporate Servers** | 28 | /27 | 255.255.255.224 | 10.100.0.192 | 10.100.0.193 – 10.100.0.222 | 10.100.0.223 | 10.100.0.193 |
| **Guest Wi-Fi (VLAN 50)** | 14 | /28 | 255.255.255.240 | 10.100.0.224 | 10.100.0.225 – 10.100.0.238 | 10.100.0.239 | 10.100.0.225 |
| **Core WAN P2P Link** | 2 | /31 | 255.255.255.254 | 10.100.0.240 | 10.100.0.240 – 10.100.0.241 | None (RFC 3021) | 10.100.0.240 |

## 3. Network Address Translation (NAT / PAT) Design
- **Public Uplink Interface:** GigabitEthernet0/1 (\`203.0.113.10/30\`)
- **NAT Mode:** PAT (NAT Overload)
- **Access Control List:** Permits internal corporate RFC 1918 subnets; blocks guest Wi-Fi from reaching server subnet.
- **Port Forwarding Rule:** \`203.0.113.10:443\` forwarded internally to \`10.100.0.195:443\` (DMZ Web Server).

## 4. Verification & Validation Evidence
\`\`\`bash
# Linux Kernel Route & Interface Verification
$ ipcalc 10.100.0.128/26
Address:   10.100.0.128
Netmask:   255.255.255.192 = 26
Network:   10.100.0.128/26
HostMin:   10.100.0.129
HostMax:   10.100.0.190
Broadcast: 10.100.0.191
Hosts/Net: 62
\`\`\`
- **Validation:** Zero subnet overlap detected. Bitwise verification confirms all subnets align strictly to power-of-2 boundaries.`,
                    "ipv4-report-copy"
                  )
                }
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#ea580c] text-white text-xs font-bold hover:bg-[#c2410c] shadow-xs cursor-pointer"
              >
                {copiedCodeId === "ipv4-report-copy" ? <Check size={14} /> : <Copy size={14} />}
                <span>{copiedCodeId === "ipv4-report-copy" ? "Copied" : "Copy Report Template"}</span>
              </button>
            </div>

            <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed">
              <pre>
{`# Enterprise IPv4 Addressing & Subnetting Design Report

## 1. Executive Summary
- Organization: Global Tech Enterprises Inc.
- Base Parent Network: 10.100.0.0/16
- Objective: Partition isolated subnets using VLSM without address overlap.

## 2. Department Allocations
- Engineering: 10.100.0.0/25 (126 usable hosts)
- Sales: 10.100.0.128/26 (62 usable hosts)
- Servers: 10.100.0.192/27 (30 usable hosts)
- Guest Wi-Fi: 10.100.0.224/28 (14 usable hosts)
- WAN P2P: 10.100.0.240/31 (RFC 3021)

## 3. NAT/PAT Implementation
- All internal subnets overload onto public IP 203.0.113.10.`}
              </pre>
            </div>
          </div>
        )}

        {/* Footer Navigation Bar */}
        <div className="mt-10 pt-6 border-t border-[#e7e3da] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => navigate("/learning/networks/datalink")}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#e7e3da] bg-white text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#ea580c] transition cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 4 — Data Link & Ethernet</span>
          </button>

          <button
            onClick={() => navigate("/learning/networks/ipv6")}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#ea580c] text-white text-xs font-bold hover:bg-[#c2410c] shadow-xs transition cursor-pointer"
          >
            <span>Next: Module 6 — IPv6 & Modern Addressing</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
