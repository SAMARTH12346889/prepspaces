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
  Zap,
  Play,
  Pause,
  RefreshCw,
  Sliders,
  Share2,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* COMPUTER NETWORKS & INTERNET ENGINEERING: MODULE 4                         */
/* DATA LINK LAYER, ETHERNET SWITCHING & LINK SECURITY                        */
/* -------------------------------------------------------------------------- */

export default function NetworkDataLink() {
  const navigate = useNavigate();

  // Active top-level tabs
  const [activeTab, setActiveTab] = useState("theory"); // theory | switch-sim | stp-sim | vlan-sim | arp-sim | cli | quiz | lab-report
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2500);
  };

  // Track scroll navigation & synced topics
  const topics = [
    { id: "sec-4-1", name: "4.1 Data Link Layer Fundamentals" },
    { id: "sec-4-2", name: "4.2 Ethernet Frame Structure" },
    { id: "sec-4-3", name: "4.3 MAC Addresses & Types" },
    { id: "sec-4-4", name: "4.4 ARP & Address Resolution" },
    { id: "sec-4-5", name: "4.5 Switching & Frame Forwarding" },
    { id: "sec-4-6", name: "4.6 VLANs & 802.1Q Tagging" },
    { id: "sec-4-7", name: "4.7 Trunking & Multi-Switch Architectures" },
    { id: "sec-4-8", name: "4.8 Spanning Tree Protocol (STP)" },
    { id: "sec-4-9", name: "4.9 Link-Layer Errors & Diagnostics" },
    { id: "sec-4-10", name: "4.10 Link Security & Defenses" },
    { id: "sec-4-11", name: "4.11 Practical Tools & CLI" },
    { id: "sec-4-12", name: "4.12 Hands-on Lab Sequence" },
    { id: "sec-4-13", name: "4.13 Capstone & Assessment" },
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
  /* SIMULATOR 1: INTERACTIVE SWITCH CAM TABLE & FORWARDING ENGINE              */
  /* -------------------------------------------------------------------------- */
  const initialCamTable = [
    { mac: "00:1A:2B:3C:4D:01", port: 1, vlan: 10, host: "Host A", age: 14 },
    { mac: "00:1A:2B:3C:4D:02", port: 2, vlan: 10, host: "Host B", age: 48 },
  ];

  const [camTable, setCamTable] = useState(initialCamTable);
  const [selectedIngressPort, setSelectedIngressPort] = useState(1);
  const [selectedFrameType, setSelectedFrameType] = useState("known-unicast"); // known-unicast | unknown-unicast | broadcast | same-port
  const [switchLog, setSwitchLog] = useState([]);
  const [lastAction, setLastAction] = useState(null);

  const handleSimulateSwitchFrame = () => {
    let srcMac = "";
    let dstMac = "";
    let srcHost = "";
    let dstHost = "";

    if (selectedIngressPort === 1) {
      srcMac = "00:1A:2B:3C:4D:01";
      srcHost = "Host A";
    } else if (selectedIngressPort === 2) {
      srcMac = "00:1A:2B:3C:4D:02";
      srcHost = "Host B";
    } else if (selectedIngressPort === 3) {
      srcMac = "00:1A:2B:3C:4D:03";
      srcHost = "Host C";
    } else {
      srcMac = "00:1A:2B:3C:4D:04";
      srcHost = "Host D / Router";
    }

    if (selectedFrameType === "known-unicast") {
      dstMac = selectedIngressPort === 1 ? "00:1A:2B:3C:4D:02" : "00:1A:2B:3C:4D:01";
      dstHost = selectedIngressPort === 1 ? "Host B (Port 2)" : "Host A (Port 1)";
    } else if (selectedFrameType === "unknown-unicast") {
      dstMac = "00:1A:2B:3C:4D:99";
      dstHost = "Unknown Host 99";
    } else if (selectedFrameType === "broadcast") {
      dstMac = "FF:FF:FF:FF:FF:FF";
      dstHost = "All VLAN 10 Hosts (Broadcast)";
    } else {
      // same-port
      dstMac = srcMac;
      dstHost = `${srcHost} (Loopback/Local segment)`;
    }

    // 1. Learn source MAC
    let updatedTable = [...camTable];
    const existingIndex = updatedTable.findIndex((entry) => entry.mac === srcMac);
    let learnNote = "";

    if (existingIndex >= 0) {
      if (updatedTable[existingIndex].port !== selectedIngressPort) {
        learnNote = `MAC movement detected! Re-associated ${srcMac} from Port ${updatedTable[existingIndex].port} to Port ${selectedIngressPort}.`;
        updatedTable[existingIndex].port = selectedIngressPort;
      } else {
        learnNote = `Refreshed aging timer for ${srcMac} on Port ${selectedIngressPort}.`;
      }
      updatedTable[existingIndex].age = 0;
    } else {
      learnNote = `Learned new source MAC ${srcMac} on Port ${selectedIngressPort} (VLAN 10).`;
      updatedTable.push({
        mac: srcMac,
        port: selectedIngressPort,
        vlan: 10,
        host: srcHost,
        age: 0,
      });
    }

    // 2. Lookup destination
    let forwardingDecision = "";
    let egressPorts = [];

    if (dstMac === "FF:FF:FF:FF:FF:FF") {
      forwardingDecision = "FLOOD: Broadcast frame flooded out all active ports in VLAN 10 except ingress port.";
      egressPorts = [1, 2, 3, 4].filter((p) => p !== selectedIngressPort);
    } else {
      const match = updatedTable.find((e) => e.mac === dstMac);
      if (!match) {
        forwardingDecision = `FLOOD: Unknown unicast destination (${dstMac}). Flooded to all ports in VLAN 10 except Port ${selectedIngressPort}.`;
        egressPorts = [1, 2, 3, 4].filter((p) => p !== selectedIngressPort);
      } else if (match.port === selectedIngressPort) {
        forwardingDecision = `FILTER / DROP: Destination (${dstMac}) resides on ingress Port ${selectedIngressPort}. Frame discarded to prevent loop/redundancy.`;
        egressPorts = [];
      } else {
        forwardingDecision = `FORWARD: Known unicast destination. Forwarded exclusively out egress Port ${match.port}.`;
        egressPorts = [match.port];
      }
    }

    setCamTable(updatedTable);
    const actionResult = {
      timestamp: new Date().toLocaleTimeString(),
      ingressPort: selectedIngressPort,
      srcMac,
      dstMac,
      srcHost,
      dstHost,
      learnNote,
      forwardingDecision,
      egressPorts,
    };
    setLastAction(actionResult);
    setSwitchLog((prev) => [actionResult, ...prev.slice(0, 9)]);
  };

  const resetCamTable = () => {
    setCamTable(initialCamTable);
    setSwitchLog([]);
    setLastAction(null);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 2: SPANNING TREE PROTOCOL (STP) TRIANGLE TOPOLOGY                */
  /* -------------------------------------------------------------------------- */
  const [linkABAlive, setLinkABAlive] = useState(true);
  const [linkBCAlive, setLinkBCAlive] = useState(true);
  const [linkACAlive, setLinkACAlive] = useState(true);
  const [stpRootPriority, setStpRootPriority] = useState(4096); // Switch A priority

  // Switch A: Priority = stpRootPriority, MAC = 00:00:00:00:00:0A (Root Bridge)
  // Switch B: Priority = 32768, MAC = 00:00:00:00:00:0B
  // Switch C: Priority = 32768, MAC = 00:00:00:00:00:0C

  // Path Costs: Cost = 4 (1 Gbps)
  // Normal state (all links up):
  // Switch A is Root Bridge (lowest Bridge ID: 4096.00..0A).
  // Switch A ports: Port 1 (to B) = Designated (Forwarding), Port 2 (to C) = Designated (Forwarding).
  // Switch B ports: Port 1 (to A) = Root Port (Cost 4, Forwarding), Port 2 (to C) = Designated (Forwarding).
  // Switch C ports: Port 1 (to A) = Root Port (Cost 4, Forwarding), Port 2 (to B) = Alternate / Blocked (Discarding) to break the loop!

  let stpState = {
    rootBridge: "Switch A (Bridge ID: 4096 / 00:00:00:00:00:0A)",
    switchA: {
      p1: { role: "Designated (DP)", state: "FORWARDING", cost: 0 },
      p2: { role: "Designated (DP)", state: "FORWARDING", cost: 0 },
    },
    switchB: {
      p1: linkABAlive
        ? { role: "Root Port (RP)", state: "FORWARDING", cost: 4 }
        : { role: "Disabled", state: "DOWN", cost: 0 },
      p2: linkBCAlive
        ? linkABAlive
          ? { role: "Designated (DP)", state: "FORWARDING", cost: 4 }
          : { role: "Root Port (RP)", state: "FORWARDING", cost: 8 }
        : { role: "Disabled", state: "DOWN", cost: 0 },
    },
    switchC: {
      p1: linkACAlive
        ? { role: "Root Port (RP)", state: "FORWARDING", cost: 4 }
        : { role: "Disabled", state: "DOWN", cost: 0 },
      p2: linkBCAlive
        ? linkACAlive && linkABAlive
          ? { role: "Alternate Port (AP)", state: "BLOCKING / DISCARDING", cost: 8 }
          : { role: "Designated (DP)", state: "FORWARDING", cost: 4 }
        : { role: "Disabled", state: "DOWN", cost: 0 },
    },
  };

  if (!linkACAlive && linkABAlive && linkBCAlive) {
    // Link AC broke! Switch C's Alternate Port on link BC unblocks to restore connectivity to Root via Switch B!
    stpState.switchC.p2 = { role: "Root Port (RP)", state: "FORWARDING", cost: 8 };
    stpState.switchB.p2 = { role: "Designated (DP)", state: "FORWARDING", cost: 4 };
  }

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 3: 802.1Q VLAN TAGGING & FRAME OVERHEAD CALCULATOR               */
  /* -------------------------------------------------------------------------- */
  const [payloadBytes, setPayloadBytes] = useState(100);
  const [isVlanTagged, setIsVlanTagged] = useState(true);
  const [vlanIdInput, setVlanIdInput] = useState(20);
  const [pcpPriority, setPcpPriority] = useState(5); // 0-7 (e.g. 5 = Voice)

  const minPayload = 46;
  const paddingBytes = payloadBytes < minPayload ? minPayload - payloadBytes : 0;
  const standardHeaderBytes = 14; // Dest MAC (6) + Src MAC (6) + EtherType (2)
  const vlanTagBytes = isVlanTagged ? 4 : 0;
  const fcsBytes = 4;
  const totalWireFrameBytes =
    standardHeaderBytes + vlanTagBytes + payloadBytes + paddingBytes + fcsBytes;
  const efficiencyPercent = (
    (payloadBytes / (totalWireFrameBytes + 8)) * // 8 bytes wire preamble + SFD
    100
  ).toFixed(1);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 4: ARP RESOLUTION & NEXT-HOP TRACER                              */
  /* -------------------------------------------------------------------------- */
  const [arpScenario, setArpScenario] = useState("local"); // local | gateway
  const [arpStep, setArpStep] = useState(0);

  const localSteps = [
    {
      title: "Step 1: Check Local Subnet & ARP Cache",
      desc: "Host A (192.168.1.10/24) wants to send an ICMP packet to Host B (192.168.1.20/24). Both share the 192.168.1.0/24 prefix. Host A checks its local ARP cache (`ip neigh`). The entry is missing (Stale/Empty).",
      pdu: "Packet queued in Host A socket buffer awaiting L2 address resolution.",
      highlight: "Subnet Match: Direct L2 delivery eligible.",
    },
    {
      title: "Step 2: Host A Broadcasts ARP Request",
      desc: "Host A generates an Ethernet broadcast frame (Dest MAC: FF:FF:FF:FF:FF:FF, EtherType: 0x0806). ARP Payload: 'Who has 192.168.1.20? Tell 192.168.1.10 at 00:1A:2B:3C:4D:01'.",
      pdu: "Frame flooded by switch to all ports in VLAN 10.",
      highlight: "Dest MAC: FF:FF:FF:FF:FF:FF (Broadcast)",
    },
    {
      title: "Step 3: Host B Unicasts ARP Reply",
      desc: "Host C and Router ignore the request because target IP does not match. Host B inspects the ARP request, learns Host A's MAC into its own ARP cache, and transmits an ARP Reply unicast directly to Host A's MAC.",
      pdu: "ARP Reply: '192.168.1.20 is at 00:1A:2B:3C:4D:02' (Dest MAC: 00:1A:2B:3C:4D:01).",
      highlight: "Dest MAC: 00:1A:2B:3C:4D:01 (Unicast)",
    },
    {
      title: "Step 4: Host A Updates Cache & Transmits IP Data",
      desc: "Host A caches Host B's MAC address in its ARP neighbor table. The original IP packet is encapsulated in an Ethernet II frame: Dest MAC = Host B, Src MAC = Host A. Frame is switched directly without flooding.",
      pdu: "Ethernet Frame: Src MAC 00:1A:2B:3C:4D:01 -> Dst MAC 00:1A:2B:3C:4D:02 | IP Data",
      highlight: "ARP Cached. Direct wire transmission complete.",
    },
  ];

  const gatewaySteps = [
    {
      title: "Step 1: Prefix Evaluation Identifies Remote Subnet",
      desc: "Host A (192.168.1.10/24) wants to load https://prepspaces.com (93.184.216.34). Host A applies its subnet mask: 93.184.216.34 is OUTSIDE the local 192.168.1.0/24 subnet! Traffic MUST pass through the Default Gateway (192.168.1.1).",
      pdu: "Target L3 IP remains 93.184.216.34. Next-Hop L3 IP is Gateway 192.168.1.1.",
      highlight: "Route lookup: 0.0.0.0/0 via 192.168.1.1",
    },
    {
      title: "Step 2: ARP Resolves Gateway MAC, NOT Remote Server",
      desc: "Host A MUST NOT ARP for 93.184.216.34 (routers block broadcasts). Host A checks ARP cache for Default Gateway 192.168.1.1. If missing, it broadcasts: 'Who has 192.168.1.1?'. Gateway router replies with its own interface MAC (00:00:5E:00:53:01).",
      pdu: "ARP Request target IP = 192.168.1.1 (Gateway).",
      highlight: "Learned Gateway MAC: 00:00:5E:00:53:01",
    },
    {
      title: "Step 3: Host A Frames Packet to Gateway MAC",
      desc: "Host A encapsulates the IP packet into an Ethernet frame. Crucial: Destination IP is 93.184.216.34 (Web Server), but Destination MAC is 00:00:5E:00:53:01 (Default Gateway Router)! Source MAC is Host A.",
      pdu: "Ethernet Frame: Dst MAC = Router | Src MAC = Host A | Dst IP = 93.184.216.34 | Src IP = 192.168.1.10",
      highlight: "L2 Destination = Gateway MAC, L3 Destination = Server IP",
    },
    {
      title: "Step 4: Router Rewrites L2 Header for Next Hop",
      desc: "Router receives frame, verifies FCS, strips Ethernet L2 header, decrements IP TTL, computes new IP checksum, and looks up route to 93.184.216.34. It constructs a brand NEW Layer 2 header with its egress interface MAC as source and ISP Next-Hop as destination MAC!",
      pdu: "L3 IP Header preserved. L2 Ethernet header completely regenerated at every hop.",
      highlight: "Hop-by-hop MAC rewrite. End-to-end IP preservation.",
    },
  ];

  const currentArpSteps = arpScenario === "local" ? localSteps : gatewaySteps;

  /* -------------------------------------------------------------------------- */
  /* QUIZ DATA (10 QUESTIONS)                                                   */
  /* -------------------------------------------------------------------------- */
  const quizQuestions = [
    {
      question:
        "When an Ethernet switch receives a frame with an unknown destination MAC address, what action does it take?",
      options: [
        "It sends an ICMP Destination Host Unreachable packet back to the sender.",
        "It floods the frame out of all ports belonging to the same VLAN, except the ingress port on which the frame arrived.",
        "It buffers the frame and generates an ARP request to locate the destination host.",
        "It drops the frame immediately into the bit-bucket and increments the interface error counter.",
      ],
      correct: 1,
      rationale:
        "When a switch receives a frame for a unicast destination MAC address not currently present in its CAM table (unknown unicast), it floods the frame out all ports participating in that VLAN except the receiving port. This ensures the frame reaches the destination even before the switch has learned its location.",
    },
    {
      question:
        "What is the function of the I/G (Individual/Group) bit located in the first octet of an Ethernet MAC address?",
      options: [
        "It determines whether the MAC address is 48-bit or 64-bit EUI.",
        "It specifies whether the frame should be forwarded with 802.1Q VLAN tagging.",
        "Bit 0 specifies whether the address is Unicast (0, individual) or Multicast/Broadcast (1, group).",
        "It indicates whether the link operates at Half Duplex or Full Duplex.",
      ],
      correct: 2,
      rationale:
        "The least significant bit (bit 0) of the first byte of a MAC address is the Individual/Group (I/G) bit. When set to 0, it represents a unicast address assigned to an individual network interface. When set to 1, it represents a group address (multicast or broadcast, such as 01:00:5E:... for IPv4 multicast or FF:FF:FF:FF:FF:FF for broadcast).",
    },
    {
      question:
        "Why is Spanning Tree Protocol (STP) necessary in redundant switched Ethernet networks?",
      options: [
        "Because Ethernet frames lack a Time-To-Live (TTL) field; without STP, loops cause endless broadcast storms and CAM table thrashing.",
        "Because Ethernet switches cannot operate at speeds exceeding 1 Gbps without tree aggregation.",
        "Because IP routers cannot route packets between switches without STP BPDU synchronization.",
        "To allocate dynamic IP addresses automatically across redundant trunks.",
      ],
      correct: 0,
      rationale:
        "Unlike IP packets which contain a TTL (Time-To-Live) or Hop Limit counter decremented at each router, Ethernet Layer 2 frames have no TTL or loop-detection field. In a topology with redundant physical paths, unmanaged loops cause broadcast frames to circulate endlessly, consuming 100% of link bandwidth (broadcast storm) and rapidly corrupting switch CAM tables.",
    },
    {
      question:
        "What happens to the Ethernet frame header when Host A transmits an IP packet to a web server on the Internet via its Default Gateway?",
      options: [
        "Host A sends an ARP request to find the web server's public MAC address.",
        "The destination MAC address is set to the Default Gateway's MAC address, while the destination IP address remains the web server's IP.",
        "The destination MAC address is set to the web server's MAC address, while the IP address is rewritten to the gateway.",
        "The Ethernet frame is encapsulated in an 802.1Q tag containing the server's Autonomous System Number.",
      ],
      correct: 1,
      rationale:
        "MAC addresses have link-local scope and never traverse Layer 3 routers. Host A evaluates the destination IP, determines it is outside the local subnet, and addresses the Layer 2 Ethernet frame to the Default Gateway's MAC address. The Layer 3 Destination IP remains the end-to-end web server IP.",
    },
    {
      question:
        "What is the standard minimum payload size for an untagged Ethernet II frame, and why does a minimum size exist?",
      options: [
        "0 bytes; modern switches do not require any minimum size.",
        "46 bytes; required to guarantee a 64-byte minimum frame size so legacy CSMA/CD collision detection could function across the maximum network diameter.",
        "64 bytes; required by the 802.1Q tag parser.",
        "1500 bytes; matching the standard Internet MTU.",
      ],
      correct: 1,
      rationale:
        "The minimum payload size is 46 bytes. Combined with the 14-byte Ethernet header and 4-byte FCS, this ensures an overall minimum frame size of 64 bytes (512 bit-times at 10 Mbps). This duration was mathematically required for slot-time collision detection in shared-medium half-duplex CSMA/CD Ethernet.",
    },
    {
      question:
        "In an IEEE 802.1Q tagged frame, how many bits are allocated to the VLAN Identifier (VID), and what is the valid usable VLAN range?",
      options: [
        "8 bits (VLANs 1 to 255)",
        "12 bits (VLANs 1 to 4094, with 0 and 4095 reserved)",
        "16 bits (VLANs 1 to 65535)",
        "24 bits (VLANs 1 to 16777214)",
      ],
      correct: 1,
      rationale:
        "The 802.1Q tag allocates 12 bits for the VLAN ID (VID). 2^12 = 4096 possible values. VID 0 is reserved for priority-tagged frames (PCP only), and VID 4095 is reserved for system use, yielding the standard usable range of VLANs 1 through 4094.",
    },
    {
      question:
        "What security risk occurs when an attacker launches a CAM Table Exhaustion (MAC Flooding) attack using tools like `macof`?",
      options: [
        "The switch crashes completely and reboots into ROMmon mode.",
        "The switch CAM table fills with fake random source MACs; the switch can no longer learn valid MACs and falls back to flooding all unicast traffic like a hub, allowing the attacker to sniff frames.",
        "The attacker steals the root bridge role by generating lower BPDU priorities.",
        "All VLAN tags are stripped, causing cross-VLAN broadcast leaks.",
      ],
      correct: 1,
      rationale:
        "In a CAM table exhaustion attack, the attacker rapidly generates thousands of frames with randomized source MACs. Once the switch's hardware CAM table fills to capacity, it cannot store legitimate host MACs. Consequently, incoming unicast frames are treated as unknown unicast and flooded out all ports, allowing the attacker on an access port to capture traffic not intended for them.",
    },
    {
      question:
        "How does Dynamic ARP Inspection (DAI) prevent ARP spoofing / poisoning attacks on an enterprise switch?",
      options: [
        "By encrypting all ARP request packets with TLS 1.3.",
        "By intercepting and validating ARP packets against the trusted DHCP Snooping binding database; invalid IP-to-MAC mappings are dropped.",
        "By disabling the ARP protocol entirely and replacing it with DNS lookups.",
        "By placing all ports into STP blocking state whenever an ARP reply is detected.",
      ],
      correct: 1,
      rationale:
        "Dynamic ARP Inspection (DAI) inspects all ARP requests and replies on untrusted switch ports. It verifies that the sender IP and sender MAC in the ARP payload match an authentic entry in the switch's DHCP Snooping binding database (or static ARP ACL). Gratuitous ARP forgeries or spoofed replies are discarded before poisoning client caches.",
    },
    {
      question:
        "What is the difference between Store-and-Forward and Cut-Through switching architectures?",
      options: [
        "Store-and-forward routes Layer 3 IP, while cut-through switches Layer 2 MACs.",
        "Store-and-forward buffers the entire frame and validates the FCS CRC checksum before forwarding; cut-through reads only the destination MAC header and immediately begins transmitting, achieving lower latency at the risk of propagating corrupted frames.",
        "Cut-through only works on copper cables; store-and-forward is required for optical fiber.",
        "Store-and-forward requires half-duplex links; cut-through requires full-duplex links.",
      ],
      correct: 1,
      rationale:
        "Store-and-forward switches buffer the entire Ethernet frame, calculate its CRC-32 Frame Check Sequence, and drop invalid/corrupted frames before they consume downstream bandwidth. Cut-through switches read only the first 6 bytes (Destination MAC) and begin egress forwarding immediately, reducing forwarding latency to sub-microsecond levels at the expense of propagating corrupted runts and errored frames.",
    },
    {
      question:
        "What occurs during a 'Native VLAN mismatch' configuration error between two connected 802.1Q trunk switches?",
      options: [
        "The trunk link physically shuts down with an SFP transceiver error.",
        "Untagged frames transmitted by Switch A on its native VLAN are received by Switch B and placed into Switch B's native VLAN, causing traffic leakage between two distinct VLANs.",
        "All BPDUs are converted into broadcast IP packets.",
        "The switches automatically negotiate a new common VLAN using LACP.",
      ],
      correct: 1,
      rationale:
        "By definition, native VLAN traffic on an 802.1Q trunk is transmitted untagged. If Switch A's native VLAN is 10 and Switch B's native VLAN is 20, an untagged frame sent by a host in VLAN 10 on Switch A will cross the trunk untagged and be placed directly into VLAN 20 on Switch B. This creates an unintended Layer 2 bridge between isolated security segments.",
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
                Computer Networks & Internet Engineering · Module 4
              </span>
              <h1 className="text-base sm:text-lg font-black tracking-tight text-stone-900">
                Data Link Layer, Ethernet Switching & Link Security
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
              Take Module Quiz
            </button>
          </div>
        </div>
      </header>

      {/* Module Horizontal Track Navigation */}
      <div className="bg-[#f0ece1]/70 border-b border-[#e7e3da]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <ModuleNav track="networks" currentModuleId="datalink" />
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
            <span>Complete Curriculum (4.1 – 4.13)</span>
          </button>

          <button
            onClick={() => setActiveTab("switch-sim")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === "switch-sim"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200/80"
            }`}
          >
            <Cpu size={14} />
            <span>CAM Switch Simulator</span>
          </button>

          <button
            onClick={() => setActiveTab("stp-sim")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === "stp-sim"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200/80"
            }`}
          >
            <Workflow size={14} />
            <span>STP Loop Prevention</span>
          </button>

          <button
            onClick={() => setActiveTab("vlan-sim")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === "vlan-sim"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200/80"
            }`}
          >
            <Layers size={14} />
            <span>802.1Q VLAN Tagging</span>
          </button>

          <button
            onClick={() => setActiveTab("arp-sim")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === "arp-sim"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200/80"
            }`}
          >
            <Search size={14} />
            <span>ARP Next-Hop Tracer</span>
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
            <span>Switch & Linux CLI</span>
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
        {/* TAB 1: COMPLETE COMPREHENSIVE CURRICULUM (4.1 to 4.13)              */}
        {/* ================================================================== */}
        {activeTab === "theory" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Sticky Topic Outline */}
            <aside className="hidden lg:block col-span-1">
              <div className="sticky top-28 bg-white/80 p-5 rounded-3xl border border-[#e7e3da] shadow-xs space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 font-bold block">
                  Module 4 Sections
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
                    onClick={() => setActiveTab("switch-sim")}
                    className="w-full text-left px-3 py-1.5 rounded-lg text-xs bg-orange-50 text-[#ea580c] font-semibold hover:bg-orange-100 transition flex items-center justify-between"
                  >
                    <span>CAM Switch Lab</span>
                    <ArrowRight size={12} />
                  </button>
                  <button
                    onClick={() => setActiveTab("stp-sim")}
                    className="w-full text-left px-3 py-1.5 rounded-lg text-xs bg-emerald-50 text-emerald-800 font-semibold hover:bg-emerald-100 transition flex items-center justify-between"
                  >
                    <span>STP Loop Simulator</span>
                    <ArrowRight size={12} />
                  </button>
                  <button
                    onClick={() => setActiveTab("vlan-sim")}
                    className="w-full text-left px-3 py-1.5 rounded-lg text-xs bg-blue-50 text-blue-800 font-semibold hover:bg-blue-100 transition flex items-center justify-between"
                  >
                    <span>802.1Q Frame Tagging</span>
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
                  <span>Foundational to Advanced Network Systems</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
                  Data Link Layer, Ethernet Switching & Link Security
                </h2>
                <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
                  How devices communicate across local networks, how Ethernet switches learn and
                  forward frames, how IP addresses are resolved to link-layer hardware addresses,
                  and how 802.1Q VLANs and Spanning Tree Protocol (STP) build resilient, loop-free
                  enterprise backbones.
                </p>

                <div className="mt-6 pt-6 border-t border-[#e7e3da] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/60">
                    <span className="block text-[10px] font-mono text-stone-500 uppercase font-bold">Standard</span>
                    <span className="text-sm font-extrabold text-stone-800">IEEE 802.3 / 802.1Q</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/60">
                    <span className="block text-[10px] font-mono text-stone-500 uppercase font-bold">PDU</span>
                    <span className="text-sm font-extrabold text-stone-800">Ethernet Frame</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/60">
                    <span className="block text-[10px] font-mono text-stone-500 uppercase font-bold">Addressing</span>
                    <span className="text-sm font-extrabold text-stone-800">48-bit MAC</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/60">
                    <span className="block text-[10px] font-mono text-stone-500 uppercase font-bold">Forwarding</span>
                    <span className="text-sm font-extrabold text-stone-800">CAM Table & STP</span>
                  </div>
                </div>
              </div>

              {/* ------------------------------------------------------------ */}
              {/* SECTION 4.1: DATA LINK LAYER FUNDAMENTALS                    */}
              {/* ------------------------------------------------------------ */}
              <section id="sec-4-1" className="scroll-mt-36 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 text-xs font-mono font-bold">
                    4.1
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    Data Link Layer Fundamentals
                  </h3>
                </div>

                <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 space-y-6">
                  <p className="text-sm text-stone-700 leading-relaxed">
                    The Data Link Layer (OSI Layer 2) is responsible for transferring datagrams between
                    adjacent nodes connected over a physical transmission medium. While the Physical
                    Layer moves raw bits across copper, fiber, or air, the Data Link Layer provides
                    <strong> framing</strong>, <strong>local physical addressing (MAC)</strong>,
                    <strong> medium access arbitration</strong>, and <strong>error detection (CRC)</strong>.
                  </p>

                  {/* LLC vs MAC Sublayers */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70 space-y-2">
                      <div className="flex items-center gap-2">
                        <Layers size={18} className="text-[#ea580c]" />
                        <h4 className="font-bold text-stone-900 text-sm">Logical Link Control (LLC — IEEE 802.2)</h4>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Upper sublayer that multiplexes protocols over the MAC sublayer. It provides
                        service access points (LSAPs) and interacts directly with the Layer 3 Network
                        Layer (IPv4, IPv6, ARP), abstracting the underlying physical media technology.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70 space-y-2">
                      <div className="flex items-center gap-2">
                        <Cpu size={18} className="text-[#ea580c]" />
                        <h4 className="font-bold text-stone-900 text-sm">Media Access Control (MAC — IEEE 802.3)</h4>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Lower sublayer communicating directly with the physical transceiver. It
                        assembles frames, appends source/destination MAC addresses, generates CRC-32
                        checksums, and arbitrates wire access (historical CSMA/CD or modern Full-Duplex).
                      </p>
                    </div>
                  </div>

                  {/* Core Comparison: Switching vs Routing */}
                  <div className="p-5 rounded-2xl border border-orange-200 bg-orange-50/40 space-y-3">
                    <h4 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                      <Workflow size={16} className="text-[#ea580c]" />
                      Ethernet Switching (L2) vs. IP Routing (L3)
                    </h4>
                    <p className="text-xs text-stone-700 leading-relaxed">
                      <strong>Layer 2 Switching:</strong> Operates on flat 48-bit MAC addresses without
                      hierarchical topology. Switches make forwarding decisions using local CAM tables,
                      forwarding frames only across a single broadcast domain or VLAN. MAC addresses are
                      rewritten at every hop by routers.
                    </p>
                    <p className="text-xs text-stone-700 leading-relaxed">
                      <strong>Layer 3 Routing:</strong> Operates on hierarchical IP addresses (network
                      prefix + host identifier). Routers interconnect disparate broadcast domains,
                      decrement the TTL counter, and determine end-to-end paths across autonomous systems
                      (BGP/OSPF).
                    </p>
                  </div>

                  {/* Deep Walk-through: Same LAN vs Routed Traffic */}
                  <div className="border-t border-[#e7e3da] pt-4 space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-stone-600 font-bold">
                      Engineering Walk-through: Packet Addressing on Local LAN vs. Routed Internet
                    </h4>
                    <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-3">
                      <div>
                        <span className="text-emerald-400 font-bold">Case A — Same LAN (Host A to Host B on 192.168.1.0/24):</span>
                        <p className="text-stone-300 mt-1">
                          L3 Header: Src IP = 192.168.1.10, Dst IP = 192.168.1.20 (Invariant)<br />
                          L2 Header: Src MAC = Host A MAC, Dst MAC = Host B MAC (Direct delivery via switch)
                        </p>
                      </div>
                      <div className="pt-2 border-t border-stone-800">
                        <span className="text-orange-400 font-bold">Case B — Routed Internet (Host A to 93.184.216.34):</span>
                        <p className="text-stone-300 mt-1">
                          Hop 1 (Host A to Gateway): Src MAC = Host A, <span className="text-yellow-300 font-bold">Dst MAC = Gateway Router MAC</span> | Dst IP = 93.184.216.34<br />
                          Hop 2 (Gateway to ISP): <span className="text-yellow-300 font-bold">Src MAC = Router Egress MAC, Dst MAC = Next-Hop ISP MAC</span> | Dst IP = 93.184.216.34 (TTL-1)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------ */}
              {/* SECTION 4.2: ETHERNET FRAME STRUCTURE                        */}
              {/* ------------------------------------------------------------ */}
              <section id="sec-4-2" className="scroll-mt-36 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 text-xs font-mono font-bold">
                    4.2
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    Ethernet Frame Structure & Wire Fields
                  </h3>
                </div>

                <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 space-y-6">
                  <p className="text-sm text-stone-700 leading-relaxed">
                    Modern local area networks standardize on <strong>Ethernet II</strong> framing (also
                    known as DIX Ethernet). An Ethernet frame encapsulates an IP packet or ARP message,
                    adding 14 bytes of header and 4 bytes of error-checking trailer.
                  </p>

                  {/* Frame Visual Anatomy */}
                  <div className="p-4 rounded-2xl bg-stone-950 text-white font-mono text-xs overflow-x-auto">
                    <div className="text-[10px] text-stone-400 uppercase tracking-widest mb-2 font-bold">
                      Standard Ethernet II Frame Wire Format (Bytes)
                    </div>
                    <div className="grid grid-cols-6 gap-1 min-w-[620px] text-center">
                      <div className="p-2.5 rounded-lg bg-stone-800 border border-stone-700">
                        <span className="text-[10px] text-stone-400 block">Preamble + SFD</span>
                        <span className="font-bold text-stone-200">8 Bytes</span>
                        <span className="text-[9px] text-stone-500 block">Wire Sync Only</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-blue-950/80 border border-blue-800">
                        <span className="text-[10px] text-blue-300 block">Destination MAC</span>
                        <span className="font-bold text-blue-100">6 Bytes</span>
                        <span className="text-[9px] text-blue-400 block">Receiving NIC</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-blue-950/80 border border-blue-800">
                        <span className="text-[10px] text-blue-300 block">Source MAC</span>
                        <span className="font-bold text-blue-100">6 Bytes</span>
                        <span className="text-[9px] text-blue-400 block">Sending NIC</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-emerald-950/80 border border-emerald-800">
                        <span className="text-[10px] text-emerald-300 block">EtherType</span>
                        <span className="font-bold text-emerald-100">2 Bytes</span>
                        <span className="text-[9px] text-emerald-400 block">0x0800, 0x86DD</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-amber-950/80 border border-amber-800 col-span-1">
                        <span className="text-[10px] text-amber-300 block">Payload + Padding</span>
                        <span className="font-bold text-amber-100">46 – 1500 Bytes</span>
                        <span className="text-[9px] text-amber-400 block">MTU Size</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-red-950/80 border border-red-800">
                        <span className="text-[10px] text-red-300 block">FCS (CRC-32)</span>
                        <span className="font-bold text-red-100">4 Bytes</span>
                        <span className="text-[9px] text-red-400 block">Integrity Check</span>
                      </div>
                    </div>
                  </div>

                  {/* Field Breakdown Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border border-stone-200 rounded-2xl overflow-hidden">
                      <thead className="bg-stone-100 text-stone-700 font-mono uppercase text-[10px]">
                        <tr>
                          <th className="p-3">Field</th>
                          <th className="p-3">Size</th>
                          <th className="p-3">Purpose & Engineering Details</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200 font-sans">
                        <tr>
                          <td className="p-3 font-mono font-bold text-stone-900">Preamble & SFD</td>
                          <td className="p-3 font-mono">7 + 1 bytes</td>
                          <td className="p-3 text-stone-600">
                            7 bytes of alternating 10101010 bits for physical clock recovery, followed by
                            the Start Frame Delimiter (10101011) signalling that the destination MAC begins
                            on the very next bit. Stripped by NIC hardware before OS delivery.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-blue-700">Destination MAC</td>
                          <td className="p-3 font-mono">6 bytes</td>
                          <td className="p-3 text-stone-600">
                            The 48-bit physical address of the receiving interface on the local wire segment.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-blue-700">Source MAC</td>
                          <td className="p-3 font-mono">6 bytes</td>
                          <td className="p-3 text-stone-600">
                            The 48-bit physical address of the transmitting interface. Used by switches
                            to populate the CAM forwarding database.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-emerald-700">EtherType</td>
                          <td className="p-3 font-mono">2 bytes</td>
                          <td className="p-3 text-stone-600">
                            Identifies the encapsulated L3 protocol: <code className="text-stone-800 bg-stone-100 px-1 py-0.5 rounded font-mono">0x0800</code> (IPv4),
                            <code className="text-stone-800 bg-stone-100 px-1 py-0.5 rounded font-mono ml-1">0x86DD</code> (IPv6),
                            <code className="text-stone-800 bg-stone-100 px-1 py-0.5 rounded font-mono ml-1">0x0806</code> (ARP), or
                            <code className="text-stone-800 bg-stone-100 px-1 py-0.5 rounded font-mono ml-1">0x8100</code> (802.1Q VLAN Tag).
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-amber-700">Payload & Padding</td>
                          <td className="p-3 font-mono">46 – 1500 bytes</td>
                          <td className="p-3 text-stone-600">
                            Carries the L3 packet. If payload is below 46 bytes, zero padding is added
                            to ensure the frame reaches the mandatory 64-byte minimum size.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-red-700">FCS (CRC-32)</td>
                          <td className="p-3 font-mono">4 bytes</td>
                          <td className="p-3 text-stone-600">
                            Frame Check Sequence containing a 32-bit Cyclic Redundancy Check. If receiver
                            CRC does not match, frame is silently discarded.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Why Wireshark captures omit preamble and FCS */}
                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-1">
                    <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                      <AlertTriangle size={14} className="text-amber-600" />
                      Why Wireshark Omits the Preamble & FCS Checksum
                    </span>
                    <p className="text-xs text-amber-800 leading-relaxed">
                      Network Interface Cards (NICs) contain dedicated hardware PHY/MAC silicon. The
                      hardware automatically synchronizes with the Preamble/SFD and validates the CRC-32
                      FCS trailer. If the CRC fails, the hardware drops the frame before it reaches OS memory.
                      If valid, the NIC strips the Preamble and FCS, copying only the 14-byte header and
                      payload into host RAM via DMA.
                    </p>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------ */}
              {/* SECTION 4.3: MAC ADDRESSES & ADDRESS TYPES                   */}
              {/* ------------------------------------------------------------ */}
              <section id="sec-4-3" className="scroll-mt-36 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 text-xs font-mono font-bold">
                    4.3
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    MAC Addresses, Organizationally Unique Identifiers (OUIs) & Address Types
                  </h3>
                </div>

                <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 space-y-6">
                  <p className="text-sm text-stone-700 leading-relaxed">
                    A Media Access Control (MAC) address is a 48-bit (6-octet) hardware identifier burned
                    into the network interface card (NIC). It is written in hexadecimal notation:
                    <code className="text-[#ea580c] font-mono font-bold ml-1">00:1A:2B:3C:4D:5E</code> or
                    <code className="text-[#ea580c] font-mono font-bold ml-1">001a.2b3c.4d5e</code>.
                  </p>

                  {/* MAC Octet Structure */}
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                    <span className="text-xs font-mono uppercase text-stone-500 font-bold block">
                      48-Bit MAC Address Structure
                    </span>
                    <div className="grid grid-cols-2 gap-4 text-center font-mono">
                      <div className="p-3 rounded-xl bg-blue-50 border border-blue-200">
                        <span className="text-xs text-blue-900 font-bold block">First 24 Bits (3 Octets)</span>
                        <span className="text-lg font-black text-blue-700">OUI (Vendor Code)</span>
                        <span className="text-[10px] text-blue-600 block mt-1">Assigned by IEEE to Cisco, Apple, Intel, etc.</span>
                      </div>
                      <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                        <span className="text-xs text-emerald-900 font-bold block">Last 24 Bits (3 Octets)</span>
                        <span className="text-lg font-black text-emerald-700">NIC Identifier</span>
                        <span className="text-[10px] text-emerald-600 block mt-1">Unique serial number assigned by manufacturer</span>
                      </div>
                    </div>
                  </div>

                  {/* Crucial Bit 0 (I/G) and Bit 1 (U/L) */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="p-4 rounded-2xl border border-stone-200 bg-white space-y-2">
                      <div className="flex items-center gap-2">
                        <Radio size={16} className="text-[#ea580c]" />
                        <h4 className="font-bold text-stone-900 text-sm">Bit 0: I/G (Individual / Group)</h4>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Least significant bit of 1st octet.
                        <br /><strong>0 = Unicast (Individual):</strong> Addressed to a single network interface.
                        <br /><strong>1 = Multicast / Broadcast (Group):</strong> Addressed to a multicast group
                        (e.g., <code className="font-mono text-stone-800">01:00:5E:...</code>) or broadcast (<code className="font-mono text-stone-800">FF:FF:FF:FF:FF:FF</code>).
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl border border-stone-200 bg-white space-y-2">
                      <div className="flex items-center gap-2">
                        <Shield size={16} className="text-[#ea580c]" />
                        <h4 className="font-bold text-stone-900 text-sm">Bit 1: U/L (Universal / Local)</h4>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Second least significant bit of 1st octet.
                        <br /><strong>0 = Universally Administered:</strong> Burned-in vendor hardware address.
                        <br /><strong>1 = Locally Administered:</strong> Overridden by software. Modern smartphones
                        (iOS Private Wi-Fi, Android Randomized MAC) set this bit to 1 to prevent tracking.
                      </p>
                    </div>
                  </div>

                  {/* Forwarding Classes Summary */}
                  <div className="grid gap-3 sm:grid-cols-3 text-xs">
                    <div className="p-3.5 rounded-2xl bg-stone-100 border border-stone-200 space-y-1">
                      <span className="font-bold text-stone-900 block font-mono">Unicast Forwarding</span>
                      <p className="text-stone-600">
                        Destination matched in CAM table; forwarded out single designated egress port. If unknown, flooded to VLAN.
                      </p>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-stone-100 border border-stone-200 space-y-1">
                      <span className="font-bold text-stone-900 block font-mono">Broadcast Forwarding</span>
                      <p className="text-stone-600">
                        <code className="font-mono text-stone-800">FF:FF:FF:FF:FF:FF</code>. Always flooded out all ports in the VLAN except the incoming port.
                      </p>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-stone-100 border border-stone-200 space-y-1">
                      <span className="font-bold text-stone-900 block font-mono">Multicast Forwarding</span>
                      <p className="text-stone-600">
                        Flooded like broadcast unless switch supports <strong>IGMP Snooping</strong> to constrain delivery to active subscribers.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------ */}
              {/* SECTION 4.4: ARP & LOCAL ADDRESS RESOLUTION                  */}
              {/* ------------------------------------------------------------ */}
              <section id="sec-4-4" className="scroll-mt-36 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 text-xs font-mono font-bold">
                    4.4
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    Address Resolution Protocol (ARP) & Local Discovery
                  </h3>
                </div>

                <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 space-y-6">
                  <p className="text-sm text-stone-700 leading-relaxed">
                    IP routing specifies the logical destination, but network interfaces can only transmit
                    Ethernet frames using physical Layer 2 MAC addresses. The <strong>Address Resolution
                    Protocol (ARP — RFC 826)</strong> bridges this gap by mapping 32-bit IPv4 addresses to
                    48-bit MAC addresses.
                  </p>

                  {/* 4-Step Operational Flow */}
                  <div className="space-y-3">
                    <span className="text-xs font-mono uppercase text-stone-500 font-bold block">
                      The ARP Operational Lifecycle
                    </span>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70 space-y-1">
                        <span className="font-mono text-xs font-bold text-[#ea580c]">1. Local Subnet Check</span>
                        <p className="text-xs text-stone-600">
                          Host A verifies destination IP is inside its local subnet mask. If remote, it
                          targets the Default Gateway IP instead.
                        </p>
                      </div>
                      <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70 space-y-1">
                        <span className="font-mono text-xs font-bold text-[#ea580c]">2. ARP Request (Broadcast)</span>
                        <p className="text-xs text-stone-600">
                          If MAC is not cached, Host A sends an ARP Request with Dest MAC <code className="font-mono">FF:FF:FF:FF:FF:FF</code> asking who owns the target IP.
                        </p>
                      </div>
                      <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70 space-y-1">
                        <span className="font-mono text-xs font-bold text-[#ea580c]">3. ARP Reply (Unicast)</span>
                        <p className="text-xs text-stone-600">
                          Target host recognizes its own IP and transmits an ARP Reply unicast directly
                          to Host A's MAC address containing its hardware address.
                        </p>
                      </div>
                      <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70 space-y-1">
                        <span className="font-mono text-xs font-bold text-[#ea580c]">4. Neighbor Cache Update</span>
                        <p className="text-xs text-stone-600">
                          Both hosts store the mapping in their ARP table (<code className="font-mono">ip neigh</code>) with an
                          aging timer (typically 60–300s).
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Gratuitous ARP & IPv6 NDP */}
                  <div className="p-4 rounded-2xl border border-blue-200 bg-blue-50/50 space-y-2">
                    <h4 className="font-bold text-blue-900 text-xs">Specialized ARP Behaviors & IPv6 Replacement</h4>
                    <p className="text-xs text-blue-800 leading-relaxed">
                      <strong>Gratuitous ARP:</strong> An unprompted ARP reply broadcasted by a host claiming
                      its own IP address. Used to detect duplicate IP addresses upon booting or to trigger
                      instant CAM table updating during High-Availability VIP failovers (Keepalived/VRRP).
                    </p>
                    <p className="text-xs text-blue-800 leading-relaxed">
                      <strong>IPv6 Neighbor Discovery Protocol (NDP):</strong> IPv6 eliminates broadcast
                      entirely! Address resolution is performed using ICMPv6 Neighbor Solicitations (NS)
                      and Neighbor Advertisements (NA) mapped to <em>solicited-node multicast addresses</em>.
                    </p>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------ */}
              {/* SECTION 4.5: SWITCHING & FRAME FORWARDING                    */}
              {/* ------------------------------------------------------------ */}
              <section id="sec-4-5" className="scroll-mt-36 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 text-xs font-mono font-bold">
                    4.5
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    Ethernet Switching, Content-Addressable Memory (CAM) & Forwarding Rules
                  </h3>
                </div>

                <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 space-y-6">
                  <p className="text-sm text-stone-700 leading-relaxed">
                    Unlike legacy hubs that blindly repeated electrical signals across all pins, an
                    Ethernet switch is a multi-port bridge that operates at Layer 2. Switches maintain a
                    <strong> Content-Addressable Memory (CAM) table</strong> that dynamically maps
                    MAC addresses to physical switch ports and VLANs.
                  </p>

                  {/* The 3 Golden Switching Rules */}
                  <div className="grid gap-4 sm:grid-cols-3 text-xs">
                    <div className="p-4 rounded-2xl bg-stone-100 border border-stone-200 space-y-2">
                      <span className="font-mono font-bold text-[#ea580c] block">Rule 1: Source Learning</span>
                      <p className="text-stone-600 leading-relaxed">
                        Whenever a frame enters an ingress port, the switch records the <strong>Source MAC</strong>,
                        the <strong>Ingress Port</strong>, and the <strong>VLAN</strong> into the CAM table,
                        resetting its entry aging timer (default 300 seconds).
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-100 border border-stone-200 space-y-2">
                      <span className="font-mono font-bold text-[#ea580c] block">Rule 2: Destination Lookup</span>
                      <p className="text-stone-600 leading-relaxed">
                        The switch examines the <strong>Destination MAC</strong> and checks whether it exists
                        in the CAM table for that specific VLAN.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-100 border border-stone-200 space-y-2">
                      <span className="font-mono font-bold text-[#ea580c] block">Rule 3: Forward / Filter / Flood</span>
                      <p className="text-stone-600 leading-relaxed">
                        • <strong>Known Unicast:</strong> Forwarded only out the target egress port.<br />
                        • <strong>Same Ingress Port:</strong> Filtered / dropped (target already on segment).<br />
                        • <strong>Unknown Unicast / Broadcast:</strong> Flooded out all VLAN ports except ingress.
                      </p>
                    </div>
                  </div>

                  {/* Store-and-Forward vs Cut-Through */}
                  <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/70 space-y-3">
                    <h4 className="font-bold text-stone-900 text-sm">Switching Architectures: Store-and-Forward vs. Cut-Through</h4>
                    <div className="grid gap-4 sm:grid-cols-2 text-xs">
                      <div>
                        <span className="font-bold text-stone-800 block mb-1">Store-and-Forward (Enterprise Default)</span>
                        <p className="text-stone-600 leading-relaxed">
                          The switch buffers the complete frame before forwarding, calculates the CRC-32
                          FCS checksum, and drops corrupted frames or runts. Required when forwarding
                          between ports of mismatched speeds (e.g., 10G to 1G).
                        </p>
                      </div>
                      <div>
                        <span className="font-bold text-stone-800 block mb-1">Cut-Through (Ultra-Low Latency Data Centers)</span>
                        <p className="text-stone-600 leading-relaxed">
                          The switch reads only the first 6 bytes (Destination MAC) and begins egress transmission
                          immediately (~sub-microsecond latency). Disadvantage: corrupted frames with CRC
                          errors propagate downstream before being caught.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------ */}
              {/* SECTION 4.6: VLANS & 802.1Q TAGGING                          */}
              {/* ------------------------------------------------------------ */}
              <section id="sec-4-6" className="scroll-mt-36 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 text-xs font-mono font-bold">
                    4.6
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    Virtual LANs (VLANs) & IEEE 802.1Q Logical Segmentation
                  </h3>
                </div>

                <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 space-y-6">
                  <p className="text-sm text-stone-700 leading-relaxed">
                    A <strong>Virtual LAN (VLAN)</strong> divides a single physical switch infrastructure
                    into isolated logical Layer 2 broadcast domains. Hosts on VLAN 10 cannot communicate
                    with hosts on VLAN 20 without passing through a Layer 3 router or multilayer switch SVI.
                  </p>

                  {/* 802.1Q Tag Anatomy */}
                  <div className="p-4 rounded-2xl bg-stone-900 text-white font-mono text-xs space-y-2">
                    <span className="text-[10px] text-stone-400 uppercase tracking-widest block font-bold">
                      IEEE 802.1Q Tag Header (4 Bytes inserted after Source MAC)
                    </span>
                    <div className="grid grid-cols-4 gap-2 text-center">
                      <div className="p-2 rounded bg-stone-800 border border-stone-700">
                        <span className="text-[9px] text-stone-400 block">TPID (16 bits)</span>
                        <span className="font-bold text-amber-400">0x8100</span>
                      </div>
                      <div className="p-2 rounded bg-stone-800 border border-stone-700">
                        <span className="text-[9px] text-stone-400 block">PCP (3 bits)</span>
                        <span className="font-bold text-emerald-400">0 – 7 (QoS)</span>
                      </div>
                      <div className="p-2 rounded bg-stone-800 border border-stone-700">
                        <span className="text-[9px] text-stone-400 block">DEI (1 bit)</span>
                        <span className="font-bold text-blue-400">Drop Eligible</span>
                      </div>
                      <div className="p-2 rounded bg-stone-800 border border-stone-700">
                        <span className="text-[9px] text-stone-400 block">VID (12 bits)</span>
                        <span className="font-bold text-[#ea580c]">1 – 4094</span>
                      </div>
                    </div>
                  </div>

                  {/* Port Types */}
                  <div className="grid gap-4 sm:grid-cols-2 text-xs">
                    <div className="p-4 rounded-2xl border border-stone-200 bg-white space-y-2">
                      <h4 className="font-bold text-stone-900 text-sm">Access Ports</h4>
                      <p className="text-stone-600 leading-relaxed">
                        Connected to end devices (PCs, printers, servers). Transmits and receives
                        <strong> untagged frames</strong>. The switch automatically associates untagged
                        frames with the port's configured Port VLAN ID (PVID).
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl border border-stone-200 bg-white space-y-2">
                      <h4 className="font-bold text-stone-900 text-sm">Trunk Ports (802.1Q)</h4>
                      <p className="text-stone-600 leading-relaxed">
                        Interconnects switches, routers, or hypervisors. Transmits <strong>tagged frames</strong>
                        carrying the 4-byte 802.1Q header to preserve VLAN membership across physical links.
                      </p>
                    </div>
                  </div>

                  {/* Native VLAN Security Alert */}
                  <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-200 space-y-1">
                    <span className="text-xs font-bold text-orange-900 flex items-center gap-1.5">
                      <Shield size={14} className="text-[#ea580c]" />
                      Native VLAN Security Best Practice
                    </span>
                    <p className="text-xs text-orange-800 leading-relaxed">
                      By default, IEEE 802.1Q transmits Native VLAN traffic untagged. If native VLANs
                      are mismatched across a trunk, traffic leaks between VLANs! Enterprise hardening
                      mandates setting the native VLAN to an unused ID (e.g., VLAN 999) and enabling
                      native VLAN tagging (<code className="font-mono">vlan dot1q tag native</code>).
                    </p>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------ */}
              {/* SECTION 4.7: TRUNKING & MULTI-SWITCH ARCHITECTURES           */}
              {/* ------------------------------------------------------------ */}
              <section id="sec-4-7" className="scroll-mt-36 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 text-xs font-mono font-bold">
                    4.7
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    Trunking & Multi-Switch VLAN Architectures
                  </h3>
                </div>

                <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 space-y-6">
                  <p className="text-sm text-stone-700 leading-relaxed">
                    In enterprise campus and data center networks, VLANs span dozens of access switches.
                    <strong> Trunk links</strong> carry traffic for all allowed VLANs over high-speed
                    uplinks, while <strong>Link Aggregation (LACP / 802.3ad)</strong> bundles multiple
                    physical cables into a single high-bandwidth logical port channel.
                  </p>

                  {/* Typical Enterprise VLAN Plan */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border border-stone-200 rounded-2xl overflow-hidden">
                      <thead className="bg-stone-100 text-stone-700 font-mono uppercase text-[10px]">
                        <tr>
                          <th className="p-3">VLAN ID</th>
                          <th className="p-3">Purpose</th>
                          <th className="p-3">Example Subnet</th>
                          <th className="p-3">Security & Trunking Policy</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200 font-sans">
                        <tr>
                          <td className="p-3 font-mono font-bold text-blue-700">VLAN 10</td>
                          <td className="p-3 font-semibold text-stone-800">Corporate Employees</td>
                          <td className="p-3 font-mono text-stone-600">192.168.10.0/24</td>
                          <td className="p-3 text-stone-600">802.1X authenticated; routed to internal servers.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-amber-700">VLAN 20</td>
                          <td className="p-3 font-semibold text-stone-800">Guest Wi-Fi</td>
                          <td className="p-3 font-mono text-stone-600">192.168.20.0/24</td>
                          <td className="p-3 text-stone-600">Client isolation; internet-only; internal LAN blocked.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-emerald-700">VLAN 30</td>
                          <td className="p-3 font-semibold text-stone-800">Servers / Database</td>
                          <td className="p-3 font-mono text-stone-600">192.168.30.0/24</td>
                          <td className="p-3 text-stone-600">Protected by stateful firewall; strict port access.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-purple-700">VLAN 99</td>
                          <td className="p-3 font-semibold text-stone-800">Switch In-Band Mgmt</td>
                          <td className="p-3 font-mono text-stone-600">192.168.99.0/24</td>
                          <td className="p-3 text-stone-600">Out-of-band ACLs; SSH/SNMPv3 only; untrusted ports blocked.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Link Aggregation (LACP) */}
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <h4 className="font-bold text-stone-900 text-xs">IEEE 802.3ad / 802.1AX Link Aggregation (LACP)</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Link Aggregation Control Protocol (LACP) combines up to 8 physical Ethernet interfaces
                      into a single logical <strong>Port Channel / LAG</strong>. It provides automatic failover
                      without triggering Spanning Tree recalculations and balances traffic using flow hashes
                      (Src IP, Dst IP, L4 Ports).
                    </p>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------ */}
              {/* SECTION 4.8: SPANNING TREE PROTOCOL (STP)                    */}
              {/* ------------------------------------------------------------ */}
              <section id="sec-4-8" className="scroll-mt-36 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 text-xs font-mono font-bold">
                    4.8
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    Spanning Tree Protocol (STP) & Loop Prevention
                  </h3>
                </div>

                <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 space-y-6">
                  <p className="text-sm text-stone-700 leading-relaxed">
                    Redundant physical cabling is required for high availability. However, without a
                    loop-prevention protocol, redundant Layer 2 links create catastrophic <strong>broadcast
                    storms</strong>, multiple frame duplication, and CAM table thrashing. Because Ethernet
                    frames lack an IP-style TTL field, a broadcast frame loops forever!
                  </p>

                  {/* Root Bridge & Port Roles */}
                  <div className="grid gap-4 sm:grid-cols-2 text-xs">
                    <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70 space-y-2">
                      <span className="font-mono font-bold text-[#ea580c] block">Root Bridge Election</span>
                      <p className="text-stone-600 leading-relaxed">
                        Switches exchange <strong>Bridge Protocol Data Units (BPDUs)</strong> every 2 seconds.
                        The switch with the <strong>lowest Bridge ID</strong> (Bridge Priority + Base MAC)
                        wins the election and becomes the logical center of the network.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70 space-y-2">
                      <span className="font-mono font-bold text-[#ea580c] block">STP Port Roles</span>
                      <p className="text-stone-600 leading-relaxed">
                        • <strong>Root Port (RP):</strong> Lowest path cost to Root Bridge (1 per non-root switch).<br />
                        • <strong>Designated Port (DP):</strong> Forwards traffic onto a LAN segment (Forwarding).<br />
                        • <strong>Alternate Port (AP):</strong> Redundant backup port placed in <strong>Blocking / Discarding</strong> state.
                      </p>
                    </div>
                  </div>

                  {/* STP Evolution */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border border-stone-200 rounded-2xl overflow-hidden">
                      <thead className="bg-stone-100 text-stone-700 font-mono uppercase text-[10px]">
                        <tr>
                          <th className="p-3">Standard</th>
                          <th className="p-3">Protocol</th>
                          <th className="p-3">Convergence Time</th>
                          <th className="p-3">Key Architectural Mechanism</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200 font-sans">
                        <tr>
                          <td className="p-3 font-mono font-bold text-stone-900">IEEE 802.1D</td>
                          <td className="p-3 font-semibold text-stone-800">Classic STP</td>
                          <td className="p-3 font-mono text-red-600 font-bold">30 – 50 seconds</td>
                          <td className="p-3 text-stone-600">Blocking &rarr; Listening &rarr; Learning &rarr; Forwarding timers.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-emerald-700">IEEE 802.1w</td>
                          <td className="p-3 font-semibold text-stone-800">Rapid STP (RSTP)</td>
                          <td className="p-3 font-mono text-emerald-600 font-bold">&lt; 1 second (ms)</td>
                          <td className="p-3 text-stone-600">Explicit Proposal / Agreement handshake on point-to-point links.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-blue-700">IEEE 802.1s</td>
                          <td className="p-3 font-semibold text-stone-800">Multiple STP (MSTP)</td>
                          <td className="p-3 font-mono text-blue-600 font-bold">Sub-second</td>
                          <td className="p-3 text-stone-600">Maps thousands of VLANs into a small number of STP instances.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* STP Hardening Features */}
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <span className="text-xs font-mono uppercase text-stone-600 font-bold block">
                      STP Defense-in-Depth Mechanisms
                    </span>
                    <div className="grid gap-3 sm:grid-cols-3 text-xs">
                      <div>
                        <strong className="text-stone-900 block font-mono">BPDU Guard</strong>
                        <span className="text-stone-600">Shuts down an edge port instantly if a BPDU is received (err-disable).</span>
                      </div>
                      <div>
                        <strong className="text-stone-900 block font-mono">Root Guard</strong>
                        <span className="text-stone-600">Prevents rogue switches on downstream ports from becoming Root Bridge.</span>
                      </div>
                      <div>
                        <strong className="text-stone-900 block font-mono">Loop Guard</strong>
                        <span className="text-stone-600">Prevents alternate ports from transitioning to forwarding if BPDUs cease.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------ */}
              {/* SECTION 4.9: LINK-LAYER ERRORS & DIAGNOSTICS                 */}
              {/* ------------------------------------------------------------ */}
              <section id="sec-4-9" className="scroll-mt-36 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 text-xs font-mono font-bold">
                    4.9
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    Link-Layer Errors, Duplex Mismatches & Fault Diagnostics
                  </h3>
                </div>

                <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 space-y-6">
                  <p className="text-sm text-stone-700 leading-relaxed">
                    Production network triage requires isolating Layer 2 hardware and framing issues
                    before investigating IP routing or DNS. Interface counters provide objective evidence
                    of physical layer defects and framing anomalies.
                  </p>

                  {/* Error Counters Table */}
                  <div className="grid gap-4 sm:grid-cols-2 text-xs">
                    <div className="p-4 rounded-2xl border border-stone-200 bg-white space-y-2">
                      <span className="font-bold text-red-700 block font-mono">CRC / FCS Frame Errors</span>
                      <p className="text-stone-600 leading-relaxed">
                        Frames corrupted during wire transit. Caused by electromagnetic interference (EMI),
                        damaged Cat6 copper twists, bent optical fiber patch cables, or dirty optical ferrule ends.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl border border-stone-200 bg-white space-y-2">
                      <span className="font-bold text-amber-700 block font-mono">Runts (&lt;64 Bytes) & Giants (&gt;1518 Bytes)</span>
                      <p className="text-stone-600 leading-relaxed">
                        <strong>Runts:</strong> Truncated frames below 64 bytes caused by collisions on half-duplex links.
                        <br /><strong>Giants:</strong> Frames exceeding maximum MTU, caused by mismatched jumbo frame configurations.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl border border-stone-200 bg-white space-y-2">
                      <span className="font-bold text-purple-700 block font-mono">Duplex Mismatch (Half vs. Full)</span>
                      <p className="text-stone-600 leading-relaxed">
                        One side hardcoded to Full Duplex while other side uses auto-negotiation (falls back to Half).
                        Causes <strong>Late Collisions</strong> on the half-duplex end and CRC errors on the full-duplex end!
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl border border-stone-200 bg-white space-y-2">
                      <span className="font-bold text-blue-700 block font-mono">MAC Address Flapping</span>
                      <p className="text-stone-600 leading-relaxed">
                        The same source MAC address is seen alternately on Port 1 and Port 2 within milliseconds.
                        Direct symptom of an active Layer 2 switching loop or duplicate NIC MAC addresses.
                      </p>
                    </div>
                  </div>

                  {/* 6-Step Triage Workflow */}
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                    <span className="text-xs font-mono uppercase text-stone-600 font-bold block">
                      6-Step Layer 2 Troubleshooting Methodology
                    </span>
                    <ol className="list-decimal list-inside text-xs text-stone-700 space-y-1.5 font-medium">
                      <li><strong>Verify Physical Link:</strong> Check link LEDs, speed, duplex, and FCS CRC counters (<code className="font-mono">ip -s link</code>).</li>
                      <li><strong>Verify VLAN Membership:</strong> Confirm access PVID and trunk allowed VLAN lists (<code className="font-mono">show interfaces trunk</code>).</li>
                      <li><strong>Inspect CAM Table:</strong> Verify source MAC learning and check for MAC flapping (<code className="font-mono">show mac address-table</code>).</li>
                      <li><strong>Check STP Port States:</strong> Ensure designated port is forwarding and no unexpected blocking has isolated the host.</li>
                      <li><strong>Verify ARP Cache:</strong> Test gateway ping and verify resolved MAC address in ARP table (<code className="font-mono">ip neigh</code>).</li>
                      <li><strong>Validate Fix:</strong> Re-test connectivity under load and confirm error counters remain static.</li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------ */}
              {/* SECTION 4.10: LINK-LAYER SECURITY & DEFENSES                 */}
              {/* ------------------------------------------------------------ */}
              <section id="sec-4-10" className="scroll-mt-36 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 text-xs font-mono font-bold">
                    4.10
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    Link-Layer Security: Attacks, Spoofing & Enterprise Defenses
                  </h3>
                </div>

                <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 space-y-6">
                  <p className="text-sm text-stone-700 leading-relaxed">
                    Ethernet and ARP were designed in academic environments without intrinsic authentication.
                    Without deliberate Layer 2 security controls, an adversary with physical or Wi-Fi
                    access can intercept traffic, hijack gateways, or exhaust switch forwarding resources.
                  </p>

                  {/* Attack Matrix */}
                  <div className="grid gap-4 sm:grid-cols-2 text-xs">
                    <div className="p-4 rounded-2xl border border-red-200 bg-red-50/40 space-y-2">
                      <span className="font-bold text-red-900 block font-mono">1. CAM Table Exhaustion (MAC Flooding)</span>
                      <p className="text-stone-700 leading-relaxed">
                        Attacker floods switch with millions of bogus source MACs (<code className="font-mono">macof</code>).
                        Switch CAM table fills, forcing switch to flood all incoming unicast frames to all ports like a hub.
                      </p>
                      <span className="text-[11px] font-bold text-emerald-800 block">
                        Defense: Port Security (<code className="font-mono">switchport port-security maximum 2</code>)
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl border border-red-200 bg-red-50/40 space-y-2">
                      <span className="font-bold text-red-900 block font-mono">2. ARP Spoofing / Poisoning</span>
                      <p className="text-stone-700 leading-relaxed">
                        Attacker broadcasts forged ARP replies claiming Gateway IP has attacker's MAC,
                        establishing Man-in-the-Middle (MITM) to intercept unencrypted traffic.
                      </p>
                      <span className="text-[11px] font-bold text-emerald-800 block">
                        Defense: Dynamic ARP Inspection (DAI) + DHCP Snooping binding verification.
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl border border-red-200 bg-red-50/40 space-y-2">
                      <span className="font-bold text-red-900 block font-mono">3. Rogue DHCP Server</span>
                      <p className="text-stone-700 leading-relaxed">
                        Attacker deploys unauthorized DHCP server giving clients fake default gateway and malicious DNS.
                      </p>
                      <span className="text-[11px] font-bold text-emerald-800 block">
                        Defense: DHCP Snooping (mark uplink as trusted; all access ports untrusted).
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl border border-red-200 bg-red-50/40 space-y-2">
                      <span className="font-bold text-red-900 block font-mono">4. VLAN Hopping (Double Tagging)</span>
                      <p className="text-stone-700 leading-relaxed">
                        Attacker sends frame with two 802.1Q tags. Switch strips outer tag (native VLAN),
                        forwarding inner tag to target isolated VLAN.
                      </p>
                      <span className="text-[11px] font-bold text-emerald-800 block">
                        Defense: Tag Native VLAN; disable DTP (<code className="font-mono">switchport nonegotiate</code>).
                      </span>
                    </div>
                  </div>

                  {/* 802.1X Port Security */}
                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={18} className="text-emerald-700" />
                      <h4 className="font-bold text-emerald-950 text-sm">IEEE 802.1X Network Access Control (NAC)</h4>
                    </div>
                    <p className="text-xs text-emerald-900 leading-relaxed">
                      Zero-trust network architecture requires authenticating devices before allowing wire
                      access. Using EAP over LAN (EAPoL) and RADIUS, the switch port remains in an unauthorized
                      state (dropping all frames except EAPoL) until the supplicant presents valid certificates
                      or credentials.
                    </p>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------ */}
              {/* SECTION 4.11: PRACTICAL TOOLS & CLI                          */}
              {/* ------------------------------------------------------------ */}
              <section id="sec-4-11" className="scroll-mt-36 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 text-xs font-mono font-bold">
                    4.11
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    Practical Tools & CLI Diagnostic Reference
                  </h3>
                </div>

                <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 space-y-6">
                  <p className="text-sm text-stone-700 leading-relaxed">
                    Network engineers must be fluent in both host operating system network stacks
                    (Linux <code className="font-mono">iproute2</code>, Wireshark, <code className="font-mono">tcpdump</code>)
                    and enterprise switch command-line interfaces.
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2 text-xs font-mono">
                    <div className="p-3.5 rounded-2xl bg-stone-900 text-stone-100 space-y-1">
                      <span className="text-emerald-400 font-bold block"># Inspect ARP Neighbor Cache</span>
                      <code>ip neigh show</code>
                      <span className="text-[10px] text-stone-400 block mt-1 font-sans">Displays IPv4 and IPv6 neighbor IP-to-MAC resolution.</span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-stone-900 text-stone-100 space-y-1">
                      <span className="text-emerald-400 font-bold block"># Inspect Linux Bridge FDB</span>
                      <code>bridge fdb show</code>
                      <span className="text-[10px] text-stone-400 block mt-1 font-sans">Displays the Layer 2 forwarding database of Linux software bridges.</span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-stone-900 text-stone-100 space-y-1">
                      <span className="text-emerald-400 font-bold block"># Switch MAC Address Table</span>
                      <code>show mac address-table</code>
                      <span className="text-[10px] text-stone-400 block mt-1 font-sans">Shows learned dynamic and static MAC entries on Cisco/Arista switches.</span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-stone-900 text-stone-100 space-y-1">
                      <span className="text-emerald-400 font-bold block"># Switch STP Status & Roles</span>
                      <code>show spanning-tree vlan 10</code>
                      <span className="text-[10px] text-stone-400 block mt-1 font-sans">Displays Root Bridge ID, path cost, and port roles (RP, DP, BLK).</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------ */}
              {/* SECTION 4.12: HANDS-ON LABORATORY SEQUENCE                   */}
              {/* ------------------------------------------------------------ */}
              <section id="sec-4-12" className="scroll-mt-36 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 text-xs font-mono font-bold">
                    4.12
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    Hands-on Laboratory Sequence
                  </h3>
                </div>

                <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 space-y-4 text-xs text-stone-700">
                  <p className="text-sm">
                    Follow this 5-stage university laboratory progression to master Layer 2 engineering:
                  </p>
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 block font-mono">Lab 1 — Ethernet Switching & MAC Learning</strong>
                      <span>Deploy a multi-host LAN in GNS3/Packet Tracer. Generate unknown unicast, known unicast, and broadcast frames, validating CAM aging.</span>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 block font-mono">Lab 2 — Wireshark ARP Packet Dissection</strong>
                      <span>Capture ARP requests and replies. Trace next-hop gateway resolution vs local subnet delivery.</span>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 block font-mono">Lab 3 — VLAN Segmentation & 802.1Q Trunking</strong>
                      <span>Configure access and trunk ports across dual switches. Test broadcast isolation and configure Router-on-a-Stick inter-VLAN routing.</span>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 block font-mono">Lab 4 — STP 3-Switch Triangle Convergence</strong>
                      <span>Build a triangle switch loop. Identify Root Bridge and blocked Alternate Port. Sever a link and record RSTP sub-second failover.</span>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 block font-mono">Lab 5 — Layer 2 Attack Mitigation</strong>
                      <span>Simulate MAC flooding and ARP poisoning in an isolated lab. Configure Port Security, DHCP Snooping, and Dynamic ARP Inspection (DAI).</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* ------------------------------------------------------------ */}
              {/* SECTION 4.13: CAPSTONE & ASSESSMENT                          */}
              {/* ------------------------------------------------------------ */}
              <section id="sec-4-13" className="scroll-mt-36 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-stone-200 text-stone-800 text-xs font-mono font-bold">
                    4.13
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900">
                    Capstone Project & Knowledge Assessment
                  </h3>
                </div>

                <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 space-y-4 text-xs text-stone-700">
                  <p className="text-sm">
                    In the capstone project, learners diagnose a production enterprise outage involving
                    VLAN mismatch, duplicate MAC address flapping, and STP loop instability.
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
        {/* TAB 2: INTERACTIVE SWITCH CAM TABLE SIMULATOR                       */}
        {/* ================================================================== */}
        {activeTab === "switch-sim" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#ea580c] font-bold">
                  Interactive Simulator 1
                </span>
                <h3 className="text-xl font-black text-stone-900">
                  Switch Content-Addressable Memory (CAM) & Forwarding Engine
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Inject frames on switch ports. Observe dynamic source MAC learning, aging timers,
                  and destination filtering, forwarding, or flooding behavior.
                </p>
              </div>

              <button
                onClick={resetCamTable}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-stone-300 bg-white text-xs font-bold text-stone-700 hover:bg-stone-50 cursor-pointer"
              >
                <RotateCcw size={14} />
                <span>Reset Switch</span>
              </button>
            </div>

            {/* Frame Injection Controls */}
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 grid gap-4 sm:grid-cols-3">
              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">
                  Ingress Port (Receiving Interface):
                </label>
                <select
                  value={selectedIngressPort}
                  onChange={(e) => setSelectedIngressPort(Number(e.target.value))}
                  className="w-full p-2 rounded-xl border border-stone-300 bg-white text-xs font-mono font-bold"
                >
                  <option value={1}>Port 1 (Host A: 00:1A:2B:3C:4D:01)</option>
                  <option value={2}>Port 2 (Host B: 00:1A:2B:3C:4D:02)</option>
                  <option value={3}>Port 3 (Host C: 00:1A:2B:3C:4D:03)</option>
                  <option value={4}>Port 4 (Host D / Router: 00:1A:2B:3C:4D:04)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">
                  Frame Destination Type:
                </label>
                <select
                  value={selectedFrameType}
                  onChange={(e) => setSelectedFrameType(e.target.value)}
                  className="w-full p-2 rounded-xl border border-stone-300 bg-white text-xs font-mono font-bold"
                >
                  <option value="known-unicast">Known Unicast (Target in CAM Table)</option>
                  <option value="unknown-unicast">Unknown Unicast (Target Not in Table)</option>
                  <option value="broadcast">Broadcast (FF:FF:FF:FF:FF:FF)</option>
                  <option value="same-port">Same-Port Destination (Host on Ingress)</option>
                </select>
              </div>

              <div className="flex items-end">
                <button
                  onClick={handleSimulateSwitchFrame}
                  className="w-full py-2 px-4 rounded-xl bg-[#ea580c] text-white text-xs font-bold hover:bg-[#c2410c] shadow-xs cursor-pointer flex items-center justify-center gap-2"
                >
                  <Play size={14} />
                  <span>Transmit Frame</span>
                </button>
              </div>
            </div>

            {/* Switch Ports Diagram */}
            <div className="p-5 rounded-2xl bg-stone-900 text-white font-mono text-xs space-y-4">
              <span className="text-[10px] text-stone-400 uppercase tracking-widest block font-bold">
                Switch Hardware Panel (4-Port 1000BASE-T Gigabit Switch — VLAN 10)
              </span>
              <div className="grid grid-cols-4 gap-3 text-center">
                {[1, 2, 3, 4].map((portNum) => {
                  const isIngress = lastAction && lastAction.ingressPort === portNum;
                  const isEgress = lastAction && lastAction.egressPorts.includes(portNum);

                  let badgeColor = "bg-stone-800 border-stone-700 text-stone-300";
                  let statusText = "IDLE";

                  if (isIngress) {
                    badgeColor = "bg-blue-600 border-blue-400 text-white animate-pulse";
                    statusText = "INGRESS (RX)";
                  } else if (isEgress) {
                    badgeColor = "bg-emerald-600 border-emerald-400 text-white";
                    statusText = "EGRESS (TX)";
                  }

                  return (
                    <div key={portNum} className={`p-4 rounded-xl border ${badgeColor} transition duration-300`}>
                      <span className="text-[10px] uppercase block font-bold">Port {portNum}</span>
                      <span className="text-xs font-black block mt-1">{statusText}</span>
                      <span className="text-[9px] text-stone-300 block mt-1">
                        {portNum === 1
                          ? "Host A"
                          : portNum === 2
                          ? "Host B"
                          : portNum === 3
                          ? "Host C"
                          : "Host D / Router"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Live CAM Table */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-stone-600 font-bold">
                  Live Switch CAM / MAC Address Forwarding Database
                </span>
                <span className="text-xs font-mono text-stone-500">
                  Total Entries: {camTable.length}
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-stone-200 rounded-2xl overflow-hidden">
                  <thead className="bg-stone-100 text-stone-700 font-mono uppercase text-[10px]">
                    <tr>
                      <th className="p-3">MAC Address</th>
                      <th className="p-3">VLAN</th>
                      <th className="p-3">Switch Port</th>
                      <th className="p-3">Connected Device</th>
                      <th className="p-3">Type / Aging Timer</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 font-mono">
                    {camTable.map((entry, idx) => (
                      <tr key={idx} className="hover:bg-orange-50/40">
                        <td className="p-3 font-bold text-stone-900">{entry.mac}</td>
                        <td className="p-3 text-stone-600">VLAN {entry.vlan}</td>
                        <td className="p-3 font-bold text-[#ea580c]">Port {entry.port}</td>
                        <td className="p-3 text-stone-700">{entry.host}</td>
                        <td className="p-3 text-emerald-700 font-sans text-[11px]">
                          Dynamic (Age: {entry.age}s / 300s)
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Last Forwarding Decision Result */}
            {lastAction && (
              <div className="p-4 rounded-2xl border border-blue-200 bg-blue-50/60 space-y-2">
                <span className="text-xs font-mono uppercase text-blue-900 font-bold block">
                  Forwarding Decision Analysis (Recorded {lastAction.timestamp})
                </span>
                <p className="text-xs text-blue-950 font-mono">
                  <strong>Source MAC:</strong> {lastAction.srcMac} ({lastAction.srcHost}) on Ingress Port {lastAction.ingressPort}
                  <br />
                  <strong>Destination MAC:</strong> {lastAction.dstMac} ({lastAction.dstHost})
                </p>
                <div className="pt-2 border-t border-blue-200 text-xs text-blue-900 space-y-1">
                  <div><strong>Learning Action:</strong> {lastAction.learnNote}</div>
                  <div><strong>Forwarding Action:</strong> {lastAction.forwardingDecision}</div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 3: SPANNING TREE PROTOCOL (STP) TRIANGLE SIMULATOR             */}
        {/* ================================================================== */}
        {activeTab === "stp-sim" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#ea580c] font-bold">
                  Interactive Simulator 2
                </span>
                <h3 className="text-xl font-black text-stone-900">
                  Spanning Tree Protocol (STP / RSTP) Triangle Mesh Simulator
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Observe Root Bridge election, Root Port and Designated Port selection, and Alternate
                  Port blocking. Disconnect links to watch automatic loop-free failover!
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setLinkABAlive(true);
                    setLinkBCAlive(true);
                    setLinkACAlive(true);
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-300 bg-white text-xs font-bold text-stone-700 hover:bg-stone-50 cursor-pointer"
                >
                  <RefreshCw size={14} />
                  <span>Restore All Links</span>
                </button>
              </div>
            </div>

            {/* Root Priority Control */}
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div>
                <span className="font-bold text-stone-800 block">Switch A Bridge Priority:</span>
                <span className="text-[11px] text-stone-500">
                  Lowest Bridge ID becomes Root Bridge (Default priority = 32768)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setStpRootPriority(4096)}
                  className={`px-3 py-1 rounded-xl font-mono font-bold transition cursor-pointer ${
                    stpRootPriority === 4096 ? "bg-[#ea580c] text-white" : "bg-stone-200 text-stone-700"
                  }`}
                >
                  4096 (Root Primary)
                </button>
                <button
                  onClick={() => setStpRootPriority(32768)}
                  className={`px-3 py-1 rounded-xl font-mono font-bold transition cursor-pointer ${
                    stpRootPriority === 32768 ? "bg-[#ea580c] text-white" : "bg-stone-200 text-stone-700"
                  }`}
                >
                  32768 (Default)
                </button>
              </div>
            </div>

            {/* Interactive Link Toggle Panel */}
            <div className="grid gap-3 sm:grid-cols-3 text-xs">
              <button
                onClick={() => setLinkABAlive(!linkABAlive)}
                className={`p-3.5 rounded-2xl border font-bold flex items-center justify-between cursor-pointer transition ${
                  linkABAlive
                    ? "bg-emerald-50 border-emerald-300 text-emerald-900"
                    : "bg-red-50 border-red-300 text-red-900"
                }`}
              >
                <span>Link A &lt;--&gt; B</span>
                <span>{linkABAlive ? "CONNECTED (1G)" : "SEVERED (DOWN)"}</span>
              </button>

              <button
                onClick={() => setLinkBCAlive(!linkBCAlive)}
                className={`p-3.5 rounded-2xl border font-bold flex items-center justify-between cursor-pointer transition ${
                  linkBCAlive
                    ? "bg-emerald-50 border-emerald-300 text-emerald-900"
                    : "bg-red-50 border-red-300 text-red-900"
                }`}
              >
                <span>Link B &lt;--&gt; C</span>
                <span>{linkBCAlive ? "CONNECTED (1G)" : "SEVERED (DOWN)"}</span>
              </button>

              <button
                onClick={() => setLinkACAlive(!linkACAlive)}
                className={`p-3.5 rounded-2xl border font-bold flex items-center justify-between cursor-pointer transition ${
                  linkACAlive
                    ? "bg-emerald-50 border-emerald-300 text-emerald-900"
                    : "bg-red-50 border-red-300 text-red-900"
                }`}
              >
                <span>Link A &lt;--&gt; C</span>
                <span>{linkACAlive ? "CONNECTED (1G)" : "SEVERED (DOWN)"}</span>
              </button>
            </div>

            {/* STP Topology Visualization */}
            <div className="grid gap-4 sm:grid-cols-3">
              {/* Switch A */}
              <div className="p-5 rounded-2xl border-2 border-emerald-300 bg-emerald-50/50 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-emerald-900 text-sm font-mono">Switch A</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-600 text-white">
                    ROOT BRIDGE
                  </span>
                </div>
                <div className="text-[11px] font-mono text-stone-600">
                  Bridge ID: {stpRootPriority}.00:00:00:00:00:0A
                </div>
                <div className="space-y-1.5 pt-2 border-t border-emerald-200 text-xs font-mono">
                  <div className="p-2 rounded-lg bg-white border border-emerald-200">
                    <span className="text-[10px] text-stone-500 block">Port 1 (to Switch B):</span>
                    <strong className="text-emerald-700">Designated Port (DP)</strong> — FORWARDING
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-emerald-200">
                    <span className="text-[10px] text-stone-500 block">Port 2 (to Switch C):</span>
                    <strong className="text-emerald-700">Designated Port (DP)</strong> — FORWARDING
                  </div>
                </div>
              </div>

              {/* Switch B */}
              <div className="p-5 rounded-2xl border border-stone-300 bg-white space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-stone-900 text-sm font-mono">Switch B</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-stone-200 text-stone-700">
                    Non-Root
                  </span>
                </div>
                <div className="text-[11px] font-mono text-stone-600">
                  Bridge ID: 32768.00:00:00:00:00:0B
                </div>
                <div className="space-y-1.5 pt-2 border-t border-stone-200 text-xs font-mono">
                  <div className="p-2 rounded-lg bg-stone-50 border border-stone-200">
                    <span className="text-[10px] text-stone-500 block">Port 1 (to Switch A):</span>
                    <strong className={linkABAlive ? "text-blue-700" : "text-red-600"}>
                      {stpState.switchB.p1.role}
                    </strong>{" "}
                    — {stpState.switchB.p1.state}
                  </div>
                  <div className="p-2 rounded-lg bg-stone-50 border border-stone-200">
                    <span className="text-[10px] text-stone-500 block">Port 2 (to Switch C):</span>
                    <strong className="text-emerald-700">{stpState.switchB.p2.role}</strong> —{" "}
                    {stpState.switchB.p2.state}
                  </div>
                </div>
              </div>

              {/* Switch C */}
              <div className="p-5 rounded-2xl border border-stone-300 bg-white space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-stone-900 text-sm font-mono">Switch C</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-stone-200 text-stone-700">
                    Non-Root
                  </span>
                </div>
                <div className="text-[11px] font-mono text-stone-600">
                  Bridge ID: 32768.00:00:00:00:00:0C
                </div>
                <div className="space-y-1.5 pt-2 border-t border-stone-200 text-xs font-mono">
                  <div className="p-2 rounded-lg bg-stone-50 border border-stone-200">
                    <span className="text-[10px] text-stone-500 block">Port 1 (to Switch A):</span>
                    <strong className={linkACAlive ? "text-blue-700" : "text-red-600"}>
                      {stpState.switchC.p1.role}
                    </strong>{" "}
                    — {stpState.switchC.p1.state}
                  </div>
                  <div
                    className={`p-2 rounded-lg border ${
                      stpState.switchC.p2.state.includes("BLOCKING")
                        ? "bg-amber-50 border-amber-300"
                        : "bg-stone-50 border-stone-200"
                    }`}
                  >
                    <span className="text-[10px] text-stone-500 block">Port 2 (to Switch B):</span>
                    <strong
                      className={
                        stpState.switchC.p2.state.includes("BLOCKING")
                          ? "text-amber-800"
                          : "text-blue-700"
                      }
                    >
                      {stpState.switchC.p2.role}
                    </strong>{" "}
                    — {stpState.switchC.p2.state}
                  </div>
                </div>
              </div>
            </div>

            {/* STP Operational Explanation */}
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-700 space-y-1">
              <span className="font-bold text-stone-900 block">Topology Convergence Summary:</span>
              <p>
                {linkACAlive && linkABAlive && linkBCAlive ? (
                  <span>
                    All 3 physical links are active. To prevent a Layer 2 loop, Spanning Tree has elected
                    <strong> Switch A</strong> as the Root Bridge. Switch C has blocked its Port 2 link to
                    Switch B (Alternate Port / Discarding). If the link between Switch A and Switch C
                    fails, Port 2 will unblock instantly to preserve connectivity!
                  </span>
                ) : !linkACAlive ? (
                  <span className="text-[#ea580c] font-bold">
                    Link A-C failed! Switch C's Alternate Port on Link B-C immediately transitioned to
                    FORWARDING (Root Port via Switch B, Root Path Cost = 8). No connectivity was lost!
                  </span>
                ) : (
                  <span>A link is down; Spanning Tree active topology has converged to maintain reachability.</span>
                )}
              </p>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 4: 802.1Q VLAN TAGGING & FRAME OVERHEAD CALCULATOR              */}
        {/* ================================================================== */}
        {activeTab === "vlan-sim" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#ea580c] font-bold">
                Interactive Simulator 3
              </span>
              <h3 className="text-xl font-black text-stone-900">
                IEEE 802.1Q VLAN Tagging & Frame Overhead Calculator
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                Inspect byte-by-byte Ethernet II frame composition, 802.1Q 4-byte tag insertion,
                payload padding to reach the 64-byte minimum, and effective transmission efficiency.
              </p>
            </div>

            {/* Controls */}
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 grid gap-4 sm:grid-cols-3">
              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">
                  Layer 3 Payload Size: {payloadBytes} Bytes
                </label>
                <input
                  type="range"
                  min="20"
                  max="1500"
                  step="10"
                  value={payloadBytes}
                  onChange={(e) => setPayloadBytes(Number(e.target.value))}
                  className="w-full accent-[#ea580c]"
                />
                <span className="text-[10px] text-stone-500 block mt-1">Min 20B (IPv4 TCP SYN) to Max 1500B</span>
              </div>

              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">802.1Q VLAN Tagging:</label>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsVlanTagged(true)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold cursor-pointer transition ${
                      isVlanTagged ? "bg-[#ea580c] text-white" : "bg-stone-200 text-stone-700"
                    }`}
                  >
                    Tagged (Trunk)
                  </button>
                  <button
                    onClick={() => setIsVlanTagged(false)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold cursor-pointer transition ${
                      !isVlanTagged ? "bg-[#ea580c] text-white" : "bg-stone-200 text-stone-700"
                    }`}
                  >
                    Untagged (Access)
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-stone-700 block mb-1">
                  VLAN ID (VID): {vlanIdInput}
                </label>
                <input
                  type="number"
                  min="1"
                  max="4094"
                  value={vlanIdInput}
                  onChange={(e) => setVlanIdInput(Number(e.target.value))}
                  disabled={!isVlanTagged}
                  className="w-full p-2 rounded-xl border border-stone-300 bg-white font-mono text-xs"
                />
              </div>
            </div>

            {/* Byte Allocation Visualizer */}
            <div className="p-4 rounded-2xl bg-stone-900 text-white font-mono text-xs space-y-3">
              <span className="text-[10px] text-stone-400 uppercase tracking-widest block font-bold">
                Frame Byte Composition on the Wire
              </span>
              <div className="flex flex-wrap gap-1 text-center">
                <div className="p-2.5 rounded bg-blue-900/80 border border-blue-600 flex-1 min-w-[100px]">
                  <span className="text-[9px] text-blue-200 block">Dest MAC</span>
                  <span className="font-bold">6 Bytes</span>
                </div>
                <div className="p-2.5 rounded bg-blue-900/80 border border-blue-600 flex-1 min-w-[100px]">
                  <span className="text-[9px] text-blue-200 block">Src MAC</span>
                  <span className="font-bold">6 Bytes</span>
                </div>
                {isVlanTagged && (
                  <div className="p-2.5 rounded bg-orange-600/90 border border-orange-400 flex-1 min-w-[120px] animate-pulse">
                    <span className="text-[9px] text-orange-200 block">802.1Q (VID {vlanIdInput})</span>
                    <span className="font-bold">4 Bytes</span>
                  </div>
                )}
                <div className="p-2.5 rounded bg-emerald-900/80 border border-emerald-600 flex-1 min-w-[90px]">
                  <span className="text-[9px] text-emerald-200 block">EtherType</span>
                  <span className="font-bold">2 Bytes</span>
                </div>
                <div className="p-2.5 rounded bg-amber-900/80 border border-amber-600 flex-2 min-w-[140px]">
                  <span className="text-[9px] text-amber-200 block">Payload</span>
                  <span className="font-bold">{payloadBytes} Bytes</span>
                </div>
                {paddingBytes > 0 && (
                  <div className="p-2.5 rounded bg-purple-900/80 border border-purple-600 flex-1 min-w-[100px]">
                    <span className="text-[9px] text-purple-200 block">Zero Padding</span>
                    <span className="font-bold">+{paddingBytes} Bytes</span>
                  </div>
                )}
                <div className="p-2.5 rounded bg-red-900/80 border border-red-600 flex-1 min-w-[90px]">
                  <span className="text-[9px] text-red-200 block">FCS (CRC)</span>
                  <span className="font-bold">4 Bytes</span>
                </div>
              </div>
            </div>

            {/* Calculations Breakdown */}
            <div className="grid gap-4 sm:grid-cols-4">
              <div className="p-4 rounded-2xl border border-stone-200 bg-white">
                <span className="text-[10px] font-mono uppercase text-stone-500 font-bold">Total L2 Frame Size</span>
                <div className="text-2xl font-black text-stone-900 font-mono mt-1">
                  {totalWireFrameBytes} Bytes
                </div>
                <span className="text-[11px] text-stone-500 mt-1 block">
                  {totalWireFrameBytes >= 64 ? "Meets 64B standard minimum" : "Padded to 64B"}
                </span>
              </div>

              <div className="p-4 rounded-2xl border border-stone-200 bg-white">
                <span className="text-[10px] font-mono uppercase text-stone-500 font-bold">L2 Header Overhead</span>
                <div className="text-2xl font-black text-[#ea580c] font-mono mt-1">
                  {standardHeaderBytes + vlanTagBytes + fcsBytes} Bytes
                </div>
                <span className="text-[11px] text-stone-500 mt-1 block">
                  {isVlanTagged ? "14B MAC + 4B VLAN + 4B FCS" : "14B MAC + 4B FCS"}
                </span>
              </div>

              <div className="p-4 rounded-2xl border border-stone-200 bg-white">
                <span className="text-[10px] font-mono uppercase text-stone-500 font-bold">Wire Bits (Preamble + IFG)</span>
                <div className="text-2xl font-black text-blue-700 font-mono mt-1">
                  {(totalWireFrameBytes + 8 + 12) * 8} bits
                </div>
                <span className="text-[11px] text-stone-500 mt-1 block">Includes 8B sync + 12B inter-frame gap</span>
              </div>

              <div className="p-4 rounded-2xl border border-emerald-200 bg-emerald-50/50">
                <span className="text-[10px] font-mono uppercase text-emerald-900 font-bold">Data Payload Efficiency</span>
                <div className="text-2xl font-black text-emerald-700 font-mono mt-1">
                  {efficiencyPercent}%
                </div>
                <span className="text-[11px] text-emerald-800 mt-1 block">Payload bytes / Total wire bytes</span>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 5: ARP RESOLUTION & NEXT-HOP TRACER                             */}
        {/* ================================================================== */}
        {activeTab === "arp-sim" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#ea580c] font-bold">
                  Interactive Simulator 4
                </span>
                <h3 className="text-xl font-black text-stone-900">
                  Address Resolution Protocol (ARP) & Next-Hop Tracer
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Step through how IPv4 resolves local MAC addresses vs. routing through a default gateway.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setArpScenario("local");
                    setArpStep(0);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                    arpScenario === "local" ? "bg-[#ea580c] text-white" : "bg-stone-100 text-stone-700"
                  }`}
                >
                  Local LAN Scenario (Host A to B)
                </button>
                <button
                  onClick={() => {
                    setArpScenario("gateway");
                    setArpStep(0);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                    arpScenario === "gateway" ? "bg-[#ea580c] text-white" : "bg-stone-100 text-stone-700"
                  }`}
                >
                  Remote Internet (via Gateway)
                </button>
              </div>
            </div>

            {/* Step Navigation Bar */}
            <div className="grid grid-cols-4 gap-2">
              {currentArpSteps.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setArpStep(idx)}
                  className={`p-3 rounded-2xl border text-left transition cursor-pointer ${
                    arpStep === idx
                      ? "border-orange-500 bg-orange-50/80 text-orange-950 font-bold"
                      : "border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100"
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase block text-stone-400">Step {idx + 1}</span>
                  <span className="text-xs truncate block">{s.title.split(":")[1]}</span>
                </button>
              ))}
            </div>

            {/* Active Step Card */}
            <div className="p-6 rounded-2xl border border-stone-200 bg-white space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-extrabold text-stone-900 text-base">
                  {currentArpSteps[arpStep].title}
                </h4>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-orange-100 text-[#ea580c]">
                  {currentArpSteps[arpStep].highlight}
                </span>
              </div>

              <p className="text-xs text-stone-700 leading-relaxed">
                {currentArpSteps[arpStep].desc}
              </p>

              <div className="p-4 rounded-xl bg-stone-900 text-white font-mono text-xs space-y-1">
                <span className="text-[10px] text-stone-400 uppercase tracking-widest block font-bold">
                  Network Wire PDU State
                </span>
                <p className="text-emerald-400">{currentArpSteps[arpStep].pdu}</p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                <button
                  onClick={() => setArpStep((prev) => Math.max(0, prev - 1))}
                  disabled={arpStep === 0}
                  className="px-3 py-1.5 rounded-xl border border-stone-200 text-xs font-bold text-stone-600 disabled:opacity-40 cursor-pointer"
                >
                  Previous Step
                </button>
                <button
                  onClick={() =>
                    setArpStep((prev) => Math.min(currentArpSteps.length - 1, prev + 1))
                  }
                  disabled={arpStep === currentArpSteps.length - 1}
                  className="px-4 py-1.5 rounded-xl bg-[#ea580c] text-white text-xs font-bold disabled:opacity-40 hover:bg-[#c2410c] cursor-pointer"
                >
                  Next Step
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 6: SWITCH & LINUX CLI DIAGNOSTICS                               */}
        {/* ================================================================== */}
        {activeTab === "cli" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#ea580c] font-bold">
                Practical Diagnostics Reference
              </span>
              <h3 className="text-xl font-black text-stone-900">
                Linux iproute2 & Cisco/Arista Switch CLI Command Center
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                Copy production commands used by network systems engineers to baseline Layer 2 links.
              </p>
            </div>

            <div className="space-y-4">
              {/* Linux Commands */}
              <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-emerald-400 font-bold">Linux Kernel Networking (iproute2)</span>
                  <button
                    onClick={() =>
                      copyCode(
                        `# Inspect ARP table
ip neigh show

# Flush stale ARP entry for a specific host
ip neigh del 192.168.1.50 dev eth0

# Check link counters for CRC and frame errors
ip -s link show eth0

# Inspect bridge forwarding database (FDB)
bridge fdb show dev br0

# Capture raw Ethernet frames with EtherType
tcpdump -i eth0 -e -nn "ether proto 0x0806 or ether proto 0x8100"`,
                        "linux-cli-copy"
                      )
                    }
                    className="flex items-center gap-1 px-2.5 py-1 rounded bg-stone-800 text-stone-300 hover:text-white text-[11px] cursor-pointer"
                  >
                    {copiedCodeId === "linux-cli-copy" ? <Check size={12} /> : <Copy size={12} />}
                    <span>{copiedCodeId === "linux-cli-copy" ? "Copied" : "Copy Linux Commands"}</span>
                  </button>
                </div>
                <pre className="text-stone-300 overflow-x-auto leading-relaxed">
{`# 1. View neighbor ARP cache
$ ip neigh show
192.168.1.1 dev eth0 lladdr 00:00:5e:00:53:01 REACHABLE
192.168.1.20 dev eth0 lladdr 00:1a:2b:3c:4d:02 STALE

# 2. View interface packet counters and hardware CRC errors
$ ip -s link show eth0
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP
    RX:  bytes packets errors dropped missed mcast
    148291048 1084920      0       0      0  1402
    TX:  bytes packets errors dropped carrier collsns
     84910243  729481      0       0        0       0`}
                </pre>
              </div>

              {/* Cisco / Arista Switch CLI */}
              <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-orange-400 font-bold">Cisco IOS / Arista EOS Switch CLI</span>
                  <button
                    onClick={() =>
                      copyCode(
                        `# Display learned MAC table
show mac address-table dynamic

# Verify 802.1Q trunk status
show interfaces trunk

# Check Spanning Tree root and port states
show spanning-tree vlan 10

# Hardening: Configure Port Security on access port
interface GigabitEthernet0/1
 switchport mode access
 switchport access vlan 10
 switchport port-security
 switchport port-security maximum 2
 switchport port-security violation restrict
 switchport port-security mac-address sticky
 spanning-tree bpduguard enable`,
                        "switch-cli-copy"
                      )
                    }
                    className="flex items-center gap-1 px-2.5 py-1 rounded bg-stone-800 text-stone-300 hover:text-white text-[11px] cursor-pointer"
                  >
                    {copiedCodeId === "switch-cli-copy" ? <Check size={12} /> : <Copy size={12} />}
                    <span>{copiedCodeId === "switch-cli-copy" ? "Copied" : "Copy Switch Config"}</span>
                  </button>
                </div>
                <pre className="text-stone-300 overflow-x-auto leading-relaxed">
{`# 1. Inspect dynamic CAM table
Switch# show mac address-table dynamic
          Mac Address Table
-------------------------------------------
Vlan    Mac Address       Type        Ports
----    -----------       --------    -----
  10    001a.2b3c.4d01    DYNAMIC     Gi0/1
  10    001a.2b3c.4d02    DYNAMIC     Gi0/2
  20    0050.56a1.0001    DYNAMIC     Gi0/24

# 2. Verify 802.1Q trunk status
Switch# show interfaces trunk
Port        Mode             Encapsulation  Status        Native vlan
Gi0/24      on               802.1q         trunking      999
Port        Vlans allowed on trunk
Gi0/24      10,20,30`}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 7: KNOWLEDGE ASSESSMENT QUIZ (10 QUESTIONS)                     */}
        {/* ================================================================== */}
        {activeTab === "quiz" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-purple-600 font-bold">
                  Module 4 Knowledge Assessment
                </span>
                <h3 className="text-xl font-black text-stone-900">
                  Data Link Layer & Ethernet Engineering Exam
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  10 university-level questions testing frame dissection, CAM switching, ARP, VLANs, STP, and L2 security.
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
                  Enterprise Layer 2 Network Engineering & Audit Report
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Professional markdown documentation template for campus switching audits, STP loop triage, and L2 security hardening.
                </p>
              </div>

              <button
                onClick={() =>
                  copyCode(
                    `# Enterprise Layer 2 Switching & Link-Layer Audit Report

## 1. Executive Summary
- **Organization:** Enterprise Campus Data Center
- **Lead Network Systems Engineer:** Infrastructure Security Team
- **Target Subsystem:** Core / Distribution Switching Mesh (Switches SW-01, SW-02, SW-03)
- **Investigation Scope:** Triage intermittent broadcast storm, verify 802.1Q VLAN trunking, and configure Layer 2 defense-in-depth controls.

## 2. Layer 2 Architecture & VLAN Allocation Plan
| VLAN ID | Subnet Prefix | Designated Use | Trunk Allowance | Security Controls Applied |
| :--- | :--- | :--- | :--- | :--- |
| **VLAN 10** | 192.168.10.0/24 | Corporate Workstations | SW-01, SW-02, SW-03 | 802.1X Port Security (Max 2 MACs) |
| **VLAN 20** | 192.168.20.0/24 | Guest Wireless | Core Uplink Only | Client Isolation, No Inter-VLAN Routing |
| **VLAN 30** | 192.168.30.0/24 | Production Database Cluster | SW-01, SW-02 | Dynamic ARP Inspection, DHCP Snooping |
| **VLAN 999** | None (Isolated) | Native VLAN (Dead-end) | All 802.1Q Trunks | Tagged Native, No IP Interface |

## 3. Spanning Tree Protocol (STP / 802.1w) Topology
- **Root Bridge:** SW-01 (Priority 4096 / MAC 00:00:5E:00:10:01)
- **Secondary Root Bridge:** SW-02 (Priority 8192 / MAC 00:00:5E:00:10:02)
- **Path Cost Standard:** 802.1w (10G Fiber Uplinks = Cost 2000)
- **Blocked Alternate Port:** SW-03 Port Gi1/0/24 (Cost 4000 to Root via SW-02)
- **STP Protection:**
  - BPDU Guard enabled globally on all edge host ports (\`spanning-tree portfast bpduguard default\`).
  - Root Guard applied to all distribution downstream ports facing access switches.

## 4. Hardware Counter Baselining & Fault Triage
\`\`\`bash
# Linux Bridge Host Error Counters
$ ip -s link show eth0
    RX: bytes packets errors dropped missed mcast
    9481029  104820      0       0      0   142
    TX: bytes packets errors dropped carrier collsns
    4810291   59201      0       0        0       0
\`\`\`
- **Findings:** Zero CRC / FCS errors detected across all fiber optics.
- **Root-Cause Analysis:** The observed network flap was caused by an unmanaged desktop switch looping Port 12 to Port 14 on access switch SW-03. The switch lacked BPDU Guard, allowing rogue BPDUs to thrash the CAM table.

## 5. Remediation & Defense-in-Depth Implementation
1. Enabled **DHCP Snooping** on all VLANs, trusting only uplink interfaces to DHCP server.
2. Enabled **Dynamic ARP Inspection (DAI)** on access ports to prevent ARP poisoning MITM.
3. Configured **Port Security** with MAC sticky learning and automatic port shutdown on violation.
4. Set native VLAN to isolated VLAN 999 and executed \`vlan dot1q tag native\`.`,
                    "l2-report-copy"
                  )
                }
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#ea580c] text-white text-xs font-bold hover:bg-[#c2410c] shadow-xs cursor-pointer"
              >
                {copiedCodeId === "l2-report-copy" ? <Check size={14} /> : <Copy size={14} />}
                <span>{copiedCodeId === "l2-report-copy" ? "Copied" : "Copy Report Template"}</span>
              </button>
            </div>

            <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed">
              <pre>
{`# Enterprise Layer 2 Switching & Link-Layer Audit Report

## 1. Executive Summary
- Organization: Enterprise Campus Data Center
- Scope: Triage broadcast storm, verify 802.1Q trunking, configure L2 defenses.

## 2. Spanning Tree Protocol (STP / 802.1w) Topology
- Root Bridge: SW-01 (Priority 4096 / MAC 00:00:5E:00:10:01)
- Blocked Alternate Port: SW-03 Port Gi1/0/24 (Preventing loop)
- Protections: BPDU Guard enabled on all access edge ports.

## 3. Remediation & Hardening Actions
1. Enabled Dynamic ARP Inspection (DAI) against DHCP Snooping database.
2. Restricted access ports to maximum 2 sticky MACs (Port Security).
3. Tagged Native VLAN on all 802.1Q trunks to neutralize VLAN Hopping.`}
              </pre>
            </div>
          </div>
        )}

        {/* Footer Navigation Bar */}
        <div className="mt-10 pt-6 border-t border-[#e7e3da] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => navigate("/learning/networks/physical")}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#e7e3da] bg-white text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#ea580c] transition cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 3 — Physical Layer & Transmission</span>
          </button>

          <button
            onClick={() => navigate("/learning/networks/ipv4")}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#ea580c] text-white text-xs font-bold hover:bg-[#c2410c] shadow-xs transition cursor-pointer"
          >
            <span>Next: Module 5 — IPv4 Addressing & Subnetting</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
