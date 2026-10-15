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
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* COMPUTER NETWORKS & INTERNET ENGINEERING: MODULE 7                         */
/* ROUTING AND ROUTER ARCHITECTURE                                            */
/* -------------------------------------------------------------------------- */

export default function NetworkRouting() {
  const navigate = useNavigate();

  // Active top-level tabs
  const [activeTab, setActiveTab] = useState("theory"); // theory | lpm-sim | forwarder-sim | ospf-sim | bgp-sim | faults-sim | cli | quiz | lab-report
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // Theory sub-section tracking
  const [activeSection, setActiveSection] = useSyncedTopic("7.1");

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 1 STATE: LONGEST-PREFIX MATCHING (LPM) ENGINE                    */
  /* -------------------------------------------------------------------------- */
  const sampleRoutingTable = useMemo(
    () => [
      { prefix: "10.0.0.0/8", mask: "255.0.0.0", length: 8, nextHop: "10.0.1.1", iface: "eth0", desc: "Broad Enterprise Class A block" },
      { prefix: "10.20.0.0/16", mask: "255.255.0.0", length: 16, nextHop: "10.0.2.1", iface: "eth1", desc: "Regional Datacenter East" },
      { prefix: "10.20.30.0/24", mask: "255.255.255.0", length: 24, nextHop: "10.0.3.1", iface: "eth2", desc: "Production DMZ Subnet" },
      { prefix: "10.20.30.128/25", mask: "255.255.255.128", length: 25, nextHop: "10.0.4.1", iface: "eth3", desc: "Kubernetes Worker Nodes Pool" },
      { prefix: "10.20.30.200/32", mask: "255.255.255.255", length: 32, nextHop: "10.0.5.1", iface: "eth4", desc: "Host Route: Primary Database VIP" },
      { prefix: "0.0.0.0/0", mask: "0.0.0.0", length: 0, nextHop: "198.51.100.1", iface: "wan0", desc: "Default Gateway (Internet Outbound)" },
    ],
    []
  );

  const [testIpInput, setTestIpInput] = useState("10.20.30.200");

  // Helper to convert dotted decimal IPv4 to 32-bit unsigned integer
  const ipToInt = (ip) => {
    const parts = ip.trim().split(".").map(Number);
    if (parts.length !== 4 || parts.some((p) => isNaN(p) || p < 0 || p > 255)) return null;
    return ((parts[0] << 24) | (parts[1] << 16) | (parts[2] << 8) | parts[3]) >>> 0;
  };

  // Convert int to 32-bit binary string
  const intToBinStr = (intVal) => {
    return (intVal >>> 0).toString(2).padStart(32, "0");
  };

  const lpmEvaluation = useMemo(() => {
    const targetInt = ipToInt(testIpInput);
    if (targetInt === null) return { error: "Invalid IPv4 address format", matches: [], bestMatch: null };

    const matches = [];
    sampleRoutingTable.forEach((route) => {
      const [netIp, lenStr] = route.prefix.split("/");
      const len = parseInt(lenStr, 10);
      const netInt = ipToInt(netIp);
      const maskInt = len === 0 ? 0 : (~0 << (32 - len)) >>> 0;

      const isMatch = len === 0 || (targetInt & maskInt) >>> 0 === (netInt & maskInt) >>> 0;
      matches.push({
        ...route,
        isMatch,
        maskInt,
        binaryPrefix: intToBinStr(netInt).slice(0, len),
        binaryTarget: intToBinStr(targetInt).slice(0, len),
      });
    });

    // Best match is highest prefix length among matching routes
    const matchedOnly = matches.filter((m) => m.isMatch);
    matchedOnly.sort((a, b) => b.length - a.length);
    const bestMatch = matchedOnly[0] || null;

    return { error: null, matches, bestMatch, targetInt };
  }, [testIpInput, sampleRoutingTable]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 2 STATE: MULTI-ROUTER PACKET FORWARDER & TTL HOP-BY-HOP TRACER   */
  /* -------------------------------------------------------------------------- */
  const [initialTtl, setInitialTtl] = useState(64);
  const [currentHopIndex, setCurrentHopIndex] = useState(0); // 0: PC-A, 1: R1, 2: R2, 3: R3, 4: PC-C
  const [forwardLog, setForwardLog] = useState([]);
  const [isSimulatingForward, setIsSimulatingForward] = useState(false);

  const hopNodes = [
    { id: "PCA", name: "PC-A (Source)", ip: "192.168.10.10", mac: "00:AA:00:10:10:10", role: "host" },
    { id: "R1", name: "Router R1", ipIn: "192.168.10.1", ipOut: "10.0.12.1", macIn: "00:AA:00:10:00:01", macOut: "00:AA:00:12:00:01", role: "router" },
    { id: "R2", name: "Router R2", ipIn: "10.0.12.2", ipOut: "10.0.23.1", macIn: "00:AA:00:12:00:02", macOut: "00:AA:00:23:00:01", role: "router" },
    { id: "R3", name: "Router R3", ipIn: "10.0.23.2", ipOut: "192.168.30.1", macIn: "00:AA:00:23:00:02", macOut: "00:AA:00:30:00:01", role: "router" },
    { id: "PCC", name: "PC-C (Destination)", ip: "192.168.30.10", mac: "00:AA:00:30:30:30", role: "host" },
  ];

  const resetPacketTrace = (ttlVal = initialTtl) => {
    setCurrentHopIndex(0);
    setForwardLog([
      {
        step: 0,
        node: "PC-A",
        action: "Packet Initialized",
        ttl: ttlVal,
        srcIp: "192.168.10.10",
        dstIp: "192.168.30.10",
        srcMac: "00:AA:00:10:10:10",
        dstMac: "00:AA:00:10:00:01 (Default Gateway R1 G0/0)",
        status: "normal",
        note: "Host PC-A determines destination 192.168.30.10 is outside local /24 subnet. Forwards to default gateway 192.168.10.1 via ARP resolution.",
      },
    ]);
  };

  const advanceOneHop = () => {
    if (currentHopIndex >= 4) return;
    const nextIdx = currentHopIndex + 1;
    const prevLog = forwardLog[forwardLog.length - 1];
    let nextTtl = prevLog.ttl;

    // Routers decrement TTL
    if (currentHopIndex >= 1 && currentHopIndex <= 3) {
      nextTtl -= 1;
    }

    if (nextTtl <= 0) {
      setForwardLog((prev) => [
        ...prev,
        {
          step: nextIdx,
          node: hopNodes[nextIdx].name,
          action: "ICMP TIME EXCEEDED (Type 11, Code 0)",
          ttl: 0,
          srcIp: hopNodes[nextIdx].ipIn,
          dstIp: "192.168.10.10",
          srcMac: hopNodes[nextIdx].macIn,
          dstMac: hopNodes[currentHopIndex].macOut,
          status: "expired",
          note: `TTL reached 0 at ${hopNodes[nextIdx].name}! Packet discarded to prevent infinite forwarding loops. ICMP Time Exceeded returned to PC-A (Traceroute hop response).`,
        },
      ]);
      setCurrentHopIndex(nextIdx);
      return;
    }

    let srcMac = "";
    let dstMac = "";
    let note = "";

    if (nextIdx === 1) {
      // Reached R1
      srcMac = "00:AA:00:12:00:01 (R1 G0/1)";
      dstMac = "00:AA:00:12:00:02 (R2 G0/0)";
      note = `R1 receives packet, decrements TTL (${nextTtl}), performs LPM for 192.168.30.0/24 (next-hop 10.0.12.2). Layer 2 Ethernet frame re-encapsulated with new MAC addresses. IP addresses remain unaltered!`;
    } else if (nextIdx === 2) {
      // Reached R2
      srcMac = "00:AA:00:23:00:01 (R2 G0/1)";
      dstMac = "00:AA:00:23:00:02 (R3 G0/0)";
      note = `R2 receives packet, decrements TTL (${nextTtl}), performs LPM for 192.168.30.0/24 (next-hop 10.0.23.2). Layer 2 frame rewritten with G0/1 outgoing MAC.`;
    } else if (nextIdx === 3) {
      // Reached R3
      srcMac = "00:AA:00:30:00:01 (R3 G0/1)";
      dstMac = "00:AA:00:30:30:30 (PC-C NIC)";
      note = `R3 receives packet, decrements TTL (${nextTtl}). Destination 192.168.30.0/24 is directly connected on G0/1. ARP cache resolves PC-C MAC. Frame delivered to local wire!`;
    } else if (nextIdx === 4) {
      // Delivered to PC-C
      srcMac = "00:AA:00:30:00:01";
      dstMac = "00:AA:00:30:30:30";
      note = `SUCCESS: PC-C receives IP packet intact with final TTL = ${nextTtl}. TCP/UDP Layer 4 checksum verified, payload delivered to listening socket!`;
    }

    setForwardLog((prev) => [
      ...prev,
      {
        step: nextIdx,
        node: hopNodes[nextIdx].name,
        action: nextIdx === 4 ? "Packet Delivered Successfully" : "Frame Re-Encapsulated & Forwarded",
        ttl: nextTtl,
        srcIp: "192.168.10.10",
        dstIp: "192.168.30.10",
        srcMac,
        dstMac,
        status: nextIdx === 4 ? "success" : "normal",
        note,
      },
    ]);
    setCurrentHopIndex(nextIdx);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 3 STATE: OSPF LINK-STATE DATABASE & DIJKSTRA SPF GRAPH           */
  /* -------------------------------------------------------------------------- */
  const [ospfLinks, setOspfLinks] = useState({
    "R1-R2": { cost: 10, status: "up" },
    "R1-R3": { cost: 30, status: "up" },
    "R2-R4": { cost: 25, status: "up" },
    "R3-R4": { cost: 10, status: "up" },
    "R2-R3": { cost: 5, status: "up" },
  });

  const toggleLinkState = (linkKey) => {
    setOspfLinks((prev) => ({
      ...prev,
      [linkKey]: {
        ...prev[linkKey],
        status: prev[linkKey].status === "up" ? "down" : "up",
      },
    }));
  };

  const updateLinkCost = (linkKey, newCost) => {
    const c = parseInt(newCost, 10);
    if (isNaN(c) || c < 1) return;
    setOspfLinks((prev) => ({
      ...prev,
      [linkKey]: { ...prev[linkKey], cost: c },
    }));
  };

  // Dijkstra Shortest Path calculation from R1 to R4
  const dijkstraResult = useMemo(() => {
    // Adjacency list
    const nodes = ["R1", "R2", "R3", "R4"];
    const graph = { R1: {}, R2: {}, R3: {}, R4: {} };

    Object.entries(ospfLinks).forEach(([link, val]) => {
      if (val.status === "up") {
        const [u, v] = link.split("-");
        graph[u][v] = val.cost;
        graph[v][u] = val.cost;
      }
    });

    const dist = { R1: 0, R2: Infinity, R3: Infinity, R4: Infinity };
    const prev = { R1: null, R2: null, R3: null, R4: null };
    const unvisited = new Set(nodes);

    while (unvisited.size > 0) {
      let curr = null;
      unvisited.forEach((node) => {
        if (curr === null || dist[node] < dist[curr]) {
          curr = node;
        }
      });

      if (dist[curr] === Infinity) break;
      unvisited.delete(curr);

      Object.entries(graph[curr]).forEach(([neighbor, cost]) => {
        if (unvisited.has(neighbor)) {
          const alt = dist[curr] + cost;
          if (alt < dist[neighbor]) {
            dist[neighbor] = alt;
            prev[neighbor] = curr;
          }
        }
      });
    }

    // Reconstruct path from R1 to R4
    let path = [];
    let curr = "R4";
    if (dist["R4"] !== Infinity) {
      while (curr) {
        path.unshift(curr);
        curr = prev[curr];
      }
    }

    return { dist, prev, path, totalCost: dist["R4"] };
  }, [ospfLinks]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 4 STATE: BGP PATH-VECTOR POLICY & ATTRIBUTE SIMULATOR            */
  /* -------------------------------------------------------------------------- */
  const [bgpPolicy, setBgpPolicy] = useState({
    ispAPref: 100,
    ispBPref: 200,
    ispAAsPrepend: 0,
    ispBAsPrepend: 0,
    ispAMed: 0,
    ispBMed: 0,
  });

  const bgpRouteSelection = useMemo(() => {
    // Route from ISP A (AS 100)
    const asPathA = ["AS64500", ...Array(bgpPolicy.ispAAsPrepend).fill("AS100"), "AS100", "AS15169"];
    // Route from ISP B (AS 200)
    const asPathB = ["AS64500", ...Array(bgpPolicy.ispBAsPrepend).fill("AS200"), "AS200", "AS15169"];

    let winner = "A";
    let reason = "";

    // 1. Highest LOCAL_PREF
    if (bgpPolicy.ispAPref > bgpPolicy.ispBPref) {
      winner = "A";
      reason = `Preferred due to higher LOCAL_PREF (${bgpPolicy.ispAPref} vs ${bgpPolicy.ispBPref}). Step 2 of BGP decision process.`;
    } else if (bgpPolicy.ispBPref > bgpPolicy.ispAPref) {
      winner = "B";
      reason = `Preferred due to higher LOCAL_PREF (${bgpPolicy.ispBPref} vs ${bgpPolicy.ispAPref}). Step 2 of BGP decision process.`;
    } else {
      // 2. Shortest AS_PATH
      if (asPathA.length < asPathB.length) {
        winner = "A";
        reason = `Tied on LOCAL_PREF (${bgpPolicy.ispAPref}). Preferred due to shorter AS_PATH length (${asPathA.length} hops vs ${asPathB.length} hops). Step 4 of BGP process.`;
      } else if (asPathB.length < asPathA.length) {
        winner = "B";
        reason = `Tied on LOCAL_PREF (${bgpPolicy.ispBPref}). Preferred due to shorter AS_PATH length (${asPathB.length} hops vs ${asPathA.length} hops). Step 4 of BGP process.`;
      } else {
        // 3. Lowest MED
        if (bgpPolicy.ispAMed < bgpPolicy.ispBMed) {
          winner = "A";
          reason = `Tied on LOCAL_PREF & AS_PATH length. Preferred due to lower MED metric (${bgpPolicy.ispAMed} vs ${bgpPolicy.ispBMed}). Step 6 of BGP process.`;
        } else if (bgpPolicy.ispBMed < bgpPolicy.ispAMed) {
          winner = "B";
          reason = `Tied on LOCAL_PREF & AS_PATH length. Preferred due to lower MED metric (${bgpPolicy.ispBMed} vs ${bgpPolicy.ispAMed}). Step 6 of BGP process.`;
        } else {
          winner = "A";
          reason = "Tied on LOCAL_PREF, AS_PATH, and MED. Preferred by deterministic tie-break (Lowest Peer Router ID / eBGP neighbor).";
        }
      }
    }

    return { winner, reason, asPathA, asPathB };
  }, [bgpPolicy]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 5 STATE: ROUTING FAULT & BREAK-THE-NETWORK SANDBOX               */
  /* -------------------------------------------------------------------------- */
  const [activeFault, setActiveFault] = useState("none"); // none | missing-return-r3 | bad-nexthop-r2 | link-down-r2-r3 | asymmetric-fw
  const [faultPingResult, setFaultPingResult] = useState(null);

  const runFaultDiagnostic = () => {
    if (activeFault === "none") {
      setFaultPingResult({
        status: "success",
        rtt: "4.2 ms",
        hops: [
          { hop: 1, host: "192.168.10.1 (R1)", rtt: "0.8 ms", status: "ok" },
          { hop: 2, host: "10.0.12.2 (R2)", rtt: "1.9 ms", status: "ok" },
          { hop: 3, host: "10.0.23.2 (R3)", rtt: "3.1 ms", status: "ok" },
          { hop: 4, host: "192.168.30.10 (PC-C)", rtt: "4.2 ms", status: "ok" },
        ],
        diagnosis: "Healthy symmetric end-to-end path. Request reaches PC-C and reply returns symmetrically through R3 -> R2 -> R1.",
      });
    } else if (activeFault === "missing-return-r3") {
      setFaultPingResult({
        status: "failed",
        rtt: "Request timed out.",
        hops: [
          { hop: 1, host: "192.168.10.1 (R1)", rtt: "0.9 ms", status: "ok" },
          { hop: 2, host: "10.0.12.2 (R2)", rtt: "2.1 ms", status: "ok" },
          { hop: 3, host: "10.0.23.2 (R3)", rtt: "3.2 ms", status: "ok" },
          { hop: 4, host: "* * * Request timed out.", rtt: "—", status: "timeout" },
        ],
        diagnosis:
          "ASYMMETRIC RETURN BLACK HOLE: The ICMP Echo Request reaches PC-C successfully! However, Router R3 has no route back to 192.168.10.0/24. R3 drops the Echo Reply packet. Fix: Add 'ip route 192.168.10.0 255.255.255.0 10.0.23.1' on R3.",
      });
    } else if (activeFault === "bad-nexthop-r2") {
      setFaultPingResult({
        status: "failed",
        rtt: "Destination Host Unreachable",
        hops: [
          { hop: 1, host: "192.168.10.1 (R1)", rtt: "0.8 ms", status: "ok" },
          { hop: 2, host: "10.0.12.2 (R2): ICMP Host Unreachable", rtt: "1.8 ms", status: "error" },
          { hop: 3, host: "* * *", rtt: "—", status: "timeout" },
        ],
        diagnosis:
          "UNRESOLVABLE NEXT HOP: R2 static route points to non-existent IP 10.0.99.1. ARP resolution fails on R2, causing immediate ICMP Destination Host Unreachable. Fix: Correct next-hop to 10.0.23.2 on R2.",
      });
    } else if (activeFault === "link-down-r2-r3") {
      setFaultPingResult({
        status: "failed",
        rtt: "Network Unreachable",
        hops: [
          { hop: 1, host: "192.168.10.1 (R1)", rtt: "0.9 ms", status: "ok" },
          { hop: 2, host: "10.0.12.2 (R2): Line protocol down on G0/1", rtt: "1.9 ms", status: "error" },
        ],
        diagnosis:
          "PHYSICAL / LINK-STATE FAILURE: Link between R2 (G0/1) and R3 (G0/0) is administratively down or disconnected. Connected route 10.0.23.0/30 is removed from FIB. Static route pointing through this interface is invalidated.",
      });
    } else if (activeFault === "asymmetric-fw") {
      setFaultPingResult({
        status: "failed",
        rtt: "TCP Connection Reset / SYN-ACK Dropped",
        hops: [
          { hop: 1, host: "192.168.10.1 (R1)", rtt: "0.8 ms", status: "ok" },
          { hop: 2, host: "Stateful Firewall FW-West (Outbound)", rtt: "1.5 ms", status: "ok" },
          { hop: 3, host: "192.168.30.10 (PC-C)", rtt: "3.5 ms", status: "ok" },
          { hop: 4, host: "Stateful Firewall FW-East (Inbound): TCP SYN-ACK dropped without state!", rtt: "—", status: "error" },
        ],
        diagnosis:
          "ASYMMETRIC ROUTING STATEFUL FAILURE: Outbound TCP SYN passed through FW-West, establishing state. Return SYN-ACK was routed via R4 through FW-East. Because FW-East had no matching state table entry, it dropped the packet as invalid traffic!",
      });
    }
  };

  /* -------------------------------------------------------------------------- */
  /* QUIZ & ASSESSMENT STATE                                                    */
  /* -------------------------------------------------------------------------- */
  const quizQuestions = [
    {
      id: 1,
      question: "Which route normally wins when multiple installed prefixes match a destination in the Forwarding Information Base (FIB)?",
      options: [
        "The route with the shortest prefix length (least specific)",
        "The route with the longest matching prefix (most specific)",
        "The default route always takes precedence",
        "The route with the highest hop count",
      ],
      correct: 1,
      explanation:
        "Longest-Prefix Matching (LPM) is the fundamental IP forwarding rule. When multiple prefixes match an IP address, the router selects the entry with the greatest number of matching leading bits (longest prefix).",
    },
    {
      id: 2,
      question: "Which route type is automatically installed in the routing table when an IP address is configured on an operational interface?",
      options: ["BGP Path-Vector Route", "Directly Connected Route", "Floating Static Route", "Autonomous External Route"],
      correct: 1,
      explanation:
        "A Connected route is created when an IP network is assigned to an interface and that interface is up/up in link status. It requires no static configuration or routing protocol.",
    },
    {
      id: 3,
      question: "What happens to the IPv4 TTL (or IPv6 Hop Limit) field when a router forwards an IP packet?",
      options: [
        "It is incremented by 1 to record the hop count",
        "It remains strictly unchanged between source and destination",
        "It is decremented by at least 1; if it reaches 0, the packet is discarded with an ICMP Time Exceeded message",
        "It is reset to 255 at every routing hop",
      ],
      correct: 2,
      explanation:
        "Every forwarding router decrements TTL (IPv4) or Hop Limit (IPv6) by at least 1. If it reaches 0, the packet is dropped to prevent packets from endlessly looping in cyclic topologies, and an ICMP Time Exceeded (Type 11) is returned.",
    },
    {
      id: 4,
      question: "Which routing protocol operates as a link-state interior gateway protocol using Dijkstra's SPF algorithm?",
      options: [
        "BGP (Border Gateway Protocol)",
        "RIP (Routing Information Protocol)",
        "OSPF (Open Shortest Path First)",
        "ARP (Address Resolution Protocol)",
      ],
      correct: 2,
      explanation:
        "OSPF (and IS-IS) are link-state IGPs. They flood Link-State Advertisements (LSAs) across an area so every router holds an identical Link-State Database (LSDB), then run Dijkstra's SPF algorithm independently.",
    },
    {
      id: 5,
      question: "Why can an ICMP Ping from PC-A to PC-C fail even if the Echo Request successfully reaches PC-C's network card?",
      options: [
        "The return route from Router R3 back to PC-A's network is missing or misconfigured",
        "IPv4 addresses are stripped and cannot cross router boundaries",
        "All intermediate routers are required to run BGP",
        "TTL is doubled on return packets, causing immediate buffer overflow",
      ],
      correct: 0,
      explanation:
        "IP routing is hop-by-hop and directional. A packet can successfully arrive at a remote host, but if the destination router has no route back to the source network, the Echo Reply is dropped into a black hole.",
    },
    {
      id: 6,
      question: "What is the difference between the Routing Information Base (RIB) and the Forwarding Information Base (FIB)?",
      options: [
        "The RIB handles Layer 2 MAC addresses, while the FIB handles Layer 3 IP addresses",
        "The RIB stores all candidate routes learned from protocols/static configs in the control plane; the FIB is an optimized hardware-lookup table in the data plane used for line-rate forwarding",
        "The RIB is used exclusively for IPv6, and the FIB is used for IPv4",
        "There is no difference; they are identical synonyms in all router operating systems",
      ],
      correct: 1,
      explanation:
        "The RIB resides in the router's control plane (CPU memory) containing all candidate routes. The FIB is compiled from the best RIB routes and downloaded into fast memory (ASICs / TCAM) in the data plane for line-rate lookups.",
    },
    {
      id: 7,
      question: "In an OSPF network with interface costs R1-R2 (10), R2-R4 (25), R1-R3 (30), and R3-R4 (10), which path will OSPF install for traffic from R1 to R4?",
      options: [
        "Path via R2: R1 -> R2 -> R4 (Total Cost = 35)",
        "Path via R3: R1 -> R3 -> R4 (Total Cost = 40)",
        "Both paths simultaneously via ECMP because hop count is equal (2 hops each)",
        "The packet is dropped because cost must be identical to form an adjacency",
      ],
      correct: 0,
      explanation:
        "Path via R2 has a total metric of 10 + 25 = 35. Path via R3 has 30 + 10 = 40. OSPF selects the lowest accumulated metric (35 < 40), regardless of hop counts.",
    },
    {
      id: 8,
      question: "What transport protocol and port number does BGP use to establish peering sessions between autonomous systems?",
      options: ["UDP port 520", "TCP port 179", "IP Protocol 89 (raw OSPF)", "ICMP port 0"],
      correct: 1,
      explanation:
        "BGP establishes reliable peering sessions over TCP port 179. This enables BGP to operate across non-directly connected peers and rely on TCP for retransmission and congestion control.",
    },
    {
      id: 9,
      question: "Which BGP path attribute is used within an Autonomous System to express which outbound exit point is preferred, where higher values win?",
      options: ["AS_PATH", "MED (Multi-Exit Discriminator)", "LOCAL_PREF", "COMMUNITY"],
      correct: 2,
      explanation:
        "LOCAL_PREF is a well-known discretionary attribute propagated only within an iBGP AS. The route with the highest LOCAL_PREF is chosen as the outbound path for all routers in that AS.",
    },
    {
      id: 10,
      question: "How does the classic traceroute diagnostic tool discover intermediate router hops along an IP path?",
      options: [
        "It sends SNMP queries to every public router in the global routing table",
        "It sends probes with progressively incrementing TTL values (1, 2, 3...), inducing ICMP Time Exceeded replies from each successive router",
        "It inspects the BGP AS_PATH header embedded inside ordinary HTTP requests",
        "It broadcasts ARP requests across the entire Internet backbone",
      ],
      correct: 1,
      explanation:
        "Traceroute initiates packets with TTL=1. Router 1 drops it and returns ICMP Time Exceeded. Then it sends TTL=2, causing Router 2 to respond. By progressively incrementing TTL, it maps every layer-3 hop on the path.",
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
    topoBuilt: false,
    ipsConfigured: false,
    connectedRoutesVerified: false,
    staticRoutesAdded: false,
    pingVerified: false,
    tracerouteVerified: false,
    faultInjected: false,
    ospfMigrated: false,
  });

  const toggleChecklistItem = (key) => {
    setLabChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  /* -------------------------------------------------------------------------- */
  /* LAB REPORT TEMPLATE                                                        */
  /* -------------------------------------------------------------------------- */
  const labReportTemplate = `# PrepSpaces Network Engineering Lab Report: Module 7
## Routing Architecture, Packet Forwarding & Fault Recovery

**Candidate Name:** Engineering Student
**Date:** ${new Date().toISOString().split("T")[0]}
**Lab Topology:** 3-Router Backbone (LAN A <-> R1 <-> R2 <-> R3 <-> LAN C)
**Subnets:**
- LAN A: 192.168.10.0/24 (Gateway: 192.168.10.1, Host PC-A: 192.168.10.10)
- Link R1-R2: 10.0.12.0/30 (R1: 10.0.12.1, R2: 10.0.12.2)
- Link R2-R3: 10.0.23.0/30 (R2: 10.0.23.1, R3: 10.0.23.2)
- LAN C: 192.168.30.0/24 (Gateway: 192.168.30.1, Host PC-C: 192.168.30.10)

---

### 1. Routing Table Snapshots (Post-Static Route Configuration)

#### Router R1 FIB:
- C 192.168.10.0/24 is directly connected, GigabitEthernet0/0
- C 10.0.12.0/30 is directly connected, GigabitEthernet0/1
- S 192.168.30.0/24 [1/0] via 10.0.12.2

#### Router R2 FIB:
- C 10.0.12.0/30 is directly connected, GigabitEthernet0/0
- C 10.0.23.0/30 is directly connected, GigabitEthernet0/1
- S 192.168.10.0/24 [1/0] via 10.0.12.1
- S 192.168.30.0/24 [1/0] via 10.0.23.2

#### Router R3 FIB:
- C 10.0.23.0/30 is directly connected, GigabitEthernet0/0
- C 192.168.30.0/24 is directly connected, GigabitEthernet0/1
- S 192.168.10.0/24 [1/0] via 10.0.23.1

---

### 2. Verification Evidence
- **PC-A to PC-C Ping:** 5/5 packets received, RTT min/avg/max = 2.1/3.4/4.8 ms.
- **Traceroute trace from PC-A (192.168.10.10) to PC-C (192.168.30.10):**
  1. 192.168.10.1 (R1 G0/0) - 0.8 ms
  2. 10.0.12.2 (R2 G0/0) - 1.9 ms
  3. 10.0.23.2 (R3 G0/0) - 3.1 ms
  4. 192.168.30.10 (PC-C) - 3.8 ms

---

### 3. Fault Injection & Root Cause Analysis

#### Fault 1: Missing Return Route on R3
- **Action:** Executed 'no ip route 192.168.10.0 255.255.255.0 10.0.23.1' on R3.
- **Observed Behavior:** Ping from PC-A to PC-C timed out (100% loss). Packet capture on PC-C showed ICMP Echo Requests ARRIVING, but PC-C's Echo Replies were discarded by R3 with unresolvable route.
- **Resolution:** Restored static route or configured OSPF dynamic routing.

#### Fault 2: Interface Failure between R2 and R3
- **Action:** Interface G0/1 on R2 placed into 'shutdown'.
- **Observed Behavior:** Traceroute from PC-A stopped at hop 2 (10.0.12.2) with 'Destination Net Unreachable'. Connected route was purged from FIB.
- **Resolution:** Re-enabled interface ('no shutdown') and verified link carrier detection.

---

### 4. Dynamic Routing Migration: OSPF Area 0
- Enabled 'router ospf 1' on R1, R2, R3 with wildcard masks.
- Verified neighbor relationships: R1 <-> R2 (FULL), R2 <-> R3 (FULL).
- Link-State Database (LSDB) converged in < 2 seconds following topology adjustments.
`;

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col font-sans selection:bg-orange-200">
      {/* Module Navigation Bar */}
      <ModuleNav
        track="networks"
        currentModuleId="routing"
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
            <span className="text-[#ea580c] font-semibold">Module 7: Routing & Router Architecture</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/80 border border-orange-200/60 text-[#ea580c] text-xs font-bold uppercase tracking-wider mb-2">
                <Compass size={14} />
                <span>Layer 3 Core Engineering</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#18181b] tracking-tight">
                Routing & Router Architecture
              </h1>
              <p className="mt-2 text-base text-stone-600 max-w-3xl leading-relaxed">
                Master the fundamental algorithms that power the Internet. From Longest-Prefix Matching in hardware FIBs
                and hop-by-hop TTL frame re-encapsulation, to Link-State Dijkstra calculations in OSPF and interdomain policy-driven path selection in BGP.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-xl bg-white border border-[#e7e3da] text-xs font-mono text-stone-600">
                MIT 6.033 &bull; Stanford CS144
              </span>
            </div>
          </div>
        </div>

        {/* Top-Level Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 border-b border-[#e7e3da] scrollbar-none">
          {[
            { id: "theory", label: "Core Theory (7.1-7.10)", icon: BookOpen },
            { id: "lpm-sim", label: "LPM & FIB Simulator", icon: Search },
            { id: "forwarder-sim", label: "Packet Forwarder & TTL", icon: Network },
            { id: "ospf-sim", label: "OSPF & Dijkstra SPF", icon: GitFork },
            { id: "bgp-sim", label: "BGP Policy & AS_PATH", icon: Globe },
            { id: "faults-sim", label: "Fault Sandbox & Break-Net", icon: AlertTriangle },
            { id: "cli", label: "Router CLI & Diagnostics", icon: Terminal },
            { id: "quiz", label: "Knowledge Check", icon: Award },
            { id: "lab-report", label: "Lab Report & Capstone", icon: FileText },
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
        {/* TAB 1: THEORY CURRICULUM (7.1 - 7.10)                                 */}
        {/* -------------------------------------------------------------------- */}
        {activeTab === "theory" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Sticky Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 p-4 bg-white rounded-2xl border border-[#e7e3da] shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3 px-2">
                  Module 7 Sections
                </h3>
                <nav className="space-y-1">
                  {[
                    { id: "7.1", title: "7.1 What is Routing & L2 vs L3" },
                    { id: "7.2", title: "7.2 Routing Tables: RIB vs FIB" },
                    { id: "7.3", title: "7.3 Longest-Prefix Matching (LPM)" },
                    { id: "7.4", title: "7.4 Connected, Static & Dynamic" },
                    { id: "7.5", title: "7.5 Default Routes & Gateways" },
                    { id: "7.6", title: "7.6 Packet Forwarding & TTL/Hop Limit" },
                    { id: "7.7", title: "7.7 Distance-Vector vs Link-State" },
                    { id: "7.8", title: "7.8 OSPF & Dijkstra SPF Algorithm" },
                    { id: "7.9", title: "7.9 BGP: Global Internet Routing" },
                    { id: "7.10", title: "7.10 Failures, Loops & Asymmetric Paths" },
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
                    Routers do not send packets to the whole Internet; they match prefixes, decrement TTL, rewrite Layer 2 headers, and pass packets to the next hop.
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Pane */}
            <div className="lg:col-span-3 space-y-8">
              {/* SECTION 7.1 */}
              {activeSection === "7.1" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                    <span>SECTION 7.1</span>
                    <span>&bull;</span>
                    <span>FORWARDING FOUNDATIONS</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">What is Routing? Layer 2 Switching vs. Layer 3 Routing</h2>

                  <p className="text-stone-700 leading-relaxed">
                    Consider an enterprise with three distinct departments: Engineering (<code className="px-1.5 py-0.5 rounded bg-stone-100 font-mono text-xs">192.168.10.0/24</code>), Finance (<code className="px-1.5 py-0.5 rounded bg-stone-100 font-mono text-xs">192.168.20.0/24</code>), and Application Servers (<code className="px-1.5 py-0.5 rounded bg-stone-100 font-mono text-xs">192.168.30.0/24</code>). When an engineer on host <code className="px-1.5 py-0.5 rounded bg-stone-100 font-mono text-xs">192.168.10.10</code> initiates an SSH connection to a production database at <code className="px-1.5 py-0.5 rounded bg-stone-100 font-mono text-xs">192.168.30.50</code>, the source host evaluates its local subnet mask, discovers the destination is on an external network, and forwards the packet to its <strong>default gateway</strong>. The router then inspects the destination IP address and decides where to forward it next.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden">
                      <thead className="bg-stone-100 text-stone-700 font-bold border-b border-stone-200">
                        <tr>
                          <th className="p-3">Architectural Feature</th>
                          <th className="p-3">Layer 2 Switching</th>
                          <th className="p-3">Layer 3 Routing</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200">
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-semibold text-stone-900">Primary Function</td>
                          <td className="p-3 text-stone-700">Forwards Ethernet frames within a single broadcast domain (VLAN).</td>
                          <td className="p-3 text-stone-700">Forwards IP packets across distinct IP networks and autonomous systems.</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-semibold text-stone-900">Forwarding Data Structure</td>
                          <td className="p-3 text-stone-700">MAC Address Table (CAM Table) populated via source MAC learning.</td>
                          <td className="p-3 text-stone-700">Routing Information Base (RIB) and Forwarding Information Base (FIB).</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-semibold text-stone-900">Addressing Examined</td>
                          <td className="p-3 text-stone-700">48-bit IEEE MAC Addresses (Source and Destination).</td>
                          <td className="p-3 text-stone-700">32-bit IPv4 / 128-bit IPv6 Destination Addresses.</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-semibold text-stone-900">Broadcast Behavior</td>
                          <td className="p-3 text-stone-700">Flooded out all active ports in the VLAN except the ingress port.</td>
                          <td className="p-3 text-stone-700">Routers <strong>strictly terminate</strong> IPv4 broadcasts (does not forward 255.255.255.255).</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-semibold text-stone-900">Core Protocols</td>
                          <td className="p-3 text-stone-700">Ethernet, 802.1Q VLANs, Spanning Tree (STP, RSTP).</td>
                          <td className="p-3 text-stone-700">IPv4, IPv6, ICMP, Static Routing, OSPF, IS-IS, BGP.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="p-4 bg-orange-50/60 rounded-2xl border border-orange-200 text-xs text-stone-700 space-y-2">
                    <h4 className="font-bold text-stone-900 flex items-center gap-1.5">
                      <Zap size={16} className="text-[#ea580c]" />
                      The 5-Step Routing Forwarding Engine
                    </h4>
                    <ol className="list-decimal list-inside space-y-1 pl-1">
                      <li><strong>Receive Packet:</strong> Read the Layer 3 destination IP address from the packet header.</li>
                      <li><strong>Look up Destination:</strong> Search the Forwarding Information Base (FIB) for matching prefixes.</li>
                      <li><strong>Apply Longest-Prefix Match (LPM):</strong> Select the matching route with the highest prefix length.</li>
                      <li><strong>Resolve Next Hop &amp; L2 Adjacency:</strong> Determine egress interface and resolve next-hop MAC via ARP or NDP.</li>
                      <li><strong>Decrement TTL &amp; Re-encapsulate:</strong> Decrement TTL by 1, recompute IP checksum (IPv4), build a brand-new Layer 2 frame, and transmit.</li>
                    </ol>
                  </div>
                </div>
              )}

              {/* SECTION 7.2 */}
              {activeSection === "7.2" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                    <span>SECTION 7.2</span>
                    <span>&bull;</span>
                    <span>DATA STRUCTURES</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">Routing Tables: RIB vs. FIB vs. Adjacency Table</h2>

                  <p className="text-stone-700 leading-relaxed">
                    A router does not make forwarding decisions directly from routing protocol databases. High-performance routers split routing into two distinct architectural planes: the <strong>Control Plane</strong> (which reasons about topology and protocol updates) and the <strong>Data Plane</strong> (which forwards packets at line rate using hardware ASICs).
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
                      <div className="text-xs font-bold text-[#ea580c] uppercase tracking-wider mb-1">Control Plane</div>
                      <h4 className="text-sm font-bold text-stone-900 mb-2">Routing Information Base (RIB)</h4>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Contains every candidate route learned via OSPF, BGP, static configurations, and connected interfaces. Manages administrative distance and metric tie-breakers. Stored in general-purpose CPU RAM.
                      </p>
                    </div>

                    <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
                      <div className="text-xs font-bold text-[#ea580c] uppercase tracking-wider mb-1">Data / Forwarding Plane</div>
                      <h4 className="text-sm font-bold text-stone-900 mb-2">Forwarding Information Base (FIB)</h4>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        An optimized, flattened lookup table containing ONLY the winning routes from the RIB. Pre-resolves recursive next hops directly to egress physical interfaces and hardware ports.
                      </p>
                    </div>

                    <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
                      <div className="text-xs font-bold text-[#ea580c] uppercase tracking-wider mb-1">Layer 2 Glue</div>
                      <h4 className="text-sm font-bold text-stone-900 mb-2">Adjacency Table (ARP / NDP)</h4>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Pre-compiled Layer 2 rewrite headers. Maps each next-hop IP directly to its destination MAC address, eliminating the need to trigger ARP during packet forwarding. Stored in fast ASIC memory.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-stone-900 text-stone-100 rounded-2xl font-mono text-xs">
                    <div className="text-stone-400 mb-2 flex items-center justify-between border-b border-stone-800 pb-2">
                      <span>Cisco IOS XE: show ip route (Annotated RIB Output)</span>
                      <span className="text-[10px] text-orange-400">Codes: C - connected, S - static, O - OSPF, B - BGP</span>
                    </div>
                    <pre className="overflow-x-auto text-[11px] leading-relaxed text-stone-200">
{`Gateway of last resort is 10.0.12.2 to network 0.0.0.0

C    192.168.10.0/24 is directly connected, GigabitEthernet0/0
C    10.0.12.0/30 is directly connected, GigabitEthernet0/1
S    192.168.20.0/24 [1/0] via 10.0.12.2, GigabitEthernet0/1
O    192.168.30.0/24 [110/20] via 10.0.12.2, 00:14:22, GigabitEthernet0/1
S*   0.0.0.0/0 [1/0] via 10.0.12.2`}
                    </pre>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    Notice the bracketed notation <code className="px-1 py-0.5 rounded bg-stone-100 font-mono">[110/20]</code>. The first number is the <strong>Administrative Distance</strong> (110 for OSPF, 1 for static, 0 for connected), representing route trustworthiness. The second number is the <strong>Metric</strong> (cost 20), used to compare multiple routes originating from the same protocol.
                  </p>
                </div>
              )}

              {/* SECTION 7.3 */}
              {activeSection === "7.3" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                    <span>SECTION 7.3</span>
                    <span>&bull;</span>
                    <span>CORE ALGORITHM</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">Longest-Prefix Matching (LPM)</h2>

                  <p className="text-stone-700 leading-relaxed">
                    Longest-Prefix Matching is the single most vital rule in IP forwarding. When a router receives a packet, it compares the packet's destination IP address against all entries in its FIB. If multiple routing entries match the destination address, the router <strong>strictly selects the matching route with the longest prefix length</strong> (the most specific network mask).
                  </p>

                  <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-3">
                    <h4 className="text-sm font-bold text-stone-900">Example: Forwarding to Destination 10.20.30.200</h4>
                    <p className="text-xs text-stone-600">
                      Suppose a router's forwarding table contains the following four matching entries:
                    </p>

                    <div className="space-y-2 text-xs font-mono">
                      <div className="p-2.5 rounded-xl bg-white border border-stone-200 flex items-center justify-between">
                        <span>1. 10.0.0.0/8 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(255.0.0.0) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&rarr; Length 8</span>
                        <span className="text-stone-500">Matches first 8 bits</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-stone-200 flex items-center justify-between">
                        <span>2. 10.20.0.0/16 &nbsp;&nbsp;&nbsp;&nbsp;(255.255.0.0) &nbsp;&nbsp;&nbsp;&rarr; Length 16</span>
                        <span className="text-stone-500">Matches first 16 bits</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-stone-200 flex items-center justify-between">
                        <span>3. 10.20.30.0/24 &nbsp;&nbsp;(255.255.255.0) &nbsp;&rarr; Length 24</span>
                        <span className="text-stone-500">Matches first 24 bits</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-orange-50 border border-orange-300 font-bold text-[#ea580c] flex items-center justify-between">
                        <span>4. 10.20.30.128/25 (255.255.255.128) &rarr; Length 25</span>
                        <span className="text-xs bg-orange-200/80 px-2 py-0.5 rounded-full text-orange-900">WINNER: Most Specific (/25)</span>
                      </div>
                    </div>

                    <p className="text-xs text-stone-600 mt-2">
                      Because <code className="font-mono bg-white px-1 py-0.5 rounded border border-stone-200">10.20.30.200</code> has its 25th bit equal to 1 (<code className="font-mono">128 + 64 + 8 = 200</code>), it matches <code className="font-mono">10.20.30.128/25</code>. Since 25 bits is greater than 24, 16, or 8, the router selects route #4. Administrative distance is <strong>irrelevant</strong> here; AD only arbitrates identical prefix lengths during RIB insertion.
                    </p>
                  </div>

                  <div className="p-4 bg-orange-50 rounded-2xl border border-orange-200 text-xs text-stone-700">
                    <span className="font-bold text-stone-900">TCAM &amp; Radix Tree Optimization:</span> In software, LPM is evaluated using Radix Tries or Patricia Tries ($O(k)$ where $k=32$ for IPv4). In modern carrier-grade hardware, line cards use <strong>Ternary Content-Addressable Memory (TCAM)</strong>, which evaluates every prefix in the table simultaneously in a single clock cycle ($O(1)$ lookup latency).
                  </div>
                </div>
              )}

              {/* SECTION 7.4 */}
              {activeSection === "7.4" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                    <span>SECTION 7.4</span>
                    <span>&bull;</span>
                    <span>ROUTE TYPES</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">Connected, Static, and Dynamic Routes</h2>

                  <p className="text-stone-700 leading-relaxed">
                    Routers acquire their reachability intelligence through three distinct mechanisms. Understanding the operational trade-offs of each source is fundamental for building reliable enterprise networks.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
                      <div className="text-xs font-bold text-emerald-600 uppercase">Type 1</div>
                      <h4 className="text-sm font-bold text-stone-900">Connected Routes</h4>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Created automatically when an IP is configured on an interface and link status is <code className="font-mono bg-white px-1 rounded">up/up</code>. Has Administrative Distance 0. Represents local physical wires.
                      </p>
                      <div className="text-[11px] text-stone-500 font-mono bg-white p-2 rounded border border-stone-200">
                        C 192.168.10.0/24 is directly connected, G0/0
                      </div>
                    </div>

                    <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
                      <div className="text-xs font-bold text-blue-600 uppercase">Type 2</div>
                      <h4 className="text-sm font-bold text-stone-900">Static Routes</h4>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Manually configured by a network engineer. Predictable, zero CPU protocol overhead, ideal for stub branch offices. However, does not automatically heal around failed downstream transit hops.
                      </p>
                      <div className="text-[11px] text-stone-500 font-mono bg-white p-2 rounded border border-stone-200">
                        ip route 192.168.30.0 255.255.255.0 10.0.12.2
                      </div>
                    </div>

                    <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
                      <div className="text-xs font-bold text-purple-600 uppercase">Type 3</div>
                      <h4 className="text-sm font-bold text-stone-900">Dynamic Routing (IGP / EGP)</h4>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Routers dynamically exchange reachability packets (OSPF, IS-IS, BGP). Automatically converges around physical fiber cuts, node failures, and link congestion. Adds memory and protocol processing overhead.
                      </p>
                      <div className="text-[11px] text-stone-500 font-mono bg-white p-2 rounded border border-stone-200">
                        O 192.168.30.0/24 [110/20] via 10.0.12.2
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2 text-xs text-stone-700">
                    <h4 className="font-bold text-stone-900">Floating Static Routes:</h4>
                    <p>
                      A static route configured with an Administrative Distance higher than the primary dynamic routing protocol (e.g. AD 120 vs OSPF AD 110). While OSPF is operational, the floating static route remains dormant in the configuration. If OSPF fails or loses its adjacency, the floating static route immediately installs into the FIB, providing automatic backup failover.
                    </p>
                    <code className="block bg-stone-900 text-stone-100 p-2 rounded font-mono text-[11px]">
                      ip route 0.0.0.0 0.0.0.0 198.51.100.2 120
                    </code>
                  </div>
                </div>
              )}

              {/* SECTION 7.5 */}
              {activeSection === "7.5" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                    <span>SECTION 7.5</span>
                    <span>&bull;</span>
                    <span>GATEWAYS &amp; DEFAULT ROUTES</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">Default Routes and Gateway Selection</h2>

                  <p className="text-stone-700 leading-relaxed">
                    A default route (the "Gateway of Last Resort") is the fallback route used when no more specific entry in the forwarding table matches the packet's destination address.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
                      <h4 className="text-sm font-bold text-stone-900 mb-1">IPv4 Default Prefix: 0.0.0.0/0</h4>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Because the prefix length is 0 bits, binary masking <code className="font-mono">IP &amp; 0.0.0.0 = 0.0.0.0</code> always matches every possible 32-bit IPv4 address. Any more specific route (<code className="font-mono">/8</code> through <code className="font-mono">/32</code>) wins under Longest-Prefix Matching.
                      </p>
                    </div>

                    <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
                      <h4 className="text-sm font-bold text-stone-900 mb-1">IPv6 Default Prefix: ::/0</h4>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        The 128-bit counterpart. Hosts configure <code className="font-mono">::/0</code> automatically through ICMPv6 Router Advertisement (RA) default router lifetime flags, pointing to the link-local address of their upstream gateway (<code className="font-mono">fe80::...</code>).
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-stone-700 space-y-2">
                    <h4 className="font-bold text-amber-900 flex items-center gap-1.5">
                      <AlertTriangle size={16} className="text-amber-600" />
                      Critical Distinction: Host Default Gateway vs. Router Default Route
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-stone-700">
                      <li><strong>Host Default Gateway:</strong> Configured on an end-device (e.g. PC-A). The host does NOT run routing protocols; it sends all off-subnet traffic to the gateway's Layer 2 MAC address while leaving the destination IP intact.</li>
                      <li><strong>Router Default Route:</strong> Configured on a router for outbound transit (e.g. pointing toward an ISP border router). If the router has a specific internal route for <code className="font-mono">192.168.20.0/24</code>, it routes internally; if the packet is destined for <code className="font-mono">8.8.8.8</code>, it uses the default route.</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* SECTION 7.6 */}
              {activeSection === "7.6" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                    <span>SECTION 7.6</span>
                    <span>&bull;</span>
                    <span>HOP-BY-HOP MECHANICS</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">Packet Forwarding, TTL, and Hop Limit</h2>

                  <p className="text-stone-700 leading-relaxed">
                    IP packet forwarding operates strictly hop-by-hop. The source and destination IP addresses remain fixed as a packet crosses routers (unless modified by Network Address Translation). However, <strong>at every routed hop, the Layer 2 Ethernet frame is stripped and rebuilt</strong> with new Source and Destination MAC addresses!
                  </p>

                  <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-3">
                    <h4 className="text-sm font-bold text-stone-900">The Lifecycle of IPv4 TTL &amp; IPv6 Hop Limit</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Every router that forwards an IPv4 packet decrements the 8-bit Time to Live (TTL) field by 1 (or Hop Limit in IPv6). If a packet reaches a router with <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-stone-200">TTL = 1</code>, the router cannot decrement it further and <strong>discards the packet</strong>. It generates an <strong>ICMP Time Exceeded (Type 11, Code 0)</strong> message back to the source IP address.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
                      <div className="p-3 bg-white rounded-xl border border-stone-200">
                        <div className="text-stone-400 text-[10px]">Host Origin</div>
                        <div className="text-sm font-bold text-stone-900">TTL = 64</div>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-stone-200">
                        <div className="text-stone-400 text-[10px]">Hop 1: Router R1</div>
                        <div className="text-sm font-bold text-stone-900">TTL = 63</div>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-stone-200">
                        <div className="text-stone-400 text-[10px]">Hop 2: Router R2</div>
                        <div className="text-sm font-bold text-stone-900">TTL = 62</div>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-stone-200">
                        <div className="text-stone-400 text-[10px]">Hop 3: Router R3</div>
                        <div className="text-sm font-bold text-stone-900">TTL = 61</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-stone-900 text-stone-100 rounded-2xl text-xs font-mono space-y-2">
                    <div className="text-orange-400 font-bold flex items-center gap-1.5">
                      <Terminal size={14} />
                      How Traceroute Exploits TTL Expiration
                    </div>
                    <p className="text-stone-300 leading-relaxed text-[11px]">
                      Traceroute does not have a magical query protocol. It sends normal UDP/ICMP probe packets with artificially low TTL values:
                      <br />&bull; <strong>Probe 1 (TTL=1):</strong> Expires at Hop 1 (R1). R1 returns ICMP Type 11. Traceroute logs R1's IP and round-trip time.
                      <br />&bull; <strong>Probe 2 (TTL=2):</strong> Passes R1 (TTL becomes 1), expires at Hop 2 (R2). R2 returns ICMP Type 11.
                      <br />&bull; <strong>Probe 3 (TTL=3):</strong> Passes R1 and R2, expires at Hop 3 (R3).
                      <br />&bull; <strong>Probe N:</strong> Eventually reaches the target host, which returns ICMP Port Unreachable or Echo Reply, terminating the trace.
                    </p>
                  </div>
                </div>
              )}

              {/* SECTION 7.7 */}
              {activeSection === "7.7" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                    <span>SECTION 7.7</span>
                    <span>&bull;</span>
                    <span>ALGORITHM COMPARISON</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">Distance-Vector vs. Link-State Routing</h2>

                  <p className="text-stone-700 leading-relaxed">
                    Dynamic Interior Gateway Protocols (IGPs) are divided into two primary algorithmic families: <strong>Distance-Vector</strong> (Bellman-Ford algorithm) and <strong>Link-State</strong> (Dijkstra algorithm).
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden">
                      <thead className="bg-stone-100 text-stone-700 font-bold border-b border-stone-200">
                        <tr>
                          <th className="p-3">Comparison Metric</th>
                          <th className="p-3">Distance-Vector (RIP, IGRP)</th>
                          <th className="p-3">Link-State (OSPF, IS-IS)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200">
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-semibold text-stone-900">Core Algorithm</td>
                          <td className="p-3 text-stone-700">Bellman-Ford / Ford-Fulkerson.</td>
                          <td className="p-3 text-stone-700">Dijkstra Shortest Path First (SPF).</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-semibold text-stone-900">Information Shared</td>
                          <td className="p-3 text-stone-700">"Routing by rumor" — shares complete routing tables with immediate neighbors only.</td>
                          <td className="p-3 text-stone-700">Link-State Advertisements (LSAs) describing local links, states, and metrics flooded to entire area.</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-semibold text-stone-900">Network Map Awareness</td>
                          <td className="p-3 text-stone-700">Zero global awareness; router only knows distance and next hop reported by neighbors.</td>
                          <td className="p-3 text-stone-700">Complete, identical topological map (Link-State Database) of the entire area.</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-semibold text-stone-900">Convergence Speed</td>
                          <td className="p-3 text-stone-700">Slow. Subject to "count to infinity" loops (requires split horizon, poison reverse).</td>
                          <td className="p-3 text-stone-700">Extremely fast (sub-second with modern BFD and tuned timers). Loop-free by mathematical graph theory.</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-semibold text-stone-900">Memory &amp; CPU Usage</td>
                          <td className="p-3 text-stone-700">Very low.</td>
                          <td className="p-3 text-stone-700">Higher memory for LSDB; CPU spikes during SPF recalculation after flapping links.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* SECTION 7.8 */}
              {activeSection === "7.8" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                    <span>SECTION 7.8</span>
                    <span>&bull;</span>
                    <span>ENTERPRISE PROTOCOL</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">OSPF Fundamentals &amp; Dijkstra SPF</h2>

                  <p className="text-stone-700 leading-relaxed">
                    Open Shortest Path First (OSPF - RFC 2328 for IPv4, RFC 5340 for IPv6 / OSPFv3) is the industry standard link-state interior gateway protocol for enterprise campuses, datacenters, and service-provider core backbones.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
                      <h4 className="text-sm font-bold text-stone-900">OSPF Neighbor Adjacency States</h4>
                      <ol className="list-decimal list-inside text-xs text-stone-600 space-y-1">
                        <li><strong>Down:</strong> No Hello packets received yet.</li>
                        <li><strong>Init:</strong> Hello received from neighbor, but local Router ID not in neighbor's list.</li>
                        <li><strong>2-Way:</strong> Bidirectional communication established. DR/BDR election occurs on broadcast networks.</li>
                        <li><strong>ExStart:</strong> Master/Slave election and Initial Sequence Number negotiation.</li>
                        <li><strong>Exchange:</strong> Database Description (DBD) packets exchanged.</li>
                        <li><strong>Loading:</strong> Link State Requests (LSR) and Link State Updates (LSU) synchronize missing LSAs.</li>
                        <li><strong>Full:</strong> LSDBs are 100% identical. Adjacency complete!</li>
                      </ol>
                    </div>

                    <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
                      <h4 className="text-sm font-bold text-stone-900">Metric Calculation &amp; Multi-Area Hierarchy</h4>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        OSPF calculates interface cost inversely proportional to bandwidth:
                      </p>
                      <div className="p-2 bg-white rounded border border-stone-200 font-mono text-center text-xs text-[#ea580c]">
                        Cost = Reference Bandwidth (Default 100 Mbps) / Interface Bandwidth
                      </div>
                      <p className="text-xs text-stone-600">
                        In modern networks, engineers set <code className="font-mono bg-white px-1">auto-cost reference-bandwidth 100000</code> (100 Gbps) so 10G and 100G interfaces don't both register metric 1.
                      </p>
                      <p className="text-xs text-stone-600">
                        <strong>Area 0 (Backbone Area):</strong> All non-backbone areas (Area 1, Area 2) must physically or logically connect to Area 0 via Area Border Routers (ABRs) to prevent inter-area routing loops.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 7.9 */}
              {activeSection === "7.9" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                    <span>SECTION 7.9</span>
                    <span>&bull;</span>
                    <span>INTERDOMAIN ROUTING</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">BGP: Global Internet Routing &amp; Policy</h2>

                  <p className="text-stone-700 leading-relaxed">
                    The Border Gateway Protocol (BGP-4, RFC 4271) is the glue of the global Internet. While OSPF discovers the shortest path within an organization, BGP enables thousands of independently administered <strong>Autonomous Systems (ASes)</strong> to exchange routes based on commercial contracts, regulatory laws, peering agreements, and business policies.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
                      <h4 className="text-sm font-bold text-stone-900 mb-1">eBGP vs. iBGP</h4>
                      <ul className="text-xs text-stone-600 space-y-1">
                        <li>&bull; <strong>eBGP (External):</strong> Connects routers in <em>different</em> Autonomous Systems (e.g. Enterprise AS64500 to Cloudflare AS13335). Default TTL = 1.</li>
                        <li>&bull; <strong>iBGP (Internal):</strong> Distributes external BGP routes <em>within</em> the same Autonomous System. Requires full mesh or Route Reflectors to prevent loops.</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
                      <h4 className="text-sm font-bold text-stone-900 mb-1">Crucial BGP Path Attributes</h4>
                      <ul className="text-xs text-stone-600 space-y-1">
                        <li>&bull; <strong>AS_PATH:</strong> List of ASNs the route has traversed. Shorter is preferred; detects and prevents routing loops if local ASN is seen in path.</li>
                        <li>&bull; <strong>LOCAL_PREF:</strong> Internal preference metric (default 100). Higher wins.</li>
                        <li>&bull; <strong>MED:</strong> Suggested entry point into an AS. Lower wins.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 bg-stone-900 text-stone-100 rounded-2xl text-xs font-mono space-y-2">
                    <div className="text-orange-400 font-bold">BGP Best-Path Decision Algorithm (Simplified Step-by-Step):</div>
                    <ol className="list-decimal list-inside space-y-1 text-stone-300 text-[11px]">
                      <li>Prefer highest <strong>Weight</strong> (Cisco proprietary, local to single router).</li>
                      <li>Prefer highest <strong>LOCAL_PREF</strong> (Global across the entire Autonomous System).</li>
                      <li>Prefer routes locally originated via network statement or redistribute.</li>
                      <li>Prefer shortest <strong>AS_PATH</strong> length.</li>
                      <li>Prefer lowest Origin code (IGP &lt; EGP &lt; Incomplete).</li>
                      <li>Prefer lowest <strong>MED</strong> (Multi-Exit Discriminator).</li>
                      <li>Prefer <strong>eBGP</strong> paths over iBGP paths.</li>
                      <li>Prefer lowest IGP metric to the BGP NEXT_HOP router.</li>
                      <li>Deterministic tie-break: Lowest BGP Router ID.</li>
                    </ol>
                  </div>
                </div>
              )}

              {/* SECTION 7.10 */}
              {activeSection === "7.10" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                    <span>SECTION 7.10</span>
                    <span>&bull;</span>
                    <span>TROUBLESHOOTING &amp; PATHOLOGY</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">Routing Failures, Loops &amp; Asymmetric Paths</h2>

                  <p className="text-stone-700 leading-relaxed">
                    A successful local gateway ping proves only that Layer 1 and 2 of the local cable work. It provides zero proof that intermediate routers have valid return paths.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-red-50/70 rounded-2xl border border-red-200">
                      <h4 className="text-sm font-bold text-red-900 mb-1">1. Routing Loops</h4>
                      <p className="text-xs text-red-800 leading-relaxed">
                        Two routers each believe the other is the best next hop for a prefix (e.g. R1 &rarr; R2 &rarr; R1). Packets circulate endlessly until TTL decrements to 0, saturating link bandwidth and causing high CPU usage.
                      </p>
                    </div>

                    <div className="p-4 bg-amber-50/70 rounded-2xl border border-amber-200">
                      <h4 className="text-sm font-bold text-amber-900 mb-1">2. Asymmetric Paths</h4>
                      <p className="text-xs text-amber-800 leading-relaxed">
                        Traffic flows from Source &rarr; Destination via Link A, but returns via Link B. While standard IP routing permits this, stateful firewalls drop return traffic because the return packets hit a firewall that never saw the initial TCP SYN!
                      </p>
                    </div>

                    <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
                      <h4 className="text-sm font-bold text-stone-900 mb-1">3. Missing Return Black Hole</h4>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Outbound packets reach the destination server intact, but the destination router lacks a route back to the source subnet. The server generates replies, which are immediately discarded into a black hole.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2 text-xs">
                    <h4 className="font-bold text-stone-900">The 6-Step Systematic Diagnostic Workflow:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-stone-700">
                      <li><strong>Verify Host IP/Mask/Gateway:</strong> Run <code className="font-mono bg-white px-1">ip route</code> or <code className="font-mono bg-white px-1">ipconfig</code>.</li>
                      <li><strong>Ping Local Default Gateway:</strong> Confirms local Layer 2 ARP resolution and interface connectivity.</li>
                      <li><strong>Run Traceroute:</strong> Identifies the exact router where packet forwarding stops or begins looping.</li>
                      <li><strong>Inspect FIB on Failing Router:</strong> Run <code className="font-mono bg-white px-1">show ip route &lt;dest&gt;</code> to check for matching prefix and valid next hop.</li>
                      <li><strong>Inspect Return Routing Table:</strong> Log into the destination router and confirm it has a valid route back to the client subnet.</li>
                      <li><strong>Inspect Firewall &amp; NAT State:</strong> Check connection tracking tables (<code className="font-mono bg-white px-1">conntrack -L</code>) for asymmetric drops.</li>
                    </ol>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------------- */}
        {/* TAB 2: LONGEST-PREFIX MATCHING (LPM) SIMULATOR                         */}
        {/* -------------------------------------------------------------------- */}
        {activeTab === "lpm-sim" && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                  <Search size={14} />
                  <span>INTERACTIVE FIB LOOKUP ENGINE</span>
                </div>
                <h2 className="text-2xl font-bold text-stone-900 mt-1">Longest-Prefix Match (LPM) Evaluator</h2>
                <p className="text-xs text-stone-600 max-w-2xl mt-1">
                  Input any target IP address to see how the router's Forwarding Information Base (FIB) matches against candidate prefixes, checks binary leading bits, and chooses the winning route.
                </p>
              </div>

              <div className="flex items-center gap-2">
                {["10.20.30.200", "10.20.30.50", "10.20.99.10", "10.99.1.10", "192.168.1.1"].map((sample) => (
                  <button
                    key={sample}
                    onClick={() => setTestIpInput(sample)}
                    className="px-2.5 py-1.5 rounded-lg border border-stone-200 bg-stone-50 hover:bg-orange-50 hover:border-orange-300 text-xs font-mono text-stone-700 transition cursor-pointer"
                  >
                    {sample}
                  </button>
                ))}
              </div>
            </div>

            {/* IP Input Bar */}
            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-1 w-full">
                <label className="block text-xs font-bold text-stone-700 mb-1 uppercase tracking-wider">
                  Test Destination IPv4 Address:
                </label>
                <input
                  type="text"
                  value={testIpInput}
                  onChange={(e) => setTestIpInput(e.target.value)}
                  placeholder="e.g. 10.20.30.200"
                  className="w-full px-4 py-2 bg-white rounded-xl border border-stone-300 font-mono text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                />
              </div>

              {lpmEvaluation.targetInt !== null && (
                <div className="w-full sm:w-auto p-3 bg-white rounded-xl border border-stone-200 text-xs font-mono text-stone-600">
                  <div className="text-[10px] uppercase text-stone-400 font-bold">32-Bit Binary Representation</div>
                  <div className="text-stone-900 font-bold tracking-wider">{intToBinStr(lpmEvaluation.targetInt)}</div>
                </div>
              )}
            </div>

            {lpmEvaluation.error ? (
              <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
                <AlertTriangle size={16} />
                <span>{lpmEvaluation.error}</span>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Result Pill */}
                {lpmEvaluation.bestMatch && (
                  <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-300 flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                        <CheckCircle2 size={16} className="text-emerald-600" />
                        Winning Route Selected by LPM: {lpmEvaluation.bestMatch.prefix}
                      </div>
                      <p className="text-xs text-emerald-900 mt-1">
                        <strong>Next Hop:</strong> {lpmEvaluation.bestMatch.nextHop} via interface{" "}
                        <span className="font-mono font-bold">{lpmEvaluation.bestMatch.iface}</span> &bull;{" "}
                        <strong>Prefix Length:</strong> /{lpmEvaluation.bestMatch.length} (Most specific match among all candidate routes)
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-emerald-600 text-white rounded-full text-xs font-bold uppercase">
                      Forwarded to {lpmEvaluation.bestMatch.iface}
                    </span>
                  </div>
                )}

                {/* Routing Table Evaluation Grid */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden">
                    <thead className="bg-stone-100 text-stone-700 font-bold border-b border-stone-200">
                      <tr>
                        <th className="p-3">Route Prefix</th>
                        <th className="p-3">Prefix Length</th>
                        <th className="p-3">Next Hop &amp; Interface</th>
                        <th className="p-3">Matched Bits Status</th>
                        <th className="p-3">Decision</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200">
                      {lpmEvaluation.matches.map((route, idx) => {
                        const isWinning = lpmEvaluation.bestMatch && lpmEvaluation.bestMatch.prefix === route.prefix;
                        return (
                          <tr
                            key={idx}
                            className={`${
                              isWinning
                                ? "bg-orange-50 font-semibold"
                                : route.isMatch
                                ? "bg-stone-50/50"
                                : "opacity-40"
                            }`}
                          >
                            <td className="p-3 font-mono">
                              <span className="font-bold text-stone-900">{route.prefix}</span>
                              <div className="text-[10px] text-stone-500 font-sans">{route.desc}</div>
                            </td>
                            <td className="p-3 font-mono">/{route.length}</td>
                            <td className="p-3 font-mono">
                              {route.nextHop} <span className="text-stone-400">({route.iface})</span>
                            </td>
                            <td className="p-3 font-mono text-[11px]">
                              {route.length === 0 ? (
                                <span className="text-stone-500">Default Match (/0 matches everything)</span>
                              ) : route.isMatch ? (
                                <span className="text-emerald-700">
                                  Leading {route.length} bits matched exactly
                                </span>
                              ) : (
                                <span className="text-rose-600">Bit mismatch within mask</span>
                              )}
                            </td>
                            <td className="p-3">
                              {isWinning ? (
                                <span className="px-2 py-0.5 rounded-full bg-[#ea580c] text-white text-[10px] font-bold uppercase">
                                  Selected Winner
                                </span>
                              ) : route.isMatch ? (
                                <span className="text-stone-500 text-[11px]">
                                  Matched, but shorter prefix
                                </span>
                              ) : (
                                <span className="text-stone-400 text-[11px]">No Match</span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* -------------------------------------------------------------------- */}
        {/* TAB 3: PACKET FORWARDER & TTL HOP-BY-HOP SIMULATOR                    */}
        {/* -------------------------------------------------------------------- */}
        {activeTab === "forwarder-sim" && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                  <Network size={14} />
                  <span>STEP-BY-STEP HOP FORWARDING ENGINE</span>
                </div>
                <h2 className="text-2xl font-bold text-stone-900 mt-1">Multi-Router Packet Forwarder &amp; TTL Tracer</h2>
                <p className="text-xs text-stone-600 max-w-2xl mt-1">
                  Trace how an IP packet travels across three routers from PC-A to PC-C. Observe TTL decrement, Layer 2 Ethernet frame MAC re-encapsulation, and how ICMP Time Exceeded is triggered if TTL drops to 0.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => resetPacketTrace(64)}
                  className="px-3 py-1.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 text-xs font-semibold text-stone-700 flex items-center gap-1.5 transition cursor-pointer"
                >
                  <RotateCcw size={14} />
                  <span>Reset (TTL=64)</span>
                </button>
                <button
                  onClick={() => resetPacketTrace(2)}
                  className="px-3 py-1.5 rounded-xl border border-orange-200 bg-orange-50 hover:bg-orange-100 text-xs font-semibold text-[#ea580c] flex items-center gap-1.5 transition cursor-pointer"
                >
                  <AlertTriangle size={14} />
                  <span>Test Low TTL (TTL=2)</span>
                </button>
              </div>
            </div>

            {/* Visual Topology Diagram */}
            <div className="p-6 bg-stone-900 rounded-3xl text-stone-100 space-y-4">
              <div className="text-xs font-mono text-stone-400 uppercase tracking-wider flex items-center justify-between">
                <span>Network Topology Path</span>
                <span>Active Hop: {hopNodes[currentHopIndex].name}</span>
              </div>

              <div className="grid grid-cols-5 gap-2 text-center text-xs font-mono items-center">
                {hopNodes.map((node, idx) => {
                  const isCurrent = currentHopIndex === idx;
                  const isVisited = currentHopIndex >= idx;
                  return (
                    <div
                      key={node.id}
                      className={`p-3 rounded-2xl border transition-all ${
                        isCurrent
                          ? "bg-orange-600/30 border-orange-500 text-white shadow-lg ring-2 ring-orange-500"
                          : isVisited
                          ? "bg-stone-800 border-stone-700 text-stone-300"
                          : "bg-stone-900/60 border-stone-800 text-stone-600"
                      }`}
                    >
                      <div className="flex justify-center mb-1">
                        {node.role === "host" ? (
                          <Monitor size={20} className={isCurrent ? "text-orange-400" : "text-stone-400"} />
                        ) : (
                          <RouterIcon size={20} className={isCurrent ? "text-orange-400" : "text-stone-400"} />
                        )}
                      </div>
                      <div className="font-bold text-[11px] truncate">{node.name}</div>
                      <div className="text-[9px] text-stone-400 truncate">{node.role === "host" ? node.ip : node.ipIn}</div>
                    </div>
                  );
                })}
              </div>

              {/* Step Controls */}
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-stone-400 font-mono">
                  Current TTL in Transit:{" "}
                  <strong className="text-orange-400 text-sm">
                    {forwardLog[forwardLog.length - 1]?.ttl ?? initialTtl}
                  </strong>
                </span>

                <button
                  disabled={currentHopIndex >= 4 || forwardLog[forwardLog.length - 1]?.status === "expired"}
                  onClick={advanceOneHop}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition ${
                    currentHopIndex >= 4 || forwardLog[forwardLog.length - 1]?.status === "expired"
                      ? "bg-stone-800 text-stone-600 cursor-not-allowed"
                      : "bg-[#ea580c] text-white hover:bg-orange-600 cursor-pointer shadow"
                  }`}
                >
                  <span>Step Next Forwarding Hop</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Hop Log Card */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Hop-by-Hop Packet Inspection Log:
              </h4>

              <div className="space-y-2">
                {forwardLog.map((entry, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl border text-xs font-mono transition ${
                      entry.status === "expired"
                        ? "bg-red-50 border-red-300 text-red-900"
                        : entry.status === "success"
                        ? "bg-emerald-50 border-emerald-300 text-emerald-900"
                        : "bg-stone-50 border-stone-200 text-stone-800"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200/60 pb-2 mb-2">
                      <span className="font-bold flex items-center gap-1.5">
                        <span className="px-2 py-0.5 rounded bg-white text-stone-800 border text-[10px]">
                          Hop {entry.step}
                        </span>
                        <span>{entry.node} &rarr; {entry.action}</span>
                      </span>
                      <span className="font-bold text-orange-700">Remaining TTL: {entry.ttl}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] mb-2">
                      <div>
                        <span className="text-stone-500">Layer 3 IP (Unaltered):</span> {entry.srcIp} &rarr; {entry.dstIp}
                      </div>
                      <div>
                        <span className="text-stone-500">Layer 2 MAC (Re-written):</span> {entry.srcMac} &rarr; {entry.dstMac}
                      </div>
                    </div>

                    <p className="text-stone-600 text-[11px] font-sans leading-relaxed">{entry.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------------- */}
        {/* TAB 4: OSPF & DIJKSTRA SPF GRAPH SIMULATOR                            */}
        {/* -------------------------------------------------------------------- */}
        {activeTab === "ospf-sim" && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                  <GitFork size={14} />
                  <span>LINK-STATE GRAPH ALGORITHM</span>
                </div>
                <h2 className="text-2xl font-bold text-stone-900 mt-1">OSPF Link-State Database &amp; Dijkstra SPF</h2>
                <p className="text-xs text-stone-600 max-w-2xl mt-1">
                  Adjust link metric costs or toggle link failures. Watch Dijkstra's Shortest Path First algorithm dynamically calculate the lowest-cost path from Router R1 to Router R4.
                </p>
              </div>

              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs font-mono">
                <div className="text-[10px] uppercase text-stone-400 font-bold">OSPF Calculated Path (R1 &rarr; R4)</div>
                <div className="text-stone-900 font-bold flex items-center gap-1.5 mt-0.5">
                  <span>{dijkstraResult.path.join(" \u2192 ") || "NO ROUTE (PARTITIONED)"}</span>
                  <span className="text-orange-600 font-bold">(Total Metric: {dijkstraResult.totalCost})</span>
                </div>
              </div>
            </div>

            {/* Link State Control Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {Object.entries(ospfLinks).map(([linkKey, linkVal]) => {
                const isDown = linkVal.status === "down";
                const isPartOfBestPath =
                  dijkstraResult.path.length > 1 &&
                  dijkstraResult.path.some((node, i) => {
                    if (i === dijkstraResult.path.length - 1) return false;
                    const next = dijkstraResult.path[i + 1];
                    return (
                      (node === linkKey.split("-")[0] && next === linkKey.split("-")[1]) ||
                      (node === linkKey.split("-")[1] && next === linkKey.split("-")[0])
                    );
                  });

                return (
                  <div
                    key={linkKey}
                    className={`p-4 rounded-2xl border transition ${
                      isDown
                        ? "bg-red-50/60 border-red-200"
                        : isPartOfBestPath
                        ? "bg-orange-50 border-orange-300 ring-1 ring-orange-300"
                        : "bg-stone-50 border-stone-200"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-stone-900">Link {linkKey}</span>
                      <button
                        onClick={() => toggleLinkState(linkKey)}
                        className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase transition cursor-pointer ${
                          isDown ? "bg-red-600 text-white" : "bg-emerald-600 text-white"
                        }`}
                      >
                        {linkVal.status}
                      </button>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] text-stone-500 uppercase font-bold block">
                        OSPF Metric Cost:
                      </label>
                      <input
                        type="number"
                        disabled={isDown}
                        min="1"
                        max="100"
                        value={linkVal.cost}
                        onChange={(e) => updateLinkCost(linkKey, e.target.value)}
                        className="w-full px-2 py-1 bg-white rounded border border-stone-300 font-mono text-xs text-stone-900 disabled:opacity-40"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Dijkstra Execution Walkthrough */}
            <div className="p-4 bg-stone-900 text-stone-100 rounded-2xl text-xs font-mono space-y-2">
              <div className="text-orange-400 font-bold flex items-center gap-1.5">
                <Workflow size={14} />
                Dijkstra Shortest Path Tree from Root R1:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-stone-300 text-[11px] pt-1">
                <div className="p-2 bg-stone-800 rounded">R1: Distance 0 (Root)</div>
                <div className="p-2 bg-stone-800 rounded">R2: Distance {dijkstraResult.dist["R2"]}</div>
                <div className="p-2 bg-stone-800 rounded">R3: Distance {dijkstraResult.dist["R3"]}</div>
                <div className="p-2 bg-stone-800 rounded">R4: Distance {dijkstraResult.dist["R4"]}</div>
              </div>
              <p className="text-stone-400 text-[11px] font-sans mt-2">
                Notice: If you fail link R1-R2, OSPF detects the LSA change, re-floods Area 0, and reroutes traffic automatically via R1 &rarr; R3 &rarr; R4 without any human intervention.
              </p>
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------------- */}
        {/* TAB 5: BGP POLICY & AS_PATH SIMULATOR                                */}
        {/* -------------------------------------------------------------------- */}
        {activeTab === "bgp-sim" && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                  <Globe size={14} />
                  <span>PATH-VECTOR POLICY ENGINE</span>
                </div>
                <h2 className="text-2xl font-bold text-stone-900 mt-1">BGP Attribute &amp; Path Selection Simulator</h2>
                <p className="text-xs text-stone-600 max-w-2xl mt-1">
                  Enterprise AS64500 is multihomed to two upstream providers (ISP A - AS100, ISP B - AS200) reaching Cloud Service AS15169. Adjust LOCAL_PREF and AS_PATH prepend values to control which path wins.
                </p>
              </div>

              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs font-mono">
                <div className="text-[10px] uppercase text-stone-400 font-bold">Winning Outbound Path</div>
                <div className="text-emerald-700 font-bold text-sm">Via ISP {bgpRouteSelection.winner}</div>
              </div>
            </div>

            {/* BGP Policy Sliders */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* ISP A Controls */}
              <div className={`p-5 rounded-2xl border transition ${bgpRouteSelection.winner === "A" ? "bg-emerald-50/50 border-emerald-300 ring-1 ring-emerald-300" : "bg-stone-50 border-stone-200"}`}>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-bold text-stone-900">Path A: Via ISP-A (AS 100)</h4>
                  {bgpRouteSelection.winner === "A" && (
                    <span className="px-2 py-0.5 bg-emerald-600 text-white rounded-full text-[10px] font-bold uppercase">
                      Active Best Route
                    </span>
                  )}
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="text-stone-600 block mb-1">
                      LOCAL_PREF (Higher is preferred): <strong className="text-stone-900">{bgpPolicy.ispAPref}</strong>
                    </label>
                    <input
                      type="range"
                      min="50"
                      max="300"
                      step="50"
                      value={bgpPolicy.ispAPref}
                      onChange={(e) => setBgpPolicy((prev) => ({ ...prev, ispAPref: parseInt(e.target.value, 10) }))}
                      className="w-full accent-orange-600"
                    />
                  </div>

                  <div>
                    <label className="text-stone-600 block mb-1">
                      AS_PATH Prepending (Padding): <strong className="text-stone-900">+{bgpPolicy.ispAAsPrepend} ASNs</strong>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="3"
                      value={bgpPolicy.ispAAsPrepend}
                      onChange={(e) => setBgpPolicy((prev) => ({ ...prev, ispAAsPrepend: parseInt(e.target.value, 10) }))}
                      className="w-full accent-orange-600"
                    />
                  </div>

                  <div className="p-2.5 bg-white rounded-xl border border-stone-200 font-mono text-[11px] text-stone-700">
                    <span className="text-stone-400">AS_PATH:</span> {bgpRouteSelection.asPathA.join(" ")} ({bgpRouteSelection.asPathA.length} hops)
                  </div>
                </div>
              </div>

              {/* ISP B Controls */}
              <div className={`p-5 rounded-2xl border transition ${bgpRouteSelection.winner === "B" ? "bg-emerald-50/50 border-emerald-300 ring-1 ring-emerald-300" : "bg-stone-50 border-stone-200"}`}>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-bold text-stone-900">Path B: Via ISP-B (AS 200)</h4>
                  {bgpRouteSelection.winner === "B" && (
                    <span className="px-2 py-0.5 bg-emerald-600 text-white rounded-full text-[10px] font-bold uppercase">
                      Active Best Route
                    </span>
                  )}
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="text-stone-600 block mb-1">
                      LOCAL_PREF (Higher is preferred): <strong className="text-stone-900">{bgpPolicy.ispBPref}</strong>
                    </label>
                    <input
                      type="range"
                      min="50"
                      max="300"
                      step="50"
                      value={bgpPolicy.ispBPref}
                      onChange={(e) => setBgpPolicy((prev) => ({ ...prev, ispBPref: parseInt(e.target.value, 10) }))}
                      className="w-full accent-orange-600"
                    />
                  </div>

                  <div>
                    <label className="text-stone-600 block mb-1">
                      AS_PATH Prepending (Padding): <strong className="text-stone-900">+{bgpPolicy.ispBAsPrepend} ASNs</strong>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="3"
                      value={bgpPolicy.ispBAsPrepend}
                      onChange={(e) => setBgpPolicy((prev) => ({ ...prev, ispBAsPrepend: parseInt(e.target.value, 10) }))}
                      className="w-full accent-orange-600"
                    />
                  </div>

                  <div className="p-2.5 bg-white rounded-xl border border-stone-200 font-mono text-[11px] text-stone-700">
                    <span className="text-stone-400">AS_PATH:</span> {bgpRouteSelection.asPathB.join(" ")} ({bgpRouteSelection.asPathB.length} hops)
                  </div>
                </div>
              </div>
            </div>

            {/* BGP Decision Explanation Card */}
            <div className="p-4 bg-stone-900 text-stone-100 rounded-2xl text-xs space-y-1">
              <div className="text-orange-400 font-bold uppercase tracking-wider text-[10px]">
                BGP Decision Algorithm Rationale:
              </div>
              <p className="text-stone-200 font-mono text-[11px] leading-relaxed">
                {bgpRouteSelection.reason}
              </p>
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------------- */}
        {/* TAB 6: FAULTS SANDBOX & BREAK-THE-NETWORK                            */}
        {/* -------------------------------------------------------------------- */}
        {activeTab === "faults-sim" && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                  <AlertTriangle size={14} />
                  <span>DIAGNOSTIC FAULT INJECTION LAB</span>
                </div>
                <h2 className="text-2xl font-bold text-stone-900 mt-1">Break-the-Network &amp; Root Cause Analysis</h2>
                <p className="text-xs text-stone-600 max-w-2xl mt-1">
                  Inject real-world networking faults into the 3-router lab. Run simulated ICMP ping and traceroute diagnostics to observe symptoms and learn how to fix them.
                </p>
              </div>

              <button
                onClick={runFaultDiagnostic}
                className="px-4 py-2 bg-[#ea580c] hover:bg-orange-600 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow"
              >
                <Activity size={14} />
                <span>Run Ping &amp; Traceroute</span>
              </button>
            </div>

            {/* Fault Selection Radio Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { id: "none", label: "Baseline Healthy Path", desc: "Symmetric healthy forwarding across R1-R2-R3" },
                { id: "missing-return-r3", label: "Missing Return Route R3", desc: "Echo request arrives; echo reply dropped into black hole" },
                { id: "bad-nexthop-r2", label: "Unresolvable Next Hop R2", desc: "R2 points to 10.0.99.1; triggers Host Unreachable" },
                { id: "asymmetric-fw", label: "Asymmetric Stateful Drop", desc: "Outbound via FW-West, return via FW-East dropped" },
              ].map((fault) => (
                <button
                  key={fault.id}
                  onClick={() => {
                    setActiveFault(fault.id);
                    setFaultPingResult(null);
                  }}
                  className={`p-4 rounded-2xl border text-left transition cursor-pointer ${
                    activeFault === fault.id
                      ? "bg-orange-50 border-orange-300 ring-2 ring-[#ea580c]"
                      : "bg-stone-50 border-stone-200 hover:bg-stone-100"
                  }`}
                >
                  <div className="font-bold text-xs text-stone-900">{fault.label}</div>
                  <div className="text-[11px] text-stone-500 mt-1 leading-snug">{fault.desc}</div>
                </button>
              ))}
            </div>

            {/* Diagnostic Output */}
            {faultPingResult && (
              <div className="p-5 bg-stone-900 text-stone-100 rounded-3xl font-mono text-xs space-y-4">
                <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                  <span className="text-orange-400 font-bold flex items-center gap-1.5">
                    <Terminal size={14} />
                    <span>ping -c 4 192.168.30.10 &amp;&amp; traceroute 192.168.30.10</span>
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                      faultPingResult.status === "success" ? "bg-emerald-600 text-white" : "bg-red-600 text-white"
                    }`}
                  >
                    Status: {faultPingResult.status}
                  </span>
                </div>

                <div className="space-y-1 text-stone-300 text-[11px]">
                  {faultPingResult.hops.map((h, i) => (
                    <div key={i} className="flex items-center justify-between py-0.5">
                      <span>Hop {h.hop}: {h.host}</span>
                      <span className={h.status === "error" || h.status === "timeout" ? "text-red-400 font-bold" : "text-emerald-400"}>
                        {h.rtt}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-3 bg-stone-800/90 rounded-xl border border-stone-700 text-xs text-stone-200">
                  <div className="text-orange-400 font-bold text-[10px] uppercase mb-1">
                    Senior Network Engineer Diagnostic Breakdown:
                  </div>
                  <p className="font-sans leading-relaxed text-[11px] text-stone-300">
                    {faultPingResult.diagnosis}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* -------------------------------------------------------------------- */}
        {/* TAB 7: CLI COMMAND REFERENCE & TERMINAL                              */}
        {/* -------------------------------------------------------------------- */}
        {activeTab === "cli" && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
              <Terminal size={14} />
              <span>PRODUCTION CLI REFERENCE</span>
            </div>
            <h2 className="text-2xl font-bold text-stone-900">Router Verification Commands (Cisco IOS &amp; Linux FRR)</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Cisco IOS Block */}
              <div className="p-4 bg-stone-900 text-stone-100 rounded-2xl font-mono text-xs space-y-3">
                <div className="flex items-center justify-between border-b border-stone-800 pb-2 text-orange-400 font-bold">
                  <span>Cisco IOS XE / NX-OS</span>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `show ip route\nshow ip ospf neighbor\nshow ip ospf database\nshow ip bgp summary\ntraceroute 192.168.30.10`,
                        "cisco-cli"
                      )
                    }
                    className="text-stone-400 hover:text-white flex items-center gap-1 text-[11px] cursor-pointer"
                  >
                    {copiedCodeId === "cisco-cli" ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    <span>{copiedCodeId === "cisco-cli" ? "Copied" : "Copy"}</span>
                  </button>
                </div>
                <pre className="text-stone-300 text-[11px] leading-relaxed overflow-x-auto">
{`# View active IPv4 routing table
show ip route

# View active IPv6 routing table
show ipv6 route

# Check OSPF neighbor adjacencies
show ip ospf neighbor

# Inspect complete Link-State Database (LSDB)
show ip ospf database

# View BGP peering sessions
show ip bgp summary

# End-to-end hop trace
traceroute 192.168.30.10`}
                </pre>
              </div>

              {/* Linux / FRR Block */}
              <div className="p-4 bg-stone-900 text-stone-100 rounded-2xl font-mono text-xs space-y-3">
                <div className="flex items-center justify-between border-b border-stone-800 pb-2 text-emerald-400 font-bold">
                  <span>Linux (iproute2) &amp; FRRouting</span>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `ip -4 route show\nip -6 route show\nip route get 192.168.30.10\nvtysh -c 'show ip ospf neighbor'\ntraceroute -n 192.168.30.10`,
                        "linux-cli"
                      )
                    }
                    className="text-stone-400 hover:text-white flex items-center gap-1 text-[11px] cursor-pointer"
                  >
                    {copiedCodeId === "linux-cli" ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    <span>{copiedCodeId === "linux-cli" ? "Copied" : "Copy"}</span>
                  </button>
                </div>
                <pre className="text-stone-300 text-[11px] leading-relaxed overflow-x-auto">
{`# Display kernel IPv4 routing table
ip -4 route show

# Display kernel IPv6 routing table
ip -6 route show

# Simulate kernel FIB lookup for destination
ip route get 192.168.30.10

# FRRouting (vtysh) OSPF neighbor status
vtysh -c 'show ip ospf neighbor'

# FRRouting BGP route table
vtysh -c 'show ip bgp'

# Hop trace without DNS resolution delay
traceroute -n 192.168.30.10`}
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
                <h2 className="text-2xl font-bold text-stone-900 mt-1">Module 7 Examination: Routing &amp; Routers</h2>
                <p className="text-xs text-stone-600 max-w-2xl mt-1">
                  Validate your conceptual mastery of Longest-Prefix Matching, RIB vs FIB, OSPF LSDB mechanics, BGP policy attributes, and systematic failure diagnostics.
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
        {/* TAB 9: LAB REPORT & CAPSTONE                                         */}
        {/* -------------------------------------------------------------------- */}
        {activeTab === "lab-report" && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e7e3da] shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#ea580c] font-bold">
                  <ListChecks size={14} />
                  <span>HANDS-ON LAB CHECKLIST &amp; CAPSTONE REPORT</span>
                </div>
                <h2 className="text-2xl font-bold text-stone-900 mt-1">Multi-Router Topology Lab &amp; Report Generator</h2>
                <p className="text-xs text-stone-600 max-w-2xl mt-1">
                  Track your completion of the Packet Tracer / GNS3 3-router line topology lab. Copy the completed markdown engineering report for your portfolio or course submission.
                </p>
              </div>

              <button
                onClick={() => copyToClipboard(labReportTemplate, "lab-report")}
                className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow"
              >
                {copiedCodeId === "lab-report" ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copiedCodeId === "lab-report" ? "Report Copied" : "Copy Lab Report Template"}</span>
              </button>
            </div>

            {/* Checklist */}
            <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Lab Milestone Verification Checklist:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {[
                  { key: "topoBuilt", label: "1. Three routers connected via serial/GigE lines in Packet Tracer/GNS3" },
                  { key: "ipsConfigured", label: "2. Interface IPs assigned (192.168.10.1, 10.0.12.x, 10.0.23.x, 192.168.30.1)" },
                  { key: "connectedRoutesVerified", label: "3. 'show ip route' confirms connected routes on all 3 routers" },
                  { key: "staticRoutesAdded", label: "4. Static routes added on R1, R2, and R3 pointing to remote subnets" },
                  { key: "pingVerified", label: "5. Host PC-A successfully pings PC-C (5/5 replies received)" },
                  { key: "tracerouteVerified", label: "6. Traceroute from PC-A confirms 4 hops (R1 -> R2 -> R3 -> PC-C)" },
                  { key: "faultInjected", label: "7. Injected missing return route on R3 and diagnosed black hole" },
                  { key: "ospfMigrated", label: "8. Replaced static routes with OSPF Area 0 and verified convergence" },
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

            {/* Report Markdown Preview */}
            <div className="p-4 bg-stone-900 text-stone-100 rounded-2xl font-mono text-xs space-y-2">
              <div className="text-stone-400 text-[10px] uppercase font-bold flex items-center justify-between border-b border-stone-800 pb-2">
                <span>Markdown Lab Report Preview</span>
                <span>Ready for Submission</span>
              </div>
              <pre className="text-stone-300 text-[11px] leading-relaxed overflow-x-auto max-h-80">
                {labReportTemplate}
              </pre>
            </div>
          </div>
        )}

        {/* Footer Navigation Bar */}
        <div className="mt-10 pt-6 border-t border-[#e7e3da] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => navigate("/learning/networks/ipv6")}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#e7e3da] bg-white text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#ea580c] transition cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 6 — IPv6 Architecture &amp; Modern Addressing</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-stone-500">
              Next: Module 8 — ICMP, ARP, DHCP & Host Config
            </span>
            <button
              onClick={() => navigate("/learning/networks/config")}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#ea580c] hover:bg-orange-600 text-xs font-bold text-white transition cursor-pointer shadow"
            >
              <span>Module 8</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
