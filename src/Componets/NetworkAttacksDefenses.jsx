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
} from "lucide-react";
import ModuleNav from "./ModuleNav";

export default function NetworkAttacksDefenses() {
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
  // SIMULATOR 1: ARP Poisoning vs. DAI & DHCP Snooping
  // ==========================================
  const [daiEnabled, setDaiEnabled] = useState(false);
  const [arpEventLog, setArpEventLog] = useState([
    { id: 1, time: "00:01", type: "system", msg: "Switch Gi0/1 (Uplink), Gi0/5 (Client PC), Gi0/8 (Attacker Kali) online." },
    { id: 2, time: "00:02", type: "system", msg: "DHCP Snooping database initialized: 192.168.1.50 -> 00:50:56:AA:11:22 on Gi0/5." },
  ]);
  const [victimArpCache, setVictimArpCache] = useState({
    gatewayIp: "192.168.1.1",
    gatewayMac: "00:00:0C:BB:33:44",
    status: "Clean (Legitimate Gateway MAC)",
    isPoisoned: false,
  });

  const sendLegitArp = () => {
    setVictimArpCache({
      gatewayIp: "192.168.1.1",
      gatewayMac: "00:00:0C:BB:33:44",
      status: "Verified (Legitimate Gateway MAC)",
      isPoisoned: false,
    });
    setArpEventLog((prev) => [
      {
        id: Date.now(),
        time: new Date().toLocaleTimeString().slice(3),
        type: "success",
        msg: "ARP Reply: 192.168.1.1 is at 00:00:0C:BB:33:44 (Gateway port Gi0/1 - Trusted). Victim ARP cache updated cleanly.",
      },
      ...prev.slice(0, 7),
    ]);
  };

  const launchArpPoison = () => {
    if (daiEnabled) {
      setArpEventLog((prev) => [
        {
          id: Date.now(),
          time: new Date().toLocaleTimeString().slice(3),
          type: "blocked",
          msg: "DAI VIOLATION [Gi0/8]: Dropped rogue ARP Reply '192.168.1.1 is at 00:0C:29:CC:55:66'. Mismatch with DHCP Snooping DB!",
        },
        ...prev.slice(0, 7),
      ]);
    } else {
      setVictimArpCache({
        gatewayIp: "192.168.1.1",
        gatewayMac: "00:0C:29:CC:55:66",
        status: "POISONED! Attacker is intercepting all traffic (MitM)",
        isPoisoned: true,
      });
      setArpEventLog((prev) => [
        {
          id: Date.now(),
          time: new Date().toLocaleTimeString().slice(3),
          type: "danger",
          msg: "ATTACK SUCCESS: Unsolicited Gratuitous ARP from Gi0/8 poisoned victim cache: 192.168.1.1 -> 00:0C:29:CC:55:66 (Attacker Kali).",
        },
        ...prev.slice(0, 7),
      ]);
    }
  };

  const resetArpSandbox = () => {
    setVictimArpCache({
      gatewayIp: "192.168.1.1",
      gatewayMac: "00:00:0C:BB:33:44",
      status: "Clean (Legitimate Gateway MAC)",
      isPoisoned: false,
    });
    setArpEventLog([
      { id: Date.now(), time: "00:00", type: "system", msg: "Sandbox reset. Victim ARP table restored to default gateway binding." },
    ]);
  };

  // ==========================================
  // SIMULATOR 2: DNS Cache Poisoning vs. DNSSEC Validation
  // ==========================================
  const [dnsResolverMode, setDnsResolverMode] = useState("legacy"); // legacy | randomized | dnssec
  const [attackerBurstSize, setAttackerBurstSize] = useState(200);
  const [dnsAttackState, setDnsAttackState] = useState(null);

  const runDnsSimulation = () => {
    // Legacy: Fixed sport 53, 16-bit TxID = 65,536 space. A burst of 200+ packets has substantial probability over repeated attempts
    // Randomized: 16-bit TxID * 16-bit Port = 2^32 = 4,294,967,296 space.
    // DNSSEC: Cryptographic validation of RRSIG vs DNSKEY root chain.
    const legitTxId = Math.floor(10000 + Math.random() * 50000);
    const legitPort = dnsResolverMode === "legacy" ? 53 : Math.floor(49152 + Math.random() * 16000);

    let poisoned = false;
    let reason = "";

    if (dnsResolverMode === "legacy") {
      // With fixed port, collision probability in birthday paradox or high burst:
      const prob = Math.min(0.92, (attackerBurstSize / 65536) * 18);
      if (Math.random() < prob) {
        poisoned = true;
        reason = `Attacker successfully guessed TxID #${legitTxId} on fixed query port 53. Malicious IP 6.6.6.6 accepted into resolver cache!`;
      } else {
        reason = `Authoritative response arrived before any forged packet guessed TxID #${legitTxId}. Cache temporarily clean.`;
      }
    } else if (dnsResolverMode === "randomized") {
      // 2^32 space
      const prob = (attackerBurstSize / 4294967296) * 20;
      if (Math.random() < prob) {
        poisoned = true;
        reason = `Statistical anomaly: Attacker guessed both random Port ${legitPort} and TxID #${legitTxId}.`;
      } else {
        reason = `Attacker failed to guess 32-bit combined entropy (Random Port ${legitPort} + TxID #${legitTxId}). Genuine reply cached.`;
      }
    } else {
      // DNSSEC
      poisoned = false;
      reason = `DNSSEC ACTIVE: Forged answer with IP 6.6.6.6 lacked valid cryptographic RRSIG signature linked to trust anchor. Status: BOGUS (Discarded).`;
    }

    setDnsAttackState({
      legitTxId,
      legitPort,
      poisoned,
      reason,
      status: dnsResolverMode === "dnssec" ? "SECURE (DNSSEC Validated)" : poisoned ? "POISONED (Pharming Redirect Active)" : "RESOLVED (Legitimate Record)",
    });
  };

  // ==========================================
  // SIMULATOR 3: uRPF Strict vs. Loose Mode Simulator
  // ==========================================
  const [urpfMode, setUrpfMode] = useState("strict"); // disabled | strict | loose
  const [urpfPacket, setUrpfPacket] = useState({
    srcIp: "203.0.113.88",
    ingressIface: "eth1", // arriving interface
  });

  const urpfEvaluation = useMemo(() => {
    // FIB Table:
    // eth0 -> 198.51.100.0/24 (Customer A)
    // eth1 -> 203.0.113.0/24 (Customer B)
    // eth2 -> 0.0.0.0/0 (Internet Uplink / Default Route)
    const { srcIp, ingressIface } = urpfPacket;

    let bestEgress = "eth2"; // default
    let isDirect = false;
    let isBogon = false;

    if (srcIp.startsWith("198.51.100.")) {
      bestEgress = "eth0";
      isDirect = true;
    } else if (srcIp.startsWith("203.0.113.")) {
      bestEgress = "eth1";
      isDirect = true;
    } else if (srcIp.startsWith("10.") || srcIp.startsWith("192.168.")) {
      isBogon = true;
      bestEgress = "NONE";
    }

    if (urpfMode === "disabled") {
      return {
        action: "FORWARDED",
        color: "emerald",
        reason: "uRPF is Disabled. Router forwards packet blindly based solely on destination IP, allowing spoofed traffic.",
      };
    }

    if (urpfMode === "strict") {
      // Strict: Route must exist in FIB AND best return path must use the exact ingress interface
      if (isBogon) {
        return {
          action: "DROPPED (RFC 2827 / BCP 38)",
          color: "rose",
          reason: `RFC 1918 Private/Bogon IP ${srcIp} has no route in public FIB. Strict uRPF dropped packet on ${ingressIface}.`,
        };
      }
      if (bestEgress === ingressIface) {
        return {
          action: "FORWARDED (Strict Match)",
          color: "emerald",
          reason: `FIB confirms source ${srcIp} is reachable via ${bestEgress}, which matches ingress interface ${ingressIface}.`,
        };
      } else {
        return {
          action: "DROPPED (uRPF Strict Violation)",
          color: "rose",
          reason: `SPOOF DETECTED: Source ${srcIp} has best return path via ${bestEgress}, but arrived on ${ingressIface}! Ingress interface mismatch.`,
        };
      }
    }

    if (urpfMode === "loose") {
      // Loose: Route must exist in FIB for source IP, regardless of which interface it arrives on
      if (isBogon) {
        return {
          action: "DROPPED (No FIB Route)",
          color: "rose",
          reason: `Source IP ${srcIp} has no specific route in FIB. Dropped even under Loose uRPF.`,
        };
      }
      return {
        action: "FORWARDED (Loose Match)",
        color: "amber",
        reason: `Route to source IP ${srcIp} exists in FIB. Permitted under Loose uRPF (supports asymmetric routing).`,
      };
    }

    return { action: "UNKNOWN", color: "stone", reason: "" };
  }, [urpfMode, urpfPacket]);

  // ==========================================
  // SIMULATOR 4: TCP SYN Flood & SYN Cookie Engine
  // ==========================================
  const [synRate, setSynRate] = useState(2500); // SYNs/sec
  const [synCookiesEnabled, setSynCookiesEnabled] = useState(false);
  const [synSimState, setSynSimState] = useState({
    backlogUsage: 12,
    tcbMemoryKb: 48,
    legitSuccessRate: 100,
    cookieHashGenerated: 0,
    serverStatus: "Normal Operations",
  });

  const runSynSimulation = () => {
    if (!synCookiesEnabled) {
      if (synRate >= 2000) {
        setSynSimState({
          backlogUsage: 512, // 100% capacity
          tcbMemoryKb: 4096,
          legitSuccessRate: 4, // 96% failure
          cookieHashGenerated: 0,
          serverStatus: "DENIAL OF SERVICE: SYN queue exhausted! Legitimate connection attempts discarded.",
        });
      } else {
        const usage = Math.min(512, Math.floor((synRate / 2000) * 512));
        const success = Math.max(10, Math.floor(100 - (usage / 512) * 90));
        setSynSimState({
          backlogUsage: usage,
          tcbMemoryKb: Math.floor(usage * 8),
          legitSuccessRate: success,
          cookieHashGenerated: 0,
          serverStatus: usage > 380 ? "Degraded: Backlog near exhaustion" : "Stable",
        });
      }
    } else {
      // SYN Cookies RFC 4987 active
      setSynSimState({
        backlogUsage: 36, // Stays tiny because state is not stored in backlog!
        tcbMemoryKb: 128,
        legitSuccessRate: 100,
        cookieHashGenerated: synRate,
        serverStatus: "RESILIENT: Stateless SYN Cookies active. TCB state deferred until valid ACK with decoded ISN.",
      });
    }
  };

  // ==========================================
  // SIMULATOR 5: Switch Hardening & VLAN Hopping Defense
  // ==========================================
  const [switchConfig, setSwitchConfig] = useState({
    portMode: "dynamic", // dynamic | access
    dtpNegotiation: true, // true (on) | false (nonegotiate)
    nativeVlan: 1, // 1 (default) | 999 (isolated)
    bpduGuard: false,
  });
  const [vlanAttackResult, setVlanAttackResult] = useState(null);

  const testDtpSpoofing = () => {
    if (switchConfig.portMode === "dynamic" && switchConfig.dtpNegotiation) {
      setVlanAttackResult({
        attack: "DTP Switch Spoofing",
        vulnerable: true,
        badge: "COMPROMISED",
        color: "rose",
        trace:
          "Attacker Kali sent 802.1Q DTP Desirable packet. Switch accepted trunk negotiation! Port converted to 802.1Q Trunk. Attacker now possesses full Layer 2 access to ALL VLANs (1, 10, 20, 30).",
      });
    } else {
      setVlanAttackResult({
        attack: "DTP Switch Spoofing",
        vulnerable: false,
        badge: "DEFENDED",
        color: "emerald",
        trace:
          "DTP Packet ignored! Switch port is statically configured as 'switchport mode access' with 'switchport nonegotiate'. Trunk negotiation rejected.",
      });
    }
  };

  const testDoubleTagging = () => {
    // Double tagging works if:
    // 1. Attacker is on the same VLAN as the Native VLAN on the trunk (often default VLAN 1).
    // 2. Switch strips outer tag because it matches native VLAN, and forwards packet across trunk with inner tag intact.
    if (switchConfig.nativeVlan === 1) {
      setVlanAttackResult({
        attack: "802.1Q Double Tagging Hopping",
        vulnerable: true,
        badge: "HOVERED TO TARGET VLAN",
        color: "rose",
        trace:
          "Attacker sent frame with Outer Tag=1 (Native) and Inner Tag=20 (Finance). First switch stripped outer tag (native VLAN rule) and forwarded frame across trunk. Second switch inspected inner tag and delivered frame to VLAN 20! One-way packet injection succeeded.",
      });
    } else {
      setVlanAttackResult({
        attack: "802.1Q Double Tagging Hopping",
        vulnerable: false,
        badge: "DEFENDED",
        color: "emerald",
        trace:
          "Double Tagging thwarted! Trunk Native VLAN has been remapped to dedicated unused VLAN 999. Attacker frame with Outer Tag=1 was NOT stripped and remained isolated within VLAN 1.",
      });
    }
  };

  // ==========================================
  // QUIZ STATE (10 Questions)
  // ==========================================
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "Why is traditional ARP (RFC 826) fundamentally vulnerable to cache poisoning attacks?",
      options: [
        "ARP uses 1024-bit RSA keys that are vulnerable to quantum decryption",
        "ARP is entirely stateless and hosts accept unsolicited ARP replies to update their cache without verifying whether an ARP request was ever sent",
        "ARP packets cannot traverse Layer 2 switches without being dropped",
        "ARP requires the default gateway to approve all MAC mappings in real time",
      ],
      correct: 1,
      explanation:
        "RFC 826 ARP is stateless and lacks authentication. Most operating system network stacks unconditionally update their ARP cache upon receiving an unsolicited or gratuitous ARP reply, allowing an adjacent attacker to overwrite IP-to-MAC mappings.",
    },
    {
      id: 2,
      question: "How does Dynamic ARP Inspection (DAI) validate incoming ARP packets on an enterprise switch?",
      options: [
        "By transmitting every ARP frame to an external cloud AI firewall for reputation scoring",
        "By inspecting the ARP payload on untrusted ports against the switch's DHCP Snooping binding database (IP-to-MAC-to-Port mappings)",
        "By converting all ARP broadcasts into unicast IPv6 Neighbor Solicitations",
        "By discarding all ARP replies that have an even-numbered MAC address",
      ],
      correct: 1,
      explanation:
        "DAI intercepts ARP packets on untrusted switchports and verifies that the sender IP and MAC address match a trusted entry in the DHCP Snooping binding table. Forged ARP replies fail validation and are dropped immediately.",
    },
    {
      id: 3,
      question: "In the classic Kaminsky DNS cache poisoning attack, what made the attack exponentially faster than previous DNS spoofing methods?",
      options: [
        "It compromised the root DNS servers directly using buffer overflows",
        "The attacker queried non-existent random subdomains (e.g. x123.bank.com) to force the recursive resolver to constantly ask authoritative servers, giving unlimited attempts to guess the 16-bit TxID and inject authority glue records",
        "It decrypted DNS-over-HTTPS payloads using TLS session ticket reuse",
        "It disabled UDP checksums across internet transit routers",
      ],
      correct: 1,
      explanation:
        "By querying random subdomains like 8923.target.com, the attacker bypassed the resolver's cache for existing domains, triggering continuous authoritative lookups. This allowed the attacker to flood the resolver with forged responses containing NS glue records that hijacked the entire domain.",
    },
    {
      id: 4,
      question: "Which cryptographic mechanism does DNSSEC use to guarantee the integrity and authenticity of DNS resource records?",
      options: [
        "AES-256 end-to-end payload encryption between client and server",
        "Digital signatures (RRSIG records) validated through a hierarchical chain of trust up to the root trust anchor (DNSKEY and DS records)",
        "Zero-knowledge proofs exchanged via TCP SYN packets",
        "Diffie-Hellman ephemeral key exchanges on port 53",
      ],
      correct: 1,
      explanation:
        "DNSSEC does not encrypt records; it provides cryptographic origin authentication and integrity. Authoritative zones sign record sets (RRSIG), which validating resolvers verify against public keys (DNSKEY) and Delegation Signer (DS) hashes chained to the root.",
    },
    {
      id: 5,
      question: "What is the primary operational difference between Unicast Reverse Path Forwarding (uRPF) Strict Mode and Loose Mode?",
      options: [
        "Strict mode encrypts IP headers; Loose mode only checks TCP flags",
        "Strict mode requires that the packet's source IP be reachable via the exact interface on which the packet arrived; Loose mode only requires that a route to the source IP exists in the FIB on any interface",
        "Loose mode drops all private RFC 1918 addresses; Strict mode allows them",
        "Strict mode only operates on IPv6; Loose mode operates on IPv4",
      ],
      correct: 1,
      explanation:
        "Strict uRPF tests whether the source IP route points back out the exact ingress interface. If the route points elsewhere, the packet is dropped (mitigating spoofing, but breaking asymmetric routing). Loose mode merely checks if a return route exists in the FIB at all.",
    },
    {
      id: 6,
      question: "How does the TCP SYN Cookie mechanism (RFC 4987) protect a server against SYN flood exhaustion?",
      options: [
        "It blocks all incoming SYN packets until the client solves a cryptographic proof-of-work puzzle",
        "The server allocates zero kernel memory (TCB) upon receiving a SYN; instead, it encodes the connection parameters into the Initial Sequence Number (ISN) and only allocates memory when a valid ACK is returned",
        "It drops all UDP traffic to conserve socket memory for TCP connections",
        "It caches connections in browser cookies across HTTP headers",
      ],
      correct: 1,
      explanation:
        "Normally, a SYN causes the kernel to allocate a Transmission Control Block (TCB) in the half-open backlog queue. With SYN Cookies, the server generates an Initial Sequence Number containing a cryptographic hash of the 4-tuple, timestamp, and MSS. Socket state is only allocated when the final ACK returns.",
    },
    {
      id: 7,
      question: "How does 802.1Q Double Tagging VLAN hopping succeed against unhardened switches?",
      options: [
        "The attacker overwhelms the switch CAM table with 100,000 fake MAC addresses",
        "The attacker encapsulates a frame with two 802.1Q headers; the first switch strips the outer tag matching the trunk's Native VLAN, and the downstream switch inspects the inner tag, forwarding the frame into the target VLAN",
        "The attacker reconfigures the switch's SNMP community string using default passwords",
        "The attacker exploits an unpatched vulnerability in the spanning tree algorithm",
      ],
      correct: 1,
      explanation:
        "When an attacker on the Native VLAN transmits a frame with Outer Tag = Native VLAN and Inner Tag = Target VLAN, the first switch strips the outer tag (as Native VLAN traffic on trunks is untagged). The frame arrives at the trunk switch with the inner tag intact, forwarding it into the target VLAN.",
    },
    {
      id: 8,
      question: "Which switchport configuration commands best prevent Switch Spoofing via Dynamic Trunking Protocol (DTP)?",
      options: [
        "switchport mode trunk and spanning-tree portfast",
        "switchport mode access and switchport nonegotiate",
        "ip dhcp snooping trust and arp inspection validate",
        "no switchport and ip address dhcp",
      ],
      correct: 1,
      explanation:
        "Statically configuring 'switchport mode access' locks the port into an access port, and 'switchport nonegotiate' explicitly disables DTP packet transmission, preventing an attacker from tricking the port into negotiating a trunk.",
    },
    {
      id: 9,
      question: "What security risk does a Rogue DHCP Server introduce to a local subnet?",
      options: [
        "It forces all network cards to downshift from 1 Gbps to 10 Mbps full-duplex",
        "It responds to DHCP Discovers faster than the authentic server, assigning the attacker's IP as the Default Gateway and DNS server, enabling full Man-in-the-Middle traffic interception",
        "It modifies the physical BSSID of wireless access points",
        "It corrupts the operating system kernel page tables via UDP broadcasts",
      ],
      correct: 1,
      explanation:
        "A rogue DHCP server races legitimate servers to supply IP lease parameters. By assigning the attacker's machine as the Default Gateway (DHCP Option 3) and DNS Server (DHCP Option 6), all client internet traffic is routed through the attacker.",
    },
    {
      id: 10,
      question: "What wireless security standard prevents attacker-injected 802.11 Deauthentication frames used to force client disassociation in Evil Twin attacks?",
      options: [
        "WPA-TKIP (Temporal Key Integrity Protocol)",
        "IEEE 802.11w Protected Management Frames (PMF)",
        "SSID Broadcasting suppression",
        "WEP 128-bit Shared Key authentication",
      ],
      correct: 1,
      explanation:
        "Standard 802.11 management frames (like Deauth and Disassociation) are unencrypted, allowing attackers to spoof source MACs and kick clients offline. IEEE 802.11w (PMF) cryptographically signs management frames, preventing spoofed deauth attacks.",
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

  // Copyable Markdown Incident Deliverable
  const incidentAuditReport = `# SRE NETWORK INCIDENT & DEFENSIVE COUNTERMEASURES AUDIT
**Case Reference:** SEC-INC-2026-094
**Security Engineer:** Lead Network Security Architect / Site Reliability Engineer
**Incident Classification:** Severity-1 Layer 2/3 On-Path Interception & Flood Attack
**Audit Date:** 2026-10-15
**Facility:** Primary Core Data Center & Campus Distribution Fabric

---

## 1. INCIDENT EXECUTIVE SUMMARY
During the 14:00 UTC operational window, the Security Operations Center (SOC) detected widespread internal certificate warning alerts and intermittent DNS timeout spikes across VLAN 10 (Workstations). Investigation confirmed an active Layer 2 Man-in-the-Middle (MitM) attempt utilizing Gratuitous ARP Poisoning, compounded by an external 4.8 Mpps TCP SYN flood targeting the perimeter API gateway.

Immediate switchport containment and kernel-level SYN cookie enforcement prevented data exfiltration and maintained service uptime at 99.98%.

---

## 2. ATTACK VECTOR ANALYSIS & ROOT CAUSES

### A. Layer 2 ARP Cache Poisoning
- **Mechanism:** Compromised workstation (192.168.10.45, MAC: 00:0c:29:ab:12:cd) transmitted 120 unsolicited Gratuitous ARP replies per second claiming ownership of Default Gateway IP (192.168.10.1).
- **Vulnerability:** Access switch lacked Dynamic ARP Inspection (DAI) and DHCP Snooping enforcement on access ports.
- **Impact:** Traffic from 32 client hosts was temporarily diverted through the attacker's endpoint prior to TLS termination alerts.

### B. DNS Resolver Spoofing Attempt
- **Mechanism:** Off-path attacker targeted internal recursive resolver (10.0.0.53) with spoofed replies for external banking API endpoints.
- **Vulnerability:** Legacy internal forwarder used static UDP source ports.
- **Defensive Outcome:** Upstream DNSSEC validation identified invalid RRSIG cryptographic signatures and discarded 100% of forged records (Status: BOGUS).

### C. Volumetric Perimeter TCP SYN Flood
- **Mechanism:** Botnet distributed 4.8 million SYN packets/second with spoofed IPv4 source headers against public ingress (TCP 443).
- **Vulnerability:** Standard half-open connection backlog buffer (1024 entries) saturated within 25 milliseconds.
- **Defensive Outcome:** Edge load balancers engaged RFC 4987 SYN Cookies, encoding TCP handshake state into Initial Sequence Numbers (ISN). Legitimate client connections completed without dropped packets.

---

## 3. DEFENSIVE HARDENING ACTIONS IMPLEMENTED

| Switch/Router Layer | Countermeasure Applied | Configuration Command / Sysctl | Verification Result |
| :--- | :--- | :--- | :--- |
| **Campus Access Switches** | DHCP Snooping & DAI | \`ip dhcp snooping\`<br/>\`ip arp inspection vlan 10,20\` | Rogue ARP replies dropped at ASIC line-rate. |
| **Trunk Ports** | Native VLAN Isolation | \`switchport trunk native vlan 999\`<br/>\`switchport nonegotiate\` | Double-tagging and DTP spoofing neutralized. |
| **Edge Routers** | Strict uRPF Filtering | \`ip verify unicast source reachable-via rx\` | Asymmetric spoofed external IPs dropped at ingress. |
| **Linux Host Kernel** | Stateless SYN Cookies | \`sysctl -w net.ipv4.tcp_syncookies=1\` | Half-open queue overflow resilient under 10Mpps. |
| **DNS Resolvers** | DNSSEC & Port Entropy | \`dnssec-validation auto;\`<br/>\`use-random-ports yes;\` | Cryptographic signature trust chain enforced. |

---

## 4. ONGOING AUDIT & SRE VERIFICATION CADENCE
1. **Weekly Automated PCAP Audits:** Continuous Zeek / Suricata sensor monitoring for unexpected duplicate MAC-to-IP pairings.
2. **Switchport Hardening Verification:** Automated Ansible playbook executing weekly audits of \`switchport mode access\` and BPDU Guard status.
3. **uRPF Border Verification:** Bi-monthly synthetic spoofed packet injection tests from isolated test harness.
`;

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 font-sans">
      <ModuleNav
        track="networks"
        currentModuleId="attacks"
        showAiTutor={false}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Header */}
        <div className="flex items-center gap-2 text-xs font-mono text-stone-700 mb-4">
          <span>COMPUTER NETWORKS &amp; INTERNET ENGINEERING</span>
          <span>/</span>
          <span>MODULE 19</span>
          <span>/</span>
          <span className="text-[#ea580c] font-bold">ATTACKS &amp; COUNTERMEASURES</span>
        </div>

        {/* Title and High-Level Metadata */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 border border-rose-200 flex items-center gap-1.5">
                <ShieldAlert size={14} />
                Network Security Engineering
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-[#ea580c] border border-orange-200">
                RFC 826 / RFC 4987 / RFC 4033 / BCP 38
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-stone-100 text-stone-700 border border-stone-200">
                Layer 2 to Layer 4 Hardening
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono text-stone-700">
              <span>Standard: IEEE &amp; IETF Best Current Practice</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-3">
            Common Network Attacks and Defensive Countermeasures
          </h1>
          <p className="text-stone-700 text-base sm:text-lg leading-relaxed max-w-4xl">
            Network attacks systematically exploit the implicit trust built into legacy discovery, naming, routing, and handshake protocols. Master the offensive mechanics, wire-level packet structures, and high-performance defensive mitigations for seven major network threat vectors across Layers 2 through 4.
          </p>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-6 pt-6 border-t border-stone-100">
            <button
              onClick={() => setActiveTab("curriculum")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === "curriculum"
                  ? "bg-[#ea580c] text-white shadow-sm"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              <FileText size={15} />
              <span>1. Complete Curriculum (19.1–19.10)</span>
            </button>
            <button
              onClick={() => setActiveTab("simulators")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === "simulators"
                  ? "bg-[#ea580c] text-white shadow-sm"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              <Activity size={15} />
              <span>2. Interactive Sandboxes (5 Engines)</span>
            </button>
            <button
              onClick={() => setActiveTab("lab")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === "lab"
                  ? "bg-[#ea580c] text-white shadow-sm"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              <Terminal size={15} />
              <span>3. Hands-On Lab 19.1 (Checklist 0/8)</span>
            </button>
            <button
              onClick={() => setActiveTab("quiz")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === "quiz"
                  ? "bg-[#ea580c] text-white shadow-sm"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              <HelpCircle size={15} />
              <span>4. Knowledge Check (10 Questions)</span>
            </button>
            <button
              onClick={() => setActiveTab("audit")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === "audit"
                  ? "bg-[#ea580c] text-white shadow-sm"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              <ShieldCheck size={15} />
              <span>5. SRE Incident Report Deliverable</span>
            </button>
          </div>
        </div>

        {/* TAB 1: CURRICULUM */}
        {activeTab === "curriculum" && (
          <div className="space-y-8">
            {/* 19.1 Threat Landscape & Protocol Vulnerability Primitives */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  SECTION 19.1
                </span>
                <span className="text-xs font-semibold text-stone-700">Theoretical Foundations</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                19.1 The Implicit Trust Primitive in Network Protocols
              </h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                The architectural bedrock of the internet—dating back to the ARPANET and early IEEE and IETF standards—was engineered in an academic environment where connected systems were presumed friendly and mutually cooperative. Consequently, fundamental protocol primitives were designed without cryptographic integrity verification, entity authentication, or origin proof:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                <div className="p-4 rounded-2xl bg-[#f6f4ee] border border-stone-200">
                  <span className="text-xs font-mono font-bold text-rose-700 block mb-1">LAYER 2 (DATA LINK)</span>
                  <h4 className="font-bold text-stone-900 text-sm mb-1">Implicit Address Discovery</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    ARP (RFC 826) unconditionally trusts any station claiming an IP address. Ethernet switches forward frames based on unauthenticated MAC source learning tables.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#f6f4ee] border border-stone-200">
                  <span className="text-xs font-mono font-bold text-amber-700 block mb-1">LAYER 3 (NETWORK)</span>
                  <h4 className="font-bold text-stone-900 text-sm mb-1">Stateless Header Forgery</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    IPv4 headers permit any sender with raw socket access (<code>SOCK_RAW</code>) to populate the 32-bit Source IP field arbitrarily, enabling reflection and asymmetric denial of service.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#f6f4ee] border border-stone-200">
                  <span className="text-xs font-mono font-bold text-blue-700 block mb-1">LAYER 4 (TRANSPORT)</span>
                  <h4 className="font-bold text-stone-900 text-sm mb-1">Asymmetric State Allocation</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    TCP requires the receiving server to allocate Transmission Control Blocks (TCB) before the remote peer proves identity or willingness to complete the connection handshake.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 leading-relaxed flex items-start gap-3">
                <AlertTriangle className="text-amber-600 shrink-0 mt-0.5" size={16} />
                <div>
                  <span className="font-bold">The Core Security Axiom:</span> Modern network defense operates on the principle of <em>Zero Implicit Trust</em>. Every protocol exchange that crosses a layer boundary must either be cryptographically validated or policed by deterministic hardware state engines (such as DAI, uRPF, and SYN cookies).
                </div>
              </div>
            </div>

            {/* 19.2 ARP Poisoning & Dynamic ARP Inspection (DAI) */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  SECTION 19.2
                </span>
                <span className="text-xs font-semibold text-stone-700">Layer 2 Exploitation &amp; Defense</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                19.2 ARP Spoofing, Man-in-the-Middle, and Dynamic ARP Inspection (DAI)
              </h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                The Address Resolution Protocol (RFC 826) operates without state tracking. When host A needs to communicate with host B on the same broadcast domain, it sends an ARP Request broadcast: <em>"Who has IP 192.168.1.1? Tell 192.168.1.50."</em> Host B responds with a unicast ARP Reply. However, most operating systems update their ARP cache even when receiving an <strong>unsolicited Gratuitous ARP (GARP)</strong> reply that was never requested.
              </p>

              <div className="p-4 rounded-2xl bg-stone-950 text-stone-200 font-mono text-xs my-5 overflow-x-auto">
                <div className="text-stone-400 mb-2">// Wire-Level Mechanics of an ARP Poisoning Attack</div>
                <div>1. Attacker transmits Gratuitous ARP to Victim (192.168.1.50):</div>
                <div className="text-rose-400 pl-4">&gt; Opcode: ARP Reply (2) | Sender IP: 192.168.1.1 (Gateway) | Sender MAC: 00:0c:29:cc:55:66 (ATTACKER)</div>
                <div>2. Attacker transmits Gratuitous ARP to Gateway (192.168.1.1):</div>
                <div className="text-rose-400 pl-4">&gt; Opcode: ARP Reply (2) | Sender IP: 192.168.1.50 (Victim)  | Sender MAC: 00:0c:29:cc:55:66 (ATTACKER)</div>
                <div>3. Attacker enables IP forwarding: <code>sysctl -w net.ipv4.ip_forward=1</code></div>
                <div className="text-emerald-400 pl-4">&gt; Result: All traffic between Victim and Gateway traverses Attacker NIC in cleartext.</div>
              </div>

              <h3 className="text-lg font-bold text-stone-900 mt-6 mb-3">Defensive Engineering: Dynamic ARP Inspection (DAI)</h3>
              <p className="text-stone-700 text-sm leading-relaxed mb-4">
                Dynamic ARP Inspection (DAI) is a Layer 2 hardware security feature implemented in modern enterprise managed switches. DAI relies on the <strong>DHCP Snooping Binding Database</strong>. As clients obtain DHCP leases on untrusted access ports, the switch tracks valid tuples of:
              </p>
              <div className="p-3 bg-stone-100 rounded-xl font-mono text-xs text-stone-800 text-center mb-4">
                [ MAC Address | Assigned IPv4 Address | VLAN ID | Ingress Physical Switchport | Lease Time ]
              </div>
              <p className="text-stone-700 text-sm leading-relaxed">
                When DAI is active on a VLAN, the switch intercepts every ARP packet arriving on <em>untrusted</em> ports. If the sender IP-to-MAC binding in the ARP payload does not match the DHCP snooping table (or a static ARP ACL), the ASIC discards the packet immediately and logs a security violation.
              </p>
            </div>

            {/* 19.3 DNS Spoofing, Cache Poisoning & DNSSEC */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  SECTION 19.3
                </span>
                <span className="text-xs font-semibold text-stone-700">Naming Infrastructure</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                19.3 DNS Cache Poisoning, the Kaminsky Vulnerability, and DNSSEC
              </h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                DNS queries sent over UDP port 53 traditionally matched incoming responses using two fields: the <strong>16-bit Transaction ID (TxID)</strong> and the resolver&apos;s source UDP port. Because the TxID offers only 65,536 possible combinations, an off-path attacker racing the authoritative nameserver had a finite probability of guessing the correct ID.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-6">
                <div className="p-5 rounded-2xl border border-stone-200 bg-[#f6f4ee]">
                  <h4 className="font-bold text-stone-900 text-sm mb-2 flex items-center gap-2">
                    <Flame className="text-rose-600" size={16} />
                    The Dan Kaminsky Flaw (2008)
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    Previously, attackers had to wait for a cached domain (like <code>bank.com</code>) to expire before attempting a race. Dan Kaminsky demonstrated that by querying <em>random non-existent subdomains</em> (e.g. <code>sub001.bank.com</code>, <code>sub002.bank.com</code>), the attacker forced the recursive resolver to immediately send an authoritative query.
                  </p>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    The attacker simultaneously flooded the resolver with thousands of forged responses for <code>sub001.bank.com</code>, but appended an authoritative <strong>NS glue record</strong> stating: <em>"By the way, all names in bank.com are now handled by ns.attacker.com (IP: 6.6.6.6)."</em> Once a single TxID matched, the entire domain was permanently poisoned.
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-emerald-200 bg-emerald-50/50">
                  <h4 className="font-bold text-emerald-950 text-sm mb-2 flex items-center gap-2">
                    <ShieldCheck className="text-emerald-600" size={16} />
                    Defenses: Port Randomization &amp; DNSSEC
                  </h4>
                  <ul className="text-xs text-emerald-900 space-y-2 leading-relaxed">
                    <li>
                      <strong>Source Port Randomization:</strong> Instead of fixed query port 53, modern resolvers randomize the ephemeral UDP port (1024–65535), expanding the entropy space from 16 bits to 32 bits (~4.29 billion combinations).
                    </li>
                    <li>
                      <strong>DNSSEC (RFC 4033–4035):</strong> Cryptographically signs resource record sets (RRsets) with <strong>RRSIG</strong> records. The validating resolver verifies the signature against the zone&apos;s <strong>DNSKEY</strong>, which in turn is validated by the parent zone&apos;s <strong>DS</strong> (Delegation Signer) digest, anchored up to the root zone public trust anchor.
                    </li>
                    <li>
                      <strong>DoH &amp; DoT (RFC 8484 / 7858):</strong> Encrypts recursive DNS transport over TLS/HTTPS, preventing on-path tampering by ISPs or local rogue routers.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 19.4 IP Spoofing & Source Address Validation (uRPF & BCP 38) */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  SECTION 19.4
                </span>
                <span className="text-xs font-semibold text-stone-700">Edge Routing Architecture</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                19.4 IP Spoofing, Amplification Vectors, and Unicast Reverse Path Forwarding (uRPF)
              </h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                Because IP routers make forwarding decisions almost exclusively based on the <em>Destination Address</em>, attackers can craft packets with arbitrary forged source IPs. This enables <strong>Reflective Amplification DDoS</strong> attacks, where small requests sent to misconfigured UDP services (NTP monlist, DNS ANY queries, Memcached) elicit massive response payloads directed at the spoofed victim.
              </p>

              <div className="overflow-x-auto my-5">
                <table className="w-full text-xs text-left border border-stone-200 rounded-xl overflow-hidden">
                  <thead className="bg-stone-100 text-stone-800 font-mono">
                    <tr>
                      <th className="p-3">Amplification Protocol</th>
                      <th className="p-3">Vulnerable Request Primitive</th>
                      <th className="p-3">Amplification Factor</th>
                      <th className="p-3">Root Vulnerability</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-700">
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-semibold">Memcached (UDP 11211)</td>
                      <td className="p-3 font-mono">get &lt;large_key&gt;</td>
                      <td className="p-3 font-bold text-rose-600">10,000&times; to 51,000&times;</td>
                      <td className="p-3">UDP listener enabled on public IP by default.</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-semibold">NTP (UDP 123)</td>
                      <td className="p-3 font-mono">monlist (mode 7)</td>
                      <td className="p-3 font-bold text-amber-600">556&times; to 1,000&times;</td>
                      <td className="p-3">Returns list of last 600 hosts that queried NTP daemon.</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-semibold">DNS (UDP 53)</td>
                      <td className="p-3 font-mono">dig ANY &lt;signed_zone&gt;</td>
                      <td className="p-3 font-bold text-amber-600">28&times; to 54&times;</td>
                      <td className="p-3">Open recursive resolvers returning large DNSSEC records.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-bold text-stone-900 mt-6 mb-2">Ingress Filtering &amp; BCP 38 / RFC 2827</h3>
              <p className="text-stone-700 text-sm leading-relaxed mb-4">
                <strong>Best Current Practice 38 (BCP 38)</strong> mandates that Internet Service Providers and enterprise border routers drop packets arriving from downstream customer interfaces whose source IP addresses do not belong to that customer&apos;s allocated prefix.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-stone-200 bg-[#f6f4ee]">
                  <span className="font-bold text-stone-900 text-sm block mb-1">uRPF Strict Mode</span>
                  <p className="text-xs text-stone-600 leading-relaxed mb-2">
                    The router queries the FIB (Forwarding Information Base) for a route back to the source IP. The packet is forwarded <strong>only if</strong> the FIB&apos;s best outgoing interface exactly matches the interface on which the packet arrived.
                  </p>
                  <span className="text-[11px] font-mono text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                    Best for single-homed stub networks &amp; enterprise access edges.
                  </span>
                </div>
                <div className="p-4 rounded-xl border border-stone-200 bg-[#f6f4ee]">
                  <span className="font-bold text-stone-900 text-sm block mb-1">uRPF Loose Mode</span>
                  <p className="text-xs text-stone-600 leading-relaxed mb-2">
                    The router requires that a valid route to the source IP exists in the FIB on <em>any</em> interface (excluding the default route unless configured with <code>allow-default</code>).
                  </p>
                  <span className="text-[11px] font-mono text-blue-800 bg-blue-100 px-2 py-0.5 rounded">
                    Tolerates asymmetric multi-homed BGP routing architectures.
                  </span>
                </div>
              </div>
            </div>

            {/* 19.5 TCP SYN Floods & Cryptographic SYN Cookie Resilience */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  SECTION 19.5
                </span>
                <span className="text-xs font-semibold text-stone-700">Transport Layer Resilience</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                19.5 TCP SYN Floods, Queue Exhaustion, and RFC 4987 SYN Cookies
              </h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                During standard TCP 3-way handshakes, upon receiving a <code>SYN</code> packet, the server allocates kernel memory for a <strong>Transmission Control Block (TCB)</strong> and places the socket into the half-open backlog queue (<code>SYN_RECV</code> state). An attacker flooding thousands of forged SYN packets with randomized source IPs will exhaust the finite backlog buffer (e.g. 512–2048 slots) within seconds, dropping all subsequent legitimate connection attempts.
              </p>

              <div className="p-5 rounded-2xl bg-stone-900 text-stone-200 border border-stone-800 my-5">
                <h4 className="text-xs font-mono font-bold text-orange-400 mb-2 uppercase">
                  RFC 4987: Mathematical Construction of a TCP SYN Cookie
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed mb-3">
                  Under high backlog pressure, the kernel activates SYN Cookies. The server <strong>allocates zero state</strong> in memory. Instead, it carefully constructs the 32-bit Initial Sequence Number (ISN) in its <code>SYN-ACK</code> packet as follows:
                </p>
                <div className="p-3 bg-stone-950 rounded-xl font-mono text-xs text-emerald-400 text-center mb-3">
                  ISN = [ Time (5 bits) ] + [ MSS Index (3 bits) ] + [ Cryptographic Hash (24 bits) ]
                </div>
                <ul className="text-xs text-stone-400 space-y-1.5 list-disc pl-5">
                  <li><strong>Time (top 5 bits):</strong> A slowly incrementing counter (typically <code>time() &gt;&gt; 6</code>, ticking every 64 seconds) to prevent replay attacks beyond a short expiration window.</li>
                  <li><strong>MSS Index (next 3 bits):</strong> Encodes one of 8 standard Maximum Segment Size values (e.g. 536, 1460, 8960 bytes), preserving MTU optimization without memory storage.</li>
                  <li><strong>Cryptographic Hash (bottom 24 bits):</strong> <code>HMAC-SHA(src_ip, dst_ip, src_port, dst_port, secret_key, time)</code>.</li>
                </ul>
              </div>

              <p className="text-stone-700 text-sm leading-relaxed mb-4">
                When a genuine client returns the final <code>ACK</code> with acknowledgment number equal to <code>ISN + 1</code>, the server subtracts 1, recomputes the cryptographic hash using its secret key, and validates the timestamp. Only upon successful verification does the kernel allocate the full TCB socket and hand the established connection to the application via <code>accept()</code>.
              </p>
            </div>

            {/* 19.6 VLAN Hopping & Layer 2 Exploits */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  SECTION 19.6
                </span>
                <span className="text-xs font-semibold text-stone-700">Switch Security</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                19.6 VLAN Hopping Exploits: Switch Spoofing and 802.1Q Double Tagging
              </h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                Virtual Local Area Networks (VLANs) provide logical isolation at Layer 2. However, misconfigured switches can allow an attacker on an access port to bridge into unauthorized VLANs without traversing a firewall.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
                <div className="p-5 rounded-2xl border border-stone-200 bg-[#f6f4ee]">
                  <h4 className="font-bold text-stone-900 text-sm mb-2">1. Switch Spoofing (DTP Exploitation)</h4>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    Many switches ship with ports defaulting to <code>dynamic auto</code> or <code>dynamic desirable</code> mode using the proprietary Dynamic Trunking Protocol (DTP).
                  </p>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    An attacker running tools like <em>Yersinia</em> transmits rogue DTP negotiation frames to the switch port. The switch cooperatively negotiates an 802.1Q trunk, giving the attacker Layer 2 access to all VLANs traversing that trunk link.
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-stone-200 bg-[#f6f4ee]">
                  <h4 className="font-bold text-stone-900 text-sm mb-2">2. Double Tagging (802.1Q Native VLAN Strip)</h4>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    By 802.1Q standard specification, frames on the <strong>Native VLAN</strong> traversing a trunk are transmitted <em>untagged</em>.
                  </p>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    If an attacker resides on the Native VLAN, they can craft a frame with two 802.1Q headers: Outer Tag = Native VLAN (e.g. VLAN 1), Inner Tag = Target VLAN (e.g. VLAN 20). The first switch strips the outer tag and forwards the frame across the trunk. The second switch reads the remaining inner tag and delivers the packet directly into VLAN 20. (Note: Double tagging is unidirectional).
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs">
                <div className="text-emerald-400 font-bold mb-2">// Mandatory Switch Hardening Baseline (Cisco IOS-XE / EOS):</div>
                <div>Switch(config-if)# switchport mode access          <span className="text-stone-400"># Enforce static access mode</span></div>
                <div>Switch(config-if)# switchport nonegotiate          <span className="text-stone-400"># Permanently disable DTP frames</span></div>
                <div>Switch(config-if)# spanning-tree bpduguard enable  <span className="text-stone-400"># Error-disable port if rogue BPDU seen</span></div>
                <div>Switch(config)# switchport trunk native vlan 999  <span className="text-stone-400"># Remap native VLAN away from VLAN 1</span></div>
              </div>
            </div>

            {/* 19.7 Rogue DHCP & Evil Twin Wireless Attacks */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  SECTION 19.7
                </span>
                <span className="text-xs font-semibold text-stone-700">Wireless &amp; Host Configuration</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                19.7 Rogue DHCP Servers and Evil Twin Wireless Attacks
              </h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                When a new device connects to a network, it broadcasts a <code>DHCPDISCOVER</code> message. Because DHCP operates over broadcast UDP (ports 67 and 68), any host on the segment can respond with a <code>DHCPOFFER</code>.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-5">
                <div className="p-5 rounded-2xl border border-stone-200 bg-[#f6f4ee]">
                  <h4 className="font-bold text-stone-900 text-sm mb-2 flex items-center gap-2">
                    <Server className="text-[#ea580c]" size={16} />
                    Rogue DHCP Server Attack
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed mb-2">
                    A rogue server answers the client faster than the enterprise server. It assigns a valid subnet IP, but configures:
                  </p>
                  <ul className="text-xs text-stone-700 space-y-1 list-disc pl-4 font-mono">
                    <li>Option 3 (Default Gateway): Attacker&apos;s IP</li>
                    <li>Option 6 (Domain Name Server): Attacker&apos;s DNS</li>
                  </ul>
                  <p className="text-xs text-stone-600 leading-relaxed mt-2">
                    <strong>Mitigation:</strong> DHCP Snooping. All access switchports are classified as <em>untrusted</em> by default. DHCP Offer and DHCP Ack packets received on untrusted ports are discarded immediately.
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-stone-200 bg-[#f6f4ee]">
                  <h4 className="font-bold text-stone-900 text-sm mb-2 flex items-center gap-2">
                    <Radio className="text-[#ea580c]" size={16} />
                    Evil Twin &amp; Deauth Attacks
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed mb-2">
                    An attacker configures a rogue access point with identical SSID and security parameters as the enterprise Wi-Fi. The attacker broadcasts 802.11 <strong>Deauthentication frames</strong> with spoofed AP MAC to kick legitimate clients offline.
                  </p>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    <strong>Mitigation:</strong> IEEE 802.11w Protected Management Frames (PMF) which cryptographically sign deauthentication messages, combined with 802.1X EAP-TLS certificate-based mutual authentication.
                  </p>
                </div>
              </div>
            </div>

            {/* 19.8 Network Segmentation & Blast-Radius Containment */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  SECTION 19.8
                </span>
                <span className="text-xs font-semibold text-stone-700">Microsegmentation Architecture</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                19.8 Network Segmentation and Blast-Radius Containment
              </h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                In a flat Layer 2 network, a single compromised workstation exposes every database, IoT sensor, and internal server to ARP poisoning, lateral reconnaissance, and malware propagation. Modern enterprise security relies on <strong>microsegmentation</strong> to reduce the lateral blast-radius to zero.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5">
                <div className="p-4 rounded-2xl bg-[#f6f4ee] border border-stone-200">
                  <h4 className="font-bold text-stone-900 text-sm mb-1">East-West Microsegmentation</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Deploying host firewalls (Linux nftables, Windows Defender Firewall) and Private VLANs (PVLANs) so workstations within the same subnet cannot speak to each other directly.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#f6f4ee] border border-stone-200">
                  <h4 className="font-bold text-stone-900 text-sm mb-1">Out-of-Band (OOB) Management</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Isolating all switch consoles, BMCs (IPMI, iLO, iDRAC), and router control planes on dedicated physical or cryptographic management networks unreachable from general user subnets.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#f6f4ee] border border-stone-200">
                  <h4 className="font-bold text-stone-900 text-sm mb-1">Zero Trust Architecture</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    NIST SP 800-207 compliant enforcement: Network location (IP or VLAN) does not confer trust. Every service invocation requires mutual TLS (mTLS) authentication and short-lived tokens.
                  </p>
                </div>
              </div>
            </div>

            {/* 19.9 Behavioral Detection & Telemetry Correlation */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  SECTION 19.9
                </span>
                <span className="text-xs font-semibold text-stone-700">Security Operations &amp; Telemetry</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                19.9 Behavioral Anomaly Detection &amp; Flow Telemetry
              </h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                Signature-based detection alone cannot reliably catch zero-day attacks or stealthy lateral movement. Network engineers implement behavioral baselining using NetFlow/IPFIX and protocol-aware network security monitoring (NSM) engines:
              </p>
              <div className="space-y-3 my-5">
                <div className="p-4 rounded-2xl border border-stone-200 bg-white">
                  <div className="flex items-center justify-between font-bold text-stone-900 text-sm mb-1">
                    <span>1. Unsolicited Inbound Ratio Shift (SYN/ACK Asymmetry)</span>
                    <span className="text-xs font-mono text-rose-600">DDoS Indicator</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Normal TCP workloads maintain a balanced ratio between SYN and ACK packets (~1:1 to 1:1.2). A sudden jump to 500:1 SYN-to-ACK ratio indicates an ongoing SYN flood or horizontal scanning probe.
                  </p>
                </div>
                <div className="p-4 rounded-2xl border border-stone-200 bg-white">
                  <div className="flex items-center justify-between font-bold text-stone-900 text-sm mb-1">
                    <span>2. DNS Query Entropy &amp; NXDOMAIN Spikes</span>
                    <span className="text-xs font-mono text-amber-600">Kaminsky / Tunneling Indicator</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Sudden surges in high-entropy subdomains resulting in <code>NXDOMAIN</code> errors suggest DNS tunneling (exfiltration) or an active cache poisoning brute force attempt.
                  </p>
                </div>
                <div className="p-4 rounded-2xl border border-stone-200 bg-white">
                  <div className="flex items-center justify-between font-bold text-stone-900 text-sm mb-1">
                    <span>3. Duplicate Gratuitous ARP Rate Limit Trigger</span>
                    <span className="text-xs font-mono text-rose-600">DAI Alarm</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    More than 15 ARP packets/second on an access switchport triggers DAI rate-limiting, automatically placing the port in <code>err-disable</code> state to sever the attacker.
                  </p>
                </div>
              </div>
            </div>

            {/* 19.10 SRE Incident Response Playbook */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  SECTION 19.10
                </span>
                <span className="text-xs font-semibold text-stone-700">Incident Response Lifecycle</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                19.10 The SRE Network Security Incident Response Lifecycle
              </h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                When a security breach or volumetric flood occurs, structured SRE and SOC response follows the NIST SP 800-61 lifecycle:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-5">
                <div className="p-4 rounded-2xl bg-[#f6f4ee] border border-stone-200">
                  <div className="text-xs font-mono font-bold text-[#ea580c] mb-1">STAGE 1</div>
                  <h4 className="font-bold text-stone-900 text-sm mb-1">Identification</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Correlate SIEM alerts, switch drop counters, and flow logs to isolate the exact rogue MAC, switchport, and spoofed IP ranges.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#f6f4ee] border border-stone-200">
                  <div className="text-xs font-mono font-bold text-[#ea580c] mb-1">STAGE 2</div>
                  <h4 className="font-bold text-stone-900 text-sm mb-1">Containment</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Isolate compromised endpoints via 802.1X Quarantine VLAN or administrative port shutdown (<code>shutdown</code>). Engage BGP Blackholing or Anycast scrubbing.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#f6f4ee] border border-stone-200">
                  <div className="text-xs font-mono font-bold text-[#ea580c] mb-1">STAGE 3</div>
                  <h4 className="font-bold text-stone-900 text-sm mb-1">Eradication &amp; Patch</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Flush poisoned ARP/DNS caches, configure DAI and uRPF filters, and remediate infected endpoints before restoring network connectivity.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#f6f4ee] border border-stone-200">
                  <div className="text-xs font-mono font-bold text-[#ea580c] mb-1">STAGE 4</div>
                  <h4 className="font-bold text-stone-900 text-sm mb-1">Post-Mortem &amp; Audit</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Publish an blameless post-mortem document, update infrastructure-as-code hardening baselines, and verify compliance across all switches.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: INTERACTIVE SIMULATORS */}
        {activeTab === "simulators" && (
          <div className="space-y-10">
            {/* SIMULATOR 1: ARP Poisoning vs DAI */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                    SIMULATOR 1
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mt-2">
                    ARP Poisoning vs. Dynamic ARP Inspection (DAI) Sandbox
                  </h3>
                </div>
                <button
                  onClick={resetArpSandbox}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-300 text-xs font-semibold text-stone-700 hover:bg-stone-100 transition cursor-pointer"
                >
                  <RefreshCw size={13} />
                  Reset Sandbox
                </button>
              </div>

              {/* Topology Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-[#f6f4ee] border border-stone-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-stone-800">VICTIM HOST (PC-1)</span>
                    <span className="text-[10px] font-mono bg-stone-200 px-2 py-0.5 rounded text-stone-700">Port Gi0/5</span>
                  </div>
                  <div className="text-xs font-mono space-y-1 text-stone-700">
                    <div>IP: 192.168.1.50</div>
                    <div>MAC: 00:50:56:AA:11:22</div>
                  </div>
                  <div className="mt-3 p-2.5 bg-white rounded-xl border border-stone-200">
                    <span className="text-[10px] font-bold block text-stone-500 uppercase">Victim ARP Cache:</span>
                    <div className="text-xs font-mono font-semibold text-stone-900">
                      192.168.1.1 &rarr; {victimArpCache.gatewayMac}
                    </div>
                    <span
                      className={`inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded ${
                        victimArpCache.isPoisoned ? "bg-rose-100 text-rose-800" : "bg-emerald-100 text-emerald-800"
                      }`}
                    >
                      {victimArpCache.status}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 border border-stone-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-orange-400">MANAGED ACCESS SWITCH</span>
                    <span className="text-[10px] font-mono bg-stone-800 px-2 py-0.5 rounded text-stone-400">Layer 2 ASIC</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-stone-300">DHCP Snooping:</span>
                      <span className="text-emerald-400 font-mono font-bold">ACTIVE (VLAN 1)</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-stone-300">DAI Status:</span>
                      <button
                        onClick={() => setDaiEnabled(!daiEnabled)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                          daiEnabled ? "bg-emerald-600 text-white" : "bg-rose-600 text-white"
                        }`}
                      >
                        {daiEnabled ? "ENABLED (Protected)" : "DISABLED (Vulnerable)"}
                      </button>
                    </div>
                    <div className="text-[11px] text-stone-400 bg-stone-950 p-2 rounded-lg border border-stone-800">
                      Binding: 192.168.1.1 is strictly registered to MAC 00:00:0C:BB:33:44 on trusted uplink Gi0/1.
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#f6f4ee] border border-stone-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-stone-800">ATTACKER (KALI)</span>
                    <span className="text-[10px] font-mono bg-rose-100 text-rose-800 px-2 py-0.5 rounded">Port Gi0/8 (Untrusted)</span>
                  </div>
                  <div className="text-xs font-mono space-y-1 text-stone-700">
                    <div>IP: 192.168.1.99</div>
                    <div>MAC: 00:0C:29:CC:55:66</div>
                  </div>
                  <div className="mt-3 flex flex-col gap-2">
                    <button
                      onClick={launchArpPoison}
                      className="px-3 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold transition cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <Zap size={13} />
                      Transmit Spoofed ARP Reply
                    </button>
                    <button
                      onClick={sendLegitArp}
                      className="px-3 py-1.5 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-xl text-xs font-bold transition cursor-pointer"
                    >
                      Send Legitimate ARP Reply
                    </button>
                  </div>
                </div>
              </div>

              {/* Event Log Console */}
              <div className="bg-stone-950 rounded-2xl p-4 border border-stone-800 font-mono text-xs">
                <div className="text-stone-400 mb-2 flex items-center justify-between text-[11px]">
                  <span>SWITCH ARP SECURITY AUDIT CONSOLE</span>
                  <span className="text-stone-500">REALTIME EVENT STREAM</span>
                </div>
                <div className="space-y-1.5 max-h-48 overflow-y-auto">
                  {arpEventLog.map((log) => (
                    <div
                      key={log.id}
                      className={`text-[11px] leading-relaxed ${
                        log.type === "danger"
                          ? "text-rose-400"
                          : log.type === "blocked"
                          ? "text-amber-400 font-bold"
                          : log.type === "success"
                          ? "text-emerald-400"
                          : "text-stone-400"
                      }`}
                    >
                      [{log.time}] {log.msg}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SIMULATOR 2: DNS Cache Poisoning vs DNSSEC */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                    SIMULATOR 2
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mt-2">
                    DNS Cache Poisoning &amp; DNSSEC Cryptographic Validation
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      Resolver Architecture Mode:
                    </label>
                    <select
                      value={dnsResolverMode}
                      onChange={(e) => setDnsResolverMode(e.target.value)}
                      className="w-full text-xs font-semibold p-2.5 rounded-xl border border-stone-300 bg-white"
                    >
                      <option value="legacy">Legacy DNS (Fixed Source Port 53, 16-bit TxID)</option>
                      <option value="randomized">Port Randomization (Random Port + TxID, 32-bit)</option>
                      <option value="dnssec">DNSSEC Validating (RRSIG + DNSKEY Cryptographic Check)</option>
                    </select>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold text-stone-700 mb-1">
                      <span>Attacker Spoofed Burst Size:</span>
                      <span className="font-mono text-[#ea580c]">{attackerBurstSize} forged pkts</span>
                    </div>
                    <input
                      type="range"
                      min={10}
                      max={2000}
                      step={10}
                      value={attackerBurstSize}
                      onChange={(e) => setAttackerBurstSize(Number(e.target.value))}
                      className="w-full accent-orange-600"
                    />
                    <div className="flex justify-between text-[10px] text-stone-700">
                      <span>10 packets</span>
                      <span>2,000 packets/burst</span>
                    </div>
                  </div>

                  <button
                    onClick={runDnsSimulation}
                    className="w-full py-2.5 bg-stone-900 hover:bg-[#ea580c] text-white rounded-xl text-xs font-bold transition cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Play size={14} />
                    Execute DNS Query &amp; Attack Race
                  </button>
                </div>

                <div className="md:col-span-2 p-5 rounded-2xl bg-[#f6f4ee] border border-stone-200">
                  <div className="text-xs font-bold text-stone-800 mb-2">ENTROPY &amp; VALIDATION ENGINE:</div>
                  <div className="grid grid-cols-2 gap-3 mb-4 text-xs font-mono">
                    <div className="bg-white p-3 rounded-xl border border-stone-200">
                      <span className="text-[10px] text-stone-700 block">TOTAL SEARCH SPACE:</span>
                      <span className="text-stone-900 font-bold">
                        {dnsResolverMode === "legacy" ? "65,536 (2^16)" : "4,294,967,296 (2^32)"}
                      </span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-stone-200">
                      <span className="text-[10px] text-stone-700 block">SIGNATURE VALIDATION:</span>
                      <span className={dnsResolverMode === "dnssec" ? "text-emerald-600 font-bold" : "text-stone-700 font-bold"}>
                        {dnsResolverMode === "dnssec" ? "ENFORCED (RRSIG SHA-256)" : "NONE (Vulnerable)"}
                      </span>
                    </div>
                  </div>

                  {dnsAttackState ? (
                    <div
                      className={`p-4 rounded-xl border text-xs font-mono ${
                        dnsAttackState.poisoned
                          ? "bg-rose-50 border-rose-300 text-rose-950"
                          : dnsResolverMode === "dnssec"
                          ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                          : "bg-blue-50 border-blue-300 text-blue-950"
                      }`}
                    >
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-200">
                        <span className="font-bold">RESOLUTION OUTCOME:</span>
                        <span className="px-2.5 py-0.5 rounded font-bold text-[11px] bg-white border border-current">
                          {dnsAttackState.status}
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed">{dnsAttackState.reason}</p>
                    </div>
                  ) : (
                    <div className="p-4 rounded-xl border border-dashed border-stone-300 text-center text-xs text-stone-700 font-mono">
                      Click &quot;Execute DNS Query &amp; Attack Race&quot; to test the resolver against forged authoritative answers.
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* SIMULATOR 3: uRPF Strict vs Loose Mode */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                    SIMULATOR 3
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mt-2">
                    Unicast Reverse Path Forwarding (uRPF) Strict vs. Loose Mode
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      Router uRPF Configuration:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {["disabled", "strict", "loose"].map((mode) => (
                        <button
                          key={mode}
                          onClick={() => setUrpfMode(mode)}
                          className={`py-2 rounded-xl text-xs font-bold capitalize transition cursor-pointer ${
                            urpfMode === mode
                              ? "bg-[#ea580c] text-white"
                              : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                          }`}
                        >
                          {mode}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      Synthesize Inbound Packet:
                    </label>
                    <select
                      value={`${urpfPacket.srcIp}|${urpfPacket.ingressIface}`}
                      onChange={(e) => {
                        const [srcIp, ingressIface] = e.target.value.split("|");
                        setUrpfPacket({ srcIp, ingressIface });
                      }}
                      className="w-full text-xs font-semibold p-2.5 rounded-xl border border-stone-300 bg-white"
                    >
                      <option value="198.51.100.25|eth0">Customer A (198.51.100.25) arriving on eth0 (Legitimate)</option>
                      <option value="203.0.113.88|eth1">Customer B (203.0.113.88) arriving on eth1 (Legitimate)</option>
                      <option value="198.51.100.50|eth1">Spoofed Customer A arriving on Customer B port (eth1)</option>
                      <option value="8.8.8.8|eth2">External Public IP (8.8.8.8) arriving on Uplink (eth2)</option>
                      <option value="10.0.0.99|eth2">RFC 1918 Bogon (10.0.0.99) arriving on Uplink (eth2)</option>
                    </select>
                  </div>
                </div>

                <div className="md:col-span-2 p-5 rounded-2xl bg-[#f6f4ee] border border-stone-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-stone-800">FORWARDING &amp; SOURCE VALIDATION PIPELINE</span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        urpfEvaluation.color === "emerald"
                          ? "bg-emerald-600 text-white"
                          : urpfEvaluation.color === "rose"
                          ? "bg-rose-600 text-white"
                          : "bg-amber-600 text-white"
                      }`}
                    >
                      {urpfEvaluation.action}
                    </span>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-stone-200 text-xs font-mono space-y-2 mb-3">
                    <div className="text-stone-700">Packet Ingress: <span className="text-stone-900 font-bold">{urpfPacket.ingressIface}</span> | Source IP: <span className="text-stone-900 font-bold">{urpfPacket.srcIp}</span></div>
                    <div className="text-stone-700">FIB Lookup for Source IP: {urpfPacket.srcIp.startsWith("198.51.100.") ? "eth0 (Best Path)" : urpfPacket.srcIp.startsWith("203.0.113.") ? "eth1 (Best Path)" : urpfPacket.srcIp.startsWith("8.8.8.") ? "eth2 (Default Route)" : "NO ROUTE (Bogon)"}</div>
                  </div>

                  <p className="text-xs text-stone-700 leading-relaxed font-sans">{urpfEvaluation.reason}</p>
                </div>
              </div>
            </div>

            {/* SIMULATOR 4: TCP SYN Flood & SYN Cookie Resilience */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                    SIMULATOR 4
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mt-2">
                    TCP SYN Flood &amp; SYN Cookie Resilience Engine (RFC 4987)
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-bold text-stone-700 mb-1">
                      <span>Attack Ingress Volume:</span>
                      <span className="font-mono text-rose-600 font-bold">{synRate} SYNs/sec</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={10000}
                      step={250}
                      value={synRate}
                      onChange={(e) => setSynRate(Number(e.target.value))}
                      className="w-full accent-rose-600"
                    />
                    <div className="flex justify-between text-[10px] text-stone-700">
                      <span>0 (Clean)</span>
                      <span>10,000 SYNs/sec</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      Kernel SYN Cookie Protection:
                    </label>
                    <button
                      onClick={() => setSynCookiesEnabled(!synCookiesEnabled)}
                      className={`w-full py-2.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center justify-center gap-2 ${
                        synCookiesEnabled
                          ? "bg-emerald-600 text-white"
                          : "bg-stone-200 text-stone-700 hover:bg-stone-300"
                      }`}
                    >
                      <Shield size={14} />
                      {synCookiesEnabled ? "SYN Cookies ENABLED (RFC 4987)" : "SYN Cookies DISABLED"}
                    </button>
                  </div>

                  <button
                    onClick={runSynSimulation}
                    className="w-full py-2.5 bg-stone-900 hover:bg-[#ea580c] text-white rounded-xl text-xs font-bold transition cursor-pointer"
                  >
                    Simulate 5-Second Traffic Burst
                  </button>
                </div>

                <div className="md:col-span-2 p-5 rounded-2xl bg-[#f6f4ee] border border-stone-200">
                  <div className="text-xs font-bold text-stone-800 mb-3">SERVER NETWORK STACK TELEMETRY:</div>

                  <div className="grid grid-cols-3 gap-3 mb-4 text-xs font-mono">
                    <div className="bg-white p-3 rounded-xl border border-stone-200">
                      <span className="text-[10px] text-stone-700 block">BACKLOG QUEUE:</span>
                      <span className={`text-base font-bold ${synSimState.backlogUsage >= 500 ? "text-rose-600" : "text-stone-900"}`}>
                        {synSimState.backlogUsage} / 512
                      </span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-stone-200">
                      <span className="text-[10px] text-stone-700 block">TCB KERNEL MEMORY:</span>
                      <span className="text-base font-bold text-stone-900">{synSimState.tcbMemoryKb} KB</span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-stone-200">
                      <span className="text-[10px] text-stone-700 block">LEGIT SUCCESS RATE:</span>
                      <span className={`text-base font-bold ${synSimState.legitSuccessRate < 50 ? "text-rose-600" : "text-emerald-600"}`}>
                        {synSimState.legitSuccessRate}%
                      </span>
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-mono">
                    <span className="text-[10px] text-stone-700 block">SERVER HEALTH STATUS:</span>
                    <span className="text-stone-900 font-semibold">{synSimState.serverStatus}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SIMULATOR 5: Switch Hardening & VLAN Hopping */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                    SIMULATOR 5
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mt-2">
                    Switch Hardening &amp; 802.1Q VLAN Hopping Defense Sandbox
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      Switchport Mode:
                    </label>
                    <select
                      value={switchConfig.portMode}
                      onChange={(e) => setSwitchConfig({ ...switchConfig, portMode: e.target.value })}
                      className="w-full text-xs font-semibold p-2 rounded-xl border border-stone-300 bg-white"
                    >
                      <option value="dynamic">Dynamic Auto / Desirable</option>
                      <option value="access">switchport mode access (Hardened)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      DTP Negotiation:
                    </label>
                    <select
                      value={switchConfig.dtpNegotiation ? "true" : "false"}
                      onChange={(e) => setSwitchConfig({ ...switchConfig, dtpNegotiation: e.target.value === "true" })}
                      className="w-full text-xs font-semibold p-2 rounded-xl border border-stone-300 bg-white"
                    >
                      <option value="true">DTP Frames Transmitted</option>
                      <option value="false">switchport nonegotiate (Disabled)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      Trunk Native VLAN:
                    </label>
                    <select
                      value={switchConfig.nativeVlan}
                      onChange={(e) => setSwitchConfig({ ...switchConfig, nativeVlan: Number(e.target.value) })}
                      className="w-full text-xs font-semibold p-2 rounded-xl border border-stone-300 bg-white"
                    >
                      <option value={1}>VLAN 1 (Default - Vulnerable to double tagging)</option>
                      <option value={999}>VLAN 999 (Isolated - Hardened)</option>
                    </select>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button
                      onClick={testDtpSpoofing}
                      className="flex-1 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold transition cursor-pointer"
                    >
                      Test DTP Spoof
                    </button>
                    <button
                      onClick={testDoubleTagging}
                      className="flex-1 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold transition cursor-pointer"
                    >
                      Test Double Tag
                    </button>
                  </div>
                </div>

                <div className="md:col-span-2 p-5 rounded-2xl bg-[#f6f4ee] border border-stone-200">
                  <div className="text-xs font-bold text-stone-800 mb-2">LAYER 2 FRAME DISSECTION &amp; REACTION:</div>
                  {vlanAttackResult ? (
                    <div
                      className={`p-4 rounded-xl border text-xs font-mono space-y-2 ${
                        vlanAttackResult.color === "emerald"
                          ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                          : "bg-rose-50 border-rose-300 text-rose-950"
                      }`}
                    >
                      <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                        <span className="font-bold">{vlanAttackResult.attack}</span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${vlanAttackResult.color === "emerald" ? "bg-emerald-600 text-white" : "bg-rose-600 text-white"}`}>
                          {vlanAttackResult.badge}
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed">{vlanAttackResult.trace}</p>
                    </div>
                  ) : (
                    <div className="p-8 rounded-xl border border-dashed border-stone-300 text-center text-xs text-stone-700 font-mono">
                      Trigger an exploit test on the left to observe switch reaction.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: HANDS-ON LAB 19.1 */}
        {activeTab === "lab" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
              <div>
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  LAB 19.1
                </span>
                <h2 className="text-2xl font-bold text-stone-900 mt-2">
                  Hardening Enterprise Switching, Routing, and Handshakes
                </h2>
                <p className="text-stone-700 text-xs mt-1">
                  Complete the 8-point security validation checklist against your simulated infrastructure.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-stone-700">
                  Progress: {Object.values(checkedItems).filter(Boolean).length} / 8 Completed
                </span>
                <button
                  onClick={() => setCheckedItems({})}
                  className="px-3 py-1.5 rounded-xl border border-stone-300 text-xs font-semibold text-stone-700 hover:bg-stone-100 transition cursor-pointer"
                >
                  Reset Checklist
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  id: 1,
                  title: "1. Capture & Isolate Rogue ARP Poisoning Broadcasts",
                  cmd: "sudo tcpdump -i eth0 -nn -e -vv 'arp and ether proto 0x0806'",
                  desc: "Identify unauthorized MAC addresses claiming gateway IP 192.168.1.1 across local switch segment.",
                },
                {
                  id: 2,
                  title: "2. Configure DHCP Snooping and Identify Trusted Uplink",
                  cmd: "Switch(config)# ip dhcp snooping\nSwitch(config)# ip dhcp snooping vlan 10,20\nSwitch(config-if)# interface GigabitEthernet0/1\nSwitch(config-if)# ip dhcp snooping trust",
                  desc: "Classify access ports as untrusted while designating the core distribution link as trusted.",
                },
                {
                  id: 3,
                  title: "3. Enable Dynamic ARP Inspection (DAI) on Access VLANs",
                  cmd: "Switch(config)# ip arp inspection vlan 10,20\nSwitch(config-if)# interface range Gi0/2 - 24\nSwitch(config-if)# ip arp inspection limit rate 15",
                  desc: "Validate sender IP/MAC pairs against DHCP snooping table with hardware burst rate limiting.",
                },
                {
                  id: 4,
                  title: "4. Harden Access Switchports Against DTP Negotiation",
                  cmd: "Switch(config-if-range)# switchport mode access\nSwitch(config-if-range)# switchport nonegotiate\nSwitch(config-if-range)# spanning-tree portfast\nSwitch(config-if-range)# spanning-tree bpduguard enable",
                  desc: "Permanently eliminate dynamic trunk negotiation and disable rogue switch bridge injections.",
                },
                {
                  id: 5,
                  title: "5. Remap Trunk Native VLAN to Dedicated Unused ID",
                  cmd: "Switch(config-if)# interface GigabitEthernet0/1\nSwitch(config-if)# switchport trunk encapsulation dot1q\nSwitch(config-if)# switchport mode trunk\nSwitch(config-if)# switchport trunk native vlan 999",
                  desc: "Mitigate 802.1Q double-tagging attacks by isolating untagged trunk traffic into null VLAN 999.",
                },
                {
                  id: 6,
                  title: "6. Enable Unicast Reverse Path Forwarding (uRPF Strict)",
                  cmd: "Router(config-if)# interface GigabitEthernet0/0\nRouter(config-if)# ip verify unicast source reachable-via rx",
                  desc: "Drop spoofed ingress traffic on edge customer interfaces whose return path deviates from the arriving interface.",
                },
                {
                  id: 7,
                  title: "7. Enable Kernel-Level TCP SYN Cookie Protection",
                  cmd: "sudo sysctl -w net.ipv4.tcp_syncookies=1\nsudo sysctl -w net.ipv4.tcp_max_syn_backlog=4096",
                  desc: "Activate RFC 4987 stateless handshake hashing to survive multi-gigabit half-open connection floods.",
                },
                {
                  id: 8,
                  title: "8. Validate Cryptographic DNSSEC Trust Chain",
                  cmd: "dig +dnssec +multiline @8.8.8.8 cloudflare.com A",
                  desc: "Confirm presence of authentic RRSIG, DNSKEY, and DS records with authenticated data (ad) flag set.",
                },
              ].map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`p-4 rounded-2xl border transition cursor-pointer flex items-start gap-4 ${
                    checkedItems[item.id]
                      ? "bg-emerald-50/50 border-emerald-300"
                      : "bg-[#f6f4ee] border-stone-200 hover:border-stone-300"
                  }`}
                >
                  <div className="pt-0.5">
                    {checkedItems[item.id] ? (
                      <CheckCircle2 className="text-emerald-600" size={20} />
                    ) : (
                      <div className="w-5 h-5 rounded-md border-2 border-stone-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-stone-900">{item.title}</h4>
                    <p className="text-xs text-stone-600 my-1">{item.desc}</p>
                    <div className="relative mt-2">
                      <pre className="p-3 bg-stone-950 text-stone-200 rounded-xl font-mono text-[11px] overflow-x-auto whitespace-pre-wrap">
                        {item.cmd}
                      </pre>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopy(item.cmd, `lab-${item.id}`);
                        }}
                        className="absolute top-2 right-2 p-1.5 rounded-lg bg-stone-800 text-stone-300 hover:text-white transition cursor-pointer"
                        title="Copy command"
                      >
                        {copiedKey === `lab-${item.id}` ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: KNOWLEDGE CHECK (10 Questions) */}
        {activeTab === "quiz" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
              <div>
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  ASSESSMENT
                </span>
                <h2 className="text-2xl font-bold text-stone-900 mt-2">
                  Module 19 Technical Knowledge Check
                </h2>
                <p className="text-stone-700 text-xs mt-1">
                  10 comprehensive engineering questions on ARP, DNSSEC, uRPF, SYN cookies, and Layer 2 defenses.
                </p>
              </div>

              {quizSubmitted ? (
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-xs text-stone-700">Final Score</div>
                    <div className="text-lg font-bold font-mono text-[#ea580c]">
                      {calculateScore()} / {quizQuestions.length} ({Math.round((calculateScore() / quizQuestions.length) * 100)}%)
                    </div>
                  </div>
                  <button
                    onClick={resetQuiz}
                    className="px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-[#ea580c] transition cursor-pointer"
                  >
                    Retake Quiz
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setQuizSubmitted(true)}
                  disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition ${
                    Object.keys(quizAnswers).length === quizQuestions.length
                      ? "bg-[#ea580c] text-white hover:bg-orange-700 cursor-pointer"
                      : "bg-stone-200 text-stone-700 cursor-not-allowed"
                  }`}
                >
                  Submit Answers ({Object.keys(quizAnswers).length}/{quizQuestions.length})
                </button>
              )}
            </div>

            <div className="space-y-6">
              {quizQuestions.map((q, idx) => (
                <div key={q.id} className="p-5 rounded-2xl bg-[#f6f4ee] border border-stone-200">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="w-6 h-6 rounded-lg bg-stone-900 text-white text-xs font-mono font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <h4 className="text-sm font-bold text-stone-900 leading-snug">{q.question}</h4>
                  </div>

                  <div className="space-y-2 mt-3 pl-9">
                    {q.options.map((opt, optIdx) => {
                      const isSelected = quizAnswers[q.id] === optIdx;
                      const isCorrect = q.correct === optIdx;
                      let btnStyle = "bg-white border-stone-200 text-stone-800 hover:border-stone-400";

                      if (quizSubmitted) {
                        if (isCorrect) {
                          btnStyle = "bg-emerald-100 border-emerald-400 text-emerald-950 font-bold";
                        } else if (isSelected && !isCorrect) {
                          btnStyle = "bg-rose-100 border-rose-400 text-rose-950 font-medium";
                        } else {
                          btnStyle = "bg-white/50 border-stone-200 text-stone-700 opacity-60";
                        }
                      } else if (isSelected) {
                        btnStyle = "bg-orange-50 border-[#ea580c] text-[#ea580c] font-bold";
                      }

                      return (
                        <button
                          key={optIdx}
                          disabled={quizSubmitted}
                          onClick={() => handleQuizSelect(q.id, optIdx)}
                          className={`w-full text-left p-3 rounded-xl border text-xs transition cursor-pointer flex items-center justify-between ${btnStyle}`}
                        >
                          <span>{opt}</span>
                          {quizSubmitted && isCorrect && <CheckCircle2 size={15} className="text-emerald-700 shrink-0 ml-2" />}
                        </button>
                      );
                    })}
                  </div>

                  {quizSubmitted && (
                    <div className="mt-3 pl-9 text-xs text-stone-600 bg-stone-100 p-3 rounded-xl border border-stone-200">
                      <span className="font-bold text-stone-800 block mb-0.5">Rationale:</span>
                      {q.explanation}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: SRE INCIDENT DELIVERABLE */}
        {activeTab === "audit" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
              <div>
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  DELIVERABLE TEMPLATE
                </span>
                <h2 className="text-2xl font-bold text-stone-900 mt-2">
                  SRE Network Incident &amp; Defensive Countermeasures Audit
                </h2>
                <p className="text-stone-700 text-xs mt-1">
                  Ready-to-use Markdown post-incident review template for SOC teams, SREs, and compliance audits.
                </p>
              </div>

              <button
                onClick={() => handleCopy(incidentAuditReport, "incident-report")}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-[#ea580c] transition cursor-pointer shadow-sm"
              >
                {copiedKey === "incident-report" ? (
                  <>
                    <Check size={14} className="text-emerald-400" />
                    <span>Copied Markdown!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy Full Report Template</span>
                  </>
                )}
              </button>
            </div>

            <div className="bg-stone-950 rounded-2xl p-5 border border-stone-800 font-mono text-[11px] text-stone-300 max-h-96 overflow-y-auto leading-relaxed whitespace-pre-wrap">
              {incidentAuditReport}
            </div>
          </div>
        )}

        {/* Footer Navigation Bar */}
        <div className="mt-10 pt-6 border-t border-[#e7e3da] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => {
              navigate("/learning/networks/packet-analysis");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#e7e3da] bg-white text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#ea580c] transition cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 18 — Packet Analysis &amp; Recon</span>
          </button>

          <button
            onClick={() => {
              navigate("/learning/networks/ids-ips-soc");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 text-xs font-bold text-white hover:bg-[#ea580c] transition cursor-pointer"
          >
            <span>Next: Module 20 — IDS/IPS, SOC Monitoring &amp; Incident Response</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
