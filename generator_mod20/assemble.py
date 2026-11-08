# -*- coding: utf-8 -*-
"""
Assembly script to construct projectx/src/Componets/BlockchainOraclesChainlink.jsx
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

TEMPLATE = r'''// projectx/src/Componets/BlockchainOraclesChainlink.jsx
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

export default function BlockchainOraclesChainlink() {
  // Navigation Tabs
  const [activeTab, setActiveTab] = useState("theory");

  // Simulator 1 State: Collateral Valuation Sandbox
  const [selectedAsset, setSelectedAsset] = useState("ETH");
  const [assetPrice, setAssetPrice] = useState(3000);
  const [baseAssetPrice, setBaseAssetPrice] = useState(3000);
  const [depositAmount, setDepositAmount] = useState(2.0);
  const [borrowLtv, setBorrowLtv] = useState(70);
  const [borrowedDebt, setBorrowedDebt] = useState(2500);

  const handleSelectAsset = useCallback((asset) => {
    setSelectedAsset(asset);
    if (asset === "ETH") {
      setAssetPrice(3000);
      setBaseAssetPrice(3000);
      setDepositAmount(2.0);
      setBorrowedDebt(2500);
    } else if (asset === "BTC") {
      setAssetPrice(64000);
      setBaseAssetPrice(64000);
      setDepositAmount(0.5);
      setBorrowedDebt(15000);
    } else if (asset === "LINK") {
      setAssetPrice(18.5);
      setBaseAssetPrice(18.5);
      setDepositAmount(200);
      setBorrowedDebt(1800);
    }
  }, []);

  const collateralValUsd = depositAmount * assetPrice;
  const maxBorrowUsd = collateralValUsd * (borrowLtv / 100);
  const liquidationThreshold = 0.85;
  const healthFactor = borrowedDebt > 0
    ? (collateralValUsd * liquidationThreshold) / borrowedDebt
    : 999;
  const liquidationPrice = depositAmount > 0
    ? borrowedDebt / (depositAmount * liquidationThreshold)
    : 0;

  // Simulator 2 State: Median vs Mean Outlier Resilience
  const [nodeObservations, setNodeObservations] = useState([3000, 3002, 3005, 2998, 3001]);

  const handleNodeChange = useCallback((idx, val) => {
    setNodeObservations((prev) => {
      const next = [...prev];
      next[idx] = val;
      return next;
    });
  }, []);

  const resetNodes = useCallback(() => {
    setNodeObservations([3000, 3002, 3005, 2998, 3001]);
  }, []);

  const sortedObservations = useMemo(() => {
    return [...nodeObservations].sort((a, b) => a - b);
  }, [nodeObservations]);

  const calculatedMedian = sortedObservations[2];
  const calculatedMean = nodeObservations.reduce((a, b) => a + b, 0) / 5;
  const honestBaseline = 3001.25;
  const meanDistortion = Math.abs(((calculatedMean - honestBaseline) / honestBaseline) * 100);

  // Simulator 3 State: VRF v2.5 Verifiable Randomness & Mystery Box
  const [vrfRolling, setVrfRolling] = useState(false);
  const [lastVrfResult, setLastVrfResult] = useState(null);
  const [vrfStats, setVrfStats] = useState({ common: 0, rare: 0, epic: 0, legendary: 0 });
  const [totalVrfRolls, setTotalVrfRolls] = useState(0);

  const handleRollVrf = useCallback(() => {
    setVrfRolling(true);
    setTimeout(() => {
      // Simulate random word generation
      const randomHex = "0x" + Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join("");
      const roll = Math.floor(Math.random() * 100);
      let tier = "Common";
      if (roll < 60) tier = "Common";
      else if (roll < 85) tier = "Rare";
      else if (roll < 95) tier = "Epic";
      else tier = "Legendary";

      setLastVrfResult({ word: randomHex, roll, tier });
      setVrfStats((prev) => ({
        ...prev,
        [tier.toLowerCase()]: prev[tier.toLowerCase()] + 1
      }));
      setTotalVrfRolls((prev) => prev + 1);
      setVrfRolling(false);
    }, 600);
  }, []);

  // Simulator 4 State: Attack & Defense Sandbox
  const [attackMode, setAttackMode] = useState("flashloan");
  const [circuitStatus, setCircuitStatus] = useState(null);

  // Lab Steps Checklist (9 items)
  const [labStepsCompleted, setLabStepsCompleted] = useState({});

  const toggleLabStep = useCallback((id) => {
    setLabStepsCompleted((prev) => ({ ...prev, [id]: !prev[id] }));
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
      const saved = localStorage.getItem("prepspaces_blockchain_m20_progress");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleChecklistItem = useCallback((id) => {
    setCompletedChecklist((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem("prepspaces_blockchain_m20_progress", JSON.stringify(next));
      } catch {
        // ignore storage errors
      }
      return next;
    });
  }, []);

  const resetChecklist = useCallback(() => {
    setCompletedChecklist({});
    try {
      localStorage.removeItem("prepspaces_blockchain_m20_progress");
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
            Module 20
          </span>
          <span className="text-xs font-semibold text-neutral-600 truncate max-w-[200px] sm:max-w-xs">
            Oracles & Chainlink
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
            Oracle Labs
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 space-y-12">
        {/* Module Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
            <Cpu className="w-3.5 h-3.5" />
            <span>BLOCKCHAIN DEVELOPMENT • ADVANCED LEVEL • SMART CONTRACTS & WEB3 INFRASTRUCTURE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            Module 20 — Oracles & Chainlink
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl">
            A comprehensive, university-grade study of blockchain oracles, deterministic consensus boundaries, Chainlink Data Feeds, Verifiable Random Functions (VRF v2.5), Offchain Reporting (OCR), Chainlink Runtime Environment (CRE), and flash loan price manipulation defense. Deploy and audit live price consumer contracts on Ethereum Sepolia.
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

    print("Assembling BlockchainOraclesChainlink.jsx...")
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
        os.path.dirname(__file__), "..", "src", "Componets", "BlockchainOraclesChainlink.jsx"
    )
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"Successfully generated {out_path} ({len(content)} characters).")

if __name__ == "__main__":
    main()
