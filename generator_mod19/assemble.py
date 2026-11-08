# -*- coding: utf-8 -*-
"""
Assembly script to construct projectx/src/Componets/BlockchainLayer2Scaling.jsx
Imports modules:
- gen_data.py
- gen_interactive.py
- gen_theory.py
- gen_lab.py
- gen_assessment.py
- gen_tracker.py
"""

import os
import json
from gen_data import CHECKLIST_ITEMS, QUIZ_QUESTIONS, INTERVIEW_QUESTIONS, NUMERICAL_PROBLEMS
from gen_interactive import generate_interactive_simulators
from gen_theory import generate_theory_sections
from gen_lab import generate_lab_and_challenges
from gen_assessment import generate_assessment_sections
from gen_tracker import generate_tracker_and_footer

TEMPLATE = r'''// projectx/src/Componets/BlockchainLayer2Scaling.jsx
import React, { useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  ChevronDown,
  CheckCircle2,
  ExternalLink,
  Cpu
} from "lucide-react";

// Data Constants
const CHECKLIST_ITEMS = __DATA_CHECKLIST__;
const QUIZ_QUESTIONS = __DATA_QUIZ__;
const INTERVIEW_QUESTIONS = __DATA_INTERVIEWS__;
const NUMERICAL_PROBLEMS = __DATA_NUMERICAL__;

export default function BlockchainLayer2Scaling() {
  // Navigation Tabs
  const [activeTab, setActiveTab] = useState("theory");

  // Simulator 1 State: Rollup Fee & Economics
  const [l1BaseFee, setL1BaseFee] = useState(30);
  const [batchTxCount, setBatchTxCount] = useState(1000);
  const [txCompressedBytes, setTxCompressedBytes] = useState(25);
  const [postingMode, setPostingMode] = useState("blobs"); // "blobs" | "calldata"
  const ethPrice = 3200;

  const totalRawBytes = batchTxCount * txCompressedBytes;
  const totalBatchGas = postingMode === "blobs"
    ? totalRawBytes * 1 + 50000
    : totalRawBytes * 16 + 50000;

  const totalBatchCostEth = postingMode === "blobs"
    ? (totalRawBytes * 1 * 1e-9) + (50000 * l1BaseFee * 1e-9)
    : totalBatchGas * l1BaseFee * 1e-9;

  const costPerTxEth = totalBatchCostEth / batchTxCount;
  const costPerTxUsd = costPerTxEth * ethPrice;
  const theoreticalTps = Math.min(3500, Math.floor(((3 * 131072) / txCompressedBytes) / 12));
  const calldataCostEth = (totalRawBytes * 16 + 50000) * l1BaseFee * 1e-9;
  const blobSavingsPercent = Math.max(0, ((calldataCostEth - totalBatchCostEth) / calldataCostEth) * 100);

  // Simulator 2 State: Interactive Bisection Dispute Game
  const [bisectionRound, setBisectionRound] = useState(0);
  const [bisectionRange, setBisectionRange] = useState([0, 64]);
  const [disputeFinished, setDisputeFinished] = useState(false);

  const stepBisection = useCallback(() => {
    if (disputeFinished) return;
    const [low, high] = bisectionRange;
    if (high - low <= 1) return;

    const mid = Math.floor((low + high) / 2);
    // Fault is at Step 42
    if (mid >= 42) {
      setBisectionRange([low, mid]);
    } else {
      setBisectionRange([mid, high]);
    }
    setBisectionRound((prev) => prev + 1);
  }, [bisectionRange, disputeFinished]);

  const executeOneStepProof = useCallback(() => {
    setDisputeFinished(true);
  }, []);

  const resetDisputeGame = useCallback(() => {
    setBisectionRound(0);
    setBisectionRange([0, 64]);
    setDisputeFinished(false);
  }, []);

  // Simulator 4 State: Cross-Chain Bridge Invariant Engine
  const [bridgeL1Vault, setBridgeL1Vault] = useState(100);
  const [bridgeL2Minted, setBridgeL2Minted] = useState(100);
  const [bridgeExploitTriggered, setBridgeExploitTriggered] = useState(false);

  const handleBridgeDeposit = useCallback((amt) => {
    setBridgeL1Vault((prev) => prev + amt);
    setBridgeL2Minted((prev) => prev + amt);
  }, []);

  const handleBridgeWithdraw = useCallback((amt) => {
    if (bridgeL2Minted < amt) return;
    setBridgeL1Vault((prev) => prev - amt);
    setBridgeL2Minted((prev) => prev - amt);
  }, [bridgeL2Minted]);

  const handleBridgeAttack = useCallback(() => {
    // Attacker tries to unbacked mint 50 WETH without locking on L1
    // Invariant check L2_Minted + 50 <= L1_Vault fails (150 <= 100)
    setBridgeExploitTriggered(true);
  }, []);

  const resetBridge = useCallback(() => {
    setBridgeL1Vault(100);
    setBridgeL2Minted(100);
    setBridgeExploitTriggered(false);
  }, []);

  // Numerical Problems Accordion
  const [openProblemIndex, setOpenProblemIndex] = useState(0);

  // Senior Interview Questions State
  const [interviewFilter, setInterviewFilter] = useState("all");
  const [expandedInterviewId, setExpandedInterviewId] = useState(null);

  const filteredInterviews = useMemo(() => {
    if (interviewFilter === "all") return INTERVIEW_QUESTIONS;
    return INTERVIEW_QUESTIONS.filter((q) => q.context === interviewFilter);
  }, [interviewFilter]);

  // Quiz State
  const [userQuizAnswers, setUserQuizAnswers] = useState({});

  const handleQuizOptionSelect = useCallback((qIndex, optIndex) => {
    setUserQuizAnswers((prev) => {
      if (prev[qIndex] !== undefined) return prev;
      return { ...prev, [qIndex]: optIndex };
    });
  }, []);

  const resetQuiz = useCallback(() => {
    setUserQuizAnswers({});
  }, []);

  const quizScore = useMemo(() => {
    let score = 0;
    QUIZ_QUESTIONS.forEach((q, idx) => {
      if (userQuizAnswers[idx] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  }, [userQuizAnswers]);

  // Checklist State (Persisted in localStorage)
  const [completedChecklist, setCompletedChecklist] = useState(() => {
    try {
      const saved = localStorage.getItem("prepspaces_blockchain_m19_progress");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleChecklistItem = useCallback((id) => {
    setCompletedChecklist((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem("prepspaces_blockchain_m19_progress", JSON.stringify(next));
      } catch {
        // ignore storage errors
      }
      return next;
    });
  }, []);

  const resetChecklist = useCallback(() => {
    setCompletedChecklist({});
    try {
      localStorage.removeItem("prepspaces_blockchain_m19_progress");
    } catch {
      // ignore storage errors
    }
  }, []);

  const completedChecklistCount = useMemo(() => {
    return Object.values(completedChecklist).filter(Boolean).length;
  }, [completedChecklist]);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-neutral-900 pb-28 sm:pb-36 selection:bg-amber-200">
      {/* Top Banner Navigation */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#e7e3da] px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            to="/learning/blockchain"
            className="text-xs font-bold text-neutral-500 hover:text-neutral-900 flex items-center gap-1 transition"
          >
            &larr; <span className="hidden sm:inline">Blockchain Engineering</span>
          </Link>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
            Module 19
          </span>
          <span className="text-xs font-semibold text-neutral-600 truncate max-w-[200px] sm:max-w-xs">
            Layer 2 & Blockchain Scaling
          </span>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 bg-[#f6f4ee] p-1 rounded-xl border border-[#e7e3da] text-xs font-bold">
          <button
            onClick={() => setActiveTab("theory")}
            className={`px-3 py-1.5 rounded-lg transition ${
              activeTab === "theory"
                ? "bg-white text-neutral-900 shadow-sm"
                : "text-neutral-600 hover:text-neutral-900"
            }`}
          >
            Curriculum & Labs
          </button>
          <button
            onClick={() => setActiveTab("simulators")}
            className={`px-3 py-1.5 rounded-lg transition ${
              activeTab === "simulators"
                ? "bg-white text-neutral-900 shadow-sm"
                : "text-neutral-600 hover:text-neutral-900"
            }`}
          >
            Scaling Labs
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 space-y-12">
        {/* Module Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
            <Cpu className="w-3.5 h-3.5" />
            <span>ADVANCED BLOCKCHAIN ENGINEERING • ETHEREUM SCALING & L2 TRACK</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            Module 19 — Layer 2 & Blockchain Scaling
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl">
            A comprehensive, university-grade study of Layer 2 architecture, rollup execution models, fraud vs. validity proofs, EIP-4844 blobs, sequencer economics, and cross-chain bridge invariants. Deploy production contracts on Arbitrum Nitro and build a complete mini rollup simulation.
          </p>
        </div>

        {activeTab === "simulators" ? (
          <div>
            __INTERACTIVE_SIMULATORS__
          </div>
        ) : (
          <div className="space-y-16">
            __THEORY_SECTIONS__
            __INTERACTIVE_SIMULATORS__
            __LAB_AND_CHALLENGES__
            __ASSESSMENT_SECTIONS__
            __TRACKER_AND_FOOTER__
          </div>
        )}
      </main>
    </div>
  );
}
'''

def main():
    print("Reading data definitions...")
    checklist_json = json.dumps(CHECKLIST_ITEMS, indent=2)
    quiz_json = json.dumps(QUIZ_QUESTIONS, indent=2)
    interview_json = json.dumps(INTERVIEW_QUESTIONS, indent=2)
    numerical_json = json.dumps(NUMERICAL_PROBLEMS, indent=2)

    print("Generating code sections...")
    interactive_sims = generate_interactive_simulators()
    theory_sec = generate_theory_sections()
    lab_sec = generate_lab_and_challenges()
    assessment_sec = generate_assessment_sections()
    tracker_sec = generate_tracker_and_footer()

    print("Assembling BlockchainLayer2Scaling.jsx...")
    content = TEMPLATE
    content = content.replace("__DATA_CHECKLIST__", checklist_json)
    content = content.replace("__DATA_QUIZ__", quiz_json)
    content = content.replace("__DATA_INTERVIEWS__", interview_json)
    content = content.replace("__DATA_NUMERICAL__", numerical_json)

    content = content.replace("__INTERACTIVE_SIMULATORS__", interactive_sims)
    content = content.replace("__THEORY_SECTIONS__", theory_sec)
    content = content.replace("__LAB_AND_CHALLENGES__", lab_sec)
    content = content.replace("__ASSESSMENT_SECTIONS__", assessment_sec)
    content = content.replace("__TRACKER_AND_FOOTER__", tracker_sec)

    out_path = os.path.join(
        os.path.dirname(__file__), "..", "src", "Componets", "BlockchainLayer2Scaling.jsx"
    )
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"Successfully generated {out_path} ({len(content)} characters).")

if __name__ == "__main__":
    main()
