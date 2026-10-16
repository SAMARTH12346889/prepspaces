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
  FileCode,
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
  Workflow,
  GitBranch,
  Gauge,
  Router,
  Repeat,
  RadioTower,
  Binary,
  Compass,
} from "lucide-react";
import ModuleNav from "./ModuleNav";

export default function NetworkAdvancedRouting() {
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
  // SIMULATOR 1: BGP Policy & Path Attribute Selection Sandbox
  // ==========================================
  const [isp1LocalPref, setIsp1LocalPref] = useState(100);
  const [isp2LocalPref, setIsp2LocalPref] = useState(100);
  const [isp1PrependHops, setIsp1PrependHops] = useState(0);
  const [isp2PrependHops, setIsp2PrependHops] = useState(0);
  const [isp1Origin, setIsp1Origin] = useState("IGP"); // IGP | Incomplete
  const [isp2Origin, setIsp2Origin] = useState("IGP");
  const [isp1Med, setIsp1Med] = useState(0);
  const [isp2Med, setIsp2Med] = useState(0);
  const [isp1Rpki, setIsp1Rpki] = useState("VALID"); // VALID | INVALID | NOT_FOUND
  const [isp2Rpki, setIsp2Rpki] = useState("VALID");

  const bgpEvaluation = useMemo(() => {
    // Step 0: RPKI Invalid rejection
    if (isp1Rpki === "INVALID" && isp2Rpki !== "INVALID") {
      return { winner: "ISP 2", reason: "ISP 1 path rejected: RPKI status is INVALID (Route Origin Authorization mismatch)." };
    }
    if (isp2Rpki === "INVALID" && isp1Rpki !== "INVALID") {
      return { winner: "ISP 1", reason: "ISP 2 path rejected: RPKI status is INVALID (Route Origin Authorization mismatch)." };
    }
    if (isp1Rpki === "INVALID" && isp2Rpki === "INVALID") {
      return { winner: "None (Drop)", reason: "Both paths dropped: Both announce prefixes invalid under RPKI ROV." };
    }

    // Step 1: Highest LOCAL_PREF
    if (isp1LocalPref > isp2LocalPref) {
      return { winner: "ISP 1", reason: `ISP 1 selected by LOCAL_PREF (${isp1LocalPref} > ${isp2LocalPref}).` };
    }
    if (isp2LocalPref > isp1LocalPref) {
      return { winner: "ISP 2", reason: `ISP 2 selected by LOCAL_PREF (${isp2LocalPref} > ${isp1LocalPref}).` };
    }

    // Step 2: Shortest AS_PATH length
    const isp1PathLen = 1 + isp1PrependHops;
    const isp2PathLen = 1 + isp2PrependHops;
    if (isp1PathLen < isp2PathLen) {
      return { winner: "ISP 1", reason: `ISP 1 selected by shorter AS_PATH length (${isp1PathLen} hops vs ${isp2PathLen} hops).` };
    }
    if (isp2PathLen < isp1PathLen) {
      return { winner: "ISP 2", reason: `ISP 2 selected by shorter AS_PATH length (${isp2PathLen} hops vs ${isp1PathLen} hops).` };
    }

    // Step 3: Origin code (IGP < EGP < Incomplete)
    if (isp1Origin === "IGP" && isp2Origin === "Incomplete") {
      return { winner: "ISP 1", reason: "ISP 1 selected: Origin IGP preferred over Incomplete." };
    }
    if (isp2Origin === "IGP" && isp1Origin === "Incomplete") {
      return { winner: "ISP 2", reason: "ISP 2 selected: Origin IGP preferred over Incomplete." };
    }

    // Step 4: Lowest Multi-Exit Discriminator (MED)
    if (isp1Med < isp2Med) {
      return { winner: "ISP 1", reason: `ISP 1 selected by lower MED metric (${isp1Med} < ${isp2Med}).` };
    }
    if (isp2Med < isp1Med) {
      return { winner: "ISP 2", reason: `ISP 2 selected by lower MED metric (${isp2Med} < ${isp1Med}).` };
    }

    // Tiebreaker: Router ID
    return { winner: "ISP 1", reason: "Tied on all standard attributes: ISP 1 wins by tiebreaker (Lower Peer Router ID 198.51.100.1 < 203.0.113.1)." };
  }, [isp1LocalPref, isp2LocalPref, isp1PrependHops, isp2PrependHops, isp1Origin, isp2Origin, isp1Med, isp2Med, isp1Rpki, isp2Rpki]);

  // ==========================================
  // SIMULATOR 2: OSPF Adjacency & Dijkstra SPF Path Calculator
  // ==========================================
  const [costAB, setCostAB] = useState(10);
  const [costAC, setCostAC] = useState(20);
  const [costBD, setCostBD] = useState(15);
  const [costCD, setCostCD] = useState(5);
  const [costDE, setCostDE] = useState(10);
  const [linkABDown, setLinkABDown] = useState(false);
  const [linkCDDown, setLinkCDDown] = useState(false);

  const ospfDijkstra = useMemo(() => {
    // Nodes: A (Source), B, C, D, E (Destination)
    const effectiveAB = linkABDown ? Infinity : costAB;
    const effectiveCD = linkCDDown ? Infinity : costCD;
    const effectiveAC = costAC;
    const effectiveBD = costBD;
    const effectiveDE = costDE;

    // Path 1: A -> B -> D -> E
    const path1Cost = effectiveAB + effectiveBD + effectiveDE;
    // Path 2: A -> C -> D -> E
    const path2Cost = effectiveAC + effectiveCD + effectiveDE;

    let best = "None";
    let cost = Infinity;
    let sequence = [];

    if (path1Cost < path2Cost && path1Cost < Infinity) {
      best = "Path via Router B (A -> B -> D -> E)";
      cost = path1Cost;
      sequence = ["A", "B", "D", "E"];
    } else if (path2Cost < path1Cost && path2Cost < Infinity) {
      best = "Path via Router C (A -> C -> D -> E)";
      cost = path2Cost;
      sequence = ["A", "C", "D", "E"];
    } else if (path1Cost === path2Cost && path1Cost < Infinity) {
      best = "ECMP (Equal-Cost Multi-Path: Both paths valid)";
      cost = path1Cost;
      sequence = ["A", "B/C", "D", "E"];
    } else {
      best = "Destination Unreachable (Network Partitioned)";
      cost = Infinity;
      sequence = ["A", "UNREACHABLE"];
    }

    return { best, cost, sequence, path1Cost, path2Cost };
  }, [costAB, costAC, costBD, costCD, costDE, linkABDown, linkCDDown]);

  // ==========================================
  // SIMULATOR 3: Path MTU Discovery (PMTUD) & Black Hole Diagnostic Engine
  // ==========================================
  const [packetSize, setPacketSize] = useState(1500);
  const [tunnelMtu, setTunnelMtu] = useState(1400);
  const [blockIcmp, setBlockIcmp] = useState(true);
  const [enableMssClamp, setEnableMssClamp] = useState(false);

  const pmtuStatus = useMemo(() => {
    const isOverMtu = packetSize > tunnelMtu;

    if (!isOverMtu) {
      return {
        status: "DELIVERED",
        badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
        title: "Clean Delivery",
        desc: `Packet size (${packetSize} B) <= Tunnel MTU (${tunnelMtu} B). No fragmentation required.`,
      };
    }

    if (enableMssClamp) {
      return {
        status: "CLAMPED",
        badge: "bg-blue-50 text-blue-700 border-blue-200",
        title: "TCP MSS Clamped to Tunnel Path",
        desc: `TCP SYN MSS rewritten to ${tunnelMtu - 40} bytes. Sender segments never exceed tunnel MTU (${tunnelMtu} B).`,
      };
    }

    if (blockIcmp) {
      return {
        status: "BLACK_HOLE",
        badge: "bg-red-50 text-red-700 border-red-200",
        title: "PMTUD Black Hole Detected!",
        desc: `Router dropped packet with DF=1 (${packetSize} B > ${tunnelMtu} B). ICMP Type 3 Code 4 was BLOCKED by firewall. Client hangs in TCP retransmission loop!`,
      };
    }

    return {
      status: "PMTU_SUCCESS",
      badge: "bg-amber-50 text-amber-700 border-amber-200",
      title: "ICMP Type 3 Code 4 Received",
      desc: `Intermediate router sent "Fragmentation Needed and DF set" (Next-Hop MTU: ${tunnelMtu}). Sender caches PMTU and renegotiates smaller segments.`,
    };
  }, [packetSize, tunnelMtu, blockIcmp, enableMssClamp]);

  // ==========================================
  // SIMULATOR 4: Asymmetric Routing & Stateful Firewall State Table Sandbox
  // ==========================================
  const [fwSyncEnabled, setFwSyncEnabled] = useState(false);
  const [asymBypassRule, setAsymBypassRule] = useState(false);
  const [tcpConnStep, setTcpConnStep] = useState("idle"); // idle | syn_sent | synack_received | ack_sent | drop_error

  const simulateTcpHandshake = () => {
    setTcpConnStep("syn_sent");
    setTimeout(() => {
      // In asymmetric routing: SYN goes through Firewall A (ISP 1).
      // Return SYN-ACK comes back through Firewall B (ISP 2).
      if (fwSyncEnabled || asymBypassRule) {
        setTcpConnStep("ack_sent");
      } else {
        setTcpConnStep("drop_error");
      }
    }, 700);
  };

  // ==========================================
  // SIMULATOR 5: Bufferbloat, Queueing Delay & Bandwidth-Delay Product (BDP) Calculator
  // ==========================================
  const [linkBandwidthMbps, setLinkBandwidthMbps] = useState(100);
  const [baseRttMs, setBaseRttMs] = useState(30);
  const [bufferDepthKb, setBufferDepthKb] = useState(250);
  const [aqmEnabled, setAqmEnabled] = useState(false);

  const bufferMetrics = useMemo(() => {
    // BDP in bytes = (Bandwidth in bps * RTT in seconds) / 8
    const bandwidthBps = linkBandwidthMbps * 1_000_000;
    const rttSec = baseRttMs / 1000;
    const bdpBytes = Math.round((bandwidthBps * rttSec) / 8);
    const bdpKb = Math.round(bdpBytes / 1024);

    // Queueing delay = Buffer bits / bandwidth bps
    const bufferBits = bufferDepthKb * 1024 * 8;
    const rawQueueDelayMs = Math.round((bufferBits / bandwidthBps) * 1000);

    // With AQM (e.g. CoDel / FQ-CoDel), target queue delay is limited to ~5ms
    const queueDelayMs = aqmEnabled ? Math.min(rawQueueDelayMs, 5) : rawQueueDelayMs;
    const totalRttMs = baseRttMs + queueDelayMs;

    let bloatGrade = "A+";
    let gradeColor = "text-emerald-600 bg-emerald-50 border-emerald-200";
    if (totalRttMs > 250) {
      bloatGrade = "F";
      gradeColor = "text-red-600 bg-red-50 border-red-200";
    } else if (totalRttMs > 150) {
      bloatGrade = "D";
      gradeColor = "text-orange-600 bg-orange-50 border-orange-200";
    } else if (totalRttMs > 80) {
      bloatGrade = "B";
      gradeColor = "text-amber-600 bg-amber-50 border-amber-200";
    }

    return {
      bdpBytes,
      bdpKb,
      queueDelayMs,
      totalRttMs,
      bloatGrade,
      gradeColor,
      bloatMultiplier: (totalRttMs / baseRttMs).toFixed(1),
    };
  }, [linkBandwidthMbps, baseRttMs, bufferDepthKb, aqmEnabled]);

  // ==========================================
  // QUIZ STATE & DATA
  // ==========================================
  const quizQuestions = [
    {
      id: 1,
      question: "Which BGP attribute is evaluated FIRST in the standard 13-step BGP decision tree?",
      options: [
        "AS_PATH length",
        "Weight (Cisco proprietary) / LOCAL_PREF",
        "Multi-Exit Discriminator (MED)",
        "Origin Code (IGP vs Incomplete)",
      ],
      correctIndex: 1,
      explanation:
        "BGP path selection begins with the highest Weight (router-local) followed immediately by the highest LOCAL_PREF across the Autonomous System. AS_PATH length is only evaluated if LOCAL_PREF is equal.",
    },
    {
      id: 2,
      question: "What causes a Path MTU Discovery (PMTUD) black hole on the Internet?",
      options: [
        "A router corrupting the TCP checksum on packets over 1500 bytes",
        "A firewall dropping ICMP Type 3 Code 4 ('Fragmentation Needed and DF set') packets",
        "A switch failing to negotiate LACP link aggregation on VLAN trunks",
        "BGP next-hop-self being omitted on iBGP edge border routers",
      ],
      correctIndex: 1,
      explanation:
        "When an upstream packet exceeds a link's MTU and has DF=1 (Don't Fragment), the router drops it and emits an ICMP Type 3 Code 4 packet back to the sender. If an over-zealous firewall blocks this ICMP message, the sender never knows to reduce its MSS, hanging the TCP session indefinitely.",
    },
    {
      id: 3,
      question: "In OSPF, what is the default reference bandwidth used to compute interface cost (Cost = 10^8 / bandwidth), and what problem does it cause on modern 10Gbps/100Gbps links?",
      options: [
        "10 Mbps; it prevents Gigabit links from forming OSPF Full adjacency",
        "100 Mbps; 100M, 1G, 10G, and 100G links all calculate to an identical minimum cost of 1",
        "1 Gbps; it causes Dijkstra SPF to loop between Area 0 and NSSA stub areas",
        "10 Gbps; it requires manual static metric redistribution into BGP",
      ],
      correctIndex: 1,
      explanation:
        "The legacy OSPF reference bandwidth is 100 Mbps (100,000,000 bps). Any link speed of 100 Mbps or higher yields cost = 1. Engineers must issue 'auto-cost reference-bandwidth 1000000' (or higher) to properly distinguish 1G, 10G, 40G, and 100G paths.",
    },
    {
      id: 4,
      question: "Why does asymmetric routing cause stateful packet firewalls to drop legitimate return traffic?",
      options: [
        "Asymmetric paths violate BGP split-horizon loop prevention rules",
        "Firewall B receives return SYN-ACK or ACK packets without having seen the initiating SYN in its conntrack table",
        "Traceroute ICMP packets lose their TTL hop count during reverse transit",
        "Path MTU discovery forces both firewalls to fragment Layer 2 Ethernet headers",
      ],
      correctIndex: 1,
      explanation:
        "Stateful firewalls maintain a connection tracking table (conntrack). If the outbound TCP SYN traversed Firewall A, Firewall B has no state record for that flow. When the server's SYN-ACK returns via Firewall B, it is dropped as an out-of-state/invalid TCP packet unless state synchronization (e.g., conntrackd/pfsync) is deployed.",
    },
    {
      id: 5,
      question: "What does Little's Law (L = lambda * W) demonstrate regarding router queueing buffers and congestion?",
      options: [
        "Network latency is inversely proportional to packet payload length",
        "The average number of packets in a buffer equals the arrival rate multiplied by the average waiting time",
        "TCP congestion window size is bounded by the optical cable propagation speed",
        "BGP convergence time decreases linearly with the number of route reflectors",
      ],
      correctIndex: 1,
      explanation:
        "Little's Law states that the long-term average number of items in a stationary queueing system (L) equals the arrival rate (lambda) multiplied by the average waiting time spent in the system (W). Oversized buffers cause packet waiting time to surge under sustained load, causing Bufferbloat.",
    },
    {
      id: 6,
      question: "What is the primary role of RPKI (Resource Public Key Infrastructure) Route Origin Validation (ROV)?",
      options: [
        "Encrypting all inter-AS BGP payload data with AES-256-GCM",
        "Cryptographically verifying that an AS announcing an IP prefix is authorized by the registered IP holder",
        "Preventing OSPF Area 0 LSAs from leaking into external BGP Autonomous Systems",
        "Enforcing TCP MSS clamping on all Border Gateway interfaces automatically",
      ],
      correctIndex: 1,
      explanation:
        "RPKI allows IP address holders to publish cryptographically signed Route Origin Authorizations (ROAs). BGP routers perform Route Origin Validation (ROV) to verify that the announcing AS is authorized, stopping accidental or malicious BGP prefix hijacks.",
    },
    {
      id: 7,
      question: "What is the difference between Traffic Policing and Traffic Shaping?",
      options: [
        "Policing buffers packets during bursts; shaping drops packets immediately",
        "Policing drops or re-marks packets exceeding the CIR; shaping delays and buffers bursty packets to output a smooth rate",
        "Policing is applied to Layer 2 VLANs; shaping is applied strictly to BGP attributes",
        "Policing uses FQ-CoDel; shaping uses legacy DropTail FIFO",
      ],
      correctIndex: 1,
      explanation:
        "Traffic Policing monitors packet arrival rate against a Committed Information Rate (CIR) and drops or re-marks excess packets abruptly. Traffic Shaping buffers excess packets in memory and transmits them at a steady rate, smoothing traffic without packet loss at the cost of slight queueing delay.",
    },
    {
      id: 8,
      question: "How does the Bandwidth-Delay Product (BDP) dictate the required TCP Receive Window (`rwnd`) for maximum throughput?",
      options: [
        "rwnd must equal exactly half of the MTU size",
        "rwnd must be at least BDP (Bandwidth &times; RTT) to keep the pipeline full without stalling for ACKs",
        "rwnd must be smaller than the router's physical buffer depth to prevent bufferbloat",
        "rwnd is only used in UDP streaming and is ignored by TCP BBR and CUBIC",
      ],
      correctIndex: 1,
      explanation:
        "BDP represents the volume of unacknowledged data in transit required to fill the end-to-end pipe. If the TCP receive window is smaller than BDP, the sender stalls and waits for ACKs before transmitting more packets, severely bottlenecking throughput regardless of available bandwidth.",
    },
    {
      id: 9,
      question: "When redistributing routes between OSPF and BGP across multiple boundary routers, what prevents mutual routing loops?",
      options: [
        "Disabling OSPF Hello packets on all internal interfaces",
        "Assigning route tags at redistribution and filtering tagged routes on the opposite boundary router",
        "Setting the BGP LOCAL_PREF to 0 for all external subnets",
        "Increasing the Ethernet MTU to 9000 bytes (Jumbo Frames)",
      ],
      correctIndex: 1,
      explanation:
        "Route tagging attaches administrative tags (e.g., Tag 100) to routes redistributed from OSPF into BGP. When BGP redistributes back into OSPF on a secondary boundary router, a route-map drops any prefix matching Tag 100, preventing route feedback loops.",
    },
    {
      id: 10,
      question: "In SRE incident root-cause analysis (RCA), what is the difference between a proximate cause and an underlying systematic cause?",
      options: [
        "Proximate causes are hardware failures; systematic causes are software bugs",
        "The proximate cause is the immediate trigger that tripped the system; the systematic cause is the deeper architectural vulnerability or process failure that allowed the incident to occur",
        "Proximate causes are internal; systematic causes originate from external DDoS attacks",
        "Proximate causes are covered by SLAs; systematic causes are excluded from error budget calculations",
      ],
      correctIndex: 1,
      explanation:
        "The proximate cause is the immediate trigger (e.g., an engineer typed an incorrect prefix-list sequence). The underlying systematic cause is the missing validation pipeline, lack of automated syntax validation, absence of canary testing, or poor change review that allowed an invalid rule to enter production.",
    },
  ];

  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const handleSelectQuiz = (qId, optionIdx) => {
    if (showQuizResults) return;
    setQuizAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const quizScore = useMemo(() => {
    let correct = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correctIndex) {
        correct++;
      }
    });
    return correct;
  }, [quizAnswers]);

  // ==========================================
  // SRE DELIVERABLE TEMPLATE: Network Reliability & RCA Report
  // ==========================================
  const rcaReportTemplate = `# PRODUCTION SRE POST-MORTEM & INCIDENT RCA REPORT
Incident Reference: RCA-NET-2026-BGP-022
Date & Time: 2026-10-15 14:22:00 UTC
Severity: P1 — Critical Service Disruption (Global Egress Route Flap)
Incident Lead: Staff Network Reliability Engineer (SRE)
Document Status: APPROVED & BLAMELESS

---

## 1. Executive Summary
On October 15, 2026, at 14:22 UTC, global ingress/egress traffic to the North American region suffered an 84% degradation in TCP throughput and a 42% packet drop rate. The incident lasted 38 minutes (MTTR: 38m). Root cause was identified as a simultaneous BGP policy route flap combined with an internal PMTUD black hole following a dynamic link re-route through an un-clamped IPsec overlay tunnel.

## 2. Quantitative Reliability Impact
- **Total Duration:** 38 minutes
- **Availability Impact:** 99.91% monthly availability reduced to 99.82% (consumed 78% of monthly error budget)
- **Mean Time to Detect (MTTD):** 3 minutes (Synthetic canary alert fired via Blackbox exporter)
- **Mean Time to Identify (MTTI):** 11 minutes (NetFlow telemetry isolated asymmetry across WAN-East)
- **Mean Time to Repair (MTTR):** 24 minutes (MSS clamping deployed; BGP LOCAL_PREF restored)
- **Financial/Customer Impact:** 142,000 requests stalled in TCP SYN/FIN wait states; zero data corruption.

## 3. Timeline of Events (UTC)
- **14:20:00** — Change CR-9941 executed on Border Router BR-US-EAST-01 (intended to deprioritize Transit A).
- **14:22:15** — BGP LOCAL_PREF misconfiguration set Transit B to 80 while leaving Transit A at 100.
- **14:25:30** — P1 Alert triggered: Ingress traffic shifted to Backup Tunnel (MTU 1400), while egress remained on Direct 100G (MTU 1500).
- **14:28:10** — Stateful Edge Firewalls (FW-A/FW-B) began dropping return ACK packets due to asymmetric state divergence.
- **14:32:45** — Engineers noted TCP sessions with payloads >1360 bytes freezing due to dropped ICMP Type 3 Code 4.
- **14:46:00** — Hotfix 1: Enabled dynamic TCP MSS Clamping on border interfaces to 1360 bytes.
- **14:55:00** — Hotfix 2: Corrected BGP LOCAL_PREF to 200 on Primary Link; re-synchronized conntrack states.
- **15:00:00** — All synthetic probe latencies returned to baseline (28ms RTT, 0.00% packet loss).

## 4. Root Cause Analysis (5-Whys Methodology)
1. **Why did customer connections stall?**
   Packets larger than 1400 bytes were dropped silently without fragmentation.
2. **Why were they dropped without fragmentation?**
   The IPsec backup tunnel has an MTU of 1400 bytes, and the Don't Fragment (DF) bit was set on all outbound TCP packets.
3. **Why didn't PMTUD automatically reduce the MSS?**
   Edge security ACLs blocked inbound ICMP Type 3 Code 4 ("Destination Unreachable, Fragmentation Needed") as an anti-reconnaissance policy.
4. **Why did traffic divert over the 1400B tunnel in the first place?**
   A human error in route-map sequencing applied a lowered LOCAL_PREF to the primary 100G fiber link.
5. **Why was the misconfigured route-map allowed to take effect?**
   The CI/CD network policy validation pipeline lacked automated pre-flight BGP convergence simulation for prefix-list changes.

## 5. Proximate vs. Systematic Underlying Causes
- **Proximate Cause:** Manual typo in BGP route-map LOCAL_PREF attribute and dropping ICMP Type 3 Code 4 packets at perimeter.
- **Systematic Underlying Cause:** Absence of pre-flight policy testing (Batfish/Suzieq) in the automated deployment pipeline, combined with an overly aggressive ICMP perimeter filtering rule.

## 6. Action Items & Preventive Countermeasures
| Action Item | Owner | Priority | Target Date |
|:---|:---|:---|:---|
| Implement automated Batfish BGP pre-commit validation in GitOps CI/CD | NetOps | P0 | 2026-10-22 |
| Audit perimeter ACLs to permit ICMP Type 3 Code 4 across all edge routers | Security | P0 | 2026-10-18 |
| Enforce persistent TCP MSS Clamping ('clamp-mss-to-pmtu') on all overlay GRE/IPsec tunnels | NetOps | P1 | 2026-10-25 |
| Deploy conntrackd state synchronization between FW-A and FW-B pairs | SRE | P1 | 2026-11-05 |
| Conduct GameDay simulation of asymmetric routing failure scenarios | SRE/QA | P2 | 2026-11-15 |

---
*Report certified by SRE Reliability Governance Board — PrepSpaces Infrastructure Team*`;

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900">
      <ModuleNav activeModuleId="advanced-routing" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Course Header Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  MODULE 22 &bull; ADVANCED NETWORKING
                </span>
                <span className="text-xs font-mono text-stone-700 bg-stone-100 px-2.5 py-1 rounded-md">
                  RELIABILITY &amp; SRE
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-2">
                Advanced Routing, Performance and Troubleshooting
              </h1>
              <p className="text-stone-700 text-sm mt-1 max-w-3xl">
                Master BGP policy attributes, OSPF link-state convergence, Bufferbloat queueing dynamics, Path MTU Discovery (PMTUD) black holes, asymmetric routing across stateful firewalls, and enterprise root-cause analysis (RCA).
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono bg-stone-100 px-3 py-1.5 rounded-xl border border-stone-200 text-stone-700">
                10 Deep Topics &bull; 5 Interactive Simulators
              </span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-stone-200">
            {[
              { id: "curriculum", label: "22.1 - 22.10 Curriculum", icon: FileText },
              { id: "simulators", label: "5 Production Simulators", icon: Sliders },
              { id: "lab", label: "Hands-on Lab 22.1", icon: Terminal },
              { id: "quiz", label: "Evaluated Quiz (10 Qs)", icon: HelpCircle },
              { id: "audit", label: "SRE RCA Deliverable", icon: FileCode },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                    isActive
                      ? "bg-stone-900 text-white shadow-sm"
                      : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                  }`}
                >
                  <Icon size={14} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* TAB 1: CURRICULUM (22.1 - 22.10) */}
        {activeTab === "curriculum" && (
          <div className="space-y-6">
            {/* 22.1 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#ea580c] flex items-center justify-center font-mono font-bold text-sm">
                  1
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-[#ea580c]">SECTION 22.1</span>
                  <h2 className="text-xl font-bold text-stone-900">
                    Advanced Path Selection &amp; Longest-Prefix Match (LPM)
                  </h2>
                </div>
              </div>

              <div className="mt-4 text-stone-700 text-sm leading-relaxed space-y-4">
                <p>
                  At Layer 3, every forwarding decision hinges on <strong>Longest-Prefix Match (LPM)</strong>. When multiple routes exist in the forwarding table for a destination IP, the router always selects the route with the most specific subnet mask (the largest prefix length, e.g., <code>/28</code> over <code>/24</code>, and <code>/24</code> over <code>/16</code>), regardless of the administrative distance or protocol metric of the competing routes.
                </p>

                <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200">
                  <h4 className="text-xs font-mono font-bold text-stone-900 uppercase tracking-wider mb-2">
                    LPM Algorithmic Forwarding Architecture:
                  </h4>
                  <ul className="text-xs space-y-2 text-stone-700 list-disc list-inside">
                    <li>
                      <strong>Radix Trie / Patricia Tree:</strong> Software lookup trees running in kernel memory. Traverses bit-by-bit from MSB to LSB. Time complexity O(K) where K is IP bit length (32 for IPv4, 128 for IPv6).
                    </li>
                    <li>
                      <strong>TCAM (Ternary Content Addressable Memory):</strong> Hardware line cards execute single-clock-cycle parallel lookups across 1,000,000+ prefixes by matching bits as 0, 1, or &quot;X&quot; (don&apos;t care / masked).
                    </li>
                    <li>
                      <strong>Control Plane vs Data Plane Divergence:</strong> The Routing Information Base (RIB) resides in software memory (BGP/OSPF daemons). The Forwarding Information Base (FIB) is pre-compiled and pushed to hardware ASICs. High route churn can cause transient micro-loops when the FIB lags behind the RIB.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 22.2 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#ea580c] flex items-center justify-center font-mono font-bold text-sm">
                  2
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-[#ea580c]">SECTION 22.2</span>
                  <h2 className="text-xl font-bold text-stone-900">
                    BGP Architecture &amp; Routing Policy Engineering
                  </h2>
                </div>
              </div>

              <div className="mt-4 text-stone-700 text-sm leading-relaxed space-y-4">
                <p>
                  The Border Gateway Protocol (BGP-4, RFC 4271) is the path-vector routing protocol orchestrating the global Internet between distinct <strong>Autonomous Systems (ASNs)</strong>. Unlike link-state protocols that compute raw shortest paths, BGP is purely a policy enforcement engine.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200">
                    <h4 className="text-xs font-mono font-bold text-stone-900 uppercase tracking-wider mb-2">
                      eBGP vs iBGP Rules:
                    </h4>
                    <ul className="text-xs space-y-2 text-stone-700">
                      <li>&bull; <strong>eBGP (External):</strong> Peering between different ASNs. Default TTL = 1 (single-hop). Updates prepend local ASN to <code>AS_PATH</code>.</li>
                      <li>&bull; <strong>iBGP (Internal):</strong> Peering within the same ASN. TTL = 255. Requires full mesh or <em>Route Reflectors (RR)</em> because iBGP learned routes are never re-advertised to another iBGP peer (Split Horizon).</li>
                      <li>&bull; <strong>Next-Hop-Self:</strong> When eBGP routes are passed into iBGP, the border router must set <code>next-hop-self</code> or internal routers will fail recursion to the external IP.</li>
                    </ul>
                  </div>

                  <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200">
                    <h4 className="text-xs font-mono font-bold text-stone-900 uppercase tracking-wider mb-2">
                      Core BGP Path Attributes:
                    </h4>
                    <ul className="text-xs space-y-2 text-stone-700">
                      <li>&bull; <strong>LOCAL_PREF:</strong> Well-known discretionary. Local to AS (default 100). Higher is preferred. Dictates outbound egress traffic.</li>
                      <li>&bull; <strong>AS_PATH:</strong> Well-known mandatory. List of ASNs traversed. Shorter is preferred. Ingress traffic can be steered using <em>AS_PATH prepending</em>.</li>
                      <li>&bull; <strong>MED (Metric):</strong> Optional non-transitive. Advertised to external peers to influence ingress path. Lower is preferred.</li>
                      <li>&bull; <strong>COMMUNITY:</strong> Optional transitive 32-bit tag (e.g. <code>65000:100</code>) or Large Communities for policy automation.</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-orange-50/50 rounded-2xl p-4 border border-orange-200">
                  <h4 className="text-xs font-mono font-bold text-[#ea580c] uppercase tracking-wider mb-1">
                    RPKI Route Origin Validation (ROV):
                  </h4>
                  <p className="text-xs text-stone-700">
                    Cryptographic defense against BGP prefix hijacks. Resource Public Key Infrastructure validates Route Origin Authorizations (ROAs) issued by RIRs. Routes evaluate to <strong>Valid</strong>, <strong>Invalid</strong> (must be dropped), or <strong>NotFound</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* 22.3 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#ea580c] flex items-center justify-center font-mono font-bold text-sm">
                  3
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-[#ea580c]">SECTION 22.3</span>
                  <h2 className="text-xl font-bold text-stone-900">
                    OSPF Convergence &amp; Link-State Engineering
                  </h2>
                </div>
              </div>

              <div className="mt-4 text-stone-700 text-sm leading-relaxed space-y-4">
                <p>
                  Open Shortest Path First (OSPFv2/OSPFv3) is an Interior Gateway Protocol (IGP) using <strong>Dijkstra&apos;s Shortest Path First (SPF)</strong> algorithm. Every router in an OSPF area maintains an identical copy of the Link-State Database (LSDB).
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-mono font-bold text-stone-900">Adjacency Stages</span>
                    <p className="text-[11px] text-stone-700 mt-1">Down &rarr; Init &rarr; 2-Way (DR/BDR elected) &rarr; ExStart &rarr; Exchange &rarr; Loading &rarr; Full.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-mono font-bold text-stone-900">Area Hierarchy</span>
                    <p className="text-[11px] text-stone-700 mt-1">Area 0 (Backbone). Non-backbone areas must connect to Area 0. Stub, Totally Stubby, and NSSA limit LSA floods.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-mono font-bold text-stone-900">Cost Metric Formula</span>
                    <p className="text-[11px] text-stone-700 mt-1">Cost = Reference Bandwidth / Interface Bandwidth. Default 100 Mbps must be tuned for 10G/100G links.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 22.4 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#ea580c] flex items-center justify-center font-mono font-bold text-sm">
                  4
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-[#ea580c]">SECTION 22.4</span>
                  <h2 className="text-xl font-bold text-stone-900">
                    Route Redistribution, Metric Normalization &amp; Loop Prevention
                  </h2>
                </div>
              </div>

              <div className="mt-4 text-stone-700 text-sm leading-relaxed space-y-4">
                <p>
                  When enterprises bridge OSPF and BGP (or EIGRP/IS-IS) across multiple redundant boundary routers (ASBRs), <strong>mutual route redistribution</strong> can lead to sub-optimal routing and routing loops.
                </p>

                <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200 space-y-2">
                  <h4 className="text-xs font-mono font-bold text-stone-900 uppercase">Redistribution Hazards &amp; Defense:</h4>
                  <p className="text-xs text-stone-700">
                    <strong>Administrative Distance Inversion:</strong> OSPF has AD 110. eBGP has AD 20. iBGP has AD 200. If an OSPF route is redistributed into BGP and re-enters the OSPF domain from another router with a higher preference, traffic may bounce indefinitely.
                  </p>
                  <p className="text-xs text-stone-700">
                    <strong>Route Tagging Strategy:</strong> Always tag routes at the redistribution boundary (e.g., <code>set tag 100</code>). On all opposite boundary routers, apply a route-map rejecting any inbound route matching tag 100 (<code>match tag 100 &rarr; deny</code>).
                  </p>
                </div>
              </div>
            </div>

            {/* 22.5 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#ea580c] flex items-center justify-center font-mono font-bold text-sm">
                  5
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-[#ea580c]">SECTION 22.5</span>
                  <h2 className="text-xl font-bold text-stone-900">
                    Congestion, Queueing Theory, QoS &amp; Bufferbloat
                  </h2>
                </div>
              </div>

              <div className="mt-4 text-stone-700 text-sm leading-relaxed space-y-4">
                <p>
                  Under sustained load, router interfaces accumulate packets in hardware/software buffers. Little&apos;s Law dictates that queue depth directly translates to latency:
                </p>

                <div className="bg-stone-900 text-stone-100 font-mono text-xs p-4 rounded-2xl">
                  L = &lambda; &times; W &nbsp;&nbsp;|&nbsp;&nbsp; Serialization Delay: t_ser = L / C &nbsp;&nbsp;|&nbsp;&nbsp; Queue Delay: t_q = Buffer_depth_bits / Link_bps
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200">
                    <h4 className="text-xs font-mono font-bold text-stone-900 uppercase mb-1">Bufferbloat Hazard:</h4>
                    <p className="text-xs text-stone-700">
                      Cheap RAM led router manufacturers to install megabyte-scale DropTail FIFO buffers. When buffers fill under sustained uploads, latency jumps from 20ms to 800ms+, causing VoIP drops, SSH stutter, and gaming disconnects without dropping a single packet.
                    </p>
                  </div>
                  <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200">
                    <h4 className="text-xs font-mono font-bold text-stone-900 uppercase mb-1">Active Queue Management (AQM):</h4>
                    <p className="text-xs text-stone-700">
                      Algorithms like <strong>CoDel (Controlled Delay)</strong> and <strong>FQ-CoDel</strong> measure how long packets sit at the head of the queue. If sojourn time exceeds 5ms for an extended period, AQM intentionally drops or ECN-marks packets to trigger TCP backoff before buffers bloat.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 22.6 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#ea580c] flex items-center justify-center font-mono font-bold text-sm">
                  6
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-[#ea580c]">SECTION 22.6</span>
                  <h2 className="text-xl font-bold text-stone-900">
                    Packet Loss, MTU Mismatches, PMTUD &amp; Asymmetric Routing
                  </h2>
                </div>
              </div>

              <div className="mt-4 text-stone-700 text-sm leading-relaxed space-y-4">
                <p>
                  Two of the most frustrating network failures in production are <strong>PMTUD Black Holes</strong> and <strong>Asymmetric Stateful Firewall Drops</strong>:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200">
                    <h4 className="text-xs font-mono font-bold text-amber-900 uppercase mb-1">PMTUD Black Holes (RFC 1191):</h4>
                    <p className="text-xs text-stone-700">
                      When a client sets DF=1 and sends a 1500-byte packet into a 1400-byte tunnel (WireGuard, GRE, IPsec), the router drops it and emits an ICMP Type 3 Code 4 (&quot;Fragmentation Needed&quot;). If a firewall blocks this ICMP packet, the sender hangs forever.
                      <br /><br />
                      <strong>Fix:</strong> Enforce <code>TCPMSS --clamp-mss-to-pmtu</code> on edge gateways.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-red-50/60 border border-red-200">
                    <h4 className="text-xs font-mono font-bold text-red-900 uppercase mb-1">Asymmetric Routing Across Firewalls:</h4>
                    <p className="text-xs text-stone-700">
                      If outbound packets leave via Router/Firewall A (ISP 1) and return via Router/Firewall B (ISP 2), Firewall B sees a SYN-ACK without an initial SYN. It rejects the packet as <code>INVALID_STATE</code>.
                      <br /><br />
                      <strong>Fix:</strong> Deploy connection state sync (<code>conntrackd</code> / <code>pfsync</code>) or enforce routing symmetry via BGP LOCAL_PREF.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 22.7 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#ea580c] flex items-center justify-center font-mono font-bold text-sm">
                  7
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-[#ea580c]">SECTION 22.7</span>
                  <h2 className="text-xl font-bold text-stone-900">
                    Latency Measurement, Jitter &amp; Throughput Benchmarking
                  </h2>
                </div>
              </div>

              <div className="mt-4 text-stone-700 text-sm leading-relaxed space-y-4">
                <p>
                  Accurate performance benchmarking requires distinguishing between propagation delay, transmission serialization delay, and control-plane rate limiting.
                </p>

                <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200 space-y-2">
                  <h4 className="text-xs font-mono font-bold text-stone-900 uppercase">Bandwidth-Delay Product (BDP) Formula:</h4>
                  <p className="text-xs text-stone-700">
                    <code>BDP (bytes) = Bandwidth (bits/sec) &times; RTT (sec) / 8</code>. For a 10 Gbps transatlantic link with 80ms RTT: <code>BDP = 10,000,000,000 &times; 0.08 / 8 = 100,000,000 bytes (~100 MB)</code>.
                    If the client/server TCP window size is capped at 64 KB, actual throughput can never exceed <code>64,000 &times; 8 / 0.08 = 6.4 Mbps</code> (less than 0.1% of link capacity)! Window Scaling (RFC 7323) must be active.
                  </p>
                </div>
              </div>
            </div>

            {/* 22.8 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#ea580c] flex items-center justify-center font-mono font-bold text-sm">
                  8
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-[#ea580c]">SECTION 22.8</span>
                  <h2 className="text-xl font-bold text-stone-900">
                    Network Observability &amp; 8-Step Fault Isolation Sequence
                  </h2>
                </div>
              </div>

              <div className="mt-4 text-stone-700 text-sm leading-relaxed space-y-4">
                <p>
                  When a multi-hop failure strikes, structured top-down or bottom-up isolation prevents random guessing. Follow the 8-Step SRE isolation protocol:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { step: "1. Physical", desc: "SFP optical power (dBm), carrier light, cable bends" },
                    { step: "2. Data Link", desc: "CRC errors, frame drops, STP state (Forwarding vs Discarding)" },
                    { step: "3. Layer 3 IP", desc: "Subnet CIDR masks, ARP resolution, default gateway reachability" },
                    { step: "4. Protocol Peering", desc: "OSPF 2-Way/Full state, BGP Established, hold timers" },
                    { step: "5. FIB / Hardware", desc: "Validate hardware ASIC entries matching software RIB" },
                    { step: "6. Transport / MTU", desc: "DF-bit testing, ICMP Type 3 Code 4, TCP SYN MSS" },
                    { step: "7. Security State", desc: "Firewall conntrack table exhaustion, ACL drop counters" },
                    { step: "8. App / Telemetry", desc: "Streaming telemetry (gNMI), DNS resolution, NetFlow traces" },
                  ].map((s, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                      <span className="text-xs font-mono font-bold text-stone-900">{s.step}</span>
                      <p className="text-[11px] text-stone-700 mt-1">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 22.9 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#ea580c] flex items-center justify-center font-mono font-bold text-sm">
                  9
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-[#ea580c]">SECTION 22.9</span>
                  <h2 className="text-xl font-bold text-stone-900">
                    Root-Cause Analysis (RCA) &amp; Site Reliability Engineering (SRE)
                  </h2>
                </div>
              </div>

              <div className="mt-4 text-stone-700 text-sm leading-relaxed space-y-4">
                <p>
                  Reliability engineering shifts organizations from reactive fire-fighting to systematic prevention. A blameless post-mortem assumes that human operators make honest mistakes given the tools and information available.
                </p>

                <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200 space-y-2">
                  <h4 className="text-xs font-mono font-bold text-stone-900 uppercase">Core SRE Reliability Equations:</h4>
                  <ul className="text-xs space-y-1 text-stone-700 list-disc list-inside">
                    <li><strong>Availability (A):</strong> A = [Uptime / (Uptime + Downtime)] &times; 100%</li>
                    <li><strong>MTTR (Mean Time to Repair):</strong> Time elapsed between incident trigger and complete restoration.</li>
                    <li><strong>MTBF (Mean Time Between Failures):</strong> Measure of hardware and system longevity.</li>
                    <li><strong>Error Budget Burn Rate:</strong> Speed at which outages consume the allowed 0.01% (99.99%) downtime allowance.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 22.10 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#ea580c] flex items-center justify-center font-mono font-bold text-sm">
                  10
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-[#ea580c]">SECTION 22.10</span>
                  <h2 className="text-xl font-bold text-stone-900">
                    Multi-Hop Troubleshooting Workflow &amp; Hypothesis Matrix
                  </h2>
                </div>
              </div>

              <div className="mt-4 text-stone-700 text-sm leading-relaxed space-y-4">
                <p>
                  Before modifying production configurations during an outage, engineers formulate testable hypotheses and execute non-disruptive read-only probes:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 text-stone-700 font-mono">
                        <th className="py-2 pr-4 font-bold">Observed Symptom</th>
                        <th className="py-2 pr-4 font-bold">Primary Hypothesis</th>
                        <th className="py-2 pr-4 font-bold">Diagnostic Command</th>
                        <th className="py-2 font-bold">Permanent Resolution</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-700">
                      <tr>
                        <td className="py-2.5 pr-4 font-semibold text-stone-900">TCP Handshake succeeds; TLS/HTTP request hangs</td>
                        <td className="py-2.5 pr-4">PMTUD black hole / MTU mismatch</td>
                        <td className="py-2.5 pr-4 font-mono">ping -M do -s 1472 &lt;ip&gt;</td>
                        <td className="py-2.5">Permit ICMP 3/4 or enable TCP MSS Clamping</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4 font-semibold text-stone-900">Outbound SYN seen on FW1; no return ACK</td>
                        <td className="py-2.5 pr-4">Asymmetric routing; return dropped on FW2</td>
                        <td className="py-2.5 pr-4 font-mono">tcpdump -i any port 443</td>
                        <td className="py-2.5">Deploy conntrackd or equalize BGP metrics</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4 font-semibold text-stone-900">Latency spikes to 800ms during upload</td>
                        <td className="py-2.5 pr-4">Oversized DropTail FIFO (Bufferbloat)</td>
                        <td className="py-2.5 pr-4 font-mono">ping &lt;gw&gt; during iperf3 upload</td>
                        <td className="py-2.5">Configure FQ-CoDel or CAKE AQM queueing</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4 font-semibold text-stone-900">Route present in RIB but traffic drops</td>
                        <td className="py-2.5 pr-4">RIB-FIB hardware synchronization stall</td>
                        <td className="py-2.5 pr-4 font-mono">show ip route cef / ip route get</td>
                        <td className="py-2.5">Clear FIB adjacency cache; update router firmware</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: FIVE INTERACTIVE SIMULATORS */}
        {activeTab === "simulators" && (
          <div className="space-y-8">
            {/* SIMULATOR 1: BGP Policy Engine */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                    SIMULATOR 1
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mt-2">
                    BGP Policy &amp; Path Attribute Selection Engine
                  </h3>
                  <p className="text-stone-700 text-xs mt-1">
                    Tune LOCAL_PREF, AS_PATH prepends, MED, and RPKI status to evaluate the RFC 4271 BGP decision tree live.
                  </p>
                </div>
                <div className="p-3 rounded-2xl bg-stone-900 text-white font-mono text-xs">
                  Winner: <span className="font-bold text-emerald-400">{bgpEvaluation.winner}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* ISP 1 Controls */}
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-stone-900">ISP 1 (AS 65001)</h4>
                    <span className="text-[11px] font-mono bg-blue-100 text-blue-800 px-2 py-0.5 rounded">eBGP Peer 1</span>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-stone-700 flex justify-between">
                      <span>LOCAL_PREF:</span>
                      <span className="font-bold text-stone-900">{isp1LocalPref}</span>
                    </label>
                    <input
                      type="range"
                      min="50"
                      max="300"
                      step="10"
                      value={isp1LocalPref}
                      onChange={(e) => setIsp1LocalPref(Number(e.target.value))}
                      className="w-full mt-1 accent-[#ea580c]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-stone-700 flex justify-between">
                      <span>AS_PATH Prepend Hops:</span>
                      <span className="font-bold text-stone-900">+{isp1PrependHops} hops</span>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="4"
                      value={isp1PrependHops}
                      onChange={(e) => setIsp1PrependHops(Number(e.target.value))}
                      className="w-full mt-1 accent-[#ea580c]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <span className="text-[11px] font-mono text-stone-700">Origin:</span>
                      <select
                        value={isp1Origin}
                        onChange={(e) => setIsp1Origin(e.target.value)}
                        className="w-full mt-1 text-xs border border-stone-300 rounded-lg p-1.5 bg-white"
                      >
                        <option value="IGP">IGP (Preferred)</option>
                        <option value="Incomplete">Incomplete (?)</option>
                      </select>
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-stone-700">RPKI ROV:</span>
                      <select
                        value={isp1Rpki}
                        onChange={(e) => setIsp1Rpki(e.target.value)}
                        className="w-full mt-1 text-xs border border-stone-300 rounded-lg p-1.5 bg-white font-mono"
                      >
                        <option value="VALID">VALID</option>
                        <option value="INVALID">INVALID (Drop)</option>
                        <option value="NOT_FOUND">NOT_FOUND</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* ISP 2 Controls */}
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-stone-900">ISP 2 (AS 65002)</h4>
                    <span className="text-[11px] font-mono bg-purple-100 text-purple-800 px-2 py-0.5 rounded">eBGP Peer 2</span>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-stone-700 flex justify-between">
                      <span>LOCAL_PREF:</span>
                      <span className="font-bold text-stone-900">{isp2LocalPref}</span>
                    </label>
                    <input
                      type="range"
                      min="50"
                      max="300"
                      step="10"
                      value={isp2LocalPref}
                      onChange={(e) => setIsp2LocalPref(Number(e.target.value))}
                      className="w-full mt-1 accent-[#ea580c]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-stone-700 flex justify-between">
                      <span>AS_PATH Prepend Hops:</span>
                      <span className="font-bold text-stone-900">+{isp2PrependHops} hops</span>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="4"
                      value={isp2PrependHops}
                      onChange={(e) => setIsp2PrependHops(Number(e.target.value))}
                      className="w-full mt-1 accent-[#ea580c]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <span className="text-[11px] font-mono text-stone-700">Origin:</span>
                      <select
                        value={isp2Origin}
                        onChange={(e) => setIsp2Origin(e.target.value)}
                        className="w-full mt-1 text-xs border border-stone-300 rounded-lg p-1.5 bg-white"
                      >
                        <option value="IGP">IGP (Preferred)</option>
                        <option value="Incomplete">Incomplete (?)</option>
                      </select>
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-stone-700">RPKI ROV:</span>
                      <select
                        value={isp2Rpki}
                        onChange={(e) => setIsp2Rpki(e.target.value)}
                        className="w-full mt-1 text-xs border border-stone-300 rounded-lg p-1.5 bg-white font-mono"
                      >
                        <option value="VALID">VALID</option>
                        <option value="INVALID">INVALID (Drop)</option>
                        <option value="NOT_FOUND">NOT_FOUND</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Decision Evaluator */}
              <div className="bg-stone-900 rounded-2xl p-4 text-stone-200 font-mono text-xs">
                <span className="text-orange-400 font-bold">DECISION TREE RESULT:</span>
                <p className="mt-1 text-white">{bgpEvaluation.reason}</p>
              </div>
            </div>

            {/* SIMULATOR 2: OSPF Dijkstra SPF */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                    SIMULATOR 2
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mt-2">
                    OSPF Adjacency &amp; Dijkstra SPF Shortest-Path Calculator
                  </h3>
                  <p className="text-stone-700 text-xs mt-1">
                    Adjust link metrics and inject line card cuts to visualize SPF graph re-calculation across Area 0.
                  </p>
                </div>
                <div className="p-3 rounded-2xl bg-stone-900 text-white font-mono text-xs">
                  Active Shortest Path Cost: <span className="text-emerald-400 font-bold">{ospfDijkstra.cost === Infinity ? "Infinity" : ospfDijkstra.cost}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
                  <h4 className="font-bold text-xs text-stone-900">Branch via Router B</h4>
                  <div>
                    <label className="text-[11px] font-mono text-stone-700 flex justify-between">
                      <span>Cost A &rarr; B:</span>
                      <span className="font-bold">{costAB}</span>
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="50"
                      value={costAB}
                      onChange={(e) => setCostAB(Number(e.target.value))}
                      className="w-full mt-1 accent-[#ea580c]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-stone-700 flex justify-between">
                      <span>Cost B &rarr; D:</span>
                      <span className="font-bold">{costBD}</span>
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="50"
                      value={costBD}
                      onChange={(e) => setCostBD(Number(e.target.value))}
                      className="w-full mt-1 accent-[#ea580c]"
                    />
                  </div>
                  <button
                    onClick={() => setLinkABDown(!linkABDown)}
                    className={`w-full py-1.5 rounded-lg text-xs font-bold transition ${
                      linkABDown ? "bg-red-600 text-white" : "bg-stone-200 text-stone-800 hover:bg-stone-300"
                    }`}
                  >
                    {linkABDown ? "Link A-B Severed (Down)" : "Sever Link A-B"}
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
                  <h4 className="font-bold text-xs text-stone-900">Branch via Router C</h4>
                  <div>
                    <label className="text-[11px] font-mono text-stone-700 flex justify-between">
                      <span>Cost A &rarr; C:</span>
                      <span className="font-bold">{costAC}</span>
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="50"
                      value={costAC}
                      onChange={(e) => setCostAC(Number(e.target.value))}
                      className="w-full mt-1 accent-[#ea580c]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-stone-700 flex justify-between">
                      <span>Cost C &rarr; D:</span>
                      <span className="font-bold">{costCD}</span>
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="50"
                      value={costCD}
                      onChange={(e) => setCostCD(Number(e.target.value))}
                      className="w-full mt-1 accent-[#ea580c]"
                    />
                  </div>
                  <button
                    onClick={() => setLinkCDDown(!linkCDDown)}
                    className={`w-full py-1.5 rounded-lg text-xs font-bold transition ${
                      linkCDDown ? "bg-red-600 text-white" : "bg-stone-200 text-stone-800 hover:bg-stone-300"
                    }`}
                  >
                    {linkCDDown ? "Link C-D Severed (Down)" : "Sever Link C-D"}
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
                  <h4 className="font-bold text-xs text-stone-900">Egress to Router E</h4>
                  <div>
                    <label className="text-[11px] font-mono text-stone-700 flex justify-between">
                      <span>Cost D &rarr; E:</span>
                      <span className="font-bold">{costDE}</span>
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="50"
                      value={costDE}
                      onChange={(e) => setCostDE(Number(e.target.value))}
                      className="w-full mt-1 accent-[#ea580c]"
                    />
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-stone-200 font-mono text-[11px] text-stone-700">
                    <div>Path via B: {ospfDijkstra.path1Cost === Infinity ? "Cut" : ospfDijkstra.path1Cost}</div>
                    <div>Path via C: {ospfDijkstra.path2Cost === Infinity ? "Cut" : ospfDijkstra.path2Cost}</div>
                  </div>
                </div>
              </div>

              {/* Topology Path Result */}
              <div className="bg-stone-950 p-4 rounded-2xl text-stone-200 font-mono text-xs flex flex-wrap items-center justify-between gap-3">
                <span className="text-orange-400 font-bold">SPF COMPUTED ROUTE:</span>
                <span className="text-white bg-stone-800 px-3 py-1 rounded-lg border border-stone-700">
                  {ospfDijkstra.best}
                </span>
              </div>
            </div>

            {/* SIMULATOR 3: PMTUD & Black Hole Engine */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                    SIMULATOR 3
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mt-2">
                    Path MTU Discovery (PMTUD) &amp; Black Hole Diagnostic Engine
                  </h3>
                  <p className="text-stone-700 text-xs mt-1">
                    Simulate how packet sizes exceeding tunnel MTU interact with ICMP filtering and TCP MSS clamping.
                  </p>
                </div>
                <div className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold ${pmtuStatus.badge}`}>
                  {pmtuStatus.title}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                  <div>
                    <label className="text-xs font-mono text-stone-700 flex justify-between">
                      <span>Outbound IP Packet Size:</span>
                      <span className="font-bold text-stone-900">{packetSize} Bytes (DF=1)</span>
                    </label>
                    <input
                      type="range"
                      min="500"
                      max="1500"
                      step="20"
                      value={packetSize}
                      onChange={(e) => setPacketSize(Number(e.target.value))}
                      className="w-full mt-1 accent-[#ea580c]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-stone-700 flex justify-between">
                      <span>Tunnel Gateway MTU:</span>
                      <span className="font-bold text-stone-900">{tunnelMtu} Bytes</span>
                    </label>
                    <input
                      type="range"
                      min="1280"
                      max="1500"
                      step="20"
                      value={tunnelMtu}
                      onChange={(e) => setTunnelMtu(Number(e.target.value))}
                      className="w-full mt-1 accent-[#ea580c]"
                    />
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-stone-200">
                    <div>
                      <div className="text-xs font-bold text-stone-900">Block ICMP Type 3 Code 4</div>
                      <div className="text-[11px] text-stone-700">Simulates strict perimeter firewall drop</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={blockIcmp}
                      onChange={(e) => setBlockIcmp(e.target.checked)}
                      className="w-5 h-5 accent-[#ea580c] cursor-pointer"
                    />
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-stone-200">
                    <div>
                      <div className="text-xs font-bold text-stone-900">Enable TCP MSS Clamping</div>
                      <div className="text-[11px] text-stone-700">Rewrites TCP SYN MSS to (MTU - 40B)</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={enableMssClamp}
                      onChange={(e) => setEnableMssClamp(e.target.checked)}
                      className="w-5 h-5 accent-[#ea580c] cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-stone-900 rounded-2xl p-4 text-stone-200 font-mono text-xs">
                <span className="text-orange-400 font-bold">PMTUD DIAGNOSIS:</span>
                <p className="mt-1 text-white">{pmtuStatus.desc}</p>
              </div>
            </div>

            {/* SIMULATOR 4: Asymmetric Routing Sandbox */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                    SIMULATOR 4
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mt-2">
                    Asymmetric Routing &amp; Stateful Firewall State Synchronization
                  </h3>
                  <p className="text-stone-700 text-xs mt-1">
                    Send traffic out through Firewall A and receive return traffic through Firewall B. Watch out-of-state drops occur without conntrack sync.
                  </p>
                </div>
                <button
                  onClick={simulateTcpHandshake}
                  className="px-4 py-2 rounded-xl bg-[#ea580c] text-white text-xs font-bold hover:bg-orange-700 transition cursor-pointer flex items-center gap-2"
                >
                  <Play size={14} />
                  <span>Send TCP Handshake Probe</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center justify-between p-4 rounded-xl bg-stone-50 border border-stone-200">
                  <div>
                    <span className="text-xs font-bold text-stone-900">Firewall State Sync (pfsync / conntrackd)</span>
                    <p className="text-[11px] text-stone-700">Replicates connection state between FW-A and FW-B</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={fwSyncEnabled}
                    onChange={(e) => setFwSyncEnabled(e.target.checked)}
                    className="w-5 h-5 accent-[#ea580c] cursor-pointer"
                  />
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-stone-50 border border-stone-200">
                  <div>
                    <span className="text-xs font-bold text-stone-900">Asymmetric State Bypass Rule</span>
                    <p className="text-[11px] text-stone-700">Permits non-SYN TCP packets on FW-B (loosens security)</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={asymBypassRule}
                    onChange={(e) => setAsymBypassRule(e.target.checked)}
                    className="w-5 h-5 accent-[#ea580c] cursor-pointer"
                  />
                </div>
              </div>

              {/* State Visualization */}
              <div className="p-4 rounded-2xl bg-stone-950 font-mono text-xs text-stone-300 space-y-2">
                <div className="text-orange-400 font-bold">STATE TABLE REPLICATION LOG:</div>
                <div className="text-[11px]">
                  Flow: Client (10.0.1.5) &rarr; Server (203.0.113.80:443) via FW-A | Return Server &rarr; Client via FW-B
                </div>
                {tcpConnStep === "idle" && (
                  <div className="text-stone-700">Ready. Click &quot;Send TCP Handshake Probe&quot; to test connection.</div>
                )}
                {tcpConnStep === "syn_sent" && (
                  <div className="text-blue-400">&bull; [FW-A] TCP SYN (seq=100) recorded in Conntrack table (SYN_SENT).</div>
                )}
                {tcpConnStep === "ack_sent" && (
                  <div className="text-emerald-400">
                    &bull; [FW-B] TCP SYN-ACK received. State recognized via {fwSyncEnabled ? "conntrackd sync" : "asymmetric bypass rule"}. Connection ESTABLISHED!
                  </div>
                )}
                {tcpConnStep === "drop_error" && (
                  <div className="text-red-400">
                    &bull; [FW-B] DROP: Out-of-state TCP SYN-ACK received without initial SYN in local conntrack table! (Packet dropped by stateful inspection).
                  </div>
                )}
              </div>
            </div>

            {/* SIMULATOR 5: Bufferbloat & BDP Calculator */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                    SIMULATOR 5
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mt-2">
                    Bufferbloat, Queueing Delay &amp; Bandwidth-Delay Product (BDP) Calculator
                  </h3>
                  <p className="text-stone-700 text-xs mt-1">
                    Calculate required TCP window sizes and witness how oversized router buffers ruin latency under load.
                  </p>
                </div>
                <div className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold ${bufferMetrics.gradeColor}`}>
                  Bufferbloat Grade: {bufferMetrics.bloatGrade}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-mono text-stone-700 flex justify-between">
                      <span>Link Bandwidth:</span>
                      <span className="font-bold text-stone-900">{linkBandwidthMbps} Mbps</span>
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="1000"
                      step="10"
                      value={linkBandwidthMbps}
                      onChange={(e) => setLinkBandwidthMbps(Number(e.target.value))}
                      className="w-full mt-1 accent-[#ea580c]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-stone-700 flex justify-between">
                      <span>Base Propagation RTT:</span>
                      <span className="font-bold text-stone-900">{baseRttMs} ms</span>
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="200"
                      step="5"
                      value={baseRttMs}
                      onChange={(e) => setBaseRttMs(Number(e.target.value))}
                      className="w-full mt-1 accent-[#ea580c]"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-mono text-stone-700 flex justify-between">
                      <span>Router Buffer Depth:</span>
                      <span className="font-bold text-stone-900">{bufferDepthKb} KB</span>
                    </label>
                    <input
                      type="range"
                      min="20"
                      max="2000"
                      step="20"
                      value={bufferDepthKb}
                      onChange={(e) => setBufferDepthKb(Number(e.target.value))}
                      className="w-full mt-1 accent-[#ea580c]"
                    />
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <div>
                      <div className="text-xs font-bold text-stone-900">Active Queue Management (FQ-CoDel)</div>
                      <div className="text-[11px] text-stone-700">Limits standing queue to 5ms</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={aqmEnabled}
                      onChange={(e) => setAqmEnabled(e.target.checked)}
                      className="w-5 h-5 accent-[#ea580c] cursor-pointer"
                    />
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2 font-mono text-xs">
                  <div className="text-stone-700">Theoretical BDP:</div>
                  <div className="text-base font-bold text-stone-900">{bufferMetrics.bdpKb} KB ({bufferMetrics.bdpBytes.toLocaleString()} Bytes)</div>

                  <div className="pt-2 text-stone-700">Queueing Delay:</div>
                  <div className="text-base font-bold text-orange-600">+{bufferMetrics.queueDelayMs} ms</div>

                  <div className="pt-2 text-stone-700">Total Latency Under Load:</div>
                  <div className="text-lg font-bold text-stone-900">{bufferMetrics.totalRttMs} ms ({bufferMetrics.bloatMultiplier}&times; base)</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: HANDS-ON LAB 22.1 */}
        {activeTab === "lab" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
              <div>
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  PRACTICAL LAB 22.1
                </span>
                <h2 className="text-2xl font-bold text-stone-900 mt-2">
                  Multi-Hop Routing, PMTUD &amp; Asymmetric Troubleshooting Lab
                </h2>
                <p className="text-stone-700 text-xs mt-1">
                  Complete all 8 production milestones to isolate faults across BGP, OSPF, firewalls, and queueing subsystems.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-stone-700">
                  Progress: {Object.values(checkedItems).filter(Boolean).length} / 8 Completed
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  id: 1,
                  title: "Milestone 1: FIB and RIB Divergence Audit",
                  desc: "Inspect software routing table and hardware forwarding cache. Verify all OSPF/BGP routes in RIB match FIB ASICs without transient black holes.",
                  cmd: "ip route show\nip route get 198.51.100.1\nshow ip cef 198.51.100.1",
                },
                {
                  id: 2,
                  title: "Milestone 2: Establish eBGP Peering & Verify Attributes",
                  desc: "Configure dual-homed eBGP peering with ISP 1 (AS 65001) and ISP 2 (AS 65002). Verify Established state and inspect received prefix attributes.",
                  cmd: "show ip bgp summary\nshow ip bgp neighbors 198.51.100.1 received-routes",
                },
                {
                  id: 3,
                  title: "Milestone 3: Apply BGP Route-Map Policy for Egress Engineering",
                  desc: "Configure route-map setting LOCAL_PREF=200 for primary transit and enforce AS_PATH prepending (+3 hops) on secondary backup path.",
                  cmd: "route-map RM_ISP1_IN permit 10\n  set local-preference 200\nroute-map RM_ISP2_OUT permit 10\n  set as-path prepend 64512 64512 64512",
                },
                {
                  id: 4,
                  title: "Milestone 4: Configure OSPF Area 0 & Tune Reference Bandwidth",
                  desc: "Adjust default reference bandwidth to 100,000 Mbps so 10G and 100G fiber interfaces calculate distinct Dijkstra SPF link costs.",
                  cmd: "router ospf 1\n  auto-cost reference-bandwidth 100000\n  passive-interface default\n  no passive-interface GigabitEthernet0/0/0",
                },
                {
                  id: 5,
                  title: "Milestone 5: Simulate Tunnel MTU Constraint & Trigger PMTUD Black Hole",
                  desc: "Configure a GRE/WireGuard tunnel with MTU 1400. Attempt a 1500-byte ping with DF=1 and observe packet drop when ICMP Type 3 is filtered.",
                  cmd: "ping -M do -s 1472 203.0.113.50\n# Output: ping: local error: message too long, mtu=1400",
                },
                {
                  id: 6,
                  title: "Milestone 6: Deploy Edge TCP MSS Clamping",
                  desc: "Install iptables/nftables mangle rule to intercept TCP SYN packets traversing the tunnel interface and clamp MSS to 1360 bytes.",
                  cmd: "iptables -t mangle -A POSTROUTING -p tcp --tcp-flags SYN,RST SYN -o tun0 -j TCPMSS --clamp-mss-to-pmtu",
                },
                {
                  id: 7,
                  title: "Milestone 7: Remediate Asymmetric Routing on Dual Firewalls",
                  desc: "Configure conntrackd (connection tracking daemon) over a dedicated sync link to replicate TCP connection state between Firewall A and Firewall B.",
                  cmd: "systemctl start conntrackd\nconntrackd -s\n# Verify replicated active flows across cluster",
                },
                {
                  id: 8,
                  title: "Milestone 8: Benchmark Throughput & Bufferbloat Under Load",
                  desc: "Run iperf3 parallel TCP streams while monitoring real-time RTT via ping. Verify FQ-CoDel keeps latency under 15ms during line-rate saturation.",
                  cmd: "iperf3 -c 203.0.113.80 -P 8 -t 30\nping 203.0.113.80 -i 0.2",
                },
              ].map((item) => {
                const isDone = !!checkedItems[item.id];
                return (
                  <div
                    key={item.id}
                    className={`p-5 rounded-2xl border transition ${
                      isDone ? "bg-emerald-50/50 border-emerald-200" : "bg-stone-50 border-stone-200"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <button
                          onClick={() => toggleCheck(item.id)}
                          className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center transition cursor-pointer ${
                            isDone
                              ? "bg-emerald-600 text-white"
                              : "border-2 border-stone-300 bg-white hover:border-stone-400"
                          }`}
                        >
                          {isDone && <Check size={14} />}
                        </button>
                        <div>
                          <h4 className="text-sm font-bold text-stone-900">{item.title}</h4>
                          <p className="text-xs text-stone-700 mt-1 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 pl-8">
                      <div className="bg-stone-900 text-stone-200 p-3 rounded-xl font-mono text-[11px] whitespace-pre-wrap">
                        {item.cmd}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 4: EVALUATED QUIZ */}
        {activeTab === "quiz" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
              <div>
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  EVALUATED ASSESSMENT
                </span>
                <h2 className="text-2xl font-bold text-stone-900 mt-2">
                  Module 22 Knowledge Verification
                </h2>
                <p className="text-stone-700 text-xs mt-1">
                  10 scenario-based questions covering BGP, OSPF, Bufferbloat, PMTUD, QoS, and SRE incident root-cause analysis.
                </p>
              </div>

              {showQuizResults ? (
                <div className="flex items-center gap-3">
                  <span className="text-sm font-mono font-bold text-stone-900">
                    Score: {quizScore} / {quizQuestions.length} ({Math.round((quizScore / quizQuestions.length) * 100)}%)
                  </span>
                  <button
                    onClick={() => {
                      setShowQuizResults(false);
                      setQuizAnswers({});
                    }}
                    className="px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-[#ea580c] transition cursor-pointer"
                  >
                    Retake Quiz
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowQuizResults(true)}
                  disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                    Object.keys(quizAnswers).length === quizQuestions.length
                      ? "bg-[#ea580c] text-white hover:bg-orange-700"
                      : "bg-stone-200 text-stone-700 cursor-not-allowed"
                  }`}
                >
                  Submit Answers ({Object.keys(quizAnswers).length}/{quizQuestions.length})
                </button>
              )}
            </div>

            <div className="space-y-6">
              {quizQuestions.map((q, idx) => {
                const userChoice = quizAnswers[q.id];
                const isCorrect = userChoice === q.correctIndex;

                return (
                  <div
                    key={q.id}
                    className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-stone-200 text-stone-800 flex items-center justify-center text-xs font-bold shrink-0">
                        {idx + 1}
                      </span>
                      <h4 className="text-sm font-bold text-stone-900 pt-0.5">{q.question}</h4>
                    </div>

                    <div className="space-y-2 pl-9">
                      {q.options.map((opt, optIdx) => {
                        const isSelected = userChoice === optIdx;
                        let btnStyle = "border-stone-200 bg-white hover:bg-stone-100 text-stone-800";

                        if (showQuizResults) {
                          if (optIdx === q.correctIndex) {
                            btnStyle = "border-emerald-300 bg-emerald-50 text-emerald-900 font-semibold";
                          } else if (isSelected && !isCorrect) {
                            btnStyle = "border-red-300 bg-red-50 text-red-900 font-semibold";
                          }
                        } else if (isSelected) {
                          btnStyle = "border-orange-300 bg-orange-50 text-[#ea580c] font-semibold";
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() => handleSelectQuiz(q.id, optIdx)}
                            className={`w-full text-left p-3 rounded-xl border text-xs transition cursor-pointer flex items-center justify-between ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {showQuizResults && optIdx === q.correctIndex && (
                              <Check size={14} className="text-emerald-600 shrink-0 ml-2" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {showQuizResults && (
                      <div className="mt-3 pl-9 text-xs font-mono text-stone-700 bg-white p-3 rounded-xl border border-stone-200">
                        <span className="font-bold text-stone-900">Explanation: </span>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 5: SRE DELIVERABLE */}
        {activeTab === "audit" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
              <div>
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  SRE DELIVERABLE
                </span>
                <h2 className="text-2xl font-bold text-stone-900 mt-2">
                  Production Incident Post-Mortem &amp; Root-Cause Analysis (RCA)
                </h2>
                <p className="text-stone-700 text-xs mt-1">
                  Ready-to-use Markdown post-mortem template (RCA-NET-2026-BGP-022) for site reliability engineering and network operations governance.
                </p>
              </div>

              <button
                onClick={() => handleCopy(rcaReportTemplate, "rca-report")}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-[#ea580c] transition cursor-pointer shadow-sm"
              >
                {copiedKey === "rca-report" ? (
                  <>
                    <Check size={14} className="text-emerald-400" />
                    <span>Copied Markdown!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy Full RCA Template</span>
                  </>
                )}
              </button>
            </div>

            <div className="bg-stone-950 rounded-2xl p-5 border border-stone-800 font-mono text-[11px] text-stone-300 max-h-96 overflow-y-auto leading-relaxed whitespace-pre-wrap">
              {rcaReportTemplate}
            </div>
          </div>
        )}

        {/* Footer Navigation Bar */}
        <div className="mt-10 pt-6 border-t border-[#e7e3da] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => {
              navigate("/learning/networks/network-automation");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#e7e3da] bg-white text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#ea580c] transition cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 21 — Network Programming &amp; Automation</span>
          </button>

          <button
            onClick={() => {
              navigate("/learning/networks/security-architecture");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 text-xs font-bold text-white hover:bg-[#ea580c] transition cursor-pointer"
          >
            <span>Next: Module 23 — Modern Network Security Architecture</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
