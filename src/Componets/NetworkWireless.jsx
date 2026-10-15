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
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* COMPUTER NETWORKS & INTERNET ENGINEERING: MODULE 13                        */
/* WIRELESS, WI-FI, MOBILE CONNECTIVITY & DEFENSIVE SECURITY                  */
/* -------------------------------------------------------------------------- */

export default function NetworkWireless() {
  const navigate = useNavigate();

  // Active top-level tabs
  const [activeTab, setActiveTab] = useState("theory"); // theory | spectrum-sim | auth-handshake-sim | rf-range-sim | vlan-acl-sim | rogue-wips-sim | cli | quiz | lab-report
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // Theory sub-section tracking
  const [activeSection, setActiveSection] = useSyncedTopic("13.1");

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 1: RF SPECTRUM & CHANNEL PLANNER                                 */
  /* -------------------------------------------------------------------------- */
  const [spectrumBand, setSpectrumBand] = useState("2.4"); // 2.4 | 5 | 6
  const [channelWidth, setChannelWidth] = useState(20); // 20 | 40 | 80 | 160
  const [activeChannels24, setActiveChannels24] = useState([1, 6, 11]);
  const [hasInterferer24, setHasInterferer24] = useState(false);
  const [interfererChannel, setInterfererChannel] = useState(3);
  const [isDfsRadarSimulated, setIsDfsRadarSimulated] = useState(false);

  const spectrumAnalysis = useMemo(() => {
    if (spectrumBand === "2.4") {
      const isBadSpacing = hasInterferer24 && (interfererChannel === 3 || interfererChannel === 4 || interfererChannel === 8 || interfererChannel === 9);
      const overlapWithCh1 = hasInterferer24 && Math.abs(interfererChannel - 1) < 5;
      const overlapWithCh6 = hasInterferer24 && Math.abs(interfererChannel - 6) < 5;
      return {
        bandName: "2.4 GHz Industrial, Scientific & Medical (ISM)",
        spectrumRange: "2.400 GHz - 2.4835 GHz (83.5 MHz total)",
        nonOverlappingChannels: [1, 6, 11],
        status: isBadSpacing ? "Severe Adjacent-Channel Interference (ACI)" : "Clean 3-Cell Frequency Reuse Plan",
        contentionLevel: hasInterferer24 ? "High (Frame Retries > 38%)" : "Optimal (Frame Retries < 4%)",
        snrImpact: isBadSpacing ? "-14 dB SNR penalty on overlapping BSS" : "0 dB penalty",
        description: isBadSpacing
          ? `WARNING: Channel ${interfererChannel} partially overlaps with ${overlapWithCh1 ? "Channel 1" : ""} ${overlapWithCh6 ? "and Channel 6" : ""}. Non-orthogonal energy causes un-demodulatable RF noise, CRC frame corruption, and exponential backoff!`
          : "Standard enterprise 20 MHz channel allocation using orthogonal center frequencies spaced 25 MHz apart (Channels 1, 6, 11).",
      };
    } else if (spectrumBand === "5") {
      return {
        bandName: "5 GHz UNII-1, UNII-2A/C (DFS) & UNII-3",
        spectrumRange: "5.150 GHz - 5.850 GHz (~500 MHz total)",
        nonOverlappingChannels: [36, 40, 44, 48, 52, 56, 60, 64, 100, 104, 108, 112, 116, 120, 124, 128, 132, 136, 140, 144, 149, 153, 157, 161, 165],
        status: isDfsRadarSimulated ? "DFS Radar Struck! Channel Vacated" : `Operating at ${channelWidth} MHz Channel Width`,
        contentionLevel: isDfsRadarSimulated ? "Critical (In-Service Monitoring Triggered)" : "Low (Ample Spectrum Reuse)",
        snrImpact: isDfsRadarSimulated ? "Channel Silence for 30 Minutes (CAC)" : "+28 dB clean SNR",
        description: isDfsRadarSimulated
          ? "Terminal Doppler Weather Radar (TDWR) pulse pattern detected on UNII-2C channel! AP instantly issues 802.11h Channel Switch Announcement (CSA) and silences transmission for 1,800 seconds."
          : `5 GHz offers up to 25 non-overlapping 20 MHz channels. At ${channelWidth} MHz width, ${channelWidth === 80 ? "up to 6 bonded channels" : channelWidth === 160 ? "only 2 bonded channels" : "up to 12 bonded channels"} are available before co-channel overlap occurs.`,
      };
    } else {
      return {
        bandName: "6 GHz Wi-Fi 6E / Wi-Fi 7 (UNII-5 through UNII-8)",
        spectrumRange: "5.925 GHz - 7.125 GHz (1,200 MHz contiguous)",
        nonOverlappingChannels: ["59x 20MHz", "29x 40MHz", "14x 80MHz", "7x 160MHz", "3x 320MHz"],
        status: "Pristine Spectrum (Zero Legacy 802.11b/a/g/n Devices)",
        contentionLevel: "Near Zero (No Backward-Compatibility Overhead)",
        snrImpact: "+34 dB pristine SNR with 4096-QAM",
        description: "14 additional 80 MHz channels or 7 ultra-wide 160 MHz channels without DFS radar restrictions in Low Power Indoor (LPI) mode. Wi-Fi 7 enables 320 MHz channels and Multi-Link Operation (MLO).",
      };
    }
  }, [spectrumBand, channelWidth, hasInterferer24, interfererChannel, isDfsRadarSimulated]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 2: AUTHENTICATION & HANDSHAKE LADDER                             */
  /* -------------------------------------------------------------------------- */
  const [authMode, setAuthMode] = useState("wpa3-sae"); // wpa2-psk | wpa3-sae | eap-tls
  const [handshakeStep, setHandshakeStep] = useState(0);
  const [simulateCrackingAttempt, setSimulateCrackingAttempt] = useState(false);

  const handshakeDetails = useMemo(() => {
    if (authMode === "wpa2-psk") {
      const steps = [
        {
          step: 1,
          name: "Message 1 (AP -> STA)",
          direction: "AP -> Client",
          payload: "ANonce (32 bytes random), Key Replay Counter = 1",
          crypto: "STA computes PTK = PRF-512(PMK, ANonce, SNonce, AP_MAC, STA_MAC)",
          vuln: "ANonce is transmitted in plaintext over the air.",
        },
        {
          step: 2,
          name: "Message 2 (STA -> AP)",
          direction: "Client -> AP",
          payload: "SNonce (32 bytes random), MIC (HMAC-SHA1 over frame), RSN IE",
          crypto: "MIC calculated using KCK (Key Confirmation Key derived from PTK)",
          vuln: "CRITICAL: Eavesdropper capturing Msg 1 & 2 possesses ANonce, SNonce, MACs & MIC. Can execute offline GPU dictionary attack against PMK = PBKDF2(passphrase) without touching the AP!",
        },
        {
          step: 3,
          name: "Message 3 (AP -> STA)",
          direction: "AP -> Client",
          payload: "ANonce, MIC, Encrypted GTK (Group Temporal Key for broadcast)",
          crypto: "GTK encrypted with KEK (Key Encryption Key). Installs pairwise keys.",
          vuln: "Subject to KRACK (Key Reinstallation Attack) if AP retransmits Msg 3.",
        },
        {
          step: 4,
          name: "Message 4 (STA -> AP)",
          direction: "Client -> AP",
          payload: "MIC Confirmation, Key Replay Counter = 2",
          crypto: "CCMP encryption (AES-128-CCM) activated for all subsequent data frames.",
          vuln: "Association complete. WPA2 provides NO Perfect Forward Secrecy.",
        },
      ];
      return {
        title: "WPA2-Personal: 4-Way Handshake (802.11i / CCMP)",
        summary: "Uses Pre-Shared Key (PSK). Pairwise Master Key (PMK) derived via PBKDF2(passphrase, SSID, 4096 iterations).",
        steps,
        crackResult: simulateCrackingAttempt
          ? {
              status: "EXPLOITED (Offline Hashcat Brute-Force Successful)",
              detail: "Attacker parsed ANonce, SNonce, and MIC from captured PCAP. With a 4090 GPU testing 1.8M PMK hashes/sec, 8-character dictionary password was recovered in 4 minutes!",
              color: "text-rose-400 bg-rose-950/40 border-rose-800",
            }
          : null,
      };
    } else if (authMode === "wpa3-sae") {
      const steps = [
        {
          step: 1,
          name: "SAE Commit Exchange (Bidirectional)",
          direction: "Client <-> AP",
          payload: "Commit Scalar + Commit Element (NIST P-256 Elliptic Curve point)",
          crypto: "Both compute Password Element (PWE) via hash-to-curve. Scalar = (rand_k + priv_mask) mod q.",
          vuln: "Zero password or password-hash exposed on air. Zero-knowledge proof.",
        },
        {
          step: 2,
          name: "SAE Confirm Exchange (Bidirectional)",
          direction: "Client <-> AP",
          payload: "Confirm Hash = HMAC-SHA256(K, send-confirm-counter, Commit frames)",
          crypto: "Derives intermediate secret K from ECDH shared secret ss = priv_mask * PeerElement.",
          vuln: "Verifies mutual possession of password without revealing verifiable material for offline cracking.",
        },
        {
          step: 3,
          name: "PMK Derivation & 4-Way Handshake",
          direction: "Client <-> AP",
          payload: "Fresh PMK derived from SAE session. Protected Management Frames (802.11w PMF) negotiated.",
          crypto: "Perfect Forward Secrecy (PFS): Compromising password later cannot decrypt past sessions.",
          vuln: "Protected against KRACK and offline dictionary attacks.",
        },
      ];
      return {
        title: "WPA3-Personal: Simultaneous Authentication of Equals (SAE / Dragonfly)",
        summary: "Replaces PSK with zero-knowledge Dragonfly handshake (RFC 7664). Immune to offline dictionary attacks.",
        steps,
        crackResult: simulateCrackingAttempt
          ? {
              status: "ATTACK BLOCKED (Zero Offline Verifiable Data)",
              detail: "Dragonfly protocol exchanges ephemeral curve points. Attacker cannot verify whether a password guess is correct without actively engaging the AP online in real-time, which is throttled/banned by anti-clogging tokens!",
              color: "text-emerald-400 bg-emerald-950/40 border-emerald-800",
            }
          : null,
      };
    } else {
      const steps = [
        {
          step: 1,
          name: "EAPOL-Start & Identity Request",
          direction: "Client <-> AP (Authenticator)",
          payload: "EAPOL-Start -> EAP-Request/Identity -> EAP-Response/Identity (user@prepspaces.com)",
          crypto: "AP encapsulates EAP into RADIUS Access-Request (UDP 1812) sent to RADIUS server.",
          vuln: "Inner identity hidden if using anonymous outer identity (anonymous@prepspaces.com).",
        },
        {
          step: 2,
          name: "Mutual TLS Tunnel (EAP-TLS)",
          direction: "Client <-> RADIUS Server",
          payload: "Server Hello + Server X.509 Cert <-> Client X.509 Cert + ClientKeyExchange",
          crypto: "Client strictly validates RADIUS server root CA. RADIUS validates client certificate revocation (CRL/OCSP).",
          vuln: "CRITICAL: If client skips server certificate validation, an Evil Twin RADIUS server harvests credentials!",
        },
        {
          step: 3,
          name: "RADIUS Access-Accept & Dynamic VLAN",
          direction: "RADIUS -> AP",
          payload: "Access-Accept with MSK (Master Session Key) + Tunnel-Private-Group-ID = 10 (VLAN 10)",
          crypto: "MSK delivered securely over RADIUS IPsec/TLS tunnel. AP extracts PMK = MSK[0..31].",
          vuln: "Client dynamically placed into isolated Staff VLAN without broadcast passphrase.",
        },
        {
          step: 4,
          name: "4-Way Handshake with Dynamic PMK",
          direction: "Client <-> AP",
          payload: "Standard 4-way handshake deriving PTK from unique per-user PMK",
          crypto: "Unique temporal keys for every session. Immediate revocation supported at RADIUS directory.",
          vuln: "Eliminates shared credentials across corporate fleet.",
        },
      ];
      return {
        title: "Enterprise 802.1X: EAP-TLS with RADIUS & Dynamic VLAN",
        summary: "Mutual certificate authentication backed by RADIUS server. Centralized revocation and per-device credentials.",
        steps,
        crackResult: simulateCrackingAttempt
          ? {
              status: "MUTUAL PKI VALIDATION: ATTACK PREVENTED",
              detail: "Client device verified the RADIUS server certificate against installed Enterprise Root CA. Rogue AP presenting untrusted certificate was rejected before any cryptographic material was released.",
              color: "text-emerald-400 bg-emerald-950/40 border-emerald-800",
            }
          : null,
      };
    }
  }, [authMode, simulateCrackingAttempt]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 3: RSSI, PATH LOSS, SNR & ROAMING RANGE CALCULATOR              */
  /* -------------------------------------------------------------------------- */
  const [rfFrequency, setRfFrequency] = useState(5.0); // 2.4, 5.0, 6.0 GHz
  const [txPowerDbm, setTxPowerDbm] = useState(17); // 10 to 25 dBm
  const [distanceMeters, setDistanceMeters] = useState(12); // 1 to 45 meters
  const [obstacleType, setObstacleType] = useState("drywall"); // none, drywall, brick, concrete
  const [obstacleCount, setObstacleCount] = useState(2);

  const rfMetrics = useMemo(() => {
    // Free Space Path Loss (FSPL) in dB: FSPL = 20*log10(d) + 20*log10(f_MHz) - 27.55
    const fMhz = rfFrequency * 1000;
    const fspl = 20 * Math.log10(Math.max(1, distanceMeters)) + 20 * Math.log10(fMhz) - 27.55;

    const wallLossMap = {
      none: 0,
      drywall: 3.2,
      brick: 6.5,
      concrete: 14.0,
      tintedGlass: 8.0,
    };
    const wallLoss = (wallLossMap[obstacleType] || 0) * obstacleCount;
    const antennaGain = 4.0; // 4 dBi combined Tx+Rx gain
    const totalLoss = fspl + wallLoss;
    const rssi = Math.round(txPowerDbm + antennaGain - totalLoss);
    const noiseFloor = -95; // dBm thermal noise floor + receiver noise figure
    const snr = Math.max(0, rssi - noiseFloor);

    // Modulation & Coding Scheme (MCS) based on SNR (802.11ax / 802.11ac)
    let mcsIndex = 0;
    let modulation = "BPSK 1/2";
    let phyRateMbps = 15;
    let linkQuality = "Poor / Marginal";
    let qualityColor = "text-rose-400";

    if (snr >= 35) {
      mcsIndex = 11;
      modulation = "1024-QAM 5/6";
      phyRateMbps = 1201;
      linkQuality = "Excellent (Maximum MCS)";
      qualityColor = "text-emerald-400";
    } else if (snr >= 30) {
      mcsIndex = 9;
      modulation = "256-QAM 5/6";
      phyRateMbps = 867;
      linkQuality = "Very Good";
      qualityColor = "text-emerald-400";
    } else if (snr >= 25) {
      mcsIndex = 7;
      modulation = "64-QAM 5/6";
      phyRateMbps = 585;
      linkQuality = "Good (Standard Enterprise)";
      qualityColor = "text-blue-400";
    } else if (snr >= 18) {
      mcsIndex = 4;
      modulation = "16-QAM 3/4";
      phyRateMbps = 260;
      linkQuality = "Fair";
      qualityColor = "text-amber-400";
    } else if (snr >= 10) {
      mcsIndex = 1;
      modulation = "QPSK 1/2";
      phyRateMbps = 65;
      linkQuality = "Degraded (Retries Likely)";
      qualityColor = "text-orange-400";
    }

    // 802.11k/v/r roaming trigger threshold (typically -70 to -72 dBm for enterprise clients)
    const roamingTrigger = rssi <= -72;
    const stickyClientRisk = rssi < -78;

    return {
      fspl: fspl.toFixed(1),
      wallLoss: wallLoss.toFixed(1),
      rssi,
      snr,
      mcsIndex,
      modulation,
      phyRateMbps,
      linkQuality,
      qualityColor,
      roamingTrigger,
      stickyClientRisk,
    };
  }, [rfFrequency, txPowerDbm, distanceMeters, obstacleType, obstacleCount]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 4: ENTERPRISE WLAN SEGMENTATION & ACL FIREWALL SANDBOX           */
  /* -------------------------------------------------------------------------- */
  const [trafficSource, setTrafficSource] = useState("guest-client");
  const [trafficDest, setTrafficDest] = useState("internet");

  const aclVerdict = useMemo(() => {
    // Sources: guest-client (10.10.20.45), staff-laptop (10.10.10.12), iot-thermostat (10.10.30.8), admin-terminal (10.10.40.5), guest-peer (10.10.20.99)
    // Destinations: internet (142.250.190.46:443), staff-erp (10.10.10.50:8443), ap-management (10.10.40.1:22), iot-mqtt (52.214.10.2:8883), guest-peer (10.10.20.99:445)
    if (trafficSource === "guest-client") {
      if (trafficDest === "internet") {
        return {
          allowed: true,
          action: "PERMIT",
          reason: "Guest network policy allows outbound HTTPS (443) and DNS (53) to the public internet.",
          vlan: "VLAN 20 (Guest Subnet 10.10.20.0/24)",
          firewallRule: "Rule 101: PERMIT src 10.10.20.0/24 dst !RFC1918 port 443,80,53",
        };
      }
      if (trafficDest === "staff-erp") {
        return {
          allowed: false,
          action: "BLOCKED (Drop & Log)",
          reason: "Guest network is prohibited from reaching internal RFC 1918 corporate networks (VLAN 10 Staff ERP).",
          vlan: "VLAN 20 -> VLAN 10",
          firewallRule: "Rule 100: DENY src 10.10.20.0/24 dst 10.10.0.0/16 (Default RFC1918 Drop)",
        };
      }
      if (trafficDest === "ap-management") {
        return {
          allowed: false,
          action: "BLOCKED & ALARMED",
          reason: "Guest attempting to reach AP / Switch SSH management interface (VLAN 40). Triggered security alert!",
          vlan: "VLAN 20 -> VLAN 40",
          firewallRule: "Rule 10: DENY src !10.10.40.0/24 dst 10.10.40.1 port 22",
        };
      }
      if (trafficDest === "guest-peer") {
        return {
          allowed: false,
          action: "BLOCKED (Client Isolation / PVLAN)",
          reason: "Access Point Layer 2 Station-to-Station Client Isolation prevents guest devices from scanning or infecting each other.",
          vlan: "VLAN 20 Internal",
          firewallRule: "AP Radio Hardware Policy: P2P Client Isolation Enabled (Drops all peer unicast/broadcast ARP/SMB)",
        };
      }
      return {
        allowed: true,
        action: "PERMIT",
        vlan: "VLAN 20",
        reason: "Public outbound telemetry allowed.",
        firewallRule: "Standard Guest Egress Rule",
      };
    } else if (trafficSource === "staff-laptop") {
      if (trafficDest === "ap-management") {
        return {
          allowed: false,
          action: "BLOCKED",
          reason: "Staff devices cannot directly access infrastructure management. Requires dedicated Admin VLAN 40 or jump box.",
          vlan: "VLAN 10 -> VLAN 40",
          firewallRule: "Rule 15: DENY src 10.10.10.0/24 dst 10.10.40.0/24 port 22,443",
        };
      }
      return {
        allowed: true,
        action: "PERMIT",
        reason: "Staff device authenticated via 802.1X EAP-TLS has access to enterprise applications and internet.",
        vlan: "VLAN 10 (Staff Subnet 10.10.10.0/24)",
        firewallRule: "Rule 200: PERMIT src 10.10.10.0/24 dst Internal-Servers & Internet",
      };
    } else if (trafficSource === "iot-thermostat") {
      if (trafficDest === "iot-mqtt") {
        return {
          allowed: true,
          action: "PERMIT (Whitelisted Egress)",
          reason: "IoT device permitted to reach designated AWS IoT MQTT broker on port 8883 for telemetry.",
          vlan: "VLAN 30 (IoT Micro-segment 10.10.30.0/24)",
          firewallRule: "Rule 305: PERMIT src 10.10.30.8 dst 52.214.10.2 port 8883",
        };
      }
      return {
        allowed: false,
        action: "BLOCKED (Micro-segmentation Policy)",
        reason: "IoT devices are micro-segmented and restricted from accessing internal staff services, admin interfaces, or arbitrary internet web servers.",
        vlan: "VLAN 30 Egress Block",
        firewallRule: "Rule 399: DENY src 10.10.30.0/24 dst ALL (Default Deny)",
      };
    } else {
      // admin-terminal
      return {
        allowed: true,
        action: "PERMIT (Authorized Admin Access)",
        reason: "Admin jump box on VLAN 40 permitted to reach AP SSH management, internal servers, and logging nodes.",
        vlan: "VLAN 40 (Management Subnet 10.10.40.0/24)",
        firewallRule: "Rule 1: PERMIT src 10.10.40.5 dst ALL (Admin Role Enforced)",
      };
    }
  }, [trafficSource, trafficDest]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 5: ROGUE AP & EVIL TWIN WIPS DETECTION SANDBOX                   */
  /* -------------------------------------------------------------------------- */
  const [wipsScenario, setWipsScenario] = useState("clean"); // clean | rogue-open | evil-twin | deauth-flood
  const [wipsMitigationEnabled, setWipsMitigationEnabled] = useState(false);

  const wipsEvaluation = useMemo(() => {
    if (wipsScenario === "clean") {
      return {
        alertLevel: "NORMAL (Airspace Secure)",
        alertColor: "text-emerald-400 bg-emerald-950/40 border-emerald-800",
        threatScore: 0,
        observedSignals: [
          { ssid: "Company-Staff", bssid: "00:1A:1E:11:22:33", vendor: "Cisco Catalyst AP", rssi: -58, security: "WPA3-Enterprise (802.1X)", status: "Authorized AP" },
          { ssid: "Company-Guest", bssid: "00:1A:1E:11:22:34", vendor: "Cisco Catalyst AP", rssi: -59, security: "WPA3-Personal (SAE) + Isolation", status: "Authorized AP" },
        ],
        detectionRule: "All broadcasting BSSIDs match approved enterprise hardware MAC whitelist.",
        remediation: "None required. Continuous RF scanning active.",
      };
    } else if (wipsScenario === "rogue-open") {
      return {
        alertLevel: "HIGH ALERT: Rogue AP on Wired Switch Port",
        alertColor: "text-amber-400 bg-amber-950/40 border-amber-800",
        threatScore: 85,
        observedSignals: [
          { ssid: "Company-Staff", bssid: "00:1A:1E:11:22:33", vendor: "Cisco Catalyst AP", rssi: -58, security: "WPA3-Enterprise", status: "Authorized AP" },
          { ssid: "TP-Link_Guest_Free", bssid: "E8:48:B8:99:11:22", vendor: "TP-Link Consumer", rssi: -42, security: "Open / No Encryption", status: "ROGUE ACCESS POINT" },
        ],
        detectionRule: "WIPS correlated BSSID MAC with switch CAM table! Rogue AP discovered connected to Switch-02, Port Gi1/0/18 (Staff VLAN 10).",
        remediation: wipsMitigationEnabled
          ? "ACTION EXECUTED: SNMP command sent to Switch-02; port Gi1/0/18 administratively shutdown. Rogue AP completely isolated from LAN."
          : "RECOMMENDED ACTION: Enable Automated WIPS Containment or dispatch security personnel to unplug unauthorized AP on port Gi1/0/18.",
      };
    } else if (wipsScenario === "evil-twin") {
      return {
        alertLevel: "CRITICAL THREAT: Evil Twin Spoofing Enterprise SSID",
        alertColor: "text-rose-400 bg-rose-950/40 border-rose-800",
        threatScore: 98,
        observedSignals: [
          { ssid: "Company-Staff", bssid: "00:1A:1E:11:22:33", vendor: "Cisco Catalyst AP", rssi: -62, security: "WPA3-Enterprise (802.1X)", status: "Legitimate AP" },
          { ssid: "Company-Staff", bssid: "B4:86:55:77:44:11", vendor: "Unknown / Alfa Wireless", rssi: -38, security: "WPA2-Personal (Downgraded!)", status: "MALICIOUS EVIL TWIN" },
        ],
        detectionRule: "SSID 'Company-Staff' advertised with unknown BSSID OUI, +24 dB higher transmit power, and downgraded encryption profile (WPA2-PSK instead of WPA3-Ent).",
        remediation: wipsMitigationEnabled
          ? "ACTIVE MITIGATION: WIPS radio transmitting targeted 802.11 Deauth frames targeting rogue BSSID while AP broadcasts 802.11v BSS Transition steering clients away."
          : "CRITICAL ACTION NEEDED: Clients risk connecting to fake AP and entering credentials into rogue captive portal. Enable containment immediately.",
      };
    } else {
      // deauth-flood
      return {
        alertLevel: "CRITICAL: Deauthentication DoS Flood Detected",
        alertColor: "text-rose-400 bg-rose-950/40 border-rose-800",
        threatScore: 92,
        observedSignals: [
          { ssid: "Company-Staff", bssid: "00:1A:1E:11:22:33", vendor: "Target AP", rssi: -58, security: "WPA2 Legacy (No PMF)", status: "Targeted by Attack" },
          { ssid: "Frame Flood", bssid: "Spoofed AP MAC", vendor: "Aircrack-ng / mdk4", rssi: -45, security: "Subtype 12 (Deauth)", status: "ATTACK TRAFFIC (>450 frames/sec)" },
        ],
        detectionRule: "Anomaly detector recorded >450 Deauth frames/sec without preceding 4-way handshake failures. Target clients lack 802.11w Protected Management Frames (PMF).",
        remediation: wipsMitigationEnabled
          ? "HARDENING APPLIED: AP enforced mandatory 802.11w (PMF Required). Spoofed plaintext deauthentication frames discarded by client Wi-Fi firmware."
          : "DEFENSE: Upgrade SSID security profile to WPA3 or enable 'PMF: Required' (802.11w) to render spoofed management frames cryptographically invalid.",
      };
    }
  }, [wipsScenario, wipsMitigationEnabled]);

  /* -------------------------------------------------------------------------- */
  /* AUDIT CHECKLIST STATE (0/9)                                                */
  /* -------------------------------------------------------------------------- */
  const [checklist, setChecklist] = useState({
    secMode: false,
    authPolicy: false,
    pmf: false,
    vlanMap: false,
    guestIso: false,
    iotRestrict: false,
    adminAccess: false,
    apInventory: false,
    firmwareLog: false,
  });

  const completedChecklistCount = Object.values(checklist).filter(Boolean).length;

  const toggleChecklist = (key) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  /* -------------------------------------------------------------------------- */
  /* 10-QUESTION COMPREHENSIVE ASSESSMENT                                       */
  /* -------------------------------------------------------------------------- */
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const quizQuestions = [
    {
      id: "q1",
      question: "What is the primary role of a Wi-Fi Access Point (AP) in enterprise infrastructure mode?",
      options: [
        "It acts as the primary WAN router, NAT gateway, and DNS authority.",
        "It provides radio connectivity and functions as a Layer 2 bridge mapping wireless frames to wired 802.1Q VLANs.",
        "It assigns public IPv4 addresses directly to every client phone.",
        "It terminates TLS connections and decrypts application-layer data for inspection.",
      ],
      correct: 1,
      rationale:
        "In enterprise networks, the AP is NOT the router. It is a Layer 2 wireless-to-Ethernet bridge that encapsulates 802.11 wireless frames into 802.3 Ethernet frames, tags them with 802.1Q VLAN IDs, and hands them off to upstream distribution switches and firewalls.",
    },
    {
      id: "q2",
      question: "Why are Channels 1, 6, and 11 standard in North American 2.4 GHz channel planning?",
      options: [
        "They have the highest transmit power allowed by the FCC.",
        "They are the only channels supported by consumer smartphone Wi-Fi chips.",
        "They are the only three 20 MHz channels separated by 25 MHz that do not overlap spectrally.",
        "They automatically negotiate Dynamic Frequency Selection (DFS) radar avoidance.",
      ],
      correct: 2,
      rationale:
        "The 2.4 GHz band has 20 MHz wide channels spaced only 5 MHz apart. Channels 1 (2412 MHz), 6 (2437 MHz), and 11 (2462 MHz) provide 25 MHz spacing, preventing Adjacent-Channel Interference (ACI) where sideband energy causes frame corruption.",
    },
    {
      id: "q3",
      question: "What fundamental security improvement does WPA3-Personal introduce over WPA2-Personal?",
      options: [
        "It replaces passwords with biometric fingerprint scanning over the air.",
        "It uses Simultaneous Authentication of Equals (SAE / Dragonfly) to prevent offline dictionary attacks against captured handshakes.",
        "It provides hardware-level immunity against RF radio jamming.",
        "It eliminates the need for access point encryption keys.",
      ],
      correct: 1,
      rationale:
        "WPA2-Personal uses a 4-way handshake vulnerable to offline dictionary cracking if an attacker captures Messages 1 and 2. WPA3-Personal uses SAE (Dragonfly zero-knowledge proof), ensuring that no verifiable password hash is transmitted over the air, forcing attackers to interact online where they can be throttled.",
    },
    {
      id: "q4",
      question: "What is the primary vulnerability in PEAP-MSCHAPv2 enterprise deployments when client configuration is unmanaged?",
      options: [
        "The RADIUS server crashes if more than 50 clients associate simultaneously.",
        "If the client fails to validate the RADIUS server certificate and Root CA, an Evil Twin AP can harvest MS-CHAPv2 challenge-response hashes.",
        "MS-CHAPv2 requires unencrypted 2.4 GHz channels.",
        "EAP-PEAP disables WPA3 encryption.",
      ],
      correct: 1,
      rationale:
        "In PEAP, the server presents a TLS certificate to build an outer tunnel. If a client device is not configured to validate the trusted Root CA and server hostname, an attacker with a rogue AP (e.g., hostapd-wpe) can present a self-signed certificate, trick the client into establishing the tunnel, and capture the inner MS-CHAPv2 hash for offline cracking.",
    },
    {
      id: "q5",
      question: "What role does IEEE 802.11w Protected Management Frames (PMF) perform?",
      options: [
        "It accelerates Wi-Fi speed from 54 Mbps to 1 Gbps.",
        "It encrypts and cryptographically signs unicast and broadcast management frames (like Deauth and Disassociation) using BIP (AES-CMAC).",
        "It replaces DHCP servers with peer-to-peer address negotiation.",
        "It connects Bluetooth headsets directly to cellular towers.",
      ],
      correct: 1,
      rationale:
        "In legacy Wi-Fi, management frames are unencrypted and unauthenticated, allowing any attacker to forge spoofed deauthentication frames to disconnect clients. 802.11w (PMF) cryptographically signs these frames, preventing spoofed deauth DoS attacks. PMF is mandatory in WPA3.",
    },
    {
      id: "q6",
      question: "What is the function of the 5G Core User Plane Function (UPF)?",
      options: [
        "Authenticating SIM card cryptographic keys with the mobile operator.",
        "Managing gNodeB radio channel assignments across millimeter wave cells.",
        "Forwarding, routing, and enforcing QoS on user data packets between the RAN and external Data Networks (DN).",
        "Generating Bluetooth advertising beacons for indoor location.",
      ],
      correct: 2,
      rationale:
        "In 5G Service-Based Architecture, the control plane (AMF, SMF, UDM) handles signaling, identity, and session control, while the User Plane Function (UPF) is the high-performance packet processing engine that anchors user traffic and forwards IP packets between the gNodeB radio access network and external data networks.",
    },
    {
      id: "q7",
      question: "Why is Layer 2 Client Isolation critical on enterprise Guest Wi-Fi networks?",
      options: [
        "It doubles the maximum range of the 5 GHz radio.",
        "It blocks direct station-to-station traffic, preventing malicious guests from port scanning, ARP poisoning, or laterally attacking other guests.",
        "It compresses video streaming packets to reduce WAN bandwidth.",
        "It prevents guests from seeing the SSID in their phone settings.",
      ],
      correct: 1,
      rationale:
        "Without client isolation, any guest device on the open or pre-shared guest WLAN can sniff broadcasts, launch ARP spoofing MITM attacks, or attack vulnerable ports (e.g., SMB/RDP) on neighboring visitor laptops. Client isolation ensures guests can only communicate with the gateway.",
    },
    {
      id: "q8",
      question: "How do 802.11k, 802.11v, and 802.11r collectively solve 'Sticky Client' syndrome and VoIP drops?",
      options: [
        "They force clients to switch to 2.4 GHz only.",
        "802.11k provides neighbor AP lists; 802.11v suggests optimal BSS targets; 802.11r (Fast Transition) pre-authenticates keys, reducing roam latency to <50ms.",
        "They eliminate the need for access points to be connected to switches.",
        "They allow clients to transmit at 100 Watts to reach distant base stations.",
      ],
      correct: 1,
      rationale:
        "Sticky clients cling to a degraded distant AP (-80 dBm) rather than roaming to a closer AP (-55 dBm). 802.11k gives the client a curated list of neighbor channels to scan; 802.11v allows the AP to suggest roaming; 802.11r caches pairwise keys so the client avoids a full 4-way/802.1X handshake during roam, preserving real-time voice calls.",
    },
    {
      id: "q9",
      question: "What differentiates Bluetooth Low Energy (BLE) architecture from Bluetooth Classic?",
      options: [
        "BLE operates on 5 GHz, while Classic operates on 2.4 GHz.",
        "BLE uses GATT profiles with Services and Characteristics optimized for low-duty-cycle sensor data with coin-cell battery life.",
        "BLE does not support any encryption or authentication.",
        "BLE transmits continuous uncompressed audio streams at 10 Mbps.",
      ],
      correct: 1,
      rationale:
        "Bluetooth Classic is designed for continuous data/audio streaming (A2DP, handsfree). BLE is architected for intermittent, low-power duty cycles using Generic Attribute Profile (GATT) hierarchical services and characteristics, allowing sensors to run for years on a single coin-cell battery.",
    },
    {
      id: "q10",
      question: "What initial diagnostic step should an SRE take when an unknown SSID is detected near an office building?",
      options: [
        "Immediately launch a deauth DoS attack to take down the unknown device.",
        "Trigger an enterprise-wide network shutdown and alert the press.",
        "Correlate the observed BSSID, channel, and RSSI with internal switch MAC tables to determine if it is connected to the wired LAN before classifying it.",
        "Connect an admin laptop to the unknown SSID to inspect its router admin page.",
      ],
      correct: 2,
      rationale:
        "An unknown SSID could simply be a neighboring business or personal smartphone hotspot. Before taking aggressive action, network engineers correlate the BSSID with internal switch CAM tables (to verify if an unauthorized AP is physically connected to the corporate LAN) and inspect authorized inventories.",
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
  /* COPYABLE SRE DEFENSIVE WIRELESS AUDIT REPORT TEMPLATE                      */
  /* -------------------------------------------------------------------------- */
  const wirelessAuditReportTemplate = `# ENTERPRISE WIRELESS SECURITY AUDIT & REMEDIATION REPORT
**Document Reference:** SEC-WLAN-AUDIT-2026-Q4  
**Date:** ${new Date().toISOString().split("T")[0]}  
**Target Infrastructure:** Global HQ Enterprise Campus WLAN (Bldg A/B/C)  
**Lead Auditor / SRE:** Network Infrastructure & Defensive Security Team  
**Classification:** CONFIDENTIAL / DEFENSIVE ASSESSMENT  

---

## 1. EXECUTIVE SUMMARY
An authorized technical audit of the enterprise wireless infrastructure was conducted across 48 physical access points (Cisco Catalyst 9130 / Aruba AP-555) and 4 logical WLAN segments.

- **Overall Security Posture:** MODERATE RISK (Remediations Required)
- **High-Risk Vulnerabilities Identified:**
  1. *Legacy WPA2-PSK Fallback:* Discovered one legacy SSID broadcasting WPA2-Personal with a shared passphrase without 802.11w PMF protection.
  2. *Unvalidated RADIUS Server Certificate:* 14% of BYOD macOS/Android endpoints accepted untrusted RADIUS server certs without Root CA pinning.
  3. *Guest Subnet Routing Leak:* Incomplete firewall ACL on Guest VLAN 20 permitted ICMP ping discovery of internal VLAN 10 management gateways.

---

## 2. AIRSPACE & RF SPECTRUM ANALYSIS
| Band | Channel Plan | Avg Channel Utilization | Co-Channel Contention (CCC) | Adjacent Channel Interference (ACI) |
| :--- | :--- | :--- | :--- | :--- |
| **2.4 GHz** | Ch 1, 6, 11 (20 MHz) | 48% (High RF Density) | Moderate (3 APs/channel overlap) | None (0 rogue adjacent channels) |
| **5.0 GHz** | UNII-1/2/3 (40/80 MHz) | 18% (Optimal) | Low (< 2 APs/channel) | None |
| **6.0 GHz** | UNII-5 through 8 (80/160 MHz) | 4% (Ultra-Clean) | Zero Contention | Zero Contention |

*Notes:* DFS radar pulse events logged on Channel 104 (3 instances over 30 days). Automated Channel Switch Announcement (CSA) properly migrated active clients to Channel 36 without call drops.

---

## 3. LOGICAL WLAN SEGMENTATION & POLICY MATRIX
| SSID Name | VLAN ID | Subnet | Security Baseline | Client Isolation | Firewall Policy |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Prepspaces-Staff** | VLAN 10 | 10.10.10.0/24 | WPA3-Enterprise (EAP-TLS) | Disabled (Local Printing Allowed) | Internal Servers + Web |
| **Prepspaces-Guest** | VLAN 20 | 10.10.20.0/24 | WPA3-Personal + OWE | **ENABLED (Strict PVLAN)** | Internet Only (Drop RFC 1918) |
| **Prepspaces-IoT** | VLAN 30 | 10.10.30.0/24 | WPA3-MPSK / Private PSK | **ENABLED** | Whitelist Only (MQTT / NTP) |
| **Prepspaces-Admin** | VLAN 40 | 10.10.40.0/24 | 802.1X Mutual TLS + IPsec | **ENABLED** | AP Management / SSH Jump Box |

---

## 4. DEFENSIVE AUDIT FINDINGS & EVIDENCE LOG

### Finding 1: Lack of 802.11w (PMF) on Legacy IoT SSID
- **Severity:** High (CVSS 7.1)
- **Observed State:** SSID \`Prepspaces-LegacyIoT\` advertised with \`AKM: PSK\`, \`MFPC=0\`, \`MFPR=0\`.
- **Exploitation Risk:** Attacker with Alfa wireless card transmitting spoofed 802.11 Deauth frames (\`type 0, subtype 12\`) forced 100% disconnection of warehouse barcode scanners in 8 seconds.
- **Remediation:** Migrated compatible devices to WPA3-Personal (SAE) with mandatory PMF. Enforced \`MFPC=1, MFPR=1\` on controller profile.

### Finding 2: Unpinned RADIUS Certificates on Android Supplicants
- **Severity:** High (CVSS 7.5)
- **Observed State:** Android 11+ BYOD devices enrolled with *'Do not validate certificate'* in network profile settings.
- **Exploitation Risk:** Attacker deploying \`hostapd-wpe\` broadcasting evil-twin enterprise SSID captured MS-CHAPv2 hashes for offline dictionary attack.
- **Remediation:** Distributed managed MDM payload enforcing **EAP-TLS** with certificate pinning to \`CN=radius.prepspaces.com\` and Enterprise Root CA.

---

## 5. SIGN-OFF & RETEST VERIFICATION
- [x] Rogue AP switch port isolation validated via SNMP trap.
- [x] Client isolation verified: ping between 10.10.20.45 and 10.10.20.78 returns 100% packet loss.
- [x] 802.11r Fast Transition handoff measured at 34ms across AP-01 and AP-02.
- **Approved by:** SRE Lead Infrastructure Engineer`;

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 font-sans pb-16">
      {/* Top Breadcrumb & Navigation Bar */}
      <div className="border-b border-[#e7e3da] bg-[#fbfaf7]/80 backdrop-blur sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/learning/networks/application-layer")}
              className="p-1.5 rounded-lg border border-[#e7e3da] bg-white hover:bg-stone-50 text-stone-600 hover:text-stone-900 transition cursor-pointer"
              title="Return to Module 12: Application Protocols"
            >
              <ArrowLeft size={16} />
            </button>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-orange-600 font-mono">
                Computer Networks &bull; Module 13
              </div>
              <h1 className="text-sm font-bold text-stone-900 leading-tight">
                Wireless, Wi-Fi &amp; Mobile Networking
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-stone-600 bg-stone-100 px-2.5 py-1 rounded-md border border-stone-200">
              <Radio size={13} className="text-orange-600" />
              <span>RF &bull; 802.11ax/be &bull; WPA3 &bull; 5G Core</span>
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
                <Wifi size={13} />
                <span>IEEE 802.11 &bull; WPA3-SAE &bull; 802.1X &bull; BLE &bull; 5G Core &bull; WIPS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
                Wireless, Wi-Fi &amp; Mobile Networking
              </h2>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                Master the physics of electromagnetic radio propagation, IEEE 802.11 Wi-Fi generations (Wi-Fi 4 through Wi-Fi 7), channel spectrum planning (2.4, 5, and 6 GHz), WPA3-SAE Dragonfly handshakes, enterprise 802.1X EAP-TLS with RADIUS, Bluetooth Low Energy GATT architectures, cellular 5G core systems, and defensive wireless intrusion monitoring.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 self-start md:self-center shrink-0">
              <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200 text-center">
                <div className="text-xs font-mono text-stone-500">Channels</div>
                <div className="text-lg font-black text-stone-900 font-mono">1/6/11 &bull; 6GHz</div>
              </div>
              <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200 text-center">
                <div className="text-xs font-mono text-stone-500">Auth Engine</div>
                <div className="text-lg font-black text-stone-900 font-mono">WPA3 / EAP</div>
              </div>
              <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200 text-center col-span-2 sm:col-span-1">
                <div className="text-xs font-mono text-stone-500">Mobile Core</div>
                <div className="text-lg font-black text-stone-900 font-mono">5G UPF</div>
              </div>
            </div>
          </div>

          {/* Module Navigation Carousel / Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 no-scrollbar">
            {[
              { id: "theory", label: "Curriculum Theory", icon: BookOpen },
              { id: "spectrum-sim", label: "RF Spectrum Planner", icon: Radio },
              { id: "auth-handshake-sim", label: "Auth & Handshake Visualizer", icon: KeyRound },
              { id: "rf-range-sim", label: "RSSI & Roaming Calculator", icon: Antenna },
              { id: "vlan-acl-sim", label: "WLAN Segmentation Sandbox", icon: Split },
              { id: "rogue-wips-sim", label: "Rogue AP & WIPS Detector", icon: ShieldAlert },
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
          <ModuleNav track="networks" currentModuleId="wireless" />
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
                  Module 13 Sections
                </div>
                <div className="space-y-1">
                  {[
                    { id: "13.1", title: "13.1 Wireless Fundamentals & RF" },
                    { id: "13.2", title: "13.2 802.11 Architecture & Wi-Fi Gens" },
                    { id: "13.3", title: "13.3 Spectrum Bands & Channel Planning" },
                    { id: "13.4", title: "13.4 Association & Client Roaming" },
                    { id: "13.5", title: "13.5 WPA2, WPA3 & SAE Cryptography" },
                    { id: "13.6", title: "13.6 Enterprise 802.1X & RADIUS" },
                    { id: "13.7", title: "13.7 Bluetooth Classic & BLE GATT" },
                    { id: "13.8", title: "13.8 Cellular Networks & 5G Core" },
                    { id: "13.9", title: "13.9 Wireless Attacks & WIPS Defense" },
                    { id: "13.10", title: "13.10 Enterprise WLAN Segmentation" },
                    { id: "13.11", title: "13.11 Diagnostic Commands & Wireshark" },
                    { id: "13.12", title: "13.12 Security Audit & Remediation" },
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
                    Designed for systems and security engineers designing enterprise campuses, IoT fabrics, and mobile core networks.
                  </div>
                </div>
              </div>
            </div>

            {/* Main Theory Content Body */}
            <div className="lg:col-span-3 space-y-6">
              {/* SECTION 13.1 */}
              {activeSection === "13.1" && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest">
                      Section 13.1
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      Wireless Networking Fundamentals &amp; Radio Propagation
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-stone-700">
                    A wired Ethernet network transmits electrical voltages across copper twisted pairs or modulated photons through optical fiber—bounded physical media where attenuation is predictable and crosstalk is isolated by shielding. In stark contrast, a wireless network transmits electromagnetic radio waves through an unbounded, shared radio frequency (RF) environment.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                      <div className="text-xs font-bold text-stone-900 font-mono flex items-center gap-2 mb-2">
                        <Signal size={14} className="text-orange-600" />
                        <span>Core Physical RF Metrics</span>
                      </div>
                      <ul className="text-xs text-stone-600 space-y-2 leading-relaxed">
                        <li>
                          <strong>Frequency (f):</strong> Oscillations per second in Hertz. Wavelength &lambda; = c / f. Higher frequencies (6 GHz) have shorter wavelengths, experiencing higher free-space path loss and lower penetration through solid obstacles than 2.4 GHz.
                        </li>
                        <li>
                          <strong>Bandwidth (B):</strong> Width of allocated spectral channel (20, 40, 80, 160, 320 MHz). According to the Shannon-Hartley theorem, channel capacity scales linearly with bandwidth: C = B &bull; log<sub>2</sub>(1 + SNR).
                        </li>
                        <li>
                          <strong>Received Signal Power (dBm):</strong> Logarithmic ratio of power relative to 1 milliwatt: P(dBm) = 10 &bull; log<sub>10</sub>(P_mW). -30 dBm is near-field maximum, -67 dBm is enterprise voice threshold, and -85 dBm is near disconnection.
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                      <div className="text-xs font-bold text-stone-900 font-mono flex items-center gap-2 mb-2">
                        <Activity size={14} className="text-orange-600" />
                        <span>Signal Quality &amp; Interference</span>
                      </div>
                      <ul className="text-xs text-stone-600 space-y-2 leading-relaxed">
                        <li>
                          <strong>Noise Floor (N):</strong> Ambient thermal RF noise plus interference from non-Wi-Fi emitters (microwaves, Bluetooth, baby monitors), typically -95 dBm in clean indoor enterprise environments.
                        </li>
                        <li>
                          <strong>Signal-to-Noise Ratio (SNR):</strong> Difference between received signal power and noise floor: SNR(dB) = RSSI(dBm) - NoiseFloor(dBm). SNR dictates what Modulation and Coding Scheme (MCS) the hardware can demodulate.
                        </li>
                        <li>
                          <strong>Multipath Fading:</strong> Radio reflections off walls, concrete, and metal studs arriving at receiver antennas with phase offsets, causing constructive or destructive interference.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
                    <div className="flex items-start gap-3">
                      <AlertTriangle size={18} className="text-amber-700 shrink-0 mt-0.5" />
                      <div className="text-xs text-amber-900 leading-relaxed">
                        <strong>The Fundamental Wireless Pitfall:</strong> Strong signal strength (e.g. -50 dBm RSSI) does NOT guarantee high network performance! If ambient noise or co-channel interference is high (-60 dBm), the resulting SNR is only 10 dB. The radio will experience continuous frame drops, high retry rates, fallback to BPSK modulation, and severe airtime starvation despite &ldquo;full Wi-Fi bars&rdquo; displayed on the user&rsquo;s phone.
                      </div>
                    </div>
                  </div>

                  {/* Wireless Comm Path Diagram */}
                  <div className="p-5 rounded-2xl bg-stone-900 text-white font-mono text-xs">
                    <div className="text-stone-400 text-[10px] uppercase font-bold tracking-wider mb-3">
                      Figure 13.1: The Enterprise Wireless Communication Path
                    </div>
                    <div className="space-y-2 leading-relaxed text-stone-300">
                      <div>[Wireless Station (STA)] : Laptop / Phone / IoT Sensor</div>
                      <div className="text-orange-400 pl-4">&darr; 802.11 RF Transmission (Over-the-Air Frames)</div>
                      <div>[Access Point (AP)] : Radio Demodulation &bull; 802.11 to 802.3 MAC Translation &bull; 802.1Q Tagging</div>
                      <div className="text-orange-400 pl-4">&darr; 802.3 Ethernet Trunk (VLAN 10, 20, 30, 40)</div>
                      <div>[Managed Switch &amp; Distribution] : Layer 2 Switching &bull; PoE+ (802.3at) &bull; Port Security</div>
                      <div className="text-orange-400 pl-4">&darr; Layer 3 Inter-VLAN Routing &amp; Firewall Inspection</div>
                      <div>[Security Gateway &amp; Firewall] : Stateful ACLs &bull; NAT &bull; DHCP Server &bull; DNS Resolver</div>
                      <div className="text-orange-400 pl-4">&darr; WAN / Core Uplink</div>
                      <div>[Enterprise Intranet &amp; Public Internet]</div>
                    </div>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    <strong>Architectural Principle:</strong> In residential environments, an all-in-one box combines the Wi-Fi AP, router, NAT gateway, switch, and DHCP server. In enterprise architectures, the Access Point is strictly a Layer 2 wireless-to-wired bridge. Upstream switches and firewalls enforce routing, VLAN isolation, DHCP leasing, and security policy.
                  </p>
                </div>
              )}

              {/* SECTION 13.2 */}
              {activeSection === "13.2" && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest">
                      Section 13.2
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      IEEE 802.11 Architecture &amp; Wi-Fi Generations
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-stone-700">
                    IEEE 802.11 defines the physical and medium access control (MAC) specifications for wireless local area networks. Wi-Fi networks organize wireless infrastructure into standardized hierarchical units:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                      <div className="text-xs font-mono font-bold text-stone-900 mb-1">
                        Basic Service Set (BSS) &amp; BSSID
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        A BSS consists of an Access Point and its associated client stations (STAs). The <strong>BSSID</strong> is the unique 48-bit MAC address of the AP radio advertising that BSS. A dual-band AP operating 2.4 GHz and 5 GHz radios possesses separate BSSIDs for each radio.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                      <div className="text-xs font-mono font-bold text-stone-900 mb-1">
                        Extended Service Set (ESS) &amp; SSID
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        An ESS coordinates multiple APs across a physical building sharing a common human-readable <strong>SSID</strong> (e.g. <code>Prepspaces-Staff</code>). Clients roam between individual BSSIDs seamlessly while remaining associated with the same logical network.
                      </p>
                    </div>
                  </div>

                  {/* Generational Comparison Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-stone-300 bg-stone-100/60 font-mono text-stone-700">
                          <th className="p-3">Generation</th>
                          <th className="p-3">Standard</th>
                          <th className="p-3">Frequency Bands</th>
                          <th className="p-3">Max PHY Rate</th>
                          <th className="p-3">Modulation &amp; Key Innovations</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200 text-stone-700">
                        <tr>
                          <td className="p-3 font-bold font-mono">Legacy</td>
                          <td className="p-3 font-mono">802.11b/a/g</td>
                          <td className="p-3">2.4 GHz / 5 GHz</td>
                          <td className="p-3">11 / 54 Mbps</td>
                          <td className="p-3">DSSS, CCK, OFDM (64-carrier 20 MHz channels)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold font-mono">Wi-Fi 4</td>
                          <td className="p-3 font-mono">802.11n</td>
                          <td className="p-3">2.4 GHz &amp; 5 GHz</td>
                          <td className="p-3">600 Mbps</td>
                          <td className="p-3">MIMO (4x4 spatial streams), 40 MHz channel bonding, Frame Aggregation (A-MPDU)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold font-mono">Wi-Fi 5</td>
                          <td className="p-3 font-mono">802.11ac</td>
                          <td className="p-3">5 GHz only</td>
                          <td className="p-3">6.93 Gbps</td>
                          <td className="p-3">256-QAM, 80/160 MHz channels, Downlink Multi-User MIMO (MU-MIMO)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold font-mono text-orange-600">Wi-Fi 6 / 6E</td>
                          <td className="p-3 font-mono">802.11ax</td>
                          <td className="p-3">2.4, 5 &amp; 6 GHz</td>
                          <td className="p-3">9.6 Gbps</td>
                          <td className="p-3">1024-QAM, OFDMA (Resource Units), Target Wake Time (TWT for IoT), Bi-directional MU-MIMO, BSS Coloring</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold font-mono text-emerald-600">Wi-Fi 7</td>
                          <td className="p-3 font-mono">802.11be</td>
                          <td className="p-3">2.4, 5 &amp; 6 GHz</td>
                          <td className="p-3">46 Gbps</td>
                          <td className="p-3">4096-QAM, 320 MHz ultra-wide channels, Multi-Link Operation (MLO across bands), 16x16 MU-MIMO</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <div className="text-xs font-bold font-mono text-stone-900">
                      PHY Link Rate vs. Real Application Goodput
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Marketing literature advertises theoretical physical (PHY) link rates under laboratory conditions (zero noise, minimum distance, maximum spatial streams). In real-world operation, MAC-layer protocol overhead—such as Distributed Inter-Frame Space (DIFS), Short Inter-Frame Space (SIFS), random contention backoff slots, acknowledgement (ACK) frames, and beacon broadcasts—means actual TCP/UDP application goodput is typically only <strong>50% to 65% of the advertised PHY rate</strong> under ideal conditions, and much less in congested environments.
                    </p>
                  </div>
                </div>
              )}

              {/* SECTION 13.3 */}
              {activeSection === "13.3" && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest">
                      Section 13.3
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      Wi-Fi Frequency Bands, Channels &amp; Spectrum Engineering
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <div className="text-xs font-mono font-bold text-orange-600">2.4 GHz Band (Crowded)</div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Spans 2.400–2.4835 GHz. In North America (FCC), 11 channels are defined; in Europe (ETSI), 13 channels. Channels are spaced only 5 MHz apart, but each transmission occupies 20–22 MHz. Consequently, there are only <strong>three non-overlapping channels: 1, 6, and 11</strong>. Heavily congested by legacy IoT, Bluetooth, and microwaves.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <div className="text-xs font-mono font-bold text-blue-600">5 GHz Band (High Capacity)</div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Spans UNII-1 (36–48), UNII-2A/C (52–144), and UNII-3 (149–165). Offers up to 25 non-overlapping 20 MHz channels. Enables channel bonding (40, 80, 160 MHz). UNII-2 channels require <strong>Dynamic Frequency Selection (DFS)</strong>: APs must listen for radar; if radar is detected, the AP must immediately vacate the channel.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <div className="text-xs font-mono font-bold text-emerald-600">6 GHz Band (Pristine)</div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Introduced with Wi-Fi 6E/7. Provides 1,200 MHz of contiguous unlicensed spectrum (5.925–7.125 GHz). Accommodates up to 59 non-overlapping 20 MHz channels or seven 160 MHz channels without radar DFS requirements for Low Power Indoor (LPI) devices. Completely free of legacy 802.11b/g clients.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-900 text-white font-mono text-xs space-y-3">
                    <div className="text-stone-400 text-[10px] uppercase font-bold tracking-wider">
                      Co-Channel Contention (CCC) vs. Adjacent-Channel Interference (ACI)
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-stone-300">
                      <div>
                        <strong className="text-amber-400">Co-Channel Contention (CCC):</strong>
                        <p className="text-[11px] mt-1 leading-relaxed">
                          Multiple APs and clients share the exact same channel (e.g. Channel 6). Under CSMA/CA, when one radio transmits, all other radios on the channel defer transmission until the medium is clear. CCC reduces available airtime and per-client throughput, but transmitted frames remain demodulatable and collision rates stay low.
                        </p>
                      </div>
                      <div>
                        <strong className="text-rose-400">Adjacent-Channel Interference (ACI):</strong>
                        <p className="text-[11px] mt-1 leading-relaxed">
                          APs operate on partially overlapping channels (e.g. Channel 1 and Channel 3). Non-orthogonal sideband energy bleeds into the adjacent receiver. The hardware cannot decode the interfering signal as valid 802.11 frames, treating it as destructive noise. This drops the SNR, causes CRC errors, forces retransmissions, and collapses performance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 13.4 */}
              {activeSection === "13.4" && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest">
                      Section 13.4
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      Wi-Fi Association, MAC Operations &amp; Client Roaming
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-stone-700">
                    Because wireless radios cannot listen while transmitting (transmit power dwarfs received power by over 100 dB), Ethernet Collision Detection (CSMA/CD) is physically impossible over RF. Wireless networks instead use <strong>CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance)</strong> combining Physical Carrier Sense (Clear Channel Assessment CCA) and Virtual Carrier Sense (Network Allocation Vector NAV timers embedded in frame headers).
                  </p>

                  {/* Association State Machine */}
                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                    <div className="text-xs font-mono font-bold text-stone-900">
                      The 802.11 Association State Machine
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-stone-700 font-mono">
                      <div className="p-3 bg-white rounded-xl border border-stone-200">
                        <div className="font-bold text-stone-900 mb-1">State 1: Unauth &amp; Unassoc</div>
                        <p className="text-[11px] text-stone-500 font-sans">
                          Client performs Passive Scanning (listening for 100ms Beacons) or Active Scanning (transmitting Probe Requests and receiving Probe Responses).
                        </p>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-stone-200">
                        <div className="font-bold text-stone-900 mb-1">State 2: Authenticated</div>
                        <p className="text-[11px] text-stone-500 font-sans">
                          Exchanges 802.11 Open System Authentication Request &amp; Response frames (legacy WEP authentication is deprecated).
                        </p>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-stone-200">
                        <div className="font-bold text-stone-900 mb-1">State 3: Associated</div>
                        <p className="text-[11px] text-stone-500 font-sans">
                          Client transmits Association Request; AP replies with Association Response granting an Association ID (AID). Key exchange begins.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Roaming Standards k, v, r */}
                  <div className="space-y-3">
                    <div className="text-xs font-mono font-bold text-stone-900">
                      Client Roaming &amp; Assisted Standards (802.11k / 802.11v / 802.11r)
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      In Wi-Fi, the <strong>client always makes the final roaming decision</strong>. A &ldquo;sticky client&rdquo; clings to a distant, degraded AP (-82 dBm) even when standing directly underneath a fresh AP (-45 dBm). Modern enterprise WLANs deploy three coordinated 802.11 amendments to solve this:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                        <strong className="text-stone-900 font-mono">802.11k (Neighbor Reports):</strong>
                        <p className="text-stone-600 mt-1 leading-relaxed">
                          AP supplies the client with a curated list of neighbor AP channels, eliminating the need for the client to scan 40+ channels.
                        </p>
                      </div>
                      <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                        <strong className="text-stone-900 font-mono">802.11v (BSS Transition):</strong>
                        <p className="text-stone-600 mt-1 leading-relaxed">
                          AP proactively sends BSS Transition Management requests recommending that the client steer toward an AP with superior SNR and lower load.
                        </p>
                      </div>
                      <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                        <strong className="text-stone-900 font-mono">802.11r (Fast Transition FT):</strong>
                        <p className="text-stone-600 mt-1 leading-relaxed">
                          Performs cryptographic pre-authentication before roaming, slashing handoff latency from &gt;500ms down to &lt;50ms—essential for real-time VoIP/WebRTC.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 13.5 */}
              {activeSection === "13.5" && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest">
                      Section 13.5
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      Wi-Fi Security: WPA2, WPA3 &amp; SAE Cryptography
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-stone-700">
                    Wi-Fi encryption secures over-the-air frames and controls network admission. Obsolete protocols like WEP (broken RC4 stream cipher) and WPA-TKIP are permanently deprecated. Modern wireless security divides into Personal and Enterprise modes.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <div className="text-xs font-mono font-bold text-stone-900">
                        WPA2-Personal (4-Way Handshake)
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Uses a shared passphrase. Computes Pairwise Master Key via <code>PMK = PBKDF2(passphrase, SSID, 4096, 256)</code>. The AP and client execute a 4-Way Handshake exchanging ANonce and SNonce to derive the Pairwise Transient Key (PTK).
                      </p>
                      <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg text-[11px] text-rose-800 leading-relaxed">
                        <strong>Vulnerability:</strong> If an attacker captures Messages 1 and 2 over the air, they possess the nonces, MAC addresses, and MIC. They can run an offline GPU dictionary attack (Hashcat) testing millions of password guesses per second with zero risk of AP detection!
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <div className="text-xs font-mono font-bold text-emerald-800">
                        WPA3-Personal (SAE / Dragonfly Handshake)
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Replaces the 4-way PSK exchange with <strong>Simultaneous Authentication of Equals (SAE)</strong> based on RFC 7664 (Dragonfly). Both parties use a zero-knowledge proof over elliptic curves (NIST P-256) to negotiate an ephemeral PMK.
                      </p>
                      <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg text-[11px] text-emerald-800 leading-relaxed">
                        <strong>Security Advantage:</strong> No password hash is ever transmitted. Provides <em>Perfect Forward Secrecy (PFS)</em>: an attacker capturing traffic cannot decrypt past sessions even if they discover the password later. Immune to offline dictionary attacks.
                      </div>
                    </div>
                  </div>

                  {/* PMF Deep Dive */}
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <div className="text-xs font-mono font-bold text-stone-900">
                      Protected Management Frames (IEEE 802.11w / PMF)
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      In legacy 802.11, while data frames are encrypted by AES-CCMP, management frames (Deauthentication, Disassociation, Channel Switch) remain unencrypted and unauthenticated. An attacker transmitting forged deauth frames with spoofed AP MAC addresses can instantly disconnect any client.
                    </p>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      <strong>IEEE 802.11w (PMF):</strong> Cryptographically signs unicast and broadcast management frames using the Broadcast Integrity Protocol (BIP) with AES-128-CMAC. Spoofed deauth frames lack valid cryptographic MIC tags and are discarded by client Wi-Fi chipsets. PMF is mandatory in all WPA3 networks.
                    </p>
                  </div>
                </div>
              )}

              {/* SECTION 13.6 */}
              {activeSection === "13.6" && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest">
                      Section 13.6
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      Enterprise Wi-Fi: 802.1X, EAP &amp; RADIUS Architecture
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-stone-700">
                    Enterprise Wi-Fi decouples network admission from a shared passphrase. Instead of every employee sharing one password that cannot be revoked without re-keying the entire campus, each user or device authenticates individually using central directory credentials or X.509 certificates.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                      <strong className="text-stone-900 font-mono">1. Supplicant (Client):</strong>
                      <p className="text-stone-600 mt-1 leading-relaxed">
                        Software running on the client OS (Windows 802.1X, wpa_supplicant on Linux, Apple Wi-Fi daemon) that initiates authentication and holds credentials.
                      </p>
                    </div>
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                      <strong className="text-stone-900 font-mono">2. Authenticator (AP):</strong>
                      <p className="text-stone-600 mt-1 leading-relaxed">
                        The Access Point or Wireless LAN Controller. Acts as a gatekeeper: blocks all client IP traffic until the authentication server approves admission.
                      </p>
                    </div>
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                      <strong className="text-stone-900 font-mono">3. RADIUS Server:</strong>
                      <p className="text-stone-600 mt-1 leading-relaxed">
                        Central authentication engine (FreeRADIUS, Cisco ISE, Aruba ClearPass). Evaluates EAP exchanges against Active Directory / LDAP and returns authorization policies.
                      </p>
                    </div>
                  </div>

                  {/* EAP Methods */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-stone-300 bg-stone-100/60 font-mono text-stone-700">
                          <th className="p-3">EAP Method</th>
                          <th className="p-3">Client Credential</th>
                          <th className="p-3">Server Credential</th>
                          <th className="p-3">Security Level &amp; Critical Risks</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200 text-stone-700">
                        <tr>
                          <td className="p-3 font-bold font-mono text-emerald-600">EAP-TLS (RFC 5216)</td>
                          <td className="p-3">Client X.509 Certificate</td>
                          <td className="p-3">Server X.509 Certificate</td>
                          <td className="p-3">
                            <strong>Highest Security.</strong> Mutual cryptographic authentication. No passwords exist to be phished or brute-forced. Requires enterprise PKI (SCEP/MDM).
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold font-mono text-amber-600">PEAP-MSCHAPv2</td>
                          <td className="p-3">Username &amp; Password</td>
                          <td className="p-3">Server X.509 Certificate</td>
                          <td className="p-3">
                            <strong>High Risk if Unmanaged.</strong> Inner tunnel carries MS-CHAPv2. If clients fail to validate the RADIUS server certificate, a rogue AP harvesting credentials can capture hashes for offline cracking.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold font-mono">EAP-TTLS</td>
                          <td className="p-3">Flexible (PAP/MSCHAP)</td>
                          <td className="p-3">Server X.509 Certificate</td>
                          <td className="p-3">
                            Builds TLS tunnel prior to authenticating client. Outer identity can be anonymized (e.g. <code>anonymous@prepspaces.com</code>).
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-900 text-white font-mono text-xs space-y-2">
                    <div className="text-stone-400 text-[10px] uppercase font-bold tracking-wider">
                      Dynamic VLAN Assignment via RADIUS Attributes
                    </div>
                    <p className="text-stone-300 text-[11px] leading-relaxed">
                      Upon successful authentication, the RADIUS server returns an <code>Access-Accept</code> frame containing IETF RFC 3580 attributes:
                    </p>
                    <pre className="text-amber-400 text-[11px] bg-stone-950 p-2.5 rounded-lg overflow-x-auto">
{`Tunnel-Type = VLAN (13)
Tunnel-Medium-Type = 802 (6)
Tunnel-Private-Group-ID = "10"  # Dynamically binds client to VLAN 10 (Staff)`}
                    </pre>
                    <p className="text-stone-400 text-[11px]">
                      This allows a single broadcast SSID (e.g., <code>Prepspaces-Corporate</code>) to place an engineering laptop into VLAN 10, an HR laptop into VLAN 15, and an unmanaged contractor into VLAN 25 automatically.
                    </p>
                  </div>
                </div>
              )}

              {/* SECTION 13.7 */}
              {activeSection === "13.7" && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest">
                      Section 13.7
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      Bluetooth &amp; Short-Range Wireless (Classic vs. BLE)
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-stone-700">
                    Bluetooth operates in the 2.4 GHz ISM band (2.402–2.480 GHz) alongside Wi-Fi. It uses <strong>Adaptive Frequency Hopping Spread Spectrum (AFH)</strong>, hopping across 79 channels (Classic, 1 MHz wide) or 40 channels (BLE, 2 MHz wide) up to 1,600 times per second to evade static Wi-Fi interference.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <div className="text-xs font-mono font-bold text-stone-900">
                        Bluetooth Classic (BR/EDR)
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Designed for continuous, high-throughput streaming (A2DP audio, hands-free headsets, HID peripherals, serial SPP). Establishes point-to-point connections with dedicated piconets. Consumes milliwatts to watts of power, requiring rechargeable batteries.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <div className="text-xs font-mono font-bold text-blue-700">
                        Bluetooth Low Energy (BLE)
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        Architected for ultra-low duty cycles (medical sensors, environmental monitors, asset beacons). Remains in deep sleep 99.9% of the time, waking to transmit small telemetry packets in milliseconds. Runs for months to years on a single CR2032 coin-cell battery.
                      </p>
                    </div>
                  </div>

                  {/* GATT Hierarchy */}
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                    <div className="text-xs font-mono font-bold text-stone-900">
                      The Generic Attribute Profile (GATT) Hierarchy
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-stone-700 font-mono">
                      <div className="p-3 bg-white rounded-xl border border-stone-200">
                        <div className="font-bold text-stone-900">Profile</div>
                        <p className="text-[11px] text-stone-500 font-sans mt-1">
                          Collection of standardized services (e.g. Heart Rate Profile, Environmental Sensing).
                        </p>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-stone-200">
                        <div className="font-bold text-stone-900">Service</div>
                        <p className="text-[11px] text-stone-500 font-sans mt-1">
                          Logical group of data characteristics identified by 16-bit or 128-bit UUID (e.g. Battery Service <code>0x180F</code>).
                        </p>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-stone-200">
                        <div className="font-bold text-stone-900">Characteristic</div>
                        <p className="text-[11px] text-stone-500 font-sans mt-1">
                          The actual data value (Value, Properties: Read/Write/Notify, Descriptors like Client Characteristic Configuration CCCD).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
                    <div className="text-xs font-bold text-amber-900 font-mono">
                      Bluetooth Attack Surfaces &amp; Hardening
                    </div>
                    <ul className="text-xs text-amber-900/90 space-y-1 list-disc pl-4 leading-relaxed">
                      <li>
                        <strong>Pairing Modes:</strong> <em>Just Works</em> mode provides zero MITM protection. Enforce <em>Numeric Comparison</em> or <em>LE Secure Connections (LESC)</em> using P-256 ECDH.
                      </li>
                      <li>
                        <strong>KNOB Attack (CVE-2019-9506):</strong> Attacker negotiates encryption key entropy down to 1 byte during classic pairing. Patch firmware to enforce 16-byte minimum entropy.
                      </li>
                      <li>
                        <strong>GATT Permission Flaws:</strong> Unprotected write characteristics allowing unauthorized actors to toggle smart locks, change insulin pump dosage, or exfiltrate sensor telemetry without pairing.
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* SECTION 13.8 */}
              {activeSection === "13.8" && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest">
                      Section 13.8
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      Cellular Networking &amp; 5G Core Architecture
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-stone-700">
                    Cellular networks provide wide-area wireless connectivity through geographically distributed base stations and a carrier-operated core network. 5G New Radio (5G NR) introduces a modular, cloud-native Service-Based Architecture (SBA) where control and user planes are strictly separated.
                  </p>

                  {/* 5G Core Architecture Block */}
                  <div className="p-5 rounded-2xl bg-stone-900 text-white font-mono text-xs space-y-3">
                    <div className="text-stone-400 text-[10px] uppercase font-bold tracking-wider">
                      Figure 13.2: 5G Core Service-Based Architecture (SBA)
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-stone-300">
                      <div className="space-y-2">
                        <strong className="text-orange-400">Control Plane (Signaling &amp; Policy):</strong>
                        <ul className="text-[11px] space-y-1 text-stone-400">
                          <li>&bull; <strong className="text-white">AMF:</strong> Access and Mobility Management Function (handles registration, mobility, and connection state).</li>
                          <li>&bull; <strong className="text-white">SMF:</strong> Session Management Function (manages PDU sessions and instructs UPF forwarding).</li>
                          <li>&bull; <strong className="text-white">UDM / AUSF:</strong> Unified Data Management &amp; Authentication Server (evaluates SIM credentials).</li>
                          <li>&bull; <strong className="text-white">PCF:</strong> Policy Control Function (enforces QoS, bandwidth rates, and slicing rules).</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <strong className="text-emerald-400">User Plane (High-Throughput Forwarding):</strong>
                        <ul className="text-[11px] space-y-1 text-stone-400">
                          <li>&bull; <strong className="text-white">User Equipment (UE):</strong> Smartphone or 5G modem with UICC (SIM/eSIM).</li>
                          <li>&bull; <strong className="text-white">gNodeB (gNB):</strong> 5G Radio Access Network (RAN) base station.</li>
                          <li>&bull; <strong className="text-white">UPF (User Plane Function):</strong> Performs packet routing, forwarding, GTP encapsulation/decapsulation, QoS marking, and connects directly to external Data Networks (DN).</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* 5G Spectrum & Concepts */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                      <strong className="text-stone-900 font-mono">Sub-6 GHz vs. mmWave:</strong>
                      <p className="text-stone-600 mt-1 leading-relaxed">
                        Sub-6 GHz (C-band ~3.5 GHz) balances range and high capacity. Millimeter wave (mmWave 24–40 GHz) delivers multi-gigabit throughput but suffers extreme attenuation through walls, foliage, and rain.
                      </p>
                    </div>
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                      <strong className="text-stone-900 font-mono">Network Slicing:</strong>
                      <p className="text-stone-600 mt-1 leading-relaxed">
                        Virtualizes network resources into isolated slices tailored for: eMBB (Enhanced Mobile Broadband), URLLC (Ultra-Reliable Low-Latency &lt;1ms for autonomous vehicles), and mMTC (Massive IoT).
                      </p>
                    </div>
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                      <strong className="text-stone-900 font-mono">SIM / 5G AKA Security:</strong>
                      <p className="text-stone-600 mt-1 leading-relaxed">
                        Subscriber key K is stored in tamper-proof hardware. 5G encrypts the permanent subscriber identity (SUPI) as a temporary Subscription Concealed Identifier (SUCI) over the air, defeating IMSI-catchers.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 13.9 */}
              {activeSection === "13.9" && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest">
                      Section 13.9
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      Wireless Attack Surfaces &amp; Defensive Monitoring (WIPS)
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-stone-700">
                    Because radio waves propagate beyond physical facility walls, attackers can interact with enterprise wireless infrastructure from parking lots or public spaces. Defensive engineering requires continuous airspace monitoring and automated mitigation.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <div className="text-xs font-mono font-bold text-rose-700 flex items-center gap-2">
                        <AlertTriangle size={14} />
                        <span>Rogue Access Points</span>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        An unauthorized AP physically connected to an internal switch port (e.g. an employee plugging a consumer Wi-Fi router into an office cubicle jack to bypass mobile data limits). Bypasses 802.1X, firewall boundaries, and extends internal corporate subnets into the air unprotected.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <div className="text-xs font-mono font-bold text-rose-700 flex items-center gap-2">
                        <AlertTriangle size={14} />
                        <span>Evil Twin &amp; Honeypot APs</span>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        An attacker deploys an AP advertising an identical SSID (e.g. <code>Prepspaces-Corporate</code>) with higher transmit power or cloned MAC address. Once clients associate, the attacker presents fake captive portals to harvest credentials or intercepts unencrypted traffic.
                      </p>
                    </div>
                  </div>

                  {/* WIPS Workflow */}
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <div className="text-xs font-mono font-bold text-stone-900">
                      Wireless Intrusion Detection &amp; Prevention Systems (WIDS / WIPS)
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Enterprise APs allocate dedicated third radios or time-slice active radios into monitor mode to scan all 2.4 GHz, 5 GHz, and 6 GHz channels.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs font-mono text-center">
                      <div className="p-2.5 bg-white rounded-lg border border-stone-200">
                        <div className="font-bold text-stone-900">1. Collect</div>
                        <div className="text-[10px] text-stone-500 font-sans mt-1">Capture Beacons, Probes, Deauths, RADIUS logs</div>
                      </div>
                      <div className="p-2.5 bg-white rounded-lg border border-stone-200">
                        <div className="font-bold text-stone-900">2. Correlate</div>
                        <div className="text-[10px] text-stone-500 font-sans mt-1">Match BSSID with switch CAM tables &amp; approved AP list</div>
                      </div>
                      <div className="p-2.5 bg-white rounded-lg border border-stone-200">
                        <div className="font-bold text-stone-900">3. Classify</div>
                        <div className="text-[10px] text-stone-500 font-sans mt-1">Differentiate neighbor AP vs rogue on internal LAN</div>
                      </div>
                      <div className="p-2.5 bg-white rounded-lg border border-stone-200">
                        <div className="font-bold text-stone-900">4. Mitigate</div>
                        <div className="text-[10px] text-stone-500 font-sans mt-1">SNMP switch port shutdown &amp; wireless containment</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 13.10 */}
              {activeSection === "13.10" && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest">
                      Section 13.10
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      Enterprise WLAN Network Segmentation &amp; Access Policy
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-stone-700">
                    Treating a Wi-Fi connection as equivalent to plugging into the core corporate LAN is a critical security flaw. Modern zero-trust architecture divides campus wireless traffic into four distinct, isolated VLAN tiers:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                      <div className="text-xs font-mono font-bold text-stone-900">VLAN 10: Staff Corporate</div>
                      <div className="text-xs font-mono text-orange-600">Subnet: 10.10.10.0/24 &bull; WPA3-Enterprise</div>
                      <p className="text-xs text-stone-600 leading-relaxed mt-1">
                        Managed corporate laptops and phones. Authenticated via EAP-TLS certificates. Permitted access to internal application servers, databases, and monitored egress to internet.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                      <div className="text-xs font-mono font-bold text-stone-900">VLAN 20: Visitors &amp; Guests</div>
                      <div className="text-xs font-mono text-blue-600">Subnet: 10.10.20.0/24 &bull; Client Isolation</div>
                      <p className="text-xs text-stone-600 leading-relaxed mt-1">
                        Untrusted guest smartphones. Strict Layer 2 Client Isolation (Private VLANs) prevents guest-to-guest lateral scanning. Firewall drops all outbound RFC 1918 traffic (internet-only access).
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                      <div className="text-xs font-mono font-bold text-stone-900">VLAN 30: Smart IoT &amp; Sensors</div>
                      <div className="text-xs font-mono text-amber-600">Subnet: 10.10.30.0/24 &bull; Private PSK / MPSK</div>
                      <p className="text-xs text-stone-600 leading-relaxed mt-1">
                        Thermostats, smart TVs, barcode scanners, and security cameras. Strict micro-segmentation: zero access to internal staff subnets. Outbound egress whitelisted to specific cloud MQTT/NTP endpoints.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                      <div className="text-xs font-mono font-bold text-stone-900">VLAN 40: Infrastructure Admin</div>
                      <div className="text-xs font-mono text-emerald-600">Subnet: 10.10.40.0/24 &bull; Out-of-Band</div>
                      <p className="text-xs text-stone-600 leading-relaxed mt-1">
                        AP control planes, managed switch console interfaces, RADIUS, and firewall admin portals. <strong>Never broadcast via over-the-air SSID</strong>. Accessible solely via dedicated admin workstations.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 13.11 */}
              {activeSection === "13.11" && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest">
                      Section 13.11
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      Diagnostic CLI Commands &amp; Wireshark Display Filters
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-stone-700">
                    Engineers troubleshooting wireless dropouts, roaming failures, or suspected rogue APs rely on operating system command-line interfaces and Wireshark packet dissection:
                  </p>

                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-stone-900 text-white font-mono text-xs space-y-2">
                      <div className="text-stone-400 text-[10px] uppercase font-bold tracking-wider">
                        Linux Wireless Inspection &bull; iw, nmcli, wavemon
                      </div>
                      <pre className="text-stone-300 text-[11px] leading-relaxed overflow-x-auto">
{`# 1. Inspect physical link parameters (RSSI, MCS index, channel width, retries)
iw dev wlan0 link
iw dev wlan0 station dump

# 2. Scan and list all visible BSSIDs, signal strengths, and security modes
nmcli dev wifi list --rescan yes

# 3. View active supplicant connection state and IP configuration
nmcli connection show --active
ip addr show dev wlan0`}
                      </pre>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-900 text-white font-mono text-xs space-y-2">
                      <div className="text-stone-400 text-[10px] uppercase font-bold tracking-wider">
                        Windows Wireless Diagnostics &bull; netsh
                      </div>
                      <pre className="text-stone-300 text-[11px] leading-relaxed overflow-x-auto">
{`# 1. Display active connection: SSID, BSSID, Radio type (802.11ax), Channel, Signal %
netsh wlan show interfaces

# 2. List all visible neighboring networks with BSSID and encryption details
netsh wlan show networks mode=bssid

# 3. Generate detailed HTML wireless connectivity and event timeline report
netsh wlan show wlanreport`}
                      </pre>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-900 text-white font-mono text-xs space-y-2">
                      <div className="text-stone-400 text-[10px] uppercase font-bold tracking-wider">
                        Wireshark 802.11 Display Filter Master Matrix
                      </div>
                      <pre className="text-amber-400 text-[11px] leading-relaxed overflow-x-auto">
{`# Filter 1: Capture all 802.11 Beacon management frames (AP advertisements)
wlan.fc.type_subtype == 8

# Filter 2: Capture all Probe Requests & Responses
wlan.fc.type_subtype == 4 || wlan.fc.type_subtype == 5

# Filter 3: Detect potential Deauthentication DoS attacks
wlan.fc.type_subtype == 12

# Filter 4: Filter 4-Way Handshakes and 802.1X Key exchanges
eapol

# Filter 5: Filter EAP authentication frames (EAP-TLS / PEAP)
eap

# Filter 6: Filter traffic for a specific target client MAC
wlan.addr == 00:1a:2b:3c:4d:5e`}
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 13.12 */}
              {activeSection === "13.12" && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
                  <div className="border-b border-[#e7e3da] pb-4">
                    <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest">
                      Section 13.12
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      Wireless Security Audit Methodology &amp; Remediation
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-stone-700">
                    A defensive wireless security audit evaluates whether configured controls match documented policy and standard baselines (NIST SP 800-153). Safe auditing requires strict authorization, preventing disruptions to production traffic, and correlating wireless signals with wired infrastructure evidence.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <div className="text-xs font-mono font-bold text-stone-900">
                        Defensive Audit Principles
                      </div>
                      <ul className="text-xs text-stone-600 space-y-1.5 list-disc pl-4 leading-relaxed">
                        <li>Obtain explicit written scope and management authorization.</li>
                        <li>Never attack or disrupt third-party networks in surrounding buildings.</li>
                        <li>Verify client isolation using benign ping probes between owned test devices.</li>
                        <li>Correlate rogue wireless signals with physical switch CAM tables before taking action.</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                      <div className="text-xs font-mono font-bold text-stone-900">
                        Prioritized Remediation Hierarchy
                      </div>
                      <ul className="text-xs text-stone-600 space-y-1.5 list-disc pl-4 leading-relaxed">
                        <li><strong>P0:</strong> Decommission all legacy WEP and WPA-TKIP SSIDs immediately.</li>
                        <li><strong>P0:</strong> Enforce 802.11w (PMF: Required) to prevent deauth disruption.</li>
                        <li><strong>P1:</strong> Pin RADIUS server certificates on all managed supplicants.</li>
                        <li><strong>P1:</strong> Enable Layer 2 Client Isolation on all guest and visitor WLANs.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 2: SIMULATOR 1 - RF SPECTRUM & CHANNEL PLANNER                 */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "spectrum-sim" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                    <Radio size={14} />
                    <span>RF Spectrum &amp; Channel Allocation Sandbox</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    Wi-Fi Frequency Bands, Channel Bonding &amp; Interference Simulator
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-stone-500">Active Band:</span>
                  <div className="inline-flex rounded-xl p-1 bg-stone-100 border border-stone-200">
                    {["2.4", "5", "6"].map((band) => (
                      <button
                        key={band}
                        onClick={() => {
                          setSpectrumBand(band);
                          if (band === "2.4") setChannelWidth(20);
                        }}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                          spectrumBand === band ? "bg-white text-stone-900 shadow-sm" : "text-stone-500 hover:text-stone-900"
                        }`}
                      >
                        {band} GHz
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="text-xs font-mono font-bold text-stone-700 block mb-1">
                    Channel Width Configuration:
                  </label>
                  <select
                    disabled={spectrumBand === "2.4"}
                    value={channelWidth}
                    onChange={(e) => setChannelWidth(Number(e.target.value))}
                    className="w-full text-xs font-mono p-2.5 rounded-xl border border-stone-300 bg-white cursor-pointer disabled:opacity-50"
                  >
                    <option value={20}>20 MHz (Standard Density)</option>
                    <option value={40}>40 MHz (Bonded 2 Channels)</option>
                    <option value={80} disabled={spectrumBand === "2.4"}>80 MHz (Bonded 4 Channels)</option>
                    <option value={160} disabled={spectrumBand === "2.4"}>160 MHz (Ultra-Wide Bonded)</option>
                  </select>
                </div>

                {spectrumBand === "2.4" ? (
                  <div>
                    <label className="text-xs font-mono font-bold text-stone-700 block mb-1">
                      Simulate Overlapping Rogue AP:
                    </label>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setHasInterferer24(!hasInterferer24)}
                        className={`px-3 py-2 rounded-xl text-xs font-bold transition cursor-pointer border ${
                          hasInterferer24
                            ? "bg-rose-50 border-rose-300 text-rose-700"
                            : "bg-stone-50 border-stone-200 text-stone-600"
                        }`}
                      >
                        {hasInterferer24 ? "Disable Rogue Interferer" : "Inject Overlapping Rogue AP"}
                      </button>
                      {hasInterferer24 && (
                        <select
                          value={interfererChannel}
                          onChange={(e) => setInterfererChannel(Number(e.target.value))}
                          className="text-xs font-mono p-2 rounded-xl border border-rose-300 bg-white"
                        >
                          <option value={3}>Channel 3 (Bad ACI)</option>
                          <option value={4}>Channel 4 (Severe ACI)</option>
                          <option value={8}>Channel 8 (Overlaps 6 &amp; 11)</option>
                        </select>
                      )}
                    </div>
                  </div>
                ) : (
                  <div>
                    <label className="text-xs font-mono font-bold text-stone-700 block mb-1">
                      DFS Radar Strike Simulation:
                    </label>
                    <button
                      onClick={() => setIsDfsRadarSimulated(!isDfsRadarSimulated)}
                      className={`px-3 py-2 rounded-xl text-xs font-bold transition cursor-pointer border ${
                        isDfsRadarSimulated
                          ? "bg-rose-50 border-rose-300 text-rose-700"
                          : "bg-stone-50 border-stone-200 text-stone-600"
                      }`}
                    >
                      {isDfsRadarSimulated ? "Clear Radar & Reset CAC" : "Simulate TDWR Radar Strike"}
                    </button>
                  </div>
                )}

                <div>
                  <label className="text-xs font-mono font-bold text-stone-700 block mb-1">
                    Spectral Efficiency Status:
                  </label>
                  <div className="p-2 bg-stone-50 rounded-xl border border-stone-200 text-xs font-mono font-bold text-stone-800">
                    {spectrumAnalysis.status}
                  </div>
                </div>
              </div>

              {/* Graphical Spectral Visualization */}
              <div className="p-6 bg-stone-900 rounded-2xl text-white font-mono space-y-4 mb-6">
                <div className="flex items-center justify-between text-xs text-stone-400 pb-3 border-b border-stone-800">
                  <span>RF Frequency Spectrum Display ({spectrumBand} GHz Band)</span>
                  <span className="text-orange-400 font-bold">{spectrumAnalysis.spectrumRange}</span>
                </div>

                {/* 2.4 GHz Visualization */}
                {spectrumBand === "2.4" && (
                  <div className="space-y-4">
                    <div className="relative h-32 border-b-2 border-stone-700 flex items-end justify-between px-4 pt-4">
                      {/* Channels 1, 6, 11 standard arches */}
                      <div className="flex flex-col items-center">
                        <div className="w-24 h-20 rounded-t-full border-2 border-emerald-500 bg-emerald-500/20 flex items-center justify-center text-[10px] text-emerald-300 font-bold">
                          Ch 1 (2412)
                        </div>
                        <span className="text-[10px] text-stone-400 mt-1">20 MHz Clean</span>
                      </div>

                      {/* Interferer arch if enabled */}
                      {hasInterferer24 && (
                        <div className="flex flex-col items-center -ml-12 z-10">
                          <div className="w-24 h-24 rounded-t-full border-2 border-rose-500 bg-rose-500/30 flex items-center justify-center text-[10px] text-rose-200 font-bold animate-pulse">
                            Rogue Ch {interfererChannel}
                          </div>
                          <span className="text-[10px] text-rose-400 mt-1">Severe ACI Noise!</span>
                        </div>
                      )}

                      <div className="flex flex-col items-center">
                        <div className="w-24 h-20 rounded-t-full border-2 border-emerald-500 bg-emerald-500/20 flex items-center justify-center text-[10px] text-emerald-300 font-bold">
                          Ch 6 (2437)
                        </div>
                        <span className="text-[10px] text-stone-400 mt-1">20 MHz Clean</span>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="w-24 h-20 rounded-t-full border-2 border-emerald-500 bg-emerald-500/20 flex items-center justify-center text-[10px] text-emerald-300 font-bold">
                          Ch 11 (2462)
                        </div>
                        <span className="text-[10px] text-stone-400 mt-1">20 MHz Clean</span>
                      </div>
                    </div>

                    <div className="text-[11px] text-stone-400 flex items-center justify-between px-2">
                      <span>2400 MHz (Band Edge)</span>
                      <span>2412 MHz</span>
                      <span>2437 MHz</span>
                      <span>2462 MHz</span>
                      <span>2483.5 MHz</span>
                    </div>
                  </div>
                )}

                {/* 5 GHz Visualization */}
                {spectrumBand === "5" && (
                  <div className="space-y-4">
                    <div className="relative h-28 border-b-2 border-stone-700 flex items-end justify-between px-2">
                      <div className="p-2 bg-blue-500/20 border border-blue-400 rounded-lg text-center text-[10px] text-blue-300 w-1/4">
                        UNII-1 (Ch 36-48)<br />Indoor Standard
                      </div>
                      <div className={`p-2 rounded-lg text-center text-[10px] w-2/5 border ${isDfsRadarSimulated ? "bg-rose-500/30 border-rose-500 text-rose-300 animate-pulse" : "bg-purple-500/20 border-purple-400 text-purple-300"}`}>
                        UNII-2A/C (Ch 52-144)<br />
                        {isDfsRadarSimulated ? "RADAR DETECTED! VACATED" : "Dynamic Frequency Selection (DFS)"}
                      </div>
                      <div className="p-2 bg-blue-500/20 border border-blue-400 rounded-lg text-center text-[10px] text-blue-300 w-1/4">
                        UNII-3 (Ch 149-165)<br />High Power Egress
                      </div>
                    </div>
                    <div className="text-[11px] text-stone-400 flex items-center justify-between">
                      <span>5.150 GHz</span>
                      <span>5.250 GHz (DFS Start)</span>
                      <span>5.725 GHz (UNII-3)</span>
                      <span>5.850 GHz</span>
                    </div>
                  </div>
                )}

                {/* 6 GHz Visualization */}
                {spectrumBand === "6" && (
                  <div className="space-y-4">
                    <div className="h-28 border-b-2 border-stone-700 flex items-center justify-center p-4 bg-emerald-950/20 rounded-xl border border-emerald-800/40 text-center">
                      <div>
                        <div className="text-emerald-400 font-bold text-sm">
                          1,200 MHz Contiguous Spectrum &bull; Zero Legacy Contention
                        </div>
                        <div className="text-stone-400 text-xs mt-1">
                          59x 20MHz &bull; 29x 40MHz &bull; 14x 80MHz &bull; 7x 160MHz &bull; 3x 320MHz Ultra-Wide Channels (Wi-Fi 7)
                        </div>
                      </div>
                    </div>
                    <div className="text-[11px] text-stone-400 flex items-center justify-between">
                      <span>5.925 GHz (UNII-5)</span>
                      <span>6.425 GHz (UNII-6)</span>
                      <span>6.875 GHz (UNII-7)</span>
                      <span>7.125 GHz (UNII-8)</span>
                    </div>
                  </div>
                )}

                <div className="p-3 bg-stone-800/60 rounded-xl text-xs text-stone-300 leading-relaxed border border-stone-700/50">
                  <strong>Engineering Analysis:</strong> {spectrumAnalysis.description}
                </div>
              </div>

              {/* Metrics Table */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="text-xs font-mono text-stone-500">Contention State</div>
                  <div className="text-sm font-bold font-mono text-stone-900 mt-1">
                    {spectrumAnalysis.contentionLevel}
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="text-xs font-mono text-stone-500">SNR Penalty</div>
                  <div className="text-sm font-bold font-mono text-stone-900 mt-1">
                    {spectrumAnalysis.snrImpact}
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="text-xs font-mono text-stone-500">Recommended Channel Reuse</div>
                  <div className="text-sm font-bold font-mono text-stone-900 mt-1">
                    {spectrumBand === "2.4" ? "Channels 1, 6, 11 (20 MHz)" : spectrumBand === "5" ? "40 or 80 MHz Plan" : "80 or 160 MHz Plan"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 3: SIMULATOR 2 - AUTHENTICATION & HANDSHAKE LADDER             */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "auth-handshake-sim" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                    <KeyRound size={14} />
                    <span>Cryptographic Key Exchange Simulator</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    WPA2 4-Way vs. WPA3 SAE (Dragonfly) vs. 802.1X EAP-TLS
                  </h3>
                </div>
                <div className="inline-flex rounded-xl p-1 bg-stone-100 border border-stone-200">
                  {[
                    { id: "wpa2-psk", label: "WPA2-Personal (PSK)" },
                    { id: "wpa3-sae", label: "WPA3-Personal (SAE)" },
                    { id: "eap-tls", label: "Enterprise 802.1X (EAP-TLS)" },
                  ].map((m) => (
                    <button
                      key={m.id}
                      onClick={() => {
                        setAuthMode(m.id);
                        setSimulateCrackingAttempt(false);
                      }}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                        authMode === m.id ? "bg-white text-stone-900 shadow-sm" : "text-stone-500 hover:text-stone-900"
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Header Box */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-stone-900 font-mono">{handshakeDetails.title}</h4>
                  <p className="text-xs text-stone-600 mt-0.5">{handshakeDetails.summary}</p>
                </div>
                <button
                  onClick={() => setSimulateCrackingAttempt(!simulateCrackingAttempt)}
                  className="px-4 py-2 rounded-xl text-xs font-bold font-mono transition cursor-pointer bg-stone-900 hover:bg-stone-800 text-white shrink-0"
                >
                  {simulateCrackingAttempt ? "Reset Attack Simulation" : "Simulate Offline Cracking Attack"}
                </button>
              </div>

              {/* Exploit Test Banner if triggered */}
              {handshakeDetails.crackResult && (
                <div className={`p-4 rounded-2xl border mb-6 ${handshakeDetails.crackResult.color}`}>
                  <div className="text-xs font-bold font-mono uppercase tracking-wider mb-1">
                    {handshakeDetails.crackResult.status}
                  </div>
                  <div className="text-xs leading-relaxed">
                    {handshakeDetails.crackResult.detail}
                  </div>
                </div>
              )}

              {/* Handshake Step-by-Step Sequence */}
              <div className="space-y-3">
                {handshakeDetails.steps.map((st) => (
                  <div key={st.step} className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50 hover:bg-stone-50 transition">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 pb-2 border-b border-stone-200">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-stone-900 text-white text-[10px] font-bold font-mono flex items-center justify-center">
                          {st.step}
                        </span>
                        <span className="text-xs font-bold text-stone-900 font-mono">{st.name}</span>
                      </div>
                      <span className="text-[11px] font-mono text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200">
                        {st.direction}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      <div>
                        <div className="text-[10px] font-mono font-bold text-stone-400 uppercase">Wire Frame Content:</div>
                        <div className="font-mono text-stone-800 mt-0.5">{st.payload}</div>
                      </div>
                      <div>
                        <div className="text-[10px] font-mono font-bold text-stone-400 uppercase">Cryptographic Operation:</div>
                        <div className="text-stone-700 mt-0.5">{st.crypto}</div>
                      </div>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-stone-200 text-[11px] text-stone-600">
                      <strong className="text-stone-800">Security Implication:</strong> {st.vuln}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 4: SIMULATOR 3 - RSSI, PATH LOSS & ROAMING CALCULATOR          */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "rf-range-sim" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                    <Antenna size={14} />
                    <span>RF Path Loss &amp; Roaming Propagation Model</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    RSSI, SNR, Obstacle Attenuation &amp; Fast Roaming Calculator
                  </h3>
                </div>
                <div className="text-xs font-mono font-bold text-stone-600 bg-stone-100 px-3 py-1.5 rounded-xl border border-stone-200">
                  Noise Floor: -95 dBm
                </div>
              </div>

              {/* Slider Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div>
                  <label className="text-xs font-mono font-bold text-stone-700 block mb-1">
                    RF Frequency: {rfFrequency} GHz
                  </label>
                  <select
                    value={rfFrequency}
                    onChange={(e) => setRfFrequency(Number(e.target.value))}
                    className="w-full text-xs font-mono p-2.5 rounded-xl border border-stone-300 bg-white cursor-pointer"
                  >
                    <option value={2.4}>2.4 GHz (High Penetration)</option>
                    <option value={5.0}>5.0 GHz (Enterprise Standard)</option>
                    <option value={6.0}>6.0 GHz (Wi-Fi 6E/7)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono font-bold text-stone-700 block mb-1">
                    AP Transmit Power: {txPowerDbm} dBm ({Math.round(Math.pow(10, txPowerDbm / 10))} mW)
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="25"
                    value={txPowerDbm}
                    onChange={(e) => setTxPowerDbm(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono font-bold text-stone-700 block mb-1">
                    Distance to AP: {distanceMeters} Meters
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="45"
                    value={distanceMeters}
                    onChange={(e) => setDistanceMeters(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono font-bold text-stone-700 block mb-1">
                    Wall Obstacles:
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={obstacleType}
                      onChange={(e) => setObstacleType(e.target.value)}
                      className="w-2/3 text-xs font-mono p-2.5 rounded-xl border border-stone-300 bg-white"
                    >
                      <option value="none">Open Space (0 dB)</option>
                      <option value="drywall">Drywall (3.2 dB)</option>
                      <option value="brick">Brick Wall (6.5 dB)</option>
                      <option value="concrete">Reinforced Concrete (14 dB)</option>
                    </select>
                    <input
                      type="number"
                      min="0"
                      max="6"
                      value={obstacleCount}
                      onChange={(e) => setObstacleCount(Math.max(0, Number(e.target.value)))}
                      className="w-1/3 text-xs font-mono p-2.5 rounded-xl border border-stone-300 text-center"
                    />
                  </div>
                </div>
              </div>

              {/* Calculated Results Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="text-xs font-mono text-stone-500">Free-Space Path Loss</div>
                  <div className="text-xl font-black font-mono text-stone-900 mt-1">
                    {rfMetrics.fspl} dB
                  </div>
                  <div className="text-[10px] text-stone-500 mt-1">Wall Loss: +{rfMetrics.wallLoss} dB</div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="text-xs font-mono text-stone-500">Received Power (RSSI)</div>
                  <div className="text-xl font-black font-mono text-stone-900 mt-1">
                    {rfMetrics.rssi} dBm
                  </div>
                  <div className="text-[10px] text-stone-500 mt-1">Target: &gt; -67 dBm for VoIP</div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="text-xs font-mono text-stone-500">Signal-to-Noise (SNR)</div>
                  <div className="text-xl font-black font-mono text-stone-900 mt-1">
                    {rfMetrics.snr} dB
                  </div>
                  <div className={`text-[10px] font-bold mt-1 ${rfMetrics.qualityColor}`}>
                    {rfMetrics.linkQuality}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="text-xs font-mono text-stone-500">Modulation &amp; PHY Rate</div>
                  <div className="text-xl font-black font-mono text-stone-900 mt-1">
                    MCS {rfMetrics.mcsIndex}
                  </div>
                  <div className="text-[10px] text-stone-500 mt-1">
                    {rfMetrics.modulation} (~{rfMetrics.phyRateMbps} Mbps)
                  </div>
                </div>
              </div>

              {/* Roaming Diagnostic Verdict Box */}
              <div className="p-4 rounded-2xl bg-stone-900 text-white font-mono text-xs space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-stone-800">
                  <span className="text-stone-400 uppercase text-[10px] font-bold">
                    802.11k/v/r Client Roaming Status Indicator
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${rfMetrics.roamingTrigger ? "bg-amber-500/30 text-amber-300" : "bg-emerald-500/30 text-emerald-300"}`}>
                    {rfMetrics.roamingTrigger ? "ROAMING THRESHOLD REACHED" : "CONNECTED TO CURRENT AP"}
                  </span>
                </div>
                <div className="text-stone-300 text-[11px] leading-relaxed">
                  {rfMetrics.stickyClientRisk ? (
                    <span className="text-rose-400 font-bold">
                      CRITICAL STICKY CLIENT SYNDROME: RSSI is {rfMetrics.rssi} dBm. Link experiencing high retransmission rates and packet loss. If client lacks 802.11v BSS steering support, video and voice calls will drop!
                    </span>
                  ) : rfMetrics.roamingTrigger ? (
                    <span className="text-amber-300">
                      ROAMING ACTIVE: RSSI has dropped below -72 dBm. Client sends 802.11k Neighbor Report request to scan target channels and executes 802.11r Fast BSS Transition (&lt;50ms) to adjacent AP.
                    </span>
                  ) : (
                    <span>
                      STABLE ASSOCIATION: Strong link quality ({rfMetrics.snr} dB SNR). Client operating at highest MCS index with negligible retransmissions.
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 5: SIMULATOR 4 - ENTERPRISE WLAN SEGMENTATION & ACLS           */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "vlan-acl-sim" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                    <Split size={14} />
                    <span>WLAN Segmentation &amp; Zero-Trust ACL Sandbox</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    Multi-VLAN Traffic Injection &amp; Client Isolation Simulator
                  </h3>
                </div>
                <div className="text-xs font-mono font-bold text-stone-600 bg-stone-100 px-3 py-1.5 rounded-xl border border-stone-200">
                  Default Policy: DENY ALL
                </div>
              </div>

              {/* Source & Destination Selector */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="text-xs font-mono font-bold text-stone-700 block mb-1">
                    Select Traffic Origin (Source Device):
                  </label>
                  <select
                    value={trafficSource}
                    onChange={(e) => setTrafficSource(e.target.value)}
                    className="w-full text-xs font-mono p-2.5 rounded-xl border border-stone-300 bg-white cursor-pointer"
                  >
                    <option value="guest-client">Guest Visitor Smartphone (10.10.20.45 - VLAN 20)</option>
                    <option value="staff-laptop">Corporate Staff Laptop (10.10.10.12 - VLAN 10)</option>
                    <option value="iot-thermostat">Smart Thermostat / Sensor (10.10.30.8 - VLAN 30)</option>
                    <option value="admin-terminal">IT Administrator Terminal (10.10.40.5 - VLAN 40)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono font-bold text-stone-700 block mb-1">
                    Select Target Destination:
                  </label>
                  <select
                    value={trafficDest}
                    onChange={(e) => setTrafficDest(e.target.value)}
                    className="w-full text-xs font-mono p-2.5 rounded-xl border border-stone-300 bg-white cursor-pointer"
                  >
                    <option value="internet">Public Internet Server (142.250.190.46:443 HTTPS)</option>
                    <option value="staff-erp">Internal Staff ERP / Payroll (10.10.10.50:8443)</option>
                    <option value="ap-management">AP &amp; Switch SSH Admin Interface (10.10.40.1:22)</option>
                    <option value="iot-mqtt">Designated AWS IoT Telemetry Broker (52.214.10.2:8883)</option>
                    <option value="guest-peer">Peer Guest Smartphone on Same AP (10.10.20.99:445 SMB)</option>
                  </select>
                </div>
              </div>

              {/* Traffic Flow & Firewall Verdict Card */}
              <div className="p-6 rounded-2xl bg-stone-900 text-white font-mono space-y-4 mb-6">
                <div className="flex items-center justify-between pb-3 border-b border-stone-800 text-xs">
                  <span className="text-stone-400 uppercase font-bold">Firewall Enforcement Decision</span>
                  <span
                    className={`px-3 py-1 rounded-full font-bold text-xs ${
                      aclVerdict.allowed ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40" : "bg-rose-500/20 text-rose-400 border border-rose-500/40"
                    }`}
                  >
                    {aclVerdict.action}
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <span className="text-stone-400 w-28 shrink-0">Traffic Vector:</span>
                    <span className="text-stone-200">{aclVerdict.vlan}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-stone-400 w-28 shrink-0">Enforced Rule:</span>
                    <span className="text-amber-400 font-bold">{aclVerdict.firewallRule}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-stone-400 w-28 shrink-0">Security Rationale:</span>
                    <span className="text-stone-300 leading-relaxed">{aclVerdict.reason}</span>
                  </div>
                </div>
              </div>

              {/* 4 VLAN Architectural Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <div className="font-bold text-stone-900 font-mono">VLAN 10: Staff</div>
                  <div className="text-stone-500 mt-1 text-[11px]">802.1X EAP-TLS &bull; Internal Apps &bull; Full Internet</div>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <div className="font-bold text-stone-900 font-mono">VLAN 20: Guest</div>
                  <div className="text-stone-500 mt-1 text-[11px]">Client Isolation &bull; Drop RFC 1918 &bull; Internet Only</div>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <div className="font-bold text-stone-900 font-mono">VLAN 30: IoT</div>
                  <div className="text-stone-500 mt-1 text-[11px]">Private PSK &bull; Whitelisted Egress Only &bull; Zero Trust</div>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <div className="font-bold text-stone-900 font-mono">VLAN 40: Admin</div>
                  <div className="text-stone-500 mt-1 text-[11px]">Out-of-band &bull; No Over-the-air SSID &bull; SSH Only</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 6: SIMULATOR 5 - ROGUE AP & EVIL TWIN WIPS DETECTOR            */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "rogue-wips-sim" && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                    <ShieldAlert size={14} />
                    <span>Airspace Threat Defense &bull; WIPS Engine</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mt-1">
                    Rogue AP, Evil Twin &amp; Deauth Flood Detection Sandbox
                  </h3>
                </div>
                <button
                  onClick={() => setWipsMitigationEnabled(!wipsMitigationEnabled)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition cursor-pointer border ${
                    wipsMitigationEnabled
                      ? "bg-emerald-600 text-white border-emerald-700"
                      : "bg-stone-100 text-stone-700 border-stone-300 hover:bg-stone-200"
                  }`}
                >
                  {wipsMitigationEnabled ? "Automated WIPS Mitigation: ON" : "Automated WIPS Mitigation: OFF"}
                </button>
              </div>

              {/* Threat Scenario Selector */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {[
                  { id: "clean", label: "Clean Airspace" },
                  { id: "rogue-open", label: "Rogue AP on Switch" },
                  { id: "evil-twin", label: "Evil Twin SSID Clone" },
                  { id: "deauth-flood", label: "Deauthentication Flood" },
                ].map((sc) => (
                  <button
                    key={sc.id}
                    onClick={() => setWipsScenario(sc.id)}
                    className={`p-3 rounded-xl border text-xs font-bold font-mono transition text-left cursor-pointer ${
                      wipsScenario === sc.id
                        ? "bg-stone-900 text-white border-stone-900 shadow-sm"
                        : "bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100"
                    }`}
                  >
                    {sc.label}
                  </button>
                ))}
              </div>

              {/* Alert Status Banner */}
              <div className={`p-4 rounded-2xl border mb-6 ${wipsEvaluation.alertColor}`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold font-mono uppercase tracking-wider">
                    {wipsEvaluation.alertLevel}
                  </span>
                  <span className="text-xs font-mono font-bold">
                    Threat Risk: {wipsEvaluation.threatScore} / 100
                  </span>
                </div>
                <div className="text-xs leading-relaxed font-sans">
                  <strong>Detection Heuristic:</strong> {wipsEvaluation.detectionRule}
                </div>
                <div className="text-xs leading-relaxed font-sans mt-2 pt-2 border-t border-current/20">
                  <strong>Remediation Action:</strong> {wipsEvaluation.remediation}
                </div>
              </div>

              {/* Airspace Spectrum Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-stone-300 bg-stone-100/60 font-mono text-stone-700">
                      <th className="p-3">Advertised SSID</th>
                      <th className="p-3">BSSID (MAC)</th>
                      <th className="p-3">Hardware Vendor</th>
                      <th className="p-3">RSSI</th>
                      <th className="p-3">Security Mode</th>
                      <th className="p-3">Classification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-700 font-mono">
                    {wipsEvaluation.observedSignals.map((sig, idx) => (
                      <tr key={idx} className={sig.status.includes("ROGUE") || sig.status.includes("EVIL") || sig.status.includes("ATTACK") ? "bg-rose-50/70" : ""}>
                        <td className="p-3 font-bold">{sig.ssid}</td>
                        <td className="p-3">{sig.bssid}</td>
                        <td className="p-3">{sig.vendor}</td>
                        <td className="p-3">{sig.rssi} dBm</td>
                        <td className="p-3">{sig.security}</td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              sig.status.includes("Authorized") || sig.status.includes("Legitimate")
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-rose-100 text-rose-800 animate-pulse"
                            }`}
                          >
                            {sig.status}
                          </span>
                        </td>
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
                  Wireless Diagnostic Commands &amp; Packet Inspection Reference
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Linux Commands */}
                <div className="p-5 rounded-2xl bg-stone-900 text-white font-mono text-xs space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-stone-800 text-stone-400 text-[10px] uppercase font-bold">
                    <span>Linux Wireless Inspection (iw &amp; nmcli)</span>
                    <button
                      onClick={() =>
                        copyToClipboard(
                          `# Link quality and statistics\niw dev wlan0 link\niw dev wlan0 station dump\n\n# Rescan and display visible BSSIDs with security mode\nnmcli dev wifi list --rescan yes`,
                          "cli-linux"
                        )
                      }
                      className="text-stone-400 hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      {copiedCodeId === "cli-linux" ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                      <span>{copiedCodeId === "cli-linux" ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                  <pre className="text-stone-300 text-[11px] leading-relaxed overflow-x-auto whitespace-pre-wrap">
{`# 1. Query physical radio link status
$ iw dev wlan0 link
Connected to 00:1a:1e:11:22:33 (on wlan0)
    SSID: Prepspaces-Staff
    freq: 5180 (Channel 36)
    RX: 1849204 bytes (1420 packets)
    TX: 489201 bytes (820 packets)
    signal: -58 dBm
    tx bitrate: 1201.0 MBit/s HE-MCS 11 80MHz short GI

# 2. Rescan and display all visible BSSIDs
$ nmcli dev wifi list --rescan yes`}
                  </pre>
                </div>

                {/* Windows Commands */}
                <div className="p-5 rounded-2xl bg-stone-900 text-white font-mono text-xs space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-stone-800 text-stone-400 text-[10px] uppercase font-bold">
                    <span>Windows WLAN Diagnostics (netsh)</span>
                    <button
                      onClick={() =>
                        copyToClipboard(
                          `netsh wlan show interfaces\nnetsh wlan show networks mode=bssid\nnetsh wlan show wlanreport`,
                          "cli-win"
                        )
                      }
                      className="text-stone-400 hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      {copiedCodeId === "cli-win" ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                      <span>{copiedCodeId === "cli-win" ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                  <pre className="text-stone-300 text-[11px] leading-relaxed overflow-x-auto whitespace-pre-wrap">
{`# 1. Inspect interface details and PHY rate
C:\\> netsh wlan show interfaces
    Name                   : Wi-Fi
    State                  : connected
    SSID                   : Prepspaces-Staff
    BSSID                  : 00:1a:1e:11:22:33
    Radio type             : 802.11ax
    Authentication         : WPA3-Enterprise
    Cipher                 : CCMP
    Channel                : 36
    Receive rate (Mbps)    : 1201
    Transmit rate (Mbps)   : 1201
    Signal                 : 86% (-57 dBm)`}
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
                    Module 13 Examination: Wireless, Wi-Fi &amp; Mobile Networking
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
                    Enterprise Wireless Audit Checklist &amp; Report Generator
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-stone-600 bg-stone-100 px-3 py-1.5 rounded-xl border border-stone-200">
                    Audit Progress: {completedChecklistCount} / 9 Complete
                  </span>
                </div>
              </div>

              {/* 9-Point Interactive Checklist */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
                {[
                  { key: "secMode", label: "1. Wireless Security Mode", desc: "Verify WPA3 or hardened WPA2. Identify legacy WEP/TKIP." },
                  { key: "authPolicy", label: "2. Authentication Policy", desc: "Check passphrase entropy or 802.1X certificate validation." },
                  { key: "pmf", label: "3. Management Frame Protection", desc: "Confirm 802.11w (PMF: Required) is enabled." },
                  { key: "vlanMap", label: "4. SSID-to-VLAN Mapping", desc: "Confirm SSIDs correctly map to isolated VLANs (10, 20, 30)." },
                  { key: "guestIso", label: "5. Guest Client Isolation", desc: "Verify Layer 2 P2P client isolation blocks guest lateral scanning." },
                  { key: "iotRestrict", label: "6. IoT Micro-segmentation", desc: "Check that IoT devices cannot reach internal subnets." },
                  { key: "adminAccess", label: "7. Admin Interface Isolation", desc: "Confirm AP management interfaces are unexposed on Wi-Fi." },
                  { key: "apInventory", label: "8. Physical AP Inventory", desc: "Correlate visible BSSIDs against approved hardware whitelist." },
                  { key: "firmwareLog", label: "9. Firmware & Logging", desc: "Check firmware updates and centralized RADIUS logging." },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => toggleChecklist(item.key)}
                    className={`p-3.5 rounded-2xl border text-left transition cursor-pointer ${
                      checklist[item.key]
                        ? "bg-emerald-50/70 border-emerald-300 text-emerald-950"
                        : "bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold font-mono">{item.label}</span>
                      {checklist[item.key] ? (
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
                  <span>Markdown Wireless Security Assessment Report Template</span>
                  <button
                    onClick={() => copyToClipboard(wirelessAuditReportTemplate, "wireless-report")}
                    className="text-stone-300 hover:text-white flex items-center gap-1.5 cursor-pointer transition"
                  >
                    {copiedCodeId === "wireless-report" ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                    <span>{copiedCodeId === "wireless-report" ? "Report Copied" : "Copy Markdown"}</span>
                  </button>
                </div>
                <pre className="text-stone-300 text-[11px] leading-relaxed overflow-x-auto max-h-96 whitespace-pre-wrap">
                  {wirelessAuditReportTemplate}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* Footer Navigation Bar */}
        <div className="mt-10 pt-6 border-t border-[#e7e3da] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => {
              navigate("/learning/networks/application-layer");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#e7e3da] bg-white text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#ea580c] transition cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 12 — Application Protocols &amp; Web Networking</span>
          </button>

          <button
            onClick={() => {
              navigate("/learning/networks/switching");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 text-xs font-bold text-white hover:bg-orange-600 transition cursor-pointer"
          >
            <span>Next: Module 14 — Switching, VLANs &amp; Enterprise LAN</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
