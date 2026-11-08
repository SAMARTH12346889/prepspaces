# projectx/generator_mod13/assemble.py
"""
Assembles BlockchainWeb3Libraries.jsx from its sub-generators.
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

// 15 Senior Web3 Architect Interview Scenarios
const INTERVIEW_QUESTIONS = ''' + interview_json + ''';

const PRESET_SELECTORS = {
  "transfer(address,uint256)": "0xa9059cbb",
  "approve(address,uint256)": "0x095ea7b3",
  "balanceOf(address)": "0x70a08231",
  "totalSupply()": "0x18160ddd",
  "transferFrom(address,address,uint256)": "0x23b872dd",
  "ownerOf(uint256)": "0x6352211e"
};

export default function BlockchainWeb3Libraries() {
  const navigate = useNavigate();

  // Navigation tab state: interactive | theory | lab | assessment | tracker
  const [activeTab, setActiveTab] = useState("interactive");

  // Checklist State with LocalStorage Persistence
  const [checklistState, setChecklistState] = useState(() => {
    try {
      const saved = localStorage.getItem("prepspaces_blockchain_m13_progress");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("prepspaces_blockchain_m13_progress", JSON.stringify(checklistState));
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
  // Interactive Simulators State & Handlers
  // ==========================================
  const [simulatorTab, setSimulatorTab] = useState("selector");

  // Simulator 1: Selector & Calldata
  const [selectedPreset, setSelectedPreset] = useState("transfer");
  const [customSignature, setCustomSignature] = useState("transfer(address,uint256)");
  const [calldataParamAddress, setCalldataParamAddress] = useState("0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045");
  const [calldataParamAmount, setCalldataParamAmount] = useState("100");

  const handlePresetChange = (presetSig) => {
    setSelectedPreset(presetSig);
    setCustomSignature(presetSig);
  };

  const calculatedSelector = useMemo(() => {
    if (PRESET_SELECTORS[customSignature]) return PRESET_SELECTORS[customSignature];
    // Deterministic pseudo-selector calculation:
    let hash = 0;
    for (let i = 0; i < customSignature.length; i++) {
      hash = ((hash << 5) - hash) + customSignature.charCodeAt(i);
      hash |= 0;
    }
    return "0x" + Math.abs(hash).toString(16).padStart(8, "0").slice(0, 8);
  }, [customSignature]);

  const paddedAddress = useMemo(() => {
    const clean = calldataParamAddress.replace(/^0x/, "").toLowerCase();
    return clean.padStart(64, "0");
  }, [calldataParamAddress]);

  const paddedAmount = useMemo(() => {
    const num = parseFloat(calldataParamAmount) || 0;
    const rawWei = BigInt(Math.floor(num * 1e6)) * BigInt(1e12);
    return rawWei.toString(16).padStart(64, "0");
  }, [calldataParamAmount]);

  // Simulator 2: Code Comparison & Playground
  const [playgroundAction, setPlaygroundAction] = useState("balance");
  const [playgroundResult, setPlaygroundResult] = useState(null);
  const [playgroundLatency, setPlaygroundLatency] = useState(140);

  const executePlaygroundQuery = () => {
    setPlaygroundLatency(Math.floor(90 + Math.random() * 80));
    if (playgroundAction === "balance") {
      setPlaygroundResult(JSON.stringify({
        method: "eth_getBalance",
        address: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
        rawHex: "0x1b4f738096120000",
        formattedEth: "1.968 ETH",
        status: "200 OK",
        provider: "Alchemy Sepolia Node"
      }, null, 2));
    } else if (playgroundAction === "blockNumber") {
      setPlaygroundResult(JSON.stringify({
        method: "eth_blockNumber",
        headBlockHex: "0x6e2f41",
        headBlockDec: 7221057,
        finality: "Safe Head (64 Epoch confirmations)",
        timestamp: new Date().toISOString()
      }, null, 2));
    } else {
      setPlaygroundResult(JSON.stringify({
        method: "eth_call (totalSupply)",
        contract: "0x779877A7B0D9E8603169DdbD7836e478b4624789",
        rawResult: "0x000000000000000000000000000000000000000000000034f08b1f22e8400000",
        formattedTotalSupply: "1,000,000,000.0 LINK",
        gasConsumedSimulated: 2420
      }, null, 2));
    }
  };

  // Simulator 3: MetaMask Wallet State Machine
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [connectedWalletAccount, setConnectedWalletAccount] = useState("0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045");
  const [connectedChainId, setConnectedChainId] = useState("11155111");
  const [simulatedWalletError, setSimulatedWalletError] = useState(null);

  const handleWalletConnectToggle = () => {
    setIsWalletConnected(prev => !prev);
    setSimulatedWalletError(null);
  };

  const handleAccountSwitch = (newAcc) => {
    setConnectedWalletAccount(newAcc);
  };

  const handleChainSwitch = (newChain) => {
    setConnectedChainId(newChain);
  };

  const triggerWalletError = (code, message) => {
    setSimulatedWalletError({ code, message });
  };

  // Simulator 4: EIP-1559 Dynamic Gas Calculator
  const [gasLimitVal, setGasLimitVal] = useState(65000);
  const [baseFeeGwei, setBaseFeeGwei] = useState(25);
  const [priorityFeeGwei, setPriorityFeeGwei] = useState(2);
  const ethPriceUsd = 2800;

  const effectiveGasPrice = baseFeeGwei + priorityFeeGwei;
  const totalFeeEth = useMemo(() => {
    const feeWei = BigInt(gasLimitVal) * BigInt(effectiveGasPrice) * BigInt(1e9);
    return (Number(feeWei) / 1e18).toFixed(6);
  }, [gasLimitVal, effectiveGasPrice]);

  const totalFeeUsd = useMemo(() => {
    return (parseFloat(totalFeeEth) * ethPriceUsd).toFixed(2);
  }, [totalFeeEth, ethPriceUsd]);

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
                Module 13: Web3.js, Ethers.js &amp; Viem
              </h1>
              <p className="text-xs sm:text-sm text-[#52525b] mt-0.5">
                Client Architecture, JSON-RPC Opcodes, ABI Encoding, EIP-1193 Wallets, and Type-Safe dApp Engineering
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
                <span>Theory (Parts 1-16)</span>
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
                <span>React Lab &amp; Project</span>
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
        <ModuleNav currentModuleId="web3-libraries" />
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
            onClick={() => navigate("/learning/blockchain/tokens")}
            className="w-full sm:w-auto px-5 py-3 rounded-xl border border-[#e7e3da] bg-white hover:bg-[#f6f4ee] font-bold text-sm text-[#27272a] flex items-center justify-center gap-2 shadow-xs transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#ea580c]" />
            <span>Previous: Module 12 — ERC Token Standards</span>
          </button>

          <button
            onClick={() => navigate("/learning/blockchain/security-vulnerabilities")}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#ea580c] hover:bg-[#c2410c] font-bold text-sm text-white flex items-center justify-center gap-2 shadow-sm transition-colors"
          >
            <span>Next: Module 14 — Smart Contract Security</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
'''

    out_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "src", "Componets", "BlockchainWeb3Libraries.jsx"))
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(header)
    print(f"Successfully generated {out_path} ({len(header)} characters).")

if __name__ == "__main__":
    assemble()
