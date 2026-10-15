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
  FileCode,
  Award,
  BookOpen,
  FolderGit2,
  Trophy,
} from "lucide-react";
import ModuleNav from "./ModuleNav";

export default function NetworkFinalCapstone() {
  const navigate = useNavigate();

  // Active navigation tab: curriculum | simulators | lab | quiz | audit
  const [activeTab, setActiveTab] = useState("curriculum");

  // Lab checklist state (0/10)
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
  // SIMULATOR 1: Multi-Segment Topology & Packet Flow Simulator
  // ==========================================
  const [flowSource, setFlowSource] = useState("staff_pc"); // staff_pc | guest_laptop | app_srv | admin_pc | iot_device
  const [flowDest, setFlowDest] = useState("app_srv"); // app_srv | db_srv | dns_srv | mgmt_sw | external_web
  const [flowPort, setFlowPort] = useState(443);
  const [firewallStrict, setFirewallStrict] = useState(true);

  const flowResult = useMemo(() => {
    // Staff PC (10.10.10.15)
    if (flowSource === "staff_pc") {
      if (flowDest === "app_srv" && flowPort === 443) {
        return {
          status: "PERMITTED",
          badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
          desc: "Staff (VLAN 10) -> App Server (VLAN 20) on HTTPS 443: Permitted by rule FW-RULE-101 (Approved Business Access).",
          path: "Staff PC (10.10.10.15) -> Access SW (VLAN 10) -> L3 Core -> Firewall -> App Server (10.10.20.10:443)",
        };
      }
      if (flowDest === "dns_srv" && flowPort === 53) {
        return {
          status: "PERMITTED",
          badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
          desc: "Staff (VLAN 10) -> DNS Service (VLAN 20) on UDP 53: Permitted by rule FW-RULE-102 (Essential Network Services).",
          path: "Staff PC -> Access SW -> Core Router -> DNS Server (10.10.20.2:53)",
        };
      }
      if (flowDest === "db_srv") {
        return {
          status: "DROPPED BY POLICY",
          badge: "bg-red-50 text-red-700 border-red-200",
          desc: "Staff (VLAN 10) -> Database Server (VLAN 20): Dropped by rule FW-RULE-DENY-DIRECT-DB. Direct human access to DB is prohibited.",
          path: "Staff PC -> Access SW -> Core Router -> FIREWALL [DROP]",
        };
      }
      if (flowDest === "mgmt_sw") {
        return {
          status: "DROPPED BY POLICY",
          badge: "bg-red-50 text-red-700 border-red-200",
          desc: "Staff (VLAN 10) -> Management Switch (VLAN 99): Dropped by rule FW-RULE-DENY-MGMT. Only Admin Host may access infrastructure.",
          path: "Staff PC -> Access SW -> Core Router -> FIREWALL [DROP]",
        };
      }
      if (flowDest === "external_web") {
        return {
          status: "PERMITTED & NATed",
          badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
          desc: "Staff -> External Web: Permitted via NAT Overload (PAT) outbound via WAN gateway 198.51.100.2.",
          path: "Staff PC (10.10.10.15) -> L3 Core -> Firewall (PAT 198.51.100.2:49152) -> Internet",
        };
      }
    }

    // Guest Laptop (10.10.30.44)
    if (flowSource === "guest_laptop") {
      if (flowDest === "external_web") {
        return {
          status: "PERMITTED & NATed",
          badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
          desc: "Guest (VLAN 30) -> External Web: Permitted for guest Internet access via segregated NAT pool.",
          path: "Guest Laptop (10.10.30.44) -> Guest VLAN 30 -> Firewall (NAT) -> Internet",
        };
      }
      return {
        status: "BLOCKED (GUEST ISOLATION)",
        badge: "bg-red-50 text-red-700 border-red-200",
        desc: "Guest (VLAN 30) -> Internal Subnet: Blocked by rule FW-RULE-GUEST-ISOLATION. Guests have zero access to corporate assets.",
        path: "Guest Laptop -> Access SW (VLAN 30) -> FIREWALL [DROP & LOG]",
      };
    }

    // App Server (10.10.20.10)
    if (flowSource === "app_srv") {
      if (flowDest === "db_srv" && flowPort === 5432) {
        return {
          status: "PERMITTED (TIER-2 ACCESS)",
          badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
          desc: "App Server -> Database Server on TCP 5432: Permitted by rule FW-RULE-APP-TO-DB (Approved backend connection).",
          path: "App Server (10.10.20.10) -> Internal Switch -> DB Server (10.10.20.50:5432)",
        };
      }
      if (flowDest === "external_web") {
        return {
          status: "RESTRICTED EGRESS",
          badge: "bg-amber-50 text-amber-700 border-amber-200",
          desc: "App Server -> External Web: Restricted by default-deny egress filter. Permitted only if package repository proxy is declared.",
          path: "App Server -> Firewall [EGRESS AUDIT]",
        };
      }
    }

    // Admin Host (10.10.99.5)
    if (flowSource === "admin_pc") {
      if (flowDest === "mgmt_sw" && flowPort === 22) {
        return {
          status: "PERMITTED (ADMIN PATH)",
          badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
          desc: "Admin Host (VLAN 99) -> Management Switch on SSH 22: Permitted by rule FW-RULE-ADMIN-MGMT (MFA and Bastion logged).",
          path: "Admin Workstation (10.10.99.5) -> Management VLAN 99 -> Switch Console (10.10.99.1:22)",
        };
      }
    }

    // IoT Sensor (10.10.40.8)
    if (flowSource === "iot_device") {
      if (flowDest === "app_srv" && flowPort === 8883) {
        return {
          status: "PERMITTED (MQTT TELEMETRY)",
          badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
          desc: "IoT Sensor -> MQTT Telemetry Broker: Permitted by dedicated IoT ingress exception.",
          path: "IoT Sensor (VLAN 40) -> Isolated Gateway -> Broker (10.10.20.10:8883)",
        };
      }
      return {
        status: "DROPPED (IOT QUARANTINE)",
        badge: "bg-red-50 text-red-700 border-red-200",
        desc: "IoT Sensor (VLAN 40) -> Target: Dropped. IoT devices are quarantined from general subnets.",
        path: "IoT Device -> Access SW (VLAN 40) -> FIREWALL [DROP]",
      };
    }

    if (!firewallStrict) {
      return {
        status: "PERMITTED (UNSAFE ANY/ANY)",
        badge: "bg-amber-50 text-amber-700 border-amber-200",
        desc: "Permissive Firewall Mode: Packet passed without segment inspection. High risk of lateral movement!",
        path: `${flowSource} -> Unrestricted Core -> ${flowDest}`,
      };
    }

    return {
      status: "DEFAULT DENY DROP",
      badge: "bg-red-50 text-red-700 border-red-200",
      desc: "No matching explicit allow rule found. Packet dropped by default-deny catch-all rule (FW-RULE-999).",
      path: `${flowSource} -> L3 Core -> Firewall [DEFAULT DENY]`,
    };
  }, [flowSource, flowDest, flowPort, firewallStrict]);

  // ==========================================
  // SIMULATOR 2: VLAN Trunking & 802.1Q Tagging Engine
  // ==========================================
  const [selectedVlan, setSelectedVlan] = useState(10);
  const [routingArch, setRoutingArch] = useState("roas"); // roas (Router-on-a-stick) | svi (Layer 3 Switch)
  const [framePcp, setFramePcp] = useState(0); // 0 (Best effort) to 7 (Network control)

  const vlanMetadata = useMemo(() => {
    const vlanMap = {
      10: { name: "Staff Subnet", subnet: "10.10.10.0/24", gw: "10.10.10.1", subInt: "Gig0/0.10" },
      20: { name: "Server Farm", subnet: "10.10.20.0/24", gw: "10.10.20.1", subInt: "Gig0/0.20" },
      30: { name: "Guest Network", subnet: "10.10.30.0/24", gw: "10.10.30.1", subInt: "Gig0/0.30" },
      40: { name: "IoT & Sensors", subnet: "10.10.40.0/24", gw: "10.10.40.1", subInt: "Gig0/0.40" },
      99: { name: "Management Zone", subnet: "10.10.99.0/24", gw: "10.10.99.1", subInt: "Gig0/0.99" },
    };
    return vlanMap[selectedVlan] || vlanMap[10];
  }, [selectedVlan]);

  // ==========================================
  // SIMULATOR 3: Stateful Firewall & NAT Translation Table
  // ==========================================
  const [conntrackState, setConntrackState] = useState("NEW"); // NEW | ESTABLISHED | RELATED | INVALID
  const [simNatType, setSimNatType] = useState("pat"); // pat | static | none
  const [clientSrcPort, setClientSrcPort] = useState(51244);

  const natTranslation = useMemo(() => {
    const publicIp = "198.51.100.2";
    const translatedPort = 40000 + (clientSrcPort % 10000);

    if (conntrackState === "INVALID") {
      return {
        action: "DROP PACKET",
        badge: "bg-red-50 text-red-700 border-red-200",
        log: "DROP: Out-of-state packet without matching TCP SYN or valid sequence number. Dropped by Netfilter conntrack.",
      };
    }

    if (simNatType === "pat") {
      return {
        action: "TRANSLATE & FORWARD",
        badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
        log: `PAT (Overload): 10.10.10.15:${clientSrcPort} -> ${publicIp}:${translatedPort} [NAT Session Active in Conntrack]`,
      };
    }

    return {
      action: "ROUTED DIRECTLY (NO NAT)",
      badge: "bg-blue-50 text-blue-700 border-blue-200",
      log: `Routed using internal IP 10.10.10.15:${clientSrcPort}. Header untouched.`,
    };
  }, [conntrackState, simNatType, clientSrcPort]);

  // ==========================================
  // SIMULATOR 4: Fault Injection & VRRP/HSRP Failover Simulator
  // ==========================================
  const [r1UplinkDown, setR1UplinkDown] = useState(false);
  const [preemptEnabled, setPreemptEnabled] = useState(true);
  const [timerMode, setTimerMode] = useState("standard"); // standard (3s hello / 10s hold) | msec (250ms hello / 750ms hold)

  const failoverMetrics = useMemo(() => {
    const helloMs = timerMode === "msec" ? 250 : 3000;
    const holdMs = timerMode === "msec" ? 750 : 10000;

    if (r1UplinkDown) {
      return {
        activeRouter: "Gateway Router 2 (Secondary)",
        activeIp: "10.10.10.1 (Virtual IP Claimed)",
        failoverTimeMs: holdMs,
        packetsDropped: timerMode === "msec" ? 1 : 10,
        status: "FAILOVER COMPLETED",
        badge: "bg-amber-50 text-amber-700 border-amber-200",
        log: `R1 Uplink Severed. Hold timer (${holdMs}ms) expired on R2. R2 transitioned: STANDBY -> SPEAK -> ACTIVE.`,
      };
    }

    return {
      activeRouter: "Gateway Router 1 (Primary - Priority 110)",
      activeIp: "10.10.10.1 (Virtual IP Active)",
      failoverTimeMs: 0,
      packetsDropped: 0,
      status: "STABLE PRIMARY",
      badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
      log: `Normal redundant operation. R1 is ACTIVE (Priority 110). R2 is STANDBY (Priority 100). Hello interval: ${helloMs}ms.`,
    };
  }, [r1UplinkDown, preemptEnabled, timerMode]);

  // ==========================================
  // SIMULATOR 5: Throughput, Jitter & Bufferbloat Benchmarking Sandbox
  // ==========================================
  const [linkBandwidth, setLinkBandwidth] = useState(1000); // 100 | 1000 | 10000 Mbps
  const [parallelStreams, setParallelStreams] = useState(4); // 1 | 4 | 8
  const [windowScaleSizeKb, setWindowScaleSizeKb] = useState(256); // 64 to 2048 KB

  const benchmarkResults = useMemo(() => {
    // Effective throughput bounded by TCP window and streams
    const maxTheoreticalThroughput = linkBandwidth * 0.94; // 6% protocol overhead
    const streamThroughput = Math.min(maxTheoreticalThroughput, (windowScaleSizeKb * 8 * parallelStreams * 10) / 1000);
    const effectiveMbps = Math.round(Math.min(maxTheoreticalThroughput, Math.max(linkBandwidth * 0.5, streamThroughput)));
    const transferTimeSec = ((10000 / effectiveMbps) * 8).toFixed(2);
    const retransmits = parallelStreams > 4 ? 12 : 2;
    const jitterMs = (0.4 + parallelStreams * 0.15).toFixed(2);

    return {
      effectiveMbps,
      transferTimeSec,
      retransmits,
      jitterMs,
      cpuUtilization: `${Math.min(95, 12 + parallelStreams * 8)}%`,
    };
  }, [linkBandwidth, parallelStreams, windowScaleSizeKb]);

  // ==========================================
  // QUIZ STATE & DATA
  // ==========================================
  const quizQuestions = [
    {
      id: 1,
      question: "What constitutes the strongest, most defensible technical evidence that network segmentation is functioning correctly?",
      options: [
        "A network diagram illustrating separated switches and colored subnets",
        "VLAN IDs being configured with different numerical values in switch NVRAM",
        "Empirical test results demonstrating that permitted business flows succeed while prohibited cross-segment flows are actively dropped by policy",
        "Deploying an enterprise router with high CPU capacity",
      ],
      correctIndex: 2,
      explanation:
        "Diagrams and configuration files show intent, not enforcement. Definitive evidence requires empirical positive testing (permitted flows succeed) and negative testing (unauthorized cross-segment attempts are actively blocked and logged by the firewall).",
    },
    {
      id: 2,
      question: "What essential safeguard must an engineer execute prior to initiating a controlled failure or link-severance test in a lab?",
      options: [
        "Delete the original device configurations to force dynamic convergence",
        "Save a known-good configuration baseline, document expected failover behavior, and verify telemetry collection",
        "Disable all Spanning Tree Protocol (STP) instances simultaneously",
        "Double the interface MTU to 9000 bytes across all access trunks",
      ],
      correctIndex: 1,
      explanation:
        "Before injecting faults, engineers must capture a known-good baseline configuration and state, define the expected recovery outcome, and ensure observability tools are actively logging so the event can be analyzed and safely restored.",
    },
    {
      id: 3,
      question: "In an 802.1Q tagged Ethernet frame, what is the role and size of the Tag Protocol Identifier (TPID) field?",
      options: [
        "It is 2 bytes long with a fixed value of 0x8100, identifying the frame as an 802.1Q tagged frame",
        "It is 4 bytes long and contains the destination IP address of the router sub-interface",
        "It is 12 bits long and specifies the VLAN ID (1 to 4094)",
        "It is 3 bits long and defines the Spanning Tree root bridge priority",
      ],
      correctIndex: 0,
      explanation:
        "The 802.1Q header is 4 bytes total: the first 2 bytes are the Tag Protocol Identifier (TPID), set to 0x8100. This signals to switches and network cards that an 802.1Q tag follows (containing 3-bit PCP, 1-bit DEI, and 12-bit VLAN ID).",
    },
    {
      id: 4,
      question: "Why should an enterprise Guest Wi-Fi subnet (e.g., VLAN 30) have a default-deny policy toward all internal subnets?",
      options: [
        "To prevent guest laptops from exhausting the DHCP lease pool on the core router",
        "To isolate untrusted personal/guest devices and prevent lateral movement or scanning against internal databases and servers",
        "Because guest devices cannot process TCP window scaling headers",
        "To force guest devices to use IPv6 link-local addresses exclusively",
      ],
      correctIndex: 1,
      explanation:
        "Guest devices are untrusted by definition (unmanaged, lack EDR, unknown malware status). Isolating the guest segment prevents malicious actors or infected guest laptops from scanning, attacking, or moving laterally into internal server and management zones.",
    },
    {
      id: 5,
      question: "In a high-availability first-hop redundancy protocol (HSRP / VRRP), how does tuning timers from standard (3s hello / 10s hold) to millisecond intervals affect network convergence?",
      options: [
        "It increases convergence time from seconds to minutes",
        "It reduces link failure detection and failover time from ~10 seconds down to sub-second (<800ms) recovery at the cost of slight control-plane CPU overhead",
        "It converts stateful TCP sessions into stateless UDP datagrams",
        "It eliminates the need for virtual IP addresses on the gateway",
      ],
      correctIndex: 1,
      explanation:
        "Standard HSRP timers (3s hello, 10s hold) cause a ~10-second blackout before a standby router claims the virtual IP. Millisecond timers (e.g. 250ms hello, 750ms hold) detect dead routers in under a second, minimizing packet drops and preventing TCP session timeouts.",
    },
    {
      id: 6,
      question: "What does a packet capture (PCAP) collected via Wireshark or tcpdump prove during network troubleshooting?",
      options: [
        "It proves that the entire enterprise network is free of vulnerabilities",
        "It proves the exact packets and protocol interactions that traversed that specific capture interface at that specific point in time",
        "It proves that the server CPU has zero hardware defects",
        "It proves that the routing protocol will never flap in the future",
      ],
      correctIndex: 1,
      explanation:
        "A packet capture is an authoritative record of what crossed a specific physical or virtual interface during the capture window. It proves whether packets reached that point, whether TCP handshakes completed, and whether errors or resets occurred, but only at that observation point.",
    },
    {
      id: 7,
      question: "What is the difference between Router-on-a-Stick (ROAS) and Layer 3 Switch Virtual Interfaces (SVIs) for inter-VLAN routing?",
      options: [
        "ROAS requires physical cables for each VLAN, while SVIs require wireless connections",
        "ROAS routes traffic across an external physical trunk link to a router sub-interface, whereas SVIs route traffic internally within switch ASIC hardware at wire speed",
        "ROAS cannot enforce access control lists (ACLs)",
        "SVIs are only supported on unmanaged home consumer switches",
      ],
      correctIndex: 1,
      explanation:
        "Router-on-a-Stick routes inter-VLAN traffic out of the switch across a single trunk link to a router with 802.1Q sub-interfaces ('hairpinning'). Layer 3 switches with Switch Virtual Interfaces (SVIs) route between VLANs directly inside the switch backplane using hardware ASICs at line rate.",
    },
    {
      id: 8,
      question: "In an enterprise network engineering report, why is documenting 'Residual Risks & Limitations' a mandatory section?",
      options: [
        "It allows engineers to avoid taking responsibility for project failures",
        "No network design eliminates all risk; identifying known single points of failure, budget tradeoffs, and operational caveats enables informed leadership governance",
        "It is required by the BGP RFC 4271 specification for route reflectors",
        "It automatically reduces the likelihood score on the risk register to zero",
      ],
      correctIndex: 1,
      explanation:
        "Engineering integrity requires transparency. Documenting residual risks (e.g., lack of redundant power supplies, single ISP uplink, or unencrypted legacy IoT protocols) provides organizations with a clear roadmap for future improvements and risk mitigation.",
    },
    {
      id: 9,
      question: "When running an `iperf3` throughput test, why should an engineer record test duration, parallel stream count, and host resource utilization alongside the bandwidth number?",
      options: [
        "Single-stream tests on high-latency links are limited by TCP window size; documenting parameters ensures tests are scientifically reproducible and explainable",
        "Because iperf3 crashes if parallel streams are not documented in the terminal",
        "To calculate the BGP autonomous system path prepending count",
        "To prevent switches from discarding 802.1Q trunk tags",
      ],
      correctIndex: 0,
      explanation:
        "Network throughput is heavily influenced by TCP window scale, latency, stream count, and CPU bottlenecks. Recording the exact methodology ensures results can be validated and reproduced by other engineers under identical conditions.",
    },
    {
      id: 10,
      question: "Which sequence correctly reflects the 5-phase engineering lifecycle for building an enterprise network capstone?",
      options: [
        "Construct -> Test -> Assess -> Design -> Scope",
        "Scope & Design -> Construct Topology -> Implement Services & Controls -> Verify & Troubleshoot -> Assess & Present",
        "Test -> Deploy -> Design -> Reverse -> Report",
        "Purchase Hardware -> Connect Cables -> Disable Firewalls -> Ping -> Finish",
      ],
      correctIndex: 1,
      explanation:
        "A structured engineering lifecycle moves methodically from Phase 1 (Scope & Design), Phase 2 (Construct Topology), Phase 3 (Implement Services & Controls), Phase 4 (Verify & Troubleshoot), to Phase 5 (Assess, Document, & Present).",
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
  // CAPSTONE ENGINEERING REPORT DELIVERABLE TEMPLATE
  // ==========================================
  const capstoneReportTemplate = `# ENTERPRISE NETWORK ENGINEERING & SECURITY CAPSTONE REPORT
Project Reference: FINAL-NET-CAPSTONE-2026-REPORT
Project Title: Multi-Tier Segmented Enterprise Network with Redundant Core & Zero Trust Access
Author: Principal Network Engineer & Security Architect
Track: Computer Networks & Internet Engineering Master Curriculum
Evaluation Status: PORTFOLIO READY — 100/100 AUDITED

---

## 1. Executive Summary
This capstone document details the design, implementation, verification, and security audit of an enterprise network infrastructure supporting 500+ users across segmented corporate, server, guest, and management zones. The architecture transitions the organization from a flat broadcast domain into an 802.1Q segmented network featuring inter-VLAN routing, stateful perimeter inspection, automated DHCP/DNS failover, first-hop gateway redundancy (HSRP/VRRP), and strict Zero Trust microsegmentation. All designs were empirically verified via packet captures, throughput benchmarks, and fault-injection simulations.

## 2. Requirements & Acceptance Criteria
| Requirement ID | Specification | Technical Acceptance Criteria | Status |
|:---|:---|:---|:---:|
| **FR-01** | **Network Segmentation** | Staff (VLAN 10), Servers (VLAN 20), Guest (VLAN 30), IoT (VLAN 40), and Management (VLAN 99) fully isolated. | **VERIFIED** |
| **FR-02** | **IP Addressing Plan** | Deterministic RFC 1918 allocations with documented subnets, default gateways, and broadcast boundaries. | **VERIFIED** |
| **FR-03** | **Inter-VLAN Routing** | High-throughput routing enabled between approved tiers; line-rate SVI and router sub-interfaces active. | **VERIFIED** |
| **FR-04** | **Core Network Services** | Redundant DNS (UDP 53) and DHCP relay agents functioning with lease reservation tables. | **VERIFIED** |
| **FR-05** | **Access Control (ACLs)** | Default-deny perimeter firewall rules enforced; direct guest and staff access to databases blocked. | **VERIFIED** |
| **FR-06** | **High Availability** | Dual gateway routers configured with millisecond VRRP/HSRP timers; sub-second recovery verified. | **VERIFIED** |
| **FR-07** | **Observability** | Comprehensive PCAP captures, NetFlow/IPFIX telemetry, and syslog audit logging active. | **VERIFIED** |
| **FR-08** | **Reproducibility** | Sanitized Cisco IOS and Linux Netfilter configuration scripts version-controlled in repository. | **VERIFIED** |

---

## 3. Reference Topology & Addressing Plan
\`\`\`
                          [ EXTERNAL INTERNET / WAN ]
                                       |
                         +-------------+-------------+
                         |  Perimeter Firewall (PAT) | (198.51.100.2)
                         +-------------+-------------+
                                       |
                   +-------------------+-------------------+
                   |                                       |
       +-----------+-----------+               +-----------+-----------+
       | Gateway Router 1 (PRI)|               | Gateway Router 2 (SEC)|
       |   Priority: 110 (ACT) | <--- VRRP --> |   Priority: 100 (STB) |
       +-----------+-----------+   (10.10.x.1) +-----------+-----------+
                   |                                       |
                   +-------------------+-------------------+
                                       | 802.1Q Trunk Link
                         +-------------+-------------+
                         |  Layer 3 Distribution SW  |
                         +-------------+-------------+
                                 |         |
                  +--------------+         +--------------+
                  |                                       |
      +-----------+-----------+               +-----------+-----------+
      |  Access Switch 1 (SW1)|               |  Access Switch 2 (SW2)|
      +-----------+-----------+               +-----------+-----------+
         |                 |                     |                 |
     [VLAN 10]         [VLAN 30]             [VLAN 20]         [VLAN 99]
    Staff Subnet      Guest Subnet          Server Farm      Management
   10.10.10.0/24     10.10.30.0/24         10.10.20.0/24    10.10.99.0/24
\`\`\`

### Comprehensive Subnet Allocation
- **VLAN 10 (Staff):** \`10.10.10.0/24\` &bull; Gateway: \`10.10.10.1\` &bull; DHCP Pool: \`10.10.10.50 - 10.10.10.250\`
- **VLAN 20 (Servers):** \`10.10.20.0/24\` &bull; Gateway: \`10.10.20.1\` &bull; Static IPs: \`DNS: .2\`, \`App: .10\`, \`DB: .50\`
- **VLAN 30 (Guest):** \`10.10.30.0/24\` &bull; Gateway: \`10.10.30.1\` &bull; Isolated Internet access only
- **VLAN 40 (IoT):** \`10.10.40.0/24\` &bull; Gateway: \`10.10.40.1\` &bull; Isolated telemetry subnet
- **VLAN 99 (Management):** \`10.10.99.0/24\` &bull; Gateway: \`10.10.99.1\` &bull; SSH Bastion & Out-of-Band Admin

---

## 4. Verification Test Matrix & Observed Evidence
| Test ID | Test Scenario | Expected Outcome | Observed Result | Evidence Reference | Status |
|:---|:---|:---|:---|:---|:---:|
| **NET-01** | DHCP Address Acquisition on Staff PC | Client assigned 10.10.10.55/24, GW 10.10.10.1, DNS 10.10.20.2 | Assigned correctly within 1.2s | \`dhcp-lease.log\` | **PASS** |
| **NET-02** | Gateway Reachability (ICMP) | Ping from Staff PC to 10.10.10.1 succeeds (<1ms RTT) | 0% packet loss, RTT 0.38ms | \`ping-gw.pcap\` | **PASS** |
| **NET-03** | DNS Resolution via Internal Resolver | dig app.enterprise.internal @10.10.20.2 returns 10.10.20.10 | Valid A record returned in 2ms | \`dns-query.pcap\` | **PASS** |
| **SEC-01** | Guest PC Probing Internal DB (10.10.20.50) | Firewall drops TCP 5432 SYN packet; logs security violation | Packet dropped by rule FW-RULE-GUEST-DENY | \`fw-deny-guest.log\` | **PASS** |
| **SEC-02** | Staff PC Direct DB Access | Dropped by microsegmentation policy (direct human access denied) | TCP Connection Timed Out | \`fw-deny-db.log\` | **PASS** |
| **SEC-03** | App Server Connecting to DB (10.10.20.50:5432) | Connection established; mTLS handshake succeeds | TCP 3-way handshake established | \`app-db-mtls.pcap\` | **PASS** |
| **REL-01** | Primary Uplink Severance on Router 1 | Router 2 hold timer expires; claims Virtual IP 10.10.10.1 | Failover completed in 780ms; 1 drop | \`hsrp-failover.log\` | **PASS** |
| **REL-02** | Primary Link Restoration (Preempt Active) | Router 1 re-claims Active status smoothly | Preempt successful; 0 drops | \`hsrp-preempt.log\` | **PASS** |
| **BENCH-01**| Throughput Benchmark (iperf3 4-streams) | Achieves >920 Mbps on Gigabit link with CUBIC | 942 Mbps sustained throughput | \`iperf3-report.txt\` | **PASS** |

---

## 5. Security Assessment & Risk Register
| Finding ID | Vulnerability Description | Likelihood (1-5) | Impact (1-5) | Score | Treatment | Assigned Owner | Due Date |
|:---|:---|:---:|:---:|:---:|:---|:---|:---|
| **R-01** | Single Physical Firewall Appliance (SPOF at Perimeter) | 2 | 5 | **10** | **Mitigate:** Deploy active/standby firewall cluster. | NetEng Lead | 2026-11-30 |
| **R-02** | Unencrypted SNMPv2c Community Strings on Legacy Switches | 3 | 4 | **12** | **Mitigate:** Migrate all devices to SNMPv3 with SHA/AES. | SecOps Lead | 2026-11-15 |
| **R-03** | IoT Sensors Operating Outdated Embedded Firmware | 3 | 3 | **9** | **Accept & Isolate:** Enforce strict microsegmentation. | IoT Admin | 2026-12-15 |

---

## 6. Conclusion & Engineering Sign-Off
The final capstone successfully demonstrates all 24 learning outcomes across Computer Networks & Internet Engineering. The project establishes an auditable, high-performance, and defensible network architecture verified through reproducible automation scripts, packet captures, and fault injection drills.

*Certified by Architecture Governance Board — PrepSpaces Engineering Faculty*`;

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900">
      <ModuleNav activeModuleId="final-capstone" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Capstone Header Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200 flex items-center gap-1.5">
                  <Trophy size={13} className="text-[#ea580c]" />
                  MODULE 24 &bull; FINAL CAPSTONE PROJECT
                </span>
                <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 font-bold">
                  PORTFOLIO READY &bull; MASTER LEVEL
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-2">
                Final Capstone: Network Engineering &amp; Security Lab
              </h1>
              <p className="text-stone-700 text-sm mt-1 max-w-3xl">
                Synthesize all 24 modules: design, build, test, and audit an enterprise-grade segmented network architecture featuring 802.1Q VLAN trunking, inter-VLAN routing, stateful firewall policies, first-hop gateway redundancy (HSRP/VRRP), and Zero Trust access.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono bg-stone-100 px-3 py-1.5 rounded-xl border border-stone-200 text-stone-700 font-semibold">
                100-Point Evaluation Rubric &bull; 5 Interactive Simulators
              </span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-stone-200">
            {[
              { id: "curriculum", label: "Capstone Blueprint (24.1 - 24.13)", icon: BookOpen },
              { id: "simulators", label: "5 Production Simulators", icon: Sliders },
              { id: "lab", label: "Capstone Lab 24.1 (10 Milestones)", icon: Terminal },
              { id: "quiz", label: "Readiness Quiz (10 Qs)", icon: HelpCircle },
              { id: "audit", label: "Engineering Report Deliverable", icon: FileCode },
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

        {/* TAB 1: CURRICULUM BLUEPRINT */}
        {activeTab === "curriculum" && (
          <div className="space-y-6">
            {/* 24.1 & 24.2 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#ea580c] flex items-center justify-center font-mono font-bold text-sm">
                  1
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-[#ea580c]">SECTION 24.1 &amp; 24.2</span>
                  <h2 className="text-xl font-bold text-stone-900">
                    Capstone Project Scopes &amp; Measurable Outcomes
                  </h2>
                </div>
              </div>

              <div className="mt-4 text-stone-700 text-sm leading-relaxed space-y-4">
                <p>
                  The final capstone evaluates your ability to translate abstract requirements into a verifiable, secure network deployment. Choose from 4 approved engineering scopes:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-orange-50/50 border border-orange-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-sm text-stone-900">Project A: Secure Enterprise Network</h4>
                      <span className="text-[10px] font-mono font-bold bg-[#ea580c] text-white px-2 py-0.5 rounded">RECOMMENDED</span>
                    </div>
                    <p className="text-xs text-stone-700">
                      Multi-tier corporate campus: Staff, Server, Guest, and Management VLANs; inter-VLAN routing; stateful firewall policies; DNS/DHCP; and Wireshark verification.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <h4 className="font-bold text-sm text-stone-900">Project B: Cloud Network Architecture</h4>
                    <p className="text-xs text-stone-700">
                      Multi-tier cloud VPC: Public ingress gateway, private application microservices, database tier isolation, network security groups, and transit routing.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <h4 className="font-bold text-sm text-stone-900">Project C: Network Security Monitoring (NSM)</h4>
                    <p className="text-xs text-stone-700">
                      Detection lab: Suricata IDS, Zeek metadata extraction, synthetic attack generation (ARP spoofing, DNS exfiltration), and SIEM event correlation.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <h4 className="font-bold text-sm text-stone-900">Project D: Resilient Routing &amp; Troubleshooting</h4>
                    <p className="text-xs text-stone-700">
                      High-availability routing: Dual-homed BGP/OSPF multi-router fabric, HSRP/VRRP failover drills, synthetic fault injection, and iperf3 benchmarking.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 24.3 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#ea580c] flex items-center justify-center font-mono font-bold text-sm">
                  2
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-[#ea580c]">SECTION 24.3</span>
                  <h2 className="text-xl font-bold text-stone-900">
                    Functional &amp; Non-Functional Requirements Matrix
                  </h2>
                </div>
              </div>

              <div className="mt-4 text-stone-700 text-sm leading-relaxed space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 text-stone-700 font-mono">
                        <th className="py-2 pr-4 font-bold">Req ID</th>
                        <th className="py-2 pr-4 font-bold">Requirement Title</th>
                        <th className="py-2 font-bold">Formal Acceptance Criteria</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-700">
                      <tr>
                        <td className="py-2.5 pr-4 font-mono font-bold text-stone-900">FR-01</td>
                        <td className="py-2.5 pr-4 font-semibold text-stone-900">Segmentation</td>
                        <td className="py-2.5">Staff, Server, Guest, IoT, and Management reside in separate broadcast domains (802.1Q).</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4 font-mono font-bold text-stone-900">FR-02</td>
                        <td className="py-2.5 pr-4 font-semibold text-stone-900">IP Addressing</td>
                        <td className="py-2.5">Every subnet has a documented CIDR allocation, default gateway, and DHCP lease scope.</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4 font-mono font-bold text-stone-900">FR-03</td>
                        <td className="py-2.5 pr-4 font-semibold text-stone-900">Routing</td>
                        <td className="py-2.5">Inter-VLAN routing enables permitted communication; no routing loops or black holes exist.</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4 font-mono font-bold text-stone-900">FR-04</td>
                        <td className="py-2.5 pr-4 font-semibold text-stone-900">Core Services</td>
                        <td className="py-2.5">DNS and DHCP services operate with high availability and deterministic lease tables.</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4 font-mono font-bold text-stone-900">FR-05</td>
                        <td className="py-2.5 pr-4 font-semibold text-stone-900">Access Control</td>
                        <td className="py-2.5">Stateful firewall rules enforce default-deny; guest and staff direct database access is blocked.</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4 font-mono font-bold text-stone-900">FR-06</td>
                        <td className="py-2.5 pr-4 font-semibold text-stone-900">Observability</td>
                        <td className="py-2.5">PCAP packet captures and firewall audit logs capture both allowed flows and blocked attempts.</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4 font-mono font-bold text-stone-900">FR-07</td>
                        <td className="py-2.5 pr-4 font-semibold text-stone-900">Recovery</td>
                        <td className="py-2.5">A link failure test validates first-hop redundancy protocol (HSRP/VRRP) recovery under 1 second.</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4 font-mono font-bold text-stone-900">FR-08</td>
                        <td className="py-2.5 pr-4 font-semibold text-stone-900">Reproducibility</td>
                        <td className="py-2.5">All topology files, sanitized configs, and test scripts allow an independent peer to rebuild the lab.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 24.4 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#ea580c] flex items-center justify-center font-mono font-bold text-sm">
                  3
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-[#ea580c]">SECTION 24.4</span>
                  <h2 className="text-xl font-bold text-stone-900">
                    Reference Architecture, IP Plan &amp; Security Traffic Matrix
                  </h2>
                </div>
              </div>

              <div className="mt-4 text-stone-700 text-sm leading-relaxed space-y-4">
                <div className="bg-stone-900 text-stone-200 p-4 rounded-2xl font-mono text-xs overflow-x-auto">
                  <div className="text-orange-400 font-bold mb-2">REFERENCE CAMPUS NETWORK ARCHITECTURE:</div>
                  Clients (VLAN 10/30/40) &rarr; Access Switch (SW1/SW2) &rarr; 802.1Q Trunk &rarr; L3 Core Switch &rarr; Firewall &rarr; WAN Gateway (PAT)
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-mono font-bold text-stone-900">VLAN 10: Staff (Corporate)</span>
                    <p className="text-[11px] text-stone-700 mt-1">10.10.10.0/24 &bull; GW: 10.10.10.1 &bull; Approved business access to internal servers and WAN.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-mono font-bold text-stone-900">VLAN 20: Server Farm</span>
                    <p className="text-[11px] text-stone-700 mt-1">10.10.20.0/24 &bull; GW: 10.10.20.1 &bull; Static services: DNS (.2), App (.10), DB (.50).</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-mono font-bold text-stone-900">VLAN 30: Guest Wi-Fi</span>
                    <p className="text-[11px] text-stone-700 mt-1">10.10.30.0/24 &bull; GW: 10.10.30.1 &bull; Complete isolation from internal subnets; Internet only.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-mono font-bold text-stone-900">VLAN 40: IoT &amp; Sensors</span>
                    <p className="text-[11px] text-stone-700 mt-1">10.10.40.0/24 &bull; GW: 10.10.40.1 &bull; Quarantined telemetry devices; MQTT broker exception.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-mono font-bold text-stone-900">VLAN 99: Out-of-Band Mgmt</span>
                    <p className="text-[11px] text-stone-700 mt-1">10.10.99.0/24 &bull; GW: 10.10.99.1 &bull; Switch SSH/SNMP consoles; restricted to Admin Host.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-mono font-bold text-stone-900">WAN Uplink: Simulated ISP</span>
                    <p className="text-[11px] text-stone-700 mt-1">198.51.100.0/29 &bull; GW: 198.51.100.1 &bull; PAT public IP: 198.51.100.2.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 24.5 & 24.10 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#ea580c] flex items-center justify-center font-mono font-bold text-sm">
                  4
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-[#ea580c]">SECTION 24.5 &amp; 24.10</span>
                  <h2 className="text-xl font-bold text-stone-900">
                    5-Phase Lifecycle &amp; 100-Point Evaluation Rubric
                  </h2>
                </div>
              </div>

              <div className="mt-4 text-stone-700 text-sm leading-relaxed space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
                  {[
                    { phase: "Phase 1: Design", pts: "15 Pts", desc: "Project charter, topology map, IP plan, threat assumptions." },
                    { phase: "Phase 2: Build", pts: "20 Pts", desc: "Construct switches, routers, 802.1Q trunks, and baseline configs." },
                    { phase: "Phase 3: Controls", pts: "20 Pts", desc: "Stateful firewall rules, DNS/DHCP services, and NAT overload." },
                    { phase: "Phase 4: Verify", pts: "20 Pts", desc: "Positive/negative testing, failover drills, and PCAP collection." },
                    { phase: "Phase 5: Report", pts: "25 Pts", desc: "Final engineering report, risk register, and sanitized repo." },
                  ].map((p, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-center">
                      <span className="text-xs font-mono font-bold text-stone-900">{p.phase}</span>
                      <div className="text-xs font-mono font-bold text-[#ea580c] mt-0.5">{p.pts}</div>
                      <p className="text-[11px] text-stone-700 mt-1">{p.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 font-mono text-xs text-stone-700">
                  <span className="font-bold text-stone-900">Grading Target:</span> 80/100 or higher required for master certification. Attractive diagrams without verified test evidence, packet captures, or firewall logs receive a maximum of 40/100.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: FIVE INTERACTIVE SIMULATORS */}
        {activeTab === "simulators" && (
          <div className="space-y-8">
            {/* SIMULATOR 1: Packet Flow Simulator */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                    SIMULATOR 1
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mt-2">
                    Multi-Segment Topology &amp; Live Packet Flow Simulator
                  </h3>
                  <p className="text-stone-700 text-xs mt-1">
                    Simulate packet transmission across VLANs, switches, routers, and firewalls with live security policy evaluation.
                  </p>
                </div>

                <div className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold ${flowResult.badge}`}>
                  {flowResult.status}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-mono text-stone-700">Source Host &amp; VLAN:</label>
                    <select
                      value={flowSource}
                      onChange={(e) => setFlowSource(e.target.value)}
                      className="w-full mt-1 text-xs border border-stone-300 rounded-lg p-2 bg-white"
                    >
                      <option value="staff_pc">Staff Workstation (10.10.10.15 - VLAN 10)</option>
                      <option value="guest_laptop">Guest Laptop (10.10.30.44 - VLAN 30)</option>
                      <option value="app_srv">App Server (10.10.20.10 - VLAN 20)</option>
                      <option value="admin_pc">Admin Station (10.10.99.5 - VLAN 99)</option>
                      <option value="iot_device">IoT Sensor (10.10.40.8 - VLAN 40)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-stone-700">Destination Resource:</label>
                    <select
                      value={flowDest}
                      onChange={(e) => setFlowDest(e.target.value)}
                      className="w-full mt-1 text-xs border border-stone-300 rounded-lg p-2 bg-white"
                    >
                      <option value="app_srv">App Server (10.10.20.10)</option>
                      <option value="db_srv">Database Server (10.10.20.50)</option>
                      <option value="dns_srv">DNS/DHCP Server (10.10.20.2)</option>
                      <option value="mgmt_sw">Switch Management (10.10.99.1)</option>
                      <option value="external_web">External Web Server (WAN 203.0.113.80)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-mono text-stone-700">Target Destination Port:</label>
                    <select
                      value={flowPort}
                      onChange={(e) => setFlowPort(Number(e.target.value))}
                      className="w-full mt-1 text-xs border border-stone-300 rounded-lg p-2 bg-white"
                    >
                      <option value="443">TCP 443 (HTTPS Web)</option>
                      <option value="5432">TCP 5432 (PostgreSQL Database)</option>
                      <option value="53">UDP 53 (DNS Query)</option>
                      <option value="22">TCP 22 (SSH Management)</option>
                      <option value="8883">TCP 8883 (MQTT Telemetry)</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-200 mt-4">
                    <div>
                      <div className="text-xs font-bold text-stone-900">Enforce Strict Default-Deny</div>
                      <div className="text-[11px] text-stone-700">Drops all undeclared cross-VLAN flows</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={firewallStrict}
                      onChange={(e) => setFirewallStrict(e.target.checked)}
                      className="w-5 h-5 accent-[#ea580c] cursor-pointer"
                    />
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-950 font-mono text-xs text-stone-200 flex flex-col justify-between">
                  <div>
                    <span className="text-orange-400 font-bold">FLOW INSPECTION LOG:</span>
                    <p className="mt-2 text-white text-xs leading-relaxed">
                      {flowResult.desc}
                    </p>
                  </div>

                  <div className="mt-3 pt-3 border-t border-stone-800 text-[11px] text-stone-400">
                    <span className="text-stone-300 font-bold">Physical Packet Path:</span><br />
                    <code className="text-emerald-400">{flowResult.path}</code>
                  </div>
                </div>
              </div>
            </div>

            {/* SIMULATOR 2: VLAN Trunking & 802.1Q Tagging Engine */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                    SIMULATOR 2
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mt-2">
                    VLAN Trunking, 802.1Q Tagging &amp; Inter-VLAN Routing Engine
                  </h3>
                  <p className="text-stone-700 text-xs mt-1">
                    Inspect 4-byte 802.1Q tag injection on switch trunks and evaluate Router-on-a-Stick sub-interface routing.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setRoutingArch("roas")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      routingArch === "roas" ? "bg-[#ea580c] text-white" : "bg-stone-100 text-stone-700"
                    }`}
                  >
                    Router-on-a-Stick
                  </button>
                  <button
                    onClick={() => setRoutingArch("svi")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      routingArch === "svi" ? "bg-[#ea580c] text-white" : "bg-stone-100 text-stone-700"
                    }`}
                  >
                    Layer 3 Switch SVI
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-mono text-stone-700">Select Access VLAN:</label>
                    <div className="grid grid-cols-3 gap-2 mt-1">
                      {[10, 20, 30, 40, 99].map((v) => (
                        <button
                          key={v}
                          onClick={() => setSelectedVlan(v)}
                          className={`py-2 rounded-xl text-xs font-mono font-bold transition cursor-pointer ${
                            selectedVlan === v
                              ? "bg-stone-900 text-white"
                              : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                          }`}
                        >
                          VLAN {v}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-stone-700 flex justify-between">
                      <span>802.1p Priority Code Point (PCP):</span>
                      <span className="font-bold">PCP {framePcp} (CoS)</span>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="7"
                      value={framePcp}
                      onChange={(e) => setFramePcp(Number(e.target.value))}
                      className="w-full mt-1 accent-[#ea580c]"
                    />
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs font-mono space-y-1">
                    <div>Subnet: <span className="font-bold text-stone-900">{vlanMetadata.subnet}</span></div>
                    <div>Gateway IP: <span className="font-bold text-stone-900">{vlanMetadata.gw}</span></div>
                    <div>Routing Interface: <span className="font-bold text-[#ea580c]">{routingArch === "roas" ? vlanMetadata.subInt : `Vlan${selectedVlan} (SVI)`}</span></div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-stone-950 font-mono text-xs text-stone-300 space-y-3">
                  <div className="text-orange-400 font-bold">802.1Q ETHERNET FRAME DISSECTION:</div>
                  <div className="p-3 rounded-xl bg-stone-900 border border-stone-800 text-[11px] leading-relaxed">
                    <span className="text-stone-400">Preamble (7B) | SFD (1B) | D-MAC | S-MAC |</span><br />
                    <span className="text-emerald-400 font-bold">TPID: 0x8100 (2 Bytes)</span> &bull;{" "}
                    <span className="text-blue-400 font-bold">PCP: {framePcp} (3 bits)</span> &bull;{" "}
                    <span className="text-amber-400 font-bold">DEI: 0 (1 bit)</span> &bull;{" "}
                    <span className="text-purple-400 font-bold">VID: {selectedVlan} (12 bits)</span><br />
                    <span className="text-stone-400">| EtherType: 0x0800 (IPv4) | Payload | FCS (4B)</span>
                  </div>
                  <p className="text-[11px] text-stone-400 leading-normal">
                    {routingArch === "roas"
                      ? "ROAS: Tag is stripped by router sub-interface, TTL decremented, route recalculated, re-tagged on egress."
                      : "SVI: Routed directly inside the switch ASIC backplane at wire-speed without traversing an external router link."}
                  </p>
                </div>
              </div>
            </div>

            {/* SIMULATOR 3: Stateful Firewall & NAT */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                    SIMULATOR 3
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mt-2">
                    Stateful Firewall Policy Rule Evaluator &amp; NAT Sandbox
                  </h3>
                  <p className="text-stone-700 text-xs mt-1">
                    Inspect Conntrack state evaluation (NEW, ESTABLISHED, INVALID) and Port Address Translation (PAT).
                  </p>
                </div>

                <div className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold ${natTranslation.badge}`}>
                  {natTranslation.action}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-mono text-stone-700">TCP Conntrack Session State:</label>
                    <select
                      value={conntrackState}
                      onChange={(e) => setConntrackState(e.target.value)}
                      className="w-full mt-1 text-xs border border-stone-300 rounded-lg p-2 bg-white"
                    >
                      <option value="NEW">NEW (Initial TCP SYN packet)</option>
                      <option value="ESTABLISHED">ESTABLISHED (SYN-ACK / ACK Handshake Completed)</option>
                      <option value="RELATED">RELATED (Auxiliary session, e.g. FTP/SIP data)</option>
                      <option value="INVALID">INVALID (Out-of-order ACK or desynchronized state)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-stone-700">Perimeter NAT Translation Mode:</label>
                    <select
                      value={simNatType}
                      onChange={(e) => setSimNatType(e.target.value)}
                      className="w-full mt-1 text-xs border border-stone-300 rounded-lg p-2 bg-white"
                    >
                      <option value="pat">PAT Overload (Many private IPs to single WAN IP)</option>
                      <option value="none">No NAT (Direct routed private subnet)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-stone-700 flex justify-between">
                      <span>Client Ephemeral Source Port:</span>
                      <span className="font-bold">{clientSrcPort}</span>
                    </label>
                    <input
                      type="range"
                      min="49152"
                      max="65535"
                      value={clientSrcPort}
                      onChange={(e) => setClientSrcPort(Number(e.target.value))}
                      className="w-full mt-1 accent-[#ea580c]"
                    />
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-stone-950 font-mono text-xs text-stone-300 flex flex-col justify-between">
                  <div>
                    <span className="text-orange-400 font-bold">STATE TABLE &amp; NAT TRANSLATION RECORD:</span>
                    <p className="mt-3 text-white text-xs leading-relaxed">
                      {natTranslation.log}
                    </p>
                  </div>

                  <div className="mt-4 p-3 rounded-xl bg-stone-900 border border-stone-800 text-[11px] text-stone-400">
                    <span className="text-stone-300 font-bold">Netfilter conntrack command:</span><br />
                    <code className="text-emerald-400">conntrack -L -p tcp --orig-src 10.10.10.15</code>
                  </div>
                </div>
              </div>
            </div>

            {/* SIMULATOR 4: Redundancy & VRRP Failover */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                    SIMULATOR 4
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mt-2">
                    Fault Injection, Redundancy &amp; VRRP Failover Simulator
                  </h3>
                  <p className="text-stone-700 text-xs mt-1">
                    Sever primary gateway uplinks and observe millisecond failover timer convergence on virtual default gateways.
                  </p>
                </div>

                <div className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold ${failoverMetrics.badge}`}>
                  {failoverMetrics.status}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                    <div>
                      <div className="text-xs font-bold text-stone-900">Sever Primary Gateway Uplink (R1)</div>
                      <div className="text-[11px] text-stone-700">Simulate hardware crash or fiber cut on Router 1</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={r1UplinkDown}
                      onChange={(e) => setR1UplinkDown(e.target.checked)}
                      className="w-5 h-5 accent-[#ea580c] cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-stone-700">VRRP / HSRP Timer Tuning:</label>
                    <select
                      value={timerMode}
                      onChange={(e) => setTimerMode(e.target.value)}
                      className="w-full mt-1 text-xs border border-stone-300 rounded-lg p-2 bg-white"
                    >
                      <option value="msec">Millisecond Timers (250ms Hello / 750ms Hold - Recommended)</option>
                      <option value="standard">Standard Timers (3s Hello / 10s Hold - High Latency)</option>
                    </select>
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs font-mono space-y-1">
                    <div>Active Gateway: <span className="font-bold text-stone-900">{failoverMetrics.activeRouter}</span></div>
                    <div>Virtual IP: <span className="font-bold text-[#ea580c]">{failoverMetrics.activeIp}</span></div>
                    <div>Convergence Duration: <span className="font-bold text-stone-900">{failoverMetrics.failoverTimeMs} ms</span></div>
                    <div>Simulated Packet Drop: <span className="font-bold text-red-600">{failoverMetrics.packetsDropped} packets</span></div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-stone-950 font-mono text-xs text-stone-300 flex flex-col justify-between">
                  <div>
                    <span className="text-orange-400 font-bold">VRRP STATE MACHINE DRILL:</span>
                    <p className="mt-3 text-white text-xs leading-relaxed">
                      {failoverMetrics.log}
                    </p>
                  </div>

                  <div className="mt-4 p-3 rounded-xl bg-stone-900 border border-stone-800 text-[11px] text-stone-400">
                    <span className="text-stone-300 font-bold">Verification CLI:</span><br />
                    <code className="text-emerald-400">show vrrp brief &bull; show standby brief</code>
                  </div>
                </div>
              </div>
            </div>

            {/* SIMULATOR 5: Throughput Benchmarking */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                    SIMULATOR 5
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mt-2">
                    Throughput, Jitter &amp; Bufferbloat Benchmarking Sandbox (iperf3)
                  </h3>
                  <p className="text-stone-700 text-xs mt-1">
                    Simulate multi-stream TCP throughput benchmarking and measure latency variation under sustained load.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-stone-900 text-white font-mono text-xs">
                  Sustained Rate: <span className="text-emerald-400 font-bold">{benchmarkResults.effectiveMbps} Mbps</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-mono text-stone-700 flex justify-between">
                      <span>Physical Link Capacity:</span>
                      <span className="font-bold">{linkBandwidth} Mbps</span>
                    </label>
                    <select
                      value={linkBandwidth}
                      onChange={(e) => setLinkBandwidth(Number(e.target.value))}
                      className="w-full mt-1 text-xs border border-stone-300 rounded-lg p-2 bg-white"
                    >
                      <option value="100">100 Mbps (FastEthernet)</option>
                      <option value="1000">1 Gbps (GigabitEthernet)</option>
                      <option value="10000">10 Gbps (10G Fiber)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-stone-700 flex justify-between">
                      <span>Parallel TCP Streams (-P):</span>
                      <span className="font-bold">{parallelStreams} streams</span>
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="8"
                      value={parallelStreams}
                      onChange={(e) => setParallelStreams(Number(e.target.value))}
                      className="w-full mt-1 accent-[#ea580c]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-stone-700 flex justify-between">
                      <span>TCP Window Scale:</span>
                      <span className="font-bold">{windowScaleSizeKb} KB</span>
                    </label>
                    <input
                      type="range"
                      min="64"
                      max="1024"
                      step="64"
                      value={windowScaleSizeKb}
                      onChange={(e) => setWindowScaleSizeKb(Number(e.target.value))}
                      className="w-full mt-1 accent-[#ea580c]"
                    />
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2 font-mono text-xs">
                  <div className="text-stone-700">Measured Throughput:</div>
                  <div className="text-lg font-bold text-stone-900">{benchmarkResults.effectiveMbps} Mbps</div>

                  <div className="pt-2 text-stone-700">Time to Transfer 10 GB:</div>
                  <div className="text-base font-bold text-[#ea580c]">{benchmarkResults.transferTimeSec} sec</div>

                  <div className="pt-2 text-stone-700">Average Jitter:</div>
                  <div className="text-sm font-bold text-stone-900">{benchmarkResults.jitterMs} ms</div>

                  <div className="pt-2 text-stone-700">TCP Retransmissions:</div>
                  <div className="text-sm font-bold text-stone-900">{benchmarkResults.retransmits} pkts</div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-950 font-mono text-xs text-stone-300 flex flex-col justify-between">
                  <div>
                    <span className="text-orange-400 font-bold">IPERF3 TERMINAL OUTPUT:</span>
                    <div className="text-[10px] mt-2 text-stone-300 leading-relaxed font-mono whitespace-pre-wrap">
                      [ ID] Interval &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Transfer &nbsp;&nbsp;&nbsp;&nbsp;Bitrate<br />
                      [SUM] 0.00-10.00 sec &nbsp;1.10 GBytes &nbsp;{benchmarkResults.effectiveMbps} Mbits/sec<br />
                      [SUM] Retr: {benchmarkResults.retransmits} &bull; Jitter: {benchmarkResults.jitterMs}ms
                    </div>
                  </div>

                  <div className="mt-3 text-[11px] text-stone-400">
                    CLI: <code className="text-emerald-400">iperf3 -c 10.10.20.10 -P {parallelStreams} -w {windowScaleSizeKb}K -t 10</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: HANDS-ON CAPSTONE LAB */}
        {activeTab === "lab" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
              <div>
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  FINAL CAPSTONE LAB 24.1
                </span>
                <h2 className="text-2xl font-bold text-stone-900 mt-2">
                  10-Milestone Enterprise Network Implementation &amp; Audit
                </h2>
                <p className="text-stone-700 text-xs mt-1">
                  Complete each verified engineering milestone from architecture design to packet capture and risk assessment.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-stone-700">
                  Progress: {Object.values(checkedItems).filter(Boolean).length} / 10 Milestones Completed
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  id: 1,
                  title: "Milestone 1: Project Charter & Requirements Definition",
                  desc: "Document technical acceptance criteria (FR-01 to FR-08), device naming conventions, and private IPv4 subnet schemes.",
                  cmd: "cat <<EOF > requirements.md\n# Project Charter: Enterprise Segmented Campus\nSubnets: VLAN 10, 20, 30, 40, 99\nEOF",
                },
                {
                  id: 2,
                  title: "Milestone 2: 802.1Q VLAN Trunking Configuration",
                  desc: "Configure 802.1Q encapsulation on inter-switch trunk ports. Allow only VLANs 10, 20, 30, 40, 99 and prune VLAN 1.",
                  cmd: "switchport trunk encapsulation dot1q\nswitchport mode trunk\nswitchport trunk allowed vlan 10,20,30,40,99\nswitchport nonegotiate",
                },
                {
                  id: 3,
                  title: "Milestone 3: Inter-VLAN Routing & Gateway SVIs",
                  desc: "Configure Layer 3 switch virtual interfaces (SVIs) or router sub-interfaces with primary gateways (10.10.x.1).",
                  cmd: "interface Vlan10\n  ip address 10.10.10.1 255.255.255.0\n  no shutdown\ninterface Vlan20\n  ip address 10.10.20.1 255.255.255.0\n  no shutdown",
                },
                {
                  id: 4,
                  title: "Milestone 4: Core Network Services (DHCP Relay & DNS)",
                  desc: "Configure ip helper-address on access VLANs to forward DHCP DISCOVER broadcasts to central server (10.10.20.2).",
                  cmd: "interface Vlan10\n  ip helper-address 10.10.20.2\ninterface Vlan30\n  ip helper-address 10.10.20.2",
                },
                {
                  id: 5,
                  title: "Milestone 5: Stateful Perimeter Firewall ACL Enforcement",
                  desc: "Deploy default-deny security policy. Isolate Guest VLAN 30 from all internal subnets; allow Staff to App Server on port 443.",
                  cmd: "access-list 101 permit tcp 10.10.10.0 0.0.0.255 host 10.10.20.10 eq 443\naccess-list 101 deny ip 10.10.30.0 0.0.0.255 10.10.0.0 0.0.255.255\naccess-list 101 permit ip any any",
                },
                {
                  id: 6,
                  title: "Milestone 6: High Availability Gateway Failover (HSRP/VRRP)",
                  desc: "Configure VRRP/HSRP group 10 with virtual IP 10.10.10.1, priority 110 on Primary, priority 100 on Secondary, and millisecond timers.",
                  cmd: "interface Vlan10\n  standby 10 ip 10.10.10.1\n  standby 10 priority 110\n  standby 10 preempt\n  standby 10 timers msec 250 msec 750",
                },
                {
                  id: 7,
                  title: "Milestone 7: WAN NAT Overload (PAT)",
                  desc: "Configure Port Address Translation so all internal RFC 1918 subnets translate to perimeter public IP 198.51.100.2.",
                  cmd: "ip nat inside source list 1 interface GigabitEthernet0/0/0 overload\naccess-list 1 permit 10.10.0.0 0.0.255.255",
                },
                {
                  id: 8,
                  title: "Milestone 8: Observability & Wireshark PCAP Capture",
                  desc: "Capture 802.1Q tagged trunk traffic, verify TPID 0x8100, and inspect TCP 3-way handshakes and DNS queries.",
                  cmd: "sudo tcpdump -i eth0 -nn -e 'vlan' -w trunk-capture.pcap\ntshark -r trunk-capture.pcap -Y 'vlan.id == 10'",
                },
                {
                  id: 9,
                  title: "Milestone 9: Controlled Fault Injection Drill",
                  desc: "Sever Primary Gateway uplink, observe standby router claiming Virtual IP, and measure packet loss recovery time.",
                  cmd: "# In router console\ninterface GigabitEthernet0/0/0\n  shutdown\n# Monitor ping loss and restoration",
                },
                {
                  id: 10,
                  title: "Milestone 10: Security Assessment & Final Engineering Sign-off",
                  desc: "Complete the 10-point security audit checklist, compile risk register with Likelihood x Impact ratings, and archive sanitized repo.",
                  cmd: "tar -czvf network-capstone-portfolio.tar.gz configs/ tests/ reports/ evidence/",
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

        {/* TAB 4: READINESS ASSESSMENT QUIZ */}
        {activeTab === "quiz" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
              <div>
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  CAPSTONE READINESS QUIZ
                </span>
                <h2 className="text-2xl font-bold text-stone-900 mt-2">
                  Final Comprehensive Knowledge Verification
                </h2>
                <p className="text-stone-700 text-xs mt-1">
                  10 comprehensive questions verifying technical mastery across switching, routing, firewalls, high availability, and security auditing.
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

        {/* TAB 5: ENGINEERING REPORT DELIVERABLE */}
        {activeTab === "audit" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
              <div>
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  FINAL DELIVERABLE
                </span>
                <h2 className="text-2xl font-bold text-stone-900 mt-2">
                  Complete Engineering Report &amp; Risk Assessment
                </h2>
                <p className="text-stone-700 text-xs mt-1">
                  Ready-to-use Markdown engineering report (FINAL-NET-CAPSTONE-2026-REPORT) ready for portfolio submission, technical interviews, and client audits.
                </p>
              </div>

              <button
                onClick={() => handleCopy(capstoneReportTemplate, "capstone-report")}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-[#ea580c] transition cursor-pointer shadow-sm"
              >
                {copiedKey === "capstone-report" ? (
                  <>
                    <Check size={14} className="text-emerald-400" />
                    <span>Copied Markdown!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy Full Engineering Report</span>
                  </>
                )}
              </button>
            </div>

            <div className="bg-stone-950 rounded-2xl p-5 border border-stone-800 font-mono text-[11px] text-stone-300 max-h-96 overflow-y-auto leading-relaxed whitespace-pre-wrap">
              {capstoneReportTemplate}
            </div>
          </div>
        )}

        {/* Course Completion Banner & Navigation */}
        <div className="mt-10 pt-6 border-t border-[#e7e3da] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => {
              navigate("/learning/networks/security-architecture");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#e7e3da] bg-white text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#ea580c] transition cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 23 — Modern Network Security Architecture</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-emerald-600 font-bold bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 flex items-center gap-1.5">
              <Award size={14} className="text-emerald-600" />
              FULL CURRICULUM COMPLETE: 24/24 MODULES MASTERED!
            </span>
            <button
              onClick={() => {
                navigate("/learning/networks");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 text-xs font-bold text-white hover:bg-[#ea580c] transition cursor-pointer"
            >
              <span>Back to Networks Overview</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
