import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
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
  Activity,
  Zap,
  Gauge,
  Sliders,
  SlidersHorizontal,
  Layers,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* COMPUTER NETWORKS & INTERNET ENGINEERING: MODULE 3                         */
/* Physical Layer and Data Transmission                                       */
/* MIT 6.02/6.033, Stanford CS144, UC Berkeley CS168, CMU 15-441, Princeton   */
/* -------------------------------------------------------------------------- */

export default function NetworkPhysical() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(3);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'shannon-calculator' | 'optical-budget' | 'line-coding' | 'diagnostics' | 'quiz' | 'report'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* INTERACTIVE CALCULATOR 1: NYQUIST & SHANNON CAPACITY CALCULATOR           */
  /* -------------------------------------------------------------------------- */
  const [channelBwMhz, setChannelBwMhz] = useState(20); // 20 MHz (e.g. Wi-Fi channel or copper band)
  const [snrDb, setSnrDb] = useState(25); // 25 dB
  const [pamLevels, setPamLevels] = useState(4); // 4 signaling levels (PAM-4)

  const capacityMetrics = useMemo(() => {
    const bwHz = channelBwMhz * 1000000;
    // Nyquist capacity: R_max = 2 * B * log2(M) in Mbps
    const bitsPerSymbol = Math.log2(pamLevels);
    const nyquistBps = 2 * bwHz * bitsPerSymbol;
    const nyquistMbps = (nyquistBps / 1000000).toFixed(1);

    // Linear SNR: SNR = 10^(SNR_dB / 10)
    const snrLinear = Math.pow(10, snrDb / 10);
    // Shannon capacity: C = B * log2(1 + SNR) in Mbps
    const shannonBps = bwHz * Math.log2(1 + snrLinear);
    const shannonMbps = (shannonBps / 1000000).toFixed(1);

    // Spectral efficiency in bps/Hz
    const spectralEfficiency = (shannonBps / bwHz).toFixed(2);

    return {
      bitsPerSymbol: bitsPerSymbol.toFixed(0),
      nyquistMbps,
      shannonMbps,
      snrLinear: snrLinear.toFixed(1),
      spectralEfficiency,
    };
  }, [channelBwMhz, snrDb, pamLevels]);

  /* -------------------------------------------------------------------------- */
  /* INTERACTIVE CALCULATOR 2: OPTICAL POWER BUDGET CALCULATOR                  */
  /* -------------------------------------------------------------------------- */
  const [txPowerDbm, setTxPowerDbm] = useState(-3.0); // 10GBASE-LR typical TX power
  const [fiberLengthKm, setFiberLengthKm] = useState(10.0); // 10 km
  const [attenuationPerKm, setAttenuationPerKm] = useState(0.35); // 0.35 dB/km @ 1310nm SMF
  const [connectorLossDb, setConnectorLossDb] = useState(1.0); // 2 connectors x 0.5 dB
  const [spliceLossDb, setSpliceLossDb] = useState(0.4); // 4 splices x 0.1 dB
  const [safetyMarginDb, setSafetyMarginDb] = useState(3.0); // 3 dB engineering margin
  const [rxSensitivityDbm, setRxSensitivityDbm] = useState(-14.4); // 10GBASE-LR RX sensitivity

  const opticalMetrics = useMemo(() => {
    const fiberLoss = fiberLengthKm * attenuationPerKm;
    const totalChannelLoss = fiberLoss + connectorLossDb + spliceLossDb + safetyMarginDb;
    const rxPowerDbm = txPowerDbm - (fiberLoss + connectorLossDb + spliceLossDb);
    const opticalPowerMargin = rxPowerDbm - rxSensitivityDbm;

    let linkStatus = "PASS";
    let statusColor = "text-emerald-700 bg-emerald-100 border-emerald-300";

    if (opticalPowerMargin < 0) {
      linkStatus = "FAIL (Optical Loss of Signal / Underpowered)";
      statusColor = "text-red-700 bg-red-100 border-red-300";
    } else if (opticalPowerMargin < safetyMarginDb) {
      linkStatus = "WARNING (Marginal Link Margin)";
      statusColor = "text-amber-700 bg-amber-100 border-amber-300";
    }

    return {
      fiberLoss: fiberLoss.toFixed(2),
      totalChannelLoss: totalChannelLoss.toFixed(2),
      rxPowerDbm: rxPowerDbm.toFixed(2),
      opticalPowerMargin: opticalPowerMargin.toFixed(2),
      linkStatus,
      statusColor,
    };
  }, [txPowerDbm, fiberLengthKm, attenuationPerKm, connectorLossDb, spliceLossDb, safetyMarginDb, rxSensitivityDbm]);

  /* -------------------------------------------------------------------------- */
  /* INTERACTIVE COMPONENT 3: LINE CODING WAVEFORM GENERATOR                    */
  /* -------------------------------------------------------------------------- */
  const [binarySequence, setBinarySequence] = useState("10110010");

  const binaryBits = useMemo(() => {
    return binarySequence
      .replace(/[^01]/g, "")
      .slice(0, 8)
      .split("")
      .map(Number);
  }, [binarySequence]);

  /* -------------------------------------------------------------------------- */
  /* INTERACTIVE COMPONENT 4: ETHTOOL PHYSICAL DIAGNOSTICS TERMINAL             */
  /* -------------------------------------------------------------------------- */
  const [activeEthtoolCmd, setActiveEthtoolCmd] = useState("ethtool");

  const ethtoolData = {
    ethtool: {
      cmd: "ethtool eth0",
      description: "Query interface driver, physical port type, supported link modes, auto-negotiation, and physical link state.",
      proves: "Proves physical link carrier detected (Link detected: yes), negotiated speed (1000Mb/s), duplex (Full), and port transceiver type (Twisted Pair).",
      doesNotProve: "Does not prove IP configuration or absence of Layer 2 CRC errors.",
      output: `Settings for eth0:
	Supported ports: [ TP ]
	Supported link modes:   10baseT/Half 10baseT/Full
	                        100baseT/Half 100baseT/Full
	                        1000baseT/Full
	Supported pause frame use: Symmetric
	Supports auto-negotiation: Yes
	Supported FEC modes: Not reported
	Advertised link modes:  10baseT/Half 10baseT/Full
	                        100baseT/Half 100baseT/Full
	                        1000baseT/Full
	Advertised pause frame use: Symmetric
	Advertised auto-negotiation: Yes
	Speed: 1000Mb/s
	Duplex: Full
	Auto-negotiation: on
	Port: Twisted Pair
	PHYAD: 1
	Transceiver: internal
	MDI-X: off (auto)
	Link detected: yes`,
    },
    counters: {
      cmd: "ethtool -S eth0 | grep -E 'error|drop|crc'",
      description: "Inspect low-level hardware ASIC error counters, dropped frames, and CRC/FCS checksum failures directly on the NIC.",
      proves: "Reveals physical cable corruption (rx_crc_errors), duplex mismatch collision runts (rx_frame_errors), and driver buffer exhaustion (rx_missed_errors).",
      doesNotProve: "Does not identify which specific cable segment or intermediate switch port caused the error.",
      output: `     rx_crc_errors: 0
     rx_frame_errors: 0
     rx_missed_errors: 0
     rx_length_errors: 0
     rx_over_errors: 0
     tx_aborted_errors: 0
     tx_carrier_errors: 0
     tx_fifo_errors: 0
     tx_heartbeat_errors: 0
     tx_window_errors: 0`,
    },
    dom: {
      cmd: "ethtool -m eth0",
      description: "Query SFP/SFP+ optical transceiver Digital Optical Monitoring (DOM/DDM) telemetry (TX/RX power, laser temperature, bias current).",
      proves: "Provides real-time optical power in dBm and mW to verify whether optical attenuation is within receiver operating bounds.",
      doesNotProve: "Only supported on optical SFP/SFP+ transceivers with I2C DDM capability; not available on copper RJ45.",
      output: `        Identifier                               : 0x03 (SFP)
        Extended identifier                      : 0x04 (GBIC/SFP defined AC-coupled)
        Connector                                : 0x07 (LC)
        Transceiver codes                        : 0x20 0x00 0x00 0x00 (10GBASE-LR)
        Encoding                                 : 0x06 (64B/66B)
        BR, Nominal                              : 10300MBd
        Rate identifier                          : 0x00 (unspecified)
        Laser wavelength                         : 1310nm
        Module temperature                       : 34.20 degrees C
        Module voltage                           : 3.2840 V
        Laser bias current                       : 32.120 mA
        Laser output power (TX)                  : 0.5210 mW / -2.83 dBm [Normal]
        Receiver signal average optical power (RX): 0.1240 mW / -9.07 dBm [Normal]
        Alarm/warning flags implemented          : Yes`,
    },
  };

  /* -------------------------------------------------------------------------- */
  /* INTERACTIVE COMPONENT 5: ASSESSMENT & QUIZ (10 QUESTIONS)                 */
  /* -------------------------------------------------------------------------- */
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "According to Nyquist's theorem for a noiseless channel with bandwidth B = 4 kHz and M = 16 signaling levels, what is the maximum theoretical bit rate?",
      options: [
        "16 kbps",
        "32 kbps",
        "64 kbps",
        "128 kbps",
      ],
      correctIndex: 1,
      explanation:
        "Nyquist formula: R_max = 2 * B * log2(M). Here, B = 4,000 Hz, and log2(16) = 4 bits/symbol. R_max = 2 * 4,000 * 4 = 32,000 bps = 32 kbps.",
    },
    {
      id: 2,
      question: "How does Shannon's capacity theorem fundamentally differ from Nyquist's signaling theorem?",
      options: [
        "Shannon's formula only works for optical fiber, while Nyquist works for copper.",
        "Shannon's theorem establishes the theoretical upper bound on transmission capacity in the presence of thermal Gaussian noise (SNR), whereas Nyquist assumes an idealized noiseless channel.",
        "Nyquist accounts for signal-to-noise ratio, while Shannon ignores noise.",
        "Shannon's formula calculates the physical cable length limit.",
      ],
      correctIndex: 1,
      explanation:
        "Nyquist determines how many symbols can be transmitted without inter-symbol interference on a noiseless channel. Shannon's formula (C = B * log2(1 + SNR)) defines the ultimate error-free information capacity dictated by thermodynamic thermal noise.",
    },
    {
      id: 3,
      question: "Why does Manchester encoding exhibit an effective transmission efficiency of only 50% compared to Non-Return-to-Zero (NRZ)?",
      options: [
        "It uses twice as much electrical voltage.",
        "It requires a transition in the middle of every bit interval (high-to-low for '1', low-to-high for '0') to ensure clock recovery, doubling the symbol rate (baud) relative to the bit rate.",
        "It drops every second bit as a parity check.",
        "It only transmits during half of the clock cycle.",
      ],
      correctIndex: 1,
      explanation:
        "Manchester line coding forces an explicit voltage transition at the exact center of every bit period. While this guarantees clock synchronization and eliminates DC baseline wander, it requires 2 baud per bit, cutting spectral efficiency to 50% (used in legacy 10BASE-T Ethernet).",
    },
    {
      id: 4,
      question: "What is the primary physical reason that Single-Mode Fiber (SMF) achieves significantly greater transmission distance and higher bandwidth than Multimode Fiber (MMF)?",
      options: [
        "SMF has a much wider core that allows multiple beams of light to bounce simultaneously.",
        "SMF has a microscopic core (~9 µm) that forces light to propagate along a single electromagnetic mode, completely eliminating modal dispersion.",
        "SMF is made of copper wire coated in glass.",
        "SMF uses electrical pulses instead of lasers.",
      ],
      correctIndex: 1,
      explanation:
        "Multimode fiber (50/62.5 µm core) allows light to travel along multiple optical paths (modes) that arrive at slightly different times, causing modal dispersion that smears pulses over distance. Single-mode fiber's narrow 9 µm core permits only a single optical path, eliminating modal dispersion and enabling reach exceeding 10–40 km.",
    },
    {
      id: 5,
      question: "In an optical link budget calculation, if the transmitter outputs -3 dBm, the total cable and connector loss is 8 dB, and the receiver sensitivity is -18 dBm, what is the optical power margin?",
      options: [
        "+7 dB (Healthy link margin)",
        "-7 dB (Link failure)",
        "+13 dB",
        "+3 dB",
      ],
      correctIndex: 0,
      explanation:
        "Received Optical Power P_rx = P_tx - Total_Loss = -3 dBm - 8 dB = -11 dBm. Optical Margin = P_rx - P_rx_sens = -11 dBm - (-18 dBm) = +7 dB. Since margin > 3 dB, the link is healthy.",
    },
    {
      id: 6,
      question: "What symptom occurs on an Ethernet link when one end is manually hardcoded to Full-Duplex while the other end is configured for Auto-Negotiation?",
      options: [
        "The link operates at 10 Gbps automatically.",
        "A duplex mismatch: the auto-negotiating side defaults to Half-Duplex because it receives no FLP negotiation pulses, causing massive collision errors and packet loss under load.",
        "Both sides negotiate Gigabit speeds with zero errors.",
        "The network switch catches fire.",
      ],
      correctIndex: 1,
      explanation:
        "When one side is forced to full-duplex, it disables auto-negotiation pulses. The other side falls back to half-duplex per IEEE 802.3 standards. The full-duplex side transmits anytime, causing the half-duplex side to register 'Late Collisions' and discard frames.",
    },
    {
      id: 7,
      question: "Which Ethernet twisted-pair copper standard requires all four pairs of wires to transmit simultaneously in full-duplex using PAM-5 multilevel signaling and hybrid echo cancellation?",
      options: [
        "10BASE-T",
        "100BASE-TX",
        "1000BASE-T (Gigabit Ethernet)",
        "Token Ring",
      ],
      correctIndex: 2,
      explanation:
        "1000BASE-T achieves 1000 Mbps over Cat5e copper by using all four twisted pairs simultaneously in both directions (dual-duplex). Each pair carries 250 Mbps using 5-level pulse amplitude modulation (PAM-5) with sophisticated DSP hybrid echo cancellers.",
    },
    {
      id: 8,
      question: "What does an increasing counter of 'rx_crc_errors' in 'ethtool -S eth0' indicate to a network engineer?",
      options: [
        "An invalid IP address was entered in /etc/network/interfaces.",
        "Physical-layer transmission corruption: frames are arriving at the NIC with bit flips caused by damaged copper patch cords, electromagnetic interference, or dirty fiber transceivers.",
        "The web server process has crashed.",
        "A DNS amplification attack is underway.",
      ],
      correctIndex: 1,
      explanation:
        "CRC errors occur when the hardware Frame Check Sequence calculated by the receiver does not match the trailer attached by the sender. This is a definitive signature of physical layer signal degradation: faulty cables, severe crosstalk, or marginal optical power.",
    },
    {
      id: 9,
      question: "Why do modern 100G and 400G Ethernet physical standards (such as 100GBASE-SR4 or 400GBASE-FR4) adopt PAM-4 modulation instead of traditional NRZ?",
      options: [
        "PAM-4 eliminates the need for fiber optics.",
        "PAM-4 encodes 2 bits per symbol (4 electrical voltage levels), doubling the effective bit rate over the same channel symbol rate (baud) without doubling the required high-frequency electrical bandwidth.",
        "PAM-4 allows Ethernet to run over telephone lines.",
        "PAM-4 completely eliminates thermal noise.",
      ],
      correctIndex: 1,
      explanation:
        "In NRZ (PAM-2), each symbol carries 1 bit. In PAM-4, each symbol has 4 discrete amplitude levels, carrying 2 bits per symbol. This halves the required Nyquist bandwidth for a given bit rate, enabling 50 Gbps per optical lane at 25 Gbaud.",
    },
    {
      id: 10,
      question: "What is the critical distinction between Error Detection (e.g. Ethernet CRC-32) and Forward Error Correction (FEC)?",
      options: [
        "Error detection is performed in software, while FEC is performed in Python.",
        "Error detection only identifies that bits were corrupted and drops the frame, whereas FEC embeds redundant algorithmic parity bits allowing the receiver to mathematically reconstruct and correct bit errors without retransmission.",
        "Error detection eliminates the need for checksums.",
        "FEC guarantees infinite bandwidth.",
      ],
      correctIndex: 1,
      explanation:
        "CRC-32 is purely detective: if a bit error occurs, the frame is discarded and higher layers (like TCP) must retransmit it. FEC (such as Reed-Solomon RS-FEC) adds structured redundant symbols so the receiver can mathematically correct bit errors on the fly, essential for ultra-high-speed 100G/400G links.",
    },
  ];

  const handleSelectOption = (questionId, optionIdx) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [questionId]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col font-sans selection:bg-[#f97316] selection:text-white">
      {/* Top Global Navigation Bar */}
      <ModuleNav
        track="networks"
        currentModuleId="physical"
        showAiTutor={showAiTutor}
        onAiTutorToggle={() => setShowAiTutor(!showAiTutor)}
        aiTutorLabel="Networking Mentor"
      />

      <div className="flex-1 flex flex-col max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Module Header & University Alignment Badge */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200/80 bg-orange-50/90 px-3 py-1 font-mono text-[11px] font-bold text-[#ea580c] uppercase tracking-wider">
              <Network size={12} className="text-[#f97316]" />
              Course: Computer Networks & Internet Engineering
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-white/80 px-2.5 py-1 text-[11px] font-bold text-stone-600">
              Module 3 of 24
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-white/80 px-2.5 py-1 text-[11px] font-bold text-stone-600">
              Signal Engineering · Copper, Fiber & Wireless
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#18181b]">
            Physical Layer and Data Transmission
          </h1>
          <p className="mt-2 text-sm md:text-base text-stone-600 max-w-4xl leading-relaxed">
            Explore the physical mechanisms that turn abstract digital bits into electrical voltages, optical photons, and electromagnetic radio waves. Master Nyquist and Shannon capacity limits, optical power budgets, line encoding schemes, and transceiver diagnostics.
          </p>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex items-center gap-2 border-b border-[#e7e3da] pb-3 mb-6 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab("theory")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "theory"
                ? "bg-[#18181b] text-white shadow-xs"
                : "bg-white/80 text-stone-600 hover:bg-white hover:text-stone-900 border border-[#e7e3da]"
            }`}
          >
            <BookOpen size={14} />
            <span>Curriculum & Deep Theory</span>
          </button>

          <button
            onClick={() => setActiveTab("shannon-calculator")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "shannon-calculator"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-white/80 text-stone-600 hover:bg-white hover:text-stone-900 border border-[#e7e3da]"
            }`}
          >
            <Gauge size={14} />
            <span>Nyquist & Shannon Calculator</span>
          </button>

          <button
            onClick={() => setActiveTab("optical-budget")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "optical-budget"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-white/80 text-stone-600 hover:bg-white hover:text-stone-900 border border-[#e7e3da]"
            }`}
          >
            <Zap size={14} />
            <span>Optical Link Budget Calculator</span>
          </button>

          <button
            onClick={() => setActiveTab("line-coding")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "line-coding"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-white/80 text-stone-600 hover:bg-white hover:text-stone-900 border border-[#e7e3da]"
            }`}
          >
            <Activity size={14} />
            <span>Line Coding Waveform Simulator</span>
          </button>

          <button
            onClick={() => setActiveTab("diagnostics")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "diagnostics"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-white/80 text-stone-600 hover:bg-white hover:text-stone-900 border border-[#e7e3da]"
            }`}
          >
            <Terminal size={14} />
            <span>Ethtool Physical Diagnostics</span>
          </button>

          <button
            onClick={() => setActiveTab("quiz")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "quiz"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-white/80 text-stone-600 hover:bg-white hover:text-stone-900 border border-[#e7e3da]"
            }`}
          >
            <Award size={14} />
            <span>Assessment & Quiz (10 Questions)</span>
          </button>

          <button
            onClick={() => setActiveTab("report")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "report"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-white/80 text-stone-600 hover:bg-white hover:text-stone-900 border border-[#e7e3da]"
            }`}
          >
            <FileText size={14} />
            <span>Physical Lab Report Template</span>
          </button>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* TAB 1: CURRICULUM & DEEP THEORY (SECTIONS 3.1 - 3.11)              */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "theory" && (
          <div className="space-y-8">
            {/* Section 3.1: Fundamentals of Data Transmission */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Radio size={14} />
                <span>3.1 — Fundamentals of Data Transmission</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Bits, Symbols, Baud Rate & Physical Channels
              </h2>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                At the physical layer, abstract mathematical binary digits (bits) must be mapped into continuous physical waveforms—electromagnetic variations in voltage, light intensity, or radio frequency phase.
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl border border-stone-200/80 bg-stone-50/70 p-4">
                  <span className="font-mono text-xs font-bold text-[#ea580c] block mb-1">Bit (Information)</span>
                  <p className="text-[11px] text-stone-600 leading-relaxed">
                    The fundamental binary unit of information (0 or 1). Bit rate is measured in bits per second (bps, Mbps, Gbps).
                  </p>
                </div>
                <div className="rounded-2xl border border-stone-200/80 bg-stone-50/70 p-4">
                  <span className="font-mono text-xs font-bold text-[#ea580c] block mb-1">Symbol (Signaling State)</span>
                  <p className="text-[11px] text-stone-600 leading-relaxed">
                    A distinct physical signaling state (voltage level, phase shift, frequency pulse). Symbol rate is measured in Baud (Bd).
                  </p>
                </div>
                <div className="rounded-2xl border border-stone-200/80 bg-stone-50/70 p-4">
                  <span className="font-mono text-xs font-bold text-[#ea580c] block mb-1">Bits Per Symbol ($b$)</span>
                  <p className="text-[11px] text-stone-600 leading-relaxed">
                    For M discrete physical signaling states, b = log2(M). For PAM-4 (M = 4), each symbol encodes 2 bits (log2(4) = 2).
                  </p>
                </div>
                <div className="rounded-2xl border border-stone-200/80 bg-stone-50/70 p-4">
                  <span className="font-mono text-xs font-bold text-[#ea580c] block mb-1">Duplex Modes</span>
                  <p className="text-[11px] text-stone-600 leading-relaxed">
                    Simplex (unidirectional), Half-Duplex (bidirectional alternating; shared medium), and Full-Duplex (simultaneous TX/RX).
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3.3: Theoretical Capacity Limits */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Gauge size={14} />
                <span>3.3 — Bit Rate, Bandwidth & Channel Capacity</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Nyquist's Noiseless Bound vs. Shannon's Thermodynamic Limit
              </h2>

              <div className="mt-5 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-bold text-stone-900">Nyquist Capacity Formula (Noiseless)</h3>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                      Signaling Bound
                    </span>
                  </div>
                  <div className="p-3 my-2 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs text-center">
                    R_max = 2 × B × log2(M)
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Establishes the maximum symbol transmission rate through an ideal noiseless low-pass filter of bandwidth $B$ without Inter-Symbol Interference (ISI). Increasing data rate requires higher modulation levels ($M$).
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-bold text-stone-900">Shannon Capacity Formula (Noisy Channel)</h3>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      Thermodynamic Limit
                    </span>
                  </div>
                  <div className="p-3 my-2 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs text-center">
                    C = B × log2(1 + SNR)
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Determines the ultimate error-free information capacity in the presence of Additive White Gaussian Noise (AWGN). You cannot achieve error-free transmission beyond $C$ regardless of encoding or modulation complexity.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3.4: Transmission Media (Copper, Fiber, Wireless) */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Layers size={14} />
                <span>3.4 — Transmission Media Engineering</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Physical Media Trade-offs: Copper vs. Fiber vs. Wireless
              </h2>

              <div className="mt-5 overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-100/70 font-mono text-stone-700">
                      <th className="py-2.5 px-3">Medium</th>
                      <th className="py-2.5 px-3">Physical Mechanism</th>
                      <th className="py-2.5 px-3">Max Standard Reach</th>
                      <th className="py-2.5 px-3">Key Constraints</th>
                      <th className="py-2.5 px-3">Primary Use Cases</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-stone-900">Cat6A Twisted Pair Copper</td>
                      <td className="py-2.5 px-3">Balanced differential voltages across 4 twisted pairs</td>
                      <td className="py-2.5 px-3">100 meters (10 Gbps)</td>
                      <td className="py-2.5 px-3">Attenuation, NEXT/FEXT crosstalk, EMI interference</td>
                      <td className="py-2.5 px-3">Enterprise workstations, wall drops, patch cords</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-stone-900">Multimode Fiber (OM4 MMF)</td>
                      <td className="py-2.5 px-3">50 µm core, 850nm VCSEL laser pulses</td>
                      <td className="py-2.5 px-3">400m @ 10G, 100m @ 100G</td>
                      <td className="py-2.5 px-3">Modal dispersion, connector insertion loss</td>
                      <td className="py-2.5 px-3">Data center top-of-rack to spine uplinks</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-stone-900">Single-Mode Fiber (OS2 SMF)</td>
                      <td className="py-2.5 px-3">9 µm core, 1310nm / 1550nm DFB laser</td>
                      <td className="py-2.5 px-3">10 km to 80+ km</td>
                      <td className="py-2.5 px-3">Chromatic dispersion, transceiver cost, laser safety</td>
                      <td className="py-2.5 px-3">Campus backbones, metro rings, subsea Internet cables</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-stone-900">Wi-Fi 6E/7 (802.11ax/be)</td>
                      <td className="py-2.5 px-3">Radio waves (2.4 GHz, 5 GHz, 6 GHz bands)</td>
                      <td className="py-2.5 px-3">10m - 50m indoor</td>
                      <td className="py-2.5 px-3">Path loss, obstacle absorption, CSMA/CA airtime contention</td>
                      <td className="py-2.5 px-3">Mobile phones, laptops, IoT edge devices</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Safety Warning */}
              <div className="mt-5 rounded-2xl border border-red-200 bg-red-50/50 p-4 text-xs flex items-start gap-3">
                <AlertTriangle size={18} className="text-red-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-red-950 font-bold block mb-0.5">Laser Radiation Safety Warning:</strong>
                  <span className="text-stone-700">
                    Never stare directly into optical fiber connectors or live SFP transceivers. Single-mode and multimode optical lasers operate in the infrared spectrum (850nm, 1310nm, 1550nm) and are completely invisible to the human eye, but cause instantaneous, irreversible retinal burns. Always use an optical power meter or digital inspection microscope.
                  </span>
                </div>
              </div>
            </section>

            {/* Section 3.6: Line Coding Schemes */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Activity size={14} />
                <span>3.6 — Line Coding & Ethernet Signaling</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Mapping Digital Bits to Voltage Waveforms
              </h2>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-xs">
                  <h4 className="font-bold text-stone-900 mb-1">NRZ-L (Non-Return to Zero)</h4>
                  <p className="text-stone-600 leading-relaxed">
                    High voltage represents binary 1; low voltage represents 0. Simple, but long consecutive runs of 0s or 1s cause receiver clock drift and DC baseline wander.
                  </p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-xs">
                  <h4 className="font-bold text-stone-900 mb-1">Manchester Encoding</h4>
                  <p className="text-stone-600 leading-relaxed">
                    Guaranteed transition at the center of every bit interval. Provides perfect self-clocking and zero DC bias, but requires 2 baud per bit (10BASE-T).
                  </p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-xs">
                  <h4 className="font-bold text-stone-900 mb-1">8b/10b & 64b/66b Block Coding</h4>
                  <p className="text-stone-600 leading-relaxed">
                    Maps 8-bit bytes to 10-bit symbols (or 64 bits to 66 bits) ensuring high transition density for clock recovery while adding minimal overhead (1000BASE-X, 10GBASE-R).
                  </p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-xs">
                  <h4 className="font-bold text-stone-900 mb-1">PAM-4 (Pulse Amplitude Mod)</h4>
                  <p className="text-stone-600 leading-relaxed">
                    Uses 4 distinct voltage levels (-3, -1, +1, +3) to encode 2 bits per symbol. Doubling bit rate without doubling bandwidth; used in 100G/400G and 10GBASE-T.
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 2: NYQUIST & SHANNON CAPACITY CALCULATOR                       */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "shannon-calculator" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                <Gauge size={14} />
                <span>Information Theory Simulator</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Nyquist vs. Shannon Channel Capacity Calculator
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-stone-600">
                Adjust channel bandwidth, signal-to-noise ratio (SNR in dB), and modulation levels to compare theoretical noiseless signaling vs. thermodynamic noisy channel limits.
              </p>
            </div>

            {/* Sliders */}
            <div className="grid gap-6 sm:grid-cols-3 p-5 rounded-2xl bg-stone-50 border border-stone-200">
              <div>
                <div className="flex justify-between text-xs font-bold text-stone-800 mb-1">
                  <span>Channel Bandwidth ($B$):</span>
                  <span className="font-mono text-[#ea580c]">{channelBwMhz} MHz</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="160"
                  step="1"
                  value={channelBwMhz}
                  onChange={(e) => setChannelBwMhz(Number(e.target.value))}
                  className="w-full accent-[#ea580c]"
                />
                <span className="text-[10px] text-stone-500">20/40/80/160 MHz Wi-Fi or copper band</span>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-stone-800 mb-1">
                  <span>Signal-to-Noise Ratio (SNR):</span>
                  <span className="font-mono text-[#ea580c]">{snrDb} dB</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="45"
                  step="1"
                  value={snrDb}
                  onChange={(e) => setSnrDb(Number(e.target.value))}
                  className="w-full accent-[#ea580c]"
                />
                <span className="text-[10px] text-stone-500">Linear Ratio = {capacityMetrics.snrLinear} : 1</span>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-stone-800 mb-1">
                  <span>Modulation Levels ($M$):</span>
                  <span className="font-mono text-[#ea580c]">{pamLevels} Levels ({capacityMetrics.bitsPerSymbol} bits/sym)</span>
                </div>
                <select
                  value={pamLevels}
                  onChange={(e) => setPamLevels(Number(e.target.value))}
                  className="w-full p-2 rounded-xl border border-stone-300 bg-white text-xs font-bold text-stone-800"
                >
                  <option value={2}>M = 2 (Binary / NRZ - 1 bit/sym)</option>
                  <option value={4}>M = 4 (PAM-4 / QPSK - 2 bits/sym)</option>
                  <option value={8}>M = 8 (PAM-8 / 8-PSK - 3 bits/sym)</option>
                  <option value={16}>M = 16 (16-QAM - 4 bits/sym)</option>
                  <option value={64}>M = 64 (64-QAM - 6 bits/sym)</option>
                  <option value={256}>M = 256 (256-QAM - 8 bits/sym)</option>
                </select>
                <span className="text-[10px] text-stone-500 mt-1 block">Modulation complexity</span>
              </div>
            </div>

            {/* Capacity Output Cards */}
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="p-4 rounded-2xl border border-blue-200 bg-blue-50/50">
                <span className="text-[10px] font-mono uppercase text-blue-900 font-bold">Nyquist Noiseless Capacity</span>
                <div className="text-2xl font-black text-blue-700 font-mono mt-1">
                  {capacityMetrics.nyquistMbps} Mbps
                </div>
                <p className="text-[11px] text-stone-600 mt-1 font-mono">
                  R_max = 2 × {channelBwMhz} MHz × {capacityMetrics.bitsPerSymbol} bits
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-emerald-200 bg-emerald-50/50">
                <span className="text-[10px] font-mono uppercase text-emerald-900 font-bold">Shannon Noisy Limit</span>
                <div className="text-2xl font-black text-emerald-700 font-mono mt-1">
                  {capacityMetrics.shannonMbps} Mbps
                </div>
                <p className="text-[11px] text-stone-600 mt-1 font-mono">
                  C = {channelBwMhz} MHz × log2(1 + {capacityMetrics.snrLinear})
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-orange-200 bg-orange-50/50">
                <span className="text-[10px] font-mono uppercase text-orange-900 font-bold">Spectral Efficiency</span>
                <div className="text-2xl font-black text-[#ea580c] font-mono mt-1">
                  {capacityMetrics.spectralEfficiency} bps/Hz
                </div>
                <p className="text-[11px] text-stone-600 mt-1">
                  Actual throughput achieved per Hertz of spectrum
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 3: OPTICAL LINK POWER BUDGET CALCULATOR                        */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "optical-budget" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                <Zap size={14} />
                <span>Fiber Optics Engineering</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Optical Power Budget & Link Margin Calculator
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-stone-600">
                Calculate end-to-end fiber attenuation, connector losses, splice degradation, and receiver operating margin to guarantee carrier-grade link reliability.
              </p>
            </div>

            {/* Inputs Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 p-5 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
              <div>
                <span className="font-bold text-stone-800 block mb-1">Transmitter Output Power ($P_{tx}$):</span>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    step="0.5"
                    value={txPowerDbm}
                    onChange={(e) => setTxPowerDbm(Number(e.target.value))}
                    className="w-full p-2 rounded-xl border border-stone-300 bg-white font-mono"
                  />
                  <span className="font-mono text-stone-500">dBm</span>
                </div>
                <span className="text-[10px] text-stone-500">Typical 10G-LR = -3 dBm</span>
              </div>

              <div>
                <span className="font-bold text-stone-800 block mb-1">Fiber Distance:</span>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    step="0.5"
                    value={fiberLengthKm}
                    onChange={(e) => setFiberLengthKm(Number(e.target.value))}
                    className="w-full p-2 rounded-xl border border-stone-300 bg-white font-mono"
                  />
                  <span className="font-mono text-stone-500">km</span>
                </div>
                <span className="text-[10px] text-stone-500">Total optical run length</span>
              </div>

              <div>
                <span className="font-bold text-stone-800 block mb-1">Fiber Attenuation Coefficient:</span>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    step="0.05"
                    value={attenuationPerKm}
                    onChange={(e) => setAttenuationPerKm(Number(e.target.value))}
                    className="w-full p-2 rounded-xl border border-stone-300 bg-white font-mono"
                  />
                  <span className="font-mono text-stone-500">dB/km</span>
                </div>
                <span className="text-[10px] text-stone-500">0.35 dB/km @ 1310nm SMF</span>
              </div>

              <div>
                <span className="font-bold text-stone-800 block mb-1">Connector Loss:</span>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    step="0.2"
                    value={connectorLossDb}
                    onChange={(e) => setConnectorLossDb(Number(e.target.value))}
                    className="w-full p-2 rounded-xl border border-stone-300 bg-white font-mono"
                  />
                  <span className="font-mono text-stone-500">dB</span>
                </div>
                <span className="text-[10px] text-stone-500">~0.5 dB per mated pair</span>
              </div>

              <div>
                <span className="font-bold text-stone-800 block mb-1">Splice Loss:</span>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    step="0.1"
                    value={spliceLossDb}
                    onChange={(e) => setSpliceLossDb(Number(e.target.value))}
                    className="w-full p-2 rounded-xl border border-stone-300 bg-white font-mono"
                  />
                  <span className="font-mono text-stone-500">dB</span>
                </div>
                <span className="text-[10px] text-stone-500">~0.1 dB per fusion splice</span>
              </div>

              <div>
                <span className="font-bold text-stone-800 block mb-1">Receiver Sensitivity (P_rx_sens):</span>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    step="0.5"
                    value={rxSensitivityDbm}
                    onChange={(e) => setRxSensitivityDbm(Number(e.target.value))}
                    className="w-full p-2 rounded-xl border border-stone-300 bg-white font-mono"
                  />
                  <span className="font-mono text-stone-500">dBm</span>
                </div>
                <span className="text-[10px] text-stone-500">Minimum detectable power (-14.4 dBm)</span>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="p-4 rounded-2xl border border-stone-200 bg-white">
                <span className="text-[10px] font-mono uppercase text-stone-500 font-bold">Fiber Attenuation Loss</span>
                <div className="text-xl font-extrabold text-stone-900 font-mono mt-1">
                  {opticalMetrics.fiberLoss} dB
                </div>
                <p className="text-[11px] text-stone-500 mt-1">{fiberLengthKm} km × {attenuationPerKm} dB/km</p>
              </div>

              <div className="p-4 rounded-2xl border border-stone-200 bg-white">
                <span className="text-[10px] font-mono uppercase text-stone-500 font-bold">Received Power (P_rx)</span>
                <div className="text-xl font-extrabold text-blue-600 font-mono mt-1">
                  {opticalMetrics.rxPowerDbm} dBm
                </div>
                <p className="text-[11px] text-stone-500 mt-1">Power reaching receiver detector</p>
              </div>

              <div className="p-4 rounded-2xl border border-stone-200 bg-white">
                <span className="text-[10px] font-mono uppercase text-stone-500 font-bold">Optical Power Margin</span>
                <div className="text-xl font-extrabold text-emerald-600 font-mono mt-1">
                  {opticalMetrics.opticalPowerMargin} dB
                </div>
                <p className="text-[11px] text-stone-500 mt-1 font-mono">P_rx - P_rx_sens (Safety cushion)</p>
              </div>

              <div className={`p-4 rounded-2xl border ${opticalMetrics.statusColor}`}>
                <span className="text-[10px] font-mono uppercase font-bold">Link Feasibility Status</span>
                <div className="text-sm font-black font-mono mt-1">{opticalMetrics.linkStatus}</div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 4: LINE CODING WAVEFORM SIMULATOR                              */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "line-coding" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                <Activity size={14} />
                <span>Physical Signaling Simulator</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Line Coding Waveform Generator & Comparison
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-stone-600">
                Type an 8-bit binary pattern to compare how Non-Return-to-Zero (NRZ), Manchester, and PAM-4 generate physical electrical transitions.
              </p>
            </div>

            {/* Input Form */}
            <div className="flex flex-wrap items-center gap-3 p-4 rounded-2xl bg-stone-50 border border-stone-200">
              <span className="text-xs font-bold text-stone-800">Binary Bitstream (8 bits):</span>
              <input
                type="text"
                maxLength={8}
                value={binarySequence}
                onChange={(e) => setBinarySequence(e.target.value)}
                className="p-2 rounded-xl border border-stone-300 bg-white font-mono text-sm tracking-widest text-[#ea580c] font-black w-36 text-center"
              />
              <div className="flex gap-1.5">
                {["10110010", "11110000", "10101010", "00000000"].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setBinarySequence(preset)}
                    className="px-2.5 py-1 rounded-lg border border-stone-200 bg-white font-mono text-[10px] text-stone-600 hover:border-orange-300 hover:text-[#ea580c] cursor-pointer"
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>

            {/* Waveform Displays */}
            <div className="space-y-4">
              {/* NRZ-L Waveform */}
              <div className="p-4 rounded-2xl border border-stone-200 bg-white space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-stone-900">
                  <span>1. NRZ-L (Non-Return to Zero Level)</span>
                  <span className="text-[10px] font-mono text-stone-500">1 bit / symbol · Voltage: +V for '1', 0V for '0'</span>
                </div>
                <div className="grid grid-cols-8 gap-1 p-2 rounded-xl bg-stone-900 text-center font-mono text-xs">
                  {binaryBits.map((b, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <span className="text-[10px] text-stone-400 mb-1">{b}</span>
                      <div
                        className={`w-full h-8 rounded-md transition-all flex items-center justify-center font-bold text-[10px] ${
                          b === 1 ? "bg-emerald-500 text-white" : "bg-stone-800 text-stone-500"
                        }`}
                      >
                        {b === 1 ? "+V" : "0V"}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-stone-500">
                  <strong>Risk:</strong> Notice consecutive 0s or 1s cause flat voltage (DC baseline wander and clock loss).
                </p>
              </div>

              {/* Manchester Waveform */}
              <div className="p-4 rounded-2xl border border-stone-200 bg-white space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-stone-900">
                  <span>2. Manchester Encoding (10BASE-T Ethernet)</span>
                  <span className="text-[10px] font-mono text-stone-500">2 baud / bit · Transition in center of every bit</span>
                </div>
                <div className="grid grid-cols-8 gap-1 p-2 rounded-xl bg-stone-900 text-center font-mono text-xs">
                  {binaryBits.map((b, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <span className="text-[10px] text-stone-400 mb-1">{b}</span>
                      <div className="w-full flex h-8 rounded-md overflow-hidden text-[9px] font-bold">
                        {b === 1 ? (
                          <>
                            <div className="w-1/2 bg-blue-500 text-white flex items-center justify-center">+V</div>
                            <div className="w-1/2 bg-stone-800 text-stone-400 flex items-center justify-center">0V</div>
                          </>
                        ) : (
                          <>
                            <div className="w-1/2 bg-stone-800 text-stone-400 flex items-center justify-center">0V</div>
                            <div className="w-1/2 bg-blue-500 text-white flex items-center justify-center">+V</div>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-stone-500">
                  <strong>Benefit:</strong> Every bit has a voltage transition at the center, ensuring the receiver never loses clock synchronization.
                </p>
              </div>

              {/* PAM-4 Multilevel Waveform */}
              <div className="p-4 rounded-2xl border border-stone-200 bg-white space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-stone-900">
                  <span>3. PAM-4 (4-Level Pulse Amplitude Modulation — 100G/400G Ethernet)</span>
                  <span className="text-[10px] font-mono text-stone-500">2 bits per symbol · Levels: 00(-3V), 01(-1V), 10(+1V), 11(+3V)</span>
                </div>
                <div className="grid grid-cols-4 gap-2 p-2 rounded-xl bg-stone-900 text-center font-mono text-xs">
                  {[0, 2, 4, 6].map((idx) => {
                    const pair = `${binaryBits[idx] !== undefined ? binaryBits[idx] : 0}${
                      binaryBits[idx + 1] !== undefined ? binaryBits[idx + 1] : 0
                    }`;
                    let levelLabel = "+3V (11)";
                    let levelColor = "bg-purple-500";
                    if (pair === "10") {
                      levelLabel = "+1V (10)";
                      levelColor = "bg-purple-600";
                    } else if (pair === "01") {
                      levelLabel = "-1V (01)";
                      levelColor = "bg-stone-700";
                    } else if (pair === "00") {
                      levelLabel = "-3V (00)";
                      levelColor = "bg-stone-800";
                    }

                    return (
                      <div key={idx} className="flex flex-col items-center">
                        <span className="text-[10px] text-stone-400 mb-1">Bits: {pair}</span>
                        <div
                          className={`w-full h-8 rounded-md flex items-center justify-center font-bold text-white text-[10px] ${levelColor}`}
                        >
                          {levelLabel}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <p className="text-[11px] text-stone-500">
                  <strong>Efficiency:</strong> Groups 8 bits into only 4 physical symbols, halving the symbol rate needed to transmit the data.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 5: ETHTOOL PHYSICAL DIAGNOSTICS TERMINAL                       */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "diagnostics" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                <Terminal size={14} />
                <span>Physical Triage Terminal</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Linux Ethtool & Hardware ASIC Telemetry
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-stone-600">
                Inspect physical interface carrier status, hardware CRC error counters, and optical transceiver DOM (Digital Optical Monitoring) power levels.
              </p>
            </div>

            {/* Selector */}
            <div className="flex flex-wrap gap-2">
              {Object.keys(ethtoolData).map((k) => (
                <button
                  key={k}
                  onClick={() => setActiveEthtoolCmd(k)}
                  className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
                    activeEthtoolCmd === k
                      ? "bg-[#18181b] text-white shadow-xs"
                      : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                  }`}
                >
                  {ethtoolData[k].cmd.split(" ")[0]} ({k})
                </button>
              ))}
            </div>

            {/* Terminal Window */}
            <div className="rounded-2xl border border-stone-800 bg-[#18181b] p-5 font-mono text-xs text-stone-200 space-y-4 shadow-lg">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <div className="flex items-center gap-2 text-stone-400">
                  <span className="h-3 w-3 rounded-full bg-red-500 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-amber-500 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500 inline-block" />
                  <span className="ml-2 text-xs font-bold text-stone-300">ethtool — Physical Layer Diagnostics</span>
                </div>
                <button
                  onClick={() => copyCode(ethtoolData[activeEthtoolCmd].cmd, "ethtool-copy")}
                  className="flex items-center gap-1 text-[11px] text-stone-400 hover:text-white cursor-pointer"
                >
                  {copiedCodeId === "ethtool-copy" ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                  <span>Copy Command</span>
                </button>
              </div>

              <div className="text-emerald-400 font-bold">$ {ethtoolData[activeEthtoolCmd].cmd}</div>

              <pre className="overflow-x-auto text-stone-300 whitespace-pre leading-relaxed scrollbar-thin">
                {ethtoolData[activeEthtoolCmd].output}
              </pre>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 text-xs">
              <div className="p-4 rounded-2xl border border-emerald-200 bg-emerald-50/50">
                <span className="font-bold text-emerald-900 block mb-1">What This Output Conclusively Proves:</span>
                <p className="text-stone-700 leading-relaxed">{ethtoolData[activeEthtoolCmd].proves}</p>
              </div>
              <div className="p-4 rounded-2xl border border-amber-200 bg-amber-50/50">
                <span className="font-bold text-amber-900 block mb-1">Diagnostic Limitations:</span>
                <p className="text-stone-700 leading-relaxed">{ethtoolData[activeEthtoolCmd].doesNotProve}</p>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 6: ASSESSMENT & QUIZ (10 QUESTIONS)                            */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "quiz" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                <Award size={14} />
                <span>Knowledge Assessment</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                University-Level Assessment: Physical Layer & Signals
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-stone-600">
                10 rigorous questions testing Nyquist/Shannon bounds, fiber optics, line coding, duplex mismatches, and transceiver telemetry.
              </p>
            </div>

            <div className="space-y-6">
              {quizQuestions.map((q, idx) => {
                const selectedOpt = quizAnswers[q.id];
                const isAnswered = selectedOpt !== undefined;
                const isCorrect = selectedOpt === q.correctIndex;

                return (
                  <div key={q.id} className="rounded-2xl border border-stone-200 bg-stone-50/60 p-5 space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-xs font-black text-stone-900">
                        {idx + 1}. {q.question}
                      </span>
                      {quizSubmitted && (
                        <span
                          className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full shrink-0 ${
                            isCorrect ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
                          }`}
                        >
                          {isCorrect ? "Correct" : "Incorrect"}
                        </span>
                      )}
                    </div>

                    <div className="space-y-2">
                      {q.options.map((opt, optIdx) => {
                        const isSelected = selectedOpt === optIdx;
                        let optionStyle = "border-stone-200 bg-white hover:border-orange-300";

                        if (quizSubmitted) {
                          if (optIdx === q.correctIndex) {
                            optionStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold";
                          } else if (isSelected && !isCorrect) {
                            optionStyle = "border-red-400 bg-red-50 text-red-950";
                          } else {
                            optionStyle = "border-stone-200 bg-white opacity-60";
                          }
                        } else if (isSelected) {
                          optionStyle = "border-[#ea580c] bg-orange-50/70 font-semibold text-orange-950";
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() => handleSelectOption(q.id, optIdx)}
                            className={`w-full text-left p-3 rounded-xl border text-xs transition-all cursor-pointer ${optionStyle}`}
                          >
                            <span className="font-mono text-stone-400 mr-2">
                              {String.fromCharCode(65 + optIdx)}.
                            </span>
                            {opt}
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className="mt-3 p-3 rounded-xl bg-orange-50 border border-orange-200/80 text-xs text-stone-700">
                        <strong className="text-orange-950 block mb-0.5">Engineering Explanation:</strong>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Score & Submission Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-200">
              {quizSubmitted ? (
                <div className="flex items-center gap-3">
                  <div className="text-lg font-black text-stone-900 font-mono">
                    Score: {calculateScore()} / {quizQuestions.length} ({((calculateScore() / quizQuestions.length) * 100).toFixed(0)}%)
                  </div>
                  <button
                    onClick={() => {
                      setQuizAnswers({});
                      setQuizSubmitted(false);
                    }}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-stone-300 bg-white text-xs font-bold text-stone-700 hover:bg-stone-50 cursor-pointer"
                  >
                    <RotateCcw size={14} />
                    <span>Retake Assessment</span>
                  </button>
                </div>
              ) : (
                <button
                  disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                  onClick={() => setQuizSubmitted(true)}
                  className="px-6 py-3 rounded-xl bg-[#ea580c] text-white text-xs font-bold shadow-md hover:bg-[#c2410c] disabled:opacity-50 cursor-pointer"
                >
                  Submit Assessment ({Object.keys(quizAnswers).length} / {quizQuestions.length} Answered)
                </button>
              )}
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 7: REPORT TEMPLATE                                             */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "report" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                  <FileText size={14} />
                  <span>Portfolio Engineering Deliverable</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                  Physical Network Engineering Report Template
                </h2>
              </div>
              <button
                onClick={() =>
                  copyCode(
                    `# Physical Network Engineering Report

## 1. Executive Summary
- **Investigator:** Network Physical Layer Engineer
- **Target Interface:** \`eth0\` (10GBASE-LR SFP+ Uplink on Core Switch)
- **Objective:** Triage intermittent link flaps, verify auto-negotiation, and calculate optical power margin.

## 2. Interface Physical Characteristics
- **Interface Name:** \`eth0\`
- **Port Medium:** Single-Mode Fiber (OS2 SMF, 9 µm core, 1310 nm)
- **Connector Type:** Duplex LC
- **Negotiated Speed & Duplex:** 10000 Mbps (10 Gbps) / Full Duplex
- **PHY Transceiver:** 10GBASE-LR (SFP-10G-LR)

## 3. Optical Power Budget & Link Verification
- **Transmitter Output Power (P_tx):** -2.83 dBm
- **Fiber Cable Distance:** 8.4 km
- **Fiber Attenuation (0.35 dB/km):** 2.94 dB
- **Connector Loss (2 × 0.5 dB):** 1.00 dB
- **Splice Loss (3 × 0.1 dB):** 0.30 dB
- **Calculated Total Channel Loss:** 4.24 dB
- **Measured Receiver Optical Power (P_rx):** -7.07 dBm (via \`ethtool -m eth0\`)
- **Receiver Sensitivity (P_rx_sens):** -14.40 dBm
- **Calculated Link Margin:** +7.33 dB (Healthy margin exceeds 3.0 dB safety threshold)

## 4. Hardware Error Counter Baselining
\`\`\`bash
# ethtool -S eth0 | grep -E 'error|crc'
rx_crc_errors: 0
rx_frame_errors: 0
rx_missed_errors: 0
\`\`\`
- **Result:** Zero CRC/FCS frame errors observed over 24-hour observation interval.

## 5. Root-Cause Analysis & Recommendations
- **Finding:** Link flaps were caused by loose LC patch cord clip on patch panel port 12.
- **Remediation:** Re-seated LC connector and cleaned ferrule with optical click-cleaner pen.`,
                    "phys-report-copy"
                  )
                }
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#ea580c] text-white text-xs font-bold hover:bg-[#c2410c] shadow-xs cursor-pointer"
              >
                {copiedCodeId === "phys-report-copy" ? <Check size={14} /> : <Copy size={14} />}
                <span>Copy Markdown Template</span>
              </button>
            </div>

            <p className="text-xs sm:text-sm text-stone-600">
              Submit this comprehensive physical engineering report after executing Labs 1 through 4 to demonstrate mastery of optical power budgets, link negotiation, and hardware counter telemetry.
            </p>

            <div className="rounded-2xl border border-stone-800 bg-[#18181b] p-5 font-mono text-xs text-stone-300 overflow-x-auto leading-relaxed shadow-lg">
              <pre className="text-stone-300">
{`# Physical Network Engineering Report

## 1. Executive Summary
- **Investigator:** Network Physical Layer Engineer
- **Target Interface:** eth0 (10GBASE-LR SFP+ Uplink on Core Switch)
- **Objective:** Triage intermittent link flaps, verify auto-negotiation, and calculate optical power margin.

## 2. Interface Physical Characteristics
- **Interface Name:** eth0
- **Port Medium:** Single-Mode Fiber (OS2 SMF, 9 µm core, 1310 nm)
- **Connector Type:** Duplex LC
- **Negotiated Speed & Duplex:** 10000 Mbps (10 Gbps) / Full Duplex
- **PHY Transceiver:** 10GBASE-LR (SFP-10G-LR)

## 3. Optical Power Budget & Link Verification
- **Transmitter Output Power (P_tx):** -2.83 dBm
- **Fiber Cable Distance:** 8.4 km
- **Measured Receiver Optical Power (P_rx):** -7.07 dBm (via ethtool -m eth0)
- **Receiver Sensitivity (P_rx_sens):** -14.40 dBm
- **Calculated Link Margin:** +7.33 dB (Healthy margin exceeds 3.0 dB safety threshold)`}
              </pre>
            </div>
          </div>
        )}

        {/* Footer Navigation Bar */}
        <div className="mt-10 pt-6 border-t border-[#e7e3da] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => navigate("/learning/networks/models")}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#e7e3da] bg-white text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#ea580c] transition cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 2 — Network Models</span>
          </button>

          <button
            onClick={() => navigate("/learning/networks/datalink")}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#ea580c] text-white text-xs font-bold hover:bg-[#c2410c] shadow-xs transition cursor-pointer"
          >
            <span>Next: Module 4 — Data Link & Ethernet</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
