import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  ShieldAlert,
  ShieldCheck,
  Lock,
  Unlock,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Copy,
  Check,
  RefreshCw,
  Play,
  Terminal,
  Network,
  Eye,
  Sliders,
  Key,
  Database,
  Server,
  Cpu,
  Globe,
  FileText,
  HelpCircle,
  Activity,
  Layers,
  Zap,
} from "lucide-react";
import ModuleNav from "./ModuleNav";

export default function NetworkThreatModeling() {
  const navigate = useNavigate();

  // Active navigation tab
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
  // SIMULATOR 1: STRIDE Threat Modeling Engine
  // ==========================================
  const [selectedStrideComponent, setSelectedStrideComponent] = useState("reverse-proxy");
  const strideComponents = {
    "reverse-proxy": {
      name: "Public Reverse Proxy / Load Balancer",
      type: "Perimeter Ingress",
      trustBoundary: "Internet -> DMZ Boundary",
      strideThreats: [
        { letter: "S", category: "Spoofing", desc: "Attacker forges X-Forwarded-For headers to bypass IP geo-blocking.", control: "Proxy strips client XFF and re-appends trusted peer IP." },
        { letter: "T", category: "Tampering", desc: "HTTP request smuggling desynchronizes front-end and back-end proxies.", control: "Strict HTTP/2 or HTTP/1.1 content-length and chunked encoding validation." },
        { letter: "R", category: "Repudiation", desc: "Attacker executes brute force attacks without originating IP recorded.", control: "Immutable centralized access logs with client TLS fingerprinting." },
        { letter: "I", category: "Information Disclosure", desc: "Detailed server stack traces and version headers leak in HTTP 500 responses.", control: "Custom error pages and Server: header suppression." },
        { letter: "D", category: "Denial of Service", desc: "SYN flood or Slowloris keeps HTTP sockets open until thread pool exhausts.", control: "SYN cookies, aggressive idle client timeouts, and token-bucket rate limiting." },
        { letter: "E", category: "Elevation of Privilege", desc: "Remote code execution via vulnerable proxy software (e.g. OpenSSL flaw).", control: "Least-privilege unprivileged system user, seccomp filters, and auto-patching." },
      ],
    },
    "app-service": {
      name: "Private Application Microservice (Node.js/Go)",
      type: "Application Core",
      trustBoundary: "Public Ingress -> Private Subnet",
      strideThreats: [
        { letter: "S", category: "Spoofing", desc: "Rogue microservice masquerades as payment worker to receive customer cards.", control: "Mutual TLS (mTLS) with SPIFFE/SPIRE cryptographic workload identity." },
        { letter: "T", category: "Tampering", desc: "Attacker injects malicious SQL statements into unsanitized user query parameters.", control: "Parameterized queries, prepared statements, and ORM abstractions." },
        { letter: "R", category: "Repudiation", desc: "Privileged administrator deletes customer transactions without audit trace.", control: "Write-once read-many (WORM) audit trails signed with asymmetric private keys." },
        { letter: "I", category: "Information Disclosure", desc: "Application logs output raw JWT tokens and credit card numbers.", control: "Automated log redaction filters and zero-plaintext storage policies." },
        { letter: "D", category: "Denial of Service", desc: "Complex regex search triggers catastrophic backtracking (ReDoS) consuming 100% CPU.", control: "Input length constraints, non-backtracking regex engines, and worker timeouts." },
        { letter: "E", category: "Elevation of Privilege", desc: "Command injection flaw allows shell escape from container to underlying host.", control: "Rootless container runtime, read-only root filesystems, and minimal distroless images." },
      ],
    },
    "customer-db": {
      name: "Customer Database (PostgreSQL)",
      type: "Data Persistence",
      trustBoundary: "Application Tier -> Database Subnet",
      strideThreats: [
        { letter: "S", category: "Spoofing", desc: "Compromised workstation connects using stolen database master credentials.", control: "Kerberos / IAM database authentication with short-lived tokens and mTLS." },
        { letter: "T", category: "Tampering", desc: "Direct database record updates bypassing application validation logic.", control: "Row-level security (RLS), trigger-based audit verification, and write controls." },
        { letter: "R", category: "Repudiation", desc: "DBA alters billing table and clears PostgreSQL transaction WAL logs.", control: "Synchronous WAL shipping to an isolated, append-only security auditing vault." },
        { letter: "I", category: "Information Disclosure", desc: "Unencrypted database backups stolen from cloud storage bucket.", control: "Transparent Data Encryption (TDE) with customer-managed KMS envelope encryption." },
        { letter: "D", category: "Denial of Service", desc: "Expensive unindexed table scan locks table, exhausting connection pool.", control: "Strict query statement timeouts, max connections limits, and connection pooling (PgBouncer)." },
        { letter: "E", category: "Elevation of Privilege", desc: "Application database user has superuser privileges instead of SELECT/INSERT only.", control: "Strict least-privilege role-based access control (RBAC) per microservice." },
      ],
    },
    "guest-wifi": {
      name: "Guest Wi-Fi Access Point",
      type: "Untrusted Perimeter",
      trustBoundary: "Visitor Devices -> Corporate Backbone",
      strideThreats: [
        { letter: "S", category: "Spoofing", desc: "Rogue AP broadcasts corporate SSID to perform evil twin credential harvesting.", control: "802.1X EAP-TLS with server certificate validation enforced on client profiles." },
        { letter: "T", category: "Tampering", desc: "ARP spoofing / poisoning intercepts traffic of other connected guest clients.", control: "Client isolation (Private VLAN / PSPF) and Dynamic ARP Inspection (DAI)." },
        { letter: "R", category: "Repudiation", desc: "Guest user initiates copyright infringement without device MAC recording.", control: "Captive portal logging, DHCP lease archiving, and external IP NAT mapping." },
        { letter: "I", category: "Information Disclosure", desc: "Guest Wi-Fi network route permits scanning of corporate printer subnets.", control: "Default-deny ACLs dropping all RFC 1918 private ranges; direct internet egress only." },
        { letter: "D", category: "Denial of Service", desc: "Single guest device runs BitTorrent, exhausting upstream branch bandwidth.", control: "Per-device bandwidth throttling and application-layer QoS packet shaping." },
        { letter: "E", category: "Elevation of Privilege", desc: "VLAN hopping attack escapes guest VLAN 99 into corporate VLAN 10.", control: "Disable DTP (Dynamic Trunking Protocol) and set unused native VLANs." },
      ],
    },
  };

  // ==========================================
  // SIMULATOR 2: DoS Queue Capacity Simulator
  // ==========================================
  const [legitRate, setLegitRate] = useState(40); // 0 - 80 req/s
  const [attackRate, setAttackRate] = useState(35); // 0 - 150 req/s
  const [dosMitigation, setDosMitigation] = useState("none"); // "none" | "token-bucket" | "cloud-scrubber"
  const serverCapacity = 100; // max 100 req/s
  const maxQueue = 80;

  const dosMetrics = useMemo(() => {
    let effectiveLegit = legitRate;
    let effectiveAttack = attackRate;

    if (dosMitigation === "cloud-scrubber") {
      effectiveAttack = 0; // Scrubbed 100% at edge
    } else if (dosMitigation === "token-bucket") {
      effectiveAttack = Math.min(attackRate, 15); // Rate limited to small burst
    }

    const totalArriving = effectiveLegit + effectiveAttack;
    const isOverloaded = totalArriving > serverCapacity;
    const excess = Math.max(0, totalArriving - serverCapacity);
    const queueDepth = Math.min(maxQueue, Math.round(excess * 1.5));
    const waitTimeSeconds = (queueDepth / serverCapacity).toFixed(2);

    let legitDropRate = 0;
    if (queueDepth >= maxQueue) {
      // Tail drop: legitimate requests are dropped proportionally to attack share
      const attackRatio = totalArriving > 0 ? effectiveAttack / totalArriving : 0;
      legitDropRate = Math.round(attackRatio * 100);
    }

    const servedTotal = Math.min(totalArriving, serverCapacity);
    const servedLegit = Math.round(servedTotal * (effectiveLegit / (totalArriving || 1)));

    return {
      totalArriving,
      effectiveLegit,
      effectiveAttack,
      queueDepth,
      waitTimeSeconds,
      legitDropRate,
      servedTotal,
      servedLegit,
      isOverloaded,
    };
  }, [legitRate, attackRate, dosMitigation]);

  // ==========================================
  // SIMULATOR 3: Trust Boundary Lateral Movement
  // ==========================================
  const [networkArchitecture, setNetworkArchitecture] = useState("flat"); // "flat" | "zero-trust"
  const [attackStep, setAttackStep] = useState(0); // 0: Start, 1: Scan, 2: Boundary, 3: Crown Jewel
  const [attackLog, setAttackLog] = useState([
    "Initial foothold established on compromised employee workstation (10.10.1.45) via spear-phishing payload.",
  ]);

  const advanceAttackStep = () => {
    if (attackStep >= 3) return;
    const nextStep = attackStep + 1;
    setAttackStep(nextStep);

    if (networkArchitecture === "flat") {
      if (nextStep === 1) {
        setAttackLog((prev) => [
          "Step 1: Attacker executes ARP broadcast and Nmap sweep. Discovered internal database at 10.10.5.20:5432 with ZERO segmentation.",
          ...prev,
        ]);
      } else if (nextStep === 2) {
        setAttackLog((prev) => [
          "Step 2: Attacker traverses boundary seamlessly. Flat Layer 2/3 network has no firewall or security group between workstation and database.",
          ...prev,
        ]);
      } else if (nextStep === 3) {
        setAttackLog((prev) => [
          "Step 3: CROWN JEWEL COMPROMISED! Attacker brute-forces default PostgreSQL credentials. 500,000 customer PII records exfiltrated.",
          ...prev,
        ]);
      }
    } else {
      // Zero Trust
      if (nextStep === 1) {
        setAttackLog((prev) => [
          "Step 1: Attacker attempts Nmap sweep. Private VLAN client isolation drops ARP probes. No other workstation responds.",
          ...prev,
        ]);
      } else if (nextStep === 2) {
        setAttackLog((prev) => [
          "Step 2: BLOCKED! Attacker attempts direct TCP connection to Database 10.10.5.20. Stateful Security Group and Microsegmentation firewall silently drop SYN packet. Security alert fired to SIEM.",
          ...prev,
        ]);
      } else if (nextStep === 3) {
        setAttackLog((prev) => [
          "Step 3: ATTACK THWARTED! Compromised host automatically quarantined by 802.1X NAC. Crown jewel database remains completely isolated.",
          ...prev,
        ]);
      }
    }
  };

  const resetAttackSim = () => {
    setAttackStep(0);
    setAttackLog(["Initial foothold established on compromised employee workstation (10.10.1.45) via spear-phishing payload."]);
  };

  // ==========================================
  // SIMULATOR 4: Cryptographic Handshake & Channel
  // ==========================================
  const [channelProtocol, setChannelProtocol] = useState("tls13"); // "plaintext" | "tls13"
  const [replayAttempted, setReplayAttempted] = useState(false);
  const [replayResult, setReplayResult] = useState(null);

  const simulateReplayAttack = () => {
    setReplayAttempted(true);
    if (channelProtocol === "plaintext") {
      setReplayResult({
        status: "SUCCESSFUL REPLAY EXPLOIT",
        details: "Server accepted duplicated HTTP POST /transfer?amount=5000 payload! Duplicate transaction processed because plaintext HTTP lacks cryptographic nonces or freshness checks.",
        color: "rose",
      });
    } else {
      setReplayResult({
        status: "REPLAY ATTEMPT REJECTED",
        details: "TLS 1.3 / AEAD stack detected duplicated TCP sequence number and expired session nonce. Packet discarded immediately with BadRecordMAC alert.",
        color: "emerald",
      });
    }
  };

  // ==========================================
  // SIMULATOR 5: Risk Scoring Matrix (Likelihood x Impact)
  // ==========================================
  const [selectedRiskScenario, setSelectedRiskScenario] = useState("public-db");
  const [controlApplied, setControlApplied] = useState(false);

  const riskScenarios = {
    "public-db": {
      title: "Publicly Reachable PostgreSQL Database (Port 5432 open to 0.0.0.0/0)",
      inherentLikelihood: 5, // Almost Certain
      inherentImpact: 5, // Catastrophic
      residualLikelihood: 1, // Rare
      residualImpact: 3, // Moderate
      controlDescription: "Remove public IP, place DB in private isolated subnet, restrict ingress to App Security Group only.",
    },
    "weak-admin-ssh": {
      title: "Administrator SSH using Plaintext Passwords without MFA",
      inherentLikelihood: 4, // Likely
      inherentImpact: 5, // Catastrophic
      residualLikelihood: 1, // Rare
      residualImpact: 2, // Minor
      controlDescription: "Enforce Hardware Security Key (FIDO2 WebAuthn) + Short-Lived SSH Certificates via Identity-Aware Bastion.",
    },
    "guest-vlan-leak": {
      title: "Guest Wi-Fi Routed Directly to Corporate Server Subnet",
      inherentLikelihood: 3, // Possible
      inherentImpact: 4, // Major
      residualLikelihood: 1, // Rare
      residualImpact: 1, // Negligible
      controlDescription: "Deploy Private VLANs, block RFC 1918 traffic at edge switch, force guest traffic to dedicated internet-only NAT.",
    },
    "api-ddos": {
      title: "Unprotected Public REST API Vulnerable to HTTP Flood",
      inherentLikelihood: 4, // Likely
      inherentImpact: 4, // Major
      residualLikelihood: 2, // Unlikely
      residualImpact: 2, // Minor
      controlDescription: "Deploy Cloudflare Anycast DDoS protection, token-bucket rate limiting, and cache static responses at edge CDN.",
    },
  };

  const currentRisk = riskScenarios[selectedRiskScenario];
  const likelihood = controlApplied ? currentRisk.residualLikelihood : currentRisk.inherentLikelihood;
  const impact = controlApplied ? currentRisk.residualImpact : currentRisk.inherentImpact;
  const riskScore = likelihood * impact;

  const getRiskLevelBadge = (score) => {
    if (score >= 15) return { label: "CRITICAL RISK", bg: "bg-rose-600 text-white" };
    if (score >= 10) return { label: "HIGH RISK", bg: "bg-orange-600 text-white" };
    if (score >= 5) return { label: "MEDIUM RISK", bg: "bg-amber-500 text-white" };
    return { label: "LOW RISK", bg: "bg-emerald-600 text-white" };
  };

  // ==========================================
  // QUIZ STATE (10 Questions)
  // ==========================================
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "Which pillar of the CIA triad is violated if an attacker silently alters a financial transaction amount in transit without the sender or receiver detecting it?",
      options: [
        "Confidentiality",
        "Integrity",
        "Availability",
        "Non-repudiation",
      ],
      correct: 1,
      explanation:
        "Integrity ensures that data, configurations, and communications cannot be modified or tampered with by unauthorized parties without detection. When an attacker modifies transaction contents in flight, integrity is violated.",
    },
    {
      id: 2,
      question: "In threat modeling, what is the precise definition of a 'trust boundary'?",
      options: [
        "The physical perimeter fence around a data center building",
        "A logical or physical point where security assumptions, authentication requirements, privileges, or access rules change",
        "The maximum bandwidth allocated to an internet circuit",
        "The IP subnet mask that divides a /24 network into two /25 networks",
      ],
      correct: 1,
      explanation:
        "A trust boundary is any interface where security assumptions change—such as between the untrusted internet and a public load balancer, between a web application and its database, or between a guest Wi-Fi and corporate systems.",
    },
    {
      id: 3,
      question: "In the STRIDE threat-modeling framework, which threat category corresponds to an attacker modifying an application's database records?",
      options: [
        "Spoofing",
        "Tampering",
        "Repudiation",
        "Information Disclosure",
      ],
      correct: 1,
      explanation:
        "In STRIDE: S = Spoofing, T = Tampering (unauthorized modification of data or code), R = Repudiation, I = Information Disclosure, D = Denial of Service, E = Elevation of Privilege.",
    },
    {
      id: 4,
      question: "Why does symmetric encryption (e.g. AES-256 in CBC mode) alone NOT guarantee that a message was safe from a replay attack?",
      options: [
        "Because symmetric encryption can only encrypt text up to 128 characters",
        "Because an attacker can intercept valid encrypted ciphertext and retransmit it verbatim; without cryptographic nonces, sequence numbers, or timestamps, the receiver will decrypt and execute it as a fresh valid command",
        "Because AES keys expire every 60 seconds automatically",
        "Because replay attacks only occur on wireless networks",
      ],
      correct: 1,
      explanation:
        "Encryption provides confidentiality, not freshness. An attacker who cannot read the encrypted payload can still capture the ciphertext and retransmit it to duplicate an action (e.g. replaying an encrypted bank transfer). Secure protocols must include nonces or sequence numbers.",
    },
    {
      id: 5,
      question: "What is the critical difference between a cryptographic hash (e.g. SHA-256) and a Message Authentication Code (HMAC)?",
      options: [
        "A cryptographic hash uses 512 bits, while an HMAC uses only 16 bits",
        "A plain cryptographic hash can be computed by anyone who possesses the message; an HMAC incorporates a shared secret key, proving both data integrity AND authentic origin",
        "A hash is reversible, while an HMAC is permanent",
        "Hashes are used for digital video, while HMACs are used exclusively for email",
      ],
      correct: 1,
      explanation:
        "Anyone can compute SHA-256(data). An attacker modifying the data can simply recompute a new SHA-256 hash. An HMAC requires knowledge of a shared secret key (HMAC = H(Key || H(Key || message))), guaranteeing that only an authorized key-holder could have generated the tag.",
    },
    {
      id: 6,
      question: "What does a valid TLS 1.3 certificate guarantee to a connecting client?",
      options: [
        "It guarantees the server's application code is bug-free and will never suffer an SQL injection attack",
        "It authenticates the server's cryptographic identity against trusted Certificate Authorities (CAs) and enables an encrypted, tamper-resistant communication channel",
        "It guarantees that data stored inside the server's database is encrypted at rest",
        "It guarantees that the website is honest, legal, and non-malicious",
      ],
      correct: 1,
      explanation:
        "TLS guarantees cryptographic channel security (confidentiality and integrity in transit) and server identity verification. It does NOT guarantee that the backend code is secure, that the site is not a phishing scam, or that data at rest is protected.",
    },
    {
      id: 7,
      question: "In the qualitative risk assessment model (Risk = Likelihood x Impact), why can a 'low likelihood' event still demand urgent mitigation?",
      options: [
        "Because low-likelihood events always happen first in software deployments",
        "Because if the consequence (Impact) is catastrophic—such as complete database loss or total corporate bankruptcy—the overall risk score remains critically high",
        "Because likelihood automatically increases by 10% every month an issue remains open",
        "Because NIST guidelines mandate treating all low-likelihood risks as emergencies",
      ],
      correct: 1,
      explanation:
        "Risk is a combination of probability and consequence. A catastrophic event (e.g. total unencrypted customer database exfiltration leading to massive regulatory fines and business shutdown) carries extreme severity even if the initial probability appears moderate or low.",
    },
    {
      id: 8,
      question: "What is the principle of Defense in Depth in network security?",
      options: [
        "Deploying multiple layers of complementary, independent security controls so that the failure of any single control does not compromise the entire system",
        "Installing the exact same brand of firewall at every single network switch",
        "Using 4096-bit encryption keys instead of 2048-bit keys",
        "Burying fiber optic cables at least 10 feet underground",
      ],
      correct: 0,
      explanation:
        "Defense in depth recognizes that any individual control (perimeter firewall, WAF, password) can fail or be bypassed. By layering independent controls (perimeter filter + subnet segmentation + host firewall + least-privilege DB role + encryption), an attacker who breaches one layer is stopped by the next.",
    },
    {
      id: 9,
      question: "How does Dynamic ARP Inspection (DAI) on an enterprise Ethernet switch defend against Man-in-the-Middle (MitM) ARP poisoning?",
      options: [
        "It disables all ARP packets on the local area network",
        "It intercepts and validates ARP packets against the switch's DHCP snooping binding database, dropping forged ARP responses that try to redirect traffic to an attacker's MAC",
        "It encrypts all Ethernet frame preambles with AES-128",
        "It forces all hosts to use IPv6 instead of IPv4",
      ],
      correct: 1,
      explanation:
        "DAI tracks IP-to-MAC bindings established by trusted DHCP transactions. If an attacker on an untrusted port sends an unsolicited ARP reply claiming to be the default gateway IP, the switch checks the binding table, detects the forgery, and drops the packet.",
    },
    {
      id: 10,
      question: "What does the Zero-Trust principle of 'Assume Breach' dictate for network architecture?",
      options: [
        "Assuming that all employees are active corporate spies and shutting down remote work",
        "Designing networks under the premise that an attacker already has a foothold inside the internal perimeter; enforcing microsegmentation, least privilege, and continuous authentication to prevent lateral movement",
        "Never connecting any servers to the internet under any circumstances",
        "Formatting all hard drives every 24 hours to wipe malware",
      ],
      correct: 1,
      explanation:
        "'Assume Breach' shifts defense from purely defending a perimeter to containing blast radius. It requires verifying every transaction, isolating workloads into microsegmented zones, and restricting lateral movement so that a compromised laptop cannot reach core production databases.",
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

  // Copyable Markdown Threat Model & Risk Assessment Template
  const threatModelAuditReportTemplate = `# PRODUCTION NETWORK SECURITY THREAT MODEL & RISK ASSESSMENT
**System Scope:** Multi-Tier Web Application & Enterprise LAN
**Auditor / Architect:** Principal Infrastructure & Network Security SRE
**Standards:** NIST SP 800-30 Rev. 1, NIST SP 800-154 & STRIDE Methodology
**Date:** ${new Date().toISOString().split("T")[0]}

---

## 1. ASSET INVENTORY & CIA IMPACT CLASSIFICATION
| Asset Name | Description & Storage Location | Confidentiality | Integrity | Availability |
| :--- | :--- | :--- | :--- | :--- |
| **Customer Database** | PostgreSQL Cluster (Private Subnet 10.20.21.0/24) | Critical | Critical | High |
| **Public Web Service** | Application Load Balancer + Node.js Containers | Medium | High | Critical |
| **Admin Credentials** | FIDO2 Hardware Keys, SSH Bastion Keys, KMS Master | Critical | Critical | High |
| **Router/Firewall Config** | Infrastructure as Code (Terraform) + nftables | High | Critical | Critical |
| **Security Audit Logs** | Centralized WORM S3 Bucket + SIEM Indexer | High | Critical | Medium |

---

## 2. TRUST BOUNDARIES & SECURITY ASSUMPTIONS
- **Trust Boundary 1 (Internet to ALB):** Untrusted public clients -> TLS 1.3 Termination (TCP 443 only). Strict WAF inspection.
- **Trust Boundary 2 (ALB to App Tier):** Proxied HTTP/1.1 traffic -> Private App Subnets. Direct external access strictly DENIED.
- **Trust Boundary 3 (App Tier to DB):** Microservice workload identity -> Database Subnet. PostgreSQL port 5432 permitted ONLY from sg-app.
- **Trust Boundary 4 (Guest Wi-Fi to Corporate):** Physical 802.1Q VLAN 99 -> Corporate LAN. Default-deny firewall rule dropping all RFC 1918 internal CIDRs.
- **Validated Assumptions:**
  - *Assumption:* Private IP addresses are untrusted. Verified: Lateral movement blocked via security groups.
  - *Assumption:* VPN users are not trusted implicitly. Verified: MFA required, role-scoped bastions enforced.

---

## 3. STRIDE THREAT MODELING MATRIX
| Element | STRIDE Category | Threat Scenario | Inherent Risk | Layered Mitigation Controls | Residual Risk |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Reverse Proxy** | Denial of Service | Volumetric HTTP flood exhausts server socket queue. | High (16) | Anycast Cloudflare scrubbing + Token-bucket rate limiting. | Low (4) |
| **Application** | Tampering | SQL Injection modifies user balances via unsanitized input. | Critical (20) | Parameterized prepared statements + Read-only DB replica roles. | Low (3) |
| **Database** | Information Disclosure | Unencrypted database backups exfiltrated from cloud storage. | Critical (25) | KMS customer-managed envelope encryption + bucket access logging. | Low (2) |
| **Workstations** | Elevation of Privilege | Spear-phishing installs payload; lateral movement to DB. | Critical (20) | Private VLAN client isolation + 802.1X NAC + Endpoint EDR. | Medium (6) |
| **Management** | Spoofing | Stolen SSH key attempts direct administrative shell access. | High (15) | Identity-aware bastion (Teleport) requiring FIDO2 WebAuthn MFA. | Low (2) |

---

## 4. ACTIONABLE REMEDIATION ROADMAP
1. **P0 (Immediate):** Verify zero database subnets contain 0.0.0.0/0 default routes to Internet Gateways.
2. **P0 (Immediate):** Enforce FIDO2 hardware keys across all administrative access gateways.
3. **P1 (Next Sprint):** Configure Dynamic ARP Inspection (DAI) and DHCP Snooping on campus access switches.
4. **P1 (Next Sprint):** Deploy automated log redaction filters to eliminate plaintext tokens in application logs.
`;

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 font-sans">
      <ModuleNav
        track="networks"
        currentModuleId="threat-modeling"
        showAiTutor={false}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Header */}
        <div className="flex items-center gap-2 text-xs font-mono text-stone-700 mb-4">
          <span>COMPUTER NETWORKS &amp; INTERNET ENGINEERING</span>
          <span>/</span>
          <span className="text-[#ea580c] font-semibold">MODULE 17</span>
        </div>

        {/* Hero Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold">
              <ShieldAlert size={14} />
              <span>Network Security Foundations &amp; Threat Modeling</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-stone-700">
              <span>NIST SP 800-30</span>
              <span>•</span>
              <span>OWASP STRIDE</span>
              <span>•</span>
              <span>MITRE ATT&amp;CK</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-3">
            Network Security Fundamentals &amp; Threat Modeling
          </h1>
          <p className="text-stone-600 text-sm sm:text-base max-w-4xl leading-relaxed mb-6">
            Move beyond superficial firewall configuration to true defensive security engineering. Master the CIA triad, explicit trust boundaries, attack surface reduction, the STRIDE methodology, cryptographic foundations (TLS 1.3), DoS queue mathematics, and qualitative risk assessment.
          </p>

          {/* Metrics Pill Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#e7e3da] text-xs font-mono">
            <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200">
              <span className="text-stone-700 block text-[11px]">SECURITY OBJECTIVES</span>
              <span className="font-bold text-stone-900">CIA Triad</span>
            </div>
            <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200">
              <span className="text-stone-700 block text-[11px]">MODELING PARADIGM</span>
              <span className="font-bold text-stone-900">STRIDE &amp; Attack Trees</span>
            </div>
            <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200">
              <span className="text-stone-700 block text-[11px]">SECURE CHANNELS</span>
              <span className="font-bold text-stone-900">TLS 1.3 &amp; AEAD</span>
            </div>
            <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200">
              <span className="text-stone-700 block text-[11px]">RISK ASSESSMENT</span>
              <span className="font-bold text-[#ea580c]">Likelihood &times; Impact</span>
            </div>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 border-b border-[#e7e3da]">
          {[
            { id: "curriculum", label: "Curriculum & Theory", icon: FileText },
            { id: "simulators", label: "Interactive Simulators (5)", icon: Sliders },
            { id: "lab", label: "Hands-on Threat Model Lab", icon: Terminal },
            { id: "quiz", label: "Knowledge Check (10)", icon: HelpCircle },
            { id: "audit", label: "SRE Threat Assessment Plan", icon: Shield },
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
            {/* Section 17.1 & 17.2: CIA Triad */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 text-orange-600 text-xs font-mono font-bold mb-2">
                <Shield size={16} />
                <span>SECTION 17.1 — 17.2</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                The CIA Triad: Confidentiality, Integrity &amp; Availability
              </h2>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
                A network is not secure simply because unauthorized users cannot connect. True defensive engineering balances three core objectives:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="flex items-center gap-2 font-bold text-stone-900 text-sm mb-2">
                    <Lock size={16} className="text-[#ea580c]" />
                    <span>Confidentiality</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    Preventing unauthorized disclosure of information. Ensures that customer PII, cryptographic keys, and internal logs are never exposed to eavesdroppers.
                  </p>
                  <div className="text-[11px] font-mono text-stone-700 bg-white p-2 rounded-xl border border-stone-200">
                    Controls: TLS 1.3 encryption, network segmentation, least-privilege IAM roles.
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="flex items-center gap-2 font-bold text-stone-900 text-sm mb-2">
                    <CheckCircle2 size={16} className="text-[#ea580c]" />
                    <span>Integrity</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    Preventing unauthorized or silent modification of data, configurations, or audit trails. Encryption alone does NOT guarantee integrity without authentication.
                  </p>
                  <div className="text-[11px] font-mono text-stone-700 bg-white p-2 rounded-xl border border-stone-200">
                    Controls: HMAC-SHA256, digital signatures, signed Git commits, append-only WORM logs.
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="flex items-center gap-2 font-bold text-stone-900 text-sm mb-2">
                    <Activity size={16} className="text-[#ea580c]" />
                    <span>Availability</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    Ensuring authorized users can reliably access services when required, even under equipment failures, routing re-convergence, or DDoS attacks.
                  </p>
                  <div className="text-[11px] font-mono text-stone-700 bg-white p-2 rounded-xl border border-stone-200">
                    Controls: Multi-AZ load balancing, token-bucket rate limits, Anycast DDoS scrubbing.
                  </div>
                </div>
              </div>
            </div>

            {/* Section 17.3: Assets, Trust Boundaries & Attack Surfaces */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 text-orange-600 text-xs font-mono font-bold mb-2">
                <Layers size={16} />
                <span>SECTION 17.3 — 17.4</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Assets, Trust Boundaries &amp; Threat Modeling Assumptions
              </h2>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-4">
                A trust boundary is any logical or physical point where security assumptions, authentication requirements, privileges, or network policies change. Every packet crossing a boundary must be explicitly verified.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-xs text-left border border-stone-200 rounded-xl overflow-hidden">
                  <thead className="bg-stone-100 text-stone-700 font-bold uppercase text-[11px]">
                    <tr>
                      <th className="p-3">Flawed Security Assumption</th>
                      <th className="p-3">Why It Fails in Production</th>
                      <th className="p-3">Architectural Engineering Validation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-600">
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">&quot;Private IP addresses are inherently trusted&quot;</td>
                      <td className="p-3 text-rose-600">Phished developer laptops and rogue containers on the internal LAN pivot laterally</td>
                      <td className="p-3 text-emerald-700">Enforce microsegmentation and mTLS between every single service tier</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">&quot;VPN users can be granted open subnet access&quot;</td>
                      <td className="p-3 text-rose-600">Stolen VPN credentials allow external attackers direct access to production databases</td>
                      <td className="p-3 text-emerald-700">Replace broad network VPNs with Identity-Aware Proxies &amp; Just-In-Time bastions</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">&quot;HTTPS/TLS means the application is safe&quot;</td>
                      <td className="p-3 text-rose-600">TLS only encrypts the wire; SQL injection and authorization bypasses still succeed</td>
                      <td className="p-3 text-emerald-700">Layer application-level input sanitization and strict RBAC behind TLS termination</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">&quot;The perimeter firewall blocks everything bad&quot;</td>
                      <td className="p-3 text-rose-600">Misconfigured permissive egress rules allow reverse shells to phone home to C2</td>
                      <td className="p-3 text-emerald-700">Enforce strict default-deny egress policies and monitor flow logs for anomalies</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 17.5: Common Network Threats */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 text-orange-600 text-xs font-mono font-bold mb-2">
                <AlertTriangle size={16} />
                <span>SECTION 17.5</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Common Network Threats &amp; Defensive Countermeasures
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <h3 className="font-bold text-stone-900 text-sm mb-2">Spoofing (IP, ARP, DNS)</h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-2">
                    Attacker falsifies network headers or identities to impersonate trusted nodes.
                  </p>
                  <ul className="text-xs text-stone-600 space-y-1 list-disc list-inside">
                    <li><strong>ARP Spoofing:</strong> Defend using Dynamic ARP Inspection (DAI) and DHCP Snooping.</li>
                    <li><strong>IP Spoofing:</strong> Defend using BCP 38 / uRPF (Unicast Reverse Path Forwarding).</li>
                    <li><strong>DNS Cache Poisoning:</strong> Defend using DNSSEC cryptographic signatures.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <h3 className="font-bold text-stone-900 text-sm mb-2">Replay Attacks</h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-2">
                    Attacker captures valid encrypted ciphertext and retransmits it to execute duplicate operations.
                  </p>
                  <ul className="text-xs text-stone-600 space-y-1 list-disc list-inside">
                    <li>Encryption alone does NOT prevent replay!</li>
                    <li>Defend using cryptographic nonces, monotonic sequence numbers, and strict timestamp windows.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <h3 className="font-bold text-stone-900 text-sm mb-2">Sniffing &amp; Interception (MitM)</h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-2">
                    Eavesdropping on plaintext packets or inserting a rogue proxy between communication endpoints.
                  </p>
                  <ul className="text-xs text-stone-600 space-y-1 list-disc list-inside">
                    <li>Defend with authenticated TLS 1.3 using Perfect Forward Secrecy (ECDHE).</li>
                    <li>Strict certificate chain and hostname validation (preventing rogue CA acceptance).</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <h3 className="font-bold text-stone-900 text-sm mb-2">Denial of Service (DoS / DDoS)</h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-2">
                    Exhausting network bandwidth, connection state tables, or application compute capacity.
                  </p>
                  <ul className="text-xs text-stone-600 space-y-1 list-disc list-inside">
                    <li>Defend with SYN cookies (stateless handshake validation).</li>
                    <li>Token-bucket rate limiting and upstream BGP Anycast scrubbing (Cloudflare/AWS Shield).</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 17.6 & 17.7: Cryptography & Risk Assessment */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 text-orange-600 text-xs font-mono font-bold mb-2">
                <Key size={16} />
                <span>SECTION 17.6 — 17.9</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Cryptographic Foundations &amp; Risk Prioritization
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <h3 className="font-bold text-stone-900 text-sm mb-2">Authenticated Encryption (AEAD)</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Modern TLS 1.3 exclusively mandates Authenticated Encryption with Associated Data (AEAD) ciphers (AES-GCM or ChaCha20-Poly1305). AEAD computes a cryptographic authentication tag simultaneously with encryption, eliminating historical vulnerabilities where ciphertext was modified before MAC verification (Encrypt-then-MAC).
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <h3 className="font-bold text-stone-900 text-sm mb-2">Qualitative Risk Model</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Security investments must be prioritized using risk mathematics:
                    <br />
                    <span className="font-mono text-orange-600 font-bold block my-1">
                      Risk Score = Likelihood (1–5) &times; Impact (1–5)
                    </span>
                    A scenario with low likelihood but catastrophic impact (e.g., total database compromise) yields a critical risk score that requires immediate mitigation.
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
            {/* SIMULATOR 1: STRIDE Threat Modeling Engine */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold mb-2">
                  <ShieldAlert size={14} />
                  <span>SIMULATOR 1</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                  STRIDE Component Threat Modeling Engine
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm">
                  Select a network component to analyze its full STRIDE vulnerability vectors, trust boundaries, and recommended architectural controls.
                </p>
              </div>

              {/* Component Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                {Object.entries(strideComponents).map(([key, comp]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedStrideComponent(key)}
                    className={`p-3 rounded-xl border text-xs font-semibold transition cursor-pointer text-left ${
                      selectedStrideComponent === key
                        ? "bg-stone-900 text-white border-stone-900 shadow-xs"
                        : "bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100"
                    }`}
                  >
                    <div className="truncate font-bold mb-0.5">{comp.name}</div>
                    <div className="text-[10px] opacity-70 font-mono">{comp.type}</div>
                  </button>
                ))}
              </div>

              {/* Threat Matrix */}
              {(() => {
                const active = strideComponents[selectedStrideComponent];
                return (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono p-3 bg-stone-50 rounded-xl border border-stone-200">
                      <span>COMPONENT: <strong>{active.name}</strong></span>
                      <span className="text-[#ea580c] font-bold">BOUNDARY: {active.trustBoundary}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {active.strideThreats.map((threat) => (
                        <div key={threat.letter} className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="w-6 h-6 rounded-lg bg-orange-100 text-orange-700 font-mono font-bold flex items-center justify-center text-xs">
                              {threat.letter}
                            </span>
                            <span className="font-bold text-stone-900">{threat.category}</span>
                          </div>
                          <p className="text-stone-600 mb-2 leading-relaxed">
                            <strong>Threat Vector:</strong> {threat.desc}
                          </p>
                          <div className="p-2 rounded-xl bg-white border border-stone-200 font-mono text-[10px] text-emerald-800">
                            <strong>Defensive Control:</strong> {threat.control}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* SIMULATOR 2: DoS Queue Capacity Simulator */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold mb-2">
                  <Activity size={14} />
                  <span>SIMULATOR 2</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                  DoS Queue Capacity &amp; Latency Backlog Simulator
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm">
                  Simulate server queue saturation under volumetric traffic and evaluate edge mitigation strategies.
                </p>
              </div>

              {/* Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-200 mb-6 text-xs">
                <div>
                  <label className="block text-stone-700 font-bold mb-1">
                    Legitimate Users: <span className="font-mono text-emerald-700">{legitRate} req/s</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="80"
                    value={legitRate}
                    onChange={(e) => setLegitRate(Number(e.target.value))}
                    className="w-full accent-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-stone-700 font-bold mb-1">
                    Attack Traffic: <span className="font-mono text-rose-700">{attackRate} req/s</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="150"
                    value={attackRate}
                    onChange={(e) => setAttackRate(Number(e.target.value))}
                    className="w-full accent-rose-600"
                  />
                </div>

                <div>
                  <label className="block text-stone-700 font-bold mb-1">Defensive Shield</label>
                  <select
                    value={dosMitigation}
                    onChange={(e) => setDosMitigation(e.target.value)}
                    className="w-full p-2 rounded-xl border border-stone-300 bg-white font-mono"
                  >
                    <option value="none">None (Direct Origin Exposure)</option>
                    <option value="token-bucket">Token Bucket Rate Limiting</option>
                    <option value="cloud-scrubber">Anycast Cloud DDoS Scrubber</option>
                  </select>
                </div>
              </div>

              {/* Live Metric Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
                  <span className="text-stone-700 block font-mono text-[10px]">TOTAL ARRIVING TRAFFIC</span>
                  <span className="text-lg font-bold text-stone-900">{dosMetrics.totalArriving} req/s</span>
                  <span className="text-[10px] text-stone-700 block mt-0.5">Origin Capacity: {serverCapacity} req/s</span>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
                  <span className="text-stone-700 block font-mono text-[10px]">QUEUE BUFFER DEPTH</span>
                  <span className="text-lg font-bold text-stone-900">{dosMetrics.queueDepth} / {maxQueue}</span>
                  <span className="text-[10px] text-stone-700 block mt-0.5">Wait Latency: ~{dosMetrics.waitTimeSeconds}s</span>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
                  <span className="text-stone-700 block font-mono text-[10px]">LEGITIMATE DROPPED</span>
                  <span className={`text-lg font-bold ${dosMetrics.legitDropRate > 0 ? "text-rose-600" : "text-emerald-600"}`}>
                    {dosMetrics.legitDropRate}%
                  </span>
                  <span className="text-[10px] text-stone-700 block mt-0.5">Tail-drop collateral damage</span>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
                  <span className="text-stone-700 block font-mono text-[10px]">LEGITIMATE SERVED</span>
                  <span className="text-lg font-bold text-emerald-700">{dosMetrics.servedLegit} req/s</span>
                  <span className="text-[10px] text-stone-700 block mt-0.5">Successful business flows</span>
                </div>
              </div>

              {/* Status Banner */}
              <div
                className={`p-4 rounded-2xl border text-xs font-mono flex items-center gap-3 ${
                  dosMetrics.legitDropRate > 0
                    ? "bg-rose-50 border-rose-300 text-rose-800"
                    : "bg-emerald-50 border-emerald-300 text-emerald-800"
                }`}
              >
                {dosMetrics.legitDropRate > 0 ? <AlertTriangle size={18} /> : <CheckCircle2 size={18} />}
                <div>
                  <span className="font-bold block">
                    {dosMetrics.legitDropRate > 0 ? "DENIAL OF SERVICE DETECTED" : "HEALTHY SERVICE DELIVERY"}
                  </span>
                  <span>
                    {dosMetrics.legitDropRate > 0
                      ? `Server queue buffer saturated! ${dosMetrics.legitDropRate}% of legitimate customer requests are being dropped due to attack traffic.`
                      : "Server operates within capacity limits. All legitimate requests processed with minimal queue latency."}
                  </span>
                </div>
              </div>
            </div>

            {/* SIMULATOR 3: Lateral Movement Attack Tree Sandbox */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold mb-2">
                    <Shield size={14} />
                    <span>SIMULATOR 3</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                    Trust Boundary &amp; Lateral Movement Attack Tree
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm">
                    Step through a multi-stage lateral movement attempt comparing a flat enterprise network vs Zero-Trust microsegmentation.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={advanceAttackStep}
                    disabled={attackStep >= 3}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#ea580c] text-white text-xs font-bold hover:bg-orange-700 transition cursor-pointer disabled:opacity-50"
                  >
                    <Play size={14} />
                    <span>Next Attack Step</span>
                  </button>
                  <button
                    onClick={resetAttackSim}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 text-stone-700 text-xs font-bold hover:bg-stone-200 transition cursor-pointer"
                  >
                    <RefreshCw size={14} />
                    <span>Reset</span>
                  </button>
                </div>
              </div>

              {/* Architecture Selector */}
              <div className="grid grid-cols-2 gap-3 mb-6 text-xs">
                <button
                  onClick={() => {
                    setNetworkArchitecture("flat");
                    resetAttackSim();
                  }}
                  className={`p-3 rounded-xl border text-left font-bold transition cursor-pointer ${
                    networkArchitecture === "flat"
                      ? "bg-rose-50 border-rose-300 text-rose-900 shadow-xs"
                      : "bg-stone-50 border-stone-200 text-stone-600"
                  }`}
                >
                  <div>Legacy Flat Network (No Trust Boundaries)</div>
                  <div className="text-[10px] font-normal text-stone-700 mt-0.5">All VLANs route openly; no host or internal firewalls.</div>
                </button>

                <button
                  onClick={() => {
                    setNetworkArchitecture("zero-trust");
                    resetAttackSim();
                  }}
                  className={`p-3 rounded-xl border text-left font-bold transition cursor-pointer ${
                    networkArchitecture === "zero-trust"
                      ? "bg-emerald-50 border-emerald-300 text-emerald-900 shadow-xs"
                      : "bg-stone-50 border-stone-200 text-stone-600"
                  }`}
                >
                  <div>Zero-Trust Microsegmentation (NIST SP 800-207)</div>
                  <div className="text-[10px] font-normal text-stone-700 mt-0.5">Private VLANs, default-deny Security Groups, and mTLS.</div>
                </button>
              </div>

              {/* Step Graphic */}
              <div className="grid grid-cols-4 gap-2 mb-4 font-mono text-[11px] text-center">
                {["1. Foothold", "2. Recon Sweep", "3. Cross Boundary", "4. Crown Jewel"].map((label, idx) => (
                  <div
                    key={idx}
                    className={`p-2 rounded-xl border ${
                      attackStep >= idx
                        ? networkArchitecture === "flat"
                          ? "bg-rose-100 border-rose-400 text-rose-900 font-bold"
                          : idx >= 2
                          ? "bg-emerald-100 border-emerald-400 text-emerald-900 font-bold"
                          : "bg-amber-100 border-amber-400 text-amber-900 font-bold"
                        : "bg-stone-50 border-stone-200 text-stone-600"
                    }`}
                  >
                    {label}
                  </div>
                ))}
              </div>

              {/* Attack Trail Log */}
              <div className="bg-stone-900 rounded-2xl p-4 font-mono text-[11px] text-stone-300 max-h-48 overflow-y-auto space-y-1">
                {attackLog.map((log, idx) => (
                  <div key={idx} className="py-1 border-b border-stone-800 text-stone-300">
                    &gt; {log}
                  </div>
                ))}
              </div>
            </div>

            {/* SIMULATOR 4: Cryptographic Handshake & Secure Channel Inspector */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold mb-2">
                    <Key size={14} />
                    <span>SIMULATOR 4</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                    Cryptographic Channels: TLS 1.3 vs Plaintext &amp; Replay Detection
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm">
                    Examine wire payloads observed by a LAN sniffer and test how nonces prevent replay attacks.
                  </p>
                </div>
                <button
                  onClick={simulateReplayAttack}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-[#ea580c] transition cursor-pointer"
                >
                  <Play size={14} />
                  <span>Execute Replay Attack Test</span>
                </button>
              </div>

              {/* Protocol Toggle */}
              <div className="grid grid-cols-2 gap-3 mb-6 text-xs">
                <button
                  onClick={() => {
                    setChannelProtocol("plaintext");
                    setReplayAttempted(false);
                  }}
                  className={`p-3 rounded-xl border text-left font-bold transition cursor-pointer ${
                    channelProtocol === "plaintext"
                      ? "bg-rose-50 border-rose-300 text-rose-900"
                      : "bg-stone-50 border-stone-200 text-stone-600"
                  }`}
                >
                  <div>Plaintext HTTP / Telnet (No Encryption)</div>
                  <div className="text-[10px] font-normal text-stone-700 mt-0.5">Wire payloads exposed in cleartext. Zero replay protection.</div>
                </button>

                <button
                  onClick={() => {
                    setChannelProtocol("tls13");
                    setReplayAttempted(false);
                  }}
                  className={`p-3 rounded-xl border text-left font-bold transition cursor-pointer ${
                    channelProtocol === "tls13"
                      ? "bg-emerald-50 border-emerald-300 text-emerald-900"
                      : "bg-stone-50 border-stone-200 text-stone-600"
                  }`}
                >
                  <div>TLS 1.3 (AES-256-GCM + ECDHE + AEAD)</div>
                  <div className="text-[10px] font-normal text-stone-700 mt-0.5">Authenticated encryption with anti-replay sequence nonces.</div>
                </button>
              </div>

              {/* Wireframe Inspector Box */}
              <div className="p-4 rounded-2xl bg-stone-900 text-white font-mono text-xs mb-4">
                <div className="text-[10px] text-stone-400 mb-2 uppercase">Packet Capture Dissection (Wireshark View)</div>
                {channelProtocol === "plaintext" ? (
                  <div className="text-rose-400 space-y-1">
                    <div>POST /api/transfer HTTP/1.1</div>
                    <div>Host: bank.internal.corp</div>
                    <div>Authorization: Basic YWRtaW46U2VjcmV0QWRtaW4xMjM= (Decoded: admin:SecretAdmin123)</div>
                    <div>Content-Type: application/json</div>
                    <div>&#123;&quot;fromAccount&quot;: &quot;109923&quot;, &quot;toAccount&quot;: &quot;994012&quot;, &quot;amount&quot;: 5000&#125;</div>
                  </div>
                ) : (
                  <div className="text-emerald-400 space-y-1">
                    <div>TLSv1.3 Record Layer: Application Data Protocol: http-over-tls</div>
                    <div>Encrypted Application Data: 7f 3a b2 91 c4 8e f0 11 2d 98 a0 cc 55 1e 90 42...</div>
                    <div>Authentication Tag (AEAD MAC): 4b e2 1a 9f 00 23 d8 91 [VALID]</div>
                    <div>Session Nonce: 0x9f4012a8 | Monotonic Counter: #49201</div>
                  </div>
                )}
              </div>

              {/* Replay Outcome Card */}
              {replayAttempted && replayResult && (
                <div
                  className={`p-4 rounded-2xl border text-xs font-mono ${
                    replayResult.color === "rose"
                      ? "bg-rose-50 border-rose-300 text-rose-800"
                      : "bg-emerald-50 border-emerald-300 text-emerald-800"
                  }`}
                >
                  <div className="font-bold mb-1">{replayResult.status}</div>
                  <div>{replayResult.details}</div>
                </div>
              )}
            </div>

            {/* SIMULATOR 5: Risk Scoring Matrix */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold mb-2">
                  <Sliders size={14} />
                  <span>SIMULATOR 5</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                  Risk Assessment Matrix: Likelihood &times; Impact &rarr; Residual Risk
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm">
                  Evaluate inherent risk vs residual risk after applying targeted architectural mitigations.
                </p>
              </div>

              {/* Scenario Selector */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-6">
                {Object.entries(riskScenarios).map(([key, sc]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setSelectedRiskScenario(key);
                      setControlApplied(false);
                    }}
                    className={`p-3 rounded-xl border text-xs font-semibold text-left transition cursor-pointer ${
                      selectedRiskScenario === key
                        ? "bg-stone-900 text-white border-stone-900 shadow-xs"
                        : "bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100"
                    }`}
                  >
                    <div className="truncate">{sc.title}</div>
                  </button>
                ))}
              </div>

              {/* Calculator View */}
              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 mb-4">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="text-sm font-bold text-stone-900">
                    Scenario: {currentRisk.title}
                  </div>
                  <button
                    onClick={() => setControlApplied((prev) => !prev)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                      controlApplied
                        ? "bg-emerald-600 text-white"
                        : "bg-stone-200 text-stone-700 hover:bg-stone-300"
                    }`}
                  >
                    {controlApplied ? "Control Applied (Residual Risk)" : "Apply Mitigation Control"}
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono mb-4">
                  <div className="bg-white p-3 rounded-xl border border-stone-200">
                    <span className="text-stone-700 block text-[10px]">EVALUATED LIKELIHOOD</span>
                    <span className="text-lg font-bold text-stone-900">{likelihood} / 5</span>
                    <span className="text-[10px] text-stone-700 block">
                      {likelihood >= 4 ? "Frequent / Likely" : likelihood >= 3 ? "Possible" : "Rare / Unlikely"}
                    </span>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-stone-200">
                    <span className="text-stone-700 block text-[10px]">BUSINESS IMPACT</span>
                    <span className="text-lg font-bold text-stone-900">{impact} / 5</span>
                    <span className="text-[10px] text-stone-700 block">
                      {impact >= 4 ? "Critical / Catastrophic" : impact >= 3 ? "Major" : "Minor"}
                    </span>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-stone-200">
                    <span className="text-stone-700 block text-[10px]">CALCULATED RISK SCORE</span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xl font-extrabold text-[#ea580c]">{riskScore} / 25</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${getRiskLevelBadge(riskScore).bg}`}>
                        {getRiskLevelBadge(riskScore).label}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs">
                  <span className="font-bold text-stone-900 block mb-1">Recommended Mitigation Architecture:</span>
                  <span className="text-stone-600">{currentRisk.controlDescription}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: HANDS-ON LAB                                       */}
        {/* ========================================================= */}
        {activeTab === "lab" && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold mb-2">
                    <Terminal size={14} />
                    <span>LAB 17.1</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    Enterprise Network Threat Modeling &amp; Architecture Review
                  </h2>
                </div>
                <div className="text-xs font-mono bg-stone-100 px-3 py-1.5 rounded-xl border border-stone-200">
                  ESTIMATED TIME: 90–120 MINS
                </div>
              </div>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
                Conduct an end-to-end security architecture review for an enterprise operating a public web app, private application instances, a customer database, employee workstations, guest Wi-Fi, and an administrative bastion.
              </p>

              {/* Asset & Trust Boundary Table */}
              <h3 className="font-bold text-stone-900 text-sm mb-3">1. Identified Assets &amp; CIA Priorities</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-xs text-left border border-stone-200 rounded-xl overflow-hidden">
                  <thead className="bg-stone-100 text-stone-700 font-bold uppercase text-[11px]">
                    <tr>
                      <th className="p-3">Asset</th>
                      <th className="p-3">Confidentiality</th>
                      <th className="p-3">Integrity</th>
                      <th className="p-3">Availability</th>
                      <th className="p-3">Primary Risk Scenario</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-600 font-mono text-[11px]">
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Customer PII Database</td>
                      <td className="p-3 text-rose-700 font-bold">CRITICAL</td>
                      <td className="p-3 text-rose-700 font-bold">CRITICAL</td>
                      <td className="p-3 text-amber-700 font-bold">HIGH</td>
                      <td className="p-3">Data dump via SQLi or unsegmented LAN scan</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Public Web Service</td>
                      <td className="p-3 text-stone-700 font-bold">MEDIUM</td>
                      <td className="p-3 text-amber-700 font-bold">HIGH</td>
                      <td className="p-3 text-rose-700 font-bold">CRITICAL</td>
                      <td className="p-3">Volumetric DDoS bringing down business checkout</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Router / Firewall Config</td>
                      <td className="p-3 text-amber-700 font-bold">HIGH</td>
                      <td className="p-3 text-rose-700 font-bold">CRITICAL</td>
                      <td className="p-3 text-rose-700 font-bold">CRITICAL</td>
                      <td className="p-3">Unauthorized route injection causing blackout</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Admin SSH Private Keys</td>
                      <td className="p-3 text-rose-700 font-bold">CRITICAL</td>
                      <td className="p-3 text-rose-700 font-bold">CRITICAL</td>
                      <td className="p-3 text-amber-700 font-bold">HIGH</td>
                      <td className="p-3">Privilege escalation and persistent backdoor</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 8-point checklist */}
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
                    "I have classified critical enterprise assets across Confidentiality, Integrity, and Availability.",
                    "I have mapped at least 5 explicit trust boundaries between untrusted and protected tiers.",
                    "I have documented STRIDE threat vectors for each network component.",
                    "I have demonstrated how nonces and sequence numbers prevent replay attacks.",
                    "I have calculated Inherent vs Residual Risk scores using Likelihood x Impact.",
                    "I have verified that database subnets contain NO direct route to an Internet Gateway.",
                    "I have confirmed that Guest Wi-Fi traffic is isolated with Private VLANs.",
                    "I have verified that all administrative access enforces FIDO2 hardware MFA.",
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
                    Module 17 Knowledge Check: Network Security &amp; Threat Modeling
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
        {/* TAB 5: SRE THREAT ASSESSMENT REPORT                       */}
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
                    Network Security Threat Model &amp; Risk Register
                  </h2>
                </div>
                <button
                  onClick={() => handleCopy(threatModelAuditReportTemplate, "threat-report")}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-[#ea580c] transition cursor-pointer"
                >
                  {copiedKey === "threat-report" ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedKey === "threat-report" ? "Copied Markdown!" : "Copy Threat Model Plan"}</span>
                </button>
              </div>

              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6">
                Use this copyable, production-ready threat modeling register for security architecture reviews, SOC2 audits, and vulnerability mitigation sign-offs.
              </p>

              <div className="bg-stone-950 rounded-2xl p-5 border border-stone-800 font-mono text-[11px] text-stone-300 max-h-96 overflow-y-auto leading-relaxed whitespace-pre-wrap">
                {threatModelAuditReportTemplate}
              </div>
            </div>
          </div>
        )}

        {/* Footer Navigation Bar */}
        <div className="mt-10 pt-6 border-t border-[#e7e3da] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => {
              navigate("/learning/networks/enterprise-cloud");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#e7e3da] bg-white text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#ea580c] transition cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 16 — Enterprise, Data Center &amp; Cloud</span>
          </button>

          <button
            onClick={() => {
              navigate("/learning/networks/packet-analysis");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 text-xs font-bold text-white hover:bg-orange-600 transition cursor-pointer"
          >
            <span>Next: Module 18 — Packet Analysis &amp; Reconnaissance</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
