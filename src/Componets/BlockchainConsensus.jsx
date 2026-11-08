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
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";

// Browser-native SHA-256 helper for interactive simulator
async function sha256Browser(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export default function BlockchainConsensus() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning/blockchain");

  // Tab state: 'theory' | 'interactive-tools' | 'python-code' | 'quiz' | 'checklist'
  const [activeTab, setActiveTab] = useState("theory");

  // -------------------------------------------------------------
  // Tool 1: Interactive Byzantine Generals Simulator
  // -------------------------------------------------------------
  const [generalsCount, setGeneralsCount] = useState(4); // n
  const [traitorsCount, setTraitorsCount] = useState(1); // f
  const [commanderOrder, setCommanderOrder] = useState("ATTACK");
  const [traitorStrategy, setTraitorStrategy] = useState("split"); // 'split' | 'reverse' | 'silence'
  const [bgtStep, setBgtStep] = useState(0); // 0: init, 1: commander sent, 2: lieutenant gossip, 3: decided

  // Mathematical BFT validity
  const bgtSatisfiesBound = generalsCount >= 3 * traitorsCount + 1;
  const bgtQuorumRequired = 2 * traitorsCount + 1;

  // -------------------------------------------------------------
  // Tool 2: Live Proof of Work Mining Simulator
  // -------------------------------------------------------------
  const [powDifficulty, setPowDifficulty] = useState(3); // 3 leading zeros
  const [powData, setPowData] = useState("Alice -> Bob: 50 BTC; Charlie -> David: 12 BTC");
  const [powNonce, setPowNonce] = useState(0);
  const [powHash, setPowHash] = useState("");
  const [powIsMining, setPowIsMining] = useState(false);
  const [powAttempts, setPowAttempts] = useState(0);
  const [powElapsedMs, setPowElapsedMs] = useState(0);
  const [powMinedSuccessfully, setPowMinedSuccessfully] = useState(false);
  const [powTampered, setPowTampered] = useState(false);

  // Compute live hash when data or nonce changes
  useEffect(() => {
    let active = true;
    const target = "0".repeat(powDifficulty);
    sha256Browser(`${powData}|nonce:${powNonce}`).then((h) => {
      if (active) {
        setPowHash(h);
        if (h.startsWith(target)) {
          setPowMinedSuccessfully(true);
        } else {
          setPowMinedSuccessfully(false);
        }
      }
    });
    return () => {
      active = false;
    };
  }, [powData, powNonce, powDifficulty]);

  // Handle Mining Run
  const handleStartMining = async () => {
    setPowIsMining(true);
    setPowAttempts(0);
    setPowMinedSuccessfully(false);
    setPowTampered(false);
    const startTime = performance.now();
    const target = "0".repeat(powDifficulty);

    let currNonce = 0;
    const batchSize = 1000;

    const mineBatch = async () => {
      for (let i = 0; i < batchSize; i++) {
        const testHash = await sha256Browser(`${powData}|nonce:${currNonce}`);
        if (testHash.startsWith(target)) {
          setPowNonce(currNonce);
          setPowHash(testHash);
          setPowAttempts(currNonce + 1);
          setPowElapsedMs(Math.round(performance.now() - startTime));
          setPowMinedSuccessfully(true);
          setPowIsMining(false);
          return;
        }
        currNonce++;
      }
      setPowNonce(currNonce);
      setPowAttempts(currNonce);
      setPowElapsedMs(Math.round(performance.now() - startTime));
      if (currNonce < 200000) {
        setTimeout(mineBatch, 0);
      } else {
        setPowIsMining(false);
      }
    };

    mineBatch();
  };

  // -------------------------------------------------------------
  // Tool 3: Proof of Stake Validator & Committee Simulator
  // -------------------------------------------------------------
  const [validators, setValidators] = useState([
    { id: 1, name: "Validator A (Alpha)", stake: 50, color: "bg-blue-500", approved: true },
    { id: 2, name: "Validator B (Beta)", stake: 30, color: "bg-emerald-500", approved: true },
    { id: 3, name: "Validator C (Gamma)", stake: 20, color: "bg-purple-500", approved: false },
    { id: 4, name: "Validator D (Delta)", stake: 20, color: "bg-amber-500", approved: true },
  ]);
  const [posProposer, setPosProposer] = useState("Validator A (Alpha)");
  const [posThreshold, setPosThreshold] = useState(66.67); // 2/3 stake

  const totalPosStake = useMemo(() => {
    return validators.reduce((acc, v) => acc + v.stake, 0);
  }, [validators]);

  const approvedPosStake = useMemo(() => {
    return validators.filter((v) => v.approved).reduce((acc, v) => acc + v.stake, 0);
  }, [validators]);

  const approvedStakePercentage = useMemo(() => {
    return totalPosStake > 0 ? (approvedPosStake / totalPosStake) * 100 : 0;
  }, [approvedPosStake, totalPosStake]);

  const isPosConsensusReached = approvedStakePercentage >= posThreshold;

  const handleSelectProposerLottery = () => {
    if (totalPosStake === 0) return;
    const randomPoint = Math.random() * totalPosStake;
    let accumulated = 0;
    for (const v of validators) {
      accumulated += v.stake;
      if (randomPoint <= accumulated) {
        setPosProposer(v.name);
        return;
      }
    }
  };

  const toggleValidatorApproval = (id) => {
    setValidators((prev) =>
      prev.map((v) => (v.id === id ? { ...v, approved: !v.approved } : v))
    );
  };

  // -------------------------------------------------------------
  // Tool 4: CAP Theorem Network Partition Playground
  // -------------------------------------------------------------
  const [capMode, setCapMode] = useState("CP"); // 'CP' (Consistency) vs 'AP' (Availability)
  const [isPartitioned, setIsPartitioned] = useState(true);
  const [partitionABalance, setPartitionABalance] = useState(1000);
  const [partitionBBalance, setPartitionBBalance] = useState(1000);
  const [capLogs, setCapLogs] = useState([]);

  const handleDepositA = (amount) => {
    if (isPartitioned && capMode === "CP") {
      setCapLogs((prev) => [
        `[CP Mode] Deposit of ₹${amount} on Node A rejected or stalled: Quorum across partition boundary unavailable (Preserving Consistency).`,
        ...prev.slice(0, 5),
      ]);
      return;
    }
    setPartitionABalance((prev) => prev + amount);
    setCapLogs((prev) => [
      `[${capMode} Mode] Deposited ₹${amount} on Partition A (New Bal: ₹${partitionABalance + amount}).`,
      ...prev.slice(0, 5),
    ]);
  };

  const handleReadB = () => {
    if (isPartitioned && capMode === "CP") {
      setCapLogs((prev) => [
        `[CP Mode] Read from Node B blocked: System refuses to return potentially stale data during partition.`,
        ...prev.slice(0, 5),
      ]);
      return;
    }
    setCapLogs((prev) => [
      `[${capMode} Mode] Read Node B balance: ₹${partitionBBalance} ${
        isPartitioned && partitionABalance !== partitionBBalance
          ? "(STALE! Missing Partition A deposits - Availability favored over Consistency!)"
          : "(Consistent)"
      }`,
      ...prev.slice(0, 5),
    ]);
  };

  const handleHealPartition = () => {
    setIsPartitioned(false);
    const converged = Math.max(partitionABalance, partitionBBalance);
    setPartitionABalance(converged);
    setPartitionBBalance(converged);
    setCapLogs((prev) => [
      `[Network Healed] Gossip restored. Replicas converged to authoritative state: ₹${converged}.`,
      ...prev.slice(0, 5),
    ]);
  };

  // -------------------------------------------------------------
  // Quiz State (18 Questions)
  // -------------------------------------------------------------
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const QUIZ_QUESTIONS = [
    {
      id: 1,
      q: "What is distributed computing?",
      options: [
        "Processing on one computer only",
        "Multiple computers coordinating through a network",
        "A type of cryptographic hash",
        "A method of database encryption",
      ],
      correct: 1,
      expl: "Distributed computing is a computing model in which multiple independent computers work together over a network to solve problems or provide coordinated services.",
    },
    {
      id: 2,
      q: "What is a Byzantine failure?",
      options: [
        "A node permanently loses electricity",
        "A node behaves arbitrarily or maliciously",
        "A disk becomes full",
        "A network uses TCP",
      ],
      correct: 1,
      expl: "A Byzantine failure describes arbitrary or malicious behavior where a faulty node may send conflicting, false, or forged messages to different participants.",
    },
    {
      id: 3,
      q: "In the classical oral-message model, what is the minimum number of replicas needed to tolerate f Byzantine faults?",
      options: ["2f + 1", "f + 1", "3f + 1", "4f"],
      correct: 2,
      expl: "Lamport, Shostak, and Pease proved that in the classical oral-message model without digital signatures, achieving Byzantine agreement requires at least n >= 3f + 1 total replicas to tolerate f traitors.",
    },
    {
      id: 4,
      q: "What is a common BFT quorum size?",
      options: ["f", "f + 1", "2f + 1", "n / 4"],
      correct: 2,
      expl: "In classical BFT protocols like PBFT, a quorum requires Q = 2f + 1 matching responses out of 3f + 1 replicas, guaranteeing that any two quorums overlap by at least f + 1 nodes, ensuring at least one honest participant in the intersection.",
    },
    {
      id: 5,
      q: "What is the main participation resource in Proof of Work?",
      options: [
        "Staked cryptocurrency",
        "Computational work",
        "Approved identity",
        "Validator voting",
      ],
      correct: 1,
      expl: "In Proof of Work, participants (miners) compete by devoting computational hash power to find block headers satisfying a mathematical difficulty target.",
    },
    {
      id: 6,
      q: "What does the Bitcoin miner change while searching for a valid block hash?",
      options: [
        "User passwords",
        "Nonce and other block construction inputs",
        "The public key of every user",
        "The blockchain protocol rules",
      ],
      correct: 1,
      expl: "Miners modify the block header nonce (and optionally extra-nonce fields in the coinbase transaction) to produce distinct candidate hashes until one meets the target.",
    },
    {
      id: 7,
      q: "What is the main participation resource in Proof of Stake?",
      options: [
        "Mining hardware",
        "Staked assets",
        "Electricity alone",
        "A central server",
      ],
      correct: 1,
      expl: "Proof of Stake secures consensus through capital commitment: validators deposit and lock digital assets (stake) which grant proposal and attestation rights and can be slashed upon malicious behavior.",
    },
    {
      id: 8,
      q: "What is Proof of Authority based on?",
      options: [
        "Anonymous mining pools",
        "Approved validator identities or authority",
        "Only SHA-256 calculations",
        "Random public identities",
      ],
      correct: 1,
      expl: "Proof of Authority restricts block creation and validation to pre-approved, legally or organizationally identified authorities with established reputations.",
    },
    {
      id: 9,
      q: "Which is the typical number of Byzantine replicas PBFT can tolerate with seven replicas?",
      options: ["One", "Two", "Three", "Four"],
      correct: 1,
      expl: "Using f = floor((n - 1) / 3), with n = 7 replicas: f = floor(6 / 3) = 2. A 7-node PBFT network tolerates up to 2 Byzantine nodes with a quorum of 2(2) + 1 = 5 matching votes.",
    },
    {
      id: 10,
      q: "What is Nakamoto consensus associated with?",
      options: [
        "Proof of Work and accumulated-work chain selection",
        "Only AES encryption",
        "A central database administrator",
        "Random validator identity counting",
      ],
      correct: 0,
      expl: "Nakamoto consensus uniquely synthesizes cryptographic Proof of Work, P2P gossip, economic block rewards, and the cumulative-work (heaviest chain) fork-choice rule.",
    },
    {
      id: 11,
      q: "Why can temporary blockchain forks occur?",
      options: [
        "All nodes share the same clock",
        "Competing valid blocks may be received in different orders",
        "Hashing is reversible",
        "Transactions are always encrypted",
      ],
      correct: 1,
      expl: "Due to network latency and propagation delays, two miners may independently discover valid blocks at the same height nearly simultaneously, causing peer subsets to follow different candidate heads temporarily.",
    },
    {
      id: 12,
      q: "What is a chain reorganization?",
      options: [
        "Changing a wallet password",
        "Replacing part of the current chain with an alternative valid branch",
        "Generating a private key",
        "Encrypting the ledger",
      ],
      correct: 1,
      expl: "A chain reorganization (reorg) occurs when a node discovers an alternative valid branch with strictly greater accumulated work, displacing previously accepted blocks back to the mempool.",
    },
    {
      id: 13,
      q: "What is probabilistic finality?",
      options: [
        "A block becomes increasingly difficult to replace as more work builds on it",
        "A block is always final immediately",
        "A validator owns the whole network",
        "A node encrypts its transaction",
      ],
      correct: 0,
      expl: "In Nakamoto PoW, finality is probabilistic: the likelihood of a block being overturned decays exponentially with each confirming block mined on top, but it is never strictly zero mathematically.",
    },
    {
      id: 14,
      q: "What is a Sybil attack?",
      options: [
        "Creating many identities to gain disproportionate network influence",
        "Breaking SHA-256",
        "Deleting a block from memory",
        "Increasing network latency",
      ],
      correct: 0,
      expl: "A Sybil attack occurs when an adversary spins up thousands of pseudonymous virtual identities to overwhelm majority-voting protocols, eclipse peers, or manipulate consensus.",
    },
    {
      id: 15,
      q: "What does the CAP theorem describe?",
      options: [
        "Hash collisions",
        "Consistency and availability trade-offs during network partitions",
        "Private key generation",
        "Smart contract gas fees",
      ],
      correct: 1,
      expl: "Brewer's CAP theorem proves that in the presence of network partitions (P), a distributed data store can guarantee either strong Consistency (C) or Availability (A), but never both simultaneously.",
    },
    {
      id: 16,
      q: "What does FLP demonstrate?",
      options: [
        "PoW consumes no energy",
        "Deterministic consensus cannot guarantee termination in every asynchronous execution with even one crash fault",
        "All BFT systems require proof of work",
        "Blockchain cannot use public keys",
      ],
      correct: 1,
      expl: "The Fischer-Lynch-Paterson (FLP) impossibility result proves that no deterministic asynchronous algorithm can guarantee consensus termination if even a single process is subject to unannounced crash failure.",
    },
    {
      id: 17,
      q: "Which consensus approach is designed to tolerate Byzantine replicas in a known-membership system?",
      options: [
        "PBFT",
        "Simple client-server polling",
        "Ordinary single-server execution",
        "Basic hashing",
      ],
      correct: 0,
      expl: "Practical Byzantine Fault Tolerance (PBFT) was designed by Castro and Liskov specifically to achieve deterministic Byzantine agreement within a known-membership replicated system.",
    },
    {
      id: 18,
      q: "What is the role of Ethereum validators?",
      options: [
        "Only create user passwords",
        "Propose and attest to blocks under protocol rules",
        "Mine SHA-256 puzzles like Bitcoin",
        "Control every user's private key",
      ],
      correct: 1,
      expl: "In Ethereum Proof of Stake, active validators are pseudo-randomly assigned to committees to propose new execution blocks and broadcast cryptographic attestations (votes) under Gasper rules.",
    },
  ];

  const handleSelectQuiz = (qId, optionIdx) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateQuizScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach((q) => {
      if (quizAnswers[q.id] === q.correct) score++;
    });
    return score;
  };

  // -------------------------------------------------------------
  // Checklist State (29 Requirements from 3.36)
  // -------------------------------------------------------------
  const CHECKLIST_ITEMS = [
    "Understand distributed computing fundamentals",
    "Understand distributed system architecture",
    "Understand node communication and coordination",
    "Explain crash, omission, timing and Byzantine failures",
    "Understand fault tolerance and redundancy",
    "Explain the Byzantine Generals Problem",
    "Understand Byzantine Fault Tolerance (BFT)",
    "Understand agreement, validity and termination",
    "Understand state machine replication (SMR)",
    "Differentiate classical consensus and blockchain consensus",
    "Understand Proof of Work (PoW)",
    "Explain Bitcoin mining and mining difficulty",
    "Understand Nakamoto consensus",
    "Understand Proof of Stake (PoS)",
    "Explain validator selection and staking",
    "Understand slashing and validator responsibilities",
    "Understand Proof of Authority (PoA)",
    "Explain PBFT and its protocol phases",
    "Compare PoW, PoS, PoA and PBFT",
    "Understand block forks and protocol upgrades",
    "Explain chain reorganizations (reorgs)",
    "Differentiate probabilistic and explicit finality",
    "Understand Sybil attacks and defense mechanisms",
    "Understand network latency and partitions",
    "Understand the CAP theorem",
    "Understand the FLP impossibility result",
    "Build the PoW Python simulation (proof_of_work.py)",
    "Build the PoS Python simulation (proof_of_stake.py)",
    "Complete assignments and knowledge assessment",
  ];

  const [checklist, setChecklist] = useState(() => {
    try {
      const saved = localStorage.getItem("prepspaces_blockchain_m3_checklist");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleChecklistItem = (idx) => {
    setChecklist((prev) => {
      const next = { ...prev, [idx]: !prev[idx] };
      try {
        localStorage.setItem("prepspaces_blockchain_m3_checklist", JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const completedChecklistCount = Object.values(checklist).filter(Boolean).length;
  const checklistPercentage = Math.round(
    (completedChecklistCount / CHECKLIST_ITEMS.length) * 100
  );

  // Copy helper
  const [copiedCode, setCopiedCode] = useState(null);
  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(key);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-[#f97316] selection:text-white pb-28 sm:pb-36 overflow-x-hidden">
      {/* Top Contextual Navigation Bar */}
      <ModuleNav track="blockchain" currentModuleId="consensus" />

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-6">
        <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-96 h-96 rounded-full bg-gradient-to-br from-orange-200/40 via-amber-100/20 to-transparent blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-xl bg-orange-50 border border-orange-200/80 px-3 py-1 text-xs font-bold text-[#ea580c] mb-4">
              <Network size={14} />
              <span>Blockchain Technology & Decentralized Systems — Module 3</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#18181b] leading-tight">
              Distributed Systems & Consensus Mechanisms
            </h1>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-stone-600">
              Master distributed computing, P2P network coordination, Byzantine Fault Tolerance (BFT), Proof of Work (PoW), Nakamoto consensus, Proof of Stake (PoS), Proof of Authority (PoA), PBFT, chain reorganizations, finality models, Sybil defense, network partitions, the CAP theorem, and FLP impossibility.
            </p>

            {/* Metadata Pills */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-stone-100 px-3 py-1.5 font-semibold text-stone-700">
                <Shield size={13} className="text-[#f97316]" />
                Level: Intermediate
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-stone-100 px-3 py-1.5 font-semibold text-stone-700">
                <BookOpen size={13} className="text-[#f97316]" />
                Theory + Mathematics + Programming
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-stone-100 px-3 py-1.5 font-semibold text-stone-700">
                <Activity size={13} className="text-[#f97316]" />
                Estimated: 12–15 hours
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-stone-100 px-3 py-1.5 font-semibold text-stone-700">
                <Terminal size={13} className="text-[#f97316]" />
                Language: Python 3
              </span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mt-6 flex items-center gap-2 border-b border-[#e7e3da] pb-px overflow-x-auto">
          {[
            { id: "theory", label: "Curriculum Theory", icon: BookOpen },
            { id: "interactive-tools", label: "4 Interactive Simulators", icon: Zap },
            { id: "python-code", label: "Python Labs (PoW & PoS)", icon: FileCode },
            { id: "quiz", label: "Knowledge Quiz (18 Qs)", icon: HelpCircle },
            { id: "checklist", label: "Learning Tracker (29 Items)", icon: CheckSquare },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold border-b-2 transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "border-[#f97316] text-[#ea580c] bg-orange-50/50 rounded-t-xl"
                    : "border-transparent text-stone-600 hover:text-stone-900 hover:bg-stone-50"
                }`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* ========================================================= */}
        {/* TAB 1: THEORY CURRICULUM                                  */}
        {/* ========================================================= */}
        {activeTab === "theory" && (
          <div className="space-y-10">
            {/* Academic Foundation Box */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <h2 className="text-lg font-bold text-[#18181b] flex items-center gap-2 mb-4">
                <Globe className="text-[#f97316]" size={20} />
                <span>1. University Curriculum Foundation</span>
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-stone-600 mb-6">
                This module follows the technical and educational direction of leading university distributed systems and electrical engineering programs, drawing specifically from Stanford EE374 and CS251, MIT 6.852 (Distributed Algorithms), ETH Zürich, and EPFL.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-[#e7e3da] bg-stone-50">
                      <th className="p-3 font-bold text-stone-700">Institution / Authority</th>
                      <th className="p-3 font-bold text-stone-700">Curriculum Concepts Incorporated</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e7e3da] text-stone-600">
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Stanford University (EE374 / CS251)</td>
                      <td className="p-3">Nakamoto consensus, proof of stake, BFT protocols, blockchain security and finality.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">MIT (Distributed Algorithms)</td>
                      <td className="p-3">Distributed algorithms, Byzantine agreement, fault tolerance and FLP consensus impossibility.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">ETH Zürich</td>
                      <td className="p-3">Distributed computing, reliable communication, atomic broadcast, and fault-tolerant protocols.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">EPFL</td>
                      <td className="p-3">Distributed algorithms, epidemic broadcast, agreement, and Byzantine consensus.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Cornell University</td>
                      <td className="p-3">Distributed systems, consistency models, and fault-tolerant state machine replication.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* PART 1 */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                  Part 1
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                  Distributed Computing Fundamentals
                </h2>
              </div>

              {/* 3.1 */}
              <div>
                <h3 className="text-base font-bold text-[#18181b]">3.1 Introduction to Distributed Computing</h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Distributed computing is a model in which multiple autonomous computers work together to solve a computational problem or deliver a coordinated service. Instead of relying on a single mainframe or server, responsibilities and data are distributed across multiple machines connected over a network. Each participating machine maintains its own processor, memory, storage, operating system, network interface, and independent execution environment, coordinating solely via message passing.
                </p>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                    <span className="text-xs font-bold text-stone-800">Traditional Centralized Architecture</span>
                    <p className="text-xs text-stone-600 mt-1">
                      Every client communicates exclusively with a centralized server and monolithic database:
                    </p>
                    <div className="mt-2 text-[11px] font-mono bg-white p-2.5 rounded-lg border border-stone-200 text-stone-700">
                      USERS ➔ CENTRAL SERVER ➔ CENTRAL DATABASE
                    </div>
                    <span className="text-[10px] text-rose-600 font-semibold block mt-1">
                      Single point of failure, centralized trust, subject to arbitrary seizure or outage.
                    </span>
                  </div>

                  <div className="rounded-2xl border border-orange-200 bg-orange-50/50 p-4">
                    <span className="text-xs font-bold text-orange-950">Distributed Computing Architecture</span>
                    <p className="text-xs text-stone-700 mt-1">
                      Multiple peer computers participate in processing, verifying, and replicating data:
                    </p>
                    <div className="mt-2 text-[11px] font-mono bg-white p-2.5 rounded-lg border border-orange-200 text-stone-800">
                      NODE A ⟷ NODE B ⟷ NODE C ⟷ NODE D
                    </div>
                    <span className="text-[10px] text-emerald-700 font-semibold block mt-1">
                      Fault-tolerant, zero single point of failure, decentralized trust through consensus.
                    </span>
                  </div>
                </div>
              </div>

              {/* 3.2 */}
              <div className="pt-4 border-t border-stone-100">
                <h3 className="text-base font-bold text-[#18181b]">3.2 Distributed System Architecture</h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  A production distributed system comprises six foundational components:
                </p>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="block text-stone-900 mb-1">1. Nodes</strong>
                    Individual physical or virtual computers participating in the system.
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="block text-stone-900 mb-1">2. Communication Network</strong>
                    The physical and logical medium providing packet exchange between nodes.
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="block text-stone-900 mb-1">3. Message Protocol</strong>
                    Strictly defined message schemas and semantics (TCP, HTTP, Libp2p, DevP2P).
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="block text-stone-900 mb-1">4. Distributed Storage</strong>
                    Decentralized, replicated ledgers or key-value stores across all nodes.
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="block text-stone-900 mb-1">5. Coordination Mechanism</strong>
                    Algorithms establishing a total order of transactions and state transitions.
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="block text-stone-900 mb-1">6. Fault Tolerance</strong>
                    Protocols guaranteeing safety and liveness under defined hardware and node failures.
                  </div>
                </div>
              </div>

              {/* 3.3 */}
              <div className="pt-4 border-t border-stone-100">
                <h3 className="text-base font-bold text-[#18181b]">3.3 Network Communication and Node Coordination</h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Unlike processes executing on a single computer, distributed nodes share no common clock, no shared memory, and no atomic locks. Communication occurs exclusively through asynchronous message passing over non-instantaneous networks. When a transaction is signed, it is broadcast via epidemic gossip protocols.
                </p>
                <div className="mt-3 rounded-2xl bg-stone-900 text-stone-200 p-4 font-mono text-xs">
                  <div className="text-amber-400 font-bold mb-1">// Real-world Network Challenges in Distributed Consensus</div>
                  <div>• Network Latency: Propagation delays (20ms to 2000ms+) prevent instant global synchronization.</div>
                  <div>• Message Omission: Packets are dropped due to congestion, firewall filtering, or buffer overflow.</div>
                  <div>• Message Duplication: Gossip protocols frequently deliver identical messages multiple times.</div>
                  <div>• Out-of-Order Delivery: Packet A sent before Packet B may arrive significantly later.</div>
                  <div>• Network Partitioning: Physical link cuts isolate subnets into disconnected islands.</div>
                </div>
              </div>
            </section>

            {/* PART 2 */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                  Part 2
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                  Fault Tolerance and Distributed Agreement
                </h2>
              </div>

              {/* 3.4 */}
              <div>
                <h3 className="text-base font-bold text-[#18181b]">3.4 Fault Tolerance in Distributed Systems</h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Fault tolerance is the capacity of a distributed system to continue operating accurately according to specification despite arbitrary failures across a fraction of its components.
                </p>
                <div className="mt-3 overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-50">
                        <th className="p-2.5 font-bold text-stone-800">Failure Model</th>
                        <th className="p-2.5 font-bold text-stone-800">Node Behavior</th>
                        <th className="p-2.5 font-bold text-stone-800">Real-World Example</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-600">
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Crash Failure (Fail-Stop)</td>
                        <td className="p-2.5">Node abruptly stops executing and sends zero further messages.</td>
                        <td className="p-2.5">Power failure, OS kernel panic, hardware severance.</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Omission Failure</td>
                        <td className="p-2.5">Node fails to transmit or receive specific expected messages.</td>
                        <td className="p-2.5">Network buffer overflow, dropped UDP datagrams.</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Timing Failure</td>
                        <td className="p-2.5">Node delivers correct responses but outside acceptable time bounds.</td>
                        <td className="p-2.5">GC pauses, disk thrashing, extreme network latency.</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Byzantine Failure</td>
                        <td className="p-2.5">Node exhibits arbitrary, contradictory, or actively malicious actions.</td>
                        <td className="p-2.5">Equivocation, double spending, signed conflicting votes.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                  <strong className="text-xs font-bold text-amber-900 block mb-1">Safety vs. Liveness</strong>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    <strong>Safety ("Nothing bad happens"):</strong> All honest nodes must agree on the same history; two honest nodes can never commit conflicting blocks at the same height.<br />
                    <strong>Liveness ("Something good eventually happens"):</strong> The system never halts or deadlocks; valid submitted transactions are guaranteed to be confirmed into blocks eventually.
                  </p>
                </div>
              </div>

              {/* 3.5 */}
              <div className="pt-4 border-t border-stone-100">
                <h3 className="text-base font-bold text-[#18181b]">3.5 The Byzantine Generals Problem</h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Formulated by Leslie Lamport, Robert Shostak, and Marshall Pease in 1982, the Byzantine Generals Problem abstracts the difficulty of decentralized consensus. Several divisions of the Byzantine army camp outside an enemy city. Each division is commanded by a general. The generals must agree on a common plan (e.g., Attack or Retreat) exclusively via messengers. However, one or more generals—or the commander—may be traitors attempting to induce defeat by sending conflicting orders.
                </p>

                <div className="mt-4 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <span className="text-xs font-mono font-bold text-[#ea580c] uppercase">The Classical Bound</span>
                  <div className="text-lg font-mono font-bold text-stone-900 my-1">n ≥ 3f + 1</div>
                  <p className="text-xs text-stone-600">
                    To tolerate <span className="font-mono font-bold">f</span> Byzantine traitors under oral communication without digital signatures, there must be at least <span className="font-mono font-bold">3f + 1</span> total participants. If f = 1 traitor exists, a minimum of 4 generals (1 commander + 3 lieutenants) is required. With only 3 generals (n = 3, f = 1), consensus is mathematically impossible.
                  </p>
                </div>
              </div>

              {/* 3.6 */}
              <div className="pt-4 border-t border-stone-100">
                <h3 className="text-base font-bold text-[#18181b]">3.6 Byzantine Fault Tolerance (BFT) and Quorums</h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  A system is Byzantine Fault Tolerant if it satisfies safety and liveness despite up to <span className="font-mono font-bold">f = ⌊(n - 1) / 3⌋</span> Byzantine participants. To prevent conflicting commitments across split views, BFT protocols rely on Quorums.
                </p>
                <div className="mt-3 p-4 rounded-2xl bg-orange-50/60 border border-orange-200/80">
                  <strong className="text-xs font-bold text-orange-950 block mb-1">
                    Quorum Intersection Principle: Q = 2f + 1
                  </strong>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    In a system of <span className="font-mono">n = 3f + 1</span> replicas, a quorum requires <span className="font-mono">Q = 2f + 1</span> matching votes. Suppose two competing quorums <span className="font-mono">Q₁</span> and <span className="font-mono">Q₂</span> each collect 2f + 1 votes. Their overlap is:
                  </p>
                  <div className="my-2 font-mono text-xs bg-white p-2.5 rounded-lg border border-orange-200 font-bold text-orange-900">
                    Overlap = |Q₁ ∩ Q₂| = (2f + 1) + (2f + 1) - (3f + 1) = f + 1
                  </div>
                  <p className="text-xs text-stone-700">
                    Because the entire system contains at most <span className="font-mono">f</span> Byzantine nodes, the overlap of <span className="font-mono">f + 1</span> nodes MUST contain at least ONE honest replica. Since an honest replica will never sign two conflicting proposals in the same round, two conflicting quorums cannot both form!
                  </p>
                </div>
              </div>

              {/* 3.7 */}
              <div className="pt-4 border-t border-stone-100">
                <h3 className="text-base font-bold text-[#18181b]">3.7 Consensus Properties & State Machine Replication (SMR)</h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Consensus solves the State Machine Replication (SMR) problem: ensuring multiple independent replicas start from identical initial states, apply identical transactions in identical deterministic sequences, and arrive at identical final states.
                </p>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="text-stone-900 block mb-1">1. Agreement</strong>
                    All non-faulty nodes decide on the exact same value or block order.
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="text-stone-900 block mb-1">2. Validity</strong>
                    If all honest nodes propose value V, or if a proposed block is valid, the committed value must be derived from an eligible proposal.
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="text-stone-900 block mb-1">3. Termination</strong>
                    Every non-faulty node eventually makes a definitive decision under the protocol's liveness timing assumptions.
                  </div>
                </div>
              </div>
            </section>

            {/* PART 3: Consensus Algorithms */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                  Part 3
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                  Consensus Algorithms &amp; Foundations
                </h2>
              </div>

              {/* 3.8 */}
              <div>
                <h3 className="text-base font-bold text-[#18181b]">3.8 What Are Consensus Algorithms?</h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  A consensus algorithm is a formal protocol that enables a network of distributed participants to agree on a common decision, total transaction order, or system state despite asynchronous communication delays, packet drops, and arbitrary node failures.
                </p>
                <div className="mt-3 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
                  <strong className="block text-stone-900 font-bold mb-2">General Consensus Workflow (7 Steps):</strong>
                  <ol className="list-decimal pl-4 space-y-1 text-stone-700 leading-relaxed">
                    <li><strong>Proposal Creation:</strong> A candidate block or transaction bundle is constructed by a node.</li>
                    <li><strong>Distribution:</strong> The proposal is disseminated via gossip to peer participants.</li>
                    <li><strong>Independent Verification:</strong> Peers validate transaction syntax, balances, and signatures.</li>
                    <li><strong>Consensus Evidence Exchange:</strong> Nodes broadcast votes, attestations, or proof-of-work hashes.</li>
                    <li><strong>Agreement Rule Application:</strong> Protocol applies its threshold or heaviest-chain selection rule.</li>
                    <li><strong>Ledger Commitment:</strong> The winning block is appended to the local replica's ledger.</li>
                    <li><strong>State Machine Transition:</strong> Nodes execute state updates deterministically.</li>
                  </ol>
                </div>
              </div>

              {/* 3.9 */}
              <div className="pt-4 border-t border-stone-100">
                <h3 className="text-base font-bold text-[#18181b]">3.9 Types of Consensus Algorithms</h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Consensus approaches fall into four major operational categories:
                </p>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="text-stone-900 block mb-1">A. Crash Fault Tolerant (CFT)</strong>
                    Tolerates fail-stop nodes that crash, but assumes honest nodes never send malicious data. Examples: <strong>Raft</strong>, <strong>Paxos</strong>. Used in enterprise databases and internal clusters.
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="text-stone-900 block mb-1">B. Byzantine Fault Tolerant (BFT)</strong>
                    Tolerates up to ⌊(n-1)/3⌋ arbitrarily malicious nodes in known-membership systems. Examples: <strong>PBFT</strong>, <strong>Tendermint</strong>, <strong>HotStuff</strong>.
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="text-stone-900 block mb-1">C. Permissionless Blockchain Consensus</strong>
                    Open participation where anyone can join without authorization. Requires cryptographic Sybil resistance: <strong>Proof of Work (Bitcoin)</strong>, <strong>Proof of Stake (Ethereum)</strong>.
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="text-stone-900 block mb-1">D. Permissioned Blockchain Consensus</strong>
                    Participation restricted to authorized identities: <strong>Hyperledger Fabric (Raft / SmartBFT)</strong>, <strong>Proof of Authority (Clique)</strong>.
                  </div>
                </div>
              </div>
            </section>

            {/* PART 4: Proof of Work */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                  Part 4
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                  Proof of Work (PoW) &amp; Nakamoto Consensus
                </h2>
              </div>

              {/* 3.10 */}
              <div>
                <h3 className="text-base font-bold text-[#18181b]">3.10 Proof of Work Mechanics & Mining Difficulty</h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Proof of Work (invented by Cynthia Dwork & Moni Naor in 1993, applied by Adam Back in Hashcash, and adapted for distributed consensus by Satoshi Nakamoto) makes block proposal computationally costly while leaving verification trivial ($O(1)$).
                </p>

                <div className="mt-3 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <span className="text-xs font-mono font-bold text-[#ea580c] uppercase">Mathematical Expectation</span>
                  <p className="text-xs text-stone-700 mt-1 leading-relaxed">
                    Given an ideal hash function where outputs are uniformly distributed random variables, the probability <span className="font-mono font-bold">p</span> of finding a hash with <span className="font-mono font-bold">d</span> leading zero hexadecimal nibbles is:
                  </p>
                  <div className="my-2 font-mono text-xs bg-white p-2.5 rounded-lg border border-stone-200 font-bold text-stone-800">
                    p = (1/16)^d &nbsp;&nbsp;⟹&nbsp;&nbsp; Expected Attempts E = 1/p = 16^d
                  </div>
                  <p className="text-[11px] text-stone-500">
                    Difficulty 4 requires ~65,536 attempts. Difficulty 8 requires ~4.29 billion attempts. Difficulty 16 requires ~1.84 × 10¹⁹ attempts.
                  </p>
                </div>
              </div>

              {/* 3.11 */}
              <div className="pt-4 border-t border-stone-100">
                <h3 className="text-base font-bold text-[#18181b]">3.11 Nakamoto Consensus & The Cumulative Work Rule</h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Nakamoto consensus is not just SHA-256 mining; it is a holistic consensus protocol synthesizing five pillars:
                </p>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="text-stone-900 block mb-1">1. Peer-to-Peer Gossip</strong>
                    Permit-less, unauthenticated message propagation over TCP without central coordinators.
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="text-stone-900 block mb-1">2. Computational Sybil Resistance</strong>
                    1-CPU-1-Vote: voting power is proportional to physical hash power, not spoofable IP addresses.
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="text-stone-900 block mb-1">3. Heaviest Chain Fork-Choice</strong>
                    Nodes strictly select the valid branch with the greatest cumulative proof of work (not necessarily the longest in block count).
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="text-stone-900 block mb-1">4. Economic Alignment</strong>
                    Block subsidies + transaction fees reward honest participants, while producing invalid blocks wastes electricity for zero reward.
                  </div>
                </div>
              </div>
            </section>

            {/* PART 5 & 6 */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                  Parts 5 & 6
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                  Proof of Stake (PoS), Proof of Authority (PoA) & PBFT
                </h2>
              </div>

              {/* 3.12 */}
              <div>
                <h3 className="text-base font-bold text-[#18181b]">3.12 Proof of Stake Architecture &amp; Slashing</h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Proof of Stake replaces physical electrical expenditure with economic capital lockup. Validators deposit native tokens (e.g., 32 ETH in Ethereum) into a consensus deposit contract. Pseudo-random beacon randomness selects proposers and attestation committees. Malicious behavior—such as signing two conflicting blocks or attestations for the same slot (equivocation)—results in protocol-enforced <strong>slashing</strong>: destroying staked assets and evicting the validator.
                </p>
              </div>

              {/* 3.13 */}
              <div className="pt-4 border-t border-stone-100">
                <h3 className="text-base font-bold text-[#18181b]">3.13 Proof of Work vs Proof of Stake</h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Understanding the structural trade-offs between computational consensus and stake-weighted consensus is essential for distributed systems engineering:
                </p>
                <div className="mt-3 overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-50">
                        <th className="p-2.5 font-bold text-stone-800">Parameter</th>
                        <th className="p-2.5 font-bold text-stone-800">Proof of Work (PoW)</th>
                        <th className="p-2.5 font-bold text-stone-800">Proof of Stake (PoS)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-600">
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Participation Resource</td>
                        <td className="p-2.5">Computational hashrate &amp; electrical energy</td>
                        <td className="p-2.5">Staked digital capital assets</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Block Producer</td>
                        <td className="p-2.5">Miner solving cryptographic puzzle</td>
                        <td className="p-2.5">Assigned validator chosen via beacon randomness</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Sybil Resistance</td>
                        <td className="p-2.5">Physical compute power (1-CPU/GPU-1-vote)</td>
                        <td className="p-2.5">Token economic weighting (1-Coin-1-vote)</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Energy Footprint</td>
                        <td className="p-2.5 text-rose-600 font-semibold">High continuous energy demand</td>
                        <td className="p-2.5 text-emerald-700 font-semibold">~99.95% reduction in electricity</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Attack Economics</td>
                        <td className="p-2.5">Must rent or purchase 51% of global hashrate</td>
                        <td className="p-2.5">Must purchase 51% (or 33%) of all circulating staked tokens</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Finality Mechanism</td>
                        <td className="p-2.5">Probabilistic (decays exponentially with depth)</td>
                        <td className="p-2.5">Explicit checkpoint finality (Casper FFG)</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Hardware Demands</td>
                        <td className="p-2.5">High-end ASIC / GPU mining rigs</td>
                        <td className="p-2.5">Standard commodity server with high uptime</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Production Standard</td>
                        <td className="p-2.5">Bitcoin (SHA-256d)</td>
                        <td className="p-2.5">Ethereum (Gasper: Casper FFG + LMD-GHOST)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 3.14 */}
              <div className="pt-4 border-t border-stone-100">
                <h3 className="text-base font-bold text-[#18181b]">3.14 Proof of Authority (PoA)</h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Proof of Authority is a consensus model where block creation and validation rights are assigned strictly to authorized validators whose legal or organizational identities are verified under network governance rules. Instead of burning electricity or locking tokens, validators stake their real-world institutional reputations.
                </p>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="text-stone-900 block mb-1">PoA Advantages:</strong>
                    Zero energy waste, high transaction throughput, predictable sub-second block intervals, and clear administrative accountability.
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="text-stone-900 block mb-1">PoA Limitations:</strong>
                    Centralized authority selection, risk of validator collusion, censorship susceptibility, and unsuitable for open permissionless digital currencies.
                  </div>
                </div>
              </div>

              {/* 3.15 */}
              <div className="pt-4 border-t border-stone-100">
                <h3 className="text-base font-bold text-[#18181b]">3.15 Practical Byzantine Fault Tolerance (PBFT)</h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Introduced by Miguel Castro and Barbara Liskov (OSDI 1999), PBFT delivers sub-second deterministic finality for known-membership permissioned systems across 4 distinct phases:
                </p>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-4 gap-2.5 text-xs">
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="text-stone-900 block font-mono text-[11px] text-orange-600 mb-1">Phase 1: Pre-Prepare</strong>
                    Leader assigns sequence number and broadcasts proposal to all backup replicas.
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="text-stone-900 block font-mono text-[11px] text-orange-600 mb-1">Phase 2: Prepare</strong>
                    Replicas validate proposal and broadcast PREPARE. Replicas wait for 2f matching messages.
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="text-stone-900 block font-mono text-[11px] text-orange-600 mb-1">Phase 3: Commit</strong>
                    Replicas broadcast COMMIT and wait for 2f+1 commits, proving global order agreement.
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="text-stone-900 block font-mono text-[11px] text-orange-600 mb-1">Phase 4: Reply</strong>
                    Replicas execute state transition and send reply to client. Client requires f+1 matching replies.
                  </div>
                </div>
              </div>

              {/* 3.16 */}
              <div className="pt-4 border-t border-stone-100">
                <h3 className="text-base font-bold text-[#18181b]">3.16 Master Consensus Comparison Matrix</h3>
                <div className="mt-3 overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-50">
                        <th className="p-2.5 font-bold text-stone-800">Parameter</th>
                        <th className="p-2.5 font-bold text-stone-800">Proof of Work (PoW)</th>
                        <th className="p-2.5 font-bold text-stone-800">Proof of Stake (PoS)</th>
                        <th className="p-2.5 font-bold text-stone-800">Proof of Authority (PoA)</th>
                        <th className="p-2.5 font-bold text-stone-800">PBFT</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-600">
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Resource</td>
                        <td className="p-2.5">Computational Work (Hashrate)</td>
                        <td className="p-2.5">Staked Capital / Assets</td>
                        <td className="p-2.5">Institutional Authority / Identity</td>
                        <td className="p-2.5">Known Replica Voting</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Membership</td>
                        <td className="p-2.5">Open & Permissionless</td>
                        <td className="p-2.5">Open or Protocol-Defined</td>
                        <td className="p-2.5">Strictly Restricted / Whitelisted</td>
                        <td className="p-2.5">Known, Static Replicas</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Sybil Resistance</td>
                        <td className="p-2.5">Physical Energy & Hardware</td>
                        <td className="p-2.5">Financial Stake Exposure</td>
                        <td className="p-2.5">Organizational Reputation</td>
                        <td className="p-2.5">Configured Cryptographic Keys</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Finality</td>
                        <td className="p-2.5">Probabilistic (Decays with depth)</td>
                        <td className="p-2.5">Explicit Checkpoint Finality (Gasper)</td>
                        <td className="p-2.5">Immediate or Round-Robin</td>
                        <td className="p-2.5">Deterministic (Instant upon commit)</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Energy Profile</td>
                        <td className="p-2.5 text-rose-600 font-semibold">High Electricity Consumption</td>
                        <td className="p-2.5 text-emerald-700 font-semibold">~99.95% Lower Energy</td>
                        <td className="p-2.5 text-emerald-700 font-semibold">Negligible</td>
                        <td className="p-2.5 text-emerald-700 font-semibold">Negligible</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* PART 7: Nakamoto Consensus, Mining and Validators */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                  Part 7
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                  Nakamoto Consensus, Mining and Validators
                </h2>
              </div>

              {/* 3.17 */}
              <div>
                <h3 className="text-base font-bold text-[#18181b]">3.17 Mining and Validator Responsibilities</h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Mining and validation are related blockchain activities, but they operate under fundamentally different mechanics:
                </p>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70">
                    <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">
                      A. Miner Responsibilities in Proof of Work
                    </h4>
                    <ul className="text-xs text-stone-700 space-y-1.5 list-disc pl-4 leading-relaxed">
                      <li>Receives pending unconfirmed transactions from the P2P mempool.</li>
                      <li>Selects transactions to construct a candidate block header and Merkle root.</li>
                      <li>Verifies transaction syntax, inputs, Script signatures, and balances.</li>
                      <li>Calculates the SHA-256 block-header hash repeatedly across incrementing nonces.</li>
                      <li>Searches for a hash strictly satisfying the current numerical difficulty target.</li>
                      <li>Broadcasts the valid block to the network for immediate peer validation.</li>
                      <li>Receives the block subsidy and transaction fee rewards if accepted into the canonical chain.</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl border border-orange-200 bg-orange-50/50">
                    <h4 className="text-xs font-bold text-orange-950 uppercase tracking-wider mb-2">
                      B. Validator Responsibilities in Proof of Stake
                    </h4>
                    <ul className="text-xs text-stone-700 space-y-1.5 list-disc pl-4 leading-relaxed">
                      <li>Maintains a fully synchronized execution and consensus client node.</li>
                      <li>Locks protocol-required digital assets (e.g., 32 ETH) into a staking contract.</li>
                      <li>Proposes new execution blocks when pseudo-randomly assigned by the beacon chain.</li>
                      <li>Verifies proposed blocks received from other committee leaders.</li>
                      <li>Signs and broadcasts cryptographic attestations (votes) for the head of the chain.</li>
                      <li>Participates in fork-choice rules (LMD-GHOST) and checkpoint finality (Casper FFG).</li>
                      <li>Avoids slashable offenses (equivocation, double signing, surround voting).</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-50">
                        <th className="p-2.5 font-bold text-stone-800">Responsibility</th>
                        <th className="p-2.5 font-bold text-stone-800">PoW Miner</th>
                        <th className="p-2.5 font-bold text-stone-800">PoS Validator</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-600">
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Consensus Participation</td>
                        <td className="p-2.5">Continuous computational hash-rate competition</td>
                        <td className="p-2.5">Capital commitment and committee attestation voting</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Block Proposal</td>
                        <td className="p-2.5">First miner to discover valid nonce hash</td>
                        <td className="p-2.5">Assigned proposer selected by beacon randomness</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Transaction Verification</td>
                        <td className="p-2.5">Yes — verifies inputs, balances, and scripts</td>
                        <td className="p-2.5">Yes — executes EVM state transitions and verifies gas</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Voting &amp; Attestations</td>
                        <td className="p-2.5">No — votes expressed implicitly through accumulated work</td>
                        <td className="p-2.5">Yes — explicit BLS aggregate signature attestations</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Penalties for Malice</td>
                        <td className="p-2.5">Wasted electricity and lost hardware opportunity cost</td>
                        <td className="p-2.5 text-rose-600 font-bold">Protocol slashing: staked capital permanently burned</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 p-4 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-xs text-amber-950">
                  <strong className="block text-amber-900 font-bold mb-1">
                    Fundamental Architecture Principle: Why Full Nodes Remain Sovereign
                  </strong>
                  <p className="leading-relaxed">
                    Miners and validators only propose candidate blocks. Every non-mining <strong>Full Node</strong> independently enforces every single consensus rule. A miner with 99% of the world's hash power cannot force honest full nodes to accept an invalid payment, spend coins without a valid signature, or inflate the 21M Bitcoin supply. Honest nodes reject invalid blocks instantly, making any computational work spent on invalid blocks completely worthless.
                  </p>
                </div>
              </div>
            </section>

            {/* PART 8 & 9 */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                  Parts 8 & 9
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                  Forks, Reorganizations, Finality & Sybil Security
                </h2>
              </div>

              {/* 3.18 & 3.19 */}
              <div>
                <h3 className="text-base font-bold text-[#18181b]">3.18 Forks and Chain Reorganizations (Reorgs)</h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  A fork arises when the blockchain history branches into competing valid paths due to network propagation delays (temporary fork), backward-compatible rule tightening (soft fork), or non-backward-compatible protocol divergences (hard fork).
                </p>
                <div className="mt-3 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <strong className="text-xs font-bold text-stone-900 block mb-1">
                    What Happens During a Chain Reorganization?
                  </strong>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    If an alternative branch emerges with higher accumulated work, full nodes disconnect the blocks on the shorter branch and attach the longer branch. Transactions unique to the orphaned blocks are returned to the node's memory pool (mempool). If a merchant delivered physical goods after only 1 confirmation, an attacker can double-spend the funds by mining a private replacement chain without that payment!
                  </p>
                </div>
              </div>

              {/* 3.20 */}
              <div className="pt-4 border-t border-stone-100">
                <h3 className="text-base font-bold text-[#18181b]">3.20 Finality in Blockchain</h3>
                <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50">
                    <strong className="text-stone-900 block mb-1">Probabilistic Finality (e.g., Bitcoin)</strong>
                    <p className="text-stone-600 leading-relaxed">
                      Confidence increases asymptotically with depth. After 6 confirmations (~60 minutes), the probability of an attacker with &lt;50% hash power catching up and reversing history drops below 0.1%, but it is never strictly 0.000% in a mathematical sense.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl border border-orange-200 bg-orange-50/50">
                    <strong className="text-orange-950 block mb-1">Explicit Deterministic Finality (e.g., Ethereum Gasper, PBFT)</strong>
                    <p className="text-stone-700 leading-relaxed">
                      Once a checkpoint receives a 2/3 supermajority of attestations across two consecutive epochs (Casper FFG), the block is finalized. Reverting it requires at least 1/3 of the entire network's staked assets to be burned through slashing.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3.21 */}
              <div className="pt-4 border-t border-stone-100">
                <h3 className="text-base font-bold text-[#18181b]">3.21 Sybil Attacks in Distributed Systems</h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  A Sybil attack occurs when an adversary spins up thousands of pseudonymous virtual identities to overwhelm majority-voting protocols, eclipse honest peers, or manipulate consensus.
                </p>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="text-stone-900 block mb-1">Sybil Defense in PoW:</strong>
                    Tying voting power to physical thermodynamic compute (hashrate). Creating a million IP addresses grants zero voting power without devoted ASIC hashing power.
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="text-stone-900 block mb-1">Sybil Defense in PoS &amp; PoA:</strong>
                    In PoS, influence is bounded strictly by capital deposited into the staking contract. In PoA, participation is gated by institutional legal identities.
                  </div>
                </div>
              </div>

              {/* 3.22 */}
              <div className="pt-4 border-t border-stone-100">
                <h3 className="text-base font-bold text-[#18181b]">3.22 Network Partitions and Latency</h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Network latency is the time required for a block or transaction to traverse the physical internet. High latency directly increases the orphan rate and temporary fork frequency because miners discover competing blocks before hearing about remote proposals.
                </p>
                <div className="mt-3 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-700">
                  <strong className="block text-stone-900 font-bold mb-1">Partition Behavior Across Protocols:</strong>
                  In Bitcoin, both partitioned clusters continue mining independent chains (favoring Availability); upon partition heal, the cluster with higher cumulative work forces a massive reorg on the shorter cluster. In PBFT and Tendermint, consensus halts if neither partition commands a 2/3 quorum (favoring Consistency over Availability).
                </div>
              </div>
            </section>

            {/* PART 10 */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                  Part 10
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                  The CAP Theorem & FLP Impossibility Result
                </h2>
              </div>

              {/* 3.23 */}
              <div>
                <h3 className="text-base font-bold text-[#18181b]">3.23 The CAP Theorem in Distributed Systems</h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Formulated by Eric Brewer in 2000 and formally proven by Seth Gilbert and Nancy Lynch in 2002, the CAP theorem establishes that no distributed data store can simultaneously guarantee all three properties during an asynchronous network partition:
                </p>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="text-stone-900 block mb-1">Consistency (C)</strong>
                    Every read receives the most recent write or an error (linearizability).
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="text-stone-900 block mb-1">Availability (A)</strong>
                    Every non-failing node returns a non-error response without guarantee of recentness.
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="text-stone-900 block mb-1">Partition Tolerance (P)</strong>
                    The system continues functioning despite arbitrary network message drops.
                  </div>
                </div>
                <div className="mt-3 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-stone-700">
                  <strong>The Trade-off During Partitions:</strong> Since network partitions in real-world internet routing are inevitable, a system must choose: favor <strong>CP</strong> (halt or refuse writes to guarantee consistency, e.g., PBFT, Tendermint) or favor <strong>AP</strong> (continue accepting writes and resolve temporary forks later, e.g., Bitcoin Nakamoto consensus).
                </div>
              </div>

              {/* 3.24 */}
              <div className="pt-4 border-t border-stone-100">
                <h3 className="text-base font-bold text-[#18181b]">3.24 The FLP Impossibility Result</h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Published in 1985 by Michael J. Fischer, Nancy A. Lynch, and Michael S. Paterson (MIT), the FLP theorem is one of the most celebrated results in theoretical computer science.
                </p>
                <div className="mt-3 p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs">
                  <div className="text-amber-400 font-bold mb-1">// The FLP Theorem Statement</div>
                  <div>
                    "In an asynchronous network, no deterministic consensus protocol can guarantee agreement in every execution if even a single process is subject to unannounced crash failure."
                  </div>
                  <div className="mt-2 text-stone-400">
                    Why? Because an asynchronous system has no upper bound on transmission delay: other nodes cannot distinguish between a node that has crashed vs. a node that is merely running slow! Practical systems circumvent FLP by introducing partial synchrony (timeouts, delta-synchrony Δ bounds), failure detectors, or randomization.
                  </div>
                </div>
              </div>
            </section>

            {/* PART 11: Comparative Architecture and Engineering Decisions */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                  Part 11
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                  Comparative Architecture and Engineering Decisions
                </h2>
              </div>

              {/* 3.25 */}
              <div>
                <h3 className="text-base font-bold text-[#18181b]">
                  3.25 Choosing the Appropriate Consensus Mechanism
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  A software architect must never choose a consensus protocol based solely on hype, marketing slogans, or synthetic TPS benchmarks. Consensus mechanism selection is dictated strictly by the participant trust model, threat boundaries, network synchrony, and legal finality requirements:
                </p>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70">
                    <strong className="text-stone-900 block font-bold mb-1">
                      Scenario 1 — Public Digital Currency (e.g., Bitcoin)
                    </strong>
                    <p className="text-stone-600 leading-relaxed mb-2">
                      <strong>Requirements:</strong> Censorship-resistant store of value with globally open, pseudonymous, permissionless participation and zero trusted central authorities.
                    </p>
                    <span className="font-bold text-[#ea580c] block">
                      Recommended: Proof of Work (Nakamoto Consensus)
                    </span>
                    <span className="text-stone-500 text-[11px]">
                      Anchor security into physical thermodynamics. Heaviest-chain fork choice ensures anyone can join and sync without trusted checkpoints.
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70">
                    <strong className="text-stone-900 block font-bold mb-1">
                      Scenario 2 — Interbank Settlement Consortium
                    </strong>
                    <p className="text-stone-600 leading-relaxed mb-2">
                      <strong>Requirements:</strong> 8 identified commercial banks settling cross-border FX transactions. Requires sub-second deterministic finality, zero fork probability, and legal auditability.
                    </p>
                    <span className="font-bold text-[#ea580c] block">
                      Recommended: Practical Byzantine Fault Tolerance (PBFT) / BFT-SMaRt
                    </span>
                    <span className="text-stone-500 text-[11px]">
                      Known membership allows quorum voting without token stakes. Instant deterministic commit eliminates reorg risks.
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70">
                    <strong className="text-stone-900 block font-bold mb-1">
                      Scenario 3 — University Credential &amp; Degree Verification
                    </strong>
                    <p className="text-stone-600 leading-relaxed mb-2">
                      <strong>Requirements:</strong> 15 accredited universities issuing verifiable academic diplomas. Low transaction frequency, high institutional reputation, zero cryptocurrency overhead.
                    </p>
                    <span className="font-bold text-[#ea580c] block">
                      Recommended: Proof of Authority (PoA) / Clique
                    </span>
                    <span className="text-stone-500 text-[11px]">
                      Institutions sign blocks in round-robin fashion using legally tied keys. Minimal compute and operational expenses.
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl border border-orange-200 bg-orange-50/50">
                    <strong className="text-orange-950 block font-bold mb-1">
                      Scenario 4 — High-Throughput Global Decentralized Applications (DeFi / Web3)
                    </strong>
                    <p className="text-stone-700 leading-relaxed mb-2">
                      <strong>Requirements:</strong> Smart contract composability, open participation, low energy footprint, fast finality, and robust economic security.
                    </p>
                    <span className="font-bold text-[#ea580c] block">
                      Recommended: Proof of Stake with Checkpoint Finality (Gasper / Tendermint)
                    </span>
                    <span className="text-stone-500 text-[11px]">
                      Capital staking disincentivizes attacks via automated slashing. Checkpoint epochs guarantee economic finality.
                    </span>
                  </div>
                </div>

                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-50">
                        <th className="p-2.5 font-bold text-stone-800">Operational Requirement</th>
                        <th className="p-2.5 font-bold text-stone-800">Network Type</th>
                        <th className="p-2.5 font-bold text-stone-800">Sybil Defense</th>
                        <th className="p-2.5 font-bold text-stone-800">Finality Guarantee</th>
                        <th className="p-2.5 font-bold text-stone-800">Recommended Consensus</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-600">
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Thermodynamic Open Settlement</td>
                        <td className="p-2.5">Public / Permissionless</td>
                        <td className="p-2.5">Proof of Work (Hashrate)</td>
                        <td className="p-2.5">Probabilistic (Heaviest chain)</td>
                        <td className="p-2.5 font-mono text-orange-700 font-bold">PoW (Nakamoto)</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Energy-Efficient Smart Contracts</td>
                        <td className="p-2.5">Public / Permissionless</td>
                        <td className="p-2.5">Capital Stake Lockup</td>
                        <td className="p-2.5">Explicit 2/3 Checkpoint</td>
                        <td className="p-2.5 font-mono text-orange-700 font-bold">PoS (Gasper / CometBFT)</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Regulated Institutional Consortium</td>
                        <td className="p-2.5">Private / Consortium</td>
                        <td className="p-2.5">Cryptographic Identity / PKI</td>
                        <td className="p-2.5">Deterministic (Instant)</td>
                        <td className="p-2.5 font-mono text-orange-700 font-bold">PBFT / Istanbul BFT</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Internal Enterprise Microservices</td>
                        <td className="p-2.5">Private / Single Admin</td>
                        <td className="p-2.5">Zero Malicious Adversaries</td>
                        <td className="p-2.5">Crash-Fault Tolerant</td>
                        <td className="p-2.5 font-mono text-orange-700 font-bold">Raft / Paxos (CFT)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* PART 12: Practical Lab Documentation */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                  Part 12
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                  Practical Lab: Simulating PoW and PoS Using Python
                </h2>
              </div>

              {/* 3.26 */}
              <div>
                <h3 className="text-base font-bold text-[#18181b]">
                  3.26 Practical Lab Overview &amp; Technical Requirements
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  In this practical lab, students build two distinct Python consensus implementations from scratch using only standard libraries (<code className="font-mono">hashlib</code>, <code className="font-mono">json</code>, <code className="font-mono">time</code>, <code className="font-mono">random</code>) with zero third-party blockchain dependencies:
                </p>
                <div className="mt-3 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div>
                      <span className="text-stone-500 block text-[10px] uppercase font-bold">Language</span>
                      <strong className="text-stone-900 font-mono">Python 3.10+</strong>
                    </div>
                    <div>
                      <span className="text-stone-500 block text-[10px] uppercase font-bold">Hashing</span>
                      <strong className="text-stone-900 font-mono">hashlib.sha256</strong>
                    </div>
                    <div>
                      <span className="text-stone-500 block text-[10px] uppercase font-bold">Serialization</span>
                      <strong className="text-stone-900 font-mono">json (sort_keys=True)</strong>
                    </div>
                    <div>
                      <span className="text-stone-500 block text-[10px] uppercase font-bold">Randomness</span>
                      <strong className="text-stone-900 font-mono">random.Random(42)</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3.27 */}
              <div className="pt-4 border-t border-stone-100">
                <h3 className="text-base font-bold text-[#18181b]">
                  3.27 Project A — Build a Proof of Work Simulation (proof_of_work.py)
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Implements canonical JSON serialization (<code className="font-mono">sort_keys=True, separators=(',', ':')</code>), SHA-256 header hashing, incrementing nonce search against dynamic leading zero targets (<code className="font-mono">"0" * difficulty</code>), and a full blockchain validator that verifies both hash difficulty and parent hash linkage.
                </p>
                <div className="mt-3 bg-stone-900 text-stone-200 p-3.5 rounded-2xl font-mono text-xs">
                  <div className="text-amber-400 font-bold mb-1">// Mining Output &amp; Tamper Verification</div>
                  <div>$ python proof_of_work.py</div>
                  <div className="text-emerald-400">BLOCK MINED: Block #0 | Nonce: 18451 | Hash: 0000a7f8... (Attempts: 18452, Time: 0.04s)</div>
                  <div className="text-emerald-400">BLOCK MINED: Block #1 | Nonce: 56320 | Hash: 0000c192... (Attempts: 56321, Time: 0.12s)</div>
                  <div className="text-emerald-400">Blockchain Valid: True</div>
                  <div className="text-rose-400">Valid after tampering: False (Stored hash does not match recalculation!)</div>
                </div>
              </div>

              {/* 3.28 */}
              <div className="pt-4 border-t border-stone-100">
                <h3 className="text-base font-bold text-[#18181b]">
                  3.28 Project B — Build a Proof of Stake Simulation (proof_of_stake.py)
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Implements dynamic validator registration with stake balances, weighted pseudo-random proposer selection using cumulative probability distributions, candidate block generation, and an attestation aggregation engine enforcing a 2/3 (66.67%) stake supermajority.
                </p>
                <div className="mt-3 bg-stone-900 text-stone-200 p-3.5 rounded-2xl font-mono text-xs">
                  <div className="text-amber-400 font-bold mb-1">// Validator Staking &amp; Quorum Decision</div>
                  <div>$ python proof_of_stake.py</div>
                  <div>Validator registered: Validator A, Stake: 50 (50.0%)</div>
                  <div>Validator registered: Validator B, Stake: 30 (30.0%)</div>
                  <div>Validator registered: Validator C, Stake: 20 (20.0%)</div>
                  <div>Selected Proposer: Validator A</div>
                  <div className="text-emerald-400">Approved Stake: 80 / 100 (80.0%)</div>
                  <div className="text-emerald-400">Consensus: BLOCK ACCEPTED (≥ 66.67% Threshold Met)</div>
                </div>
              </div>

              {/* 3.29 */}
              <div className="pt-4 border-t border-stone-100">
                <h3 className="text-base font-bold text-[#18181b]">
                  3.29 Comparative Practical Lab — PoW vs PoS &amp; CLI Challenge
                </h3>
                <div className="mt-3 overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-50">
                        <th className="p-2.5 font-bold text-stone-800">Experiment Parameter</th>
                        <th className="p-2.5 font-bold text-stone-800">Proof of Work</th>
                        <th className="p-2.5 font-bold text-stone-800">Proof of Stake</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-600">
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Main Participation Resource</td>
                        <td className="p-2.5">Computational Work</td>
                        <td className="p-2.5">Stake Capital</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Selection Mechanism</td>
                        <td className="p-2.5">Hash-search competition</td>
                        <td className="p-2.5">Stake-weighted protocol selection</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Mining Nonce</td>
                        <td className="p-2.5">Used continuously</td>
                        <td className="p-2.5">Not used for mining</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Validator Voting</td>
                        <td className="p-2.5">Implicit in work</td>
                        <td className="p-2.5">Explicit 2/3 committee attestations</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 p-4 rounded-2xl bg-stone-100 border border-stone-200 text-xs text-stone-800">
                  <strong className="block font-bold mb-1">
                    Final Practical Challenge (Section 3.29 Deliverable):
                  </strong>
                  <p className="leading-relaxed">
                    Build a command-line program that allows users to: select PoW or PoS, add custom transactions, mine or propose a block, evaluate quorum criteria, validate the chain, and measure computational cost and execution duration across difficulty levels 1 through 5.
                  </p>
                </div>
              </div>
            </section>

            {/* PART 13: Advanced Distributed Systems Concepts */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                  Part 13
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                  Advanced Distributed Systems Concepts &amp; Security Attacks
                </h2>
              </div>

              {/* 3.30 */}
              <div>
                <h3 className="text-base font-bold text-[#18181b]">
                  3.30 Security Attacks Against Consensus Mechanisms
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Even when cryptographic hashes and digital signatures are mathematically unbreakable, consensus mechanisms can be attacked at the game-theoretic and network routing layers:
                </p>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="text-stone-900 block font-bold mb-1 text-rose-700">1. 51% Attack</strong>
                    An attacker controlling &gt;50% of hash power can mine a secret longer chain, overtake the public chain, reorganize recent history, and double-spend coins. Cannot forge signatures.
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="text-stone-900 block font-bold mb-1 text-rose-700">2. Selfish Mining</strong>
                    Discovered by Eyal &amp; Sirer (Cornell). A pool withholds mined blocks strategically and broadcasts them only when honest miners discover competing blocks, wasting honest energy.
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="text-stone-900 block font-bold mb-1 text-rose-700">3. Nothing-at-Stake</strong>
                    In naive PoS without slashing, validators can vote on every competing fork at zero cost, preventing network convergence during partitions.
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="text-stone-900 block font-bold mb-1 text-rose-700">4. Long-Range Attack</strong>
                    An attacker acquires old discarded validator keys that once held majority stake and builds an alternative historical chain from genesis. Mitigated by weak subjectivity checkpoints.
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="text-stone-900 block font-bold mb-1 text-rose-700">5. Eclipse Attack</strong>
                    An adversary monopolizes all inbound and outbound P2P connections to a specific node, feeding it a completely false, isolated view of the blockchain.
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="text-stone-900 block font-bold mb-1 text-rose-700">6. BGP Hijacking &amp; Partitions</strong>
                    Adversaries exploit autonomous system routing flaws to split the network into isolated subnets, facilitating double-spends across partition boundaries.
                  </div>
                </div>
              </div>

              {/* 3.31 */}
              <div className="pt-4 border-t border-stone-100">
                <h3 className="text-base font-bold text-[#18181b]">
                  3.31 Essential Distributed Systems Research Concepts
                </h3>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="text-stone-900 block mb-1">A. Leader Election</strong>
                    Protocols for dynamically choosing a coordinator (Raft term leader, PoS slot proposer).
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="text-stone-900 block mb-1">B. Reliable Broadcast</strong>
                    All-or-nothing delivery guarantees: if one honest node delivers message M, all honest nodes deliver M.
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="text-stone-900 block mb-1">C. Atomic Broadcast</strong>
                    Guarantees total order delivery across all replicas; mathematically equivalent to distributed consensus.
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="text-stone-900 block mb-1">D. Logical Time &amp; Vector Clocks</strong>
                    Leslie Lamport's happens-before relation (→) ordering events without synchronized physical quartz clocks.
                  </div>
                </div>
              </div>
            </section>

            {/* PART 14: Industry Case Studies */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                  Part 14
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                  Industry Case Studies: Production Consensus Systems
                </h2>
              </div>

              {/* 3.32 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50">
                  <span className="text-[10px] font-bold uppercase text-orange-600 block">Case Study 1</span>
                  <strong className="text-stone-900 text-sm font-bold block mt-0.5">Bitcoin (Nakamoto Consensus)</strong>
                  <p className="text-stone-600 mt-2 leading-relaxed">
                    Pure Proof of Work over SHA-256 with 10-minute target block time. Cumulative-work chain selection. Dynamic difficulty retargeting every 2,016 blocks (~2 weeks). Delivers asymptotic probabilistic finality without validator lists.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50">
                  <span className="text-[10px] font-bold uppercase text-orange-600 block">Case Study 2</span>
                  <strong className="text-stone-900 text-sm font-bold block mt-0.5">Ethereum (Gasper Architecture)</strong>
                  <p className="text-stone-600 mt-2 leading-relaxed">
                    Combines Casper FFG (checkpoint finality) with LMD-GHOST (Latest Message Driven Greediest Heaviest Observed SubTree) fork-choice. Over 1,000,000 validators with 32 ETH stakes grouped into dynamic committees, finalized every 2 epochs (~12.8 minutes).
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50">
                  <span className="text-[10px] font-bold uppercase text-orange-600 block">Case Study 3</span>
                  <strong className="text-stone-900 text-sm font-bold block mt-0.5">Hyperledger Fabric (Enterprise Ordering)</strong>
                  <p className="text-stone-600 mt-2 leading-relaxed">
                    Modular permissioned architecture separating transaction execution from ordering. Employs Raft crash-tolerant or SmartBFT Byzantine fault-tolerant ordering clusters across enterprise consortium organizations without native tokens or mining.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50">
                  <span className="text-[10px] font-bold uppercase text-orange-600 block">Case Study 4</span>
                  <strong className="text-stone-900 text-sm font-bold block mt-0.5">PBFT (Castro &amp; Liskov Research)</strong>
                  <p className="text-stone-600 mt-2 leading-relaxed">
                    The seminal 1999 paper demonstrating practical Byzantine agreement with $O(R^2)$ communication complexity. Demonstrates view changes when leaders fail, proving safety across arbitrary message delays under partial synchrony.
                  </p>
                </div>
              </div>
            </section>

            {/* PART 15: Module Assignments */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                  Part 15
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                  Module Assignments: Applied Engineering Tasks
                </h2>
              </div>

              {/* 3.33 */}
              <div className="space-y-3 text-xs">
                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                  <strong className="text-stone-900 block font-bold mb-1">Assignment 1 — Distributed Architecture Analysis</strong>
                  Design an architectural topology for 10 geodistributed nodes. Provide packet flow diagrams for transaction gossip, failure modes when 3 nodes crash, and analyze whether BFT is mandatory. Deliverable: 1,000-word engineering report and topology diagram.
                </div>
                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                  <strong className="text-stone-900 block font-bold mb-1">Assignment 2 — Byzantine Generals Simulation</strong>
                  Write a Python simulator modeling 7 generals with 2 traitors and 5 loyal lieutenants. Demonstrate how conflicting commander messages are resolved or fail depending on the $n \ge 3f + 1$ threshold.
                </div>
                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                  <strong className="text-stone-900 block font-bold mb-1">Assignment 3 — Consensus Mechanism Evaluation Matrix</strong>
                  Produce an exhaustive technical evaluation comparing PoW, PoS, PoA, and PBFT across hardware barriers, finality guarantees, energy consumption, and Sybil resistance.
                </div>
                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                  <strong className="text-stone-900 block font-bold mb-1">Assignment 4 — Chain Reorganization Simulation</strong>
                  Simulate two competing branches diverging from genesis block #100. Implement the cumulative-work chain selection rule and log what happens to displaced mempool transactions when Branch B overtakes Branch A.
                </div>
                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                  <strong className="text-stone-900 block font-bold mb-1">Assignment 5 — CAP Theorem Partition Analysis</strong>
                  Model a distributed payment service across 3 data centers. Simulate an undersea cable severance. Detail state behavior under CP mode vs AP mode and document partition reconciliation.
                </div>
                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                  <strong className="text-stone-900 block font-bold mb-1">Assignment 6 — Final Engineering Capstone Consensus Simulator</strong>
                  Build a unified CLI program that allows operators to switch between PoW and PoS, inject transactions, measure mining wall-clock times, and simulate consensus failures.
                </div>
              </div>

              {/* 3.34 */}
              <div className="pt-4 border-t border-stone-100">
                <h3 className="text-base font-bold text-[#18181b]">
                  3.34 Module 3 Knowledge Assessment (18 Questions)
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Students complete an 18-question interactive examination covering distributed computing foundations, Byzantine failure thresholds, BFT quorum overlap mathematics, Proof of Work mining difficulty, Nakamoto cumulative work, Proof of Stake slashing, PBFT phases, chain reorganizations, probabilistic finality, Sybil attacks, CAP theorem trade-offs, and FLP impossibility. Available in the <strong>Knowledge Quiz Tab</strong>.
                </p>
              </div>
            </section>

            {/* PART 16: Recommended University & Technical Resources */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                  Part 16
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                  Recommended University and Technical Resources
                </h2>
              </div>

              {/* 3.35 */}
              <div className="overflow-x-auto text-xs">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50">
                      <th className="p-2.5 font-bold text-stone-800">Resource &amp; Institution</th>
                      <th className="p-2.5 font-bold text-stone-800">Recommended Topic of Study</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-600">
                    <tr>
                      <td className="p-2.5 font-bold text-stone-900">Stanford EE374 (Blockchain Infrastructure)</td>
                      <td className="p-2.5">Distributed consensus, Bitcoin mechanics, Proof of Stake, and BFT systems.</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-stone-900">Stanford CS251 (Blockchain Technologies)</td>
                      <td className="p-2.5">Classical consensus, synchronous vs asynchronous network models, and Nakamoto consensus.</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-stone-900">MIT 6.852 (Distributed Algorithms)</td>
                      <td className="p-2.5">Fault-tolerant algorithms, Byzantine agreement proofs, and consensus impossibility results.</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-stone-900">EPFL (Distributed Algorithms Course)</td>
                      <td className="p-2.5">Reliable broadcast, atomic multicast, and epidemic consensus protocols.</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-stone-900">Ethereum Consensus Documentation</td>
                      <td className="p-2.5">Proof of Stake architecture, validator lifecycles, Gasper, and slashing specifications.</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-stone-900">Bitcoin Developer Guide</td>
                      <td className="p-2.5">Proof of Work block validation, difficulty retargeting, and reorganization handling.</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-stone-900">Castro &amp; Liskov (OSDI 1999 PBFT Paper)</td>
                      <td className="p-2.5">Foundational Practical Byzantine Fault Tolerance protocol mechanics and view changes.</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-stone-900">Fischer, Lynch &amp; Paterson (FLP 1985 Paper)</td>
                      <td className="p-2.5">Formal proof of consensus impossibility in asynchronous distributed systems.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* PART 17: Module Completion Requirements & Learning Outcomes */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                  Part 17
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                  Module Completion Requirements &amp; Learning Outcomes
                </h2>
              </div>

              {/* 3.36 & 3.37 */}
              <div>
                <h3 className="text-base font-bold text-[#18181b]">
                  3.37 Final Learning Outcomes &amp; Next Module Preview
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Upon completing Module 3, students are capable of rigorously evaluating distributed architectures, proving quorum bounds, explaining fork-choice rules, identifying network security threats, and implementing custom consensus algorithms in code.
                </p>

                <div className="mt-6 rounded-2xl bg-gradient-to-br from-stone-900 via-stone-950 to-orange-950 p-6 text-white">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-400 block mb-1">
                    Up Next in Track
                  </span>
                  <h4 className="text-lg font-bold">
                    Module 4 — Bitcoin Architecture, Transactions and the UTXO Model
                  </h4>
                  <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                    Explore Bitcoin node architecture and peer-to-peer networking, transaction serialization, the Unspent Transaction Output (UTXO) accounting model, transaction inputs and outputs, Bitcoin Script execution, mempool policies, Merkle trees in block headers, coinbase transactions, and dynamic difficulty adjustment algorithms.
                  </p>
                  <button
                    onClick={() => navigate("/learning/blockchain/bitcoin-utxo")}
                    className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#f97316] text-white text-xs font-bold hover:bg-[#ea580c] transition cursor-pointer"
                  >
                    <span>Proceed to Module 4: Bitcoin Architecture</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: 4 INTERACTIVE SIMULATORS                           */}
        {/* ========================================================= */}
        {activeTab === "interactive-tools" && (
          <div className="space-y-10">
            {/* TOOL 1: Byzantine Generals Simulator */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-lg bg-orange-50 px-2.5 py-1 text-[11px] font-bold text-[#ea580c] mb-1">
                    <Shield size={12} />
                    <span>Interactive Tool 1</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#18181b]">
                    Byzantine Generals Consensus Simulator
                  </h3>
                  <p className="text-xs text-stone-500">
                    Simulate the classical Byzantine Generals problem with interactive commander orders, traitor strategies, and quorum verification.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold ${
                      bgtSatisfiesBound
                        ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                        : "bg-rose-100 text-rose-800 border border-rose-300"
                    }`}
                  >
                    {bgtSatisfiesBound ? (
                      <>
                        <CheckCheck size={14} />
                        <span>Satisfies n ≥ 3f + 1 ({generalsCount} ≥ {3 * traitorsCount + 1})</span>
                      </>
                    ) : (
                      <>
                        <XCircle size={14} />
                        <span>Violates n ≥ 3f + 1 ({generalsCount} &lt; {3 * traitorsCount + 1})</span>
                      </>
                    )}
                  </span>
                </div>
              </div>

              {/* Controls */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Total Generals (n): <span className="text-[#ea580c]">{generalsCount}</span>
                  </label>
                  <input
                    type="range"
                    min="3"
                    max="10"
                    value={generalsCount}
                    onChange={(e) => setGeneralsCount(parseInt(e.target.value))}
                    className="w-full accent-[#f97316]"
                  />
                  <span className="text-[10px] text-stone-500">Min 4 required to tolerate 1 traitor</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Traitorous Nodes (f): <span className="text-rose-600">{traitorsCount}</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="3"
                    value={traitorsCount}
                    onChange={(e) => setTraitorsCount(parseInt(e.target.value))}
                    className="w-full accent-rose-500"
                  />
                  <span className="text-[10px] text-stone-500">Quorum Q = 2f + 1 = {bgtQuorumRequired}</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Commander Order</label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCommanderOrder("ATTACK")}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition ${
                        commanderOrder === "ATTACK"
                          ? "bg-rose-600 text-white"
                          : "bg-stone-100 text-stone-700"
                      }`}
                    >
                      ATTACK
                    </button>
                    <button
                      onClick={() => setCommanderOrder("RETREAT")}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition ${
                        commanderOrder === "RETREAT"
                          ? "bg-blue-600 text-white"
                          : "bg-stone-100 text-stone-700"
                      }`}
                    >
                      RETREAT
                    </button>
                  </div>
                </div>
              </div>

              {/* Visual Generals Matrix */}
              <div className="mt-6 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <span className="text-xs font-bold text-stone-800 uppercase tracking-wider block mb-3">
                  Participating Generals & Vote Distribution
                </span>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {/* Commander */}
                  <div className="p-3 rounded-xl border border-amber-300 bg-amber-50">
                    <span className="text-[10px] font-bold text-amber-800 uppercase block">Commander (G0)</span>
                    <div className="text-xs font-bold text-stone-900 mt-0.5">General 0</div>
                    <span className="inline-block mt-2 px-2 py-0.5 bg-white text-stone-800 font-mono font-bold text-[10px] rounded border border-amber-200">
                      Dispatched: {commanderOrder}
                    </span>
                  </div>

                  {/* Lieutenants */}
                  {Array.from({ length: generalsCount - 1 }).map((_, idx) => {
                    const isTraitor = idx < traitorsCount;
                    const receivedOrder = isTraitor
                      ? commanderOrder === "ATTACK"
                        ? "RETREAT (Forged)"
                        : "ATTACK (Forged)"
                      : commanderOrder;

                    return (
                      <div
                        key={idx}
                        className={`p-3 rounded-xl border ${
                          isTraitor
                            ? "border-rose-300 bg-rose-50"
                            : "border-emerald-300 bg-emerald-50"
                        }`}
                      >
                        <span
                          className={`text-[10px] font-bold uppercase block ${
                            isTraitor ? "text-rose-800" : "text-emerald-800"
                          }`}
                        >
                          {isTraitor ? `Traitor (G${idx + 1})` : `Honest (G${idx + 1})`}
                        </span>
                        <div className="text-xs font-bold text-stone-900 mt-0.5">
                          Lieutenant {idx + 1}
                        </div>
                        <span className="inline-block mt-2 px-2 py-0.5 bg-white text-stone-800 font-mono font-bold text-[10px] rounded border border-stone-200">
                          Decides: {bgtSatisfiesBound ? commanderOrder : receivedOrder}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between text-xs">
                  <span className="text-stone-600">
                    Outcome:{" "}
                    <strong>
                      {bgtSatisfiesBound
                        ? `Consensus Guaranteed (${commanderOrder})`
                        : "Consensus Broken! Honest Lieutenants Disagree"}
                    </strong>
                  </span>
                  <span className="text-[11px] font-mono text-stone-500">
                    Required matching votes: {bgtQuorumRequired} / {generalsCount}
                  </span>
                </div>
              </div>
            </div>

            {/* TOOL 2: Live Proof of Work Mining Simulator */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-lg bg-orange-50 px-2.5 py-1 text-[11px] font-bold text-[#ea580c] mb-1">
                    <Cpu size={12} />
                    <span>Interactive Tool 2</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#18181b]">
                    Live Proof of Work Mining & Tamper Sandbox
                  </h3>
                  <p className="text-xs text-stone-500">
                    Perform genuine client-side SHA-256 mining, adjust difficulty target, and observe hash avalanche on tampering.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold ${
                      powMinedSuccessfully
                        ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                        : "bg-stone-100 text-stone-700 border border-stone-200"
                    }`}
                  >
                    {powMinedSuccessfully ? (
                      <>
                        <CheckCircle2 size={14} className="text-emerald-600" />
                        <span>Valid PoW Block</span>
                      </>
                    ) : (
                      <>
                        <AlertTriangle size={14} className="text-amber-600" />
                        <span>Target Not Met</span>
                      </>
                    )}
                  </span>
                </div>
              </div>

              {/* Mining Configuration Inputs */}
              <div className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Block Transactions & Payload:
                  </label>
                  <input
                    type="text"
                    value={powData}
                    onChange={(e) => {
                      setPowData(e.target.value);
                      setPowTampered(true);
                    }}
                    className="w-full rounded-xl border border-stone-200 bg-stone-50 px-3.5 py-2 text-xs font-mono text-stone-800 focus:outline-hidden focus:border-[#f97316]"
                  />
                  {powTampered && (
                    <span className="text-[11px] text-rose-600 font-semibold block mt-1">
                      ⚠️ Block payload altered! The previously discovered nonce is now invalid!
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Mining Difficulty (Leading Zeros):{" "}
                      <span className="text-[#ea580c] font-mono">{powDifficulty}</span>
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="4"
                      value={powDifficulty}
                      onChange={(e) => setPowDifficulty(parseInt(e.target.value))}
                      className="w-full accent-[#f97316]"
                    />
                    <span className="text-[10px] text-stone-500 font-mono">
                      Target: {"0".repeat(powDifficulty)}... (~16^{powDifficulty} ={" "}
                      {Math.pow(16, powDifficulty).toLocaleString()} attempts)
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">Current Nonce:</label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        value={powNonce}
                        onChange={(e) => setPowNonce(parseInt(e.target.value) || 0)}
                        className="w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs font-mono text-stone-800"
                      />
                      <button
                        onClick={() => setPowNonce((n) => n + 1)}
                        className="px-2.5 py-1.5 rounded-lg bg-stone-200 text-stone-800 text-xs font-bold hover:bg-stone-300 transition cursor-pointer"
                      >
                        +1
                      </button>
                    </div>
                  </div>

                  <div className="flex items-end">
                    <button
                      onClick={handleStartMining}
                      disabled={powIsMining}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer ${
                        powIsMining
                          ? "bg-stone-300 text-stone-500 cursor-not-allowed"
                          : "bg-[#f97316] text-white hover:bg-[#ea580c] shadow-xs"
                      }`}
                    >
                      {powIsMining ? (
                        <>
                          <RefreshCw size={14} className="animate-spin" />
                          <span>Mining in progress...</span>
                        </>
                      ) : (
                        <>
                          <Play size={14} fill="currentColor" />
                          <span>Run Mining Loop</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Live Hash Output */}
                <div className="p-4 rounded-2xl bg-stone-900 text-white font-mono text-xs">
                  <div className="flex items-center justify-between text-stone-400 mb-2">
                    <span>SHA-256 Block Header Hash</span>
                    <span>
                      Attempts: {powAttempts.toLocaleString()} | Time: {powElapsedMs} ms
                    </span>
                  </div>
                  <div className="break-all font-bold text-sm tracking-wide">
                    <span className="text-amber-400">{powHash.slice(0, powDifficulty)}</span>
                    <span className="text-stone-300">{powHash.slice(powDifficulty)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* TOOL 3: Proof of Stake Validator & Committee Simulator */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-lg bg-orange-50 px-2.5 py-1 text-[11px] font-bold text-[#ea580c] mb-1">
                    <Coins size={12} />
                    <span>Interactive Tool 3</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#18181b]">
                    Proof of Stake Validator & Committee Simulator
                  </h3>
                  <p className="text-xs text-stone-500">
                    Simulate stake-weighted block proposal, attestation aggregation, and 2/3 supermajority consensus.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold ${
                      isPosConsensusReached
                        ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                        : "bg-rose-100 text-rose-800 border border-rose-300"
                    }`}
                  >
                    {isPosConsensusReached ? (
                      <>
                        <CheckCheck size={14} />
                        <span>Block Finalized (≥ {posThreshold}%)</span>
                      </>
                    ) : (
                      <>
                        <XCircle size={14} />
                        <span>Quorum Failed (&lt; {posThreshold}%)</span>
                      </>
                    )}
                  </span>
                </div>
              </div>

              {/* Stake & Approval Progress */}
              <div className="mt-6 space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-stone-700 mb-1">
                    <span>
                      Attestation Stake: {approvedPosStake} / {totalPosStake} ETH (
                      {approvedStakePercentage.toFixed(1)}%)
                    </span>
                    <span className="text-stone-500">Required: {posThreshold.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-stone-100 h-3 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        isPosConsensusReached ? "bg-emerald-500" : "bg-rose-500"
                      }`}
                      style={{ width: `${approvedStakePercentage}%` }}
                    />
                  </div>
                </div>

                {/* Proposer Lottery */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-orange-50 border border-orange-200">
                  <div className="text-xs">
                    <span className="text-stone-500">Selected Proposer: </span>
                    <strong className="text-orange-950 font-bold">{posProposer}</strong>
                  </div>
                  <button
                    onClick={handleSelectProposerLottery}
                    className="px-3 py-1.5 rounded-lg bg-[#f97316] text-white text-xs font-bold hover:bg-[#ea580c] transition cursor-pointer flex items-center gap-1"
                  >
                    <RotateCcw size={12} />
                    <span>Run Proposer Lottery</span>
                  </button>
                </div>

                {/* Validator List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {validators.map((v) => (
                    <div
                      key={v.id}
                      className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/70 flex items-center justify-between"
                    >
                      <div>
                        <div className="text-xs font-bold text-stone-900">{v.name}</div>
                        <div className="text-[11px] text-stone-500">
                          Stake: <span className="font-mono font-bold text-stone-800">{v.stake} ETH</span> (
                          {((v.stake / totalPosStake) * 100).toFixed(1)}%)
                        </div>
                      </div>

                      <button
                        onClick={() => toggleValidatorApproval(v.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition ${
                          v.approved
                            ? "bg-emerald-600 text-white"
                            : "bg-rose-600 text-white"
                        }`}
                      >
                        {v.approved ? "Approved" : "Rejected"}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* TOOL 4: CAP Theorem Network Partition Sandbox */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-lg bg-orange-50 px-2.5 py-1 text-[11px] font-bold text-[#ea580c] mb-1">
                    <Scale size={12} />
                    <span>Interactive Tool 4</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#18181b]">
                    CAP Theorem & Network Partition Playground
                  </h3>
                  <p className="text-xs text-stone-500">
                    Observe Consistency (CP) vs. Availability (AP) during an active network partition and watch reconciliation.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCapMode(capMode === "CP" ? "AP" : "CP")}
                    className="px-3 py-1.5 rounded-xl bg-stone-100 text-stone-800 font-bold text-xs border border-stone-300 hover:bg-stone-200 transition cursor-pointer"
                  >
                    Mode: <span className="text-[#ea580c]">{capMode}</span> (Toggle)
                  </button>
                </div>
              </div>

              {/* Partitions Graph */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Partition A */}
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-stone-800 uppercase">
                      Partition A (Data Center 1)
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-700">
                      Balance: ₹{partitionABalance}
                    </span>
                  </div>
                  <button
                    onClick={() => handleDepositA(500)}
                    className="w-full mt-2 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition cursor-pointer"
                  >
                    Deposit +₹500 on Node A
                  </button>
                </div>

                {/* Partition B */}
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-stone-800 uppercase">
                      Partition B (Data Center 2)
                    </span>
                    <span className="text-xs font-mono font-bold text-blue-700">
                      Balance: ₹{partitionBBalance}
                    </span>
                  </div>
                  <button
                    onClick={handleReadB}
                    className="w-full mt-2 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition cursor-pointer"
                  >
                    Read Balance from Node B
                  </button>
                </div>
              </div>

              {/* Status and Action */}
              <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 rounded-xl bg-stone-100 border border-stone-200">
                <span className="text-xs text-stone-700">
                  Network Link Status:{" "}
                  <strong className={isPartitioned ? "text-rose-600" : "text-emerald-700"}>
                    {isPartitioned ? "PARTITION ACTIVE (Fiber Cut)" : "ONLINE (Fully Connected)"}
                  </strong>
                </span>

                <button
                  onClick={() => {
                    if (isPartitioned) {
                      handleHealPartition();
                    } else {
                      setIsPartitioned(true);
                      setCapLogs((prev) => ["[Partition Triggered] Nodes A & B isolated.", ...prev]);
                    }
                  }}
                  className="px-3.5 py-1.5 rounded-lg bg-stone-900 text-white text-xs font-bold hover:bg-stone-800 transition cursor-pointer"
                >
                  {isPartitioned ? "Heal Network Partition" : "Sever Network Connection"}
                </button>
              </div>

              {/* Log Feed */}
              <div className="mt-4 p-3.5 rounded-xl bg-stone-900 text-stone-300 font-mono text-[11px] space-y-1">
                <span className="text-stone-500 block mb-1 uppercase text-[10px]">System Execution Log:</span>
                {capLogs.length === 0 ? (
                  <div className="text-stone-600">Interact with Partition A or B above to observe CAP trade-offs...</div>
                ) : (
                  capLogs.map((log, idx) => <div key={idx}>{log}</div>)
                )}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: PYTHON LAB CODE (PoW & PoS)                        */}
        {/* ========================================================= */}
        {activeTab === "python-code" && (
          <div className="space-y-8">
            {/* Project A: proof_of_work.py */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between border-b border-stone-200 pb-4 mb-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-lg bg-orange-50 px-2.5 py-1 text-[11px] font-bold text-[#ea580c] mb-1">
                    <FileCode size={12} />
                    <span>Project A</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#18181b]">
                    proof_of_work.py — Complete Mining & Tampering Simulator
                  </h3>
                </div>

                <button
                  onClick={() =>
                    handleCopy(
                      `import hashlib\nimport json\nimport time\n\nclass Block:\n    def __init__(self, index, transactions, previous_hash):\n        self.index = index\n        self.timestamp = time.time()\n        self.transactions = transactions\n        self.previous_hash = previous_hash\n        self.nonce = 0\n        self.block_hash = self.calculate_hash()\n\n    def calculate_hash(self):\n        block_data = {\n            "index": self.index,\n            "timestamp": self.timestamp,\n            "transactions": self.transactions,\n            "previous_hash": self.previous_hash,\n            "nonce": self.nonce\n        }\n        serialized = json.dumps(block_data, sort_keys=True, separators=(",", ":")).encode("utf-8")\n        return hashlib.sha256(serialized).hexdigest()\n\n    def mine_block(self, difficulty):\n        target = "0" * difficulty\n        attempts = 0\n        start_time = time.perf_counter()\n        while True:\n            self.block_hash = self.calculate_hash()\n            attempts += 1\n            if self.block_hash.startswith(target):\n                break\n            self.nonce += 1\n        elapsed = time.perf_counter() - start_time\n        print(f"\\nBLOCK MINED SUCCESSFULLY: Block #{self.index} | Nonce: {self.nonce} | Hash: {self.block_hash} | Attempts: {attempts} | Time: {elapsed:.4f}s")\n\n    def is_valid_proof(self, difficulty):\n        return self.block_hash == self.calculate_hash() and self.block_hash.startswith("0" * difficulty)\n\nclass ProofOfWorkBlockchain:\n    def __init__(self, difficulty=4):\n        self.chain = []\n        self.difficulty = difficulty\n        genesis = Block(0, [{"message": "Genesis Block"}], "0" * 64)\n        genesis.mine_block(self.difficulty)\n        self.chain.append(genesis)\n\n    def latest_block(self):\n        return self.chain[-1]\n\n    def add_block(self, transactions):\n        prev = self.latest_block()\n        new_block = Block(len(self.chain), transactions, prev.block_hash)\n        new_block.mine_block(self.difficulty)\n        self.chain.append(new_block)\n\n    def validate_chain(self):\n        for i, block in enumerate(self.chain):\n            if not block.is_valid_proof(self.difficulty):\n                return False\n            if i > 0 and block.previous_hash != self.chain[i-1].block_hash:\n                return False\n        return True\n\nif __name__ == "__main__":\n    bc = ProofOfWorkBlockchain(difficulty=4)\n    bc.add_block([{"sender": "Alice", "receiver": "Bob", "amount": 100}])\n    bc.add_block([{"sender": "Bob", "receiver": "Charlie", "amount": 50}])\n    print("\\nChain Valid:", bc.validate_chain())\n    # Tampering test:\n    bc.chain[1].transactions[0]["amount"] = 999999\n    print("Chain Valid after tampering:", bc.validate_chain())`,
                      "pow-code"
                    )
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold transition cursor-pointer"
                >
                  {copiedCode === "pow-code" ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  <span>{copiedCode === "pow-code" ? "Copied!" : "Copy Python Code"}</span>
                </button>
              </div>

              <pre className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs overflow-x-auto leading-relaxed">
{`import hashlib
import json
import time

class Block:
    def __init__(self, index, transactions, previous_hash):
        self.index = index
        self.timestamp = time.time()
        self.transactions = transactions
        self.previous_hash = previous_hash
        self.nonce = 0
        self.block_hash = self.calculate_hash()

    def calculate_hash(self):
        block_data = {
            "index": self.index,
            "timestamp": self.timestamp,
            "transactions": self.transactions,
            "previous_hash": self.previous_hash,
            "nonce": self.nonce
        }
        serialized = json.dumps(block_data, sort_keys=True, separators=(",", ":")).encode("utf-8")
        return hashlib.sha256(serialized).hexdigest()

    def mine_block(self, difficulty):
        target = "0" * difficulty
        attempts = 0
        start_time = time.perf_counter()
        while True:
            self.block_hash = self.calculate_hash()
            attempts += 1
            if self.block_hash.startswith(target):
                break
            self.nonce += 1
        elapsed = time.perf_counter() - start_time
        print(f"\\nBLOCK MINED SUCCESSFULLY: Block #{self.index} | Nonce: {self.nonce} | Hash: {self.block_hash} | Attempts: {attempts} | Time: {elapsed:.4f}s")

    def is_valid_proof(self, difficulty):
        return self.block_hash == self.calculate_hash() and self.block_hash.startswith("0" * difficulty)

class ProofOfWorkBlockchain:
    def __init__(self, difficulty=4):
        self.chain = []
        self.difficulty = difficulty
        genesis = Block(0, [{"message": "Genesis Block"}], "0" * 64)
        genesis.mine_block(self.difficulty)
        self.chain.append(genesis)

    def latest_block(self):
        return self.chain[-1]

    def add_block(self, transactions):
        prev = self.latest_block()
        new_block = Block(len(self.chain), transactions, prev.block_hash)
        new_block.mine_block(self.difficulty)
        self.chain.append(new_block)

    def validate_chain(self):
        for i, block in enumerate(self.chain):
            if not block.is_valid_proof(self.difficulty):
                return False
            if i > 0 and block.previous_hash != self.chain[i-1].block_hash:
                return False
        return True

if __name__ == "__main__":
    bc = ProofOfWorkBlockchain(difficulty=4)
    bc.add_block([{"sender": "Alice", "receiver": "Bob", "amount": 100}])
    bc.add_block([{"sender": "Bob", "receiver": "Charlie", "amount": 50}])
    print("\\nChain Valid:", bc.validate_chain())
    # Tampering test:
    bc.chain[1].transactions[0]["amount"] = 999999
    print("Chain Valid after tampering:", bc.validate_chain())`}
              </pre>
            </div>

            {/* Project B: proof_of_stake.py */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between border-b border-stone-200 pb-4 mb-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-lg bg-orange-50 px-2.5 py-1 text-[11px] font-bold text-[#ea580c] mb-1">
                    <FileCode size={12} />
                    <span>Project B</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#18181b]">
                    proof_of_stake.py — Validator Registration & Quorum Engine
                  </h3>
                </div>

                <button
                  onClick={() =>
                    handleCopy(
                      `import random\nimport hashlib\nimport json\nimport time\n\nclass Validator:\n    def __init__(self, name, stake):\n        if stake <= 0:\n            raise ValueError("Stake must be positive")\n        self.name = name\n        self.stake = stake\n\nclass ProofOfStakeNetwork:\n    def __init__(self):\n        self.validators = []\n        self.rng = random.Random(42)\n\n    def register_validator(self, name, stake):\n        self.validators.append(Validator(name, stake))\n\n    def total_stake(self):\n        return sum(v.stake for v in self.validators)\n\n    def select_proposer(self):\n        total = self.total_stake()\n        selection = self.rng.uniform(0, total)\n        cumulative = 0\n        for v in self.validators:\n            cumulative += v.stake\n            if selection < cumulative:\n                return v\n        return self.validators[-1]\n\n    def reach_consensus(self, votes, threshold=2/3):\n        total = self.total_stake()\n        approved = sum(v.stake for v in self.validators if votes.get(v.name, False))\n        ratio = approved / total\n        return ratio >= threshold\n\nif __name__ == "__main__":\n    net = ProofOfStakeNetwork()\n    net.register_validator("Validator A", 50)\n    net.register_validator("Validator B", 30)\n    net.register_validator("Validator C", 20)\n    proposer = net.select_proposer()\n    print("Selected Proposer:", proposer.name)\n    votes = {"Validator A": True, "Validator B": True, "Validator C": False}\n    print("Consensus Reached (2/3):", net.reach_consensus(votes))`,
                      "pos-code"
                    )
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold transition cursor-pointer"
                >
                  {copiedCode === "pos-code" ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  <span>{copiedCode === "pos-code" ? "Copied!" : "Copy Python Code"}</span>
                </button>
              </div>

              <pre className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs overflow-x-auto leading-relaxed">
{`import random
import hashlib
import json
import time

class Validator:
    def __init__(self, name, stake):
        if stake <= 0:
            raise ValueError("Stake must be positive")
        self.name = name
        self.stake = stake

class ProofOfStakeNetwork:
    def __init__(self):
        self.validators = []
        self.rng = random.Random(42)

    def register_validator(self, name, stake):
        self.validators.append(Validator(name, stake))

    def total_stake(self):
        return sum(v.stake for v in self.validators)

    def select_proposer(self):
        total = self.total_stake()
        selection = self.rng.uniform(0, total)
        cumulative = 0
        for v in self.validators:
            cumulative += v.stake
            if selection < cumulative:
                return v
        return self.validators[-1]

    def reach_consensus(self, votes, threshold=2/3):
        total = self.total_stake()
        approved = sum(v.stake for v in self.validators if votes.get(v.name, False))
        ratio = approved / total
        return ratio >= threshold

if __name__ == "__main__":
    net = ProofOfStakeNetwork()
    net.register_validator("Validator A", 50)
    net.register_validator("Validator B", 30)
    net.register_validator("Validator C", 20)
    proposer = net.select_proposer()
    print("Selected Proposer:", proposer.name)
    votes = {"Validator A": True, "Validator B": True, "Validator C": False}
    print("Consensus Reached (2/3):", net.reach_consensus(votes))`}
              </pre>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: KNOWLEDGE QUIZ (18 QUESTIONS)                      */}
        {/* ========================================================= */}
        {activeTab === "quiz" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#18181b]">
                    Module 3 Knowledge Assessment: Distributed Systems & Consensus
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    18 comprehensive assessment questions testing theory, mathematics, quorums, protocols, and CAP/FLP trade-offs.
                  </p>
                </div>

                {quizSubmitted && (
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-stone-700">Final Score:</span>
                    <span className="text-sm font-mono font-black text-[#ea580c] px-3 py-1 bg-orange-50 rounded-xl border border-orange-200">
                      {calculateQuizScore()} / {QUIZ_QUESTIONS.length} (
                      {Math.round((calculateQuizScore() / QUIZ_QUESTIONS.length) * 100)}%)
                    </span>
                  </div>
                )}
              </div>

              {/* Questions List */}
              <div className="mt-6 space-y-6">
                {QUIZ_QUESTIONS.map((q, idx) => {
                  const selected = quizAnswers[q.id];
                  const isCorrect = selected === q.correct;

                  return (
                    <div
                      key={q.id}
                      className="p-4 sm:p-5 rounded-2xl border border-stone-200 bg-stone-50/50 space-y-3"
                    >
                      <div className="flex items-start gap-2.5">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-200 text-stone-800 text-xs font-bold font-mono">
                          {idx + 1}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-stone-900 leading-snug">
                          {q.q}
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 pl-8">
                        {q.options.map((opt, optIdx) => {
                          const isOptionSelected = selected === optIdx;
                          let btnStyle = "border-stone-200 bg-white text-stone-700 hover:border-orange-300";

                          if (quizSubmitted) {
                            if (optIdx === q.correct) {
                              btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-900 font-bold";
                            } else if (isOptionSelected) {
                              btnStyle = "border-rose-400 bg-rose-50 text-rose-900";
                            } else {
                              btnStyle = "border-stone-200 bg-white text-stone-400 opacity-60";
                            }
                          } else if (isOptionSelected) {
                            btnStyle = "border-[#f97316] bg-orange-50 text-[#ea580c] font-bold";
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectQuiz(q.id, optIdx)}
                              className={`p-2.5 rounded-xl border text-left text-xs transition cursor-pointer flex items-center justify-between ${btnStyle}`}
                            >
                              <span>{opt}</span>
                              {quizSubmitted && optIdx === q.correct && (
                                <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {quizSubmitted && (
                        <div className="pl-8 pt-2">
                          <p className="text-[11px] text-stone-600 bg-stone-100 p-2.5 rounded-lg border border-stone-200 leading-relaxed">
                            <strong className="text-stone-800">Explanation: </strong>
                            {q.expl}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Submit / Reset Actions */}
              <div className="mt-8 pt-4 border-t border-stone-200 flex items-center justify-between">
                <span className="text-xs text-stone-500">
                  Answered: {Object.keys(quizAnswers).length} / {QUIZ_QUESTIONS.length}
                </span>

                <div className="flex gap-3">
                  {quizSubmitted ? (
                    <button
                      onClick={() => {
                        setQuizSubmitted(false);
                        setQuizAnswers({});
                      }}
                      className="px-5 py-2.5 rounded-xl border border-stone-300 bg-white text-stone-800 text-xs font-bold hover:bg-stone-100 transition cursor-pointer"
                    >
                      Reset Quiz
                    </button>
                  ) : (
                    <button
                      onClick={() => setQuizSubmitted(true)}
                      disabled={Object.keys(quizAnswers).length < QUIZ_QUESTIONS.length}
                      className={`px-5 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                        Object.keys(quizAnswers).length < QUIZ_QUESTIONS.length
                          ? "bg-stone-300 text-stone-500 cursor-not-allowed"
                          : "bg-[#f97316] text-white hover:bg-[#ea580c] shadow-xs"
                      }`}
                    >
                      Submit Assessment
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 5: LEARNING TRACKER (29 REQUIREMENTS)                 */}
        {/* ========================================================= */}
        {activeTab === "checklist" && (
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="border-b border-stone-200 pb-4 mb-6">
                <h3 className="text-xl font-bold text-[#18181b]">
                  3.36 Module 3 Learning Tracker & Completion Checklist
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Track your mastery across all 29 foundational concepts before progressing to Module 4.
                </p>

                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs font-bold text-stone-700 mb-1">
                    <span>Progress: {completedChecklistCount} of {CHECKLIST_ITEMS.length} completed</span>
                    <span className="text-[#ea580c]">{checklistPercentage}%</span>
                  </div>
                  <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-orange-500 to-amber-500 h-full transition-all duration-500"
                      style={{ width: `${checklistPercentage}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Checklist Items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {CHECKLIST_ITEMS.map((item, idx) => {
                  const isChecked = Boolean(checklist[idx]);
                  return (
                    <button
                      key={idx}
                      onClick={() => toggleChecklistItem(idx)}
                      className={`p-3 rounded-xl border text-left text-xs transition cursor-pointer flex items-center gap-3 ${
                        isChecked
                          ? "bg-orange-50/70 border-orange-200 text-stone-900 font-medium"
                          : "bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100/70"
                      }`}
                    >
                      <div
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${
                          isChecked
                            ? "bg-[#f97316] border-[#f97316] text-white"
                            : "bg-white border-stone-300 text-transparent"
                        }`}
                      >
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className={isChecked ? "line-through text-stone-500" : ""}>{item}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Next Module Preview Card */}
            <div className="rounded-3xl border border-stone-200 bg-gradient-to-br from-stone-900 via-stone-950 to-orange-950 p-6 sm:p-8 text-white shadow-xs">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400 block mb-1">
                Up Next in Track
              </span>
              <h3 className="text-xl font-bold tracking-tight">
                Module 4 — Bitcoin Architecture, Transactions and the UTXO Model
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-stone-300 leading-relaxed max-w-3xl">
                Explore Bitcoin's internal peer-to-peer architecture, transaction serialization, UTXO state graphs, Script execution engine, Mempool policies, coinbase outputs, and dynamic difficulty adjustment algorithms.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <button
                  onClick={() => navigate("/learning/blockchain/bitcoin-utxo")}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#f97316] text-white text-xs font-bold hover:bg-[#ea580c] transition cursor-pointer"
                >
                  <span>Preview Module 4</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
