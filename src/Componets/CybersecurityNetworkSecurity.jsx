import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  Lock,
  Server,
  Terminal,
  FileText,
  ExternalLink,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  RefreshCw,
  Filter,
  Eye,
  Zap,
  Layers,
  Cpu,
  Database,
  Network,
  Activity,
  Search,
  BookOpen,
  Sliders,
  Play,
  Check,
  X,
  Info,
  Target,
  GitBranch,
  ArrowUpRight,
  Copy,
  Globe,
  Radio,
  Clock,
  AlertOctagon,
  Laptop,
  Wifi,
  HardDrive
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

export default function CybersecurityNetworkSecurity() {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(9);

  // Tab State
  const [activeTab, setActiveTab] = useState("theory"); // theory | labs | case-study | assessment | capstone
  const [selectedLesson, setSelectedLesson] = useState(1);

  // Lab 1: Firewall Rule Review
  const initialRules = [
    {
      id: "FW-101",
      source: "0.0.0.0/0 (Internet)",
      destination: "10.0.1.10 (Web DMZ)",
      port: "TCP/443 (HTTPS)",
      action: "ALLOW",
      owner: "SecOps Team",
      logging: "Enabled",
      status: "optimal",
      issue: "None. Strictly scoped inbound web access.",
      recommended: "Keep current configuration."
    },
    {
      id: "FW-102",
      source: "0.0.0.0/0 (Internet)",
      destination: "10.0.3.50 (Prod DB)",
      port: "TCP/3306 (MySQL)",
      action: "ALLOW",
      owner: "Unknown / Legacy Dev",
      logging: "Disabled",
      status: "critical",
      issue: "CRITICAL: Direct Internet-to-Database exposure. No owner, no logging.",
      recommended: "DENY immediately. Only permit 10.0.2.0/24 (App Tier) to reach 10.0.3.50:3306."
    },
    {
      id: "FW-103",
      source: "10.0.10.0/24 (Corp LAN)",
      destination: "10.0.99.0/24 (Mgmt Svc)",
      port: "ANY",
      action: "ALLOW",
      owner: "IT Support",
      logging: "Disabled",
      status: "high",
      issue: "HIGH: All corporate employees have unrestricted access to core management infrastructure.",
      recommended: "DENY by default. Restrict to Bastion host (10.0.99.5) over SSH/HTTPS with MFA."
    },
    {
      id: "FW-104",
      source: "172.16.50.0/24 (Guest Wi-Fi)",
      destination: "10.0.0.0/8 (Internal Org)",
      port: "ANY",
      action: "ALLOW",
      owner: "Facility Admin",
      logging: "Enabled",
      status: "critical",
      issue: "CRITICAL: Guest devices can traverse into internal subnets and scan enterprise workloads.",
      recommended: "ISOLATE. Deny RFC 1918 traffic. Allow ONLY egress to WAN (0.0.0.0/0) ports 80/443."
    },
    {
      id: "FW-105",
      source: "10.0.1.0/24 (DMZ Web)",
      destination: "10.0.2.0/24 (App Tier)",
      port: "TCP/8443 (API Gateway)",
      action: "ALLOW",
      owner: "Platform Eng",
      logging: "Enabled",
      status: "optimal",
      issue: "None. Legitimate multi-tier application dependency.",
      recommended: "Maintain current policy; enforce mutual TLS inspection."
    },
    {
      id: "FW-106",
      source: "ANY",
      destination: "ANY",
      port: "ANY",
      action: "ALLOW",
      owner: "Undefined",
      logging: "Disabled",
      status: "critical",
      issue: "CRITICAL: Permissive 'Any Any Any' catch-all rule completely invalidates perimeter defense.",
      recommended: "REPLACE with strict Default Deny (Drop/Reject with audit logging)."
    }
  ];
  const [rules, setRules] = useState(initialRules);
  const [fixedRulesCount, setFixedRulesCount] = useState(0);

  const fixRule = (id, newAction, fixText) => {
    setRules((prev) =>
      prev.map((r) =>
        r.id === id
          ? {
              ...r,
              action: newAction,
              status: "fixed",
              issue: `Resolved: ${fixText}`,
              logging: "Enabled (Audit)"
            }
          : r
      )
    );
    setFixedRulesCount((prev) => prev + 1);
  };

  // Lab 2: Segmentation Topology Architect
  const [selectedZone, setSelectedZone] = useState("dmz");
  const zonesInfo = {
    dmz: {
      name: "DMZ / Public Services",
      subnet: "10.0.1.0/24",
      vlan: "VLAN 10",
      purpose: "Host external-facing reverse proxies, WAFs, and public web endpoints.",
      inbound: "Internet (TCP 80/443)",
      outbound: "App Tier (TCP 8443 API only)",
      securityControls: "NGFW Stateful Inspection, Suricata Inline IPS, WAF"
    },
    app: {
      name: "Internal Application Tier",
      subnet: "10.0.2.0/24",
      vlan: "VLAN 20",
      purpose: "Executes business logic, microservices, and queue processing.",
      inbound: "DMZ Reverse Proxies only",
      outbound: "Database Tier (TCP 5432/3306)",
      securityControls: "Host-based Firewalls (nftables), Mutual TLS (mTLS), Microsegmentation"
    },
    db: {
      name: "Database & Sensitive Storage",
      subnet: "10.0.3.0/24",
      vlan: "VLAN 30",
      purpose: "Persistent records, customer PII, financial ledgers, and encrypted secrets.",
      inbound: "App Tier cluster only",
      outbound: "Strictly Denied (No direct Internet egress)",
      securityControls: "Zero-Trust Service Identity, Database Activity Monitoring, Transparent Data Encryption"
    },
    corp: {
      name: "Corporate Employee Network",
      subnet: "10.0.10.0/24",
      vlan: "VLAN 100",
      purpose: "Employee laptops, workstations, VoIP handsets, and printers.",
      inbound: "Denied from external and DMZ",
      outbound: "Internet (80/443 via Secure Web Gateway), Internal Intranet",
      securityControls: "802.1X Network Access Control, EDR, DNS Filtering"
    },
    mgmt: {
      name: "Administrative Management Zone",
      subnet: "10.0.99.0/24",
      vlan: "VLAN 999",
      purpose: "Bastion jump hosts, hypervisor consoles, SIEM collector, Out-of-Band IPMI.",
      inbound: "Dedicated Admin Workstations via VPN + FIDO2 Hardware Key",
      outbound: "SSH/RDP to servers across designated management interfaces",
      securityControls: "Jump Box Session Recording, Privileged Access Management (PAM), Network Isolation"
    },
    guest: {
      name: "Isolated Guest Wi-Fi",
      subnet: "172.16.50.0/24",
      vlan: "VLAN 50",
      purpose: "Visitor mobile devices and untrusted contractor laptops.",
      inbound: "Denied from all internal segments",
      outbound: "Direct Internet egress only (Captive portal, rate-limited)",
      securityControls: "Client Isolation (no peer-to-peer), DNS sinkholing, Strict RFC 1918 blocking"
    }
  };

  // Lab 3: Suricata & Zeek IDS Alert Investigator
  const mockAlerts = [
    {
      id: "ALT-7041",
      timestamp: "2026-10-16 14:22:04",
      engine: "Suricata NIDS",
      sid: "2019401",
      signature: "ET EXPLOIT Apache HTTP Server 2.4.49 Path Traversal (CVE-2021-41773)",
      src: "198.51.100.124:49812",
      dst: "10.0.1.10:80",
      payload: "GET /cgi-bin/.%2e/.%2e/.%2e/.%2e/etc/passwd HTTP/1.1\\r\\nHost: shop.example.com",
      status: "unclassified",
      analysis:
        "Attacker attempting double-dot path traversal to dump /etc/passwd via vulnerable cgi-bin directory.",
      zeekLog: "conn.log: duration=0.04s, orig_bytes=142, resp_bytes=382, status=HTTP 400 Bad Request",
      type: "malicious"
    },
    {
      id: "ALT-7042",
      timestamp: "2026-10-16 14:25:31",
      engine: "Zeek Anomaly",
      sid: "ZEEK-DNS-09",
      signature: "DNS High Query Entropy & Volumetric TXT Burst (Possible DNS Tunnel)",
      src: "10.0.10.45:53210",
      dst: "1.1.1.1:53",
      payload: "Query: v8x92a01bf.tunnel.exfil-data.xyz IN TXT (120 queries/min, 480 bytes each)",
      status: "unclassified",
      analysis:
        "High-frequency base32-encoded subdomain lookups indicative of Cobalt Strike / DNSCat data exfiltration.",
      zeekLog: "dns.log: qtype_name=TXT, rcode=0, answers_count=1, total_bytes=64200 in 60s",
      type: "malicious"
    },
    {
      id: "ALT-7043",
      timestamp: "2026-10-16 14:31:18",
      engine: "Suricata NIDS",
      sid: "2001219",
      signature: "GPL SCAN Potential SSH Brute Force (Fast reconnects)",
      src: "10.0.99.15:43120",
      dst: "10.0.2.14:22",
      payload: "SSH-2.0-OpenSSH_8.9p1 Ubuntu-3ubuntu0.4 (4 connections in 2 seconds)",
      status: "unclassified",
      analysis:
        "Correlated with scheduled Ansible IT automation playbook running nightly patching routine from approved Bastion.",
      zeekLog: "conn.log: history=ShADdFf, successful authentication by svc-ansible key",
      type: "benign"
    }
  ];
  const [alerts, setAlerts] = useState(mockAlerts);
  const [selectedAlert, setSelectedAlert] = useState(mockAlerts[0]);

  const classifyAlert = (alertId, verdict) => {
    setAlerts((prev) =>
      prev.map((a) => (a.id === alertId ? { ...a, status: verdict } : a))
    );
    if (selectedAlert.id === alertId) {
      setSelectedAlert((prev) => ({ ...prev, status: verdict }));
    }
  };

  // Lab 4: Interactive PCAP Packet Inspector
  const [activePacketIndex, setActivePacketIndex] = useState(0);
  const packets = [
    {
      no: 1,
      time: "0.000000",
      src: "10.0.10.45",
      dst: "198.51.100.88",
      proto: "TCP",
      len: 74,
      info: "49822 -> 443 [SYN] Seq=0 Win=64240 Len=0 MSS=1460 SACK_PERM=1",
      flags: "SYN",
      details: {
        layer2: "Ethernet II, Src: 00:50:56:c0:00:08, Dst: 00:50:56:fa:31:01",
        layer3: "IPv4, Src: 10.0.10.45, Dst: 198.51.100.88, TTL: 64, Protocol: TCP (6)",
        layer4: "TCP, Src Port: 49822, Dst Port: 443, Seq: 0, Ack: 0, Flags: [SYN]",
        payloadNote: "Three-way handshake initiation from compromised host to external C2 node."
      }
    },
    {
      no: 2,
      time: "0.024110",
      src: "198.51.100.88",
      dst: "10.0.10.45",
      proto: "TCP",
      len: 74,
      info: "443 -> 49822 [SYN, ACK] Seq=0 Ack=1 Win=65160 Len=0 MSS=1460",
      flags: "SYN-ACK",
      details: {
        layer2: "Ethernet II, Src: 00:50:56:fa:31:01, Dst: 00:50:56:c0:00:08",
        layer3: "IPv4, Src: 198.51.100.88, Dst: 10.0.10.45, TTL: 52, Protocol: TCP (6)",
        layer4: "TCP, Src Port: 443, Dst Port: 49822, Seq: 0, Ack: 1, Flags: [SYN, ACK]",
        payloadNote: "External server accepts connection. Handshake completes normally."
      }
    },
    {
      no: 3,
      time: "0.024220",
      src: "10.0.10.45",
      dst: "198.51.100.88",
      proto: "TCP",
      len: 54,
      info: "49822 -> 443 [ACK] Seq=1 Ack=1 Win=64240 Len=0",
      flags: "ACK",
      details: {
        layer2: "Ethernet II, Src: 00:50:56:c0:00:08, Dst: 00:50:56:fa:31:01",
        layer3: "IPv4, Src: 10.0.10.45, Dst: 198.51.100.88, TTL: 64, Protocol: TCP (6)",
        layer4: "TCP, Src Port: 49822, Dst Port: 443, Seq: 1, Ack: 1, Flags: [ACK]",
        payloadNote: "Connection established."
      }
    },
    {
      no: 4,
      time: "0.038900",
      src: "10.0.10.45",
      dst: "198.51.100.88",
      proto: "TLSv1.3",
      len: 517,
      info: "Client Hello, Server Name: telemetry-update-service.cc",
      flags: "TLS",
      details: {
        layer2: "Ethernet II, Src: 00:50:56:c0:00:08, Dst: 00:50:56:fa:31:01",
        layer3: "IPv4, Src: 10.0.10.45, Dst: 198.51.100.88, TTL: 64, Protocol: TCP (6)",
        layer4: "TCP, Src Port: 49822, Dst Port: 443, PSH/ACK",
        layer7: "Transport Layer Security, TLS 1.3 Client Hello, SNI: telemetry-update-service.cc (Dynamic DNS C2 Indicator)",
        payloadNote: "SNI reveals external domain registered 24 hours prior. Payload encrypted post-handshake."
      }
    }
  ];

  // Lab 5: Flow Validation Simulator
  const testFlows = [
    {
      id: "TF-1",
      name: "Public User -> Web DMZ (HTTPS)",
      src: "203.0.113.15",
      dst: "10.0.1.10:443",
      expected: "ALLOW",
      result: "ALLOW (Matched FW-101)",
      status: "pass",
      reason: "Public application access permitted as designed."
    },
    {
      id: "TF-2",
      name: "Web DMZ -> Prod Database (MySQL)",
      src: "10.0.1.10",
      dst: "10.0.3.50:3306",
      expected: "DENY",
      result: "DENY (Dropped by Policy: DMZ cannot directly contact DB)",
      status: "pass",
      reason: "Enforces 3-tier boundary: Web must route through App Tier only."
    },
    {
      id: "TF-3",
      name: "App Tier -> Database (Postgres)",
      src: "10.0.2.14",
      dst: "10.0.3.50:5432",
      expected: "ALLOW",
      result: "ALLOW (Stateful Session Established)",
      status: "pass",
      reason: "Approved business dependency over dedicated database port."
    },
    {
      id: "TF-4",
      name: "Guest Wi-Fi -> Database Tier (MySQL)",
      src: "172.16.50.88",
      dst: "10.0.3.50:3306",
      expected: "DENY",
      result: "DENY (VLAN Routing ACL: RFC 1918 Isolation Blocked)",
      status: "pass",
      reason: "Guest network restricted to WAN egress only."
    },
    {
      id: "TF-5",
      name: "Employee Workstation -> Management IPMI",
      src: "10.0.10.22",
      dst: "10.0.99.1:443",
      expected: "DENY",
      result: "DENY (Drop with Alert: Unauthorized Administrative Access)",
      status: "pass",
      reason: "Management zone requires Bastion jump box with MFA."
    },
    {
      id: "TF-6",
      name: "Bastion Host -> App Tier (SSH)",
      src: "10.0.99.5",
      dst: "10.0.2.14:22",
      expected: "ALLOW",
      result: "ALLOW (Logged & Recorded via PAM Session)",
      status: "pass",
      reason: "Authorized administrative path under strict audit logging."
    }
  ];
  const [flowTests, setFlowTests] = useState(testFlows);
  const [testingRunning, setTestingRunning] = useState(false);

  const runFlowValidation = () => {
    setTestingRunning(true);
    setTimeout(() => {
      setTestingRunning(false);
    }, 1200);
  };

  // Lab 6: Alert Triage & Containment Sandbox
  const [triageStep, setTriageStep] = useState(1);
  const [containmentAction, setContainmentAction] = useState("");
  const [incidentResolved, setIncidentResolved] = useState(false);

  // Lab Submission Checklist (8 items)
  const [checklist, setChecklist] = useState({
    scope: false,
    diagram: false,
    firewallRules: false,
    flowValidation: false,
    idsAlerts: false,
    pcapAnalysis: false,
    monitoringResponse: false,
    changesRetest: false
  });

  const toggleChecklist = (key) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedChecklistCount = Object.values(checklist).filter(Boolean).length;

  // Interactive Assessment State
  const quizQuestions = [
    {
      id: 1,
      question: "What is the primary purpose of a network firewall?",
      options: [
        "Guarantee that all permitted network traffic is safe",
        "Enforce rules controlling network communications",
        "Replace endpoint security and identity controls",
        "Automatically prove whether every alert is malicious"
      ],
      correct: 1,
      explanation:
        "A firewall is a network control that enforces configured rules governing communications based on IP, port, protocol, and state. It does not guarantee that allowed traffic is free from application exploits, nor does it replace host controls."
    },
    {
      id: 2,
      question: "What is the principal difference between an IDS and an IPS?",
      options: [
        "An IDS protects only databases",
        "An IPS cannot generate alerts",
        "An IPS can enforce actions to block selected traffic",
        "An IDS automatically blocks every suspicious packet"
      ],
      correct: 2,
      explanation:
        "While an Intrusion Detection System (IDS) passively observes traffic and raises alerts for human or automated investigation, an Intrusion Prevention System (IPS) operates inline and can take active enforcement action, such as dropping malicious packets or resetting sessions."
    },
    {
      id: 3,
      question: "What is the main security objective of network segmentation?",
      options: [
        "Limit unnecessary communication and reduce the reach of a compromise",
        "Give every endpoint unrestricted access to every subnet",
        "Eliminate the need for firewall policies",
        "Guarantee that malware cannot enter the organization"
      ],
      correct: 0,
      explanation:
        "Network segmentation creates logical or physical boundaries to contain intrusions, prevent lateral movement, and restrict communications strictly to documented, least-privilege requirements."
    },
    {
      id: 4,
      question: "Which statement about VLANs is correct?",
      options: [
        "A VLAN always encrypts traffic between devices",
        "A VLAN provides logical Layer 2 separation, but routing and enforcement controls still matter",
        "A VLAN automatically prevents all lateral movement",
        "A VLAN replaces network monitoring"
      ],
      correct: 1,
      explanation:
        "VLANs provide broadcast domain isolation at Data Link Layer 2. However, if inter-VLAN routing is enabled without firewall filters or ACLs, traffic flows freely. A VLAN alone is not a comprehensive security policy."
    },
    {
      id: 5,
      question: "An IDS alert identifies unusual internal connections. What is the best next step?",
      options: [
        "Immediately conclude that a breach succeeded",
        "Delete the alert because internal traffic is trusted",
        "Validate the alert and correlate relevant network and endpoint evidence",
        "Disable monitoring to prevent further alerts"
      ],
      correct: 2,
      explanation:
        "An alert represents a rule match, not conclusive proof of compromise. The proper investigative workflow is to validate the alert against firewall logs, DNS records, endpoint telemetry, and authentication logs before taking action."
    },
    {
      id: 6,
      question: "Which statement best represents zero-trust architecture?",
      options: [
        "Do not grant implicit trust solely because a user or device is on an internal network",
        "Trust every device connected through a VPN",
        "Allow all internal services to communicate by default",
        "Replace identity management with VLANs"
      ],
      correct: 0,
      explanation:
        "NIST SP 800-207 specifies that zero trust eliminates implicit trust based on network location or asset ownership. Every access request must be explicitly verified, authorized, and continuously validated based on identity, device posture, and context."
    }
  ];

  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const handleSelectAnswer = (qIndex, oIndex) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [qIndex]: oIndex }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q, idx) => {
      if (quizAnswers[idx] === q.correct) score++;
    });
    return score;
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased">
      {/* 1. TOP HEADER & METADATA */}
      <header className="border-b border-stone-200 bg-white/90 backdrop-blur-md sticky top-0 z-40 px-4 sm:px-8 py-3.5 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-orange-600/10 text-orange-600">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                  Prepspaces Cybersecurity Masterclass · Module 9
                </span>
                <span className="text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full font-medium">
                  Intermediate
                </span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-medium">
                  Network Defense
                </span>
              </div>
              <h1 className="text-base sm:text-lg font-extrabold tracking-tight text-[#18181b]">
                Network Security, Firewalls, IDS/IPS, and Network Segmentation
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-100 text-stone-600 text-xs font-mono">
              <Clock className="w-3.5 h-3.5 text-stone-400" />
              10–14 Hours
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-orange-50 text-orange-700 text-xs font-mono font-medium">
              <BookOpen className="w-3.5 h-3.5 text-orange-600" />
              NIST SP 800-41 / 94 / 207 / 215
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-50 text-sky-700 text-xs font-mono font-medium">
              <Activity className="w-3.5 h-3.5 text-sky-600" />
              Suricata & Zeek
            </span>
          </div>
        </div>
      </header>

      {/* 2. SUB-NAVIGATION & TOPIC CAROUSEL */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-4">
        <ModuleNav
          currentTopic={selectedTopic}
          onSelectTopic={(t) => {
            setSelectedTopic(t);
          }}
        />

        {/* Primary Tabs */}
        <div className="flex border-b border-stone-200 mt-4 overflow-x-auto gap-1">
          {[
            { id: "theory", label: "Theory & Frameworks", icon: BookOpen },
            { id: "labs", label: "Interactive Labs (1–6)", icon: Terminal },
            { id: "case-study", label: "Applied Case Study", icon: Target },
            { id: "assessment", label: "Knowledge Assessment", icon: HelpCircle },
            { id: "capstone", label: "Capstone & Rubric", icon: ShieldCheck }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold border-b-2 transition whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "border-orange-600 text-orange-600 bg-orange-50/50"
                    : "border-transparent text-stone-500 hover:text-stone-800 hover:border-stone-300"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-orange-600" : "text-stone-400"}`} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. MAIN CONTENT CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
        {/* ========================================================================= */}
        {/* TAB 1: THEORY & LESSONS (Unabridged)                                      */}
        {/* ========================================================================= */}
        {activeTab === "theory" && (
          <div className="space-y-8">
            {/* Quick jump pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-stone-200">
              <span className="text-xs font-mono text-stone-400 uppercase tracking-wider font-bold">
                Jump To:
              </span>
              {[
                { num: 1, title: "L1: Fundamentals & Defense in Depth" },
                { num: 2, title: "L2: Firewalls & Policy Design" },
                { num: 3, title: "L3: IDS & IPS Architectures" },
                { num: 4, title: "L4: Segmentation & Zero Trust" },
                { num: 5, title: "L5: Monitoring & Traffic Visibility" },
                { num: 6, title: "L6: Testing & Lifecycle Management" }
              ].map((pill) => (
                <button
                  key={pill.num}
                  onClick={() => setSelectedLesson(pill.num)}
                  className={`text-xs px-3 py-1.5 rounded-lg font-medium transition whitespace-nowrap cursor-pointer ${
                    selectedLesson === pill.num
                      ? "bg-[#18181b] text-white"
                      : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-50"
                  }`}
                >
                  {pill.title}
                </button>
              ))}
            </div>

            {/* LESSON 1 */}
            {selectedLesson === 1 && (
              <section className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-xs">
                <div className="border-b border-stone-100 pb-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                    Lesson 1 · Core Architecture
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    Network Security Fundamentals and Defense in Depth
                  </h2>
                  <p className="text-stone-600 text-sm mt-1">
                    Establishing trust boundaries, analyzing multi-layer attack surfaces, and applying least privilege across traffic flows.
                  </p>
                </div>

                {/* 1.1 What does network security protect? */}
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">
                      1.1
                    </span>
                    What does network security protect?
                  </h3>
                  <p className="text-stone-700 text-sm leading-relaxed">
                    A network connects users, applications, services, devices, and data. Each connection creates a possible path through which legitimate activity—or unauthorized activity—can occur. Network security focuses on controlling those paths and observing how they are used.
                  </p>

                  <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-xs font-mono space-y-1">
                    <div className="font-bold text-stone-800">
                      Typical Enterprise Web Flow:
                    </div>
                    <div className="text-stone-600">
                      1. Users access a public web server over HTTPS (443).
                    </div>
                    <div className="text-stone-600">
                      2. The web server communicates with an internal application service (8443).
                    </div>
                    <div className="text-stone-600">
                      3. The application service accesses a restricted database (5432).
                    </div>
                    <div className="text-stone-600">
                      4. Administrators manage servers through a restricted management network (SSH/VPN).
                    </div>
                    <div className="text-stone-600">
                      5. Security monitoring systems (SIEM/IDS) collect network and security telemetry.
                    </div>
                  </div>
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-xs">
                    <strong>Critical Principle:</strong> If every component can communicate freely with every other component, a compromise of one system creates opportunities to reach other systems. Network security controls must limit those opportunities and provide forensic evidence when anomalies arise.
                  </div>
                </div>

                {/* 1.2 Common Network Threats */}
                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">
                      1.2
                    </span>
                    Common Network Threats & Consequences
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden">
                      <thead className="bg-stone-100 text-stone-700 font-mono uppercase text-[11px]">
                        <tr>
                          <th className="p-3">Threat</th>
                          <th className="p-3">Description</th>
                          <th className="p-3">Potential Consequence</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100 text-stone-700">
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-bold text-red-600">Unauthorized Access</td>
                          <td className="p-3">An unapproved device or identity reaches a restricted service.</td>
                          <td className="p-3">Data access or full system compromise.</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-bold text-stone-900">Port & Service Exposure</td>
                          <td className="p-3">Unnecessary network services are reachable from outside.</td>
                          <td className="p-3">Expanded attack surface; direct exploit opportunities.</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-bold text-stone-900">Man-in-the-Middle (MitM)</td>
                          <td className="p-3">An attacker interferes with a communication path (ARP/DNS spoofing).</td>
                          <td className="p-3">Data manipulation, credential harvesting, or eavesdropping.</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-bold text-stone-900">Denial of Service (DoS/DDoS)</td>
                          <td className="p-3">Network links, state tables, or application resources overwhelmed.</td>
                          <td className="p-3">Service disruption and loss of availability.</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-bold text-amber-700">Lateral Movement</td>
                          <td className="p-3">An intruder moves from one compromised host toward other internal nodes.</td>
                          <td className="p-3">Enterprise-wide compromise and privilege escalation.</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-bold text-amber-700">Command & Control (C2)</td>
                          <td className="p-3">Compromised asset beacons out to attacker-controlled infrastructure.</td>
                          <td className="p-3">Persistent interactive adversary access and payload delivery.</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-bold text-red-700">Data Exfiltration</td>
                          <td className="p-3">Sensitive files or database dumps leave the organization unauthorized.</td>
                          <td className="p-3">Regulatory fines (GDPR/HIPAA), IP theft, reputational harm.</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-bold text-stone-900">Network Misconfiguration</td>
                          <td className="p-3">Overly broad firewall rules or routing errors expose internal tiers.</td>
                          <td className="p-3">Boundary failure; accidental public accessibility.</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-bold text-stone-900">Rogue / Unmanaged Device</td>
                          <td className="p-3">An unknown hardware device plugs into a switch without 802.1X check.</td>
                          <td className="p-3">Shadow IT introduces vulnerabilities and unmonitored backdoors.</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-bold text-stone-900">DNS Abuse & Tunneling</td>
                          <td className="p-3">DNS protocol manipulated to exfiltrate data or bypass proxy policies.</td>
                          <td className="p-3">Uncontrolled data leak; stealthy communication channel.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 1.3 Core Security Principles */}
                <div className="space-y-4 pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">
                      1.3
                    </span>
                    Core Security Principles
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-2">
                      <div className="flex items-center gap-2 text-sm font-bold text-stone-900">
                        <Lock className="w-4 h-4 text-orange-600" />
                        Least Privilege
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Permit only the communications needed for a documented business purpose. A database server accepts connections from the application service on its designated port; it must never accept connections from generic employee workstations.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-2">
                      <div className="flex items-center gap-2 text-sm font-bold text-stone-900">
                        <AlertOctagon className="w-4 h-4 text-red-600" />
                        Default Deny
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Start with no access and explicitly permit required traffic. Default deny is far more secure than allowing everything and trying to enumerate bad traffic. A broad allow rule can destroy an otherwise restrictive posture.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-2">
                      <div className="flex items-center gap-2 text-sm font-bold text-stone-900">
                        <Layers className="w-4 h-4 text-blue-600" />
                        Defense in Depth
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Deploy complementary controls across 6 structural layers: Identity/Device $\to$ Network Segmentation $\to$ Firewall Enforcement $\to$ IDS/IPS Monitoring $\to$ Host/App Hardening $\to$ Incident Response.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 1.4 Traffic Flow Analysis */}
                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">
                      1.4
                    </span>
                    Understand the Traffic Flow Before Choosing a Control
                  </h3>
                  <p className="text-sm text-stone-700">
                    When designing security for any connection, the security engineer must answer seven foundational questions:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {[
                      "1. Who or what is initiating the connection? (Source identity & zone)",
                      "2. What destination is being accessed? (Target IP, service, endpoint)",
                      "3. Which protocol and service are involved? (TCP/UDP, port, TLS version)",
                      "4. Is the communication required by application design? (Documented matrix)",
                      "5. Which control enforces the decision? (Packet filter, stateful, NGFW, WAF)",
                      "6. Which logs or telemetry record the activity? (Firewall, flow logs, SIEM)",
                      "7. What should happen if denied or suspicious? (Drop, reject, alert, quarantine)"
                    ].map((q, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg border border-stone-200 bg-white font-mono text-stone-700">
                        {q}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* LESSON 2 */}
            {selectedLesson === 2 && (
              <section className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-xs">
                <div className="border-b border-stone-100 pb-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                    Lesson 2 · Perimeter & Host Defense
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    Firewalls and Firewall Policy Design
                  </h2>
                  <p className="text-stone-600 text-sm mt-1">
                    Stateless vs stateful filtering, NGFW and WAF boundaries, building rigorous rule tables, and managing policy lifecycles under NIST SP 800-41 Rev. 1.
                  </p>
                </div>

                {/* 2.1 What is a firewall? */}
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">
                      2.1
                    </span>
                    What is a Firewall?
                  </h3>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    A firewall is a hardware, software, virtual, or cloud-native control that enforces rules governing network communications. Depending on its design, it inspects source/destination IPs, ports, transport protocols, connection states, application identities, and interface direction.
                  </p>
                  <p className="text-xs font-mono text-stone-500 bg-stone-50 p-2.5 rounded-lg border border-stone-200">
                    Authority: NIST SP 800-41 Rev. 1 emphasizes that a firewall does not make an allowed connection safe; it merely enforces configured policy. If the policy is overly permissive, the firewall offers false assurance.
                  </p>
                </div>

                {/* 2.2 Major Firewall Types */}
                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">
                      2.2
                    </span>
                    Major Firewall Types
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-1.5">
                      <div className="font-bold text-stone-900 text-sm flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-orange-600" />
                        1. Stateless Packet Filter
                      </div>
                      <p className="text-stone-600">
                        Evaluates packets in isolation against static rules (IP, protocol, port). Does not maintain connection state tables. Fast, but cannot easily track dynamic return traffic.
                      </p>
                      <span className="text-[11px] font-mono text-stone-500">
                        Use case: High-speed edge ACLs, router boundary filtering.
                      </span>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-1.5">
                      <div className="font-bold text-stone-900 text-sm flex items-center gap-2">
                        <Activity className="w-4 h-4 text-emerald-600" />
                        2. Stateful Inspection Firewall
                      </div>
                      <p className="text-stone-600">
                        Maintains a state table tracking active TCP/UDP sessions (SYN, ESTABLISHED, FIN). Automatically permits legitimate response packets without requiring open reverse ports.
                      </p>
                      <span className="text-[11px] font-mono text-stone-500">
                        Use case: Core corporate gateways, Linux iptables/nftables, pfSense.
                      </span>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-1.5">
                      <div className="font-bold text-stone-900 text-sm flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-blue-600" />
                        3. Next-Generation Firewall (NGFW)
                      </div>
                      <p className="text-stone-600">
                        Combines stateful filtering with Layer 7 application awareness, deep packet inspection (DPI), user identity mapping, TLS decryption, and embedded IPS capabilities.
                      </p>
                      <span className="text-[11px] font-mono text-stone-500">
                        Use case: Palo Alto Networks, Fortinet, Check Point enterprise perimeters.
                      </span>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-1.5">
                      <div className="font-bold text-stone-900 text-sm flex items-center gap-2">
                        <Globe className="w-4 h-4 text-purple-600" />
                        4. Web Application Firewall (WAF)
                      </div>
                      <p className="text-stone-600">
                        Specialized reverse proxy enforcing rules on HTTP/HTTPS payloads to detect SQLi, XSS, and CSRF. Does NOT replace secure code or database access controls.
                      </p>
                      <span className="text-[11px] font-mono text-stone-500">
                        Use case: ModSecurity, AWS WAF, Cloudflare WAF protecting web APIs.
                      </span>
                    </div>
                  </div>
                </div>

                {/* 2.3 Stateful Filtering vs Application Inspection */}
                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">
                      2.3
                    </span>
                    Stateful Filtering vs Application Inspection
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden">
                      <thead className="bg-stone-100 text-stone-700 font-mono uppercase text-[11px]">
                        <tr>
                          <th className="p-3">Analytical Question</th>
                          <th className="p-3">Primary Enforcing Control</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100 text-stone-700">
                        <tr className="hover:bg-stone-50">
                          <td className="p-3">Is this transport connection permitted?</td>
                          <td className="p-3 font-mono">Packet filtering & stateful firewall rules</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3">Is this service allowed for this source and destination?</td>
                          <td className="p-3 font-mono">Network & application-aware policy (NGFW)</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3">Does the request match a known exploit pattern?</td>
                          <td className="p-3 font-mono">IDS/IPS or WAF application inspection</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3">Is the user authorized to execute this specific business query?</td>
                          <td className="p-3 font-mono">Identity, RBAC, and application authorization controls</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-stone-600 italic">
                    An established TCP/TLS connection is never proof that the user's action is authorized.
                  </p>
                </div>

                {/* 2.4 & 2.5 Building & Reviewing Policies */}
                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">
                      2.4–2.5
                    </span>
                    Disciplined Rule-Review & Auditing
                  </h3>
                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 text-xs space-y-2">
                    <div className="font-bold text-stone-900">
                      Essential Policy Rule Attributes (Required for Every Firewall Entry):
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-stone-700">
                      <div className="p-2 bg-white rounded border border-stone-200">• Source Zone / IP</div>
                      <div className="p-2 bg-white rounded border border-stone-200">• Destination Zone / IP</div>
                      <div className="p-2 bg-white rounded border border-stone-200">• Protocol & Port</div>
                      <div className="p-2 bg-white rounded border border-stone-200">• Direction (In/Out)</div>
                      <div className="p-2 bg-white rounded border border-stone-200">• Action (Permit/Deny)</div>
                      <div className="p-2 bg-white rounded border border-stone-200">• Business Justification</div>
                      <div className="p-2 bg-white rounded border border-stone-200">• Documented Rule Owner</div>
                      <div className="p-2 bg-white rounded border border-stone-200">• Expiration / Review Date</div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* LESSON 3 */}
            {selectedLesson === 3 && (
              <section className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-xs">
                <div className="border-b border-stone-100 pb-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                    Lesson 3 · Detection & Prevention
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    Intrusion Detection and Prevention Systems (IDS/IPS)
                  </h2>
                  <p className="text-stone-600 text-sm mt-1">
                    Operating mechanics of Suricata and Zeek, NIDS vs HIDS, signature vs anomaly vs behavior detection, and sensor placement tradeoffs.
                  </p>
                </div>

                {/* 3.1-3.3 IDS vs IPS */}
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">
                      3.1–3.3
                    </span>
                    IDS vs IPS: Structural Comparison
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden">
                      <thead className="bg-stone-100 text-stone-700 font-mono uppercase text-[11px]">
                        <tr>
                          <th className="p-3">Characteristic</th>
                          <th className="p-3">Intrusion Detection System (IDS)</th>
                          <th className="p-3">Intrusion Prevention System (IPS)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100 text-stone-700">
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-bold text-stone-900">Primary Purpose</td>
                          <td className="p-3">Passively detect suspicious activity and alert.</td>
                          <td className="p-3 font-bold text-orange-600">Detect and actively block selected malicious traffic.</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-bold text-stone-900">Network Placement</td>
                          <td className="p-3">Out-of-band: SPAN/Mirror port, network TAP.</td>
                          <td className="p-3">In-line: Traffic physically traverses the sensor.</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-bold text-stone-900">Traffic Impact</td>
                          <td className="p-3 text-emerald-700">Zero latency added; failure does not drop traffic.</td>
                          <td className="p-3 text-amber-700">Can drop packets; sensor failure can cause outage if fail-closed.</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-bold text-stone-900">Operational Risk</td>
                          <td className="p-3">Alert fatigue, missed compromises (false negatives).</td>
                          <td className="p-3">False positives blocking legitimate business transactions.</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-bold text-stone-900">Tuning Requirement</td>
                          <td className="p-3">Manageable alerts and actionable telemetry.</td>
                          <td className="p-3">Extremely high confidence rules before enabling inline drop.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 3.4 Deployment Types */}
                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">
                      3.4
                    </span>
                    Deployment Models: NIDS, HIDS, and NDR
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-1.5">
                      <div className="font-bold text-stone-900 flex items-center gap-1.5 text-sm">
                        <Network className="w-4 h-4 text-orange-600" />
                        Network-based (NIDS/NIPS)
                      </div>
                      <p className="text-stone-600">
                        Monitors raw packets passing across choke points (data center egress, inter-VLAN switches).
                      </p>
                      <div className="font-mono text-stone-500 text-[11px]">
                        Examples: Suricata, Snort, Zeek.
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-1.5">
                      <div className="font-bold text-stone-900 flex items-center gap-1.5 text-sm">
                        <Laptop className="w-4 h-4 text-blue-600" />
                        Host-based (HIDS/EDR)
                      </div>
                      <p className="text-stone-600">
                        Inspects process trees, registry edits, system calls, and decrypted memory on endpoints.
                      </p>
                      <div className="font-mono text-stone-500 text-[11px]">
                        Examples: OSSEC, Wazuh, CrowdStrike Falcon.
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-1.5">
                      <div className="font-bold text-stone-900 flex items-center gap-1.5 text-sm">
                        <Activity className="w-4 h-4 text-purple-600" />
                        Network Detection & Response (NDR)
                      </div>
                      <p className="text-stone-600">
                        Combines protocol metadata, machine learning baselines, and automated response integrations.
                      </p>
                      <div className="font-mono text-stone-500 text-[11px]">
                        Examples: Corelight, Vectra AI, Darktrace.
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3.5 Detection Methods */}
                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">
                      3.5
                    </span>
                    Signature vs Anomaly vs Behavior Detection
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 bg-white border border-stone-200 rounded-xl space-y-1">
                      <div className="font-bold text-stone-900">Signature-Based</div>
                      <p className="text-stone-600">
                        Matches explicit string patterns, regex, or protocol flaws (e.g. known exploit shellcode in URI).
                      </p>
                      <div className="text-[11px] text-emerald-700 font-mono">High precision for known CVEs; fails against novel zero-days.</div>
                    </div>
                    <div className="p-3 bg-white border border-stone-200 rounded-xl space-y-1">
                      <div className="font-bold text-stone-900">Anomaly-Based</div>
                      <p className="text-stone-600">
                        Flags deviations from a statistical baseline (e.g. server suddenly transmitting 50GB instead of 50MB).
                      </p>
                      <div className="text-[11px] text-amber-700 font-mono">Finds unknown traffic spikes; prone to false alarms during updates.</div>
                    </div>
                    <div className="p-3 bg-white border border-stone-200 rounded-xl space-y-1">
                      <div className="font-bold text-stone-900">Behavior-Based</div>
                      <p className="text-stone-600">
                        Evaluates contextual action chains (e.g. internal workstation attempting SSH connections to 40 servers).
                      </p>
                      <div className="text-[11px] text-blue-700 font-mono">Catches lateral movement and reconnaissance campaigns.</div>
                    </div>
                  </div>
                </div>

                {/* 3.7 Sensor Placement & Encryption */}
                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">
                      3.7
                    </span>
                    Sensor Placement & The Encryption Blindspot
                  </h3>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    A network sensor placed only at the internet gateway cannot see lateral movement between two workstations inside the corporate LAN. Furthermore, over 90% of web traffic is encrypted with TLS 1.3. Sensors must rely on connection metadata (IPs, SNI, TLS cipher suites, packet timing, packet sizes) or terminate TLS on dedicated reverse proxies for inspection.
                  </p>
                </div>
              </section>
            )}

            {/* LESSON 4 */}
            {selectedLesson === 4 && (
              <section className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-xs">
                <div className="border-b border-stone-100 pb-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                    Lesson 4 · Architecture & Segmentation
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    Network Segmentation, DMZs, and Zero Trust Architecture
                  </h2>
                  <p className="text-stone-600 text-sm mt-1">
                    Logical and physical boundaries, microsegmentation, IT vs OT segregation, and implementing NIST SP 800-207 Zero Trust.
                  </p>
                </div>

                {/* 4.1 & 4.2 Segmentation Mechanisms */}
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">
                      4.1–4.2
                    </span>
                    What is Network Segmentation?
                  </h3>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    Network segmentation divides a network into smaller logical or physical areas with controlled communication between them. CISA recommends isolating critical systems to contain intrusions and prevent lateral movement.
                  </p>
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-900 text-xs">
                    <strong>Critical Distinction:</strong> A VLAN is NOT a complete security policy! A VLAN separates Layer 2 broadcast domains. If inter-VLAN routing is enabled without an intervening firewall or router ACL, traffic traverses freely.
                  </div>
                </div>

                {/* 4.3 Enterprise Zone Layout */}
                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">
                      4.3–4.5
                    </span>
                    DMZs and Three-Tier Architecture
                  </h3>
                  <div className="bg-stone-900 text-stone-100 rounded-xl p-5 font-mono text-xs space-y-3">
                    <div className="text-orange-400 font-bold uppercase tracking-wider">
                      Segmented Topology & Flow Enforcement:
                    </div>
                    <div className="p-3 bg-stone-800 rounded-lg space-y-2">
                      <div className="text-emerald-400">
                        [Internet / External Users]
                      </div>
                      <div className="pl-4 text-stone-400">
                        │  (HTTPS 443 Only via Perimeter NGFW)
                      </div>
                      <div className="text-cyan-400">
                        ▼
                        <br />
                        [DMZ: Reverse Proxy / Public Web Tier] (10.0.1.0/24)
                      </div>
                      <div className="pl-4 text-stone-400">
                        │  (API REST / gRPC 8443 Only - NO DIRECT DB ACCESS)
                      </div>
                      <div className="text-yellow-400">
                        ▼
                        <br />
                        [Internal Application Tier] (10.0.2.0/24)
                      </div>
                      <div className="pl-4 text-stone-400">
                        │  (Strict Database Protocol 5432 / 3306 Only)
                      </div>
                      <div className="text-red-400">
                        ▼
                        <br />
                        [Database Tier / High-Value PII] (10.0.3.0/24 - Isolated)
                      </div>
                    </div>
                    <div className="text-[11px] text-stone-400 pt-1">
                      Side Zones: <strong>Corporate LAN (10.0.10.0/24)</strong> cannot reach Database; <strong>Guest Wi-Fi (172.16.50.0/24)</strong> isolated to WAN; <strong>Management (10.0.99.0/24)</strong> accessed via Bastion jump host only.
                    </div>
                  </div>
                </div>

                {/* 4.6-4.7 Zero Trust & Microsegmentation */}
                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">
                      4.6–4.7
                    </span>
                    NIST SP 800-207 Zero Trust Architecture
                  </h3>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    Zero trust eliminates implicit trust based on network topology. Simply being connected to the internal LAN or connecting through an enterprise VPN does not grant access to sensitive resources. Access decisions are evaluated on:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                    <div className="p-2.5 rounded-lg border border-stone-200 bg-stone-50">1. User & Workload Identity</div>
                    <div className="p-2.5 rounded-lg border border-stone-200 bg-stone-50">2. Device Health Posture</div>
                    <div className="p-2.5 rounded-lg border border-stone-200 bg-stone-50">3. Real-Time Risk Context</div>
                    <div className="p-2.5 rounded-lg border border-stone-200 bg-stone-50">4. Per-Session Authorization</div>
                  </div>
                </div>

                {/* 4.8 IT vs OT Separation */}
                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">
                      4.8
                    </span>
                    Separating IT and Operational Technology (OT / ICS)
                  </h3>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    Operational Technology (OT) controls physical industrial equipment (power grids, manufacturing lines, water treatment). A compromise in enterprise IT (e.g. employee phishing ransomware) must never reach physical controllers. Implement strict DMZ data diodes, the Purdue Model hierarchy, and NEVER run active vulnerability scans against live OT machinery.
                  </p>
                </div>
              </section>
            )}

            {/* LESSON 5 */}
            {selectedLesson === 5 && (
              <section className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-xs">
                <div className="border-b border-stone-100 pb-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                    Lesson 5 · Telemetry & Investigation
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    Network Security Monitoring and Traffic Visibility
                  </h2>
                  <p className="text-stone-600 text-sm mt-1">
                    Firewall logs, NetFlow/IPFIX flow records, packet captures (PCAP), Zeek structured analytics, and the 6-step alert triage lifecycle.
                  </p>
                </div>

                {/* 5.1 Four Sources of Visibility */}
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">
                      5.1
                    </span>
                    The Four Core Telemetry Sources
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 space-y-1">
                      <div className="font-bold text-stone-900 font-mono">1. Firewall Logs</div>
                      <p className="text-stone-600">
                        Allowed/denied connections, rule IDs, interface direction, NAT translation pairs.
                      </p>
                    </div>
                    <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 space-y-1">
                      <div className="font-bold text-stone-900 font-mono">2. Flow Records (NetFlow / IPFIX)</div>
                      <p className="text-stone-600">
                        Session metadata: source/dest, duration, byte counts, TCP flags. Highly scalable forensic record without storing raw payloads.
                      </p>
                    </div>
                    <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 space-y-1">
                      <div className="font-bold text-stone-900 font-mono">3. IDS/IPS Alerts</div>
                      <p className="text-stone-600">
                        Suricata / Snort rule matches, CVE references, classification metadata, and packet triggering snippets.
                      </p>
                    </div>
                    <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 space-y-1">
                      <div className="font-bold text-stone-900 font-mono">4. Full Packet Capture (PCAP)</div>
                      <p className="text-stone-600">
                        Complete raw byte frames visible to interface. Definitive evidence for protocol carving, handshake analysis, and payload reassembly.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 5.4 Zeek vs Suricata */}
                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">
                      5.4–5.5
                    </span>
                    Zeek NSM vs Suricata Threat Detection
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
                      <div className="font-bold text-stone-900 font-mono text-sm flex items-center gap-1.5">
                        <Activity className="w-4 h-4 text-orange-600" />
                        Zeek Network Security Monitor
                      </div>
                      <p className="text-stone-600">
                        Converts passive traffic into structured, queryable logs:
                      </p>
                      <ul className="list-disc pl-4 space-y-0.5 text-stone-600 font-mono text-[11px]">
                        <li><code>conn.log</code>: Complete IP connection sessions</li>
                        <li><code>dns.log</code>: Query names, records, response codes</li>
                        <li><code>http.log</code>: URIs, user-agents, mime types</li>
                        <li><code>ssl.log</code>: SNI, cipher suites, cert validation</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
                      <div className="font-bold text-stone-900 font-mono text-sm flex items-center gap-1.5">
                        <ShieldAlert className="w-4 h-4 text-red-600" />
                        Suricata Threat Engine
                      </div>
                      <p className="text-stone-600">
                        Rule-based pattern matching supporting IDS and inline IPS modes:
                      </p>
                      <div className="p-2 bg-stone-900 text-stone-200 rounded font-mono text-[11px] overflow-x-auto">
                        alert http $EXTERNAL_NET any -&gt; $HTTP_SERVERS 80 (msg:"ET WEB_SPECIFIC_APPS Path Traversal"; content:"/etc/passwd"; sid:2019401;)
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5.6 Six-Step Alert Triage Lifecycle */}
                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">
                      5.6
                    </span>
                    The 6-Step Alert Triage Lifecycle
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-2 text-xs">
                    {[
                      { step: 1, title: "Receive Alert", desc: "Record timestamp, source IP, target IP, and triggering signature." },
                      { step: 2, title: "Validate Evidence", desc: "Inspect raw packet/payload. Confirm syntax didn't fire on benign text." },
                      { step: 3, title: "Correlate Telemetry", desc: "Cross-check firewall state, DNS queries, and endpoint event logs." },
                      { step: 4, title: "Assess Impact", desc: "Did the connection succeed? Did the server return 200 OK or 404/403?" },
                      { step: 5, title: "Contain Threat", desc: "Isolate host or apply targeted boundary block with rollback plan." },
                      { step: 6, title: "Recover & Learn", desc: "Remediate root cause, restore service, and tune detection rules." }
                    ].map((st) => (
                      <div key={st.step} className="p-3 rounded-xl border border-stone-200 bg-stone-50 space-y-1">
                        <div className="font-mono font-bold text-orange-600">Step {st.step}</div>
                        <div className="font-bold text-stone-900">{st.title}</div>
                        <p className="text-[11px] text-stone-600 leading-tight">{st.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* LESSON 6 */}
            {selectedLesson === 6 && (
              <section className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-xs">
                <div className="border-b border-stone-100 pb-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                    Lesson 6 · Operations & Validation
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    Building, Testing, and Maintaining Network Security Controls
                  </h2>
                  <p className="text-stone-600 text-sm mt-1">
                    Communication matrices, rule lifecycle governance, change management, fail-open vs fail-closed considerations, and defense metrics.
                  </p>
                </div>

                {/* 6.1-6.2 Network Communication Matrix & Lifecycle */}
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">
                      6.1–6.2
                    </span>
                    The Network Communication Matrix & Rule Lifecycle
                  </h3>
                  <p className="text-sm text-stone-700">
                    Never write firewall rules ad-hoc. Start with an authoritative communication matrix that records every approved flow.
                  </p>
                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 text-xs font-mono space-y-1">
                    <div className="font-bold text-stone-900">Rule Governance Lifecycle:</div>
                    <div className="text-stone-600">
                      1. Formal Request & Justification $\to$ 2. Security Risk Review $\to$ 3. Change Advisory Approval $\to$ 4. Staging Validation $\to$ 5. Production Push with Rollback Script $\to$ 6. Continuous Audit & Scheduled Retirement.
                    </div>
                  </div>
                </div>

                {/* 6.4 Failure Modes */}
                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">
                      6.4
                    </span>
                    Control Failure Modes: Fail-Open vs Fail-Closed
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-1.5">
                      <div className="font-bold text-stone-900 font-mono flex items-center gap-1.5">
                        <AlertOctagon className="w-4 h-4 text-red-600" />
                        Fail-Closed (Default for Security)
                      </div>
                      <p className="text-stone-600">
                        If the firewall crashes or power fails, all traffic is dropped. Protects confidential data from uninspected transit at the expense of service availability.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-1.5">
                      <div className="font-bold text-stone-900 font-mono flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        Fail-Open (Default for Life-Safety / Critical Uptime)
                      </div>
                      <p className="text-stone-600">
                        If an inline IPS bypass unit fails, packets bypass inspection unhindered. Used in emergency response, hospital monitoring, and high-frequency trading.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 6.5 Security Metrics */}
                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">
                      6.5
                    </span>
                    Core Network Security Metrics
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden">
                      <thead className="bg-stone-100 text-stone-700 font-mono uppercase text-[11px]">
                        <tr>
                          <th className="p-3">Metric</th>
                          <th className="p-3">Measurement Objective</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100 text-stone-700">
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-mono font-bold">Unrestricted / Overly Broad Rules</td>
                          <td className="p-3">Measures adherence to least privilege and exposure reduction.</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-mono font-bold">Average Rule Age Awaiting Review</td>
                          <td className="p-3">Identifies configuration drift and orphaned access permissions.</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-mono font-bold">IDS Alert Validation Rate</td>
                          <td className="p-3">Measures signal-to-noise ratio and analyst efficiency.</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-mono font-bold">Mean Time to Contain (MTTC)</td>
                          <td className="p-3">Evaluates speed and reliability of network quarantine playbooks.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            )}

            {/* Official References Section */}
            <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-stone-500 uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-stone-600" />
                Authoritative Reading & Reference Documentation
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <a
                  href="https://csrc.nist.gov/pubs/sp/800/41/r1/final"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white rounded-xl border border-stone-200 hover:border-orange-500 transition block group"
                >
                  <div className="font-bold text-stone-900 group-hover:text-orange-600 flex items-center justify-between">
                    NIST SP 800-41 Rev. 1
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-[11px] text-stone-500 mt-1">Guidelines on Firewalls & Policy</div>
                </a>

                <a
                  href="https://csrc.nist.gov/pubs/sp/800/94/final"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white rounded-xl border border-stone-200 hover:border-orange-500 transition block group"
                >
                  <div className="font-bold text-stone-900 group-hover:text-orange-600 flex items-center justify-between">
                    NIST SP 800-94
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-[11px] text-stone-500 mt-1">Guide to IDPS Technologies</div>
                </a>

                <a
                  href="https://csrc.nist.gov/pubs/sp/800/207/final"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white rounded-xl border border-stone-200 hover:border-orange-500 transition block group"
                >
                  <div className="font-bold text-stone-900 group-hover:text-orange-600 flex items-center justify-between">
                    NIST SP 800-207
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-[11px] text-stone-500 mt-1">Zero Trust Architecture</div>
                </a>

                <a
                  href="https://docs.suricata.io"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white rounded-xl border border-stone-200 hover:border-orange-500 transition block group"
                >
                  <div className="font-bold text-stone-900 group-hover:text-orange-600 flex items-center justify-between">
                    Suricata & Zeek Docs
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-[11px] text-stone-500 mt-1">Threat Engine & Traffic Logs</div>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: INTERACTIVE LABS (1–6)                                             */}
        {/* ========================================================================= */}
        {activeTab === "labs" && (
          <div className="space-y-10">
            {/* Lab Intro Card */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xs">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                  Defensive Security Sandboxes · 6 Hands-On Exercises
                </span>
                <h2 className="text-lg sm:text-xl font-black text-[#18181b]">
                  Interactive Network Defense Laboratories
                </h2>
                <p className="text-xs text-stone-600 mt-0.5">
                  Audit rule sets, design multi-tier subnets, investigate real IDS alerts, inspect packets, validate flow enforcement, and simulate incident response.
                </p>
              </div>

              {/* Checklist completion pill */}
              <div className="px-3 py-2 bg-stone-50 rounded-xl border border-stone-200 text-xs font-mono flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Checklist: <strong>{completedChecklistCount}/8</strong> Complete</span>
              </div>
            </div>

            {/* LAB 1: FIREWALL POLICY REVIEW */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-5 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-stone-100 gap-2">
                <div>
                  <div className="text-xs font-mono font-bold text-orange-600 uppercase">
                    Lab 1 · Foundation
                  </div>
                  <h3 className="text-base font-bold text-[#18181b]">
                    Firewall Policy Audit & Least-Privilege Refactoring
                  </h3>
                </div>
                <div className="text-xs text-stone-500 font-mono">
                  Fixed Rules: <strong className="text-emerald-600">{fixedRulesCount}</strong> / 3 Flagged
                </div>
              </div>

              <p className="text-xs text-stone-600">
                Inspect the enterprise firewall policy table below. Identify dangerous catch-all entries, overly permissive port ranges, and unowned rules. Click <strong>Apply Fix</strong> to remediate each critical flaw into a defensible rule.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden">
                  <thead className="bg-stone-100 text-stone-700 font-mono uppercase text-[11px]">
                    <tr>
                      <th className="p-3">Rule ID</th>
                      <th className="p-3">Source</th>
                      <th className="p-3">Destination</th>
                      <th className="p-3">Port / Svc</th>
                      <th className="p-3">Action</th>
                      <th className="p-3">Audit Finding</th>
                      <th className="p-3 text-right">Remediation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 font-mono text-stone-700">
                    {rules.map((r) => (
                      <tr
                        key={r.id}
                        className={`hover:bg-stone-50 ${
                          r.status === "critical"
                            ? "bg-red-50/40"
                            : r.status === "high"
                            ? "bg-amber-50/40"
                            : r.status === "fixed"
                            ? "bg-emerald-50/40"
                            : ""
                        }`}
                      >
                        <td className="p-3 font-bold">{r.id}</td>
                        <td className="p-3">{r.source}</td>
                        <td className="p-3">{r.destination}</td>
                        <td className="p-3">{r.port}</td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                              r.action === "ALLOW"
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {r.action}
                          </span>
                        </td>
                        <td className="p-3 font-sans text-xs">
                          {r.issue}
                        </td>
                        <td className="p-3 text-right font-sans">
                          {r.status === "critical" && (
                            <button
                              onClick={() => fixRule(r.id, "DENY", r.recommended)}
                              className="px-2.5 py-1 bg-red-600 text-white rounded text-xs font-bold hover:bg-red-700 transition cursor-pointer"
                            >
                              Fix Flaw
                            </button>
                          )}
                          {r.status === "high" && (
                            <button
                              onClick={() => fixRule(r.id, "RESTRICT", r.recommended)}
                              className="px-2.5 py-1 bg-amber-600 text-white rounded text-xs font-bold hover:bg-amber-700 transition cursor-pointer"
                            >
                              Enforce Least Priv
                            </button>
                          )}
                          {r.status === "fixed" && (
                            <span className="text-emerald-700 font-bold text-xs flex items-center justify-end gap-1">
                              <Check className="w-3.5 h-3.5" /> Remediated
                            </span>
                          )}
                          {r.status === "optimal" && (
                            <span className="text-stone-400 text-xs">Compliant</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* LAB 2: DESIGN NETWORK SEGMENTATION */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-5 shadow-xs">
              <div className="pb-3 border-b border-stone-100">
                <div className="text-xs font-mono font-bold text-orange-600 uppercase">
                  Lab 2 · Architecture
                </div>
                <h3 className="text-base font-bold text-[#18181b]">
                  Zone Topology & Subnet Segmentation Planner
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Click through the organizational zones to examine subnetting, VLAN tag assignments, ingress/egress boundaries, and containment rules.
                </p>
              </div>

              {/* Zone selector buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                {Object.keys(zonesInfo).map((zKey) => (
                  <button
                    key={zKey}
                    onClick={() => setSelectedZone(zKey)}
                    className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                      selectedZone === zKey
                        ? "border-orange-600 bg-orange-50/70 text-orange-950 shadow-xs"
                        : "border-stone-200 bg-white hover:bg-stone-50 text-stone-700"
                    }`}
                  >
                    <div className="text-[11px] font-mono font-bold text-stone-400">
                      {zonesInfo[zKey].vlan}
                    </div>
                    <div className="text-xs font-bold truncate mt-0.5">
                      {zonesInfo[zKey].name.split("/")[0]}
                    </div>
                  </button>
                ))}
              </div>

              {/* Selected Zone Detail Panel */}
              <div className="bg-stone-50 rounded-xl border border-stone-200 p-5 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-3">
                  <div>
                    <h4 className="text-sm font-bold text-stone-900">
                      {zonesInfo[selectedZone].name}
                    </h4>
                    <span className="text-xs font-mono text-stone-500">
                      Subnet: {zonesInfo[selectedZone].subnet} · Tag: {zonesInfo[selectedZone].vlan}
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-stone-200 text-stone-800 text-[11px] font-mono font-bold">
                    Zone Profile Active
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-lg border border-stone-200">
                    <span className="text-stone-400 block font-mono text-[10px] uppercase">Purpose</span>
                    <span className="font-semibold text-stone-800">{zonesInfo[selectedZone].purpose}</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-stone-200">
                    <span className="text-stone-400 block font-mono text-[10px] uppercase">Permitted Inbound</span>
                    <span className="font-semibold text-emerald-700 font-mono">{zonesInfo[selectedZone].inbound}</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-stone-200">
                    <span className="text-stone-400 block font-mono text-[10px] uppercase">Permitted Outbound</span>
                    <span className="font-semibold text-blue-700 font-mono">{zonesInfo[selectedZone].outbound}</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-stone-200">
                    <span className="text-stone-400 block font-mono text-[10px] uppercase">Enforcing Controls</span>
                    <span className="font-semibold text-purple-700">{zonesInfo[selectedZone].securityControls}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* LAB 3: INVESTIGATE IDS ALERTS */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-5 shadow-xs">
              <div className="pb-3 border-b border-stone-100">
                <div className="text-xs font-mono font-bold text-orange-600 uppercase">
                  Lab 3 · Detection & Analytics
                </div>
                <h3 className="text-base font-bold text-[#18181b]">
                  Suricata & Zeek IDS Alert Triage Console
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Correlate IDS signatures with Zeek flow logs. Classify each event as Confirmed Threat or Benign Maintenance.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Alert list */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-stone-400 font-bold uppercase">
                    Live Alert Queue
                  </span>
                  {alerts.map((alt) => (
                    <div
                      key={alt.id}
                      onClick={() => setSelectedAlert(alt)}
                      className={`p-3 rounded-xl border text-left cursor-pointer transition ${
                        selectedAlert.id === alt.id
                          ? "border-orange-500 bg-orange-50/50"
                          : "border-stone-200 bg-white hover:bg-stone-50"
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="font-bold text-stone-900">{alt.id}</span>
                        <span
                          className={`px-1.5 py-0.5 rounded text-[10px] font-bold uppercase ${
                            alt.status === "malicious"
                              ? "bg-red-100 text-red-800"
                              : alt.status === "benign"
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-stone-100 text-stone-600"
                          }`}
                        >
                          {alt.status}
                        </span>
                      </div>
                      <div className="text-xs font-bold text-stone-800 truncate mt-1">
                        {alt.signature}
                      </div>
                      <div className="text-[10px] font-mono text-stone-500 mt-0.5">
                        {alt.src} -&gt; {alt.dst}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Selected alert inspector */}
                <div className="lg:col-span-2 bg-stone-900 text-stone-100 rounded-xl p-5 font-mono text-xs space-y-3">
                  <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                    <span className="text-orange-400 font-bold">{selectedAlert.id} Detail</span>
                    <span className="text-stone-400">{selectedAlert.engine} · SID: {selectedAlert.sid}</span>
                  </div>

                  <div className="space-y-1">
                    <div className="text-stone-400">Trigger Signature:</div>
                    <div className="text-emerald-400 font-bold">{selectedAlert.signature}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                    <div>Source: <span className="text-stone-300">{selectedAlert.src}</span></div>
                    <div>Destination: <span className="text-stone-300">{selectedAlert.dst}</span></div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-stone-400">Payload Evidence:</div>
                    <div className="p-2 bg-stone-950 rounded border border-stone-800 text-stone-300 break-all">
                      {selectedAlert.payload}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-stone-400">Correlated Zeek Record:</div>
                    <div className="p-2 bg-stone-950 rounded border border-stone-800 text-cyan-300">
                      {selectedAlert.zeekLog}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-stone-800 flex items-center justify-between flex-wrap gap-2">
                    <span className="text-stone-400 text-[11px]">Verdict Classification:</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => classifyAlert(selectedAlert.id, "malicious")}
                        className="px-3 py-1.5 bg-red-600 text-white rounded font-sans text-xs font-bold hover:bg-red-700 cursor-pointer"
                      >
                        Confirm Threat (Malicious)
                      </button>
                      <button
                        onClick={() => classifyAlert(selectedAlert.id, "benign")}
                        className="px-3 py-1.5 bg-emerald-700 text-white rounded font-sans text-xs font-bold hover:bg-emerald-800 cursor-pointer"
                      >
                        Classify Benign (Tune Rule)
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* LAB 4: ANALYZE A PACKET CAPTURE (PCAP) */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-5 shadow-xs">
              <div className="pb-3 border-b border-stone-100">
                <div className="text-xs font-mono font-bold text-orange-600 uppercase">
                  Lab 4 · Traffic Analysis
                </div>
                <h3 className="text-base font-bold text-[#18181b]">
                  Interactive PCAP Inspector & Wireshark Frame Dissector
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Inspect frame headers, TCP handshakes, TLS Server Name Indication (SNI), and identify signs of command-and-control beaconing.
                </p>
              </div>

              {/* Packet List Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono border border-stone-200 rounded-xl overflow-hidden">
                  <thead className="bg-stone-800 text-stone-200 uppercase text-[11px]">
                    <tr>
                      <th className="p-2.5">No.</th>
                      <th className="p-2.5">Time</th>
                      <th className="p-2.5">Source</th>
                      <th className="p-2.5">Destination</th>
                      <th className="p-2.5">Protocol</th>
                      <th className="p-2.5">Length</th>
                      <th className="p-2.5">Info</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-800">
                    {packets.map((pkt, idx) => (
                      <tr
                        key={pkt.no}
                        onClick={() => setActivePacketIndex(idx)}
                        className={`cursor-pointer transition ${
                          activePacketIndex === idx
                            ? "bg-blue-100 font-bold"
                            : "hover:bg-stone-50"
                        }`}
                      >
                        <td className="p-2.5">{pkt.no}</td>
                        <td className="p-2.5">{pkt.time}</td>
                        <td className="p-2.5">{pkt.src}</td>
                        <td className="p-2.5">{pkt.dst}</td>
                        <td className="p-2.5">
                          <span
                            className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                              pkt.proto === "TLSv1.3"
                                ? "bg-purple-100 text-purple-900"
                                : "bg-sky-100 text-sky-900"
                            }`}
                          >
                            {pkt.proto}
                          </span>
                        </td>
                        <td className="p-2.5">{pkt.len}</td>
                        <td className="p-2.5 truncate max-w-xs">{pkt.info}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Packet Dissection Pane */}
              <div className="p-4 rounded-xl bg-stone-900 text-stone-200 font-mono text-xs space-y-2 border border-stone-800">
                <div className="text-orange-400 font-bold text-[11px] uppercase tracking-wider">
                  Frame #{packets[activePacketIndex].no} Dissection:
                </div>
                <div className="space-y-1 text-stone-300">
                  <div>▸ {packets[activePacketIndex].details.layer2}</div>
                  <div>▸ {packets[activePacketIndex].details.layer3}</div>
                  <div>▸ {packets[activePacketIndex].details.layer4}</div>
                  {packets[activePacketIndex].details.layer7 && (
                    <div className="text-emerald-400 font-bold">
                      ▸ {packets[activePacketIndex].details.layer7}
                    </div>
                  )}
                </div>
                <div className="pt-2 border-t border-stone-800 text-[11px] text-cyan-300">
                  <strong>Analyst Note:</strong> {packets[activePacketIndex].details.payloadNote}
                </div>
              </div>
            </div>

            {/* LAB 5: VALIDATE SEGMENTATION ENFORCEMENT */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-5 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-stone-100 gap-2">
                <div>
                  <div className="text-xs font-mono font-bold text-orange-600 uppercase">
                    Lab 5 · Applied Defense
                  </div>
                  <h3 className="text-base font-bold text-[#18181b]">
                    Segmentation Flow Verification & ACL Emulation
                  </h3>
                </div>
                <button
                  onClick={runFlowValidation}
                  disabled={testingRunning}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#18181b] text-white text-xs font-bold hover:bg-stone-800 transition cursor-pointer disabled:opacity-50"
                >
                  <Play className="w-3.5 h-3.5" />
                  {testingRunning ? "Sending Probes..." : "Run Test Suite (6 Flows)"}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {flowTests.map((ft) => (
                  <div
                    key={ft.id}
                    className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 space-y-2 text-xs"
                  >
                    <div className="flex items-center justify-between font-mono text-[11px]">
                      <span className="font-bold text-stone-700">{ft.id}</span>
                      <span
                        className={`px-1.5 py-0.5 rounded font-bold uppercase ${
                          ft.expected === "ALLOW"
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        Expected: {ft.expected}
                      </span>
                    </div>

                    <div className="font-bold text-stone-900">{ft.name}</div>
                    <div className="font-mono text-stone-500 text-[11px]">
                      {ft.src} -&gt; {ft.dst}
                    </div>

                    <div className="p-2 bg-white rounded border border-stone-200 text-[11px] text-stone-600">
                      <strong>Observed:</strong> {ft.result}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* LAB 6: INCIDENT DETECTION & AUTOMATED CONTAINMENT */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-5 shadow-xs">
              <div className="pb-3 border-b border-stone-100">
                <div className="text-xs font-mono font-bold text-orange-600 uppercase">
                  Lab 6 · Incident Response
                </div>
                <h3 className="text-base font-bold text-[#18181b]">
                  Suspicious Workstation Triage & Network Quarantine Sandbox
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  A corporate endpoint (10.0.10.45) is beaconing out to an unrated external IP and scanning port 445 on neighboring subnets.
                </p>
              </div>

              <div className="bg-stone-50 rounded-xl border border-stone-200 p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-stone-500">
                    Incident Playbook Stage: Step {triageStep} of 3
                  </span>
                  {incidentResolved && (
                    <span className="text-xs font-bold text-emerald-700 flex items-center gap-1 font-mono">
                      <CheckCircle2 className="w-4 h-4" /> Threat Quarantined & Rollback Saved
                    </span>
                  )}
                </div>

                {triageStep === 1 && (
                  <div className="space-y-3">
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-900 space-y-1">
                      <strong>High Severity Alert:</strong> Host 10.0.10.45 has opened 42 distinct SMB connections to 10.0.10.0/24 in 15 seconds. Zeek flags active lateral movement pattern.
                    </div>
                    <button
                      onClick={() => setTriageStep(2)}
                      className="px-4 py-2 bg-[#18181b] text-white rounded-xl text-xs font-bold hover:bg-stone-800 transition cursor-pointer"
                    >
                      Step 1 Complete: Validate Correlated Evidence $\to$
                    </button>
                  </div>
                )}

                {triageStep === 2 && (
                  <div className="space-y-3">
                    <p className="text-xs text-stone-700">
                      Evidence confirmed: Process `cmd.exe` spawned unsigned binary `update.exe` which initiated outbound beaconing. Select containment action:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <button
                        onClick={() => {
                          setContainmentAction("quarantine-vlan");
                          setTriageStep(3);
                          setIncidentResolved(true);
                        }}
                        className="p-3 bg-white rounded-xl border border-stone-200 text-left hover:border-orange-500 transition cursor-pointer text-xs space-y-1"
                      >
                        <strong className="block text-stone-900">1. Quarantine VLAN (Recommended)</strong>
                        <span className="text-stone-500">Isolate switch port into VLAN 666; retain forensic telemetry without disrupting other users.</span>
                      </button>
                      <button
                        onClick={() => {
                          setContainmentAction("firewall-block");
                          setTriageStep(3);
                          setIncidentResolved(true);
                        }}
                        className="p-3 bg-white rounded-xl border border-stone-200 text-left hover:border-orange-500 transition cursor-pointer text-xs space-y-1"
                      >
                        <strong className="block text-stone-900">2. Firewall Drop Rule</strong>
                        <span className="text-stone-500">Insert emergency iptables rule blocking 10.0.10.45 at default gateway.</span>
                      </button>
                      <button
                        onClick={() => {
                          setContainmentAction("edr-isolate");
                          setTriageStep(3);
                          setIncidentResolved(true);
                        }}
                        className="p-3 bg-white rounded-xl border border-stone-200 text-left hover:border-orange-500 transition cursor-pointer text-xs space-y-1"
                      >
                        <strong className="block text-stone-900">3. EDR Network Isolation</strong>
                        <span className="text-stone-500">Sever network stack via agent; permit only SOC investigation tunnel.</span>
                      </button>
                    </div>
                  </div>
                )}

                {triageStep === 3 && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-950 space-y-2 font-mono">
                    <div className="font-bold flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-600" />
                      Containment Enacted: {containmentAction.toUpperCase()}
                    </div>
                    <div className="text-stone-700 font-sans">
                      Workstation 10.0.10.45 has been quarantined. Outbound C2 traffic dropped. Lateral movement halted. Rollback ticket created: <code>#CHG-8912-RLBK</code>.
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* LAB SUBMISSION CHECKLIST (8 Items) */}
            <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                <div>
                  <h3 className="text-sm font-bold text-stone-900">
                    Lab Submission Readiness Checklist
                  </h3>
                  <span className="text-xs text-stone-500">
                    Ensure all experimental and design requirements are fulfilled before submitting your portfolio deliverable.
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-mono font-bold">
                  {completedChecklistCount} / 8 Completed
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {[
                  { key: "scope", label: "1. Scope and authorization documented" },
                  { key: "diagram", label: "2. Network diagram and subnet assignments complete" },
                  { key: "firewallRules", label: "3. Firewall rules have clear purposes and owners" },
                  { key: "flowValidation", label: "4. Permitted and denied traffic flows tested" },
                  { key: "idsAlerts", label: "5. IDS alerts investigated using supporting evidence" },
                  { key: "pcapAnalysis", label: "6. Packet capture observations and limitations documented" },
                  { key: "monitoringResponse", label: "7. Monitoring and response procedures specified" },
                  { key: "changesRetest", label: "8. Configuration changes and retest results recorded" }
                ].map((item) => (
                  <label
                    key={item.key}
                    onClick={() => toggleChecklist(item.key)}
                    className="flex items-center gap-3 p-3 bg-white rounded-xl border border-stone-200 hover:border-stone-300 cursor-pointer transition select-none"
                  >
                    <input
                      type="checkbox"
                      checked={checklist[item.key]}
                      readOnly
                      className="rounded text-orange-600 focus:ring-orange-500"
                    />
                    <span className={checklist[item.key] ? "line-through text-stone-400" : "text-stone-800 font-medium"}>
                      {item.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: APPLIED CASE STUDY                                                 */}
        {/* ========================================================================= */}
        {activeTab === "case-study" && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                Applied Scenario & Architectural Autopsy
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                Case Study: FinTrust Global Flat Network Breach & Zero-Trust Overhaul
              </h2>
              <p className="text-stone-600 text-sm mt-1">
                Analyzing how a lack of internal segmentation turned a commodity phishing incident into a full ransomware and data exfiltration crisis.
              </p>
            </div>

            {/* Incident Timeline & Analysis */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-stone-900">
                1. What Went Wrong: The Flat Network Flaw
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed">
                FinTrust Global deployed perimeter firewalls and endpoint antivirus, but maintained a single flat <code>10.0.0.0/16</code> internal network. Workstations, ATM transaction servers, application microservices, and customer database clusters shared the same Layer 2 broadcast domain with unrestricted IP routing.
              </p>

              <div className="p-4 bg-red-50 border border-red-200 rounded-xl space-y-2 text-xs font-mono text-red-950">
                <div className="font-bold uppercase tracking-wider">Breach Kill-Chain:</div>
                <div>08:14 UTC: HR workstation infected via malicious macro payload in job applicant resume.</div>
                <div>08:35 UTC: Attacker runs <code>nmap -sS -p 445 10.0.0.0/16</code>; finds 140 servers listening with zero network friction.</div>
                <div>09:12 UTC: Lateral movement via PsExec and stolen cached domain credentials directly into Core Banking Database.</div>
                <div>09:48 UTC: 400 GB customer records exfiltrated over port 443 to external C2.</div>
              </div>
            </div>

            {/* The Remediation & Zero Trust Redesign */}
            <div className="space-y-4 pt-4 border-t border-stone-100">
              <h3 className="text-base font-bold text-stone-900">
                2. The PrepSpaces Zero-Trust Redesign Blueprint
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                  <div className="font-bold text-stone-900 font-mono text-sm flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-orange-600" />
                    1. Microsegmentation
                  </div>
                  <p className="text-stone-600">
                    Subdivided flat network into isolated VLANs (VLAN 10 DMZ, VLAN 20 App, VLAN 30 DB, VLAN 100 Corp, VLAN 999 Mgmt). Inter-VLAN traffic restricted by strict stateful firewall policies.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                  <div className="font-bold text-stone-900 font-mono text-sm flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-blue-600" />
                    2. Default-Deny East-West
                  </div>
                  <p className="text-stone-600">
                    Workstations blocked from directly reaching port 445 (SMB), 3389 (RDP), or 22 (SSH) on any server. Administration restricted exclusively to an audited Bastion jump host.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                  <div className="font-bold text-stone-900 font-mono text-sm flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-emerald-600" />
                    3. Inline Suricata & Zeek NSM
                  </div>
                  <p className="text-stone-600">
                    Sensors positioned at all inter-VLAN core switches to inspect internal flows. Any SMB scanning immediately triggers automatic endpoint isolation via network access control (802.1X).
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: KNOWLEDGE ASSESSMENT (6 Questions)                                 */}
        {/* ========================================================================= */}
        {activeTab === "assessment" && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-8 shadow-xs">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                Interactive Knowledge Assessment · 6 Questions
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                Module 9 Knowledge Validation
              </h2>
              <p className="text-stone-600 text-sm mt-1">
                Evaluate your mastery of network boundaries, firewall policies, IDS vs IPS, segmentation mechanics, and zero-trust principles.
              </p>
            </div>

            <div className="space-y-6">
              {quizQuestions.map((q, idx) => {
                const selectedOpt = quizAnswers[idx];
                const isCorrect = selectedOpt === q.correct;
                return (
                  <div
                    key={q.id}
                    className="p-5 rounded-xl border border-stone-200 bg-stone-50/50 space-y-4"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm sm:text-base font-bold text-stone-900">
                        <span className="font-mono text-orange-600 mr-2">Question {idx + 1} of 6:</span>
                        {q.question}
                      </h4>
                      {quizSubmitted && (
                        <span
                          className={`px-2 py-0.5 rounded text-xs font-bold font-mono ${
                            isCorrect
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {isCorrect ? "Correct" : "Incorrect"}
                        </span>
                      )}
                    </div>

                    <div className="space-y-2">
                      {q.options.map((opt, oIdx) => {
                        let btnStyle = "bg-white border-stone-200 text-stone-700 hover:bg-stone-100";
                        if (selectedOpt === oIdx) {
                          btnStyle = "bg-orange-50 border-orange-500 text-orange-950 font-semibold";
                        }
                        if (quizSubmitted) {
                          if (oIdx === q.correct) {
                            btnStyle = "bg-emerald-100 border-emerald-500 text-emerald-950 font-bold";
                          } else if (selectedOpt === oIdx && !isCorrect) {
                            btnStyle = "bg-red-100 border-red-500 text-red-950 font-bold";
                          }
                        }

                        return (
                          <button
                            key={oIdx}
                            onClick={() => handleSelectAnswer(idx, oIdx)}
                            className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition cursor-pointer ${btnStyle}`}
                          >
                            <span className="font-mono mr-2 text-stone-400">
                              {String.fromCharCode(65 + oIdx)}.
                            </span>
                            {opt}
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className="p-3 bg-white rounded-lg border border-stone-200 text-xs text-stone-600 leading-relaxed">
                        <strong className="text-stone-800 block mb-0.5">Pedagogical Explanation:</strong>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              {!quizSubmitted ? (
                <button
                  onClick={() => setQuizSubmitted(true)}
                  disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                  className="px-6 py-2.5 rounded-xl bg-orange-600 text-white font-bold text-xs sm:text-sm hover:bg-orange-700 transition cursor-pointer disabled:opacity-50"
                >
                  Submit Assessment ({Object.keys(quizAnswers).length}/6 Answered)
                </button>
              ) : (
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="text-sm font-bold text-stone-900 font-mono">
                    Score: {calculateScore()} / 6 ({Math.round((calculateScore() / 6) * 100)}%)
                  </div>
                  <button
                    onClick={() => {
                      setQuizSubmitted(false);
                      setQuizAnswers({});
                    }}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-stone-300 bg-white text-stone-700 text-xs font-bold hover:bg-stone-50 transition cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    Reset & Retake
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: CAPSTONE PROJECT & EVALUATION RUBRIC                                */}
        {/* ========================================================================= */}
        {activeTab === "capstone" && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-8 shadow-xs">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                Portfolio Deliverable · Enterprise Security Architecture
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                Final Capstone: Design and Validate a Secure Enterprise Network
              </h2>
              <p className="text-stone-600 text-sm mt-1">
                A complete, defensible network security architecture, communication matrix, IDS/IPS monitoring placement, and validated incident response plan.
              </p>
            </div>

            {/* Capstone Parts A-G */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-stone-900">
                Capstone Deliverables (Parts A–G)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-1.5">
                  <strong className="text-stone-900 font-bold block text-sm">Part A — Asset Inventory & Threat Model</strong>
                  <p className="text-stone-600">
                    Group principal assets (web, app, db, admin, guest) by business purpose, data sensitivity, and external exposure. Model realistic adversary lateral movement paths.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-1.5">
                  <strong className="text-stone-900 font-bold block text-sm">Part B — Network Topology & Subnetting</strong>
                  <p className="text-stone-600">
                    Design a 7-zone network architecture (External, DMZ 10.0.1.0/24, App 10.0.2.0/24, DB 10.0.3.0/24, Corp 10.0.10.0/24, Mgmt 10.0.99.0/24, Guest 172.16.50.0/24) with routing controls.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-1.5">
                  <strong className="text-stone-900 font-bold block text-sm">Part C — Firewall Policy & Least Privilege</strong>
                  <p className="text-stone-600">
                    Document an explicit communication matrix with source, destination, port, action, justification, owner, and review date. Eliminate all permissive any-to-any rules.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-1.5">
                  <strong className="text-stone-900 font-bold block text-sm">Part D — IDS/IPS & Monitoring Placement</strong>
                  <p className="text-stone-600">
                    Position Suricata and Zeek sensors at perimeter and inter-VLAN switches. Specify telemetry retention, encrypted traffic handling, and tuning protocols.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-1.5">
                  <strong className="text-stone-900 font-bold block text-sm">Part E — Segmentation Validation Matrix</strong>
                  <p className="text-stone-600">
                    Execute at least six test cases covering both permitted business flows and prohibited lateral movement paths with expected vs observed log verification.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-1.5">
                  <strong className="text-stone-900 font-bold block text-sm">Part F & G — Incident Response & Executive Report</strong>
                  <p className="text-stone-600">
                    Walk through simulated workstation containment (VLAN quarantine), rollback procedures, residual risk documentation, and executive presentation summary.
                  </p>
                </div>
              </div>
            </div>

            {/* Evaluation Rubric (100%) */}
            <div className="space-y-4 pt-4 border-t border-stone-100">
              <h3 className="text-base font-bold text-stone-900">
                Capstone Evaluation Rubric (100% Total · 70% Passing)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden">
                  <thead className="bg-stone-100 text-stone-700 font-mono uppercase text-[11px]">
                    <tr>
                      <th className="p-3">Assessment Area</th>
                      <th className="p-3">Weight</th>
                      <th className="p-3">Passing Standard (Competent)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-700">
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">Asset Inventory & Threat Model</td>
                      <td className="p-3 font-mono font-bold text-orange-600">10%</td>
                      <td className="p-3">All critical assets categorized by sensitivity; lateral movement attack paths mapped.</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">Network Architecture & Segmentation</td>
                      <td className="p-3 font-mono font-bold text-orange-600">20%</td>
                      <td className="p-3">Clear DMZ, 3-tier application boundaries, guest isolation, and zero implicit trust.</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">Firewall Policy & Least Privilege</td>
                      <td className="p-3 font-mono font-bold text-orange-600">20%</td>
                      <td className="p-3">Strict default-deny rules; explicit justifications, owners, and logging defined.</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">IDS/IPS & Monitoring Design</td>
                      <td className="p-3 font-mono font-bold text-orange-600">15%</td>
                      <td className="p-3">Strategic sensor placement across perimeter and internal VLANs; TLS limitations addressed.</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">Testing & Evidence Quality</td>
                      <td className="p-3 font-mono font-bold text-orange-600">20%</td>
                      <td className="p-3">At least 6 empirical flow tests executed with matched firewall/IDS log evidence.</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">Incident Response & Reporting</td>
                      <td className="p-3 font-mono font-bold text-orange-600">15%</td>
                      <td className="p-3">Actionable containment playbook, rollback mechanism, and executive risk summary.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* 5. FOOTER NAVIGATION (PREVIOUS & NEXT MODULE) */}
        <div className="mt-10 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => navigate("/learning/cybersecurity/vulnerability-assessment")}
            className="flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-xs font-bold text-stone-700 hover:border-orange-400 transition cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous: Module 8 (Vulnerability Assessment & CVSS)</span>
          </button>

          <div className="text-right">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-400">
              Up Next · Module 10
            </span>
            <h4 className="text-sm sm:text-base font-extrabold text-[#18181b]">
              Web Security Fundamentals, OWASP Top 10 & Application Testing
            </h4>
          </div>

          <button
            onClick={() => navigate("/learning/cybersecurity/web-security")}
            className="flex items-center gap-2 rounded-xl bg-[#18181b] px-4 py-2.5 text-xs font-bold text-white hover:bg-stone-800 transition cursor-pointer"
          >
            <span>Proceed to Module 10</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </main>
    </div>
  );
}
