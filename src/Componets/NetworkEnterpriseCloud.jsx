import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Server,
  Shield,
  Layers,
  Activity,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  Copy,
  Check,
  RefreshCw,
  Play,
  Terminal,
  Network,
  Cloud,
  Cpu,
  Lock,
  Unlock,
  Globe,
  FileText,
  HelpCircle,
  Database,
  Share2,
  HardDrive,
  Eye,
  Sliders,
  Zap,
} from "lucide-react";
import ModuleNav from "./ModuleNav";

export default function NetworkEnterpriseCloud() {
  const navigate = useNavigate();

  // Navigation tabs
  const [activeTab, setActiveTab] = useState("curriculum"); // curriculum | simulators | lab | quiz | audit

  // Checklist state (0/8)
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
  // SIMULATOR 1: Leaf-Spine & ECMP Visualizer
  // ==========================================
  const [spineFailure, setSpineFailure] = useState(null); // null | "spine1" | "spine2"
  const [ecmpFlows, setEcmpFlows] = useState([
    { id: "flow-1", src: "Leaf-1 (Compute 10.1.1.5)", dst: "Leaf-3 (DB 10.3.1.20)", hash: 0, spine: "Spine-1", status: "Active" },
    { id: "flow-2", src: "Leaf-1 (Compute 10.1.1.6)", dst: "Leaf-3 (DB 10.3.1.20)", hash: 1, spine: "Spine-2", status: "Active" },
    { id: "flow-3", src: "Leaf-2 (App 10.2.1.10)", dst: "Leaf-3 (Storage 10.3.1.99)", hash: 0, spine: "Spine-1", status: "Active" },
    { id: "flow-4", src: "Leaf-2 (App 10.2.1.11)", dst: "Leaf-3 (Storage 10.3.1.99)", hash: 1, spine: "Spine-2", status: "Active" },
  ]);
  const [lastEcmpAction, setLastEcmpAction] = useState("All links operational. ECMP distributing flows 50/50 across spines.");

  const toggleSpineFailure = (spineId) => {
    if (spineFailure === spineId) {
      setSpineFailure(null);
      setEcmpFlows((prev) =>
        prev.map((f) => ({
          ...f,
          spine: f.hash === 0 ? "Spine-1" : "Spine-2",
          status: "Active",
        }))
      );
      setLastEcmpAction(`${spineId === "spine1" ? "Spine-1" : "Spine-2"} restored. BGP/ECMP converged; balanced traffic resumed.`);
    } else {
      setSpineFailure(spineId);
      const remainingSpine = spineId === "spine1" ? "Spine-2" : "Spine-1";
      setEcmpFlows((prev) =>
        prev.map((f) => ({
          ...f,
          spine: remainingSpine,
          status: "Re-routed via " + remainingSpine,
        }))
      );
      setLastEcmpAction(`ALERT: ${spineId === "spine1" ? "Spine-1" : "Spine-2"} link down! ECMP converged instantly; 100% traffic shifted to ${remainingSpine} with zero packet loss.`);
    }
  };

  // ==========================================
  // SIMULATOR 2: Cloud VPC Subnet & Route Table Engine
  // ==========================================
  const [selectedVpcTest, setSelectedVpcTest] = useState("internet-to-alb");
  const vpcTestScenarios = {
    "internet-to-alb": {
      name: "Internet Client -> Public ALB (HTTPS :443)",
      routePath: "Internet -> Internet Gateway (IGW) -> Public Subnet A (10.20.1.0/24) -> ALB Interface",
      routeDecision: "Match 0.0.0.0/0 route to IGW. Public IP reachable.",
      sgDecision: "Security Group 'sg-alb': Inbound TCP 443 from 0.0.0.0/0 -> PERMIT.",
      result: "ALLOWED",
      details: "TLS handshake succeeds. ALB terminates TLS and proxies to private app instances.",
      color: "emerald",
    },
    "internet-to-app": {
      name: "Internet Client -> Direct to Private App Instance (TCP :8080)",
      routePath: "Internet -> Attempts direct connection to 10.20.11.15",
      routeDecision: "No Public IP on App Instance. Private Route Table has no route to IGW.",
      sgDecision: "App Security Group only permits ingress from 'sg-alb'.",
      result: "BLOCKED",
      details: "Packet dropped at cloud perimeter. Private subnet is completely inaccessible directly from the internet.",
      color: "rose",
    },
    "internet-to-db": {
      name: "Internet Client -> Direct to Private Database (PostgreSQL :5432)",
      routePath: "Internet -> Attempts direct connection to 10.20.21.50",
      routeDecision: "Private DB Subnet has no IGW route and no NAT Gateway route.",
      sgDecision: "DB Security Group 'sg-db': Only allows port 5432 from 'sg-app'.",
      result: "BLOCKED",
      details: "Zero direct reachability. Subnet isolation + Security Group enforcement prevents external exposure.",
      color: "rose",
    },
    "app-to-db-ok": {
      name: "App Instance -> Database (TCP :5432 PostgreSQL)",
      routePath: "App Subnet A (10.20.11.15) -> Local VPC Route -> DB Subnet A (10.20.21.50)",
      routeDecision: "Destination 10.20.21.50 matches local VPC CIDR (10.20.0.0/16) -> Forwarded.",
      sgDecision: "DB SG: Permit TCP 5432 where source = 'sg-app' -> MATCH & PERMIT.",
      result: "ALLOWED",
      details: "Application queries PostgreSQL database securely over internal cloud network backbone.",
      color: "emerald",
    },
    "app-to-db-ssh": {
      name: "App Instance -> Database (SSH :22 Port Probe)",
      routePath: "App Subnet A (10.20.11.15) -> Local VPC Route -> DB Subnet A (10.20.21.50)",
      routeDecision: "Local route allows packet to reach database network interface (ENI).",
      sgDecision: "DB SG: Port 22 is NOT in ingress allow-list -> REJECT (Silent Drop).",
      result: "BLOCKED",
      details: "Security group stateful filter drops unauthorized SSH probe. Lateral movement contained.",
      color: "rose",
    },
    "app-to-internet-outbound": {
      name: "App Instance -> Outbound Package Repo (apt/yum update)",
      routePath: "App Instance (10.20.11.15) -> Private Route Table (0.0.0.0/0 -> NAT Gateway 10.20.1.20) -> IGW -> Public Mirror",
      routeDecision: "Route table forwards 0.0.0.0/0 to NAT Gateway in Public Subnet. NAT rewrites to Elastic IP.",
      sgDecision: "App SG Outbound: Allow all egress. NAT Gateway manages return state.",
      result: "ALLOWED",
      details: "Outbound updates succeed via SNAT without exposing app instances to unsolicited inbound connections.",
      color: "emerald",
    },
    "db-to-internet-outbound": {
      name: "Database -> Direct Outbound Internet Connection",
      routePath: "DB Subnet (10.20.21.50) -> Route Table lookup for external IP",
      routeDecision: "DB Route Table has ONLY local route (10.20.0.0/16). No route for 0.0.0.0/0.",
      sgDecision: "Kernel drops packet: Network is unreachable (no default gateway).",
      result: "BLOCKED",
      details: "Strict isolation: Even if an attacker executes code on DB, it cannot phone home to an external C2 server.",
      color: "rose",
    },
  };

  // ==========================================
  // SIMULATOR 3: L4 vs L7 Load Balancing & Health Checks
  // ==========================================
  const [lbMode, setLbMode] = useState("L7"); // L4 | L7
  const [lbAlgorithm, setLbAlgorithm] = useState("round-robin"); // round-robin | weighted | least-conn
  const [checkType, setCheckType] = useState("deep"); // shallow (TCP 8080) | deep (HTTP /healthz)
  const [app2DbConnected, setApp2DbConnected] = useState(true);
  const [requestLog, setRequestLog] = useState([]);

  // Compute backend health based on check type
  const backends = useMemo(() => {
    return [
      { id: "app-1", ip: "10.20.11.10", zone: "us-east-1a", weight: 3, conns: 42, tcpStatus: "UP", dbStatus: "UP" },
      { id: "app-2", ip: "10.20.11.20", zone: "us-east-1a", weight: 2, conns: 12, tcpStatus: "UP", dbStatus: app2DbConnected ? "UP" : "DOWN" },
      { id: "app-3", ip: "10.20.12.30", zone: "us-east-1b", weight: 1, conns: 8, tcpStatus: "UP", dbStatus: "UP" },
    ].map((b) => {
      let isHealthy = true;
      if (checkType === "shallow") {
        isHealthy = b.tcpStatus === "UP"; // TCP syn-ack always OK
      } else {
        isHealthy = b.tcpStatus === "UP" && b.dbStatus === "UP"; // Deep /healthz tests DB connectivity
      }
      return { ...b, healthy: isHealthy };
    });
  }, [checkType, app2DbConnected]);

  const sendLbRequest = () => {
    const eligible = backends.filter((b) => b.healthy);
    if (eligible.length === 0) {
      setRequestLog((prev) => [
        { time: new Date().toLocaleTimeString(), backend: "None", status: "503 Service Unavailable (All backends unhealthy)", type: "error" },
        ...prev.slice(0, 5),
      ]);
      return;
    }

    let chosen;
    if (lbAlgorithm === "least-conn") {
      chosen = [...eligible].sort((a, b) => a.conns - b.conns)[0];
    } else if (lbAlgorithm === "weighted") {
      const totalWeight = eligible.reduce((acc, curr) => acc + curr.weight, 0);
      const rand = Math.random() * totalWeight;
      let cum = 0;
      chosen = eligible[0];
      for (const b of eligible) {
        cum += b.weight;
        if (rand <= cum) {
          chosen = b;
          break;
        }
      }
    } else {
      // Round robin random simulation
      chosen = eligible[Math.floor(Math.random() * eligible.length)];
    }

    const isFailureOnBackend = !app2DbConnected && chosen.id === "app-2" && checkType === "shallow";
    const statusMsg = isFailureOnBackend
      ? "500 Internal Error (App-2 accepted TCP but failed DB query!)"
      : `200 OK (${lbMode === "L7" ? "TLS terminated at ALB -> HTTP/1.1 forwarded" : "TCP Pass-through"})`;

    setRequestLog((prev) => [
      {
        time: new Date().toLocaleTimeString(),
        backend: `${chosen.id} (${chosen.ip})`,
        status: statusMsg,
        type: isFailureOnBackend ? "error" : "success",
      },
      ...prev.slice(0, 5),
    ]);
  };

  // ==========================================
  // SIMULATOR 4: VXLAN Overlay & MTU Inspector
  // ==========================================
  const [underlayMtu, setUnderlayMtu] = useState(1500); // 1500 (Standard) vs 1600 (Jumbo) vs 9000
  const [tenantPayload, setTenantPayload] = useState(1460); // Standard MSS

  const vxlanCalculations = useMemo(() => {
    // Inner frame: 14 (Ethernet) + 20 (IP) + 20 (TCP) + payload = 54 + payload
    const innerFrameSize = 14 + 40 + tenantPayload; // 1514
    // VXLAN Overhead: Outer Ethernet (14) + Outer IP (20) + Outer UDP (8) + VXLAN Header (8) = 50 bytes
    const totalOverlayPacket = innerFrameSize + 50;
    const isExceeded = totalOverlayPacket > underlayMtu;
    return {
      innerFrameSize,
      overhead: 50,
      totalOverlayPacket,
      isExceeded,
      status: isExceeded
        ? "PACKET DROPPED / FRAGMENTED: VXLAN total packet exceeds underlay MTU! Requires Jumbo frames on physical switches."
        : "HEALTHY: Underlay MTU accommodates 50-byte VXLAN encapsulation header without fragmentation.",
    };
  }, [underlayMtu, tenantPayload]);

  // ==========================================
  // SIMULATOR 5: Zero-Trust Bastion & Posture Sandbox
  // ==========================================
  const [ztManagedDevice, setZtManagedDevice] = useState(true);
  const [ztMfaPassed, setZtMfaPassed] = useState(true);
  const [ztRole, setZtRole] = useState("sre"); // "sre" | "frontend_dev" | "guest"
  const [ztAccessTarget, setZtAccessTarget] = useState("prod-db"); // "prod-db" | "staging-app" | "metrics"
  const [ztLog, setZtLog] = useState([]);

  const testZeroTrustAccess = () => {
    const timestamp = new Date().toLocaleTimeString();
    if (!ztManagedDevice) {
      setZtLog((prev) => [
        { time: timestamp, result: "DENIED", reason: "Device Posture Check Failed: Unmanaged laptop without MDM compliance certificate.", target: ztAccessTarget },
        ...prev.slice(0, 4),
      ]);
      return;
    }
    if (!ztMfaPassed) {
      setZtLog((prev) => [
        { time: timestamp, result: "DENIED", reason: "Authentication Failed: FIDO2 WebAuthn / MFA token challenge missing.", target: ztAccessTarget },
        ...prev.slice(0, 4),
      ]);
      return;
    }
    if (ztAccessTarget === "prod-db" && ztRole !== "sre") {
      setZtLog((prev) => [
        { time: timestamp, result: "DENIED", reason: `RBAC Least-Privilege Policy: Role '${ztRole}' is not authorized to access Production Database. Requires 'sre' entitlement.`, target: ztAccessTarget },
        ...prev.slice(0, 4),
      ]);
      return;
    }

    setZtLog((prev) => [
      {
        time: timestamp,
        result: "GRANTED",
        reason: `Authorized session issued. Temporary 15-minute mTLS certificate provisioned via Identity-Aware Bastion. Session audited.`,
        target: ztAccessTarget,
      },
      ...prev.slice(0, 4),
    ]);
  };

  // ==========================================
  // QUIZ STATE (10 Questions)
  // ==========================================
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "What is the primary architectural advantage of a leaf-spine data center fabric over a traditional 3-tier hierarchical design?",
      options: [
        "It eliminates the need for routing protocols entirely by running Spanning Tree Protocol across all switches",
        "It provides predictable, equidistant 2-hop leaf-to-leaf latency and massive horizontal scale-out bandwidth via ECMP for east-west traffic",
        "It eliminates the need for leaf switches by connecting physical servers directly to spine switches",
        "It automatically provides hardware-based IPsec encryption on every individual packet without performance cost",
      ],
      correct: 1,
      explanation:
        "In a leaf-spine Clos network, every leaf connects to every spine. East-west traffic between servers in different racks always traverses exactly 2 hops (Leaf -> Spine -> Leaf), and ECMP utilizes all available spine links concurrently without STP blocking links.",
    },
    {
      id: 2,
      question: "How does Equal-Cost Multi-Path (ECMP) routing distribute packets across redundant paths in a data center fabric?",
      options: [
        "It alternates individual packets in a round-robin order across links, regardless of the packet's source or destination",
        "It calculates a hash of the 5-tuple (Src IP, Dst IP, Protocol, Src Port, Dst Port) so that all packets within a single flow follow the same path, preventing out-of-order packet delivery",
        "It compresses all packet headers and broadcasts them simultaneously across all spine switches",
        "It converts TCP packets into UDP broadcast frames at the distribution layer",
      ],
      correct: 1,
      explanation:
        "ECMP hashes the packet's 5-tuple to select a link. This guarantees that all packets belonging to the same TCP connection traverse the exact same path, preventing out-of-order packet arrival which would severely degrade TCP throughput.",
    },
    {
      id: 3,
      question: "In cloud virtual networks (e.g., AWS VPC, Azure VNet), what fundamentally distinguishes a 'public subnet' from a 'private subnet'?",
      options: [
        "A public subnet has an open Wi-Fi access point attached to it",
        "A public subnet has a route table entry pointing 0.0.0.0/0 to an Internet Gateway (IGW) and assigns public IP addresses, whereas a private subnet routes internet egress via a NAT Gateway or has no default internet route",
        "A public subnet operates strictly at Layer 2, while a private subnet operates at Layer 7",
        "A public subnet has encryption disabled to maximize internet download speeds",
      ],
      correct: 1,
      explanation:
        "A subnet is public because its associated route table contains a default route (0.0.0.0/0) directed to an Internet Gateway and resources possess public IPs. A private subnet lacks a direct IGW route and typically uses a NAT Gateway for outbound-only egress.",
    },
    {
      id: 4,
      question: "What is the critical difference between Cloud Security Groups and Network ACLs (NACLs)?",
      options: [
        "Security Groups are stateful and applied at the virtual network interface (ENI) level; NACLs are typically stateless and evaluated at the subnet boundary",
        "Security Groups can only block traffic, while NACLs can only allow traffic",
        "Security Groups require physical cables, while NACLs run entirely in software",
        "NACLs remember connection state, while Security Groups require explicit reverse allow rules for return traffic",
      ],
      correct: 0,
      explanation:
        "Security Groups are stateful: if an inbound request is permitted, return traffic is automatically allowed regardless of outbound rules. NACLs are stateless subnet-level packet filters that evaluate both inbound and outbound rules independently.",
    },
    {
      id: 5,
      question: "Why can a shallow TCP health check on a reverse proxy or load balancer lead to customer-facing outages during a partial failure?",
      options: [
        "A TCP health check is too slow and takes over 10 minutes to detect a broken link",
        "A TCP three-way handshake succeeds as long as the OS listener socket is open, even if the backend application process has locked up or its database connection pool is completely exhausted",
        "TCP health checks cause the load balancer to run out of ephemeral ports",
        "TCP health checks only operate when the load balancer is configured in active-passive mode",
      ],
      correct: 1,
      explanation:
        "A shallow TCP health check only verifies that the operating system kernel completes a SYN-ACK handshake. If the backend web framework is stuck in a deadlock or cannot reach PostgreSQL, the TCP handshake still succeeds, causing the LB to forward live traffic to a server returning HTTP 500 errors. Deep HTTP `/healthz` checks verify downstream dependencies.",
    },
    {
      id: 6,
      question: "How does Layer 7 load balancing (Application Load Balancer) differ from Layer 4 load balancing (Network Load Balancer)?",
      options: [
        "Layer 7 only routes raw Ethernet MAC addresses, while Layer 4 inspects HTTP cookies and headers",
        "Layer 7 terminates the application connection (e.g. TLS/HTTP), inspects URLs/headers/cookies, and can route based on path (e.g. /api vs /images); Layer 4 routes at the TCP/UDP transport level with lower latency and higher throughput",
        "Layer 7 is exclusively designed for wireless networks, whereas Layer 4 is for wired fiber",
        "Layer 4 load balancers decrypt all TLS traffic, while Layer 7 forward encrypted bytes blindly",
      ],
      correct: 1,
      explanation:
        "Layer 7 load balancers operate at the application layer, terminating TLS and parsing HTTP methods, paths, and host headers to make intelligent routing decisions. Layer 4 load balancers operate strictly on IP and TCP/UDP ports, providing ultra-low latency and raw packet throughput.",
    },
    {
      id: 7,
      question: "What is the size of the VXLAN Network Identifier (VNI) and why was it introduced to replace traditional 802.1Q VLANs in cloud data centers?",
      options: [
        "12 bits (4,096 segments), matching VLANs for backward compatibility",
        "16 bits (65,536 segments), designed to fit inside standard IPv4 headers",
        "24 bits (~16.7 million segments), allowing massive multi-tenant network isolation across routed Layer 3 IP underlays",
        "64 bits, matching modern processor registers for fast memory caching",
      ],
      correct: 2,
      explanation:
        "Traditional 802.1Q VLANs are limited to a 12-bit ID (4,096 VLANs), which is insufficient for modern multi-tenant cloud data centers with thousands of isolated customer networks. VXLAN provides a 24-bit VNI (~16,777,216 logical segments) encapsulated in UDP.",
    },
    {
      id: 8,
      question: "Why must network engineers increase the physical underlay Maximum Transmission Unit (MTU) when deploying VXLAN encapsulation?",
      options: [
        "VXLAN packets compress the underlay frames, requiring smaller buffer sizes",
        "VXLAN adds 50 bytes of encapsulation overhead (Outer Ethernet + Outer IP + UDP + VXLAN Header); an underlay with a standard 1500-byte MTU will drop or fragment tenant packets with 1500-byte payloads",
        "VXLAN doubles the number of bits in every payload byte to provide error correction",
        "The IEEE standard mandates that UDP port 4789 can only transmit frames larger than 4096 bytes",
      ],
      correct: 1,
      explanation:
        "VXLAN encapsulation prepends 50 bytes of outer headers (14B Outer Ethernet + 20B Outer IP + 8B UDP + 8B VXLAN). If an inner tenant VM sends a standard 1500-byte IP packet, the total frame becomes 1550 bytes. Physical switches must support an underlay MTU of at least 1550–1600 bytes (or 9000-byte Jumbo frames) to avoid packet drops or fragmentation.",
    },
    {
      id: 9,
      question: "In high availability (HA) and disaster recovery engineering, what do RTO and RPO measure?",
      options: [
        "RTO is the speed of light in fiber; RPO is the number of routing hops in BGP",
        "RTO (Recovery Time Objective) is the maximum acceptable duration of service downtime; RPO (Recovery Point Objective) is the maximum acceptable amount of data loss measured in time",
        "RTO measures CPU utilization during failover; RPO measures RAM consumption on the standby server",
        "RTO is the round-trip ping time; RPO is the rate of packets dropped by the firewall",
      ],
      correct: 1,
      explanation:
        "Recovery Time Objective (RTO) defines how quickly systems must be restored after an outage (e.g., target 15 minutes). Recovery Point Objective (RPO) defines the maximum acceptable data loss window (e.g., maximum 5 minutes of transactional data loss from database replication lag).",
    },
    {
      id: 10,
      question: "What is the core principle of Zero Trust Network Architecture (NIST SP 800-207)?",
      options: [
        "Trust all internal traffic that originates from behind the corporate office firewall or VPN",
        "Never trust, always verify: eliminate implicit trust based on network location alone; authenticate and authorize every user, device, and workload request using least privilege and continuous evaluation",
        "Block all outbound internet access for all employees at all times",
        "Replace all TCP and UDP traffic with proprietary proprietary encrypted hardware tunnels",
      ],
      correct: 1,
      explanation:
        "Zero Trust rejects the perimeter-based 'castle-and-moat' assumption that everything inside the internal network is benign. It assumes breach, requires explicit identity verification (mTLS, MFA, posture checks), microsegments workloads, and enforces least privilege on every single request.",
    },
  ];

  const handleQuizSelect = (qId, optionIdx) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correct) score++;
    });
    return score;
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
  };

  // Copyable Markdown SRE Cloud Architecture Audit Template
  const cloudAuditReportTemplate = `# PRODUCTION CLOUD & ENTERPRISE NETWORK ARCHITECTURE AUDIT REPORT
**Environment:** Production Multi-Tier Cloud VPC (AWS / Azure / GCP)
**Auditor:** Principal Infrastructure & Cloud Networking SRE
**Standard:** NIST SP 800-207 Zero-Trust Architecture & CIS Cloud Benchmarks
**Date:** ${new Date().toISOString().split("T")[0]}

## 1. EXECUTIVE SUMMARY
- **Virtual Network Address Space:** 10.20.0.0/16
- **Availability Zone Redundancy:** Multi-AZ deployed across 2 independent zones (Zone A, Zone B)
- **Perimeter Security Model:** Public Ingress Tier -> Private App Tier -> Isolated Database Tier
- **Zero-Trust Posture:** Enforced via Security Group chaining (least privilege) and Identity-Aware Bastion.

---

## 2. SUBNETTING & ROUTING ARCHITECTURE
| Tier | Subnet CIDR | Availability Zone | Route Table Target (0.0.0.0/0) | Public IP Assigned |
| :--- | :--- | :--- | :--- | :--- |
| Public Ingress A | 10.20.1.0/24 | us-east-1a | Internet Gateway (igw-0a1b2c3d) | Yes (ALB ENI) |
| Public Ingress B | 10.20.2.0/24 | us-east-1b | Internet Gateway (igw-0a1b2c3d) | Yes (ALB ENI) |
| Private App A | 10.20.11.0/24 | us-east-1a | NAT Gateway A (nat-09f8e7d6) | No |
| Private App B | 10.20.12.0/24 | us-east-1b | NAT Gateway B (nat-05a4b3c2) | No |
| Private DB A | 10.20.21.0/24 | us-east-1a | None (Local VPC 10.20.0.0/16 only) | No |
| Private DB B | 10.20.22.0/24 | us-east-1b | None (Local VPC 10.20.0.0/16 only) | No |
| Management Bastion | 10.20.31.0/24 | us-east-1a | Dedicated Corporate Transit Gateway | No |

---

## 3. SECURITY GROUP & ACCESS CONTROL POLICY
- **sg-alb (Public Ingress):**
  - Inbound: TCP 443 from 0.0.0.0/0 (Internet)
  - Outbound: TCP 8080 to sg-app only
- **sg-app (Application Tier):**
  - Inbound: TCP 8080 from sg-alb only
  - Outbound: TCP 5432 to sg-db; TCP 443 via NAT Gateway for OS security patches
- **sg-db (Database Tier):**
  - Inbound: TCP 5432 (PostgreSQL) from sg-app only
  - Outbound: Deny all external internet egress (no route to NAT GW or IGW)
- **sg-bastion (Administrative Access):**
  - Inbound: Mutual TLS + WebAuthn FIDO2 MFA from corporate IdP
  - Direct database SSH/RDP from public internet: PROHIBITED.

---

## 4. DATA CENTER UNDERLAY & OVERLAY DESIGN
- **Fabric Architecture:** 2-Spine / 3-Leaf Clos topology with 100GbE uplinks.
- **Routing Protocol:** eBGP underlay with Equal-Cost Multi-Path (ECMP) 5-tuple hashing.
- **Overlay Protocol:** VXLAN with EVPN control plane (24-bit VNI segmentation).
- **MTU Verification:** Physical switch underlay configured for Jumbo Frames (9000 bytes) to accommodate 50-byte VXLAN encapsulation without fragmentation.

---

## 5. AUDIT SIGN-OFF & CERTIFICATION
- [x] Zero public IP addresses assigned to Application or Database instances.
- [x] All database access strictly conditioned on SG membership references rather than CIDR blocks.
- [x] Deep health checks (/healthz) configured to monitor downstream database pool availability.
- [x] RTO target < 15 minutes; RPO target < 1 minute validated via automated disaster recovery drill.
`;

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 font-sans">
      <ModuleNav
        track="networks"
        currentModuleId="enterprise-cloud"
        showAiTutor={false}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Header */}
        <div className="flex items-center gap-2 text-xs font-mono text-stone-700 mb-4">
          <span>COMPUTER NETWORKS &amp; INTERNET ENGINEERING</span>
          <span>/</span>
          <span className="text-[#ea580c] font-semibold">MODULE 16</span>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold">
              <Cloud size={14} />
              <span>Advanced Architecture &amp; Cloud Engineering</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-stone-700">
              <span>STANFORD CS144</span>
              <span>•</span>
              <span>UC BERKELEY CS168</span>
              <span>•</span>
              <span>MIT 6.033</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-3">
            Enterprise, Data Center &amp; Cloud Networking
          </h1>
          <p className="text-stone-600 text-sm sm:text-base max-w-4xl leading-relaxed mb-6">
            Modern enterprise workloads span campus LANs, branch SD-WANs, high-throughput leaf-spine data centers, and multi-zone cloud virtual private clouds (VPCs). Master ECMP fabric routing, Layer 4/7 load balancing, health failovers, public/private subnet architectures, VXLAN encapsulation, and Zero-Trust access control.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#e7e3da] text-xs font-mono">
            <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200">
              <span className="text-stone-700 block text-[11px]">DATA CENTER FABRIC</span>
              <span className="font-bold text-stone-900">Leaf-Spine &amp; ECMP</span>
            </div>
            <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200">
              <span className="text-stone-700 block text-[11px]">OVERLAY ENCAPSULATION</span>
              <span className="font-bold text-stone-900">VXLAN (24-bit VNI)</span>
            </div>
            <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200">
              <span className="text-stone-700 block text-[11px]">CLOUD VIRTUAL NETWORKS</span>
              <span className="font-bold text-stone-900">3-Tier Multi-AZ VPC</span>
            </div>
            <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200">
              <span className="text-stone-700 block text-[11px]">SECURITY PARADIGM</span>
              <span className="font-bold text-[#ea580c]">NIST Zero Trust (ZTA)</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 border-b border-[#e7e3da]">
          {[
            { id: "curriculum", label: "Curriculum & Theory", icon: FileText },
            { id: "simulators", label: "Interactive Simulators (5)", icon: Sliders },
            { id: "lab", label: "Hands-on Multi-Tier VPC Lab", icon: Terminal },
            { id: "quiz", label: "Knowledge Check (10)", icon: HelpCircle },
            { id: "audit", label: "SRE Audit Report", icon: Shield },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer whitespace-nowrap ${
                  isActive
                    ? "bg-stone-900 text-white shadow-sm"
                    : "bg-white text-stone-600 border border-[#e7e3da] hover:bg-stone-50"
                }`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* TAB 1: CURRICULUM & THEORY                                */}
        {/* ========================================================= */}
        {activeTab === "curriculum" && (
          <div className="space-y-8">
            {/* Section 16.1 & 16.2: Modern Enterprise & Architecture */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 text-orange-600 text-xs font-mono font-bold mb-2">
                <Network size={16} />
                <span>SECTION 16.1 — 16.2</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                The Modern Enterprise Network: Campus, Branch &amp; SD-WAN
              </h2>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-4">
                Enterprise networks are no longer monolithic local area networks confined to a single headquarters. An enterprise architecture integrates multiple logical and physical domains:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <h3 className="font-bold text-stone-900 text-sm mb-2 flex items-center gap-2">
                    <Layers size={16} className="text-[#ea580c]" />
                    <span>Campus 3-Tier Hierarchical Design</span>
                  </h3>
                  <ul className="text-xs text-stone-600 space-y-1.5 leading-relaxed">
                    <li><strong>Access Layer:</strong> Connects end-user workstations, Wi-Fi 6 access points, printers, and IoT devices. Enforces 802.1X port security and VLAN tagging.</li>
                    <li><strong>Distribution Layer:</strong> Aggregates access switches, performs inter-VLAN routing (SVIs), policy enforcement, and summarization.</li>
                    <li><strong>Core Layer:</strong> The high-speed backbone designed for raw packet switching throughput without CPU-intensive filtering.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <h3 className="font-bold text-stone-900 text-sm mb-2 flex items-center gap-2">
                    <Globe size={16} className="text-[#ea580c]" />
                    <span>Branch Offices &amp; SD-WAN Edge</span>
                  </h3>
                  <ul className="text-xs text-stone-600 space-y-1.5 leading-relaxed">
                    <li><strong>Path Optimization:</strong> Software-Defined WAN continuously measures link latency, jitter, and packet loss across multiple uplinks (MPLS, fiber broadband, 5G cellular).</li>
                    <li><strong>Application-Aware Steering:</strong> Routes interactive VoIP and video conferencing over low-jitter links while bulk file transfers use low-cost broadband.</li>
                    <li><strong>Zero-Touch Provisioning (ZTP):</strong> Branch routers securely bootstrap via cloud controllers, downloading IPsec tunnel configs and policy rules automatically.</li>
                  </ul>
                </div>
              </div>

              {/* Data Center Leaf-Spine */}
              <div className="p-5 rounded-2xl bg-orange-50/50 border border-orange-200 mb-6">
                <h3 className="font-bold text-stone-900 text-sm mb-2 flex items-center gap-2">
                  <Server size={16} className="text-orange-600" />
                  <span>Data Center Leaf-Spine (Clos) Architecture</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-3">
                  Traditional 3-tier tree designs suffer from STP link blocking and severe oversubscription for modern east-west server-to-server traffic (e.g., distributed databases, Hadoop/Spark, Kubernetes microservices).
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="bg-white p-3 rounded-xl border border-orange-200">
                    <span className="font-bold text-stone-900 block mb-1">Every Leaf Connects to Every Spine</span>
                    <span className="text-stone-600">No leaf-to-leaf or spine-to-spine connections. East-west traffic is strictly 2 hops away.</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-orange-200">
                    <span className="font-bold text-stone-900 block mb-1">Non-Blocking ECMP Fabric</span>
                    <span className="text-stone-600">Equal-Cost Multi-Path distributes flows across all spines simultaneously. STP is completely disabled.</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-orange-200">
                    <span className="font-bold text-stone-900 block mb-1">Horizontal Linear Scale</span>
                    <span className="text-stone-600">Add leaf switches to add server racks; add spine switches to increase total east-west bandwidth.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 16.3: Redundancy, High Availability & Failover */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 text-orange-600 text-xs font-mono font-bold mb-2">
                <Activity size={16} />
                <span>SECTION 16.3 — 16.4</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Redundancy, High Availability &amp; Service Continuity (RTO / RPO)
              </h2>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-4">
                Redundancy means having duplicate hardware; resilience means the system continues to serve traffic correctly when a failure occurs. A poorly designed redundant architecture often creates a false sense of security through shared failure domains.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-xs text-left border border-stone-200 rounded-xl overflow-hidden">
                  <thead className="bg-stone-100 text-stone-700 font-bold uppercase text-[11px]">
                    <tr>
                      <th className="p-3">Failure Scenario</th>
                      <th className="p-3">Hidden Shared Dependency (Failure Domain)</th>
                      <th className="p-3">True Resilient Engineering Mitigation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-600">
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">Dual Core Routers</td>
                      <td className="p-3 text-rose-600">Both routers plugged into the same power distribution unit (PDU)</td>
                      <td className="p-3 text-emerald-700">Dual independent electrical circuits (A/B power feeds) with UPS backup</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">Redundant ISP Circuits</td>
                      <td className="p-3 text-rose-600">Both fiber lines exit the building through the same underground conduit</td>
                      <td className="p-3 text-emerald-700">Physical route diversity: one conduit north, one conduit south, plus 5G backup</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">Redundant Cloud App Instances</td>
                      <td className="p-3 text-rose-600">Both virtual machines deployed in the same Availability Zone (same datacenter)</td>
                      <td className="p-3 text-emerald-700">Multi-AZ deployment across independent physical data centers with private links</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">Active-Passive Firewalls</td>
                      <td className="p-3 text-rose-600">Corrupted state synchronization crashes the standby unit immediately upon failover</td>
                      <td className="p-3 text-emerald-700">Stateless health checks, automated canary failover drills, and isolated sync links</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* RTO vs RPO */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <div>
                  <h4 className="font-bold text-stone-900 text-sm mb-1">Recovery Time Objective (RTO)</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    The maximum tolerable duration of system downtime after an incident occurs. For example, an RTO of 15 minutes requires automated DNS failover, pre-warmed standby compute instances, and automated route re-convergence.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm mb-1">Recovery Point Objective (RPO)</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    The maximum acceptable data loss measured in time. An RPO of 1 minute means transaction data must be continuously synchronized across availability zones (synchronous or semi-synchronous replication).
                  </p>
                </div>
              </div>
            </div>

            {/* Section 16.5: Load Balancing & Reverse Proxies */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 text-orange-600 text-xs font-mono font-bold mb-2">
                <Sliders size={16} />
                <span>SECTION 16.5</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Load Balancers, Reverse Proxies &amp; Health Checks
              </h2>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-4">
                Load balancers distribute traffic across pools of compute instances to prevent hotspots and ensure high availability. Reverse proxies act as intermediaries that terminate client sessions, enforce security policies, and route requests.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <h3 className="font-bold text-stone-900 text-sm mb-2">Layer 4 Load Balancing (Transport)</h3>
                  <ul className="text-xs text-stone-600 space-y-1.5 leading-relaxed">
                    <li>Operates strictly at Layer 4 (TCP/UDP, IP 5-tuple).</li>
                    <li>Does not terminate TLS or parse application payloads; acts as a fast packet forwarder (using direct server return or source NAT).</li>
                    <li><strong>Advantages:</strong> Ultra-low latency, millions of requests per second per node, transparent TCP connection handoff.</li>
                    <li><strong>Examples:</strong> AWS NLB, Linux IPVS / Keepalived, HAProxy in TCP mode.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <h3 className="font-bold text-stone-900 text-sm mb-2">Layer 7 Load Balancing (Application)</h3>
                  <ul className="text-xs text-stone-600 space-y-1.5 leading-relaxed">
                    <li>Operates at Layer 7 (HTTP/HTTPS, gRPC, WebSockets).</li>
                    <li>Terminates TLS, examines host headers, URL paths (e.g. <code>/api</code> vs <code>/static</code>), query parameters, and session cookies.</li>
                    <li><strong>Advantages:</strong> Intelligent routing, cookie-based session stickiness, gzip/brotli compression, rate limiting, and web application firewall (WAF) inspection.</li>
                    <li><strong>Examples:</strong> NGINX, Envoy, AWS ALB, Traefik, HAProxy in HTTP mode.</li>
                  </ul>
                </div>
              </div>

              {/* Shallow vs Deep Health Checks */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
                <h3 className="font-bold text-stone-900 text-sm mb-2 flex items-center gap-2">
                  <AlertTriangle size={16} className="text-amber-600" />
                  <span>The Pitfall of Shallow vs. Deep Health Checks</span>
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed mb-2">
                  A common cause of partial production outages is a load balancer health check configured as a shallow TCP handshake on port 8080:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-white p-3 rounded-xl border border-amber-200">
                    <span className="font-bold text-rose-700 block mb-1">Shallow TCP Check (Port 8080)</span>
                    <span className="text-stone-600">Kernel acknowledges TCP SYN. But application threads are deadlocked or PostgreSQL connection pool is exhausted! LB continues routing traffic &rarr; User sees 500/503 errors.</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-amber-200">
                    <span className="font-bold text-emerald-700 block mb-1">Deep HTTP Check (GET /healthz)</span>
                    <span className="text-stone-600">Application code executes, queries database read-replica and Redis cache. If pool fails, returns HTTP 503 &rarr; LB automatically deregisters backend cleanly.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 16.6: Cloud Virtual Networks */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 text-orange-600 text-xs font-mono font-bold mb-2">
                <Cloud size={16} />
                <span>SECTION 16.6 — 16.7</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Cloud Virtual Networks: VPCs, Route Tables, Security Groups &amp; Egress
              </h2>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-4">
                Cloud infrastructure decouples physical hardware from logical networks using software-defined overlays. In AWS (VPC), Azure (VNet), and GCP (VPC), network isolation is achieved through CIDR planning, route table associations, and distributed firewall rules.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <h3 className="font-bold text-stone-900 text-xs mb-2">Route Tables vs Firewalls</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    A route table only specifies <em>where packets should go</em> (next hop: Internet Gateway, NAT Gateway, Transit Gateway, or Peering Connection). It does <strong>not</strong> grant security authorization. Traffic must also be explicitly permitted by security group filters.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <h3 className="font-bold text-stone-900 text-xs mb-2">Stateful Security Groups</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Attached directly to elastic network interfaces (ENIs). If an inbound connection is allowed (e.g. TCP 443), return outbound traffic is automatically tracked and allowed regardless of outbound rules. Evaluated at the hypervisor.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <h3 className="font-bold text-stone-900 text-xs mb-2">Stateless Network ACLs</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Evaluated at the subnet boundary. Operates statelessly: outbound ephemeral return ports (1024–65535) must be explicitly permitted in both directions. Functions as a secondary defense-in-depth barrier.
                  </p>
                </div>
              </div>

              {/* Cloud Egress Architecture */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <h3 className="font-bold text-stone-900 text-sm mb-2">Controlled Outbound Egress (NAT Gateways &amp; Private Endpoints)</h3>
                <p className="text-xs text-stone-600 leading-relaxed mb-3">
                  Private workloads frequently require outbound access for operating system security updates, external API calls, or container image pulls. Direct internet access is strictly forbidden by least-privilege principles.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-white p-3 rounded-xl border border-stone-200">
                    <span className="font-bold text-stone-900 block mb-1">Managed NAT Gateways</span>
                    <span className="text-stone-600">Performs Source Network Address Translation (SNAT). Private instances reach external endpoints via Elastic IP; external internet users cannot initiate unsolicited inbound connections.</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-stone-200">
                    <span className="font-bold text-stone-900 block mb-1">Cloud Private Endpoints (PrivateLink)</span>
                    <span className="text-stone-600">Enables private instances to access cloud-native services (S3, DynamoDB, Azure Blob) entirely over internal cloud backbones without traversing the public internet or requiring a NAT Gateway.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 16.8: Overlays, Tunnels and VXLAN */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 text-orange-600 text-xs font-mono font-bold mb-2">
                <Zap size={16} />
                <span>SECTION 16.8</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Network Virtualization, Overlays &amp; VXLAN Encapsulation
              </h2>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-4">
                Virtual Extensible LAN (RFC 7348) is the industry standard for multi-tenant data center and cloud networking. It encapsulates Layer 2 Ethernet frames inside Layer 4 UDP packets, allowing virtual machines or containers across different physical racks to communicate as if they were on the exact same local Ethernet switch.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <h3 className="font-bold text-stone-900 text-sm mb-2">Core VXLAN Concepts</h3>
                  <ul className="text-xs text-stone-600 space-y-2 leading-relaxed">
                    <li><strong>VTEP (VXLAN Tunnel Endpoint):</strong> The component (hypervisor virtual switch or physical switch ASIC) that encapsulates outgoing frames and decapsulates incoming packets.</li>
                    <li><strong>VNI (VXLAN Network Identifier):</strong> A 24-bit identifier supporting up to 16,777,216 logical broadcast domains, completely breaking the 4,096 limit of IEEE 802.1Q VLANs.</li>
                    <li><strong>Underlay:</strong> The physical IP network providing IP reachability between VTEPs using BGP and ECMP.</li>
                    <li><strong>Overlay:</strong> The tenant virtual network carried inside the encapsulated tunnels.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <h3 className="font-bold text-stone-900 text-sm mb-2">Encapsulation &amp; MTU Overhead</h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-2">
                    VXLAN adds a fixed 50 bytes of overhead to every frame:
                  </p>
                  <div className="font-mono text-[11px] bg-stone-900 text-stone-200 p-2.5 rounded-xl space-y-1">
                    <div>Outer Ethernet Header: 14 bytes</div>
                    <div>Outer IPv4 Header:     20 bytes</div>
                    <div>Outer UDP Header:      8 bytes (Dst Port: 4789)</div>
                    <div>VXLAN Header:          8 bytes (contains 24-bit VNI)</div>
                    <div className="text-orange-400 font-bold border-t border-stone-700 pt-1">Total Overhead: 50 bytes</div>
                  </div>
                  <p className="text-[11px] text-amber-700 mt-2 font-medium">
                    Critical requirement: If tenant workloads transmit 1500-byte packets, physical switch ports must be configured for an underlay MTU of at least 1550 bytes (or 9000-byte Jumbo frames) to prevent silent drops or fragmentation!
                  </p>
                </div>
              </div>
            </div>

            {/* Section 16.9: Zero Trust Architecture */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 text-orange-600 text-xs font-mono font-bold mb-2">
                <Shield size={16} />
                <span>SECTION 16.9</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Zero Trust Network Architecture (NIST SP 800-207)
              </h2>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-4">
                Traditional enterprise security relied on the "castle-and-moat" model: anything inside the office firewall or corporate VPN was trusted. Zero Trust rejects this premise with three foundational tenets:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <span className="font-bold text-stone-900 block text-xs mb-1">1. Verify Explicitly</span>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Always authenticate and authorize based on all available data points: user identity, device health posture, geolocation, and behavioral anomalies.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <span className="font-bold text-stone-900 block text-xs mb-1">2. Use Least-Privilege Access</span>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Limit user and service access with Just-In-Time (JIT) and Just-Enough-Access (JEA) models, using short-lived credentials and role-based policies.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <span className="font-bold text-stone-900 block text-xs mb-1">3. Assume Breach</span>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Minimize blast radius by segmenting access by network, user, devices, and application awareness. Encrypt all sessions in transit and verify integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: INTERACTIVE SIMULATORS (5)                         */}
        {/* ========================================================= */}
        {activeTab === "simulators" && (
          <div className="space-y-8">
            {/* SIMULATOR 1: Leaf-Spine & ECMP Fabric */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold mb-2">
                    <Server size={14} />
                    <span>SIMULATOR 1</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                    Leaf-Spine Clos Fabric &amp; ECMP Flow Visualizer
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm">
                    Observe how Equal-Cost Multi-Path distributes 5-tuple flows across spines and handles link failures with zero packet drops.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleSpineFailure("spine1")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                      spineFailure === "spine1"
                        ? "bg-rose-600 text-white hover:bg-rose-700"
                        : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                    }`}
                  >
                    {spineFailure === "spine1" ? "Restore Spine-1" : "Fail Spine-1"}
                  </button>
                  <button
                    onClick={() => toggleSpineFailure("spine2")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                      spineFailure === "spine2"
                        ? "bg-rose-600 text-white hover:bg-rose-700"
                        : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                    }`}
                  >
                    {spineFailure === "spine2" ? "Restore Spine-2" : "Fail Spine-2"}
                  </button>
                </div>
              </div>

              {/* Topology Graphic */}
              <div className="p-5 rounded-2xl bg-stone-900 text-white mb-4">
                <div className="text-[11px] font-mono text-stone-400 mb-3 flex items-center justify-between">
                  <span>DATA CENTER CLOS TOPOLOGY (2 SPINES, 3 LEAVES)</span>
                  <span className="text-orange-400">LATENCY: STRICTLY 2 HOPS</span>
                </div>

                {/* Spines Row */}
                <div className="flex justify-center gap-8 sm:gap-16 mb-8">
                  <div
                    className={`px-6 py-3 rounded-xl border text-center transition ${
                      spineFailure === "spine1"
                        ? "bg-rose-950/80 border-rose-500 text-rose-300"
                        : "bg-stone-800 border-stone-600 text-stone-100"
                    }`}
                  >
                    <span className="font-bold text-xs sm:text-sm block">SPINE-1 (100GbE)</span>
                    <span className="text-[10px] font-mono block">
                      {spineFailure === "spine1" ? "LINK DOWN (0 Gbps)" : "OPERATIONAL (200 Gbps)"}
                    </span>
                  </div>

                  <div
                    className={`px-6 py-3 rounded-xl border text-center transition ${
                      spineFailure === "spine2"
                        ? "bg-rose-950/80 border-rose-500 text-rose-300"
                        : "bg-stone-800 border-stone-600 text-stone-100"
                    }`}
                  >
                    <span className="font-bold text-xs sm:text-sm block">SPINE-2 (100GbE)</span>
                    <span className="text-[10px] font-mono block">
                      {spineFailure === "spine2" ? "LINK DOWN (0 Gbps)" : "OPERATIONAL (200 Gbps)"}
                    </span>
                  </div>
                </div>

                {/* Leaves Row */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-stone-800/90 border border-stone-700">
                    <span className="font-bold text-xs block text-stone-200">LEAF-1</span>
                    <span className="text-[10px] text-stone-400 font-mono">Compute Rack A</span>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-800/90 border border-stone-700">
                    <span className="font-bold text-xs block text-stone-200">LEAF-2</span>
                    <span className="text-[10px] text-stone-400 font-mono">App Rack B</span>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-800/90 border border-stone-700">
                    <span className="font-bold text-xs block text-stone-200">LEAF-3</span>
                    <span className="text-[10px] text-stone-400 font-mono">Storage &amp; DB Rack</span>
                  </div>
                </div>
              </div>

              {/* Status Alert Banner */}
              <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs font-mono mb-4 text-stone-700 flex items-center gap-2">
                <Activity size={16} className="text-[#ea580c]" />
                <span>{lastEcmpAction}</span>
              </div>

              {/* ECMP Active Flows Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border border-stone-200 rounded-xl overflow-hidden">
                  <thead className="bg-stone-100 text-stone-700 font-bold uppercase text-[11px]">
                    <tr>
                      <th className="p-2.5">Flow ID</th>
                      <th className="p-2.5">Source Workload</th>
                      <th className="p-2.5">Destination</th>
                      <th className="p-2.5">5-Tuple Hash</th>
                      <th className="p-2.5">Active Transit Path</th>
                      <th className="p-2.5">Convergence Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-600 font-mono text-[11px]">
                    {ecmpFlows.map((f) => (
                      <tr key={f.id}>
                        <td className="p-2.5 font-bold text-stone-900">{f.id}</td>
                        <td className="p-2.5">{f.src}</td>
                        <td className="p-2.5">{f.dst}</td>
                        <td className="p-2.5">hash % 2 = {f.hash}</td>
                        <td className="p-2.5 font-bold text-[#ea580c]">{f.spine}</td>
                        <td className="p-2.5">
                          <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                            {f.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* SIMULATOR 2: Cloud VPC Subnet & Route Table Engine */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold mb-2">
                  <Cloud size={14} />
                  <span>SIMULATOR 2</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                  Multi-Tier Cloud VPC Subnet &amp; Route Table Tracer
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm">
                  Test traffic paths through public subnets, NAT gateways, and isolated database tiers with stateful security groups.
                </p>
              </div>

              {/* Scenario Picker */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-6">
                {Object.entries(vpcTestScenarios).map(([key, sc]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedVpcTest(key)}
                    className={`p-3 rounded-xl text-left border text-xs transition cursor-pointer ${
                      selectedVpcTest === key
                        ? "bg-orange-50/70 border-orange-300 font-bold text-stone-900 shadow-xs"
                        : "bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="truncate pr-2">{sc.name}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded font-bold uppercase ${
                          sc.result === "ALLOWED"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-rose-100 text-rose-700"
                        }`}
                      >
                        {sc.result}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Evaluation Card */}
              {(() => {
                const active = vpcTestScenarios[selectedVpcTest];
                return (
                  <div
                    className={`p-5 rounded-2xl border ${
                      active.result === "ALLOWED"
                        ? "bg-emerald-50/50 border-emerald-200"
                        : "bg-rose-50/50 border-rose-200"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-bold text-sm text-stone-900">{active.name}</span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                          active.result === "ALLOWED"
                            ? "bg-emerald-600 text-white"
                            : "bg-rose-600 text-white"
                        }`}
                      >
                        VERDICT: {active.result}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs font-mono">
                      <div className="p-2.5 rounded-xl bg-white border border-stone-200">
                        <span className="text-stone-700 block text-[10px]">PACKET HOP PATH:</span>
                        <span className="text-stone-900 font-semibold">{active.routePath}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-stone-200">
                        <span className="text-stone-700 block text-[10px]">ROUTE TABLE EVALUATION:</span>
                        <span className="text-stone-900">{active.routeDecision}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-stone-200">
                        <span className="text-stone-700 block text-[10px]">SECURITY GROUP &amp; NACL FILTER:</span>
                        <span className="text-stone-900">{active.sgDecision}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-stone-200 text-stone-700">
                        <span className="text-stone-700 block text-[10px]">ENGINEERING RATIONALE:</span>
                        <span>{active.details}</span>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* SIMULATOR 3: L4 vs L7 Load Balancing & Health Checks */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold mb-2">
                    <Sliders size={14} />
                    <span>SIMULATOR 3</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                    Layer 4 vs. Layer 7 Load Balancing &amp; Health Probe Engine
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm">
                    Simulate shallow TCP checks vs deep HTTP health checks when downstream database connections fail.
                  </p>
                </div>
                <button
                  onClick={sendLbRequest}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#ea580c] text-white text-xs font-bold hover:bg-orange-700 transition cursor-pointer"
                >
                  <Play size={14} />
                  <span>Send Test Request</span>
                </button>
              </div>

              {/* Controls Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-6 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
                <div>
                  <label className="block text-stone-700 font-bold mb-1">Balancing Mode</label>
                  <select
                    value={lbMode}
                    onChange={(e) => setLbMode(e.target.value)}
                    className="w-full p-2 rounded-xl border border-stone-300 bg-white font-mono"
                  >
                    <option value="L7">Layer 7 (ALB / Envoy / NGINX)</option>
                    <option value="L4">Layer 4 (NLB / IPVS)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-stone-700 font-bold mb-1">Algorithm</label>
                  <select
                    value={lbAlgorithm}
                    onChange={(e) => setLbAlgorithm(e.target.value)}
                    className="w-full p-2 rounded-xl border border-stone-300 bg-white font-mono"
                  >
                    <option value="round-robin">Round Robin</option>
                    <option value="weighted">Weighted Round Robin</option>
                    <option value="least-conn">Least Connections</option>
                  </select>
                </div>

                <div>
                  <label className="block text-stone-700 font-bold mb-1">Health Check Probe</label>
                  <select
                    value={checkType}
                    onChange={(e) => setCheckType(e.target.value)}
                    className="w-full p-2 rounded-xl border border-stone-300 bg-white font-mono"
                  >
                    <option value="deep">Deep HTTP (GET /healthz)</option>
                    <option value="shallow">Shallow TCP (Port 8080)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-stone-700 font-bold mb-1">App-2 DB Pool Status</label>
                  <button
                    onClick={() => setApp2DbConnected((prev) => !prev)}
                    className={`w-full p-2 rounded-xl font-bold transition cursor-pointer ${
                      app2DbConnected
                        ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                        : "bg-rose-100 text-rose-800 border border-rose-300"
                    }`}
                  >
                    {app2DbConnected ? "DB Pool Healthy" : "DB Pool Exhausted"}
                  </button>
                </div>
              </div>

              {/* Backend Pool Status */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {backends.map((b) => (
                  <div
                    key={b.id}
                    className={`p-4 rounded-2xl border text-xs ${
                      b.healthy
                        ? "bg-emerald-50/50 border-emerald-200"
                        : "bg-rose-50/60 border-rose-200"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-stone-900">{b.id}</span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          b.healthy ? "bg-emerald-600 text-white" : "bg-rose-600 text-white"
                        }`}
                      >
                        {b.healthy ? "IN SERVICE" : "OUT OF SERVICE"}
                      </span>
                    </div>
                    <div className="space-y-1 font-mono text-[11px] text-stone-600">
                      <div>IP: {b.ip} ({b.zone})</div>
                      <div>Weight: {b.weight} | Conns: {b.conns}</div>
                      <div>TCP Port 8080: <span className="text-emerald-700 font-bold">{b.tcpStatus}</span></div>
                      <div>
                        DB Connection:{" "}
                        <span className={b.dbStatus === "UP" ? "text-emerald-700 font-bold" : "text-rose-700 font-bold"}>
                          {b.dbStatus}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Request Trace Log */}
              <div>
                <h4 className="text-xs font-bold text-stone-900 uppercase font-mono mb-2">Real-Time Load Balancer Request Dispatch Log</h4>
                <div className="bg-stone-900 rounded-2xl p-4 font-mono text-[11px] text-stone-300 max-h-48 overflow-y-auto space-y-1">
                  {requestLog.length === 0 ? (
                    <span className="text-stone-700">Click &apos;Send Test Request&apos; above to generate simulated HTTP requests...</span>
                  ) : (
                    requestLog.map((log, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center justify-between py-1 border-b border-stone-800 ${
                          log.type === "error" ? "text-rose-400 font-bold" : "text-emerald-400"
                        }`}
                      >
                        <span>[{log.time}] Target: {log.backend}</span>
                        <span>{log.status}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* SIMULATOR 4: VXLAN Overlay & MTU Inspector */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold mb-2">
                  <Zap size={14} />
                  <span>SIMULATOR 4</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                  VXLAN Packet Encapsulation &amp; MTU Inspector
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm">
                  Examine the exact 50-byte header structure of VXLAN packets and diagnose why standard 1500-byte MTUs cause packet drops.
                </p>
              </div>

              {/* Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-200 mb-6 text-xs">
                <div>
                  <label className="block text-stone-700 font-bold mb-1">
                    Physical Underlay Switch MTU: <span className="font-mono text-[#ea580c]">{underlayMtu} bytes</span>
                  </label>
                  <input
                    type="range"
                    min="1400"
                    max="9000"
                    step="50"
                    value={underlayMtu}
                    onChange={(e) => setUnderlayMtu(Number(e.target.value))}
                    className="w-full accent-orange-600"
                  />
                  <div className="flex justify-between text-[10px] text-stone-700 mt-1 font-mono">
                    <span>1500 (Standard)</span>
                    <span>1600 (VXLAN Safe)</span>
                    <span>9000 (Jumbo)</span>
                  </div>
                </div>

                <div>
                  <label className="block text-stone-700 font-bold mb-1">
                    Inner Tenant VM Payload: <span className="font-mono text-[#ea580c]">{tenantPayload} bytes</span>
                  </label>
                  <input
                    type="range"
                    min="500"
                    max="1460"
                    step="20"
                    value={tenantPayload}
                    onChange={(e) => setTenantPayload(Number(e.target.value))}
                    className="w-full accent-orange-600"
                  />
                  <div className="flex justify-between text-[10px] text-stone-700 mt-1 font-mono">
                    <span>500 (Small)</span>
                    <span>1000</span>
                    <span>1460 (Max TCP MSS)</span>
                  </div>
                </div>
              </div>

              {/* Encapsulation Structure */}
              <div className="p-4 rounded-2xl bg-stone-900 text-white font-mono text-xs mb-4">
                <div className="text-[10px] text-stone-400 mb-3 uppercase">Encapsulated Wire Frame Dissection</div>
                <div className="flex flex-wrap items-center gap-1.5 text-[11px] mb-3">
                  <span className="p-2 bg-blue-900/80 rounded border border-blue-500">Outer Eth (14B)</span>
                  <span>+</span>
                  <span className="p-2 bg-indigo-900/80 rounded border border-indigo-500">Outer IP (20B)</span>
                  <span>+</span>
                  <span className="p-2 bg-purple-900/80 rounded border border-purple-500">UDP Port 4789 (8B)</span>
                  <span>+</span>
                  <span className="p-2 bg-orange-900/80 rounded border border-orange-500">VXLAN VNI: 10420 (8B)</span>
                  <span>+</span>
                  <span className="p-2 bg-stone-700 rounded border border-stone-500">
                    Inner Frame ({vxlanCalculations.innerFrameSize}B)
                  </span>
                  <span>=</span>
                  <span className="p-2 bg-stone-800 rounded font-bold text-orange-400">
                    {vxlanCalculations.totalOverlayPacket} Bytes Total
                  </span>
                </div>
              </div>

              {/* Status Alert */}
              <div
                className={`p-4 rounded-2xl border text-xs font-mono flex items-start gap-3 ${
                  vxlanCalculations.isExceeded
                    ? "bg-rose-50 border-rose-300 text-rose-800"
                    : "bg-emerald-50 border-emerald-300 text-emerald-800"
                }`}
              >
                {vxlanCalculations.isExceeded ? <AlertTriangle size={18} /> : <CheckCircle2 size={18} />}
                <div>
                  <span className="font-bold block">
                    {vxlanCalculations.isExceeded ? "MTU VIOLATION DETECTED" : "MTU VERIFICATION PASSED"}
                  </span>
                  <span>{vxlanCalculations.status}</span>
                </div>
              </div>
            </div>

            {/* SIMULATOR 5: Zero-Trust Bastion & Posture Sandbox */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold mb-2">
                    <Shield size={14} />
                    <span>SIMULATOR 5</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                    Zero-Trust Access &amp; Device Posture Evaluator
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm">
                    Simulate NIST SP 800-207 access control with device posture checks, MFA verification, and least-privilege RBAC.
                  </p>
                </div>
                <button
                  onClick={testZeroTrustAccess}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-[#ea580c] transition cursor-pointer"
                >
                  <Lock size={14} />
                  <span>Evaluate Access Request</span>
                </button>
              </div>

              {/* Inputs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-6 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
                <div>
                  <label className="block text-stone-700 font-bold mb-1">Corporate MDM Posture</label>
                  <button
                    onClick={() => setZtManagedDevice((prev) => !prev)}
                    className={`w-full p-2 rounded-xl font-bold transition cursor-pointer ${
                      ztManagedDevice
                        ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                        : "bg-rose-100 text-rose-800 border border-rose-300"
                    }`}
                  >
                    {ztManagedDevice ? "Compliant (MDM Active)" : "Non-Compliant (Personal)"}
                  </button>
                </div>

                <div>
                  <label className="block text-stone-700 font-bold mb-1">FIDO2 MFA Token</label>
                  <button
                    onClick={() => setZtMfaPassed((prev) => !prev)}
                    className={`w-full p-2 rounded-xl font-bold transition cursor-pointer ${
                      ztMfaPassed
                        ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                        : "bg-rose-100 text-rose-800 border border-rose-300"
                    }`}
                  >
                    {ztMfaPassed ? "MFA Verified" : "MFA Missing"}
                  </button>
                </div>

                <div>
                  <label className="block text-stone-700 font-bold mb-1">Authenticated Role</label>
                  <select
                    value={ztRole}
                    onChange={(e) => setZtRole(e.target.value)}
                    className="w-full p-2 rounded-xl border border-stone-300 bg-white font-mono"
                  >
                    <option value="sre">sre (Site Reliability Engineer)</option>
                    <option value="frontend_dev">frontend_dev (UI Developer)</option>
                    <option value="contractor">contractor (External Vendor)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-stone-700 font-bold mb-1">Requested Target</label>
                  <select
                    value={ztAccessTarget}
                    onChange={(e) => setZtAccessTarget(e.target.value)}
                    className="w-full p-2 rounded-xl border border-stone-300 bg-white font-mono"
                  >
                    <option value="prod-db">Production PostgreSQL DB</option>
                    <option value="staging-app">Staging Web App Server</option>
                    <option value="metrics">Grafana Metrics Dashboard</option>
                  </select>
                </div>
              </div>

              {/* Real-time Zero Trust Log */}
              <div>
                <h4 className="text-xs font-bold text-stone-900 uppercase font-mono mb-2">Zero-Trust Identity-Aware Bastion Audit Trail</h4>
                <div className="bg-stone-900 rounded-2xl p-4 font-mono text-[11px] text-stone-300 max-h-48 overflow-y-auto space-y-1">
                  {ztLog.length === 0 ? (
                    <span className="text-stone-700">Click &apos;Evaluate Access Request&apos; above to simulate an access verification...</span>
                  ) : (
                    ztLog.map((log, idx) => (
                      <div
                        key={idx}
                        className={`p-2 rounded-xl border mb-1 ${
                          log.result === "GRANTED"
                            ? "bg-emerald-950/40 border-emerald-800 text-emerald-300"
                            : "bg-rose-950/40 border-rose-800 text-rose-300"
                        }`}
                      >
                        <div className="flex items-center justify-between font-bold mb-1">
                          <span>[{log.time}] Target: {log.target}</span>
                          <span className="uppercase">{log.result}</span>
                        </div>
                        <div className="text-[10px] text-stone-400">{log.reason}</div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: HANDS-ON MULTI-TIER VPC LAB                        */}
        {/* ========================================================= */}
        {activeTab === "lab" && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold mb-2">
                    <Terminal size={14} />
                    <span>LAB 16.1</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    Design &amp; Audit a Multi-Tier Cloud Application Network
                  </h2>
                </div>
                <div className="text-xs font-mono bg-stone-100 px-3 py-1.5 rounded-xl border border-stone-200">
                  ESTIMATED TIME: 90–120 MINS
                </div>
              </div>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
                In this lab, you design and document a production-grade 3-tier cloud virtual network (10.20.0.0/16) across 2 Availability Zones. The architecture hosts a public HTTPS load balancer, private application servers, and an isolated database tier with zero public exposure.
              </p>

              {/* Subnetting Table */}
              <h3 className="font-bold text-stone-900 text-sm mb-3">1. Subnet CIDR Allocation Table</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-xs text-left border border-stone-200 rounded-xl overflow-hidden">
                  <thead className="bg-stone-100 text-stone-700 font-bold uppercase text-[11px]">
                    <tr>
                      <th className="p-3">Subnet Name</th>
                      <th className="p-3">CIDR Block</th>
                      <th className="p-3">Availability Zone</th>
                      <th className="p-3">Route to 0.0.0.0/0</th>
                      <th className="p-3">Allocated Resources</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-600 font-mono text-[11px]">
                    <tr>
                      <td className="p-3 font-bold text-stone-900">public-ingress-1a</td>
                      <td className="p-3">10.20.1.0/24</td>
                      <td className="p-3">us-east-1a</td>
                      <td className="p-3 text-emerald-700 font-bold">Internet Gateway (igw)</td>
                      <td className="p-3">Application Load Balancer ENI</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">public-ingress-1b</td>
                      <td className="p-3">10.20.2.0/24</td>
                      <td className="p-3">us-east-1b</td>
                      <td className="p-3 text-emerald-700 font-bold">Internet Gateway (igw)</td>
                      <td className="p-3">Application Load Balancer ENI</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">private-app-1a</td>
                      <td className="p-3">10.20.11.0/24</td>
                      <td className="p-3">us-east-1a</td>
                      <td className="p-3 text-amber-700 font-bold">NAT Gateway 1a (nat-gw)</td>
                      <td className="p-3">Node.js / Go Web App Instance 1</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">private-app-1b</td>
                      <td className="p-3">10.20.12.0/24</td>
                      <td className="p-3">us-east-1b</td>
                      <td className="p-3 text-amber-700 font-bold">NAT Gateway 1b (nat-gw)</td>
                      <td className="p-3">Node.js / Go Web App Instance 2</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">private-db-1a</td>
                      <td className="p-3">10.20.21.0/24</td>
                      <td className="p-3">us-east-1a</td>
                      <td className="p-3 text-stone-700 font-bold">NONE (Local VPC Only)</td>
                      <td className="p-3">PostgreSQL Primary Instance</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">private-db-1b</td>
                      <td className="p-3">10.20.22.0/24</td>
                      <td className="p-3">us-east-1b</td>
                      <td className="p-3 text-stone-700 font-bold">NONE (Local VPC Only)</td>
                      <td className="p-3">PostgreSQL Standby Replica</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Security Policy Matrix */}
              <h3 className="font-bold text-stone-900 text-sm mb-3">2. Ingress &amp; Egress Security Group Matrix</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-xs text-left border border-stone-200 rounded-xl overflow-hidden">
                  <thead className="bg-stone-100 text-stone-700 font-bold uppercase text-[11px]">
                    <tr>
                      <th className="p-3">Security Group</th>
                      <th className="p-3">Direction</th>
                      <th className="p-3">Protocol / Port</th>
                      <th className="p-3">Authorized Source / Destination</th>
                      <th className="p-3">Rule Policy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-600 font-mono text-[11px]">
                    <tr>
                      <td className="p-3 font-bold text-stone-900">sg-alb</td>
                      <td className="p-3">Inbound</td>
                      <td className="p-3">TCP 443 (HTTPS)</td>
                      <td className="p-3">0.0.0.0/0 (Internet)</td>
                      <td className="p-3 text-emerald-700 font-bold">PERMIT</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">sg-alb</td>
                      <td className="p-3">Outbound</td>
                      <td className="p-3">TCP 8080</td>
                      <td className="p-3">sg-app (Application Security Group)</td>
                      <td className="p-3 text-emerald-700 font-bold">PERMIT</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">sg-app</td>
                      <td className="p-3">Inbound</td>
                      <td className="p-3">TCP 8080</td>
                      <td className="p-3">sg-alb (Load Balancer SG only)</td>
                      <td className="p-3 text-emerald-700 font-bold">PERMIT</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">sg-app</td>
                      <td className="p-3">Outbound</td>
                      <td className="p-3">TCP 5432</td>
                      <td className="p-3">sg-db (Database SG only)</td>
                      <td className="p-3 text-emerald-700 font-bold">PERMIT</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">sg-db</td>
                      <td className="p-3">Inbound</td>
                      <td className="p-3">TCP 5432 (Postgres)</td>
                      <td className="p-3">sg-app (App SG only; no CIDRs)</td>
                      <td className="p-3 text-emerald-700 font-bold">PERMIT</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">sg-db</td>
                      <td className="p-3">Outbound</td>
                      <td className="p-3">ALL</td>
                      <td className="p-3">0.0.0.0/0 (Internet)</td>
                      <td className="p-3 text-rose-700 font-bold">DENY ALL</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Validation Checklist (0/8) */}
              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#ea580c]" />
                    <span>Lab Completion Checklist ({Object.values(checkedItems).filter(Boolean).length}/8)</span>
                  </h3>
                  <span className="text-xs font-mono text-stone-700">TRACK PROGRESS</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    "I have designed public subnets in at least two availability zones.",
                    "Application servers are in private subnets with no public IPs assigned.",
                    "Database servers are in separate subnets with no route to the Internet Gateway.",
                    "Database Security Group explicitly references the App SG ID instead of an IP CIDR.",
                    "Deep HTTP /healthz checks are configured on the ALB rather than shallow TCP checks.",
                    "Outbound private instance traffic routes via a managed NAT Gateway.",
                    "Underlay switch MTU is verified >= 1550 bytes to accommodate VXLAN encapsulation.",
                    "Zero-Trust bastion with MFA and session logging is specified for administrative access.",
                  ].map((task, idx) => (
                    <label
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-stone-200 cursor-pointer hover:border-orange-300 transition"
                    >
                      <input
                        type="checkbox"
                        checked={!!checkedItems[idx]}
                        onChange={() => toggleCheck(idx)}
                        className="mt-0.5 rounded text-orange-600 focus:ring-orange-500"
                      />
                      <span className={checkedItems[idx] ? "line-through text-stone-700" : "text-stone-700"}>
                        {task}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: KNOWLEDGE CHECK (10 QUESTIONS)                     */}
        {/* ========================================================= */}
        {activeTab === "quiz" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold mb-2">
                    <HelpCircle size={14} />
                    <span>ASSESSMENT</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    Module 16 Knowledge Check: Enterprise, Data Center &amp; Cloud Networking
                  </h2>
                </div>
                {quizSubmitted && (
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold font-mono px-3 py-1.5 rounded-xl bg-orange-100 text-orange-800">
                      SCORE: {calculateScore()} / {quizQuestions.length} ({Math.round((calculateScore() / quizQuestions.length) * 100)}%)
                    </span>
                    <button
                      onClick={resetQuiz}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-xs font-bold text-stone-700 transition cursor-pointer"
                    >
                      <RefreshCw size={14} />
                      <span>Retake Quiz</span>
                    </button>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                {quizQuestions.map((q, qIdx) => {
                  const selected = quizAnswers[q.id];
                  const isAnswered = selected !== undefined;
                  const isCorrect = selected === q.correct;

                  return (
                    <div key={q.id} className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <span className="font-bold text-stone-900 text-sm">
                          {qIdx + 1}. {q.question}
                        </span>
                        {quizSubmitted && (
                          <span
                            className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                              isCorrect ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"
                            }`}
                          >
                            {isCorrect ? "CORRECT" : "INCORRECT"}
                          </span>
                        )}
                      </div>

                      <div className="space-y-2 mb-3">
                        {q.options.map((opt, optIdx) => {
                          const isOptionSelected = selected === optIdx;
                          let btnStyle = "bg-white border-stone-200 text-stone-700 hover:bg-stone-100";

                          if (quizSubmitted) {
                            if (optIdx === q.correct) {
                              btnStyle = "bg-emerald-100 border-emerald-400 text-emerald-900 font-bold";
                            } else if (isOptionSelected) {
                              btnStyle = "bg-rose-100 border-rose-400 text-rose-900";
                            } else {
                              btnStyle = "bg-white border-stone-200 text-stone-700 opacity-60";
                            }
                          } else if (isOptionSelected) {
                            btnStyle = "bg-stone-900 text-white font-semibold border-stone-900";
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleQuizSelect(q.id, optIdx)}
                              className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition cursor-pointer ${btnStyle}`}
                            >
                              <div className="flex items-center gap-2">
                                <span className="font-mono text-xs opacity-60">
                                  {String.fromCharCode(65 + optIdx)}.
                                </span>
                                <span>{opt}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {quizSubmitted && (
                        <div className="p-3 rounded-xl bg-orange-50/70 border border-orange-200 text-xs text-stone-800 leading-relaxed font-sans">
                          <strong>Rationale:</strong> {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {!quizSubmitted && (
                <div className="mt-8 text-center">
                  <button
                    onClick={() => setQuizSubmitted(true)}
                    disabled={Object.keys(quizAnswers).length === 0}
                    className="px-6 py-2.5 rounded-xl bg-[#ea580c] text-white font-bold text-sm hover:bg-orange-700 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                  >
                    Submit All 10 Answers
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 5: SRE AUDIT REPORT                                   */}
        {/* ========================================================= */}
        {activeTab === "audit" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold mb-2">
                    <Shield size={14} />
                    <span>SRE PRODUCTION DELIVERABLE</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    Production Cloud Architecture &amp; Security Audit Report
                  </h2>
                </div>
                <button
                  onClick={() => handleCopy(cloudAuditReportTemplate, "audit-report")}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-[#ea580c] transition cursor-pointer"
                >
                  {copiedKey === "audit-report" ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedKey === "audit-report" ? "Copied Markdown!" : "Copy Audit Plan"}</span>
                </button>
              </div>

              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6">
                Use this portfolio-grade SRE cloud audit template for enterprise architecture reviews, SOC2 compliance audits, and security sign-offs.
              </p>

              <div className="bg-stone-950 rounded-2xl p-5 border border-stone-800 font-mono text-[11px] text-stone-300 max-h-96 overflow-y-auto leading-relaxed whitespace-pre-wrap">
                {cloudAuditReportTemplate}
              </div>
            </div>
          </div>
        )}

        {/* Footer Navigation Bar */}
        <div className="mt-10 pt-6 border-t border-[#e7e3da] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => {
              navigate("/learning/networks/firewalls");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#e7e3da] bg-white text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#ea580c] transition cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 15 — Network Services, Firewalls &amp; Access Control</span>
          </button>

          <button
            onClick={() => {
              navigate("/learning/networks/threat-modeling");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 text-xs font-bold text-white hover:bg-orange-600 transition cursor-pointer"
          >
            <span>Next: Module 17 — Security &amp; Threat Modeling</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
