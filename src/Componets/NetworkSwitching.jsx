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
  ListChecks,
  RefreshCw,
  GitFork,
  Activity,
  Compass,
  Gauge,
  Clock,
  Wifi,
  Smartphone,
  Flame,
  Volume2,
  LockKeyhole,
  Send,
  Boxes,
  FileCheck,
  Filter,
  SlidersHorizontal,
  Antenna,
  Radar,
  Signal,
  KeyRound,
  ShieldAlert,
  Laptop,
  Tablet,
  CheckSquare,
  Square,
  Cable,
  FolderTree,
  Binary,
  Maximize2,
  Minimize2,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* COMPUTER NETWORKS & INTERNET ENGINEERING: MODULE 14                        */
/* SWITCHING, VLANS AND ENTERPRISE LAN DESIGN                                 */
/* -------------------------------------------------------------------------- */

export default function NetworkSwitching() {
  const navigate = useNavigate();

  // Active top-level tabs
  const [activeTab, setActiveTab] = useState("theory"); // theory | mac-cam-sim | dot1q-sim | stp-sim | intervlan-sim | lacp-sim | cli | quiz | lab-report
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // Theory sub-section tracking
  const [activeSection, setActiveSection] = useSyncedTopic("14.1");

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 1: INTERACTIVE MAC LEARNING & CAM TABLE ENGINE                   */
  /* -------------------------------------------------------------------------- */
  const initialCamTable = [
    { vlan: 10, mac: "00:1A:2B:3C:4D:01", port: "Gi1/0/1", type: "Dynamic", age: 14, host: "PC-A (Staff)" },
    { vlan: 10, mac: "00:1A:2B:3C:4D:02", port: "Gi1/0/2", type: "Dynamic", age: 82, host: "PC-B (Staff)" },
    { vlan: 20, mac: "00:50:56:AA:BB:01", port: "Gi1/0/3", type: "Dynamic", age: 5, host: "SRV-1 (Servers)" },
  ];

  const [camTable, setCamTable] = useState(initialCamTable);
  const [lastActionLog, setLastActionLog] = useState(
    "Switch CAM table initialized with 3 learned entries. Ready for frame injection."
  );
  const [camAttackActive, setCamAttackActive] = useState(false);

  const simulateFrameTransmission = (sourceHost, destHost) => {
    if (camAttackActive) {
      setLastActionLog("ERROR: CAM table overflow attack active! Switch memory exhausted. Switch behaving as an insecure unmanaged hub.");
      return;
    }

    const hostDirectory = {
      "PC-A": { vlan: 10, mac: "00:1A:2B:3C:4D:01", port: "Gi1/0/1", host: "PC-A (Staff)" },
      "PC-B": { vlan: 10, mac: "00:1A:2B:3C:4D:02", port: "Gi1/0/2", host: "PC-B (Staff)" },
      "PC-C": { vlan: 10, mac: "00:1A:2B:3C:4D:04", port: "Gi1/0/4", host: "PC-C (Staff - New Host)" },
      "SRV-1": { vlan: 20, mac: "00:50:56:AA:BB:01", port: "Gi1/0/3", host: "SRV-1 (Servers)" },
      "UNKNOWN": { vlan: 10, mac: "DE:AD:BE:EF:00:99", port: "None", host: "Unknown Unicast Host" },
      "BROADCAST": { vlan: 10, mac: "FF:FF:FF:FF:FF:FF", port: "All", host: "Ethernet Broadcast" },
    };

    const src = hostDirectory[sourceHost];
    const dst = hostDirectory[destHost];

    // Step 1: Learn Source MAC
    let updatedTable = [...camTable];
    const existingIndex = updatedTable.findIndex((entry) => entry.mac === src.mac);
    if (existingIndex >= 0) {
      updatedTable[existingIndex].age = 0;
      updatedTable[existingIndex].port = src.port;
    } else {
      updatedTable.push({
        vlan: src.vlan,
        mac: src.mac,
        port: src.port,
        type: "Dynamic",
        age: 0,
        host: src.host,
      });
    }

    // Step 2: Destination Lookup
    if (destHost === "BROADCAST") {
      setCamTable(updatedTable);
      setLastActionLog(
        `BROADCAST FRAME: Learned source ${src.mac} on ${src.port} (VLAN ${src.vlan}). Frame flooded out ALL eligible ports in VLAN ${src.vlan} (Gi1/0/2, Gi1/0/4). Port Gi1/0/3 (VLAN 20) IGNORED.`
      );
      return;
    }

    if (destHost === "UNKNOWN") {
      setCamTable(updatedTable);
      setLastActionLog(
        `UNKNOWN UNICAST: Learned source ${src.mac} on ${src.port}. Destination ${dst.mac} not in CAM table. Switch flooded frame out all active ports in VLAN ${src.vlan}.`
      );
      return;
    }

    if (src.vlan !== dst.vlan) {
      setCamTable(updatedTable);
      setLastActionLog(
        `LAYER 2 ISOLATION: ${src.host} is in VLAN ${src.vlan}, but target ${dst.host} is in VLAN ${dst.vlan}. Frame DROPPED at Layer 2. Inter-VLAN router/gateway required!`
      );
      return;
    }

    // Known destination in same VLAN
    setCamTable(updatedTable);
    setLastActionLog(
      `SELECTIVE UNICAST: Learned source ${src.mac} on ${src.port}. Destination ${dst.mac} located in CAM table on ${dst.port} (VLAN ${src.vlan}). Forwarded directly to ${dst.port} without flooding.`
    );
  };

  const triggerCamOverflowAttack = () => {
    if (!camAttackActive) {
      const bogusEntries = [];
      for (let i = 1; i <= 8; i++) {
        bogusEntries.push({
          vlan: 10,
          mac: `02:${Math.floor(Math.random() * 89 + 10)}:${Math.floor(Math.random() * 89 + 10)}:${Math.floor(Math.random() * 89 + 10)}:${Math.floor(Math.random() * 89 + 10)}:${Math.floor(Math.random() * 89 + 10)}`,
          port: "Gi1/0/1",
          type: "Spoofed (macof)",
          age: 0,
          host: `Attacker Injection #${i}`,
        });
      }
      setCamTable([...bogusEntries, ...camTable]);
      setCamAttackActive(true);
      setLastActionLog(
        "ALERT: MAC Table Overflow Attack (macof) simulated! Switch CAM memory exhausted. Fail-open behavior activated: all subsequent frames flooded as broadcasts!"
      );
    } else {
      setCamTable(initialCamTable);
      setCamAttackActive(false);
      setLastActionLog("CAM table flushed and restored to secure baseline. Port Security enabled.");
    }
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 2: 802.1Q TRUNKING & TAGGING INSPECTOR                           */
  /* -------------------------------------------------------------------------- */
  const [dot1qVlan, setDot1qVlan] = useState(10);
  const [trunkNativeVlanSw1, setTrunkNativeVlanSw1] = useState(1);
  const [trunkNativeVlanSw2, setTrunkNativeVlanSw2] = useState(1);
  const [trunkAllowedVlans, setTrunkAllowedVlans] = useState("10,20,30,99");

  const trunkInspection = useMemo(() => {
    const isVlanAllowed = trunkAllowedVlans.split(",").map((v) => Number(v.trim())).includes(dot1qVlan);
    const isNativeMismatch = trunkNativeVlanSw1 !== trunkNativeVlanSw2;
    const isNativeOnSw1 = dot1qVlan === trunkNativeVlanSw1;

    let wireRepresentation = "";
    let egressOutcome = "";

    if (!isVlanAllowed) {
      wireRepresentation = "FRAME DROPPED AT TRUNK INGRESS (VLAN NOT IN ALLOWED LIST)";
      egressOutcome = `VLAN ${dot1qVlan} is pruned or omitted from 'switchport trunk allowed vlan'. Frame discarded.`;
    } else if (isNativeMismatch) {
      wireRepresentation = isNativeOnSw1 ? "UNTAGGED FRAME (Native on SW-1)" : `TAGGED 802.1Q (VID=${dot1qVlan})`;
      egressOutcome = isNativeOnSw1
        ? `NATIVE VLAN MISMATCH HAZARD: SW-1 transmitted untagged frame for VLAN ${dot1qVlan}. SW-2 received untagged frame and mapped it to its native VLAN (${trunkNativeVlanSw2})! VLAN Leaking occurred!`
        : `Frame tagged with VID ${dot1qVlan}. Traversed trunk successfully.`;
    } else {
      wireRepresentation = isNativeOnSw1
        ? `UNTAGGED (Native VLAN ${dot1qVlan} Traversal)`
        : `TAGGED: [TPID 0x8100] [PCP 5] [DEI 0] [VID ${dot1qVlan}]`;
      egressOutcome = isNativeOnSw1
        ? `Frame transmitted without 802.1Q header because it matches Native VLAN ${dot1qVlan}. SW-2 associates it with Native VLAN ${dot1qVlan}.`
        : `Frame encapsulated with 4-byte 802.1Q header on trunk, de-encapsulated at SW-2, and delivered untagged to destination access port in VLAN ${dot1qVlan}.`;
    }

    return {
      isVlanAllowed,
      isNativeMismatch,
      isNativeOnSw1,
      wireRepresentation,
      egressOutcome,
    };
  }, [dot1qVlan, trunkNativeVlanSw1, trunkNativeVlanSw2, trunkAllowedVlans]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 3: STP / RSTP ROOT BRIDGE ELECTION & LOOP SANDBOX                */
  /* -------------------------------------------------------------------------- */
  const [swAPriority, setSwAPriority] = useState(4096);
  const [swBPriority, setSwBPriority] = useState(32768);
  const [swCPriority, setSwCPriority] = useState(32768);
  const [linkABAlive, setLinkABAlive] = useState(true);
  const [stpEnabled, setStpEnabled] = useState(true);

  const stpTopology = useMemo(() => {
    if (!stpEnabled) {
      return {
        rootBridge: "NONE (STP DISABLED)",
        status: "BROADCAST STORM ACTIVE",
        statusColor: "text-rose-400 bg-rose-950/40 border-rose-800",
        ports: {
          swA_to_B: "FORWARDING (LOOP)",
          swB_to_C: "FORWARDING (LOOP)",
          swC_to_A: "FORWARDING (LOOP)",
        },
        detail:
          "CRITICAL: STP disabled on redundant triangle topology! Broadcast frames circulate indefinitely with no TTL. Switch CPUs pegged at 100%, CAM tables thrashing, network completely unusable!",
      };
    }

    // Determine Root Bridge (lowest priority, then MAC if tied)
    // MACs: SW-A: 00:1A:11, SW-B: 00:1A:22, SW-C: 00:1A:33
    let root = "SW-A";
    let lowestPriority = swAPriority;

    if (swBPriority < lowestPriority) {
      root = "SW-B";
      lowestPriority = swBPriority;
    }
    if (swCPriority < lowestPriority) {
      root = "SW-C";
      lowestPriority = swCPriority;
    }

    let portStatus = {};
    if (linkABAlive) {
      if (root === "SW-A") {
        portStatus = {
          swA_to_B: "Designated (Forwarding)",
          swA_to_C: "Designated (Forwarding)",
          swB_to_A: "Root Port (Forwarding)",
          swB_to_C: "Designated (Forwarding)",
          swC_to_A: "Root Port (Forwarding)",
          swC_to_B: "Alternate Port (BLOCKING / DISCARDING)",
        };
      } else if (root === "SW-B") {
        portStatus = {
          swB_to_A: "Designated (Forwarding)",
          swB_to_C: "Designated (Forwarding)",
          swA_to_B: "Root Port (Forwarding)",
          swC_to_B: "Root Port (Forwarding)",
          swA_to_C: "Alternate Port (BLOCKING / DISCARDING)",
        };
      } else {
        portStatus = {
          swC_to_A: "Designated (Forwarding)",
          swC_to_B: "Designated (Forwarding)",
          swA_to_C: "Root Port (Forwarding)",
          swB_to_C: "Root Port (Forwarding)",
          swA_to_B: "Alternate Port (BLOCKING / DISCARDING)",
        };
      }
    } else {
      // Link AB failed
      portStatus = {
        swA_to_B: "LINK DOWN",
        swB_to_A: "LINK DOWN",
        swA_to_C: "Root/Designated (Forwarding)",
        swC_to_A: "Root/Designated (Forwarding)",
        swB_to_C: "Root Port (Forwarding)",
        swC_to_B: "Designated Port (TRANSITIONED TO FORWARDING)",
      };
    }

    return {
      rootBridge: root,
      status: linkABAlive ? "STABLE LOOP-FREE TOPOLOGY" : "FAILOVER COMPLETE (RSTP RECONVERGED)",
      statusColor: linkABAlive
        ? "text-emerald-400 bg-emerald-950/40 border-emerald-800"
        : "text-amber-400 bg-amber-950/40 border-amber-800",
      ports: portStatus,
      detail: linkABAlive
        ? `${root} elected Root Bridge (Priority ${lowestPriority}). Redundant link between SW-B and SW-C blocked to prevent broadcast storms.`
        : `Physical Link SW-A <-> SW-B severed! RSTP exchanged rapid proposal/agreement handshake; previously blocked port on SW-C unblocked in <1 second with zero packet loop!`,
    };
  }, [swAPriority, swBPriority, swCPriority, linkABAlive, stpEnabled]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 4: INTER-VLAN ROUTING & GATEWAY FLOW (ROAS VS. SVI)             */
  /* -------------------------------------------------------------------------- */
  const [routingMode, setRoutingMode] = useState("svi"); // roas | svi
  const [firewallPolicyPermit, setFirewallPolicyPermit] = useState(true);

  const interVlanTrace = useMemo(() => {
    const srcHost = { ip: "10.10.10.10", mac: "00:1A:2B:11:11:11", vlan: 10, gateway: "10.10.10.1" };
    const dstHost = { ip: "10.10.40.10", mac: "00:50:56:44:44:44", vlan: 40, gateway: "10.10.40.1" };
    const gatewayMac = routingMode === "svi" ? "00:00:0C:07:AC:01 (SVI ASIC)" : "00:01:96:12:34:56 (Router Subinterface)";

    if (!firewallPolicyPermit) {
      return {
        status: "DENIED BY ACCESS CONTROL POLICY",
        verdictColor: "text-rose-400 bg-rose-950/40 border-rose-800",
        steps: [
          {
            step: 1,
            title: "Local Subnet Check & ARP",
            desc: `Host ${srcHost.ip} checks destination ${dstHost.ip}. Destination is on remote subnet. Sends frame to Default Gateway MAC (${gatewayMac}).`,
          },
          {
            step: 2,
            title: "Gateway ACL Inspection",
            desc: `Layer 3 Gateway receives frame. Evaluates inter-VLAN ACL: 'access-list 101 deny ip 10.10.10.0 0.0.0.255 10.10.40.0 0.0.0.255'. Packet dropped.`,
          },
        ],
      };
    }

    return {
      status: `FORWARDED VIA ${routingMode.toUpperCase()}`,
      verdictColor: "text-emerald-400 bg-emerald-950/40 border-emerald-800",
      steps: [
        {
          step: 1,
          title: "Ingress & Gateway ARP (VLAN 10)",
          desc: `Host ${srcHost.ip} encapsulates packet in Ethernet frame: [SMAC: ${srcHost.mac} -> DMAC: ${gatewayMac}]. IP packet intact: [SIP: ${srcHost.ip} -> DIP: ${dstHost.ip}].`,
        },
        {
          step: 2,
          title: routingMode === "svi" ? "Wire-Speed ASIC Route Lookup (SVI)" : "Router-on-a-Stick Subinterface Processing",
          desc: routingMode === "svi"
            ? `Layer 3 Switch performs hardware TCAM lookup for 10.10.40.10 via SVI interface Vlan40. Decrements IP TTL by 1.`
            : `Frame travels over 802.1Q trunk (tagged VID 10) to physical router subinterface Gi0/0.10. Router routes packet to Gi0/0.40.`,
        },
        {
          step: 3,
          title: "MAC Header Rewrite & Egress (VLAN 40)",
          desc: `Gateway replaces Ethernet header: [SMAC: ${gatewayMac} -> DMAC: ${dstHost.mac}]. IP addresses remain UNCHANGED: [SIP: ${srcHost.ip} -> DIP: ${dstHost.ip}]. Frame forwarded into VLAN 40.`,
        },
      ],
    };
  }, [routingMode, firewallPolicyPermit]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 5: LACP LINK AGGREGATION & REDUNDANCY SANDBOX                    */
  /* -------------------------------------------------------------------------- */
  const [hashAlgorithm, setHashAlgorithm] = useState("l4"); // l2 | l3 | l4
  const [activeMemberLinks, setActiveMemberLinks] = useState([true, true, true, true]); // 4 links

  const lacpStatus = useMemo(() => {
    const aliveCount = activeMemberLinks.filter(Boolean).length;
    const aggregateBandwidth = aliveCount * 1; // Gbps

    // 6 sample traffic flows
    const sampleFlows = [
      { id: "Flow 1", srcIp: "10.10.10.15", dstIp: "10.10.40.50", port: "443 (HTTPS)", hashL2: 0, hashL3: 1, hashL4: 2 },
      { id: "Flow 2", srcIp: "10.10.10.22", dstIp: "10.10.40.50", port: "80 (HTTP)", hashL2: 1, hashL3: 2, hashL4: 0 },
      { id: "Flow 3", srcIp: "10.10.10.38", dstIp: "10.10.40.80", port: "22 (SSH)", hashL2: 0, hashL3: 3, hashL4: 1 },
      { id: "Flow 4", srcIp: "10.10.20.12", dstIp: "10.10.40.50", port: "3306 (MySQL)", hashL2: 2, hashL3: 0, hashL4: 3 },
      { id: "Flow 5", srcIp: "10.10.20.44", dstIp: "10.10.40.90", port: "5432 (Postgres)", hashL2: 3, hashL3: 1, hashL4: 2 },
      { id: "Flow 6", srcIp: "10.10.30.99", dstIp: "10.10.40.50", port: "443 (HTTPS)", hashL2: 1, hashL3: 2, hashL4: 0 },
    ];

    // Assign flows to surviving active links
    const activeIndices = activeMemberLinks
      .map((alive, idx) => (alive ? idx : -1))
      .filter((idx) => idx !== -1);

    const mappedFlows = sampleFlows.map((f) => {
      let rawHash = hashAlgorithm === "l2" ? f.hashL2 : hashAlgorithm === "l3" ? f.hashL3 : f.hashL4;
      const assignedPortIndex = activeIndices.length > 0 ? activeIndices[rawHash % activeIndices.length] : -1;
      return {
        ...f,
        assignedLink: assignedPortIndex >= 0 ? `Gi1/0/${assignedPortIndex + 1}` : "BLOCKED (NO ACTIVE LINKS)",
      };
    });

    return {
      aliveCount,
      aggregateBandwidth,
      mappedFlows,
      isTotalFailure: aliveCount === 0,
    };
  }, [hashAlgorithm, activeMemberLinks]);

  const toggleLinkState = (index) => {
    setActiveMemberLinks((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  /* -------------------------------------------------------------------------- */
  /* LAB AUDIT CHECKLIST (0/8)                                                  */
  /* -------------------------------------------------------------------------- */
  const [labChecklist, setLabChecklist] = useState({
    vlanPlan: false,
    accessPorts: false,
    trunkPrune: false,
    nativeMatch: false,
    interVlanRouting: false,
    rstpPriority: false,
    lacpConfig: false,
    portSecurity: false,
  });

  const completedChecklistCount = Object.values(labChecklist).filter(Boolean).length;

  const toggleLabChecklist = (key) => {
    setLabChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  /* -------------------------------------------------------------------------- */
  /* 10-QUESTION COMPREHENSIVE ASSESSMENT                                       */
  /* -------------------------------------------------------------------------- */
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const quizQuestions = [
    {
      id: "q1",
      question: "What is the primary architectural purpose of a VLAN (Virtual Local Area Network)?",
      options: [
        "To encrypt all Ethernet frames traversing switch ports.",
        "To partition a single physical switch into isolated Layer 2 broadcast domains.",
        "To replace the need for Layer 3 IP addressing.",
        "To eliminate the need for Spanning Tree Protocol.",
      ],
      correct: 1,
      rationale:
        "A VLAN creates an isolated logical Layer 2 network on shared physical hardware. Broadcast frames, unknown unicasts, and multicasts remain strictly confined within the originating VLAN, improving performance, security, and administrative organization.",
    },
    {
      id: "q2",
      question: "How does a Layer 2 Ethernet switch populate its MAC address (CAM) table?",
      options: [
        "By reading the destination MAC address of incoming frames.",
        "By querying a central DNS server over UDP port 53.",
        "By inspecting the source MAC address and ingress port/VLAN of arriving frames.",
        "By generating random ARP requests every 30 seconds.",
      ],
      correct: 2,
      rationale:
        "Switches learn dynamically from the SOURCE MAC address of incoming frames. When a frame arrives on a port, the switch records the source MAC address, incoming port, and associated VLAN in its Content Addressable Memory (CAM) table with an aging timer (typically 300 seconds).",
    },
    {
      id: "q3",
      question: "What is the function of the 4-byte IEEE 802.1Q tag inserted into Ethernet frames on a trunk?",
      options: [
        "It provides AES-256 cryptographic encryption for frame payloads.",
        "It multiplexes traffic by inserting a Tag Protocol Identifier (0x8100) and a 12-bit VLAN Identifier (VID 1–4094).",
        "It replaces the source IP address with the switch management IP.",
        "It guarantees 10 Gbps transmission speed over copper cables.",
      ],
      correct: 1,
      rationale:
        "IEEE 802.1Q tags allow a single physical trunk link to carry multiple VLANs. The 4-byte header consists of a 2-byte TPID (0x8100), 3 bits of 802.1p priority (PCP), 1 bit Drop Eligible Indicator (DEI), and a 12-bit VLAN ID (VID) supporting up to 4,094 distinct VLANs.",
    },
    {
      id: "q4",
      question: "Why can an uncontrolled Layer 2 loop cause catastrophic network failure within seconds?",
      options: [
        "Ethernet frames lack a Time-To-Live (TTL) field, causing broadcasts to circulate and multiply indefinitely.",
        "Routers automatically disconnect all cables when loops occur.",
        "Layer 2 loops instantly overheat physical switch power supplies.",
        "Spanning Tree doubles the frame payload size on every hop.",
      ],
      correct: 0,
      rationale:
        "Unlike Layer 3 IPv4 packets (which have a TTL field that is decremented and dropped at zero), standard Layer 2 Ethernet frames have NO TTL field. When a loop exists, broadcast frames circulate continuously, multiplying exponentially into broadcast storms, thrashing CAM tables and exhausting switch CPU/ASIC buffers.",
    },
    {
      id: "q5",
      question: "In Rapid Spanning Tree Protocol (RSTP / 802.1w), how is the Root Bridge elected?",
      options: [
        "The switch with the highest IP address is elected.",
        "The switch with the lowest Bridge ID (Priority + Base MAC Address) is elected.",
        "The switch with the most physical ports connected is elected.",
        "The router always commands the switches to appoint it as root.",
      ],
      correct: 1,
      rationale:
        "The Bridge ID consists of a 2-byte Bridge Priority (default 32768, configurable in increments of 4096) plus the 6-byte system MAC address. Switches exchange BPDUs; the switch advertising the LOWEST Bridge ID wins the election and becomes the Root Bridge.",
    },
    {
      id: "q6",
      question: "What security vulnerability occurs if two interconnected trunk switches have mismatched Native VLAN configurations?",
      options: [
        "The switches automatically downgrade to 10 Mbps half-duplex.",
        "VLAN Hopping / Leaking: Untagged frames sent on one switch's native VLAN are accepted by the remote switch into a different VLAN without passing through a router.",
        "The switch management IP address becomes public on the internet.",
        "All 802.1Q tags are permanently converted into TCP SYN cookies.",
      ],
      correct: 1,
      rationale:
        "If Switch A has Native VLAN 1 and Switch B has Native VLAN 99, any untagged frame transmitted by Switch A (in VLAN 1) will be received by Switch B and automatically assigned to VLAN 99! This causes unintended cross-VLAN traffic leakage and bypasses inter-VLAN firewall rules.",
    },
    {
      id: "q7",
      question: "What distinguishes a Layer 3 Switch with SVIs from a Router-on-a-Stick (ROAS) topology?",
      options: [
        "Layer 3 switches only support unencrypted HTTP traffic.",
        "Layer 3 switches perform inter-VLAN routing in specialized ASIC hardware at full wire speed without sharing a single physical bottleneck link.",
        "Router-on-a-Stick does not support 802.1Q trunking.",
        "SVIs can only route between a maximum of two VLANs.",
      ],
      correct: 1,
      rationale:
        "In Router-on-a-Stick, all inter-VLAN traffic must traverse a single physical trunk link to an external router, creating a severe bottleneck. A Layer 3 switch uses Switched Virtual Interfaces (SVIs) and dedicated forwarding ASICs to route packets between VLANs internally at full wire speed (terabits/sec).",
    },
    {
      id: "q8",
      question: "Why doesn't a 4 x 1 Gbps LACP link aggregation bundle (EtherChannel) allow a single TCP file transfer to run at 4 Gbps?",
      options: [
        "LACP only allows one cable to be active while three are permanently blocked.",
        "Traffic is distributed using a deterministic hash of packet headers (e.g. SIP/DIP/Port); all packets of a single TCP stream follow the same physical link to prevent out-of-order delivery.",
        "EtherChannel disables TCP window scaling.",
        "Copper Ethernet cannot carry more than 1 Gbps under any circumstances.",
      ],
      correct: 1,
      rationale:
        "To prevent packet reordering (which severely degrades TCP throughput), link aggregation algorithms hash flow headers (MAC, IP, or L4 ports) so that any given individual flow is pinned to a single physical member link. Multiple concurrent flows achieve aggregated throughput, but a single flow is limited to 1 Gbps.",
    },
    {
      id: "q9",
      question: "What is the primary operational purpose of the spanning-tree bpduguard enable command on access ports?",
      options: [
        "To speed up DHCP address assignment for laptops.",
        "To protect edge ports with PortFast by immediately shutting down (err-disabling) the port if an unauthorized switch or BPDU is detected.",
        "To encrypt all BPDUs with AES-128.",
        "To allow clients to become secondary root bridges.",
      ],
      correct: 1,
      rationale:
        "PortFast bypasses normal listening/learning states on host ports. If an employee connects an unauthorized switch or creates a loop on an edge port, BPDU Guard immediately places the port into an 'err-disabled' state upon receiving a BPDU, preventing rogue switches from hijacking the spanning-tree topology.",
    },
    {
      id: "q10",
      question: "A company segments its network into Staff (VLAN 10) and Servers (VLAN 40). What is required to permit Staff web browsing to servers while preventing Staff SSH access?",
      options: [
        "Simply assigning different VLAN numbers without any routing.",
        "Enabling inter-VLAN routing combined with an Access Control List (ACL) or stateful firewall policy that permits TCP 443 and denies TCP 22.",
        "Configuring a Native VLAN mismatch.",
        "Disabling Spanning Tree Protocol on all access ports.",
      ],
      correct: 1,
      rationale:
        "'Routing is not authorization.' Once inter-VLAN routing is enabled, the router forwards all IP traffic between subnets by default. An explicit stateless ACL or stateful firewall rule must be applied on the gateway to permit HTTP/HTTPS (port 80/443) and deny SSH (port 22).",
    },
  ];

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correct) {
        score += 1;
      }
    });
    return score;
  };

  /* -------------------------------------------------------------------------- */
  /* COPYABLE SRE ENTERPRISE LAN DESIGN & AUDIT REPORT TEMPLATE                */
  /* -------------------------------------------------------------------------- */
  const lanAuditReportTemplate = `# ENTERPRISE LAN ARCHITECTURE & RESILIENCE AUDIT REPORT
**Document Reference:** SRE-LAN-AUDIT-2026-Q4  
**Date:** ${new Date().toISOString().split("T")[0]}  
**Target Infrastructure:** Core Campus Switching & Distribution Block (Data Center & Campus LAN)  
**Lead Network Architect:** Enterprise Infrastructure & Reliability Engineering Team  
**Assessment Scope:** Hierarchical Switching, 802.1Q Trunks, Inter-VLAN Routing, RSTP & LACP Resilience  

---

## 1. EXECUTIVE SUMMARY
A comprehensive technical audit was executed across the enterprise campus switching topology consisting of two distribution/core Layer 3 switches (Cisco Catalyst 9500 / Arista 7050X) and four access switches (Cisco Catalyst 9200).

- **Architectural Topology:** Two-Tier Collapsed Core / Distribution with dual 10G LACP Port-Channels.
- **Overall Posture:** RESILIENT & SECURED (Passing 8 of 8 Baseline Checks)
- **Verified Resilience:** Physical failure of primary distribution switch uplink resulted in **380ms RSTP reconvergence** with zero frame looping or packet loss across surviving links.

---

## 2. LOGICAL VLAN & ADDRESSING ARCHITECTURE
| VLAN ID | VLAN Name | Subnet | Gateway IP | Forwarding Mechanism | Security Zone |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **VLAN 10** | STAFF | 10.10.10.0/24 | 10.10.10.1 | SVI (Core-SW01 / HSRP) | Corporate Access (802.1X) |
| **VLAN 20** | ENGINEERING | 10.10.20.0/24 | 10.10.20.1 | SVI (Core-SW01 / HSRP) | Restricted Dev Subnet |
| **VLAN 30** | GUEST | 10.10.30.0/24 | 10.10.30.1 | Firewall Subinterface | Isolated (Internet Only) |
| **VLAN 40** | SERVERS | 10.10.40.0/24 | 10.10.40.1 | SVI (Core-SW01 / HSRP) | DMZ / Core Workloads |
| **VLAN 99** | MANAGEMENT | 10.10.99.0/24 | 10.10.99.1 | SVI (Out-of-Band) | Admin Only (SSH / SNMPv3) |
| **VLAN 999**| UNUSED-NATIVE| None (Blackhole) | N/A | Trunk Native Untagged | Native Trunk Parking |

---

## 3. SPANNING TREE & REDUNDANCY VALIDATION
- **Spanning Tree Flavor:** Rapid PVST+ (IEEE 802.1w)
- **Root Bridge Assignment:**
  - Primary Root: \`Core-SW01\` (Bridge Priority: 4096)
  - Secondary Root: \`Core-SW02\` (Bridge Priority: 8192)
  - Access Switches: Default Priority 32768
- **Edge Port Defenses:**
  - \`spanning-tree portfast\` enabled globally on all access ports.
  - \`spanning-tree bpduguard enable\` enforced on all endpoint ports (prevents rogue root injection).
  - \`spanning-tree rootguard\` configured on distribution downlink ports.

---

## 4. LINK AGGREGATION & LACP VALIDATION
- **Port-Channel 1 (Core Interconnect):** 2 x 10Gbps SFP+ (LACP Mode Active).
- **Load Balancing Hash:** Layer 4 Source/Destination IP and TCP/UDP Port (\`src-dst-mixed-ip-port\`).
- **Failover Test:** Severing member link \`Te1/0/1\` resulted in seamless re-hashing across \`Te1/0/2\` with **0 packet drops** on active TCP sessions.

---

## 5. LAYER 2 SWITCH HARDENING & ACCESS CONTROLS
1. **Dynamic Trunking Protocol (DTP):** Disabled globally on all access ports (\`switchport nonegotiate\`).
2. **Unused Port Isolation:** All unassigned switch ports administratively disabled (\`shutdown\`) and assigned to parking VLAN 999.
3. **DHCP Snooping & DAI:** Enabled on VLANs 10, 20, 30. Core uplinks configured as \`trusted\`. Dynamic ARP Inspection dropped 42 forged gratuitous ARP frames during test attack.
4. **Port Security:** Enforced on high-security ports (\`maximum 2\`, \`violation shutdown\`, \`mac-address sticky\`).

---

## 6. SIGN-OFF & VERIFICATION
- [x] Inter-VLAN routing verified between Staff and Server subnets.
- [x] Guest to Staff communication blocked by firewall ACL.
- [x] RSTP failover confirmed < 1.0 second.
- **Approved by:** Lead Network Reliability Engineer`;

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 font-sans pb-16">
      {/* Top Breadcrumb & Navigation Bar */}
      <div className="border-b border-[#e7e3da] bg-[#fbfaf7]/80 backdrop-blur sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/learning/networks/wireless")}
              className="p-1.5 rounded-lg border border-[#e7e3da] bg-white hover:bg-stone-50 text-stone-600 hover:text-stone-900 transition cursor-pointer"
              title="Return to Module 13: Wireless & Mobile Networking"
            >
              <ArrowLeft size={16} />
            </button>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-orange-600 font-mono">
                Computer Networks &bull; Module 14
              </div>
              <h1 className="text-sm font-bold text-stone-900 leading-tight">
                Switching, VLANs &amp; Enterprise LAN Design
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-stone-600 bg-stone-100 px-2.5 py-1 rounded-md border border-stone-200">
              <Network size={13} className="text-orange-600" />
              <span>802.1Q &bull; STP/RSTP &bull; LACP &bull; Inter-VLAN Routing</span>
            </span>
            <button
              onClick={() => setActiveTab("quiz")}
              className="px-3 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-sm shadow-orange-900/10"
            >
              <Award size={14} />
              <span>Assessment</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {/* Module Header Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#e7e3da]">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold font-mono">
                <Layers size={13} />
                <span>Enterprise Switching &bull; Broadcast Domains &bull; 802.1w RSTP &bull; Port-Channels</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
                Switching, VLANs &amp; Enterprise LAN Design
              </h2>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                Master enterprise switching architectures (access, distribution, core), Ethernet CAM table learning, IEEE 802.1Q VLAN trunking, inter-VLAN routing via Router-on-a-Stick (ROAS) and Switched Virtual Interfaces (SVIs), Spanning Tree Protocol (STP/RSTP) loop elimination, Link Aggregation Control Protocol (LACP), and Layer 2 switch port security.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 self-start md:self-center shrink-0">
              <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200 text-center">
                <div className="text-xs font-mono text-stone-500">Architecture</div>
                <div className="text-lg font-black text-stone-900 font-mono">3-Tier / Spine</div>
              </div>
              <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200 text-center">
                <div className="text-xs font-mono text-stone-500">Loop Control</div>
                <div className="text-lg font-black text-stone-900 font-mono">802.1w RSTP</div>
              </div>
              <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200 text-center col-span-2 sm:col-span-1">
                <div className="text-xs font-mono text-stone-500">Link Bundling</div>
                <div className="text-lg font-black text-stone-900 font-mono">802.3ad LACP</div>
              </div>
            </div>
          </div>

          {/* Module Navigation Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 no-scrollbar">
            {[
              { id: "theory", label: "Curriculum Theory", icon: BookOpen },
              { id: "mac-cam-sim", label: "MAC Learning & CAM Simulator", icon: Database },
              { id: "dot1q-sim", label: "802.1Q Trunking Inspector", icon: Cable },
              { id: "stp-sim", label: "STP / RSTP Loop Sandbox", icon: GitFork },
              { id: "intervlan-sim", label: "Inter-VLAN Routing Flow", icon: RouterIcon },
              { id: "lacp-sim", label: "LACP EtherChannel Failover", icon: Workflow },
              { id: "cli", label: "CLI & Diagnostics", icon: Terminal },
              { id: "quiz", label: "Knowledge Assessment", icon: Award },
              { id: "lab-report", label: "Lab Checklist & Audit", icon: ListChecks },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-stone-900 text-white shadow-sm"
                      : "bg-stone-100/70 hover:bg-stone-200/70 text-stone-600 hover:text-stone-900"
                  }`}
                >
                  <Icon size={14} className={isActive ? "text-orange-400" : "text-stone-500"} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Global Track Module Navigation Strip */}
        <div className="mb-6">
          <ModuleNav track="networks" currentModuleId="switching" />
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* TAB 1: THEORY CURRICULUM                                           */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "theory" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar Sticky Navigation */}
            <div className="lg:col-span-1 space-y-2">
              <div className="bg-white rounded-2xl p-4 border border-[#e7e3da] sticky top-20 shadow-sm">
                <div className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider mb-3">
                  Module 14 Sections
                </div>
                <div className="space-y-1">
                  {[
                    { id: "14.1", title: "14.1 Enterprise LAN Architecture" },
                    { id: "14.2", title: "14.2 Ethernet Switching & CAM Tables" },
                    { id: "14.3", title: "14.3 VLANs & 802.1Q Trunking" },
                    { id: "14.4", title: "14.4 Inter-VLAN Routing (ROAS & SVI)" },
                    { id: "14.5", title: "14.5 STP & RSTP Loop Prevention" },
                    { id: "14.6", title: "14.6 Link Aggregation & LACP" },
                    { id: "14.7", title: "14.7 Switch Port Security & 802.1X" },
                    { id: "14.8", title: "14.8 Departmental Segmentation" },
                    { id: "14.9", title: "14.9 Failure Domains & FHRP" },
                    { id: "14.10", title: "14.10 Hands-on Lab Walkthrough" },
                    { id: "14.11", title: "14.11 Diagnostic CLI & Wireshark" },
                    { id: "14.12", title: "14.12 Enterprise LAN Audit & Report" },
                  ].map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => setActiveSection(sec.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition flex items-center justify-between cursor-pointer ${
                        activeSection === sec.id
                          ? "bg-orange-50 text-orange-700 border border-orange-200"
                          : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                      }`}
                    >
                      <span>{sec.title}</span>
                      {activeSection === sec.id && <ChevronRight size={13} className="text-orange-600" />}
                    </button>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-stone-100">
                  <div className="text-[11px] text-stone-500 leading-relaxed">
                    Vendor-neutral enterprise campus and data center networking synthesized from Cisco, Arista, and IEEE 802 standards.
                  </div>
                </div>
              </div>
            </div>

            {/* Main Theory Content Body */}
            <div className="lg:col-span-3 space-y-6">
              {/* SECTION 14.1 */}
              {activeSection === "14.1" && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest">
                      Section 14.1
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      Enterprise LAN Architecture &amp; The Hierarchical Model
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-stone-700">
                    An enterprise Local Area Network (LAN) connects hundreds or thousands of endpoints across buildings, floors, and data centers. Connecting every switch together in an ad-hoc mesh results in unpredictable forwarding loops, sprawling broadcast domains, and catastrophic failure cascades. To prevent this, enterprise networks deploy standardized hierarchical models.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <div className="text-xs font-mono font-bold text-orange-600">Access Layer (Edge)</div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Connects user workstations, laptops, IP phones, wireless Access Points, printers, and IoT sensors. Enforces edge security: 802.1X port authentication, Port Security, Power over Ethernet (PoE/PoE+), VLAN assignment, and DHCP Snooping.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <div className="text-xs font-mono font-bold text-blue-600">Distribution Layer (Policy)</div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Aggregates multiple access switches. Acts as the primary Layer 3 boundary: terminates VLANs, provides default gateways (SVIs), enforces inter-VLAN access control lists (ACLs), performs route summarization, and manages link redundancy.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <div className="text-xs font-mono font-bold text-emerald-600">Core Layer (High-Speed Backbone)</div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Provides resilient, low-latency, ultra-high-speed transport (40G/100G/400G) between distribution blocks, data centers, and internet edges. Operates strictly as a packet-switching backbone with zero packet filtering or CPU-intensive policy inspection.
                      </p>
                    </div>
                  </div>

                  {/* ASCII Diagram of 3-Tier and Collapsed Core */}
                  <div className="p-5 rounded-2xl bg-stone-900 text-white font-mono text-xs space-y-3">
                    <div className="text-stone-400 text-[10px] uppercase font-bold tracking-wider">
                      Figure 14.1: Three-Tier Campus vs. Two-Tier Collapsed Core
                    </div>
                    <pre className="text-stone-300 text-[11px] leading-relaxed overflow-x-auto">
{`[Three-Tier Campus Architecture]             [Two-Tier Collapsed Core]
         +-----------------+                          +-----------------+
         |   Core Layer    |                          |  Core / Distro  |
         | (High-Speed L3) |                          |  Layer (L3 SVI) |
         +--------+--------+                          +--------+--------+
                  |                                            |
         +--------+--------+                          +--------+--------+
         |  Distribution   |                          |  Access Layer   |
         | (L3 SVI & ACLs) |                          | (L2 Edge Ports) |
         +--------+--------+                          +-----------------+
                  |
         +--------+--------+
         |  Access Layer   |
         | (L2 Endpoints)  |
         +-----------------+`}
                    </pre>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    <strong>Modern Alternatives:</strong> Modern data center architectures favor <strong>Leaf-Spine (Clos)</strong> topologies where every leaf switch connects to every spine switch, providing deterministic east-west latency. Meanwhile, modern campus networks frequently deploy <strong>routed access</strong>, pushing Layer 3 routing down to the access switch stack to eliminate spanning-tree loops entirely.
                  </p>
                </div>
              )}

              {/* SECTION 14.2 */}
              {activeSection === "14.2" && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest">
                      Section 14.2
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      Ethernet Switching Fundamentals &amp; CAM Table Mechanics
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-stone-700">
                    Unlike obsolete shared-media hubs (which repeated incoming electrical signals out all ports indiscriminately, creating a single collision domain), a modern Ethernet switch operates at Layer 2 in full duplex. Each switch port is an isolated collision domain.
                  </p>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                    <div className="text-xs font-mono font-bold text-stone-900">
                      The Switch Forwarding Logic (Content Addressable Memory / CAM)
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs text-stone-700 font-mono">
                      <div className="p-3 bg-white rounded-xl border border-stone-200">
                        <div className="font-bold text-stone-900">1. Learn</div>
                        <p className="text-[11px] text-stone-500 font-sans mt-1">
                          Switch inspects the <strong>SOURCE MAC</strong> address of every incoming frame and records: <code>[VLAN, Source MAC, Ingress Port, Age=0]</code>.
                        </p>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-stone-200">
                        <div className="font-bold text-stone-900">2. Lookup</div>
                        <p className="text-[11px] text-stone-500 font-sans mt-1">
                          Switch consults its CAM table for the <strong>DESTINATION MAC</strong> address in the same VLAN.
                        </p>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-stone-200">
                        <div className="font-bold text-stone-900">3. Forward</div>
                        <p className="text-[11px] text-stone-500 font-sans mt-1">
                          If destination is known, the frame is switched directly out the specified port (selective unicast).
                        </p>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-stone-200">
                        <div className="font-bold text-stone-900">4. Flood</div>
                        <p className="text-[11px] text-stone-500 font-sans mt-1">
                          If destination is unknown or broadcast (<code>FF:FF:FF:FF:FF:FF</code>), the switch floods the frame out all ports in the same VLAN except the ingress port.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
                    <div className="text-xs font-bold text-amber-900 font-mono flex items-center gap-2">
                      <AlertTriangle size={14} />
                      <span>Security Consideration: MAC Table Flooding Attacks</span>
                    </div>
                    <p className="text-xs text-amber-900/90 leading-relaxed">
                      Physical CAM tables have finite capacity (e.g., 16,000 to 64,000 entries). An attacker running tools like <code>macof</code> can transmit tens of thousands of frames with randomized source MAC addresses every second. Once the CAM table fills, the switch cannot learn new addresses and enters <strong>fail-open mode</strong>, flooding all unicast traffic out every port like a hub, allowing the attacker to sniff confidential conversations! Defend against this using <strong>Port Security</strong>.
                    </p>
                  </div>
                </div>
              )}

              {/* SECTION 14.3 */}
              {activeSection === "14.3" && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest">
                      Section 14.3
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      VLANs &amp; IEEE 802.1Q Trunking Architecture
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-stone-700">
                    A Virtual Local Area Network (VLAN) creates a logical Layer 2 broadcast domain on shared switching hardware. Devices in different VLANs cannot communicate at Layer 2, even if connected to adjacent ports on the same physical switch.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <div className="text-xs font-mono font-bold text-stone-900">Access Ports (Endpoint Edge)</div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Configured for a single VLAN (e.g. <code>switchport access vlan 10</code>). Frames entering or leaving an access port to an ordinary PC or printer are <strong>completely untagged</strong> on the physical wire. The switch tags or associates the frame internally.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <div className="text-xs font-mono font-bold text-orange-700">Trunk Ports (Switch Uplinks)</div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Carries traffic for multiple VLANs across a single physical cable using <strong>IEEE 802.1Q tagging</strong>. Connects switches to switches, switches to routers, or switches to hypervisor servers (ESXi, Proxmox).
                      </p>
                    </div>
                  </div>

                  {/* 802.1Q Tag Anatomy */}
                  <div className="p-4 rounded-2xl bg-stone-900 text-white font-mono text-xs space-y-3">
                    <div className="text-stone-400 text-[10px] uppercase font-bold tracking-wider">
                      Figure 14.2: IEEE 802.1Q 4-Byte Tag Frame Format
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center text-xs">
                      <div className="p-2 bg-stone-800 rounded-lg">
                        <div className="text-orange-400 font-bold">TPID (16 bits)</div>
                        <div className="text-[10px] text-stone-400 mt-0.5">0x8100 (Tag Identifier)</div>
                      </div>
                      <div className="p-2 bg-stone-800 rounded-lg">
                        <div className="text-emerald-400 font-bold">PCP (3 bits)</div>
                        <div className="text-[10px] text-stone-400 mt-0.5">802.1p CoS / QoS (0-7)</div>
                      </div>
                      <div className="p-2 bg-stone-800 rounded-lg">
                        <div className="text-blue-400 font-bold">DEI (1 bit)</div>
                        <div className="text-[10px] text-stone-400 mt-0.5">Drop Eligible Indicator</div>
                      </div>
                      <div className="p-2 bg-stone-800 rounded-lg">
                        <div className="text-amber-400 font-bold">VID (12 bits)</div>
                        <div className="text-[10px] text-stone-400 mt-0.5">VLAN ID (1 to 4094)</div>
                      </div>
                    </div>
                    <div className="text-[11px] text-stone-400">
                      Inserted immediately after the Source MAC address and before the original EtherType field.
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <div className="text-xs font-mono font-bold text-stone-900">
                      The Native VLAN &amp; VLAN Hopping Prevention
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      By default on 802.1Q trunks, traffic belonging to the <strong>Native VLAN</strong> (typically VLAN 1 by default) is transmitted across the trunk <strong>untagged</strong>. If an attacker on an access port sends double-tagged frames (outer tag = Native VLAN, inner tag = Target VLAN), the first switch strips the outer tag without rewriting, and the second switch forwards the inner tagged frame directly into the victim VLAN!
                    </p>
                    <p className="text-xs text-stone-700 font-mono bg-stone-100 p-2.5 rounded-lg">
                      Defensive Standard: Set the Native VLAN to an unused blackhole ID (e.g. <code>VLAN 999</code>) on both ends of the trunk, and prune it from data access.
                    </p>
                  </div>
                </div>
              )}

              {/* SECTION 14.4 */}
              {activeSection === "14.4" && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest">
                      Section 14.4
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      Inter-VLAN Routing: Router-on-a-Stick vs. Layer 3 SVIs
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-stone-700">
                    Because VLANs partition Layer 2 networks into completely isolated broadcast domains, traffic cannot cross between VLANs without a Layer 3 routing engine. Inter-VLAN routing forwards IP packets between subnets while rewriting Layer 2 MAC headers.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <div className="text-xs font-mono font-bold text-stone-900">
                        Option A: Router-on-a-Stick (ROAS)
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        An external router connects to an access switch via a single physical 802.1Q trunk. The physical router interface (<code>Gi0/0</code>) is divided into logical subinterfaces:
                      </p>
                      <pre className="text-[11px] font-mono bg-stone-100 p-2 rounded-lg text-stone-800">
{`interface Gi0/0.10
 encapsulation dot1Q 10
 ip address 10.10.10.1 255.255.255.0
interface Gi0/0.20
 encapsulation dot1Q 20
 ip address 10.10.20.1 255.255.255.0`}
                      </pre>
                      <p className="text-[11px] text-stone-500">
                        Inexpensive and useful in small branch offices, but the shared physical trunk link becomes a severe bandwidth bottleneck.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <div className="text-xs font-mono font-bold text-emerald-800">
                        Option B: Layer 3 Switch with SVIs (Enterprise Standard)
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        The switch hardware contains internal routing logic and Switched Virtual Interfaces (SVIs) serving as default gateways:
                      </p>
                      <pre className="text-[11px] font-mono bg-stone-100 p-2 rounded-lg text-stone-800">
{`ip routing
interface Vlan10
 ip address 10.10.10.1 255.255.255.0
interface Vlan20
 ip address 10.10.20.1 255.255.255.0`}
                      </pre>
                      <p className="text-[11px] text-stone-500">
                        Routes packets between VLANs inside high-performance ASIC silicon at wire speed (terabits/sec) with no single-cable bottleneck.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-900 text-white font-mono text-xs space-y-2">
                    <div className="text-stone-400 text-[10px] uppercase font-bold tracking-wider">
                      Routing is NOT Authorization
                    </div>
                    <p className="text-stone-300 text-[11px] leading-relaxed">
                      Once inter-VLAN routing is enabled on a Layer 3 switch or router, <strong>all subnets can communicate with all other subnets by default</strong>. Creating separate VLANs does not enforce a security boundary on its own! Network engineers must apply stateful firewall policies or stateless Access Control Lists (ACLs) to permit necessary business flows (e.g. Staff to Web Server HTTPS) and block prohibited lateral movement (e.g. Guest to Staff, Staff to Management SSH).
                    </p>
                  </div>
                </div>
              )}

              {/* SECTION 14.5 */}
              {activeSection === "14.5" && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest">
                      Section 14.5
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      Spanning Tree Protocol (STP &amp; RSTP) Loop Elimination
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-stone-700">
                    Physical redundancy is mandatory in enterprise networks so that severed cables or hardware failures do not disconnect users. However, redundant physical Layer 2 links create closed loops. Because Ethernet frames have no TTL, a broadcast frame duplicates and recirculates endlessly in a <strong>broadcast storm</strong>, crashing switches within seconds. Spanning Tree Protocol dynamically computes a loop-free logical tree by placing redundant ports into a blocking state.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <div className="text-xs font-mono font-bold text-stone-900">
                        Classic STP (IEEE 802.1D)
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Exchanges Bridge Protocol Data Units (BPDUs) every 2 seconds. Computes tree using timer-based state transitions:
                      </p>
                      <div className="text-[11px] font-mono text-stone-700 bg-stone-100 p-2 rounded-lg">
                        Blocking (20s MaxAge) &rarr; Listening (15s Forward Delay) &rarr; Learning (15s Forward Delay) &rarr; Forwarding.
                      </div>
                      <p className="text-[11px] text-rose-700 font-bold">
                        Takes 30 to 50 seconds to recover from a single link failure!
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <div className="text-xs font-mono font-bold text-emerald-800">
                        Rapid STP (RSTP / IEEE 802.1w)
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Collapses states into <strong>Discarding, Learning, Forwarding</strong>. Replaces slow timers with an active handshake:
                      </p>
                      <div className="text-[11px] font-mono text-stone-700 bg-stone-100 p-2 rounded-lg">
                        Explicit Proposal/Agreement negotiation between switches on point-to-point links.
                      </div>
                      <p className="text-[11px] text-emerald-700 font-bold">
                        Reconverges in milliseconds (&lt; 1 second) upon link failure!
                      </p>
                    </div>
                  </div>

                  {/* STP Port Roles */}
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                    <div className="text-xs font-mono font-bold text-stone-900">
                      RSTP Port Roles &amp; Operational Defense Toolkit
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div className="p-3 bg-white rounded-xl border border-stone-200">
                        <strong className="text-stone-900 font-mono">PortFast (Edge Ports):</strong>
                        <p className="text-stone-600 mt-1 leading-relaxed">
                          Configured on host-facing ports. Bypasses listening/learning, transitioning directly to Forwarding so DHCP requests don&rsquo;t time out.
                        </p>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-stone-200">
                        <strong className="text-stone-900 font-mono">BPDU Guard:</strong>
                        <p className="text-stone-600 mt-1 leading-relaxed">
                          Immediately disables (err-disables) any PortFast port that receives an STP BPDU, stopping rogue switches or loops at the edge.
                        </p>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-stone-200">
                        <strong className="text-stone-900 font-mono">Root Guard:</strong>
                        <p className="text-stone-600 mt-1 leading-relaxed">
                          Placed on distribution downlinks to access switches. Prevents an unauthorized downstream switch from becoming the Root Bridge.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 14.6 */}
              {activeSection === "14.6" && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest">
                      Section 14.6
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      Link Aggregation (LACP) &amp; EtherChannel Architecture
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-stone-700">
                    If two switches are connected with multiple physical cables without link aggregation, Spanning Tree will block all but one link to prevent a loop. <strong>Link Aggregation (IEEE 802.1AX / 802.3ad)</strong> bundles up to 8 physical links into a single logical <em>Port-Channel</em>. Spanning Tree sees only one logical link, allowing all member links to forward traffic simultaneously!
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <div className="text-xs font-mono font-bold text-stone-900">
                        LACP (Link Aggregation Control Protocol)
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Standardized negotiation protocol. Switches exchange LACP packets to verify compatible speeds, duplex modes, and VLAN configurations before bundling. Modes: <code>active</code> (initiates LACP) and <code>passive</code> (responds only). Avoid static unconditional bundling (<code>mode on</code>) as it can cause blackholing if a cable fails unidirectionally.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <div className="text-xs font-mono font-bold text-stone-900">
                        Flow Hashing &amp; Packet Ordering
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        A 4 &times; 1 Gbps bundle provides 4 Gbps of aggregated capacity across multiple flows, but <strong>a single TCP stream cannot exceed 1 Gbps</strong>. The switch calculates a deterministic hash of packet headers (Layer 2 MAC, Layer 3 IP, or Layer 4 Port) to pin all frames of a given flow to one physical link, completely avoiding packet reordering.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 14.7 */}
              {activeSection === "14.7" && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest">
                      Section 14.7
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      Switch Port Security, 802.1X &amp; Layer 2 Hardening
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-stone-700">
                    Switch access ports connect untrusted physical devices directly into the local broadcast domain. Without Layer 2 defense, rogue devices can launch man-in-the-middle attacks, poison ARP tables, and starve DHCP pools.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                      <strong className="text-stone-900 font-mono">1. DHCP Snooping:</strong>
                      <p className="text-stone-600 mt-1 leading-relaxed">
                        Differentiates trusted (uplink) and untrusted (client) ports. Drops rogue DHCP Offer packets from rogue routers. Builds a dynamic binding database: <code>[MAC, IP, VLAN, Port, Lease]</code>.
                      </p>
                    </div>
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                      <strong className="text-stone-900 font-mono">2. Dynamic ARP Inspection (DAI):</strong>
                      <p className="text-stone-600 mt-1 leading-relaxed">
                        Intercepts all ARP requests and replies on untrusted ports. Verifies sender MAC and IP against the DHCP Snooping database. Drops gratuitous ARP spoofing packets.
                      </p>
                    </div>
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                      <strong className="text-stone-900 font-mono">3. IP Source Guard (IPSG):</strong>
                      <p className="text-stone-600 mt-1 leading-relaxed">
                        Applies hardware port ACLs that block traffic from clients using spoofed IP addresses that do not match the DHCP Snooping binding table.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <div className="text-xs font-mono font-bold text-stone-900">
                      Port Security vs. 802.1X Network Access Control (NAC)
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      <strong>Port Security:</strong> Restricts the number of MAC addresses learned on an edge port (e.g. <code>switchport port-security maximum 1</code>). If an unauthorized device is plugged in, violation modes like <code>shutdown</code> (err-disables port) or <code>restrict</code> trigger. However, MAC addresses can be easily spoofed.
                    </p>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      <strong>802.1X NAC:</strong> The gold standard. Requires cryptographic identity authentication (EAP-TLS certificates or user credentials) evaluated by a central RADIUS server before the switch port opens.
                    </p>
                  </div>
                </div>
              )}

              {/* SECTION 14.8 */}
              {activeSection === "14.8" && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest">
                      Section 14.8
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      Departmental Segmentation &amp; Zero-Trust Policy Matrix
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-stone-700">
                    Enterprise LAN design segregates functional groups into dedicated VLANs and IP subnets. A typical campus deployment enforces an explicit, default-deny inter-VLAN access matrix:
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-stone-300 bg-stone-100/60 font-mono text-stone-700">
                          <th className="p-3">Source Zone</th>
                          <th className="p-3">Destination</th>
                          <th className="p-3">Permitted Ports</th>
                          <th className="p-3">Enforcement Mechanism</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200 text-stone-700 font-mono">
                        <tr>
                          <td className="p-3 font-bold">Staff (VLAN 10)</td>
                          <td className="p-3">Servers (VLAN 40)</td>
                          <td className="p-3 text-emerald-700">TCP 443 (HTTPS), TCP 8443</td>
                          <td className="p-3 font-sans">SVI ACL / Firewall Stateful Inspection</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold">Staff (VLAN 10)</td>
                          <td className="p-3">Management (VLAN 99)</td>
                          <td className="p-3 text-rose-700">DENY ALL</td>
                          <td className="p-3 font-sans">Default Deny Ingress Filter</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold">Guest (VLAN 30)</td>
                          <td className="p-3">Internal Networks (10.0.0.0/8)</td>
                          <td className="p-3 text-rose-700">DENY ALL</td>
                          <td className="p-3 font-sans">Firewall Drop RFC 1918 / Client Isolation</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold">Admin (VLAN 99)</td>
                          <td className="p-3">Switch Infrastructure</td>
                          <td className="p-3 text-emerald-700">TCP 22 (SSH), UDP 161 (SNMPv3)</td>
                          <td className="p-3 font-sans">VTY line access-class restriction</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* SECTION 14.9 */}
              {activeSection === "14.9" && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest">
                      Section 14.9
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      Failure Domain Analysis &amp; High Availability (FHRP)
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-stone-700">
                    If an enterprise network relies on a single Layer 3 switch for all SVI gateways, that switch represents a catastrophic single point of failure (SPOF). Redundant distribution switches deploy <strong>First Hop Redundancy Protocols (FHRP)</strong>:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                      <strong className="text-stone-900 font-mono">HSRP (Cisco Standard):</strong>
                      <p className="text-stone-600 mt-1 leading-relaxed">
                        Hot Standby Router Protocol. Active and Standby routers share a virtual IP (e.g. <code>10.10.10.1</code>) and virtual MAC (<code>00:00:0C:07:AC:xx</code>).
                      </p>
                    </div>
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                      <strong className="text-stone-900 font-mono">VRRP (IETF RFC 5798):</strong>
                      <p className="text-stone-600 mt-1 leading-relaxed">
                        Virtual Router Redundancy Protocol. Open vendor-neutral standard. Master and Backup routers share virtual MAC (<code>00:00:5E:00:01:xx</code>).
                      </p>
                    </div>
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                      <strong className="text-stone-900 font-mono">GLBP (Load Balancing):</strong>
                      <p className="text-stone-600 mt-1 leading-relaxed">
                        Gateway Load Balancing Protocol. Allows multiple physical gateways to actively route traffic simultaneously by responding to client ARP requests with different virtual MACs.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 14.10 */}
              {activeSection === "14.10" && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest">
                      Section 14.10
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      Hands-On Lab Walkthrough &amp; Configuration Reference
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-stone-700">
                    Step-by-step configuration workflow for building an enterprise multi-switch topology in Cisco Packet Tracer, GNS3, or EVE-NG:
                  </p>

                  <div className="p-4 rounded-2xl bg-stone-900 text-white font-mono text-xs space-y-2">
                    <div className="text-stone-400 text-[10px] uppercase font-bold tracking-wider">
                      Cisco IOS Configuration Master Reference
                    </div>
                    <pre className="text-stone-300 text-[11px] leading-relaxed overflow-x-auto whitespace-pre-wrap">
{`# 1. Create VLANs on Core & Access Switches
vlan 10
 name STAFF
vlan 20
 name ENGINEERING
vlan 40
 name SERVERS
vlan 99
 name MANAGEMENT
vlan 999
 name UNUSED_NATIVE

# 2. Configure 802.1Q Trunk Port with Pruned VLAN List
interface GigabitEthernet1/0/24
 switchport mode trunk
 switchport trunk native vlan 999
 switchport trunk allowed vlan 10,20,40,99
 switchport nonegotiate

# 3. Configure Hardened Access Port with BPDU Guard
interface GigabitEthernet1/0/1
 switchport mode access
 switchport access vlan 10
 spanning-tree portfast
 spanning-tree bpduguard enable

# 4. Configure Layer 3 SVIs on Distribution Switch
ip routing
interface Vlan10
 ip address 10.10.10.1 255.255.255.0
interface Vlan40
 ip address 10.10.40.1 255.255.255.0`}
                    </pre>
                  </div>
                </div>
              )}

              {/* SECTION 14.11 */}
              {activeSection === "14.11" && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest">
                      Section 14.11
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      Diagnostic CLI Commands &amp; Wireshark Filter Matrix
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-stone-900 text-white font-mono text-xs space-y-2">
                      <div className="text-stone-400 text-[10px] uppercase font-bold">
                        Switch Diagnostic Verification Commands
                      </div>
                      <pre className="text-stone-300 text-[11px] leading-relaxed overflow-x-auto">
{`# Inspect operational VLANs
show vlan brief

# Verify 802.1Q trunk state & allowed list
show interfaces trunk

# Display dynamic learned MAC addresses
show mac address-table dynamic

# Inspect Spanning Tree state & root bridge
show spanning-tree

# Verify LACP Port-Channel status
show etherchannel summary`}
                      </pre>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-900 text-white font-mono text-xs space-y-2">
                      <div className="text-stone-400 text-[10px] uppercase font-bold">
                        Wireshark Display Filter Matrix
                      </div>
                      <pre className="text-amber-400 text-[11px] leading-relaxed overflow-x-auto">
{`# Filter 1: Capture 802.1Q tagged frames (VID 10)
vlan.id == 10

# Filter 2: Capture Spanning Tree BPDUs
stp

# Filter 3: Inspect LACP control packets
lacp

# Filter 4: Filter ARP requests and responses
arp

# Filter 5: Detect DHCP Offer frames
bootp.option.type == 53 and bootp.option.value == 02`}
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 14.12 */}
              {activeSection === "14.12" && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest">
                      Section 14.12
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      Enterprise LAN Security Audit Methodology
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-stone-700">
                    A comprehensive enterprise LAN security assessment evaluates whether physical switch ports, VLAN tags, spanning tree parameters, and inter-VLAN gateways are hardened against unauthorized access, loop storms, and lateral privilege escalation.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <div className="text-xs font-mono font-bold text-stone-900">
                        Critical Layer 2 Audit Checks
                      </div>
                      <ul className="text-xs text-stone-600 space-y-1.5 list-disc pl-4 leading-relaxed">
                        <li>Verify that DTP is disabled (<code>switchport nonegotiate</code>) on all access ports.</li>
                        <li>Ensure Native VLAN is pruned from data traffic and changed from default VLAN 1.</li>
                        <li>Verify BPDU Guard is active on all PortFast access ports.</li>
                        <li>Confirm DHCP Snooping and Dynamic ARP Inspection (DAI) are active.</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <div className="text-xs font-mono font-bold text-stone-900">
                        High Availability Verification
                      </div>
                      <ul className="text-xs text-stone-600 space-y-1.5 list-disc pl-4 leading-relaxed">
                        <li>Test primary Root Bridge failure and measure RSTP failover latency.</li>
                        <li>Verify Port-Channel member failover under active TCP file transfer.</li>
                        <li>Confirm management VTY access is restricted via SSH and access-class ACLs.</li>
                        <li>Inspect CAM tables for MAC flap alerts or rapid topology changes.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 2: SIMULATOR 1 - MAC LEARNING & CAM TABLE                      */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "mac-cam-sim" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                    <Database size={14} />
                    <span>Layer 2 Forwarding Engine</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    MAC Address Learning &amp; CAM Table Simulation
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={triggerCamOverflowAttack}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition cursor-pointer border ${
                      camAttackActive
                        ? "bg-rose-600 text-white border-rose-700"
                        : "bg-rose-50 border-rose-300 text-rose-700 hover:bg-rose-100"
                    }`}
                  >
                    {camAttackActive ? "Stop CAM Flooding Attack" : "Simulate macof CAM Overflow Attack"}
                  </button>
                </div>
              </div>

              {/* Frame Generator Action Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                <button
                  onClick={() => simulateFrameTransmission("PC-A", "PC-B")}
                  className="p-3 bg-stone-50 hover:bg-stone-100 rounded-xl border border-stone-200 text-left text-xs font-mono transition cursor-pointer"
                >
                  <div className="font-bold text-stone-900">PC-A &rarr; PC-B</div>
                  <div className="text-[10px] text-stone-500 mt-0.5">Known Unicast (VLAN 10)</div>
                </button>
                <button
                  onClick={() => simulateFrameTransmission("PC-A", "UNKNOWN")}
                  className="p-3 bg-stone-50 hover:bg-stone-100 rounded-xl border border-stone-200 text-left text-xs font-mono transition cursor-pointer"
                >
                  <div className="font-bold text-stone-900">PC-A &rarr; Unknown MAC</div>
                  <div className="text-[10px] text-stone-500 mt-0.5">Triggers Unicast Flood</div>
                </button>
                <button
                  onClick={() => simulateFrameTransmission("PC-A", "BROADCAST")}
                  className="p-3 bg-stone-50 hover:bg-stone-100 rounded-xl border border-stone-200 text-left text-xs font-mono transition cursor-pointer"
                >
                  <div className="font-bold text-stone-900">PC-A &rarr; Broadcast</div>
                  <div className="text-[10px] text-stone-500 mt-0.5">Floods VLAN 10 Only</div>
                </button>
                <button
                  onClick={() => simulateFrameTransmission("PC-A", "SRV-1")}
                  className="p-3 bg-stone-50 hover:bg-stone-100 rounded-xl border border-stone-200 text-left text-xs font-mono transition cursor-pointer"
                >
                  <div className="font-bold text-stone-900">PC-A &rarr; SRV-1</div>
                  <div className="text-[10px] text-stone-500 mt-0.5">VLAN 10 &rarr; VLAN 20 (Drop)</div>
                </button>
              </div>

              {/* Event Log Banner */}
              <div className="p-4 rounded-2xl bg-stone-900 text-white font-mono text-xs mb-6 space-y-1">
                <div className="text-stone-400 text-[10px] uppercase font-bold tracking-wider">
                  ASIC Forwarding Decision Log
                </div>
                <div className="text-stone-200 leading-relaxed">{lastActionLog}</div>
              </div>

              {/* Live CAM Table Display */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse font-mono">
                  <thead>
                    <tr className="border-b border-stone-300 bg-stone-100/60 text-stone-700">
                      <th className="p-3">VLAN ID</th>
                      <th className="p-3">MAC Address</th>
                      <th className="p-3">Ingress Port</th>
                      <th className="p-3">Type</th>
                      <th className="p-3">Age (sec)</th>
                      <th className="p-3">Connected Device</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-800">
                    {camTable.map((row, idx) => (
                      <tr key={idx} className={row.type.includes("Spoofed") ? "bg-rose-50/70" : ""}>
                        <td className="p-3 font-bold">VLAN {row.vlan}</td>
                        <td className="p-3">{row.mac}</td>
                        <td className="p-3 text-orange-600 font-bold">{row.port}</td>
                        <td className="p-3">{row.type}</td>
                        <td className="p-3">{row.age}s</td>
                        <td className="p-3 font-sans text-stone-600">{row.host}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 3: SIMULATOR 2 - 802.1Q TRUNKING INSPECTOR                     */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "dot1q-sim" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                    <Cable size={14} />
                    <span>802.1Q Frame Header Inspector</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    VLAN Tagging, Trunk Pruning &amp; Native Mismatch Sandbox
                  </h3>
                </div>
                <div className="text-xs font-mono font-bold text-stone-600 bg-stone-100 px-3 py-1.5 rounded-xl border border-stone-200">
                  Standard: IEEE 802.1Q
                </div>
              </div>

              {/* Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="text-xs font-mono font-bold text-stone-700 block mb-1">
                    Select Frame Origin VLAN:
                  </label>
                  <select
                    value={dot1qVlan}
                    onChange={(e) => setDot1qVlan(Number(e.target.value))}
                    className="w-full text-xs font-mono p-2.5 rounded-xl border border-stone-300 bg-white cursor-pointer"
                  >
                    <option value={10}>VLAN 10 (Staff Workstations)</option>
                    <option value={20}>VLAN 20 (Engineering)</option>
                    <option value={30}>VLAN 30 (Guest Wi-Fi)</option>
                    <option value={1}>VLAN 1 (Default Management)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono font-bold text-stone-700 block mb-1">
                    Trunk Native VLAN on SW-1:
                  </label>
                  <select
                    value={trunkNativeVlanSw1}
                    onChange={(e) => setTrunkNativeVlanSw1(Number(e.target.value))}
                    className="w-full text-xs font-mono p-2.5 rounded-xl border border-stone-300 bg-white"
                  >
                    <option value={1}>VLAN 1 (Default Native)</option>
                    <option value={999}>VLAN 999 (Hardened Unused Native)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono font-bold text-stone-700 block mb-1">
                    Trunk Native VLAN on SW-2:
                  </label>
                  <select
                    value={trunkNativeVlanSw2}
                    onChange={(e) => setTrunkNativeVlanSw2(Number(e.target.value))}
                    className={`w-full text-xs font-mono p-2.5 rounded-xl border bg-white ${
                      trunkNativeVlanSw1 !== trunkNativeVlanSw2 ? "border-rose-400 bg-rose-50/50" : "border-stone-300"
                    }`}
                  >
                    <option value={1}>VLAN 1 (Matches SW-1)</option>
                    <option value={99}>VLAN 99 (MISMATCH! Causes VLAN Leak)</option>
                    <option value={999}>VLAN 999 (Hardened Unused Native)</option>
                  </select>
                </div>
              </div>

              {/* Wire Frame Display */}
              <div className="p-6 rounded-2xl bg-stone-900 text-white font-mono space-y-4 mb-6">
                <div className="flex items-center justify-between pb-3 border-b border-stone-800 text-xs">
                  <span className="text-stone-400 uppercase font-bold">Physical Trunk Wire Representation</span>
                  <span
                    className={`px-3 py-1 rounded-full font-bold text-xs ${
                      trunkInspection.isNativeMismatch
                        ? "bg-rose-500/20 text-rose-300 border border-rose-500/40"
                        : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                    }`}
                  >
                    {trunkInspection.isNativeMismatch ? "NATIVE MISMATCH DETECTED" : "TRUNK SYNCHRONIZED"}
                  </span>
                </div>

                <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 text-xs text-amber-400">
                  {trunkInspection.wireRepresentation}
                </div>

                <div className="text-xs text-stone-300 leading-relaxed font-sans">
                  <strong>Egress Behavioral Analysis:</strong> {trunkInspection.egressOutcome}
                </div>
              </div>

              {/* Step-by-Step Flow */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="font-bold text-stone-900 font-mono mb-1">1. Access Port Ingress</div>
                  <p className="text-stone-600 text-[11px] leading-relaxed">
                    Host generates standard untagged Ethernet frame. Switch SW-1 receives frame on Gi1/0/1 and associates it with Access VLAN {dot1qVlan}.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="font-bold text-stone-900 font-mono mb-1">2. 802.1Q Trunk Egress</div>
                  <p className="text-stone-600 text-[11px] leading-relaxed">
                    {trunkInspection.isNativeOnSw1
                      ? `Matches Native VLAN (${trunkNativeVlanSw1}): Transmitted across trunk UNTAGGED.`
                      : `Tags frame with 4-byte header: TPID 0x8100, VID ${dot1qVlan}, PCP 5.`}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="font-bold text-stone-900 font-mono mb-1">3. Access Port Delivery</div>
                  <p className="text-stone-600 text-[11px] leading-relaxed">
                    Switch SW-2 reads tag, strips 802.1Q header, and forwards original untagged payload to recipient workstation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 4: SIMULATOR 3 - STP / RSTP LOOP PREVENTION                    */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "stp-sim" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                    <GitFork size={14} />
                    <span>Loop-Free Topology Engine</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    Spanning Tree (802.1w RSTP) Root Election &amp; Failover Sandbox
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setStpEnabled(!stpEnabled)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition cursor-pointer border ${
                      stpEnabled ? "bg-emerald-50 border-emerald-300 text-emerald-700" : "bg-rose-600 text-white border-rose-700"
                    }`}
                  >
                    {stpEnabled ? "STP Enabled (Safe)" : "STP Disabled (Loop Active!)"}
                  </button>
                  <button
                    onClick={() => setLinkABAlive(!linkABAlive)}
                    className="px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 border border-stone-300 text-stone-700 text-xs font-bold font-mono cursor-pointer transition"
                  >
                    {linkABAlive ? "Sever Link SW-A <-> SW-B" : "Restore Link SW-A <-> SW-B"}
                  </button>
                </div>
              </div>

              {/* Priority Sliders */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200">
                  <label className="text-xs font-mono font-bold text-stone-700 block mb-1">
                    SW-A Bridge Priority: {swAPriority}
                  </label>
                  <select
                    value={swAPriority}
                    onChange={(e) => setSwAPriority(Number(e.target.value))}
                    className="w-full text-xs font-mono p-2 rounded-xl border border-stone-300 bg-white"
                  >
                    <option value={4096}>4096 (Primary Root Target)</option>
                    <option value={8192}>8192 (Secondary Root)</option>
                    <option value={32768}>32768 (Default)</option>
                  </select>
                </div>

                <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200">
                  <label className="text-xs font-mono font-bold text-stone-700 block mb-1">
                    SW-B Bridge Priority: {swBPriority}
                  </label>
                  <select
                    value={swBPriority}
                    onChange={(e) => setSwBPriority(Number(e.target.value))}
                    className="w-full text-xs font-mono p-2 rounded-xl border border-stone-300 bg-white"
                  >
                    <option value={4096}>4096 (Primary Root)</option>
                    <option value={8192}>8192 (Secondary Root Target)</option>
                    <option value={32768}>32768 (Default)</option>
                  </select>
                </div>

                <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200">
                  <label className="text-xs font-mono font-bold text-stone-700 block mb-1">
                    SW-C Bridge Priority: {swCPriority}
                  </label>
                  <select
                    value={swCPriority}
                    onChange={(e) => setSwCPriority(Number(e.target.value))}
                    className="w-full text-xs font-mono p-2 rounded-xl border border-stone-300 bg-white"
                  >
                    <option value={8192}>8192 (Secondary Root)</option>
                    <option value={32768}>32768 (Default Access Switch)</option>
                  </select>
                </div>
              </div>

              {/* Status Banner */}
              <div className={`p-4 rounded-2xl border mb-6 ${stpTopology.statusColor}`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold font-mono uppercase tracking-wider">
                    {stpTopology.status}
                  </span>
                  <span className="text-xs font-mono font-bold">
                    Elected Root Bridge: {stpTopology.rootBridge}
                  </span>
                </div>
                <div className="text-xs leading-relaxed font-sans">{stpTopology.detail}</div>
              </div>

              {/* Port Roles Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse font-mono">
                  <thead>
                    <tr className="border-b border-stone-300 bg-stone-100/60 text-stone-700">
                      <th className="p-3">Switch Node</th>
                      <th className="p-3">Interface / Link</th>
                      <th className="p-3">RSTP Port Role &amp; State</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-800">
                    <tr>
                      <td className="p-3 font-bold">SW-A</td>
                      <td className="p-3">Gi1/0/1 &harr; SW-B</td>
                      <td className="p-3 text-emerald-700 font-bold">{stpTopology.ports.swA_to_B}</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">SW-A</td>
                      <td className="p-3">Gi1/0/2 &harr; SW-C</td>
                      <td className="p-3 text-emerald-700 font-bold">{stpTopology.ports.swA_to_C || "Designated (Forwarding)"}</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">SW-B</td>
                      <td className="p-3">Gi1/0/2 &harr; SW-C</td>
                      <td className="p-3 text-emerald-700 font-bold">{stpTopology.ports.swB_to_C || "Designated (Forwarding)"}</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">SW-C</td>
                      <td className="p-3">Gi1/0/2 &harr; SW-B</td>
                      <td className="p-3">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            stpTopology.ports.swC_to_B && stpTopology.ports.swC_to_B.includes("BLOCKING")
                              ? "bg-amber-100 text-amber-900 border border-amber-300"
                              : "bg-emerald-100 text-emerald-900"
                          }`}
                        >
                          {stpTopology.ports.swC_to_B || "Root Port (Forwarding)"}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 5: SIMULATOR 4 - INTER-VLAN ROUTING FLOW                       */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "intervlan-sim" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                    <RouterIcon size={14} />
                    <span>Layer 3 Forwarding &amp; ACL Inspection</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    Inter-VLAN Packet Rewrite &amp; Policy Enforcement Flow
                  </h3>
                </div>
                <div className="inline-flex rounded-xl p-1 bg-stone-100 border border-stone-200">
                  <button
                    onClick={() => setRoutingMode("svi")}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                      routingMode === "svi" ? "bg-white text-stone-900 shadow-sm" : "text-stone-500 hover:text-stone-900"
                    }`}
                  >
                    Layer 3 Switch (SVI)
                  </button>
                  <button
                    onClick={() => setRoutingMode("roas")}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                      routingMode === "roas" ? "bg-white text-stone-900 shadow-sm" : "text-stone-500 hover:text-stone-900"
                    }`}
                  >
                    Router-on-a-Stick (ROAS)
                  </button>
                </div>
              </div>

              {/* Policy Toggle */}
              <div className="flex items-center justify-between p-4 bg-stone-50 rounded-2xl border border-stone-200 mb-6">
                <div>
                  <div className="text-xs font-bold text-stone-900 font-mono">Inter-VLAN Access Control Policy:</div>
                  <div className="text-[11px] text-stone-500">
                    Source: Staff-PC (10.10.10.10, VLAN 10) &rarr; Destination: Web-Server (10.10.40.10, VLAN 40)
                  </div>
                </div>
                <button
                  onClick={() => setFirewallPolicyPermit(!firewallPolicyPermit)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold font-mono transition cursor-pointer border ${
                    firewallPolicyPermit
                      ? "bg-emerald-50 border-emerald-300 text-emerald-800"
                      : "bg-rose-50 border-rose-300 text-rose-800"
                  }`}
                >
                  {firewallPolicyPermit ? "ACL Status: PERMIT HTTP/HTTPS" : "ACL Status: DENY (Blocked)"}
                </button>
              </div>

              {/* Flow Steps */}
              <div className="space-y-3">
                {interVlanTrace.steps.map((st) => (
                  <div key={st.step} className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                    <div className="flex items-center gap-2 mb-2 pb-2 border-b border-stone-200">
                      <span className="w-5 h-5 rounded-full bg-stone-900 text-white text-[10px] font-bold font-mono flex items-center justify-center">
                        {st.step}
                      </span>
                      <span className="text-xs font-bold text-stone-900 font-mono">{st.title}</span>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed font-mono">{st.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 6: SIMULATOR 5 - LACP LINK AGGREGATION & FAILOVER              */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "lacp-sim" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                    <Workflow size={14} />
                    <span>802.3ad Port-Channel Sandbox</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    LACP EtherChannel Load Balancing &amp; Member Link Failover
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-stone-600">Hashing:</span>
                  <select
                    value={hashAlgorithm}
                    onChange={(e) => setHashAlgorithm(e.target.value)}
                    className="text-xs font-mono p-1.5 rounded-xl border border-stone-300 bg-white"
                  >
                    <option value="l2">Layer 2 (Src/Dst MAC)</option>
                    <option value="l3">Layer 3 (Src/Dst IP)</option>
                    <option value="l4">Layer 4 (IP + Port)</option>
                  </select>
                </div>
              </div>

              {/* Physical Member Link Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {activeMemberLinks.map((isAlive, idx) => (
                  <button
                    key={idx}
                    onClick={() => toggleLinkState(idx)}
                    className={`p-4 rounded-2xl border text-left transition cursor-pointer ${
                      isAlive ? "bg-emerald-50/70 border-emerald-300 text-emerald-950" : "bg-rose-50 border-rose-300 text-rose-950"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold font-mono">Member Gi1/0/{idx + 1}</span>
                      <span className={`w-2.5 h-2.5 rounded-full ${isAlive ? "bg-emerald-500" : "bg-rose-500 animate-pulse"}`} />
                    </div>
                    <div className="text-[11px] font-mono mt-1">
                      {isAlive ? "1 Gbps (Active / LACP)" : "LINK DOWN (Click to restore)"}
                    </div>
                  </button>
                ))}
              </div>

              {/* Status Header */}
              <div className="p-4 rounded-2xl bg-stone-900 text-white font-mono text-xs mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-stone-400">Logical Bundle:</span>{" "}
                  <strong className="text-orange-400">Port-Channel 1</strong> (LACP Active)
                </div>
                <div>
                  <span className="text-stone-400">Aggregate Bandwidth:</span>{" "}
                  <strong className="text-emerald-400">{lacpStatus.aggregateBandwidth} Gbps</strong> across{" "}
                  {lacpStatus.aliveCount} Active Members
                </div>
              </div>

              {/* Flow Distribution Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse font-mono">
                  <thead>
                    <tr className="border-b border-stone-300 bg-stone-100/60 text-stone-700">
                      <th className="p-3">Active Network Flow</th>
                      <th className="p-3">Source IP</th>
                      <th className="p-3">Destination IP</th>
                      <th className="p-3">Protocol / Port</th>
                      <th className="p-3">Assigned Physical Cable</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-800">
                    {lacpStatus.mappedFlows.map((f, idx) => (
                      <tr key={idx}>
                        <td className="p-3 font-bold">{f.id}</td>
                        <td className="p-3">{f.srcIp}</td>
                        <td className="p-3">{f.dstIp}</td>
                        <td className="p-3">{f.port}</td>
                        <td className="p-3 font-bold text-orange-600">{f.assignedLink}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 7: CLI & DIAGNOSTICS REFERENCE                                 */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "cli" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="mb-6 pb-6 border-b border-[#e7e3da]">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                  <Terminal size={14} />
                  <span>Production Engineering Toolkit</span>
                </div>
                <h3 className="text-xl font-bold text-stone-900 mt-1">
                  Enterprise Switching CLI Diagnostics &amp; Verification
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Cisco IOS Commands */}
                <div className="p-5 rounded-2xl bg-stone-900 text-white font-mono text-xs space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-stone-800 text-stone-400 text-[10px] uppercase font-bold">
                    <span>Cisco IOS Switching Commands</span>
                    <button
                      onClick={() =>
                        copyToClipboard(
                          `show vlan brief\nshow interfaces trunk\nshow mac address-table\nshow spanning-tree\nshow etherchannel summary`,
                          "cli-cisco"
                        )
                      }
                      className="text-stone-400 hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      {copiedCodeId === "cli-cisco" ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                      <span>{copiedCodeId === "cli-cisco" ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                  <pre className="text-stone-300 text-[11px] leading-relaxed overflow-x-auto whitespace-pre-wrap">
{`# 1. Inspect operational VLANs
Switch# show vlan brief
VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi1/0/5, Gi1/0/6
10   STAFF                            active    Gi1/0/1, Gi1/0/2
20   ENGINEERING                      active    Gi1/0/3, Gi1/0/4
40   SERVERS                          active    Gi1/0/7, Gi1/0/8
999  UNUSED_NATIVE                    active    

# 2. Inspect active 802.1Q trunks
Switch# show interfaces trunk
Port        Mode             Encapsulation  Status        Native vlan
Gi1/0/24    on               802.1q         trunking      999`}
                  </pre>
                </div>

                {/* Spanning Tree and EtherChannel */}
                <div className="p-5 rounded-2xl bg-stone-900 text-white font-mono text-xs space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-stone-800 text-stone-400 text-[10px] uppercase font-bold">
                    <span>STP &amp; EtherChannel Verification</span>
                    <button
                      onClick={() =>
                        copyToClipboard(
                          `show spanning-tree root\nshow etherchannel summary\nshow ip interface brief`,
                          "cli-stp"
                        )
                      }
                      className="text-stone-400 hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      {copiedCodeId === "cli-stp" ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                      <span>{copiedCodeId === "cli-stp" ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                  <pre className="text-stone-300 text-[11px] leading-relaxed overflow-x-auto whitespace-pre-wrap">
{`# 1. View RSTP root bridge election
Switch# show spanning-tree
VLAN0010
  Spanning tree enabled protocol rstp
  Root ID    Priority    4096
             Address     001a.1e11.2233
             This bridge is the root

# 2. Verify Port-Channel LACP status
Switch# show etherchannel summary
Group  Port-channel  Protocol    Ports
------+-------------+-----------+-----------------------------------------------
1      Po1(SU)         LACP      Gi1/0/23(P) Gi1/0/24(P)`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 8: 10-QUESTION COMPREHENSIVE ASSESSMENT                        */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "quiz" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                    <Award size={14} />
                    <span>Evaluated Knowledge Check</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    Module 14 Examination: Switching, VLANs &amp; Enterprise LAN Design
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  {showQuizResults && (
                    <div className="text-xs font-mono font-bold px-3 py-1.5 rounded-xl bg-orange-50 border border-orange-200 text-orange-700">
                      Score: {calculateScore()} / {quizQuestions.length} ({Math.round((calculateScore() / quizQuestions.length) * 100)}%)
                    </div>
                  )}
                  <button
                    onClick={() => setShowQuizResults(!showQuizResults)}
                    className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold font-mono transition cursor-pointer shadow-sm"
                  >
                    {showQuizResults ? "Hide Rationale" : "Submit & Grade Exam"}
                  </button>
                </div>
              </div>

              {/* Questions List */}
              <div className="space-y-6">
                {quizQuestions.map((q, idx) => (
                  <div key={q.id} className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-stone-900 text-white text-xs font-bold font-mono flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div className="text-sm font-bold text-stone-900 leading-snug">
                        {q.question}
                      </div>
                    </div>

                    <div className="space-y-2 pl-9">
                      {q.options.map((opt, optIdx) => {
                        const isSelected = quizAnswers[q.id] === optIdx;
                        const isCorrect = q.correct === optIdx;
                        let optionStyle = "bg-white border-stone-200 text-stone-700 hover:border-stone-300";

                        if (showQuizResults) {
                          if (isCorrect) {
                            optionStyle = "bg-emerald-50 border-emerald-400 text-emerald-900 font-bold";
                          } else if (isSelected && !isCorrect) {
                            optionStyle = "bg-rose-50 border-rose-300 text-rose-800";
                          }
                        } else if (isSelected) {
                          optionStyle = "bg-orange-50 border-orange-400 text-orange-900 font-bold";
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() => setQuizAnswers((prev) => ({ ...prev, [q.id]: optIdx }))}
                            className={`w-full text-left p-3 rounded-xl border text-xs transition cursor-pointer flex items-center justify-between ${optionStyle}`}
                          >
                            <span>{opt}</span>
                            {showQuizResults && isCorrect && <Check size={14} className="text-emerald-600 shrink-0" />}
                          </button>
                        );
                      })}
                    </div>

                    {showQuizResults && (
                      <div className="mt-3 pl-9 pt-3 border-t border-stone-200 text-xs text-stone-600 leading-relaxed">
                        <strong className="text-stone-900">Engineering Rationale:</strong> {q.rationale}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 9: LAB CHECKLIST & SRE AUDIT REPORT                            */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "lab-report" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                    <ListChecks size={14} />
                    <span>Hands-On Engineering Lab</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    Enterprise LAN Audit Checklist &amp; Report Generator
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-stone-600 bg-stone-100 px-3 py-1.5 rounded-xl border border-stone-200">
                    Audit Progress: {completedChecklistCount} / 8 Complete
                  </span>
                </div>
              </div>

              {/* 8-Point Interactive Checklist */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-8">
                {[
                  { key: "vlanPlan", label: "1. VLAN & Subnet Plan", desc: "Define functional VLANs (10, 20, 30, 40, 99)." },
                  { key: "accessPorts", label: "2. Access Port Config", desc: "Assign edge ports and enable PortFast." },
                  { key: "trunkPrune", label: "3. 802.1Q Trunk Pruning", desc: "Explicitly allow only required VLANs on uplinks." },
                  { key: "nativeMatch", label: "4. Native VLAN Hardening", desc: "Park native VLAN on unused blackhole (VLAN 999)." },
                  { key: "interVlanRouting", label: "5. Inter-VLAN Routing", desc: "Configure SVIs or ROAS subinterfaces." },
                  { key: "rstpPriority", label: "6. Root Bridge Placement", desc: "Explicitly configure root priorities (4096 / 8192)." },
                  { key: "lacpConfig", label: "7. LACP Port-Channels", desc: "Bundle redundant links in LACP mode active." },
                  { key: "portSecurity", label: "8. BPDU Guard & Security", desc: "Enforce BPDU Guard on all host-facing ports." },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => toggleLabChecklist(item.key)}
                    className={`p-3.5 rounded-2xl border text-left transition cursor-pointer ${
                      labChecklist[item.key]
                        ? "bg-emerald-50/70 border-emerald-300 text-emerald-950"
                        : "bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold font-mono">{item.label}</span>
                      {labChecklist[item.key] ? (
                        <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                      ) : (
                        <div className="w-4 h-4 rounded border border-stone-300 bg-white" />
                      )}
                    </div>
                    <div className="text-[11px] text-stone-500 leading-relaxed font-sans">{item.desc}</div>
                  </button>
                ))}
              </div>

              {/* Copyable SRE Report Markdown */}
              <div className="p-6 rounded-2xl bg-stone-900 text-white font-mono text-xs">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-800 text-stone-400 text-[10px] uppercase font-bold">
                  <span>Markdown Enterprise LAN Architecture &amp; Resilience Report</span>
                  <button
                    onClick={() => copyToClipboard(lanAuditReportTemplate, "lan-report")}
                    className="text-stone-300 hover:text-white flex items-center gap-1.5 cursor-pointer transition"
                  >
                    {copiedCodeId === "lan-report" ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                    <span>{copiedCodeId === "lan-report" ? "Report Copied" : "Copy Markdown"}</span>
                  </button>
                </div>
                <pre className="text-stone-300 text-[11px] leading-relaxed overflow-x-auto max-h-96 whitespace-pre-wrap">
                  {lanAuditReportTemplate}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* Footer Navigation Bar */}
        <div className="mt-10 pt-6 border-t border-[#e7e3da] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => {
              navigate("/learning/networks/wireless");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#e7e3da] bg-white text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#ea580c] transition cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 13 — Wireless &amp; Mobile Networking</span>
          </button>

          <button
            onClick={() => {
              navigate("/learning/networks/firewalls");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 text-xs font-bold text-white hover:bg-orange-600 transition cursor-pointer"
          >
            <span>Next: Module 15 — Firewalls &amp; Access Control</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
