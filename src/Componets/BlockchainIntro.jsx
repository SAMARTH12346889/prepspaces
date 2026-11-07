import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Blocks,
  Link as LinkIcon,
  Cpu,
  Layers,
  Shield,
  Key,
  Database,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Terminal,
  FileCode,
  BookOpen,
  Sparkles,
  ExternalLink,
  Lock,
  Unlock,
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
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";

// Real-time pure SHA-256 implementation for the browser simulator
async function sha256Browser(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export default function BlockchainIntro() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  // Navigation tab state: 'theory' | 'interactive-lab' | 'python-code' | 'quiz' | 'checklist'
  const [activeTab, setActiveTab] = useState("theory");
  const [copiedCode, setCopiedCode] = useState(false);

  // ---------------------------------------------------------------------------
  // INTERACTIVE SIMULATOR 1: SHA-256 AVALANCHE EFFECT PLAYGROUND
  // ---------------------------------------------------------------------------
  const [hashInput, setHashInput] = useState("Hello Blockchain");
  const [calculatedHash, setCalculatedHash] = useState(
    "2c8928c2c9d1a87e35ab0c6b1a37c02c6114ecb3c2bb54443fb7d9d06bcf48d4"
  );

  useEffect(() => {
    let isMounted = true;
    sha256Browser(hashInput).then((h) => {
      if (isMounted) setCalculatedHash(h);
    });
    return () => {
      isMounted = false;
    };
  }, [hashInput]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE SIMULATOR 2: LIVE BLOCKCHAIN TAMPER DETECTOR
  // ---------------------------------------------------------------------------
  const initialChain = [
    {
      index: 0,
      timestamp: "1731000000",
      data: "Genesis Block: Network Initialized",
      previousHash: "0000000000000000000000000000000000000000000000000000000000000000",
      hash: "00000a1b2c3d4e5f6789abcdef0123456789abcdef0123456789abcdef012345",
    },
    {
      index: 1,
      timestamp: "1731000120",
      data: "Alice pays Bob 500 Coins",
      amount: 500,
      previousHash: "00000a1b2c3d4e5f6789abcdef0123456789abcdef0123456789abcdef012345",
      hash: "11111b2c3d4e5f6789abcdef0123456789abcdef0123456789abcdef01234567",
    },
    {
      index: 2,
      timestamp: "1731000240",
      data: "Bob pays Charlie 200 Coins",
      amount: 200,
      previousHash: "11111b2c3d4e5f6789abcdef0123456789abcdef0123456789abcdef01234567",
      hash: "22222c3d4e5f6789abcdef0123456789abcdef0123456789abcdef0123456789",
    },
    {
      index: 3,
      timestamp: "1731000360",
      data: "Charlie pays David 100 Coins",
      amount: 100,
      previousHash: "22222c3d4e5f6789abcdef0123456789abcdef0123456789abcdef0123456789",
      hash: "33333d4e5f6789abcdef0123456789abcdef0123456789abcdef0123456789ab",
    },
  ];

  const [simulatedChain, setSimulatedChain] = useState(initialChain);
  const [tamperedBlockIndex, setTamperedBlockIndex] = useState(null);

  const handleTamperBlock1 = (newAmount) => {
    const amt = parseFloat(newAmount) || 0;
    setSimulatedChain((prev) => {
      const copy = JSON.parse(JSON.stringify(prev));
      copy[1].amount = amt;
      copy[1].data = `Alice pays Bob ${amt} Coins (MODIFIED)`;
      // Modifying Block 1 alters its recalculated hash
      copy[1].hash = "e9999_TAMPERED_HASH_CHANGED_789abcdef0123456789abcdef0123456789";
      return copy;
    });
    setTamperedBlockIndex(1);
  };

  const resetSimulator = () => {
    setSimulatedChain(initialChain);
    setTamperedBlockIndex(null);
  };

  // Check validation status
  const chainValidation = useMemo(() => {
    for (let i = 1; i < simulatedChain.length; i++) {
      if (simulatedChain[i].previousHash !== simulatedChain[i - 1].hash) {
        return {
          isValid: false,
          brokenAt: i,
          reason: `Block ${i}'s previousHash does NOT match Block ${i - 1}'s current hash!`,
        };
      }
    }
    return { isValid: true, brokenAt: null, reason: "All cryptographic references match. Ledger is valid." };
  }, [simulatedChain]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE 10-QUESTION QUIZ
  // ---------------------------------------------------------------------------
  const quizQuestions = [
    {
      id: 1,
      question: "What is the primary purpose of a blockchain?",
      options: [
        "Store data on one central server",
        "Maintain a shared, cryptographically linked ledger",
        "Replace every traditional database",
        "Encrypt all internet traffic",
      ],
      correctIndex: 1,
      explanation:
        "A blockchain is designed to maintain a shared, cryptographically linked, and synchronized ledger across a distributed network of participants according to agreed validation rules.",
    },
    {
      id: 2,
      question: "What is DLT?",
      options: [
        "A type of programming language",
        "A cryptocurrency",
        "A broad category of distributed ledger systems",
        "A mining algorithm",
      ],
      correctIndex: 2,
      explanation:
        "Distributed Ledger Technology (DLT) is an umbrella category for systems maintaining synchronized records across multiple nodes; blockchain is one specific architecture within DLT.",
    },
    {
      id: 3,
      question: "Which block contains the first record in a blockchain?",
      options: [
        "Genesis block",
        "Validation block",
        "Mining block",
        "Final block",
      ],
      correctIndex: 0,
      explanation:
        "The first block in any blockchain sequence is universally known as the Genesis Block (Block 0), having an initial state and no predecessor hash.",
    },
    {
      id: 4,
      question: "What does SHA-256 produce?",
      options: [
        "A private key",
        "A 256-bit hash digest",
        "A blockchain network",
        "An encrypted transaction",
      ],
      correctIndex: 1,
      explanation:
        "SHA-256 (Secure Hash Algorithm 256-bit) deterministically converts input data of arbitrary size into a fixed 256-bit (32-byte / 64 hexadecimal character) hash digest.",
    },
    {
      id: 5,
      question: "What does a previous block hash do?",
      options: [
        "Stores a user's password",
        "Connects a block to its predecessor",
        "Creates a cryptocurrency",
        "Encrypts the transaction body",
      ],
      correctIndex: 1,
      explanation:
        "The previous block hash cryptographically binds the current block header to the parent block, creating an unbroken chain where altering any past record breaks all downstream hashes.",
    },
    {
      id: 6,
      question: "Which of the following is a permissioned blockchain framework?",
      options: [
        "Bitcoin",
        "Ethereum Mainnet",
        "Hyperledger Fabric",
        "A public Bitcoin wallet",
      ],
      correctIndex: 2,
      explanation:
        "Hyperledger Fabric is an open-source enterprise permissioned blockchain framework where participants possess authorized identities, channels, and role-based policies.",
    },
    {
      id: 7,
      question: "What is a node?",
      options: [
        "A transaction fee",
        "A computer participating in a blockchain network",
        "A block's transaction list",
        "A cryptographic algorithm",
      ],
      correctIndex: 1,
      explanation:
        "A node is any computing device running protocol-compliant blockchain client software that receives, validates, transmits, or produces blocks on the peer-to-peer network.",
    },
    {
      id: 8,
      question: "What happens when historical block data is modified?",
      options: [
        "Its calculated hash changes",
        "The previous data is automatically restored",
        "All other nodes shut down",
        "The transaction becomes encrypted",
      ],
      correctIndex: 0,
      explanation:
        "Due to the deterministic and avalanche properties of cryptographic hashing, modifying even a single byte within a historical block causes its recalculated hash to change completely, mismatching the subsequent block's previous_hash.",
    },
    {
      id: 9,
      question: "What solves the agreement problem across blockchain participants?",
      options: [
        "HTML",
        "CSS",
        "Consensus mechanisms",
        "A user interface",
      ],
      correctIndex: 2,
      explanation:
        "Consensus mechanisms (such as Proof of Work, Proof of Stake, or Byzantine Fault Tolerance algorithms) allow distributed, mutually untrusting nodes to achieve deterministic agreement on transaction ordering and ledger state.",
    },
    {
      id: 10,
      question: "When is a traditional database usually preferable?",
      options: [
        "When one trusted organization controls the records and needs frequent updates",
        "Whenever data must be public",
        "Whenever a cryptocurrency is involved",
        "When every participant must validate every record",
      ],
      correctIndex: 0,
      explanation:
        "A traditional centralized or distributed relational/NoSQL database provides vastly superior latency, throughput, and operational simplicity when a single trusted organization maintains authoritative ownership of data.",
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const handleSelectOption = (qId, optionIdx) => {
    if (quizSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const score = useMemo(() => {
    return quizQuestions.reduce((acc, q) => {
      return acc + (selectedAnswers[q.id] === q.correctIndex ? 1 : 0);
    }, 0);
  }, [selectedAnswers]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE 15-ITEM COMPLETION CHECKLIST
  // ---------------------------------------------------------------------------
  const completionItems = [
    "Understand blockchain history and its original motivation",
    "Explain centralized versus decentralized systems",
    "Understand distributed ledger technology",
    "Identify blocks, transactions, nodes and ledgers",
    "Explain generic block header and body structures",
    "Implement SHA-256 hashing in Python",
    "Understand previous-block hash linking",
    "Explain tamper resistance and immutability limitations",
    "Differentiate public, private, consortium and hybrid blockchains",
    "Understand permissioned and permissionless participation",
    "Explain the generic transaction lifecycle",
    "Compare blockchain with conventional databases",
    "Identify suitable industry applications",
    "Complete the Python blockchain practical",
    "Complete the module assessment",
  ];

  const [checkedItems, setCheckedItems] = useState(() => {
    const initial = {};
    completionItems.forEach((_, i) => {
      initial[i] = i < 3; // First 3 checked by default for immediate engagement
    });
    return initial;
  });

  const toggleCheck = (idx) => {
    setCheckedItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((checkedCount / completionItems.length) * 100);

  const pythonLabCode = `import hashlib
import json
import time
from dataclasses import dataclass, field
from typing import Any

def calculate_sha256(data: str) -> str:
    """Return the SHA-256 hash of a string."""
    return hashlib.sha256(data.encode("utf-8")).hexdigest()

@dataclass
class Block:
    index: int
    timestamp: float
    transactions: list[dict[str, Any]]
    previous_hash: str
    nonce: int = 0
    block_hash: str = field(init=False)

    def __post_init__(self) -> None:
        # Save the hash calculated when the block is created
        self.block_hash = self.calculate_hash()

    def calculate_hash(self) -> str:
        """Calculate a deterministic hash of block contents."""
        block_data = {
            "index": self.index,
            "timestamp": self.timestamp,
            "transactions": self.transactions,
            "previous_hash": self.previous_hash,
            "nonce": self.nonce
        }
        # Canonical JSON serialization ensures deterministic hashing across architectures
        serialized_data = json.dumps(block_data, sort_keys=True, separators=(",", ":"))
        return calculate_sha256(serialized_data)

class Blockchain:
    def __init__(self) -> None:
        self.chain: list[Block] = []
        # The first block is called the Genesis Block
        genesis_block = Block(
            index=0,
            timestamp=time.time(),
            transactions=[{"message": "Genesis Block"}],
            previous_hash="0" * 64
        )
        self.chain.append(genesis_block)

    def get_latest_block(self) -> Block:
        return self.chain[-1]

    def add_block(self, transactions: list[dict[str, Any]]) -> None:
        """Create and append a block to the chain."""
        previous_block = self.get_latest_block()
        new_block = Block(
            index=len(self.chain),
            timestamp=time.time(),
            transactions=transactions,
            previous_hash=previous_block.block_hash
        )
        self.chain.append(new_block)

    def is_chain_valid(self) -> bool:
        """Verify block hashes and previous-hash references."""
        if not self.chain:
            return False

        # 1. Check the Genesis Block
        genesis = self.chain[0]
        if genesis.previous_hash != "0" * 64:
            return False
        if genesis.block_hash != genesis.calculate_hash():
            return False

        # 2. Verify all subsequent blocks in sequence
        for index in range(1, len(self.chain)):
            current_block = self.chain[index]
            previous_block = self.chain[index - 1]

            # Check whether current block data was modified
            if current_block.block_hash != current_block.calculate_hash():
                return False

            # Check the cryptographic link to the parent block
            if current_block.previous_hash != previous_block.block_hash:
                return False

            # Check strictly sequential block height
            if current_block.index != previous_block.index + 1:
                return False

        return True

    def display_chain(self) -> None:
        """Display all blocks in the blockchain."""
        for block in self.chain:
            print("\\n" + "=" * 55)
            print(f"Block Number : {block.index}")
            print(f"Timestamp    : {block.timestamp}")
            print(f"Transactions : {block.transactions}")
            print(f"Previous Hash: {block.previous_hash}")
            print(f"Current Hash : {block.block_hash}")
            print("=" * 55)

if __name__ == "__main__":
    blockchain = Blockchain()

    # Add transaction blocks
    blockchain.add_block([
        {"sender": "Alice", "receiver": "Bob", "amount": 500},
        {"sender": "Bob", "receiver": "Charlie", "amount": 200}
    ])
    blockchain.add_block([
        {"sender": "Charlie", "receiver": "David", "amount": 100}
    ])
    blockchain.add_block([
        {"sender": "David", "receiver": "Alice", "amount": 50}
    ])

    print("\\n--- ORIGINAL BLOCKCHAIN ---")
    blockchain.display_chain()
    print("\\nOriginal chain valid:", blockchain.is_chain_valid())

    # Simulate an unauthorized data tampering attack
    print("\\n--- SIMULATING TAMPERING ON BLOCK 1 ---")
    blockchain.chain[1].transactions[0]["amount"] = 9999
    print("Chain valid after tampering:", blockchain.is_chain_valid())
`;

  const copyCode = () => {
    navigator.clipboard.writeText(pythonLabCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] px-4 py-6 sm:px-8 sm:py-10 md:px-12 antialiased selection:bg-[#f97316] selection:text-white">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-amber-500/[0.04] rounded-full blur-[130px]" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-orange-500/[0.04] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl w-full">
        {/* Module Navigation Header */}
        <ModuleNav track="blockchain" currentModuleId="intro" />

        {/* Hero Header */}
        <header className="mb-8 rounded-3xl border border-[#e7e3da] bg-white/85 p-6 sm:p-8 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-amber-800">
              <Blocks size={13} className="text-amber-600" />
              Blockchain Technology & Decentralized Systems · Module 01
            </span>
            <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-[11px] font-mono text-stone-600">
              Stanford CS251 & MIT Pedagogical Standard
            </span>
            <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-[11px] font-mono text-stone-600">
              Theory + Practical (Python) · 6–8 Hours
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#18181b] tracking-tight">
            Introduction to Blockchain Technology & Decentralized Systems
          </h1>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600 max-w-4xl">
            Master the foundational principles of distributed ledger technology, cryptographic hash functions (SHA-256),
            block linking, tamper-evident ledger architecture, consensus models, and build a fully verified Python blockchain from scratch.
          </p>

          {/* Mode Switcher Tabs */}
          <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-[#e7e3da] pt-4">
            <button
              onClick={() => setActiveTab("theory")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "theory"
                  ? "bg-[#f97316] text-white shadow-xs"
                  : "bg-stone-100 text-stone-700 hover:bg-stone-200"
              }`}
            >
              <BookOpen size={14} />
              <span>1. Theory & Curriculum (21 Parts)</span>
            </button>

            <button
              onClick={() => setActiveTab("interactive-lab")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "interactive-lab"
                  ? "bg-[#f97316] text-white shadow-xs"
                  : "bg-stone-100 text-stone-700 hover:bg-stone-200"
              }`}
            >
              <Activity size={14} />
              <span>2. Interactive Blockchain & Tamper Lab</span>
            </button>

            <button
              onClick={() => setActiveTab("python-code")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "python-code"
                  ? "bg-[#f97316] text-white shadow-xs"
                  : "bg-stone-100 text-stone-700 hover:bg-stone-200"
              }`}
            >
              <Terminal size={14} />
              <span>3. Python Implementation (From Scratch)</span>
            </button>

            <button
              onClick={() => setActiveTab("quiz")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "quiz"
                  ? "bg-[#f97316] text-white shadow-xs"
                  : "bg-stone-100 text-stone-700 hover:bg-stone-200"
              }`}
            >
              <HelpCircle size={14} />
              <span>4. Assessment (10 Questions)</span>
            </button>

            <button
              onClick={() => setActiveTab("checklist")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "checklist"
                  ? "bg-[#f97316] text-white shadow-xs"
                  : "bg-stone-100 text-stone-700 hover:bg-stone-200"
              }`}
            >
              <CheckSquare size={14} />
              <span>5. Requirements Checklist ({progressPercent}%)</span>
            </button>
          </div>
        </header>

        {/* TAB 1: THEORY & ACADEMIC CURRICULUM */}
        {activeTab === "theory" && (
          <div className="space-y-8">
            {/* Section 1: University Foundation */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-700 mb-2">
                <Award size={15} />
                <span>1. University Curriculum Foundation</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mb-4">
                Academic Standard & Pedagogical Framework
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed mb-6">
                This curriculum follows the technical and educational direction of leading university blockchain programmes, supplemented by official technical documentation from NIST and core protocols.
              </p>

              <div className="overflow-x-auto rounded-2xl border border-[#e7e3da]">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-stone-50 border-b border-[#e7e3da] text-stone-700 font-bold">
                    <tr>
                      <th className="p-3 sm:p-4">Institution</th>
                      <th className="p-3 sm:p-4">Curriculum Concepts Incorporated</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e7e3da] text-stone-600">
                    <tr className="hover:bg-stone-50/50">
                      <td className="p-3 sm:p-4 font-bold text-stone-900">Stanford University (CS251)</td>
                      <td className="p-3 sm:p-4">Cryptography, Bitcoin mechanics, blockchain architecture, and Python-based systems engineering projects.</td>
                    </tr>
                    <tr className="hover:bg-stone-50/50">
                      <td className="p-3 sm:p-4 font-bold text-stone-900">MIT</td>
                      <td className="p-3 sm:p-4">Distributed ledgers, cryptographic hashing, public-key infrastructure (PKI), consensus mechanisms, and Ethereum.</td>
                    </tr>
                    <tr className="hover:bg-stone-50/50">
                      <td className="p-3 sm:p-4 font-bold text-stone-900">UC Berkeley</td>
                      <td className="p-3 sm:p-4">Blockchain fundamentals, distributed systems history, cryptography, incentive economics, and enterprise applications.</td>
                    </tr>
                    <tr className="hover:bg-stone-50/50">
                      <td className="p-3 sm:p-4 font-bold text-stone-900">Cornell University</td>
                      <td className="p-3 sm:p-4">Ledger security invariants, transaction verification, Nakamoto consensus, and state machine replication.</td>
                    </tr>
                    <tr className="hover:bg-stone-50/50">
                      <td className="p-3 sm:p-4 font-bold text-stone-900">NIST (NIST IR 8202)</td>
                      <td className="p-3 sm:p-4">Technical foundations, tamper resistance, blockchain architecture taxonomy, and security boundaries.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Part 1: Blockchain Fundamentals */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Blocks size={15} />
                <span>Part 1 — Blockchain Fundamentals</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mb-4">
                1.1 What Is Blockchain Technology?
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                Blockchain is a method of storing and maintaining digital information across a network of computers using cryptographic techniques and agreed-upon validation rules. Rather than depending entirely on one central authority to maintain a database, participating computers maintain synchronized copies of a shared ledger.
              </p>

              <div className="rounded-2xl bg-orange-50/60 border border-orange-200/80 p-4 sm:p-5 mb-6">
                <span className="block font-mono text-xs font-bold uppercase tracking-wider text-orange-800 mb-1">
                  Formal Definition (NIST IR 8202 Standard):
                </span>
                <p className="text-xs sm:text-sm text-stone-800 font-medium leading-relaxed">
                  "A blockchain is a distributed, cryptographically linked ledger in which records are organized into sequential blocks and maintained according to a network's validation and consensus rules. It provides a shared, tamper-evident and tamper-resistant digital ledger."
                </p>
              </div>

              {/* Concrete Example Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="rounded-2xl border border-stone-200 bg-stone-50/60 p-5">
                  <h3 className="font-bold text-stone-900 text-sm mb-2 flex items-center gap-1.5">
                    <Server size={15} className="text-stone-500" />
                    <span>Conventional Banking (Alice &rarr; Bob ₹5,000)</span>
                  </h3>
                  <ul className="text-xs text-stone-600 space-y-1.5 list-disc pl-4">
                    <li>Alice requests a transfer through a central banking portal.</li>
                    <li>The central bank verifies her account and balance in its private database.</li>
                    <li>The bank writes an internal SQL update to adjust account balances.</li>
                    <li>The bank unilaterally controls the authoritative transaction record.</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-orange-200 bg-orange-50/30 p-5">
                  <h3 className="font-bold text-orange-950 text-sm mb-2 flex items-center gap-1.5">
                    <Blocks size={15} className="text-[#f97316]" />
                    <span>Blockchain System (Alice &rarr; Bob 5,000 Units)</span>
                  </h3>
                  <ul className="text-xs text-stone-700 space-y-1.5 list-disc pl-4">
                    <li>Alice creates and digitally signs a transaction with her private key.</li>
                    <li>The signed transaction is broadcast to peer-to-peer network nodes.</li>
                    <li>Participating nodes independently verify digital signatures and UTXO/balance rules.</li>
                    <li>A validator includes it into a block, consensus is reached, and all nodes update their ledgers.</li>
                  </ul>
                </div>
              </div>

              {/* Double Spending Problem */}
              <div className="rounded-2xl border border-stone-200 bg-white p-5 mb-6">
                <h3 className="font-bold text-stone-900 text-sm mb-2">The Double-Spending Problem & Satoshi's Innovation</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-3">
                  In pure digital files, data can be copied infinitely at zero marginal cost. If a digital file represents money, what stops Alice from copying the file and spending the exact same value twice?
                </p>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Before 2008, solving double-spending required a centralized trusted clearinghouse (like Visa or a central bank). Satoshi Nakamoto's breakthrough in the 2008 Bitcoin Whitepaper was combining <strong>cryptographic proof, timestamp servers, peer-to-peer networks, and Proof-of-Work consensus</strong> to solve double-spending without trusting any central intermediary.
                </p>
              </div>

              {/* Evolution Table */}
              <h3 className="font-bold text-stone-900 text-sm mb-3">Evolution of Blockchain Technology</h3>
              <div className="overflow-x-auto rounded-2xl border border-[#e7e3da] mb-6">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-stone-50 border-b border-[#e7e3da] font-bold text-stone-700">
                    <tr>
                      <th className="p-3">Stage</th>
                      <th className="p-3">Milestone Development</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e7e3da] text-stone-600">
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">Cryptographic Foundations</td>
                      <td className="p-3">One-way hash functions (Merkle 1979), digital signatures (RSA 1977), and cryptographic timestamping (Haber & Stornetta 1991).</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">Bitcoin (2008–2009)</td>
                      <td className="p-3">Peer-to-peer electronic cash, UTXO model, Proof-of-Work mining, and decentralized blockchain ledger.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">Ethereum (2015)</td>
                      <td className="p-3">Turing-complete programmable blockchain, Ethereum Virtual Machine (EVM), gas mechanics, and Smart Contracts.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">Enterprise Blockchain</td>
                      <td className="p-3">Permissioned consortium frameworks (Hyperledger Fabric, R3 Corda) with role-based channels and privacy.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-stone-900">Modern Scaling & Rollups</td>
                      <td className="p-3">Layer-2 Zero-Knowledge (ZK) and Optimistic rollups, parallel execution (Solana, Monad), and cross-chain interoperability.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 1.2 Centralized vs Decentralized */}
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-8 mb-4">
                1.2 Traditional Centralized Systems vs Decentralized Systems
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-[#e7e3da] mb-6">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-stone-50 border-b border-[#e7e3da] font-bold text-stone-700">
                    <tr>
                      <th className="p-3">Parameter</th>
                      <th className="p-3">Centralized Architecture</th>
                      <th className="p-3">Decentralized Architecture</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e7e3da] text-stone-600">
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Control & Authority</td>
                      <td className="p-3">Single central organization / database administrator</td>
                      <td className="p-3">Distributed protocol participants & independent validators</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Database Storage</td>
                      <td className="p-3">Central authoritative database cluster</td>
                      <td className="p-3">Replicated, synchronized shared ledger across all full nodes</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Verification Model</td>
                      <td className="p-3">Implicit trust in central administrator</td>
                      <td className="p-3">Cryptographic verification by protocol rules ("Don't trust, verify")</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Single Point of Failure</td>
                      <td className="p-3">Yes; central database or credentials can be compromised</td>
                      <td className="p-3">No single point; network survives failure of individual nodes</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Execution Speed</td>
                      <td className="p-3">High throughput (10,000+ QPS easily in PostgreSQL/Redis)</td>
                      <td className="p-3">Constrained by network broadcast latency and consensus rounds</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Auditability & History</td>
                      <td className="p-3">Mutable; admin can overwrite, update, or drop records</td>
                      <td className="p-3">Append-only, tamper-evident cryptographic history</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 1.3 DLT vs Blockchain */}
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-8 mb-4">
                1.3 Distributed Ledger Technology (DLT) vs Blockchain
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="rounded-2xl border border-stone-200 bg-stone-50/60 p-5">
                  <h3 className="font-bold text-stone-900 text-sm mb-2">Distributed Ledger Technology (DLT)</h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-2">
                    A broad category of decentralized databases synchronized across multiple nodes or organizations.
                  </p>
                  <ul className="text-xs text-stone-600 space-y-1 list-disc pl-4">
                    <li>May use various data structures (DAGs, directed graphs, hash graphs).</li>
                    <li>Does not necessarily group records into linear sequential blocks.</li>
                    <li>Examples: Hedera Hashgraph, IOTA Tangle, R3 Corda.</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-amber-200 bg-amber-50/30 p-5">
                  <h3 className="font-bold text-amber-950 text-sm mb-2">Blockchain Architecture</h3>
                  <p className="text-xs text-stone-700 leading-relaxed mb-2">
                    A specialized subclass of DLT that specifically organizes data into cryptographically linked blocks.
                  </p>
                  <ul className="text-xs text-stone-700 space-y-1 list-disc pl-4">
                    <li>Strict linear sequence of blocks linked by parent hash pointers.</li>
                    <li>Uses Merkle trees to summarize transaction batches in headers.</li>
                    <li>Rule of thumb: <em>Every blockchain is a DLT, but not every DLT is a blockchain.</em></li>
                  </ul>
                </div>
              </div>

              {/* 1.4 Architecture and Its Components */}
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-8 mb-4">
                1.4 Blockchain Architecture and Its Components
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-6">
                <div className="p-4 rounded-2xl border border-stone-200 bg-white shadow-2xs">
                  <div className="font-bold text-stone-900 text-xs mb-1 flex items-center gap-1.5 text-amber-700">
                    <Blocks size={14} />
                    <span>1. Blocks</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Data batches storing validated transactions, timestamps, previous block hash, and Merkle tree roots.
                  </p>
                </div>
                <div className="p-4 rounded-2xl border border-stone-200 bg-white shadow-2xs">
                  <div className="font-bold text-stone-900 text-xs mb-1 flex items-center gap-1.5 text-amber-700">
                    <Activity size={14} />
                    <span>2. Transactions</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Atomic state transition requests (asset transfers, smart contract calls, identity registrations) digitally signed by senders.
                  </p>
                </div>
                <div className="p-4 rounded-2xl border border-stone-200 bg-white shadow-2xs">
                  <div className="font-bold text-stone-900 text-xs mb-1 flex items-center gap-1.5 text-amber-700">
                    <Server size={14} />
                    <span>3. Participating Nodes</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Computers executing client software: Full nodes (verify all), Validators (propose/attest), Light clients (SPV proofs).
                  </p>
                </div>
                <div className="p-4 rounded-2xl border border-stone-200 bg-white shadow-2xs">
                  <div className="font-bold text-stone-900 text-xs mb-1 flex items-center gap-1.5 text-amber-700">
                    <Database size={14} />
                    <span>4. Distributed Ledger</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    The authoritative transaction journal and world state database updated synchronously across all peers.
                  </p>
                </div>
                <div className="p-4 rounded-2xl border border-stone-200 bg-white shadow-2xs">
                  <div className="font-bold text-stone-900 text-xs mb-1 flex items-center gap-1.5 text-amber-700">
                    <Lock size={14} />
                    <span>5. Cryptographic Hashing</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Deterministic one-way digests (SHA-256 / Keccak-256) creating permanent, tamper-evident block and transaction IDs.
                  </p>
                </div>
                <div className="p-4 rounded-2xl border border-stone-200 bg-white shadow-2xs">
                  <div className="font-bold text-stone-900 text-xs mb-1 flex items-center gap-1.5 text-amber-700">
                    <CheckCircle2 size={14} />
                    <span>6. Consensus Protocol</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Mathematical agreement engine (PoW, PoS, PBFT, Raft) coordinating transaction ordering without central coordinators.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 1.5: Understanding Blocks, Transactions, Nodes and Ledgers */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Blocks size={15} />
                <span>Core Conceptual Distinctions</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mb-4">
                1.5 Understanding Blocks, Transactions, Nodes and Ledgers
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                These four fundamental concepts constitute the pedagogical bedrock of blockchain systems engineering. Understanding the precise relationship between them prevents common architectural confusion:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/60">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-amber-800 mb-2">
                    Blocks: The "Pages in a Distributed Ledger Book"
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    Think of a block as a single page in a shared accounting book. A block groups a discrete batch of validated transactions together with the cryptographic hash of the previous page.
                  </p>
                  <div className="bg-stone-900 text-stone-200 p-3 rounded-xl font-mono text-[11px]">
                    <div className="text-amber-400 font-bold mb-1">SAMPLE BLOCK 1:</div>
                    <div>TX 1: Alice -&gt; Bob ₹500</div>
                    <div>TX 2: Bob -&gt; Charlie ₹200</div>
                    <div>TX 3: Charlie -&gt; David ₹100</div>
                    <div className="text-stone-400 mt-1">PrevHash: 000000... | CurrHash: 92f7de...</div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/60">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-amber-800 mb-2">
                    Transactions, Nodes & Ledgers: The Core Distinctions
                  </h4>
                  <ul className="text-xs text-stone-600 space-y-2 leading-relaxed">
                    <li><strong className="text-stone-900">Transaction:</strong> An individual atomic state transition (sender, receiver, value, digital signature) requested by a user.</li>
                    <li><strong className="text-stone-900">Block:</strong> A sealed container bundling multiple verified transactions together with consensus metadata.</li>
                    <li><strong className="text-stone-900">Node:</strong> A physical or virtual computer executing protocol software, verifying blocks, and keeping peers in sync.</li>
                    <li><strong className="text-stone-900">Ledger:</strong> The complete historical journal and current global state database maintained synchronously across nodes.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Part 2: How Blockchain Data is Organized */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Layers size={15} />
                <span>Part 2 — How Blockchain Data Is Organized</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mb-4">
                1.6 Understanding Block Structure: Header and Body
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                Every block is formally partitioned into a lightweight <strong>Block Header</strong> (metadata & commitments) and a heavyweight <strong>Block Body</strong> (the raw transaction list).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="rounded-2xl border border-stone-200 bg-stone-50/50 p-4">
                  <h3 className="font-bold text-stone-900 text-xs uppercase tracking-wider mb-2">Block Header Components</h3>
                  <ul className="text-xs text-stone-600 space-y-1.5">
                    <li><strong className="text-stone-900">Block Height/Index:</strong> Sequential sequence integer (0 for Genesis).</li>
                    <li><strong className="text-stone-900">Timestamp:</strong> Unix epoch seconds when the block was assembled.</li>
                    <li><strong className="text-stone-900">Previous Block Hash:</strong> 256-bit hash pointer to Block \(N-1\).</li>
                    <li><strong className="text-stone-900">Merkle Root:</strong> Root hash summarizing all transactions via binary hashing.</li>
                    <li><strong className="text-stone-900">Nonce:</strong> Arbitrary counter adjusted by miners in Proof-of-Work.</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-stone-50/50 p-4">
                  <h3 className="font-bold text-stone-900 text-xs uppercase tracking-wider mb-2">Block Body Contents</h3>
                  <div className="bg-stone-900 text-stone-200 p-3 rounded-xl font-mono text-[11px] leading-relaxed">
                    <pre>{`{
  "transactions": [
    {"from": "Alice", "to": "Bob", "amount": 500},
    {"from": "Bob", "to": "Charlie", "amount": 200},
    {"from": "Charlie", "to": "David", "amount": 100}
  ]
}`}</pre>
                  </div>
                </div>
              </div>

              {/* 1.7 Cryptographic Hash Functions */}
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-8 mb-4">
                1.7 Cryptographic Hash Functions & 5 Essential Properties
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/50">
                  <h4 className="font-bold text-xs text-stone-900 mb-1">1. Deterministic</h4>
                  <p className="text-[11px] text-stone-600">The exact same input string always produces the identical hash value on any computer.</p>
                </div>
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/50">
                  <h4 className="font-bold text-xs text-stone-900 mb-1">2. Fixed-Length Output</h4>
                  <p className="text-[11px] text-stone-600">Whether hashing 1 character or 10 Gigabytes, SHA-256 always outputs exactly 256 bits (64 hex characters).</p>
                </div>
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/50">
                  <h4 className="font-bold text-xs text-stone-900 mb-1">3. Avalanche Effect</h4>
                  <p className="text-[11px] text-stone-600">Flipping a single bit in the input causes an unpredictable cascade modifying &gt;50% of output bits.</p>
                </div>
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/50">
                  <h4 className="font-bold text-xs text-stone-900 mb-1">4. Preimage Resistance</h4>
                  <p className="text-[11px] text-stone-600">Computationally infeasible to reverse engineer input \(x\) given hash \(H(x)\) (strictly one-way).</p>
                </div>
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/50">
                  <h4 className="font-bold text-xs text-stone-900 mb-1">5. Collision Resistance</h4>
                  <p className="text-[11px] text-stone-600">Computationally infeasible to discover two distinct inputs \(x_1 \neq x_2\) such that \(H(x_1) = H(x_2)\).</p>
                </div>
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/50">
                  <h4 className="font-bold text-xs text-stone-900 mb-1">Hashing vs Encryption</h4>
                  <p className="text-[11px] text-stone-600">Hashing is one-way integrity verification; encryption is reversible two-way confidentiality using keys.</p>
                </div>
              </div>

              {/* 1.8 Mathematical Formulation */}
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-8 mb-4">
                1.8 Mathematical Formulation of Cryptographic Block Linking
              </h2>
              <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-5 mb-6">
                <span className="block font-mono text-xs font-bold text-amber-900 mb-2">Block Hash Formulation:</span>
                <div className="font-mono text-sm sm:text-base font-bold text-stone-900 mb-3 bg-white p-3 rounded-xl border border-amber-200/80 inline-block">
                  {"H_i = SHA256( Data_i || H_{i-1} || Nonce_i )"}
                </div>
                <p className="text-xs text-stone-700 leading-relaxed">
                  Where \(H_i\) is the current block hash, \(Data_i\) is the block's serialized transaction body, \(H_{'{i-1}'}\) is the parent block hash, and \(||\) represents canonical byte concatenation. If an attacker modifies any historical transaction in block \(k\), its hash \(H_k\) changes, which directly breaks the input for block \(k+1\), causing a cryptographic invalidation across all subsequent blocks \(k+1, \dots, N\).
                </p>
              </div>

              {/* 1.9 Immutable Records & Tamper Resistance */}
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-8 mb-4">
                1.9 Immutable Records and Tamper Resistance
              </h2>
              <div className="space-y-4 mb-6">
                <p className="text-sm text-stone-600 leading-relaxed">
                  Immutability refers to the profound technical difficulty and computational cost of modifying previously accepted blockchain records. Once a transaction is validated and confirmed under consensus rules, retroactively modifying its historical data is designed to be mathematically detectable and economically infeasible. However, in rigorous computer science, blockchain immutability is <strong>tamper-evidence</strong> rather than magical mathematical impossibility.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                  <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/60">
                    <span className="font-mono text-[10px] font-bold uppercase text-amber-700">Property 1</span>
                    <h4 className="font-bold text-xs text-stone-900 mt-1 mb-1.5">Cryptographic Linking</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Every block embeds the cryptographic hash of its predecessor. Altering one byte in block \(k\) cascades forward, invalidating all subsequent block hash commitments across the chain.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/60">
                    <span className="font-mono text-[10px] font-bold uppercase text-amber-700">Property 2</span>
                    <h4 className="font-bold text-xs text-stone-900 mt-1 mb-1.5">Distributed Replication</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Thousands of independent full nodes store exact copies of the ledger. An attacker modifying a local copy cannot force other honest peers to accept the altered history.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/60">
                    <span className="font-mono text-[10px] font-bold uppercase text-amber-700">Property 3</span>
                    <h4 className="font-bold text-xs text-stone-900 mt-1 mb-1.5">Consensus Invariants</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      To rewrite historical blocks, an attacker must overcome the network's consensus threshold (e.g. 51% proof-of-work hashrate or 67% proof-of-stake economic stake).
                    </p>
                  </div>
                </div>

                {/* Supply Chain Example & Integrity vs Truthfulness */}
                <div className="rounded-2xl border border-stone-200 bg-stone-50/50 p-5">
                  <h4 className="font-bold text-xs text-stone-900 uppercase tracking-wider mb-2">
                    Supply-Chain Sequence & Crucial Technical Nuance
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 mb-3 text-xs font-mono font-bold text-stone-700">
                    <span className="px-2.5 py-1 bg-white border rounded-lg">Product Created</span>
                    <ArrowRight size={12} className="text-orange-500" />
                    <span className="px-2.5 py-1 bg-white border rounded-lg">Factory Inspection</span>
                    <ArrowRight size={12} className="text-orange-500" />
                    <span className="px-2.5 py-1 bg-white border rounded-lg">Warehouse Received</span>
                    <ArrowRight size={12} className="text-orange-500" />
                    <span className="px-2.5 py-1 bg-white border rounded-lg">Distributor Received</span>
                    <ArrowRight size={12} className="text-orange-500" />
                    <span className="px-2.5 py-1 bg-white border rounded-lg">Retail Store Received</span>
                  </div>
                  <div className="rounded-xl border border-amber-200 bg-amber-50/80 p-3.5">
                    <strong className="block text-xs font-bold text-amber-900 mb-1">
                      Data Integrity vs. Data Truthfulness (The Oracle Problem):
                    </strong>
                    <p className="text-xs text-amber-950 leading-relaxed">
                      If pharmaceutical temperature logs are recorded on a blockchain, the network cryptographically guarantees that the recorded records have not been altered after the fact. However, the blockchain cannot independently verify whether the factory sensor was malfunctioning or whether the operator entered false data initially. <em>A blockchain guarantees integrity of recorded data, not automatic truthfulness of external real-world events.</em>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Part 3 & 4: Network Types, Use Cases & Transaction Lifecycle */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Globe size={15} />
                <span>Part 3 & 4 — Network Types, Use Cases & Lifecycle</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mb-4">
                1.10 Types of Blockchain
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-[#e7e3da] mb-8">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-stone-50 border-b border-[#e7e3da] font-bold text-stone-700">
                    <tr>
                      <th className="p-3">Feature</th>
                      <th className="p-3">Public</th>
                      <th className="p-3">Private</th>
                      <th className="p-3">Consortium</th>
                      <th className="p-3">Hybrid</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e7e3da] text-stone-600">
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Control</td>
                      <td className="p-3">Fully distributed</td>
                      <td className="p-3">Single organization</td>
                      <td className="p-3">Pre-selected group</td>
                      <td className="p-3">Combined public/private</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Access</td>
                      <td className="p-3">Open to anyone</td>
                      <td className="p-3">Strictly internal</td>
                      <td className="p-3">Authorized members</td>
                      <td className="p-3">Selective visibility</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Consensus</td>
                      <td className="p-3">PoW / PoS</td>
                      <td className="p-3">Raft / PBFT</td>
                      <td className="p-3">BFT / PoA</td>
                      <td className="p-3">Custom multi-tier</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Example</td>
                      <td className="p-3">Bitcoin, Ethereum</td>
                      <td className="p-3">Internal supply audit</td>
                      <td className="p-3">Interbank clearing</td>
                      <td className="p-3">Public proof / private data</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 1.11 Permissionless vs Permissioned Blockchains */}
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mb-4">
                1.11 Permissionless vs Permissioned Blockchains
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-[#e7e3da] mb-8">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-stone-50 border-b border-[#e7e3da] font-bold text-stone-700">
                    <tr>
                      <th className="p-3">Dimension</th>
                      <th className="p-3">Permissionless (Public)</th>
                      <th className="p-3">Permissioned (Enterprise / Consortium)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e7e3da] text-stone-600">
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Network Access</td>
                      <td className="p-3">Open to anyone worldwide; no credentials or approvals needed</td>
                      <td className="p-3">Restricted; requires PKI certificate from network identity provider (CA)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Validator Eligibility</td>
                      <td className="p-3">Anyone can participate via PoW mining or PoS staking</td>
                      <td className="p-3">Only known, vetted organizations designated by governance charter</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Throughput & Latency</td>
                      <td className="p-3">Lower (typically 15–1,000 TPS) due to global geographic broadcast</td>
                      <td className="p-3">High (thousands of TPS) due to low-latency crash fault-tolerant consensus</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Native Cryptocurrency</td>
                      <td className="p-3">Required (fuels incentives, anti-spam gas fees, and Sybil defense)</td>
                      <td className="p-3">Optional / Often none (participants have legal/contractual obligations)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Consensus Algorithms</td>
                      <td className="p-3">Proof of Work, Proof of Stake, Nakamoto consensus</td>
                      <td className="p-3">Raft, PBFT, IBFT, Istanbul BFT, Execute-Order-Validate</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 1.12 Blockchain Use Cases Across Industries */}
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mb-4">
                1.12 Blockchain Use Cases Across Industries
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed mb-6">
                Beyond digital currencies, distributed ledgers provide foundational value wherever multiple mutually distrusting organizations must coordinate around shared records without yielding monopoly control to a single vendor.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-8">
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                  <h4 className="font-bold text-xs text-stone-900 mb-1.5 flex items-center gap-1.5 text-amber-700">
                    <Shield size={14} />
                    <span>1. Finance & Banking</span>
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Instant cross-border gross settlement, atomic asset swaps, decentralized lending (DeFi), syndicated loan reconciliation, and tokenization of real-world treasuries.
                  </p>
                </div>
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                  <h4 className="font-bold text-xs text-stone-900 mb-1.5 flex items-center gap-1.5 text-amber-700">
                    <Layers size={14} />
                    <span>2. Supply-Chain Tracking</span>
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    End-to-end component provenance, counterfeit defense in aerospace and electronics, cold-chain compliance verification, and verifiable ethical sourcing proofs.
                  </p>
                </div>
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                  <h4 className="font-bold text-xs text-stone-900 mb-1.5 flex items-center gap-1.5 text-amber-700">
                    <Activity size={14} />
                    <span>3. Healthcare Systems</span>
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Patient medical record consent management, clinical trial telemetry integrity, pharmaceutical supply serialization (DSCSA compliance), and provider credentialing.
                  </p>
                </div>
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                  <h4 className="font-bold text-xs text-stone-900 mb-1.5 flex items-center gap-1.5 text-amber-700">
                    <BookOpen size={14} />
                    <span>4. Education & Credentials</span>
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Cryptographically verifiable digital university diplomas, professional licenses, micro-credentials, and immutable academic transcript proofs without registrar delays.
                  </p>
                </div>
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                  <h4 className="font-bold text-xs text-stone-900 mb-1.5 flex items-center gap-1.5 text-amber-700">
                    <Lock size={14} />
                    <span>5. Decentralized Identity</span>
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    W3C Decentralized Identifiers (DIDs), Self-Sovereign Identity (SSI), Zero-Knowledge age verification, and passwordless cryptographic authentication.
                  </p>
                </div>
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                  <h4 className="font-bold text-xs text-stone-900 mb-1.5 flex items-center gap-1.5 text-amber-700">
                    <Server size={14} />
                    <span>6. Real Estate & Public Registries</span>
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Tamper-evident municipal land registries, title transfer audit trails, shared documentation escrow, and commercial property fractionalization.
                  </p>
                </div>
              </div>

              {/* Transaction Lifecycle (9 Stages) */}
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mb-4">
                1.13 The 9-Stage Blockchain Transaction Lifecycle
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/60">
                  <span className="font-mono text-[10px] font-bold uppercase text-orange-700">Stage 1 & 2</span>
                  <h4 className="font-bold text-xs text-stone-900 mt-0.5 mb-1">Creation & Signing</h4>
                  <p className="text-[11px] text-stone-600">User defines transfer payload; client wallet signs it using sender's private key via ECDSA/Ed25519.</p>
                </div>
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/60">
                  <span className="font-mono text-[10px] font-bold uppercase text-orange-700">Stage 3 & 4</span>
                  <h4 className="font-bold text-xs text-stone-900 mt-0.5 mb-1">Broadcast & Validation</h4>
                  <p className="text-[11px] text-stone-600">Propagates across P2P gossip protocol; peer nodes independently verify signatures, balances, and nonces.</p>
                </div>
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/60">
                  <span className="font-mono text-[10px] font-bold uppercase text-orange-700">Stage 5 & 6</span>
                  <h4 className="font-bold text-xs text-stone-900 mt-0.5 mb-1">Mempool & Batching</h4>
                  <p className="text-[11px] text-stone-600">Pending transactions sit in mempool; validator/miner prioritizes by fee density and packs into block.</p>
                </div>
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/60">
                  <span className="font-mono text-[10px] font-bold uppercase text-orange-700">Stage 7</span>
                  <h4 className="font-bold text-xs text-stone-900 mt-0.5 mb-1">Consensus Execution</h4>
                  <p className="text-[11px] text-stone-600">Network reaches distributed agreement (PoW hash puzzle or PoS committee 2/3+ attestation).</p>
                </div>
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/60">
                  <span className="font-mono text-[10px] font-bold uppercase text-orange-700">Stage 8</span>
                  <h4 className="font-bold text-xs text-stone-900 mt-0.5 mb-1">Block Inclusion & Link</h4>
                  <p className="text-[11px] text-stone-600">Block is appended to ledger chain, referencing parent hash pointer and updating world state.</p>
                </div>
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/60">
                  <span className="font-mono text-[10px] font-bold uppercase text-orange-700">Stage 9</span>
                  <h4 className="font-bold text-xs text-stone-900 mt-0.5 mb-1">Finality & Settlement</h4>
                  <p className="text-[11px] text-stone-600">Transaction reaches economic finality (e.g. 2 Ethereum epochs or 6 Bitcoin confirmations).</p>
                </div>
              </div>

              {/* 1.14 Blockchain vs Traditional Databases */}
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-8 mb-4">
                1.14 Blockchain vs Traditional Databases
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                Engineers must understand that a blockchain is not a faster or cheaper drop-in replacement for an RDBMS. It deliberately trades raw query latency and write throughput for multi-party decentralization and Byzantine fault tolerance.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-[#e7e3da] mb-6">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-stone-50 border-b border-[#e7e3da] font-bold text-stone-700">
                    <tr>
                      <th className="p-3">Parameter</th>
                      <th className="p-3">Traditional Database (e.g. PostgreSQL, DynamoDB)</th>
                      <th className="p-3">Blockchain (e.g. Bitcoin, Ethereum, Fabric)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e7e3da] text-stone-600">
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Architecture</td>
                      <td className="p-3">Centralized or primary-replica cluster</td>
                      <td className="p-3">Distributed peer-to-peer state machine</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Record Management</td>
                      <td className="p-3">Database administrators with full superuser root permissions</td>
                      <td className="p-3">Protocol rules verified independently by every node</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Data Operations</td>
                      <td className="p-3">Full CRUD (Create, Read, Update, Delete)</td>
                      <td className="p-3">Append-only; historical blocks cannot be overwritten or deleted</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Write Throughput</td>
                      <td className="p-3">Tens of thousands to millions of writes per second</td>
                      <td className="p-3">Constrained (15 TPS for Bitcoin, ~30 TPS for Ethereum L1)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Read Query Latency</td>
                      <td className="p-3">Sub-millisecond index lookups via SQL/B-Trees</td>
                      <td className="p-3">Requires local RPC node or state trie traversal</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Cost & Efficiency</td>
                      <td className="p-3">Negligible compute overhead per row stored</td>
                      <td className="p-3">High computational cost and gas fees to replicate across peers</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* The 5-Point Engineering Decision Framework */}
              <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-5 mb-8">
                <h4 className="font-bold text-xs text-stone-900 uppercase tracking-wider mb-2">
                  The 5-Point Engineering Decision Framework: When to Choose Blockchain
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-white border border-stone-200">
                    <span className="font-bold text-amber-700 block mb-1">1. Multiple Writers?</span>
                    <p className="text-stone-600">Do multiple independent entities write data without trusting one central party?</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-stone-200">
                    <span className="font-bold text-amber-700 block mb-1">2. No Central Admin?</span>
                    <p className="text-stone-600">Is a trusted intermediary absent, undesirable, or expensive?</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-stone-200">
                    <span className="font-bold text-amber-700 block mb-1">3. Shared Verification?</span>
                    <p className="text-stone-600">Do all participants need to independently verify rule compliance?</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-stone-200">
                    <span className="font-bold text-amber-700 block mb-1">4. Tamper Evidence?</span>
                    <p className="text-stone-600">Is an immutable, auditable historical log strictly required?</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-stone-200">
                    <span className="font-bold text-amber-700 block mb-1">5. Tolerant to Trade-offs?</span>
                    <p className="text-stone-600">Can the workload tolerate consensus latency and storage duplication?</p>
                  </div>
                </div>
                <p className="text-[11px] text-stone-500 mt-3 italic">
                  Rule of thumb: If the answer to any of the first four questions is "No", an RDBMS (PostgreSQL, MySQL) is the better engineering design.
                </p>
              </div>

              {/* 1.15 Advantages, Limitations & Misconceptions */}
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-8 mb-4">
                1.15 Advantages, Limitations & Common Misconceptions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-5 rounded-2xl border border-emerald-200 bg-emerald-50/40">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-emerald-900 mb-3 flex items-center gap-1.5">
                    <CheckCircle2 size={15} className="text-emerald-600" />
                    <span>Real Architectural Advantages</span>
                  </h4>
                  <ul className="text-xs text-stone-700 space-y-2 list-disc pl-4">
                    <li><strong>Trust Minimization:</strong> Enables collaboration between competitors without a monopolistic mediator.</li>
                    <li><strong>Cryptographic Tamper-Evidence:</strong> Historical modification cannot be hidden from network nodes.</li>
                    <li><strong>Fault Tolerance & High Availability:</strong> Network survives severe hardware and jurisdictional outages.</li>
                    <li><strong>Programmable Logic:</strong> Smart contracts execute autonomously without discretionary human delays.</li>
                    <li><strong>Auditable Provenance:</strong> Unbroken historical chain from Genesis block to present state.</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl border border-rose-200 bg-rose-50/40">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-rose-900 mb-3 flex items-center gap-1.5">
                    <AlertTriangle size={15} className="text-rose-600" />
                    <span>Technical & Operational Limitations</span>
                  </h4>
                  <ul className="text-xs text-stone-700 space-y-2 list-disc pl-4">
                    <li><strong>Scalability Trilemma:</strong> Balancing security, decentralization, and high throughput is mathematically difficult.</li>
                    <li><strong>Resource & Storage Bloat:</strong> Full nodes require ever-increasing SSD storage to retain complete history.</li>
                    <li><strong>Finality Latency:</strong> Settlement is probabilistic in PoW and requires multiple consensus epochs in PoS.</li>
                    <li><strong>Irreversibility of Key Loss:</strong> Losing a private key results in permanent loss of funds with no customer service desk.</li>
                    <li><strong>Public Privacy Leakage:</strong> Transparent on-chain transactions permit sophisticated heuristic clustering.</li>
                  </ul>
                </div>
              </div>

              {/* Misconceptions Table */}
              <div className="overflow-x-auto rounded-2xl border border-[#e7e3da] mb-8">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-stone-50 border-b border-[#e7e3da] font-bold text-stone-700">
                    <tr>
                      <th className="p-3">Common Industry Misconception</th>
                      <th className="p-3">Technical Reality</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e7e3da] text-stone-600">
                    <tr>
                      <td className="p-3 font-bold text-stone-900">"Blockchain and Bitcoin are synonymous"</td>
                      <td className="p-3">Bitcoin is the pioneering cryptocurrency application built on blockchain; blockchain is the underlying distributed data structure and consensus paradigm.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">"All blockchains are public and transparent"</td>
                      <td className="p-3">Enterprise consortium frameworks (e.g. Hyperledger Fabric, Corda) are strictly permissioned and confidential to certified participants.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">"Blockchain records are physically impossible to change"</td>
                      <td className="p-3">Records are tamper-evident; if an attacker amasses &gt;50% hashrate or &gt;66% validator stake, historical chain reorganizations become technically possible.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">"Blockchains automatically prevent fraud"</td>
                      <td className="p-3">Blockchains guarantee internal state transitions, but garbage entered at the input level remains garbage on-chain (The Oracle Problem).</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">"Every blockchain requires cryptocurrency tokens"</td>
                      <td className="p-3">Private and consortium blockchains function effectively without native cryptocurrency tokens, using PKI identities and legal governance instead.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Part 6: Major Platforms */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Server size={15} />
                <span>Part 6 — Major Blockchain Platforms</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mb-4">
                1.16 Bitcoin, Ethereum, Hyperledger Fabric & Solana
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-[#e7e3da]">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-stone-50 border-b border-[#e7e3da] font-bold text-stone-700">
                    <tr>
                      <th className="p-3">Platform</th>
                      <th className="p-3">Core Paradigm</th>
                      <th className="p-3">Consensus Mechanism</th>
                      <th className="p-3">Smart Contract Language</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e7e3da] text-stone-600">
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Bitcoin</td>
                      <td className="p-3">Digital Cash, UTXO model, store of value</td>
                      <td className="p-3">Proof of Work (SHA-256)</td>
                      <td className="p-3">Bitcoin Script (non-Turing complete stack)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Ethereum</td>
                      <td className="p-3">World Computer, account-based state, EVM</td>
                      <td className="p-3">Proof of Stake (Gasper / Casper FFG)</td>
                      <td className="p-3">Solidity, Vyper (Turing-complete)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Hyperledger Fabric</td>
                      <td className="p-3">Enterprise consortium, channels, permissioned</td>
                      <td className="p-3">Execute-Order-Validate (Raft / BFT)</td>
                      <td className="p-3">Go, Java, JavaScript (Chaincode)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Solana</td>
                      <td className="p-3">High throughput, parallel transaction execution</td>
                      <td className="p-3">Proof of History (PoH) + Tower BFT</td>
                      <td className="p-3">Rust, C, Python (Sealevel runtime)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        )}

        {/* TAB 2: INTERACTIVE SIMULATORS */}
        {activeTab === "interactive-lab" && (
          <div className="space-y-8">
            {/* Interactive Lab 1: Real-Time Blockchain & Tampering Visualizer */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-700">Interactive Lab 1</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">
                    Live Blockchain & Cryptographic Tampering Simulator
                  </h2>
                </div>
                <button
                  onClick={resetSimulator}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 text-xs font-bold text-stone-700 hover:bg-stone-50 transition cursor-pointer"
                >
                  <RefreshCw size={13} />
                  <span>Restore Verified State</span>
                </button>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 mb-6">
                This visualizer demonstrates how blocks connect sequentially via parent hash pointers. Modify the transaction in <strong>Block 1</strong> below to see in real-time how tampering with historical records instantly breaks the cryptographic chain.
              </p>

              {/* Status Banner */}
              <div
                className={`p-4 rounded-2xl mb-6 border transition-all ${
                  chainValidation.isValid
                    ? "bg-emerald-50 border-emerald-200 text-emerald-900"
                    : "bg-red-50 border-red-200 text-red-900"
                }`}
              >
                <div className="flex items-center gap-2">
                  {chainValidation.isValid ? (
                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                  ) : (
                    <AlertTriangle size={18} className="text-red-600 shrink-0" />
                  )}
                  <div>
                    <span className="font-bold text-xs uppercase tracking-wider">
                      {chainValidation.isValid ? "Blockchain Status: 100% Cryptographically Valid" : "Tampering Detected! Cryptographic Chain Broken!"}
                    </span>
                    <p className="text-xs mt-0.5">{chainValidation.reason}</p>
                  </div>
                </div>
              </div>

              {/* Blocks Visualizer Strip */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {simulatedChain.map((b, idx) => {
                  const isTampered = idx === 1 && tamperedBlockIndex !== null;
                  const isBrokenLink = idx > 1 && !chainValidation.isValid;

                  return (
                    <div
                      key={b.index}
                      className={`rounded-2xl border p-4 transition-all ${
                        isTampered
                          ? "border-amber-400 bg-amber-50/70 shadow-sm"
                          : isBrokenLink
                          ? "border-red-300 bg-red-50/40"
                          : "border-stone-200 bg-stone-50/70"
                      }`}
                    >
                      <div className="flex items-center justify-between border-b border-stone-200/80 pb-2 mb-2">
                        <span className="font-mono text-xs font-bold text-stone-900">
                          {idx === 0 ? "Genesis Block (0)" : `Block #${b.index}`}
                        </span>
                        {isBrokenLink ? (
                          <span className="text-[10px] font-bold text-red-600 flex items-center gap-1">
                            <Unlock size={11} />
                            Broken Link
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1">
                            <Lock size={11} />
                            Verified
                          </span>
                        )}
                      </div>

                      <div className="space-y-2 text-[11px] font-mono">
                        <div>
                          <span className="text-stone-500 block text-[10px]">Data / Transactions:</span>
                          <span className="text-stone-800 font-bold break-words">{b.data}</span>
                        </div>

                        <div>
                          <span className="text-stone-500 block text-[10px]">Previous Hash:</span>
                          <span className={`block truncate ${isBrokenLink ? "text-red-600 font-bold" : "text-stone-600"}`}>
                            {b.previousHash.slice(0, 18)}...
                          </span>
                        </div>

                        <div>
                          <span className="text-stone-500 block text-[10px]">Current Block Hash:</span>
                          <span className={`block truncate ${isTampered ? "text-amber-700 font-bold" : "text-stone-900"}`}>
                            {b.hash.slice(0, 18)}...
                          </span>
                        </div>
                      </div>

                      {/* Interactive Tampering Input on Block 1 */}
                      {idx === 1 && (
                        <div className="mt-3 pt-2.5 border-t border-stone-200">
                          <label className="block text-[10px] font-bold text-stone-700 mb-1">
                            Simulate Malicious Transfer Edit:
                          </label>
                          <div className="flex items-center gap-1.5">
                            <input
                              type="number"
                              value={b.amount}
                              onChange={(e) => handleTamperBlock1(e.target.value)}
                              className="w-full px-2 py-1 bg-white border border-stone-300 rounded-lg text-xs font-mono font-bold"
                            />
                            <button
                              onClick={() => handleTamperBlock1(9999)}
                              className="shrink-0 px-2 py-1 bg-red-600 text-white rounded-lg text-[10px] font-bold hover:bg-red-700 cursor-pointer"
                              title="Set to 9999 to test lab scenario"
                            >
                              Set 9999
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Interactive Lab 2: SHA-256 Avalanche Effect Playground */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-700">Interactive Lab 2</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mb-2">
                SHA-256 Avalanche Effect Playground
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mb-4 leading-relaxed">
                Type any text in the input box below. Notice how changing even a single uppercase letter to lowercase completely alters all 64 hexadecimal characters of the resulting hash.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1.5">
                    Input Message String:
                  </label>
                  <input
                    type="text"
                    value={hashInput}
                    onChange={(e) => setHashInput(e.target.value)}
                    placeholder="Enter any text..."
                    className="w-full p-3 rounded-xl border border-stone-300 font-mono text-sm bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>

                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="text-stone-500 font-medium">Quick Test Cases:</span>
                  <button
                    onClick={() => setHashInput("Hello Blockchain")}
                    className="px-2.5 py-1 rounded-lg border border-stone-200 bg-stone-50 hover:bg-stone-100 font-mono text-stone-700 cursor-pointer"
                  >
                    "Hello Blockchain"
                  </button>
                  <button
                    onClick={() => setHashInput("Hello blockchain")}
                    className="px-2.5 py-1 rounded-lg border border-stone-200 bg-stone-50 hover:bg-stone-100 font-mono text-stone-700 cursor-pointer"
                  >
                    "Hello blockchain" (lowercase 'b')
                  </button>
                  <button
                    onClick={() => setHashInput("Alice pays Bob 500")}
                    className="px-2.5 py-1 rounded-lg border border-stone-200 bg-stone-50 hover:bg-stone-100 font-mono text-stone-700 cursor-pointer"
                  >
                    "Alice pays Bob 500"
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs">
                  <span className="text-stone-400 block text-[10px] uppercase tracking-wider mb-1">
                    SHA-256 Calculated Digest (256-bit / 64 Hex Characters):
                  </span>
                  <div className="text-emerald-400 font-bold break-all sm:text-sm">
                    {calculatedHash}
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* TAB 3: PYTHON LAB IMPLEMENTATION */}
        {activeTab === "python-code" && (
          <div className="space-y-6">
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-700">Part 7 — Practical Lab</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">
                    Building a Verified Blockchain in Python from Scratch
                  </h2>
                </div>
                <button
                  onClick={copyCode}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-orange-600 text-white text-xs font-bold hover:bg-orange-700 transition cursor-pointer shadow-xs active:scale-95"
                >
                  {copiedCode ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedCode ? "Code Copied!" : "Copy Python Program"}</span>
                </button>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed">
                This complete Python 3 script uses standard library packages (<code className="bg-stone-100 px-1.5 py-0.5 rounded text-stone-800">hashlib</code>, <code className="bg-stone-100 px-1.5 py-0.5 rounded text-stone-800">json</code>, <code className="bg-stone-100 px-1.5 py-0.5 rounded text-stone-800">dataclasses</code>) to construct immutable blocks, hash linkage, chain validation, and tampering detection.
              </p>

              <div className="relative rounded-2xl bg-stone-950 p-4 sm:p-6 text-stone-200 font-mono text-xs overflow-x-auto shadow-inner">
                <pre className="leading-relaxed">
                  <code>{pythonLabCode}</code>
                </pre>
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <h4 className="font-bold text-xs text-stone-900 mb-1">Execution & Verification:</h4>
                <p className="text-xs text-stone-600 mb-2">Save the code to <code className="font-mono text-stone-800">blockchain_lab.py</code> and execute:</p>
                <div className="bg-stone-900 text-stone-100 px-3 py-2 rounded-xl font-mono text-xs">
                  python blockchain_lab.py
                </div>
              </div>

              {/* 1.17 Lab Overview & Technical Specifications */}
              <div className="mt-8 border-t border-stone-200 pt-6">
                <h3 className="text-base font-bold text-stone-900 mb-3">
                  1.17 Lab Overview & Technical Specifications
                </h3>
                <div className="overflow-x-auto rounded-2xl border border-stone-200 mb-6">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-stone-50 border-b border-stone-200 font-bold text-stone-700">
                      <tr>
                        <th className="p-2.5">Component</th>
                        <th className="p-2.5">Technology Specification</th>
                        <th className="p-2.5">Architectural Role</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-stone-600">
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Runtime</td>
                        <td className="p-2.5 font-mono">Python 3.10+</td>
                        <td className="p-2.5">Standard execution runtime for data modeling</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Cryptographic Hashing</td>
                        <td className="p-2.5 font-mono">hashlib.sha256</td>
                        <td className="p-2.5">Computes 256-bit parent hash and block commitments</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Serialization Engine</td>
                        <td className="p-2.5 font-mono">json.dumps(sort_keys=True, separators=(',', ':'))</td>
                        <td className="p-2.5">Guarantees canonical byte ordering without whitespace jitter</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Data Model</td>
                        <td className="p-2.5 font-mono">@dataclass Block</td>
                        <td className="p-2.5">Encapsulates block index, timestamp, transactions, previous_hash, nonce</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Verification Logic</td>
                        <td className="p-2.5 font-mono">is_chain_valid() -&gt; bool</td>
                        <td className="p-2.5">Audits genesis hash, link integrity, and transaction recalculations</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Step-by-Step Analysis of What Happened */}
                <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-5 mb-6">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-amber-900 mb-2">
                    Step-by-Step Analysis: How Cryptographic Tampering is Caught
                  </h4>
                  <ol className="text-xs text-stone-700 space-y-2 list-decimal pl-4 leading-relaxed">
                    <li>Initially, every block references its predecessor's valid hash pointer: Genesis (0000...) &lt;- Block 1 &lt;- Block 2 &lt;- Block 3.</li>
                    <li>When transaction amount in Block 1 is maliciously altered from <code className="bg-white px-1 py-0.5 rounded font-mono">500</code> to <code className="bg-white px-1 py-0.5 rounded font-mono">9999</code>, Block 1's serialized JSON byte sequence changes.</li>
                    <li>Recalculating SHA-256 over Block 1 produces an entirely different 64-character hex digest due to the avalanche effect.</li>
                    <li>Block 1's stored block_hash no longer matches its calculated hash (<code className="bg-white px-1 py-0.5 rounded font-mono">current_block.block_hash != current_block.calculate_hash()</code>).</li>
                    <li>Furthermore, Block 2 still retains the old original Block 1 hash pointer, causing a parent hash mismatch (<code className="bg-white px-1 py-0.5 rounded font-mono">current_block.previous_hash != previous_block.block_hash</code>).</li>
                    <li><code className="bg-white px-1 py-0.5 rounded font-mono">is_chain_valid()</code> detects the anomaly and returns <code className="bg-white px-1 py-0.5 rounded font-mono text-red-600 font-bold">False</code>.</li>
                  </ol>
                </div>

                {/* Practical Extensions & Advanced Challenge */}
                <h4 className="font-bold text-xs uppercase tracking-wider text-stone-900 mb-2">
                  Hands-On Practical Lab Extensions:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-6">
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="font-bold text-stone-900 block mb-1">Exercise A: Multi-Block Expansion</span>
                    <p className="text-stone-600">Append 10 distinct blocks with varying transaction payloads and verify execution time.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="font-bold text-stone-900 block mb-1">Exercise B: Cascade Tamper Audit</span>
                    <p className="text-stone-600">Mutate Block 2 and write an automated diagnostic function pinpointing the exact broken index.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="font-bold text-stone-900 block mb-1">Exercise C: Block Explorer CLI</span>
                    <p className="text-stone-600">Build an interactive terminal query function <code className="font-mono">find_transactions_by_address(addr)</code>.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="font-bold text-stone-900 block mb-1">Advanced Challenge: Proof of Work</span>
                    <p className="text-stone-600">Implement a mining loop seeking a hash starting with <code className="font-mono">"0000"</code> by incrementing <code className="font-mono">nonce</code>.</p>
                  </div>
                </div>

                {/* Educational Limitation Note */}
                <div className="rounded-xl border border-stone-200 bg-stone-100/70 p-3.5 text-xs text-stone-600">
                  <strong className="text-stone-800">Important Educational Lab Scope:</strong> This foundational Python script implements a local in-memory cryptographic hash chain. It demonstrates block linkage and tamper detection. Decentralized peer-to-peer networking, public-key digital signatures (ECDSA/secp256k1), and distributed consensus mechanisms are covered in detail in subsequent modules.
                </div>
              </div>
            </section>
          </div>
        )}

        {/* TAB 4: KNOWLEDGE ASSESSMENT (QUIZ) */}
        {activeTab === "quiz" && (
          <div className="space-y-6">
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-700">Part 8 — Section 1.19</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">
                    Module 1 Knowledge Assessment
                  </h2>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-stone-500">Score: {score} / 10</span>
                  <div className="text-xs font-bold text-stone-800">
                    {Object.keys(selectedAnswers).length} of 10 Answered
                  </div>
                </div>
              </div>

              {quizSubmitted && (
                <div className={`p-4 rounded-2xl mb-6 border ${score >= 8 ? "bg-emerald-50 border-emerald-200 text-emerald-900" : "bg-amber-50 border-amber-200 text-amber-900"}`}>
                  <h3 className="font-bold text-sm">Assessment Completed! Score: {score} / 10 ({score * 10}%)</h3>
                  <p className="text-xs mt-0.5">
                    {score >= 8 ? "Excellent! You have demonstrated strong mastery of blockchain fundamentals." : "Review the theoretical foundations and retry to achieve 80%+."}
                  </p>
                </div>
              )}

              <div className="space-y-6">
                {quizQuestions.map((q) => {
                  const isAnswered = selectedAnswers[q.id] !== undefined;
                  const isCorrect = selectedAnswers[q.id] === q.correctIndex;

                  return (
                    <div key={q.id} className="p-5 rounded-2xl border border-stone-200 bg-stone-50/50">
                      <div className="font-bold text-sm text-stone-900 mb-3 flex items-start gap-2">
                        <span className="font-mono text-xs px-2 py-0.5 rounded bg-stone-200 text-stone-700 shrink-0">
                          Q{q.id}
                        </span>
                        <span>{q.question}</span>
                      </div>

                      <div className="space-y-2 mb-3">
                        {q.options.map((opt, optIdx) => {
                          const isSelected = selectedAnswers[q.id] === optIdx;
                          let btnStyle = "border-stone-200 bg-white hover:bg-stone-100 text-stone-700";

                          if (quizSubmitted) {
                            if (optIdx === q.correctIndex) {
                              btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-900 font-bold";
                            } else if (isSelected && !isCorrect) {
                              btnStyle = "border-red-400 bg-red-50 text-red-900 line-through";
                            }
                          } else if (isSelected) {
                            btnStyle = "border-orange-500 bg-orange-50 text-orange-950 font-bold";
                          }

                          return (
                            <button
                              key={optIdx}
                              disabled={quizSubmitted}
                              onClick={() => handleSelectOption(q.id, optIdx)}
                              className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition cursor-pointer flex items-center justify-between ${btnStyle}`}
                            >
                              <span>{opt}</span>
                              {quizSubmitted && optIdx === q.correctIndex && (
                                <CheckCircle2 size={16} className="text-emerald-600 shrink-0 ml-2" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {quizSubmitted && (
                        <div className="p-3 rounded-xl bg-white border border-stone-200 text-xs text-stone-600 leading-relaxed">
                          <strong className="text-stone-900">Explanation: </strong>
                          {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex gap-3">
                {!quizSubmitted ? (
                  <button
                    onClick={() => setQuizSubmitted(true)}
                    disabled={Object.keys(selectedAnswers).length === 0}
                    className="px-6 py-3 rounded-xl bg-[#f97316] text-white font-bold text-xs sm:text-sm hover:bg-[#ea580c] transition cursor-pointer disabled:opacity-50"
                  >
                    Submit Assessment
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setQuizSubmitted(false);
                      setSelectedAnswers({});
                    }}
                    className="px-6 py-3 rounded-xl border border-stone-300 bg-white text-stone-800 font-bold text-xs sm:text-sm hover:bg-stone-50 transition cursor-pointer"
                  >
                    Reset & Retake
                  </button>
                )}
              </div>
            </section>
          </div>
        )}

        {/* TAB 5: COMPLETION CHECKLIST & ASSIGNMENTS */}
        {activeTab === "checklist" && (
          <div className="space-y-6">
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-700">Section 1.20</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">
                    Module Completion Requirements Tracker
                  </h2>
                </div>
                <div className="text-right">
                  <span className="text-xl font-bold text-orange-600">{progressPercent}%</span>
                  <div className="text-xs text-stone-500 font-mono">{checkedCount} of 15 completed</div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-stone-100 rounded-full h-3 mb-6 overflow-hidden border border-stone-200">
                <div
                  className="bg-orange-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <div className="space-y-2.5">
                {completionItems.map((item, idx) => {
                  const isChecked = !!checkedItems[idx];
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleCheck(idx)}
                      className={`p-3.5 rounded-xl border flex items-center gap-3 transition cursor-pointer ${
                        isChecked
                          ? "bg-emerald-50/60 border-emerald-200 text-emerald-950 font-medium"
                          : "bg-white border-stone-200 text-stone-700 hover:bg-stone-50"
                      }`}
                    >
                      {isChecked ? (
                        <CheckSquare size={18} className="text-emerald-600 shrink-0" />
                      ) : (
                        <Square size={18} className="text-stone-400 shrink-0" />
                      )}
                      <span className="text-xs sm:text-sm">{item}</span>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Assignments Brief */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-700">Section 1.18</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mb-4">
                Module Assignments & Practicals
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                  <h4 className="font-bold text-xs text-stone-900 mb-1">Assignment 1 — Conceptual Analysis</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Write a 1,000–1,500 word technical report examining how centralized vs decentralized systems differ, DLT vs blockchain boundaries, and why blockchain records are tamper-evident.
                  </p>
                </div>
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                  <h4 className="font-bold text-xs text-stone-900 mb-1">Assignment 2 — Architecture Design</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Design a 5-bank consortium ledger. Specify permissioning, node operators, transaction validation workflows, and privacy preservation mechanisms.
                  </p>
                </div>
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                  <h4 className="font-bold text-xs text-stone-900 mb-1">Assignment 3 — Programming Extension</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Extend <code className="bg-stone-100 px-1 py-0.5 rounded text-stone-800">blockchain_lab.py</code> with minimum 5 blocks, 10 transactions, transaction lookup by sender, and custom difficulty mining.
                  </p>
                </div>
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                  <h4 className="font-bold text-xs text-stone-900 mb-1">Assignment 4 — Industry Research</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Select healthcare, supply-chain, or real estate. Analyze whether blockchain solves the multi-party coordination problem and compare against a traditional PostgreSQL database.
                  </p>
                </div>
              </div>
            </section>

            {/* Recommended Resources */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-700">Section 1.21</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mb-4">
                Recommended Learning Resources
              </h2>
              <ul className="divide-y divide-[#e7e3da] text-xs sm:text-sm">
                <li className="py-2.5 flex items-center justify-between">
                  <span className="font-semibold text-stone-900">Stanford CS251: Blockchain Technologies</span>
                  <a href="https://cs251.stanford.edu/" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-bold hover:underline flex items-center gap-1">
                    cs251.stanford.edu <ExternalLink size={12} />
                  </a>
                </li>
                <li className="py-2.5 flex items-center justify-between">
                  <span className="font-semibold text-stone-900">NIST IR 8202: Blockchain Technology Overview</span>
                  <a href="https://csrc.nist.gov/pubs/ir/8202/final" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-bold hover:underline flex items-center gap-1">
                    csrc.nist.gov <ExternalLink size={12} />
                  </a>
                </li>
                <li className="py-2.5 flex items-center justify-between">
                  <span className="font-semibold text-stone-900">Bitcoin: A Peer-to-Peer Electronic Cash System (Nakamoto 2008)</span>
                  <a href="https://bitcoin.org/bitcoin.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-bold hover:underline flex items-center gap-1">
                    bitcoin.org <ExternalLink size={12} />
                  </a>
                </li>
                <li className="py-2.5 flex items-center justify-between">
                  <span className="font-semibold text-stone-900">Ethereum Technical Documentation (EVM & Smart Contracts)</span>
                  <a href="https://ethereum.org/developers/docs/" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-bold hover:underline flex items-center gap-1">
                    ethereum.org <ExternalLink size={12} />
                  </a>
                </li>
              </ul>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
