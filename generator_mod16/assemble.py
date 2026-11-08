# projectx/generator_mod16/assemble.py
"""
Assembly script to construct projectx/src/Componets/BlockchainDeFiProtocols.jsx
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
from gen_interactive import generate_interactive
from gen_theory import generate_theory
from gen_lab import generate_lab
from gen_assessment import generate_assessment
from gen_tracker import generate_tracker

TEMPLATE = r'''// projectx/src/Componets/BlockchainDeFiProtocols.jsx
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";

// Data Constants
const CHECKLIST_ITEMS = __DATA_CHECKLIST__;
const QUIZ_QUESTIONS = __DATA_QUIZ__;
const INTERVIEW_QUESTIONS = __DATA_INTERVIEWS__;
const NUMERICAL_PROBLEMS = __DATA_PROBLEMS__;

export default function BlockchainDeFiProtocols() {
  // Navigation Tabs
  const [activeTab, setActiveTab] = useState("theory");

  // Simulator 1 State: Constant Product AMM
  const [ammReserveETH, setAmmReserveETH] = useState(10);
  const [ammReserveUSDC, setAmmReserveUSDC] = useState(20000);
  const [ammDirection, setAmmDirection] = useState("ETH_TO_USDC");
  const [ammAmountIn, setAmmAmountIn] = useState(1);
  const [ammFeeRate, setAmmFeeRate] = useState(0.003);
  const [ammSlippage, setAmmSlippage] = useState(0.5);

  const ammSwapResult = useMemo(() => {
    const rIn = ammDirection === "ETH_TO_USDC" ? ammReserveETH : ammReserveUSDC;
    const rOut = ammDirection === "ETH_TO_USDC" ? ammReserveUSDC : ammReserveETH;
    const amountInWithFee = ammAmountIn * (1 - ammFeeRate);
    const amountOut = (rOut * amountInWithFee) / (rIn + amountInWithFee);

    let spotPrice, effectivePrice, priceImpact;
    if (ammDirection === "ETH_TO_USDC") {
      spotPrice = ammReserveUSDC / ammReserveETH;
      effectivePrice = amountOut / ammAmountIn;
      priceImpact = Math.max(0, ((spotPrice - effectivePrice) / spotPrice) * 100);
    } else {
      spotPrice = ammReserveUSDC / ammReserveETH;
      effectivePrice = ammAmountIn / amountOut;
      priceImpact = Math.max(0, ((effectivePrice - spotPrice) / effectivePrice) * 100);
    }

    const amountOutMin = amountOut * (1 - ammSlippage / 100);
    const newReserveETH =
      ammDirection === "ETH_TO_USDC"
        ? ammReserveETH + ammAmountIn
        : ammReserveETH - amountOut;
    const newReserveUSDC =
      ammDirection === "ETH_TO_USDC"
        ? ammReserveUSDC - amountOut
        : ammReserveUSDC + ammAmountIn;

    return {
      amountOut,
      spotPrice,
      effectivePrice,
      priceImpact,
      amountOutMin,
      newReserveETH: Math.max(0.01, newReserveETH),
      newReserveUSDC: Math.max(1, newReserveUSDC),
    };
  }, [ammReserveETH, ammReserveUSDC, ammDirection, ammAmountIn, ammFeeRate, ammSlippage]);

  const handleExecuteAmmSwap = useCallback(() => {
    setAmmReserveETH(ammSwapResult.newReserveETH);
    setAmmReserveUSDC(ammSwapResult.newReserveUSDC);
  }, [ammSwapResult]);

  const handleResetAmmPool = useCallback(() => {
    setAmmReserveETH(10);
    setAmmReserveUSDC(20000);
    setAmmAmountIn(1);
  }, []);

  // Simulator 2 State: Lending & Liquidation Engine
  const [lendingCollateralAmount, setLendingCollateralAmount] = useState(2.5);
  const [lendingCollateralAsset, setLendingCollateralAsset] = useState("ETH");
  const [lendingCollateralPrice, setLendingCollateralPrice] = useState(2000);
  const [lendingDebtAmount, setLendingDebtAmount] = useState(3000);
  const [lendingLiquidationThreshold, setLendingLiquidationThreshold] = useState(0.80);

  const lendingHealthMetrics = useMemo(() => {
    const collateralValueUSD = lendingCollateralAmount * lendingCollateralPrice;
    const maxBorrowUSD = collateralValueUSD * 0.70;
    const collateralizationRatio =
      lendingDebtAmount > 0 ? (collateralValueUSD / lendingDebtAmount) * 100 : 999;
    const currentLTV =
      collateralValueUSD > 0 ? (lendingDebtAmount / collateralValueUSD) * 100 : 0;
    const healthFactor =
      lendingDebtAmount > 0
        ? (collateralValueUSD * lendingLiquidationThreshold) / lendingDebtAmount
        : 999;
    const liquidationPrice =
      lendingCollateralAmount > 0 && lendingLiquidationThreshold > 0
        ? lendingDebtAmount / (lendingCollateralAmount * lendingLiquidationThreshold)
        : 0;

    return {
      collateralValueUSD,
      maxBorrowUSD,
      collateralizationRatio,
      currentLTV,
      healthFactor,
      liquidationPrice,
      isLiquidatable: healthFactor < 1.0,
    };
  }, [
    lendingCollateralAmount,
    lendingCollateralPrice,
    lendingDebtAmount,
    lendingLiquidationThreshold,
  ]);

  const handleSimulateLiquidation = useCallback(() => {
    if (!lendingHealthMetrics.isLiquidatable) return;
    const debtToRepay = lendingDebtAmount * 0.5;
    const collateralSeizedUSD = debtToRepay * 1.05; // 5% bonus
    const collateralSeizedUnits = collateralSeizedUSD / lendingCollateralPrice;

    setLendingDebtAmount((prev) => Math.max(0, prev - debtToRepay));
    setLendingCollateralAmount((prev) => Math.max(0.01, prev - collateralSeizedUnits));
  }, [lendingHealthMetrics.isLiquidatable, lendingDebtAmount, lendingCollateralPrice]);

  // Simulator 3 State: Impermanent Loss & Yield
  const [ilInitialDeposit, setIlInitialDeposit] = useState(10000);
  const [ilPriceRatio, setIlPriceRatio] = useState(2.0);
  const [ilFeeApy, setIlFeeApy] = useState(15.0);
  const [ilDurationMonths, setIlDurationMonths] = useState(6);

  const ilMetrics = useMemo(() => {
    const vHold =
      ilInitialDeposit * 0.5 * ilPriceRatio + ilInitialDeposit * 0.5;
    const ilRatio =
      ilPriceRatio > 0
        ? (2 * Math.sqrt(ilPriceRatio)) / (1 + ilPriceRatio) - 1
        : 0;
    const vPool = vHold * (1 + ilRatio);
    const ilPercent = Math.abs(ilRatio) * 100;
    const ilDollar = Math.max(0, vHold - vPool);
    const feeEarnings =
      ilInitialDeposit * (ilFeeApy / 100) * (ilDurationMonths / 12);
    const netProfitLoss = vPool + feeEarnings - vHold;

    return {
      vHold,
      vPool,
      ilPercent,
      ilDollar,
      feeEarnings,
      netProfitLoss,
    };
  }, [ilInitialDeposit, ilPriceRatio, ilFeeApy, ilDurationMonths]);

  // Simulator 4 State: Flash Loan Arbitrage
  const [flashBorrowAmount, setFlashBorrowAmount] = useState(100000);
  const [flashDexAPrice, setFlashDexAPrice] = useState(2000);
  const [flashDexBPrice, setFlashDexBPrice] = useState(2030);

  const flashArbitrageResult = useMemo(() => {
    const protocolFee = flashBorrowAmount * 0.0005; // 0.05% Aave fee
    const ethBought = flashDexAPrice > 0 ? flashBorrowAmount / flashDexAPrice : 0;
    const usdcProceeds = ethBought * flashDexBPrice;
    const gasCostUSD = 30; // standard gas cost
    const netProfit = usdcProceeds - flashBorrowAmount - protocolFee - gasCostUSD;

    return {
      protocolFee,
      ethBought,
      usdcProceeds,
      gasCostUSD,
      netProfit,
      isProfitable: netProfit > 0,
    };
  }, [flashBorrowAmount, flashDexAPrice, flashDexBPrice]);

  // Numerical Problems State
  const [openProblemId, setOpenProblemId] = useState(null);

  // Assessment Quiz State
  const [selectedQuizAnswers, setSelectedQuizAnswers] = useState({});
  const [openInterviewId, setOpenInterviewId] = useState(null);

  const handleSelectQuizAnswer = useCallback((qId, optIdx) => {
    setSelectedQuizAnswers((prev) => ({ ...prev, [qId]: optIdx }));
  }, []);

  const handleResetQuiz = useCallback(() => {
    setSelectedQuizAnswers({});
  }, []);

  const quizScore = useMemo(() => {
    return Object.entries(selectedQuizAnswers).reduce((acc, [qId, ansIdx]) => {
      const question = QUIZ_QUESTIONS.find((q) => q.id === qId);
      return question && question.ans === ansIdx ? acc + 1 : acc;
    }, 0);
  }, [selectedQuizAnswers]);

  // Mastery Checklist State (persisted in localStorage)
  const [checklistProgress, setChecklistProgress] = useState(() => {
    try {
      const saved = localStorage.getItem("prepspaces_blockchain_m16_progress");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        "prepspaces_blockchain_m16_progress",
        JSON.stringify(checklistProgress)
      );
    } catch {
      // ignore
    }
  }, [checklistProgress]);

  const handleToggleChecklist = useCallback((idx) => {
    setChecklistProgress((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  }, []);

  const handleMarkAllChecklist = useCallback(() => {
    const all = {};
    CHECKLIST_ITEMS.forEach((_, idx) => {
      all[idx] = true;
    });
    setChecklistProgress(all);
  }, []);

  const handleResetChecklist = useCallback(() => {
    setChecklistProgress({});
  }, []);

  const completedCount = useMemo(() => {
    return Object.values(checklistProgress).filter(Boolean).length;
  }, [checklistProgress]);

  const progressPercentage = useMemo(() => {
    return Math.round((completedCount / CHECKLIST_ITEMS.length) * 100);
  }, [completedCount]);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] pb-28 sm:pb-36 selection:bg-amber-100 selection:text-amber-900">
      {/* Top Banner Navigation */}
      <div className="bg-[#18181b] text-white border-b border-neutral-800 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              to="/learning/blockchain/ipfs-storage"
              className="text-xs text-neutral-400 hover:text-white transition flex items-center gap-1"
            >
              ← Module 15
            </Link>
            <span className="text-neutral-600">|</span>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Module 16: Decentralized Finance (DeFi) Architecture
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-400">Mastery:</span>
            <div className="w-20 bg-neutral-800 rounded-full h-2">
              <div
                className="bg-amber-500 h-2 rounded-full transition-all"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <span className="text-xs font-mono text-amber-400">{progressPercentage}%</span>
          </div>
        </div>
      </div>

      {/* Main Tab Navigation Header */}
      <header className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-700 tracking-wider uppercase">
            <span>PrepSpaces Web3 Curriculum</span>
            <span>•</span>
            <span>Financial Engineering Track</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900">
            Decentralized Finance (DeFi) Architecture
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 max-w-3xl leading-relaxed">
            Master the mathematical invariants, smart contract protocols, and economic security of DeFi.
            Explore automated market makers (x * y = k), pooled lending markets, liquidation engines,
            impermanent loss dynamics, flash loans, and composable money legos.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-[#e7e3da] pb-3 text-xs sm:text-sm">
          {[
            { id: "theory", label: "1. Theory & Architecture" },
            { id: "interactive", label: "2. Live Simulators" },
            { id: "lab", label: "3. Practical Labs & Math" },
            { id: "assessment", label: "4. Knowledge Check & Interviews" },
            { id: "tracker", label: "5. Mastery Tracker & Resources" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl font-semibold transition ${
                activeTab === tab.id
                  ? "bg-neutral-900 text-white shadow-sm"
                  : "bg-white text-neutral-600 hover:text-neutral-900 border border-[#e7e3da]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      {/* Content Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
__THEORY__
__INTERACTIVE__
__LAB__
__ASSESSMENT__
__TRACKER__

        {/* Bottom Pagination & Module Navigation */}
        <div className="pt-8 border-t border-[#e7e3da] flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/learning/blockchain/ipfs-storage"
            className="p-4 rounded-xl border border-[#e7e3da] bg-white hover:border-amber-500 hover:bg-amber-50/20 transition group flex flex-col items-start"
          >
            <span className="text-[11px] uppercase font-bold text-neutral-400 group-hover:text-amber-700">
              ← Previous Module
            </span>
            <span className="text-sm font-bold text-neutral-900 mt-1">
              Module 15: IPFS & Decentralized Storage
            </span>
          </Link>

          <Link
            to="/learning/blockchain/security-vulnerabilities"
            className="p-4 rounded-xl border border-[#e7e3da] bg-white hover:border-amber-500 hover:bg-amber-50/20 transition group flex flex-col items-end text-right"
          >
            <span className="text-[11px] uppercase font-bold text-neutral-400 group-hover:text-amber-700">
              Next Module →
            </span>
            <span className="text-sm font-bold text-neutral-900 mt-1">
              Module 17: Smart Contract Security & Auditing
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
}
'''

def assemble():
    output_path = os.path.join(
        os.path.dirname(os.path.dirname(__file__)),
        "src",
        "Componets",
        "BlockchainDeFiProtocols.jsx"
    )

    data_json_checklist = json.dumps(CHECKLIST_ITEMS, indent=2)
    data_json_quiz = json.dumps(QUIZ_QUESTIONS, indent=2)
    data_json_interviews = json.dumps(INTERVIEW_QUESTIONS, indent=2)
    data_json_problems = json.dumps(NUMERICAL_PROBLEMS, indent=2)

    theory_code = generate_theory()
    interactive_code = generate_interactive()
    lab_code = generate_lab()
    assessment_code = generate_assessment()
    tracker_code = generate_tracker()

    content = TEMPLATE
    content = content.replace("__DATA_CHECKLIST__", data_json_checklist)
    content = content.replace("__DATA_QUIZ__", data_json_quiz)
    content = content.replace("__DATA_INTERVIEWS__", data_json_interviews)
    content = content.replace("__DATA_PROBLEMS__", data_json_problems)
    content = content.replace("__THEORY__", theory_code)
    content = content.replace("__INTERACTIVE__", interactive_code)
    content = content.replace("__LAB__", lab_code)
    content = content.replace("__ASSESSMENT__", assessment_code)
    content = content.replace("__TRACKER__", tracker_code)

    with open(output_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Successfully assembled: {output_path} ({len(content)} chars)")

if __name__ == "__main__":
    assemble()
