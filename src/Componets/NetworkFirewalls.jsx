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
  Crosshair,
  Ban,
  Unlock,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* COMPUTER NETWORKS & INTERNET ENGINEERING: MODULE 15                        */
/* NETWORK SERVICES, FIREWALLS AND ACCESS CONTROL                             */
/* -------------------------------------------------------------------------- */

export default function NetworkFirewalls() {
  const navigate = useNavigate();

  // Active top-level tabs
  const [activeTab, setActiveTab] = useState("theory"); // theory | stateful-sim | rule-order-sim | nat-sim | vpn-bastion-sim | ids-ips-sim | cli | quiz | lab-report
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // Theory sub-section tracking
  const [activeSection, setActiveSection] = useSyncedTopic("15.1");

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 1: STATEFUL VS. STATELESS PACKET FILTERING ENGINE                */
  /* -------------------------------------------------------------------------- */
  const [filterMode, setFilterMode] = useState("stateful"); // stateful | stateless
  const [packetAction, setPacketAction] = useState("outbound-syn"); // outbound-syn | inbound-synack | unsolicited-inbound

  const filterSimulation = useMemo(() => {
    if (filterMode === "stateful") {
      if (packetAction === "outbound-syn") {
        return {
          verdict: "PERMITTED & TRACKED",
          badgeColor: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40",
          stateTable: "[NEW -> SYN_SENT: 10.10.10.10:52410 <-> 10.10.40.10:443 | Timeout: 60s]",
          detail:
            "Client initiated TCP handshake (SYN). Stateful engine verified matching egress rule 'ct state new accept' on port 443. Created entry in conntrack state table.",
        };
      }
      if (packetAction === "inbound-synack") {
        return {
          verdict: "PERMITTED (ct state ESTABLISHED)",
          badgeColor: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40",
          stateTable: "[ESTABLISHED: 10.10.10.10:52410 <-> 10.10.40.10:443 | Timeout: 300s]",
          detail:
            "Server returned SYN-ACK. Stateful engine matched dynamic session in conntrack table without requiring any broad incoming firewall holes. Connection upgraded to ESTABLISHED.",
        };
      }
      // unsolicited-inbound
      return {
        verdict: "BLOCKED & DROPPED (INVALID ct state)",
        badgeColor: "bg-rose-500/20 text-rose-400 border border-rose-500/40",
        stateTable: "[EMPTY: No matching active session in conntrack table]",
        detail:
          "External host sent unsolicited inbound SYN packet to client port 52410. Stateful engine detected 'ct state new' without preceding outbound request. Dropped by default-deny policy.",
      };
    } else {
      // Stateless mode
      if (packetAction === "outbound-syn") {
        return {
          verdict: "PERMITTED BY 5-TUPLE ACL",
          badgeColor: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40",
          stateTable: "[NONE: Stateless filtering does not maintain connection tables]",
          detail:
            "Stateless ACL checked packet 5-tuple: [Src 10.10.10.10, Dst 10.10.40.10, Proto TCP, Dport 443]. Permitted by static rule. No state recorded.",
        };
      }
      if (packetAction === "inbound-synack") {
        return {
          verdict: "BLOCKED (RETURN TRAFFIC FAILED)",
          badgeColor: "bg-rose-500/20 text-rose-400 border border-rose-500/40",
          stateTable: "[NONE: Return packet has Dport 52410 with no matching ACL rule]",
          detail:
            "Server SYN-ACK arrived at port 52410. Because stateless ACL has no session memory, it treats this as an unapproved inbound packet and DROPS it unless an insecure broad reverse rule is manually created!",
        };
      }
      // unsolicited-inbound
      return {
        verdict: "BLOCKED BY DEFAULT DENY",
        badgeColor: "bg-rose-500/20 text-rose-400 border border-rose-500/40",
        stateTable: "[NONE]",
        detail:
          "Unsolicited external packet blocked by static stateless deny rule.",
      };
    }
  }, [filterMode, packetAction]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 2: FIREWALL RULE ORDERING & SHADOWING CONFLICT TESTER            */
  /* -------------------------------------------------------------------------- */
  const [ruleOrderPreset, setRuleOrderPreset] = useState("shadowed"); // shadowed | hardened

  const ruleOrderAnalysis = useMemo(() => {
    if (ruleOrderPreset === "shadowed") {
      return {
        status: "VULNERABLE (CRITICAL SHADOWED RULE FLAW)",
        statusColor: "text-rose-400 bg-rose-950/40 border-rose-800",
        evaluationTrace: [
          { order: 1, rule: "PERMIT src 10.10.10.0/24 dst 10.10.40.0/24 proto ANY", match: "MATCHED & PERMITTED!", hit: true },
          { order: 2, rule: "DENY src 10.10.10.0/24 dst 10.10.40.10 proto TCP dport 22 (SSH)", match: "NEVER REACHED (Shadowed by Rule 1)", hit: false },
          { order: 3, rule: "DENY ALL (Default Deny)", match: "Unreached", hit: false },
        ],
        testPacketVerdict: "EXPLOITED: Staff workstation was able to SSH to Production Server (port 22) because Rule 1 was overly broad and placed above the restrictive Rule 2!",
      };
    } else {
      return {
        status: "SECURE (PROPER LEAST-PRIVILEGE ORDERING)",
        statusColor: "text-emerald-400 bg-emerald-950/40 border-emerald-800",
        evaluationTrace: [
          { order: 1, rule: "DENY src 10.10.10.0/24 dst 10.10.40.10 proto TCP dport 22 (SSH)", match: "MATCHED & BLOCKED!", hit: true },
          { order: 2, rule: "PERMIT src 10.10.10.0/24 dst 10.10.40.10 proto TCP dport 443 (HTTPS)", match: "Unreached for SSH", hit: false },
          { order: 3, rule: "DENY ALL (Default Deny)", match: "Unreached", hit: false },
        ],
        testPacketVerdict: "PROTECTED: Staff workstation SSH packet matched specific Rule 1 DENY immediately. Dropped with zero lateral movement into administration ports.",
      };
    }
  }, [ruleOrderPreset]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 3: NAT, PAT & PORT FORWARDING TRANSLATION SANDBOX                */
  /* -------------------------------------------------------------------------- */
  const [natScenario, setNatScenario] = useState("pat-outbound"); // pat-outbound | dnat-inbound | dnat-blocked

  const natDetails = useMemo(() => {
    if (natScenario === "pat-outbound") {
      return {
        title: "Outbound Source NAT / PAT (Overload)",
        originalPacket: "Source: 10.10.10.25:51500 -> Destination: 203.0.113.80:443 (HTTPS)",
        gatewayAction: "Gateway (198.51.100.10) translates private source socket to public ephemeral port: 198.51.100.10:62001",
        translatedPacket: "Over-the-wire: 198.51.100.10:62001 -> 203.0.113.80:443",
        returnFlow: "Internet server replies to 198.51.100.10:62001. Gateway inspects translation table and de-NATs packet back to 10.10.10.25:51500.",
        securityVerdict: "Valid Outbound Traffic. Internal RFC 1918 IP addresses completely shielded from public internet.",
      };
    } else if (natScenario === "dnat-inbound") {
      return {
        title: "Inbound Destination NAT / Port Forwarding",
        originalPacket: "Public Client (203.0.113.80:48201) -> Gateway Public IP: 198.51.100.10:443",
        gatewayAction: "DNAT Rule: Forward 198.51.100.10:443 to DMZ Web Server private IP: 10.10.40.10:443",
        translatedPacket: "Internal DMZ delivery: 203.0.113.80:48201 -> 10.10.40.10:443",
        returnFlow: "DMZ Server replies to gateway; gateway rewrites source IP back to 198.51.100.10:443 before transmitting to client.",
        securityVerdict: "Permitted Inbound Service. Exposes ONLY port 443; internal server SSH, database, and OS ports remain unreachable.",
      };
    } else {
      // dnat-blocked
      return {
        title: "Unauthorized Inbound Port Probe (No DNAT Mapping)",
        originalPacket: "External Attacker (203.0.113.80:61000) -> Gateway Public IP: 198.51.100.10:22 (SSH)",
        gatewayAction: "Gateway evaluates DNAT table: No port-forwarding rule exists for port 22.",
        translatedPacket: "PACKET DROPPED AT PERIMETER GATEWAY",
        returnFlow: "None. Firewall default-deny drops packet silently (or returns TCP RST depending on stealth policy).",
        securityVerdict: "BLOCKED. Perimeter gateway shields internal network from direct unsolicited external probing.",
      };
    }
  }, [natScenario]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 4: VPN REMOTE ACCESS & BASTION JUMP HOST SIMULATOR               */
  /* -------------------------------------------------------------------------- */
  const [vpnConnected, setVpnConnected] = useState(true);
  const [useBastionJump, setUseBastionJump] = useState(true);
  const [targetAction, setTargetAction] = useState("db-access"); // db-access | web-access | switch-ssh

  const vpnEvaluation = useMemo(() => {
    if (!vpnConnected) {
      return {
        verdict: "CONNECTION REJECTED (NO ROUTE / FIREWALL DROP)",
        color: "text-rose-400 bg-rose-950/40 border-rose-800",
        routeTrace: "Home Laptop (192.168.1.50) attempted to reach internal RFC 1918 address (10.10.40.50). Dropped at public ISP boundary.",
        reason: "Remote worker is not connected to corporate VPN tunnel. Internal subnets are non-routable on the public internet.",
      };
    }

    // VPN is connected: Assigned tunnel IP 10.10.50.15 (VPN Quarantine Subnet)
    if (targetAction === "db-access") {
      if (useBastionJump) {
        return {
          verdict: "PERMITTED VIA BASTION JUMP HOST (AUDITED)",
          color: "text-emerald-400 bg-emerald-950/40 border-emerald-800",
          routeTrace: "Laptop (10.10.50.15) -> Bastion (10.10.99.10:22 with MFA) -> Production DB (10.10.40.50:5432)",
          reason: "Zero-Trust Architecture: VPN clients cannot directly access databases. Access through audited Bastion jump server with MFA is strictly enforced.",
        };
      } else {
        return {
          verdict: "BLOCKED BY LEAST-PRIVILEGE MICROSEGMENTATION",
          color: "text-rose-400 bg-rose-950/40 border-rose-800",
          routeTrace: "Laptop (10.10.50.15) -> Attempted direct connection to DB (10.10.40.50:5432)",
          reason: "Firewall Rule: Direct VPN access to database tier is DENIED by default to prevent compromised worker laptops from executing SQL ransomware.",
        };
      }
    } else if (targetAction === "web-access") {
      return {
        verdict: "PERMITTED (APPROVED INTERNAL WEB PORTAL)",
        color: "text-emerald-400 bg-emerald-950/40 border-emerald-800",
        routeTrace: "Laptop (10.10.50.15) -> Internal Corporate Wiki (10.10.40.10:443)",
        reason: "Firewall rule permits authenticated VPN clients to access internal HTTPS web services.",
      };
    } else {
      // switch-ssh
      if (useBastionJump) {
        return {
          verdict: "PERMITTED (ADMIN JUMP SESSION LOGGED)",
          color: "text-emerald-400 bg-emerald-950/40 border-emerald-800",
          routeTrace: "Laptop (10.10.50.15) -> Bastion (10.10.99.10) -> Switch Console (10.10.99.1:22)",
          reason: "Infrastructure administration permitted only from the dedicated Bastion subnet with terminal keystroke auditing.",
        };
      } else {
        return {
          verdict: "BLOCKED (DIRECT MANAGEMENT ACCESS DENIED)",
          color: "text-rose-400 bg-rose-950/40 border-rose-800",
          routeTrace: "Laptop (10.10.50.15) -> Switch Management IP (10.10.99.1:22)",
          reason: "Direct SSH to infrastructure management interfaces from VPN endpoints is strictly blocked.",
        };
      }
    }
  }, [vpnConnected, useBastionJump, targetAction]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 5: IDS / IPS SIGNATURE & ANOMALY THREAT DETECTION                */
  /* -------------------------------------------------------------------------- */
  const [sensorMode, setSensorMode] = useState("ips"); // ids | ips
  const [threatScenario, setThreatScenario] = useState("cve-exploit"); // clean | cve-exploit | syn-flood | c2-beacon

  const threatEvaluation = useMemo(() => {
    if (threatScenario === "clean") {
      return {
        threatName: "Legitimate HTTPS Web Traffic",
        detectedBy: "Protocol-Aware Inspection (Suricata / Zeek)",
        ruleSignature: "SURICATA TLS 1.3 Valid ClientHello & ServerHello",
        actionOutcome: sensorMode === "ips" ? "INSPECTED & FORWARDED" : "OBSERVED (No Alert)",
        badgeColor: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40",
        detail: "Standard TLS 1.3 handshake negotiated. SNI matches approved corporate domain. Zero malicious indicators found.",
      };
    } else if (threatScenario === "cve-exploit") {
      return {
        threatName: "Log4Shell (CVE-2021-44228) JNDI Injection Payload",
        detectedBy: "Signature-Based DPI Engine",
        ruleSignature: 'alert tcp any any -> any 8080 (content:"${jndi:ldap://"; sid:2034647;)',
        actionOutcome: sensorMode === "ips" ? "BLOCKED & TCP RESET TRANSMITTED" : "ALERT GENERATED (Packet Allowed)",
        badgeColor: sensorMode === "ips" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40" : "bg-rose-500/20 text-rose-400 border border-rose-500/40",
        detail: sensorMode === "ips"
          ? "ACTIVE MITIGATION: Inline IPS matched JNDI signature in HTTP header. Dropped malicious packet and transmitted TCP RST to protect vulnerable Java application!"
          : "PASSIVE ALERT ONLY: IDS sensor recorded alert in eve.json. Because IDS runs out-of-band on a mirror port, the exploit payload reached the server!",
      };
    } else if (threatScenario === "syn-flood") {
      return {
        threatName: "TCP SYN Flood DoS Attack (50,000 pkts/sec)",
        detectedBy: "Behavioral & Statistical Anomaly Detector",
        ruleSignature: "THRESHOLD: SYN_RECV state > 10,000 without ACK completion",
        actionOutcome: sensorMode === "ips" ? "SYN COOKIES ACTIVATED & ATTACK MITIGATED" : "ALERT: Half-Open Queue Exhaustion",
        badgeColor: "bg-amber-500/20 text-amber-400 border border-amber-500/40",
        detail: "Firewall detected asymmetric SYN flood targeting port 443. Kernel SYN Cookies activated to prevent connection table exhaustion.",
      };
    } else {
      // c2-beacon
      return {
        threatName: "Command & Control (C2) Periodic Heartbeat Beaconing",
        detectedBy: "Network Security Monitoring / Zeek conn.log Analysis",
        ruleSignature: "STATISTICAL: 60-second periodic beacon interval with uniform 128-byte payload",
        actionOutcome: sensorMode === "ips" ? "IP BLACKLISTED AT PERIMETER" : "SUSPICIOUS C2 ALERT LOGGED",
        badgeColor: sensorMode === "ips" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40" : "bg-rose-500/20 text-rose-400 border border-rose-500/40",
        detail: "Compromised internal endpoint transmitting regular beacon telemetry to foreign bulletproof hosting IP. Flagged by JA3/JA4 fingerprint analysis.",
      };
    }
  }, [sensorMode, threatScenario]);

  /* -------------------------------------------------------------------------- */
  /* LAB AUDIT CHECKLIST (0/8)                                                  */
  /* -------------------------------------------------------------------------- */
  const [firewallChecklist, setFirewallChecklist] = useState({
    defaultDeny: false,
    statefulTracking: false,
    ruleOrdering: false,
    egressLockdown: false,
    natDnatConfig: false,
    vpnQuarantine: false,
    bastionHardening: false,
    idsIpsLogging: false,
  });

  const completedChecklistCount = Object.values(firewallChecklist).filter(Boolean).length;

  const toggleFirewallChecklist = (key) => {
    setFirewallChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  /* -------------------------------------------------------------------------- */
  /* 10-QUESTION COMPREHENSIVE ASSESSMENT                                       */
  /* -------------------------------------------------------------------------- */
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const quizQuestions = [
    {
      id: "q1",
      question: "What is the primary operational difference between stateful and stateless packet filtering?",
      options: [
        "Stateful filtering encrypts all IP headers, while stateless filtering leaves them unencrypted.",
        "Stateful filtering maintains a connection state table to automatically permit valid return traffic, while stateless filtering evaluates each packet individually.",
        "Stateless filtering guarantees complete immunity against DDoS attacks.",
        "Stateful filtering only works on wireless local area networks.",
      ],
      correct: 1,
      rationale:
        "A stateful firewall monitors the complete lifecycle of network flows, recording state (such as TCP handshakes) in a connection table (conntrack). This allows it to recognize and permit legitimate return traffic automatically without requiring broad, static reverse opening rules. Stateless firewalls inspect individual packets in isolation.",
    },
    {
      id: "q2",
      question: "In Linux nftables, what does the rule 'ct state established,related accept' accomplish?",
      options: [
        "It opens an unrestricted public web server on port 443.",
        "It permits packets that belong to or are associated with previously allowed, tracked outgoing connections.",
        "It disables all connection tracking to maximize CPU throughput.",
        "It converts TCP packets into UDP datagrams.",
      ],
      correct: 1,
      rationale:
        "The expression 'ct state established,related accept' tells the Linux kernel to inspect the connection tracking table and immediately accept packets that are part of an already established session (such as server HTTP responses) or related auxiliary channels (such as FTP data or ICMP error messages).",
    },
    {
      id: "q3",
      question: "Why is firewall rule ordering critical in first-match-wins security engines?",
      options: [
        "If a broad permit rule is placed above a specific deny rule, the deny rule becomes 'shadowed' and is never executed.",
        "Rules placed at the bottom of the table consume 10x more power.",
        "Rule order dictates the physical speed of the Ethernet link.",
        "Firewalls only evaluate rules on the first day of every month.",
      ],
      correct: 0,
      rationale:
        "Most firewalls evaluate policies sequentially from top to bottom. Once a packet matches a rule's criteria, the action is taken immediately and evaluation ceases. If a general allow rule (e.g. Allow Staff to All Servers) precedes a specific restriction (e.g. Deny Staff to Server Port 22), the restriction is 'shadowed' and completely bypassed.",
    },
    {
      id: "q4",
      question: "Why is Network Address Translation (NAT) NOT a substitute for a stateful firewall?",
      options: [
        "NAT only works with IPv6 addresses.",
        "NAT merely translates IP and port header fields; without an explicit firewall policy, unauthorized traffic could still be routed or forwarded.",
        "NAT automatically disables all encryption.",
        "NAT cannot translate TCP packets.",
      ],
      correct: 1,
      rationale:
        "NAT is an address manipulation mechanism designed to preserve IPv4 address space or hide internal topology. While a private IP cannot be routed on the public internet, NAT alone does not evaluate traffic security, state validity, or application safety. A dedicated firewall policy is required to permit or deny flows.",
    },
    {
      id: "q5",
      question: "Why is outbound egress filtering a critical component of enterprise defense-in-depth?",
      options: [
        "It prevents external hackers from sending email to staff.",
        "It prevents compromised internal endpoints from communicating with Command & Control (C2) servers or exfiltrating data over unauthorized ports.",
        "It doubles the download speed of video conferences.",
        "It replaces the need for local endpoint antivirus software.",
      ],
      correct: 1,
      rationale:
        "Unrestricted outbound egress allows malware on infected workstations to establish reverse shells, beacon to C2 servers, download ransomware modules, and exfiltrate corporate databases. Strict egress filtering limits outbound traffic to explicitly approved protocols, ports, and internal DNS/proxy resolvers.",
    },
    {
      id: "q6",
      question: "What is the primary functional difference between an Intrusion Detection System (IDS) and an Intrusion Prevention System (IPS)?",
      options: [
        "An IDS runs in the cloud, while an IPS only runs on smart home routers.",
        "An IDS passively monitors traffic out-of-band and generates alerts, whereas an IPS sits inline and can actively drop malicious packets.",
        "An IDS uses hardware, while an IPS is always pure software.",
        "An IPS cannot inspect TCP traffic.",
      ],
      correct: 1,
      rationale:
        "An IDS receives a mirror copy of traffic from a switch TAP or SPAN port; it can alert administrators to threats but cannot block packets from reaching their target. An IPS is deployed directly inline in the traffic path, allowing it to drop packets, terminate TCP connections with RST flags, and actively block attacks in real-time.",
    },
    {
      id: "q7",
      question: "Why should remote-access VPN users NOT be placed directly onto a flat, unrestricted internal corporate subnet?",
      options: [
        "VPN encryption slows down if more than 5 users connect.",
        "Remote laptops are unmanaged or exposed to home networks; granting them flat corporate access allows malware to pivot laterally into databases and domain controllers.",
        "IPsec cannot route traffic across subnets.",
        "VPN clients are legally required to have their own private internet connection.",
      ],
      correct: 1,
      rationale:
        "Under zero-trust principles, remote worker devices (especially BYOD or home-office laptops) must be treated as untrusted endpoints. Placing them into an isolated VPN quarantine subnet with strict microsegmentation ensures they can only reach explicitly permitted applications, preventing lateral worm infection.",
    },
    {
      id: "q8",
      question: "What is the primary security role of a Bastion Host (Jump Server) in an enterprise architecture?",
      options: [
        "To store employee passwords in plaintext for fast access.",
        "To provide a single, hardened, heavily audited gateway for administrative access (SSH/RDP) to internal servers, preventing direct public exposure.",
        "To replace the perimeter firewall.",
        "To boost the physical Wi-Fi signal in the server room.",
      ],
      correct: 1,
      rationale:
        "A bastion jump host is a fortified server with minimal attack surface, multi-factor authentication, and keystroke logging. Production servers and network switches are configured to accept administrative connections (SSH/RDP) ONLY from the bastion IP, eliminating direct exposure to the public internet.",
    },
    {
      id: "q9",
      question: "What failure symptom typically occurs when a firewall's state table (conntrack table) is completely exhausted?",
      options: [
        "The firewall automatically switches to 10 Gbps mode.",
        "New legitimate connection attempts (ct state new) are dropped or rejected because the firewall cannot allocate memory for new state tracking.",
        "All existing TCP connections immediately become unencrypted.",
        "The physical Ethernet ports turn off permanently.",
      ],
      correct: 1,
      rationale:
        "Every stateful connection consumes an entry in memory. Under severe SYN floods or extreme traffic spikes, the conntrack table fills up. When exhausted, the kernel cannot track new connections, causing all subsequent 'ct state new' packets to be dropped, resulting in a denial-of-service condition.",
    },
    {
      id: "q10",
      question: "A network engineer tests a firewall rule by pinging a server. The ping fails. Why does this test alone NOT prove that web traffic is blocked?",
      options: [
        "Ping uses ICMP (type 8/0), whereas web traffic uses TCP port 80/443; a firewall rule may block ICMP while permitting TCP.",
        "Ping packets are always encrypted with TLS 1.3.",
        "Ethernet switches cannot forward ping packets across VLANs.",
        "Ping only works if the client has a public IP address.",
      ],
      correct: 0,
      rationale:
        "ICMP Echo (ping) operates at Layer 3 using ICMP types 8 and 0. Web applications operate over Layer 4 TCP (ports 80 and 443). Many firewalls and host operating systems explicitly block ICMP by default while permitting web traffic. Verification requires testing the actual application protocol using tools like curl or nc.",
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
  /* COPYABLE SRE DEFENSIVE FIREWALL & ACCESS CONTROL AUDIT REPORT             */
  /* -------------------------------------------------------------------------- */
  const firewallAuditReportTemplate = `# ENTERPRISE FIREWALL & DEFENSIVE ACCESS CONTROL AUDIT REPORT
**Document Reference:** SRE-SEC-FW-AUDIT-2026-Q4  
**Date:** ${new Date().toISOString().split("T")[0]}  
**Target Infrastructure:** Edge Perimeter Firewall, DMZ & Internal Segmentation Gateways (Palo Alto / Fortinet / Linux nftables)  
**Lead Security Engineer:** Defensive Infrastructure & Cyber Operations Team  
**Scope:** Stateful Filtering, ACL Shadowing Analysis, Outbound Egress Policy, VPN & Bastion Architecture  

---

## 1. EXECUTIVE SUMMARY
A comprehensive technical audit of the enterprise firewall rulebase and perimeter access controls was conducted across the edge gateway and internal distribution firewalls.

- **Security Posture:** SUBSTANTIALLY HARDENED (Passing 8 of 8 Baseline Verification Checks)
- **Default Action:** Explicit DEFAULT DROP enforced on all ingress and forwarded chains.
- **Critical Remediation:** Remediated 1 shadowed rule where an overly broad allow rule allowed Staff endpoints to reach Server SSH ports before the restriction rule was reached.

---

## 2. POLICY MATRIX & LEAST-PRIVILEGE ACCESS TIERS
| Source Zone | Destination Zone | Protocol / Port | State Match | Action | Justification |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Staff (10.10.10.0/24)** | Servers (10.10.40.10) | TCP / 443 | \`ct state new\` | **ALLOW** | Approved Internal Portal |
| **Staff (10.10.10.0/24)** | Servers (10.10.40.0/24) | TCP / 22, 3389 | Any | **DENY** | Prohibit direct admin access |
| **Guest (10.10.30.0/24)** | RFC 1918 Private Nets | Any | Any | **DENY** | Strict Guest Isolation |
| **Guest (10.10.30.0/24)** | Internet Gateway | TCP / 80, 443, 53 | \`ct state new\` | **ALLOW** | Public Web Browsing Only |
| **VPN (10.10.50.0/24)** | Bastion (10.10.99.10) | TCP / 22 | \`ct state new\` | **ALLOW (MFA)** | Privileged Access Jump Host |
| **Bastion (10.10.99.10)**| Core Infrastructure | TCP / 22, 443 | \`ct state new\` | **ALLOW (Logged)** | Audited Administration |
| **All Zones** | Any Destination | Any | \`ct state established,related\` | **ALLOW** | Stateful Return Traffic |
| **Unmatched Ingress** | Protected Networks | Any | Any | **DEFAULT DROP** | Zero-Trust Enforcement |

---

## 3. STATEFUL FILTERING & CONNECTION TRACKING BENCHMARK
- **Connection Tracking Engine:** Linux \`nf_conntrack\` (Max Entries: 262,144)
- **Current Active Table Utilization:** 4,812 / 262,144 entries (1.8% utilization).
- **SYN Flood Protection:** Enabled via \`net.ipv4.tcp_syncookies = 1\`.
- **Invalid State Enforcement:** \`ct state invalid drop\` discarded 1,489 malformed or out-of-window packets during the 24-hour baseline.

---

## 4. OUTBOUND EGRESS LOCKDOWN VERIFICATION
1. **DNS Egress:** Direct outbound UDP/TCP 53 to the public internet is **BLOCKED**. All internal endpoints are forced to query the hardened internal Anycast DNS resolvers (\`10.10.99.53\`).
2. **NTP Egress:** Synchronized solely with corporate GPS-disciplined NTP appliances.
3. **Malware C2 Prevention:** Blocked 3 outbound attempts to non-standard TCP ports (4444, 1337) originating from isolated sandbox test nodes.

---

## 5. BASTION & REMOTE-ACCESS DEFENSES
- **VPN Protocol:** IPsec IKEv2 with AES-256-GCM + WireGuard backup tunnel.
- **MFA Enforcement:** FIDO2 WebAuthn Hardware Keys enforced for all bastion logins.
- **Audit Trails:** Bastion sessions recorded using \`tlog\` / \`auditd\` and streamed to tamper-proof SIEM log repository.

---

## 6. SIGN-OFF & VERIFICATION
- [x] Verified permitted traffic succeeds (Staff to Web HTTPS).
- [x] Verified prohibited traffic drops with deny log (Staff to Server SSH).
- [x] Verified return traffic succeeds via connection tracking without opening broad reverse ports.
- **Approved by:** Lead Defensive Infrastructure Architect`;

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 font-sans pb-16">
      {/* Top Breadcrumb & Navigation Bar */}
      <div className="border-b border-[#e7e3da] bg-[#fbfaf7]/80 backdrop-blur sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/learning/networks/switching")}
              className="p-1.5 rounded-lg border border-[#e7e3da] bg-white hover:bg-stone-50 text-stone-600 hover:text-stone-900 transition cursor-pointer"
              title="Return to Module 14: Switching & VLANs"
            >
              <ArrowLeft size={16} />
            </button>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-orange-600 font-mono">
                Computer Networks &bull; Module 15
              </div>
              <h1 className="text-sm font-bold text-stone-900 leading-tight">
                Network Services, Firewalls &amp; Access Control
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-stone-600 bg-stone-100 px-2.5 py-1 rounded-md border border-stone-200">
              <Shield size={13} className="text-orange-600" />
              <span>Stateful Filtering &bull; NAT &bull; VPNs &bull; IDS/IPS</span>
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
                <ShieldCheck size={13} />
                <span>Defensive Network Security &bull; Packet Inspection &bull; Zero Trust &bull; nftables</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
                Network Services, Firewalls &amp; Access Control
              </h2>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                Master defensive network engineering: stateful connection tracking vs. stateless filtering, access control list (ACL) rule ordering, Network Address Translation (NAT/PAT), remote-access VPN architectures, Intrusion Detection and Prevention Systems (IDS/IPS), bastion jump hosts, and least-privilege zero-trust firewall policy design.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 self-start md:self-center shrink-0">
              <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200 text-center">
                <div className="text-xs font-mono text-stone-500">Inspection</div>
                <div className="text-lg font-black text-stone-900 font-mono">Stateful conntrack</div>
              </div>
              <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200 text-center">
                <div className="text-xs font-mono text-stone-500">Threat Defense</div>
                <div className="text-lg font-black text-stone-900 font-mono">Suricata IPS</div>
              </div>
              <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200 text-center col-span-2 sm:col-span-1">
                <div className="text-xs font-mono text-stone-500">Remote Access</div>
                <div className="text-lg font-black text-stone-900 font-mono">IPsec / Bastion</div>
              </div>
            </div>
          </div>

          {/* Module Navigation Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 no-scrollbar">
            {[
              { id: "theory", label: "Curriculum Theory", icon: BookOpen },
              { id: "stateful-sim", label: "Stateful vs Stateless Engine", icon: Activity },
              { id: "rule-order-sim", label: "Rule Ordering & Shadowing", icon: SlidersHorizontal },
              { id: "nat-sim", label: "NAT & Port Forwarding", icon: Split },
              { id: "vpn-bastion-sim", label: "VPN & Bastion Jump Host", icon: LockKeyhole },
              { id: "ids-ips-sim", label: "IDS / IPS Threat Detection", icon: ShieldAlert },
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
          <ModuleNav track="networks" currentModuleId="firewalls" />
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
                  Module 15 Sections
                </div>
                <div className="space-y-1">
                  {[
                    { id: "15.1", title: "15.1 Network Security Architecture" },
                    { id: "15.2", title: "15.2 Stateful vs. Stateless Filtering" },
                    { id: "15.3", title: "15.3 ACLs & Rule Ordering" },
                    { id: "15.4", title: "15.4 NAT & Port Forwarding" },
                    { id: "15.5", title: "15.5 VPNs & Cryptographic Access" },
                    { id: "15.6", title: "15.6 IDS, IPS & Security Monitoring" },
                    { id: "15.7", title: "15.7 NAC, Bastions & Jump Hosts" },
                    { id: "15.8", title: "15.8 Zero-Trust Policy Design" },
                    { id: "15.9", title: "15.9 Linux nftables & conntrack" },
                    { id: "15.10", title: "15.10 Hands-on Lab 15.1" },
                    { id: "15.11", title: "15.11 Diagnostic CLI & Wireshark" },
                    { id: "15.12", title: "15.12 Security Audit & Remediation" },
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
                    Designed for network engineers, SREs, and defensive security teams hardening production infrastructure against unauthorized access and lateral pivoting.
                  </div>
                </div>
              </div>
            </div>

            {/* Main Theory Content Body */}
            <div className="lg:col-span-3 space-y-6">
              {/* SECTION 15.1 */}
              {activeSection === "15.1" && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest">
                      Section 15.1
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      Network Security Architecture &amp; Defense-in-Depth
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-stone-700">
                    A secure enterprise network does not rely on a single perimeter firewall. Modern defensive engineering applies <strong>Defense-in-Depth</strong> across multiple coordinated inspection points in the traffic path: edge perimeter firewalls, internal segmentation firewalls (ISFW), Demilitarized Zones (DMZ), hardened bastion jump hosts, and host-based endpoint firewalls.
                  </p>

                  <div className="p-5 rounded-2xl bg-stone-900 text-white font-mono text-xs space-y-3">
                    <div className="text-stone-400 text-[10px] uppercase font-bold tracking-wider">
                      Figure 15.1: Multi-Tier Defensive Security Architecture
                    </div>
                    <div className="space-y-2 text-stone-300 leading-relaxed">
                      <div>[Untrusted Internet / Public Clients]</div>
                      <div className="text-orange-400 pl-4">&darr; Perimeter Firewall &amp; Anti-DDoS (Inbound DNAT &bull; State Tracking)</div>
                      <div>[Demilitarized Zone (DMZ)] : Public Web / Reverse Proxies (10.10.40.0/24)</div>
                      <div className="text-orange-400 pl-4">&darr; Internal Segmentation Firewall (Zero-Trust Inter-VLAN ACLs)</div>
                      <div>[Corporate Workstation LAN] : Staff Endpoints &amp; 802.1X NAC (10.10.10.0/24)</div>
                      <div className="text-orange-400 pl-4">&darr; Dedicated Management Jump Path (MFA Enforced)</div>
                      <div>[Bastion Host Subnet] : Audited SSH/RDP Gateways (10.10.99.0/24)</div>
                      <div className="text-orange-400 pl-4">&darr; Core Workload Microsegment</div>
                      <div>[Core Database &amp; Authentication Clusters] (10.10.50.0/24)</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
                    <div className="text-xs text-amber-900 leading-relaxed font-mono">
                      <strong>Core Axiom:</strong> Every network connection must be permitted by an explicit, documented policy based on least privilege. All unmatched traffic must hit an explicit <strong>DEFAULT DENY</strong>, and all security-sensitive events must be logged to an immutable SIEM repository.
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 15.2 */}
              {activeSection === "15.2" && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest">
                      Section 15.2
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      Stateful vs. Stateless Packet Filtering
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <div className="text-xs font-mono font-bold text-stone-900">
                        Stateless Packet Filtering (ACLs)
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Evaluates packets in complete isolation against configured 5-tuple rules (Source IP, Destination IP, Protocol, Source Port, Destination Port). Maintains zero memory of prior packets in the flow.
                      </p>
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg text-[11px] text-rose-800 leading-relaxed">
                        <strong>Critical Weakness:</strong> Cannot recognize return traffic. To allow clients to browse web servers, you must create a wide-open reverse rule permitting all incoming packets from source port 443 into high ephemeral ports, allowing external attackers to bypass defenses!
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <div className="text-xs font-mono font-bold text-emerald-800">
                        Stateful Packet Filtering (Connection Tracking)
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Tracks bidirectional conversations in an active state table (<code>conntrack</code>). Inspects TCP sequence/ACK numbers, flags (SYN, ACK, FIN, RST), and timeout timers.
                      </p>
                      <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg text-[11px] text-emerald-800 leading-relaxed">
                        <strong>Defensive Superiority:</strong> Once an outbound request is permitted, valid return replies are accepted dynamically via <code>ct state established</code>. Unsolicited external packets are dropped with zero reverse firewall holes.
                      </div>
                    </div>
                  </div>

                  {/* Connection Tracking States */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse font-mono">
                      <thead>
                        <tr className="border-b border-stone-300 bg-stone-100/60 text-stone-700">
                          <th className="p-3">State Identifier</th>
                          <th className="p-3">Protocol Condition</th>
                          <th className="p-3">Firewall Handling Policy</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200 text-stone-800">
                        <tr>
                          <td className="p-3 font-bold text-blue-600">NEW</td>
                          <td className="p-3 font-sans">First packet initiating a connection (e.g. TCP SYN).</td>
                          <td className="p-3 font-sans">Evaluated against security ruleset; permitted only if explicit policy exists.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-emerald-600">ESTABLISHED</td>
                          <td className="p-3 font-sans">Packets belonging to an active, validated bidirectional flow.</td>
                          <td className="p-3 font-sans">Accepted automatically without re-evaluating rulebase.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-amber-600">RELATED</td>
                          <td className="p-3 font-sans">Traffic associated with an active connection (e.g. ICMP error messages, FTP data).</td>
                          <td className="p-3 font-sans">Accepted if connection helper verifies cryptographic and protocol relationship.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-rose-600">INVALID</td>
                          <td className="p-3 font-sans">Malformed packets, invalid TCP flag combinations (XMAS scan), out-of-window sequence numbers.</td>
                          <td className="p-3 font-sans"><strong>DROPPED IMMEDIATELY</strong> at ingress hook.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* SECTION 15.3 */}
              {activeSection === "15.3" && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest">
                      Section 15.3
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      Access Control Lists (ACLs) &amp; Rule Ordering Semantics
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-stone-700">
                    Firewall policies are an ordered list of criteria evaluated sequentially. Most firewalls follow a <strong>first-match-wins</strong> evaluation model: the firewall stops processing rules the moment a packet matches all criteria of a rule.
                  </p>

                  <div className="p-4 rounded-2xl bg-stone-900 text-white font-mono text-xs space-y-3">
                    <div className="text-stone-400 text-[10px] uppercase font-bold tracking-wider">
                      The Shadowed Rule Vulnerability
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-stone-300">
                      <div className="p-3 bg-stone-950 rounded-xl border border-rose-800/40">
                        <strong className="text-rose-400">INCORRECT / SHADOWED ORDER:</strong>
                        <pre className="text-[11px] mt-1 text-stone-400">
{`1. ALLOW Staff (10.10.10.0/24) -> Servers ANY
2. DENY Staff (10.10.10.0/24) -> Server SSH (Port 22)
3. DENY ALL`}
                        </pre>
                        <p className="text-[10px] text-rose-300 mt-1 font-sans">
                          Result: Rule 2 is SHADOWED and completely dead. Staff can SSH to all servers!
                        </p>
                      </div>
                      <div className="p-3 bg-stone-950 rounded-xl border border-emerald-800/40">
                        <strong className="text-emerald-400">CORRECT / HARDENED ORDER:</strong>
                        <pre className="text-[11px] mt-1 text-stone-400">
{`1. DENY Staff (10.10.10.0/24) -> Server SSH (Port 22)
2. ALLOW Staff (10.10.10.0/24) -> Server Web (Port 443)
3. DENY ALL`}
                        </pre>
                        <p className="text-[10px] text-emerald-300 mt-1 font-sans">
                          Result: Specific restrictions evaluate first. Unapproved traffic hits default deny.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <div className="text-xs font-mono font-bold text-stone-900">
                      Ingress vs. Egress vs. East-West Filtering
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      While traditional perimeters focus solely on ingress traffic, <strong>egress filtering</strong> is equally vital: if an internal workstation is infected with malware, strict egress rules prevent it from establishing reverse shells, beaconing to C2 infrastructure, or participating in external DDoS attacks.
                    </p>
                  </div>
                </div>
              )}

              {/* SECTION 15.4 */}
              {activeSection === "15.4" && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest font-mono">
                      Section 15.4
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      NAT, PAT (Overload) &amp; Port Forwarding Architecture
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-stone-700">
                    Network Address Translation (NAT) modifies Layer 3 IP and Layer 4 port headers as packets traverse a gateway. It operates in three primary modes:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                      <strong className="text-stone-900 font-mono">Source NAT (SNAT):</strong>
                      <p className="text-stone-600 mt-1 leading-relaxed">
                        Rewrites the source IP of outbound packets. Used to present a pool of private addresses under a dedicated public IP address.
                      </p>
                    </div>
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                      <strong className="text-stone-900 font-mono">PAT (NAT Overload):</strong>
                      <p className="text-stone-600 mt-1 leading-relaxed">
                        Maps thousands of internal private sockets across a single public IP by dynamically allocating unique 16-bit ephemeral source ports.
                      </p>
                    </div>
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                      <strong className="text-stone-900 font-mono">DNAT (Port Forwarding):</strong>
                      <p className="text-stone-600 mt-1 leading-relaxed">
                        Rewrites the destination IP of incoming public packets (e.g. <code>198.51.100.10:443</code>) to an internal DMZ server (<code>10.10.40.10:443</code>).
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
                    <div className="text-xs text-amber-900 leading-relaxed font-mono">
                      <strong>Crucial Security Rule:</strong> NAT is an address translation engine, NOT a security control! A DNAT port-forwarding rule merely directs packets to an internal IP; your firewall security policy must independently evaluate whether that connection is authorized.
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 15.5 */}
              {activeSection === "15.5" && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest font-mono">
                      Section 15.5
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      VPN Architecture &amp; Cryptographic Remote Access
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <div className="text-xs font-mono font-bold text-stone-900">
                        Site-to-Site VPN (IPsec IKEv2)
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Connects entire branch office networks to corporate data centers over untrusted public transit. Uses IPsec Encapsulating Security Payload (ESP) in Tunnel Mode with AES-256-GCM. Transparent to endpoints.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <div className="text-xs font-mono font-bold text-stone-900">
                        Remote-Access VPN (WireGuard / OpenVPN)
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Connects individual roaming employee laptops to a central corporate VPN gateway. WireGuard uses modern public-key cryptography (Curve25519, ChaCha20-Poly1305) with negligible connection overhead.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-900 text-white font-mono text-xs space-y-2">
                    <div className="text-stone-400 text-[10px] uppercase font-bold tracking-wider">
                      Full-Tunnel vs. Split-Tunnel Architecture
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-stone-300">
                      <div>
                        <strong className="text-emerald-400">Full-Tunnel (High Security):</strong>
                        <p className="text-[11px] mt-1 leading-relaxed">
                          All client traffic (including general internet and personal browsing) is routed through the encrypted VPN tunnel. Enables central DLP, proxy inspection, and threat monitoring.
                        </p>
                      </div>
                      <div>
                        <strong className="text-amber-400">Split-Tunnel (High Efficiency):</strong>
                        <p className="text-[11px] mt-1 leading-relaxed">
                          Only traffic destined for corporate IP ranges (10.0.0.0/8) traverses the VPN; streaming and general web traffic exits the employee&rsquo;s local ISP directly. Conserves gateway WAN bandwidth.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 15.6 */}
              {activeSection === "15.6" && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest font-mono">
                      Section 15.6
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      Intrusion Detection &amp; Prevention Systems (IDS / IPS)
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-stone-700">
                    While firewalls enforce coarse 5-tuple and connection-state policies, Intrusion Detection and Prevention Systems (IDS/IPS) perform Deep Packet Inspection (DPI) to identify active exploit payloads, shellcode signatures, and protocol anomalies.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <div className="text-xs font-mono font-bold text-stone-900">
                        Network IDS (Suricata / Snort)
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Operates passively out-of-band via a switch SPAN/mirror port or network TAP. Generates real-time alerts without adding latency to live production flows. Cannot drop packets directly.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <div className="text-xs font-mono font-bold text-stone-900">
                        Network IPS (Inline Bridge)
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Sits directly in the forwarding path as an inline bridge. When an exploit signature matches, the IPS immediately drops the offending packet and injects TCP RST packets to tear down the socket.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <div className="text-xs font-mono font-bold text-stone-900">
                      Network Security Monitoring with Zeek
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Rather than relying solely on alerts, <strong>Zeek</strong> converts raw wire packets into rich, structured protocol metadata logs (<code>conn.log</code>, <code>dns.log</code>, <code>ssl.log</code>, <code>http.log</code>). In an era where 95%+ of traffic is encrypted with TLS 1.3, Zeek analyzes unencrypted metadata (JA3/JA4 fingerprints, cipher suites, DNS query frequency) to uncover advanced persistent threats (APTs).
                    </p>
                  </div>
                </div>
              )}

              {/* SECTION 15.7 */}
              {activeSection === "15.7" && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest font-mono">
                      Section 15.7
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      Network Access Control (NAC), Bastions &amp; Jump Servers
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-stone-700">
                    Direct administrative access (SSH port 22, RDP port 3389) to production servers or switch management interfaces must <strong>NEVER be exposed directly to user subnets or the public internet</strong>.
                  </p>

                  <div className="p-4 rounded-2xl bg-stone-900 text-white font-mono text-xs space-y-3">
                    <div className="text-stone-400 text-[10px] uppercase font-bold tracking-wider">
                      The Hardened Bastion Jump Host Pattern
                    </div>
                    <div className="space-y-1.5 text-stone-300 leading-relaxed">
                      <div>1. Administrator connects via VPN with multi-factor authentication (MFA).</div>
                      <div>2. Administrator SSHs into dedicated Bastion Jump Host (<code>10.10.99.10</code>) using hardware security keys (FIDO2 / YubiKey).</div>
                      <div>3. Bastion records complete terminal session telemetry (keystrokes, commands, outputs).</div>
                      <div>4. From the Bastion, administrator pivots to production servers or switches over an isolated management VLAN.</div>
                      <div>5. Production servers reject all SSH connections that do not originate from the Bastion IP.</div>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 15.8 */}
              {activeSection === "15.8" && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest font-mono">
                      Section 15.8
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      Zero-Trust Least-Privilege Firewall Policy Design
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-stone-700">
                    A zero-trust firewall policy begins with an inventory of legitimate business flows, not an ad-hoc list of open ports. Every flow must be explicitly justified by business need:
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse font-mono">
                      <thead>
                        <tr className="border-b border-stone-300 bg-stone-100/60 text-stone-700">
                          <th className="p-3">Source Zone</th>
                          <th className="p-3">Destination</th>
                          <th className="p-3">Policy Action</th>
                          <th className="p-3">Security Rationale</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200 text-stone-800">
                        <tr>
                          <td className="p-3 font-bold">Staff (10.10.10.0/24)</td>
                          <td className="p-3">Web Server (10.10.40.10:443)</td>
                          <td className="p-3 text-emerald-700 font-bold">ALLOW (Stateful)</td>
                          <td className="p-3 font-sans">Permitted business portal access.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold">Staff (10.10.10.0/24)</td>
                          <td className="p-3">Server SSH / DB Ports</td>
                          <td className="p-3 text-rose-700 font-bold">DENY &amp; LOG</td>
                          <td className="p-3 font-sans">Blocks lateral movement and ransomware spread.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold">Guest (10.10.30.0/24)</td>
                          <td className="p-3">RFC 1918 Corporate Subnets</td>
                          <td className="p-3 text-rose-700 font-bold">DENY ALL</td>
                          <td className="p-3 font-sans">Strict guest network isolation.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold">All Subnets</td>
                          <td className="p-3">External DNS (Port 53)</td>
                          <td className="p-3 text-rose-700 font-bold">DENY (Except Internal Resolvers)</td>
                          <td className="p-3 font-sans">Prevents DNS tunneling and rogue C2 resolution.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* SECTION 15.9 */}
              {activeSection === "15.9" && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest font-mono">
                      Section 15.9
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      Linux Firewall Engineering: nftables &amp; conntrack
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-stone-700">
                    In modern Linux distributions (Debian, Ubuntu, RHEL), <code>nftables</code> replaces legacy <code>iptables</code>. It operates directly in the kernel netfilter subsystem, offering higher performance, cleaner syntax, and atomic ruleset reloading.
                  </p>

                  <div className="p-4 rounded-2xl bg-stone-900 text-white font-mono text-xs space-y-2">
                    <div className="text-stone-400 text-[10px] uppercase font-bold tracking-wider">
                      Production nftables Stateful Firewall Ruleset
                    </div>
                    <pre className="text-stone-300 text-[11px] leading-relaxed overflow-x-auto whitespace-pre-wrap">
{`table inet filter {
    chain input {
        type filter hook input priority 0; policy drop;

        # 1. Accept loopback
        iif "lo" accept

        # 2. Accept established and related return traffic
        ct state established,related accept

        # 3. Drop invalid TCP flag combinations
        ct state invalid drop

        # 4. Allow SSH strictly from Bastion subnet
        ip saddr 10.10.99.0/24 tcp dport 22 ct state new accept
    }

    chain forward {
        type filter hook forward priority 0; policy drop;

        # Stateful return traffic
        ct state established,related accept

        # Forward Staff to approved HTTPS server
        ip saddr 10.10.10.0/24 ip daddr 10.10.40.10 tcp dport 443 ct state new accept
    }
}`}
                    </pre>
                  </div>
                </div>
              )}

              {/* SECTION 15.10 */}
              {activeSection === "15.10" && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest font-mono">
                      Section 15.10
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      Hands-On Lab Walkthrough (Lab 15.1)
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-stone-700">
                    In this hands-on lab, you configure a multi-segment Linux firewall with <code>nftables</code>, inject permitted and prohibited traffic using <code>curl</code> and <code>nc</code> (Netcat), and verify packet state using <code>conntrack</code> and <code>tcpdump</code>.
                  </p>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <div className="text-xs font-mono font-bold text-stone-900">
                      Step-by-Step Verification Sequence
                    </div>
                    <pre className="text-stone-800 text-[11px] font-mono bg-stone-100 p-3 rounded-lg overflow-x-auto">
{`# 1. Start temporary test listener on server
python3 -m http.server 8080 --bind 10.10.40.10

# 2. Test permitted connection from client
curl -I --connect-timeout 3 http://10.10.40.10:8080/

# 3. Test blocked connection from client (SSH port 22)
nc -zv -w 3 10.10.40.10 22

# 4. Inspect active conntrack table entries
sudo conntrack -L -p tcp --dport 8080`}
                    </pre>
                  </div>
                </div>
              )}

              {/* SECTION 15.11 */}
              {activeSection === "15.11" && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest font-mono">
                      Section 15.11
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      Diagnostic CLI Commands &amp; Wireshark Filter Matrix
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-stone-900 text-white font-mono text-xs space-y-2">
                      <div className="text-stone-400 text-[10px] uppercase font-bold">
                        Firewall &amp; State CLI Diagnostics
                      </div>
                      <pre className="text-stone-300 text-[11px] leading-relaxed overflow-x-auto">
{`# 1. List active nftables ruleset with rule handles
sudo nft -a list ruleset

# 2. Display live connection tracking table
sudo conntrack -L

# 3. Monitor real-time conntrack events
sudo conntrack -E

# 4. Capture dropped packets on firewall
sudo tcpdump -ni any 'tcp[tcpflags] & tcp-syn != 0'`}
                      </pre>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-900 text-white font-mono text-xs space-y-2">
                      <div className="text-stone-400 text-[10px] uppercase font-bold">
                        Wireshark Display Filter Matrix
                      </div>
                      <pre className="text-amber-400 text-[11px] leading-relaxed overflow-x-auto">
{`# Filter 1: Detect TCP SYN connection requests
tcp.flags.syn == 1 and tcp.flags.ack == 0

# Filter 2: Capture ICMP Port Unreachable / Admin Filtered
icmp.type == 3 and icmp.code == 13

# Filter 3: Inspect active HTTPS traffic to web server
ip.addr == 10.10.40.10 and tcp.port == 443

# Filter 4: Filter DNS queries to detect tunneling
dns.flags.response == 0 and udp.port == 53`}
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 15.12 */}
              {activeSection === "15.12" && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest font-mono">
                      Section 15.12
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      Defensive Security Audit Methodology &amp; Remediation
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-stone-700">
                    A defensive firewall audit verifies that security controls adhere to NIST SP 800-41 guidelines: explicit default-deny policies, zero shadowed rules, verified stateful return flow handling, and comprehensive logging.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <div className="text-xs font-mono font-bold text-stone-900">
                        Critical Audit Checks
                      </div>
                      <ul className="text-xs text-stone-600 space-y-1.5 list-disc pl-4 leading-relaxed">
                        <li>Verify that all chain policies end in an explicit <code>policy drop</code>.</li>
                        <li>Audit rule order to identify shadowed or redundant allow rules.</li>
                        <li>Confirm outbound DNS is restricted to approved internal resolvers.</li>
                        <li>Ensure management SSH is isolated behind a bastion jump host.</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <div className="text-xs font-mono font-bold text-stone-900">
                        High-Availability &amp; Health Checks
                      </div>
                      <ul className="text-xs text-stone-600 space-y-1.5 list-disc pl-4 leading-relaxed">
                        <li>Monitor <code>conntrack</code> table utilization to prevent state exhaustion.</li>
                        <li>Verify state synchronization between active/standby firewall clusters.</li>
                        <li>Confirm automated log shipping to central SIEM is operational.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 2: SIMULATOR 1 - STATEFUL VS STATELESS FILTERING               */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "stateful-sim" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                    <Activity size={14} />
                    <span>Stateful Inspection Engine</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    Stateful Connection Tracking (conntrack) vs. Stateless ACLs
                  </h3>
                </div>
                <div className="inline-flex rounded-xl p-1 bg-stone-100 border border-stone-200">
                  <button
                    onClick={() => setFilterMode("stateful")}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                      filterMode === "stateful" ? "bg-white text-stone-900 shadow-sm" : "text-stone-500 hover:text-stone-900"
                    }`}
                  >
                    Stateful Firewall (conntrack)
                  </button>
                  <button
                    onClick={() => setFilterMode("stateless")}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                      filterMode === "stateless" ? "bg-white text-stone-900 shadow-sm" : "text-stone-500 hover:text-stone-900"
                    }`}
                  >
                    Stateless Router ACL
                  </button>
                </div>
              </div>

              {/* Packet Flow Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <button
                  onClick={() => setPacketAction("outbound-syn")}
                  className={`p-3.5 rounded-2xl border text-left transition cursor-pointer ${
                    packetAction === "outbound-syn"
                      ? "bg-stone-900 text-white border-stone-900 shadow-sm"
                      : "bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100"
                  }`}
                >
                  <div className="font-bold text-xs font-mono">1. Outbound TCP SYN</div>
                  <div className="text-[10px] text-stone-400 mt-0.5">Client (10.10.10.10) &rarr; Server (Port 443)</div>
                </button>

                <button
                  onClick={() => setPacketAction("inbound-synack")}
                  className={`p-3.5 rounded-2xl border text-left transition cursor-pointer ${
                    packetAction === "inbound-synack"
                      ? "bg-stone-900 text-white border-stone-900 shadow-sm"
                      : "bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100"
                  }`}
                >
                  <div className="font-bold text-xs font-mono">2. Return TCP SYN-ACK</div>
                  <div className="text-[10px] text-stone-400 mt-0.5">Server replies to Client Ephemeral Port 52410</div>
                </button>

                <button
                  onClick={() => setPacketAction("unsolicited-inbound")}
                  className={`p-3.5 rounded-2xl border text-left transition cursor-pointer ${
                    packetAction === "unsolicited-inbound"
                      ? "bg-stone-900 text-white border-stone-900 shadow-sm"
                      : "bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100"
                  }`}
                >
                  <div className="font-bold text-xs font-mono">3. Unsolicited Inbound SYN</div>
                  <div className="text-[10px] text-stone-400 mt-0.5">External Probe targeting Client Port 52410</div>
                </button>
              </div>

              {/* Evaluation Display Card */}
              <div className="p-6 rounded-2xl bg-stone-900 text-white font-mono space-y-4 mb-6">
                <div className="flex items-center justify-between pb-3 border-b border-stone-800 text-xs">
                  <span className="text-stone-400 uppercase font-bold">Firewall Enforcement Decision</span>
                  <span className={`px-3 py-1 rounded-full font-bold text-xs ${filterSimulation.badgeColor}`}>
                    {filterSimulation.verdict}
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <span className="text-stone-400 w-32 shrink-0">State Table Entry:</span>
                    <span className="text-amber-400 font-bold">{filterSimulation.stateTable}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-stone-400 w-32 shrink-0">Behavioral Analysis:</span>
                    <span className="text-stone-200 leading-relaxed font-sans">{filterSimulation.detail}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 3: SIMULATOR 2 - RULE ORDERING & SHADOWING CONFLICTS           */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "rule-order-sim" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                    <SlidersHorizontal size={14} />
                    <span>Rulebase Conflict Analyzer</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    First-Match Rule Ordering &amp; Shadowing Vulnerability Sandbox
                  </h3>
                </div>
                <div className="inline-flex rounded-xl p-1 bg-stone-100 border border-stone-200">
                  <button
                    onClick={() => setRuleOrderPreset("shadowed")}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                      ruleOrderPreset === "shadowed" ? "bg-white text-stone-900 shadow-sm" : "text-stone-500 hover:text-stone-900"
                    }`}
                  >
                    Vulnerable Rulebase (Shadowed)
                  </button>
                  <button
                    onClick={() => setRuleOrderPreset("hardened")}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                      ruleOrderPreset === "hardened" ? "bg-white text-stone-900 shadow-sm" : "text-stone-500 hover:text-stone-900"
                    }`}
                  >
                    Hardened Rulebase (Least Privilege)
                  </button>
                </div>
              </div>

              {/* Status Banner */}
              <div className={`p-4 rounded-2xl border mb-6 ${ruleOrderAnalysis.statusColor}`}>
                <div className="text-xs font-bold font-mono uppercase tracking-wider mb-1">
                  {ruleOrderAnalysis.status}
                </div>
                <div className="text-xs font-sans leading-relaxed">{ruleOrderAnalysis.testPacketVerdict}</div>
              </div>

              {/* Sequential Evaluation Ladder */}
              <div className="space-y-3">
                {ruleOrderAnalysis.evaluationTrace.map((r) => (
                  <div
                    key={r.order}
                    className={`p-4 rounded-2xl border font-mono text-xs transition ${
                      r.hit ? "bg-stone-900 text-white border-stone-900" : "bg-stone-50 border-stone-200 text-stone-500 opacity-60"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1 pb-1 border-b border-current/20">
                      <span className="font-bold">Rule #{r.order}</span>
                      <span className="text-[10px] uppercase font-bold">{r.match}</span>
                    </div>
                    <div className="text-xs mt-1">{r.rule}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 4: SIMULATOR 3 - NAT, PAT & PORT FORWARDING                    */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "nat-sim" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                    <Split size={14} />
                    <span>Address Translation Engine</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    Source NAT, PAT (Overload) &amp; Destination NAT (Port Forwarding)
                  </h3>
                </div>
              </div>

              {/* Scenario Toggles */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {[
                  { id: "pat-outbound", label: "1. Outbound Web Browsing (PAT)" },
                  { id: "dnat-inbound", label: "2. Inbound Web Server (DNAT :443)" },
                  { id: "dnat-blocked", label: "3. Unauthorized Probe (Port 22 SSH)" },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setNatScenario(s.id)}
                    className={`p-3.5 rounded-2xl border text-left text-xs font-mono font-bold transition cursor-pointer ${
                      natScenario === s.id
                        ? "bg-stone-900 text-white border-stone-900 shadow-sm"
                        : "bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              {/* Translation Trace Card */}
              <div className="p-6 rounded-2xl bg-stone-900 text-white font-mono space-y-4 mb-6 text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                  <span className="text-stone-400 uppercase font-bold">{natDetails.title}</span>
                  <span className="text-emerald-400 font-bold">{natDetails.securityVerdict}</span>
                </div>

                <div className="space-y-3 text-stone-300">
                  <div>
                    <span className="text-stone-500 uppercase text-[10px] block">Ingress Original Packet:</span>
                    <span className="text-stone-100">{natDetails.originalPacket}</span>
                  </div>
                  <div>
                    <span className="text-stone-500 uppercase text-[10px] block">Gateway Translation Action:</span>
                    <span className="text-amber-400 font-bold">{natDetails.gatewayAction}</span>
                  </div>
                  <div>
                    <span className="text-stone-500 uppercase text-[10px] block">Over-The-Wire Packet:</span>
                    <span className="text-stone-100">{natDetails.translatedPacket}</span>
                  </div>
                  <div>
                    <span className="text-stone-500 uppercase text-[10px] block">Return Path Flow:</span>
                    <span className="text-stone-300 font-sans">{natDetails.returnFlow}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 5: SIMULATOR 4 - VPN & BASTION JUMP HOST                       */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "vpn-bastion-sim" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                    <LockKeyhole size={14} />
                    <span>Remote Access &amp; Privileged Access Management</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    VPN Remote Access &amp; Hardened Bastion Jump Host Simulator
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setVpnConnected(!vpnConnected)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition cursor-pointer border ${
                      vpnConnected ? "bg-emerald-50 border-emerald-300 text-emerald-800" : "bg-rose-50 border-rose-300 text-rose-800"
                    }`}
                  >
                    {vpnConnected ? "VPN State: CONNECTED" : "VPN State: DISCONNECTED"}
                  </button>
                  <button
                    onClick={() => setUseBastionJump(!useBastionJump)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition cursor-pointer border ${
                      useBastionJump ? "bg-stone-900 text-white" : "bg-stone-100 text-stone-700"
                    }`}
                  >
                    {useBastionJump ? "Route Via Bastion: YES" : "Route Via Bastion: NO (Direct)"}
                  </button>
                </div>
              </div>

              {/* Target Selector */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <button
                  onClick={() => setTargetAction("db-access")}
                  className={`p-3.5 rounded-2xl border text-left text-xs font-mono font-bold transition cursor-pointer ${
                    targetAction === "db-access"
                      ? "bg-stone-900 text-white border-stone-900 shadow-sm"
                      : "bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100"
                  }`}
                >
                  <div>Target: Core Database</div>
                  <div className="text-[10px] text-stone-400 mt-0.5">Port 5432 (Postgres Cluster)</div>
                </button>

                <button
                  onClick={() => setTargetAction("web-access")}
                  className={`p-3.5 rounded-2xl border text-left text-xs font-mono font-bold transition cursor-pointer ${
                    targetAction === "web-access"
                      ? "bg-stone-900 text-white border-stone-900 shadow-sm"
                      : "bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100"
                  }`}
                >
                  <div>Target: Internal Web Portal</div>
                  <div className="text-[10px] text-stone-400 mt-0.5">Port 443 (Corporate Wiki)</div>
                </button>

                <button
                  onClick={() => setTargetAction("switch-ssh")}
                  className={`p-3.5 rounded-2xl border text-left text-xs font-mono font-bold transition cursor-pointer ${
                    targetAction === "switch-ssh"
                      ? "bg-stone-900 text-white border-stone-900 shadow-sm"
                      : "bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100"
                  }`}
                >
                  <div>Target: Switch Console</div>
                  <div className="text-[10px] text-stone-400 mt-0.5">Port 22 (Switch-01 Management)</div>
                </button>
              </div>

              {/* Evaluation Card */}
              <div className={`p-6 rounded-2xl border mb-6 ${vpnEvaluation.color}`}>
                <div className="flex items-center justify-between pb-2 border-b border-current/20 text-xs font-mono font-bold">
                  <span>{vpnEvaluation.verdict}</span>
                </div>
                <div className="text-xs font-mono mt-2">{vpnEvaluation.routeTrace}</div>
                <div className="text-xs font-sans mt-2 pt-2 border-t border-current/20 leading-relaxed">
                  <strong>Security Rationale:</strong> {vpnEvaluation.reason}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 6: SIMULATOR 5 - IDS / IPS THREAT DETECTION                   */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "ids-ips-sim" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                    <ShieldAlert size={14} />
                    <span>Deep Packet Inspection Engine</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    Suricata IDS (Passive Alert) vs. IPS (Inline Active Drop)
                  </h3>
                </div>
                <div className="inline-flex rounded-xl p-1 bg-stone-100 border border-stone-200">
                  <button
                    onClick={() => setSensorMode("ips")}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                      sensorMode === "ips" ? "bg-white text-stone-900 shadow-sm" : "text-stone-500 hover:text-stone-900"
                    }`}
                  >
                    Inline IPS Mode (Active Drop)
                  </button>
                  <button
                    onClick={() => setSensorMode("ids")}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                      sensorMode === "ids" ? "bg-white text-stone-900 shadow-sm" : "text-stone-500 hover:text-stone-900"
                    }`}
                  >
                    Passive IDS Mode (Alert Only)
                  </button>
                </div>
              </div>

              {/* Threat Selector */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                {[
                  { id: "clean", label: "Clean TLS 1.3 Traffic" },
                  { id: "cve-exploit", label: "Log4j JNDI Exploit" },
                  { id: "syn-flood", label: "TCP SYN Flood Attack" },
                  { id: "c2-beacon", label: "C2 Malware Beacon" },
                ].map((th) => (
                  <button
                    key={th.id}
                    onClick={() => setThreatScenario(th.id)}
                    className={`p-3 rounded-xl border text-xs font-mono font-bold transition text-left cursor-pointer ${
                      threatScenario === th.id
                        ? "bg-stone-900 text-white border-stone-900 shadow-sm"
                        : "bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100"
                    }`}
                  >
                    {th.label}
                  </button>
                ))}
              </div>

              {/* Threat Evaluation Card */}
              <div className="p-6 rounded-2xl bg-stone-900 text-white font-mono space-y-4 text-xs mb-6">
                <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                  <span className="text-stone-400 uppercase font-bold">{threatEvaluation.threatName}</span>
                  <span className={`px-3 py-1 rounded-full font-bold text-xs ${threatEvaluation.badgeColor}`}>
                    {threatEvaluation.actionOutcome}
                  </span>
                </div>

                <div className="space-y-2 text-stone-300">
                  <div>
                    <span className="text-stone-500 uppercase text-[10px] block">Detection Mechanism:</span>
                    <span className="text-amber-400 font-bold">{threatEvaluation.detectedBy}</span>
                  </div>
                  <div>
                    <span className="text-stone-500 uppercase text-[10px] block">Suricata Signature Rule:</span>
                    <span className="text-stone-100">{threatEvaluation.ruleSignature}</span>
                  </div>
                  <div>
                    <span className="text-stone-500 uppercase text-[10px] block">Operational Verdict:</span>
                    <span className="text-stone-200 font-sans leading-relaxed">{threatEvaluation.detail}</span>
                  </div>
                </div>
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
                  Linux nftables &amp; conntrack CLI Diagnostic Reference
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Linux nftables */}
                <div className="p-5 rounded-2xl bg-stone-900 text-white font-mono text-xs space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-stone-800 text-stone-400 text-[10px] uppercase font-bold">
                    <span>nftables Packet Filtering Commands</span>
                    <button
                      onClick={() =>
                        copyToClipboard(
                          `sudo nft list ruleset\nsudo nft -a list table inet filter\nsudo nft flush table inet filter`,
                          "cli-nft"
                        )
                      }
                      className="text-stone-400 hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      {copiedCodeId === "cli-nft" ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                      <span>{copiedCodeId === "cli-nft" ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                  <pre className="text-stone-300 text-[11px] leading-relaxed overflow-x-auto whitespace-pre-wrap">
{`# 1. Inspect live active ruleset with rule handles
$ sudo nft -a list ruleset

# 2. Add rule with explicit logging
$ sudo nft add rule inet filter forward ip saddr 10.10.10.0/24 tcp dport 22 log prefix "SSH_BLOCKED: " drop

# 3. Monitor live nftables drop counters
$ sudo nft list chain inet filter forward`}
                  </pre>
                </div>

                {/* conntrack & tcpdump */}
                <div className="p-5 rounded-2xl bg-stone-900 text-white font-mono text-xs space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-stone-800 text-stone-400 text-[10px] uppercase font-bold">
                    <span>conntrack &amp; tcpdump Diagnostics</span>
                    <button
                      onClick={() =>
                        copyToClipboard(
                          `sudo conntrack -L\nsudo conntrack -E\nsudo tcpdump -ni any 'host 10.10.40.10 and port 443'`,
                          "cli-conn"
                        )
                      }
                      className="text-stone-400 hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      {copiedCodeId === "cli-conn" ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                      <span>{copiedCodeId === "cli-conn" ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                  <pre className="text-stone-300 text-[11px] leading-relaxed overflow-x-auto whitespace-pre-wrap">
{`# 1. Display all established TCP connections
$ sudo conntrack -L -p tcp --status ESTABLISHED
tcp      6 299 ESTABLISHED src=10.10.10.10 dst=10.10.40.10 sport=52410 dport=443 [ASSURED]

# 2. Capture TCP handshakes and resets on firewall
$ sudo tcpdump -ni eth0 'tcp[tcpflags] & (tcp-syn|tcp-rst) != 0'`}
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
                    Module 15 Examination: Network Services, Firewalls &amp; Access Control
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
                    Defensive Firewall &amp; Access Control Audit Checklist
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
                  { key: "defaultDeny", label: "1. Explicit Default Deny", desc: "Verify that all chain policies end in policy drop." },
                  { key: "statefulTracking", label: "2. State Tracking (conntrack)", desc: "Enforce ct state established,related accept." },
                  { key: "ruleOrdering", label: "3. Shadowing Prevention", desc: "Place specific deny rules above broad allow rules." },
                  { key: "egressLockdown", label: "4. Strict Outbound Egress", desc: "Block unapproved outbound ports and direct DNS." },
                  { key: "natDnatConfig", label: "5. NAT / Port Forwarding", desc: "Expose only required ports in DMZ; shield internal IPs." },
                  { key: "vpnQuarantine", label: "6. VPN Microsegmentation", desc: "Isolate VPN clients in a quarantine subnet." },
                  { key: "bastionHardening", label: "7. Bastion Jump Host", desc: "Enforce MFA and prohibit direct SSH from client subnets." },
                  { key: "idsIpsLogging", label: "8. Inline IPS & Logging", desc: "Enable Suricata DPI and export logs to SIEM." },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => toggleFirewallChecklist(item.key)}
                    className={`p-3.5 rounded-2xl border text-left transition cursor-pointer ${
                      firewallChecklist[item.key]
                        ? "bg-emerald-50/70 border-emerald-300 text-emerald-950"
                        : "bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold font-mono">{item.label}</span>
                      {firewallChecklist[item.key] ? (
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
                  <span>Markdown Firewall &amp; Access Control Audit Report Template</span>
                  <button
                    onClick={() => copyToClipboard(firewallAuditReportTemplate, "fw-report")}
                    className="text-stone-300 hover:text-white flex items-center gap-1.5 cursor-pointer transition"
                  >
                    {copiedCodeId === "fw-report" ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                    <span>{copiedCodeId === "fw-report" ? "Report Copied" : "Copy Markdown"}</span>
                  </button>
                </div>
                <pre className="text-stone-300 text-[11px] leading-relaxed overflow-x-auto max-h-96 whitespace-pre-wrap">
                  {firewallAuditReportTemplate}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* Footer Navigation Bar */}
        <div className="mt-10 pt-6 border-t border-[#e7e3da] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => {
              navigate("/learning/networks/switching");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#e7e3da] bg-white text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#ea580c] transition cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 14 — Switching, VLANs &amp; Enterprise LAN Design</span>
          </button>

          <button
            onClick={() => {
              navigate("/learning/networks/enterprise-cloud");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 text-xs font-bold text-white hover:bg-orange-600 transition cursor-pointer"
          >
            <span>Next: Module 16 — Enterprise, Data Center &amp; Cloud</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
