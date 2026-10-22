import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ModuleNav from "./ModuleNav";
import {
  Wifi,
  WifiOff,
  Radio,
  Shield,
  Key,
  Lock,
  Terminal,
  CheckCircle2,
  ChevronRight,
  BookOpen,
  AlertTriangle,
  Play,
  HelpCircle,
  Award,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  RefreshCw,
  Eye,
  EyeOff,
  Server,
  Database,
  Code,
  Check,
  X,
  Copy,
  ListCheck,
  Sparkles,
  AlertCircle,
  Cpu,
  Bug,
  Globe,
  Layers,
  UserCheck,
  ShieldAlert,
  FileText,
  Send,
  UserX,
  Network,
  Filter,
  Zap,
  Activity,
  ShieldCheck,
  Smartphone,
  Laptop,
  Sliders,
  Settings,
  Radar
} from "lucide-react";

export default function CybersecurityWirelessSecurity() {
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Main navigation tab state
  const [activeTab, setActiveTab] = useState("theory");

  // =========================================================================
  // INTERACTIVE LAB 1 STATE: Wi-Fi Configuration Audit & AP Hardening
  // =========================================================================
  const [lab1Config, setLab1Config] = useState({
    defaultCreds: false, // false = hardened (changed)
    wpsEnabled: false,   // false = disabled
    remoteMgmt: false,   // false = disabled
    firmwareUpdated: true, // true = up to date
    securityMode: "WPA3-Personal" // WPA3-Personal, WPA2-Personal, WEP
  });

  const calculateLab1Score = () => {
    let score = 0;
    if (!lab1Config.defaultCreds) score += 25;
    if (!lab1Config.wpsEnabled) score += 25;
    if (!lab1Config.remoteMgmt) score += 20;
    if (lab1Config.firmwareUpdated) score += 15;
    if (lab1Config.securityMode === "WPA3-Personal") score += 15;
    else if (lab1Config.securityMode === "WPA2-Personal") score += 10;
    return score;
  };

  // =========================================================================
  // INTERACTIVE LAB 2 STATE: Wi-Fi Protocol Comparison Sandbox
  // =========================================================================
  const [lab2Protocol, setLab2Protocol] = useState("WPA3-Personal");

  const protocolData = {
    WEP: {
      cipher: "RC4 (Static 40/104-bit key + 24-bit IV)",
      auth: "Open or Shared Key (Challenge-Response)",
      handshake: "None (Static shared key)",
      pmf: "Not Supported",
      offlineAttack: "Trivially broken in seconds via IV collision / FMS attack",
      status: "DEPRECATED & DANGEROUS",
      badgeColor: "bg-red-100 text-red-900 border-red-300"
    },
    "WPA2-Personal": {
      cipher: "AES-CCMP (128-bit)",
      auth: "Pre-Shared Key (PSK)",
      handshake: "4-Way Handshake (EAPOL)",
      pmf: "Optional (802.11w)",
      offlineAttack: "Vulnerable to offline dictionary attacks if 4-way handshake captured",
      status: "LEGACY COMPATIBILITY ONLY",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300"
    },
    "WPA3-Personal": {
      cipher: "AES-CCMP / GCMP-256",
      auth: "Simultaneous Authentication of Equals (SAE - Dragonfly)",
      handshake: "Zero-Knowledge Password Proof (SAE Exchange)",
      pmf: "MANDATORY (Protected Management Frames)",
      offlineAttack: "Resistant to offline dictionary attacks; provides forward secrecy",
      status: "RECOMMENDED MODERN STANDARD",
      badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300"
    },
    "Enhanced Open (OWE)": {
      cipher: "Opportunistic Wireless Encryption (Diffie-Hellman)",
      auth: "None (Unauthenticated Open Access)",
      handshake: "ECDH Key Derivation",
      pmf: "MANDATORY",
      offlineAttack: "Protects over-the-air traffic from passive sniffing; does not verify AP identity",
      status: "RECOMMENDED FOR GUEST / PUBLIC WI-FI",
      badgeColor: "bg-blue-100 text-blue-900 border-blue-300"
    }
  };

  // =========================================================================
  // INTERACTIVE LAB 3 STATE: Multi-VLAN Wireless Segmentation Matrix
  // =========================================================================
  const [lab3SourceZone, setLab3SourceZone] = useState("Guest");
  const [lab3DestZone, setLab3DestZone] = useState("Corporate");
  const [lab3ClientIsolation, setLab3ClientIsolation] = useState(true);

  const evaluateSegmentationTraffic = () => {
    if (lab3SourceZone === lab3DestZone) {
      if (lab3SourceZone === "Guest" && lab3ClientIsolation) {
        return {
          allowed: false,
          reason: "BLOCKED: Client isolation is active on Guest Wi-Fi. Lateral communication between guest devices is prohibited."
        };
      }
      return {
        allowed: true,
        reason: "ALLOWED: Intra-zone communication permitted within the same VLAN security profile."
      };
    }

    if (lab3SourceZone === "Guest" && (lab3DestZone === "Corporate" || lab3DestZone === "Management")) {
      return {
        allowed: false,
        reason: "BLOCKED: Inter-VLAN firewall rule denies Guest traffic to private corporate assets and router management."
      };
    }

    if (lab3SourceZone === "IoT" && (lab3DestZone === "Corporate" || lab3DestZone === "Management")) {
      return {
        allowed: false,
        reason: "BLOCKED: Untrusted IoT devices restricted to dedicated VLAN; outbound connections to sensitive internal subnets dropped."
      };
    }

    if (lab3SourceZone === "Corporate" && lab3DestZone === "Management") {
      return {
        allowed: true,
        reason: "ALLOWED: Corporate administrators permitted SSH/HTTPS access to management VLAN via bastion jump host."
      };
    }

    return {
      allowed: true,
      reason: "ALLOWED: Outbound internet egress permitted through perimeter gateway."
    };
  };

  // =========================================================================
  // INTERACTIVE LAB 4 STATE: Enterprise 802.1X / EAP-TLS Handshake
  // =========================================================================
  const [lab4ValidateServerCert, setLab4ValidateServerCert] = useState(true);
  const [lab4RogueRadiusActive, setLab4RogueRadiusActive] = useState(false);
  const [lab4AuthResult, setLab4AuthResult] = useState(null);

  const handleLab4Authenticate = () => {
    if (lab4RogueRadiusActive) {
      if (!lab4ValidateServerCert) {
        setLab4AuthResult({
          success: false,
          breach: true,
          status: "CREDENTIAL THEFT / EVIL-TWIN COMPROMISE",
          detail: "CRITICAL FAILURE: The client supplicant accepted a fake RADIUS server certificate without verifying the trusted enterprise Root CA! Attacker harvested client credentials via MSCHAPv2 / TLS proxy."
        });
      } else {
        setLab4AuthResult({
          success: false,
          breach: false,
          status: "CONNECTION REJECTED (SAFE)",
          detail: "SECURE: The supplicant rejected the rogue RADIUS server because its certificate was not signed by the enterprise Private CA (NIST SP 800-153 defense)."
        });
      }
    } else {
      setLab4AuthResult({
        success: true,
        breach: false,
        status: "AUTHENTICATION SUCCESSFUL (EAP-TLS)",
        detail: "Mutual authentication established: Client verified RADIUS server certificate; RADIUS validated client device certificate and assigned VLAN 10 (Corporate)."
      });
    }
  };

  // =========================================================================
  // INTERACTIVE LAB 5 STATE: Rogue AP & Evil-Twin Detection Engine
  // =========================================================================
  const [lab5DetectedAPs, setLab5DetectedAPs] = useState([
    {
      id: "AP-01",
      ssid: "PrepSpaces-Corp",
      bssid: "00:1A:2B:3C:4D:01",
      channel: 36,
      security: "WPA3-Enterprise",
      vendor: "Cisco Catalyst",
      signal: "-58 dBm",
      status: "APPROVED_INVENTORY"
    },
    {
      id: "AP-02",
      ssid: "PrepSpaces-Corp",
      bssid: "00:1A:2B:3C:4D:02",
      channel: 44,
      security: "WPA3-Enterprise",
      vendor: "Cisco Catalyst",
      signal: "-64 dBm",
      status: "APPROVED_INVENTORY"
    },
    {
      id: "AP-03",
      ssid: "PrepSpaces-Corp",
      bssid: "74:DA:38:99:FF:21",
      channel: 6,
      security: "WPA2-Personal (PSK)",
      vendor: "TP-Link / Alfa USB",
      signal: "-38 dBm",
      status: "SUSPICIOUS"
    },
    {
      id: "AP-04",
      ssid: "CoffeeShop-FreeWi-Fi",
      bssid: "A4:2B:B0:11:22:33",
      channel: 1,
      security: "Open",
      vendor: "Netgear",
      signal: "-82 dBm",
      status: "EXTERNAL_NEIGHBOR"
    }
  ]);

  const [lab5SelectedAP, setLab5SelectedAP] = useState(null);
  const [lab5Investigation, setLab5Investigation] = useState(null);

  const handleLab5Inspect = (ap) => {
    setLab5SelectedAP(ap);
    if (ap.id === "AP-03") {
      setLab5Investigation({
        type: "CONFIRMED EVIL-TWIN / ROGUE AP (MITRE T1557.004)",
        severity: "CRITICAL",
        findings: [
          "SSID 'PrepSpaces-Corp' matches legitimate corporate network, but BSSID is NOT in authorized inventory.",
          "Security mode downgrade: Authorized network enforces WPA3-Enterprise (802.1X), but this AP broadcasts WPA2-Personal with pre-shared key.",
          "OUI analysis indicates consumer USB wireless adapter rather than enterprise ceiling access point.",
          "Exceptionally high signal strength (-38 dBm) indicates rogue device operating inside the building."
        ],
        action: "Trigger WIPS automated port containment on switchport and dispatch physical survey team."
      });
    } else if (ap.id === "AP-04") {
      setLab5Investigation({
        type: "BENIGN NEIGHBORING AP",
        severity: "LOW",
        findings: [
          "SSID belongs to neighboring retail establishment.",
          "Weak signal (-82 dBm) confirms signal leakage from outside the building perimeter."
        ],
        action: "Log in external neighbor database; no operational containment required."
      });
    } else {
      setLab5Investigation({
        type: "VERIFIED CORPORATE ACCESS POINT",
        severity: "NORMAL",
        findings: [
          "BSSID and MAC vendor match approved wireless controller database.",
          "Operating on planned 5 GHz enterprise channels with 802.1X certificate enforcement."
        ],
        action: "Normal telemetry collection active."
      });
    }
  };

  // =========================================================================
  // 8-POINT LAB SUBMISSION CHECKLIST
  // =========================================================================
  const [checklist, setChecklist] = useState({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
    item6: false,
    item7: false,
    item8: false
  });

  const toggleChecklist = (key) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedChecklistCount = Object.values(checklist).filter(Boolean).length;

  // =========================================================================
  // KNOWLEDGE ASSESSMENT QUIZ (6 QUESTIONS)
  // =========================================================================
  const quizQuestions = [
    {
      id: 1,
      question: "Why is a familiar SSID not proof that an access point is legitimate?",
      options: [
        "The SSID is always encrypted",
        "An unauthorized access point can imitate a legitimate network name",
        "Every access point must have a unique SSID",
        "A network name proves which organization owns the access point"
      ],
      correctAnswer: 1,
      explanation:
        "Anyone with a wireless card can broadcast any SSID name. In an evil-twin attack (MITRE ATT&CK T1557.004), an attacker clones the corporate SSID to lure clients into connecting and disclosing credentials."
    },
    {
      id: 2,
      question: "Which statement about WPA3-Personal is correct?",
      options: [
        "It removes the need for a wireless password in every configuration",
        "It guarantees that every connected device is trustworthy",
        "It uses SAE and improves protections in the password-based authentication exchange",
        "It replaces network segmentation"
      ],
      correctAnswer: 2,
      explanation:
        "WPA3-Personal replaces the WPA2 4-way PSK handshake with Simultaneous Authentication of Equals (SAE - Dragonfly exchange), which prevents offline dictionary cracking of captured handshakes and provides forward secrecy."
    },
    {
      id: 3,
      question:
        "What is a key advantage of enterprise Wi-Fi using 802.1X with a suitable EAP method?",
      options: [
        "It can support centrally managed user or device authentication instead of relying only on one shared network password",
        "It removes the need to validate certificates",
        "It makes every connected device an administrator",
        "It prevents all radio interference"
      ],
      correctAnswer: 0,
      explanation:
        "802.1X connects to central identity stores (such as RADIUS/Active Directory), allowing individual user or certificate-based device credentials, instant single-account revocation, and role-based VLAN assignment."
    },
    {
      id: 4,
      question: "Why should guest and IoT devices be segmented from sensitive networks?",
      options: [
        "To let all wireless devices access all internal systems",
        "To limit unnecessary communication and reduce the reach of a compromised device",
        "To avoid updating firmware",
        "To eliminate the need for authentication"
      ],
      correctAnswer: 1,
      explanation:
        "Segmentation (e.g. via separate VLANs, firewall zones, and client isolation) isolates unmanaged devices, preventing an infected guest laptop or compromised smart-TV from scanning or pivoting into internal servers."
    },
    {
      id: 5,
      question: "What is the primary role of a Wireless Intrusion Detection System (WIDS)?",
      options: [
        "Replace the wireless authentication protocol",
        "Guarantee detection of all passive radio observers",
        "Monitor wireless activity for suspicious events and possible unauthorized infrastructure",
        "Automatically authorize every unknown AP"
      ],
      correctAnswer: 2,
      explanation:
        "A WIDS analyzes radio spectrum, beacon frames, and management traffic to detect rogue access points, deauthentication floods, evil-twin impersonation, and configuration violations."
    },
    {
      id: 6,
      question:
        "What should a security analyst do when two access points advertise the same SSID?",
      options: [
        "Compare the observation with the approved inventory and investigate supporting evidence",
        "Immediately conclude that the second AP is malicious",
        "Disable every corporate access point",
        "Assume that identical SSIDs are always unauthorized"
      ],
      correctAnswer: 0,
      explanation:
        "Enterprise WLANs naturally use identical SSIDs across dozens of legitimate APs to support roaming. The analyst must cross-reference BSSIDs, vendor OUIs, security modes, and controller logs to distinguish approved APs from evil twins."
    }
  ];

  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const handleSelectAnswer = (qId, optionIdx) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const handleQuizSubmit = () => {
    setQuizSubmitted(true);
  };

  const handleQuizReset = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
  };

  const quizScore = quizQuestions.reduce((score, q) => {
    return quizAnswers[q.id] === q.correctAnswer ? score + 1 : score;
  }, 0);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 antialiased font-sans selection:bg-orange-500 selection:text-white relative pb-20">
      {/* Ambient background glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-orange-400/10 to-amber-300/10 blur-[90px]" />
        <div className="absolute top-1/3 -left-40 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-stone-400/10 to-orange-300/10 blur-[100px]" />
        <div className="absolute -bottom-40 right-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-amber-400/10 to-stone-300/10 blur-[90px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 md:px-8">
        {/* Track navigation bar */}
        <ModuleNav track="cybersecurity" currentModuleId="wireless-security" />

        {/* ========================================================================= */}
        {/* HERO CARD                                                                 */}
        {/* ========================================================================= */}
        <div className="mt-6 rounded-3xl border border-[#e7e3da] bg-white/80 p-6 md:p-10 shadow-xs backdrop-blur-md relative overflow-hidden mb-8">
          <div className="absolute top-0 right-0 h-48 w-48 bg-gradient-to-bl from-orange-500/10 via-amber-500/5 to-transparent rounded-bl-full pointer-events-none" />

          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-stone-500 mb-3">
            <span className="text-[#ea580c] font-semibold">PrepSpaces Masterclass</span>
            <span>/</span>
            <span>Module 17</span>
            <span>/</span>
            <span className="text-stone-800 font-medium">Wireless Security & Wi-Fi Defense</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-100 text-[#ea580c] px-3 py-1 text-xs font-bold font-mono">
              CISA · NIST SP 800-153 · MITRE ATT&CK T1557.004
            </span>
            <span className="rounded-full bg-stone-100 text-stone-700 px-3 py-1 text-xs font-medium">
              12–16 Hours Estimated
            </span>
            <span className="rounded-full bg-stone-100 text-stone-700 px-3 py-1 text-xs font-medium">
              Intermediate
            </span>
            <span className="rounded-full bg-amber-100 text-amber-800 px-3 py-1 text-xs font-medium">
              Enterprise WLAN & WIDS
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 mb-4">
            Wireless Network Security and Wi-Fi Defense
          </h1>

          <p className="text-base sm:text-lg text-stone-600 max-w-4xl leading-relaxed mb-6">
            Wireless networks connect laptops, mobile phones, IoT devices, and infrastructure without physical cables. That flexibility introduces unique security challenges: radio signals travel beyond physical perimeters, nearby unauthorized access points can imitate legitimate networks, shared credentials can leak, and poorly segmented Wi-Fi creates bridges into sensitive internal networks. Master WPA3-SAE, 802.1X/EAP-TLS, multi-VLAN segmentation, rogue AP detection, and wireless intrusion prevention.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-stone-200 text-xs text-stone-600 font-mono">
            <div>
              <span className="text-stone-400 block">Encryption Standards</span>
              <strong className="text-stone-900">WPA3-SAE & 802.1X EAP-TLS</strong>
            </div>
            <div>
              <span className="text-stone-400 block">Threat Models</span>
              <strong className="text-stone-900">Evil Twin & Rogue Bridges</strong>
            </div>
            <div>
              <span className="text-stone-400 block">Hands-on Labs</span>
              <strong className="text-stone-900">6 Interactive Sandboxes</strong>
            </div>
            <div>
              <span className="text-stone-400 block">Capstone Project</span>
              <strong className="text-stone-900">Enterprise WLAN Hardening</strong>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* WORKSPACE NAVIGATION TABS                                                 */}
        {/* ========================================================================= */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-[#e7e3da] pb-4">
          {[
            { id: "theory", label: "Curriculum & Theory", icon: BookOpen },
            { id: "labs", label: "Interactive Security Labs", icon: Terminal, badge: "6 Labs" },
            { id: "case-study", label: "PrepSpaces Case Study", icon: Server },
            { id: "quiz", label: "Knowledge Check", icon: HelpCircle, badge: "6 Questions" },
            { id: "capstone", label: "Capstone Project & Rubric", icon: Award }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#18181b] text-white shadow-xs"
                    : "bg-white text-stone-600 border border-stone-200 hover:border-orange-300 hover:text-stone-900"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`ml-1 text-[10px] px-2 py-0.5 rounded-full font-mono ${
                      isActive ? "bg-orange-600 text-white" : "bg-stone-100 text-stone-600"
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: CURRICULUM & THEORY                                                */}
        {/* ========================================================================= */}
        {activeTab === "theory" && (
          <div className="space-y-8">
            {/* Quick Navigation index */}
            <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-xs">
              <span className="text-xs font-mono font-bold text-stone-500 uppercase tracking-wider block mb-2">
                Lessons in Module 17
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  { href: "#lesson-1", label: "1. Wireless Fundamentals & Surface" },
                  { href: "#lesson-2", label: "2. Standards: WPA2, WPA3 & OWE" },
                  { href: "#lesson-3", label: "3. 802.1X & Access Policy" },
                  { href: "#lesson-4", label: "4. Rogue APs & Evil Twins" },
                  { href: "#lesson-5", label: "5. Segmentation & Enterprise WLAN" },
                  { href: "#lesson-6", label: "6. Monitoring, WIDS/WIPS & IR" }
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="text-xs font-mono bg-stone-100 hover:bg-orange-100 hover:text-orange-900 text-stone-700 px-3 py-1.5 rounded-xl transition"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* LESSON 1 */}
            <section id="lesson-1" className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Lesson 1
                </span>
                <span className="text-xs font-mono text-stone-400">Radio & Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Wireless Networking Fundamentals and Attack Surface
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <p>
                  A <strong>Wireless Local Area Network (WLAN)</strong> connects devices using radio frequency (RF) transmissions, enabling communication with an Access Point (AP) or wireless infrastructure without physical cabling.
                </p>

                <h3 className="text-lg font-bold text-stone-900 pt-2">1.1 Core WLAN Terminology</h3>
                <div className="overflow-x-auto my-2">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-100 text-stone-800">
                        <th className="p-3 font-semibold">Term</th>
                        <th className="p-3 font-semibold">Technical Definition</th>
                        <th className="p-3 font-semibold">Security Rationale & Defense Context</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-600">
                      <tr>
                        <td className="p-3 font-mono font-bold text-stone-900">SSID</td>
                        <td className="p-3">Service Set Identifier (the public network name)</td>
                        <td className="p-3">Rogue APs can broadcast duplicate SSIDs to execute evil-twin attacks.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono font-bold text-stone-900">BSSID</td>
                        <td className="p-3">Basic Service Set Identifier (AP radio MAC address)</td>
                        <td className="p-3">Used by WIDS to differentiate legitimate APs from rogue hardware.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono font-bold text-stone-900">WLC</td>
                        <td className="p-3">Wireless LAN Controller (centralized management)</td>
                        <td className="p-3">Enforces global roaming, encryption policies, and rogue AP mitigation.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono font-bold text-stone-900">Supplicant</td>
                        <td className="p-3">Client device software requesting network access</td>
                        <td className="p-3">Must be configured to strictly validate the RADIUS server certificate.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
                  <strong>Important Roaming Clarification:</strong> In enterprise networks, a single corporate SSID is intentionally broadcast across dozens of access points with different BSSIDs to allow users to roam seamlessly across buildings. Finding multiple BSSIDs for one SSID is expected behavior; defenders compare observed BSSIDs against the authorized controller inventory rather than assuming malicious duplication.
                </div>

                <h3 className="text-lg font-bold text-stone-900 pt-4">1.2 Wi-Fi Frequency Bands (2.4 GHz vs 5 GHz vs 6 GHz)</h3>
                <div className="grid sm:grid-cols-3 gap-3 my-2 text-xs">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 block mb-1">2.4 GHz Band</strong>
                    <p className="text-stone-600">
                      Long range, strong wall penetration. High congestion (only 3 non-overlapping channels: 1, 6, 11). Signals travel far into parking lots, increasing external interception risks.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 block mb-1">5 GHz Band</strong>
                    <p className="text-stone-600">
                      Shorter range, higher bandwidth. Up to 25 non-overlapping 20 MHz channels. Signal attenuates quickly through physical walls, naturally reducing perimeter leakage.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 block mb-1">6 GHz Band (Wi-Fi 6E/7)</strong>
                    <p className="text-stone-600">
                      Massive spectrum (up to 1200 MHz). Requires WPA3 or Enhanced Open by standard specification. Legacy WEP/WPA2 are completely prohibited in 6 GHz.
                    </p>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 pt-4">1.3 Wireless Attack Surface Overview</h3>
                <div className="grid sm:grid-cols-2 gap-3 text-xs">
                  {[
                    { title: "Authentication", risk: "Weak PSK passphrases or unvalidated server certs", fix: "WPA3-SAE or 802.1X EAP-TLS with enterprise PKI" },
                    { title: "Rogue Hardware", risk: "Employees plugging home routers into office Ethernet", fix: "802.1X port security (802.1X on wired switches) + WIDS" },
                    { title: "Evil-Twin APs", risk: "Adversaries cloning corporate SSIDs for credential theft", fix: "Certificate pinning, mutual authentication, WIPS containment" },
                    { title: "Guest Wi-Fi", risk: "Visitors scanning internal servers or management IP", fix: "Client isolation, VLAN segregation, blocking RFC1918 subnets" },
                    { title: "IoT Hardware", risk: "Smart TVs and sensors running outdated firmware", fix: "Isolated IoT VLAN with strict outbound-only firewall rules" },
                    { title: "Management UI", risk: "Default router passwords, exposed WAN administration", fix: "Disable WAN management, enforce HTTPS/SSH on admin VLAN" }
                  ].map((item, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                      <strong className="text-stone-900 block mb-0.5">{item.title}</strong>
                      <div className="text-red-700 font-mono text-[11px] mb-1">Risk: {item.risk}</div>
                      <div className="text-emerald-800 text-[11px]">Defense: {item.fix}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* LESSON 2 */}
            <section id="lesson-2" className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Lesson 2
                </span>
                <span className="text-xs font-mono text-stone-400">Security Standards</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Wi-Fi Security Standards: WEP, WPA, WPA2, WPA3, and Enhanced Open
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <h3 className="text-lg font-bold text-stone-900">2.1 The Evolution of Wi-Fi Encryption Standards</h3>
                <div className="overflow-x-auto my-3">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-100 text-stone-800">
                        <th className="p-3 font-semibold">Standard</th>
                        <th className="p-3 font-semibold">Key Exchange & Encryption</th>
                        <th className="p-3 font-semibold">Vulnerability Profile</th>
                        <th className="p-3 font-semibold">Operational Guidance</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-600">
                      <tr>
                        <td className="p-3 font-mono font-bold text-red-600">WEP</td>
                        <td className="p-3">RC4 with static 24-bit IV</td>
                        <td className="p-3 text-red-600">Trivially cracked in minutes via passive packet collection</td>
                        <td className="p-3 font-bold text-red-700">PROHIBITED</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono font-bold text-amber-600">WPA2-Personal</td>
                        <td className="p-3">AES-CCMP + 4-Way PSK Handshake</td>
                        <td className="p-3 text-amber-700">Capturing 4-way handshake enables offline dictionary attacks</td>
                        <td className="p-3">Legacy compatibility only; requires 20+ char passphrase</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono font-bold text-emerald-600">WPA3-Personal</td>
                        <td className="p-3">SAE (Dragonfly Zero-Knowledge Proof) + PMF</td>
                        <td className="p-3 text-emerald-800">Immune to offline dictionary cracking; forward secrecy</td>
                        <td className="p-3 font-bold text-emerald-700">PREFERRED STANDARD</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono font-bold text-emerald-600">WPA3-Enterprise</td>
                        <td className="p-3">802.1X / EAP-TLS + Suite B 192-bit mode</td>
                        <td className="p-3 text-emerald-800">Centralized PKI; eliminates shared passwords entirely</td>
                        <td className="p-3 font-bold text-emerald-700">ENTERPRISE BEST PRACTICE</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono font-bold text-blue-600">Enhanced Open (OWE)</td>
                        <td className="p-3">Opportunistic Wireless Encryption (RFC 8110)</td>
                        <td className="p-3 text-blue-800">Encrypts over-the-air traffic without password; no AP identity proof</td>
                        <td className="p-3">Recommended for public / guest Wi-Fi</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-bold text-stone-900 pt-4">2.2 WPA3-Personal and Simultaneous Authentication of Equals (SAE)</h3>
                <p className="text-sm">
                  In WPA2-Personal, an attacker within radio range records a client connecting to an AP (or triggers deauthentication), captures the 4-way EAPOL handshake, and cracks the pre-shared key offline at millions of guesses per second using GPUs.
                </p>
                <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs space-y-2">
                  <div className="text-stone-400">// WPA3 Simultaneous Authentication of Equals (Dragonfly Exchange)</div>
                  <div>1. Client and AP engage in a zero-knowledge password proof using elliptic-curve cryptography.</div>
                  <div>2. A temporary peer key is derived dynamically without ever transmitting the password hash.</div>
                  <div>3. An eavesdropper recording the exchange learns ZERO information to test candidate passwords offline.</div>
                  <div>4. Forward Secrecy: Compromising the network password in the future cannot decrypt previously captured traffic.</div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 pt-4">2.3 Protected Management Frames (PMF / 802.11w)</h3>
                <p className="text-sm">
                  Legacy 802.11 management frames (such as deauthentication and disassociation frames) are unencrypted. Attackers spoof the AP's MAC address and transmit forged deauth frames to kick clients off the network.
                </p>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
                  <strong className="text-stone-900 block mb-1">How PMF Defends Against Deauth Flooding:</strong>
                  <p className="text-stone-600">
                    PMF (mandatory in WPA3) cryptographically signs unicast and broadcast management frames using a Broadcast Integrity Protocol Key (BIP). Clients drop forged deauthentication frames because the attacker lacks the cryptographic key to produce a valid Message Integrity Code (MIC).
                  </p>
                </div>
              </div>
            </section>

            {/* LESSON 3 */}
            <section id="lesson-3" className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Lesson 3
                </span>
                <span className="text-xs font-mono text-stone-400">Enterprise Access Control</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Wireless Authentication, Credential Management, and Access Policy
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <h3 className="text-lg font-bold text-stone-900">3.1 The 802.1X / RADIUS Architecture</h3>
                <p className="text-sm">
                  Enterprise wireless separates authentication from the physical access point using three distinct roles:
                </p>

                <div className="grid sm:grid-cols-3 gap-3 my-3 text-xs">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 block mb-1">1. Supplicant (Client Device)</strong>
                    <p className="text-stone-600">
                      The laptop or smartphone presenting credentials. Must be provisioned with a private client certificate or enterprise user account.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 block mb-1">2. Authenticator (Access Point / WLC)</strong>
                    <p className="text-stone-600">
                      Enforces the port gate. Blocks all IP traffic except EAP authentication packets until the RADIUS server sends an Access-Accept.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 block mb-1">3. Authentication Server (RADIUS)</strong>
                    <p className="text-stone-600">
                      Verifies client identities against directory services (LDAP/AD/Okta) and returns dynamic VLAN tags and session encryption keys.
                    </p>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 pt-4">3.2 EAP-TLS and Server Certificate Validation</h3>
                <p className="text-sm">
                  In <strong>EAP-TLS</strong>, mutual authentication occurs using X.509 digital certificates:
                </p>
                <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs space-y-1">
                  <div className="text-stone-400">// EAP-TLS Mutual Verification Pipeline</div>
                  <div>1. Access Point relays TLS handshake between Supplicant and RADIUS server.</div>
                  <div>2. RADIUS server presents its certificate $\rightarrow$ Supplicant verifies signature against enterprise Root CA.</div>
                  <div className="text-amber-400">↳ CRITICAL: If client certificate validation is disabled, rogue RADIUS steals identity!</div>
                  <div>3. Supplicant presents its device certificate $\rightarrow$ RADIUS server validates signature and checks CRL/OCSP.</div>
                  <div>4. Master Session Key (MSK) derived $\rightarrow$ AP dynamically plumbed with Pairwise Transient Key (PTK).</div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 pt-4">3.3 Access Point Hardening Best Practices (CERT-In)</h3>
                <ul className="list-disc pl-6 space-y-1 text-xs text-stone-600">
                  <li><strong>Disable Wi-Fi Protected Setup (WPS):</strong> WPS PIN authentication is vulnerable to offline and online brute-force attacks within hours.</li>
                  <li><strong>Disable Remote WAN Administration:</strong> Web management interfaces must never be accessible from the public internet.</li>
                  <li><strong>Change Default Credentials:</strong> Immediately replace default factory passwords with unique 20+ character passphrases.</li>
                  <li><strong>Isolate Management Interface on Dedicated VLAN:</strong> Place AP management IP addresses on an isolated VLAN restricted to authorized network administrators.</li>
                </ul>
              </div>
            </section>

            {/* LESSON 4 */}
            <section id="lesson-4" className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Lesson 4
                </span>
                <span className="text-xs font-mono text-stone-400">Threat Vectors</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Wireless Threats: Rogue APs, Evil Twins, and Client Risks
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <h3 className="text-lg font-bold text-stone-900">4.1 Rogue Access Points vs. Evil-Twin Attacks</h3>
                <div className="grid sm:grid-cols-2 gap-3 text-xs my-2">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 block mb-1">Rogue Access Point</strong>
                    <p className="text-stone-600">
                      An unauthorized wireless AP plugged directly into an enterprise wired Ethernet switch port (e.g. by an employee wanting wireless access). Creates an unmonitored backdoor bridging past physical firewalls and 802.1X admission controls.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 block mb-1">Evil Twin (MITRE ATT&CK T1557.004)</strong>
                    <p className="text-stone-600">
                      A fraudulent wireless access point set up by an external attacker broadcasting the exact same SSID as a legitimate network. Deceives victims into associating to execute adversary-in-the-middle (AiTM) traffic interception and credential harvesting.
                    </p>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 pt-4">4.2 Wireless Client Endpoint Risks</h3>
                <p className="text-sm">
                  Even if the enterprise access point is securely configured, unmanaged client behavior introduces severe risks:
                </p>
                <div className="grid sm:grid-cols-3 gap-3 my-2 text-xs">
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200">
                    <strong className="text-red-900 block mb-1">Automatic Network Probing</strong>
                    <span className="text-stone-700">Clients constantly broadcast probe requests for previously connected SSIDs, revealing travel history and attracting karma evil twins.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200">
                    <strong className="text-amber-900 block mb-1">Dual-Homed Bridging</strong>
                    <span className="text-stone-700">A laptop connected to corporate Ethernet while simultaneously hosting a mobile hotspot creates an unauthorized bridge into corporate LAN.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-purple-50 border border-purple-200">
                    <strong className="text-purple-900 block mb-1">Unvalidated Server Certs</strong>
                    <span className="text-stone-700">Users clicking "Trust / Continue" on invalid certificate popups during enterprise Wi-Fi sign-in instantly expose enterprise credentials.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* LESSON 5 */}
            <section id="lesson-5" className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Lesson 5
                </span>
                <span className="text-xs font-mono text-stone-400">Network Architecture</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Wireless Segmentation and Enterprise Wi-Fi Architecture
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <p>
                  <strong>Authentication controls entry; segmentation controls reach.</strong> An authenticated wireless connection must never grant unrestricted network visibility into sensitive internal systems.
                </p>

                <h3 className="text-lg font-bold text-stone-900 pt-2">5.1 Multi-Zone Enterprise Wireless Segmentation Model</h3>
                <div className="overflow-x-auto my-3">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-100 text-stone-800">
                        <th className="p-3 font-semibold">Zone & SSID</th>
                        <th className="p-3 font-semibold">VLAN ID</th>
                        <th className="p-3 font-semibold">Authentication</th>
                        <th className="p-3 font-semibold">Firewall Policy & Client Isolation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-600">
                      <tr>
                        <td className="p-3 font-semibold text-stone-900">Corporate Staff</td>
                        <td className="p-3 font-mono">VLAN 10</td>
                        <td className="p-3">WPA3-Enterprise (802.1X EAP-TLS)</td>
                        <td className="p-3">Access to approved internal apps; inter-client communication permitted</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-stone-900">Guest Visitors</td>
                        <td className="p-3 font-mono">VLAN 20</td>
                        <td className="p-3">Enhanced Open (OWE) / Captive Portal</td>
                        <td className="p-3 text-red-600">Client isolation ON; RFC1918 internal subnets blocked; Internet-only</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-stone-900">IoT & Facilities</td>
                        <td className="p-3 font-mono">VLAN 30</td>
                        <td className="p-3">WPA3-Personal (MPSK / SAE)</td>
                        <td className="p-3 text-red-600">Strict egress allowlist to designated cloud brokers; no LAN access</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-stone-900">AP Management</td>
                        <td className="p-3 font-mono">VLAN 99</td>
                        <td className="p-3">Wired Only / Admin Bastion</td>
                        <td className="p-3 text-red-600">Non-routable to wireless clients; SSH/HTTPS restricted to NetOps subnet</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-bold text-stone-900 pt-4">5.2 Client Isolation (Layer 2 Isolation)</h3>
                <p className="text-sm">
                  In public and guest Wi-Fi networks, <strong>client isolation</strong> prevents devices associated with the same access point from communicating with each other directly over Layer 2 (ARP, ICMP, broadcast, and unicast traffic). This neutralizes malicious peer attacks such as ARP poisoning, SMB relaying, and local port scanning.
                </p>
              </div>
            </section>

            {/* LESSON 6 */}
            <section id="lesson-6" className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Lesson 6
                </span>
                <span className="text-xs font-mono text-stone-400">Monitoring & Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Wireless Monitoring, WIDS/WIPS, and Incident Response
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <h3 className="text-lg font-bold text-stone-900">6.1 WIDS vs. WIPS Capabilities</h3>
                <div className="grid sm:grid-cols-2 gap-3 text-xs my-2">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 block mb-1">Wireless Intrusion Detection (WIDS)</strong>
                    <p className="text-stone-600">
                      Passively monitors the RF spectrum across 2.4/5/6 GHz channels. Detects unexpected BSSIDs, rogue DHCP servers, deauthentication bursts, and security mode mismatches without actively altering transmissions.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 block mb-1">Wireless Intrusion Prevention (WIPS)</strong>
                    <p className="text-stone-600">
                      Actively transmits containment frames or automatically disables switch ports on wired switches where rogue APs are discovered. Must be tightly governed to avoid accidental self-denial of service.
                    </p>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 pt-4">6.2 7-Step Wireless Incident Response Playbook</h3>
                <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs space-y-2">
                  <div className="text-stone-400">// Enterprise Wireless Incident Response Workflow</div>
                  <div>1. Detect: WIDS alerts on duplicate corporate SSID with unknown BSSID.</div>
                  <div>2. Validate: Cross-reference against WLC database to rule out newly deployed authorized APs.</div>
                  <div>3. Correlate: Query SIEM to verify if any corporate clients associated with the rogue BSSID.</div>
                  <div>4. Assess Impact: Check whether credentials were exchanged or traffic was routed externally.</div>
                  <div>5. Contain: Disable the wired switchport hosting the rogue device or isolate the client.</div>
                  <div>6. Recover: Rotate compromised credentials; revoke exposed certificates via CRL/OCSP.</div>
                  <div>7. Improve: Adjust WIDS sensor coverage and update physical building security audits.</div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: INTERACTIVE HANDS-ON LABS                                          */}
        {/* ========================================================================= */}
        {activeTab === "labs" && (
          <div className="space-y-8">
            <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4 text-xs text-amber-900">
              <strong className="block mb-1 font-bold">Authorized Wireless Lab Sandboxes</strong>
              All exercises execute against local synthetic AP configuration simulators and WIDS event telemetry. Practice auditing access point settings, evaluating WPA3 cryptographic handshakes, building multi-VLAN segmentation rules, and detecting evil-twin access points.
            </div>

            {/* LAB 1: Wi-Fi Configuration Audit & AP Hardening */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                    Lab 1
                  </span>
                  <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                    Access Point Configuration Audit & Hardening
                  </h3>
                </div>
                <span className="text-xs font-mono text-stone-400">CERT-In & NIST Baselines</span>
              </div>
              <p className="text-xs text-stone-600 mb-4">
                Simulate an audit of a wireless access point. Adjust administrative settings, disable legacy convenience features (WPS), and observe the real-time security compliance score.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3 bg-stone-50 p-4 rounded-2xl border border-stone-200 text-xs">
                  <strong className="text-stone-900 block mb-2">Access Point Admin Settings:</strong>

                  <label className="flex items-center justify-between p-2 rounded-xl bg-white border border-stone-200 cursor-pointer">
                    <span>Default Administrator Password ('admin/admin')</span>
                    <input
                      type="checkbox"
                      checked={lab1Config.defaultCreds}
                      onChange={(e) => setLab1Config((c) => ({ ...c, defaultCreds: e.target.checked }))}
                      className="rounded accent-orange-600"
                    />
                  </label>

                  <label className="flex items-center justify-between p-2 rounded-xl bg-white border border-stone-200 cursor-pointer">
                    <span>Wi-Fi Protected Setup (WPS Enabled)</span>
                    <input
                      type="checkbox"
                      checked={lab1Config.wpsEnabled}
                      onChange={(e) => setLab1Config((c) => ({ ...c, wpsEnabled: e.target.checked }))}
                      className="rounded accent-orange-600"
                    />
                  </label>

                  <label className="flex items-center justify-between p-2 rounded-xl bg-white border border-stone-200 cursor-pointer">
                    <span>Remote WAN Management (HTTPS/HTTP on Port 8443)</span>
                    <input
                      type="checkbox"
                      checked={lab1Config.remoteMgmt}
                      onChange={(e) => setLab1Config((c) => ({ ...c, remoteMgmt: e.target.checked }))}
                      className="rounded accent-orange-600"
                    />
                  </label>

                  <label className="flex items-center justify-between p-2 rounded-xl bg-white border border-stone-200 cursor-pointer">
                    <span>Firmware Up-to-Date (Current Vendor Patch)</span>
                    <input
                      type="checkbox"
                      checked={lab1Config.firmwareUpdated}
                      onChange={(e) => setLab1Config((c) => ({ ...c, firmwareUpdated: e.target.checked }))}
                      className="rounded accent-orange-600"
                    />
                  </label>

                  <div>
                    <span className="block font-bold text-stone-700 mb-1">Wireless Security Mode:</span>
                    <select
                      value={lab1Config.securityMode}
                      onChange={(e) => setLab1Config((c) => ({ ...c, securityMode: e.target.value }))}
                      className="w-full font-mono p-2 rounded-xl border border-stone-300 bg-white"
                    >
                      <option value="WPA3-Personal">WPA3-Personal (SAE + PMF)</option>
                      <option value="WPA2-Personal">WPA2-Personal (PSK - Legacy)</option>
                      <option value="WEP">WEP (Broken RC4)</option>
                    </select>
                  </div>
                </div>

                <div className="bg-stone-900 text-stone-200 p-4 rounded-2xl font-mono text-xs flex flex-col justify-between">
                  <div>
                    <div className="text-stone-400 mb-2">// AP Security Posture Audit</div>
                    <div className="flex items-center justify-between mb-4">
                      <span>Hardening Score:</span>
                      <span className={`text-2xl font-bold font-mono ${
                        calculateLab1Score() >= 85 ? "text-emerald-400" : calculateLab1Score() >= 60 ? "text-amber-400" : "text-red-400"
                      }`}>
                        {calculateLab1Score()}%
                      </span>
                    </div>

                    <div className="space-y-1.5 text-[11px]">
                      {lab1Config.defaultCreds && (
                        <div className="text-red-400">❌ CRITICAL: Default credentials active. AP vulnerable to immediate takeover.</div>
                      )}
                      {lab1Config.wpsEnabled && (
                        <div className="text-red-400">❌ HIGH RISK: WPS enabled. Vulnerable to PIN brute-force cracking.</div>
                      )}
                      {lab1Config.remoteMgmt && (
                        <div className="text-amber-400">⚠️ RISK: Remote WAN admin enabled. Exposed to internet-wide port scans.</div>
                      )}
                      {!lab1Config.firmwareUpdated && (
                        <div className="text-amber-400">⚠️ RISK: Outdated firmware. Known CVEs unpatched.</div>
                      )}
                      {lab1Config.securityMode === "WEP" && (
                        <div className="text-red-400">❌ CRITICAL: Deprecated WEP in use. Traffic decryptable in seconds.</div>
                      )}
                      {calculateLab1Score() === 100 && (
                        <div className="text-emerald-400">✓ HARDENED BASELINE ACHIEVED: WPA3-SAE, WPS disabled, local-only administration.</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* LAB 2: Wi-Fi Protocol Comparison Sandbox */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                    Lab 2
                  </span>
                  <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                    Wi-Fi Protocol Security Sandbox (WEP vs WPA2 vs WPA3 vs OWE)
                  </h3>
                </div>
                <span className="text-xs font-mono text-stone-400">Cryptographic Handshakes</span>
              </div>
              <p className="text-xs text-stone-600 mb-4">
                Select different Wi-Fi security protocols to compare encryption ciphers, handshake mechanics, Protected Management Frame (PMF) support, and offline cracking vulnerability.
              </p>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {Object.keys(protocolData).map((p) => (
                    <button
                      key={p}
                      onClick={() => setLab2Protocol(p)}
                      className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition cursor-pointer ${
                        lab2Protocol === p ? "bg-stone-900 text-white" : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <strong className="text-stone-900 text-sm">{lab2Protocol}</strong>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${protocolData[lab2Protocol].badgeColor}`}>
                        {protocolData[lab2Protocol].status}
                      </span>
                    </div>

                    <div>
                      <span className="text-stone-500 font-bold block">Encryption Cipher:</span>
                      <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-stone-200">{protocolData[lab2Protocol].cipher}</code>
                    </div>

                    <div>
                      <span className="text-stone-500 font-bold block">Authentication Method:</span>
                      <span className="text-stone-800">{protocolData[lab2Protocol].auth}</span>
                    </div>

                    <div>
                      <span className="text-stone-500 font-bold block">Key Handshake Mechanism:</span>
                      <span className="text-stone-800 font-mono text-[11px]">{protocolData[lab2Protocol].handshake}</span>
                    </div>

                    <div>
                      <span className="text-stone-500 font-bold block">Protected Management Frames (PMF):</span>
                      <span className="text-stone-800 font-bold">{protocolData[lab2Protocol].pmf}</span>
                    </div>
                  </div>

                  <div className="bg-stone-900 text-stone-200 p-4 rounded-2xl font-mono text-xs flex flex-col justify-between">
                    <div>
                      <div className="text-stone-400 mb-2">// Vulnerability & Offline Cracking Assessment</div>
                      <p className="text-amber-300 text-xs leading-relaxed mb-4">
                        {protocolData[lab2Protocol].offlineAttack}
                      </p>
                    </div>
                    <div className="text-stone-500 text-[11px] pt-4 border-t border-stone-800">
                      Recommendation: Enforce WPA3-Personal or WPA3-Enterprise on all modern infrastructure.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* LAB 3: Multi-VLAN Wireless Segmentation Matrix */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                    Lab 3
                  </span>
                  <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                    Multi-VLAN Wireless Segmentation Matrix
                  </h3>
                </div>
                <span className="text-xs font-mono text-stone-400">Network Segmentation</span>
              </div>
              <p className="text-xs text-stone-600 mb-4">
                Select source and destination network zones to test inter-VLAN firewall routing rules and verify that guest and IoT devices cannot traverse into management or corporate segments.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3 bg-stone-50 p-4 rounded-2xl border border-stone-200 text-xs">
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">Source Wireless Zone:</label>
                    <select
                      value={lab3SourceZone}
                      onChange={(e) => setLab3SourceZone(e.target.value)}
                      className="w-full font-mono p-2 rounded-xl border border-stone-300 bg-white"
                    >
                      <option value="Corporate">Corporate (VLAN 10 - Employees)</option>
                      <option value="Guest">Guest (VLAN 20 - Visitors)</option>
                      <option value="IoT">IoT (VLAN 30 - Smart Devices)</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-bold text-stone-700 block mb-1">Destination Target:</label>
                    <select
                      value={lab3DestZone}
                      onChange={(e) => setLab3DestZone(e.target.value)}
                      className="w-full font-mono p-2 rounded-xl border border-stone-300 bg-white"
                    >
                      <option value="Corporate">Corporate LAN (Internal File Shares & Servers)</option>
                      <option value="Management">AP Management Interface (VLAN 99)</option>
                      <option value="Guest">Other Guest Devices (Lateral Peer Traffic)</option>
                      <option value="Internet">Public Internet Gateway</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <input
                      type="checkbox"
                      id="isolation"
                      checked={lab3ClientIsolation}
                      onChange={(e) => setLab3ClientIsolation(e.target.checked)}
                      className="rounded accent-orange-600"
                    />
                    <label htmlFor="isolation" className="font-medium text-stone-700">
                      Enable Layer 2 Client Isolation on Guest Wi-Fi
                    </label>
                  </div>
                </div>

                <div className="bg-stone-900 text-stone-200 p-4 rounded-2xl font-mono text-xs flex flex-col justify-between">
                  <div>
                    <div className="text-stone-400 mb-2">// Inter-VLAN Firewall Policy Evaluation</div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        evaluateSegmentationTraffic().allowed
                          ? "bg-emerald-950 text-emerald-400"
                          : "bg-red-950 text-red-400"
                      }`}>
                        {evaluateSegmentationTraffic().allowed ? "TRAFFIC PERMITTED" : "TRAFFIC BLOCKED"}
                      </span>
                    </div>
                    <p className="text-stone-300 text-xs leading-relaxed">
                      {evaluateSegmentationTraffic().reason}
                    </p>
                  </div>
                  <div className="text-stone-500 text-[11px] pt-4 border-t border-stone-800">
                    NSA Guidance: Guest and IoT devices must never have routing paths to administrative or corporate subnets.
                  </div>
                </div>
              </div>
            </div>

            {/* LAB 4: Enterprise 802.1X / EAP-TLS Handshake */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                    Lab 4
                  </span>
                  <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                    Enterprise 802.1X / EAP-TLS Authentication Inspector
                  </h3>
                </div>
                <span className="text-xs font-mono text-stone-400">PKI & Certificate Validation</span>
              </div>
              <p className="text-xs text-stone-600 mb-4">
                Test how client supplicant certificate validation protects against rogue RADIUS servers in 802.1X networks. Observe what happens if clients disable server certificate validation.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3 bg-stone-50 p-4 rounded-2xl border border-stone-200 text-xs">
                  <label className="flex items-center justify-between p-2 rounded-xl bg-white border border-stone-200 cursor-pointer">
                    <span>Validate RADIUS Server Certificate against Enterprise Root CA</span>
                    <input
                      type="checkbox"
                      checked={lab4ValidateServerCert}
                      onChange={(e) => setLab4ValidateServerCert(e.target.checked)}
                      className="rounded accent-orange-600"
                    />
                  </label>

                  <label className="flex items-center justify-between p-2 rounded-xl bg-white border border-stone-200 cursor-pointer">
                    <span>Simulate Rogue RADIUS Server (Evil-Twin AP Environment)</span>
                    <input
                      type="checkbox"
                      checked={lab4RogueRadiusActive}
                      onChange={(e) => setLab4RogueRadiusActive(e.target.checked)}
                      className="rounded accent-orange-600"
                    />
                  </label>

                  <button
                    onClick={handleLab4Authenticate}
                    className="w-full py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold transition cursor-pointer"
                  >
                    Initiate 802.1X EAP-TLS Connection
                  </button>
                </div>

                <div className="bg-stone-900 text-stone-200 p-4 rounded-2xl font-mono text-xs flex flex-col justify-between">
                  <div>
                    <div className="text-stone-400 mb-2">// Supplicant 802.1X Handshake Trace</div>
                    {lab4AuthResult ? (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            lab4AuthResult.success
                              ? "bg-emerald-950 text-emerald-400"
                              : lab4AuthResult.breach
                              ? "bg-red-950 text-red-400"
                              : "bg-amber-950 text-amber-400"
                          }`}>
                            {lab4AuthResult.status}
                          </span>
                        </div>
                        <p className="text-stone-300 text-xs leading-relaxed">
                          {lab4AuthResult.detail}
                        </p>
                      </div>
                    ) : (
                      <div className="text-stone-500 italic mt-6">Click authenticate to observe mutual TLS verification.</div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* LAB 5: Rogue AP & Evil-Twin Detection Engine */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                    Lab 5
                  </span>
                  <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                    Rogue AP & Evil-Twin Detection Engine (MITRE T1557.004)
                  </h3>
                </div>
                <span className="text-xs font-mono text-stone-400">WIDS Telemetry</span>
              </div>
              <p className="text-xs text-stone-600 mb-4">
                A Wireless Intrusion Detection System detected 4 access points in the RF spectrum. Inspect each AP to correlate BSSID, vendor OUI, signal strength, and security mode against the authorized corporate inventory.
              </p>

              <div className="space-y-3">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
                  {lab5DetectedAPs.map((ap) => (
                    <button
                      key={ap.id}
                      onClick={() => handleLab5Inspect(ap)}
                      className={`p-3 rounded-2xl border text-left text-xs transition cursor-pointer flex flex-col justify-between ${
                        lab5SelectedAP?.id === ap.id
                          ? "bg-stone-900 text-white border-stone-900"
                          : ap.status === "SUSPICIOUS"
                          ? "bg-red-50/60 border-red-300 text-stone-800"
                          : "bg-stone-50 border-stone-200 text-stone-800"
                      }`}
                    >
                      <div>
                        <div className="font-bold text-sm mb-1">{ap.ssid}</div>
                        <div className="font-mono text-[11px] text-stone-400">{ap.bssid}</div>
                      </div>
                      <div className="mt-2 text-[10px] font-mono flex items-center justify-between">
                        <span>Ch {ap.channel}</span>
                        <span>{ap.signal}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {lab5Investigation && (
                  <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs space-y-3">
                    <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          lab5Investigation.severity === "CRITICAL"
                            ? "bg-red-950 text-red-400"
                            : "bg-emerald-950 text-emerald-400"
                        }`}>
                          {lab5Investigation.type}
                        </span>
                        <span className="text-stone-400">Target: {lab5SelectedAP.bssid}</span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="text-stone-400 block font-bold">WIDS Threat Correlation:</span>
                      {lab5Investigation.findings.map((f, idx) => (
                        <div key={idx} className="text-stone-300">• {f}</div>
                      ))}
                    </div>

                    <div className="pt-2 text-emerald-400 border-t border-stone-800">
                      Automated WIPS Response: {lab5Investigation.action}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 8-POINT LAB SUBMISSION CHECKLIST */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                    Lab Submission Readiness Checklist
                  </h3>
                  <p className="text-xs text-stone-500">
                    Verify all 8 practical evaluation criteria before proceeding to the final capstone project.
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-sm font-bold text-orange-600">
                    {completedChecklistCount} / 8 Completed
                  </span>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-2 text-xs">
                {[
                  { id: "item1", label: "Lab scope and authorization documented" },
                  { id: "item2", label: "Access-point inventory and firmware status recorded" },
                  { id: "item3", label: "Wireless authentication and security mode reviewed" },
                  { id: "item4", label: "Wireless segmentation design completed (VLANs & isolation)" },
                  { id: "item5", label: "Identity and client policy reviewed where applicable" },
                  { id: "item6", label: "Wireless monitoring observations investigated (WIDS)" },
                  { id: "item7", label: "At least three hardening changes verified (WPS, PMF, creds)" },
                  { id: "item8", label: "Residual risks and recovery procedures documented" }
                ].map((item) => (
                  <label
                    key={item.id}
                    onClick={() => toggleChecklist(item.id)}
                    className={`flex items-center gap-3 p-3 rounded-2xl border transition cursor-pointer ${
                      checklist[item.id]
                        ? "bg-emerald-50/60 border-emerald-300 text-emerald-950 font-semibold"
                        : "bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checklist[item.id]}
                      onChange={() => {}}
                      className="rounded accent-emerald-600"
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: PREP SPACES CASE STUDY                                             */}
        {/* ========================================================================= */}
        {activeTab === "case-study" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Architecture Case Study
                </span>
                <span className="text-xs font-mono text-stone-400">PrepSpaces Campus WLAN Blueprint</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                Enterprise Multi-VLAN Wi-Fi Architecture at PrepSpaces
              </h2>

              <p className="text-sm text-stone-700 leading-relaxed mb-6">
                PrepSpaces operates physical university testing centers and mock interview hubs where hundreds of candidates, interviewers, and IoT audio-visual devices connect daily. To eliminate lateral movement and eavesdropping, the network architecture enforces strict 802.1X certificate-based authentication, multi-VLAN isolation, and continuous WIDS monitoring.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-2">
                  <div className="font-bold text-stone-900 text-sm flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-orange-600" />
                    WPA3-Enterprise (802.1X)
                  </div>
                  <p className="text-stone-600">
                    Corporate laptops connect via EAP-TLS using machine certificates provisioned by MDM. RADIUS dynamically assigns VLAN 10 and enforces PMF.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-2">
                  <div className="font-bold text-stone-900 text-sm flex items-center gap-2">
                    <Lock className="w-4 h-4 text-orange-600" />
                    Guest Client Isolation
                  </div>
                  <p className="text-stone-600">
                    Candidate testing laptops connect to 'PrepSpaces-Candidate' on VLAN 20 with Layer 2 client isolation enabled. Candidates cannot scan peer devices or reach internal servers.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-2">
                  <div className="font-bold text-stone-900 text-sm flex items-center gap-2">
                    <Radar className="w-4 h-4 text-orange-600" />
                    Continuous WIDS Mesh
                  </div>
                  <p className="text-stone-600">
                    Dedicated radio sensors scan for rogue access points. If an unauthorized device broadcasts 'PrepSpaces' with an unknown BSSID, WIPS auto-disables the uplink switchport.
                  </p>
                </div>
              </div>

              <h3 className="text-lg font-bold text-stone-900 mb-3">PrepSpaces Production WLAN Layout</h3>
              <div className="p-5 rounded-2xl bg-stone-900 text-stone-200 text-xs font-mono space-y-3 leading-relaxed">
                <div>[1. Client Supplicants]</div>
                <div className="pl-4 text-stone-400">↳ Staff laptops (EAP-TLS), Guest candidate devices (OWE), IoT cameras (MPSK).</div>
                <div>[2. Managed Access Point Fleet]</div>
                <div className="pl-4 text-stone-400">↳ Ceiling APs with Protected Management Frames (802.11w) mandatory. WPS disabled.</div>
                <div>[3. Wireless LAN Controller (WLC)]</div>
                <div className="pl-4 text-stone-400">↳ Terminates CAPWAP tunnels; bridges client traffic to core switches via 802.1Q VLAN trunks.</div>
                <div>[4. FreeRADIUS Cluster & Active Directory]</div>
                <div className="pl-4 text-stone-400">↳ Mutual certificate authentication; validates client cert and verifies OCSP revocation status.</div>
                <div>[5. Next-Gen Inter-VLAN Firewall]</div>
                <div className="pl-4 text-stone-400">↳ Strict default-deny rules between VLAN 20 (Guests), VLAN 30 (IoT), and VLAN 99 (Management).</div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: KNOWLEDGE ASSESSMENT (QUIZ)                                        */}
        {/* ========================================================================= */}
        {activeTab === "quiz" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                      Knowledge Assessment
                    </span>
                    <span className="text-xs font-mono text-stone-400">6 Scenario Questions</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    Wireless Security & Wi-Fi Defense Evaluation
                  </h2>
                </div>
                {quizSubmitted && (
                  <div className="text-right">
                    <div className="text-xs font-mono text-stone-400 uppercase">Score</div>
                    <div className={`text-2xl font-black font-mono ${
                      quizScore >= 5 ? "text-emerald-600" : quizScore >= 4 ? "text-amber-600" : "text-red-600"
                    }`}>
                      {quizScore} / {quizQuestions.length} ({Math.round((quizScore / quizQuestions.length) * 100)}%)
                    </div>
                  </div>
                )}
              </div>

              <p className="text-xs sm:text-sm text-stone-600 mb-6">
                Choose the single best answer for each question, then submit to review your score and detailed explanations based on CISA, NIST, and MITRE standards.
              </p>

              <div className="space-y-6">
                {quizQuestions.map((q, idx) => {
                  const selected = quizAnswers[q.id];
                  const isAnswered = selected !== undefined;
                  const isCorrect = selected === q.correctAnswer;

                  return (
                    <div
                      key={q.id}
                      className={`p-5 rounded-2xl border transition-all ${
                        quizSubmitted
                          ? isCorrect
                            ? "bg-emerald-50/50 border-emerald-300"
                            : "bg-red-50/50 border-red-300"
                          : "bg-stone-50 border-stone-200"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2 font-mono text-xs text-stone-500">
                        <span className="font-bold text-stone-800">Question {idx + 1} of {quizQuestions.length}</span>
                      </div>
                      <div className="font-bold text-stone-900 text-sm mb-3">{q.question}</div>

                      <div className="space-y-2">
                        {q.options.map((opt, oIdx) => {
                          const isOptionSelected = selected === oIdx;
                          const isOptionCorrect = oIdx === q.correctAnswer;

                          let btnStyle = "bg-white border-stone-200 text-stone-700 hover:border-orange-300";
                          if (quizSubmitted) {
                            if (isOptionCorrect) {
                              btnStyle = "bg-emerald-100 border-emerald-500 text-emerald-950 font-semibold";
                            } else if (isOptionSelected && !isOptionCorrect) {
                              btnStyle = "bg-red-100 border-red-500 text-red-950";
                            }
                          } else if (isOptionSelected) {
                            btnStyle = "bg-stone-900 text-white border-stone-900";
                          }

                          return (
                            <button
                              key={oIdx}
                              onClick={() => handleSelectAnswer(q.id, oIdx)}
                              disabled={quizSubmitted}
                              className={`w-full text-left p-3 rounded-xl border text-xs transition cursor-pointer flex items-center justify-between ${btnStyle}`}
                            >
                              <span>{opt}</span>
                              {quizSubmitted && isOptionCorrect && (
                                <Check className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                              )}
                              {quizSubmitted && isOptionSelected && !isOptionCorrect && (
                                <X className="w-4 h-4 text-red-600 shrink-0 ml-2" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {quizSubmitted && (
                        <div className="mt-3 text-xs text-stone-700 pt-3 border-t border-stone-200/60">
                          <strong className="text-stone-900">Explanation: </strong>
                          {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex items-center gap-3 pt-4 border-t border-stone-200">
                {!quizSubmitted ? (
                  <button
                    onClick={handleQuizSubmit}
                    disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                    className="px-6 py-3 bg-orange-600 hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-2xl text-xs transition cursor-pointer shadow-xs"
                  >
                    Submit Assessment
                  </button>
                ) : (
                  <button
                    onClick={handleQuizReset}
                    className="px-6 py-3 bg-stone-900 hover:bg-black text-white font-bold rounded-2xl text-xs transition cursor-pointer shadow-xs"
                  >
                    Retake Quiz
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: CAPSTONE PROJECT & RUBRIC                                          */}
        {/* ========================================================================= */}
        {activeTab === "capstone" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Final Capstone
                </span>
                <span className="text-xs font-mono text-stone-400">100% Evaluation Rubric</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                Capstone Project: Design and Validate a Secure Enterprise Wi-Fi Network
              </h2>

              <p className="text-sm text-stone-700 leading-relaxed mb-6">
                A fictional mid-sized enterprise operates a wireless environment for employees, visitors, IoT sensors, and network administrators. Its current configuration suffers from a single shared pre-shared key, missing AP inventory, zero guest isolation, unpatched router firmware, and no WIDS monitoring. Your task is to design, harden, segment, and validate a secure enterprise WLAN.
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="text-base font-bold text-stone-900">Capstone Assignment Requirements (Parts A – H)</h3>
                <div className="grid sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                    <strong className="text-stone-900">Part A — Wireless Inventory & Threat Model</strong>
                    <p className="text-stone-600">Create an inventory of APs, controllers, SSIDs, BSSIDs, channels, firmware versions, and responsible owners. Map threats like rogue APs and evil twins.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                    <strong className="text-stone-900">Part B — Authentication & Encryption Architecture</strong>
                    <p className="text-stone-600">Specify 802.1X EAP-TLS with mutual certificate validation for corporate devices, Enhanced Open (OWE) for guests, and WPA3-SAE with unique MPSK for IoT.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                    <strong className="text-stone-900">Part C — Multi-VLAN Segmentation & Firewall Policy</strong>
                    <p className="text-stone-600">Design separate VLANs for Corporate, Guest, IoT, and Management. Enforce Layer 2 client isolation on guests and block all RFC1918 traffic.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                    <strong className="text-stone-900">Part D — Access Point Hardening Checklist</strong>
                    <p className="text-stone-600">Disable WPS and WAN remote management; change default passwords; enforce Protected Management Frames (PMF); configure isolated management VLAN.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                    <strong className="text-stone-900">Part E — WIDS/WIPS Monitoring & Incident Response</strong>
                    <p className="text-stone-600">Design an automated detection pipeline correlating unexpected BSSIDs, deauth spikes, and signal strengths against the authorized database.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                    <strong className="text-stone-900">Part F — Controlled Validation Test Suite</strong>
                    <p className="text-stone-600">Execute at least 8 test cases covering allowed access, rogue RADIUS rejection, guest isolation, and management lockdown with test evidence.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                    <strong className="text-stone-900">Part G — Evil-Twin Incident Response Exercise</strong>
                    <p className="text-stone-600">Investigate a simulated rogue AP advertising the corporate SSID with an Alfa USB OUI. Detail evidence correlation, containment, and recovery.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                    <strong className="text-stone-900">Part H — Executive Deliverable & Residual Risk</strong>
                    <p className="text-stone-600">Submit a comprehensive technical architecture report including network topologies, firewall matrices, and periodic review metrics.</p>
                  </div>
                </div>
              </div>

              {/* EVALUATION RUBRIC */}
              <h3 className="text-base font-bold text-stone-900 mb-3">Capstone Evaluation Rubric (100% Total)</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-100 text-stone-800">
                      <th className="p-3 font-semibold">Assessment Area</th>
                      <th className="p-3 font-semibold">Weight</th>
                      <th className="p-3 font-semibold">Evaluation Criteria & Required Deliverables</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">Inventory and Threat Model</td>
                      <td className="p-3 font-mono font-bold text-orange-600">10%</td>
                      <td className="p-3">Complete catalog of APs, BSSIDs, frequencies, and owners paired with threat modeling (MITRE T1557.004).</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">Wireless Authentication and Encryption</td>
                      <td className="p-3 font-mono font-bold text-orange-600">20%</td>
                      <td className="p-3">WPA3-Enterprise 802.1X EAP-TLS design with mutual certificate validation; complete elimination of shared PSKs.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">Segmentation and Least-Privilege Network Policy</td>
                      <td className="p-3 font-mono font-bold text-orange-600">20%</td>
                      <td className="p-3">Multi-VLAN architecture with inter-VLAN firewall rules, Layer 2 client isolation, and blocked private RFC1918 egress.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">Access-Point and Client Hardening</td>
                      <td className="p-3 font-mono font-bold text-orange-600">15%</td>
                      <td className="p-3">Disabled WPS, non-routable management VLAN, PMF enforcement (802.11w), and strong credential policies.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">Wireless Monitoring and Incident Response</td>
                      <td className="p-3 font-mono font-bold text-orange-600">15%</td>
                      <td className="p-3">WIDS spectrum scanning, rogue AP correlation methodology, and a step-by-step containment playbook.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">Validation and Evidence Quality</td>
                      <td className="p-3 font-mono font-bold text-orange-600">15%</td>
                      <td className="p-3">Execution logs across 8 test cases verifying that unauthorized access and lateral pivoting are blocked.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">Reporting and Professional Judgment</td>
                      <td className="p-3 font-mono font-bold text-orange-600">5%</td>
                      <td className="p-3">Professional documentation separating facts from conclusions, residual risk statements, and operational KPIs.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-3 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-600">
                <strong className="text-stone-900">Passing Threshold: </strong>
                Minimum 70% required, with verified WPA3-SAE / 802.1X authentication, multi-VLAN segmentation, and actionable evil-twin triage procedures.
              </div>
            </div>

            {/* OFFICIAL REFERENCES */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <h3 className="font-bold text-stone-900 text-base mb-3">
                Recommended Reading & Official Standards
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                {[
                  {
                    name: "CISA — A Guide to Securing Networks for Wi-Fi",
                    desc: "Technical guidance on securing wireless architectures, preventing rogue bridges, and complementary controls.",
                    url: "https://www.cisa.gov/sites/default/files/publications/A_Guide_to_Securing_Networks_for_Wi-Fi.pdf"
                  },
                  {
                    name: "NIST SP 800-153 — Securing Wireless Local Area Networks",
                    desc: "Foundational recommendations for WLAN design, AP configuration, client hardening, and continuous monitoring.",
                    url: "https://csrc.nist.gov/pubs/sp/800/153/final"
                  },
                  {
                    name: "Microsoft Learn — WPA3-SAE and 802.1X Deployment",
                    desc: "Technical reference for WPA3-Personal SAE authentication and enterprise 802.1X wireless access deployment.",
                    url: "https://learn.microsoft.com/en-us/windows-hardware/drivers/network/wpa3-sae-authentication"
                  },
                  {
                    name: "MITRE ATT&CK — Technique T1557.004 (Evil Twin)",
                    desc: "Detailed adversary procedure for cloning legitimate Wi-Fi networks and defensive detection strategies.",
                    url: "https://attack.mitre.org/techniques/T1557/004/"
                  },
                  {
                    name: "CERT-In — Securing Wireless Access Points and Routers",
                    desc: "Practical guidelines for hardening router credentials, management interfaces, firmware, and logging.",
                    url: "https://www.cert-in.org.in/"
                  },
                  {
                    name: "NSA — Best Practices for Securing Your Home Network",
                    desc: "Guidance on segmenting Wi-Fi into primary, guest, and IoT networks to isolate compromised hardware.",
                    url: "https://media.defense.gov/2023/Feb/22/2003165170/-1/-1/0/CSI_BEST_PRACTICS_FOR_SECURING_YOUR_HOME_NETWORK.PDF"
                  },
                  {
                    name: "Android Open Source Project — WPA3 and Enhanced Open",
                    desc: "Technical documentation explaining client implementation of WPA3-Personal, WPA3-Enterprise, and OWE.",
                    url: "https://source.android.com/docs/core/connect/wifi-wpa3-owe"
                  }
                ].map((ref, idx) => (
                  <a
                    key={idx}
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-stone-50 border border-stone-200 hover:border-orange-300 hover:bg-orange-50/40 transition group flex flex-col justify-between"
                  >
                    <div>
                      <strong className="text-stone-900 group-hover:text-orange-950 block mb-1">
                        {ref.name}
                      </strong>
                      <p className="text-stone-600 text-[11px] leading-relaxed">
                        {ref.desc}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-orange-600 font-mono text-[11px] font-bold mt-2">
                      <span>View Specification</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* FOOTER NAVIGATION (PREVIOUS & NEXT MODULE)                                */}
        {/* ========================================================================= */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[#e7e3da] pt-6">
          <button
            onClick={() => navigate("/learning/cybersecurity/secure-code-review")}
            className="flex items-center gap-2 rounded-2xl border border-stone-200 bg-white px-5 py-3 text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#f97316] transition shadow-xs cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous: Module 16 (Secure Code Review & Testing)</span>
          </button>

          <button
            onClick={() => navigate("/learning/cybersecurity/cloud-security")}
            className="flex items-center gap-2 rounded-2xl bg-[#ea580c] px-5 py-3 text-xs font-bold text-white hover:bg-orange-600 transition shadow-xs cursor-pointer"
          >
            <span>Next: Module 18 (Cloud Security, Containers & IAM)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
