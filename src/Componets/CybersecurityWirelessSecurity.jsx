import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Globe,
  Layers,
  Terminal,
  Shield,
  Activity,
  Play,
  RotateCcw,
  Sliders,
  Copy,
  Check,
  Server,
  Network,
  HelpCircle,
  Award,
  AlertTriangle,
  Sparkles,
  Lock,
  Workflow,
  Zap,
  Boxes,
  Compass,
  FileCode,
  ShieldCheck,
  RefreshCw,
  Cpu,
  Monitor,
  HardDrive,
  Clock,
  Gauge,
  SlidersHorizontal,
  ExternalLink,
  Eye,
  FileText,
  Key,
  Database,
  Search,
  AlertCircle,
  FileSpreadsheet,
  TerminalSquare,
  Binary,
  FolderGit2,
  Filter,
  ShieldAlert,
  Target,
  Crosshair,
  UserCheck,
  UserX,
  FileWarning,
  Flame,
  CheckSquare,
  Square,
  PlusCircle,
  Trash2,
  Download,
  Fingerprint,
  Radio,
  FileCheck2,
  ListFilter,
  CheckCheck,
  TrendingUp,
  GitPullRequest,
  GitBranch,
  GitCommit,
  GitMerge,
  Bug,
  Braces,
  FolderCheck,
  ShieldX,
  ClipboardList,
  EyeOff,
  Code2,
  Wrench,
  Package,
  Layers3,
  FileSearch,
  CheckCircle,
  XCircle,
  BarChart3,
  TestTube2,
  Share2,
  Wifi,
  WifiOff,
  RadioTower,
  KeyRound,
  Router,
  Laptop,
  Smartphone,
  Unplug,
  Split,
  SlidersVertical,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* PREPSPACES CYBERSECURITY MASTER COURSE: MODULE 17                          */
/* Wireless Network Security and Wi-Fi Defense                               */
/* Standards: IEEE 802.11ax/be, WPA3-SAE, 802.1X EAP, NIST SP 800-153 & CISA  */
/* -------------------------------------------------------------------------- */

export default function CybersecurityWirelessSecurity() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(1);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'handshake-sim' | 'enterprise-sim' | 'segmentation-sim' | 'wids-sim' | 'quiz'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 1: WI-FI PROTOCOL & KEY ESTABLISHMENT HANDSHAKE INSPECTOR        */
  /* WPA2 4-Way Handshake vs WPA3 SAE Dragonfly Protocol                        */
  /* -------------------------------------------------------------------------- */
  const [selectedHandshakeProtocol, setSelectedHandshakeProtocol] = useState("wpa3_sae"); // 'wpa2_4way' | 'wpa3_sae'
  const [handshakeStep, setHandshakeStep] = useState(1);
  const [dictionaryAttackSimulated, setDictionaryAttackSimulated] = useState(false);

  const handshakeDetails = useMemo(() => {
    if (selectedHandshakeProtocol === "wpa2_4way") {
      return {
        title: "WPA2-Personal 4-Way Handshake (IEEE 802.11i / AES-CCMP)",
        pskType: "Pre-Shared Key (PBKDF2 HMAC-SHA1 of Passphrase + SSID, 4096 rounds)",
        steps: [
          {
            step: 1,
            from: "Access Point (AP)",
            to: "Wireless Client",
            message: "Message 1 (M1)",
            payload: "ANonce (Random 256-bit Authenticator Nonce) + Key Replay Counter",
            note: "AP transmits ANonce in plaintext. Client now has PMK, ANonce, and generates its own SNonce to derive the Pairwise Transient Key (PTK).",
          },
          {
            step: 2,
            from: "Wireless Client",
            to: "Access Point (AP)",
            message: "Message 2 (M2)",
            payload: "SNonce + Message Integrity Code (MIC) + RSN IE Capabilities",
            note: "Client proves possession of PMK by calculating MIC over the frame using Key Confirmation Key (KCK). If adversary sniffs M1 + M2, they capture material for offline dictionary attacks!",
          },
          {
            step: 3,
            from: "Access Point (AP)",
            to: "Wireless Client",
            message: "Message 3 (M3)",
            payload: "Encrypted GTK (Group Temporal Key) + MIC + Install Flag",
            note: "AP verifies client MIC, confirms client knows PMK, and transmits encrypted broadcast GTK to allow broadcast/multicast frame reception.",
          },
          {
            step: 4,
            from: "Wireless Client",
            to: "Access Point (AP)",
            message: "Message 4 (M4)",
            payload: "Ack / Confirmation MIC",
            note: "Handshake completed. Both parties install the Temporal Encryption Key (TK - 128-bit AES-CCMP) into their radio hardware engines.",
          },
        ],
        vulnerability:
          "VULNERABLE TO OFFLINE DICTIONARY ATTACKS: An adversary capturing M1 and M2 (or forcing a deauth to trigger a reconnect) can compute PBKDF2(word, SSID) offline at millions of guesses/sec without alerting the AP.",
        forwardSecrecy: "NO (Compromising the PSK decrypts all past recorded radio captures).",
      };
    } else {
      return {
        title: "WPA3-Personal Simultaneous Authentication of Equals (SAE / Dragonfly)",
        pskType: "Password Element (PWE) via Hash-to-Curve (RFC 7664 / RFC 8446)",
        steps: [
          {
            step: 1,
            from: "Wireless Client",
            to: "Access Point (AP)",
            message: "SAE Commit (Peer 1)",
            payload: "Scalar_A (Finite Field scalar) + Element_A (Elliptic Curve point) + anti-clogging token",
            note: "Client computes Password Element (PWE) from passphrase and generates an ephemeral private key pair. Only public commitments are exchanged.",
          },
          {
            step: 2,
            from: "Access Point (AP)",
            to: "Wireless Client",
            message: "SAE Commit (Peer 2)",
            payload: "Scalar_B + Element_B",
            note: "AP generates its own ephemeral secret and replies with its scalar and curve element. Both peers independently compute the shared Premaster Secret (PMK).",
          },
          {
            step: 3,
            from: "Wireless Client",
            to: "Access Point (AP)",
            message: "SAE Confirm (Peer 1)",
            payload: "Send-Confirm Counter + Hash(KCK, Scalar_A, Scalar_B)",
            note: "Client proves knowledge of the negotiated key without ever revealing the password or any verifiable hash of it.",
          },
          {
            step: 4,
            from: "Access Point (AP)",
            to: "Wireless Client",
            message: "SAE Confirm (Peer 2)",
            payload: "Send-Confirm Counter + Hash(KCK, Scalar_B, Scalar_A)",
            note: "AP verifies confirm value. Handshake completes. Followed by a standard 4-way key derivation with guaranteed forward secrecy.",
          },
        ],
        vulnerability:
          "IMMUNE TO OFFLINE DICTIONARY ATTACKS: Zero-knowledge style key exchange means passive packet sniffing reveals no data that can be tested offline against wordlists.",
        forwardSecrecy: "YES (Compromising the Wi-Fi password does NOT decrypt previously captured sessions).",
      };
    }
  }, [selectedHandshakeProtocol]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 2: ENTERPRISE 802.1X & ROGUE RADIUS CERTIFICATE DEFENSE          */
  /* -------------------------------------------------------------------------- */
  const [eapClientConfig, setEapClientConfig] = useState({
    method: "EAP-TLS", // 'EAP-TLS' | 'PEAP-MSCHAPv2'
    serverCertValidation: true, // true (Validates CA) | false (Blind trust)
    expectedDomain: "radius.prepspaces.internal",
  });
  const [activeRadiusTarget, setActiveRadiusTarget] = useState("legitimate"); // 'legitimate' | 'rogue_evil_twin'
  const [eapAuthLogs, setEapAuthLogs] = useState([]);
  const [eapVerdict, setEapVerdict] = useState(null);

  const simulateEapAuth = () => {
    const logs = [];
    logs.push("[CLIENT] Initiating IEEE 802.1X Association with AP...");
    logs.push(`[AP] Sending EAP-Request/Identity over wireless link...`);
    logs.push(`[CLIENT] EAP-Response/Identity: user_samarth@prepspaces.internal`);

    if (activeRadiusTarget === "legitimate") {
      logs.push("[RADIUS] Legitimate corporate RADIUS (radius.prepspaces.internal) received request.");
      logs.push("[RADIUS] Presenting X.509 Server Certificate issued by 'Prepspaces Enterprise Root CA'...");

      if (eapClientConfig.serverCertValidation) {
        logs.push("[CLIENT-SUPPLICANT] Verifying certificate chain against local Trust Store...");
        logs.push("[CLIENT-SUPPLICANT] Certificate signature: VALID. Domain match: radius.prepspaces.internal.");
        logs.push("[EAP] Establishing TLS tunnel. Mutual crypto key derivation completed.");
        logs.push("[RADIUS] Access-Accept transmitted with RADIUS Attributes (VLAN-ID: 20 Employee).");
        setEapVerdict({
          status: "SUCCESSFUL_AUTHENTICATION",
          vlan: "VLAN 20 (Employee Secure)",
          message: "Secure mutual authentication confirmed. Client admitted to corporate network.",
          safe: true,
        });
      } else {
        logs.push("[CLIENT-SUPPLICANT] WARNING: Server certificate validation is DISABLED on client!");
        logs.push("[EAP] Connection established without validation (Dangerous practice).");
        logs.push("[RADIUS] Access-Accept transmitted.");
        setEapVerdict({
          status: "INSECURE_SUCCESS",
          vlan: "VLAN 20 (Employee Secure)",
          message: "Connected, but client device is vulnerable to future evil-twin interception.",
          safe: false,
        });
      }
    } else {
      // ROGUE RADIUS / EVIL TWIN
      logs.push("[ROGUE-AP] Attacker Rogue AP (BSSID 00:14:D1:66:77:88) spoofing SSID 'Prepspaces-Corp'!");
      logs.push("[ROGUE-RADIUS] Attacker RADIUS presenting self-signed certificate (CN=FreeRadius-Fake)...");

      if (eapClientConfig.serverCertValidation) {
        logs.push("[CLIENT-SUPPLICANT] ALERT: Server certificate issued by UNTRUSTED issuer!");
        logs.push(`[CLIENT-SUPPLICANT] Expected domain '${eapClientConfig.expectedDomain}', received 'FreeRadius-Fake'.`);
        logs.push("[CLIENT-SUPPLICANT] ABORTING CONNECTION: Rejecting TLS handshake. 0 credentials sent.");
        logs.push("[SECURITY-EVENT] Client safely disconnected from Rogue Evil-Twin AP.");
        setEapVerdict({
          status: "ATTACK_BLOCKED",
          vlan: "NONE (Disconnected)",
          message: "EVIL TWIN INTERCEPTION PREVENTED: Client strictly validated server certificate and rejected impostor AP.",
          safe: true,
        });
      } else {
        logs.push("[CLIENT-SUPPLICANT] Certificate warning ignored or auto-accepted!");
        if (eapClientConfig.method === "PEAP-MSCHAPv2") {
          logs.push("[ROGUE-RADIUS] Attacker captured MS-CHAPv2 Challenge-Response hash for 'user_samarth'!");
          logs.push("[EXPLOIT] Attacker initiates offline cracking on user password hash!");
        } else {
          logs.push("[ROGUE-RADIUS] Client presented client certificate to untrusted server.");
        }
        setEapVerdict({
          status: "CREDENTIAL_COMPROMISED",
          vlan: "ATTACKER_CONTROLLED_NETWORK",
          message: "CREDENTIAL THEFT: Client failed to validate server certificate, leaking authentication credentials to evil twin!",
          safe: false,
        });
      }
    }
    setEapAuthLogs(logs);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 3: WIRELESS NETWORK SEGMENTATION & ZERO-TRUST FLOW MATRIX        */
  /* -------------------------------------------------------------------------- */
  const [sourceWlan, setSourceWlan] = useState("guest"); // 'employee' | 'guest' | 'iot' | 'mgmt'
  const [destinationTarget, setDestinationTarget] = useState("admin_gui"); // 'admin_gui' | 'internal_api' | 'public_internet' | 'peer_client'
  const [clientIsolationEnabled, setClientIsolationEnabled] = useState(true);
  const [interVlanFirewallPolicy, setInterVlanFirewallPolicy] = useState("zero_trust"); // 'zero_trust' | 'permissive_flat'

  const segmentationResult = useMemo(() => {
    let allowed = false;
    let rationale = "";

    if (interVlanFirewallPolicy === "permissive_flat") {
      if (destinationTarget === "peer_client" && clientIsolationEnabled && sourceWlan === "guest") {
        allowed = false;
        rationale = "BLOCKED: Client isolation on AP radio dropped intra-BSS communication between guest devices.";
      } else {
        allowed = true;
        rationale = "CRITICAL RISK: Flat unsegmented network allows cross-VLAN lateral traffic to reach private targets.";
      }
    } else {
      // ZERO TRUST ACLS
      if (sourceWlan === "employee") {
        if (destinationTarget === "internal_api" || destinationTarget === "public_internet") {
          allowed = true;
          rationale = "ALLOWED: Authenticated employee identity permitted to reach internal corporate workloads and web.";
        } else if (destinationTarget === "admin_gui") {
          allowed = false;
          rationale = "BLOCKED: AP infrastructure management GUI is strictly restricted to Management VLAN 10.";
        } else if (destinationTarget === "peer_client") {
          allowed = false;
          rationale = "BLOCKED: Peer-to-peer lateral communication blocked by endpoint firewall and zero-trust ACL.";
        }
      } else if (sourceWlan === "guest") {
        if (destinationTarget === "public_internet") {
          allowed = true;
          rationale = "ALLOWED: Guest clients permitted outbound HTTP/HTTPS access to public internet only.";
        } else if (destinationTarget === "peer_client") {
          allowed = !clientIsolationEnabled;
          rationale = clientIsolationEnabled
            ? "BLOCKED: AP Client Isolation prevents guests from attacking fellow visitors on the same wireless network."
            : "VULNERABILITY: Client isolation disabled; malicious guest can arp-spoof and sniff other guest devices.";
        } else {
          allowed = false;
          rationale = "BLOCKED: Firewall ACL denies guest VLAN all access to internal subnets and management interfaces.";
        }
      } else if (sourceWlan === "iot") {
        if (destinationTarget === "internal_api") {
          allowed = false;
          rationale = "BLOCKED: IoT segment cannot initiate connections to corporate application servers.";
        } else if (destinationTarget === "public_internet") {
          allowed = true;
          rationale = "ALLOWED (Restricted): IoT devices allowed outbound telemetry to vendor cloud endpoint only.";
        } else {
          allowed = false;
          rationale = "BLOCKED: IoT micro-segmentation denies lateral movement and management port probing.";
        }
      } else if (sourceWlan === "mgmt") {
        allowed = true;
        rationale = "ALLOWED: Dedicated administrator management VLAN with MFA permitted to administer APs.";
      }
    }

    return { allowed, rationale };
  }, [sourceWlan, destinationTarget, clientIsolationEnabled, interVlanFirewallPolicy]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 4: WIDS WIRELESS INTRUSION DETECTION & SPECTRUM ANOMALIES         */
  /* -------------------------------------------------------------------------- */
  const [activeThreatScenario, setActiveThreatScenario] = useState("none"); // 'none' | 'rogue_ap' | 'evil_twin' | 'deauth_flood' | 'wps_reaver'
  const [pmfEnabled, setPmfEnabled] = useState(true); // 802.11w Protected Management Frames

  const widsTelemetry = useMemo(() => {
    switch (activeThreatScenario) {
      case "rogue_ap":
        return {
          alertName: "UNAUTHORIZED ACCESS POINT DETECTED (WIDS-001)",
          severity: "HIGH",
          bssid: "00:14:D1:66:32:09",
          ssid: "TP-Link_Corp_Extender",
          channel: "Channel 6 (2.4 GHz)",
          rssi: "-48 dBm (Strong local signal in Floor 2 West)",
          wiredStatus: "MAC Address observed on Cisco Switch Port Gi1/0/18 (Corporate LAN)",
          diagnosis:
            "An unauthorized consumer wireless router was connected directly to an office Ethernet wall jack, bridging the untrusted airwaves directly into the corporate wired LAN without authentication.",
          containment: "Shut down switch port Gi1/0/18 via 802.1X Port Security and dispatch physical security.",
        };

      case "evil_twin":
        return {
          alertName: "EVIL TWIN / SSID SPOOFING ATTACK (WIDS-002)",
          severity: "CRITICAL",
          bssid: "DC:A6:32:88:11:04",
          ssid: "Prepspaces-Employee",
          channel: "Channel 11 (2.4 GHz)",
          rssi: "-38 dBm (High-gain antenna nearby)",
          wiredStatus: "Not present on corporate switches (Operating purely over RF)",
          diagnosis:
            "Attacker radio broadcasting corporate SSID 'Prepspaces-Employee' using Open or fake WPA2-Personal security to lure corporate laptops into auto-associating and harvesting credentials.",
          containment: "Broadcast WIPS containment frames; push managed client profile enforcing 802.1X server cert checks.",
        };

      case "deauth_flood":
        return {
          alertName: "DEAUTHENTICATION / DISASSOCIATION FLOOD (WIDS-003)",
          severity: pmfEnabled ? "LOW (DEFENSE ACTIVE)" : "CRITICAL (DISRUPTION IN PROGRESS)",
          bssid: "Multiple Spoofed AP MACs",
          ssid: "Prepspaces-Corp",
          channel: "Channel 36 (5 GHz)",
          rssi: "-62 dBm",
          wiredStatus: "N/A (RF Frame Injection)",
          diagnosis: pmfEnabled
            ? "PMF (IEEE 802.11w) is ENABLED: AP and clients cryptographically verify management frames using BIP (BCH / AES-CMAC). Injected deauth frames without valid cryptographic integrity codes were safely dropped!"
            : "PMF is DISABLED: Attacker injected forged 802.11 management frames (Subtype 0x000C Deauth). 48 wireless laptops disconnected simultaneously! RF Denial of Service active.",
          containment: pmfEnabled
            ? "Protection working as designed. Zero client disconnects. Log attacker source for triangulation."
            : "Emergency action: Enforce 'Protected Management Frames = Required' across all corporate WLAN profiles.",
        };

      case "wps_reaver":
        return {
          alertName: "WPS PIN BRUTE-FORCE DETECTED (WIDS-004)",
          severity: "HIGH",
          bssid: "F8:1A:67:88:99:AA",
          ssid: "Prepspaces-Guest-Legacy",
          channel: "Channel 1 (2.4 GHz)",
          rssi: "-55 dBm",
          wiredStatus: "Legacy AP in Reception Area",
          diagnosis:
            "High frequency of EAP-WSC (Wi-Fi Simple Configuration) M1/M2 messages detected. Attacker tool (Reaver / Bully) attempting online brute-force of the 8-digit WPS PIN (which has only 11,000 effective combinations due to split checksum).",
          containment: "Immediately disable WPS (Wi-Fi Protected Setup) in AP firmware configuration.",
        };

      default:
        return {
          alertName: "RF SPECTRUM NOMINAL: ZERO ACTIVE ALERTS",
          severity: "INFORMATIONAL",
          bssid: "All 18 APs matching approved inventory",
          ssid: "Prepspaces-Employee, Prepspaces-Guest, Prepspaces-IoT",
          channel: "Auto-RF Channel Optimization Active",
          rssi: "Average -65 dBm across campus",
          wiredStatus: "All APs authenticated via 802.1X MAB",
          diagnosis: "Normal wireless operating baseline. Radio spectrum clean. All management frames protected.",
          containment: "Maintain continuous WIDS monitoring and weekly rogue AP sweeps.",
        };
    }
  }, [activeThreatScenario, pmfEnabled]);

  /* -------------------------------------------------------------------------- */
  /* KNOWLEDGE ASSESSMENT QUIZ (17.13 - 10 Questions)                           */
  /* -------------------------------------------------------------------------- */
  const quizQuestions = [
    {
      id: 1,
      question: "Which Wi-Fi security configuration should be retired immediately?",
      options: [
        "WPA3 with secure authentication",
        "WPA2 with AES-CCMP and a strong credential",
        "WEP",
        "Properly configured WPA2-Enterprise",
      ],
      correct: 2,
      explanation:
        "Wired Equivalent Privacy (WEP) has severe cryptographic flaws (short IVs, RC4 weaknesses, CRC32 checksums) that allow attackers to recover encryption keys in minutes. It must be completely retired.",
    },
    {
      id: 2,
      question: "What is the primary purpose of an SSID?",
      options: [
        "Encrypt wireless traffic",
        "Identify a wireless network by name",
        "Authenticate an individual employee",
        "Replace a firewall",
      ],
      correct: 1,
      explanation:
        "The Service Set Identifier (SSID) is merely a human-readable name identifying a wireless network. Hiding the SSID does not provide meaningful security as it is exposed in probe requests and association frames.",
    },
    {
      id: 3,
      question: "What is an essential protection when configuring enterprise EAP authentication?",
      options: [
        "Accept all server certificates blindly",
        "Disable certificate checks",
        "Validate the authentication server's certificate and identity",
        "Use the same password for every employee",
      ],
      correct: 2,
      explanation:
        "Clients must validate the authentication server's X.509 certificate and verify its expected domain name. Failing to validate certificates allows evil-twin rogue APs to intercept user credentials.",
    },
    {
      id: 4,
      question: "What does WPA3-Personal use to improve password-based authentication?",
      options: ["WEP", "SAE (Simultaneous Authentication of Equals)", "FTP", "PPTP"],
      correct: 1,
      explanation:
        "WPA3-Personal replaces the 4-way PSK handshake with Simultaneous Authentication of Equals (SAE), a password-authenticated key exchange (Dragonfly protocol) resistant to offline dictionary attacks.",
    },
    {
      id: 5,
      question: "What is the main purpose of PMF (Protected Management Frames / IEEE 802.11w)?",
      options: [
        "Increase internet bandwidth",
        "Protect supported robust management frames against certain forgery and replay attacks",
        "Replace wireless encryption",
        "Assign IP addresses",
      ],
      correct: 1,
      explanation:
        "Protected Management Frames (PMF) cryptographically sign and encrypt robust management frames (such as deauthentication and disassociation frames), preventing trivial wireless denial-of-service and handshake capture attacks.",
    },
    {
      id: 6,
      question: "Why should guest Wi-Fi be segmented into a separate network?",
      options: [
        "To make the SSID invisible",
        "To allow guests unrestricted access to internal systems",
        "To restrict guest access to only the services they need (internet only)",
        "To eliminate the need for authentication",
      ],
      correct: 2,
      explanation:
        "Guest devices are untrusted and unmanaged. Segmenting them into an isolated VLAN with firewall ACLs restricts them strictly to public internet access, preventing unauthorized access to internal servers and devices.",
    },
    {
      id: 7,
      question: "What is a rogue access point?",
      options: [
        "Any access point with a visible SSID",
        "An unauthorized AP that violates the organization's wireless policy",
        "A legitimate AP using a supported channel",
        "A client device with a randomized MAC address",
      ],
      correct: 1,
      explanation:
        "A rogue AP is an unauthorized wireless access point connected to an organization's network without administrative approval, creating an unmonitored backdoor into internal systems.",
    },
    {
      id: 8,
      question: "What is the difference between WIDS and WIPS?",
      options: [
        "WIDS primarily detects; WIPS may also take configured prevention actions",
        "WIDS encrypts traffic; WIPS assigns IP addresses",
        "They are always identical in function",
        "WIPS is only for password management",
      ],
      correct: 0,
      explanation:
        "A Wireless Intrusion Detection System (WIDS) passively monitors radio spectrum and alerts on threats. A Wireless Intrusion Prevention System (WIPS) can actively contain threats (e.g., via containment frames or switch port shutdown).",
    },
    {
      id: 9,
      question: "Does Enhanced Open (OWE) prove that a public Wi-Fi network is trustworthy?",
      options: [
        "Yes, because encryption proves the AP's identity",
        "Yes, because it requires an employee account",
        "No; it can encrypt the wireless link without authenticating the network's identity",
        "No; it means all traffic is unencrypted",
      ],
      correct: 2,
      explanation:
        "Opportunistic Wireless Encryption (OWE / RFC 8110) provides unauthenticated link-layer encryption. While it protects against passive eavesdropping over the air, it does not authenticate the AP or verify that the network is safe.",
    },
    {
      id: 10,
      question: "What should an assessor do when a wireless test cannot be completed in an audit?",
      options: [
        "Mark it as passed",
        "Record it as not tested and explain the limitation",
        "Invent a result based on the configuration",
        "Delete it from the report",
      ],
      correct: 1,
      explanation:
        "Professional security assessments require objective evidence. If a test cannot be executed due to scope, hardware, or environmental limits, it must be documented honestly as 'Not Tested' with the rationale recorded.",
    },
  ];

  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const handleSelectAnswer = (qId, optionIdx) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const quizScore = useMemo(() => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correct) score++;
    });
    return score;
  }, [quizAnswers]);

  /* -------------------------------------------------------------------------- */
  /* LAB WORKSHEET & CHECKLIST STATE (17.9 & 17.12)                             */
  /* -------------------------------------------------------------------------- */
  const [apHardeningChecks, setApHardeningChecks] = useState({
    wpa3_mode: true,
    disable_wep: true,
    disable_wps: true,
    enable_pmf: true,
    strong_passphrase: true,
    cert_validation: true,
    change_admin_creds: true,
    restrict_mgmt_path: true,
    separate_vlans: true,
    firewall_rules: true,
    restrict_ap_gui: true,
    guest_isolation: true,
    firmware_updated: true,
    ap_inventory: true,
    security_logging: true,
    config_backup: true,
  });

  const toggleCheck = (key) => {
    setApHardeningChecks((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedChecksCount = Object.values(apHardeningChecks).filter(Boolean).length;

  const [labApIdentity, setLabApIdentity] = useState("Cisco Catalyst 9120AX / UniFi U6-Pro (Firmware v6.6.65)");
  const [labWirelessMode, setLabWirelessMode] = useState("WPA3-Enterprise / WPA3-Personal Transition");
  const [labAuthMethod, setLabAuthMethod] = useState("802.1X EAP-TLS with Private PKI Root CA");
  const [labSegmentationSummary, setLabSegmentationSummary] = useState(
    "VLAN 10: Management (Restricted), VLAN 20: Employee (802.1X), VLAN 30: Guest (Internet Only + Client Isolation), VLAN 40: IoT (Microsegmented)"
  );
  const [labReportCopied, setLabReportCopied] = useState(false);

  const copyLabReport = () => {
    const reportText = `=====================================================
PREPSPACES WIRELESS SECURITY ASSESSMENT & AUDIT REPORT
=====================================================
Standard:            NIST SP 800-153 / CISA Wi-Fi Guidelines
AP Hardware / Model: ${labApIdentity}
Configured Security: ${labWirelessMode}
Authentication Mode: ${labAuthMethod}
Hardening Score:     ${completedChecksCount} / 16 Baseline Checks Verified

NETWORK SEGMENTATION ARCHITECTURE:
${labSegmentationSummary}

VALIDATION RESULTS:
1. Employee Device Auth:      ALLOWED (Admitted to VLAN 20 via 802.1X EAP-TLS)
2. Guest Internet Access:      ALLOWED (VLAN 30 Outbound HTTP/HTTPS)
3. Guest to AP Admin GUI:     BLOCKED (Denied by Inter-VLAN Firewall ACL)
4. Guest Peer-to-Peer Probe:   BLOCKED (Dropped by AP Radio Client Isolation)
5. IoT Lateral Movement:      BLOCKED (Isolated from Employee & Admin Subnets)
6. Untrusted RADIUS Cert:     BLOCKED (Client Supplicant rejected untrusted CA)
7. Deauth Attack Resistance:  VERIFIED (PMF IEEE 802.11w dropped forged frames)

AUDIT SUMMARY & RESIDUAL RISK:
No rogue APs detected on wired switches. WPS permanently disabled. All administrative
management interfaces restricted strictly to VLAN 10 with MFA enforcement.

Generated: ${new Date().toISOString()}
=====================================================`;
    navigator.clipboard.writeText(reportText);
    setLabReportCopied(true);
    setTimeout(() => setLabReportCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#0a0f1d] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Header */}
      <header className="border-b border-slate-800/80 bg-[#0d1424]/90 backdrop-blur sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => navigate("/learning/cybersecurity")}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition flex items-center text-xs"
              title="Return to Cybersecurity Curriculum"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              <span>Cybersecurity Track</span>
            </button>
            <span className="text-slate-600">/</span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              Module 17
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">
              Wireless Network Security & Wi-Fi Defense
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowAiTutor(true)}
              className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-600/80 to-blue-600/80 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-semibold flex items-center space-x-1.5 shadow-lg shadow-cyan-900/20 transition"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ask Nova AI Tutor</span>
            </button>
          </div>
        </div>
      </header>

      {/* Curriculum Module Navigation Bar */}
      <ModuleNav currentModuleId="wireless-security" />

      {/* Hero Banner */}
      <div className="border-b border-slate-800 bg-gradient-to-b from-slate-900 via-[#0c1322] to-[#0a0f1d] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono uppercase tracking-wider bg-cyan-950 text-cyan-400 border border-cyan-800/50">
                  Intermediate to Advanced · Network Defense
                </span>
                <span className="text-slate-500 text-xs">•</span>
                <span className="text-slate-400 text-xs flex items-center">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-400" />
                  IEEE 802.11ax/be, WPA3-SAE, NIST SP 800-153 & CISA
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                Wireless Network Security and Wi-Fi Defense
              </h1>
              <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
                Protect wireless infrastructure against rogue access points, evil-twin credential harvesting, deauthentication denial-of-service, and handshake sniffing. Master WPA3 Simultaneous Authentication of Equals (SAE), enterprise 802.1X EAP mutual certificate validation, multi-VLAN guest isolation, and real-time WIDS spectrum monitoring.
              </p>
            </div>

            <div className="flex md:flex-col items-center gap-3">
              <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl text-center min-w-[130px]">
                <div className="text-2xl font-bold text-cyan-400 font-mono">17 / 24</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-0.5">Course Sequence</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-xl text-center min-w-[130px]">
                <div className="text-2xl font-bold text-emerald-400 font-mono">4 Labs</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-0.5">Interactive Tools</div>
              </div>
            </div>
          </div>

          {/* Quick Nav Anchor Bar */}
          <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-slate-800/80 pt-4">
            <button
              onClick={() => setActiveTab("theory")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition flex items-center space-x-1.5 ${
                activeTab === "theory"
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20"
                  : "bg-slate-800/70 text-slate-300 hover:bg-slate-700"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Theory & Architecture</span>
            </button>
            <button
              onClick={() => setActiveTab("handshake-sim")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition flex items-center space-x-1.5 ${
                activeTab === "handshake-sim"
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20"
                  : "bg-slate-800/70 text-slate-300 hover:bg-slate-700"
              }`}
            >
              <KeyRound className="w-3.5 h-3.5" />
              <span>Simulator 1: 4-Way vs WPA3 SAE</span>
            </button>
            <button
              onClick={() => setActiveTab("enterprise-sim")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition flex items-center space-x-1.5 ${
                activeTab === "enterprise-sim"
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20"
                  : "bg-slate-800/70 text-slate-300 hover:bg-slate-700"
              }`}
            >
              <Server className="w-3.5 h-3.5" />
              <span>Simulator 2: 802.1X & Rogue RADIUS</span>
            </button>
            <button
              onClick={() => setActiveTab("segmentation-sim")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition flex items-center space-x-1.5 ${
                activeTab === "segmentation-sim"
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20"
                  : "bg-slate-800/70 text-slate-300 hover:bg-slate-700"
              }`}
            >
              <Split className="w-3.5 h-3.5" />
              <span>Simulator 3: Zero-Trust Segmentation</span>
            </button>
            <button
              onClick={() => setActiveTab("wids-sim")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition flex items-center space-x-1.5 ${
                activeTab === "wids-sim"
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20"
                  : "bg-slate-800/70 text-slate-300 hover:bg-slate-700"
              }`}
            >
              <Radio className="w-3.5 h-3.5" />
              <span>Simulator 4: WIDS Threat Monitor</span>
            </button>
            <button
              onClick={() => setActiveTab("quiz")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition flex items-center space-x-1.5 ${
                activeTab === "quiz"
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20"
                  : "bg-slate-800/70 text-slate-300 hover:bg-slate-700"
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Quiz ({quizSubmitted ? `${quizScore}/10` : "10 Qs"})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Column: Topics Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 sticky top-20 space-y-4">
            <h3 className="text-xs font-bold text-slate-400 tracking-wider uppercase flex items-center justify-between">
              <span>Curriculum Navigator</span>
              <span className="text-cyan-400 font-mono">17 / 24</span>
            </h3>

            <div className="space-y-1">
              {[
                { id: 1, title: "17.1 Module Overview & Objectives" },
                { id: 2, title: "17.2 Wireless Networking Fundamentals" },
                { id: 3, title: "17.3 Standards: WEP, WPA, WPA2, WPA3" },
                { id: 4, title: "17.4 Personal vs Enterprise (802.1X)" },
                { id: 5, title: "17.5 Encryption & 4-Way Handshake" },
                { id: 6, title: "17.6 Common Wireless Threats" },
                { id: 7, title: "17.7 Wireless Network Segmentation" },
                { id: 8, title: "17.8 WIDS & Wireless Monitoring" },
                { id: 9, title: "17.9 Secure AP Configuration" },
                { id: 10, title: "17.10 Client Device & User Security" },
                { id: 11, title: "17.11 Assessment Methodology" },
                { id: 12, title: "17.12 Practical Lab & Audit" },
                { id: 13, title: "17.13 Knowledge Assessment" },
                { id: 14, title: "17.14 Official References & Standards" },
                { id: 15, title: "17.15 Key Engineering Takeaways" },
              ].map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => {
                    setSelectedTopic(topic.id);
                    setActiveTab("theory");
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs transition flex items-center justify-between ${
                    selectedTopic === topic.id
                      ? "bg-cyan-500/15 text-cyan-300 font-semibold border-l-2 border-cyan-400"
                      : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                  }`}
                >
                  <span className="truncate">{topic.title}</span>
                </button>
              ))}
            </div>

            {/* Quick Practice Jump */}
            <div className="pt-4 border-t border-slate-800">
              <div className="text-[11px] font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                Interactive Labs
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  onClick={() => setActiveTab("handshake-sim")}
                  className="px-2 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-[11px] font-medium text-left truncate flex items-center"
                >
                  <KeyRound className="w-3 h-3 mr-1 text-cyan-400 shrink-0" />
                  <span>Handshakes</span>
                </button>
                <button
                  onClick={() => setActiveTab("enterprise-sim")}
                  className="px-2 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-[11px] font-medium text-left truncate flex items-center"
                >
                  <Server className="w-3 h-3 mr-1 text-blue-400 shrink-0" />
                  <span>802.1X EAP</span>
                </button>
                <button
                  onClick={() => setActiveTab("segmentation-sim")}
                  className="px-2 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-[11px] font-medium text-left truncate flex items-center"
                >
                  <Split className="w-3 h-3 mr-1 text-emerald-400 shrink-0" />
                  <span>VLAN ACLs</span>
                </button>
                <button
                  onClick={() => setActiveTab("wids-sim")}
                  className="px-2 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-[11px] font-medium text-left truncate flex items-center"
                >
                  <Radio className="w-3 h-3 mr-1 text-amber-400 shrink-0" />
                  <span>WIDS Radar</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="lg:col-span-3 space-y-8">
          {/* TAB 1: THEORY & ARCHITECTURE */}
          {activeTab === "theory" && (
            <div className="space-y-10">
              {/* SECTION 17.1 */}
              {selectedTopic === 1 && (
                <section className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Section 17.1</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Module Overview & Learning Objectives</h2>
                  </div>

                  <p className="text-slate-300 leading-relaxed text-sm">
                    Wireless networks transmit data through open radio frequency (RF) spectrum. Unlike wired Ethernet cables enclosed within corporate walls, Wi-Fi signals readily penetrate drywall, windows, and physical building boundaries. Consequently, any adversary parked on the street or in an adjacent office suite can observe frames, transmit forged management packets, and attempt credential harvesting unless robust cryptographic and architectural defenses are enforced.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                      <div className="flex items-center space-x-2 text-cyan-400 font-semibold text-sm">
                        <Wifi className="w-4 h-4" />
                        <span>Core Learning Objectives</span>
                      </div>
                      <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                        <li>Understand IEEE 802.11 physical, MAC layer framing, and beacon/probe exchanges.</li>
                        <li>Trace the historical progression from obsolete WEP/TKIP to WPA2-CCMP and WPA3-SAE.</li>
                        <li>Differentiate shared-secret Personal modes from enterprise IEEE 802.1X EAP authentication.</li>
                        <li>Configure and harden wireless access points against rogue bridging and evil-twin spoofs.</li>
                        <li>Analyze Protected Management Frames (PMF / 802.11w) to counter deauth DoS attacks.</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                      <div className="flex items-center space-x-2 text-emerald-400 font-semibold text-sm">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Enterprise Defense & Zero Trust</span>
                      </div>
                      <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                        <li>Architect multi-VLAN segmentation for Employees, Guests, IoT, and Management.</li>
                        <li>Deploy WIDS/WIPS sensors to detect unauthorized BSSIDs and RF anomalies.</li>
                        <li>Audit enterprise supplicants to prevent credential theft via rogue RADIUS certificates.</li>
                        <li>Execute systematic wireless security assessments following NIST SP 800-153 guidelines.</li>
                        <li>Maintain AP firmware lifecycles, configuration drift audits, and secret rotation.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-800/40 text-xs text-cyan-300 flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">Strict Defensive Scope & Authorization: </span>
                      All exercises in this module are purely defensive and must be executed against hardware and spectrum owned or explicitly authorized by your organization. Never transmit deauthentication frames or conduct active attacks against neighboring networks.
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION 17.2 */}
              {selectedTopic === 2 && (
                <section className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Section 17.2</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Wireless Networking Fundamentals</h2>
                  </div>

                  <p className="text-slate-300 leading-relaxed text-sm">
                    A Wireless Local Area Network (WLAN) connects devices using radio frequencies according to the IEEE 802.11 standards family. Understanding how wireless clients discover, authenticate, and bridge into corporate infrastructure is essential to designing effective defenses.
                  </p>

                  <h3 className="text-base font-bold text-white">How a Wi-Fi Connection is Established</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center text-xs">
                    <div className="p-3 rounded bg-slate-900 border border-slate-800 space-y-1">
                      <span className="font-bold text-cyan-400 block font-mono">1. Discovery</span>
                      <p className="text-[11px] text-slate-400">AP sends Beacons; Client sends Probe Requests to find SSIDs.</p>
                    </div>
                    <div className="p-3 rounded bg-slate-900 border border-slate-800 space-y-1">
                      <span className="font-bold text-blue-400 block font-mono">2. Selection</span>
                      <p className="text-[11px] text-slate-400">Client matches SSID, signal strength (RSSI), and security mode.</p>
                    </div>
                    <div className="p-3 rounded bg-slate-900 border border-slate-800 space-y-1">
                      <span className="font-bold text-indigo-400 block font-mono">3. Auth & Assoc</span>
                      <p className="text-[11px] text-slate-400">Open system auth exchange followed by 802.11 Association frame.</p>
                    </div>
                    <div className="p-3 rounded bg-slate-900 border border-slate-800 space-y-1">
                      <span className="font-bold text-amber-400 block font-mono">4. Key Exchange</span>
                      <p className="text-[11px] text-slate-400">WPA2 4-Way or WPA3 SAE Dragonfly derives session keys (PTK/GTK).</p>
                    </div>
                    <div className="p-3 rounded bg-slate-900 border border-slate-800 space-y-1">
                      <span className="font-bold text-emerald-400 block font-mono">5. Network Access</span>
                      <p className="text-[11px] text-slate-400">DHCP IP lease granted, subject to 802.1Q VLAN and firewall ACLs.</p>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white pt-2">Core Wireless Nomenclature & Security Realities</h3>
                  <div className="overflow-x-auto border border-slate-800 rounded-xl">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead className="bg-slate-900 text-slate-300 font-semibold border-b border-slate-800">
                        <tr>
                          <th className="p-3">Parameter</th>
                          <th className="p-3">Definition & Function</th>
                          <th className="p-3">Defensive Security Reality</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 text-slate-300">
                        <tr className="hover:bg-slate-900/40">
                          <td className="p-3 font-mono text-cyan-300 font-bold">SSID</td>
                          <td className="p-3">Human-readable network name broadcasted in beacon frames (e.g., &quot;Prepspaces-Corp&quot;).</td>
                          <td className="p-3 text-amber-300">Hiding SSID does NOT stop attackers; it is exposed in client probe requests.</td>
                        </tr>
                        <tr className="hover:bg-slate-900/40">
                          <td className="p-3 font-mono text-cyan-300 font-bold">BSSID</td>
                          <td className="p-3">48-bit MAC address of the specific AP radio interface serving the basic service set.</td>
                          <td className="p-3 text-emerald-300">Essential for WIDS to distinguish legitimate enterprise APs from rogue APs.</td>
                        </tr>
                        <tr className="hover:bg-slate-900/40">
                          <td className="p-3 font-mono text-cyan-300 font-bold">Client MAC</td>
                          <td className="p-3">Link-layer hardware address of the wireless client NIC.</td>
                          <td className="p-3 text-rose-300">Easily randomized (iOS/Android) or spoofed (`macchanger`); never use as primary auth!</td>
                        </tr>
                        <tr className="hover:bg-slate-900/40">
                          <td className="p-3 font-mono text-cyan-300 font-bold">VLAN (802.1Q)</td>
                          <td className="p-3">Logical subnets assigned dynamically via RADIUS or statically per SSID.</td>
                          <td className="p-3 text-emerald-300">Primary mechanism to isolate guest visitors and IoT devices from corporate assets.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              )}

              {/* SECTION 17.3 */}
              {selectedTopic === 3 && (
                <section className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Section 17.3</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Wi-Fi Security Standards: WEP, WPA, WPA2, and WPA3</h2>
                  </div>

                  <p className="text-slate-300 leading-relaxed text-sm">
                    The chosen security standard dictates how encryption keys are derived and how traffic frames are protected over the air. Understanding the cryptographic weaknesses of obsolete standards explains why modern enterprise policy mandates WPA3 or hardened WPA2-Enterprise.
                  </p>

                  <div className="space-y-4">
                    {/* WEP */}
                    <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-rose-400 text-sm">WEP (Wired Equivalent Privacy) — OBSOLETE / RETIRED</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-rose-950 text-rose-400 border border-rose-800">Do Not Use</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Introduced in 1997, WEP relied on RC4 stream encryption with static 40-bit or 104-bit keys concatenated with a short 24-bit Initialization Vector (IV). Because 24-bit IVs repeat rapidly in busy networks, the Fluhrer, Mantin, and Shamir (FMS) attack allows recovering the entire static key by capturing just a few thousand frames.
                      </p>
                    </div>

                    {/* WPA / TKIP */}
                    <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-amber-400 text-sm">WPA (Wi-Fi Protected Access) / TKIP — OBSOLETE</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-950 text-amber-400 border border-amber-800">Do Not Use</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        An interim fix designed to run on existing WEP hardware. Temporal Key Integrity Protocol (TKIP) mixed keys per packet and added the Michael Message Integrity Code (MIC). However, TKIP has known collision and keystream recovery vulnerabilities (Beck-Tews and Ohigashi-Morii attacks) and must be disabled.
                      </p>
                    </div>

                    {/* WPA2 */}
                    <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-cyan-400 text-sm">WPA2 (IEEE 802.11i / AES-CCMP) — ACCEPTABLE</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-400 border border-cyan-800">Secure Baseline</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Replaced RC4 with military-grade AES encryption using Counter Mode with Cipher Block Chaining Message Authentication Code Protocol (CCMP). When deployed in Enterprise mode with 802.1X EAP, it provides strong security. However, WPA2-Personal PSK handshakes remain susceptible to offline dictionary cracking if captured.
                      </p>
                    </div>

                    {/* WPA3 */}
                    <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-emerald-400 text-sm">WPA3 (IEEE 802.11ax/be / SAE) — RECOMMENDED</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-800">Preferred Standard</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Mandates Protected Management Frames (PMF), adopts Simultaneous Authentication of Equals (SAE) to eliminate offline password guessing, and provides 192-bit cryptographic suites in Enterprise mode (CNSA suite). WPA3 provides forward secrecy: an adversary who learns the password cannot decrypt recorded historical traffic.
                      </p>
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION 17.4 */}
              {selectedTopic === 4 && (
                <section className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Section 17.4</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Wi-Fi Authentication Models: Personal vs. Enterprise</h2>
                  </div>

                  <p className="text-slate-300 leading-relaxed text-sm">
                    Authentication establishes the verified identity connecting to the wireless medium. Choosing between Personal and Enterprise models defines user accountability, key lifecycle management, and revocation capabilities.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                      <span className="font-bold text-cyan-400 text-sm flex items-center space-x-1.5">
                        <Key className="w-4 h-4" />
                        <span>WPA-Personal (Shared Passphrase)</span>
                      </span>
                      <p className="text-slate-300 leading-relaxed">
                        All users share a single pre-shared key (PSK). Simple to configure for small offices, but creates massive operational risk:
                      </p>
                      <ul className="text-slate-400 space-y-1 list-disc list-inside">
                        <li>Departed employees retain the password until every AP and device is manually re-keyed.</li>
                        <li>Zero individual user accountability in connection logs.</li>
                        <li>High exposure to passphrase sharing, shoulder surfing, and credential leakage.</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                      <span className="font-bold text-emerald-400 text-sm flex items-center space-x-1.5">
                        <Server className="w-4 h-4" />
                        <span>WPA-Enterprise (IEEE 802.1X / RADIUS)</span>
                      </span>
                      <p className="text-slate-300 leading-relaxed">
                        Each user or managed device authenticates using unique credentials or X.509 client certificates:
                      </p>
                      <ul className="text-slate-400 space-y-1 list-disc list-inside">
                        <li>Instant per-user revocation in Active Directory / Okta when an employee departs.</li>
                        <li>Dynamic unique Pairwise Transient Keys (PTK) derived for each session.</li>
                        <li>RADIUS attributes can dynamically assign clients to distinct VLANs based on role.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                    <h3 className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                      Critical EAP Server Certificate Validation Rule
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      In EAP-TLS and PEAP-MSCHAPv2, the client supplicant MUST be configured to validate the RADIUS server&apos;s X.509 certificate against an explicit enterprise Root CA and enforce expected domain matching (e.g. `radius.prepspaces.internal`). If users are permitted to click through certificate warnings, an attacker operating a Rogue AP can harvest corporate credentials in seconds.
                    </p>
                  </div>
                </section>
              )}

              {/* SECTION 17.5 */}
              {selectedTopic === 5 && (
                <section className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Section 17.5</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Wireless Encryption & The 4-Way Handshake</h2>
                  </div>

                  <p className="text-slate-300 leading-relaxed text-sm">
                    Wi-Fi encryption protects frames over the wireless RF link between client NIC and AP radio. However, wireless encryption does NOT protect traffic once it exits the AP into the wired switch, nor does it secure unencrypted HTTP protocols against internet-based interception.
                  </p>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3 font-mono text-xs">
                    <span className="font-bold text-cyan-400 block border-b border-slate-800 pb-2">
                      The WPA2 4-Way Handshake Mechanics (IEEE 802.11i)
                    </span>
                    <div className="space-y-2 text-slate-300">
                      <div><strong className="text-cyan-300">PMK (Pairwise Master Key):</strong> Derived via `PBKDF2(Passphrase, SSID, 4096, 256)`.</div>
                      <div><strong className="text-cyan-300">PTK (Pairwise Transient Key):</strong> Derived from `PRF-512(PMK, &quot;Pairwise key expansion&quot;, Min(AA,SPA) || Max(AA,SPA) || Min(ANonce,SNonce) || Max(ANonce,SNonce))`.</div>
                      <div className="p-3 rounded bg-slate-950 border border-slate-800 text-[11px] text-slate-300 space-y-1">
                        <div>1. AP --&gt; Client : Message 1 (ANonce)</div>
                        <div>2. Client --&gt; AP : Message 2 (SNonce + MIC) [Vulnerable to offline wordlist cracking]</div>
                        <div>3. AP --&gt; Client : Message 3 (Install GTK + MIC)</div>
                        <div>4. Client --&gt; AP : Message 4 (Ack)</div>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION 17.6 */}
              {selectedTopic === 6 && (
                <section className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Section 17.6</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Common Wireless Threats & Defensive Analysis</h2>
                  </div>

                  <p className="text-slate-300 leading-relaxed text-sm">
                    Because wireless signals broadcast indiscriminately, defensive engineers must counteract rogue infrastructure, credential impersonation, and management frame manipulation.
                  </p>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                      <span className="font-bold text-rose-400 text-sm">1. Rogue Access Points</span>
                      <p className="text-xs text-slate-300">
                        An unapproved AP connected to the corporate wired Ethernet LAN (e.g. employee installing a home Wi-Fi router under their desk). It bypasses 802.1X and firewall controls. Remediated via 802.1X Port Security, wired LLDP/CDP discovery, and regular WIDS sweeps.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                      <span className="font-bold text-amber-400 text-sm">2. Evil-Twin Impersonation</span>
                      <p className="text-xs text-slate-300">
                        Attacker broadcasts an identical SSID with high transmit power. Lured clients establish connection with attacker who inspects or alters traffic. Defended with managed 802.1X enterprise profiles and strict Root CA certificate pinning.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                      <span className="font-bold text-cyan-400 text-sm">3. Deauthentication / Disassociation Floods</span>
                      <p className="text-xs text-slate-300">
                        Adversaries forge 802.11 management frames spoofing the AP&apos;s BSSID to force clients off the air (DoS or 4-way handshake capture). Fully neutralized by enforcing <strong>Protected Management Frames (PMF / IEEE 802.11w)</strong>.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                      <span className="font-bold text-rose-400 text-sm">4. WPS (Wi-Fi Protected Setup) PIN Exploits</span>
                      <p className="text-xs text-slate-300">
                        WPS PINs split 8 digits into two 4-digit halves verified separately, reducing search space from 100,000,000 to only 11,000 combinations. Attackers use Reaver to crack the PIN in 2 to 6 hours. Defended by disabling WPS entirely.
                      </p>
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION 17.7 */}
              {selectedTopic === 7 && (
                <section className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Section 17.7</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Wireless Network Segmentation & Zero Trust</h2>
                  </div>

                  <p className="text-slate-300 leading-relaxed text-sm">
                    Connecting to Wi-Fi must never provide flat, unrestricted access to the corporate intranet. Modern WLAN architecture establishes distinct micro-segmented zones enforced by hardware firewalls.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                      <span className="font-bold text-cyan-400 block font-mono">Employee WLAN (VLAN 20)</span>
                      <p className="text-slate-400">Managed corporate devices. 802.1X EAP-TLS. Access to internal servers, cloud workloads, and intranet.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                      <span className="font-bold text-blue-400 block font-mono">Guest WLAN (VLAN 30)</span>
                      <p className="text-slate-400">Visitors and personal phones. Client isolation enabled on AP radio. Outbound internet access only; zero intranet routing.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                      <span className="font-bold text-amber-400 block font-mono">IoT WLAN (VLAN 40)</span>
                      <p className="text-slate-400">Smart TVs, badge readers, conference cameras. Microsegmented. Outbound strictly restricted to vendor cloud IPs.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                      <span className="font-bold text-rose-400 block font-mono">Management (VLAN 10)</span>
                      <p className="text-slate-400">AP administration interfaces, wireless controllers, RADIUS. Inaccessible from any wireless SSID.</p>
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION 17.8 */}
              {selectedTopic === 8 && (
                <section className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Section 17.8</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Wireless Intrusion Detection & Monitoring (WIDS)</h2>
                  </div>

                  <p className="text-slate-300 leading-relaxed text-sm">
                    Wireless Intrusion Detection Systems (WIDS) continuously analyze radio spectrum to identify rogue BSSIDs, evil twins, ad-hoc bridges, and deauth attacks. A WIPS (Prevention) can additionally execute automated containment actions.
                  </p>

                  <div className="overflow-x-auto border border-slate-800 rounded-xl">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead className="bg-slate-900 text-slate-300 font-semibold border-b border-slate-800">
                        <tr>
                          <th className="p-3">Capability</th>
                          <th className="p-3">WIDS (Detection)</th>
                          <th className="p-3">WIPS (Prevention)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 text-slate-300">
                        <tr className="hover:bg-slate-900/40">
                          <td className="p-3 font-semibold text-white">Detect Rogue APs & Insecure BSSIDs</td>
                          <td className="p-3 text-emerald-400">Yes</td>
                          <td className="p-3 text-emerald-400">Yes</td>
                        </tr>
                        <tr className="hover:bg-slate-900/40">
                          <td className="p-3 font-semibold text-white">Alert SOC on Deauth Floods</td>
                          <td className="p-3 text-emerald-400">Yes</td>
                          <td className="p-3 text-emerald-400">Yes</td>
                        </tr>
                        <tr className="hover:bg-slate-900/40">
                          <td className="p-3 font-semibold text-white">Automated Active Containment</td>
                          <td className="p-3 text-slate-500">No (Passive monitoring only)</td>
                          <td className="p-3 text-emerald-400">Yes (Transmits over-the-air deauth to rogue clients)</td>
                        </tr>
                        <tr className="hover:bg-slate-900/40">
                          <td className="p-3 font-semibold text-white">Operational Risk</td>
                          <td className="p-3 text-cyan-300">Alert fatigue if threshold is noisy</td>
                          <td className="p-3 text-rose-300 font-bold">Risk of disrupting legitimate neighboring APs</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              )}

              {/* SECTION 17.9 */}
              {selectedTopic === 9 && (
                <section className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Section 17.9</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Secure Wireless Access Point Configuration</h2>
                  </div>

                  <p className="text-slate-300 leading-relaxed text-sm">
                    Access points must be treated as critical network appliances with rigorous configuration baselines, firmware upgrade cadences, and configuration drift monitoring.
                  </p>

                  <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                        Interactive AP Hardening Checklist ({completedChecksCount} / 16)
                      </span>
                      <button
                        onClick={() =>
                          setApHardeningChecks({
                            wpa3_mode: true,
                            disable_wep: true,
                            disable_wps: true,
                            enable_pmf: true,
                            strong_passphrase: true,
                            cert_validation: true,
                            change_admin_creds: true,
                            restrict_mgmt_path: true,
                            separate_vlans: true,
                            firewall_rules: true,
                            restrict_ap_gui: true,
                            guest_isolation: true,
                            firmware_updated: true,
                            ap_inventory: true,
                            security_logging: true,
                            config_backup: true,
                          })
                        }
                        className="text-[11px] text-cyan-400 hover:underline"
                      >
                        Reset All
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {[
                        { key: "wpa3_mode", text: "Enforce WPA3-Enterprise or WPA3-Personal (SAE)" },
                        { key: "disable_wep", text: "Disable WEP, WPA/TKIP, and legacy cipher suites" },
                        { key: "disable_wps", text: "Disable WPS (Wi-Fi Protected Setup) permanently" },
                        { key: "enable_pmf", text: "Enable Protected Management Frames (PMF / 802.11w)" },
                        { key: "strong_passphrase", text: "Use high-entropy 24+ char passphrase for Personal Wi-Fi" },
                        { key: "cert_validation", text: "Configure trusted Root CA certificate validation for 802.1X" },
                        { key: "change_admin_creds", text: "Change default administrative password and usernames" },
                        { key: "restrict_mgmt_path", text: "Restrict AP management to dedicated wired Management VLAN" },
                        { key: "separate_vlans", text: "Segment Employee, Guest, IoT, and Management subnets" },
                        { key: "firewall_rules", text: "Apply strict zero-trust firewall ACLs between VLANs" },
                        { key: "restrict_ap_gui", text: "Block access to AP web GUI from Guest and IoT SSIDs" },
                        { key: "guest_isolation", text: "Enable Client Isolation on Guest and Public radios" },
                        { key: "firmware_updated", text: "Upgrade AP firmware and subscribe to vendor advisories" },
                        { key: "ap_inventory", text: "Maintain verified inventory of all AP serials and BSSIDs" },
                        { key: "security_logging", text: "Forward syslog and RADIUS accounting to central SIEM" },
                        { key: "config_backup", text: "Back up encrypted AP configurations and monitor drift" },
                      ].map((item) => (
                        <button
                          key={item.key}
                          onClick={() => toggleCheck(item.key)}
                          className={`p-2 rounded-lg border text-left transition flex items-center space-x-2 ${
                            apHardeningChecks[item.key]
                              ? "bg-cyan-950/40 border-cyan-500/40 text-cyan-200"
                              : "bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800"
                          }`}
                        >
                          {apHardeningChecks[item.key] ? (
                            <CheckSquare className="w-4 h-4 text-cyan-400 shrink-0" />
                          ) : (
                            <Square className="w-4 h-4 text-slate-500 shrink-0" />
                          )}
                          <span className="text-[11px] truncate">{item.text}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION 17.10 */}
              {selectedTopic === 10 && (
                <section className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Section 17.10</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Client Device and User Security</h2>
                  </div>

                  <p className="text-slate-300 leading-relaxed text-sm">
                    Securing the access point is only half of wireless defense. Endpoint laptops, smartphones, and travelers connecting to untrusted hotel and coffee shop networks must enforce client-side safeguards.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                      <span className="font-bold text-cyan-400 text-sm">Corporate Client Hardening</span>
                      <ul className="text-slate-300 space-y-1.5 list-disc list-inside">
                        <li>Deploy managed MDM profiles to prevent users from altering 802.1X certificate settings.</li>
                        <li>Disable &quot;Connect automatically to open networks&quot; in Windows, macOS, and Linux.</li>
                        <li>Keep Wi-Fi NIC drivers and operating system security patches current.</li>
                        <li>Enable local host firewalls to block inbound SMB and RPC scans on public networks.</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                      <span className="font-bold text-amber-400 text-sm">Public Wi-Fi Travel Hygiene</span>
                      <ul className="text-slate-300 space-y-1.5 list-disc list-inside">
                        <li>Never click through TLS/HTTPS certificate warnings on public hot spots.</li>
                        <li>Use an enterprise VPN tunnel to encapsulate all DNS queries and web traffic.</li>
                        <li>Turn off Wi-Fi when not in use to stop device from broadcasting probe request history.</li>
                        <li>Beware that captive portals can serve spoofed login forms and malicious firmware downloads.</li>
                      </ul>
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION 17.11 */}
              {selectedTopic === 11 && (
                <section className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Section 17.11</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Wireless Security Assessment Methodology</h2>
                  </div>

                  <p className="text-slate-300 leading-relaxed text-sm">
                    Structured wireless audits follow a defined 5-phase methodology aligned with NIST SP 800-153 and NIST SP 800-115, providing repeatable, evidence-based evaluations.
                  </p>

                  <div className="space-y-3 text-xs">
                    {[
                      { step: "Phase 1: Authorization & Rules of Engagement", desc: "Document authorized campus boundaries, permitted testing windows, BSSID inventories, and safety escalation contacts." },
                      { step: "Phase 2: Asset Discovery & Spectrum Survey", desc: "Perform passive RF spectrum sweep. Record observed SSIDs, BSSIDs, channels, transmit power, and compare against approved asset databases." },
                      { step: "Phase 3: Configuration & Cryptographic Audit", desc: "Inspect AP firmware versions, encryption modes, WPS status, PMF settings, and RADIUS certificate trust configurations." },
                      { step: "Phase 4: Controlled Isolation Validation", desc: "Using dedicated test devices, assert that guest devices cannot reach internal IPs, client isolation functions, and rogue RADIUS servers are rejected." },
                      { step: "Phase 5: Actionable Reporting & Remediation", desc: "Compile findings with CVSS scores, packet evidence, and retesting validation procedures." },
                    ].map((phase, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-slate-900/70 border border-slate-800 flex items-start space-x-3">
                        <span className="w-6 h-6 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 flex items-center justify-center font-bold font-mono shrink-0 text-xs">
                          {idx + 1}
                        </span>
                        <div>
                          <span className="font-bold text-white block">{phase.step}</span>
                          <span className="text-slate-400">{phase.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* SECTION 17.12: PRACTICAL LAB */}
              {selectedTopic === 12 && (
                <section className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Section 17.12</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Practical Lab: Build & Audit a Secure Wi-Fi Environment</h2>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-cyan-300 text-sm">Lab Scenario: Wireless Network Defense & Configuration Audit</span>
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-cyan-950 text-cyan-400 border border-cyan-800/50">
                        90–120 Minutes
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Design and evaluate a hardened enterprise wireless environment with separate Employee, Guest, and IoT network zones. Follow Tasks A through E to harden the AP, validate inter-VLAN segmentation, and compile a standardized audit report.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2">
                      <div className="p-3 rounded bg-slate-950 border border-slate-800 space-y-1">
                        <span className="font-bold text-cyan-400">Task A: Establish Baseline</span>
                        <p className="text-slate-400">Record hardware, firmware, BSSIDs, and supported ciphers.</p>
                      </div>
                      <div className="p-3 rounded bg-slate-950 border border-slate-800 space-y-1">
                        <span className="font-bold text-cyan-400">Task B: Harden the AP</span>
                        <p className="text-slate-400">Disable WPS, enable PMF, enforce WPA3, replace admin credentials.</p>
                      </div>
                      <div className="p-3 rounded bg-slate-950 border border-slate-800 space-y-1">
                        <span className="font-bold text-cyan-400">Task C: Validate Segmentation</span>
                        <p className="text-slate-400">Assert Guest cannot reach AP GUI or Employee internal services.</p>
                      </div>
                      <div className="p-3 rounded bg-slate-950 border border-slate-800 space-y-1">
                        <span className="font-bold text-cyan-400">Task D & E: Monitoring & Report</span>
                        <p className="text-slate-400">Review WIDS logs and generate exportable assessment report.</p>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Lab Worksheet Generator */}
                  <div className="p-5 rounded-xl bg-slate-900/90 border border-cyan-500/30 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-cyan-300 flex items-center space-x-2">
                        <FileSpreadsheet className="w-4 h-4 text-cyan-400" />
                        <span>Interactive Wireless Audit Report Generator</span>
                      </h3>
                      <button
                        onClick={copyLabReport}
                        className="px-3 py-1 rounded bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-xs flex items-center space-x-1.5 transition"
                      >
                        {labReportCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{labReportCopied ? "Copied Report!" : "Copy Audit Report"}</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="space-y-1">
                        <label className="text-slate-400 font-semibold">AP Identity & Hardware Model</label>
                        <input
                          type="text"
                          value={labApIdentity}
                          onChange={(e) => setLabApIdentity(e.target.value)}
                          className="w-full p-2 bg-slate-950 border border-slate-700 rounded text-slate-200 text-xs focus:border-cyan-400 focus:outline-none"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-slate-400 font-semibold">Configured Wireless Security Mode</label>
                        <input
                          type="text"
                          value={labWirelessMode}
                          onChange={(e) => setLabWirelessMode(e.target.value)}
                          className="w-full p-2 bg-slate-950 border border-slate-700 rounded text-slate-200 text-xs focus:border-cyan-400 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="space-y-1">
                        <label className="text-slate-400 font-semibold">Authentication Architecture</label>
                        <input
                          type="text"
                          value={labAuthMethod}
                          onChange={(e) => setLabAuthMethod(e.target.value)}
                          className="w-full p-2 bg-slate-950 border border-slate-700 rounded text-slate-200 text-xs focus:border-cyan-400 focus:outline-none"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-slate-400 font-semibold">Hardening Baseline Checklist</label>
                        <div className="p-2 bg-slate-950 border border-slate-700 rounded text-emerald-400 font-bold">
                          {completedChecksCount} of 16 Baseline Hardening Checks Verified
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1 text-xs">
                      <label className="text-slate-400 font-semibold">Segmentation Architecture & VLAN Mapping</label>
                      <textarea
                        rows={3}
                        value={labSegmentationSummary}
                        onChange={(e) => setLabSegmentationSummary(e.target.value)}
                        className="w-full p-2 bg-slate-950 border border-slate-700 rounded text-slate-200 text-xs focus:border-cyan-400 focus:outline-none font-mono"
                      />
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION 17.13: QUIZ */}
              {selectedTopic === 13 && (
                <section className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Section 17.13</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Knowledge Assessment Quiz</h2>
                  </div>

                  <p className="text-slate-300 text-sm">
                    Test your understanding of wireless protocols, WPA3-SAE, 802.1X EAP mutual authentication, and defensive network segmentation.
                  </p>

                  <div className="space-y-6">
                    {quizQuestions.map((q, idx) => (
                      <div key={q.id} className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3">
                        <div className="flex items-start justify-between">
                          <span className="font-bold text-white text-xs sm:text-sm">
                            {idx + 1}. {q.question}
                          </span>
                          {quizSubmitted && (
                            <span
                              className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                                quizAnswers[q.id] === q.correct
                                  ? "bg-emerald-950 text-emerald-400 border border-emerald-800"
                                  : "bg-rose-950 text-rose-400 border border-rose-800"
                              }`}
                            >
                              {quizAnswers[q.id] === q.correct ? "Correct" : "Incorrect"}
                            </span>
                          )}
                        </div>

                        <div className="space-y-1.5">
                          {q.options.map((opt, optIdx) => (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectAnswer(q.id, optIdx)}
                              className={`w-full text-left p-2.5 rounded-lg text-xs transition flex items-center justify-between ${
                                quizAnswers[q.id] === optIdx
                                  ? "bg-cyan-500/20 text-cyan-200 border border-cyan-500/50"
                                  : "bg-slate-950/60 text-slate-300 border border-slate-800 hover:bg-slate-800"
                              } ${
                                quizSubmitted && optIdx === q.correct
                                  ? "bg-emerald-950/60 border-emerald-500 text-emerald-200"
                                  : ""
                              }`}
                            >
                              <span>{opt}</span>
                              {quizAnswers[q.id] === optIdx && (
                                <span className="w-2 h-2 rounded-full bg-cyan-400 ml-2 shrink-0" />
                              )}
                            </button>
                          ))}
                        </div>

                        {quizSubmitted && (
                          <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-[11px] text-slate-400 mt-2">
                            <span className="font-semibold text-cyan-400">Explanation: </span>
                            {q.explanation}
                          </div>
                        )}
                      </div>
                    ))}

                    <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                      <div className="text-xs text-slate-400 font-mono">
                        Answered: {Object.keys(quizAnswers).length} / 10
                      </div>
                      <div className="flex items-center space-x-3">
                        {quizSubmitted && (
                          <div className="text-sm font-bold text-cyan-400 font-mono">
                            Final Score: {quizScore} / 10 ({Math.round((quizScore / 10) * 100)}%)
                          </div>
                        )}
                        <button
                          onClick={() => setQuizSubmitted(!quizSubmitted)}
                          disabled={Object.keys(quizAnswers).length < 10}
                          className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-bold text-xs transition"
                        >
                          {quizSubmitted ? "Reset Quiz" : "Submit Answers"}
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION 17.14 */}
              {selectedTopic === 14 && (
                <section className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Section 17.14</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Official References & Further Reading</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    {[
                      {
                        name: "NIST SP 800-153: Guidelines for Securing WLANs",
                        desc: "Standard recommendations for wireless architecture, key management, and monitoring.",
                        url: "https://csrc.nist.gov/pubs/sp/800/153/final",
                      },
                      {
                        name: "CISA Wi-Fi Network Security Guide",
                        desc: "Federal guidance on wireless threats, evil-twin defenses, and administrative controls.",
                        url: "https://www.cisa.gov/sites/default/files/publications/A_Guide_to_Securing_Networks_for_Wi-Fi.pdf",
                      },
                      {
                        name: "Wi-Fi Alliance Certification Standards",
                        desc: "Official technical specifications for WPA3-Personal, WPA3-Enterprise, and Wi-Fi 6/7.",
                        url: "https://www.wi-fi.org/",
                      },
                      {
                        name: "IETF RFC 8110: Opportunistic Wireless Encryption (OWE)",
                        desc: "Technical standard defining unauthenticated link-layer encryption for open networks.",
                        url: "https://www.rfc-editor.org/rfc/rfc8110.html",
                      },
                      {
                        name: "CIS Controls: Wireless Access Control (Control 15)",
                        desc: "Center for Internet Security benchmark for managing and monitoring wireless assets.",
                        url: "https://www.cisecurity.org/controls",
                      },
                      {
                        name: "IEEE 802.11 Working Group",
                        desc: "Official standard specifications for 802.11ax, 802.11be, and 802.11w management frames.",
                        url: "https://www.ieee802.org/11/",
                      },
                    ].map((ref, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
                        <div className="font-bold text-cyan-400 text-sm">{ref.name}</div>
                        <p className="text-slate-400 leading-relaxed">{ref.desc}</p>
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-cyan-400 hover:underline flex items-center pt-1"
                        >
                          <span>Explore Official Standard</span>
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* SECTION 17.15 */}
              {selectedTopic === 15 && (
                <section className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Section 17.15</span>
                    <h2 className="text-2xl font-bold text-white mt-1">Key Engineering Takeaways</h2>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-4">
                    <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                      <li className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span><strong>Modern Cryptographic Baseline:</strong> Completely retire WEP, WPA/TKIP, and WPS. Enforce WPA3 with SAE or hardened WPA2-Enterprise with AES-CCMP.</span>
                      </li>
                      <li className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span><strong>Mutual Certificate Validation in 802.1X:</strong> Client supplicants must validate the RADIUS server certificate against a pinned enterprise Root CA to neutralize evil-twin credentials harvesting.</span>
                      </li>
                      <li className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span><strong>Protected Management Frames (PMF / 802.11w):</strong> Cryptographically sign deauthentication and disassociation frames to stop trivial wireless denial-of-service and handshake capture attacks.</span>
                      </li>
                      <li className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span><strong>Micro-Segmentation & Zero Trust:</strong> Isolate Guest and IoT devices into dedicated VLANs with strict firewall ACLs and AP radio Client Isolation.</span>
                      </li>
                      <li className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span><strong>WIDS Spectrum Auditing:</strong> Continuously monitor RF spectrum and wired switch ports to instantly detect and contain rogue access points.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-800">
                    <button
                      onClick={() => setSelectedTopic(12)}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center"
                    >
                      <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                      <span>Previous: 17.12 Practical Lab</span>
                    </button>
                    <button
                      onClick={() => navigate("/learning/cybersecurity")}
                      className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center shadow-lg shadow-cyan-500/20"
                    >
                      <span>Complete Module 17 & Return to Track</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </button>
                  </div>
                </section>
              )}
            </div>
          )}

          {/* TAB 2: SIMULATOR 1 - HANDSHAKE INSPECTOR */}
          {activeTab === "handshake-sim" && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Simulator 1</span>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  Wi-Fi Protocol & Handshake Inspector
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Compare how WPA2 4-Way Handshake vs WPA3 SAE Dragonfly Protocol derive session keys and defend against dictionary attacks.
                </p>
              </div>

              {/* Protocol Selector */}
              <div className="flex rounded bg-slate-900 p-1 border border-slate-800 max-w-md">
                <button
                  onClick={() => setSelectedHandshakeProtocol("wpa2_4way")}
                  className={`flex-1 py-1.5 rounded text-xs font-bold transition ${
                    selectedHandshakeProtocol === "wpa2_4way"
                      ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  WPA2 4-Way Handshake
                </button>
                <button
                  onClick={() => setSelectedHandshakeProtocol("wpa3_sae")}
                  className={`flex-1 py-1.5 rounded text-xs font-bold transition ${
                    selectedHandshakeProtocol === "wpa3_sae"
                      ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  WPA3 SAE (Dragonfly)
                </button>
              </div>

              {/* Handshake Display */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div>
                    <h3 className="text-sm font-bold text-white">{handshakeDetails.title}</h3>
                    <div className="text-[11px] text-cyan-400 font-mono mt-0.5">{handshakeDetails.pskType}</div>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300">
                    Forward Secrecy: {handshakeDetails.forwardSecrecy}
                  </span>
                </div>

                {/* Packet Message Flow */}
                <div className="space-y-2">
                  {handshakeDetails.steps.map((st) => (
                    <div key={st.step} className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-cyan-400 font-mono">{st.message}</span>
                        <span className="text-[11px] text-slate-400 font-mono">
                          {st.from} ➔ {st.to}
                        </span>
                      </div>
                      <div className="text-[11px] font-mono text-emerald-300 bg-slate-900/60 p-1.5 rounded border border-slate-800/80">
                        Payload: {st.payload}
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed pt-0.5">{st.note}</p>
                    </div>
                  ))}
                </div>

                {/* Vulnerability & Security Banner */}
                <div
                  className={`p-3.5 rounded-lg border text-xs font-semibold ${
                    selectedHandshakeProtocol === "wpa2_4way"
                      ? "bg-rose-950/30 border-rose-800/60 text-rose-300"
                      : "bg-emerald-950/30 border-emerald-800/60 text-emerald-300"
                  }`}
                >
                  {handshakeDetails.vulnerability}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SIMULATOR 2 - ENTERPRISE 802.1X */}
          {activeTab === "enterprise-sim" && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Simulator 2</span>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  Enterprise 802.1X EAP & Rogue RADIUS Defense
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Test how client supplicant certificate validation neutralizes evil-twin credential harvesting attacks.
                </p>
              </div>

              {/* Controls */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <label className="text-slate-400 font-semibold block mb-1">EAP Method</label>
                    <select
                      value={eapClientConfig.method}
                      onChange={(e) => setEapClientConfig({ ...eapClientConfig, method: e.target.value })}
                      className="w-full p-2 bg-slate-950 border border-slate-700 rounded text-slate-200 text-xs focus:outline-none"
                    >
                      <option value="EAP-TLS">EAP-TLS (Mutual Certificates)</option>
                      <option value="PEAP-MSCHAPv2">PEAP-MSCHAPv2 (Password Tunnel)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-slate-400 font-semibold block mb-1">Client Certificate Validation</label>
                    <button
                      onClick={() =>
                        setEapClientConfig({
                          ...eapClientConfig,
                          serverCertValidation: !eapClientConfig.serverCertValidation,
                        })
                      }
                      className={`w-full py-2 rounded text-xs font-bold transition flex items-center justify-center space-x-1.5 ${
                        eapClientConfig.serverCertValidation
                          ? "bg-emerald-600 text-white"
                          : "bg-rose-950/80 border border-rose-800 text-rose-300"
                      }`}
                    >
                      {eapClientConfig.serverCertValidation ? (
                        <ShieldCheck className="w-3.5 h-3.5" />
                      ) : (
                        <ShieldAlert className="w-3.5 h-3.5" />
                      )}
                      <span>
                        {eapClientConfig.serverCertValidation ? "Validation STRICT (Enforced)" : "Validation DISABLED"}
                      </span>
                    </button>
                  </div>

                  <div>
                    <label className="text-slate-400 font-semibold block mb-1">Target Wireless AP & RADIUS</label>
                    <select
                      value={activeRadiusTarget}
                      onChange={(e) => setActiveRadiusTarget(e.target.value)}
                      className="w-full p-2 bg-slate-950 border border-slate-700 rounded text-slate-200 text-xs focus:outline-none"
                    >
                      <option value="legitimate">Legitimate Enterprise RADIUS</option>
                      <option value="rogue_evil_twin">Attacker Rogue AP / Evil Twin RADIUS</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end pt-2 border-t border-slate-800">
                  <button
                    onClick={simulateEapAuth}
                    className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center space-x-1.5 transition shadow-lg shadow-cyan-500/20"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Authenticate Client</span>
                  </button>
                </div>
              </div>

              {/* Logs & Verdict */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
                    <span className="flex items-center space-x-1.5">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      <span>802.1X Supplicant Negotiation Logs</span>
                    </span>
                  </div>
                  <div className="space-y-1 h-44 overflow-y-auto text-[11px] text-slate-300">
                    {eapAuthLogs.length === 0 ? (
                      <span className="text-slate-600 italic">Click &quot;Authenticate Client&quot; to test connection...</span>
                    ) : (
                      eapAuthLogs.map((log, i) => (
                        <div
                          key={i}
                          className={
                            log.includes("ALERT") || log.includes("THEFT") || log.includes("EXPLOIT")
                              ? "text-rose-400 font-bold"
                              : log.includes("SUCCESSFUL") || log.includes("PREVENTED")
                              ? "text-emerald-400 font-bold"
                              : ""
                          }
                        >
                          {log}
                        </div>
                      ))
                    )}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                  <span className="text-xs font-bold text-white block border-b border-slate-800 pb-2">
                    Security Verdict & Dynamic VLAN Assignment
                  </span>
                  {eapVerdict ? (
                    <div
                      className={`p-3.5 rounded-lg border text-xs space-y-1.5 ${
                        eapVerdict.safe
                          ? "bg-emerald-950/30 border-emerald-600 text-emerald-200"
                          : "bg-rose-950/30 border-rose-600 text-rose-200"
                      }`}
                    >
                      <div className="flex items-center justify-between font-bold">
                        <span>{eapVerdict.status}</span>
                        <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-900">
                          {eapVerdict.vlan}
                        </span>
                      </div>
                      <p className="text-slate-300 text-[11px]">{eapVerdict.message}</p>
                    </div>
                  ) : (
                    <div className="text-xs text-slate-500 italic p-4 text-center">
                      Awaiting supplicant connection attempt.
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SIMULATOR 3 - ZERO-TRUST SEGMENTATION */}
          {activeTab === "segmentation-sim" && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Simulator 3</span>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  Wireless Network Segmentation & Zero-Trust Traffic Flow
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Verify how AP Client Isolation and inter-VLAN firewall ACLs restrict lateral movement between zones.
                </p>
              </div>

              {/* Matrix Controls */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                  <div>
                    <label className="text-slate-400 font-semibold block mb-1">Source Wireless Subnet</label>
                    <select
                      value={sourceWlan}
                      onChange={(e) => setSourceWlan(e.target.value)}
                      className="w-full p-2 bg-slate-950 border border-slate-700 rounded text-slate-200 text-xs focus:outline-none"
                    >
                      <option value="employee">Employee WLAN (VLAN 20)</option>
                      <option value="guest">Guest WLAN (VLAN 30)</option>
                      <option value="iot">IoT WLAN (VLAN 40)</option>
                      <option value="mgmt">Management (VLAN 10)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-slate-400 font-semibold block mb-1">Destination Target</label>
                    <select
                      value={destinationTarget}
                      onChange={(e) => setDestinationTarget(e.target.value)}
                      className="w-full p-2 bg-slate-950 border border-slate-700 rounded text-slate-200 text-xs focus:outline-none"
                    >
                      <option value="admin_gui">AP Admin Web GUI (192.168.10.1)</option>
                      <option value="internal_api">Internal ERP / API (10.0.20.50)</option>
                      <option value="public_internet">Public Internet (8.8.8.8:443)</option>
                      <option value="peer_client">Peer Laptop in Same SSID (Lateral)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-slate-400 font-semibold block mb-1">AP Client Isolation</label>
                    <button
                      onClick={() => setClientIsolationEnabled(!clientIsolationEnabled)}
                      className={`w-full py-2 rounded text-xs font-bold transition ${
                        clientIsolationEnabled
                          ? "bg-emerald-600 text-white"
                          : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                      }`}
                    >
                      {clientIsolationEnabled ? "Isolation ENABLED" : "Isolation DISABLED"}
                    </button>
                  </div>

                  <div>
                    <label className="text-slate-400 font-semibold block mb-1">Inter-VLAN Firewall Policy</label>
                    <select
                      value={interVlanFirewallPolicy}
                      onChange={(e) => setInterVlanFirewallPolicy(e.target.value)}
                      className="w-full p-2 bg-slate-950 border border-slate-700 rounded text-slate-200 text-xs focus:outline-none"
                    >
                      <option value="zero_trust">Zero-Trust Strict ACLs</option>
                      <option value="permissive_flat">Permissive / Flat Network (Unsegmented)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Packet Flow Simulation Result */}
              <div
                className={`p-4 rounded-xl border text-xs space-y-2 ${
                  segmentationResult.allowed
                    ? interVlanFirewallPolicy === "permissive_flat"
                      ? "bg-rose-950/30 border-rose-600 text-rose-200"
                      : "bg-emerald-950/30 border-emerald-600 text-emerald-200"
                    : "bg-slate-900 border-slate-700 text-slate-300"
                }`}
              >
                <div className="flex items-center justify-between font-bold text-sm">
                  <span>Packet Path: {segmentationResult.allowed ? "TRAFFIC PERMITTED" : "PACKET DROPPED (BLOCKED)"}</span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-950 border border-slate-800">
                    {sourceWlan.toUpperCase()} ➔ {destinationTarget.toUpperCase()}
                  </span>
                </div>
                <p className="text-[11px] leading-relaxed text-slate-300">{segmentationResult.rationale}</p>
              </div>
            </div>
          )}

          {/* TAB 5: SIMULATOR 4 - WIDS THREAT MONITOR */}
          {activeTab === "wids-sim" && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Simulator 4</span>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  WIDS Wireless Intrusion Detection & Spectrum Anomaly Radar
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Inject active wireless attacks to observe how WIDS sensors detect rogue BSSIDs, evil twins, and deauth floods.
                </p>
              </div>

              {/* Threat Injector */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-300">Simulate Over-The-Air Threat Scenario</label>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-slate-400">Protected Management Frames (802.11w):</span>
                    <button
                      onClick={() => setPmfEnabled(!pmfEnabled)}
                      className={`px-2.5 py-1 rounded text-[11px] font-bold transition ${
                        pmfEnabled ? "bg-emerald-600 text-white" : "bg-rose-950 border border-rose-800 text-rose-300"
                      }`}
                    >
                      {pmfEnabled ? "PMF REQUIRED" : "PMF DISABLED"}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                  {[
                    { id: "none", name: "Clean Baseline", color: "text-slate-400" },
                    { id: "rogue_ap", name: "Rogue AP Connected", color: "text-amber-400" },
                    { id: "evil_twin", name: "Evil Twin Spoof", color: "text-rose-400" },
                    { id: "deauth_flood", name: "Deauth DoS Flood", color: "text-rose-400" },
                    { id: "wps_reaver", name: "WPS PIN Attack", color: "text-amber-400" },
                  ].map((th) => (
                    <button
                      key={th.id}
                      onClick={() => setActiveThreatScenario(th.id)}
                      className={`p-2 rounded-lg text-xs font-semibold border text-center transition ${
                        activeThreatScenario === th.id
                          ? "bg-cyan-500 text-slate-950 font-bold border-cyan-400"
                          : "bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800"
                      }`}
                    >
                      {th.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Radar Alert Panel */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="font-bold text-cyan-400 flex items-center space-x-2">
                    <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
                    <span>WIDS Spectrum Telemetry</span>
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      widsTelemetry.severity.includes("CRITICAL")
                        ? "bg-rose-950 text-rose-300 border border-rose-800"
                        : widsTelemetry.severity.includes("HIGH")
                        ? "bg-amber-950 text-amber-300 border border-amber-800"
                        : "bg-emerald-950 text-emerald-300 border border-emerald-800"
                    }`}
                  >
                    {widsTelemetry.severity}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300 text-[11px]">
                  <div><strong>Alert:</strong> {widsTelemetry.alertName}</div>
                  <div><strong>SSID:</strong> {widsTelemetry.ssid}</div>
                  <div><strong>BSSID:</strong> {widsTelemetry.bssid}</div>
                  <div><strong>RF Channel:</strong> {widsTelemetry.channel}</div>
                  <div><strong>RSSI:</strong> {widsTelemetry.rssi}</div>
                  <div><strong>Switch Port:</strong> {widsTelemetry.wiredStatus}</div>
                </div>

                <div className="p-3 rounded bg-slate-900 border border-slate-800 space-y-1.5 text-slate-300 text-[11px]">
                  <div><strong className="text-cyan-300">WIDS Diagnosis:</strong> {widsTelemetry.diagnosis}</div>
                  <div><strong className="text-emerald-400">SOC Containment Action:</strong> {widsTelemetry.containment}</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: ASSESSMENT QUIZ */}
          {activeTab === "quiz" && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Assessment</span>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">Knowledge Assessment</h2>
                <p className="text-xs text-slate-400 mt-1">10 Scenario-based evaluation questions from Section 17.13.</p>
              </div>

              <div className="space-y-6">
                {quizQuestions.map((q, idx) => (
                  <div key={q.id} className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3">
                    <div className="flex items-start justify-between">
                      <span className="font-bold text-white text-xs sm:text-sm">
                        {idx + 1}. {q.question}
                      </span>
                      {quizSubmitted && (
                        <span
                          className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                            quizAnswers[q.id] === q.correct
                              ? "bg-emerald-950 text-emerald-400 border border-emerald-800"
                              : "bg-rose-950 text-rose-400 border border-rose-800"
                          }`}
                        >
                          {quizAnswers[q.id] === q.correct ? "Correct" : "Incorrect"}
                        </span>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      {q.options.map((opt, optIdx) => (
                        <button
                          key={optIdx}
                          onClick={() => handleSelectAnswer(q.id, optIdx)}
                          className={`w-full text-left p-2.5 rounded-lg text-xs transition flex items-center justify-between ${
                            quizAnswers[q.id] === optIdx
                              ? "bg-cyan-500/20 text-cyan-200 border border-cyan-500/50"
                              : "bg-slate-950/60 text-slate-300 border border-slate-800 hover:bg-slate-800"
                          } ${
                            quizSubmitted && optIdx === q.correct
                              ? "bg-emerald-950/60 border-emerald-500 text-emerald-200"
                              : ""
                          }`}
                        >
                          <span>{opt}</span>
                          {quizAnswers[q.id] === optIdx && (
                            <span className="w-2 h-2 rounded-full bg-cyan-400 ml-2 shrink-0" />
                          )}
                        </button>
                      ))}
                    </div>

                    {quizSubmitted && (
                      <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-[11px] text-slate-400 mt-2">
                        <span className="font-semibold text-cyan-400">Explanation: </span>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                ))}

                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <div className="text-xs text-slate-400 font-mono">
                    Answered: {Object.keys(quizAnswers).length} / 10
                  </div>
                  <div className="flex items-center space-x-3">
                    {quizSubmitted && (
                      <div className="text-sm font-bold text-cyan-400 font-mono">
                        Final Score: {quizScore} / 10 ({Math.round((quizScore / 10) * 100)}%)
                      </div>
                    )}
                    <button
                      onClick={() => setQuizSubmitted(!quizSubmitted)}
                      disabled={Object.keys(quizAnswers).length < 10}
                      className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-bold text-xs transition"
                    >
                      {quizSubmitted ? "Reset Quiz" : "Submit Answers"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Embedded Nova AI Tutor Drawer */}
      <LearningRo
        isOpen={showAiTutor}
        onClose={() => setShowAiTutor(false)}
        initialContext="Cybersecurity Master Course - Module 17: Wireless Network Security and Wi-Fi Defense. Ask me about WPA3 Simultaneous Authentication of Equals (SAE), 802.1X EAP mutual certificate validation, Protected Management Frames (PMF / 802.11w), or multi-VLAN guest isolation."
      />
    </div>
  );
}
