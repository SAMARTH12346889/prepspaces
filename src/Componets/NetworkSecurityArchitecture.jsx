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
  UserCheck,
  AlertOctagon,
  Boxes,
  KeyRound,
  Fingerprint,
} from "lucide-react";
import ModuleNav from "./ModuleNav";

export default function NetworkSecurityArchitecture() {
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
  // SIMULATOR 1: Zero Trust PDP / PEP Sandbox
  // ==========================================
  const [ztUser, setZtUser] = useState("alice_admin"); // alice_admin | bob_contractor | svc_batch | anon_user
  const [ztResource, setZtResource] = useState("admin_portal"); // admin_portal | prod_db | internal_docs | staging_api
  const [ztAuthStrength, setZtAuthStrength] = useState("fido2"); // fido2 | sms_otp | password_only
  const [ztDevicePosture, setZtDevicePosture] = useState("compliant"); // compliant | unmanaged | non_compliant
  const [ztIpRisk, setZtIpRisk] = useState("low"); // low | medium | high_tor
  const [ztSessionAgeHours, setZtSessionAgeHours] = useState(1);

  const pdpDecision = useMemo(() => {
    // 1. Hard fail on Tor/High risk
    if (ztIpRisk === "high_tor") {
      return {
        verdict: "DENY",
        badge: "bg-red-50 text-red-700 border-red-200",
        reason: "Access blocked by Policy Enforcement Point (PEP): Ingress IP is an identified Tor Exit Node / High-Risk Anonymizer.",
      };
    }

    // 2. Anonymous users have no access to private resources
    if (ztUser === "anon_user") {
      return {
        verdict: "DENY",
        badge: "bg-red-50 text-red-700 border-red-200",
        reason: "Access denied: Unauthenticated request to private enterprise resource.",
      };
    }

    // 3. Stale session (> 8 hours) requires re-authentication
    if (ztSessionAgeHours > 8) {
      return {
        verdict: "STEP_UP_REAUTH",
        badge: "bg-amber-50 text-amber-700 border-amber-200",
        reason: "Session lifetime exceeded policy maximum (8 hours). Re-authentication required.",
      };
    }

    // 4. Admin Portal requires: Alice role + FIDO2 + Compliant device
    if (ztResource === "admin_portal") {
      if (ztUser !== "alice_admin") {
        return {
          verdict: "DENY",
          badge: "bg-red-50 text-red-700 border-red-200",
          reason: "Authorization failure: User identity does not hold the 'Cloud-Security-Admin' RBAC role.",
        };
      }
      if (ztAuthStrength !== "fido2") {
        return {
          verdict: "MFA_UPGRADE_REQUIRED",
          badge: "bg-amber-50 text-amber-700 border-amber-200",
          reason: "Policy violation: Admin portal requires Phishing-Resistant FIDO2/WebAuthn MFA credentials.",
        };
      }
      if (ztDevicePosture !== "compliant") {
        return {
          verdict: "DEVICE_NON_COMPLIANT",
          badge: "bg-red-50 text-red-700 border-red-200",
          reason: "Device posture check failed: Endpoint EDR agent missing or full disk encryption disabled.",
        };
      }
      return {
        verdict: "ALLOW",
        badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
        reason: "Explicit verification successful: Phishing-resistant MFA, compliant managed hardware, and approved role.",
      };
    }

    // 5. Direct Database Access: Human users must never access DB directly
    if (ztResource === "prod_db") {
      if (ztUser === "alice_admin" || ztUser === "bob_contractor") {
        return {
          verdict: "DENY",
          badge: "bg-red-50 text-red-700 border-red-200",
          reason: "Zero Trust violation: Direct human access to database tier is prohibited. Use audited bastion or service API.",
        };
      }
      if (ztUser === "svc_batch") {
        if (ztAuthStrength === "fido2" || ztAuthStrength === "sms_otp") {
          return {
            verdict: "ALLOW",
            badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
            reason: "Workload identity authenticated via SPIFFE/mTLS token. Access permitted to DB port 5432.",
          };
        }
      }
    }

    // 6. Contractor accessing internal docs
    if (ztResource === "internal_docs") {
      if (ztDevicePosture === "non_compliant") {
        return {
          verdict: "DENY",
          badge: "bg-red-50 text-red-700 border-red-200",
          reason: "Device quarantine active. Remediate device OS updates before accessing corporate docs.",
        };
      }
      return {
        verdict: "ALLOW",
        badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
        reason: "Standard corporate access granted for approved contractor identity.",
      };
    }

    // 7. Staging API
    return {
      verdict: "ALLOW",
      badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
      reason: "Staging tier access permitted under current session context.",
    };
  }, [ztUser, ztResource, ztAuthStrength, ztDevicePosture, ztIpRisk, ztSessionAgeHours]);

  // ==========================================
  // SIMULATOR 2: Microsegmentation & Blast Radius Visualizer
  // ==========================================
  const [segMode, setSegMode] = useState("microseg"); // flat | microseg
  const [workstationInfected, setWorkstationInfected] = useState(false);
  const [selectedProbe, setSelectedProbe] = useState("ws_to_db");

  const probeResults = useMemo(() => {
    if (segMode === "flat") {
      // Flat network permits almost all lateral movement!
      switch (selectedProbe) {
        case "ws_to_web":
          return { status: "PERMITTED", style: "text-emerald-600", desc: "Workstation -> Web Frontend (HTTP/HTTPS): Allowed." };
        case "ws_to_db":
          return {
            status: "DANGEROUS LEAK",
            style: "text-red-600 font-bold",
            desc: "FLAT NETWORK FLAW: Workstation connects directly to Database (Port 5432). Lateral movement path OPEN to attackers!",
          };
        case "web_to_db":
          return {
            status: "DANGEROUS LEAK",
            style: "text-red-600 font-bold",
            desc: "Web Frontend connects directly to Database, bypassing API tier! Violates 3-tier boundary.",
          };
        case "api_to_db":
          return { status: "PERMITTED", style: "text-emerald-600", desc: "API Service -> Database (Port 5432): Legitimate path." };
        case "ws_to_mgmt":
          return {
            status: "DANGEROUS LEAK",
            style: "text-red-600 font-bold",
            desc: "Workstation can probe administrative SSH/Management interface on 10.0.99.1!",
          };
        default:
          return { status: "UNKNOWN", style: "text-stone-700", desc: "No probe selected." };
      }
    } else {
      // Microsegmentation mode
      if (workstationInfected && selectedProbe.startsWith("ws_")) {
        return {
          status: "ISOLATED BY EDR",
          style: "text-purple-600 font-bold",
          desc: "Workstation host is quarantined by EDR/Microsegmentation agent. All outbound traffic drops to zero.",
        };
      }
      switch (selectedProbe) {
        case "ws_to_web":
          return { status: "PERMITTED", style: "text-emerald-600", desc: "Workstation -> Web Frontend (Port 443): Approved via Identity-Aware Proxy." };
        case "ws_to_db":
          return {
            status: "BLOCKED BY POLICY",
            style: "text-emerald-700 font-bold",
            desc: "MICROSEG ENFORCED: Workstation to Database direct traffic dropped by default-deny firewall rule.",
          };
        case "web_to_db":
          return {
            status: "BLOCKED BY POLICY",
            style: "text-emerald-700 font-bold",
            desc: "Frontend direct DB access denied. Frontend must communicate through App API only.",
          };
        case "api_to_db":
          return { status: "PERMITTED", style: "text-emerald-600", desc: "Approved Path: App API -> Database (Port 5432 only). mTLS enforced." };
        case "ws_to_mgmt":
          return {
            status: "BLOCKED BY POLICY",
            style: "text-emerald-700 font-bold",
            desc: "Direct access dropped. Management interfaces require dedicated bastion jump-host with FIDO2 MFA.",
          };
        default:
          return { status: "UNKNOWN", style: "text-stone-700", desc: "No probe selected." };
      }
    }
  }, [segMode, workstationInfected, selectedProbe]);

  // ==========================================
  // SIMULATOR 3: TLS 1.3 & Certificate Validation Forensics
  // ==========================================
  const [certSan, setCertSan] = useState("valid"); // valid | mismatch | wildcard
  const [certValidity, setCertValidity] = useState("current"); // current | expired | future_skew
  const [certChain, setCertChain] = useState("trusted_full"); // trusted_full | missing_intermediate | self_signed
  const [tlsVersion, setTlsVersion] = useState("1.3"); // 1.3 | 1.2 | 1.0

  const tlsValidationResult = useMemo(() => {
    if (tlsVersion === "1.0") {
      return {
        status: "FATAL_HANDSHAKE_ERROR",
        badge: "bg-red-50 text-red-700 border-red-200",
        alert: "TLS 1.0 handshake rejected (RFC 8996 deprecated protocol). Client aborted connection with protocol_version alert.",
      };
    }
    if (certSan === "mismatch") {
      return {
        status: "HOSTNAME_MISMATCH",
        badge: "bg-red-50 text-red-700 border-red-200",
        alert: "ERR_CERT_COMMON_NAME_INVALID: Requested hostname 'api.enterprise.internal' does not match SAN entries ['legacy-service.internal'].",
      };
    }
    if (certValidity === "expired") {
      return {
        status: "CERT_EXPIRED",
        badge: "bg-red-50 text-red-700 border-red-200",
        alert: "SEC_ERROR_EXPIRED_CERTIFICATE: Server certificate validity window expired on 2026-10-12 (NotAfter exceeded).",
      };
    }
    if (certValidity === "future_skew") {
      return {
        status: "CLOCK_SKEW_ERROR",
        badge: "bg-red-50 text-red-700 border-red-200",
        alert: "SEC_ERROR_EXPIRED_ISSUER_CERTIFICATE / Clock Skew: Local system clock is earlier than certificate NotBefore timestamp.",
      };
    }
    if (certChain === "self_signed") {
      return {
        status: "UNTRUSTED_ROOT_CA",
        badge: "bg-red-50 text-red-700 border-red-200",
        alert: "DEPTH_ZERO_SELF_SIGNED_CERT: Certificate root is self-signed and not found in client local trust store.",
      };
    }
    if (certChain === "missing_intermediate") {
      return {
        status: "INCOMPLETE_CHAIN",
        badge: "bg-amber-50 text-amber-700 border-amber-200",
        alert: "UNABLE_TO_GET_ISSUER_CERT_LOCALLY: Server failed to bundle intermediate CA certificate. Desktop browsers with AIA may heal; CLI/curl fails.",
      };
    }

    return {
      status: "SECURE_CONNECTION",
      badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
      alert: "TLS 1.3 Handshake Succeeded! Cipher: TLS_AES_256_GCM_SHA384 (1-RTT negotiation, Perfect Forward Secrecy via ECDHE-X25519).",
    };
  }, [certSan, certValidity, certChain, tlsVersion]);

  // ==========================================
  // SIMULATOR 4: VPN Comparator (IPsec vs WireGuard)
  // ==========================================
  const [vpnType, setVpnType] = useState("wireguard"); // wireguard | ipsec
  const [allowedIpsScope, setAllowedIpsScope] = useState("least_privilege"); // least_privilege | broad_all
  const [testProbeIp, setTestProbeIp] = useState("10.0.50.12"); // 10.0.50.12 (allowed) | 10.0.99.1 (restricted mgmt)

  const vpnRoutingVerdict = useMemo(() => {
    const isTargetRestricted = testProbeIp === "10.0.99.1";

    if (allowedIpsScope === "broad_all") {
      return {
        action: "ROUTED OVER TUNNEL (EXCESSIVE REACHABILITY)",
        badge: "bg-amber-50 text-amber-700 border-amber-200",
        desc: `Target IP ${testProbeIp} is covered by 0.0.0.0/0 or 10.0.0.0/8. Traffic is routed directly across tunnel without network-level lease filtering.`,
      };
    }

    // Least privilege (AllowedIPs = 10.0.50.0/24)
    if (isTargetRestricted) {
      return {
        action: "BLOCKED / ROUTE DROPPED",
        badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
        desc: `Target ${testProbeIp} does not match peer AllowedIPs (10.0.50.0/24). Kernel drops packet locally before transmission.`,
      };
    }

    return {
      action: "PERMITTED & ENCRYPTED",
      badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
      desc: `Target ${testProbeIp} matches AllowedIPs (10.0.50.0/24). ChaCha20-Poly1305 encrypted over UDP 51820.`,
    };
  }, [allowedIpsScope, testProbeIp]);

  // ==========================================
  // SIMULATOR 5: Kubernetes NetworkPolicy Tester
  // ==========================================
  const [k8sDefaultDeny, setK8sDefaultDeny] = useState(true);
  const [k8sAllowedSource, setK8sAllowedSource] = useState("api"); // api | any | none
  const [k8sTestSender, setK8sTestSender] = useState("api"); // api | frontend | untrusted_pod
  const [k8sTargetPort, setK8sTargetPort] = useState(5432); // 5432 | 8080

  const k8sPacketEvaluation = useMemo(() => {
    if (!k8sDefaultDeny) {
      return {
        verdict: "ALLOWED (NO ISOLATION)",
        badge: "bg-amber-50 text-amber-700 border-amber-200",
        reason: "Without a NetworkPolicy selecting the database pod, Kubernetes defaults to flat, unisolated pod-to-pod communication.",
      };
    }

    // Target pod is labeled role: database
    // Ingress check
    const isAllowedSource =
      k8sAllowedSource === "any" ||
      (k8sAllowedSource === "api" && k8sTestSender === "api");

    const isAllowedPort = k8sTargetPort === 5432;

    if (isAllowedSource && isAllowedPort) {
      return {
        verdict: "INGRESS PERMITTED",
        badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
        reason: `Packet from '${k8sTestSender}' matched 'podSelector: { role: api }' on port 5432/TCP. Forwarded to database pod.`,
      };
    }

    if (!isAllowedSource) {
      return {
        verdict: "DROPPED BY POD_SELECTOR",
        badge: "bg-red-50 text-red-700 border-red-200",
        reason: `Denied: Pod '${k8sTestSender}' does not match permitted podSelector labels (role: api). Ingress dropped.`,
      };
    }

    return {
      verdict: "DROPPED BY PORT_FILTER",
      badge: "bg-red-50 text-red-700 border-red-200",
      reason: `Denied: Destination port ${k8sTargetPort} is not permitted by NetworkPolicy ports specification (only 5432 allowed).`,
    };
  }, [k8sDefaultDeny, k8sAllowedSource, k8sTestSender, k8sTargetPort]);

  // ==========================================
  // QUIZ STATE & DATA
  // ==========================================
  const quizQuestions = [
    {
      id: 1,
      question: "What is the central foundational premise of Zero Trust Architecture (NIST SP 800-207)?",
      options: [
        "Network location or presence inside a corporate subnet never implies trust; every request must be explicitly verified",
        "All network firewalls should be replaced with antivirus software on end-user laptops",
        "Public IP addresses are untrusted, but internal RFC 1918 private subnets are inherently safe",
        "VPNs provide complete authorization for all workloads connected to their tunnel",
      ],
      correctIndex: 0,
      explanation:
        "The core principle of Zero Trust is to 'never trust, always verify'. Trust is never inferred from network location, IP address, or VPN membership; instead, access is continuously evaluated using identity, device posture, authentication strength, and resource-specific policy.",
    },
    {
      id: 2,
      question: "In microsegmentation, what is the primary risk of relying on a 'flat' corporate network?",
      options: [
        "Routers cannot negotiate BGP route attributes over VLAN trunks",
        "A single compromised workstation or workload can freely move laterally to access databases and administrative services",
        "DNS queries become unencrypted and fail DNSSEC cryptographic validation",
        "Kubernetes pods cannot obtain IP addresses from the CNI bridge",
      ],
      correctIndex: 1,
      explanation:
        "In a flat network, there are no granular boundaries between workloads. If an attacker compromises an ordinary employee laptop, they can directly scan and probe databases, domain controllers, and management interfaces across the entire subnet.",
    },
    {
      id: 3,
      question: "Which DNS security technology provides cryptographic authentication of records to prevent spoofing, but does NOT encrypt query contents?",
      options: [
        "DNS over HTTPS (DoH)",
        "DNS over TLS (DoT)",
        "DNSSEC",
        "mDNS (Multicast DNS)",
      ],
      correctIndex: 2,
      explanation:
        "DNSSEC uses public-key cryptography and digital signatures (RRSIG, DNSKEY, DS records) to authenticate the origin and integrity of DNS responses. However, DNSSEC is unencrypted; queries and responses remain readable in plaintext on the wire.",
    },
    {
      id: 4,
      question: "What is the security significance of the 'AllowedIPs' configuration setting in WireGuard?",
      options: [
        "It acts as both an encryption routing table and an ingress packet filter (cryptokey routing)",
        "It specifies which DNS resolvers are permitted to resolve WireGuard domain names",
        "It dictates the AES-GCM cipher suite used during the IKEv2 Phase 1 handshake",
        "It assigns public IP addresses to cloud Kubernetes worker nodes",
      ],
      correctIndex: 0,
      explanation:
        "WireGuard uses Cryptokey Routing: AllowedIPs defines which destination IP prefixes are routed through the tunnel to that peer, and conversely, which source IPs are accepted from that peer. A broad AllowedIPs (like 0.0.0.0/0) can inadvertently provide broader reachability than intended.",
    },
    {
      id: 5,
      question: "How does a Kubernetes NetworkPolicy behave when an empty podSelector (`podSelector: {}`) is used with `policyTypes: ['Ingress']` and no ingress rules?",
      options: [
        "It allows all inbound traffic from all namespaces in the cluster",
        "It acts as a cluster-wide Default Deny Ingress rule, dropping all inbound traffic to selected pods",
        "It forwards all ingress traffic directly to the cloud load balancer",
        "It disables the CNI plugin on all worker nodes",
      ],
      correctIndex: 1,
      explanation:
        "An empty podSelector selects all pods in that namespace, and having an Ingress policyType with an empty `ingress: []` list instructs the CNI to isolate all pods and deny all inbound traffic by default.",
    },
    {
      id: 6,
      question: "What failure occurs when a web server serves a certificate chain missing an intermediate CA certificate?",
      options: [
        "The server CPU crashes due to an out-of-memory kernel panic",
        "Clients lacking the intermediate certificate in their local cache fail trust chain verification (UNABLE_TO_GET_ISSUER_CERT)",
        "The client automatically falls back to unencrypted HTTP port 80",
        "DNS queries to the domain are redirected to the root nameservers",
      ],
      correctIndex: 1,
      explanation:
        "TLS servers must send the leaf certificate along with all intermediate CA certificates up to (but excluding) the root CA. If an intermediate is omitted, clients that do not support or cannot reach Authority Information Access (AIA) fetching will reject the connection as untrusted.",
    },
    {
      id: 7,
      question: "How does Network Detection and Response (NDR) differ from traditional perimeter firewalls?",
      options: [
        "NDR blocks all port 443 traffic regardless of protocol",
        "NDR analyzes east-west internal network traffic, DNS telemetry, and flow patterns to detect anomalous post-compromise activity",
        "NDR replaces endpoint detection and response (EDR) completely",
        "NDR is only applicable to wireless 802.11 Wi-Fi networks",
      ],
      correctIndex: 1,
      explanation:
        "Traditional firewalls focus on north-south perimeter boundary enforcement. NDR continuously monitors network telemetry (flow logs, internal packet metadata, DNS) across east-west traffic to identify lateral movement, data staging, beaconing, and anomalous workload behavior.",
    },
    {
      id: 8,
      question: "What is the recommended risk treatment for a finding where an administrative interface is exposed directly to the public Internet without MFA?",
      options: [
        "Risk Acceptance with no documentation required",
        "Risk Transfer by purchasing cyber insurance",
        "Immediate Mitigation: Restrict to an identity-aware gateway, enforce phishing-resistant MFA, and isolate management access",
        "Risk Avoidance by shutting down the entire cloud account permanently",
      ],
      correctIndex: 2,
      explanation:
        "Publicly exposed administrative interfaces represent critical exposure (Likelihood 4-5, Impact 5). The immediate mitigation is to remove direct public access, route access through an Identity-Aware Proxy (IAP) or bastion, and mandate phishing-resistant FIDO2 MFA.",
    },
    {
      id: 9,
      question: "Why is a certificate validation bypass (e.g. `curl -k` or `verify=False` in Python) considered a critical architectural flaw?",
      options: [
        "It increases TCP window size and induces bufferbloat",
        "It blinds the client to adversary Man-in-the-Middle (MitM) interception, allowing attackers to present fraudulent certificates",
        "It causes DNS servers to reject recursive queries",
        "It forces the server to use obsolete 3DES encryption",
      ],
      correctIndex: 1,
      explanation:
        "Disabling certificate validation strips TLS of its authentication guarantee. Any attacker positioning themselves between the client and server (via ARP spoofing, DNS poisoning, or rogue Wi-Fi) can intercept and decrypt the traffic without the client detecting the breach.",
    },
    {
      id: 10,
      question: "In the context of Zero Trust Architecture, what is the role of the Policy Enforcement Point (PEP)?",
      options: [
        "To calculate BGP shortest path attributes using Dijkstra's algorithm",
        "To intercept, inspect, and enforce access decisions rendered by the Policy Decision Point (PDP)",
        "To distribute symmetric IPsec encryption keys via DNS records",
        "To generate synthetic load testing traffic for iperf3",
      ],
      correctIndex: 1,
      explanation:
        "In NIST SP 800-207 Zero Trust Architecture, the Policy Decision Point (PDP) evaluates access rules, while the Policy Enforcement Point (PEP) is the component (firewall, proxy, API gateway, or service mesh proxy) that physically allows or terminates the communication session based on the PDP's decision.",
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
  // SRE DELIVERABLE TEMPLATE: Architecture Review & Risk Register
  // ==========================================
  const architectureReviewTemplate = `# ENTERPRISE SECURITY ARCHITECTURE REVIEW & RISK REGISTER
Reference: SEC-ARCH-2026-ZT-023
Assessment Target: Cloud Platform, Microservices & Zero Trust Infrastructure
Date of Audit: October 15, 2026
Assessor: Principal Network Security Architect (PrepSpaces Enterprise Security)
Document Status: APPROVED & AUDITED

---

## 1. Executive Summary
An architecture review was conducted on the enterprise cloud environment, evaluating user ingress, service-to-service east-west communications, Kubernetes container policies, and remote access. The environment was previously reliant on legacy perimeter assumptions, featuring broad subnet-level trust, exposed administrative ports, and unsegmented database communication. This document presents the risk register, blast radius analysis, and prioritized Zero Trust remediation plan.

## 2. Architecture Comparison: Before vs. After
### Legacy Perimeter (Before Review)
- Flat internal VPC network: any employee device can ping or initiate TCP handshakes to internal databases.
- Single VPN endpoint provides full /16 internal subnet reachability without continuous device posture checks.
- Administrative web consoles exposed to public subnets via basic username/password authentication.
- Kubernetes workloads communicate across namespaces with no CNI NetworkPolicy default-deny barriers.

### Zero Trust Architecture (Target State)
- **Identity-Aware Access:** All admin endpoints gated behind an Identity-Aware Proxy (IAP) requiring FIDO2 WebAuthn MFA.
- **Workload Microsegmentation:** Default-deny ingress/egress policies across all Kubernetes namespaces; databases accept TCP 5432 exclusively from validated API pod identities.
- **Mutual TLS (mTLS):** Service mesh (SPIFFE/SPIRE) validates cryptographic workload identity and encrypts all east-west traffic.
- **Cryptokey WireGuard Tunnels:** Remote users utilize strict AllowedIPs routing, granting access solely to required services rather than entire subnets.

---

## 3. Formal Risk Register & Prioritization
Scoring Model: Risk Score = Likelihood (1-5) x Impact (1-5), Max Score = 25.

| Finding ID | Title & Vulnerability Description | Likelihood | Impact | Score | Initial Priority | Assigned Owner | Target Date |
|:---|:---|:---:|:---:|:---:|:---|:---|:---|
| **F-01** | **Public Administrative Interface:** Admin console reachable via public IP without hardware MFA. | 4 | 5 | **20** | **P1 - Critical** | SecOps / NetEng | 2026-10-22 |
| **F-02** | **Overly Permissive Remote VPN:** VPN leases broad /16 subnet access; no posture validation. | 4 | 5 | **20** | **P1 - Critical** | Network SRE | 2026-10-25 |
| **F-03** | **Unrestricted Pod-to-DB Communication:** DB accepts traffic from any pod in the cluster. | 4 | 5 | **20** | **P1 - Critical** | Platform Eng | 2026-10-28 |
| **F-04** | **Incomplete TLS Certificate Lifecycle:** No automated expiry alerting; missing intermediate certs. | 3 | 3 | **9** | **P3 - Medium** | Cloud Eng | 2026-11-10 |
| **F-05** | **Unmonitored Internal DNS Telemetry:** Workstations query public resolvers directly, bypassing logs. | 3 | 4 | **12** | **P2 - High** | InfoSec | 2026-11-05 |
| **F-06** | **Absence of EDR Isolation Integration:** Host compromise does not trigger dynamic network quarantine. | 3 | 4 | **12** | **P2 - High** | Security Ops | 2026-11-15 |

---

## 4. Remediation Configurations & Policies

### 4.1 Kubernetes NetworkPolicy (Enforcing Strict Microsegmentation)
\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: database-api-only
  namespace: production
spec:
  podSelector:
    matchLabels:
      role: database
  policyTypes:
    - Ingress
    - Egress
  ingress:
    - from:
        - podSelector:
            matchLabels:
              role: api
      ports:
        - protocol: TCP
          port: 5432
  egress:
    # Allow DB to resolve DNS via kube-dns only; block arbitrary Internet egress
    - to:
        - namespaceSelector: {}
          podSelector:
            matchLabels:
              k8s-app: kube-dns
      ports:
        - protocol: UDP
          port: 53
\`\`\`

### 4.2 WireGuard Client Peer Least-Privilege Configuration
\`\`\`ini
[Interface]
PrivateKey = <CLIENT_PRIVATE_KEY>
Address = 10.50.0.5/32
DNS = 10.50.0.1

[Peer]
PublicKey = <GATEWAY_PUBLIC_KEY>
Endpoint = vpn.enterprise.com:51820
# Least-privilege routing: Route ONLY specific application micro-subnet, NOT 0.0.0.0/0
AllowedIPs = 10.50.0.0/24
PersistentKeepalive = 25
\`\`\`

---

## 5. Architecture Verification Matrix
| Verification Test | Expected Behavior | Observed Result | Status |
|:---|:---|:---|:---:|
| **Test 1:** Admin login from non-compliant personal laptop | PEP denies session; prompts for managed device | Access Denied (HTTP 403) | **PASS** |
| **Test 2:** Direct workstation connection to DB (TCP 5432) | Firewall drops packet; logs violation event | Connection Timed Out | **PASS** |
| **Test 3:** API pod connection to DB (TCP 5432) | Packet permitted; mTLS handshake succeeds | Connection Established | **PASS** |
| **Test 4:** Compromised pod attempting external egress | Blocked by NetworkPolicy egress filter | ICMP Prohibited / Dropped | **PASS** |
| **Test 5:** Expired/mismatched TLS certificate inspection | Client TLS library terminates handshake | TLS Alert: BAD_CERTIFICATE | **PASS** |

---
*Report certified by Architecture Review Board — PrepSpaces Security Division*`;

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900">
      <ModuleNav activeModuleId="security-architecture" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Course Header Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  MODULE 23 &bull; ADVANCED NETWORKING
                </span>
                <span className="text-xs font-mono text-stone-700 bg-stone-100 px-2.5 py-1 rounded-md">
                  ZERO TRUST &amp; DEFENSIVE ARCHITECTURE
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-2">
                Modern Network Security Architecture
              </h1>
              <p className="text-stone-700 text-sm mt-1 max-w-3xl">
                Design and audit modern enterprise security architectures using Zero Trust (NIST SP 800-207), microsegmentation, secure DNS, TLS 1.3 certificate lifecycle, WireGuard vs IPsec, Kubernetes network policies, and Network Detection &amp; Response (NDR).
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono bg-stone-100 px-3 py-1.5 rounded-xl border border-stone-200 text-stone-700">
                8 Core Sections &bull; 5 Interactive Simulators
              </span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-stone-200">
            {[
              { id: "curriculum", label: "23.1 - 23.8 Curriculum", icon: FileText },
              { id: "simulators", label: "5 Production Simulators", icon: Sliders },
              { id: "lab", label: "Hands-on Lab 23.1", icon: Terminal },
              { id: "quiz", label: "Evaluated Quiz (10 Qs)", icon: HelpCircle },
              { id: "audit", label: "Architecture Review Deliverable", icon: FileCode },
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

        {/* TAB 1: CURRICULUM (23.1 - 23.8) */}
        {activeTab === "curriculum" && (
          <div className="space-y-6">
            {/* 23.1 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#ea580c] flex items-center justify-center font-mono font-bold text-sm">
                  1
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-[#ea580c]">SECTION 23.1</span>
                  <h2 className="text-xl font-bold text-stone-900">
                    Modern Security Architecture: Core Principles &amp; Fallacies
                  </h2>
                </div>
              </div>

              <div className="mt-4 text-stone-700 text-sm leading-relaxed space-y-4">
                <p>
                  Traditional perimeter security relied on the &quot;castle-and-moat&quot; paradigm: traffic originating from within the internal corporate LAN was presumed trustworthy, while traffic from the outside Internet was untrusted. In an era of hybrid cloud workloads, remote workers, SaaS dependencies, and credential theft, this perimeter model collapses.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { title: "Verify Explicitly", desc: "Authenticate and authorize based on all available data points (identity, device posture, location, firmware, risk signals)." },
                    { title: "Use Least Privilege", desc: "Limit user and service account access with Just-In-Time (JIT) and Just-Enough-Access (JEA) models, adaptive risk policies, and data protection." },
                    { title: "Assume Breach", desc: "Minimize blast radius by microsegmenting network communication, encrypting sessions end-to-end, and collecting comprehensive telemetry for NDR." },
                    { title: "Continuous Evaluation", desc: "Access is never permanent; sessions are dynamically re-evaluated as device compliance, IP risk, or session duration changes." },
                    { title: "Segment Communications", desc: "Eradicate flat networks; restrict inter-service communication to strictly declared dependency matrices." },
                    { title: "Design for Recovery", desc: "Ensure emergency break-glass paths exist, runbooks are automated, and control planes can withstand network partitioning." },
                  ].map((p, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                      <span className="text-xs font-mono font-bold text-stone-900">{p.title}</span>
                      <p className="text-[11px] text-stone-700 mt-1 leading-normal">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 23.2 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#ea580c] flex items-center justify-center font-mono font-bold text-sm">
                  2
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-[#ea580c]">SECTION 23.2</span>
                  <h2 className="text-xl font-bold text-stone-900">
                    Zero Trust &amp; Identity-Aware Access (NIST SP 800-207)
                  </h2>
                </div>
              </div>

              <div className="mt-4 text-stone-700 text-sm leading-relaxed space-y-4">
                <p>
                  Zero Trust Architecture (ZTA) formalizes access around two central functional planes:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <h4 className="text-xs font-mono font-bold text-stone-900 uppercase mb-1">
                      Policy Decision Point (PDP):
                    </h4>
                    <p className="text-xs text-stone-700 leading-relaxed">
                      Composed of the Policy Engine (PE) and Policy Administrator (PA). Evaluates organizational access rules against subject identity, context, device telemetry, and threat intelligence to emit an explicit grant, deny, or step-up authentication decision.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <h4 className="text-xs font-mono font-bold text-stone-900 uppercase mb-1">
                      Policy Enforcement Point (PEP):
                    </h4>
                    <p className="text-xs text-stone-700 leading-relaxed">
                      The active gateway, reverse proxy, or firewall component that intercepts communication requests, coordinates with the PDP, and physically permits, throttles, or terminates connection sessions between client subjects and enterprise resources.
                    </p>
                  </div>
                </div>

                <div className="bg-orange-50/50 rounded-2xl p-4 border border-orange-200">
                  <h4 className="text-xs font-mono font-bold text-[#ea580c] uppercase mb-1">
                    Key Distinctions in Zero Trust:
                  </h4>
                  <ul className="text-xs text-stone-700 space-y-1 list-disc list-inside">
                    <li><strong>Authentication:</strong> Confirms &quot;Who or what is requesting access?&quot; (FIDO2, mTLS, OIDC).</li>
                    <li><strong>Authorization:</strong> Determines &quot;What specific actions is this identity permitted to execute?&quot;</li>
                    <li><strong>Device Posture:</strong> Confirms &quot;Is the hardware healthy, encrypted, and monitored by EDR?&quot;</li>
                    <li><strong>Network Reachability:</strong> A packet arriving at an IP interface does not imply authorization to use the application.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 23.3 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#ea580c] flex items-center justify-center font-mono font-bold text-sm">
                  3
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-[#ea580c]">SECTION 23.3</span>
                  <h2 className="text-xl font-bold text-stone-900">
                    Microsegmentation &amp; Workload Isolation
                  </h2>
                </div>
              </div>

              <div className="mt-4 text-stone-700 text-sm leading-relaxed space-y-4">
                <p>
                  Microsegmentation applies granular, workload-specific isolation policies, shrinking the lateral blast radius if a node or container is compromised.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 text-stone-700 font-mono">
                        <th className="py-2 pr-4 font-bold">Source Tier</th>
                        <th className="py-2 pr-4 font-bold">Destination</th>
                        <th className="py-2 pr-4 font-bold">Allowed Service</th>
                        <th className="py-2 font-bold">Zero Trust Policy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-700">
                      <tr>
                        <td className="py-2 pr-4 font-semibold text-stone-900">Employee Device</td>
                        <td className="py-2 pr-4">App Gateway</td>
                        <td className="py-2 pr-4 font-mono">HTTPS (443)</td>
                        <td className="py-2 text-emerald-600 font-semibold">Allow via Identity &amp; Device Posture</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 font-semibold text-stone-900">Web Frontend</td>
                        <td className="py-2 pr-4">App API</td>
                        <td className="py-2 pr-4 font-mono">gRPC / HTTPS</td>
                        <td className="py-2 text-emerald-600 font-semibold">Allow via mTLS Workload Identity</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 font-semibold text-stone-900">App API</td>
                        <td className="py-2 pr-4">Database Tier</td>
                        <td className="py-2 pr-4 font-mono">TCP 5432 only</td>
                        <td className="py-2 text-emerald-600 font-semibold">Allow with strict egress/ingress match</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 font-semibold text-stone-900">Employee Device</td>
                        <td className="py-2 pr-4">Database Tier</td>
                        <td className="py-2 pr-4 font-mono">Any direct port</td>
                        <td className="py-2 text-red-600 font-bold">DENY (Default-Deny Enforced)</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 font-semibold text-stone-900">Web Frontend</td>
                        <td className="py-2 pr-4">Database Tier</td>
                        <td className="py-2 pr-4 font-mono">TCP 5432</td>
                        <td className="py-2 text-red-600 font-bold">DENY (Tier bypass strictly prohibited)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 23.4 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#ea580c] flex items-center justify-center font-mono font-bold text-sm">
                  4
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-[#ea580c]">SECTION 23.4</span>
                  <h2 className="text-xl font-bold text-stone-900">
                    Secure DNS, TLS &amp; Certificate Lifecycle Management
                  </h2>
                </div>
              </div>

              <div className="mt-4 text-stone-700 text-sm leading-relaxed space-y-4">
                <p>
                  Transport layer encryption and naming security operate in tandem: DNS resolves where services reside, while TLS validates endpoint identity and secures transit payloads.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-mono font-bold text-stone-900">DNSSEC (RFC 4033)</span>
                    <p className="text-[11px] text-stone-700 mt-1">Cryptographically signs DNS resource records (RRSIG). Protects against DNS spoofing; does NOT encrypt queries.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-mono font-bold text-stone-900">DoT &amp; DoH (RFC 7858/8484)</span>
                    <p className="text-[11px] text-stone-700 mt-1">Encrypts queries over TLS (port 853) or HTTPS (port 443). Prevents ISP/eavesdropper surveillance.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-mono font-bold text-stone-900">TLS 1.3 (RFC 8446)</span>
                    <p className="text-[11px] text-stone-700 mt-1">1-RTT handshake, mandatory Perfect Forward Secrecy (PFS), removed broken ciphers (RC4, 3DES, CBC).</p>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200 space-y-2">
                  <h4 className="text-xs font-mono font-bold text-stone-900 uppercase">Certificate Lifecycle Architecture:</h4>
                  <p className="text-xs text-stone-700">
                    1. <strong>Inventory:</strong> Continuously scan all internal/external endpoints. &bull; 2. <strong>Issuance:</strong> Automated ACME/Vault enrollment. &bull; 3. <strong>Deployment:</strong> Restrict private key read permissions (0400). &bull; 4. <strong>Monitoring:</strong> Alert at 30, 14, and 7 days prior to expiry. &bull; 5. <strong>Renewal &amp; Revocation:</strong> Automate CRL / OCSP Stapling validation.
                  </p>
                </div>
              </div>
            </div>

            {/* 23.5 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#ea580c] flex items-center justify-center font-mono font-bold text-sm">
                  5
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-[#ea580c]">SECTION 23.5</span>
                  <h2 className="text-xl font-bold text-stone-900">
                    VPNs, IPsec &amp; WireGuard Cryptokey Routing
                  </h2>
                </div>
              </div>

              <div className="mt-4 text-stone-700 text-sm leading-relaxed space-y-4">
                <p>
                  Virtual Private Networks (VPNs) create encrypted tunnels across untrusted physical infrastructure. However, a VPN tunnel provides transport connectivity; it is NOT an authorization engine.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <h4 className="text-xs font-mono font-bold text-stone-900 uppercase">IPsec (RFC 4301):</h4>
                    <p className="text-xs text-stone-700">
                      Standardized for enterprise site-to-site connectivity. Uses Internet Key Exchange (IKEv2) to negotiate Security Associations (SAs). Encapsulating Security Payload (ESP) handles encryption. Complex state negotiation; large attack surface (~400,000 LOC).
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <h4 className="text-xs font-mono font-bold text-stone-900 uppercase">WireGuard:</h4>
                    <p className="text-xs text-stone-700">
                      Modern cryptographic protocol (~4,000 LOC) based on the Noise protocol framework, ChaCha20-Poly1305, Curve25519, and BLAKE2s. Uses <strong>Cryptokey Routing</strong>: every peer is bound to a public key and an explicit <code>AllowedIPs</code> range, performing ingress address validation automatically.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 23.6 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#ea580c] flex items-center justify-center font-mono font-bold text-sm">
                  6
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-[#ea580c]">SECTION 23.6</span>
                  <h2 className="text-xl font-bold text-stone-900">
                    Cloud-Native Networking &amp; Container Network Policies
                  </h2>
                </div>
              </div>

              <div className="mt-4 text-stone-700 text-sm leading-relaxed space-y-4">
                <p>
                  In dynamic Kubernetes environments, pods are ephemeral and IP addresses rotate continuously. Security policies must bind to cryptographic workload identities and declarative label selectors rather than static IP subnets.
                </p>

                <div className="bg-stone-900 text-stone-100 p-4 rounded-2xl font-mono text-xs overflow-x-auto">
                  <span className="text-orange-400"># Production Kubernetes Ingress Isolation Policy</span><br />
                  apiVersion: networking.k8s.io/v1<br />
                  kind: NetworkPolicy<br />
                  metadata:<br />
                  &nbsp;&nbsp;name: database-api-only<br />
                  &nbsp;&nbsp;namespace: app<br />
                  spec:<br />
                  &nbsp;&nbsp;podSelector:<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;matchLabels:<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;role: database<br />
                  &nbsp;&nbsp;policyTypes: [Ingress]<br />
                  &nbsp;&nbsp;ingress:<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;- from:<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- podSelector:<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;matchLabels:<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;role: api<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ports:<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- protocol: TCP<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;port: 5432
                </div>
              </div>
            </div>

            {/* 23.7 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#ea580c] flex items-center justify-center font-mono font-bold text-sm">
                  7
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-[#ea580c]">SECTION 23.7</span>
                  <h2 className="text-xl font-bold text-stone-900">
                    Network Detection and Response (NDR) &amp; Telemetry Correlation
                  </h2>
                </div>
              </div>

              <div className="mt-4 text-stone-700 text-sm leading-relaxed space-y-4">
                <p>
                  Network Detection and Response (NDR) analyzes east-west traffic, NetFlow/IPFIX records, and DNS metadata to catch active attackers that have bypassed perimeter controls.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-mono font-bold text-stone-900">Anomalous Lateral Spread</span>
                    <p className="text-[11px] text-stone-700 mt-1">A developer laptop initiates SMB, RDP, or SSH scans against 50+ internal IP subnets.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-mono font-bold text-stone-900">DNS Tunneling &amp; C2</span>
                    <p className="text-[11px] text-stone-700 mt-1">High volume of TXT queries with high Shannon entropy directed to newly observed external domains.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-mono font-bold text-stone-900">Data Staging &amp; Exfiltration</span>
                    <p className="text-[11px] text-stone-700 mt-1">Database workload initiates unexpected outbound TCP connections transferring gigabytes to external IPs.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 23.8 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#ea580c] flex items-center justify-center font-mono font-bold text-sm">
                  8
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-[#ea580c]">SECTION 23.8</span>
                  <h2 className="text-xl font-bold text-stone-900">
                    Security Architecture Review &amp; Risk Prioritization
                  </h2>
                </div>
              </div>

              <div className="mt-4 text-stone-700 text-sm leading-relaxed space-y-4">
                <p>
                  Security architecture reviews quantify risks using likelihood and impact scoring:
                </p>

                <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200">
                  <h4 className="text-xs font-mono font-bold text-stone-900 uppercase mb-2">
                    Risk Calculation Formula:
                  </h4>
                  <div className="font-mono text-xs text-stone-900 font-bold">
                    Risk Score = Likelihood (1 - 5) &times; Impact (1 - 5) &nbsp;&nbsp;[Range: 1 to 25]
                  </div>
                  <ul className="text-xs space-y-1 text-stone-700 mt-2 list-disc list-inside">
                    <li><strong>Priority 1 — Immediate (Score 16-25):</strong> Direct path to high-impact resources, publicly exposed admin ports, unauthenticated DB access.</li>
                    <li><strong>Priority 2 — High (Score 10-15):</strong> Overly permissive VPN tunnels, unmanaged lateral movement, missing TLS validation.</li>
                    <li><strong>Priority 3 — Planned (Score 5-9):</strong> Certificate expiry monitoring gaps, missing centralized DNS audit trails.</li>
                    <li><strong>Priority 4 — Hygiene (Score 1-4):</strong> Stale firewall comments, unused test lab rules.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: FIVE INTERACTIVE SIMULATORS */}
        {activeTab === "simulators" && (
          <div className="space-y-8">
            {/* SIMULATOR 1: Zero Trust PDP / PEP */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                    SIMULATOR 1
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mt-2">
                    Zero Trust Policy Decision Point (PDP / PEP) Sandbox
                  </h3>
                  <p className="text-stone-700 text-xs mt-1">
                    Evaluate identity, device posture, authentication strength, and contextual risk according to NIST SP 800-207.
                  </p>
                </div>
                <div className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold ${pdpDecision.badge}`}>
                  VERDICT: {pdpDecision.verdict}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-mono text-stone-700">Requester Identity:</label>
                    <select
                      value={ztUser}
                      onChange={(e) => setZtUser(e.target.value)}
                      className="w-full mt-1 text-xs border border-stone-300 rounded-lg p-2 bg-white"
                    >
                      <option value="alice_admin">Alice (Cloud Security Admin)</option>
                      <option value="bob_contractor">Bob (External Contractor)</option>
                      <option value="svc_batch">svc-batch (Workload Service Account)</option>
                      <option value="anon_user">Anonymous Internet Requester</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-stone-700">Target Resource:</label>
                    <select
                      value={ztResource}
                      onChange={(e) => setZtResource(e.target.value)}
                      className="w-full mt-1 text-xs border border-stone-300 rounded-lg p-2 bg-white"
                    >
                      <option value="admin_portal">Prod Admin Web Console (Port 8443)</option>
                      <option value="prod_db">Production PostgreSQL (Port 5432)</option>
                      <option value="internal_docs">Internal Engineering Wiki</option>
                      <option value="staging_api">Staging API Gateway</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-mono text-stone-700">Authentication Strength:</label>
                    <select
                      value={ztAuthStrength}
                      onChange={(e) => setZtAuthStrength(e.target.value)}
                      className="w-full mt-1 text-xs border border-stone-300 rounded-lg p-2 bg-white"
                    >
                      <option value="fido2">Phishing-Resistant FIDO2 / WebAuthn</option>
                      <option value="sms_otp">SMS OTP / Push Notification (Phishable)</option>
                      <option value="password_only">Single Password Only (No MFA)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-stone-700">Device Posture State:</label>
                    <select
                      value={ztDevicePosture}
                      onChange={(e) => setZtDevicePosture(e.target.value)}
                      className="w-full mt-1 text-xs border border-stone-300 rounded-lg p-2 bg-white"
                    >
                      <option value="compliant">Compliant Corporate Laptop (EDR Active)</option>
                      <option value="unmanaged">Unmanaged Personal Laptop (BYOD)</option>
                      <option value="non_compliant">Quarantined / Out-of-Compliance Device</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-mono text-stone-700">Ingress IP / Geo Risk:</label>
                    <select
                      value={ztIpRisk}
                      onChange={(e) => setZtIpRisk(e.target.value)}
                      className="w-full mt-1 text-xs border border-stone-300 rounded-lg p-2 bg-white"
                    >
                      <option value="low">Corporate Fiber (Low Risk)</option>
                      <option value="medium">Residential ISP (Moderate Risk)</option>
                      <option value="high_tor">Tor Exit Node / Bulletproof VPN (High Risk)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-stone-700 flex justify-between">
                      <span>Session Age:</span>
                      <span className="font-bold">{ztSessionAgeHours} hours</span>
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="14"
                      value={ztSessionAgeHours}
                      onChange={(e) => setZtSessionAgeHours(Number(e.target.value))}
                      className="w-full mt-1 accent-[#ea580c]"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-stone-900 rounded-2xl p-4 text-stone-200 font-mono text-xs">
                <span className="text-orange-400 font-bold">POLICY DECISION ENGINE OUTPUT:</span>
                <p className="mt-1 text-white">{pdpDecision.reason}</p>
              </div>
            </div>

            {/* SIMULATOR 2: Microsegmentation & Blast Radius */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                    SIMULATOR 2
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mt-2">
                    Microsegmentation &amp; Lateral Movement Blast Radius
                  </h3>
                  <p className="text-stone-700 text-xs mt-1">
                    Compare legacy flat network vulnerability against Zero Trust microsegmentation default-deny isolation.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSegMode("flat")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      segMode === "flat" ? "bg-red-600 text-white" : "bg-stone-100 text-stone-700"
                    }`}
                  >
                    Legacy Flat Network
                  </button>
                  <button
                    onClick={() => setSegMode("microseg")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      segMode === "microseg" ? "bg-emerald-600 text-white" : "bg-stone-100 text-stone-700"
                    }`}
                  >
                    Zero Trust Microseg
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-xs font-mono text-stone-700">Select Lateral Traffic Probe:</label>
                  <div className="space-y-2">
                    {[
                      { id: "ws_to_db", label: "Workstation -> Database Tier (Direct TCP 5432)" },
                      { id: "ws_to_web", label: "Workstation -> Web Frontend (HTTPS 443)" },
                      { id: "web_to_db", label: "Web Frontend -> Database Tier (Tier Bypass)" },
                      { id: "api_to_db", label: "App API Service -> Database Tier (Port 5432)" },
                      { id: "ws_to_mgmt", label: "Workstation -> Management Subnet (SSH 22)" },
                    ].map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setSelectedProbe(p.id)}
                        className={`w-full text-left p-3 rounded-xl border text-xs transition cursor-pointer ${
                          selectedProbe === p.id
                            ? "bg-orange-50 border-orange-300 text-[#ea580c] font-bold"
                            : "bg-stone-50 border-stone-200 text-stone-800 hover:bg-stone-100"
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-200 mt-2">
                    <div>
                      <div className="text-xs font-bold text-stone-900">EDR Workstation Isolation</div>
                      <div className="text-[11px] text-stone-700">Simulate malware detection triggering host quarantine</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={workstationInfected}
                      onChange={(e) => setWorkstationInfected(e.target.checked)}
                      className="w-5 h-5 accent-[#ea580c] cursor-pointer"
                    />
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-stone-950 font-mono text-xs text-stone-300 flex flex-col justify-between">
                  <div>
                    <span className="text-orange-400 font-bold">SEGMENTATION TRAFFIC EVALUATION:</span>
                    <div className={`text-base mt-2 ${probeResults.style}`}>
                      {probeResults.status}
                    </div>
                    <p className="mt-2 text-stone-300 text-xs leading-relaxed">
                      {probeResults.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-800 text-[11px] text-stone-400">
                    Network State: <span className="text-white font-bold">{segMode === "flat" ? "Vulnerable Flat Subnet (/16)" : "Strict Microsegmentation (Default Deny)"}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SIMULATOR 3: TLS 1.3 & Cert Validation */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                    SIMULATOR 3
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mt-2">
                    TLS 1.3 Handshake &amp; Certificate Validation Forensics
                  </h3>
                  <p className="text-stone-700 text-xs mt-1">
                    Simulate certificate validation failures including expired dates, hostname SAN mismatches, and broken trust chains.
                  </p>
                </div>

                <div className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold ${tlsValidationResult.badge}`}>
                  {tlsValidationResult.status}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="text-xs font-mono text-stone-700">Subject Alternative Name:</label>
                  <select
                    value={certSan}
                    onChange={(e) => setCertSan(e.target.value)}
                    className="w-full mt-1 text-xs border border-stone-300 rounded-lg p-2 bg-white"
                  >
                    <option value="valid">Matches: api.enterprise.internal</option>
                    <option value="mismatch">Mismatch: legacy.internal</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono text-stone-700">Validity Period:</label>
                  <select
                    value={certValidity}
                    onChange={(e) => setCertValidity(e.target.value)}
                    className="w-full mt-1 text-xs border border-stone-300 rounded-lg p-2 bg-white"
                  >
                    <option value="current">Valid (Expires in 90 days)</option>
                    <option value="expired">Expired (3 days ago)</option>
                    <option value="future_skew">System Clock Ahead (Clock Skew)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono text-stone-700">CA Trust Chain:</label>
                  <select
                    value={certChain}
                    onChange={(e) => setCertChain(e.target.value)}
                    className="w-full mt-1 text-xs border border-stone-300 rounded-lg p-2 bg-white"
                  >
                    <option value="trusted_full">Complete Trusted CA Chain</option>
                    <option value="missing_intermediate">Missing Intermediate CA</option>
                    <option value="self_signed">Self-Signed / Untrusted Root</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono text-stone-700">TLS Protocol Version:</label>
                  <select
                    value={tlsVersion}
                    onChange={(e) => setTlsVersion(e.target.value)}
                    className="w-full mt-1 text-xs border border-stone-300 rounded-lg p-2 bg-white"
                  >
                    <option value="1.3">TLS 1.3 (RFC 8446)</option>
                    <option value="1.2">TLS 1.2</option>
                    <option value="1.0">TLS 1.0 (Deprecated/Insecure)</option>
                  </select>
                </div>
              </div>

              <div className="bg-stone-900 rounded-2xl p-4 text-stone-200 font-mono text-xs">
                <span className="text-orange-400 font-bold">CLIENT TLS ENGINE LOG:</span>
                <p className="mt-1 text-white">{tlsValidationResult.alert}</p>
                <div className="mt-2 text-[11px] text-stone-400">
                  Diagnostic CLI: <code className="text-emerald-400">openssl s_client -connect api.enterprise.internal:443 -servername api.enterprise.internal -verify_return_error</code>
                </div>
              </div>
            </div>

            {/* SIMULATOR 4: VPN Comparator (IPsec vs WireGuard) */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                    SIMULATOR 4
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mt-2">
                    VPN Architecture: IPsec vs. WireGuard Cryptokey Routing
                  </h3>
                  <p className="text-stone-700 text-xs mt-1">
                    Evaluate tunnel packet overhead, cryptographic agility, and least-privilege routing via AllowedIPs.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setVpnType("wireguard")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      vpnType === "wireguard" ? "bg-[#ea580c] text-white" : "bg-stone-100 text-stone-700"
                    }`}
                  >
                    WireGuard
                  </button>
                  <button
                    onClick={() => setVpnType("ipsec")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      vpnType === "ipsec" ? "bg-[#ea580c] text-white" : "bg-stone-100 text-stone-700"
                    }`}
                  >
                    IPsec (IKEv2)
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-mono text-stone-700">Tunnel Routing Scope (AllowedIPs / Security Association):</label>
                    <select
                      value={allowedIpsScope}
                      onChange={(e) => setAllowedIpsScope(e.target.value)}
                      className="w-full mt-1 text-xs border border-stone-300 rounded-lg p-2 bg-white"
                    >
                      <option value="least_privilege">Least Privilege: 10.0.50.0/24 (App Subnet Only)</option>
                      <option value="broad_all">Broad Leased Scope: 0.0.0.0/0 (All Subnets / Full Tunnel)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-stone-700">Target Ingress Destination IP:</label>
                    <select
                      value={testProbeIp}
                      onChange={(e) => setTestProbeIp(e.target.value)}
                      className="w-full mt-1 text-xs border border-stone-300 rounded-lg p-2 bg-white"
                    >
                      <option value="10.0.50.12">10.0.50.12 (Approved App Service)</option>
                      <option value="10.0.99.1">10.0.99.1 (Restricted Management Console)</option>
                    </select>
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1 font-mono text-xs">
                    <div className="text-stone-700">Protocol Spec: <span className="font-bold text-stone-900">{vpnType === "wireguard" ? "Noise IK / ChaCha20-Poly1305 / Curve25519" : "IKEv2 / AES-256-GCM / SHA-384 / DH-Group 14"}</span></div>
                    <div className="text-stone-700">Packet Header Overhead: <span className="font-bold text-stone-900">{vpnType === "wireguard" ? "~32 Bytes" : "~56-72 Bytes (ESP + NAT-T)"}</span></div>
                    <div className="text-stone-700">Codebase Attack Surface: <span className="font-bold text-stone-900">{vpnType === "wireguard" ? "~4,000 LOC" : "~400,000+ LOC (StrongSwan)"}</span></div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-stone-950 font-mono text-xs text-stone-300 flex flex-col justify-between">
                  <div>
                    <span className="text-orange-400 font-bold">TUNNEL ROUTING VERDICT:</span>
                    <div className={`mt-2 font-bold ${vpnRoutingVerdict.badge}`}>
                      {vpnRoutingVerdict.action}
                    </div>
                    <p className="mt-3 text-stone-300 text-xs leading-relaxed">
                      {vpnRoutingVerdict.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-800 text-[11px] text-stone-400">
                    Configuration Type: <span className="text-white font-bold">{vpnType.toUpperCase()} Cryptokey Engine</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SIMULATOR 5: Kubernetes NetworkPolicy Simulator */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                    SIMULATOR 5
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mt-2">
                    Kubernetes NetworkPolicy Ingress &amp; Pod Isolation Sandbox
                  </h3>
                  <p className="text-stone-700 text-xs mt-1">
                    Test declarative CNI policy enforcement targeting database pods against API and unauthorized frontend workloads.
                  </p>
                </div>

                <div className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold ${k8sPacketEvaluation.badge}`}>
                  {k8sPacketEvaluation.verdict}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <div>
                      <div className="text-xs font-bold text-stone-900">Enforce Default-Deny Ingress</div>
                      <div className="text-[11px] text-stone-700">Blocks unselected pod communication</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={k8sDefaultDeny}
                      onChange={(e) => setK8sDefaultDeny(e.target.checked)}
                      className="w-5 h-5 accent-[#ea580c] cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-stone-700">NetworkPolicy Permitted Ingress Source:</label>
                    <select
                      value={k8sAllowedSource}
                      onChange={(e) => setK8sAllowedSource(e.target.value)}
                      className="w-full mt-1 text-xs border border-stone-300 rounded-lg p-2 bg-white"
                    >
                      <option value="api">podSelector: matchLabels: &#123; role: api &#125;</option>
                      <option value="any">podSelector: &#123;&#125; (Permit All Workloads)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-stone-700">Simulate Sending Workload Pod:</label>
                    <select
                      value={k8sTestSender}
                      onChange={(e) => setK8sTestSender(e.target.value)}
                      className="w-full mt-1 text-xs border border-stone-300 rounded-lg p-2 bg-white"
                    >
                      <option value="api">Pod: app-api-7b8f9c (role: api)</option>
                      <option value="frontend">Pod: web-frontend-4d2a1b (role: frontend)</option>
                      <option value="untrusted_pod">Pod: guest-runner (role: unverified)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-stone-700">Target Destination Port:</label>
                    <select
                      value={k8sTargetPort}
                      onChange={(e) => setK8sTargetPort(Number(e.target.value))}
                      className="w-full mt-1 text-xs border border-stone-300 rounded-lg p-2 bg-white"
                    >
                      <option value="5432">TCP 5432 (PostgreSQL Data Port)</option>
                      <option value="8080">TCP 8080 (Unauthorized Debug Port)</option>
                    </select>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-900 font-mono text-xs text-stone-200 flex flex-col justify-between">
                  <div>
                    <span className="text-orange-400 font-bold">CNI PACKET FILTER VERDICT:</span>
                    <p className="mt-2 text-white text-xs leading-relaxed">
                      {k8sPacketEvaluation.reason}
                    </p>
                  </div>

                  <div className="mt-4 p-3 rounded-xl bg-stone-950 border border-stone-800 text-[11px] text-stone-400">
                    <span className="text-stone-300 font-bold">Policy Schema:</span><br />
                    Target: <code className="text-emerald-400">role: database</code><br />
                    Allowed: <code className="text-emerald-400">{k8sAllowedSource === "api" ? "role: api" : "any pod"}</code> &bull; Port: <code className="text-emerald-400">5432/TCP</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: HANDS-ON LAB 23.1 */}
        {activeTab === "lab" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
              <div>
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  PRACTICAL LAB 23.1
                </span>
                <h2 className="text-2xl font-bold text-stone-900 mt-2">
                  Enterprise Security Architecture Review &amp; Remediation Lab
                </h2>
                <p className="text-stone-700 text-xs mt-1">
                  Audit the simulated enterprise network, isolate overexposed administrative endpoints, deploy Kubernetes NetworkPolicies, and validate Zero Trust posture.
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
                  title: "Milestone 1: Identity-Aware Access Control Policy",
                  desc: "Define access policy requiring Phishing-Resistant FIDO2 WebAuthn authentication and compliant managed hardware for production administration.",
                  cmd: "# Inspect active identity session context\ncurl -v https://admin.enterprise.internal/health \\\n  -H 'Authorization: Bearer <ID_TOKEN>' \\\n  -H 'X-Device-Posture: EDR_COMPLIANT'",
                },
                {
                  id: 2,
                  title: "Milestone 2: Isolate Public Administrative Web Interface",
                  desc: "Remove direct public IP binding on port 8443. Route management interface behind an Identity-Aware Proxy (IAP) with internal bastion access only.",
                  cmd: "iptables -A INPUT -p tcp --dport 8443 -s 10.0.99.0/24 -j ACCEPT\niptables -A INPUT -p tcp --dport 8443 -j DROP",
                },
                {
                  id: 3,
                  title: "Milestone 3: Deploy Microsegmentation Between Web & Database Tiers",
                  desc: "Configure stateful firewall rules to drop direct human or web frontend connections to database port 5432. Permit only App API workloads.",
                  cmd: "nft add rule inet filter forward ip saddr 10.0.1.0/24 ip daddr 10.0.3.50 tcp dport 5432 drop\nnft add rule inet filter forward ip saddr 10.0.2.10 ip daddr 10.0.3.50 tcp dport 5432 accept",
                },
                {
                  id: 4,
                  title: "Milestone 4: Audit & Inspect TLS Certificate Trust Chains",
                  desc: "Execute OpenSSL verification on internal microservices. Confirm Subject Alternative Name matches domain and all intermediate CAs are bundled.",
                  cmd: "openssl s_client -connect api.enterprise.internal:443 \\\n  -servername api.enterprise.internal \\\n  -verify_return_error",
                },
                {
                  id: 5,
                  title: "Milestone 5: Configure WireGuard Least-Privilege AllowedIPs",
                  desc: "Replace broad 0.0.0.0/0 VPN peer configuration with narrow /24 application subnets to enforce least-privilege cryptokey routing.",
                  cmd: "wg set wg0 peer <PEER_PUBKEY> allowed-ips 10.50.0.0/24\nwg show wg0",
                },
                {
                  id: 6,
                  title: "Milestone 6: Deploy Kubernetes Default-Deny NetworkPolicy",
                  desc: "Apply namespace isolation policy ensuring pods in namespace 'production' drop all unapproved ingress and egress traffic by default.",
                  cmd: "kubectl apply -f - <<EOF\napiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: default-deny-all\n  namespace: production\nspec:\n  podSelector: {}\n  policyTypes:\n  - Ingress\n  - Egress\nEOF",
                },
                {
                  id: 7,
                  title: "Milestone 7: Test Permitted vs Prohibited Pod Traffic",
                  desc: "Execute test probes from API pod (must succeed) and test probe from frontend/unauthorized pod (must time out / drop).",
                  cmd: "kubectl exec -it app-api -- nc -zv database-svc 5432\nkubectl exec -it web-frontend -- nc -zv database-svc 5432",
                },
                {
                  id: 8,
                  title: "Milestone 8: Build Architecture Review Matrix & Risk Register",
                  desc: "Compile findings into a formal Markdown risk register evaluating Likelihood, Impact, Risk Score, and assigned remediation owner.",
                  cmd: "cat <<EOF > architecture-review.md\n# Security Architecture Review & Risk Register\nStatus: Verified\nEOF",
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
                  Module 23 Knowledge Verification
                </h2>
                <p className="text-stone-700 text-xs mt-1">
                  10 scenario-based questions covering Zero Trust, microsegmentation, TLS 1.3 certificate validation, WireGuard vs IPsec, and Kubernetes NetworkPolicies.
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

        {/* TAB 5: ARCHITECTURE REVIEW DELIVERABLE */}
        {activeTab === "audit" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
              <div>
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  DELIVERABLE TEMPLATE
                </span>
                <h2 className="text-2xl font-bold text-stone-900 mt-2">
                  Enterprise Security Architecture Review &amp; Risk Register
                </h2>
                <p className="text-stone-700 text-xs mt-1">
                  Ready-to-use Markdown architecture audit deliverable (SEC-ARCH-2026-ZT-023) detailing blast radius mapping, risk registers, and Zero Trust implementation runbooks.
                </p>
              </div>

              <button
                onClick={() => handleCopy(architectureReviewTemplate, "arch-review")}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-[#ea580c] transition cursor-pointer shadow-sm"
              >
                {copiedKey === "arch-review" ? (
                  <>
                    <Check size={14} className="text-emerald-400" />
                    <span>Copied Markdown!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy Full Review Deliverable</span>
                  </>
                )}
              </button>
            </div>

            <div className="bg-stone-950 rounded-2xl p-5 border border-stone-800 font-mono text-[11px] text-stone-300 max-h-96 overflow-y-auto leading-relaxed whitespace-pre-wrap">
              {architectureReviewTemplate}
            </div>
          </div>
        )}

        {/* Footer Navigation Bar */}
        <div className="mt-10 pt-6 border-t border-[#e7e3da] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => {
              navigate("/learning/networks/advanced-routing");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#e7e3da] bg-white text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#ea580c] transition cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 22 — Advanced Routing &amp; Troubleshooting</span>
          </button>

          <button
            onClick={() => {
              navigate("/learning/networks/final-capstone");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 text-xs font-bold text-white hover:bg-[#ea580c] transition cursor-pointer"
          >
            <span>Next: Module 24 — Final Capstone: Network Engineering Lab</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
