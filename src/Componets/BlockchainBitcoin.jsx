import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  Cpu,
  Layers,
  Network,
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
  Key,
  Lock,
  Unlock,
  Radio,
  Clock,
  DollarSign,
  Box,
  Compass,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";

// Browser-native SHA-256 helper
async function sha256Browser(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

// RIPEMD-160 approximation for simulation visualization
async function hash160Mock(hexStr) {
  const sha = await sha256Browser(hexStr);
  return sha.slice(0, 40); // 20 bytes = 40 hex chars
}

export default function BlockchainBitcoin() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning/blockchain/consensus");

  // Tab State: 'theory' | 'interactive-tools' | 'labs-code' | 'quiz' | 'capstone-checklist'
  const [activeTab, setActiveTab] = useState("theory");

  // Copy-to-clipboard state
  const [copiedSnippet, setCopiedSnippet] = useState(null);
  const copyCode = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  // -------------------------------------------------------------
  // Tool 1: Interactive UTXO Balance & Transaction Builder
  // -------------------------------------------------------------
  const [utxoPool, setUtxoPool] = useState([
    { id: "tx_alpha:0", amount: 0.5, desc: "Mining reward payout" },
    { id: "tx_beta:1", amount: 0.3, desc: "Payment from Bob" },
    { id: "tx_gamma:0", amount: 0.2, desc: "Refund change" },
  ]);
  const [selectedUtxos, setSelectedUtxos] = useState(["tx_alpha:0", "tx_beta:1"]);
  const [sendAmount, setSendAmount] = useState(0.6);
  const [feeRateSats, setFeeRateSats] = useState(10); // sat/vB
  const estimatedVsize = selectedUtxos.length * 68 + 2 * 31 + 10.5; // ~148 vB for 2 in, 2 out SegWit
  const estimatedFeeBtc = (estimatedVsize * feeRateSats) / 100000000;

  const totalInputBtc = useMemo(() => {
    return selectedUtxos.reduce((acc, uid) => {
      const u = utxoPool.find((x) => x.id === uid);
      return acc + (u ? u.amount : 0);
    }, 0);
  }, [selectedUtxos, utxoPool]);

  const changeBtc = useMemo(() => {
    const diff = totalInputBtc - sendAmount - estimatedFeeBtc;
    return diff > 0 ? parseFloat(diff.toFixed(8)) : 0;
  }, [totalInputBtc, sendAmount, estimatedFeeBtc]);

  const utxoConservationValid = totalInputBtc >= sendAmount + estimatedFeeBtc && sendAmount > 0;

  const toggleUtxoSelection = (id) => {
    if (selectedUtxos.includes(id)) {
      setSelectedUtxos(selectedUtxos.filter((x) => x !== id));
    } else {
      setSelectedUtxos([...selectedUtxos, id]);
    }
  };

  // -------------------------------------------------------------
  // Tool 2: Bitcoin Script Stack Execution Engine (P2PKH)
  // -------------------------------------------------------------
  const [scriptStep, setScriptStep] = useState(0);
  const sampleSig = "30450221008f...[DER Sig]";
  const samplePubKey = "02b28c8d8c...[Compressed PubKey]";
  const samplePubKeyHash = "c7d23d9a5b...[20-byte HASH160]";

  const scriptSteps = [
    {
      step: 0,
      name: "Initial Transaction State",
      op: "Provide scriptSig: <sig> <pubKey>",
      stack: [sampleSig, samplePubKey],
      description: "Spender provides the digital signature and compressed public key in the transaction input witness/scriptSig.",
    },
    {
      step: 1,
      name: "Execute OP_DUP",
      op: "OP_DUP",
      stack: [sampleSig, samplePubKey, samplePubKey],
      description: "OP_DUP duplicates the top element on the stack (the public key).",
    },
    {
      step: 2,
      name: "Execute OP_HASH160",
      op: "OP_HASH160",
      stack: [sampleSig, samplePubKey, samplePubKeyHash],
      description: "Computes SHA-256 followed by RIPEMD-160 on the duplicated public key, producing a 20-byte digest.",
    },
    {
      step: 3,
      name: "Push Public Key Hash from scriptPubKey",
      op: `<Public Key Hash>`,
      stack: [sampleSig, samplePubKey, samplePubKeyHash, samplePubKeyHash],
      description: "The locking script pushes the required recipient public key hash onto the stack.",
    },
    {
      step: 4,
      name: "Execute OP_EQUALVERIFY",
      op: "OP_EQUALVERIFY",
      stack: [sampleSig, samplePubKey],
      description: "Pops the two top hashes and verifies they match exactly. If equal, execution continues; otherwise, transaction is immediately invalid.",
    },
    {
      step: 5,
      name: "Execute OP_CHECKSIG",
      op: "OP_CHECKSIG",
      stack: ["TRUE (1)"],
      description: "Pops the public key and signature, hashes the transaction digest according to SIGHASH rules, and verifies the secp256k1 ECDSA/Schnorr signature. Pushes 1 (TRUE) on success.",
    },
  ];

  // -------------------------------------------------------------
  // Tool 3: Difficulty Retargeting & Halving Calculator
  // -------------------------------------------------------------
  const [simulatedTimespanDays, setSimulatedTimespanDays] = useState(14);
  const [currentBlockHeight, setCurrentBlockHeight] = useState(840000);

  const calculatedTargetFactor = useMemo(() => {
    let factor = simulatedTimespanDays / 14;
    if (factor < 0.25) factor = 0.25;
    if (factor > 4.0) factor = 4.0;
    return factor;
  }, [simulatedTimespanDays]);

  const halvingEra = Math.floor(currentBlockHeight / 210000);
  const blockSubsidy = useMemo(() => {
    let s = 50;
    for (let i = 0; i < halvingEra; i++) {
      s = s / 2;
    }
    return s > 0 ? s : 0;
  }, [halvingEra]);

  // -------------------------------------------------------------
  // Tool 4: SegWit Weight & Virtual Size Calculator
  // -------------------------------------------------------------
  const [calcInputs, setCalcInputs] = useState(2);
  const [calcOutputs, setCalcOutputs] = useState(2);
  const [calcTxType, setCalcTxType] = useState("segwit-p2wpkh"); // legacy-p2pkh | segwit-p2wpkh | taproot-p2tr

  const weightStats = useMemo(() => {
    let baseBytes = 0;
    let witnessBytes = 0;

    if (calcTxType === "legacy-p2pkh") {
      baseBytes = 10 + calcInputs * 148 + calcOutputs * 34;
      witnessBytes = 0;
    } else if (calcTxType === "segwit-p2wpkh") {
      baseBytes = 10 + calcInputs * 41 + calcOutputs * 31;
      witnessBytes = 2 + calcInputs * 105; // marker + flag + signatures
    } else {
      // Taproot (P2TR)
      baseBytes = 10 + calcInputs * 41 + calcOutputs * 43;
      witnessBytes = 2 + calcInputs * 66; // Schnorr 64B sig + len
    }

    const totalBytes = baseBytes + witnessBytes;
    const weightUnits = 3 * baseBytes + totalBytes;
    const vsize = Math.ceil(weightUnits / 4);
    const savingsPercent = calcTxType === "legacy-p2pkh" ? 0 : Math.round((1 - vsize / (10 + calcInputs * 148 + calcOutputs * 34)) * 100);

    return { baseBytes, witnessBytes, totalBytes, weightUnits, vsize, savingsPercent };
  }, [calcInputs, calcOutputs, calcTxType]);

  // -------------------------------------------------------------
  // Quiz State
  // -------------------------------------------------------------
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submittedQuiz, setSubmittedQuiz] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "What data structure does Bitcoin use to track spendable transaction outputs?",
      options: ["Account balance model", "UTXO model", "Relational database model", "Centralized bank ledger"],
      correct: 1,
      explanation: "Bitcoin does not track account balances. It maintains an unspent transaction output (UTXO) set in its chainstate database.",
    },
    {
      id: 2,
      question: "What is the exact size of a traditional Bitcoin block header?",
      options: ["64 bytes", "72 bytes", "80 bytes", "128 bytes"],
      correct: 2,
      explanation: "A Bitcoin block header is exactly 80 bytes: 4B Version + 32B PrevBlockHash + 32B MerkleRoot + 4B Time + 4B nBits + 4B Nonce.",
    },
    {
      id: 3,
      question: "Which cryptographic algorithm is traditionally used for Bitcoin block-header Proof of Work?",
      options: ["Single SHA-1", "MD5", "Double SHA-256 (SHA256(SHA256(header)))", "AES-256"],
      correct: 2,
      explanation: "Bitcoin block headers are hashed using double SHA-256 to guard against length-extension vulnerabilities.",
    },
    {
      id: 4,
      question: "What is the Bitcoin difficulty retargeting interval?",
      options: ["100 blocks", "500 blocks", "1,000 blocks", "2,016 blocks (~14 days)"],
      correct: 3,
      explanation: "Bitcoin difficulty retargets every 2,016 blocks, which corresponds to exactly 14 days at the target 10-minute block pace.",
    },
    {
      id: 5,
      question: "What is the Bitcoin block subsidy following the April 2024 halving (and in 2026)?",
      options: ["50 BTC", "12.5 BTC", "6.25 BTC", "3.125 BTC"],
      correct: 3,
      explanation: "The fourth halving at block 840,000 reduced the block subsidy from 6.25 BTC to 3.125 BTC.",
    },
    {
      id: 6,
      question: "What does Segregated Witness (SegWit, BIP 141) separate from traditional transaction serialization?",
      options: ["Output satoshi values", "Witness signature data", "Block timestamps", "Previous block hashes"],
      correct: 1,
      explanation: "SegWit moves cryptographic signatures and scripts into a separate witness structure, eliminating transaction malleability and reducing effective vsize.",
    },
    {
      id: 7,
      question: "What does the PSBT standard (BIP 174) stand for?",
      options: ["Public Signature Bitcoin Transaction", "Partially Signed Bitcoin Transaction", "Private Script Blockchain Transfer", "Protocol Signed Block Transaction"],
      correct: 1,
      explanation: "Partially Signed Bitcoin Transaction (PSBT) provides a standard binary format for passing unsigned or partially signed transactions between wallets and signers.",
    },
    {
      id: 8,
      question: "What is the role of an HTLC in the Lightning Network?",
      options: ["PoW block mining", "Enforcing conditional atomic payments using hash preimages and timelocks", "Public key derivation", "Pruning historical UTXOs"],
      correct: 1,
      explanation: "Hashed Timelock Contracts (HTLCs) allow routed multi-hop off-chain payments to settle atomically across payment channels.",
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
  const CHECKLIST_KEY = "prepspaces_bitcoin_m4_checklist";
  const [checklist, setChecklist] = useState(() => {
    try {
      const saved = localStorage.getItem(CHECKLIST_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const checklistItems = [
    { id: "chk_1", label: "Understand Bitcoin's history and design philosophy (Diffie-Hellman to 2024 halving)" },
    { id: "chk_2", label: "Understand peer-to-peer architecture and node types (Full, Archival, Pruned, SPV, Mining)" },
    { id: "chk_3", label: "Study Bitcoin block structure, 80-byte header fields, and binary Merkle trees" },
    { id: "chk_4", label: "Understand the UTXO model, outpoints, value conservation, and coin selection algorithms" },
    { id: "chk_5", label: "Learn transaction serialization, txid vs wtxid, locktime, and sequence numbers" },
    { id: "chk_6", label: "Study Bitcoin Script, stack-based LIFO execution, opcodes, and P2PKH/P2SH scripts" },
    { id: "chk_7", label: "Understand Bitcoin address formats (Legacy Base58Check, Bech32 P2WPKH, Bech32m Taproot)" },
    { id: "chk_8", label: "Learn elliptic-curve secp256k1 keys, scalar multiplication, and Schnorr signatures" },
    { id: "chk_9", label: "Understand transaction signing, SIGHASH types, and BIP 174 PSBT workflows" },
    { id: "chk_10", label: "Study Proof of Work mining, nonce search, extraNonce in coinbase, and mining pools" },
    { id: "chk_11", label: "Calculate difficulty adjustments and understand the 2,016-block retarget formula" },
    { id: "chk_12", label: "Understand the 210,000-block halving schedule and the 21 million BTC mathematical limit" },
    { id: "chk_13", label: "Analyze mempool mechanics, gossip relay policies, RBF, and CPFP fee bumping" },
    { id: "chk_14", label: "Calculate transaction fees using virtual size (sat/vB) and understand dust thresholds" },
    { id: "chk_15", label: "Understand SegWit (BIP 141), transaction malleability fixes, and block weight units" },
    { id: "chk_16", label: "Study Lightning Network Layer 2 channels, commitment states, and HTLC atomic routing" },
    { id: "chk_17", label: "Analyze Bitcoin security models: 51% attacks, double spending, Sybil, and Eclipse attacks" },
    { id: "chk_18", label: "Complete the 14-step Bitcoin Core Regtest CLI transaction lab" },
    { id: "chk_19", label: "Complete the Bitcoin Transaction Explorer capstone project specification" },
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
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col font-sans overflow-x-hidden">
      {/* Top Navigation */}
      <ModuleNav track="blockchain" currentModuleId="bitcoin-utxo" />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-28 sm:pb-36">
        
        {/* Module Header Banner */}
        <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 mb-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-amber-100 text-amber-900 border border-amber-300 rounded-full text-xs font-bold uppercase tracking-wider">
                Module 4 • Advanced Core Module
              </span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 border border-orange-200 rounded-full text-xs font-semibold">
                18–22 Hours Est.
              </span>
              <span className="px-3 py-1 bg-neutral-100 text-neutral-700 border border-neutral-300 rounded-full text-xs font-medium">
                Regtest • CLI • JSON-RPC
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
            Bitcoin Architecture, Transactions & UTXO Model
          </h1>
          <p className="text-base sm:text-lg text-[#52525b] max-w-4xl leading-relaxed mb-6">
            Master how Bitcoin operates at the protocol, cryptographic, and implementation levels. Explore P2P node gossip, the UTXO accounting model, 80-byte block headers, transaction serialization, Script stack execution, secp256k1 key derivation, mining difficulty adjustments, mempool fee markets, SegWit, and Lightning Network payment channels.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#e7e3da]">
            <div className="p-3 bg-[#fbfaf7] rounded-xl border border-[#ece8de]">
              <div className="text-xs text-neutral-500 font-medium">Curriculum Scope</div>
              <div className="text-lg font-bold text-neutral-900">22 Sections Full</div>
            </div>
            <div className="p-3 bg-[#fbfaf7] rounded-xl border border-[#ece8de]">
              <div className="text-xs text-neutral-500 font-medium">Practical Lab</div>
              <div className="text-lg font-bold text-orange-600">14-Step Regtest</div>
            </div>
            <div className="p-3 bg-[#fbfaf7] rounded-xl border border-[#ece8de]">
              <div className="text-xs text-neutral-500 font-medium">Engineering Capstone</div>
              <div className="text-lg font-bold text-neutral-900">Tx Explorer RPC</div>
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
            <BookOpen size={16} /> Complete Curriculum & Theory
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
            <Terminal size={16} /> Regtest Labs & Python RPC
          </button>
          <button
            onClick={() => setActiveTab("quiz")}
            className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition flex items-center gap-2 whitespace-nowrap ${
              activeTab === "quiz"
                ? "bg-orange-600 text-white shadow-sm"
                : "bg-white text-neutral-700 hover:bg-neutral-100 border border-[#e7e3da]"
            }`}
          >
            <HelpCircle size={16} /> Knowledge Assessment & Exam
          </button>
          <button
            onClick={() => setActiveTab("capstone-checklist")}
            className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition flex items-center gap-2 whitespace-nowrap ${
              activeTab === "capstone-checklist"
                ? "bg-orange-600 text-white shadow-sm"
                : "bg-white text-neutral-700 hover:bg-neutral-100 border border-[#e7e3da]"
            }`}
          >
            <Award size={16} /> Capstone & Learning Tracker
          </button>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* TAB 1: THEORY & FULL CURRICULUM (SECTIONS 4.1 to 4.22)            */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "theory" && (
          <div className="space-y-12">
            
            {/* 4.1 Section 1: Bitcoin History and Design Philosophy */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 1 • Foundations
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                4.1 Bitcoin History and Design Philosophy
              </h2>

              <div className="space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.1.1 What is Bitcoin?</h3>
                  <p className="mb-3">
                    Bitcoin is a decentralized peer-to-peer electronic payment system that allows participants to transfer digital value directly between each other without requiring a central payment processor, clearing house, or financial institution to authorize or clear transactions.
                  </p>
                  <p className="mb-3">
                    Traditional digital payments depend on centralized institutions. For example, consider transferring money between two bank accounts:
                  </p>
                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl text-sm font-mono space-y-1 text-neutral-800 mb-3">
                    <div>1. Alice initiates a payment request.</div>
                    <div>2. Alice's bank receives the request and checks Alice's account ledger.</div>
                    <div>3. The interbank settlement network communicates with Bob's bank.</div>
                    <div>4. Both banks update their respective closed, proprietary database records.</div>
                    <div>5. The banks maintain the ultimate authoritative records and can reverse or censor transactions.</div>
                  </div>
                  <p className="mb-3">
                    Bitcoin replaces this architecture. Instead of one organization maintaining the ledger, independent computers called <strong>nodes</strong> maintain, broadcast, and validate identical cryptographic copies of the blockchain.
                  </p>
                  <p className="mb-3">
                    Bitcoin combines seven core technologies into a unified distributed ledger:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-2 text-neutral-800">
                    <li>Peer-to-peer gossip networking over TCP/IP</li>
                    <li>Asymmetric public-key cryptography (secp256k1)</li>
                    <li>Cryptographic hash functions (SHA-256 and RIPEMD-160)</li>
                    <li>Digital signature verification (ECDSA and Schnorr)</li>
                    <li>Proof of Work consensus tied to computational thermodynamics</li>
                    <li>Distributed consensus rules enforced independently by every node</li>
                    <li>Economic game-theoretic incentives through block subsidies and transaction fees</li>
                  </ul>
                  <div className="mt-4 p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl text-sm text-amber-900">
                    <strong>Critical Concept:</strong> Bitcoin does not maintain a conventional account balance for every user. It tracks transaction outputs that have not yet been spent. This is known as the <strong>UTXO model (Unspent Transaction Output)</strong>.
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.1.2 Historical Background & Precursors</h3>
                  <p className="mb-3">
                    Bitcoin was not created in a vacuum; it unified decades of cryptographic research, digital cash experiments, and distributed systems work:
                  </p>
                  <div className="overflow-x-auto border border-[#e7e3da] rounded-xl mb-4">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-[#fbfaf7] border-b border-[#e7e3da] text-neutral-900 font-bold">
                        <tr>
                          <th className="p-3">Year</th>
                          <th className="p-3">Milestone / Research</th>
                          <th className="p-3">Core Contribution to Bitcoin</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ece8de]">
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">1976</td>
                          <td className="p-3 font-semibold">Diffie & Hellman</td>
                          <td className="p-3">Asymmetric public-key cryptography and key exchange</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">1991</td>
                          <td className="p-3 font-semibold">Haber & Stornetta</td>
                          <td className="p-3">Cryptographic timestamping using chained hash pointers and Merkle trees</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">1997</td>
                          <td className="p-3 font-semibold">Adam Back (Hashcash)</td>
                          <td className="p-3">Proof of Work computational puzzle to prevent email spam / DoS</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">1998</td>
                          <td className="p-3 font-semibold">Wei Dai (b-money)</td>
                          <td className="p-3">Anonymous, distributed electronic cash scheme with PoW issuance</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">1998</td>
                          <td className="p-3 font-semibold">Nick Szabo (Bit Gold)</td>
                          <td className="p-3">Decentralized chain of PoW puzzle solutions and timestamped registry</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">2008</td>
                          <td className="p-3 font-semibold">Satoshi Nakamoto</td>
                          <td className="p-3">Published <em>Bitcoin: A Peer-to-Peer Electronic Cash System</em> whitepaper</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">2009</td>
                          <td className="p-3 font-semibold">Bitcoin Network Genesis</td>
                          <td className="p-3">Genesis Block mined on Jan 3, 2009 with newspaper headline embedded</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">2010</td>
                          <td className="p-3 font-semibold">First Commercial Purchase</td>
                          <td className="p-3">10,000 BTC paid for two Papa John's pizzas by Laszlo Hanyecz</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">2012 / 2016 / 2020</td>
                          <td className="p-3 font-semibold">Halvings 1, 2, 3</td>
                          <td className="p-3">Block subsidy reduced from 50 to 25, then 12.5, then 6.25 BTC</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">2017</td>
                          <td className="p-3 font-semibold">Segregated Witness (SegWit)</td>
                          <td className="p-3">BIP 141 activated; solved transaction malleability & enabled Lightning</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">2021</td>
                          <td className="p-3 font-semibold">Taproot Upgrade</td>
                          <td className="p-3">BIPs 340, 341, 342; Schnorr signatures and Merkleized Alternative Script Trees (MAST)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">2024</td>
                          <td className="p-3 font-semibold">Fourth Bitcoin Halving</td>
                          <td className="p-3">Block 840,000 mined on April 20, 2024; subsidy reduced to 3.125 BTC</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm">
                    <strong>Primary Reading:</strong> Read the original 9-page whitepaper:{" "}
                    <a
                      href="https://bitcoin.org/bitcoin.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 font-bold hover:underline inline-flex items-center gap-1"
                    >
                      Bitcoin: A Peer-to-Peer Electronic Cash System (Satoshi Nakamoto, 2008) <ExternalLink size={12} />
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.1.3 Fundamental Problems Bitcoin Solves</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
                      <h4 className="font-bold text-neutral-900 mb-1">Problem 1: Centralized Control</h4>
                      <p className="text-sm text-neutral-600">
                        Traditional financial systems depend on central banks and payment companies that can freeze accounts, seize funds, or devalue currencies through arbitrary monetary inflation. Bitcoin distributes consensus across thousands of sovereign nodes.
                      </p>
                    </div>
                    <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
                      <h4 className="font-bold text-neutral-900 mb-1">Problem 2: Double Spending</h4>
                      <p className="text-sm text-neutral-600">
                        Digital information can be endlessly copied at near-zero cost. Bitcoin prevents spending the same digital token twice through chronological chaining of blocks, irreversible Proof of Work, and independent UTXO validation.
                      </p>
                    </div>
                    <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
                      <h4 className="font-bold text-neutral-900 mb-1">Problem 3: Intermediary Rent Extraction</h4>
                      <p className="text-sm text-neutral-600">
                        Intermediaries impose significant merchant fees (2-4%), delay cross-border settlements by days, and require personal identity data that creates massive data-breach liabilities. Bitcoin enables peer-to-peer settlement directly between parties.
                      </p>
                    </div>
                    <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
                      <h4 className="font-bold text-neutral-900 mb-1">Problem 4: Blind Trust in Central Records</h4>
                      <p className="text-sm text-neutral-600">
                        Instead of trusting that a bank or government accurately maintains balances, any individual can download Bitcoin Core, replay all transactions from 2009 to the present, and independently verify every single satoshi in circulation.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.1.4 Bitcoin Design Principles & Architectural Axioms</h3>
                  <div className="overflow-x-auto border border-[#e7e3da] rounded-xl mb-4">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-[#fbfaf7] border-b border-[#e7e3da] text-neutral-900 font-bold">
                        <tr>
                          <th className="p-3">Principle</th>
                          <th className="p-3">Technical Implementation & Guarantee</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ece8de]">
                        <tr>
                          <td className="p-3 font-semibold text-neutral-900">Decentralization</td>
                          <td className="p-3">No master node, server farm, or coordinator. All peers communicate over an unpermissioned gossip network.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-neutral-900">Transparency</td>
                          <td className="p-3">All confirmed transactions, scripts, inputs, and outputs are public and permanently auditable on the blockchain.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-neutral-900">Censorship Resistance</td>
                          <td className="p-3">No centralized operator can block an address. Any miner globally can choose to include any valid transaction.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-neutral-900">Cryptographic Ownership</td>
                          <td className="p-3">"Not your keys, not your coins." Spending rights are authorized strictly through digital signatures matching locking scripts.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-neutral-900">Limited Issuance</td>
                          <td className="p-3">Hardcoded ceiling of approximately 21,000,000 BTC governed by mathematical halving every 210,000 blocks.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-neutral-900">Open Participation</td>
                          <td className="p-3">Anyone can run a node, mine with hardware, or broadcast transactions without permission, identity KYC, or licensing.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-neutral-900">Independent Verifiability</td>
                          <td className="p-3">"Don't trust, verify." Every full node checks every signature, UTXO, and hash target rather than taking a miner's word.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.1.5 Bitcoin vs Traditional Banking Architecture</h3>
                  <div className="overflow-x-auto border border-[#e7e3da] rounded-xl mb-4">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-[#fbfaf7] border-b border-[#e7e3da] text-neutral-900 font-bold">
                        <tr>
                          <th className="p-3">Dimension</th>
                          <th className="p-3">Traditional Central Banking</th>
                          <th className="p-3">Bitcoin Network</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ece8de]">
                        <tr>
                          <td className="p-3 font-semibold">Ledger Maintenance</td>
                          <td className="p-3">Private relational databases maintained by banking institutions</td>
                          <td className="p-3">Public append-only distributed blockchain replicated across all nodes</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Transaction Validation</td>
                          <td className="p-3">Opaque centralized fraud rules and manual bank reviews</td>
                          <td className="p-3">Deterministic mathematical consensus rules verified by open-source code</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Accounting Model</td>
                          <td className="p-3">Account-based (Balance = Credit - Debit)</td>
                          <td className="p-3">UTXO-based (Balance = Sum of spendable unspent outputs)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Authorization</td>
                          <td className="p-3">Usernames, passwords, OTPs, identity KYC documents</td>
                          <td className="p-3">Asymmetric cryptographic digital signatures (ECDSA / Schnorr)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Operating Availability</td>
                          <td className="p-3">Banking hours, national holidays, batch clearing delays</td>
                          <td className="p-3">Continuous 24/7/365 uninterrupted global uptime</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Monetary Issuance</td>
                          <td className="p-3">Central bank discretionary monetary policy & fractional reserve</td>
                          <td className="p-3">Strictly algorithmic geometric halving schedule converging to 21M</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Settlement Finality</td>
                          <td className="p-3">Reversible via chargebacks, legal liens, or administrative fiat</td>
                          <td className="p-3">Irreversible once buried beneath multiple Proof of Work blocks</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="p-4 bg-neutral-100 rounded-xl text-sm text-neutral-800">
                    <strong>Academic Discussion: Is Bitcoin completely decentralized?</strong>
                    <p className="mt-1">
                      In university research, students evaluate decentralization as a multidimensional spectrum rather than a binary switch. While consensus validation is highly decentralized across tens of thousands of independent full nodes, practical centralization risks persist in ASIC chip manufacturing (dominated by a handful of foundries like TSMC), mining pool concentration (top 3 pools often produce &gt;50% of blocks), core protocol client development (Bitcoin Core dominance), and liquidity concentration on centralized exchanges.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 4.2 Section 2: Bitcoin Network Architecture */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 2 • Topology & Nodes
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                4.2 Bitcoin Network Architecture & P2P Protocols
              </h2>

              <div className="space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.2.1 Peer-to-Peer Network Architecture</h3>
                  <p className="mb-3">
                    Bitcoin operates as an uncoordinated peer-to-peer overlay network running on top of the public Internet. There is no central load balancer, central domain name, or master cluster. Every node maintains dynamic TCP connections (default port 8333 on mainnet, 18444 on regtest) to 8 or more peers, forming a resilient unstructured mesh network.
                  </p>
                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl text-center mb-4">
                    <div className="font-mono text-sm text-neutral-800 font-bold mb-2">
                      [Wallet Application] ──&gt; [Full Node] &lt;══(P2P Gossip)══&gt; [Mining Node]
                    </div>
                    <div className="text-xs text-neutral-500">
                      Transactions originate in user wallets, are validated and stored in node mempools, and are gossiped across the peer network to miners who assemble candidate blocks.
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.2.2 Taxonomy of Bitcoin Nodes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
                      <div className="font-bold text-neutral-900 text-base mb-1">A. Full Node (Sovereign Validator)</div>
                      <p className="text-sm text-neutral-600 mb-2">
                        Downloads and independently verifies every single block and transaction since the 2009 Genesis Block against all consensus rules.
                      </p>
                      <ul className="text-xs space-y-1 text-neutral-500 list-disc list-inside">
                        <li>Verifies digital signatures and script execution</li>
                        <li>Ensures inputs reference unspent UTXOs in chainstate</li>
                        <li>Checks Proof of Work target and difficulty</li>
                        <li>Enforces block subsidy limits and 100-block coinbase maturity</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
                      <div className="font-bold text-neutral-900 text-base mb-1">B. Archival Full Node</div>
                      <p className="text-sm text-neutral-600 mb-2">
                        A full node that stores the complete historical blockchain on disk (~600+ GB in 2026).
                      </p>
                      <ul className="text-xs space-y-1 text-neutral-500 list-disc list-inside">
                        <li>Maintains all undo files (<code className="font-mono">rev*.dat</code>) and raw blocks (<code className="font-mono">blk*.dat</code>)</li>
                        <li>Serves historical blocks to newly syncing peers (Initial Block Download - IBD)</li>
                        <li>Can re-index or serve arbitrary historical blockchain RPC queries</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
                      <div className="font-bold text-neutral-900 text-base mb-1">C. Pruned Full Node</div>
                      <p className="text-sm text-neutral-600 mb-2">
                        A full node that validates the entire blockchain from genesis, but deletes historical raw block data once verified, retaining only recent blocks and the active UTXO chainstate database.
                      </p>
                      <ul className="text-xs space-y-1 text-neutral-500 list-disc list-inside">
                        <li>Requires only ~10-15 GB of disk storage space</li>
                        <li>Offers exactly identical security and cryptographic sovereignty as archival nodes</li>
                        <li>Cannot serve older historical blocks to syncing peers</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
                      <div className="font-bold text-neutral-900 text-base mb-1">D. SPV / Light Client (BIP 37 / BIP 157)</div>
                      <p className="text-sm text-neutral-600 mb-2">
                        Simplified Payment Verification client designed for smartphones and low-resource devices.
                      </p>
                      <ul className="text-xs space-y-1 text-neutral-500 list-disc list-inside">
                        <li>Downloads only the 80-byte block headers (~50 MB total)</li>
                        <li>Uses Merkle inclusion proofs to verify payments without validating full blocks</li>
                        <li>Must trust honest full nodes for fee policies and unconfirmed transactions</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl md:col-span-2">
                      <div className="font-bold text-neutral-900 text-base mb-1">E. Mining Node</div>
                      <p className="text-sm text-neutral-600">
                        Collects pending transactions from its mempool, constructs candidate block headers, and computes billions of double SHA-256 hashes per second (via connected ASIC mining rigs). Mining nodes produce Proof of Work solutions, but must strictly conform to the consensus rules enforced by full nodes, or their mined blocks will be rejected.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.2.3 Internal Architecture of Bitcoin Core Full Node</h3>
                  <div className="overflow-x-auto border border-[#e7e3da] rounded-xl mb-4">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-[#fbfaf7] border-b border-[#e7e3da] text-neutral-900 font-bold">
                        <tr>
                          <th className="p-3">Subsystem</th>
                          <th className="p-3">Component File/DB</th>
                          <th className="p-3">Responsibility</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ece8de]">
                        <tr>
                          <td className="p-3 font-semibold">P2P Networking</td>
                          <td className="p-3 font-mono text-xs">net.cpp / connman</td>
                          <td className="p-3">Manages peer connections, TCP sockets, handshakes, and bans misbehaving peers</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Transaction Validation</td>
                          <td className="p-3 font-mono text-xs">validation.cpp</td>
                          <td className="p-3">Evaluates transaction inputs, scripts, sighashes, fees, and standardness</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Block Validation</td>
                          <td className="p-3 font-mono text-xs">consensus/validation</td>
                          <td className="p-3">Verifies PoW target, Merkle root, block size/weight, and connects valid blocks</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Mempool (Memory Pool)</td>
                          <td className="p-3 font-mono text-xs">txmempool.cpp</td>
                          <td className="p-3">In-memory container holding valid, unconfirmed transactions awaiting mining</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Chainstate Database</td>
                          <td className="p-3 font-mono text-xs">chainstate/ (LevelDB)</td>
                          <td className="p-3">Tracks the complete active set of Unspent Transaction Outputs (UTXO set)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Block Storage</td>
                          <td className="p-3 font-mono text-xs">blocks/blk*.dat</td>
                          <td className="p-3">Appended flat binary files holding raw serialized Bitcoin blocks</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">JSON-RPC / REST Interface</td>
                          <td className="p-3 font-mono text-xs">httprpc.cpp / rpc/*</td>
                          <td className="p-3">Authenticated HTTP API for developer CLI tools, wallets, and explorers</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.2.4 P2P Wire Protocol & Gossip Communication</h3>
                  <p className="mb-3">
                    Bitcoin nodes communicate over TCP using structured binary wire messages. A 24-byte header prefixes every message (4B Magic, 12B Command string, 4B Length, 4B Checksum):
                  </p>
                  <div className="overflow-x-auto border border-[#e7e3da] rounded-xl mb-4">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-[#fbfaf7] border-b border-[#e7e3da] text-neutral-900 font-bold">
                        <tr>
                          <th className="p-3">Command</th>
                          <th className="p-3">Payload / Purpose</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ece8de]">
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">version</td>
                          <td className="p-3">Initiates peer handshake; exchanges protocol version, services, IP, timestamp, and block height.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">verack</td>
                          <td className="p-3">Acknowledges a received version packet; completes bidirectional connection handshake.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">inv (Inventory)</td>
                          <td className="p-3">Announces new available transactions or blocks to peers by transmitting 32-byte hashes.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">getdata</td>
                          <td className="p-3">Requests the full data for specific items announced in an <code className="font-mono">inv</code> packet.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">tx / block</td>
                          <td className="p-3">Transfers a full serialized raw Bitcoin transaction or raw block in response to <code className="font-mono">getdata</code>.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">getheaders / headers</td>
                          <td className="p-3">Requests and transfers up to 2,000 80-byte block headers for rapid blockchain synchronization.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl text-sm">
                    <strong>Gossip Propagation Example:</strong>
                    <ol className="list-decimal list-inside space-y-1 mt-2 text-neutral-700">
                      <li>Alice's wallet signs transaction <code className="font-mono">TX_1</code> and submits it to Node A.</li>
                      <li>Node A checks consensus and standardness rules, adds <code className="font-mono">TX_1</code> to its local mempool, and sends an <code className="font-mono">inv</code> message to Nodes B, C, and D.</li>
                      <li>Node B has not seen <code className="font-mono">TX_1</code>; it sends <code className="font-mono">getdata</code> back to Node A.</li>
                      <li>Node A transmits the full serialized <code className="font-mono">tx</code> message to Node B.</li>
                      <li>Node B independently validates <code className="font-mono">TX_1</code> against its own local UTXO set before announcing it further.</li>
                    </ol>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.2.5 Consensus Rules vs Node Relay Policy</h3>
                  <div className="p-4 bg-orange-50 border border-orange-200 rounded-xl text-sm text-neutral-800 space-y-2">
                    <p>
                      <strong>Consensus Rules:</strong> Hard protocol invariants enforced by all nodes. Violating a consensus rule (e.g. creating 100 BTC in a coinbase, spending non-existent UTXOs, or invalid signatures) causes the block or transaction to be permanently rejected. Disagreements in consensus rules result in a hard fork.
                    </p>
                    <p>
                      <strong>Relay & Standardness Policy:</strong> Local node preferences for what unconfirmed transactions they are willing to keep in RAM and forward to peers. For example, nodes reject "dust" outputs, non-standard scripts, or transactions with fees below <code className="font-mono">minrelaytxfee</code> (e.g. 1 sat/vB). A transaction may be 100% valid under consensus rules, but rejected by a node's local mempool policy!
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 4.3 Section 3: Bitcoin Blockchain Data Structure */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 3 • Data Structures
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                4.3 Bitcoin Blockchain Architecture & Block Structure
              </h2>

              <div className="space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.3.1 Cryptographic Hash Chaining</h3>
                  <p className="mb-3">
                    A blockchain is an ordered, append-only sequence of blocks cryptographically linked together. Every block references the SHA-256 header hash of its predecessor. If an adversary attempts to modify a historical transaction inside Block 100, the Merkle root of Block 100 changes, altering its 80-byte header hash. This breaks the <code className="font-mono">prev_block_hash</code> pointer in Block 101, and cascades across all subsequent blocks:
                  </p>
                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl font-mono text-xs text-center space-y-2">
                    <div>[Genesis Block] &lt;──(prev_hash)── [Block 1] &lt;──(prev_hash)── [Block 2] &lt;──(prev_hash)── [Block 3]</div>
                    <div className="text-neutral-500">Tampering with Block 1 requires recomputing PoW for Block 1, Block 2, and Block 3 faster than the honest network!</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.3.2 Anatomy of the 80-Byte Block Header</h3>
                  <p className="mb-3">
                    A complete Bitcoin block consists of an 80-byte block header, a variable-length transaction counter, and serialized transaction data. The 80-byte header is the exact data structure hashed during Proof of Work mining:
                  </p>
                  <div className="overflow-x-auto border border-[#e7e3da] rounded-xl mb-4">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-[#fbfaf7] border-b border-[#e7e3da] text-neutral-900 font-bold">
                        <tr>
                          <th className="p-3">Field</th>
                          <th className="p-3">Size</th>
                          <th className="p-3">Type</th>
                          <th className="p-3">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ece8de]">
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">Version</td>
                          <td className="p-3 font-mono">4 bytes</td>
                          <td className="p-3">int32_t</td>
                          <td className="p-3">Signals protocol version and soft-fork readiness (BIP 9 versionbits)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">Previous Block Hash</td>
                          <td className="p-3 font-mono">32 bytes</td>
                          <td className="p-3">char[32]</td>
                          <td className="p-3">Double-SHA256 hash of the previous block's 80-byte header</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">Merkle Root Hash</td>
                          <td className="p-3 font-mono">32 bytes</td>
                          <td className="p-3">char[32]</td>
                          <td className="p-3">Double-SHA256 root commitment of all transactions in this block</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">Timestamp</td>
                          <td className="p-3 font-mono">4 bytes</td>
                          <td className="p-3">uint32_t</td>
                          <td className="p-3">Unix epoch seconds when mining commenced (must be &gt; median past 11 blocks)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">nBits (Target)</td>
                          <td className="p-3 font-mono">4 bytes</td>
                          <td className="p-3">uint32_t</td>
                          <td className="p-3">Compact floating-point representation of the current Proof of Work target</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">Nonce</td>
                          <td className="p-3 font-mono">4 bytes</td>
                          <td className="p-3">uint32_t</td>
                          <td className="p-3">32-bit arbitrary counter iterated by miners to discover valid target hash</td>
                        </tr>
                        <tr className="bg-[#fbfaf7] font-bold">
                          <td className="p-3">Total Header Size</td>
                          <td className="p-3 font-mono text-orange-600">80 bytes</td>
                          <td className="p-3" colSpan={2}>Fixed protocol size regardless of transaction count or block weight</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.3.4 Binary Merkle Tree Construction</h3>
                  <p className="mb-3">
                    Bitcoin computes a binary Merkle tree over the txids of all transactions in a block. Transactions are hashed pairwise using double SHA-256:
                  </p>
                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl font-mono text-sm space-y-2 mb-3">
                    <div>Step 1: Compute txids: H(A), H(B), H(C), H(D)</div>
                    <div>Step 2: Pairwise parent hashes: H(AB) = SHA256(SHA256(H(A) || H(B)))</div>
                    <div>Step 3: Pairwise parent hashes: H(CD) = SHA256(SHA256(H(C) || H(D)))</div>
                    <div>Step 4: Merkle Root = SHA256(SHA256(H(AB) || H(CD)))</div>
                  </div>
                  <p className="text-sm">
                    <strong>SPV Verification Advantage:</strong> To prove that transaction <code className="font-mono">B</code> is included in a block with 4,000 transactions, a light client needs only the 80-byte header and a Merkle authentication path containing <code className="font-mono">log2(4000) ≈ 12</code> 32-byte hashes (~384 bytes) rather than downloading the entire 2 MB block!
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.3.5 Consensus Block Validation Checklist</h3>
                  <p className="mb-2">When a full node receives a new candidate block, it verifies 10 mandatory conditions:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-lg">1. Header matches double-SHA256 target specified in <code className="font-mono">nBits</code></div>
                    <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-lg">2. Previous block header exists in the local active blockchain</div>
                    <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-lg">3. Timestamp is &gt; median of past 11 blocks and &lt; local time + 2 hours</div>
                    <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-lg">4. Block weight is ≤ 4,000,000 weight units (BIP 141 limit)</div>
                    <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-lg">5. Exactly one coinbase transaction is present as the first transaction</div>
                    <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-lg">6. Coinbase reward ≤ legal block subsidy + sum of transaction fees</div>
                    <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-lg">7. Calculated Merkle root matches the Merkle root in the 80-byte header</div>
                    <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-lg">8. No duplicate transactions exist within the block</div>
                    <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-lg">9. Every input points to an existing, unspent output in chainstate</div>
                    <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-lg">10. Every signature script evaluates to TRUE without errors</div>
                  </div>
                </div>
              </div>
            </section>

            {/* 4.4 Section 4: UTXO Model */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 4 • Core Accounting
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                4.4 Unspent Transaction Output (UTXO) Model
              </h2>

              <div className="space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.4.1 What is a UTXO?</h3>
                  <p className="mb-3">
                    Unlike Ethereum or traditional banks which track mutable account balances, Bitcoin records state as an immutable collection of discrete unspent transaction outputs. A UTXO is an indivisible chunk of bitcoin registered on the blockchain that can only be spent in its entirety.
                  </p>
                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl font-mono text-sm space-y-1 mb-3">
                    <div className="text-neutral-500">// Conceptual anatomy of a single UTXO:</div>
                    <div>Outpoint: txid (32 bytes) + vout (4-byte index)</div>
                    <div>Value: 50,000,000 satoshis (0.50 BTC)</div>
                    <div>scriptPubKey: OP_DUP OP_HASH160 &lt;pubKeyHash&gt; OP_EQUALVERIFY OP_CHECKSIG</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.4.2 Worked Example: Spending and Change Creation</h3>
                  <p className="mb-3">
                    Suppose Alice controls three distinct UTXOs in her wallet:
                  </p>
                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl font-mono text-sm space-y-1 mb-3">
                    <div>UTXO 1 = 0.500 BTC</div>
                    <div>UTXO 2 = 0.300 BTC</div>
                    <div>UTXO 3 = 0.200 BTC</div>
                    <div className="font-bold text-neutral-900">Total Spendable Balance = 1.000 BTC</div>
                  </div>
                  <p className="mb-3">
                    Alice wants to send <strong>0.600 BTC</strong> to Bob. Because no single UTXO equals 0.600 BTC, her wallet selects UTXO 1 (0.5 BTC) and UTXO 2 (0.3 BTC). Total inputs equal <strong>0.800 BTC</strong>.
                  </p>
                  <p className="mb-3">
                    If the current network fee is <strong>0.001 BTC</strong>, the transaction creates two brand new outputs:
                  </p>
                  <div className="p-4 bg-orange-50 border border-orange-200 rounded-xl font-mono text-sm space-y-1 text-neutral-900">
                    <div>Total Inputs: 0.500 BTC + 0.300 BTC = 0.800 BTC</div>
                    <div>Output 0 (Bob): 0.600 BTC</div>
                    <div>Output 1 (Alice Change): 0.199 BTC</div>
                    <div>Implied Miner Fee: 0.800 - (0.600 + 0.199) = 0.001 BTC (100,000 sats)</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.4.3 The UTXO Conservation Rule</h3>
                  <p className="mb-2">
                    In all standard Bitcoin transactions, value is strictly conserved. Bitcoins cannot be created out of thin air:
                  </p>
                  <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl font-mono text-center font-bold text-neutral-900 text-sm mb-3">
                    Sum(Inputs) = Sum(Outputs) + Transaction Fee
                  </div>
                  <p className="text-sm">
                    <strong>Notice:</strong> Transaction fees are NOT declared as an explicit output field! The fee is implicitly calculated by miners as the remaining difference between total input value and total output value. If a developer accidentally forgets the change output, the entire leftover balance is collected by the miner as an exorbitant fee!
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.4.6 Coin Selection Algorithms</h3>
                  <p className="mb-3">
                    When a user requests a payment, the wallet client executes a coin selection algorithm to choose which UTXOs to spend:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-lg">
                      <strong className="block text-neutral-900 mb-1">Branch-and-Bound (BnB)</strong>
                      Searches for an exact match where inputs equal payment + fee, eliminating the need to create a change output. Reduces fees and improves privacy.
                    </div>
                    <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-lg">
                      <strong className="block text-neutral-900 mb-1">Knapsack Solver</strong>
                      Fallback approximation algorithm that selects a combination of UTXOs minimizing waste and change fragmentation.
                    </div>
                    <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-lg">
                      <strong className="block text-neutral-900 mb-1">Privacy & Consolidation</strong>
                      Avoids linking UTXOs from different addresses to protect pseudonymous privacy, or opportunistically consolidates dust inputs during low-fee periods.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 4.5 Section 5: Bitcoin Transaction Structure */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 5 • Wire Serialization
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                4.5 Bitcoin Transaction Architecture & Byte Serialization
              </h2>

              <div className="space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.5.1 Traditional vs SegWit Byte Serialization</h3>
                  <p className="mb-3">
                    Before transmission over the P2P wire or hashing to create transaction IDs, transactions are serialized into precise byte sequences:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                    <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                      <div className="font-bold text-neutral-900 mb-2">// Legacy Serialization (Pre-SegWit)</div>
                      <div>1. nVersion (4 bytes, little-endian)</div>
                      <div>2. tx_in count (varint)</div>
                      <div>3. tx_in[0]: prev_txid (32B) + vout (4B)</div>
                      <div>4. tx_in[0]: scriptSig_len (varint) + scriptSig</div>
                      <div>5. tx_in[0]: nSequence (4 bytes)</div>
                      <div>6. tx_out count (varint)</div>
                      <div>7. tx_out[0]: nValue (8B satoshis)</div>
                      <div>8. tx_out[0]: scriptPubKey_len + scriptPubKey</div>
                      <div>9. nLockTime (4 bytes)</div>
                    </div>

                    <div className="p-4 bg-orange-50 border border-orange-200 rounded-xl space-y-1">
                      <div className="font-bold text-neutral-900 mb-2">// SegWit Serialization (BIP 141)</div>
                      <div>1. nVersion (4 bytes)</div>
                      <div>2. Marker byte (0x00)</div>
                      <div>3. Flag byte (0x01)</div>
                      <div>4. tx_in count &amp; inputs</div>
                      <div>5. tx_out count &amp; outputs</div>
                      <div>6. Witness data stack for each input</div>
                      <div>7. nLockTime (4 bytes)</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.5.5 Transaction Identifiers: txid vs wtxid</h3>
                  <p className="mb-2">
                    Understanding the difference between <code className="font-mono font-bold">txid</code> and <code className="font-mono font-bold">wtxid</code> is fundamental to modern Bitcoin engineering:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-2 text-sm text-neutral-800">
                    <li><strong>txid:</strong> Double-SHA256 hash of the transaction calculated <em>without</em> any witness/signature data. Immune to signature mutation!</li>
                    <li><strong>wtxid:</strong> Double-SHA256 hash calculated over the complete serialized transaction <em>including</em> the marker, flag, and witness script stacks.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.5.6 Timelocks & Transaction Finality</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-lg">
                      <strong className="block text-neutral-900 mb-1">Absolute Timelocks (<code className="font-mono">nLockTime</code> &amp; <code className="font-mono">OP_CLTV</code>)</strong>
                      Prevents transaction inclusion until a specific block height (e.g. Block 850,000) or UNIX timestamp has elapsed.
                    </div>
                    <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-lg">
                      <strong className="block text-neutral-900 mb-1">Relative Timelocks (<code className="font-mono">nSequence</code> &amp; <code className="font-mono">OP_CSV</code>)</strong>
                      Prevents spending an output until a specified number of blocks (or 512-second intervals) have been mined relative to the parent output confirmation. Essential for Lightning payment channel revocation!
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.5.7 Coinbase Transactions</h3>
                  <p className="mb-2">
                    The first transaction in every block is the coinbase transaction. It has no previous outpoints (<code className="font-mono">txid = 000...000, vout = 0xFFFFFFFF</code>) and mints new bitcoins.
                  </p>
                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 space-y-1">
                    <div><strong>Coinbase Maturity Rule (Consensus Requirement):</strong> Newly minted coinbase outputs cannot be spent until 100 blocks have been mined on top of them. This protects the network if a chain reorganization orphans a recent block, preventing cascade double-spending of invalidated mining rewards.</div>
                  </div>
                </div>
              </div>
            </section>

            {/* 4.6 Section 6: Bitcoin Script */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 6 • Scripting & Smart Contracts
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                4.6 Bitcoin Script Language & Stack Execution
              </h2>

              <div className="space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.6.1 Why Bitcoin Script Exists</h3>
                  <p className="mb-3">
                    Bitcoin does not execute arbitrary code like the Ethereum Virtual Machine (EVM). It uses a Forth-like, stack-based, non-Turing-complete language called <strong>Script</strong> designed specifically to evaluate authorization conditions without loops, recursion, or state machines. This ensures that every transaction script terminates in finite time, protecting validator nodes from infinite loop denial-of-service attacks.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.6.3 Core Bitcoin Script Opcodes</h3>
                  <div className="overflow-x-auto border border-[#e7e3da] rounded-xl mb-4">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-[#fbfaf7] border-b border-[#e7e3da] text-neutral-900 font-bold">
                        <tr>
                          <th className="p-3">Opcode</th>
                          <th className="p-3">Hex</th>
                          <th className="p-3">Stack Effect</th>
                          <th className="p-3">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ece8de] text-xs font-mono">
                        <tr>
                          <td className="p-3 font-bold text-orange-600">OP_DUP</td>
                          <td className="p-3">0x76</td>
                          <td className="p-3">[x] -&gt; [x, x]</td>
                          <td className="p-3 font-sans">Duplicates the item currently on top of the stack.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-orange-600">OP_HASH160</td>
                          <td className="p-3">0xa9</td>
                          <td className="p-3">[x] -&gt; [HASH160(x)]</td>
                          <td className="p-3 font-sans">Computes SHA-256 followed by RIPEMD-160 on the top item.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-orange-600">OP_EQUALVERIFY</td>
                          <td className="p-3">0x88</td>
                          <td className="p-3">[x1, x2] -&gt; []</td>
                          <td className="p-3 font-sans">Pops two items, compares equality, and aborts with failure if not identical.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-orange-600">OP_CHECKSIG</td>
                          <td className="p-3">0xac</td>
                          <td className="p-3">[sig, pubKey] -&gt; [bool]</td>
                          <td className="p-3 font-sans">Cryptographically verifies the digital signature against transaction sighash digest.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-orange-600">OP_CHECKMULTISIG</td>
                          <td className="p-3">0xae</td>
                          <td className="p-3">[sigs..., keys...] -&gt; [bool]</td>
                          <td className="p-3 font-sans">Performs m-of-n multisignature validation.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-orange-600">OP_CHECKLOCKTIMEVERIFY</td>
                          <td className="p-3">0xb1</td>
                          <td className="p-3">[locktime] -&gt; [locktime]</td>
                          <td className="p-3 font-sans">Fails execution if transaction nLockTime has not passed specified target.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-orange-600">OP_CHECKSEQUENCEVERIFY</td>
                          <td className="p-3">0xb2</td>
                          <td className="p-3">[sequence] -&gt; [sequence]</td>
                          <td className="p-3 font-sans">Fails execution if relative age of input does not satisfy required intervals.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.6.4 Detailed Walkthrough: Pay-to-Public-Key-Hash (P2PKH)</h3>
                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl font-mono text-sm space-y-2 mb-3">
                    <div className="text-neutral-500">// Combined execution script:</div>
                    <div className="text-orange-600 font-bold">&lt;sig&gt; &lt;pubKey&gt; OP_DUP OP_HASH160 &lt;pubKeyHash&gt; OP_EQUALVERIFY OP_CHECKSIG</div>
                    <div className="border-t border-[#ece8de] pt-2 space-y-1 text-xs text-neutral-700">
                      <div>1. &lt;sig&gt; and &lt;pubKey&gt; are pushed onto the stack: <span className="font-bold">[sig, pubKey]</span></div>
                      <div>2. OP_DUP duplicates top item: <span className="font-bold">[sig, pubKey, pubKey]</span></div>
                      <div>3. OP_HASH160 hashes top item: <span className="font-bold">[sig, pubKey, computedHash]</span></div>
                      <div>4. &lt;pubKeyHash&gt; is pushed: <span className="font-bold">[sig, pubKey, computedHash, targetHash]</span></div>
                      <div>5. OP_EQUALVERIFY pops both hashes and checks equality: <span className="font-bold">[sig, pubKey]</span></div>
                      <div>6. OP_CHECKSIG verifies ECDSA signature: pops both and pushes <span className="font-bold text-emerald-600">[TRUE (1)]</span></div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.6.5 Pay-to-Script-Hash (P2SH) &amp; Multisignature</h3>
                  <p className="mb-2">
                    P2SH (BIP 16) shifts the burden of storing long scripts from the sender to the spender. The sender pays to a 20-byte hash of an arbitrary redeem script. To spend the output, the spender provides the unlocking parameters along with the full serialized redeem script:
                  </p>
                  <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl font-mono text-xs">
                    Redeem Script (2-of-3 Multisig): 2 &lt;pubKey_A&gt; &lt;pubKey_B&gt; &lt;pubKey_C&gt; 3 OP_CHECKMULTISIG
                  </div>
                </div>
              </div>
            </section>

            {/* 4.7 Section 7: Bitcoin Addresses */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 7 • Encodings & Formats
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                4.7 Bitcoin Address Architecture & Encodings
              </h2>

              <div className="space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.7.1 What is a Bitcoin Address?</h3>
                  <p className="mb-3">
                    A Bitcoin address is not a bank account number, nor is it a raw public key. It is a standardized, human-readable string that encodes the locking script instructions needed by a paying wallet to construct a valid <code className="font-mono">scriptPubKey</code>.
                  </p>
                  <div className="overflow-x-auto border border-[#e7e3da] rounded-xl mb-4">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-[#fbfaf7] border-b border-[#e7e3da] text-neutral-900 font-bold">
                        <tr>
                          <th className="p-3">Type</th>
                          <th className="p-3">Prefix</th>
                          <th className="p-3">Encoding</th>
                          <th className="p-3">Standard Script</th>
                          <th className="p-3">Weight Efficiency</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ece8de] text-xs">
                        <tr>
                          <td className="p-3 font-semibold text-neutral-900">Legacy (P2PKH)</td>
                          <td className="p-3 font-mono font-bold text-orange-600">1...</td>
                          <td className="p-3 font-mono">Base58Check</td>
                          <td className="p-3 font-mono">OP_DUP OP_HASH160 &lt;hash&gt; OP_EQUALVERIFY OP_CHECKSIG</td>
                          <td className="p-3 text-neutral-500">Baseline (Highest fee)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-neutral-900">Script Hash (P2SH)</td>
                          <td className="p-3 font-mono font-bold text-orange-600">3...</td>
                          <td className="p-3 font-mono">Base58Check</td>
                          <td className="p-3 font-mono">OP_HASH160 &lt;scriptHash&gt; OP_EQUAL</td>
                          <td className="p-3 text-neutral-500">Variable</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-neutral-900">Native SegWit (P2WPKH)</td>
                          <td className="p-3 font-mono font-bold text-orange-600">bc1q...</td>
                          <td className="p-3 font-mono">Bech32 (BIP 173)</td>
                          <td className="p-3 font-mono">OP_0 &lt;20-byte witness program&gt;</td>
                          <td className="p-3 font-bold text-emerald-600">~38% Fee Discount</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-neutral-900">SegWit Script (P2WSH)</td>
                          <td className="p-3 font-mono font-bold text-orange-600">bc1q... (62 char)</td>
                          <td className="p-3 font-mono">Bech32 (BIP 173)</td>
                          <td className="p-3 font-mono">OP_0 &lt;32-byte witness SHA-256&gt;</td>
                          <td className="p-3 font-bold text-emerald-600">~45% Multisig Discount</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-neutral-900">Taproot (P2TR)</td>
                          <td className="p-3 font-mono font-bold text-orange-600">bc1p...</td>
                          <td className="p-3 font-mono">Bech32m (BIP 350)</td>
                          <td className="p-3 font-mono">OP_1 &lt;32-byte tweaked x-only pubkey&gt;</td>
                          <td className="p-3 font-bold text-emerald-600">Maximum Privacy &amp; Efficiency</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.7.4 Base58Check vs Bech32 / Bech32m</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                      <strong className="block text-neutral-900 font-bold">Base58Check Algorithm</strong>
                      <p className="text-neutral-600">
                        Removes visually confusing characters (0, O, I, l) from standard Base64 to prevent transcription typos. Appends a 4-byte double-SHA256 checksum to detect errors before network transmission.
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 border border-orange-200 rounded-xl space-y-2">
                      <strong className="block text-neutral-900 font-bold">Bech32 / Bech32m (BIP 173 / BIP 350)</strong>
                      <p className="text-neutral-700">
                        Uses a 32-character alphabet and a BCH error-correcting polynomial code. It is entirely lowercase (ideal for QR codes) and guarantees detection of up to 4 character substitution errors anywhere in the address string.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 4.8 Section 8: Public Keys and Private Keys */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 8 • Asymmetric Cryptography
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                4.8 Bitcoin Cryptographic Key Architecture (secp256k1 &amp; HD Wallets)
              </h2>

              <div className="space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.8.1 Private Key to Public Key Derivation</h3>
                  <p className="mb-3">
                    A Bitcoin private key <code className="font-mono font-bold">d</code> is a randomly generated 256-bit scalar chosen from the range <code className="font-mono">1 ≤ d &lt; n</code>, where <code className="font-mono">n</code> is the order of the secp256k1 elliptic curve.
                  </p>
                  <p className="mb-3">
                    The public key <code className="font-mono font-bold">Q</code> is a point on the elliptic curve obtained through scalar point multiplication:
                  </p>
                  <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl font-mono text-center font-bold text-neutral-900 text-sm mb-3">
                    Q = d · G
                  </div>
                  <p className="text-sm">
                    Where <code className="font-mono">G</code> is the standard secp256k1 base generator point. Computing <code className="font-mono">Q</code> from <code className="font-mono">d</code> requires negligible CPU cycles (via double-and-add algorithms). Reversing the operation—computing <code className="font-mono">d</code> given <code className="font-mono">Q</code>—is the Elliptic Curve Discrete Logarithm Problem (ECDLP), which requires on the order of 2^128 operations and is computationally intractable on classical computers.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.8.3 The secp256k1 Elliptic Curve Specification</h3>
                  <p className="mb-2">
                    Bitcoin utilizes the Koblitz curve specified by Certicom over the prime field:
                  </p>
                  <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl font-mono text-center font-bold text-neutral-900 text-sm mb-3">
                    y^2 ≡ x^3 + 7 (mod p)
                  </div>
                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl font-mono text-xs space-y-1 text-neutral-700">
                    <div>Prime field p = 2^256 - 2^32 - 977 (FFFFFFFF...FFFFFC2F)</div>
                    <div>Order n = FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFE BAAEDCE6 AF48A03B BFD25E8C D0364141</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.8.6 Hierarchical Deterministic (HD) Wallets (BIP 32 / BIP 39 / BIP 44)</h3>
                  <p className="mb-3">
                    Modern wallets generate an infinite tree of deterministic keys from a single 128-to-256 bit entropy source, typically represented as a 12- or 24-word English mnemonic phrase:
                  </p>
                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl font-mono text-xs space-y-2">
                    <div className="text-neutral-500">// Standard Derivation Path Structure:</div>
                    <div className="font-bold text-neutral-900">m / purpose' / coin_type' / account' / change / address_index</div>
                    <div className="border-t border-[#ece8de] pt-2 space-y-1 text-neutral-700">
                      <div>Legacy (P2PKH): <code className="font-mono">m/44'/0'/0'/0/0</code></div>
                      <div>Native SegWit (P2WPKH): <code className="font-mono">m/84'/0'/0'/0/0</code></div>
                      <div>Taproot (P2TR): <code className="font-mono">m/86'/0'/0'/0/0</code></div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.8.7 Schnorr Signatures &amp; Taproot (BIP 340)</h3>
                  <p className="mb-2">
                    In November 2021, the Taproot upgrade introduced 64-byte Schnorr signatures (<code className="font-mono">R, s</code>) replacing 71-73 byte DER-encoded ECDSA signatures:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-2 text-sm text-neutral-800">
                    <li><strong>Linearity:</strong> Schnorr signatures can be aggregated linearly (<code className="font-mono">MuSig2</code>), allowing complex n-of-n multisig transactions to appear on-chain as a single standard public key and single signature.</li>
                    <li><strong>Batch Verification:</strong> Nodes can verify thousands of Schnorr signatures simultaneously using fast matrix operations rather than verifying each signature individually.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 4.9 Section 9: Transaction Signing & PSBT */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 9 • Signatures & Workflows
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                4.9 Digital Signature Workflow &amp; BIP 174 PSBT
              </h2>

              <div className="space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.9.4 Signature Hash (SIGHASH) Flags</h3>
                  <p className="mb-3">
                    When signing a Bitcoin transaction, the signature commits to specific components of the transaction determined by the SIGHASH flag byte appended to the signature:
                  </p>
                  <div className="overflow-x-auto border border-[#e7e3da] rounded-xl mb-4">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-[#fbfaf7] border-b border-[#e7e3da] text-neutral-900 font-bold">
                        <tr>
                          <th className="p-3">SIGHASH Flag</th>
                          <th className="p-3">Value</th>
                          <th className="p-3">Commitment Scope</th>
                          <th className="p-3">Engineering Use Case</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ece8de] text-xs">
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">SIGHASH_ALL</td>
                          <td className="p-3 font-mono">0x01</td>
                          <td className="p-3">Signs all inputs and all outputs.</td>
                          <td className="p-3">Standard payment; nothing in the transaction can be altered.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">SIGHASH_NONE</td>
                          <td className="p-3 font-mono">0x02</td>
                          <td className="p-3">Signs all inputs, but none of the outputs.</td>
                          <td className="p-3">"Blank check"; whoever broadcasts the transaction can redirect outputs.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">SIGHASH_SINGLE</td>
                          <td className="p-3 font-mono">0x03</td>
                          <td className="p-3">Signs all inputs, and exactly the output with matching input index.</td>
                          <td className="p-3">Crowdfunding and decentralized atomic swaps.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">ANYONECANPAY</td>
                          <td className="p-3 font-mono">0x80</td>
                          <td className="p-3">Modifies above flags to sign only the signer's current input.</td>
                          <td className="p-3">P2P CoinJoin pool coordination and open donation gathering.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.9.6 Partially Signed Bitcoin Transactions (BIP 174 PSBT)</h3>
                  <p className="mb-3">
                    PSBT provides a standard format allowing multiple independent parties, offline cold storage hardware wallets (Trezor, Ledger, Coldcard), and multi-signature coordinators to construct, pass, and sign transactions without exposing private keys:
                  </p>
                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl font-mono text-xs space-y-1">
                    <div>1. Creator: Constructs unsigned transaction: <code className="font-bold">createpsbt</code></div>
                    <div>2. Updater: Adds input UTXO information &amp; derivation paths</div>
                    <div>3. Signer: Verifies amounts &amp; signs with private key: <code className="font-bold">walletprocesspsbt</code></div>
                    <div>4. Combiner: Merges partial signatures from multiple signers: <code className="font-bold">combinepsbt</code></div>
                    <div>5. Finalizer: Validates all scripts and builds final witness: <code className="font-bold">finalizepsbt</code></div>
                    <div>6. Broadcaster: Extracts raw hex and broadcasts to network: <code className="font-bold">sendrawtransaction</code></div>
                  </div>
                </div>
              </div>
            </section>

            {/* 4.10 Section 10: Bitcoin Mining and Block Creation */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 10 • Proof of Work
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                4.10 Bitcoin Mining, Nonces &amp; Proof of Work
              </h2>

              <div className="space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.10.1 The Mining Objective Function</h3>
                  <p className="mb-3">
                    Miners assemble candidate transactions from the mempool and compute hashes of the 80-byte header until finding a hash value that is numerically less than or equal to the current network target:
                  </p>
                  <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl font-mono text-center font-bold text-neutral-900 text-sm mb-3">
                    SHA256(SHA256(BlockHeader)) ≤ Target
                  </div>
                  <p className="text-sm">
                    Because SHA-256 behaves as a random oracle, there is no shortcut or inverse function. The only known method to find a valid hash is brute-force trial and error.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.10.3 The Nonce &amp; the ExtraNonce in Coinbase</h3>
                  <p className="mb-3">
                    The 80-byte block header contains a 4-byte (32-bit) <code className="font-mono">nonce</code> field, yielding 2^32 ≈ 4.29 billion combinations. At modern global hashrates (exceeding 600 Exahashes/sec), an ASIC miner exhausts 4.29 billion nonces in less than a millisecond!
                  </p>
                  <p className="text-sm">
                    To continue searching, miners modify the <strong>extraNonce</strong> field embedded inside the script of the coinbase transaction. Mutating the extraNonce changes the coinbase txid, which propagates up the Merkle tree to change the 32-byte Merkle root in the header, resetting the 4-byte nonce search space!
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.10.6 Mining Pools &amp; the Stratum Protocol</h3>
                  <p className="mb-2">
                    Individual miners rarely mine solo. They connect their ASIC hardware to mining pools using the Stratum protocol (v1 or v2). The pool server distributes candidate block headers with lowered difficulty targets ("shares"). Miners submit shares to prove their contributed work, and rewards are distributed according to payout algorithms:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-2 text-xs text-neutral-800">
                    <li><strong>PPS (Pay-Per-Share):</strong> Miners receive an immediate fixed payout per valid share submitted, regardless of whether the pool finds a block.</li>
                    <li><strong>PPLNS (Pay-Per-Last-N-Shares):</strong> Rewards miners proportional to shares submitted over the last N shares upon actual block discovery.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 4.11 Section 11: Difficulty Adjustment */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 11 • Target Retargeting
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                4.11 The 2,016-Block Difficulty Adjustment Mechanism
              </h2>

              <div className="space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.11.1 Purpose of Dynamic Difficulty</h3>
                  <p className="mb-3">
                    Bitcoin's monetary policy requires predictable block production (~10 minutes per block) to maintain steady inflation and prevent network latency splits. As global computing power joins or leaves the network, Bitcoin automatically recalculates the mining target every <strong>2,016 blocks</strong>:
                  </p>
                  <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl font-mono text-center font-bold text-neutral-900 text-sm mb-3">
                    2,016 blocks × 10 minutes = 20,160 minutes = 14 days (2 weeks)
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.11.3 Mathematical Retargeting Formula</h3>
                  <p className="mb-2">Every 2,016 blocks, every node independently evaluates the ratio of actual time elapsed versus expected time:</p>
                  <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl font-mono text-center font-bold text-orange-600 text-sm mb-3">
                    NewTarget = OldTarget × (ActualTimespan / TargetTimespan)
                  </div>
                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 space-y-1">
                    <div><strong>Consensus Clamping Rule:</strong> To prevent extreme oscillations caused by malicious hashrate fluctuations, <code className="font-mono">ActualTimespan</code> is bounded between 3.5 days (0.25x factor) and 56 days (4.0x factor). Difficulty cannot increase or decrease by more than a factor of 4 in any single retarget!</div>
                  </div>
                </div>
              </div>
            </section>

            {/* 4.12 Section 12: Mining Rewards and Halving */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 12 • Monetary Issuance
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                4.12 Bitcoin Halving Schedule &amp; 21M Supply Limit
              </h2>

              <div className="space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.12.1 The Geometric Series of Halving</h3>
                  <p className="mb-3">
                    Every 210,000 blocks (roughly every 4 years), the block subsidy awarded to the miner of each valid block is halved:
                  </p>
                  <div className="overflow-x-auto border border-[#e7e3da] rounded-xl mb-4">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-[#fbfaf7] border-b border-[#e7e3da] text-neutral-900 font-bold">
                        <tr>
                          <th className="p-3">Halving Epoch</th>
                          <th className="p-3">Block Height Range</th>
                          <th className="p-3">Subsidy per Block</th>
                          <th className="p-3">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ece8de] text-xs font-mono">
                        <tr>
                          <td className="p-3 font-bold text-neutral-900">Genesis (2009)</td>
                          <td className="p-3">0 – 209,999</td>
                          <td className="p-3 text-orange-600 font-bold">50.0 BTC</td>
                          <td className="p-3 text-neutral-500">Historical</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-neutral-900">1st Halving (2012)</td>
                          <td className="p-3">210,000 – 419,999</td>
                          <td className="p-3 text-orange-600 font-bold">25.0 BTC</td>
                          <td className="p-3 text-neutral-500">Historical</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-neutral-900">2nd Halving (2016)</td>
                          <td className="p-3">420,000 – 629,999</td>
                          <td className="p-3 text-orange-600 font-bold">12.5 BTC</td>
                          <td className="p-3 text-neutral-500">Historical</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-neutral-900">3rd Halving (2020)</td>
                          <td className="p-3">630,000 – 839,999</td>
                          <td className="p-3 text-orange-600 font-bold">6.25 BTC</td>
                          <td className="p-3 text-neutral-500">Historical</td>
                        </tr>
                        <tr className="bg-orange-50/50">
                          <td className="p-3 font-bold text-neutral-900">4th Halving (2024)</td>
                          <td className="p-3">840,000 – 1,049,999</td>
                          <td className="p-3 text-orange-600 font-bold">3.125 BTC</td>
                          <td className="p-3 font-bold text-emerald-600">Active (2024–2028)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-neutral-900">5th Halving (~2028)</td>
                          <td className="p-3">1,050,000 – 1,259,999</td>
                          <td className="p-3 text-orange-600 font-bold">1.5625 BTC</td>
                          <td className="p-3 text-neutral-400">Future</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl text-sm font-mono space-y-1">
                    <div>Total Issuance = 210,000 × 50 × (1 + 1/2 + 1/4 + 1/8 + ...) = 21,000,000 BTC</div>
                    <div className="text-xs text-neutral-500">Due to 64-bit integer division at the satoshi level, the exact maximum supply is 20,999,999.97690000 BTC.</div>
                  </div>
                </div>
              </div>
            </section>

            {/* 4.13 Section 13: Mempool & Propagation */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 13 • Transaction Relay
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                4.13 Mempool Architecture, Gossip &amp; Fee Bumping
              </h2>

              <div className="space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.13.1 Decentralized Nature of Mempools</h3>
                  <p className="mb-3">
                    There is no such thing as "the" global mempool. Every individual node maintains its own local in-memory transaction pool governed by its own RAM limits (default 300 MB in Bitcoin Core) and minimum relay fee settings.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.13.4 Fee Bumping: RBF vs CPFP</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                      <strong className="block text-neutral-900 font-bold text-sm">Replace-by-Fee (RBF, BIP 125)</strong>
                      <p className="text-neutral-600">
                        Sender signals that an unconfirmed transaction can be replaced by setting an input's <code className="font-mono">nSequence &lt; 0xFFFFFFFE</code>. If stuck, the sender broadcasts a new version spending the exact same UTXOs but offering a higher fee rate.
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 border border-orange-200 rounded-xl space-y-2">
                      <strong className="block text-neutral-900 font-bold text-sm">Child Pays for Parent (CPFP)</strong>
                      <p className="text-neutral-700">
                        Used by a recipient or sender with a change output. The recipient creates a child transaction spending the unconfirmed parent output and attaches an extra-high fee rate. Miners evaluate the package fee rate and confirm both transactions simultaneously!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 4.14 Section 14: Fee Market Architecture */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 14 • Fee Economics
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                4.14 Bitcoin Fee Market Architecture (sat/vB &amp; vsize)
              </h2>

              <div className="space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.14.3 The sat/vB Metric</h3>
                  <p className="mb-3">
                    Bitcoin miners do not care about the dollar or bitcoin value being transferred. Sending 1,000 BTC occupies the same byte space as sending 0.001 BTC. Miners prioritize transactions strictly by <strong>fee density</strong> (satoshis per virtual byte):
                  </p>
                  <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl font-mono text-center font-bold text-neutral-900 text-sm mb-3">
                    Total Fee (satoshis) = Transaction vsize (vB) × Fee Rate (sat/vB)
                  </div>
                </div>
              </div>
            </section>

            {/* 4.15 Section 15: Segregated Witness (SegWit) */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 15 • Protocol Upgrades
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                4.15 Segregated Witness (SegWit, BIP 141) &amp; Malleability Fixes
              </h2>

              <div className="space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.15.2 Transaction Malleability</h3>
                  <p className="mb-3">
                    In legacy Bitcoin transactions, cryptographic signature data was placed inside <code className="font-mono">scriptSig</code>. Because ECDSA signatures can be subtly mutated without invalidating the mathematical check (e.g. changing signature <code className="font-mono">s</code> to <code className="font-mono">n - s</code>), an intermediary could change a transaction's <code className="font-mono">txid</code> while it was unconfirmed in the mempool. This made multi-transaction dependency chains (such as payment channels) fragile and vulnerable to broken dependencies.
                  </p>
                  <p className="mb-3">
                    SegWit solved this by segregating the witness data away from the transaction serialization hashed to produce the <code className="font-mono">txid</code>.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.15.5 Block Weight &amp; Virtual Size (vsize)</h3>
                  <p className="mb-2">SegWit replaced the legacy 1 MB hard block size cap with a 4,000,000 Weight Unit (WU) limit:</p>
                  <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl font-mono text-center font-bold text-neutral-900 text-sm mb-3">
                    Weight Units = 3 × BaseSize + TotalSize
                  </div>
                  <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl font-mono text-center font-bold text-orange-600 text-sm mb-3">
                    Virtual Size (vsize) = ceil(Weight / 4)
                  </div>
                  <p className="text-sm">
                    Witness bytes are discounted by 75% compared to base transaction bytes, encouraging users to adopt modern, highly efficient script formats.
                  </p>
                </div>
              </div>
            </section>

            {/* 4.16 Section 16: Lightning Network */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 16 • Layer 2 Scaling
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                4.16 The Bitcoin Lightning Network &amp; HTLC Payment Channels
              </h2>

              <div className="space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.16.1 What is the Lightning Network?</h3>
                  <p className="mb-3">
                    The Lightning Network is a decentralized Layer 2 protocol built on top of Bitcoin. It enables instant, bidirectional, high-throughput microtransactions with sub-satoshi precision and negligible fees by utilizing off-chain payment channels anchored into Bitcoin's base layer through 2-of-2 multisignature funding transactions.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.16.6 Hashed Timelock Contracts (HTLCs)</h3>
                  <p className="mb-3">
                    HTLCs allow payments to be routed multi-hop across chains of channels without trusting intermediary routing nodes:
                  </p>
                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl font-mono text-xs space-y-1 mb-3">
                    <div>1. Alice generates random secret <code className="font-bold">R</code> (preimage) and calculates hash <code className="font-bold">H = SHA256(R)</code>.</div>
                    <div>2. Alice sends an invoice containing <code className="font-bold">H</code> to Bob.</div>
                    <div>3. Funds lock along the path (Alice -&gt; Node X -&gt; Bob) conditional on revealing <code className="font-bold">R</code>.</div>
                    <div>4. Bob presents preimage <code className="font-bold">R</code> to claim funds; each hop pulls funds backward atomically!</div>
                    <div>5. If a party goes offline, the timelock expires and funds revert safely to the sender.</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.16.11 The BOLT Specifications</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                    <div className="p-2 bg-[#fbfaf7] border border-[#ece8de] rounded">BOLT 1: Base P2P</div>
                    <div className="p-2 bg-[#fbfaf7] border border-[#ece8de] rounded">BOLT 2: Channel Peer</div>
                    <div className="p-2 bg-[#fbfaf7] border border-[#ece8de] rounded">BOLT 3: Scripts &amp; Tx</div>
                    <div className="p-2 bg-[#fbfaf7] border border-[#ece8de] rounded">BOLT 4: Onion Routing</div>
                  </div>
                </div>
              </div>
            </section>

            {/* 4.17 Section 17: Bitcoin Security & Limitations */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 17 • Threat Modeling
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                4.17 Bitcoin Security Models, Attack Surfaces &amp; Trade-Offs
              </h2>

              <div className="space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
                    <h4 className="font-bold text-neutral-900 text-sm mb-1">51% Hashrate Attacks</h4>
                    <p className="text-xs text-neutral-600">
                      An attacker with majority hashrate can re-mine recent blocks, execute deep chain reorganizations to double-spend their own payments, and censor competing transactions. <strong>However</strong>, a 51% attacker CANNOT steal other users' coins, forge signatures, or change the 21M supply cap, because honest full nodes reject invalid consensus blocks regardless of mining work!
                    </p>
                  </div>
                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
                    <h4 className="font-bold text-neutral-900 text-sm mb-1">Eclipse &amp; Sybil Attacks</h4>
                    <p className="text-xs text-neutral-600">
                      An attacker monopolizes all incoming and outgoing peer connections to a target node, feeding it a false, isolated view of the blockchain. Bitcoin Core defends against this via IP bucketing, DNS seeds, and outbound connection diversity across distinct autonomous system numbers (ASNs).
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">4.17.8 Technical Limitations &amp; Scalability Trilemma</h3>
                  <div className="overflow-x-auto border border-[#e7e3da] rounded-xl mb-4">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-[#fbfaf7] border-b border-[#e7e3da] text-neutral-900 font-bold">
                        <tr>
                          <th className="p-3">Limitation</th>
                          <th className="p-3">Engineering Reality</th>
                          <th className="p-3">Architectural Solution</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ece8de] text-xs">
                        <tr>
                          <td className="p-3 font-semibold">Base-layer Throughput</td>
                          <td className="p-3">~7 transactions per second due to 4M weight unit block cap</td>
                          <td className="p-3">Layer 2 payment channels (Lightning Network) &amp; Chaumian e-cash</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Confirmation Latency</td>
                          <td className="p-3">10-minute average Poisson block arrival; 6 confirmations = ~60 mins</td>
                          <td className="p-3">Instant zero-conf off-chain HTLC state updates</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Energy Consumption</td>
                          <td className="p-3">Global PoW thermodynamics consume significant electrical power</td>
                          <td className="p-3">Monetizes stranded, curtailed, and renewable energy grids</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold">Pseudonymous Privacy</td>
                          <td className="p-3">Public blockchain graph allows address clustering and heuristic tracing</td>
                          <td className="p-3">CoinJoin protocols (Whirlpool, WabiSabi) &amp; fresh address hygiene</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="p-4 bg-neutral-100 rounded-xl text-xs text-neutral-800">
                  <strong>Research Discussion: Can Bitcoin provide security without relying on a central financial institution?</strong>
                  <p className="mt-1 leading-relaxed">
                    Evaluate this from cryptographic unforgeability (ECDSA/Schnorr), economic incentive alignment (rational miners pursue block rewards rather than destroying network value), peer-to-peer networking (gossip mesh resistance to single points of failure), and sovereign full node verification ("don't trust, verify").
                  </p>
                </div>
              </div>
            </section>

            {/* 4.19 Section 19: Advanced Assignments and Research */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 19 • Practical Engineering Problem Set
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                4.19 Advanced Assignments &amp; Research Challenges
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                  <div className="font-bold text-neutral-900 text-sm">Assignment 1: UTXO Transaction Analysis</div>
                  <p className="text-neutral-600">
                    Given: Input 1 = 0.5 BTC, Input 2 = 0.3 BTC. Outputs: Output 1 = 0.4 BTC, Output 2 = 0.395 BTC.
                  </p>
                  <ul className="list-disc list-inside text-neutral-700 space-y-0.5">
                    <li>Total Input Value: 0.5 + 0.3 = 0.8 BTC</li>
                    <li>Total Output Value: 0.4 + 0.395 = 0.795 BTC</li>
                    <li>Miner Fee: 0.8 - 0.795 = 0.005 BTC (500,000 sats)</li>
                    <li>Explain why Output 2 acts as a change output returning funds to sender.</li>
                  </ul>
                </div>

                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                  <div className="font-bold text-neutral-900 text-sm">Assignment 2: Block Construction &amp; Validation</div>
                  <p className="text-neutral-600">
                    Design a complete 80-byte block header with 3 transactions + 1 coinbase transaction.
                  </p>
                  <p className="text-neutral-700">
                    Calculate the pairwise double-SHA256 Merkle root and outline the full 10-step full-node validation pipeline before admitting the block to the active chain.
                  </p>
                </div>

                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                  <div className="font-bold text-neutral-900 text-sm">Assignment 3: Script Execution Stack Trace</div>
                  <p className="text-neutral-600">
                    Trace <code className="font-mono">OP_DUP OP_HASH160 &lt;PubKeyHash&gt; OP_EQUALVERIFY OP_CHECKSIG</code> across all stack pushes and pops.
                  </p>
                  <p className="text-neutral-700">
                    Document the exact conditions required for transaction authorization, and explain why execution immediately halts if hashes do not match.
                  </p>
                </div>

                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                  <div className="font-bold text-neutral-900 text-sm">Assignment 4: Proof of Work Simulation Program</div>
                  <p className="text-neutral-600">
                    Write an educational script in Python that iterates a 32-bit nonce, computes <code className="font-mono">sha256(sha256(header))</code>, and stops upon finding a hash starting with 4 hex zeros.
                  </p>
                  <p className="text-neutral-700">
                    Record elapsed time and calculate total hashes per second (H/s).
                  </p>
                </div>

                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                  <div className="font-bold text-neutral-900 text-sm">Assignment 5: Mempool Priority &amp; Eviction Analysis</div>
                  <p className="text-neutral-600">
                    Compare two transactions: Tx A (140 vB paying 20 sat/vB) and Tx B (800 vB paying 5 sat/vB).
                  </p>
                  <p className="text-neutral-700">
                    Explain why miners select Tx A first even though Tx B pays a higher nominal satoshi fee (4,000 sats vs 2,800 sats). Describe how mempools evict low-fee transactions when exceeding 300 MB RAM limits.
                  </p>
                </div>

                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                  <div className="font-bold text-neutral-900 text-sm">Assignment 6: SegWit vs Legacy Parameter Matrix</div>
                  <p className="text-neutral-600">
                    Construct a quantitative comparison between a 2-in, 2-out Legacy P2PKH transaction and a 2-in, 2-out Native SegWit P2WPKH transaction.
                  </p>
                  <p className="text-neutral-700">
                    Calculate raw size, witness size, Weight Units (WU), virtual size (vsize), and satoshi fee savings at a 15 sat/vB fee rate.
                  </p>
                </div>

                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                  <div className="font-bold text-neutral-900 text-sm">Assignment 7: 3-Node Lightning Payment Channel Design</div>
                  <p className="text-neutral-600">
                    Diagram Alice ──(Channel 1)──&gt; Bob ──(Channel 2)──&gt; Carol.
                  </p>
                  <p className="text-neutral-700">
                    Detail the 2-of-2 multisig funding transaction, commitment transaction states, HTLC preimage routing, revocation secret exchange, and unilateral force-close timelocks.
                  </p>
                </div>

                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                  <div className="font-bold text-neutral-900 text-sm">Assignment 8: Comprehensive Bitcoin Security Report</div>
                  <p className="text-neutral-600">
                    Write a structured technical report evaluating 51% reorganizations, Sybil attacks, Eclipse attacks, private key theft vectors, and blockchain privacy heuristics.
                  </p>
                  <p className="text-neutral-700">
                    Differentiate between attacks prevented by mathematical consensus rules and those requiring network-layer or operational security safeguards.
                  </p>
                </div>
              </div>
            </section>

            {/* Bottom Progression Bar */}
            <div className="p-6 bg-white border border-[#e7e3da] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => navigate("/learning/blockchain/consensus")}
                className="w-full sm:w-auto px-5 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-xl text-sm font-semibold transition flex items-center justify-center gap-2"
              >
                <ArrowLeft size={16} /> Previous: 3. Distributed Systems &amp; Consensus
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
            
            {/* Tool 1: Interactive UTXO Balance & Tx Builder */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Interactive Lab 1
              </div>
              <h2 className="text-xl font-bold text-neutral-900 mb-2">
                UTXO Model &amp; Transaction Construction Simulator
              </h2>
              <p className="text-sm text-neutral-600 mb-6">
                Experience how Bitcoin constructs transactions by selecting discrete unspent outputs, computing explicit payments, calculating implicit miner fees, and returning change.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Available UTXO Pool */}
                <div>
                  <h3 className="text-sm font-bold text-neutral-900 mb-3 flex items-center gap-2">
                    <Coins size={16} className="text-amber-500" /> Available Spendable UTXOs:
                  </h3>
                  <div className="space-y-3 mb-6">
                    {utxoPool.map((u) => {
                      const isSelected = selectedUtxos.includes(u.id);
                      return (
                        <div
                          key={u.id}
                          onClick={() => toggleUtxoSelection(u.id)}
                          className={`p-4 rounded-xl border cursor-pointer transition flex items-center justify-between ${
                            isSelected
                              ? "bg-amber-50/80 border-amber-300 shadow-sm"
                              : "bg-[#fbfaf7] border-[#ece8de] hover:border-neutral-300"
                          }`}
                        >
                          <div>
                            <div className="font-mono text-xs font-bold text-neutral-900">{u.id}</div>
                            <div className="text-xs text-neutral-500">{u.desc}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-base font-bold text-neutral-900">{u.amount} BTC</div>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              isSelected ? "bg-amber-200 text-amber-900" : "bg-neutral-200 text-neutral-700"
                            }`}>
                              {isSelected ? "SELECTED" : "CLICK TO ADD"}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Payment Inputs */}
                  <div className="space-y-4 bg-[#fbfaf7] p-4 rounded-xl border border-[#ece8de]">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">
                        Amount to Send to Bob (BTC):
                      </label>
                      <input
                        type="number"
                        step="0.05"
                        min="0.01"
                        value={sendAmount}
                        onChange={(e) => setSendAmount(parseFloat(e.target.value) || 0)}
                        className="w-full px-3 py-2 border border-[#d5cfc4] rounded-lg text-sm bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">
                        Mempool Fee Rate: {feeRateSats} sat/vB
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="100"
                        value={feeRateSats}
                        onChange={(e) => setFeeRateSats(parseInt(e.target.value))}
                        className="w-full accent-orange-600"
                      />
                    </div>
                  </div>
                </div>

                {/* Real-Time Transaction Evaluation */}
                <div className="bg-[#fbfaf7] border border-[#ece8de] rounded-xl p-5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900 mb-4 flex items-center gap-2">
                      <Binary size={16} className="text-orange-600" /> Transaction Balance Sheet:
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between pb-2 border-b border-[#ece8de]">
                        <span className="text-neutral-600">Total Inputs Selected:</span>
                        <span className="font-mono font-bold text-neutral-900">{totalInputBtc.toFixed(8)} BTC</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-[#ece8de]">
                        <span className="text-neutral-600">Recipient Amount (Bob):</span>
                        <span className="font-mono font-bold text-neutral-900">{sendAmount.toFixed(8)} BTC</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-[#ece8de]">
                        <span className="text-neutral-600">Estimated Virtual Size:</span>
                        <span className="font-mono text-neutral-800">~{Math.round(estimatedVsize)} vB</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-[#ece8de]">
                        <span className="text-neutral-600">Miner Fee ({feeRateSats} sat/vB):</span>
                        <span className="font-mono font-bold text-orange-600">{estimatedFeeBtc.toFixed(8)} BTC</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-[#ece8de]">
                        <span className="text-neutral-600">Generated Change (Alice):</span>
                        <span className={`font-mono font-bold ${changeBtc >= 0 ? "text-emerald-600" : "text-rose-600"}`}>
                          {changeBtc.toFixed(8)} BTC
                        </span>
                      </div>
                    </div>

                    <div className={`mt-6 p-4 rounded-xl border text-xs leading-relaxed ${
                      utxoConservationValid
                        ? "bg-emerald-50 border-emerald-300 text-emerald-900"
                        : "bg-rose-50 border-rose-300 text-rose-900"
                    }`}>
                      {utxoConservationValid ? (
                        <div>
                          <strong>Valid Transaction!</strong> Sum of inputs ({totalInputBtc.toFixed(3)} BTC) fully covers output payment + miner fee. Alice receives a change UTXO of {changeBtc} BTC.
                        </div>
                      ) : (
                        <div>
                          <strong>Insufficient Funds Error:</strong> Selected inputs ({totalInputBtc.toFixed(3)} BTC) cannot cover {sendAmount} BTC payment plus {estimatedFeeBtc.toFixed(6)} BTC fee. Select more UTXOs!
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#ece8de] text-[11px] text-neutral-500">
                    Rule: Total Inputs = Total Outputs + Transaction Fee (Implied difference).
                  </div>
                </div>
              </div>
            </div>

            {/* Tool 2: Bitcoin Script Stack Execution Engine */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Interactive Lab 2
              </div>
              <h2 className="text-xl font-bold text-neutral-900 mb-2">
                Bitcoin Script LIFO Stack Execution Visualizer
              </h2>
              <p className="text-sm text-neutral-600 mb-6">
                Step through the exact cryptographic verification of a traditional Pay-to-Public-Key-Hash (P2PKH) transaction on the execution stack.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Script Code Stepper */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex items-center justify-between bg-[#fbfaf7] p-3 rounded-xl border border-[#ece8de]">
                    <span className="text-xs font-bold text-neutral-700">
                      Execution Step {scriptStep + 1} of {scriptSteps.length}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setScriptStep(Math.max(0, scriptStep - 1))}
                        disabled={scriptStep === 0}
                        className="px-3 py-1 bg-white border border-[#d5cfc4] rounded-lg text-xs font-bold disabled:opacity-40"
                      >
                        Prev
                      </button>
                      <button
                        onClick={() => setScriptStep(Math.min(scriptSteps.length - 1, scriptStep + 1))}
                        disabled={scriptStep === scriptSteps.length - 1}
                        className="px-3 py-1 bg-orange-600 text-white rounded-lg text-xs font-bold disabled:opacity-40"
                      >
                        Next Step
                      </button>
                      <button
                        onClick={() => setScriptStep(0)}
                        className="px-3 py-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-lg text-xs font-bold"
                      >
                        Reset
                      </button>
                    </div>
                  </div>

                  <div className="p-4 bg-neutral-900 text-neutral-100 rounded-xl font-mono text-xs space-y-2">
                    <div className="text-neutral-400">// Current Script Instruction:</div>
                    <div className="text-amber-400 font-bold text-sm">
                      {scriptSteps[scriptStep].op}
                    </div>
                    <div className="text-neutral-300 pt-2 border-t border-neutral-800 text-xs">
                      {scriptSteps[scriptStep].description}
                    </div>
                  </div>

                  {/* Step indicators */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {scriptSteps.map((s, idx) => (
                      <button
                        key={idx}
                        onClick={() => setScriptStep(idx)}
                        className={`p-2 rounded-lg border text-left text-xs transition ${
                          scriptStep === idx
                            ? "bg-orange-50 border-orange-400 text-orange-900 font-bold"
                            : "bg-[#fbfaf7] border-[#ece8de] text-neutral-600 hover:bg-white"
                        }`}
                      >
                        Step {idx}: {s.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Live LIFO Stack */}
                <div className="bg-[#fbfaf7] border border-[#ece8de] rounded-xl p-5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900 mb-3 flex items-center justify-between">
                      <span>LIFO Memory Stack</span>
                      <span className="text-xs text-neutral-500 font-normal">Top is Top</span>
                    </h3>

                    <div className="space-y-2 min-h-[220px] flex flex-col-reverse justify-start">
                      {scriptSteps[scriptStep].stack.map((item, i) => (
                        <div
                          key={i}
                          className="p-3 bg-white border-2 border-orange-300 rounded-xl shadow-xs font-mono text-xs text-neutral-800 break-all"
                        >
                          <div className="text-[10px] text-neutral-400 font-bold mb-0.5">
                            Stack Element [{i}] {i === scriptSteps[scriptStep].stack.length - 1 ? "(TOP)" : ""}
                          </div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#ece8de] text-[11px] text-neutral-500">
                    A transaction script is verified successfully if and only if the stack evaluates to TRUE without triggering any opcode aborts.
                  </div>
                </div>
              </div>
            </div>

            {/* Tool 3: Difficulty & Halving Calculator */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Interactive Lab 3
              </div>
              <h2 className="text-xl font-bold text-neutral-900 mb-2">
                Difficulty Retargeting &amp; Halving Model
              </h2>
              <p className="text-sm text-neutral-600 mb-6">
                Simulate how the 2,016-block retarget formula responds to mining pace, and trace block subsidy drops across halving eras.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Simulated 2,016 Block Duration: {simulatedTimespanDays} days (Expected: 14 days)
                    </label>
                    <input
                      type="range"
                      min="2"
                      max="40"
                      value={simulatedTimespanDays}
                      onChange={(e) => setSimulatedTimespanDays(parseInt(e.target.value))}
                      className="w-full accent-orange-600"
                    />
                    <div className="flex justify-between text-[11px] text-neutral-500 mt-1">
                      <span>Fast: 2 days</span>
                      <span>Target: 14 days</span>
                      <span>Slow: 40 days</span>
                    </div>
                  </div>

                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl text-xs space-y-2">
                    <div className="font-bold text-neutral-900">Calculated Adjustment Result:</div>
                    <div>Target Multiplier: <span className="font-mono font-bold text-orange-600">{calculatedTargetFactor.toFixed(3)}x</span></div>
                    <div>
                      Difficulty Trend:{" "}
                      <span className="font-bold text-neutral-900">
                        {simulatedTimespanDays < 14
                          ? `INCREASES by ${(1 / calculatedTargetFactor).toFixed(2)}x (Mining becomes harder)`
                          : simulatedTimespanDays > 14
                          ? `DECREASES by ${(1 / calculatedTargetFactor).toFixed(2)}x (Mining becomes easier)`
                          : "UNCHANGED (Exact 10-minute block pace maintained)"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Simulated Block Height: {currentBlockHeight.toLocaleString()}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="1400000"
                      step="10000"
                      value={currentBlockHeight}
                      onChange={(e) => setCurrentBlockHeight(parseInt(e.target.value))}
                      className="w-full accent-orange-600"
                    />
                  </div>

                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl text-xs space-y-2">
                    <div>Halving Epoch: <span className="font-bold text-neutral-900">{halvingEra} (Blocks {halvingEra * 210000} – {(halvingEra + 1) * 210000 - 1})</span></div>
                    <div>Block Subsidy: <span className="font-mono font-bold text-orange-600">{blockSubsidy.toFixed(4)} BTC</span></div>
                    <div>Approximate Year: <span className="font-bold text-neutral-900">{2009 + Math.floor(currentBlockHeight / 52560)}</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tool 4: SegWit Weight & Virtual Size Calculator */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Interactive Lab 4
              </div>
              <h2 className="text-xl font-bold text-neutral-900 mb-2">
                SegWit Block Weight &amp; Fee Savings Calculator
              </h2>
              <p className="text-sm text-neutral-600 mb-6">
                Compare byte sizes, Weight Units (WU), and effective virtual size (vsize) between Legacy P2PKH, Native SegWit P2WPKH, and Taproot P2TR.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">Transaction Script Type</label>
                    <select
                      value={calcTxType}
                      onChange={(e) => setCalcTxType(e.target.value)}
                      className="w-full px-3 py-2 border border-[#d5cfc4] rounded-lg text-xs bg-white"
                    >
                      <option value="legacy-p2pkh">Legacy (P2PKH - 1...)</option>
                      <option value="segwit-p2wpkh">Native SegWit (P2WPKH - bc1q...)</option>
                      <option value="taproot-p2tr">Taproot (P2TR - bc1p...)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">Inputs Count: {calcInputs}</label>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={calcInputs}
                      onChange={(e) => setCalcInputs(parseInt(e.target.value))}
                      className="w-full accent-orange-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">Outputs Count: {calcOutputs}</label>
                    <input
                      type="range"
                      min="1"
                      max="6"
                      value={calcOutputs}
                      onChange={(e) => setCalcOutputs(parseInt(e.target.value))}
                      className="w-full accent-orange-600"
                    />
                  </div>
                </div>

                <div className="md:col-span-2 bg-[#fbfaf7] border border-[#ece8de] rounded-xl p-5 flex flex-col justify-between">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                    <div className="p-3 bg-white rounded-lg border border-[#ece8de]">
                      <div className="text-[11px] text-neutral-500">Total Raw Bytes</div>
                      <div className="text-lg font-bold text-neutral-900">{weightStats.totalBytes} B</div>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-[#ece8de]">
                      <div className="text-[11px] text-neutral-500">Weight Units</div>
                      <div className="text-lg font-bold text-neutral-900">{weightStats.weightUnits} WU</div>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-[#ece8de]">
                      <div className="text-[11px] text-neutral-500">Virtual Size</div>
                      <div className="text-lg font-bold text-orange-600">{weightStats.vsize} vB</div>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-[#ece8de]">
                      <div className="text-[11px] text-neutral-500">Fee Savings</div>
                      <div className="text-lg font-bold text-emerald-600">~{weightStats.savingsPercent}%</div>
                    </div>
                  </div>

                  <div className="mt-4 text-xs text-neutral-600 leading-relaxed">
                    Formula: <code className="font-mono">Weight = 3 * BaseBytes + TotalBytes</code>. Because witness data receives a 75% discount, SegWit transactions pay significantly lower miner fees for identical economic payments.
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 3: REGTEST LABS & PYTHON RPC CODE                              */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "labs-code" && (
          <div className="space-y-12">
            
            {/* 14-Step Regtest Terminal Walkthrough */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 18 • Core Hands-on Lab
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                4.18 Complete 14-Step Bitcoin Core Regtest Transaction Lab
              </h2>
              <p className="text-sm text-neutral-600 mb-6">
                Execute a complete end-to-end Bitcoin transaction workflow on your private local blockchain. Create wallets, mine mature coinbase rewards, construct funded PSBTs, sign, finalize, validate with mempool test policies, and broadcast.
              </p>

              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: "Start Bitcoin Core in Regtest Mode",
                    cmd: "bitcoind -regtest -daemon\nbitcoin-cli -regtest getblockchaininfo",
                    desc: "Launches the bitcoind daemon in isolated regression-test mode with instant block generation.",
                  },
                  {
                    step: 2,
                    title: "Create Sender & Receiver Wallets",
                    cmd: 'bitcoin-cli -regtest createwallet "sender"\nbitcoin-cli -regtest createwallet "receiver"\nbitcoin-cli -regtest -rpcwallet=sender getnewaddress "" "bech32"',
                    desc: "Initializes two isolated local wallet descriptors and generates a native SegWit (Bech32) address.",
                  },
                  {
                    step: 3,
                    title: "Generate Test Bitcoin (101 Blocks for Maturity)",
                    cmd: 'bitcoin-cli -regtest generatetoaddress 101 "<SENDER_ADDRESS>"\nbitcoin-cli -regtest -rpcwallet=sender getbalance',
                    desc: "Mines 101 blocks to fulfill the consensus 100-block coinbase maturity requirement, making the 50 BTC reward spendable.",
                  },
                  {
                    step: 4,
                    title: "Generate a Receiver Address",
                    cmd: 'bitcoin-cli -regtest -rpcwallet=receiver getnewaddress "" "bech32"',
                    desc: "Creates a destination Bech32 address for the receiver wallet.",
                  },
                  {
                    step: 5,
                    title: "Inspect Spendable UTXOs",
                    cmd: 'bitcoin-cli -regtest -rpcwallet=sender listunspent',
                    desc: "Queries the sender's available unspent outputs, confirming txid, vout, amount, and scriptPubKey.",
                  },
                  {
                    step: 6,
                    title: "Construct Funded PSBT with Coin Selection",
                    cmd: 'bitcoin-cli -regtest -rpcwallet=sender walletcreatefundedpsbt "[]" "[{\\"<RECEIVER_ADDRESS>\\":0.1}]" 0 "{\\"fee_rate\\":2}"',
                    desc: "Instructs Bitcoin Core to select inputs, calculate change, and produce a base64-encoded Partially Signed Bitcoin Transaction.",
                  },
                  {
                    step: 7,
                    title: "Inspect Decoded PSBT Details",
                    cmd: 'bitcoin-cli -regtest -rpcwallet=sender decodepsbt "<BASE64_PSBT>"',
                    desc: "Inspects inputs, witness scripts, change outputs, and calculated fee before signing.",
                  },
                  {
                    step: 8,
                    title: "Sign the PSBT",
                    cmd: 'bitcoin-cli -regtest -rpcwallet=sender walletprocesspsbt "<BASE64_PSBT>"',
                    desc: "Signs the transaction using the sender's private key without broadcasting.",
                  },
                  {
                    step: 9,
                    title: "Finalize PSBT into Raw Transaction",
                    cmd: 'bitcoin-cli -regtest finalizepsbt "<SIGNED_PSBT>"',
                    desc: "Combines signatures and extracts the complete raw serialized transaction hex string.",
                  },
                  {
                    step: 10,
                    title: "Decode and Audit Raw Transaction",
                    cmd: 'bitcoin-cli -regtest decoderawtransaction "<RAW_HEX>"',
                    desc: "Audits version, inputs, outputs, vsize, weight, txid, and wtxid.",
                  },
                  {
                    step: 11,
                    title: "Validate Acceptance Against Mempool Policy",
                    cmd: 'bitcoin-cli -regtest testmempoolaccept "[\\"<RAW_HEX>\\"]"',
                    desc: "Dry-runs transaction acceptance rules without broadcasting.",
                  },
                  {
                    step: 12,
                    title: "Broadcast Transaction to Network",
                    cmd: 'bitcoin-cli -regtest sendrawtransaction "<RAW_HEX>"',
                    desc: "Propagates the transaction to peer nodes and returns the transaction ID.",
                  },
                  {
                    step: 13,
                    title: "Verify Mempool Inclusion",
                    cmd: 'bitcoin-cli -regtest getmempoolentry "<TXID>"',
                    desc: "Confirms that the transaction is held in the node's local mempool awaiting block inclusion.",
                  },
                  {
                    step: 14,
                    title: "Mine a Confirmation Block & Check Balance",
                    cmd: 'bitcoin-cli -regtest generatetoaddress 1 "<SENDER_ADDRESS>"\nbitcoin-cli -regtest -rpcwallet=receiver getbalance',
                    desc: "Mines a new block to confirm the transaction and confirms the receiver balance has updated to 0.1 BTC.",
                  },
                ].map((lab) => (
                  <div key={lab.step} className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-orange-600 uppercase tracking-wide">
                        Lab {lab.step}: {lab.title}
                      </span>
                      <button
                        onClick={() => copyCode(`lab_${lab.step}`, lab.cmd)}
                        className="text-xs text-neutral-500 hover:text-neutral-900 flex items-center gap-1 font-mono"
                      >
                        {copiedSnippet === `lab_${lab.step}` ? (
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
                    <pre className="p-3 bg-neutral-900 text-emerald-400 rounded-lg text-xs font-mono overflow-x-auto whitespace-pre">
                      {lab.cmd}
                    </pre>
                  </div>
                ))}
              </div>
            </div>

            {/* Python 3 JSON-RPC Script Implementation */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-wide">
                  Python 3 Script • JSON-RPC Client
                </span>
                <button
                  onClick={() =>
                    copyCode(
                      "py_rpc",
                      `import requests
import json

class BitcoinRegtestClient:
    def __init__(self, rpc_user="user", rpc_password="password", host="127.0.0.1", port=18443):
        self.url = f"http://{rpc_user}:{rpc_password}@{host}:{port}"
        self.headers = {'content-type': 'application/json'}

    def call(self, method, *params, wallet=None):
        url = f"{self.url}/wallet/{wallet}" if wallet else self.url
        payload = json.dumps({
            "method": method,
            "params": list(params),
            "jsonrpc": "2.0",
            "id": 1,
        })
        response = requests.post(url, headers=self.headers, data=payload)
        res_json = response.json()
        if res_json.get("error"):
            raise RuntimeError(res_json["error"])
        return res_json["result"]

# Demo Workflow
client = BitcoinRegtestClient()
print("Blockchain info:", client.call("getblockchaininfo"))
addr = client.call("getnewaddress", "", "bech32", wallet="sender")
print("New address:", addr)
`
                    )
                  }
                  className="text-xs text-neutral-500 hover:text-neutral-900 flex items-center gap-1 font-mono"
                >
                  {copiedSnippet === "py_rpc" ? (
                    <>
                      <Check size={12} className="text-emerald-600" /> Copied Script
                    </>
                  ) : (
                    <>
                      <Copy size={12} /> Copy Python Script
                    </>
                  )}
                </button>
              </div>
              <h2 className="text-xl font-bold text-neutral-900 mb-2">
                Automated Bitcoin Transaction Builder (Python JSON-RPC)
              </h2>
              <p className="text-sm text-neutral-600 mb-4">
                Production-grade script demonstrating how to connect to Bitcoin Core JSON-RPC over HTTP, query UTXOs, and orchestrate PSBT signing programmatically.
              </p>
              <pre className="p-4 bg-neutral-900 text-emerald-400 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed">
{`# bitcoin_rpc_tx.py
import requests
import json

class BitcoinRegtestClient:
    def __init__(self, rpc_user="user", rpc_password="password", host="127.0.0.1", port=18443):
        self.url = f"http://{rpc_user}:{rpc_password}@{host}:{port}"
        self.headers = {'content-type': 'application/json'}

    def call(self, method, *params, wallet=None):
        url = f"{self.url}/wallet/{wallet}" if wallet else self.url
        payload = json.dumps({
            "method": method,
            "params": list(params),
            "jsonrpc": "2.0",
            "id": 1,
        })
        response = requests.post(url, headers=self.headers, data=payload)
        res_json = response.json()
        if res_json.get("error"):
            raise RuntimeError(res_json["error"])
        return res_json["result"]

if __name__ == "__main__":
    client = BitcoinRegtestClient()
    
    # 1. Query Blockchain Status
    info = client.call("getblockchaininfo")
    print(f"Connected to chain: {info['chain']} at height {info['blocks']}")

    # 2. Query available UTXOs
    utxos = client.call("listunspent", 1, 9999999, [], True, wallet="sender")
    print(f"Sender has {len(utxos)} available UTXOs.")

    # 3. Create funded PSBT
    receiver_addr = client.call("getnewaddress", "", "bech32", wallet="receiver")
    psbt_res = client.call("walletcreatefundedpsbt", [], [{receiver_addr: 0.1}], 0, {"fee_rate": 2}, wallet="sender")
    psbt_b64 = psbt_res["psbt"]

    # 4. Sign and finalize
    signed_res = client.call("walletprocesspsbt", psbt_b64, True, "ALL", wallet="sender")
    final_res = client.call("finalizepsbt", signed_res["psbt"])
    raw_hex = final_res["hex"]

    # 5. Broadcast to mempool
    txid = client.call("sendrawtransaction", raw_hex)
    print(f"Transaction successfully broadcast! TXID: {txid}")`}
              </pre>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 4: QUIZ & KNOWLEDGE ASSESSMENT                                 */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "quiz" && (
          <div className="space-y-12">
            
            {/* Part A: MCQs */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 20 • Examination
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                4.20 Knowledge Assessment &amp; Final Exam
              </h2>
              <p className="text-sm text-neutral-600 mb-6">
                Evaluate your technical mastery of Bitcoin architecture, UTXOs, Script, mining difficulty, SegWit, and Lightning Network protocols.
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

            {/* Part B: Short-Answer Questions */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-neutral-900 mb-4">
                Part B: 10 Short-Answer Examination Questions
              </h3>
              <div className="space-y-4 text-xs text-neutral-700">
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                  <div className="font-bold text-neutral-900 text-sm">1. Explain the fundamental difference between Bitcoin's UTXO model and an account-based system.</div>
                  <p>In an account-based system (Ethereum, traditional banks), account state is tracked as a single mutable balance number updated via credits/debits. In Bitcoin's UTXO model, state is an immutable set of discrete, unspent transaction outputs. Spending requires consuming entire outputs and creating new outputs for payment and change.</p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                  <div className="font-bold text-neutral-900 text-sm">2. Explain how a Merkle root is calculated.</div>
                  <p>Transaction IDs are arranged into ordered pairs and hashed using double SHA-256. Parent hashes are paired and hashed iteratively in a binary tree hierarchy until a single 32-byte cryptographic root hash remains. If an odd number of hashes exists at any level, the last hash is duplicated.</p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                  <div className="font-bold text-neutral-900 text-sm">3. Why does Bitcoin need a Proof of Work mechanism?</div>
                  <p>Proof of Work ties consensus authority to unforgeable physical thermodynamics (electricity and computation), solving Sybil attacks without requiring centralized identity registries. It ensures that altering historical transactions requires recomputing cumulative work exceeding the entire honest network.</p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                  <div className="font-bold text-neutral-900 text-sm">4. How are transaction inputs and outputs connected?</div>
                  <p>Each transaction input explicitly points to an earlier unspent transaction output by referencing its Outpoint: a 32-byte transaction ID (txid) and a 4-byte output index (vout). The input provides cryptographic witness/scriptSig data that satisfies the locking condition (scriptPubKey) of that specific referenced output.</p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                  <div className="font-bold text-neutral-900 text-sm">5. Explain the role of Bitcoin Script.</div>
                  <p>Bitcoin Script is a Forth-like, non-Turing-complete, stack-based language that defines the spending conditions (smart contracts) required to unlock transaction outputs. By omitting loops and recursion, Script guarantees deterministic termination, eliminating infinite-loop denial-of-service attack vectors against validating nodes.</p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                  <div className="font-bold text-neutral-900 text-sm">6. Explain the difference between public keys and private keys.</div>
                  <p>A private key is a secret 256-bit scalar used to generate cryptographic digital signatures authorizing spends. The public key is an elliptic curve point derived via scalar multiplication (Q = d · G). The ECDLP problem makes it mathematically impossible to recover the private key from the public key.</p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                  <div className="font-bold text-neutral-900 text-sm">7. What happens when a transaction enters a mempool?</div>
                  <p>A receiving node verifies consensus validity (valid signatures, unspent inputs) and standardness policies (dust limits, min relay fee). If compliant, the transaction is cached in local RAM (mempool), and an inventory message (inv) is gossiped to connected peers. Transactions remain in the mempool until confirmed in a block, replaced via RBF, or evicted due to memory pressure or timeouts.</p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                  <div className="font-bold text-neutral-900 text-sm">8. Why does SegWit use both txid and wtxid?</div>
                  <p>The txid hashes only the non-witness transaction serialization, ensuring that any mutation of signatures by third parties cannot change the transaction ID (permanently fixing transaction malleability). The wtxid commits to all data including the witness script stack, guaranteeing that signatures are still cryptographically authenticated and committed inside block Merkle roots.</p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                  <div className="font-bold text-neutral-900 text-sm">9. How does Lightning reduce on-chain transaction requirements?</div>
                  <p>Participants deposit funds once into an on-chain 2-of-2 multisig funding transaction. They then exchange thousands of signed off-chain commitment transaction state updates bilaterally at network speed, broadcasting to the blockchain only when opening or closing the payment channel.</p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                  <div className="font-bold text-neutral-900 text-sm">10. Why does Bitcoin need a difficulty adjustment mechanism?</div>
                  <p>As hardware efficiency advances and miners enter or leave the network, hashrate varies widely. The 2,016-block difficulty adjustment dynamically shifts the mathematical mining target to keep average block intervals at approximately 10 minutes, ensuring predictable monetary inflation and preventing high orphan rates from latency splits.</p>
                </div>
              </div>
            </div>

            {/* Part C: In-Depth Technical Questions */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-neutral-900 mb-4">
                Part C: 8 In-Depth Technical Questions
              </h3>
              <div className="space-y-4 text-xs text-neutral-700">
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                  <div className="font-bold text-neutral-900 text-sm">1. Explain Bitcoin transaction serialization at the byte level.</div>
                  <p>
                    Transactions are serialized into binary vectors starting with a 4-byte version, a CompactSize varint input count, serialized input outpoints (32B txid + 4B vout), scriptSig length + scriptSig, 4B sequence, output count, 8B satoshi values, scriptPubKey length + scriptPubKey, and a 4-byte locktime. For SegWit, marker 0x00 and flag 0x01 are inserted between version and inputs, with witness stacks placed between outputs and locktime.
                  </p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                  <div className="font-bold text-neutral-900 text-sm">2. Describe the verification procedure of a P2PKH transaction.</div>
                  <p>
                    The scriptSig provides &lt;sig&gt; and &lt;pubKey&gt;, and the scriptPubKey contains OP_DUP OP_HASH160 &lt;pubKeyHash&gt; OP_EQUALVERIFY OP_CHECKSIG. The validator pushes &lt;sig&gt; and &lt;pubKey&gt;, duplicates &lt;pubKey&gt; with OP_DUP, computes SHA-256 followed by RIPEMD-160 with OP_HASH160, verifies that the resulting hash equals &lt;pubKeyHash&gt; using OP_EQUALVERIFY, and evaluates ECDSA/Schnorr signature validity against the transaction digest with OP_CHECKSIG, pushing 1 (TRUE) on success.
                  </p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                  <div className="font-bold text-neutral-900 text-sm">3. Explain Bitcoin's Merkle tree construction.</div>
                  <p>
                    Bitcoin arranges transaction identifiers in leaf order and applies double SHA-256 pairwise. For an odd count at any depth, the rightmost hash is duplicated. Intermediate nodes are concatenated and hashed up to the 32-byte Merkle root stored in the 80-byte header. In SegWit blocks, the coinbase transaction includes a witness commitment output containing the Merkle root of all witness transaction identifiers (wtxids).
                  </p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                  <div className="font-bold text-neutral-900 text-sm">4. Derive the Proof of Work difficulty adjustment formula.</div>
                  <p>
                    Given target interval T_target = 20,160 minutes (2,016 × 10 mins) and actual elapsed time T_actual = Timestamp(Block 2016) - Timestamp(Block 0), NewTarget = OldTarget × (T_actual / T_target). The adjustment factor (T_actual / T_target) is clamped to the range [0.25, 4.0] to prevent extreme volatility. Difficulty is defined inversely as Difficulty = Target_Genesis / Current_Target.
                  </p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                  <div className="font-bold text-neutral-900 text-sm">5. Explain the relationship between block subsidy and transaction fees.</div>
                  <p>
                    Total miner revenue = Block Subsidy + Sum of Transaction Fees. As block subsidies halve every 210,000 blocks from 50 BTC down to zero around the year 2140, Bitcoin's security budget transitions asymptotically to rely entirely on competitive transaction fee markets for Proof of Work hashpower security.
                  </p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                  <div className="font-bold text-neutral-900 text-sm">6. Compare Legacy, SegWit, and Taproot outputs.</div>
                  <p>
                    Legacy (P2PKH) places signatures in scriptSig, incurring high fees and malleability vulnerabilities. Native SegWit (P2WPKH, bc1q) segregates signatures to the witness stack with a 75% byte discount. Taproot (P2TR, bc1p) uses 32-byte x-only public keys, 64-byte Schnorr signatures with linear aggregation (MuSig2), and Merkleized Alternative Script Trees (MAST) hiding unexecuted complex spending branches for maximum privacy and efficiency.
                  </p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                  <div className="font-bold text-neutral-900 text-sm">7. Explain the security model of Lightning payment channels.</div>
                  <p>
                    Lightning relies on bilateral 2-of-2 multisig funding outputs. Each channel update consists of mutually signed asymmetric commitment transactions that can be broadcast on-chain if a peer misbehaves. To prevent broadcasting revoked historical states, each state update exchanges a revocation secret that allows the honest party to seize 100% of channel funds via a breach remedy penalty transaction during the CSV timelock window.
                  </p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                  <div className="font-bold text-neutral-900 text-sm">8. Discuss the difference between consensus validity and mempool policy.</div>
                  <p>
                    Consensus validity is invariant across all sovereign nodes; any block or transaction violating consensus rules (such as double spends, invalid signatures, or excessive subsidies) is permanently rejected, and consensus divergence produces a hard fork. In contrast, mempool relay policies (e.g. minrelaytxfee, dust output thresholds, standard script forms, RBF rules) are local peer preferences. A transaction can be fully valid under consensus yet rejected by individual mempools.
                  </p>
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
                      <th className="p-3">Evaluation Category</th>
                      <th className="p-3">Deliverable / Demonstration</th>
                      <th className="p-3">Weight</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#ece8de] text-xs">
                    <tr>
                      <td className="p-3 font-semibold">Regtest Configuration &amp; Wallets</td>
                      <td className="p-3">Configuring bitcoind, creating descriptors, generating Bech32 addresses</td>
                      <td className="p-3 font-bold text-orange-600">20%</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">UTXO Analysis &amp; Coin Selection</td>
                      <td className="p-3">Listing unspent outputs, calculating fees, and constructing funded PSBTs</td>
                      <td className="p-3 font-bold text-orange-600">25%</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">PSBT Signing &amp; Finalization</td>
                      <td className="p-3">Signing with private keys, finalizing witness data, and decoding raw hex</td>
                      <td className="p-3 font-bold text-orange-600">30%</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Mempool Acceptance &amp; Mining</td>
                      <td className="p-3">Testing mempool policies, broadcasting, and mining confirmation blocks</td>
                      <td className="p-3 font-bold text-orange-600">15%</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Technical Architecture Documentation</td>
                      <td className="p-3">Explaining UTXO lifecycle, Script execution, and fee economics</td>
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
            
            {/* 4.21 Capstone Project Specification */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 21 • Final Capstone Project
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                4.21 Capstone: Build a Bitcoin Transaction Explorer &amp; Signer
              </h2>
              <p className="text-sm text-neutral-600 mb-6">
                Develop a production-grade web application that connects to your local Bitcoin Core Regtest node over JSON-RPC, displaying live blockchain status, mempool transactions, UTXO balances, and facilitating interactive PSBT transaction creation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
                  <h4 className="font-bold text-neutral-900 text-sm mb-2">Feature 1: Blockchain Dashboard</h4>
                  <p className="text-xs text-neutral-600">
                    Live displays of block height, chain name, latest block hash, synchronization status, difficulty, and mining info retrieved via <code className="font-mono">getblockchaininfo</code>.
                  </p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
                  <h4 className="font-bold text-neutral-900 text-sm mb-2">Feature 2: Transaction Inspector</h4>
                  <p className="text-xs text-neutral-600">
                    Input any transaction ID to parse inputs, outputs, satoshi values, locking scripts, fee, virtual size, weight, and confirmation depth.
                  </p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
                  <h4 className="font-bold text-neutral-900 text-sm mb-2">Feature 3: UTXO Set Inspector</h4>
                  <p className="text-xs text-neutral-600">
                    Allows users to inspect unspent transaction outputs, verifying outpoints, amounts, and spendability.
                  </p>
                </div>
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
                  <h4 className="font-bold text-neutral-900 text-sm mb-2">Feature 4: PSBT Transaction Creator</h4>
                  <p className="text-xs text-neutral-600">
                    Interactive UI to select UTXO inputs, enter destination addresses and satoshi amounts, generate funded PSBTs, sign, and broadcast to regtest.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 space-y-1">
                <div className="font-bold">Security Requirement:</div>
                <div>Never expose unauthenticated bitcoind RPC credentials or raw private keys in frontend client bundles. Always proxy RPC calls through a secure backend server (Node.js/Express) with proper input validation!</div>
              </div>
            </div>

            {/* 4.22 Recommended Learning Resources */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wider mb-2">
                Section 22 • Academic References
              </div>
              <h2 className="text-xl font-bold text-neutral-900 mb-4">
                4.22 Recommended Learning Resources &amp; Specifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
                <a
                  href="https://developer.bitcoin.org/devguide/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl hover:border-orange-500 transition group"
                >
                  <div className="font-bold text-neutral-900 group-hover:text-orange-600 mb-1 flex items-center justify-between">
                    Bitcoin Developer Guide <ExternalLink size={12} />
                  </div>
                  <p className="text-neutral-500">Official technical documentation covering transactions, blocks, wallets, and P2P wire messages.</p>
                </a>
                <a
                  href="https://github.com/bitcoin/bitcoin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl hover:border-orange-500 transition group"
                >
                  <div className="font-bold text-neutral-900 group-hover:text-orange-600 mb-1 flex items-center justify-between">
                    Bitcoin Core Repository <ExternalLink size={12} />
                  </div>
                  <p className="text-neutral-500">The authoritative C++ reference implementation and consensus engine.</p>
                </a>
                <a
                  href="https://github.com/bitcoin/bips"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl hover:border-orange-500 transition group"
                >
                  <div className="font-bold text-neutral-900 group-hover:text-orange-600 mb-1 flex items-center justify-between">
                    Bitcoin Improvement Proposals <ExternalLink size={12} />
                  </div>
                  <p className="text-neutral-500">Standards specifications for BIP 141 (SegWit), BIP 174 (PSBT), and BIP 340 (Schnorr).</p>
                </a>
                <a
                  href="https://github.com/bitcoinbook/bitcoinbook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl hover:border-orange-500 transition group"
                >
                  <div className="font-bold text-neutral-900 group-hover:text-orange-600 mb-1 flex items-center justify-between">
                    Mastering Bitcoin (3rd Ed) <ExternalLink size={12} />
                  </div>
                  <p className="text-neutral-500">Open-source textbook by Andreas Antonopoulos &amp; David Harding.</p>
                </a>
                <a
                  href="https://github.com/lightning/bolts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl hover:border-orange-500 transition group"
                >
                  <div className="font-bold text-neutral-900 group-hover:text-orange-600 mb-1 flex items-center justify-between">
                    Lightning Network BOLTs <ExternalLink size={12} />
                  </div>
                  <p className="text-neutral-500">Basis of Lightning Technology protocol specifications for payment channels.</p>
                </a>
                <a
                  href="https://developer.bitcoin.org/examples/testing.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl hover:border-orange-500 transition group"
                >
                  <div className="font-bold text-neutral-900 group-hover:text-orange-600 mb-1 flex items-center justify-between">
                    Bitcoin Regtest Practical Guide <ExternalLink size={12} />
                  </div>
                  <p className="text-neutral-500">Official walkthrough for setting up private regression-test networks.</p>
                </a>
              </div>
            </div>

            {/* Interactive 19-Item Completion Checklist */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900">
                    Module 4 Completion Checklist
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Track your technical progress across all 19 learning objectives (saved automatically in browser storage).
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
                onClick={() => navigate("/learning/blockchain/consensus")}
                className="w-full sm:w-auto px-5 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-xl text-sm font-semibold transition flex items-center justify-center gap-2"
              >
                <ArrowLeft size={16} /> Previous: 3. Distributed Systems &amp; Consensus
              </button>
              <button
                onClick={() => navigate("/learning/blockchain/ethereum-evm")}
                className="w-full sm:w-auto px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-sm font-bold transition flex items-center justify-center gap-2 shadow-sm"
              >
                Next Module: 5. Ethereum, EVM &amp; Smart Contracts <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
