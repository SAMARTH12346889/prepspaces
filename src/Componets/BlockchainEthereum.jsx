import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Layers,
  Cpu,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Terminal,
  FileCode,
  BookOpen,
  Sparkles,
  ExternalLink,
  CheckSquare,
  Square,
  HelpCircle,
  Copy,
  Check,
  ChevronRight,
  Globe,
  Share2,
  Server,
  Activity,
  Award,
  ArrowRight,
  ArrowLeft,
  Database,
  Hash,
  Binary,
  GitBranch,
  Play,
  RotateCcw,
  Zap,
  Users,
  Coins,
  Scale,
  Sliders,
  CheckCheck,
  XCircle,
  Lock,
  Unlock,
  Flame,
  Clock,
  Compass,
  Code,
  Box,
  Eye,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";

// Browser-native SHA-256 / Keccak simulation helper
async function sha256Hex(msg) {
  const buf = new TextEncoder().encode(msg);
  const hash = await crypto.subtle.digest("SHA-256", buf);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export default function BlockchainEthereum() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning/blockchain/bitcoin-utxo");

  // Tab State: 'theory' | 'interactive-tools' | 'labs-code' | 'quiz' | 'capstone-checklist'
  const [activeTab, setActiveTab] = useState("theory");

  // Copy helper
  const [copiedSnippet, setCopiedSnippet] = useState(null);
  const copyCode = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  // -------------------------------------------------------------
  // Tool 1: Interactive EIP-1559 Gas Fee & Burn Calculator
  // -------------------------------------------------------------
  const [gasUsed, setGasUsed] = useState(21000); // Standard ETH transfer = 21,000
  const [baseFeeGwei, setBaseFeeGwei] = useState(25);
  const [priorityFeeGwei, setPriorityFeeGwei] = useState(2);
  const [maxFeeGwei, setMaxFeeGwei] = useState(35);

  const gasCalculations = useMemo(() => {
    const effectiveGasPrice = Math.min(maxFeeGwei, baseFeeGwei + priorityFeeGwei);
    const totalFeeGwei = gasUsed * effectiveGasPrice;
    const totalFeeEth = totalFeeGwei / 1e9;
    const burnedFeeGwei = gasUsed * baseFeeGwei;
    const burnedFeeEth = burnedFeeGwei / 1e9;
    const validatorFeeGwei = gasUsed * (effectiveGasPrice - baseFeeGwei);
    const validatorFeeEth = validatorFeeGwei / 1e9;
    const isUnderfunded = maxFeeGwei < baseFeeGwei;

    return {
      effectiveGasPrice,
      totalFeeGwei,
      totalFeeEth: totalFeeEth.toFixed(7),
      burnedFeeGwei,
      burnedFeeEth: burnedFeeEth.toFixed(7),
      validatorFeeGwei,
      validatorFeeEth: validatorFeeEth.toFixed(7),
      isUnderfunded,
    };
  }, [gasUsed, baseFeeGwei, priorityFeeGwei, maxFeeGwei]);

  // -------------------------------------------------------------
  // Tool 2: Wei, Gwei & Ether Unit Converter
  // -------------------------------------------------------------
  const [ethInput, setEthInput] = useState("1.0");

  const convertedUnits = useMemo(() => {
    try {
      const val = parseFloat(ethInput) || 0;
      const gweiVal = (val * 1e9).toLocaleString("en-US");
      const weiVal = (val * 1e18).toLocaleString("en-US", { maximumFractionDigits: 0 });
      return { gwei: gweiVal, wei: weiVal, valid: true };
    } catch {
      return { gwei: "0", wei: "0", valid: false };
    }
  }, [ethInput]);

  // -------------------------------------------------------------
  // Tool 3: Proof of Stake Slot & Epoch Clock Simulator
  // -------------------------------------------------------------
  const [simSlot, setSimSlot] = useState(14);
  const [simEpoch, setSimEpoch] = useState(128000);

  const posStats = useMemo(() => {
    const epochDurationSec = 384; // 32 slots * 12s
    const currentSlotInEpoch = simSlot % 32;
    const currentEpochNumber = simEpoch + Math.floor(simSlot / 32);
    const justifiedEpoch = currentEpochNumber - 1;
    const finalizedEpoch = currentEpochNumber - 2;

    return {
      currentSlotInEpoch,
      currentEpochNumber,
      justifiedEpoch,
      finalizedEpoch,
      secondsRemainingInEpoch: (32 - currentSlotInEpoch) * 12,
    };
  }, [simSlot, simEpoch]);

  // -------------------------------------------------------------
  // Tool 4: Account State & Merkle Patricia Trie Visualizer
  // -------------------------------------------------------------
  const [accountAddress, setAccountAddress] = useState("0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"); // Vitalik
  const [accountType, setAccountType] = useState("eoa"); // 'eoa' | 'contract'
  const [accountNonce, setAccountNonce] = useState(145);
  const [accountBalanceEth, setAccountBalanceEth] = useState("350.25");
  const [contractStorageCount, setContractStorageCount] = useState(3);

  // -------------------------------------------------------------
  // Quiz State
  // -------------------------------------------------------------
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submittedQuiz, setSubmittedQuiz] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "What is Ethereum's native cryptocurrency?",
      options: ["BTC", "ETH (Ether)", "USDT", "SOL"],
      correct: 1,
      explanation: "Ether (ETH) is the native cryptocurrency used for gas execution fees, value transfer, and Proof of Stake consensus collateral.",
    },
    {
      id: 2,
      question: "What is the execution environment for Ethereum smart contracts?",
      options: ["Java Virtual Machine (JVM)", "Ethereum Virtual Machine (EVM)", "Docker Container", "Node.js V8 Engine"],
      correct: 1,
      explanation: "The Ethereum Virtual Machine (EVM) is the decentralized stack-based virtual computer executing compiled contract bytecode.",
    },
    {
      id: 3,
      question: "Which two clients are required for a complete Ethereum full node post-Merge?",
      options: ["Wallet and miner", "Execution client and consensus client", "Browser and relational database", "Validator client and block explorer"],
      correct: 1,
      explanation: "Since The Merge, an Ethereum full node requires an Execution Client (e.g. Geth) and a Consensus Client (e.g. Lighthouse) communicating via the Engine API.",
    },
    {
      id: 4,
      question: "What is the byte length of a standard Ethereum address?",
      options: ["16 bytes", "20 bytes (160 bits)", "32 bytes (256 bits)", "64 bytes"],
      correct: 1,
      explanation: "An Ethereum address is exactly 20 bytes (40 hexadecimal characters), derived by taking the last 20 bytes of the Keccak-256 hash of the public key.",
    },
    {
      id: 5,
      question: "What is the network Chain ID of the Ethereum Sepolia public testnet?",
      options: ["1", "5", "11155111 (0xaa36a7)", "31337"],
      correct: 2,
      explanation: "Sepolia's Chain ID is 11155111 (hexadecimal 0xaa36a7), protecting against transaction replay attacks across networks (EIP-155).",
    },
    {
      id: 6,
      question: "What is the smallest atomic unit of Ether?",
      options: ["Gwei (10^9 Wei)", "Wei (1 Wei = 10^-18 ETH)", "Finney (10^15 Wei)", "Szabo (10^12 Wei)"],
      correct: 1,
      explanation: "Wei is the base indivisible denomination: 1 ETH = 10^18 Wei = 1,000,000,000,000,000,000 Wei.",
    },
    {
      id: 7,
      question: "What is the duration of one Ethereum Proof of Stake slot?",
      options: ["5 seconds", "10 seconds", "12 seconds", "60 seconds"],
      correct: 2,
      explanation: "Each slot is exactly 12 seconds. There are 32 slots in an epoch (384 seconds = 6.4 minutes).",
    },
    {
      id: 8,
      question: "Which field in an Ethereum execution block commits cryptographically to the global account state?",
      options: ["parentHash", "stateRoot", "nonce", "gasLimit"],
      correct: 1,
      explanation: "The stateRoot is the 32-byte Merkle Patricia Trie root hash committing to all account balances, nonces, code hashes, and storage roots in Ethereum.",
    },
    {
      id: 9,
      question: "Under the EIP-1559 fee mechanism, what happens to the baseFeePerGas?",
      options: ["It is paid directly to the block fee recipient", "It is permanently burned (destroyed from supply)", "It is escrowed in the Beacon deposit contract", "It is refunded 100% to the sender"],
      correct: 1,
      explanation: "Under EIP-1559, the base fee is burned, removing ETH from circulation. Only the priority fee (tip) is paid to the validator.",
    },
    {
      id: 10,
      question: "Which of the following software implementations is an Ethereum execution client?",
      options: ["Lighthouse", "Prysm", "Geth (Go Ethereum)", "Teku"],
      correct: 2,
      explanation: "Geth, Nethermind, Besu, Erigon, and Reth are execution clients. Lighthouse, Prysm, Teku, Nimbus, and Lodestar are consensus clients.",
    },
  ];

  const handleSelectAnswer = (qId, optionIdx) => {
    if (submittedQuiz) return;
    setSelectedAnswers({ ...selectedAnswers, [qId]: optionIdx });
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) score++;
    });
    return score;
  };

  // -------------------------------------------------------------
  // Student Checklist State (Saved locally)
  // -------------------------------------------------------------
  const CHECKLIST_KEY = "prepspaces_ethereum_m5_checklist";
  const [checklist, setChecklist] = useState(() => {
    try {
      const saved = localStorage.getItem(CHECKLIST_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const checklistItems = [
    { id: "chk_1", label: "Understand Ethereum history, Vitalik's whitepaper, and protocol evolution (Frontier to Glamsterdam)" },
    { id: "chk_2", label: "Compare Ethereum and Bitcoin across state models, smart contracts, consensus, and fees" },
    { id: "chk_3", label: "Understand Ethereum as a decentralized state machine and the role of the EVM" },
    { id: "chk_4", label: "Study the modular execution layer and consensus layer post-Merge architecture" },
    { id: "chk_5", label: "Understand Engine API communication and execution payload handshakes" },
    { id: "chk_6", label: "Learn Ethereum nodes (Full, Archive, Light) and execution/consensus client diversity" },
    { id: "chk_7", label: "Study EOAs vs. Smart Contract Accounts and account abstraction (EIP-7702)" },
    { id: "chk_8", label: "Understand global account state (Nonce, Balance in Wei, Storage Root, Code Hash)" },
    { id: "chk_9", label: "Study Ethereum's Merkle Patricia Trie, storage tries, state roots, and cryptographic proofs" },
    { id: "chk_10", label: "Understand transaction structures (Legacy, Type 1, Type 2 EIP-1559, Type 3 blobs, Type 4 set-code)" },
    { id: "chk_11", label: "Study Ethereum blocks, block headers, and execution payloads in Beacon blocks" },
    { id: "chk_12", label: "Calculate gas consumption, base fee burning, and priority fees under EIP-1559" },
    { id: "chk_13", label: "Understand currency denominations (Wei, Gwei, Ether) and BigInt precision in JavaScript" },
    { id: "chk_14", label: "Learn Proof of Stake: 32 ETH activation deposit, validator duties, slots (12s), and epochs (32 slots)" },
    { id: "chk_15", label: "Understand Casper FFG finality, justification, staking rewards, penalties, and slashing conditions" },
    { id: "chk_16", label: "Configure an Ethereum Sepolia RPC provider endpoint (Alchemy / Infura / QuickNode)" },
    { id: "chk_17", label: "Inspect blocks and block headers using eth_getBlockByNumber and verify trie roots" },
    { id: "chk_18", label: "Inspect Ethereum accounts and balances using eth_getBalance and eth_getTransactionCount" },
    { id: "chk_19", label: "Inspect transactions and execution receipts using eth_getTransactionByHash and receipts" },
    { id: "chk_20", label: "Inspect smart contract bytecode and persistent storage slots using eth_getCode and eth_getStorageAt" },
    { id: "chk_21", label: "Complete the Ethereum Network Explorer capstone project specification" },
  ];

  const toggleChecklistItem = (id) => {
    const updated = { ...checklist, [id]: !checklist[id] };
    setChecklist(updated);
    try {
      localStorage.setItem(CHECKLIST_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const resetChecklist = () => {
    setChecklist({});
    try {
      localStorage.removeItem(CHECKLIST_KEY);
    } catch (e) {
      console.error(e);
    }
  };

  const completedChecklistCount = Object.values(checklist).filter(Boolean).length;
  const progressPercent = Math.round((completedChecklistCount / checklistItems.length) * 100);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col font-sans">
      {/* Top Navigation */}
      <ModuleNav track="blockchain" currentModuleId="ethereum-evm" />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-28 sm:pb-36">
        
        {/* Module Header Banner */}
        <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 mb-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-900 border border-indigo-300 rounded-full text-xs font-bold uppercase tracking-wider">
                Module 5 • Core Advanced Module
              </span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 border border-orange-200 rounded-full text-xs font-semibold">
                20–24 Hours Est.
              </span>
              <span className="px-3 py-1 bg-neutral-100 text-neutral-700 border border-neutral-300 rounded-full text-xs font-medium">
                Sepolia • JSON-RPC • Node.js
              </span>
            </div>
            <button
              onClick={() => navigate("/learning/blockchain")}
              className="text-xs font-medium text-neutral-600 hover:text-orange-600 transition flex items-center gap-1"
            >
              Curriculum Overview <ChevronRight size={14} />
            </button>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#18181b] tracking-tight mb-3">
            Ethereum Architecture, EVM &amp; Ecosystem
          </h1>
          <p className="text-base sm:text-lg text-[#52525b] max-w-4xl leading-relaxed mb-6">
            Master Ethereum as a decentralized global state machine and Turing-complete computing platform. Understand execution and consensus layer cooperation, node clients (Geth, Lighthouse), the account-based model, Merkle Patricia Tries, EVM execution, EIP-1559 gas fee burning, Proof of Stake consensus, and live JSON-RPC interaction on Ethereum Sepolia.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#e7e3da]">
            <div className="p-3 bg-[#fbfaf7] rounded-xl border border-[#ece8de]">
              <div className="text-xs text-neutral-500 font-medium">Curriculum Scope</div>
              <div className="text-lg font-bold text-neutral-900">22 Sections Full</div>
            </div>
            <div className="p-3 bg-[#fbfaf7] rounded-xl border border-[#ece8de]">
              <div className="text-xs text-neutral-500 font-medium">Hands-on Lab</div>
              <div className="text-lg font-bold text-orange-600">Sepolia JSON-RPC</div>
            </div>
            <div className="p-3 bg-[#fbfaf7] rounded-xl border border-[#ece8de]">
              <div className="text-xs text-neutral-500 font-medium">Engineering Capstone</div>
              <div className="text-lg font-bold text-neutral-900">Network Explorer</div>
            </div>
            <div className="p-3 bg-[#fbfaf7] rounded-xl border border-[#ece8de]">
              <div className="text-xs text-neutral-500 font-medium">Learning Progress</div>
              <div className="text-lg font-bold text-emerald-600">{progressPercent}% Completed</div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#e7e3da] mb-8 gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveTab("theory")}
            className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition flex items-center gap-2 whitespace-nowrap ${
              activeTab === "theory"
                ? "bg-orange-600 text-white shadow-sm"
                : "bg-white text-neutral-700 hover:bg-neutral-100 border border-[#e7e3da]"
            }`}
          >
            <BookOpen size={16} /> Complete Curriculum &amp; Theory
          </button>
          <button
            onClick={() => setActiveTab("interactive-tools")}
            className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition flex items-center gap-2 whitespace-nowrap ${
              activeTab === "interactive-tools"
                ? "bg-orange-600 text-white shadow-sm"
                : "bg-white text-neutral-700 hover:bg-neutral-100 border border-[#e7e3da]"
            }`}
          >
            <Sliders size={16} /> Interactive Protocol Simulators
          </button>
          <button
            onClick={() => setActiveTab("labs-code")}
            className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition flex items-center gap-2 whitespace-nowrap ${
              activeTab === "labs-code"
                ? "bg-orange-600 text-white shadow-sm"
                : "bg-white text-neutral-700 hover:bg-neutral-100 border border-[#e7e3da]"
            }`}
          >
            <Terminal size={16} /> Sepolia Labs &amp; JSON-RPC Code
          </button>
          <button
            onClick={() => setActiveTab("quiz")}
            className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition flex items-center gap-2 whitespace-nowrap ${
              activeTab === "quiz"
                ? "bg-orange-600 text-white shadow-sm"
                : "bg-white text-neutral-700 hover:bg-neutral-100 border border-[#e7e3da]"
            }`}
          >
            <HelpCircle size={16} /> Knowledge Assessment &amp; Exam
          </button>
          <button
            onClick={() => setActiveTab("capstone-checklist")}
            className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition flex items-center gap-2 whitespace-nowrap ${
              activeTab === "capstone-checklist"
                ? "bg-orange-600 text-white shadow-sm"
                : "bg-white text-neutral-700 hover:bg-neutral-100 border border-[#e7e3da]"
            }`}
          >
            <Award size={16} /> Capstone &amp; Learning Tracker
          </button>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* TAB 1: THEORY & FULL CURRICULUM (SECTIONS 5.1 to 5.22)            */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "theory" && (
          <div className="space-y-12">
            
            {/* 5.1 Section 1: Introduction to Ethereum */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 1 • Foundations
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                5.1 Evolution of Ethereum &amp; Design Philosophy
              </h2>

              <div className="space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">5.1.1 What is Ethereum?</h3>
                  <p className="mb-3">
                    Ethereum is a decentralized, open-source, programmable blockchain platform that allows developers to create and deploy arbitrary stateful applications using smart contracts. While Bitcoin was created to be a peer-to-peer electronic payment system, Ethereum was engineered as a <strong>world computer</strong>—a globally distributed, deterministic state machine replicated across thousands of independent nodes.
                  </p>
                  <p className="mb-3">
                    The Ethereum platform consists of nine interconnected layers and subsystems:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-2 text-neutral-800">
                    <li><strong>Blockchain Infrastructure:</strong> Cryptographically chained execution payloads committing to state roots</li>
                    <li><strong>Ethereum Virtual Machine (EVM):</strong> The quasi-Turing-complete runtime environment executing contract bytecode</li>
                    <li><strong>Smart Contracts:</strong> Autonomous programs deployed to 20-byte addresses with persistent storage and balance</li>
                    <li><strong>Ether (ETH):</strong> The native utility and collateral asset used for gas execution fees and Proof of Stake consensus</li>
                    <li><strong>Decentralized Applications (dApps):</strong> Censorship-resistant user applications combining web frontends with contract logic</li>
                    <li><strong>Execution Clients:</strong> Software engines (Geth, Nethermind, Besu, Reth) validating transactions and managing state</li>
                    <li><strong>Consensus Clients:</strong> Beacon chain software (Lighthouse, Prysm, Teku, Nimbus) coordinating Proof of Stake</li>
                    <li><strong>Validator Infrastructure:</strong> Operators staking 32+ ETH proposing blocks and signing consensus attestations</li>
                    <li><strong>Developer Tooling:</strong> Frameworks, compilers, client libraries, and JSON-RPC APIs (Foundry, Hardhat, ethers.js, viem)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">5.1.2 Historical Evolution: From Frontier to Glamsterdam</h3>
                  <div className="overflow-x-auto border border-[#e7e3da] rounded-xl mb-4">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-[#fbfaf7] border-b border-[#e7e3da] text-neutral-900 font-bold">
                        <tr>
                          <th className="p-3">Year</th>
                          <th className="p-3">Milestone / Upgrade</th>
                          <th className="p-3">Core Architectural Impact</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ece8de]">
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">2013</td>
                          <td className="p-3 font-semibold">Ethereum Whitepaper</td>
                          <td className="p-3">Vitalik Buterin proposed general-purpose programmable state machine with EVM</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">2014</td>
                          <td className="p-3 font-semibold">Yellow Paper &amp; Crowdsale</td>
                          <td className="p-3">Dr. Gavin Wood authored formal mathematical EVM specification; initial crowdsale</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">2015</td>
                          <td className="p-3 font-semibold">Frontier (Genesis)</td>
                          <td className="p-3">Official Mainnet launch on July 30, 2015; initial Proof of Work network</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">2016</td>
                          <td className="p-3 font-semibold">The DAO Fork</td>
                          <td className="p-3">Re-entrancy exploit recovery resulting in chain split between Ethereum and Ethereum Classic (ETC)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">2020</td>
                          <td className="p-3 font-semibold">Beacon Chain Launch</td>
                          <td className="p-3">Phase 0 Proof of Stake coordination chain launched independently on Dec 1, 2020</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">2021</td>
                          <td className="p-3 font-semibold">London Upgrade (EIP-1559)</td>
                          <td className="p-3">Introduced dynamic fee market: base fee burning + validator priority tips</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">2022</td>
                          <td className="p-3 font-semibold">The Merge</td>
                          <td className="p-3">Execution layer merged with Beacon Chain; transition from PoW to PoS (-99.95% energy)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">2023</td>
                          <td className="p-3 font-semibold">Shapella Upgrade</td>
                          <td className="p-3">Enabled partial and full validator staking withdrawals (EIP-4895)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">2024</td>
                          <td className="p-3 font-semibold">Dencun (EIP-4844)</td>
                          <td className="p-3">Proto-Danksharding introduced ephemeral blob transactions, slashing Layer 2 rollup fees by &gt;90%</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">2025</td>
                          <td className="p-3 font-semibold">Pectra (Prague + Electra)</td>
                          <td className="p-3">EIP-7702 account abstraction delegation &amp; max effective validator balance up to 2,048 ETH</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">2025</td>
                          <td className="p-3 font-semibold">Fusaka (Fulu + Osaka)</td>
                          <td className="p-3">PeerDAS (Peer Data Availability Sampling) scaling blob throughput for rollups</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">2026</td>
                          <td className="p-3 font-semibold">Glamsterdam</td>
                          <td className="p-3">Advanced stateless execution, Verkle/binary state trees, and ePBS (enshrined Proposer-Builder Separation)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">5.1.5 Ether (ETH) vs. Ethereum</h3>
                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl text-sm space-y-2">
                    <p>
                      <strong>Ethereum:</strong> The decentralized blockchain protocol, virtual machine specification, network topology, and consensus rules.
                    </p>
                    <p>
                      <strong>Ether (ETH):</strong> The native cryptographic asset of the Ethereum protocol. Ether serves five essential economic functions:
                    </p>
                    <ul className="list-disc list-inside text-xs text-neutral-700 pl-2 space-y-1">
                      <li><strong>Gas Execution Fuel:</strong> Compensates nodes for computational resources consumed by transactions</li>
                      <li><strong>Network Security Collateral:</strong> Deposited in the Beacon deposit contract (32 ETH) to participate in PoS validation</li>
                      <li><strong>Deflationary Settlement:</strong> Base fees burned under EIP-1559 reduce total supply during high transaction demand</li>
                      <li><strong>Medium of Exchange &amp; Store of Value:</strong> Native currency for buying NFTs, paying fees, and settling payments</li>
                      <li><strong>DeFi Economic Collateral:</strong> Locked as collateral in lending money markets (Aave, Compound, MakerDAO)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 5.2 Section 2: Ethereum vs Bitcoin */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 2 • Architectural Comparative Analysis
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                5.2 Comparing Ethereum &amp; Bitcoin Architectures
              </h2>

              <div className="space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
                <div className="overflow-x-auto border border-[#e7e3da] rounded-xl mb-4">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[#fbfaf7] border-b border-[#e7e3da] text-neutral-900 font-bold">
                      <tr>
                        <th className="p-3">Architectural Dimension</th>
                        <th className="p-3">Bitcoin</th>
                        <th className="p-3">Ethereum</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#ece8de] text-xs">
                      <tr>
                        <td className="p-3 font-semibold text-neutral-900">Primary Design Purpose</td>
                        <td className="p-3">Peer-to-peer electronic digital cash and store of value</td>
                        <td className="p-3 font-semibold text-orange-600">Turing-complete decentralized computing platform</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-neutral-900">State Accounting Model</td>
                        <td className="p-3">UTXO (Unspent Transaction Output) model</td>
                        <td className="p-3 font-semibold text-orange-600">Account-based model (Balances, nonces, storage tries)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-neutral-900">Smart Contract Capability</td>
                        <td className="p-3">Restricted, loop-free, non-Turing-complete Script</td>
                        <td className="p-3 font-semibold text-orange-600">Quasi-Turing-complete EVM bytecode with rich state storage</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-neutral-900">Consensus Mechanism</td>
                        <td className="p-3">Nakamoto Proof of Work (PoW) with double SHA-256</td>
                        <td className="p-3 font-semibold text-orange-600">Gasper Proof of Stake (PoS) combining Casper FFG + LMD-GHOST</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-neutral-900">Block Cadence</td>
                        <td className="p-3">~10 minutes average (Poisson process)</td>
                        <td className="p-3 font-semibold text-orange-600">Deterministic 12-second slots (32 slots per 6.4-min epoch)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-neutral-900">Transaction Fee Model</td>
                        <td className="p-3">Virtual size density: satoshis per virtual byte (sat/vB)</td>
                        <td className="p-3 font-semibold text-orange-600">Gas economics (EIP-1559): Base fee (burned) + Priority tip</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-neutral-900">Monetary Policy</td>
                        <td className="p-3">Hard 21M cap governed by geometric 210,000-block halving</td>
                        <td className="p-3 font-semibold text-orange-600">Dynamic issuance based on active stake; deflationary via EIP-1559 burns</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-neutral-900">State Data Structure</td>
                        <td className="p-3">Binary Merkle Tree over transaction hashes in header</td>
                        <td className="p-3 font-semibold text-orange-600">Modified Merkle Patricia Trie (State, Transactions, Receipts)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-neutral-900">Layer 2 Scaling Strategy</td>
                        <td className="p-3">Payment channels (Lightning Network) &amp; statechains</td>
                        <td className="p-3 font-semibold text-orange-600">EVM Rollups (Optimistic &amp; ZK-Rollups) + EIP-4844 data blobs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* 5.3 Section 3: Decentralized Computing Model */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 3 • State Machine
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                5.3 Ethereum as a Distributed State Machine
              </h2>

              <div className="space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">5.3.6 The Formal State Transition Function</h3>
                  <p className="mb-3">
                    In computer science, Ethereum is formally defined as a transaction-based, deterministic state machine:
                  </p>
                  <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl font-mono text-center font-bold text-neutral-900 text-sm mb-3">
                    S_(t+1) = Υ(S_t, T)
                  </div>
                  <p className="text-sm">
                    Where <code className="font-mono">S_t</code> is the global Ethereum state at time t, <code className="font-mono">T</code> is an incoming cryptographically valid transaction, <code className="font-mono">Υ</code> (Upsilon) is the protocol-defined state transition function, and <code className="font-mono">S_(t+1)</code> is the resulting global state.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">5.3.4 Deterministic Execution &amp; The Halting Problem</h3>
                  <p className="mb-3">
                    For thousands of nodes worldwide to reach consensus on the state of the world computer, execution MUST be completely deterministic:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                      <strong className="block text-neutral-900 font-bold">Why EVM Omits Non-Deterministic APIs</strong>
                      <p className="text-neutral-600">
                        The EVM has no access to random number generators, system clocks, local filesystems, or network sockets. If a smart contract called an external HTTP API, Node A might receive "200 OK" while Node B experiences a timeout, immediately destroying network consensus!
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 border border-orange-200 rounded-xl space-y-2">
                      <strong className="block text-neutral-900 font-bold">Why Gas Solves the Halting Problem</strong>
                      <p className="text-neutral-700">
                        Turing machines can run into infinite loops (<code className="font-mono">while(true)</code>). Alan Turing proved mathematically that it is impossible to determine beforehand whether an arbitrary program will ever halt. Ethereum solves this economically: every opcode costs gas. When gas reaches zero, execution immediately halts and reverts!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 5.4 Section 4: Ethereum Network Architecture */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 4 • Modular Architecture
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                5.4 Modular Network Architecture: Execution &amp; Consensus Layers
              </h2>

              <div className="space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">5.4.1 Post-Merge Modular Decomposition</h3>
                  <p className="mb-3">
                    Modern Ethereum nodes do not run as a monolithic binary. Instead, node architecture is split cleanly into two specialized layers connected via an authenticated communication socket:
                  </p>
                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl text-center font-mono text-xs space-y-2 mb-4">
                    <div className="font-bold text-neutral-900">[Execution Client (EL: Geth/Reth)] &lt;══(Engine API: Port 8551 JWT)══&gt; [Consensus Client (CL: Lighthouse/Prysm)]</div>
                    <div className="text-neutral-500">Execution Layer runs EVM &amp; handles user transactions; Consensus Layer coordinates Proof of Stake &amp; Beacon blocks.</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">5.4.5 The Engine API (EIP-3675)</h3>
                  <p className="mb-2">The Engine API defines the IPC/HTTP protocol between EL and CL:</p>
                  <ul className="list-disc list-inside space-y-1 pl-2 text-xs text-neutral-800">
                    <li><code className="font-mono font-bold">engine_forkchoiceUpdated:</code> CL instructs EL on the latest finalized, justified, and head execution block hashes.</li>
                    <li><code className="font-mono font-bold">engine_getPayload:</code> When a validator is selected to propose a block, CL requests a candidate execution payload from EL.</li>
                    <li><code className="font-mono font-bold">engine_newPayload:</code> CL forwards a newly received block's execution payload to EL for EVM validation.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 5.5 Section 5: Ethereum Nodes and Clients */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 5 • Node Implementations
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                5.5 Ethereum Clients &amp; The Importance of Client Diversity
              </h2>

              <div className="space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Execution Clients */}
                  <div>
                    <h3 className="text-base font-bold text-neutral-900 mb-3 flex items-center gap-2">
                      <Cpu size={16} className="text-orange-600" /> Execution Clients (EL)
                    </h3>
                    <div className="space-y-2 text-xs">
                      <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-lg">
                        <strong className="text-neutral-900">Geth (Go Ethereum):</strong> Written in Go by Ethereum Foundation. The historical standard and most battle-tested client.
                      </div>
                      <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-lg">
                        <strong className="text-neutral-900">Nethermind:</strong> Written in C#/.NET. Enterprise-grade execution client with advanced JSON-RPC plugin architecture.
                      </div>
                      <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-lg">
                        <strong className="text-neutral-900">Hyperledger Besu:</strong> Written in Java by Consensys / Linux Foundation. Widely used in public and enterprise EVM networks.
                      </div>
                      <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-lg">
                        <strong className="text-neutral-900">Erigon:</strong> Re-architected modular client written in Go with optimized flat storage and ultra-fast syncing.
                      </div>
                      <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-lg">
                        <strong className="text-neutral-900">Reth:</strong> Modular, contributor-friendly, ultra-fast client written in Rust by Paradigm.
                      </div>
                    </div>
                  </div>

                  {/* Consensus Clients */}
                  <div>
                    <h3 className="text-base font-bold text-neutral-900 mb-3 flex items-center gap-2">
                      <Layers size={16} className="text-indigo-600" /> Consensus Clients (CL)
                    </h3>
                    <div className="space-y-2 text-xs">
                      <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-lg">
                        <strong className="text-neutral-900">Lighthouse:</strong> Written in Rust by Sigma Prime. Emphasizes security, memory safety, and performance.
                      </div>
                      <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-lg">
                        <strong className="text-neutral-900">Prysm:</strong> Written in Go by Offchain Labs / Prysmatic Labs. Feature-rich consensus client with web UI.
                      </div>
                      <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-lg">
                        <strong className="text-neutral-900">Teku:</strong> Written in Java by Consensys. Institutional-grade client with hardware security module (HSM) signing.
                      </div>
                      <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-lg">
                        <strong className="text-neutral-900">Nimbus:</strong> Written in Nim by Status. Lightweight and optimized for resource-constrained devices.
                      </div>
                      <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-lg">
                        <strong className="text-neutral-900">Lodestar:</strong> Written in TypeScript by ChainSafe. Native JavaScript consensus implementation.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-900 space-y-1">
                  <div className="font-bold">Critical Engineering Axiom: Client Diversity</div>
                  <div>If a single client controls &gt;66.6% (2/3 supermajority) of the network stake and experiences a consensus-breaking bug, it could finalize an invalid chain fork and cause catastrophic automated slashing! Running minority clients protects network decentralization.</div>
                </div>
              </div>
            </section>

            {/* 5.6 Section 6: Ethereum Accounts */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 6 • Identity &amp; State
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                5.6 Ethereum Account Architecture: EOAs &amp; Smart Contracts
              </h2>

              <div className="space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">5.6.5 The Four Fields of an Ethereum Account</h3>
                  <p className="mb-3">
                    Every Ethereum account is represented in the global state trie by an RLP-encoded array of four discrete values:
                  </p>
                  <div className="overflow-x-auto border border-[#e7e3da] rounded-xl mb-4">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-[#fbfaf7] border-b border-[#e7e3da] text-neutral-900 font-bold">
                        <tr>
                          <th className="p-3">Field</th>
                          <th className="p-3">Type</th>
                          <th className="p-3">Externally Owned Account (EOA)</th>
                          <th className="p-3">Smart Contract Account</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ece8de] text-xs font-mono">
                        <tr>
                          <td className="p-3 font-bold text-orange-600">Nonce</td>
                          <td className="p-3">uint64</td>
                          <td className="p-3 font-sans">Number of transactions sent from this account (prevents replay)</td>
                          <td className="p-3 font-sans">Number of smart contracts created by this account</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-orange-600">Balance</td>
                          <td className="p-3">uint256</td>
                          <td className="p-3 font-sans">Amount of Ether owned, expressed in Wei (10^-18 ETH)</td>
                          <td className="p-3 font-sans">Amount of Ether held by the contract, in Wei</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-orange-600">Storage Root</td>
                          <td className="p-3">bytes32</td>
                          <td className="p-3 font-sans">Empty hash (256-bit empty trie root hash)</td>
                          <td className="p-3 font-sans">256-bit root hash of the contract's 256-to-256 bit storage trie</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-orange-600">Code Hash</td>
                          <td className="p-3">bytes32</td>
                          <td className="p-3 font-sans">Keccak-256 hash of the empty string (c5d2460186f723...)</td>
                          <td className="p-3 font-sans">Keccak-256 hash of the deployed EVM runtime bytecode</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">5.6.6 Ethereum Address Derivation &amp; EIP-55 Checksums</h3>
                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl font-mono text-xs space-y-1 mb-3">
                    <div>1. Private Key: 256-bit random scalar</div>
                    <div>2. Public Key: 64-byte uncompressed elliptic curve point (x, y)</div>
                    <div>3. Hash: Keccak-256(PublicKey) -&gt; 32 bytes (256 bits)</div>
                    <div>4. Address: Take the last 20 bytes (160 bits) prefixed with '0x'</div>
                    <div>5. EIP-55: Mix capital/lowercase letters according to Keccak-256 hash of address string to detect typos!</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">5.6.7 Deterministic Contract Address Generation (CREATE vs CREATE2)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-lg font-mono">
                      <strong className="block text-neutral-900 font-bold mb-1">Standard CREATE:</strong>
                      Address = Keccak256(RLP([sender_address, nonce]))[12:]
                      <span className="block text-neutral-500 font-sans mt-1">Depends on sender's transaction count; changes with each deployment.</span>
                    </div>
                    <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-lg font-mono">
                      <strong className="block text-neutral-900 font-bold mb-1">EIP-1014 CREATE2:</strong>
                      Address = Keccak256(0xff ++ sender ++ salt ++ init_code_hash)[12:]
                      <span className="block text-neutral-500 font-sans mt-1">Independent of nonce; allows counterfactual contract deployment before funding!</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 5.7 Section 7: Ethereum Account State and Global State */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 7 • Account State
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                5.7 Ethereum Global State &amp; Contract Storage Architecture
              </h2>

              <div className="space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">5.7.1 What is Ethereum Global State?</h3>
                  <p className="mb-3">
                    Ethereum's global state is an enormous, dynamic mapping between 20-byte account addresses and account states. Unlike Bitcoin, which tracks only unspent transaction outputs, Ethereum tracks the active status of every participating entity.
                  </p>
                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl font-mono text-xs space-y-1 mb-3">
                    <div className="text-neutral-500">// Canonical Account State Representation:</div>
                    <div>address: "0x1234567890abcdef1234567890abcdef12345678"</div>
                    <div>balance: "5000000000000000000" (5 ETH in atomic Wei)</div>
                    <div>nonce: 12 (Prevents transaction replay)</div>
                    <div>storageRoot: "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"</div>
                    <div>codeHash: "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470"</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">5.7.4 State Transition Example</h3>
                  <p className="mb-2">
                    Suppose Alice has 5 ETH (nonce 10) and Bob has 2 ETH. Alice sends Bob 1 ETH with a 0.002 ETH transaction fee:
                  </p>
                  <div className="p-4 bg-orange-50 border border-orange-200 rounded-xl font-mono text-xs space-y-1 text-neutral-900">
                    <div>Alice New Balance: 5.0 - (1.0 + 0.002) = 3.998 ETH</div>
                    <div>Bob New Balance: 2.0 + 1.0 = 3.000 ETH</div>
                    <div>Alice New Nonce: 10 + 1 = 11</div>
                    <div>Global StateRoot: Cryptographically recomputed and updated in the next block header!</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">5.7.6 EVM Storage vs. Memory vs. Calldata</h3>
                  <div className="overflow-x-auto border border-[#e7e3da] rounded-xl mb-4">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-[#fbfaf7] border-b border-[#e7e3da] text-neutral-900 font-bold">
                        <tr>
                          <th className="p-3">Property</th>
                          <th className="p-3">Storage</th>
                          <th className="p-3">Memory</th>
                          <th className="p-3">Calldata</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ece8de] text-xs font-mono">
                        <tr>
                          <td className="p-3 font-semibold font-sans">Lifetime</td>
                          <td className="p-3">Permanent across all transactions</td>
                          <td className="p-3">Temporary during call execution</td>
                          <td className="p-3">Temporary during call execution</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold font-sans">Mutability</td>
                          <td className="p-3">Read &amp; Write (SLOAD, SSTORE)</td>
                          <td className="p-3">Read &amp; Write (MLOAD, MSTORE)</td>
                          <td className="p-3 text-rose-600 font-bold">Read-Only (Non-modifiable)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold font-sans">Gas Cost</td>
                          <td className="p-3 font-bold text-rose-600">Very High (up to 20,000 gas)</td>
                          <td className="p-3 text-emerald-600">Low (Scales quadratically)</td>
                          <td className="p-3 text-emerald-600 font-bold">Cheapest (Direct byte slice)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold font-sans">Persistence</td>
                          <td className="p-3">Committed into contract storage trie</td>
                          <td className="p-3">Cleared when call returns</td>
                          <td className="p-3">Cleared when call returns</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* 5.8 Section 8: Merkle Patricia Trie */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 8 • State Data Structures
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                5.8 Merkle Patricia Trie (MPT) Architecture
              </h2>

              <div className="space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">5.8.4 The Four Types of MPT Nodes</h3>
                  <p className="mb-3">
                    Ethereum combines Radix-16 Patricia prefix tries with cryptographic Merkle trees into the Modified Merkle Patricia Trie. Keys are nibbles (4-bit chunks = hex characters):
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-xs font-mono">
                    <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-lg">
                      <strong className="block text-neutral-900 font-bold mb-1">NULL Node</strong>
                      Empty branch or leaf represented as an empty byte array.
                    </div>
                    <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-lg">
                      <strong className="block text-neutral-900 font-bold mb-1">Branch Node</strong>
                      17-item array: 16 nibble child pointers (0-F) + 1 value slot.
                    </div>
                    <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-lg">
                      <strong className="block text-neutral-900 font-bold mb-1">Extension Node</strong>
                      2-item array: [shared nibble prefix path, child node hash].
                    </div>
                    <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-lg">
                      <strong className="block text-neutral-900 font-bold mb-1">Leaf Node</strong>
                      2-item array: [unique suffix path, RLP-encoded account/storage value].
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">5.8.6 The Three Trie Roots in Every Block</h3>
                  <div className="overflow-x-auto border border-[#e7e3da] rounded-xl mb-4">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-[#fbfaf7] border-b border-[#e7e3da] text-neutral-900 font-bold">
                        <tr>
                          <th className="p-3">Trie Root</th>
                          <th className="p-3">Key Format</th>
                          <th className="p-3">Stored Value Payload</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ece8de] text-xs font-mono">
                        <tr>
                          <td className="p-3 font-bold text-orange-600">stateRoot</td>
                          <td className="p-3">Keccak256(20-byte address)</td>
                          <td className="p-3 font-sans">RLP([nonce, balance, storageRoot, codeHash])</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-orange-600">transactionsRoot</td>
                          <td className="p-3">RLP(transaction_index)</td>
                          <td className="p-3 font-sans">Raw serialized signed transaction byte envelope</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-orange-600">receiptsRoot</td>
                          <td className="p-3">RLP(transaction_index)</td>
                          <td className="p-3 font-sans">RLP([status, cumulativeGasUsed, logsBloom, logs])</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* 5.9 Section 9: Ethereum Transaction Lifecycle */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 9 • Transaction Lifecycle
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                5.9 Ethereum Transaction Processing &amp; Envelopes
              </h2>

              <div className="space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">5.9.3 Evolution of Transaction Envelopes (Types 0 to 4)</h3>
                  <div className="overflow-x-auto border border-[#e7e3da] rounded-xl mb-4">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-[#fbfaf7] border-b border-[#e7e3da] text-neutral-900 font-bold">
                        <tr>
                          <th className="p-3">Envelope Type</th>
                          <th className="p-3">EIP Standard</th>
                          <th className="p-3">Core Purpose &amp; Distinct Fields</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ece8de] text-xs font-mono">
                        <tr>
                          <td className="p-3 font-bold text-orange-600">Legacy (Type 0)</td>
                          <td className="p-3">Original Protocol</td>
                          <td className="p-3 font-sans">First-price auction: nonce, gasPrice, gasLimit, to, value, data, v, r, s.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-orange-600">Type 1 (0x01)</td>
                          <td className="p-3">EIP-2930 (Berlin)</td>
                          <td className="p-3 font-sans">Access lists: specifies storage keys and addresses accessed to mitigate gas hikes.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-orange-600">Type 2 (0x02)</td>
                          <td className="p-3">EIP-1559 (London)</td>
                          <td className="p-3 font-sans">Dynamic fees: maxFeePerGas + maxPriorityFeePerGas (Current industry standard).</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-orange-600">Type 3 (0x03)</td>
                          <td className="p-3">EIP-4844 (Dencun)</td>
                          <td className="p-3 font-sans">Blob transactions: carries up to 6 128KB data blobs with dedicated blob gas pricing for L2 rollups.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-orange-600">Type 4 (0x04)</td>
                          <td className="p-3">EIP-7702 (Pectra)</td>
                          <td className="p-3 font-sans">Set-code transaction: allows EOAs to temporarily designate execution code for native account abstraction.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">5.9.7 Transaction Receipts &amp; Status Interpretation</h3>
                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl font-mono text-xs space-y-1">
                    <div className="font-bold text-neutral-900">// Status Field Interpretation:</div>
                    <div className="text-emerald-600 font-bold">status = 0x1 (Success): EVM executed all opcodes without revert or halt.</div>
                    <div className="text-rose-600 font-bold">status = 0x0 (Reverted): EVM reverted state changes (e.g. require() failed or Out of Gas). Gas is STILL consumed!</div>
                  </div>
                </div>
              </div>
            </section>

            {/* 5.10 Section 10: Ethereum Blocks and Block Headers */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 10 • Blocks &amp; Payloads
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                5.10 Ethereum Block Architecture &amp; Execution Payloads
              </h2>

              <div className="space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">5.10.2 Important Execution Block Fields</h3>
                  <div className="overflow-x-auto border border-[#e7e3da] rounded-xl mb-4">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-[#fbfaf7] border-b border-[#e7e3da] text-neutral-900 font-bold">
                        <tr>
                          <th className="p-3">Field</th>
                          <th className="p-3">JSON-RPC Type</th>
                          <th className="p-3">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ece8de] text-xs font-mono">
                        <tr>
                          <td className="p-3 font-bold text-orange-600">number</td>
                          <td className="p-3">QUANTITY (Hex)</td>
                          <td className="p-3 font-sans">The sequential block height in the execution blockchain.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-orange-600">hash</td>
                          <td className="p-3">DATA (32 Bytes)</td>
                          <td className="p-3 font-sans">The Keccak-256 hash of this execution block header.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-orange-600">parentHash</td>
                          <td className="p-3">DATA (32 Bytes)</td>
                          <td className="p-3 font-sans">Hash of the direct parent block, forming the cryptographic chain.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-orange-600">stateRoot</td>
                          <td className="p-3">DATA (32 Bytes)</td>
                          <td className="p-3 font-sans">Merkle Patricia Trie root hash of the global account state after executing this block.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-orange-600">baseFeePerGas</td>
                          <td className="p-3">QUANTITY (Hex)</td>
                          <td className="p-3 font-sans">Minimum fee per gas unit required for transaction inclusion in this block.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-orange-600">gasUsed / gasLimit</td>
                          <td className="p-3">QUANTITY (Hex)</td>
                          <td className="p-3 font-sans">Total gas consumed by transactions / Maximum target capacity (typically 30M).</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">5.10.4 Transaction Ordering &amp; Maximal Extractable Value (MEV)</h3>
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    Because transactions within a block execute sequentially, block builders have the power to order transactions. This allows sophisticated searchers to extract economic value (MEV) via arbitrage, liquidations, and sandwich attacks. Ethereum mitigates centralized builder monopolies through Flashbots MEV-Boost and enshrined Proposer-Builder Separation (ePBS).
                  </p>
                </div>
              </div>
            </section>

            {/* 5.11 Section 11: Gas and Transaction Fees */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 11 • Fee Economics
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                5.11 Gas Economics &amp; EIP-1559 Dynamic Fee Market
              </h2>

              <div className="space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">5.11.3 EIP-1559 Dynamic Base Fee Mechanism</h3>
                  <p className="mb-3">
                    Activated in August 2021 (London upgrade), EIP-1559 replaced the legacy first-price auction with an algorithmic base fee that auto-adjusts based on previous block congestion:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs mb-4">
                    <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-lg">
                      <div className="font-bold text-neutral-900 mb-1">Target Gas Limit: 15M</div>
                      <div className="text-neutral-600">If previous block used exactly 15M gas, Base Fee is <strong>UNCHANGED</strong> for the next block.</div>
                    </div>
                    <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg">
                      <div className="font-bold text-rose-900 mb-1">Full Block: 30M (Max)</div>
                      <div className="text-rose-700">If previous block used 30M gas, Base Fee <strong>INCREASES by up to +12.5%</strong>.</div>
                    </div>
                    <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                      <div className="font-bold text-emerald-900 mb-1">Empty Block: 0 Gas</div>
                      <div className="text-emerald-700">If previous block was empty, Base Fee <strong>DECREASES by up to -12.5%</strong>.</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">5.11.8 The Fee Calculation Formulas</h3>
                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl font-mono text-xs space-y-2 mb-3">
                    <div>EffectiveGasPrice = min(maxFeePerGas, baseFeePerGas + maxPriorityFeePerGas)</div>
                    <div>TotalTransactionFee = GasUsed × EffectiveGasPrice</div>
                    <div>BurnedPortion = GasUsed × baseFeePerGas (Destroyed permanently)</div>
                    <div>ValidatorTip = GasUsed × (EffectiveGasPrice - baseFeePerGas)</div>
                  </div>
                </div>
              </div>
            </section>

            {/* 5.12 Section 12: Ether, Wei and Gwei */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 12 • Currency Denominations
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                5.12 Ethereum Currency Units: Ether, Wei &amp; Gwei
              </h2>

              <div className="space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">5.12.4 Complete Denominations Table</h3>
                  <div className="overflow-x-auto border border-[#e7e3da] rounded-xl mb-4">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-[#fbfaf7] border-b border-[#e7e3da] text-neutral-900 font-bold">
                        <tr>
                          <th className="p-3">Unit</th>
                          <th className="p-3">Wei Equivalent</th>
                          <th className="p-3">Scientific Notation</th>
                          <th className="p-3">Primary Technical Use</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ece8de] text-xs font-mono">
                        <tr>
                          <td className="p-3 font-bold text-orange-600">Wei</td>
                          <td className="p-3">1</td>
                          <td className="p-3">10^0</td>
                          <td className="p-3 font-sans">Base protocol unit; balances recorded in EVM state</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-neutral-900">Kwei (babbage)</td>
                          <td className="p-3">1,000</td>
                          <td className="p-3">10^3</td>
                          <td className="p-3 font-sans">Historical naming</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-neutral-900">Mwei (lovelace)</td>
                          <td className="p-3">1,000,000</td>
                          <td className="p-3">10^6</td>
                          <td className="p-3 font-sans">Historical naming</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-orange-600">Gwei (shannon)</td>
                          <td className="p-3">1,000,000,000</td>
                          <td className="p-3">10^9</td>
                          <td className="p-3 font-sans">Gas prices (e.g. baseFee = 25 Gwei)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-neutral-900">Szabo</td>
                          <td className="p-3">1,000,000,000,000</td>
                          <td className="p-3">10^12</td>
                          <td className="p-3 font-sans">Microether</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-neutral-900">Finney</td>
                          <td className="p-3">1,000,000,000,000,000</td>
                          <td className="p-3">10^15</td>
                          <td className="p-3 font-sans">Milliether</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-orange-600">Ether (ETH)</td>
                          <td className="p-3">1,000,000,000,000,000,000</td>
                          <td className="p-3">10^18</td>
                          <td className="p-3 font-sans">User balances and transaction values</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">5.12.6 Safe BigInt Arithmetic in JavaScript</h3>
                  <div className="p-4 bg-neutral-900 text-indigo-300 rounded-xl font-mono text-xs space-y-1">
                    <div className="text-neutral-500">// NEVER use JavaScript Number/float for Ethereum financial math:</div>
                    <div>const oneEthInWei = 1n * (10n ** 18n); // 1000000000000000000n</div>
                    <div>const gasPriceInWei = 25n * (10n ** 9n); // 25000000000n (25 Gwei)</div>
                    <div className="text-emerald-400 font-bold">// Avoid Number(wei) which loses precision above 2^53 - 1!</div>
                  </div>
                </div>
              </div>
            </section>

            {/* 5.13 Section 13: Proof of Stake */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 13 • Consensus Mechanism
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                5.13 Ethereum Proof of Stake &amp; Gasper Consensus
              </h2>

              <div className="space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">5.13.6 Slots, Epochs &amp; Timelines</h3>
                  <p className="mb-3">
                    Ethereum coordinates consensus according to a rigid, deterministic schedule:
                  </p>
                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl font-mono text-xs space-y-1 mb-3">
                    <div>Slot Duration = exactly 12 seconds</div>
                    <div>Epoch = exactly 32 slots (32 × 12 = 384 seconds = 6.4 minutes)</div>
                    <div>Block Proposal = Exactly one pseudo-randomly selected validator per slot</div>
                    <div>Attestation Committees = Active validators grouped into committees to sign votes</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">5.13.9 Economic Finality: Casper FFG</h3>
                  <p className="mb-2">
                    Unlike Bitcoin's probabilistic settlement, Ethereum provides deterministic economic finality:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-2 text-xs text-neutral-800">
                    <li><strong>Justification:</strong> When a checkpoint boundary block receives attestations from &gt;2/3 of total active validator stake, it becomes <em>justified</em>.</li>
                    <li><strong>Finalization:</strong> When two consecutive epoch checkpoints are justified, the earlier checkpoint becomes <em>finalized</em> (~12.8 minutes). Once finalized, reverting the block requires burning at least 1/3 of all staked ETH (billions of dollars in slashed stake!).</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 5.14 Section 14: Staking and Validator Economics */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 14 • Staking Economics
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                5.14 Staking Models, Validator Lifecycle &amp; Slashing
              </h2>

              <div className="space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">5.14.2 The Complete Staking Lifecycle</h3>
                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl font-mono text-xs space-y-1">
                    <div>1. Deposit: User sends 32 ETH to the official Beacon Deposit Contract</div>
                    <div>2. Activation Queue: Churn limit governs how many validators activate per epoch</div>
                    <div>3. Active Duty: Proposing blocks, casting attestations, participating in sync committees</div>
                    <div>4. Voluntary Exit / Slashing: Exiting validators enter the exit queue to withdraw principal and rewards</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">5.14.5 Comparative Staking Models</h3>
                  <div className="overflow-x-auto border border-[#e7e3da] rounded-xl mb-4">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-[#fbfaf7] border-b border-[#e7e3da] text-neutral-900 font-bold">
                        <tr>
                          <th className="p-3">Staking Model</th>
                          <th className="p-3">Minimum Capital</th>
                          <th className="p-3">Infrastructure Responsibility</th>
                          <th className="p-3">Key Risk Trade-offs</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ece8de] text-xs">
                        <tr>
                          <td className="p-3 font-semibold text-neutral-900">Solo Staking</td>
                          <td className="p-3 font-mono font-bold text-orange-600">32 ETH</td>
                          <td className="p-3">Run own EL, CL, and Validator Client</td>
                          <td className="p-3 text-neutral-600">Hardware maintenance, power/internet outages, zero counterparty risk</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-neutral-900">Staking as a Service (SaaS)</td>
                          <td className="p-3 font-mono font-bold text-neutral-800">32 ETH</td>
                          <td className="p-3">Delegated operator runs node hardware</td>
                          <td className="p-3 text-neutral-600">Counterparty operator risk; user holds withdrawal credentials</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-neutral-900">Liquid Staking (LSTs)</td>
                          <td className="p-3 font-mono font-bold text-emerald-600">Any Amount (0.001 ETH)</td>
                          <td className="p-3">Managed via decentralized protocols (e.g. Lido, Rocket Pool)</td>
                          <td className="p-3 text-neutral-600">Smart contract risk; receives transferable ERC-20 staking derivatives</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-neutral-900">Centralized Exchanges (CEX)</td>
                          <td className="p-3 font-mono font-bold text-neutral-800">Any Amount</td>
                          <td className="p-3">Exchange maintains custodial validator pool</td>
                          <td className="p-3 text-rose-600 font-bold">Custodial seizure risk ("Not your keys, not your coins")</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* 5.15 Section 15: Mainnet and Testnets */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 15 • Network Environments
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                5.15 Ethereum Mainnet, Sepolia &amp; Hoodi Testnets
              </h2>

              <div className="space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
                <div className="overflow-x-auto border border-[#e7e3da] rounded-xl mb-4">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[#fbfaf7] border-b border-[#e7e3da] text-neutral-900 font-bold">
                      <tr>
                        <th className="p-3">Network</th>
                        <th className="p-3">Chain ID</th>
                        <th className="p-3">Currency</th>
                        <th className="p-3">Primary Engineering Use Case</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#ece8de] text-xs">
                      <tr>
                        <td className="p-3 font-bold text-neutral-900">Ethereum Mainnet</td>
                        <td className="p-3 font-mono">1 (0x01)</td>
                        <td className="p-3 font-mono font-bold text-neutral-900">Real ETH</td>
                        <td className="p-3">Production dApps and smart contracts with real financial value</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-orange-600">Sepolia Testnet</td>
                        <td className="p-3 font-mono font-bold text-orange-600">11155111 (0xaa36a7)</td>
                        <td className="p-3 font-mono">SepoliaETH (Free)</td>
                        <td className="p-3">Recommended public testnet for testing smart contracts and dApp UIs</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-indigo-600">Hoodi Testnet</td>
                        <td className="p-3 font-mono">Protocol Testnet</td>
                        <td className="p-3 font-mono">Test ETH</td>
                        <td className="p-3">Consensus-layer client testing, validator staking, and hard-fork dry runs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-3 bg-neutral-100 rounded-xl text-xs text-neutral-600">
                  <strong>Deprecated Historical Testnets:</strong> Goerli, Ropsten, Rinkeby, Kovan, and Holesky are deprecated and decommissioned. Never build new educational labs around legacy testnets.
                </div>
              </div>
            </section>

            {/* 5.16 Section 16: Developer Ecosystem */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 16 • Developer Ecosystem
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                5.16 Ethereum Development Tools, Standards &amp; Libraries
              </h2>

              <div className="space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                    <strong className="block text-neutral-900 font-bold text-sm">Foundry (Rust)</strong>
                    <p className="text-neutral-600">Blazing-fast toolkit featuring Forge (tests written directly in Solidity), Cast (CLI Swiss-army knife for RPC calls), and Anvil (local node).</p>
                  </div>
                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                    <strong className="block text-neutral-900 font-bold text-sm">Hardhat (JavaScript)</strong>
                    <p className="text-neutral-600">Flexible JavaScript/TypeScript framework with extensible plugins, stack traces, and local node emulation.</p>
                  </div>
                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                    <strong className="block text-neutral-900 font-bold text-sm">viem &amp; ethers.js</strong>
                    <p className="text-neutral-600">Modern TypeScript interfaces for interacting with EVM nodes, encoding ABI calls, and managing wallet keys.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">5.16.7 Core Token Standards Matrix</h3>
                  <div className="overflow-x-auto border border-[#e7e3da] rounded-xl mb-4">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-[#fbfaf7] border-b border-[#e7e3da] text-neutral-900 font-bold">
                        <tr>
                          <th className="p-3">Standard</th>
                          <th className="p-3">Category</th>
                          <th className="p-3">Essential Interface Functions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ece8de] text-xs font-mono">
                        <tr>
                          <td className="p-3 font-bold text-orange-600">ERC-20</td>
                          <td className="p-3 font-sans">Fungible Tokens</td>
                          <td className="p-3">totalSupply(), balanceOf(), transfer(), transferFrom(), approve()</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-indigo-600">ERC-721</td>
                          <td className="p-3 font-sans">Non-Fungible Tokens (NFTs)</td>
                          <td className="p-3">ownerOf(tokenId), safeTransferFrom(), tokenURI(tokenId)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-neutral-900">ERC-1155</td>
                          <td className="p-3 font-sans">Multi-Token Standard</td>
                          <td className="p-3">balanceOfBatch(), safeBatchTransferFrom() (Fungible + Non-Fungible)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* 5.17 Section 17: JSON-RPC Architecture */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 17 • Web3 API Architecture
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                5.17 Ethereum JSON-RPC Protocol &amp; Core Methods
              </h2>

              <div className="space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
                <div className="overflow-x-auto border border-[#e7e3da] rounded-xl mb-4">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[#fbfaf7] border-b border-[#e7e3da] text-neutral-900 font-bold">
                      <tr>
                        <th className="p-3">Method</th>
                        <th className="p-3">Cost / Type</th>
                        <th className="p-3">Function</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#ece8de] text-xs font-mono">
                      <tr>
                        <td className="p-3 font-bold text-orange-600">eth_chainId</td>
                        <td className="p-3 font-sans text-emerald-600">Read-Only (Free)</td>
                        <td className="p-3 font-sans">Returns current network EIP-155 chain ID (e.g. 0xaa36a7 for Sepolia).</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-orange-600">eth_blockNumber</td>
                        <td className="p-3 font-sans text-emerald-600">Read-Only (Free)</td>
                        <td className="p-3 font-sans">Returns the integer height of the most recently validated block.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-orange-600">eth_getBalance</td>
                        <td className="p-3 font-sans text-emerald-600">Read-Only (Free)</td>
                        <td className="p-3 font-sans">Reads the account balance in hexadecimal Wei at a given block tag.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-orange-600">eth_call</td>
                        <td className="p-3 font-sans text-emerald-600 font-bold">Simulation (Free)</td>
                        <td className="p-3 font-sans">Executes contract code locally on the node without creating an on-chain transaction or consuming gas!</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-orange-600">eth_sendRawTransaction</td>
                        <td className="p-3 font-sans text-rose-600 font-bold">State-Changing (Gas)</td>
                        <td className="p-3 font-sans">Broadcasts a signed serialized transaction hex string to peer mempools.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* 5.19 Section 19: Advanced Practical Assignments */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 19 • Practical Problem Set
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                5.19 Advanced Practical Engineering Assignments
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                  <div className="font-bold text-neutral-900 text-sm">Assignment 1: Modular Node Architecture Diagram</div>
                  <p className="text-neutral-600">
                    Diagram the execution layer (EL), consensus layer (CL), Engine API (port 8551), and validator client.
                  </p>
                  <p className="text-neutral-700">
                    Detail the forkchoiceUpdated and getPayload handshakes during block production.
                  </p>
                </div>

                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                  <div className="font-bold text-neutral-900 text-sm">Assignment 2: Account State Comparison</div>
                  <p className="text-neutral-600">
                    Document the 4 account fields for an EOA vs. a deployed ERC-20 contract account.
                  </p>
                  <p className="text-neutral-700">
                    Explain why EOAs have codeHash = Keccak256("") and how EIP-7702 allows EOAs to delegate execution authority.
                  </p>
                </div>

                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                  <div className="font-bold text-neutral-900 text-sm">Assignment 3: State Transition Calculation</div>
                  <p className="text-neutral-600">
                    Given: Alice = 10 ETH, Bob = 2 ETH. Alice sends 3 ETH to Bob with a 0.001 ETH fee.
                  </p>
                  <p className="text-neutral-700">
                    Calculate resulting balances: Alice = 6.999 ETH, Bob = 5.000 ETH. Identify changes in Alice's nonce and global stateRoot.
                  </p>
                </div>

                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                  <div className="font-bold text-neutral-900 text-sm">Assignment 4: EIP-1559 Fee Breakdown</div>
                  <p className="text-neutral-600">
                    Given: GasUsed = 80,000, BaseFee = 25 Gwei, PriorityFee = 3 Gwei, MaxFee = 35 Gwei.
                  </p>
                  <ul className="list-disc list-inside text-neutral-700 space-y-0.5">
                    <li>Effective Price: min(35, 25+3) = 28 Gwei</li>
                    <li>Total Fee: 80,000 × 28 = 2,240,000 Gwei (0.00224 ETH)</li>
                    <li>Burned: 80,000 × 25 = 2,000,000 Gwei (0.00200 ETH burned!)</li>
                    <li>Validator Tip: 80,000 × 3 = 240,000 Gwei (0.00024 ETH)</li>
                  </ul>
                </div>

                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                  <div className="font-bold text-neutral-900 text-sm">Assignment 5: Merkle Patricia Trie Technical Specification</div>
                  <p className="text-neutral-600">
                    Differentiate NULL, branch, extension, and leaf nodes. Explain how light clients verify an account balance using a Merkle proof against the trusted block stateRoot.
                  </p>
                </div>

                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                  <div className="font-bold text-neutral-900 text-sm">Assignment 6: Proof of Stake Consensus Report</div>
                  <p className="text-neutral-600">
                    Explain Casper FFG 2/3 supermajority justification, two-epoch finality, RANDAO randomness, and the economic distinction between inactivity penalties and slashable double-signing offenses.
                  </p>
                </div>

                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                  <div className="font-bold text-neutral-900 text-sm">Assignment 7: Automated JSON-RPC Client Suite</div>
                  <p className="text-neutral-600">
                    Develop a clean Node.js script connecting to Sepolia that queries block height, parses recent transaction receipts, and reads contract storage slots via JSON-RPC.
                  </p>
                </div>

                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                  <div className="font-bold text-neutral-900 text-sm">Assignment 8: Comparative Research: Ethereum vs. Bitcoin</div>
                  <p className="text-neutral-600">
                    Write a formal comparative report contrasting UTXO vs. Account state models, Script vs. EVM bytecode execution, PoW vs. PoS thermodynamics, and Lightning vs. Rollup scaling architectures.
                  </p>
                </div>
              </div>
            </section>

            {/* Bottom Progression Bar */}
            <div className="p-6 bg-white border border-[#e7e3da] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => navigate("/learning/blockchain/bitcoin-utxo")}
                className="w-full sm:w-auto px-5 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-xl text-sm font-semibold transition flex items-center justify-center gap-2"
              >
                <ArrowLeft size={16} /> Previous: 4. Bitcoin Mechanics &amp; UTXO
              </button>
              <button
                onClick={() => setActiveTab("interactive-tools")}
                className="w-full sm:w-auto px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-sm font-bold transition flex items-center justify-center gap-2 shadow-sm"
              >
                Try Interactive Simulators <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 2: INTERACTIVE SIMULATORS                                      */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "interactive-tools" && (
          <div className="space-y-12">
            
            {/* Tool 1: Live EIP-1559 Gas Fee & Burn Calculator */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Interactive Lab 1
              </div>
              <h2 className="text-xl font-bold text-neutral-900 mb-2">
                EIP-1559 Gas Fee &amp; Base Fee Burn Calculator
              </h2>
              <p className="text-sm text-neutral-600 mb-6">
                Explore how EIP-1559 dynamically calculates effective gas prices, burns the base fee to reduce ETH supply, and routes the priority tip to validators.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Transaction Gas Used: {gasUsed.toLocaleString()} units
                    </label>
                    <input
                      type="range"
                      min="21000"
                      max="300000"
                      step="1000"
                      value={gasUsed}
                      onChange={(e) => setGasUsed(parseInt(e.target.value))}
                      className="w-full accent-orange-600"
                    />
                    <div className="flex justify-between text-[11px] text-neutral-500 mt-1">
                      <span>Standard ETH: 21,000</span>
                      <span>ERC-20: ~65,000</span>
                      <span>DeFi Swap: ~180,000</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Block Base Fee: {baseFeeGwei} Gwei
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="200"
                      value={baseFeeGwei}
                      onChange={(e) => setBaseFeeGwei(parseInt(e.target.value))}
                      className="w-full accent-orange-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Max Priority Fee (Tip): {priorityFeeGwei} Gwei
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="20"
                      value={priorityFeeGwei}
                      onChange={(e) => setPriorityFeeGwei(parseInt(e.target.value))}
                      className="w-full accent-orange-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Max Fee per Gas Cap: {maxFeeGwei} Gwei
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="250"
                      value={maxFeeGwei}
                      onChange={(e) => setMaxFeeGwei(parseInt(e.target.value))}
                      className="w-full accent-orange-600"
                    />
                  </div>
                </div>

                {/* Live Real-Time Breakdown */}
                <div className="bg-[#fbfaf7] border border-[#ece8de] rounded-xl p-5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900 mb-4 flex items-center justify-between">
                      <span>Fee Distribution Matrix</span>
                      <span className="font-mono text-xs text-orange-600 font-bold">
                        Effective: {gasCalculations.effectiveGasPrice} Gwei
                      </span>
                    </h3>

                    <div className="space-y-3 text-xs">
                      <div className="p-3 bg-white rounded-lg border border-[#ece8de] flex justify-between items-center">
                        <span className="text-neutral-600 flex items-center gap-1.5 font-bold">
                          <Flame size={14} className="text-orange-500" /> Burned Base Fee (Destroyed):
                        </span>
                        <div className="text-right">
                          <div className="font-mono font-bold text-rose-600">{gasCalculations.burnedFeeEth} ETH</div>
                          <div className="text-[10px] text-neutral-400">{gasCalculations.burnedFeeGwei.toLocaleString()} Gwei</div>
                        </div>
                      </div>

                      <div className="p-3 bg-white rounded-lg border border-[#ece8de] flex justify-between items-center">
                        <span className="text-neutral-600 flex items-center gap-1.5 font-bold">
                          <Zap size={14} className="text-emerald-500" /> Validator Priority Tip:
                        </span>
                        <div className="text-right">
                          <div className="font-mono font-bold text-emerald-600">{gasCalculations.validatorFeeEth} ETH</div>
                          <div className="text-[10px] text-neutral-400">{gasCalculations.validatorFeeGwei.toLocaleString()} Gwei</div>
                        </div>
                      </div>

                      <div className="p-3 bg-orange-50/70 rounded-lg border border-orange-200 flex justify-between items-center">
                        <span className="text-neutral-800 font-bold">Total Paid by User:</span>
                        <div className="text-right">
                          <div className="font-mono font-bold text-orange-600 text-sm">{gasCalculations.totalFeeEth} ETH</div>
                          <div className="text-[10px] text-neutral-500">{gasCalculations.totalFeeGwei.toLocaleString()} Gwei</div>
                        </div>
                      </div>
                    </div>

                    {gasCalculations.isUnderfunded && (
                      <div className="mt-4 p-3 bg-rose-100 text-rose-900 rounded-lg text-xs font-bold flex items-center gap-2">
                        <AlertTriangle size={14} /> Max Fee ({maxFeeGwei} Gwei) is lower than Base Fee ({baseFeeGwei} Gwei)! Transaction will stall in mempool.
                      </div>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#ece8de] text-[11px] text-neutral-500">
                    Rule: Effective Price = min(MaxFee, BaseFee + Tip). The base fee portion is burned permanently.
                  </div>
                </div>
              </div>
            </div>

            {/* Tool 2: Currency Converter */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Interactive Lab 2
              </div>
              <h2 className="text-xl font-bold text-neutral-900 mb-2">
                Wei, Gwei &amp; Ether Multi-Denomination Converter
              </h2>
              <p className="text-sm text-neutral-600 mb-6">
                Understand Ethereum precision. Prevent costly floating-point rounding errors by mastering conversions between Wei, Gwei, and Ether.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
                  <label className="block text-xs font-bold text-neutral-700 mb-2">Ether (ETH):</label>
                  <input
                    type="text"
                    value={ethInput}
                    onChange={(e) => setEthInput(e.target.value)}
                    className="w-full px-3 py-2 border border-[#d5cfc4] rounded-lg text-sm bg-white font-mono"
                  />
                  <span className="text-[10px] text-neutral-400 mt-1 block">1 ETH = 10^18 Wei</span>
                </div>

                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
                  <div className="text-xs font-bold text-neutral-700 mb-2">Gigawei (Gwei):</div>
                  <div className="font-mono text-sm font-bold text-indigo-600 bg-white p-2 rounded-lg border border-[#ece8de] break-all">
                    {convertedUnits.gwei}
                  </div>
                  <span className="text-[10px] text-neutral-400 mt-1 block">Gas price standard (10^9 Wei)</span>
                </div>

                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
                  <div className="text-xs font-bold text-neutral-700 mb-2">Atomic Wei:</div>
                  <div className="font-mono text-xs font-bold text-neutral-900 bg-white p-2 rounded-lg border border-[#ece8de] break-all">
                    {convertedUnits.wei}
                  </div>
                  <span className="text-[10px] text-neutral-400 mt-1 block">Smallest base protocol unit</span>
                </div>
              </div>
            </div>

            {/* Tool 3: PoS Slot & Epoch Clock */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Interactive Lab 3
              </div>
              <h2 className="text-xl font-bold text-neutral-900 mb-2">
                Proof of Stake Slot, Epoch &amp; Finality Clock
              </h2>
              <p className="text-sm text-neutral-600 mb-6">
                Observe the 12-second slot heartbeat, track 32-slot epoch boundaries, and trace Casper FFG checkpoint justification and finality.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Active Slot in Timeline: Slot {simSlot}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="63"
                      value={simSlot}
                      onChange={(e) => setSimSlot(parseInt(e.target.value))}
                      className="w-full accent-orange-600"
                    />
                  </div>

                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl text-xs space-y-2">
                    <div>Current Epoch: <span className="font-mono font-bold text-neutral-900">Epoch {posStats.currentEpochNumber}</span></div>
                    <div>Slot in Epoch: <span className="font-mono font-bold text-orange-600">Slot {posStats.currentSlotInEpoch} / 31</span></div>
                    <div>Time to next Epoch boundary: <span className="font-mono font-bold text-neutral-900">{posStats.secondsRemainingInEpoch} seconds</span></div>
                  </div>
                </div>

                <div className="bg-[#fbfaf7] border border-[#ece8de] rounded-xl p-5 flex flex-col justify-between text-xs space-y-3">
                  <div className="font-bold text-neutral-900 text-sm">Casper FFG Finality Pipeline:</div>
                  <div className="p-3 bg-white rounded-lg border border-[#ece8de]">
                    <div className="text-neutral-500 text-[11px]">Proposed Epoch Checkpoint:</div>
                    <div className="font-bold text-neutral-900">Epoch {posStats.currentEpochNumber} (Collecting attestations)</div>
                  </div>
                  <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                    <div className="text-amber-800 text-[11px]">Justified Checkpoint (&gt;2/3 Supermajority):</div>
                    <div className="font-bold text-amber-900">Epoch {posStats.justifiedEpoch} (Justified)</div>
                  </div>
                  <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                    <div className="text-emerald-800 text-[11px]">Finalized Checkpoint (Irreversible):</div>
                    <div className="font-bold text-emerald-900">Epoch {posStats.finalizedEpoch} (Finalized)</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 3: SEPOLIA LABS & JSON-RPC CODE                                */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "labs-code" && (
          <div className="space-y-12">
            
            {/* 10-Step Sepolia JSON-RPC Lab */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 18 • Core Hands-on Lab
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                5.18 Complete 10-Step Sepolia Blockchain Inspector Project
              </h2>
              <p className="text-sm text-neutral-600 mb-6">
                Build a production-grade Node.js inspection suite connecting directly to Ethereum Sepolia via raw JSON-RPC HTTP requests.
              </p>

              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: "Configure RPC Provider & Environment",
                    code: 'npm init -y\nnpm pkg set type=module\nnpm install dotenv\necho "RPC_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR_API_KEY" > .env',
                    desc: "Sets up an ES-module Node.js project and secures provider endpoints inside .env.",
                  },
                  {
                    step: 2,
                    title: "Verify Connected Chain ID (Sepolia 0xaa36a7)",
                    code: 'const chainId = await rpc("eth_chainId");\nconsole.log("Connected Chain ID:", chainId); // Must equal 0xaa36a7 (11155111)',
                    desc: "Verifies the network to prevent accidental execution against Mainnet.",
                  },
                  {
                    step: 3,
                    title: "Inspect Latest Block & Header Trie Roots",
                    code: 'const block = await rpc("eth_getBlockByNumber", ["latest", false]);\nconsole.log({ number: block.number, stateRoot: block.stateRoot, txRoot: block.transactionsRoot });',
                    desc: "Queries the latest execution block and prints its state and transaction Merkle roots.",
                  },
                  {
                    step: 4,
                    title: "Inspect Account Balance & Nonce",
                    code: 'const [balance, nonce] = await Promise.all([\n  rpc("eth_getBalance", [address, "latest"]),\n  rpc("eth_getTransactionCount", [address, "latest"])\n]);',
                    desc: "Reads the account balance in hexadecimal Wei and retrieves transaction counter.",
                  },
                  {
                    step: 5,
                    title: "Classify Account: EOA vs. Contract Bytecode",
                    code: 'const code = await rpc("eth_getCode", [address, "latest"]);\nconsole.log(code === "0x" ? "EOA (No bytecode)" : "Smart Contract Account");',
                    desc: "Inspects deployed bytecode at the 20-byte address.",
                  },
                  {
                    step: 6,
                    title: "Inspect Transaction Parameters",
                    code: 'const tx = await rpc("eth_getTransactionByHash", [txHash]);\nconsole.log({ from: tx.from, to: tx.to, value: tx.value, type: tx.type });',
                    desc: "Fetches sender, recipient, transfer value, gas limits, and transaction envelope type.",
                  },
                  {
                    step: 7,
                    title: "Audit Execution Receipt & Status",
                    code: 'const receipt = await rpc("eth_getTransactionReceipt", [txHash]);\nconsole.log({ status: receipt.status === "0x1" ? "Success" : "Revert", gasUsed: receipt.gasUsed });',
                    desc: "Checks receipt status, actual gas consumed, and emitted event logs.",
                  },
                  {
                    step: 8,
                    title: "Inspect Smart Contract Storage Slot 0",
                    code: 'const slot0 = await rpc("eth_getStorageAt", [contractAddress, "0x0", "latest"]);\nconsole.log("Storage Slot 0 Value:", slot0);',
                    desc: "Directly queries the 256-bit storage trie at index 0.",
                  },
                ].map((lab) => (
                  <div key={lab.step} className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-orange-600 uppercase tracking-wide">
                        Step {lab.step}: {lab.title}
                      </span>
                      <button
                        onClick={() => copyCode(`el_step_${lab.step}`, lab.code)}
                        className="text-xs text-neutral-500 hover:text-neutral-900 flex items-center gap-1 font-mono"
                      >
                        {copiedSnippet === `el_step_${lab.step}` ? (
                          <>
                            <Check size={12} className="text-emerald-600" /> Copied
                          </>
                        ) : (
                          <>
                            <Copy size={12} /> Copy
                          </>
                        )}
                      </button>
                    </div>
                    <p className="text-xs text-neutral-600 mb-2">{lab.desc}</p>
                    <pre className="p-3 bg-neutral-900 text-indigo-300 rounded-lg text-xs font-mono overflow-x-auto whitespace-pre">
                      {lab.code}
                    </pre>
                  </div>
                ))}
              </div>
            </div>

            {/* Complete Node.js Script */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-wide">
                  Complete Production Script • index.js
                </span>
                <button
                  onClick={() =>
                    copyCode(
                      "full_eth_script",
                      `import "dotenv/config";

const RPC_URL = process.env.RPC_URL;
if (!RPC_URL) throw new Error("Missing RPC_URL in .env");

async function rpc(method, params = []) {
  const res = await fetch(RPC_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jsonrpc: "2.0", method, params, id: 1 })
  });
  const data = await res.json();
  if (data.error) throw new Error(\`\${data.error.code}: \${data.error.message}\`);
  return data.result;
}

async function main() {
  const chainId = await rpc("eth_chainId");
  console.log("Connected Chain ID:", chainId);
  const block = await rpc("eth_getBlockByNumber", ["latest", false]);
  console.log("Latest Block:", parseInt(block.number, 16));
}

main().catch(console.error);`
                    )
                  }
                  className="text-xs text-neutral-500 hover:text-neutral-900 flex items-center gap-1 font-mono"
                >
                  {copiedSnippet === "full_eth_script" ? (
                    <>
                      <Check size={12} className="text-emerald-600" /> Copied Script
                    </>
                  ) : (
                    <>
                      <Copy size={12} /> Copy Complete index.js
                    </>
                  )}
                </button>
              </div>
              <h2 className="text-xl font-bold text-neutral-900 mb-2">
                Automated Sepolia Inspector (Node.js JSON-RPC)
              </h2>
              <pre className="p-4 bg-neutral-900 text-indigo-300 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed">
{`import "dotenv/config";

const RPC_URL = process.env.RPC_URL;
if (!RPC_URL) throw new Error("Missing RPC_URL in .env");

async function rpc(method, params = []) {
  const res = await fetch(RPC_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jsonrpc: "2.0", method, params, id: 1 })
  });
  const data = await res.json();
  if (data.error) throw new Error(\`\${data.error.code}: \${data.error.message}\`);
  return data.result;
}

async function main() {
  // 1. Verify Sepolia Chain ID (11155111 = 0xaa36a7)
  const chainId = await rpc("eth_chainId");
  console.log("Connected to Chain ID:", chainId);

  // 2. Query Latest Block Header
  const block = await rpc("eth_getBlockByNumber", ["latest", false]);
  console.log("Latest Block Number:", parseInt(block.number, 16));
  console.log("State Root:", block.stateRoot);
  console.log("Base Fee (Gwei):", parseInt(block.baseFeePerGas, 16) / 1e9);

  // 3. Inspect Vitalik's Sepolia/Mainnet address
  const addr = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";
  const balanceHex = await rpc("eth_getBalance", [addr, "latest"]);
  const balanceEth = Number(BigInt(balanceHex)) / 1e18;
  console.log(\`Balance of \${addr}: \${balanceEth} ETH\`);
}

main().catch(console.error);`}
              </pre>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 4: QUIZ & KNOWLEDGE ASSESSMENT                                 */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "quiz" && (
          <div className="space-y-12">
            
            {/* Part A: 10 MCQs */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 20 • Examination
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                5.20 Knowledge Assessment &amp; Final Exam
              </h2>
              <p className="text-sm text-neutral-600 mb-6">
                Evaluate your technical mastery of Ethereum architecture, EVM, gas economics, Proof of Stake, and JSON-RPC.
              </p>

              <div className="space-y-6">
                {quizQuestions.map((q) => {
                  const isAnswered = selectedAnswers[q.id] !== undefined;
                  const isCorrect = selectedAnswers[q.id] === q.correct;

                  return (
                    <div
                      key={q.id}
                      className={`p-5 rounded-xl border transition ${
                        submittedQuiz
                          ? isCorrect
                            ? "bg-emerald-50/60 border-emerald-300"
                            : "bg-rose-50/60 border-rose-300"
                          : "bg-[#fbfaf7] border-[#ece8de]"
                      }`}
                    >
                      <div className="font-bold text-neutral-900 text-sm mb-3">
                        {q.id}. {q.question}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                        {q.options.map((opt, oIdx) => {
                          const isOptionSelected = selectedAnswers[q.id] === oIdx;
                          return (
                            <button
                              key={oIdx}
                              onClick={() => handleSelectAnswer(q.id, oIdx)}
                              className={`p-3 rounded-lg border text-left text-xs transition ${
                                isOptionSelected
                                  ? "bg-orange-600 text-white font-bold border-orange-600"
                                  : "bg-white border-[#ece8de] text-neutral-700 hover:bg-neutral-100"
                              }`}
                            >
                              <span className="font-mono mr-2">
                                {String.fromCharCode(65 + oIdx)}.
                              </span>
                              {opt}
                            </button>
                          );
                        })}
                      </div>

                      {submittedQuiz && (
                        <div className={`p-3 rounded-lg text-xs leading-relaxed ${
                          isCorrect ? "bg-emerald-100 text-emerald-900" : "bg-rose-100 text-rose-900"
                        }`}>
                          <strong>{isCorrect ? "Correct!" : "Incorrect."}</strong> {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-[#e7e3da] flex flex-wrap items-center justify-between gap-4">
                {!submittedQuiz ? (
                  <button
                    onClick={() => setSubmittedQuiz(true)}
                    className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-sm font-bold shadow-sm transition"
                  >
                    Submit Exam &amp; View Score
                  </button>
                ) : (
                  <div className="flex items-center gap-4">
                    <div className="text-base font-bold text-neutral-900">
                      Your Score: <span className="text-orange-600">{calculateScore()} / {quizQuestions.length}</span> (
                      {Math.round((calculateScore() / quizQuestions.length) * 100)}%)
                    </div>
                    <button
                      onClick={() => {
                        setSubmittedQuiz(false);
                        setSelectedAnswers({});
                      }}
                      className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-lg text-xs font-bold"
                    >
                      Retake Exam
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Part B: Short-Answer Reference Solutions */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-neutral-900 mb-4">
                Part B: 16 Short-Answer Examination Questions
              </h3>
              <div className="space-y-4 text-xs text-neutral-700">
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                  <div className="font-bold text-neutral-900 text-sm">1. Explain what Ethereum is and why it is programmable.</div>
                  <p>Ethereum is a decentralized world computer running a virtual execution engine (EVM). It is programmable because developers can deploy arbitrary bytecode defining stateful smart contracts, unlike Bitcoin's restricted payment-specific scripting.</p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                  <div className="font-bold text-neutral-900 text-sm">2. Explain the core differences between Bitcoin and Ethereum.</div>
                  <p>Bitcoin uses the UTXO model, Proof of Work, and restricted Script primarily for digital money. Ethereum uses an account-based state model, Gasper Proof of Stake, and a Turing-complete EVM for decentralized applications and smart contracts.</p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                  <div className="font-bold text-neutral-900 text-sm">3. What is a decentralized state machine?</div>
                  <p>A deterministic system where all participating nodes start from a shared genesis state, process identical ordered transaction batches using protocol rules, and independently compute and agree upon the exact same updated state.</p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                  <div className="font-bold text-neutral-900 text-sm">4. What is the EVM?</div>
                  <p>The Ethereum Virtual Machine is a 256-bit stack-based virtual computer executing compiled smart contract bytecode. It manages memory, storage, stack, and gas accounting across all nodes.</p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                  <div className="font-bold text-neutral-900 text-sm">5. Explain the execution and consensus layers.</div>
                  <p>The execution layer (EL) handles transaction validation, contract execution, and EVM state storage. The consensus layer (CL) coordinates Proof of Stake, validator attestations, block proposals, and Casper finality.</p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                  <div className="font-bold text-neutral-900 text-sm">6. Differentiate execution clients and consensus clients.</div>
                  <p>Execution clients (Geth, Nethermind, Besu) execute transactions and maintain LevelDB/PebbleDB state. Consensus clients (Lighthouse, Prysm, Teku) manage the Beacon Chain, track validator balances, and enforce fork choice.</p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                  <div className="font-bold text-neutral-900 text-sm">7. Explain EOAs and contract accounts.</div>
                  <p>An Externally Owned Account (EOA) is controlled by a private key, has an empty codeHash, and can initiate transactions. A contract account is controlled by deployed bytecode, has persistent storage, and executes only when called.</p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                  <div className="font-bold text-neutral-900 text-sm">8. Describe Ethereum's global account state.</div>
                  <p>The global state is an address-to-account mapping recorded in a Merkle Patricia Trie, where each account stores: nonce, balance in Wei, storageRoot, and codeHash.</p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                  <div className="font-bold text-neutral-900 text-sm">9. Explain the role of the state root.</div>
                  <p>The stateRoot is the 32-byte cryptographic root hash of the global account state trie placed in every block header, providing an unforgeable commitment to all account balances and contract storage.</p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                  <div className="font-bold text-neutral-900 text-sm">10. What is an Ethereum transaction?</div>
                  <p>A cryptographically signed instruction originating from an EOA that transfers ETH, deploys contract bytecode, or executes a function call on an existing smart contract.</p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                  <div className="font-bold text-neutral-900 text-sm">11. Explain gas and gas limits.</div>
                  <p>Gas measures computational work (opcodes, memory, storage). The gas limit is the maximum gas units a sender authorizes for transaction execution to prevent runaway costs.</p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                  <div className="font-bold text-neutral-900 text-sm">12. Differentiate Wei and Gwei.</div>
                  <p>Wei is the base atomic unit (10^-18 ETH). Gwei is 10^9 Wei, commonly used to quote gas prices (e.g. 25 Gwei).</p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                  <div className="font-bold text-neutral-900 text-sm">13. What is Proof of Stake?</div>
                  <p>A consensus mechanism where block producers (validators) deposit economic capital (ETH) as collateral rather than expending physical electrical power on Proof of Work hashing.</p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                  <div className="font-bold text-neutral-900 text-sm">14. Explain validator responsibilities.</div>
                  <p>Validators propose blocks during assigned 12-second slots, cast signed attestation votes on candidate blocks, and participate in sync committees.</p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                  <div className="font-bold text-neutral-900 text-sm">15. What is JSON-RPC?</div>
                  <p>A stateless, lightweight remote procedure call specification using JSON over HTTP/WebSocket that allows developer applications to query blockchain data and broadcast transactions.</p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                  <div className="font-bold text-neutral-900 text-sm">16. Explain Sepolia and why developers use it.</div>
                  <p>Sepolia (Chain ID 11155111) is the official recommended public testnet for smart contract development. It simulates Mainnet EVM execution without risking real monetary value.</p>
                </div>
              </div>
            </div>

            {/* Part C: In-Depth Technical Examination Questions */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-neutral-900 mb-4">
                Part C: 10 In-Depth Technical Questions
              </h3>
              <div className="space-y-4 text-xs text-neutral-700">
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                  <div className="font-bold text-neutral-900 text-sm">1. Explain the complete lifecycle of an Ethereum transaction.</div>
                  <p>A user signs an RLP-serialized transaction using their private key. The wallet broadcasts it via eth_sendRawTransaction to an execution client, which validates nonce, signature, balance, and intrinsic gas. The transaction enters the local mempool, gossips to peers, is selected by a block proposer/builder, executes in the EVM, updates the world state trie, generates a receipt with status 0x1 or 0x0, and is confirmed and finalized via Casper FFG.</p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                  <div className="font-bold text-neutral-900 text-sm">2. Describe the Ethereum account structure.</div>
                  <p>Every account is an RLP-encoded array of 4 fields: nonce (transaction count for EOAs, contract creation count for contracts), balance (in atomic Wei), storageRoot (256-bit root hash of the contract storage trie), and codeHash (Keccak-256 hash of deployed EVM bytecode, or Keccak-256 of empty string for EOAs).</p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                  <div className="font-bold text-neutral-900 text-sm">3. Explain the Merkle Patricia Trie.</div>
                  <p>A modified Radix-16 trie combined with cryptographic Merkle hashing. Keys are nibbles (4-bit hex characters) pointing to NULL, branch (16 hex paths + value), extension (shared key prefix + child hash), or leaf (key suffix + stored RLP value) nodes. It enables deterministic state commitment and O(log n) cryptographic membership proofs.</p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                  <div className="font-bold text-neutral-900 text-sm">4. Explain the differences between RLP and SSZ.</div>
                  <p>Recursive Length Prefix (RLP) is the legacy execution-layer serialization format for nested byte arrays and integers. Simple Serialize (SSZ) is the typed, consensus-layer serialization standard that supports generalized Merkle trees, fast hashing, and compact multiproofs for Beacon Chain objects.</p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                  <div className="font-bold text-neutral-900 text-sm">5. Describe the EIP-1559 fee calculation mechanism.</div>
                  <p>Base fee auto-adjusts based on whether previous block gas exceeded the 15M target. EffectiveGasPrice = min(maxFeePerGas, baseFeePerGas + maxPriorityFeePerGas). Total fee = GasUsed × EffectiveGasPrice. The base fee portion is burned permanently, while the priority tip goes to the validator.</p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                  <div className="font-bold text-neutral-900 text-sm">6. Explain the relationship between execution and consensus clients.</div>
                  <p>Post-Merge, execution clients (EL) and consensus clients (CL) form a modular pair communicating via the Engine API (port 8551 with JWT authentication). CL directs fork choice and block production, while EL executes bytecode, validates state transitions, and serves JSON-RPC.</p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                  <div className="font-bold text-neutral-900 text-sm">7. Explain Ethereum slots, epochs, and attestations.</div>
                  <p>A slot is a 12-second window for one validator to propose a block. An epoch consists of 32 slots (384 seconds). In each slot, assigned committees of validators cast signed BLS attestation votes confirming the head of the chain and checkpoint links.</p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                  <div className="font-bold text-neutral-900 text-sm">8. Describe how Ethereum reaches finality.</div>
                  <p>Casper FFG establishes finality through checkpoint pairs. When a checkpoint receives votes from a 2/3 supermajority of active staked ETH, it is justified. When the subsequent epoch checkpoint is also justified, the earlier checkpoint becomes finalized and irreversible.</p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                  <div className="font-bold text-neutral-900 text-sm">9. Explain how a smart contract changes Ethereum state.</div>
                  <p>A transaction calls contract bytecode, causing the EVM to execute opcodes like SSTORE, modifying the contract's 256-to-256 bit storage trie. This updates the contract's storageRoot, which recomputes the account's state leaf, propagating up to update the global stateRoot committed into the block header.</p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                  <div className="font-bold text-neutral-900 text-sm">10. Describe how JSON-RPC enables application integration.</div>
                  <p>Applications (via ethers.js, viem, or Web3 wallets) encode remote procedure calls into standardized JSON payloads sent over HTTP or WebSockets to node providers. It abstracts network complexity and allows developers to query state or submit signed transactions seamlessly.</p>
                </div>
              </div>
            </div>

            {/* Part D: Practical Evaluation Grading Rubric */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-neutral-900 mb-4">
                Part D: 100-Mark Practical Examination Rubric
              </h3>
              <div className="overflow-x-auto border border-[#e7e3da] rounded-xl">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#fbfaf7] border-b border-[#e7e3da] text-neutral-900 font-bold">
                    <tr>
                      <th className="p-3">Evaluation Task</th>
                      <th className="p-3">Deliverable / Demonstration</th>
                      <th className="p-3">Weight</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#ece8de] text-xs">
                    <tr>
                      <td className="p-3 font-semibold">RPC Configuration &amp; Chain ID Check</td>
                      <td className="p-3">Securing provider endpoint, querying eth_chainId, asserting 0xaa36a7</td>
                      <td className="p-3 font-bold text-orange-600">20%</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Block &amp; Header Trie Inspection</td>
                      <td className="p-3">Inspecting block number, stateRoot, transactionsRoot, and baseFee</td>
                      <td className="p-3 font-bold text-orange-600">25%</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Account State &amp; Bytecode Classification</td>
                      <td className="p-3">Converting Wei to ETH with BigInt, reading nonces, and checking bytecode</td>
                      <td className="p-3 font-bold text-orange-600">25%</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Transaction &amp; Receipt Gas Analysis</td>
                      <td className="p-3">Parsing Type 2 transactions, computing gas used, and inspecting status</td>
                      <td className="p-3 font-bold text-orange-600">20%</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Technical Architecture Documentation</td>
                      <td className="p-3">Explaining EIP-1559, EVM determinism, and Casper FFG finality</td>
                      <td className="p-3 font-bold text-orange-600">10%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 5: CAPSTONE PROJECT & CHECKLIST TRACKER                         */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "capstone-checklist" && (
          <div className="space-y-12">
            
            {/* 5.21 Capstone Project Specification */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 21 • Final Capstone Project
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                5.21 Capstone: Build an Ethereum Network Explorer (JSON-RPC)
              </h2>
              <p className="text-sm text-neutral-600 mb-6">
                Develop a production-grade web application that connects to Ethereum Sepolia through an RPC node provider, displaying live blockchain statistics, block details, account balances, transaction receipts, and gas trackers.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
                  <h4 className="font-bold text-neutral-900 text-sm mb-1">Feature 1: Dashboard</h4>
                  <p className="text-xs text-neutral-600">
                    Live displays of Sepolia chain ID, block height, base fee, gas used, and total transaction throughput.
                  </p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
                  <h4 className="font-bold text-neutral-900 text-sm mb-1">Feature 2: Block Explorer</h4>
                  <p className="text-xs text-neutral-600">
                    Input a block number or hash to inspect parent hash, stateRoot, transaction counts, and gas metrics.
                  </p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
                  <h4 className="font-bold text-neutral-900 text-sm mb-1">Feature 3: Account Explorer</h4>
                  <p className="text-xs text-neutral-600">
                    Search any 20-byte address to view ETH balance in Wei and Ether, transaction nonce, and contract bytecode status.
                  </p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
                  <h4 className="font-bold text-neutral-900 text-sm mb-1">Feature 4: Transaction Inspector</h4>
                  <p className="text-xs text-neutral-600">
                    Input a transaction hash to parse sender, recipient, value, gas price, execution receipt status, and event logs.
                  </p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
                  <h4 className="font-bold text-neutral-900 text-sm mb-1">Feature 5: Smart Contract Inspector</h4>
                  <p className="text-xs text-neutral-600">
                    Inspect deployed contract bytecode and read persistent storage slots using <code className="font-mono">eth_getStorageAt</code>.
                  </p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
                  <h4 className="font-bold text-neutral-900 text-sm mb-1">Feature 6: Gas Tracker</h4>
                  <p className="text-xs text-neutral-600">
                    Calculates estimated transaction fees under low, medium, and priority speeds using recent base fees.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 space-y-1">
                <div className="font-bold">Security Rule:</div>
                <div>Never commit provider API keys or secret credentials to frontend bundles. Always proxy requests through a secure Node.js backend with rate-limiting and input validation!</div>
              </div>
            </div>

            {/* 5.22 Recommended Learning Resources */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 22 • Technical References
              </div>
              <h2 className="text-xl font-bold text-neutral-900 mb-4">
                5.22 Recommended Technical Resources &amp; Specifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                <a
                  href="https://ethereum.org/developers/docs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl hover:border-orange-500 transition group"
                >
                  <div className="font-bold text-neutral-900 group-hover:text-orange-600 mb-1 flex items-center justify-between">
                    Ethereum Docs <ExternalLink size={12} />
                  </div>
                  <p className="text-neutral-500">Official technical documentation on EVM, accounts, blocks, and gas.</p>
                </a>
                <a
                  href="https://geth.ethereum.org/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl hover:border-orange-500 transition group"
                >
                  <div className="font-bold text-neutral-900 group-hover:text-orange-600 mb-1 flex items-center justify-between">
                    Geth Documentation <ExternalLink size={12} />
                  </div>
                  <p className="text-neutral-500">Go Ethereum execution client documentation and JSON-RPC APIs.</p>
                </a>
                <a
                  href="https://eips.ethereum.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl hover:border-orange-500 transition group"
                >
                  <div className="font-bold text-neutral-900 group-hover:text-orange-600 mb-1 flex items-center justify-between">
                    EIP Repository <ExternalLink size={12} />
                  </div>
                  <p className="text-neutral-500">Standards for EIP-1559 (fees), EIP-4844 (blobs), and EIP-7702.</p>
                </a>
                <a
                  href="https://github.com/ethereumbook/ethereumbook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl hover:border-orange-500 transition group"
                >
                  <div className="font-bold text-neutral-900 group-hover:text-orange-600 mb-1 flex items-center justify-between">
                    Mastering Ethereum <ExternalLink size={12} />
                  </div>
                  <p className="text-neutral-500">Authoritative open-source book by Andreas Antonopoulos &amp; Gavin Wood.</p>
                </a>
              </div>
            </div>

            {/* Interactive 21-Item Completion Checklist */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900">
                    Module 5 Completion Checklist
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Track your technical progress across all 21 learning objectives (saved automatically in browser storage).
                  </p>
                </div>
                <button
                  onClick={resetChecklist}
                  className="text-xs text-neutral-500 hover:text-neutral-900 flex items-center gap-1 font-semibold"
                >
                  <RotateCcw size={12} /> Reset Progress
                </button>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>Student Learning Progress</span>
                  <span className="text-orange-600">{progressPercent}% ({completedChecklistCount} of {checklistItems.length})</span>
                </div>
                <div className="w-full h-3 bg-neutral-100 rounded-full overflow-hidden border border-[#ece8de]">
                  <div
                    className="h-full bg-orange-600 transition-all duration-300 rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Checkbox Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {checklistItems.map((item) => {
                  const isChecked = !!checklist[item.id];
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleChecklistItem(item.id)}
                      className={`p-3 rounded-xl border cursor-pointer transition flex items-start gap-3 ${
                        isChecked
                          ? "bg-emerald-50/70 border-emerald-300 text-emerald-950 font-medium"
                          : "bg-[#fbfaf7] border-[#ece8de] text-neutral-700 hover:bg-white"
                      }`}
                    >
                      <button className="mt-0.5 text-orange-600">
                        {isChecked ? <CheckSquare size={16} className="text-emerald-600" /> : <Square size={16} className="text-neutral-400" />}
                      </button>
                      <span className="text-xs leading-relaxed">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Next Module Navigation */}
            <div className="p-6 bg-white border border-[#e7e3da] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => navigate("/learning/blockchain/bitcoin-utxo")}
                className="w-full sm:w-auto px-5 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-xl text-sm font-semibold transition flex items-center justify-center gap-2"
              >
                <ArrowLeft size={16} /> Previous: 4. Bitcoin Mechanics &amp; UTXO
              </button>
              <button
                onClick={() => navigate("/learning/blockchain/solidity")}
                className="w-full sm:w-auto px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-sm font-bold transition flex items-center justify-center gap-2 shadow-sm"
              >
                Next Module: 6. Solidity Engineering <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
