# projectx/generator_mod14/assemble.py
"""
Assembles BlockchainDAppDevelopment.jsx from its sub-generators.
Clean React JSX with zero information loss, comprehensive interactive simulators,
and production-tested syntax.
"""

import sys, os, json
sys.path.append(os.path.dirname(__file__))

import gen_data
import gen_interactive
import gen_theory
import gen_lab
import gen_assessment
import gen_tracker

def assemble():
    checklist_json = json.dumps(gen_data.CHECKLIST_ITEMS, indent=2)
    quiz_json = json.dumps(gen_data.QUIZ_QUESTIONS, indent=2)
    interview_json = json.dumps(gen_data.INTERVIEW_QUESTIONS, indent=2)

    interactive_jsx = gen_interactive.get_interactive_code()
    theory_jsx = gen_theory.get_theory_code()
    lab_jsx = gen_lab.get_lab_code()
    assessment_jsx = gen_assessment.get_assessment_code()
    tracker_jsx = gen_tracker.get_tracker_code()

    header = '''import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Cpu,
  Code,
  Terminal,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  ListChecks,
  Award
} from "lucide-react";
import ModuleNav from "./ModuleNav";

// 26 Persistent Checklist Items
const CHECKLIST_ITEMS = ''' + checklist_json + ''';

// 20 Multiple Choice Questions
const QUIZ_QUESTIONS = ''' + quiz_json + ''';

// 14 Senior Web3 Architect Interview Scenarios
const INTERVIEW_QUESTIONS = ''' + interview_json + ''';

// Storage Matrix Static Data
const STORAGE_ENTITIES = [
  {
    key: "votes",
    title: "1. Voting Tally",
    recommendedTier: "Smart Contract Storage (EVM State)",
    gasCost: "~45,000 gas per write (SSTORE)",
    queryLatency: "Instant via eth_call (0ms on-chain)",
    censorshipResistance: "Maximum (Consensus Enforced)",
    mutability: "Deterministic Smart Contract Logic Only",
    rationale: "Official voting counts and election results must be permanently tamper-proof, globally verifiable, and settled by blockchain consensus."
  },
  {
    key: "avatar",
    title: "2. Candidate Avatar",
    recommendedTier: "Decentralized IPFS / Arweave",
    gasCost: "0 gas (Content-Addressed Off-Chain)",
    queryLatency: "~200-400ms via IPFS Gateway",
    censorshipResistance: "High (Content Addressed Hash)",
    mutability: "Immutable (Hash pinned on IPFS)",
    rationale: "Storing high-resolution image files on Ethereum costs thousands of dollars in gas. Content-addressed storage preserves immutability for free."
  },
  {
    key: "eligibility",
    title: "3. Voter Eligibility",
    recommendedTier: "Smart Contract (Mapping / Merkle Root)",
    gasCost: "~22,000 gas per voter verification",
    queryLatency: "Instant on-chain lookup",
    censorshipResistance: "Maximum",
    mutability: "State Boolean (hasVoted[voter] = true)",
    rationale: "Double-voting prevention must be enforced at the EVM execution layer so unauthorized or duplicate ballots unconditionally revert."
  },
  {
    key: "comments",
    title: "4. Discussion Feed",
    recommendedTier: "Centralized PostgreSQL + Redis",
    gasCost: "0 gas (Off-Chain REST API)",
    queryLatency: "<20ms Query Execution",
    censorshipResistance: "Moderate (Governed by Moderator)",
    mutability: "Fully Mutable (CRUD Operations)",
    rationale: "Community discussion comments, likes, and reply threads require full-text search, rapid pagination, and spam filtering better suited for relational databases."
  },
  {
    key: "session",
    title: "5. Auth Session",
    recommendedTier: "Redis / HttpOnly Cookie (SIWE)",
    gasCost: "0 gas (Cryptographic Off-Chain)",
    queryLatency: "<2ms Memory Lookup",
    censorshipResistance: "Internal Application Scope",
    mutability: "Ephemeral (1-Hour Session TTL)",
    rationale: "Authentication tokens must expire quickly and should never be exposed on a public immutable blockchain where anyone can inspect them."
  }
];

export default function BlockchainDAppDevelopment() {
  const navigate = useNavigate();

  // Navigation tab state: interactive | theory | lab | assessment | tracker
  const [activeTab, setActiveTab] = useState("interactive");

  // Checklist State with LocalStorage Persistence
  const [checklistState, setChecklistState] = useState(() => {
    try {
      const saved = localStorage.getItem("prepspaces_blockchain_m14_progress");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("prepspaces_blockchain_m14_progress", JSON.stringify(checklistState));
    } catch (e) {
      console.error("Failed to save checklist state to localStorage", e);
    }
  }, [checklistState]);

  const toggleChecklistItem = (idx) => {
    setChecklistState(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const selectAllChecklist = () => {
    const all = {};
    CHECKLIST_ITEMS.forEach((_, idx) => { all[idx] = true; });
    setChecklistState(all);
  };

  const resetChecklist = () => {
    setChecklistState({});
  };

  const completedCount = useMemo(() => {
    return Object.values(checklistState).filter(Boolean).length;
  }, [checklistState]);

  const progressPercent = Math.round((completedCount / CHECKLIST_ITEMS.length) * 100);

  // Quiz State
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const handleSelectAnswer = (qId, optionIdx) => {
    if (selectedAnswers[qId] !== undefined) return;
    setSelectedAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
  };

  const quizScore = useMemo(() => {
    let score = 0;
    QUIZ_QUESTIONS.forEach(q => {
      if (selectedAnswers[q.id] === q.answer) score++;
    });
    return score;
  }, [selectedAnswers]);

  // Interview Accordion State
  const [expandedInterview, setExpandedInterview] = useState(null);
  const toggleInterview = (id) => {
    setExpandedInterview(prev => prev === id ? null : id);
  };

  // ==========================================
  // Interactive Simulator 1: Voting DApp
  // ==========================================
  const [simulatorTab, setSimulatorTab] = useState("voting");
  const [votingActiveAccount, setVotingActiveAccount] = useState("0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045");
  const [selectedCandidateId, setSelectedCandidateId] = useState(1);
  const [hasVotedMapping, setHasVotedMapping] = useState({
    "0xab5801a7d398351b8be11c439e05c5b3259aec9b": true
  });
  const [votingCandidates, setVotingCandidates] = useState([
    { id: 1, name: "Alice", proposal: "ZK-Rollup Layer 2 Scaling Protocol", voteCount: 42 },
    { id: 2, name: "Bob", proposal: "Decentralized Zero-Knowledge Identity", voteCount: 37 },
    { id: 3, name: "Charlie", proposal: "Decentralized IPFS / Filecoin Storage", voteCount: 29 }
  ]);
  const [votingTxStage, setVotingTxStage] = useState("idle");
  const [votingTxHash, setVotingTxHash] = useState(null);
  const [votingTxMessage, setVotingTxMessage] = useState("");

  const handleVotingAccountSwitch = (newAcc) => {
    setVotingActiveAccount(newAcc);
    setVotingTxStage("idle");
    setVotingTxHash(null);
  };

  const handleCastVote = (candidateId) => {
    setSelectedCandidateId(candidateId);
    const lowerAcc = votingActiveAccount.toLowerCase();
    if (hasVotedMapping[lowerAcc]) {
      setVotingTxStage("failed");
      setVotingTxMessage("Execution Reverted: require(!hasVoted[msg.sender], 'Already voted')");
      return;
    }

    setVotingTxStage("signing");
    setVotingTxMessage("Awaiting signature confirmation in MetaMask popup...");
    setVotingTxHash(null);

    setTimeout(() => {
      // Deterministic pseudo-hash for demonstration:
      const pseudoHash = "0x" + Math.abs(candidateId * 987654321 + lowerAcc.charCodeAt(3)).toString(16).padEnd(64, "7");
      setVotingTxHash(pseudoHash);
      setVotingTxStage("confirming");
      setVotingTxMessage("Transaction broadcast! Pending block inclusion on Sepolia...");

      setTimeout(() => {
        setVotingTxStage("success");
        setVotingTxMessage("Vote successfully confirmed in Block #7,221,419! Status: 0x1 (Success)");
        setHasVotedMapping(prev => ({ ...prev, [lowerAcc]: true }));
        setVotingCandidates(prev => prev.map(c => c.id === candidateId ? { ...c, voteCount: c.voteCount + 1 } : c));
      }, 1200);
    }, 1000);
  };

  const handleResetVoting = () => {
    setHasVotedMapping({});
    setVotingCandidates([
      { id: 1, name: "Alice", proposal: "ZK-Rollup Layer 2 Scaling Protocol", voteCount: 42 },
      { id: 2, name: "Bob", proposal: "Decentralized Zero-Knowledge Identity", voteCount: 37 },
      { id: 3, name: "Charlie", proposal: "Decentralized IPFS / Filecoin Storage", voteCount: 29 }
    ]);
    setVotingTxStage("idle");
    setVotingTxHash(null);
    setVotingTxMessage("");
  };

  // ==========================================
  // Interactive Simulator 2: SIWE Flow
  // ==========================================
  const [siweStep, setSiweStep] = useState(0);
  const [siweNonce, setSiweNonce] = useState("");
  const [siweSignature, setSiweSignature] = useState("");
  const [siweSessionActive, setSiweSessionActive] = useState(false);

  const siweMessageText = useMemo(() => {
    return `prepspaces.com wants you to sign in with your Ethereum account:
${votingActiveAccount}

Sign in to PrepSpaces Full-Stack DApp.
URI: https://prepspaces.com/login
Version: 1
Chain ID: 11155111
Nonce: ${siweNonce || "a8d2c91f"}
Issued At: 2026-11-08T10:00:00.000Z
Expiration Time: 2026-11-08T10:10:00.000Z`;
  }, [votingActiveAccount, siweNonce]);

  const handleAdvanceSiwe = () => {
    if (siweStep === 0) {
      setSiweNonce("8f4b2a9e");
      setSiweStep(1);
    } else if (siweStep === 1) {
      setSiweStep(2);
    } else if (siweStep === 2) {
      setSiweSignature("0x3a9f7e8b2c1d4a6f5e8b9a0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f1b");
      setSiweStep(3);
    } else if (siweStep === 3) {
      setSiweStep(4);
    } else if (siweStep === 4) {
      setSiweSessionActive(true);
      setSiweStep(5);
    }
  };

  const handleResetSiwe = () => {
    setSiweStep(0);
    setSiweNonce("");
    setSiweSignature("");
    setSiweSessionActive(false);
  };

  // ==========================================
  // Interactive Simulator 3: The Graph
  // ==========================================
  const [graphPreset, setGraphPreset] = useState("candidates");
  const [graphLatency, setGraphLatency] = useState(74);

  const graphQueries = {
    candidates: `query GetCandidatesLeaderboard {
  candidates(orderBy: voteCount, orderDirection: desc) {
    id
    name
    voteCount
  }
}`,
    voteCasts: `query GetRecentVoteCasts {
  voteCasts(first: 3, orderBy: timestamp, orderDirection: desc) {
    id
    voter
    candidateId
    transactionHash
    blockNumber
  }
}`,
    voterLookup: `query GetVoterHistory {
  voter(id: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045") {
    id
    hasVoted
    candidateVotedFor
    timestamp
  }
}`
  };

  const graphResponses = {
    candidates: JSON.stringify({
      data: {
        candidates: [
          { id: "1", name: "Alice", voteCount: "43" },
          { id: "2", name: "Bob", voteCount: "37" },
          { id: "3", name: "Charlie", voteCount: "29" }
        ]
      }
    }, null, 2),
    voteCasts: JSON.stringify({
      data: {
        voteCasts: [
          {
            id: "0x4f8a...-1",
            voter: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
            candidateId: "1",
            transactionHash: "0x4f8a9e2c1b7d5a...",
            blockNumber: "7221419"
          },
          {
            id: "0x7b2c...-0",
            voter: "0xab5801a7d398351b8be11c439e05c5b3259aec9b",
            candidateId: "2",
            transactionHash: "0x7b2c8a1e3f9d4b...",
            blockNumber: "7221412"
          }
        ]
      }
    }, null, 2),
    voterLookup: JSON.stringify({
      data: {
        voter: {
          id: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
          hasVoted: true,
          candidateVotedFor: "1",
          timestamp: "1731057600"
        }
      }
    }, null, 2)
  };

  const graphQueryText = graphQueries[graphPreset];
  const [graphResponseText, setGraphResponseText] = useState(graphResponses.candidates);

  const handleGraphPresetChange = (preset) => {
    setGraphPreset(preset);
    setGraphResponseText(graphResponses[preset]);
  };

  const handleExecuteGraphQuery = () => {
    setGraphLatency(Math.floor(55 + Math.random() * 40));
    setGraphResponseText(graphResponses[graphPreset]);
  };

  // ==========================================
  // Interactive Simulator 4: Storage Matrix
  // ==========================================
  const [selectedStorageKey, setSelectedStorageKey] = useState("votes");
  const storageEntities = STORAGE_ENTITIES;
  const activeStorageDetail = useMemo(() => {
    return storageEntities.find(s => s.key === selectedStorageKey);
  }, [selectedStorageKey, storageEntities]);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] pb-28 sm:pb-36">
      {/* TOP HEADER */}
      <div className="bg-white border-b border-[#e7e3da] sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#ea580c] mb-1">
                <Code className="w-4 h-4" />
                <span>BLOCKCHAIN TECHNOLOGY • UNIVERSITY-LEVEL CURRICULUM</span>
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#18181b]">
                Module 14: Full-Stack DApp Development
              </h1>
              <p className="text-xs sm:text-sm text-[#52525b] mt-0.5">
                React • Solidity • Viem • SIWE Authentication • The Graph • Production Web3 Architecture
              </p>
            </div>

            {/* TAB BUTTONS */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
              <button
                onClick={() => setActiveTab("interactive")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === "interactive"
                    ? "bg-[#ea580c] text-white shadow-xs"
                    : "text-[#27272a] hover:text-[#ea580c] hover:bg-white/60"
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>Simulators</span>
              </button>
              <button
                onClick={() => setActiveTab("theory")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === "theory"
                    ? "bg-[#ea580c] text-white shadow-xs"
                    : "text-[#27272a] hover:text-[#ea580c] hover:bg-white/60"
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Theory (Parts 1-15)</span>
              </button>
              <button
                onClick={() => setActiveTab("lab")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === "lab"
                    ? "bg-[#ea580c] text-white shadow-xs"
                    : "text-[#27272a] hover:text-[#ea580c] hover:bg-white/60"
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Voting DApp Lab</span>
              </button>
              <button
                onClick={() => setActiveTab("assessment")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === "assessment"
                    ? "bg-[#ea580c] text-white shadow-xs"
                    : "text-[#27272a] hover:text-[#ea580c] hover:bg-white/60"
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>Quiz &amp; Interviews</span>
              </button>
              <button
                onClick={() => setActiveTab("tracker")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === "tracker"
                    ? "bg-[#ea580c] text-white shadow-xs"
                    : "text-[#27272a] hover:text-[#ea580c] hover:bg-white/60"
                }`}
              >
                <ListChecks className="w-3.5 h-3.5" />
                <span>Tracker ({progressPercent}%)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODULE NAVIGATION BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <ModuleNav currentModuleId="dapp-development" />
      </div>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        ''' + interactive_jsx + '''

        {activeTab === "theory" && (
          ''' + theory_jsx + '''
        )}

        {activeTab === "lab" && (
          ''' + lab_jsx + '''
        )}

        {activeTab === "assessment" && (
          ''' + assessment_jsx + '''
        )}

        {activeTab === "tracker" && (
          ''' + tracker_jsx + '''
        )}
      </main>

      {/* BOTTOM PREV / NEXT NAVIGATION BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-[#e7e3da]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => navigate("/learning/blockchain/web3-libraries")}
            className="w-full sm:w-auto px-5 py-3 rounded-xl border border-[#e7e3da] bg-white hover:bg-[#f6f4ee] font-bold text-sm text-[#27272a] flex items-center justify-center gap-2 shadow-xs transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#ea580c]" />
            <span>Previous: Module 13 — Web3.js, Ethers.js &amp; Viem</span>
          </button>

          <button
            onClick={() => navigate("/learning/blockchain/security-vulnerabilities")}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#ea580c] hover:bg-[#c2410c] font-bold text-sm text-white flex items-center justify-center gap-2 shadow-sm transition-colors"
          >
            <span>Next: Module 15 — Smart Contract Security</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
'''

    out_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "src", "Componets", "BlockchainDAppDevelopment.jsx"))
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(header)
    print(f"Successfully generated {out_path} ({len(header)} characters).")

if __name__ == "__main__":
    assemble()
