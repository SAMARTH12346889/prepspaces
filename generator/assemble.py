# projectx/generator/assemble.py
import json
import os

from gen_data import CHECKLIST_ITEMS, QUIZ_QUESTIONS, INTERVIEW_QUESTIONS
from gen_theory import get_theory_code
from gen_interactive import get_interactive_code
from gen_lab import get_lab_code
from gen_assessment import get_assessment_code
from gen_tracker import get_tracker_code

def main():
    print("Assembling BlockchainTokens.jsx...")

    checklist_json = json.dumps(CHECKLIST_ITEMS, indent=2)
    quiz_json = json.dumps(QUIZ_QUESTIONS, indent=2)
    interview_json = json.dumps(INTERVIEW_QUESTIONS, indent=2)

    theory_code = get_theory_code()
    interactive_code = get_interactive_code()
    lab_code = get_lab_code()
    assessment_code = get_assessment_code()
    tracker_code = get_tracker_code()

    header = """import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Coins,
  Shield,
  Cpu,
  Terminal,
  BookOpen,
  Check,
  ArrowRight,
  ArrowLeft,
  ListChecks,
  ExternalLink,
  Award
} from "lucide-react";
import ModuleNav from "./ModuleNav";

// 26 Persistent Checklist Items
const CHECKLIST_ITEMS = """ + checklist_json + """;

// 20 Multiple Choice Questions
const QUIZ_QUESTIONS = """ + quiz_json + """;

// 14 Senior Architect Interview Questions
const INTERVIEW_QUESTIONS = """ + interview_json + """;

const ERC20_ADDRESSES = {
  deployer: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  alice: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
  bob: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
  uniswap: "0x90F79bf6EB2c4f870365E785982E1f101E93b906"
};

export default function BlockchainTokens() {
  const navigate = useNavigate();

  // Tab State
  const [activeTab, setActiveTab] = useState("theory");
  const [simulatorTab, setSimulatorTab] = useState("erc20");

  // Checklist Persistence
  const [completedChecklist, setCompletedChecklist] = useState(() => {
    try {
      const saved = localStorage.getItem("prepspaces_blockchain_m12_progress");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        "prepspaces_blockchain_m12_progress",
        JSON.stringify(completedChecklist)
      );
    } catch {
      // Ignore write errors
    }
  }, [completedChecklist]);

  const toggleChecklistItem = (idx) => {
    setCompletedChecklist((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const completedCount = useMemo(() => {
    return Object.values(completedChecklist).filter(Boolean).length;
  }, [completedChecklist]);

  const completionPercentage = Math.round(
    (completedCount / CHECKLIST_ITEMS.length) * 100
  );

  // SIMULATOR 1: ERC-20 State
  const [erc20Balances, setErc20Balances] = useState({
    deployer: 500000,
    alice: 25000,
    bob: 5000,
    uniswap: 0
  });
  const [erc20Allowances, setErc20Allowances] = useState({
    alice: { uniswap: 10000 },
    bob: { uniswap: 0 },
    deployer: { uniswap: 0 }
  });
  const erc20Cap = 1000000;
  const erc20Supply = useMemo(() => {
    return Object.values(erc20Balances).reduce((a, b) => a + b, 0);
  }, [erc20Balances]);

  const [erc20Caller, setErc20Caller] = useState("alice");
  const [erc20Operation, setErc20Operation] = useState("transfer");
  const [erc20ToAccount, setErc20ToAccount] = useState("bob");
  const [erc20FromAccount, setErc20FromAccount] = useState("alice");
  const [erc20SpenderAccount, setErc20SpenderAccount] = useState("uniswap");
  const [erc20Amount, setErc20Amount] = useState(1000);
  const [erc20Status, setErc20Status] = useState(null);
  const [erc20Logs, setErc20Logs] = useState([
    {
      event: "Transfer",
      details: "from: 0x0 → to: deployer | amount: 500,000 PREP",
      time: "Initial Deployment"
    },
    {
      event: "Transfer",
      details: "from: deployer → to: alice | amount: 25,000 PREP",
      time: "Grant Distribution"
    },
    {
      event: "Approval",
      details: "owner: alice → spender: uniswap | amount: 10,000 PREP",
      time: "DEX Allowance Setup"
    }
  ]);

  const handleErc20Execute = () => {
    const amt = Number(erc20Amount);
    if (!amt || amt <= 0) {
      setErc20Status({ type: "error", message: "Error: Amount must be greater than zero." });
      return;
    }

    if (erc20Operation === "transfer") {
      if ((erc20Balances[erc20Caller] || 0) < amt) {
        setErc20Status({ type: "error", message: `Revert: Caller ${erc20Caller} has insufficient balance.` });
        return;
      }
      setErc20Balances((prev) => ({
        ...prev,
        [erc20Caller]: prev[erc20Caller] - amt,
        [erc20ToAccount]: (prev[erc20ToAccount] || 0) + amt
      }));
      setErc20Logs((prev) => [
        {
          event: "Transfer",
          details: `from: ${erc20Caller} → to: ${erc20ToAccount} | amount: ${amt.toLocaleString()} PREP`,
          time: new Date().toLocaleTimeString()
        },
        ...prev
      ]);
      setErc20Status({ type: "success", message: `Success: Transferred ${amt.toLocaleString()} PREP from ${erc20Caller} to ${erc20ToAccount}.` });
    } else if (erc20Operation === "approve") {
      setErc20Allowances((prev) => ({
        ...prev,
        [erc20Caller]: {
          ...(prev[erc20Caller] || {}),
          [erc20SpenderAccount]: amt
        }
      }));
      setErc20Logs((prev) => [
        {
          event: "Approval",
          details: `owner: ${erc20Caller} → spender: ${erc20SpenderAccount} | allowance: ${amt.toLocaleString()} PREP`,
          time: new Date().toLocaleTimeString()
        },
        ...prev
      ]);
      setErc20Status({ type: "success", message: `Success: Approved ${erc20SpenderAccount} to spend ${amt.toLocaleString()} PREP on behalf of ${erc20Caller}.` });
    } else if (erc20Operation === "transferFrom") {
      const currentAllowance = erc20Allowances[erc20FromAccount]?.[erc20Caller] || 0;
      if (currentAllowance < amt) {
        setErc20Status({ type: "error", message: `Revert: Insufficient allowance (${currentAllowance.toLocaleString()} < ${amt.toLocaleString()}).` });
        return;
      }
      if ((erc20Balances[erc20FromAccount] || 0) < amt) {
        setErc20Status({ type: "error", message: `Revert: Account ${erc20FromAccount} has insufficient balance (${erc20Balances[erc20FromAccount]} PREP).` });
        return;
      }
      setErc20Balances((prev) => ({
        ...prev,
        [erc20FromAccount]: prev[erc20FromAccount] - amt,
        [erc20ToAccount]: (prev[erc20ToAccount] || 0) + amt
      }));
      setErc20Allowances((prev) => ({
        ...prev,
        [erc20FromAccount]: {
          ...prev[erc20FromAccount],
          [erc20Caller]: currentAllowance - amt
        }
      }));
      setErc20Logs((prev) => [
        {
          event: "Transfer",
          details: `via transferFrom by ${erc20Caller} | from: ${erc20FromAccount} → to: ${erc20ToAccount} | amt: ${amt.toLocaleString()}`,
          time: new Date().toLocaleTimeString()
        },
        ...prev
      ]);
      setErc20Status({ type: "success", message: `Success: transferFrom executed. Remaining allowance: ${(currentAllowance - amt).toLocaleString()} PREP.` });
    } else if (erc20Operation === "mint") {
      if (erc20Caller !== "deployer") {
        setErc20Status({ type: "error", message: "Revert: OwnableUnauthorizedAccount(msg.sender) — Only deployer can mint." });
        return;
      }
      if (erc20Supply + amt > erc20Cap) {
        setErc20Status({ type: "error", message: `Revert: CapExceeded — Minting ${amt.toLocaleString()} would exceed MAX_SUPPLY (${erc20Cap.toLocaleString()} PREP).` });
        return;
      }
      setErc20Balances((prev) => ({
        ...prev,
        [erc20ToAccount]: (prev[erc20ToAccount] || 0) + amt
      }));
      setErc20Logs((prev) => [
        {
          event: "Transfer",
          details: `from: 0x0 (Mint) → to: ${erc20ToAccount} | amount: ${amt.toLocaleString()} PREP`,
          time: new Date().toLocaleTimeString()
        },
        ...prev
      ]);
      setErc20Status({ type: "success", message: `Success: Minted ${amt.toLocaleString()} PREP to ${erc20ToAccount}. New supply: ${(erc20Supply + amt).toLocaleString()} PREP.` });
    } else if (erc20Operation === "burn") {
      if ((erc20Balances[erc20Caller] || 0) < amt) {
        setErc20Status({ type: "error", message: `Revert: Burn exceeds balance (${erc20Balances[erc20Caller] || 0} PREP).` });
        return;
      }
      setErc20Balances((prev) => ({
        ...prev,
        [erc20Caller]: prev[erc20Caller] - amt
      }));
      setErc20Logs((prev) => [
        {
          event: "Transfer",
          details: `from: ${erc20Caller} → to: 0x0 (Burn) | amount: ${amt.toLocaleString()} PREP`,
          time: new Date().toLocaleTimeString()
        },
        ...prev
      ]);
      setErc20Status({ type: "success", message: `Success: Burned ${amt.toLocaleString()} PREP from ${erc20Caller}. Total supply reduced to ${(erc20Supply - amt).toLocaleString()} PREP.` });
    }
  };

  // SIMULATOR 2: ERC-721 NFT State
  const [nftTokens, setNftTokens] = useState([
    {
      id: 1,
      name: "Genesis Auditor #1",
      owner: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
      rarity: "Legendary",
      trait: "Formal Verification",
      score: 98,
      tokenUri: "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/1.json"
    },
    {
      id: 2,
      name: "EVM Internals Master #2",
      owner: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
      rarity: "Epic",
      trait: "Gas Golfing & Assembly",
      score: 91,
      tokenUri: "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/2.json"
    }
  ]);
  const [selectedNft, setSelectedNft] = useState(nftTokens[0]);
  const [nftMintRecipient, setNftMintRecipient] = useState("0x70997970C51812dc3A010C7d01b50e0d17dc79C8");
  const [nftMintName, setNftMintName] = useState("DeFi Security Specialist");
  const [nftMintRarity, setNftMintRarity] = useState("Epic");
  const [nftMintTrait, setNftMintTrait] = useState("Reentrancy Audit");
  const [nftSimulateUnsafeReceiver, setNftSimulateUnsafeReceiver] = useState(false);
  const [nftTransferStatus, setNftTransferStatus] = useState(null);

  const handleNftMint = () => {
    const newId = nftTokens.length + 1;
    const newNft = {
      id: newId,
      name: `${nftMintName} #${newId}`,
      owner: nftMintRecipient,
      rarity: nftMintRarity,
      trait: nftMintTrait,
      score: Math.floor(Math.random() * 15) + 85,
      tokenUri: `ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/${newId}}.json`
    };
    setNftTokens((prev) => [...prev, newNft]);
    setSelectedNft(newNft);
  };

  const handleNftSafeTransfer = () => {
    if (nftSimulateUnsafeReceiver) {
      setNftTransferStatus({
        success: false,
        msg: "REVERTED: ERC721: transfer to non ERC721Receiver implementer! Target contract did not return magic bytes4 0x150b7a02."
      });
    } else {
      setNftTransferStatus({
        success: true,
        msg: `SUCCESS: safeTransferFrom completed. onERC721Received returned 0x150b7a02. Token #${selectedNft.id} transferred.`
      });
    }
  };

  // SIMULATOR 3: ERC-1155 State
  const erc1155Items = [
    { id: 1, name: "Prep Gold Coins", type: "Fungible", supply: 100000 },
    { id: 2, name: "Mana Elixir", type: "Fungible", supply: 500 },
    { id: 1001, name: "Auditor God-Blade", type: "Non-Fungible", supply: 1 },
    { id: 1002, name: "Reentrancy Shield", type: "Non-Fungible", supply: 1 }
  ];
  const [erc1155Balances, setErc1155Balances] = useState({
    alice: { 1: 5000, 2: 10, 1001: 1, 1002: 0 },
    bob: { 1: 1200, 2: 2, 1001: 0, 1002: 1 },
    treasury: { 1: 93800, 2: 488, 1001: 0, 1002: 0 }
  });
  const [erc1155Sender, setErc1155Sender] = useState("alice");
  const [erc1155Recipient, setErc1155Recipient] = useState("bob");
  const [batchGoldAmt, setBatchGoldAmt] = useState(250);
  const [batchPotionAmt, setBatchPotionAmt] = useState(2);
  const [batchStatus, setBatchStatus] = useState(null);

  const handleBatchTransfer = () => {
    const s = erc1155Sender;
    const r = erc1155Recipient;
    if (s === r) {
      setBatchStatus({ success: false, msg: "Sender and recipient must be distinct accounts." });
      return;
    }
    const goldBal = erc1155Balances[s]?.[1] || 0;
    const potionBal = erc1155Balances[s]?.[2] || 0;
    if (goldBal < batchGoldAmt || potionBal < batchPotionAmt) {
      setBatchStatus({ success: false, msg: `Revert: Insufficient balance for batch items (Gold: ${goldBal}, Potions: ${potionBal}).` });
      return;
    }

    setErc1155Balances((prev) => ({
      ...prev,
      [s]: {
        ...prev[s],
        1: prev[s][1] - batchGoldAmt,
        2: prev[s][2] - batchPotionAmt
      },
      [r]: {
        ...prev[r],
        1: (prev[r][1] || 0) + batchGoldAmt,
        2: (prev[r][2] || 0) + batchPotionAmt
      }
    }));
    setBatchStatus({
      success: true,
      msg: `Success: safeBatchTransferFrom executed! Moved ${batchGoldAmt} Gold + ${batchPotionAmt} Potions in 1 single atomic transaction (51,800 gas).`
    });
  };

  // SIMULATOR 4: Vesting State
  const vestingTotal = 1000000;
  const vestingDuration = 48;
  const vestingCliff = 12;
  const [vestingElapsed, setVestingElapsed] = useState(18);

  const vestedTokens = useMemo(() => {
    if (vestingElapsed < vestingCliff) return 0;
    if (vestingElapsed >= vestingDuration) return vestingTotal;
    return Math.floor(vestingTotal * (vestingElapsed / vestingDuration));
  }, [vestingElapsed]);

  // Quiz State
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizScore, setQuizScore] = useState(0);

  const handleSelectAnswer = (qId, optionIdx) => {
    if (selectedAnswers[qId] !== undefined) return;
    const isCorrect = optionIdx === QUIZ_QUESTIONS.find((q) => q.id === qId)?.answer;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
    if (isCorrect) {
      setQuizScore((prev) => prev + 1);
    }
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setQuizScore(0);
  };

  // Interview Accordion State
  const [expandedInterview, setExpandedInterview] = useState(null);

  const checklistItems = CHECKLIST_ITEMS;
  const quizQuestions = QUIZ_QUESTIONS;
  const interviewQuestions = INTERVIEW_QUESTIONS;
  const erc20Addresses = ERC20_ADDRESSES;

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-[#f97316] selection:text-white pb-28 sm:pb-36">
      {/* Top Contextual Navigation Bar */}
      <ModuleNav track="blockchain" currentModuleId="tokens" />

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-6">
        <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-96 h-96 rounded-full bg-gradient-to-br from-orange-200/40 via-amber-100/20 to-transparent blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 px-3 py-1 text-xs font-bold text-[#ea580c] border border-orange-500/20 font-mono">
                <Coins size={13} className="text-[#ea580c]" />
                <span>MODULE 12 • ADVANCED CORE CURRICULUM</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-600 border border-stone-200">
                <Shield size={12} className="text-stone-500" />
                <span>ERC-20 • ERC-721 • ERC-1155 • Tokenomics</span>
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#18181b]">
                ERC Token Standards &amp; Architecture
              </h1>
              <p className="text-xs sm:text-base text-stone-600 max-w-4xl leading-relaxed">
                Master the architectural specifications, internal mapping state, allowance mechanisms, NFT metadata standards, multi-token batch operations, OpenZeppelin implementations, and economic vesting schedules governing the EVM token ecosystem.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-4 border-t border-stone-100 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200">
                <span className="text-stone-500 block text-[10px] uppercase">Curriculum Scope</span>
                <span className="font-bold text-stone-900 text-sm">19 Exhaustive Parts</span>
              </div>
              <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200">
                <span className="text-stone-500 block text-[10px] uppercase">Interactive Tools</span>
                <span className="font-bold text-stone-900 text-sm">4 Live Simulators</span>
              </div>
              <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200">
                <span className="text-stone-500 block text-[10px] uppercase">Knowledge Check</span>
                <span className="font-bold text-stone-900 text-sm">20 MCQs + 14 Scenarios</span>
              </div>
              <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200">
                <span className="text-stone-500 block text-[10px] uppercase">Mastery Tracker</span>
                <span className="font-bold text-orange-600 text-sm">
                  {completedCount} / {CHECKLIST_ITEMS.length} Outcomes ({completionPercentage}%)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation Controls */}
        <div className="mt-8 flex flex-wrap gap-2 border-b border-[#e7e3da] pb-3">
          {[
            { id: "theory", label: "Academic Curriculum (Parts 1-15)", icon: BookOpen },
            { id: "interactive", label: "Interactive Simulators (4 Engines)", icon: Cpu },
            { id: "lab", label: "Practical Lab & Project (Parts 16-17)", icon: Terminal },
            { id: "quiz", label: "Assessment & Interviews (Part 18)", icon: Award },
            { id: "tracker", label: "Competency Tracker & Summary (Part 19)", icon: ListChecks }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                  isActive
                    ? "bg-[#ea580c] text-white shadow-xs"
                    : "bg-white text-stone-600 hover:text-stone-900 hover:bg-stone-50 border border-[#e7e3da]"
                }`}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Tab Content Display */}
        <div className="mt-8">
""" + theory_code + interactive_code + lab_code + assessment_code + tracker_code + """
        </div>

        {/* Bottom Progression & Navigation Bar */}
        <div className="mt-12 rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => navigate("/learning/blockchain/wallets-keys")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-stone-200 hover:border-stone-300 bg-stone-50 text-stone-700 text-xs font-bold transition cursor-pointer"
          >
            <ArrowLeft size={14} />
            <span>Previous: 11. Wallets, Keys &amp; Transaction Signing</span>
          </button>

          <button
            onClick={() => navigate("/learning/blockchain/security-vulnerabilities")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#f97316] text-white text-xs font-bold hover:bg-[#ea580c] transition cursor-pointer shadow-md"
          >
            <span>Next: 13. Smart Contract Security &amp; Common Vulnerabilities</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
"""

    target_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'src', 'Componets', 'BlockchainTokens.jsx'))
    with open(target_path, 'w', encoding='utf-8') as f:
        f.write(header)

    print(f"BlockchainTokens.jsx written successfully! Length: {len(header)} chars.")

if __name__ == '__main__':
    main()
