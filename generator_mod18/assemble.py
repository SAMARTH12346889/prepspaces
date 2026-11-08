# -*- coding: utf-8 -*-
"""
Assembly script to construct projectx/src/Componets/BlockchainSecurityAuditing.jsx
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
from gen_data import CHECKLIST_ITEMS, QUIZ_QUESTIONS, INTERVIEW_QUESTIONS, AUDIT_FINDINGS
from gen_interactive import generate_interactive_simulators
from gen_theory import generate_theory_sections
from gen_lab import generate_lab_and_challenges
from gen_assessment import generate_assessment_sections
from gen_tracker import generate_tracker_and_footer

TEMPLATE = r'''// projectx/src/Componets/BlockchainSecurityAuditing.jsx
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRightLeft,
  ChevronDown,
  CheckCircle2,
  ExternalLink,
  Cpu
} from "lucide-react";

// Data Constants
const CHECKLIST_ITEMS = __DATA_CHECKLIST__;
const QUIZ_QUESTIONS = __DATA_QUIZ__;
const INTERVIEW_QUESTIONS = __DATA_INTERVIEWS__;
const AUDIT_FINDINGS = __DATA_FINDINGS__;

export default function BlockchainSecurityAuditing() {
  // Navigation Tabs
  const [activeTab, setActiveTab] = useState("theory");

  // Simulator 1 State: Reentrancy & CEI Call Stack Sandbox
  const [reentrancyMode, setReentrancyMode] = useState("vulnerable");
  const [reentrancyStep, setReentrancyStep] = useState(0);
  const [simVaultBalance, setSimVaultBalance] = useState(10.0);
  const [simAttackerBalance, setSimAttackerBalance] = useState(1.0);
  const [simAttackerRecordedBalance, setSimAttackerRecordedBalance] = useState(1.0);
  const [reentrancyStack, setReentrancyStack] = useState([]);
  const [reentrancyFinished, setReentrancyFinished] = useState(false);

  const handleResetReentrancy = useCallback(() => {
    setReentrancyStep(0);
    setSimVaultBalance(10.0);
    setSimAttackerBalance(1.0);
    setSimAttackerRecordedBalance(1.0);
    setReentrancyStack([]);
    setReentrancyFinished(false);
  }, []);

  const handleStepReentrancy = useCallback(() => {
    if (reentrancyFinished) return;

    if (reentrancyMode === "secure") {
      // Secure mode: CEI sets balance to 0 first, reentrancy fails immediately
      if (reentrancyStep === 0) {
        setSimAttackerRecordedBalance(0);
        setReentrancyStack([
          {
            type: "normal",
            action: "withdraw() invoked by Attacker",
            caller: "Attacker",
            target: "Vault",
            detail: "Checks passed (balance == 1.0 ETH). Effect: balances[attacker] set to 0."
          },
          {
            type: "normal",
            action: "External transfer: 1.0 ETH to Attacker",
            caller: "Vault",
            target: "Attacker.receive()",
            detail: "Interaction executed after storage update."
          }
        ]);
        setSimVaultBalance(9.0);
        setSimAttackerBalance(2.0);
        setReentrancyStep(1);
      } else if (reentrancyStep === 1) {
        // Attacker callback tries to reenter
        setReentrancyStack((prev) => [
          ...prev,
          {
            type: "revert",
            action: "Attacker.receive() attempts recursive withdraw()",
            caller: "Attacker",
            target: "Vault",
            detail: "REVERT: require(balances[msg.sender] > 0) failed! (Balance is 0). ReentrancyGuard also active."
          }
        ]);
        setReentrancyFinished(true);
      }
    } else {
      // Vulnerable mode: transfers ETH before updating balance
      const nextStep = reentrancyStep + 1;
      setReentrancyStep(nextStep);

      if (simVaultBalance > 0) {
        setSimVaultBalance((prev) => Math.max(0, prev - 1.0));
        setSimAttackerBalance((prev) => prev + 1.0);
        setReentrancyStack((prev) => [
          ...prev,
          {
            type: "exploit",
            action: `Frame #${nextStep}: Recursive withdraw() loop`,
            caller: "Attacker.fallback()",
            target: "Vault.withdraw()",
            detail: `Vault sent 1.0 ETH. Stored balance still shows ${simAttackerRecordedBalance} ETH because balance update line is deferred!`
          }
        ]);

        if (simVaultBalance <= 1.0) {
          setReentrancyFinished(true);
        }
      }
    }
  }, [reentrancyFinished, reentrancyMode, reentrancyStep, simVaultBalance, simAttackerRecordedBalance]);

  // Simulator 2 State: Flash Loan Price Manipulation
  const [flashLoanAmount, setFlashLoanAmount] = useState(10000000); // 10M
  const [ammDepth, setAmmDepth] = useState(2000000); // 2M
  const [oracleType, setOracleType] = useState("spot");

  const calculatedFlashAttack = useMemo(() => {
    const loanFee = flashLoanAmount * 0.0005; // 0.05%
    // Price spike is a function of trade size relative to pool depth
    const priceRatio = 1 + (flashLoanAmount / ammDepth) * 0.5;
    const basePrice = 10.0;
    
    let reportedPrice = basePrice;
    let priceSpikePct = 0;

    if (oracleType === "spot") {
      reportedPrice = basePrice * priceRatio;
      priceSpikePct = (priceRatio - 1) * 100;
    } else {
      // 1-Hour Chainlink TWAP dampens instantaneous spike to ~1.5%
      reportedPrice = basePrice * 1.015;
      priceSpikePct = 1.5;
    }

    // Attacker deposits 100,000 units of asset as collateral
    const collateralUnits = 100000;
    const collateralValuation = collateralUnits * reportedPrice;
    // 75% LTV borrowing
    const debtExtracted = collateralValuation * 0.75;
    
    // Net profit = debtExtracted - originalCollateralCost - flashLoanFee
    const collateralCost = collateralUnits * basePrice;
    let netProfit = 0;
    if (oracleType === "spot") {
      netProfit = Math.max(0, debtExtracted - collateralCost - loanFee);
    } else {
      netProfit = debtExtracted - collateralCost - loanFee; // Negative profit
    }

    return {
      priceSpikePct,
      reportedPrice,
      debtExtracted,
      netProfit
    };
  }, [flashLoanAmount, ammDepth, oracleType]);

  // Simulator 3 State: Proxy Storage Collision
  const [proxyStorageMode, setProxyStorageMode] = useState("unstructured");
  const [simLogicVariable, setSimLogicVariable] = useState(5);

  // Simulator 4 State: Slither & Invariant Terminal
  const [auditTargetContract, setAuditTargetContract] = useState("VulnerableVault.sol");
  const [auditScanExecuted, setAuditScanExecuted] = useState(false);
  const [auditRemediationApplied, setAuditRemediationApplied] = useState(false);

  // Quiz State
  const quizQuestions = QUIZ_QUESTIONS;
  const [userQuizAnswers, setUserQuizAnswers] = useState({});
  const quizScore = useMemo(() => {
    return Object.entries(userQuizAnswers).reduce((acc, [qId, optIdx]) => {
      const q = quizQuestions.find((item) => item.id === parseInt(qId));
      return q && q.answer === optIdx ? acc + 1 : acc;
    }, 0);
  }, [userQuizAnswers, quizQuestions]);

  const handleQuizOptionSelect = useCallback((questionId, optionIndex) => {
    setUserQuizAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex
    }));
  }, []);

  const handleResetQuiz = useCallback(() => {
    setUserQuizAnswers({});
  }, []);

  // Interview Questions Accordion State
  const interviewQuestions = INTERVIEW_QUESTIONS;
  const [expandedInterview, setExpandedInterview] = useState({});
  const toggleInterviewExpand = useCallback((id) => {
    setExpandedInterview((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  }, []);

  // Audit Findings
  const auditFindings = AUDIT_FINDINGS;

  // Checklist State
  const checklistItems = CHECKLIST_ITEMS;
  const [completedObjectives, setCompletedObjectives] = useState(() => {
    try {
      const saved = localStorage.getItem("prepspaces_blockchain_m18_progress");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        "prepspaces_blockchain_m18_progress",
        JSON.stringify(completedObjectives)
      );
    } catch {
      // Ignore write errors
    }
  }, [completedObjectives]);

  const handleToggleObjective = useCallback((id) => {
    setCompletedObjectives((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  }, []);

  const handleResetChecklist = useCallback(() => {
    setCompletedObjectives({});
  }, []);

  const checkedCount = useMemo(() => {
    return Object.values(completedObjectives).filter(Boolean).length;
  }, [completedObjectives]);

  const completionPercentage = useMemo(() => {
    return Math.round((checkedCount / checklistItems.length) * 100);
  }, [checkedCount, checklistItems.length]);

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
            Module 18
          </span>
          <span className="text-xs font-semibold text-neutral-600 truncate max-w-[200px] sm:max-w-xs">
            Smart Contract Security & Auditing
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
            Security Labs
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 space-y-12">
        {/* Module Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
            <Cpu className="w-3.5 h-3.5" />
            <span>ADVANCED BLOCKCHAIN ENGINEERING • SOLIDITY SECURITY & AUDITING TRACK</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            Module 18 — Blockchain Security & Smart Contract Auditing
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl">
            A comprehensive, university-grade study of smart contract auditing, vulnerability exploitation, threat modeling, and formal verification. Dissect classic and novel attack vectors—reentrancy, flash loan oracle manipulation, delegatecall storage collisions, and arithmetic precision errors—and produce professional security audit reports.
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
    findings_json = json.dumps(AUDIT_FINDINGS, indent=2)

    print("Generating code sections...")
    interactive_sims = generate_interactive_simulators()
    theory_sec = generate_theory_sections()
    lab_sec = generate_lab_and_challenges()
    assessment_sec = generate_assessment_sections()
    tracker_sec = generate_tracker_and_footer()

    print("Assembling BlockchainSecurityAuditing.jsx...")
    content = TEMPLATE
    content = content.replace("__DATA_CHECKLIST__", checklist_json)
    content = content.replace("__DATA_QUIZ__", quiz_json)
    content = content.replace("__DATA_INTERVIEWS__", interview_json)
    content = content.replace("__DATA_FINDINGS__", findings_json)

    content = content.replace("__INTERACTIVE_SIMULATORS__", interactive_sims)
    content = content.replace("__THEORY_SECTIONS__", theory_sec)
    content = content.replace("__LAB_AND_CHALLENGES__", lab_sec)
    content = content.replace("__ASSESSMENT_SECTIONS__", assessment_sec)
    content = content.replace("__TRACKER_AND_FOOTER__", tracker_sec)

    out_path = os.path.join(
        os.path.dirname(__file__), "..", "src", "Componets", "BlockchainSecurityAuditing.jsx"
    )
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"Successfully generated {out_path} ({len(content)} characters).")

if __name__ == "__main__":
    main()
